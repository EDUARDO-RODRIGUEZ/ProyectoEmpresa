import React, { useState } from 'react'

const useForm = (initialState) => {

    const [state, setstate] = useState(initialState);

    function onChange(e) {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function clear(params) {
        setstate(initialState);
    }

    return {
        state,
        onChange,
        clear
    }
}

export default useForm