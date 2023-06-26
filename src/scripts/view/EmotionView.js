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


export {
    reorganizeObj,
}