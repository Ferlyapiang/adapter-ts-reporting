
import { HistoryApplyCCRepositoryAdapter } from "../../../adapters/repositories/HistoryApplyCCRepositoryAdapter";
import { HistoryApplyCC } from "../../../domain/models/HistoryApplyCC";
import { HistoryApplyCCRepository } from "../../../domain/repositories/HistoryApplyCCRepository";
import { GetHistoryApplyCCUsecase } from "../../../domain/usecase/user/GetHistoryApplyCCUsecase";
import { PaginationResponse } from "../../responses/PaginationResponse";

export class GetHistoryApplyCCUsecaseImpl implements GetHistoryApplyCCUsecase{

    private historyApplyCCRepository: HistoryApplyCCRepository;

    constructor(){
        this.historyApplyCCRepository = new HistoryApplyCCRepositoryAdapter();
    }

    async execute(dateStart: Date, dateEnd: Date, pageNum: number, sizeNum: number): Promise<PaginationResponse<HistoryApplyCC[]>> {
        try {
            const result = await this.historyApplyCCRepository.getHistoryApplyCC(dateStart, dateEnd, pageNum, sizeNum);
            const totalResult = await this.historyApplyCCRepository.getCountHistoryApplyCC(dateStart, dateEnd);
            return{
                success: true,
                message: 'Success to get History Apply CC.',
                totalItems: totalResult.total,
                totalPages: Math.ceil( totalResult.total / sizeNum),
                currentPage: pageNum,
                content: result
            }
        } catch (error) {
            // console.log(error)
            return {
                success: false,
                message: 'Failed to get History Apply CC.'+error
            };
        }
    }

}