// import { nanoid } from 'nanoid';
// import { path } from 'path';
// import { sharp } from 'sharp';
// import { generateError, createPathIfNotExists} from '../helpers';
import db from '../db/posts';

// Controlador para agregar un comentario a un post
const addCommentController = (req,res) => {
    const { post_id } = req.body;
    const user_id = req.user.id; // Suponiendo que tienes el usuario en el objeto de la solicitud

    const addCommentQuery =
    `
        INSERT INTO comments (user_id, post_id) VALUES (?, ?)
    `;

    db.query(addCommentQuery, [user_id, post_id], (err, result) => {
        if(err) {
            console.error('Error al agregar el comentario', err);
            res.status(500).json({ error: 'No se pudo agregar el comentario' });
            return;
        }
        res.status(200).json({ message: 'Comentario correctamente agregado'});
    });
};

// Controlador para quitar un comentario a un post
const removeCommentController = (req,res) => {
    const { post_id } = req.body;
    const user_id = req.user.id; // Suponiendo que tienes el usuario en el objeto de la solicitud

    const removeCommentQuery = 
    `
        DELETE FROM comments WHERE user_id = ? AND post_id = ?
    `;
    
    db.query(removeCommentQuery, [user_id, post_id], (err, result) => {
        if (err) {
            console.error('Error al quitar el comentario:', err);
            res.status(500).json({ error: 'No se pudo quitar el comentario '});
            return;
        }
        res.status(200).json({ message: 'Comentario correctamente quitado' });
    });
};

export {
    addCommentController,
    removeCommentController
};