import { createOrderTemplate } from "@/helpers";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bethehealthcare@gmail.com",
    pass: "xrvw afmv fdmt sijh",
  },
});

async function SendEmail({
  fullName,
  from,
  location,
  phone,
  message,
  cartItems,
  totalPrice,
}) {
  try {
    const info = await transporter.sendMail({
      from: `"Bethesda App 👻" <${from}>`, // sender address
      to: "bethehealthcare@gmail.com", // list of receivers, adjust this as necessary
      subject: "New Order from Bethesda Website ✔", // Subject line
      html: createOrderTemplate({
        fullName,
        phoneNumber: phone,
        email: from,
        location,
        header: "New Order from Bethesda Health Care Website",
        message,
        cartItems,
        totalPrice,
      }), // html body
    });

    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export default SendEmail;
