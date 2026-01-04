import { useEffect } from "react";
import SubTitle from "./SubTitle";
import Box from "./Box";
import Button from "./Button";
import { usePomodoro } from "../contexts/PomodoroContext";

function PomodoroTimer() {
  const { timer, isPaused, isResting, setTimer, setIsPaused, setIsResting } = usePomodoro();

  function adjustTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  useEffect(() => {
    if (isPaused) return;
    if (timer == 0) {
      if (isResting) {
        setIsResting(false);
        setTimer(1500);
        setIsPaused(true);
      } else {
        setIsResting(true);
        setTimer(300);
        setIsPaused(true);
      }
    }
    const intervalTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [isPaused, isResting, timer, setIsPaused, setIsResting, setTimer]);

  function resetTimer() {
    setTimer(1500);
    setIsPaused(true);
  }

  function RestMode() {
    if (!isResting) {
      setTimer(300);
      setIsResting(true);
    } else {
      setTimer(1500);
      setIsResting(false);
    }
  }

  return (
    <Box>
      <SubTitle>Temporizador</SubTitle>

      <div className="bg-green-50 p-3 rounded-md text-3xl">
        {adjustTime(timer)}
      </div>

      <div className="flex gap-3">
        <Button onClick={() => resetTimer()}>Resetar</Button>
        <Button onClick={() => setIsPaused(!isPaused)}>
          {!isPaused ? "Pausar" : "Retomar"}
        </Button>
        <Button onClick={() => RestMode()}>{isResting ? "Trabalho" : "Descanso"}</Button>
      </div>
    </Box>
  );
}

export default PomodoroTimer;
