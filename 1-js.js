console.log(window);
console.log(document);

const anchor = document.getElementById('anchor-1');
console.log(anchor);

let counter = 0;

anchor.addEventListener('click',function(){
    counter++;
    alert(`Holaaa hai cliccato per ora ${counter} volt${counter ===1?'a':'e'}`)
})