const express = require("express")
const app = express();
const all_articles = require("./routes/articles");
const port = 3000;

app.use(express.json());

app.use("/articles", all_articles);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
