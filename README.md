# Candidate Application Platform for weekday

This is a React-based web application that serves as a candidate application platform. It allows users to view job listings, filter jobs based on various criteria, and implements infinite scroll for a seamless browsing experience.

## Technologies Used

- **ReactJS**: The core library for building the user interface.
- **Redux Toolkit**: A modern Redux library for managing application state.
- **Material-UI**: A popular React UI library for implementing Material Design components.
- **CSS**: CSS styles for additional styling and customization.

## Installation

1. Clone the repository:

```
git clone https://github.com/Aravinth797/weekday-frontend.git
```

2. Navigate to the project directory:

```
cd weekday
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running at `http://localhost:3006`.

## Project Structure

- `src/components`: Contains reusable React components used throughout the application.
- `src/slice`: Contains Redux slices and related files for managing application state.
- `src/utils`: Contains utility functions used across the application.
- `src/App.css`: Contains custom CSS styles for components and layout.

## Redux Slices

The project utilizes Redux Toolkit for state management and includes the following slices:

- **mainSlice**: Responsible for managing the job listings and related data.
- **filterSlice**: Handles the state and logic for filtering job listings based on various criteria.

## Material-UI Integration

The project utilizes Material-UI components for consistent styling and a user-friendly interface. The job cards and filter components are built using Material-UI components and styles.

## Custom Logic

In addition to the provided libraries and frameworks, the project includes custom logic for handling:

- Infinite scroll implementation
- Filtering job listings based on multiple criteria
- Handling null values in the API response
- Expanding/collapsing job descriptions

## Usage

Upon launching the application, users will see a list of job cards displayed on the screen. They can use the filters on the left sidebar to refine the job listings based on their preferences. As the user scrolls down, more job listings will be loaded automatically through the infinite scroll feature.
