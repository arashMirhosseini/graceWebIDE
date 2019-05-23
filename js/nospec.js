var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["nospec"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmethodtypes-of:Procedure0:\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/nospec.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n describe(1)with(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n expect(1)notToBe(1)\n expect(1)notToHaveType(1)\n expect(1)notToRaise(1)\n expect(1)orSay(1)\n expect(1)toBe(1)\n expect(1)toBe(1)orSay(1)\n expect(1)toBe(1)within(1)\n expect(1)toHaveType(1)\n expect(1)toRaise(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun:=(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n specify(1)by(1)\n valueOf(1)\npublicMethodTypes:\n describe(name)with(block)\n expect(a)notToBe(b)\n expect(a)toBe(b)\n expect(a)toBe(b)orSay(str:String)\n expect(b:Procedure0)notToRaise(undesired)\n expect(b:Procedure0)toRaise(desired)\n expect(bb:Boolean)orSay(str:String)\n expect(n1:Number)toBe(n2:Number)within(epsilon)\n expect(s)notToHaveType(undesired:Type)\n expect(s)toHaveType(desired:Type)\n numberOfErrorsToRerun:=(_)\n specify(name:String)by(block)\ntypes:\n Procedure0\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["nospec"] = [
    "// This module is a subsitute for the minispec dialect.",
    "// It does no testing at all.  It exists so that student code that",
    "// depends on minispec can be run by the instuctor under gUnit,",
    "// without getting confounding results from the minispec specifications.",
    "",
    "inherit prelude.methods",
    "",
    "type Procedure0 = self.Procedure0",
    "",
    "method expect(bb:Boolean) orSay (str:String) { }",
    "",
    "method expect (a) toBe (b) orSay (str:String) { }",
    "",
    "method expect (a) toBe (b) { }",
    "",
    "method expect (a) notToBe (b) { }",
    "",
    "method expect(n1:Number) toBe (n2:Number) within (epsilon) { }",
    "",
    "method expect(b:Procedure0) toRaise (desired) { }",
    "",
    "method expect(b:Procedure0) notToRaise (undesired) { }",
    "",
    "method expect(s) toHaveType (desired:Type) { }",
    "",
    "method expect(s) notToHaveType (undesired:Type) { }",
    "",
    "method describe (name) with (block) { }",
    "",
    "method specify (name:String) by (block) { }",
    "",
    "method numberOfErrorsToRerun:=(_) { }" ];
}
function gracecode_nospec() {
  importedModules["nospec"] = this;
  var module$nospec = this;
  this.definitionModule = "nospec";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_nospec_1");
  this.outer_nospec_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(6);    // reuse call
  var initFun0 = request(var_prelude, "methods$build(3)", [null], this, [], []);  // compileReuseCall
  setLineNumber(8);    // compilenode typedec
  // Type decl Procedure0
  var func2 = function(argcv) {    // method Procedure0, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(8);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3 = selfRequest(this, "Procedure0", [0]);
    return call3;
  };    // end of method Procedure0
  function memofunc2(argcv) {
      if (! this.data["memo$Procedure0"])    // parameterless memo function
          this.data["memo$Procedure0"] = func2.call(this, argcv);
      return this.data["memo$Procedure0"];
  };
  this.methods["Procedure0"] = memofunc2;
  memofunc2.methodName = "Procedure0";
  memofunc2.paramCounts = [0];
  memofunc2.paramNames = [];
  memofunc2.definitionLine = 1;
  memofunc2.definitionModule = "nospec";
  func2.methodName = "Procedure0";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 1;
  func2.definitionModule = "nospec";
  var func4 = function(argcv, var_bb, var_str) {    // method expect(_)orSay(_), line 10
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)orSay(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `expect(_)orSay(_)`", "Boolean");
    assertTypeOrMsg(var_str, var_String, "argument 2 in request of `expect(_)orSay(_)`", "String");
    return GraceDone;
  };    // end of method expect(_)orSay(_)
  func4.paramTypes = [];
  func4.paramTypes.push([type_Boolean, "bb"]);
  func4.paramTypes.push([type_String, "str"]);
  this.methods["expect(1)orSay(1)"] = func4;
  func4.methodName = "expect(1)orSay(1)";
  func4.paramCounts = [1, 1];
  func4.paramNames = ["bb", "str"];
  func4.definitionLine = 10;
  func4.definitionModule = "nospec";
  var func5 = function(argcv, var_a, var_b, var_str) {    // method expect(_)toBe(_)orSay(_), line 12
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)toBe(_)orSay(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_str, var_String, "argument 3 in request of `expect(_)toBe(_)orSay(_)`", "String");
    return GraceDone;
  };    // end of method expect(_)toBe(_)orSay(_)
  func5.paramTypes = [];
  func5.paramTypes.push([]);
  func5.paramTypes.push([]);
  func5.paramTypes.push([type_String, "str"]);
  this.methods["expect(1)toBe(1)orSay(1)"] = func5;
  func5.methodName = "expect(1)toBe(1)orSay(1)";
  func5.paramCounts = [1, 1, 1];
  func5.paramNames = ["a", "b", "str"];
  func5.definitionLine = 12;
  func5.definitionModule = "nospec";
  var func6 = function(argcv, var_a, var_b) {    // method expect(_)toBe(_), line 14
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toBe(_)", 0, numArgs - 2);
    }
    return GraceDone;
  };    // end of method expect(_)toBe(_)
  this.methods["expect(1)toBe(1)"] = func6;
  func6.methodName = "expect(1)toBe(1)";
  func6.paramCounts = [1, 1];
  func6.paramNames = ["a", "b"];
  func6.definitionLine = 14;
  func6.definitionModule = "nospec";
  var func7 = function(argcv, var_a, var_b) {    // method expect(_)notToBe(_), line 16
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToBe(_)", 0, numArgs - 2);
    }
    return GraceDone;
  };    // end of method expect(_)notToBe(_)
  this.methods["expect(1)notToBe(1)"] = func7;
  func7.methodName = "expect(1)notToBe(1)";
  func7.paramCounts = [1, 1];
  func7.paramNames = ["a", "b"];
  func7.definitionLine = 16;
  func7.definitionModule = "nospec";
  var func8 = function(argcv, var_n1, var_n2, var_epsilon) {    // method expect(_)toBe(_)within(_), line 18
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)toBe(_)within(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_n1, var_Number, "argument 1 in request of `expect(_)toBe(_)within(_)`", "Number");
    assertTypeOrMsg(var_n2, var_Number, "argument 2 in request of `expect(_)toBe(_)within(_)`", "Number");
    return GraceDone;
  };    // end of method expect(_)toBe(_)within(_)
  func8.paramTypes = [];
  func8.paramTypes.push([type_Number, "n1"]);
  func8.paramTypes.push([type_Number, "n2"]);
  func8.paramTypes.push([]);
  this.methods["expect(1)toBe(1)within(1)"] = func8;
  func8.methodName = "expect(1)toBe(1)within(1)";
  func8.paramCounts = [1, 1, 1];
  func8.paramNames = ["n1", "n2", "epsilon"];
  func8.definitionLine = 18;
  func8.definitionModule = "nospec";
  var func9 = function(argcv, var_b, var_desired) {    // method expect(_)toRaise(_), line 20
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(20);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call10 = selfRequest(this, "Procedure0", [0]);
    assertTypeOrMsg(var_b, call10, "argument 1 in request of `expect(_)toRaise(_)`", "Procedure0");
    return GraceDone;
  };    // end of method expect(_)toRaise(_)
  this.methods["expect(1)toRaise(1)"] = func9;
  func9.methodName = "expect(1)toRaise(1)";
  func9.paramCounts = [1, 1];
  func9.paramNames = ["b", "desired"];
  func9.definitionLine = 20;
  func9.definitionModule = "nospec";
  var func11 = function(argcv, var_b, var_undesired) {    // method expect(_)notToRaise(_), line 22
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(22);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call12 = selfRequest(this, "Procedure0", [0]);
    assertTypeOrMsg(var_b, call12, "argument 1 in request of `expect(_)notToRaise(_)`", "Procedure0");
    return GraceDone;
  };    // end of method expect(_)notToRaise(_)
  this.methods["expect(1)notToRaise(1)"] = func11;
  func11.methodName = "expect(1)notToRaise(1)";
  func11.paramCounts = [1, 1];
  func11.paramNames = ["b", "undesired"];
  func11.definitionLine = 22;
  func11.definitionModule = "nospec";
  var func13 = function(argcv, var_s, var_desired) {    // method expect(_)toHaveType(_), line 24
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toHaveType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_desired, var_Type, "argument 2 in request of `expect(_)toHaveType(_)`", "Type");
    return GraceDone;
  };    // end of method expect(_)toHaveType(_)
  func13.paramTypes = [];
  func13.paramTypes.push([]);
  func13.paramTypes.push([type_Type, "desired"]);
  this.methods["expect(1)toHaveType(1)"] = func13;
  func13.methodName = "expect(1)toHaveType(1)";
  func13.paramCounts = [1, 1];
  func13.paramNames = ["s", "desired"];
  func13.definitionLine = 24;
  func13.definitionModule = "nospec";
  var func14 = function(argcv, var_s, var_undesired) {    // method expect(_)notToHaveType(_), line 26
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToHaveType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_undesired, var_Type, "argument 2 in request of `expect(_)notToHaveType(_)`", "Type");
    return GraceDone;
  };    // end of method expect(_)notToHaveType(_)
  func14.paramTypes = [];
  func14.paramTypes.push([]);
  func14.paramTypes.push([type_Type, "undesired"]);
  this.methods["expect(1)notToHaveType(1)"] = func14;
  func14.methodName = "expect(1)notToHaveType(1)";
  func14.paramCounts = [1, 1];
  func14.paramNames = ["s", "undesired"];
  func14.definitionLine = 26;
  func14.definitionModule = "nospec";
  var func15 = function(argcv, var_name, var_block) {    // method describe(_)with(_), line 28
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("describe(_)with(_)", 0, numArgs - 2);
    }
    return GraceDone;
  };    // end of method describe(_)with(_)
  this.methods["describe(1)with(1)"] = func15;
  func15.methodName = "describe(1)with(1)";
  func15.paramCounts = [1, 1];
  func15.paramNames = ["name", "block"];
  func15.definitionLine = 28;
  func15.definitionModule = "nospec";
  var func16 = function(argcv, var_name, var_block) {    // method specify(_)by(_), line 30
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("specify(_)by(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `specify(_)by(_)`", "String");
    return GraceDone;
  };    // end of method specify(_)by(_)
  func16.paramTypes = [];
  func16.paramTypes.push([type_String, "name"]);
  func16.paramTypes.push([]);
  this.methods["specify(1)by(1)"] = func16;
  func16.methodName = "specify(1)by(1)";
  func16.paramCounts = [1, 1];
  func16.paramNames = ["name", "block"];
  func16.definitionLine = 30;
  func16.definitionModule = "nospec";
  var func17 = function(argcv, var___95____95__1) {    // method numberOfErrorsToRerun:=(_), line 32
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("numberOfErrorsToRerun:=(_)", 0, numArgs - 1);
    }
    return GraceDone;
  };    // end of method numberOfErrorsToRerun:=(_)
  this.methods["numberOfErrorsToRerun:=(1)"] = func17;
  func17.methodName = "numberOfErrorsToRerun:=(1)";
  func17.paramCounts = [1];
  func17.paramNames = ["__1"];
  func17.definitionLine = 32;
  func17.definitionModule = "nospec";
  initFun0.call(this);
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_nospec = gracecode_nospec;
if (typeof window !== "undefined")
  window.gracecode_nospec = gracecode_nospec;
gracecode_nospec.imports = ["standardGrace"];
gracecode_nospec.definitionModule = "nospec";
gracecode_nospec.definitionLine = 1;
