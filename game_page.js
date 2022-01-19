player1_score= 0;
player2_score= 0;

player1Name= localStorage.getItem("player1Name");
player2Name= localStorage.getItem("player2Name");
document.getElementById("player1_name").innerHTML= player1Name + " : ";
document.getElementById("player2_name").innerHTML= player2Name + " : ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("question_turn").innerHTML= "Question Turn : " + player1Name;
document.getElementById("answer_turn").innerHTML= "Answer Turn : " + player2Name;

function Lets_go(){
    output= document.getElementById("word").value;
    word= output.toLowerCase();
    console.log(word);

    letter_1= word.charAt(1);
    console.log(letter_1);

    lengthdividedby_2= Math.floor(word.length/2);
    letter_2= word.charAt(lengthdividedby_2);
    console.log(letter_2);

    length_minus_1= word.length-1;
    letter_3= word.charAt(length_minus_1);
    console.log(letter_3);

    remove_letter_1= word.replace(letter_1, "_");
    remove_letter_2= remove_letter_1.replace(letter_2, "_");
    remove_letter_3= remove_letter_2.replace(letter_3, "_");
    console.log(remove_letter_3);

    Question= "<h4 id='word_display'>Q : "+ remove_letter_3 + "</h4>";
    text_input= "<br> Answer : <input type='text' id='input'>";
    button= "<br><br><button id='display_button' class='btn btn-info' onclick='Check()'>Check</button>";
    final_output= Question+ text_input+ button;
    document.getElementById("output").innerHTML= final_output;
    document.getElementById("word").value= "";
}

function Check(){
    if (input == word){
        player2_score= player2_score + 1;
    }
    else {
        player2_score= player2_score - 1;
    }
}