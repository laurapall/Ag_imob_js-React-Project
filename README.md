# Ag_imob_json_list React Project
## Overview
The "ag_imob_json_list" project is a simple React application that emulates a real estate agency platform. It allows users to view, add, edit, and delete property listings, as well as manage real estate agents. The application is built using CodeSandbox and utilizes a backend server implemented in Node.js with Express to store and manage property data.

## Getting Started
To run the project, follow these steps:

1. Clone or download the project from the CodeSandbox link provided.
2. If you prefer to run the project locally:
   - Open the project in your preferred code editor.
   - Install the required dependencies by running the following command in the project directory:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```
   - The application will be accessible in your browser at http://localhost:3000/.
3. If you want to run the project directly in CodeSandbox, click on the "Open in New Window" button on the top-right corner of the CodeSandbox editor.

## Project Structure
The project has the following main directories:
- `src`: Contains the React components and logic for the application.
- `public`: Contains the index.html and other public assets.

## Components
The "ag_imob_json_list" project consists of several components:
1. `App.js`: This is the main component that manages routing and renders different pages of the application.
2. `activitate.js`: This component is responsible for rendering individual property listings. It displays information about each property, including type, address, size, number of rooms, agent details, and a description.
3. `agenti.js`: This component handles the management and display of real estate agents. Users can add new agents by providing their name, phone number, email, and an optional image.
4. `formular.js`: This component provides a form for adding or editing property listings. Users can specify the type of property (e.g., house, apartment, land), address, size, number of rooms, agent, an image URL, and a description.
5. `lipsa.js`: This component is displayed when the user accesses an invalid route.
6. `program.js`: This component displays a list of property listings fetched from the backend. It utilizes the `activitate.js` component to render each property in a card format.

## Backend
The project includes a simple backend implemented in Node.js with Express. The backend stores property data in a JSON file named `lista.json`. It provides several endpoints to perform CRUD operations on the property data:
- `GET /`: Retrieves all property listings from the `lista.json` file.
- `POST /adaug`: Adds a new property listing to the `lista.json` file.
- `DELETE /sterg/:id`: Deletes a property listing with the specified id from the `lista.json` file.
- `PATCH /editez`: Updates the details of an existing property listing in the `lista.json` file.

## Dependencies
The project uses the following main dependencies:
- `react`: The front-end library for building user interfaces.
- `react-dom`: React's package for DOM rendering.
- `react-bootstrap`: A library providing pre-built Bootstrap components for React.
- `react-icons`: A library for including popular icon sets in React applications.
- `react-router-dom`: A library for handling routing in React applications.

## Contributing
Contributions to the project are welcome! If you have suggestions, bug reports, or want to add new features, feel free to create pull requests or report issues.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, suggestions, or issues related to this project, feel free to contact us at [flaurapall@gmail.com].

## Author
* [Pall Laura](https://github.com/laurapall)
