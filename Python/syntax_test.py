import syntax

def test_answer():
    assert 3 == 3
    syntax.hello()
    # define attributes / variables
    assert syntax.var == 5;
    assert type(syntax.var) == int
    assert syntax.str == "my string";
    # print(type(syntax.str))
    assert type(syntax.str) == str
    assert syntax.bool1==True;
    assert type(syntax.bool1) == bool
    assert syntax.arr1[0]==1
    assert syntax.arr1[1]==2
    assert syntax.arr1[2]==3
    assert type(syntax.arr1) == list
    # dictionary / objects
    assert type(syntax.dict1) == dict
    assert syntax.dict1["name1"] == "jordan"
    assert syntax.dict1["name2"] == "bob"
    assert syntax.undef == None
    # sample if / else, function, param,returns
    assert syntax.ifElseFunc(11) == "large"
    assert syntax.ifElseFunc(8) == "medium"
    assert syntax.ifElseFunc(1) == "small"

    # arrays
    assert syntax.list1[-1] == "west"
    assert syntax.list1[:2] == ["north","east"]
    assert syntax.list1[-2:] == ["south","west"]
    syntax.insertFirstToList1()
    assert syntax.list1[0] == "NE"
    syntax.appendToList1()
    assert syntax.list1[-1] == "NW"
    syntax.updateList1(0,"stuff")
    assert syntax.list1[0] == "stuff"
    # syntax.thistuple[0]="grape"
    assert syntax.thistuple[0]=="apple"

    # loops
    assert syntax.whileLoop(6) == 6 
    assert syntax.forArray[1] == 2 
    syntax.forLoop()
    # assert syntax.forArray[1] == 4 

    
