const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key" : "3daa1551-9d37-437e-9283-969ca788ba41" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(400).json(500);
    } 
});

app.listen(3001);