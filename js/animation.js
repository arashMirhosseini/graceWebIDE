var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["animation"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmethodtypes-of:Animator:\n 1 for(range':Iterable\u27e6T\u27e7)pausing(pauseTime:Number)do(block:Procedure1\u27e6T\u27e7) \u2192 Done\n 1 for(range':Iterable\u27e6T\u27e7)pausing(pauseTime:Number)do(block:Procedure1\u27e6T\u27e7)finally(endBlock:Procedure0) \u2192 Done\n 1 while(condition:Predicate0)pauseVarying(timeBlock:NumberBlock)do(block:Procedure0) \u2192 Done\n 1 while(condition:Predicate0)pausing(pauseTime:Number)do(block:Procedure0) \u2192 Done\n 1 while(condition:Predicate0)pausing(pauseTime:Number)do(block:Procedure0)finally(endBlock:Procedure0) \u2192 Done\nmethodtypes-of:NumberBlock:\nmodules:\n collectionsPrelude\n standardGrace\n timer\npath:\n /Users/black/Development/mg/gracelang/minigrace/objectdraw/animation.grace\npublic:\n Animator\n NumberBlock\n for(1)pausing(1)do(1)\n for(1)pausing(1)do(1)finally(1)\n while(1)pauseVarying(1)do(1)\n while(1)pausing(1)do(1)\n while(1)pausing(1)do(1)finally(1)\npublicMethodTypes:\n for\u27e6T\u27e7(range':Iterable\u27e6T\u27e7)pausing(pauseTime:Number)do(block:Procedure1\u27e6T\u27e7) \u2192 Done\n for\u27e6T\u27e7(range':Iterable\u27e6T\u27e7)pausing(pauseTime:Number)do(block:Procedure1\u27e6T\u27e7)finally(endBlock:Procedure0) \u2192 Done\n while(condition:Predicate0)pauseVarying(timeBlock:NumberBlock)do(block:Procedure0) \u2192 Done\n while(condition:Predicate0)pausing(pauseTime:Number)do(block:Procedure0) \u2192 Done\n while(condition:Predicate0)pausing(pauseTime:Number)do(block:Procedure0)finally(endBlock:Procedure0) \u2192 Done\ntypes:\n Animator\n NumberBlock\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["animation"] = [
    "import \"timer\" as timer",
    "",
    "type NumberBlock = Function0⟦Number⟧",
    "",
    "type Animator = {",
    "    // type of object that can simulate parallel animations",
    "",
    "    while (condition:Predicate0) pausing (pauseTime:Number)",
    "          do (block:Procedure0) -> Done",
    "    // Repeatedly execute block while condition is true",
    "",
    "    while (condition:Predicate0) pausing (pauseTime:Number)",
    "          do (block:Procedure0) finally (endBlock:Procedure0) -> Done",
    "    // Repeatedly execute block while condition is true, pausing pauseTime",
    "    // between iterations. When condition fails, execute endBlock.",
    "",
    "    while (condition:Predicate0) pauseVarying (timeBlock:NumberBlock)",
    "          do (block:Procedure0) -> Done",
    "    // Repeatedly execute block while condition is true, pausing a variable",
    "    // amount of time (obtained by evaluating timeBlock) between iterations.",
    "    // When condition fails, execute endBlock.",
    "",
    "    for⟦T⟧ (range':Iterable⟦T⟧) pausing (pauseTime:Number) do (block:Procedure1⟦T⟧) -> Done",
    "    // Repeatedly execute block while condition is true",
    "",
    "    for⟦T⟧ (range':Iterable⟦T⟧) pausing (pauseTime:Number) do (block:Procedure1⟦T⟧)",
    "          finally (endBlock:Procedure0) -> Done",
    "    // Repeatedly execute block while condition is true",
    "    // when condition fails, execute endBlock.",
    "",
    "}",
    "",
    "method while(condition:Predicate0) pausing (pauseTime:Number)",
    "                  do (block:Procedure0) -> Done {",
    "    // Repeatedly execute block while condition is true",
    "",
    "    def id:Number = timer.every (pauseTime) do {",
    "        if (condition.apply) then {",
    "            block.apply",
    "        } else {",
    "            timer.stop (id)",
    "        }",
    "    }",
    "}",
    "",
    "method while (condition:Predicate0) pausing (pauseTime:Number)",
    "          do (block:Procedure0) finally (endBlock:Procedure0) -> Done {",
    "    // Repeatedly execute block while condition is true, pausing by pauseTime",
    "    // between iterations. When condition fails, execute endBlock.",
    "",
    "    def id:Number = timer.every(pauseTime)do{",
    "        if (condition.apply) then {",
    "            block.apply",
    "        } else {",
    "            timer.stop(id)",
    "            endBlock.apply",
    "        }",
    "    }",
    "}",
    "",
    "method while(condition:Predicate0) pauseVarying (timeBlock:NumberBlock)",
    "          do (block:Procedure0)  -> Done {",
    "    // Repeatedly execute block while condition is true, pausing by",
    "    // timeBlock.apply between iterations.",
    "",
    "    if (condition.apply) then {",
    "        block.apply",
    "        timer.after(timeBlock.apply) do {",
    "            while (condition) pauseVarying (timeBlock) do (block)",
    "        }",
    "    }",
    "}",
    "",
    "method for⟦T⟧(range':Iterable⟦T⟧) pausing (pauseTime:Number)",
    "          do (block:Procedure1⟦T⟧) -> Done {",
    "    // Repeatedly execute block for each value in range', pausing pauseTime between",
    "    // iterations; block should take an element of range' as an argument.",
    "",
    "    def it = range'.iterator",
    "    while {it.hasNext} pausing (pauseTime) do { block.apply(it.next) }",
    "}",
    "",
    "method for⟦T⟧ (range':Iterable⟦T⟧) pausing (pauseTime:Number)",
    "         do (block:Procedure1⟦T⟧) finally(endBlock:Procedure0) -> Done {",
    "    // Repeatedly execute block for each value in range', pausing pauseTime between",
    "    // iterations; block should take a T object as a parameter.  When range'",
    "    // is exhausted, execute endBlock.",
    "",
    "    def it:Iterator⟦T⟧ = range'.iterator",
    "    while {it.hasNext} pausing (pauseTime) do { block.apply(it.next) }",
    "         finally(endBlock)",
    "}" ];
}
function gracecode_animation() {
  importedModules["animation"] = this;
  var module$animation = this;
  this.definitionModule = "animation";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_animation_1");
  this.outer_animation_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "timer" as timer
  if (typeof gracecode_timer == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module timer"));
  var var_timer = do_import("timer", gracecode_timer);
  var func0 = function(argcv) {     // accessor method timer
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("timer", 0, numArgs - 0);
    if (var_timer === undefined) raiseUninitializedVariable("timer");
    return var_timer;
  };    // end of method timer
  this.methods["timer"] = func0;
  func0.methodName = "timer";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "animation";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(3);    // compilenode typedec
  // Type decl NumberBlock
  var func2 = function(argcv) {    // method NumberBlock, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(3);    // compilenode member
    // call case 2: outer request
    var call3 = selfRequest(var_prelude, "Function0", [0, 1], var_Number);
    return call3;
  };    // end of method NumberBlock
  function memofunc2(argcv) {
      if (! this.data["memo$NumberBlock"])    // parameterless memo function
          this.data["memo$NumberBlock"] = func2.call(this, argcv);
      return this.data["memo$NumberBlock"];
  };
  this.methods["NumberBlock"] = memofunc2;
  memofunc2.methodName = "NumberBlock";
  memofunc2.paramCounts = [0];
  memofunc2.paramNames = [];
  memofunc2.definitionLine = 1;
  memofunc2.definitionModule = "animation";
  func2.methodName = "NumberBlock";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 1;
  func2.definitionModule = "animation";
  setLineNumber(5);    // compilenode typedec
  // Type decl Animator
  var func5 = function(argcv) {    // method Animator, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(5);    // compilenode typeliteral
    //   Type literal 
    var typeLit6 = new GraceType("Animator");
    typeLit6.typeMethods.push("while(1)pausing(1)do(1)");
    typeLit6.typeMethods.push("while(1)pausing(1)do(1)finally(1)");
    typeLit6.typeMethods.push("while(1)pauseVarying(1)do(1)");
    typeLit6.typeMethods.push("for(1)pausing(1)do(1)");
    typeLit6.typeMethods.push("for(1)pausing(1)do(1)finally(1)");
    return typeLit6;
  };    // end of method Animator
  function memofunc5(argcv) {
      if (! this.data["memo$Animator"])    // parameterless memo function
          this.data["memo$Animator"] = func5.call(this, argcv);
      return this.data["memo$Animator"];
  };
  this.methods["Animator"] = memofunc5;
  memofunc5.methodName = "Animator";
  memofunc5.paramCounts = [0];
  memofunc5.paramNames = [];
  memofunc5.definitionLine = 1;
  memofunc5.definitionModule = "animation";
  func5.methodName = "Animator";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 1;
  func5.definitionModule = "animation";
  var func7 = function(argcv, var_condition, var_pauseTime, var_block) {    // method while(_)pausing(_)do(_), line 33
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("while(_)pausing(_)do(_)", 0, numArgs - 3);
    }
    setLineNumber(33);    // compilenode member
    // call case 2: outer request
    var call8 = selfRequest(var_prelude, "Predicate0", [0]);
    assertTypeOrMsg(var_condition, call8, "argument 1 in request of `while(_)pausing(_)do(_)`", "Predicate0");
    assertTypeOrMsg(var_pauseTime, var_Number, "argument 2 in request of `while(_)pausing(_)do(_)`", "Number");
    setLineNumber(34);    // compilenode member
    // call case 2: outer request
    var call9 = selfRequest(var_prelude, "Procedure0", [0]);
    assertTypeOrMsg(var_block, call9, "argument 3 in request of `while(_)pausing(_)do(_)`", "Procedure0");
    setLineNumber(37);    // compilenode block
    var block11 = new GraceBlock(this, 37, 0);
    block11.guard = jsTrue;
    block11.real = function block11() {
      var if12 = GraceDone;
      setLineNumber(38);    // compilenode member
      // call case 6: other requests
      var call13 = request(var_condition, "apply", [0]);
      if (Grace_isTrue(call13)) {
        setLineNumber(39);    // compilenode member
        // call case 6: other requests
        var call14 = request(var_block, "apply", [0]);
        if12 = call14;
      } else {
        setLineNumber(41);    // compilenode call
        if (var_id === undefined) raiseUninitializedVariable("id");
        // call case 6: other requests
        if (var_timer === undefined) raiseUninitializedVariable("timer");
        var call15 = request(var_timer, "stop(1)", [1], var_id);
        if12 = call15;
      }
      return if12;
    };
    let applyMeth11 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth11.methodName = "apply";
    applyMeth11.paramCounts = [0];
    applyMeth11.paramNames = [];
    applyMeth11.definitionLine = 37;
    applyMeth11.definitionModule = "animation";
    block11.methods["apply"] = applyMeth11;
    // call case 6: other requests
    if (var_timer === undefined) raiseUninitializedVariable("timer");
    var call10 = request(var_timer, "every(1)do(1)", [1, 1], var_pauseTime, block11);
    var var_id = call10;
    setLineNumber(37);    // typecheck
    assertTypeOrMsg(var_id, var_Number, "value of def id", "Number");
    return GraceDone;
  };    // end of method while(_)pausing(_)do(_)
  func7.paramTypes = [];
  func7.paramTypes.push([]);
  func7.paramTypes.push([type_Number, "pauseTime"]);
  func7.paramTypes.push([]);
  this.methods["while(1)pausing(1)do(1)"] = func7;
  func7.methodName = "while(1)pausing(1)do(1)";
  func7.paramCounts = [1, 1, 1];
  func7.paramNames = ["condition", "pauseTime", "block"];
  func7.definitionLine = 33;
  func7.definitionModule = "animation";
  var func16 = function(argcv, var_condition, var_pauseTime, var_block, var_endBlock) {    // method while(_)pausing(_)do(_)finally(_), line 46
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("while(_)pausing(_)do(_)finally(_)", 0, numArgs - 4);
    }
    setLineNumber(46);    // compilenode member
    // call case 2: outer request
    var call17 = selfRequest(var_prelude, "Predicate0", [0]);
    assertTypeOrMsg(var_condition, call17, "argument 1 in request of `while(_)pausing(_)do(_)finally(_)`", "Predicate0");
    assertTypeOrMsg(var_pauseTime, var_Number, "argument 2 in request of `while(_)pausing(_)do(_)finally(_)`", "Number");
    setLineNumber(47);    // compilenode member
    // call case 2: outer request
    var call18 = selfRequest(var_prelude, "Procedure0", [0]);
    assertTypeOrMsg(var_block, call18, "argument 3 in request of `while(_)pausing(_)do(_)finally(_)`", "Procedure0");
    // call case 2: outer request
    var call19 = selfRequest(var_prelude, "Procedure0", [0]);
    assertTypeOrMsg(var_endBlock, call19, "argument 4 in request of `while(_)pausing(_)do(_)finally(_)`", "Procedure0");
    setLineNumber(51);    // compilenode block
    var block21 = new GraceBlock(this, 51, 0);
    block21.guard = jsTrue;
    block21.real = function block21() {
      var if22 = GraceDone;
      setLineNumber(52);    // compilenode member
      // call case 6: other requests
      var call23 = request(var_condition, "apply", [0]);
      if (Grace_isTrue(call23)) {
        setLineNumber(53);    // compilenode member
        // call case 6: other requests
        var call24 = request(var_block, "apply", [0]);
        if22 = call24;
      } else {
        setLineNumber(55);    // compilenode call
        if (var_id === undefined) raiseUninitializedVariable("id");
        // call case 6: other requests
        if (var_timer === undefined) raiseUninitializedVariable("timer");
        var call25 = request(var_timer, "stop(1)", [1], var_id);
        setLineNumber(56);    // compilenode member
        // call case 6: other requests
        var call26 = request(var_endBlock, "apply", [0]);
        if22 = call26;
      }
      return if22;
    };
    let applyMeth21 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth21.methodName = "apply";
    applyMeth21.paramCounts = [0];
    applyMeth21.paramNames = [];
    applyMeth21.definitionLine = 51;
    applyMeth21.definitionModule = "animation";
    block21.methods["apply"] = applyMeth21;
    // call case 6: other requests
    if (var_timer === undefined) raiseUninitializedVariable("timer");
    var call20 = request(var_timer, "every(1)do(1)", [1, 1], var_pauseTime, block21);
    var var_id = call20;
    setLineNumber(51);    // typecheck
    assertTypeOrMsg(var_id, var_Number, "value of def id", "Number");
    return GraceDone;
  };    // end of method while(_)pausing(_)do(_)finally(_)
  func16.paramTypes = [];
  func16.paramTypes.push([]);
  func16.paramTypes.push([type_Number, "pauseTime"]);
  func16.paramTypes.push([]);
  func16.paramTypes.push([]);
  this.methods["while(1)pausing(1)do(1)finally(1)"] = func16;
  func16.methodName = "while(1)pausing(1)do(1)finally(1)";
  func16.paramCounts = [1, 1, 1, 1];
  func16.paramNames = ["condition", "pauseTime", "block", "endBlock"];
  func16.definitionLine = 46;
  func16.definitionModule = "animation";
  var func27 = function(argcv, var_condition, var_timeBlock, var_block) {    // method while(_)pauseVarying(_)do(_), line 61
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("while(_)pauseVarying(_)do(_)", 0, numArgs - 3);
    }
    setLineNumber(61);    // compilenode member
    // call case 2: outer request
    var call28 = selfRequest(var_prelude, "Predicate0", [0]);
    assertTypeOrMsg(var_condition, call28, "argument 1 in request of `while(_)pauseVarying(_)do(_)`", "Predicate0");
    // call case 4: self request with 0 args and 0 typeArgs 
    var call29 = selfRequest(this, "NumberBlock", [0]);
    assertTypeOrMsg(var_timeBlock, call29, "argument 2 in request of `while(_)pauseVarying(_)do(_)`", "NumberBlock");
    setLineNumber(62);    // compilenode member
    // call case 2: outer request
    var call30 = selfRequest(var_prelude, "Procedure0", [0]);
    assertTypeOrMsg(var_block, call30, "argument 3 in request of `while(_)pauseVarying(_)do(_)`", "Procedure0");
    var if31 = GraceDone;
    setLineNumber(66);    // compilenode member
    // call case 6: other requests
    var call32 = request(var_condition, "apply", [0]);
    if (Grace_isTrue(call32)) {
      setLineNumber(67);    // compilenode member
      // call case 6: other requests
      var call33 = request(var_block, "apply", [0]);
      setLineNumber(68);    // compilenode member
      // call case 6: other requests
      var call35 = request(var_timeBlock, "apply", [0]);
      var block36 = new GraceBlock(this, 68, 0);
      block36.guard = jsTrue;
      block36.real = function block36() {
        setLineNumber(69);    // compilenode call
        // call case 2: outer request
        var call37 = selfRequest(importedModules["animation"], "while(1)pauseVarying(1)do(1)", [1, 1, 1], var_condition, var_timeBlock, var_block);
        return call37;
      };
      let applyMeth36 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth36.methodName = "apply";
      applyMeth36.paramCounts = [0];
      applyMeth36.paramNames = [];
      applyMeth36.definitionLine = 68;
      applyMeth36.definitionModule = "animation";
      block36.methods["apply"] = applyMeth36;
      // call case 6: other requests
      if (var_timer === undefined) raiseUninitializedVariable("timer");
      var call34 = request(var_timer, "after(1)do(1)", [1, 1], call35, block36);
      if31 = call34;
    }
    return if31;
  };    // end of method while(_)pauseVarying(_)do(_)
  this.methods["while(1)pauseVarying(1)do(1)"] = func27;
  func27.methodName = "while(1)pauseVarying(1)do(1)";
  func27.paramCounts = [1, 1, 1];
  func27.paramNames = ["condition", "timeBlock", "block"];
  func27.definitionLine = 61;
  func27.definitionModule = "animation";
  var func38 = function(argcv, var_range__39__, var_pauseTime, var_block, var_T) {    // method for(_)pausing(_)do(_), line 74
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 4)) {
        raiseTypeArgError("for(_)pausing(_)do(_)", 1, numArgs - 3);
    }
    setLineNumber(74);    // compilenode member
    // call case 2: outer request
    var call39 = selfRequest(var_prelude, "Iterable", [0]);
    assertTypeOrMsg(var_range__39__, call39, "argument 1 in request of `for(_)pausing(_)do(_)`", "Iterable");
    assertTypeOrMsg(var_pauseTime, var_Number, "argument 2 in request of `for(_)pausing(_)do(_)`", "Number");
    setLineNumber(75);    // compilenode member
    // call case 2: outer request
    var call40 = selfRequest(var_prelude, "Procedure1", [0]);
    assertTypeOrMsg(var_block, call40, "argument 3 in request of `for(_)pausing(_)do(_)`", "Procedure1");
    setLineNumber(79);    // compilenode member
    // call case 6: other requests
    var call41 = request(var_range__39__, "iterator", [0]);
    var var_it = call41;
    setLineNumber(80);    // compilenode block
    var block43 = new GraceBlock(this, 80, 0);
    block43.guard = jsTrue;
    block43.real = function block43() {
      setLineNumber(80);    // compilenode member
      // call case 6: other requests
      if (var_it === undefined) raiseUninitializedVariable("it");
      var call44 = request(var_it, "hasNext", [0]);
      return call44;
    };
    let applyMeth43 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth43.methodName = "apply";
    applyMeth43.paramCounts = [0];
    applyMeth43.paramNames = [];
    applyMeth43.definitionLine = 80;
    applyMeth43.definitionModule = "animation";
    block43.methods["apply"] = applyMeth43;
    var block45 = new GraceBlock(this, 80, 0);
    block45.guard = jsTrue;
    block45.real = function block45() {
      setLineNumber(80);    // compilenode member
      // call case 6: other requests
      if (var_it === undefined) raiseUninitializedVariable("it");
      var call47 = request(var_it, "next", [0]);
      // call case 6: other requests
      var call46 = request(var_block, "apply(1)", [1], call47);
      return call46;
    };
    let applyMeth45 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth45.methodName = "apply";
    applyMeth45.paramCounts = [0];
    applyMeth45.paramNames = [];
    applyMeth45.definitionLine = 80;
    applyMeth45.definitionModule = "animation";
    block45.methods["apply"] = applyMeth45;
    // call case 2: outer request
    var call42 = selfRequest(importedModules["animation"], "while(1)pausing(1)do(1)", [1, 1, 1], block43, var_pauseTime, block45);
    return call42;
  };    // end of method for(_)pausing(_)do(_)
  func38.paramTypes = [];
  func38.paramTypes.push([]);
  func38.paramTypes.push([type_Number, "pauseTime"]);
  func38.paramTypes.push([]);
  this.methods["for(1)pausing(1)do(1)"] = func38;
  func38.methodName = "for(1)pausing(1)do(1)";
  func38.paramCounts = [1, 1, 1];
  func38.paramNames = ["range'", "pauseTime", "block"];
  func38.typeParamNames = ["T"];
  func38.definitionLine = 74;
  func38.definitionModule = "animation";
  var func48 = function(argcv, var_range__39__, var_pauseTime, var_block, var_endBlock, var_T) {    // method for(_)pausing(_)do(_)finally(_), line 83
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 5)) {
        raiseTypeArgError("for(_)pausing(_)do(_)finally(_)", 1, numArgs - 4);
    }
    setLineNumber(83);    // compilenode member
    // call case 2: outer request
    var call49 = selfRequest(var_prelude, "Iterable", [0]);
    assertTypeOrMsg(var_range__39__, call49, "argument 1 in request of `for(_)pausing(_)do(_)finally(_)`", "Iterable");
    assertTypeOrMsg(var_pauseTime, var_Number, "argument 2 in request of `for(_)pausing(_)do(_)finally(_)`", "Number");
    setLineNumber(84);    // compilenode member
    // call case 2: outer request
    var call50 = selfRequest(var_prelude, "Procedure1", [0]);
    assertTypeOrMsg(var_block, call50, "argument 3 in request of `for(_)pausing(_)do(_)finally(_)`", "Procedure1");
    // call case 2: outer request
    var call51 = selfRequest(var_prelude, "Procedure0", [0]);
    assertTypeOrMsg(var_endBlock, call51, "argument 4 in request of `for(_)pausing(_)do(_)finally(_)`", "Procedure0");
    setLineNumber(89);    // compilenode member
    // call case 6: other requests
    var call52 = request(var_range__39__, "iterator", [0]);
    var var_it = call52;
    // call case 2: outer request
    var call53 = selfRequest(var_prelude, "Iterator", [0]);
    assertTypeOrMsg(var_it, call53, "value of def it", "Iterator");
    setLineNumber(90);    // compilenode block
    var block55 = new GraceBlock(this, 90, 0);
    block55.guard = jsTrue;
    block55.real = function block55() {
      setLineNumber(90);    // compilenode member
      // call case 6: other requests
      if (var_it === undefined) raiseUninitializedVariable("it");
      var call56 = request(var_it, "hasNext", [0]);
      return call56;
    };
    let applyMeth55 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth55.methodName = "apply";
    applyMeth55.paramCounts = [0];
    applyMeth55.paramNames = [];
    applyMeth55.definitionLine = 90;
    applyMeth55.definitionModule = "animation";
    block55.methods["apply"] = applyMeth55;
    var block57 = new GraceBlock(this, 90, 0);
    block57.guard = jsTrue;
    block57.real = function block57() {
      setLineNumber(90);    // compilenode member
      // call case 6: other requests
      if (var_it === undefined) raiseUninitializedVariable("it");
      var call59 = request(var_it, "next", [0]);
      // call case 6: other requests
      var call58 = request(var_block, "apply(1)", [1], call59);
      return call58;
    };
    let applyMeth57 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth57.methodName = "apply";
    applyMeth57.paramCounts = [0];
    applyMeth57.paramNames = [];
    applyMeth57.definitionLine = 90;
    applyMeth57.definitionModule = "animation";
    block57.methods["apply"] = applyMeth57;
    // call case 2: outer request
    var call54 = selfRequest(importedModules["animation"], "while(1)pausing(1)do(1)finally(1)", [1, 1, 1, 1], block55, var_pauseTime, block57, var_endBlock);
    return call54;
  };    // end of method for(_)pausing(_)do(_)finally(_)
  func48.paramTypes = [];
  func48.paramTypes.push([]);
  func48.paramTypes.push([type_Number, "pauseTime"]);
  func48.paramTypes.push([]);
  func48.paramTypes.push([]);
  this.methods["for(1)pausing(1)do(1)finally(1)"] = func48;
  func48.methodName = "for(1)pausing(1)do(1)finally(1)";
  func48.paramCounts = [1, 1, 1, 1];
  func48.paramNames = ["range'", "pauseTime", "block", "endBlock"];
  func48.typeParamNames = ["T"];
  func48.definitionLine = 83;
  func48.definitionModule = "animation";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_animation = gracecode_animation;
if (typeof window !== "undefined")
  window.gracecode_animation = gracecode_animation;
gracecode_animation.imports = ["standardGrace", "timer"];
gracecode_animation.definitionModule = "animation";
gracecode_animation.definitionLine = 1;
