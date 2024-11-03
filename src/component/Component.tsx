import { ChangeEvent, useDeferredValue, useMemo, useState, useTransition } from "react"
import { Post } from "./Post"

const Component:React.FC = () => {

    const [value,setvalue] = useState('')
    const [panding,startTransition] = useTransition()
    const onchange = (e:ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setvalue(e.target.value)
        })   
    }

    const deffered = useDeferredValue(value)
    const filtered = useMemo(() => {
        return Post.filter((user) => user.title.toLocaleLowerCase().includes(value))
    },[deffered])


    return (
        <div>
            <input type="text" onChange={onchange} placeholder="search post" />
            {filtered.map((user) => (
                <div key={user.id} style={{border:'solid 2px black'}}>
                    <h1>{user.userId}</h1>
                    <h1>{user.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default Component