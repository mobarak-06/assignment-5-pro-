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

       

       busDetails.appendChild(div);

       div.classList.add('seat-count');

       event.setAttribute('disabled',false);
       
 
       const firstCart = getConvertedValue('current-seat');
       if (firstCart + 1 > 4) {
           alert('seat limit finish ');
           return;
       }

       const secondCart = getConvertedValue('current-seat');
       if (secondCart +1 === 4) {
        const couponBtn = document.getElementById('coupon-btn');
        couponBtn.removeAttribute('disabled');
        
       }

       div.appendChild(p);
       div.appendChild(p2);
       div.appendChild(p3);

       event.style.backgroundColor = '#1DD100'
         
       

       const currentSeat = getConvertedValue('current-seat');
       const updatedSeat = currentSeat +1;
       document.getElementById('current-seat').innerText = updatedSeat;

       const leftSeat = getConvertedValue('seat-left');
       const updatedLeftSeat = leftSeat -1;
       document.getElementById('seat-left').innerText = updatedLeftSeat;

       const totalPrice = getConvertedValue('total-price');
       const updatedTotalPrice = totalPrice + convertedPrice;
       document.getElementById('total-price').innerText = updatedTotalPrice;

       
       

       getGrandTotalCost();
       updateCouponCode();
   
      
}
 
function updateCouponCode(status){
    const totalCost = getConvertedValue('total-price');
    const couponBtn = document.getElementById('coupon-btn')
    console.log(totalCost);
    if (status === undefined) {
        getGrandTotalCost()
    } else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode === 'NEW15') {
            const discount = totalCost * 0.15 
            const discountedPrice = totalCost - discount ;
            document.getElementById('grand-total').innerText = discountedPrice;
            couponBtn.setAttribute('disabled',true);
        } 
        else if(couponCode === 'Couple 20'){
            const discount = totalCost * 0.20 
            const discountedPrice = totalCost - discount ;
            document.getElementById('grand-total').innerText = discountedPrice;
            couponBtn.setAttribute('disabled',true);
        }
        else{
            alert('please inter a valid couponCode');
        }
         
    }
}

function showNextButton(){
    hideBackground('main')
    hideBackground('main2')
    hideBackground('footer')
    hideBackground('nav')
    showBackground('success')

}

function hideByTicket(){
    hideBackground('main')
    showBackground('main2')

}

const nextBtn = document.getElementById('number');
    //    console.log(nextBtn);
       nextBtn.addEventListener('keyup', function(e) {
        console.log(e.target.value);
           if (e.target.value.length >= 1) {
               const next = document.getElementById('next-btn');
               next.removeAttribute('disabled');
           }
       });

