import { fork } from "child_process";

export const spawnChildProcess = async (args) => {
  if (process.argv[2]) args = process.argv.slice(2);

  const childProcess = fork("./src/cp/files/script.js", [args], {
    silent: true,
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess([1, 2]);
