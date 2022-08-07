let result = document.getElementById('screen');

let calc=(num)=>{
    result.value+=num;
}

let equal=()=>{
    
        result.value=eval(result.value)
    }

function AC(){
result.value= ""
}

function del(){
    result.value= result.value.slice(0,-1);
}