import menus from "@/data/menus.json";

const handler = async (req, res) => {
  try {
    //sending the email to the user
    return res.status(200).json({ data: menus.Menu });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
