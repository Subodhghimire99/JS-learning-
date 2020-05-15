var budgetController = function(){
    var Income = function(id, desc, val){
        this.id = id;
        this.desc = desc;
        this.val = val;
    };
    var Expense = function(id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.val/totalIncome) * 100);
        }else{
            this.percentage = -1;
        }
    }
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItem[type].forEach(function(item){
            sum += item.val;
        });
        data.totals[type] = sum;
    };
    var data = {
        allItem: {
            inc:[],
            exp:[],
        },
        totals: {
            inc:0,
            exp:0,
        },
        budget: 0,
        percentage: -1,

    }
    return {
        addItem: function(type, desc, val){
            var newItem, id;

            if (data.allItem[type].length !== 0 ){
                id = data.allItem[type][data.allItem[type].length - 1].id + 1;
            }
            else{
                id = 0;
            }

            if (type === "inc") {
                newItem = new Income(id, desc, val);
            }
            else if (type === "exp") {
                newItem = new Expense(id, desc, val);
            }
            data.allItem[type].push(newItem);
            return newItem;
        },
        deleteItem: function(type, id) {
            var ids, index;
            ids = data.allItem[type].map(function(current){
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItem[type].splice(index, 1);
            }
        },
        calculatePercentages: function() {
            data.allItem.exp.forEach(function(current){
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var allPerc = data.allItem.exp.map(function(current){
                return current.percentage;
            });
            return allPerc;
        },
        calculateBudget: function(){
            //calculate total
            calculateTotal('inc');
            calculateTotal('exp');
            //returning budget
            data.budget = data.totals.inc - data.totals.exp;
            //calculate percentage
            if (data.totals.inc > 0){
                data.percentage = Math.floor((data.totals.exp/data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }
            
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
            }
        },
        testing: function() {
            console.log(data);
        }
    };

}();

var uiController = function(){
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel : '.item__percentage',
        dateLabel : '.budget__title--month',
    }

    var formatNumber = function(num, type) {
        var numSplit
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split(".");
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length-3) + "," + int.substr(int.length-3, 3);
        }
        dec = numSplit[1];
        return (type === 'exp' ? "-":"+")+ " " + int+"."+dec
    };

    var nodeListForEach = function(list, callback){
        for(var i=0; i<list.length; i++){
            callback(list[i], i);
        }
    };
    return {
        inputData: function(){
            return{
                type: document.querySelector(domStrings.inputType).value,
                desctiption: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value),
            }
        },
        addItem: function(obj, type) {
            var element,html, newHtml;

            //creating html element
            if (type === 'inc') {
                element = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = domStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replacing actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.desc);
            newHtml = newHtml.replace('%value%', formatNumber(obj.val, type));
            //adding using insert adjacent html function
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        removeItem: function(selectorId){
            var el;
            el = document.getElementById(selectorId);
            el.parentElement.removeChild(el);
        },

        clearFields: function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(domStrings.inputDescription + ',' + domStrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(field){
                field.value = '';
            });
            fieldsArray[0].focus();
        },
        displayBudget: function(budgetData){
            var type;
            budgetData.budget > 0? type='inc' : type='exp';
            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(budgetData.budget, type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(budgetData.totalInc, 'inc');
            document.querySelector(domStrings.expensesLabel).textContent = formatNumber(budgetData.totalExp, 'exp');
            if (budgetData.percentage > 0){
                document.querySelector(domStrings.percentageLabel).textContent = budgetData.percentage + "%";
            }
            else {
                document.querySelector(domStrings.percentageLabel).textContent = "---";
            }
         },
         displayPercentage: function(percentages){
            var fields = document.querySelectorAll(domStrings.expensesPercLabel);
            nodeListForEach(fields, function(current, index){
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                }else{
                    current.textContent = "---";
                }
            });
         },
         displayMonth: function(){
            var now, months, month, year;
            now = new Date();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(domStrings.dateLabel).textContent = months[month] + " " + year;
         },
         changedType: function(){
            var fields = document.querySelectorAll(
                domStrings.inputType + ',' +
                domStrings.inputType + ',' +
                domStrings.inputValue
            )
            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });
            document.querySelector(domStrings.addButton).classList.toggle('red');
         },
        getDomStrings: function() {
            return domStrings
        }
    }
}();

var appController =  function(budgetCtrl, uiCtrl){
    
    var setUpEventListeners = function() {
        var dom = uiCtrl.getDomStrings();
        document.querySelector(dom.addButton).addEventListener('click', ctrlAddItem);
        document.addEventListener("keypress", (e)=>{
            if (e.keyCode === 13 || e.which === 13){
                ctrlAddItem();
            }
        });

        document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(dom.inputType).addEventListener('change', uiCtrl.changedType)
    };

    var updateBudget = function() {
        //calculate budget
        budgetCtrl.calculateBudget();
        // return budget 
        var budget = budgetCtrl.getBudget();
        // update ui
        uiCtrl.displayBudget(budget);
    };

    var updatePercentage = function() {
        //clacpercentage
        budgetCtrl.calculatePercentages();
        // read percentage
        var percentages = budgetCtrl.getPercentages();
        //update ui
        uiCtrl.displayPercentage(percentages);
    }

    var ctrlAddItem = function() {
        var data, newItem;
        //get input data'
        data = uiCtrl.inputData();
        if (data.desctiption != "" && !isNaN(data.value) && data.value != 0){
            //add to budget controller
            newItem = budgetCtrl.addItem(data.type, data.desctiption, data.value);
            //add to ui
            uiCtrl.addItem(newItem, data.type);
            //clear Fields
            uiCtrl.clearFields();
            //update and calculate budget
            updateBudget();
            // update expence percentage
            updatePercentage();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemId, splitId, ID, type;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
            splitId = itemId.split("-");
            ID = parseFloat(splitId[1]);
            type = splitId[0];
        }
        // delete from datastructure
        budgetCtrl.deleteItem(type, ID);
        //delete from ui
        uiCtrl.removeItem(itemId);
        //update new budger
        updateBudget();
        // update expence percentage
        updatePercentage();
    }

    return {
        init: function(){
            console.log("initialized");
            uiCtrl.displayMonth();
            uiCtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1,
            });
            setUpEventListeners();
        }
    }
}(budgetController, uiController);

appController.init();