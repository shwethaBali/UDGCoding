const csv = require('csv-parser');
const fs = require('fs');
//Importing CSV File
const jsonData = [];
fs.createReadStream('./Artikel.csv')
  .pipe(csv())
  .on('data', (row) => {
      jsonData.push(row);
  })
  .on('end', () => {
    console.log('CSV file imported');
  });

function addHeaders(table, keys) {
    let row = table.insertRow();
    for( let i = 0; i < keys.length; i++ ) {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(keys[i]));
    }
  }
  
  let table = document.createElement('table');
  for( let i = 0; i < jsonData.length; i++ ) {
  
    let rowOfData = jsonData[i];
    if(i === 0 ) {
      addHeaders(table, Object.keys(rowOfData));
    }
    let row = table.insertRow();
    Object.keys(rowOfData).forEach(function(k) {
      console.log(k);
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(rowOfData[k]));
    })
  }
  
  document.getElementById('container').appendChild(table);