console.log("\nassignment 6");
//module final assignment
john = {
    bill : [124, 48, 268, 180, 42],
    tips : [],
    calculateTip(){
        billarr = this.bill;
        var tip;
        var totalTip;
        for(var i=0; i<this.bill.length; i++){
            switch(true){
                case (this.bill[i] > 0 && this.bill[i] < 50) :
                    tip = this.bill[i] * 0.2;
                    break;
                case (this.bill[i] > 50 && this.bill[i] < 200) :
                    tip = this.bill[i] * 0.15;
                    break;
                case (this.bill[i] > 200) :
                    tip = this.bill[i] * 0.1;
                    break;
                default:
                    tip = 0;
            }
        this.tips.push(tip);
        totalTip = totalTip + tip;
        }
        this.totalTip = totalTip;
    },
}
john.calculateTip();
console.log(john);