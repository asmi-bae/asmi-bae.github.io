import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import type { Plugin, UserConfig } from 'vite';

const projectRoot = resolve(__dirname);
const sourceDataFile = resolve(projectRoot, 'data/portfolio.json');
const publicDataFile = resolve(projectRoot, 'public/data.json');

function copyPortfolioDataToPublic(): void {
  if (existsSync(sourceDataFile)) {
    mkdirSync(dirname(publicDataFile), { recursive: true });
    copyFileSync(sourceDataFile, publicDataFile);
  }
}

export function syncPortfolioDataPlugin(): Plugin {
  return {
    name: 'sync-portfolio-data',
    configResolved() {
      copyPortfolioDataToPublic();
    },
    closeBundle() {
      const distDir = resolve(projectRoot, 'dist');
      const distDataFile = join(distDir, 'data.json');
      if (existsSync(sourceDataFile) && existsSync(distDir)) {
        copyFileSync(sourceDataFile, distDataFile);
      }
    },
  };
}

export function dropConsoleInProduction(): Plugin {
  return {
    name: 'drop-console-in-production',
    apply: 'build',
    config() {
      return {
        build: {
          rolldownOptions: {
            output: {
              minify: {
                compress: {
                  dropConsole: true,
                  dropDebugger: true,
                },
              },
            },
          },
        },
      } as UserConfig;
    },
  };
}
