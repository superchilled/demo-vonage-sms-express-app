# README

This is a demo app for sending an SMS via the [Vonage SMS API](https://developer.vonage.com/messaging/sms/overview) using the [Vonage Node SDK](https://github.com/Vonage/vonage-node-sdk)

**Note:** this app is not intended for production use.

To use the app locally:

1. Clone the repo

```
git clone https://github.com/superchilled/demo-vonage-sms-express-app.git
```

2. Install the dependencies

```
npm install
```

3. Create a [Vonage developer account](https://dashboard.nexmo.com/sign-up) to get your API key and secret

4. Create a `.env` file in the root of the project and add your API key and secret in the following format (replacing the values with your own API key and secret):

```
VONAGE_API_KEY=abc123
VONAGE_API_SECRET=ab12CD34xyz
```

5. Start the Express server

```
node app.js
```

6. Navigate to port 3000 on localhost in your browser: http://localhost:3000/
