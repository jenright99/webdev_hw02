var displayedNum = 0;
    var previousNum = 0;
    //0 = No Op, 1 = Op In Progress, 2 = Op Completed
    var opState = 0;
    //0 = None, 1 = add, 2 = sub, 3 = multiply, 4 = divide
    var operation = 0;


	document.getElementById("screen").innerHTML = displayedNum;
	function one_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 1;
		refresh_screen();
    }
    function two_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 2;
		refresh_screen();
    }
    function three_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 3;
		refresh_screen();
    }
    function four_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 4;
		refresh_screen();
    }
    function five_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 5;
		refresh_screen();
    }
    function six_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 6;
		refresh_screen();
    }
    function seven_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 7;
		refresh_screen();
    }
    function eight_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 8;
		refresh_screen();
    }
    function nine_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 9;
		refresh_screen();
    }
    function zero_button() {
        if (opState == 2) {
            clear_button();
        }
		displayedNum = (displayedNum*10) + 0;
		refresh_screen();
    }
    function return_button() {
        if (opState == 0 || opState == 2) {
            previousNum = displayedNum;
            displayedNum = 0;
            operation = 1;
            opState = 1;
        }
        else {
            execute();
        }
		refresh_screen()
    }
    function subtract_button() {
        if (opState == 0 || opState == 2) {
            previousNum = displayedNum;
            displayedNum = 0;
            operation = 2;
            opState = 1;
        }
		refresh_screen()
    }
    function multiply_button() {
        if (opState == 0 || opState == 2) {
            previousNum = displayedNum;
            displayedNum = 0;
            operation = 3;
            opState = 1;
        }
		refresh_screen()
    }
    function divide_button() {
        if (opState == 0 || opState == 2) {
            previousNum = displayedNum;
            displayedNum = 0;
            operation = 4;
            opState = 1;
        }
		refresh_screen();
    }
    function clear_button() {
        displayedNum = 0;
        previousNum = 0;
        opState = 0;
        operation = 0;
		refresh_screen()
    }
    function execute() {
        if (operation == 1) {
            displayedNum = displayedNum + previousNum;
            previousNum = 0;
            opState = 2;
            operation = 0;
        } 
        else if (operation == 2) {
            displayedNum = previousNum - displayedNum;
            previousNum = 0;
            opState = 2;
            operation = 0;
        }
        else if (operation == 3) {
            displayedNum = displayedNum * previousNum;
            previousNum = 0;
            opState = 2;
            operation = 0;
        }
        else if (operation == 4 ) {
            if (previousNum == 0 || displayedNum == 0) {
                displayedNum = 0;
            } else {
                displayedNum = previousNum / displayedNum;
            }
            previousNum = 0;
            opState = 2;
            operation = 0;
        }
    }
	function refresh_screen() {
        document.getElementById("screen").innerHTML = displayedNum;
        if (operation == 1) {
            document.getElementById("return").style.color="#FF0000";
        } else {
            document.getElementById("return").style.color="#808080";
        }
        if (operation == 2) {
            document.getElementById("sub").style.color="#FF0000";
        } else {
            document.getElementById("sub").style.color="#808080";
        }
        if (operation == 3) {
            document.getElementById("multiply").style.color="#FF0000";
        } else {
            document.getElementById("multiply").style.color="#808080";
        }
        if (operation == 4) {
            document.getElementById("divide").style.color="#FF0000";
        } else {
            document.getElementById("divide").style.color="#808080";
        }
	}
