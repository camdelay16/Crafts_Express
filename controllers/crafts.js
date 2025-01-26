const express = require("express");
const verifyToken = require("../middlewares/verify-token.js");
const router = express.Router();
const { Craft } = require("../models");

router.get("/", async (req, res) => {
  try {
    const crafts = await Craft.find({})
      .populate("craftName")
      .sort({ createdAt: -1 });
    res.status(200).json(crafts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:craftId", async (req, res) => {
  try {
    const craft = await Craft.findById(req.params.craftId).populate(
      "craftName"
    );
    res.status(200).json(craft);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.use(verifyToken);

router.post("/", async (req, res) => {
  try {
    req.body.author = req.user._id;
    const craft = await Craft.create(req.body);
    craft._doc.author = req.user;
    res.status(201).json(craft);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:craftId", async (req, res) => {
  try {
    const craft = await Craft.findByIdAndUpdate(req.params.craftId, req.body, {
      new: true,
    });
    res.status(200).json(craft);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:craftId", async (req, res) => {
  try {
    const craft = await Craft.findById(req.params.craftId);
    if (craft.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    const deletedCraft = await Craft.findByIdAndDelete(req.params.craftId);
    res.status(200).json(deletedCraft);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
