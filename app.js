const sketchPad = document.querySelector("#sketchPad");
const black = document.querySelector("#black");
const red = document.querySelector("#red");
const random = document.querySelector("#random");
const low = document.querySelector("#low");
const high = document.querySelector("#high");
const click = document.querySelector("#click");
const hover = document.querySelector("#hover");
const eraseCell = document.querySelector("#eraseCell");
const eraseAll = document.querySelector("#eraseAll");
const gridNum = document.querySelector(".gridNum");



// Number of cells input
let ask = prompt("Choose number from 1 - 100");
gridNum.textContent = `${ask} x ${ask} grid`;


// Create cells
function createDivs(num){
    for(let i = 0; i < num * num; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "newDiv";
        newDiv.classList.add("divStyle");
        sketchPad.style.gridTemplateColumns = `repeat(${num}, auto)`;
        sketchPad.style.gridTemplateRows = `repeat(${num}, auto)`;
        sketchPad.appendChild(newDiv);

        // Color black
        black.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black";
            })
        });
        // Color red
        red.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "red";
            })
        });

        // Random color
        random.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                let characters = '0123456789ABCDEF';
                let color = '#';
                for (var i = 0; i < 6; i++) {
                    color += characters[Math.floor(Math.random() * 16)];
                }
                newDiv.style.backgroundColor = `${color}`;
            })   
        });

        // Erase ALL
        eraseAll.addEventListener("click", () => {
            newDiv.style.backgroundColor = "white";
        });

        // Erase CELL
        eraseCell.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "white";
            })
        });

        // Color saturation(low)
        low.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.opacity = ".6"
            })
        });

        // Color saturation(high)
        high.addEventListener("click", () => {
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.opacity = "1"
            })
        });
    };
};

createDivs(ask);





