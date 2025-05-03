let count=0;
let count2=2;


let basketlist= [];

function incrementthelist_sh(){
    count++;
    basketlist.push("Shawarma");
    console.log(basketlist);
    console.log("you bayed Shawarma");

    document.getElementById('countenerid').textContent=count;

}

function incrementthelist_m(){
    count++;
    count2 = count;

    basketlist.push("Mlukhiye");
    console.log("you bayed Mlukhiye");
    console.log(basketlist);
    document.getElementById('countenerid').textContent=count;

}

function show_bay_count(){
   
    //document.getElementById('countenerid').textContent=count;
}

function show_bay_count_sh(){
    fetch('home-final-project.html');
    //document.getElementById('countenerid').textContent=count;
}


function show_bay_count_mu(){
    fetch('home-final-project.html');
    //document.getElementById('countenerid').textContent=count;
}



class Person{
    constructor (name,adress){
        this.name = name;
        this.adress= adress;
    }


    get_name(){
        return this.name;
    }

    show_person(){
        return "the person hase the name " + this.name + " and the adress: "+ this.adress;
    }
}

