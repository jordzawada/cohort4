        
    const functions = {    
        // define attributes / variables
        // number
        fun1: () => { 
        let x=5;
        return x;
        },
        // string
        fun2: () => { 
            const greetingPrimary = "Hello you";
            return greetingPrimary;
        },
        // boolean
        fun3: () => { 
            let y= false;
            return y;
        },
        // array
        fun4: () => { 
            const arr1 = [1,2,[5,8],"hello", false]
            return length.arr1;
        },

        // // dictionary / objects
        fun5: () => { 
            const obj1 = {
                name: "bob",
                arr: [0,1],
                kids: 4,
            }
            return typeof(obj1);
        },

        fun6: () => { 
            let c;
            return c;
        },        

        fun7: (num) => {
            // sample if / else
            if (num%2 != 0){
            return "odd";
            } else {
            return "even"
            }
        },
        fun8: (a,b) => {
            //  parameters
            return a+b;
        },

        
   // arrays
        fun9: (x) => {
            // add to the front
            let arr1 =[0];
            arr1.unshift(x);
            return arr1[0];
            },
        fun10: (x) => {
            // add to the end
            let arr1=[];
            arr1.push(x)
            return arr1[arr1.length-1];
            },
        fun11: (x,y) => {
            // update values
            let arr1=[5,6,7,8];
            arr1[x]=y;
            return arr1[x];
            },
    // loops
        fun12: (x) => {
            // for
            let sum =x;
            for (let i=0;i<x;i++) {
                sum = sum + i; 
            }
            return sum;
        },
        fun13: (x) => {
            // for/in
            let arr1 = [ 1, 2,3];
            for (let y in arr1){
                arr1[y] = x;
            }
            return arr1[0];
        },
        fun14: (x) => {
            let h=0;
            let sum=0;
            while (h<=x){
                sum = sum+h;
                h++;
            }

            return sum;
        },
        fun15: (x) => {
             //     do while
            let h="";
            let i=0;
            do {
                i++;
                h=h + i;
                
            } while (i<x);

            return h;
        },

        helper: (x) => {
            return x;
        },
        fun16: (x) => {
        //     forEach
            let arr1=[x];
            arr1.forEach(functions.helper);
            return arr1[0] ; 
           
       },

       fun17: () => {
        const obj2 = {
            name: 'jerry',
        };
        return obj2.name;
           
       },


    }

    export default functions;