import { createOrder } from "@/helpers";

const handler = async (req, res) => {
  try {
    let body = null;
    if (req.method === "POST") {
      body = req.body;
    }
    //sending the email to the user
    const { price } = body;
    const { jsonResponse, httpStatusCode } = await createOrder(price);

    return res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
