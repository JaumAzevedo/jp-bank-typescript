export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositoValor: number): void => {
    if(this.validateStatus()){
      if(depositoValor > 0){
        this.balance += depositoValor;
        console.log(this.name + ' depositou ' + depositoValor + '! Seu saldo é de: ' + this.balance)
      } else {
        console.log('Informe um valor para ser depositado.')
      }
    }
  }

  withdraw = (saqueValor: number): void => {
    if(this.validateStatus()){
      if(this.balance >= saqueValor){
        this.balance -= saqueValor;
        console.log(this.name + ' sacou' + saqueValor + '! Seu saldo é de : ' + this.balance);
      } else {
        console.log('Valor informado está indisponível');
      }
    }
  }
  
  getBalance = ( valorEmprestimo: number): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
