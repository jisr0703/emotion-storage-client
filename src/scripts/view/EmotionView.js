function reorganizeObj(data){
  console.log(JSON.stringify(data))
  const sortDate = data.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  })
  console.log(JSON.stringify(sortDate))
  const obj = {}

  for ( const item of sortDate ){
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.getMonth()+1;

    if (!obj[year]){
      obj[year] = {};
    }

    if (!obj[year][month]){
      obj[year][month] = []
    }

    obj[year][month].push(item);

  }
  return sortDate
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
    reorganizeObj,
}