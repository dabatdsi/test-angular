import { Employes } from "./employes";
import { PayBy } from "./pay-by";
import { TypeTrans } from "./type-trans";

export class Transaction {
    idTrans: number =1;
    datePayment: Date=new Date();
    statusPay :PayBy=0;
    statusType:TypeTrans=0;
    description: string=''; 
    montant: number=0;
    employes:Employes=new Employes;
}
