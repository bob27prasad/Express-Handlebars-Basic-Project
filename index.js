const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

//for static file
app.use(express.static(path.join(__dirname, "public")))

//for handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({
    defaultLayout : 'main'
}));
app.set('view engine', 'handlebars');

//for router
app.use('/', require(path.join(__dirname, "routes/route.js")))


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})