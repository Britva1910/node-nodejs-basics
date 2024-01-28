import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files/fileToCompress.txt");
const archivePath = path.join(__dirname, "files/archive.gz");

export const compress = async () => {
  const gzip = zlib.createGzip();
  const inp = fs.createReadStream(filePath);
  const out = fs.createWriteStream(archivePath);

  inp.pipe(gzip).pipe(out);
};

compress();
