
window.onload=function(){
const Dice=["Dices-images/Dice-1.png","Dices-images/Dice-2.png","Dices-images/Dice-3.png","Dices-images/Dice-4.png","Dices-images/Dice-5.png","Dices-images/Dice-6.png"];
const image1=document.getElementById("Dice1");
const image2=document.getElementById("Dice2");
const button=document.querySelector(".Roll");
const result=document.getElementById("result");
var winner;
button.addEventListener("click",function(){
    const any_index1=Math.floor(Math.random()*Dice.length);
    const any_dice1=Dice[any_index1];
    
    const any_index2=Math.floor(Math.random()*Dice.length);
    const any_dice2=Dice[any_index2];
    console.log(any_index1,any_index2)
    image1.src=any_dice1;
    image2.src=any_dice2;

    if (any_index1>any_index2){
        winner="And the winner is: player 1"}

    else if(any_index1<any_index2){
        winner="And the winner is: player 2"
    }
    else{
        winner="The match is draw,play again"
    }

    result.textContent=winner



    

})
}