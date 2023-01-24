import express from "express";

const router = express.Router();

import * as auth from "../controllers/auth.js";

router.get("/", auth.welcome);
router.post("/pre-register", auth.preRegister);
router.post("/register", auth.register);

export default router;
