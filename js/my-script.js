function checkPalindrome(str){        
    var len = askName.length;               //controllo la lunnghezza del nome fornito dall'utente
                  
    for(var x = 0; x < len / 2; x++){                // prima condizione x =  x(0) < lunghezza askName / 2;   seconda condizione x =  x(1) < lunghezza askName / 2;  terza condizione x =  x(2) < lunghezza askName / 2 ; etc. fino all'ultima lettera di askName.
        if(askName[x] !== askName[ len - 1 - x ]){   // controllo se askName[x] sia strettamente diverso da askName[lunghezza askName - 1 -x]  (-1 perchè la lunghezza dell'askName parte da 1 e non da 0 )
            msg = 'Non è un palindromo'
           return msg                               //Assegno con return alla funzione checkPalindrome la variabile msg qualora la condizione fosse vera
        }
        
        else{
            return msg
        }
    }
    }
    
    var askName = prompt('Inserisci una parola')
    var output = document.getElementById("test");
    var msg = 'è un palindromo';
    var value = checkPalindrome(askName);
    
    
    
    output.innerHTML += msg



    /////////////////////////////////


    var even_odd = prompt('Scrivi pari o dispari')
    var number_request = parseInt(prompt('Inserisci un numero da 1 a 5'))
    var result = number_request + randomizeNum
    var output = document.getElementById("second-test");
    var even = 'pari'
    var odd = 'dispari'



 
   
    function generateNumber(num1 ,num2){          
        var randomNum = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
        return randomNum
    }

    var randomizeNum = generateNumber(1 ,5)

    function typecheck (result) {
        if (result % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

 


    if (typecheck = true && even_odd === 'pari'){
        output.innerHTML += 'Complimenti hai vinto'
    }else if(typecheck !== true && even_odd === 'dispari') {
        output.innerHTML += 'Complimenti hai perso'
    }






 /*

    for(var x = 1; x <= 5; x++ ){
        if(number_request % 2 === 0){
            output.innerHTML =  'si funziona'
            
        }else{
            output.innerHTML =  'non va'
           
        }
    }

    */
