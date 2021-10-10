import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..','..', 'uploads'),
        filename: (request, file, cb) => {
            //evitando duas pessoas baixarem e sobrescrever dois arquivos iguais ao mesmo tempo
            const fileName = `${Date.now()}-${file.originalname}`; 

            cb(null, fileName);

        },
    })
}