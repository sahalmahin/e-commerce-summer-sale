document.getElementById('code').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const button = document.getElementById('apply-btn');
    if(text === 'SELL200'){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true);
    }
})