const functions = {
    
    getFirstName: (data) => {
        return "Nicoleta";
    },
    
    getAllFirstNames: (data) => {
        let nameArr= [];
        for (let i=0;i<data.length;i++){
            nameArr[i]= data[i].name;
        }
        console.log(nameArr);
        return nameArr;
    },

}

export default functions;