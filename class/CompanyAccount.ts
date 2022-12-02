import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (emprestimoValor: number): void => {
    if(this.validateStatus()){
      if(emprestimoValor > 0){
        console.log('Você pegou um empréstimo de: ' + emprestimoValor)
      } else {
        console.log('Informe um valor para ser emprestado.')
      }
    }
  }


}
