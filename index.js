let btnM=document.getElementsByClassName("btnmoin");
let btnP=document.getElementsByClassName("btnp");
let quantity=document.getElementsByClassName("quantity");
let prixTo=document.getElementById("prixTot");
let price=document.getElementsByClassName("prixU");
let heart=document.getElementsByClassName("fa-heart");
let trush=document.getElementsByClassName("fa-trash");
console.log(heart);
console.log(btnM);
for(let i=0;i<btnP.length;i++)
{

btnP[i].addEventListener('click',function () 
{
    btnP[i].previousElementSibling.innerText++;
    prixTotal();
})
}
for(let i=0; i< btnM.length;i++)
{

btnM[i].addEventListener('click',function () 
{

    if(btnM[i].nextElementSibling.innerText>0){
    btnM[i].nextElementSibling.innerText--;
    prixTotal();}
})
}
function prixTotal(){
let resultat=0;
for(let i=0;i<price.length;i++){
    resultat+=quantity[i].innerText*price[i].innerText;
}
prixTo.innerText= resultat;
}


let L=true;
for(let i=0; i< heart.length;i++){

    heart[i].addEventListener("click",function () {
        if(L==true){
            heart[i].style.color="red";
            L=!L;
           }
           else {
        
            heart[i].style.color="black";
            L=!L;
           }
        
    })
}

for(let i=0;i<trush.length;i++)
{


    trush[i].addEventListener("click",function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove();
        prixTotal();
        
    })


}


    

