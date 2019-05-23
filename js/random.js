var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["random"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/random.grace\npublic:\n between(1)and(1)\n between0And1\n integerIn(1)to(1)\npublicMethodTypes:\n between(m:Number)and(n:Number) \u2192 Number\n between0And1 \u2192 Number\n integerIn(m:Number)to(n:Number) \u2192 Number\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["random"] = [
    "",
    "method between0And1 -> Number {",
    "    // A pseudo-random number between in the interval [0..1)",
    "    native \"c\" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›",
    "    native \"js\" code ‹    return new GraceNum(Math.random());›",
    "}",
    "",
    "method between (m: Number) and (n: Number) -> Number {",
    "    // A pseudo-random number in the interval [m..n)",
    "    ((n - m) * between0And1) + m",
    "}",
    "",
    "method integerIn (m: Number) to (n: Number) -> Number {",
    "    // A pseudo-random integer in the interval [m..n]",
    "    ((n - m + 1) * between0And1).truncated + m",
    "}" ];
}
function gracecode_random() {
  importedModules["random"] = this;
  var module$random = this;
  this.definitionModule = "random";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_random_1");
  this.outer_random_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  var func0 = function(argcv) {    // method between0And1, line 2
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("between0And1", 0, numArgs - 0);
    }
    setLineNumber(5);    // compilenode call
    var result = GraceDone;    // start native code from line 5
        return new GraceNum(Math.random());   // end native code insertion
    assertTypeOrMsg(result, var_Number, "result of method between0And1", "Number");
    return result;
  };    // end of method between0And1
  this.methods["between0And1"] = func0;
  func0.methodName = "between0And1";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 2;
  func0.definitionModule = "random";
  var func1 = function(argcv, var_m, var_n) {    // method between(_)and(_), line 8
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("between(_)and(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_m, var_Number, "argument 1 in request of `between(_)and(_)`", "Number");
    assertTypeOrMsg(var_n, var_Number, "argument 2 in request of `between(_)and(_)`", "Number");
    setLineNumber(10);    // compilenode op
    var diff2 = request(var_n, "-(1)", [1], var_m);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3 = selfRequest(this, "between0And1", [0]);
    var prod4 = request(diff2, "*(1)", [1], call3);
    var sum5 = request(prod4, "+(1)", [1], var_m);
    assertTypeOrMsg(sum5, var_Number, "result of method between(_)and(_)", "Number");
    return sum5;
  };    // end of method between(_)and(_)
  func1.paramTypes = [];
  func1.paramTypes.push([type_Number, "m"]);
  func1.paramTypes.push([type_Number, "n"]);
  this.methods["between(1)and(1)"] = func1;
  func1.methodName = "between(1)and(1)";
  func1.paramCounts = [1, 1];
  func1.paramNames = ["m", "n"];
  func1.definitionLine = 8;
  func1.definitionModule = "random";
  var func6 = function(argcv, var_m, var_n) {    // method integerIn(_)to(_), line 13
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("integerIn(_)to(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_m, var_Number, "argument 1 in request of `integerIn(_)to(_)`", "Number");
    assertTypeOrMsg(var_n, var_Number, "argument 2 in request of `integerIn(_)to(_)`", "Number");
    setLineNumber(15);    // compilenode member
    // call case 6: other requests
    var diff8 = request(var_n, "-(1)", [1], var_m);
    var sum9 = request(diff8, "+(1)", [1], new GraceNum(1));
    // call case 4: self request with 0 args and 0 typeArgs 
    var call10 = selfRequest(this, "between0And1", [0]);
    var prod11 = request(sum9, "*(1)", [1], call10);
    var call7 = request(prod11, "truncated", [0]);
    var sum12 = request(call7, "+(1)", [1], var_m);
    assertTypeOrMsg(sum12, var_Number, "result of method integerIn(_)to(_)", "Number");
    return sum12;
  };    // end of method integerIn(_)to(_)
  func6.paramTypes = [];
  func6.paramTypes.push([type_Number, "m"]);
  func6.paramTypes.push([type_Number, "n"]);
  this.methods["integerIn(1)to(1)"] = func6;
  func6.methodName = "integerIn(1)to(1)";
  func6.paramCounts = [1, 1];
  func6.paramNames = ["m", "n"];
  func6.definitionLine = 13;
  func6.definitionModule = "random";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_random = gracecode_random;
if (typeof window !== "undefined")
  window.gracecode_random = gracecode_random;
gracecode_random.imports = ["standardGrace"];
gracecode_random.definitionModule = "random";
gracecode_random.definitionLine = 1;
