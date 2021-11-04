import { useState } from "react";

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const toggleState = () => {
        setState(state => !state);
    }
    return [state, toggleState];
}

export default useFlip; 