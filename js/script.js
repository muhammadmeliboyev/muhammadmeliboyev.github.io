

let bosing = document.getElementById('bosing');

bosing.onclick = function () {
    let tema = document.getElementById('tema');

    if(tema.getAttribute('href') == 'css/style.css'){
        tema.href = 'css/white.css';
        bosing.classList.toggle('fa-moon');
        bosing.classList.remove('fa-sun');
    }
    else if(tema.getAttribute('href') == 'css/white.css'){
        tema.href = 'css/style.css';
        bosing.classList.toggle('fa-sun');
        bosing.classList.remove('fa-moon');
    }
    
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}





