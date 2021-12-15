document.addEventListener('DOMContentLoaded', () => {

    //-------------------------DECLARATION DU TABLEAU-------------------------
    const cardArray = [
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')//Je vais selectionner la class grid
    const resultDisplay = document.querySelector('#result')//Je vais selectionner l'id result
    let cardsChosen = []//Declaration de variable
    let cardsChosenId = []
    let cardsWon = []



    //-------------------------CREATION DU PLATEAU------------------------
    function createBoard(){
        //Pour aller de 0->(i) a la longueur du tableau -> cardArray.length
        for(let i=0; i<cardArray.length; i++){
            const card = document.createElement('img')//Creer un element sur l'image abec le css
            card.setAttribute('src', 'img/blank.png')//Attribut une valeur a l'image
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)//Permet de faire tourner la carte 
            grid.appendChild(card)
        }
    }



    //------------------------CREATION DE LA PARTIE--------------------------
    function checkForMath(){
        const cards = document.querySelectorAll('img')//Selectionne toute les images
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId){//Si ils sont différent
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Vous avez cliquer sur la même image')

        }
        else if(cardsChosen[0] === cardsChosen[1]){//Si ils sont pareil
            alert('Vous avez trouvé une correspondance')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)//Remet a zero l'evennement
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)

        }
        else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Désoler, recommancer')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Filicitations! vous les avez tous trouvé "
        }


        
    }


    //---------------------------FAIRE TOURNER LA CARTE----------------------

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length ===2){
            setTimeout(checkForMath, 500)
        }
    }

    createBoard()
})

