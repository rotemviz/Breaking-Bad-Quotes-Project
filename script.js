// Dom Elements
const range = document.querySelector("[data-range]");
const quateData = document.querySelector("[data-quate]");
const rangeState = document.querySelector("h3");

// Events 
async function handleRangePick() {
    if(range.value === '1')
        rangeState.innerHTML = `${range.value} quote`;
    else
        rangeState.innerHTML = `${range.value} quotes`;
    const apiQuate = await callApi(range.value);
    quateData.innerHTML = apiQuate.map((c) => {
        return `<br><h2 class="quote">"${c.quote}"</h2>
                <h3 class="author">${c.author}</h3><hr><br>`;
    }).join("");
}

async function callApi(url) {
    try {
        url = `https://api.breakingbadquotes.xyz/v1/quotes/${url}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch(error) {
        alert("Something went wrong");
    }
}

handleRangePick();
range.addEventListener("change", handleRangePick);