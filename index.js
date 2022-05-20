function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun()


function mondayWork(task = "go to the office") {
    return(`This Monday, I will ${task}.`);
}
mondayWork()

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

