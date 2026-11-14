Add-Type -AssemblyName System.Drawing

function Optimize-SingleImage {
    param (
        [string]$Path,
        [int]$Quality = 80,
        [int]$MaxWidth = 800
    )

    if (-not (Test-Path $Path)) { return }

    $origBytes = [System.IO.File]::ReadAllBytes($Path)
    $origLength = $origBytes.Length

    $msIn = [System.IO.MemoryStream]::new($origBytes)
    $img = [System.Drawing.Image]::FromStream($msIn)

    $w = $img.Width
    $h = $img.Height

    if ($MaxWidth -gt 0 -and $w -gt $MaxWidth) {
        $scale = $MaxWidth / $w
        $w = [int]($w * $scale)
        $h = [int]($h * $scale)
    }

    $newImg = [System.Drawing.Bitmap]::new($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($newImg)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.DrawImage($img, 0, 0, $w, $h)

    $g.Dispose()
    $img.Dispose()
    $msIn.Dispose()

    $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    $jpegCodec = $null
    foreach ($c in $codecs) {
        if ($c.MimeType -eq 'image/jpeg') {
            $jpegCodec = $c
            break
        }
    }

    $encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
        [System.Drawing.Imaging.Encoder]::Quality,
        [long]$Quality
    )

    $msOut = [System.IO.MemoryStream]::new()
    $newImg.Save($msOut, $jpegCodec, $encoderParams)
    $newImg.Dispose()
    $encoderParams.Dispose()

    $newBytes = $msOut.ToArray()
    $msOut.Dispose()

    if ($newBytes.Length -lt $origLength) {
        [System.IO.File]::WriteAllBytes($Path, $newBytes)
        $saved = [math]::Round(($origLength - $newBytes.Length) / 1024, 1)
        $newKb = [math]::Round($newBytes.Length / 1024, 1)
        Write-Host "Optimized: $Path -> ${newKb}KB (Saved ${saved}KB)"
    } else {
        Write-Host "Kept original: $Path"
    }
}

# 1. Optimize Profile photo (Hero)
Optimize-SingleImage -Path "public/images/profile.jpg" -Quality 82 -MaxWidth 640

# 2. Optimize About photo
Optimize-SingleImage -Path "public/images/about/about.jpeg" -Quality 82 -MaxWidth 640

# 3. Optimize Project card photos
$projects = Get-ChildItem -Path "public/images/projects" -Filter "*.jpg"
foreach ($p in $projects) {
    Optimize-SingleImage -Path $p.FullName -Quality 80 -MaxWidth 800
}

$projectsJpeg = Get-ChildItem -Path "public/images/projects" -Filter "*.jpeg"
foreach ($p in $projectsJpeg) {
    Optimize-SingleImage -Path $p.FullName -Quality 80 -MaxWidth 800
}

Write-Host "Image optimization complete!"

