import puppeteer from 'puppeteer-core'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const ads = [
  { svg: 'ad-landscape.svg', png: 'ad-landscape.png', width: 1200, height: 628 },
  { svg: 'ad-square.svg', png: 'ad-square.png', width: 1200, height: 1200 },
]

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const ad of ads) {
  const page = await browser.newPage()
  await page.setViewport({ width: ad.width, height: ad.height, deviceScaleFactor: 1 })

  const svgContent = fs.readFileSync(path.join(publicDir, ad.svg), 'utf-8')
  const html = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0;}body{width:${ad.width}px;height:${ad.height}px;overflow:hidden;}</style></head><body>${svgContent}</body></html>`

  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.screenshot({ path: path.join(publicDir, ad.png), type: 'png' })
  console.log(`Rendered ${ad.png} (${ad.width}x${ad.height})`)
  await page.close()
}

await browser.close()
