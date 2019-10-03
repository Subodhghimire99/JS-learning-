console.log("\nassignment 6");
//module final assignment
john = {
    bills = [124, 48, 268, 180, 42],
    tips = [],
    calculateTip(){
        var tip;
        for(var i=0; i<this.bills.length; i++){
            switch(true){
                case (bill[i] > 0 && bill[i] < 50) :
                    tip = bill[i] * 0.2;
                    break;
                case (bill[i] > 50 && bill[i] < 200) :
                    tip = bill[i] * 0.15;
                    break;
                case (bill[i] > 200) :
                    tip = billi[i] * 0.1;
                    break;
                default:
                    tip = 0;
            }
        this.tips.push(tip);
        }
    },
    
}