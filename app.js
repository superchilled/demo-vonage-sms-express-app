const express = require('express');
const bodyParser = require('body-parser');
const Vonage = require('@vonage/server-sdk');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('sms');
});

app.get('/sms', (req, res) => {
  res.render('sms');
});

app.post('/sms', (req, res) => {
  const vonage = new Vonage({
    apiKey: apiKey,
    apiSecret: apiSecret
  });
  let toNumber = req.body.number;
  let message = req.body.message;
  vonage.message.sendSms('Vonage', toNumber, message, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
  });
  res.render('sms');
});


app.listen(3000, () => {
  console.log("Listening on port 3000.");
});