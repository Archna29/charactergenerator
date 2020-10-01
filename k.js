function change(){
var n=document.getElementById("name").value;
var i=document.getElementById("image");
i.src=`https://joeschmoe.io/api/v1/${n}`;
}
var ch=document.getElementById("cl");
if(ch){
ch.addEventListener("click",change,false);
}
