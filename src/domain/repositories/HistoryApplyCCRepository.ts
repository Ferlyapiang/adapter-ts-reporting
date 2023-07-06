import { HistoryApplyCC } from '../models/HistoryApplyCC'

export interface HistoryApplyCCRepository {

    getHistoryApplyCC(dateStart: Date, dateEnd: Date): Promise<HistoryApplyCC[]>

}