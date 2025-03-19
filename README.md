# URL Shortener Tool

## Overview

This is a URL shortening tool built with an Angular frontend and a Python backend.

## Setup

### Frontend (Angular)

For setup instructions, please refer to our [Angular README](https://github.com/naterchrdsn/url-shortener/blob/main/backend/README.md).

### Backend (Python)

For setup instructions, please refer to our [Python README](https://github.com/naterchrdsn/url-shortener/blob/main/frontend/README.md).

## Starting the Application

To start both pieces of the application, follow these steps:

### Step 1: Start the Python Backend

To run the API, execute the following command from the root directory of the project:

```sh
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000
```

### Step 2: Start the Angular Frontend

To start the frontend application, navigate to the `frontend` folder and run the following command:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

