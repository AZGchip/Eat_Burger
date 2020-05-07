const express = require("express")
const app = express();
const exphbs = require("express-handlebars")
// lets heroku set the port. otherwise it is 7500
const PORT = process.env.PORT || 7500;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(express.static(path.join(__dirname, "./", "public")))
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(routes)


app.listen(PORT, function() {
    // console.log when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
