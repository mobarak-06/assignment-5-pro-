function handleClick(event){
   const seat = event.innerText;

   const price = document.getElementById('price').innerText;
    const convertedPrice = parseInt(price);

   const busClass = document.getElementById('bus-class').innerText;


       const busDetails = document.getElementById('economoy');
       
       const div = document.createElement('div');
       const p = document.createElement('p');
       const p2 = document.createElement('p');
       const p3 = document.createElement('p');

       p.innerText = seat;
       p2.innerText = busClass;
       p3.innerText = convertedPrice;

       div.appendChild(p);
       div.appendChild(p2);
       div.appendChild(p3);

       busDetails.appendChild(div);

       div.classList.add('seat-count');

       event.setAttribute('disabled',false);
       
 
       const firstCart = getConvertedValue('current-seat');
       if (firstCart + 1 > 4) {
           alert('seat limit finish ');
           return;
       }

       event.style.backgroundColor = '#1DD100'
         
       

       const currentSeat = getConvertedValue('current-seat');
       const updatedSeat = currentSeat +1;
       document.getElementById('current-seat').innerText = updatedSeat;

       const totalPrice = getConvertedValue('total-price');
       const updatedTotalPrice = totalPrice + convertedPrice;
       document.getElementById('total-price').innerText = updatedTotalPrice;

       const grandTotal = getConvertedValue('grand-total');
       const updatedGrandTotal = totalPrice + convertedPrice;
       document.getElementById('grand-total').innerText = updatedTotalPrice;

      
      
}
 
