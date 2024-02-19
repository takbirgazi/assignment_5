const seats = document.getElementById("allSeats");
const cuponCode = document.getElementById("cuponCode");
const cupon = document.getElementById("cupon");
const nextModal = document.getElementById("nextModal");
let totalSeat = document.getElementById("totalSeat");
let addSeat = document.getElementById("addSeat");
let allTicket = document.getElementById("allTicket");
let totalCost = document.getElementById("totalCost");
let grandTotal = document.getElementById("grandTotal");
let hideCupon = document.getElementById("hideCupon");


seats.addEventListener("click", function(event){

    if(event.target.tagName == "P"){
        event.target.classList.add("bg-green-500");
        totalSeat.innerHTML = totalSeat.innerText - 1 ;
        let totalTicket = addSeat.innerHTML = parseInt(addSeat.innerText) + 1 ;

        const trgSit = event.target.innerText;
        let crtDiv = document.createElement("DIV");
        let crtP = document.createElement("P");
        let crtP2 = document.createElement("P");
        let crtP3 = document.createElement("P");

        crtDiv.classList.add("flex","justify-between","py-2","text-black");
        crtP.classList.add("font-bold");
        crtP2.classList.add("font-bold");
        crtP3.classList.add("font-bold");
        crtP.innerText = trgSit;
        crtP2.innerText ="Economoy";
        crtP3.innerText ="550";

        crtDiv.appendChild(crtP);
        crtDiv.appendChild(crtP2);
        crtDiv.appendChild(crtP3);
        allTicket.appendChild(crtDiv);
        totalCost.innerHTML = totalTicket*550;
        grandTotal.innerHTML = totalTicket*550;

        if(totalTicket > 4){
            alert("You Can buy highest 4 ticket")
        }
       

    }

});


//Apply Cupone
cupon.addEventListener("click", function(){
    let cuponCodeval = cuponCode.value;
    if(cuponCodeval == "NEW15"){
        let grantTotalValue = parseInt(grandTotal.innerText);
        let CupornDiscount = (grantTotalValue / 100) * 15;
        let grandTotalCopon = grantTotalValue - CupornDiscount;
        grandTotal.innerText = grandTotalCopon;
        hideCupon.classList.add("hidden");
    }else if(cuponCodeval == "Couple 20"){
        let grantTotalValue = parseInt(grandTotal.innerText);
        let CupornDiscount = (grantTotalValue / 100) * 20;
        let grandTotalCopon = grantTotalValue - CupornDiscount;
        grandTotal.innerText = grandTotalCopon;
        hideCupon.classList.add("hidden");
    }
    else{
        alert("Write Correct Coupon");
    }
    
})

//Next Modal
nextModal.addEventListener("click",function(){
    let phone = document.getElementById("number");
    if(phone.value !=""){
        const header = document.getElementById("header");
        const main = document.getElementById("main");
        const footer = document.getElementById("footer");
        const modal = document.getElementById("modal");

        //Hidden All
        header.classList.add("hidden");
        main.classList.add("hidden");
        footer.classList.add("hidden");
        //Show Modal
        modal.classList.remove("hidden");


    }else{
        alert("Write Your Phone Number");
    }
})