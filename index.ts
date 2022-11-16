const express = require("express");
import userRoute from "./route/user";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let port =process.env.PORT || 5000;
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoute);
app.get('/', (req: any, res: any) => {
  res.send('Server running!');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  console.log("yo");
});
