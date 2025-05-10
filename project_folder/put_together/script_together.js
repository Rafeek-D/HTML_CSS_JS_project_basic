
/*

let count=0;
let count2=2;


let basketlist= [];

function incrementthelist_sh(){
    count++;
    basketlist.push("Shawarma");
    console.log(basketlist);
    console.log("you bayed Shawarma");
    localStorage.setItem(count,"");
    //let test_num1 = localStorage.setItem(document.getElementById('countenerid').textContent, "");

    //let test_num2 =  localStorage.setItem(count,"");
    //let test_num3 = localStorage.getItem(count);
    //const test_num4= localStorage.getItem(count)

    //localStorage.setItem(count,"dd");
    //const test_num5= localStorage.getItem("dd");

    document.getElementById('countenerid').textContent=count;
    //console.log(localStorage.getItem(test_num4));

}

//localStorage.setItem(count,"");
//const test_num5= localStorage.getItem(count);

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

    //document.getElementById("name").textContent,
    //document.getElementById("adress").textContent,
    //document.getElementById("mail").textContent

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

*/

//--------------------------------------------------------end original basic----------------------------------------------------------




//-----------------------------------------------fot together file--------------------------------------------------------



let count=0;
let count2=2;


let basketlist= [];

function incrementthelist_sh(){
    count++;
    basketlist.push("Shawarma");
    console.log(basketlist);
    console.log("you bayed Shawarma");
    localStorage.setItem(count,"");
    //let test_num1 = localStorage.setItem(document.getElementById('countenerid').textContent, "");

    //let test_num2 =  localStorage.setItem(count,"");
    //let test_num3 = localStorage.getItem(count);
    //const test_num4= localStorage.getItem(count)

    //localStorage.setItem(count,"dd");
    //const test_num5= localStorage.getItem("dd");

    document.getElementById('countenerid').textContent=count;
    document.getElementById("countenerid_body2").textContent=count;
    document.getElementById("countenerid_body3").textContent=count;
    document.getElementById("countenerid_body4").textContent=count;
    document.getElementById("countenerid_body5").textContent=count;
    document.getElementById("countenerid_body6").textContent=count;


    show_bay_count_sh();

    document.getElementById("yourorder_h3_listsh").textContent=
    "you bayed Shawarma: " + number_bayed(basketlist,"Shawarma");;

    //console.log(localStorage.getItem(test_num4));

}

//localStorage.setItem(count,"");
//const test_num5= localStorage.getItem(count);

function incrementthelist_m(){
    count++;
    count2 = count;

    basketlist.push("Mlukhiye");
    console.log("you bayed Mlukhiye");
    console.log(basketlist);
    document.getElementById('countenerid').textContent=count;
    document.getElementById("countenerid_body2").textContent=count;
    document.getElementById("countenerid_body3").textContent=count;
    document.getElementById("countenerid_body4").textContent=count;
    document.getElementById("countenerid_body5").textContent=count;
    document.getElementById("countenerid_body6").textContent=count;

    show_bay_count_mu();

    document.getElementById("yourorder_h3_listmu").textContent=
    "you bayed Shawarma: " + number_bayed(basketlist,"Mlukhiye");;
    

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
    let you_bayed_mu= "you bayed Mlukhiye: " + number_bayed(basketlist,"Mlukhiye");
    document.getElementById('mu_num_web').textContent=you_bayed_mu;
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
        return "your name: " + this.name;
    }


    get_adress(){
        console.log(this.adress);
        return "your adress: " + this.adress;
    }


    get_mail(){
        console.log(this.mail);
        return "your Mail: " + make_star(this.mail);
    }




    show_person(){
        console.log("the person has the name:" + this.name + ", \n"+ "and the adress: " +this.adress + ", \n" + "Mail: " + make_star(this.mail));
        return " the person has the name: " + this.name + ", \n" +  "and the adress: " +this.adress  + ", \n" + "Mail: " + make_star(this.mail);
    }
}

function create_person(name,adress,mail){

    //----make instanze person:
    new Person(name,adress,mail

        //document.getElementById("name").textContent,
        //document.getElementById("adress").textContent,
        //document.getElementById("mail").textContent
    
    )
}




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



//----- body 1

function hidd_body1(){
    const body1_1 = document.querySelectorAll('.div_body1');

    for(let item of body1_1){
        item.style.display= 'none';
    }

/*
    const body1_2 = document.querySelectorAll('.navclass');
    for(let item of body1_2){
        item.style.display= 'none';
    }
    
    const body1_3 = document.querySelectorAll('.imags');

    for(let item of body1_3){
        item.style.display= 'none';
    }
*/
}


function show_body1(){
    const body1_1 = document.querySelectorAll('.div_body1');

    for(let item of body1_1){
        item.style.display= 'unset';

}
}



//----- body 2

function hidd_body2(){
    const body2_1 = document.querySelectorAll('.div_body2');

    for(let item of body2_1){
        item.style.display= 'none';
    }

}

function show_body2(){
    const body2_1 = document.querySelectorAll('.div_body2');

    for(let item of body2_1){
        item.style.display= 'unset';
    }

}


//----- body 3

function hidd_body3(){
    const body3_1 = document.querySelectorAll('.div_body3');

    for(let item of body3_1){
        item.style.display= 'none';
    }
    
}

function show_body3(){
    const body3_1 = document.querySelectorAll('.div_body3');

    for(let item of body3_1){
        item.style.display= 'unset';
    }
    
}


//----- body 4

function hidd_body4(){
    const body4_1 = document.querySelectorAll('.div_body4');

    for(let item of body4_1){
        item.style.display= 'none';
    }
 
}

function show_body4(){
    const body4_1 = document.querySelectorAll('.div_body4');

    for(let item of body4_1){
        item.style.display= 'unset';
    }

}


//----- body 5

function hidd_body5(){
    const body5_1 = document.querySelectorAll('.div_body5');

    for(let item of body5_1){
        item.style.display= 'none';
    }
 
}

function show_body5(){
    const body5_1 = document.querySelectorAll('.div_body5');

    for(let item of body5_1){
        item.style.display= 'unset';
    }

}


//----- body 6

function hidd_body6(){
    const body6_1 = document.querySelectorAll('.div_body6');

    for(let item of body6_1){
        item.style.display= 'none';
    }
 
}

function show_body6(){
    const body6_1 = document.querySelectorAll('.div_body6');

    for(let item of body6_1){
        item.style.display= 'unset';
    }

}











//---- some togehter hidd show
function showonlyhome(){
    hidd_body4();
    hidd_body3();
    hidd_body2();
    hidd_body5();
    hidd_body6();
    show_body1();
}

function showonlyabout(){
    hidd_body1();
    hidd_body3();
    hidd_body4();
    hidd_body5();
    hidd_body6();
    show_body2();
}

function showonlyoverview(){
    hidd_body1();
    hidd_body2();
    hidd_body4();
    hidd_body5();
    hidd_body6();
    show_body3();
}

function showonlyform(){
    hidd_body1();
    hidd_body2();
    hidd_body3();
    hidd_body4();   //here old body4 from form. the new body5
    hidd_body6();
    show_body5();
}


function showonly_order_infos(){
    hidd_body1();
    hidd_body2();
    hidd_body3();
    hidd_body4();   //here old body4 from form. the new body5
    hidd_body5();
    show_body6();
    
}



//---- form:



function event_handling(){



    

    

    const input_name= document.getElementById("idname").value;
    const input_email = document.getElementById("idmail").value;
    const input_adress = document.getElementById("idadress").value;
    
    //const input_value= input_name.value;

    //tex_change.textContent='tt';
    //tex_change.textContent= input_name;

    


    const person1= new Person(input_name,input_adress,input_email);


    const tex_change_name= document.querySelector('#yourorder_h3_name');
    tex_change_name.textContent = person1.get_name();


    const tex_change_adress= document.querySelector('#yourorder_h3_adress');
    tex_change_adress.textContent = person1.get_adress();


    const tex_change_mail= document.querySelector('#yourorder_h3_mail');
    tex_change_mail.textContent = person1.get_mail();



    showonly_order_infos();



    //tex_change.textContent = "Your Order:" +  person1.show_person();
    //tex_change.textContent = "tt";
    //tex_change.textContent = person1.get_name();


    

    
}






