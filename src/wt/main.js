import { Worker } from "worker_threads";
import os from "os";

const createWorker = (num) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", { workerData: num });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
};

export const performCalculations = async () => {
  const countCPU = os.cpus().length;
  let arrWorkers = [];

  for (let i = 0; i < countCPU; i++) {
    arrWorkers.push(createWorker(i + 10));
  }

  return Promise.all(arrWorkers);
};

console.log(await performCalculations());
