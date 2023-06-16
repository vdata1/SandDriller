# Artifact "SANDDRILLER: A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes"
This repo is the implementation of our paper, SandDriller: A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes. 
The paper is available [here](https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan)


SandDriller can test both server-side and client-side language-based JavaScript sandboxes. 


IMPORTANT: 

To ensure the property rights of some sandboxes, we didn't include the source code or the built version of any sandbox in our tool. 
To test google caja and AdSafe sandboxes, we suggest to download these sandboxes from their official resources and build them and ensure they are up and running.
To test other sandboxes which we focused on our paper, we suggest to simply install all the packages in `package.json` by simply run on command line `npm --prefix . install .` .
To make sure the plotting scripts running, we suggest to run command `pip install -r ${PATH_TO_PROJECT}/plots/req.txt`  
You need to download both test suites from their OFFICIAL site and move them to `${PATH_TO_PROJECT}/Dataset` path.
The used version of our experiments:  ECMAScript tests: https://github.com/tc39/test262/tree/99b2a70789b27d433f9036b98572a4443d91e01f/test
                                      v8 tests: https://github.com/nodejs/node/tree/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/deps/v8/test/mjsunit

Best practice is to name the tests directories as "ECMA" for ECMAScript tests and "V8" for the v8 engine test cases, respectively. 


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
