import express from 'express';
import Resenia from './models/reseñas.js';

const router = express.Router();


//publica todas las reseñas en la base de MongoDB

router.post("/", (req, res) => {
    let reseniasData = req.body;
    let mongoRecords = [];
    reseniasData.forEach(resenia => {
        mongoRecords.push({
            id: resenia.id,
            materia: resenia.materia,
            profesor: resenia.profesor,
            texto: resenia.texto,
            positivas: resenia.positivas,
            negativas: resenia.negativas,
            estrellas: resenia.estrellas
        });
    });

    Resenia.create(mongoRecords)
        .then(records => res.status(200).send(records))
        .catch(err => res.status(500).send(err));
});

//borra todas las reseñas

router.delete("/", async (req, res) => {
    try {
        await Resenia.deleteMany({});
        res.status(200).send({ message: "Todas las reseñas han sido eliminadas." });
    } catch (err) {
        res.status(500).send(err);
    }
});


//muestra una reseña mediante un id

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Resenia.findOne({ id: id })
        .then(resenia => {
            if (!resenia) {
                return res.status(404).send('Reseña no encontrada');
            }
            res.status(200).json(resenia);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});


router.get('/', (req, res) => {


    Resenia.find({})
        .then(resenias => {

            if (resenias.length === 0) {
                return res.status(404).send('No se encontraron reseñas');
            }
            res.status(200).json(resenias);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});


//Muestra el texto de una reseña

router.get('/:id/texto', (req, res) => {
    const id = req.params.id;

    Resenia.findOne({ id: id })
        .then(resenia => {
            if (!resenia) {
                return res.status(404).send('Reseña no encontrada');
            }
            res.status(200).send(resenia.texto);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

//muestra las reseñas de una materia

router.get('/materia/:nombreMateria', (req, res) => {
    const nombreMateria = req.params.nombreMateria;

    Resenia.find({ materia: nombreMateria })
        .then(resenias => {
            if (!resenias.length) {
                return res.status(404).send('No se encontraron reseñas para la materia proporcionada');
            }
            res.status(200).json(resenias);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});


//muestra las valoraciones negativas
router.get('/:id/positivas', (req, res) => {
    const id = req.params.id;

    Resenia.findOne({ id: id })
        .then(resenia => {
            if (!resenia) {
                return res.status(404).send('Reseña no encontrada');
            }
            res.status(200).send(resenia.positivas);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

//muestra las valoraciones negativas

router.get('/:id/negativas', (req, res) => {
    const id = req.params.id;

    Resenia.findOne({ id: id })
        .then(resenia => {
            if (!resenia) {
                return res.status(404).send('Reseña no encontrada');
            }
            res.status(200).send(resenia.negativas);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

//muestra las estrellas de una reseña

router.get('/:id/estrellas', (req, res) => {
    const id = req.params.id;

    Resenia.findOne({ id: id })
        .then(resenia => {
            if (!resenia) {
                return res.status(404).send('Reseña no encontrada');
            }
            res.status(200).send(resenia.estrellas);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

//muestra los profesores de una materia

router.get('/materia/:nombreMateria/profesor', async (req, res) => {
    const nombreMateria = req.params.nombreMateria;

    try {
        //distinct funcion de mongoDB para filtrar las condiciones
        const profesores = await Resenia.distinct('profesor', { materia: nombreMateria });

        if (profesores.length === 0) {
            return res.status(404).send('No se encontraron profesores para la materia proporcionada');
        }

        res.status(200).json(profesores);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//muestra las reseñas  de un profesor

router.get('/profesor/:nombreProfesor', async (req, res) => {
    const nombreProfesor = req.params.nombreProfesor;

    try {
        // Busca todas las reseñas que coincidan con el nombre del profesor
        const resenias = await Resenia.find({ profesor: nombreProfesor });

        if (resenias.length === 0) {
            return res.status(404).send('No se encontraron reseñas para el profesor proporcionado');
        }

        res.status(200).json(resenias);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default router;
