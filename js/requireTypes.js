var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["requireTypes"] = "classes:\nconfidential:\n CheckerFailure\n staticVisitor\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n ast\n collectionsPrelude\n fastDict\n identifierKinds\n io\n standardGrace\n sys\n unixFilePath\n util\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/requireTypes.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n thisDialect\n valueOf(1)\npublicMethodTypes:\n thisDialect \u2192 Unknown\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["requireTypes"] = [
    "import \"ast\" as ast",
    "inherit prelude.methods",
    "",
    "def CheckerFailure = prelude.Exception.refine \"CheckerFailure\"",
    "",
    "def staticVisitor = object {",
    "    inherit ast.baseVisitor",
    "    method asString {",
    "        \"the requireTypes visitor\"",
    "    }",
    "",
    "    method visitDefDec(v) -> Boolean is public {",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of def '{v.name.value}'\") with (v.name)",
    "        }",
    "        true",
    "    }",
    "    method visitVarDec(v) -> Boolean is public {",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of var '{v.name.value}'\") with (v.name)",
    "        }",
    "        true",
    "    }",
    "    method visitMethod(v) -> Boolean is public {",
    "        for (v.signature) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no return type given to declaration\"",
    "                ++ \" of method '{v.value.value}'\") with (v.value)",
    "        }",
    "        true",
    "    }",
    "    method visitBlock(v) -> Boolean is public {",
    "        for (v.params) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of block parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "        true",
    "    }",
    "}",
    "",
    "def thisDialect is public = object {",
    "    method parseChecker (moduleObj) {",
    "        moduleObj.accept(staticVisitor)",
    "    }",
    "}" ];
}
function gracecode_requireTypes() {
  importedModules["requireTypes"] = this;
  var module$requireTypes = this;
  this.definitionModule = "requireTypes";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_requireTypes_1");
  this.outer_requireTypes_1 = var_prelude;
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
  func0.definitionModule = "requireTypes";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(2);    // reuse call
  var initFun1 = request(var_prelude, "methods$build(3)", [null], this, [], []);  // compileReuseCall
  initFun1.call(this);
  setLineNumber(4);    // compilenode string
  var string3 = new GraceString("CheckerFailure");
  // call case 6: other requests
  // call case 2: outer request
  var call4 = selfRequest(var_prelude, "Exception", [0]);
  var call2 = request(call4, "refine(1)", [1], string3);
  var var_CheckerFailure = call2;
  var reader5_CheckerFailure = function() {  // reader method CheckerFailure
      if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
      return var_CheckerFailure;
  };
  reader5_CheckerFailure.isDef = true;
  reader5_CheckerFailure.confidential = true;
  this.methods["CheckerFailure"] = reader5_CheckerFailure;
  setLineNumber(6);    // compilenode object
  var obj6_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_requireTypes_6");
    this.outer_requireTypes_6 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(7);    // reuse call
    var initFun7 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
    var func8 = function(argcv) {    // method asString, line 8
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(9);    // compilenode string
      var string9 = new GraceString("the requireTypes visitor");
      return string9;
    };    // end of method asString
    this.methods["asString"] = func8;
    func8.methodName = "asString";
    func8.paramCounts = [0];
    func8.paramNames = [];
    func8.definitionLine = 8;
    func8.definitionModule = "requireTypes";
    var func10 = function(argcv, var_v) {    // method visitDefDec(_), line 12
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitDefDec(_)", 0, numArgs - 1);
      }
      var if11 = GraceDone;
      setLineNumber(13);    // compilenode member
      // call case 6: other requests
      var call12 = request(var_v, "dtype", [0]);
      var opresult13 = request(GraceFalse, "==(1)", [1], call12);
      if (Grace_isTrue(opresult13)) {
        setLineNumber(14);    // compilenode string
        var string15 = new GraceString("no type given to declaration");
        setLineNumber(15);    // compilenode string
        var string16 = new GraceString(" of def '");
        // call case 6: other requests
        // call case 6: other requests
        var call18 = request(var_v, "name", [0]);
        var call17 = request(call18, "value", [0]);
        var opresult19 = request(string16, "++(1)", [1], call17);
        var string20 = new GraceString("'");
        var opresult21 = request(opresult19, "++(1)", [1], string20);
        var opresult22 = request(string15, "++(1)", [1], opresult21);
        // call case 6: other requests
        var call23 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
        var call14 = request(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult22, call23);
        if11 = call14;
      }
      setLineNumber(17);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitDefDec(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitDefDec(_)
    this.methods["visitDefDec(1)"] = func10;
    func10.methodName = "visitDefDec(1)";
    func10.paramCounts = [1];
    func10.paramNames = ["v"];
    func10.definitionLine = 12;
    func10.definitionModule = "requireTypes";
    var func24 = function(argcv, var_v) {    // method visitVarDec(_), line 19
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitVarDec(_)", 0, numArgs - 1);
      }
      var if25 = GraceDone;
      setLineNumber(20);    // compilenode member
      // call case 6: other requests
      var call26 = request(var_v, "dtype", [0]);
      var opresult27 = request(GraceFalse, "==(1)", [1], call26);
      if (Grace_isTrue(opresult27)) {
        setLineNumber(21);    // compilenode string
        var string29 = new GraceString("no type given to declaration");
        setLineNumber(22);    // compilenode string
        var string30 = new GraceString(" of var '");
        // call case 6: other requests
        // call case 6: other requests
        var call32 = request(var_v, "name", [0]);
        var call31 = request(call32, "value", [0]);
        var opresult33 = request(string30, "++(1)", [1], call31);
        var string34 = new GraceString("'");
        var opresult35 = request(opresult33, "++(1)", [1], string34);
        var opresult36 = request(string29, "++(1)", [1], opresult35);
        // call case 6: other requests
        var call37 = request(var_v, "name", [0]);
        // call case 6: other requests
        if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
        var call28 = request(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult36, call37);
        if25 = call28;
      }
      setLineNumber(24);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitVarDec(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitVarDec(_)
    this.methods["visitVarDec(1)"] = func24;
    func24.methodName = "visitVarDec(1)";
    func24.paramCounts = [1];
    func24.paramNames = ["v"];
    func24.definitionLine = 19;
    func24.definitionModule = "requireTypes";
    var func38 = function(argcv, var_v) {    // method visitMethod(_), line 26
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitMethod(_)", 0, numArgs - 1);
      }
      setLineNumber(27);    // compilenode member
      // call case 6: other requests
      var call40 = request(var_v, "signature", [0]);
      var block41 = new GraceBlock(this, 27, 1);
      block41.guard = jsTrue;
      block41.real = function block41(var_p) {
        var if42 = GraceDone;
        setLineNumber(28);    // compilenode member
        // call case 6: other requests
        var call43 = request(var_p, "isIdentifier", [0]);
        var block44 = new GraceBlock(this, 28, 0);
        block44.guard = jsTrue;
        block44.real = function block44() {
          setLineNumber(28);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call46 = request(var_p, "wildcard", [0]);
          var call45 = request(call46, "not", [0]);
          // call case 6: other requests
          var call47 = request(var_p, "dtype", [0]);
          var opresult48 = request(GraceFalse, "==(1)", [1], call47);
          var opresult49 = request(call45, "&&(1)", [1], opresult48);
          return opresult49;
        };
        let applyMeth44 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth44.methodName = "apply";
        applyMeth44.paramCounts = [0];
        applyMeth44.paramNames = [];
        applyMeth44.definitionLine = 28;
        applyMeth44.definitionModule = "requireTypes";
        block44.methods["apply"] = applyMeth44;
        var opresult50 = request(call43, "&&(1)", [1], block44);
        if (Grace_isTrue(opresult50)) {
          setLineNumber(29);    // compilenode string
          var string52 = new GraceString("no type given to declaration");
          setLineNumber(30);    // compilenode string
          var string53 = new GraceString(" of parameter '");
          // call case 6: other requests
          var call54 = request(var_p, "value", [0]);
          var opresult55 = request(string53, "++(1)", [1], call54);
          var string56 = new GraceString("'");
          var opresult57 = request(opresult55, "++(1)", [1], string56);
          var opresult58 = request(string52, "++(1)", [1], opresult57);
          // call case 6: other requests
          if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
          var call51 = request(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult58, var_p);
          if42 = call51;
        }
        return if42;
      };
      let applyMeth41 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth41.methodName = "apply(1)";
      applyMeth41.paramCounts = [1];
      applyMeth41.paramNames = ["p"];
      applyMeth41.definitionLine = 27;
      applyMeth41.definitionModule = "requireTypes";
      block41.methods["apply(1)"] = applyMeth41;
      let matchesMeth41 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth41.methodName = "matches(1)";
      matchesMeth41.paramCounts = [1];
      matchesMeth41.paramNames = ["p"];
      matchesMeth41.definitionLine = 27;
      matchesMeth41.definitionModule = "requireTypes";
      block41.methods["matches(1)"] = matchesMeth41;
      // call case 2: outer request
      var call39 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call40, block41);
      var if59 = GraceDone;
      setLineNumber(33);    // compilenode member
      // call case 6: other requests
      var call60 = request(var_v, "dtype", [0]);
      var opresult61 = request(GraceFalse, "==(1)", [1], call60);
      if (Grace_isTrue(opresult61)) {
        setLineNumber(34);    // compilenode string
        var string63 = new GraceString("no return type given to declaration");
        setLineNumber(35);    // compilenode string
        var string64 = new GraceString(" of method '");
        // call case 6: other requests
        // call case 6: other requests
        var call66 = request(var_v, "value", [0]);
        var call65 = request(call66, "value", [0]);
        var opresult67 = request(string64, "++(1)", [1], call65);
        var string68 = new GraceString("'");
        var opresult69 = request(opresult67, "++(1)", [1], string68);
        var opresult70 = request(string63, "++(1)", [1], opresult69);
        // call case 6: other requests
        var call71 = request(var_v, "value", [0]);
        // call case 6: other requests
        if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
        var call62 = request(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult70, call71);
        if59 = call62;
      }
      setLineNumber(37);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitMethod(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitMethod(_)
    this.methods["visitMethod(1)"] = func38;
    func38.methodName = "visitMethod(1)";
    func38.paramCounts = [1];
    func38.paramNames = ["v"];
    func38.definitionLine = 26;
    func38.definitionModule = "requireTypes";
    var func72 = function(argcv, var_v) {    // method visitBlock(_), line 39
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitBlock(_)", 0, numArgs - 1);
      }
      setLineNumber(40);    // compilenode member
      // call case 6: other requests
      var call74 = request(var_v, "params", [0]);
      var block75 = new GraceBlock(this, 40, 1);
      block75.guard = jsTrue;
      block75.real = function block75(var_p) {
        var if76 = GraceDone;
        setLineNumber(41);    // compilenode member
        // call case 6: other requests
        var call77 = request(var_p, "isIdentifier", [0]);
        var block78 = new GraceBlock(this, 41, 0);
        block78.guard = jsTrue;
        block78.real = function block78() {
          setLineNumber(41);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call80 = request(var_p, "wildcard", [0]);
          var call79 = request(call80, "not", [0]);
          // call case 6: other requests
          var call81 = request(var_p, "dtype", [0]);
          var opresult82 = request(GraceFalse, "==(1)", [1], call81);
          var opresult83 = request(call79, "&&(1)", [1], opresult82);
          return opresult83;
        };
        let applyMeth78 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth78.methodName = "apply";
        applyMeth78.paramCounts = [0];
        applyMeth78.paramNames = [];
        applyMeth78.definitionLine = 41;
        applyMeth78.definitionModule = "requireTypes";
        block78.methods["apply"] = applyMeth78;
        var opresult84 = request(call77, "&&(1)", [1], block78);
        if (Grace_isTrue(opresult84)) {
          setLineNumber(42);    // compilenode string
          var string86 = new GraceString("no type given to declaration");
          setLineNumber(43);    // compilenode string
          var string87 = new GraceString(" of block parameter '");
          // call case 6: other requests
          var call88 = request(var_p, "value", [0]);
          var opresult89 = request(string87, "++(1)", [1], call88);
          var string90 = new GraceString("'");
          var opresult91 = request(opresult89, "++(1)", [1], string90);
          var opresult92 = request(string86, "++(1)", [1], opresult91);
          // call case 6: other requests
          if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
          var call85 = request(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult92, var_p);
          if76 = call85;
        }
        return if76;
      };
      let applyMeth75 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth75.methodName = "apply(1)";
      applyMeth75.paramCounts = [1];
      applyMeth75.paramNames = ["p"];
      applyMeth75.definitionLine = 40;
      applyMeth75.definitionModule = "requireTypes";
      block75.methods["apply(1)"] = applyMeth75;
      let matchesMeth75 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth75.methodName = "matches(1)";
      matchesMeth75.paramCounts = [1];
      matchesMeth75.paramNames = ["p"];
      matchesMeth75.definitionLine = 40;
      matchesMeth75.definitionModule = "requireTypes";
      block75.methods["matches(1)"] = matchesMeth75;
      // call case 2: outer request
      var call73 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call74, block75);
      setLineNumber(46);    // typecheck
      assertTypeOrMsg(GraceTrue, var_Boolean, "result of method visitBlock(_)", "Boolean");
      return GraceTrue;
    };    // end of method visitBlock(_)
    this.methods["visitBlock(1)"] = func72;
    func72.methodName = "visitBlock(1)";
    func72.paramCounts = [1];
    func72.paramNames = ["v"];
    func72.definitionLine = 39;
    func72.definitionModule = "requireTypes";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 6;
        m.definitionModule = "requireTypes";
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
    var obj6_init = function() {    // init of object on line 6
      initFun7.call(this);
    };
    return obj6_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj6 = emptyGraceObject("staticVisitor", "requireTypes", 6);
  var obj6_init = obj6_build.call(obj6, null, this, [], []);
  obj6_init.call(obj6);  // end of compileobject
  var var_staticVisitor = obj6;
  var reader93_staticVisitor = function() {  // reader method staticVisitor
      if (var_staticVisitor === undefined) raiseUninitializedVariable("staticVisitor");
      return var_staticVisitor;
  };
  reader93_staticVisitor.isDef = true;
  reader93_staticVisitor.confidential = true;
  this.methods["staticVisitor"] = reader93_staticVisitor;
  setLineNumber(50);    // compilenode object
  var obj94_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_requireTypes_50");
    this.outer_requireTypes_50 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func95 = function(argcv, var_moduleObj) {    // method parseChecker(_), line 51
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("parseChecker(_)", 0, numArgs - 1);
      }
      setLineNumber(52);    // compilenode call
      if (var_staticVisitor === undefined) raiseUninitializedVariable("staticVisitor");
      // call case 6: other requests
      var call96 = request(var_moduleObj, "accept(1)", [1], var_staticVisitor);
      return call96;
    };    // end of method parseChecker(_)
    this.methods["parseChecker(1)"] = func95;
    func95.methodName = "parseChecker(1)";
    func95.paramCounts = [1];
    func95.paramNames = ["moduleObj"];
    func95.definitionLine = 51;
    func95.definitionModule = "requireTypes";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 50;
        m.definitionModule = "requireTypes";
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
    var obj94_init = function() {    // init of object on line 50
    };
    return obj94_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj94 = emptyGraceObject("thisDialect", "requireTypes", 50);
  var obj94_init = obj94_build.call(obj94, null, this, [], []);
  obj94_init.call(obj94);  // end of compileobject
  var var_thisDialect = obj94;
  var reader97_thisDialect = function() {  // reader method thisDialect
      if (var_thisDialect === undefined) raiseUninitializedVariable("thisDialect");
      return var_thisDialect;
  };
  reader97_thisDialect.isDef = true;
  this.methods["thisDialect"] = reader97_thisDialect;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_requireTypes = gracecode_requireTypes;
if (typeof window !== "undefined")
  window.gracecode_requireTypes = gracecode_requireTypes;
gracecode_requireTypes.imports = ["ast", "standardGrace"];
gracecode_requireTypes.definitionModule = "requireTypes";
gracecode_requireTypes.definitionLine = 1;
