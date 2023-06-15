const input = document.getElementById("input");
input.addEventListener('input',function (event){
    const inputed = event.target.value;
    let filtered = '';
    for(let i = 0;i < inputed.length;i++){
        const char = inputed[i];
        if(!isNaN(char)){
            continue;
        }
        filtered += char;
    }
    event.target.value = filtered;
})