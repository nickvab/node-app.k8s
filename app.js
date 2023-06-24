const express = require('express')
const app = express()
const port = process.env.PORT | 8080

require('./metrics.js')(app)

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get("/", async (req, res) => {
  const time = randomIntFromInterval(1, 1000);

  await sleep(time)

  res.status(200).send({ "delay(ms)": time });
  console.log(`delay: ${time}`)
});
app.disable('etag')
app.listen(port, () => console.log(`Service listening on port ${port}!`))

module.exports = app
