let budget = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budjet: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}   



for(let i=0; i<2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?');
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
     && a!= '' && b!= '' && a.length < 50) {
         console.log('done');
         appData.expenses[a] = b;
    } else {
        alert('Вы ввели более 50 символов, попробуйте еще раз!');
        a = prompt('Введите обязательную статью расходов в этом месяце')
        b = prompt('Во сколько обойдется?');
    }
        
};

// второй цикл 
// let i = 0;
// while(i<2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');
// if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//  && a!= '' && b!= '' && a.length < 50) {
//      console.log('done');
//      appData.expenses[a] = b;
// } else {
//     alert('Вы ввели более 50 символов, либо оставили строку пустой, попробуйте еще раз!');
//     a = prompt('Введите обязательную статью расходов в этом месяце')
//     b = prompt('Во сколько обойдется?');
// }
// i++;
// }

//третий цикл
// let i = 0;
// do{
   
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');
// if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//  && a!= '' && b!= '' && a.length < 50) {
//      console.log('done');
//      appData.expenses[a] = b;
// } else {
//     alert('Вы ввели более 50 символов, либо оставили строку пустой, попробуйте еще раз!');
//     a = prompt('Введите обязательную статью расходов в этом месяце')
//     b = prompt('Во сколько обойдется?');
// }
// i++
// } while(i<2);

appData.moneyPerDay = appData.budjet / 30;

console.log(appData.moneyPerDay)
alert('Ваш бюджет на один день ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Средний уровень достатка');
    } else if(appData.moneyPerDay > 2000) {
    alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка');
    }

console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);


