# SandDriller - A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes
This repository contains the prototype used in the evaluation of our paper [SandDriller: A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes](https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan). SandDriller can test both server-side and client-side language-based JavaScript sandboxes to find sandbox escape vulnerabilities. It requires an input corpus, consistig of several self-contained JavaScript files.

## Publication
The associated artifact describes how to run the tool and interpret the results. If you (re)use our results in your academic research, please cite our publication: 

```
@inproceedings{alhamdan2023sanddriller,
  title={{SandDriller}: A fully-automated approach for testing language-based {JavaScript} sandboxes},
  author={AlHamdan, Abdullah and Staicu, Cristian-Alexandru},
  booktitle={{USENIX} Security Symposium},
  year={2023}
}
```

## Requirements
We performed the experiments described in the paper on a server with 64 Intel Xeon E5-4650L@2.60GHz CPU cores and 768GB of memory. However, SandDriller does not require specific hardware features, so it can successfully run on other hardware configurations. To replicate the experiments in the artifact, we require Node.js version 14.15 on Linux, but we successfully run SandDriller in other setups, as well.

## Installation
After cloning the repository, use npm to install all the third-party dependencies in `package.json` by running:

```
npm --prefix . install .
```

To ensure the property rights of some sandboxes, we didn't include the source code or the built version of any sandbox in our tool. 
To test google caja and AdSafe sandboxes, we suggest to download these sandboxes from their official resources and build them and ensure they are up and running.

To make sure the plotting scripts running, we suggest to run command `pip install -r ${PATH_TO_PROJECT}/plots/req.txt`  
You need to download both test suites from their OFFICIAL site and move them to `${PATH_TO_PROJECT}/Dataset` path.
The used version of our experiments:
* ECMAScript tests: https://github.com/tc39/test262/tree/99b2a70789b27d433f9036b98572a4443d91e01f/test
* V8 tests: https://github.com/nodejs/node/tree/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/deps/v8/test/mjsunit

Best practice is to name the tests directories as "ECMA" for ECMAScript tests and "V8" for the v8 engine test cases, respectively. 


## Usage

USE command `$ node ${PATH_TO_PROJECT}/test/run-multi-proc.js` to run the SandDriller tool

`${PATH_TO_PROJECT}/src/analysis.js` is the analyser part

edit `${PATH_TO_PROJECT}/test/run-multi-proc.js` , line 12 to change the pool size (default 16)
example: 
```js 
        //for a single test or testing the client-side sandboxes
        const POOL_SIZE = 1;
```

edit `${PATH_TO_PROJECT}/test/run-multi-proc.js` , line 13 to change the timeout, usually the client-side tests takes longer time(default 20000ms)
example: 
```js
        const TIMEOUT =  20000; //default 10000 for server-side sandbox 
```

edit `${PATH_TO_PROJECT}/test/process-runner.js` , line 10 with the sandbox name to test 
example: 
```js 
        const sandbox = "realms-shim"; //sandbox names: ["realms-shim", "safe-eval", "vm2", "ses", "near-membrane", "adsafe", "caja"]
```

edit `${PATH_TO_PROJECT}/test/process-runner.js` , line 11 to use/not use the varient generator 
example: 
```js 
        const useGenerator = false; //true to use the varient genegator
```
        
## Configuration options
