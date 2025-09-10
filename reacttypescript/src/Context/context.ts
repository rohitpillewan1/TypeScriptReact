import { createContext } from "react";
type user={
    name:string,
    age:number
}
type contextType={
    user:user
    setUser: React.Dispatch<React.SetStateAction<user>>;
}
export const context=createContext<contextType|null>(null);