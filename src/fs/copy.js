import { mkdir, readdir, copyFile } from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const src = `${__dirname}/files`;
  const destination = `${__dirname}/files_copy`;
  const msgError = "FS operation failed";

  try {
    await mkdir(destination);
    const fileFromDir = await readdir(src);
    fileFromDir.map((item) =>
      copyFile(`${src}/${item}`, `${destination}/${item}`)
    );
  } catch (err) {
    throw new Error(msgError);
  }
};

copy();
