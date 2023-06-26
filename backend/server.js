// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
const projectsRoutes = require("./routes/projects.routes");

const app = express();
app.use(cookieParser());
app.use(
   cors({
      origin: "http://localhost:8080",
      credentials: true,
   })
);


// ROUTES
app.use("/api/projects", projectsRoutes);

app.listen(process.env.PORT, () => {
   console.log(`Server is listening on port ${process.env.PORT}`);
});
