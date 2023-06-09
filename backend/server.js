const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
const profileRouter = require("./routes/Profile");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

mongoose
  .connect(
    `mongodb+srv://rohanmrzan100:${process.env.MONGODB_PW}@cluster0.8eze3i1.mongodb.net/devconnect`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    const port = process.env.port || 3001;
    app.listen(3001, () => {
      console.log(`APP is running on port ${port}`);
    });
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));
