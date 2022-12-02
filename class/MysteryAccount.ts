import { DioAccount } from "./DioAccount"

export class MysteryAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit2(amount: number){
    this.deposit(amount);
  }

  depositPlus = (depositoValorPlus: number): void => {
    if(this.validateStatus()){
      if(depositoValorPlus > 0){
        this.deposit2(depositoValorPlus + 10)
        console.log('Você depositou ' + depositoValorPlus + ' e ganhou mais R$10,00!')
      } else {
        console.log('Informe um valor para ser depositado.')
      }
    }
  }


}
