import { CountHistoryApplyCC, HistoryApplyCC } from "../../domain/models/HistoryApplyCC";
import { HistoryApplyCCRepository } from "../../domain/repositories/HistoryApplyCCRepository";
import { HistoryApplyCCRepositoryImpl} from "../../infrastructure/persistence/repositories/HistoryApplyCCRepositoryImpl";

export class HistoryApplyCCRepositoryAdapter implements HistoryApplyCCRepository{

    private historyApplyCCRepository: HistoryApplyCCRepositoryImpl;

    constructor(){
        this.historyApplyCCRepository = new HistoryApplyCCRepositoryImpl();
    }

    async getHistoryApplyCC(dateStart: Date, dateEnd: Date, pageNum: number, sizeNum: number): Promise<HistoryApplyCC[]> {
        return await this.historyApplyCCRepository.getHistoryApplyCC(dateStart, dateEnd, pageNum, sizeNum);
    }

    async getCountHistoryApplyCC(dateStart: Date, dateEnd: Date): Promise<CountHistoryApplyCC> {
        return await this.historyApplyCCRepository.getCountHistoryApplyCC(dateStart, dateEnd)
    }

}