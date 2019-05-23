var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["minitest"] = "classes:\nconfidential:\n MinitestError\n currentSetupBlockForTesting\n currentSetupBlockForTesting:=(currentSetupBlockForTesting': Unknown) \u2192 Done\n currentTestBlockForTesting\n currentTestBlockForTesting:=(currentTestBlockForTesting': Unknown) \u2192 Done\n currentTestInThisEvaluation\n currentTestInThisEvaluation:=(currentTestInThisEvaluation': Unknown) \u2192 Done\n currentTestSuiteForDialect\n currentTestSuiteForDialect:=(currentTestSuiteForDialect': Unknown) \u2192 Done\n errorsToBeRerun\n errorsToBeRerun:=(errorsToBeRerun': Unknown) \u2192 Done\n mtAssertion\n nullBlock\n nullSuite\ndialect:\n standardGrace\nfresh-methods:\n testCaseNamed(1)setupIn(1)asTestNumber(1)\nfresh:testCaseNamed(1)setupIn(1)asTestNumber(1):\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldRaise(1)mentioning(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n countOneAssertion\n currentResult\n currentResult:=(1)\n currentResult:=(_)\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n guSetup\n isMe(1)\n methodsIn(1)missingFrom(1)\n myIdentityHash\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\nmethodtypes-of:Block:\nmodules:\n collectionsPrelude\n gUnit\n mirrors\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/minitest.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n Block\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldRaise(1)mentioning(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n binding\n collection\n collections\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n failBecause(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n test(1)by(1)\n testCaseNamed(1)setupIn(1)asTestNumber(1)\n testSuite(1)\n testSuiteNamed(1)with(1)\n valueOf(1)\npublicMethodTypes:\n assert(b:Block)shouldRaise(desired:ExceptionKind)\n assert(b:Block)shouldRaise(desired:ExceptionKind)mentioning(error:String)\n assert(b:Block)shouldntRaise(undesired:ExceptionKind)\n assert(bb:Boolean)\n assert(bb:Boolean)description(str:String)\n assert(n1:Number)shouldEqual(n2:Number)within(epsilon:Number)\n assert(s1:Object)shouldBe(s2:Object)\n assert(s1:Object)shouldntBe(s2:Object)\n assert(s:Unknown)hasType(desired:Type)\n assertType(T:Type)describes(value)\n deny(bb:Boolean)\n deny(bb:Boolean)description(str:String)\n deny(s:Unknown)hasType(undesired:Type)\n doNotRerunErrors\n doRerunErrors\n failBecause(reason)\n numberOfErrorsToRerun \u2192 Number\n numberOfErrorsToRerun:=(n:Number)\n test(name:String)by(block:Block)\n testCaseNamed(name')setupIn(setupBlock)asTestNumber(number) \u2192 gu.TestCase\n testSuite(block:Block)\n testSuiteNamed(name:String)with(block:Block)\ntypes:\n Block\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["minitest"] = [
    "import \"gUnit\" as gu",
    "",
    "inherit prelude.methods",
    "",
    "def MinitestError = prelude.ProgrammingError.refine \"MinitestError\"",
    "type Block = prelude.Procedure0",
    "",
    "def nullSuite = prelude.Singleton.named \"nullSuite\"",
    "def nullBlock = prelude.Singleton.named \"nullBlock\"",
    "",
    "var currentTestSuiteForDialect := nullSuite",
    "var currentSetupBlockForTesting := nullBlock",
    "var currentTestBlockForTesting := 0",
    "var currentTestInThisEvaluation := 0",
    "var errorsToBeRerun := true",
    "",
    "method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }",
    "method numberOfErrorsToRerun:=(n:Number) {",
    "    gu.numberOfErrorsToRerun := n",
    "}",
    "",
    "def mtAssertion = object {",
    "    inherit gu.assertion",
    "    var currentResult is writable := object {",
    "        method countOneAssertion {",
    "            print \"countOneAssertion requested on dummy result\"",
    "        }",
    "    }",
    "",
    "    method countOneAssertion {",
    "        currentResult.countOneAssertion",
    "    }",
    "}",
    "",
    "method assert(bb:Boolean) description(str:String) {",
    "    mtAssertion.assert(bb) description(str)",
    "}",
    "",
    "method deny(bb:Boolean) description(str:String) {",
    "    mtAssertion.deny(bb) description(str)",
    "}",
    "",
    "method assert(bb:Boolean) {",
    "    mtAssertion.assert(bb)",
    "}",
    "",
    "method deny(bb:Boolean) {",
    "    mtAssertion.deny(bb)",
    "}",
    "",
    "method assert(s1:Object) shouldBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldBe (s2)",
    "}",
    "",
    "method assert(s1:Object) shouldntBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldntBe (s2)",
    "}",
    "",
    "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
    "    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)",
    "}",
    "",
    "method assert(b:Block) shouldRaise (desired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldRaise (desired)",
    "}",
    "",
    "method assert(b:Block) shouldRaise (desired:prelude.ExceptionKind) mentioning(error:String){",
    "    mtAssertion.assert(b) shouldRaise (desired) mentioning(error)",
    "}",
    "",
    "method assert(b:Block) shouldntRaise (undesired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldntRaise (undesired)",
    "}",
    "",
    "method assert(s:Unknown) hasType (desired:Type) {",
    "    mtAssertion.assert(s) hasType (desired)",
    "}",
    "",
    "method deny(s:Unknown) hasType (undesired:Type) {",
    "    mtAssertion.deny(s) hasType (undesired)",
    "}",
    "",
    "method assertType(T:Type) describes (value) {",
    "    mtAssertion.assertType(T) describes (value)",
    "}",
    "",
    "method failBecause(reason) {",
    "    mtAssertion.assert(false) description(reason)",
    "}",
    "",
    "method testSuiteNamed (name:String) with (block:Block) {",
    "    if (nullSuite ≠ currentTestSuiteForDialect) then {",
    "        MinitestError.raise \"a testSuite cannot be created inside a testSuite\"",
    "    }",
    "    currentTestSuiteForDialect := gu.testSuite.empty",
    "    currentTestSuiteForDialect.name := name",
    "    currentSetupBlockForTesting := block",
    "    currentTestInThisEvaluation := 0",
    "    block.apply",
    "    currentSetupBlockForTesting := nullBlock",
    "    currentTestSuiteForDialect.runAndPrintResults",
    "    currentTestSuiteForDialect := nullSuite",
    "    currentTestBlockForTesting := 0",
    "}",
    "",
    "method doNotRerunErrors { errorsToBeRerun := false }",
    "method doRerunErrors { errorsToBeRerun := true }",
    "",
    "method testSuite (block:Block) {",
    "    testSuiteNamed \"\" with (block)",
    "}",
    "",
    "method test(name:String) by(block:Block) {",
    "    if (nullSuite == currentTestSuiteForDialect) then {",
    "        MinitestError.raise \"a test can be created only within a testSuite\"",
    "    }",
    "    currentTestInThisEvaluation := currentTestInThisEvaluation + 1",
    "    if (nullBlock ≠ currentSetupBlockForTesting) then {",
    "        currentTestSuiteForDialect.add(testCaseNamed(name)",
    "            setupIn(currentSetupBlockForTesting)",
    "            asTestNumber(currentTestInThisEvaluation))",
    "    } elseif { currentTestInThisEvaluation == currentTestBlockForTesting } then {",
    "        block.apply",
    "    }",
    "}",
    "",
    "method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase {",
    "    object {",
    "        inherit gu.testCaseNamed(name') alias guSetup = setup",
    "",
    "        method setup { ",
    "            guSetup",
    "            currentTestBlockForTesting := number",
    "            currentTestInThisEvaluation := 0",
    "            setupBlock.apply",
    "        }",
    "",
    "        method teardown {",
    "            currentTestBlockForTesting := 0",
    "        }",
    "        ",
    "        method currentResult:= (r) is override {",
    "            mtAssertion.currentResult := r",
    "        }",
    "        ",
    "        method runTest is override {",
    "            // for minitest, the test is run in setup",
    "        }",
    "    }",
    "}",
    "" ];
}
function gracecode_minitest() {
  importedModules["minitest"] = this;
  var module$minitest = this;
  this.definitionModule = "minitest";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_minitest_1");
  this.outer_minitest_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "gUnit" as gu
  if (typeof gracecode_gUnit == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module gUnit"));
  var var_gu = do_import("gUnit", gracecode_gUnit);
  var func0 = function(argcv) {     // accessor method gu
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("gu", 0, numArgs - 0);
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    return var_gu;
  };    // end of method gu
  this.methods["gu"] = func0;
  func0.methodName = "gu";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "minitest";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(3);    // reuse call
  var initFun1 = request(var_prelude, "methods$build(3)", [null], this, [], []);  // compileReuseCall
  setLineNumber(6);    // compilenode typedec
  // Type decl Block
  var func3 = function(argcv) {    // method Block, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(6);    // compilenode member
    // call case 2: outer request
    var call4 = selfRequest(var_prelude, "Procedure0", [0]);
    return call4;
  };    // end of method Block
  function memofunc3(argcv) {
      if (! this.data["memo$Block"])    // parameterless memo function
          this.data["memo$Block"] = func3.call(this, argcv);
      return this.data["memo$Block"];
  };
  this.methods["Block"] = memofunc3;
  memofunc3.methodName = "Block";
  memofunc3.paramCounts = [0];
  memofunc3.paramNames = [];
  memofunc3.definitionLine = 1;
  memofunc3.definitionModule = "minitest";
  func3.methodName = "Block";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 1;
  func3.definitionModule = "minitest";
  var func5 = function(argcv) {    // method numberOfErrorsToRerun, line 17
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("numberOfErrorsToRerun", 0, numArgs - 0);
    }
    setLineNumber(17);    // compilenode member
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call6 = request(var_gu, "numberOfErrorsToRerun", [0]);
    assertTypeOrMsg(call6, var_Number, "result of method numberOfErrorsToRerun", "Number");
    return call6;
  };    // end of method numberOfErrorsToRerun
  this.methods["numberOfErrorsToRerun"] = func5;
  func5.methodName = "numberOfErrorsToRerun";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 17;
  func5.definitionModule = "minitest";
  var func7 = function(argcv, var_n) {    // method numberOfErrorsToRerun:=(_), line 18
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("numberOfErrorsToRerun:=(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_n, var_Number, "argument to request of `numberOfErrorsToRerun:=(_)`", "Number");
    setLineNumber(19);    // compilenode call
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call8 = request(var_gu, "numberOfErrorsToRerun:=(1)", [1], var_n);
    return call8;
  };    // end of method numberOfErrorsToRerun:=(_)
  func7.paramTypes = [];
  func7.paramTypes.push([type_Number, "n"]);
  this.methods["numberOfErrorsToRerun:=(1)"] = func7;
  func7.methodName = "numberOfErrorsToRerun:=(1)";
  func7.paramCounts = [1];
  func7.paramNames = ["n"];
  func7.definitionLine = 18;
  func7.definitionModule = "minitest";
  var func9 = function(argcv, var_bb, var_str) {    // method assert(_)description(_), line 35
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)description(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `assert(_)description(_)`", "Boolean");
    assertTypeOrMsg(var_str, var_String, "argument 2 in request of `assert(_)description(_)`", "String");
    setLineNumber(36);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call10 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], var_bb, var_str);
    return call10;
  };    // end of method assert(_)description(_)
  func9.paramTypes = [];
  func9.paramTypes.push([type_Boolean, "bb"]);
  func9.paramTypes.push([type_String, "str"]);
  this.methods["assert(1)description(1)"] = func9;
  func9.methodName = "assert(1)description(1)";
  func9.paramCounts = [1, 1];
  func9.paramNames = ["bb", "str"];
  func9.definitionLine = 35;
  func9.definitionModule = "minitest";
  var func11 = function(argcv, var_bb, var_str) {    // method deny(_)description(_), line 39
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("deny(_)description(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `deny(_)description(_)`", "Boolean");
    assertTypeOrMsg(var_str, var_String, "argument 2 in request of `deny(_)description(_)`", "String");
    setLineNumber(40);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call12 = request(var_mtAssertion, "deny(1)description(1)", [1, 1], var_bb, var_str);
    return call12;
  };    // end of method deny(_)description(_)
  func11.paramTypes = [];
  func11.paramTypes.push([type_Boolean, "bb"]);
  func11.paramTypes.push([type_String, "str"]);
  this.methods["deny(1)description(1)"] = func11;
  func11.methodName = "deny(1)description(1)";
  func11.paramCounts = [1, 1];
  func11.paramNames = ["bb", "str"];
  func11.definitionLine = 39;
  func11.definitionModule = "minitest";
  var func13 = function(argcv, var_bb) {    // method assert(_), line 43
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("assert(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `assert(_)`", "Boolean");
    setLineNumber(44);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call14 = request(var_mtAssertion, "assert(1)", [1], var_bb);
    return call14;
  };    // end of method assert(_)
  func13.paramTypes = [];
  func13.paramTypes.push([type_Boolean, "bb"]);
  this.methods["assert(1)"] = func13;
  func13.methodName = "assert(1)";
  func13.paramCounts = [1];
  func13.paramNames = ["bb"];
  func13.definitionLine = 43;
  func13.definitionModule = "minitest";
  var func15 = function(argcv, var_bb) {    // method deny(_), line 47
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("deny(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `deny(_)`", "Boolean");
    setLineNumber(48);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call16 = request(var_mtAssertion, "deny(1)", [1], var_bb);
    return call16;
  };    // end of method deny(_)
  func15.paramTypes = [];
  func15.paramTypes.push([type_Boolean, "bb"]);
  this.methods["deny(1)"] = func15;
  func15.methodName = "deny(1)";
  func15.paramCounts = [1];
  func15.paramNames = ["bb"];
  func15.definitionLine = 47;
  func15.definitionModule = "minitest";
  var func17 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldBe(_), line 51
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldBe(_)`", "Object");
    setLineNumber(52);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call18 = request(var_mtAssertion, "assert(1)shouldBe(1)", [1, 1], var_s1, var_s2);
    return call18;
  };    // end of method assert(_)shouldBe(_)
  func17.paramTypes = [];
  func17.paramTypes.push([type_Object, "s1"]);
  func17.paramTypes.push([type_Object, "s2"]);
  this.methods["assert(1)shouldBe(1)"] = func17;
  func17.methodName = "assert(1)shouldBe(1)";
  func17.paramCounts = [1, 1];
  func17.paramNames = ["s1", "s2"];
  func17.definitionLine = 51;
  func17.definitionModule = "minitest";
  var func19 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldntBe(_), line 55
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldntBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldntBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldntBe(_)`", "Object");
    setLineNumber(56);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call20 = request(var_mtAssertion, "assert(1)shouldntBe(1)", [1, 1], var_s1, var_s2);
    return call20;
  };    // end of method assert(_)shouldntBe(_)
  func19.paramTypes = [];
  func19.paramTypes.push([type_Object, "s1"]);
  func19.paramTypes.push([type_Object, "s2"]);
  this.methods["assert(1)shouldntBe(1)"] = func19;
  func19.methodName = "assert(1)shouldntBe(1)";
  func19.paramCounts = [1, 1];
  func19.paramNames = ["s1", "s2"];
  func19.definitionLine = 55;
  func19.definitionModule = "minitest";
  var func21 = function(argcv, var_n1, var_n2, var_epsilon) {    // method assert(_)shouldEqual(_)within(_), line 59
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("assert(_)shouldEqual(_)within(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_n1, var_Number, "argument 1 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
    assertTypeOrMsg(var_n2, var_Number, "argument 2 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
    assertTypeOrMsg(var_epsilon, var_Number, "argument 3 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
    setLineNumber(60);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call22 = request(var_mtAssertion, "assert(1)shouldEqual(1)within(1)", [1, 1, 1], var_n1, var_n2, var_epsilon);
    return call22;
  };    // end of method assert(_)shouldEqual(_)within(_)
  func21.paramTypes = [];
  func21.paramTypes.push([type_Number, "n1"]);
  func21.paramTypes.push([type_Number, "n2"]);
  func21.paramTypes.push([type_Number, "epsilon"]);
  this.methods["assert(1)shouldEqual(1)within(1)"] = func21;
  func21.methodName = "assert(1)shouldEqual(1)within(1)";
  func21.paramCounts = [1, 1, 1];
  func21.paramNames = ["n1", "n2", "epsilon"];
  func21.definitionLine = 59;
  func21.definitionModule = "minitest";
  var func23 = function(argcv, var_b, var_desired) {    // method assert(_)shouldRaise(_), line 63
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(63);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call24 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call24, "argument 1 in request of `assert(_)shouldRaise(_)`", "Block");
    // call case 2: outer request
    var call25 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_desired, call25, "argument 2 in request of `assert(_)shouldRaise(_)`", "ExceptionKind");
    setLineNumber(64);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call26 = request(var_mtAssertion, "assert(1)shouldRaise(1)", [1, 1], var_b, var_desired);
    return call26;
  };    // end of method assert(_)shouldRaise(_)
  this.methods["assert(1)shouldRaise(1)"] = func23;
  func23.methodName = "assert(1)shouldRaise(1)";
  func23.paramCounts = [1, 1];
  func23.paramNames = ["b", "desired"];
  func23.definitionLine = 63;
  func23.definitionModule = "minitest";
  var func27 = function(argcv, var_b, var_desired, var_error) {    // method assert(_)shouldRaise(_)mentioning(_), line 67
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("assert(_)shouldRaise(_)mentioning(_)", 0, numArgs - 3);
    }
    setLineNumber(67);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call28 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call28, "argument 1 in request of `assert(_)shouldRaise(_)mentioning(_)`", "Block");
    // call case 2: outer request
    var call29 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_desired, call29, "argument 2 in request of `assert(_)shouldRaise(_)mentioning(_)`", "ExceptionKind");
    assertTypeOrMsg(var_error, var_String, "argument 3 in request of `assert(_)shouldRaise(_)mentioning(_)`", "String");
    setLineNumber(68);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call30 = request(var_mtAssertion, "assert(1)shouldRaise(1)mentioning(1)", [1, 1, 1], var_b, var_desired, var_error);
    return call30;
  };    // end of method assert(_)shouldRaise(_)mentioning(_)
  func27.paramTypes = [];
  func27.paramTypes.push([]);
  func27.paramTypes.push([]);
  func27.paramTypes.push([type_String, "error"]);
  this.methods["assert(1)shouldRaise(1)mentioning(1)"] = func27;
  func27.methodName = "assert(1)shouldRaise(1)mentioning(1)";
  func27.paramCounts = [1, 1, 1];
  func27.paramNames = ["b", "desired", "error"];
  func27.definitionLine = 67;
  func27.definitionModule = "minitest";
  var func31 = function(argcv, var_b, var_undesired) {    // method assert(_)shouldntRaise(_), line 71
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)shouldntRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(71);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call32 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call32, "argument 1 in request of `assert(_)shouldntRaise(_)`", "Block");
    // call case 2: outer request
    var call33 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_undesired, call33, "argument 2 in request of `assert(_)shouldntRaise(_)`", "ExceptionKind");
    setLineNumber(72);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call34 = request(var_mtAssertion, "assert(1)shouldntRaise(1)", [1, 1], var_b, var_undesired);
    return call34;
  };    // end of method assert(_)shouldntRaise(_)
  this.methods["assert(1)shouldntRaise(1)"] = func31;
  func31.methodName = "assert(1)shouldntRaise(1)";
  func31.paramCounts = [1, 1];
  func31.paramNames = ["b", "undesired"];
  func31.definitionLine = 71;
  func31.definitionModule = "minitest";
  var func35 = function(argcv, var_s, var_desired) {    // method assert(_)hasType(_), line 75
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assert(_)hasType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_desired, var_Type, "argument 2 in request of `assert(_)hasType(_)`", "Type");
    setLineNumber(76);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call36 = request(var_mtAssertion, "assert(1)hasType(1)", [1, 1], var_s, var_desired);
    return call36;
  };    // end of method assert(_)hasType(_)
  func35.paramTypes = [];
  func35.paramTypes.push([]);
  func35.paramTypes.push([type_Type, "desired"]);
  this.methods["assert(1)hasType(1)"] = func35;
  func35.methodName = "assert(1)hasType(1)";
  func35.paramCounts = [1, 1];
  func35.paramNames = ["s", "desired"];
  func35.definitionLine = 75;
  func35.definitionModule = "minitest";
  var func37 = function(argcv, var_s, var_undesired) {    // method deny(_)hasType(_), line 79
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("deny(_)hasType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_undesired, var_Type, "argument 2 in request of `deny(_)hasType(_)`", "Type");
    setLineNumber(80);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call38 = request(var_mtAssertion, "deny(1)hasType(1)", [1, 1], var_s, var_undesired);
    return call38;
  };    // end of method deny(_)hasType(_)
  func37.paramTypes = [];
  func37.paramTypes.push([]);
  func37.paramTypes.push([type_Type, "undesired"]);
  this.methods["deny(1)hasType(1)"] = func37;
  func37.methodName = "deny(1)hasType(1)";
  func37.paramCounts = [1, 1];
  func37.paramNames = ["s", "undesired"];
  func37.definitionLine = 79;
  func37.definitionModule = "minitest";
  var func39 = function(argcv, var_T, var_value) {    // method assertType(_)describes(_), line 83
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("assertType(_)describes(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_T, var_Type, "argument 1 in request of `assertType(_)describes(_)`", "Type");
    setLineNumber(84);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call40 = request(var_mtAssertion, "assertType(1)describes(1)", [1, 1], var_T, var_value);
    return call40;
  };    // end of method assertType(_)describes(_)
  func39.paramTypes = [];
  func39.paramTypes.push([type_Type, "T"]);
  func39.paramTypes.push([]);
  this.methods["assertType(1)describes(1)"] = func39;
  func39.methodName = "assertType(1)describes(1)";
  func39.paramCounts = [1, 1];
  func39.paramNames = ["T", "value"];
  func39.definitionLine = 83;
  func39.definitionModule = "minitest";
  var func41 = function(argcv, var_reason) {    // method failBecause(_), line 87
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("failBecause(_)", 0, numArgs - 1);
    }
    setLineNumber(88);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call42 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], GraceFalse, var_reason);
    return call42;
  };    // end of method failBecause(_)
  this.methods["failBecause(1)"] = func41;
  func41.methodName = "failBecause(1)";
  func41.paramCounts = [1];
  func41.paramNames = ["reason"];
  func41.definitionLine = 87;
  func41.definitionModule = "minitest";
  var func43 = function(argcv, var_name, var_block) {    // method testSuiteNamed(_)with(_), line 91
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("testSuiteNamed(_)with(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `testSuiteNamed(_)with(_)`", "String");
    setLineNumber(91);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call44 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_block, call44, "argument 2 in request of `testSuiteNamed(_)with(_)`", "Block");
    var if45 = GraceDone;
    setLineNumber(92);    // compilenode op
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
    var opresult46 = request(var_nullSuite, "\u2260(1)", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult46)) {
      setLineNumber(93);    // compilenode string
      var string48 = new GraceString("a testSuite cannot be created inside a testSuite");
      // call case 6: other requests
      if (var_MinitestError === undefined) raiseUninitializedVariable("MinitestError");
      var call47 = request(var_MinitestError, "raise(1)", [1], string48);
      if45 = call47;
    }
    setLineNumber(95);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call50 = request(var_gu, "testSuite", [0]);
    var call49 = request(call50, "empty", [0]);
    var_currentTestSuiteForDialect = call49;
    setLineNumber(96);    // compilenode call
    // call case 6: other requests
    if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
    var call51 = request(var_currentTestSuiteForDialect, "name:=(1)", [1], var_name);
    setLineNumber(97);    // compilenode bind
    var_currentSetupBlockForTesting = var_block;
    setLineNumber(98);    // compilenode num
    var_currentTestInThisEvaluation = new GraceNum(0);
    setLineNumber(99);    // compilenode member
    // call case 6: other requests
    var call52 = request(var_block, "apply", [0]);
    setLineNumber(100);    // compilenode bind
    if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
    var_currentSetupBlockForTesting = var_nullBlock;
    setLineNumber(101);    // compilenode member
    // call case 6: other requests
    if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
    var call53 = request(var_currentTestSuiteForDialect, "runAndPrintResults", [0]);
    setLineNumber(102);    // compilenode bind
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    var_currentTestSuiteForDialect = var_nullSuite;
    setLineNumber(103);    // compilenode num
    var_currentTestBlockForTesting = new GraceNum(0);
    return GraceDone;
  };    // end of method testSuiteNamed(_)with(_)
  func43.paramTypes = [];
  func43.paramTypes.push([type_String, "name"]);
  func43.paramTypes.push([]);
  this.methods["testSuiteNamed(1)with(1)"] = func43;
  func43.methodName = "testSuiteNamed(1)with(1)";
  func43.paramCounts = [1, 1];
  func43.paramNames = ["name", "block"];
  func43.definitionLine = 91;
  func43.definitionModule = "minitest";
  var func54 = function(argcv) {    // method doNotRerunErrors, line 106
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("doNotRerunErrors", 0, numArgs - 0);
    }
    setLineNumber(106);    // compilenode bind
    var_errorsToBeRerun = GraceFalse;
    return GraceDone;
  };    // end of method doNotRerunErrors
  this.methods["doNotRerunErrors"] = func54;
  func54.methodName = "doNotRerunErrors";
  func54.paramCounts = [0];
  func54.paramNames = [];
  func54.definitionLine = 106;
  func54.definitionModule = "minitest";
  var func55 = function(argcv) {    // method doRerunErrors, line 107
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("doRerunErrors", 0, numArgs - 0);
    }
    setLineNumber(107);    // compilenode bind
    var_errorsToBeRerun = GraceTrue;
    return GraceDone;
  };    // end of method doRerunErrors
  this.methods["doRerunErrors"] = func55;
  func55.methodName = "doRerunErrors";
  func55.paramCounts = [0];
  func55.paramNames = [];
  func55.definitionLine = 107;
  func55.definitionModule = "minitest";
  var func56 = function(argcv, var_block) {    // method testSuite(_), line 109
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("testSuite(_)", 0, numArgs - 1);
    }
    setLineNumber(109);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call57 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_block, call57, "argument to request of `testSuite(_)`", "Block");
    setLineNumber(110);    // compilenode string
    var string59 = new GraceString("");
    // call case 2: outer request
    var call58 = selfRequest(importedModules["minitest"], "testSuiteNamed(1)with(1)", [1, 1], string59, var_block);
    return call58;
  };    // end of method testSuite(_)
  this.methods["testSuite(1)"] = func56;
  func56.methodName = "testSuite(1)";
  func56.paramCounts = [1];
  func56.paramNames = ["block"];
  func56.definitionLine = 109;
  func56.definitionModule = "minitest";
  var func60 = function(argcv, var_name, var_block) {    // method test(_)by(_), line 113
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("test(_)by(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `test(_)by(_)`", "String");
    setLineNumber(113);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call61 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_block, call61, "argument 2 in request of `test(_)by(_)`", "Block");
    var if62 = GraceDone;
    setLineNumber(114);    // compilenode op
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
    var opresult63 = request(var_nullSuite, "==(1)", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult63)) {
      setLineNumber(115);    // compilenode string
      var string65 = new GraceString("a test can be created only within a testSuite");
      // call case 6: other requests
      if (var_MinitestError === undefined) raiseUninitializedVariable("MinitestError");
      var call64 = request(var_MinitestError, "raise(1)", [1], string65);
      if62 = call64;
    }
    setLineNumber(117);    // compilenode op
    if (var_currentTestInThisEvaluation === undefined) raiseUninitializedVariable("currentTestInThisEvaluation");
    var sum66 = request(var_currentTestInThisEvaluation, "+(1)", [1], new GraceNum(1));
    var_currentTestInThisEvaluation = sum66;
    var if67 = GraceDone;
    setLineNumber(118);    // compilenode op
    if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
    if (var_currentSetupBlockForTesting === undefined) raiseUninitializedVariable("currentSetupBlockForTesting");
    var opresult68 = request(var_nullBlock, "\u2260(1)", [1], var_currentSetupBlockForTesting);
    if (Grace_isTrue(opresult68)) {
      setLineNumber(119);    // compilenode call
      if (var_currentSetupBlockForTesting === undefined) raiseUninitializedVariable("currentSetupBlockForTesting");
      if (var_currentTestInThisEvaluation === undefined) raiseUninitializedVariable("currentTestInThisEvaluation");
      // call case 2: outer request
      var call70 = selfRequest(importedModules["minitest"], "testCaseNamed(1)setupIn(1)asTestNumber(1)", [1, 1, 1], var_name, var_currentSetupBlockForTesting, var_currentTestInThisEvaluation);
      // call case 6: other requests
      if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
      var call69 = request(var_currentTestSuiteForDialect, "add(1)", [1], call70);
      if67 = call69;
    } else {
      var if71 = GraceDone;
      setLineNumber(122);    // compilenode op
      if (var_currentTestInThisEvaluation === undefined) raiseUninitializedVariable("currentTestInThisEvaluation");
      if (var_currentTestBlockForTesting === undefined) raiseUninitializedVariable("currentTestBlockForTesting");
      var opresult72 = request(var_currentTestInThisEvaluation, "==(1)", [1], var_currentTestBlockForTesting);
      if (Grace_isTrue(opresult72)) {
        setLineNumber(123);    // compilenode member
        // call case 6: other requests
        var call73 = request(var_block, "apply", [0]);
        if71 = call73;
      }
      if67 = if71;
    }
    return if67;
  };    // end of method test(_)by(_)
  func60.paramTypes = [];
  func60.paramTypes.push([type_String, "name"]);
  func60.paramTypes.push([]);
  this.methods["test(1)by(1)"] = func60;
  func60.methodName = "test(1)by(1)";
  func60.paramCounts = [1, 1];
  func60.paramNames = ["name", "block"];
  func60.definitionLine = 113;
  func60.definitionModule = "minitest";
  var func74 = function(argcv, var_name__39__, var_setupBlock, var_number) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_), line 127
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("testCaseNamed(_)setupIn(_)asTestNumber(_)", 0, numArgs - 3);
    }
    var ouc = emptyGraceObject("testCaseNamed(_)setupIn(_)asTestNumber(_)", "minitest", 127);
    var ouc_init = this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"].call(this, null, var_name__39__, var_setupBlock, var_number, ouc, [], []);
    ouc_init.call(ouc);
    setLineNumber(127);    // compilenode member
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call75 = request(var_gu, "TestCase", [0]);
    setLineNumber(150);    // typecheck
    assertTypeOrMsg(ouc, call75, "object returned from testCaseNamed(_)setupIn(_)asTestNumber(_)", "gu.TestCase");
    return ouc;
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)"] = func74;
  func74.methodName = "testCaseNamed(1)setupIn(1)asTestNumber(1)";
  func74.paramCounts = [1, 1, 1];
  func74.paramNames = ["name'", "setupBlock", "number"];
  func74.definitionLine = 127;
  func74.definitionModule = "minitest";
  var func76 = function(argcv, var_name__39__, var_setupBlock, var_number, inheritingObject, aliases, exclusions) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_), line 127
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("testCaseNamed(_)setupIn(_)asTestNumber(_)", 0, numArgs - 3);
    }
    var obj77_build = function(ignore, var_name__39__, var_setupBlock, var_number, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_minitest_128");
      this.outer_minitest_128 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(129);    // reuse call
      if (var_gu === undefined) raiseUninitializedVariable("gu");
      var initFun78 = request(var_gu, "testCaseNamed(1)$build(3)", [null], var_name__39__, this, [new Alias("guSetup", "setup")], []);  // compileReuseCall
      var func79 = function(argcv) {    // method setup, line 131
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("setup", 0, numArgs - 0);
        }
        setLineNumber(132);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call80 = selfRequest(this, "guSetup", [0]);
        setLineNumber(133);    // compilenode bind
        var_currentTestBlockForTesting = var_number;
        setLineNumber(134);    // compilenode num
        var_currentTestInThisEvaluation = new GraceNum(0);
        setLineNumber(135);    // compilenode member
        // call case 6: other requests
        var call81 = request(var_setupBlock, "apply", [0]);
        return call81;
      };    // end of method setup
      this.methods["setup"] = func79;
      func79.methodName = "setup";
      func79.paramCounts = [0];
      func79.paramNames = [];
      func79.definitionLine = 131;
      func79.definitionModule = "minitest";
      var func82 = function(argcv) {    // method teardown, line 138
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("teardown", 0, numArgs - 0);
        }
        setLineNumber(139);    // compilenode num
        var_currentTestBlockForTesting = new GraceNum(0);
        return GraceDone;
      };    // end of method teardown
      this.methods["teardown"] = func82;
      func82.methodName = "teardown";
      func82.paramCounts = [0];
      func82.paramNames = [];
      func82.definitionLine = 138;
      func82.definitionModule = "minitest";
      var func83 = function(argcv, var_r) {    // method currentResult:=(_), line 142
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("currentResult:=(_)", 0, numArgs - 1);
        }
        setLineNumber(143);    // compilenode call
        // call case 6: other requests
        if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
        var call84 = request(var_mtAssertion, "currentResult:=(1)", [1], var_r);
        return call84;
      };    // end of method currentResult:=(_)
      this.methods["currentResult:=(1)"] = func83;
      func83.methodName = "currentResult:=(1)";
      func83.paramCounts = [1];
      func83.paramNames = ["r"];
      func83.definitionLine = 142;
      func83.definitionModule = "minitest";
      var func85 = function(argcv) {    // method runTest, line 146
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("runTest", 0, numArgs - 0);
        }
        return GraceDone;
      };    // end of method runTest
      this.methods["runTest"] = func85;
      func85.methodName = "runTest";
      func85.paramCounts = [0];
      func85.paramNames = [];
      func85.definitionLine = 146;
      func85.definitionModule = "minitest";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 128;
          m.definitionModule = "minitest";
          this.methods[newNm] = m;
      }
      for (let exName in inheritedExclusions) {
          if (inheritedExclusions.hasOwnProperty(exName)) {
              if (inheritedExclusions[exName]) {
                  this.methods[exName] = inheritedExclusions[exName];
              } else {
                  delete this.methods[exName];
              }
          }
      }
      var obj77_init = function() {    // init of object on line 128
        initFun78.call(this);
      };
      return obj77_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj77_init = obj77_build.call(inheritingObject, null, var_name__39__, var_setupBlock, var_number, this, aliases, exclusions);
    return obj77_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_)
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"] = func76;
  func76.methodName = "testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)";
  func76.paramCounts = [1, 1, 1];
  func76.paramNames = ["name'", "setupBlock", "number"];
  func76.definitionLine = 127;
  func76.definitionModule = "minitest";
  initFun1.call(this);
  setLineNumber(5);    // compilenode string
  var string87 = new GraceString("MinitestError");
  // call case 6: other requests
  // call case 2: outer request
  var call88 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call86 = request(call88, "refine(1)", [1], string87);
  var var_MinitestError = call86;
  var reader89_MinitestError = function() {  // reader method MinitestError
      if (var_MinitestError === undefined) raiseUninitializedVariable("MinitestError");
      return var_MinitestError;
  };
  reader89_MinitestError.isDef = true;
  reader89_MinitestError.confidential = true;
  this.methods["MinitestError"] = reader89_MinitestError;
  setLineNumber(8);    // compilenode string
  var string91 = new GraceString("nullSuite");
  // call case 6: other requests
  // call case 2: outer request
  var call92 = selfRequest(var_prelude, "Singleton", [0]);
  var call90 = request(call92, "named(1)", [1], string91);
  var var_nullSuite = call90;
  var reader93_nullSuite = function() {  // reader method nullSuite
      if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
      return var_nullSuite;
  };
  reader93_nullSuite.isDef = true;
  reader93_nullSuite.confidential = true;
  this.methods["nullSuite"] = reader93_nullSuite;
  setLineNumber(9);    // compilenode string
  var string95 = new GraceString("nullBlock");
  // call case 6: other requests
  // call case 2: outer request
  var call96 = selfRequest(var_prelude, "Singleton", [0]);
  var call94 = request(call96, "named(1)", [1], string95);
  var var_nullBlock = call94;
  var reader97_nullBlock = function() {  // reader method nullBlock
      if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
      return var_nullBlock;
  };
  reader97_nullBlock.isDef = true;
  reader97_nullBlock.confidential = true;
  this.methods["nullBlock"] = reader97_nullBlock;
  setLineNumber(11);    // compilenode vardec
  if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
  var var_currentTestSuiteForDialect = var_nullSuite;
  var reader98_currentTestSuiteForDialect = function() {  // reader method currentTestSuiteForDialect
      if (var_currentTestSuiteForDialect === undefined) raiseUninitializedVariable("currentTestSuiteForDialect");
      return var_currentTestSuiteForDialect;
  };
  reader98_currentTestSuiteForDialect.isVar = true;
  reader98_currentTestSuiteForDialect.confidential = true;
  this.methods["currentTestSuiteForDialect"] = reader98_currentTestSuiteForDialect;
  var writer99_currentTestSuiteForDialect = function(argcv, n) {   // writer method currentTestSuiteForDialect:=(_)
    var_currentTestSuiteForDialect = n;
    return GraceDone;
  };
  writer99_currentTestSuiteForDialect.confidential = true;
  this.methods["currentTestSuiteForDialect:=(1)"] = writer99_currentTestSuiteForDialect;
  setLineNumber(12);    // compilenode vardec
  if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
  var var_currentSetupBlockForTesting = var_nullBlock;
  var reader100_currentSetupBlockForTesting = function() {  // reader method currentSetupBlockForTesting
      if (var_currentSetupBlockForTesting === undefined) raiseUninitializedVariable("currentSetupBlockForTesting");
      return var_currentSetupBlockForTesting;
  };
  reader100_currentSetupBlockForTesting.isVar = true;
  reader100_currentSetupBlockForTesting.confidential = true;
  this.methods["currentSetupBlockForTesting"] = reader100_currentSetupBlockForTesting;
  var writer101_currentSetupBlockForTesting = function(argcv, n) {   // writer method currentSetupBlockForTesting:=(_)
    var_currentSetupBlockForTesting = n;
    return GraceDone;
  };
  writer101_currentSetupBlockForTesting.confidential = true;
  this.methods["currentSetupBlockForTesting:=(1)"] = writer101_currentSetupBlockForTesting;
  setLineNumber(13);    // compilenode num
  var var_currentTestBlockForTesting = new GraceNum(0);
  var reader102_currentTestBlockForTesting = function() {  // reader method currentTestBlockForTesting
      if (var_currentTestBlockForTesting === undefined) raiseUninitializedVariable("currentTestBlockForTesting");
      return var_currentTestBlockForTesting;
  };
  reader102_currentTestBlockForTesting.isVar = true;
  reader102_currentTestBlockForTesting.confidential = true;
  this.methods["currentTestBlockForTesting"] = reader102_currentTestBlockForTesting;
  var writer103_currentTestBlockForTesting = function(argcv, n) {   // writer method currentTestBlockForTesting:=(_)
    var_currentTestBlockForTesting = n;
    return GraceDone;
  };
  writer103_currentTestBlockForTesting.confidential = true;
  this.methods["currentTestBlockForTesting:=(1)"] = writer103_currentTestBlockForTesting;
  setLineNumber(14);    // compilenode num
  var var_currentTestInThisEvaluation = new GraceNum(0);
  var reader104_currentTestInThisEvaluation = function() {  // reader method currentTestInThisEvaluation
      if (var_currentTestInThisEvaluation === undefined) raiseUninitializedVariable("currentTestInThisEvaluation");
      return var_currentTestInThisEvaluation;
  };
  reader104_currentTestInThisEvaluation.isVar = true;
  reader104_currentTestInThisEvaluation.confidential = true;
  this.methods["currentTestInThisEvaluation"] = reader104_currentTestInThisEvaluation;
  var writer105_currentTestInThisEvaluation = function(argcv, n) {   // writer method currentTestInThisEvaluation:=(_)
    var_currentTestInThisEvaluation = n;
    return GraceDone;
  };
  writer105_currentTestInThisEvaluation.confidential = true;
  this.methods["currentTestInThisEvaluation:=(1)"] = writer105_currentTestInThisEvaluation;
  setLineNumber(15);    // compilenode vardec
  var var_errorsToBeRerun = GraceTrue;
  var reader106_errorsToBeRerun = function() {  // reader method errorsToBeRerun
      if (var_errorsToBeRerun === undefined) raiseUninitializedVariable("errorsToBeRerun");
      return var_errorsToBeRerun;
  };
  reader106_errorsToBeRerun.isVar = true;
  reader106_errorsToBeRerun.confidential = true;
  this.methods["errorsToBeRerun"] = reader106_errorsToBeRerun;
  var writer107_errorsToBeRerun = function(argcv, n) {   // writer method errorsToBeRerun:=(_)
    var_errorsToBeRerun = n;
    return GraceDone;
  };
  writer107_errorsToBeRerun.confidential = true;
  this.methods["errorsToBeRerun:=(1)"] = writer107_errorsToBeRerun;
  setLineNumber(22);    // compilenode object
  var obj108_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_minitest_22");
    this.outer_minitest_22 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(23);    // reuse call
    var initFun109 = request(var_gu, "assertion$build(3)", [null], this, [], []);  // compileReuseCall
    this.data.currentResult = undefined;
    var reader110_currentResult = function() {  // reader method currentResult
        if (this.data.currentResult === undefined) raiseUninitializedVariable("currentResult");
        return this.data.currentResult;
    };
    reader110_currentResult.isVar = true;
    reader110_currentResult.confidential = true;
    this.methods["currentResult"] = reader110_currentResult;
    var writer111_currentResult = function(argcv, n) {   // writer method currentResult:=(_)
      this.data.currentResult = n;
      return GraceDone;
    };
    this.methods["currentResult:=(1)"] = writer111_currentResult;
    var func112 = function(argcv) {    // method countOneAssertion, line 30
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
      }
      setLineNumber(31);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call114 = selfRequest(this, "currentResult", [0]);
      var call113 = request(call114, "countOneAssertion", [0]);
      return call113;
    };    // end of method countOneAssertion
    this.methods["countOneAssertion"] = func112;
    func112.methodName = "countOneAssertion";
    func112.paramCounts = [0];
    func112.paramNames = [];
    func112.definitionLine = 30;
    func112.definitionModule = "minitest";
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 22;
        m.definitionModule = "minitest";
        this.methods[newNm] = m;
    }
    for (let exName in inheritedExclusions) {
        if (inheritedExclusions.hasOwnProperty(exName)) {
            if (inheritedExclusions[exName]) {
                this.methods[exName] = inheritedExclusions[exName];
            } else {
                delete this.methods[exName];
            }
        }
    }
    var obj108_init = function() {    // init of object on line 22
      initFun109.call(this);
      setLineNumber(24);    // compilenode object
      var obj115_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_minitest_24");
        this.outer_minitest_24 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        var func116 = function(argcv) {    // method countOneAssertion, line 25
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
          }
          setLineNumber(26);    // compilenode string
          var string117 = new GraceString("countOneAssertion requested on dummy result");
          Grace_print(string117);
          return GraceDone;
        };    // end of method countOneAssertion
        this.methods["countOneAssertion"] = func116;
        func116.methodName = "countOneAssertion";
        func116.paramCounts = [0];
        func116.paramNames = [];
        func116.definitionLine = 25;
        func116.definitionModule = "minitest";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 24;
            m.definitionModule = "minitest";
            this.methods[newNm] = m;
        }
        for (let exName in inheritedExclusions) {
            if (inheritedExclusions.hasOwnProperty(exName)) {
                if (inheritedExclusions[exName]) {
                    this.methods[exName] = inheritedExclusions[exName];
                } else {
                    delete this.methods[exName];
                }
            }
        }
        var obj115_init = function() {    // init of object on line 24
        };
        return obj115_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj115 = emptyGraceObject("object", "minitest", 24);
      var obj115_init = obj115_build.call(obj115, null, this, [], []);
      obj115_init.call(obj115);  // end of compileobject
      this.data.currentResult = obj115;
    };
    return obj108_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj108 = emptyGraceObject("mtAssertion", "minitest", 22);
  var obj108_init = obj108_build.call(obj108, null, this, [], []);
  obj108_init.call(obj108);  // end of compileobject
  var var_mtAssertion = obj108;
  var reader118_mtAssertion = function() {  // reader method mtAssertion
      if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
      return var_mtAssertion;
  };
  reader118_mtAssertion.isDef = true;
  reader118_mtAssertion.confidential = true;
  this.methods["mtAssertion"] = reader118_mtAssertion;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_minitest = gracecode_minitest;
if (typeof window !== "undefined")
  window.gracecode_minitest = gracecode_minitest;
gracecode_minitest.imports = ["gUnit", "standardGrace"];
gracecode_minitest.definitionModule = "minitest";
gracecode_minitest.definitionLine = 1;
