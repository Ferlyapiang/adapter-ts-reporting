import { HistoryApplyCC } from "../../domain/models/HistoryApplyCC";
import { HistoryApplyCCRepository } from "../../domain/repositories/HistoryApplyCCRepository";
import { HistoryApplyCCRepositoryImpl} from "../../infrastructure/persistence/repositories/HistoryApplyCCRepositoryImpl";

export class HistoryApplyCCRepositoryAdapter implements HistoryApplyCCRepository{

    private historyApplyCCRepository: HistoryApplyCCRepositoryImpl;

    constructor(){
        this.historyApplyCCRepository = new HistoryApplyCCRepositoryImpl();
    }

    async getHistoryApplyCC(dateStart: Date, dateEnd: Date): Promise<HistoryApplyCC[]> {
        return await this.historyApplyCCRepository.getHistoryApplyCC(dateStart, dateEnd);
    }

}