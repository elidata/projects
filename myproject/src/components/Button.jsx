import React, { useState } from 'react';

function Button() {
    const [count, setCount] = useState(100);
    
    
    return (
        <div>
        <h1>hello</h1>  
              <button onClick={() => setCount(count + 1)}>
        Button clicked {count} times
        </button>
        </div>
    )
};

export default Button;