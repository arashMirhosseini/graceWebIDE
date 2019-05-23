var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["minispec"] = "classes:\nconfidential:\n MinispecError\n currentSetupBlock\n currentSetupBlock:=(currentSetupBlock': Unknown) \u2192 Done\n currentTestBlock\n currentTestBlock:=(currentTestBlock': Unknown) \u2192 Done\n currentTestSuite\n currentTestSuite:=(currentTestSuite': Unknown) \u2192 Done\n errorsToBeRerun\n errorsToBeRerun:=(errorsToBeRerun': Unknown) \u2192 Done\n mtAssertion\n nullBlock\n nullSuite\n testCaseNamed(1)setupIn(1)asTestNumber(1)\n testNumberToRun\n testNumberToRun:=(testNumberToRun': Unknown) \u2192 Done\ndialect:\n standardGrace\nfresh-methods:\n methods\n testCaseNamed(1)setupIn(1)asTestNumber(1)\nfresh:methods:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n Block\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n describe(1)with(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n expect(1)notToBe(1)\n expect(1)notToBe(1)orSay(1)\n expect(1)notToHaveType(1)\n expect(1)notToRaise(1)\n expect(1)orSay(1)\n expect(1)toBe(1)\n expect(1)toBe(1)orSay(1)\n expect(1)toBe(1)within(1)\n expect(1)toHaveType(1)\n expect(1)toRaise(1)\n expect(1)toRaise(1)mentioning(1)\n failAndSay(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n specify(1)by(1)\n valueOf(1)\nfresh:testCaseNamed(1)setupIn(1)asTestNumber(1):\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldRaise(1)mentioning(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n countOneAssertion\n currentResult\n currentResult:=(1)\n currentResult:=(_)\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n guSetup\n isMe(1)\n methodsIn(1)missingFrom(1)\n myIdentityHash\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\nmethodtypes-of:Block:\nmodules:\n collectionsPrelude\n gUnit\n mirrors\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/minispec.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n Block\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n describe(1)with(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n expect(1)notToBe(1)\n expect(1)notToBe(1)orSay(1)\n expect(1)notToHaveType(1)\n expect(1)notToRaise(1)\n expect(1)orSay(1)\n expect(1)toBe(1)\n expect(1)toBe(1)orSay(1)\n expect(1)toBe(1)within(1)\n expect(1)toHaveType(1)\n expect(1)toRaise(1)\n expect(1)toRaise(1)mentioning(1)\n failAndSay(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n specify(1)by(1)\n valueOf(1)\npublicMethodTypes:\n describe(name:String)with(block:Block)\n doNotRerunErrors\n doRerunErrors\n expect(b:Block)notToRaise(undesired:ExceptionKind)\n expect(b:Block)toRaise(desired:ExceptionKind)\n expect(b:Block)toRaise(desired:ExceptionKind)mentioning(error:String)\n expect(cond:Boolean)orSay(complaint:String)\n expect(n1:Number)toBe(n2:Number)within(epsilon:Number)\n expect(s1:Object)notToBe(s2:Object)\n expect(s1:Object)notToBe(s2:Object)orSay(complaint)\n expect(s1:Object)toBe(s2:Object)\n expect(s1:Object)toBe(s2:Object)orSay(complaint)\n expect(s:Unknown)notToHaveType(undesired:Type)\n expect(s:Unknown)toHaveType(desired:Type)\n failAndSay(reason)\n methods\n numberOfErrorsToRerun \u2192 Number\n numberOfErrorsToRerun:=(n:Number)\n specify(name:String)by(block:Block)\ntypes:\n Block\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["minispec"] = [
    "import \"gUnit\" as gu",
    "",
    "inherit prelude.methods exclude methods",
    "",
    "def MinispecError = prelude.ProgrammingError.refine \"MinispecError\"",
    "type Block = prelude.Procedure0",
    "",
    "def nullSuite = prelude.Singleton.named \"nullSuite\"",
    "def nullBlock = prelude.Singleton.named \"nullBlock\"",
    "",
    "var currentTestSuite := nullSuite",
    "var currentSetupBlock := nullBlock",
    "var currentTestBlock := 0",
    "var testNumberToRun := 0",
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
    "method expect (cond:Boolean) orSay (complaint:String) {",
    "    mtAssertion.assert(cond) description (complaint)",
    "}",
    "",
    "method expect(s1:Object) toBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldBe (s2)",
    "}",
    "",
    "method expect(s1:Object) toBe (s2:Object) orSay (complaint) {",
    "    mtAssertion.assert(s1 == s2)",
    "        description (complaint)",
    "}",
    "",
    "method expect(s1:Object) notToBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldntBe (s2)",
    "}",
    "",
    "method expect(s1:Object) notToBe (s2:Object) orSay (complaint) {",
    "    mtAssertion.assert(s1 ≠ s2)",
    "        description (complaint)",
    "}",
    "",
    "method expect(n1:Number) toBe (n2:Number) within (epsilon:Number) {",
    "    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)",
    "}",
    "",
    "method expect(b:Block) toRaise (desired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldRaise (desired)",
    "}",
    "",
    "method expect(b:Block) toRaise (desired:prelude.ExceptionKind) mentioning (error:String) {",
    "    mtAssertion.assert(b) shouldRaise (desired) mentioning (error)",
    "}",
    "",
    "method expect(b:Block) notToRaise (undesired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldntRaise (undesired)",
    "}",
    "",
    "method expect(s:Unknown) toHaveType (desired:Type) {",
    "    mtAssertion.assert(s) hasType (desired)",
    "}",
    "",
    "method expect(s:Unknown) notToHaveType (undesired:Type) {",
    "    mtAssertion.deny(s) hasType (undesired)",
    "}",
    "",
    "method failAndSay(reason) {",
    "    mtAssertion.assert(false) description(reason)",
    "}",
    "",
    "method describe (name:String) with (block:Block) {",
    "    if (nullSuite ≠ currentTestSuite) then {",
    "        MinispecError.raise \"`describe` cannot be used inside `describe`\"",
    "    }",
    "    currentTestSuite := gu.testSuite.empty",
    "    currentTestSuite.name := name",
    "    currentSetupBlock := block",
    "    testNumberToRun := 0",
    "    block.apply",
    "    currentSetupBlock := nullBlock",
    "    currentTestSuite.runAndPrintResults",
    "    currentTestSuite := nullSuite",
    "    currentTestBlock := 0",
    "}",
    "",
    "method doNotRerunErrors { errorsToBeRerun := false }",
    "method doRerunErrors { errorsToBeRerun := true }",
    "",
    "",
    "method specify (name:String) by (block:Block) {",
    "    if (nullSuite == currentTestSuite) then {",
    "        MinispecError.raise \"a `specify` can be created only within a `describe`\"",
    "    }",
    "    testNumberToRun := testNumberToRun + 1",
    "    if (nullBlock ≠ currentSetupBlock) then {",
    "        currentTestSuite.add(testCaseNamed(name)",
    "            setupIn(currentSetupBlock)",
    "            asTestNumber(testNumberToRun))",
    "    } elseif { testNumberToRun == currentTestBlock } then {",
    "        block.apply",
    "    }",
    "}",
    "",
    "method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase",
    "        is confidential {",
    "    object {",
    "        inherit gu.testCaseNamed(name') alias guSetup = setup",
    "",
    "        method setup { ",
    "            guSetup",
    "            currentTestBlock := number",
    "            testNumberToRun := 0",
    "            setupBlock.apply",
    "        }",
    "",
    "        method teardown {",
    "            currentTestBlock := 0",
    "        }",
    "        ",
    "        method currentResult:= (r) is override {",
    "            mtAssertion.currentResult := r",
    "        }",
    "        ",
    "        method runTest is override {",
    "            // for minispec, the test is run in setup",
    "        }",
    "    }",
    "}",
    "",
    "method methods {",
    "    // Makes a fresh object that can be inherited.",
    "    // This method overrides an identical method inherited",
    "    // from standardGrace, so ought to be unnecessary.",
    "    prelude.clone(self)",
    "}" ];
}
function gracecode_minispec() {
  importedModules["minispec"] = this;
  var module$minispec = this;
  this.definitionModule = "minispec";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_minispec_1");
  this.outer_minispec_1 = var_prelude;
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
  func0.definitionModule = "minispec";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(3);    // reuse call
  var initFun1 = request(var_prelude, "methods$build(3)", [null], this, [], ["methods"]);  // compileReuseCall
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
  memofunc3.definitionModule = "minispec";
  func3.methodName = "Block";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 1;
  func3.definitionModule = "minispec";
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
  func5.definitionModule = "minispec";
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
  func7.definitionModule = "minispec";
  var func9 = function(argcv, var_cond, var_complaint) {    // method expect(_)orSay(_), line 35
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)orSay(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_cond, var_Boolean, "argument 1 in request of `expect(_)orSay(_)`", "Boolean");
    assertTypeOrMsg(var_complaint, var_String, "argument 2 in request of `expect(_)orSay(_)`", "String");
    setLineNumber(36);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call10 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], var_cond, var_complaint);
    return call10;
  };    // end of method expect(_)orSay(_)
  func9.paramTypes = [];
  func9.paramTypes.push([type_Boolean, "cond"]);
  func9.paramTypes.push([type_String, "complaint"]);
  this.methods["expect(1)orSay(1)"] = func9;
  func9.methodName = "expect(1)orSay(1)";
  func9.paramCounts = [1, 1];
  func9.paramNames = ["cond", "complaint"];
  func9.definitionLine = 35;
  func9.definitionModule = "minispec";
  var func11 = function(argcv, var_s1, var_s2) {    // method expect(_)toBe(_), line 39
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `expect(_)toBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `expect(_)toBe(_)`", "Object");
    setLineNumber(40);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call12 = request(var_mtAssertion, "assert(1)shouldBe(1)", [1, 1], var_s1, var_s2);
    return call12;
  };    // end of method expect(_)toBe(_)
  func11.paramTypes = [];
  func11.paramTypes.push([type_Object, "s1"]);
  func11.paramTypes.push([type_Object, "s2"]);
  this.methods["expect(1)toBe(1)"] = func11;
  func11.methodName = "expect(1)toBe(1)";
  func11.paramCounts = [1, 1];
  func11.paramNames = ["s1", "s2"];
  func11.definitionLine = 39;
  func11.definitionModule = "minispec";
  var func13 = function(argcv, var_s1, var_s2, var_complaint) {    // method expect(_)toBe(_)orSay(_), line 43
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)toBe(_)orSay(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `expect(_)toBe(_)orSay(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `expect(_)toBe(_)orSay(_)`", "Object");
    setLineNumber(44);    // compilenode op
    var opresult15 = request(var_s1, "==(1)", [1], var_s2);
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call14 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], opresult15, var_complaint);
    return call14;
  };    // end of method expect(_)toBe(_)orSay(_)
  func13.paramTypes = [];
  func13.paramTypes.push([type_Object, "s1"]);
  func13.paramTypes.push([type_Object, "s2"]);
  func13.paramTypes.push([]);
  this.methods["expect(1)toBe(1)orSay(1)"] = func13;
  func13.methodName = "expect(1)toBe(1)orSay(1)";
  func13.paramCounts = [1, 1, 1];
  func13.paramNames = ["s1", "s2", "complaint"];
  func13.definitionLine = 43;
  func13.definitionModule = "minispec";
  var func16 = function(argcv, var_s1, var_s2) {    // method expect(_)notToBe(_), line 48
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `expect(_)notToBe(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `expect(_)notToBe(_)`", "Object");
    setLineNumber(49);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call17 = request(var_mtAssertion, "assert(1)shouldntBe(1)", [1, 1], var_s1, var_s2);
    return call17;
  };    // end of method expect(_)notToBe(_)
  func16.paramTypes = [];
  func16.paramTypes.push([type_Object, "s1"]);
  func16.paramTypes.push([type_Object, "s2"]);
  this.methods["expect(1)notToBe(1)"] = func16;
  func16.methodName = "expect(1)notToBe(1)";
  func16.paramCounts = [1, 1];
  func16.paramNames = ["s1", "s2"];
  func16.definitionLine = 48;
  func16.definitionModule = "minispec";
  var func18 = function(argcv, var_s1, var_s2, var_complaint) {    // method expect(_)notToBe(_)orSay(_), line 52
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)notToBe(_)orSay(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `expect(_)notToBe(_)orSay(_)`", "Object");
    assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `expect(_)notToBe(_)orSay(_)`", "Object");
    setLineNumber(53);    // compilenode op
    var opresult20 = request(var_s1, "\u2260(1)", [1], var_s2);
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call19 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], opresult20, var_complaint);
    return call19;
  };    // end of method expect(_)notToBe(_)orSay(_)
  func18.paramTypes = [];
  func18.paramTypes.push([type_Object, "s1"]);
  func18.paramTypes.push([type_Object, "s2"]);
  func18.paramTypes.push([]);
  this.methods["expect(1)notToBe(1)orSay(1)"] = func18;
  func18.methodName = "expect(1)notToBe(1)orSay(1)";
  func18.paramCounts = [1, 1, 1];
  func18.paramNames = ["s1", "s2", "complaint"];
  func18.definitionLine = 52;
  func18.definitionModule = "minispec";
  var func21 = function(argcv, var_n1, var_n2, var_epsilon) {    // method expect(_)toBe(_)within(_), line 57
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)toBe(_)within(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_n1, var_Number, "argument 1 in request of `expect(_)toBe(_)within(_)`", "Number");
    assertTypeOrMsg(var_n2, var_Number, "argument 2 in request of `expect(_)toBe(_)within(_)`", "Number");
    assertTypeOrMsg(var_epsilon, var_Number, "argument 3 in request of `expect(_)toBe(_)within(_)`", "Number");
    setLineNumber(58);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call22 = request(var_mtAssertion, "assert(1)shouldEqual(1)within(1)", [1, 1, 1], var_n1, var_n2, var_epsilon);
    return call22;
  };    // end of method expect(_)toBe(_)within(_)
  func21.paramTypes = [];
  func21.paramTypes.push([type_Number, "n1"]);
  func21.paramTypes.push([type_Number, "n2"]);
  func21.paramTypes.push([type_Number, "epsilon"]);
  this.methods["expect(1)toBe(1)within(1)"] = func21;
  func21.methodName = "expect(1)toBe(1)within(1)";
  func21.paramCounts = [1, 1, 1];
  func21.paramNames = ["n1", "n2", "epsilon"];
  func21.definitionLine = 57;
  func21.definitionModule = "minispec";
  var func23 = function(argcv, var_b, var_desired) {    // method expect(_)toRaise(_), line 61
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(61);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call24 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call24, "argument 1 in request of `expect(_)toRaise(_)`", "Block");
    // call case 2: outer request
    var call25 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_desired, call25, "argument 2 in request of `expect(_)toRaise(_)`", "ExceptionKind");
    setLineNumber(62);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call26 = request(var_mtAssertion, "assert(1)shouldRaise(1)", [1, 1], var_b, var_desired);
    return call26;
  };    // end of method expect(_)toRaise(_)
  this.methods["expect(1)toRaise(1)"] = func23;
  func23.methodName = "expect(1)toRaise(1)";
  func23.paramCounts = [1, 1];
  func23.paramNames = ["b", "desired"];
  func23.definitionLine = 61;
  func23.definitionModule = "minispec";
  var func27 = function(argcv, var_b, var_desired, var_error) {    // method expect(_)toRaise(_)mentioning(_), line 65
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("expect(_)toRaise(_)mentioning(_)", 0, numArgs - 3);
    }
    setLineNumber(65);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call28 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call28, "argument 1 in request of `expect(_)toRaise(_)mentioning(_)`", "Block");
    // call case 2: outer request
    var call29 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_desired, call29, "argument 2 in request of `expect(_)toRaise(_)mentioning(_)`", "ExceptionKind");
    assertTypeOrMsg(var_error, var_String, "argument 3 in request of `expect(_)toRaise(_)mentioning(_)`", "String");
    setLineNumber(66);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call30 = request(var_mtAssertion, "assert(1)shouldRaise(1)mentioning(1)", [1, 1, 1], var_b, var_desired, var_error);
    return call30;
  };    // end of method expect(_)toRaise(_)mentioning(_)
  func27.paramTypes = [];
  func27.paramTypes.push([]);
  func27.paramTypes.push([]);
  func27.paramTypes.push([type_String, "error"]);
  this.methods["expect(1)toRaise(1)mentioning(1)"] = func27;
  func27.methodName = "expect(1)toRaise(1)mentioning(1)";
  func27.paramCounts = [1, 1, 1];
  func27.paramNames = ["b", "desired", "error"];
  func27.definitionLine = 65;
  func27.definitionModule = "minispec";
  var func31 = function(argcv, var_b, var_undesired) {    // method expect(_)notToRaise(_), line 69
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToRaise(_)", 0, numArgs - 2);
    }
    setLineNumber(69);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call32 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_b, call32, "argument 1 in request of `expect(_)notToRaise(_)`", "Block");
    // call case 2: outer request
    var call33 = selfRequest(var_prelude, "ExceptionKind", [0]);
    assertTypeOrMsg(var_undesired, call33, "argument 2 in request of `expect(_)notToRaise(_)`", "ExceptionKind");
    setLineNumber(70);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call34 = request(var_mtAssertion, "assert(1)shouldntRaise(1)", [1, 1], var_b, var_undesired);
    return call34;
  };    // end of method expect(_)notToRaise(_)
  this.methods["expect(1)notToRaise(1)"] = func31;
  func31.methodName = "expect(1)notToRaise(1)";
  func31.paramCounts = [1, 1];
  func31.paramNames = ["b", "undesired"];
  func31.definitionLine = 69;
  func31.definitionModule = "minispec";
  var func35 = function(argcv, var_s, var_desired) {    // method expect(_)toHaveType(_), line 73
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)toHaveType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_desired, var_Type, "argument 2 in request of `expect(_)toHaveType(_)`", "Type");
    setLineNumber(74);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call36 = request(var_mtAssertion, "assert(1)hasType(1)", [1, 1], var_s, var_desired);
    return call36;
  };    // end of method expect(_)toHaveType(_)
  func35.paramTypes = [];
  func35.paramTypes.push([]);
  func35.paramTypes.push([type_Type, "desired"]);
  this.methods["expect(1)toHaveType(1)"] = func35;
  func35.methodName = "expect(1)toHaveType(1)";
  func35.paramCounts = [1, 1];
  func35.paramNames = ["s", "desired"];
  func35.definitionLine = 73;
  func35.definitionModule = "minispec";
  var func37 = function(argcv, var_s, var_undesired) {    // method expect(_)notToHaveType(_), line 77
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("expect(_)notToHaveType(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_undesired, var_Type, "argument 2 in request of `expect(_)notToHaveType(_)`", "Type");
    setLineNumber(78);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call38 = request(var_mtAssertion, "deny(1)hasType(1)", [1, 1], var_s, var_undesired);
    return call38;
  };    // end of method expect(_)notToHaveType(_)
  func37.paramTypes = [];
  func37.paramTypes.push([]);
  func37.paramTypes.push([type_Type, "undesired"]);
  this.methods["expect(1)notToHaveType(1)"] = func37;
  func37.methodName = "expect(1)notToHaveType(1)";
  func37.paramCounts = [1, 1];
  func37.paramNames = ["s", "undesired"];
  func37.definitionLine = 77;
  func37.definitionModule = "minispec";
  var func39 = function(argcv, var_reason) {    // method failAndSay(_), line 81
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("failAndSay(_)", 0, numArgs - 1);
    }
    setLineNumber(82);    // compilenode call
    // call case 6: other requests
    if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
    var call40 = request(var_mtAssertion, "assert(1)description(1)", [1, 1], GraceFalse, var_reason);
    return call40;
  };    // end of method failAndSay(_)
  this.methods["failAndSay(1)"] = func39;
  func39.methodName = "failAndSay(1)";
  func39.paramCounts = [1];
  func39.paramNames = ["reason"];
  func39.definitionLine = 81;
  func39.definitionModule = "minispec";
  var func41 = function(argcv, var_name, var_block) {    // method describe(_)with(_), line 85
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("describe(_)with(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `describe(_)with(_)`", "String");
    setLineNumber(85);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call42 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_block, call42, "argument 2 in request of `describe(_)with(_)`", "Block");
    var if43 = GraceDone;
    setLineNumber(86);    // compilenode op
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var opresult44 = request(var_nullSuite, "\u2260(1)", [1], var_currentTestSuite);
    if (Grace_isTrue(opresult44)) {
      setLineNumber(87);    // compilenode string
      var string46 = new GraceString("`describe` cannot be used inside `describe`");
      // call case 6: other requests
      if (var_MinispecError === undefined) raiseUninitializedVariable("MinispecError");
      var call45 = request(var_MinispecError, "raise(1)", [1], string46);
      if43 = call45;
    }
    setLineNumber(89);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call48 = request(var_gu, "testSuite", [0]);
    var call47 = request(call48, "empty", [0]);
    var_currentTestSuite = call47;
    setLineNumber(90);    // compilenode call
    // call case 6: other requests
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var call49 = request(var_currentTestSuite, "name:=(1)", [1], var_name);
    setLineNumber(91);    // compilenode bind
    var_currentSetupBlock = var_block;
    setLineNumber(92);    // compilenode num
    var_testNumberToRun = new GraceNum(0);
    setLineNumber(93);    // compilenode member
    // call case 6: other requests
    var call50 = request(var_block, "apply", [0]);
    setLineNumber(94);    // compilenode bind
    if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
    var_currentSetupBlock = var_nullBlock;
    setLineNumber(95);    // compilenode member
    // call case 6: other requests
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var call51 = request(var_currentTestSuite, "runAndPrintResults", [0]);
    setLineNumber(96);    // compilenode bind
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    var_currentTestSuite = var_nullSuite;
    setLineNumber(97);    // compilenode num
    var_currentTestBlock = new GraceNum(0);
    return GraceDone;
  };    // end of method describe(_)with(_)
  func41.paramTypes = [];
  func41.paramTypes.push([type_String, "name"]);
  func41.paramTypes.push([]);
  this.methods["describe(1)with(1)"] = func41;
  func41.methodName = "describe(1)with(1)";
  func41.paramCounts = [1, 1];
  func41.paramNames = ["name", "block"];
  func41.definitionLine = 85;
  func41.definitionModule = "minispec";
  var func52 = function(argcv) {    // method doNotRerunErrors, line 100
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("doNotRerunErrors", 0, numArgs - 0);
    }
    setLineNumber(100);    // compilenode bind
    var_errorsToBeRerun = GraceFalse;
    return GraceDone;
  };    // end of method doNotRerunErrors
  this.methods["doNotRerunErrors"] = func52;
  func52.methodName = "doNotRerunErrors";
  func52.paramCounts = [0];
  func52.paramNames = [];
  func52.definitionLine = 100;
  func52.definitionModule = "minispec";
  var func53 = function(argcv) {    // method doRerunErrors, line 101
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("doRerunErrors", 0, numArgs - 0);
    }
    setLineNumber(101);    // compilenode bind
    var_errorsToBeRerun = GraceTrue;
    return GraceDone;
  };    // end of method doRerunErrors
  this.methods["doRerunErrors"] = func53;
  func53.methodName = "doRerunErrors";
  func53.paramCounts = [0];
  func53.paramNames = [];
  func53.definitionLine = 101;
  func53.definitionModule = "minispec";
  var func54 = function(argcv, var_name, var_block) {    // method specify(_)by(_), line 104
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("specify(_)by(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_name, var_String, "argument 1 in request of `specify(_)by(_)`", "String");
    setLineNumber(104);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call55 = selfRequest(this, "Block", [0]);
    assertTypeOrMsg(var_block, call55, "argument 2 in request of `specify(_)by(_)`", "Block");
    var if56 = GraceDone;
    setLineNumber(105);    // compilenode op
    if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var opresult57 = request(var_nullSuite, "==(1)", [1], var_currentTestSuite);
    if (Grace_isTrue(opresult57)) {
      setLineNumber(106);    // compilenode string
      var string59 = new GraceString("a `specify` can be created only within a `describe`");
      // call case 6: other requests
      if (var_MinispecError === undefined) raiseUninitializedVariable("MinispecError");
      var call58 = request(var_MinispecError, "raise(1)", [1], string59);
      if56 = call58;
    }
    setLineNumber(108);    // compilenode op
    if (var_testNumberToRun === undefined) raiseUninitializedVariable("testNumberToRun");
    var sum60 = request(var_testNumberToRun, "+(1)", [1], new GraceNum(1));
    var_testNumberToRun = sum60;
    var if61 = GraceDone;
    setLineNumber(109);    // compilenode op
    if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
    if (var_currentSetupBlock === undefined) raiseUninitializedVariable("currentSetupBlock");
    var opresult62 = request(var_nullBlock, "\u2260(1)", [1], var_currentSetupBlock);
    if (Grace_isTrue(opresult62)) {
      setLineNumber(110);    // compilenode call
      if (var_currentSetupBlock === undefined) raiseUninitializedVariable("currentSetupBlock");
      if (var_testNumberToRun === undefined) raiseUninitializedVariable("testNumberToRun");
      // call case 2: outer request
      var call64 = selfRequest(importedModules["minispec"], "testCaseNamed(1)setupIn(1)asTestNumber(1)", [1, 1, 1], var_name, var_currentSetupBlock, var_testNumberToRun);
      // call case 6: other requests
      if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
      var call63 = request(var_currentTestSuite, "add(1)", [1], call64);
      if61 = call63;
    } else {
      var if65 = GraceDone;
      setLineNumber(113);    // compilenode op
      if (var_testNumberToRun === undefined) raiseUninitializedVariable("testNumberToRun");
      if (var_currentTestBlock === undefined) raiseUninitializedVariable("currentTestBlock");
      var opresult66 = request(var_testNumberToRun, "==(1)", [1], var_currentTestBlock);
      if (Grace_isTrue(opresult66)) {
        setLineNumber(114);    // compilenode member
        // call case 6: other requests
        var call67 = request(var_block, "apply", [0]);
        if65 = call67;
      }
      if61 = if65;
    }
    return if61;
  };    // end of method specify(_)by(_)
  func54.paramTypes = [];
  func54.paramTypes.push([type_String, "name"]);
  func54.paramTypes.push([]);
  this.methods["specify(1)by(1)"] = func54;
  func54.methodName = "specify(1)by(1)";
  func54.paramCounts = [1, 1];
  func54.paramNames = ["name", "block"];
  func54.definitionLine = 104;
  func54.definitionModule = "minispec";
  var func68 = function(argcv, var_name__39__, var_setupBlock, var_number) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_), line 118
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("testCaseNamed(_)setupIn(_)asTestNumber(_)", 0, numArgs - 3);
    }
    var ouc = emptyGraceObject("testCaseNamed(_)setupIn(_)asTestNumber(_)", "minispec", 118);
    var ouc_init = this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"].call(this, null, var_name__39__, var_setupBlock, var_number, ouc, [], []);
    ouc_init.call(ouc);
    setLineNumber(118);    // compilenode member
    // call case 6: other requests
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    var call69 = request(var_gu, "TestCase", [0]);
    setLineNumber(142);    // typecheck
    assertTypeOrMsg(ouc, call69, "object returned from testCaseNamed(_)setupIn(_)asTestNumber(_)", "gu.TestCase");
    return ouc;
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)
  func68.confidential = true;
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)"] = func68;
  func68.methodName = "testCaseNamed(1)setupIn(1)asTestNumber(1)";
  func68.paramCounts = [1, 1, 1];
  func68.paramNames = ["name'", "setupBlock", "number"];
  func68.definitionLine = 118;
  func68.definitionModule = "minispec";
  var func70 = function(argcv, var_name__39__, var_setupBlock, var_number, inheritingObject, aliases, exclusions) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_), line 118
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("testCaseNamed(_)setupIn(_)asTestNumber(_)", 0, numArgs - 3);
    }
    var obj71_build = function(ignore, var_name__39__, var_setupBlock, var_number, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_minispec_120");
      this.outer_minispec_120 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(121);    // reuse call
      if (var_gu === undefined) raiseUninitializedVariable("gu");
      var initFun72 = request(var_gu, "testCaseNamed(1)$build(3)", [null], var_name__39__, this, [new Alias("guSetup", "setup")], []);  // compileReuseCall
      var func73 = function(argcv) {    // method setup, line 123
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("setup", 0, numArgs - 0);
        }
        setLineNumber(124);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call74 = selfRequest(this, "guSetup", [0]);
        setLineNumber(125);    // compilenode bind
        var_currentTestBlock = var_number;
        setLineNumber(126);    // compilenode num
        var_testNumberToRun = new GraceNum(0);
        setLineNumber(127);    // compilenode member
        // call case 6: other requests
        var call75 = request(var_setupBlock, "apply", [0]);
        return call75;
      };    // end of method setup
      this.methods["setup"] = func73;
      func73.methodName = "setup";
      func73.paramCounts = [0];
      func73.paramNames = [];
      func73.definitionLine = 123;
      func73.definitionModule = "minispec";
      var func76 = function(argcv) {    // method teardown, line 130
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("teardown", 0, numArgs - 0);
        }
        setLineNumber(131);    // compilenode num
        var_currentTestBlock = new GraceNum(0);
        return GraceDone;
      };    // end of method teardown
      this.methods["teardown"] = func76;
      func76.methodName = "teardown";
      func76.paramCounts = [0];
      func76.paramNames = [];
      func76.definitionLine = 130;
      func76.definitionModule = "minispec";
      var func77 = function(argcv, var_r) {    // method currentResult:=(_), line 134
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("currentResult:=(_)", 0, numArgs - 1);
        }
        setLineNumber(135);    // compilenode call
        // call case 6: other requests
        if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
        var call78 = request(var_mtAssertion, "currentResult:=(1)", [1], var_r);
        return call78;
      };    // end of method currentResult:=(_)
      this.methods["currentResult:=(1)"] = func77;
      func77.methodName = "currentResult:=(1)";
      func77.paramCounts = [1];
      func77.paramNames = ["r"];
      func77.definitionLine = 134;
      func77.definitionModule = "minispec";
      var func79 = function(argcv) {    // method runTest, line 138
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("runTest", 0, numArgs - 0);
        }
        return GraceDone;
      };    // end of method runTest
      this.methods["runTest"] = func79;
      func79.methodName = "runTest";
      func79.paramCounts = [0];
      func79.paramNames = [];
      func79.definitionLine = 138;
      func79.definitionModule = "minispec";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 120;
          m.definitionModule = "minispec";
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
      var obj71_init = function() {    // init of object on line 120
        initFun72.call(this);
      };
      return obj71_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj71_init = obj71_build.call(inheritingObject, null, var_name__39__, var_setupBlock, var_number, this, aliases, exclusions);
    return obj71_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_)
  func70.confidential = true;
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"] = func70;
  func70.methodName = "testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)";
  func70.paramCounts = [1, 1, 1];
  func70.paramNames = ["name'", "setupBlock", "number"];
  func70.definitionLine = 118;
  func70.definitionModule = "minispec";
  var func80 = function(argcv) {    // method methods, line 144
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("methods", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("methods", "minispec", 144);
    var ouc_init = this.methods["methods$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method methods
  this.methods["methods"] = func80;
  func80.methodName = "methods";
  func80.paramCounts = [0];
  func80.paramNames = [];
  func80.definitionLine = 144;
  func80.definitionModule = "minispec";
  var func81 = function(argcv, ouc, aliases, exclusions) {    // method methods$build(_,_,_), line 144
    var returnTarget = invocationCount;
    invocationCount++;
    // call case 2: outer request
    var call82 = selfRequest(var_prelude, "clone(1)$build(3)", [1, 3], this, ouc, aliases, exclusions);
    return call82;      // from compileBuildMethodFor(_)withFreshCall(_)inside(_)
  };    // end of method methods$build(_,_,_)
  this.methods["methods$build(3)"] = func81;
  func81.methodName = "methods$build(3)";
  func81.paramCounts = [0];
  func81.paramNames = [];
  func81.definitionLine = 144;
  func81.definitionModule = "minispec";
  initFun1.call(this);
  setLineNumber(5);    // compilenode string
  var string84 = new GraceString("MinispecError");
  // call case 6: other requests
  // call case 2: outer request
  var call85 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call83 = request(call85, "refine(1)", [1], string84);
  var var_MinispecError = call83;
  var reader86_MinispecError = function() {  // reader method MinispecError
      if (var_MinispecError === undefined) raiseUninitializedVariable("MinispecError");
      return var_MinispecError;
  };
  reader86_MinispecError.isDef = true;
  reader86_MinispecError.confidential = true;
  this.methods["MinispecError"] = reader86_MinispecError;
  setLineNumber(8);    // compilenode string
  var string88 = new GraceString("nullSuite");
  // call case 6: other requests
  // call case 2: outer request
  var call89 = selfRequest(var_prelude, "Singleton", [0]);
  var call87 = request(call89, "named(1)", [1], string88);
  var var_nullSuite = call87;
  var reader90_nullSuite = function() {  // reader method nullSuite
      if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
      return var_nullSuite;
  };
  reader90_nullSuite.isDef = true;
  reader90_nullSuite.confidential = true;
  this.methods["nullSuite"] = reader90_nullSuite;
  setLineNumber(9);    // compilenode string
  var string92 = new GraceString("nullBlock");
  // call case 6: other requests
  // call case 2: outer request
  var call93 = selfRequest(var_prelude, "Singleton", [0]);
  var call91 = request(call93, "named(1)", [1], string92);
  var var_nullBlock = call91;
  var reader94_nullBlock = function() {  // reader method nullBlock
      if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
      return var_nullBlock;
  };
  reader94_nullBlock.isDef = true;
  reader94_nullBlock.confidential = true;
  this.methods["nullBlock"] = reader94_nullBlock;
  setLineNumber(11);    // compilenode vardec
  if (var_nullSuite === undefined) raiseUninitializedVariable("nullSuite");
  var var_currentTestSuite = var_nullSuite;
  var reader95_currentTestSuite = function() {  // reader method currentTestSuite
      if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
      return var_currentTestSuite;
  };
  reader95_currentTestSuite.isVar = true;
  reader95_currentTestSuite.confidential = true;
  this.methods["currentTestSuite"] = reader95_currentTestSuite;
  var writer96_currentTestSuite = function(argcv, n) {   // writer method currentTestSuite:=(_)
    var_currentTestSuite = n;
    return GraceDone;
  };
  writer96_currentTestSuite.confidential = true;
  this.methods["currentTestSuite:=(1)"] = writer96_currentTestSuite;
  setLineNumber(12);    // compilenode vardec
  if (var_nullBlock === undefined) raiseUninitializedVariable("nullBlock");
  var var_currentSetupBlock = var_nullBlock;
  var reader97_currentSetupBlock = function() {  // reader method currentSetupBlock
      if (var_currentSetupBlock === undefined) raiseUninitializedVariable("currentSetupBlock");
      return var_currentSetupBlock;
  };
  reader97_currentSetupBlock.isVar = true;
  reader97_currentSetupBlock.confidential = true;
  this.methods["currentSetupBlock"] = reader97_currentSetupBlock;
  var writer98_currentSetupBlock = function(argcv, n) {   // writer method currentSetupBlock:=(_)
    var_currentSetupBlock = n;
    return GraceDone;
  };
  writer98_currentSetupBlock.confidential = true;
  this.methods["currentSetupBlock:=(1)"] = writer98_currentSetupBlock;
  setLineNumber(13);    // compilenode num
  var var_currentTestBlock = new GraceNum(0);
  var reader99_currentTestBlock = function() {  // reader method currentTestBlock
      if (var_currentTestBlock === undefined) raiseUninitializedVariable("currentTestBlock");
      return var_currentTestBlock;
  };
  reader99_currentTestBlock.isVar = true;
  reader99_currentTestBlock.confidential = true;
  this.methods["currentTestBlock"] = reader99_currentTestBlock;
  var writer100_currentTestBlock = function(argcv, n) {   // writer method currentTestBlock:=(_)
    var_currentTestBlock = n;
    return GraceDone;
  };
  writer100_currentTestBlock.confidential = true;
  this.methods["currentTestBlock:=(1)"] = writer100_currentTestBlock;
  setLineNumber(14);    // compilenode num
  var var_testNumberToRun = new GraceNum(0);
  var reader101_testNumberToRun = function() {  // reader method testNumberToRun
      if (var_testNumberToRun === undefined) raiseUninitializedVariable("testNumberToRun");
      return var_testNumberToRun;
  };
  reader101_testNumberToRun.isVar = true;
  reader101_testNumberToRun.confidential = true;
  this.methods["testNumberToRun"] = reader101_testNumberToRun;
  var writer102_testNumberToRun = function(argcv, n) {   // writer method testNumberToRun:=(_)
    var_testNumberToRun = n;
    return GraceDone;
  };
  writer102_testNumberToRun.confidential = true;
  this.methods["testNumberToRun:=(1)"] = writer102_testNumberToRun;
  setLineNumber(15);    // compilenode vardec
  var var_errorsToBeRerun = GraceTrue;
  var reader103_errorsToBeRerun = function() {  // reader method errorsToBeRerun
      if (var_errorsToBeRerun === undefined) raiseUninitializedVariable("errorsToBeRerun");
      return var_errorsToBeRerun;
  };
  reader103_errorsToBeRerun.isVar = true;
  reader103_errorsToBeRerun.confidential = true;
  this.methods["errorsToBeRerun"] = reader103_errorsToBeRerun;
  var writer104_errorsToBeRerun = function(argcv, n) {   // writer method errorsToBeRerun:=(_)
    var_errorsToBeRerun = n;
    return GraceDone;
  };
  writer104_errorsToBeRerun.confidential = true;
  this.methods["errorsToBeRerun:=(1)"] = writer104_errorsToBeRerun;
  setLineNumber(22);    // compilenode object
  var obj105_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_minispec_22");
    this.outer_minispec_22 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(23);    // reuse call
    var initFun106 = request(var_gu, "assertion$build(3)", [null], this, [], []);  // compileReuseCall
    this.data.currentResult = undefined;
    var reader107_currentResult = function() {  // reader method currentResult
        if (this.data.currentResult === undefined) raiseUninitializedVariable("currentResult");
        return this.data.currentResult;
    };
    reader107_currentResult.isVar = true;
    reader107_currentResult.confidential = true;
    this.methods["currentResult"] = reader107_currentResult;
    var writer108_currentResult = function(argcv, n) {   // writer method currentResult:=(_)
      this.data.currentResult = n;
      return GraceDone;
    };
    this.methods["currentResult:=(1)"] = writer108_currentResult;
    var func109 = function(argcv) {    // method countOneAssertion, line 30
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
      }
      setLineNumber(31);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call111 = selfRequest(this, "currentResult", [0]);
      var call110 = request(call111, "countOneAssertion", [0]);
      return call110;
    };    // end of method countOneAssertion
    this.methods["countOneAssertion"] = func109;
    func109.methodName = "countOneAssertion";
    func109.paramCounts = [0];
    func109.paramNames = [];
    func109.definitionLine = 30;
    func109.definitionModule = "minispec";
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 22;
        m.definitionModule = "minispec";
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
    var obj105_init = function() {    // init of object on line 22
      initFun106.call(this);
      setLineNumber(24);    // compilenode object
      var obj112_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_minispec_24");
        this.outer_minispec_24 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        var func113 = function(argcv) {    // method countOneAssertion, line 25
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
          }
          setLineNumber(26);    // compilenode string
          var string114 = new GraceString("countOneAssertion requested on dummy result");
          Grace_print(string114);
          return GraceDone;
        };    // end of method countOneAssertion
        this.methods["countOneAssertion"] = func113;
        func113.methodName = "countOneAssertion";
        func113.paramCounts = [0];
        func113.paramNames = [];
        func113.definitionLine = 25;
        func113.definitionModule = "minispec";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 24;
            m.definitionModule = "minispec";
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
        var obj112_init = function() {    // init of object on line 24
        };
        return obj112_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj112 = emptyGraceObject("object", "minispec", 24);
      var obj112_init = obj112_build.call(obj112, null, this, [], []);
      obj112_init.call(obj112);  // end of compileobject
      this.data.currentResult = obj112;
    };
    return obj105_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj105 = emptyGraceObject("mtAssertion", "minispec", 22);
  var obj105_init = obj105_build.call(obj105, null, this, [], []);
  obj105_init.call(obj105);  // end of compileobject
  var var_mtAssertion = obj105;
  var reader115_mtAssertion = function() {  // reader method mtAssertion
      if (var_mtAssertion === undefined) raiseUninitializedVariable("mtAssertion");
      return var_mtAssertion;
  };
  reader115_mtAssertion.isDef = true;
  reader115_mtAssertion.confidential = true;
  this.methods["mtAssertion"] = reader115_mtAssertion;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_minispec = gracecode_minispec;
if (typeof window !== "undefined")
  window.gracecode_minispec = gracecode_minispec;
gracecode_minispec.imports = ["gUnit", "standardGrace"];
gracecode_minispec.definitionModule = "minispec";
gracecode_minispec.definitionLine = 1;
