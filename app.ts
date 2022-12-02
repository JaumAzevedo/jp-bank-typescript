import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { MysteryAccount } from './class/MysteryAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit( 100 )
peopleAccount.withdraw( 50 )
peopleAccount.deposit( 100 )
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit( 100 )
companyAccount.getLoan( 100 )
const mysteryAccount: MysteryAccount = new MysteryAccount('DIOPlus', 20)
mysteryAccount.depositPlus(100)

console.log(companyAccount)