import { ObjectId } from "mongodb";

export default interface User {
    _id?: ObjectId;
    id: string;
    image: string;
    name: string;
    username: string;
}
