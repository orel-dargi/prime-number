const input = document.getElementById('input');
const btn = document.getElementById('button');

const primeNum = () => {

    let num = input.value
    num = parseFloat(num);

    let prime = true;

    if(Number.isInteger(num) === false) alert('Please enter an integer only');

    else if(Number.isInteger(num) === true) {
    
        if (isNaN(num) === true || num < 0) {
            
            alert('Please enter a valid positive number');
            
        }
        
        else if (isNaN(num) === false) {

            if (num === 0 || num === 1){

                alert('this is not a prime number');
            }         
                
            else if (num === 2) alert(`${num} is a prime number`);
            
            else if (num % 2 === 0) alert(`${num} is not a prime number`);
            
            else if ( num > 2 && num % 2 !== 0) {

                for (let i = 3; i <= Math.sqrt(num); i += 2) {

                    if (num % i === 0) {
                        prime = false;
                        break;
                    }

                    else if (num % i !== 0) prime = true;

                }
                
                if (prime === false) alert(`${num} is not a prime number`);

                else if (prime === true) alert(`${num} is a prime number!`);
            }

        }
    }   
}

btn.addEventListener('click', primeNum)
