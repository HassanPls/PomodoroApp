import { createContext, useContext, useEffect, useState } from "react";

const PomodoroContext = createContext();

export function PomodoroProvider({ children}) {
    const [timer, setTimer] = useState(1500);
    const [isPaused, setIsPaused] = useState(true);
    const [isResting, setIsResting] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("pomodoroState");
        if (saved) {
            const { timer, isPaused, isResting } = JSON.parse(saved);
            setTimer(timer);
            setIsPaused(isPaused);
            setIsResting(isResting);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pomodoroState", JSON.stringify({ timer, isPaused, isResting }));
    }, [timer, isPaused, isResting]);

    return (
        <PomodoroContext.Provider value={{ timer, isPaused, isResting, setTimer, setIsPaused, setIsResting }}>
            {children}
        </PomodoroContext.Provider>
    )
}

export const usePomodoro = () => useContext(PomodoroContext);