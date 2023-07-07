export interface HistoryApplyCCModel{
    id:number;
    application_date:Date;
    // mtn_id:String;
    customer_name:String;
    phone_number:String;
    status_transaction:String;
    nik:String;
    card_type_name:String;
    // automatic_payment_type:String;
    // email_estatement:string;
    // name_on_card:string;
    // home_phone_number:string;
}

export interface CountHistoryApplyCCModel{
    total:number;
}