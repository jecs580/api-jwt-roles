import app from './app'
import './database'

// Funcion autoejecutable
(()=>{
    app.listen(4000,console.log("Servidor escuchando en el puerto 4000"))
})();