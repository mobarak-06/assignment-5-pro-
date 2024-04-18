function hideBackground(){
    const main = document.getElementById('main');
    main.classList.add('hidden')
}

function showBackground(){
    const main2 = document.getElementById('main2');
    main2.classList.remove('hidden');
}

function getConvertedValue(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element);
    return convertedElement;
}