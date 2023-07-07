import { HistoryApplyCC, CountHistoryApplyCC } from '../models/HistoryApplyCC'

export interface HistoryApplyCCRepository {

    getHistoryApplyCC(dateStart: Date, dateEnd: Date, pageNum: number, sizeNum: number): Promise<HistoryApplyCC[]>
    getCountHistoryApplyCC(dateStart: Date, dateEnd: Date): Promise<CountHistoryApplyCC>

}