```markdown
# Node.js RESTful API for Articles

## Description
This project is a **Node.js + Express** web server connected to a **MySQL** database. It provides a RESTful API for managing articles, allowing users to create, retrieve, filter, and delete articles. The app uses a singleton pattern for database connectivity and initializes the schema from a SQL script.

## Features
✔️ Add new articles via POST requests  
✔️ Retrieve all articles or specific ones by ID, author, or date  
✔️ Delete articles by ID  
✔️ Query newest articles or specific titles (e.g., containing "kuku")  
✔️ Count articles and get distinct authors  

## Technologies Used
- Node.js
- Express.js
- MySQL
- MySQL2 driver
- Singleton pattern for DB connection

## Project Structure
```

project/
├── app.js                  # Main server file
├── dbSingleton.js          # MySQL DB connection singleton
├── db\_user.sql             # SQL script to initialize DB and tables
├── setupDatabase.js        # Executes db\_user.sql to initialize the DB
├── routes/
│   └── articles.js         # Express router for article-related endpoints
├── package.json
└── package-lock.json

````

## Setup Instructions

1. **Install Dependencies**  
   ```bash
   npm install
````

2. **Start MySQL Server**

3. **Initialize Database**
   This script will read and execute `db_user.sql` to set up the database and tables:

   ```bash
   node setupDatabase.js
   ```

4. **Start the Server**

   ```bash
   node app.js
   ```

5. **API will be available at:**

   ```
   http://localhost:3000
   ```

---

## API Endpoints

| Method | Endpoint                    | Description                                |
| ------ | --------------------------- | ------------------------------------------ |
| GET    | `/articles`                 | Get all articles                           |
| POST   | `/articles`                 | Create a new article                       |
| GET    | `/articles/:id`             | Get an article by ID                       |
| DELETE | `/articles/:id`             | Delete an article by ID                    |
| GET    | `/articles/author/:name`    | Get articles by author                     |
| GET    | `/articles/date/:date`      | Get articles created after a specific date |
| GET    | `/articles/ordered/newest`  | Get articles sorted by newest first        |
| GET    | `/articles/count/number`    | Get total number of articles               |
| GET    | `/articles/name/kuku`       | Get articles where title includes "kuku"   |
| GET    | `/articles/Distinct/author` | Get all distinct author names              |

---

## Example Request

**Create an article**

```http
POST /articles
Content-Type: application/json

{
  "title": "Node.js Guide",
  "content": "Learn how to build APIs.",
  "author": "Stephanos"
}
```

**Filter by date**

```http
GET /articles/date/2025-05-06T13:00:00.000Z
```

---

## Authors

* Stephanos Khoury
* Rula Yosef
```
