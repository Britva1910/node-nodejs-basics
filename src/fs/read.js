import { readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const src = `${__dirname}/files/fileToRead.txt`;
  const msgError = "FS operation failed";

  try {
    const fileContent = await readFile(src, "utf-8");
    console.log(fileContent);
  } catch (err) {
    throw new Error(msgError);
  }
};

await read();
