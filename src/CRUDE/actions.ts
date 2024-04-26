import { collections } from "../services/database.service";
import { Controler, type Insert, allInterface } from "../models/CRUDE";
import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";
import { objRequest } from "../models/request";

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

export async function create(data: any, action: Insert) {
  try {
    const retDB = await collections[action.index].insertOne(data);
    return retDB;
  } catch (error) {
    console.log(error.message);
  }

  return;
}

const newR = new objRequest(1, "wwf", "dfa", 1, "dsf", "dasdf");
create(newR, 1);

export async function updatePartial(action: Controler) {
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
