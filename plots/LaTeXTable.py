import csv
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.patches as mpatches

def readCSV(filePath):
    f = open(filePath)
    csvReader = csv.reader(f)
    rows = []
    counter = 0
    for row in csvReader:
        #if(row[-1] == '1'):
            rows.append(row)
            counter = counter + 1
    return rows

def errors_counter(dataset):
        #vm2, realms, safe-eval, ses, near-membrane, adsafe, caja
        secErr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
        runErr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
        timeOut = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
        instErr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
        NoErr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
        total = 0
        for i in dataset:
                # 'ID', 'Sandbox', 'Time', 'NumberOfVairents', 'Oracles', 'RunError', "InstrumentError", "SecurityError"
            total = total + 1
            if(i[5] == "1"): #and int(i[2]) > 0):
                if(i[1] == "vm2"):
                    if("ECMA" in i[0]):
                        runErr[0][0] = runErr[0][0] + 1
                    else:
                        runErr[0][1] = runErr[0][1] + 1
                elif(i[1] == "realms-shim"):
                    if ("ECMA" in i[0]):
                        runErr[1][0] = runErr[1][0] + 1
                    else:
                        runErr[1][1] = runErr[1][1] + 1
                elif(i[1] == "safe-eval"):
                    if ("ECMA" in i[0]):
                        runErr[2][0] = runErr[2][0] + 1
                    else:
                        runErr[2][1] = runErr[2][1] + 1
                elif(i[1] == "ses"):
                    if ("ECMA" in i[0]):
                        runErr[3][0] = runErr[3][0] + 1
                    else:
                        runErr[3][1] = runErr[3][1] + 1
                elif(i[1] == "near-membrane"):
                    if ("ECMA" in i[0]):
                        runErr[4][0] = runErr[4][0] + 1
                    else:
                        runErr[4][1] = runErr[4][1] + 1
                elif(i[1] == "adsafe"):
                    if ("ECMA" in i[0]):
                        runErr[5][0] = runErr[5][0] + 1
                    else:
                        runErr[5][1] = runErr[5][1] + 1
                elif(i[1] == "caja"):
                    if ("ECMA" in i[0]):
                        runErr[6][0] = runErr[6][0] + 1
                    else:
                        runErr[6][1] = runErr[6][1] + 1        
            if (i[6] == "1"):
                if (i[1] == "vm2"):
                    if ("ECMA" in i[0]):
                        instErr[0][0] = instErr[0][0] + 1
                    else:
                        instErr[0][1] = instErr[0][1] + 1
                elif (i[1] == "realms-shim"):
                    if ("ECMA" in i[0]):
                        instErr[1][0] = instErr[1][0] + 1
                    else:
                        instErr[1][1] = instErr[1][1] + 1
                elif (i[1] == "safe-eval"):
                    if ("ECMA" in i[0]):
                        instErr[2][0] = instErr[2][0] + 1
                    else:
                        instErr[2][1] = instErr[2][1] + 1
                elif (i[1] == "ses"):
                    if ("ECMA" in i[0]):
                        instErr[3][0] = instErr[3][0] + 1
                    else:
                        instErr[3][1] = instErr[3][1] + 1
                elif (i[1] == "near-membrane"):
                    if ("ECMA" in i[0]):
                        instErr[4][0] = instErr[4][0] + 1
                    else:
                        instErr[4][1] = instErr[4][1] + 1
                elif(i[1] == "adsafe"):
                    if ("ECMA" in i[0]):
                        instErr[5][0] = instErr[5][0] + 1
                    else:
                        instErr[5][1] = instErr[5][1] + 1 
                elif(i[1] == "caja"):
                    if ("ECMA" in i[0]):
                        instErr[6][0] = instErr[6][0] + 1
                    else:
                        instErr[6][1] = instErr[6][1] + 1 
            if (i[7] == "1"):
                if (i[1] == "vm2"):
                    if ("ECMA" in i[0]):
                        secErr[0][0] = secErr[0][0] + 1
                    else:
                        secErr[0][1] = secErr[0][1] + 1
                elif (i[1] == "realms-shim"):
                    if ("ECMA" in i[0]):
                        secErr[1][0] = secErr[1][0] + 1
                    else:
                        secErr[1][1] = secErr[1][1] + 1
                elif (i[1] == "safe-eval"):
                    if ("ECMA" in i[0]):
                        secErr[2][0] = secErr[2][0] + 1
                    else:
                        secErr[2][1] = secErr[2][1] + 1
                elif (i[1] == "ses"):
                    if ("ECMA" in i[0]):
                        secErr[3][0] = secErr[3][0] + 1
                    else:
                        secErr[3][1] = secErr[3][1] + 1
                elif (i[1] == "near-membrane"):
                    if ("ECMA" in i[0]):
                        secErr[4][0] = secErr[4][0] + 1
                    else:
                        secErr[4][1] = secErr[4][1] + 1
                elif(i[1] == "adsafe"):
                    if ("ECMA" in i[0]):
                        secErr[5][0] = secErr[5][0] + 1
                    else:
                        secErr[5][1] = secErr[5][1] + 1 
                elif(i[1] == "caja"):
                    if ("ECMA" in i[0]):
                        secErr[6][0] = secErr[6][0] + 1
                    else:
                        secErr[6][1] = secErr[6][1] + 1 
            if(str(i[7]) == "0" and str(i[6]) == "0" and str(i[5]) == "0"): #and i[4] > 0):
                if (i[1] == "vm2"):
                    if ("ECMA" in i[0]):
                        NoErr[0][0] = NoErr[0][0] + 1
                    else:
                        NoErr[0][1] = NoErr[0][1] + 1
                elif (i[1] == "realms-shim"):
                    if ("ECMA" in i[0]):
                        NoErr[1][0] = NoErr[1][0] + 1
                    else:
                        NoErr[1][1] = NoErr[1][1] + 1
                elif (i[1] == "safe-eval"):
                    if ("ECMA" in i[0]):
                        NoErr[2][0] = NoErr[2][0] + 1
                    else:
                        NoErr[2][1] = NoErr[2][1] + 1
                elif (i[1] == "ses"):
                    if ("ECMA" in i[0]):
                        NoErr[3][0] = NoErr[3][0] + 1
                    else:
                        NoErr[3][1] = NoErr[3][1] + 1
                elif (i[1] == "near-membrane"):
                    if ("ECMA" in i[0]):
                        NoErr[4][0] = NoErr[4][0] + 1
                    else:
                        NoErr[4][1] = NoErr[4][1] + 1
                elif(i[1] == "adsafe"):
                    if ("ECMA" in i[0]):
                        NoErr[5][0] = NoErr[5][0] + 1
                    else:
                        NoErr[5][1] = NoErr[5][1] + 1 
                elif(i[1] == "caja"):
                    if ("ECMA" in i[0]):
                        NoErr[6][0] = NoErr[6][0] + 1
                    else:
                        NoErr[6][1] = NoErr[6][1] + 1 
#msgArray[0].fileId, msgArray[0].sandBox, 0, msgArray[0].variants, 0, 0, 1, 0
            if(i[2] == "0" and i[4] == "0" and i[5] == "0" and i[6] == "1" and i[7] == "0"):
                if (i[1] == "vm2"):
                    if ("ECMA" in i[0]):
                        timeOut[0][0] = timeOut[0][0] + 1
                    else:
                        timeOut[0][1] = timeOut[0][1] + 1
                elif (i[1] == "realms-shim"):
                    if ("ECMA" in i[0]):
                        timeOut[1][0] = timeOut[1][0] + 1
                    else:
                        timeOut[1][1] = timeOut[1][1] + 1
                elif (i[1] == "safe-eval"):
                    if ("ECMA" in i[0]):
                        timeOut[2][0] = timeOut[2][0] + 1
                    else:
                        timeOut[2][1] = timeOut[2][1] + 1
                elif (i[1] == "ses"):
                    if ("ECMA" in i[0]):
                        timeOut[3][0] = timeOut[3][0] + 1
                    else:
                        timeOut[3][1] = timeOut[3][1] + 1
                elif (i[1] == "near-membrane"):
                    if ("ECMA" in i[0]):
                        timeOut[4][0] = timeOut[4][0] + 1
                    else:
                        timeOut[4][1] = timeOut[4][1] + 1
                elif(i[1] == "adsafe"):
                    if ("ECMA" in i[0]):
                        timeOut[5][0] = timeOut[5][0] + 1
                    else:
                        timeOut[5][1] = timeOut[5][1] + 1 
                elif(i[1] == "caja"):
                    if ("ECMA" in i[0]):
                        timeOut[6][0] = timeOut[6][0] + 1
                    else:
                        timeOut[6][1] = timeOut[6][1] + 1 
        #print(secErr, instErr, runErr)
       # print(NoErr)
        return secErr, instErr, runErr, NoErr , timeOut


def printTabular(secErr, instErr, runErr, NoErr, secErrG, instErrG, runErrG):
    print("vm2: ECMA: "+str(secErr[0][0])+" & "+str(runErr[0][0])+" &    & "+str(instErr[0][0]) + " &   & " + str(secErrG[0][0])+" & "+str(runErrG[0][0])+" &    & "+str(instErrG[0][0]))
    print("vm2: v8: " + str(secErr[0][1]) + " & " + str(runErr[0][1]) + " &    & " + str(instErr[0][1]) + " &   & " + str(secErrG[0][1]) + " & " + str(runErrG[0][1]) + " &    & " + str(instErrG[0][1]))

    print("realms-shim: ECMA: "+str(secErr[1][0])+" & "+str(runErr[1][0])+" &    & "+str(instErr[1][0]) + " &   & " +str(secErrG[1][0])+" & "+str(runErrG[1][0])+" &    & "+str(instErrG[1][0]))
    print("realms-shim: v8: " + str(secErr[1][1]) + " & " + str(runErr[1][1]) + " &    & " + str(instErr[1][1]) + " &   & " + str(secErrG[1][1]) + " & " + str(runErrG[1][1]) + " &    & " + str(instErrG[1][1]))

    print("safe-eval: ECMA: "+str(secErr[2][0])+" & "+str(runErr[2][0])+" &    & "+str(instErr[2][0]) + " &   & " +str(secErrG[2][0])+" & "+str(runErrG[2][0])+" &    & "+str(instErrG[2][0]))
    print("safe-eval: v8: " + str(secErr[2][1]) + " & " + str(runErr[2][1])+ " &    & " +str(instErr[2][1]) + " &   & " + str(secErrG[2][1]) + " & " + str(runErrG[2][1])+ " &    & " +str(instErrG[2][1]))

    print("ses: ECMA: "+str(secErr[3][0])+" & "+str(runErr[3][0])+" &    & "+str(instErr[3][0]) + " &   & " +str(secErrG[3][0])+" & "+str(runErrG[3][0])+" &    & "+str(instErrG[3][0]))
    print("ses: v8: " + str(secErr[3][1]) + " & " + str(runErr[3][1])+ " &    & " + str(instErr[3][1]) + " &   & " + str(secErrG[3][1]) + " & " + str(runErrG[3][1])+ " &    & " + str(instErrG[3][1]))

    print("near-membrane: ECMA: "+str(secErr[4][0])+" & "+str(runErr[4][0])+" &    & "+str(instErr[4][0]) + " &   & "  + str(secErrG[4][0])+" & "+str(runErrG[4][0])+" &    & "+str(instErrG[4][0]))
    print("near-membrane: v8: " + str(secErr[4][1]) + " & " + str(runErr[4][1]) + " &    & " + str(instErr[4][1]) + " &   & " + str(secErrG[4][1]) + " & " + str(runErrG[4][1]) + " &    & " + str(instErrG[4][1]))

    print("adsafe: ECMA: "+str(secErr[5][0])+" & "+str(runErr[5][0])+" &    & "+str(instErr[5][0]) + " &   & "  )
    print("adsafe: v8: " + str(secErr[5][1]) + " & " + str(runErr[5][1]) + " &    & " + str(instErr[5][1]) + " &   & ")

    print("caja: ECMA: "+str(secErr[6][0])+" & "+str(runErr[6][0])+" &    & "+str(instErr[6][0]) + " &   & " )
    print("caja: v8: " + str(secErr[6][1]) + " & " + str(runErr[6][1]) + " &    & " + str(instErr[6][1]) + " &   & ")


    print("NoErr: ", NoErr)


def printTabular(secErr, secErrG):
    print("vm2: ECMA: "+str(secErr[0][0])+" &  &" + str(secErrG[0][0]) + "&   &")
    print("vm2: v8: " + str(secErr[0][1]) + " &   & " + str(secErrG[0][1]) + " &    & ")

    print("realms-shim: ECMA: "+str(secErr[1][0])+ " &   & " +str(secErrG[1][0])+ "&    & ")
    print("realms-shim: v8: " + str(secErr[1][1]) + " &   & " + str(secErrG[1][1]) + " &    & ")

    print("safe-eval: ECMA: "+str(secErr[2][0])+ " &   & " +str(secErrG[2][0]) +" &    & ")
    print("safe-eval: v8: " + str(secErr[2][1]) + " &   & " + str(secErrG[2][1]) + " &    & ")

    print("ses: ECMA: "+str(secErr[3][0]) + " &   & " +str(secErrG[3][0])+ " &    & " )
    print("ses: v8: " + str(secErr[3][1]) + " &   & " + str(secErrG[3][1]) + " &    & ")

    print("near-membrane: ECMA: " + str(secErr[4][0]) + " &   & " + str(secErrG[4][0]) +" &    & ")
    print("near-membrane: v8: " + str(secErr[4][1]) + " &    & " + str(secErrG[4][1]) + " &    & ")



Node14 = readCSV("../Results/RESULTS_TEST_14.csv")
Node15 = readCSV("../Results/RESULTS_TEST_15.csv")
Node16 = readCSV("../Results/RESULTS_TEST_16.csv")

Node14_G = readCSV("../Results/RESULTS_TEST_14.csv")
Node15_G = readCSV("../Results/RESULTS_TEST_15.csv")
Node16_G = readCSV("../Results/RESULTS_TEST_16.csv")

#print("==================================================================")

#print("Node14:  ")
#secErr, instErr, runErr, noErr = errors_counter(Node14)
#secErrG, instErrG, runErrG, noErrG = errors_counter(Node14_G)
#printTabular(secErr, instErr, runErr, noErr, secErrG, instErrG, runErrG)

#print("==================================================================")

#print("Node15:  ")
#secErr, instErr, runErr, noErr = errors_counter(Node15)
#secErrG, instErrG, runErrG, noErrG = errors_counter(Node15_G)
#printTabular(secErr, instErr, runErr, noErr, secErrG, instErrG, runErrG)

#print("==================================================================")

#print("Node16:  ")
#secErr, instErr, runErr, noErr = errors_counter(Node16)
#secErrG, instErrG, runErrG, noErrG = errors_counter(Node16_G)
#printTabular(secErr, instErr, runErr, noErr, secErrG, instErrG, runErrG)

#secErr14, instErr14, runErr14, total14 = errors_counter(Node14)
#secErr15, instErr15, runErr15, total15 = errors_counter(Node15)
#secErr16, instErr16, runErr16, total16 = errors_counter(Node16)



#print(secErr14, secErr15, secErr16)
#print(instErr14, instErr15, instErr16)
#print(runErr14, runErr15, runErr16)
#print(total14, total15, total16)

def sumAllforSandbox(Node14, Node15, Node16, Node14G, Node15G, Node16G):
    # vm2, realms-shim, safe-eval, ses, near-membrane
    secErr14, instErr14, runErr14, noErr14, timeOut14 = errors_counter(Node14)
    secErr15, instErr15, runErr15, noErr15, timeOut15 = errors_counter(Node15)
    secErr16, instErr16, runErr16, noErr16, timeOut16 = errors_counter(Node16)

    secErr14G, instErr14G, runErr14G, noErr14G, timeOut14G = errors_counter(Node14G)
    secErr15G, instErr15G, runErr15G, noErr15G, timeOut15G = errors_counter(Node15G)
    secErr16G, instErr16G, runErr16G, noErr16G, timeOut16G = errors_counter(Node16G)
    print("1231312312312" , secErr16[5])
    secErr = [[ secErr14[0][0] + secErr15[0][0] + secErr16[0][0] + secErr14G[0][0] + secErr15G[0][0] + secErr16G[0][0]
              , secErr14[0][1] + secErr15[0][1] + secErr16[0][1] + secErr14G[0][1] + secErr15G[0][1] + secErr16G[0][1] ],
              [ secErr14[1][0] + secErr15[1][0] + secErr16[1][0] + secErr14G[1][0] + secErr15G[1][0] + secErr16G[1][0],
                secErr14[1][1] + secErr15[1][1] + secErr16[1][1] + secErr14G[1][1] + secErr15G[1][1] + secErr16G[1][1] ],
              [ secErr14[2][0] + secErr15[2][0] + secErr16[2][0] + secErr14G[2][0] + secErr15G[2][0] + secErr16G[2][0],
                secErr14[2][1] + secErr15[2][1] + secErr16[2][1] + secErr14G[2][1] + secErr15G[2][1] + secErr16G[2][1] ],
              [ secErr14[3][0] + secErr15[3][0] + secErr16[3][0] + secErr14G[3][0] + secErr15G[3][0] + secErr16G[3][0],
                secErr14[3][1] + secErr15[3][1] + secErr16[3][1] + secErr14G[3][1] + secErr15G[3][1] + secErr16G[3][1] ],
              [ secErr14[4][0] + secErr15[4][0] + secErr16[4][0] + secErr14G[4][0] + secErr15G[4][0] + secErr16G[4][0],
                secErr14[4][1] + secErr15[4][1] + secErr16[4][1] + secErr14G[4][1] + secErr15G[4][1] + secErr16G[4][1] ],
                [ secErr14[5][0] + secErr15[5][0] + secErr16[5][0],
                secErr14[5][1] + secErr15[5][1] + secErr16[5][1] ], 
                [ secErr14[5][0] + secErr15[5][0] + secErr16[5][0],
                secErr14[5][1] + secErr15[5][1] + secErr16[5][1] ]
            ]

    runErr = [[ runErr14[0][0] + runErr15[0][0] + runErr16[0][0] + runErr14G[0][0] + runErr15G[0][0] + runErr16G[0][0]
              , runErr14[0][1] + runErr15[0][1] + runErr16[0][1] + runErr14G[0][1] + runErr15G[0][1] + runErr16G[0][1] ],
              [ runErr14[1][0] + runErr15[1][0] + runErr16[1][0] + runErr14G[1][0] + runErr15G[1][0] + runErr16G[1][0],
                runErr14[1][1] + runErr15[1][1] + runErr16[1][1] + runErr14G[1][1] + runErr15G[1][1] + runErr16G[1][1] ],
              [ runErr14[2][0] + runErr15[2][0] + runErr16[2][0] + runErr14G[2][0] + runErr15G[2][0] + runErr16G[2][0],
                runErr14[2][1] + runErr15[2][1] + runErr16[2][1] + runErr14G[2][1] + runErr15G[2][1] + runErr16G[2][1] ],
              [ runErr14[3][0] + runErr15[3][0] + runErr16[3][0] + runErr14G[3][0] + runErr15G[3][0] + runErr16G[3][0],
                runErr14[3][1] + runErr15[3][1] + runErr16[3][1] + runErr14G[3][1] + runErr15G[3][1] + runErr16G[3][1] ],
              [ runErr14[4][0] + runErr15[4][0] + runErr16[4][0] + runErr14G[4][0] + runErr15G[4][0] + runErr16G[4][0],
                runErr14[4][1] + runErr15[4][1] + runErr16[4][1] + runErr14G[4][1] + runErr15G[4][1] + runErr16G[4][1] ],
              [ runErr14[5][0] + runErr15[5][0] + runErr16[5][0] ,
                runErr14[5][1] + runErr15[5][1] + runErr16[5][1] ], 
              [ runErr14[6][0] + runErr15[6][0] + runErr16[6][0] ,
                runErr14[6][1] + runErr15[6][1] + runErr16[6][1] ]    
            ]

    instErr = [[ instErr14[0][0] + instErr15[0][0] + instErr16[0][0] + instErr14G[0][0] + instErr15G[0][0] + instErr16G[0][0]
              , instErr14[0][1] + instErr15[0][1] + instErr16[0][1] + instErr14G[0][1] + instErr15G[0][1] + instErr16G[0][1] ],
              [ instErr14[1][0] + instErr15[1][0] + instErr16[1][0] + instErr14G[1][0] + instErr15G[1][0] + instErr16G[1][0],
                instErr14[1][1] + instErr15[1][1] + instErr16[1][1] + instErr14G[1][1] + instErr15G[1][1] + instErr16G[1][1] ],
              [ instErr14[2][0] + instErr15[2][0] + instErr16[2][0] + instErr14G[2][0] + instErr15G[2][0] + instErr16G[2][0],
                instErr14[2][1] + instErr15[2][1] + instErr16[2][1] + instErr14G[2][1] + instErr15G[2][1] + instErr16G[2][1] ],
              [ instErr14[3][0] + instErr15[3][0] + instErr16[3][0] + instErr14G[3][0] + instErr15G[3][0] + instErr16G[3][0],
                instErr14[3][1] + instErr15[3][1] + instErr16[3][1] + instErr14G[3][1] + instErr15G[3][1] + instErr16G[3][1] ],
              [ instErr14[4][0] + instErr15[4][0] + instErr16[4][0] + instErr14G[4][0] + instErr15G[4][0] + instErr16G[4][0],
                instErr14[4][1] + instErr15[4][1] + instErr16[4][1] + instErr14G[4][1] + instErr15G[4][1] + instErr16G[4][1] ]
             ]

    NoErr = [ [ noErr14[0][0] + noErr15[0][0] + noErr16[0][0] + noErr14G[0][0] + noErr15G[0][0] + noErr16G[0][0]
              , noErr14[0][1] + noErr15[0][1] + noErr16[0][1] + noErr14G[0][1] + noErr15G[0][1] + noErr16G[0][1] ],
              [ noErr14[1][0] + noErr15[1][0] + noErr16[1][0] + noErr14G[1][0] + noErr15G[1][0] + noErr16G[1][0],
                noErr14[1][1] + noErr15[1][1] + noErr16[1][1] + noErr14G[1][1] + noErr15G[1][1] + noErr16G[1][1] ],
              [ noErr14[2][0] + noErr15[2][0] + noErr16[2][0] + noErr14G[2][0] + noErr15G[2][0] + noErr16G[2][0],
                noErr14[2][1] + noErr15[2][1] + noErr16[2][1] + noErr14G[2][1] + noErr15G[2][1] + noErr16G[2][1] ],
              [ noErr14[3][0] + noErr15[3][0] + noErr16[3][0] + noErr14G[3][0] + noErr15G[3][0] + noErr16G[3][0],
                noErr14[3][1] + noErr15[3][1] + noErr16[3][1] + noErr14G[3][1] + noErr15G[3][1] + noErr16G[3][1] ],
              [ noErr14[4][0] + noErr15[4][0] + noErr16[4][0] + noErr14G[4][0] + noErr15G[4][0] + noErr16G[4][0],
                noErr14[4][1] + noErr15[4][1] + noErr16[4][1] + noErr14G[4][1] + noErr15G[4][1] + noErr16G[4][1] ], 
              [ noErr14[5][0] + noErr15[5][0] + noErr16[5][0], 
                noErr14[5][1] + noErr15[5][1] + noErr16[5][1]  ],
              [ noErr14[6][0] + noErr15[6][0] + noErr16[6][0],
                noErr14[6][1] + noErr15[6][1] + noErr16[6][1] ]  

            ]
    timeOut = [ [ timeOut14[0][0] + timeOut15[0][0] + timeOut16[0][0] + timeOut14G[0][0] + timeOut15G[0][0] + timeOut16G[0][0]
              , timeOut14[0][1] + timeOut15[0][1] + timeOut16[0][1] + timeOut14G[0][1] + timeOut15G[0][1] + timeOut16G[0][1] ],
              [ timeOut14[1][0] + timeOut15[1][0] + timeOut16[1][0] + timeOut14G[1][0] + timeOut15G[1][0] + timeOut16G[1][0],
                timeOut14[1][1] + timeOut15[1][1] + timeOut16[1][1] + timeOut14G[1][1] + timeOut15G[1][1] + timeOut16G[1][1] ],
              [ timeOut14[2][0] + timeOut15[2][0] + timeOut16[2][0] + timeOut14G[2][0] + timeOut15G[2][0] + timeOut16G[2][0],
                timeOut14[2][1] + timeOut15[2][1] + timeOut16[2][1] + timeOut14G[2][1] + timeOut15G[2][1] + timeOut16G[2][1] ],
              [ timeOut14[3][0] + timeOut15[3][0] + timeOut16[3][0] + timeOut14G[3][0] + timeOut15G[3][0] + timeOut16G[3][0],
                timeOut14[3][1] + timeOut15[3][1] + timeOut16[3][1] + timeOut14G[3][1] + timeOut15G[3][1] + timeOut16G[3][1] ],
              [ timeOut14[4][0] + timeOut15[4][0] + timeOut16[4][0] + timeOut14G[4][0] + timeOut15G[4][0] + timeOut16G[4][0],
                timeOut14[4][1] + timeOut15[4][1] + timeOut16[4][1] ], 
              [ timeOut14[5][0] + timeOut15[5][0] + timeOut16[5][0] ,
                timeOut14[5][1] + timeOut15[5][1] + timeOut16[5][1] ],
              [ timeOut14[6][0] + timeOut15[6][0] + timeOut16[6][0],
                timeOut14[6][1] + timeOut15[6][1] + timeOut16[6][1] ],    
            ]
    return secErr, runErr, instErr, NoErr, timeOut



SecErr, runErr, instErr, noErr, timeOut = sumAllforSandbox(Node14, Node15, Node16, Node14_G, Node15_G, Node16_G)
# vm2, realms, safe-eval, ses, near-membrane

#noErr, runErr, ___ , instErr, secErr, ___
print(str(noErr[0][0]) + " & " + str(runErr[0][0]) + " & "    + str(timeOut[0][0]) + " & "   + str(instErr[0][0]) + " & " +str(SecErr[0][0])    + " & "+ "18 ")
print(str(noErr[0][1]) + " & " + str(runErr[0][1])   + " & "  + str(timeOut[0][1]) + " & "  + str(instErr[0][1])  + " & " + str(SecErr[0][1])  + " & "+ " 4 ")
print(str(noErr[1][0]) + " & " + str(runErr[1][0]) + " & "    + str(timeOut[1][0]) + " & "  + str(instErr[1][0])    + " & " + str(SecErr[1][0])    + " & "+ " 0 ")
print(str(noErr[1][1]) + " & " + str(runErr[1][1])   + " & "  + str(timeOut[1][1]) + " & "  + str(instErr[1][1])  + " & " + str(SecErr[1][1]) + " & "+ " 0  ")
print(str(noErr[2][0]) + " & " + str(runErr[2][0])  + " & "   + str(timeOut[2][0]) + " & " + str(instErr[2][0])   + " & " + str(SecErr[2][0]) + " & "+ " 18   ")
print(str(noErr[2][1]) + " & " + str(runErr[2][1])    + " & " + str(timeOut[2][1]) + " & " + str(instErr[2][1]) + " & " + str(SecErr[2][1]) + " & "+ " 4  ")
print(str(noErr[3][0]) + " & " + str(runErr[3][0]) + " & "    + str(timeOut[3][0]) + " & "  + str(instErr[3][0])    + " & " + str(SecErr[3][0]) + " & "+ " 0    ")
print(str(noErr[3][1]) + " & " + str(runErr[3][1])   + " & "  + str(timeOut[3][1]) + " & " + str(instErr[3][1])  + " & " + str(SecErr[3][1]) + " & "+ " 0   ")
print(str(noErr[4][0]) + " & " + str(runErr[4][0])  + " & "   + str(timeOut[4][0]) + " & " + str(instErr[4][0])   + " & " + str(SecErr[4][0]) + " & "+ " 0    ")
print(str(noErr[4][1]) + " & " + str(runErr[4][1])    + " & " + str(timeOut[4][1]) + " & " + str(instErr[4][1]) + " & " + str(SecErr[4][1]) + " & "+ " 4  ")
print(str(noErr[5][0]) + " & " +  str(runErr[5][0])    + " & " + str(timeOut[5][0]) + " & "  + " & " + str(SecErr[5][0]) + " & "+ " 4  ")
print(str(noErr[5][1]) + " & " + str(runErr[5][1])    + " & " + str(timeOut[5][1]) + " & "  + " & " + str(SecErr[5][1]) + " & "+ " 4  ")
print(str(runErr[6][0])    + " & " + str(timeOut[6][0]) + " & "  + " & " + str(SecErr[6][0]) + " & "+ " 4  ")
print(str(runErr[6][1])    + " & " + str(timeOut[6][1]) + " & "  + " & " + str(SecErr[6][1]) + " & "+ " 4  ")



