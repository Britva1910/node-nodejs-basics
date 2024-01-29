import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files/fileToWrite.txt");

export const write = async () => {
  const writableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writableStream);
};

write();
