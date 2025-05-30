import { Router } from "express";
// import { getAdmin } from "../controller/admin.controller.js";

const router = Router();

router.get("/", (req, res) => {
  req.auth.userId
  req.send("User route with Get method")
});

export default router;
