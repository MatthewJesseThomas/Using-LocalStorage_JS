document.getElementById('add-single-item-to-ls').addEventListener("click", (e) => {
    window.localStorage.setItem('name', 'Horizon Zero Dawn');
    updatePage();
});

document.getElementById('add-another-item-to-ls').addEventListener("click", (e) => {
    localStorage.setItem('items',
    JSON.stringify({id:01,itemno:"ItemNo" + "" + 1001, name:"Horizon Zero Dawn", price:'R500', quantity:3})
    );
    updatePage();
});

document.getElementById('get-single-item-from-ls').addEventListener("click", (e) => {
    const user = JSON.parse(localStorage.getItem('items'));
    document.getElementById('ls-currently').textContent = user.name
});

document.getElementById('remove-single-item-from-ls').addEventListener("click", (e) => {
    localStorage.removeItem('name');
    updatePage();
});

document.getElementById('remove-all-from-ls').addEventListener("click", (e) => {
    localStorage.clear();
});
function updatePage() {
    let values = [], keys = Object.keys(localStorage), i = keys.length;
    
        while(i--) { values.push(localStorage.getItem(keys[1]) );
        }
        document.getElementById('ls-my_example').textContent = values;
}

if (typeof(Storage) !== "undefined") {
    // Code for localStorage
}else{
    //No web Storage Support
}