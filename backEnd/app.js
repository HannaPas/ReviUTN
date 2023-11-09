import express from "express"
import mongoose from "mongoose"
import resenias from "./models/reseñas.js"


const app = express()
const port = 5500


const mongoUrl = "mongodb+srv://reviutn:iTCJvCLSnPPNtLAw@cluster0.zxy3ryx.mongodb.net/?retryWrites=true&w=majority"



mongoose
    .connect(mongoUrl)
    .then(() => console.log('Conexión a MongoDB establecida.'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.json({
    limit: "50mb"
}))

//enviar los datos a MongoDB

app.post("/api/resenias", (req, res) => {
    let reseniasData = req.body
    let mongoRecords = []  //cada campo del modelo RESEÑAS
    reseniasData.forEach(resenia => {
        mongoRecords.push({
            id: resenia.id,
            materia: resenia.materia,
            profesor: resenia.profesor,
            texto: resenia.texto,
            positivas: resenia.positivas,
            negativas: resenia.negativas,
            estrellas: resenia.estrellas

        })
    })

    resenias.create(mongoRecords)
        .then(records => {
            res.status(200).send(records); // 200: éxito
        })
        .catch(err => {
            res.status(500).send(err); // 500: error en el envío
        });

})

app.delete("/api/resenias", async (req, res) => {
    try {
        await resenias.deleteMany({});
        res.status(200).send({ message: "Todas las reseñas han sido eliminadas." });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/api/resenias", (req, res) => {
    resenias.find({}).exec()
        .then(docs => {
            res.status(200).send(docs);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get("/api/resenias", (req, res) => {
    resenias.find({ profesor }).exec()
        .then(docs => {
            res.status(200).send(docs);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get("/api/resenias", (req, res) => {
    resenias.find({ profesor }).exec()
        .then(docs => {
            res.status(200).send(docs);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get("/api/resenias", (req, res) => {
    const { profesor } = req.query;
    const filtro = profesor ? { profesor } : {};

    resenias.find(filtro).exec()
        .then(docs => {
            res.status(200).send(docs);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get("/api/resenias", (req, res) => {
    const { materia } = req.query;
    const filtro = materia ? { materia } : {};

    resenias.find(filtro).exec()
        .then(docs => {
            res.status(200).send(docs);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

