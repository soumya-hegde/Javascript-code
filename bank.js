/*Problem Statement: Bank Account Constructor Function

Create a Constructor Function called BankAccount that allows creating and managing individual bank accounts.

Each BankAccount object should have the following properties:
	•	accountNumber (string)
	•	accountHolderName (string)
	•	balance (number)

And the following methods:
	•	deposit(amount) – Adds the given amount to the account balance. Amount must be positive.
	•	withdraw(amount) – Deducts the amount from the account balance. Ensure sufficient funds before withdrawal.
	•	getBalance() – Returns the current account balance.
	•	displayAccountInfo() – Prints the account number, holder’s name, and balance.

Requirements:
	1.	Use a constructor function, not classes.
	2.	Demonstrate the functionality by creating at least two bank accounts and performing a series of deposits, withdrawals, and balance checks.

Example Output:

Account created: 123456 | John Doe | Balance: $1000
Depositing $500...
New Balance: $1500
Withdrawing $200...
New Balance: $1300*/

function BankAccount(aNumber,aName,aBalance){
    this.accountNumber = aNumber,
    this.accountHolderName = aName,
    this.balance = aBalance;
   /* this.getBalance = function(){
        return `${this.accountHolderName} has balance of INR ${this.balance}`;
    }*/ //instead of defining inside the object define it outside for the memory optimization.
}
BankAccount.prototype.getBalance = function(){
    return `${this.accountHolderName} has balance of INR ${this.balance}`;
}
BankAccount.prototype.displayAccountInfo = function(){
    return `Account Number:${this.accountNumber}, Holders Name:${this.accountHolderName}, Balance:${this.balance}`;
}
BankAccount.prototype.deposit = function(amount){
    let result = 0;
    if(amount > 0){
    result = this.balance + amount ;
    return `Added Amount result: ${result}`;
    }
    else{
        return `Amoount should be a positive Number`;
    }
}
BankAccount.prototype.withdraw = function(amount){
    if(amount > this.balance){
        return `Insuffiecient amount`
    }
    else{
        this.balance -= amount;
        return this.balance;
    }
}

const c1 = new BankAccount('SBI123','Jeevan',1000);
console.log(c1);
console.log(c1.getBalance());
console.log(c1.displayAccountInfo());
console.log(c1.deposit(-1500));
console.log(c1.withdraw(500));

const c2 = new BankAccount('SBI124','Preetam',1500);
console.log(c2);
console.log(c2.getBalance());
console.log(c2.displayAccountInfo());
console.log(c2.deposit(8500));
console.log(c2.withdraw(1500));


///
let items = [1,2,3];
let copy = items;
copy.length = 1;
console.log(items);

/*let c = {t:1,m:{a:6}};
let d = c;
d.m.a = 10;
console.log(c.m.a);*/

let s = {data:[1,2,3,4]};
let d = s;
d.data.push(5);
console.log(d);

let o = [5,6,7];
let e = o;
e[0] = 0;
console.log(o[0]);