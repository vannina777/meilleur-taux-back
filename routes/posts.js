const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A POST
router.post("/", async (req, res) => {
  // on transmet le model qu'on a crée à notre bdd
  const post = new Post({
    type: req.body.type,
    etat: req.body.etat,
    usage: req.body.usage,
    situation: req.body.situation,
    country: req.body.city,
    montant: req.body.montant,
    travaux: req.body.travaux,
    notaire: req.body.budget,
    budget: req.body.budget,
    email: req.body.email
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// REMOVE POST
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE POST
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          type: req.body.type,
          etat: req.body.etat,
          usage: req.body.usage,
          situation: req.body.situation,
          country: req.body.city,
          montant: req.body.montant,
          travaux: req.body.travaux,
          notaire: req.body.budget,
          budget: req.body.budget,
          email: req.body.email
        }
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
