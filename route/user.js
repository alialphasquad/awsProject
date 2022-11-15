"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../controller/user");
const router = express.Router();
router.route("/create").post(user_1.createUser);
router.route("/get").get(user_1.getUser);
router.route("/update/:id").put(user_1.updateUser);
router.route("/delete/:id").delete(user_1.deleteUser);
exports.default = router;