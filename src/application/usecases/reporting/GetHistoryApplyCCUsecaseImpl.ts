
import { HistoryApplyCCRepositoryAdapter } from "../../../adapters/repositories/HistoryApplyCCRepositoryAdapter";
import { HistoryApplyCC } from "../../../domain/models/HistoryApplyCC";
import { HistoryApplyCCRepository } from "../../../domain/repositories/HistoryApplyCCRepository";
import { GetHistoryApplyCCUsecase } from "../../../domain/usecase/user/GetHistoryApplyCCUsecase";
import { GenericResponse } from "../../responses/GenericResponse";

export class GetHistoryApplyCCUsecaseImpl implements GetHistoryApplyCCUsecase{

    private historyApplyCCRepository: HistoryApplyCCRepository;

    constructor(){
        this.historyApplyCCRepository = new HistoryApplyCCRepositoryAdapter();
    }

    async execute(dateStart: Date, dateEnd: Date): Promise<GenericResponse<HistoryApplyCC[]>> {
        try {
            const result = await this.historyApplyCCRepository.getHistoryApplyCC(dateStart, dateEnd);
            return{
                success: true,
                message: 'Success to get History Apply CC.',
                data: result
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: 'Failed to get History Apply CC.'
            };
        }
    }

}