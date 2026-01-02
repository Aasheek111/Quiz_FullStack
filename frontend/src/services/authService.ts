
import api from "../lib/axios";
import type { LoginPayload, RegisterPayload } from "../types/auth";

export const loginUser= (data:RegisterPayload)=>{
    return api.post("api/auth/login",data);
}
export const registerUser= (data:LoginPayload)=>{
    return api.post("api/auth/register",data);
}
