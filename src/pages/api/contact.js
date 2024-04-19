import SendEmail from "@/services/emailService";

const handler = async (req, res) => {
  try {
    let body = null;
    if (req.method === "POST") {
      body = req.body;
    }
    //sending the email to the user
    const result = await SendEmail({
      fullName: body.fullName,
      from: body.email,
      location: body.location,
      phone: body.phone,
      message: body.message,
    });
    return res.status(200).json({ message: "Hello from Next.js!", result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
