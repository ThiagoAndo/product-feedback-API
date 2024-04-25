import { collections } from "../services/database.service";
import { Read } from "../models/CRUDE";
import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";
import { type mongoRet } from "../models/CRUDE";
export async function readDocument(action: Read) {
  let data: mongoRet;

  try {
    if (action.read === "many") {
      data = await collections[action.index].find({}).toArray();
    } else {
      data = await collections[action.index].findOne(action.field);
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }

  return;
}
