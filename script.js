let submitForm = document.querySelector('#form')

class Info{
    constructor(date, totalEntries, totalExits, time){
        this.date = date;
        this.time = time;
        this.totalEntries = totalEntries;
        this.totalExits = totalExits;
    }
    addTime(sinceTime, untilTime, entry, exit){
        this.time.push({sinceTime, untilTime, entry, exit})
    }
}


//EVENTS
document.querySelector('#entryExitform').addEventListener('submit', (e) => {
    e.preventDefault();

    let entryCount = document.getElementsByClassName('entry');
    let exitCount = document.getElementsByClassName('exit');
    let entryHour = document.getElementsByClassName('entryHour');
    let exitHour = document.getElementsByClassName('exitHour');

    let arrayEntry = arrayIteration(entryCount)
    let arrayExit = arrayIteration(exitCount)

    let entries = sumArray(arrayEntry)
    let exits = sumArray(arrayExit)

    displayTotal(entries, exits)

    let date = '01/01/2023'

    const info = new Info(date, entries, exits, [])

    let hoursEntriesExits = iterationObjectsArray(entryHour, exitHour, entryCount, exitCount)
    info.addTime(hoursEntriesExits)
    console.log(info)

})


//FUNCTIONS
const sumArray = (array) => {

    let total = array.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0)

    return total
}

const displayTotal = (totalEntries, totalExits) => {
    const totalsContainer = document.querySelector('.totalOutputContainer');
    const row = document.createElement('div');
    row.innerHTML = 
       `
         <div>Total Entradas: ${totalEntries}</div>
         <div>Total Salidas: ${totalExits}</div>
       `;
    totalsContainer.appendChild(row);
    console.log("Total Entradas: ", totalEntries, " Total Salidas: ", totalExits)
}

const arrayIteration = (count) => {
    
    let array = []
    for(i=0; i<count.length; i++){
        array.push(count[i].value)
    }
    return array

}

const iterationObjectsArray = (entryHour, exitHour, entryCount, exitCount) => {
    
    let entry = arrayIteration(entryCount)
    let exit = arrayIteration(exitCount)

    let arrayEntryHour = []
    for(i=0; i<entryHour.length; i++){
        arrayEntryHour.push(entryHour[i].value)
    }

    let arrayExitHour = []
    for(i=0; i<exitHour.length; i++){
        arrayExitHour.push(exitHour[i].value)
    }

    return arrayEntryHour, arrayExitHour, entry, exit

}