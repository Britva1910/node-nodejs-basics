import { rename as changeName } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldFile = `${__dirname}/files/wrongFilename.txt`;
  const newFile = `${__dirname}/files/properFilename.md`;
  const msgError = "FS operation failed";

  try {
    await changeName(oldFile, newFile);
  } catch (err) {
    throw new Error(msgError);
  }
};

await rename();
