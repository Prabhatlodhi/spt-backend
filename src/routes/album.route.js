import { Router } from "express";

const router = Router();

router.get("/",  getAllAlbums);
router.get("/:albumId", getAlbumById);
// router.post("/", createAlbum);
// router.put("/:id", updateAlbum);
// router.delete("/:id", deleteAlbum);

export default router;