import express from "express";
import { verifyToken } from "../middleware/auth.js";
// ,,removeUserFriend
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controller/users.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/*UPDATE */

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
