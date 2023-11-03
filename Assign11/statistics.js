class NumberList{
    constructor(numbers){
        console.log(numbers.value);
        this.numbers = numbers.value.split(' ');
    }   

    findMean(){
        console.log(this.numbers);
    }

    findVar(){
        console.log(this.numbers);
    }

    findSD(){
        console.log(this.numbers);
    }
}


function createList(element){
    var nl = new NumberList(element);
    

}