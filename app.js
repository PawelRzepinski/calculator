const btns = document.querySelectorAll(".btn");

btns.forEach(function(el){
    el.addEventListener("mousedown",function(){
        console.log('działa down');
        this.style.boxShadow = "none";
    })

    el.addEventListener("mouseup",function(){
        console.log('działa up');
        this.style.boxShadow = "0px 0px 6px 2px rgba(0,0,0,0.75)";
    })
    
})