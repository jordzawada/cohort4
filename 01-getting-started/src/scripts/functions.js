
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
        
    },

    add: (num1, num2) => {
        return num1 + num2;      
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1*num2;
    },
    
    divide: (num1, num2) => {
        return num1/num2;
    },

    isEven: (x) => {
        if (x%2 === 0) {
            return true;  
        } else  {
            return false;
        }
    },

    roundToTwo :(num) =>{    
        return +(Math.round(num + "e+2")  + "e-2");
    },

    taxes : (income) => {
        if (income<=48535) {
            return income*0.15;
        } else if (income <= 97069) {
            return functions.roundToTwo((income-48534)*0.205 + 48535*0.15);
        } else if (income <= 150473) {
            return functions.roundToTwo(
                (income-97069)*0.26
                +(48534)*0.205
                 + 48535*0.15);
        } else if ( income <= 214368){
            return functions.roundToTwo(
                (income-150473)*0.29
                +53404*0.26
                +(48534)*0.205
                 + 48535*0.15
            );
        } else {
            return functions.roundToTwo(
                (income-214368)*0.33
                +63895*0.29
                +53404*0.26
                +48534*0.205 
                +48535*0.15
            );
        }

        
    }
    
};

export default functions;
