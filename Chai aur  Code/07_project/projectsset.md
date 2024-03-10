# Projects related to DOM

# project link

[Click Here](https://stackblitz.com/edit/js-muqawf?file=index.js)

# Solution Code

## project 1 source code

```javascript
console.log("Nill");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 source code

```javascript
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
const form = document.querySelector("form");
// Get the results element

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please give a valid height";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    let message = "";

    if (bmi < 18.6) {
      message = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "Normal Range";
    } else {
      message = "Overweight";
    }
    results.innerHTML += `<p>${message}</p>`;
  }
});
```

## project 3 source code

```javascript
const clock = document.getElementById("clock");
//let date = new Date();
//console.log(date.toLocaleTimeString());

setInterval(function () {
  //console.log(date.toLocaleTimeString());
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 source code

```
```


## project 5 source code
```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.Key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> 
  </div>`;
});

```


## project 6 source code

```javascript
const randomColor = function () {
  const hex = '01223456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
//console.log(Math.floor(Math.random() * 16));

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  //intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```