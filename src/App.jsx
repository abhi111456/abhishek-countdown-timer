import React from 'react';
import { useCountdown } from './hooks/useCountdown';

const fourteenDays = 14 * 24 * 60 * 60 * 1000;
const now = new Date().getTime();
const targetDate = now + fourteenDays;

function App() {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <main>
      <h1 className="page-title">We're launching soon</h1>
      <section className="timer">
        <div className="flip-card-wrapper">
          <div className="flip-card" key={days}>
            <div className="card"></div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
            <p className="flip-card-text">{days}</p>
          </div>
          <p className="flip-card-title">days</p>
        </div>
        <div className="flip-card-wrapper">
          <div className="flip-card" key={hours}>
            <div className="card"></div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
            <p className="flip-card-text">{hours}</p>
          </div>
          <p className="flip-card-title">hours</p>
        </div>
        <div className="flip-card-wrapper">
          <div className="flip-card" key={minutes}>
            <div className="card"></div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
            <p className="flip-card-text">{minutes}</p>
          </div>
          <p className="flip-card-title">minutes</p>
        </div>
        <div className="flip-card-wrapper">
          <div className="flip-card" key={seconds}>
            <div className="card"></div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
            <p className="flip-card-text">{seconds}</p>
          </div>
          <p className="flip-card-title">seconds</p>
        </div>
      </section>
    </main>
  );
}

export default App;
