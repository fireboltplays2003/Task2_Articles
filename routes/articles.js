const express = require("express");
const router = express.Router();
const dbSingleton = require("../dbSingleton");

const db = dbSingleton.getConnection();

router.post("/", (req, res) => {
  const { title, content, author } = req.body;
  const query =
    "INSERT INTO articles (title, content, author) VALUES (?, ?, ?)";

  db.query(query, [title, content, author], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM articles";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM articles WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM articles WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
router.get("/author/:name", (req, res) => {
  const { name } = req.params;
  const query = "SELECT * FROM articles WHERE author = ?";
  db.query(query, [name], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

router.get("/date/:date", (req, res) => {
  const { date } = req.params;
  const query = "SELECT * FROM articles WHERE created_at > ?";
  db.query(query, [date], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
router.get("/ordered/newest", (req, res) => {
  const query = "SELECT * FROM articles ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
router.get("/count/number", (req, res) => {
  const query = "SELECT COUNT(*) FROM articles;";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
router.get("/name/kuku", (req, res) => {
  const query = "SELECT * FROM articles WHERE title LIKE '%kuku%'";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
router.get("/Distinct/author", (req, res) => {
  const query = "SELECT DISTINCT author FROM articles";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});

module.exports = router;
