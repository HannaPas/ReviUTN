import mongoose from 'mongoose';

const reseniaSchema = new mongoose.Schema({

    id: String,
    materia: String,
    profesor: String,
    texto: String,
    positivas: Number,
    negativas: Number,
    estrellas: Number,
});

const Resenia = mongoose.model('Resenia', reseniaSchema);

export default Resenia;