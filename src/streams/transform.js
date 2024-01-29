import { Transform, pipeline } from "stream";

const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
  const transform = new Transform({
    transform(chank, encoding, callback) {
      const chankStringifies = chank.toString().trim();
      const reverseChunk = chankStringifies.split("").reverse().join("");
      callback(null, reverseChunk + "\n");
    },
  });
  pipeline(readable, transform, writable, (err) => console.log(err));
};

await transform();
