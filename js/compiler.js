var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["compiler"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n ast\n buildinfo\n collectionsPrelude\n errormessages\n fastDict\n genjs\n identifierKinds\n identifierresolution\n io\n lexer\n mirrors\n parser\n standardGrace\n sys\n unicode\n unixFilePath\n util\n xmodule\npath:\n /Users/black/Development/mg/gracelang/minigrace/compiler.grace\npublic:\npublicMethodTypes:\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["compiler"] = [
    "import \"ast\" as ast",
    "import \"buildinfo\" as buildinfo",
    "import \"genjs\" as genjs",
    "import \"identifierresolution\" as identifierresolution",
    "import \"errormessages\" as errormessages",
    "import \"io\" as io",
    "import \"lexer\" as lexer",
    "import \"mirrors\" as mirrors",
    "import \"parser\" as parser",
    "import \"sys\" as sys",
    "import \"unicode\" as unicode",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "",
    "util.parseargs(buildinfo)",
    "",
    "util.log_verbose \"starting compilation\"",
    "",
    "try {",
    "    var tokens := lexer.lexfile(util.infile)",
    "    if (util.target == \"lex\") then {",
    "        // Print the lexed tokens and quit.",
    "        for (tokens) do { v ->",
    "            def val = if (\"\\n\" == v.value) then { \"\\\\n\" } else { v.value }",
    "            if (util.verbosity > 30) then {",
    "                util.outprint \"{v.kind}: {val}  [pos: {v.line}.{v.linePos} size: {v.size} indent: {v.indent}]\"",
    "            } else {",
    "                util.outprint \"{v.kind}: {val}\"",
    "            }",
    "        }",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "",
    "    var moduleObject := parser.parse(tokens)",
    "",
    "    if (util.extensions.containsKey \"NativePrelude\") then {",
    "        moduleObject.theDialect := ast.dialectNode.new \"none\"",
    "        // for backward compatibility",
    "    }",
    "",
    "    var values := moduleObject.value",
    "",
    "    if (util.target == \"parse\") then {",
    "        // Parse mode pretty-prints the parse tree and quits.",
    "    //    util.log 60 verbose \"target = parse, outfile = {util.outfile}.\"",
    "        util.outprint(moduleObject.pretty(0))",
    "    //    util.log 60 verbose \"done writing {util.outfile}.\"",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "    if (util.target == \"grace\") then {",
    "        for (values) do { v ->",
    "            util.outprint(v.toGrace(0))",
    "        }",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "",
    "    xmodule.checkDialect(moduleObject)",
    "    xmodule.doParseCheck(moduleObject)",
    "",
    "    if (util.extensions.containsKey \"Plugin\") then {",
    "        mirrors.loadDynamicModule(util.extensions.at \"Plugin\").processAST(values)",
    "    }",
    "    if (util.target == \"imports\") then {",
    "        def imps = emptySet",
    "        def vis = object {",
    "            inherit ast.baseVisitor",
    "            method visitImport(o) -> Boolean {",
    "                imps.add(o.path)",
    "                false",
    "            }",
    "        }",
    "        moduleObject.accept(vis)",
    "",
    "        list.withAll(imps).sort.do { im ->",
    "            util.outprint(im)",
    "        }",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "    moduleObject := identifierresolution.resolve(moduleObject)",
    "    if ((util.target == \"processed-ast\") || (util.target == \"ast\")) then {",
    "        util.outprint \"=====================================\"",
    "        util.outprint \"module-level symbol table\"",
    "        util.outprint (moduleObject.scope.asStringWithParents)",
    "        util.outprint \"=====================================\"",
    "        util.outprint(moduleObject.pretty(0))",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "",
    "    xmodule.doAstCheck(moduleObject)",
    "",
    "    // Perform the actual compilation",
    "    match(util.target)",
    "      case { \"js\" ->",
    "        genjs.compile(moduleObject, util.outfile, util.buildtype, util.gracelibPath)",
    "    } else {",
    "        io.error.write(\"minigrace: no such target '\" ++ util.target ++ \"'\\n\")",
    "        sys.exit(1)",
    "    }",
    "} catch { se:errormessages.SyntaxError ->",
    "    util.generalError(\"Syntax error: {se.message}\", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)",
    "} catch { se:errormessages.ReuseError ->",
    "    util.generalError(\"Reuse error: {se.message}\", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)",
    "} catch { se:errormessages.CompilationError ->",
    "    util.generalError(\"Compilation error: {se.message}\", se.data.lineNum, se.data.position, se.data.arrow, se.data.sugg)",
    "}" ];
}
function gracecode_compiler() {
  importedModules["compiler"] = this;
  var module$compiler = this;
  this.definitionModule = "compiler";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_compiler_1");
  this.outer_compiler_1 = var_prelude;
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
  func0.definitionModule = "compiler";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(2);    // compilenode import
  // Import of "buildinfo" as buildinfo
  if (typeof gracecode_buildinfo == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module buildinfo"));
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  var func1 = function(argcv) {     // accessor method buildinfo
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("buildinfo", 0, numArgs - 0);
    if (var_buildinfo === undefined) raiseUninitializedVariable("buildinfo");
    return var_buildinfo;
  };    // end of method buildinfo
  this.methods["buildinfo"] = func1;
  func1.methodName = "buildinfo";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 2;
  func1.definitionModule = "compiler";
  func1.debug = "import";
  func1.confidential = true;
  setLineNumber(3);    // compilenode import
  // Import of "genjs" as genjs
  if (typeof gracecode_genjs == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module genjs"));
  var var_genjs = do_import("genjs", gracecode_genjs);
  var func2 = function(argcv) {     // accessor method genjs
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("genjs", 0, numArgs - 0);
    if (var_genjs === undefined) raiseUninitializedVariable("genjs");
    return var_genjs;
  };    // end of method genjs
  this.methods["genjs"] = func2;
  func2.methodName = "genjs";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "compiler";
  func2.debug = "import";
  func2.confidential = true;
  setLineNumber(4);    // compilenode import
  // Import of "identifierresolution" as identifierresolution
  if (typeof gracecode_identifierresolution == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module identifierresolution"));
  var var_identifierresolution = do_import("identifierresolution", gracecode_identifierresolution);
  var func3 = function(argcv) {     // accessor method identifierresolution
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("identifierresolution", 0, numArgs - 0);
    if (var_identifierresolution === undefined) raiseUninitializedVariable("identifierresolution");
    return var_identifierresolution;
  };    // end of method identifierresolution
  this.methods["identifierresolution"] = func3;
  func3.methodName = "identifierresolution";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 4;
  func3.definitionModule = "compiler";
  func3.debug = "import";
  func3.confidential = true;
  setLineNumber(5);    // compilenode import
  // Import of "errormessages" as errormessages
  if (typeof gracecode_errormessages == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module errormessages"));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func4 = function(argcv) {     // accessor method errormessages
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("errormessages", 0, numArgs - 0);
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    return var_errormessages;
  };    // end of method errormessages
  this.methods["errormessages"] = func4;
  func4.methodName = "errormessages";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 5;
  func4.definitionModule = "compiler";
  func4.debug = "import";
  func4.confidential = true;
  setLineNumber(6);    // compilenode import
  // Import of "io" as io
  if (typeof gracecode_io == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module io"));
  var var_io = do_import("io", gracecode_io);
  var func5 = function(argcv) {     // accessor method io
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("io", 0, numArgs - 0);
    if (var_io === undefined) raiseUninitializedVariable("io");
    return var_io;
  };    // end of method io
  this.methods["io"] = func5;
  func5.methodName = "io";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 6;
  func5.definitionModule = "compiler";
  func5.debug = "import";
  func5.confidential = true;
  setLineNumber(7);    // compilenode import
  // Import of "lexer" as lexer
  if (typeof gracecode_lexer == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module lexer"));
  var var_lexer = do_import("lexer", gracecode_lexer);
  var func6 = function(argcv) {     // accessor method lexer
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("lexer", 0, numArgs - 0);
    if (var_lexer === undefined) raiseUninitializedVariable("lexer");
    return var_lexer;
  };    // end of method lexer
  this.methods["lexer"] = func6;
  func6.methodName = "lexer";
  func6.paramCounts = [0];
  func6.paramNames = [];
  func6.definitionLine = 7;
  func6.definitionModule = "compiler";
  func6.debug = "import";
  func6.confidential = true;
  setLineNumber(8);    // compilenode import
  // Import of "mirrors" as mirrors
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func7 = function(argcv) {     // accessor method mirrors
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("mirrors", 0, numArgs - 0);
    if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
    return var_mirrors;
  };    // end of method mirrors
  this.methods["mirrors"] = func7;
  func7.methodName = "mirrors";
  func7.paramCounts = [0];
  func7.paramNames = [];
  func7.definitionLine = 8;
  func7.definitionModule = "compiler";
  func7.debug = "import";
  func7.confidential = true;
  setLineNumber(9);    // compilenode import
  // Import of "parser" as parser
  if (typeof gracecode_parser == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module parser"));
  var var_parser = do_import("parser", gracecode_parser);
  var func8 = function(argcv) {     // accessor method parser
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("parser", 0, numArgs - 0);
    if (var_parser === undefined) raiseUninitializedVariable("parser");
    return var_parser;
  };    // end of method parser
  this.methods["parser"] = func8;
  func8.methodName = "parser";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 9;
  func8.definitionModule = "compiler";
  func8.debug = "import";
  func8.confidential = true;
  setLineNumber(10);    // compilenode import
  // Import of "sys" as sys
  if (typeof gracecode_sys == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module sys"));
  var var_sys = do_import("sys", gracecode_sys);
  var func9 = function(argcv) {     // accessor method sys
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("sys", 0, numArgs - 0);
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    return var_sys;
  };    // end of method sys
  this.methods["sys"] = func9;
  func9.methodName = "sys";
  func9.paramCounts = [0];
  func9.paramNames = [];
  func9.definitionLine = 10;
  func9.definitionModule = "compiler";
  func9.debug = "import";
  func9.confidential = true;
  setLineNumber(11);    // compilenode import
  // Import of "unicode" as unicode
  if (typeof gracecode_unicode == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module unicode"));
  var var_unicode = do_import("unicode", gracecode_unicode);
  var func10 = function(argcv) {     // accessor method unicode
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("unicode", 0, numArgs - 0);
    if (var_unicode === undefined) raiseUninitializedVariable("unicode");
    return var_unicode;
  };    // end of method unicode
  this.methods["unicode"] = func10;
  func10.methodName = "unicode";
  func10.paramCounts = [0];
  func10.paramNames = [];
  func10.definitionLine = 11;
  func10.definitionModule = "compiler";
  func10.debug = "import";
  func10.confidential = true;
  setLineNumber(12);    // compilenode import
  // Import of "util" as util
  if (typeof gracecode_util == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module util"));
  var var_util = do_import("util", gracecode_util);
  var func11 = function(argcv) {     // accessor method util
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("util", 0, numArgs - 0);
    if (var_util === undefined) raiseUninitializedVariable("util");
    return var_util;
  };    // end of method util
  this.methods["util"] = func11;
  func11.methodName = "util";
  func11.paramCounts = [0];
  func11.paramNames = [];
  func11.definitionLine = 12;
  func11.definitionModule = "compiler";
  func11.debug = "import";
  func11.confidential = true;
  setLineNumber(13);    // compilenode import
  // Import of "xmodule" as xmodule
  if (typeof gracecode_xmodule == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module xmodule"));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func12 = function(argcv) {     // accessor method xmodule
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("xmodule", 0, numArgs - 0);
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    return var_xmodule;
  };    // end of method xmodule
  this.methods["xmodule"] = func12;
  func12.methodName = "xmodule";
  func12.paramCounts = [0];
  func12.paramNames = [];
  func12.definitionLine = 13;
  func12.definitionModule = "compiler";
  func12.debug = "import";
  func12.confidential = true;
  setLineNumber(15);    // compilenode call
  // call case 6: other requests
  var call13 = request(var_util, "parseargs(1)", [1], var_buildinfo);
  setLineNumber(17);    // compilenode string
  var string15 = new GraceString("starting compilation");
  // call case 6: other requests
  var call14 = request(var_util, "log_verbose(1)", [1], string15);
  setLineNumber(19);    // compilenode block
  var block17 = new GraceBlock(this, 19, 0);
  block17.guard = jsTrue;
  block17.real = function block17() {
    setLineNumber(20);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call19 = request(var_util, "infile", [0]);
    // call case 6: other requests
    if (var_lexer === undefined) raiseUninitializedVariable("lexer");
    var call18 = request(var_lexer, "lexfile(1)", [1], call19);
    var var_tokens = call18;
    var if20 = GraceDone;
    setLineNumber(21);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call21 = request(var_util, "target", [0]);
    var string22 = new GraceString("lex");
    var opresult23 = request(call21, "==(1)", [1], string22);
    if (Grace_isTrue(opresult23)) {
      setLineNumber(23);    // compilenode call
      if (var_tokens === undefined) raiseUninitializedVariable("tokens");
      var block25 = new GraceBlock(this, 23, 1);
      block25.guard = jsTrue;
      block25.real = function block25(var_v) {
        var if26 = GraceDone;
        setLineNumber(24);    // compilenode string
        var string27 = new GraceString("\n");
        // call case 6: other requests
        var call28 = request(var_v, "value", [0]);
        var opresult29 = request(string27, "==(1)", [1], call28);
        if (Grace_isTrue(opresult29)) {
          var string30 = new GraceString("\\n");
          if26 = string30;
        } else {
          // call case 6: other requests
          var call31 = request(var_v, "value", [0]);
          if26 = call31;
        }
        var var_val = if26;
        var if32 = GraceDone;
        setLineNumber(25);    // compilenode member
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call33 = request(var_util, "verbosity", [0]);
        var opresult34 = request(call33, ">(1)", [1], new GraceNum(30));
        if (Grace_isTrue(opresult34)) {
          setLineNumber(26);    // compilenode string
          var string36 = new GraceString("");
          // call case 6: other requests
          var call37 = request(var_v, "kind", [0]);
          var opresult38 = request(string36, "++(1)", [1], call37);
          var string39 = new GraceString(": ");
          var opresult40 = request(opresult38, "++(1)", [1], string39);
          if (var_val === undefined) raiseUninitializedVariable("val");
          var opresult41 = request(opresult40, "++(1)", [1], var_val);
          var string42 = new GraceString("  [pos: ");
          var opresult43 = request(opresult41, "++(1)", [1], string42);
          // call case 6: other requests
          var call44 = request(var_v, "line", [0]);
          var opresult45 = request(opresult43, "++(1)", [1], call44);
          var string46 = new GraceString(".");
          var opresult47 = request(opresult45, "++(1)", [1], string46);
          // call case 6: other requests
          var call48 = request(var_v, "linePos", [0]);
          var opresult49 = request(opresult47, "++(1)", [1], call48);
          var string50 = new GraceString(" size: ");
          var opresult51 = request(opresult49, "++(1)", [1], string50);
          // call case 6: other requests
          var call52 = request(var_v, "size", [0]);
          var opresult53 = request(opresult51, "++(1)", [1], call52);
          var string54 = new GraceString(" indent: ");
          var opresult55 = request(opresult53, "++(1)", [1], string54);
          // call case 6: other requests
          var call56 = request(var_v, "indent", [0]);
          var opresult57 = request(opresult55, "++(1)", [1], call56);
          var string58 = new GraceString("]");
          var opresult59 = request(opresult57, "++(1)", [1], string58);
          // call case 6: other requests
          if (var_util === undefined) raiseUninitializedVariable("util");
          var call35 = request(var_util, "outprint(1)", [1], opresult59);
          if32 = call35;
        } else {
          setLineNumber(28);    // compilenode string
          var string61 = new GraceString("");
          // call case 6: other requests
          var call62 = request(var_v, "kind", [0]);
          var opresult63 = request(string61, "++(1)", [1], call62);
          var string64 = new GraceString(": ");
          var opresult65 = request(opresult63, "++(1)", [1], string64);
          if (var_val === undefined) raiseUninitializedVariable("val");
          var opresult66 = request(opresult65, "++(1)", [1], var_val);
          var string67 = new GraceString("");
          var opresult68 = request(opresult66, "++(1)", [1], string67);
          // call case 6: other requests
          if (var_util === undefined) raiseUninitializedVariable("util");
          var call60 = request(var_util, "outprint(1)", [1], opresult68);
          if32 = call60;
        }
        return if32;
      };
      let applyMeth25 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth25.methodName = "apply(1)";
      applyMeth25.paramCounts = [1];
      applyMeth25.paramNames = ["v"];
      applyMeth25.definitionLine = 23;
      applyMeth25.definitionModule = "compiler";
      block25.methods["apply(1)"] = applyMeth25;
      let matchesMeth25 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth25.methodName = "matches(1)";
      matchesMeth25.paramCounts = [1];
      matchesMeth25.paramNames = ["v"];
      matchesMeth25.definitionLine = 23;
      matchesMeth25.definitionModule = "compiler";
      block25.methods["matches(1)"] = matchesMeth25;
      // call case 2: outer request
      var call24 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_tokens, block25);
      setLineNumber(31);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call70 = request(var_util, "outfile", [0]);
      var call69 = request(call70, "close", [0]);
      setLineNumber(32);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call71 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if20 = call71;
    }
    setLineNumber(35);    // compilenode call
    if (var_tokens === undefined) raiseUninitializedVariable("tokens");
    // call case 6: other requests
    if (var_parser === undefined) raiseUninitializedVariable("parser");
    var call72 = request(var_parser, "parse(1)", [1], var_tokens);
    var var_moduleObject = call72;
    var if73 = GraceDone;
    setLineNumber(37);    // compilenode string
    var string75 = new GraceString("NativePrelude");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call76 = request(var_util, "extensions", [0]);
    var call74 = request(call76, "containsKey(1)", [1], string75);
    if (Grace_isTrue(call74)) {
      setLineNumber(38);    // compilenode string
      var string79 = new GraceString("none");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call80 = request(var_ast, "dialectNode", [0]);
      var call78 = request(call80, "new(1)", [1], string79);
      // call case 6: other requests
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      var call77 = request(var_moduleObject, "theDialect:=(1)", [1], call78);
      if73 = call77;
    }
    setLineNumber(42);    // compilenode member
    // call case 6: other requests
    if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
    var call81 = request(var_moduleObject, "value", [0]);
    var var_values = call81;
    var if82 = GraceDone;
    setLineNumber(44);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call83 = request(var_util, "target", [0]);
    var string84 = new GraceString("parse");
    var opresult85 = request(call83, "==(1)", [1], string84);
    if (Grace_isTrue(opresult85)) {
      setLineNumber(47);    // compilenode num
      // call case 6: other requests
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      var call87 = request(var_moduleObject, "pretty(1)", [1], new GraceNum(0));
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call86 = request(var_util, "outprint(1)", [1], call87);
      setLineNumber(49);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call89 = request(var_util, "outfile", [0]);
      var call88 = request(call89, "close", [0]);
      setLineNumber(50);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call90 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if82 = call90;
    }
    var if91 = GraceDone;
    setLineNumber(52);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call92 = request(var_util, "target", [0]);
    var string93 = new GraceString("grace");
    var opresult94 = request(call92, "==(1)", [1], string93);
    if (Grace_isTrue(opresult94)) {
      setLineNumber(53);    // compilenode call
      if (var_values === undefined) raiseUninitializedVariable("values");
      var block96 = new GraceBlock(this, 53, 1);
      block96.guard = jsTrue;
      block96.real = function block96(var_v) {
        setLineNumber(54);    // compilenode num
        // call case 6: other requests
        var call98 = request(var_v, "toGrace(1)", [1], new GraceNum(0));
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call97 = request(var_util, "outprint(1)", [1], call98);
        return call97;
      };
      let applyMeth96 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth96.methodName = "apply(1)";
      applyMeth96.paramCounts = [1];
      applyMeth96.paramNames = ["v"];
      applyMeth96.definitionLine = 53;
      applyMeth96.definitionModule = "compiler";
      block96.methods["apply(1)"] = applyMeth96;
      let matchesMeth96 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth96.methodName = "matches(1)";
      matchesMeth96.paramCounts = [1];
      matchesMeth96.paramNames = ["v"];
      matchesMeth96.definitionLine = 53;
      matchesMeth96.definitionModule = "compiler";
      block96.methods["matches(1)"] = matchesMeth96;
      // call case 2: outer request
      var call95 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_values, block96);
      setLineNumber(56);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call100 = request(var_util, "outfile", [0]);
      var call99 = request(call100, "close", [0]);
      setLineNumber(57);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call101 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if91 = call101;
    }
    setLineNumber(60);    // compilenode call
    if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call102 = request(var_xmodule, "checkDialect(1)", [1], var_moduleObject);
    setLineNumber(61);    // compilenode call
    if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call103 = request(var_xmodule, "doParseCheck(1)", [1], var_moduleObject);
    var if104 = GraceDone;
    setLineNumber(63);    // compilenode string
    var string106 = new GraceString("Plugin");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call107 = request(var_util, "extensions", [0]);
    var call105 = request(call107, "containsKey(1)", [1], string106);
    if (Grace_isTrue(call105)) {
      setLineNumber(64);    // compilenode call
      if (var_values === undefined) raiseUninitializedVariable("values");
      // call case 6: other requests
      var string111 = new GraceString("Plugin");
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call112 = request(var_util, "extensions", [0]);
      var call110 = request(call112, "at(1)", [1], string111);
      // call case 6: other requests
      if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
      var call109 = request(var_mirrors, "loadDynamicModule(1)", [1], call110);
      var call108 = request(call109, "processAST(1)", [1], var_values);
      if104 = call108;
    }
    var if113 = GraceDone;
    setLineNumber(66);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call114 = request(var_util, "target", [0]);
    var string115 = new GraceString("imports");
    var opresult116 = request(call114, "==(1)", [1], string115);
    if (Grace_isTrue(opresult116)) {
      setLineNumber(67);    // compilenode member
      // call case 2: outer request
      var call117 = selfRequest(var_prelude, "emptySet", [0]);
      var var_imps = call117;
      setLineNumber(68);    // compilenode object
      var obj118_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_compiler_68");
        this.outer_compiler_68 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(69);    // reuse call
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var initFun119 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
        var func120 = function(argcv, var_o) {    // method visitImport(_), line 70
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("visitImport(_)", 0, numArgs - 1);
          }
          setLineNumber(71);    // compilenode member
          // call case 6: other requests
          var call122 = request(var_o, "path", [0]);
          // call case 6: other requests
          if (var_imps === undefined) raiseUninitializedVariable("imps");
          var call121 = request(var_imps, "add(1)", [1], call122);
          setLineNumber(72);    // typecheck
          assertTypeOrMsg(GraceFalse, var_Boolean, "result of method visitImport(_)", "Boolean");
          return GraceFalse;
        };    // end of method visitImport(_)
        this.methods["visitImport(1)"] = func120;
        func120.methodName = "visitImport(1)";
        func120.paramCounts = [1];
        func120.paramNames = ["o"];
        func120.definitionLine = 70;
        func120.definitionModule = "compiler";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 68;
            m.definitionModule = "compiler";
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
        var obj118_init = function() {    // init of object on line 68
          initFun119.call(this);
        };
        return obj118_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj118 = emptyGraceObject("vis", "compiler", 68);
      var obj118_init = obj118_build.call(obj118, null, this, [], []);
      obj118_init.call(obj118);  // end of compileobject
      var var_vis = obj118;
      setLineNumber(75);    // compilenode call
      if (var_vis === undefined) raiseUninitializedVariable("vis");
      // call case 6: other requests
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      var call123 = request(var_moduleObject, "accept(1)", [1], var_vis);
      setLineNumber(77);    // compilenode block
      var block125 = new GraceBlock(this, 77, 1);
      block125.guard = jsTrue;
      block125.real = function block125(var_im) {
        setLineNumber(78);    // compilenode call
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call126 = request(var_util, "outprint(1)", [1], var_im);
        return call126;
      };
      let applyMeth125 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth125.methodName = "apply(1)";
      applyMeth125.paramCounts = [1];
      applyMeth125.paramNames = ["im"];
      applyMeth125.definitionLine = 77;
      applyMeth125.definitionModule = "compiler";
      block125.methods["apply(1)"] = applyMeth125;
      let matchesMeth125 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth125.methodName = "matches(1)";
      matchesMeth125.paramCounts = [1];
      matchesMeth125.paramNames = ["im"];
      matchesMeth125.definitionLine = 77;
      matchesMeth125.definitionModule = "compiler";
      block125.methods["matches(1)"] = matchesMeth125;
      // call case 6: other requests
      setLineNumber(77);    // compilenode member
      // call case 6: other requests
      if (var_imps === undefined) raiseUninitializedVariable("imps");
      // call case 6: other requests
      // call case 2: outer request
      var call129 = selfRequest(var_prelude, "list", [0]);
      var call128 = request(call129, "withAll(1)", [1], var_imps);
      var call127 = request(call128, "sort", [0]);
      var call124 = request(call127, "do(1)", [1], block125);
      setLineNumber(80);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call131 = request(var_util, "outfile", [0]);
      var call130 = request(call131, "close", [0]);
      setLineNumber(81);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call132 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if113 = call132;
    }
    setLineNumber(83);    // compilenode call
    if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
    // call case 6: other requests
    if (var_identifierresolution === undefined) raiseUninitializedVariable("identifierresolution");
    var call133 = request(var_identifierresolution, "resolve(1)", [1], var_moduleObject);
    var_moduleObject = call133;
    var if134 = GraceDone;
    setLineNumber(84);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call135 = request(var_util, "target", [0]);
    var string136 = new GraceString("processed-ast");
    var opresult137 = request(call135, "==(1)", [1], string136);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call138 = request(var_util, "target", [0]);
    var string139 = new GraceString("ast");
    var opresult140 = request(call138, "==(1)", [1], string139);
    var opresult141 = request(opresult137, "||(1)", [1], opresult140);
    if (Grace_isTrue(opresult141)) {
      setLineNumber(85);    // compilenode string
      var string143 = new GraceString("=====================================");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call142 = request(var_util, "outprint(1)", [1], string143);
      setLineNumber(86);    // compilenode string
      var string145 = new GraceString("module-level symbol table");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call144 = request(var_util, "outprint(1)", [1], string145);
      setLineNumber(87);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      var call148 = request(var_moduleObject, "scope", [0]);
      var call147 = request(call148, "asStringWithParents", [0]);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call146 = request(var_util, "outprint(1)", [1], call147);
      setLineNumber(88);    // compilenode string
      var string150 = new GraceString("=====================================");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call149 = request(var_util, "outprint(1)", [1], string150);
      setLineNumber(89);    // compilenode num
      // call case 6: other requests
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      var call152 = request(var_moduleObject, "pretty(1)", [1], new GraceNum(0));
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call151 = request(var_util, "outprint(1)", [1], call152);
      setLineNumber(90);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call154 = request(var_util, "outfile", [0]);
      var call153 = request(call154, "close", [0]);
      setLineNumber(91);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call155 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if134 = call155;
    }
    setLineNumber(94);    // compilenode call
    if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call156 = request(var_xmodule, "doAstCheck(1)", [1], var_moduleObject);
    setLineNumber(97);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call158 = request(var_util, "target", [0]);
    var cases157 = [];
    setLineNumber(98);    // compilenode block
    var block159 = new GraceBlock(this, 98, 1);
    var string160 = new GraceString("js");
    block159.paramTypes = [string160];
    var matches161 = function(var___95____95__1) {
      var string162 = new GraceString("js");
      if (!Grace_isTrue(request(string162, "matches(1)", [1], var___95____95__1)))
          return false;
      return true;
    };
    block159.guard = matches161;
    block159.real = function block159(var___95____95__1) {
      setLineNumber(99);    // compilenode call
      if (var_moduleObject === undefined) raiseUninitializedVariable("moduleObject");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call164 = request(var_util, "outfile", [0]);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call165 = request(var_util, "buildtype", [0]);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call166 = request(var_util, "gracelibPath", [0]);
      // call case 6: other requests
      if (var_genjs === undefined) raiseUninitializedVariable("genjs");
      var call163 = request(var_genjs, "compile(4)", [4], var_moduleObject, call164, call165, call166);
      return call163;
    };
    let applyMeth159 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth159.methodName = "apply(1)";
    applyMeth159.paramCounts = [1];
    applyMeth159.paramNames = ["__1"];
    applyMeth159.definitionLine = 98;
    applyMeth159.definitionModule = "compiler";
    block159.methods["apply(1)"] = applyMeth159;
    let matchesMeth159 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth159.methodName = "matches(1)";
    matchesMeth159.paramCounts = [1];
    matchesMeth159.paramNames = ["__1"];
    matchesMeth159.definitionLine = 98;
    matchesMeth159.definitionModule = "compiler";
    block159.methods["matches(1)"] = matchesMeth159;
    cases157.push(block159);
    setLineNumber(100);    // compilenode block
    var block167 = new GraceBlock(this, 100, 0);
    block167.guard = jsTrue;
    block167.real = function block167() {
      setLineNumber(101);    // compilenode string
      var string169 = new GraceString("minigrace: no such target '");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call170 = request(var_util, "target", [0]);
      var opresult171 = request(string169, "++(1)", [1], call170);
      var string172 = new GraceString("'\n");
      var opresult173 = request(opresult171, "++(1)", [1], string172);
      // call case 6: other requests
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call174 = request(var_io, "error", [0]);
      var call168 = request(call174, "write(1)", [1], opresult173);
      setLineNumber(102);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call175 = request(var_sys, "exit(1)", [1], new GraceNum(1));
      return call175;
    };
    let applyMeth167 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth167.methodName = "apply";
    applyMeth167.paramCounts = [0];
    applyMeth167.paramNames = [];
    applyMeth167.definitionLine = 100;
    applyMeth167.definitionModule = "compiler";
    block167.methods["apply"] = applyMeth167;
    setLineNumber(97);    // compilematchcase
    var matchres157 = matchCase(call158,cases157,block167);
    return matchres157;
  };
  let applyMeth17 = function apply (argcv) {
      return this.real.apply(this.receiver);
  };
  applyMeth17.methodName = "apply";
  applyMeth17.paramCounts = [0];
  applyMeth17.paramNames = [];
  applyMeth17.definitionLine = 19;
  applyMeth17.definitionModule = "compiler";
  block17.methods["apply"] = applyMeth17;
  var cases16 = [];
  setLineNumber(104);    // compilenode block
  var block176 = new GraceBlock(this, 104, 1);
  // call case 6: other requests
  if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
  var call177 = request(var_errormessages, "SyntaxError", [0]);
  block176.paramTypes = [call177];
  var matches178 = function(var_se) {
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call179 = request(var_errormessages, "SyntaxError", [0]);
    if (!Grace_isTrue(request(call179, "matches(1)", [1], var_se)))
        return false;
    return true;
  };
  block176.guard = matches178;
  block176.real = function block176(var_se) {
    setLineNumber(105);    // compilenode string
    var string181 = new GraceString("Syntax error: ");
    // call case 6: other requests
    var call182 = request(var_se, "message", [0]);
    var opresult183 = request(string181, "++(1)", [1], call182);
    var string184 = new GraceString("");
    var opresult185 = request(opresult183, "++(1)", [1], string184);
    // call case 6: other requests
    // call case 6: other requests
    var call187 = request(var_se, "data", [0]);
    var call186 = request(call187, "lineNum", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call189 = request(var_se, "data", [0]);
    var call188 = request(call189, "position", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call191 = request(var_se, "data", [0]);
    var call190 = request(call191, "arrow", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call193 = request(var_se, "data", [0]);
    var call192 = request(call193, "sugg", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call180 = request(var_util, "generalError(5)", [5], opresult185, call186, call188, call190, call192);
    return call180;
  };
  let applyMeth176 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth176.methodName = "apply(1)";
  applyMeth176.paramCounts = [1];
  applyMeth176.paramNames = ["se"];
  applyMeth176.definitionLine = 104;
  applyMeth176.definitionModule = "compiler";
  block176.methods["apply(1)"] = applyMeth176;
  let matchesMeth176 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth176.methodName = "matches(1)";
  matchesMeth176.paramCounts = [1];
  matchesMeth176.paramNames = ["se"];
  matchesMeth176.definitionLine = 104;
  matchesMeth176.definitionModule = "compiler";
  block176.methods["matches(1)"] = matchesMeth176;
  cases16.push(block176);
  setLineNumber(106);    // compilenode block
  var block194 = new GraceBlock(this, 106, 1);
  // call case 6: other requests
  if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
  var call195 = request(var_errormessages, "ReuseError", [0]);
  block194.paramTypes = [call195];
  var matches196 = function(var_se) {
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call197 = request(var_errormessages, "ReuseError", [0]);
    if (!Grace_isTrue(request(call197, "matches(1)", [1], var_se)))
        return false;
    return true;
  };
  block194.guard = matches196;
  block194.real = function block194(var_se) {
    setLineNumber(107);    // compilenode string
    var string199 = new GraceString("Reuse error: ");
    // call case 6: other requests
    var call200 = request(var_se, "message", [0]);
    var opresult201 = request(string199, "++(1)", [1], call200);
    var string202 = new GraceString("");
    var opresult203 = request(opresult201, "++(1)", [1], string202);
    // call case 6: other requests
    // call case 6: other requests
    var call205 = request(var_se, "data", [0]);
    var call204 = request(call205, "lineNum", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call207 = request(var_se, "data", [0]);
    var call206 = request(call207, "position", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call209 = request(var_se, "data", [0]);
    var call208 = request(call209, "arrow", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call211 = request(var_se, "data", [0]);
    var call210 = request(call211, "sugg", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call198 = request(var_util, "generalError(5)", [5], opresult203, call204, call206, call208, call210);
    return call198;
  };
  let applyMeth194 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth194.methodName = "apply(1)";
  applyMeth194.paramCounts = [1];
  applyMeth194.paramNames = ["se"];
  applyMeth194.definitionLine = 106;
  applyMeth194.definitionModule = "compiler";
  block194.methods["apply(1)"] = applyMeth194;
  let matchesMeth194 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth194.methodName = "matches(1)";
  matchesMeth194.paramCounts = [1];
  matchesMeth194.paramNames = ["se"];
  matchesMeth194.definitionLine = 106;
  matchesMeth194.definitionModule = "compiler";
  block194.methods["matches(1)"] = matchesMeth194;
  cases16.push(block194);
  setLineNumber(108);    // compilenode block
  var block212 = new GraceBlock(this, 108, 1);
  // call case 6: other requests
  if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
  var call213 = request(var_errormessages, "CompilationError", [0]);
  block212.paramTypes = [call213];
  var matches214 = function(var_se) {
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call215 = request(var_errormessages, "CompilationError", [0]);
    if (!Grace_isTrue(request(call215, "matches(1)", [1], var_se)))
        return false;
    return true;
  };
  block212.guard = matches214;
  block212.real = function block212(var_se) {
    setLineNumber(109);    // compilenode string
    var string217 = new GraceString("Compilation error: ");
    // call case 6: other requests
    var call218 = request(var_se, "message", [0]);
    var opresult219 = request(string217, "++(1)", [1], call218);
    var string220 = new GraceString("");
    var opresult221 = request(opresult219, "++(1)", [1], string220);
    // call case 6: other requests
    // call case 6: other requests
    var call223 = request(var_se, "data", [0]);
    var call222 = request(call223, "lineNum", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call225 = request(var_se, "data", [0]);
    var call224 = request(call225, "position", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call227 = request(var_se, "data", [0]);
    var call226 = request(call227, "arrow", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call229 = request(var_se, "data", [0]);
    var call228 = request(call229, "sugg", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call216 = request(var_util, "generalError(5)", [5], opresult221, call222, call224, call226, call228);
    return call216;
  };
  let applyMeth212 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth212.methodName = "apply(1)";
  applyMeth212.paramCounts = [1];
  applyMeth212.paramNames = ["se"];
  applyMeth212.definitionLine = 108;
  applyMeth212.definitionModule = "compiler";
  block212.methods["apply(1)"] = applyMeth212;
  let matchesMeth212 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth212.methodName = "matches(1)";
  matchesMeth212.paramCounts = [1];
  matchesMeth212.paramNames = ["se"];
  matchesMeth212.definitionLine = 108;
  matchesMeth212.definitionModule = "compiler";
  block212.methods["matches(1)"] = matchesMeth212;
  cases16.push(block212);
  setLineNumber(19);    // compiletrycatch
  var catchres16 = tryCatch(block17,cases16,false);
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_compiler = gracecode_compiler;
if (typeof window !== "undefined")
  window.gracecode_compiler = gracecode_compiler;
gracecode_compiler.imports = ["ast", "buildinfo", "errormessages", "genjs", "identifierresolution", "io", "lexer", "mirrors", "parser", "standardGrace", "sys", "unicode", "util", "xmodule"];
gracecode_compiler.definitionModule = "compiler";
gracecode_compiler.definitionLine = 1;
