import { HistoryApplyCC } from "../../../domain/models/HistoryApplyCC";
import { HistoryApplyCCModel } from "../model/HistoryApplyCCModel";

export class HistoryApplyCCMapper {

    // toPersistence untuk data yang masuk
    public static toPersistence(applyCC: HistoryApplyCC) : HistoryApplyCCModel{
        const historyApplyCCModel: HistoryApplyCCModel = {
            id: applyCC.id,
            application_date:applyCC.application_date,
            mtn_id:applyCC.mtn_id,
            customer_name:applyCC.customer_name,
            phone_number:applyCC.phone_number,
            status_transaction:applyCC.status_transaction,
            nik:applyCC.nik,
            card_type_name:applyCC.card_type_name,
            automatic_payment_type:applyCC.automatic_payment_type,
            email_estatement:applyCC.email_estatement,
            name_on_card:applyCC.name_on_card,
            home_phone_number:applyCC.home_phone_number
        }
        return historyApplyCCModel
    }

    // toDomain untuk data yang dibawa keluar
    public static toDomain(applyCCModel: HistoryApplyCCModel): HistoryApplyCC {
        const historyApplyCC: HistoryApplyCC = {
            id: applyCCModel.id,
            application_date:applyCCModel.application_date,
            mtn_id:applyCCModel.mtn_id,
            customer_name:applyCCModel.customer_name,
            phone_number:applyCCModel.phone_number,
            status_transaction:applyCCModel.status_transaction,
            nik:applyCCModel.nik,
            card_type_name:applyCCModel.card_type_name,
            automatic_payment_type:applyCCModel.automatic_payment_type,
            email_estatement:applyCCModel.email_estatement,
            name_on_card:applyCCModel.name_on_card,
            home_phone_number:applyCCModel.home_phone_number
        }
        console.log(historyApplyCC)
        return historyApplyCC
    }

}