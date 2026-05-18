const express = require("express");

const financeController = require("./finance.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const {
  createFinanceValidationSchema,
  installmentValidationSchema,
} = require("./finance.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createFinanceValidationSchema),
  financeController.createFinanceRecord,
);

router.get("/", auth("admin"), financeController.getAllFinanceRecords);

router.get("/:id", auth("admin"), financeController.getSingleFinanceRecord);

module.exports = router;
