import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";

export interface Controler {
  read: "many" | "one";
  field: {id:number}|{username:string}|{key:null};
  index: number;
}


export type mongoRet =
  | User
  | Request
  | Comment
  | Repli
  | User[]
  | Request[]
  | Comment[]
  | Repli[];
