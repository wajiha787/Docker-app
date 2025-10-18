# Frontend Application README

# Frontend Application

This is the frontend part of the my-fullstack-app project. It is built using HTML, CSS, and JavaScript.

## Project Structure

- `src/`
  - `index.html`: The main HTML file for the application.
  - `main.js`: The JavaScript file that contains the logic for the application.
  - `styles.css`: The CSS file that styles the application.

## Getting Started

To run the frontend application locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-fullstack-app/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Docker

To run the frontend application using Docker, follow these steps:

1. **Build the Docker image:**
   ```
   docker build -t frontend .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 3000:3000 frontend
   ```

Alternatively, you can use Docker Compose to run both the frontend and backend together.

## Docker Compose

To run the entire application using Docker Compose, follow these steps:

1. **Navigate to the root of the project:**
   ```
   cd my-fullstack-app
   ```

2. **Run Docker Compose:**
   ```
   docker-compose up
   ```

This will start both the frontend and backend services.

## License

This project is licensed under the MIT License.