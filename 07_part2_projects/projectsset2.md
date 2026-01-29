##Project 6 solution

```Javascript

// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(i = 0; i < 6; i++ ){
    color += hex[Math.floor(Math.random()* 16)];
  } 
  return color;

};


let intervalId;
const startChangingcolor = function(){
   if(!intervalId){
    intervalId = setInterval(ChangeBgColor, 1000);

   }

  function ChangeBgColor(){  
    document.body.style.background = randomColor();
 }
};

document.querySelector('#start').addEventListener('click', startChangingcolor)



const stopChangingcolor = function(){
   clearInterval(intervalId)
   intervalId = null;
};
document.querySelector('#stop').addEventListener('click', stopChangingcolor)  
```

##project 5 solution

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color' >
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
  </div>

  `;
});

```

#project 6 solution
```javascript









```