import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

console.log("Database file...");
getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options,
  });
});
