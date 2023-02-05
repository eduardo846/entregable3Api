const express = require("express");
const postRouter = require('./posts/posts.router')
const db = require("./utils/database");
const app = express();

app.use(express.json());

//!Conexion a Db
db.authenticate()
    .then(() => {
        console.log("Las credenciales de la base de datos son correctas");
    })
    .catch((err) => {
        console.log(err);
    });
//!FIN Conexion a Db

//!Sincroniza base de datos con modelos
db.sync()
    .then(() => {
        console.log("La base de datos ha sido actualizada");
    })
    .catch((err) => {
        console.log(err);
    });
//!FIN sincronizacion de base de datos con modelos

app.get('/',(req, res)=>{
    res.json({
        message: 'Server Ok!',
        routes:{
            posts: 'http://localhost:9000/api/v1/posts'
        }
    })
})
app.use('/api/v1',postRouter)


app.listen(9000, () => {
    console.log("Server started at PORT 9000");
});

module.exports = app;
