import dbConnect from "../../../db/dbConnect";
import HeroSchema from "../../../models/HeroSchema";

dbConnect();

// get a unique record

export default async (req, res) => {
   const {
      method,
      query: { id },
   } = req;

   switch (method) {
      case "GET":
         try {
            const hero = await HeroSchema.findById(id);

            return hero
               ? res.status(200).json({ error: false, hero })
               : res
                    .status(400)
                    .json({ error: true, message: "Hero not found!", hero });
         } catch (error) {
            return res
               .status(500)
               .json({ error: true, message: "Somthing went wrong!" });
         }

      case "PUT":
         try {
            const hero = await HeroSchema.findByIdAndUpdate(id, req.body, {
               new: true,
               runValidators: true,
            });

            return hero
               ? res.status(200).json({ error: false, hero })
               : res.status(400).json({
                    error: true,
                    message: "Failed to update hero",
                    hero,
                 });
         } catch (error) {
            return res
               .status(500)
               .json({ error: true, message: "Somthing went wrong!" });
         }

      case "DELETE":
         try {
            const hero = await HeroSchema.deleteOne({ _id: id });

            return hero.deletedCount
               ? res.status(200).json({ error: false, hero })
               : res.status(400).json({
                    error: true,
                    message: "Failed to delete hero!",
                    hero,
                 });
         } catch (error) {
            return res
               .status(500)
               .json({ error: true, message: "Somthing went wrong!" });
         }

      default:
         return res.status(404).json({ error: true, message: "Not found!" });
   }
};
