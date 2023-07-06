import { PrismaClient } from "@prisma/client";
import { HistoryApplyCCRepository } from "../../../domain/repositories/HistoryApplyCCRepository";
import { HistoryApplyCC } from "../../../domain/models/HistoryApplyCC";
import { HistoryApplyCCMapper } from "../mapper/HistoryApplyCCMapper";

export class HistoryApplyCCRepositoryImpl implements HistoryApplyCCRepository{

    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async getHistoryApplyCC(dateStart: Date, dateEnd: Date): Promise<HistoryApplyCC[]> {
        const isValidDateStart = !isNaN(dateStart.getTime());
        const isValidDateEnd = !isNaN(dateEnd.getTime());

        if (!isValidDateStart || !isValidDateEnd) {
            throw new Error('Invalid date provided');
        }
        const mb_trx_apply = await this.prisma.mb_trx_apply.findMany({
            where: {
                application_date: {
                  gte: dateStart,
                  lte: dateEnd,
                },
              },
        });

        const transformedData: HistoryApplyCC[] = mb_trx_apply.map((sourceItem) => {
            const { 
                id, 
                application_date, 
                mtn_id,  
                customer_name, 
                phone_number, 
                status_transaction, 
                nik, 
                card_type_name, 
                automatic_payment_type, 
                email_estatement, 
                name_on_card, 
                home_phone_number
            } = sourceItem;
            
            const destinationItem: HistoryApplyCC = HistoryApplyCCMapper.toDomain({
                id: id,
                application_date: application_date,
                mtn_id: String(mtn_id? mtn_id: ""),
                customer_name: String(customer_name? customer_name : ""),
                phone_number: String(phone_number? phone_number : ""),
                status_transaction: String(status_transaction? status_transaction : ""),
                nik: String(nik? nik : ""),
                card_type_name: String(card_type_name? card_type_name : ""),
                automatic_payment_type: String(automatic_payment_type? automatic_payment_type : ""),
                email_estatement: String(email_estatement? email_estatement : ""),
                name_on_card: String(name_on_card? name_on_card : ""),
                home_phone_number: String(home_phone_number? home_phone_number : "")
            });

            console.log(destinationItem)
            
                return destinationItem;
            });
        return transformedData
    }
}