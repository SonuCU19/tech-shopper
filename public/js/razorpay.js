

function loadScript(src){


    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        
        script.onload = ()=>{
            resolve(true);
        }
        script.onerror = ()=>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
    
}

async function displayRazorpay(){

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if(!res){
        alert('Razorpay SDK failed to load.Are you online ?');
        return;
    }

    const data = await fetch('http://localhost:3000/razorpay', {method:'POST'}).then( (t) => t.json() )
    console.log(data);
   
    const  options = {
        "key": process.env.RAZORPAY_API_KEY, 
        "currency":data.currency,
        "amount":data.amount.toString(),
        "order_id":data.id,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Sonu",
            "email": "sonu.kumar@example.com",
            "contact": "9999999999"
        },
       
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
    // rzp1.on('payment.failed', function (response){
    //         alert(response.error.code);
    //         alert(response.error.description);
    //         alert(response.error.source);
    //         alert(response.error.step);
    //         alert(response.error.reason);
    //         alert(response.error.metadata.order_id);
    //         alert(response.error.metadata.payment_id);
    // });
    // document.getElementById('rzp-button1').onclick = function(e){
    //     rzp1.open();
    //     e.preventDefault();
    // }
}


const payButton  = document.getElementById('pay-button');

if(payButton){
    payButton.addEventListener('click',displayRazorpay())
}