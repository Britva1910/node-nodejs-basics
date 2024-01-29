import { readdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const src = `${__dirname}/files`;
  const msgError = "FS operation failed";

  try {
    const filesNames = await readdir(src);
    console.log(filesNames);
  } catch (err) {
    throw new Error(msgError);
  }
};

await list();
