let genGrid = (size) =>
{
    let n = Math.pow(size, 2);
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
            document.querySelector(".grid").style.gridTemplateColumns = colX;
        }
        console.log('hi');
    }
}

genGrid(5);