/* Questions */
questions1 = [[
    {question: 'In which country is Mt. Everest?', answer: ['Mt ', '. ', 'Everest ', 'is  ', 'in ', 'Nepal ', '. '], corrected: 'Mt. Everest is in Nepal.'},
    {question: 'How tall is Mt. Everest?', answer: ['Mt. ', 'Everest ', 'is ', 'over ', '29,000 ', 'feet ', 'tall ', '. '], corrected: 'Mt. Everest is over 29,000 feet tall.'},
    {question: 'What could George Mallory and Andrew Irvine not do?', answer: ['They ', 'could ', 'not ', 'climb ', 'to ', 'the ', 'top ', 'of ', 'Mt . ', 'Everest ', '. '], corrected: 'They could not climb to the top of Mt. Everest.'},
    {question: 'In which year were George Mallory and Andrew Irvine unable to reach the top of Mt. Everest?', answer: ['George ', 'Mallory ', 'and Andrew ', 'Irvine ', 'were ', 'unable ', 'to ', 'reach ', 'the ', 'top ', 'of ', 'Mt ', '. ', 'Everest ', 'in ', '1924 ', '. '], corrected: ['George Mallory and Andrew Irvine were unable to reach the top of Mt. Everest in 1924.', 'Andrew Irvine and George Mallory were unable to reach the top of Mt. Everest in 1924.', 'In 1924, George Mallory and Andrew Irvine were unable to reach the top of Mt. Everest.', 'In 1924, Andrew Irvine and George Mallory were unable to reach the top of Mt. Everest.']}
], [
    {question: 'How high did the climbers camp?', answer: ['The ', 'climbers  ', 'camped ', 'at ', 'twenty ', '- ', 'six ', 'thousand ', 'feet ', '. '], corrected: 'The climbers camped at twenty-six thousand feet.'},
    {question: 'Who were the first people to climb to the top of Mt. Everest?', answer: ['Edmund ', 'Hillary  ', 'and ', 'Tenzing ', 'Norgay ', 'were ', 'the ', 'first ', 'people ', 'to ', 'climb ', 'to ', 'the ', 'top ', 'of ', 'Mt. ', 'Everest ', '. '], corrected: 'Edmund Hillary and Tenzing Norgay were the first people to climb to the top of Mt. Everest.'},
    {question: 'On which date did Hillary and Norgay reach the top of Mt. Everest?', answer: ['They ', 'reached  ', 'the ', 'top ', 'of ', 'Mt. ', 'Everest ', 'on ', '29th ','May ', ', ', '1953 ', '. '], corrected: 'They reached the top of Mt. Everest on May 29th, 1953.'},
], [
    {question: 'What did Hillary and Norgay drink at the top of Mt. Everest?', answer: ['They ', 'drank  ', 'tea ', '. '], corrected: 'They drank tea.'},
    {question: 'Who was the first woman to climb to the top of Mt. Everest?', answer: ['Junko ', 'Tabei  ', 'was ', 'the ', 'first ', 'woman ', 'to ', 'climb ', 'to ', 'the ', 'top ', 'of ', 'Mt. ', 'Everest ', '. '], corrected: 'Junko Tabei was the first woman to climb to the top of Mt. Everest.'},
    {question: 'How many climbers have now reached the top of Mt. Everest?', answer: ['Over ', 'twelve ', '- ', 'hundred ', 'climbers  ', 'have ', 'now ', 'reached ', 'the ', 'top ', 'of ', 'Mt. ', 'Everest ', '. '], corrected: 'Over twelve-hundred climbers have now reached the top of Mt. Everest.'},
]
             
]; 


let storyImgPlaceholder = document.querySelector('article img');
let article = document.querySelector('article');
//article.setAttribute('')
let whichFirstClick;
let whichSecondClick;

function handleNavButton(e){
    if(e.target !== e.currentTarget)
        {
            clearQuestionsAndAnswers();
            whichFirstClick = parseInt(e.target.innerHTML)-1;
            showStoryImg(whichFirstClick);
            showStoryButtons(whichFirstClick);
            whichStoryButton();
        }
}

function handleSectionButton(e){
    if(e.target !== e.currentTarget)
        {
            whichSecondClick = parseInt(e.target.innerHTML)-1;
            console.log("Nav Button = " + whichFirstClick + " - Section Button " + whichSecondClick);
            showQuestion(whichFirstClick, whichSecondClick);
        }
}


function whichNavButton()
{
    console.log("WhichNavButton");
    let navListener = document.querySelector('nav');
    navListener.addEventListener('click', handleNavButton, false);
}


function whichStoryButton()
{
    let sectionButtons = document.querySelector('section');
    sectionButtons.addEventListener('click', handleSectionButton, false);
};


function showStoryImg()
{
    storyImgPlaceholder.setAttribute('src', "images/HillaryNorgay"+(whichFirstClick+1)+".png")
}


//
function showStoryButtons()
{
    
    
    var child = document.querySelectorAll('section button');
    if ( child.length >0)
{
    for(i = 0; i < child.length; i++)
        {
            var parent = document.querySelector('section');
            parent.removeChild(child[i]);
        }
}
    
    for(i = 0; i < questions1[whichFirstClick].length; i++)
        {
            var buttons = document.createElement('button');
            buttons.innerHTML = (i+1);
            document.querySelector('section').appendChild(buttons);
        }
};


    
    

function showQuestion(whichFirstClick, whichSecondClick)
{
    clearQuestionsAndAnswers();
    let theQuestion = questions1[whichFirstClick][whichSecondClick].question;
    let theQuestionClick = document.getElementById('quest');
    theQuestionClick.textContent = theQuestion;
    theQuestionClick.addEventListener('click', showAnswer, false);
}

function showAnswer()
{
    let theAnswerScrambled =[];
    let theAnswerBits = shuffle(questions1[whichFirstClick][whichSecondClick].answer);
            for (i = 0; i < theAnswerBits.length; i++)
                 {
                            
                     theAnswerScrambled = theAnswerScrambled + theAnswerBits[i];
                 }
    let theAnswerClick = document.getElementById('answ');
    theAnswerClick.textContent = theAnswerScrambled;
    theAnswerClick.style.color = "red";
    console.log(theAnswerScrambled);
    theAnswerClick.addEventListener('click', inputCorrected, false);
}


function inputCorrected()
{
    let unscrambledAnswer = questions1[whichFirstClick][whichSecondClick].corrected;
    correctedInput = prompt("Unscramble the answer.");
    console.log(unscrambledAnswer);
    if(whichFirstClick == 0 && whichSecondClick ==3){
        if(
            correctedInput == questions1[0][3].corrected[0] ||
            correctedInput == questions1[0][3].corrected[1] ||
            correctedInput == questions1[0][3].corrected[2] ||
            correctedInput == questions1[0][3].corrected[3]
        ) {
            document.getElementById('answ').innerHTML  = correctedInput;
            document.getElementById('answ').style.color = 'green';
        }
    }
    else if(correctedInput == unscrambledAnswer)
        {
            document.getElementById('answ').innerHTML  = unscrambledAnswer;
            document.getElementById('answ').style.color = 'green';
            smile();
        }
}

//    
//             {
//                

whichNavButton();


function clearQuestionsAndAnswers() 
{
    document.getElementById('quest').textContent='';
    document.getElementById('answ').textContent='';
}

// THE MATHY BIT
/* randomise the answer word order */

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function smile(){
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#1ec41e';
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, 125, 0, 2 * Math.PI);
ctx.stroke();   
ctx.beginPath();    
ctx.arc(c.width/3, (c.height/3), 20, 0, 2 * Math.PI);    
ctx.stroke();   
ctx.beginPath();    
ctx.arc((c.width/3*2), (c.height/3), 20, 0, 2 * Math.PI);    
ctx.stroke();        
ctx.beginPath(); 
    ctx.lineWidth = 30;
ctx.arc((c.width/2), (c.height/2.2), 100, 0.523599 , 2.61799 );    
ctx.stroke();        

setTimeout(function(){ctx.clearRect(0, 0, c.width, c.height); } , 6000);
  
    }
    


