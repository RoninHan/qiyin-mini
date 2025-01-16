import { useEffect, useState, useCallback } from "react";

function useTimer(speed = 1) {
    const [paused, setPaused] = useState(false);
    const play = useCallback(() => setPaused(false), []);
    const pause = useCallback(() => setPaused(true), []);

    const [currentMillisecond, setCurrentMillisecond] = useState(0);
    const reset = useCallback(() => setCurrentMillisecond(0), []);

    useEffect(() => {
        console.log("paused", paused);
        if (!paused) {
            let last = Date.now();
            const timer = setInterval(() => {
                const now = Date.now();
                setCurrentMillisecond((cm) => cm + (now - last) * speed);
                console.log("currentMillisecond", currentMillisecond);
                last = now;
            }, 97);
            return () => {
                console.log("clearInterval");
                // clearInterval(timer);
            }
        }
    }, [paused, speed]);

    return {
        currentMillisecond,
        setCurrentMillisecond,
        reset,
        paused,
        play,
        pause
    };
}

export default useTimer;
