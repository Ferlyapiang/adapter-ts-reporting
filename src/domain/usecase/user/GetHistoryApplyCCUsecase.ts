import { GenericResponse } from "../../../application/responses/GenericResponse";
import { HistoryApplyCC } from "../../models/HistoryApplyCC";

export interface GetHistoryApplyCCUsecase{
    execute(dateStart: Date, dateEnd: Date) : Promise<GenericResponse<HistoryApplyCC[]>>
}