interface Cashier{
    name: string,
    age: number,   
    sex: Sex,
    yearsOfExpiriance: number,
    shop: Shop
}

enum Sex{
    women = 0,
    Men = 1
}

interface Shop{
    name: string,
    address: string
}

interface CashRegister{
    cashier: Cashier,
    shift: Date
}

export {Cashier, CashRegister, Shop}

