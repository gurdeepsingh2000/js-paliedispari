function checkPalindrome(str){        
    var len = askName.length;               //controllo la lunnghezza del nome fornito dall'utente
                  
    for(var x = 0; x < len / 2; x++){                // prima condizione x =  x(0) < 5 / 2;   seconda condizione x =  x(1) < 5 / 2;  terza condizione x =  x(2) < 5 / 2;
        if(askName[x] !== askName[ len - 1 - x ]){
            msg = 'Non è un palindromo'
            return msg
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
    
    
    output.innerHTML = msg