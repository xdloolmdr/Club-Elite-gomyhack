const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
const playerRoutes = require("./routes/playerRoutes")
const teamMemberRoutes = require("./routes/teamMemberRoutes")
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(authRoutes)
app.use(playerRoutes)
app.use(teamMemberRoutes)

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(async () => {
    const createAdmin = require('./createAdmin');
    await createAdmin();

    app.listen(process.env.PORT, () => 
      console.log(`Server started on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));