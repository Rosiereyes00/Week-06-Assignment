
        // CLASSIC CARD GAME WAR!//

        // First class will be the player with the consturctor of their name, score and the hand //
        //they will play this will allow us to input the name of the players//
        class Player{
            constructor(name){
                this.name = name;
                this.score = 0;
                this.hand = [];
            }
        }
        let player1 = new Player('Zorro');
        let player2 = new Player('Sanji');
         console.log(player1);
         console.log(player2);
         // the secound class will be our cards facevalue,suit,and the rank of the cards place//
         class Card {
            constructor(faceValue,suit,rank){
                this.faceValue = faceValue;
                this.suit = suit;

                this.rank = rank;
            }
         }
         // the last class will contain the description of the cards facevalue,suit and their//
         // numerical rank//
          class Deck{
            constructor(){
                this.deck = [];
                this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10,'Queen','Jack','King','Ace'];
                this.suits = ['hearts','diamonds','clubs','spades'];
                this.ranks =[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
            }
            //we will create a deck that  will allow us to push our info with out for loops of facevalues// 
            //lenght and our suits lenght//
            createDeck(){
                for ( let i = 0; i < this.faceValues.length; i++){
                    for(let x = 0; x < this.suits.length; x++){
                        this.deck.push( new Card(this.faceValues[i], this.suits[x], this.ranks[i]));
                    }
                }
                
            }
            // this part will allow us to shuffle each one of our cards facevalue by random //
            // so we use our math.random on our index of cards and will return a random deck of cards//
            shuffle() {
                let currentIndex = this.deck.length
                let temporaryValue
                let randomIndex
                while ( 0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = this.deck[currentIndex];
                    this.deck[currentIndex]  = this.deck[randomIndex];
                    this.deck[randomIndex] = temporaryValue;
                }
                return this.deck;
            }
            // this will split our deck to 26 cards per players hand by using .splice//
            deal(){
                player1.hand = this.deck.slice(0,26);
                player2.hand = this.deck.slice(26);
                console.log(player1);
                console.log(player2);
            }
          }
          // and then the gameDeck will sort out the outcomes using our for loops
          let gameDeck = new Deck();
          gameDeck.createDeck();
          gameDeck.shuffle();
          gameDeck.deal();
          player1.score = 0;
          player2.score = 0;
          for (let i = 0; i < 26; i++) {
            console.log("\n P1 card:",player1.hand[i].faceValue,"P2 card:",player2.hand[i].faceValue)
            if(player1.hand[i].rank > player2.hand[i].rank){
                player1.score += 1
                console.log(`${player1.name} wins round! Score: ${player1.score}`)
            } else if (player1.hand[i].rank < player2.hand[i].rank){
                player2.score += 1
                console.log(`${player2.name} wins round! Score: ${player2.score}`)
            }else {
                console.log("Its a tie")
            }
            }
            // this will show us the fianal score after the game and show us what player won// 
            console.log(`
            Final scores: ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`)
            if (player1.score > player2.score){
                console.log(`
                ${player1.name} wins!`)
            }else if (player1.score < player2.score){
                console.log(`
                ${player2.name} wins`)
            }