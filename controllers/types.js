const express = require("express");
const verifyToken = require("../middlewares/verify-token.js");
const router = express.Router();
const { Type } = require("../models");

router.get("/", async (req, res) => {
  try {
    const types = await Type.find({})
      .populate("craftType")
      .sort({ createdAt: -1 });
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:typeId", async (req, res) => {
  try {
    const type = await Type.findById(req.params.typeId).populate("craftType");
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const type = await Type.create(req.body);
    res.status(201).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:typeId", async (req, res) => {
  try {
    const type = await Type.findByIdAndUpdate(req.params.typeId, req.body, {
      new: true,
    });
    res.status(200).json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:typeId", async (req, res) => {
  try {
    await Type.findByIdAndDelete(req.params.typeId);
    res.status(200).json({ message: "Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
