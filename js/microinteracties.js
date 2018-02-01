var hartjes = document.querySelectorAll("main article button img");

var likePopup = document.querySelector("#like-popup");

var searchInputs = document.querySelectorAll(".image-header article select");

var searchButton = document.querySelector(".image-header article button img");

var downloadButton = document.querySelector("main > button");

var vinkje = document.querySelector("article:first-of-type > img");

// index.html en favorieten pagina javascript

if (hartjes) { // ga door als dit een pagina met hartjes is
    for (var i = 0; i < hartjes.length; i++){
        hartjes[i].addEventListener("click", function(e){
            e.stopPropagation(); // stopt het aanklikken van de link naar artikel
            e.stopImmediatePropagation(); // stopt het aanklikken van de link naar artikel
            e.preventDefault(); // stopt pageload
            swapImage(e.target, showPopup); // stuurt hetgene waar op geklikt is (de image) naar swapImage function
        });
    }
}

if (searchInputs){ 
    for (var i = 0; i < searchInputs.length; i++){
        searchInputs[i].addEventListener("change", function(e){
            swapImage(searchButton);
            setTimeout(function(){
                swapImage(vinkje);
            }, 300);
        });
    }
}

// verhalen pagina javascript

if (downloadButton){
    downloadButton.addEventListener("click", function(e){
        swapImage(e.target);
    });
}

function swapImage(element, callback) {
    callback = callback || function(){};
    var href;
    if (element.src.indexOf("_start.png") > -1){
        href = element.src.split("_start.png").join(".gif");
        element.src = href;
        setTimeout(function(){
            href = element.src.split(".gif").join("_eind.png");
            element.src = href;
        },1000);
        callback();
            
    }
    else if (element.src.indexOf("_eind.png") > -1){
        href = element.src.split("_eind.png").join("_start.png");
        element.src = href;
    }

}

function showPopup(element){
    likePopup.classList.add("active");
    setTimeout(function(){
      likePopup.classList.remove("active");  
    }, 5000);
}

// bron callback: folkert-jan heeft mij hiermee geholpen