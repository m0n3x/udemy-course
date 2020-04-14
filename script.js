let budget = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    бюджет: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}   
let a1 = prompt('Введите обязательную статью расходов в этом месяце');
let a2 = prompt('Во сколько обойдется?');
let a3 = prompt('Введите обязательную статью расходов в этом месяце');
let a4 = prompt('Во сколько обойдется?');
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;
alert('Ваш бюджет на один день ' + appData.бюджет/30);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);


