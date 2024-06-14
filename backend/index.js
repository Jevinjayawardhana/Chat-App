const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure Axios is installed

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "edc16216-8ef2-4878-8af7-97946ab2ca52" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    // Add a fallback in case e.response is undefined
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error('Error making request:', e);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
