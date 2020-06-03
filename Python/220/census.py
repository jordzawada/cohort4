import csv
census = open("Census2018.csv","r")

census_f=csv.reader(census)

totals = {
    "total_Class":0,
    "total_Sector":0,
}
lines =0;

def totalFunction():
    Classes={}
    Sectors ={}
    global lines
    for x in census_f:
        lines = lines +1;
        # print( x[0])
        if (x[0] == 'CLASS'):
            # print(x[0])
            continue
        elif (x[0] not in Classes.keys() or x[4] not in Sectors.keys() ):
            if (x[0] not in Classes.keys()):
                Classes[x[0]] = int(x[9]);
            if (x[4] not in Sectors.keys()  ):
                Sectors[x[4]] = int(x[9]);
        else:
            Classes[x[0]] = Classes[x[0]] + int(x[9]);
            Sectors[x[4]] = Sectors[x[4]] + int(x[9]);

    totals["total_Class"] = Classes   
    totals["total_Sector"] = Sectors
totalFunction()

# print(f'there are {lines} lines')
# print(totals)

f= open("report.txt","w")
f.write (f'there are {lines} lines\n')
f.write(f'Total Class\n{totals["total_Class"]}')
f.write(f'Total Sector\n{totals["total_Sector"]}')
f.close()

