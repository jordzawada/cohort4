import taxes

def test_answer():
    assert taxes.taxesCalc(1.00)== 0.15
    assert taxes.taxesCalc(2.00)== 0.3
    assert taxes.taxesCalc(50000)== 7580.78
    assert taxes.taxesCalc(100000)== 17991.78
    assert taxes.taxesCalc(150000)== 30991.78
    assert taxes.taxesCalc(250000)== 61402.87