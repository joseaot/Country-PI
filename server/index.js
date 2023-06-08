const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { LoadDB } = require('./loadDB/LoadDB')


conn.sync({ force: false }).then(() => {
server.listen(PORT, async() => {
  LoadDB()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
