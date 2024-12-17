let maincontent = [
    {
        id: 1,
        title: "AIR JORDANS",
        price: "$ " + 799,
        number: 1,
        color: [{
            code: "black",
            img: "Shoes images/4air.png",
        }, {
            code: "greenyellow",
            img: "Shoes images/JORDAN+HEIR+SERIES+PF 2.png"
        }]
    },
    {
        id: 2,
        title: "GUCCI",
        price: "$ " + 699,
        number: 2,
        color: [{
            code: "brown",
            img: "Shoes images/gucci.png",
        }]
    },
    {
        id: 3,
        title: "DIOR",
        price: "$ " + 599,
        number: 3,
        color: [{
            code: "blue",
            img: "Shoes images/diior.png",
        }]
    },
    {
        id: 1,
        title: "GEOX",
        price: "$ " + 599,
        number: 4,
        color: [{
            code: "white",
            img: "Shoes images/rr.png",
        }]
    },
    {
        id: 5,
        title: "NEW BALANCE",
        price: "$ " + 699,
        number: 5,
        color: [{
            code: "green",
            img: "Shoes images/550-normal.png",
        }]
    }
]

let menuitems = document.querySelectorAll(".menuitems");
let section1 = document.querySelector(".section1")
let content = document.querySelector(".content")
let section3 = document.querySelector(".section3")
let colors = document.querySelector(".colors div")

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {

        section1.style.transform = `translate(${-100 * index}vw)`;
        section1.style.transition = "transform 0.5s ease-in-out";

        content.getElementsByTagName("h1")[0].innerText = maincontent[index].title;
        content.getElementsByTagName("h2")[0].innerText = maincontent[index].price;

        let imageElement = section3.getElementsByTagName("img")[0];
        imageElement.src = maincontent[index].color[0].img;


        //show colors
        let colorsContainer = document.querySelector(".colors");
        let colorDivs = colorsContainer.getElementsByTagName("div");

        maincontent[index].color.forEach((colorObj, i) => {
            colorDivs[0].style.border = "1px solid red"
            if (colorDivs[1]) {
                colorDivs[1].style.border = "none"
            }
            if (colorDivs[i]) {
                colorDivs[i].style.backgroundColor = colorObj.code;
                colorDivs[i].style.display = "block"; // Ensure it's visible
            }
        });

        // Hide extra divs
        for (let i = maincontent[index].color.length; i < colorDivs.length; i++) {
            colorDivs[i].style.display = "none"; // Hide unused divs
        }
        //switching colors
        Array.from(colorDivs).forEach((item, i) => {
            item.addEventListener("click", () => {
                imageElement.src = maincontent[index].color[i].img;
                colorDivs[i].style.border = "1px solid red";
                if (i === 1) {
                    colorDivs[0].style.border = "none";
                }
                else {
                    colorDivs[1].style.border = "none";
                }
            })
        })

        //size choosing
        let size = section3.getElementsByTagName("p");
        Array.from(size).forEach((item) => {
            item.addEventListener("click", () => {
                Array.from(size).forEach((size) => {
                    size.style.backgroundColor = ""; // Reset background color
                    size.style.color = "";           // Reset text color
                });
                item.style.backgroundColor = "black";
                item.style.color = "white";
            })
        })
    })
});

//deafult case handling

let imageElement = section3.getElementsByTagName("img")[0];
let colorsContainer = document.querySelector(".colors");
let colorDivs = colorsContainer.getElementsByTagName("div");
Array.from(colorDivs).forEach((item, i) => {
    colorDivs[0].style.border = "1px solid red";
    item.addEventListener("click", () => {
        imageElement.src = maincontent[0].color[i].img;
        colorDivs[i].style.border = "1px solid red";
        if (i === 1) {
            colorDivs[0].style.border = "none";
        }
        else {
            colorDivs[1].style.border = "none";
        }
    })
})

//size
let size = section3.getElementsByTagName("p");
Array.from(size).forEach((item) => {
    item.addEventListener("click", () => {
        Array.from(size).forEach((size) => {
            size.style.backgroundColor = ""; // Reset background color
            size.style.color = "";           // Reset text color
        });
        item.style.backgroundColor = "black";
        item.style.color = "white";
    })
})

//placing order
let buy = section3.querySelector(".buy");
buy.addEventListener("click", () => {
    let box = document.querySelector(".payment");
    box.style.display = "flex";
    document.querySelector(".crossimg").addEventListener("click",()=>{
        box.style.display = "none";
    })
})