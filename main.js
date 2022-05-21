const grid = document.querySelector(".grid");
const grid_size = document.querySelector("#grid-size")
const color_selector = document.querySelector("#color");
const rainbow_toggle = document.querySelector("#rainbow");
const size_text = document.querySelector("#size-output");
const clear_grid = document.querySelector("#clear-grid");
const grid_border = document.querySelector("#grid-border");

let color = "black";
let rainbow = false;
let borders = true;

let genGrid = (size) =>
{
    let n = Math.pow(size, 2);

    document.querySelectorAll(".item").forEach(item =>
    {
        item.remove();
    });

    for (let i = 0; i < n; i++)
    {
        let gridItem = document.createElement("div");
        gridItem.classList.add("item");
        document.querySelector(".grid").appendChild(gridItem);

        if (i % n == 0) 
        {
            let colX = "";
            for (let j = 0; j < size; j++)
            {
                colX += "auto ";
            }
            grid.style.gridTemplateColumns = colX;
        }
    }

    showBorders();
    checkHover();
}

let clearGrid = () =>
{
    document.querySelectorAll(".item").forEach(item =>
    {
        item.style.backgroundColor = "white";
    })
}

let showBorders = () =>
{
    if (borders)
    {
        document.querySelectorAll(".item").forEach(item => 
        {
            item.style.border = "0.05em solid black";
        })
    }
    else
    {
        document.querySelectorAll(".item").forEach(item => 
        {
            item.style.border = "0";
        })
    }
}

let checkHover = () =>
{
    document.querySelectorAll(".item").forEach(item =>
    {
        item.addEventListener('mouseover', function () 
        {
            if (rainbow)
            {
                item.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // cred css-tricks lol
            }
            else
            {
                item.style.backgroundColor = color;
            }
        })
    })
}

color_selector.addEventListener('input', function ()
{
    color = color_selector.value;
});

rainbow_toggle.addEventListener('change', function ()
{
    rainbow = !rainbow;
})

grid_border.addEventListener('change', function () 
{
    borders = !borders;
    showBorders();
})

grid_size.addEventListener('input', function ()
{
    genGrid(grid_size.value);
    size_text.innerHTML = `<strong>${grid_size.value}x${grid_size.value}</strong>`;
});

clear_grid.addEventListener('click', function ()
{
    clearGrid();
})