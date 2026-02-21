import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src1 = "C:\\Users\\tehno\\.gemini\\antigravity\\brain\\31e7c038-cd2e-403c-afb1-b24a12965643\\ecommerce_hero_product_1771695606208.png";
const src2 = "C:\\Users\\tehno\\.gemini\\antigravity\\brain\\31e7c038-cd2e-403c-afb1-b24a12965643\\smart_watch_premium_1771695620166.png";

const dest1 = path.join(__dirname, 'public', 'hero_product.png');
const dest2 = path.join(__dirname, 'public', 'smart_watch.png');

try {
    fs.copyFileSync(src1, dest1);
    console.log('Copied hero_product.png');
    fs.copyFileSync(src2, dest2);
    console.log('Copied smart_watch.png');
} catch (err) {
    console.error('Error copying files:', err);
}
