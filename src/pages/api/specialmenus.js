import menus from "@/data/menus.json";

const handler = async (req, res) => {
  try {
    const popularItems = menus.Menu["POPULAR ITEMS"];
    const pizzas = menus.Menu["GOURMET PIZZA"];
    const result = [...popularItems, ...pizzas];

    // Returning only "Popular Items" as the JSON response
    return res.status(200).json({ data: result });
    //sending the email to the user
  } catch (error) {
    console.log("the error", error);
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
