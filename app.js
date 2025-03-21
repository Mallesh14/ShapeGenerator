var btn=document.getElementById("generate");
var NumberInShape=1;
var oldValue=0;
btn.onclick = ()=>{
    var num=document.getElementById("number").value;
  var cir=document.getElementById("circle");
  var rec=document.getElementById("rectangle");
  var sq=document.getElementById("square");
  const box=document.getElementById("box");
  var col=document.getElementById("color").value;

  num=Number(num)+Number(oldValue);
  for(let j=NumberInShape;j<=num;j++)
  {
    let shape=document.createElement("div");
    shape.innerHTML+=NumberInShape;
    if(cir.checked){
        shape.classList.add("circle");
        shape.style.backgroundColor = col;
        }
    else if(rec.checked){
        shape.classList.add("rectangle");
    shape.style.backgroundColor = col;}
    else if(sq.checked){
        shape.classList.add("square");
        shape.style.backgroundColor = col;}
    else
    document.write("Invalid Input");
    
    NumberInShape++;
    box.appendChild(shape);
    oldValue=document.getElementById("box").lastElementChild.innerHTML;
  }
};
