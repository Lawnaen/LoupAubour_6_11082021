// Importation de Mongoose permettant la création de schéma de données
const mongoose = require('mongoose');

// Création d'un schéma de données pour la fonction like/dislike
const likeSchema = mongoose.Schema({
    userId: { type: String, required: true },
    like: { type: Number, required: true },
});

// Exportation du schéma de données pour l'exploiter comme modèle dans le projet avec le nom du modèle et la constante correspondante
module.exports = mongoose.model('Like', likeSchema);