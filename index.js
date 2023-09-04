let fahr = document.querySelector("#fahr");
let pweather = document.querySelector("p#weather");
let greeting = document.querySelector("#greeting");

const weathrAPIKey = "89d8b0b4d02dcdf85a65de175283f306";
const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric";

const products = [
    
        {
          title: "AstroFiction",
          author: "John Doe",
          price: 49.9,
          image: "./assets/products/img6.png"
        },
        {
          title: "Space Odissey",
          author: "Marie Anne",
          price: 35,
          image: "./assets/products/img1.png"
        },
        {
          title: "Doomed City",
          author: "Jason Cobert",
          price: 0,
          image: "./assets/products/img2.png"
        },
        {
          title: "Black Dog",
          author: "John Doe",
          price: 85.35,
          image: "./assets/products/img3.png"
        },
        {
          title: "My Little Robot",
          author: "Pedro Paulo",
          price: 0,
          image: "./assets/products/img5.png"
        },
        {
          title: "Garden Girl",
          author: "Ankit Patel",
          price: 45,
          image: "./assets/products/img4.png"
        }
      ]


// Menu Section
function menuHandler(){
// Abrindo o menu
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
})

// Fechando o menu
document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})
}


function greetingHandler(){
// Deixando as boas vindas apartir do horario do dia
let currentHour = new Date().getHours();
let greeting2;
if(currentHour < 12){
    greeting2 = "Good morning!";
} else if(currentHour < 19){
    greeting2 = "Good afternoon!";
}else if(currentHour < 24){
    greeting2 = "Good evening!";
}else{
    greeting2 = "Welcome!";
}
document.querySelector("#greeting").innerHTML=`${greeting2}`;

// Área de previsão do tempo

/*const condicaoDoTempo = " Ensolarado";
const localizacaoDoUsuario = "Rio de Janeiro";
let temperature = 25.8673;
let climaCelsius = `O tempo está ${condicaoDoTempo} em ${localizacaoDoUsuario} e faz ${temperature.toFixed(1)}°C lá fora.`;
let climaFahr = `O tempo está ${condicaoDoTempo} em ${localizacaoDoUsuario} e faz ${celsiusToFahr(temperature).toFixed(1)}°F lá fora.`;
document.querySelector("#greeting").innerHTML=`${greeting2}`;
document.querySelector("p#weather").innerHTML=`${climaCelsius}`;



// Criando um evento de click para pegar o botão Celsius e Fahr
document.querySelector(".weather-group").addEventListener("click", function(e){

if(e.target.id == "celsius"){
    document.querySelector("p#weather").innerHTML=`${climaCelsius}`;
}
else if(e.target.id == "fahr"){
    document.querySelector("p#weather").innerHTML=`${climaFahr}`;
}
    

});*/
}


// Weather Text
function weatherHandler(){
    // Informações do tempo
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);    
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
        .replace("{lat}", latitude)
        .replace("{lon}", longitude)
        .replace("{API key}", weathrAPIKey);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const condicao = data.weather[0].description;
        const localizacao = data.name;
        const temperature = data.main.temp;
        
        let climaCelsius = `O tempo está ${condicao} em ${localizacao} e faz ${temperature.toFixed(1)}°C lá fora.`;
        let climaFahr = `O tempo está ${condicao} em ${localizacao} e faz ${celsiusToFahr(temperature).toFixed(1)}°F lá fora.`;
        
        
        document.querySelector("p#weather").innerHTML=`${climaCelsius}`;
        
        
        
        // Criando um evento de click para pegar o botão Celsius e Fahr
        document.querySelector(".weather-group").addEventListener("click", function(e){
        
        if(e.target.id == "celsius"){
            document.querySelector("p#weather").innerHTML=`${climaCelsius}`;
        }
        else if(e.target.id == "fahr"){
            document.querySelector("p#weather").innerHTML=`${climaFahr}`;
        }
            
        
        });
        });
        });
        
     }


//Data e Hora
/*new Date().getHours();
new Date().getMinutes();
new Date().getSeconds();
let localTime = new Date();
document.querySelector("span[data-time=hours]").innerHTML= localTime.getHours();
document.querySelector("span[data-time=minutes]").innerHTML= localTime.getMinutes();
document.querySelector("span[data-time=seconds]").innerHTML= localTime.getSeconds();
*/


function clocHandler(){
// Relogio atualizando a cada segundo e com 2 digitos cada um
setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").innerHTML= localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").innerHTML= localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").innerHTML= localTime.getSeconds().toString().padStart(2,"0");
}, 1000);
}


//Galeria de fotos
//src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"
const galleryImages = [
   
    
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/img2.png",
        alt: "Thumbnail Image 3"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
    ];



function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img");
    let miniaturas = document.querySelector("#gallery .thumbnails");
    
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;
    /*<img src="./assets/gallery/image1.jpg" 
    alt="Thumbnail Image 1" data-array-index="0" data-selected="true"></img>*/
    galleryImages.forEach(function(image, index){
    let miniatura = document.createElement("img");
    miniatura.src = image.src; 
    miniatura.alt = image.alt;
    miniatura.dataset.arrayIndex = index; // mesma coisa que: data-array-index
    miniatura.dataset.selected = false;   // mesma coisa que: data-selected
    miniatura.dataset.selected = index === 0?  true: false;
    miniaturas.appendChild(miniatura); //ppendChild()  adiciona um elemento dentro de outro elemento
    //Funcionalidade da galeria
    miniatura.addEventListener("click", function(e){
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;
    
    // SELECIONAR O QUE FOR CLICADO NA GALERIA
    miniaturas.querySelectorAll("img").forEach(function(img){
        img.dataset.selected = false;
    });
    // PEGAR APENAS O QUE FOI CLICADO E MUDAR PARA TRUE PARA FICAR SELECIONADO
    e.target.dataset.selected = true;
    });
    
    });

}



/*for(let galleryImage in galleryImages){
    console.log(galleryImages[galleryImage]);
}*/


// Função para transformar celsius em fahr
function celsiusToFahr(temperature){
let fahr1 = (temperature * 9/5) + 32
return fahr1;
}





/*const clicarFahr = fahr.addEventListener("click",()=>{
document.querySelector("#greeting").innerHTML="Olá mundo!";
document.querySelector("p#weather").innerHTML="HTML, CSS, JS";
document.querySelector("p#weather").style.color="red";

});

clicarFahr(); */

function populateProducts(productList){
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";
//Correr um loop pelo array de produtos e criar um elemento HTML("product-item") para cada um deles.
productList.forEach(function(product, index){
    //Criando o Div
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");
    //Criando a imagem pra colocar dentro da div acima
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for " + product.title;
    
    //Create the product details section
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    // Adicionar os elementos HTML filhos do produto.
    productElm.append(productImage);
    productElm.append(productDetails);
    
    //Create product titulo, autor e o preço
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;
    
    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;
    
    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Price";
    
    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price > 0 ? "$" + product.price: "Free";
    
    //Append the product details
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);
    
    //Adicionar o produto individual a seção de produtos
    productsSection.append(productElm);
    });
}

//Product Section
/*<div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
             </div>
          </div>*/
function productsHandler(){


let freeProducts = products.filter((item)=> !item.price || item.price <= 0);

let paidProducts = products.filter(function(item){
    return item.price > 0;
})

populateProducts(products);


document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

let productsFilter = document.querySelector(".products-filter");
productsFilter.addEventListener("click", function(e){
if(e.target.id === "all"){
    populateProducts(products);
}else if(e.target.id === "paid"){
    populateProducts(paidProducts);
}else if(e.target.id === "free"){
    populateProducts(freeProducts);
}
});

}


 /*let numbers = [1,2,3,4,5,6];
 let numbers2 = numbers.filter(function(item){
    return item > 4;
 });
 console.log(numbers2);*/

 //Gerando um footer dinâmico
 function footHandler(){
let currentYer = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYer} - All rights reserved `;
 }


 


// Page Load
menuHandler();
greetingHandler();
weatherHandler();
clocHandler();
galleryHandler();
productsHandler();
footHandler();










  









