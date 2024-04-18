function hideBackground(id){
    const main = document.getElementById(id);
    main.classList.add('hidden')
}

function showBackground(id){
    const main2 = document.getElementById(id);
    main2.classList.remove('hidden');
}

function getConvertedValue(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element);
    return convertedElement;
}


function getGrandTotalCost(){
    const totalCost = getConvertedValue('total-price') ;
    document.getElementById('grand-total').innerText = totalCost;
}