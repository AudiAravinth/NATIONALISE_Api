async function getData() {
    const response = await fetch("https://api.nationalize.io/?name=" + input_.value) 

    data = await response.json();
    return data;
}

async function getCountry() {
    try {
        let res = await getData();
        // document.write(`Message is : ${input_.value}`);
       let table_ = document.createElement("TABLE")
       div.appendChild(table_)
       row1 = table_.insertRow();
       cell1 = row1.insertCell();
       cell1.innerHTML = "Name";

       cell2 = row1.insertCell();
       cell2.innerHTML = "Countries"

       cell3 = row1.insertCell();
       cell3.innerHTML = "Probabilities"

       row2 = table_.insertRow();
       cell4 = row2.insertCell();
        cell4.innerHTML = res.name;

       cell5 = row2.insertCell();
        cell5.innerHTML = res.country[0].country_id;

       cell6 = row2.insertCell();
       cell6.innerHTML = res.country[0].probability;
       
       row3 = table_.insertRow();
       cell7 = row3.insertCell();
       cell8 = row3.insertCell();
       cell8.innerHTML = res.country[1].country_id;

       cell9 = row3.insertCell();
       cell9.innerHTML = res.country[1].probability;

    } catch (err) {
        console.error(err);
    }
}



let div = document.createElement("div")
document.body.appendChild(div);

let input_ = document.createElement("INPUT")
div.appendChild(input_)
// document.write(input_.value)

let btn = document.createElement("BUTTON")
div.appendChild(btn)

btn.setAttribute("onclick","getCountry()");
