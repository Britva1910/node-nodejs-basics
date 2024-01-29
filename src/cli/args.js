export const parseArgs = () => {
  const arrData = process.argv.slice(2);
  const result = [];
  arrData.forEach((item, index) => {
    if (item.slice(0, 2) === "--") {
      result.push(`${item.slice(2)} is ${arrData[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};
parseArgs();
