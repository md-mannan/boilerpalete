window.onload=()=>{
    main()
}

function main(){

    const root=document.getElementById('root')
    const change=document.getElementById('change')

    change.addEventListener('click',function(){
        let bgcolor=generateRGBColor()
        root.style.backgroundColor=bgcolor
    })
}

function generateRGBColor(){
    const red=Math.floor(Math.random() * 255);
    const green=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);

    return `rgb${red},${green},${blue},`;
}