import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";

export interface Read {
  read: "many" | "one";
  field: {id:number}|{username:string};
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