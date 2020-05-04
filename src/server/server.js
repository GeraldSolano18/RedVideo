import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const ENV = process.env.NODE_ENV; //permite jalar las variables del archivo de configuracion y prepara los entornos
const PORT = process.env.PORT || 3000; 
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers'); //middlerwares
const notFoundHandler = require('./utils/middleware/notFoundHandler'); 

const app = express();

//body parser
app.use(express.json());

//routes
moviesApi(app);
userMoviesApi(app);

// Catch 404
app.use(notFoundHandler);

//middlerwares errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log(err);   
  console.log(`servidor corriendo en ${PORT}`);
}); //La aplicacion escucha el puerto y recibe una funcion anonima
