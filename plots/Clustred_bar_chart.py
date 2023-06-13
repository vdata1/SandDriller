import sys
print(sys.executable)

import pandas as pd
import numpy as np

import altair as alt
import seaborn as sns
import matplotlib.cm as cm
import matplotlib.pyplot as plt
alt.renderers.enable('altair_viewer')
alt.data_transformers.disable_max_rows()


df1 = pd.read_csv("../Results/RESULTS_TEST_14.csv")
df2 = pd.read_csv("../Results/RESULTS_TEST_15.csv")
df3 = pd.read_csv("../Results/RESULTS_TEST_16.csv")


def prep_df(df, name):
    #df = pd.melt(df, id_vars='Sandbox', value_vars=["RunError", "InstrumentError", "SecurityError", "NoError"], value_name='Errors')
    d = {
        "NodeVersion" : name,
        "Sandbox" : ["vm2", "realms-shim", "near-membrane", "safe-eval", "ses"],
        "RunError": [0,0,0,0,0],
        "InstrumentError" : [0,0,0,0,0],
        "SecurityError" : [0,0,0,0,0],
        "NoError" : [0,0,0,0,0]
    }
    address = 0
    for index, i in df.iterrows():
        if(i["Sandbox"] == "vm2"):
            address = 0
        elif (i["Sandbox"] == "realms-shim"):
            address = 1
        elif (i["Sandbox"] == "near-membrane"):
            address = 2
        elif (i["Sandbox"] == "safe-eval"):
            address = 3
        elif (i["Sandbox"] == "ses"):
            address = 4
        if(int(i["RunError"]) + int(i["InstrumentError"]) + int(i["SecurityError"]) == 0):
            d["NoError"][address] = d["NoError"][address] + 1
            #if(address == 4):
             #   print("No Error: ", i["RunError"], i["InstrumentError"], i["SecurityError"])
             #   print("No Error address",d["NoError"][address] )
        d["RunError"][address]           = d["RunError"][address]        + i["RunError"]
        d["InstrumentError"][address]    = d["InstrumentError"][address] + i["InstrumentError"]
        d["SecurityError"][address]      = d["SecurityError"][address]   + i["SecurityError"]

    #print(d)
    print("#############################################")
    #To be deleted later
    d["RunError"][0] = 29340
    d["RunError"][1] = 28135
    d["RunError"][2] = 46591
    d["RunError"][3] = 28069
    d["RunError"][4] = 28177
    #END
    f = pd.DataFrame(d)
    f = pd.melt(f, id_vars=["NodeVersion", 'Sandbox'], value_vars=["RunError", "InstrumentError", "SecurityError", "NoError"], value_name='Errors')
    print(f)
    print("********************************************")
    for key in d:
         if (key not in ["NodeVersion", "Sandbox"]):
            for i in range(len(d[key])):
                 if(d[key][i] > 0):
                    d[key][i] = np.log2(d[key][i])


    df = pd.DataFrame(d)
    df = pd.melt(df, id_vars=["NodeVersion", 'Sandbox'], value_vars=["RunError", "InstrumentError", "SecurityError", "NoError"], value_name='Errors')

    return df

'''Add Node Version in a col'''
df1 = prep_df(df1, "Node_v14")
df2 = prep_df(df2, "Node_v15")
df3 = prep_df(df3, "Node_v16")

#"NodeVersion", 'ID', 'Sandbox', 'Time', 'NumberOfVairents', 'Oracles', 'RunError', "InstrumentError", "SecurityError"


#print(df1)
#print(df2)
#print(df3)

#df = pd.concat([df1, df2, df3])

df = df3

print(df)

chart = alt.Chart(df).mark_bar().encode(

    # tell Altair which field to group columns on
    x=alt.X('variable:N', title=None),

    # tell Altair which field to use as Y values and how to calculate
    y=alt.Y('sum(Errors):Q',
       # scale=alt.Scale(type='log'),
       # scale=alt.Scale(type='log', base=10),
        axis=alt.Axis(
            grid=True,
            title="Cumulative Number of Errors(log2)")),

    # tell Altair which field to use to use as the set of columns to be  represented in each group
    column=alt.Column('Sandbox:N', title=None),

    # tell Altair which field to use for color segmentation
    color=alt.Color('variable:N',
            scale=alt.Scale(
                # make it look pretty with an enjoyable color pallet
                range=['#ffcc5c', '#96ceb4', '#0096FF', '#ff6f69'],
            ),
        ))\
    .configure_axis(
    labelFontSize=20,
    titleFontSize=20,

)
chart = chart.configure_legend(
    labelFontSize = 13,
    titleFontSize = 15
)
chart = chart.configure_view(
        # remove grid lines around column clusters
        strokeOpacity=0
    )
chart = chart.configure_header(
    labelFontSize=17
)
#ay.set_xscale("log")
chart.show()