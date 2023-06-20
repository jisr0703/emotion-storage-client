// function groupByYearMonth(postObj){
//     const dateGroups = {};
//     postObj.forEach((postItem) => {
//         const yearMonth = [];
//         const year = this.checkYear(postItem.date);
//         const month = this.checkMonth(postItem.date);
//         yearMonth.push(year,month)
//         if(!dateGroups[yearMonth]) {
//             dateGroups[yearMonth] = []
//         }
//         dateGroups[yearMonth].push(postItem);
//     });
//     return Object.entries(dateGroups)
// }

function groupByYearMonth(postObj) {
    const dateGroups = {};
  
    postObj.forEach((postItem) => {
      const year = checkYear(postItem.date);
      const month = checkMonth(postItem.date);
  
      if (!dateGroups[year]) {
        dateGroups[year] = {};
      }
  
      if (!dateGroups[year][month]) {
        dateGroups[year][month] = [];
      }
  
      dateGroups[year][month].push(postItem);
    });
    console.log(JSON.stringify(dateGroups))
    return Object.entries(dateGroups);
  }

function checkYear(datetime){
    return datetime.substr(0,4);
}

function checkMonth(datetime){
    return datetime.substr(5,2);
}

function checkDate(datetime){
    return datetime.substr(8,2);
}

function checkYMD(datetime){
    return datetime.substr(0,10)
}
function checkTime(datetime){
    return datetime.substr(11,8)
}
export {
    checkYear,
    checkMonth,
    checkDate,
    checkYMD,
    checkTime,
    // groupByDate,
    groupByYearMonth
}