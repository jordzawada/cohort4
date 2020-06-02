def hello():
    print ("hello world from email")


def email(fname,lastname):
    fname= fname.lower()
    lastname= lastname.lower()
    return "{}.{}@mail.com".format(fname,lastname)