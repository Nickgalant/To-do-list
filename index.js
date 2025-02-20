import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgresql_ln4x_user",
  host: "dpg-curn4a2n91rc73cu7ing-a.oregon-postgres.render.com",
  database: "postgresql_ln4x",
  password: "tfMhAD8e6c7AQ75FKVw0FhXWGiMX4Bo5",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,  // Habilita SSL sem um certificado específico
  },
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getItems() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  console.log(result.rows);
  return result.rows;
};

app.get("/", async (req, res) => {
  const items = await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    if(item){
      await db.query("INSERT INTO items (title) VALUES ($1);",
        [item]
      ) 
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    if(item){
      await db.query("UPDATE items SET title = $1 WHERE id = $2;",
        [item, id]
      )
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body["deleteItemId"];
  try {
    await db.query("DELETE FROM items WHERE id = $1;",
      [id]
    )
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
