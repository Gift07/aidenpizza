import menus from "@/data/menus.json";
import { isEmpty } from "lodash";

const handler = async (req, res) => {
  try {
    const { status } = req.query;
    let result = null;
    if (status === "own-pizza") {
      const pizzas = menus.Menu["OWN PIZZA"];
      result = pizzas;
    } else if (isEmpty(status)) {
      const popularItems = menus.Menu["POPULAR ITEMS"];
      const pizzas = menus.Menu["GOURMET PIZZA"];
      result = [...popularItems, ...pizzas];
    }

    // Returning only "Popular Items" as the JSON response
    return res.status(200).json({ data: result });
    //sending the email to the user
  } catch (error) {
    console.log("the error", error);
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
