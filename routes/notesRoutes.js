import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send("you fetched some notes");
});

router.post("/", (req,res) => {
    res.status(201).json({message:"You have posted a note"});
});

router.put("/:id", (req,res) => {
    res.status(201).json({message:"You have updated a note"});
});

router.delete("/:id", (req,res) => {
    res.status(200).json({message:"You have deleted a note"});
});

export default router;


