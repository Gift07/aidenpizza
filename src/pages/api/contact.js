import SendEmail from "@/services/emailService";
import Twilio from "twilio";

const handler = async (req, res) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    //creating twilio client
    const client = Twilio(accountSid, authToken);

    let body = null;
    if (req.method === "POST") {
      body = req.body;
    }
    const { cart, price, user, orderId } = body;
    //sending the email to the user
    const result = await SendEmail({
      fullName: user.name,
      from: user.email,
      location: user.location,
      phone: user.phone,
      message: `You've got a new order from`,
    });

    //sending sm to the user

    client.messages
      .create({
        body: `Your order has been received with the order id ${orderId}`,
        from: "+255757644216",
        to: user.phone,
      })
      .then((message) => console.log(message.sid));

    return res.status(200).json({ message: "Hello from Next.js!", result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
