**README**

This repository contains both backend and frontend components for an application. Follow the instructions below to set up and run the application locally.

### Backend Setup

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install the required dependencies using pip (ensure you have Python and pip installed):

    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask server:

    ```bash
    python app.py
    ```

   This will start the backend server, which will be accessible at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Install the required dependencies using npm or pnpm (ensure you have Node.js installed):

    ```bash
    # Using npm
    npm install
    
    # Using pnpm
    pnpm install
    ```

3. Start the development server:

    ```bash
    # Using npm
    npm run dev
    
    # Using pnpm
    pnpm run dev
    ```

   This will compile the frontend code and start a development server. You can access the frontend application in your browser at `http://localhost:8000`.

### Accessing the Application

Once both the backend and frontend servers are running, you can access the full application by navigating to `http://localhost:8000` in your web browser. The frontend will communicate with the backend API running at `http://localhost:5000` to fetch data and perform actions as needed.

### Additional Notes

- Make sure you have the necessary permissions and dependencies installed to run both the backend and frontend components.
- You may need to customize certain configurations, such as database connections or API endpoints, based on your specific requirements.
- For production deployment, consider building the frontend assets and serving them statically from the backend server, or deploying them separately on a suitable hosting platform.

### Youtube Demo
https://www.youtube.com/watch?v=Gx_AhuvkAIk
