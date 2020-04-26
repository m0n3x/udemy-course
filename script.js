let budget;
let time; 


function start() {
    budget = +prompt('Ваш бюджет на месяц?');
    console.log(budget);
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(budget) || budget == '' || budget == null ) {
        budget = +prompt('Ваш бюджет на месяц?');
    }
}

start();    

let appData = {
    budjet: budget,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}   
//НАЙТИ ОШИБКУ



// цикл в виде функции:
function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses(){
    for(let i=1; i<4; i++){
        let a = prompt('Введите необязательную статью расходов в этом месяце');
        if ( typeof(a) === 'string' && typeof(a) != null && a!= '' && a.length < 50) {
             console.log('done');
             appData.optionalExpenses[i] = a;
        } else {
            alert('Вы ввели более 50 символов, попробуйте еще раз!');
            a = prompt('Введите обязательную статью расходов в этом месяце')
            
        }
    };

}
chooseOptExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert('Ваш бюджет на один день ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
if (appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Средний уровень достатка');
    } else if(appData.moneyPerDay > 2000) {
    alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка');
    }
}
detectLevel();


function askSavings() {
    let savingsQuestion = confirm('У вас есть накопления?');
    if (savingsQuestion == true) {
        return appData.savings = true;
        
    } else {
        alert('Обязательно инвестируйте!')
    }
}
askSavings();
function checkSavings(){
  
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = +prompt('Под какой годовой процент?');
    
        appData.monthIncome = save/100/12*percent;
        alert('доход в месяц с вашего депозита равен ' + appData.monthIncome); 
    }
}
checkSavings();
console.log(appData);