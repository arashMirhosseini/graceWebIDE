var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["gUnit"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n assertion\n testCaseNamed(1)\n testRecordFor(1)message(1)\n testResult\nfresh:assertion:\n AssertionFailure\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldRaise(1)mentioning(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n countOneAssertion\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n methodsIn(1)missingFrom(1)\n protocolOf(1)notCoveredBy(1)\nfresh:testCaseNamed(1):\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldRaise(1)mentioning(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n countOneAssertion\n currentResult\n currentResult:=(_)\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n isMe(1)\n methodsIn(1)missingFrom(1)\n myIdentityHash\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\nfresh:testRecordFor(1)message(1):\n ::(1)\n <(1)\n ==(1)\n >(1)\n asString\n compare(1)\n hash\n message\n name\n \u2260(1)\n \u2264(1)\n \u2265(1)\nfresh:testResult:\n countOneAssertion\n currentCountOfAssertions\n currentCountOfAssertions:=(_)\n detailedSummary\n errorSet\n errorSet:=(_)\n erroredTestNames\n errors\n failSet\n failSet:=(_)\n failedTestNames\n failures\n numberOfErrors\n numberOfFailures\n numberRun\n runCount\n runCount:=(_)\n summary\n testErrored(1)withMessage(1)\n testFailed(1)withMessage(1)\n testFinished(1)\n testStarted(1)\nmethodtypes-of:Assertion:\n 1 assert(b:Procedure0)shouldRaise(desireed:ExceptionKind) \u2192 Done\n 1 assert(b:Procedure0)shouldntRaise(undesired:ExceptionKind) \u2192 Done\n 1 assert(bb:Boolean) \u2192 Done\n 1 assert(bb:Boolean)description(str:String) \u2192 Done\n 1 assert(n1:Number)shouldEqual(n2:Number)within(epsilon:Number) \u2192 Done\n 1 assert(s1:Object)shouldBe(s2:Object) \u2192 Done\n 1 assert(s1:Object)shouldntBe(s2:Object) \u2192 Done\n 1 assert(s:Object)hasType(t:Type) \u2192 Done\n 1 deny(bb:Boolean) \u2192 Done\n 1 deny(bb:Boolean)description(str:String) \u2192 Done\n 1 deny(s:Object)hasType(t:Type) \u2192 Done\n 1 failBecause(Message:String) \u2192 Done\nmethodtypes-of:TestCase:\n & 2\n & Assertion\n 2 debug(_:TestResult) \u2192 Done\n 2 name \u2192 String\n 2 run(_:TestResult) \u2192 Done\n 2 size \u2192 Number\nmethodtypes-of:TestRecord:\n 2 message \u2192 String\n 2 name \u2192 String\nmethodtypes-of:TestResult:\n 2 detailedSummary \u2192 String\n 2 doNotRerunErrors \u2192 Done\n 2 doRerunErrors \u2192 Done\n 2 erroredTestNames \u2192 List\u27e6String\u27e7\n 2 errors \u2192 List\u27e6TestRecord\u27e7\n 2 failedTestNames \u2192 List\u27e6String\u27e7\n 2 failures \u2192 List\u27e6TestRecord\u27e7\n 2 numberOfErrors \u2192 Number\n 2 numberOfFailures \u2192 Number\n 2 numberRun \u2192 Number\n 2 summary \u2192 String\n 2 testErrored(name:String) \u2192 Done\n 2 testFailed(name:String) \u2192 Done\n 2 testFinished(name:String) \u2192 Done\n 2 testStarted(name:String) \u2192 Done\nmethodtypes-of:TestSuite:\n & 3\n & TestCase\n 3 add(t:TestCase) \u2192 Done\n 3 rerunErrors(r:TestResult) \u2192 Done\nmodules:\n collectionsPrelude\n mirrors\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/gUnit.grace\npublic:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n assertion\n className(1)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n testCaseNamed(1)\n testRecordFor(1)message(1)\n testResult\n testSuite\npublicMethodTypes:\n assertion\n className(testClass)\n numberOfErrorsToRerun \u2192 Unknown\n numberOfErrorsToRerun:=(numberOfErrorsToRerun': Unknown) \u2192 Done\n testCaseNamed(name') \u2192 TestCase\n testRecordFor(testName)message(testMsg)\n testResult\n testSuite \u2192 Unknown\ntypes:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["gUnit"] = [
    "// GUnit.grace",
    "// GUnit project",
    "//",
    "// Created by Andrew Black on 6/26/12.",
    "",
    "",
    "import \"mirrors\" as mirror",
    "",
    "type Assertion = { ",
    "    assert(bb:Boolean) description(str:String) -> Done",
    "    deny(bb:Boolean) description (str:String)  -> Done",
    "    assert(bb:Boolean) -> Done",
    "    deny(bb:Boolean) -> Done",
    "    assert(s1:Object) shouldBe(s2:Object) -> Done",
    "    assert(s1:Object) shouldntBe(s2:Object) -> Done",
    "    assert(n1:Number) shouldEqual(n2:Number) within(epsilon:Number) -> Done",
    "    assert(b:Procedure0) shouldRaise(desireed:ExceptionKind) -> Done",
    "    assert(b:Procedure0) shouldntRaise(undesired:ExceptionKind) -> Done",
    "    assert(s:Object) hasType(t:Type) -> Done",
    "    deny(s:Object) hasType(t:Type) -> Done",
    "    failBecause(Message:String) -> Done",
    "}",
    "   ",
    "type TestCase = Assertion & interface {",
    "    run(_:TestResult) -> Done",
    "    debug(_:TestResult) -> Done",
    "    size -> Number",
    "    name -> String",
    "}",
    "",
    "type TestRecord = {",
    "    name -> String",
    "    message -> String",
    "}",
    "",
    "type TestResult =  {",
    "    testStarted(name:String) -> Done",
    "    testFailed(name:String) -> Done",
    "    testErrored(name:String) -> Done",
    "    testFinished(name:String) -> Done",
    "    erroredTestNames -> List⟦String⟧",
    "    failedTestNames -> List⟦String⟧",
    "    summary -> String",
    "    detailedSummary -> String",
    "    numberOfErrors -> Number",
    "    errors -> List⟦TestRecord⟧",
    "    numberOfFailures -> Number",
    "    failures -> List⟦TestRecord⟧",
    "    numberRun -> Number",
    "    doNotRerunErrors -> Done",
    "    doRerunErrors -> Done",
    "}",
    "",
    "type TestSuite = TestCase & interface {",
    "    add(t:TestCase) -> Done",
    "    rerunErrors(r:TestResult) -> Done",
    "}",
    "",
    "var numberOfErrorsToRerun is public := 10",
    "",
    "class assertion {",
    "    def AssertionFailure is readable = Exception.refine \"AssertionFailure\"",
    "    method countOneAssertion { abstract }",
    "    ",
    "    method failBecause(str) {",
    "        assert (false) description (str)",
    "    }",
    "    method assert(bb: Boolean)description(str) {",
    "        countOneAssertion",
    "        if (! bb) then { AssertionFailure.raise(str) }",
    "    }",
    "    method deny(bb: Boolean) description (str) {",
    "        assert (! bb) description (str)",
    "    }",
    "    method assert(bb: Boolean) {",
    "        assert (bb) description \"Assertion failed!\"",
    "    }",
    "    method deny(bb: Boolean) {",
    "        assert (! bb)",
    "    }",
    "    method assert(s1:Object) shouldBe (s2:Object) {",
    "        assert (s1 == s2)",
    "            description \"‹{s1.asDebugString}› should be ‹{s2.asDebugString}›\"",
    "    }",
    "    method assert(s1:Object) shouldntBe (s2:Object) {",
    "        assert ((s1 == s2).not)",
    "            description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
    "    }",
    "    method deny(s1:Object) shouldBe (s2:Object) {",
    "        assert ((s1 == s2).not)",
    "            description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
    "    }",
    "    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
    "        assert ((n1 - n2).abs ≤ epsilon)",
    "            description \"‹{n1.asDebugString}› should be approximately ‹{n2.asDebugString}›\"",
    "    }",
    "    method assert(block0) shouldRaise (desiredException) {",
    "        assert(block0) shouldRaise (desiredException) mentioning \"\"",
    "    }",
    "    method assert(block0) shouldRaise (desiredException) mentioning (error) {",
    "        var completedNormally",
    "        countOneAssertion",
    "        try {",
    "            block0.apply",
    "            completedNormally := true",
    "        } catch { raisedException:desiredException ->",
    "            completedNormally := false",
    "            if (raisedException.message.contains(error).not) then {",
    "                failBecause(\"code raised exception {raisedException.exception},\"",
    "                    ++ \" but the message was \\\"{raisedException.message}\\\",\"",
    "                    ++ \" which does not mention \\\"{error}\\\"\")",
    "            }",
    "        } catch { raisedException ->",
    "            failBecause(\"code raised exception {raisedException.exception}\" ++",
    "                \": \\\"{raisedException.message}\\\" instead of {desiredException}\")",
    "        }",
    "        if (completedNormally) then {failBecause \"code did not raise an exception\"}",
    "    }",
    "    method assert(block0) shouldntRaise (undesiredException) {",
    "        countOneAssertion",
    "        try {",
    "            block0.apply",
    "        } catch { raisedException:undesiredException ->",
    "            failBecause \"code raised exception {raisedException.exception}\"",
    "        } catch { _ -> ",
    "            // do nothing; it's OK to raise a different exception.",
    "        }",
    "    }",
    "    method assert(value) hasType (Desired:Type) {",
    "        if (Desired.matches(value)) then {",
    "            countOneAssertion",
    "        } else {",
    "            def m = methodsIn(Desired) missingFrom (value)",
    "            def s = if (m.contains \" \") then { \"s\" } else { \"\" }",
    "            failBecause \"{value.asDebugString} does not have {Desired}; it's missing method{s} {m}.\"",
    "        }",
    "    }",
    "    method assertType(T:Type) describes (value) {",
    "        def missingFromT = protocolOf(value) notCoveredBy(T)",
    "        assert (missingFromT.isEmpty) description (missingFromT)",
    "    }",
    "",
    "    method methodsIn(DesiredType) missingFrom (value) -> String is confidential {",
    "        def vMirror = mirror.reflect(value)",
    "        def allMethods = vMirror.methodNames",
    "        def publicMethods = allMethods.filter{ each ->",
    "            vMirror.onMethod(each).isPublic} >> set",
    "        def tMethods = DesiredType.methodNames",
    "        def missing = tMethods -- publicMethods",
    "        if (missing.isEmpty) then {",
    "            ProgrammingError.raise \"{value.asDebugString} seems to have all the methods of {DesiredType}\"",
    "        } else {",
    "            var s := \"\"",
    "            missing.do { each -> s := s ++ each } ",
    "                separatedBy { s := s ++ \", \" }",
    "            s",
    "        }",
    "    }",
    "    method protocolOf(value) notCoveredBy (Q:Type) -> String is confidential {",
    "        var s := \"\"",
    "        def vMirror = mirror.reflect(value)",
    "        def allMethods = vMirror.methodNames",
    "        def publicMethods = allMethods.filter{ each ->",
    "            vMirror.onMethod(each).isPublic} >> set",
    "        def qMethods = set.withAll(Q.methodNames)",
    "        def missing = publicMethods -- qMethods",
    "        if (missing.isEmpty.not) then {",
    "            s := \"{Q} is missing \"",
    "            missing.do { each -> s := s ++ each } ",
    "                separatedBy { s := s ++ \", \" }",
    "        }",
    "        return s",
    "    }",
    "    method deny(value) hasType (Undesired:Type) {",
    "        if (Undesired.matches(value)) then {",
    "            failBecause \"{value.asDebugString} has type {Undesired}\"",
    "        } else { ",
    "            countOneAssertion ",
    "        }",
    "    }",
    "}",
    "",
    "class testCaseNamed(name') -> TestCase {",
    "    inherit assertion",
    "",
    "    def size is public = 1",
    "    var currentResult",
    "    method name {name'}",
    "",
    "    method setup { }",
    "    method teardown { }",
    "    method countOneAssertion {",
    "        currentResult.countOneAssertion",
    "    }",
    "",
    "    method run (result) {",
    "        currentResult := result",
    "        result.testStarted(name)",
    "        try {",
    "            try {",
    "                setup",
    "                runTest",
    "            } finally { teardown }",
    "        } catch {e: self.AssertionFailure ->",
    "            result.testFailed(name)withMessage(e.message)",
    "        } catch {e: Exception ->",
    "            result.testErrored(name)withMessage \"{e.exception}: {e.message}\"",
    "        }",
    "        result.testFinished(name)",
    "    }",
    "",
    "    method debug (result) {",
    "        currentResult := result",
    "        result.testStarted(name)",
    "        try {",
    "            print \"\\ndebugging method {name} ...\"",
    "            try {",
    "                setup",
    "                runTest",
    "            } finally { teardown }",
    "        } catch {e: Exception ->",
    "            result.testErrored(name)withMessage(e.message)",
    "            printBackTrace(e) limitedTo(name)",
    "        }",
    "        result.testFinished(name)",
    "    }",
    "    ",
    "    method runTest {",
    "        def methodImage = mirror.reflect(self).onMethod(name)",
    "        methodImage.requestWithArgs []",
    "    }",
    "",
    "    method printBackTrace(exceptionPacket) limitedTo(testName) {",
    "        def ex = exceptionPacket.exception",
    "        def msg = exceptionPacket.message",
    "        def lineNr = exceptionPacket.lineNumber",
    "        def modName = exceptionPacket.moduleName",
    "        if (lineNr == 0) then {",
    "            if (modName == \"native code\") then {",
    "                print \"{ex}: {msg}\"",
    "            } else {",
    "                print \"{ex} in {modName}: {msg}\"",
    "            }",
    "        } else {",
    "            print \"{ex} on line {lineNr} of {modName}: {msg}\"",
    "        }",
    "        def bt = exceptionPacket.backtrace",
    "        while {bt.size > 0} do {",
    "            def frameDescription = bt.pop",
    "            print(\"  requested from \" ++ frameDescription)",
    "            if (frameDescription.contains(testName)) then { return }",
    "            if (frameDescription.contains \"test(_)by(_)\") then {  ",
    "                // this is for minitest, where testName won't be on the stack",
    "                return",
    "            }",
    "        }",
    "    }",
    "",
    "    method runAndPrintResults {",
    "        def result = testResult",
    "        self.run(result)",
    "        if (name == \"\") then {",
    "            print \"{result.detailedSummary}\"",
    "        } else {",
    "            print \"{self.name}: {result.detailedSummary}\"",
    "        }",
    "    }",
    "    ",
    "    method debugAndPrintResults {",
    "        def result = testResult",
    "        self.debug(result)",
    "        if (name == \"\") then {",
    "            print \"{result.detailedSummary}\"",
    "        } else {",
    "            print \"{self.name}: {result.detailedSummary}\"",
    "        }",
    "    }",
    "}",
    "",
    "",
    "class testResult {",
    "    var failSet := emptySet",
    "    var errorSet := emptySet",
    "    var runCount := 0",
    "    var currentCountOfAssertions := 0",
    "",
    "    method countOneAssertion {",
    "        currentCountOfAssertions := currentCountOfAssertions + 1",
    "    }",
    "",
    "    method testStarted(name) {",
    "        runCount := runCount + 1",
    "        currentCountOfAssertions := 0",
    "    }",
    "",
    "    method testFinished(name) {",
    "        if(currentCountOfAssertions == 0) then {",
    "            failSet.add(testRecordFor(name)message(\"no assertions were checked in this test\"))",
    "        }",
    "    }",
    "    ",
    "    method testFailed(name)withMessage(msg) {",
    "        failSet.add(testRecordFor(name)message(msg))",
    "    }",
    "    ",
    "    method testErrored(name)withMessage(msg) {",
    "        errorSet.add(testRecordFor(name)message(msg))",
    "        currentCountOfAssertions := 1   // to prevent the \"no assertions\" failure",
    "    }",
    "    ",
    "    method summary {",
    "        def s = if (numberOfErrors == 1) then {\"\"} else {\"s\"}",
    "        \"{runCount} run, {numberOfFailures} failed, {numberOfErrors} error{s}\"",
    "    }",
    "    ",
    "    method detailedSummary {",
    "        var output := summary",
    "        if (numberOfFailures > 0) then {",
    "            output := output ++ \"\\nFailures:\"",
    "            for (list.withAll(failSet).sort) do { each ->",
    "                output := output ++ \"\\n    \" ++ each",
    "            }",
    "        }",
    "        if (numberOfErrors > 0) then {",
    "            output := output ++ \"\\nErrors:\"",
    "            for (list.withAll(errorSet).sort) do { each ->",
    "                output := output ++ \"\\n    \" ++ each",
    "            }",
    "        }",
    "        output",
    "    }",
    "    ",
    "    method numberOfErrors {",
    "        errorSet.size",
    "    }",
    "    ",
    "    method errors {",
    "        list.withAll(errorSet).sort",
    "    }",
    "    ",
    "    method erroredTestNames {",
    "        list.withAll(errorSet.map{each -> each.name}).sort",
    "    }",
    "    ",
    "    method numberOfFailures {",
    "        failSet.size",
    "    }",
    "    ",
    "    method failures {",
    "        list.withAll(failSet).sort",
    "    }",
    "    ",
    "    method failedTestNames {",
    "        list.withAll(failSet.map{each -> each.name}).sort",
    "    }",
    "    ",
    "    method numberRun {",
    "        runCount",
    "    }",
    "}",
    "",
    "class testRecordFor(testName)message(testMsg) {",
    "    use equality",
    "    method name {testName}",
    "    method message {testMsg}",
    "    method asString {\"{name}: {testMsg}\"}",
    "    method hash {name.hash}",
    "    method compare(other) { name.compare(other.name) }",
    "    method < (other) { name < other.name }",
    "    method ≤ (other) { name ≤ other.name }",
    "    method == (other) { name == other.name }",
    "    method > (other) { name < other.name }",
    "    method ≥ (other) { name ≥ other.name }",
    "}",
    "",
    "def testSuite is public = object {",
    "",
    "    class withAll(initialContents) {",
    "        use collections.enumerable",
    "        var name is public := \"\"",
    "        def tests = list [ ]",
    "        def testNames = emptySet",
    "        var errorsToBeRerun := true",
    "",
    "        method doNotRerunErrors { errorsToBeRerun := false }",
    "        method doRerunErrors { errorsToBeRerun := true }",
    "        for (initialContents) do { each -> self.add(each) }",
    "                ",
    "        method add(e) {",
    "            def eName = e.name",
    "            if (testNames.contains (eName)) then {",
    "                print \"Warning: more than one test named \\\"{eName}\\\"\"",
    "            } else {",
    "                testNames.add(eName)",
    "            }",
    "            tests.push(e)",
    "        }",
    "",
    "        method testAt(index) {",
    "            tests.at(index)",
    "        }",
    "        ",
    "        method run(result) {",
    "            for (tests) do { each -> each.run(result) }",
    "        }",
    "        ",
    "        method debug(result) {",
    "            for (tests) do { each -> each.debug(result) }",
    "        }",
    "",
    "        method size { tests.size }",
    "        ",
    "        method runAndPrintResults {",
    "            def result = testResult",
    "            self.run(result)",
    "            if (name == \"\") then {",
    "                print \"{result.detailedSummary}\"",
    "            } else {",
    "                print \"{self.name}: {result.detailedSummary}\"",
    "            }",
    "            if ((result.numberOfErrors > 0) && errorsToBeRerun) then {",
    "                rerunErrors(result)",
    "            }",
    "        }",
    "        ",
    "        method debugAndPrintResults {",
    "            def result = testResult",
    "            self.debug(result)",
    "            if (name == \"\") then {",
    "                print \"{result.detailedSummary}\"",
    "            } else {",
    "                print \"{self.name}: {result.detailedSummary}\"",
    "            }",
    "        }",
    "        ",
    "        method iterator { tests.iterator }",
    "        method do (aBlock) { tests.do (aBlock) }",
    "        method addAll(anotherSuite) {",
    "            anotherSuite.do { each -> self.add(each) }",
    "            self",
    "        }",
    "        method ++ (anotherSuite) {",
    "            outer.withAll(tests).addAll(anotherSuite)",
    "        }",
    "        method rerunErrors(result) {",
    "            if (numberOfErrorsToRerun ≤ 0) then { return }",
    "            var n := min(result.numberOfErrors, numberOfErrorsToRerun)",
    "            if (n == 1) then {",
    "                print \"\\nRe-running 1 error.\"",
    "            } else {",
    "                print \"\\nRe-running {n} errors.\"",
    "            }",
    "            def newResult = testResult",
    "            def errors = result.erroredTestNames",
    "            tests.do { each ->",
    "                if (errors.contains(each.name)) then {",
    "                    each.debug(newResult)",
    "                    n := n - 1",
    "                    if (n == 0) then { return }",
    "                }",
    "            }",
    "        }",
    "    }",
    "    ",
    "    method empty { withAll [] }",
    "    ",
    "    method fromTestMethodsIn(aTestClass) named (aName) {",
    "        def newSuite = self.empty",
    "        def example = aTestClass.forMethod(\"null\")",
    "        newSuite.name := aName",
    "        for (mirror.reflect(example).methods) do { each ->",
    "            if (each.name.startsWith \"test\") then {",
    "                if (! each.name.contains \"$\") then {",
    "                    // we should also check that there are no arguments",
    "                    // but the C-backend needs to emit the metadata",
    "                    newSuite.add(aTestClass.forMethod(each.name))",
    "                }",
    "            }",
    "        }",
    "        newSuite",
    "    }",
    "    ",
    "    method fromTestMethodsIn(aTestClass) {",
    "        fromTestMethodsIn(aTestClass) named (className(aTestClass))",
    "    }",
    "}",
    "",
    "method className(testClass) {",
    "    def cName = testClass.asString",
    "    if (cName.startsWith \"class \") then {",
    "        cName.substringFrom 7 to (cName.size)",
    "    } elseif { cName.startsWith \"trait \" } then {",
    "        cName.substringFrom 7 to (cName.size)",
    "    } elseif { cName.startsWith \"a \" } then {",
    "        cName.substringFrom 3 to (cName.size)",
    "    } elseif { cName.startsWith \"an \" } then {",
    "        cName.substringFrom 4 to (cName.size)",
    "    } else {",
    "        \"un-named\"",
    "    }",
    "}" ];
}
function gracecode_gUnit() {
  importedModules["gUnit"] = this;
  var module$gUnit = this;
  this.definitionModule = "gUnit";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_gUnit_1");
  this.outer_gUnit_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(7);    // compilenode import
  // Import of "mirrors" as mirror
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirror = do_import("mirrors", gracecode_mirrors);
  var func0 = function(argcv) {     // accessor method mirror
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("mirror", 0, numArgs - 0);
    if (var_mirror === undefined) raiseUninitializedVariable("mirror");
    return var_mirror;
  };    // end of method mirror
  this.methods["mirror"] = func0;
  func0.methodName = "mirror";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 7;
  func0.definitionModule = "gUnit";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(9);    // compilenode typedec
  // Type decl Assertion
  var func2 = function(argcv) {    // method Assertion, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(9);    // compilenode typeliteral
    //   Type literal 
    var typeLit3 = new GraceType("Assertion");
    typeLit3.typeMethods.push("assert(1)description(1)");
    typeLit3.typeMethods.push("deny(1)description(1)");
    typeLit3.typeMethods.push("assert(1)");
    typeLit3.typeMethods.push("deny(1)");
    typeLit3.typeMethods.push("assert(1)shouldBe(1)");
    typeLit3.typeMethods.push("assert(1)shouldntBe(1)");
    typeLit3.typeMethods.push("assert(1)shouldEqual(1)within(1)");
    typeLit3.typeMethods.push("assert(1)shouldRaise(1)");
    typeLit3.typeMethods.push("assert(1)shouldntRaise(1)");
    typeLit3.typeMethods.push("assert(1)hasType(1)");
    typeLit3.typeMethods.push("deny(1)hasType(1)");
    typeLit3.typeMethods.push("failBecause(1)");
    return typeLit3;
  };    // end of method Assertion
  function memofunc2(argcv) {
      if (! this.data["memo$Assertion"])    // parameterless memo function
          this.data["memo$Assertion"] = func2.call(this, argcv);
      return this.data["memo$Assertion"];
  };
  this.methods["Assertion"] = memofunc2;
  memofunc2.methodName = "Assertion";
  memofunc2.paramCounts = [0];
  memofunc2.paramNames = [];
  memofunc2.definitionLine = 1;
  memofunc2.definitionModule = "gUnit";
  func2.methodName = "Assertion";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 1;
  func2.definitionModule = "gUnit";
  setLineNumber(24);    // compilenode typedec
  // Type decl TestCase
  var func5 = function(argcv) {    // method TestCase, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string7 = new GraceString("TestCase");
    // call case 6: other requests
    setLineNumber(24);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call8 = selfRequest(this, "Assertion", [0]);
    //   Type literal 
    var typeLit9 = new GraceType("\u2039anon\u203a");
    typeLit9.typeMethods.push("run(1)");
    typeLit9.typeMethods.push("debug(1)");
    typeLit9.typeMethods.push("size");
    typeLit9.typeMethods.push("name");
    var opresult10 = request(call8, "&(1)", [1], typeLit9);
    var call6 = selfRequest(opresult10, "setName(1)", [1], string7);
    return call6;
  };    // end of method TestCase
  function memofunc5(argcv) {
      if (! this.data["memo$TestCase"])    // parameterless memo function
          this.data["memo$TestCase"] = func5.call(this, argcv);
      return this.data["memo$TestCase"];
  };
  this.methods["TestCase"] = memofunc5;
  memofunc5.methodName = "TestCase";
  memofunc5.paramCounts = [0];
  memofunc5.paramNames = [];
  memofunc5.definitionLine = 1;
  memofunc5.definitionModule = "gUnit";
  func5.methodName = "TestCase";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 1;
  func5.definitionModule = "gUnit";
  setLineNumber(31);    // compilenode typedec
  // Type decl TestRecord
  var func12 = function(argcv) {    // method TestRecord, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(31);    // compilenode typeliteral
    //   Type literal 
    var typeLit13 = new GraceType("TestRecord");
    typeLit13.typeMethods.push("name");
    typeLit13.typeMethods.push("message");
    return typeLit13;
  };    // end of method TestRecord
  function memofunc12(argcv) {
      if (! this.data["memo$TestRecord"])    // parameterless memo function
          this.data["memo$TestRecord"] = func12.call(this, argcv);
      return this.data["memo$TestRecord"];
  };
  this.methods["TestRecord"] = memofunc12;
  memofunc12.methodName = "TestRecord";
  memofunc12.paramCounts = [0];
  memofunc12.paramNames = [];
  memofunc12.definitionLine = 1;
  memofunc12.definitionModule = "gUnit";
  func12.methodName = "TestRecord";
  func12.paramCounts = [0];
  func12.paramNames = [];
  func12.definitionLine = 1;
  func12.definitionModule = "gUnit";
  setLineNumber(36);    // compilenode typedec
  // Type decl TestResult
  var func15 = function(argcv) {    // method TestResult, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(36);    // compilenode typeliteral
    //   Type literal 
    var typeLit16 = new GraceType("TestResult");
    typeLit16.typeMethods.push("testStarted(1)");
    typeLit16.typeMethods.push("testFailed(1)");
    typeLit16.typeMethods.push("testErrored(1)");
    typeLit16.typeMethods.push("testFinished(1)");
    typeLit16.typeMethods.push("erroredTestNames");
    typeLit16.typeMethods.push("failedTestNames");
    typeLit16.typeMethods.push("summary");
    typeLit16.typeMethods.push("detailedSummary");
    typeLit16.typeMethods.push("numberOfErrors");
    typeLit16.typeMethods.push("errors");
    typeLit16.typeMethods.push("numberOfFailures");
    typeLit16.typeMethods.push("failures");
    typeLit16.typeMethods.push("numberRun");
    typeLit16.typeMethods.push("doNotRerunErrors");
    typeLit16.typeMethods.push("doRerunErrors");
    return typeLit16;
  };    // end of method TestResult
  function memofunc15(argcv) {
      if (! this.data["memo$TestResult"])    // parameterless memo function
          this.data["memo$TestResult"] = func15.call(this, argcv);
      return this.data["memo$TestResult"];
  };
  this.methods["TestResult"] = memofunc15;
  memofunc15.methodName = "TestResult";
  memofunc15.paramCounts = [0];
  memofunc15.paramNames = [];
  memofunc15.definitionLine = 1;
  memofunc15.definitionModule = "gUnit";
  func15.methodName = "TestResult";
  func15.paramCounts = [0];
  func15.paramNames = [];
  func15.definitionLine = 1;
  func15.definitionModule = "gUnit";
  setLineNumber(54);    // compilenode typedec
  // Type decl TestSuite
  var func18 = function(argcv) {    // method TestSuite, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string20 = new GraceString("TestSuite");
    // call case 6: other requests
    setLineNumber(54);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call21 = selfRequest(this, "TestCase", [0]);
    //   Type literal 
    var typeLit22 = new GraceType("\u2039anon\u203a");
    typeLit22.typeMethods.push("add(1)");
    typeLit22.typeMethods.push("rerunErrors(1)");
    var opresult23 = request(call21, "&(1)", [1], typeLit22);
    var call19 = selfRequest(opresult23, "setName(1)", [1], string20);
    return call19;
  };    // end of method TestSuite
  function memofunc18(argcv) {
      if (! this.data["memo$TestSuite"])    // parameterless memo function
          this.data["memo$TestSuite"] = func18.call(this, argcv);
      return this.data["memo$TestSuite"];
  };
  this.methods["TestSuite"] = memofunc18;
  memofunc18.methodName = "TestSuite";
  memofunc18.paramCounts = [0];
  memofunc18.paramNames = [];
  memofunc18.definitionLine = 1;
  memofunc18.definitionModule = "gUnit";
  func18.methodName = "TestSuite";
  func18.paramCounts = [0];
  func18.paramNames = [];
  func18.definitionLine = 1;
  func18.definitionModule = "gUnit";
  var func24 = function(argcv) {    // method assertion, line 61
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("assertion", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("assertion", "gUnit", 61);
    var ouc_init = this.methods["assertion$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method assertion
  this.methods["assertion"] = func24;
  func24.methodName = "assertion";
  func24.paramCounts = [0];
  func24.paramNames = [];
  func24.definitionLine = 61;
  func24.definitionModule = "gUnit";
  var func25 = function(argcv, inheritingObject, aliases, exclusions) {    // method assertion$build(_,_,_), line 61
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("assertion", 0, numArgs - 0);
    }
    var obj26_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_gUnit_61");
      this.outer_gUnit_61 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.AssertionFailure = undefined;
      var reader27_AssertionFailure = function() {  // reader method AssertionFailure
          if (this.data.AssertionFailure === undefined) raiseUninitializedVariable("AssertionFailure");
          return this.data.AssertionFailure;
      };
      reader27_AssertionFailure.isDef = true;
      this.methods["AssertionFailure"] = reader27_AssertionFailure;
      var func28 = function(argcv) {    // method countOneAssertion, line 63
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
        }
        setLineNumber(63);    // compilenode member
        // call case 2: outer request
        var call29 = selfRequest(var_prelude, "abstract", [0]);
        return call29;
      };    // end of method countOneAssertion
      this.methods["countOneAssertion"] = func28;
      func28.methodName = "countOneAssertion";
      func28.paramCounts = [0];
      func28.paramNames = [];
      func28.definitionLine = 63;
      func28.definitionModule = "gUnit";
      var func30 = function(argcv, var_str) {    // method failBecause(_), line 65
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("failBecause(_)", 0, numArgs - 1);
        }
        setLineNumber(66);    // compilenode call
        // call case 4: self request with 2 args and 0 typeArgs 
        var call31 = selfRequest(this, "assert(1)description(1)", [1, 1], GraceFalse, var_str);
        return call31;
      };    // end of method failBecause(_)
      this.methods["failBecause(1)"] = func30;
      func30.methodName = "failBecause(1)";
      func30.paramCounts = [1];
      func30.paramNames = ["str"];
      func30.definitionLine = 65;
      func30.definitionModule = "gUnit";
      var func32 = function(argcv, var_bb, var_str) {    // method assert(_)description(_), line 68
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)description(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `assert(_)description(_)`", "Boolean");
        setLineNumber(69);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call33 = selfRequest(this, "countOneAssertion", [0]);
        var if34 = GraceDone;
        setLineNumber(70);    // compilenode call
        // call case 6: other requests
        var call35 = request(var_bb, "prefix!", [0]);
        if (Grace_isTrue(call35)) {
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call37 = selfRequest(this, "AssertionFailure", [0]);
          var call36 = request(call37, "raise(1)", [1], var_str);
          if34 = call36;
        }
        return if34;
      };    // end of method assert(_)description(_)
      func32.paramTypes = [];
      func32.paramTypes.push([type_Boolean, "bb"]);
      func32.paramTypes.push([]);
      this.methods["assert(1)description(1)"] = func32;
      func32.methodName = "assert(1)description(1)";
      func32.paramCounts = [1, 1];
      func32.paramNames = ["bb", "str"];
      func32.definitionLine = 68;
      func32.definitionModule = "gUnit";
      var func38 = function(argcv, var_bb, var_str) {    // method deny(_)description(_), line 72
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("deny(_)description(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_bb, var_Boolean, "argument 1 in request of `deny(_)description(_)`", "Boolean");
        setLineNumber(73);    // compilenode call
        // call case 6: other requests
        var call40 = request(var_bb, "prefix!", [0]);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call39 = selfRequest(this, "assert(1)description(1)", [1, 1], call40, var_str);
        return call39;
      };    // end of method deny(_)description(_)
      func38.paramTypes = [];
      func38.paramTypes.push([type_Boolean, "bb"]);
      func38.paramTypes.push([]);
      this.methods["deny(1)description(1)"] = func38;
      func38.methodName = "deny(1)description(1)";
      func38.paramCounts = [1, 1];
      func38.paramNames = ["bb", "str"];
      func38.definitionLine = 72;
      func38.definitionModule = "gUnit";
      var func41 = function(argcv, var_bb) {    // method assert(_), line 75
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("assert(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `assert(_)`", "Boolean");
        setLineNumber(76);    // compilenode string
        var string43 = new GraceString("Assertion failed!");
        // call case 4: self request with 2 args and 0 typeArgs 
        var call42 = selfRequest(this, "assert(1)description(1)", [1, 1], var_bb, string43);
        return call42;
      };    // end of method assert(_)
      func41.paramTypes = [];
      func41.paramTypes.push([type_Boolean, "bb"]);
      this.methods["assert(1)"] = func41;
      func41.methodName = "assert(1)";
      func41.paramCounts = [1];
      func41.paramNames = ["bb"];
      func41.definitionLine = 75;
      func41.definitionModule = "gUnit";
      var func44 = function(argcv, var_bb) {    // method deny(_), line 78
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("deny(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_bb, var_Boolean, "argument to request of `deny(_)`", "Boolean");
        setLineNumber(79);    // compilenode call
        // call case 6: other requests
        var call46 = request(var_bb, "prefix!", [0]);
        // call case 4: self request with 1 args and 0 typeArgs 
        var call45 = selfRequest(this, "assert(1)", [1], call46);
        return call45;
      };    // end of method deny(_)
      func44.paramTypes = [];
      func44.paramTypes.push([type_Boolean, "bb"]);
      this.methods["deny(1)"] = func44;
      func44.methodName = "deny(1)";
      func44.paramCounts = [1];
      func44.paramNames = ["bb"];
      func44.definitionLine = 78;
      func44.definitionModule = "gUnit";
      var func47 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldBe(_), line 81
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)shouldBe(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldBe(_)`", "Object");
        assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldBe(_)`", "Object");
        setLineNumber(82);    // compilenode op
        var opresult49 = request(var_s1, "==(1)", [1], var_s2);
        setLineNumber(83);    // compilenode string
        var string50 = new GraceString("\u2039");
        // call case 6: other requests
        var call51 = request(var_s1, "asDebugString", [0]);
        var opresult52 = request(string50, "++(1)", [1], call51);
        var string53 = new GraceString("\u203a should be \u2039");
        var opresult54 = request(opresult52, "++(1)", [1], string53);
        // call case 6: other requests
        var call55 = request(var_s2, "asDebugString", [0]);
        var opresult56 = request(opresult54, "++(1)", [1], call55);
        var string57 = new GraceString("\u203a");
        var opresult58 = request(opresult56, "++(1)", [1], string57);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call48 = selfRequest(this, "assert(1)description(1)", [1, 1], opresult49, opresult58);
        return call48;
      };    // end of method assert(_)shouldBe(_)
      func47.paramTypes = [];
      func47.paramTypes.push([type_Object, "s1"]);
      func47.paramTypes.push([type_Object, "s2"]);
      this.methods["assert(1)shouldBe(1)"] = func47;
      func47.methodName = "assert(1)shouldBe(1)";
      func47.paramCounts = [1, 1];
      func47.paramNames = ["s1", "s2"];
      func47.definitionLine = 81;
      func47.definitionModule = "gUnit";
      var func59 = function(argcv, var_s1, var_s2) {    // method assert(_)shouldntBe(_), line 85
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)shouldntBe(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `assert(_)shouldntBe(_)`", "Object");
        assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `assert(_)shouldntBe(_)`", "Object");
        setLineNumber(86);    // compilenode member
        // call case 6: other requests
        var opresult62 = request(var_s1, "==(1)", [1], var_s2);
        var call61 = request(opresult62, "not", [0]);
        setLineNumber(87);    // compilenode string
        var string63 = new GraceString("\u2039");
        // call case 6: other requests
        var call64 = request(var_s1, "asDebugString", [0]);
        var opresult65 = request(string63, "++(1)", [1], call64);
        var string66 = new GraceString("\u203a should not be \u2039");
        var opresult67 = request(opresult65, "++(1)", [1], string66);
        // call case 6: other requests
        var call68 = request(var_s2, "asDebugString", [0]);
        var opresult69 = request(opresult67, "++(1)", [1], call68);
        var string70 = new GraceString("\u203a");
        var opresult71 = request(opresult69, "++(1)", [1], string70);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call60 = selfRequest(this, "assert(1)description(1)", [1, 1], call61, opresult71);
        return call60;
      };    // end of method assert(_)shouldntBe(_)
      func59.paramTypes = [];
      func59.paramTypes.push([type_Object, "s1"]);
      func59.paramTypes.push([type_Object, "s2"]);
      this.methods["assert(1)shouldntBe(1)"] = func59;
      func59.methodName = "assert(1)shouldntBe(1)";
      func59.paramCounts = [1, 1];
      func59.paramNames = ["s1", "s2"];
      func59.definitionLine = 85;
      func59.definitionModule = "gUnit";
      var func72 = function(argcv, var_s1, var_s2) {    // method deny(_)shouldBe(_), line 89
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("deny(_)shouldBe(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_s1, var_Object, "argument 1 in request of `deny(_)shouldBe(_)`", "Object");
        assertTypeOrMsg(var_s2, var_Object, "argument 2 in request of `deny(_)shouldBe(_)`", "Object");
        setLineNumber(90);    // compilenode member
        // call case 6: other requests
        var opresult75 = request(var_s1, "==(1)", [1], var_s2);
        var call74 = request(opresult75, "not", [0]);
        setLineNumber(91);    // compilenode string
        var string76 = new GraceString("\u2039");
        // call case 6: other requests
        var call77 = request(var_s1, "asDebugString", [0]);
        var opresult78 = request(string76, "++(1)", [1], call77);
        var string79 = new GraceString("\u203a should not be \u2039");
        var opresult80 = request(opresult78, "++(1)", [1], string79);
        // call case 6: other requests
        var call81 = request(var_s2, "asDebugString", [0]);
        var opresult82 = request(opresult80, "++(1)", [1], call81);
        var string83 = new GraceString("\u203a");
        var opresult84 = request(opresult82, "++(1)", [1], string83);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call73 = selfRequest(this, "assert(1)description(1)", [1, 1], call74, opresult84);
        return call73;
      };    // end of method deny(_)shouldBe(_)
      func72.paramTypes = [];
      func72.paramTypes.push([type_Object, "s1"]);
      func72.paramTypes.push([type_Object, "s2"]);
      this.methods["deny(1)shouldBe(1)"] = func72;
      func72.methodName = "deny(1)shouldBe(1)";
      func72.paramCounts = [1, 1];
      func72.paramNames = ["s1", "s2"];
      func72.definitionLine = 89;
      func72.definitionModule = "gUnit";
      var func85 = function(argcv, var_n1, var_n2, var_epsilon) {    // method assert(_)shouldEqual(_)within(_), line 93
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 3) && (numArgs !== 3)) {
            raiseTypeArgError("assert(_)shouldEqual(_)within(_)", 0, numArgs - 3);
        }
        assertTypeOrMsg(var_n1, var_Number, "argument 1 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
        assertTypeOrMsg(var_n2, var_Number, "argument 2 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
        assertTypeOrMsg(var_epsilon, var_Number, "argument 3 in request of `assert(_)shouldEqual(_)within(_)`", "Number");
        setLineNumber(94);    // compilenode member
        // call case 6: other requests
        var diff88 = request(var_n1, "-(1)", [1], var_n2);
        var call87 = request(diff88, "abs", [0]);
        var opresult89 = request(call87, "\u2264(1)", [1], var_epsilon);
        setLineNumber(95);    // compilenode string
        var string90 = new GraceString("\u2039");
        // call case 6: other requests
        var call91 = request(var_n1, "asDebugString", [0]);
        var opresult92 = request(string90, "++(1)", [1], call91);
        var string93 = new GraceString("\u203a should be approximately \u2039");
        var opresult94 = request(opresult92, "++(1)", [1], string93);
        // call case 6: other requests
        var call95 = request(var_n2, "asDebugString", [0]);
        var opresult96 = request(opresult94, "++(1)", [1], call95);
        var string97 = new GraceString("\u203a");
        var opresult98 = request(opresult96, "++(1)", [1], string97);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call86 = selfRequest(this, "assert(1)description(1)", [1, 1], opresult89, opresult98);
        return call86;
      };    // end of method assert(_)shouldEqual(_)within(_)
      func85.paramTypes = [];
      func85.paramTypes.push([type_Number, "n1"]);
      func85.paramTypes.push([type_Number, "n2"]);
      func85.paramTypes.push([type_Number, "epsilon"]);
      this.methods["assert(1)shouldEqual(1)within(1)"] = func85;
      func85.methodName = "assert(1)shouldEqual(1)within(1)";
      func85.paramCounts = [1, 1, 1];
      func85.paramNames = ["n1", "n2", "epsilon"];
      func85.definitionLine = 93;
      func85.definitionModule = "gUnit";
      var func99 = function(argcv, var_block0, var_desiredException) {    // method assert(_)shouldRaise(_), line 97
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)shouldRaise(_)", 0, numArgs - 2);
        }
        setLineNumber(98);    // compilenode string
        var string101 = new GraceString("");
        // call case 4: self request with 3 args and 0 typeArgs 
        var call100 = selfRequest(this, "assert(1)shouldRaise(1)mentioning(1)", [1, 1, 1], var_block0, var_desiredException, string101);
        return call100;
      };    // end of method assert(_)shouldRaise(_)
      this.methods["assert(1)shouldRaise(1)"] = func99;
      func99.methodName = "assert(1)shouldRaise(1)";
      func99.paramCounts = [1, 1];
      func99.paramNames = ["block0", "desiredException"];
      func99.definitionLine = 97;
      func99.definitionModule = "gUnit";
      var func102 = function(argcv, var_block0, var_desiredException, var_error) {    // method assert(_)shouldRaise(_)mentioning(_), line 100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 3) && (numArgs !== 3)) {
            raiseTypeArgError("assert(_)shouldRaise(_)mentioning(_)", 0, numArgs - 3);
        }
        setLineNumber(101);    // compilenode vardec
        var var_completedNormally;
        setLineNumber(102);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call103 = selfRequest(this, "countOneAssertion", [0]);
        setLineNumber(103);    // compilenode block
        var block105 = new GraceBlock(this, 103, 0);
        block105.guard = jsTrue;
        block105.real = function block105() {
          setLineNumber(104);    // compilenode member
          // call case 6: other requests
          var call106 = request(var_block0, "apply", [0]);
          setLineNumber(105);    // compilenode bind
          var_completedNormally = GraceTrue;
          return GraceDone;
        };
        let applyMeth105 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth105.methodName = "apply";
        applyMeth105.paramCounts = [0];
        applyMeth105.paramNames = [];
        applyMeth105.definitionLine = 103;
        applyMeth105.definitionModule = "gUnit";
        block105.methods["apply"] = applyMeth105;
        var cases104 = [];
        setLineNumber(106);    // compilenode block
        var block107 = new GraceBlock(this, 106, 1);
        block107.paramTypes = [var_desiredException];
        var matches108 = function(var_raisedException) {
          if (!Grace_isTrue(request(var_desiredException, "matches(1)", [1], var_raisedException)))
              return false;
          return true;
        };
        block107.guard = matches108;
        block107.real = function block107(var_raisedException) {
          setLineNumber(107);    // compilenode bind
          var_completedNormally = GraceFalse;
          var if109 = GraceDone;
          setLineNumber(108);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call112 = request(var_raisedException, "message", [0]);
          var call111 = request(call112, "contains(1)", [1], var_error);
          var call110 = request(call111, "not", [0]);
          if (Grace_isTrue(call110)) {
            setLineNumber(109);    // compilenode string
            var string114 = new GraceString("code raised exception ");
            // call case 6: other requests
            var call115 = request(var_raisedException, "exception", [0]);
            var opresult116 = request(string114, "++(1)", [1], call115);
            var string117 = new GraceString(",");
            var opresult118 = request(opresult116, "++(1)", [1], string117);
            setLineNumber(110);    // compilenode string
            var string119 = new GraceString(" but the message was \"");
            // call case 6: other requests
            var call120 = request(var_raisedException, "message", [0]);
            var opresult121 = request(string119, "++(1)", [1], call120);
            var string122 = new GraceString("\",");
            var opresult123 = request(opresult121, "++(1)", [1], string122);
            var opresult124 = request(opresult118, "++(1)", [1], opresult123);
            setLineNumber(111);    // compilenode string
            var string125 = new GraceString(" which does not mention \"");
            var opresult126 = request(string125, "++(1)", [1], var_error);
            var string127 = new GraceString("\"");
            var opresult128 = request(opresult126, "++(1)", [1], string127);
            var opresult129 = request(opresult124, "++(1)", [1], opresult128);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call113 = selfRequest(this, "failBecause(1)", [1], opresult129);
            if109 = call113;
          }
          return if109;
        };
        let applyMeth107 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth107.methodName = "apply(1)";
        applyMeth107.paramCounts = [1];
        applyMeth107.paramNames = ["raisedException"];
        applyMeth107.definitionLine = 106;
        applyMeth107.definitionModule = "gUnit";
        block107.methods["apply(1)"] = applyMeth107;
        let matchesMeth107 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth107.methodName = "matches(1)";
        matchesMeth107.paramCounts = [1];
        matchesMeth107.paramNames = ["raisedException"];
        matchesMeth107.definitionLine = 106;
        matchesMeth107.definitionModule = "gUnit";
        block107.methods["matches(1)"] = matchesMeth107;
        cases104.push(block107);
        setLineNumber(113);    // compilenode block
        var block130 = new GraceBlock(this, 113, 1);
        block130.guard = jsTrue;
        block130.real = function block130(var_raisedException) {
          setLineNumber(114);    // compilenode string
          var string132 = new GraceString("code raised exception ");
          // call case 6: other requests
          var call133 = request(var_raisedException, "exception", [0]);
          var opresult134 = request(string132, "++(1)", [1], call133);
          var string135 = new GraceString("");
          var opresult136 = request(opresult134, "++(1)", [1], string135);
          setLineNumber(115);    // compilenode string
          var string137 = new GraceString(": \"");
          // call case 6: other requests
          var call138 = request(var_raisedException, "message", [0]);
          var opresult139 = request(string137, "++(1)", [1], call138);
          var string140 = new GraceString("\" instead of ");
          var opresult141 = request(opresult139, "++(1)", [1], string140);
          var opresult142 = request(opresult141, "++(1)", [1], var_desiredException);
          var string143 = new GraceString("");
          var opresult144 = request(opresult142, "++(1)", [1], string143);
          var opresult145 = request(opresult136, "++(1)", [1], opresult144);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call131 = selfRequest(this, "failBecause(1)", [1], opresult145);
          return call131;
        };
        let applyMeth130 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth130.methodName = "apply(1)";
        applyMeth130.paramCounts = [1];
        applyMeth130.paramNames = ["raisedException"];
        applyMeth130.definitionLine = 113;
        applyMeth130.definitionModule = "gUnit";
        block130.methods["apply(1)"] = applyMeth130;
        let matchesMeth130 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth130.methodName = "matches(1)";
        matchesMeth130.paramCounts = [1];
        matchesMeth130.paramNames = ["raisedException"];
        matchesMeth130.definitionLine = 113;
        matchesMeth130.definitionModule = "gUnit";
        block130.methods["matches(1)"] = matchesMeth130;
        cases104.push(block130);
        setLineNumber(103);    // compiletrycatch
        var catchres104 = tryCatch(block105,cases104,false);
        var if146 = GraceDone;
        setLineNumber(117);    // compilenode if
        if (var_completedNormally === undefined) raiseUninitializedVariable("completedNormally");
        if (Grace_isTrue(var_completedNormally)) {
          var string148 = new GraceString("code did not raise an exception");
          // call case 4: self request with 1 args and 0 typeArgs 
          var call147 = selfRequest(this, "failBecause(1)", [1], string148);
          if146 = call147;
        }
        return if146;
      };    // end of method assert(_)shouldRaise(_)mentioning(_)
      this.methods["assert(1)shouldRaise(1)mentioning(1)"] = func102;
      func102.methodName = "assert(1)shouldRaise(1)mentioning(1)";
      func102.paramCounts = [1, 1, 1];
      func102.paramNames = ["block0", "desiredException", "error"];
      func102.definitionLine = 100;
      func102.definitionModule = "gUnit";
      var func149 = function(argcv, var_block0, var_undesiredException) {    // method assert(_)shouldntRaise(_), line 119
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)shouldntRaise(_)", 0, numArgs - 2);
        }
        setLineNumber(120);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call150 = selfRequest(this, "countOneAssertion", [0]);
        setLineNumber(121);    // compilenode block
        var block152 = new GraceBlock(this, 121, 0);
        block152.guard = jsTrue;
        block152.real = function block152() {
          setLineNumber(122);    // compilenode member
          // call case 6: other requests
          var call153 = request(var_block0, "apply", [0]);
          return call153;
        };
        let applyMeth152 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth152.methodName = "apply";
        applyMeth152.paramCounts = [0];
        applyMeth152.paramNames = [];
        applyMeth152.definitionLine = 121;
        applyMeth152.definitionModule = "gUnit";
        block152.methods["apply"] = applyMeth152;
        var cases151 = [];
        setLineNumber(123);    // compilenode block
        var block154 = new GraceBlock(this, 123, 1);
        block154.paramTypes = [var_undesiredException];
        var matches155 = function(var_raisedException) {
          if (!Grace_isTrue(request(var_undesiredException, "matches(1)", [1], var_raisedException)))
              return false;
          return true;
        };
        block154.guard = matches155;
        block154.real = function block154(var_raisedException) {
          setLineNumber(124);    // compilenode string
          var string157 = new GraceString("code raised exception ");
          // call case 6: other requests
          var call158 = request(var_raisedException, "exception", [0]);
          var opresult159 = request(string157, "++(1)", [1], call158);
          var string160 = new GraceString("");
          var opresult161 = request(opresult159, "++(1)", [1], string160);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call156 = selfRequest(this, "failBecause(1)", [1], opresult161);
          return call156;
        };
        let applyMeth154 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth154.methodName = "apply(1)";
        applyMeth154.paramCounts = [1];
        applyMeth154.paramNames = ["raisedException"];
        applyMeth154.definitionLine = 123;
        applyMeth154.definitionModule = "gUnit";
        block154.methods["apply(1)"] = applyMeth154;
        let matchesMeth154 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth154.methodName = "matches(1)";
        matchesMeth154.paramCounts = [1];
        matchesMeth154.paramNames = ["raisedException"];
        matchesMeth154.definitionLine = 123;
        matchesMeth154.definitionModule = "gUnit";
        block154.methods["matches(1)"] = matchesMeth154;
        cases151.push(block154);
        setLineNumber(125);    // compilenode block
        var block162 = new GraceBlock(this, 125, 1);
        block162.guard = jsTrue;
        block162.real = function block162(var___95____95__3) {
          setLineNumber(125);    // compileBlock
          return GraceDone;
        };
        let applyMeth162 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth162.methodName = "apply(1)";
        applyMeth162.paramCounts = [1];
        applyMeth162.paramNames = ["__3"];
        applyMeth162.definitionLine = 125;
        applyMeth162.definitionModule = "gUnit";
        block162.methods["apply(1)"] = applyMeth162;
        let matchesMeth162 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth162.methodName = "matches(1)";
        matchesMeth162.paramCounts = [1];
        matchesMeth162.paramNames = ["__3"];
        matchesMeth162.definitionLine = 125;
        matchesMeth162.definitionModule = "gUnit";
        block162.methods["matches(1)"] = matchesMeth162;
        cases151.push(block162);
        setLineNumber(121);    // compiletrycatch
        var catchres151 = tryCatch(block152,cases151,false);
        return catchres151;
      };    // end of method assert(_)shouldntRaise(_)
      this.methods["assert(1)shouldntRaise(1)"] = func149;
      func149.methodName = "assert(1)shouldntRaise(1)";
      func149.paramCounts = [1, 1];
      func149.paramNames = ["block0", "undesiredException"];
      func149.definitionLine = 119;
      func149.definitionModule = "gUnit";
      var func163 = function(argcv, var_value, var_Desired) {    // method assert(_)hasType(_), line 129
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assert(_)hasType(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_Desired, var_Type, "argument 2 in request of `assert(_)hasType(_)`", "Type");
        var if164 = GraceDone;
        setLineNumber(130);    // compilenode call
        // call case 6: other requests
        var call165 = request(var_Desired, "matches(1)", [1], var_value);
        if (Grace_isTrue(call165)) {
          setLineNumber(131);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call166 = selfRequest(this, "countOneAssertion", [0]);
          if164 = call166;
        } else {
          setLineNumber(133);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call167 = selfRequest(this, "methodsIn(1)missingFrom(1)", [1, 1], var_Desired, var_value);
          var var_m = call167;
          var if168 = GraceDone;
          setLineNumber(134);    // compilenode string
          var string170 = new GraceString(" ");
          // call case 6: other requests
          if (var_m === undefined) raiseUninitializedVariable("m");
          var call169 = request(var_m, "contains(1)", [1], string170);
          if (Grace_isTrue(call169)) {
            var string171 = new GraceString("s");
            if168 = string171;
          } else {
            var string172 = new GraceString("");
            if168 = string172;
          }
          var var_s = if168;
          setLineNumber(135);    // compilenode string
          var string174 = new GraceString("");
          // call case 6: other requests
          var call175 = request(var_value, "asDebugString", [0]);
          var opresult176 = request(string174, "++(1)", [1], call175);
          var string177 = new GraceString(" does not have ");
          var opresult178 = request(opresult176, "++(1)", [1], string177);
          var opresult179 = request(opresult178, "++(1)", [1], var_Desired);
          var string180 = new GraceString("; it's missing method");
          var opresult181 = request(opresult179, "++(1)", [1], string180);
          if (var_s === undefined) raiseUninitializedVariable("s");
          var opresult182 = request(opresult181, "++(1)", [1], var_s);
          var string183 = new GraceString(" ");
          var opresult184 = request(opresult182, "++(1)", [1], string183);
          if (var_m === undefined) raiseUninitializedVariable("m");
          var opresult185 = request(opresult184, "++(1)", [1], var_m);
          var string186 = new GraceString(".");
          var opresult187 = request(opresult185, "++(1)", [1], string186);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call173 = selfRequest(this, "failBecause(1)", [1], opresult187);
          if164 = call173;
        }
        return if164;
      };    // end of method assert(_)hasType(_)
      func163.paramTypes = [];
      func163.paramTypes.push([]);
      func163.paramTypes.push([type_Type, "Desired"]);
      this.methods["assert(1)hasType(1)"] = func163;
      func163.methodName = "assert(1)hasType(1)";
      func163.paramCounts = [1, 1];
      func163.paramNames = ["value", "Desired"];
      func163.definitionLine = 129;
      func163.definitionModule = "gUnit";
      var func188 = function(argcv, var_T, var_value) {    // method assertType(_)describes(_), line 138
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("assertType(_)describes(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_T, var_Type, "argument 1 in request of `assertType(_)describes(_)`", "Type");
        setLineNumber(139);    // compilenode call
        // call case 4: self request with 2 args and 0 typeArgs 
        var call189 = selfRequest(this, "protocolOf(1)notCoveredBy(1)", [1, 1], var_value, var_T);
        var var_missingFromT = call189;
        setLineNumber(140);    // compilenode member
        // call case 6: other requests
        var call191 = request(var_missingFromT, "isEmpty", [0]);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call190 = selfRequest(this, "assert(1)description(1)", [1, 1], call191, var_missingFromT);
        return call190;
      };    // end of method assertType(_)describes(_)
      func188.paramTypes = [];
      func188.paramTypes.push([type_Type, "T"]);
      func188.paramTypes.push([]);
      this.methods["assertType(1)describes(1)"] = func188;
      func188.methodName = "assertType(1)describes(1)";
      func188.paramCounts = [1, 1];
      func188.paramNames = ["T", "value"];
      func188.definitionLine = 138;
      func188.definitionModule = "gUnit";
      var func192 = function(argcv, var_DesiredType, var_value) {    // method methodsIn(_)missingFrom(_), line 143
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("methodsIn(_)missingFrom(_)", 0, numArgs - 2);
        }
        setLineNumber(144);    // compilenode call
        // call case 6: other requests
        if (var_mirror === undefined) raiseUninitializedVariable("mirror");
        var call193 = request(var_mirror, "reflect(1)", [1], var_value);
        var var_vMirror = call193;
        setLineNumber(145);    // compilenode member
        // call case 6: other requests
        var call194 = request(var_vMirror, "methodNames", [0]);
        var var_allMethods = call194;
        setLineNumber(146);    // compilenode block
        var block196 = new GraceBlock(this, 146, 1);
        block196.guard = jsTrue;
        block196.real = function block196(var_each) {
          setLineNumber(147);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_vMirror === undefined) raiseUninitializedVariable("vMirror");
          var call198 = request(var_vMirror, "onMethod(1)", [1], var_each);
          var call197 = request(call198, "isPublic", [0]);
          return call197;
        };
        let applyMeth196 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth196.methodName = "apply(1)";
        applyMeth196.paramCounts = [1];
        applyMeth196.paramNames = ["each"];
        applyMeth196.definitionLine = 146;
        applyMeth196.definitionModule = "gUnit";
        block196.methods["apply(1)"] = applyMeth196;
        let matchesMeth196 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth196.methodName = "matches(1)";
        matchesMeth196.paramCounts = [1];
        matchesMeth196.paramNames = ["each"];
        matchesMeth196.definitionLine = 146;
        matchesMeth196.definitionModule = "gUnit";
        block196.methods["matches(1)"] = matchesMeth196;
        // call case 6: other requests
        var call195 = request(var_allMethods, "filter(1)", [1], block196);
        // call case 2: outer request
        var call199 = selfRequest(var_prelude, "set", [0]);
        var opresult200 = request(call195, ">>(1)", [1], call199);
        var var_publicMethods = opresult200;
        setLineNumber(148);    // compilenode member
        // call case 6: other requests
        var call201 = request(var_DesiredType, "methodNames", [0]);
        var var_tMethods = call201;
        setLineNumber(149);    // compilenode op
        var opresult202 = request(var_tMethods, "--(1)", [1], var_publicMethods);
        var var_missing = opresult202;
        var if203 = GraceDone;
        setLineNumber(150);    // compilenode member
        // call case 6: other requests
        var call204 = request(var_missing, "isEmpty", [0]);
        if (Grace_isTrue(call204)) {
          setLineNumber(151);    // compilenode string
          var string206 = new GraceString("");
          // call case 6: other requests
          var call207 = request(var_value, "asDebugString", [0]);
          var opresult208 = request(string206, "++(1)", [1], call207);
          var string209 = new GraceString(" seems to have all the methods of ");
          var opresult210 = request(opresult208, "++(1)", [1], string209);
          var opresult211 = request(opresult210, "++(1)", [1], var_DesiredType);
          var string212 = new GraceString("");
          var opresult213 = request(opresult211, "++(1)", [1], string212);
          // call case 6: other requests
          // call case 2: outer request
          var call214 = selfRequest(var_prelude, "ProgrammingError", [0]);
          var call205 = request(call214, "raise(1)", [1], opresult213);
          if203 = call205;
        } else {
          setLineNumber(153);    // compilenode string
          var string215 = new GraceString("");
          var var_s = string215;
          setLineNumber(154);    // compilenode block
          var block217 = new GraceBlock(this, 154, 1);
          block217.guard = jsTrue;
          block217.real = function block217(var_each) {
            setLineNumber(154);    // compilenode op
            if (var_s === undefined) raiseUninitializedVariable("s");
            var opresult218 = request(var_s, "++(1)", [1], var_each);
            var_s = opresult218;
            return GraceDone;
          };
          let applyMeth217 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth217.methodName = "apply(1)";
          applyMeth217.paramCounts = [1];
          applyMeth217.paramNames = ["each"];
          applyMeth217.definitionLine = 154;
          applyMeth217.definitionModule = "gUnit";
          block217.methods["apply(1)"] = applyMeth217;
          let matchesMeth217 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth217.methodName = "matches(1)";
          matchesMeth217.paramCounts = [1];
          matchesMeth217.paramNames = ["each"];
          matchesMeth217.definitionLine = 154;
          matchesMeth217.definitionModule = "gUnit";
          block217.methods["matches(1)"] = matchesMeth217;
          setLineNumber(155);    // compilenode block
          var block219 = new GraceBlock(this, 155, 0);
          block219.guard = jsTrue;
          block219.real = function block219() {
            setLineNumber(155);    // compilenode op
            if (var_s === undefined) raiseUninitializedVariable("s");
            var string220 = new GraceString(", ");
            var opresult221 = request(var_s, "++(1)", [1], string220);
            var_s = opresult221;
            return GraceDone;
          };
          let applyMeth219 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth219.methodName = "apply";
          applyMeth219.paramCounts = [0];
          applyMeth219.paramNames = [];
          applyMeth219.definitionLine = 155;
          applyMeth219.definitionModule = "gUnit";
          block219.methods["apply"] = applyMeth219;
          // call case 6: other requests
          if (var_missing === undefined) raiseUninitializedVariable("missing");
          var call216 = request(var_missing, "do(1)separatedBy(1)", [1, 1], block217, block219);
          if (var_s === undefined) raiseUninitializedVariable("s");
          if203 = var_s;
        }
        setLineNumber(150);    // typecheck
        assertTypeOrMsg(if203, var_String, "result of method methodsIn(_)missingFrom(_)", "String");
        return if203;
      };    // end of method methodsIn(_)missingFrom(_)
      func192.confidential = true;
      this.methods["methodsIn(1)missingFrom(1)"] = func192;
      func192.methodName = "methodsIn(1)missingFrom(1)";
      func192.paramCounts = [1, 1];
      func192.paramNames = ["DesiredType", "value"];
      func192.definitionLine = 143;
      func192.definitionModule = "gUnit";
      var func222 = function(argcv, var_value, var_Q) {    // method protocolOf(_)notCoveredBy(_), line 159
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("protocolOf(_)notCoveredBy(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_Q, var_Type, "argument 2 in request of `protocolOf(_)notCoveredBy(_)`", "Type");
        setLineNumber(160);    // compilenode string
        var string223 = new GraceString("");
        var var_s = string223;
        setLineNumber(161);    // compilenode call
        // call case 6: other requests
        if (var_mirror === undefined) raiseUninitializedVariable("mirror");
        var call224 = request(var_mirror, "reflect(1)", [1], var_value);
        var var_vMirror = call224;
        setLineNumber(162);    // compilenode member
        // call case 6: other requests
        var call225 = request(var_vMirror, "methodNames", [0]);
        var var_allMethods = call225;
        setLineNumber(163);    // compilenode block
        var block227 = new GraceBlock(this, 163, 1);
        block227.guard = jsTrue;
        block227.real = function block227(var_each) {
          setLineNumber(164);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_vMirror === undefined) raiseUninitializedVariable("vMirror");
          var call229 = request(var_vMirror, "onMethod(1)", [1], var_each);
          var call228 = request(call229, "isPublic", [0]);
          return call228;
        };
        let applyMeth227 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth227.methodName = "apply(1)";
        applyMeth227.paramCounts = [1];
        applyMeth227.paramNames = ["each"];
        applyMeth227.definitionLine = 163;
        applyMeth227.definitionModule = "gUnit";
        block227.methods["apply(1)"] = applyMeth227;
        let matchesMeth227 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth227.methodName = "matches(1)";
        matchesMeth227.paramCounts = [1];
        matchesMeth227.paramNames = ["each"];
        matchesMeth227.definitionLine = 163;
        matchesMeth227.definitionModule = "gUnit";
        block227.methods["matches(1)"] = matchesMeth227;
        // call case 6: other requests
        var call226 = request(var_allMethods, "filter(1)", [1], block227);
        // call case 2: outer request
        var call230 = selfRequest(var_prelude, "set", [0]);
        var opresult231 = request(call226, ">>(1)", [1], call230);
        var var_publicMethods = opresult231;
        setLineNumber(165);    // compilenode member
        // call case 6: other requests
        var call233 = request(var_Q, "methodNames", [0]);
        // call case 6: other requests
        // call case 2: outer request
        var call234 = selfRequest(var_prelude, "set", [0]);
        var call232 = request(call234, "withAll(1)", [1], call233);
        var var_qMethods = call232;
        setLineNumber(166);    // compilenode op
        var opresult235 = request(var_publicMethods, "--(1)", [1], var_qMethods);
        var var_missing = opresult235;
        var if236 = GraceDone;
        setLineNumber(167);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call238 = request(var_missing, "isEmpty", [0]);
        var call237 = request(call238, "not", [0]);
        if (Grace_isTrue(call237)) {
          setLineNumber(168);    // compilenode string
          var string239 = new GraceString("");
          var opresult240 = request(string239, "++(1)", [1], var_Q);
          var string241 = new GraceString(" is missing ");
          var opresult242 = request(opresult240, "++(1)", [1], string241);
          var_s = opresult242;
          setLineNumber(169);    // compilenode block
          var block244 = new GraceBlock(this, 169, 1);
          block244.guard = jsTrue;
          block244.real = function block244(var_each) {
            setLineNumber(169);    // compilenode op
            if (var_s === undefined) raiseUninitializedVariable("s");
            var opresult245 = request(var_s, "++(1)", [1], var_each);
            var_s = opresult245;
            return GraceDone;
          };
          let applyMeth244 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth244.methodName = "apply(1)";
          applyMeth244.paramCounts = [1];
          applyMeth244.paramNames = ["each"];
          applyMeth244.definitionLine = 169;
          applyMeth244.definitionModule = "gUnit";
          block244.methods["apply(1)"] = applyMeth244;
          let matchesMeth244 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth244.methodName = "matches(1)";
          matchesMeth244.paramCounts = [1];
          matchesMeth244.paramNames = ["each"];
          matchesMeth244.definitionLine = 169;
          matchesMeth244.definitionModule = "gUnit";
          block244.methods["matches(1)"] = matchesMeth244;
          setLineNumber(170);    // compilenode block
          var block246 = new GraceBlock(this, 170, 0);
          block246.guard = jsTrue;
          block246.real = function block246() {
            setLineNumber(170);    // compilenode op
            if (var_s === undefined) raiseUninitializedVariable("s");
            var string247 = new GraceString(", ");
            var opresult248 = request(var_s, "++(1)", [1], string247);
            var_s = opresult248;
            return GraceDone;
          };
          let applyMeth246 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth246.methodName = "apply";
          applyMeth246.paramCounts = [0];
          applyMeth246.paramNames = [];
          applyMeth246.definitionLine = 170;
          applyMeth246.definitionModule = "gUnit";
          block246.methods["apply"] = applyMeth246;
          // call case 6: other requests
          if (var_missing === undefined) raiseUninitializedVariable("missing");
          var call243 = request(var_missing, "do(1)separatedBy(1)", [1, 1], block244, block246);
          if236 = call243;
        }
        setLineNumber(172);    // typecheck
        assertTypeOrMsg(var_s, var_String, "return value", "String");
        return var_s;
      };    // end of method protocolOf(_)notCoveredBy(_)
      func222.paramTypes = [];
      func222.paramTypes.push([]);
      func222.paramTypes.push([type_Type, "Q"]);
      func222.confidential = true;
      this.methods["protocolOf(1)notCoveredBy(1)"] = func222;
      func222.methodName = "protocolOf(1)notCoveredBy(1)";
      func222.paramCounts = [1, 1];
      func222.paramNames = ["value", "Q"];
      func222.definitionLine = 159;
      func222.definitionModule = "gUnit";
      var func249 = function(argcv, var_value, var_Undesired) {    // method deny(_)hasType(_), line 174
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("deny(_)hasType(_)", 0, numArgs - 2);
        }
        assertTypeOrMsg(var_Undesired, var_Type, "argument 2 in request of `deny(_)hasType(_)`", "Type");
        var if250 = GraceDone;
        setLineNumber(175);    // compilenode call
        // call case 6: other requests
        var call251 = request(var_Undesired, "matches(1)", [1], var_value);
        if (Grace_isTrue(call251)) {
          setLineNumber(176);    // compilenode string
          var string253 = new GraceString("");
          // call case 6: other requests
          var call254 = request(var_value, "asDebugString", [0]);
          var opresult255 = request(string253, "++(1)", [1], call254);
          var string256 = new GraceString(" has type ");
          var opresult257 = request(opresult255, "++(1)", [1], string256);
          var opresult258 = request(opresult257, "++(1)", [1], var_Undesired);
          var string259 = new GraceString("");
          var opresult260 = request(opresult258, "++(1)", [1], string259);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call252 = selfRequest(this, "failBecause(1)", [1], opresult260);
          if250 = call252;
        } else {
          setLineNumber(178);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call261 = selfRequest(this, "countOneAssertion", [0]);
          if250 = call261;
        }
        return if250;
      };    // end of method deny(_)hasType(_)
      func249.paramTypes = [];
      func249.paramTypes.push([]);
      func249.paramTypes.push([type_Type, "Undesired"]);
      this.methods["deny(1)hasType(1)"] = func249;
      func249.methodName = "deny(1)hasType(1)";
      func249.paramCounts = [1, 1];
      func249.paramNames = ["value", "Undesired"];
      func249.definitionLine = 174;
      func249.definitionModule = "gUnit";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 61;
          m.definitionModule = "gUnit";
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
      var obj26_init = function() {    // init of object on line 61
        setLineNumber(62);    // compilenode string
        var string263 = new GraceString("AssertionFailure");
        // call case 6: other requests
        // call case 2: outer request
        var call264 = selfRequest(var_prelude, "Exception", [0]);
        var call262 = request(call264, "refine(1)", [1], string263);
        this.data.AssertionFailure = call262;
      };
      return obj26_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj26_init = obj26_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj26_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method assertion$build(_,_,_)
  this.methods["assertion$build(3)"] = func25;
  func25.methodName = "assertion$build(3)";
  func25.paramCounts = [0];
  func25.paramNames = [];
  func25.definitionLine = 61;
  func25.definitionModule = "gUnit";
  var func265 = function(argcv, var_name__39__) {    // method testCaseNamed(_), line 183
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("testCaseNamed(_)", 0, numArgs - 1);
    }
    var ouc = emptyGraceObject("testCaseNamed(_)", "gUnit", 183);
    var ouc_init = this.methods["testCaseNamed(1)$build(3)"].call(this, null, var_name__39__, ouc, [], []);
    ouc_init.call(ouc);
    setLineNumber(183);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call266 = selfRequest(this, "TestCase", [0]);
    setLineNumber(277);    // typecheck
    assertTypeOrMsg(ouc, call266, "object returned from testCaseNamed(_)", "TestCase");
    return ouc;
  };    // end of method testCaseNamed(_)
  this.methods["testCaseNamed(1)"] = func265;
  func265.methodName = "testCaseNamed(1)";
  func265.paramCounts = [1];
  func265.paramNames = ["name'"];
  func265.definitionLine = 183;
  func265.definitionModule = "gUnit";
  var func267 = function(argcv, var_name__39__, inheritingObject, aliases, exclusions) {    // method testCaseNamed(_)$build(_,_,_), line 183
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("testCaseNamed(_)", 0, numArgs - 1);
    }
    var obj268_build = function(ignore, var_name__39__, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_gUnit_183");
      this.outer_gUnit_183 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(184);    // reuse call
      var initFun269 = selfRequest(importedModules["gUnit"], "assertion$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.size = undefined;
      var reader270_size = function() {  // reader method size
          if (this.data.size === undefined) raiseUninitializedVariable("size");
          return this.data.size;
      };
      reader270_size.isDef = true;
      this.methods["size"] = reader270_size;
      this.data.currentResult = undefined;
      var reader271_currentResult = function() {  // reader method currentResult
          if (this.data.currentResult === undefined) raiseUninitializedVariable("currentResult");
          return this.data.currentResult;
      };
      reader271_currentResult.isVar = true;
      reader271_currentResult.confidential = true;
      this.methods["currentResult"] = reader271_currentResult;
      var writer272_currentResult = function(argcv, n) {   // writer method currentResult:=(_)
        this.data.currentResult = n;
        return GraceDone;
      };
      writer272_currentResult.confidential = true;
      this.methods["currentResult:=(1)"] = writer272_currentResult;
      var func273 = function(argcv) {     // accessor method name
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("name", 0, numArgs - 0);
        return var_name__39__;
      };    // end of method name
      this.methods["name"] = func273;
      func273.methodName = "name";
      func273.paramCounts = [0];
      func273.paramNames = [];
      func273.definitionLine = 188;
      func273.definitionModule = "gUnit";
      var func274 = function(argcv) {    // method setup, line 190
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("setup", 0, numArgs - 0);
        }
        return GraceDone;
      };    // end of method setup
      this.methods["setup"] = func274;
      func274.methodName = "setup";
      func274.paramCounts = [0];
      func274.paramNames = [];
      func274.definitionLine = 190;
      func274.definitionModule = "gUnit";
      var func275 = function(argcv) {    // method teardown, line 191
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("teardown", 0, numArgs - 0);
        }
        return GraceDone;
      };    // end of method teardown
      this.methods["teardown"] = func275;
      func275.methodName = "teardown";
      func275.paramCounts = [0];
      func275.paramNames = [];
      func275.definitionLine = 191;
      func275.definitionModule = "gUnit";
      var func276 = function(argcv) {    // method countOneAssertion, line 192
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
        }
        setLineNumber(193);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call278 = selfRequest(this, "currentResult", [0]);
        var call277 = request(call278, "countOneAssertion", [0]);
        return call277;
      };    // end of method countOneAssertion
      this.methods["countOneAssertion"] = func276;
      func276.methodName = "countOneAssertion";
      func276.paramCounts = [0];
      func276.paramNames = [];
      func276.definitionLine = 192;
      func276.definitionModule = "gUnit";
      var func279 = function(argcv, var_result) {    // method run(_), line 196
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("run(_)", 0, numArgs - 1);
        }
        setLineNumber(197);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call280 = selfRequest(this, "currentResult:=(1)", [1], var_result);
        setLineNumber(198);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call282 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call281 = request(var_result, "testStarted(1)", [1], call282);
        setLineNumber(199);    // compilenode block
        var block284 = new GraceBlock(this, 199, 0);
        block284.guard = jsTrue;
        block284.real = function block284() {
          setLineNumber(200);    // compilenode block
          var block286 = new GraceBlock(this, 200, 0);
          block286.guard = jsTrue;
          block286.real = function block286() {
            setLineNumber(201);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call287 = selfRequest(this, "setup", [0]);
            setLineNumber(202);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call288 = selfRequest(this, "runTest", [0]);
            return call288;
          };
          let applyMeth286 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth286.methodName = "apply";
          applyMeth286.paramCounts = [0];
          applyMeth286.paramNames = [];
          applyMeth286.definitionLine = 200;
          applyMeth286.definitionModule = "gUnit";
          block286.methods["apply"] = applyMeth286;
          var cases285 = [];
          setLineNumber(203);    // compilenode block
          var block289 = new GraceBlock(this, 203, 0);
          block289.guard = jsTrue;
          block289.real = function block289() {
            setLineNumber(203);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call290 = selfRequest(this, "teardown", [0]);
            return call290;
          };
          let applyMeth289 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth289.methodName = "apply";
          applyMeth289.paramCounts = [0];
          applyMeth289.paramNames = [];
          applyMeth289.definitionLine = 203;
          applyMeth289.definitionModule = "gUnit";
          block289.methods["apply"] = applyMeth289;
          setLineNumber(200);    // compiletrycatch
          var catchres285 = tryCatch(block286,cases285,block289);
          return catchres285;
        };
        let applyMeth284 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth284.methodName = "apply";
        applyMeth284.paramCounts = [0];
        applyMeth284.paramNames = [];
        applyMeth284.definitionLine = 199;
        applyMeth284.definitionModule = "gUnit";
        block284.methods["apply"] = applyMeth284;
        var cases283 = [];
        setLineNumber(204);    // compilenode block
        var block291 = new GraceBlock(this, 204, 1);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call292 = selfRequest(this, "AssertionFailure", [0]);
        block291.paramTypes = [call292];
        var matches293 = function(var_e) {
          // call case 4: self request with 0 args and 0 typeArgs 
          var call294 = selfRequest(this, "AssertionFailure", [0]);
          if (!Grace_isTrue(request(call294, "matches(1)", [1], var_e)))
              return false;
          return true;
        };
        block291.guard = matches293;
        block291.real = function block291(var_e) {
          setLineNumber(205);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call296 = selfRequest(this, "name", [0]);
          // call case 6: other requests
          var call297 = request(var_e, "message", [0]);
          // call case 6: other requests
          var call295 = request(var_result, "testFailed(1)withMessage(1)", [1, 1], call296, call297);
          return call295;
        };
        let applyMeth291 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth291.methodName = "apply(1)";
        applyMeth291.paramCounts = [1];
        applyMeth291.paramNames = ["e"];
        applyMeth291.definitionLine = 204;
        applyMeth291.definitionModule = "gUnit";
        block291.methods["apply(1)"] = applyMeth291;
        let matchesMeth291 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth291.methodName = "matches(1)";
        matchesMeth291.paramCounts = [1];
        matchesMeth291.paramNames = ["e"];
        matchesMeth291.definitionLine = 204;
        matchesMeth291.definitionModule = "gUnit";
        block291.methods["matches(1)"] = matchesMeth291;
        cases283.push(block291);
        setLineNumber(206);    // compilenode block
        var block298 = new GraceBlock(this, 206, 1);
        // call case 2: outer request
        var call299 = selfRequest(var_prelude, "Exception", [0]);
        block298.paramTypes = [call299];
        var matches300 = function(var_e) {
          // call case 2: outer request
          var call301 = selfRequest(var_prelude, "Exception", [0]);
          if (!Grace_isTrue(request(call301, "matches(1)", [1], var_e)))
              return false;
          return true;
        };
        block298.guard = matches300;
        block298.real = function block298(var_e) {
          setLineNumber(207);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call303 = selfRequest(this, "name", [0]);
          var string304 = new GraceString("");
          // call case 6: other requests
          var call305 = request(var_e, "exception", [0]);
          var opresult306 = request(string304, "++(1)", [1], call305);
          var string307 = new GraceString(": ");
          var opresult308 = request(opresult306, "++(1)", [1], string307);
          // call case 6: other requests
          var call309 = request(var_e, "message", [0]);
          var opresult310 = request(opresult308, "++(1)", [1], call309);
          var string311 = new GraceString("");
          var opresult312 = request(opresult310, "++(1)", [1], string311);
          // call case 6: other requests
          var call302 = request(var_result, "testErrored(1)withMessage(1)", [1, 1], call303, opresult312);
          return call302;
        };
        let applyMeth298 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth298.methodName = "apply(1)";
        applyMeth298.paramCounts = [1];
        applyMeth298.paramNames = ["e"];
        applyMeth298.definitionLine = 206;
        applyMeth298.definitionModule = "gUnit";
        block298.methods["apply(1)"] = applyMeth298;
        let matchesMeth298 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth298.methodName = "matches(1)";
        matchesMeth298.paramCounts = [1];
        matchesMeth298.paramNames = ["e"];
        matchesMeth298.definitionLine = 206;
        matchesMeth298.definitionModule = "gUnit";
        block298.methods["matches(1)"] = matchesMeth298;
        cases283.push(block298);
        setLineNumber(199);    // compiletrycatch
        var catchres283 = tryCatch(block284,cases283,false);
        setLineNumber(209);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call314 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call313 = request(var_result, "testFinished(1)", [1], call314);
        return call313;
      };    // end of method run(_)
      this.methods["run(1)"] = func279;
      func279.methodName = "run(1)";
      func279.paramCounts = [1];
      func279.paramNames = ["result"];
      func279.definitionLine = 196;
      func279.definitionModule = "gUnit";
      var func315 = function(argcv, var_result) {    // method debug(_), line 212
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("debug(_)", 0, numArgs - 1);
        }
        setLineNumber(213);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call316 = selfRequest(this, "currentResult:=(1)", [1], var_result);
        setLineNumber(214);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call318 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call317 = request(var_result, "testStarted(1)", [1], call318);
        setLineNumber(215);    // compilenode block
        var block320 = new GraceBlock(this, 215, 0);
        block320.guard = jsTrue;
        block320.real = function block320() {
          setLineNumber(216);    // compilenode string
          var string321 = new GraceString("\ndebugging method ");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call322 = selfRequest(this, "name", [0]);
          var opresult323 = request(string321, "++(1)", [1], call322);
          var string324 = new GraceString(" ...");
          var opresult325 = request(opresult323, "++(1)", [1], string324);
          Grace_print(opresult325);
          setLineNumber(217);    // compilenode block
          var block327 = new GraceBlock(this, 217, 0);
          block327.guard = jsTrue;
          block327.real = function block327() {
            setLineNumber(218);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call328 = selfRequest(this, "setup", [0]);
            setLineNumber(219);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call329 = selfRequest(this, "runTest", [0]);
            return call329;
          };
          let applyMeth327 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth327.methodName = "apply";
          applyMeth327.paramCounts = [0];
          applyMeth327.paramNames = [];
          applyMeth327.definitionLine = 217;
          applyMeth327.definitionModule = "gUnit";
          block327.methods["apply"] = applyMeth327;
          var cases326 = [];
          setLineNumber(220);    // compilenode block
          var block330 = new GraceBlock(this, 220, 0);
          block330.guard = jsTrue;
          block330.real = function block330() {
            setLineNumber(220);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call331 = selfRequest(this, "teardown", [0]);
            return call331;
          };
          let applyMeth330 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth330.methodName = "apply";
          applyMeth330.paramCounts = [0];
          applyMeth330.paramNames = [];
          applyMeth330.definitionLine = 220;
          applyMeth330.definitionModule = "gUnit";
          block330.methods["apply"] = applyMeth330;
          setLineNumber(217);    // compiletrycatch
          var catchres326 = tryCatch(block327,cases326,block330);
          return catchres326;
        };
        let applyMeth320 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth320.methodName = "apply";
        applyMeth320.paramCounts = [0];
        applyMeth320.paramNames = [];
        applyMeth320.definitionLine = 215;
        applyMeth320.definitionModule = "gUnit";
        block320.methods["apply"] = applyMeth320;
        var cases319 = [];
        setLineNumber(221);    // compilenode block
        var block332 = new GraceBlock(this, 221, 1);
        // call case 2: outer request
        var call333 = selfRequest(var_prelude, "Exception", [0]);
        block332.paramTypes = [call333];
        var matches334 = function(var_e) {
          // call case 2: outer request
          var call335 = selfRequest(var_prelude, "Exception", [0]);
          if (!Grace_isTrue(request(call335, "matches(1)", [1], var_e)))
              return false;
          return true;
        };
        block332.guard = matches334;
        block332.real = function block332(var_e) {
          setLineNumber(222);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call337 = selfRequest(this, "name", [0]);
          // call case 6: other requests
          var call338 = request(var_e, "message", [0]);
          // call case 6: other requests
          var call336 = request(var_result, "testErrored(1)withMessage(1)", [1, 1], call337, call338);
          setLineNumber(223);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call340 = selfRequest(this, "name", [0]);
          // call case 4: self request with 2 args and 0 typeArgs 
          var call339 = selfRequest(this, "printBackTrace(1)limitedTo(1)", [1, 1], var_e, call340);
          return call339;
        };
        let applyMeth332 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth332.methodName = "apply(1)";
        applyMeth332.paramCounts = [1];
        applyMeth332.paramNames = ["e"];
        applyMeth332.definitionLine = 221;
        applyMeth332.definitionModule = "gUnit";
        block332.methods["apply(1)"] = applyMeth332;
        let matchesMeth332 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth332.methodName = "matches(1)";
        matchesMeth332.paramCounts = [1];
        matchesMeth332.paramNames = ["e"];
        matchesMeth332.definitionLine = 221;
        matchesMeth332.definitionModule = "gUnit";
        block332.methods["matches(1)"] = matchesMeth332;
        cases319.push(block332);
        setLineNumber(215);    // compiletrycatch
        var catchres319 = tryCatch(block320,cases319,false);
        setLineNumber(225);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call342 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call341 = request(var_result, "testFinished(1)", [1], call342);
        return call341;
      };    // end of method debug(_)
      this.methods["debug(1)"] = func315;
      func315.methodName = "debug(1)";
      func315.paramCounts = [1];
      func315.paramNames = ["result"];
      func315.definitionLine = 212;
      func315.definitionModule = "gUnit";
      var func343 = function(argcv) {    // method runTest, line 228
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("runTest", 0, numArgs - 0);
        }
        setLineNumber(229);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call345 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        // call case 6: other requests
        if (var_mirror === undefined) raiseUninitializedVariable("mirror");
        var call346 = request(var_mirror, "reflect(1)", [1], this);
        var call344 = request(call346, "onMethod(1)", [1], call345);
        var var_methodImage = call344;
        setLineNumber(230);    // compilenode array
        var array348 = new GraceSequence([]);
        // call case 6: other requests
        var call347 = request(var_methodImage, "requestWithArgs(1)", [1], array348);
        return call347;
      };    // end of method runTest
      this.methods["runTest"] = func343;
      func343.methodName = "runTest";
      func343.paramCounts = [0];
      func343.paramNames = [];
      func343.definitionLine = 228;
      func343.definitionModule = "gUnit";
      var func349 = function(argcv, var_exceptionPacket, var_testName) {    // method printBackTrace(_)limitedTo(_), line 233
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("printBackTrace(_)limitedTo(_)", 0, numArgs - 2);
        }
        setLineNumber(234);    // compilenode member
        // call case 6: other requests
        var call350 = request(var_exceptionPacket, "exception", [0]);
        var var_ex = call350;
        setLineNumber(235);    // compilenode member
        // call case 6: other requests
        var call351 = request(var_exceptionPacket, "message", [0]);
        var var_msg = call351;
        setLineNumber(236);    // compilenode member
        // call case 6: other requests
        var call352 = request(var_exceptionPacket, "lineNumber", [0]);
        var var_lineNr = call352;
        setLineNumber(237);    // compilenode member
        // call case 6: other requests
        var call353 = request(var_exceptionPacket, "moduleName", [0]);
        var var_modName = call353;
        var if354 = GraceDone;
        setLineNumber(238);    // compilenode num
        var opresult355 = request(var_lineNr, "==(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult355)) {
          var if356 = GraceDone;
          setLineNumber(239);    // compilenode op
          if (var_modName === undefined) raiseUninitializedVariable("modName");
          var string357 = new GraceString("native code");
          var opresult358 = request(var_modName, "==(1)", [1], string357);
          if (Grace_isTrue(opresult358)) {
            setLineNumber(240);    // compilenode string
            var string359 = new GraceString("");
            if (var_ex === undefined) raiseUninitializedVariable("ex");
            var opresult360 = request(string359, "++(1)", [1], var_ex);
            var string361 = new GraceString(": ");
            var opresult362 = request(opresult360, "++(1)", [1], string361);
            if (var_msg === undefined) raiseUninitializedVariable("msg");
            var opresult363 = request(opresult362, "++(1)", [1], var_msg);
            var string364 = new GraceString("");
            var opresult365 = request(opresult363, "++(1)", [1], string364);
            Grace_print(opresult365);
            if356 = GraceDone;
          } else {
            setLineNumber(242);    // compilenode string
            var string366 = new GraceString("");
            if (var_ex === undefined) raiseUninitializedVariable("ex");
            var opresult367 = request(string366, "++(1)", [1], var_ex);
            var string368 = new GraceString(" in ");
            var opresult369 = request(opresult367, "++(1)", [1], string368);
            if (var_modName === undefined) raiseUninitializedVariable("modName");
            var opresult370 = request(opresult369, "++(1)", [1], var_modName);
            var string371 = new GraceString(": ");
            var opresult372 = request(opresult370, "++(1)", [1], string371);
            if (var_msg === undefined) raiseUninitializedVariable("msg");
            var opresult373 = request(opresult372, "++(1)", [1], var_msg);
            var string374 = new GraceString("");
            var opresult375 = request(opresult373, "++(1)", [1], string374);
            Grace_print(opresult375);
            if356 = GraceDone;
          }
          if354 = if356;
        } else {
          setLineNumber(245);    // compilenode string
          var string376 = new GraceString("");
          if (var_ex === undefined) raiseUninitializedVariable("ex");
          var opresult377 = request(string376, "++(1)", [1], var_ex);
          var string378 = new GraceString(" on line ");
          var opresult379 = request(opresult377, "++(1)", [1], string378);
          if (var_lineNr === undefined) raiseUninitializedVariable("lineNr");
          var opresult380 = request(opresult379, "++(1)", [1], var_lineNr);
          var string381 = new GraceString(" of ");
          var opresult382 = request(opresult380, "++(1)", [1], string381);
          if (var_modName === undefined) raiseUninitializedVariable("modName");
          var opresult383 = request(opresult382, "++(1)", [1], var_modName);
          var string384 = new GraceString(": ");
          var opresult385 = request(opresult383, "++(1)", [1], string384);
          if (var_msg === undefined) raiseUninitializedVariable("msg");
          var opresult386 = request(opresult385, "++(1)", [1], var_msg);
          var string387 = new GraceString("");
          var opresult388 = request(opresult386, "++(1)", [1], string387);
          Grace_print(opresult388);
          if354 = GraceDone;
        }
        setLineNumber(247);    // compilenode member
        // call case 6: other requests
        var call389 = request(var_exceptionPacket, "backtrace", [0]);
        var var_bt = call389;
        setLineNumber(248);    // compilenode block
        var block391 = new GraceBlock(this, 248, 0);
        block391.guard = jsTrue;
        block391.real = function block391() {
          setLineNumber(248);    // compilenode member
          // call case 6: other requests
          if (var_bt === undefined) raiseUninitializedVariable("bt");
          var call392 = request(var_bt, "size", [0]);
          var opresult393 = request(call392, ">(1)", [1], new GraceNum(0));
          return opresult393;
        };
        let applyMeth391 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth391.methodName = "apply";
        applyMeth391.paramCounts = [0];
        applyMeth391.paramNames = [];
        applyMeth391.definitionLine = 248;
        applyMeth391.definitionModule = "gUnit";
        block391.methods["apply"] = applyMeth391;
        var block394 = new GraceBlock(this, 248, 0);
        block394.guard = jsTrue;
        block394.real = function block394() {
          setLineNumber(249);    // compilenode member
          // call case 6: other requests
          if (var_bt === undefined) raiseUninitializedVariable("bt");
          var call395 = request(var_bt, "pop", [0]);
          var var_frameDescription = call395;
          setLineNumber(250);    // compilenode string
          var string396 = new GraceString("  requested from ");
          if (var_frameDescription === undefined) raiseUninitializedVariable("frameDescription");
          var opresult397 = request(string396, "++(1)", [1], var_frameDescription);
          Grace_print(opresult397);
          var if398 = GraceDone;
          setLineNumber(251);    // compilenode call
          // call case 6: other requests
          if (var_frameDescription === undefined) raiseUninitializedVariable("frameDescription");
          var call399 = request(var_frameDescription, "contains(1)", [1], var_testName);
          if (Grace_isTrue(call399)) {
            throw new ReturnException(var_done, returnTarget);
          }
          var if400 = GraceDone;
          setLineNumber(252);    // compilenode string
          var string402 = new GraceString("test(_)by(_)");
          // call case 6: other requests
          if (var_frameDescription === undefined) raiseUninitializedVariable("frameDescription");
          var call401 = request(var_frameDescription, "contains(1)", [1], string402);
          if (Grace_isTrue(call401)) {
            setLineNumber(254);    // compilenode return
            throw new ReturnException(var_done, returnTarget);
          }
          return if400;
        };
        let applyMeth394 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth394.methodName = "apply";
        applyMeth394.paramCounts = [0];
        applyMeth394.paramNames = [];
        applyMeth394.definitionLine = 248;
        applyMeth394.definitionModule = "gUnit";
        block394.methods["apply"] = applyMeth394;
        // call case 2: outer request
        var call390 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block391, block394);
        return call390;
      };    // end of method printBackTrace(_)limitedTo(_)
      this.methods["printBackTrace(1)limitedTo(1)"] = func349;
      func349.methodName = "printBackTrace(1)limitedTo(1)";
      func349.paramCounts = [1, 1];
      func349.paramNames = ["exceptionPacket", "testName"];
      func349.definitionLine = 233;
      func349.definitionModule = "gUnit";
      var func403 = function(argcv) {    // method runAndPrintResults, line 259
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("runAndPrintResults", 0, numArgs - 0);
        }
        setLineNumber(260);    // compilenode member
        // call case 2: outer request
        var call404 = selfRequest(importedModules["gUnit"], "testResult", [0]);
        var var_result = call404;
        setLineNumber(261);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call405 = selfRequest(this, "run(1)", [1], var_result);
        var if406 = GraceDone;
        setLineNumber(262);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call407 = selfRequest(this, "name", [0]);
        var string408 = new GraceString("");
        var opresult409 = request(call407, "==(1)", [1], string408);
        if (Grace_isTrue(opresult409)) {
          setLineNumber(263);    // compilenode string
          var string410 = new GraceString("");
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call411 = request(var_result, "detailedSummary", [0]);
          var opresult412 = request(string410, "++(1)", [1], call411);
          var string413 = new GraceString("");
          var opresult414 = request(opresult412, "++(1)", [1], string413);
          Grace_print(opresult414);
          if406 = GraceDone;
        } else {
          setLineNumber(265);    // compilenode string
          var string415 = new GraceString("");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call416 = selfRequest(this, "name", [0]);
          var opresult417 = request(string415, "++(1)", [1], call416);
          var string418 = new GraceString(": ");
          var opresult419 = request(opresult417, "++(1)", [1], string418);
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call420 = request(var_result, "detailedSummary", [0]);
          var opresult421 = request(opresult419, "++(1)", [1], call420);
          var string422 = new GraceString("");
          var opresult423 = request(opresult421, "++(1)", [1], string422);
          Grace_print(opresult423);
          if406 = GraceDone;
        }
        return if406;
      };    // end of method runAndPrintResults
      this.methods["runAndPrintResults"] = func403;
      func403.methodName = "runAndPrintResults";
      func403.paramCounts = [0];
      func403.paramNames = [];
      func403.definitionLine = 259;
      func403.definitionModule = "gUnit";
      var func424 = function(argcv) {    // method debugAndPrintResults, line 269
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("debugAndPrintResults", 0, numArgs - 0);
        }
        setLineNumber(270);    // compilenode member
        // call case 2: outer request
        var call425 = selfRequest(importedModules["gUnit"], "testResult", [0]);
        var var_result = call425;
        setLineNumber(271);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call426 = selfRequest(this, "debug(1)", [1], var_result);
        var if427 = GraceDone;
        setLineNumber(272);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call428 = selfRequest(this, "name", [0]);
        var string429 = new GraceString("");
        var opresult430 = request(call428, "==(1)", [1], string429);
        if (Grace_isTrue(opresult430)) {
          setLineNumber(273);    // compilenode string
          var string431 = new GraceString("");
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call432 = request(var_result, "detailedSummary", [0]);
          var opresult433 = request(string431, "++(1)", [1], call432);
          var string434 = new GraceString("");
          var opresult435 = request(opresult433, "++(1)", [1], string434);
          Grace_print(opresult435);
          if427 = GraceDone;
        } else {
          setLineNumber(275);    // compilenode string
          var string436 = new GraceString("");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call437 = selfRequest(this, "name", [0]);
          var opresult438 = request(string436, "++(1)", [1], call437);
          var string439 = new GraceString(": ");
          var opresult440 = request(opresult438, "++(1)", [1], string439);
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call441 = request(var_result, "detailedSummary", [0]);
          var opresult442 = request(opresult440, "++(1)", [1], call441);
          var string443 = new GraceString("");
          var opresult444 = request(opresult442, "++(1)", [1], string443);
          Grace_print(opresult444);
          if427 = GraceDone;
        }
        return if427;
      };    // end of method debugAndPrintResults
      this.methods["debugAndPrintResults"] = func424;
      func424.methodName = "debugAndPrintResults";
      func424.paramCounts = [0];
      func424.paramNames = [];
      func424.definitionLine = 269;
      func424.definitionModule = "gUnit";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 183;
          m.definitionModule = "gUnit";
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
      var obj268_init = function() {    // init of object on line 183
        initFun269.call(this);
        setLineNumber(186);    // compilenode num
        this.data.size = new GraceNum(1);
        this.data.currentResult = undefined;
      };
      return obj268_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj268_init = obj268_build.call(inheritingObject, null, var_name__39__, this, aliases, exclusions);
    return obj268_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testCaseNamed(_)$build(_,_,_)
  this.methods["testCaseNamed(1)$build(3)"] = func267;
  func267.methodName = "testCaseNamed(1)$build(3)";
  func267.paramCounts = [1];
  func267.paramNames = ["name'"];
  func267.definitionLine = 183;
  func267.definitionModule = "gUnit";
  var func445 = function(argcv) {    // method testResult, line 281
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("testResult", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("testResult", "gUnit", 281);
    var ouc_init = this.methods["testResult$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method testResult
  this.methods["testResult"] = func445;
  func445.methodName = "testResult";
  func445.paramCounts = [0];
  func445.paramNames = [];
  func445.definitionLine = 281;
  func445.definitionModule = "gUnit";
  var func446 = function(argcv, inheritingObject, aliases, exclusions) {    // method testResult$build(_,_,_), line 281
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("testResult", 0, numArgs - 0);
    }
    var obj447_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_gUnit_281");
      this.outer_gUnit_281 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.failSet = undefined;
      var reader448_failSet = function() {  // reader method failSet
          if (this.data.failSet === undefined) raiseUninitializedVariable("failSet");
          return this.data.failSet;
      };
      reader448_failSet.isVar = true;
      reader448_failSet.confidential = true;
      this.methods["failSet"] = reader448_failSet;
      var writer449_failSet = function(argcv, n) {   // writer method failSet:=(_)
        this.data.failSet = n;
        return GraceDone;
      };
      writer449_failSet.confidential = true;
      this.methods["failSet:=(1)"] = writer449_failSet;
      this.data.errorSet = undefined;
      var reader450_errorSet = function() {  // reader method errorSet
          if (this.data.errorSet === undefined) raiseUninitializedVariable("errorSet");
          return this.data.errorSet;
      };
      reader450_errorSet.isVar = true;
      reader450_errorSet.confidential = true;
      this.methods["errorSet"] = reader450_errorSet;
      var writer451_errorSet = function(argcv, n) {   // writer method errorSet:=(_)
        this.data.errorSet = n;
        return GraceDone;
      };
      writer451_errorSet.confidential = true;
      this.methods["errorSet:=(1)"] = writer451_errorSet;
      this.data.runCount = undefined;
      var reader452_runCount = function() {  // reader method runCount
          if (this.data.runCount === undefined) raiseUninitializedVariable("runCount");
          return this.data.runCount;
      };
      reader452_runCount.isVar = true;
      reader452_runCount.confidential = true;
      this.methods["runCount"] = reader452_runCount;
      var writer453_runCount = function(argcv, n) {   // writer method runCount:=(_)
        this.data.runCount = n;
        return GraceDone;
      };
      writer453_runCount.confidential = true;
      this.methods["runCount:=(1)"] = writer453_runCount;
      this.data.currentCountOfAssertions = undefined;
      var reader454_currentCountOfAssertions = function() {  // reader method currentCountOfAssertions
          if (this.data.currentCountOfAssertions === undefined) raiseUninitializedVariable("currentCountOfAssertions");
          return this.data.currentCountOfAssertions;
      };
      reader454_currentCountOfAssertions.isVar = true;
      reader454_currentCountOfAssertions.confidential = true;
      this.methods["currentCountOfAssertions"] = reader454_currentCountOfAssertions;
      var writer455_currentCountOfAssertions = function(argcv, n) {   // writer method currentCountOfAssertions:=(_)
        this.data.currentCountOfAssertions = n;
        return GraceDone;
      };
      writer455_currentCountOfAssertions.confidential = true;
      this.methods["currentCountOfAssertions:=(1)"] = writer455_currentCountOfAssertions;
      var func456 = function(argcv) {    // method countOneAssertion, line 287
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("countOneAssertion", 0, numArgs - 0);
        }
        setLineNumber(288);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call458 = selfRequest(this, "currentCountOfAssertions", [0]);
        var sum459 = request(call458, "+(1)", [1], new GraceNum(1));
        // call case 4: self request with 1 args and 0 typeArgs 
        var call457 = selfRequest(this, "currentCountOfAssertions:=(1)", [1], sum459);
        return call457;
      };    // end of method countOneAssertion
      this.methods["countOneAssertion"] = func456;
      func456.methodName = "countOneAssertion";
      func456.paramCounts = [0];
      func456.paramNames = [];
      func456.definitionLine = 287;
      func456.definitionModule = "gUnit";
      var func460 = function(argcv, var_name) {    // method testStarted(_), line 291
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("testStarted(_)", 0, numArgs - 1);
        }
        setLineNumber(292);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call462 = selfRequest(this, "runCount", [0]);
        var sum463 = request(call462, "+(1)", [1], new GraceNum(1));
        // call case 4: self request with 1 args and 0 typeArgs 
        var call461 = selfRequest(this, "runCount:=(1)", [1], sum463);
        setLineNumber(293);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call464 = selfRequest(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(0));
        return call464;
      };    // end of method testStarted(_)
      this.methods["testStarted(1)"] = func460;
      func460.methodName = "testStarted(1)";
      func460.paramCounts = [1];
      func460.paramNames = ["name"];
      func460.definitionLine = 291;
      func460.definitionModule = "gUnit";
      var func465 = function(argcv, var_name) {    // method testFinished(_), line 296
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("testFinished(_)", 0, numArgs - 1);
        }
        var if466 = GraceDone;
        setLineNumber(297);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call467 = selfRequest(this, "currentCountOfAssertions", [0]);
        var opresult468 = request(call467, "==(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult468)) {
          setLineNumber(298);    // compilenode string
          var string471 = new GraceString("no assertions were checked in this test");
          // call case 2: outer request
          var call470 = selfRequest(importedModules["gUnit"], "testRecordFor(1)message(1)", [1, 1], var_name, string471);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call472 = selfRequest(this, "failSet", [0]);
          var call469 = request(call472, "add(1)", [1], call470);
          if466 = call469;
        }
        return if466;
      };    // end of method testFinished(_)
      this.methods["testFinished(1)"] = func465;
      func465.methodName = "testFinished(1)";
      func465.paramCounts = [1];
      func465.paramNames = ["name"];
      func465.definitionLine = 296;
      func465.definitionModule = "gUnit";
      var func473 = function(argcv, var_name, var_msg) {    // method testFailed(_)withMessage(_), line 302
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("testFailed(_)withMessage(_)", 0, numArgs - 2);
        }
        setLineNumber(303);    // compilenode call
        // call case 2: outer request
        var call475 = selfRequest(importedModules["gUnit"], "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call476 = selfRequest(this, "failSet", [0]);
        var call474 = request(call476, "add(1)", [1], call475);
        return call474;
      };    // end of method testFailed(_)withMessage(_)
      this.methods["testFailed(1)withMessage(1)"] = func473;
      func473.methodName = "testFailed(1)withMessage(1)";
      func473.paramCounts = [1, 1];
      func473.paramNames = ["name", "msg"];
      func473.definitionLine = 302;
      func473.definitionModule = "gUnit";
      var func477 = function(argcv, var_name, var_msg) {    // method testErrored(_)withMessage(_), line 306
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("testErrored(_)withMessage(_)", 0, numArgs - 2);
        }
        setLineNumber(307);    // compilenode call
        // call case 2: outer request
        var call479 = selfRequest(importedModules["gUnit"], "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call480 = selfRequest(this, "errorSet", [0]);
        var call478 = request(call480, "add(1)", [1], call479);
        setLineNumber(308);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call481 = selfRequest(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(1));
        return call481;
      };    // end of method testErrored(_)withMessage(_)
      this.methods["testErrored(1)withMessage(1)"] = func477;
      func477.methodName = "testErrored(1)withMessage(1)";
      func477.paramCounts = [1, 1];
      func477.paramNames = ["name", "msg"];
      func477.definitionLine = 306;
      func477.definitionModule = "gUnit";
      var func482 = function(argcv) {    // method summary, line 311
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("summary", 0, numArgs - 0);
        }
        var if483 = GraceDone;
        setLineNumber(312);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call484 = selfRequest(this, "numberOfErrors", [0]);
        var opresult485 = request(call484, "==(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult485)) {
          var string486 = new GraceString("");
          if483 = string486;
        } else {
          var string487 = new GraceString("s");
          if483 = string487;
        }
        var var_s = if483;
        setLineNumber(313);    // compilenode string
        var string488 = new GraceString("");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call489 = selfRequest(this, "runCount", [0]);
        var opresult490 = request(string488, "++(1)", [1], call489);
        var string491 = new GraceString(" run, ");
        var opresult492 = request(opresult490, "++(1)", [1], string491);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call493 = selfRequest(this, "numberOfFailures", [0]);
        var opresult494 = request(opresult492, "++(1)", [1], call493);
        var string495 = new GraceString(" failed, ");
        var opresult496 = request(opresult494, "++(1)", [1], string495);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call497 = selfRequest(this, "numberOfErrors", [0]);
        var opresult498 = request(opresult496, "++(1)", [1], call497);
        var string499 = new GraceString(" error");
        var opresult500 = request(opresult498, "++(1)", [1], string499);
        var opresult501 = request(opresult500, "++(1)", [1], var_s);
        var string502 = new GraceString("");
        var opresult503 = request(opresult501, "++(1)", [1], string502);
        return opresult503;
      };    // end of method summary
      this.methods["summary"] = func482;
      func482.methodName = "summary";
      func482.paramCounts = [0];
      func482.paramNames = [];
      func482.definitionLine = 311;
      func482.definitionModule = "gUnit";
      var func504 = function(argcv) {    // method detailedSummary, line 316
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("detailedSummary", 0, numArgs - 0);
        }
        setLineNumber(317);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call505 = selfRequest(this, "summary", [0]);
        var var_output = call505;
        var if506 = GraceDone;
        setLineNumber(318);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call507 = selfRequest(this, "numberOfFailures", [0]);
        var opresult508 = request(call507, ">(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult508)) {
          setLineNumber(319);    // compilenode op
          if (var_output === undefined) raiseUninitializedVariable("output");
          var string509 = new GraceString("\nFailures:");
          var opresult510 = request(var_output, "++(1)", [1], string509);
          var_output = opresult510;
          setLineNumber(320);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call514 = selfRequest(this, "failSet", [0]);
          // call case 6: other requests
          // call case 2: outer request
          var call515 = selfRequest(var_prelude, "list", [0]);
          var call513 = request(call515, "withAll(1)", [1], call514);
          var call512 = request(call513, "sort", [0]);
          var block516 = new GraceBlock(this, 320, 1);
          block516.guard = jsTrue;
          block516.real = function block516(var_each) {
            setLineNumber(321);    // compilenode op
            if (var_output === undefined) raiseUninitializedVariable("output");
            var string517 = new GraceString("\n    ");
            var opresult518 = request(var_output, "++(1)", [1], string517);
            var opresult519 = request(opresult518, "++(1)", [1], var_each);
            var_output = opresult519;
            return GraceDone;
          };
          let applyMeth516 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth516.methodName = "apply(1)";
          applyMeth516.paramCounts = [1];
          applyMeth516.paramNames = ["each"];
          applyMeth516.definitionLine = 320;
          applyMeth516.definitionModule = "gUnit";
          block516.methods["apply(1)"] = applyMeth516;
          let matchesMeth516 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth516.methodName = "matches(1)";
          matchesMeth516.paramCounts = [1];
          matchesMeth516.paramNames = ["each"];
          matchesMeth516.definitionLine = 320;
          matchesMeth516.definitionModule = "gUnit";
          block516.methods["matches(1)"] = matchesMeth516;
          // call case 2: outer request
          var call511 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call512, block516);
          if506 = call511;
        }
        var if520 = GraceDone;
        setLineNumber(324);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call521 = selfRequest(this, "numberOfErrors", [0]);
        var opresult522 = request(call521, ">(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult522)) {
          setLineNumber(325);    // compilenode op
          if (var_output === undefined) raiseUninitializedVariable("output");
          var string523 = new GraceString("\nErrors:");
          var opresult524 = request(var_output, "++(1)", [1], string523);
          var_output = opresult524;
          setLineNumber(326);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call528 = selfRequest(this, "errorSet", [0]);
          // call case 6: other requests
          // call case 2: outer request
          var call529 = selfRequest(var_prelude, "list", [0]);
          var call527 = request(call529, "withAll(1)", [1], call528);
          var call526 = request(call527, "sort", [0]);
          var block530 = new GraceBlock(this, 326, 1);
          block530.guard = jsTrue;
          block530.real = function block530(var_each) {
            setLineNumber(327);    // compilenode op
            if (var_output === undefined) raiseUninitializedVariable("output");
            var string531 = new GraceString("\n    ");
            var opresult532 = request(var_output, "++(1)", [1], string531);
            var opresult533 = request(opresult532, "++(1)", [1], var_each);
            var_output = opresult533;
            return GraceDone;
          };
          let applyMeth530 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth530.methodName = "apply(1)";
          applyMeth530.paramCounts = [1];
          applyMeth530.paramNames = ["each"];
          applyMeth530.definitionLine = 326;
          applyMeth530.definitionModule = "gUnit";
          block530.methods["apply(1)"] = applyMeth530;
          let matchesMeth530 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth530.methodName = "matches(1)";
          matchesMeth530.paramCounts = [1];
          matchesMeth530.paramNames = ["each"];
          matchesMeth530.definitionLine = 326;
          matchesMeth530.definitionModule = "gUnit";
          block530.methods["matches(1)"] = matchesMeth530;
          // call case 2: outer request
          var call525 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call526, block530);
          if520 = call525;
        }
        return var_output;
      };    // end of method detailedSummary
      this.methods["detailedSummary"] = func504;
      func504.methodName = "detailedSummary";
      func504.paramCounts = [0];
      func504.paramNames = [];
      func504.definitionLine = 316;
      func504.definitionModule = "gUnit";
      var func534 = function(argcv) {    // method numberOfErrors, line 333
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("numberOfErrors", 0, numArgs - 0);
        }
        setLineNumber(334);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call536 = selfRequest(this, "errorSet", [0]);
        var call535 = request(call536, "size", [0]);
        return call535;
      };    // end of method numberOfErrors
      this.methods["numberOfErrors"] = func534;
      func534.methodName = "numberOfErrors";
      func534.paramCounts = [0];
      func534.paramNames = [];
      func534.definitionLine = 333;
      func534.definitionModule = "gUnit";
      var func537 = function(argcv) {    // method errors, line 337
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("errors", 0, numArgs - 0);
        }
        setLineNumber(338);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call540 = selfRequest(this, "errorSet", [0]);
        // call case 6: other requests
        // call case 2: outer request
        var call541 = selfRequest(var_prelude, "list", [0]);
        var call539 = request(call541, "withAll(1)", [1], call540);
        var call538 = request(call539, "sort", [0]);
        return call538;
      };    // end of method errors
      this.methods["errors"] = func537;
      func537.methodName = "errors";
      func537.paramCounts = [0];
      func537.paramNames = [];
      func537.definitionLine = 337;
      func537.definitionModule = "gUnit";
      var func542 = function(argcv) {    // method erroredTestNames, line 341
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("erroredTestNames", 0, numArgs - 0);
        }
        setLineNumber(342);    // compilenode member
        // call case 6: other requests
        var block546 = new GraceBlock(this, 342, 1);
        block546.guard = jsTrue;
        block546.real = function block546(var_each) {
          setLineNumber(342);    // compilenode member
          // call case 6: other requests
          var call547 = request(var_each, "name", [0]);
          return call547;
        };
        let applyMeth546 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth546.methodName = "apply(1)";
        applyMeth546.paramCounts = [1];
        applyMeth546.paramNames = ["each"];
        applyMeth546.definitionLine = 342;
        applyMeth546.definitionModule = "gUnit";
        block546.methods["apply(1)"] = applyMeth546;
        let matchesMeth546 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth546.methodName = "matches(1)";
        matchesMeth546.paramCounts = [1];
        matchesMeth546.paramNames = ["each"];
        matchesMeth546.definitionLine = 342;
        matchesMeth546.definitionModule = "gUnit";
        block546.methods["matches(1)"] = matchesMeth546;
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call548 = selfRequest(this, "errorSet", [0]);
        var call545 = request(call548, "map(1)", [1], block546);
        // call case 6: other requests
        // call case 2: outer request
        var call549 = selfRequest(var_prelude, "list", [0]);
        var call544 = request(call549, "withAll(1)", [1], call545);
        var call543 = request(call544, "sort", [0]);
        return call543;
      };    // end of method erroredTestNames
      this.methods["erroredTestNames"] = func542;
      func542.methodName = "erroredTestNames";
      func542.paramCounts = [0];
      func542.paramNames = [];
      func542.definitionLine = 341;
      func542.definitionModule = "gUnit";
      var func550 = function(argcv) {    // method numberOfFailures, line 345
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("numberOfFailures", 0, numArgs - 0);
        }
        setLineNumber(346);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call552 = selfRequest(this, "failSet", [0]);
        var call551 = request(call552, "size", [0]);
        return call551;
      };    // end of method numberOfFailures
      this.methods["numberOfFailures"] = func550;
      func550.methodName = "numberOfFailures";
      func550.paramCounts = [0];
      func550.paramNames = [];
      func550.definitionLine = 345;
      func550.definitionModule = "gUnit";
      var func553 = function(argcv) {    // method failures, line 349
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("failures", 0, numArgs - 0);
        }
        setLineNumber(350);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call556 = selfRequest(this, "failSet", [0]);
        // call case 6: other requests
        // call case 2: outer request
        var call557 = selfRequest(var_prelude, "list", [0]);
        var call555 = request(call557, "withAll(1)", [1], call556);
        var call554 = request(call555, "sort", [0]);
        return call554;
      };    // end of method failures
      this.methods["failures"] = func553;
      func553.methodName = "failures";
      func553.paramCounts = [0];
      func553.paramNames = [];
      func553.definitionLine = 349;
      func553.definitionModule = "gUnit";
      var func558 = function(argcv) {    // method failedTestNames, line 353
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("failedTestNames", 0, numArgs - 0);
        }
        setLineNumber(354);    // compilenode member
        // call case 6: other requests
        var block562 = new GraceBlock(this, 354, 1);
        block562.guard = jsTrue;
        block562.real = function block562(var_each) {
          setLineNumber(354);    // compilenode member
          // call case 6: other requests
          var call563 = request(var_each, "name", [0]);
          return call563;
        };
        let applyMeth562 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth562.methodName = "apply(1)";
        applyMeth562.paramCounts = [1];
        applyMeth562.paramNames = ["each"];
        applyMeth562.definitionLine = 354;
        applyMeth562.definitionModule = "gUnit";
        block562.methods["apply(1)"] = applyMeth562;
        let matchesMeth562 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth562.methodName = "matches(1)";
        matchesMeth562.paramCounts = [1];
        matchesMeth562.paramNames = ["each"];
        matchesMeth562.definitionLine = 354;
        matchesMeth562.definitionModule = "gUnit";
        block562.methods["matches(1)"] = matchesMeth562;
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call564 = selfRequest(this, "failSet", [0]);
        var call561 = request(call564, "map(1)", [1], block562);
        // call case 6: other requests
        // call case 2: outer request
        var call565 = selfRequest(var_prelude, "list", [0]);
        var call560 = request(call565, "withAll(1)", [1], call561);
        var call559 = request(call560, "sort", [0]);
        return call559;
      };    // end of method failedTestNames
      this.methods["failedTestNames"] = func558;
      func558.methodName = "failedTestNames";
      func558.paramCounts = [0];
      func558.paramNames = [];
      func558.definitionLine = 353;
      func558.definitionModule = "gUnit";
      var func566 = function(argcv) {    // method numberRun, line 357
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("numberRun", 0, numArgs - 0);
        }
        setLineNumber(358);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call567 = selfRequest(this, "runCount", [0]);
        return call567;
      };    // end of method numberRun
      this.methods["numberRun"] = func566;
      func566.methodName = "numberRun";
      func566.paramCounts = [0];
      func566.paramNames = [];
      func566.definitionLine = 357;
      func566.definitionModule = "gUnit";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 281;
          m.definitionModule = "gUnit";
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
      var obj447_init = function() {    // init of object on line 281
        setLineNumber(282);    // compilenode member
        // call case 2: outer request
        var call568 = selfRequest(var_prelude, "emptySet", [0]);
        this.data.failSet = call568;
        setLineNumber(283);    // compilenode member
        // call case 2: outer request
        var call569 = selfRequest(var_prelude, "emptySet", [0]);
        this.data.errorSet = call569;
        setLineNumber(284);    // compilenode num
        this.data.runCount = new GraceNum(0);
        setLineNumber(285);    // compilenode num
        this.data.currentCountOfAssertions = new GraceNum(0);
      };
      return obj447_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj447_init = obj447_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj447_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testResult$build(_,_,_)
  this.methods["testResult$build(3)"] = func446;
  func446.methodName = "testResult$build(3)";
  func446.paramCounts = [0];
  func446.paramNames = [];
  func446.definitionLine = 281;
  func446.definitionModule = "gUnit";
  var func570 = function(argcv, var_testName, var_testMsg) {    // method testRecordFor(_)message(_), line 362
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("testRecordFor(_)message(_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("testRecordFor(_)message(_)", "gUnit", 362);
    var ouc_init = this.methods["testRecordFor(1)message(1)$build(3)"].call(this, null, var_testName, var_testMsg, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method testRecordFor(_)message(_)
  this.methods["testRecordFor(1)message(1)"] = func570;
  func570.methodName = "testRecordFor(1)message(1)";
  func570.paramCounts = [1, 1];
  func570.paramNames = ["testName", "testMsg"];
  func570.definitionLine = 362;
  func570.definitionModule = "gUnit";
  var func571 = function(argcv, var_testName, var_testMsg, inheritingObject, aliases, exclusions) {    // method testRecordFor(_)message(_)$build(_,_,_), line 362
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("testRecordFor(_)message(_)", 0, numArgs - 2);
    }
    var obj572_build = function(ignore, var_testName, var_testMsg, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_gUnit_362");
      this.outer_gUnit_362 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(363);    // reuse call
      var initFun573 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
      var func574 = function(argcv) {     // accessor method name
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("name", 0, numArgs - 0);
        return var_testName;
      };    // end of method name
      this.methods["name"] = func574;
      func574.methodName = "name";
      func574.paramCounts = [0];
      func574.paramNames = [];
      func574.definitionLine = 364;
      func574.definitionModule = "gUnit";
      var func575 = function(argcv) {     // accessor method message
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("message", 0, numArgs - 0);
        return var_testMsg;
      };    // end of method message
      this.methods["message"] = func575;
      func575.methodName = "message";
      func575.paramCounts = [0];
      func575.paramNames = [];
      func575.definitionLine = 365;
      func575.definitionModule = "gUnit";
      var func576 = function(argcv) {    // method asString, line 366
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(366);    // compilenode string
        var string577 = new GraceString("");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call578 = selfRequest(this, "name", [0]);
        var opresult579 = request(string577, "++(1)", [1], call578);
        var string580 = new GraceString(": ");
        var opresult581 = request(opresult579, "++(1)", [1], string580);
        var opresult582 = request(opresult581, "++(1)", [1], var_testMsg);
        var string583 = new GraceString("");
        var opresult584 = request(opresult582, "++(1)", [1], string583);
        return opresult584;
      };    // end of method asString
      this.methods["asString"] = func576;
      func576.methodName = "asString";
      func576.paramCounts = [0];
      func576.paramNames = [];
      func576.definitionLine = 366;
      func576.definitionModule = "gUnit";
      var func585 = function(argcv) {    // method hash, line 367
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(367);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call587 = selfRequest(this, "name", [0]);
        var call586 = request(call587, "hash", [0]);
        return call586;
      };    // end of method hash
      this.methods["hash"] = func585;
      func585.methodName = "hash";
      func585.paramCounts = [0];
      func585.paramNames = [];
      func585.definitionLine = 367;
      func585.definitionModule = "gUnit";
      var func588 = function(argcv, var_other) {    // method compare(_), line 368
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("compare(_)", 0, numArgs - 1);
        }
        setLineNumber(368);    // compilenode member
        // call case 6: other requests
        var call590 = request(var_other, "name", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call591 = selfRequest(this, "name", [0]);
        var call589 = request(call591, "compare(1)", [1], call590);
        return call589;
      };    // end of method compare(_)
      this.methods["compare(1)"] = func588;
      func588.methodName = "compare(1)";
      func588.paramCounts = [1];
      func588.paramNames = ["other"];
      func588.definitionLine = 368;
      func588.definitionModule = "gUnit";
      var func592 = function(argcv, var_other) {    // method <(_), line 369
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<(_)", 0, numArgs - 1);
        }
        setLineNumber(369);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call593 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call594 = request(var_other, "name", [0]);
        var opresult595 = request(call593, "<(1)", [1], call594);
        return opresult595;
      };    // end of method <(_)
      this.methods["<(1)"] = func592;
      func592.methodName = "<(1)";
      func592.paramCounts = [1];
      func592.paramNames = ["other"];
      func592.definitionLine = 369;
      func592.definitionModule = "gUnit";
      var func596 = function(argcv, var_other) {    // method ≤(_), line 370
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≤(_)", 0, numArgs - 1);
        }
        setLineNumber(370);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call597 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call598 = request(var_other, "name", [0]);
        var opresult599 = request(call597, "\u2264(1)", [1], call598);
        return opresult599;
      };    // end of method ≤(_)
      this.methods["\u2264(1)"] = func596;
      func596.methodName = "\u2264(1)";
      func596.paramCounts = [1];
      func596.paramNames = ["other"];
      func596.definitionLine = 370;
      func596.definitionModule = "gUnit";
      var func600 = function(argcv, var_other) {    // method ==(_), line 371
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(371);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call601 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call602 = request(var_other, "name", [0]);
        var opresult603 = request(call601, "==(1)", [1], call602);
        return opresult603;
      };    // end of method ==(_)
      this.methods["==(1)"] = func600;
      func600.methodName = "==(1)";
      func600.paramCounts = [1];
      func600.paramNames = ["other"];
      func600.definitionLine = 371;
      func600.definitionModule = "gUnit";
      var func604 = function(argcv, var_other) {    // method >(_), line 372
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError(">(_)", 0, numArgs - 1);
        }
        setLineNumber(372);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call605 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call606 = request(var_other, "name", [0]);
        var opresult607 = request(call605, "<(1)", [1], call606);
        return opresult607;
      };    // end of method >(_)
      this.methods[">(1)"] = func604;
      func604.methodName = ">(1)";
      func604.paramCounts = [1];
      func604.paramNames = ["other"];
      func604.definitionLine = 372;
      func604.definitionModule = "gUnit";
      var func608 = function(argcv, var_other) {    // method ≥(_), line 373
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≥(_)", 0, numArgs - 1);
        }
        setLineNumber(373);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call609 = selfRequest(this, "name", [0]);
        // call case 6: other requests
        var call610 = request(var_other, "name", [0]);
        var opresult611 = request(call609, "\u2265(1)", [1], call610);
        return opresult611;
      };    // end of method ≥(_)
      this.methods["\u2265(1)"] = func608;
      func608.methodName = "\u2265(1)";
      func608.paramCounts = [1];
      func608.paramNames = ["other"];
      func608.definitionLine = 373;
      func608.definitionModule = "gUnit";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 362;
          m.definitionModule = "gUnit";
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
      var obj572_init = function() {    // init of object on line 362
      };
      return obj572_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj572_init = obj572_build.call(inheritingObject, null, var_testName, var_testMsg, this, aliases, exclusions);
    return obj572_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testRecordFor(_)message(_)$build(_,_,_)
  this.methods["testRecordFor(1)message(1)$build(3)"] = func571;
  func571.methodName = "testRecordFor(1)message(1)$build(3)";
  func571.paramCounts = [1, 1];
  func571.paramNames = ["testName", "testMsg"];
  func571.definitionLine = 362;
  func571.definitionModule = "gUnit";
  var func612 = function(argcv, var_testClass) {    // method className(_), line 488
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("className(_)", 0, numArgs - 1);
    }
    setLineNumber(489);    // compilenode member
    // call case 6: other requests
    var call613 = request(var_testClass, "asString", [0]);
    var var_cName = call613;
    var if614 = GraceDone;
    setLineNumber(490);    // compilenode string
    var string616 = new GraceString("class ");
    // call case 6: other requests
    var call615 = request(var_cName, "startsWith(1)", [1], string616);
    if (Grace_isTrue(call615)) {
      setLineNumber(491);    // compilenode member
      // call case 6: other requests
      if (var_cName === undefined) raiseUninitializedVariable("cName");
      var call618 = request(var_cName, "size", [0]);
      // call case 6: other requests
      if (var_cName === undefined) raiseUninitializedVariable("cName");
      var call617 = request(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(7), call618);
      if614 = call617;
    } else {
      var if619 = GraceDone;
      setLineNumber(492);    // compilenode string
      var string621 = new GraceString("trait ");
      // call case 6: other requests
      if (var_cName === undefined) raiseUninitializedVariable("cName");
      var call620 = request(var_cName, "startsWith(1)", [1], string621);
      if (Grace_isTrue(call620)) {
        setLineNumber(493);    // compilenode member
        // call case 6: other requests
        if (var_cName === undefined) raiseUninitializedVariable("cName");
        var call623 = request(var_cName, "size", [0]);
        // call case 6: other requests
        if (var_cName === undefined) raiseUninitializedVariable("cName");
        var call622 = request(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(7), call623);
        if619 = call622;
      } else {
        var if624 = GraceDone;
        setLineNumber(494);    // compilenode string
        var string626 = new GraceString("a ");
        // call case 6: other requests
        if (var_cName === undefined) raiseUninitializedVariable("cName");
        var call625 = request(var_cName, "startsWith(1)", [1], string626);
        if (Grace_isTrue(call625)) {
          setLineNumber(495);    // compilenode member
          // call case 6: other requests
          if (var_cName === undefined) raiseUninitializedVariable("cName");
          var call628 = request(var_cName, "size", [0]);
          // call case 6: other requests
          if (var_cName === undefined) raiseUninitializedVariable("cName");
          var call627 = request(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(3), call628);
          if624 = call627;
        } else {
          var if629 = GraceDone;
          setLineNumber(496);    // compilenode string
          var string631 = new GraceString("an ");
          // call case 6: other requests
          if (var_cName === undefined) raiseUninitializedVariable("cName");
          var call630 = request(var_cName, "startsWith(1)", [1], string631);
          if (Grace_isTrue(call630)) {
            setLineNumber(497);    // compilenode member
            // call case 6: other requests
            if (var_cName === undefined) raiseUninitializedVariable("cName");
            var call633 = request(var_cName, "size", [0]);
            // call case 6: other requests
            if (var_cName === undefined) raiseUninitializedVariable("cName");
            var call632 = request(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(4), call633);
            if629 = call632;
          } else {
            setLineNumber(499);    // compilenode string
            var string634 = new GraceString("un-named");
            if629 = string634;
          }
          if624 = if629;
        }
        if619 = if624;
      }
      if614 = if619;
    }
    return if614;
  };    // end of method className(_)
  this.methods["className(1)"] = func612;
  func612.methodName = "className(1)";
  func612.paramCounts = [1];
  func612.paramNames = ["testClass"];
  func612.definitionLine = 488;
  func612.definitionModule = "gUnit";
  setLineNumber(59);    // compilenode num
  var var_numberOfErrorsToRerun = new GraceNum(10);
  var reader635_numberOfErrorsToRerun = function() {  // reader method numberOfErrorsToRerun
      if (var_numberOfErrorsToRerun === undefined) raiseUninitializedVariable("numberOfErrorsToRerun");
      return var_numberOfErrorsToRerun;
  };
  reader635_numberOfErrorsToRerun.isVar = true;
  this.methods["numberOfErrorsToRerun"] = reader635_numberOfErrorsToRerun;
  var writer636_numberOfErrorsToRerun = function(argcv, n) {   // writer method numberOfErrorsToRerun:=(_)
    var_numberOfErrorsToRerun = n;
    return GraceDone;
  };
  this.methods["numberOfErrorsToRerun:=(1)"] = writer636_numberOfErrorsToRerun;
  setLineNumber(376);    // compilenode object
  var obj637_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_gUnit_376");
    this.outer_gUnit_376 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func638 = function(argcv, var_initialContents) {    // method withAll(_), line 378
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("withAll(_)", 0, numArgs - 1);
      }
      var ouc = emptyGraceObject("testSuite.withAll(_)", "gUnit", 378);
      var ouc_init = this.methods["withAll(1)$build(3)"].call(this, null, var_initialContents, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method withAll(_)
    this.methods["withAll(1)"] = func638;
    func638.methodName = "withAll(1)";
    func638.paramCounts = [1];
    func638.paramNames = ["initialContents"];
    func638.definitionLine = 378;
    func638.definitionModule = "gUnit";
    var func639 = function(argcv, var_initialContents, inheritingObject, aliases, exclusions) {    // method withAll(_)$build(_,_,_), line 378
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("withAll(_)", 0, numArgs - 1);
      }
      var obj640_build = function(ignore, var_initialContents, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_gUnit_378");
        this.outer_gUnit_378 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(379);    // compilenode member
        // call case 2: outer request
        var call641 = selfRequest(var_prelude, "collections", [0]);
        var initFun642 = request(call641, "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.name = undefined;
        var reader643_name = function() {  // reader method name
            if (this.data.name === undefined) raiseUninitializedVariable("name");
            return this.data.name;
        };
        reader643_name.isVar = true;
        this.methods["name"] = reader643_name;
        var writer644_name = function(argcv, n) {   // writer method name:=(_)
          this.data.name = n;
          return GraceDone;
        };
        this.methods["name:=(1)"] = writer644_name;
        this.data.tests = undefined;
        var reader645_tests = function() {  // reader method tests
            if (this.data.tests === undefined) raiseUninitializedVariable("tests");
            return this.data.tests;
        };
        reader645_tests.isDef = true;
        reader645_tests.confidential = true;
        this.methods["tests"] = reader645_tests;
        this.data.testNames = undefined;
        var reader646_testNames = function() {  // reader method testNames
            if (this.data.testNames === undefined) raiseUninitializedVariable("testNames");
            return this.data.testNames;
        };
        reader646_testNames.isDef = true;
        reader646_testNames.confidential = true;
        this.methods["testNames"] = reader646_testNames;
        this.data.errorsToBeRerun = undefined;
        var reader647_errorsToBeRerun = function() {  // reader method errorsToBeRerun
            if (this.data.errorsToBeRerun === undefined) raiseUninitializedVariable("errorsToBeRerun");
            return this.data.errorsToBeRerun;
        };
        reader647_errorsToBeRerun.isVar = true;
        reader647_errorsToBeRerun.confidential = true;
        this.methods["errorsToBeRerun"] = reader647_errorsToBeRerun;
        var writer648_errorsToBeRerun = function(argcv, n) {   // writer method errorsToBeRerun:=(_)
          this.data.errorsToBeRerun = n;
          return GraceDone;
        };
        writer648_errorsToBeRerun.confidential = true;
        this.methods["errorsToBeRerun:=(1)"] = writer648_errorsToBeRerun;
        var func649 = function(argcv) {    // method doNotRerunErrors, line 385
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("doNotRerunErrors", 0, numArgs - 0);
          }
          setLineNumber(385);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call650 = selfRequest(this, "errorsToBeRerun:=(1)", [1], GraceFalse);
          return call650;
        };    // end of method doNotRerunErrors
        this.methods["doNotRerunErrors"] = func649;
        func649.methodName = "doNotRerunErrors";
        func649.paramCounts = [0];
        func649.paramNames = [];
        func649.definitionLine = 385;
        func649.definitionModule = "gUnit";
        var func651 = function(argcv) {    // method doRerunErrors, line 386
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("doRerunErrors", 0, numArgs - 0);
          }
          setLineNumber(386);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call652 = selfRequest(this, "errorsToBeRerun:=(1)", [1], GraceTrue);
          return call652;
        };    // end of method doRerunErrors
        this.methods["doRerunErrors"] = func651;
        func651.methodName = "doRerunErrors";
        func651.paramCounts = [0];
        func651.paramNames = [];
        func651.definitionLine = 386;
        func651.definitionModule = "gUnit";
        var func653 = function(argcv, var_e) {    // method add(_), line 389
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("add(_)", 0, numArgs - 1);
          }
          setLineNumber(390);    // compilenode member
          // call case 6: other requests
          var call654 = request(var_e, "name", [0]);
          var var_eName = call654;
          var if655 = GraceDone;
          setLineNumber(391);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call657 = selfRequest(this, "testNames", [0]);
          var call656 = request(call657, "contains(1)", [1], var_eName);
          if (Grace_isTrue(call656)) {
            setLineNumber(392);    // compilenode string
            var string658 = new GraceString("Warning: more than one test named \"");
            if (var_eName === undefined) raiseUninitializedVariable("eName");
            var opresult659 = request(string658, "++(1)", [1], var_eName);
            var string660 = new GraceString("\"");
            var opresult661 = request(opresult659, "++(1)", [1], string660);
            Grace_print(opresult661);
            if655 = GraceDone;
          } else {
            setLineNumber(394);    // compilenode call
            if (var_eName === undefined) raiseUninitializedVariable("eName");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call663 = selfRequest(this, "testNames", [0]);
            var call662 = request(call663, "add(1)", [1], var_eName);
            if655 = call662;
          }
          setLineNumber(396);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call665 = selfRequest(this, "tests", [0]);
          var call664 = request(call665, "push(1)", [1], var_e);
          return call664;
        };    // end of method add(_)
        this.methods["add(1)"] = func653;
        func653.methodName = "add(1)";
        func653.paramCounts = [1];
        func653.paramNames = ["e"];
        func653.definitionLine = 389;
        func653.definitionModule = "gUnit";
        var func666 = function(argcv, var_index) {    // method testAt(_), line 399
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("testAt(_)", 0, numArgs - 1);
          }
          setLineNumber(400);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call668 = selfRequest(this, "tests", [0]);
          var call667 = request(call668, "at(1)", [1], var_index);
          return call667;
        };    // end of method testAt(_)
        this.methods["testAt(1)"] = func666;
        func666.methodName = "testAt(1)";
        func666.paramCounts = [1];
        func666.paramNames = ["index"];
        func666.definitionLine = 399;
        func666.definitionModule = "gUnit";
        var func669 = function(argcv, var_result) {    // method run(_), line 403
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("run(_)", 0, numArgs - 1);
          }
          setLineNumber(404);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call671 = selfRequest(this, "tests", [0]);
          var block672 = new GraceBlock(this, 404, 1);
          block672.guard = jsTrue;
          block672.real = function block672(var_each) {
            setLineNumber(404);    // compilenode call
            // call case 6: other requests
            var call673 = request(var_each, "run(1)", [1], var_result);
            return call673;
          };
          let applyMeth672 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth672.methodName = "apply(1)";
          applyMeth672.paramCounts = [1];
          applyMeth672.paramNames = ["each"];
          applyMeth672.definitionLine = 404;
          applyMeth672.definitionModule = "gUnit";
          block672.methods["apply(1)"] = applyMeth672;
          let matchesMeth672 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth672.methodName = "matches(1)";
          matchesMeth672.paramCounts = [1];
          matchesMeth672.paramNames = ["each"];
          matchesMeth672.definitionLine = 404;
          matchesMeth672.definitionModule = "gUnit";
          block672.methods["matches(1)"] = matchesMeth672;
          // call case 2: outer request
          var call670 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call671, block672);
          return call670;
        };    // end of method run(_)
        this.methods["run(1)"] = func669;
        func669.methodName = "run(1)";
        func669.paramCounts = [1];
        func669.paramNames = ["result"];
        func669.definitionLine = 403;
        func669.definitionModule = "gUnit";
        var func674 = function(argcv, var_result) {    // method debug(_), line 407
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("debug(_)", 0, numArgs - 1);
          }
          setLineNumber(408);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call676 = selfRequest(this, "tests", [0]);
          var block677 = new GraceBlock(this, 408, 1);
          block677.guard = jsTrue;
          block677.real = function block677(var_each) {
            setLineNumber(408);    // compilenode call
            // call case 6: other requests
            var call678 = request(var_each, "debug(1)", [1], var_result);
            return call678;
          };
          let applyMeth677 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth677.methodName = "apply(1)";
          applyMeth677.paramCounts = [1];
          applyMeth677.paramNames = ["each"];
          applyMeth677.definitionLine = 408;
          applyMeth677.definitionModule = "gUnit";
          block677.methods["apply(1)"] = applyMeth677;
          let matchesMeth677 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth677.methodName = "matches(1)";
          matchesMeth677.paramCounts = [1];
          matchesMeth677.paramNames = ["each"];
          matchesMeth677.definitionLine = 408;
          matchesMeth677.definitionModule = "gUnit";
          block677.methods["matches(1)"] = matchesMeth677;
          // call case 2: outer request
          var call675 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call676, block677);
          return call675;
        };    // end of method debug(_)
        this.methods["debug(1)"] = func674;
        func674.methodName = "debug(1)";
        func674.paramCounts = [1];
        func674.paramNames = ["result"];
        func674.definitionLine = 407;
        func674.definitionModule = "gUnit";
        var func679 = function(argcv) {    // method size, line 411
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("size", 0, numArgs - 0);
          }
          setLineNumber(411);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call681 = selfRequest(this, "tests", [0]);
          var call680 = request(call681, "size", [0]);
          return call680;
        };    // end of method size
        this.methods["size"] = func679;
        func679.methodName = "size";
        func679.paramCounts = [0];
        func679.paramNames = [];
        func679.definitionLine = 411;
        func679.definitionModule = "gUnit";
        var func682 = function(argcv) {    // method runAndPrintResults, line 413
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("runAndPrintResults", 0, numArgs - 0);
          }
          setLineNumber(414);    // compilenode member
          // call case 2: outer request
          var call683 = selfRequest(importedModules["gUnit"], "testResult", [0]);
          var var_result = call683;
          setLineNumber(415);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call684 = selfRequest(this, "run(1)", [1], var_result);
          var if685 = GraceDone;
          setLineNumber(416);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call686 = selfRequest(this, "name", [0]);
          var string687 = new GraceString("");
          var opresult688 = request(call686, "==(1)", [1], string687);
          if (Grace_isTrue(opresult688)) {
            setLineNumber(417);    // compilenode string
            var string689 = new GraceString("");
            // call case 6: other requests
            if (var_result === undefined) raiseUninitializedVariable("result");
            var call690 = request(var_result, "detailedSummary", [0]);
            var opresult691 = request(string689, "++(1)", [1], call690);
            var string692 = new GraceString("");
            var opresult693 = request(opresult691, "++(1)", [1], string692);
            Grace_print(opresult693);
            if685 = GraceDone;
          } else {
            setLineNumber(419);    // compilenode string
            var string694 = new GraceString("");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call695 = selfRequest(this, "name", [0]);
            var opresult696 = request(string694, "++(1)", [1], call695);
            var string697 = new GraceString(": ");
            var opresult698 = request(opresult696, "++(1)", [1], string697);
            // call case 6: other requests
            if (var_result === undefined) raiseUninitializedVariable("result");
            var call699 = request(var_result, "detailedSummary", [0]);
            var opresult700 = request(opresult698, "++(1)", [1], call699);
            var string701 = new GraceString("");
            var opresult702 = request(opresult700, "++(1)", [1], string701);
            Grace_print(opresult702);
            if685 = GraceDone;
          }
          var if703 = GraceDone;
          setLineNumber(421);    // compilenode member
          // call case 6: other requests
          var call704 = request(var_result, "numberOfErrors", [0]);
          var opresult705 = request(call704, ">(1)", [1], new GraceNum(0));
          // call case 4: self request with 0 args and 0 typeArgs 
          var call706 = selfRequest(this, "errorsToBeRerun", [0]);
          var opresult707 = request(opresult705, "&&(1)", [1], call706);
          if (Grace_isTrue(opresult707)) {
            setLineNumber(422);    // compilenode call
            if (var_result === undefined) raiseUninitializedVariable("result");
            // call case 4: self request with 1 args and 0 typeArgs 
            var call708 = selfRequest(this, "rerunErrors(1)", [1], var_result);
            if703 = call708;
          }
          return if703;
        };    // end of method runAndPrintResults
        this.methods["runAndPrintResults"] = func682;
        func682.methodName = "runAndPrintResults";
        func682.paramCounts = [0];
        func682.paramNames = [];
        func682.definitionLine = 413;
        func682.definitionModule = "gUnit";
        var func709 = function(argcv) {    // method debugAndPrintResults, line 426
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("debugAndPrintResults", 0, numArgs - 0);
          }
          setLineNumber(427);    // compilenode member
          // call case 2: outer request
          var call710 = selfRequest(importedModules["gUnit"], "testResult", [0]);
          var var_result = call710;
          setLineNumber(428);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call711 = selfRequest(this, "debug(1)", [1], var_result);
          var if712 = GraceDone;
          setLineNumber(429);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call713 = selfRequest(this, "name", [0]);
          var string714 = new GraceString("");
          var opresult715 = request(call713, "==(1)", [1], string714);
          if (Grace_isTrue(opresult715)) {
            setLineNumber(430);    // compilenode string
            var string716 = new GraceString("");
            // call case 6: other requests
            if (var_result === undefined) raiseUninitializedVariable("result");
            var call717 = request(var_result, "detailedSummary", [0]);
            var opresult718 = request(string716, "++(1)", [1], call717);
            var string719 = new GraceString("");
            var opresult720 = request(opresult718, "++(1)", [1], string719);
            Grace_print(opresult720);
            if712 = GraceDone;
          } else {
            setLineNumber(432);    // compilenode string
            var string721 = new GraceString("");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call722 = selfRequest(this, "name", [0]);
            var opresult723 = request(string721, "++(1)", [1], call722);
            var string724 = new GraceString(": ");
            var opresult725 = request(opresult723, "++(1)", [1], string724);
            // call case 6: other requests
            if (var_result === undefined) raiseUninitializedVariable("result");
            var call726 = request(var_result, "detailedSummary", [0]);
            var opresult727 = request(opresult725, "++(1)", [1], call726);
            var string728 = new GraceString("");
            var opresult729 = request(opresult727, "++(1)", [1], string728);
            Grace_print(opresult729);
            if712 = GraceDone;
          }
          return if712;
        };    // end of method debugAndPrintResults
        this.methods["debugAndPrintResults"] = func709;
        func709.methodName = "debugAndPrintResults";
        func709.paramCounts = [0];
        func709.paramNames = [];
        func709.definitionLine = 426;
        func709.definitionModule = "gUnit";
        var func730 = function(argcv) {    // method iterator, line 436
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          setLineNumber(436);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call732 = selfRequest(this, "tests", [0]);
          var call731 = request(call732, "iterator", [0]);
          return call731;
        };    // end of method iterator
        this.methods["iterator"] = func730;
        func730.methodName = "iterator";
        func730.paramCounts = [0];
        func730.paramNames = [];
        func730.definitionLine = 436;
        func730.definitionModule = "gUnit";
        var func733 = function(argcv, var_aBlock) {    // method do(_), line 437
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("do(_)", 0, numArgs - 1);
          }
          setLineNumber(437);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call735 = selfRequest(this, "tests", [0]);
          var call734 = request(call735, "do(1)", [1], var_aBlock);
          return call734;
        };    // end of method do(_)
        this.methods["do(1)"] = func733;
        func733.methodName = "do(1)";
        func733.paramCounts = [1];
        func733.paramNames = ["aBlock"];
        func733.definitionLine = 437;
        func733.definitionModule = "gUnit";
        var func736 = function(argcv, var_anotherSuite) {    // method addAll(_), line 438
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("addAll(_)", 0, numArgs - 1);
          }
          setLineNumber(439);    // compilenode block
          var block738 = new GraceBlock(this, 439, 1);
          block738.guard = jsTrue;
          block738.real = function block738(var_each) {
            setLineNumber(439);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call739 = selfRequest(this, "add(1)", [1], var_each);
            return call739;
          };
          let applyMeth738 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth738.methodName = "apply(1)";
          applyMeth738.paramCounts = [1];
          applyMeth738.paramNames = ["each"];
          applyMeth738.definitionLine = 439;
          applyMeth738.definitionModule = "gUnit";
          block738.methods["apply(1)"] = applyMeth738;
          let matchesMeth738 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth738.methodName = "matches(1)";
          matchesMeth738.paramCounts = [1];
          matchesMeth738.paramNames = ["each"];
          matchesMeth738.definitionLine = 439;
          matchesMeth738.definitionModule = "gUnit";
          block738.methods["matches(1)"] = matchesMeth738;
          // call case 6: other requests
          var call737 = request(var_anotherSuite, "do(1)", [1], block738);
          return this;
        };    // end of method addAll(_)
        this.methods["addAll(1)"] = func736;
        func736.methodName = "addAll(1)";
        func736.paramCounts = [1];
        func736.paramNames = ["anotherSuite"];
        func736.definitionLine = 438;
        func736.definitionModule = "gUnit";
        var func740 = function(argcv, var_anotherSuite) {    // method ++(_), line 442
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("++(_)", 0, numArgs - 1);
          }
          setLineNumber(443);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call743 = selfRequest(this, "tests", [0]);
          // call case 2: outer request
          var call742 = selfRequest(this.outer_gUnit_378, "withAll(1)", [1], call743);
          var call741 = request(call742, "addAll(1)", [1], var_anotherSuite);
          return call741;
        };    // end of method ++(_)
        this.methods["++(1)"] = func740;
        func740.methodName = "++(1)";
        func740.paramCounts = [1];
        func740.paramNames = ["anotherSuite"];
        func740.definitionLine = 442;
        func740.definitionModule = "gUnit";
        var func744 = function(argcv, var_result) {    // method rerunErrors(_), line 445
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("rerunErrors(_)", 0, numArgs - 1);
          }
          var if745 = GraceDone;
          setLineNumber(446);    // compilenode op
          if (var_numberOfErrorsToRerun === undefined) raiseUninitializedVariable("numberOfErrorsToRerun");
          var opresult746 = request(var_numberOfErrorsToRerun, "\u2264(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult746)) {
            return var_done;
          }
          setLineNumber(447);    // compilenode member
          // call case 6: other requests
          var call748 = request(var_result, "numberOfErrors", [0]);
          if (var_numberOfErrorsToRerun === undefined) raiseUninitializedVariable("numberOfErrorsToRerun");
          // call case 2: outer request
          var call747 = selfRequest(var_prelude, "min(2)", [2], call748, var_numberOfErrorsToRerun);
          var var_n = call747;
          var if749 = GraceDone;
          setLineNumber(448);    // compilenode num
          var opresult750 = request(var_n, "==(1)", [1], new GraceNum(1));
          if (Grace_isTrue(opresult750)) {
            setLineNumber(449);    // compilenode string
            var string751 = new GraceString("\nRe-running 1 error.");
            Grace_print(string751);
            if749 = GraceDone;
          } else {
            setLineNumber(451);    // compilenode string
            var string752 = new GraceString("\nRe-running ");
            if (var_n === undefined) raiseUninitializedVariable("n");
            var opresult753 = request(string752, "++(1)", [1], var_n);
            var string754 = new GraceString(" errors.");
            var opresult755 = request(opresult753, "++(1)", [1], string754);
            Grace_print(opresult755);
            if749 = GraceDone;
          }
          setLineNumber(453);    // compilenode member
          // call case 2: outer request
          var call756 = selfRequest(importedModules["gUnit"], "testResult", [0]);
          var var_newResult = call756;
          setLineNumber(454);    // compilenode member
          // call case 6: other requests
          var call757 = request(var_result, "erroredTestNames", [0]);
          var var_errors = call757;
          setLineNumber(455);    // compilenode block
          var block759 = new GraceBlock(this, 455, 1);
          block759.guard = jsTrue;
          block759.real = function block759(var_each) {
            var if760 = GraceDone;
            setLineNumber(456);    // compilenode member
            // call case 6: other requests
            var call762 = request(var_each, "name", [0]);
            // call case 6: other requests
            if (var_errors === undefined) raiseUninitializedVariable("errors");
            var call761 = request(var_errors, "contains(1)", [1], call762);
            if (Grace_isTrue(call761)) {
              setLineNumber(457);    // compilenode call
              if (var_newResult === undefined) raiseUninitializedVariable("newResult");
              // call case 6: other requests
              var call763 = request(var_each, "debug(1)", [1], var_newResult);
              setLineNumber(458);    // compilenode op
              if (var_n === undefined) raiseUninitializedVariable("n");
              var diff764 = request(var_n, "-(1)", [1], new GraceNum(1));
              var_n = diff764;
              var if765 = GraceDone;
              setLineNumber(459);    // compilenode op
              if (var_n === undefined) raiseUninitializedVariable("n");
              var opresult766 = request(var_n, "==(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult766)) {
                throw new ReturnException(var_done, returnTarget);
              }
              if760 = if765;
            }
            return if760;
          };
          let applyMeth759 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth759.methodName = "apply(1)";
          applyMeth759.paramCounts = [1];
          applyMeth759.paramNames = ["each"];
          applyMeth759.definitionLine = 455;
          applyMeth759.definitionModule = "gUnit";
          block759.methods["apply(1)"] = applyMeth759;
          let matchesMeth759 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth759.methodName = "matches(1)";
          matchesMeth759.paramCounts = [1];
          matchesMeth759.paramNames = ["each"];
          matchesMeth759.definitionLine = 455;
          matchesMeth759.definitionModule = "gUnit";
          block759.methods["matches(1)"] = matchesMeth759;
          // call case 6: other requests
          setLineNumber(455);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call767 = selfRequest(this, "tests", [0]);
          var call758 = request(call767, "do(1)", [1], block759);
          return call758;
        };    // end of method rerunErrors(_)
        this.methods["rerunErrors(1)"] = func744;
        func744.methodName = "rerunErrors(1)";
        func744.paramCounts = [1];
        func744.paramNames = ["result"];
        func744.definitionLine = 445;
        func744.definitionModule = "gUnit";
        this.mutable = true;
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 378;
            m.definitionModule = "gUnit";
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
        var obj640_init = function() {    // init of object on line 378
          setLineNumber(380);    // compilenode string
          var string768 = new GraceString("");
          this.data.name = string768;
          setLineNumber(381);    // compilenode array
          var array770 = new GraceSequence([]);
          // call case 2: outer request
          var call769 = selfRequest(var_prelude, "list(1)", [1], array770);
          this.data.tests = call769;
          setLineNumber(382);    // compilenode member
          // call case 2: outer request
          var call771 = selfRequest(var_prelude, "emptySet", [0]);
          this.data.testNames = call771;
          this.data.errorsToBeRerun = GraceTrue;
          setLineNumber(387);    // compilenode block
          var block773 = new GraceBlock(this, 387, 1);
          block773.guard = jsTrue;
          block773.real = function block773(var_each) {
            setLineNumber(387);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call774 = selfRequest(this, "add(1)", [1], var_each);
            return call774;
          };
          let applyMeth773 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth773.methodName = "apply(1)";
          applyMeth773.paramCounts = [1];
          applyMeth773.paramNames = ["each"];
          applyMeth773.definitionLine = 387;
          applyMeth773.definitionModule = "gUnit";
          block773.methods["apply(1)"] = applyMeth773;
          let matchesMeth773 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth773.methodName = "matches(1)";
          matchesMeth773.paramCounts = [1];
          matchesMeth773.paramNames = ["each"];
          matchesMeth773.definitionLine = 387;
          matchesMeth773.definitionModule = "gUnit";
          block773.methods["matches(1)"] = matchesMeth773;
          // call case 2: outer request
          var call772 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_initialContents, block773);
        };
        return obj640_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj640_init = obj640_build.call(inheritingObject, null, var_initialContents, this, aliases, exclusions);
      return obj640_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method withAll(_)$build(_,_,_)
    this.methods["withAll(1)$build(3)"] = func639;
    func639.methodName = "withAll(1)$build(3)";
    func639.paramCounts = [1];
    func639.paramNames = ["initialContents"];
    func639.definitionLine = 378;
    func639.definitionModule = "gUnit";
    var func775 = function(argcv) {    // method empty, line 465
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("empty", 0, numArgs - 0);
      }
      setLineNumber(465);    // compilenode array
      var array777 = new GraceSequence([]);
      // call case 4: self request with 1 args and 0 typeArgs 
      var call776 = selfRequest(this, "withAll(1)", [1], array777);
      return call776;
    };    // end of method empty
    this.methods["empty"] = func775;
    func775.methodName = "empty";
    func775.paramCounts = [0];
    func775.paramNames = [];
    func775.definitionLine = 465;
    func775.definitionModule = "gUnit";
    var func778 = function(argcv, var_aTestClass, var_aName) {    // method fromTestMethodsIn(_)named(_), line 467
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("fromTestMethodsIn(_)named(_)", 0, numArgs - 2);
      }
      setLineNumber(468);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call779 = selfRequest(this, "empty", [0]);
      var var_newSuite = call779;
      setLineNumber(469);    // compilenode string
      var string781 = new GraceString("null");
      // call case 6: other requests
      var call780 = request(var_aTestClass, "forMethod(1)", [1], string781);
      var var_example = call780;
      setLineNumber(470);    // compilenode call
      // call case 6: other requests
      var call782 = request(var_newSuite, "name:=(1)", [1], var_aName);
      setLineNumber(471);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_mirror === undefined) raiseUninitializedVariable("mirror");
      var call785 = request(var_mirror, "reflect(1)", [1], var_example);
      var call784 = request(call785, "methods", [0]);
      var block786 = new GraceBlock(this, 471, 1);
      block786.guard = jsTrue;
      block786.real = function block786(var_each) {
        var if787 = GraceDone;
        setLineNumber(472);    // compilenode string
        var string789 = new GraceString("test");
        // call case 6: other requests
        // call case 6: other requests
        var call790 = request(var_each, "name", [0]);
        var call788 = request(call790, "startsWith(1)", [1], string789);
        if (Grace_isTrue(call788)) {
          var if791 = GraceDone;
          setLineNumber(473);    // compilenode call
          // call case 6: other requests
          var string794 = new GraceString("$");
          // call case 6: other requests
          // call case 6: other requests
          var call795 = request(var_each, "name", [0]);
          var call793 = request(call795, "contains(1)", [1], string794);
          var call792 = request(call793, "prefix!", [0]);
          if (Grace_isTrue(call792)) {
            setLineNumber(476);    // compilenode member
            // call case 6: other requests
            var call798 = request(var_each, "name", [0]);
            // call case 6: other requests
            var call797 = request(var_aTestClass, "forMethod(1)", [1], call798);
            // call case 6: other requests
            if (var_newSuite === undefined) raiseUninitializedVariable("newSuite");
            var call796 = request(var_newSuite, "add(1)", [1], call797);
            if791 = call796;
          }
          if787 = if791;
        }
        return if787;
      };
      let applyMeth786 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth786.methodName = "apply(1)";
      applyMeth786.paramCounts = [1];
      applyMeth786.paramNames = ["each"];
      applyMeth786.definitionLine = 471;
      applyMeth786.definitionModule = "gUnit";
      block786.methods["apply(1)"] = applyMeth786;
      let matchesMeth786 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth786.methodName = "matches(1)";
      matchesMeth786.paramCounts = [1];
      matchesMeth786.paramNames = ["each"];
      matchesMeth786.definitionLine = 471;
      matchesMeth786.definitionModule = "gUnit";
      block786.methods["matches(1)"] = matchesMeth786;
      // call case 2: outer request
      var call783 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call784, block786);
      return var_newSuite;
    };    // end of method fromTestMethodsIn(_)named(_)
    this.methods["fromTestMethodsIn(1)named(1)"] = func778;
    func778.methodName = "fromTestMethodsIn(1)named(1)";
    func778.paramCounts = [1, 1];
    func778.paramNames = ["aTestClass", "aName"];
    func778.definitionLine = 467;
    func778.definitionModule = "gUnit";
    var func799 = function(argcv, var_aTestClass) {    // method fromTestMethodsIn(_), line 483
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromTestMethodsIn(_)", 0, numArgs - 1);
      }
      setLineNumber(484);    // compilenode call
      // call case 2: outer request
      var call801 = selfRequest(importedModules["gUnit"], "className(1)", [1], var_aTestClass);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call800 = selfRequest(this, "fromTestMethodsIn(1)named(1)", [1, 1], var_aTestClass, call801);
      return call800;
    };    // end of method fromTestMethodsIn(_)
    this.methods["fromTestMethodsIn(1)"] = func799;
    func799.methodName = "fromTestMethodsIn(1)";
    func799.paramCounts = [1];
    func799.paramNames = ["aTestClass"];
    func799.definitionLine = 483;
    func799.definitionModule = "gUnit";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 376;
        m.definitionModule = "gUnit";
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
    var obj637_init = function() {    // init of object on line 376
    };
    return obj637_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj637 = emptyGraceObject("testSuite", "gUnit", 376);
  var obj637_init = obj637_build.call(obj637, null, this, [], []);
  obj637_init.call(obj637);  // end of compileobject
  var var_testSuite = obj637;
  var reader802_testSuite = function() {  // reader method testSuite
      if (var_testSuite === undefined) raiseUninitializedVariable("testSuite");
      return var_testSuite;
  };
  reader802_testSuite.isDef = true;
  this.methods["testSuite"] = reader802_testSuite;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_gUnit = gracecode_gUnit;
if (typeof window !== "undefined")
  window.gracecode_gUnit = gracecode_gUnit;
gracecode_gUnit.imports = ["mirrors", "standardGrace"];
gracecode_gUnit.definitionModule = "gUnit";
gracecode_gUnit.definitionLine = 1;
