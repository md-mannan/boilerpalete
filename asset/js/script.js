window.onload=()=>{
    main()
}
// 1. make  generateRGBColor
// 1. make  generateHexColor

function main(){

    const root=document.getElementById('root')
    const change=document.getElementById('change')
    
    const copy=document.getElementById('copy')

    change.addEventListener('click',function(){
        let bgcolor=generateHEXColor()
        root.style.backgroundColor=bgcolor
        
        
       
    })

    copy.addEventListener('click',function(){
        const toast=document.createElement('msg')     
        toast.innerText="Copied #fff"  
        toast.className="toast alert alert-success text-bold text-white"    
        toast.classList.add('show')                                      //  document.getElementById('msg')
        document.body.appendChild(toast)
        
    })
}

function generateRGBColor(){
    const red=Math.floor(Math.random() * 255);
    const green=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}
function generateHEXColor(){
    const red=Math.floor(Math.random() * 255);
    const green=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

