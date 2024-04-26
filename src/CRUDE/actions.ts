import { collections } from "../services/database.service";
import { Controler, type Insert } from "../models/CRUDE";
import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";
import { objRequest } from "../models/request";

import { type mongoRet } from "../models/CRUDE";
export async function readDoc(action: Controler) {
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
    const retDB = await collections[action.index].updateOne(action.field, {
      $set: data,
    });

    return retDB;
  } catch (error) {
    return error.message;
  }

  return;
}
