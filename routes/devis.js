const express = require("express");
const router = express.Router();

// On importe le model
const Devis = require("../models/Devis");

// READ
router.get("/devis", async (req, res) => {
  let allDevis = await Devis.find();
  res.json(allDevis);
});

// CREATE
router.post("/devis/create", async (req, res) => {
  try {
    const newDevis = new Devis({
      habitation: req.body.habitation,
      construction: req.body.construction,
      usage: req.body.usage,
      situation: req.body.situation,
      country: req.body.country,
      city: req.body.city,
      amount: req.body.amount,
      build: req.body.build,
      notary: req.body.notary,
      totalAmount: req.body.totalAmount,
      email: req.body.email
    });
    await newDevis.save();
    res.send("Devis Created");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

// UPDATE
router.patch("/devis/update/:id", async (req, res) => {
  try {
    const updatedDevis = await Devis.updateOne(
      { _id: req.params.id },
      {
        $set: {
          habitation: req.body.habitation,
          construction: req.body.construction,
          usage: req.body.usage,
          situation: req.body.situation,
          country: req.body.country,
          city: req.body.city,
          amount: req.body.amount,
          build: req.body.build,
          notary: req.body.notary,
          totalAmount: req.body.totalAmount,
          email: req.body.email
        }
      }
    );
    res.json("Devis updated");
  } catch (error) {
    res.json({ message: error });
  }
});

// DELETE
router.delete("/devis/delete/:id", async (req, res) => {
  try {
    const removedDevis = await Devis.remove({ _id: req.params.id });
    res.json("Devis deleted");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
