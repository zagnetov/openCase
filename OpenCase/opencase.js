var domBuilderModule = (function () {
    var casesCounter;
    var casesSum;
    var prize;
    var openCaseBtn;
    var addCaseBtn; 
    var sortSetRare;
    var sortSetEpic;
    var sortSetMystical;
    var sortSetLegendary;
    var winner;
    var casesSet;
    var randomizeNumber;
    
    function init(){
        initControls();
        initLisleners();
        initPrize();
        initCasesSum();
        initCasesSet();
        initSortSets();
    }

    function initControls(){
        addCaseBtn = document.getElementById('add');
        openCaseBtn =  document.getElementById('open');
    } 

    function initLisleners(){
        addCaseBtn.addEventListener("click", addCase);
        openCaseBtn.addEventListener("click", openCase);
    }

    function initPrize(){
        prize = document.getElementById('prize');
    }

    function initCasesSum(){
        casesSum = document.getElementById('casesSum');
        casesCounter = 0;
    }

    function initCasesSet(){
        casesSet = [{ name: 'Teemo', type: 'rare' },
                    { name: 'Garen', type: 'rare' },
                    { name: 'Ennie', type: 'rare' },
                    { name: 'Anivia', type: 'rare' },
                    { name: 'Syndra', type: 'epic' },
                    { name: 'Darius', type: 'epic' },
                    { name: 'Vladimir', type: 'epic' },
                    { name: 'Bard', type: 'mystical' },
                    { name: 'Gnar', type: 'mystical' },
                    { name: 'Vayne', type: 'legendary' }];
    }

    function initSortSets(){
        sortSetRare = [];
        sortSetEpic = [];
        sortSetMystical = [];
        sortSetLegendary = []; 
    }

    function addCase(){
        casesCounter++;
        casesSum.innerHTML = casesCounter;
    }

    function openCase (){       
        randomizeNumber = Math.floor(Math.random() * (1000 - 0)) + 0;
        if (casesCounter == 0){
            alert('Добавьте кейс');
        }
        else{
            casesCounter--;     
            casesSum.innerHTML = casesCounter; 
            if (randomizeNumber <= 650) {
                for(var i = 0; i < 4; i++){
                    sortSetRare.push(casesSet[i]);
                }
                sortSetRare.sort(compareRandom);
                winner = sortSetRare[0];
                prize.innerHTML += "<em class='rare'>" + winner.name + "</em> ";
            } 
            else if (randomizeNumber > 650 && randomizeNumber <= 900) {
                for(i = 4; i < 7; i++){
                    sortSetEpic.push(casesSet[i]);
                }
                sortSetEpic.sort(compareRandom);
                winner = sortSetEpic[0];
                prize.innerHTML += "<em class='epic'>" + winner.name + "</em> ";
            } 
            else if (randomizeNumber > 900 && randomizeNumber <= 998){
                for(i = 7; i < 9; i++){
                    sortSetMystical.push(casesSet[i]);
                }
                sortSetMystical.sort(compareRandom);
                winner = sortSetMystical[0];
                prize.innerHTML += "<em class='mystical'>" + winner.name + "</em> ";
            } 
            else {
                winner = casesSet[9];
                prize.innerHTML += "<b class='legendary'>" + winner.name + "</b> ";
            }     
        }
    }

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    return {
        init: init
     };
})(); 


(function () {
    window.onload = initCaseGenerator;
	function initCaseGenerator() {
	    domBuilderModule.init();
	}
}
)();
