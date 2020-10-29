import { useState } from 'react';


import useDebounce from './useDebounce';


const useDebounceInputHook = (arg: string, deley) => {
    const [value, setValue] = useState()

    const onChange = (e) => {
        const [debounced] = useDebounce(e.target.value, deley)
        setValue(debounced)

    }



    return [value, onChange]
}

export default useDebounceInputHook