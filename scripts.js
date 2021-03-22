/** INSTRUCTIONS **/
/*************************************************
In the start and end input we'll enter the cell identifier.
Your job is to highlight the shortest path from start to end.

If there are more than one paths, pick any;

The deifnition of a path is the set of cells it must traverse. Youw can go vertically or hirizontally in any direction but not diagonally;

this means from cell C3 you can move to B3, C2, C4, D3;

**************************************************/

var container = document.getElementById('container');
var goBtn = document.getElementById('go');
 

var rowCount = 8;
var colCount = 8;

var rows = new Array(rowCount);
rows.fill(new Array(colCount));

rows = rows.map((row, rowNum) => {
  row.fill(1);
  return row.map((col, colNum) => {

    return `${String.fromCharCode(65+rowNum)}${colNum+1}`;
  })
})

rowStr = rows.reduce((fr, r) => {
  let colStr = r.reduce((fc, c) => {
    return `${fc}<div class="col">${c}</div>`;
  }, '');
  return `${fr}<div class="row ">${colStr}</div>`;
}, '');

container.innerHTML = rowStr;

var figure = () => {
  /** WRITE CODE HERE **/
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  //acess the charater from start
  var rowPart = {
    _start: start.charCodeAt(0)-65,
    _end: end.charCodeAt(0)-65
  };
  rowPart.from =(rowPart._start <= rowPart._end) ? rowPart._start:rowPart._end;
  rowPart.to = rowPart._start>=rowPart._end?rowPart._start:rowPart._end;

  //stack_over flow
  const fun = {
    _start:parseInt(start[1]),
    _end:parseInt(end[1])
  };
  fun.from = fun._start <= fun._end ? fun._start : fun._end;
  fun.to = fun._start >= fun._end ? fun._start : fun._end;
  var allRows = document.querySelectorAll("div.row")


 
  var index = fun._start <= fun._end ? rowPart._start :rowPart._end;
  var myCol = allRows[index].querySelectorAll("div.col");
  for (let col=fun.from-1;col<=fun.to-1;col++)
  {
    myCol[col].style.backgroundColor = "blue"
  }
  for (let row = rowPart.from; row<=rowPart.to;row++) 
  {
    var col1=allRows[row].querySelectorAll("div.col")[fun.to-1];
    col1.style.backgroundColor="blue";
  }
  console.log('Abhijeet');
}

goBtn.onclick = figure;
