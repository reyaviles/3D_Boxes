 const boxesContainer = document.getElementById('boxes');
 const btn = document.getElementById('btn');

btn.addEventListener('click',() => boxesContainer.classList.toggle('big'));

 function createBoxes(){
     for(let i =0; i<4;i++){
         for(let j = 0; j<4; j++){
             const box = document.createElement('div');
             box.classList.add('box');
             var xAxis = -j * 125;
             var yAxis = -i *125;
             box.style.backgroundPosition= xAxis+'px '+ yAxis+'px';
             boxesContainer.appendChild(box);
         }
     }
 }

 createBoxes();