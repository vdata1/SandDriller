from cmath import nan
import sys
print(sys.executable)


import pandas as pd
import numpy as np
import math

import altair as alt
from altair_saver import save

alt.renderers.enable('altair_viewer')
alt.data_transformers.disable_max_rows()

df1 = pd.read_csv("../Results/RESULTS_TEST_14.csv")
df2 = pd.read_csv("../Results/RESULTS_TEST_15.csv")
df3 = pd.read_csv("../Results/RESULTS_TEST_16.csv")
#df4 = pd.read_csv("/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Results/BASE_LINE.csv")
#print(df1)

def prep_baseLine(df):
    baseLine = {}
    baseLine["Time"] = []
    names = []
    for i in range(len(df.ID)):
        if (df.ID[i].split("/")[-1] not in names):
            baseLine["Time"].append(df.Time[i])
            names.append(df.ID[i].split("/")[-1])
            #print(len(names))
        else:
            print("foo")
    baseLine = pd.DataFrame(baseLine)
    baseLine["Sandbox"] = "no sandbox"
    return baseLine

def prep_df(df):
    vm2 = {}
    realms = {}
    ses = {}
    nm = {}
    se = {}
    ads = {}

    vm2["Time"] = []
    realms["Time"] = []
    ses["Time"] = []
    nm["Time"] = []
    se["Time"] = []
    ads["Time"] = []

    vm2_counter = 0
    se_counter = 0
    c = 0
    t = 0
    a = 0
    b = 0
    d = 0
    q = 0
    #for i in range(len(df.ID)):
    #    if(type():
    #        print(df.ID[i], df.Time[i], df.x[i])

    for i in range(len(df.ID)):
      if(df.Sandbox[i] == "vm2"):
          se_counter = se_counter + 1
      #if(df.Time[i] == 0 and df.Sandbox[i] == "vm2"):
      #                vm2_counter = vm2_counter + 1
    
      if(df.Time[i] > 0):
        if df.Sandbox[i] == "vm2":
            vm2["Time"].append(df.Time[i])
            a = a + 1
            if(float(df.Time[i]) > 999):
                vm2_counter = vm2_counter + 1
          #  vm2["NumOfTests"].append(i)
        elif df.Sandbox[i] == "realms-shim":
            realms["Time"].append(df.Time[i])
            b = b + 1
          #  realms["NumOfTests"].append(i)
        elif df.Sandbox[i] == "ses":
            ses["Time"].append(df.Time[i])
            c = c + 1
          #  ses["NumOfTests"].append(i)
        elif df.Sandbox[i] == "near-membrane":
            nm["Time"].append(df.Time[i])
            d = d + 1
          #  nm["NumOfTests"].append(i)
        elif df.Sandbox[i] == "safe-eval":
            se["Time"].append(df.Time[i])
            t = t + 1
            #if(float(df.Time[i]) > 999):
            #    se_counter = se_counter + 1
          #  se["NumOfTests"].append(i)
        elif df.Sandbox[i] == "adsafe": 
            if(df.Time[i] <= 1000):
                ads["Time"].append(df.Time[i])
                q = q + 1
       
    #TimeOut = [1100] * 29340 #vm2
    #vm2["Time"].extend(TimeOut)

    #TimeOut = [1100] * 28135 #realms-shim
    #realms["Time"].extend(TimeOut)

    #TimeOut = [1100] * 28069 #safe-eval
    #se["Time"].extend(TimeOut)

    #TimeOut = [1100] * 28177 #ses
    #ses["Time"].extend(TimeOut)

    #TimeOut = [1100] * 46591 #near-membrane
    #nm["Time"].extend(TimeOut)


    print(len(df.ID), a, b, c, d, t, q, vm2_counter, se_counter)
    last = [a, b, d, c, t, q]
    last = pd.DataFrame(last)
    vm2 = pd.DataFrame(vm2)
    realms = pd.DataFrame(realms)
    nm = pd.DataFrame(nm)
    se = pd.DataFrame(se)
    ses = pd.DataFrame(ses)
    ads = pd.DataFrame(ads)

    vm2["Sandbox"] = "vm2"
    realms["Sandbox"] = "realms-shim"
    ses["Sandbox"] = "ses"
    se["Sandbox"] = "safe-eval"
    nm["Sandbox"] = "near-membrane"
    ads["Sandbox"] = "adsafe"


    return vm2, realms, ses, se, nm, ads,last

'''Add Node Version in a col'''
#df1 = prep_df(df1, "Node_v14")
#df2 = prep_df(df2, "Node_v15")
#df3 = prep_df(df3, "Node_v16")

#"NodeVersion", 'ID', 'Sandbox', 'Time', 'NumberOfVairents', 'Oracles', 'RunError', "InstrumentError", "SecurityError"

vm2, realms, ses, se, nm, ads, last = prep_df(df3)
#bl = prep_baseLine(df4)
#print(vm2)
#print(df1)

a = alt.Chart(vm2).transform_window(
    sort=[{'field': 'Time'}],
    #frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color='#ff5733').encode(
    x=alt.X("Time:Q", title="Time (ms)"),
    y=alt.Y("cumulative_count:Q", title= "Number of tests"),
    color = "Sandbox:N"
)
points1 = a.mark_point(filled=True).encode(
    color='Sandbox',
    shape='Sandbox'
)

b = alt.Chart(realms).transform_window(
    sort=[{'field': 'Time'}],
   # frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = '#f7fa04').encode(
    x="Time:Q",
    y="cumulative_count:Q",
    #shape=alt.Shape('Sandbox', scale=alt.Scale(range=['cross', 'circle', 'square', 'triangle-right', 'diamond'])),
    color= alt.Color('Sandbox:N',# legend=None,
                   scale=alt.Scale(
            range=["orange", "blue", 'red', "purple", 'green', 'gray']
                    )
                    )
)
points2 = b.mark_point(filled=True).encode(
    color='Sandbox',
    shape='Sandbox'
)

d = alt.Chart(ses).transform_window(
    sort=[{'field': 'Time'}],
  #  frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = 'blue').encode(
    x="Time:Q",
    y="cumulative_count:Q",
    color = "Sandbox:N"
)
points3 = d.mark_point(filled=True).encode(
    color='Sandbox',
    shape='Sandbox'
)

f = alt.Chart(nm).transform_window(
    sort=[{'field': 'Time'}],
  #  frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = 'green').encode(
    x=alt.X('Time:Q'),#, scale=alt.Scale(domain=[0, 1000])),
    y="cumulative_count:Q",
    color = "Sandbox:N"
)

points4 = f.mark_point(filled=True).encode(
    color='Sandbox',
    shape='Sandbox'
)

e = alt.Chart(se).transform_window(
    sort=[{'field': 'Time'}],
  #  frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = 'red').encode( #mark_area
    x="Time:Q",
    y="cumulative_count:Q",
    color = "Sandbox:N"
)
#color = ["red", "green", "blue", "greenblue", "orange"]
points5 = e.mark_point(filled=False).encode(
    color='Sandbox',
    shape='Sandbox'
)

u = alt.Chart(ads).transform_window(
    sort=[{'field': 'Time'}],
  #  frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = 'azure').encode( #mark_area
    x="Time:Q",
    y="cumulative_count:Q",
    color = "Sandbox:N"
)
#color = ["red", "green", "blue", "greenblue", "orange"]
points5 = u.mark_point(filled=False).encode(
    color='Sandbox',
    shape='Sandbox'
)



'''z = alt.Chart(bl).transform_window(
    sort=[{'field': 'Time'}],
  #  frame=[None, 0],
    cumulative_count='count(*)',
).mark_line(opacity=1, color = 'black').encode( #mark_area
    x="Time:Q",
    y="cumulative_count:Q",
    color = "Sandbox:N"
)
#color = ["red", "green", "blue", "greenblue", "orange"]
points5 = e.mark_point(filled=False).encode(
    color='Sandbox',
    shape='Sandbox'
)
'''

#c = alt.layer(
#    a, points1, b, points2, d, points3,
#    f, points4, e, points5
#).resolve_scale(
#    color='independent',
#    shape='independent'
#)
c = alt.layer(a, b, d, u, e, f) #a, b, d, f, e, u #z)#a + b + d + f + e #a+points1+b+points2+d+points3+f+points4+e+points5 #alt.layer(a, b, d, f, e)
#c.save("chart.pdf")
c = c.configure_axis(
    labelFontSize=18,
    titleFontSize=18,
    #scale=alt.Scale(domain=[0, 10])
)

c = c.configure_legend(
    labelFontSize = 15,
    titleFontSize = 17,

)
c = c.configure_axisX(domainDash=([0,2]))

c = c.configure_view(
        # remove grid lines around column clusters
        strokeOpacity=0,
        #scale=alt.Scale(domain=[0, 10])
    )

c = c.configure_header(
    labelFontSize=17
)



#st.altair_chart(c, use_container_width=True)
c.show()