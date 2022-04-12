let nav = document.getElementById('navbarLinks');
const locationDiv = document.createElement('div');
const country = document.querySelector('.country');
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=b7026f1203e64996afb56fa04c3e4d38", function(data) {
       console.log(data.ip_address);
       console.log(data.country);
       if(data.country == "Barbados")
       {
           country.innerHTML = data.country;
       }
})


if(document.title == "Taxi App Assignment - Order Taxi")
{
    const submit = document.querySelector(".submit");
    const body = document.querySelector(".modal-content");
    const confirmButton = document.querySelector(".confirm");
    const email = document.querySelector(".email");
    const cellphone = document.querySelector(".cellphone");
    const costInput = document.querySelector(".costInput");
    const locationInput = document.querySelector(".location")
    confirmButton.addEventListener("click", function(e){
        e.preventDefault();
        $.getJSON("http://127.0.0.1:3010/api/cost", function(data){
            const form = document.querySelector(".form");
            const p = document.querySelector(".cost");
            p.innerHTML = "Cost: $" + data;
            costInput.value = data;
            locationInput.value = country.innerHTML;
            form.classList.remove("d-none");
            console.log("Cost: $"+ data);
        })
    })
}

if(document.title == "Taxi App Assignment - Pending Rides")
{
    $.getJSON("http://127.0.0.1:3010/api/orders", function(data){
        const main = document.querySelector('.row');
        let div= [];
        data.forEach(element => {
            for(let i = 0; i<4; i++){
                div[i] = document.createElement("div");
                div[i].classList.add("col-3");
            }
            div[0].innerHTML= element.email;
            div[1].innerHTML= element.cellphone;
            div[2].innerHTML= "$" + element.cost;
            div[3].innerHTML= element.location;
            for(let i = 0; i<4; i++){
               main.appendChild(div[i]);
            }
            console.log(element.email);    
        });
    })
}

