import { Request, Response } from 'express';
import { GetHistoryApplyCCUsecaseImpl } from '../../application/usecases/reporting/GetHistoryApplyCCUsecaseImpl';

export class HistoryApplyCCController{
    private getHistoryApplyCCUsecase : GetHistoryApplyCCUsecaseImpl
    
    constructor(){
        this.getHistoryApplyCCUsecase = new GetHistoryApplyCCUsecaseImpl()
    }

    public async getHistoryApplyCC(req: Request, res: Response): Promise<void> {
        const { dateStart, dateEnd } = req.body;
  
    const historyApplyCC = await this.getHistoryApplyCCUsecase.execute(dateStart, dateEnd);

    if (historyApplyCC) {
      res.status(200).json(historyApplyCC);
    } else {
      res.status(404).json({ error: 'History Apply CC not found' });
    }
  }
}