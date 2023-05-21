   //1.Multify two number
    function multify(a, b) {
      return a * b;
    }
    console.log(2 * 9);

    //2.return name
    function getPlainName(id){
    var fname;
    switch(id){
        case 1:
            fname = 'Mercury'
            break;
        case 2:
            fname = 'jhon'
            break;
        case 3:
            fname = 'Earth'
            break;
        case 4:
            fname = 'Saturn'
            break5;
        case 5:
            fname = 'Smith'
            break;
        case 5:
            fname = 'jhon'
    }
     return fname;

    }

    //3.write a function to reverse a string
    const string ="hellow world";
    function resizeObserverSize(str){
        const arr = str.spilt();
        const reversed = arr.reverse();
       const finalAnswer = reversed.join("");
     console.lod(reversed);
     //return str.split("").reverse().join("");
    }



    //4. create a function that takes an integer as an arguments and 
    //return "Even" for even number 0r "odd" for odd number. 
    function evenOrOdd(number){
        if(number % 2 === 0){
            return 'Even';
        }else{
            return 'odd';
        }
    }
    console.log(evenOrOdd(31));

    
    //5.Return the number of vowels in the given string.
    //the input string will only consits of lower case letters and or spaces
    function getCount(str){
        let vowelsCount = 0;
        const arr = str.split('');
         
        for(let i = 0; i < arr.legth; i++){
            switch(arr[i]){
                case 'a':
                    vowelsCount++;
                    break;
                case 'e':
                    vowelsCount++;
                    break;
                case 'i':
                    vowelsCount++;
                    break;
                case 'o':
                    vowelsCount++;
                    break;
                case 'u':
                    vowelsCount++;   
            }
        }
        return vowelsCount;
    }
    let word = "Hello world";
    console.log(getCount(word));


    //6.greet name
    function greet(name){
        if (name === "jhonny"){
          return "Hello,"+name+"!";
        }
        
    }
    console.log(greet("jhonny"));


    //7. creatre a function that checks if  a number n is divisible by two number.
    //x & y .All input are positive non zero number.
    function isDivisible(n,x,y){

        const result1 = n/x;
        const result2 = n/ y;
        if(result1 % 1 === 0 && result2 % 1 ===0){
            return true;
        }else{
            return false;
        }
    }
    console.log(isDivisible(30.5,2,3));


    //8. You are given a number and have to make it negative .
    //but maybe the number is already -ve.
    function makeNegative(num){
        //return num < 0 ? num: -num;
        //returm -Math.abs(num);
        if(num < 0){
            return num;
        }else{
            return num * -1;
        }
    }
    console.log(makeNegative(9));

    
     //9. Given an array of integer your solution should find the smallest integer.
     function findSmallestInt(arrayOfNumbers){

        let smallestNumber = 0;
            for(let i=0; i< arrayOfNumbers.length;i++){
                const arrNumber = arrayOfNumbers[i];
                 
                if(i === 0){
                    smallestNumber = arrNumber;
                }


                if(arrNumber < smallestNumber){
                    smallestNumber = arrNumber;
                }
            }
            return smallestNumber;
     }
     let arstr = [2,3,56,78];
     console.log(findSmallestInt(arstr));



     //10. Write a program that  finds the summation of every number from 1 to num.
     // the number will always be a positive integer greater than 0.
     
     function sumNum(num){
        let sum = 0;
        for(i = 1;i<= num;i++){
            return sum += i;
        }
        return sum;
     }
     
     //11. Caluculate average academic marks.
     function getAverage(scoreArray){
        const count = scoreArray.length;
        let sum = 0;
        for(let i = 0; i < count; i++){
           sum = sum + scoreArray[i];

        }
        const avg = sum / count;
        const roundedDown = math.floor(avg);

        return Math.floor(sum / count);
     }

     //12. have to return which player won. in case of a draw return draw.
     const rps = (player1,player2) =>{
       if(player1 === 'rock'){

        if(player2 === 'rock'){
           return 'Draw!';
        }
        if(player2 === 'paper'){
            return 'Player 2 won';
        }
           if(player2 === 'scissors'){
            return 'player 1 won!';
        }
       }

       if(player1 ==='paper'){
        if(player2 === 'rock'){
           return 'player 1 won';
        }
        if(player2 === 'paper'){
            return 'Draw';
        }
           if(player2 === 'scissors'){
            return 'player 2 won!';
        }
       }

       if(player1=== 'scissors'){
       if(player2 === 'rock'){
           return 'player 2 won';
        }
        if(player2 === 'paper'){
            return 'Player 1 won';
        }
           if(player2 === 'scissors'){
            return 'Draw!';
        }
       }
     };


     //13. create a  function that returns the first and last charactor of a string.
     function removeChar(str){
        let lengthOfString = str.length;
        return str.substr(1, lengthOfString-2);
     }
    
     //14. you get array of numbers ,return the sum of the positive ones.
     function positiveSum(num){
        let sum=0;
        for( i= 0; i < arry.length; i++){
            if(arr[i]>0){
                sum = sum + arr[i];
            }
        }
        return sum;
     }

     //15. create a function that does four basic mathematical operation.
     function basicOpr(operation, value1,value2){
        switch(operation){
            case '+':
                return value1+value2;
                break;
                
                case '-':
                     return value1-value2;
                break;
                case '*':
                     return value1*value2;
                break;
                case '/':
                     return value1/value2;
                break;    
        }

        //const opSting = value1 + operation +value2;
        //const result = eval(opSting)
        // return result;
     }


     //16. write a function called repeat_str, which repeat the given string src exactly count times.
     function repeatStr(numberOfRepeats,str){
        let starterString = '';
        for (let i = 0; i< numberOfRepeats;i++){
            starterString =starterString +str;
        }
        return starterString;
     }
     //function repeatString(s,n)
     //return s.repeat(n);

     //17. count string into an array.
     function stringToArray(string){
        return string.split(" ");
     }

     //18. Remove the space from an array.
     function noSpace(str){
        const arr = str.split(" ");
        let newArray = [];
        for(let i = 0; i<arr.length; i++){
            const trimmedString = arr[i].trim();
            newArray.push(trimmedString);

        }
        const finalString = newArray.join("");
        return finalString;
     }


     //19. Array of integer,return a new array with each value doubled.
     function map(arry){
        const result = arry.map((arrItem) => {
            return arrItem*2;
        })
        return result;
     }


     //20. A hero is on his way to the castle to complete his mission .However ,
     //he has been told that the castle is surrounded with a coupl eof powerful dragons each gragon takes 2 bullets to be defeated.
     //our hero has no idea how many bullets he should carry..Assuming he is gona grab specific given number of bullets and move forward 
     //to fight another specific given number of dragons,will he survive?
     function hero(bullets, dragons){

        return  bullets / dragons >= 2;
        
     }

     //21. Sum of two array actually the sum of all their element.
    function arrayPlusArray(arr1,arr2){
        let sum=0;

        for(let i =0;i < arr1.length; i++){
            const arr1Value = arr1[i];
            const arr2Value = arr2[i];

            const addedValue = arr1Value+arr2Value;
            sum = sum + addedValue;
        
        }
         return sum;
    } 

    //22. the first century spans from the year 1 up to and including the year 100.
    //The second from the year 101 uo to and including the year 200 etc.
    function century(year){
        // if(year < 100 ){
        //     return 1;
        // }
        //  const firstTwoDigits = year.toString().substr(0,2);
        // if(year % 100 === 0){
        //     return number(firstTwoDigits);
        // }
        // else{
        //   return Number(firstTwoDigits)+1;
        // }
        return Math.ceil(year/100)
    }



    //23. got cat and dog same time.as that was humanYears year age.
    //Return their respective ages now as humanYear >=1.
    var humanyearsCatYearsDogYears = function(humanYears){
       let catsAge;
       let dogsAge;
       if(humanYears === 1){
        return [humanYears,15,15];
       }
        if(humanYears === 2){
            return [humanYears,24,24]
        }
        const excessYears = humanYears -2;
        const extraCatYears = excessYears * 4;
        const extraDogYears = excessYears * 5;

        return [humanYears, extraCatYears,extraDogYears];
    }


    //24.  Our football team finished the championship.the result of each match look like "x:y"
    //Result of all matches are recorded in the collection

    //Write a function that takes such collection & counts the points of our
    //if x>y-3 points if x<y-0 points if x=y-1 points
    function points(gameArray){
        let totalPoints = 0;

        for(let i=0; i< gameArray.length;i++){
            const value = gameArray[i];
            const parts = value.split(":");

            const  x = parts[0];
            const y = parts[1];
            if(x > y){
               totalPoints = totalPoints + 3;
            }else{
                if(x === y){
                    totalPoints += 1;
                }
            }
            
        }
        return totalPoints;
    }