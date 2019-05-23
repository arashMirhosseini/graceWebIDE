var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["typeComparison"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n mirrors\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/typeComparison.grace\npublic:\n canonical(1)\n methodsIn(1)missingFrom(1)\n protocolOf(1)notCoveredBy(1)\npublicMethodTypes:\n canonical(name) \u2192 String\n methodsIn(DesiredType)missingFrom(value) \u2192 String\n protocolOf(value)notCoveredBy(Q:Type) \u2192 String\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["typeComparison"] = [
    "#pragma noTypeChecks",
    "import \"mirrors\" as mirror",
    "",
    "method methodsIn(DesiredType) missingFrom (value) -> String {",
    "    def vMethods = mirror.reflect(value).methodNames",
    "    def tMethods = DesiredType.methodNames",
    "    def missing = list.withAll((tMethods -- vMethods).filter{m ->",
    "        (! m.contains \"$\")}).sort",
    "    def n = missing.size",
    "    if (n == 0) then {",
    "        ProgrammingError.raise \"{value.asDebugString} seems to have all the methods of {DesiredType}\"",
    "    }",
    "    var s := \"\"",
    "    missing.keysAndValuesDo { ix, each ->",
    "        s := s ++ each",
    "        if (ix == (n - 1)) then {",
    "            if (n > 2) then {",
    "                s := s ++ \", and \"      // Oxford comma",
    "            } else {",
    "                s := s ++ \" and \"",
    "            }",
    "        } elseif { ix < n } then {",
    "            s := s ++ \", \"",
    "        }",
    "    }",
    "    return s",
    "}",
    "method protocolOf(value) notCoveredBy (Q:Type) -> String  {",
    "    def vMethods = set.withAll(mirror.reflect(value).methodNames)",
    "    def qMethods = set.withAll(Q.methodNames)",
    "    def missing = list.withAll((vMethods -- qMethods).filter{m ->",
    "        (! m.contains \"$\")}).sort",
    "    def n = missing.size",
    "    if (n == 0) then { return \"\" }",
    "    var s := \"\"",
    "    missing.keysAndValuesDo { ix, each ->",
    "        s := s ++ each",
    "        if (ix == (n - 1)) then {",
    "            if (n > 2) then {",
    "                s := s ++ \", and \"      // Oxford comma",
    "            } else {",
    "                s := s ++ \" and \"",
    "            }",
    "        } elseif { ix < n } then {",
    "            s := s ++ \", \"",
    "        }",
    "    }",
    "    return s",
    "}",
    "",
    "method canonical(name) -> String {",
    "    def left1 = name.indexOf \"(\" ifAbsent { return name }",
    "    var cName := \"\"",
    "    var ch",
    "    def nameI = name.iterator",
    "    while { nameI.hasNext } do {",
    "        ch := nameI.next",
    "        cName := cName ++ ch",
    "        if (ch == \"(\") then {",
    "            ch := nameI.next",
    "            if (ch.startsWithDigit.not) then {",
    "                RequestError.raise \"malformed numeric method name {name}\"",
    "            }",
    "            var n := ch.asNumber",
    "            while {",
    "                ch := nameI.next",
    "                ch.startsWithDigit",
    "            } do {",
    "                n := (n * 10) + ch.asNumber",
    "            }",
    "            cName := cName ++ \"_\" ++ (\",_\" * (n-1)) ++ \")\"",
    "            if (ch ≠ \")\") then { RequestError.raise \"malformed numeric method name {name}\" }",
    "        }",
    "    }",
    "    cName",
    "}" ];
}
function gracecode_typeComparison() {
  importedModules["typeComparison"] = this;
  var module$typeComparison = this;
  this.definitionModule = "typeComparison";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_typeComparison_1");
  this.outer_typeComparison_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(2);    // compilenode import
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
  func0.definitionLine = 2;
  func0.definitionModule = "typeComparison";
  func0.debug = "import";
  func0.confidential = true;
  var func1 = function(argcv, var_DesiredType, var_value) {    // method methodsIn(_)missingFrom(_), line 4
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("methodsIn(_)missingFrom(_)", 0, numArgs - 2);
    }
    setLineNumber(5);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_mirror === undefined) raiseUninitializedVariable("mirror");
    var call3 = request(var_mirror, "reflect(1)", [1], var_value);
    var call2 = request(call3, "methodNames", [0]);
    var var_vMethods = call2;
    setLineNumber(6);    // compilenode member
    // call case 6: other requests
    var call4 = request(var_DesiredType, "methodNames", [0]);
    var var_tMethods = call4;
    setLineNumber(7);    // compilenode member
    // call case 6: other requests
    var block8 = new GraceBlock(this, 7, 1);
    block8.guard = jsTrue;
    block8.real = function block8(var_m) {
      setLineNumber(8);    // compilenode call
      // call case 6: other requests
      var string11 = new GraceString("$");
      // call case 6: other requests
      var call10 = request(var_m, "contains(1)", [1], string11);
      var call9 = request(call10, "prefix!", [0]);
      return call9;
    };
    let applyMeth8 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth8.methodName = "apply(1)";
    applyMeth8.paramCounts = [1];
    applyMeth8.paramNames = ["m"];
    applyMeth8.definitionLine = 7;
    applyMeth8.definitionModule = "typeComparison";
    block8.methods["apply(1)"] = applyMeth8;
    let matchesMeth8 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth8.methodName = "matches(1)";
    matchesMeth8.paramCounts = [1];
    matchesMeth8.paramNames = ["m"];
    matchesMeth8.definitionLine = 7;
    matchesMeth8.definitionModule = "typeComparison";
    block8.methods["matches(1)"] = matchesMeth8;
    // call case 6: other requests
    setLineNumber(7);    // compilenode op
    var opresult12 = request(var_tMethods, "--(1)", [1], var_vMethods);
    var call7 = request(opresult12, "filter(1)", [1], block8);
    // call case 6: other requests
    // call case 2: outer request
    var call13 = selfRequest(var_prelude, "list", [0]);
    var call6 = request(call13, "withAll(1)", [1], call7);
    var call5 = request(call6, "sort", [0]);
    var var_missing = call5;
    setLineNumber(9);    // compilenode member
    // call case 6: other requests
    var call14 = request(var_missing, "size", [0]);
    var var_n = call14;
    var if15 = GraceDone;
    setLineNumber(10);    // compilenode num
    var opresult16 = request(var_n, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult16)) {
      setLineNumber(11);    // compilenode string
      var string18 = new GraceString("");
      // call case 6: other requests
      var call19 = request(var_value, "asDebugString", [0]);
      var opresult20 = request(string18, "++(1)", [1], call19);
      var string21 = new GraceString(" seems to have all the methods of ");
      var opresult22 = request(opresult20, "++(1)", [1], string21);
      var opresult23 = request(opresult22, "++(1)", [1], var_DesiredType);
      var string24 = new GraceString("");
      var opresult25 = request(opresult23, "++(1)", [1], string24);
      // call case 6: other requests
      // call case 2: outer request
      var call26 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call17 = request(call26, "raise(1)", [1], opresult25);
      if15 = call17;
    }
    setLineNumber(13);    // compilenode string
    var string27 = new GraceString("");
    var var_s = string27;
    setLineNumber(14);    // compilenode block
    var block29 = new GraceBlock(this, 14, 2);
    block29.guard = jsTrue;
    block29.real = function block29(var_ix, var_each) {
      setLineNumber(15);    // compilenode op
      if (var_s === undefined) raiseUninitializedVariable("s");
      var opresult30 = request(var_s, "++(1)", [1], var_each);
      var_s = opresult30;
      var if31 = GraceDone;
      setLineNumber(16);    // compilenode op
      if (var_n === undefined) raiseUninitializedVariable("n");
      var diff32 = request(var_n, "-(1)", [1], new GraceNum(1));
      var opresult33 = request(var_ix, "==(1)", [1], diff32);
      if (Grace_isTrue(opresult33)) {
        var if34 = GraceDone;
        setLineNumber(17);    // compilenode op
        if (var_n === undefined) raiseUninitializedVariable("n");
        var opresult35 = request(var_n, ">(1)", [1], new GraceNum(2));
        if (Grace_isTrue(opresult35)) {
          setLineNumber(18);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string36 = new GraceString(", and ");
          var opresult37 = request(var_s, "++(1)", [1], string36);
          var_s = opresult37;
          if34 = GraceDone;
        } else {
          setLineNumber(20);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string38 = new GraceString(" and ");
          var opresult39 = request(var_s, "++(1)", [1], string38);
          var_s = opresult39;
          if34 = GraceDone;
        }
        if31 = if34;
      } else {
        var if40 = GraceDone;
        setLineNumber(22);    // compilenode op
        if (var_n === undefined) raiseUninitializedVariable("n");
        var opresult41 = request(var_ix, "<(1)", [1], var_n);
        if (Grace_isTrue(opresult41)) {
          setLineNumber(23);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string42 = new GraceString(", ");
          var opresult43 = request(var_s, "++(1)", [1], string42);
          var_s = opresult43;
          if40 = GraceDone;
        }
        if31 = if40;
      }
      return if31;
    };
    let applyMeth29 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth29.methodName = "apply(2)";
    applyMeth29.paramCounts = [2];
    applyMeth29.paramNames = ["ix", "each"];
    applyMeth29.definitionLine = 14;
    applyMeth29.definitionModule = "typeComparison";
    block29.methods["apply(2)"] = applyMeth29;
    let matchesMeth29 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth29.methodName = "matches(2)";
    matchesMeth29.paramCounts = [2];
    matchesMeth29.paramNames = ["ix", "each"];
    matchesMeth29.definitionLine = 14;
    matchesMeth29.definitionModule = "typeComparison";
    block29.methods["matches(2)"] = matchesMeth29;
    // call case 6: other requests
    var call28 = request(var_missing, "keysAndValuesDo(1)", [1], block29);
    setLineNumber(26);    // compilenode return
    return var_s;
  };    // end of method methodsIn(_)missingFrom(_)
  this.methods["methodsIn(1)missingFrom(1)"] = func1;
  func1.methodName = "methodsIn(1)missingFrom(1)";
  func1.paramCounts = [1, 1];
  func1.paramNames = ["DesiredType", "value"];
  func1.definitionLine = 4;
  func1.definitionModule = "typeComparison";
  var func44 = function(argcv, var_value, var_Q) {    // method protocolOf(_)notCoveredBy(_), line 28
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("protocolOf(_)notCoveredBy(_)", 0, numArgs - 2);
    }
    setLineNumber(29);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_mirror === undefined) raiseUninitializedVariable("mirror");
    var call47 = request(var_mirror, "reflect(1)", [1], var_value);
    var call46 = request(call47, "methodNames", [0]);
    // call case 6: other requests
    // call case 2: outer request
    var call48 = selfRequest(var_prelude, "set", [0]);
    var call45 = request(call48, "withAll(1)", [1], call46);
    var var_vMethods = call45;
    setLineNumber(30);    // compilenode member
    // call case 6: other requests
    var call50 = request(var_Q, "methodNames", [0]);
    // call case 6: other requests
    // call case 2: outer request
    var call51 = selfRequest(var_prelude, "set", [0]);
    var call49 = request(call51, "withAll(1)", [1], call50);
    var var_qMethods = call49;
    setLineNumber(31);    // compilenode member
    // call case 6: other requests
    var block55 = new GraceBlock(this, 31, 1);
    block55.guard = jsTrue;
    block55.real = function block55(var_m) {
      setLineNumber(32);    // compilenode call
      // call case 6: other requests
      var string58 = new GraceString("$");
      // call case 6: other requests
      var call57 = request(var_m, "contains(1)", [1], string58);
      var call56 = request(call57, "prefix!", [0]);
      return call56;
    };
    let applyMeth55 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth55.methodName = "apply(1)";
    applyMeth55.paramCounts = [1];
    applyMeth55.paramNames = ["m"];
    applyMeth55.definitionLine = 31;
    applyMeth55.definitionModule = "typeComparison";
    block55.methods["apply(1)"] = applyMeth55;
    let matchesMeth55 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth55.methodName = "matches(1)";
    matchesMeth55.paramCounts = [1];
    matchesMeth55.paramNames = ["m"];
    matchesMeth55.definitionLine = 31;
    matchesMeth55.definitionModule = "typeComparison";
    block55.methods["matches(1)"] = matchesMeth55;
    // call case 6: other requests
    setLineNumber(31);    // compilenode op
    var opresult59 = request(var_vMethods, "--(1)", [1], var_qMethods);
    var call54 = request(opresult59, "filter(1)", [1], block55);
    // call case 6: other requests
    // call case 2: outer request
    var call60 = selfRequest(var_prelude, "list", [0]);
    var call53 = request(call60, "withAll(1)", [1], call54);
    var call52 = request(call53, "sort", [0]);
    var var_missing = call52;
    setLineNumber(33);    // compilenode member
    // call case 6: other requests
    var call61 = request(var_missing, "size", [0]);
    var var_n = call61;
    var if62 = GraceDone;
    setLineNumber(34);    // compilenode num
    var opresult63 = request(var_n, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult63)) {
      var string64 = new GraceString("");
      return string64;
    }
    setLineNumber(35);    // compilenode string
    var string65 = new GraceString("");
    var var_s = string65;
    setLineNumber(36);    // compilenode block
    var block67 = new GraceBlock(this, 36, 2);
    block67.guard = jsTrue;
    block67.real = function block67(var_ix, var_each) {
      setLineNumber(37);    // compilenode op
      if (var_s === undefined) raiseUninitializedVariable("s");
      var opresult68 = request(var_s, "++(1)", [1], var_each);
      var_s = opresult68;
      var if69 = GraceDone;
      setLineNumber(38);    // compilenode op
      if (var_n === undefined) raiseUninitializedVariable("n");
      var diff70 = request(var_n, "-(1)", [1], new GraceNum(1));
      var opresult71 = request(var_ix, "==(1)", [1], diff70);
      if (Grace_isTrue(opresult71)) {
        var if72 = GraceDone;
        setLineNumber(39);    // compilenode op
        if (var_n === undefined) raiseUninitializedVariable("n");
        var opresult73 = request(var_n, ">(1)", [1], new GraceNum(2));
        if (Grace_isTrue(opresult73)) {
          setLineNumber(40);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string74 = new GraceString(", and ");
          var opresult75 = request(var_s, "++(1)", [1], string74);
          var_s = opresult75;
          if72 = GraceDone;
        } else {
          setLineNumber(42);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string76 = new GraceString(" and ");
          var opresult77 = request(var_s, "++(1)", [1], string76);
          var_s = opresult77;
          if72 = GraceDone;
        }
        if69 = if72;
      } else {
        var if78 = GraceDone;
        setLineNumber(44);    // compilenode op
        if (var_n === undefined) raiseUninitializedVariable("n");
        var opresult79 = request(var_ix, "<(1)", [1], var_n);
        if (Grace_isTrue(opresult79)) {
          setLineNumber(45);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string80 = new GraceString(", ");
          var opresult81 = request(var_s, "++(1)", [1], string80);
          var_s = opresult81;
          if78 = GraceDone;
        }
        if69 = if78;
      }
      return if69;
    };
    let applyMeth67 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth67.methodName = "apply(2)";
    applyMeth67.paramCounts = [2];
    applyMeth67.paramNames = ["ix", "each"];
    applyMeth67.definitionLine = 36;
    applyMeth67.definitionModule = "typeComparison";
    block67.methods["apply(2)"] = applyMeth67;
    let matchesMeth67 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth67.methodName = "matches(2)";
    matchesMeth67.paramCounts = [2];
    matchesMeth67.paramNames = ["ix", "each"];
    matchesMeth67.definitionLine = 36;
    matchesMeth67.definitionModule = "typeComparison";
    block67.methods["matches(2)"] = matchesMeth67;
    // call case 6: other requests
    var call66 = request(var_missing, "keysAndValuesDo(1)", [1], block67);
    setLineNumber(48);    // compilenode return
    return var_s;
  };    // end of method protocolOf(_)notCoveredBy(_)
  func44.paramTypes = [];
  func44.paramTypes.push([]);
  func44.paramTypes.push([type_Type, "Q"]);
  this.methods["protocolOf(1)notCoveredBy(1)"] = func44;
  func44.methodName = "protocolOf(1)notCoveredBy(1)";
  func44.paramCounts = [1, 1];
  func44.paramNames = ["value", "Q"];
  func44.definitionLine = 28;
  func44.definitionModule = "typeComparison";
  var func82 = function(argcv, var_name) {    // method canonical(_), line 51
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("canonical(_)", 0, numArgs - 1);
    }
    setLineNumber(52);    // compilenode string
    var string84 = new GraceString("(");
    var block85 = new GraceBlock(this, 52, 0);
    block85.guard = jsTrue;
    block85.real = function block85() {
      setLineNumber(52);    // compilenode return
      throw new ReturnException(var_name, returnTarget);
    };
    let applyMeth85 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth85.methodName = "apply";
    applyMeth85.paramCounts = [0];
    applyMeth85.paramNames = [];
    applyMeth85.definitionLine = 52;
    applyMeth85.definitionModule = "typeComparison";
    block85.methods["apply"] = applyMeth85;
    // call case 6: other requests
    var call83 = request(var_name, "indexOf(1)ifAbsent(1)", [1, 1], string84, block85);
    var var_left1 = call83;
    setLineNumber(53);    // compilenode string
    var string86 = new GraceString("");
    var var_cName = string86;
    setLineNumber(54);    // compilenode vardec
    var var_ch;
    setLineNumber(55);    // compilenode member
    // call case 6: other requests
    var call87 = request(var_name, "iterator", [0]);
    var var_nameI = call87;
    setLineNumber(56);    // compilenode block
    var block89 = new GraceBlock(this, 56, 0);
    block89.guard = jsTrue;
    block89.real = function block89() {
      setLineNumber(56);    // compilenode member
      // call case 6: other requests
      if (var_nameI === undefined) raiseUninitializedVariable("nameI");
      var call90 = request(var_nameI, "hasNext", [0]);
      return call90;
    };
    let applyMeth89 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth89.methodName = "apply";
    applyMeth89.paramCounts = [0];
    applyMeth89.paramNames = [];
    applyMeth89.definitionLine = 56;
    applyMeth89.definitionModule = "typeComparison";
    block89.methods["apply"] = applyMeth89;
    var block91 = new GraceBlock(this, 56, 0);
    block91.guard = jsTrue;
    block91.real = function block91() {
      setLineNumber(57);    // compilenode member
      // call case 6: other requests
      if (var_nameI === undefined) raiseUninitializedVariable("nameI");
      var call92 = request(var_nameI, "next", [0]);
      var_ch = call92;
      setLineNumber(58);    // compilenode op
      if (var_cName === undefined) raiseUninitializedVariable("cName");
      if (var_ch === undefined) raiseUninitializedVariable("ch");
      var opresult93 = request(var_cName, "++(1)", [1], var_ch);
      var_cName = opresult93;
      var if94 = GraceDone;
      setLineNumber(59);    // compilenode op
      if (var_ch === undefined) raiseUninitializedVariable("ch");
      var string95 = new GraceString("(");
      var opresult96 = request(var_ch, "==(1)", [1], string95);
      if (Grace_isTrue(opresult96)) {
        setLineNumber(60);    // compilenode member
        // call case 6: other requests
        if (var_nameI === undefined) raiseUninitializedVariable("nameI");
        var call97 = request(var_nameI, "next", [0]);
        var_ch = call97;
        var if98 = GraceDone;
        setLineNumber(61);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_ch === undefined) raiseUninitializedVariable("ch");
        var call100 = request(var_ch, "startsWithDigit", [0]);
        var call99 = request(call100, "not", [0]);
        if (Grace_isTrue(call99)) {
          setLineNumber(62);    // compilenode string
          var string102 = new GraceString("malformed numeric method name ");
          var opresult103 = request(string102, "++(1)", [1], var_name);
          var string104 = new GraceString("");
          var opresult105 = request(opresult103, "++(1)", [1], string104);
          // call case 6: other requests
          // call case 2: outer request
          var call106 = selfRequest(var_prelude, "RequestError", [0]);
          var call101 = request(call106, "raise(1)", [1], opresult105);
          if98 = call101;
        }
        setLineNumber(64);    // compilenode member
        // call case 6: other requests
        if (var_ch === undefined) raiseUninitializedVariable("ch");
        var call107 = request(var_ch, "asNumber", [0]);
        var var_n = call107;
        setLineNumber(65);    // compilenode block
        var block109 = new GraceBlock(this, 65, 0);
        block109.guard = jsTrue;
        block109.real = function block109() {
          setLineNumber(66);    // compilenode member
          // call case 6: other requests
          if (var_nameI === undefined) raiseUninitializedVariable("nameI");
          var call110 = request(var_nameI, "next", [0]);
          var_ch = call110;
          setLineNumber(67);    // compilenode member
          // call case 6: other requests
          if (var_ch === undefined) raiseUninitializedVariable("ch");
          var call111 = request(var_ch, "startsWithDigit", [0]);
          return call111;
        };
        let applyMeth109 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth109.methodName = "apply";
        applyMeth109.paramCounts = [0];
        applyMeth109.paramNames = [];
        applyMeth109.definitionLine = 65;
        applyMeth109.definitionModule = "typeComparison";
        block109.methods["apply"] = applyMeth109;
        setLineNumber(68);    // compilenode block
        var block112 = new GraceBlock(this, 68, 0);
        block112.guard = jsTrue;
        block112.real = function block112() {
          setLineNumber(69);    // compilenode op
          if (var_n === undefined) raiseUninitializedVariable("n");
          var prod113 = request(var_n, "*(1)", [1], new GraceNum(10));
          // call case 6: other requests
          if (var_ch === undefined) raiseUninitializedVariable("ch");
          var call114 = request(var_ch, "asNumber", [0]);
          var sum115 = request(prod113, "+(1)", [1], call114);
          var_n = sum115;
          return GraceDone;
        };
        let applyMeth112 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth112.methodName = "apply";
        applyMeth112.paramCounts = [0];
        applyMeth112.paramNames = [];
        applyMeth112.definitionLine = 68;
        applyMeth112.definitionModule = "typeComparison";
        block112.methods["apply"] = applyMeth112;
        // call case 2: outer request
        var call108 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block109, block112);
        setLineNumber(71);    // compilenode op
        if (var_cName === undefined) raiseUninitializedVariable("cName");
        var string116 = new GraceString("_");
        var opresult117 = request(var_cName, "++(1)", [1], string116);
        var string118 = new GraceString(",_");
        if (var_n === undefined) raiseUninitializedVariable("n");
        var diff119 = request(var_n, "-(1)", [1], new GraceNum(1));
        var prod120 = request(string118, "*(1)", [1], diff119);
        var opresult121 = request(opresult117, "++(1)", [1], prod120);
        var string122 = new GraceString(")");
        var opresult123 = request(opresult121, "++(1)", [1], string122);
        var_cName = opresult123;
        var if124 = GraceDone;
        setLineNumber(72);    // compilenode op
        if (var_ch === undefined) raiseUninitializedVariable("ch");
        var string125 = new GraceString(")");
        var opresult126 = request(var_ch, "\u2260(1)", [1], string125);
        if (Grace_isTrue(opresult126)) {
          var string128 = new GraceString("malformed numeric method name ");
          var opresult129 = request(string128, "++(1)", [1], var_name);
          var string130 = new GraceString("");
          var opresult131 = request(opresult129, "++(1)", [1], string130);
          // call case 6: other requests
          // call case 2: outer request
          var call132 = selfRequest(var_prelude, "RequestError", [0]);
          var call127 = request(call132, "raise(1)", [1], opresult131);
          if124 = call127;
        }
        if94 = if124;
      }
      return if94;
    };
    let applyMeth91 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth91.methodName = "apply";
    applyMeth91.paramCounts = [0];
    applyMeth91.paramNames = [];
    applyMeth91.definitionLine = 56;
    applyMeth91.definitionModule = "typeComparison";
    block91.methods["apply"] = applyMeth91;
    // call case 2: outer request
    var call88 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block89, block91);
    return var_cName;
  };    // end of method canonical(_)
  this.methods["canonical(1)"] = func82;
  func82.methodName = "canonical(1)";
  func82.paramCounts = [1];
  func82.paramNames = ["name"];
  func82.definitionLine = 51;
  func82.definitionModule = "typeComparison";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_typeComparison = gracecode_typeComparison;
if (typeof window !== "undefined")
  window.gracecode_typeComparison = gracecode_typeComparison;
gracecode_typeComparison.imports = ["mirrors", "standardGrace"];
gracecode_typeComparison.definitionModule = "typeComparison";
gracecode_typeComparison.definitionLine = 1;
