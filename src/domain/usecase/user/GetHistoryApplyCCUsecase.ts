import { GenericResponse } from "../../../application/responses/GenericResponse";
import { HistoryApplyCC,CountHistoryApplyCC } from "../../models/HistoryApplyCC";

export interface GetHistoryApplyCCUsecase{
    execute(dateStart: Date, dateEnd: Date, pageNum: number, sizeNum: number) : Promise<GenericResponse<HistoryApplyCC[]>>
}