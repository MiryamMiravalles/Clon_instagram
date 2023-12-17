import express from 'express';

const router = express.Router();

import authUserController from '../middlewares/authUserController.js';

import {
    entryExistsController,
    userExistsController,
    cantEditController
} from '../middlewares/index.js';

import {
    newEntryController,
    listEntriesController,
    getEntryController,
    likeEntryController, 
    addEntryPhotoController,
    commentEntryController
} from '../controllers/entries/index.js';

router.post('/entries', authUserController, userExistsController, newEntryController);

router.get('/entries', listEntriesController);

router.get('/entries/:entryId', entryExistsController, getEntryController);

router.post('/entries/:entryId/likes',
            authUserController,
            userExistsController,
            entryExistsController,
            likeEntryController  
);

router.post('/entries/:entryId/photos',
            authUserController,
            userExistsController,
            entryExistsController,
            cantEditController,
            addEntryPhotoController
);

router.post('/entries/:entryId/comments',
            authUserController,
            userExistsController,
            entryExistsController,
            commentEntryController
);

export default router;
