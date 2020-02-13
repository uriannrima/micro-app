import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.listen(8080, () => {
  console.log("Static server listening on port 8080");
});
