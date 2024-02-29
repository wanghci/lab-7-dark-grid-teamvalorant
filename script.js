let os = document.querySelector("#default");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");


os.addEventListener("click", function (){
    let body = document.body;
    body.className = "";
})

dark.addEventListener("click", function (){
    let body = document.body;
    body.className = "dark";
})

light.addEventListener("click", function (){
    let body = document.body;
    body.className = "debug";
})