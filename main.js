const grid = document.querySelector(".grid");
const grid_size = document.querySelector("#grid-size")
const color_selector = document.querySelector("#color");
const rainbow_toggle = document.querySelector("#rainbow");

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
}

grid_size.addEventListener('input', function ()
{
    genGrid(grid_size.value);
});