let count=0;

basketlist= [];

function incrementthelist_sh(){
    count++;
    basketlist.push("Shawarma");
    console.log(basketlist);
    console.log("you bayed Shawarma");

    document.getElementById('countenerid').textContent=count;

}

function incrementthelist_m(){
    count++;
    basketlist.push("Mlukhiye");
    console.log("you bayed Mlukhiye");
    console.log(basketlist);
    document.getElementById('countenerid').textContent=count;

}