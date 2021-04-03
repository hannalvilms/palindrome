// program to check if the string is palindrome or not
//Declare variables
    let inputWord = document.querySelector('#input');
    let sequence = 0;

//Get input value
    function inputChange() {
        inputWord = (document.getElementById("input").value)
    }

//Clear input field after button click
    function clearField() {
        document.getElementById("input").value = "";
    }

//Prevent refreshing
    document.getElementById("check").addEventListener("click", function (event) {
        event.preventDefault();
    });

    function isPalindrome(word) {

        //Declare variables
        let wordInitial = word;
        //Reverse word
        let expected = word.split("").reverse().join("");
        //Handle capital letters and space
        word = word.replace(/\W/g, '').toLowerCase();
        //Handle input
        inputWord = word;
        //Get word length
        let len = word.length;
        let mid = Math.floor(len / 2);

        //Create html elements
        let seq = document.createElement("h6");
        let initial = document.createElement("h6");
        let expect = document.createElement("h6");

        //Sequence increment
        function increment() {
            sequence++;
            return sequence;
        }

        //Insert inner HTML
        function addPalindrome() {
            seq.innerHTML = sequence + ".";
            document.getElementById("sequence").appendChild(seq).classList.add("word");
            initial.innerHTML = wordInitial;
            document.getElementById("inputWord").appendChild(initial).classList.add("word");
            expect.innerHTML = expected;
            document.getElementById("expected").appendChild(expect).classList.add("expected");
        }

        //Check if palindrome
        for (let i = 0; i < mid; i++) {
            if (word[i] !== word[len - 1 - i]) {
                increment();
                addPalindrome();
                document.getElementById("expected").appendChild(expect).classList.add("false");
                return false;
            }
        }
        increment();
        addPalindrome();
        document.getElementById("expected").appendChild(expect).classList.add("true");
        return true;

    }

//Test
    console.log(isPalindrome("anna"));
    console.log(isPalindrome("Anna"));
    console.log(isPalindrome("anna "));
    console.log(isPalindrome("YellowSubmarine"));
