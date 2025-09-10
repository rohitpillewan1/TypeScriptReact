import {  useState, type ReactNode } from "react"
import { context } from "./context"
type user = {
    name: string,
    age: number
}

type props = {
    children: ReactNode
}
const UseUserContext = ({ children }: props) => {

    const [user, setUser] = useState<user>({
        name: 'Rohit',
        age: 21
    })
    return (
        <context.Provider value={{ user, setUser }}>
            {children}
        </context.Provider>
    )
}

export default UseUserContext