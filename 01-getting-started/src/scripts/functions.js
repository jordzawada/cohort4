
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

    },

    arraysAddTo :(x) =>{    
        let arr1=[];
        if (typeof(x) === "number"){
            arr1.push(x);
            return arr1[arr1.length-1];
        } else {
            return "Not a valid Number";
        }
    }, 

    arraysShow :(arr1) =>{ 
        return arr1.toString();
    },

    arraysTotal :(arr1) =>{ 
        let sum =0;
        for (let i=0;i<arr1.length;i++){
            sum=sum+arr1[i];
        }
        return sum;
    },

    arraysClear :(arr1) =>{ 
        return [];
    },

    provinceLookup :(ca) =>{ 
        let canadaObj= {
            ab: "Alberta",
            sk: "Saskatchewan",
            bc: "British Colombia",
            on:"Ontario",
            qc:"Quebec",
            mb:"Manitoba",
            ns:"Nova Scotia",
            nb:"New Brunswick",
            nf:"Newfoundland",
            pei:"Prince Edward Island",
            nwt:"Northwest Territories",
            yk:"Yukon Territory",
            nv: "Nunavut",
        };
        return canadaObj[ca];
    },
    
};



export default functions; 


