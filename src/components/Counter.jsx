import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <counter data-testid="customComponent" >
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button data-testid="incBtn" className='inc' onClick={() => setCount(count + 1)}>Increment</button>
            <button data-testid="decBtn" disabled={count === 0} className='dec' onClick={() => setCount(count - 1)}>Decrement</button>
        </counter>
    )
}

export default Counter;