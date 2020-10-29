import { useState } from 'react';


const useInputHook =(arg:string)=>{
    const [input, setInput]= useState<string>(arg)
    const onChange=(e)=>{
        setInput(e.target.value)
    }
    return [input,onChange]
}

export default useInputHook