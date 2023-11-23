//requerimos express y lo ejecutamos para poder usar los metodos 
let express = require('express');
let app = express();

//Modulo nativo para manejar las rutas de los archivos 
let path = require('path');

/* let publicFolderPath = path.resolve(__dirname, "./public"); */
app.use(express.static("public"));


// Ponemos a escuchar al servidor en el puerto 3030
app.listen(3030, () => console.log("esta corriendo el puerto: http://localhost:3030/"));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get('/register',(req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath)
})

app.post ('/register',(req, res) => {
    res.send('Llego el formulario de register')
})

app.get('/login',(req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath)
})