console.log("\nAssignment 5 \n");
//Object and methods
john = {
    name : "John Smith",
    mass : 35,
    height : 1.3,
    bmi(){
        this.bmi = this.mass/(this.height * this.height);
    }
};
john.bmi();
mark = {
    name : "Mark Ghimire",
    mass : 40,
    height : 1.3,
    bmi(){
        this.bmi = this.mass/(this.height * this.height);
    }
};
mark.bmi();

console.log(`Mark\'s Bmi : ${mark.bmi}\njohn\'s bmi : ${john.bmi}`);
if (john.bmi > mark.bmi){
    console.log("John\'s bmi is greater than Mark\'s")
} else if (mark.bmi > john.bmi) {
    console.log("Mark\'s bmi is greater than John\'s")
} else {
    console.log("Both john and mark have equal bmi :-)")
}