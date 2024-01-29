import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files/fileToRead.txt");

export const read = async () => {
  const readableStream = fs.createReadStream(filePath, "utf-8");
  readableStream.pipe(process.stdout);
};

read();
