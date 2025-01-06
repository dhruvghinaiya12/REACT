import React, { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [hour, setHour] = useState(Math.floor(duration / 60));
  const [minute, setMinute] = useState(duration % 60);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
        if (hour == 0 && minute == 0 && second == 0) {
            clearInterval(id);
          } else {
            if (second > 0) {
              setSecond(second - 1);
            } else if (minute > 0) {
              setSecond(59);
              setMinute(minute - 1);
            } else if (hour > 0) {
              setSecond(59);
              setMinute(59);
              setHour(hour - 1);
            }
          }
    }, 1);

    return () => {
      clearInterval(id);
    };
  }, [second]);

  return (
    <div >
      <h1 >
        {(hour < 10 ? "0" : "") + hour}:
        {(minute < 10 ? "0" : "") + minute}:
        {(second < 10 ? "0" : "") + second}
      </h1>
    </div>
  );
};

export default Timer;
