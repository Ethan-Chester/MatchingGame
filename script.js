let counter = 0
let matches = 8
let matching = false

function createCards(){
    var card_symbols = [
        "⥉",
        "☍",
        "↭",
        "§",
        "⧑",
        "⊗",
        "⇴",
        "❖"
    ]

    var card_symbols_graphics = [
        "⥉",
        "☍",
        "↭",
        "§",
        "⧑",
        "⊗",
        "⇴",
        "❖",
        "⥉",
        "☍",
        "↭",
        "§",
        "⧑",
        "⊗",
        "⇴",
        "❖"
    ]


    
    var card_map = new Map();

    // create randomized ids for cards
    for (let i = 0; i < 8; i++) {
        let randomNumber = Math.floor(Math.random() * card_symbols.length)
        card_map.set(card_symbols[randomNumber], i);
        card_symbols.splice(randomNumber, 1);
    }
    console.log(card_map)

    //create cards
    for (let i = 0; i < 16; i++){
        let container = document.getElementById("container");
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("hidden");
        card.classList.add("prevent-select")
        randomSymbol = Math.floor(Math.random() * card_symbols_graphics.length)
        card.innerHTML = card_symbols_graphics[randomSymbol]
        card_symbols_graphics.splice(randomSymbol,1)
        container.append(card);
        
    }

    let cards = document.getElementsByClassName("card");
    let matchesLeft = document.getElementById("matchesLeft")

    matchesLeft.innerHTML = matches

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function() {
            
            if(!this.classList.contains("clicked")  && matching === false){
                if(counter == 0){
                    firstCardDiv = this
                    this.classList.add("clicked")
                    firstCard =  this.innerHTML
                    this.classList.remove("hidden")
                    console.log(firstCard)
                    counter++;
    
                } else {
                    secondCardDiv = this
                    this.classList.add("clicked")
                    secondCard = this.innerHTML
                    this.classList.remove("hidden")
                    console.log(secondCard)
                    counter = 0;
    
                    if(firstCard === secondCard){
    
                        firstCardDiv.style.backgroundColor  = "green"
                        secondCardDiv.style.backgroundColor  = "green"
                        matching = true
                        setTimeout(() => {
                            firstCardDiv.remove();
                            secondCardDiv.remove();
                            matches--
                            matchesLeft.innerHTML = matches
                            matching = false 
                            if(matches === 0){
                                matches = 8
                                createCards()
                            }
                          }, 1000);
                        
                    }
                    else{
                        firstCardDiv.style.backgroundColor  = "red"
                        secondCardDiv.style.backgroundColor  = "red"
                        matching = true
                        setTimeout(() => {
                            firstCardDiv.classList.add("hidden")
                            secondCardDiv.classList.add("hidden")
                            firstCardDiv.style.backgroundColor  = "white"
                            secondCardDiv.style.backgroundColor  = "white"
                            firstCardDiv.classList.remove("clicked")
                            secondCardDiv.classList.remove("clicked")
                            matching = false
                          }, 1000);   
                    }
                }
            }

            
        });
        
       

    }}

createCards()



