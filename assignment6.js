console.log("\nassignment 6");
//module final assignment
john = {
    bill : [124, 48, 268, 180, 42],
    tips : [],
    calculateTip(){
        var tip;
        for(var i=0; i<this.bill.length; i++){
            var totalTip;
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
        }
    },
}
john.calculateTip();
var totalWithTip = [];
for(i=0; i<john.tips.length; i++){
    let withTip = john.tips[i] + john.bill[i];
    totalWithTip.push(withTip);
}
john.totalWithTip = totalWithTip;
console.log("The final john object is : ");
console.log(john);
console.log(`\nBills amount are : ${john.bill}\n\nTips are : ${john.tips}\n\nAmount with tips added are : ${john.totalWithTip}\n\n`);

// Assignment part 2
console.log("Mark object : part II results \n")
mark = {
    bill : [77, 375, 110, 45],
    tip : [],
}
calculateTip = function(){
    var tip;   
    for(var i=0; i<mark.bill.length; i++){
        switch(true){
            case (mark.bill[i] > 0 && mark.bill[i] < 100) :
                tip = mark.bill[i] * 0.2;
                break;
            case (mark.bill[i] > 100 && mark.bill[i] < 300) :
                tip = mark.bill[i] * 0.15;
                break;
            case (mark.bill[i] > 300) :
                tip = mark.bill[i] * 0.1;
                break;
            default:
                tip = 0;
        }
        mark.tip.push(tip);
    }
}
var avgTip = function(){
    var markSum = 0;
    var johnSum = 0;

    for(i=0; i<john.tips.length; i++){
        johnSum = johnSum + john.tips[i];
    }
    johnAvg = johnSum / john.tips.length;

    for(i=0; i<mark.tip.length; i++){
        markSum = markSum + mark.tip[i];
    }
    markAvg = markSum / mark.tip.length;
    
    console.log("mark tip is " + markAvg + "\n" + "john tip is " + johnAvg);
    if(johnAvg > markAvg){
        console.log("John\'s family paid the highest tip.")
    } else if (markAvg > johnAvg){
        console.log("Mark\'s family paid the highest tip.")
    } else {
        console.log("Both family paid the same amount of tip.")
    }
}
calculateTip();
console.log("The tips array is : " + mark.tip)
avgTip();