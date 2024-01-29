export const parseEnv = () => {
  const result = [];
  const arrKeysAndValues = Object.entries(process.env);
  arrKeysAndValues.forEach((items) => {
    if (items[0].slice(0, 4) === "RSS_") {
      result.push(`${items[0]}=${items[1]}`);
    }
  });
  console.log(result.join("; "));
};

parseEnv();
