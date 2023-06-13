//let global =  window; 
 let global = this;
let Test262Error = Error;
//let stats = {oracleChecks : 0}; 
function isGetter (obj, prop) {
    return !!Object.getOwnPropertyDescriptor(obj, prop)['get'];
}  

function isSetter (obj, prop) {
    return !!Object.getOwnPropertyDescriptor(obj, prop)['set'];
}  

function getAllProperties(obj){
    let allProps = [], curr = obj;    
    try {
        do{                
            let props = Object.getOwnPropertyNames(curr)
            props.forEach(function(prop){
            if (allProps.indexOf(prop) === -1)
                allProps.push(prop)
            });
        } while(curr = curr.__proto__)
    } catch(e) {
        // ses weirdness
    }
    return allProps;
}

// return a pair of {val: value, path: path}
function getAllReferences(obj) {
    let visited = new WeakMap();
    if (!obj || ((typeof obj !== "object") && (typeof obj !== "function")))
        return [];
    visited.set(obj, true);
    function getRefsRecursive(obj, path) {        
        let res = [];
        if (!obj)
            return res;
        if (((typeof obj !== "object") && (typeof obj !== "function")))
            return res;
        let keys = getAllProperties(obj);                
        for (let i = 0; i < keys.length; i++) {            
            try {                     
                if (isGetter(obj, keys[i]) || isSetter(obj, keys[i]))
                    continue;                    
                let val = obj[keys[i]];
                if (val && !visited.has(val) && ((typeof val === "object") || (typeof val === "function"))) {                    
                    let currPath = path + "." + keys[i];                                    
                    visited.set(val, true);
                    res.push({path : currPath, val: val});            
                    res = res.concat(getRefsRecursive(val, currPath));
                }
            } catch(e) {
                res.push(e);                
            }
        }
        return res;
    }    
    return getRefsRecursive(obj, "ref");
}

function getRootConstructor(obj){
    if ((typeof obj !== "object" && typeof obj !== "function") || !obj.constructor) {
        return Object.constructor;
    }
    
    while (obj.constructor) {
        if(obj === obj.constructor){
            break; 
        }
        obj = obj.constructor;
    }    
    return obj;
}

function getRootPrototype(obj) {    
    stats.oracleChecks++;
    //console.log(stats.oracleChecks);
    try {
        if (!obj)
            return Object.prototype;
        if ((typeof obj != "object" && typeof obj != "function") || !obj.__proto__) {
            return Object.prototype;
        }
        while (obj.__proto__) {
            obj = obj.__proto__;
        }
        return obj;
    } catch(e) {
        return Object.prototype;
    }
}

function checkBreakout(x, path){    
    stats.oracleChecks++;
    //console.log(stats.oracleChecks);
     try {
         if (x === "SandDriller-23420409")
            leak("SB-SUCCESS: The property " + path + " is able to read outside the sandbox");        
        // if (x.name && x.name === "require")
        //     leak("SB-SUCCESS: The property " + path + " is able to read outside the sandbox");                    
        let dis = getRootConstructor(x)("return this;")();
        if (dis.flag === "SandDriller-23420409")
            leak("SB-SUCCESS: The property " + path + " is able to read outside the sandbox");
        if (dis.process && dis.process.mainModule){ // || (x.name && x.name === "require")
            leak("SB-SUCCESS: The property " + path + " is able to call outside the sandbox");
        }
     } catch(DONOTINSTRUMENT) {                          
        // leak(DONOTINSTRUMENT)
     }
}

function checkReferenceRecursive(ref, cb) {
    let stack = new Error().stack;
    var count = (stack.match(/checkReferenceRecursive/g) || []).length;
    // avoid recursive calls
    if (count > 1) {
        return;
    }    
    let rootPrototype = getRootPrototype(ref);
    if (rootPrototype !== Object.prototype) {            
        cb(rootPrototype, "ref");
    }
    checkBreakout(ref, "ref");    
    let refs = getAllReferences(ref);            
    for (let i = 0; i < refs.length; i++) {                
        let rootPrototype = getRootPrototype(refs[i].val);
        if (rootPrototype !== Object.prototype) {            
            cb(rootPrototype, refs[i].path);
        }
        checkBreakout(refs[i].val, refs[i].path);
    }
}

/*
let globalProps = getAllReferences(this);
for(let i = 0; i < globalProps.length; i++){        
    let currEntry = globalProps[i];
    checkBreakout(currEntry.val, currEntry.path);
    let rootPrototype = getRootPrototype(currEntry.val);
    try {
        rootPrototype.P = "PA: Got it?";    
    } catch(e) {}
    if(rootPrototype !== Object.prototype){
        leak("PA-SUCCESS:"+ currEntry.prop + "has a different prototype");
    }    
}
*/