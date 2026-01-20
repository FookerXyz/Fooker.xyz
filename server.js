
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

// Melayani file statis dari folder dist hasil build Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Menangani routing SPA: arahkan semua request ke index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Fooker Web Service running on port ${port}`);
});
