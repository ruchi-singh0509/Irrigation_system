import React, { useState } from 'react'
import IrrigationForm from './components/Form/IrrigationForm.jsx';
import '../src/App.css';


const App = () => {
    const [schedule, setSchedule] = useState([]);
    const generateSchedule = (data) => {
        const { numPlots, numMotors, startTime, endTime, motorRuntime, cycleInterval } = data;
        const newSchedule = [];
        const start = parseInt(startTime.replace(':', '')) * 100;
        const end = parseInt(endTime.replace(':', '')) * 100;
        const timeDifference = end - start;

        const totalCycles = Math.max(1, Math.floor(timeDifference / (motorRuntime + cycleInterval)));

        for (let cycle = 0; cycle < totalCycles; cycle++) {
            const runTime = start + cycle * (motorRuntime + cycleInterval);
            for (let motor = 0; motor < numMotors; motor++) {
                const plotIndex = (cycle * numMotors + motor) % numPlots;
                const plot = `D${plotIndex + 1}`;
                const startCycle = String(runTime).padStart(4, '0');
                const endCycle = String(runTime + motorRuntime).padStart(4, '0');

                if (runTime < end) {
                    newSchedule.push({
                        index: newSchedule.length,
                        plot,
                        startTime: startCycle,
                        endTime: endCycle,
                        RunBy: `M${motor + 1}`,
                    });
                }
            }
        }

        const newWindow = window.open();
        newWindow.document.write('<html><head><title>Irrigation Schedule</title>');
        newWindow.document.write('<link rel="stylesheet" href="App.css">');
        newWindow.document.write('<style>');
        newWindow.document.write('body { margin: 0; }');
        newWindow.document.write('.schedule-table { position: relative; width: 50%; margin: 20px auto; padding: 20px; background-color: rgba(255, 255, 255, 0.8); border-radius: 10px; max-height: 80vh; overflow-y: auto; }');
        newWindow.document.write('table { width: 100%; text-align: center; border-collapse: collapse; }');
        newWindow.document.write('th { background-color: darkgrey; position: sticky; top: 0; z-index: 2; }'); 
        newWindow.document.write('tr:nth-child(even) { background-color: lightgrey; }');
        newWindow.document.write('</style>');
        newWindow.document.write('</head><body style="background-image: url(https://images.pexels.com/photos/2161437/pexels-photo-2161437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">');
        newWindow.document.write('<h1 style="text-align: center; color: black;">Irrigation Schedule</h1>');
        newWindow.document.write('<div class="schedule-table">');
        newWindow.document.write('<table>');
        newWindow.document.write('<thead><tr><th>Plot</th><th>Start Time</th><th>End Time</th><th>Run By</th></tr></thead><tbody>');
        newSchedule.forEach(item => {
            newWindow.document.write(`<tr><td>${item.plot}</td><td>${item.startTime}</td><td>${item.endTime}</td><td>${item.RunBy}</td></tr>`);
        });
        newWindow.document.write('</tbody></table></div></body></html>');
        newWindow.document.close();






        setSchedule(newSchedule);


    };

    return (
        <div className="app-container">
            <h1>Irrigation System</h1>
            <IrrigationForm onSubmit={generateSchedule} />
        </div>
    );


};

export default App