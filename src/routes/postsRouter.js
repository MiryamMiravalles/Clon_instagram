import express from 'express';

// Creación de un enrutador Express
const router = express.Router();

// Importacón de controladores y middlewares necesarios para manejar las solicitudes de ruta 
import authUserController from '../middlewares/authUserController.js';

import {
    postExistsController,
    userExistsController,
    cantEditController
} from '../middlewares/index.js';

import {
    newPostController,
    listPostsController,
    getPostController,
    likePostController, 
    addPostPhotoController,
    commentPostController,
    deleteCommentController,
    deleteLikeController
} from '../controllers/posts/index.js';

// Configuración de las rutas
router.post('/posts', authUserController, userExistsController, newPostController);

router.get('/posts', listPostsController);

router.get('/posts/:postId', postExistsController, getPostController);

router.post('/posts/:postId/likes',
            authUserController,
            userExistsController,
            postExistsController,
            likePostController  
);

router.post('/posts/:postId/photos',
            authUserController,
            userExistsController,
            postExistsController,
            cantEditController,
            addPostPhotoController
);

router.post('/posts/:postId/comments',
            authUserController,
            userExistsController,
            postExistsController,
            commentPostController.addComment
);

router.delete('/deleteComment/:postId/:commentId',
            authUserController,
            userExistsController,
            postExistsController,
            deleteCommentController
)

router.delete('/deleteLike/:postId/:likeId',
            authUserController,
            userExistsController,
            postExistsController,
            deleteLikeController
)

export default router;