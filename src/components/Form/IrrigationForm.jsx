import React, { useState } from 'react';
import './IrrigationForm.css'

const IrrigationForm = ({ onSubmit }) => {
    const [numPlots, setNumPlots] = useState('');
    const [numMotors, setNumMotors] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [motorRuntime, setMotorRuntime] = useState('');
    const [cycleInterval, setCycleInterval] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonClicked(true);
        const data = {
            numPlots: parseInt(numPlots),
            numMotors: parseInt(numMotors),
            startTime,
            endTime,
            motorRuntime: parseInt(motorRuntime),
            cycleInterval: parseInt(cycleInterval),
        };
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={numPlots} onChange={(e) => setNumPlots(e.target.value)} placeholder="Number of Plots" required />
            <input type="number" value={numMotors} onChange={(e) => setNumMotors(e.target.value)} placeholder="Number of Motors" required />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            <input type="number" value={motorRuntime} onChange={(e) => setMotorRuntime(e.target.value)} placeholder="Motor Runtime (min)" required />
            <input type="number" value={cycleInterval} onChange={(e) => setCycleInterval(e.target.value)} placeholder="Irrigation Cycle Interval (min)" required />
            <button type="submit" className={buttonClicked ? 'clicked' : ''}>Submit</button>
        </form>
    );
};

export default IrrigationForm