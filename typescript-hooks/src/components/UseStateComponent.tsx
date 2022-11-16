import { useState } from 'react'


const UseStateComponent = () => {
    const [arr, setArr] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null)
    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
                <div>{JSON.stringify(arr)}</div>
            </div>
            <div>
                <button onClick={() => setName("Sathish")}>Add to Array</button>
                <div>{JSON.stringify(name)}</div>
            </div>
        </div>
    )
}

export default UseStateComponent