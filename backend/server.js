 require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Smart College API Running..."
  });
});

// Routes
 app.use("/api/fees", require("./routes/feeRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/teacher", require("./routes/teacherRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));   // ✅ Added
app.use("/api/marks", require("./routes/marksRoutes"));             // ✅ Added
app.use("/api/ai", require("./routes/aiRoutes"));                   // ✅ AI Helpdesk Added

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
