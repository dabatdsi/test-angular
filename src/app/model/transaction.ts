import { Employes } from "./employes";
import { PayBy } from "./pay-by";
import { TypeTrans } from "./type-trans";

export class Transaction {
    idTrans !: number ;
    datePayment: Date=new Date();
    statusPay !:PayBy;
    statusType!:TypeTrans;
    description: string=''; 
    montant!: number;
    employes:Employes=new Employes;
    idEmployes!:number;
    dataForm: any;
}
