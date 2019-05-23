var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["notest"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmethodtypes-of:Procedure0:\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/notest.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n binding\n collection\n collections\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n failBecause(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n test(1)by(1)\n testSuite(1)\n testSuiteNamed(1)with(1)\n valueOf(1)\npublicMethodTypes:\n assert(b:Procedure0)shouldRaise(desired)\n assert(b:Procedure0)shouldntRaise(undesired)\n assert(bb:Boolean)\n assert(bb:Boolean)description(str:String)\n assert(n1:Number)shouldEqual(n2:Number)within(epsilon)\n assert(s1:Object)shouldBe(s2:Object)\n assert(s1:Object)shouldntBe(s2:Object)\n assert(s:Object)hasType(desired:Type)\n assertType(T:Type)describes(value)\n deny(bb:Boolean)\n deny(bb:Boolean)description(str:String)\n deny(s:Object)hasType(undesired:Type)\n failBecause(reason)\n test(name:String)by(block)\n testSuite(block)\n testSuiteNamed(name)with(block)\ntypes:\n Procedure0\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["notest"] = [
    "// This module is a subsitute for the minitest dialect.",
    "// It does no testing at all.  It exists so that student code that",
    "// depends on minitest can be run by the instuctor under gUnit,",
    "// without getting confounding results from the minitest tests.",
    "",
    "inherit prelude.methods",
    "",
    "type Procedure0 = prelude.Procedure0",
    "",
    "method assert(bb:Boolean) description(str:String) { }",
    "",
    "method deny(bb:Boolean) description(str:String) { }",
    "",
    "method assert(bb:Boolean) { }",
    "",
    "method deny(bb:Boolean) { }",
    "",
    "method assert(s1:Object) shouldBe (s2:Object) { }",
    "",
    "method assert(s1:Object) shouldntBe (s2:Object) { }",
    "",
    "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon) { }",
    "",
    "method assert(b:Procedure0) shouldRaise (desired) { }",
    "",
    "method assert(b:Procedure0) shouldntRaise (undesired) { }",
    "",
    "method assert(s:Object) hasType (desired:Type) { }",
    "",
    "method deny(s:Object) hasType (undesired:Type) { }",
    "",
    "method assertType(T:Type) describes (value) { }",
    "",
    "method failBecause(reason) { }",
    "",
    "method testSuiteNamed (name) with (block) { }",
    "",
    "method testSuite (block) { }",
    "",
    "method test(name:String) by(block) { }",
    "" ];
}
function gracecode_notest() {
  importedModules["notest"] = this;
  var module$notest = this;
  this.definitionModule = "notest";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_notest_1");
  this.outer_notest_1 = var_prelude;
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
    // call case 2: outer request
    var call3 = selfRequest(var_prelude, "Procedure0", [0]);
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
  memofunc2.definitionModule = "notest";
  func2.methodName = "Procedure0";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 1;
  func2.definitionModule = "notest";
  var func4 = function(argcv, var_bb, var_str) {    // method assert(_)description(_), line 10
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)description(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `assert(_)description(_)`", "Boolean");
    assertTypeOrMsg(var_str, var_String, "argument 2 in request of `assert(_)description(_)`", "String");
    return GraceDone;
  };    // end of method assert(_)description(_)
  func4.paramTypes = [];
  func4.paramTypes.push([type_Boolean, "bb"]);
  func4.paramTypes.push([type_String, "str"]);
  this.methods["assert(1)description(1)"] = func4;
  func4.methodName = "assert(1)description(1)";
  func4.paramCounts = [1, 1];
  func4.paramNames = ["bb", "str"];
  func4.definitionLine = 10;
  func4.definitionModule = "notest";
  var func5 = function(argcv, var_bb, var_str) {    // method deny(_)description(_), line 12
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("deny(_)description(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `deny(_)description(_)`", "Boolean");
    assertTypeOrMsg(var_str, var_String, "argument 2 in request of `deny(_)description(_)`", "String");
    return GraceDone;
  };    // end of method deny(_)description(_)
  func5.paramTypes = [];
  func5.paramTypes.push([type_Boolean, "bb"]);
  func5.paramTypes.push([type_String, "str"]);
  this.methods["deny(1)description(1)"] = func5;
  func5.methodName = "deny(1)description(1)";
  func5.paramCounts = [1, 1];
  func5.paramNames = ["bb", "str"];
  func5.definitionLine = 12;
  func5.definitionModule = "notest";
  var func6 = function(argcv, var_bb) {    // method assert(_), line 14
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("assert(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `assert(_)`", "Boolean");
    return GraceDone;
  };    // end of method assert(_)
  func6.paramTypes = [];
  func6.paramTypes.push([type_Boolean, "bb"]);
  this.methods["assert(1)"] = func6;
  func6.methodName = "assert(1)";
  func6.paramCounts = [1];
  func6.paramNames = ["bb"];
  func6.definitionLine = 14;
  func6.definitionModule = "notest";
  var func7 = function(argcv, var_bb) {    // method deny(_), line 16
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("deny(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `deny(_)`", "Boolean");
    return GraceDone;
  };    // end of method deny(_)
  func7.paramTypes = [];
  func7.paramTypes.push([type_Boolean, "bb"]);
  this.methods["deny(1)"] = func7;
  func7.methodName = "deny(1)";
  func7.paramCounts = [1];
  func7.paramNames = ["bb"];
  func7.definitionLine = 16;
  func7.definitionModule = "notest";
  var func8 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldBe(_), line 18
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldBe(_)`", "Object");
    return GraceDone;
  };    // end of method assert(_)shouldBe(_)
  func8.paramTypes = [];
  func8.paramTypes.push([type_Object, "s1"]);
  func8.paramTypes.push([type_Object, "s2"]);
  this.methods["assert(1)shouldBe(1)"] = func8;
  func8.methodName = "assert(1)shouldBe(1)";
  func8.paramCounts = [1, 1];
  func8.paramNames = ["s1", "s2"];
  func8.definitionLine = 18;
  func8.definitionModule = "notest";
  var func9 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldntBe(_), line 20
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldntBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldntBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldntBe(_)`", "Object");
    return GraceDone;
  };    // end of method assert(_)shouldntBe(_)
  func9.paramTypes = [];
  func9.paramTypes.push([type_Object, "s1"]);
  func9.paramTypes.push([type_Object, "s2"]);
  this.methods["assert(1)shouldntBe(1)"] = func9;
  func9.methodName = "assert(1)shouldntBe(1)";
  func9.paramCounts = [1, 1];
  func9.paramNames = ["s1", "s2"];
  func9.definitionLine = 20;
  func9.definitionModule = "notest";
  var func10 = function(argcv, var_n1, var_n2, var_epsilon) {    // method assert(_)shouldEqual(_)within(_), line 22
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("assert(_)shouldEqual(_)within(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_n1, var_Number, "argument 1 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
    assertTypeOrMsg(var_n2, var_Number, "argument 2 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
    return GraceDone;
  };    // end of method assert(_)shouldEqual(_)within(_)
  func10.paramTypes = [];
  func10.paramTypes.push([type_Number, "n1"]);
  func10.paramTypes.push([type_Number, "n2"]);
  func10.paramTypes.push([]);
  this.methods["assert(1)shouldEqual(1)within(1)"] = func10;
  func10.methodName = "assert(1)shouldEqual(1)within(1)";
  func10.paramCounts = [1, 1, 1];
  func10.paramNames = ["n1", "n2", "epsilon"];
  func10.definitionLine = 22;
  func10.definitionModule = "notest";
  var func11 = function(argcv, var_b, var_desired) {    // method assert(_)shouldRaise(_), line 24
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(24);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call12 = selfRequest(this, "Procedure0", [0]);
    assertTypeOrMsg(var_b, call12, "argument 1 in request of `assert(_)shouldRaise(_)`", "Procedure0");
    return GraceDone;
  };    // end of method assert(_)shouldRaise(_)
  this.methods["assert(1)shouldRaise(1)"] = func11;
  func11.methodName = "assert(1)shouldRaise(1)";
  func11.paramCounts = [1, 1];
  func11.paramNames = ["b", "desired"];
  func11.definitionLine = 24;
  func11.definitionModule = "notest";
  var func13 = function(argcv, var_b, var_undesired) {    // method assert(_)shouldntRaise(_), line 26
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldntRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(26);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call14 = selfRequest(this, "Procedure0", [0]);
    assertTypeOrMsg(var_b, call14, "argument 1 in request of `assert(_)shouldntRaise(_)`", "Procedure0");
    return GraceDone;
  };    // end of method assert(_)shouldntRaise(_)
  this.methods["assert(1)shouldntRaise(1)"] = func13;
  func13.methodName = "assert(1)shouldntRaise(1)";
  func13.paramCounts = [1, 1];
  func13.paramNames = ["b", "undesired"];
  func13.definitionLine = 26;
  func13.definitionModule = "notest";
  var func15 = function(argcv, var_s, var_desired) {    // method assert(_)hasType(_), line 28
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)hasType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s, var_Object, "argument 1 in request of `assert(_)hasType(_)`", "Object");
    assertTypeOrMsg(var_desired, var_Type, "argument 2 in request of `assert(_)hasType(_)`", "Type");
    return GraceDone;
  };    // end of method assert(_)hasType(_)
  func15.paramTypes = [];
  func15.paramTypes.push([type_Object, "s"]);
  func15.paramTypes.push([type_Type, "desired"]);
  this.methods["assert(1)hasType(1)"] = func15;
  func15.methodName = "assert(1)hasType(1)";
  func15.paramCounts = [1, 1];
  func15.paramNames = ["s", "desired"];
  func15.definitionLine = 28;
  func15.definitionModule = "notest";
  var func16 = function(argcv, var_s, var_undesired) {    // method deny(_)hasType(_), line 30
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("deny(_)hasType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s, var_Object, "argument 1 in request of `deny(_)hasType(_)`", "Object");
    assertTypeOrMsg(var_undesired, var_Type, "argument 2 in request of `deny(_)hasType(_)`", "Type");
    return GraceDone;
  };    // end of method deny(_)hasType(_)
  func16.paramTypes = [];
  func16.paramTypes.push([type_Object, "s"]);
  func16.paramTypes.push([type_Type, "undesired"]);
  this.methods["deny(1)hasType(1)"] = func16;
  func16.methodName = "deny(1)hasType(1)";
  func16.paramCounts = [1, 1];
  func16.paramNames = ["s", "undesired"];
  func16.definitionLine = 30;
  func16.definitionModule = "notest";
  var func17 = function(argcv, var_T, var_value) {    // method assertType(_)describes(_), line 32
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assertType(_)describes(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_T, var_Type, "argument 1 in request of `assertType(_)describes(_)`", "Type");
    return GraceDone;
  };    // end of method assertType(_)describes(_)
  func17.paramTypes = [];
  func17.paramTypes.push([type_Type, "T"]);
  func17.paramTypes.push([]);
  this.methods["assertType(1)describes(1)"] = func17;
  func17.methodName = "assertType(1)describes(1)";
  func17.paramCounts = [1, 1];
  func17.paramNames = ["T", "value"];
  func17.definitionLine = 32;
  func17.definitionModule = "notest";
  var func18 = function(argcv, var_reason) {    // method failBecause(_), line 34
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("failBecause(_)", 0, numArgs - 1);
    }
    return GraceDone;
  };    // end of method failBecause(_)
  this.methods["failBecause(1)"] = func18;
  func18.methodName = "failBecause(1)";
  func18.paramCounts = [1];
  func18.paramNames = ["reason"];
  func18.definitionLine = 34;
  func18.definitionModule = "notest";
  var func19 = function(argcv, var_name, var_block) {    // method testSuiteNamed(_)with(_), line 36
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("testSuiteNamed(_)with(_)", 0, numArgs - 2);
    }
    return GraceDone;
  };    // end of method testSuiteNamed(_)with(_)
  this.methods["testSuiteNamed(1)with(1)"] = func19;
  func19.methodName = "testSuiteNamed(1)with(1)";
  func19.paramCounts = [1, 1];
  func19.paramNames = ["name", "block"];
  func19.definitionLine = 36;
  func19.definitionModule = "notest";
  var func20 = function(argcv, var_block) {    // method testSuite(_), line 38
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("testSuite(_)", 0, numArgs - 1);
    }
    return GraceDone;
  };    // end of method testSuite(_)
  this.methods["testSuite(1)"] = func20;
  func20.methodName = "testSuite(1)";
  func20.paramCounts = [1];
  func20.paramNames = ["block"];
  func20.definitionLine = 38;
  func20.definitionModule = "notest";
  var func21 = function(argcv, var_name, var_block) {    // method test(_)by(_), line 40
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("test(_)by(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `test(_)by(_)`", "String");
    return GraceDone;
  };    // end of method test(_)by(_)
  func21.paramTypes = [];
  func21.paramTypes.push([type_String, "name"]);
  func21.paramTypes.push([]);
  this.methods["test(1)by(1)"] = func21;
  func21.methodName = "test(1)by(1)";
  func21.paramCounts = [1, 1];
  func21.paramNames = ["name", "block"];
  func21.definitionLine = 40;
  func21.definitionModule = "notest";
  initFun0.call(this);
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_notest = gracecode_notest;
if (typeof window !== "undefined")
  window.gracecode_notest = gracecode_notest;
gracecode_notest.imports = ["standardGrace"];
gracecode_notest.definitionModule = "notest";
gracecode_notest.definitionLine = 1;
