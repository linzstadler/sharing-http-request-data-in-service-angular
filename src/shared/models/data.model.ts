import {UserModel} from "./user.model";

export interface DataModel {
    items: Array<UserModel>;
    total: number;
}
