import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-20T09:00:00+05:30").getTime();

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = TARGET_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div data-testid="countdown-timer" className="flex gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="countdown-digit bg-[#641220] text-white w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-sm flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
            {String(unit.value).padStart(2, "0")}
          </div>
          <span className="text-xs sm:text-sm text-[#8A7E72] mt-2 tracking-widest uppercase font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
