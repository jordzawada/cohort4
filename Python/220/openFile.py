jsFile = open("syntaxCopy.js","r")
# print(jsFile.read())

lines =0;
for x in jsFile:
    lines=lines+1;

print(f"There are {lines} lines in the file")
jsFile.close()

jsFile = open("syntaxCopy.js","r")
elses =0;
# print(jsFile.readline())
for x in jsFile:
    # print(x)
    if "else" in x:
     elses= elses+1;

print(f"elses {elses}")     

jsFile.close()

jsFile = open("syntaxCopy.js","r")
characters =0;
for x in jsFile:
    characters=characters +len(x)
    # if "*" in x:
     
print(f"characters {characters} (spaces, and breaks included)")