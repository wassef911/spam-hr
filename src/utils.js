const sgMail = require("@sendgrid/mail");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const send = ({ to, subject, text }) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to,
            from: process.env.MY_EMAIL,
            subject,
            text
        };
        await sgMail.send(msg);
        // C-- walle ? 5it...
        console.log("email was sent : std::cout <<", to);
    } catch (error) {
        console.log(error.response.body);
    }
};

const composeAsync = async (arr, fn) => {
  const ids = [];
  let id;
  for (let index = 0; index < arr.length; index++) {
    id = await fn(arr[index]);
    ids.push(id);
  }
  return ids;
};

module.exports = { composeAsync,send };
