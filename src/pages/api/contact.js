import SendEmail from "@/services/emailService";
import Twilio from "twilio";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { cart, price, user, orderId } = req.body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = Twilio(accountSid, authToken);

    const result = await SendEmail({
      fullName: user.name,
      from: user.email,
      location: user.location,
      phone: user.phone,
      message: `You've got a new order from ${user.name}`,
      cartItems: cart,
      totalPrice: price,
    });

    return res
      .status(200)
      .json({ message: "Order processed successfully", result });
  } catch (error) {
    console.error("Error processing order:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
