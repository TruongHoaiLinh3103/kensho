import { useState } from 'react';
import { useEffect } from 'react';
function useFetchEnti() {
    const [number, setNumber] = useState(310);
    const [hundredthousand, setHundredthousand] = useState(320);
    const [hundred, setHundred] = useState(3);
    useEffect(() => {
        if(hundredthousand === 1000){
            setNumber(number + 1);
            setHundredthousand(0);
            return;
        }
        else{
            if(hundred === 1000){
                setHundredthousand(hundredthousand + 1);
                setHundred(0);
                return;
            }
            else{
                var count = setInterval(() => {
                    setHundred(hundred + 1)
                }, 2000)
                return () => {
                    clearInterval(count);
                }
            }
        }
    })
    return {number, hundredthousand, hundred};
}

export default useFetchEnti;