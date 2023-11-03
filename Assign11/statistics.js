class NumberList{
    constructor(numbers){
        this.valid = true;
        this.numbers = numbers.value.trim().split(' ');
        if (this.numbers.length == null){
            alert("The list cannot be empty, please enter valid numbers.");
            valid = false;
            return;
        }
        for (var i = 0; i < this.numbers.length; ++i){
            if (isNaN(this.numbers[i])){
                alert(this.numbers[i] + " is not a number, please enter a valid number");
                valid = false;
                return;
            }
        }
    }   

    findMean(){
        if (!this.valid){
            return;
        }
        var sum = 0;
        var mean = 0;
        for (var i = 0; i < this.numbers.length; ++i){
            sum += parseFloat(this.numbers[i]);
        }
        
        mean = sum / this.numbers.length;
        return mean;
    }

    findSD(){
        var mean = this.findMean();
        var dev = [];
        var sum = 0;
        var sd = 0;

        for(var i = 0; i < this.numbers.length; ++i){
            dev[i] = Math.pow(parseFloat(this.numbers[i] - mean), 2);
            sum += dev[i]; 
        }
        sd = Math.sqrt(sum / (this.numbers.length - 1));
        return sd;
    }

    findVar(){
        var sd = this.findSD();
        return parseFloat(sd*sd);

    }
}

function createList(element){
    const doc = document.getElementById('numberlist');
    var nl = new NumberList(doc);
    const btnRow = document.getElementsByClassName("btnRow");
    option = element.value

    switch (option){
        case "Mean":
            var mean = nl.findMean();
            alert("Mean of the values entered: " + mean.toFixed(2));
            break;
        case "Variance":
            var vari = nl.findVar();
            alert("Variance of the values entered: " + vari.toFixed(2));
            break;
        case "Standard Deviation":
            var sd = nl.findSD();
            alert("Standard Deviation of the values entered: " + sd.toFixed(2));
            break;
    }
}