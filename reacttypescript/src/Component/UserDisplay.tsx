import { useContext } from "react"
import { context } from "../Context/context"

const UserDisplay = () => {
    const ctx = useContext(context);

    if (!ctx) {
        return <div>No context found</div>; // fallback
    }

    const { user } = ctx;
 
    return (
        <>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
        </>
    )
}
export default UserDisplay