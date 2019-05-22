var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["buildinfo"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/buildinfo.grace\npublic:\n gitgeneration\n gitrevision\n includepath\n modulepath\n objectpath\n pathPrefix\npublicMethodTypes:\n gitgeneration\n gitrevision\n includepath\n modulepath\n objectpath\n pathPrefix\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["buildinfo"] = [
    "method gitrevision { \"954675cb2083c08a0391c3bed5ee895af9ae42a1\" }",
    "method gitgeneration { \"4492\" }",
    "method pathPrefix { \"/usr/local\" }",
    "method includepath { \"/usr/local/include\" }",
    "method modulepath { \"/usr/local/lib/grace/modules\" }",
    "method objectpath { \"/usr/local/lib/grace\" }" ];
}
function gracecode_buildinfo() {
  importedModules["buildinfo"] = this;
  var module$buildinfo = this;
  this.definitionModule = "buildinfo";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_buildinfo_1");
  this.outer_buildinfo_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  var func0 = function(argcv) {    // method gitrevision, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("gitrevision", 0, numArgs - 0);
    }
    setLineNumber(1);    // compilenode string
    var string1 = new GraceString("954675cb2083c08a0391c3bed5ee895af9ae42a1");
    return string1;
  };    // end of method gitrevision
  this.methods["gitrevision"] = func0;
  func0.methodName = "gitrevision";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "buildinfo";
  var func2 = function(argcv) {    // method gitgeneration, line 2
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("gitgeneration", 0, numArgs - 0);
    }
    setLineNumber(2);    // compilenode string
    var string3 = new GraceString("4492");
    return string3;
  };    // end of method gitgeneration
  this.methods["gitgeneration"] = func2;
  func2.methodName = "gitgeneration";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 2;
  func2.definitionModule = "buildinfo";
  var func4 = function(argcv) {    // method pathPrefix, line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("pathPrefix", 0, numArgs - 0);
    }
    setLineNumber(3);    // compilenode string
    var string5 = new GraceString("/usr/local");
    return string5;
  };    // end of method pathPrefix
  this.methods["pathPrefix"] = func4;
  func4.methodName = "pathPrefix";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 3;
  func4.definitionModule = "buildinfo";
  var func6 = function(argcv) {    // method includepath, line 4
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("includepath", 0, numArgs - 0);
    }
    setLineNumber(4);    // compilenode string
    var string7 = new GraceString("/usr/local/include");
    return string7;
  };    // end of method includepath
  this.methods["includepath"] = func6;
  func6.methodName = "includepath";
  func6.paramCounts = [0];
  func6.paramNames = [];
  func6.definitionLine = 4;
  func6.definitionModule = "buildinfo";
  var func8 = function(argcv) {    // method modulepath, line 5
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("modulepath", 0, numArgs - 0);
    }
    setLineNumber(5);    // compilenode string
    var string9 = new GraceString("/usr/local/lib/grace/modules");
    return string9;
  };    // end of method modulepath
  this.methods["modulepath"] = func8;
  func8.methodName = "modulepath";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 5;
  func8.definitionModule = "buildinfo";
  var func10 = function(argcv) {    // method objectpath, line 6
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("objectpath", 0, numArgs - 0);
    }
    setLineNumber(6);    // compilenode string
    var string11 = new GraceString("/usr/local/lib/grace");
    return string11;
  };    // end of method objectpath
  this.methods["objectpath"] = func10;
  func10.methodName = "objectpath";
  func10.paramCounts = [0];
  func10.paramNames = [];
  func10.definitionLine = 6;
  func10.definitionModule = "buildinfo";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_buildinfo = gracecode_buildinfo;
if (typeof window !== "undefined")
  window.gracecode_buildinfo = gracecode_buildinfo;
gracecode_buildinfo.imports = ["standardGrace"];
gracecode_buildinfo.definitionModule = "buildinfo";
gracecode_buildinfo.definitionLine = 1;
