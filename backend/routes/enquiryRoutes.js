import express from "express";

import {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
  updateEnquiryStatus
} from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/", createEnquiry);

router.get("/", getEnquiries);

router.delete("/:id", deleteEnquiry);

router.put("/:id", updateEnquiryStatus);

export default router;