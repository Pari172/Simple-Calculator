const btns = document.querySelectorAll(".button");
let display = document.querySelector("#display");
function UpdateDisplay(val){
    display.textContent = display.textContent + val;
}
function finalAns(operand1,operator,operand2){
    switch (operator) {
        case '/':
          return operand1 / operand2;
        case '*':
          return operand1 * operand2;
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        default:
          console.error('Invalid operator');
          return null;
      }
}
let op1 = 0;
let op = '';
let op2 = 0;
for(let i=0;i<btns.length;i++){
   // console.log(typeof btns[i].id);
    btns[i].addEventListener('click',function(){
        if(btns[i].id==1 || btns[i].id==2 || btns[i].id==3 || btns[i].id==4 || btns[i].id==5 || btns[i].id==6 || btns[i].id==7 || btns[i].id==8 || btns[i].id==9 || btns[i].id==0 ){
            UpdateDisplay(btns[i].id);
            if(op!=''){
                op2=(op2*10)+Number(btns[i].id);
            }else{
                op1 =(op1*10)+ Number(btns[i].id);
            }
        }
        if(btns[i].id==='/' || btns[i].id==='*' || btns[i].id==='+' || btns[i].id==='-'){
            op=btns[i].id;
            UpdateDisplay(btns[i].id);
        }
        if(btns[i].id==='='){
            let ans = finalAns(op1,op,op2);
            display.textContent = ans;
            op1=ans;
            op2=0;
            op='';
        }
        if(btns[i].id==='AC'){
            location.reload();
        }
    })
}
