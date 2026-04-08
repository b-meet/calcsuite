import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { run } from 'react-snap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const urlsPath = path.resolve(__dirname, '../public/urls.txt');
const distPath = path.resolve(__dirname, '../dist');
const chromePath = process.env.CHROME_BIN || '/usr/bin/google-chrome';
const prerenderMarker = path.resolve(distPath, '200.html');
const notFoundRoutePath = path.resolve(distPath, '404/index.html');
const notFoundHtmlPath = path.resolve(distPath, '404.html');
const notFoundDirectory = path.resolve(distPath, '404');

if (!fs.existsSync(urlsPath)) {
  throw new Error(`Missing ${urlsPath}. Run generate-sitemap first.`);
}

if (fs.existsSync(prerenderMarker)) {
  fs.unlinkSync(prerenderMarker);
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
      .filter(Boolean)
  )
);

include.push('/404');

console.log(`Prerendering ${include.length} routes...`);

await run({
  source: 'dist',
  include,
  crawl: false,
  skipThirdPartyRequests: true,
  puppeteerExecutablePath: fs.existsSync(chromePath) ? chromePath : undefined,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
});

if (fs.existsSync(notFoundRoutePath)) {
  fs.copyFileSync(notFoundRoutePath, notFoundHtmlPath);
  fs.rmSync(notFoundDirectory, { recursive: true, force: true });
}
