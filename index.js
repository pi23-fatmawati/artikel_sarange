const express = require("express");
const app = express();
const port = 3030;

const { errorHandler } = require("./middleware");
const articleRoutes = require("./routes/articleRoutes");

app.use(express.json());
app.use("/", articleRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
