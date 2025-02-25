require("dotenv").config();
const app = require("./middlewares/app");

const PORT = process.env.PORT || 7500;

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});
