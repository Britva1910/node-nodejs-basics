import { createReadStream } from "fs";
const { createHash } = await import("crypto");

const calculateHash = async () => {
  try {
    const hash = createHash("sha256");
    const input = createReadStream("src/hash/files/fileToCalculateHashFor.txt");
    input.pipe(hash).setEncoding("hex").pipe(process.stdout);
  } catch (err) {
    throw err;
  }
};

await calculateHash();
