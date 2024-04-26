import { collections } from "../services/database.service";
import { Controler } from "../models/CRUDE";
import User from "../models/user";
import Request, { type request } from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";
import { type mongoRet } from "../models/CRUDE";

export async function read(action: Controler) {
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

export async function create(data: request, action: Controler) {
  let retDB: mongoRet;

  try {
    retDB = await collections[action.index].find({}).toArray();

    return retDB;
  } catch (error) {
    console.log(error.message);
  }

  return;
}

export async function updatePartial(action: Read) {
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

export async function update(action: Read) {
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
