var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["identifierKinds"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n kindConstant(1)\nfresh:kindConstant(1):\n ::(1)\n ==(1)\n asString\n forGct\n forUsers\n fromParent\n hash\n isAssignable\n isImplicit\n isParameter\n isRequired\n \u2260(1)\nmethodtypes-of:T:\n & 2\n & EqualityObject\n 2 forUsers \u2192 Boolean\n 2 fromParent \u2192 Boolean\n 2 isAssignable \u2192 Boolean\n 2 isImplicit \u2192 Boolean\n 2 isParameter \u2192 Boolean\n 2 isRequired \u2192 Boolean\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/identifierKinds.grace\npublic:\n T\n aliasdec\n defdec\n fromTrait\n graceObjectMethod\n inherited\n kindConstant(1)\n methdec\n parameter\n required\n selfDef\n typedec\n typeparam\n undefined\n vardec\npublicMethodTypes:\n aliasdec \u2192 Unknown\n defdec \u2192 Unknown\n fromTrait \u2192 Unknown\n graceObjectMethod \u2192 Unknown\n inherited \u2192 Unknown\n kindConstant(name)\n methdec \u2192 Unknown\n parameter \u2192 Unknown\n required \u2192 Unknown\n selfDef \u2192 Unknown\n typedec \u2192 Unknown\n typeparam \u2192 Unknown\n undefined \u2192 Unknown\n vardec \u2192 Unknown\ntypes:\n T\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["identifierKinds"] = [
    "// Constants distinguishing between different kinds of identifier.",
    "// Defines observers for their properties.",
    "",
    "type T = EqualityObject & interface {",
    "    isParameter -> Boolean",
    "    isAssignable -> Boolean",
    "    isImplicit -> Boolean",
    "    isRequired -> Boolean",
    "    forUsers -> Boolean",
    "    fromParent -> Boolean",
    "}",
    "",
    "class kindConstant(name) {",
    "    use identityEquality",
    "    method asString { name }",
    "    method isParameter { false }",
    "    method isAssignable { false }",
    "    method isImplicit { false }",
    "    method forUsers { true }",
    "    method fromParent { false }",
    "    method forGct { true }",
    "    method isRequired { false }",
    "}",
    "",
    "def undefined is public = kindConstant \"undefined\"",
    "def defdec is public = kindConstant \"defdec\"",
    "def methdec is public = kindConstant \"method\"",
    "def typedec is public = kindConstant \"typedec\"",
    "def aliasdec is public = kindConstant \"alias\"",
    "",
    "def selfDef is public = object {",
    "    inherit kindConstant \"selfDef\"",
    "    method isImplicit { true }",
    "    method forUsers { false }",
    "    method forGct { false }",
    "}",
    "def fromTrait is public = object {",
    "    inherit kindConstant \"from a trait\"",
    "    method isImplicit { true }",
    "    method fromParent { true }",
    "}",
    "def inherited is public = object {",
    "    inherit kindConstant \"inherited\"",
    "    method isImplicit { true }",
    "    method fromParent { true }",
    "}",
    "def required is public = object {",
    "    inherit kindConstant \"required\"",
    "    method isRequired {true}",
    "    method isImplicit { true }",
    "}",
    "def vardec is public = object {",
    "    inherit kindConstant \"vardec\"",
    "    method isAssignable { true }",
    "}",
    "def parameter is public = object {",
    "    inherit kindConstant \"parameter\"",
    "    method isParameter { true }",
    "}",
    "def typeparam is public = object {",
    "    inherit kindConstant \"typeparam\"",
    "    method isParameter { true }",
    "}",
    "def graceObjectMethod is public = object {",
    "    inherit kindConstant \"from graceObject\"",
    "    method isImplicit { true }",
    "    method forUsers { false }",
    "    method fromParent { true }",
    "    method forGct { false }",
    "}" ];
}
function gracecode_identifierKinds() {
  importedModules["identifierKinds"] = this;
  var module$identifierKinds = this;
  this.definitionModule = "identifierKinds";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_identifierKinds_1");
  this.outer_identifierKinds_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(4);    // compilenode typedec
  // Type decl T
  var func1 = function(argcv) {    // method T, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string3 = new GraceString("T");
    // call case 6: other requests
    setLineNumber(4);    // compilenode member
    // call case 2: outer request
    var call4 = selfRequest(var_prelude, "EqualityObject", [0]);
    //   Type literal 
    var typeLit5 = new GraceType("\u2039anon\u203a");
    typeLit5.typeMethods.push("isParameter");
    typeLit5.typeMethods.push("isAssignable");
    typeLit5.typeMethods.push("isImplicit");
    typeLit5.typeMethods.push("isRequired");
    typeLit5.typeMethods.push("forUsers");
    typeLit5.typeMethods.push("fromParent");
    var opresult6 = request(call4, "&(1)", [1], typeLit5);
    var call2 = selfRequest(opresult6, "setName(1)", [1], string3);
    return call2;
  };    // end of method T
  function memofunc1(argcv) {
      if (! this.data["memo$T"])    // parameterless memo function
          this.data["memo$T"] = func1.call(this, argcv);
      return this.data["memo$T"];
  };
  this.methods["T"] = memofunc1;
  memofunc1.methodName = "T";
  memofunc1.paramCounts = [0];
  memofunc1.paramNames = [];
  memofunc1.definitionLine = 1;
  memofunc1.definitionModule = "identifierKinds";
  func1.methodName = "T";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 1;
  func1.definitionModule = "identifierKinds";
  var func7 = function(argcv, var_name) {    // method kindConstant(_), line 13
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("kindConstant(_)", 0, numArgs - 1);
    }
    var ouc = emptyGraceObject("kindConstant(_)", "identifierKinds", 13);
    var ouc_init = this.methods["kindConstant(1)$build(3)"].call(this, null, var_name, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method kindConstant(_)
  this.methods["kindConstant(1)"] = func7;
  func7.methodName = "kindConstant(1)";
  func7.paramCounts = [1];
  func7.paramNames = ["name"];
  func7.definitionLine = 13;
  func7.definitionModule = "identifierKinds";
  var func8 = function(argcv, var_name, inheritingObject, aliases, exclusions) {    // method kindConstant(_)$build(_,_,_), line 13
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("kindConstant(_)", 0, numArgs - 1);
    }
    var obj9_build = function(ignore, var_name, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierKinds_13");
      this.outer_identifierKinds_13 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(14);    // reuse call
      var initFun10 = selfRequest(var_prelude, "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
      var func11 = function(argcv) {     // accessor method asString
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("asString", 0, numArgs - 0);
        return var_name;
      };    // end of method asString
      this.methods["asString"] = func11;
      func11.methodName = "asString";
      func11.paramCounts = [0];
      func11.paramNames = [];
      func11.definitionLine = 15;
      func11.definitionModule = "identifierKinds";
      var func12 = function(argcv) {     // accessor method isParameter
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isParameter", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isParameter
      this.methods["isParameter"] = func12;
      func12.methodName = "isParameter";
      func12.paramCounts = [0];
      func12.paramNames = [];
      func12.definitionLine = 16;
      func12.definitionModule = "identifierKinds";
      var func13 = function(argcv) {     // accessor method isAssignable
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isAssignable", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isAssignable
      this.methods["isAssignable"] = func13;
      func13.methodName = "isAssignable";
      func13.paramCounts = [0];
      func13.paramNames = [];
      func13.definitionLine = 17;
      func13.definitionModule = "identifierKinds";
      var func14 = function(argcv) {     // accessor method isImplicit
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isImplicit
      this.methods["isImplicit"] = func14;
      func14.methodName = "isImplicit";
      func14.paramCounts = [0];
      func14.paramNames = [];
      func14.definitionLine = 18;
      func14.definitionModule = "identifierKinds";
      var func15 = function(argcv) {     // accessor method forUsers
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("forUsers", 0, numArgs - 0);
        return GraceTrue;
      };    // end of method forUsers
      this.methods["forUsers"] = func15;
      func15.methodName = "forUsers";
      func15.paramCounts = [0];
      func15.paramNames = [];
      func15.definitionLine = 19;
      func15.definitionModule = "identifierKinds";
      var func16 = function(argcv) {     // accessor method fromParent
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("fromParent", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method fromParent
      this.methods["fromParent"] = func16;
      func16.methodName = "fromParent";
      func16.paramCounts = [0];
      func16.paramNames = [];
      func16.definitionLine = 20;
      func16.definitionModule = "identifierKinds";
      var func17 = function(argcv) {     // accessor method forGct
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("forGct", 0, numArgs - 0);
        return GraceTrue;
      };    // end of method forGct
      this.methods["forGct"] = func17;
      func17.methodName = "forGct";
      func17.paramCounts = [0];
      func17.paramNames = [];
      func17.definitionLine = 21;
      func17.definitionModule = "identifierKinds";
      var func18 = function(argcv) {     // accessor method isRequired
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isRequired", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isRequired
      this.methods["isRequired"] = func18;
      func18.methodName = "isRequired";
      func18.paramCounts = [0];
      func18.paramNames = [];
      func18.definitionLine = 22;
      func18.definitionModule = "identifierKinds";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 13;
          m.definitionModule = "identifierKinds";
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
      var obj9_init = function() {    // init of object on line 13
      };
      return obj9_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj9_init = obj9_build.call(inheritingObject, null, var_name, this, aliases, exclusions);
    return obj9_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method kindConstant(_)$build(_,_,_)
  this.methods["kindConstant(1)$build(3)"] = func8;
  func8.methodName = "kindConstant(1)$build(3)";
  func8.paramCounts = [1];
  func8.paramNames = ["name"];
  func8.definitionLine = 13;
  func8.definitionModule = "identifierKinds";
  setLineNumber(25);    // compilenode string
  var string20 = new GraceString("undefined");
  // call case 2: outer request
  var call19 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)", [1], string20);
  var var_undefined = call19;
  var reader21_undefined = function() {  // reader method undefined
      if (var_undefined === undefined) raiseUninitializedVariable("undefined");
      return var_undefined;
  };
  reader21_undefined.isDef = true;
  this.methods["undefined"] = reader21_undefined;
  setLineNumber(26);    // compilenode string
  var string23 = new GraceString("defdec");
  // call case 2: outer request
  var call22 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)", [1], string23);
  var var_defdec = call22;
  var reader24_defdec = function() {  // reader method defdec
      if (var_defdec === undefined) raiseUninitializedVariable("defdec");
      return var_defdec;
  };
  reader24_defdec.isDef = true;
  this.methods["defdec"] = reader24_defdec;
  setLineNumber(27);    // compilenode string
  var string26 = new GraceString("method");
  // call case 2: outer request
  var call25 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)", [1], string26);
  var var_methdec = call25;
  var reader27_methdec = function() {  // reader method methdec
      if (var_methdec === undefined) raiseUninitializedVariable("methdec");
      return var_methdec;
  };
  reader27_methdec.isDef = true;
  this.methods["methdec"] = reader27_methdec;
  setLineNumber(28);    // compilenode string
  var string29 = new GraceString("typedec");
  // call case 2: outer request
  var call28 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)", [1], string29);
  var var_typedec = call28;
  var reader30_typedec = function() {  // reader method typedec
      if (var_typedec === undefined) raiseUninitializedVariable("typedec");
      return var_typedec;
  };
  reader30_typedec.isDef = true;
  this.methods["typedec"] = reader30_typedec;
  setLineNumber(29);    // compilenode string
  var string32 = new GraceString("alias");
  // call case 2: outer request
  var call31 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)", [1], string32);
  var var_aliasdec = call31;
  var reader33_aliasdec = function() {  // reader method aliasdec
      if (var_aliasdec === undefined) raiseUninitializedVariable("aliasdec");
      return var_aliasdec;
  };
  reader33_aliasdec.isDef = true;
  this.methods["aliasdec"] = reader33_aliasdec;
  setLineNumber(31);    // compilenode object
  var obj34_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_31");
    this.outer_identifierKinds_31 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(32);    // compilenode string
    var string35 = new GraceString("selfDef");
    var initFun36 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string35, this, [], []);  // compileReuseCall
    var func37 = function(argcv) {     // accessor method isImplicit
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isImplicit
    this.methods["isImplicit"] = func37;
    func37.methodName = "isImplicit";
    func37.paramCounts = [0];
    func37.paramNames = [];
    func37.definitionLine = 33;
    func37.definitionModule = "identifierKinds";
    var func38 = function(argcv) {     // accessor method forUsers
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("forUsers", 0, numArgs - 0);
      return GraceFalse;
    };    // end of method forUsers
    this.methods["forUsers"] = func38;
    func38.methodName = "forUsers";
    func38.paramCounts = [0];
    func38.paramNames = [];
    func38.definitionLine = 34;
    func38.definitionModule = "identifierKinds";
    var func39 = function(argcv) {     // accessor method forGct
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("forGct", 0, numArgs - 0);
      return GraceFalse;
    };    // end of method forGct
    this.methods["forGct"] = func39;
    func39.methodName = "forGct";
    func39.paramCounts = [0];
    func39.paramNames = [];
    func39.definitionLine = 35;
    func39.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 31;
        m.definitionModule = "identifierKinds";
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
    var obj34_init = function() {    // init of object on line 31
      initFun36.call(this);
    };
    return obj34_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj34 = emptyGraceObject("selfDef", "identifierKinds", 31);
  var obj34_init = obj34_build.call(obj34, null, this, [], []);
  obj34_init.call(obj34);  // end of compileobject
  var var_selfDef = obj34;
  var reader40_selfDef = function() {  // reader method selfDef
      if (var_selfDef === undefined) raiseUninitializedVariable("selfDef");
      return var_selfDef;
  };
  reader40_selfDef.isDef = true;
  this.methods["selfDef"] = reader40_selfDef;
  setLineNumber(37);    // compilenode object
  var obj41_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_37");
    this.outer_identifierKinds_37 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(38);    // compilenode string
    var string42 = new GraceString("from a trait");
    var initFun43 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string42, this, [], []);  // compileReuseCall
    var func44 = function(argcv) {     // accessor method isImplicit
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isImplicit
    this.methods["isImplicit"] = func44;
    func44.methodName = "isImplicit";
    func44.paramCounts = [0];
    func44.paramNames = [];
    func44.definitionLine = 39;
    func44.definitionModule = "identifierKinds";
    var func45 = function(argcv) {     // accessor method fromParent
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("fromParent", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method fromParent
    this.methods["fromParent"] = func45;
    func45.methodName = "fromParent";
    func45.paramCounts = [0];
    func45.paramNames = [];
    func45.definitionLine = 40;
    func45.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 37;
        m.definitionModule = "identifierKinds";
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
    var obj41_init = function() {    // init of object on line 37
      initFun43.call(this);
    };
    return obj41_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj41 = emptyGraceObject("fromTrait", "identifierKinds", 37);
  var obj41_init = obj41_build.call(obj41, null, this, [], []);
  obj41_init.call(obj41);  // end of compileobject
  var var_fromTrait = obj41;
  var reader46_fromTrait = function() {  // reader method fromTrait
      if (var_fromTrait === undefined) raiseUninitializedVariable("fromTrait");
      return var_fromTrait;
  };
  reader46_fromTrait.isDef = true;
  this.methods["fromTrait"] = reader46_fromTrait;
  setLineNumber(42);    // compilenode object
  var obj47_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_42");
    this.outer_identifierKinds_42 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(43);    // compilenode string
    var string48 = new GraceString("inherited");
    var initFun49 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string48, this, [], []);  // compileReuseCall
    var func50 = function(argcv) {     // accessor method isImplicit
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isImplicit
    this.methods["isImplicit"] = func50;
    func50.methodName = "isImplicit";
    func50.paramCounts = [0];
    func50.paramNames = [];
    func50.definitionLine = 44;
    func50.definitionModule = "identifierKinds";
    var func51 = function(argcv) {     // accessor method fromParent
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("fromParent", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method fromParent
    this.methods["fromParent"] = func51;
    func51.methodName = "fromParent";
    func51.paramCounts = [0];
    func51.paramNames = [];
    func51.definitionLine = 45;
    func51.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 42;
        m.definitionModule = "identifierKinds";
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
    var obj47_init = function() {    // init of object on line 42
      initFun49.call(this);
    };
    return obj47_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj47 = emptyGraceObject("inherited", "identifierKinds", 42);
  var obj47_init = obj47_build.call(obj47, null, this, [], []);
  obj47_init.call(obj47);  // end of compileobject
  var var_inherited = obj47;
  var reader52_inherited = function() {  // reader method inherited
      if (var_inherited === undefined) raiseUninitializedVariable("inherited");
      return var_inherited;
  };
  reader52_inherited.isDef = true;
  this.methods["inherited"] = reader52_inherited;
  setLineNumber(47);    // compilenode object
  var obj53_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_47");
    this.outer_identifierKinds_47 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(48);    // compilenode string
    var string54 = new GraceString("required");
    var initFun55 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string54, this, [], []);  // compileReuseCall
    var func56 = function(argcv) {     // accessor method isRequired
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isRequired", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isRequired
    this.methods["isRequired"] = func56;
    func56.methodName = "isRequired";
    func56.paramCounts = [0];
    func56.paramNames = [];
    func56.definitionLine = 49;
    func56.definitionModule = "identifierKinds";
    var func57 = function(argcv) {     // accessor method isImplicit
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isImplicit
    this.methods["isImplicit"] = func57;
    func57.methodName = "isImplicit";
    func57.paramCounts = [0];
    func57.paramNames = [];
    func57.definitionLine = 50;
    func57.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 47;
        m.definitionModule = "identifierKinds";
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
    var obj53_init = function() {    // init of object on line 47
      initFun55.call(this);
    };
    return obj53_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj53 = emptyGraceObject("required", "identifierKinds", 47);
  var obj53_init = obj53_build.call(obj53, null, this, [], []);
  obj53_init.call(obj53);  // end of compileobject
  var var_required = obj53;
  var reader58_required = function() {  // reader method required
      if (var_required === undefined) raiseUninitializedVariable("required");
      return var_required;
  };
  reader58_required.isDef = true;
  this.methods["required"] = reader58_required;
  setLineNumber(52);    // compilenode object
  var obj59_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_52");
    this.outer_identifierKinds_52 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(53);    // compilenode string
    var string60 = new GraceString("vardec");
    var initFun61 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string60, this, [], []);  // compileReuseCall
    var func62 = function(argcv) {     // accessor method isAssignable
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isAssignable", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isAssignable
    this.methods["isAssignable"] = func62;
    func62.methodName = "isAssignable";
    func62.paramCounts = [0];
    func62.paramNames = [];
    func62.definitionLine = 54;
    func62.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 52;
        m.definitionModule = "identifierKinds";
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
    var obj59_init = function() {    // init of object on line 52
      initFun61.call(this);
    };
    return obj59_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj59 = emptyGraceObject("vardec", "identifierKinds", 52);
  var obj59_init = obj59_build.call(obj59, null, this, [], []);
  obj59_init.call(obj59);  // end of compileobject
  var var_vardec = obj59;
  var reader63_vardec = function() {  // reader method vardec
      if (var_vardec === undefined) raiseUninitializedVariable("vardec");
      return var_vardec;
  };
  reader63_vardec.isDef = true;
  this.methods["vardec"] = reader63_vardec;
  setLineNumber(56);    // compilenode object
  var obj64_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_56");
    this.outer_identifierKinds_56 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(57);    // compilenode string
    var string65 = new GraceString("parameter");
    var initFun66 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string65, this, [], []);  // compileReuseCall
    var func67 = function(argcv) {     // accessor method isParameter
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isParameter", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isParameter
    this.methods["isParameter"] = func67;
    func67.methodName = "isParameter";
    func67.paramCounts = [0];
    func67.paramNames = [];
    func67.definitionLine = 58;
    func67.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 56;
        m.definitionModule = "identifierKinds";
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
    var obj64_init = function() {    // init of object on line 56
      initFun66.call(this);
    };
    return obj64_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj64 = emptyGraceObject("parameter", "identifierKinds", 56);
  var obj64_init = obj64_build.call(obj64, null, this, [], []);
  obj64_init.call(obj64);  // end of compileobject
  var var_parameter = obj64;
  var reader68_parameter = function() {  // reader method parameter
      if (var_parameter === undefined) raiseUninitializedVariable("parameter");
      return var_parameter;
  };
  reader68_parameter.isDef = true;
  this.methods["parameter"] = reader68_parameter;
  setLineNumber(60);    // compilenode object
  var obj69_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_60");
    this.outer_identifierKinds_60 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(61);    // compilenode string
    var string70 = new GraceString("typeparam");
    var initFun71 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string70, this, [], []);  // compileReuseCall
    var func72 = function(argcv) {     // accessor method isParameter
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isParameter", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isParameter
    this.methods["isParameter"] = func72;
    func72.methodName = "isParameter";
    func72.paramCounts = [0];
    func72.paramNames = [];
    func72.definitionLine = 62;
    func72.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 60;
        m.definitionModule = "identifierKinds";
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
    var obj69_init = function() {    // init of object on line 60
      initFun71.call(this);
    };
    return obj69_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj69 = emptyGraceObject("typeparam", "identifierKinds", 60);
  var obj69_init = obj69_build.call(obj69, null, this, [], []);
  obj69_init.call(obj69);  // end of compileobject
  var var_typeparam = obj69;
  var reader73_typeparam = function() {  // reader method typeparam
      if (var_typeparam === undefined) raiseUninitializedVariable("typeparam");
      return var_typeparam;
  };
  reader73_typeparam.isDef = true;
  this.methods["typeparam"] = reader73_typeparam;
  setLineNumber(64);    // compilenode object
  var obj74_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierKinds_64");
    this.outer_identifierKinds_64 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(65);    // compilenode string
    var string75 = new GraceString("from graceObject");
    var initFun76 = selfRequest(importedModules["identifierKinds"], "kindConstant(1)$build(3)", [null], string75, this, [], []);  // compileReuseCall
    var func77 = function(argcv) {     // accessor method isImplicit
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isImplicit", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isImplicit
    this.methods["isImplicit"] = func77;
    func77.methodName = "isImplicit";
    func77.paramCounts = [0];
    func77.paramNames = [];
    func77.definitionLine = 66;
    func77.definitionModule = "identifierKinds";
    var func78 = function(argcv) {     // accessor method forUsers
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("forUsers", 0, numArgs - 0);
      return GraceFalse;
    };    // end of method forUsers
    this.methods["forUsers"] = func78;
    func78.methodName = "forUsers";
    func78.paramCounts = [0];
    func78.paramNames = [];
    func78.definitionLine = 67;
    func78.definitionModule = "identifierKinds";
    var func79 = function(argcv) {     // accessor method fromParent
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("fromParent", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method fromParent
    this.methods["fromParent"] = func79;
    func79.methodName = "fromParent";
    func79.paramCounts = [0];
    func79.paramNames = [];
    func79.definitionLine = 68;
    func79.definitionModule = "identifierKinds";
    var func80 = function(argcv) {     // accessor method forGct
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("forGct", 0, numArgs - 0);
      return GraceFalse;
    };    // end of method forGct
    this.methods["forGct"] = func80;
    func80.methodName = "forGct";
    func80.paramCounts = [0];
    func80.paramNames = [];
    func80.definitionLine = 69;
    func80.definitionModule = "identifierKinds";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 64;
        m.definitionModule = "identifierKinds";
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
    var obj74_init = function() {    // init of object on line 64
      initFun76.call(this);
    };
    return obj74_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj74 = emptyGraceObject("graceObjectMethod", "identifierKinds", 64);
  var obj74_init = obj74_build.call(obj74, null, this, [], []);
  obj74_init.call(obj74);  // end of compileobject
  var var_graceObjectMethod = obj74;
  var reader81_graceObjectMethod = function() {  // reader method graceObjectMethod
      if (var_graceObjectMethod === undefined) raiseUninitializedVariable("graceObjectMethod");
      return var_graceObjectMethod;
  };
  reader81_graceObjectMethod.isDef = true;
  this.methods["graceObjectMethod"] = reader81_graceObjectMethod;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_identifierKinds = gracecode_identifierKinds;
if (typeof window !== "undefined")
  window.gracecode_identifierKinds = gracecode_identifierKinds;
gracecode_identifierKinds.imports = ["standardGrace"];
gracecode_identifierKinds.definitionModule = "identifierKinds";
gracecode_identifierKinds.definitionLine = 1;
