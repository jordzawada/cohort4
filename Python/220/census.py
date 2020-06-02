import csv
census = open("Census2018.csv","r")

census_f=csv.reader(census)

print(next(census_f))