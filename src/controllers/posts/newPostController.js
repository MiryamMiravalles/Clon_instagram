import insertPostModel from "../../models/posts/insertPostModel.js";
import insertPhotoModel from "../../models/posts/insertPhotoModel.js";
import { savePhotoService } from '../../services/photoService.js';

const newPostController = async (req, res, next) => {
    try {
        
        const {text, image} = req.body;

        const postId = await insertPostModel (text,image, req.user.id);

        let photos=[];

        if (req.files){
            for (let photo of Object.values(req.files).slice(0,8)){

                let photoName = await savePhotoService(photo, 500);

                const photoId = await insertPhotoModel(photoName, postId);

                photos.push({
                    id: photoId,
                    name: photoName
                })
            }
        }

        res. send({
            status: 'ok',
            data:{
                post:{
                    id: postId, 
                    text,                 
                    userId: req.user.id,
                    photos,
                    createdAt: new Date()
                }
            }
        });
    } catch (error) {
        next(error);
    }
}

export default newPostController;