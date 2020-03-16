let btn = document.querySelector('button');
let correct = document.querySelectorAll('.correct')


btn.addEventListener('click', ()=>{
    console.log('HEllo')
    correct.forEach(e=>{
        console.log(e)
        //e.classList.add = 'correct-border'
       e.className = 'correct-border'
        
    })
    

})


