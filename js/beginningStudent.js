var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["beginningStudent"] = "classes:\nconfidential:\n BoundsError\n DialectError\n Function2\n IteratorExhausted\n binding\n bsVisitor\n isName(1)requesting(1)\n selfImage\ndialect:\n standardGrace\nfresh-methods:\n sequence\nfresh:sequence:\n ++(1)\n ::(1)\n ==(1)\n asString\n at(1)\n at(1)ifAbsent(1)\n contains(1)\n do(1)\n hash\n isEmpty\n iterator\n keys\n keysAndValuesDo(1)\n reversed\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n values\n withAll(1)\n \u2260(1)\nmethodtypes-of:Collection:\nmodules:\n ast\n collectionsPrelude\n fastDict\n gUnit\n identifierKinds\n io\n minispec\n mirrors\n standardGrace\n sys\n typeComparison\n unicode\n unixFilePath\n util\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/beginningStudent.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n Block\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n describe(1)with(1)\n dictionary\n dictionary(1)\n dictionary(2)\n dictionary(3)\n dictionary(4)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n expect(1)notToBe(1)\n expect(1)notToBe(1)orSay(1)\n expect(1)notToHaveType(1)\n expect(1)notToRaise(1)\n expect(1)orSay(1)\n expect(1)toBe(1)\n expect(1)toBe(1)orSay(1)\n expect(1)toBe(1)within(1)\n expect(1)toHaveType(1)\n expect(1)toRaise(1)\n expect(1)toRaise(1)mentioning(1)\n failAndSay(1)\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n list(2)\n list(3)\n list(4)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n sequence(2)\n sequence(3)\n sequence(4)\n set\n set(1)\n set(2)\n set(3)\n set(4)\n singleton\n singleton(1)\n specify(1)by(1)\n thisDialect\n valueOf(1)\npublicMethodTypes:\n dictionary\u27e6K, T\u27e7\n dictionary\u27e6K, T\u27e7(a)\n dictionary\u27e6K, T\u27e7(a, b)\n dictionary\u27e6K, T\u27e7(a, b, c)\n dictionary\u27e6K, T\u27e7(a, b, c, d)\n list\u27e6T\u27e7\n list\u27e6T\u27e7(a)\n list\u27e6T\u27e7(a, b)\n list\u27e6T\u27e7(a, b, c)\n list\u27e6T\u27e7(a, b, c, d)\n sequence\u27e6T\u27e7\n sequence\u27e6T\u27e7(a)\n sequence\u27e6T\u27e7(a, b)\n sequence\u27e6T\u27e7(a, b, c)\n sequence\u27e6T\u27e7(a, b, c, d)\n set\u27e6T\u27e7\n set\u27e6T\u27e7(a)\n set\u27e6T\u27e7(a, b)\n set\u27e6T\u27e7(a, b, c)\n set\u27e6T\u27e7(a, b, c, d)\n thisDialect \u2192 Unknown\ntypes:\n Collection\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["beginningStudent"] = [
    "import \"ast\" as ast",
    "import \"mirrors\" as mirror",
    "import \"unicode\" as unicode",
    "import \"typeComparison\" as tc",
    "import \"minispec\" as minispec",
    "inherit minispec.methods",
    "    exclude list",
    "    exclude list(_)",
    "    exclude dictionary",
    "    exclude dictionary(_)",
    "    exclude sequence",
    "    exclude sequence(_)",
    "    exclude set",
    "    exclude set(_)",
    "",
    "def DialectError = prelude.Exception.refine \"DialectError\"",
    "def BoundsError = prelude.BoundsError",
    "def IteratorExhausted = prelude.IteratorExhausted",
    "def binding = prelude.binding",
    "def Function2 = prelude.Function2",
    "",
    "type Collection = prelude.Collection",
    "",
    "method list⟦T⟧ {",
    "    prelude.collections.list⟦T⟧.empty",
    "}",
    "method list⟦T⟧(a) {",
    "    prelude.collections.list⟦T⟧.withAll [a]",
    "}",
    "method list⟦T⟧(a, b) {",
    "    prelude.collections.list⟦T⟧.withAll [a, b]",
    "}",
    "method list⟦T⟧(a, b, c) {",
    "    prelude.collections.list⟦T⟧.withAll [a, b, c]",
    "}",
    "method list⟦T⟧(a, b, c, d) {",
    "    prelude.collections.list⟦T⟧.withAll [a, b, c, d]",
    "}",
    "",
    "class sequence⟦T⟧ {",
    "    // returns an object that acts _both_ as an empty sequence, and as a collection",
    "    // factory.  Not sure why this is a good idea ...",
    "    use prelude.collections.indexable",
    "    method size { 0 }",
    "    method sizeIfUnknown(action) { 0 }",
    "    method isEmpty { true }",
    "    method at(n) { BoundsError.raise \"index {n} of empty sequence\" }",
    "    method at(n) ifAbsent(action) { action.apply }",
    "    method keys { self }",
    "    method values { self }",
    "    method keysAndValuesDo(block2) { done }",
    "    method reversed { self }",
    "    method ++ (other: Collection) { sequence.withAll(other) }",
    "    method asString { \"[]\" }",
    "    method contains(element) { false }",
    "    method do(block1) { done }",
    "    method ==(other) {",
    "        match (other)",
    "          case {",
    "            o: Collection -> o.isEmpty",
    "        } else {",
    "            false",
    "        }",
    "    }",
    "    method hash { [].hash }",
    "    method :: (obj) { binding.key (self) value (obj) }",
    "    method ≠ (other) { (self == other).not }",
    "    class iterator {",
    "        method asString { \"emptySequenceIterator\" }",
    "        method hasNext { false }",
    "        method next { IteratorExhausted.raise \"on empty sequence\" }",
    "    }",
    "    method sorted { self }",
    "    method sortedBy(sortBlock:Function2){ self }",
    "",
    "    // finally the factory method",
    "    method withAll(elements) {",
    "        prelude.collections.sequence⟦T⟧.withAll(elements)",
    "    }",
    "}",
    "method sequence⟦T⟧(a) {",
    "    prelude.collections.sequence⟦T⟧.withAll [a]",
    "}",
    "method sequence⟦T⟧(a, b) {",
    "    prelude.collections.sequence⟦T⟧.withAll [a, b]",
    "}",
    "method sequence⟦T⟧(a, b, c) {",
    "    prelude.collections.sequence⟦T⟧.withAll [a, b, c]",
    "}",
    "method sequence⟦T⟧(a, b, c, d) {",
    "    prelude.collections.sequence⟦T⟧.withAll [a, b, c, d]",
    "}",
    "",
    "method set⟦T⟧ {",
    "    prelude.collections.set⟦T⟧.empty",
    "}",
    "method set⟦T⟧(a) {",
    "    prelude.collections.set⟦T⟧.withAll [a]",
    "}",
    "method set⟦T⟧(a, b) {",
    "    prelude.collections.set⟦T⟧.withAll [a, b]",
    "}",
    "method set⟦T⟧(a, b, c) {",
    "    prelude.collections.set⟦T⟧.withAll [a, b, c]",
    "}",
    "method set⟦T⟧(a, b, c, d) {",
    "    prelude.collections.set⟦T⟧.withAll [a, b, c, d]",
    "}",
    "",
    "method dictionary⟦K,T⟧ {",
    "    prelude.collections.dictionary⟦K,T⟧.empty",
    "}",
    "method dictionary⟦K,T⟧(a) {",
    "    prelude.collections.dictionary⟦K,T⟧.withAll [a]",
    "}",
    "method dictionary⟦K,T⟧(a, b) {",
    "    prelude.collections.dictionary⟦K,T⟧.withAll [a, b]",
    "}",
    "method dictionary⟦K,T⟧(a, b, c) {",
    "    prelude.collections.dictionary⟦K,T⟧.withAll [a, b, c]",
    "}",
    "method dictionary⟦K,T⟧(a, b, c, d) {",
    "    prelude.collections.dictionary⟦K,T⟧.withAll [a, b, c, d]",
    "}",
    "",
    "def selfImage = mirror.reflect(self)",
    "",
    "selfImage.whenNoMethodDo { name, args, receiver ->",
    "    if (isName (name) requesting \"list\") then {",
    "        prelude.collections.list.withAll (args)",
    "    } elseif {isName (name) requesting \"sequence\"} then {",
    "        prelude.collections.sequence.withAll (args)",
    "    } elseif {isName (name) requesting \"set\"} then {",
    "        prelude.collections.set.withAll (args)",
    "    } elseif {isName (name) requesting \"dictionary\"} then {",
    "        prelude.collections.dictionary.withAll (args)",
    "    } else {",
    "        def cName = tc.canonical(name)",
    "        NoSuchMethod.raise \"no method {cName} on {receiver}.\"",
    "    }",
    "}",
    "",
    "method isName (numericName) requesting (soughtName) is confidential {",
    "    if (numericName.startsWith(soughtName).not) then { return false }",
    "    var ix := soughtName.size + 1",
    "    if ( numericName.at(ix) ≠ \"(\" ) then { return false }",
    "    while {",
    "        ix := ix + 1",
    "        numericName.at(ix).startsWithDigit",
    "    } do { }",
    "    ix == numericName.size",
    "}",
    "",
    "def bsVisitor = object {",
    "    inherit ast.baseVisitor",
    "    method asString {",
    "        \"the beginningStudent visitor\"",
    "    }",
    "",
    "    method visitArray(v) -> Boolean {",
    "        DialectError.raise(\"square brackets are not used in this dialect; \" ++",
    "              \"for a list, use list(_, _, ... )\") with (v)",
    "        false",
    "    }",
    "    method visitVarDec(v) -> Boolean {",
    "        def name = v.nameString",
    "        if (false == v.dtype) then {",
    "            DialectError.raise \"no type given to var '{v.nameString}'\"",
    "                with (v.name)",
    "        }",
    "        if (unicode.inCategory(name, \"Lu\")) then {",
    "            DialectError.raise(\"by convention, variables start \" ++",
    "                \"with a lower-case letter\") with (v.name)",
    "        }",
    "        true",
    "    }",
    "    method visitDefDec(v) -> Boolean {",
    "        def name = v.nameString",
    "        if (unicode.inCategory(name, \"Lu\")) then {",
    "            DialectError.raise(\"by convention, constants start \" ++",
    "                \"with a lower-case letter\") with (v.name)",
    "        }",
    "        true",
    "    }",
    "    method visitMethod(v) -> Boolean {",
    "        if (false == v.comments) then {",
    "            def headerEnd = if (false == v.dtype) then {",
    "                v.signature.last.end",
    "            } else {",
    "                v.dtype.end",
    "            }",
    "            def loc = ast.start(v.start) end (headerEnd)",
    "            DialectError.raise \"purpose statement missing from method '{v.canonicalName}'\"",
    "                with (loc)",
    "        }",
    "        def commentString = v.comments.value",
    "        def lowerCommentString = commentString.asLower",
    "        v.parametersDo { p ->",
    "            if (p.wildcard.not) then {",
    "                def pn = p.nameString",
    "                if (false == p.dtype) then {",
    "                    DialectError.raise \"no type given to parameter '{pn}'\"",
    "                        with (p)",
    "                }",
    "                if (unicode.inCategory(pn, \"Lu\")) then {",
    "                    DialectError.raise(\"by convention, parameters start \" ++",
    "                          \"with a lower-case letter\") with (p)",
    "                }",
    "                if (commentString.contains(pn).not) then {",
    "                    DialectError.raise \"purpose statement does not describe parameter '{pn}'\"",
    "                        with (v.comments)",
    "                }",
    "            }",
    "        }",
    "        def mn1 = v.signature.first.name",
    "        if (unicode.inCategory(mn1, \"Lu\")) then {",
    "            DialectError.raise(\"by convention, method names start \" ++",
    "                \"with a lower-case letter\") with (v.signature.first)",
    "        }",
    "        if (v.isClass) then { return true }",
    "        if (false == v.dtype) then {",
    "            DialectError.raise \"no return type given to method '{v.canonicalName}'\" ",
    "                with (ast.start(v.start)",
    "                            end(v.signature.last.end))",
    "        } elseif {",
    "            (v.dtype.nameString ≠ \"Done\") && {",
    "                ((lowerCommentString.contains \"returns\") || (lowerCommentString.contains \"answers\")).not",
    "            }",
    "        } then {",
    "            DialectError.raise (\"purpose statement of method '{v.canonicalName}\" ++",
    "                \"does not describe what it returns\") with (v.comments)",
    "        }",
    "        true",
    "    }",
    "    method visitBlock(v) -> Boolean {",
    "        for (v.params) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                DialectError.raise \"no type given to block parameter '{p.nameString}'\"",
    "                    with (p)",
    "            }",
    "            if (unicode.inCategory(p.nameString, \"Lu\")) then {",
    "                DialectError.raise(\"by convention, parameters start \" ++",
    "                      \"with a lower-case letter\") with (p)",
    "            }",
    "        }",
    "        true",
    "    }",
    "    method visitTypeDec(v) -> Boolean {",
    "        def ns = v.nameString",
    "        if (unicode.inCategory(ns, \"Lu\").not) then {",
    "            DialectError.raise(\"by convention, type names start \" ++",
    "                  \"with an upper-case letter\") with (v.name)",
    "        }",
    "        true",
    "    }",
    "}",
    "",
    "def thisDialect is public = object {",
    "    method parseChecker (moduleObj) {",
    "        moduleObj.accept(bsVisitor)",
    "    }",
    "}" ];
}
function gracecode_beginningStudent() {
  importedModules["beginningStudent"] = this;
  var module$beginningStudent = this;
  this.definitionModule = "beginningStudent";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_beginningStudent_1");
  this.outer_beginningStudent_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "ast" as ast
  if (typeof gracecode_ast == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module ast"));
  var var_ast = do_import("ast", gracecode_ast);
  var func0 = function(argcv) {     // accessor method ast
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("ast", 0, numArgs - 0);
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    return var_ast;
  };    // end of method ast
  this.methods["ast"] = func0;
  func0.methodName = "ast";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "beginningStudent";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(2);    // compilenode import
  // Import of "mirrors" as mirror
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirror = do_import("mirrors", gracecode_mirrors);
  var func1 = function(argcv) {     // accessor method mirror
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("mirror", 0, numArgs - 0);
    if (var_mirror === undefined) raiseUninitializedVariable("mirror");
    return var_mirror;
  };    // end of method mirror
  this.methods["mirror"] = func1;
  func1.methodName = "mirror";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 2;
  func1.definitionModule = "beginningStudent";
  func1.debug = "import";
  func1.confidential = true;
  setLineNumber(3);    // compilenode import
  // Import of "unicode" as unicode
  if (typeof gracecode_unicode == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module unicode"));
  var var_unicode = do_import("unicode", gracecode_unicode);
  var func2 = function(argcv) {     // accessor method unicode
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("unicode", 0, numArgs - 0);
    if (var_unicode === undefined) raiseUninitializedVariable("unicode");
    return var_unicode;
  };    // end of method unicode
  this.methods["unicode"] = func2;
  func2.methodName = "unicode";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "beginningStudent";
  func2.debug = "import";
  func2.confidential = true;
  setLineNumber(4);    // compilenode import
  // Import of "typeComparison" as tc
  if (typeof gracecode_typeComparison == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module typeComparison"));
  var var_tc = do_import("typeComparison", gracecode_typeComparison);
  var func3 = function(argcv) {     // accessor method tc
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("tc", 0, numArgs - 0);
    if (var_tc === undefined) raiseUninitializedVariable("tc");
    return var_tc;
  };    // end of method tc
  this.methods["tc"] = func3;
  func3.methodName = "tc";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 4;
  func3.definitionModule = "beginningStudent";
  func3.debug = "import";
  func3.confidential = true;
  setLineNumber(5);    // compilenode import
  // Import of "minispec" as minispec
  if (typeof gracecode_minispec == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module minispec"));
  var var_minispec = do_import("minispec", gracecode_minispec);
  var func4 = function(argcv) {     // accessor method minispec
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("minispec", 0, numArgs - 0);
    if (var_minispec === undefined) raiseUninitializedVariable("minispec");
    return var_minispec;
  };    // end of method minispec
  this.methods["minispec"] = func4;
  func4.methodName = "minispec";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 5;
  func4.definitionModule = "beginningStudent";
  func4.debug = "import";
  func4.confidential = true;
  setLineNumber(6);    // reuse call
  var initFun5 = request(var_minispec, "methods$build(3)", [null], this, [], ["list", "list(1)", "dictionary", "dictionary(1)", "sequence", "sequence(1)", "set", "set(1)"]);  // compileReuseCall
  setLineNumber(22);    // compilenode typedec
  // Type decl Collection
  var func7 = function(argcv) {    // method Collection, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(22);    // compilenode member
    // call case 2: outer request
    var call8 = selfRequest(var_prelude, "Collection", [0]);
    return call8;
  };    // end of method Collection
  function memofunc7(argcv) {
      if (! this.data["memo$Collection"])    // parameterless memo function
          this.data["memo$Collection"] = func7.call(this, argcv);
      return this.data["memo$Collection"];
  };
  this.methods["Collection"] = memofunc7;
  memofunc7.methodName = "Collection";
  memofunc7.paramCounts = [0];
  memofunc7.paramNames = [];
  memofunc7.definitionLine = 1;
  memofunc7.definitionModule = "beginningStudent";
  func7.methodName = "Collection";
  func7.paramCounts = [0];
  func7.paramNames = [];
  func7.definitionLine = 1;
  func7.definitionModule = "beginningStudent";
  var func9 = function(argcv, var_T) {    // method list, line 24
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("list", 1, numArgs - 0);
    }
    setLineNumber(25);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call12 = selfRequest(var_prelude, "collections", [0]);
    var call11 = request(call12, "list", [0, 1], var_T);
    var call10 = request(call11, "empty", [0]);
    return call10;
  };    // end of method list
  this.methods["list"] = func9;
  func9.methodName = "list";
  func9.paramCounts = [0];
  func9.paramNames = [];
  func9.typeParamNames = ["T"];
  func9.definitionLine = 24;
  func9.definitionModule = "beginningStudent";
  var func13 = function(argcv, var_a, var_T) {    // method list(_), line 27
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("list(_)", 1, numArgs - 1);
    }
    setLineNumber(28);    // compilenode array
    var array15 = new GraceSequence([var_a]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call17 = selfRequest(var_prelude, "collections", [0]);
    var call16 = request(call17, "list", [0, 1], var_T);
    var call14 = request(call16, "withAll(1)", [1], array15);
    return call14;
  };    // end of method list(_)
  this.methods["list(1)"] = func13;
  func13.methodName = "list(1)";
  func13.paramCounts = [1];
  func13.paramNames = ["a"];
  func13.typeParamNames = ["T"];
  func13.definitionLine = 27;
  func13.definitionModule = "beginningStudent";
  var func18 = function(argcv, var_a, var_b, var_T) {    // method list(_,_), line 30
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("list(_,_)", 1, numArgs - 2);
    }
    setLineNumber(31);    // compilenode array
    var array20 = new GraceSequence([var_a, var_b]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call22 = selfRequest(var_prelude, "collections", [0]);
    var call21 = request(call22, "list", [0, 1], var_T);
    var call19 = request(call21, "withAll(1)", [1], array20);
    return call19;
  };    // end of method list(_,_)
  this.methods["list(2)"] = func18;
  func18.methodName = "list(2)";
  func18.paramCounts = [2];
  func18.paramNames = ["a", "b"];
  func18.typeParamNames = ["T"];
  func18.definitionLine = 30;
  func18.definitionModule = "beginningStudent";
  var func23 = function(argcv, var_a, var_b, var_c, var_T) {    // method list(_,_,_), line 33
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 4)) {
        raiseTypeArgError("list(_,_,_)", 1, numArgs - 3);
    }
    setLineNumber(34);    // compilenode array
    var array25 = new GraceSequence([var_a, var_b, var_c]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call27 = selfRequest(var_prelude, "collections", [0]);
    var call26 = request(call27, "list", [0, 1], var_T);
    var call24 = request(call26, "withAll(1)", [1], array25);
    return call24;
  };    // end of method list(_,_,_)
  this.methods["list(3)"] = func23;
  func23.methodName = "list(3)";
  func23.paramCounts = [3];
  func23.paramNames = ["a", "b", "c"];
  func23.typeParamNames = ["T"];
  func23.definitionLine = 33;
  func23.definitionModule = "beginningStudent";
  var func28 = function(argcv, var_a, var_b, var_c, var_d, var_T) {    // method list(_,_,_,_), line 36
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 5)) {
        raiseTypeArgError("list(_,_,_,_)", 1, numArgs - 4);
    }
    setLineNumber(37);    // compilenode array
    var array30 = new GraceSequence([var_a, var_b, var_c, var_d]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call32 = selfRequest(var_prelude, "collections", [0]);
    var call31 = request(call32, "list", [0, 1], var_T);
    var call29 = request(call31, "withAll(1)", [1], array30);
    return call29;
  };    // end of method list(_,_,_,_)
  this.methods["list(4)"] = func28;
  func28.methodName = "list(4)";
  func28.paramCounts = [4];
  func28.paramNames = ["a", "b", "c", "d"];
  func28.typeParamNames = ["T"];
  func28.definitionLine = 36;
  func28.definitionModule = "beginningStudent";
  var func33 = function(argcv, var_T) {    // method sequence, line 40
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("sequence", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("sequence", "beginningStudent", 40);
    var ouc_init = this.methods["sequence$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method sequence
  this.methods["sequence"] = func33;
  func33.methodName = "sequence";
  func33.paramCounts = [0];
  func33.paramNames = [];
  func33.typeParamNames = ["T"];
  func33.definitionLine = 40;
  func33.definitionModule = "beginningStudent";
  var func34 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method sequence$build(_,_,_), line 40
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("sequence", 1, numArgs - 0);
    }
    var obj35_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_beginningStudent_40");
      this.outer_beginningStudent_40 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(43);    // compilenode member
      // call case 2: outer request
      var call36 = selfRequest(var_prelude, "collections", [0]);
      var initFun37 = request(call36, "indexable$build(3)", [null], this, [], []);  // compileReuseCall
      var func38 = function(argcv) {    // method size, line 44
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(44);    // compilenode num
        return new GraceNum(0);
      };    // end of method size
      this.methods["size"] = func38;
      func38.methodName = "size";
      func38.paramCounts = [0];
      func38.paramNames = [];
      func38.definitionLine = 44;
      func38.definitionModule = "beginningStudent";
      var func39 = function(argcv, var_action) {    // method sizeIfUnknown(_), line 45
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(45);    // compilenode num
        return new GraceNum(0);
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func39;
      func39.methodName = "sizeIfUnknown(1)";
      func39.paramCounts = [1];
      func39.paramNames = ["action"];
      func39.definitionLine = 45;
      func39.definitionModule = "beginningStudent";
      var func40 = function(argcv) {     // accessor method isEmpty
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isEmpty", 0, numArgs - 0);
        return GraceTrue;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func40;
      func40.methodName = "isEmpty";
      func40.paramCounts = [0];
      func40.paramNames = [];
      func40.definitionLine = 46;
      func40.definitionModule = "beginningStudent";
      var func41 = function(argcv, var_n) {    // method at(_), line 47
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("at(_)", 0, numArgs - 1);
        }
        setLineNumber(47);    // compilenode string
        var string43 = new GraceString("index ");
        var opresult44 = request(string43, "++(1)", [1], var_n);
        var string45 = new GraceString(" of empty sequence");
        var opresult46 = request(opresult44, "++(1)", [1], string45);
        // call case 6: other requests
        if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
        var call42 = request(var_BoundsError, "raise(1)", [1], opresult46);
        return call42;
      };    // end of method at(_)
      this.methods["at(1)"] = func41;
      func41.methodName = "at(1)";
      func41.paramCounts = [1];
      func41.paramNames = ["n"];
      func41.definitionLine = 47;
      func41.definitionModule = "beginningStudent";
      var func47 = function(argcv, var_n, var_action) {    // method at(_)ifAbsent(_), line 48
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
        }
        setLineNumber(48);    // compilenode member
        // call case 6: other requests
        var call48 = request(var_action, "apply", [0]);
        return call48;
      };    // end of method at(_)ifAbsent(_)
      this.methods["at(1)ifAbsent(1)"] = func47;
      func47.methodName = "at(1)ifAbsent(1)";
      func47.paramCounts = [1, 1];
      func47.paramNames = ["n", "action"];
      func47.definitionLine = 48;
      func47.definitionModule = "beginningStudent";
      var func49 = function(argcv) {     // accessor method keys
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("keys", 0, numArgs - 0);
        return this;
      };    // end of method keys
      this.methods["keys"] = func49;
      func49.methodName = "keys";
      func49.paramCounts = [0];
      func49.paramNames = [];
      func49.definitionLine = 49;
      func49.definitionModule = "beginningStudent";
      var func50 = function(argcv) {     // accessor method values
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
        return this;
      };    // end of method values
      this.methods["values"] = func50;
      func50.methodName = "values";
      func50.paramCounts = [0];
      func50.paramNames = [];
      func50.definitionLine = 50;
      func50.definitionModule = "beginningStudent";
      var func51 = function(argcv, var_block2) {     // accessor method keysAndValuesDo(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method keysAndValuesDo(_)
      this.methods["keysAndValuesDo(1)"] = func51;
      func51.methodName = "keysAndValuesDo(1)";
      func51.paramCounts = [1];
      func51.paramNames = ["block2"];
      func51.definitionLine = 51;
      func51.definitionModule = "beginningStudent";
      var func52 = function(argcv) {     // accessor method reversed
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("reversed", 0, numArgs - 0);
        return this;
      };    // end of method reversed
      this.methods["reversed"] = func52;
      func52.methodName = "reversed";
      func52.paramCounts = [0];
      func52.paramNames = [];
      func52.definitionLine = 52;
      func52.definitionModule = "beginningStudent";
      var func53 = function(argcv, var_other) {    // method ++(_), line 53
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("++(_)", 0, numArgs - 1);
        }
        setLineNumber(53);    // compilenode member
        // call case 2: outer request
        var call54 = selfRequest(importedModules["beginningStudent"], "Collection", [0]);
        assertTypeOrMsg(var_other, call54, "argument to request of `++(_)`", "Collection");
        // call case 6: other requests
        // call case 2: outer request
        var call56 = selfRequest(importedModules["beginningStudent"], "sequence", [0]);
        var call55 = request(call56, "withAll(1)", [1], var_other);
        return call55;
      };    // end of method ++(_)
      this.methods["++(1)"] = func53;
      func53.methodName = "++(1)";
      func53.paramCounts = [1];
      func53.paramNames = ["other"];
      func53.definitionLine = 53;
      func53.definitionModule = "beginningStudent";
      var func57 = function(argcv) {    // method asString, line 54
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(54);    // compilenode string
        var string58 = new GraceString("[]");
        return string58;
      };    // end of method asString
      this.methods["asString"] = func57;
      func57.methodName = "asString";
      func57.paramCounts = [0];
      func57.paramNames = [];
      func57.definitionLine = 54;
      func57.definitionModule = "beginningStudent";
      var func59 = function(argcv, var_element) {     // accessor method contains(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("contains(_)", 0, numArgs - 1);
        return GraceFalse;
      };    // end of method contains(_)
      this.methods["contains(1)"] = func59;
      func59.methodName = "contains(1)";
      func59.paramCounts = [1];
      func59.paramNames = ["element"];
      func59.definitionLine = 55;
      func59.definitionModule = "beginningStudent";
      var func60 = function(argcv, var_block1) {     // accessor method do(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("do(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method do(_)
      this.methods["do(1)"] = func60;
      func60.methodName = "do(1)";
      func60.paramCounts = [1];
      func60.paramNames = ["block1"];
      func60.definitionLine = 56;
      func60.definitionModule = "beginningStudent";
      var func61 = function(argcv, var_other) {    // method ==(_), line 57
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(58);    // compilenode matchcase
        var cases62 = [];
        setLineNumber(59);    // compilenode block
        var block63 = new GraceBlock(this, 59, 1);
        setLineNumber(60);    // compilenode member
        // call case 2: outer request
        var call64 = selfRequest(importedModules["beginningStudent"], "Collection", [0]);
        block63.paramTypes = [call64];
        var matches65 = function(var_o) {
          // call case 2: outer request
          var call66 = selfRequest(importedModules["beginningStudent"], "Collection", [0]);
          if (!Grace_isTrue(request(call66, "matches(1)", [1], var_o)))
              return false;
          return true;
        };
        block63.guard = matches65;
        block63.real = function block63(var_o) {
          setLineNumber(60);    // compilenode member
          // call case 6: other requests
          var call67 = request(var_o, "isEmpty", [0]);
          return call67;
        };
        let applyMeth63 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth63.methodName = "apply(1)";
        applyMeth63.paramCounts = [1];
        applyMeth63.paramNames = ["o"];
        applyMeth63.definitionLine = 59;
        applyMeth63.definitionModule = "beginningStudent";
        block63.methods["apply(1)"] = applyMeth63;
        let matchesMeth63 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth63.methodName = "matches(1)";
        matchesMeth63.paramCounts = [1];
        matchesMeth63.paramNames = ["o"];
        matchesMeth63.definitionLine = 59;
        matchesMeth63.definitionModule = "beginningStudent";
        block63.methods["matches(1)"] = matchesMeth63;
        cases62.push(block63);
        setLineNumber(61);    // compilenode block
        var block68 = new GraceBlock(this, 61, 0);
        block68.guard = jsTrue;
        block68.real = function block68() {
          setLineNumber(61);    // compileBlock
          return GraceFalse;
        };
        let applyMeth68 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth68.methodName = "apply";
        applyMeth68.paramCounts = [0];
        applyMeth68.paramNames = [];
        applyMeth68.definitionLine = 61;
        applyMeth68.definitionModule = "beginningStudent";
        block68.methods["apply"] = applyMeth68;
        setLineNumber(58);    // compilematchcase
        var matchres62 = matchCase(var_other,cases62,block68);
        return matchres62;
      };    // end of method ==(_)
      this.methods["==(1)"] = func61;
      func61.methodName = "==(1)";
      func61.paramCounts = [1];
      func61.paramNames = ["other"];
      func61.definitionLine = 57;
      func61.definitionModule = "beginningStudent";
      var func69 = function(argcv) {    // method hash, line 65
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(65);    // compilenode member
        // call case 6: other requests
        var array71 = new GraceSequence([]);
        var call70 = request(array71, "hash", [0]);
        return call70;
      };    // end of method hash
      this.methods["hash"] = func69;
      func69.methodName = "hash";
      func69.paramCounts = [0];
      func69.paramNames = [];
      func69.definitionLine = 65;
      func69.definitionModule = "beginningStudent";
      var func72 = function(argcv, var_obj) {    // method ::(_), line 66
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("::(_)", 0, numArgs - 1);
        }
        setLineNumber(66);    // compilenode call
        // call case 6: other requests
        if (var_binding === undefined) raiseUninitializedVariable("binding");
        var call73 = request(var_binding, "key(1)value(1)", [1, 1], this, var_obj);
        return call73;
      };    // end of method ::(_)
      this.methods["::(1)"] = func72;
      func72.methodName = "::(1)";
      func72.paramCounts = [1];
      func72.paramNames = ["obj"];
      func72.definitionLine = 66;
      func72.definitionModule = "beginningStudent";
      var func74 = function(argcv, var_other) {    // method ≠(_), line 67
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≠(_)", 0, numArgs - 1);
        }
        setLineNumber(67);    // compilenode member
        // call case 6: other requests
        var opresult76 = request(this, "==(1)", [1], var_other);
        var call75 = request(opresult76, "not", [0]);
        return call75;
      };    // end of method ≠(_)
      this.methods["\u2260(1)"] = func74;
      func74.methodName = "\u2260(1)";
      func74.paramCounts = [1];
      func74.paramNames = ["other"];
      func74.definitionLine = 67;
      func74.definitionModule = "beginningStudent";
      var func77 = function(argcv) {    // method iterator, line 68
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("sequence.iterator", "beginningStudent", 68);
        var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method iterator
      this.methods["iterator"] = func77;
      func77.methodName = "iterator";
      func77.paramCounts = [0];
      func77.paramNames = [];
      func77.definitionLine = 68;
      func77.definitionModule = "beginningStudent";
      var func78 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 68
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var obj79_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_beginningStudent_68");
          this.outer_beginningStudent_68 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          var func80 = function(argcv) {    // method asString, line 69
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(69);    // compilenode string
            var string81 = new GraceString("emptySequenceIterator");
            return string81;
          };    // end of method asString
          this.methods["asString"] = func80;
          func80.methodName = "asString";
          func80.paramCounts = [0];
          func80.paramNames = [];
          func80.definitionLine = 69;
          func80.definitionModule = "beginningStudent";
          var func82 = function(argcv) {     // accessor method hasNext
            const numArgs = arguments.length - 1;
            if (numArgs > 0) raiseTypeArgError("hasNext", 0, numArgs - 0);
            return GraceFalse;
          };    // end of method hasNext
          this.methods["hasNext"] = func82;
          func82.methodName = "hasNext";
          func82.paramCounts = [0];
          func82.paramNames = [];
          func82.definitionLine = 70;
          func82.definitionModule = "beginningStudent";
          var func83 = function(argcv) {    // method next, line 71
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("next", 0, numArgs - 0);
            }
            setLineNumber(71);    // compilenode string
            var string85 = new GraceString("on empty sequence");
            // call case 6: other requests
            if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
            var call84 = request(var_IteratorExhausted, "raise(1)", [1], string85);
            return call84;
          };    // end of method next
          this.methods["next"] = func83;
          func83.methodName = "next";
          func83.paramCounts = [0];
          func83.paramNames = [];
          func83.definitionLine = 71;
          func83.definitionModule = "beginningStudent";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 68;
              m.definitionModule = "beginningStudent";
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
          var obj79_init = function() {    // init of object on line 68
          };
          return obj79_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj79_init = obj79_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj79_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method iterator$build(_,_,_)
      this.methods["iterator$build(3)"] = func78;
      func78.methodName = "iterator$build(3)";
      func78.paramCounts = [0];
      func78.paramNames = [];
      func78.definitionLine = 68;
      func78.definitionModule = "beginningStudent";
      var func86 = function(argcv) {     // accessor method sorted
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("sorted", 0, numArgs - 0);
        return this;
      };    // end of method sorted
      this.methods["sorted"] = func86;
      func86.methodName = "sorted";
      func86.paramCounts = [0];
      func86.paramNames = [];
      func86.definitionLine = 73;
      func86.definitionModule = "beginningStudent";
      var func87 = function(argcv, var_sortBlock) {     // accessor method sortedBy(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
        return this;
      };    // end of method sortedBy(_)
      func87.paramTypes = [];
      func87.paramTypes.push([]);
      this.methods["sortedBy(1)"] = func87;
      func87.methodName = "sortedBy(1)";
      func87.paramCounts = [1];
      func87.paramNames = ["sortBlock"];
      func87.definitionLine = 74;
      func87.definitionModule = "beginningStudent";
      var func88 = function(argcv, var_elements) {    // method withAll(_), line 77
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        setLineNumber(78);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        // call case 2: outer request
        var call91 = selfRequest(var_prelude, "collections", [0]);
        var call90 = request(call91, "sequence", [0, 1], var_T);
        var call89 = request(call90, "withAll(1)", [1], var_elements);
        return call89;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func88;
      func88.methodName = "withAll(1)";
      func88.paramCounts = [1];
      func88.paramNames = ["elements"];
      func88.definitionLine = 77;
      func88.definitionModule = "beginningStudent";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 40;
          m.definitionModule = "beginningStudent";
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
      var obj35_init = function() {    // init of object on line 40
      };
      return obj35_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj35_init = obj35_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj35_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method sequence$build(_,_,_)
  this.methods["sequence$build(3)"] = func34;
  func34.methodName = "sequence$build(3)";
  func34.paramCounts = [0];
  func34.paramNames = [];
  func34.typeParamNames = ["T"];
  func34.definitionLine = 40;
  func34.definitionModule = "beginningStudent";
  var func92 = function(argcv, var_a, var_T) {    // method sequence(_), line 81
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("sequence(_)", 1, numArgs - 1);
    }
    setLineNumber(82);    // compilenode array
    var array94 = new GraceSequence([var_a]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call96 = selfRequest(var_prelude, "collections", [0]);
    var call95 = request(call96, "sequence", [0, 1], var_T);
    var call93 = request(call95, "withAll(1)", [1], array94);
    return call93;
  };    // end of method sequence(_)
  this.methods["sequence(1)"] = func92;
  func92.methodName = "sequence(1)";
  func92.paramCounts = [1];
  func92.paramNames = ["a"];
  func92.typeParamNames = ["T"];
  func92.definitionLine = 81;
  func92.definitionModule = "beginningStudent";
  var func97 = function(argcv, var_a, var_b, var_T) {    // method sequence(_,_), line 84
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("sequence(_,_)", 1, numArgs - 2);
    }
    setLineNumber(85);    // compilenode array
    var array99 = new GraceSequence([var_a, var_b]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call101 = selfRequest(var_prelude, "collections", [0]);
    var call100 = request(call101, "sequence", [0, 1], var_T);
    var call98 = request(call100, "withAll(1)", [1], array99);
    return call98;
  };    // end of method sequence(_,_)
  this.methods["sequence(2)"] = func97;
  func97.methodName = "sequence(2)";
  func97.paramCounts = [2];
  func97.paramNames = ["a", "b"];
  func97.typeParamNames = ["T"];
  func97.definitionLine = 84;
  func97.definitionModule = "beginningStudent";
  var func102 = function(argcv, var_a, var_b, var_c, var_T) {    // method sequence(_,_,_), line 87
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 4)) {
        raiseTypeArgError("sequence(_,_,_)", 1, numArgs - 3);
    }
    setLineNumber(88);    // compilenode array
    var array104 = new GraceSequence([var_a, var_b, var_c]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call106 = selfRequest(var_prelude, "collections", [0]);
    var call105 = request(call106, "sequence", [0, 1], var_T);
    var call103 = request(call105, "withAll(1)", [1], array104);
    return call103;
  };    // end of method sequence(_,_,_)
  this.methods["sequence(3)"] = func102;
  func102.methodName = "sequence(3)";
  func102.paramCounts = [3];
  func102.paramNames = ["a", "b", "c"];
  func102.typeParamNames = ["T"];
  func102.definitionLine = 87;
  func102.definitionModule = "beginningStudent";
  var func107 = function(argcv, var_a, var_b, var_c, var_d, var_T) {    // method sequence(_,_,_,_), line 90
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 5)) {
        raiseTypeArgError("sequence(_,_,_,_)", 1, numArgs - 4);
    }
    setLineNumber(91);    // compilenode array
    var array109 = new GraceSequence([var_a, var_b, var_c, var_d]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call111 = selfRequest(var_prelude, "collections", [0]);
    var call110 = request(call111, "sequence", [0, 1], var_T);
    var call108 = request(call110, "withAll(1)", [1], array109);
    return call108;
  };    // end of method sequence(_,_,_,_)
  this.methods["sequence(4)"] = func107;
  func107.methodName = "sequence(4)";
  func107.paramCounts = [4];
  func107.paramNames = ["a", "b", "c", "d"];
  func107.typeParamNames = ["T"];
  func107.definitionLine = 90;
  func107.definitionModule = "beginningStudent";
  var func112 = function(argcv, var_T) {    // method set, line 94
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("set", 1, numArgs - 0);
    }
    setLineNumber(95);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call115 = selfRequest(var_prelude, "collections", [0]);
    var call114 = request(call115, "set", [0, 1], var_T);
    var call113 = request(call114, "empty", [0]);
    return call113;
  };    // end of method set
  this.methods["set"] = func112;
  func112.methodName = "set";
  func112.paramCounts = [0];
  func112.paramNames = [];
  func112.typeParamNames = ["T"];
  func112.definitionLine = 94;
  func112.definitionModule = "beginningStudent";
  var func116 = function(argcv, var_a, var_T) {    // method set(_), line 97
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("set(_)", 1, numArgs - 1);
    }
    setLineNumber(98);    // compilenode array
    var array118 = new GraceSequence([var_a]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call120 = selfRequest(var_prelude, "collections", [0]);
    var call119 = request(call120, "set", [0, 1], var_T);
    var call117 = request(call119, "withAll(1)", [1], array118);
    return call117;
  };    // end of method set(_)
  this.methods["set(1)"] = func116;
  func116.methodName = "set(1)";
  func116.paramCounts = [1];
  func116.paramNames = ["a"];
  func116.typeParamNames = ["T"];
  func116.definitionLine = 97;
  func116.definitionModule = "beginningStudent";
  var func121 = function(argcv, var_a, var_b, var_T) {    // method set(_,_), line 100
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("set(_,_)", 1, numArgs - 2);
    }
    setLineNumber(101);    // compilenode array
    var array123 = new GraceSequence([var_a, var_b]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call125 = selfRequest(var_prelude, "collections", [0]);
    var call124 = request(call125, "set", [0, 1], var_T);
    var call122 = request(call124, "withAll(1)", [1], array123);
    return call122;
  };    // end of method set(_,_)
  this.methods["set(2)"] = func121;
  func121.methodName = "set(2)";
  func121.paramCounts = [2];
  func121.paramNames = ["a", "b"];
  func121.typeParamNames = ["T"];
  func121.definitionLine = 100;
  func121.definitionModule = "beginningStudent";
  var func126 = function(argcv, var_a, var_b, var_c, var_T) {    // method set(_,_,_), line 103
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 4)) {
        raiseTypeArgError("set(_,_,_)", 1, numArgs - 3);
    }
    setLineNumber(104);    // compilenode array
    var array128 = new GraceSequence([var_a, var_b, var_c]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call130 = selfRequest(var_prelude, "collections", [0]);
    var call129 = request(call130, "set", [0, 1], var_T);
    var call127 = request(call129, "withAll(1)", [1], array128);
    return call127;
  };    // end of method set(_,_,_)
  this.methods["set(3)"] = func126;
  func126.methodName = "set(3)";
  func126.paramCounts = [3];
  func126.paramNames = ["a", "b", "c"];
  func126.typeParamNames = ["T"];
  func126.definitionLine = 103;
  func126.definitionModule = "beginningStudent";
  var func131 = function(argcv, var_a, var_b, var_c, var_d, var_T) {    // method set(_,_,_,_), line 106
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 5)) {
        raiseTypeArgError("set(_,_,_,_)", 1, numArgs - 4);
    }
    setLineNumber(107);    // compilenode array
    var array133 = new GraceSequence([var_a, var_b, var_c, var_d]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call135 = selfRequest(var_prelude, "collections", [0]);
    var call134 = request(call135, "set", [0, 1], var_T);
    var call132 = request(call134, "withAll(1)", [1], array133);
    return call132;
  };    // end of method set(_,_,_,_)
  this.methods["set(4)"] = func131;
  func131.methodName = "set(4)";
  func131.paramCounts = [4];
  func131.paramNames = ["a", "b", "c", "d"];
  func131.typeParamNames = ["T"];
  func131.definitionLine = 106;
  func131.definitionModule = "beginningStudent";
  var func136 = function(argcv, var_K, var_T) {    // method dictionary, line 110
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    setLineNumber(111);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call139 = selfRequest(var_prelude, "collections", [0]);
    var call138 = request(call139, "dictionary", [0, 2], var_K, var_T);
    var call137 = request(call138, "empty", [0]);
    return call137;
  };    // end of method dictionary
  this.methods["dictionary"] = func136;
  func136.methodName = "dictionary";
  func136.paramCounts = [0];
  func136.paramNames = [];
  func136.typeParamNames = ["K", "T"];
  func136.definitionLine = 110;
  func136.definitionModule = "beginningStudent";
  var func140 = function(argcv, var_a, var_K, var_T) {    // method dictionary(_), line 113
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 3)) {
        raiseTypeArgError("dictionary(_)", 2, numArgs - 1);
    }
    setLineNumber(114);    // compilenode array
    var array142 = new GraceSequence([var_a]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call144 = selfRequest(var_prelude, "collections", [0]);
    var call143 = request(call144, "dictionary", [0, 2], var_K, var_T);
    var call141 = request(call143, "withAll(1)", [1], array142);
    return call141;
  };    // end of method dictionary(_)
  this.methods["dictionary(1)"] = func140;
  func140.methodName = "dictionary(1)";
  func140.paramCounts = [1];
  func140.paramNames = ["a"];
  func140.typeParamNames = ["K", "T"];
  func140.definitionLine = 113;
  func140.definitionModule = "beginningStudent";
  var func145 = function(argcv, var_a, var_b, var_K, var_T) {    // method dictionary(_,_), line 116
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 4)) {
        raiseTypeArgError("dictionary(_,_)", 2, numArgs - 2);
    }
    setLineNumber(117);    // compilenode array
    var array147 = new GraceSequence([var_a, var_b]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call149 = selfRequest(var_prelude, "collections", [0]);
    var call148 = request(call149, "dictionary", [0, 2], var_K, var_T);
    var call146 = request(call148, "withAll(1)", [1], array147);
    return call146;
  };    // end of method dictionary(_,_)
  this.methods["dictionary(2)"] = func145;
  func145.methodName = "dictionary(2)";
  func145.paramCounts = [2];
  func145.paramNames = ["a", "b"];
  func145.typeParamNames = ["K", "T"];
  func145.definitionLine = 116;
  func145.definitionModule = "beginningStudent";
  var func150 = function(argcv, var_a, var_b, var_c, var_K, var_T) {    // method dictionary(_,_,_), line 119
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 5)) {
        raiseTypeArgError("dictionary(_,_,_)", 2, numArgs - 3);
    }
    setLineNumber(120);    // compilenode array
    var array152 = new GraceSequence([var_a, var_b, var_c]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call154 = selfRequest(var_prelude, "collections", [0]);
    var call153 = request(call154, "dictionary", [0, 2], var_K, var_T);
    var call151 = request(call153, "withAll(1)", [1], array152);
    return call151;
  };    // end of method dictionary(_,_,_)
  this.methods["dictionary(3)"] = func150;
  func150.methodName = "dictionary(3)";
  func150.paramCounts = [3];
  func150.paramNames = ["a", "b", "c"];
  func150.typeParamNames = ["K", "T"];
  func150.definitionLine = 119;
  func150.definitionModule = "beginningStudent";
  var func155 = function(argcv, var_a, var_b, var_c, var_d, var_K, var_T) {    // method dictionary(_,_,_,_), line 122
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 6)) {
        raiseTypeArgError("dictionary(_,_,_,_)", 2, numArgs - 4);
    }
    setLineNumber(123);    // compilenode array
    var array157 = new GraceSequence([var_a, var_b, var_c, var_d]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call159 = selfRequest(var_prelude, "collections", [0]);
    var call158 = request(call159, "dictionary", [0, 2], var_K, var_T);
    var call156 = request(call158, "withAll(1)", [1], array157);
    return call156;
  };    // end of method dictionary(_,_,_,_)
  this.methods["dictionary(4)"] = func155;
  func155.methodName = "dictionary(4)";
  func155.paramCounts = [4];
  func155.paramNames = ["a", "b", "c", "d"];
  func155.typeParamNames = ["K", "T"];
  func155.definitionLine = 122;
  func155.definitionModule = "beginningStudent";
  var func160 = function(argcv, var_numericName, var_soughtName) {    // method isName(_)requesting(_), line 143
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("isName(_)requesting(_)", 0, numArgs - 2);
    }
    var if161 = GraceDone;
    setLineNumber(144);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call163 = request(var_numericName, "startsWith(1)", [1], var_soughtName);
    var call162 = request(call163, "not", [0]);
    if (Grace_isTrue(call162)) {
      return GraceFalse;
    }
    setLineNumber(145);    // compilenode member
    // call case 6: other requests
    var call164 = request(var_soughtName, "size", [0]);
    var sum165 = request(call164, "+(1)", [1], new GraceNum(1));
    var var_ix = sum165;
    var if166 = GraceDone;
    setLineNumber(146);    // compilenode call
    // call case 6: other requests
    var call167 = request(var_numericName, "at(1)", [1], var_ix);
    var string168 = new GraceString("(");
    var opresult169 = request(call167, "\u2260(1)", [1], string168);
    if (Grace_isTrue(opresult169)) {
      return GraceFalse;
    }
    setLineNumber(147);    // compilenode block
    var block171 = new GraceBlock(this, 147, 0);
    block171.guard = jsTrue;
    block171.real = function block171() {
      setLineNumber(148);    // compilenode op
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      var sum172 = request(var_ix, "+(1)", [1], new GraceNum(1));
      var_ix = sum172;
      setLineNumber(149);    // compilenode member
      // call case 6: other requests
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      // call case 6: other requests
      var call174 = request(var_numericName, "at(1)", [1], var_ix);
      var call173 = request(call174, "startsWithDigit", [0]);
      return call173;
    };
    let applyMeth171 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth171.methodName = "apply";
    applyMeth171.paramCounts = [0];
    applyMeth171.paramNames = [];
    applyMeth171.definitionLine = 147;
    applyMeth171.definitionModule = "beginningStudent";
    block171.methods["apply"] = applyMeth171;
    setLineNumber(150);    // compilenode block
    var block175 = new GraceBlock(this, 150, 0);
    block175.guard = jsTrue;
    block175.real = function block175() {
      setLineNumber(150);    // compileBlock
      return GraceDone;
    };
    let applyMeth175 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth175.methodName = "apply";
    applyMeth175.paramCounts = [0];
    applyMeth175.paramNames = [];
    applyMeth175.definitionLine = 150;
    applyMeth175.definitionModule = "beginningStudent";
    block175.methods["apply"] = applyMeth175;
    // call case 2: outer request
    var call170 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block171, block175);
    setLineNumber(151);    // compilenode member
    // call case 6: other requests
    var call176 = request(var_numericName, "size", [0]);
    var opresult177 = request(var_ix, "==(1)", [1], call176);
    return opresult177;
  };    // end of method isName(_)requesting(_)
  func160.confidential = true;
  this.methods["isName(1)requesting(1)"] = func160;
  func160.methodName = "isName(1)requesting(1)";
  func160.paramCounts = [1, 1];
  func160.paramNames = ["numericName", "soughtName"];
  func160.definitionLine = 143;
  func160.definitionModule = "beginningStudent";
  initFun5.call(this);
  setLineNumber(16);    // compilenode string
  var string179 = new GraceString("DialectError");
  // call case 6: other requests
  // call case 2: outer request
  var call180 = selfRequest(var_prelude, "Exception", [0]);
  var call178 = request(call180, "refine(1)", [1], string179);
  var var_DialectError = call178;
  var reader181_DialectError = function() {  // reader method DialectError
      if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
      return var_DialectError;
  };
  reader181_DialectError.isDef = true;
  reader181_DialectError.confidential = true;
  this.methods["DialectError"] = reader181_DialectError;
  setLineNumber(17);    // compilenode member
  // call case 2: outer request
  var call182 = selfRequest(var_prelude, "BoundsError", [0]);
  var var_BoundsError = call182;
  var reader183_BoundsError = function() {  // reader method BoundsError
      if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
      return var_BoundsError;
  };
  reader183_BoundsError.isDef = true;
  reader183_BoundsError.confidential = true;
  this.methods["BoundsError"] = reader183_BoundsError;
  setLineNumber(18);    // compilenode member
  // call case 2: outer request
  var call184 = selfRequest(var_prelude, "IteratorExhausted", [0]);
  var var_IteratorExhausted = call184;
  var reader185_IteratorExhausted = function() {  // reader method IteratorExhausted
      if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
      return var_IteratorExhausted;
  };
  reader185_IteratorExhausted.isDef = true;
  reader185_IteratorExhausted.confidential = true;
  this.methods["IteratorExhausted"] = reader185_IteratorExhausted;
  setLineNumber(19);    // compilenode member
  // call case 2: outer request
  var call186 = selfRequest(var_prelude, "binding", [0]);
  var var_binding = call186;
  var reader187_binding = function() {  // reader method binding
      if (var_binding === undefined) raiseUninitializedVariable("binding");
      return var_binding;
  };
  reader187_binding.isDef = true;
  reader187_binding.confidential = true;
  this.methods["binding"] = reader187_binding;
  setLineNumber(20);    // compilenode member
  // call case 2: outer request
  var call188 = selfRequest(var_prelude, "Function2", [0]);
  var var_Function2 = call188;
  var reader189_Function2 = function() {  // reader method Function2
      if (var_Function2 === undefined) raiseUninitializedVariable("Function2");
      return var_Function2;
  };
  reader189_Function2.isDef = true;
  reader189_Function2.confidential = true;
  this.methods["Function2"] = reader189_Function2;
  setLineNumber(126);    // compilenode call
  // call case 6: other requests
  var call190 = request(var_mirror, "reflect(1)", [1], this);
  var var_selfImage = call190;
  var reader191_selfImage = function() {  // reader method selfImage
      if (var_selfImage === undefined) raiseUninitializedVariable("selfImage");
      return var_selfImage;
  };
  reader191_selfImage.isDef = true;
  reader191_selfImage.confidential = true;
  this.methods["selfImage"] = reader191_selfImage;
  setLineNumber(128);    // compilenode block
  var block193 = new GraceBlock(this, 128, 3);
  block193.guard = jsTrue;
  block193.real = function block193(var_name, var_args, var_receiver) {
    var if194 = GraceDone;
    setLineNumber(129);    // compilenode string
    var string196 = new GraceString("list");
    // call case 2: outer request
    var call195 = selfRequest(importedModules["beginningStudent"], "isName(1)requesting(1)", [1, 1], var_name, string196);
    if (Grace_isTrue(call195)) {
      setLineNumber(130);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call199 = selfRequest(var_prelude, "collections", [0]);
      var call198 = request(call199, "list", [0]);
      var call197 = request(call198, "withAll(1)", [1], var_args);
      if194 = call197;
    } else {
      var if200 = GraceDone;
      setLineNumber(131);    // compilenode string
      var string202 = new GraceString("sequence");
      // call case 2: outer request
      var call201 = selfRequest(importedModules["beginningStudent"], "isName(1)requesting(1)", [1, 1], var_name, string202);
      if (Grace_isTrue(call201)) {
        setLineNumber(132);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        // call case 2: outer request
        var call205 = selfRequest(var_prelude, "collections", [0]);
        var call204 = request(call205, "sequence", [0]);
        var call203 = request(call204, "withAll(1)", [1], var_args);
        if200 = call203;
      } else {
        var if206 = GraceDone;
        setLineNumber(133);    // compilenode string
        var string208 = new GraceString("set");
        // call case 2: outer request
        var call207 = selfRequest(importedModules["beginningStudent"], "isName(1)requesting(1)", [1, 1], var_name, string208);
        if (Grace_isTrue(call207)) {
          setLineNumber(134);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          // call case 2: outer request
          var call211 = selfRequest(var_prelude, "collections", [0]);
          var call210 = request(call211, "set", [0]);
          var call209 = request(call210, "withAll(1)", [1], var_args);
          if206 = call209;
        } else {
          var if212 = GraceDone;
          setLineNumber(135);    // compilenode string
          var string214 = new GraceString("dictionary");
          // call case 2: outer request
          var call213 = selfRequest(importedModules["beginningStudent"], "isName(1)requesting(1)", [1, 1], var_name, string214);
          if (Grace_isTrue(call213)) {
            setLineNumber(136);    // compilenode call
            // call case 6: other requests
            // call case 6: other requests
            // call case 2: outer request
            var call217 = selfRequest(var_prelude, "collections", [0]);
            var call216 = request(call217, "dictionary", [0]);
            var call215 = request(call216, "withAll(1)", [1], var_args);
            if212 = call215;
          } else {
            setLineNumber(138);    // compilenode call
            // call case 6: other requests
            if (var_tc === undefined) raiseUninitializedVariable("tc");
            var call218 = request(var_tc, "canonical(1)", [1], var_name);
            var var_cName = call218;
            setLineNumber(139);    // compilenode string
            var string220 = new GraceString("no method ");
            if (var_cName === undefined) raiseUninitializedVariable("cName");
            var opresult221 = request(string220, "++(1)", [1], var_cName);
            var string222 = new GraceString(" on ");
            var opresult223 = request(opresult221, "++(1)", [1], string222);
            var opresult224 = request(opresult223, "++(1)", [1], var_receiver);
            var string225 = new GraceString(".");
            var opresult226 = request(opresult224, "++(1)", [1], string225);
            // call case 6: other requests
            // call case 2: outer request
            var call227 = selfRequest(var_prelude, "NoSuchMethod", [0]);
            var call219 = request(call227, "raise(1)", [1], opresult226);
            if212 = call219;
          }
          if206 = if212;
        }
        if200 = if206;
      }
      if194 = if200;
    }
    return if194;
  };
  let applyMeth193 = function apply_3 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth193.methodName = "apply(3)";
  applyMeth193.paramCounts = [3];
  applyMeth193.paramNames = ["name", "args", "receiver"];
  applyMeth193.definitionLine = 128;
  applyMeth193.definitionModule = "beginningStudent";
  block193.methods["apply(3)"] = applyMeth193;
  let matchesMeth193 = function matches_3 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth193.methodName = "matches(3)";
  matchesMeth193.paramCounts = [3];
  matchesMeth193.paramNames = ["name", "args", "receiver"];
  matchesMeth193.definitionLine = 128;
  matchesMeth193.definitionModule = "beginningStudent";
  block193.methods["matches(3)"] = matchesMeth193;
  // call case 6: other requests
  if (var_selfImage === undefined) raiseUninitializedVariable("selfImage");
  var call192 = request(var_selfImage, "whenNoMethodDo(1)", [1], block193);
  setLineNumber(154);    // compilenode object
  var obj228_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_beginningStudent_154");
    this.outer_beginningStudent_154 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(155);    // reuse call
    var initFun229 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
    var func230 = function(argcv) {    // method asString, line 156
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(157);    // compilenode string
      var string231 = new GraceString("the beginningStudent visitor");
      return string231;
    };    // end of method asString
    this.methods["asString"] = func230;
    func230.methodName = "asString";
    func230.paramCounts = [0];
    func230.paramNames = [];
    func230.definitionLine = 156;
    func230.definitionModule = "beginningStudent";
    var func232 = function(argcv, var_v) {    // method visitArray(_), line 160
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitArray(_)", 0, numArgs - 1);
      }
      setLineNumber(161);    // compilenode string
      var string234 = new GraceString("square brackets are not used in this dialect; ");
      setLineNumber(162);    // compilenode string
      var string235 = new GraceString("for a list, use list(_, _, ... )");
      var opresult236 = request(string234, "++(1)", [1], string235);
      // call case 6: other requests
      if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
      var call233 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult236, var_v);
      setLineNumber(163);    // typecheck
      assertTypeOrMsg(GraceFalse, var_Boolean, "result of method visitArray(_)", "Boolean");
      return GraceFalse;
    };    // end of method visitArray(_)
    this.methods["visitArray(1)"] = func232;
    func232.methodName = "visitArray(1)";
    func232.paramCounts = [1];
    func232.paramNames = ["v"];
    func232.definitionLine = 160;
    func232.definitionModule = "beginningStudent";
    var func237 = function(argcv, var_v) {    // method visitVarDec(_), line 165
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitVarDec(_)", 0, numArgs - 1);
      }
      setLineNumber(166);    // compilenode member
      // call case 6: other requests
      var call238 = request(var_v, "nameString", [0]);
      var var_name = call238;
      var if239 = GraceDone;
      setLineNumber(167);    // compilenode member
      // call case 6: other requests
      var call240 = request(var_v, "dtype", [0]);
      var opresult241 = request(GraceFalse, "==(1)", [1], call240);
      if (Grace_isTrue(opresult241)) {
        setLineNumber(168);    // compilenode string
        var string243 = new GraceString("no type given to var '");
        // call case 6: other requests
        var call244 = request(var_v, "nameString", [0]);
        var opresult245 = request(string243, "++(1)", [1], call244);
        var string246 = new GraceString("'");
        var opresult247 = request(opresult245, "++(1)", [1], string246);
        setLineNumber(169);    // compilenode member
        // call case 6: other requests
        var call248 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call242 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult247, call248);
        if239 = call242;
      }
      var if249 = GraceDone;
      setLineNumber(171);    // compilenode string
      var string251 = new GraceString("Lu");
      // call case 6: other requests
      if (var_unicode === undefined) raiseUninitializedVariable("unicode");
      var call250 = request(var_unicode, "inCategory(2)", [2], var_name, string251);
      if (Grace_isTrue(call250)) {
        setLineNumber(172);    // compilenode string
        var string253 = new GraceString("by convention, variables start ");
        setLineNumber(173);    // compilenode string
        var string254 = new GraceString("with a lower-case letter");
        var opresult255 = request(string253, "++(1)", [1], string254);
        // call case 6: other requests
        var call256 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call252 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult255, call256);
        if249 = call252;
      }
      setLineNumber(175);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitVarDec(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitVarDec(_)
    this.methods["visitVarDec(1)"] = func237;
    func237.methodName = "visitVarDec(1)";
    func237.paramCounts = [1];
    func237.paramNames = ["v"];
    func237.definitionLine = 165;
    func237.definitionModule = "beginningStudent";
    var func257 = function(argcv, var_v) {    // method visitDefDec(_), line 177
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitDefDec(_)", 0, numArgs - 1);
      }
      setLineNumber(178);    // compilenode member
      // call case 6: other requests
      var call258 = request(var_v, "nameString", [0]);
      var var_name = call258;
      var if259 = GraceDone;
      setLineNumber(179);    // compilenode string
      var string261 = new GraceString("Lu");
      // call case 6: other requests
      if (var_unicode === undefined) raiseUninitializedVariable("unicode");
      var call260 = request(var_unicode, "inCategory(2)", [2], var_name, string261);
      if (Grace_isTrue(call260)) {
        setLineNumber(180);    // compilenode string
        var string263 = new GraceString("by convention, constants start ");
        setLineNumber(181);    // compilenode string
        var string264 = new GraceString("with a lower-case letter");
        var opresult265 = request(string263, "++(1)", [1], string264);
        // call case 6: other requests
        var call266 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call262 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult265, call266);
        if259 = call262;
      }
      setLineNumber(183);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitDefDec(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitDefDec(_)
    this.methods["visitDefDec(1)"] = func257;
    func257.methodName = "visitDefDec(1)";
    func257.paramCounts = [1];
    func257.paramNames = ["v"];
    func257.definitionLine = 177;
    func257.definitionModule = "beginningStudent";
    var func267 = function(argcv, var_v) {    // method visitMethod(_), line 185
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitMethod(_)", 0, numArgs - 1);
      }
      var if268 = GraceDone;
      setLineNumber(186);    // compilenode member
      // call case 6: other requests
      var call269 = request(var_v, "comments", [0]);
      var opresult270 = request(GraceFalse, "==(1)", [1], call269);
      if (Grace_isTrue(opresult270)) {
        var if271 = GraceDone;
        setLineNumber(187);    // compilenode member
        // call case 6: other requests
        var call272 = request(var_v, "dtype", [0]);
        var opresult273 = request(GraceFalse, "==(1)", [1], call272);
        if (Grace_isTrue(opresult273)) {
          setLineNumber(188);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call276 = request(var_v, "signature", [0]);
          var call275 = request(call276, "last", [0]);
          var call274 = request(call275, "end", [0]);
          if271 = call274;
        } else {
          setLineNumber(190);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call278 = request(var_v, "dtype", [0]);
          var call277 = request(call278, "end", [0]);
          if271 = call277;
        }
        var var_headerEnd = if271;
        setLineNumber(192);    // compilenode member
        // call case 6: other requests
        var call280 = request(var_v, "start", [0]);
        if (var_headerEnd === undefined) raiseUninitializedVariable("headerEnd");
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call279 = request(var_ast, "start(1)end(1)", [1, 1], call280, var_headerEnd);
        var var_loc = call279;
        setLineNumber(193);    // compilenode string
        var string282 = new GraceString("purpose statement missing from method '");
        // call case 6: other requests
        var call283 = request(var_v, "canonicalName", [0]);
        var opresult284 = request(string282, "++(1)", [1], call283);
        var string285 = new GraceString("'");
        var opresult286 = request(opresult284, "++(1)", [1], string285);
        if (var_loc === undefined) raiseUninitializedVariable("loc");
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call281 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult286, var_loc);
        if268 = call281;
      }
      setLineNumber(196);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call288 = request(var_v, "comments", [0]);
      var call287 = request(call288, "value", [0]);
      var var_commentString = call287;
      setLineNumber(197);    // compilenode member
      // call case 6: other requests
      var call289 = request(var_commentString, "asLower", [0]);
      var var_lowerCommentString = call289;
      setLineNumber(198);    // compilenode block
      var block291 = new GraceBlock(this, 198, 1);
      block291.guard = jsTrue;
      block291.real = function block291(var_p) {
        var if292 = GraceDone;
        setLineNumber(199);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call294 = request(var_p, "wildcard", [0]);
        var call293 = request(call294, "not", [0]);
        if (Grace_isTrue(call293)) {
          setLineNumber(200);    // compilenode member
          // call case 6: other requests
          var call295 = request(var_p, "nameString", [0]);
          var var_pn = call295;
          var if296 = GraceDone;
          setLineNumber(201);    // compilenode member
          // call case 6: other requests
          var call297 = request(var_p, "dtype", [0]);
          var opresult298 = request(GraceFalse, "==(1)", [1], call297);
          if (Grace_isTrue(opresult298)) {
            setLineNumber(202);    // compilenode string
            var string300 = new GraceString("no type given to parameter '");
            if (var_pn === undefined) raiseUninitializedVariable("pn");
            var opresult301 = request(string300, "++(1)", [1], var_pn);
            var string302 = new GraceString("'");
            var opresult303 = request(opresult301, "++(1)", [1], string302);
            // call case 6: other requests
            if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
            var call299 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult303, var_p);
            if296 = call299;
          }
          var if304 = GraceDone;
          setLineNumber(205);    // compilenode call
          if (var_pn === undefined) raiseUninitializedVariable("pn");
          var string306 = new GraceString("Lu");
          // call case 6: other requests
          if (var_unicode === undefined) raiseUninitializedVariable("unicode");
          var call305 = request(var_unicode, "inCategory(2)", [2], var_pn, string306);
          if (Grace_isTrue(call305)) {
            setLineNumber(206);    // compilenode string
            var string308 = new GraceString("by convention, parameters start ");
            setLineNumber(207);    // compilenode string
            var string309 = new GraceString("with a lower-case letter");
            var opresult310 = request(string308, "++(1)", [1], string309);
            // call case 6: other requests
            if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
            var call307 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult310, var_p);
            if304 = call307;
          }
          var if311 = GraceDone;
          setLineNumber(209);    // compilenode member
          // call case 6: other requests
          if (var_pn === undefined) raiseUninitializedVariable("pn");
          // call case 6: other requests
          if (var_commentString === undefined) raiseUninitializedVariable("commentString");
          var call313 = request(var_commentString, "contains(1)", [1], var_pn);
          var call312 = request(call313, "not", [0]);
          if (Grace_isTrue(call312)) {
            setLineNumber(210);    // compilenode string
            var string315 = new GraceString("purpose statement does not describe parameter '");
            if (var_pn === undefined) raiseUninitializedVariable("pn");
            var opresult316 = request(string315, "++(1)", [1], var_pn);
            var string317 = new GraceString("'");
            var opresult318 = request(opresult316, "++(1)", [1], string317);
            setLineNumber(211);    // compilenode member
            // call case 6: other requests
            var call319 = request(var_v, "comments", [0]);
            // call case 6: other requests
            if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
            var call314 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult318, call319);
            if311 = call314;
          }
          if292 = if311;
        }
        return if292;
      };
      let applyMeth291 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth291.methodName = "apply(1)";
      applyMeth291.paramCounts = [1];
      applyMeth291.paramNames = ["p"];
      applyMeth291.definitionLine = 198;
      applyMeth291.definitionModule = "beginningStudent";
      block291.methods["apply(1)"] = applyMeth291;
      let matchesMeth291 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth291.methodName = "matches(1)";
      matchesMeth291.paramCounts = [1];
      matchesMeth291.paramNames = ["p"];
      matchesMeth291.definitionLine = 198;
      matchesMeth291.definitionModule = "beginningStudent";
      block291.methods["matches(1)"] = matchesMeth291;
      // call case 6: other requests
      var call290 = request(var_v, "parametersDo(1)", [1], block291);
      setLineNumber(215);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call322 = request(var_v, "signature", [0]);
      var call321 = request(call322, "first", [0]);
      var call320 = request(call321, "name", [0]);
      var var_mn1 = call320;
      var if323 = GraceDone;
      setLineNumber(216);    // compilenode string
      var string325 = new GraceString("Lu");
      // call case 6: other requests
      if (var_unicode === undefined) raiseUninitializedVariable("unicode");
      var call324 = request(var_unicode, "inCategory(2)", [2], var_mn1, string325);
      if (Grace_isTrue(call324)) {
        setLineNumber(217);    // compilenode string
        var string327 = new GraceString("by convention, method names start ");
        setLineNumber(218);    // compilenode string
        var string328 = new GraceString("with a lower-case letter");
        var opresult329 = request(string327, "++(1)", [1], string328);
        // call case 6: other requests
        // call case 6: other requests
        var call331 = request(var_v, "signature", [0]);
        var call330 = request(call331, "first", [0]);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call326 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult329, call330);
        if323 = call326;
      }
      var if332 = GraceDone;
      setLineNumber(220);    // compilenode member
      // call case 6: other requests
      var call333 = request(var_v, "isClass", [0]);
      if (Grace_isTrue(call333)) {
        assertTypeOrMsg(GraceTrue, var_Boolean, "return value", "Boolean");
        return GraceTrue;
      }
      var if334 = GraceDone;
      setLineNumber(221);    // compilenode member
      // call case 6: other requests
      var call335 = request(var_v, "dtype", [0]);
      var opresult336 = request(GraceFalse, "==(1)", [1], call335);
      if (Grace_isTrue(opresult336)) {
        setLineNumber(222);    // compilenode string
        var string338 = new GraceString("no return type given to method '");
        // call case 6: other requests
        var call339 = request(var_v, "canonicalName", [0]);
        var opresult340 = request(string338, "++(1)", [1], call339);
        var string341 = new GraceString("'");
        var opresult342 = request(opresult340, "++(1)", [1], string341);
        setLineNumber(223);    // compilenode member
        // call case 6: other requests
        var call344 = request(var_v, "start", [0]);
        setLineNumber(224);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call347 = request(var_v, "signature", [0]);
        var call346 = request(call347, "last", [0]);
        var call345 = request(call346, "end", [0]);
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call343 = request(var_ast, "start(1)end(1)", [1, 1], call344, call345);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call337 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult342, call343);
        if334 = call337;
      } else {
        var if348 = GraceDone;
        setLineNumber(226);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call350 = request(var_v, "dtype", [0]);
        var call349 = request(call350, "nameString", [0]);
        var string351 = new GraceString("Done");
        var opresult352 = request(call349, "\u2260(1)", [1], string351);
        var block353 = new GraceBlock(this, 226, 0);
        block353.guard = jsTrue;
        block353.real = function block353() {
          setLineNumber(227);    // compilenode member
          // call case 6: other requests
          var string356 = new GraceString("returns");
          // call case 6: other requests
          if (var_lowerCommentString === undefined) raiseUninitializedVariable("lowerCommentString");
          var call355 = request(var_lowerCommentString, "contains(1)", [1], string356);
          var string358 = new GraceString("answers");
          // call case 6: other requests
          if (var_lowerCommentString === undefined) raiseUninitializedVariable("lowerCommentString");
          var call357 = request(var_lowerCommentString, "contains(1)", [1], string358);
          var opresult359 = request(call355, "||(1)", [1], call357);
          var call354 = request(opresult359, "not", [0]);
          return call354;
        };
        let applyMeth353 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth353.methodName = "apply";
        applyMeth353.paramCounts = [0];
        applyMeth353.paramNames = [];
        applyMeth353.definitionLine = 226;
        applyMeth353.definitionModule = "beginningStudent";
        block353.methods["apply"] = applyMeth353;
        var opresult360 = request(opresult352, "&&(1)", [1], block353);
        if (Grace_isTrue(opresult360)) {
          setLineNumber(230);    // compilenode string
          var string362 = new GraceString("purpose statement of method '");
          // call case 6: other requests
          var call363 = request(var_v, "canonicalName", [0]);
          var opresult364 = request(string362, "++(1)", [1], call363);
          var string365 = new GraceString("");
          var opresult366 = request(opresult364, "++(1)", [1], string365);
          setLineNumber(231);    // compilenode string
          var string367 = new GraceString("does not describe what it returns");
          var opresult368 = request(opresult366, "++(1)", [1], string367);
          // call case 6: other requests
          var call369 = request(var_v, "comments", [0]);
          // call case 6: other requests
          if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
          var call361 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult368, call369);
          if348 = call361;
        }
        if334 = if348;
      }
      setLineNumber(233);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitMethod(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitMethod(_)
    this.methods["visitMethod(1)"] = func267;
    func267.methodName = "visitMethod(1)";
    func267.paramCounts = [1];
    func267.paramNames = ["v"];
    func267.definitionLine = 185;
    func267.definitionModule = "beginningStudent";
    var func370 = function(argcv, var_v) {    // method visitBlock(_), line 235
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitBlock(_)", 0, numArgs - 1);
      }
      setLineNumber(236);    // compilenode member
      // call case 6: other requests
      var call372 = request(var_v, "params", [0]);
      var block373 = new GraceBlock(this, 236, 1);
      block373.guard = jsTrue;
      block373.real = function block373(var_p) {
        var if374 = GraceDone;
        setLineNumber(237);    // compilenode member
        // call case 6: other requests
        var call375 = request(var_p, "isIdentifier", [0]);
        var block376 = new GraceBlock(this, 237, 0);
        block376.guard = jsTrue;
        block376.real = function block376() {
          setLineNumber(237);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call378 = request(var_p, "wildcard", [0]);
          var call377 = request(call378, "not", [0]);
          // call case 6: other requests
          var call379 = request(var_p, "dtype", [0]);
          var opresult380 = request(GraceFalse, "==(1)", [1], call379);
          var opresult381 = request(call377, "&&(1)", [1], opresult380);
          return opresult381;
        };
        let applyMeth376 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth376.methodName = "apply";
        applyMeth376.paramCounts = [0];
        applyMeth376.paramNames = [];
        applyMeth376.definitionLine = 237;
        applyMeth376.definitionModule = "beginningStudent";
        block376.methods["apply"] = applyMeth376;
        var opresult382 = request(call375, "&&(1)", [1], block376);
        if (Grace_isTrue(opresult382)) {
          setLineNumber(238);    // compilenode string
          var string384 = new GraceString("no type given to block parameter '");
          // call case 6: other requests
          var call385 = request(var_p, "nameString", [0]);
          var opresult386 = request(string384, "++(1)", [1], call385);
          var string387 = new GraceString("'");
          var opresult388 = request(opresult386, "++(1)", [1], string387);
          // call case 6: other requests
          if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
          var call383 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult388, var_p);
          if374 = call383;
        }
        var if389 = GraceDone;
        setLineNumber(241);    // compilenode member
        // call case 6: other requests
        var call391 = request(var_p, "nameString", [0]);
        var string392 = new GraceString("Lu");
        // call case 6: other requests
        if (var_unicode === undefined) raiseUninitializedVariable("unicode");
        var call390 = request(var_unicode, "inCategory(2)", [2], call391, string392);
        if (Grace_isTrue(call390)) {
          setLineNumber(242);    // compilenode string
          var string394 = new GraceString("by convention, parameters start ");
          setLineNumber(243);    // compilenode string
          var string395 = new GraceString("with a lower-case letter");
          var opresult396 = request(string394, "++(1)", [1], string395);
          // call case 6: other requests
          if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
          var call393 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult396, var_p);
          if389 = call393;
        }
        return if389;
      };
      let applyMeth373 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth373.methodName = "apply(1)";
      applyMeth373.paramCounts = [1];
      applyMeth373.paramNames = ["p"];
      applyMeth373.definitionLine = 236;
      applyMeth373.definitionModule = "beginningStudent";
      block373.methods["apply(1)"] = applyMeth373;
      let matchesMeth373 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth373.methodName = "matches(1)";
      matchesMeth373.paramCounts = [1];
      matchesMeth373.paramNames = ["p"];
      matchesMeth373.definitionLine = 236;
      matchesMeth373.definitionModule = "beginningStudent";
      block373.methods["matches(1)"] = matchesMeth373;
      // call case 2: outer request
      var call371 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call372, block373);
      setLineNumber(246);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitBlock(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitBlock(_)
    this.methods["visitBlock(1)"] = func370;
    func370.methodName = "visitBlock(1)";
    func370.paramCounts = [1];
    func370.paramNames = ["v"];
    func370.definitionLine = 235;
    func370.definitionModule = "beginningStudent";
    var func397 = function(argcv, var_v) {    // method visitTypeDec(_), line 248
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitTypeDec(_)", 0, numArgs - 1);
      }
      setLineNumber(249);    // compilenode member
      // call case 6: other requests
      var call398 = request(var_v, "nameString", [0]);
      var var_ns = call398;
      var if399 = GraceDone;
      setLineNumber(250);    // compilenode member
      // call case 6: other requests
      var string402 = new GraceString("Lu");
      // call case 6: other requests
      if (var_unicode === undefined) raiseUninitializedVariable("unicode");
      var call401 = request(var_unicode, "inCategory(2)", [2], var_ns, string402);
      var call400 = request(call401, "not", [0]);
      if (Grace_isTrue(call400)) {
        setLineNumber(251);    // compilenode string
        var string404 = new GraceString("by convention, type names start ");
        setLineNumber(252);    // compilenode string
        var string405 = new GraceString("with an upper-case letter");
        var opresult406 = request(string404, "++(1)", [1], string405);
        // call case 6: other requests
        var call407 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
        var call403 = request(var_DialectError, "raise(1)with(1)", [1, 1], opresult406, call407);
        if399 = call403;
      }
      setLineNumber(254);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitTypeDec(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitTypeDec(_)
    this.methods["visitTypeDec(1)"] = func397;
    func397.methodName = "visitTypeDec(1)";
    func397.paramCounts = [1];
    func397.paramNames = ["v"];
    func397.definitionLine = 248;
    func397.definitionModule = "beginningStudent";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 154;
        m.definitionModule = "beginningStudent";
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
    var obj228_init = function() {    // init of object on line 154
      initFun229.call(this);
    };
    return obj228_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj228 = emptyGraceObject("bsVisitor", "beginningStudent", 154);
  var obj228_init = obj228_build.call(obj228, null, this, [], []);
  obj228_init.call(obj228);  // end of compileobject
  var var_bsVisitor = obj228;
  var reader408_bsVisitor = function() {  // reader method bsVisitor
      if (var_bsVisitor === undefined) raiseUninitializedVariable("bsVisitor");
      return var_bsVisitor;
  };
  reader408_bsVisitor.isDef = true;
  reader408_bsVisitor.confidential = true;
  this.methods["bsVisitor"] = reader408_bsVisitor;
  setLineNumber(258);    // compilenode object
  var obj409_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_beginningStudent_258");
    this.outer_beginningStudent_258 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func410 = function(argcv, var_moduleObj) {    // method parseChecker(_), line 259
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("parseChecker(_)", 0, numArgs - 1);
      }
      setLineNumber(260);    // compilenode call
      if (var_bsVisitor === undefined) raiseUninitializedVariable("bsVisitor");
      // call case 6: other requests
      var call411 = request(var_moduleObj, "accept(1)", [1], var_bsVisitor);
      return call411;
    };    // end of method parseChecker(_)
    this.methods["parseChecker(1)"] = func410;
    func410.methodName = "parseChecker(1)";
    func410.paramCounts = [1];
    func410.paramNames = ["moduleObj"];
    func410.definitionLine = 259;
    func410.definitionModule = "beginningStudent";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 258;
        m.definitionModule = "beginningStudent";
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
    var obj409_init = function() {    // init of object on line 258
    };
    return obj409_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj409 = emptyGraceObject("thisDialect", "beginningStudent", 258);
  var obj409_init = obj409_build.call(obj409, null, this, [], []);
  obj409_init.call(obj409);  // end of compileobject
  var var_thisDialect = obj409;
  var reader412_thisDialect = function() {  // reader method thisDialect
      if (var_thisDialect === undefined) raiseUninitializedVariable("thisDialect");
      return var_thisDialect;
  };
  reader412_thisDialect.isDef = true;
  this.methods["thisDialect"] = reader412_thisDialect;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_beginningStudent = gracecode_beginningStudent;
if (typeof window !== "undefined")
  window.gracecode_beginningStudent = gracecode_beginningStudent;
gracecode_beginningStudent.imports = ["ast", "minispec", "mirrors", "standardGrace", "typeComparison", "unicode"];
gracecode_beginningStudent.definitionModule = "beginningStudent";
gracecode_beginningStudent.definitionLine = 1;
