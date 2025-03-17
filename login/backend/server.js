import express from "express";
// import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3100;

// Enable CORS with credentials for a specific origin (your frontend's origin)
app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from the frontend origin
    methods: "GET,POST", // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, headers)
  })
);

app.use(express.json());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    res.json(data); // Send data back to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
