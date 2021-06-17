const form = document.getElementById("items");
const b = 3;
const z = 7;
const x = 11;

function it(num1, num2) {
    return (num1 * num2);
}

function totalCost(e){
    e.preventDefault();
 
    let numberOfbagels = it(form.bagels.value, b);
    let numberOftea = it(form.tea.value, z);
    let numberOfcoffee = it(form.coffee.value, x);

    let result = (numberOfbagels + numberOftea + numberOfcoffee);

    document.getElementById("totalCost").textContent = `Your total cost is ${result} coins.`;

    form.bagels.value = " ";
    form.tea.value = " ";
    form.coffee.value = " ";
}

form.addEventListener("submit", totalCost);
