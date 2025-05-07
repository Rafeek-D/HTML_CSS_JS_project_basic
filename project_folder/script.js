
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
    //fetch('home-final-project.html');
    //document.getElementById('countenerid').textContent=count;
    let you_bayed_sh= "you bayed Shawarma: " + number_bayed(basketlist,"Shawarma");
    document.getElementById('sh_num_web').textContent=you_bayed_sh;
}


function show_bay_count_mu(){
    //fetch('home-final-project.html');
    //document.getElementById('countenerid').textContent=count;
    let you_bayed_sh= "you bayed Mlukhiye: " + number_bayed(basketlist,"Mlukhiye");
    document.getElementById('mu_num_web').textContent=you_bayed_Mlukhiye;
}






//-----------------------------------------over_view---------------------------------------------------

//--count number of thing from list and return the number

let number_bayed= 

function get_number(st,name){
    let num= 0;
    let length_st= st.length
        for (let i= 0; i <=length_st ;i++){
            if (st[i] == name){
                num++;
            }
        }
        return num;
      
 }

 
 let you_bayed_sh= "you bayed Shawarma: " + number_bayed(basketlist,"Shawarma");
 let you_bayed_Mlukhiye= "you bayed Mlukhiye: " + number_bayed(basketlist,"Mlukhiye");




 // ----------------------------------------for form----------------------------------------------

class Person{
    constructor (name,adress,mail){
        this.name = name;
        this.adress= adress;
        this.mail= mail;
    }


    get_name(){
        console.log(this.name);
        return this.name;
    }

    show_person(){
        console.log("the person hase the name " + this.name + " and the adress: " +this.adress + make_star(this.adress));
        return "the person hase the name " + this.name + " and the adress: " +this.adress + make_star(this.adress);
    }
}

//----make instanze person:
let customer= new Person(

    document.getElementById("name").textContent,
    document.getElementById("adress").textContent,
    document.getElementById("mail").textContent

)


//---get from amil ** the first

let make_star = function get_star_amail(mail_st){

    //let st= "*".repeat(5);
    let at_position= mail_st.indexOf("@");
    let from_at_toend_star = "*".repeat(5); 
    let from_at_toend = "";
    for (let i= at_position; i <= mail_st.length; i++ ){
        
        from_at_toend = from_at_toend+  mail_st.charAt(i); 
    }
    console.log("the mail adress hided = " + from_at_toend_star + from_at_toend)
    return from_at_toend_star + from_at_toend;

}

// the test : console.log(make_star("programiz@gmail.pro")); => *****@gmail.pro