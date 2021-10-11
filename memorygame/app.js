document.addEventListener('DOMContentLoaded',()=>{

    //card options

    const cardArray= [
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          },
          {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          }
    ]

    cardArray.sort(()=>0.5 - Math.random)

    //create a game board
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardChosenId = []
    var cardsWon =[]

    function createBoard(){
        for(let i=0; i < cardArray.length; i++ ){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)

            card.addEventListener('click',flipcard)

            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){

        var cards = document.querySelectorAll('img')

        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]){
            alert('Match Found')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, Try Again')
        }
        cardsChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent ='Congratulations!!!! You Won'
        }
    }

    //fucntion flipcard
    function flipcard(){

        var cardId =this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)

        this.setAttribute('src',cardArray[cardId].img)

         if(cardsChosen.length ==2) {
             setTimeout(checkForMatch, 500)
         }
    }

    createBoard()
})