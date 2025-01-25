import {useEffect, useState} from "react";

const useThrottle = (value, delay) => {
    const [pageResize, setPageResize] = useState(value);

    useEffect(() => {
        let timer = 0;
        const handler = setTimeout(() => {
            let now = Date.now();
            if(now - timer >= delay){
                setPageResize(value)
            }
            now = timer            
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[value, delay])

    return pageResize
}

export default useThrottle;