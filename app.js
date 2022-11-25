function funThings(){
    axios.request({
        url : "http://www.boredapi.com/api/activity/"
    }).then(funSuccess).catch(funFail);
}

function funFail(error){
    console.log(error);
}

// Dog image post onto page
function funSuccess(response){
    let funData = response.data;
    document.getElementById(`extraBody`).insertAdjacentHTML(`beforeend`, `<h2>${funData.activity}</h2>`)
}

document.getElementById(`funButton`).addEventListener(`click`, funThings)