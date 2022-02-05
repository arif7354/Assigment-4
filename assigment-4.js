// problem-(1)
// Ana to Vori function
function anaToVori(anas) {
    const vori = anas / 16;
    return vori;

}
let myAnas = 48;
let vori = anaToVori(myAnas);
console.log(vori);


// problem - 2 : panda Cost //
function pandaCost(singara, somosa, jilapi) { 
    if( typeof singara, somosa, jilapi < 0 ) {
        return 'please enter a positive value';
    }
    const singaraPrice = singara * 7;
    const somosaPrice = somosa * 10;
    const jilapiPrice = jilapi * 15;

    // Total Cost:
    const total = singaraPrice + somosaPrice + jilapiPrice;
    return total;
}
// totalCost = pandaCost( 5, 5, 5);
// console.log(totalCost);



// problem - 3: picnicBudget // 
function picnicBudget(members){ 
    if(typeof members != 'number'){
        return 'please enter a number';
    }
    if( members < 0 ){
        return 'please enter a positive number';
    }
    // variable declaring 
    const firstHundredMembersCost = 5000;
    const secondHundredMembersCost = 4000;
    const restMembersCost = 3000;
        
    if(members <=100){
        const cost = members * firstHundredMembersCost;
        return cost;
    }
    else if(members <=200){
        const firstPhaseCost = 100 * firstHundredMembersCost;
        const restMembers = members - 100;
        const secondPhaseCost = restMembers * secondHundredMembersCost;
        const totalCost = firstPhaseCost + secondPhaseCost;
        return totalCost;
    }
    else{
        const firstPhaseCost = 100 * firstHundredMembersCost;
        const secondPhaseCost = 100 * secondHundredMembersCost;
        const lestMembers = members - 200;
        const lestPhaseCost = lestMembers * lestMembersCost;
        const totalCost = firstPhaseCost + secondPhaseCost+ lestPhaseCost; 
        return totalCost;
    }
}
// const numberOfMembers = picnicBudget(250);
// console.log(numberOfMembers);



// problem - 4 : oddFriend //

function oddFriend(names){
    if(typeof names == 'number'){
        return 'please enter letter';}
    for(i= 0; i < names.length; i++ ){
        let element = names[i].toString();
        if(element.length %2 != 0){
            return element;
        }

    }
}
// friendNames= oddFriend(['Arman', 'Mohin', 'Rayhan', 'Himu']);
// console.log(friendNames);