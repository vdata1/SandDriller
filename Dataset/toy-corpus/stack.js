function stack(ref, cb) { 
   let stack = new Error().stack; 
   stack.match(/checkReferenceRecursive/g); 
}  
RegExp.prototype.__defineGetter__('global', () => { 
   stack(this); 
   return true; 
})
