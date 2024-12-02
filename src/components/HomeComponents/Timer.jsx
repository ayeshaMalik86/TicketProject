import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2045-03-31T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <div className="timer-item">
        <h2>{timeLeft.days || "0"}</h2>
        <p>Days</p>
      </div>
      <div className="timer-item">
        <h2>{timeLeft.hours || "0"}</h2>
        <p>Hours</p>
      </div>
      <div className="timer-item">
        <h2>{timeLeft.minutes || "0"}</h2>
        <p>Minutes</p>
      </div>
      <div className="timer-item">
        <h2>{timeLeft.seconds || "0"}</h2>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
