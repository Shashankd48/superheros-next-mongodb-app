import dbConnect from "../../../db/dbConnect";
import HeroSchema from "../../../models/HeroSchema";

dbConnect();

// get all Heros

export default async (req, res) => {
   const { method } = req;

   switch (method) {
      case "GET":
         try {
            const heros = await HeroSchema.find();
            return heros.length > 0
               ? res.status(200).json({ error: false, heros })
               : res
                    .status(404)
                    .json({ error: true, message: "No heros found!" });
         } catch (error) {
            return res
               .status(400)
               .json({ error: true, message: "Somthing went wrong!" });
         }

      case "POST":
         try {
            const hero = await HeroSchema.create(req.body);
            return hero
               ? res.status(200).json({ error: false, hero })
               : res
                    .status(400)
                    .json({ error: true, message: "Failed to add hero." });
         } catch (error) {
            return res
               .status(400)
               .json({ error: true, message: "Somthing went wrong!" });
         }

      default:
         return res.status(404).json({ error: true, message: "Not found!" });
   }
};
