import csv

with open('topDomains.js', 'w') as f2:
    with open("./top-1m.csv", mode='r') as infile:
        reader = list(csv.reader(infile, delimiter=','))  # load the whole file as a list
        for row in reader:  # content is all the other lines
            line = row[-1]
            f2.write(f"'{row[1]}', \n")
