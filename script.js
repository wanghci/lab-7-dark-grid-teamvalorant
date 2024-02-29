let os = document.querySelector(a);
let dark = document.querySelector(a);
let light = document.querySelector(a);

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