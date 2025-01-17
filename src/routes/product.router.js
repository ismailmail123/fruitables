const express = require("express");

const router = express.Router();
const { storage } = require("../storage/storage");
const multer = require("multer");

const upload = multer({ storage: storage });

const { validateToken } = require("../middlewares/auth");
const {
  index,
  show,
  create,
  remove,
  update,
} = require("../controllers/product.controller");

// /api/babs
router.get("/", validateToken, index);
router.get("/:id", validateToken, show);
router.post("/", validateToken, upload.single("img_url"), create);
router.delete("/:productId", validateToken, remove);
router.put("/:productId", validateToken, upload.single("img_url"), update);

module.exports = router;
