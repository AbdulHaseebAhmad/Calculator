var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

var pCount = 0;
var mCount = 0;
var dCount = 0;
var mpCount = 0;

var list1 = [];
var list2 = [];
var string = "";

var prev = "";

function calc(){
    id = event.target.id;
    answer = document.getElementById("view");
    if(id != "+" && id != "equal" && id != "minus" && id !="divide" && id != "ply" && id != "reset" && id != "del"){
        string += id;
        answer.innerHTML = string;}

    else if(id == "+"){
        if(prev != ""){
            string += prev;}
        pCount = pCount + 1;
        list1.push(parseInt(string,10))
        string = "";
        }

    else if(id == "equal" && pCount == 1){
        list1.push(parseInt(string,10));
        for(var i = 0; i < list1.length ; i++){
        count1 += list1[i];}
        pCount = 0;
        console.log(list1);
        list1 = [];
        answer.innerHTML = count1;
        prev = count1;
        count1 = 0;
        string = "";}

    else if(id == "minus"){
        if(prev != ""){
            string += prev;}
        mCount = mCount + 1;
        list1.push(parseInt(string,10));
        string = "";}

    else if(id == "equal" && mCount == 1){
        list1.push(parseInt(string,10));
        count2 = list1[0] - list1[1];
        mCount = 0;
        console.log(list1);
        list1 = [];
        answer.innerHTML = count2;
        prev = count2;
        count2 = 0;
        string = "";}

    else if(id == "divide"){
        if(prev != ""){
            string += prev;}
        dCount = dCount + 1;
        list1.push(parseInt(string,10));
        string = "";}

    else if(id == "equal" && dCount == 1){
        list1.push(parseInt(string,10));
        count3 = list1[0] / list1[1];
        dCount = 0;
        console.log(list1);
        list1 = [];
        answer.innerHTML = count3;
        prev = count3;
        count3 = 0;
        string = "";}

    else if(id == "ply"){
        if(prev != ""){
            string += prev;}
        mpCount = mpCount + 1;
        list1.push(parseInt(string,10));
        string = "";}

    else if(id == "equal" && mpCount == 1){
        list1.push(parseInt(string,10));
        count4 = (list1[0] * list1[1]);
        mpCount = 0;
        console.log(list1);
        list1 = [];
        answer.innerHTML = count4;
        prev = count4;
        count4 = 0;
        string = "";}

    else if(id == "reset"){
        list1 = [];
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        pCount = 0;
        mCount = 0;
        dCount = 0;
        mpCount = 0;
        prev = ""
        answer.innerHTML = "0.00";}}

    function del(){
        string = string.slice(0,-1);
        if(string.length != 0){
        answer.innerHTML = string;} else{answer.innerHTML = "0.00"}}


    function changeTheme(){
        var id = event.target.id;
         if(id == "one" ){
            document.getElementById("container").style.background = "";
            document.getElementById("view").style.background = "";
            document.getElementById("main").style.background = "";
            document.getElementById("reset").style.background = "";
            document.getElementById("reset").style.boxShadow = "";
            document.getElementById("equal").style.background = "";
            document.getElementById("equal").style.boxShadow = "";
            document.getElementById("equal").style.color = "";
            document.getElementById("del").style.background = "";
            document.getElementById("del").style.boxShadow = "";
            document.getElementById("header").style.color = "";
            document.getElementById("view").style.color = "";
            document.getElementById("main").style.color = "";

            document.getElementById("circle-1").style.visibility = "visible";
            document.getElementById("circle-2").style.visibility = "hidden";
            document.getElementById("circle-3").style.visibility = "hidden";

            document.getElementById("container").style.background = "hsl(222, 26%, 31%)";
            document.getElementById("view").style.background = "hsl(224, 36%, 15%)";
            document.getElementById("main").style.background = "hsl(223, 31%, 20%)";
            document.getElementById("reset").style.background = "hsl(225, 21%, 49%)";
            document.getElementById("reset").style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
            document.getElementById("equal").style.background = "hsl(6, 63%, 50%)";
            document.getElementById("equal").style.boxShadow = "0px 3px hsl(6, 70%, 34%)";
            document.getElementById("equal").style.color = "white";
            document.getElementById("del").style.background = " hsl(225, 21%, 49%)";
            document.getElementById("del").style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
            document.getElementById("header").style.color = "hsl(0, 0, 100%)";
            document.getElementById("view").style.color = "hsl(0, 0, 100%)";
            document.getElementById("main").style.color = "hsl(0, 0, 100%)";
            for(var q = 0; q < 18 ; q++){
            document.getElementsByClassName("box")[q].style.background = " hsl(30, 25%, 89%)";
            document.getElementsByClassName("box")[q].style.boxShadow = "0px 3px hsl(28, 16%, 65%)";}}

        if( id == "two"){
            document.getElementById("container").style.background = "";
            document.getElementById("view").style.background = "";
            document.getElementById("main").style.background = "";
            document.getElementById("reset").style.background = "";
            document.getElementById("reset").style.boxShadow = "";
            document.getElementById("equal").style.background = "";
            document.getElementById("equal").style.boxShadow = "";
            document.getElementById("equal").style.color = "";
            document.getElementById("del").style.background = "";
            document.getElementById("del").style.boxShadow = "";
            document.getElementById("header").style.color = "";
            document.getElementById("view").style.color = "";
            document.getElementById("main").style.color = "";

            document.getElementById("circle-1").style.visibility = "hidden";
            document.getElementById("circle-2").style.visibility = "visible";
            document.getElementById("circle-3").style.visibility = "hidden";

            document.getElementById("view").style.background = "white";
            document.getElementById("main").style.background = "hsl(0, 5%, 81%)";
            document.getElementById("container").style.background = "hsl(0, 0%, 93%)";
            document.getElementById("reset").style.background = "hsl(185, 42%, 37%)";
            document.getElementById("reset").style.boxShadow = "0px 3px  hsl(185, 58%, 25%)";
            document.getElementById("equal").style.background = "hsl(25, 98%, 40%)";
            document.getElementById("equal").style.boxShadow = "0px 3px  hsl(25, 99%, 27%)";
            document.getElementById("del").style.background = "hsl(185, 42%, 37%)";
            document.getElementById("del").style.boxShadow = "0px 3px  hsl(185, 58%, 25%)";
            document.getElementById("header").style.color = "black";
            document.getElementById("view").style.color = "hsl(198, 20%, 13%)";
            for(var r = 0; r < 18 ; r++){
            document.getElementsByClassName("box")[r].style.background = "hsl(45, 7%, 89%)";
            document.getElementsByClassName("box")[r].style.boxShadow = "0px 3px hsl(35, 11%, 61%)";}}


        if(id == "three"){

            document.getElementById("container").style.background = "";
            document.getElementById("view").style.background = "";
            document.getElementById("main").style.background = "";
            document.getElementById("reset").style.background = "";
            document.getElementById("reset").style.boxShadow = "";
            document.getElementById("equal").style.background = "";
            document.getElementById("equal").style.boxShadow = "";
            document.getElementById("equal").style.color = "";
            document.getElementById("del").style.background = "";
            document.getElementById("del").style.boxShadow = "";
            document.getElementById("header").style.color = "";
            document.getElementById("view").style.color = "";
            document.getElementById("main").style.color = "";

            document.getElementById("circle-1").style.visibility = "hidden";
            document.getElementById("circle-2").style.visibility = "hidden";
            document.getElementById("circle-3").style.visibility = "visible";

            document.getElementById("view").style.background = "hsl(268, 71%, 12%)";
            document.getElementById("main").style.background = "hsl(268, 71%, 12%)";
            document.getElementById("container").style.background = "hsl(268, 75%, 9%)";
            document.getElementById("reset").style.background = " hsl(281, 89%, 26%)";
            document.getElementById("reset").style.boxShadow = "0px 3px  hsl(285, 91%, 52%) ";
            document.getElementById("equal").style.background = " hsl(176, 100%, 44%)";
            document.getElementById("equal").style.boxShadow = "0px 3px hsl(177, 92%, 70%)";
            document.getElementById("equal").style.color = "black";
            document.getElementById("del").style.background = "hsl(281, 89%, 26%)";
            document.getElementById("del").style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
            document.getElementById("header").style.color = " hsl(52, 100%, 62%)";
            document.getElementById("view").style.color = " hsl(52, 100%, 62%)";
            document.getElementById("main").style.color = "hsl(52, 100%, 62%)";
            for(var u = 0; u < 18 ; u++){
            document.getElementsByClassName("box")[u].style.background = " hsl(268, 47%, 21%)";
            document.getElementsByClassName("box")[u].style.boxShadow = "0px 3px hsl(290, 70%, 36%)";}}}