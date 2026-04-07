import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { run } from 'react-snap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const urlsPath = path.resolve(__dirname, '../public/urls.txt');
const chromePath = process.env.CHROME_BIN || '/usr/bin/google-chrome';

if (!fs.existsSync(urlsPath)) {
  throw new Error(`Missing ${urlsPath}. Run generate-sitemap first.`);
}

const lines = fs
  .readFileSync(urlsPath, 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);

const include = Array.from(
  new Set(
    lines
      .map((line) => {
        try {
          return new URL(line).pathname;
        } catch {
          return null;
        }
      })
      .filter((pathname) =>
        pathname
        && (
          pathname === '/'
          || pathname.startsWith('/calculator/')
          || pathname.startsWith('/salary/')
        )
      )
  )
);

console.log(`Prerendering ${include.length} calculator routes...`);

await run({
  source: 'dist',
  include,
  crawl: false,
  skipThirdPartyRequests: true,
  puppeteerExecutablePath: fs.existsSync(chromePath) ? chromePath : undefined,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
});
