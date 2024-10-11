# To-Do List Application

A simple To-Do List application built with Node.js, Express, and PostgreSQL. This application allows users to add, edit, and delete tasks.

## Features

- View a list of tasks
- Add new tasks
- Edit existing tasks
- Delete tasks

## Technologies Used

- Node.js
- Express
- PostgreSQL
- EJS (Embedded JavaScript) for templating
- Body-parser middleware

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your PostgreSQL database:**

   Ensure you have PostgreSQL installed and running. Create a database named `permalist`.

4. **Configure database connection:**

   Update the database connection details in `index.js`:

   ```javascript
   const db = new pg.Client({
     user: "postgres",
     host: "localhost",
     database: "permalist",
     password: "YOUR_PASSWORD",
     port: 5432,
   });
   ```

5. **Run the application:**

   ```bash
   npm start
   ```

   The application will be running on `http://localhost:3000`.

## Usage

- Navigate to the main page to view your tasks.
- Use the form to add a new task.
- Click on a task to edit it or use the delete button to remove it.

## Database Setup

Make sure your PostgreSQL database has a table named `items`. You can create it with the following SQL command:

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
```

### Notes:
- Replace `<repository-url>` and `<repository-directory>` with the actual URL and directory name of your repository.
- You might want to adjust the instructions or details depending on any additional features or configurations specific to your project.