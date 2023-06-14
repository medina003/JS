const input = document.getElementById("usernameInput");

input.addEventListener('input',function (event){
    const inputValue = event.target.value;

    let filtereValue = '';

    for(let i = 0;i < inputValue.length;i++){
        const char = inputValue[i];

        if(!isNaN(char)){
            continue
        }
        filtereValue += char;
    }
    event.target.value = filtereValue;
})