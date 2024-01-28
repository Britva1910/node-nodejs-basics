import { rm } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const src = `${__dirname}/files/fileToRemove.txt`;
  const msgError = "FS operation failed";

  try {
    await rm(src);
  } catch (err) {
    throw new Error(msgError);
  }
};

await remove();
