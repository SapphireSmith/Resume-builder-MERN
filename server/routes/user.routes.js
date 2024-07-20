import express from 'express';
import { getProfile, updatePassword, accountDelete } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile", getProfile)
router.post("/update-password", updatePassword)
router.post("/account-delete", accountDelete)


export default router;