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
We performed the experiments described in the paper on a server with 64 Intel Xeon E5-4650L with 2.60GHz CPU cores and 768GB of memory. However, SandDriller does not require specific hardware features, so it can successfully run on other hardware configurations. To replicate the experiments in the artifact, we require Node.js version 14.15 on Linux, but we successfully run SandDriller in other setups, as well.1

## Installation
After cloning the repository, use npm to install all the third-party dependencies in `package.json` by running in the main folder of the project:

```
npm --prefix . install .
```

Note that the vulnerable version of vm2 sandbox used in the artifact evaluation is alread defined as dependency so you do not need to install it separately. To download and test other sandboxes, e.g., AdSafe or realms-shimt, we recommend downloading these sandboxes from their official resources (GitHub repository or npm) and build them and ensure they are accessible to SandDriller.

To download the corpus used in the artifact evaluation (V8 tests), run the following commands: 

```
cd Dataset
git clone https://github.com/nodejs/node/
git reset --hard e46c680bf2b211bbd52cf959ca17ee98c7f657f5
cd ..
```

## Usage

To run SandDriller, execute from the main folder of the project: 

```
node test/run-multi-proc.js
```

A summary of the test results will be printed on the screen and the detailed results can be inspected in `$PATH_TO_SANDDRILLER/Results/`. For each security violation, SandDriller outputs the offending instrumented test cases in the `/tmp/res` folder.
        
## Configuration options
There are several configuration options that can be tweaked to control SandDriller's execution:

* **Target sandbox**: Edit `${PATH_TO_PROJECT}/test/process-runner.js` , line 10 with the name of the sandbox under test, e.g.,: 
```js 
const sandbox = "realms-shim"; //sandbox names: ["realms-shim", "safe-eval", "vm2", "ses", "near-membrane", "adsafe", "caja"]
```

* **Corpus**: The variable `entries` declared in line 132 of `${PATH_TO_PROJECT}/test/run-multi-proc.js` should contain the input corpus used by SandDriller. One can either declare it using individual paths: 
```js
entries = [path.resolve(__dirname, "../Dataset/V8/regress/regress-444805.js-script")]
```
or by using the convenient `walk()` method to include all files in a directory tree: 
```js
entries = walk(path.resolve(__dirname, "../Dataset/node/deps/v8/test/mjsunit"));
```

* **Number of parallel worker threads**: Edit `${PATH_TO_PROJECT}/test/run-multi-proc.js` , line 12 to change the pool size (default 16) example: 
```js 
//for a single test or testing the client-side sandboxes
const POOL_SIZE = 1;
```

* **Timeout for a single test**: Edit `${PATH_TO_PROJECT}/test/run-multi-proc.js` , line 13 to change the timeout, usually the client-side tests takes longer time(default 20000ms)
example: 
```js
const TIMEOUT =  20000; //default 10000 for server-side sandbox 
```

* **Enable/disable variant generator**: Edit `${PATH_TO_PROJECT}/test/process-runner.js` , line 11 to use/not use the variant generator: 
```js 
const useGenerator = false; //true to use the varient genegator
```
