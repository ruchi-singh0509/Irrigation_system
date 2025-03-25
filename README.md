# Irrigation System Web App

## Overview

Welcome to the Irrigation System Web App! This application helps automate irrigation cycles for modern IoT farms by allowing users to create and view schedules based on user-defined parameters. You can specify the number of plots, motors, and timings to efficiently manage irrigation.

## Features

- **User Input:** Easily input the number of plots, motors, start and end times, motor runtime, and cycle interval.
- **Schedule Generation:** Automatically generates an irrigation schedule based on input parameters.
- **Responsive Design:** The app is styled for a clean, modern look.

## Technologies Used

- **Frontend:** React.js
- **Styling:** CSS
- **Deployment:** Vercel

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- A package manager (npm or yarn).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/irrigation-system.git
   ```
2. Navigate into the project directory:
   ```bash
   cd irrigation-system
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`.

## Usage

1. Fill in the form with:
   - Number of Plots
   - Number of Motors
   - Irrigation Start Time (in HH:MM format)
   - Irrigation End Time (in HH:MM format)
   - Motor Runtime (in minutes)
   - Irrigation Cycle Interval (in minutes)
2. Click on the "Submit" button to generate the irrigation schedule.
3. A new window will display the generated irrigation schedule, showing:
   - Plot Name
   - Start Time
   - End Time
   - Motor Running the irrigation

## Screenshots

![Irrigation System Screenshot](public\Capture.PNG)
![Irrigation System Screenshot](public\Capture2.PNG)


## Conclusion

The Irrigation System Web App provides a user-friendly interface to automate the irrigation process for farms, making it easier to manage multiple plots and motors efficiently. 





