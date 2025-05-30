import { Router } from "express";
import { getAllAlbums } from "../controller/album.controller.js";
import { getAlbumById } from "../controller/album.controller.js";

const router = Router();

router.get("/",  getAllAlbums);
router.get("/:albumId", getAlbumById);
// router.post("/", createAlbum);
// router.put("/:id", updateAlbum);
// router.delete("/:id", deleteAlbum);



export default router;