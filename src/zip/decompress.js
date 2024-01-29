import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files/fileToCompress.txt");
const archivePath = path.join(__dirname, "files/archive.gz");

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const inp = fs.createReadStream(archivePath);
  const out = fs.createWriteStream(filePath);

  inp.pipe(unzip).pipe(out);
};

await decompress();
