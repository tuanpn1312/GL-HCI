const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const supportEmailTransport = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "botgearlap@gmail.com",
      pass: "DucManh1402$",
    },
  })
);

module.exports.sendSupportEmail = async (emailData) => {
  await supportEmailTransport.sendMail({
    from: '"Gearlap - Support" <botgearlap@gmail.com>',
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.body,
  });
  console.log("sent");
};
