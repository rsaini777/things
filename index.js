const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established succsesfully");
});

//ROUTEs
const studentroute = require("./routes/student");
app.use("/api", studentroute);

const societyroute = require("./routes/society");
app.use("/api", societyroute);

const subjectsroute = require("./routes/subjects");
app.use("/api", subjectsroute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
