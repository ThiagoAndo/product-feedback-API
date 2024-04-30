import { collections } from "../services/database.service";
import { Controler, type Insert } from "../models/CRUDE";
import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";

import { type mongoRet } from "../models/CRUDE";
export async function readDoc(action: Controler) {
  let result: mongoRet;

  try {
    if (action.read === "many") {
      result = await collections[action.index].find({}).toArray();
    } else {
      result = await collections[action.index].findOne(action.field);
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createDoc(data: any, action: Insert) {
  try {
    const retDB = await collections[action.index].insertOne(data);
    return retDB;
  } catch (error) {
    return error.message;
  }
}

export async function updateDoc(
  data: User | Comment | Request | Repli,
  action: Controler
) {
  try {
    const result = await collections[action.index].updateOne(action.field, {
      $set: data,
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

export async function deleteDoc(action: Controler) {
  try {
    const result = await collections[action.index].deleteOne(action.field);

    return result;
  } catch (error) {
    return error.message;
  }
}
