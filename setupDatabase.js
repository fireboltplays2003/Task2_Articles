const fs = require("fs");
const path = require("path");
const dbSingleton = require("./dbSingleton");
const db = dbSingleton.getConnection();

const sqlFilePath = path.join(__dirname, "db_user.sql");
const sqlContent = fs.readFileSync(sqlFilePath, "utf8");


db.query(sqlContent, (err, result) => {
  if (err) {
    console.error("Error running SQL script:", err);
  } else {
    console.log("Database and tables created successfully!");
  }
});
