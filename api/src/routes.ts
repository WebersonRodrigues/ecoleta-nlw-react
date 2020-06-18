import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

routes.get('/items', itensController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

// Padrão da comunidade.
// Index se for listar
// Show se for mostrar um unico 
// Create, updade e delete

export default routes;