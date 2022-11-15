const express = require("express");
import {createUser,getUser,updateUser,deleteUser} from '../controller/user';
const router = express.Router();

router.route("/create").post(createUser);
router.route("/get").get(getUser);
router.route("/update/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);

export default router;
