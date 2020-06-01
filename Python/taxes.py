def taxesCalc(income): 
    if income<=48535:
        return income*0.15
    elif income <= 97069 :
        return (income-48534)*0.205 + 48535*0.15
    elif income <= 150473 :
        return  (income-97069)*0.26+(48534)*0.205+ 48535*0.15
    elif  income <= 214368 :
        return (income-150473)*0.29+53404*0.26+(48534)*0.205+ 48535*0.15
    else :
        return (income-214368)*0.33+63895*0.29 +53404*0.26+48534*0.205 +48535*0.15
