import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";
// import { getAdmin } from "../controller/admin.controller.js";

const router = Router();

// router.get("/", protectRoute, requireAdmin, getAllUsers);
router.get("/", protectRoute, requireAdmin, getAllUsers);

export default router;
