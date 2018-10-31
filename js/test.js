var timer =window.setInterval(changeNnm,1000);
var h2obj =document.querySelector('h2');
console.log(h2obj);
var currentNo=0;
function changeNnm()
{

    h2obj.textContent=currentNo;
    if(currentNo<9) currentNo++;
    else currentNo=0;

   
}

// console.log(timer);
var btnObj =document.getElementById('btnObj')
// console.log(btnObj);
// btnObj.addEventListener('click',stopChangeNum);
function starChange()
{
    starTimer(500);
    btnObj.textContent="停止"
}


btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',starChange);