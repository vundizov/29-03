var userDay = prompt('введите ваш день рождения ')
var userMonth = prompt('введите ваш месяц рождения')

if (userDay >= 21 && userMonth === 'март' && userDay <= 31
    || userDay >= 1 && userMonth === 'апрель' && userDay <=19) {
    console.log( userDay, userMonth + ' ваш знак зодиака овен')
}
else if (userDay >= 20 && userMonth === 'апрель' && userDay <= 30
    || userDay >= 1 && userMonth === 'май' && userDay <=20) {
    console.log( userDay, userMonth + ' ваш знак зодиака телец')
}
else if (userDay >= 21 && userMonth === 'май' && userDay <= 31
    || userDay >= 1 && userMonth === 'июнь' && userDay <=20) {
    console.log( userDay, userMonth + ' ваш знак зодиака близнецы')
}
 else if (userDay >= 21 && userMonth === 'июнь' && userDay <= 30
    || userDay >= 1 && userMonth === 'июль' && userDay <=22) {
    console.log( userDay, userMonth + ' ваш знак зодиака рак')
}
else if (userDay >= 23 && userMonth === 'июль' && userDay <= 31
    || userDay >= 1 && userMonth === 'август' && userDay <=22) {
    console.log( userDay, userMonth + ' ваш знак зодиака лев')
}
else if (userDay >= 23 && userMonth === 'август' && userDay <= 31
    || userDay >= 1 && userMonth === 'сентябрь' && userDay <=22) {
    console.log( userDay, userMonth + ' ваш знак зодиака дева')
}
else if (userDay >= 23 && userMonth === 'сентябрь' && userDay <= 30
    || userDay >= 1 && userMonth === 'октябрь' && userDay <=22) {
    console.log( userDay, userMonth + ' ваш знак зодиака весы')
}
else if (userDay >= 23 && userMonth === 'октябрь' && userDay <= 31
    || userDay >= 1 && userMonth === 'ноябрь' && userDay <=21) {
    console.log( userDay, userMonth + ' ваш знак зодиака скорпион')
}
else if (userDay >= 22 && userMonth === 'ноябрь' && userDay <= 30
    || userDay >= 1 && userMonth === 'декабрь' && userDay <=21) {
    console.log( userDay, userMonth + ' ваш знак зодиака стрелец')
}
else if (userDay >= 22 && userMonth === 'декабрь' && userDay <= 31
    || userDay >= 1 && userMonth === 'январь' && userDay <=19) {
    console.log( userDay, userMonth + ' ваш знак зодиака козерог')
}
else if (userDay >= 20 && userMonth === 'январь' && userDay <= 31
    || userDay >= 1 && userMonth === 'февраль' && userDay <=18) {
    console.log( userDay, userMonth + ' ваш знак зодиака водолей')
}
else if (userDay >= 19 && userMonth === 'февраль' && userDay <= 28
    || userDay >= 1 && userMonth === 'март' && userDay <=20) {
    console.log( userDay, userMonth + ' ваш знак зодиака рыбы')
}
else {
    alert(userDay = 'такого дня не сущевствует пожалуйста веддите коректные данные' || (userMonth = 'такого месяца не сущевствует пожалуйста введите корктные данные' ))
}