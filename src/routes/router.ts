import { ColorController } from '../presentation/controllers/ColorController';
import express, { Router } from 'express';
import { HistoryApplyCCController } from '../presentation/controllers/HistoryApplyCCController';
import { validateApplyCCGet } from '../presentation/middlewares/validation/HistoryApplyCCValidation';

const router: Router = express.Router();

const historyApplyCCController = new HistoryApplyCCController();
const colorController = new ColorController();

//User -> from database
router.get('/history-apply-cc', validateApplyCCGet, historyApplyCCController.getHistoryApplyCC.bind(historyApplyCCController));

//Color -> from api
router.get('/colors', colorController.getColor.bind(colorController));

export default router;