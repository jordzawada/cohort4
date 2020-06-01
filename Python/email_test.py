import email1

def test_answer():
    assert email1.email("Larry","Schumlich") == "larry.schumlich@mail.com"
    assert email1.email("Bob","Bobberton") == "bob.bobberton@mail.com"
  
    
