import altair as alt
#from vega_datasets import data

import sys
print(sys.executable)


import pandas as pd
import numpy as np
import math

import altair as alt
import seaborn as sns
import matplotlib.cm as cm
from matplotlib import rc,rcParams
import matplotlib.pyplot as plt
alt.renderers.enable('altair_viewer')
alt.data_transformers.disable_max_rows()


df1 = pd.read_csv("../Results/RESULTS_TEST_14.csv")
df2 = pd.read_csv("../Results/RESULTS_TEST_15.csv")
df3 = pd.read_csv("../Results/RESULTS_TEST_16.csv")
#print(df1)

def prep_df(df, name):
    df = df.drop(columns = ['Time', 'NumberOfVairents', "InstrumentError", "SecurityError"])
    df.insert(1, "NodeVersion", name)
    d = []
    vm = 0
    rs = 0
    se = 0
    ses = 0
    nm = 0
    ads = 0 
    caja = 0
    dataset = ""
    for i in range(len(df.RunError)):
        if(not math.isnan(df.Oracles[i]) and int(df.Oracles[i]) > 0 ):
            if(df.Sandbox[i] == "vm2"):
                vm = vm + 1
            elif (df.Sandbox[i] == "realms-shim"):
                rs = rs + 1
            elif (df.Sandbox[i] == "ses"):
                ses = ses + 1
            elif (df.Sandbox[i] == "safe-eval"):
                se = se + 1
            elif (df.Sandbox[i] == "near-membrane"):
                nm = nm + 1
            elif (df.Sandbox[i] == "adsafe"):
                ads = ads + 1
            elif (df.Sandbox[i] == "caja"):
                caja = caja + 1

            if("ECMA" in df.ID[i]):
                dataset = "ECMA"
            else:
                dataset = "v8"

            #if(float(df.Oracles[i]) < 90000 and float(df.Oracles[i]) > 0):
            #    if(df.Sandbox[i] == "vm2" and int(df.Oracles[i])):
            #        print(int(df.Oracles[i]))
            temp = {
                    "NodeVersion": name,
                    "Sandbox": df.Sandbox[i],
                    "Oracles": float(df.Oracles[i]),
                    "Dataset": dataset
                    }
            d.append(temp)
        #else:
        #    print("Dropped:  " + str(df.Oracles[i]))
    print(vm, rs, ses, se, nm, ads, caja)
    #print(d)
    #print(type(d))
    d = pd.DataFrame(d)
    print(d)
    return d

'''Add Node Version in a col'''
#df1 = prep_df(df1, "Node_v14")
#df2 = prep_df(df2, "Node_v15")
df3 = prep_df(df3, "Node_v16")

#"NodeVersion", 'ID', 'Sandbox', 'Time', 'NumberOfVairents', 'Oracles', 'RunError', "InstrumentError", "SecurityError"
print(type(df3))

#df = pd.concat([df1, df2, df3])
#exit()
df = df3

sns.set_theme(style="whitegrid")
sns.set(font_scale = 2)
# Draw a nested violinplot and split the violins for easier comparison
sns.violinplot(data=df, x="Sandbox", y=df[df["Oracles"]<90000]["Oracles"], hue="Dataset",
               split=True, palette="muted", width = 1, space = 0.1, cut=0 #inner="quart"#, linewidth=1,
              # palette={"Yes": "b", "No": ".85"}
               )
sns.despine(offset=5, trim=True);
#plt.xlabel("Sandbox", fontsize = 20)
#plt.ylabel("Oracles", fontsize = 20)
#plt.title(fontsize = 20)

#rc('text', usetex=True)
#rc('axes', linewidth=2)
#rc('font', weight='bold')
#rcParams['text.latex.preamble'] = [r'\usepackage{sfmath} \boldmath']


plt.xlabel('Sandbox', size=40, labelpad=9, weight = 'bold')
plt.ylabel('Number of Oracle Checks', labelpad=17, size=40, weight = 'bold')
plt.rc("font", size = 35)
plt.legend(fontsize = 28, loc= "best")
plt.rc('axes', titlesize=27)     # fontsize of the axes title
plt.rc('axes', labelsize=27)    # fontsize of the x and y labels
plt.rc('xtick', labelsize=27)    # fontsize of the tick labels
plt.rc('ytick', labelsize=27)
plt.xticks(fontsize=27, weight = 'bold', rotation = 0)
plt.yticks(fontsize=33, weight = 'bold')

sns.despine(left=True)
plt.show()