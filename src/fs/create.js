import { writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const srcToFile = `${__dirname}/files/fresh.txt`;
  const messageError = "FS operation failed";
  const messageSuccess = "I am fresh and young";

  try {
    await writeFile(srcToFile, messageSuccess, { flag: "wx" });
    console.log("File written successfully");
  } catch (error) {
    throw new Error(messageError);
  }
};

await create();
