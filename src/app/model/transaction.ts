import { Employes } from "./employes";
import { PayBy } from "./pay-by";
import { TypeTrans } from "./type-trans";

export class Transaction {
    idTrans: number =2;
    datePayment: Date=new Date();
    statusPay :PayBy=PayBy.cache;
    statusType:TypeTrans= TypeTrans.decaissement;
    description: string=''; 
    montant: number=0;
    employes:Employes=new Employes;
    dataForm: any;
}
