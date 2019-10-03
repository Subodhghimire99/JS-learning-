var tips = [];
var tipWithBill = [];
//tip calculator
function calculateTip(bill){
    switch(true){
        case (bill > 0 && bill < 50):
            tip = bill * 0.2;
            break;
        case (bill > 50 && bill < 200):
            tip = bill * 0.15;
            break;
        case (bill > 200):
            tip = bill * 0.1;
            break;
        default:
            tip = 0;
    }
    total = bill + tip;
    tips.push(tip);
    tipWithBill.push(total);
}
calculateTip(124);
calculateTip(48);
calculateTip(268);
console.log(`The tips paid are : ${tips}`);
console.log(`The arrays with the bill + tips is : ${tipWithBill}`);