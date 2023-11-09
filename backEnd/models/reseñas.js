import mongoose from "mongoose"

const resenias = mongoose.Schema({
    id: Number,
    materia: String,
    profesor: String,
    texto: String,
    positivas: Number,
    negativas: Number,
    estrellas: Number
})

export default mongoose.model("resenias", resenias)