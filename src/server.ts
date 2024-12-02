import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

import { getEnv } from "./server/utils/getEnv";
import { initReactEntry } from "./server/middleware/initReactEntry";

import routes from "./server/routes";

const environment = getEnv();
const port = process.env.PORT || 5173;

dotenv.config({ path: `.env.${environment}` });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// This is one of the final steps in the server setup due to the *all route
initReactEntry(app);

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
