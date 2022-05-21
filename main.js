const grid = document.querySelector(".grid");
const grid_size = document.querySelector("#grid-size")
const color_selector = document.querySelector("#paint-color");
const border_color_selector = document.querySelector("#border-color");
const rainbow_toggle = document.querySelector("#rainbow");
const size_text = document.querySelector("#size-output");
const clear_grid = document.querySelector("#clear-grid");
const grid_border = document.querySelector("#grid-border");

let color = "#a6589e";
let borderColor = "#f5d1d1";
let rainbow = false;
let borders = false;

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

        updateBorders(size);
    }

    showBorders();
    checkHover();
}

let updateBorders = (size) =>
{
    let i = 1;
    document.querySelectorAll(".item").forEach(item =>
    {
        if (i == 1)
        {
            item.style.borderTopLeftRadius = "1em";
        }
        else
        if (i == size)
        {
            item.style.borderTopRightRadius = "1em";
        }
        else
        if (i == Math.pow(size, 2) - size + 1)
        {
            item.style.borderBottomLeftRadius = "1em";
        }
        else
        if (i == Math.pow(size, 2))
        {
            item.style.borderBottomRightRadius = "1em";
        }
        i++;
    });
}

let clearGrid = () =>
{
    document.querySelectorAll(".item").forEach(item =>
    {
        item.style.backgroundColor = "#ffffffcc";
    })
}

let showBorders = () =>
{
    if (borders)
    {
        document.querySelectorAll(".item").forEach(item => 
        {
            item.style.border = `0.05em solid ${borderColor}`;
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

checkHover();
updateBorders(3);

color_selector.addEventListener('input', function ()
{
    color = color_selector.value;
});

border_color_selector.addEventListener('input', function () 
{
    borderColor = border_color_selector.value;
    showBorders();
});

rainbow_toggle.addEventListener('change', function ()
{
    rainbow = !rainbow;
});

grid_border.addEventListener('change', function () 
{
    borders = !borders;
    showBorders();
});

grid_size.addEventListener('input', function ()
{
    genGrid(grid_size.value);
    size_text.innerHTML = `<strong>${grid_size.value}x${grid_size.value}</strong>`;
});

clear_grid.addEventListener('click', function ()
{
    clearGrid();
});