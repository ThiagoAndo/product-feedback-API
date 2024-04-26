import User from "../models/user";
import Request from "../models/request";
import Comment from "../models/comments";
import Repli from "../models/replies";

export type Insert = {
  index: 0 | 1 | 2 | 3;
};
export interface Controler extends Insert {
  read: "many" | "one" | null;
  field: { id: number } | { username: string } | { key: null };
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
