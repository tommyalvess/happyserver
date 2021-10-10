import {request, response, Router} from 'express';
import multer from 'multer';
import OphanagesControllers from './controllers/OphanagesControllers';
import uploadsConfig from './config/upload';

//Repository Pattern - ele q detem a regra de como tem que ser criado, deletado, etc. 
const routes = Router();
const uploads = multer(uploadsConfig);

routes.get('/ophanages',  OphanagesControllers.index);
routes.get('/ophanages/:id',  OphanagesControllers.show);
routes.post('/ophanages', uploads.array('images') ,OphanagesControllers.create);

export default routes;