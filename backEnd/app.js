import express from "express";
import mongoose from "mongoose";
import reseniasRouter from "./reseniasRoutes.js"; // Asegúrate de que la ruta al archivo es correcta
import cors from 'cors';

const app = express();
const port = 5500;

const mongoUrl = "mongodb+srv://reviutn:iTCJvCLSnPPNtLAw@cluster0.zxy3ryx.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoUrl)
    .then(() => console.log('Conexión a MongoDB establecida.'))
    .catch(err => console.error('Error al conectar a MongoDB', err));


  
app.use(cors());
     
app.use(express.json({
    limit: "50mb"
}));

//router con la ruta base "/api/resenias"
app.use("/api/resenias", reseniasRouter);

app.get('/', (req, res) => {
    res.send('¡API REVIUTN!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
