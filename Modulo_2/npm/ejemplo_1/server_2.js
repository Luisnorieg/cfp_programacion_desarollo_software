// llamanos al modulo http
const http = require("http");

// definimos el local-host y el puerto a los que se vinculara nuestro servidor 
const host = 'localhost';
const port = 8000;

// este mensaje siempre que alguien acceda a él
const servidor = function (req, res) {
    res.writeHead(200);
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <style>
    body{
    font-family: Arial, sans-serif;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container{
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    text-align: center;
    width: 300px;
}

input[type="text"], input[type="password"]{
    width: 80%;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
}

button{
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: 4px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover{
    background-color: rgb(40, 102, 184);
}

.resultado{
    margin-top: 20px;
    font-size: 30px;
    color: red;
} 
    </style>
</head>
<body>
    <div class="login-container">
        <h2> login </h2>
        <input type="text" id="usuario" placeholder="usuario">
        <input type="password" id="contraseña" placeholder="contraseña" >
        <button onclick="login()"> inciar seción </button>
    
        <div class="resultado" id="resultado">

        </div>

    </div>

    <script src="script.js"></script>

    <script>
    let usuarioCorrecto = "admin";
let cotraseñaCorrecta = "admin2024";

function login(){
    // capturando los datos por medio de funciones DOOM
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let resultado = document.getElementById("resultado");

    if(usuario == usuarioCorrecto && contraseña == cotraseñaCorrecta ){
        resultado.style.color = "green"
        resultado.innerHTML = "Acceso correcto"
    } else{
        resultado.style.color = "red"
        resultado.innerHTML = "Acceso denegado"
    }

}


    </script>



</body>
</html>`);
}

// nuestro servidor y usar nuestra escucha de solicitudes
const server = http.createServer(servidor);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});