import express from 'express';
import {  } from '../controllers/post.js';

const router = express.Router();

router.get("", (req, res) => {
  res.send("Rota funcionando");
});

export default router;