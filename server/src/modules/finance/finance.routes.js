const express = require("express");

const financeController = require("./finance.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth("admin"), financeController.createFinanceRecord);

router.get("/", auth("admin"), financeController.getAllFinanceRecords);

router.get("/:id", auth("admin"), financeController.getSingleFinanceRecord);

router.patch(
  "/installment/:id",
  auth("admin"),
  financeController.addInstallment,
);

module.exports = router;
