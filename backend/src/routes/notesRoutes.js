import express from "express";
import {
  getAllNotes,
  createSingleNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createSingleNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
