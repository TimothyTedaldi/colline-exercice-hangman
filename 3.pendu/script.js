/*  THE HANGMAN
____
|   |
|   0
|  /|\
|  / \
|
|_____

*/

function myBeautifulMenuInEng(){
    let isExit = false;
    console.clear();
    while(isExit != true){
        console.log("Hangman the game by Timothy Tedaldi");
        console.log('____________________________________________________________');
        console.log('');
        console.log('Start');
        console.log('Tutorial');
        console.log('Language');
        console.log('EXIT')
        console.log('____________________________________________________________');
        let answerPrompt = prompt('Please Write which menu  you wanna try'); 
        switch(answerPrompt){
            case 'Start' :{
                newGame();
                break;
            }
            case 'Tutorial':{
                howItWorks();
                break;
            }
            case 'Language':{
                whichLanguage();
                break;
            }
            case 'EXIT':{
                isExit=true;
                break;
            }
            default : {console.clear(); console.error('Error ! Pls use the right spelling');}
        }   
    }
    console.clear();
    document.getElementById('aGoodIdea').innerHTML = '<h1>GOODBYE MY FRIEND !!!</h1>'
    document.getElementById('aGoodIdea').innerHTML += '<h3>See you later !</h3>'
    document.getElementById('aGoodIdea').innerHTML += "<img src='img/3bf.gif'></img>"
}
function howItWorks (){
    const success = [ 'background: green', 'color: white', 'display: block', 'text-align: center'].join(';');
    let answerPrompt = '';
    while(answerPrompt != 'ok'){
        console.clear();
        console.log('Hello, welcome in my little Hangman game', success);
        console.log("I'm Timothy Tedaldi the content creator and i hope you enjoy your stay");
        console.log('____________________________________________________________')
        console.log('First this  is you');
        player();
        console.log ("And you're about to be hang unless you find the right answer");
        console.log ("The word to find always appear like '_ _ _ _ _ _ _'");
        console.log ("You have to find a letter each time to see it is in the word");
        console.log ("For example if you wrote 'i' and it is in the word, the word will appear like this '_ _ _ i _ _ i");
        console.log ("If you made a mistake, you will get closer to your death");
        console.log ("You have 6 tries so be warry of doing many mistakes");
        answerPrompt = prompt("If you're done, enter 'ok' to leave this tutorial")
        console.log(answerPrompt);
    }
    console.clear();
    myBeautifulMenuInEng();
}
function whichLanguage(){
    let answerPrompt = '';
    while(answerPrompt != 'ok'){
        console.clear();
        console.warn('Sorry but this option is unavailable at the moment.')
        console.warn('please retry in a further update')
        answerPrompt = prompt("If you're done, enter 'ok' to leave this tutorial")
    }
    console.clear();
    myBeautifulMenuInEng();
}


// Le code du jeu en lui même commence ici !!

function newGame(){
    const WordToFind = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let wordFoundSoFarArr = ['_', '_', '_', '_', '_', '_','_'];
    let mistakes = 0;
    let promptAnswer = '';
    let letterSoFar;
    let equalBool = false;

    while(mistakes < 6 && equalBool != true){
        console.clear();
        let wordFoundSoFar = '';
        showAdvencement(mistakes);
        for(let i=0; i<WordToFind.length; i++){
            wordFoundSoFar +=`${wordFoundSoFarArr[i]} `
        }
        console.log(wordFoundSoFar)
        console.log(wordFoundSoFarArr)
        console.log(WordToFind);
        console.log(`So far ${letterSoFar} were given`)
        
        promptAnswer = prompt('Give me a letter');
        promptAnswer = promptAnswer.toUpperCase();

        let checkVar = wordCompare(WordToFind, wordFoundSoFarArr, promptAnswer)
        if(checkVar != true){
            letterSoFar += (` ${promptAnswer}`)
            mistakes ++
        }
        else{
            for(let i=0; i<WordToFind.length; i++){
                if(WordToFind[i] == promptAnswer){
                    wordFoundSoFarArr[i] = promptAnswer;
                    letterSoFar += (` ${promptAnswer}`)
                }
            }
        }
        equalBool = isItEqual(WordToFind, wordFoundSoFarArr);
    }
    console.clear();
    gameOver(mistakes, WordToFind);
}
function showAdvencement(err){
    switch(err){
        case 0 :
            player();
            break;
        case 1 :
            mistake1();
            break;
        case 2 :
            mistake2();
            break;
        case 3 :
            mistake3();
            break;
        case 4 :
            mistake4();
            break;
        case 5 :
            mistake5();
            break;   
    }
}
function player(){
    console.log('  0  ');
    console.log(' /|\\ ');
    console.log(' / \\ ');
}
function playerWin(){
    console.log(' \\0/  ');
    console.log('  |  ');
    console.log(' / \\ ');
}
function mistake1(){
    console.log('       0  ');
    console.log('      /|\\ ');
    console.log('_____ / \\ ');
}
function mistake2(){
    console.log('        0  ');
    console.log('       /|\\ ');
    console.log('|_____ / \\ ');
}
function mistake3(){
    console.log('        0  ');
    console.log('|      /|\\ ');
    console.log('|_____ / \\ ');
}
function mistake4(){
    console.log('|       0  ');
    console.log('|      /|\\ ');
    console.log('|_____ / \\ ');
}
function mistake5(){
    console.log('________    ')
    console.log('|           ')
    console.log('|           ')
    console.log('|       0   ');
    console.log('|      /|\\ ');
    console.log('|_____ / \\ ');
}
function mistake6(){
    console.log('________    ')
    console.log('|       |   ')
    console.log('|       0   ')
    console.log('|      /|\\ ');
    console.log('|      / \\ ');
    console.log('|_____      ');
    console.log('YOU DIED')
}

// Fonction qui reçoit la lettre en entrée et le mot trouvé pour le moment 
// Et retourne le mot trouvé modifié si la lettre s'y trouvvait
// Bien qu'inutile actuellement j'ai intégré le WordToFind pour prévoir le cas ou j'ai plusiseurs mot trouvable
function wordCompare(WordToFind, WordFoundSoFar, letterGiven){
    let didItChange = false
    for(let i=0; i<WordToFind.length; i++){
        if(WordToFind[i] == letterGiven){
            didItChange = true
        }
    }
    return didItChange;
}

function gameOver(err, answer){
    console.clear;
    if (err < 6){
        playerWin();
        console.log('GG you won !!');
        console.log(`The answer was indeed ${answer.join('')}`);
        retryOrNot(); 
    }
    else{
        mistake6();
        console.log("Oh you lost :'(");
        console.log(`The answer was ${answer.join('')}`)
        retryOrNot();
    }
}

function retryOrNot(){
    answerPrompt = prompt('Do you wanna try another one ? write yes/no')
    if(answerPrompt == 'yes'){
            newGame();
        }
    else if(answerPrompt == 'no'){
        myBeautifulMenuInEng();
    }
}

function isItEqual(WordToFind, wordFoundSoFarArr){
    WordToFind = WordToFind.toString()
    wordFoundSoFarArr = wordFoundSoFarArr.toString()
    if(wordFoundSoFarArr == WordToFind){
        return true;
    }
    else{
        return false;
    }
}


document.getElementById('button').addEventListener('click', () =>{
    myBeautifulMenuInEng();
});

