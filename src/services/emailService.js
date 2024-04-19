import nodemailer from "nodemailer";

const createTemplate = ({
  fullName,
  phoneNumber,
  email,
  location,
  header,
  body,
}) => {
  return `<div style="background-color: lightblue; padding: 10px; color: #333; font-weight: bold;">
    Sender Name: ${fullName}<br>
    Email: ${email}<br>
    Phone: ${phoneNumber}<br>
    Location: ${location}
  </div>
  <div style="background-color: white; padding: 20px;">
    <h2 style="font-size: 18px; margin-bottom: 10px;">${header}</h2>
    <p>${body}</p>
  </div>`;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bethehealthcare@gmail.com",
    pass: "xrvw afmv fdmt sijh",
  },
});

async function SendEmail({ fullName, from, location, phone, message }) {
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Bethesda App 👻" <${from}>', // sender address
    to: "bethehealthcare@gmail.com", // list of receivers
    subject: "Message from Bethesda Website ✔", // Subject line
    html: createTemplate({
      fullName,
      phoneNumber: phone,
      email: from,
      location,
      header: "Message from Bethesda Health care Website",
      body: message,
    }), // html body
  });

  return info;
}

export default SendEmail;
