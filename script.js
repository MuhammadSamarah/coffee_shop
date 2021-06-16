const form = document.getElementById("items");

function it(num1, num2) {
    return (num1 * num2);
}

function totalCost(e){
    e.preventDefault();

    let numberOfbagels = it(form.bagels.value, 3);
    let numberOftea = it(form.tea.value, 7);
    let numberOfcoffee = it(form.coffee.value, 11);

    let result = (numberOfbagels + numberOftea + numberOfcoffee);

    document.getElementById("totalCost").textContent = `Your total cost is ${result} coins.`;

    form.bagels.value = " ";
    form.tea.value = " ";
    form.coffee.value = " ";
}

form.addEventListener("submit", totalCost);
