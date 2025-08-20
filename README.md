# Cell Tower Dashboard
This dashboard gives you a clear view of cellular towers across different cities. You can explore detailed tower information, interact with dynamic charts, and filter data to find exactly what you need.


## Table of Contents
- Features
- Technical Approach
- Architecture
- Setup and Installation
- Usage
- Deployed Website

## Features
- **Home Page**: See detailed information about each city and its towers at a glance.  
- **Interactive Charts**: Visualize tower distribution and status with interactive and dynamic charts.  
- **Filtering**: Quickly search or filter towers by city or tower name.  
- **Responsive Design**: Works smoothly on desktops, tablets, and mobile devices, giving a seamless experience everywhere.

## Technical Approach
- **Bundler**: [Vite](https://vitejs.dev/) – a fast, modern bundler with Hot Module Replacement for rapid development.  
- **Language**: [TypeScript](https://www.typescriptlang.org/) – helps catch errors early and ensures code safety.  
- **Frontend**: [React](https://reactjs.org/) – builds the UI using reusable components for easier maintenance.  
- **Charts**: [D3.js](https://d3js.org/) – creates interactive and visually appealing charts.  
- **Styling**: SCSS – clean, modular, and maintainable styles.

- The app is a **single-page dashboard**, so the structure was kept **simple and organized**:  
  - `components/` – shared reusable components  
  - `data/` – tower data  
  - `types/` – TypeScript types  
  - `utils/` – helper functions and extra information  

- All styling is currently in `App.scss` because the app is small and straightforward.  
  For a larger or more complex application, **each component would have its own styling file** to improve maintainability and readability.

## Architecture
The dashboard is designed to be **modular, maintainable, and scalable**:

- **Components**: Each UI element, such as tables, charts, or filters, is its own reusable React component.  
- **State Management**: React's built-in state and props manage data efficiently across the application.  
- **Responsive Layout**: Flexbox and media queries ensure the dashboard looks great on any screen size.

## Setup and Installation
- Clone the project using this command:
git clone https://github.com/HabibaaFarid/cell-tower-dashboard.git
- Navigate to the project directory 
- Install dependencies using this command:
npm install
- Lastly, you can start the project using this command:
npm run dev

## Usage
Once the development server is running, you can explore the application:

-   **Home Page**: Provides an overview of all cities and you can filter whether by tower name or city to get more detailed info.
## Demo
You can also visit the deployed website here: https://cell-tower-dashboard-beta.vercel.app/