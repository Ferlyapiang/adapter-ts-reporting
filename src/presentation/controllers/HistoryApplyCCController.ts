import { Request, Response } from 'express';
import { GetHistoryApplyCCUsecaseImpl } from '../../application/usecases/reporting/GetHistoryApplyCCUsecaseImpl';

export class HistoryApplyCCController{
  private getHistoryApplyCCUsecase : GetHistoryApplyCCUsecaseImpl
    
  constructor(){
    this.getHistoryApplyCCUsecase = new GetHistoryApplyCCUsecaseImpl()
  }

  public async getHistoryApplyCC(req: Request, res: Response): Promise<void> {
    const { dateStart, dateEnd } = req.body; // Dapatkan tanggal mulai dan akhir dari query params
    const { page, size } = req.query;
    // Pastikan objects sesuai kebutuhan Anda
    const startDate = new Date(dateStart as string);
    const endDate = new Date(dateEnd as string);
    const pageNum = Number.parseInt(page as string);
    const sizeNum = Number.parseInt(size as string);

    const historyApplyCC = await this.getHistoryApplyCCUsecase.execute(startDate, endDate, pageNum, sizeNum);

    if (historyApplyCC) {
      res.status(200).json(historyApplyCC);
    } else {
      res.status(404).json({ error: 'History Apply CC not found' });
    }
  }
}