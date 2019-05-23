var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["option"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n empty\n full(1)\n optionAsCollection\nfresh:empty:\n ++(1)\n ::(1)\n <<(1)\n ==(1)\n >>(1)\n asString\n at(1)\n at(1)ifAbsent(1)\n contains(1)\n do(1)\n do(1)separatedBy(1)\n fifth\n filter(1)\n first\n fold(1)startingWith(1)\n fourth\n hash\n ifEmpty(1)\n ifEmpty(1)ifFull(1)\n ifFull(1)\n ifFull(1)ifEmpty(1)\n indexOf(1)\n indexOf(1)ifAbsent(1)\n indices\n isEmpty\n isFull\n iterator\n keys\n keysAndValuesDo(1)\n last\n map(1)\n reversed\n second\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n third\n value\n valueIfEmpty(1)\n values\n \u2260(1)\nfresh:full(1):\n ++(1)\n ::(1)\n <<(1)\n ==(1)\n >>(1)\n asString\n at(1)\n at(1)ifAbsent(1)\n contains(1)\n do(1)\n do(1)separatedBy(1)\n fifth\n filter(1)\n first\n fold(1)startingWith(1)\n fourth\n hash\n ifEmpty(1)\n ifEmpty(1)ifFull(1)\n ifFull(1)\n ifFull(1)ifEmpty(1)\n indexOf(1)\n indexOf(1)ifAbsent(1)\n indices\n isEmpty\n isFull\n iterator\n keys\n keysAndValuesDo(1)\n last\n map(1)\n reversed\n second\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n third\n value\n valueIfEmpty(1)\n values\n \u2260(1)\nfresh:optionAsCollection:\n <<(1)\n >>(1)\n do(1)\n do(1)separatedBy(1)\n fifth\n first\n fourth\n last\n reversed\n second\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n third\n value\n values\nmethodtypes-of:Option\u27e6T\u27e7:\n & 2\n & Collection\u27e6T\u27e7\n 2 ifEmpty(eAction:Function0\u27e6Done\u27e7) \u2192 Done\n 2 ifEmpty(eAction:Function0\u27e6U\u27e7)ifFull(fAction:Function1\u27e6T, U\u27e7) \u2192 U\n 2 ifFull(fAction:Function1\u27e6T, Done\u27e7) \u2192 Done\n 2 ifFull(fAction:Function1\u27e6T, U\u27e7)ifEmpty(eAction:Function0\u27e6U\u27e7) \u2192 U\n 2 isEmpty \u2192 Boolean\n 2 isFull \u2192 Boolean\n 2 iterator \u2192 Iterator\n 2 value \u2192 T\n 2 valueIfEmpty(eValue:Function0\u27e6U\u27e7) \u2192 T | U\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/option.grace\npublic:\n Option\n ValueError\n empty\n full(1)\n optionAsCollection\npublicMethodTypes:\n ValueError \u2192 Unknown\n empty\u27e6T\u27e7 \u2192 Option\n full\u27e6T\u27e7(contents:T) \u2192 Option\n optionAsCollection\u27e6T\u27e7\ntypes:\n Option\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["option"] = [
    "type Option⟦T⟧ = Collection⟦T⟧ & interface {",
    "    value → T",
    "    valueIfEmpty⟦U⟧ (eValue:Function0⟦U⟧) → T | U",
    "    iterator → Iterator",
    "    isFull → Boolean",
    "    isEmpty → Boolean",
    "    ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U",
    "    ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U",
    "    ifFull (fAction:Function1⟦T, Done⟧) → Done",
    "    ifEmpty (eAction:Function0⟦Done⟧) → Done",
    "}",
    "",
    "def ValueError is public = ProgrammingError.refine \"ValueError\"",
    "",
    "trait optionAsCollection⟦T⟧ {",
    "    method value → T is required",
    "    method do(_) → Done is required",
    "    method size → Number is required",
    "    method first → T is required",
    "    method sizeIfUnknown(_) → Number { size }",
    "    method do (action) separatedBy (_) { do(action) }",
    "    method sorted → Option⟦T⟧ { self }",
    "    method sortedBy(_) → Option⟦T⟧ { self }",
    "    method values → Option⟦T⟧ { self }",
    "    method second -> T { BoundsError.raise \"attemp to use second on {self}.\" }",
    "    method third -> T { BoundsError.raise \"attemp to use third on {self}.\" }",
    "    method fourth -> T { BoundsError.raise \"attemp to use fourth on {self}.\" }",
    "    method fifth -> T { BoundsError.raise \"attemp to use fifth on {self}.\" }",
    "    method last -> T { first }",
    "    method reversed → Option⟦T⟧ { self }",
    "    method >>(target) { target << self }",
    "    method <<(source) { self ++ source }",
    "}",
    "class full⟦T⟧(contents:T) → Option {",
    "    use optionAsCollection⟦T⟧",
    "    use equality",
    "    def value is public = contents",
    "    method valueIfEmpty(_) { value }",
    "    method asString { \"option.full({value})\" }",
    "    method first { value }",
    "    method do(action:Function1⟦T, Done⟧) → Done { action.apply(value) }",
    "    method keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done { action.apply(1, value) }",
    "    method contains(v) { value == v }",
    "    method indices { sequence [1] }",
    "    method keys { sequence [1] }",
    "    method ==(other) {",
    "        match (other) ",
    "            case {c:Collection → (c.size == 1) && {c.first == value} }",
    "            else {false}",
    "    }",
    "    class iterator {",
    "        var hasNext is readable := true",
    "        method asString { \"iterator over {self}\" }",
    "        method next {",
    "            if (hasNext) then { ",
    "                hasNext := false",
    "                value",
    "            } else {            ",
    "                IteratorExhausted.raise \"{self} contains just one value.\"",
    "            }",
    "        }",
    "    }        ",
    "    method isEmpty → Boolean { false }",
    "    method size → Number { 1 }",
    "    method sizeIfUnknown(action) { 1 }",
    "    method at(ix) { ",
    "        if (ix == 1) then { ",
    "            value ",
    "        } else { ",
    "            BoundsError.raise \"attemp to use index {ix} on {self}.\"",
    "        }",
    "    }",
    "    method at(ix) ifAbsent(action) {",
    "        if (ix == 1) then {",
    "            value",
    "        } else {",
    "            action.apply",
    "        }",
    "    }",
    "    method isFull → Boolean { true }",
    "    method ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U {",
    "        fAction.apply(value)",
    "    }",
    "    method ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U {",
    "        fAction.apply(value)",
    "    }",
    "    method ifFull (fAction:Function1⟦T, Done⟧) → Done {",
    "        fAction.apply(value)",
    "        done",
    "    }",
    "    method ifEmpty (eAction:Function0⟦Done⟧) → Done { done }",
    "    method indexOf⟦W⟧ (sought:T) ifAbsent (action:Function0⟦W⟧) -> W { ",
    "        if (value == sought) then { 1 }",
    "            else { action.apply }",
    "    }",
    "    method indexOf(sought:T) -> Number { ",
    "        if (value == sought) then { 1 }",
    "            else { NoSuchObject.raise \"collection does not contain {sought}\" }",
    "    }",
    "    method ++(other: Collection⟦T⟧) -> Collection⟦T⟧ { ",
    "        collections.lazyConcatenation(self, other)",
    "    }",
    "    method fold(binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T {",
    "        binaryFunction.apply(initial, value)",
    "    }",
    "    method map⟦U⟧(function:Function1⟦T, U⟧) -> Option⟦U⟧ {",
    "        full(function.apply(value))",
    "    }",
    "    method filter(condition:Function1⟦T,Boolean⟧) -> Collection⟦T⟧ {",
    "        if (condition.apply(value)) then { self } else { empty⟦T⟧ }",
    "    }",
    "}",
    "class empty⟦T⟧ → Option {",
    "    use optionAsCollection⟦T⟧",
    "    use equality",
    "    method asString { \"option.empty\" }",
    "    method value → T { ValueError.raise \"{self} has no value.\" }",
    "    method valueIfEmpty(eValue:Function0) { eValue.apply }",
    "    method first { BoundsError.raise \"attemp to use first on {self}.\" }",
    "    method do(action:Function1⟦T, Done⟧) → Done { done }",
    "    method keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done { done }",
    "    method contains(_) { false }",
    "    method indices { emptySequence }",
    "    method keys { emptySequence }",
    "    method ==(other) {",
    "        match (other) ",
    "            case {c:Collection → c.isEmpty}",
    "            else {false}",
    "    }",
    "    class iterator {",
    "        method hasNext { false }",
    "        method asString { \"iterator over {self}\" }",
    "        method next { IteratorExhausted.raise \"{self} contains no values.\" }",
    "    }",
    "    method isEmpty → Boolean { true }",
    "    method size → Number { 0 }",
    "    method sizeIfUnknown(action) { 0 }",
    "    method at(ix) { ",
    "        BoundsError.raise \"attemp to use index {ix} on {self}.\"",
    "    }",
    "    method at(ix) ifAbsent(action) {",
    "        action.apply",
    "    }",
    "    method isFull → Boolean { false }",
    "    method ifFull⟦U⟧ (fAction:Function1⟦T, U⟧) ifEmpty (eAction:Function0⟦U⟧) → U {",
    "        eAction.apply",
    "    }",
    "    method ifEmpty⟦U⟧ (eAction:Function0⟦U⟧) ifFull (fAction:Function1⟦T, U⟧) → U {",
    "        eAction.apply",
    "    }",
    "    method ifFull (fAction:Function1⟦T, Done⟧) → Done { done }",
    "    method ifEmpty (eAction:Function0⟦Done⟧) → Done {",
    "        eAction.apply",
    "        done",
    "    }",
    "    method indexOf⟦W⟧ (elem:T) ifAbsent (action:Function0⟦W⟧) -> W { action.apply }",
    "    method indexOf(sought:T) -> Number { NoSuchObject.raise \"collection does not contain {sought}\" }",
    "    method ++(other: Collection⟦T⟧) -> Collection⟦T⟧ { other }",
    "    method fold (binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T {",
    "        initial",
    "    }",
    "    method map⟦U⟧ (function:Function1⟦T, U⟧) -> Option⟦U⟧ { empty⟦U⟧ }",
    "    method filter (condition:Function1⟦T,Boolean⟧) -> Collection⟦T⟧ { self }",
    "}" ];
}
function gracecode_option() {
  importedModules["option"] = this;
  var module$option = this;
  this.definitionModule = "option";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_option_1");
  this.outer_option_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode typedec
  // Type decl Option
  var func1 = function(argcv, var_T) {    // method Option, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string3 = new GraceString("Option");
    // call case 6: other requests
    // call case 2: outer request
    var call4 = selfRequest(var_prelude, "Collection", [0, 1], var_T);
    //   Type literal 
    var typeLit5 = new GraceType("\u2039anon\u203a");
    typeLit5.typeMethods.push("value");
    typeLit5.typeMethods.push("valueIfEmpty(1)");
    typeLit5.typeMethods.push("iterator");
    typeLit5.typeMethods.push("isFull");
    typeLit5.typeMethods.push("isEmpty");
    typeLit5.typeMethods.push("ifFull(1)ifEmpty(1)");
    typeLit5.typeMethods.push("ifEmpty(1)ifFull(1)");
    typeLit5.typeMethods.push("ifFull(1)");
    typeLit5.typeMethods.push("ifEmpty(1)");
    var opresult6 = request(call4, "&(1)", [1], typeLit5);
    var call2 = selfRequest(opresult6, "setName(1)", [1], string3);
    return call2;
  };    // end of method Option
  function memofunc1(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Option", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Option"] ||
          ( this.data["memo$Option"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func1.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Option"] = memofunc1;
  memofunc1.methodName = "Option";
  memofunc1.paramCounts = [0];
  memofunc1.paramNames = [];
  memofunc1.typeParamNames = ["T"];
  memofunc1.definitionLine = 1;
  memofunc1.definitionModule = "option";
  func1.methodName = "Option";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.typeParamNames = ["T"];
  func1.definitionLine = 1;
  func1.definitionModule = "option";
  var func7 = function(argcv, var_T) {    // method optionAsCollection, line 15
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("optionAsCollection", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("optionAsCollection", "option", 15);
    var ouc_init = this.methods["optionAsCollection$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method optionAsCollection
  this.methods["optionAsCollection"] = func7;
  func7.methodName = "optionAsCollection";
  func7.paramCounts = [0];
  func7.paramNames = [];
  func7.typeParamNames = ["T"];
  func7.definitionLine = 15;
  func7.definitionModule = "option";
  var func8 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method optionAsCollection$build(_,_,_), line 15
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("optionAsCollection", 1, numArgs - 0);
    }
    var obj9_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_option_15");
      this.outer_option_15 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      if (! this.methods["value"]) {
        var func10 = function(argcv) {    // method value, line 16
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("value", 0, numArgs - 0);
          }
          setLineNumber(16);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method value was not supplied"));
        };    // end of method value
        this.methods["value"] = func10;
        func10.methodName = "value";
        func10.paramCounts = [0];
        func10.paramNames = [];
        func10.definitionLine = 16;
        func10.definitionModule = "option";
      };
      if (! this.methods["do(1)"]) {
        var func11 = function(argcv, var___95____95__1) {    // method do(_), line 17
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("do(_)", 0, numArgs - 1);
          }
          setLineNumber(17);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method do(_) was not supplied"));
        };    // end of method do(_)
        this.methods["do(1)"] = func11;
        func11.methodName = "do(1)";
        func11.paramCounts = [1];
        func11.paramNames = ["__1"];
        func11.definitionLine = 17;
        func11.definitionModule = "option";
      };
      if (! this.methods["size"]) {
        var func12 = function(argcv) {    // method size, line 18
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("size", 0, numArgs - 0);
          }
          setLineNumber(18);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method size was not supplied"));
        };    // end of method size
        this.methods["size"] = func12;
        func12.methodName = "size";
        func12.paramCounts = [0];
        func12.paramNames = [];
        func12.definitionLine = 18;
        func12.definitionModule = "option";
      };
      if (! this.methods["first"]) {
        var func13 = function(argcv) {    // method first, line 19
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("first", 0, numArgs - 0);
          }
          setLineNumber(19);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method first was not supplied"));
        };    // end of method first
        this.methods["first"] = func13;
        func13.methodName = "first";
        func13.paramCounts = [0];
        func13.paramNames = [];
        func13.definitionLine = 19;
        func13.definitionModule = "option";
      };
      var func14 = function(argcv, var___95____95__2) {    // method sizeIfUnknown(_), line 20
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(20);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call15 = selfRequest(this, "size", [0]);
        assertTypeOrMsg(call15, var_Number, "result of method sizeIfUnknown(_)", "Number");
        return call15;
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func14;
      func14.methodName = "sizeIfUnknown(1)";
      func14.paramCounts = [1];
      func14.paramNames = ["__2"];
      func14.definitionLine = 20;
      func14.definitionModule = "option";
      var func16 = function(argcv, var_action, var___95____95__3) {    // method do(_)separatedBy(_), line 21
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("do(_)separatedBy(_)", 0, numArgs - 2);
        }
        setLineNumber(21);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call17 = selfRequest(this, "do(1)", [1], var_action);
        return call17;
      };    // end of method do(_)separatedBy(_)
      this.methods["do(1)separatedBy(1)"] = func16;
      func16.methodName = "do(1)separatedBy(1)";
      func16.paramCounts = [1, 1];
      func16.paramNames = ["action", "__3"];
      func16.definitionLine = 21;
      func16.definitionModule = "option";
      var func18 = function(argcv) {     // accessor method sorted
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("sorted", 0, numArgs - 0);
        return this;
      };    // end of method sorted
      this.methods["sorted"] = func18;
      func18.methodName = "sorted";
      func18.paramCounts = [0];
      func18.paramNames = [];
      func18.definitionLine = 22;
      func18.definitionModule = "option";
      var func19 = function(argcv, var___95____95__4) {     // accessor method sortedBy(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
        return this;
      };    // end of method sortedBy(_)
      this.methods["sortedBy(1)"] = func19;
      func19.methodName = "sortedBy(1)";
      func19.paramCounts = [1];
      func19.paramNames = ["__4"];
      func19.definitionLine = 23;
      func19.definitionModule = "option";
      var func20 = function(argcv) {     // accessor method values
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
        return this;
      };    // end of method values
      this.methods["values"] = func20;
      func20.methodName = "values";
      func20.paramCounts = [0];
      func20.paramNames = [];
      func20.definitionLine = 24;
      func20.definitionModule = "option";
      var func21 = function(argcv) {    // method second, line 25
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("second", 0, numArgs - 0);
        }
        setLineNumber(25);    // compilenode string
        var string23 = new GraceString("attemp to use second on ");
        var opresult24 = request(string23, "++(1)", [1], this);
        var string25 = new GraceString(".");
        var opresult26 = request(opresult24, "++(1)", [1], string25);
        // call case 6: other requests
        // call case 2: outer request
        var call27 = selfRequest(var_prelude, "BoundsError", [0]);
        var call22 = request(call27, "raise(1)", [1], opresult26);
        assertTypeOrMsg(call22, var_T, "result of method second", "T");
        return call22;
      };    // end of method second
      this.methods["second"] = func21;
      func21.methodName = "second";
      func21.paramCounts = [0];
      func21.paramNames = [];
      func21.definitionLine = 25;
      func21.definitionModule = "option";
      var func28 = function(argcv) {    // method third, line 26
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("third", 0, numArgs - 0);
        }
        setLineNumber(26);    // compilenode string
        var string30 = new GraceString("attemp to use third on ");
        var opresult31 = request(string30, "++(1)", [1], this);
        var string32 = new GraceString(".");
        var opresult33 = request(opresult31, "++(1)", [1], string32);
        // call case 6: other requests
        // call case 2: outer request
        var call34 = selfRequest(var_prelude, "BoundsError", [0]);
        var call29 = request(call34, "raise(1)", [1], opresult33);
        assertTypeOrMsg(call29, var_T, "result of method third", "T");
        return call29;
      };    // end of method third
      this.methods["third"] = func28;
      func28.methodName = "third";
      func28.paramCounts = [0];
      func28.paramNames = [];
      func28.definitionLine = 26;
      func28.definitionModule = "option";
      var func35 = function(argcv) {    // method fourth, line 27
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("fourth", 0, numArgs - 0);
        }
        setLineNumber(27);    // compilenode string
        var string37 = new GraceString("attemp to use fourth on ");
        var opresult38 = request(string37, "++(1)", [1], this);
        var string39 = new GraceString(".");
        var opresult40 = request(opresult38, "++(1)", [1], string39);
        // call case 6: other requests
        // call case 2: outer request
        var call41 = selfRequest(var_prelude, "BoundsError", [0]);
        var call36 = request(call41, "raise(1)", [1], opresult40);
        assertTypeOrMsg(call36, var_T, "result of method fourth", "T");
        return call36;
      };    // end of method fourth
      this.methods["fourth"] = func35;
      func35.methodName = "fourth";
      func35.paramCounts = [0];
      func35.paramNames = [];
      func35.definitionLine = 27;
      func35.definitionModule = "option";
      var func42 = function(argcv) {    // method fifth, line 28
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("fifth", 0, numArgs - 0);
        }
        setLineNumber(28);    // compilenode string
        var string44 = new GraceString("attemp to use fifth on ");
        var opresult45 = request(string44, "++(1)", [1], this);
        var string46 = new GraceString(".");
        var opresult47 = request(opresult45, "++(1)", [1], string46);
        // call case 6: other requests
        // call case 2: outer request
        var call48 = selfRequest(var_prelude, "BoundsError", [0]);
        var call43 = request(call48, "raise(1)", [1], opresult47);
        assertTypeOrMsg(call43, var_T, "result of method fifth", "T");
        return call43;
      };    // end of method fifth
      this.methods["fifth"] = func42;
      func42.methodName = "fifth";
      func42.paramCounts = [0];
      func42.paramNames = [];
      func42.definitionLine = 28;
      func42.definitionModule = "option";
      var func49 = function(argcv) {    // method last, line 29
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("last", 0, numArgs - 0);
        }
        setLineNumber(29);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call50 = selfRequest(this, "first", [0]);
        assertTypeOrMsg(call50, var_T, "result of method last", "T");
        return call50;
      };    // end of method last
      this.methods["last"] = func49;
      func49.methodName = "last";
      func49.paramCounts = [0];
      func49.paramNames = [];
      func49.definitionLine = 29;
      func49.definitionModule = "option";
      var func51 = function(argcv) {     // accessor method reversed
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("reversed", 0, numArgs - 0);
        return this;
      };    // end of method reversed
      this.methods["reversed"] = func51;
      func51.methodName = "reversed";
      func51.paramCounts = [0];
      func51.paramNames = [];
      func51.definitionLine = 30;
      func51.definitionModule = "option";
      var func52 = function(argcv, var_target) {    // method >>(_), line 31
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError(">>(_)", 0, numArgs - 1);
        }
        setLineNumber(31);    // compilenode op
        var opresult53 = request(var_target, "<<(1)", [1], this);
        return opresult53;
      };    // end of method >>(_)
      this.methods[">>(1)"] = func52;
      func52.methodName = ">>(1)";
      func52.paramCounts = [1];
      func52.paramNames = ["target"];
      func52.definitionLine = 31;
      func52.definitionModule = "option";
      var func54 = function(argcv, var_source) {    // method <<(_), line 32
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(32);    // compilenode op
        var opresult55 = request(this, "++(1)", [1], var_source);
        return opresult55;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func54;
      func54.methodName = "<<(1)";
      func54.paramCounts = [1];
      func54.paramNames = ["source"];
      func54.definitionLine = 32;
      func54.definitionModule = "option";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 15;
          m.definitionModule = "option";
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
      var obj9_init = function() {    // init of object on line 15
      };
      return obj9_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj9_init = obj9_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj9_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method optionAsCollection$build(_,_,_)
  this.methods["optionAsCollection$build(3)"] = func8;
  func8.methodName = "optionAsCollection$build(3)";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.typeParamNames = ["T"];
  func8.definitionLine = 15;
  func8.definitionModule = "option";
  var func56 = function(argcv, var_contents, var_T) {    // method full(_), line 34
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("full(_)", 1, numArgs - 1);
    }
    assertTypeOrMsg(var_contents, var_T, "argument to request of `full(_)`", "T");
    var ouc = emptyGraceObject("full(_)", "option", 34);
    var ouc_init = this.methods["full(1)$build(3)"].call(this, null, var_contents, ouc, [], [], var_T);
    ouc_init.call(ouc);
    setLineNumber(34);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call57 = selfRequest(this, "Option", [0]);
    assertTypeOrMsg(ouc, call57, "object returned from full(_)", "Option");
    return ouc;
  };    // end of method full(_)
  func56.paramTypes = [];
  func56.paramTypes.push([]);
  this.methods["full(1)"] = func56;
  func56.methodName = "full(1)";
  func56.paramCounts = [1];
  func56.paramNames = ["contents"];
  func56.typeParamNames = ["T"];
  func56.definitionLine = 34;
  func56.definitionModule = "option";
  var func58 = function(argcv, var_contents, inheritingObject, aliases, exclusions, var_T) {    // method full(_)$build(_,_,_), line 34
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("full(_)", 1, numArgs - 1);
    }
    assertTypeOrMsg(var_contents, var_T, "argument to request of `full(_)`", "T");
    var obj59_build = function(ignore, var_contents, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_option_34");
      this.outer_option_34 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(35);    // reuse call
      var initFun60 = selfRequest(importedModules["option"], "optionAsCollection$build(3)", [null], this, [], []);  // compileReuseCall
      setLineNumber(36);    // reuse call
      var initFun61 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.value = undefined;
      var reader62_value = function() {  // reader method value
          if (this.data.value === undefined) raiseUninitializedVariable("value");
          return this.data.value;
      };
      reader62_value.isDef = true;
      this.methods["value"] = reader62_value;
      var func63 = function(argcv, var___95____95__5) {    // method valueIfEmpty(_), line 38
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("valueIfEmpty(_)", 0, numArgs - 1);
        }
        setLineNumber(38);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call64 = selfRequest(this, "value", [0]);
        return call64;
      };    // end of method valueIfEmpty(_)
      this.methods["valueIfEmpty(1)"] = func63;
      func63.methodName = "valueIfEmpty(1)";
      func63.paramCounts = [1];
      func63.paramNames = ["__5"];
      func63.definitionLine = 38;
      func63.definitionModule = "option";
      var func65 = function(argcv) {    // method asString, line 39
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(39);    // compilenode string
        var string66 = new GraceString("option.full(");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call67 = selfRequest(this, "value", [0]);
        var opresult68 = request(string66, "++(1)", [1], call67);
        var string69 = new GraceString(")");
        var opresult70 = request(opresult68, "++(1)", [1], string69);
        return opresult70;
      };    // end of method asString
      this.methods["asString"] = func65;
      func65.methodName = "asString";
      func65.paramCounts = [0];
      func65.paramNames = [];
      func65.definitionLine = 39;
      func65.definitionModule = "option";
      var func71 = function(argcv) {    // method first, line 40
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("first", 0, numArgs - 0);
        }
        setLineNumber(40);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call72 = selfRequest(this, "value", [0]);
        return call72;
      };    // end of method first
      this.methods["first"] = func71;
      func71.methodName = "first";
      func71.paramCounts = [0];
      func71.paramNames = [];
      func71.definitionLine = 40;
      func71.definitionModule = "option";
      var func73 = function(argcv, var_action) {    // method do(_), line 41
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("do(_)", 0, numArgs - 1);
        }
        setLineNumber(41);    // compilenode member
        // call case 2: outer request
        var call74 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_action, call74, "argument to request of `do(_)`", "Function1");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call76 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call75 = request(var_action, "apply(1)", [1], call76);
        return call75;
      };    // end of method do(_)
      this.methods["do(1)"] = func73;
      func73.methodName = "do(1)";
      func73.paramCounts = [1];
      func73.paramNames = ["action"];
      func73.definitionLine = 41;
      func73.definitionModule = "option";
      var func77 = function(argcv, var_action) {    // method keysAndValuesDo(_), line 42
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
        }
        setLineNumber(42);    // compilenode member
        // call case 2: outer request
        var call78 = selfRequest(var_prelude, "Function2", [0]);
        assertTypeOrMsg(var_action, call78, "argument to request of `keysAndValuesDo(_)`", "Function2");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call80 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call79 = request(var_action, "apply(2)", [2], new GraceNum(1), call80);
        return call79;
      };    // end of method keysAndValuesDo(_)
      this.methods["keysAndValuesDo(1)"] = func77;
      func77.methodName = "keysAndValuesDo(1)";
      func77.paramCounts = [1];
      func77.paramNames = ["action"];
      func77.definitionLine = 42;
      func77.definitionModule = "option";
      var func81 = function(argcv, var_v) {    // method contains(_), line 43
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("contains(_)", 0, numArgs - 1);
        }
        setLineNumber(43);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call82 = selfRequest(this, "value", [0]);
        var opresult83 = request(call82, "==(1)", [1], var_v);
        return opresult83;
      };    // end of method contains(_)
      this.methods["contains(1)"] = func81;
      func81.methodName = "contains(1)";
      func81.paramCounts = [1];
      func81.paramNames = ["v"];
      func81.definitionLine = 43;
      func81.definitionModule = "option";
      var func84 = function(argcv) {    // method indices, line 44
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("indices", 0, numArgs - 0);
        }
        setLineNumber(44);    // compilenode num
        var array86 = new GraceSequence([new GraceNum(1)]);
        // call case 2: outer request
        var call85 = selfRequest(var_prelude, "sequence(1)", [1], array86);
        return call85;
      };    // end of method indices
      this.methods["indices"] = func84;
      func84.methodName = "indices";
      func84.paramCounts = [0];
      func84.paramNames = [];
      func84.definitionLine = 44;
      func84.definitionModule = "option";
      var func87 = function(argcv) {    // method keys, line 45
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("keys", 0, numArgs - 0);
        }
        setLineNumber(45);    // compilenode num
        var array89 = new GraceSequence([new GraceNum(1)]);
        // call case 2: outer request
        var call88 = selfRequest(var_prelude, "sequence(1)", [1], array89);
        return call88;
      };    // end of method keys
      this.methods["keys"] = func87;
      func87.methodName = "keys";
      func87.paramCounts = [0];
      func87.paramNames = [];
      func87.definitionLine = 45;
      func87.definitionModule = "option";
      var func90 = function(argcv, var_other) {    // method ==(_), line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(47);    // compilenode matchcase
        var cases91 = [];
        setLineNumber(48);    // compilenode block
        var block92 = new GraceBlock(this, 48, 1);
        // call case 2: outer request
        var call93 = selfRequest(var_prelude, "Collection", [0]);
        block92.paramTypes = [call93];
        var matches94 = function(var_c) {
          // call case 2: outer request
          var call95 = selfRequest(var_prelude, "Collection", [0]);
          if (!Grace_isTrue(request(call95, "matches(1)", [1], var_c)))
              return false;
          return true;
        };
        block92.guard = matches94;
        block92.real = function block92(var_c) {
          setLineNumber(48);    // compilenode member
          // call case 6: other requests
          var call96 = request(var_c, "size", [0]);
          var opresult97 = request(call96, "==(1)", [1], new GraceNum(1));
          var block98 = new GraceBlock(this, 48, 0);
          block98.guard = jsTrue;
          block98.real = function block98() {
            setLineNumber(48);    // compilenode member
            // call case 6: other requests
            var call99 = request(var_c, "first", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call100 = selfRequest(this, "value", [0]);
            var opresult101 = request(call99, "==(1)", [1], call100);
            return opresult101;
          };
          let applyMeth98 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth98.methodName = "apply";
          applyMeth98.paramCounts = [0];
          applyMeth98.paramNames = [];
          applyMeth98.definitionLine = 48;
          applyMeth98.definitionModule = "option";
          block98.methods["apply"] = applyMeth98;
          var opresult102 = request(opresult97, "&&(1)", [1], block98);
          return opresult102;
        };
        let applyMeth92 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth92.methodName = "apply(1)";
        applyMeth92.paramCounts = [1];
        applyMeth92.paramNames = ["c"];
        applyMeth92.definitionLine = 48;
        applyMeth92.definitionModule = "option";
        block92.methods["apply(1)"] = applyMeth92;
        let matchesMeth92 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth92.methodName = "matches(1)";
        matchesMeth92.paramCounts = [1];
        matchesMeth92.paramNames = ["c"];
        matchesMeth92.definitionLine = 48;
        matchesMeth92.definitionModule = "option";
        block92.methods["matches(1)"] = matchesMeth92;
        cases91.push(block92);
        setLineNumber(49);    // compilenode block
        var block103 = new GraceBlock(this, 49, 0);
        block103.guard = jsTrue;
        block103.real = function block103() {
          setLineNumber(49);    // compileBlock
          return GraceFalse;
        };
        let applyMeth103 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth103.methodName = "apply";
        applyMeth103.paramCounts = [0];
        applyMeth103.paramNames = [];
        applyMeth103.definitionLine = 49;
        applyMeth103.definitionModule = "option";
        block103.methods["apply"] = applyMeth103;
        setLineNumber(47);    // compilematchcase
        var matchres91 = matchCase(var_other,cases91,block103);
        return matchres91;
      };    // end of method ==(_)
      this.methods["==(1)"] = func90;
      func90.methodName = "==(1)";
      func90.paramCounts = [1];
      func90.paramNames = ["other"];
      func90.definitionLine = 46;
      func90.definitionModule = "option";
      var func104 = function(argcv) {    // method iterator, line 51
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("full(_).iterator", "option", 51);
        var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method iterator
      this.methods["iterator"] = func104;
      func104.methodName = "iterator";
      func104.paramCounts = [0];
      func104.paramNames = [];
      func104.definitionLine = 51;
      func104.definitionModule = "option";
      var func105 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 51
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var obj106_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_option_51");
          this.outer_option_51 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.hasNext = undefined;
          var reader107_hasNext = function() {  // reader method hasNext
              if (this.data.hasNext === undefined) raiseUninitializedVariable("hasNext");
              return this.data.hasNext;
          };
          reader107_hasNext.isVar = true;
          this.methods["hasNext"] = reader107_hasNext;
          var writer108_hasNext = function(argcv, n) {   // writer method hasNext:=(_)
            this.data.hasNext = n;
            return GraceDone;
          };
          writer108_hasNext.confidential = true;
          this.methods["hasNext:=(1)"] = writer108_hasNext;
          var func109 = function(argcv) {    // method asString, line 53
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(53);    // compilenode string
            var string110 = new GraceString("iterator over ");
            var opresult111 = request(string110, "++(1)", [1], this);
            var string112 = new GraceString("");
            var opresult113 = request(opresult111, "++(1)", [1], string112);
            return opresult113;
          };    // end of method asString
          this.methods["asString"] = func109;
          func109.methodName = "asString";
          func109.paramCounts = [0];
          func109.paramNames = [];
          func109.definitionLine = 53;
          func109.definitionModule = "option";
          var func114 = function(argcv) {    // method next, line 54
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("next", 0, numArgs - 0);
            }
            var if115 = GraceDone;
            setLineNumber(55);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call116 = selfRequest(this, "hasNext", [0]);
            if (Grace_isTrue(call116)) {
              setLineNumber(56);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call117 = selfRequest(this, "hasNext:=(1)", [1], GraceFalse);
              setLineNumber(57);    // compilenode member
              // call case 2: outer request
              var call118 = selfRequest(this.outer_option_51, "value", [0]);
              if115 = call118;
            } else {
              setLineNumber(59);    // compilenode string
              var string120 = new GraceString("");
              var opresult121 = request(string120, "++(1)", [1], this);
              var string122 = new GraceString(" contains just one value.");
              var opresult123 = request(opresult121, "++(1)", [1], string122);
              // call case 6: other requests
              // call case 2: outer request
              var call124 = selfRequest(var_prelude, "IteratorExhausted", [0]);
              var call119 = request(call124, "raise(1)", [1], opresult123);
              if115 = call119;
            }
            return if115;
          };    // end of method next
          this.methods["next"] = func114;
          func114.methodName = "next";
          func114.paramCounts = [0];
          func114.paramNames = [];
          func114.definitionLine = 54;
          func114.definitionModule = "option";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 51;
              m.definitionModule = "option";
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
          var obj106_init = function() {    // init of object on line 51
            this.data.hasNext = GraceTrue;
          };
          return obj106_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj106_init = obj106_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj106_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method iterator$build(_,_,_)
      this.methods["iterator$build(3)"] = func105;
      func105.methodName = "iterator$build(3)";
      func105.paramCounts = [0];
      func105.paramNames = [];
      func105.definitionLine = 51;
      func105.definitionModule = "option";
      var func125 = function(argcv) {     // accessor method isEmpty
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isEmpty", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func125;
      func125.methodName = "isEmpty";
      func125.paramCounts = [0];
      func125.paramNames = [];
      func125.definitionLine = 63;
      func125.definitionModule = "option";
      var func126 = function(argcv) {    // method size, line 64
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(64);    // typecheck
        assertTypeOrMsg(new GraceNum(1), var_Number, "result of method size", "Number");
        return new GraceNum(1);
      };    // end of method size
      this.methods["size"] = func126;
      func126.methodName = "size";
      func126.paramCounts = [0];
      func126.paramNames = [];
      func126.definitionLine = 64;
      func126.definitionModule = "option";
      var func127 = function(argcv, var_action) {    // method sizeIfUnknown(_), line 65
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(65);    // compilenode num
        return new GraceNum(1);
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func127;
      func127.methodName = "sizeIfUnknown(1)";
      func127.paramCounts = [1];
      func127.paramNames = ["action"];
      func127.definitionLine = 65;
      func127.definitionModule = "option";
      var func128 = function(argcv, var_ix) {    // method at(_), line 66
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("at(_)", 0, numArgs - 1);
        }
        var if129 = GraceDone;
        setLineNumber(67);    // compilenode num
        var opresult130 = request(var_ix, "==(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult130)) {
          setLineNumber(68);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call131 = selfRequest(this, "value", [0]);
          if129 = call131;
        } else {
          setLineNumber(70);    // compilenode string
          var string133 = new GraceString("attemp to use index ");
          var opresult134 = request(string133, "++(1)", [1], var_ix);
          var string135 = new GraceString(" on ");
          var opresult136 = request(opresult134, "++(1)", [1], string135);
          var opresult137 = request(opresult136, "++(1)", [1], this);
          var string138 = new GraceString(".");
          var opresult139 = request(opresult137, "++(1)", [1], string138);
          // call case 6: other requests
          // call case 2: outer request
          var call140 = selfRequest(var_prelude, "BoundsError", [0]);
          var call132 = request(call140, "raise(1)", [1], opresult139);
          if129 = call132;
        }
        return if129;
      };    // end of method at(_)
      this.methods["at(1)"] = func128;
      func128.methodName = "at(1)";
      func128.paramCounts = [1];
      func128.paramNames = ["ix"];
      func128.definitionLine = 66;
      func128.definitionModule = "option";
      var func141 = function(argcv, var_ix, var_action) {    // method at(_)ifAbsent(_), line 73
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
        }
        var if142 = GraceDone;
        setLineNumber(74);    // compilenode num
        var opresult143 = request(var_ix, "==(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult143)) {
          setLineNumber(75);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call144 = selfRequest(this, "value", [0]);
          if142 = call144;
        } else {
          setLineNumber(77);    // compilenode member
          // call case 6: other requests
          var call145 = request(var_action, "apply", [0]);
          if142 = call145;
        }
        return if142;
      };    // end of method at(_)ifAbsent(_)
      this.methods["at(1)ifAbsent(1)"] = func141;
      func141.methodName = "at(1)ifAbsent(1)";
      func141.paramCounts = [1, 1];
      func141.paramNames = ["ix", "action"];
      func141.definitionLine = 73;
      func141.definitionModule = "option";
      var func146 = function(argcv) {     // accessor method isFull
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isFull", 0, numArgs - 0);
        return GraceTrue;
      };    // end of method isFull
      this.methods["isFull"] = func146;
      func146.methodName = "isFull";
      func146.paramCounts = [0];
      func146.paramNames = [];
      func146.definitionLine = 80;
      func146.definitionModule = "option";
      var func147 = function(argcv, var_fAction, var_eAction, var_U) {    // method ifFull(_)ifEmpty(_), line 81
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("ifFull(_)ifEmpty(_)", 1, numArgs - 2);
        }
        setLineNumber(81);    // compilenode member
        // call case 2: outer request
        var call148 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_fAction, call148, "argument 1 in request of `ifFull(_)ifEmpty(_)`", "Function1");
        // call case 2: outer request
        var call149 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eAction, call149, "argument 2 in request of `ifFull(_)ifEmpty(_)`", "Function0");
        setLineNumber(82);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call151 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call150 = request(var_fAction, "apply(1)", [1], call151);
        assertTypeOrMsg(call150, var_U, "result of method ifFull(_)ifEmpty(_)", "U");
        return call150;
      };    // end of method ifFull(_)ifEmpty(_)
      this.methods["ifFull(1)ifEmpty(1)"] = func147;
      func147.methodName = "ifFull(1)ifEmpty(1)";
      func147.paramCounts = [1, 1];
      func147.paramNames = ["fAction", "eAction"];
      func147.typeParamNames = ["U"];
      func147.definitionLine = 81;
      func147.definitionModule = "option";
      var func152 = function(argcv, var_eAction, var_fAction, var_U) {    // method ifEmpty(_)ifFull(_), line 84
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("ifEmpty(_)ifFull(_)", 1, numArgs - 2);
        }
        setLineNumber(84);    // compilenode member
        // call case 2: outer request
        var call153 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eAction, call153, "argument 1 in request of `ifEmpty(_)ifFull(_)`", "Function0");
        // call case 2: outer request
        var call154 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_fAction, call154, "argument 2 in request of `ifEmpty(_)ifFull(_)`", "Function1");
        setLineNumber(85);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call156 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call155 = request(var_fAction, "apply(1)", [1], call156);
        assertTypeOrMsg(call155, var_U, "result of method ifEmpty(_)ifFull(_)", "U");
        return call155;
      };    // end of method ifEmpty(_)ifFull(_)
      this.methods["ifEmpty(1)ifFull(1)"] = func152;
      func152.methodName = "ifEmpty(1)ifFull(1)";
      func152.paramCounts = [1, 1];
      func152.paramNames = ["eAction", "fAction"];
      func152.typeParamNames = ["U"];
      func152.definitionLine = 84;
      func152.definitionModule = "option";
      var func157 = function(argcv, var_fAction) {    // method ifFull(_), line 87
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("ifFull(_)", 0, numArgs - 1);
        }
        setLineNumber(87);    // compilenode member
        // call case 2: outer request
        var call158 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_fAction, call158, "argument to request of `ifFull(_)`", "Function1");
        setLineNumber(88);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call160 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call159 = request(var_fAction, "apply(1)", [1], call160);
        return var_done;
      };    // end of method ifFull(_)
      this.methods["ifFull(1)"] = func157;
      func157.methodName = "ifFull(1)";
      func157.paramCounts = [1];
      func157.paramNames = ["fAction"];
      func157.definitionLine = 87;
      func157.definitionModule = "option";
      var func161 = function(argcv, var_eAction) {     // accessor method ifEmpty(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("ifEmpty(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method ifEmpty(_)
      this.methods["ifEmpty(1)"] = func161;
      func161.methodName = "ifEmpty(1)";
      func161.paramCounts = [1];
      func161.paramNames = ["eAction"];
      func161.definitionLine = 91;
      func161.definitionModule = "option";
      var func162 = function(argcv, var_sought, var_action, var_W) {    // method indexOf(_)ifAbsent(_), line 92
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_W) var_W = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("indexOf(_)ifAbsent(_)", 1, numArgs - 2);
        }
        assertTypeOrMsg(var_sought, var_T, "argument 1 in request of `indexOf(_)ifAbsent(_)`", "T");
        setLineNumber(92);    // compilenode member
        // call case 2: outer request
        var call163 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_action, call163, "argument 2 in request of `indexOf(_)ifAbsent(_)`", "Function0");
        var if164 = GraceDone;
        setLineNumber(93);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call165 = selfRequest(this, "value", [0]);
        var opresult166 = request(call165, "==(1)", [1], var_sought);
        if (Grace_isTrue(opresult166)) {
          if164 = new GraceNum(1);
        } else {
          setLineNumber(94);    // compilenode member
          // call case 6: other requests
          var call167 = request(var_action, "apply", [0]);
          if164 = call167;
        }
        setLineNumber(93);    // typecheck
        assertTypeOrMsg(if164, var_W, "result of method indexOf(_)ifAbsent(_)", "W");
        return if164;
      };    // end of method indexOf(_)ifAbsent(_)
      func162.paramTypes = [];
      func162.paramTypes.push([]);
      func162.paramTypes.push([]);
      this.methods["indexOf(1)ifAbsent(1)"] = func162;
      func162.methodName = "indexOf(1)ifAbsent(1)";
      func162.paramCounts = [1, 1];
      func162.paramNames = ["sought", "action"];
      func162.typeParamNames = ["W"];
      func162.definitionLine = 92;
      func162.definitionModule = "option";
      var func168 = function(argcv, var_sought) {    // method indexOf(_), line 96
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("indexOf(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_sought, var_T, "argument to request of `indexOf(_)`", "T");
        var if169 = GraceDone;
        setLineNumber(97);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call170 = selfRequest(this, "value", [0]);
        var opresult171 = request(call170, "==(1)", [1], var_sought);
        if (Grace_isTrue(opresult171)) {
          if169 = new GraceNum(1);
        } else {
          setLineNumber(98);    // compilenode string
          var string173 = new GraceString("collection does not contain ");
          var opresult174 = request(string173, "++(1)", [1], var_sought);
          var string175 = new GraceString("");
          var opresult176 = request(opresult174, "++(1)", [1], string175);
          // call case 6: other requests
          // call case 2: outer request
          var call177 = selfRequest(var_prelude, "NoSuchObject", [0]);
          var call172 = request(call177, "raise(1)", [1], opresult176);
          if169 = call172;
        }
        setLineNumber(97);    // typecheck
        assertTypeOrMsg(if169, var_Number, "result of method indexOf(_)", "Number");
        return if169;
      };    // end of method indexOf(_)
      func168.paramTypes = [];
      func168.paramTypes.push([]);
      this.methods["indexOf(1)"] = func168;
      func168.methodName = "indexOf(1)";
      func168.paramCounts = [1];
      func168.paramNames = ["sought"];
      func168.definitionLine = 96;
      func168.definitionModule = "option";
      var func178 = function(argcv, var_other) {    // method ++(_), line 100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("++(_)", 0, numArgs - 1);
        }
        setLineNumber(100);    // compilenode member
        // call case 2: outer request
        var call179 = selfRequest(var_prelude, "Collection", [0]);
        assertTypeOrMsg(var_other, call179, "argument to request of `++(_)`", "Collection");
        setLineNumber(101);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call181 = selfRequest(var_prelude, "collections", [0]);
        var call180 = request(call181, "lazyConcatenation(2)", [2], this, var_other);
        setLineNumber(100);    // compilenode member
        // call case 2: outer request
        var call182 = selfRequest(var_prelude, "Collection", [0]);
        setLineNumber(101);    // typecheck
        assertTypeOrMsg(call180, call182, "result of method ++(_)", "Collection");
        return call180;
      };    // end of method ++(_)
      this.methods["++(1)"] = func178;
      func178.methodName = "++(1)";
      func178.paramCounts = [1];
      func178.paramNames = ["other"];
      func178.definitionLine = 100;
      func178.definitionModule = "option";
      var func183 = function(argcv, var_binaryFunction, var_initial) {    // method fold(_)startingWith(_), line 103
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("fold(_)startingWith(_)", 0, numArgs - 2);
        }
        setLineNumber(103);    // compilenode member
        // call case 2: outer request
        var call184 = selfRequest(var_prelude, "Function2", [0]);
        assertTypeOrMsg(var_binaryFunction, call184, "argument 1 in request of `fold(_)startingWith(_)`", "Function2");
        assertTypeOrMsg(var_initial, var_T, "argument 2 in request of `fold(_)startingWith(_)`", "T");
        setLineNumber(104);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call186 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call185 = request(var_binaryFunction, "apply(2)", [2], var_initial, call186);
        assertTypeOrMsg(call185, var_T, "result of method fold(_)startingWith(_)", "T");
        return call185;
      };    // end of method fold(_)startingWith(_)
      func183.paramTypes = [];
      func183.paramTypes.push([]);
      func183.paramTypes.push([]);
      this.methods["fold(1)startingWith(1)"] = func183;
      func183.methodName = "fold(1)startingWith(1)";
      func183.paramCounts = [1, 1];
      func183.paramNames = ["binaryFunction", "initial"];
      func183.definitionLine = 103;
      func183.definitionModule = "option";
      var func187 = function(argcv, var_function, var_U) {    // method map(_), line 106
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 2)) {
            raiseTypeArgError("map(_)", 1, numArgs - 1);
        }
        setLineNumber(106);    // compilenode member
        // call case 2: outer request
        var call188 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_function, call188, "argument to request of `map(_)`", "Function1");
        setLineNumber(107);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call191 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call190 = request(var_function, "apply(1)", [1], call191);
        // call case 2: outer request
        var call189 = selfRequest(importedModules["option"], "full(1)", [1], call190);
        setLineNumber(106);    // compilenode member
        // call case 2: outer request
        var call192 = selfRequest(importedModules["option"], "Option", [0]);
        setLineNumber(107);    // typecheck
        assertTypeOrMsg(call189, call192, "result of method map(_)", "Option");
        return call189;
      };    // end of method map(_)
      this.methods["map(1)"] = func187;
      func187.methodName = "map(1)";
      func187.paramCounts = [1];
      func187.paramNames = ["function"];
      func187.typeParamNames = ["U"];
      func187.definitionLine = 106;
      func187.definitionModule = "option";
      var func193 = function(argcv, var_condition) {    // method filter(_), line 109
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("filter(_)", 0, numArgs - 1);
        }
        setLineNumber(109);    // compilenode member
        // call case 2: outer request
        var call194 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_condition, call194, "argument to request of `filter(_)`", "Function1");
        var if195 = GraceDone;
        setLineNumber(110);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call197 = selfRequest(this, "value", [0]);
        // call case 6: other requests
        var call196 = request(var_condition, "apply(1)", [1], call197);
        if (Grace_isTrue(call196)) {
          if195 = this;
        } else {
          // call case 2: outer request
          var call198 = selfRequest(importedModules["option"], "empty", [0, 1], var_T);
          if195 = call198;
        }
        setLineNumber(109);    // compilenode member
        // call case 2: outer request
        var call199 = selfRequest(var_prelude, "Collection", [0]);
        setLineNumber(110);    // typecheck
        assertTypeOrMsg(if195, call199, "result of method filter(_)", "Collection");
        return if195;
      };    // end of method filter(_)
      this.methods["filter(1)"] = func193;
      func193.methodName = "filter(1)";
      func193.paramCounts = [1];
      func193.paramNames = ["condition"];
      func193.definitionLine = 109;
      func193.definitionModule = "option";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 34;
          m.definitionModule = "option";
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
      var obj59_init = function() {    // init of object on line 34
        this.data.value = var_contents;
      };
      return obj59_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj59_init = obj59_build.call(inheritingObject, null, var_contents, this, aliases, exclusions, var_T);
    return obj59_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method full(_)$build(_,_,_)
  func58.paramTypes = [];
  func58.paramTypes.push([]);
  this.methods["full(1)$build(3)"] = func58;
  func58.methodName = "full(1)$build(3)";
  func58.paramCounts = [1];
  func58.paramNames = ["contents"];
  func58.typeParamNames = ["T"];
  func58.definitionLine = 34;
  func58.definitionModule = "option";
  var func200 = function(argcv, var_T) {    // method empty, line 113
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("empty", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("empty", "option", 113);
    var ouc_init = this.methods["empty$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    setLineNumber(113);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call201 = selfRequest(this, "Option", [0]);
    setLineNumber(164);    // typecheck
    assertTypeOrMsg(ouc, call201, "object returned from empty", "Option");
    return ouc;
  };    // end of method empty
  this.methods["empty"] = func200;
  func200.methodName = "empty";
  func200.paramCounts = [0];
  func200.paramNames = [];
  func200.typeParamNames = ["T"];
  func200.definitionLine = 113;
  func200.definitionModule = "option";
  var func202 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method empty$build(_,_,_), line 113
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("empty", 1, numArgs - 0);
    }
    var obj203_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_option_113");
      this.outer_option_113 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(114);    // reuse call
      var initFun204 = selfRequest(importedModules["option"], "optionAsCollection$build(3)", [null], this, [], []);  // compileReuseCall
      setLineNumber(115);    // reuse call
      var initFun205 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
      var func206 = function(argcv) {    // method asString, line 116
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(116);    // compilenode string
        var string207 = new GraceString("option.empty");
        return string207;
      };    // end of method asString
      this.methods["asString"] = func206;
      func206.methodName = "asString";
      func206.paramCounts = [0];
      func206.paramNames = [];
      func206.definitionLine = 116;
      func206.definitionModule = "option";
      var func208 = function(argcv) {    // method value, line 117
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("value", 0, numArgs - 0);
        }
        setLineNumber(117);    // compilenode string
        var string210 = new GraceString("");
        var opresult211 = request(string210, "++(1)", [1], this);
        var string212 = new GraceString(" has no value.");
        var opresult213 = request(opresult211, "++(1)", [1], string212);
        // call case 6: other requests
        if (var_ValueError === undefined) raiseUninitializedVariable("ValueError");
        var call209 = request(var_ValueError, "raise(1)", [1], opresult213);
        assertTypeOrMsg(call209, var_T, "result of method value", "T");
        return call209;
      };    // end of method value
      this.methods["value"] = func208;
      func208.methodName = "value";
      func208.paramCounts = [0];
      func208.paramNames = [];
      func208.definitionLine = 117;
      func208.definitionModule = "option";
      var func214 = function(argcv, var_eValue) {    // method valueIfEmpty(_), line 118
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("valueIfEmpty(_)", 0, numArgs - 1);
        }
        setLineNumber(118);    // compilenode member
        // call case 2: outer request
        var call215 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eValue, call215, "argument to request of `valueIfEmpty(_)`", "Function0");
        // call case 6: other requests
        var call216 = request(var_eValue, "apply", [0]);
        return call216;
      };    // end of method valueIfEmpty(_)
      this.methods["valueIfEmpty(1)"] = func214;
      func214.methodName = "valueIfEmpty(1)";
      func214.paramCounts = [1];
      func214.paramNames = ["eValue"];
      func214.definitionLine = 118;
      func214.definitionModule = "option";
      var func217 = function(argcv) {    // method first, line 119
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("first", 0, numArgs - 0);
        }
        setLineNumber(119);    // compilenode string
        var string219 = new GraceString("attemp to use first on ");
        var opresult220 = request(string219, "++(1)", [1], this);
        var string221 = new GraceString(".");
        var opresult222 = request(opresult220, "++(1)", [1], string221);
        // call case 6: other requests
        // call case 2: outer request
        var call223 = selfRequest(var_prelude, "BoundsError", [0]);
        var call218 = request(call223, "raise(1)", [1], opresult222);
        return call218;
      };    // end of method first
      this.methods["first"] = func217;
      func217.methodName = "first";
      func217.paramCounts = [0];
      func217.paramNames = [];
      func217.definitionLine = 119;
      func217.definitionModule = "option";
      var func224 = function(argcv, var_action) {     // accessor method do(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("do(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method do(_)
      this.methods["do(1)"] = func224;
      func224.methodName = "do(1)";
      func224.paramCounts = [1];
      func224.paramNames = ["action"];
      func224.definitionLine = 120;
      func224.definitionModule = "option";
      var func225 = function(argcv, var_action) {     // accessor method keysAndValuesDo(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method keysAndValuesDo(_)
      this.methods["keysAndValuesDo(1)"] = func225;
      func225.methodName = "keysAndValuesDo(1)";
      func225.paramCounts = [1];
      func225.paramNames = ["action"];
      func225.definitionLine = 121;
      func225.definitionModule = "option";
      var func226 = function(argcv, var___95____95__6) {     // accessor method contains(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("contains(_)", 0, numArgs - 1);
        return GraceFalse;
      };    // end of method contains(_)
      this.methods["contains(1)"] = func226;
      func226.methodName = "contains(1)";
      func226.paramCounts = [1];
      func226.paramNames = ["__6"];
      func226.definitionLine = 122;
      func226.definitionModule = "option";
      var func227 = function(argcv) {    // method indices, line 123
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("indices", 0, numArgs - 0);
        }
        setLineNumber(123);    // compilenode member
        // call case 2: outer request
        var call228 = selfRequest(var_prelude, "emptySequence", [0]);
        return call228;
      };    // end of method indices
      this.methods["indices"] = func227;
      func227.methodName = "indices";
      func227.paramCounts = [0];
      func227.paramNames = [];
      func227.definitionLine = 123;
      func227.definitionModule = "option";
      var func229 = function(argcv) {    // method keys, line 124
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("keys", 0, numArgs - 0);
        }
        setLineNumber(124);    // compilenode member
        // call case 2: outer request
        var call230 = selfRequest(var_prelude, "emptySequence", [0]);
        return call230;
      };    // end of method keys
      this.methods["keys"] = func229;
      func229.methodName = "keys";
      func229.paramCounts = [0];
      func229.paramNames = [];
      func229.definitionLine = 124;
      func229.definitionModule = "option";
      var func231 = function(argcv, var_other) {    // method ==(_), line 125
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(126);    // compilenode matchcase
        var cases232 = [];
        setLineNumber(127);    // compilenode block
        var block233 = new GraceBlock(this, 127, 1);
        // call case 2: outer request
        var call234 = selfRequest(var_prelude, "Collection", [0]);
        block233.paramTypes = [call234];
        var matches235 = function(var_c) {
          // call case 2: outer request
          var call236 = selfRequest(var_prelude, "Collection", [0]);
          if (!Grace_isTrue(request(call236, "matches(1)", [1], var_c)))
              return false;
          return true;
        };
        block233.guard = matches235;
        block233.real = function block233(var_c) {
          setLineNumber(127);    // compilenode member
          // call case 6: other requests
          var call237 = request(var_c, "isEmpty", [0]);
          return call237;
        };
        let applyMeth233 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth233.methodName = "apply(1)";
        applyMeth233.paramCounts = [1];
        applyMeth233.paramNames = ["c"];
        applyMeth233.definitionLine = 127;
        applyMeth233.definitionModule = "option";
        block233.methods["apply(1)"] = applyMeth233;
        let matchesMeth233 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth233.methodName = "matches(1)";
        matchesMeth233.paramCounts = [1];
        matchesMeth233.paramNames = ["c"];
        matchesMeth233.definitionLine = 127;
        matchesMeth233.definitionModule = "option";
        block233.methods["matches(1)"] = matchesMeth233;
        cases232.push(block233);
        setLineNumber(128);    // compilenode block
        var block238 = new GraceBlock(this, 128, 0);
        block238.guard = jsTrue;
        block238.real = function block238() {
          setLineNumber(128);    // compileBlock
          return GraceFalse;
        };
        let applyMeth238 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth238.methodName = "apply";
        applyMeth238.paramCounts = [0];
        applyMeth238.paramNames = [];
        applyMeth238.definitionLine = 128;
        applyMeth238.definitionModule = "option";
        block238.methods["apply"] = applyMeth238;
        setLineNumber(126);    // compilematchcase
        var matchres232 = matchCase(var_other,cases232,block238);
        return matchres232;
      };    // end of method ==(_)
      this.methods["==(1)"] = func231;
      func231.methodName = "==(1)";
      func231.paramCounts = [1];
      func231.paramNames = ["other"];
      func231.definitionLine = 125;
      func231.definitionModule = "option";
      var func239 = function(argcv) {    // method iterator, line 130
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("empty.iterator", "option", 130);
        var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method iterator
      this.methods["iterator"] = func239;
      func239.methodName = "iterator";
      func239.paramCounts = [0];
      func239.paramNames = [];
      func239.definitionLine = 130;
      func239.definitionModule = "option";
      var func240 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 130
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var obj241_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_option_130");
          this.outer_option_130 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          var func242 = function(argcv) {     // accessor method hasNext
            const numArgs = arguments.length - 1;
            if (numArgs > 0) raiseTypeArgError("hasNext", 0, numArgs - 0);
            return GraceFalse;
          };    // end of method hasNext
          this.methods["hasNext"] = func242;
          func242.methodName = "hasNext";
          func242.paramCounts = [0];
          func242.paramNames = [];
          func242.definitionLine = 131;
          func242.definitionModule = "option";
          var func243 = function(argcv) {    // method asString, line 132
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(132);    // compilenode string
            var string244 = new GraceString("iterator over ");
            var opresult245 = request(string244, "++(1)", [1], this);
            var string246 = new GraceString("");
            var opresult247 = request(opresult245, "++(1)", [1], string246);
            return opresult247;
          };    // end of method asString
          this.methods["asString"] = func243;
          func243.methodName = "asString";
          func243.paramCounts = [0];
          func243.paramNames = [];
          func243.definitionLine = 132;
          func243.definitionModule = "option";
          var func248 = function(argcv) {    // method next, line 133
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("next", 0, numArgs - 0);
            }
            setLineNumber(133);    // compilenode string
            var string250 = new GraceString("");
            var opresult251 = request(string250, "++(1)", [1], this);
            var string252 = new GraceString(" contains no values.");
            var opresult253 = request(opresult251, "++(1)", [1], string252);
            // call case 6: other requests
            // call case 2: outer request
            var call254 = selfRequest(var_prelude, "IteratorExhausted", [0]);
            var call249 = request(call254, "raise(1)", [1], opresult253);
            return call249;
          };    // end of method next
          this.methods["next"] = func248;
          func248.methodName = "next";
          func248.paramCounts = [0];
          func248.paramNames = [];
          func248.definitionLine = 133;
          func248.definitionModule = "option";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 130;
              m.definitionModule = "option";
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
          var obj241_init = function() {    // init of object on line 130
          };
          return obj241_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj241_init = obj241_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj241_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method iterator$build(_,_,_)
      this.methods["iterator$build(3)"] = func240;
      func240.methodName = "iterator$build(3)";
      func240.paramCounts = [0];
      func240.paramNames = [];
      func240.definitionLine = 130;
      func240.definitionModule = "option";
      var func255 = function(argcv) {     // accessor method isEmpty
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isEmpty", 0, numArgs - 0);
        return GraceTrue;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func255;
      func255.methodName = "isEmpty";
      func255.paramCounts = [0];
      func255.paramNames = [];
      func255.definitionLine = 135;
      func255.definitionModule = "option";
      var func256 = function(argcv) {    // method size, line 136
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(136);    // typecheck
        assertTypeOrMsg(new GraceNum(0), var_Number, "result of method size", "Number");
        return new GraceNum(0);
      };    // end of method size
      this.methods["size"] = func256;
      func256.methodName = "size";
      func256.paramCounts = [0];
      func256.paramNames = [];
      func256.definitionLine = 136;
      func256.definitionModule = "option";
      var func257 = function(argcv, var_action) {    // method sizeIfUnknown(_), line 137
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(137);    // compilenode num
        return new GraceNum(0);
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func257;
      func257.methodName = "sizeIfUnknown(1)";
      func257.paramCounts = [1];
      func257.paramNames = ["action"];
      func257.definitionLine = 137;
      func257.definitionModule = "option";
      var func258 = function(argcv, var_ix) {    // method at(_), line 138
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("at(_)", 0, numArgs - 1);
        }
        setLineNumber(139);    // compilenode string
        var string260 = new GraceString("attemp to use index ");
        var opresult261 = request(string260, "++(1)", [1], var_ix);
        var string262 = new GraceString(" on ");
        var opresult263 = request(opresult261, "++(1)", [1], string262);
        var opresult264 = request(opresult263, "++(1)", [1], this);
        var string265 = new GraceString(".");
        var opresult266 = request(opresult264, "++(1)", [1], string265);
        // call case 6: other requests
        // call case 2: outer request
        var call267 = selfRequest(var_prelude, "BoundsError", [0]);
        var call259 = request(call267, "raise(1)", [1], opresult266);
        return call259;
      };    // end of method at(_)
      this.methods["at(1)"] = func258;
      func258.methodName = "at(1)";
      func258.paramCounts = [1];
      func258.paramNames = ["ix"];
      func258.definitionLine = 138;
      func258.definitionModule = "option";
      var func268 = function(argcv, var_ix, var_action) {    // method at(_)ifAbsent(_), line 141
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
        }
        setLineNumber(142);    // compilenode member
        // call case 6: other requests
        var call269 = request(var_action, "apply", [0]);
        return call269;
      };    // end of method at(_)ifAbsent(_)
      this.methods["at(1)ifAbsent(1)"] = func268;
      func268.methodName = "at(1)ifAbsent(1)";
      func268.paramCounts = [1, 1];
      func268.paramNames = ["ix", "action"];
      func268.definitionLine = 141;
      func268.definitionModule = "option";
      var func270 = function(argcv) {     // accessor method isFull
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isFull", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isFull
      this.methods["isFull"] = func270;
      func270.methodName = "isFull";
      func270.paramCounts = [0];
      func270.paramNames = [];
      func270.definitionLine = 144;
      func270.definitionModule = "option";
      var func271 = function(argcv, var_fAction, var_eAction, var_U) {    // method ifFull(_)ifEmpty(_), line 145
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("ifFull(_)ifEmpty(_)", 1, numArgs - 2);
        }
        setLineNumber(145);    // compilenode member
        // call case 2: outer request
        var call272 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_fAction, call272, "argument 1 in request of `ifFull(_)ifEmpty(_)`", "Function1");
        // call case 2: outer request
        var call273 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eAction, call273, "argument 2 in request of `ifFull(_)ifEmpty(_)`", "Function0");
        setLineNumber(146);    // compilenode member
        // call case 6: other requests
        var call274 = request(var_eAction, "apply", [0]);
        assertTypeOrMsg(call274, var_U, "result of method ifFull(_)ifEmpty(_)", "U");
        return call274;
      };    // end of method ifFull(_)ifEmpty(_)
      this.methods["ifFull(1)ifEmpty(1)"] = func271;
      func271.methodName = "ifFull(1)ifEmpty(1)";
      func271.paramCounts = [1, 1];
      func271.paramNames = ["fAction", "eAction"];
      func271.typeParamNames = ["U"];
      func271.definitionLine = 145;
      func271.definitionModule = "option";
      var func275 = function(argcv, var_eAction, var_fAction, var_U) {    // method ifEmpty(_)ifFull(_), line 148
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("ifEmpty(_)ifFull(_)", 1, numArgs - 2);
        }
        setLineNumber(148);    // compilenode member
        // call case 2: outer request
        var call276 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eAction, call276, "argument 1 in request of `ifEmpty(_)ifFull(_)`", "Function0");
        // call case 2: outer request
        var call277 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_fAction, call277, "argument 2 in request of `ifEmpty(_)ifFull(_)`", "Function1");
        setLineNumber(149);    // compilenode member
        // call case 6: other requests
        var call278 = request(var_eAction, "apply", [0]);
        assertTypeOrMsg(call278, var_U, "result of method ifEmpty(_)ifFull(_)", "U");
        return call278;
      };    // end of method ifEmpty(_)ifFull(_)
      this.methods["ifEmpty(1)ifFull(1)"] = func275;
      func275.methodName = "ifEmpty(1)ifFull(1)";
      func275.paramCounts = [1, 1];
      func275.paramNames = ["eAction", "fAction"];
      func275.typeParamNames = ["U"];
      func275.definitionLine = 148;
      func275.definitionModule = "option";
      var func279 = function(argcv, var_fAction) {     // accessor method ifFull(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("ifFull(_)", 0, numArgs - 1);
        return var_done;
      };    // end of method ifFull(_)
      this.methods["ifFull(1)"] = func279;
      func279.methodName = "ifFull(1)";
      func279.paramCounts = [1];
      func279.paramNames = ["fAction"];
      func279.definitionLine = 151;
      func279.definitionModule = "option";
      var func280 = function(argcv, var_eAction) {    // method ifEmpty(_), line 152
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("ifEmpty(_)", 0, numArgs - 1);
        }
        setLineNumber(152);    // compilenode member
        // call case 2: outer request
        var call281 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_eAction, call281, "argument to request of `ifEmpty(_)`", "Function0");
        setLineNumber(153);    // compilenode member
        // call case 6: other requests
        var call282 = request(var_eAction, "apply", [0]);
        return var_done;
      };    // end of method ifEmpty(_)
      this.methods["ifEmpty(1)"] = func280;
      func280.methodName = "ifEmpty(1)";
      func280.paramCounts = [1];
      func280.paramNames = ["eAction"];
      func280.definitionLine = 152;
      func280.definitionModule = "option";
      var func283 = function(argcv, var_elem, var_action, var_W) {    // method indexOf(_)ifAbsent(_), line 156
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_W) var_W = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("indexOf(_)ifAbsent(_)", 1, numArgs - 2);
        }
        assertTypeOrMsg(var_elem, var_T, "argument 1 in request of `indexOf(_)ifAbsent(_)`", "T");
        setLineNumber(156);    // compilenode member
        // call case 2: outer request
        var call284 = selfRequest(var_prelude, "Function0", [0]);
        assertTypeOrMsg(var_action, call284, "argument 2 in request of `indexOf(_)ifAbsent(_)`", "Function0");
        // call case 6: other requests
        var call285 = request(var_action, "apply", [0]);
        assertTypeOrMsg(call285, var_W, "result of method indexOf(_)ifAbsent(_)", "W");
        return call285;
      };    // end of method indexOf(_)ifAbsent(_)
      func283.paramTypes = [];
      func283.paramTypes.push([]);
      func283.paramTypes.push([]);
      this.methods["indexOf(1)ifAbsent(1)"] = func283;
      func283.methodName = "indexOf(1)ifAbsent(1)";
      func283.paramCounts = [1, 1];
      func283.paramNames = ["elem", "action"];
      func283.typeParamNames = ["W"];
      func283.definitionLine = 156;
      func283.definitionModule = "option";
      var func286 = function(argcv, var_sought) {    // method indexOf(_), line 157
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("indexOf(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_sought, var_T, "argument to request of `indexOf(_)`", "T");
        setLineNumber(157);    // compilenode string
        var string288 = new GraceString("collection does not contain ");
        var opresult289 = request(string288, "++(1)", [1], var_sought);
        var string290 = new GraceString("");
        var opresult291 = request(opresult289, "++(1)", [1], string290);
        // call case 6: other requests
        // call case 2: outer request
        var call292 = selfRequest(var_prelude, "NoSuchObject", [0]);
        var call287 = request(call292, "raise(1)", [1], opresult291);
        assertTypeOrMsg(call287, var_Number, "result of method indexOf(_)", "Number");
        return call287;
      };    // end of method indexOf(_)
      func286.paramTypes = [];
      func286.paramTypes.push([]);
      this.methods["indexOf(1)"] = func286;
      func286.methodName = "indexOf(1)";
      func286.paramCounts = [1];
      func286.paramNames = ["sought"];
      func286.definitionLine = 157;
      func286.definitionModule = "option";
      var func293 = function(argcv, var_other) {     // accessor method ++(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("++(_)", 0, numArgs - 1);
        return var_other;
      };    // end of method ++(_)
      this.methods["++(1)"] = func293;
      func293.methodName = "++(1)";
      func293.paramCounts = [1];
      func293.paramNames = ["other"];
      func293.definitionLine = 158;
      func293.definitionModule = "option";
      var func294 = function(argcv, var_binaryFunction, var_initial) {     // accessor method fold(_)startingWith(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 2) raiseTypeArgError("fold(_)startingWith(_)", 0, numArgs - 2);
        return var_initial;
      };    // end of method fold(_)startingWith(_)
      func294.paramTypes = [];
      func294.paramTypes.push([]);
      func294.paramTypes.push([]);
      this.methods["fold(1)startingWith(1)"] = func294;
      func294.methodName = "fold(1)startingWith(1)";
      func294.paramCounts = [1, 1];
      func294.paramNames = ["binaryFunction", "initial"];
      func294.definitionLine = 159;
      func294.definitionModule = "option";
      var func295 = function(argcv, var_function, var_U) {    // method map(_), line 162
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_U) var_U = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 2)) {
            raiseTypeArgError("map(_)", 1, numArgs - 1);
        }
        setLineNumber(162);    // compilenode member
        // call case 2: outer request
        var call296 = selfRequest(var_prelude, "Function1", [0]);
        assertTypeOrMsg(var_function, call296, "argument to request of `map(_)`", "Function1");
        // call case 2: outer request
        var call297 = selfRequest(importedModules["option"], "empty", [0, 1], var_U);
        // call case 2: outer request
        var call298 = selfRequest(importedModules["option"], "Option", [0]);
        assertTypeOrMsg(call297, call298, "result of method map(_)", "Option");
        return call297;
      };    // end of method map(_)
      this.methods["map(1)"] = func295;
      func295.methodName = "map(1)";
      func295.paramCounts = [1];
      func295.paramNames = ["function"];
      func295.typeParamNames = ["U"];
      func295.definitionLine = 162;
      func295.definitionModule = "option";
      var func299 = function(argcv, var_condition) {     // accessor method filter(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 1) raiseTypeArgError("filter(_)", 0, numArgs - 1);
        return this;
      };    // end of method filter(_)
      this.methods["filter(1)"] = func299;
      func299.methodName = "filter(1)";
      func299.paramCounts = [1];
      func299.paramNames = ["condition"];
      func299.definitionLine = 163;
      func299.definitionModule = "option";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 113;
          m.definitionModule = "option";
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
      var obj203_init = function() {    // init of object on line 113
      };
      return obj203_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj203_init = obj203_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj203_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method empty$build(_,_,_)
  this.methods["empty$build(3)"] = func202;
  func202.methodName = "empty$build(3)";
  func202.paramCounts = [0];
  func202.paramNames = [];
  func202.typeParamNames = ["T"];
  func202.definitionLine = 113;
  func202.definitionModule = "option";
  setLineNumber(13);    // compilenode string
  var string301 = new GraceString("ValueError");
  // call case 6: other requests
  // call case 2: outer request
  var call302 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call300 = request(call302, "refine(1)", [1], string301);
  var var_ValueError = call300;
  var reader303_ValueError = function() {  // reader method ValueError
      if (var_ValueError === undefined) raiseUninitializedVariable("ValueError");
      return var_ValueError;
  };
  reader303_ValueError.isDef = true;
  this.methods["ValueError"] = reader303_ValueError;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_option = gracecode_option;
if (typeof window !== "undefined")
  window.gracecode_option = gracecode_option;
gracecode_option.imports = ["standardGrace"];
gracecode_option.definitionModule = "option";
gracecode_option.definitionLine = 1;
