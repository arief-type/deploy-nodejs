import express from "express";
import db from "./utils/database";
import routes from "./routes";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = process.env.APP_PORT || 3000;

db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);
app.use(express.static(path.join(__dirname, "../public")));
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
