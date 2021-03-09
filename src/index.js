import app from './app'

// Funcion autoejecutable
(()=>{
    app.listen(4000,console.log("Servidor escuchando en el puerto 4000"))
})();