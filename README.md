# My Fullstack Application

This project is a simple fullstack application consisting of a frontend and a backend, both containerized using Docker. The frontend is built with HTML, CSS, and JavaScript, while the backend is built with Node.js and Express.

## Project Structure

```
my-fullstack-app
├── frontend
│   ├── src
│   │   ├── index.html
│   │   ├── main.js
│   │   └── styles.css
│   ├── Dockerfile
│   ├── package.json
│   ├── .gitignore
│   └── README.md
├── backend
│   ├── src
│   │   ├── index.js
│   │   └── routes.js
│   ├── Dockerfile
│   ├── package.json
│   ├── .gitignore
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Getting Started

To run this application, you need to have Docker and Docker Compose installed on your machine.

### Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend application at `http://localhost:3000`.

## Frontend

The frontend is located in the `frontend` directory. It includes:

- `src/index.html`: The main HTML file.
- `src/main.js`: JavaScript logic for the frontend.
- `src/styles.css`: Styles for the frontend.

### Building the Frontend

To build the frontend Docker image, navigate to the `frontend` directory and run:
```
docker build -t frontend .
```

## Backend

The backend is located in the `backend` directory. It includes:

- `src/index.js`: The entry point for the backend application.
- `src/routes.js`: Defines the API routes.

### Building the Backend

To build the backend Docker image, navigate to the `backend` directory and run:
```
docker build -t backend .
```

## Docker Compose

The `docker-compose.yml` file defines the services for both the frontend and backend applications, allowing them to run together in a single command.

## Screenshots

Screenshots showing docker-compose running (images located in the `screenshots/` folder):

![Docker Compose running 1](screenshots/docker-compose-running-1.png)

![Docker Compose running 2](screenshots/docker-compose-running-2.png)

(If your screenshots have different filenames, update the image paths above to match the actual filenames in the `screenshots/` folder.)


## License

This project is licensed under the MIT License.