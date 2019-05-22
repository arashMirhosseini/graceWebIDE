var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["genjs"] = "classes:\nconfidential:\n auto_count\n auto_count:=(auto_count': Unknown) \u2192 Done\n bblock\n bblock:=(bblock': Unknown) \u2192 Done\n buildtype\n buildtype:=(buildtype': Unknown) \u2192 Done\n compilationDepth\n compilationDepth:=(compilationDepth': Unknown) \u2192 Done\n compileobjouter(2)\n constants\n constants:=(constants': Unknown) \u2192 Done\n debugMode\n debugMode:=(debugMode': Unknown) \u2192 Done\n declaredvars\n declaredvars:=(declaredvars': Unknown) \u2192 Done\n emitArgChecks\n emitArgChecks:=(emitArgChecks': Unknown) \u2192 Done\n emitPositions\n emitPositions:=(emitPositions': Unknown) \u2192 Done\n emitTypeChecks\n emitTypeChecks:=(emitTypeChecks': Unknown) \u2192 Done\n emitUndefinedChecks\n emitUndefinedChecks:=(emitUndefinedChecks': Unknown) \u2192 Done\n emod\n emod:=(emod': Unknown) \u2192 Done\n importedModules\n imports\n inBlock\n inBlock:=(inBlock': Unknown) \u2192 Done\n indent\n indent:=(indent': Unknown) \u2192 Done\n initializedVars\n initializedVars:=(initializedVars': Unknown) \u2192 Done\n modNameAsString\n modNameAsString:=(modNameAsString': Unknown) \u2192 Done\n modname\n modname:=(modname': Unknown) \u2192 Done\n nodeTally\n outfile\n outfile:=(outfile': Unknown) \u2192 Done\n output\n output:=(output': Unknown) \u2192 Done\n pad1\n pad1:=(pad1': Unknown) \u2192 Done\n priorLineComment\n priorLineComment:=(priorLineComment': Unknown) \u2192 Done\n priorLineEmitted\n priorLineEmitted:=(priorLineEmitted': Unknown) \u2192 Done\n priorLineSeen\n priorLineSeen:=(priorLineSeen': Unknown) \u2192 Done\n standardPrelude\n topLevelTypes\n usedvars\n usedvars:=(usedvars': Unknown) \u2192 Done\n valueCompare\n verbosity\n verbosity:=(verbosity': Unknown) \u2192 Done\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n ast\n collectionsPrelude\n errormessages\n fastDict\n identifierKinds\n io\n mirrors\n standardGrace\n sys\n unixFilePath\n util\n xmodule\npath:\n /Users/black/Development/mg/gracelang/minigrace/genjs.grace\npublic:\n addSuffix(1)to(1)\n aliasList(1)\n assembleArguments(1)\n basename(1)\n clearLineNumber(1)\n compile(4)\n compileArgumentTypeChecks(1)\n compileArguments(2)\n compileBuildAndInitFunctions(1)inMethod(1)\n compileBuildMethodFor(1)withFreshCall(1)inside(1)\n compileBuildMethodFor(1)withObjCon(1)inside(1)\n compileCallToBuildMethod(1)withArgs(1)\n compileCheckThat(1)called(1)hasType(1)onLine(1)\n compileDefaultsForTypeParameters(1)extraParams(1)\n compileDummyMethod(3)\n compileFreshMethod(2)\n compileGuard(2)\n compileInherit(1)forClass(1)\n compileMetadata(3)\n compileMethodBody(1)\n compileMethodBodyWithTypecheck(1)\n compileMethodBodyWithoutLast(1)\n compileMethodPostamble(3)\n compileMethodPreamble(3)withParams(1)\n compileNativeCode(1)\n compileNormalArguments(2)\n compileNormalMethod(2)\n compileNull(1)\n compileOnceWrapper(3)\n compileOtherRequest(2)\n compileOuter(1)\n compileOuterRequest(2)\n compileOwnInitialization(2)\n compileParameterDebugFrame(2)\n compilePreludeRequest(2)\n compilePrint(1)\n compileReuseCall(1)forClass(1)aliases(1)exclusions(1)\n compileSelfRequest(2)\n compileSimpleAccessor(1)\n compileSuperInitialization(1)\n compileTypeArguments(2)\n compileUninitializedCheck(1)\n compileUse(1)in(1)\n compilearray(1)\n compilebind(1)\n compileblock(1)\n compilecall(1)\n compiledefdec(1)\n compiledialect(1)\n compileidentifier(1)\n compileif(1)\n compileimport(1)\n compilematchcase(1)\n compilemember(1)\n compilemethodnode(1)in(1)\n compilemethodtypes(2)\n compilenode(1)\n compileobjdefdec(2)\n compileobject(2)\n compileobjvardec(2)\n compileop(1)\n compilereturn(1)\n compiletrycatch(1)\n compiletypedec(1)in(1)\n compiletypeliteral(1)in(1)\n compilevardec(1)\n create(1)field(1)in(1)\n debugModePrefix\n debugModeSuffix\n decreaseindent\n emitBufferedOutput\n escapeident(1)\n escapestring(1)\n exclusionList(1)\n formatModname(1)\n hasTypedParams(1)\n increaseindent\n initializeCodeGenerator(1)\n installLocalAttributesOf(1)into(1)\n literalList(1)\n noteLineNumber(1)comment(1)\n out(1)\n outUnnumbered(1)\n outerProp(1)\n outputGct\n outputModuleDefinition(1)\n outputModuleMetadata(1)\n outputSource\n paramNames(1)\n paramlist(1)\n partl(1)\n printNodeTally\n removeTypeArgs(1)\n restoreInitializedVars(1)\n runJsCode(2)\n saveInitializedVars\n stringList(1)\n stripLeadingZeros(1)\n tallyNode(1)\n typeFunBody(1)named(1)\n typeParamNames(1)\n typeParamlist(1)\n uidWithPrefix(1)\n varf(1)\npublicMethodTypes:\n addSuffix(tail)to(root)\n aliasList(inhNode)\n assembleArguments(args)\n basename(filepath)\n clearLineNumber(n)\n compile(moduleObject, of, bt, glPath)\n compileArgumentTypeChecks(o)\n compileArguments(o, args)\n compileBuildAndInitFunctions(o)inMethod(methNode)\n compileBuildMethodFor(methNode)withFreshCall(callExpr)inside(outerRef)\n compileBuildMethodFor(methNode)withObjCon(objNode)inside(outerRef)\n compileCallToBuildMethod(callExpr)withArgs(args)\n compileCheckThat(val)called(description)hasType(expectedType)onLine(lineNumber)\n compileDefaultsForTypeParameters(o)extraParams(extra)\n compileDummyMethod(o, selfobj, kind)\n compileFreshMethod(o, outerRef)\n compileGuard(o, paramList)\n compileInherit(inhNode)forClass(className)\n compileMetadata(o, funcName, name)\n compileMethodBody(methNode)\n compileMethodBodyWithTypecheck(o)\n compileMethodBodyWithoutLast(methNode)\n compileMethodPostamble(o, funcName, name)\n compileMethodPreamble(o, funcName, name)withParams(p)\n compileNativeCode(o)\n compileNormalArguments(o, args)\n compileNormalMethod(o, selfobj)\n compileNull(o)\n compileOnceWrapper(o, selfobj, name)\n compileOtherRequest(o, args)\n compileOuter(o)\n compileOuterRequest(o, args)\n compileOwnInitialization(o, selfr)\n compileParameterDebugFrame(o, name)\n compilePreludeRequest(o, args)\n compilePrint(o)\n compileReuseCall(callNode)forClass(className)aliases(aStr)exclusions(eStr)\n compileSelfRequest(o, args)\n compileSimpleAccessor(o)\n compileSuperInitialization(inheritsNode)\n compileTypeArguments(o, args)\n compileUninitializedCheck(id)\n compileUse(useNode)in(objNode)\n compilearray(o)\n compilebind(o)\n compileblock(o)\n compilecall(o)\n compiledefdec(o)\n compiledialect(o)\n compileidentifier(o)\n compileif(o)\n compileimport(o)\n compilematchcase(o)\n compilemember(o)\n compilemethodnode(o)in(objref)\n compilemethodtypes(func, o)\n compilenode(o)\n compileobjdefdec(o, selfr)\n compileobject(o, outerRef)\n compileobjvardec(o, selfr)\n compileop(o)\n compilereturn(o)\n compiletrycatch(o)\n compiletypedec(o)in(obj)\n compiletypeliteral(o)in(obj)\n compilevardec(o)\n create(kind)field(o)in(objr)\n debugModePrefix\n debugModeSuffix\n decreaseindent\n emitBufferedOutput\n escapeident(vn)\n escapestring(s)\n exclusionList(inhNode)\n formatModname(name)\n hasTypedParams(o)\n increaseindent\n initializeCodeGenerator(moduleObject)\n installLocalAttributesOf(o)into(objr)\n literalList(lits)\n noteLineNumber(n)comment(c)\n out(s)\n outUnnumbered(s)\n outerProp(node)\n outputGct\n outputModuleDefinition(moduleObject)\n outputModuleMetadata(moduleObject)\n outputSource\n paramNames(o)\n paramlist(o)\n partl(o)\n printNodeTally\n removeTypeArgs(str)\n restoreInitializedVars(savedState)\n runJsCode(of, glPath)\n saveInitializedVars\n stringList(strs)\n stripLeadingZeros(str)\n tallyNode(kind)\n typeFunBody(typeExpr)named(tName)\n typeParamNames(o)\n typeParamlist(o)\n uidWithPrefix(str)\n varf(vn)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["genjs"] = [
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "import \"unixFilePath\" as filePath",
    "import \"xmodule\" as xmodule",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "import \"identifierKinds\" as k",
    "import \"fastDict\" as map",
    "",
    "def nodeTally = map.dictionary.empty",
    "",
    "var indent := \"\"",
    "var verbosity := 30",
    "var pad1 := 1",
    "var auto_count := 0",
    "var constants := list []",
    "var output := list []",
    "var usedvars := list []",
    "var declaredvars := list []",
    "var initializedVars := set.empty",
    "",
    "method saveInitializedVars {",
    "    // returns the current set of initialized vars,",
    "    // to be used in restoreInitializedVars",
    "    def result = initializedVars",
    "    initializedVars := set.empty",
    "    result",
    "}",
    "",
    "method restoreInitializedVars(savedState) {",
    "    // restores the set of initialized vars to savedState,",
    "    // the result od saveInitializedVars",
    "    initializedVars := savedState",
    "}",
    "",
    "",
    "var bblock := \"entry\"",
    "",
    "var outfile",
    "var modname := \"main\"",
    "var buildtype := \"bc\"",
    "var inBlock := false",
    "var compilationDepth := 0",
    "def importedModules = set.empty",
    "def topLevelTypes = set.empty",
    "def imports = util.requiredModules",
    "var debugMode := false",
    "var priorLineSeen := 0",
    "var priorLineComment := \"\"",
    "var priorLineEmitted := 0",
    "var emitTypeChecks := true",
    "var emitUndefinedChecks := true",
    "var emitArgChecks := true",
    "var emitPositions := true",
    "var emod        // the name of the module being compiled, escaped",
    "                // so that it is a legal identifier",
    "var modNameAsString     // the name of the module surrounded by quotes,",
    "                        // with internal special chars escaped.",
    "",
    "/////////////////////////////////////////////////////////////",
    "//",
    "//  Utility methods",
    "//",
    "/////////////////////////////////////////////////////////////",
    "",
    "method increaseindent {",
    "    indent := indent ++ \"  \"",
    "}",
    "",
    "method decreaseindent {",
    "    if(indent.size <= 2) then {",
    "        indent := \"\"",
    "    } else {",
    "        indent := indent.substringFrom 3",
    "    }",
    "}",
    "",
    "method formatModname(name) {",
    "    \"gracecode_\" ++ escapeident (basename(name))",
    "}",
    "",
    "method basename(filepath) {",
    "    var bnm := \"\"",
    "    for (filepath) do {c->",
    "        if (c == \"/\") then {",
    "            bnm := \"\"",
    "        } else {",
    "            bnm := bnm ++ c",
    "        }",
    "    }",
    "    bnm",
    "}",
    "",
    "method outerProp(node) { \"outer_\" ++ emod ++ \"_\" ++ node.line }",
    "",
    "method noteLineNumber(n)comment(c) {",
    "    // remember the current line number, so that it can be generated if needed",
    "    if (n ≠ 0) then {",
    "        priorLineSeen := n",
    "        priorLineComment := c",
    "    }",
    "}",
    "",
    "method clearLineNumber(n) {",
    "    // clear and reset the remembered line number.",
    "    // Used at the start of a method",
    "    priorLineComment := \"cleared on line {n}\"",
    "    priorLineSeen := 0",
    "    priorLineEmitted := 0",
    "}",
    "",
    "method out(s) {",
    "    // output code, but first output code to set the line number",
    "    if (emitPositions && (priorLineSeen != priorLineEmitted)) then {",
    "        output.push \"{indent}setLineNumber({priorLineSeen});    // {priorLineComment}\"",
    "        priorLineEmitted := priorLineSeen",
    "    }",
    "    output.push(indent ++ s)",
    "    return done",
    "}",
    "",
    "method outUnnumbered(s) {",
    "    // output code that does not correspond to any source line",
    "    output.push(indent ++ s)",
    "}",
    "",
    "method emitBufferedOutput {",
    "    for (output) do { o ->",
    "        util.outprint(o)",
    "    }",
    "    outfile.close",
    "}",
    "",
    "method escapeident(vn) {",
    "    // escapes characters not legal in an identifer using __«codepoint»__",
    "    native \"js\" code ‹return new GraceString(escapeident(var_vn._value));›",
    "}",
    "method escapestring(s) {",
    "    // escapes embedded double-quotes, backslashes, newlines and non-ascii chars",
    "    native \"js\" code ‹return new GraceString(escapestring(var_s._value));›",
    "}",
    "method varf(vn) {",
    "    \"var_\" ++ escapeident(vn)",
    "}",
    "method uidWithPrefix(str) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    str ++ myc",
    "}",
    "",
    "/////////////////////////////////////////////////////////////",
    "//",
    "//  Compilation methods for AST nodes",
    "//",
    "/////////////////////////////////////////////////////////////",
    "",
    "method compilearray(o) {",
    "    def reg = uidWithPrefix \"array\"",
    "    var vals := list []",
    "    for (o.value) do { a -> vals.push(compilenode(a)) }",
    "    out \"var {reg} = new GraceSequence({literalList(vals)});\"",
    "    o.register := reg",
    "}",
    "method compilemember(o) {",
    "    // member nodes are just method requests without arguments.",
    "    compilecall(o)",
    "}",
    "method compileobjouter(o, outerRef) is confidential {",
    "    def outerPropName = outerProp(o)",
    "    out \"this.closureKeys = this.closureKeys || [];\"",
    "    out \"this.closureKeys.push(\\\"{outerPropName}\\\");\"",
    "    out \"this.{outerPropName} = {outerRef};\"",
    "}",
    "method compileCheckThat(val) called (description)",
    "                        hasType (expectedType) onLine(lineNumber) {",
    "    // Compiles a type check.",
    "    // expectedType is an astNode representing the type expression;",
    "    // val the register that holds the value to be type-checked;",
    "    // description is a String describing the nature of val, such as",
    "    // \"argument 2 to `foobaz(_)with(_)`\", which will be used in the error",
    "    // message, and lineNumber the line on which the error occurred (or 0",
    "    // if we don't want to emit a setLineNumber command).",
    "",
    "    if (emitTypeChecks) then {",
    "        if ((false ≠ expectedType) && (\"never returns\" ≠ val)) then {",
    "            if ((expectedType.value ≠ \"Unknown\") && (expectedType.value ≠ \"Done\")) then {",
    "                def nm_t = compilenode(expectedType)",
    "                if (lineNumber ≠ 0) then {",
    "                    noteLineNumber(lineNumber) comment \"typecheck\"",
    "                }",
    "                def typeDesc = removeTypeArgs(expectedType.toGrace 0.quoted)",
    "                out \"assertTypeOrMsg({val}, {nm_t}, \\\"{description}\\\", \\\"{typeDesc}\\\");\"",
    "            }",
    "        }",
    "    }",
    "}",
    "method removeTypeArgs(str) {",
    "    def leftBracketIx = str.indexOf \"⟦\" ifAbsent { return str }",
    "    return str.substringFrom 1 to (leftBracketIx - 1)",
    "}",
    "method compileobjdefdec(o, selfr) {",
    "    def val = compilenode(o.value)",
    "    def oName = o.name.value",
    "    def nm = escapeident(oName)",
    "    compileCheckThat (val) called \"value bound to {escapestring(oName)}\"",
    "          hasType (o.dtype) onLine (o.line)",
    "    out \"{selfr}.data.{nm} = {val};\"",
    "}",
    "method compileobjvardec(o, selfr) {",
    "    def oName = o.name.value",
    "    def nm = escapeident(oName)",
    "    if (false == o.value) then {",
    "        out \"{selfr}.data.{nm} = undefined;\"",
    "        return",
    "    }",
    "    def val = compilenode(o.value)",
    "    compileCheckThat(val) called \"value assigned to {escapestring(oName)}\"",
    "          hasType (o.dtype) onLine (o.line)",
    "    out \"{selfr}.data.{nm} = {val};\"",
    "}",
    "",
    "method create (kind) field (o) in (objr) {",
    "    // compile code that creates a field, and appropriate",
    "    // accessor method(s), in objr, the object under construction",
    "    def nm = escapestring(o.name.value)",
    "    def nmi = escapeident(o.name.value)",
    "    def rFun = uidWithPrefix \"reader\" ++ \"_\" ++ nmi",
    "    def fieldName = if (o.parentKind == \"module\") then {",
    "        \"var_{nmi}\"     // this var_{nmi} variable must be declared by caller",
    "    } else {",
    "        out \"{objr}.data.{nmi} = undefined;\"",
    "        \"{objr}.data.{nmi}\"",
    "    }",
    "    out \"var {rFun} = function() \\{  // reader method {nm}\"",
    "    if (emitUndefinedChecks) then {",
    "        out \"    if ({fieldName} === undefined) raiseUninitializedVariable(\\\"{nm}\\\");\"",
    "    }",
    "    out \"    return {fieldName};\"",
    "    out \"};\"",
    "    out \"{rFun}.is{kind.capitalized} = true;\"",
    "    if (o.isReadable.not) then {",
    "        out \"{rFun}.confidential = true;\"",
    "    }",
    "    out \"{objr}.methods[\\\"{nm}\\\"] = {rFun};\"",
    "    if (kind == \"var\") then {",
    "        def wFun = uidWithPrefix \"writer\" ++ \"_\" ++ nmi",
    "        out \"var {wFun} = function(argcv, n) \\{   // writer method {nm}:=(_)\"",
    "        increaseindent",
    "        compileCheckThat \"n\" called \"argument to {nm}:=(_)\"",
    "              hasType (o.dtype) onLine 0",
    "        out \"{fieldName} = n;\"",
    "        out \"return GraceDone;\"",
    "        decreaseindent",
    "        out \"\\};\"",
    "        if (o.isWritable.not) then {",
    "            out \"{wFun}.confidential = true;\"",
    "        }",
    "        out \"{objr}.methods[\\\"{nm}:=(1)\\\"] = {wFun};\"",
    "    }",
    "}",
    "",
    "method installLocalAttributesOf(o) into (objr) {",
    "    var mutable := false",
    "",
    "    for (o.body) do { e ->",
    "        if (e.isMethod) then {",
    "            compilemethodnode(e) in (objr)",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            create \"var\" field (e) in (objr)",
    "            mutable := true",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            if (e.value.isNull.not) then {",
    "                create \"def\" field (e) in (objr)",
    "            }",
    "        } elseif { e.isTypeDec } then {",
    "            compiletypedec(e) in (objr)",
    "        }",
    "    }",
    "    if (mutable) then {",
    "        out \"{objr}.mutable = true;\"",
    "    }",
    "}",
    "",
    "method compileOwnInitialization(o, selfr) {",
    "    o.body.do { e ->",
    "        if (e.isFieldDec) then {",
    "            if (e.kind == \"vardec\") then {",
    "                compileobjvardec(e, selfr)",
    "            } elseif { e.kind == \"defdec\" } then {",
    "                compileobjdefdec(e, selfr)",
    "            }",
    "        } elseif { e.isObject } then {",
    "            compileobject(e, selfr)",
    "        } elseif { e.isExecutable } then {",
    "            compilenode(e)",
    "        }",
    "    }",
    "}",
    "",
    "method compileBuildAndInitFunctions(o) inMethod (methNode) {",
    "    // o is an objectNode.  In the compiled code, `this` references the current",
    "    // object, which will become the outer object of `selfr`, the object here",
    "    // being constructed.  methNode respresents the method containing o;",
    "    // if o is not inside a method, methdNode is false.",
    "",
    "    // The build function adds the attributes defined by o to `this`,",
    "    // and returns as its result the init function, which, when called, will",
    "    // initialize `this`",
    "",
    "    var origInBlock := inBlock",
    "    inBlock := false",
    "",
    "    def selfr = uidWithPrefix \"obj\"",
    "    o.register := selfr",
    "    def inheritsStmt = o.superclass",
    "    var params := \"\"",
    "    var typeParams := \"\"",
    "    if (false != methNode) then {",
    "        params := paramlist(methNode)",
    "        typeParams := typeParamlist(methNode)",
    "    }",
    "    out \"var {selfr}_build = function(ignore{params}, outerObj, aliases, exclusions{typeParams}) \\{\"",
    "        // At execution time, `this` will be the object under construction.",
    "        // `outerObj` will be the current object, which",
    "        // will become the `outer` of the object under construction.",
    "        // `aliases` and `exclusions` are JS arrays of aliases and method names,",
    "        // ultimately from an `inherit` or `use` statement.",
    "    increaseindent",
    "    compileobjouter(o, \"outerObj\")",
    "    out \"const inheritedExclusions = \\{ };\"",
    "        // this object is used to save methods already in the ouc that",
    "        // would be overridden by local methods, aliases or excluded methods, were",
    "        // the excluded methods not excluded.",
    "    out \"for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) \\{\"",
    "    out \"    const exMeth = exclusions[eix];\"",
    "    out \"    inheritedExclusions[exMeth] = this.methods[exMeth]; \\};\"",
    "            // some of these methods will be undefined; that's OK",
    "    if (false != inheritsStmt) then {",
    "        compileInherit(inheritsStmt) forClass (o.nameString)",
    "    }",
    "    o.usedTraits.do { t ->",
    "        compileUse(t) in (o)",
    "    }",
    "    installLocalAttributesOf(o) into \"this\"",
    "    out \"const overridenByAliases = \\{ };\"",
    "    out \"for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) \\{\"",
    "    out \"    const a = aliases[aix];\"",
    "    out \"    const newNm = a.newName;\"",
    "    out \"    const oldNm = a.oldName;\"",
    "    out \"    overridenByAliases[newNm] = this.methods[newNm];\"",
    "    out \"    const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);\"",
    "    out \"    m.definitionLine = {o.line};\"",
    "    out \"    m.definitionModule = {modNameAsString};\"",
    "    out \"    this.methods[newNm] = m;\"",
    "    out \"}\"",
    "    out \"for (let exName in inheritedExclusions) \\{\"",
    "    out \"    if (inheritedExclusions.hasOwnProperty(exName)) \\{\"",
    "    out \"        if (inheritedExclusions[exName]) \\{\"",
    "    out \"            this.methods[exName] = inheritedExclusions[exName];\"",
    "    out \"        } else \\{\"",
    "    out \"            delete this.methods[exName];\"",
    "    out \"        }\"",
    "    out \"    }\"",
    "    out \"}\"",
    "    out \"var {selfr}_init = function() \\{    // init of object on line {o.line}\"",
    "        // At execution time, `this` will be the object being initialized.",
    "    increaseindent",
    "    if (false != inheritsStmt) then {",
    "        compileSuperInitialization(inheritsStmt)",
    "    }",
    "    compileOwnInitialization(o, \"this\")",
    "    decreaseindent",
    "    out \"\\};\"   // end of _init function for object on line {o.line}",
    "    out \"return {selfr}_init;   // from compileBuildAndInitFunctions(_)inMethod(_)\"",
    "    decreaseindent",
    "    out \"\\};\"   // end of build function",
    "    inBlock := origInBlock",
    "}",
    "method compileobject(o, outerRef) {",
    "    // compiles an object constructor, in all contexts except a fresh method.",
    "    // Generates two JavaScript functions,",
    "    // {o.register}_build, which creates the object and its methods and fields,",
    "    // and {o.register}_init, which initializes the fields.  The _init function",
    "    // is returned from the _build funciton, so that it can close over the context.",
    "    // The object constructor itself is implemented by calling these functions",
    "    // in sequence, _except_ inside a fresh method, where the _build function may",
    "    // instead need to add the object's contents to an existing object.",
    "    compileBuildAndInitFunctions(o) inMethod (false)",
    "    def objRef = o.register",
    "    def objName = \"\\\"\" ++ o.name.quoted ++ \"\\\"\"",
    "    out \"var {objRef} = emptyGraceObject({objName}, {modNameAsString}, {o.line});\"",
    "    out \"var {objRef}_init = {objRef}_build.call({objRef}, null, {outerRef}, [], []);\"",
    "    out \"{objRef}_init.call({objRef});  // end of compileobject\"",
    "    objRef",
    "}",
    "method compileGuard(o, paramList) {",
    "    if (o.aParametersHasATypeAnnotation) then {",
    "        def matchFun = uidWithPrefix \"matches\"",
    "        out \"var {matchFun} = function({paramList}) \\{\"",
    "        increaseindent",
    "        noteLineNumber(o.line) comment \"block matches function\"",
    "        o.params.do { p ->",
    "            if (false ≠ p.dtype) then {",
    "                def pName = varf(p.value)",
    "                def dtype = compilenode(p.dtype)",
    "                out \"if (!Grace_isTrue(request({dtype}, \\\"matches(1)\\\", [1], {pName})))\"",
    "                out \"    return false;\"",
    "            }",
    "        }",
    "        out \"return true;\"",
    "        decreaseindent",
    "        out \"};\"",
    "        matchFun",
    "    } else {",
    "        \"jsTrue\"    // the constant true function, defined in gracelib",
    "    }",
    "}",
    "",
    "method compileblock(o) {",
    "    def origInBlock = inBlock",
    "    def oldInitializedVars = saveInitializedVars",
    "    inBlock := true",
    "    def blockId = uidWithPrefix \"block\"",
    "    def nParams = o.params.size",
    "    out \"var {blockId} = new GraceBlock(this, {o.line}, {nParams});\"",
    "    var paramList := \"\"",
    "    var paramTypes :=  list [ ]",
    "    var paramsAreTyped := false",
    "    var first := true",
    "    for (o.params) do { each ->",
    "        def dType = each.decType",
    "        paramTypes.push(compilenode(dType))",
    "        if (dType != ast.unknownType) then {",
    "            paramsAreTyped := true",
    "        }",
    "        if (first) then {",
    "            paramList := varf(each.value)",
    "            first := false",
    "        } else {",
    "            paramList := paramList ++ \", \" ++ varf(each.value)",
    "        }",
    "    }",
    "    if (paramsAreTyped) then {",
    "        out \"{blockId}.paramTypes = {literalList(paramTypes)};\"",
    "    }",
    "",
    "    out \"{blockId}.guard = {compileGuard(o, paramList)};\"",
    "    out \"{blockId}.real = function {blockId}({paramList}) \\{\"",
    "    increaseindent",
    "    priorLineEmitted := 0",
    "    noteLineNumber (o.line) comment (\"compileBlock\")",
    "    var ret := \"GraceDone\"",
    "    for (o.body) do {l->",
    "        ret := compilenode(l)",
    "    }",
    "    if (\"never returns\" ≠ ret) then { out \"return {ret};\" }",
    "    decreaseindent",
    "    out \"\\};\"",
    "    def applyMeth = blockId.replace \"block\" with \"applyMeth\"",
    "    def applyMethName = if (nParams == 0) then { \"apply\" } else { \"apply({nParams})\" }",
    "    if (nParams == 0) then {",
    "        out \"let {applyMeth} = function apply (argcv) \\{\"",
    "        out \"    return this.real.apply(this.receiver);\"",
    "        out \"\\};\"",
    "    } else {",
    "        out \"let {applyMeth} = function apply_{nParams} (argcv, ...args) \\{\"",
    "        out \"    if (this.guard.apply(this.receiver, args))\"",
    "        out \"        return this.real.apply(this.receiver, args);\"",
    "        out \"    badBlockArgs.apply(this, args);\"",
    "        out \"\\};\"",
    "    }",
    "    compileMetadata(o, applyMeth, applyMethName)",
    "    out \"{blockId}.methods[\\\"{applyMethName}\\\"] = {applyMeth};\"",
    "    def matchesMeth = applyMeth.replace \"applyMeth\" with \"matchesMeth\"",
    "    def matchesMethName = \"matches({nParams})\"",
    "    if (nParams > 0) then {",
    "        out \"let {matchesMeth} = function matches_{nParams} (argcv, ...args) \\{\"",
    "        out \"    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;\"",
    "        out \"\\};\"",
    "        compileMetadata(o, matchesMeth, matchesMethName)",
    "        out \"{blockId}.methods[\\\"{matchesMethName}\\\"] = {matchesMeth};\"",
    "    }",
    "    o.register := blockId",
    "    restoreInitializedVars(oldInitializedVars)",
    "    inBlock := origInBlock",
    "}",
    "method compiletypedec(o) in (obj) {",
    "    // We compile type declarations as once methods. This allows the declarations",
    "    // to appear in any order.  Compiling them as defs won't work for types",
    "    // with type parameters, or for types that are used before they are declared",
    "    // (as must happen for mutually-recursive types)",
    "",
    "    def enclosing = o.scope.parent",
    "    var reg := uidWithPrefix \"type\"",
    "    def tName = o.nameString",
    "    out \"// Type decl {tName}\"",
    "    // declaredvars.push(escapeident(tName))",
    "    if (o.value.kind == \"typeliteral\") then {o.value.name := tName }",
    "    def typeMethod = ast.methodNode.new(",
    "            [ast.signaturePart.partName(o.nameString) scope(enclosing)],",
    "            typeFunBody (o.value) named (tName), ast.unknownType) scope(enclosing)",
    "            // Why unknownType, rather than typeType?  Because the latter will",
    "            // compile a check that the return value is actually a type, which",
    "            // causes a circularity when trying to import collections. The check",
    "            // is also unnecessary, if the type operators are correctly implemented.",
    "    typeMethod.isOnceMethod := true",
    "    typeMethod.withTypeParams(o.typeParams)",
    "    def typeFun = compilenode(typeMethod)",
    "    o.register := reg",
    "    reg",
    "}",
    "method typeFunBody(typeExpr) named (tName) {",
    "    if (typeExpr.kind == \"op\") then {",
    "        // this guard prevents us from renaming the rhs in decls like type A⟦T⟧ = B⟦T⟧",
    "        [ ast.callNode.new(",
    "                typeExpr,",
    "                [ast.requestPart.request \"setName\"",
    "                     withArgs[ ast.stringNode.new(tName) ] ]",
    "        ).onSelf ]",
    "    } else {",
    "        [ typeExpr ]",
    "    }",
    "}",
    "method compiletypeliteral(o) in (obj) {",
    "    def reg = uidWithPrefix \"typeLit\"",
    "    def escName = escapestring(o.name)",
    "    out \"//   Type literal \"",
    "    out \"var {reg} = new GraceType(\\\"{escName}\\\");\"",
    "    for (o.methods) do { meth ->",
    "        def mnm = escapestring(meth.nameString)",
    "        out \"{reg}.typeMethods.push(\\\"{mnm}\\\");\"",
    "    }",
    "    o.register := reg",
    "    reg",
    "}",
    "method paramNames(o) {",
    "    def result = list [ ]",
    "    o.signature.do { part ->",
    "        part.params.do { param ->",
    "            result.push(param.nameString)",
    "        }",
    "    }",
    "    result",
    "}",
    "method typeParamNames(o) {",
    "    if (false == o.typeParams) then { return list [ ] }",
    "    def result = list [ ]",
    "    o.typeParams.do { each ->",
    "        result.push(each.nameString)",
    "    }",
    "    result",
    "}",
    "method hasTypedParams(o) {",
    "    for (o.signature) do { part ->",
    "        for (part.params) do { p->",
    "            if (p.dtype != false) then {",
    "                if ((p.dtype.value != \"Unknown\")",
    "                    && ((p.dtype.kind == \"identifier\")",
    "                        || (p.dtype.kind == \"typeliteral\"))) then {",
    "                    return true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    return false",
    "}",
    "",
    "method compileMethodPreamble(o, funcName, name) withParams (p) {",
    "    out \"var {funcName} = function(argcv{p}) \\{    // method {name}, line {o.line}\"",
    "    increaseindent",
    "    out \"var returnTarget = invocationCount;\"",
    "    out \"invocationCount++;\"",
    "}",
    "",
    "method compileMethodPostamble(o, funcName, name) {",
    "    decreaseindent",
    "    out \"\\};    // end of method {name}\"",
    "    if (hasTypedParams(o)) then {",
    "        compilemethodtypes(funcName, o)",
    "    }",
    "    if (o.isConfidential) then {",
    "        out \"{funcName}.confidential = true;\"",
    "    }",
    "}",
    "",
    "method compileParameterDebugFrame(o, name) {",
    "    if (debugMode) then {",
    "        out \"var myframe = new StackFrame(\\\"{name}\\\");\"",
    "        for (o.signature) do { part ->",
    "            for (part.params) do { p ->",
    "                def pName = p.nameString",
    "                def varName = varf(pName)",
    "                out \"myframe.addVar(\\\"{escapestring(pName)}\\\",\"",
    "                out \"  function() \\{return {varName};});\"",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "method compileDefaultsForTypeParameters(o) extraParams (extra) {",
    "    def tps = o.typeParams",
    "    if (false ≠ tps) then {",
    "        o.typeParams.do { g->",
    "            def gName = varf(g.value)",
    "            out \"if (! {gName}) {gName} = var_Unknown;\"",
    "        }",
    "    }",
    "    if (emitArgChecks) then {",
    "        def correction = if (extra == 0) then { \"1\" } else { \"{extra + 1}\" }",
    "                // 1 for argcv, and extra for the arguments to $build methods",
    "        out \"const numArgs = arguments.length - {correction};\"",
    "        def np = o.numParams",
    "        def ntp = o.numTypeParams",
    "        def s = if (ntp == 1) then { \"\" } else { \"s\" }",
    "        out \"if ((numArgs > {np}) && (numArgs !== {np + ntp})) \\{\"",
    "        out \"    raiseTypeArgError(\\\"{o.canonicalName}\\\", {ntp}, numArgs - {np});\"",
    "        out \"\\}\"",
    "    }",
    "}",
    "",
    "method compileArgumentTypeChecks(o) {",
    "    if ( emitTypeChecks.not ) then { return }",
    "    if (o.numParams == 1) then {",
    "        def p = o.signature.first.params.first",
    "        def pName = p.value",
    "        compileCheckThat (varf(pName))",
    "              called \"argument to request of `{o.canonicalName}`\"",
    "              hasType (p.dtype) onLine 0",
    "    } else {",
    "        var paramnr := 0",
    "        o.parametersDo { p ->",
    "            paramnr := paramnr + 1",
    "            def pName = p.value",
    "            compileCheckThat (varf(pName))",
    "                  called \"argument {paramnr} in request of `{o.canonicalName}`\"",
    "                  hasType (p.dtype) onLine 0",
    "            // the line number is 0, because we want the error message to",
    "            // refer to the call site, not the method definition.",
    "        }",
    "    }",
    "}",
    "method debugModePrefix {",
    "    if (debugMode) then {",
    "        out \"stackFrames.push(myframe);\"",
    "        out(\"try \\{\")",
    "        increaseindent",
    "    }",
    "}",
    "method debugModeSuffix {",
    "    if (debugMode) then {",
    "        decreaseindent",
    "        out \"\\} finally \\{\"",
    "        out \"    stackFrames.pop();\"",
    "        out \"\\}\"",
    "    }",
    "}",
    "method compileMethodBodyWithTypecheck(o) {",
    "    def ret = compileMethodBody(o)",
    "    def ln = if (o.body.isEmpty) then { o.end.line } else { o.resultExpression.line }",
    "    compileCheckThat(ret) called \"result of method {o.canonicalName}\"",
    "        hasType (o.dtype) onLine (ln)",
    "    ret",
    "}",
    "",
    "method compileFreshMethod(o, outerRef) {",
    "    // compiles the methodNode o in a way that can be used with an `inherit`",
    "    // statement. _Two_ methods are generated: one to build the new object,",
    "    // and one to initialize it.  The build method will also implement",
    "    // the statements in the body of this method that preceed the final",
    "    // (result) expression.",
    "    // The final (result) expression of method o may be of three kinds:",
    "    //   (1) an object constructor,",
    "    //   (2) a request on another fresh method (which will return its init function),",
    "    //   (3) a request of a clone or a copy (which returns a null init function).",
    "",
    "    def resultExpr = o.resultExpression",
    "    if (resultExpr.isObject) then {     // case (1)",
    "        compileBuildMethodFor(o) withObjCon (resultExpr) inside (outerRef)",
    "    } else {                            // cases (2) and (3)",
    "        compileBuildMethodFor(o) withFreshCall (resultExpr) inside (outerRef)",
    "    }",
    "    return \"GraceDone\"",
    "}",
    "",
    "method compileMethodBody(methNode) {",
    "    // compiles the body of method represented by methNode.",
    "    // answers the register containing the result.",
    "",
    "    var ret := \"GraceDone\"",
    "    methNode.body.do { nd -> ret := compilenode(nd) }",
    "    ret",
    "}",
    "",
    "method compileMethodBodyWithoutLast(methNode) {",
    "    def body = methNode.body",
    "    if (body.size > 1) then {",
    "        def resultExpr = body.removeLast   // remove result object",
    "        compileMethodBody(methNode)",
    "        body.addLast(resultExpr)           // put result object back",
    "    }",
    "}",
    "",
    "method stringList(strs) {",
    "    // answers the contents of the collection strs of strings quoted",
    "    // and between brackets.",
    "    var res := \"[\"",
    "    strs.do { s ->  res := res ++ \"\\\"\" ++ s.quoted ++ \"\\\"\"}",
    "        separatedBy { res := res ++ \", \" }",
    "    res ++ \"]\"",
    "}",
    "",
    "method literalList(lits) {",
    "    // answers the contents of the collection lits between brackets.",
    "    var res := \"[\"",
    "    lits.do { n ->  res := res ++ n.asString }",
    "        separatedBy { res := res ++ \", \" }",
    "    res ++ \"]\"",
    "}",
    "",
    "method compileMetadata(o, funcName, name) {",
    "    out \"{funcName}.methodName = \\\"{name}\\\";\"",
    "    out \"{funcName}.paramCounts = {literalList(o.parameterCounts)};\"",
    "    out \"{funcName}.paramNames = {stringList(o.parameterNames)};\"",
    "    if (o.hasTypeParams) then {",
    "        out \"{funcName}.typeParamNames = {stringList(o.typeParameterNames)};\"",
    "    }",
    "    out \"{funcName}.definitionLine = {o.line};\"",
    "    out \"{funcName}.definitionModule = {modNameAsString};\"",
    "}",
    "",
    "method compilemethodnode(o) in (objref) {",
    "    def oldusedvars = usedvars",
    "    def olddeclaredvars = declaredvars",
    "    def oldInitializedVars = saveInitializedVars",
    "    clearLineNumber(o.line)",
    "    o.register := uidWithPrefix \"func\"",
    "    if ((o.body.size == 1) &&",
    "            {o.body.first.isIdentifier} && {o.hasTypeParams.not}) then {",
    "        compileSimpleAccessor(o)",
    "    } elseif { o.isAbstract } then {",
    "        compileDummyMethod(o, objref, \"abstract\")",
    "    } elseif { o.isRequired } then {",
    "        compileDummyMethod(o, objref, \"required\")",
    "    } else {",
    "        compileNormalMethod(o, objref)",
    "    }",
    "    usedvars := oldusedvars",
    "    declaredvars := olddeclaredvars",
    "    restoreInitializedVars(oldInitializedVars)",
    "}",
    "",
    "method compileSimpleAccessor(o) {",
    "    def oldEmitPositions = emitPositions",
    "    emitPositions := false",
    "    def canonicalMethName = o.canonicalName",
    "    def funcName = o.register",
    "    def name = escapestring(o.nameString)",
    "    def ident = o.body.first",
    "    def p = paramlist(o) ++ typeParamlist(o)",
    "    out \"var {funcName} = function(argcv{p}) \\{     // accessor method {canonicalMethName}\"",
    "    increaseindent",
    "    if (emitArgChecks) then {",
    "        out \"const numArgs = arguments.length - 1;\"",
    "        def np = o.numParams",
    "        out \"if (numArgs > {np}) raiseTypeArgError(\\\"{canonicalMethName}\\\", 0, numArgs - {np});\"",
    "    }",
    "    out \"return {compilenode(ident)};\"",
    "    compileMethodPostamble(o, funcName, canonicalMethName)",
    "    out \"this.methods[\\\"{name}\\\"] = {funcName};\"",
    "    compileMetadata(o, funcName, name)",
    "    emitPositions := oldEmitPositions",
    "}",
    "",
    "method compileNormalMethod(o, selfobj) {",
    "    def canonicalMethName = o.canonicalName",
    "    def funcName = o.register",
    "    priorLineEmitted := 0",
    "    usedvars := list []",
    "    declaredvars := list []",
    "    def name = escapestring(o.nameString)",
    "    compileMethodPreamble (o, funcName, canonicalMethName)",
    "        withParams (paramlist(o) ++ typeParamlist(o))",
    "    compileParameterDebugFrame(o, name)",
    "    if (o.isOnceMethod.not) then {",
    "        // it o is a once method, we compile the defaults in the wrapper",
    "        compileDefaultsForTypeParameters(o) extraParams 0",
    "    }",
    "    compileArgumentTypeChecks(o)",
    "    debugModePrefix",
    "    if (o.isFresh) then {",
    "        def argList = paramlist(o)",
    "        def typeArgList = typeParamlist(o)",
    "        out \"var ouc = emptyGraceObject(\\\"{o.ilkName}\\\", {modNameAsString}, {o.line});\"",
    "        out \"var ouc_init = {selfobj}.methods[\\\"{name}$build(3)\\\"].call(this, null{argList}, ouc, [], []{typeArgList});\"",
    "        out \"ouc_init.call(ouc);\"",
    "        compileCheckThat \"ouc\" called \"object returned from {o.canonicalName}\"",
    "            hasType (o.dtype) onLine (o.end.line);",
    "        out \"return ouc;\"",
    "    } else {",
    "        def result = compileMethodBodyWithTypecheck(o)",
    "        if (\"never returns\" ≠ result) then {",
    "            out \"return {result};\"",
    "        }",
    "    }",
    "    debugModeSuffix",
    "    compileMethodPostamble(o, funcName, canonicalMethName)",
    "    if (o.isOnceMethod) then {",
    "        compileOnceWrapper(o, selfobj, name)",
    "    } else {",
    "        out \"{selfobj}.methods[\\\"{name}\\\"] = {funcName};\"",
    "    }",
    "    compileMetadata(o, funcName, name)",
    "    if (o.isFresh) then {",
    "        compileFreshMethod(o, selfobj)",
    "    }",
    "}",
    "",
    "method compileOnceWrapper(o, selfobj, name) {",
    "    def totalParams = o.numParams + o.numTypeParams",
    "    def funcName = o.register",
    "    def memoFuncName = \"memo\" ++ funcName",
    "    if ( totalParams == 0 ) then {",
    "        out \"function {memoFuncName}(argcv) \\{\"",
    "        out \"    if (! this.data[\\\"memo${name}\\\"])    // parameterless memo function\"",
    "        out \"        this.data[\\\"memo${name}\\\"] = {funcName}.call(this, argcv);\"",
    "        out \"    return this.data[\\\"memo${name}\\\"];\"",
    "        out \"\\};\"",
    "    } else {",
    "        def commaParamNames = paramlist(o) ++ typeParamlist(o);",
    "        def paramNames = commaParamNames.substringFrom 3",
    "        out \"function {memoFuncName}(argcv{commaParamNames}) \\{\"",
    "        increaseindent",
    "        compileDefaultsForTypeParameters(o) extraParams 0",
    "        out \"let memoTable = this.data[\\\"memo${name}\\\"] ||\"",
    "        out \"      ( this.data[\\\"memo${name}\\\"] =\"",
    "        out \"           request(var_HashMap, 'empty', [0]) );\"",
    "        if (totalParams == 1) then {",
    "            out \"let tableKey = {paramNames};\"",
    "        } else {",
    "            out \"let tableKey = new GraceSequence([{paramNames}]);\"",
    "        }",
    "        out \"let absentBlock = new GraceBlock(this, {o.line}, 0);\"",
    "        out \"absentBlock.guard = jsTrue;\"",
    "        out \"absentBlock.real = function ifAbsentBlock() \\{\"",
    "        out \"    let newResult = {funcName}.call(this, argcv{commaParamNames});\"",
    "        out \"    request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);\"",
    "        out \"    return newResult;\"",
    "        out \"\\};\"",
    "        out \"absentBlock.methods.apply = function apply (argcv) \\{\"",
    "        out \"    return this.real.apply(this.receiver);\"",
    "        out \"\\};\"",
    "        out \"return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);\"",
    "        decreaseindent",
    "        out \"\\};\"",
    "    }",
    "    out \"{selfobj}.methods[\\\"{name}\\\"] = {memoFuncName};\"",
    "    compileMetadata(o, memoFuncName, name)",
    "}",
    "",
    "method compileDummyMethod(o, selfobj, kind) {",
    "    def canonicalMethName = o.canonicalName",
    "    def funcName = o.register",
    "    priorLineEmitted := 0",
    "    def name = escapestring(o.nameString)",
    "    out \"if (! {selfobj}.methods[\\\"{name}\\\"]) \\{\"",
    "    increaseindent",
    "    compileMethodPreamble (o, funcName, canonicalMethName)",
    "        withParams (paramlist(o) ++ typeParamlist(o))",
    "    compileParameterDebugFrame(o, name)",
    "    compileDefaultsForTypeParameters(o) extraParams 0",
    "    compileArgumentTypeChecks(o)",
    "    noteLineNumber (o.line) comment \"{kind} method\"",
    "    debugModePrefix",
    "    out \"throw new GraceExceptionPacket(ProgrammingErrorObject,\"",
    "    out \"          new GraceString(\\\"{kind} method {canonicalMethName} was not supplied\\\"));\"",
    "    debugModeSuffix",
    "    compileMethodPostamble(o, funcName, canonicalMethName)",
    "    out \"{selfobj}.methods[\\\"{name}\\\"] = {funcName};\"",
    "    compileMetadata(o, funcName, name)",
    "    decreaseindent",
    "    out \"\\};\"",
    "}",
    "method compileBuildMethodFor(methNode) withObjCon (objNode) inside (outerRef) {",
    "    // the $build method for a fresh method executes the statements in the",
    "    // body of the fresh method, and then calls the build function of the",
    "    // object constructor.  That build function will return the _init function",
    "    // for the object expression that it tail-returns.",
    "",
    "    def funcName = uidWithPrefix \"func\"",
    "    def name = escapestring(methNode.nameString ++ \"$build(3)\")",
    "    def cName = methNode.canonicalName ++ \"$build(_,_,_)\"",
    "    def params = paramlist(methNode)",
    "    def typeParams = typeParamlist(methNode)",
    "    compileMethodPreamble (methNode, funcName, cName)",
    "        withParams (params ++ \", inheritingObject, aliases, exclusions\" ++ typeParams)",
    "    compileDefaultsForTypeParameters(methNode) extraParams 3",
    "    compileArgumentTypeChecks(methNode)",
    "    compileMethodBodyWithoutLast(methNode)",
    "    compileBuildAndInitFunctions(objNode) inMethod (methNode)",
    "    def objRef = objNode.register",
    "    out \"var {objRef}_init = {objRef}_build.call(inheritingObject, null{params}, {outerRef}, aliases, exclusions{typeParams});\"",
    "    out \"return {objRef}_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)\"",
    "    compileMethodPostamble(methNode, funcName, cName)",
    "    out \"this.methods[\\\"{name}\\\"] = {funcName};\"",
    "    compileMetadata(methNode, funcName, name)",
    "}",
    "method compileBuildMethodFor(methNode) withFreshCall (callExpr) inside (outerRef) {",
    "    // The build method will have three additional parameters:",
    "    // `inheritingObject`, `aliases`, and `exclusions`.  These",
    "    // will be passed to it by the `inherit` statement.",
    "",
    "    def funcName = uidWithPrefix \"func\"",
    "    def name = escapestring(methNode.nameString ++ \"$build(3)\")",
    "    def cName = escapestring(methNode.canonicalName ++ \"$build(_,_,_)\")",
    "    compileMethodPreamble(methNode, funcName, cName)",
    "        withParams( paramlist(methNode) ++ \", ouc, aliases, exclusions\")",
    "    compileMethodBodyWithoutLast(methNode)",
    "",
    "    // Now compile the call, with the three aditional arguments.",
    "    // TODO: refactor compilecall so that it can handle this case, as well as",
    "    // normal calls.",
    "    def calltemp = uidWithPrefix \"call\"",
    "    callExpr.register := calltemp",
    "    var args := list []",
    "    compileNormalArguments(callExpr, args)",
    "    args.addAll [\"ouc\", \"aliases\", \"exclusions\"]",
    "    compileTypeArguments(callExpr, args)",
    "    compileCallToBuildMethod(callExpr) withArgs (args)",
    "    compileCheckThat \"ouc\" called \"result of method {methNode.canonicalName}\"",
    "          hasType (methNode.dtype) onLine (callExpr.line)",
    "    out \"return {calltemp};      // from compileBuildMethodFor(_)withFreshCall(_)inside(_)\"",
    "    compileMethodPostamble(methNode, funcName, cName)",
    "    out \"this.methods[\\\"{name}\\\"] = {funcName};\"",
    "    compileMetadata(methNode, funcName, name)",
    "}",
    "method compileCallToBuildMethod(callExpr) withArgs (args) {",
    "    util.setPosition(callExpr.line, callExpr.linePos)",
    "    callExpr.parts.addLast(",
    "        ast.requestPart.request \"$build\"",
    "            withArgs [ast.nullNode, ast.nullNode, ast.nullNode]",
    "    )",
    "    def receiver = callExpr.receiver",
    "    if { receiver.isOuter } then {",
    "        compileOuterRequest(callExpr, args)",
    "    } elseif { receiver.isSelf } then {",
    "        compileSelfRequest(callExpr, args)",
    "    } elseif { receiver.isPrelude } then {",
    "        compilePreludeRequest(callExpr, args)",
    "    } else {",
    "        compileOtherRequest(callExpr, args)",
    "    }",
    "    callExpr.parts.removeLast",
    "}",
    "method paramlist(o) {",
    "    // a comma-prefixed and separated list of the parameters",
    "    // described by methodnode o.",
    "    var result := \"\"",
    "    o.signature.do { part ->",
    "        part.params.do { param ->",
    "            result := result ++ \", {varf(param.nameString)}\"",
    "        }",
    "    }",
    "    result",
    "}",
    "method typeParamlist(o) {",
    "    // a comma-prefixed and separated list of the type parameters of",
    "    // described by methodnode o.",
    "",
    "    var result := \"\"",
    "    if (false ≠ o.typeParams) then {",
    "        o.typeParams.do { each ->",
    "            result := result ++ \", {varf(each.nameString)}\"",
    "        }",
    "    }",
    "    result",
    "}",
    "method compilemethodtypes(func, o) {",
    "    out \"{func}.paramTypes = [];\"",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            // We store information for static top-level types only:",
    "            // absent information is treated as Unknown (and unchecked).",
    "            if (false != p.dtype) then {",
    "                if (((p.dtype.kind == \"identifier\") && {p.dtype.value != \"Unknown\"})",
    "                    || (p.dtype.kind == \"typeliteral\")) then {",
    "                    def typeid = escapeident(p.dtype.value)",
    "                    if (topLevelTypes.contains(typeid)) then {",
    "                        out(\"{func}.paramTypes.push([\"",
    "                            ++ \"type_{typeid}, \\\"{escapestring(p.nameString)}\\\"]);\")",
    "                    } else {",
    "                        out(\"{func}.paramTypes.push([]);\")",
    "                    }",
    "                } else {",
    "                    out(\"{func}.paramTypes.push([]);\")",
    "                }",
    "            } else {",
    "                out(\"{func}.paramTypes.push([]);\")",
    "            }",
    "        }",
    "    }",
    "}",
    "method compileif(o) {",
    "    def ifId = uidWithPrefix \"if\"",
    "    outUnnumbered \"var {ifId} = GraceDone;\"  // TODO: remove - this is unncessary",
    "    out(\"if (Grace_isTrue(\" ++ compilenode(o.value) ++ \")) \\{\")",
    "    var tret := \"GraceDone\"",
    "    increaseindent",
    "    def thenSavedVars = saveInitializedVars",
    "    def thenList = o.thenblock.body",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    if (tret != \"never returns\") then {",
    "        out \"{ifId} = {tret};\"",
    "    }",
    "    restoreInitializedVars(thenSavedVars)",
    "    decreaseindent",
    "    def elseList = o.elseblock.body",
    "    var fret := \"GraceDone\"",
    "    if (elseList.size > 0) then {",
    "        out(\"\\} else \\{\")",
    "        increaseindent",
    "        def elseSavedVars = saveInitializedVars",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        if (fret != \"never returns\") then {",
    "            out \"{ifId} = {fret};\"",
    "        }",
    "        restoreInitializedVars(elseSavedVars)",
    "        decreaseindent",
    "    }",
    "    out \"\\}\"",
    "    o.register := ifId",
    "}",
    "method compileidentifier(o) {",
    "    var name := o.value",
    "    if (name == \"self\") then {",
    "        o.register := \"this\"",
    "    } elseif { name == \"...\" } then {",
    "        o.register := \"ellipsis\"",
    "    } elseif { name == \"module()object\" } then {",
    "        o.register := \"importedModules[{modNameAsString}]\"",
    "    } elseif { name == \"true\" } then {",
    "        o.register := \"GraceTrue\"",
    "    } elseif { name == \"false\" } then {",
    "        o.register := \"GraceFalse\"",
    "    } else {",
    "        compileUninitializedCheck(o)",
    "        usedvars.push(name)",
    "        o.register := varf(name)",
    "    }",
    "}",
    "method compilebind(o) {",
    "    def lhs = o.dest",
    "    if (lhs.isIdentifier) then {",
    "        def val = compilenode(o.value)",
    "        def nm = lhs.value",
    "        usedvars.push(nm)",
    "        out \"{varf(nm)} = {val};\"",
    "        if (o.scope.isInheritableScope) then {",
    "            // if this scope is inheritable (an object or class), then",
    "            // the fact that we have just assigned to nm is no guarantee",
    "            // that it is initialised!",
    "            initializedVars.add(nm)",
    "        }",
    "        o.register := \"GraceDone\"",
    "    } else {",
    "        ProgrammingError.raise \"bindNode {o} does not bind an identifer\"",
    "    }",
    "}",
    "method compiledefdec(o) {",
    "    def currentScope = o.scope",
    "    def nm = if (o.name.kind == \"generic\") then {",
    "        o.name.value.value",
    "    } else {",
    "        o.name.value",
    "    }",
    "    def var_nm = varf(nm)",
    "    declaredvars.push(nm)",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {varf(nm)}});\"",
    "    }",
    "    def val = compilenode(o.value)",
    "    out \"var {var_nm} = {val};\"",
    "    def parentNodeKind = o.parentKind",
    "    if (parentNodeKind == \"module\") then {",
    "        create \"def\" field (o) in \"this\"",
    "    } elseif {parentNodeKind == \"method\"} then {",
    "        initializedVars.add(nm)",
    "    }",
    "    compileCheckThat(var_nm) called \"value of def {nm}\"",
    "        hasType(o.dtype) onLine (o.line)",
    "    o.register := \"GraceDone\"",
    "}",
    "method compilevardec(o) {",
    "    def currentScope = o.scope",
    "    def parentNodeKind = o.parentKind",
    "    def nm = if (o.name.kind == \"generic\") then {",
    "        o.name.value.value",
    "    } else {",
    "        o.name.value",
    "    }",
    "    def var_nm = varf(nm)",
    "    declaredvars.push(nm)",
    "    def rhs = o.value",
    "    if (false != rhs) then {",
    "        def val = compilenode(rhs)",
    "        compileCheckThat(val) called \"initial value of var {nm}\"",
    "              hasType(o.dtype) onLine (o.line)",
    "        out \"var {var_nm} = {val};\"",
    "        if (\"module | method | dialect\".contains(parentNodeKind)) then {",
    "            initializedVars.add(nm)",
    "        }",
    "    } else {",
    "        out \"var {var_nm};\"",
    "    }",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {var_nm}});\"",
    "    }",
    "    if (parentNodeKind == \"module\") then {",
    "        create \"var\" field (o) in \"this\"",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compiletrycatch(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def mainblock = compilenode(o.value)",
    "    out \"var cases{myc} = [];\"",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var finally := \"false\"",
    "    if (false != o.finally) then {",
    "        finally := compilenode(o.finally)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compiletrycatch\")",
    "    out(\"var catchres{myc} = tryCatch({mainblock},cases{myc},{finally});\")",
    "    o.register := \"catchres\" ++ myc",
    "}",
    "method compilematchcase(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def matchee = compilenode(o.value)",
    "    out \"var cases{myc} = [];\"",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var elsecase := \"false\"",
    "    if (false != o.elsecase) then {",
    "        elsecase := compilenode(o.elsecase)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compilematchcase\")",
    "    out(\"var matchres{myc} = matchCase({matchee},cases{myc},{elsecase});\")",
    "    o.register := \"matchres\" ++ myc",
    "}",
    "method compileop(o) {",
    "    def left = compilenode(o.left)",
    "    def opRight = o.right",
    "    def right = compilenode(opRight)",
    "    def opSym = o.value",
    "    def rnm = if (opSym == \"+\") then { \"sum\" }",
    "              elseif {opSym == \"*\"} then { \"prod\" }",
    "              elseif {opSym == \"-\"} then { \"diff\" }",
    "              elseif {(opSym == \"/\") || (opSym == \"÷\")} then { \"quotient\" }",
    "              elseif {o.value == \"%\"} then { \"modulus\" }",
    "              else { \"opresult\" }",
    "    def register = uidWithPrefix(rnm)",
    "    out(\"var {register} = request({left}, \\\"\" ++",
    "          \"{escapestring(o.nameString)}\\\", [1], {right});\")",
    "    o.register := register",
    "}",
    "method compileNormalArguments(o, args) {",
    "    o.argumentsDo { a ->",
    "        args.push(compilenode(a))",
    "    }",
    "}",
    "method compileTypeArguments(o, args) {",
    "    if (false != o.generics) then {",
    "        o.generics.do {g->",
    "            args.push(compilenode(g))",
    "        }",
    "    }",
    "}",
    "method compileArguments(o, args) {",
    "    compileNormalArguments(o, args)",
    "    compileTypeArguments(o, args)",
    "}",
    "method assembleArguments(args) {",
    "    var result := \"\"",
    "    for (args) do { arg ->",
    "        result := result ++ \", \" ++ arg",
    "    }",
    "    result",
    "}",
    "method compileUninitializedCheck(id) {",
    "    // id is an identiferNode.   If it is possible that this identifier is",
    "    // undefined, emit a check.",
    "    if (emitUndefinedChecks.not) then { return }",
    "    def name = id.nameString",
    "    def definingScope = id.scope.thatDefines(name) ifNone {",
    "        // this happens for the \"unknown\" identifierNode",
    "        return",
    "    }",
    "    def scopeVariety = definingScope.variety",
    "    if (scopeVariety == \"built-in\") then { return }",
    "    if (\"module | method | dialect\".contains(definingScope.variety)) then {",
    "        if (initializedVars.contains(name)) then { return }",
    "    }",
    "    def idKind = definingScope.kind(name)",
    "    if ((idKind == k.defdec) || (idKind == k.vardec)) then {",
    "        out \"if ({varf(name)} === undefined) raiseUninitializedVariable(\\\"{name}\\\");\"",
    "    }",
    "}",
    "method partl(o) {",
    "    var result := \"\"",
    "    for (o.parts.indices) do { partnr ->",
    "        result := result ++ o.parts.at(partnr).args.size",
    "        if (partnr < o.parts.size) then {",
    "            result := result ++ \", \"",
    "        }",
    "    }",
    "    if (false != o.generics) then {",
    "        result := result ++ \", {o.generics.size}\"",
    "    }",
    "    result",
    "}",
    "method compileOuterRequest(o, args) {",
    "    out \"// call case 2: outer request\"",
    "    compilenode(o.receiver)",
    "    def numArgs = o.numArgs + o.numTypeArgs",
    "    out(\"var {o.register} = selfRequest({o.receiver.register}\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\"\" ++",
    "          \", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "",
    "method compileSelfRequest(o, args) {",
    "    out \"// call case 4: self request with {o.numArgs} args and {o.numTypeArgs} typeArgs \"",
    "    def numArgs = o.numArgs + o.numTypeArgs",
    "    out(\"var {o.register} = selfRequest(this\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compilePreludeRequest(o, args) {",
    "    out \"// call case 5: prelude request\"",
    "    def numArgs = o.numArgs + o.numTypeArgs",
    "    out(\"var {o.register} = request(var_prelude\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compileOtherRequest(o, args) {",
    "    out \"// call case 6: other requests\"",
    "    def target = compilenode(o.receiver)",
    "    def cm = if (o.isSelfRequest) then { \"selfRequest\" } else { \"request\" }",
    "    def numArgs = o.numArgs + o.numTypeArgs",
    "    out(\"var {o.register} = {cm}({target}\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compilecall(o) {",
    "    def calltemp = uidWithPrefix \"call\"",
    "    o.register := calltemp",
    "    var args := list []",
    "    compileArguments(o, args)",
    "    def receiver = o.receiver",
    "    if ( receiver.isOuter ) then {",
    "        compileOuterRequest(o, args)",
    "    } elseif { receiver.isSelf } then {",
    "        compileSelfRequest(o, args)",
    "    } elseif { receiver.isPrelude } then {",
    "        compilePreludeRequest(o, args)",
    "    } else {",
    "        compileOtherRequest(o, args)",
    "    }",
    "    o.register",
    "}",
    "method compileOuter(o) {",
    "    o.register := o.theObjects.fold { a, obj -> \"{a}.{outerProp(obj)}\" }",
    "                                    startingWith \"this\"",
    "}",
    "method compiledialect(o) {",
    "    def dialectName = o.value",
    "    if (dialectName ≠ \"none\") then {",
    "        out \"// Dialect \\\"{dialectName}\\\"\"",
    "        var fn := escapestring(dialectName)",
    "        out \"var_prelude = do_import(\\\"{fn}\\\", {formatModname(dialectName)});\"",
    "        out \"this.outer = var_prelude;\"",
    "        if (xmodule.currentDialect.hasAtStart) then {",
    "            out \"var var_thisDialect = selfRequest(var_prelude, \\\"thisDialect\\\", [0]);\"",
    "            out \"selfRequest(var_thisDialect, \\\"atStart(1)\\\", [1], \"",
    "            out \"  new GraceString({modNameAsString}));\"",
    "        }",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compileimport(o) {",
    "    out \"// Import of \\\"{o.path}\\\" as {o.nameString}\"",
    "    def currentScope = o.scope",
    "    def nm = escapeident(o.nameString)",
    "    def var_nm = varf(nm)",
    "    def fn = escapestring(o.path)",
    "    declaredvars.push(escapeident(o.nameString))",
    "    out(\"if (typeof {formatModname(o.path)} == \\\"undefined\\\")\")",
    "    out \"  throw new GraceExceptionPacket(EnvironmentExceptionObject, \"",
    "    out \"    new GraceString(\\\"could not find module {o.path}\\\"));\"",
    "    out(\"var \" ++ varf(nm) ++ \" = do_import(\\\"{fn}\\\", {formatModname(o.path)});\")",
    "    initializedVars.add(nm)",
    "    def methodIdent = o.value",
    "    def accessor = (ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],",
    "        [methodIdent], o.dtype) scope(currentScope))",
    "    accessor.line := o.line",
    "    accessor.linePos := o.linePos",
    "    accessor.annotations.addAll(o.annotations)",
    "    compilenode(accessor)",
    "    out(\"{accessor.register}.debug = \\\"import\\\";\")",
    "    if (o.isReadable.not) then {",
    "        out \"{accessor.register}.confidential = true;\"",
    "    }",
    "    compileCheckThat(var_nm) called \"module \\\"{o.nameString.quoted}\\\"\"",
    "        hasType(o.dtype) onLine (o.line)",
    "    o.register := \"GraceDone\"",
    "}",
    "method compilereturn(o) {",
    "    o.register := \"never returns\"",
    "    var reg := compilenode(o.value)",
    "    if (\"never returns\" == reg) then { return }",
    "    compileCheckThat(reg) called \"return value\" hasType (o.dtype) onLine (o.line)",
    "    if (inBlock) then {",
    "        out(\"throw new ReturnException(\" ++ reg ++ \", returnTarget);\")",
    "    } else {",
    "        out(\"return \" ++ reg ++ \";\")",
    "    }",
    "}",
    "method compilePrint(o) {",
    "    // TODO: simplify; we know that there is one argument",
    "    // Why is this a special case ansyway?",
    "    var args := list []",
    "    for (o.parts) do { part ->",
    "        for (part.args) do { prm ->",
    "            var r := compilenode(prm)",
    "            args.push(r)",
    "        }",
    "    }",
    "    if (args.size != 1) then {",
    "        errormessages.syntaxError \"method print takes a single argument\"",
    "            atRange(o.line, o.linePos, o.linePos + 4)",
    "    } else {",
    "        out (\"Grace_print(\" ++ args.first ++ \");\")",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compileNativeCode(o) {",
    "    def param1 = o.parts.first.args.first",
    "    if (param1.kind != \"string\") then {",
    "        errormessages.syntaxError \"the first argument to native(_)code(_) must be a string literal\"",
    "            atRange(param1.line, param1.linePos, param1.linePos)",
    "    }",
    "    if (param1.value != \"js\") then {",
    "        o.register := \"GraceDone\"",
    "        return",
    "    }",
    "    def param2 = o.parts.second.args.first",
    "    if (param2.kind != \"string\") then {",
    "        errormessages.syntaxError \"the second argument to native(_)code(_) must be a string literal\"",
    "            atLine(param2.line)",
    "    }",
    "    o.register := \"result\"",
    "    def codeString = param2.value",
    "    out \"var result = GraceDone;    // start native code from line {o.line}\"",
    "    out \"{codeString}   // end native code insertion\"",
    "}",
    "method compileNull(o) {",
    "    out \"nullDefinition();\"",
    "}",
    "method stripLeadingZeros(str) {",
    "    // returns str without ang leading zeros",
    "    if (str.first ≠ \"0\") then { return str }",
    "    var leading := true",
    "    var result := \"\"",
    "    str.do { ch ->",
    "        if ((leading && (ch ≠ \"0\"))) then {",
    "            leading := false",
    "            result := result ++ ch",
    "        } elseif {leading.not} then {",
    "            result := result ++ ch",
    "        }",
    "    }",
    "    if (result.isEmpty) then { return \"0\" }",
    "    return result",
    "}",
    "",
    "method compilenode(o) {",
    "    compilationDepth := compilationDepth + 1",
    "    def oKind = o.kind",
    "    tallyNode(oKind)",
    "    if { oKind == \"identifier\" } then {",
    "        compileidentifier(o)",
    "    } elseif { oKind == \"method\" } then {",
    "        compilemethodnode(o) in \"this\"",
    "    } elseif { oKind == \"generic\" } then {",
    "        o.register := compilenode(o.value)",
    "    } else {",
    "        noteLineNumber(o.line)comment \"compilenode {oKind}\"",
    "        // no point in setting the line number for the above kinds",
    "        if { oKind == \"member\" } then {",
    "            compilemember(o)",
    "        } elseif { oKind == \"call\" } then {",
    "            if (o.receiver.isPrelude) then {",
    "                if (o.nameString == \"print(1)\") then {",
    "                    compilePrint(o)",
    "                } elseif {o.nameString == \"native(1)code(1)\"} then {",
    "                    compileNativeCode(o)",
    "                } else {",
    "                    compilecall(o)",
    "                }",
    "            } else {",
    "                compilecall(o)",
    "            }",
    "        } elseif { oKind == \"op\" } then {",
    "            compileop(o)",
    "        } elseif { oKind == \"num\" } then {",
    "            o.register := \"new GraceNum(\" ++ stripLeadingZeros(o.value) ++ \")\"",
    "        } elseif {oKind == \"string\"} then {",
    "            // Escape characters that may not be legal in string literals",
    "            def os = escapestring(o.value)",
    "            out(\"var string\" ++ auto_count ++ \" = new GraceString(\\\"\"",
    "                ++ os ++ \"\\\");\")",
    "            o.register := \"string\" ++ auto_count",
    "            auto_count := auto_count + 1",
    "        } elseif { oKind == \"bind\" } then {",
    "            compilebind(o)",
    "        } elseif { oKind == \"return\" } then {",
    "            compilereturn(o)",
    "        } elseif { oKind == \"defdec\" } then {",
    "            compiledefdec(o)",
    "        } elseif { oKind == \"vardec\" } then {",
    "            compilevardec(o)",
    "        } elseif { oKind == \"block\" } then {",
    "            compileblock(o)",
    "        } elseif { oKind == \"array\" } then {",
    "            compilearray(o)",
    "        } elseif { oKind == \"if\" } then {",
    "            compileif(o)",
    "        } elseif { oKind == \"trycatch\" } then {",
    "            compiletrycatch(o)",
    "        } elseif { oKind == \"matchcase\" } then {",
    "            compilematchcase(o)",
    "        } elseif { oKind == \"object\" } then {",
    "            compileobject(o, \"this\")",
    "        } elseif { oKind == \"typedec\" } then {",
    "            compiletypedec(o) in \"this\"",
    "        } elseif { oKind == \"typeliteral\" } then {",
    "            compiletypeliteral(o) in \"this\"",
    "        } elseif { oKind == \"inherit\" } then {",
    "            compileInherit(o) forClass \"irrelevant\"",
    "        } elseif { oKind == \"outer\" } then {",
    "            compileOuter(o)",
    "        } elseif { oKind == \"dialect\" } then {",
    "            compiledialect(o)",
    "        } elseif { oKind == \"import\" } then {",
    "            compileimport(o)",
    "        } elseif {o.isNull} then {",
    "            compileNull(o)",
    "        } else {",
    "            ProgrammingError.raise \"unrecognized ast node \\\"{oKind}\\\".\"",
    "        }",
    "    }",
    "    compilationDepth := compilationDepth - 1",
    "    o.register",
    "}",
    "",
    "method tallyNode(kind) {",
    "    if (util.verbosity > 50) then {",
    "        def count = nodeTally.at(kind) ifAbsent { 0 }",
    "        nodeTally.at (kind) put (count + 1)",
    "    }",
    "}",
    "",
    "def valueCompare = { a, b -> b.value.compare(a.value) }",
    "",
    "method printNodeTally {",
    "    if (util.verbosity > 50) then {",
    "        def bindingList = nodeTally.bindings",
    "        print \"AST nodes compiled:\"",
    "        bindingList.sortedBy(valueCompare).do { b ->",
    "            print \"    {b.key}\\t{b.value}\"",
    "        }",
    "    }",
    "}",
    "",
    "method initializeCodeGenerator(moduleObject) {",
    "    def isPrelude = moduleObject.theDialect.value == \"none\"",
    "    if (util.extensions.containsKey \"ExtendedLineups\") then {",
    "        errormessages.syntaxError (\"The ExtendedLineups pragma is no longer supported. \" ++",
    "              \"Brackets `[ ... ]` construct sequences; if you want a list, use `list [ ... ]`\")",
    "              atLine 1",
    "    }",
    "    if (util.extensions.containsKey \"noChecks\") then {",
    "        emitTypeChecks := false",
    "        emitUndefinedChecks := false",
    "        emitArgChecks := false",
    "        emitPositions := false",
    "    }",
    "    if (util.extensions.containsKey \"noTypeChecks\") then {",
    "        emitTypeChecks := false",
    "    }",
    "    if (util.extensions.containsKey \"noArgChecks\") then {",
    "        emitArgChecks := false",
    "    }",
    "    if (util.extensions.containsKey \"noUndefChecks\") then {",
    "        emitUndefinedChecks := false",
    "    }",
    "    if (util.extensions.containsKey \"noLineNumbers\") then {",
    "        emitPositions := false",
    "    }",
    "    modname := moduleObject.name",
    "    emod := escapeident(modname)",
    "    modNameAsString := \"\\\"{escapestring(modname)}\\\"\"",
    "    if (util.extensions.containsKey(\"Debug\")) then {",
    "        debugMode := true",
    "    }",
    "    util.log_verbose(\"generating JavaScript code.\")",
    "    topLevelTypes.add \"String\"",
    "    topLevelTypes.add \"Number\"",
    "    topLevelTypes.add \"Boolean\"",
    "    topLevelTypes.add \"Done\"",
    "    topLevelTypes.add \"Type\"",
    "    topLevelTypes.add \"Unknown\"",
    "    topLevelTypes.add \"Object\"",
    "    if (util.extensions.containsKey \"strict\") then {",
    "        util.outprint \";\\\"use strict\\\";\"",
    "    }",
    "    if (isPrelude.not) then {",
    "        util.outprint \"{standardPrelude} = do_import(\\\"standardGrace\\\", gracecode_standardGrace);\"",
    "    }",
    "    util.setline(1)",
    "}",
    "",
    "def standardPrelude = \"var_\" ++ escapeident \"_prelude\"",
    "",
    "method outputModuleDefinition(moduleObject) {",
    "    // output the definition of the module function, conventionally",
    "    // called gracecode_«modname».  Note that \"output\" means append to",
    "    // the output buffer; it will be printed later.",
    "",
    "    def generatedModuleName = formatModname(modname)",
    "    out \"function {generatedModuleName}() \\{\"",
    "    increaseindent",
    "    out \"importedModules[{modNameAsString}] = this;\"",
    "    def selfr = \"module$\" ++ emod",
    "    moduleObject.register := selfr",
    "    out \"var {selfr} = this;\"",
    "    out \"this.definitionModule = {modNameAsString};\"",
    "    out \"this.definitionLine = 1;\"",
    "    out \"var var_prelude = {standardPrelude};\"",
    "        // var_prelude must be local to the module function, because its",
    "        // value varies from module to module.",
    "",
    "    if (debugMode) then {",
    "        out \"var myframe = new StackFrame(\\\"{escapestring(modname)} module\\\");\"",
    "        out \"stackFrames.push(myframe);\"",
    "    }",
    "    compileobjouter(moduleObject, \"var_prelude\")",
    "    if (modname == \"standardGrace\") then {",
    "        // compile components in non-standard order",
    "        moduleObject.methodsDo { o -> compilenode(o) }",
    "        moduleObject.externalsDo { o -> moduleObject.directImports.push(o.path) }",
    "        moduleObject.value.do { o ->    // this treats importNodes as executable",
    "            if (o.isMethod.not) then {",
    "                compilenode(o)",
    "            }",
    "        }",
    "    } else {",
    "        // compile in normal order",
    "        moduleObject.externalsDo { o ->",
    "            compilenode(o)",
    "            moduleObject.directImports.push(o.path)",
    "        }",
    "        def inheritsStmt = moduleObject.superclass",
    "        if (false != inheritsStmt) then {",
    "            compileInherit(inheritsStmt) forClass (modname)",
    "        }",
    "        moduleObject.usedTraits.do { t ->",
    "            compileUse(t) in (moduleObject)",
    "        }",
    "        moduleObject.methodsAndTypesDo { o ->",
    "            compilenode(o)",
    "        }",
    "        if (false != inheritsStmt) then {",
    "            compileSuperInitialization(inheritsStmt)",
    "        }",
    "        moduleObject.executableComponentsDo { o ->",
    "            compilenode(o)",
    "        }",
    "    }",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out \"var var_thisDialect = selfRequest(var_prelude, \\\"thisDialect\\\", [0]);\"",
    "        out(\"selfRequest(var_thisDialect, \\\"atEnd(1)\\\", [1], this);\")",
    "    }",
    "    if (debugMode) then {",
    "        out \"stackFrames.pop();\"",
    "    }",
    "    out \"return this;\"",
    "    decreaseindent",
    "    out \"\\}\"",
    "",
    "    out \"if (typeof global !== \\\"undefined\\\")\"",
    "    out \"  global.{generatedModuleName} = {generatedModuleName};\"",
    "    out \"if (typeof window !== \\\"undefined\\\")\"",
    "    out \"  window.{generatedModuleName} = {generatedModuleName};\"",
    "}",
    "",
    "method outputModuleMetadata(moduleObject) {",
    "    var importList := \"[\"",
    "    moduleObject.directImports.sorted.do { each ->",
    "        importList := importList ++ each.asDebugString",
    "    } separatedBy {",
    "        importList := importList ++ \", \"",
    "    }",
    "    importList := importList ++ \"]\"",
    "    out \"{formatModname(modname)}.imports = {importList};\"",
    "    out \"{formatModname(modname)}.definitionModule = \\\"{basename(modname).quoted}\\\";\"",
    "    out \"{formatModname(modname)}.definitionLine = 1;\"",
    "}",
    "",
    "method outputGct {",
    "    def gct = xmodule.parseGCT(modname)",
    "    def gctText = xmodule.gctAsString(gct)",
    "    util.outprint \"if (typeof gctCache !== \\\"undefined\\\")\"",
    "    util.outprint \"  gctCache[{modNameAsString}] = \\\"{escapestring(gctText)}\\\";\"",
    "}",
    "method outputSource {",
    "    util.outprint \"if (typeof originalSourceLines !== \\\"undefined\\\") \\{\"",
    "    util.outprint \"  originalSourceLines[{modNameAsString}] = [\"",
    "    def sourceLines = util.cLines",
    "    def numberOfLines = util.cLines.size",
    "    var ln := 1",
    "    while {ln < numberOfLines} do {",
    "        util.outprint \"    \\\"{sourceLines.at(ln)}\\\",\"",
    "        ln := ln + 1",
    "    }",
    "    if (numberOfLines <= 0) then {",
    "        util.outprint \" ];\"",
    "    } else {",
    "        util.outprint \"    \\\"{sourceLines.at(numberOfLines)}\\\" ];\"",
    "    }",
    "    util.outprint \"\\}\"",
    "}",
    "",
    "method compile(moduleObject, of, bt, glPath) {",
    "    // compile the module represented by the ast.moduleNode `moduleObject`.",
    "    // `of` is the output file, and `bt` the build type.",
    "    // `glPath` is the GRACE_MODULE_PATH to use when running the compiled code",
    "",
    "    outfile := of",
    "    buildtype := bt",
    "",
    "    initializeCodeGenerator(moduleObject)",
    "    outputModuleDefinition(moduleObject)",
    "    outputModuleMetadata(moduleObject)",
    "    moduleObject.imports := imports.other",
    "        // imports is modified by outputModuleDefinition; it is the",
    "        // transitive closure of moduleObject.directImports.",
    "    xmodule.writeGctForModule(moduleObject)",
    "    outputGct",
    "    outputSource",
    "",
    "    emitBufferedOutput",
    "    printNodeTally",
    "    util.log_verbose \"done.\"",
    "    if (buildtype == \"run\") then { runJsCode(of, glPath) }",
    "}",
    "",
    "method compileInherit(inhNode) forClass(className) {",
    "    // The object under construction is `this`.",
    "    // Compile code to implement inheritance from inhNode",
    "",
    "    def superExpr = inhNode.value",
    "    if (superExpr.isCall) then {",
    "        inhNode.register := compileReuseCall(superExpr)",
    "            forClass (className)",
    "            aliases (aliasList(inhNode))",
    "            exclusions (exclusionList(inhNode))",
    "    } else {",
    "        errormessages.syntaxError \"inheritance must be from a request that yields a fresh object\"",
    "            atLine (inhNode.line)",
    "    }",
    "}",
    "method compileSuperInitialization(inheritsNode) {",
    "    out \"{inheritsNode.register}.call(this);\"",
    "}",
    "method compileReuseCall(callNode) forClass (className) aliases (aStr) exclusions (eStr) {",
    "    noteLineNumber (callNode.line) comment \"reuse call\"",
    "    def buildMethodName = addSuffix \"$build(3)\" to (callNode.nameString)",
    "    def target = compilenode(callNode.receiver)",
    "    var arglist := \"\"",
    "    callNode.parts.do { part ->",
    "        if (! part.name.startsWith \"$\") then {",
    "            part.args.do { p -> arglist := arglist ++ \", \" ++ compilenode(p) }",
    "        }",
    "    }",
    "    var typeArgs := \"\"",
    "    if (false != callNode.generics) then {",
    "        callNode.generics.do { g ->",
    "            typeArgs := typeArgs ++ \", \" ++ compilenode(g)",
    "        }",
    "    }",
    "    def numArgs = callNode.numArgs + callNode.numTypeArgs + 3",
    "    // why +3?  Becuase of the 3 args to $build(3).  In fact, it should",
    "    // be +2, because of the $object(1) suffix that is replaced by $build(3)",
    "    def req = if (callNode.isSelfRequest) then { \"selfRequest\" } else { \"request\" }",
    "    def initFun = uidWithPrefix \"initFun\"",
    "    out(\"var {initFun} = {req}({target}, \\\"{escapestring(buildMethodName)}\\\"\" ++",
    "          \", [null]{arglist}, this, {aStr}, {eStr}{typeArgs});  // compileReuseCall\")",
    "    initFun     // return the register that holds the initialization function",
    "}",
    "",
    "method addSuffix (tail) to (root) {",
    "    def dollarIx = root.indexOf \"$\"",
    "    if (dollarIx == 0) then {",
    "        root ++ tail",
    "    } else {",
    "        root.substringFrom 1 to (dollarIx - 1) ++ tail",
    "    }",
    "}",
    "",
    "method aliasList(inhNode) {",
    "    var res := \"[\"",
    "    inhNode.aliases.do { a ->",
    "        res := res ++ \"new Alias(\\\"{a.newName.quoted}\\\", \\\"{a.oldName.quoted}\\\")\"",
    "    } separatedBy {",
    "        res := res ++ \", \"",
    "    }",
    "    res ++ \"]\"",
    "}",
    "",
    "method exclusionList(inhNode) {",
    "    var res := \"[\"",
    "    inhNode.exclusions.do { e ->",
    "        res := res ++ \"\\\"{e.nameString.quoted}\\\"\"",
    "    } separatedBy {",
    "        res := res ++ \", \"",
    "    }",
    "    res ++ \"]\"",
    "}",
    "",
    "method compileUse(useNode) in (objNode) {",
    "    // The object under construction is `this`.",
    "    // Compile code to implement use of useNode.",
    "    useNode.register := compileReuseCall(useNode.value)",
    "        forClass (objNode.nameString)",
    "        aliases (aliasList(useNode))",
    "        exclusions (exclusionList(useNode))",
    "}",
    "",
    "method runJsCode(of, glPath) {",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pathList = filePath.split(gmp)",
    "    def libPath = if (glPath.endsWith \"/\")",
    "            then { glPath } else { glPath ++ \"/\" }",
    "    if (io.exists(libPath ++ \"gracelib.js\")) then {",
    "        if (pathList.contains(libPath).not) then {",
    "            sys.environ.at \"GRACE_MODULE_PATH\" put \"{libPath}:{gmp}\"",
    "        }",
    "    }",
    "    def p = sys.environ.at \"PATH\"",
    "    def grace = filePath.withBase \"grace\"",
    "    def executor = filePath.file (grace) onPath (p)",
    "          otherwise { firstTries ->",
    "        filePath.file (grace) onPath (gmp) otherwise { secondTries ->",
    "            def places = errormessages.readableStringFrom(firstTries ++ secondTries)",
    "            io.error.write \"minigrace: can't run {modname} because I can't find the `grace` runner;\\nI looked in {places}.\\n\"",
    "            sys.exit 3",
    "        }",
    "    }",
    "    def runExitCode = io.spawn(executor, [of.pathname]).wait",
    "    if (runExitCode < 0) then {",
    "        io.error.write \"minigrace: program {modname} exited with error {-runExitCode}.\\n\"",
    "        sys.exit(4)",
    "    }",
    "}" ];
}
function gracecode_genjs() {
  importedModules["genjs"] = this;
  var module$genjs = this;
  this.definitionModule = "genjs";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_genjs_1");
  this.outer_genjs_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "io" as io
  if (typeof gracecode_io == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module io"));
  var var_io = do_import("io", gracecode_io);
  var func0 = function(argcv) {     // accessor method io
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("io", 0, numArgs - 0);
    if (var_io === undefined) raiseUninitializedVariable("io");
    return var_io;
  };    // end of method io
  this.methods["io"] = func0;
  func0.methodName = "io";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "genjs";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(2);    // compilenode import
  // Import of "sys" as sys
  if (typeof gracecode_sys == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module sys"));
  var var_sys = do_import("sys", gracecode_sys);
  var func1 = function(argcv) {     // accessor method sys
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("sys", 0, numArgs - 0);
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    return var_sys;
  };    // end of method sys
  this.methods["sys"] = func1;
  func1.methodName = "sys";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 2;
  func1.definitionModule = "genjs";
  func1.debug = "import";
  func1.confidential = true;
  setLineNumber(3);    // compilenode import
  // Import of "ast" as ast
  if (typeof gracecode_ast == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module ast"));
  var var_ast = do_import("ast", gracecode_ast);
  var func2 = function(argcv) {     // accessor method ast
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("ast", 0, numArgs - 0);
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    return var_ast;
  };    // end of method ast
  this.methods["ast"] = func2;
  func2.methodName = "ast";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "genjs";
  func2.debug = "import";
  func2.confidential = true;
  setLineNumber(4);    // compilenode import
  // Import of "util" as util
  if (typeof gracecode_util == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module util"));
  var var_util = do_import("util", gracecode_util);
  var func3 = function(argcv) {     // accessor method util
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("util", 0, numArgs - 0);
    if (var_util === undefined) raiseUninitializedVariable("util");
    return var_util;
  };    // end of method util
  this.methods["util"] = func3;
  func3.methodName = "util";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 4;
  func3.definitionModule = "genjs";
  func3.debug = "import";
  func3.confidential = true;
  setLineNumber(5);    // compilenode import
  // Import of "unixFilePath" as filePath
  if (typeof gracecode_unixFilePath == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module unixFilePath"));
  var var_filePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func4 = function(argcv) {     // accessor method filePath
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("filePath", 0, numArgs - 0);
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    return var_filePath;
  };    // end of method filePath
  this.methods["filePath"] = func4;
  func4.methodName = "filePath";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 5;
  func4.definitionModule = "genjs";
  func4.debug = "import";
  func4.confidential = true;
  setLineNumber(6);    // compilenode import
  // Import of "xmodule" as xmodule
  if (typeof gracecode_xmodule == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module xmodule"));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func5 = function(argcv) {     // accessor method xmodule
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("xmodule", 0, numArgs - 0);
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    return var_xmodule;
  };    // end of method xmodule
  this.methods["xmodule"] = func5;
  func5.methodName = "xmodule";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 6;
  func5.definitionModule = "genjs";
  func5.debug = "import";
  func5.confidential = true;
  setLineNumber(7);    // compilenode import
  // Import of "mirrors" as mirrors
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func6 = function(argcv) {     // accessor method mirrors
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("mirrors", 0, numArgs - 0);
    if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
    return var_mirrors;
  };    // end of method mirrors
  this.methods["mirrors"] = func6;
  func6.methodName = "mirrors";
  func6.paramCounts = [0];
  func6.paramNames = [];
  func6.definitionLine = 7;
  func6.definitionModule = "genjs";
  func6.debug = "import";
  func6.confidential = true;
  setLineNumber(8);    // compilenode import
  // Import of "errormessages" as errormessages
  if (typeof gracecode_errormessages == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module errormessages"));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func7 = function(argcv) {     // accessor method errormessages
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("errormessages", 0, numArgs - 0);
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    return var_errormessages;
  };    // end of method errormessages
  this.methods["errormessages"] = func7;
  func7.methodName = "errormessages";
  func7.paramCounts = [0];
  func7.paramNames = [];
  func7.definitionLine = 8;
  func7.definitionModule = "genjs";
  func7.debug = "import";
  func7.confidential = true;
  setLineNumber(9);    // compilenode import
  // Import of "identifierKinds" as k
  if (typeof gracecode_identifierKinds == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module identifierKinds"));
  var var_k = do_import("identifierKinds", gracecode_identifierKinds);
  var func8 = function(argcv) {     // accessor method k
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("k", 0, numArgs - 0);
    if (var_k === undefined) raiseUninitializedVariable("k");
    return var_k;
  };    // end of method k
  this.methods["k"] = func8;
  func8.methodName = "k";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 9;
  func8.definitionModule = "genjs";
  func8.debug = "import";
  func8.confidential = true;
  setLineNumber(10);    // compilenode import
  // Import of "fastDict" as map
  if (typeof gracecode_fastDict == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module fastDict"));
  var var_map = do_import("fastDict", gracecode_fastDict);
  var func9 = function(argcv) {     // accessor method map
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("map", 0, numArgs - 0);
    if (var_map === undefined) raiseUninitializedVariable("map");
    return var_map;
  };    // end of method map
  this.methods["map"] = func9;
  func9.methodName = "map";
  func9.paramCounts = [0];
  func9.paramNames = [];
  func9.definitionLine = 10;
  func9.definitionModule = "genjs";
  func9.debug = "import";
  func9.confidential = true;
  var func10 = function(argcv) {    // method saveInitializedVars, line 24
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("saveInitializedVars", 0, numArgs - 0);
    }
    setLineNumber(27);    // compilenode defdec
    if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
    var var_result = var_initializedVars;
    setLineNumber(28);    // compilenode member
    // call case 6: other requests
    // call case 2: outer request
    var call12 = selfRequest(var_prelude, "set", [0]);
    var call11 = request(call12, "empty", [0]);
    var_initializedVars = call11;
    return var_result;
  };    // end of method saveInitializedVars
  this.methods["saveInitializedVars"] = func10;
  func10.methodName = "saveInitializedVars";
  func10.paramCounts = [0];
  func10.paramNames = [];
  func10.definitionLine = 24;
  func10.definitionModule = "genjs";
  var func13 = function(argcv, var_savedState) {    // method restoreInitializedVars(_), line 32
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("restoreInitializedVars(_)", 0, numArgs - 1);
    }
    setLineNumber(35);    // compilenode bind
    var_initializedVars = var_savedState;
    return GraceDone;
  };    // end of method restoreInitializedVars(_)
  this.methods["restoreInitializedVars(1)"] = func13;
  func13.methodName = "restoreInitializedVars(1)";
  func13.paramCounts = [1];
  func13.paramNames = ["savedState"];
  func13.definitionLine = 32;
  func13.definitionModule = "genjs";
  var func14 = function(argcv) {    // method increaseindent, line 68
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("increaseindent", 0, numArgs - 0);
    }
    setLineNumber(69);    // compilenode op
    if (var_indent === undefined) raiseUninitializedVariable("indent");
    var string15 = new GraceString("  ");
    var opresult16 = request(var_indent, "++(1)", [1], string15);
    var_indent = opresult16;
    return GraceDone;
  };    // end of method increaseindent
  this.methods["increaseindent"] = func14;
  func14.methodName = "increaseindent";
  func14.paramCounts = [0];
  func14.paramNames = [];
  func14.definitionLine = 68;
  func14.definitionModule = "genjs";
  var func17 = function(argcv) {    // method decreaseindent, line 72
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("decreaseindent", 0, numArgs - 0);
    }
    var if18 = GraceDone;
    setLineNumber(73);    // compilenode member
    // call case 6: other requests
    if (var_indent === undefined) raiseUninitializedVariable("indent");
    var call19 = request(var_indent, "size", [0]);
    var opresult20 = request(call19, "\u2264(1)", [1], new GraceNum(2));
    if (Grace_isTrue(opresult20)) {
      setLineNumber(74);    // compilenode string
      var string21 = new GraceString("");
      var_indent = string21;
      if18 = GraceDone;
    } else {
      setLineNumber(76);    // compilenode num
      // call case 6: other requests
      if (var_indent === undefined) raiseUninitializedVariable("indent");
      var call22 = request(var_indent, "substringFrom(1)", [1], new GraceNum(3));
      var_indent = call22;
      if18 = GraceDone;
    }
    return if18;
  };    // end of method decreaseindent
  this.methods["decreaseindent"] = func17;
  func17.methodName = "decreaseindent";
  func17.paramCounts = [0];
  func17.paramNames = [];
  func17.definitionLine = 72;
  func17.definitionModule = "genjs";
  var func23 = function(argcv, var_name) {    // method formatModname(_), line 80
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("formatModname(_)", 0, numArgs - 1);
    }
    setLineNumber(81);    // compilenode string
    var string24 = new GraceString("gracecode_");
    // call case 2: outer request
    var call26 = selfRequest(importedModules["genjs"], "basename(1)", [1], var_name);
    // call case 2: outer request
    var call25 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], call26);
    var opresult27 = request(string24, "++(1)", [1], call25);
    return opresult27;
  };    // end of method formatModname(_)
  this.methods["formatModname(1)"] = func23;
  func23.methodName = "formatModname(1)";
  func23.paramCounts = [1];
  func23.paramNames = ["name"];
  func23.definitionLine = 80;
  func23.definitionModule = "genjs";
  var func28 = function(argcv, var_filepath) {    // method basename(_), line 84
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("basename(_)", 0, numArgs - 1);
    }
    setLineNumber(85);    // compilenode string
    var string29 = new GraceString("");
    var var_bnm = string29;
    setLineNumber(86);    // compilenode block
    var block31 = new GraceBlock(this, 86, 1);
    block31.guard = jsTrue;
    block31.real = function block31(var_c) {
      var if32 = GraceDone;
      setLineNumber(87);    // compilenode string
      var string33 = new GraceString("/");
      var opresult34 = request(var_c, "==(1)", [1], string33);
      if (Grace_isTrue(opresult34)) {
        setLineNumber(88);    // compilenode string
        var string35 = new GraceString("");
        var_bnm = string35;
        if32 = GraceDone;
      } else {
        setLineNumber(90);    // compilenode op
        if (var_bnm === undefined) raiseUninitializedVariable("bnm");
        var opresult36 = request(var_bnm, "++(1)", [1], var_c);
        var_bnm = opresult36;
        if32 = GraceDone;
      }
      return if32;
    };
    let applyMeth31 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth31.methodName = "apply(1)";
    applyMeth31.paramCounts = [1];
    applyMeth31.paramNames = ["c"];
    applyMeth31.definitionLine = 86;
    applyMeth31.definitionModule = "genjs";
    block31.methods["apply(1)"] = applyMeth31;
    let matchesMeth31 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth31.methodName = "matches(1)";
    matchesMeth31.paramCounts = [1];
    matchesMeth31.paramNames = ["c"];
    matchesMeth31.definitionLine = 86;
    matchesMeth31.definitionModule = "genjs";
    block31.methods["matches(1)"] = matchesMeth31;
    // call case 2: outer request
    var call30 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_filepath, block31);
    return var_bnm;
  };    // end of method basename(_)
  this.methods["basename(1)"] = func28;
  func28.methodName = "basename(1)";
  func28.paramCounts = [1];
  func28.paramNames = ["filepath"];
  func28.definitionLine = 84;
  func28.definitionModule = "genjs";
  var func37 = function(argcv, var_node) {    // method outerProp(_), line 96
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("outerProp(_)", 0, numArgs - 1);
    }
    setLineNumber(96);    // compilenode string
    var string38 = new GraceString("outer_");
    if (var_emod === undefined) raiseUninitializedVariable("emod");
    var opresult39 = request(string38, "++(1)", [1], var_emod);
    var string40 = new GraceString("_");
    var opresult41 = request(opresult39, "++(1)", [1], string40);
    // call case 6: other requests
    var call42 = request(var_node, "line", [0]);
    var opresult43 = request(opresult41, "++(1)", [1], call42);
    return opresult43;
  };    // end of method outerProp(_)
  this.methods["outerProp(1)"] = func37;
  func37.methodName = "outerProp(1)";
  func37.paramCounts = [1];
  func37.paramNames = ["node"];
  func37.definitionLine = 96;
  func37.definitionModule = "genjs";
  var func44 = function(argcv, var_n, var_c) {    // method noteLineNumber(_)comment(_), line 98
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("noteLineNumber(_)comment(_)", 0, numArgs - 2);
    }
    var if45 = GraceDone;
    setLineNumber(100);    // compilenode num
    var opresult46 = request(var_n, "\u2260(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult46)) {
      setLineNumber(101);    // compilenode bind
      var_priorLineSeen = var_n;
      setLineNumber(102);    // compilenode bind
      var_priorLineComment = var_c;
      if45 = GraceDone;
    }
    return if45;
  };    // end of method noteLineNumber(_)comment(_)
  this.methods["noteLineNumber(1)comment(1)"] = func44;
  func44.methodName = "noteLineNumber(1)comment(1)";
  func44.paramCounts = [1, 1];
  func44.paramNames = ["n", "c"];
  func44.definitionLine = 98;
  func44.definitionModule = "genjs";
  var func47 = function(argcv, var_n) {    // method clearLineNumber(_), line 106
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("clearLineNumber(_)", 0, numArgs - 1);
    }
    setLineNumber(109);    // compilenode string
    var string48 = new GraceString("cleared on line ");
    var opresult49 = request(string48, "++(1)", [1], var_n);
    var string50 = new GraceString("");
    var opresult51 = request(opresult49, "++(1)", [1], string50);
    var_priorLineComment = opresult51;
    setLineNumber(110);    // compilenode num
    var_priorLineSeen = new GraceNum(0);
    setLineNumber(111);    // compilenode num
    var_priorLineEmitted = new GraceNum(0);
    return GraceDone;
  };    // end of method clearLineNumber(_)
  this.methods["clearLineNumber(1)"] = func47;
  func47.methodName = "clearLineNumber(1)";
  func47.paramCounts = [1];
  func47.paramNames = ["n"];
  func47.definitionLine = 106;
  func47.definitionModule = "genjs";
  var func52 = function(argcv, var_s) {    // method out(_), line 114
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("out(_)", 0, numArgs - 1);
    }
    var if53 = GraceDone;
    setLineNumber(116);    // compilenode op
    if (var_emitPositions === undefined) raiseUninitializedVariable("emitPositions");
    if (var_priorLineSeen === undefined) raiseUninitializedVariable("priorLineSeen");
    if (var_priorLineEmitted === undefined) raiseUninitializedVariable("priorLineEmitted");
    var opresult54 = request(var_priorLineSeen, "\u2260(1)", [1], var_priorLineEmitted);
    var opresult55 = request(var_emitPositions, "&&(1)", [1], opresult54);
    if (Grace_isTrue(opresult55)) {
      setLineNumber(117);    // compilenode string
      var string57 = new GraceString("");
      if (var_indent === undefined) raiseUninitializedVariable("indent");
      var opresult58 = request(string57, "++(1)", [1], var_indent);
      var string59 = new GraceString("setLineNumber(");
      var opresult60 = request(opresult58, "++(1)", [1], string59);
      if (var_priorLineSeen === undefined) raiseUninitializedVariable("priorLineSeen");
      var opresult61 = request(opresult60, "++(1)", [1], var_priorLineSeen);
      var string62 = new GraceString(");    // ");
      var opresult63 = request(opresult61, "++(1)", [1], string62);
      if (var_priorLineComment === undefined) raiseUninitializedVariable("priorLineComment");
      var opresult64 = request(opresult63, "++(1)", [1], var_priorLineComment);
      var string65 = new GraceString("");
      var opresult66 = request(opresult64, "++(1)", [1], string65);
      // call case 6: other requests
      if (var_output === undefined) raiseUninitializedVariable("output");
      var call56 = request(var_output, "push(1)", [1], opresult66);
      setLineNumber(118);    // compilenode bind
      if (var_priorLineSeen === undefined) raiseUninitializedVariable("priorLineSeen");
      var_priorLineEmitted = var_priorLineSeen;
      if53 = GraceDone;
    }
    setLineNumber(120);    // compilenode op
    if (var_indent === undefined) raiseUninitializedVariable("indent");
    var opresult68 = request(var_indent, "++(1)", [1], var_s);
    // call case 6: other requests
    if (var_output === undefined) raiseUninitializedVariable("output");
    var call67 = request(var_output, "push(1)", [1], opresult68);
    setLineNumber(121);    // compilenode return
    return var_done;
  };    // end of method out(_)
  this.methods["out(1)"] = func52;
  func52.methodName = "out(1)";
  func52.paramCounts = [1];
  func52.paramNames = ["s"];
  func52.definitionLine = 114;
  func52.definitionModule = "genjs";
  var func69 = function(argcv, var_s) {    // method outUnnumbered(_), line 124
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("outUnnumbered(_)", 0, numArgs - 1);
    }
    setLineNumber(126);    // compilenode op
    if (var_indent === undefined) raiseUninitializedVariable("indent");
    var opresult71 = request(var_indent, "++(1)", [1], var_s);
    // call case 6: other requests
    if (var_output === undefined) raiseUninitializedVariable("output");
    var call70 = request(var_output, "push(1)", [1], opresult71);
    return call70;
  };    // end of method outUnnumbered(_)
  this.methods["outUnnumbered(1)"] = func69;
  func69.methodName = "outUnnumbered(1)";
  func69.paramCounts = [1];
  func69.paramNames = ["s"];
  func69.definitionLine = 124;
  func69.definitionModule = "genjs";
  var func72 = function(argcv) {    // method emitBufferedOutput, line 129
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("emitBufferedOutput", 0, numArgs - 0);
    }
    setLineNumber(130);    // compilenode call
    if (var_output === undefined) raiseUninitializedVariable("output");
    var block74 = new GraceBlock(this, 130, 1);
    block74.guard = jsTrue;
    block74.real = function block74(var_o) {
      setLineNumber(131);    // compilenode call
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call75 = request(var_util, "outprint(1)", [1], var_o);
      return call75;
    };
    let applyMeth74 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth74.methodName = "apply(1)";
    applyMeth74.paramCounts = [1];
    applyMeth74.paramNames = ["o"];
    applyMeth74.definitionLine = 130;
    applyMeth74.definitionModule = "genjs";
    block74.methods["apply(1)"] = applyMeth74;
    let matchesMeth74 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth74.methodName = "matches(1)";
    matchesMeth74.paramCounts = [1];
    matchesMeth74.paramNames = ["o"];
    matchesMeth74.definitionLine = 130;
    matchesMeth74.definitionModule = "genjs";
    block74.methods["matches(1)"] = matchesMeth74;
    // call case 2: outer request
    var call73 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_output, block74);
    setLineNumber(133);    // compilenode member
    // call case 6: other requests
    if (var_outfile === undefined) raiseUninitializedVariable("outfile");
    var call76 = request(var_outfile, "close", [0]);
    return call76;
  };    // end of method emitBufferedOutput
  this.methods["emitBufferedOutput"] = func72;
  func72.methodName = "emitBufferedOutput";
  func72.paramCounts = [0];
  func72.paramNames = [];
  func72.definitionLine = 129;
  func72.definitionModule = "genjs";
  var func77 = function(argcv, var_vn) {    // method escapeident(_), line 136
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("escapeident(_)", 0, numArgs - 1);
    }
    setLineNumber(138);    // compilenode call
    var result = GraceDone;    // start native code from line 138
    return new GraceString(escapeident(var_vn._value));   // end native code insertion
    return result;
  };    // end of method escapeident(_)
  this.methods["escapeident(1)"] = func77;
  func77.methodName = "escapeident(1)";
  func77.paramCounts = [1];
  func77.paramNames = ["vn"];
  func77.definitionLine = 136;
  func77.definitionModule = "genjs";
  var func78 = function(argcv, var_s) {    // method escapestring(_), line 140
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("escapestring(_)", 0, numArgs - 1);
    }
    setLineNumber(142);    // compilenode call
    var result = GraceDone;    // start native code from line 142
    return new GraceString(escapestring(var_s._value));   // end native code insertion
    return result;
  };    // end of method escapestring(_)
  this.methods["escapestring(1)"] = func78;
  func78.methodName = "escapestring(1)";
  func78.paramCounts = [1];
  func78.paramNames = ["s"];
  func78.definitionLine = 140;
  func78.definitionModule = "genjs";
  var func79 = function(argcv, var_vn) {    // method varf(_), line 144
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("varf(_)", 0, numArgs - 1);
    }
    setLineNumber(145);    // compilenode string
    var string80 = new GraceString("var_");
    // call case 2: outer request
    var call81 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], var_vn);
    var opresult82 = request(string80, "++(1)", [1], call81);
    return opresult82;
  };    // end of method varf(_)
  this.methods["varf(1)"] = func79;
  func79.methodName = "varf(1)";
  func79.paramCounts = [1];
  func79.paramNames = ["vn"];
  func79.definitionLine = 144;
  func79.definitionModule = "genjs";
  var func83 = function(argcv, var_str) {    // method uidWithPrefix(_), line 147
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("uidWithPrefix(_)", 0, numArgs - 1);
    }
    setLineNumber(148);    // compilenode defdec
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var var_myc = var_auto__95__count;
    setLineNumber(149);    // compilenode op
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var sum84 = request(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = sum84;
    setLineNumber(150);    // compilenode op
    var opresult85 = request(var_str, "++(1)", [1], var_myc);
    return opresult85;
  };    // end of method uidWithPrefix(_)
  this.methods["uidWithPrefix(1)"] = func83;
  func83.methodName = "uidWithPrefix(1)";
  func83.paramCounts = [1];
  func83.paramNames = ["str"];
  func83.definitionLine = 147;
  func83.definitionModule = "genjs";
  var func86 = function(argcv, var_o) {    // method compilearray(_), line 159
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilearray(_)", 0, numArgs - 1);
    }
    setLineNumber(160);    // compilenode string
    var string88 = new GraceString("array");
    // call case 2: outer request
    var call87 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string88);
    var var_reg = call87;
    setLineNumber(161);    // compilenode array
    var array90 = new GraceSequence([]);
    // call case 2: outer request
    var call89 = selfRequest(var_prelude, "list(1)", [1], array90);
    var var_vals = call89;
    setLineNumber(162);    // compilenode member
    // call case 6: other requests
    var call92 = request(var_o, "value", [0]);
    var block93 = new GraceBlock(this, 162, 1);
    block93.guard = jsTrue;
    block93.real = function block93(var_a) {
      setLineNumber(162);    // compilenode call
      // call case 2: outer request
      var call95 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_a);
      // call case 6: other requests
      if (var_vals === undefined) raiseUninitializedVariable("vals");
      var call94 = request(var_vals, "push(1)", [1], call95);
      return call94;
    };
    let applyMeth93 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth93.methodName = "apply(1)";
    applyMeth93.paramCounts = [1];
    applyMeth93.paramNames = ["a"];
    applyMeth93.definitionLine = 162;
    applyMeth93.definitionModule = "genjs";
    block93.methods["apply(1)"] = applyMeth93;
    let matchesMeth93 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth93.methodName = "matches(1)";
    matchesMeth93.paramCounts = [1];
    matchesMeth93.paramNames = ["a"];
    matchesMeth93.definitionLine = 162;
    matchesMeth93.definitionModule = "genjs";
    block93.methods["matches(1)"] = matchesMeth93;
    // call case 2: outer request
    var call91 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call92, block93);
    setLineNumber(163);    // compilenode string
    var string97 = new GraceString("var ");
    var opresult98 = request(string97, "++(1)", [1], var_reg);
    var string99 = new GraceString(" = new GraceSequence(");
    var opresult100 = request(opresult98, "++(1)", [1], string99);
    // call case 2: outer request
    var call101 = selfRequest(importedModules["genjs"], "literalList(1)", [1], var_vals);
    var opresult102 = request(opresult100, "++(1)", [1], call101);
    var string103 = new GraceString(");");
    var opresult104 = request(opresult102, "++(1)", [1], string103);
    // call case 2: outer request
    var call96 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult104);
    setLineNumber(164);    // compilenode call
    // call case 6: other requests
    var call105 = request(var_o, "register:=(1)", [1], var_reg);
    return call105;
  };    // end of method compilearray(_)
  this.methods["compilearray(1)"] = func86;
  func86.methodName = "compilearray(1)";
  func86.paramCounts = [1];
  func86.paramNames = ["o"];
  func86.definitionLine = 159;
  func86.definitionModule = "genjs";
  var func106 = function(argcv, var_o) {    // method compilemember(_), line 166
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilemember(_)", 0, numArgs - 1);
    }
    setLineNumber(168);    // compilenode call
    // call case 2: outer request
    var call107 = selfRequest(importedModules["genjs"], "compilecall(1)", [1], var_o);
    return call107;
  };    // end of method compilemember(_)
  this.methods["compilemember(1)"] = func106;
  func106.methodName = "compilemember(1)";
  func106.paramCounts = [1];
  func106.paramNames = ["o"];
  func106.definitionLine = 166;
  func106.definitionModule = "genjs";
  var func108 = function(argcv, var_o, var_outerRef) {    // method compileobjouter(_,_), line 170
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileobjouter(_,_)", 0, numArgs - 2);
    }
    setLineNumber(171);    // compilenode call
    // call case 2: outer request
    var call109 = selfRequest(importedModules["genjs"], "outerProp(1)", [1], var_o);
    var var_outerPropName = call109;
    setLineNumber(172);    // compilenode string
    var string111 = new GraceString("this.closureKeys = this.closureKeys || [];");
    // call case 2: outer request
    var call110 = selfRequest(importedModules["genjs"], "out(1)", [1], string111);
    setLineNumber(173);    // compilenode string
    var string113 = new GraceString("this.closureKeys.push(\"");
    var opresult114 = request(string113, "++(1)", [1], var_outerPropName);
    var string115 = new GraceString("\");");
    var opresult116 = request(opresult114, "++(1)", [1], string115);
    // call case 2: outer request
    var call112 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult116);
    setLineNumber(174);    // compilenode string
    var string118 = new GraceString("this.");
    var opresult119 = request(string118, "++(1)", [1], var_outerPropName);
    var string120 = new GraceString(" = ");
    var opresult121 = request(opresult119, "++(1)", [1], string120);
    var opresult122 = request(opresult121, "++(1)", [1], var_outerRef);
    var string123 = new GraceString(";");
    var opresult124 = request(opresult122, "++(1)", [1], string123);
    // call case 2: outer request
    var call117 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult124);
    return call117;
  };    // end of method compileobjouter(_,_)
  func108.confidential = true;
  this.methods["compileobjouter(2)"] = func108;
  func108.methodName = "compileobjouter(2)";
  func108.paramCounts = [2];
  func108.paramNames = ["o", "outerRef"];
  func108.definitionLine = 170;
  func108.definitionModule = "genjs";
  var func125 = function(argcv, var_val, var_description, var_expectedType, var_lineNumber) {    // method compileCheckThat(_)called(_)hasType(_)onLine(_), line 176
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("compileCheckThat(_)called(_)hasType(_)onLine(_)", 0, numArgs - 4);
    }
    var if126 = GraceDone;
    setLineNumber(186);    // compilenode if
    if (var_emitTypeChecks === undefined) raiseUninitializedVariable("emitTypeChecks");
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if127 = GraceDone;
      setLineNumber(187);    // compilenode op
      var opresult128 = request(GraceFalse, "\u2260(1)", [1], var_expectedType);
      var string129 = new GraceString("never returns");
      var opresult130 = request(string129, "\u2260(1)", [1], var_val);
      var opresult131 = request(opresult128, "&&(1)", [1], opresult130);
      if (Grace_isTrue(opresult131)) {
        var if132 = GraceDone;
        setLineNumber(188);    // compilenode member
        // call case 6: other requests
        var call133 = request(var_expectedType, "value", [0]);
        var string134 = new GraceString("Unknown");
        var opresult135 = request(call133, "\u2260(1)", [1], string134);
        // call case 6: other requests
        var call136 = request(var_expectedType, "value", [0]);
        var string137 = new GraceString("Done");
        var opresult138 = request(call136, "\u2260(1)", [1], string137);
        var opresult139 = request(opresult135, "&&(1)", [1], opresult138);
        if (Grace_isTrue(opresult139)) {
          setLineNumber(189);    // compilenode call
          // call case 2: outer request
          var call140 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_expectedType);
          var var_nm__95__t = call140;
          var if141 = GraceDone;
          setLineNumber(190);    // compilenode num
          var opresult142 = request(var_lineNumber, "\u2260(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult142)) {
            setLineNumber(191);    // compilenode string
            var string144 = new GraceString("typecheck");
            // call case 2: outer request
            var call143 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], var_lineNumber, string144);
            if141 = call143;
          }
          setLineNumber(193);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call147 = request(var_expectedType, "toGrace(1)", [1], new GraceNum(0));
          var call146 = request(call147, "quoted", [0]);
          // call case 2: outer request
          var call145 = selfRequest(importedModules["genjs"], "removeTypeArgs(1)", [1], call146);
          var var_typeDesc = call145;
          setLineNumber(194);    // compilenode string
          var string149 = new GraceString("assertTypeOrMsg(");
          var opresult150 = request(string149, "++(1)", [1], var_val);
          var string151 = new GraceString(", ");
          var opresult152 = request(opresult150, "++(1)", [1], string151);
          if (var_nm__95__t === undefined) raiseUninitializedVariable("nm_t");
          var opresult153 = request(opresult152, "++(1)", [1], var_nm__95__t);
          var string154 = new GraceString(", \"");
          var opresult155 = request(opresult153, "++(1)", [1], string154);
          var opresult156 = request(opresult155, "++(1)", [1], var_description);
          var string157 = new GraceString("\", \"");
          var opresult158 = request(opresult156, "++(1)", [1], string157);
          if (var_typeDesc === undefined) raiseUninitializedVariable("typeDesc");
          var opresult159 = request(opresult158, "++(1)", [1], var_typeDesc);
          var string160 = new GraceString("\");");
          var opresult161 = request(opresult159, "++(1)", [1], string160);
          // call case 2: outer request
          var call148 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult161);
          if132 = call148;
        }
        if127 = if132;
      }
      if126 = if127;
    }
    return if126;
  };    // end of method compileCheckThat(_)called(_)hasType(_)onLine(_)
  this.methods["compileCheckThat(1)called(1)hasType(1)onLine(1)"] = func125;
  func125.methodName = "compileCheckThat(1)called(1)hasType(1)onLine(1)";
  func125.paramCounts = [1, 1, 1, 1];
  func125.paramNames = ["val", "description", "expectedType", "lineNumber"];
  func125.definitionLine = 176;
  func125.definitionModule = "genjs";
  var func162 = function(argcv, var_str) {    // method removeTypeArgs(_), line 199
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("removeTypeArgs(_)", 0, numArgs - 1);
    }
    setLineNumber(200);    // compilenode string
    var string164 = new GraceString("\u27e6");
    var block165 = new GraceBlock(this, 200, 0);
    block165.guard = jsTrue;
    block165.real = function block165() {
      setLineNumber(200);    // compilenode return
      throw new ReturnException(var_str, returnTarget);
    };
    let applyMeth165 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth165.methodName = "apply";
    applyMeth165.paramCounts = [0];
    applyMeth165.paramNames = [];
    applyMeth165.definitionLine = 200;
    applyMeth165.definitionModule = "genjs";
    block165.methods["apply"] = applyMeth165;
    // call case 6: other requests
    var call163 = request(var_str, "indexOf(1)ifAbsent(1)", [1, 1], string164, block165);
    var var_leftBracketIx = call163;
    setLineNumber(201);    // compilenode num
    var diff167 = request(var_leftBracketIx, "-(1)", [1], new GraceNum(1));
    // call case 6: other requests
    var call166 = request(var_str, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff167);
    return call166;
  };    // end of method removeTypeArgs(_)
  this.methods["removeTypeArgs(1)"] = func162;
  func162.methodName = "removeTypeArgs(1)";
  func162.paramCounts = [1];
  func162.paramNames = ["str"];
  func162.definitionLine = 199;
  func162.definitionModule = "genjs";
  var func168 = function(argcv, var_o, var_selfr) {    // method compileobjdefdec(_,_), line 203
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileobjdefdec(_,_)", 0, numArgs - 2);
    }
    setLineNumber(204);    // compilenode member
    // call case 6: other requests
    var call170 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call169 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call170);
    var var_val = call169;
    setLineNumber(205);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call172 = request(var_o, "name", [0]);
    var call171 = request(call172, "value", [0]);
    var var_oName = call171;
    setLineNumber(206);    // compilenode call
    // call case 2: outer request
    var call173 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], var_oName);
    var var_nm = call173;
    setLineNumber(207);    // compilenode string
    var string175 = new GraceString("value bound to ");
    // call case 2: outer request
    var call176 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_oName);
    var opresult177 = request(string175, "++(1)", [1], call176);
    var string178 = new GraceString("");
    var opresult179 = request(opresult177, "++(1)", [1], string178);
    setLineNumber(208);    // compilenode member
    // call case 6: other requests
    var call180 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    var call181 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call174 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_val, opresult179, call180, call181);
    setLineNumber(209);    // compilenode string
    var string183 = new GraceString("");
    var opresult184 = request(string183, "++(1)", [1], var_selfr);
    var string185 = new GraceString(".data.");
    var opresult186 = request(opresult184, "++(1)", [1], string185);
    var opresult187 = request(opresult186, "++(1)", [1], var_nm);
    var string188 = new GraceString(" = ");
    var opresult189 = request(opresult187, "++(1)", [1], string188);
    var opresult190 = request(opresult189, "++(1)", [1], var_val);
    var string191 = new GraceString(";");
    var opresult192 = request(opresult190, "++(1)", [1], string191);
    // call case 2: outer request
    var call182 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult192);
    return call182;
  };    // end of method compileobjdefdec(_,_)
  this.methods["compileobjdefdec(2)"] = func168;
  func168.methodName = "compileobjdefdec(2)";
  func168.paramCounts = [2];
  func168.paramNames = ["o", "selfr"];
  func168.definitionLine = 203;
  func168.definitionModule = "genjs";
  var func193 = function(argcv, var_o, var_selfr) {    // method compileobjvardec(_,_), line 211
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileobjvardec(_,_)", 0, numArgs - 2);
    }
    setLineNumber(212);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call195 = request(var_o, "name", [0]);
    var call194 = request(call195, "value", [0]);
    var var_oName = call194;
    setLineNumber(213);    // compilenode call
    // call case 2: outer request
    var call196 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], var_oName);
    var var_nm = call196;
    var if197 = GraceDone;
    setLineNumber(214);    // compilenode member
    // call case 6: other requests
    var call198 = request(var_o, "value", [0]);
    var opresult199 = request(GraceFalse, "==(1)", [1], call198);
    if (Grace_isTrue(opresult199)) {
      setLineNumber(215);    // compilenode string
      var string201 = new GraceString("");
      var opresult202 = request(string201, "++(1)", [1], var_selfr);
      var string203 = new GraceString(".data.");
      var opresult204 = request(opresult202, "++(1)", [1], string203);
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult205 = request(opresult204, "++(1)", [1], var_nm);
      var string206 = new GraceString(" = undefined;");
      var opresult207 = request(opresult205, "++(1)", [1], string206);
      // call case 2: outer request
      var call200 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult207);
      setLineNumber(216);    // compilenode return
      return var_done;
    }
    setLineNumber(218);    // compilenode member
    // call case 6: other requests
    var call209 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call208 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call209);
    var var_val = call208;
    setLineNumber(219);    // compilenode string
    var string211 = new GraceString("value assigned to ");
    // call case 2: outer request
    var call212 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_oName);
    var opresult213 = request(string211, "++(1)", [1], call212);
    var string214 = new GraceString("");
    var opresult215 = request(opresult213, "++(1)", [1], string214);
    setLineNumber(220);    // compilenode member
    // call case 6: other requests
    var call216 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    var call217 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call210 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_val, opresult215, call216, call217);
    setLineNumber(221);    // compilenode string
    var string219 = new GraceString("");
    var opresult220 = request(string219, "++(1)", [1], var_selfr);
    var string221 = new GraceString(".data.");
    var opresult222 = request(opresult220, "++(1)", [1], string221);
    var opresult223 = request(opresult222, "++(1)", [1], var_nm);
    var string224 = new GraceString(" = ");
    var opresult225 = request(opresult223, "++(1)", [1], string224);
    var opresult226 = request(opresult225, "++(1)", [1], var_val);
    var string227 = new GraceString(";");
    var opresult228 = request(opresult226, "++(1)", [1], string227);
    // call case 2: outer request
    var call218 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult228);
    return call218;
  };    // end of method compileobjvardec(_,_)
  this.methods["compileobjvardec(2)"] = func193;
  func193.methodName = "compileobjvardec(2)";
  func193.paramCounts = [2];
  func193.paramNames = ["o", "selfr"];
  func193.definitionLine = 211;
  func193.definitionModule = "genjs";
  var func229 = function(argcv, var_kind, var_o, var_objr) {    // method create(_)field(_)in(_), line 224
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("create(_)field(_)in(_)", 0, numArgs - 3);
    }
    setLineNumber(227);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call232 = request(var_o, "name", [0]);
    var call231 = request(call232, "value", [0]);
    // call case 2: outer request
    var call230 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call231);
    var var_nm = call230;
    setLineNumber(228);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call235 = request(var_o, "name", [0]);
    var call234 = request(call235, "value", [0]);
    // call case 2: outer request
    var call233 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], call234);
    var var_nmi = call233;
    setLineNumber(229);    // compilenode string
    var string237 = new GraceString("reader");
    // call case 2: outer request
    var call236 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string237);
    var string238 = new GraceString("_");
    var opresult239 = request(call236, "++(1)", [1], string238);
    var opresult240 = request(opresult239, "++(1)", [1], var_nmi);
    var var_rFun = opresult240;
    var if241 = GraceDone;
    setLineNumber(230);    // compilenode member
    // call case 6: other requests
    var call242 = request(var_o, "parentKind", [0]);
    var string243 = new GraceString("module");
    var opresult244 = request(call242, "==(1)", [1], string243);
    if (Grace_isTrue(opresult244)) {
      setLineNumber(231);    // compilenode string
      var string245 = new GraceString("var_");
      if (var_nmi === undefined) raiseUninitializedVariable("nmi");
      var opresult246 = request(string245, "++(1)", [1], var_nmi);
      var string247 = new GraceString("");
      var opresult248 = request(opresult246, "++(1)", [1], string247);
      if241 = opresult248;
    } else {
      setLineNumber(233);    // compilenode string
      var string250 = new GraceString("");
      var opresult251 = request(string250, "++(1)", [1], var_objr);
      var string252 = new GraceString(".data.");
      var opresult253 = request(opresult251, "++(1)", [1], string252);
      if (var_nmi === undefined) raiseUninitializedVariable("nmi");
      var opresult254 = request(opresult253, "++(1)", [1], var_nmi);
      var string255 = new GraceString(" = undefined;");
      var opresult256 = request(opresult254, "++(1)", [1], string255);
      // call case 2: outer request
      var call249 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult256);
      setLineNumber(234);    // compilenode string
      var string257 = new GraceString("");
      var opresult258 = request(string257, "++(1)", [1], var_objr);
      var string259 = new GraceString(".data.");
      var opresult260 = request(opresult258, "++(1)", [1], string259);
      if (var_nmi === undefined) raiseUninitializedVariable("nmi");
      var opresult261 = request(opresult260, "++(1)", [1], var_nmi);
      var string262 = new GraceString("");
      var opresult263 = request(opresult261, "++(1)", [1], string262);
      if241 = opresult263;
    }
    var var_fieldName = if241;
    setLineNumber(236);    // compilenode string
    var string265 = new GraceString("var ");
    var opresult266 = request(string265, "++(1)", [1], var_rFun);
    var string267 = new GraceString(" = function() {  // reader method ");
    var opresult268 = request(opresult266, "++(1)", [1], string267);
    var opresult269 = request(opresult268, "++(1)", [1], var_nm);
    var string270 = new GraceString("");
    var opresult271 = request(opresult269, "++(1)", [1], string270);
    // call case 2: outer request
    var call264 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult271);
    var if272 = GraceDone;
    setLineNumber(237);    // compilenode if
    if (var_emitUndefinedChecks === undefined) raiseUninitializedVariable("emitUndefinedChecks");
    if (Grace_isTrue(var_emitUndefinedChecks)) {
      setLineNumber(238);    // compilenode string
      var string274 = new GraceString("    if (");
      if (var_fieldName === undefined) raiseUninitializedVariable("fieldName");
      var opresult275 = request(string274, "++(1)", [1], var_fieldName);
      var string276 = new GraceString(" === undefined) raiseUninitializedVariable(\"");
      var opresult277 = request(opresult275, "++(1)", [1], string276);
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult278 = request(opresult277, "++(1)", [1], var_nm);
      var string279 = new GraceString("\");");
      var opresult280 = request(opresult278, "++(1)", [1], string279);
      // call case 2: outer request
      var call273 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult280);
      if272 = call273;
    }
    setLineNumber(240);    // compilenode string
    var string282 = new GraceString("    return ");
    var opresult283 = request(string282, "++(1)", [1], var_fieldName);
    var string284 = new GraceString(";");
    var opresult285 = request(opresult283, "++(1)", [1], string284);
    // call case 2: outer request
    var call281 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult285);
    setLineNumber(241);    // compilenode string
    var string287 = new GraceString("};");
    // call case 2: outer request
    var call286 = selfRequest(importedModules["genjs"], "out(1)", [1], string287);
    setLineNumber(242);    // compilenode string
    var string289 = new GraceString("");
    var opresult290 = request(string289, "++(1)", [1], var_rFun);
    var string291 = new GraceString(".is");
    var opresult292 = request(opresult290, "++(1)", [1], string291);
    // call case 6: other requests
    var call293 = request(var_kind, "capitalized", [0]);
    var opresult294 = request(opresult292, "++(1)", [1], call293);
    var string295 = new GraceString(" = true;");
    var opresult296 = request(opresult294, "++(1)", [1], string295);
    // call case 2: outer request
    var call288 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult296);
    var if297 = GraceDone;
    setLineNumber(243);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call299 = request(var_o, "isReadable", [0]);
    var call298 = request(call299, "not", [0]);
    if (Grace_isTrue(call298)) {
      setLineNumber(244);    // compilenode string
      var string301 = new GraceString("");
      if (var_rFun === undefined) raiseUninitializedVariable("rFun");
      var opresult302 = request(string301, "++(1)", [1], var_rFun);
      var string303 = new GraceString(".confidential = true;");
      var opresult304 = request(opresult302, "++(1)", [1], string303);
      // call case 2: outer request
      var call300 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult304);
      if297 = call300;
    }
    setLineNumber(246);    // compilenode string
    var string306 = new GraceString("");
    var opresult307 = request(string306, "++(1)", [1], var_objr);
    var string308 = new GraceString(".methods[\"");
    var opresult309 = request(opresult307, "++(1)", [1], string308);
    var opresult310 = request(opresult309, "++(1)", [1], var_nm);
    var string311 = new GraceString("\"] = ");
    var opresult312 = request(opresult310, "++(1)", [1], string311);
    var opresult313 = request(opresult312, "++(1)", [1], var_rFun);
    var string314 = new GraceString(";");
    var opresult315 = request(opresult313, "++(1)", [1], string314);
    // call case 2: outer request
    var call305 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult315);
    var if316 = GraceDone;
    setLineNumber(247);    // compilenode string
    var string317 = new GraceString("var");
    var opresult318 = request(var_kind, "==(1)", [1], string317);
    if (Grace_isTrue(opresult318)) {
      setLineNumber(248);    // compilenode string
      var string320 = new GraceString("writer");
      // call case 2: outer request
      var call319 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string320);
      var string321 = new GraceString("_");
      var opresult322 = request(call319, "++(1)", [1], string321);
      if (var_nmi === undefined) raiseUninitializedVariable("nmi");
      var opresult323 = request(opresult322, "++(1)", [1], var_nmi);
      var var_wFun = opresult323;
      setLineNumber(249);    // compilenode string
      var string325 = new GraceString("var ");
      if (var_wFun === undefined) raiseUninitializedVariable("wFun");
      var opresult326 = request(string325, "++(1)", [1], var_wFun);
      var string327 = new GraceString(" = function(argcv, n) {   // writer method ");
      var opresult328 = request(opresult326, "++(1)", [1], string327);
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult329 = request(opresult328, "++(1)", [1], var_nm);
      var string330 = new GraceString(":=(_)");
      var opresult331 = request(opresult329, "++(1)", [1], string330);
      // call case 2: outer request
      var call324 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult331);
      setLineNumber(250);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call332 = selfRequest(this, "increaseindent", [0]);
      setLineNumber(251);    // compilenode string
      var string334 = new GraceString("n");
      var string335 = new GraceString("argument to ");
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult336 = request(string335, "++(1)", [1], var_nm);
      var string337 = new GraceString(":=(_)");
      var opresult338 = request(opresult336, "++(1)", [1], string337);
      setLineNumber(252);    // compilenode member
      // call case 6: other requests
      var call339 = request(var_o, "dtype", [0]);
      // call case 2: outer request
      var call333 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], string334, opresult338, call339, new GraceNum(0));
      setLineNumber(253);    // compilenode string
      var string341 = new GraceString("");
      if (var_fieldName === undefined) raiseUninitializedVariable("fieldName");
      var opresult342 = request(string341, "++(1)", [1], var_fieldName);
      var string343 = new GraceString(" = n;");
      var opresult344 = request(opresult342, "++(1)", [1], string343);
      // call case 2: outer request
      var call340 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult344);
      setLineNumber(254);    // compilenode string
      var string346 = new GraceString("return GraceDone;");
      // call case 2: outer request
      var call345 = selfRequest(importedModules["genjs"], "out(1)", [1], string346);
      setLineNumber(255);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call347 = selfRequest(this, "decreaseindent", [0]);
      setLineNumber(256);    // compilenode string
      var string349 = new GraceString("};");
      // call case 2: outer request
      var call348 = selfRequest(importedModules["genjs"], "out(1)", [1], string349);
      var if350 = GraceDone;
      setLineNumber(257);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call352 = request(var_o, "isWritable", [0]);
      var call351 = request(call352, "not", [0]);
      if (Grace_isTrue(call351)) {
        setLineNumber(258);    // compilenode string
        var string354 = new GraceString("");
        if (var_wFun === undefined) raiseUninitializedVariable("wFun");
        var opresult355 = request(string354, "++(1)", [1], var_wFun);
        var string356 = new GraceString(".confidential = true;");
        var opresult357 = request(opresult355, "++(1)", [1], string356);
        // call case 2: outer request
        var call353 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult357);
        if350 = call353;
      }
      setLineNumber(260);    // compilenode string
      var string359 = new GraceString("");
      var opresult360 = request(string359, "++(1)", [1], var_objr);
      var string361 = new GraceString(".methods[\"");
      var opresult362 = request(opresult360, "++(1)", [1], string361);
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult363 = request(opresult362, "++(1)", [1], var_nm);
      var string364 = new GraceString(":=(1)\"] = ");
      var opresult365 = request(opresult363, "++(1)", [1], string364);
      if (var_wFun === undefined) raiseUninitializedVariable("wFun");
      var opresult366 = request(opresult365, "++(1)", [1], var_wFun);
      var string367 = new GraceString(";");
      var opresult368 = request(opresult366, "++(1)", [1], string367);
      // call case 2: outer request
      var call358 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult368);
      if316 = call358;
    }
    return if316;
  };    // end of method create(_)field(_)in(_)
  this.methods["create(1)field(1)in(1)"] = func229;
  func229.methodName = "create(1)field(1)in(1)";
  func229.paramCounts = [1, 1, 1];
  func229.paramNames = ["kind", "o", "objr"];
  func229.definitionLine = 224;
  func229.definitionModule = "genjs";
  var func369 = function(argcv, var_o, var_objr) {    // method installLocalAttributesOf(_)into(_), line 264
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("installLocalAttributesOf(_)into(_)", 0, numArgs - 2);
    }
    setLineNumber(265);    // compilenode vardec
    var var_mutable = GraceFalse;
    setLineNumber(267);    // compilenode member
    // call case 6: other requests
    var call371 = request(var_o, "body", [0]);
    var block372 = new GraceBlock(this, 267, 1);
    block372.guard = jsTrue;
    block372.real = function block372(var_e) {
      var if373 = GraceDone;
      setLineNumber(268);    // compilenode member
      // call case 6: other requests
      var call374 = request(var_e, "isMethod", [0]);
      if (Grace_isTrue(call374)) {
        setLineNumber(269);    // compilenode call
        // call case 2: outer request
        var call375 = selfRequest(importedModules["genjs"], "compilemethodnode(1)in(1)", [1, 1], var_e, var_objr);
        if373 = call375;
      } else {
        var if376 = GraceDone;
        setLineNumber(270);    // compilenode member
        // call case 6: other requests
        var call377 = request(var_e, "kind", [0]);
        var string378 = new GraceString("vardec");
        var opresult379 = request(call377, "==(1)", [1], string378);
        if (Grace_isTrue(opresult379)) {
          setLineNumber(271);    // compilenode string
          var string381 = new GraceString("var");
          // call case 2: outer request
          var call380 = selfRequest(importedModules["genjs"], "create(1)field(1)in(1)", [1, 1, 1], string381, var_e, var_objr);
          setLineNumber(272);    // compilenode bind
          var_mutable = GraceTrue;
          if376 = GraceDone;
        } else {
          var if382 = GraceDone;
          setLineNumber(273);    // compilenode member
          // call case 6: other requests
          var call383 = request(var_e, "kind", [0]);
          var string384 = new GraceString("defdec");
          var opresult385 = request(call383, "==(1)", [1], string384);
          if (Grace_isTrue(opresult385)) {
            var if386 = GraceDone;
            setLineNumber(274);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call389 = request(var_e, "value", [0]);
            var call388 = request(call389, "isNull", [0]);
            var call387 = request(call388, "not", [0]);
            if (Grace_isTrue(call387)) {
              setLineNumber(275);    // compilenode string
              var string391 = new GraceString("def");
              // call case 2: outer request
              var call390 = selfRequest(importedModules["genjs"], "create(1)field(1)in(1)", [1, 1, 1], string391, var_e, var_objr);
              if386 = call390;
            }
            if382 = if386;
          } else {
            var if392 = GraceDone;
            setLineNumber(277);    // compilenode member
            // call case 6: other requests
            var call393 = request(var_e, "isTypeDec", [0]);
            if (Grace_isTrue(call393)) {
              setLineNumber(278);    // compilenode call
              // call case 2: outer request
              var call394 = selfRequest(importedModules["genjs"], "compiletypedec(1)in(1)", [1, 1], var_e, var_objr);
              if392 = call394;
            }
            if382 = if392;
          }
          if376 = if382;
        }
        if373 = if376;
      }
      return if373;
    };
    let applyMeth372 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth372.methodName = "apply(1)";
    applyMeth372.paramCounts = [1];
    applyMeth372.paramNames = ["e"];
    applyMeth372.definitionLine = 267;
    applyMeth372.definitionModule = "genjs";
    block372.methods["apply(1)"] = applyMeth372;
    let matchesMeth372 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth372.methodName = "matches(1)";
    matchesMeth372.paramCounts = [1];
    matchesMeth372.paramNames = ["e"];
    matchesMeth372.definitionLine = 267;
    matchesMeth372.definitionModule = "genjs";
    block372.methods["matches(1)"] = matchesMeth372;
    // call case 2: outer request
    var call370 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call371, block372);
    var if395 = GraceDone;
    setLineNumber(281);    // compilenode if
    if (Grace_isTrue(var_mutable)) {
      setLineNumber(282);    // compilenode string
      var string397 = new GraceString("");
      var opresult398 = request(string397, "++(1)", [1], var_objr);
      var string399 = new GraceString(".mutable = true;");
      var opresult400 = request(opresult398, "++(1)", [1], string399);
      // call case 2: outer request
      var call396 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult400);
      if395 = call396;
    }
    return if395;
  };    // end of method installLocalAttributesOf(_)into(_)
  this.methods["installLocalAttributesOf(1)into(1)"] = func369;
  func369.methodName = "installLocalAttributesOf(1)into(1)";
  func369.paramCounts = [1, 1];
  func369.paramNames = ["o", "objr"];
  func369.definitionLine = 264;
  func369.definitionModule = "genjs";
  var func401 = function(argcv, var_o, var_selfr) {    // method compileOwnInitialization(_,_), line 286
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileOwnInitialization(_,_)", 0, numArgs - 2);
    }
    setLineNumber(287);    // compilenode block
    var block403 = new GraceBlock(this, 287, 1);
    block403.guard = jsTrue;
    block403.real = function block403(var_e) {
      var if404 = GraceDone;
      setLineNumber(288);    // compilenode member
      // call case 6: other requests
      var call405 = request(var_e, "isFieldDec", [0]);
      if (Grace_isTrue(call405)) {
        var if406 = GraceDone;
        setLineNumber(289);    // compilenode member
        // call case 6: other requests
        var call407 = request(var_e, "kind", [0]);
        var string408 = new GraceString("vardec");
        var opresult409 = request(call407, "==(1)", [1], string408);
        if (Grace_isTrue(opresult409)) {
          setLineNumber(290);    // compilenode call
          // call case 2: outer request
          var call410 = selfRequest(importedModules["genjs"], "compileobjvardec(2)", [2], var_e, var_selfr);
          if406 = call410;
        } else {
          var if411 = GraceDone;
          setLineNumber(291);    // compilenode member
          // call case 6: other requests
          var call412 = request(var_e, "kind", [0]);
          var string413 = new GraceString("defdec");
          var opresult414 = request(call412, "==(1)", [1], string413);
          if (Grace_isTrue(opresult414)) {
            setLineNumber(292);    // compilenode call
            // call case 2: outer request
            var call415 = selfRequest(importedModules["genjs"], "compileobjdefdec(2)", [2], var_e, var_selfr);
            if411 = call415;
          }
          if406 = if411;
        }
        if404 = if406;
      } else {
        var if416 = GraceDone;
        setLineNumber(294);    // compilenode member
        // call case 6: other requests
        var call417 = request(var_e, "isObject", [0]);
        if (Grace_isTrue(call417)) {
          setLineNumber(295);    // compilenode call
          // call case 2: outer request
          var call418 = selfRequest(importedModules["genjs"], "compileobject(2)", [2], var_e, var_selfr);
          if416 = call418;
        } else {
          var if419 = GraceDone;
          setLineNumber(296);    // compilenode member
          // call case 6: other requests
          var call420 = request(var_e, "isExecutable", [0]);
          if (Grace_isTrue(call420)) {
            setLineNumber(297);    // compilenode call
            // call case 2: outer request
            var call421 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_e);
            if419 = call421;
          }
          if416 = if419;
        }
        if404 = if416;
      }
      return if404;
    };
    let applyMeth403 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth403.methodName = "apply(1)";
    applyMeth403.paramCounts = [1];
    applyMeth403.paramNames = ["e"];
    applyMeth403.definitionLine = 287;
    applyMeth403.definitionModule = "genjs";
    block403.methods["apply(1)"] = applyMeth403;
    let matchesMeth403 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth403.methodName = "matches(1)";
    matchesMeth403.paramCounts = [1];
    matchesMeth403.paramNames = ["e"];
    matchesMeth403.definitionLine = 287;
    matchesMeth403.definitionModule = "genjs";
    block403.methods["matches(1)"] = matchesMeth403;
    // call case 6: other requests
    setLineNumber(287);    // compilenode member
    // call case 6: other requests
    var call422 = request(var_o, "body", [0]);
    var call402 = request(call422, "do(1)", [1], block403);
    return call402;
  };    // end of method compileOwnInitialization(_,_)
  this.methods["compileOwnInitialization(2)"] = func401;
  func401.methodName = "compileOwnInitialization(2)";
  func401.paramCounts = [2];
  func401.paramNames = ["o", "selfr"];
  func401.definitionLine = 286;
  func401.definitionModule = "genjs";
  var func423 = function(argcv, var_o, var_methNode) {    // method compileBuildAndInitFunctions(_)inMethod(_), line 302
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileBuildAndInitFunctions(_)inMethod(_)", 0, numArgs - 2);
    }
    setLineNumber(312);    // compilenode vardec
    if (var_inBlock === undefined) raiseUninitializedVariable("inBlock");
    var var_origInBlock = var_inBlock;
    setLineNumber(313);    // compilenode bind
    var_inBlock = GraceFalse;
    setLineNumber(315);    // compilenode string
    var string425 = new GraceString("obj");
    // call case 2: outer request
    var call424 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string425);
    var var_selfr = call424;
    setLineNumber(316);    // compilenode call
    // call case 6: other requests
    var call426 = request(var_o, "register:=(1)", [1], var_selfr);
    setLineNumber(317);    // compilenode member
    // call case 6: other requests
    var call427 = request(var_o, "superclass", [0]);
    var var_inheritsStmt = call427;
    setLineNumber(318);    // compilenode string
    var string428 = new GraceString("");
    var var_params = string428;
    setLineNumber(319);    // compilenode string
    var string429 = new GraceString("");
    var var_typeParams = string429;
    var if430 = GraceDone;
    setLineNumber(320);    // compilenode op
    var opresult431 = request(GraceFalse, "\u2260(1)", [1], var_methNode);
    if (Grace_isTrue(opresult431)) {
      setLineNumber(321);    // compilenode call
      // call case 2: outer request
      var call432 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_methNode);
      var_params = call432;
      setLineNumber(322);    // compilenode call
      // call case 2: outer request
      var call433 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_methNode);
      var_typeParams = call433;
      if430 = GraceDone;
    }
    setLineNumber(324);    // compilenode string
    var string435 = new GraceString("var ");
    var opresult436 = request(string435, "++(1)", [1], var_selfr);
    var string437 = new GraceString("_build = function(ignore");
    var opresult438 = request(opresult436, "++(1)", [1], string437);
    var opresult439 = request(opresult438, "++(1)", [1], var_params);
    var string440 = new GraceString(", outerObj, aliases, exclusions");
    var opresult441 = request(opresult439, "++(1)", [1], string440);
    var opresult442 = request(opresult441, "++(1)", [1], var_typeParams);
    var string443 = new GraceString(") {");
    var opresult444 = request(opresult442, "++(1)", [1], string443);
    // call case 2: outer request
    var call434 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult444);
    setLineNumber(330);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call445 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(331);    // compilenode string
    var string447 = new GraceString("outerObj");
    // call case 2: outer request
    var call446 = selfRequest(importedModules["genjs"], "compileobjouter(2)", [2], var_o, string447);
    setLineNumber(332);    // compilenode string
    var string449 = new GraceString("const inheritedExclusions = { };");
    // call case 2: outer request
    var call448 = selfRequest(importedModules["genjs"], "out(1)", [1], string449);
    setLineNumber(336);    // compilenode string
    var string451 = new GraceString("for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {");
    // call case 2: outer request
    var call450 = selfRequest(importedModules["genjs"], "out(1)", [1], string451);
    setLineNumber(337);    // compilenode string
    var string453 = new GraceString("    const exMeth = exclusions[eix];");
    // call case 2: outer request
    var call452 = selfRequest(importedModules["genjs"], "out(1)", [1], string453);
    setLineNumber(338);    // compilenode string
    var string455 = new GraceString("    inheritedExclusions[exMeth] = this.methods[exMeth]; };");
    // call case 2: outer request
    var call454 = selfRequest(importedModules["genjs"], "out(1)", [1], string455);
    var if456 = GraceDone;
    setLineNumber(340);    // compilenode op
    var opresult457 = request(GraceFalse, "\u2260(1)", [1], var_inheritsStmt);
    if (Grace_isTrue(opresult457)) {
      setLineNumber(341);    // compilenode call
      if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
      // call case 6: other requests
      var call459 = request(var_o, "nameString", [0]);
      // call case 2: outer request
      var call458 = selfRequest(importedModules["genjs"], "compileInherit(1)forClass(1)", [1, 1], var_inheritsStmt, call459);
      if456 = call458;
    }
    setLineNumber(343);    // compilenode block
    var block461 = new GraceBlock(this, 343, 1);
    block461.guard = jsTrue;
    block461.real = function block461(var_t) {
      setLineNumber(344);    // compilenode call
      // call case 2: outer request
      var call462 = selfRequest(importedModules["genjs"], "compileUse(1)in(1)", [1, 1], var_t, var_o);
      return call462;
    };
    let applyMeth461 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth461.methodName = "apply(1)";
    applyMeth461.paramCounts = [1];
    applyMeth461.paramNames = ["t"];
    applyMeth461.definitionLine = 343;
    applyMeth461.definitionModule = "genjs";
    block461.methods["apply(1)"] = applyMeth461;
    let matchesMeth461 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth461.methodName = "matches(1)";
    matchesMeth461.paramCounts = [1];
    matchesMeth461.paramNames = ["t"];
    matchesMeth461.definitionLine = 343;
    matchesMeth461.definitionModule = "genjs";
    block461.methods["matches(1)"] = matchesMeth461;
    // call case 6: other requests
    setLineNumber(343);    // compilenode member
    // call case 6: other requests
    var call463 = request(var_o, "usedTraits", [0]);
    var call460 = request(call463, "do(1)", [1], block461);
    setLineNumber(346);    // compilenode string
    var string465 = new GraceString("this");
    // call case 2: outer request
    var call464 = selfRequest(importedModules["genjs"], "installLocalAttributesOf(1)into(1)", [1, 1], var_o, string465);
    setLineNumber(347);    // compilenode string
    var string467 = new GraceString("const overridenByAliases = { };");
    // call case 2: outer request
    var call466 = selfRequest(importedModules["genjs"], "out(1)", [1], string467);
    setLineNumber(348);    // compilenode string
    var string469 = new GraceString("for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {");
    // call case 2: outer request
    var call468 = selfRequest(importedModules["genjs"], "out(1)", [1], string469);
    setLineNumber(349);    // compilenode string
    var string471 = new GraceString("    const a = aliases[aix];");
    // call case 2: outer request
    var call470 = selfRequest(importedModules["genjs"], "out(1)", [1], string471);
    setLineNumber(350);    // compilenode string
    var string473 = new GraceString("    const newNm = a.newName;");
    // call case 2: outer request
    var call472 = selfRequest(importedModules["genjs"], "out(1)", [1], string473);
    setLineNumber(351);    // compilenode string
    var string475 = new GraceString("    const oldNm = a.oldName;");
    // call case 2: outer request
    var call474 = selfRequest(importedModules["genjs"], "out(1)", [1], string475);
    setLineNumber(352);    // compilenode string
    var string477 = new GraceString("    overridenByAliases[newNm] = this.methods[newNm];");
    // call case 2: outer request
    var call476 = selfRequest(importedModules["genjs"], "out(1)", [1], string477);
    setLineNumber(353);    // compilenode string
    var string479 = new GraceString("    const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);");
    // call case 2: outer request
    var call478 = selfRequest(importedModules["genjs"], "out(1)", [1], string479);
    setLineNumber(354);    // compilenode string
    var string481 = new GraceString("    m.definitionLine = ");
    // call case 6: other requests
    var call482 = request(var_o, "line", [0]);
    var opresult483 = request(string481, "++(1)", [1], call482);
    var string484 = new GraceString(";");
    var opresult485 = request(opresult483, "++(1)", [1], string484);
    // call case 2: outer request
    var call480 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult485);
    setLineNumber(355);    // compilenode string
    var string487 = new GraceString("    m.definitionModule = ");
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult488 = request(string487, "++(1)", [1], var_modNameAsString);
    var string489 = new GraceString(";");
    var opresult490 = request(opresult488, "++(1)", [1], string489);
    // call case 2: outer request
    var call486 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult490);
    setLineNumber(356);    // compilenode string
    var string492 = new GraceString("    this.methods[newNm] = m;");
    // call case 2: outer request
    var call491 = selfRequest(importedModules["genjs"], "out(1)", [1], string492);
    setLineNumber(357);    // compilenode string
    var string494 = new GraceString("}");
    // call case 2: outer request
    var call493 = selfRequest(importedModules["genjs"], "out(1)", [1], string494);
    setLineNumber(358);    // compilenode string
    var string496 = new GraceString("for (let exName in inheritedExclusions) {");
    // call case 2: outer request
    var call495 = selfRequest(importedModules["genjs"], "out(1)", [1], string496);
    setLineNumber(359);    // compilenode string
    var string498 = new GraceString("    if (inheritedExclusions.hasOwnProperty(exName)) {");
    // call case 2: outer request
    var call497 = selfRequest(importedModules["genjs"], "out(1)", [1], string498);
    setLineNumber(360);    // compilenode string
    var string500 = new GraceString("        if (inheritedExclusions[exName]) {");
    // call case 2: outer request
    var call499 = selfRequest(importedModules["genjs"], "out(1)", [1], string500);
    setLineNumber(361);    // compilenode string
    var string502 = new GraceString("            this.methods[exName] = inheritedExclusions[exName];");
    // call case 2: outer request
    var call501 = selfRequest(importedModules["genjs"], "out(1)", [1], string502);
    setLineNumber(362);    // compilenode string
    var string504 = new GraceString("        } else {");
    // call case 2: outer request
    var call503 = selfRequest(importedModules["genjs"], "out(1)", [1], string504);
    setLineNumber(363);    // compilenode string
    var string506 = new GraceString("            delete this.methods[exName];");
    // call case 2: outer request
    var call505 = selfRequest(importedModules["genjs"], "out(1)", [1], string506);
    setLineNumber(364);    // compilenode string
    var string508 = new GraceString("        }");
    // call case 2: outer request
    var call507 = selfRequest(importedModules["genjs"], "out(1)", [1], string508);
    setLineNumber(365);    // compilenode string
    var string510 = new GraceString("    }");
    // call case 2: outer request
    var call509 = selfRequest(importedModules["genjs"], "out(1)", [1], string510);
    setLineNumber(366);    // compilenode string
    var string512 = new GraceString("}");
    // call case 2: outer request
    var call511 = selfRequest(importedModules["genjs"], "out(1)", [1], string512);
    setLineNumber(367);    // compilenode string
    var string514 = new GraceString("var ");
    var opresult515 = request(string514, "++(1)", [1], var_selfr);
    var string516 = new GraceString("_init = function() {    // init of object on line ");
    var opresult517 = request(opresult515, "++(1)", [1], string516);
    // call case 6: other requests
    var call518 = request(var_o, "line", [0]);
    var opresult519 = request(opresult517, "++(1)", [1], call518);
    var string520 = new GraceString("");
    var opresult521 = request(opresult519, "++(1)", [1], string520);
    // call case 2: outer request
    var call513 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult521);
    setLineNumber(369);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call522 = selfRequest(this, "increaseindent", [0]);
    var if523 = GraceDone;
    setLineNumber(370);    // compilenode op
    var opresult524 = request(GraceFalse, "\u2260(1)", [1], var_inheritsStmt);
    if (Grace_isTrue(opresult524)) {
      setLineNumber(371);    // compilenode call
      if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
      // call case 2: outer request
      var call525 = selfRequest(importedModules["genjs"], "compileSuperInitialization(1)", [1], var_inheritsStmt);
      if523 = call525;
    }
    setLineNumber(373);    // compilenode string
    var string527 = new GraceString("this");
    // call case 2: outer request
    var call526 = selfRequest(importedModules["genjs"], "compileOwnInitialization(2)", [2], var_o, string527);
    setLineNumber(374);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call528 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(375);    // compilenode string
    var string530 = new GraceString("};");
    // call case 2: outer request
    var call529 = selfRequest(importedModules["genjs"], "out(1)", [1], string530);
    setLineNumber(376);    // compilenode string
    var string532 = new GraceString("return ");
    var opresult533 = request(string532, "++(1)", [1], var_selfr);
    var string534 = new GraceString("_init;   // from compileBuildAndInitFunctions(_)inMethod(_)");
    var opresult535 = request(opresult533, "++(1)", [1], string534);
    // call case 2: outer request
    var call531 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult535);
    setLineNumber(377);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call536 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(378);    // compilenode string
    var string538 = new GraceString("};");
    // call case 2: outer request
    var call537 = selfRequest(importedModules["genjs"], "out(1)", [1], string538);
    setLineNumber(379);    // compilenode bind
    var_inBlock = var_origInBlock;
    return GraceDone;
  };    // end of method compileBuildAndInitFunctions(_)inMethod(_)
  this.methods["compileBuildAndInitFunctions(1)inMethod(1)"] = func423;
  func423.methodName = "compileBuildAndInitFunctions(1)inMethod(1)";
  func423.paramCounts = [1, 1];
  func423.paramNames = ["o", "methNode"];
  func423.definitionLine = 302;
  func423.definitionModule = "genjs";
  var func539 = function(argcv, var_o, var_outerRef) {    // method compileobject(_,_), line 381
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileobject(_,_)", 0, numArgs - 2);
    }
    setLineNumber(390);    // compilenode call
    // call case 2: outer request
    var call540 = selfRequest(importedModules["genjs"], "compileBuildAndInitFunctions(1)inMethod(1)", [1, 1], var_o, GraceFalse);
    setLineNumber(391);    // compilenode member
    // call case 6: other requests
    var call541 = request(var_o, "register", [0]);
    var var_objRef = call541;
    setLineNumber(392);    // compilenode string
    var string542 = new GraceString("\"");
    // call case 6: other requests
    // call case 6: other requests
    var call544 = request(var_o, "name", [0]);
    var call543 = request(call544, "quoted", [0]);
    var opresult545 = request(string542, "++(1)", [1], call543);
    var string546 = new GraceString("\"");
    var opresult547 = request(opresult545, "++(1)", [1], string546);
    var var_objName = opresult547;
    setLineNumber(393);    // compilenode string
    var string549 = new GraceString("var ");
    var opresult550 = request(string549, "++(1)", [1], var_objRef);
    var string551 = new GraceString(" = emptyGraceObject(");
    var opresult552 = request(opresult550, "++(1)", [1], string551);
    var opresult553 = request(opresult552, "++(1)", [1], var_objName);
    var string554 = new GraceString(", ");
    var opresult555 = request(opresult553, "++(1)", [1], string554);
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult556 = request(opresult555, "++(1)", [1], var_modNameAsString);
    var string557 = new GraceString(", ");
    var opresult558 = request(opresult556, "++(1)", [1], string557);
    // call case 6: other requests
    var call559 = request(var_o, "line", [0]);
    var opresult560 = request(opresult558, "++(1)", [1], call559);
    var string561 = new GraceString(");");
    var opresult562 = request(opresult560, "++(1)", [1], string561);
    // call case 2: outer request
    var call548 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult562);
    setLineNumber(394);    // compilenode string
    var string564 = new GraceString("var ");
    var opresult565 = request(string564, "++(1)", [1], var_objRef);
    var string566 = new GraceString("_init = ");
    var opresult567 = request(opresult565, "++(1)", [1], string566);
    var opresult568 = request(opresult567, "++(1)", [1], var_objRef);
    var string569 = new GraceString("_build.call(");
    var opresult570 = request(opresult568, "++(1)", [1], string569);
    var opresult571 = request(opresult570, "++(1)", [1], var_objRef);
    var string572 = new GraceString(", null, ");
    var opresult573 = request(opresult571, "++(1)", [1], string572);
    var opresult574 = request(opresult573, "++(1)", [1], var_outerRef);
    var string575 = new GraceString(", [], []);");
    var opresult576 = request(opresult574, "++(1)", [1], string575);
    // call case 2: outer request
    var call563 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult576);
    setLineNumber(395);    // compilenode string
    var string578 = new GraceString("");
    var opresult579 = request(string578, "++(1)", [1], var_objRef);
    var string580 = new GraceString("_init.call(");
    var opresult581 = request(opresult579, "++(1)", [1], string580);
    var opresult582 = request(opresult581, "++(1)", [1], var_objRef);
    var string583 = new GraceString(");  // end of compileobject");
    var opresult584 = request(opresult582, "++(1)", [1], string583);
    // call case 2: outer request
    var call577 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult584);
    return var_objRef;
  };    // end of method compileobject(_,_)
  this.methods["compileobject(2)"] = func539;
  func539.methodName = "compileobject(2)";
  func539.paramCounts = [2];
  func539.paramNames = ["o", "outerRef"];
  func539.definitionLine = 381;
  func539.definitionModule = "genjs";
  var func585 = function(argcv, var_o, var_paramList) {    // method compileGuard(_,_), line 398
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileGuard(_,_)", 0, numArgs - 2);
    }
    var if586 = GraceDone;
    setLineNumber(399);    // compilenode member
    // call case 6: other requests
    var call587 = request(var_o, "aParametersHasATypeAnnotation", [0]);
    if (Grace_isTrue(call587)) {
      setLineNumber(400);    // compilenode string
      var string589 = new GraceString("matches");
      // call case 2: outer request
      var call588 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string589);
      var var_matchFun = call588;
      setLineNumber(401);    // compilenode string
      var string591 = new GraceString("var ");
      if (var_matchFun === undefined) raiseUninitializedVariable("matchFun");
      var opresult592 = request(string591, "++(1)", [1], var_matchFun);
      var string593 = new GraceString(" = function(");
      var opresult594 = request(opresult592, "++(1)", [1], string593);
      var opresult595 = request(opresult594, "++(1)", [1], var_paramList);
      var string596 = new GraceString(") {");
      var opresult597 = request(opresult595, "++(1)", [1], string596);
      // call case 2: outer request
      var call590 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult597);
      setLineNumber(402);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call598 = selfRequest(this, "increaseindent", [0]);
      setLineNumber(403);    // compilenode member
      // call case 6: other requests
      var call600 = request(var_o, "line", [0]);
      var string601 = new GraceString("block matches function");
      // call case 2: outer request
      var call599 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call600, string601);
      setLineNumber(404);    // compilenode block
      var block603 = new GraceBlock(this, 404, 1);
      block603.guard = jsTrue;
      block603.real = function block603(var_p) {
        var if604 = GraceDone;
        setLineNumber(405);    // compilenode member
        // call case 6: other requests
        var call605 = request(var_p, "dtype", [0]);
        var opresult606 = request(GraceFalse, "\u2260(1)", [1], call605);
        if (Grace_isTrue(opresult606)) {
          setLineNumber(406);    // compilenode member
          // call case 6: other requests
          var call608 = request(var_p, "value", [0]);
          // call case 2: outer request
          var call607 = selfRequest(importedModules["genjs"], "varf(1)", [1], call608);
          var var_pName = call607;
          setLineNumber(407);    // compilenode member
          // call case 6: other requests
          var call610 = request(var_p, "dtype", [0]);
          // call case 2: outer request
          var call609 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call610);
          var var_dtype = call609;
          setLineNumber(408);    // compilenode string
          var string612 = new GraceString("if (!Grace_isTrue(request(");
          if (var_dtype === undefined) raiseUninitializedVariable("dtype");
          var opresult613 = request(string612, "++(1)", [1], var_dtype);
          var string614 = new GraceString(", \"matches(1)\", [1], ");
          var opresult615 = request(opresult613, "++(1)", [1], string614);
          if (var_pName === undefined) raiseUninitializedVariable("pName");
          var opresult616 = request(opresult615, "++(1)", [1], var_pName);
          var string617 = new GraceString(")))");
          var opresult618 = request(opresult616, "++(1)", [1], string617);
          // call case 2: outer request
          var call611 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult618);
          setLineNumber(409);    // compilenode string
          var string620 = new GraceString("    return false;");
          // call case 2: outer request
          var call619 = selfRequest(importedModules["genjs"], "out(1)", [1], string620);
          if604 = call619;
        }
        return if604;
      };
      let applyMeth603 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth603.methodName = "apply(1)";
      applyMeth603.paramCounts = [1];
      applyMeth603.paramNames = ["p"];
      applyMeth603.definitionLine = 404;
      applyMeth603.definitionModule = "genjs";
      block603.methods["apply(1)"] = applyMeth603;
      let matchesMeth603 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth603.methodName = "matches(1)";
      matchesMeth603.paramCounts = [1];
      matchesMeth603.paramNames = ["p"];
      matchesMeth603.definitionLine = 404;
      matchesMeth603.definitionModule = "genjs";
      block603.methods["matches(1)"] = matchesMeth603;
      // call case 6: other requests
      setLineNumber(404);    // compilenode member
      // call case 6: other requests
      var call621 = request(var_o, "params", [0]);
      var call602 = request(call621, "do(1)", [1], block603);
      setLineNumber(412);    // compilenode string
      var string623 = new GraceString("return true;");
      // call case 2: outer request
      var call622 = selfRequest(importedModules["genjs"], "out(1)", [1], string623);
      setLineNumber(413);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call624 = selfRequest(this, "decreaseindent", [0]);
      setLineNumber(414);    // compilenode string
      var string626 = new GraceString("};");
      // call case 2: outer request
      var call625 = selfRequest(importedModules["genjs"], "out(1)", [1], string626);
      if (var_matchFun === undefined) raiseUninitializedVariable("matchFun");
      if586 = var_matchFun;
    } else {
      setLineNumber(417);    // compilenode string
      var string627 = new GraceString("jsTrue");
      if586 = string627;
    }
    return if586;
  };    // end of method compileGuard(_,_)
  this.methods["compileGuard(2)"] = func585;
  func585.methodName = "compileGuard(2)";
  func585.paramCounts = [2];
  func585.paramNames = ["o", "paramList"];
  func585.definitionLine = 398;
  func585.definitionModule = "genjs";
  var func628 = function(argcv, var_o) {    // method compileblock(_), line 421
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileblock(_)", 0, numArgs - 1);
    }
    setLineNumber(422);    // compilenode defdec
    if (var_inBlock === undefined) raiseUninitializedVariable("inBlock");
    var var_origInBlock = var_inBlock;
    setLineNumber(423);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call629 = selfRequest(this, "saveInitializedVars", [0]);
    var var_oldInitializedVars = call629;
    setLineNumber(424);    // compilenode bind
    var_inBlock = GraceTrue;
    setLineNumber(425);    // compilenode string
    var string631 = new GraceString("block");
    // call case 2: outer request
    var call630 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string631);
    var var_blockId = call630;
    setLineNumber(426);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call633 = request(var_o, "params", [0]);
    var call632 = request(call633, "size", [0]);
    var var_nParams = call632;
    setLineNumber(427);    // compilenode string
    var string635 = new GraceString("var ");
    var opresult636 = request(string635, "++(1)", [1], var_blockId);
    var string637 = new GraceString(" = new GraceBlock(this, ");
    var opresult638 = request(opresult636, "++(1)", [1], string637);
    // call case 6: other requests
    var call639 = request(var_o, "line", [0]);
    var opresult640 = request(opresult638, "++(1)", [1], call639);
    var string641 = new GraceString(", ");
    var opresult642 = request(opresult640, "++(1)", [1], string641);
    var opresult643 = request(opresult642, "++(1)", [1], var_nParams);
    var string644 = new GraceString(");");
    var opresult645 = request(opresult643, "++(1)", [1], string644);
    // call case 2: outer request
    var call634 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult645);
    setLineNumber(428);    // compilenode string
    var string646 = new GraceString("");
    var var_paramList = string646;
    setLineNumber(429);    // compilenode array
    var array648 = new GraceSequence([]);
    // call case 2: outer request
    var call647 = selfRequest(var_prelude, "list(1)", [1], array648);
    var var_paramTypes = call647;
    setLineNumber(430);    // compilenode vardec
    var var_paramsAreTyped = GraceFalse;
    setLineNumber(431);    // compilenode vardec
    var var_first = GraceTrue;
    setLineNumber(432);    // compilenode member
    // call case 6: other requests
    var call650 = request(var_o, "params", [0]);
    var block651 = new GraceBlock(this, 432, 1);
    block651.guard = jsTrue;
    block651.real = function block651(var_each) {
      setLineNumber(433);    // compilenode member
      // call case 6: other requests
      var call652 = request(var_each, "decType", [0]);
      var var_dType = call652;
      setLineNumber(434);    // compilenode call
      if (var_dType === undefined) raiseUninitializedVariable("dType");
      // call case 2: outer request
      var call654 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_dType);
      // call case 6: other requests
      if (var_paramTypes === undefined) raiseUninitializedVariable("paramTypes");
      var call653 = request(var_paramTypes, "push(1)", [1], call654);
      var if655 = GraceDone;
      setLineNumber(435);    // compilenode op
      if (var_dType === undefined) raiseUninitializedVariable("dType");
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call656 = request(var_ast, "unknownType", [0]);
      var opresult657 = request(var_dType, "\u2260(1)", [1], call656);
      if (Grace_isTrue(opresult657)) {
        setLineNumber(436);    // compilenode bind
        var_paramsAreTyped = GraceTrue;
        if655 = GraceDone;
      }
      var if658 = GraceDone;
      setLineNumber(438);    // compilenode if
      if (var_first === undefined) raiseUninitializedVariable("first");
      if (Grace_isTrue(var_first)) {
        setLineNumber(439);    // compilenode member
        // call case 6: other requests
        var call660 = request(var_each, "value", [0]);
        // call case 2: outer request
        var call659 = selfRequest(importedModules["genjs"], "varf(1)", [1], call660);
        var_paramList = call659;
        setLineNumber(440);    // compilenode bind
        var_first = GraceFalse;
        if658 = GraceDone;
      } else {
        setLineNumber(442);    // compilenode op
        if (var_paramList === undefined) raiseUninitializedVariable("paramList");
        var string661 = new GraceString(", ");
        var opresult662 = request(var_paramList, "++(1)", [1], string661);
        // call case 6: other requests
        var call664 = request(var_each, "value", [0]);
        // call case 2: outer request
        var call663 = selfRequest(importedModules["genjs"], "varf(1)", [1], call664);
        var opresult665 = request(opresult662, "++(1)", [1], call663);
        var_paramList = opresult665;
        if658 = GraceDone;
      }
      return if658;
    };
    let applyMeth651 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth651.methodName = "apply(1)";
    applyMeth651.paramCounts = [1];
    applyMeth651.paramNames = ["each"];
    applyMeth651.definitionLine = 432;
    applyMeth651.definitionModule = "genjs";
    block651.methods["apply(1)"] = applyMeth651;
    let matchesMeth651 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth651.methodName = "matches(1)";
    matchesMeth651.paramCounts = [1];
    matchesMeth651.paramNames = ["each"];
    matchesMeth651.definitionLine = 432;
    matchesMeth651.definitionModule = "genjs";
    block651.methods["matches(1)"] = matchesMeth651;
    // call case 2: outer request
    var call649 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call650, block651);
    var if666 = GraceDone;
    setLineNumber(445);    // compilenode if
    if (Grace_isTrue(var_paramsAreTyped)) {
      setLineNumber(446);    // compilenode string
      var string668 = new GraceString("");
      if (var_blockId === undefined) raiseUninitializedVariable("blockId");
      var opresult669 = request(string668, "++(1)", [1], var_blockId);
      var string670 = new GraceString(".paramTypes = ");
      var opresult671 = request(opresult669, "++(1)", [1], string670);
      if (var_paramTypes === undefined) raiseUninitializedVariable("paramTypes");
      // call case 2: outer request
      var call672 = selfRequest(importedModules["genjs"], "literalList(1)", [1], var_paramTypes);
      var opresult673 = request(opresult671, "++(1)", [1], call672);
      var string674 = new GraceString(";");
      var opresult675 = request(opresult673, "++(1)", [1], string674);
      // call case 2: outer request
      var call667 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult675);
      if666 = call667;
    }
    setLineNumber(449);    // compilenode string
    var string677 = new GraceString("");
    var opresult678 = request(string677, "++(1)", [1], var_blockId);
    var string679 = new GraceString(".guard = ");
    var opresult680 = request(opresult678, "++(1)", [1], string679);
    // call case 2: outer request
    var call681 = selfRequest(importedModules["genjs"], "compileGuard(2)", [2], var_o, var_paramList);
    var opresult682 = request(opresult680, "++(1)", [1], call681);
    var string683 = new GraceString(";");
    var opresult684 = request(opresult682, "++(1)", [1], string683);
    // call case 2: outer request
    var call676 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult684);
    setLineNumber(450);    // compilenode string
    var string686 = new GraceString("");
    var opresult687 = request(string686, "++(1)", [1], var_blockId);
    var string688 = new GraceString(".real = function ");
    var opresult689 = request(opresult687, "++(1)", [1], string688);
    var opresult690 = request(opresult689, "++(1)", [1], var_blockId);
    var string691 = new GraceString("(");
    var opresult692 = request(opresult690, "++(1)", [1], string691);
    var opresult693 = request(opresult692, "++(1)", [1], var_paramList);
    var string694 = new GraceString(") {");
    var opresult695 = request(opresult693, "++(1)", [1], string694);
    // call case 2: outer request
    var call685 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult695);
    setLineNumber(451);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call696 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(452);    // compilenode num
    var_priorLineEmitted = new GraceNum(0);
    setLineNumber(453);    // compilenode member
    // call case 6: other requests
    var call698 = request(var_o, "line", [0]);
    var string699 = new GraceString("compileBlock");
    // call case 2: outer request
    var call697 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call698, string699);
    setLineNumber(454);    // compilenode string
    var string700 = new GraceString("GraceDone");
    var var_ret = string700;
    setLineNumber(455);    // compilenode member
    // call case 6: other requests
    var call702 = request(var_o, "body", [0]);
    var block703 = new GraceBlock(this, 455, 1);
    block703.guard = jsTrue;
    block703.real = function block703(var_l) {
      setLineNumber(456);    // compilenode call
      // call case 2: outer request
      var call704 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_l);
      var_ret = call704;
      return GraceDone;
    };
    let applyMeth703 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth703.methodName = "apply(1)";
    applyMeth703.paramCounts = [1];
    applyMeth703.paramNames = ["l"];
    applyMeth703.definitionLine = 455;
    applyMeth703.definitionModule = "genjs";
    block703.methods["apply(1)"] = applyMeth703;
    let matchesMeth703 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth703.methodName = "matches(1)";
    matchesMeth703.paramCounts = [1];
    matchesMeth703.paramNames = ["l"];
    matchesMeth703.definitionLine = 455;
    matchesMeth703.definitionModule = "genjs";
    block703.methods["matches(1)"] = matchesMeth703;
    // call case 2: outer request
    var call701 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call702, block703);
    var if705 = GraceDone;
    setLineNumber(458);    // compilenode string
    var string706 = new GraceString("never returns");
    var opresult707 = request(string706, "\u2260(1)", [1], var_ret);
    if (Grace_isTrue(opresult707)) {
      var string709 = new GraceString("return ");
      if (var_ret === undefined) raiseUninitializedVariable("ret");
      var opresult710 = request(string709, "++(1)", [1], var_ret);
      var string711 = new GraceString(";");
      var opresult712 = request(opresult710, "++(1)", [1], string711);
      // call case 2: outer request
      var call708 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult712);
      if705 = call708;
    }
    setLineNumber(459);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call713 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(460);    // compilenode string
    var string715 = new GraceString("};");
    // call case 2: outer request
    var call714 = selfRequest(importedModules["genjs"], "out(1)", [1], string715);
    setLineNumber(461);    // compilenode string
    var string717 = new GraceString("block");
    var string718 = new GraceString("applyMeth");
    // call case 6: other requests
    var call716 = request(var_blockId, "replace(1)with(1)", [1, 1], string717, string718);
    var var_applyMeth = call716;
    var if719 = GraceDone;
    setLineNumber(462);    // compilenode num
    var opresult720 = request(var_nParams, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult720)) {
      var string721 = new GraceString("apply");
      if719 = string721;
    } else {
      var string722 = new GraceString("apply(");
      if (var_nParams === undefined) raiseUninitializedVariable("nParams");
      var opresult723 = request(string722, "++(1)", [1], var_nParams);
      var string724 = new GraceString(")");
      var opresult725 = request(opresult723, "++(1)", [1], string724);
      if719 = opresult725;
    }
    var var_applyMethName = if719;
    var if726 = GraceDone;
    setLineNumber(463);    // compilenode num
    var opresult727 = request(var_nParams, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult727)) {
      setLineNumber(464);    // compilenode string
      var string729 = new GraceString("let ");
      if (var_applyMeth === undefined) raiseUninitializedVariable("applyMeth");
      var opresult730 = request(string729, "++(1)", [1], var_applyMeth);
      var string731 = new GraceString(" = function apply (argcv) {");
      var opresult732 = request(opresult730, "++(1)", [1], string731);
      // call case 2: outer request
      var call728 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult732);
      setLineNumber(465);    // compilenode string
      var string734 = new GraceString("    return this.real.apply(this.receiver);");
      // call case 2: outer request
      var call733 = selfRequest(importedModules["genjs"], "out(1)", [1], string734);
      setLineNumber(466);    // compilenode string
      var string736 = new GraceString("};");
      // call case 2: outer request
      var call735 = selfRequest(importedModules["genjs"], "out(1)", [1], string736);
      if726 = call735;
    } else {
      setLineNumber(468);    // compilenode string
      var string738 = new GraceString("let ");
      if (var_applyMeth === undefined) raiseUninitializedVariable("applyMeth");
      var opresult739 = request(string738, "++(1)", [1], var_applyMeth);
      var string740 = new GraceString(" = function apply_");
      var opresult741 = request(opresult739, "++(1)", [1], string740);
      if (var_nParams === undefined) raiseUninitializedVariable("nParams");
      var opresult742 = request(opresult741, "++(1)", [1], var_nParams);
      var string743 = new GraceString(" (argcv, ...args) {");
      var opresult744 = request(opresult742, "++(1)", [1], string743);
      // call case 2: outer request
      var call737 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult744);
      setLineNumber(469);    // compilenode string
      var string746 = new GraceString("    if (this.guard.apply(this.receiver, args))");
      // call case 2: outer request
      var call745 = selfRequest(importedModules["genjs"], "out(1)", [1], string746);
      setLineNumber(470);    // compilenode string
      var string748 = new GraceString("        return this.real.apply(this.receiver, args);");
      // call case 2: outer request
      var call747 = selfRequest(importedModules["genjs"], "out(1)", [1], string748);
      setLineNumber(471);    // compilenode string
      var string750 = new GraceString("    badBlockArgs.apply(this, args);");
      // call case 2: outer request
      var call749 = selfRequest(importedModules["genjs"], "out(1)", [1], string750);
      setLineNumber(472);    // compilenode string
      var string752 = new GraceString("};");
      // call case 2: outer request
      var call751 = selfRequest(importedModules["genjs"], "out(1)", [1], string752);
      if726 = call751;
    }
    setLineNumber(474);    // compilenode call
    // call case 2: outer request
    var call753 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_applyMeth, var_applyMethName);
    setLineNumber(475);    // compilenode string
    var string755 = new GraceString("");
    var opresult756 = request(string755, "++(1)", [1], var_blockId);
    var string757 = new GraceString(".methods[\"");
    var opresult758 = request(opresult756, "++(1)", [1], string757);
    var opresult759 = request(opresult758, "++(1)", [1], var_applyMethName);
    var string760 = new GraceString("\"] = ");
    var opresult761 = request(opresult759, "++(1)", [1], string760);
    var opresult762 = request(opresult761, "++(1)", [1], var_applyMeth);
    var string763 = new GraceString(";");
    var opresult764 = request(opresult762, "++(1)", [1], string763);
    // call case 2: outer request
    var call754 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult764);
    setLineNumber(476);    // compilenode string
    var string766 = new GraceString("applyMeth");
    var string767 = new GraceString("matchesMeth");
    // call case 6: other requests
    var call765 = request(var_applyMeth, "replace(1)with(1)", [1, 1], string766, string767);
    var var_matchesMeth = call765;
    setLineNumber(477);    // compilenode string
    var string768 = new GraceString("matches(");
    var opresult769 = request(string768, "++(1)", [1], var_nParams);
    var string770 = new GraceString(")");
    var opresult771 = request(opresult769, "++(1)", [1], string770);
    var var_matchesMethName = opresult771;
    var if772 = GraceDone;
    setLineNumber(478);    // compilenode num
    var opresult773 = request(var_nParams, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult773)) {
      setLineNumber(479);    // compilenode string
      var string775 = new GraceString("let ");
      if (var_matchesMeth === undefined) raiseUninitializedVariable("matchesMeth");
      var opresult776 = request(string775, "++(1)", [1], var_matchesMeth);
      var string777 = new GraceString(" = function matches_");
      var opresult778 = request(opresult776, "++(1)", [1], string777);
      if (var_nParams === undefined) raiseUninitializedVariable("nParams");
      var opresult779 = request(opresult778, "++(1)", [1], var_nParams);
      var string780 = new GraceString(" (argcv, ...args) {");
      var opresult781 = request(opresult779, "++(1)", [1], string780);
      // call case 2: outer request
      var call774 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult781);
      setLineNumber(480);    // compilenode string
      var string783 = new GraceString("    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;");
      // call case 2: outer request
      var call782 = selfRequest(importedModules["genjs"], "out(1)", [1], string783);
      setLineNumber(481);    // compilenode string
      var string785 = new GraceString("};");
      // call case 2: outer request
      var call784 = selfRequest(importedModules["genjs"], "out(1)", [1], string785);
      setLineNumber(482);    // compilenode call
      if (var_matchesMeth === undefined) raiseUninitializedVariable("matchesMeth");
      if (var_matchesMethName === undefined) raiseUninitializedVariable("matchesMethName");
      // call case 2: outer request
      var call786 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_matchesMeth, var_matchesMethName);
      setLineNumber(483);    // compilenode string
      var string788 = new GraceString("");
      if (var_blockId === undefined) raiseUninitializedVariable("blockId");
      var opresult789 = request(string788, "++(1)", [1], var_blockId);
      var string790 = new GraceString(".methods[\"");
      var opresult791 = request(opresult789, "++(1)", [1], string790);
      if (var_matchesMethName === undefined) raiseUninitializedVariable("matchesMethName");
      var opresult792 = request(opresult791, "++(1)", [1], var_matchesMethName);
      var string793 = new GraceString("\"] = ");
      var opresult794 = request(opresult792, "++(1)", [1], string793);
      if (var_matchesMeth === undefined) raiseUninitializedVariable("matchesMeth");
      var opresult795 = request(opresult794, "++(1)", [1], var_matchesMeth);
      var string796 = new GraceString(";");
      var opresult797 = request(opresult795, "++(1)", [1], string796);
      // call case 2: outer request
      var call787 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult797);
      if772 = call787;
    }
    setLineNumber(485);    // compilenode call
    // call case 6: other requests
    var call798 = request(var_o, "register:=(1)", [1], var_blockId);
    setLineNumber(486);    // compilenode call
    // call case 2: outer request
    var call799 = selfRequest(importedModules["genjs"], "restoreInitializedVars(1)", [1], var_oldInitializedVars);
    setLineNumber(487);    // compilenode bind
    var_inBlock = var_origInBlock;
    return GraceDone;
  };    // end of method compileblock(_)
  this.methods["compileblock(1)"] = func628;
  func628.methodName = "compileblock(1)";
  func628.paramCounts = [1];
  func628.paramNames = ["o"];
  func628.definitionLine = 421;
  func628.definitionModule = "genjs";
  var func800 = function(argcv, var_o, var_obj) {    // method compiletypedec(_)in(_), line 489
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compiletypedec(_)in(_)", 0, numArgs - 2);
    }
    setLineNumber(495);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call802 = request(var_o, "scope", [0]);
    var call801 = request(call802, "parent", [0]);
    var var_enclosing = call801;
    setLineNumber(496);    // compilenode string
    var string804 = new GraceString("type");
    // call case 2: outer request
    var call803 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string804);
    var var_reg = call803;
    setLineNumber(497);    // compilenode member
    // call case 6: other requests
    var call805 = request(var_o, "nameString", [0]);
    var var_tName = call805;
    setLineNumber(498);    // compilenode string
    var string807 = new GraceString("// Type decl ");
    var opresult808 = request(string807, "++(1)", [1], var_tName);
    var string809 = new GraceString("");
    var opresult810 = request(opresult808, "++(1)", [1], string809);
    // call case 2: outer request
    var call806 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult810);
    var if811 = GraceDone;
    setLineNumber(500);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call813 = request(var_o, "value", [0]);
    var call812 = request(call813, "kind", [0]);
    var string814 = new GraceString("typeliteral");
    var opresult815 = request(call812, "==(1)", [1], string814);
    if (Grace_isTrue(opresult815)) {
      if (var_tName === undefined) raiseUninitializedVariable("tName");
      // call case 6: other requests
      // call case 6: other requests
      var call817 = request(var_o, "value", [0]);
      var call816 = request(call817, "name:=(1)", [1], var_tName);
      if811 = call816;
    }
    setLineNumber(502);    // compilenode member
    // call case 6: other requests
    var call821 = request(var_o, "nameString", [0]);
    // call case 6: other requests
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call822 = request(var_ast, "signaturePart", [0]);
    var call820 = request(call822, "partName(1)scope(1)", [1, 1], call821, var_enclosing);
    var array819 = new GraceSequence([call820]);
    setLineNumber(503);    // compilenode member
    // call case 6: other requests
    var call824 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call823 = selfRequest(importedModules["genjs"], "typeFunBody(1)named(1)", [1, 1], call824, var_tName);
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call825 = request(var_ast, "unknownType", [0]);
    // call case 6: other requests
    setLineNumber(501);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call826 = request(var_ast, "methodNode", [0]);
    var call818 = request(call826, "new(3)scope(1)", [3, 1], array819, call823, call825, var_enclosing);
    var var_typeMethod = call818;
    setLineNumber(508);    // compilenode call
    // call case 6: other requests
    var call827 = request(var_typeMethod, "isOnceMethod:=(1)", [1], GraceTrue);
    setLineNumber(509);    // compilenode member
    // call case 6: other requests
    var call829 = request(var_o, "typeParams", [0]);
    // call case 6: other requests
    var call828 = request(var_typeMethod, "withTypeParams(1)", [1], call829);
    setLineNumber(510);    // compilenode call
    // call case 2: outer request
    var call830 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_typeMethod);
    var var_typeFun = call830;
    setLineNumber(511);    // compilenode call
    // call case 6: other requests
    var call831 = request(var_o, "register:=(1)", [1], var_reg);
    return var_reg;
  };    // end of method compiletypedec(_)in(_)
  this.methods["compiletypedec(1)in(1)"] = func800;
  func800.methodName = "compiletypedec(1)in(1)";
  func800.paramCounts = [1, 1];
  func800.paramNames = ["o", "obj"];
  func800.definitionLine = 489;
  func800.definitionModule = "genjs";
  var func832 = function(argcv, var_typeExpr, var_tName) {    // method typeFunBody(_)named(_), line 514
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("typeFunBody(_)named(_)", 0, numArgs - 2);
    }
    var if833 = GraceDone;
    setLineNumber(515);    // compilenode member
    // call case 6: other requests
    var call834 = request(var_typeExpr, "kind", [0]);
    var string835 = new GraceString("op");
    var opresult836 = request(call834, "==(1)", [1], string835);
    if (Grace_isTrue(opresult836)) {
      setLineNumber(517);    // compilenode member
      // call case 6: other requests
      setLineNumber(519);    // compilenode string
      var string842 = new GraceString("setName");
      setLineNumber(520);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call845 = request(var_ast, "stringNode", [0]);
      var call844 = request(call845, "new(1)", [1], var_tName);
      var array843 = new GraceSequence([call844]);
      // call case 6: other requests
      setLineNumber(519);    // compilenode member
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call846 = request(var_ast, "requestPart", [0]);
      var call841 = request(call846, "request(1)withArgs(1)", [1, 1], string842, array843);
      var array840 = new GraceSequence([call841]);
      // call case 6: other requests
      setLineNumber(517);    // compilenode member
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call847 = request(var_ast, "callNode", [0]);
      var call839 = request(call847, "new(2)", [2], var_typeExpr, array840);
      var call838 = request(call839, "onSelf", [0]);
      var array837 = new GraceSequence([call838]);
      if833 = array837;
    } else {
      setLineNumber(523);    // compilenode array
      var array848 = new GraceSequence([var_typeExpr]);
      if833 = array848;
    }
    return if833;
  };    // end of method typeFunBody(_)named(_)
  this.methods["typeFunBody(1)named(1)"] = func832;
  func832.methodName = "typeFunBody(1)named(1)";
  func832.paramCounts = [1, 1];
  func832.paramNames = ["typeExpr", "tName"];
  func832.definitionLine = 514;
  func832.definitionModule = "genjs";
  var func849 = function(argcv, var_o, var_obj) {    // method compiletypeliteral(_)in(_), line 526
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compiletypeliteral(_)in(_)", 0, numArgs - 2);
    }
    setLineNumber(527);    // compilenode string
    var string851 = new GraceString("typeLit");
    // call case 2: outer request
    var call850 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string851);
    var var_reg = call850;
    setLineNumber(528);    // compilenode member
    // call case 6: other requests
    var call853 = request(var_o, "name", [0]);
    // call case 2: outer request
    var call852 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call853);
    var var_escName = call852;
    setLineNumber(529);    // compilenode string
    var string855 = new GraceString("//   Type literal ");
    // call case 2: outer request
    var call854 = selfRequest(importedModules["genjs"], "out(1)", [1], string855);
    setLineNumber(530);    // compilenode string
    var string857 = new GraceString("var ");
    var opresult858 = request(string857, "++(1)", [1], var_reg);
    var string859 = new GraceString(" = new GraceType(\"");
    var opresult860 = request(opresult858, "++(1)", [1], string859);
    var opresult861 = request(opresult860, "++(1)", [1], var_escName);
    var string862 = new GraceString("\");");
    var opresult863 = request(opresult861, "++(1)", [1], string862);
    // call case 2: outer request
    var call856 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult863);
    setLineNumber(531);    // compilenode member
    // call case 6: other requests
    var call865 = request(var_o, "methods", [0]);
    var block866 = new GraceBlock(this, 531, 1);
    block866.guard = jsTrue;
    block866.real = function block866(var_meth) {
      setLineNumber(532);    // compilenode member
      // call case 6: other requests
      var call868 = request(var_meth, "nameString", [0]);
      // call case 2: outer request
      var call867 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call868);
      var var_mnm = call867;
      setLineNumber(533);    // compilenode string
      var string870 = new GraceString("");
      if (var_reg === undefined) raiseUninitializedVariable("reg");
      var opresult871 = request(string870, "++(1)", [1], var_reg);
      var string872 = new GraceString(".typeMethods.push(\"");
      var opresult873 = request(opresult871, "++(1)", [1], string872);
      if (var_mnm === undefined) raiseUninitializedVariable("mnm");
      var opresult874 = request(opresult873, "++(1)", [1], var_mnm);
      var string875 = new GraceString("\");");
      var opresult876 = request(opresult874, "++(1)", [1], string875);
      // call case 2: outer request
      var call869 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult876);
      return call869;
    };
    let applyMeth866 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth866.methodName = "apply(1)";
    applyMeth866.paramCounts = [1];
    applyMeth866.paramNames = ["meth"];
    applyMeth866.definitionLine = 531;
    applyMeth866.definitionModule = "genjs";
    block866.methods["apply(1)"] = applyMeth866;
    let matchesMeth866 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth866.methodName = "matches(1)";
    matchesMeth866.paramCounts = [1];
    matchesMeth866.paramNames = ["meth"];
    matchesMeth866.definitionLine = 531;
    matchesMeth866.definitionModule = "genjs";
    block866.methods["matches(1)"] = matchesMeth866;
    // call case 2: outer request
    var call864 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call865, block866);
    setLineNumber(535);    // compilenode call
    // call case 6: other requests
    var call877 = request(var_o, "register:=(1)", [1], var_reg);
    return var_reg;
  };    // end of method compiletypeliteral(_)in(_)
  this.methods["compiletypeliteral(1)in(1)"] = func849;
  func849.methodName = "compiletypeliteral(1)in(1)";
  func849.paramCounts = [1, 1];
  func849.paramNames = ["o", "obj"];
  func849.definitionLine = 526;
  func849.definitionModule = "genjs";
  var func878 = function(argcv, var_o) {    // method paramNames(_), line 538
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("paramNames(_)", 0, numArgs - 1);
    }
    setLineNumber(539);    // compilenode array
    var array880 = new GraceSequence([]);
    // call case 2: outer request
    var call879 = selfRequest(var_prelude, "list(1)", [1], array880);
    var var_result = call879;
    setLineNumber(540);    // compilenode block
    var block882 = new GraceBlock(this, 540, 1);
    block882.guard = jsTrue;
    block882.real = function block882(var_part) {
      setLineNumber(541);    // compilenode block
      var block884 = new GraceBlock(this, 541, 1);
      block884.guard = jsTrue;
      block884.real = function block884(var_param) {
        setLineNumber(542);    // compilenode member
        // call case 6: other requests
        var call886 = request(var_param, "nameString", [0]);
        // call case 6: other requests
        if (var_result === undefined) raiseUninitializedVariable("result");
        var call885 = request(var_result, "push(1)", [1], call886);
        return call885;
      };
      let applyMeth884 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth884.methodName = "apply(1)";
      applyMeth884.paramCounts = [1];
      applyMeth884.paramNames = ["param"];
      applyMeth884.definitionLine = 541;
      applyMeth884.definitionModule = "genjs";
      block884.methods["apply(1)"] = applyMeth884;
      let matchesMeth884 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth884.methodName = "matches(1)";
      matchesMeth884.paramCounts = [1];
      matchesMeth884.paramNames = ["param"];
      matchesMeth884.definitionLine = 541;
      matchesMeth884.definitionModule = "genjs";
      block884.methods["matches(1)"] = matchesMeth884;
      // call case 6: other requests
      setLineNumber(541);    // compilenode member
      // call case 6: other requests
      var call887 = request(var_part, "params", [0]);
      var call883 = request(call887, "do(1)", [1], block884);
      return call883;
    };
    let applyMeth882 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth882.methodName = "apply(1)";
    applyMeth882.paramCounts = [1];
    applyMeth882.paramNames = ["part"];
    applyMeth882.definitionLine = 540;
    applyMeth882.definitionModule = "genjs";
    block882.methods["apply(1)"] = applyMeth882;
    let matchesMeth882 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth882.methodName = "matches(1)";
    matchesMeth882.paramCounts = [1];
    matchesMeth882.paramNames = ["part"];
    matchesMeth882.definitionLine = 540;
    matchesMeth882.definitionModule = "genjs";
    block882.methods["matches(1)"] = matchesMeth882;
    // call case 6: other requests
    setLineNumber(540);    // compilenode member
    // call case 6: other requests
    var call888 = request(var_o, "signature", [0]);
    var call881 = request(call888, "do(1)", [1], block882);
    return var_result;
  };    // end of method paramNames(_)
  this.methods["paramNames(1)"] = func878;
  func878.methodName = "paramNames(1)";
  func878.paramCounts = [1];
  func878.paramNames = ["o"];
  func878.definitionLine = 538;
  func878.definitionModule = "genjs";
  var func889 = function(argcv, var_o) {    // method typeParamNames(_), line 547
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("typeParamNames(_)", 0, numArgs - 1);
    }
    var if890 = GraceDone;
    setLineNumber(548);    // compilenode member
    // call case 6: other requests
    var call891 = request(var_o, "typeParams", [0]);
    var opresult892 = request(GraceFalse, "==(1)", [1], call891);
    if (Grace_isTrue(opresult892)) {
      var array894 = new GraceSequence([]);
      // call case 2: outer request
      var call893 = selfRequest(var_prelude, "list(1)", [1], array894);
      return call893;
    }
    setLineNumber(549);    // compilenode array
    var array896 = new GraceSequence([]);
    // call case 2: outer request
    var call895 = selfRequest(var_prelude, "list(1)", [1], array896);
    var var_result = call895;
    setLineNumber(550);    // compilenode block
    var block898 = new GraceBlock(this, 550, 1);
    block898.guard = jsTrue;
    block898.real = function block898(var_each) {
      setLineNumber(551);    // compilenode member
      // call case 6: other requests
      var call900 = request(var_each, "nameString", [0]);
      // call case 6: other requests
      if (var_result === undefined) raiseUninitializedVariable("result");
      var call899 = request(var_result, "push(1)", [1], call900);
      return call899;
    };
    let applyMeth898 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth898.methodName = "apply(1)";
    applyMeth898.paramCounts = [1];
    applyMeth898.paramNames = ["each"];
    applyMeth898.definitionLine = 550;
    applyMeth898.definitionModule = "genjs";
    block898.methods["apply(1)"] = applyMeth898;
    let matchesMeth898 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth898.methodName = "matches(1)";
    matchesMeth898.paramCounts = [1];
    matchesMeth898.paramNames = ["each"];
    matchesMeth898.definitionLine = 550;
    matchesMeth898.definitionModule = "genjs";
    block898.methods["matches(1)"] = matchesMeth898;
    // call case 6: other requests
    setLineNumber(550);    // compilenode member
    // call case 6: other requests
    var call901 = request(var_o, "typeParams", [0]);
    var call897 = request(call901, "do(1)", [1], block898);
    return var_result;
  };    // end of method typeParamNames(_)
  this.methods["typeParamNames(1)"] = func889;
  func889.methodName = "typeParamNames(1)";
  func889.paramCounts = [1];
  func889.paramNames = ["o"];
  func889.definitionLine = 547;
  func889.definitionModule = "genjs";
  var func902 = function(argcv, var_o) {    // method hasTypedParams(_), line 555
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("hasTypedParams(_)", 0, numArgs - 1);
    }
    setLineNumber(556);    // compilenode member
    // call case 6: other requests
    var call904 = request(var_o, "signature", [0]);
    var block905 = new GraceBlock(this, 556, 1);
    block905.guard = jsTrue;
    block905.real = function block905(var_part) {
      setLineNumber(557);    // compilenode member
      // call case 6: other requests
      var call907 = request(var_part, "params", [0]);
      var block908 = new GraceBlock(this, 557, 1);
      block908.guard = jsTrue;
      block908.real = function block908(var_p) {
        var if909 = GraceDone;
        setLineNumber(558);    // compilenode member
        // call case 6: other requests
        var call910 = request(var_p, "dtype", [0]);
        var opresult911 = request(call910, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult911)) {
          var if912 = GraceDone;
          setLineNumber(559);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call914 = request(var_p, "dtype", [0]);
          var call913 = request(call914, "value", [0]);
          var string915 = new GraceString("Unknown");
          var opresult916 = request(call913, "\u2260(1)", [1], string915);
          setLineNumber(560);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call918 = request(var_p, "dtype", [0]);
          var call917 = request(call918, "kind", [0]);
          var string919 = new GraceString("identifier");
          var opresult920 = request(call917, "==(1)", [1], string919);
          setLineNumber(561);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call922 = request(var_p, "dtype", [0]);
          var call921 = request(call922, "kind", [0]);
          var string923 = new GraceString("typeliteral");
          var opresult924 = request(call921, "==(1)", [1], string923);
          var opresult925 = request(opresult920, "||(1)", [1], opresult924);
          var opresult926 = request(opresult916, "&&(1)", [1], opresult925);
          if (Grace_isTrue(opresult926)) {
            setLineNumber(562);    // compilenode return
            throw new ReturnException(GraceTrue, returnTarget);
          }
          if909 = if912;
        }
        return if909;
      };
      let applyMeth908 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth908.methodName = "apply(1)";
      applyMeth908.paramCounts = [1];
      applyMeth908.paramNames = ["p"];
      applyMeth908.definitionLine = 557;
      applyMeth908.definitionModule = "genjs";
      block908.methods["apply(1)"] = applyMeth908;
      let matchesMeth908 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth908.methodName = "matches(1)";
      matchesMeth908.paramCounts = [1];
      matchesMeth908.paramNames = ["p"];
      matchesMeth908.definitionLine = 557;
      matchesMeth908.definitionModule = "genjs";
      block908.methods["matches(1)"] = matchesMeth908;
      // call case 2: outer request
      var call906 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call907, block908);
      return call906;
    };
    let applyMeth905 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth905.methodName = "apply(1)";
    applyMeth905.paramCounts = [1];
    applyMeth905.paramNames = ["part"];
    applyMeth905.definitionLine = 556;
    applyMeth905.definitionModule = "genjs";
    block905.methods["apply(1)"] = applyMeth905;
    let matchesMeth905 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth905.methodName = "matches(1)";
    matchesMeth905.paramCounts = [1];
    matchesMeth905.paramNames = ["part"];
    matchesMeth905.definitionLine = 556;
    matchesMeth905.definitionModule = "genjs";
    block905.methods["matches(1)"] = matchesMeth905;
    // call case 2: outer request
    var call903 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call904, block905);
    setLineNumber(567);    // compilenode return
    return GraceFalse;
  };    // end of method hasTypedParams(_)
  this.methods["hasTypedParams(1)"] = func902;
  func902.methodName = "hasTypedParams(1)";
  func902.paramCounts = [1];
  func902.paramNames = ["o"];
  func902.definitionLine = 555;
  func902.definitionModule = "genjs";
  var func927 = function(argcv, var_o, var_funcName, var_name, var_p) {    // method compileMethodPreamble(_,_,_)withParams(_), line 570
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("compileMethodPreamble(_,_,_)withParams(_)", 0, numArgs - 4);
    }
    setLineNumber(571);    // compilenode string
    var string929 = new GraceString("var ");
    var opresult930 = request(string929, "++(1)", [1], var_funcName);
    var string931 = new GraceString(" = function(argcv");
    var opresult932 = request(opresult930, "++(1)", [1], string931);
    var opresult933 = request(opresult932, "++(1)", [1], var_p);
    var string934 = new GraceString(") {    // method ");
    var opresult935 = request(opresult933, "++(1)", [1], string934);
    var opresult936 = request(opresult935, "++(1)", [1], var_name);
    var string937 = new GraceString(", line ");
    var opresult938 = request(opresult936, "++(1)", [1], string937);
    // call case 6: other requests
    var call939 = request(var_o, "line", [0]);
    var opresult940 = request(opresult938, "++(1)", [1], call939);
    var string941 = new GraceString("");
    var opresult942 = request(opresult940, "++(1)", [1], string941);
    // call case 2: outer request
    var call928 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult942);
    setLineNumber(572);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call943 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(573);    // compilenode string
    var string945 = new GraceString("var returnTarget = invocationCount;");
    // call case 2: outer request
    var call944 = selfRequest(importedModules["genjs"], "out(1)", [1], string945);
    setLineNumber(574);    // compilenode string
    var string947 = new GraceString("invocationCount++;");
    // call case 2: outer request
    var call946 = selfRequest(importedModules["genjs"], "out(1)", [1], string947);
    return call946;
  };    // end of method compileMethodPreamble(_,_,_)withParams(_)
  this.methods["compileMethodPreamble(3)withParams(1)"] = func927;
  func927.methodName = "compileMethodPreamble(3)withParams(1)";
  func927.paramCounts = [3, 1];
  func927.paramNames = ["o", "funcName", "name", "p"];
  func927.definitionLine = 570;
  func927.definitionModule = "genjs";
  var func948 = function(argcv, var_o, var_funcName, var_name) {    // method compileMethodPostamble(_,_,_), line 577
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileMethodPostamble(_,_,_)", 0, numArgs - 3);
    }
    setLineNumber(578);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call949 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(579);    // compilenode string
    var string951 = new GraceString("};    // end of method ");
    var opresult952 = request(string951, "++(1)", [1], var_name);
    var string953 = new GraceString("");
    var opresult954 = request(opresult952, "++(1)", [1], string953);
    // call case 2: outer request
    var call950 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult954);
    var if955 = GraceDone;
    setLineNumber(580);    // compilenode call
    // call case 2: outer request
    var call956 = selfRequest(importedModules["genjs"], "hasTypedParams(1)", [1], var_o);
    if (Grace_isTrue(call956)) {
      setLineNumber(581);    // compilenode call
      // call case 2: outer request
      var call957 = selfRequest(importedModules["genjs"], "compilemethodtypes(2)", [2], var_funcName, var_o);
      if955 = call957;
    }
    var if958 = GraceDone;
    setLineNumber(583);    // compilenode member
    // call case 6: other requests
    var call959 = request(var_o, "isConfidential", [0]);
    if (Grace_isTrue(call959)) {
      setLineNumber(584);    // compilenode string
      var string961 = new GraceString("");
      var opresult962 = request(string961, "++(1)", [1], var_funcName);
      var string963 = new GraceString(".confidential = true;");
      var opresult964 = request(opresult962, "++(1)", [1], string963);
      // call case 2: outer request
      var call960 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult964);
      if958 = call960;
    }
    return if958;
  };    // end of method compileMethodPostamble(_,_,_)
  this.methods["compileMethodPostamble(3)"] = func948;
  func948.methodName = "compileMethodPostamble(3)";
  func948.paramCounts = [3];
  func948.paramNames = ["o", "funcName", "name"];
  func948.definitionLine = 577;
  func948.definitionModule = "genjs";
  var func965 = function(argcv, var_o, var_name) {    // method compileParameterDebugFrame(_,_), line 588
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileParameterDebugFrame(_,_)", 0, numArgs - 2);
    }
    var if966 = GraceDone;
    setLineNumber(589);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(590);    // compilenode string
      var string968 = new GraceString("var myframe = new StackFrame(\"");
      var opresult969 = request(string968, "++(1)", [1], var_name);
      var string970 = new GraceString("\");");
      var opresult971 = request(opresult969, "++(1)", [1], string970);
      // call case 2: outer request
      var call967 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult971);
      setLineNumber(591);    // compilenode member
      // call case 6: other requests
      var call973 = request(var_o, "signature", [0]);
      var block974 = new GraceBlock(this, 591, 1);
      block974.guard = jsTrue;
      block974.real = function block974(var_part) {
        setLineNumber(592);    // compilenode member
        // call case 6: other requests
        var call976 = request(var_part, "params", [0]);
        var block977 = new GraceBlock(this, 592, 1);
        block977.guard = jsTrue;
        block977.real = function block977(var_p) {
          setLineNumber(593);    // compilenode member
          // call case 6: other requests
          var call978 = request(var_p, "nameString", [0]);
          var var_pName = call978;
          setLineNumber(594);    // compilenode call
          if (var_pName === undefined) raiseUninitializedVariable("pName");
          // call case 2: outer request
          var call979 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_pName);
          var var_varName = call979;
          setLineNumber(595);    // compilenode string
          var string981 = new GraceString("myframe.addVar(\"");
          if (var_pName === undefined) raiseUninitializedVariable("pName");
          // call case 2: outer request
          var call982 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_pName);
          var opresult983 = request(string981, "++(1)", [1], call982);
          var string984 = new GraceString("\",");
          var opresult985 = request(opresult983, "++(1)", [1], string984);
          // call case 2: outer request
          var call980 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult985);
          setLineNumber(596);    // compilenode string
          var string987 = new GraceString("  function() {return ");
          if (var_varName === undefined) raiseUninitializedVariable("varName");
          var opresult988 = request(string987, "++(1)", [1], var_varName);
          var string989 = new GraceString(";});");
          var opresult990 = request(opresult988, "++(1)", [1], string989);
          // call case 2: outer request
          var call986 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult990);
          return call986;
        };
        let applyMeth977 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth977.methodName = "apply(1)";
        applyMeth977.paramCounts = [1];
        applyMeth977.paramNames = ["p"];
        applyMeth977.definitionLine = 592;
        applyMeth977.definitionModule = "genjs";
        block977.methods["apply(1)"] = applyMeth977;
        let matchesMeth977 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth977.methodName = "matches(1)";
        matchesMeth977.paramCounts = [1];
        matchesMeth977.paramNames = ["p"];
        matchesMeth977.definitionLine = 592;
        matchesMeth977.definitionModule = "genjs";
        block977.methods["matches(1)"] = matchesMeth977;
        // call case 2: outer request
        var call975 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call976, block977);
        return call975;
      };
      let applyMeth974 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth974.methodName = "apply(1)";
      applyMeth974.paramCounts = [1];
      applyMeth974.paramNames = ["part"];
      applyMeth974.definitionLine = 591;
      applyMeth974.definitionModule = "genjs";
      block974.methods["apply(1)"] = applyMeth974;
      let matchesMeth974 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth974.methodName = "matches(1)";
      matchesMeth974.paramCounts = [1];
      matchesMeth974.paramNames = ["part"];
      matchesMeth974.definitionLine = 591;
      matchesMeth974.definitionModule = "genjs";
      block974.methods["matches(1)"] = matchesMeth974;
      // call case 2: outer request
      var call972 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call973, block974);
      if966 = call972;
    }
    return if966;
  };    // end of method compileParameterDebugFrame(_,_)
  this.methods["compileParameterDebugFrame(2)"] = func965;
  func965.methodName = "compileParameterDebugFrame(2)";
  func965.paramCounts = [2];
  func965.paramNames = ["o", "name"];
  func965.definitionLine = 588;
  func965.definitionModule = "genjs";
  var func991 = function(argcv, var_o, var_extra) {    // method compileDefaultsForTypeParameters(_)extraParams(_), line 602
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileDefaultsForTypeParameters(_)extraParams(_)", 0, numArgs - 2);
    }
    setLineNumber(603);    // compilenode member
    // call case 6: other requests
    var call992 = request(var_o, "typeParams", [0]);
    var var_tps = call992;
    var if993 = GraceDone;
    setLineNumber(604);    // compilenode op
    var opresult994 = request(GraceFalse, "\u2260(1)", [1], var_tps);
    if (Grace_isTrue(opresult994)) {
      setLineNumber(605);    // compilenode block
      var block996 = new GraceBlock(this, 605, 1);
      block996.guard = jsTrue;
      block996.real = function block996(var_g) {
        setLineNumber(606);    // compilenode member
        // call case 6: other requests
        var call998 = request(var_g, "value", [0]);
        // call case 2: outer request
        var call997 = selfRequest(importedModules["genjs"], "varf(1)", [1], call998);
        var var_gName = call997;
        setLineNumber(607);    // compilenode string
        var string1000 = new GraceString("if (! ");
        if (var_gName === undefined) raiseUninitializedVariable("gName");
        var opresult1001 = request(string1000, "++(1)", [1], var_gName);
        var string1002 = new GraceString(") ");
        var opresult1003 = request(opresult1001, "++(1)", [1], string1002);
        if (var_gName === undefined) raiseUninitializedVariable("gName");
        var opresult1004 = request(opresult1003, "++(1)", [1], var_gName);
        var string1005 = new GraceString(" = var_Unknown;");
        var opresult1006 = request(opresult1004, "++(1)", [1], string1005);
        // call case 2: outer request
        var call999 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1006);
        return call999;
      };
      let applyMeth996 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth996.methodName = "apply(1)";
      applyMeth996.paramCounts = [1];
      applyMeth996.paramNames = ["g"];
      applyMeth996.definitionLine = 605;
      applyMeth996.definitionModule = "genjs";
      block996.methods["apply(1)"] = applyMeth996;
      let matchesMeth996 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth996.methodName = "matches(1)";
      matchesMeth996.paramCounts = [1];
      matchesMeth996.paramNames = ["g"];
      matchesMeth996.definitionLine = 605;
      matchesMeth996.definitionModule = "genjs";
      block996.methods["matches(1)"] = matchesMeth996;
      // call case 6: other requests
      setLineNumber(605);    // compilenode member
      // call case 6: other requests
      var call1007 = request(var_o, "typeParams", [0]);
      var call995 = request(call1007, "do(1)", [1], block996);
      if993 = call995;
    }
    var if1008 = GraceDone;
    setLineNumber(610);    // compilenode if
    if (var_emitArgChecks === undefined) raiseUninitializedVariable("emitArgChecks");
    if (Grace_isTrue(var_emitArgChecks)) {
      var if1009 = GraceDone;
      setLineNumber(611);    // compilenode num
      var opresult1010 = request(var_extra, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult1010)) {
        var string1011 = new GraceString("1");
        if1009 = string1011;
      } else {
        var string1012 = new GraceString("");
        var sum1013 = request(var_extra, "+(1)", [1], new GraceNum(1));
        var opresult1014 = request(string1012, "++(1)", [1], sum1013);
        var string1015 = new GraceString("");
        var opresult1016 = request(opresult1014, "++(1)", [1], string1015);
        if1009 = opresult1016;
      }
      var var_correction = if1009;
      setLineNumber(613);    // compilenode string
      var string1018 = new GraceString("const numArgs = arguments.length - ");
      if (var_correction === undefined) raiseUninitializedVariable("correction");
      var opresult1019 = request(string1018, "++(1)", [1], var_correction);
      var string1020 = new GraceString(";");
      var opresult1021 = request(opresult1019, "++(1)", [1], string1020);
      // call case 2: outer request
      var call1017 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1021);
      setLineNumber(614);    // compilenode member
      // call case 6: other requests
      var call1022 = request(var_o, "numParams", [0]);
      var var_np = call1022;
      setLineNumber(615);    // compilenode member
      // call case 6: other requests
      var call1023 = request(var_o, "numTypeParams", [0]);
      var var_ntp = call1023;
      var if1024 = GraceDone;
      setLineNumber(616);    // compilenode op
      if (var_ntp === undefined) raiseUninitializedVariable("ntp");
      var opresult1025 = request(var_ntp, "==(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult1025)) {
        var string1026 = new GraceString("");
        if1024 = string1026;
      } else {
        var string1027 = new GraceString("s");
        if1024 = string1027;
      }
      var var_s = if1024;
      setLineNumber(617);    // compilenode string
      var string1029 = new GraceString("if ((numArgs > ");
      if (var_np === undefined) raiseUninitializedVariable("np");
      var opresult1030 = request(string1029, "++(1)", [1], var_np);
      var string1031 = new GraceString(") && (numArgs !== ");
      var opresult1032 = request(opresult1030, "++(1)", [1], string1031);
      if (var_np === undefined) raiseUninitializedVariable("np");
      if (var_ntp === undefined) raiseUninitializedVariable("ntp");
      var sum1033 = request(var_np, "+(1)", [1], var_ntp);
      var opresult1034 = request(opresult1032, "++(1)", [1], sum1033);
      var string1035 = new GraceString(")) {");
      var opresult1036 = request(opresult1034, "++(1)", [1], string1035);
      // call case 2: outer request
      var call1028 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1036);
      setLineNumber(618);    // compilenode string
      var string1038 = new GraceString("    raiseTypeArgError(\"");
      // call case 6: other requests
      var call1039 = request(var_o, "canonicalName", [0]);
      var opresult1040 = request(string1038, "++(1)", [1], call1039);
      var string1041 = new GraceString("\", ");
      var opresult1042 = request(opresult1040, "++(1)", [1], string1041);
      if (var_ntp === undefined) raiseUninitializedVariable("ntp");
      var opresult1043 = request(opresult1042, "++(1)", [1], var_ntp);
      var string1044 = new GraceString(", numArgs - ");
      var opresult1045 = request(opresult1043, "++(1)", [1], string1044);
      if (var_np === undefined) raiseUninitializedVariable("np");
      var opresult1046 = request(opresult1045, "++(1)", [1], var_np);
      var string1047 = new GraceString(");");
      var opresult1048 = request(opresult1046, "++(1)", [1], string1047);
      // call case 2: outer request
      var call1037 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1048);
      setLineNumber(619);    // compilenode string
      var string1050 = new GraceString("}");
      // call case 2: outer request
      var call1049 = selfRequest(importedModules["genjs"], "out(1)", [1], string1050);
      if1008 = call1049;
    }
    return if1008;
  };    // end of method compileDefaultsForTypeParameters(_)extraParams(_)
  this.methods["compileDefaultsForTypeParameters(1)extraParams(1)"] = func991;
  func991.methodName = "compileDefaultsForTypeParameters(1)extraParams(1)";
  func991.paramCounts = [1, 1];
  func991.paramNames = ["o", "extra"];
  func991.definitionLine = 602;
  func991.definitionModule = "genjs";
  var func1051 = function(argcv, var_o) {    // method compileArgumentTypeChecks(_), line 623
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileArgumentTypeChecks(_)", 0, numArgs - 1);
    }
    var if1052 = GraceDone;
    setLineNumber(624);    // compilenode member
    // call case 6: other requests
    if (var_emitTypeChecks === undefined) raiseUninitializedVariable("emitTypeChecks");
    var call1053 = request(var_emitTypeChecks, "not", [0]);
    if (Grace_isTrue(call1053)) {
      return var_done;
    }
    var if1054 = GraceDone;
    setLineNumber(625);    // compilenode member
    // call case 6: other requests
    var call1055 = request(var_o, "numParams", [0]);
    var opresult1056 = request(call1055, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult1056)) {
      setLineNumber(626);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1060 = request(var_o, "signature", [0]);
      var call1059 = request(call1060, "first", [0]);
      var call1058 = request(call1059, "params", [0]);
      var call1057 = request(call1058, "first", [0]);
      var var_p = call1057;
      setLineNumber(627);    // compilenode member
      // call case 6: other requests
      if (var_p === undefined) raiseUninitializedVariable("p");
      var call1061 = request(var_p, "value", [0]);
      var var_pName = call1061;
      setLineNumber(628);    // compilenode call
      if (var_pName === undefined) raiseUninitializedVariable("pName");
      // call case 2: outer request
      var call1063 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_pName);
      setLineNumber(629);    // compilenode string
      var string1064 = new GraceString("argument to request of `");
      // call case 6: other requests
      var call1065 = request(var_o, "canonicalName", [0]);
      var opresult1066 = request(string1064, "++(1)", [1], call1065);
      var string1067 = new GraceString("`");
      var opresult1068 = request(opresult1066, "++(1)", [1], string1067);
      setLineNumber(630);    // compilenode member
      // call case 6: other requests
      if (var_p === undefined) raiseUninitializedVariable("p");
      var call1069 = request(var_p, "dtype", [0]);
      // call case 2: outer request
      var call1062 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], call1063, opresult1068, call1069, new GraceNum(0));
      if1054 = call1062;
    } else {
      setLineNumber(632);    // compilenode num
      var var_paramnr = new GraceNum(0);
      setLineNumber(633);    // compilenode block
      var block1071 = new GraceBlock(this, 633, 1);
      block1071.guard = jsTrue;
      block1071.real = function block1071(var_p) {
        setLineNumber(634);    // compilenode op
        if (var_paramnr === undefined) raiseUninitializedVariable("paramnr");
        var sum1072 = request(var_paramnr, "+(1)", [1], new GraceNum(1));
        var_paramnr = sum1072;
        setLineNumber(635);    // compilenode member
        // call case 6: other requests
        var call1073 = request(var_p, "value", [0]);
        var var_pName = call1073;
        setLineNumber(636);    // compilenode call
        if (var_pName === undefined) raiseUninitializedVariable("pName");
        // call case 2: outer request
        var call1075 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_pName);
        setLineNumber(637);    // compilenode string
        var string1076 = new GraceString("argument ");
        if (var_paramnr === undefined) raiseUninitializedVariable("paramnr");
        var opresult1077 = request(string1076, "++(1)", [1], var_paramnr);
        var string1078 = new GraceString(" in request of `");
        var opresult1079 = request(opresult1077, "++(1)", [1], string1078);
        // call case 6: other requests
        var call1080 = request(var_o, "canonicalName", [0]);
        var opresult1081 = request(opresult1079, "++(1)", [1], call1080);
        var string1082 = new GraceString("`");
        var opresult1083 = request(opresult1081, "++(1)", [1], string1082);
        setLineNumber(638);    // compilenode member
        // call case 6: other requests
        var call1084 = request(var_p, "dtype", [0]);
        // call case 2: outer request
        var call1074 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], call1075, opresult1083, call1084, new GraceNum(0));
        return call1074;
      };
      let applyMeth1071 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1071.methodName = "apply(1)";
      applyMeth1071.paramCounts = [1];
      applyMeth1071.paramNames = ["p"];
      applyMeth1071.definitionLine = 633;
      applyMeth1071.definitionModule = "genjs";
      block1071.methods["apply(1)"] = applyMeth1071;
      let matchesMeth1071 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1071.methodName = "matches(1)";
      matchesMeth1071.paramCounts = [1];
      matchesMeth1071.paramNames = ["p"];
      matchesMeth1071.definitionLine = 633;
      matchesMeth1071.definitionModule = "genjs";
      block1071.methods["matches(1)"] = matchesMeth1071;
      // call case 6: other requests
      var call1070 = request(var_o, "parametersDo(1)", [1], block1071);
      if1054 = call1070;
    }
    return if1054;
  };    // end of method compileArgumentTypeChecks(_)
  this.methods["compileArgumentTypeChecks(1)"] = func1051;
  func1051.methodName = "compileArgumentTypeChecks(1)";
  func1051.paramCounts = [1];
  func1051.paramNames = ["o"];
  func1051.definitionLine = 623;
  func1051.definitionModule = "genjs";
  var func1085 = function(argcv) {    // method debugModePrefix, line 644
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("debugModePrefix", 0, numArgs - 0);
    }
    var if1086 = GraceDone;
    setLineNumber(645);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(646);    // compilenode string
      var string1088 = new GraceString("stackFrames.push(myframe);");
      // call case 2: outer request
      var call1087 = selfRequest(importedModules["genjs"], "out(1)", [1], string1088);
      setLineNumber(647);    // compilenode string
      var string1090 = new GraceString("try {");
      // call case 2: outer request
      var call1089 = selfRequest(importedModules["genjs"], "out(1)", [1], string1090);
      setLineNumber(648);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1091 = selfRequest(this, "increaseindent", [0]);
      if1086 = call1091;
    }
    return if1086;
  };    // end of method debugModePrefix
  this.methods["debugModePrefix"] = func1085;
  func1085.methodName = "debugModePrefix";
  func1085.paramCounts = [0];
  func1085.paramNames = [];
  func1085.definitionLine = 644;
  func1085.definitionModule = "genjs";
  var func1092 = function(argcv) {    // method debugModeSuffix, line 651
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("debugModeSuffix", 0, numArgs - 0);
    }
    var if1093 = GraceDone;
    setLineNumber(652);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(653);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1094 = selfRequest(this, "decreaseindent", [0]);
      setLineNumber(654);    // compilenode string
      var string1096 = new GraceString("} finally {");
      // call case 2: outer request
      var call1095 = selfRequest(importedModules["genjs"], "out(1)", [1], string1096);
      setLineNumber(655);    // compilenode string
      var string1098 = new GraceString("    stackFrames.pop();");
      // call case 2: outer request
      var call1097 = selfRequest(importedModules["genjs"], "out(1)", [1], string1098);
      setLineNumber(656);    // compilenode string
      var string1100 = new GraceString("}");
      // call case 2: outer request
      var call1099 = selfRequest(importedModules["genjs"], "out(1)", [1], string1100);
      if1093 = call1099;
    }
    return if1093;
  };    // end of method debugModeSuffix
  this.methods["debugModeSuffix"] = func1092;
  func1092.methodName = "debugModeSuffix";
  func1092.paramCounts = [0];
  func1092.paramNames = [];
  func1092.definitionLine = 651;
  func1092.definitionModule = "genjs";
  var func1101 = function(argcv, var_o) {    // method compileMethodBodyWithTypecheck(_), line 659
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileMethodBodyWithTypecheck(_)", 0, numArgs - 1);
    }
    setLineNumber(660);    // compilenode call
    // call case 2: outer request
    var call1102 = selfRequest(importedModules["genjs"], "compileMethodBody(1)", [1], var_o);
    var var_ret = call1102;
    var if1103 = GraceDone;
    setLineNumber(661);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1105 = request(var_o, "body", [0]);
    var call1104 = request(call1105, "isEmpty", [0]);
    if (Grace_isTrue(call1104)) {
      // call case 6: other requests
      // call case 6: other requests
      var call1107 = request(var_o, "end", [0]);
      var call1106 = request(call1107, "line", [0]);
      if1103 = call1106;
    } else {
      // call case 6: other requests
      // call case 6: other requests
      var call1109 = request(var_o, "resultExpression", [0]);
      var call1108 = request(call1109, "line", [0]);
      if1103 = call1108;
    }
    var var_ln = if1103;
    setLineNumber(662);    // compilenode string
    var string1111 = new GraceString("result of method ");
    // call case 6: other requests
    var call1112 = request(var_o, "canonicalName", [0]);
    var opresult1113 = request(string1111, "++(1)", [1], call1112);
    var string1114 = new GraceString("");
    var opresult1115 = request(opresult1113, "++(1)", [1], string1114);
    setLineNumber(663);    // compilenode member
    // call case 6: other requests
    var call1116 = request(var_o, "dtype", [0]);
    // call case 2: outer request
    var call1110 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_ret, opresult1115, call1116, var_ln);
    return var_ret;
  };    // end of method compileMethodBodyWithTypecheck(_)
  this.methods["compileMethodBodyWithTypecheck(1)"] = func1101;
  func1101.methodName = "compileMethodBodyWithTypecheck(1)";
  func1101.paramCounts = [1];
  func1101.paramNames = ["o"];
  func1101.definitionLine = 659;
  func1101.definitionModule = "genjs";
  var func1117 = function(argcv, var_o, var_outerRef) {    // method compileFreshMethod(_,_), line 667
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileFreshMethod(_,_)", 0, numArgs - 2);
    }
    setLineNumber(678);    // compilenode member
    // call case 6: other requests
    var call1118 = request(var_o, "resultExpression", [0]);
    var var_resultExpr = call1118;
    var if1119 = GraceDone;
    setLineNumber(679);    // compilenode member
    // call case 6: other requests
    var call1120 = request(var_resultExpr, "isObject", [0]);
    if (Grace_isTrue(call1120)) {
      setLineNumber(680);    // compilenode call
      if (var_resultExpr === undefined) raiseUninitializedVariable("resultExpr");
      // call case 2: outer request
      var call1121 = selfRequest(importedModules["genjs"], "compileBuildMethodFor(1)withObjCon(1)inside(1)", [1, 1, 1], var_o, var_resultExpr, var_outerRef);
      if1119 = call1121;
    } else {
      setLineNumber(682);    // compilenode call
      if (var_resultExpr === undefined) raiseUninitializedVariable("resultExpr");
      // call case 2: outer request
      var call1122 = selfRequest(importedModules["genjs"], "compileBuildMethodFor(1)withFreshCall(1)inside(1)", [1, 1, 1], var_o, var_resultExpr, var_outerRef);
      if1119 = call1122;
    }
    setLineNumber(684);    // compilenode string
    var string1123 = new GraceString("GraceDone");
    return string1123;
  };    // end of method compileFreshMethod(_,_)
  this.methods["compileFreshMethod(2)"] = func1117;
  func1117.methodName = "compileFreshMethod(2)";
  func1117.paramCounts = [2];
  func1117.paramNames = ["o", "outerRef"];
  func1117.definitionLine = 667;
  func1117.definitionModule = "genjs";
  var func1124 = function(argcv, var_methNode) {    // method compileMethodBody(_), line 687
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileMethodBody(_)", 0, numArgs - 1);
    }
    setLineNumber(691);    // compilenode string
    var string1125 = new GraceString("GraceDone");
    var var_ret = string1125;
    setLineNumber(692);    // compilenode block
    var block1127 = new GraceBlock(this, 692, 1);
    block1127.guard = jsTrue;
    block1127.real = function block1127(var_nd) {
      setLineNumber(692);    // compilenode call
      // call case 2: outer request
      var call1128 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_nd);
      var_ret = call1128;
      return GraceDone;
    };
    let applyMeth1127 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1127.methodName = "apply(1)";
    applyMeth1127.paramCounts = [1];
    applyMeth1127.paramNames = ["nd"];
    applyMeth1127.definitionLine = 692;
    applyMeth1127.definitionModule = "genjs";
    block1127.methods["apply(1)"] = applyMeth1127;
    let matchesMeth1127 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1127.methodName = "matches(1)";
    matchesMeth1127.paramCounts = [1];
    matchesMeth1127.paramNames = ["nd"];
    matchesMeth1127.definitionLine = 692;
    matchesMeth1127.definitionModule = "genjs";
    block1127.methods["matches(1)"] = matchesMeth1127;
    // call case 6: other requests
    // call case 6: other requests
    var call1129 = request(var_methNode, "body", [0]);
    var call1126 = request(call1129, "do(1)", [1], block1127);
    return var_ret;
  };    // end of method compileMethodBody(_)
  this.methods["compileMethodBody(1)"] = func1124;
  func1124.methodName = "compileMethodBody(1)";
  func1124.paramCounts = [1];
  func1124.paramNames = ["methNode"];
  func1124.definitionLine = 687;
  func1124.definitionModule = "genjs";
  var func1130 = function(argcv, var_methNode) {    // method compileMethodBodyWithoutLast(_), line 696
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileMethodBodyWithoutLast(_)", 0, numArgs - 1);
    }
    setLineNumber(697);    // compilenode member
    // call case 6: other requests
    var call1131 = request(var_methNode, "body", [0]);
    var var_body = call1131;
    var if1132 = GraceDone;
    setLineNumber(698);    // compilenode member
    // call case 6: other requests
    var call1133 = request(var_body, "size", [0]);
    var opresult1134 = request(call1133, ">(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult1134)) {
      setLineNumber(699);    // compilenode member
      // call case 6: other requests
      if (var_body === undefined) raiseUninitializedVariable("body");
      var call1135 = request(var_body, "removeLast", [0]);
      var var_resultExpr = call1135;
      setLineNumber(700);    // compilenode call
      // call case 2: outer request
      var call1136 = selfRequest(importedModules["genjs"], "compileMethodBody(1)", [1], var_methNode);
      setLineNumber(701);    // compilenode call
      if (var_resultExpr === undefined) raiseUninitializedVariable("resultExpr");
      // call case 6: other requests
      if (var_body === undefined) raiseUninitializedVariable("body");
      var call1137 = request(var_body, "addLast(1)", [1], var_resultExpr);
      if1132 = call1137;
    }
    return if1132;
  };    // end of method compileMethodBodyWithoutLast(_)
  this.methods["compileMethodBodyWithoutLast(1)"] = func1130;
  func1130.methodName = "compileMethodBodyWithoutLast(1)";
  func1130.paramCounts = [1];
  func1130.paramNames = ["methNode"];
  func1130.definitionLine = 696;
  func1130.definitionModule = "genjs";
  var func1138 = function(argcv, var_strs) {    // method stringList(_), line 705
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("stringList(_)", 0, numArgs - 1);
    }
    setLineNumber(708);    // compilenode string
    var string1139 = new GraceString("[");
    var var_res = string1139;
    setLineNumber(709);    // compilenode block
    var block1141 = new GraceBlock(this, 709, 1);
    block1141.guard = jsTrue;
    block1141.real = function block1141(var_s) {
      setLineNumber(709);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string1142 = new GraceString("\"");
      var opresult1143 = request(var_res, "++(1)", [1], string1142);
      // call case 6: other requests
      var call1144 = request(var_s, "quoted", [0]);
      var opresult1145 = request(opresult1143, "++(1)", [1], call1144);
      var string1146 = new GraceString("\"");
      var opresult1147 = request(opresult1145, "++(1)", [1], string1146);
      var_res = opresult1147;
      return GraceDone;
    };
    let applyMeth1141 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1141.methodName = "apply(1)";
    applyMeth1141.paramCounts = [1];
    applyMeth1141.paramNames = ["s"];
    applyMeth1141.definitionLine = 709;
    applyMeth1141.definitionModule = "genjs";
    block1141.methods["apply(1)"] = applyMeth1141;
    let matchesMeth1141 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1141.methodName = "matches(1)";
    matchesMeth1141.paramCounts = [1];
    matchesMeth1141.paramNames = ["s"];
    matchesMeth1141.definitionLine = 709;
    matchesMeth1141.definitionModule = "genjs";
    block1141.methods["matches(1)"] = matchesMeth1141;
    setLineNumber(710);    // compilenode block
    var block1148 = new GraceBlock(this, 710, 0);
    block1148.guard = jsTrue;
    block1148.real = function block1148() {
      setLineNumber(710);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string1149 = new GraceString(", ");
      var opresult1150 = request(var_res, "++(1)", [1], string1149);
      var_res = opresult1150;
      return GraceDone;
    };
    let applyMeth1148 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1148.methodName = "apply";
    applyMeth1148.paramCounts = [0];
    applyMeth1148.paramNames = [];
    applyMeth1148.definitionLine = 710;
    applyMeth1148.definitionModule = "genjs";
    block1148.methods["apply"] = applyMeth1148;
    // call case 6: other requests
    var call1140 = request(var_strs, "do(1)separatedBy(1)", [1, 1], block1141, block1148);
    setLineNumber(711);    // compilenode string
    var string1151 = new GraceString("]");
    var opresult1152 = request(var_res, "++(1)", [1], string1151);
    return opresult1152;
  };    // end of method stringList(_)
  this.methods["stringList(1)"] = func1138;
  func1138.methodName = "stringList(1)";
  func1138.paramCounts = [1];
  func1138.paramNames = ["strs"];
  func1138.definitionLine = 705;
  func1138.definitionModule = "genjs";
  var func1153 = function(argcv, var_lits) {    // method literalList(_), line 714
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("literalList(_)", 0, numArgs - 1);
    }
    setLineNumber(716);    // compilenode string
    var string1154 = new GraceString("[");
    var var_res = string1154;
    setLineNumber(717);    // compilenode block
    var block1156 = new GraceBlock(this, 717, 1);
    block1156.guard = jsTrue;
    block1156.real = function block1156(var_n) {
      setLineNumber(717);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      // call case 6: other requests
      var call1157 = request(var_n, "asString", [0]);
      var opresult1158 = request(var_res, "++(1)", [1], call1157);
      var_res = opresult1158;
      return GraceDone;
    };
    let applyMeth1156 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1156.methodName = "apply(1)";
    applyMeth1156.paramCounts = [1];
    applyMeth1156.paramNames = ["n"];
    applyMeth1156.definitionLine = 717;
    applyMeth1156.definitionModule = "genjs";
    block1156.methods["apply(1)"] = applyMeth1156;
    let matchesMeth1156 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1156.methodName = "matches(1)";
    matchesMeth1156.paramCounts = [1];
    matchesMeth1156.paramNames = ["n"];
    matchesMeth1156.definitionLine = 717;
    matchesMeth1156.definitionModule = "genjs";
    block1156.methods["matches(1)"] = matchesMeth1156;
    setLineNumber(718);    // compilenode block
    var block1159 = new GraceBlock(this, 718, 0);
    block1159.guard = jsTrue;
    block1159.real = function block1159() {
      setLineNumber(718);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string1160 = new GraceString(", ");
      var opresult1161 = request(var_res, "++(1)", [1], string1160);
      var_res = opresult1161;
      return GraceDone;
    };
    let applyMeth1159 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1159.methodName = "apply";
    applyMeth1159.paramCounts = [0];
    applyMeth1159.paramNames = [];
    applyMeth1159.definitionLine = 718;
    applyMeth1159.definitionModule = "genjs";
    block1159.methods["apply"] = applyMeth1159;
    // call case 6: other requests
    var call1155 = request(var_lits, "do(1)separatedBy(1)", [1, 1], block1156, block1159);
    setLineNumber(719);    // compilenode string
    var string1162 = new GraceString("]");
    var opresult1163 = request(var_res, "++(1)", [1], string1162);
    return opresult1163;
  };    // end of method literalList(_)
  this.methods["literalList(1)"] = func1153;
  func1153.methodName = "literalList(1)";
  func1153.paramCounts = [1];
  func1153.paramNames = ["lits"];
  func1153.definitionLine = 714;
  func1153.definitionModule = "genjs";
  var func1164 = function(argcv, var_o, var_funcName, var_name) {    // method compileMetadata(_,_,_), line 722
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileMetadata(_,_,_)", 0, numArgs - 3);
    }
    setLineNumber(723);    // compilenode string
    var string1166 = new GraceString("");
    var opresult1167 = request(string1166, "++(1)", [1], var_funcName);
    var string1168 = new GraceString(".methodName = \"");
    var opresult1169 = request(opresult1167, "++(1)", [1], string1168);
    var opresult1170 = request(opresult1169, "++(1)", [1], var_name);
    var string1171 = new GraceString("\";");
    var opresult1172 = request(opresult1170, "++(1)", [1], string1171);
    // call case 2: outer request
    var call1165 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1172);
    setLineNumber(724);    // compilenode string
    var string1174 = new GraceString("");
    var opresult1175 = request(string1174, "++(1)", [1], var_funcName);
    var string1176 = new GraceString(".paramCounts = ");
    var opresult1177 = request(opresult1175, "++(1)", [1], string1176);
    // call case 6: other requests
    var call1179 = request(var_o, "parameterCounts", [0]);
    // call case 2: outer request
    var call1178 = selfRequest(importedModules["genjs"], "literalList(1)", [1], call1179);
    var opresult1180 = request(opresult1177, "++(1)", [1], call1178);
    var string1181 = new GraceString(";");
    var opresult1182 = request(opresult1180, "++(1)", [1], string1181);
    // call case 2: outer request
    var call1173 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1182);
    setLineNumber(725);    // compilenode string
    var string1184 = new GraceString("");
    var opresult1185 = request(string1184, "++(1)", [1], var_funcName);
    var string1186 = new GraceString(".paramNames = ");
    var opresult1187 = request(opresult1185, "++(1)", [1], string1186);
    // call case 6: other requests
    var call1189 = request(var_o, "parameterNames", [0]);
    // call case 2: outer request
    var call1188 = selfRequest(importedModules["genjs"], "stringList(1)", [1], call1189);
    var opresult1190 = request(opresult1187, "++(1)", [1], call1188);
    var string1191 = new GraceString(";");
    var opresult1192 = request(opresult1190, "++(1)", [1], string1191);
    // call case 2: outer request
    var call1183 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1192);
    var if1193 = GraceDone;
    setLineNumber(726);    // compilenode member
    // call case 6: other requests
    var call1194 = request(var_o, "hasTypeParams", [0]);
    if (Grace_isTrue(call1194)) {
      setLineNumber(727);    // compilenode string
      var string1196 = new GraceString("");
      var opresult1197 = request(string1196, "++(1)", [1], var_funcName);
      var string1198 = new GraceString(".typeParamNames = ");
      var opresult1199 = request(opresult1197, "++(1)", [1], string1198);
      // call case 6: other requests
      var call1201 = request(var_o, "typeParameterNames", [0]);
      // call case 2: outer request
      var call1200 = selfRequest(importedModules["genjs"], "stringList(1)", [1], call1201);
      var opresult1202 = request(opresult1199, "++(1)", [1], call1200);
      var string1203 = new GraceString(";");
      var opresult1204 = request(opresult1202, "++(1)", [1], string1203);
      // call case 2: outer request
      var call1195 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1204);
      if1193 = call1195;
    }
    setLineNumber(729);    // compilenode string
    var string1206 = new GraceString("");
    var opresult1207 = request(string1206, "++(1)", [1], var_funcName);
    var string1208 = new GraceString(".definitionLine = ");
    var opresult1209 = request(opresult1207, "++(1)", [1], string1208);
    // call case 6: other requests
    var call1210 = request(var_o, "line", [0]);
    var opresult1211 = request(opresult1209, "++(1)", [1], call1210);
    var string1212 = new GraceString(";");
    var opresult1213 = request(opresult1211, "++(1)", [1], string1212);
    // call case 2: outer request
    var call1205 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1213);
    setLineNumber(730);    // compilenode string
    var string1215 = new GraceString("");
    var opresult1216 = request(string1215, "++(1)", [1], var_funcName);
    var string1217 = new GraceString(".definitionModule = ");
    var opresult1218 = request(opresult1216, "++(1)", [1], string1217);
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult1219 = request(opresult1218, "++(1)", [1], var_modNameAsString);
    var string1220 = new GraceString(";");
    var opresult1221 = request(opresult1219, "++(1)", [1], string1220);
    // call case 2: outer request
    var call1214 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1221);
    return call1214;
  };    // end of method compileMetadata(_,_,_)
  this.methods["compileMetadata(3)"] = func1164;
  func1164.methodName = "compileMetadata(3)";
  func1164.paramCounts = [3];
  func1164.paramNames = ["o", "funcName", "name"];
  func1164.definitionLine = 722;
  func1164.definitionModule = "genjs";
  var func1222 = function(argcv, var_o, var_objref) {    // method compilemethodnode(_)in(_), line 733
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compilemethodnode(_)in(_)", 0, numArgs - 2);
    }
    setLineNumber(734);    // compilenode defdec
    if (var_usedvars === undefined) raiseUninitializedVariable("usedvars");
    var var_oldusedvars = var_usedvars;
    setLineNumber(735);    // compilenode defdec
    if (var_declaredvars === undefined) raiseUninitializedVariable("declaredvars");
    var var_olddeclaredvars = var_declaredvars;
    setLineNumber(736);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1223 = selfRequest(this, "saveInitializedVars", [0]);
    var var_oldInitializedVars = call1223;
    setLineNumber(737);    // compilenode member
    // call case 6: other requests
    var call1225 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call1224 = selfRequest(importedModules["genjs"], "clearLineNumber(1)", [1], call1225);
    setLineNumber(738);    // compilenode string
    var string1228 = new GraceString("func");
    // call case 2: outer request
    var call1227 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string1228);
    // call case 6: other requests
    var call1226 = request(var_o, "register:=(1)", [1], call1227);
    var if1229 = GraceDone;
    setLineNumber(739);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1231 = request(var_o, "body", [0]);
    var call1230 = request(call1231, "size", [0]);
    var opresult1232 = request(call1230, "==(1)", [1], new GraceNum(1));
    setLineNumber(740);    // compilenode block
    var block1233 = new GraceBlock(this, 740, 0);
    block1233.guard = jsTrue;
    block1233.real = function block1233() {
      setLineNumber(740);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1236 = request(var_o, "body", [0]);
      var call1235 = request(call1236, "first", [0]);
      var call1234 = request(call1235, "isIdentifier", [0]);
      return call1234;
    };
    let applyMeth1233 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1233.methodName = "apply";
    applyMeth1233.paramCounts = [0];
    applyMeth1233.paramNames = [];
    applyMeth1233.definitionLine = 740;
    applyMeth1233.definitionModule = "genjs";
    block1233.methods["apply"] = applyMeth1233;
    var opresult1237 = request(opresult1232, "&&(1)", [1], block1233);
    var block1238 = new GraceBlock(this, 740, 0);
    block1238.guard = jsTrue;
    block1238.real = function block1238() {
      setLineNumber(740);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1240 = request(var_o, "hasTypeParams", [0]);
      var call1239 = request(call1240, "not", [0]);
      return call1239;
    };
    let applyMeth1238 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1238.methodName = "apply";
    applyMeth1238.paramCounts = [0];
    applyMeth1238.paramNames = [];
    applyMeth1238.definitionLine = 740;
    applyMeth1238.definitionModule = "genjs";
    block1238.methods["apply"] = applyMeth1238;
    var opresult1241 = request(opresult1237, "&&(1)", [1], block1238);
    if (Grace_isTrue(opresult1241)) {
      setLineNumber(741);    // compilenode call
      // call case 2: outer request
      var call1242 = selfRequest(importedModules["genjs"], "compileSimpleAccessor(1)", [1], var_o);
      if1229 = call1242;
    } else {
      var if1243 = GraceDone;
      setLineNumber(742);    // compilenode member
      // call case 6: other requests
      var call1244 = request(var_o, "isAbstract", [0]);
      if (Grace_isTrue(call1244)) {
        setLineNumber(743);    // compilenode string
        var string1246 = new GraceString("abstract");
        // call case 2: outer request
        var call1245 = selfRequest(importedModules["genjs"], "compileDummyMethod(3)", [3], var_o, var_objref, string1246);
        if1243 = call1245;
      } else {
        var if1247 = GraceDone;
        setLineNumber(744);    // compilenode member
        // call case 6: other requests
        var call1248 = request(var_o, "isRequired", [0]);
        if (Grace_isTrue(call1248)) {
          setLineNumber(745);    // compilenode string
          var string1250 = new GraceString("required");
          // call case 2: outer request
          var call1249 = selfRequest(importedModules["genjs"], "compileDummyMethod(3)", [3], var_o, var_objref, string1250);
          if1247 = call1249;
        } else {
          setLineNumber(747);    // compilenode call
          // call case 2: outer request
          var call1251 = selfRequest(importedModules["genjs"], "compileNormalMethod(2)", [2], var_o, var_objref);
          if1247 = call1251;
        }
        if1243 = if1247;
      }
      if1229 = if1243;
    }
    setLineNumber(749);    // compilenode bind
    var_usedvars = var_oldusedvars;
    setLineNumber(750);    // compilenode bind
    var_declaredvars = var_olddeclaredvars;
    setLineNumber(751);    // compilenode call
    // call case 2: outer request
    var call1252 = selfRequest(importedModules["genjs"], "restoreInitializedVars(1)", [1], var_oldInitializedVars);
    return call1252;
  };    // end of method compilemethodnode(_)in(_)
  this.methods["compilemethodnode(1)in(1)"] = func1222;
  func1222.methodName = "compilemethodnode(1)in(1)";
  func1222.paramCounts = [1, 1];
  func1222.paramNames = ["o", "objref"];
  func1222.definitionLine = 733;
  func1222.definitionModule = "genjs";
  var func1253 = function(argcv, var_o) {    // method compileSimpleAccessor(_), line 754
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileSimpleAccessor(_)", 0, numArgs - 1);
    }
    setLineNumber(755);    // compilenode defdec
    if (var_emitPositions === undefined) raiseUninitializedVariable("emitPositions");
    var var_oldEmitPositions = var_emitPositions;
    setLineNumber(756);    // compilenode bind
    var_emitPositions = GraceFalse;
    setLineNumber(757);    // compilenode member
    // call case 6: other requests
    var call1254 = request(var_o, "canonicalName", [0]);
    var var_canonicalMethName = call1254;
    setLineNumber(758);    // compilenode member
    // call case 6: other requests
    var call1255 = request(var_o, "register", [0]);
    var var_funcName = call1255;
    setLineNumber(759);    // compilenode member
    // call case 6: other requests
    var call1257 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call1256 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call1257);
    var var_name = call1256;
    setLineNumber(760);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1259 = request(var_o, "body", [0]);
    var call1258 = request(call1259, "first", [0]);
    var var_ident = call1258;
    setLineNumber(761);    // compilenode call
    // call case 2: outer request
    var call1260 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_o);
    // call case 2: outer request
    var call1261 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_o);
    var opresult1262 = request(call1260, "++(1)", [1], call1261);
    var var_p = opresult1262;
    setLineNumber(762);    // compilenode string
    var string1264 = new GraceString("var ");
    var opresult1265 = request(string1264, "++(1)", [1], var_funcName);
    var string1266 = new GraceString(" = function(argcv");
    var opresult1267 = request(opresult1265, "++(1)", [1], string1266);
    var opresult1268 = request(opresult1267, "++(1)", [1], var_p);
    var string1269 = new GraceString(") {     // accessor method ");
    var opresult1270 = request(opresult1268, "++(1)", [1], string1269);
    var opresult1271 = request(opresult1270, "++(1)", [1], var_canonicalMethName);
    var string1272 = new GraceString("");
    var opresult1273 = request(opresult1271, "++(1)", [1], string1272);
    // call case 2: outer request
    var call1263 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1273);
    setLineNumber(763);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1274 = selfRequest(this, "increaseindent", [0]);
    var if1275 = GraceDone;
    setLineNumber(764);    // compilenode if
    if (var_emitArgChecks === undefined) raiseUninitializedVariable("emitArgChecks");
    if (Grace_isTrue(var_emitArgChecks)) {
      setLineNumber(765);    // compilenode string
      var string1277 = new GraceString("const numArgs = arguments.length - 1;");
      // call case 2: outer request
      var call1276 = selfRequest(importedModules["genjs"], "out(1)", [1], string1277);
      setLineNumber(766);    // compilenode member
      // call case 6: other requests
      var call1278 = request(var_o, "numParams", [0]);
      var var_np = call1278;
      setLineNumber(767);    // compilenode string
      var string1280 = new GraceString("if (numArgs > ");
      if (var_np === undefined) raiseUninitializedVariable("np");
      var opresult1281 = request(string1280, "++(1)", [1], var_np);
      var string1282 = new GraceString(") raiseTypeArgError(\"");
      var opresult1283 = request(opresult1281, "++(1)", [1], string1282);
      if (var_canonicalMethName === undefined) raiseUninitializedVariable("canonicalMethName");
      var opresult1284 = request(opresult1283, "++(1)", [1], var_canonicalMethName);
      var string1285 = new GraceString("\", 0, numArgs - ");
      var opresult1286 = request(opresult1284, "++(1)", [1], string1285);
      if (var_np === undefined) raiseUninitializedVariable("np");
      var opresult1287 = request(opresult1286, "++(1)", [1], var_np);
      var string1288 = new GraceString(");");
      var opresult1289 = request(opresult1287, "++(1)", [1], string1288);
      // call case 2: outer request
      var call1279 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1289);
      if1275 = call1279;
    }
    setLineNumber(769);    // compilenode string
    var string1291 = new GraceString("return ");
    // call case 2: outer request
    var call1292 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_ident);
    var opresult1293 = request(string1291, "++(1)", [1], call1292);
    var string1294 = new GraceString(";");
    var opresult1295 = request(opresult1293, "++(1)", [1], string1294);
    // call case 2: outer request
    var call1290 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1295);
    setLineNumber(770);    // compilenode call
    // call case 2: outer request
    var call1296 = selfRequest(importedModules["genjs"], "compileMethodPostamble(3)", [3], var_o, var_funcName, var_canonicalMethName);
    setLineNumber(771);    // compilenode string
    var string1298 = new GraceString("this.methods[\"");
    var opresult1299 = request(string1298, "++(1)", [1], var_name);
    var string1300 = new GraceString("\"] = ");
    var opresult1301 = request(opresult1299, "++(1)", [1], string1300);
    var opresult1302 = request(opresult1301, "++(1)", [1], var_funcName);
    var string1303 = new GraceString(";");
    var opresult1304 = request(opresult1302, "++(1)", [1], string1303);
    // call case 2: outer request
    var call1297 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1304);
    setLineNumber(772);    // compilenode call
    // call case 2: outer request
    var call1305 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_funcName, var_name);
    setLineNumber(773);    // compilenode bind
    var_emitPositions = var_oldEmitPositions;
    return GraceDone;
  };    // end of method compileSimpleAccessor(_)
  this.methods["compileSimpleAccessor(1)"] = func1253;
  func1253.methodName = "compileSimpleAccessor(1)";
  func1253.paramCounts = [1];
  func1253.paramNames = ["o"];
  func1253.definitionLine = 754;
  func1253.definitionModule = "genjs";
  var func1306 = function(argcv, var_o, var_selfobj) {    // method compileNormalMethod(_,_), line 776
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileNormalMethod(_,_)", 0, numArgs - 2);
    }
    setLineNumber(777);    // compilenode member
    // call case 6: other requests
    var call1307 = request(var_o, "canonicalName", [0]);
    var var_canonicalMethName = call1307;
    setLineNumber(778);    // compilenode member
    // call case 6: other requests
    var call1308 = request(var_o, "register", [0]);
    var var_funcName = call1308;
    setLineNumber(779);    // compilenode num
    var_priorLineEmitted = new GraceNum(0);
    setLineNumber(780);    // compilenode array
    var array1310 = new GraceSequence([]);
    // call case 2: outer request
    var call1309 = selfRequest(var_prelude, "list(1)", [1], array1310);
    var_usedvars = call1309;
    setLineNumber(781);    // compilenode array
    var array1312 = new GraceSequence([]);
    // call case 2: outer request
    var call1311 = selfRequest(var_prelude, "list(1)", [1], array1312);
    var_declaredvars = call1311;
    setLineNumber(782);    // compilenode member
    // call case 6: other requests
    var call1314 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call1313 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call1314);
    var var_name = call1313;
    setLineNumber(784);    // compilenode call
    // call case 2: outer request
    var call1316 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_o);
    // call case 2: outer request
    var call1317 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_o);
    var opresult1318 = request(call1316, "++(1)", [1], call1317);
    // call case 2: outer request
    var call1315 = selfRequest(importedModules["genjs"], "compileMethodPreamble(3)withParams(1)", [3, 1], var_o, var_funcName, var_canonicalMethName, opresult1318);
    setLineNumber(785);    // compilenode call
    // call case 2: outer request
    var call1319 = selfRequest(importedModules["genjs"], "compileParameterDebugFrame(2)", [2], var_o, var_name);
    var if1320 = GraceDone;
    setLineNumber(786);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1322 = request(var_o, "isOnceMethod", [0]);
    var call1321 = request(call1322, "not", [0]);
    if (Grace_isTrue(call1321)) {
      setLineNumber(788);    // compilenode num
      // call case 2: outer request
      var call1323 = selfRequest(importedModules["genjs"], "compileDefaultsForTypeParameters(1)extraParams(1)", [1, 1], var_o, new GraceNum(0));
      if1320 = call1323;
    }
    setLineNumber(790);    // compilenode call
    // call case 2: outer request
    var call1324 = selfRequest(importedModules["genjs"], "compileArgumentTypeChecks(1)", [1], var_o);
    setLineNumber(791);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1325 = selfRequest(this, "debugModePrefix", [0]);
    var if1326 = GraceDone;
    setLineNumber(792);    // compilenode member
    // call case 6: other requests
    var call1327 = request(var_o, "isFresh", [0]);
    if (Grace_isTrue(call1327)) {
      setLineNumber(793);    // compilenode call
      // call case 2: outer request
      var call1328 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_o);
      var var_argList = call1328;
      setLineNumber(794);    // compilenode call
      // call case 2: outer request
      var call1329 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_o);
      var var_typeArgList = call1329;
      setLineNumber(795);    // compilenode string
      var string1331 = new GraceString("var ouc = emptyGraceObject(\"");
      // call case 6: other requests
      var call1332 = request(var_o, "ilkName", [0]);
      var opresult1333 = request(string1331, "++(1)", [1], call1332);
      var string1334 = new GraceString("\", ");
      var opresult1335 = request(opresult1333, "++(1)", [1], string1334);
      if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
      var opresult1336 = request(opresult1335, "++(1)", [1], var_modNameAsString);
      var string1337 = new GraceString(", ");
      var opresult1338 = request(opresult1336, "++(1)", [1], string1337);
      // call case 6: other requests
      var call1339 = request(var_o, "line", [0]);
      var opresult1340 = request(opresult1338, "++(1)", [1], call1339);
      var string1341 = new GraceString(");");
      var opresult1342 = request(opresult1340, "++(1)", [1], string1341);
      // call case 2: outer request
      var call1330 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1342);
      setLineNumber(796);    // compilenode string
      var string1344 = new GraceString("var ouc_init = ");
      var opresult1345 = request(string1344, "++(1)", [1], var_selfobj);
      var string1346 = new GraceString(".methods[\"");
      var opresult1347 = request(opresult1345, "++(1)", [1], string1346);
      if (var_name === undefined) raiseUninitializedVariable("name");
      var opresult1348 = request(opresult1347, "++(1)", [1], var_name);
      var string1349 = new GraceString("$build(3)\"].call(this, null");
      var opresult1350 = request(opresult1348, "++(1)", [1], string1349);
      if (var_argList === undefined) raiseUninitializedVariable("argList");
      var opresult1351 = request(opresult1350, "++(1)", [1], var_argList);
      var string1352 = new GraceString(", ouc, [], []");
      var opresult1353 = request(opresult1351, "++(1)", [1], string1352);
      if (var_typeArgList === undefined) raiseUninitializedVariable("typeArgList");
      var opresult1354 = request(opresult1353, "++(1)", [1], var_typeArgList);
      var string1355 = new GraceString(");");
      var opresult1356 = request(opresult1354, "++(1)", [1], string1355);
      // call case 2: outer request
      var call1343 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1356);
      setLineNumber(797);    // compilenode string
      var string1358 = new GraceString("ouc_init.call(ouc);");
      // call case 2: outer request
      var call1357 = selfRequest(importedModules["genjs"], "out(1)", [1], string1358);
      setLineNumber(798);    // compilenode string
      var string1360 = new GraceString("ouc");
      var string1361 = new GraceString("object returned from ");
      // call case 6: other requests
      var call1362 = request(var_o, "canonicalName", [0]);
      var opresult1363 = request(string1361, "++(1)", [1], call1362);
      var string1364 = new GraceString("");
      var opresult1365 = request(opresult1363, "++(1)", [1], string1364);
      setLineNumber(799);    // compilenode member
      // call case 6: other requests
      var call1366 = request(var_o, "dtype", [0]);
      // call case 6: other requests
      // call case 6: other requests
      var call1368 = request(var_o, "end", [0]);
      var call1367 = request(call1368, "line", [0]);
      // call case 2: outer request
      var call1359 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], string1360, opresult1365, call1366, call1367);
      setLineNumber(800);    // compilenode string
      var string1370 = new GraceString("return ouc;");
      // call case 2: outer request
      var call1369 = selfRequest(importedModules["genjs"], "out(1)", [1], string1370);
      if1326 = call1369;
    } else {
      setLineNumber(802);    // compilenode call
      // call case 2: outer request
      var call1371 = selfRequest(importedModules["genjs"], "compileMethodBodyWithTypecheck(1)", [1], var_o);
      var var_result = call1371;
      var if1372 = GraceDone;
      setLineNumber(803);    // compilenode string
      var string1373 = new GraceString("never returns");
      if (var_result === undefined) raiseUninitializedVariable("result");
      var opresult1374 = request(string1373, "\u2260(1)", [1], var_result);
      if (Grace_isTrue(opresult1374)) {
        setLineNumber(804);    // compilenode string
        var string1376 = new GraceString("return ");
        if (var_result === undefined) raiseUninitializedVariable("result");
        var opresult1377 = request(string1376, "++(1)", [1], var_result);
        var string1378 = new GraceString(";");
        var opresult1379 = request(opresult1377, "++(1)", [1], string1378);
        // call case 2: outer request
        var call1375 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1379);
        if1372 = call1375;
      }
      if1326 = if1372;
    }
    setLineNumber(807);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1380 = selfRequest(this, "debugModeSuffix", [0]);
    setLineNumber(808);    // compilenode call
    // call case 2: outer request
    var call1381 = selfRequest(importedModules["genjs"], "compileMethodPostamble(3)", [3], var_o, var_funcName, var_canonicalMethName);
    var if1382 = GraceDone;
    setLineNumber(809);    // compilenode member
    // call case 6: other requests
    var call1383 = request(var_o, "isOnceMethod", [0]);
    if (Grace_isTrue(call1383)) {
      setLineNumber(810);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 2: outer request
      var call1384 = selfRequest(importedModules["genjs"], "compileOnceWrapper(3)", [3], var_o, var_selfobj, var_name);
      if1382 = call1384;
    } else {
      setLineNumber(812);    // compilenode string
      var string1386 = new GraceString("");
      var opresult1387 = request(string1386, "++(1)", [1], var_selfobj);
      var string1388 = new GraceString(".methods[\"");
      var opresult1389 = request(opresult1387, "++(1)", [1], string1388);
      if (var_name === undefined) raiseUninitializedVariable("name");
      var opresult1390 = request(opresult1389, "++(1)", [1], var_name);
      var string1391 = new GraceString("\"] = ");
      var opresult1392 = request(opresult1390, "++(1)", [1], string1391);
      if (var_funcName === undefined) raiseUninitializedVariable("funcName");
      var opresult1393 = request(opresult1392, "++(1)", [1], var_funcName);
      var string1394 = new GraceString(";");
      var opresult1395 = request(opresult1393, "++(1)", [1], string1394);
      // call case 2: outer request
      var call1385 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1395);
      if1382 = call1385;
    }
    setLineNumber(814);    // compilenode call
    // call case 2: outer request
    var call1396 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_funcName, var_name);
    var if1397 = GraceDone;
    setLineNumber(815);    // compilenode member
    // call case 6: other requests
    var call1398 = request(var_o, "isFresh", [0]);
    if (Grace_isTrue(call1398)) {
      setLineNumber(816);    // compilenode call
      // call case 2: outer request
      var call1399 = selfRequest(importedModules["genjs"], "compileFreshMethod(2)", [2], var_o, var_selfobj);
      if1397 = call1399;
    }
    return if1397;
  };    // end of method compileNormalMethod(_,_)
  this.methods["compileNormalMethod(2)"] = func1306;
  func1306.methodName = "compileNormalMethod(2)";
  func1306.paramCounts = [2];
  func1306.paramNames = ["o", "selfobj"];
  func1306.definitionLine = 776;
  func1306.definitionModule = "genjs";
  var func1400 = function(argcv, var_o, var_selfobj, var_name) {    // method compileOnceWrapper(_,_,_), line 820
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileOnceWrapper(_,_,_)", 0, numArgs - 3);
    }
    setLineNumber(821);    // compilenode member
    // call case 6: other requests
    var call1401 = request(var_o, "numParams", [0]);
    // call case 6: other requests
    var call1402 = request(var_o, "numTypeParams", [0]);
    var sum1403 = request(call1401, "+(1)", [1], call1402);
    var var_totalParams = sum1403;
    setLineNumber(822);    // compilenode member
    // call case 6: other requests
    var call1404 = request(var_o, "register", [0]);
    var var_funcName = call1404;
    setLineNumber(823);    // compilenode string
    var string1405 = new GraceString("memo");
    var opresult1406 = request(string1405, "++(1)", [1], var_funcName);
    var var_memoFuncName = opresult1406;
    var if1407 = GraceDone;
    setLineNumber(824);    // compilenode num
    var opresult1408 = request(var_totalParams, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult1408)) {
      setLineNumber(825);    // compilenode string
      var string1410 = new GraceString("function ");
      if (var_memoFuncName === undefined) raiseUninitializedVariable("memoFuncName");
      var opresult1411 = request(string1410, "++(1)", [1], var_memoFuncName);
      var string1412 = new GraceString("(argcv) {");
      var opresult1413 = request(opresult1411, "++(1)", [1], string1412);
      // call case 2: outer request
      var call1409 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1413);
      setLineNumber(826);    // compilenode string
      var string1415 = new GraceString("    if (! this.data[\"memo$");
      var opresult1416 = request(string1415, "++(1)", [1], var_name);
      var string1417 = new GraceString("\"])    // parameterless memo function");
      var opresult1418 = request(opresult1416, "++(1)", [1], string1417);
      // call case 2: outer request
      var call1414 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1418);
      setLineNumber(827);    // compilenode string
      var string1420 = new GraceString("        this.data[\"memo$");
      var opresult1421 = request(string1420, "++(1)", [1], var_name);
      var string1422 = new GraceString("\"] = ");
      var opresult1423 = request(opresult1421, "++(1)", [1], string1422);
      if (var_funcName === undefined) raiseUninitializedVariable("funcName");
      var opresult1424 = request(opresult1423, "++(1)", [1], var_funcName);
      var string1425 = new GraceString(".call(this, argcv);");
      var opresult1426 = request(opresult1424, "++(1)", [1], string1425);
      // call case 2: outer request
      var call1419 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1426);
      setLineNumber(828);    // compilenode string
      var string1428 = new GraceString("    return this.data[\"memo$");
      var opresult1429 = request(string1428, "++(1)", [1], var_name);
      var string1430 = new GraceString("\"];");
      var opresult1431 = request(opresult1429, "++(1)", [1], string1430);
      // call case 2: outer request
      var call1427 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1431);
      setLineNumber(829);    // compilenode string
      var string1433 = new GraceString("};");
      // call case 2: outer request
      var call1432 = selfRequest(importedModules["genjs"], "out(1)", [1], string1433);
      if1407 = call1432;
    } else {
      setLineNumber(831);    // compilenode call
      // call case 2: outer request
      var call1434 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_o);
      // call case 2: outer request
      var call1435 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_o);
      var opresult1436 = request(call1434, "++(1)", [1], call1435);
      var var_commaParamNames = opresult1436;
      setLineNumber(832);    // compilenode num
      // call case 6: other requests
      if (var_commaParamNames === undefined) raiseUninitializedVariable("commaParamNames");
      var call1437 = request(var_commaParamNames, "substringFrom(1)", [1], new GraceNum(3));
      var var_paramNames = call1437;
      setLineNumber(833);    // compilenode string
      var string1439 = new GraceString("function ");
      if (var_memoFuncName === undefined) raiseUninitializedVariable("memoFuncName");
      var opresult1440 = request(string1439, "++(1)", [1], var_memoFuncName);
      var string1441 = new GraceString("(argcv");
      var opresult1442 = request(opresult1440, "++(1)", [1], string1441);
      if (var_commaParamNames === undefined) raiseUninitializedVariable("commaParamNames");
      var opresult1443 = request(opresult1442, "++(1)", [1], var_commaParamNames);
      var string1444 = new GraceString(") {");
      var opresult1445 = request(opresult1443, "++(1)", [1], string1444);
      // call case 2: outer request
      var call1438 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1445);
      setLineNumber(834);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1446 = selfRequest(this, "increaseindent", [0]);
      setLineNumber(835);    // compilenode num
      // call case 2: outer request
      var call1447 = selfRequest(importedModules["genjs"], "compileDefaultsForTypeParameters(1)extraParams(1)", [1, 1], var_o, new GraceNum(0));
      setLineNumber(836);    // compilenode string
      var string1449 = new GraceString("let memoTable = this.data[\"memo$");
      var opresult1450 = request(string1449, "++(1)", [1], var_name);
      var string1451 = new GraceString("\"] ||");
      var opresult1452 = request(opresult1450, "++(1)", [1], string1451);
      // call case 2: outer request
      var call1448 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1452);
      setLineNumber(837);    // compilenode string
      var string1454 = new GraceString("      ( this.data[\"memo$");
      var opresult1455 = request(string1454, "++(1)", [1], var_name);
      var string1456 = new GraceString("\"] =");
      var opresult1457 = request(opresult1455, "++(1)", [1], string1456);
      // call case 2: outer request
      var call1453 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1457);
      setLineNumber(838);    // compilenode string
      var string1459 = new GraceString("           request(var_HashMap, 'empty', [0]) );");
      // call case 2: outer request
      var call1458 = selfRequest(importedModules["genjs"], "out(1)", [1], string1459);
      var if1460 = GraceDone;
      setLineNumber(839);    // compilenode op
      if (var_totalParams === undefined) raiseUninitializedVariable("totalParams");
      var opresult1461 = request(var_totalParams, "==(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult1461)) {
        setLineNumber(840);    // compilenode string
        var string1463 = new GraceString("let tableKey = ");
        if (var_paramNames === undefined) raiseUninitializedVariable("paramNames");
        var opresult1464 = request(string1463, "++(1)", [1], var_paramNames);
        var string1465 = new GraceString(";");
        var opresult1466 = request(opresult1464, "++(1)", [1], string1465);
        // call case 2: outer request
        var call1462 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1466);
        if1460 = call1462;
      } else {
        setLineNumber(842);    // compilenode string
        var string1468 = new GraceString("let tableKey = new GraceSequence([");
        if (var_paramNames === undefined) raiseUninitializedVariable("paramNames");
        var opresult1469 = request(string1468, "++(1)", [1], var_paramNames);
        var string1470 = new GraceString("]);");
        var opresult1471 = request(opresult1469, "++(1)", [1], string1470);
        // call case 2: outer request
        var call1467 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1471);
        if1460 = call1467;
      }
      setLineNumber(844);    // compilenode string
      var string1473 = new GraceString("let absentBlock = new GraceBlock(this, ");
      // call case 6: other requests
      var call1474 = request(var_o, "line", [0]);
      var opresult1475 = request(string1473, "++(1)", [1], call1474);
      var string1476 = new GraceString(", 0);");
      var opresult1477 = request(opresult1475, "++(1)", [1], string1476);
      // call case 2: outer request
      var call1472 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1477);
      setLineNumber(845);    // compilenode string
      var string1479 = new GraceString("absentBlock.guard = jsTrue;");
      // call case 2: outer request
      var call1478 = selfRequest(importedModules["genjs"], "out(1)", [1], string1479);
      setLineNumber(846);    // compilenode string
      var string1481 = new GraceString("absentBlock.real = function ifAbsentBlock() {");
      // call case 2: outer request
      var call1480 = selfRequest(importedModules["genjs"], "out(1)", [1], string1481);
      setLineNumber(847);    // compilenode string
      var string1483 = new GraceString("    let newResult = ");
      if (var_funcName === undefined) raiseUninitializedVariable("funcName");
      var opresult1484 = request(string1483, "++(1)", [1], var_funcName);
      var string1485 = new GraceString(".call(this, argcv");
      var opresult1486 = request(opresult1484, "++(1)", [1], string1485);
      if (var_commaParamNames === undefined) raiseUninitializedVariable("commaParamNames");
      var opresult1487 = request(opresult1486, "++(1)", [1], var_commaParamNames);
      var string1488 = new GraceString(");");
      var opresult1489 = request(opresult1487, "++(1)", [1], string1488);
      // call case 2: outer request
      var call1482 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1489);
      setLineNumber(848);    // compilenode string
      var string1491 = new GraceString("    request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);");
      // call case 2: outer request
      var call1490 = selfRequest(importedModules["genjs"], "out(1)", [1], string1491);
      setLineNumber(849);    // compilenode string
      var string1493 = new GraceString("    return newResult;");
      // call case 2: outer request
      var call1492 = selfRequest(importedModules["genjs"], "out(1)", [1], string1493);
      setLineNumber(850);    // compilenode string
      var string1495 = new GraceString("};");
      // call case 2: outer request
      var call1494 = selfRequest(importedModules["genjs"], "out(1)", [1], string1495);
      setLineNumber(851);    // compilenode string
      var string1497 = new GraceString("absentBlock.methods.apply = function apply (argcv) {");
      // call case 2: outer request
      var call1496 = selfRequest(importedModules["genjs"], "out(1)", [1], string1497);
      setLineNumber(852);    // compilenode string
      var string1499 = new GraceString("    return this.real.apply(this.receiver);");
      // call case 2: outer request
      var call1498 = selfRequest(importedModules["genjs"], "out(1)", [1], string1499);
      setLineNumber(853);    // compilenode string
      var string1501 = new GraceString("};");
      // call case 2: outer request
      var call1500 = selfRequest(importedModules["genjs"], "out(1)", [1], string1501);
      setLineNumber(854);    // compilenode string
      var string1503 = new GraceString("return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);");
      // call case 2: outer request
      var call1502 = selfRequest(importedModules["genjs"], "out(1)", [1], string1503);
      setLineNumber(855);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1504 = selfRequest(this, "decreaseindent", [0]);
      setLineNumber(856);    // compilenode string
      var string1506 = new GraceString("};");
      // call case 2: outer request
      var call1505 = selfRequest(importedModules["genjs"], "out(1)", [1], string1506);
      if1407 = call1505;
    }
    setLineNumber(858);    // compilenode string
    var string1508 = new GraceString("");
    var opresult1509 = request(string1508, "++(1)", [1], var_selfobj);
    var string1510 = new GraceString(".methods[\"");
    var opresult1511 = request(opresult1509, "++(1)", [1], string1510);
    var opresult1512 = request(opresult1511, "++(1)", [1], var_name);
    var string1513 = new GraceString("\"] = ");
    var opresult1514 = request(opresult1512, "++(1)", [1], string1513);
    var opresult1515 = request(opresult1514, "++(1)", [1], var_memoFuncName);
    var string1516 = new GraceString(";");
    var opresult1517 = request(opresult1515, "++(1)", [1], string1516);
    // call case 2: outer request
    var call1507 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1517);
    setLineNumber(859);    // compilenode call
    // call case 2: outer request
    var call1518 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_memoFuncName, var_name);
    return call1518;
  };    // end of method compileOnceWrapper(_,_,_)
  this.methods["compileOnceWrapper(3)"] = func1400;
  func1400.methodName = "compileOnceWrapper(3)";
  func1400.paramCounts = [3];
  func1400.paramNames = ["o", "selfobj", "name"];
  func1400.definitionLine = 820;
  func1400.definitionModule = "genjs";
  var func1519 = function(argcv, var_o, var_selfobj, var_kind) {    // method compileDummyMethod(_,_,_), line 862
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileDummyMethod(_,_,_)", 0, numArgs - 3);
    }
    setLineNumber(863);    // compilenode member
    // call case 6: other requests
    var call1520 = request(var_o, "canonicalName", [0]);
    var var_canonicalMethName = call1520;
    setLineNumber(864);    // compilenode member
    // call case 6: other requests
    var call1521 = request(var_o, "register", [0]);
    var var_funcName = call1521;
    setLineNumber(865);    // compilenode num
    var_priorLineEmitted = new GraceNum(0);
    setLineNumber(866);    // compilenode member
    // call case 6: other requests
    var call1523 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call1522 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call1523);
    var var_name = call1522;
    setLineNumber(867);    // compilenode string
    var string1525 = new GraceString("if (! ");
    var opresult1526 = request(string1525, "++(1)", [1], var_selfobj);
    var string1527 = new GraceString(".methods[\"");
    var opresult1528 = request(opresult1526, "++(1)", [1], string1527);
    var opresult1529 = request(opresult1528, "++(1)", [1], var_name);
    var string1530 = new GraceString("\"]) {");
    var opresult1531 = request(opresult1529, "++(1)", [1], string1530);
    // call case 2: outer request
    var call1524 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1531);
    setLineNumber(868);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1532 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(870);    // compilenode call
    // call case 2: outer request
    var call1534 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_o);
    // call case 2: outer request
    var call1535 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_o);
    var opresult1536 = request(call1534, "++(1)", [1], call1535);
    // call case 2: outer request
    var call1533 = selfRequest(importedModules["genjs"], "compileMethodPreamble(3)withParams(1)", [3, 1], var_o, var_funcName, var_canonicalMethName, opresult1536);
    setLineNumber(871);    // compilenode call
    // call case 2: outer request
    var call1537 = selfRequest(importedModules["genjs"], "compileParameterDebugFrame(2)", [2], var_o, var_name);
    setLineNumber(872);    // compilenode num
    // call case 2: outer request
    var call1538 = selfRequest(importedModules["genjs"], "compileDefaultsForTypeParameters(1)extraParams(1)", [1, 1], var_o, new GraceNum(0));
    setLineNumber(873);    // compilenode call
    // call case 2: outer request
    var call1539 = selfRequest(importedModules["genjs"], "compileArgumentTypeChecks(1)", [1], var_o);
    setLineNumber(874);    // compilenode member
    // call case 6: other requests
    var call1541 = request(var_o, "line", [0]);
    var string1542 = new GraceString("");
    var opresult1543 = request(string1542, "++(1)", [1], var_kind);
    var string1544 = new GraceString(" method");
    var opresult1545 = request(opresult1543, "++(1)", [1], string1544);
    // call case 2: outer request
    var call1540 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call1541, opresult1545);
    setLineNumber(875);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1546 = selfRequest(this, "debugModePrefix", [0]);
    setLineNumber(876);    // compilenode string
    var string1548 = new GraceString("throw new GraceExceptionPacket(ProgrammingErrorObject,");
    // call case 2: outer request
    var call1547 = selfRequest(importedModules["genjs"], "out(1)", [1], string1548);
    setLineNumber(877);    // compilenode string
    var string1550 = new GraceString("          new GraceString(\"");
    var opresult1551 = request(string1550, "++(1)", [1], var_kind);
    var string1552 = new GraceString(" method ");
    var opresult1553 = request(opresult1551, "++(1)", [1], string1552);
    var opresult1554 = request(opresult1553, "++(1)", [1], var_canonicalMethName);
    var string1555 = new GraceString(" was not supplied\"));");
    var opresult1556 = request(opresult1554, "++(1)", [1], string1555);
    // call case 2: outer request
    var call1549 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1556);
    setLineNumber(878);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1557 = selfRequest(this, "debugModeSuffix", [0]);
    setLineNumber(879);    // compilenode call
    // call case 2: outer request
    var call1558 = selfRequest(importedModules["genjs"], "compileMethodPostamble(3)", [3], var_o, var_funcName, var_canonicalMethName);
    setLineNumber(880);    // compilenode string
    var string1560 = new GraceString("");
    var opresult1561 = request(string1560, "++(1)", [1], var_selfobj);
    var string1562 = new GraceString(".methods[\"");
    var opresult1563 = request(opresult1561, "++(1)", [1], string1562);
    var opresult1564 = request(opresult1563, "++(1)", [1], var_name);
    var string1565 = new GraceString("\"] = ");
    var opresult1566 = request(opresult1564, "++(1)", [1], string1565);
    var opresult1567 = request(opresult1566, "++(1)", [1], var_funcName);
    var string1568 = new GraceString(";");
    var opresult1569 = request(opresult1567, "++(1)", [1], string1568);
    // call case 2: outer request
    var call1559 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1569);
    setLineNumber(881);    // compilenode call
    // call case 2: outer request
    var call1570 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_o, var_funcName, var_name);
    setLineNumber(882);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1571 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(883);    // compilenode string
    var string1573 = new GraceString("};");
    // call case 2: outer request
    var call1572 = selfRequest(importedModules["genjs"], "out(1)", [1], string1573);
    return call1572;
  };    // end of method compileDummyMethod(_,_,_)
  this.methods["compileDummyMethod(3)"] = func1519;
  func1519.methodName = "compileDummyMethod(3)";
  func1519.paramCounts = [3];
  func1519.paramNames = ["o", "selfobj", "kind"];
  func1519.definitionLine = 862;
  func1519.definitionModule = "genjs";
  var func1574 = function(argcv, var_methNode, var_objNode, var_outerRef) {    // method compileBuildMethodFor(_)withObjCon(_)inside(_), line 885
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileBuildMethodFor(_)withObjCon(_)inside(_)", 0, numArgs - 3);
    }
    setLineNumber(891);    // compilenode string
    var string1576 = new GraceString("func");
    // call case 2: outer request
    var call1575 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string1576);
    var var_funcName = call1575;
    setLineNumber(892);    // compilenode member
    // call case 6: other requests
    var call1578 = request(var_methNode, "nameString", [0]);
    var string1579 = new GraceString("$build(3)");
    var opresult1580 = request(call1578, "++(1)", [1], string1579);
    // call case 2: outer request
    var call1577 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], opresult1580);
    var var_name = call1577;
    setLineNumber(893);    // compilenode member
    // call case 6: other requests
    var call1581 = request(var_methNode, "canonicalName", [0]);
    var string1582 = new GraceString("$build(_,_,_)");
    var opresult1583 = request(call1581, "++(1)", [1], string1582);
    var var_cName = opresult1583;
    setLineNumber(894);    // compilenode call
    // call case 2: outer request
    var call1584 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_methNode);
    var var_params = call1584;
    setLineNumber(895);    // compilenode call
    // call case 2: outer request
    var call1585 = selfRequest(importedModules["genjs"], "typeParamlist(1)", [1], var_methNode);
    var var_typeParams = call1585;
    setLineNumber(897);    // compilenode string
    var string1587 = new GraceString(", inheritingObject, aliases, exclusions");
    var opresult1588 = request(var_params, "++(1)", [1], string1587);
    var opresult1589 = request(opresult1588, "++(1)", [1], var_typeParams);
    // call case 2: outer request
    var call1586 = selfRequest(importedModules["genjs"], "compileMethodPreamble(3)withParams(1)", [3, 1], var_methNode, var_funcName, var_cName, opresult1589);
    setLineNumber(898);    // compilenode num
    // call case 2: outer request
    var call1590 = selfRequest(importedModules["genjs"], "compileDefaultsForTypeParameters(1)extraParams(1)", [1, 1], var_methNode, new GraceNum(3));
    setLineNumber(899);    // compilenode call
    // call case 2: outer request
    var call1591 = selfRequest(importedModules["genjs"], "compileArgumentTypeChecks(1)", [1], var_methNode);
    setLineNumber(900);    // compilenode call
    // call case 2: outer request
    var call1592 = selfRequest(importedModules["genjs"], "compileMethodBodyWithoutLast(1)", [1], var_methNode);
    setLineNumber(901);    // compilenode call
    // call case 2: outer request
    var call1593 = selfRequest(importedModules["genjs"], "compileBuildAndInitFunctions(1)inMethod(1)", [1, 1], var_objNode, var_methNode);
    setLineNumber(902);    // compilenode member
    // call case 6: other requests
    var call1594 = request(var_objNode, "register", [0]);
    var var_objRef = call1594;
    setLineNumber(903);    // compilenode string
    var string1596 = new GraceString("var ");
    var opresult1597 = request(string1596, "++(1)", [1], var_objRef);
    var string1598 = new GraceString("_init = ");
    var opresult1599 = request(opresult1597, "++(1)", [1], string1598);
    var opresult1600 = request(opresult1599, "++(1)", [1], var_objRef);
    var string1601 = new GraceString("_build.call(inheritingObject, null");
    var opresult1602 = request(opresult1600, "++(1)", [1], string1601);
    var opresult1603 = request(opresult1602, "++(1)", [1], var_params);
    var string1604 = new GraceString(", ");
    var opresult1605 = request(opresult1603, "++(1)", [1], string1604);
    var opresult1606 = request(opresult1605, "++(1)", [1], var_outerRef);
    var string1607 = new GraceString(", aliases, exclusions");
    var opresult1608 = request(opresult1606, "++(1)", [1], string1607);
    var opresult1609 = request(opresult1608, "++(1)", [1], var_typeParams);
    var string1610 = new GraceString(");");
    var opresult1611 = request(opresult1609, "++(1)", [1], string1610);
    // call case 2: outer request
    var call1595 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1611);
    setLineNumber(904);    // compilenode string
    var string1613 = new GraceString("return ");
    var opresult1614 = request(string1613, "++(1)", [1], var_objRef);
    var string1615 = new GraceString("_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)");
    var opresult1616 = request(opresult1614, "++(1)", [1], string1615);
    // call case 2: outer request
    var call1612 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1616);
    setLineNumber(905);    // compilenode call
    // call case 2: outer request
    var call1617 = selfRequest(importedModules["genjs"], "compileMethodPostamble(3)", [3], var_methNode, var_funcName, var_cName);
    setLineNumber(906);    // compilenode string
    var string1619 = new GraceString("this.methods[\"");
    var opresult1620 = request(string1619, "++(1)", [1], var_name);
    var string1621 = new GraceString("\"] = ");
    var opresult1622 = request(opresult1620, "++(1)", [1], string1621);
    var opresult1623 = request(opresult1622, "++(1)", [1], var_funcName);
    var string1624 = new GraceString(";");
    var opresult1625 = request(opresult1623, "++(1)", [1], string1624);
    // call case 2: outer request
    var call1618 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1625);
    setLineNumber(907);    // compilenode call
    // call case 2: outer request
    var call1626 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_methNode, var_funcName, var_name);
    return call1626;
  };    // end of method compileBuildMethodFor(_)withObjCon(_)inside(_)
  this.methods["compileBuildMethodFor(1)withObjCon(1)inside(1)"] = func1574;
  func1574.methodName = "compileBuildMethodFor(1)withObjCon(1)inside(1)";
  func1574.paramCounts = [1, 1, 1];
  func1574.paramNames = ["methNode", "objNode", "outerRef"];
  func1574.definitionLine = 885;
  func1574.definitionModule = "genjs";
  var func1627 = function(argcv, var_methNode, var_callExpr, var_outerRef) {    // method compileBuildMethodFor(_)withFreshCall(_)inside(_), line 909
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("compileBuildMethodFor(_)withFreshCall(_)inside(_)", 0, numArgs - 3);
    }
    setLineNumber(914);    // compilenode string
    var string1629 = new GraceString("func");
    // call case 2: outer request
    var call1628 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string1629);
    var var_funcName = call1628;
    setLineNumber(915);    // compilenode member
    // call case 6: other requests
    var call1631 = request(var_methNode, "nameString", [0]);
    var string1632 = new GraceString("$build(3)");
    var opresult1633 = request(call1631, "++(1)", [1], string1632);
    // call case 2: outer request
    var call1630 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], opresult1633);
    var var_name = call1630;
    setLineNumber(916);    // compilenode member
    // call case 6: other requests
    var call1635 = request(var_methNode, "canonicalName", [0]);
    var string1636 = new GraceString("$build(_,_,_)");
    var opresult1637 = request(call1635, "++(1)", [1], string1636);
    // call case 2: outer request
    var call1634 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], opresult1637);
    var var_cName = call1634;
    setLineNumber(918);    // compilenode call
    // call case 2: outer request
    var call1639 = selfRequest(importedModules["genjs"], "paramlist(1)", [1], var_methNode);
    var string1640 = new GraceString(", ouc, aliases, exclusions");
    var opresult1641 = request(call1639, "++(1)", [1], string1640);
    // call case 2: outer request
    var call1638 = selfRequest(importedModules["genjs"], "compileMethodPreamble(3)withParams(1)", [3, 1], var_methNode, var_funcName, var_cName, opresult1641);
    setLineNumber(919);    // compilenode call
    // call case 2: outer request
    var call1642 = selfRequest(importedModules["genjs"], "compileMethodBodyWithoutLast(1)", [1], var_methNode);
    setLineNumber(924);    // compilenode string
    var string1644 = new GraceString("call");
    // call case 2: outer request
    var call1643 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string1644);
    var var_calltemp = call1643;
    setLineNumber(925);    // compilenode call
    // call case 6: other requests
    var call1645 = request(var_callExpr, "register:=(1)", [1], var_calltemp);
    setLineNumber(926);    // compilenode array
    var array1647 = new GraceSequence([]);
    // call case 2: outer request
    var call1646 = selfRequest(var_prelude, "list(1)", [1], array1647);
    var var_args = call1646;
    setLineNumber(927);    // compilenode call
    // call case 2: outer request
    var call1648 = selfRequest(importedModules["genjs"], "compileNormalArguments(2)", [2], var_callExpr, var_args);
    setLineNumber(928);    // compilenode string
    var string1651 = new GraceString("ouc");
    var string1652 = new GraceString("aliases");
    var string1653 = new GraceString("exclusions");
    var array1650 = new GraceSequence([string1651, string1652, string1653]);
    // call case 6: other requests
    var call1649 = request(var_args, "addAll(1)", [1], array1650);
    setLineNumber(929);    // compilenode call
    // call case 2: outer request
    var call1654 = selfRequest(importedModules["genjs"], "compileTypeArguments(2)", [2], var_callExpr, var_args);
    setLineNumber(930);    // compilenode call
    // call case 2: outer request
    var call1655 = selfRequest(importedModules["genjs"], "compileCallToBuildMethod(1)withArgs(1)", [1, 1], var_callExpr, var_args);
    setLineNumber(931);    // compilenode string
    var string1657 = new GraceString("ouc");
    var string1658 = new GraceString("result of method ");
    // call case 6: other requests
    var call1659 = request(var_methNode, "canonicalName", [0]);
    var opresult1660 = request(string1658, "++(1)", [1], call1659);
    var string1661 = new GraceString("");
    var opresult1662 = request(opresult1660, "++(1)", [1], string1661);
    setLineNumber(932);    // compilenode member
    // call case 6: other requests
    var call1663 = request(var_methNode, "dtype", [0]);
    // call case 6: other requests
    var call1664 = request(var_callExpr, "line", [0]);
    // call case 2: outer request
    var call1656 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], string1657, opresult1662, call1663, call1664);
    setLineNumber(933);    // compilenode string
    var string1666 = new GraceString("return ");
    var opresult1667 = request(string1666, "++(1)", [1], var_calltemp);
    var string1668 = new GraceString(";      // from compileBuildMethodFor(_)withFreshCall(_)inside(_)");
    var opresult1669 = request(opresult1667, "++(1)", [1], string1668);
    // call case 2: outer request
    var call1665 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1669);
    setLineNumber(934);    // compilenode call
    // call case 2: outer request
    var call1670 = selfRequest(importedModules["genjs"], "compileMethodPostamble(3)", [3], var_methNode, var_funcName, var_cName);
    setLineNumber(935);    // compilenode string
    var string1672 = new GraceString("this.methods[\"");
    var opresult1673 = request(string1672, "++(1)", [1], var_name);
    var string1674 = new GraceString("\"] = ");
    var opresult1675 = request(opresult1673, "++(1)", [1], string1674);
    var opresult1676 = request(opresult1675, "++(1)", [1], var_funcName);
    var string1677 = new GraceString(";");
    var opresult1678 = request(opresult1676, "++(1)", [1], string1677);
    // call case 2: outer request
    var call1671 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1678);
    setLineNumber(936);    // compilenode call
    // call case 2: outer request
    var call1679 = selfRequest(importedModules["genjs"], "compileMetadata(3)", [3], var_methNode, var_funcName, var_name);
    return call1679;
  };    // end of method compileBuildMethodFor(_)withFreshCall(_)inside(_)
  this.methods["compileBuildMethodFor(1)withFreshCall(1)inside(1)"] = func1627;
  func1627.methodName = "compileBuildMethodFor(1)withFreshCall(1)inside(1)";
  func1627.paramCounts = [1, 1, 1];
  func1627.paramNames = ["methNode", "callExpr", "outerRef"];
  func1627.definitionLine = 909;
  func1627.definitionModule = "genjs";
  var func1680 = function(argcv, var_callExpr, var_args) {    // method compileCallToBuildMethod(_)withArgs(_), line 938
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileCallToBuildMethod(_)withArgs(_)", 0, numArgs - 2);
    }
    setLineNumber(939);    // compilenode member
    // call case 6: other requests
    var call1682 = request(var_callExpr, "line", [0]);
    // call case 6: other requests
    var call1683 = request(var_callExpr, "linePos", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call1681 = request(var_util, "setPosition(2)", [2], call1682, call1683);
    setLineNumber(941);    // compilenode string
    var string1686 = new GraceString("$build");
    setLineNumber(942);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1688 = request(var_ast, "nullNode", [0]);
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1689 = request(var_ast, "nullNode", [0]);
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1690 = request(var_ast, "nullNode", [0]);
    var array1687 = new GraceSequence([call1688, call1689, call1690]);
    // call case 6: other requests
    setLineNumber(941);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1691 = request(var_ast, "requestPart", [0]);
    var call1685 = request(call1691, "request(1)withArgs(1)", [1, 1], string1686, array1687);
    // call case 6: other requests
    setLineNumber(940);    // compilenode member
    // call case 6: other requests
    var call1692 = request(var_callExpr, "parts", [0]);
    var call1684 = request(call1692, "addLast(1)", [1], call1685);
    setLineNumber(944);    // compilenode member
    // call case 6: other requests
    var call1693 = request(var_callExpr, "receiver", [0]);
    var var_receiver = call1693;
    var if1694 = GraceDone;
    setLineNumber(945);    // compilenode member
    // call case 6: other requests
    var call1695 = request(var_receiver, "isOuter", [0]);
    if (Grace_isTrue(call1695)) {
      setLineNumber(946);    // compilenode call
      // call case 2: outer request
      var call1696 = selfRequest(importedModules["genjs"], "compileOuterRequest(2)", [2], var_callExpr, var_args);
      if1694 = call1696;
    } else {
      var if1697 = GraceDone;
      setLineNumber(947);    // compilenode member
      // call case 6: other requests
      if (var_receiver === undefined) raiseUninitializedVariable("receiver");
      var call1698 = request(var_receiver, "isSelf", [0]);
      if (Grace_isTrue(call1698)) {
        setLineNumber(948);    // compilenode call
        // call case 2: outer request
        var call1699 = selfRequest(importedModules["genjs"], "compileSelfRequest(2)", [2], var_callExpr, var_args);
        if1697 = call1699;
      } else {
        var if1700 = GraceDone;
        setLineNumber(949);    // compilenode member
        // call case 6: other requests
        if (var_receiver === undefined) raiseUninitializedVariable("receiver");
        var call1701 = request(var_receiver, "isPrelude", [0]);
        if (Grace_isTrue(call1701)) {
          setLineNumber(950);    // compilenode call
          // call case 2: outer request
          var call1702 = selfRequest(importedModules["genjs"], "compilePreludeRequest(2)", [2], var_callExpr, var_args);
          if1700 = call1702;
        } else {
          setLineNumber(952);    // compilenode call
          // call case 2: outer request
          var call1703 = selfRequest(importedModules["genjs"], "compileOtherRequest(2)", [2], var_callExpr, var_args);
          if1700 = call1703;
        }
        if1697 = if1700;
      }
      if1694 = if1697;
    }
    setLineNumber(954);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1705 = request(var_callExpr, "parts", [0]);
    var call1704 = request(call1705, "removeLast", [0]);
    return call1704;
  };    // end of method compileCallToBuildMethod(_)withArgs(_)
  this.methods["compileCallToBuildMethod(1)withArgs(1)"] = func1680;
  func1680.methodName = "compileCallToBuildMethod(1)withArgs(1)";
  func1680.paramCounts = [1, 1];
  func1680.paramNames = ["callExpr", "args"];
  func1680.definitionLine = 938;
  func1680.definitionModule = "genjs";
  var func1706 = function(argcv, var_o) {    // method paramlist(_), line 956
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("paramlist(_)", 0, numArgs - 1);
    }
    setLineNumber(959);    // compilenode string
    var string1707 = new GraceString("");
    var var_result = string1707;
    setLineNumber(960);    // compilenode block
    var block1709 = new GraceBlock(this, 960, 1);
    block1709.guard = jsTrue;
    block1709.real = function block1709(var_part) {
      setLineNumber(961);    // compilenode block
      var block1711 = new GraceBlock(this, 961, 1);
      block1711.guard = jsTrue;
      block1711.real = function block1711(var_param) {
        setLineNumber(962);    // compilenode op
        if (var_result === undefined) raiseUninitializedVariable("result");
        var string1712 = new GraceString(", ");
        // call case 6: other requests
        var call1714 = request(var_param, "nameString", [0]);
        // call case 2: outer request
        var call1713 = selfRequest(importedModules["genjs"], "varf(1)", [1], call1714);
        var opresult1715 = request(string1712, "++(1)", [1], call1713);
        var string1716 = new GraceString("");
        var opresult1717 = request(opresult1715, "++(1)", [1], string1716);
        var opresult1718 = request(var_result, "++(1)", [1], opresult1717);
        var_result = opresult1718;
        return GraceDone;
      };
      let applyMeth1711 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1711.methodName = "apply(1)";
      applyMeth1711.paramCounts = [1];
      applyMeth1711.paramNames = ["param"];
      applyMeth1711.definitionLine = 961;
      applyMeth1711.definitionModule = "genjs";
      block1711.methods["apply(1)"] = applyMeth1711;
      let matchesMeth1711 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1711.methodName = "matches(1)";
      matchesMeth1711.paramCounts = [1];
      matchesMeth1711.paramNames = ["param"];
      matchesMeth1711.definitionLine = 961;
      matchesMeth1711.definitionModule = "genjs";
      block1711.methods["matches(1)"] = matchesMeth1711;
      // call case 6: other requests
      setLineNumber(961);    // compilenode member
      // call case 6: other requests
      var call1719 = request(var_part, "params", [0]);
      var call1710 = request(call1719, "do(1)", [1], block1711);
      return call1710;
    };
    let applyMeth1709 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1709.methodName = "apply(1)";
    applyMeth1709.paramCounts = [1];
    applyMeth1709.paramNames = ["part"];
    applyMeth1709.definitionLine = 960;
    applyMeth1709.definitionModule = "genjs";
    block1709.methods["apply(1)"] = applyMeth1709;
    let matchesMeth1709 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1709.methodName = "matches(1)";
    matchesMeth1709.paramCounts = [1];
    matchesMeth1709.paramNames = ["part"];
    matchesMeth1709.definitionLine = 960;
    matchesMeth1709.definitionModule = "genjs";
    block1709.methods["matches(1)"] = matchesMeth1709;
    // call case 6: other requests
    setLineNumber(960);    // compilenode member
    // call case 6: other requests
    var call1720 = request(var_o, "signature", [0]);
    var call1708 = request(call1720, "do(1)", [1], block1709);
    return var_result;
  };    // end of method paramlist(_)
  this.methods["paramlist(1)"] = func1706;
  func1706.methodName = "paramlist(1)";
  func1706.paramCounts = [1];
  func1706.paramNames = ["o"];
  func1706.definitionLine = 956;
  func1706.definitionModule = "genjs";
  var func1721 = function(argcv, var_o) {    // method typeParamlist(_), line 967
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("typeParamlist(_)", 0, numArgs - 1);
    }
    setLineNumber(971);    // compilenode string
    var string1722 = new GraceString("");
    var var_result = string1722;
    var if1723 = GraceDone;
    setLineNumber(972);    // compilenode member
    // call case 6: other requests
    var call1724 = request(var_o, "typeParams", [0]);
    var opresult1725 = request(GraceFalse, "\u2260(1)", [1], call1724);
    if (Grace_isTrue(opresult1725)) {
      setLineNumber(973);    // compilenode block
      var block1727 = new GraceBlock(this, 973, 1);
      block1727.guard = jsTrue;
      block1727.real = function block1727(var_each) {
        setLineNumber(974);    // compilenode op
        if (var_result === undefined) raiseUninitializedVariable("result");
        var string1728 = new GraceString(", ");
        // call case 6: other requests
        var call1730 = request(var_each, "nameString", [0]);
        // call case 2: outer request
        var call1729 = selfRequest(importedModules["genjs"], "varf(1)", [1], call1730);
        var opresult1731 = request(string1728, "++(1)", [1], call1729);
        var string1732 = new GraceString("");
        var opresult1733 = request(opresult1731, "++(1)", [1], string1732);
        var opresult1734 = request(var_result, "++(1)", [1], opresult1733);
        var_result = opresult1734;
        return GraceDone;
      };
      let applyMeth1727 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1727.methodName = "apply(1)";
      applyMeth1727.paramCounts = [1];
      applyMeth1727.paramNames = ["each"];
      applyMeth1727.definitionLine = 973;
      applyMeth1727.definitionModule = "genjs";
      block1727.methods["apply(1)"] = applyMeth1727;
      let matchesMeth1727 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1727.methodName = "matches(1)";
      matchesMeth1727.paramCounts = [1];
      matchesMeth1727.paramNames = ["each"];
      matchesMeth1727.definitionLine = 973;
      matchesMeth1727.definitionModule = "genjs";
      block1727.methods["matches(1)"] = matchesMeth1727;
      // call case 6: other requests
      setLineNumber(973);    // compilenode member
      // call case 6: other requests
      var call1735 = request(var_o, "typeParams", [0]);
      var call1726 = request(call1735, "do(1)", [1], block1727);
      if1723 = call1726;
    }
    return var_result;
  };    // end of method typeParamlist(_)
  this.methods["typeParamlist(1)"] = func1721;
  func1721.methodName = "typeParamlist(1)";
  func1721.paramCounts = [1];
  func1721.paramNames = ["o"];
  func1721.definitionLine = 967;
  func1721.definitionModule = "genjs";
  var func1736 = function(argcv, var_func, var_o) {    // method compilemethodtypes(_,_), line 979
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compilemethodtypes(_,_)", 0, numArgs - 2);
    }
    setLineNumber(980);    // compilenode string
    var string1738 = new GraceString("");
    var opresult1739 = request(string1738, "++(1)", [1], var_func);
    var string1740 = new GraceString(".paramTypes = [];");
    var opresult1741 = request(opresult1739, "++(1)", [1], string1740);
    // call case 2: outer request
    var call1737 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1741);
    setLineNumber(981);    // compilenode member
    // call case 6: other requests
    var call1743 = request(var_o, "signature", [0]);
    var block1744 = new GraceBlock(this, 981, 1);
    block1744.guard = jsTrue;
    block1744.real = function block1744(var_part) {
      setLineNumber(982);    // compilenode member
      // call case 6: other requests
      var call1746 = request(var_part, "params", [0]);
      var block1747 = new GraceBlock(this, 982, 1);
      block1747.guard = jsTrue;
      block1747.real = function block1747(var_p) {
        var if1748 = GraceDone;
        setLineNumber(985);    // compilenode member
        // call case 6: other requests
        var call1749 = request(var_p, "dtype", [0]);
        var opresult1750 = request(GraceFalse, "\u2260(1)", [1], call1749);
        if (Grace_isTrue(opresult1750)) {
          var if1751 = GraceDone;
          setLineNumber(986);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1753 = request(var_p, "dtype", [0]);
          var call1752 = request(call1753, "kind", [0]);
          var string1754 = new GraceString("identifier");
          var opresult1755 = request(call1752, "==(1)", [1], string1754);
          var block1756 = new GraceBlock(this, 986, 0);
          block1756.guard = jsTrue;
          block1756.real = function block1756() {
            setLineNumber(986);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1758 = request(var_p, "dtype", [0]);
            var call1757 = request(call1758, "value", [0]);
            var string1759 = new GraceString("Unknown");
            var opresult1760 = request(call1757, "\u2260(1)", [1], string1759);
            return opresult1760;
          };
          let applyMeth1756 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1756.methodName = "apply";
          applyMeth1756.paramCounts = [0];
          applyMeth1756.paramNames = [];
          applyMeth1756.definitionLine = 986;
          applyMeth1756.definitionModule = "genjs";
          block1756.methods["apply"] = applyMeth1756;
          var opresult1761 = request(opresult1755, "&&(1)", [1], block1756);
          setLineNumber(987);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1763 = request(var_p, "dtype", [0]);
          var call1762 = request(call1763, "kind", [0]);
          var string1764 = new GraceString("typeliteral");
          var opresult1765 = request(call1762, "==(1)", [1], string1764);
          var opresult1766 = request(opresult1761, "||(1)", [1], opresult1765);
          if (Grace_isTrue(opresult1766)) {
            setLineNumber(988);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1769 = request(var_p, "dtype", [0]);
            var call1768 = request(call1769, "value", [0]);
            // call case 2: outer request
            var call1767 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], call1768);
            var var_typeid = call1767;
            var if1770 = GraceDone;
            setLineNumber(989);    // compilenode call
            if (var_typeid === undefined) raiseUninitializedVariable("typeid");
            // call case 6: other requests
            if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
            var call1771 = request(var_topLevelTypes, "contains(1)", [1], var_typeid);
            if (Grace_isTrue(call1771)) {
              setLineNumber(990);    // compilenode string
              var string1773 = new GraceString("");
              var opresult1774 = request(string1773, "++(1)", [1], var_func);
              var string1775 = new GraceString(".paramTypes.push([");
              var opresult1776 = request(opresult1774, "++(1)", [1], string1775);
              setLineNumber(991);    // compilenode string
              var string1777 = new GraceString("type_");
              if (var_typeid === undefined) raiseUninitializedVariable("typeid");
              var opresult1778 = request(string1777, "++(1)", [1], var_typeid);
              var string1779 = new GraceString(", \"");
              var opresult1780 = request(opresult1778, "++(1)", [1], string1779);
              // call case 6: other requests
              var call1782 = request(var_p, "nameString", [0]);
              // call case 2: outer request
              var call1781 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call1782);
              var opresult1783 = request(opresult1780, "++(1)", [1], call1781);
              var string1784 = new GraceString("\"]);");
              var opresult1785 = request(opresult1783, "++(1)", [1], string1784);
              var opresult1786 = request(opresult1776, "++(1)", [1], opresult1785);
              // call case 2: outer request
              var call1772 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1786);
              if1770 = call1772;
            } else {
              setLineNumber(993);    // compilenode string
              var string1788 = new GraceString("");
              var opresult1789 = request(string1788, "++(1)", [1], var_func);
              var string1790 = new GraceString(".paramTypes.push([]);");
              var opresult1791 = request(opresult1789, "++(1)", [1], string1790);
              // call case 2: outer request
              var call1787 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1791);
              if1770 = call1787;
            }
            if1751 = if1770;
          } else {
            setLineNumber(996);    // compilenode string
            var string1793 = new GraceString("");
            var opresult1794 = request(string1793, "++(1)", [1], var_func);
            var string1795 = new GraceString(".paramTypes.push([]);");
            var opresult1796 = request(opresult1794, "++(1)", [1], string1795);
            // call case 2: outer request
            var call1792 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1796);
            if1751 = call1792;
          }
          if1748 = if1751;
        } else {
          setLineNumber(999);    // compilenode string
          var string1798 = new GraceString("");
          var opresult1799 = request(string1798, "++(1)", [1], var_func);
          var string1800 = new GraceString(".paramTypes.push([]);");
          var opresult1801 = request(opresult1799, "++(1)", [1], string1800);
          // call case 2: outer request
          var call1797 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1801);
          if1748 = call1797;
        }
        return if1748;
      };
      let applyMeth1747 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1747.methodName = "apply(1)";
      applyMeth1747.paramCounts = [1];
      applyMeth1747.paramNames = ["p"];
      applyMeth1747.definitionLine = 982;
      applyMeth1747.definitionModule = "genjs";
      block1747.methods["apply(1)"] = applyMeth1747;
      let matchesMeth1747 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1747.methodName = "matches(1)";
      matchesMeth1747.paramCounts = [1];
      matchesMeth1747.paramNames = ["p"];
      matchesMeth1747.definitionLine = 982;
      matchesMeth1747.definitionModule = "genjs";
      block1747.methods["matches(1)"] = matchesMeth1747;
      // call case 2: outer request
      var call1745 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1746, block1747);
      return call1745;
    };
    let applyMeth1744 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1744.methodName = "apply(1)";
    applyMeth1744.paramCounts = [1];
    applyMeth1744.paramNames = ["part"];
    applyMeth1744.definitionLine = 981;
    applyMeth1744.definitionModule = "genjs";
    block1744.methods["apply(1)"] = applyMeth1744;
    let matchesMeth1744 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1744.methodName = "matches(1)";
    matchesMeth1744.paramCounts = [1];
    matchesMeth1744.paramNames = ["part"];
    matchesMeth1744.definitionLine = 981;
    matchesMeth1744.definitionModule = "genjs";
    block1744.methods["matches(1)"] = matchesMeth1744;
    // call case 2: outer request
    var call1742 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1743, block1744);
    return call1742;
  };    // end of method compilemethodtypes(_,_)
  this.methods["compilemethodtypes(2)"] = func1736;
  func1736.methodName = "compilemethodtypes(2)";
  func1736.paramCounts = [2];
  func1736.paramNames = ["func", "o"];
  func1736.definitionLine = 979;
  func1736.definitionModule = "genjs";
  var func1802 = function(argcv, var_o) {    // method compileif(_), line 1004
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileif(_)", 0, numArgs - 1);
    }
    setLineNumber(1005);    // compilenode string
    var string1804 = new GraceString("if");
    // call case 2: outer request
    var call1803 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string1804);
    var var_ifId = call1803;
    setLineNumber(1006);    // compilenode string
    var string1806 = new GraceString("var ");
    var opresult1807 = request(string1806, "++(1)", [1], var_ifId);
    var string1808 = new GraceString(" = GraceDone;");
    var opresult1809 = request(opresult1807, "++(1)", [1], string1808);
    // call case 2: outer request
    var call1805 = selfRequest(importedModules["genjs"], "outUnnumbered(1)", [1], opresult1809);
    setLineNumber(1007);    // compilenode string
    var string1811 = new GraceString("if (Grace_isTrue(");
    // call case 6: other requests
    var call1813 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call1812 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call1813);
    var opresult1814 = request(string1811, "++(1)", [1], call1812);
    var string1815 = new GraceString(")) {");
    var opresult1816 = request(opresult1814, "++(1)", [1], string1815);
    // call case 2: outer request
    var call1810 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1816);
    setLineNumber(1008);    // compilenode string
    var string1817 = new GraceString("GraceDone");
    var var_tret = string1817;
    setLineNumber(1009);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1818 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(1010);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1819 = selfRequest(this, "saveInitializedVars", [0]);
    var var_thenSavedVars = call1819;
    setLineNumber(1011);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1821 = request(var_o, "thenblock", [0]);
    var call1820 = request(call1821, "body", [0]);
    var var_thenList = call1820;
    setLineNumber(1012);    // compilenode block
    var block1823 = new GraceBlock(this, 1012, 1);
    block1823.guard = jsTrue;
    block1823.real = function block1823(var_l) {
      setLineNumber(1013);    // compilenode call
      // call case 2: outer request
      var call1824 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_l);
      var_tret = call1824;
      return GraceDone;
    };
    let applyMeth1823 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1823.methodName = "apply(1)";
    applyMeth1823.paramCounts = [1];
    applyMeth1823.paramNames = ["l"];
    applyMeth1823.definitionLine = 1012;
    applyMeth1823.definitionModule = "genjs";
    block1823.methods["apply(1)"] = applyMeth1823;
    let matchesMeth1823 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1823.methodName = "matches(1)";
    matchesMeth1823.paramCounts = [1];
    matchesMeth1823.paramNames = ["l"];
    matchesMeth1823.definitionLine = 1012;
    matchesMeth1823.definitionModule = "genjs";
    block1823.methods["matches(1)"] = matchesMeth1823;
    // call case 2: outer request
    var call1822 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_thenList, block1823);
    var if1825 = GraceDone;
    setLineNumber(1015);    // compilenode string
    var string1826 = new GraceString("never returns");
    var opresult1827 = request(var_tret, "\u2260(1)", [1], string1826);
    if (Grace_isTrue(opresult1827)) {
      setLineNumber(1016);    // compilenode string
      var string1829 = new GraceString("");
      if (var_ifId === undefined) raiseUninitializedVariable("ifId");
      var opresult1830 = request(string1829, "++(1)", [1], var_ifId);
      var string1831 = new GraceString(" = ");
      var opresult1832 = request(opresult1830, "++(1)", [1], string1831);
      if (var_tret === undefined) raiseUninitializedVariable("tret");
      var opresult1833 = request(opresult1832, "++(1)", [1], var_tret);
      var string1834 = new GraceString(";");
      var opresult1835 = request(opresult1833, "++(1)", [1], string1834);
      // call case 2: outer request
      var call1828 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1835);
      if1825 = call1828;
    }
    setLineNumber(1018);    // compilenode call
    // call case 2: outer request
    var call1836 = selfRequest(importedModules["genjs"], "restoreInitializedVars(1)", [1], var_thenSavedVars);
    setLineNumber(1019);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1837 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(1020);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1839 = request(var_o, "elseblock", [0]);
    var call1838 = request(call1839, "body", [0]);
    var var_elseList = call1838;
    setLineNumber(1021);    // compilenode string
    var string1840 = new GraceString("GraceDone");
    var var_fret = string1840;
    var if1841 = GraceDone;
    setLineNumber(1022);    // compilenode member
    // call case 6: other requests
    var call1842 = request(var_elseList, "size", [0]);
    var opresult1843 = request(call1842, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult1843)) {
      setLineNumber(1023);    // compilenode string
      var string1845 = new GraceString("} else {");
      // call case 2: outer request
      var call1844 = selfRequest(importedModules["genjs"], "out(1)", [1], string1845);
      setLineNumber(1024);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1846 = selfRequest(this, "increaseindent", [0]);
      setLineNumber(1025);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1847 = selfRequest(this, "saveInitializedVars", [0]);
      var var_elseSavedVars = call1847;
      setLineNumber(1026);    // compilenode call
      if (var_elseList === undefined) raiseUninitializedVariable("elseList");
      var block1849 = new GraceBlock(this, 1026, 1);
      block1849.guard = jsTrue;
      block1849.real = function block1849(var_l) {
        setLineNumber(1027);    // compilenode call
        // call case 2: outer request
        var call1850 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_l);
        var_fret = call1850;
        return GraceDone;
      };
      let applyMeth1849 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1849.methodName = "apply(1)";
      applyMeth1849.paramCounts = [1];
      applyMeth1849.paramNames = ["l"];
      applyMeth1849.definitionLine = 1026;
      applyMeth1849.definitionModule = "genjs";
      block1849.methods["apply(1)"] = applyMeth1849;
      let matchesMeth1849 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1849.methodName = "matches(1)";
      matchesMeth1849.paramCounts = [1];
      matchesMeth1849.paramNames = ["l"];
      matchesMeth1849.definitionLine = 1026;
      matchesMeth1849.definitionModule = "genjs";
      block1849.methods["matches(1)"] = matchesMeth1849;
      // call case 2: outer request
      var call1848 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_elseList, block1849);
      var if1851 = GraceDone;
      setLineNumber(1029);    // compilenode op
      if (var_fret === undefined) raiseUninitializedVariable("fret");
      var string1852 = new GraceString("never returns");
      var opresult1853 = request(var_fret, "\u2260(1)", [1], string1852);
      if (Grace_isTrue(opresult1853)) {
        setLineNumber(1030);    // compilenode string
        var string1855 = new GraceString("");
        if (var_ifId === undefined) raiseUninitializedVariable("ifId");
        var opresult1856 = request(string1855, "++(1)", [1], var_ifId);
        var string1857 = new GraceString(" = ");
        var opresult1858 = request(opresult1856, "++(1)", [1], string1857);
        if (var_fret === undefined) raiseUninitializedVariable("fret");
        var opresult1859 = request(opresult1858, "++(1)", [1], var_fret);
        var string1860 = new GraceString(";");
        var opresult1861 = request(opresult1859, "++(1)", [1], string1860);
        // call case 2: outer request
        var call1854 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1861);
        if1851 = call1854;
      }
      setLineNumber(1032);    // compilenode call
      if (var_elseSavedVars === undefined) raiseUninitializedVariable("elseSavedVars");
      // call case 2: outer request
      var call1862 = selfRequest(importedModules["genjs"], "restoreInitializedVars(1)", [1], var_elseSavedVars);
      setLineNumber(1033);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1863 = selfRequest(this, "decreaseindent", [0]);
      if1841 = call1863;
    }
    setLineNumber(1035);    // compilenode string
    var string1865 = new GraceString("}");
    // call case 2: outer request
    var call1864 = selfRequest(importedModules["genjs"], "out(1)", [1], string1865);
    setLineNumber(1036);    // compilenode call
    // call case 6: other requests
    var call1866 = request(var_o, "register:=(1)", [1], var_ifId);
    return call1866;
  };    // end of method compileif(_)
  this.methods["compileif(1)"] = func1802;
  func1802.methodName = "compileif(1)";
  func1802.paramCounts = [1];
  func1802.paramNames = ["o"];
  func1802.definitionLine = 1004;
  func1802.definitionModule = "genjs";
  var func1867 = function(argcv, var_o) {    // method compileidentifier(_), line 1038
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileidentifier(_)", 0, numArgs - 1);
    }
    setLineNumber(1039);    // compilenode member
    // call case 6: other requests
    var call1868 = request(var_o, "value", [0]);
    var var_name = call1868;
    var if1869 = GraceDone;
    setLineNumber(1040);    // compilenode string
    var string1870 = new GraceString("self");
    var opresult1871 = request(var_name, "==(1)", [1], string1870);
    if (Grace_isTrue(opresult1871)) {
      setLineNumber(1041);    // compilenode string
      var string1873 = new GraceString("this");
      // call case 6: other requests
      var call1872 = request(var_o, "register:=(1)", [1], string1873);
      if1869 = call1872;
    } else {
      var if1874 = GraceDone;
      setLineNumber(1042);    // compilenode op
      if (var_name === undefined) raiseUninitializedVariable("name");
      var string1875 = new GraceString("...");
      var opresult1876 = request(var_name, "==(1)", [1], string1875);
      if (Grace_isTrue(opresult1876)) {
        setLineNumber(1043);    // compilenode string
        var string1878 = new GraceString("ellipsis");
        // call case 6: other requests
        var call1877 = request(var_o, "register:=(1)", [1], string1878);
        if1874 = call1877;
      } else {
        var if1879 = GraceDone;
        setLineNumber(1044);    // compilenode op
        if (var_name === undefined) raiseUninitializedVariable("name");
        var string1880 = new GraceString("module()object");
        var opresult1881 = request(var_name, "==(1)", [1], string1880);
        if (Grace_isTrue(opresult1881)) {
          setLineNumber(1045);    // compilenode string
          var string1883 = new GraceString("importedModules[");
          if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
          var opresult1884 = request(string1883, "++(1)", [1], var_modNameAsString);
          var string1885 = new GraceString("]");
          var opresult1886 = request(opresult1884, "++(1)", [1], string1885);
          // call case 6: other requests
          var call1882 = request(var_o, "register:=(1)", [1], opresult1886);
          if1879 = call1882;
        } else {
          var if1887 = GraceDone;
          setLineNumber(1046);    // compilenode op
          if (var_name === undefined) raiseUninitializedVariable("name");
          var string1888 = new GraceString("true");
          var opresult1889 = request(var_name, "==(1)", [1], string1888);
          if (Grace_isTrue(opresult1889)) {
            setLineNumber(1047);    // compilenode string
            var string1891 = new GraceString("GraceTrue");
            // call case 6: other requests
            var call1890 = request(var_o, "register:=(1)", [1], string1891);
            if1887 = call1890;
          } else {
            var if1892 = GraceDone;
            setLineNumber(1048);    // compilenode op
            if (var_name === undefined) raiseUninitializedVariable("name");
            var string1893 = new GraceString("false");
            var opresult1894 = request(var_name, "==(1)", [1], string1893);
            if (Grace_isTrue(opresult1894)) {
              setLineNumber(1049);    // compilenode string
              var string1896 = new GraceString("GraceFalse");
              // call case 6: other requests
              var call1895 = request(var_o, "register:=(1)", [1], string1896);
              if1892 = call1895;
            } else {
              setLineNumber(1051);    // compilenode call
              // call case 2: outer request
              var call1897 = selfRequest(importedModules["genjs"], "compileUninitializedCheck(1)", [1], var_o);
              setLineNumber(1052);    // compilenode call
              if (var_name === undefined) raiseUninitializedVariable("name");
              // call case 6: other requests
              if (var_usedvars === undefined) raiseUninitializedVariable("usedvars");
              var call1898 = request(var_usedvars, "push(1)", [1], var_name);
              setLineNumber(1053);    // compilenode call
              if (var_name === undefined) raiseUninitializedVariable("name");
              // call case 2: outer request
              var call1900 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_name);
              // call case 6: other requests
              var call1899 = request(var_o, "register:=(1)", [1], call1900);
              if1892 = call1899;
            }
            if1887 = if1892;
          }
          if1879 = if1887;
        }
        if1874 = if1879;
      }
      if1869 = if1874;
    }
    return if1869;
  };    // end of method compileidentifier(_)
  this.methods["compileidentifier(1)"] = func1867;
  func1867.methodName = "compileidentifier(1)";
  func1867.paramCounts = [1];
  func1867.paramNames = ["o"];
  func1867.definitionLine = 1038;
  func1867.definitionModule = "genjs";
  var func1901 = function(argcv, var_o) {    // method compilebind(_), line 1056
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilebind(_)", 0, numArgs - 1);
    }
    setLineNumber(1057);    // compilenode member
    // call case 6: other requests
    var call1902 = request(var_o, "dest", [0]);
    var var_lhs = call1902;
    var if1903 = GraceDone;
    setLineNumber(1058);    // compilenode member
    // call case 6: other requests
    var call1904 = request(var_lhs, "isIdentifier", [0]);
    if (Grace_isTrue(call1904)) {
      setLineNumber(1059);    // compilenode member
      // call case 6: other requests
      var call1906 = request(var_o, "value", [0]);
      // call case 2: outer request
      var call1905 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call1906);
      var var_val = call1905;
      setLineNumber(1060);    // compilenode member
      // call case 6: other requests
      if (var_lhs === undefined) raiseUninitializedVariable("lhs");
      var call1907 = request(var_lhs, "value", [0]);
      var var_nm = call1907;
      setLineNumber(1061);    // compilenode call
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 6: other requests
      if (var_usedvars === undefined) raiseUninitializedVariable("usedvars");
      var call1908 = request(var_usedvars, "push(1)", [1], var_nm);
      setLineNumber(1062);    // compilenode string
      var string1910 = new GraceString("");
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 2: outer request
      var call1911 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
      var opresult1912 = request(string1910, "++(1)", [1], call1911);
      var string1913 = new GraceString(" = ");
      var opresult1914 = request(opresult1912, "++(1)", [1], string1913);
      if (var_val === undefined) raiseUninitializedVariable("val");
      var opresult1915 = request(opresult1914, "++(1)", [1], var_val);
      var string1916 = new GraceString(";");
      var opresult1917 = request(opresult1915, "++(1)", [1], string1916);
      // call case 2: outer request
      var call1909 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1917);
      var if1918 = GraceDone;
      setLineNumber(1063);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1920 = request(var_o, "scope", [0]);
      var call1919 = request(call1920, "isInheritableScope", [0]);
      if (Grace_isTrue(call1919)) {
        setLineNumber(1067);    // compilenode call
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        // call case 6: other requests
        if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
        var call1921 = request(var_initializedVars, "add(1)", [1], var_nm);
        if1918 = call1921;
      }
      setLineNumber(1069);    // compilenode string
      var string1923 = new GraceString("GraceDone");
      // call case 6: other requests
      var call1922 = request(var_o, "register:=(1)", [1], string1923);
      if1903 = call1922;
    } else {
      setLineNumber(1071);    // compilenode string
      var string1925 = new GraceString("bindNode ");
      var opresult1926 = request(string1925, "++(1)", [1], var_o);
      var string1927 = new GraceString(" does not bind an identifer");
      var opresult1928 = request(opresult1926, "++(1)", [1], string1927);
      // call case 6: other requests
      // call case 2: outer request
      var call1929 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call1924 = request(call1929, "raise(1)", [1], opresult1928);
      if1903 = call1924;
    }
    return if1903;
  };    // end of method compilebind(_)
  this.methods["compilebind(1)"] = func1901;
  func1901.methodName = "compilebind(1)";
  func1901.paramCounts = [1];
  func1901.paramNames = ["o"];
  func1901.definitionLine = 1056;
  func1901.definitionModule = "genjs";
  var func1930 = function(argcv, var_o) {    // method compiledefdec(_), line 1074
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compiledefdec(_)", 0, numArgs - 1);
    }
    setLineNumber(1075);    // compilenode member
    // call case 6: other requests
    var call1931 = request(var_o, "scope", [0]);
    var var_currentScope = call1931;
    var if1932 = GraceDone;
    setLineNumber(1076);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1934 = request(var_o, "name", [0]);
    var call1933 = request(call1934, "kind", [0]);
    var string1935 = new GraceString("generic");
    var opresult1936 = request(call1933, "==(1)", [1], string1935);
    if (Grace_isTrue(opresult1936)) {
      setLineNumber(1077);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1939 = request(var_o, "name", [0]);
      var call1938 = request(call1939, "value", [0]);
      var call1937 = request(call1938, "value", [0]);
      if1932 = call1937;
    } else {
      setLineNumber(1079);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1941 = request(var_o, "name", [0]);
      var call1940 = request(call1941, "value", [0]);
      if1932 = call1940;
    }
    var var_nm = if1932;
    setLineNumber(1081);    // compilenode call
    // call case 2: outer request
    var call1942 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
    var var_var__95__nm = call1942;
    setLineNumber(1082);    // compilenode call
    // call case 6: other requests
    if (var_declaredvars === undefined) raiseUninitializedVariable("declaredvars");
    var call1943 = request(var_declaredvars, "push(1)", [1], var_nm);
    var if1944 = GraceDone;
    setLineNumber(1083);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1084);    // compilenode string
      var string1946 = new GraceString("myframe.addVar(\"");
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 2: outer request
      var call1947 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_nm);
      var opresult1948 = request(string1946, "++(1)", [1], call1947);
      var string1949 = new GraceString("\", function() {return ");
      var opresult1950 = request(opresult1948, "++(1)", [1], string1949);
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 2: outer request
      var call1951 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
      var opresult1952 = request(opresult1950, "++(1)", [1], call1951);
      var string1953 = new GraceString("});");
      var opresult1954 = request(opresult1952, "++(1)", [1], string1953);
      // call case 2: outer request
      var call1945 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1954);
      if1944 = call1945;
    }
    setLineNumber(1086);    // compilenode member
    // call case 6: other requests
    var call1956 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call1955 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call1956);
    var var_val = call1955;
    setLineNumber(1087);    // compilenode string
    var string1958 = new GraceString("var ");
    var opresult1959 = request(string1958, "++(1)", [1], var_var__95__nm);
    var string1960 = new GraceString(" = ");
    var opresult1961 = request(opresult1959, "++(1)", [1], string1960);
    var opresult1962 = request(opresult1961, "++(1)", [1], var_val);
    var string1963 = new GraceString(";");
    var opresult1964 = request(opresult1962, "++(1)", [1], string1963);
    // call case 2: outer request
    var call1957 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult1964);
    setLineNumber(1088);    // compilenode member
    // call case 6: other requests
    var call1965 = request(var_o, "parentKind", [0]);
    var var_parentNodeKind = call1965;
    var if1966 = GraceDone;
    setLineNumber(1089);    // compilenode string
    var string1967 = new GraceString("module");
    var opresult1968 = request(var_parentNodeKind, "==(1)", [1], string1967);
    if (Grace_isTrue(opresult1968)) {
      setLineNumber(1090);    // compilenode string
      var string1970 = new GraceString("def");
      var string1971 = new GraceString("this");
      // call case 2: outer request
      var call1969 = selfRequest(importedModules["genjs"], "create(1)field(1)in(1)", [1, 1, 1], string1970, var_o, string1971);
      if1966 = call1969;
    } else {
      var if1972 = GraceDone;
      setLineNumber(1091);    // compilenode op
      if (var_parentNodeKind === undefined) raiseUninitializedVariable("parentNodeKind");
      var string1973 = new GraceString("method");
      var opresult1974 = request(var_parentNodeKind, "==(1)", [1], string1973);
      if (Grace_isTrue(opresult1974)) {
        setLineNumber(1092);    // compilenode call
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        // call case 6: other requests
        if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
        var call1975 = request(var_initializedVars, "add(1)", [1], var_nm);
        if1972 = call1975;
      }
      if1966 = if1972;
    }
    setLineNumber(1094);    // compilenode string
    var string1977 = new GraceString("value of def ");
    var opresult1978 = request(string1977, "++(1)", [1], var_nm);
    var string1979 = new GraceString("");
    var opresult1980 = request(opresult1978, "++(1)", [1], string1979);
    setLineNumber(1095);    // compilenode member
    // call case 6: other requests
    var call1981 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    var call1982 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call1976 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_var__95__nm, opresult1980, call1981, call1982);
    setLineNumber(1096);    // compilenode string
    var string1984 = new GraceString("GraceDone");
    // call case 6: other requests
    var call1983 = request(var_o, "register:=(1)", [1], string1984);
    return call1983;
  };    // end of method compiledefdec(_)
  this.methods["compiledefdec(1)"] = func1930;
  func1930.methodName = "compiledefdec(1)";
  func1930.paramCounts = [1];
  func1930.paramNames = ["o"];
  func1930.definitionLine = 1074;
  func1930.definitionModule = "genjs";
  var func1985 = function(argcv, var_o) {    // method compilevardec(_), line 1098
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilevardec(_)", 0, numArgs - 1);
    }
    setLineNumber(1099);    // compilenode member
    // call case 6: other requests
    var call1986 = request(var_o, "scope", [0]);
    var var_currentScope = call1986;
    setLineNumber(1100);    // compilenode member
    // call case 6: other requests
    var call1987 = request(var_o, "parentKind", [0]);
    var var_parentNodeKind = call1987;
    var if1988 = GraceDone;
    setLineNumber(1101);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1990 = request(var_o, "name", [0]);
    var call1989 = request(call1990, "kind", [0]);
    var string1991 = new GraceString("generic");
    var opresult1992 = request(call1989, "==(1)", [1], string1991);
    if (Grace_isTrue(opresult1992)) {
      setLineNumber(1102);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1995 = request(var_o, "name", [0]);
      var call1994 = request(call1995, "value", [0]);
      var call1993 = request(call1994, "value", [0]);
      if1988 = call1993;
    } else {
      setLineNumber(1104);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1997 = request(var_o, "name", [0]);
      var call1996 = request(call1997, "value", [0]);
      if1988 = call1996;
    }
    var var_nm = if1988;
    setLineNumber(1106);    // compilenode call
    // call case 2: outer request
    var call1998 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
    var var_var__95__nm = call1998;
    setLineNumber(1107);    // compilenode call
    // call case 6: other requests
    if (var_declaredvars === undefined) raiseUninitializedVariable("declaredvars");
    var call1999 = request(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(1108);    // compilenode member
    // call case 6: other requests
    var call2000 = request(var_o, "value", [0]);
    var var_rhs = call2000;
    var if2001 = GraceDone;
    setLineNumber(1109);    // compilenode op
    var opresult2002 = request(GraceFalse, "\u2260(1)", [1], var_rhs);
    if (Grace_isTrue(opresult2002)) {
      setLineNumber(1110);    // compilenode call
      if (var_rhs === undefined) raiseUninitializedVariable("rhs");
      // call case 2: outer request
      var call2003 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_rhs);
      var var_val = call2003;
      setLineNumber(1111);    // compilenode call
      if (var_val === undefined) raiseUninitializedVariable("val");
      var string2005 = new GraceString("initial value of var ");
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var opresult2006 = request(string2005, "++(1)", [1], var_nm);
      var string2007 = new GraceString("");
      var opresult2008 = request(opresult2006, "++(1)", [1], string2007);
      setLineNumber(1112);    // compilenode member
      // call case 6: other requests
      var call2009 = request(var_o, "dtype", [0]);
      // call case 6: other requests
      var call2010 = request(var_o, "line", [0]);
      // call case 2: outer request
      var call2004 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_val, opresult2008, call2009, call2010);
      setLineNumber(1113);    // compilenode string
      var string2012 = new GraceString("var ");
      if (var_var__95__nm === undefined) raiseUninitializedVariable("var_nm");
      var opresult2013 = request(string2012, "++(1)", [1], var_var__95__nm);
      var string2014 = new GraceString(" = ");
      var opresult2015 = request(opresult2013, "++(1)", [1], string2014);
      if (var_val === undefined) raiseUninitializedVariable("val");
      var opresult2016 = request(opresult2015, "++(1)", [1], var_val);
      var string2017 = new GraceString(";");
      var opresult2018 = request(opresult2016, "++(1)", [1], string2017);
      // call case 2: outer request
      var call2011 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2018);
      var if2019 = GraceDone;
      setLineNumber(1114);    // compilenode call
      if (var_parentNodeKind === undefined) raiseUninitializedVariable("parentNodeKind");
      // call case 6: other requests
      var string2021 = new GraceString("module | method | dialect");
      var call2020 = request(string2021, "contains(1)", [1], var_parentNodeKind);
      if (Grace_isTrue(call2020)) {
        setLineNumber(1115);    // compilenode call
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        // call case 6: other requests
        if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
        var call2022 = request(var_initializedVars, "add(1)", [1], var_nm);
        if2019 = call2022;
      }
      if2001 = if2019;
    } else {
      setLineNumber(1118);    // compilenode string
      var string2024 = new GraceString("var ");
      if (var_var__95__nm === undefined) raiseUninitializedVariable("var_nm");
      var opresult2025 = request(string2024, "++(1)", [1], var_var__95__nm);
      var string2026 = new GraceString(";");
      var opresult2027 = request(opresult2025, "++(1)", [1], string2026);
      // call case 2: outer request
      var call2023 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2027);
      if2001 = call2023;
    }
    var if2028 = GraceDone;
    setLineNumber(1120);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1121);    // compilenode string
      var string2030 = new GraceString("myframe.addVar(\"");
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 2: outer request
      var call2031 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_nm);
      var opresult2032 = request(string2030, "++(1)", [1], call2031);
      var string2033 = new GraceString("\", function() {return ");
      var opresult2034 = request(opresult2032, "++(1)", [1], string2033);
      if (var_var__95__nm === undefined) raiseUninitializedVariable("var_nm");
      var opresult2035 = request(opresult2034, "++(1)", [1], var_var__95__nm);
      var string2036 = new GraceString("});");
      var opresult2037 = request(opresult2035, "++(1)", [1], string2036);
      // call case 2: outer request
      var call2029 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2037);
      if2028 = call2029;
    }
    var if2038 = GraceDone;
    setLineNumber(1123);    // compilenode string
    var string2039 = new GraceString("module");
    var opresult2040 = request(var_parentNodeKind, "==(1)", [1], string2039);
    if (Grace_isTrue(opresult2040)) {
      setLineNumber(1124);    // compilenode string
      var string2042 = new GraceString("var");
      var string2043 = new GraceString("this");
      // call case 2: outer request
      var call2041 = selfRequest(importedModules["genjs"], "create(1)field(1)in(1)", [1, 1, 1], string2042, var_o, string2043);
      if2038 = call2041;
    }
    setLineNumber(1126);    // compilenode string
    var string2045 = new GraceString("GraceDone");
    // call case 6: other requests
    var call2044 = request(var_o, "register:=(1)", [1], string2045);
    return call2044;
  };    // end of method compilevardec(_)
  this.methods["compilevardec(1)"] = func1985;
  func1985.methodName = "compilevardec(1)";
  func1985.paramCounts = [1];
  func1985.paramNames = ["o"];
  func1985.definitionLine = 1098;
  func1985.definitionModule = "genjs";
  var func2046 = function(argcv, var_o) {    // method compiletrycatch(_), line 1128
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compiletrycatch(_)", 0, numArgs - 1);
    }
    setLineNumber(1129);    // compilenode defdec
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var var_myc = var_auto__95__count;
    setLineNumber(1130);    // compilenode op
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var sum2047 = request(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = sum2047;
    setLineNumber(1131);    // compilenode member
    // call case 6: other requests
    var call2048 = request(var_o, "cases", [0]);
    var var_cases = call2048;
    setLineNumber(1132);    // compilenode member
    // call case 6: other requests
    var call2050 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call2049 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2050);
    var var_mainblock = call2049;
    setLineNumber(1133);    // compilenode string
    var string2052 = new GraceString("var cases");
    var opresult2053 = request(string2052, "++(1)", [1], var_myc);
    var string2054 = new GraceString(" = [];");
    var opresult2055 = request(opresult2053, "++(1)", [1], string2054);
    // call case 2: outer request
    var call2051 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2055);
    setLineNumber(1134);    // compilenode block
    var block2057 = new GraceBlock(this, 1134, 1);
    block2057.guard = jsTrue;
    block2057.real = function block2057(var_c) {
      setLineNumber(1135);    // compilenode call
      // call case 2: outer request
      var call2058 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_c);
      var var_e = call2058;
      setLineNumber(1136);    // compilenode string
      var string2060 = new GraceString("cases");
      if (var_myc === undefined) raiseUninitializedVariable("myc");
      var opresult2061 = request(string2060, "++(1)", [1], var_myc);
      var string2062 = new GraceString(".push(");
      var opresult2063 = request(opresult2061, "++(1)", [1], string2062);
      if (var_e === undefined) raiseUninitializedVariable("e");
      var opresult2064 = request(opresult2063, "++(1)", [1], var_e);
      var string2065 = new GraceString(");");
      var opresult2066 = request(opresult2064, "++(1)", [1], string2065);
      // call case 2: outer request
      var call2059 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2066);
      return call2059;
    };
    let applyMeth2057 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2057.methodName = "apply(1)";
    applyMeth2057.paramCounts = [1];
    applyMeth2057.paramNames = ["c"];
    applyMeth2057.definitionLine = 1134;
    applyMeth2057.definitionModule = "genjs";
    block2057.methods["apply(1)"] = applyMeth2057;
    let matchesMeth2057 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2057.methodName = "matches(1)";
    matchesMeth2057.paramCounts = [1];
    matchesMeth2057.paramNames = ["c"];
    matchesMeth2057.definitionLine = 1134;
    matchesMeth2057.definitionModule = "genjs";
    block2057.methods["matches(1)"] = matchesMeth2057;
    // call case 2: outer request
    var call2056 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_cases, block2057);
    setLineNumber(1138);    // compilenode string
    var string2067 = new GraceString("false");
    var var_finally = string2067;
    var if2068 = GraceDone;
    setLineNumber(1139);    // compilenode member
    // call case 6: other requests
    var call2069 = request(var_o, "finally", [0]);
    var opresult2070 = request(GraceFalse, "\u2260(1)", [1], call2069);
    if (Grace_isTrue(opresult2070)) {
      setLineNumber(1140);    // compilenode member
      // call case 6: other requests
      var call2072 = request(var_o, "finally", [0]);
      // call case 2: outer request
      var call2071 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2072);
      var_finally = call2071;
      if2068 = GraceDone;
    }
    setLineNumber(1142);    // compilenode member
    // call case 6: other requests
    var call2074 = request(var_o, "line", [0]);
    var string2075 = new GraceString("compiletrycatch");
    // call case 2: outer request
    var call2073 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call2074, string2075);
    setLineNumber(1143);    // compilenode string
    var string2077 = new GraceString("var catchres");
    var opresult2078 = request(string2077, "++(1)", [1], var_myc);
    var string2079 = new GraceString(" = tryCatch(");
    var opresult2080 = request(opresult2078, "++(1)", [1], string2079);
    var opresult2081 = request(opresult2080, "++(1)", [1], var_mainblock);
    var string2082 = new GraceString(",cases");
    var opresult2083 = request(opresult2081, "++(1)", [1], string2082);
    var opresult2084 = request(opresult2083, "++(1)", [1], var_myc);
    var string2085 = new GraceString(",");
    var opresult2086 = request(opresult2084, "++(1)", [1], string2085);
    var opresult2087 = request(opresult2086, "++(1)", [1], var_finally);
    var string2088 = new GraceString(");");
    var opresult2089 = request(opresult2087, "++(1)", [1], string2088);
    // call case 2: outer request
    var call2076 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2089);
    setLineNumber(1144);    // compilenode string
    var string2091 = new GraceString("catchres");
    var opresult2092 = request(string2091, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call2090 = request(var_o, "register:=(1)", [1], opresult2092);
    return call2090;
  };    // end of method compiletrycatch(_)
  this.methods["compiletrycatch(1)"] = func2046;
  func2046.methodName = "compiletrycatch(1)";
  func2046.paramCounts = [1];
  func2046.paramNames = ["o"];
  func2046.definitionLine = 1128;
  func2046.definitionModule = "genjs";
  var func2093 = function(argcv, var_o) {    // method compilematchcase(_), line 1146
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilematchcase(_)", 0, numArgs - 1);
    }
    setLineNumber(1147);    // compilenode defdec
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var var_myc = var_auto__95__count;
    setLineNumber(1148);    // compilenode op
    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
    var sum2094 = request(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = sum2094;
    setLineNumber(1149);    // compilenode member
    // call case 6: other requests
    var call2095 = request(var_o, "cases", [0]);
    var var_cases = call2095;
    setLineNumber(1150);    // compilenode member
    // call case 6: other requests
    var call2097 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call2096 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2097);
    var var_matchee = call2096;
    setLineNumber(1151);    // compilenode string
    var string2099 = new GraceString("var cases");
    var opresult2100 = request(string2099, "++(1)", [1], var_myc);
    var string2101 = new GraceString(" = [];");
    var opresult2102 = request(opresult2100, "++(1)", [1], string2101);
    // call case 2: outer request
    var call2098 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2102);
    setLineNumber(1152);    // compilenode block
    var block2104 = new GraceBlock(this, 1152, 1);
    block2104.guard = jsTrue;
    block2104.real = function block2104(var_c) {
      setLineNumber(1153);    // compilenode call
      // call case 2: outer request
      var call2105 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_c);
      var var_e = call2105;
      setLineNumber(1154);    // compilenode string
      var string2107 = new GraceString("cases");
      if (var_myc === undefined) raiseUninitializedVariable("myc");
      var opresult2108 = request(string2107, "++(1)", [1], var_myc);
      var string2109 = new GraceString(".push(");
      var opresult2110 = request(opresult2108, "++(1)", [1], string2109);
      if (var_e === undefined) raiseUninitializedVariable("e");
      var opresult2111 = request(opresult2110, "++(1)", [1], var_e);
      var string2112 = new GraceString(");");
      var opresult2113 = request(opresult2111, "++(1)", [1], string2112);
      // call case 2: outer request
      var call2106 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2113);
      return call2106;
    };
    let applyMeth2104 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2104.methodName = "apply(1)";
    applyMeth2104.paramCounts = [1];
    applyMeth2104.paramNames = ["c"];
    applyMeth2104.definitionLine = 1152;
    applyMeth2104.definitionModule = "genjs";
    block2104.methods["apply(1)"] = applyMeth2104;
    let matchesMeth2104 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2104.methodName = "matches(1)";
    matchesMeth2104.paramCounts = [1];
    matchesMeth2104.paramNames = ["c"];
    matchesMeth2104.definitionLine = 1152;
    matchesMeth2104.definitionModule = "genjs";
    block2104.methods["matches(1)"] = matchesMeth2104;
    // call case 2: outer request
    var call2103 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_cases, block2104);
    setLineNumber(1156);    // compilenode string
    var string2114 = new GraceString("false");
    var var_elsecase = string2114;
    var if2115 = GraceDone;
    setLineNumber(1157);    // compilenode member
    // call case 6: other requests
    var call2116 = request(var_o, "elsecase", [0]);
    var opresult2117 = request(GraceFalse, "\u2260(1)", [1], call2116);
    if (Grace_isTrue(opresult2117)) {
      setLineNumber(1158);    // compilenode member
      // call case 6: other requests
      var call2119 = request(var_o, "elsecase", [0]);
      // call case 2: outer request
      var call2118 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2119);
      var_elsecase = call2118;
      if2115 = GraceDone;
    }
    setLineNumber(1160);    // compilenode member
    // call case 6: other requests
    var call2121 = request(var_o, "line", [0]);
    var string2122 = new GraceString("compilematchcase");
    // call case 2: outer request
    var call2120 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call2121, string2122);
    setLineNumber(1161);    // compilenode string
    var string2124 = new GraceString("var matchres");
    var opresult2125 = request(string2124, "++(1)", [1], var_myc);
    var string2126 = new GraceString(" = matchCase(");
    var opresult2127 = request(opresult2125, "++(1)", [1], string2126);
    var opresult2128 = request(opresult2127, "++(1)", [1], var_matchee);
    var string2129 = new GraceString(",cases");
    var opresult2130 = request(opresult2128, "++(1)", [1], string2129);
    var opresult2131 = request(opresult2130, "++(1)", [1], var_myc);
    var string2132 = new GraceString(",");
    var opresult2133 = request(opresult2131, "++(1)", [1], string2132);
    var opresult2134 = request(opresult2133, "++(1)", [1], var_elsecase);
    var string2135 = new GraceString(");");
    var opresult2136 = request(opresult2134, "++(1)", [1], string2135);
    // call case 2: outer request
    var call2123 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2136);
    setLineNumber(1162);    // compilenode string
    var string2138 = new GraceString("matchres");
    var opresult2139 = request(string2138, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call2137 = request(var_o, "register:=(1)", [1], opresult2139);
    return call2137;
  };    // end of method compilematchcase(_)
  this.methods["compilematchcase(1)"] = func2093;
  func2093.methodName = "compilematchcase(1)";
  func2093.paramCounts = [1];
  func2093.paramNames = ["o"];
  func2093.definitionLine = 1146;
  func2093.definitionModule = "genjs";
  var func2140 = function(argcv, var_o) {    // method compileop(_), line 1164
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileop(_)", 0, numArgs - 1);
    }
    setLineNumber(1165);    // compilenode member
    // call case 6: other requests
    var call2142 = request(var_o, "left", [0]);
    // call case 2: outer request
    var call2141 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2142);
    var var_left = call2141;
    setLineNumber(1166);    // compilenode member
    // call case 6: other requests
    var call2143 = request(var_o, "right", [0]);
    var var_opRight = call2143;
    setLineNumber(1167);    // compilenode call
    // call case 2: outer request
    var call2144 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_opRight);
    var var_right = call2144;
    setLineNumber(1168);    // compilenode member
    // call case 6: other requests
    var call2145 = request(var_o, "value", [0]);
    var var_opSym = call2145;
    var if2146 = GraceDone;
    setLineNumber(1169);    // compilenode string
    var string2147 = new GraceString("+");
    var opresult2148 = request(var_opSym, "==(1)", [1], string2147);
    if (Grace_isTrue(opresult2148)) {
      var string2149 = new GraceString("sum");
      if2146 = string2149;
    } else {
      var if2150 = GraceDone;
      setLineNumber(1170);    // compilenode op
      if (var_opSym === undefined) raiseUninitializedVariable("opSym");
      var string2151 = new GraceString("*");
      var opresult2152 = request(var_opSym, "==(1)", [1], string2151);
      if (Grace_isTrue(opresult2152)) {
        var string2153 = new GraceString("prod");
        if2150 = string2153;
      } else {
        var if2154 = GraceDone;
        setLineNumber(1171);    // compilenode op
        if (var_opSym === undefined) raiseUninitializedVariable("opSym");
        var string2155 = new GraceString("-");
        var opresult2156 = request(var_opSym, "==(1)", [1], string2155);
        if (Grace_isTrue(opresult2156)) {
          var string2157 = new GraceString("diff");
          if2154 = string2157;
        } else {
          var if2158 = GraceDone;
          setLineNumber(1172);    // compilenode op
          if (var_opSym === undefined) raiseUninitializedVariable("opSym");
          var string2159 = new GraceString("/");
          var opresult2160 = request(var_opSym, "==(1)", [1], string2159);
          if (var_opSym === undefined) raiseUninitializedVariable("opSym");
          var string2161 = new GraceString("\u00f7");
          var opresult2162 = request(var_opSym, "==(1)", [1], string2161);
          var opresult2163 = request(opresult2160, "||(1)", [1], opresult2162);
          if (Grace_isTrue(opresult2163)) {
            var string2164 = new GraceString("quotient");
            if2158 = string2164;
          } else {
            var if2165 = GraceDone;
            setLineNumber(1173);    // compilenode member
            // call case 6: other requests
            var call2166 = request(var_o, "value", [0]);
            var string2167 = new GraceString("%");
            var opresult2168 = request(call2166, "==(1)", [1], string2167);
            if (Grace_isTrue(opresult2168)) {
              var string2169 = new GraceString("modulus");
              if2165 = string2169;
            } else {
              setLineNumber(1174);    // compilenode string
              var string2170 = new GraceString("opresult");
              if2165 = string2170;
            }
            if2158 = if2165;
          }
          if2154 = if2158;
        }
        if2150 = if2154;
      }
      if2146 = if2150;
    }
    var var_rnm = if2146;
    setLineNumber(1175);    // compilenode call
    // call case 2: outer request
    var call2171 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], var_rnm);
    var var_register = call2171;
    setLineNumber(1176);    // compilenode string
    var string2173 = new GraceString("var ");
    var opresult2174 = request(string2173, "++(1)", [1], var_register);
    var string2175 = new GraceString(" = request(");
    var opresult2176 = request(opresult2174, "++(1)", [1], string2175);
    var opresult2177 = request(opresult2176, "++(1)", [1], var_left);
    var string2178 = new GraceString(", \"");
    var opresult2179 = request(opresult2177, "++(1)", [1], string2178);
    setLineNumber(1177);    // compilenode string
    var string2180 = new GraceString("");
    // call case 6: other requests
    var call2182 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2181 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2182);
    var opresult2183 = request(string2180, "++(1)", [1], call2181);
    var string2184 = new GraceString("\", [1], ");
    var opresult2185 = request(opresult2183, "++(1)", [1], string2184);
    var opresult2186 = request(opresult2185, "++(1)", [1], var_right);
    var string2187 = new GraceString(");");
    var opresult2188 = request(opresult2186, "++(1)", [1], string2187);
    var opresult2189 = request(opresult2179, "++(1)", [1], opresult2188);
    // call case 2: outer request
    var call2172 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2189);
    setLineNumber(1178);    // compilenode call
    // call case 6: other requests
    var call2190 = request(var_o, "register:=(1)", [1], var_register);
    return call2190;
  };    // end of method compileop(_)
  this.methods["compileop(1)"] = func2140;
  func2140.methodName = "compileop(1)";
  func2140.paramCounts = [1];
  func2140.paramNames = ["o"];
  func2140.definitionLine = 1164;
  func2140.definitionModule = "genjs";
  var func2191 = function(argcv, var_o, var_args) {    // method compileNormalArguments(_,_), line 1180
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileNormalArguments(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1181);    // compilenode block
    var block2193 = new GraceBlock(this, 1181, 1);
    block2193.guard = jsTrue;
    block2193.real = function block2193(var_a) {
      setLineNumber(1182);    // compilenode call
      // call case 2: outer request
      var call2195 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_a);
      // call case 6: other requests
      var call2194 = request(var_args, "push(1)", [1], call2195);
      return call2194;
    };
    let applyMeth2193 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2193.methodName = "apply(1)";
    applyMeth2193.paramCounts = [1];
    applyMeth2193.paramNames = ["a"];
    applyMeth2193.definitionLine = 1181;
    applyMeth2193.definitionModule = "genjs";
    block2193.methods["apply(1)"] = applyMeth2193;
    let matchesMeth2193 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2193.methodName = "matches(1)";
    matchesMeth2193.paramCounts = [1];
    matchesMeth2193.paramNames = ["a"];
    matchesMeth2193.definitionLine = 1181;
    matchesMeth2193.definitionModule = "genjs";
    block2193.methods["matches(1)"] = matchesMeth2193;
    // call case 6: other requests
    var call2192 = request(var_o, "argumentsDo(1)", [1], block2193);
    return call2192;
  };    // end of method compileNormalArguments(_,_)
  this.methods["compileNormalArguments(2)"] = func2191;
  func2191.methodName = "compileNormalArguments(2)";
  func2191.paramCounts = [2];
  func2191.paramNames = ["o", "args"];
  func2191.definitionLine = 1180;
  func2191.definitionModule = "genjs";
  var func2196 = function(argcv, var_o, var_args) {    // method compileTypeArguments(_,_), line 1185
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileTypeArguments(_,_)", 0, numArgs - 2);
    }
    var if2197 = GraceDone;
    setLineNumber(1186);    // compilenode member
    // call case 6: other requests
    var call2198 = request(var_o, "generics", [0]);
    var opresult2199 = request(GraceFalse, "\u2260(1)", [1], call2198);
    if (Grace_isTrue(opresult2199)) {
      setLineNumber(1187);    // compilenode block
      var block2201 = new GraceBlock(this, 1187, 1);
      block2201.guard = jsTrue;
      block2201.real = function block2201(var_g) {
        setLineNumber(1188);    // compilenode call
        // call case 2: outer request
        var call2203 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_g);
        // call case 6: other requests
        var call2202 = request(var_args, "push(1)", [1], call2203);
        return call2202;
      };
      let applyMeth2201 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2201.methodName = "apply(1)";
      applyMeth2201.paramCounts = [1];
      applyMeth2201.paramNames = ["g"];
      applyMeth2201.definitionLine = 1187;
      applyMeth2201.definitionModule = "genjs";
      block2201.methods["apply(1)"] = applyMeth2201;
      let matchesMeth2201 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2201.methodName = "matches(1)";
      matchesMeth2201.paramCounts = [1];
      matchesMeth2201.paramNames = ["g"];
      matchesMeth2201.definitionLine = 1187;
      matchesMeth2201.definitionModule = "genjs";
      block2201.methods["matches(1)"] = matchesMeth2201;
      // call case 6: other requests
      setLineNumber(1187);    // compilenode member
      // call case 6: other requests
      var call2204 = request(var_o, "generics", [0]);
      var call2200 = request(call2204, "do(1)", [1], block2201);
      if2197 = call2200;
    }
    return if2197;
  };    // end of method compileTypeArguments(_,_)
  this.methods["compileTypeArguments(2)"] = func2196;
  func2196.methodName = "compileTypeArguments(2)";
  func2196.paramCounts = [2];
  func2196.paramNames = ["o", "args"];
  func2196.definitionLine = 1185;
  func2196.definitionModule = "genjs";
  var func2205 = function(argcv, var_o, var_args) {    // method compileArguments(_,_), line 1192
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileArguments(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1193);    // compilenode call
    // call case 2: outer request
    var call2206 = selfRequest(importedModules["genjs"], "compileNormalArguments(2)", [2], var_o, var_args);
    setLineNumber(1194);    // compilenode call
    // call case 2: outer request
    var call2207 = selfRequest(importedModules["genjs"], "compileTypeArguments(2)", [2], var_o, var_args);
    return call2207;
  };    // end of method compileArguments(_,_)
  this.methods["compileArguments(2)"] = func2205;
  func2205.methodName = "compileArguments(2)";
  func2205.paramCounts = [2];
  func2205.paramNames = ["o", "args"];
  func2205.definitionLine = 1192;
  func2205.definitionModule = "genjs";
  var func2208 = function(argcv, var_args) {    // method assembleArguments(_), line 1196
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("assembleArguments(_)", 0, numArgs - 1);
    }
    setLineNumber(1197);    // compilenode string
    var string2209 = new GraceString("");
    var var_result = string2209;
    setLineNumber(1198);    // compilenode block
    var block2211 = new GraceBlock(this, 1198, 1);
    block2211.guard = jsTrue;
    block2211.real = function block2211(var_arg) {
      setLineNumber(1199);    // compilenode op
      if (var_result === undefined) raiseUninitializedVariable("result");
      var string2212 = new GraceString(", ");
      var opresult2213 = request(var_result, "++(1)", [1], string2212);
      var opresult2214 = request(opresult2213, "++(1)", [1], var_arg);
      var_result = opresult2214;
      return GraceDone;
    };
    let applyMeth2211 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2211.methodName = "apply(1)";
    applyMeth2211.paramCounts = [1];
    applyMeth2211.paramNames = ["arg"];
    applyMeth2211.definitionLine = 1198;
    applyMeth2211.definitionModule = "genjs";
    block2211.methods["apply(1)"] = applyMeth2211;
    let matchesMeth2211 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2211.methodName = "matches(1)";
    matchesMeth2211.paramCounts = [1];
    matchesMeth2211.paramNames = ["arg"];
    matchesMeth2211.definitionLine = 1198;
    matchesMeth2211.definitionModule = "genjs";
    block2211.methods["matches(1)"] = matchesMeth2211;
    // call case 2: outer request
    var call2210 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_args, block2211);
    return var_result;
  };    // end of method assembleArguments(_)
  this.methods["assembleArguments(1)"] = func2208;
  func2208.methodName = "assembleArguments(1)";
  func2208.paramCounts = [1];
  func2208.paramNames = ["args"];
  func2208.definitionLine = 1196;
  func2208.definitionModule = "genjs";
  var func2215 = function(argcv, var_id) {    // method compileUninitializedCheck(_), line 1203
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileUninitializedCheck(_)", 0, numArgs - 1);
    }
    var if2216 = GraceDone;
    setLineNumber(1206);    // compilenode member
    // call case 6: other requests
    if (var_emitUndefinedChecks === undefined) raiseUninitializedVariable("emitUndefinedChecks");
    var call2217 = request(var_emitUndefinedChecks, "not", [0]);
    if (Grace_isTrue(call2217)) {
      return var_done;
    }
    setLineNumber(1207);    // compilenode member
    // call case 6: other requests
    var call2218 = request(var_id, "nameString", [0]);
    var var_name = call2218;
    setLineNumber(1208);    // compilenode block
    var block2220 = new GraceBlock(this, 1208, 0);
    block2220.guard = jsTrue;
    block2220.real = function block2220() {
      setLineNumber(1210);    // compilenode return
      throw new ReturnException(var_done, returnTarget);
    };
    let applyMeth2220 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth2220.methodName = "apply";
    applyMeth2220.paramCounts = [0];
    applyMeth2220.paramNames = [];
    applyMeth2220.definitionLine = 1208;
    applyMeth2220.definitionModule = "genjs";
    block2220.methods["apply"] = applyMeth2220;
    // call case 6: other requests
    setLineNumber(1208);    // compilenode member
    // call case 6: other requests
    var call2221 = request(var_id, "scope", [0]);
    var call2219 = request(call2221, "thatDefines(1)ifNone(1)", [1, 1], var_name, block2220);
    var var_definingScope = call2219;
    setLineNumber(1212);    // compilenode member
    // call case 6: other requests
    var call2222 = request(var_definingScope, "variety", [0]);
    var var_scopeVariety = call2222;
    var if2223 = GraceDone;
    setLineNumber(1213);    // compilenode string
    var string2224 = new GraceString("built-in");
    var opresult2225 = request(var_scopeVariety, "==(1)", [1], string2224);
    if (Grace_isTrue(opresult2225)) {
      return var_done;
    }
    var if2226 = GraceDone;
    setLineNumber(1214);    // compilenode member
    // call case 6: other requests
    var call2228 = request(var_definingScope, "variety", [0]);
    // call case 6: other requests
    var string2229 = new GraceString("module | method | dialect");
    var call2227 = request(string2229, "contains(1)", [1], call2228);
    if (Grace_isTrue(call2227)) {
      var if2230 = GraceDone;
      setLineNumber(1215);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 6: other requests
      if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
      var call2231 = request(var_initializedVars, "contains(1)", [1], var_name);
      if (Grace_isTrue(call2231)) {
        return var_done;
      }
      if2226 = if2230;
    }
    setLineNumber(1217);    // compilenode call
    // call case 6: other requests
    var call2232 = request(var_definingScope, "kind(1)", [1], var_name);
    var var_idKind = call2232;
    var if2233 = GraceDone;
    setLineNumber(1218);    // compilenode member
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call2234 = request(var_k, "defdec", [0]);
    var opresult2235 = request(var_idKind, "==(1)", [1], call2234);
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call2236 = request(var_k, "vardec", [0]);
    var opresult2237 = request(var_idKind, "==(1)", [1], call2236);
    var opresult2238 = request(opresult2235, "||(1)", [1], opresult2237);
    if (Grace_isTrue(opresult2238)) {
      setLineNumber(1219);    // compilenode string
      var string2240 = new GraceString("if (");
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 2: outer request
      var call2241 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_name);
      var opresult2242 = request(string2240, "++(1)", [1], call2241);
      var string2243 = new GraceString(" === undefined) raiseUninitializedVariable(\"");
      var opresult2244 = request(opresult2242, "++(1)", [1], string2243);
      if (var_name === undefined) raiseUninitializedVariable("name");
      var opresult2245 = request(opresult2244, "++(1)", [1], var_name);
      var string2246 = new GraceString("\");");
      var opresult2247 = request(opresult2245, "++(1)", [1], string2246);
      // call case 2: outer request
      var call2239 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2247);
      if2233 = call2239;
    }
    return if2233;
  };    // end of method compileUninitializedCheck(_)
  this.methods["compileUninitializedCheck(1)"] = func2215;
  func2215.methodName = "compileUninitializedCheck(1)";
  func2215.paramCounts = [1];
  func2215.paramNames = ["id"];
  func2215.definitionLine = 1203;
  func2215.definitionModule = "genjs";
  var func2248 = function(argcv, var_o) {    // method partl(_), line 1222
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("partl(_)", 0, numArgs - 1);
    }
    setLineNumber(1223);    // compilenode string
    var string2249 = new GraceString("");
    var var_result = string2249;
    setLineNumber(1224);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2252 = request(var_o, "parts", [0]);
    var call2251 = request(call2252, "indices", [0]);
    var block2253 = new GraceBlock(this, 1224, 1);
    block2253.guard = jsTrue;
    block2253.real = function block2253(var_partnr) {
      setLineNumber(1225);    // compilenode op
      if (var_result === undefined) raiseUninitializedVariable("result");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call2257 = request(var_o, "parts", [0]);
      var call2256 = request(call2257, "at(1)", [1], var_partnr);
      var call2255 = request(call2256, "args", [0]);
      var call2254 = request(call2255, "size", [0]);
      var opresult2258 = request(var_result, "++(1)", [1], call2254);
      var_result = opresult2258;
      var if2259 = GraceDone;
      setLineNumber(1226);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2261 = request(var_o, "parts", [0]);
      var call2260 = request(call2261, "size", [0]);
      var opresult2262 = request(var_partnr, "<(1)", [1], call2260);
      if (Grace_isTrue(opresult2262)) {
        setLineNumber(1227);    // compilenode op
        if (var_result === undefined) raiseUninitializedVariable("result");
        var string2263 = new GraceString(", ");
        var opresult2264 = request(var_result, "++(1)", [1], string2263);
        var_result = opresult2264;
        if2259 = GraceDone;
      }
      return if2259;
    };
    let applyMeth2253 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2253.methodName = "apply(1)";
    applyMeth2253.paramCounts = [1];
    applyMeth2253.paramNames = ["partnr"];
    applyMeth2253.definitionLine = 1224;
    applyMeth2253.definitionModule = "genjs";
    block2253.methods["apply(1)"] = applyMeth2253;
    let matchesMeth2253 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2253.methodName = "matches(1)";
    matchesMeth2253.paramCounts = [1];
    matchesMeth2253.paramNames = ["partnr"];
    matchesMeth2253.definitionLine = 1224;
    matchesMeth2253.definitionModule = "genjs";
    block2253.methods["matches(1)"] = matchesMeth2253;
    // call case 2: outer request
    var call2250 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call2251, block2253);
    var if2265 = GraceDone;
    setLineNumber(1230);    // compilenode member
    // call case 6: other requests
    var call2266 = request(var_o, "generics", [0]);
    var opresult2267 = request(GraceFalse, "\u2260(1)", [1], call2266);
    if (Grace_isTrue(opresult2267)) {
      setLineNumber(1231);    // compilenode op
      if (var_result === undefined) raiseUninitializedVariable("result");
      var string2268 = new GraceString(", ");
      // call case 6: other requests
      // call case 6: other requests
      var call2270 = request(var_o, "generics", [0]);
      var call2269 = request(call2270, "size", [0]);
      var opresult2271 = request(string2268, "++(1)", [1], call2269);
      var string2272 = new GraceString("");
      var opresult2273 = request(opresult2271, "++(1)", [1], string2272);
      var opresult2274 = request(var_result, "++(1)", [1], opresult2273);
      var_result = opresult2274;
      if2265 = GraceDone;
    }
    return var_result;
  };    // end of method partl(_)
  this.methods["partl(1)"] = func2248;
  func2248.methodName = "partl(1)";
  func2248.paramCounts = [1];
  func2248.paramNames = ["o"];
  func2248.definitionLine = 1222;
  func2248.definitionModule = "genjs";
  var func2275 = function(argcv, var_o, var_args) {    // method compileOuterRequest(_,_), line 1235
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileOuterRequest(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1236);    // compilenode string
    var string2277 = new GraceString("// call case 2: outer request");
    // call case 2: outer request
    var call2276 = selfRequest(importedModules["genjs"], "out(1)", [1], string2277);
    setLineNumber(1237);    // compilenode member
    // call case 6: other requests
    var call2279 = request(var_o, "receiver", [0]);
    // call case 2: outer request
    var call2278 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2279);
    setLineNumber(1238);    // compilenode member
    // call case 6: other requests
    var call2280 = request(var_o, "numArgs", [0]);
    // call case 6: other requests
    var call2281 = request(var_o, "numTypeArgs", [0]);
    var sum2282 = request(call2280, "+(1)", [1], call2281);
    var var_numArgs = sum2282;
    setLineNumber(1239);    // compilenode string
    var string2284 = new GraceString("var ");
    // call case 6: other requests
    var call2285 = request(var_o, "register", [0]);
    var opresult2286 = request(string2284, "++(1)", [1], call2285);
    var string2287 = new GraceString(" = selfRequest(");
    var opresult2288 = request(opresult2286, "++(1)", [1], string2287);
    // call case 6: other requests
    // call case 6: other requests
    var call2290 = request(var_o, "receiver", [0]);
    var call2289 = request(call2290, "register", [0]);
    var opresult2291 = request(opresult2288, "++(1)", [1], call2289);
    var string2292 = new GraceString("");
    var opresult2293 = request(opresult2291, "++(1)", [1], string2292);
    setLineNumber(1240);    // compilenode string
    var string2294 = new GraceString(", \"");
    // call case 6: other requests
    var call2296 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2295 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2296);
    var opresult2297 = request(string2294, "++(1)", [1], call2295);
    var string2298 = new GraceString("\"");
    var opresult2299 = request(opresult2297, "++(1)", [1], string2298);
    var opresult2300 = request(opresult2293, "++(1)", [1], opresult2299);
    setLineNumber(1241);    // compilenode string
    var string2301 = new GraceString(", [");
    // call case 2: outer request
    var call2302 = selfRequest(importedModules["genjs"], "partl(1)", [1], var_o);
    var opresult2303 = request(string2301, "++(1)", [1], call2302);
    var string2304 = new GraceString("]");
    var opresult2305 = request(opresult2303, "++(1)", [1], string2304);
    // call case 2: outer request
    var call2306 = selfRequest(importedModules["genjs"], "assembleArguments(1)", [1], var_args);
    var opresult2307 = request(opresult2305, "++(1)", [1], call2306);
    var string2308 = new GraceString(");");
    var opresult2309 = request(opresult2307, "++(1)", [1], string2308);
    var opresult2310 = request(opresult2300, "++(1)", [1], opresult2309);
    // call case 2: outer request
    var call2283 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2310);
    return call2283;
  };    // end of method compileOuterRequest(_,_)
  this.methods["compileOuterRequest(2)"] = func2275;
  func2275.methodName = "compileOuterRequest(2)";
  func2275.paramCounts = [2];
  func2275.paramNames = ["o", "args"];
  func2275.definitionLine = 1235;
  func2275.definitionModule = "genjs";
  var func2311 = function(argcv, var_o, var_args) {    // method compileSelfRequest(_,_), line 1244
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileSelfRequest(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1245);    // compilenode string
    var string2313 = new GraceString("// call case 4: self request with ");
    // call case 6: other requests
    var call2314 = request(var_o, "numArgs", [0]);
    var opresult2315 = request(string2313, "++(1)", [1], call2314);
    var string2316 = new GraceString(" args and ");
    var opresult2317 = request(opresult2315, "++(1)", [1], string2316);
    // call case 6: other requests
    var call2318 = request(var_o, "numTypeArgs", [0]);
    var opresult2319 = request(opresult2317, "++(1)", [1], call2318);
    var string2320 = new GraceString(" typeArgs ");
    var opresult2321 = request(opresult2319, "++(1)", [1], string2320);
    // call case 2: outer request
    var call2312 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2321);
    setLineNumber(1246);    // compilenode member
    // call case 6: other requests
    var call2322 = request(var_o, "numArgs", [0]);
    // call case 6: other requests
    var call2323 = request(var_o, "numTypeArgs", [0]);
    var sum2324 = request(call2322, "+(1)", [1], call2323);
    var var_numArgs = sum2324;
    setLineNumber(1247);    // compilenode string
    var string2326 = new GraceString("var ");
    // call case 6: other requests
    var call2327 = request(var_o, "register", [0]);
    var opresult2328 = request(string2326, "++(1)", [1], call2327);
    var string2329 = new GraceString(" = selfRequest(this");
    var opresult2330 = request(opresult2328, "++(1)", [1], string2329);
    setLineNumber(1248);    // compilenode string
    var string2331 = new GraceString(", \"");
    // call case 6: other requests
    var call2333 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2332 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2333);
    var opresult2334 = request(string2331, "++(1)", [1], call2332);
    var string2335 = new GraceString("\", [");
    var opresult2336 = request(opresult2334, "++(1)", [1], string2335);
    // call case 2: outer request
    var call2337 = selfRequest(importedModules["genjs"], "partl(1)", [1], var_o);
    var opresult2338 = request(opresult2336, "++(1)", [1], call2337);
    var string2339 = new GraceString("]");
    var opresult2340 = request(opresult2338, "++(1)", [1], string2339);
    // call case 2: outer request
    var call2341 = selfRequest(importedModules["genjs"], "assembleArguments(1)", [1], var_args);
    var opresult2342 = request(opresult2340, "++(1)", [1], call2341);
    var string2343 = new GraceString(");");
    var opresult2344 = request(opresult2342, "++(1)", [1], string2343);
    var opresult2345 = request(opresult2330, "++(1)", [1], opresult2344);
    // call case 2: outer request
    var call2325 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2345);
    return call2325;
  };    // end of method compileSelfRequest(_,_)
  this.methods["compileSelfRequest(2)"] = func2311;
  func2311.methodName = "compileSelfRequest(2)";
  func2311.paramCounts = [2];
  func2311.paramNames = ["o", "args"];
  func2311.definitionLine = 1244;
  func2311.definitionModule = "genjs";
  var func2346 = function(argcv, var_o, var_args) {    // method compilePreludeRequest(_,_), line 1250
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compilePreludeRequest(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1251);    // compilenode string
    var string2348 = new GraceString("// call case 5: prelude request");
    // call case 2: outer request
    var call2347 = selfRequest(importedModules["genjs"], "out(1)", [1], string2348);
    setLineNumber(1252);    // compilenode member
    // call case 6: other requests
    var call2349 = request(var_o, "numArgs", [0]);
    // call case 6: other requests
    var call2350 = request(var_o, "numTypeArgs", [0]);
    var sum2351 = request(call2349, "+(1)", [1], call2350);
    var var_numArgs = sum2351;
    setLineNumber(1253);    // compilenode string
    var string2353 = new GraceString("var ");
    // call case 6: other requests
    var call2354 = request(var_o, "register", [0]);
    var opresult2355 = request(string2353, "++(1)", [1], call2354);
    var string2356 = new GraceString(" = request(var_prelude");
    var opresult2357 = request(opresult2355, "++(1)", [1], string2356);
    setLineNumber(1254);    // compilenode string
    var string2358 = new GraceString(", \"");
    // call case 6: other requests
    var call2360 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2359 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2360);
    var opresult2361 = request(string2358, "++(1)", [1], call2359);
    var string2362 = new GraceString("\", [");
    var opresult2363 = request(opresult2361, "++(1)", [1], string2362);
    // call case 2: outer request
    var call2364 = selfRequest(importedModules["genjs"], "partl(1)", [1], var_o);
    var opresult2365 = request(opresult2363, "++(1)", [1], call2364);
    var string2366 = new GraceString("]");
    var opresult2367 = request(opresult2365, "++(1)", [1], string2366);
    // call case 2: outer request
    var call2368 = selfRequest(importedModules["genjs"], "assembleArguments(1)", [1], var_args);
    var opresult2369 = request(opresult2367, "++(1)", [1], call2368);
    var string2370 = new GraceString(");");
    var opresult2371 = request(opresult2369, "++(1)", [1], string2370);
    var opresult2372 = request(opresult2357, "++(1)", [1], opresult2371);
    // call case 2: outer request
    var call2352 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2372);
    return call2352;
  };    // end of method compilePreludeRequest(_,_)
  this.methods["compilePreludeRequest(2)"] = func2346;
  func2346.methodName = "compilePreludeRequest(2)";
  func2346.paramCounts = [2];
  func2346.paramNames = ["o", "args"];
  func2346.definitionLine = 1250;
  func2346.definitionModule = "genjs";
  var func2373 = function(argcv, var_o, var_args) {    // method compileOtherRequest(_,_), line 1256
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileOtherRequest(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1257);    // compilenode string
    var string2375 = new GraceString("// call case 6: other requests");
    // call case 2: outer request
    var call2374 = selfRequest(importedModules["genjs"], "out(1)", [1], string2375);
    setLineNumber(1258);    // compilenode member
    // call case 6: other requests
    var call2377 = request(var_o, "receiver", [0]);
    // call case 2: outer request
    var call2376 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2377);
    var var_target = call2376;
    var if2378 = GraceDone;
    setLineNumber(1259);    // compilenode member
    // call case 6: other requests
    var call2379 = request(var_o, "isSelfRequest", [0]);
    if (Grace_isTrue(call2379)) {
      var string2380 = new GraceString("selfRequest");
      if2378 = string2380;
    } else {
      var string2381 = new GraceString("request");
      if2378 = string2381;
    }
    var var_cm = if2378;
    setLineNumber(1260);    // compilenode member
    // call case 6: other requests
    var call2382 = request(var_o, "numArgs", [0]);
    // call case 6: other requests
    var call2383 = request(var_o, "numTypeArgs", [0]);
    var sum2384 = request(call2382, "+(1)", [1], call2383);
    var var_numArgs = sum2384;
    setLineNumber(1261);    // compilenode string
    var string2386 = new GraceString("var ");
    // call case 6: other requests
    var call2387 = request(var_o, "register", [0]);
    var opresult2388 = request(string2386, "++(1)", [1], call2387);
    var string2389 = new GraceString(" = ");
    var opresult2390 = request(opresult2388, "++(1)", [1], string2389);
    var opresult2391 = request(opresult2390, "++(1)", [1], var_cm);
    var string2392 = new GraceString("(");
    var opresult2393 = request(opresult2391, "++(1)", [1], string2392);
    var opresult2394 = request(opresult2393, "++(1)", [1], var_target);
    var string2395 = new GraceString("");
    var opresult2396 = request(opresult2394, "++(1)", [1], string2395);
    setLineNumber(1262);    // compilenode string
    var string2397 = new GraceString(", \"");
    // call case 6: other requests
    var call2399 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2398 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2399);
    var opresult2400 = request(string2397, "++(1)", [1], call2398);
    var string2401 = new GraceString("\", [");
    var opresult2402 = request(opresult2400, "++(1)", [1], string2401);
    // call case 2: outer request
    var call2403 = selfRequest(importedModules["genjs"], "partl(1)", [1], var_o);
    var opresult2404 = request(opresult2402, "++(1)", [1], call2403);
    var string2405 = new GraceString("]");
    var opresult2406 = request(opresult2404, "++(1)", [1], string2405);
    // call case 2: outer request
    var call2407 = selfRequest(importedModules["genjs"], "assembleArguments(1)", [1], var_args);
    var opresult2408 = request(opresult2406, "++(1)", [1], call2407);
    var string2409 = new GraceString(");");
    var opresult2410 = request(opresult2408, "++(1)", [1], string2409);
    var opresult2411 = request(opresult2396, "++(1)", [1], opresult2410);
    // call case 2: outer request
    var call2385 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2411);
    return call2385;
  };    // end of method compileOtherRequest(_,_)
  this.methods["compileOtherRequest(2)"] = func2373;
  func2373.methodName = "compileOtherRequest(2)";
  func2373.paramCounts = [2];
  func2373.paramNames = ["o", "args"];
  func2373.definitionLine = 1256;
  func2373.definitionModule = "genjs";
  var func2412 = function(argcv, var_o) {    // method compilecall(_), line 1264
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilecall(_)", 0, numArgs - 1);
    }
    setLineNumber(1265);    // compilenode string
    var string2414 = new GraceString("call");
    // call case 2: outer request
    var call2413 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string2414);
    var var_calltemp = call2413;
    setLineNumber(1266);    // compilenode call
    // call case 6: other requests
    var call2415 = request(var_o, "register:=(1)", [1], var_calltemp);
    setLineNumber(1267);    // compilenode array
    var array2417 = new GraceSequence([]);
    // call case 2: outer request
    var call2416 = selfRequest(var_prelude, "list(1)", [1], array2417);
    var var_args = call2416;
    setLineNumber(1268);    // compilenode call
    // call case 2: outer request
    var call2418 = selfRequest(importedModules["genjs"], "compileArguments(2)", [2], var_o, var_args);
    setLineNumber(1269);    // compilenode member
    // call case 6: other requests
    var call2419 = request(var_o, "receiver", [0]);
    var var_receiver = call2419;
    var if2420 = GraceDone;
    setLineNumber(1270);    // compilenode member
    // call case 6: other requests
    var call2421 = request(var_receiver, "isOuter", [0]);
    if (Grace_isTrue(call2421)) {
      setLineNumber(1271);    // compilenode call
      if (var_args === undefined) raiseUninitializedVariable("args");
      // call case 2: outer request
      var call2422 = selfRequest(importedModules["genjs"], "compileOuterRequest(2)", [2], var_o, var_args);
      if2420 = call2422;
    } else {
      var if2423 = GraceDone;
      setLineNumber(1272);    // compilenode member
      // call case 6: other requests
      if (var_receiver === undefined) raiseUninitializedVariable("receiver");
      var call2424 = request(var_receiver, "isSelf", [0]);
      if (Grace_isTrue(call2424)) {
        setLineNumber(1273);    // compilenode call
        if (var_args === undefined) raiseUninitializedVariable("args");
        // call case 2: outer request
        var call2425 = selfRequest(importedModules["genjs"], "compileSelfRequest(2)", [2], var_o, var_args);
        if2423 = call2425;
      } else {
        var if2426 = GraceDone;
        setLineNumber(1274);    // compilenode member
        // call case 6: other requests
        if (var_receiver === undefined) raiseUninitializedVariable("receiver");
        var call2427 = request(var_receiver, "isPrelude", [0]);
        if (Grace_isTrue(call2427)) {
          setLineNumber(1275);    // compilenode call
          if (var_args === undefined) raiseUninitializedVariable("args");
          // call case 2: outer request
          var call2428 = selfRequest(importedModules["genjs"], "compilePreludeRequest(2)", [2], var_o, var_args);
          if2426 = call2428;
        } else {
          setLineNumber(1277);    // compilenode call
          if (var_args === undefined) raiseUninitializedVariable("args");
          // call case 2: outer request
          var call2429 = selfRequest(importedModules["genjs"], "compileOtherRequest(2)", [2], var_o, var_args);
          if2426 = call2429;
        }
        if2423 = if2426;
      }
      if2420 = if2423;
    }
    setLineNumber(1279);    // compilenode member
    // call case 6: other requests
    var call2430 = request(var_o, "register", [0]);
    return call2430;
  };    // end of method compilecall(_)
  this.methods["compilecall(1)"] = func2412;
  func2412.methodName = "compilecall(1)";
  func2412.paramCounts = [1];
  func2412.paramNames = ["o"];
  func2412.definitionLine = 1264;
  func2412.definitionModule = "genjs";
  var func2431 = function(argcv, var_o) {    // method compileOuter(_), line 1281
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileOuter(_)", 0, numArgs - 1);
    }
    setLineNumber(1282);    // compilenode block
    var block2434 = new GraceBlock(this, 1282, 2);
    block2434.guard = jsTrue;
    block2434.real = function block2434(var_a, var_obj) {
      setLineNumber(1282);    // compilenode string
      var string2435 = new GraceString("");
      var opresult2436 = request(string2435, "++(1)", [1], var_a);
      var string2437 = new GraceString(".");
      var opresult2438 = request(opresult2436, "++(1)", [1], string2437);
      // call case 2: outer request
      var call2439 = selfRequest(importedModules["genjs"], "outerProp(1)", [1], var_obj);
      var opresult2440 = request(opresult2438, "++(1)", [1], call2439);
      var string2441 = new GraceString("");
      var opresult2442 = request(opresult2440, "++(1)", [1], string2441);
      return opresult2442;
    };
    let applyMeth2434 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2434.methodName = "apply(2)";
    applyMeth2434.paramCounts = [2];
    applyMeth2434.paramNames = ["a", "obj"];
    applyMeth2434.definitionLine = 1282;
    applyMeth2434.definitionModule = "genjs";
    block2434.methods["apply(2)"] = applyMeth2434;
    let matchesMeth2434 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2434.methodName = "matches(2)";
    matchesMeth2434.paramCounts = [2];
    matchesMeth2434.paramNames = ["a", "obj"];
    matchesMeth2434.definitionLine = 1282;
    matchesMeth2434.definitionModule = "genjs";
    block2434.methods["matches(2)"] = matchesMeth2434;
    setLineNumber(1283);    // compilenode string
    var string2443 = new GraceString("this");
    // call case 6: other requests
    setLineNumber(1282);    // compilenode member
    // call case 6: other requests
    var call2444 = request(var_o, "theObjects", [0]);
    var call2433 = request(call2444, "fold(1)startingWith(1)", [1, 1], block2434, string2443);
    // call case 6: other requests
    var call2432 = request(var_o, "register:=(1)", [1], call2433);
    return call2432;
  };    // end of method compileOuter(_)
  this.methods["compileOuter(1)"] = func2431;
  func2431.methodName = "compileOuter(1)";
  func2431.paramCounts = [1];
  func2431.paramNames = ["o"];
  func2431.definitionLine = 1281;
  func2431.definitionModule = "genjs";
  var func2445 = function(argcv, var_o) {    // method compiledialect(_), line 1285
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compiledialect(_)", 0, numArgs - 1);
    }
    setLineNumber(1286);    // compilenode member
    // call case 6: other requests
    var call2446 = request(var_o, "value", [0]);
    var var_dialectName = call2446;
    var if2447 = GraceDone;
    setLineNumber(1287);    // compilenode string
    var string2448 = new GraceString("none");
    var opresult2449 = request(var_dialectName, "\u2260(1)", [1], string2448);
    if (Grace_isTrue(opresult2449)) {
      setLineNumber(1288);    // compilenode string
      var string2451 = new GraceString("// Dialect \"");
      if (var_dialectName === undefined) raiseUninitializedVariable("dialectName");
      var opresult2452 = request(string2451, "++(1)", [1], var_dialectName);
      var string2453 = new GraceString("\"");
      var opresult2454 = request(opresult2452, "++(1)", [1], string2453);
      // call case 2: outer request
      var call2450 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2454);
      setLineNumber(1289);    // compilenode call
      if (var_dialectName === undefined) raiseUninitializedVariable("dialectName");
      // call case 2: outer request
      var call2455 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_dialectName);
      var var_fn = call2455;
      setLineNumber(1290);    // compilenode string
      var string2457 = new GraceString("var_prelude = do_import(\"");
      if (var_fn === undefined) raiseUninitializedVariable("fn");
      var opresult2458 = request(string2457, "++(1)", [1], var_fn);
      var string2459 = new GraceString("\", ");
      var opresult2460 = request(opresult2458, "++(1)", [1], string2459);
      if (var_dialectName === undefined) raiseUninitializedVariable("dialectName");
      // call case 2: outer request
      var call2461 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], var_dialectName);
      var opresult2462 = request(opresult2460, "++(1)", [1], call2461);
      var string2463 = new GraceString(");");
      var opresult2464 = request(opresult2462, "++(1)", [1], string2463);
      // call case 2: outer request
      var call2456 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2464);
      setLineNumber(1291);    // compilenode string
      var string2466 = new GraceString("this.outer = var_prelude;");
      // call case 2: outer request
      var call2465 = selfRequest(importedModules["genjs"], "out(1)", [1], string2466);
      var if2467 = GraceDone;
      setLineNumber(1292);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
      var call2469 = request(var_xmodule, "currentDialect", [0]);
      var call2468 = request(call2469, "hasAtStart", [0]);
      if (Grace_isTrue(call2468)) {
        setLineNumber(1293);    // compilenode string
        var string2471 = new GraceString("var var_thisDialect = selfRequest(var_prelude, \"thisDialect\", [0]);");
        // call case 2: outer request
        var call2470 = selfRequest(importedModules["genjs"], "out(1)", [1], string2471);
        setLineNumber(1294);    // compilenode string
        var string2473 = new GraceString("selfRequest(var_thisDialect, \"atStart(1)\", [1], ");
        // call case 2: outer request
        var call2472 = selfRequest(importedModules["genjs"], "out(1)", [1], string2473);
        setLineNumber(1295);    // compilenode string
        var string2475 = new GraceString("  new GraceString(");
        if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
        var opresult2476 = request(string2475, "++(1)", [1], var_modNameAsString);
        var string2477 = new GraceString("));");
        var opresult2478 = request(opresult2476, "++(1)", [1], string2477);
        // call case 2: outer request
        var call2474 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2478);
        if2467 = call2474;
      }
      if2447 = if2467;
    }
    setLineNumber(1298);    // compilenode string
    var string2480 = new GraceString("GraceDone");
    // call case 6: other requests
    var call2479 = request(var_o, "register:=(1)", [1], string2480);
    return call2479;
  };    // end of method compiledialect(_)
  this.methods["compiledialect(1)"] = func2445;
  func2445.methodName = "compiledialect(1)";
  func2445.paramCounts = [1];
  func2445.paramNames = ["o"];
  func2445.definitionLine = 1285;
  func2445.definitionModule = "genjs";
  var func2481 = function(argcv, var_o) {    // method compileimport(_), line 1300
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileimport(_)", 0, numArgs - 1);
    }
    setLineNumber(1301);    // compilenode string
    var string2483 = new GraceString("// Import of \"");
    // call case 6: other requests
    var call2484 = request(var_o, "path", [0]);
    var opresult2485 = request(string2483, "++(1)", [1], call2484);
    var string2486 = new GraceString("\" as ");
    var opresult2487 = request(opresult2485, "++(1)", [1], string2486);
    // call case 6: other requests
    var call2488 = request(var_o, "nameString", [0]);
    var opresult2489 = request(opresult2487, "++(1)", [1], call2488);
    var string2490 = new GraceString("");
    var opresult2491 = request(opresult2489, "++(1)", [1], string2490);
    // call case 2: outer request
    var call2482 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2491);
    setLineNumber(1302);    // compilenode member
    // call case 6: other requests
    var call2492 = request(var_o, "scope", [0]);
    var var_currentScope = call2492;
    setLineNumber(1303);    // compilenode member
    // call case 6: other requests
    var call2494 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2493 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], call2494);
    var var_nm = call2493;
    setLineNumber(1304);    // compilenode call
    // call case 2: outer request
    var call2495 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
    var var_var__95__nm = call2495;
    setLineNumber(1305);    // compilenode member
    // call case 6: other requests
    var call2497 = request(var_o, "path", [0]);
    // call case 2: outer request
    var call2496 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2497);
    var var_fn = call2496;
    setLineNumber(1306);    // compilenode member
    // call case 6: other requests
    var call2500 = request(var_o, "nameString", [0]);
    // call case 2: outer request
    var call2499 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], call2500);
    // call case 6: other requests
    if (var_declaredvars === undefined) raiseUninitializedVariable("declaredvars");
    var call2498 = request(var_declaredvars, "push(1)", [1], call2499);
    setLineNumber(1307);    // compilenode string
    var string2502 = new GraceString("if (typeof ");
    // call case 6: other requests
    var call2504 = request(var_o, "path", [0]);
    // call case 2: outer request
    var call2503 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], call2504);
    var opresult2505 = request(string2502, "++(1)", [1], call2503);
    var string2506 = new GraceString(" == \"undefined\")");
    var opresult2507 = request(opresult2505, "++(1)", [1], string2506);
    // call case 2: outer request
    var call2501 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2507);
    setLineNumber(1308);    // compilenode string
    var string2509 = new GraceString("  throw new GraceExceptionPacket(EnvironmentExceptionObject, ");
    // call case 2: outer request
    var call2508 = selfRequest(importedModules["genjs"], "out(1)", [1], string2509);
    setLineNumber(1309);    // compilenode string
    var string2511 = new GraceString("    new GraceString(\"could not find module ");
    // call case 6: other requests
    var call2512 = request(var_o, "path", [0]);
    var opresult2513 = request(string2511, "++(1)", [1], call2512);
    var string2514 = new GraceString("\"));");
    var opresult2515 = request(opresult2513, "++(1)", [1], string2514);
    // call case 2: outer request
    var call2510 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2515);
    setLineNumber(1310);    // compilenode string
    var string2517 = new GraceString("var ");
    // call case 2: outer request
    var call2518 = selfRequest(importedModules["genjs"], "varf(1)", [1], var_nm);
    var opresult2519 = request(string2517, "++(1)", [1], call2518);
    var string2520 = new GraceString(" = do_import(\"");
    var opresult2521 = request(string2520, "++(1)", [1], var_fn);
    var string2522 = new GraceString("\", ");
    var opresult2523 = request(opresult2521, "++(1)", [1], string2522);
    // call case 6: other requests
    var call2525 = request(var_o, "path", [0]);
    // call case 2: outer request
    var call2524 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], call2525);
    var opresult2526 = request(opresult2523, "++(1)", [1], call2524);
    var string2527 = new GraceString(");");
    var opresult2528 = request(opresult2526, "++(1)", [1], string2527);
    var opresult2529 = request(opresult2519, "++(1)", [1], opresult2528);
    // call case 2: outer request
    var call2516 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2529);
    setLineNumber(1311);    // compilenode call
    // call case 6: other requests
    if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
    var call2530 = request(var_initializedVars, "add(1)", [1], var_nm);
    setLineNumber(1312);    // compilenode member
    // call case 6: other requests
    var call2531 = request(var_o, "value", [0]);
    var var_methodIdent = call2531;
    setLineNumber(1313);    // compilenode member
    // call case 6: other requests
    var call2535 = request(var_o, "nameString", [0]);
    // call case 6: other requests
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call2536 = request(var_ast, "signaturePart", [0]);
    var call2534 = request(call2536, "partName(1)scope(1)", [1, 1], call2535, var_currentScope);
    var array2533 = new GraceSequence([call2534]);
    setLineNumber(1314);    // compilenode array
    var array2537 = new GraceSequence([var_methodIdent]);
    // call case 6: other requests
    var call2538 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    setLineNumber(1313);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call2539 = request(var_ast, "methodNode", [0]);
    var call2532 = request(call2539, "new(3)scope(1)", [3, 1], array2533, array2537, call2538, var_currentScope);
    var var_accessor = call2532;
    setLineNumber(1315);    // compilenode member
    // call case 6: other requests
    var call2541 = request(var_o, "line", [0]);
    // call case 6: other requests
    var call2540 = request(var_accessor, "line:=(1)", [1], call2541);
    setLineNumber(1316);    // compilenode member
    // call case 6: other requests
    var call2543 = request(var_o, "linePos", [0]);
    // call case 6: other requests
    var call2542 = request(var_accessor, "linePos:=(1)", [1], call2543);
    setLineNumber(1317);    // compilenode member
    // call case 6: other requests
    var call2545 = request(var_o, "annotations", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call2546 = request(var_accessor, "annotations", [0]);
    var call2544 = request(call2546, "addAll(1)", [1], call2545);
    setLineNumber(1318);    // compilenode call
    // call case 2: outer request
    var call2547 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_accessor);
    setLineNumber(1319);    // compilenode string
    var string2549 = new GraceString("");
    // call case 6: other requests
    var call2550 = request(var_accessor, "register", [0]);
    var opresult2551 = request(string2549, "++(1)", [1], call2550);
    var string2552 = new GraceString(".debug = \"import\";");
    var opresult2553 = request(opresult2551, "++(1)", [1], string2552);
    // call case 2: outer request
    var call2548 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2553);
    var if2554 = GraceDone;
    setLineNumber(1320);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2556 = request(var_o, "isReadable", [0]);
    var call2555 = request(call2556, "not", [0]);
    if (Grace_isTrue(call2555)) {
      setLineNumber(1321);    // compilenode string
      var string2558 = new GraceString("");
      // call case 6: other requests
      if (var_accessor === undefined) raiseUninitializedVariable("accessor");
      var call2559 = request(var_accessor, "register", [0]);
      var opresult2560 = request(string2558, "++(1)", [1], call2559);
      var string2561 = new GraceString(".confidential = true;");
      var opresult2562 = request(opresult2560, "++(1)", [1], string2561);
      // call case 2: outer request
      var call2557 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2562);
      if2554 = call2557;
    }
    setLineNumber(1323);    // compilenode string
    var string2564 = new GraceString("module \"");
    // call case 6: other requests
    // call case 6: other requests
    var call2566 = request(var_o, "nameString", [0]);
    var call2565 = request(call2566, "quoted", [0]);
    var opresult2567 = request(string2564, "++(1)", [1], call2565);
    var string2568 = new GraceString("\"");
    var opresult2569 = request(opresult2567, "++(1)", [1], string2568);
    setLineNumber(1324);    // compilenode member
    // call case 6: other requests
    var call2570 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    var call2571 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call2563 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_var__95__nm, opresult2569, call2570, call2571);
    setLineNumber(1325);    // compilenode string
    var string2573 = new GraceString("GraceDone");
    // call case 6: other requests
    var call2572 = request(var_o, "register:=(1)", [1], string2573);
    return call2572;
  };    // end of method compileimport(_)
  this.methods["compileimport(1)"] = func2481;
  func2481.methodName = "compileimport(1)";
  func2481.paramCounts = [1];
  func2481.paramNames = ["o"];
  func2481.definitionLine = 1300;
  func2481.definitionModule = "genjs";
  var func2574 = function(argcv, var_o) {    // method compilereturn(_), line 1327
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilereturn(_)", 0, numArgs - 1);
    }
    setLineNumber(1328);    // compilenode string
    var string2576 = new GraceString("never returns");
    // call case 6: other requests
    var call2575 = request(var_o, "register:=(1)", [1], string2576);
    setLineNumber(1329);    // compilenode member
    // call case 6: other requests
    var call2578 = request(var_o, "value", [0]);
    // call case 2: outer request
    var call2577 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2578);
    var var_reg = call2577;
    var if2579 = GraceDone;
    setLineNumber(1330);    // compilenode string
    var string2580 = new GraceString("never returns");
    var opresult2581 = request(string2580, "==(1)", [1], var_reg);
    if (Grace_isTrue(opresult2581)) {
      return var_done;
    }
    setLineNumber(1331);    // compilenode string
    var string2583 = new GraceString("return value");
    // call case 6: other requests
    var call2584 = request(var_o, "dtype", [0]);
    // call case 6: other requests
    var call2585 = request(var_o, "line", [0]);
    // call case 2: outer request
    var call2582 = selfRequest(importedModules["genjs"], "compileCheckThat(1)called(1)hasType(1)onLine(1)", [1, 1, 1, 1], var_reg, string2583, call2584, call2585);
    var if2586 = GraceDone;
    setLineNumber(1332);    // compilenode if
    if (var_inBlock === undefined) raiseUninitializedVariable("inBlock");
    if (Grace_isTrue(var_inBlock)) {
      setLineNumber(1333);    // compilenode string
      var string2588 = new GraceString("throw new ReturnException(");
      if (var_reg === undefined) raiseUninitializedVariable("reg");
      var opresult2589 = request(string2588, "++(1)", [1], var_reg);
      var string2590 = new GraceString(", returnTarget);");
      var opresult2591 = request(opresult2589, "++(1)", [1], string2590);
      // call case 2: outer request
      var call2587 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2591);
      if2586 = call2587;
    } else {
      setLineNumber(1335);    // compilenode string
      var string2593 = new GraceString("return ");
      if (var_reg === undefined) raiseUninitializedVariable("reg");
      var opresult2594 = request(string2593, "++(1)", [1], var_reg);
      var string2595 = new GraceString(";");
      var opresult2596 = request(opresult2594, "++(1)", [1], string2595);
      // call case 2: outer request
      var call2592 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2596);
      if2586 = call2592;
    }
    return if2586;
  };    // end of method compilereturn(_)
  this.methods["compilereturn(1)"] = func2574;
  func2574.methodName = "compilereturn(1)";
  func2574.paramCounts = [1];
  func2574.paramNames = ["o"];
  func2574.definitionLine = 1327;
  func2574.definitionModule = "genjs";
  var func2597 = function(argcv, var_o) {    // method compilePrint(_), line 1338
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilePrint(_)", 0, numArgs - 1);
    }
    setLineNumber(1341);    // compilenode array
    var array2599 = new GraceSequence([]);
    // call case 2: outer request
    var call2598 = selfRequest(var_prelude, "list(1)", [1], array2599);
    var var_args = call2598;
    setLineNumber(1342);    // compilenode member
    // call case 6: other requests
    var call2601 = request(var_o, "parts", [0]);
    var block2602 = new GraceBlock(this, 1342, 1);
    block2602.guard = jsTrue;
    block2602.real = function block2602(var_part) {
      setLineNumber(1343);    // compilenode member
      // call case 6: other requests
      var call2604 = request(var_part, "args", [0]);
      var block2605 = new GraceBlock(this, 1343, 1);
      block2605.guard = jsTrue;
      block2605.real = function block2605(var_prm) {
        setLineNumber(1344);    // compilenode call
        // call case 2: outer request
        var call2606 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_prm);
        var var_r = call2606;
        setLineNumber(1345);    // compilenode call
        if (var_r === undefined) raiseUninitializedVariable("r");
        // call case 6: other requests
        if (var_args === undefined) raiseUninitializedVariable("args");
        var call2607 = request(var_args, "push(1)", [1], var_r);
        return call2607;
      };
      let applyMeth2605 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2605.methodName = "apply(1)";
      applyMeth2605.paramCounts = [1];
      applyMeth2605.paramNames = ["prm"];
      applyMeth2605.definitionLine = 1343;
      applyMeth2605.definitionModule = "genjs";
      block2605.methods["apply(1)"] = applyMeth2605;
      let matchesMeth2605 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2605.methodName = "matches(1)";
      matchesMeth2605.paramCounts = [1];
      matchesMeth2605.paramNames = ["prm"];
      matchesMeth2605.definitionLine = 1343;
      matchesMeth2605.definitionModule = "genjs";
      block2605.methods["matches(1)"] = matchesMeth2605;
      // call case 2: outer request
      var call2603 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call2604, block2605);
      return call2603;
    };
    let applyMeth2602 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2602.methodName = "apply(1)";
    applyMeth2602.paramCounts = [1];
    applyMeth2602.paramNames = ["part"];
    applyMeth2602.definitionLine = 1342;
    applyMeth2602.definitionModule = "genjs";
    block2602.methods["apply(1)"] = applyMeth2602;
    let matchesMeth2602 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2602.methodName = "matches(1)";
    matchesMeth2602.paramCounts = [1];
    matchesMeth2602.paramNames = ["part"];
    matchesMeth2602.definitionLine = 1342;
    matchesMeth2602.definitionModule = "genjs";
    block2602.methods["matches(1)"] = matchesMeth2602;
    // call case 2: outer request
    var call2600 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call2601, block2602);
    var if2608 = GraceDone;
    setLineNumber(1348);    // compilenode member
    // call case 6: other requests
    var call2609 = request(var_args, "size", [0]);
    var opresult2610 = request(call2609, "\u2260(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult2610)) {
      setLineNumber(1349);    // compilenode string
      var string2612 = new GraceString("method print takes a single argument");
      setLineNumber(1350);    // compilenode member
      // call case 6: other requests
      var call2613 = request(var_o, "line", [0]);
      // call case 6: other requests
      var call2614 = request(var_o, "linePos", [0]);
      // call case 6: other requests
      var call2615 = request(var_o, "linePos", [0]);
      var sum2616 = request(call2615, "+(1)", [1], new GraceNum(4));
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2611 = request(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string2612, call2613, call2614, sum2616);
      if2608 = call2611;
    } else {
      setLineNumber(1352);    // compilenode string
      var string2618 = new GraceString("Grace_print(");
      // call case 6: other requests
      if (var_args === undefined) raiseUninitializedVariable("args");
      var call2619 = request(var_args, "first", [0]);
      var opresult2620 = request(string2618, "++(1)", [1], call2619);
      var string2621 = new GraceString(");");
      var opresult2622 = request(opresult2620, "++(1)", [1], string2621);
      // call case 2: outer request
      var call2617 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2622);
      if2608 = call2617;
    }
    setLineNumber(1354);    // compilenode string
    var string2624 = new GraceString("GraceDone");
    // call case 6: other requests
    var call2623 = request(var_o, "register:=(1)", [1], string2624);
    return call2623;
  };    // end of method compilePrint(_)
  this.methods["compilePrint(1)"] = func2597;
  func2597.methodName = "compilePrint(1)";
  func2597.paramCounts = [1];
  func2597.paramNames = ["o"];
  func2597.definitionLine = 1338;
  func2597.definitionModule = "genjs";
  var func2625 = function(argcv, var_o) {    // method compileNativeCode(_), line 1356
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileNativeCode(_)", 0, numArgs - 1);
    }
    setLineNumber(1357);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call2629 = request(var_o, "parts", [0]);
    var call2628 = request(call2629, "first", [0]);
    var call2627 = request(call2628, "args", [0]);
    var call2626 = request(call2627, "first", [0]);
    var var_param1 = call2626;
    var if2630 = GraceDone;
    setLineNumber(1358);    // compilenode member
    // call case 6: other requests
    var call2631 = request(var_param1, "kind", [0]);
    var string2632 = new GraceString("string");
    var opresult2633 = request(call2631, "\u2260(1)", [1], string2632);
    if (Grace_isTrue(opresult2633)) {
      setLineNumber(1359);    // compilenode string
      var string2635 = new GraceString("the first argument to native(_)code(_) must be a string literal");
      setLineNumber(1360);    // compilenode member
      // call case 6: other requests
      if (var_param1 === undefined) raiseUninitializedVariable("param1");
      var call2636 = request(var_param1, "line", [0]);
      // call case 6: other requests
      if (var_param1 === undefined) raiseUninitializedVariable("param1");
      var call2637 = request(var_param1, "linePos", [0]);
      // call case 6: other requests
      if (var_param1 === undefined) raiseUninitializedVariable("param1");
      var call2638 = request(var_param1, "linePos", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2634 = request(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string2635, call2636, call2637, call2638);
      if2630 = call2634;
    }
    var if2639 = GraceDone;
    setLineNumber(1362);    // compilenode member
    // call case 6: other requests
    var call2640 = request(var_param1, "value", [0]);
    var string2641 = new GraceString("js");
    var opresult2642 = request(call2640, "\u2260(1)", [1], string2641);
    if (Grace_isTrue(opresult2642)) {
      setLineNumber(1363);    // compilenode string
      var string2644 = new GraceString("GraceDone");
      // call case 6: other requests
      var call2643 = request(var_o, "register:=(1)", [1], string2644);
      setLineNumber(1364);    // compilenode return
      return var_done;
    }
    setLineNumber(1366);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call2648 = request(var_o, "parts", [0]);
    var call2647 = request(call2648, "second", [0]);
    var call2646 = request(call2647, "args", [0]);
    var call2645 = request(call2646, "first", [0]);
    var var_param2 = call2645;
    var if2649 = GraceDone;
    setLineNumber(1367);    // compilenode member
    // call case 6: other requests
    var call2650 = request(var_param2, "kind", [0]);
    var string2651 = new GraceString("string");
    var opresult2652 = request(call2650, "\u2260(1)", [1], string2651);
    if (Grace_isTrue(opresult2652)) {
      setLineNumber(1368);    // compilenode string
      var string2654 = new GraceString("the second argument to native(_)code(_) must be a string literal");
      setLineNumber(1369);    // compilenode member
      // call case 6: other requests
      if (var_param2 === undefined) raiseUninitializedVariable("param2");
      var call2655 = request(var_param2, "line", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2653 = request(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], string2654, call2655);
      if2649 = call2653;
    }
    setLineNumber(1371);    // compilenode string
    var string2657 = new GraceString("result");
    // call case 6: other requests
    var call2656 = request(var_o, "register:=(1)", [1], string2657);
    setLineNumber(1372);    // compilenode member
    // call case 6: other requests
    var call2658 = request(var_param2, "value", [0]);
    var var_codeString = call2658;
    setLineNumber(1373);    // compilenode string
    var string2660 = new GraceString("var result = GraceDone;    // start native code from line ");
    // call case 6: other requests
    var call2661 = request(var_o, "line", [0]);
    var opresult2662 = request(string2660, "++(1)", [1], call2661);
    var string2663 = new GraceString("");
    var opresult2664 = request(opresult2662, "++(1)", [1], string2663);
    // call case 2: outer request
    var call2659 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2664);
    setLineNumber(1374);    // compilenode string
    var string2666 = new GraceString("");
    var opresult2667 = request(string2666, "++(1)", [1], var_codeString);
    var string2668 = new GraceString("   // end native code insertion");
    var opresult2669 = request(opresult2667, "++(1)", [1], string2668);
    // call case 2: outer request
    var call2665 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2669);
    return call2665;
  };    // end of method compileNativeCode(_)
  this.methods["compileNativeCode(1)"] = func2625;
  func2625.methodName = "compileNativeCode(1)";
  func2625.paramCounts = [1];
  func2625.paramNames = ["o"];
  func2625.definitionLine = 1356;
  func2625.definitionModule = "genjs";
  var func2670 = function(argcv, var_o) {    // method compileNull(_), line 1376
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileNull(_)", 0, numArgs - 1);
    }
    setLineNumber(1377);    // compilenode string
    var string2672 = new GraceString("nullDefinition();");
    // call case 2: outer request
    var call2671 = selfRequest(importedModules["genjs"], "out(1)", [1], string2672);
    return call2671;
  };    // end of method compileNull(_)
  this.methods["compileNull(1)"] = func2670;
  func2670.methodName = "compileNull(1)";
  func2670.paramCounts = [1];
  func2670.paramNames = ["o"];
  func2670.definitionLine = 1376;
  func2670.definitionModule = "genjs";
  var func2673 = function(argcv, var_str) {    // method stripLeadingZeros(_), line 1379
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("stripLeadingZeros(_)", 0, numArgs - 1);
    }
    var if2674 = GraceDone;
    setLineNumber(1381);    // compilenode member
    // call case 6: other requests
    var call2675 = request(var_str, "first", [0]);
    var string2676 = new GraceString("0");
    var opresult2677 = request(call2675, "\u2260(1)", [1], string2676);
    if (Grace_isTrue(opresult2677)) {
      return var_str;
    }
    setLineNumber(1382);    // compilenode vardec
    var var_leading = GraceTrue;
    setLineNumber(1383);    // compilenode string
    var string2678 = new GraceString("");
    var var_result = string2678;
    setLineNumber(1384);    // compilenode block
    var block2680 = new GraceBlock(this, 1384, 1);
    block2680.guard = jsTrue;
    block2680.real = function block2680(var_ch) {
      var if2681 = GraceDone;
      setLineNumber(1385);    // compilenode op
      if (var_leading === undefined) raiseUninitializedVariable("leading");
      var string2682 = new GraceString("0");
      var opresult2683 = request(var_ch, "\u2260(1)", [1], string2682);
      var opresult2684 = request(var_leading, "&&(1)", [1], opresult2683);
      if (Grace_isTrue(opresult2684)) {
        setLineNumber(1386);    // compilenode bind
        var_leading = GraceFalse;
        setLineNumber(1387);    // compilenode op
        if (var_result === undefined) raiseUninitializedVariable("result");
        var opresult2685 = request(var_result, "++(1)", [1], var_ch);
        var_result = opresult2685;
        if2681 = GraceDone;
      } else {
        var if2686 = GraceDone;
        setLineNumber(1388);    // compilenode member
        // call case 6: other requests
        if (var_leading === undefined) raiseUninitializedVariable("leading");
        var call2687 = request(var_leading, "not", [0]);
        if (Grace_isTrue(call2687)) {
          setLineNumber(1389);    // compilenode op
          if (var_result === undefined) raiseUninitializedVariable("result");
          var opresult2688 = request(var_result, "++(1)", [1], var_ch);
          var_result = opresult2688;
          if2686 = GraceDone;
        }
        if2681 = if2686;
      }
      return if2681;
    };
    let applyMeth2680 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2680.methodName = "apply(1)";
    applyMeth2680.paramCounts = [1];
    applyMeth2680.paramNames = ["ch"];
    applyMeth2680.definitionLine = 1384;
    applyMeth2680.definitionModule = "genjs";
    block2680.methods["apply(1)"] = applyMeth2680;
    let matchesMeth2680 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2680.methodName = "matches(1)";
    matchesMeth2680.paramCounts = [1];
    matchesMeth2680.paramNames = ["ch"];
    matchesMeth2680.definitionLine = 1384;
    matchesMeth2680.definitionModule = "genjs";
    block2680.methods["matches(1)"] = matchesMeth2680;
    // call case 6: other requests
    var call2679 = request(var_str, "do(1)", [1], block2680);
    var if2689 = GraceDone;
    setLineNumber(1392);    // compilenode member
    // call case 6: other requests
    var call2690 = request(var_result, "isEmpty", [0]);
    if (Grace_isTrue(call2690)) {
      var string2691 = new GraceString("0");
      return string2691;
    }
    setLineNumber(1393);    // compilenode return
    return var_result;
  };    // end of method stripLeadingZeros(_)
  this.methods["stripLeadingZeros(1)"] = func2673;
  func2673.methodName = "stripLeadingZeros(1)";
  func2673.paramCounts = [1];
  func2673.paramNames = ["str"];
  func2673.definitionLine = 1379;
  func2673.definitionModule = "genjs";
  var func2692 = function(argcv, var_o) {    // method compilenode(_), line 1396
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compilenode(_)", 0, numArgs - 1);
    }
    setLineNumber(1397);    // compilenode op
    if (var_compilationDepth === undefined) raiseUninitializedVariable("compilationDepth");
    var sum2693 = request(var_compilationDepth, "+(1)", [1], new GraceNum(1));
    var_compilationDepth = sum2693;
    setLineNumber(1398);    // compilenode member
    // call case 6: other requests
    var call2694 = request(var_o, "kind", [0]);
    var var_oKind = call2694;
    setLineNumber(1399);    // compilenode call
    // call case 2: outer request
    var call2695 = selfRequest(importedModules["genjs"], "tallyNode(1)", [1], var_oKind);
    var if2696 = GraceDone;
    setLineNumber(1400);    // compilenode string
    var string2697 = new GraceString("identifier");
    var opresult2698 = request(var_oKind, "==(1)", [1], string2697);
    if (Grace_isTrue(opresult2698)) {
      setLineNumber(1401);    // compilenode call
      // call case 2: outer request
      var call2699 = selfRequest(importedModules["genjs"], "compileidentifier(1)", [1], var_o);
      if2696 = call2699;
    } else {
      var if2700 = GraceDone;
      setLineNumber(1402);    // compilenode op
      if (var_oKind === undefined) raiseUninitializedVariable("oKind");
      var string2701 = new GraceString("method");
      var opresult2702 = request(var_oKind, "==(1)", [1], string2701);
      if (Grace_isTrue(opresult2702)) {
        setLineNumber(1403);    // compilenode string
        var string2704 = new GraceString("this");
        // call case 2: outer request
        var call2703 = selfRequest(importedModules["genjs"], "compilemethodnode(1)in(1)", [1, 1], var_o, string2704);
        if2700 = call2703;
      } else {
        var if2705 = GraceDone;
        setLineNumber(1404);    // compilenode op
        if (var_oKind === undefined) raiseUninitializedVariable("oKind");
        var string2706 = new GraceString("generic");
        var opresult2707 = request(var_oKind, "==(1)", [1], string2706);
        if (Grace_isTrue(opresult2707)) {
          setLineNumber(1405);    // compilenode member
          // call case 6: other requests
          var call2710 = request(var_o, "value", [0]);
          // call case 2: outer request
          var call2709 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call2710);
          // call case 6: other requests
          var call2708 = request(var_o, "register:=(1)", [1], call2709);
          if2705 = call2708;
        } else {
          setLineNumber(1407);    // compilenode member
          // call case 6: other requests
          var call2712 = request(var_o, "line", [0]);
          var string2713 = new GraceString("compilenode ");
          if (var_oKind === undefined) raiseUninitializedVariable("oKind");
          var opresult2714 = request(string2713, "++(1)", [1], var_oKind);
          var string2715 = new GraceString("");
          var opresult2716 = request(opresult2714, "++(1)", [1], string2715);
          // call case 2: outer request
          var call2711 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call2712, opresult2716);
          var if2717 = GraceDone;
          setLineNumber(1409);    // compilenode op
          if (var_oKind === undefined) raiseUninitializedVariable("oKind");
          var string2718 = new GraceString("member");
          var opresult2719 = request(var_oKind, "==(1)", [1], string2718);
          if (Grace_isTrue(opresult2719)) {
            setLineNumber(1410);    // compilenode call
            // call case 2: outer request
            var call2720 = selfRequest(importedModules["genjs"], "compilemember(1)", [1], var_o);
            if2717 = call2720;
          } else {
            var if2721 = GraceDone;
            setLineNumber(1411);    // compilenode op
            if (var_oKind === undefined) raiseUninitializedVariable("oKind");
            var string2722 = new GraceString("call");
            var opresult2723 = request(var_oKind, "==(1)", [1], string2722);
            if (Grace_isTrue(opresult2723)) {
              var if2724 = GraceDone;
              setLineNumber(1412);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2726 = request(var_o, "receiver", [0]);
              var call2725 = request(call2726, "isPrelude", [0]);
              if (Grace_isTrue(call2725)) {
                var if2727 = GraceDone;
                setLineNumber(1413);    // compilenode member
                // call case 6: other requests
                var call2728 = request(var_o, "nameString", [0]);
                var string2729 = new GraceString("print(1)");
                var opresult2730 = request(call2728, "==(1)", [1], string2729);
                if (Grace_isTrue(opresult2730)) {
                  setLineNumber(1414);    // compilenode call
                  // call case 2: outer request
                  var call2731 = selfRequest(importedModules["genjs"], "compilePrint(1)", [1], var_o);
                  if2727 = call2731;
                } else {
                  var if2732 = GraceDone;
                  setLineNumber(1415);    // compilenode member
                  // call case 6: other requests
                  var call2733 = request(var_o, "nameString", [0]);
                  var string2734 = new GraceString("native(1)code(1)");
                  var opresult2735 = request(call2733, "==(1)", [1], string2734);
                  if (Grace_isTrue(opresult2735)) {
                    setLineNumber(1416);    // compilenode call
                    // call case 2: outer request
                    var call2736 = selfRequest(importedModules["genjs"], "compileNativeCode(1)", [1], var_o);
                    if2732 = call2736;
                  } else {
                    setLineNumber(1418);    // compilenode call
                    // call case 2: outer request
                    var call2737 = selfRequest(importedModules["genjs"], "compilecall(1)", [1], var_o);
                    if2732 = call2737;
                  }
                  if2727 = if2732;
                }
                if2724 = if2727;
              } else {
                setLineNumber(1421);    // compilenode call
                // call case 2: outer request
                var call2738 = selfRequest(importedModules["genjs"], "compilecall(1)", [1], var_o);
                if2724 = call2738;
              }
              if2721 = if2724;
            } else {
              var if2739 = GraceDone;
              setLineNumber(1423);    // compilenode op
              if (var_oKind === undefined) raiseUninitializedVariable("oKind");
              var string2740 = new GraceString("op");
              var opresult2741 = request(var_oKind, "==(1)", [1], string2740);
              if (Grace_isTrue(opresult2741)) {
                setLineNumber(1424);    // compilenode call
                // call case 2: outer request
                var call2742 = selfRequest(importedModules["genjs"], "compileop(1)", [1], var_o);
                if2739 = call2742;
              } else {
                var if2743 = GraceDone;
                setLineNumber(1425);    // compilenode op
                if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                var string2744 = new GraceString("num");
                var opresult2745 = request(var_oKind, "==(1)", [1], string2744);
                if (Grace_isTrue(opresult2745)) {
                  setLineNumber(1426);    // compilenode string
                  var string2747 = new GraceString("new GraceNum(");
                  // call case 6: other requests
                  var call2749 = request(var_o, "value", [0]);
                  // call case 2: outer request
                  var call2748 = selfRequest(importedModules["genjs"], "stripLeadingZeros(1)", [1], call2749);
                  var opresult2750 = request(string2747, "++(1)", [1], call2748);
                  var string2751 = new GraceString(")");
                  var opresult2752 = request(opresult2750, "++(1)", [1], string2751);
                  // call case 6: other requests
                  var call2746 = request(var_o, "register:=(1)", [1], opresult2752);
                  if2743 = call2746;
                } else {
                  var if2753 = GraceDone;
                  setLineNumber(1427);    // compilenode op
                  if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                  var string2754 = new GraceString("string");
                  var opresult2755 = request(var_oKind, "==(1)", [1], string2754);
                  if (Grace_isTrue(opresult2755)) {
                    setLineNumber(1429);    // compilenode member
                    // call case 6: other requests
                    var call2757 = request(var_o, "value", [0]);
                    // call case 2: outer request
                    var call2756 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], call2757);
                    var var_os = call2756;
                    setLineNumber(1430);    // compilenode string
                    var string2759 = new GraceString("var string");
                    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
                    var opresult2760 = request(string2759, "++(1)", [1], var_auto__95__count);
                    var string2761 = new GraceString(" = new GraceString(\"");
                    var opresult2762 = request(opresult2760, "++(1)", [1], string2761);
                    if (var_os === undefined) raiseUninitializedVariable("os");
                    var opresult2763 = request(opresult2762, "++(1)", [1], var_os);
                    setLineNumber(1431);    // compilenode string
                    var string2764 = new GraceString("\");");
                    var opresult2765 = request(opresult2763, "++(1)", [1], string2764);
                    // call case 2: outer request
                    var call2758 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2765);
                    setLineNumber(1432);    // compilenode string
                    var string2767 = new GraceString("string");
                    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
                    var opresult2768 = request(string2767, "++(1)", [1], var_auto__95__count);
                    // call case 6: other requests
                    var call2766 = request(var_o, "register:=(1)", [1], opresult2768);
                    setLineNumber(1433);    // compilenode op
                    if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
                    var sum2769 = request(var_auto__95__count, "+(1)", [1], new GraceNum(1));
                    var_auto__95__count = sum2769;
                    if2753 = GraceDone;
                  } else {
                    var if2770 = GraceDone;
                    setLineNumber(1434);    // compilenode op
                    if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                    var string2771 = new GraceString("bind");
                    var opresult2772 = request(var_oKind, "==(1)", [1], string2771);
                    if (Grace_isTrue(opresult2772)) {
                      setLineNumber(1435);    // compilenode call
                      // call case 2: outer request
                      var call2773 = selfRequest(importedModules["genjs"], "compilebind(1)", [1], var_o);
                      if2770 = call2773;
                    } else {
                      var if2774 = GraceDone;
                      setLineNumber(1436);    // compilenode op
                      if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                      var string2775 = new GraceString("return");
                      var opresult2776 = request(var_oKind, "==(1)", [1], string2775);
                      if (Grace_isTrue(opresult2776)) {
                        setLineNumber(1437);    // compilenode call
                        // call case 2: outer request
                        var call2777 = selfRequest(importedModules["genjs"], "compilereturn(1)", [1], var_o);
                        if2774 = call2777;
                      } else {
                        var if2778 = GraceDone;
                        setLineNumber(1438);    // compilenode op
                        if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                        var string2779 = new GraceString("defdec");
                        var opresult2780 = request(var_oKind, "==(1)", [1], string2779);
                        if (Grace_isTrue(opresult2780)) {
                          setLineNumber(1439);    // compilenode call
                          // call case 2: outer request
                          var call2781 = selfRequest(importedModules["genjs"], "compiledefdec(1)", [1], var_o);
                          if2778 = call2781;
                        } else {
                          var if2782 = GraceDone;
                          setLineNumber(1440);    // compilenode op
                          if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                          var string2783 = new GraceString("vardec");
                          var opresult2784 = request(var_oKind, "==(1)", [1], string2783);
                          if (Grace_isTrue(opresult2784)) {
                            setLineNumber(1441);    // compilenode call
                            // call case 2: outer request
                            var call2785 = selfRequest(importedModules["genjs"], "compilevardec(1)", [1], var_o);
                            if2782 = call2785;
                          } else {
                            var if2786 = GraceDone;
                            setLineNumber(1442);    // compilenode op
                            if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                            var string2787 = new GraceString("block");
                            var opresult2788 = request(var_oKind, "==(1)", [1], string2787);
                            if (Grace_isTrue(opresult2788)) {
                              setLineNumber(1443);    // compilenode call
                              // call case 2: outer request
                              var call2789 = selfRequest(importedModules["genjs"], "compileblock(1)", [1], var_o);
                              if2786 = call2789;
                            } else {
                              var if2790 = GraceDone;
                              setLineNumber(1444);    // compilenode op
                              if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                              var string2791 = new GraceString("array");
                              var opresult2792 = request(var_oKind, "==(1)", [1], string2791);
                              if (Grace_isTrue(opresult2792)) {
                                setLineNumber(1445);    // compilenode call
                                // call case 2: outer request
                                var call2793 = selfRequest(importedModules["genjs"], "compilearray(1)", [1], var_o);
                                if2790 = call2793;
                              } else {
                                var if2794 = GraceDone;
                                setLineNumber(1446);    // compilenode op
                                if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                var string2795 = new GraceString("if");
                                var opresult2796 = request(var_oKind, "==(1)", [1], string2795);
                                if (Grace_isTrue(opresult2796)) {
                                  setLineNumber(1447);    // compilenode call
                                  // call case 2: outer request
                                  var call2797 = selfRequest(importedModules["genjs"], "compileif(1)", [1], var_o);
                                  if2794 = call2797;
                                } else {
                                  var if2798 = GraceDone;
                                  setLineNumber(1448);    // compilenode op
                                  if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                  var string2799 = new GraceString("trycatch");
                                  var opresult2800 = request(var_oKind, "==(1)", [1], string2799);
                                  if (Grace_isTrue(opresult2800)) {
                                    setLineNumber(1449);    // compilenode call
                                    // call case 2: outer request
                                    var call2801 = selfRequest(importedModules["genjs"], "compiletrycatch(1)", [1], var_o);
                                    if2798 = call2801;
                                  } else {
                                    var if2802 = GraceDone;
                                    setLineNumber(1450);    // compilenode op
                                    if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                    var string2803 = new GraceString("matchcase");
                                    var opresult2804 = request(var_oKind, "==(1)", [1], string2803);
                                    if (Grace_isTrue(opresult2804)) {
                                      setLineNumber(1451);    // compilenode call
                                      // call case 2: outer request
                                      var call2805 = selfRequest(importedModules["genjs"], "compilematchcase(1)", [1], var_o);
                                      if2802 = call2805;
                                    } else {
                                      var if2806 = GraceDone;
                                      setLineNumber(1452);    // compilenode op
                                      if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                      var string2807 = new GraceString("object");
                                      var opresult2808 = request(var_oKind, "==(1)", [1], string2807);
                                      if (Grace_isTrue(opresult2808)) {
                                        setLineNumber(1453);    // compilenode string
                                        var string2810 = new GraceString("this");
                                        // call case 2: outer request
                                        var call2809 = selfRequest(importedModules["genjs"], "compileobject(2)", [2], var_o, string2810);
                                        if2806 = call2809;
                                      } else {
                                        var if2811 = GraceDone;
                                        setLineNumber(1454);    // compilenode op
                                        if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                        var string2812 = new GraceString("typedec");
                                        var opresult2813 = request(var_oKind, "==(1)", [1], string2812);
                                        if (Grace_isTrue(opresult2813)) {
                                          setLineNumber(1455);    // compilenode string
                                          var string2815 = new GraceString("this");
                                          // call case 2: outer request
                                          var call2814 = selfRequest(importedModules["genjs"], "compiletypedec(1)in(1)", [1, 1], var_o, string2815);
                                          if2811 = call2814;
                                        } else {
                                          var if2816 = GraceDone;
                                          setLineNumber(1456);    // compilenode op
                                          if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                          var string2817 = new GraceString("typeliteral");
                                          var opresult2818 = request(var_oKind, "==(1)", [1], string2817);
                                          if (Grace_isTrue(opresult2818)) {
                                            setLineNumber(1457);    // compilenode string
                                            var string2820 = new GraceString("this");
                                            // call case 2: outer request
                                            var call2819 = selfRequest(importedModules["genjs"], "compiletypeliteral(1)in(1)", [1, 1], var_o, string2820);
                                            if2816 = call2819;
                                          } else {
                                            var if2821 = GraceDone;
                                            setLineNumber(1458);    // compilenode op
                                            if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                            var string2822 = new GraceString("inherit");
                                            var opresult2823 = request(var_oKind, "==(1)", [1], string2822);
                                            if (Grace_isTrue(opresult2823)) {
                                              setLineNumber(1459);    // compilenode string
                                              var string2825 = new GraceString("irrelevant");
                                              // call case 2: outer request
                                              var call2824 = selfRequest(importedModules["genjs"], "compileInherit(1)forClass(1)", [1, 1], var_o, string2825);
                                              if2821 = call2824;
                                            } else {
                                              var if2826 = GraceDone;
                                              setLineNumber(1460);    // compilenode op
                                              if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                              var string2827 = new GraceString("outer");
                                              var opresult2828 = request(var_oKind, "==(1)", [1], string2827);
                                              if (Grace_isTrue(opresult2828)) {
                                                setLineNumber(1461);    // compilenode call
                                                // call case 2: outer request
                                                var call2829 = selfRequest(importedModules["genjs"], "compileOuter(1)", [1], var_o);
                                                if2826 = call2829;
                                              } else {
                                                var if2830 = GraceDone;
                                                setLineNumber(1462);    // compilenode op
                                                if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                                var string2831 = new GraceString("dialect");
                                                var opresult2832 = request(var_oKind, "==(1)", [1], string2831);
                                                if (Grace_isTrue(opresult2832)) {
                                                  setLineNumber(1463);    // compilenode call
                                                  // call case 2: outer request
                                                  var call2833 = selfRequest(importedModules["genjs"], "compiledialect(1)", [1], var_o);
                                                  if2830 = call2833;
                                                } else {
                                                  var if2834 = GraceDone;
                                                  setLineNumber(1464);    // compilenode op
                                                  if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                                  var string2835 = new GraceString("import");
                                                  var opresult2836 = request(var_oKind, "==(1)", [1], string2835);
                                                  if (Grace_isTrue(opresult2836)) {
                                                    setLineNumber(1465);    // compilenode call
                                                    // call case 2: outer request
                                                    var call2837 = selfRequest(importedModules["genjs"], "compileimport(1)", [1], var_o);
                                                    if2834 = call2837;
                                                  } else {
                                                    var if2838 = GraceDone;
                                                    setLineNumber(1466);    // compilenode member
                                                    // call case 6: other requests
                                                    var call2839 = request(var_o, "isNull", [0]);
                                                    if (Grace_isTrue(call2839)) {
                                                      setLineNumber(1467);    // compilenode call
                                                      // call case 2: outer request
                                                      var call2840 = selfRequest(importedModules["genjs"], "compileNull(1)", [1], var_o);
                                                      if2838 = call2840;
                                                    } else {
                                                      setLineNumber(1469);    // compilenode string
                                                      var string2842 = new GraceString("unrecognized ast node \"");
                                                      if (var_oKind === undefined) raiseUninitializedVariable("oKind");
                                                      var opresult2843 = request(string2842, "++(1)", [1], var_oKind);
                                                      var string2844 = new GraceString("\".");
                                                      var opresult2845 = request(opresult2843, "++(1)", [1], string2844);
                                                      // call case 6: other requests
                                                      // call case 2: outer request
                                                      var call2846 = selfRequest(var_prelude, "ProgrammingError", [0]);
                                                      var call2841 = request(call2846, "raise(1)", [1], opresult2845);
                                                      if2838 = call2841;
                                                    }
                                                    if2834 = if2838;
                                                  }
                                                  if2830 = if2834;
                                                }
                                                if2826 = if2830;
                                              }
                                              if2821 = if2826;
                                            }
                                            if2816 = if2821;
                                          }
                                          if2811 = if2816;
                                        }
                                        if2806 = if2811;
                                      }
                                      if2802 = if2806;
                                    }
                                    if2798 = if2802;
                                  }
                                  if2794 = if2798;
                                }
                                if2790 = if2794;
                              }
                              if2786 = if2790;
                            }
                            if2782 = if2786;
                          }
                          if2778 = if2782;
                        }
                        if2774 = if2778;
                      }
                      if2770 = if2774;
                    }
                    if2753 = if2770;
                  }
                  if2743 = if2753;
                }
                if2739 = if2743;
              }
              if2721 = if2739;
            }
            if2717 = if2721;
          }
          if2705 = if2717;
        }
        if2700 = if2705;
      }
      if2696 = if2700;
    }
    setLineNumber(1472);    // compilenode op
    if (var_compilationDepth === undefined) raiseUninitializedVariable("compilationDepth");
    var diff2847 = request(var_compilationDepth, "-(1)", [1], new GraceNum(1));
    var_compilationDepth = diff2847;
    setLineNumber(1473);    // compilenode member
    // call case 6: other requests
    var call2848 = request(var_o, "register", [0]);
    return call2848;
  };    // end of method compilenode(_)
  this.methods["compilenode(1)"] = func2692;
  func2692.methodName = "compilenode(1)";
  func2692.paramCounts = [1];
  func2692.paramNames = ["o"];
  func2692.definitionLine = 1396;
  func2692.definitionModule = "genjs";
  var func2849 = function(argcv, var_kind) {    // method tallyNode(_), line 1476
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("tallyNode(_)", 0, numArgs - 1);
    }
    var if2850 = GraceDone;
    setLineNumber(1477);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2851 = request(var_util, "verbosity", [0]);
    var opresult2852 = request(call2851, ">(1)", [1], new GraceNum(50));
    if (Grace_isTrue(opresult2852)) {
      setLineNumber(1478);    // compilenode block
      var block2854 = new GraceBlock(this, 1478, 0);
      block2854.guard = jsTrue;
      block2854.real = function block2854() {
        setLineNumber(1478);    // compilenode num
        return new GraceNum(0);
      };
      let applyMeth2854 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth2854.methodName = "apply";
      applyMeth2854.paramCounts = [0];
      applyMeth2854.paramNames = [];
      applyMeth2854.definitionLine = 1478;
      applyMeth2854.definitionModule = "genjs";
      block2854.methods["apply"] = applyMeth2854;
      // call case 6: other requests
      if (var_nodeTally === undefined) raiseUninitializedVariable("nodeTally");
      var call2853 = request(var_nodeTally, "at(1)ifAbsent(1)", [1, 1], var_kind, block2854);
      var var_count = call2853;
      setLineNumber(1479);    // compilenode op
      if (var_count === undefined) raiseUninitializedVariable("count");
      var sum2856 = request(var_count, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      if (var_nodeTally === undefined) raiseUninitializedVariable("nodeTally");
      var call2855 = request(var_nodeTally, "at(1)put(1)", [1, 1], var_kind, sum2856);
      if2850 = call2855;
    }
    return if2850;
  };    // end of method tallyNode(_)
  this.methods["tallyNode(1)"] = func2849;
  func2849.methodName = "tallyNode(1)";
  func2849.paramCounts = [1];
  func2849.paramNames = ["kind"];
  func2849.definitionLine = 1476;
  func2849.definitionModule = "genjs";
  var func2857 = function(argcv) {    // method printNodeTally, line 1485
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("printNodeTally", 0, numArgs - 0);
    }
    var if2858 = GraceDone;
    setLineNumber(1486);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2859 = request(var_util, "verbosity", [0]);
    var opresult2860 = request(call2859, ">(1)", [1], new GraceNum(50));
    if (Grace_isTrue(opresult2860)) {
      setLineNumber(1487);    // compilenode member
      // call case 6: other requests
      if (var_nodeTally === undefined) raiseUninitializedVariable("nodeTally");
      var call2861 = request(var_nodeTally, "bindings", [0]);
      var var_bindingList = call2861;
      setLineNumber(1488);    // compilenode string
      var string2862 = new GraceString("AST nodes compiled:");
      Grace_print(string2862);
      setLineNumber(1489);    // compilenode block
      var block2864 = new GraceBlock(this, 1489, 1);
      block2864.guard = jsTrue;
      block2864.real = function block2864(var_b) {
        setLineNumber(1490);    // compilenode string
        var string2865 = new GraceString("    ");
        // call case 6: other requests
        var call2866 = request(var_b, "key", [0]);
        var opresult2867 = request(string2865, "++(1)", [1], call2866);
        var string2868 = new GraceString("\u0009");
        var opresult2869 = request(opresult2867, "++(1)", [1], string2868);
        // call case 6: other requests
        var call2870 = request(var_b, "value", [0]);
        var opresult2871 = request(opresult2869, "++(1)", [1], call2870);
        var string2872 = new GraceString("");
        var opresult2873 = request(opresult2871, "++(1)", [1], string2872);
        Grace_print(opresult2873);
        return GraceDone;
      };
      let applyMeth2864 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2864.methodName = "apply(1)";
      applyMeth2864.paramCounts = [1];
      applyMeth2864.paramNames = ["b"];
      applyMeth2864.definitionLine = 1489;
      applyMeth2864.definitionModule = "genjs";
      block2864.methods["apply(1)"] = applyMeth2864;
      let matchesMeth2864 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2864.methodName = "matches(1)";
      matchesMeth2864.paramCounts = [1];
      matchesMeth2864.paramNames = ["b"];
      matchesMeth2864.definitionLine = 1489;
      matchesMeth2864.definitionModule = "genjs";
      block2864.methods["matches(1)"] = matchesMeth2864;
      // call case 6: other requests
      setLineNumber(1489);    // compilenode call
      if (var_valueCompare === undefined) raiseUninitializedVariable("valueCompare");
      // call case 6: other requests
      if (var_bindingList === undefined) raiseUninitializedVariable("bindingList");
      var call2874 = request(var_bindingList, "sortedBy(1)", [1], var_valueCompare);
      var call2863 = request(call2874, "do(1)", [1], block2864);
      if2858 = call2863;
    }
    return if2858;
  };    // end of method printNodeTally
  this.methods["printNodeTally"] = func2857;
  func2857.methodName = "printNodeTally";
  func2857.paramCounts = [0];
  func2857.paramNames = [];
  func2857.definitionLine = 1485;
  func2857.definitionModule = "genjs";
  var func2875 = function(argcv, var_moduleObject) {    // method initializeCodeGenerator(_), line 1495
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("initializeCodeGenerator(_)", 0, numArgs - 1);
    }
    setLineNumber(1496);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2877 = request(var_moduleObject, "theDialect", [0]);
    var call2876 = request(call2877, "value", [0]);
    var string2878 = new GraceString("none");
    var opresult2879 = request(call2876, "==(1)", [1], string2878);
    var var_isPrelude = opresult2879;
    var if2880 = GraceDone;
    setLineNumber(1497);    // compilenode string
    var string2882 = new GraceString("ExtendedLineups");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2883 = request(var_util, "extensions", [0]);
    var call2881 = request(call2883, "containsKey(1)", [1], string2882);
    if (Grace_isTrue(call2881)) {
      setLineNumber(1498);    // compilenode string
      var string2885 = new GraceString("The ExtendedLineups pragma is no longer supported. ");
      setLineNumber(1499);    // compilenode string
      var string2886 = new GraceString("Brackets `[ ... ]` construct sequences; if you want a list, use `list [ ... ]`");
      var opresult2887 = request(string2885, "++(1)", [1], string2886);
      setLineNumber(1500);    // compilenode num
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2884 = request(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], opresult2887, new GraceNum(1));
      if2880 = call2884;
    }
    var if2888 = GraceDone;
    setLineNumber(1502);    // compilenode string
    var string2890 = new GraceString("noChecks");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2891 = request(var_util, "extensions", [0]);
    var call2889 = request(call2891, "containsKey(1)", [1], string2890);
    if (Grace_isTrue(call2889)) {
      setLineNumber(1503);    // compilenode bind
      var_emitTypeChecks = GraceFalse;
      setLineNumber(1504);    // compilenode bind
      var_emitUndefinedChecks = GraceFalse;
      setLineNumber(1505);    // compilenode bind
      var_emitArgChecks = GraceFalse;
      setLineNumber(1506);    // compilenode bind
      var_emitPositions = GraceFalse;
      if2888 = GraceDone;
    }
    var if2892 = GraceDone;
    setLineNumber(1508);    // compilenode string
    var string2894 = new GraceString("noTypeChecks");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2895 = request(var_util, "extensions", [0]);
    var call2893 = request(call2895, "containsKey(1)", [1], string2894);
    if (Grace_isTrue(call2893)) {
      setLineNumber(1509);    // compilenode bind
      var_emitTypeChecks = GraceFalse;
      if2892 = GraceDone;
    }
    var if2896 = GraceDone;
    setLineNumber(1511);    // compilenode string
    var string2898 = new GraceString("noArgChecks");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2899 = request(var_util, "extensions", [0]);
    var call2897 = request(call2899, "containsKey(1)", [1], string2898);
    if (Grace_isTrue(call2897)) {
      setLineNumber(1512);    // compilenode bind
      var_emitArgChecks = GraceFalse;
      if2896 = GraceDone;
    }
    var if2900 = GraceDone;
    setLineNumber(1514);    // compilenode string
    var string2902 = new GraceString("noUndefChecks");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2903 = request(var_util, "extensions", [0]);
    var call2901 = request(call2903, "containsKey(1)", [1], string2902);
    if (Grace_isTrue(call2901)) {
      setLineNumber(1515);    // compilenode bind
      var_emitUndefinedChecks = GraceFalse;
      if2900 = GraceDone;
    }
    var if2904 = GraceDone;
    setLineNumber(1517);    // compilenode string
    var string2906 = new GraceString("noLineNumbers");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2907 = request(var_util, "extensions", [0]);
    var call2905 = request(call2907, "containsKey(1)", [1], string2906);
    if (Grace_isTrue(call2905)) {
      setLineNumber(1518);    // compilenode bind
      var_emitPositions = GraceFalse;
      if2904 = GraceDone;
    }
    setLineNumber(1520);    // compilenode member
    // call case 6: other requests
    var call2908 = request(var_moduleObject, "name", [0]);
    var_modname = call2908;
    setLineNumber(1521);    // compilenode call
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call2909 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], var_modname);
    var_emod = call2909;
    setLineNumber(1522);    // compilenode string
    var string2910 = new GraceString("\"");
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call2911 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_modname);
    var opresult2912 = request(string2910, "++(1)", [1], call2911);
    var string2913 = new GraceString("\"");
    var opresult2914 = request(opresult2912, "++(1)", [1], string2913);
    var_modNameAsString = opresult2914;
    var if2915 = GraceDone;
    setLineNumber(1523);    // compilenode string
    var string2917 = new GraceString("Debug");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2918 = request(var_util, "extensions", [0]);
    var call2916 = request(call2918, "containsKey(1)", [1], string2917);
    if (Grace_isTrue(call2916)) {
      setLineNumber(1524);    // compilenode bind
      var_debugMode = GraceTrue;
      if2915 = GraceDone;
    }
    setLineNumber(1526);    // compilenode string
    var string2920 = new GraceString("generating JavaScript code.");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2919 = request(var_util, "log_verbose(1)", [1], string2920);
    setLineNumber(1527);    // compilenode string
    var string2922 = new GraceString("String");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2921 = request(var_topLevelTypes, "add(1)", [1], string2922);
    setLineNumber(1528);    // compilenode string
    var string2924 = new GraceString("Number");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2923 = request(var_topLevelTypes, "add(1)", [1], string2924);
    setLineNumber(1529);    // compilenode string
    var string2926 = new GraceString("Boolean");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2925 = request(var_topLevelTypes, "add(1)", [1], string2926);
    setLineNumber(1530);    // compilenode string
    var string2928 = new GraceString("Done");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2927 = request(var_topLevelTypes, "add(1)", [1], string2928);
    setLineNumber(1531);    // compilenode string
    var string2930 = new GraceString("Type");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2929 = request(var_topLevelTypes, "add(1)", [1], string2930);
    setLineNumber(1532);    // compilenode string
    var string2932 = new GraceString("Unknown");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2931 = request(var_topLevelTypes, "add(1)", [1], string2932);
    setLineNumber(1533);    // compilenode string
    var string2934 = new GraceString("Object");
    // call case 6: other requests
    if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
    var call2933 = request(var_topLevelTypes, "add(1)", [1], string2934);
    var if2935 = GraceDone;
    setLineNumber(1534);    // compilenode string
    var string2937 = new GraceString("strict");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2938 = request(var_util, "extensions", [0]);
    var call2936 = request(call2938, "containsKey(1)", [1], string2937);
    if (Grace_isTrue(call2936)) {
      setLineNumber(1535);    // compilenode string
      var string2940 = new GraceString(";\"use strict\";");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2939 = request(var_util, "outprint(1)", [1], string2940);
      if2935 = call2939;
    }
    var if2941 = GraceDone;
    setLineNumber(1537);    // compilenode member
    // call case 6: other requests
    var call2942 = request(var_isPrelude, "not", [0]);
    if (Grace_isTrue(call2942)) {
      setLineNumber(1538);    // compilenode string
      var string2944 = new GraceString("");
      if (var_standardPrelude === undefined) raiseUninitializedVariable("standardPrelude");
      var opresult2945 = request(string2944, "++(1)", [1], var_standardPrelude);
      var string2946 = new GraceString(" = do_import(\"standardGrace\", gracecode_standardGrace);");
      var opresult2947 = request(opresult2945, "++(1)", [1], string2946);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2943 = request(var_util, "outprint(1)", [1], opresult2947);
      if2941 = call2943;
    }
    setLineNumber(1540);    // compilenode num
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2948 = request(var_util, "setline(1)", [1], new GraceNum(1));
    return call2948;
  };    // end of method initializeCodeGenerator(_)
  this.methods["initializeCodeGenerator(1)"] = func2875;
  func2875.methodName = "initializeCodeGenerator(1)";
  func2875.paramCounts = [1];
  func2875.paramNames = ["moduleObject"];
  func2875.definitionLine = 1495;
  func2875.definitionModule = "genjs";
  var func2949 = function(argcv, var_moduleObject) {    // method outputModuleDefinition(_), line 1545
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("outputModuleDefinition(_)", 0, numArgs - 1);
    }
    setLineNumber(1550);    // compilenode call
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call2950 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], var_modname);
    var var_generatedModuleName = call2950;
    setLineNumber(1551);    // compilenode string
    var string2952 = new GraceString("function ");
    var opresult2953 = request(string2952, "++(1)", [1], var_generatedModuleName);
    var string2954 = new GraceString("() {");
    var opresult2955 = request(opresult2953, "++(1)", [1], string2954);
    // call case 2: outer request
    var call2951 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2955);
    setLineNumber(1552);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2956 = selfRequest(this, "increaseindent", [0]);
    setLineNumber(1553);    // compilenode string
    var string2958 = new GraceString("importedModules[");
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult2959 = request(string2958, "++(1)", [1], var_modNameAsString);
    var string2960 = new GraceString("] = this;");
    var opresult2961 = request(opresult2959, "++(1)", [1], string2960);
    // call case 2: outer request
    var call2957 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2961);
    setLineNumber(1554);    // compilenode string
    var string2962 = new GraceString("module$");
    if (var_emod === undefined) raiseUninitializedVariable("emod");
    var opresult2963 = request(string2962, "++(1)", [1], var_emod);
    var var_selfr = opresult2963;
    setLineNumber(1555);    // compilenode call
    // call case 6: other requests
    var call2964 = request(var_moduleObject, "register:=(1)", [1], var_selfr);
    setLineNumber(1556);    // compilenode string
    var string2966 = new GraceString("var ");
    var opresult2967 = request(string2966, "++(1)", [1], var_selfr);
    var string2968 = new GraceString(" = this;");
    var opresult2969 = request(opresult2967, "++(1)", [1], string2968);
    // call case 2: outer request
    var call2965 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2969);
    setLineNumber(1557);    // compilenode string
    var string2971 = new GraceString("this.definitionModule = ");
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult2972 = request(string2971, "++(1)", [1], var_modNameAsString);
    var string2973 = new GraceString(";");
    var opresult2974 = request(opresult2972, "++(1)", [1], string2973);
    // call case 2: outer request
    var call2970 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2974);
    setLineNumber(1558);    // compilenode string
    var string2976 = new GraceString("this.definitionLine = 1;");
    // call case 2: outer request
    var call2975 = selfRequest(importedModules["genjs"], "out(1)", [1], string2976);
    setLineNumber(1559);    // compilenode string
    var string2978 = new GraceString("var var_prelude = ");
    if (var_standardPrelude === undefined) raiseUninitializedVariable("standardPrelude");
    var opresult2979 = request(string2978, "++(1)", [1], var_standardPrelude);
    var string2980 = new GraceString(";");
    var opresult2981 = request(opresult2979, "++(1)", [1], string2980);
    // call case 2: outer request
    var call2977 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2981);
    var if2982 = GraceDone;
    setLineNumber(1563);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1564);    // compilenode string
      var string2984 = new GraceString("var myframe = new StackFrame(\"");
      if (var_modname === undefined) raiseUninitializedVariable("modname");
      // call case 2: outer request
      var call2985 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_modname);
      var opresult2986 = request(string2984, "++(1)", [1], call2985);
      var string2987 = new GraceString(" module\");");
      var opresult2988 = request(opresult2986, "++(1)", [1], string2987);
      // call case 2: outer request
      var call2983 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult2988);
      setLineNumber(1565);    // compilenode string
      var string2990 = new GraceString("stackFrames.push(myframe);");
      // call case 2: outer request
      var call2989 = selfRequest(importedModules["genjs"], "out(1)", [1], string2990);
      if2982 = call2989;
    }
    setLineNumber(1567);    // compilenode string
    var string2992 = new GraceString("var_prelude");
    // call case 2: outer request
    var call2991 = selfRequest(importedModules["genjs"], "compileobjouter(2)", [2], var_moduleObject, string2992);
    var if2993 = GraceDone;
    setLineNumber(1568);    // compilenode op
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    var string2994 = new GraceString("standardGrace");
    var opresult2995 = request(var_modname, "==(1)", [1], string2994);
    if (Grace_isTrue(opresult2995)) {
      setLineNumber(1570);    // compilenode block
      var block2997 = new GraceBlock(this, 1570, 1);
      block2997.guard = jsTrue;
      block2997.real = function block2997(var_o) {
        setLineNumber(1570);    // compilenode call
        // call case 2: outer request
        var call2998 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_o);
        return call2998;
      };
      let applyMeth2997 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2997.methodName = "apply(1)";
      applyMeth2997.paramCounts = [1];
      applyMeth2997.paramNames = ["o"];
      applyMeth2997.definitionLine = 1570;
      applyMeth2997.definitionModule = "genjs";
      block2997.methods["apply(1)"] = applyMeth2997;
      let matchesMeth2997 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2997.methodName = "matches(1)";
      matchesMeth2997.paramCounts = [1];
      matchesMeth2997.paramNames = ["o"];
      matchesMeth2997.definitionLine = 1570;
      matchesMeth2997.definitionModule = "genjs";
      block2997.methods["matches(1)"] = matchesMeth2997;
      // call case 6: other requests
      var call2996 = request(var_moduleObject, "methodsDo(1)", [1], block2997);
      setLineNumber(1571);    // compilenode block
      var block3000 = new GraceBlock(this, 1571, 1);
      block3000.guard = jsTrue;
      block3000.real = function block3000(var_o) {
        setLineNumber(1571);    // compilenode member
        // call case 6: other requests
        var call3002 = request(var_o, "path", [0]);
        // call case 6: other requests
        // call case 6: other requests
        var call3003 = request(var_moduleObject, "directImports", [0]);
        var call3001 = request(call3003, "push(1)", [1], call3002);
        return call3001;
      };
      let applyMeth3000 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3000.methodName = "apply(1)";
      applyMeth3000.paramCounts = [1];
      applyMeth3000.paramNames = ["o"];
      applyMeth3000.definitionLine = 1571;
      applyMeth3000.definitionModule = "genjs";
      block3000.methods["apply(1)"] = applyMeth3000;
      let matchesMeth3000 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3000.methodName = "matches(1)";
      matchesMeth3000.paramCounts = [1];
      matchesMeth3000.paramNames = ["o"];
      matchesMeth3000.definitionLine = 1571;
      matchesMeth3000.definitionModule = "genjs";
      block3000.methods["matches(1)"] = matchesMeth3000;
      // call case 6: other requests
      var call2999 = request(var_moduleObject, "externalsDo(1)", [1], block3000);
      setLineNumber(1572);    // compilenode block
      var block3005 = new GraceBlock(this, 1572, 1);
      block3005.guard = jsTrue;
      block3005.real = function block3005(var_o) {
        var if3006 = GraceDone;
        setLineNumber(1573);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3008 = request(var_o, "isMethod", [0]);
        var call3007 = request(call3008, "not", [0]);
        if (Grace_isTrue(call3007)) {
          setLineNumber(1574);    // compilenode call
          // call case 2: outer request
          var call3009 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_o);
          if3006 = call3009;
        }
        return if3006;
      };
      let applyMeth3005 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3005.methodName = "apply(1)";
      applyMeth3005.paramCounts = [1];
      applyMeth3005.paramNames = ["o"];
      applyMeth3005.definitionLine = 1572;
      applyMeth3005.definitionModule = "genjs";
      block3005.methods["apply(1)"] = applyMeth3005;
      let matchesMeth3005 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3005.methodName = "matches(1)";
      matchesMeth3005.paramCounts = [1];
      matchesMeth3005.paramNames = ["o"];
      matchesMeth3005.definitionLine = 1572;
      matchesMeth3005.definitionModule = "genjs";
      block3005.methods["matches(1)"] = matchesMeth3005;
      // call case 6: other requests
      setLineNumber(1572);    // compilenode member
      // call case 6: other requests
      var call3010 = request(var_moduleObject, "value", [0]);
      var call3004 = request(call3010, "do(1)", [1], block3005);
      if2993 = call3004;
    } else {
      setLineNumber(1579);    // compilenode block
      var block3012 = new GraceBlock(this, 1579, 1);
      block3012.guard = jsTrue;
      block3012.real = function block3012(var_o) {
        setLineNumber(1580);    // compilenode call
        // call case 2: outer request
        var call3013 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_o);
        setLineNumber(1581);    // compilenode member
        // call case 6: other requests
        var call3015 = request(var_o, "path", [0]);
        // call case 6: other requests
        // call case 6: other requests
        var call3016 = request(var_moduleObject, "directImports", [0]);
        var call3014 = request(call3016, "push(1)", [1], call3015);
        return call3014;
      };
      let applyMeth3012 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3012.methodName = "apply(1)";
      applyMeth3012.paramCounts = [1];
      applyMeth3012.paramNames = ["o"];
      applyMeth3012.definitionLine = 1579;
      applyMeth3012.definitionModule = "genjs";
      block3012.methods["apply(1)"] = applyMeth3012;
      let matchesMeth3012 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3012.methodName = "matches(1)";
      matchesMeth3012.paramCounts = [1];
      matchesMeth3012.paramNames = ["o"];
      matchesMeth3012.definitionLine = 1579;
      matchesMeth3012.definitionModule = "genjs";
      block3012.methods["matches(1)"] = matchesMeth3012;
      // call case 6: other requests
      var call3011 = request(var_moduleObject, "externalsDo(1)", [1], block3012);
      setLineNumber(1583);    // compilenode member
      // call case 6: other requests
      var call3017 = request(var_moduleObject, "superclass", [0]);
      var var_inheritsStmt = call3017;
      var if3018 = GraceDone;
      setLineNumber(1584);    // compilenode op
      if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
      var opresult3019 = request(GraceFalse, "\u2260(1)", [1], var_inheritsStmt);
      if (Grace_isTrue(opresult3019)) {
        setLineNumber(1585);    // compilenode call
        if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
        if (var_modname === undefined) raiseUninitializedVariable("modname");
        // call case 2: outer request
        var call3020 = selfRequest(importedModules["genjs"], "compileInherit(1)forClass(1)", [1, 1], var_inheritsStmt, var_modname);
        if3018 = call3020;
      }
      setLineNumber(1587);    // compilenode block
      var block3022 = new GraceBlock(this, 1587, 1);
      block3022.guard = jsTrue;
      block3022.real = function block3022(var_t) {
        setLineNumber(1588);    // compilenode call
        // call case 2: outer request
        var call3023 = selfRequest(importedModules["genjs"], "compileUse(1)in(1)", [1, 1], var_t, var_moduleObject);
        return call3023;
      };
      let applyMeth3022 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3022.methodName = "apply(1)";
      applyMeth3022.paramCounts = [1];
      applyMeth3022.paramNames = ["t"];
      applyMeth3022.definitionLine = 1587;
      applyMeth3022.definitionModule = "genjs";
      block3022.methods["apply(1)"] = applyMeth3022;
      let matchesMeth3022 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3022.methodName = "matches(1)";
      matchesMeth3022.paramCounts = [1];
      matchesMeth3022.paramNames = ["t"];
      matchesMeth3022.definitionLine = 1587;
      matchesMeth3022.definitionModule = "genjs";
      block3022.methods["matches(1)"] = matchesMeth3022;
      // call case 6: other requests
      setLineNumber(1587);    // compilenode member
      // call case 6: other requests
      var call3024 = request(var_moduleObject, "usedTraits", [0]);
      var call3021 = request(call3024, "do(1)", [1], block3022);
      setLineNumber(1590);    // compilenode block
      var block3026 = new GraceBlock(this, 1590, 1);
      block3026.guard = jsTrue;
      block3026.real = function block3026(var_o) {
        setLineNumber(1591);    // compilenode call
        // call case 2: outer request
        var call3027 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_o);
        return call3027;
      };
      let applyMeth3026 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3026.methodName = "apply(1)";
      applyMeth3026.paramCounts = [1];
      applyMeth3026.paramNames = ["o"];
      applyMeth3026.definitionLine = 1590;
      applyMeth3026.definitionModule = "genjs";
      block3026.methods["apply(1)"] = applyMeth3026;
      let matchesMeth3026 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3026.methodName = "matches(1)";
      matchesMeth3026.paramCounts = [1];
      matchesMeth3026.paramNames = ["o"];
      matchesMeth3026.definitionLine = 1590;
      matchesMeth3026.definitionModule = "genjs";
      block3026.methods["matches(1)"] = matchesMeth3026;
      // call case 6: other requests
      var call3025 = request(var_moduleObject, "methodsAndTypesDo(1)", [1], block3026);
      var if3028 = GraceDone;
      setLineNumber(1593);    // compilenode op
      if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
      var opresult3029 = request(GraceFalse, "\u2260(1)", [1], var_inheritsStmt);
      if (Grace_isTrue(opresult3029)) {
        setLineNumber(1594);    // compilenode call
        if (var_inheritsStmt === undefined) raiseUninitializedVariable("inheritsStmt");
        // call case 2: outer request
        var call3030 = selfRequest(importedModules["genjs"], "compileSuperInitialization(1)", [1], var_inheritsStmt);
        if3028 = call3030;
      }
      setLineNumber(1596);    // compilenode block
      var block3032 = new GraceBlock(this, 1596, 1);
      block3032.guard = jsTrue;
      block3032.real = function block3032(var_o) {
        setLineNumber(1597);    // compilenode call
        // call case 2: outer request
        var call3033 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_o);
        return call3033;
      };
      let applyMeth3032 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3032.methodName = "apply(1)";
      applyMeth3032.paramCounts = [1];
      applyMeth3032.paramNames = ["o"];
      applyMeth3032.definitionLine = 1596;
      applyMeth3032.definitionModule = "genjs";
      block3032.methods["apply(1)"] = applyMeth3032;
      let matchesMeth3032 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3032.methodName = "matches(1)";
      matchesMeth3032.paramCounts = [1];
      matchesMeth3032.paramNames = ["o"];
      matchesMeth3032.definitionLine = 1596;
      matchesMeth3032.definitionModule = "genjs";
      block3032.methods["matches(1)"] = matchesMeth3032;
      // call case 6: other requests
      var call3031 = request(var_moduleObject, "executableComponentsDo(1)", [1], block3032);
      if2993 = call3031;
    }
    var if3034 = GraceDone;
    setLineNumber(1600);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call3036 = request(var_xmodule, "currentDialect", [0]);
    var call3035 = request(call3036, "hasAtEnd", [0]);
    if (Grace_isTrue(call3035)) {
      setLineNumber(1601);    // compilenode string
      var string3038 = new GraceString("var var_thisDialect = selfRequest(var_prelude, \"thisDialect\", [0]);");
      // call case 2: outer request
      var call3037 = selfRequest(importedModules["genjs"], "out(1)", [1], string3038);
      setLineNumber(1602);    // compilenode string
      var string3040 = new GraceString("selfRequest(var_thisDialect, \"atEnd(1)\", [1], this);");
      // call case 2: outer request
      var call3039 = selfRequest(importedModules["genjs"], "out(1)", [1], string3040);
      if3034 = call3039;
    }
    var if3041 = GraceDone;
    setLineNumber(1604);    // compilenode if
    if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1605);    // compilenode string
      var string3043 = new GraceString("stackFrames.pop();");
      // call case 2: outer request
      var call3042 = selfRequest(importedModules["genjs"], "out(1)", [1], string3043);
      if3041 = call3042;
    }
    setLineNumber(1607);    // compilenode string
    var string3045 = new GraceString("return this;");
    // call case 2: outer request
    var call3044 = selfRequest(importedModules["genjs"], "out(1)", [1], string3045);
    setLineNumber(1608);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3046 = selfRequest(this, "decreaseindent", [0]);
    setLineNumber(1609);    // compilenode string
    var string3048 = new GraceString("}");
    // call case 2: outer request
    var call3047 = selfRequest(importedModules["genjs"], "out(1)", [1], string3048);
    setLineNumber(1611);    // compilenode string
    var string3050 = new GraceString("if (typeof global !== \"undefined\")");
    // call case 2: outer request
    var call3049 = selfRequest(importedModules["genjs"], "out(1)", [1], string3050);
    setLineNumber(1612);    // compilenode string
    var string3052 = new GraceString("  global.");
    var opresult3053 = request(string3052, "++(1)", [1], var_generatedModuleName);
    var string3054 = new GraceString(" = ");
    var opresult3055 = request(opresult3053, "++(1)", [1], string3054);
    var opresult3056 = request(opresult3055, "++(1)", [1], var_generatedModuleName);
    var string3057 = new GraceString(";");
    var opresult3058 = request(opresult3056, "++(1)", [1], string3057);
    // call case 2: outer request
    var call3051 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3058);
    setLineNumber(1613);    // compilenode string
    var string3060 = new GraceString("if (typeof window !== \"undefined\")");
    // call case 2: outer request
    var call3059 = selfRequest(importedModules["genjs"], "out(1)", [1], string3060);
    setLineNumber(1614);    // compilenode string
    var string3062 = new GraceString("  window.");
    var opresult3063 = request(string3062, "++(1)", [1], var_generatedModuleName);
    var string3064 = new GraceString(" = ");
    var opresult3065 = request(opresult3063, "++(1)", [1], string3064);
    var opresult3066 = request(opresult3065, "++(1)", [1], var_generatedModuleName);
    var string3067 = new GraceString(";");
    var opresult3068 = request(opresult3066, "++(1)", [1], string3067);
    // call case 2: outer request
    var call3061 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3068);
    return call3061;
  };    // end of method outputModuleDefinition(_)
  this.methods["outputModuleDefinition(1)"] = func2949;
  func2949.methodName = "outputModuleDefinition(1)";
  func2949.paramCounts = [1];
  func2949.paramNames = ["moduleObject"];
  func2949.definitionLine = 1545;
  func2949.definitionModule = "genjs";
  var func3069 = function(argcv, var_moduleObject) {    // method outputModuleMetadata(_), line 1617
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("outputModuleMetadata(_)", 0, numArgs - 1);
    }
    setLineNumber(1618);    // compilenode string
    var string3070 = new GraceString("[");
    var var_importList = string3070;
    setLineNumber(1619);    // compilenode block
    var block3072 = new GraceBlock(this, 1619, 1);
    block3072.guard = jsTrue;
    block3072.real = function block3072(var_each) {
      setLineNumber(1620);    // compilenode op
      if (var_importList === undefined) raiseUninitializedVariable("importList");
      // call case 6: other requests
      var call3073 = request(var_each, "asDebugString", [0]);
      var opresult3074 = request(var_importList, "++(1)", [1], call3073);
      var_importList = opresult3074;
      return GraceDone;
    };
    let applyMeth3072 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth3072.methodName = "apply(1)";
    applyMeth3072.paramCounts = [1];
    applyMeth3072.paramNames = ["each"];
    applyMeth3072.definitionLine = 1619;
    applyMeth3072.definitionModule = "genjs";
    block3072.methods["apply(1)"] = applyMeth3072;
    let matchesMeth3072 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth3072.methodName = "matches(1)";
    matchesMeth3072.paramCounts = [1];
    matchesMeth3072.paramNames = ["each"];
    matchesMeth3072.definitionLine = 1619;
    matchesMeth3072.definitionModule = "genjs";
    block3072.methods["matches(1)"] = matchesMeth3072;
    setLineNumber(1621);    // compilenode block
    var block3075 = new GraceBlock(this, 1621, 0);
    block3075.guard = jsTrue;
    block3075.real = function block3075() {
      setLineNumber(1622);    // compilenode op
      if (var_importList === undefined) raiseUninitializedVariable("importList");
      var string3076 = new GraceString(", ");
      var opresult3077 = request(var_importList, "++(1)", [1], string3076);
      var_importList = opresult3077;
      return GraceDone;
    };
    let applyMeth3075 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth3075.methodName = "apply";
    applyMeth3075.paramCounts = [0];
    applyMeth3075.paramNames = [];
    applyMeth3075.definitionLine = 1621;
    applyMeth3075.definitionModule = "genjs";
    block3075.methods["apply"] = applyMeth3075;
    // call case 6: other requests
    setLineNumber(1619);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3079 = request(var_moduleObject, "directImports", [0]);
    var call3078 = request(call3079, "sorted", [0]);
    var call3071 = request(call3078, "do(1)separatedBy(1)", [1, 1], block3072, block3075);
    setLineNumber(1624);    // compilenode string
    var string3080 = new GraceString("]");
    var opresult3081 = request(var_importList, "++(1)", [1], string3080);
    var_importList = opresult3081;
    setLineNumber(1625);    // compilenode string
    var string3083 = new GraceString("");
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call3084 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], var_modname);
    var opresult3085 = request(string3083, "++(1)", [1], call3084);
    var string3086 = new GraceString(".imports = ");
    var opresult3087 = request(opresult3085, "++(1)", [1], string3086);
    var opresult3088 = request(opresult3087, "++(1)", [1], var_importList);
    var string3089 = new GraceString(";");
    var opresult3090 = request(opresult3088, "++(1)", [1], string3089);
    // call case 2: outer request
    var call3082 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3090);
    setLineNumber(1626);    // compilenode string
    var string3092 = new GraceString("");
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call3093 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], var_modname);
    var opresult3094 = request(string3092, "++(1)", [1], call3093);
    var string3095 = new GraceString(".definitionModule = \"");
    var opresult3096 = request(opresult3094, "++(1)", [1], string3095);
    // call case 6: other requests
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call3098 = selfRequest(importedModules["genjs"], "basename(1)", [1], var_modname);
    var call3097 = request(call3098, "quoted", [0]);
    var opresult3099 = request(opresult3096, "++(1)", [1], call3097);
    var string3100 = new GraceString("\";");
    var opresult3101 = request(opresult3099, "++(1)", [1], string3100);
    // call case 2: outer request
    var call3091 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3101);
    setLineNumber(1627);    // compilenode string
    var string3103 = new GraceString("");
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 2: outer request
    var call3104 = selfRequest(importedModules["genjs"], "formatModname(1)", [1], var_modname);
    var opresult3105 = request(string3103, "++(1)", [1], call3104);
    var string3106 = new GraceString(".definitionLine = 1;");
    var opresult3107 = request(opresult3105, "++(1)", [1], string3106);
    // call case 2: outer request
    var call3102 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3107);
    return call3102;
  };    // end of method outputModuleMetadata(_)
  this.methods["outputModuleMetadata(1)"] = func3069;
  func3069.methodName = "outputModuleMetadata(1)";
  func3069.paramCounts = [1];
  func3069.paramNames = ["moduleObject"];
  func3069.definitionLine = 1617;
  func3069.definitionModule = "genjs";
  var func3108 = function(argcv) {    // method outputGct, line 1630
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("outputGct", 0, numArgs - 0);
    }
    setLineNumber(1631);    // compilenode call
    if (var_modname === undefined) raiseUninitializedVariable("modname");
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call3109 = request(var_xmodule, "parseGCT(1)", [1], var_modname);
    var var_gct = call3109;
    setLineNumber(1632);    // compilenode call
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call3110 = request(var_xmodule, "gctAsString(1)", [1], var_gct);
    var var_gctText = call3110;
    setLineNumber(1633);    // compilenode string
    var string3112 = new GraceString("if (typeof gctCache !== \"undefined\")");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3111 = request(var_util, "outprint(1)", [1], string3112);
    setLineNumber(1634);    // compilenode string
    var string3114 = new GraceString("  gctCache[");
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult3115 = request(string3114, "++(1)", [1], var_modNameAsString);
    var string3116 = new GraceString("] = \"");
    var opresult3117 = request(opresult3115, "++(1)", [1], string3116);
    // call case 2: outer request
    var call3118 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_gctText);
    var opresult3119 = request(opresult3117, "++(1)", [1], call3118);
    var string3120 = new GraceString("\";");
    var opresult3121 = request(opresult3119, "++(1)", [1], string3120);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3113 = request(var_util, "outprint(1)", [1], opresult3121);
    return call3113;
  };    // end of method outputGct
  this.methods["outputGct"] = func3108;
  func3108.methodName = "outputGct";
  func3108.paramCounts = [0];
  func3108.paramNames = [];
  func3108.definitionLine = 1630;
  func3108.definitionModule = "genjs";
  var func3122 = function(argcv) {    // method outputSource, line 1636
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("outputSource", 0, numArgs - 0);
    }
    setLineNumber(1637);    // compilenode string
    var string3124 = new GraceString("if (typeof originalSourceLines !== \"undefined\") {");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3123 = request(var_util, "outprint(1)", [1], string3124);
    setLineNumber(1638);    // compilenode string
    var string3126 = new GraceString("  originalSourceLines[");
    if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
    var opresult3127 = request(string3126, "++(1)", [1], var_modNameAsString);
    var string3128 = new GraceString("] = [");
    var opresult3129 = request(opresult3127, "++(1)", [1], string3128);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3125 = request(var_util, "outprint(1)", [1], opresult3129);
    setLineNumber(1639);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3130 = request(var_util, "cLines", [0]);
    var var_sourceLines = call3130;
    setLineNumber(1640);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3132 = request(var_util, "cLines", [0]);
    var call3131 = request(call3132, "size", [0]);
    var var_numberOfLines = call3131;
    setLineNumber(1641);    // compilenode num
    var var_ln = new GraceNum(1);
    setLineNumber(1642);    // compilenode block
    var block3134 = new GraceBlock(this, 1642, 0);
    block3134.guard = jsTrue;
    block3134.real = function block3134() {
      setLineNumber(1642);    // compilenode op
      if (var_ln === undefined) raiseUninitializedVariable("ln");
      if (var_numberOfLines === undefined) raiseUninitializedVariable("numberOfLines");
      var opresult3135 = request(var_ln, "<(1)", [1], var_numberOfLines);
      return opresult3135;
    };
    let applyMeth3134 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth3134.methodName = "apply";
    applyMeth3134.paramCounts = [0];
    applyMeth3134.paramNames = [];
    applyMeth3134.definitionLine = 1642;
    applyMeth3134.definitionModule = "genjs";
    block3134.methods["apply"] = applyMeth3134;
    var block3136 = new GraceBlock(this, 1642, 0);
    block3136.guard = jsTrue;
    block3136.real = function block3136() {
      setLineNumber(1643);    // compilenode string
      var string3138 = new GraceString("    \"");
      if (var_ln === undefined) raiseUninitializedVariable("ln");
      // call case 6: other requests
      if (var_sourceLines === undefined) raiseUninitializedVariable("sourceLines");
      var call3139 = request(var_sourceLines, "at(1)", [1], var_ln);
      var opresult3140 = request(string3138, "++(1)", [1], call3139);
      var string3141 = new GraceString("\",");
      var opresult3142 = request(opresult3140, "++(1)", [1], string3141);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call3137 = request(var_util, "outprint(1)", [1], opresult3142);
      setLineNumber(1644);    // compilenode op
      if (var_ln === undefined) raiseUninitializedVariable("ln");
      var sum3143 = request(var_ln, "+(1)", [1], new GraceNum(1));
      var_ln = sum3143;
      return GraceDone;
    };
    let applyMeth3136 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth3136.methodName = "apply";
    applyMeth3136.paramCounts = [0];
    applyMeth3136.paramNames = [];
    applyMeth3136.definitionLine = 1642;
    applyMeth3136.definitionModule = "genjs";
    block3136.methods["apply"] = applyMeth3136;
    // call case 2: outer request
    var call3133 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block3134, block3136);
    var if3144 = GraceDone;
    setLineNumber(1646);    // compilenode num
    var opresult3145 = request(var_numberOfLines, "\u2264(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3145)) {
      setLineNumber(1647);    // compilenode string
      var string3147 = new GraceString(" ];");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call3146 = request(var_util, "outprint(1)", [1], string3147);
      if3144 = call3146;
    } else {
      setLineNumber(1649);    // compilenode string
      var string3149 = new GraceString("    \"");
      if (var_numberOfLines === undefined) raiseUninitializedVariable("numberOfLines");
      // call case 6: other requests
      if (var_sourceLines === undefined) raiseUninitializedVariable("sourceLines");
      var call3150 = request(var_sourceLines, "at(1)", [1], var_numberOfLines);
      var opresult3151 = request(string3149, "++(1)", [1], call3150);
      var string3152 = new GraceString("\" ];");
      var opresult3153 = request(opresult3151, "++(1)", [1], string3152);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call3148 = request(var_util, "outprint(1)", [1], opresult3153);
      if3144 = call3148;
    }
    setLineNumber(1651);    // compilenode string
    var string3155 = new GraceString("}");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3154 = request(var_util, "outprint(1)", [1], string3155);
    return call3154;
  };    // end of method outputSource
  this.methods["outputSource"] = func3122;
  func3122.methodName = "outputSource";
  func3122.paramCounts = [0];
  func3122.paramNames = [];
  func3122.definitionLine = 1636;
  func3122.definitionModule = "genjs";
  var func3156 = function(argcv, var_moduleObject, var_of, var_bt, var_glPath) {    // method compile(_,_,_,_), line 1654
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("compile(_,_,_,_)", 0, numArgs - 4);
    }
    setLineNumber(1659);    // compilenode bind
    var_outfile = var_of;
    setLineNumber(1660);    // compilenode bind
    var_buildtype = var_bt;
    setLineNumber(1662);    // compilenode call
    // call case 2: outer request
    var call3157 = selfRequest(importedModules["genjs"], "initializeCodeGenerator(1)", [1], var_moduleObject);
    setLineNumber(1663);    // compilenode call
    // call case 2: outer request
    var call3158 = selfRequest(importedModules["genjs"], "outputModuleDefinition(1)", [1], var_moduleObject);
    setLineNumber(1664);    // compilenode call
    // call case 2: outer request
    var call3159 = selfRequest(importedModules["genjs"], "outputModuleMetadata(1)", [1], var_moduleObject);
    setLineNumber(1665);    // compilenode member
    // call case 6: other requests
    if (var_imports === undefined) raiseUninitializedVariable("imports");
    var call3161 = request(var_imports, "other", [0]);
    // call case 6: other requests
    var call3160 = request(var_moduleObject, "imports:=(1)", [1], call3161);
    setLineNumber(1668);    // compilenode call
    // call case 6: other requests
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    var call3162 = request(var_xmodule, "writeGctForModule(1)", [1], var_moduleObject);
    setLineNumber(1669);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3163 = selfRequest(this, "outputGct", [0]);
    setLineNumber(1670);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3164 = selfRequest(this, "outputSource", [0]);
    setLineNumber(1672);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3165 = selfRequest(this, "emitBufferedOutput", [0]);
    setLineNumber(1673);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call3166 = selfRequest(this, "printNodeTally", [0]);
    setLineNumber(1674);    // compilenode string
    var string3168 = new GraceString("done.");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call3167 = request(var_util, "log_verbose(1)", [1], string3168);
    var if3169 = GraceDone;
    setLineNumber(1675);    // compilenode op
    if (var_buildtype === undefined) raiseUninitializedVariable("buildtype");
    var string3170 = new GraceString("run");
    var opresult3171 = request(var_buildtype, "==(1)", [1], string3170);
    if (Grace_isTrue(opresult3171)) {
      // call case 2: outer request
      var call3172 = selfRequest(importedModules["genjs"], "runJsCode(2)", [2], var_of, var_glPath);
      if3169 = call3172;
    }
    return if3169;
  };    // end of method compile(_,_,_,_)
  this.methods["compile(4)"] = func3156;
  func3156.methodName = "compile(4)";
  func3156.paramCounts = [4];
  func3156.paramNames = ["moduleObject", "of", "bt", "glPath"];
  func3156.definitionLine = 1654;
  func3156.definitionModule = "genjs";
  var func3173 = function(argcv, var_inhNode, var_className) {    // method compileInherit(_)forClass(_), line 1678
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileInherit(_)forClass(_)", 0, numArgs - 2);
    }
    setLineNumber(1682);    // compilenode member
    // call case 6: other requests
    var call3174 = request(var_inhNode, "value", [0]);
    var var_superExpr = call3174;
    var if3175 = GraceDone;
    setLineNumber(1683);    // compilenode member
    // call case 6: other requests
    var call3176 = request(var_superExpr, "isCall", [0]);
    if (Grace_isTrue(call3176)) {
      setLineNumber(1684);    // compilenode call
      if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
      setLineNumber(1686);    // compilenode call
      // call case 2: outer request
      var call3179 = selfRequest(importedModules["genjs"], "aliasList(1)", [1], var_inhNode);
      setLineNumber(1687);    // compilenode call
      // call case 2: outer request
      var call3180 = selfRequest(importedModules["genjs"], "exclusionList(1)", [1], var_inhNode);
      // call case 2: outer request
      var call3178 = selfRequest(importedModules["genjs"], "compileReuseCall(1)forClass(1)aliases(1)exclusions(1)", [1, 1, 1, 1], var_superExpr, var_className, call3179, call3180);
      // call case 6: other requests
      var call3177 = request(var_inhNode, "register:=(1)", [1], call3178);
      if3175 = call3177;
    } else {
      setLineNumber(1689);    // compilenode string
      var string3182 = new GraceString("inheritance must be from a request that yields a fresh object");
      setLineNumber(1690);    // compilenode member
      // call case 6: other requests
      var call3183 = request(var_inhNode, "line", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call3181 = request(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], string3182, call3183);
      if3175 = call3181;
    }
    return if3175;
  };    // end of method compileInherit(_)forClass(_)
  this.methods["compileInherit(1)forClass(1)"] = func3173;
  func3173.methodName = "compileInherit(1)forClass(1)";
  func3173.paramCounts = [1, 1];
  func3173.paramNames = ["inhNode", "className"];
  func3173.definitionLine = 1678;
  func3173.definitionModule = "genjs";
  var func3184 = function(argcv, var_inheritsNode) {    // method compileSuperInitialization(_), line 1693
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("compileSuperInitialization(_)", 0, numArgs - 1);
    }
    setLineNumber(1694);    // compilenode string
    var string3186 = new GraceString("");
    // call case 6: other requests
    var call3187 = request(var_inheritsNode, "register", [0]);
    var opresult3188 = request(string3186, "++(1)", [1], call3187);
    var string3189 = new GraceString(".call(this);");
    var opresult3190 = request(opresult3188, "++(1)", [1], string3189);
    // call case 2: outer request
    var call3185 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3190);
    return call3185;
  };    // end of method compileSuperInitialization(_)
  this.methods["compileSuperInitialization(1)"] = func3184;
  func3184.methodName = "compileSuperInitialization(1)";
  func3184.paramCounts = [1];
  func3184.paramNames = ["inheritsNode"];
  func3184.definitionLine = 1693;
  func3184.definitionModule = "genjs";
  var func3191 = function(argcv, var_callNode, var_className, var_aStr, var_eStr) {    // method compileReuseCall(_)forClass(_)aliases(_)exclusions(_), line 1696
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("compileReuseCall(_)forClass(_)aliases(_)exclusions(_)", 0, numArgs - 4);
    }
    setLineNumber(1697);    // compilenode member
    // call case 6: other requests
    var call3193 = request(var_callNode, "line", [0]);
    var string3194 = new GraceString("reuse call");
    // call case 2: outer request
    var call3192 = selfRequest(importedModules["genjs"], "noteLineNumber(1)comment(1)", [1, 1], call3193, string3194);
    setLineNumber(1698);    // compilenode string
    var string3196 = new GraceString("$build(3)");
    // call case 6: other requests
    var call3197 = request(var_callNode, "nameString", [0]);
    // call case 2: outer request
    var call3195 = selfRequest(importedModules["genjs"], "addSuffix(1)to(1)", [1, 1], string3196, call3197);
    var var_buildMethodName = call3195;
    setLineNumber(1699);    // compilenode member
    // call case 6: other requests
    var call3199 = request(var_callNode, "receiver", [0]);
    // call case 2: outer request
    var call3198 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], call3199);
    var var_target = call3198;
    setLineNumber(1700);    // compilenode string
    var string3200 = new GraceString("");
    var var_arglist = string3200;
    setLineNumber(1701);    // compilenode block
    var block3202 = new GraceBlock(this, 1701, 1);
    block3202.guard = jsTrue;
    block3202.real = function block3202(var_part) {
      var if3203 = GraceDone;
      setLineNumber(1702);    // compilenode call
      // call case 6: other requests
      var string3206 = new GraceString("$");
      // call case 6: other requests
      // call case 6: other requests
      var call3207 = request(var_part, "name", [0]);
      var call3205 = request(call3207, "startsWith(1)", [1], string3206);
      var call3204 = request(call3205, "prefix!", [0]);
      if (Grace_isTrue(call3204)) {
        setLineNumber(1703);    // compilenode block
        var block3209 = new GraceBlock(this, 1703, 1);
        block3209.guard = jsTrue;
        block3209.real = function block3209(var_p) {
          setLineNumber(1703);    // compilenode op
          if (var_arglist === undefined) raiseUninitializedVariable("arglist");
          var string3210 = new GraceString(", ");
          var opresult3211 = request(var_arglist, "++(1)", [1], string3210);
          // call case 2: outer request
          var call3212 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_p);
          var opresult3213 = request(opresult3211, "++(1)", [1], call3212);
          var_arglist = opresult3213;
          return GraceDone;
        };
        let applyMeth3209 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth3209.methodName = "apply(1)";
        applyMeth3209.paramCounts = [1];
        applyMeth3209.paramNames = ["p"];
        applyMeth3209.definitionLine = 1703;
        applyMeth3209.definitionModule = "genjs";
        block3209.methods["apply(1)"] = applyMeth3209;
        let matchesMeth3209 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth3209.methodName = "matches(1)";
        matchesMeth3209.paramCounts = [1];
        matchesMeth3209.paramNames = ["p"];
        matchesMeth3209.definitionLine = 1703;
        matchesMeth3209.definitionModule = "genjs";
        block3209.methods["matches(1)"] = matchesMeth3209;
        // call case 6: other requests
        // call case 6: other requests
        var call3214 = request(var_part, "args", [0]);
        var call3208 = request(call3214, "do(1)", [1], block3209);
        if3203 = call3208;
      }
      return if3203;
    };
    let applyMeth3202 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth3202.methodName = "apply(1)";
    applyMeth3202.paramCounts = [1];
    applyMeth3202.paramNames = ["part"];
    applyMeth3202.definitionLine = 1701;
    applyMeth3202.definitionModule = "genjs";
    block3202.methods["apply(1)"] = applyMeth3202;
    let matchesMeth3202 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth3202.methodName = "matches(1)";
    matchesMeth3202.paramCounts = [1];
    matchesMeth3202.paramNames = ["part"];
    matchesMeth3202.definitionLine = 1701;
    matchesMeth3202.definitionModule = "genjs";
    block3202.methods["matches(1)"] = matchesMeth3202;
    // call case 6: other requests
    setLineNumber(1701);    // compilenode member
    // call case 6: other requests
    var call3215 = request(var_callNode, "parts", [0]);
    var call3201 = request(call3215, "do(1)", [1], block3202);
    setLineNumber(1706);    // compilenode string
    var string3216 = new GraceString("");
    var var_typeArgs = string3216;
    var if3217 = GraceDone;
    setLineNumber(1707);    // compilenode member
    // call case 6: other requests
    var call3218 = request(var_callNode, "generics", [0]);
    var opresult3219 = request(GraceFalse, "\u2260(1)", [1], call3218);
    if (Grace_isTrue(opresult3219)) {
      setLineNumber(1708);    // compilenode block
      var block3221 = new GraceBlock(this, 1708, 1);
      block3221.guard = jsTrue;
      block3221.real = function block3221(var_g) {
        setLineNumber(1709);    // compilenode op
        if (var_typeArgs === undefined) raiseUninitializedVariable("typeArgs");
        var string3222 = new GraceString(", ");
        var opresult3223 = request(var_typeArgs, "++(1)", [1], string3222);
        // call case 2: outer request
        var call3224 = selfRequest(importedModules["genjs"], "compilenode(1)", [1], var_g);
        var opresult3225 = request(opresult3223, "++(1)", [1], call3224);
        var_typeArgs = opresult3225;
        return GraceDone;
      };
      let applyMeth3221 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3221.methodName = "apply(1)";
      applyMeth3221.paramCounts = [1];
      applyMeth3221.paramNames = ["g"];
      applyMeth3221.definitionLine = 1708;
      applyMeth3221.definitionModule = "genjs";
      block3221.methods["apply(1)"] = applyMeth3221;
      let matchesMeth3221 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3221.methodName = "matches(1)";
      matchesMeth3221.paramCounts = [1];
      matchesMeth3221.paramNames = ["g"];
      matchesMeth3221.definitionLine = 1708;
      matchesMeth3221.definitionModule = "genjs";
      block3221.methods["matches(1)"] = matchesMeth3221;
      // call case 6: other requests
      setLineNumber(1708);    // compilenode member
      // call case 6: other requests
      var call3226 = request(var_callNode, "generics", [0]);
      var call3220 = request(call3226, "do(1)", [1], block3221);
      if3217 = call3220;
    }
    setLineNumber(1712);    // compilenode member
    // call case 6: other requests
    var call3227 = request(var_callNode, "numArgs", [0]);
    // call case 6: other requests
    var call3228 = request(var_callNode, "numTypeArgs", [0]);
    var sum3229 = request(call3227, "+(1)", [1], call3228);
    var sum3230 = request(sum3229, "+(1)", [1], new GraceNum(3));
    var var_numArgs = sum3230;
    var if3231 = GraceDone;
    setLineNumber(1715);    // compilenode member
    // call case 6: other requests
    var call3232 = request(var_callNode, "isSelfRequest", [0]);
    if (Grace_isTrue(call3232)) {
      var string3233 = new GraceString("selfRequest");
      if3231 = string3233;
    } else {
      var string3234 = new GraceString("request");
      if3231 = string3234;
    }
    var var_req = if3231;
    setLineNumber(1716);    // compilenode string
    var string3236 = new GraceString("initFun");
    // call case 2: outer request
    var call3235 = selfRequest(importedModules["genjs"], "uidWithPrefix(1)", [1], string3236);
    var var_initFun = call3235;
    setLineNumber(1717);    // compilenode string
    var string3238 = new GraceString("var ");
    var opresult3239 = request(string3238, "++(1)", [1], var_initFun);
    var string3240 = new GraceString(" = ");
    var opresult3241 = request(opresult3239, "++(1)", [1], string3240);
    var opresult3242 = request(opresult3241, "++(1)", [1], var_req);
    var string3243 = new GraceString("(");
    var opresult3244 = request(opresult3242, "++(1)", [1], string3243);
    var opresult3245 = request(opresult3244, "++(1)", [1], var_target);
    var string3246 = new GraceString(", \"");
    var opresult3247 = request(opresult3245, "++(1)", [1], string3246);
    // call case 2: outer request
    var call3248 = selfRequest(importedModules["genjs"], "escapestring(1)", [1], var_buildMethodName);
    var opresult3249 = request(opresult3247, "++(1)", [1], call3248);
    var string3250 = new GraceString("\"");
    var opresult3251 = request(opresult3249, "++(1)", [1], string3250);
    setLineNumber(1718);    // compilenode string
    var string3252 = new GraceString(", [null]");
    var opresult3253 = request(string3252, "++(1)", [1], var_arglist);
    var string3254 = new GraceString(", this, ");
    var opresult3255 = request(opresult3253, "++(1)", [1], string3254);
    var opresult3256 = request(opresult3255, "++(1)", [1], var_aStr);
    var string3257 = new GraceString(", ");
    var opresult3258 = request(opresult3256, "++(1)", [1], string3257);
    var opresult3259 = request(opresult3258, "++(1)", [1], var_eStr);
    var string3260 = new GraceString("");
    var opresult3261 = request(opresult3259, "++(1)", [1], string3260);
    var opresult3262 = request(opresult3261, "++(1)", [1], var_typeArgs);
    var string3263 = new GraceString(");  // compileReuseCall");
    var opresult3264 = request(opresult3262, "++(1)", [1], string3263);
    var opresult3265 = request(opresult3251, "++(1)", [1], opresult3264);
    // call case 2: outer request
    var call3237 = selfRequest(importedModules["genjs"], "out(1)", [1], opresult3265);
    return var_initFun;
  };    // end of method compileReuseCall(_)forClass(_)aliases(_)exclusions(_)
  this.methods["compileReuseCall(1)forClass(1)aliases(1)exclusions(1)"] = func3191;
  func3191.methodName = "compileReuseCall(1)forClass(1)aliases(1)exclusions(1)";
  func3191.paramCounts = [1, 1, 1, 1];
  func3191.paramNames = ["callNode", "className", "aStr", "eStr"];
  func3191.definitionLine = 1696;
  func3191.definitionModule = "genjs";
  var func3266 = function(argcv, var_tail, var_root) {    // method addSuffix(_)to(_), line 1722
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("addSuffix(_)to(_)", 0, numArgs - 2);
    }
    setLineNumber(1723);    // compilenode string
    var string3268 = new GraceString("$");
    // call case 6: other requests
    var call3267 = request(var_root, "indexOf(1)", [1], string3268);
    var var_dollarIx = call3267;
    var if3269 = GraceDone;
    setLineNumber(1724);    // compilenode num
    var opresult3270 = request(var_dollarIx, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3270)) {
      setLineNumber(1725);    // compilenode op
      var opresult3271 = request(var_root, "++(1)", [1], var_tail);
      if3269 = opresult3271;
    } else {
      setLineNumber(1727);    // compilenode op
      if (var_dollarIx === undefined) raiseUninitializedVariable("dollarIx");
      var diff3273 = request(var_dollarIx, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call3272 = request(var_root, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff3273);
      var opresult3274 = request(call3272, "++(1)", [1], var_tail);
      if3269 = opresult3274;
    }
    return if3269;
  };    // end of method addSuffix(_)to(_)
  this.methods["addSuffix(1)to(1)"] = func3266;
  func3266.methodName = "addSuffix(1)to(1)";
  func3266.paramCounts = [1, 1];
  func3266.paramNames = ["tail", "root"];
  func3266.definitionLine = 1722;
  func3266.definitionModule = "genjs";
  var func3275 = function(argcv, var_inhNode) {    // method aliasList(_), line 1731
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("aliasList(_)", 0, numArgs - 1);
    }
    setLineNumber(1732);    // compilenode string
    var string3276 = new GraceString("[");
    var var_res = string3276;
    setLineNumber(1733);    // compilenode block
    var block3278 = new GraceBlock(this, 1733, 1);
    block3278.guard = jsTrue;
    block3278.real = function block3278(var_a) {
      setLineNumber(1734);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string3279 = new GraceString("new Alias(\"");
      // call case 6: other requests
      // call case 6: other requests
      var call3281 = request(var_a, "newName", [0]);
      var call3280 = request(call3281, "quoted", [0]);
      var opresult3282 = request(string3279, "++(1)", [1], call3280);
      var string3283 = new GraceString("\", \"");
      var opresult3284 = request(opresult3282, "++(1)", [1], string3283);
      // call case 6: other requests
      // call case 6: other requests
      var call3286 = request(var_a, "oldName", [0]);
      var call3285 = request(call3286, "quoted", [0]);
      var opresult3287 = request(opresult3284, "++(1)", [1], call3285);
      var string3288 = new GraceString("\")");
      var opresult3289 = request(opresult3287, "++(1)", [1], string3288);
      var opresult3290 = request(var_res, "++(1)", [1], opresult3289);
      var_res = opresult3290;
      return GraceDone;
    };
    let applyMeth3278 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth3278.methodName = "apply(1)";
    applyMeth3278.paramCounts = [1];
    applyMeth3278.paramNames = ["a"];
    applyMeth3278.definitionLine = 1733;
    applyMeth3278.definitionModule = "genjs";
    block3278.methods["apply(1)"] = applyMeth3278;
    let matchesMeth3278 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth3278.methodName = "matches(1)";
    matchesMeth3278.paramCounts = [1];
    matchesMeth3278.paramNames = ["a"];
    matchesMeth3278.definitionLine = 1733;
    matchesMeth3278.definitionModule = "genjs";
    block3278.methods["matches(1)"] = matchesMeth3278;
    setLineNumber(1735);    // compilenode block
    var block3291 = new GraceBlock(this, 1735, 0);
    block3291.guard = jsTrue;
    block3291.real = function block3291() {
      setLineNumber(1736);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string3292 = new GraceString(", ");
      var opresult3293 = request(var_res, "++(1)", [1], string3292);
      var_res = opresult3293;
      return GraceDone;
    };
    let applyMeth3291 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth3291.methodName = "apply";
    applyMeth3291.paramCounts = [0];
    applyMeth3291.paramNames = [];
    applyMeth3291.definitionLine = 1735;
    applyMeth3291.definitionModule = "genjs";
    block3291.methods["apply"] = applyMeth3291;
    // call case 6: other requests
    setLineNumber(1733);    // compilenode member
    // call case 6: other requests
    var call3294 = request(var_inhNode, "aliases", [0]);
    var call3277 = request(call3294, "do(1)separatedBy(1)", [1, 1], block3278, block3291);
    setLineNumber(1738);    // compilenode string
    var string3295 = new GraceString("]");
    var opresult3296 = request(var_res, "++(1)", [1], string3295);
    return opresult3296;
  };    // end of method aliasList(_)
  this.methods["aliasList(1)"] = func3275;
  func3275.methodName = "aliasList(1)";
  func3275.paramCounts = [1];
  func3275.paramNames = ["inhNode"];
  func3275.definitionLine = 1731;
  func3275.definitionModule = "genjs";
  var func3297 = function(argcv, var_inhNode) {    // method exclusionList(_), line 1741
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("exclusionList(_)", 0, numArgs - 1);
    }
    setLineNumber(1742);    // compilenode string
    var string3298 = new GraceString("[");
    var var_res = string3298;
    setLineNumber(1743);    // compilenode block
    var block3300 = new GraceBlock(this, 1743, 1);
    block3300.guard = jsTrue;
    block3300.real = function block3300(var_e) {
      setLineNumber(1744);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string3301 = new GraceString("\"");
      // call case 6: other requests
      // call case 6: other requests
      var call3303 = request(var_e, "nameString", [0]);
      var call3302 = request(call3303, "quoted", [0]);
      var opresult3304 = request(string3301, "++(1)", [1], call3302);
      var string3305 = new GraceString("\"");
      var opresult3306 = request(opresult3304, "++(1)", [1], string3305);
      var opresult3307 = request(var_res, "++(1)", [1], opresult3306);
      var_res = opresult3307;
      return GraceDone;
    };
    let applyMeth3300 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth3300.methodName = "apply(1)";
    applyMeth3300.paramCounts = [1];
    applyMeth3300.paramNames = ["e"];
    applyMeth3300.definitionLine = 1743;
    applyMeth3300.definitionModule = "genjs";
    block3300.methods["apply(1)"] = applyMeth3300;
    let matchesMeth3300 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth3300.methodName = "matches(1)";
    matchesMeth3300.paramCounts = [1];
    matchesMeth3300.paramNames = ["e"];
    matchesMeth3300.definitionLine = 1743;
    matchesMeth3300.definitionModule = "genjs";
    block3300.methods["matches(1)"] = matchesMeth3300;
    setLineNumber(1745);    // compilenode block
    var block3308 = new GraceBlock(this, 1745, 0);
    block3308.guard = jsTrue;
    block3308.real = function block3308() {
      setLineNumber(1746);    // compilenode op
      if (var_res === undefined) raiseUninitializedVariable("res");
      var string3309 = new GraceString(", ");
      var opresult3310 = request(var_res, "++(1)", [1], string3309);
      var_res = opresult3310;
      return GraceDone;
    };
    let applyMeth3308 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth3308.methodName = "apply";
    applyMeth3308.paramCounts = [0];
    applyMeth3308.paramNames = [];
    applyMeth3308.definitionLine = 1745;
    applyMeth3308.definitionModule = "genjs";
    block3308.methods["apply"] = applyMeth3308;
    // call case 6: other requests
    setLineNumber(1743);    // compilenode member
    // call case 6: other requests
    var call3311 = request(var_inhNode, "exclusions", [0]);
    var call3299 = request(call3311, "do(1)separatedBy(1)", [1, 1], block3300, block3308);
    setLineNumber(1748);    // compilenode string
    var string3312 = new GraceString("]");
    var opresult3313 = request(var_res, "++(1)", [1], string3312);
    return opresult3313;
  };    // end of method exclusionList(_)
  this.methods["exclusionList(1)"] = func3297;
  func3297.methodName = "exclusionList(1)";
  func3297.paramCounts = [1];
  func3297.paramNames = ["inhNode"];
  func3297.definitionLine = 1741;
  func3297.definitionModule = "genjs";
  var func3314 = function(argcv, var_useNode, var_objNode) {    // method compileUse(_)in(_), line 1751
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("compileUse(_)in(_)", 0, numArgs - 2);
    }
    setLineNumber(1754);    // compilenode member
    // call case 6: other requests
    var call3317 = request(var_useNode, "value", [0]);
    setLineNumber(1755);    // compilenode member
    // call case 6: other requests
    var call3318 = request(var_objNode, "nameString", [0]);
    setLineNumber(1756);    // compilenode call
    // call case 2: outer request
    var call3319 = selfRequest(importedModules["genjs"], "aliasList(1)", [1], var_useNode);
    setLineNumber(1757);    // compilenode call
    // call case 2: outer request
    var call3320 = selfRequest(importedModules["genjs"], "exclusionList(1)", [1], var_useNode);
    // call case 2: outer request
    var call3316 = selfRequest(importedModules["genjs"], "compileReuseCall(1)forClass(1)aliases(1)exclusions(1)", [1, 1, 1, 1], call3317, call3318, call3319, call3320);
    // call case 6: other requests
    var call3315 = request(var_useNode, "register:=(1)", [1], call3316);
    return call3315;
  };    // end of method compileUse(_)in(_)
  this.methods["compileUse(1)in(1)"] = func3314;
  func3314.methodName = "compileUse(1)in(1)";
  func3314.paramCounts = [1, 1];
  func3314.paramNames = ["useNode", "objNode"];
  func3314.definitionLine = 1751;
  func3314.definitionModule = "genjs";
  var func3321 = function(argcv, var_of, var_glPath) {    // method runJsCode(_,_), line 1760
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("runJsCode(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1761);    // compilenode string
    var string3323 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call3324 = request(var_sys, "environ", [0]);
    var call3322 = request(call3324, "at(1)", [1], string3323);
    var var_gmp = call3322;
    setLineNumber(1762);    // compilenode call
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call3325 = request(var_filePath, "split(1)", [1], var_gmp);
    var var_pathList = call3325;
    var if3326 = GraceDone;
    setLineNumber(1763);    // compilenode string
    var string3328 = new GraceString("/");
    // call case 6: other requests
    var call3327 = request(var_glPath, "endsWith(1)", [1], string3328);
    if (Grace_isTrue(call3327)) {
      if3326 = var_glPath;
    } else {
      setLineNumber(1764);    // compilenode string
      var string3329 = new GraceString("/");
      var opresult3330 = request(var_glPath, "++(1)", [1], string3329);
      if3326 = opresult3330;
    }
    var var_libPath = if3326;
    var if3331 = GraceDone;
    setLineNumber(1765);    // compilenode string
    var string3333 = new GraceString("gracelib.js");
    var opresult3334 = request(var_libPath, "++(1)", [1], string3333);
    // call case 6: other requests
    if (var_io === undefined) raiseUninitializedVariable("io");
    var call3332 = request(var_io, "exists(1)", [1], opresult3334);
    if (Grace_isTrue(call3332)) {
      var if3335 = GraceDone;
      setLineNumber(1766);    // compilenode member
      // call case 6: other requests
      if (var_libPath === undefined) raiseUninitializedVariable("libPath");
      // call case 6: other requests
      if (var_pathList === undefined) raiseUninitializedVariable("pathList");
      var call3337 = request(var_pathList, "contains(1)", [1], var_libPath);
      var call3336 = request(call3337, "not", [0]);
      if (Grace_isTrue(call3336)) {
        setLineNumber(1767);    // compilenode string
        var string3339 = new GraceString("GRACE_MODULE_PATH");
        var string3340 = new GraceString("");
        if (var_libPath === undefined) raiseUninitializedVariable("libPath");
        var opresult3341 = request(string3340, "++(1)", [1], var_libPath);
        var string3342 = new GraceString(":");
        var opresult3343 = request(opresult3341, "++(1)", [1], string3342);
        if (var_gmp === undefined) raiseUninitializedVariable("gmp");
        var opresult3344 = request(opresult3343, "++(1)", [1], var_gmp);
        var string3345 = new GraceString("");
        var opresult3346 = request(opresult3344, "++(1)", [1], string3345);
        // call case 6: other requests
        // call case 6: other requests
        if (var_sys === undefined) raiseUninitializedVariable("sys");
        var call3347 = request(var_sys, "environ", [0]);
        var call3338 = request(call3347, "at(1)put(1)", [1, 1], string3339, opresult3346);
        if3335 = call3338;
      }
      if3331 = if3335;
    }
    setLineNumber(1770);    // compilenode string
    var string3349 = new GraceString("PATH");
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call3350 = request(var_sys, "environ", [0]);
    var call3348 = request(call3350, "at(1)", [1], string3349);
    var var_p = call3348;
    setLineNumber(1771);    // compilenode string
    var string3352 = new GraceString("grace");
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call3351 = request(var_filePath, "withBase(1)", [1], string3352);
    var var_grace = call3351;
    setLineNumber(1773);    // compilenode block
    var block3354 = new GraceBlock(this, 1773, 1);
    block3354.guard = jsTrue;
    block3354.real = function block3354(var_firstTries) {
      setLineNumber(1774);    // compilenode call
      if (var_grace === undefined) raiseUninitializedVariable("grace");
      if (var_gmp === undefined) raiseUninitializedVariable("gmp");
      var block3356 = new GraceBlock(this, 1774, 1);
      block3356.guard = jsTrue;
      block3356.real = function block3356(var_secondTries) {
        setLineNumber(1775);    // compilenode op
        var opresult3358 = request(var_firstTries, "++(1)", [1], var_secondTries);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call3357 = request(var_errormessages, "readableStringFrom(1)", [1], opresult3358);
        var var_places = call3357;
        setLineNumber(1776);    // compilenode string
        var string3360 = new GraceString("minigrace: can't run ");
        if (var_modname === undefined) raiseUninitializedVariable("modname");
        var opresult3361 = request(string3360, "++(1)", [1], var_modname);
        var string3362 = new GraceString(" because I can't find the `grace` runner;\nI looked in ");
        var opresult3363 = request(opresult3361, "++(1)", [1], string3362);
        if (var_places === undefined) raiseUninitializedVariable("places");
        var opresult3364 = request(opresult3363, "++(1)", [1], var_places);
        var string3365 = new GraceString(".\n");
        var opresult3366 = request(opresult3364, "++(1)", [1], string3365);
        // call case 6: other requests
        // call case 6: other requests
        if (var_io === undefined) raiseUninitializedVariable("io");
        var call3367 = request(var_io, "error", [0]);
        var call3359 = request(call3367, "write(1)", [1], opresult3366);
        setLineNumber(1777);    // compilenode num
        // call case 6: other requests
        if (var_sys === undefined) raiseUninitializedVariable("sys");
        var call3368 = request(var_sys, "exit(1)", [1], new GraceNum(3));
        return call3368;
      };
      let applyMeth3356 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth3356.methodName = "apply(1)";
      applyMeth3356.paramCounts = [1];
      applyMeth3356.paramNames = ["secondTries"];
      applyMeth3356.definitionLine = 1774;
      applyMeth3356.definitionModule = "genjs";
      block3356.methods["apply(1)"] = applyMeth3356;
      let matchesMeth3356 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth3356.methodName = "matches(1)";
      matchesMeth3356.paramCounts = [1];
      matchesMeth3356.paramNames = ["secondTries"];
      matchesMeth3356.definitionLine = 1774;
      matchesMeth3356.definitionModule = "genjs";
      block3356.methods["matches(1)"] = matchesMeth3356;
      // call case 6: other requests
      if (var_filePath === undefined) raiseUninitializedVariable("filePath");
      var call3355 = request(var_filePath, "file(1)onPath(1)otherwise(1)", [1, 1, 1], var_grace, var_gmp, block3356);
      return call3355;
    };
    let applyMeth3354 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth3354.methodName = "apply(1)";
    applyMeth3354.paramCounts = [1];
    applyMeth3354.paramNames = ["firstTries"];
    applyMeth3354.definitionLine = 1773;
    applyMeth3354.definitionModule = "genjs";
    block3354.methods["apply(1)"] = applyMeth3354;
    let matchesMeth3354 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth3354.methodName = "matches(1)";
    matchesMeth3354.paramCounts = [1];
    matchesMeth3354.paramNames = ["firstTries"];
    matchesMeth3354.definitionLine = 1773;
    matchesMeth3354.definitionModule = "genjs";
    block3354.methods["matches(1)"] = matchesMeth3354;
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call3353 = request(var_filePath, "file(1)onPath(1)otherwise(1)", [1, 1, 1], var_grace, var_p, block3354);
    var var_executor = call3353;
    setLineNumber(1780);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3372 = request(var_of, "pathname", [0]);
    var array3371 = new GraceSequence([call3372]);
    // call case 6: other requests
    if (var_io === undefined) raiseUninitializedVariable("io");
    var call3370 = request(var_io, "spawn(2)", [2], var_executor, array3371);
    var call3369 = request(call3370, "wait", [0]);
    var var_runExitCode = call3369;
    var if3373 = GraceDone;
    setLineNumber(1781);    // compilenode num
    var opresult3374 = request(var_runExitCode, "<(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3374)) {
      setLineNumber(1782);    // compilenode string
      var string3376 = new GraceString("minigrace: program ");
      if (var_modname === undefined) raiseUninitializedVariable("modname");
      var opresult3377 = request(string3376, "++(1)", [1], var_modname);
      var string3378 = new GraceString(" exited with error ");
      var opresult3379 = request(opresult3377, "++(1)", [1], string3378);
      // call case 6: other requests
      if (var_runExitCode === undefined) raiseUninitializedVariable("runExitCode");
      var call3380 = request(var_runExitCode, "prefix-", [0]);
      var opresult3381 = request(opresult3379, "++(1)", [1], call3380);
      var string3382 = new GraceString(".\n");
      var opresult3383 = request(opresult3381, "++(1)", [1], string3382);
      // call case 6: other requests
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call3384 = request(var_io, "error", [0]);
      var call3375 = request(call3384, "write(1)", [1], opresult3383);
      setLineNumber(1783);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call3385 = request(var_sys, "exit(1)", [1], new GraceNum(4));
      if3373 = call3385;
    }
    return if3373;
  };    // end of method runJsCode(_,_)
  this.methods["runJsCode(2)"] = func3321;
  func3321.methodName = "runJsCode(2)";
  func3321.paramCounts = [2];
  func3321.paramNames = ["of", "glPath"];
  func3321.definitionLine = 1760;
  func3321.definitionModule = "genjs";
  setLineNumber(12);    // compilenode member
  // call case 6: other requests
  // call case 6: other requests
  var call3387 = request(var_map, "dictionary", [0]);
  var call3386 = request(call3387, "empty", [0]);
  var var_nodeTally = call3386;
  var reader3388_nodeTally = function() {  // reader method nodeTally
      if (var_nodeTally === undefined) raiseUninitializedVariable("nodeTally");
      return var_nodeTally;
  };
  reader3388_nodeTally.isDef = true;
  reader3388_nodeTally.confidential = true;
  this.methods["nodeTally"] = reader3388_nodeTally;
  setLineNumber(14);    // compilenode string
  var string3389 = new GraceString("");
  var var_indent = string3389;
  var reader3390_indent = function() {  // reader method indent
      if (var_indent === undefined) raiseUninitializedVariable("indent");
      return var_indent;
  };
  reader3390_indent.isVar = true;
  reader3390_indent.confidential = true;
  this.methods["indent"] = reader3390_indent;
  var writer3391_indent = function(argcv, n) {   // writer method indent:=(_)
    var_indent = n;
    return GraceDone;
  };
  writer3391_indent.confidential = true;
  this.methods["indent:=(1)"] = writer3391_indent;
  setLineNumber(15);    // compilenode num
  var var_verbosity = new GraceNum(30);
  var reader3392_verbosity = function() {  // reader method verbosity
      if (var_verbosity === undefined) raiseUninitializedVariable("verbosity");
      return var_verbosity;
  };
  reader3392_verbosity.isVar = true;
  reader3392_verbosity.confidential = true;
  this.methods["verbosity"] = reader3392_verbosity;
  var writer3393_verbosity = function(argcv, n) {   // writer method verbosity:=(_)
    var_verbosity = n;
    return GraceDone;
  };
  writer3393_verbosity.confidential = true;
  this.methods["verbosity:=(1)"] = writer3393_verbosity;
  setLineNumber(16);    // compilenode num
  var var_pad1 = new GraceNum(1);
  var reader3394_pad1 = function() {  // reader method pad1
      if (var_pad1 === undefined) raiseUninitializedVariable("pad1");
      return var_pad1;
  };
  reader3394_pad1.isVar = true;
  reader3394_pad1.confidential = true;
  this.methods["pad1"] = reader3394_pad1;
  var writer3395_pad1 = function(argcv, n) {   // writer method pad1:=(_)
    var_pad1 = n;
    return GraceDone;
  };
  writer3395_pad1.confidential = true;
  this.methods["pad1:=(1)"] = writer3395_pad1;
  setLineNumber(17);    // compilenode num
  var var_auto__95__count = new GraceNum(0);
  var reader3396_auto__95__count = function() {  // reader method auto_count
      if (var_auto__95__count === undefined) raiseUninitializedVariable("auto_count");
      return var_auto__95__count;
  };
  reader3396_auto__95__count.isVar = true;
  reader3396_auto__95__count.confidential = true;
  this.methods["auto_count"] = reader3396_auto__95__count;
  var writer3397_auto__95__count = function(argcv, n) {   // writer method auto_count:=(_)
    var_auto__95__count = n;
    return GraceDone;
  };
  writer3397_auto__95__count.confidential = true;
  this.methods["auto_count:=(1)"] = writer3397_auto__95__count;
  setLineNumber(18);    // compilenode array
  var array3399 = new GraceSequence([]);
  // call case 2: outer request
  var call3398 = selfRequest(var_prelude, "list(1)", [1], array3399);
  var var_constants = call3398;
  var reader3400_constants = function() {  // reader method constants
      if (var_constants === undefined) raiseUninitializedVariable("constants");
      return var_constants;
  };
  reader3400_constants.isVar = true;
  reader3400_constants.confidential = true;
  this.methods["constants"] = reader3400_constants;
  var writer3401_constants = function(argcv, n) {   // writer method constants:=(_)
    var_constants = n;
    return GraceDone;
  };
  writer3401_constants.confidential = true;
  this.methods["constants:=(1)"] = writer3401_constants;
  setLineNumber(19);    // compilenode array
  var array3403 = new GraceSequence([]);
  // call case 2: outer request
  var call3402 = selfRequest(var_prelude, "list(1)", [1], array3403);
  var var_output = call3402;
  var reader3404_output = function() {  // reader method output
      if (var_output === undefined) raiseUninitializedVariable("output");
      return var_output;
  };
  reader3404_output.isVar = true;
  reader3404_output.confidential = true;
  this.methods["output"] = reader3404_output;
  var writer3405_output = function(argcv, n) {   // writer method output:=(_)
    var_output = n;
    return GraceDone;
  };
  writer3405_output.confidential = true;
  this.methods["output:=(1)"] = writer3405_output;
  setLineNumber(20);    // compilenode array
  var array3407 = new GraceSequence([]);
  // call case 2: outer request
  var call3406 = selfRequest(var_prelude, "list(1)", [1], array3407);
  var var_usedvars = call3406;
  var reader3408_usedvars = function() {  // reader method usedvars
      if (var_usedvars === undefined) raiseUninitializedVariable("usedvars");
      return var_usedvars;
  };
  reader3408_usedvars.isVar = true;
  reader3408_usedvars.confidential = true;
  this.methods["usedvars"] = reader3408_usedvars;
  var writer3409_usedvars = function(argcv, n) {   // writer method usedvars:=(_)
    var_usedvars = n;
    return GraceDone;
  };
  writer3409_usedvars.confidential = true;
  this.methods["usedvars:=(1)"] = writer3409_usedvars;
  setLineNumber(21);    // compilenode array
  var array3411 = new GraceSequence([]);
  // call case 2: outer request
  var call3410 = selfRequest(var_prelude, "list(1)", [1], array3411);
  var var_declaredvars = call3410;
  var reader3412_declaredvars = function() {  // reader method declaredvars
      if (var_declaredvars === undefined) raiseUninitializedVariable("declaredvars");
      return var_declaredvars;
  };
  reader3412_declaredvars.isVar = true;
  reader3412_declaredvars.confidential = true;
  this.methods["declaredvars"] = reader3412_declaredvars;
  var writer3413_declaredvars = function(argcv, n) {   // writer method declaredvars:=(_)
    var_declaredvars = n;
    return GraceDone;
  };
  writer3413_declaredvars.confidential = true;
  this.methods["declaredvars:=(1)"] = writer3413_declaredvars;
  setLineNumber(22);    // compilenode member
  // call case 6: other requests
  // call case 2: outer request
  var call3415 = selfRequest(var_prelude, "set", [0]);
  var call3414 = request(call3415, "empty", [0]);
  var var_initializedVars = call3414;
  var reader3416_initializedVars = function() {  // reader method initializedVars
      if (var_initializedVars === undefined) raiseUninitializedVariable("initializedVars");
      return var_initializedVars;
  };
  reader3416_initializedVars.isVar = true;
  reader3416_initializedVars.confidential = true;
  this.methods["initializedVars"] = reader3416_initializedVars;
  var writer3417_initializedVars = function(argcv, n) {   // writer method initializedVars:=(_)
    var_initializedVars = n;
    return GraceDone;
  };
  writer3417_initializedVars.confidential = true;
  this.methods["initializedVars:=(1)"] = writer3417_initializedVars;
  setLineNumber(39);    // compilenode string
  var string3418 = new GraceString("entry");
  var var_bblock = string3418;
  var reader3419_bblock = function() {  // reader method bblock
      if (var_bblock === undefined) raiseUninitializedVariable("bblock");
      return var_bblock;
  };
  reader3419_bblock.isVar = true;
  reader3419_bblock.confidential = true;
  this.methods["bblock"] = reader3419_bblock;
  var writer3420_bblock = function(argcv, n) {   // writer method bblock:=(_)
    var_bblock = n;
    return GraceDone;
  };
  writer3420_bblock.confidential = true;
  this.methods["bblock:=(1)"] = writer3420_bblock;
  setLineNumber(41);    // compilenode vardec
  var var_outfile;
  var reader3421_outfile = function() {  // reader method outfile
      if (var_outfile === undefined) raiseUninitializedVariable("outfile");
      return var_outfile;
  };
  reader3421_outfile.isVar = true;
  reader3421_outfile.confidential = true;
  this.methods["outfile"] = reader3421_outfile;
  var writer3422_outfile = function(argcv, n) {   // writer method outfile:=(_)
    var_outfile = n;
    return GraceDone;
  };
  writer3422_outfile.confidential = true;
  this.methods["outfile:=(1)"] = writer3422_outfile;
  setLineNumber(42);    // compilenode string
  var string3423 = new GraceString("main");
  var var_modname = string3423;
  var reader3424_modname = function() {  // reader method modname
      if (var_modname === undefined) raiseUninitializedVariable("modname");
      return var_modname;
  };
  reader3424_modname.isVar = true;
  reader3424_modname.confidential = true;
  this.methods["modname"] = reader3424_modname;
  var writer3425_modname = function(argcv, n) {   // writer method modname:=(_)
    var_modname = n;
    return GraceDone;
  };
  writer3425_modname.confidential = true;
  this.methods["modname:=(1)"] = writer3425_modname;
  setLineNumber(43);    // compilenode string
  var string3426 = new GraceString("bc");
  var var_buildtype = string3426;
  var reader3427_buildtype = function() {  // reader method buildtype
      if (var_buildtype === undefined) raiseUninitializedVariable("buildtype");
      return var_buildtype;
  };
  reader3427_buildtype.isVar = true;
  reader3427_buildtype.confidential = true;
  this.methods["buildtype"] = reader3427_buildtype;
  var writer3428_buildtype = function(argcv, n) {   // writer method buildtype:=(_)
    var_buildtype = n;
    return GraceDone;
  };
  writer3428_buildtype.confidential = true;
  this.methods["buildtype:=(1)"] = writer3428_buildtype;
  setLineNumber(44);    // compilenode vardec
  var var_inBlock = GraceFalse;
  var reader3429_inBlock = function() {  // reader method inBlock
      if (var_inBlock === undefined) raiseUninitializedVariable("inBlock");
      return var_inBlock;
  };
  reader3429_inBlock.isVar = true;
  reader3429_inBlock.confidential = true;
  this.methods["inBlock"] = reader3429_inBlock;
  var writer3430_inBlock = function(argcv, n) {   // writer method inBlock:=(_)
    var_inBlock = n;
    return GraceDone;
  };
  writer3430_inBlock.confidential = true;
  this.methods["inBlock:=(1)"] = writer3430_inBlock;
  setLineNumber(45);    // compilenode num
  var var_compilationDepth = new GraceNum(0);
  var reader3431_compilationDepth = function() {  // reader method compilationDepth
      if (var_compilationDepth === undefined) raiseUninitializedVariable("compilationDepth");
      return var_compilationDepth;
  };
  reader3431_compilationDepth.isVar = true;
  reader3431_compilationDepth.confidential = true;
  this.methods["compilationDepth"] = reader3431_compilationDepth;
  var writer3432_compilationDepth = function(argcv, n) {   // writer method compilationDepth:=(_)
    var_compilationDepth = n;
    return GraceDone;
  };
  writer3432_compilationDepth.confidential = true;
  this.methods["compilationDepth:=(1)"] = writer3432_compilationDepth;
  setLineNumber(46);    // compilenode member
  // call case 6: other requests
  // call case 2: outer request
  var call3434 = selfRequest(var_prelude, "set", [0]);
  var call3433 = request(call3434, "empty", [0]);
  var var_importedModules = call3433;
  var reader3435_importedModules = function() {  // reader method importedModules
      if (var_importedModules === undefined) raiseUninitializedVariable("importedModules");
      return var_importedModules;
  };
  reader3435_importedModules.isDef = true;
  reader3435_importedModules.confidential = true;
  this.methods["importedModules"] = reader3435_importedModules;
  setLineNumber(47);    // compilenode member
  // call case 6: other requests
  // call case 2: outer request
  var call3437 = selfRequest(var_prelude, "set", [0]);
  var call3436 = request(call3437, "empty", [0]);
  var var_topLevelTypes = call3436;
  var reader3438_topLevelTypes = function() {  // reader method topLevelTypes
      if (var_topLevelTypes === undefined) raiseUninitializedVariable("topLevelTypes");
      return var_topLevelTypes;
  };
  reader3438_topLevelTypes.isDef = true;
  reader3438_topLevelTypes.confidential = true;
  this.methods["topLevelTypes"] = reader3438_topLevelTypes;
  setLineNumber(48);    // compilenode member
  // call case 6: other requests
  var call3439 = request(var_util, "requiredModules", [0]);
  var var_imports = call3439;
  var reader3440_imports = function() {  // reader method imports
      if (var_imports === undefined) raiseUninitializedVariable("imports");
      return var_imports;
  };
  reader3440_imports.isDef = true;
  reader3440_imports.confidential = true;
  this.methods["imports"] = reader3440_imports;
  setLineNumber(49);    // compilenode vardec
  var var_debugMode = GraceFalse;
  var reader3441_debugMode = function() {  // reader method debugMode
      if (var_debugMode === undefined) raiseUninitializedVariable("debugMode");
      return var_debugMode;
  };
  reader3441_debugMode.isVar = true;
  reader3441_debugMode.confidential = true;
  this.methods["debugMode"] = reader3441_debugMode;
  var writer3442_debugMode = function(argcv, n) {   // writer method debugMode:=(_)
    var_debugMode = n;
    return GraceDone;
  };
  writer3442_debugMode.confidential = true;
  this.methods["debugMode:=(1)"] = writer3442_debugMode;
  setLineNumber(50);    // compilenode num
  var var_priorLineSeen = new GraceNum(0);
  var reader3443_priorLineSeen = function() {  // reader method priorLineSeen
      if (var_priorLineSeen === undefined) raiseUninitializedVariable("priorLineSeen");
      return var_priorLineSeen;
  };
  reader3443_priorLineSeen.isVar = true;
  reader3443_priorLineSeen.confidential = true;
  this.methods["priorLineSeen"] = reader3443_priorLineSeen;
  var writer3444_priorLineSeen = function(argcv, n) {   // writer method priorLineSeen:=(_)
    var_priorLineSeen = n;
    return GraceDone;
  };
  writer3444_priorLineSeen.confidential = true;
  this.methods["priorLineSeen:=(1)"] = writer3444_priorLineSeen;
  setLineNumber(51);    // compilenode string
  var string3445 = new GraceString("");
  var var_priorLineComment = string3445;
  var reader3446_priorLineComment = function() {  // reader method priorLineComment
      if (var_priorLineComment === undefined) raiseUninitializedVariable("priorLineComment");
      return var_priorLineComment;
  };
  reader3446_priorLineComment.isVar = true;
  reader3446_priorLineComment.confidential = true;
  this.methods["priorLineComment"] = reader3446_priorLineComment;
  var writer3447_priorLineComment = function(argcv, n) {   // writer method priorLineComment:=(_)
    var_priorLineComment = n;
    return GraceDone;
  };
  writer3447_priorLineComment.confidential = true;
  this.methods["priorLineComment:=(1)"] = writer3447_priorLineComment;
  setLineNumber(52);    // compilenode num
  var var_priorLineEmitted = new GraceNum(0);
  var reader3448_priorLineEmitted = function() {  // reader method priorLineEmitted
      if (var_priorLineEmitted === undefined) raiseUninitializedVariable("priorLineEmitted");
      return var_priorLineEmitted;
  };
  reader3448_priorLineEmitted.isVar = true;
  reader3448_priorLineEmitted.confidential = true;
  this.methods["priorLineEmitted"] = reader3448_priorLineEmitted;
  var writer3449_priorLineEmitted = function(argcv, n) {   // writer method priorLineEmitted:=(_)
    var_priorLineEmitted = n;
    return GraceDone;
  };
  writer3449_priorLineEmitted.confidential = true;
  this.methods["priorLineEmitted:=(1)"] = writer3449_priorLineEmitted;
  setLineNumber(53);    // compilenode vardec
  var var_emitTypeChecks = GraceTrue;
  var reader3450_emitTypeChecks = function() {  // reader method emitTypeChecks
      if (var_emitTypeChecks === undefined) raiseUninitializedVariable("emitTypeChecks");
      return var_emitTypeChecks;
  };
  reader3450_emitTypeChecks.isVar = true;
  reader3450_emitTypeChecks.confidential = true;
  this.methods["emitTypeChecks"] = reader3450_emitTypeChecks;
  var writer3451_emitTypeChecks = function(argcv, n) {   // writer method emitTypeChecks:=(_)
    var_emitTypeChecks = n;
    return GraceDone;
  };
  writer3451_emitTypeChecks.confidential = true;
  this.methods["emitTypeChecks:=(1)"] = writer3451_emitTypeChecks;
  setLineNumber(54);    // compilenode vardec
  var var_emitUndefinedChecks = GraceTrue;
  var reader3452_emitUndefinedChecks = function() {  // reader method emitUndefinedChecks
      if (var_emitUndefinedChecks === undefined) raiseUninitializedVariable("emitUndefinedChecks");
      return var_emitUndefinedChecks;
  };
  reader3452_emitUndefinedChecks.isVar = true;
  reader3452_emitUndefinedChecks.confidential = true;
  this.methods["emitUndefinedChecks"] = reader3452_emitUndefinedChecks;
  var writer3453_emitUndefinedChecks = function(argcv, n) {   // writer method emitUndefinedChecks:=(_)
    var_emitUndefinedChecks = n;
    return GraceDone;
  };
  writer3453_emitUndefinedChecks.confidential = true;
  this.methods["emitUndefinedChecks:=(1)"] = writer3453_emitUndefinedChecks;
  setLineNumber(55);    // compilenode vardec
  var var_emitArgChecks = GraceTrue;
  var reader3454_emitArgChecks = function() {  // reader method emitArgChecks
      if (var_emitArgChecks === undefined) raiseUninitializedVariable("emitArgChecks");
      return var_emitArgChecks;
  };
  reader3454_emitArgChecks.isVar = true;
  reader3454_emitArgChecks.confidential = true;
  this.methods["emitArgChecks"] = reader3454_emitArgChecks;
  var writer3455_emitArgChecks = function(argcv, n) {   // writer method emitArgChecks:=(_)
    var_emitArgChecks = n;
    return GraceDone;
  };
  writer3455_emitArgChecks.confidential = true;
  this.methods["emitArgChecks:=(1)"] = writer3455_emitArgChecks;
  setLineNumber(56);    // compilenode vardec
  var var_emitPositions = GraceTrue;
  var reader3456_emitPositions = function() {  // reader method emitPositions
      if (var_emitPositions === undefined) raiseUninitializedVariable("emitPositions");
      return var_emitPositions;
  };
  reader3456_emitPositions.isVar = true;
  reader3456_emitPositions.confidential = true;
  this.methods["emitPositions"] = reader3456_emitPositions;
  var writer3457_emitPositions = function(argcv, n) {   // writer method emitPositions:=(_)
    var_emitPositions = n;
    return GraceDone;
  };
  writer3457_emitPositions.confidential = true;
  this.methods["emitPositions:=(1)"] = writer3457_emitPositions;
  setLineNumber(57);    // compilenode vardec
  var var_emod;
  var reader3458_emod = function() {  // reader method emod
      if (var_emod === undefined) raiseUninitializedVariable("emod");
      return var_emod;
  };
  reader3458_emod.isVar = true;
  reader3458_emod.confidential = true;
  this.methods["emod"] = reader3458_emod;
  var writer3459_emod = function(argcv, n) {   // writer method emod:=(_)
    var_emod = n;
    return GraceDone;
  };
  writer3459_emod.confidential = true;
  this.methods["emod:=(1)"] = writer3459_emod;
  setLineNumber(59);    // compilenode vardec
  var var_modNameAsString;
  var reader3460_modNameAsString = function() {  // reader method modNameAsString
      if (var_modNameAsString === undefined) raiseUninitializedVariable("modNameAsString");
      return var_modNameAsString;
  };
  reader3460_modNameAsString.isVar = true;
  reader3460_modNameAsString.confidential = true;
  this.methods["modNameAsString"] = reader3460_modNameAsString;
  var writer3461_modNameAsString = function(argcv, n) {   // writer method modNameAsString:=(_)
    var_modNameAsString = n;
    return GraceDone;
  };
  writer3461_modNameAsString.confidential = true;
  this.methods["modNameAsString:=(1)"] = writer3461_modNameAsString;
  setLineNumber(1483);    // compilenode block
  var block3462 = new GraceBlock(this, 1483, 2);
  block3462.guard = jsTrue;
  block3462.real = function block3462(var_a, var_b) {
    setLineNumber(1483);    // compilenode member
    // call case 6: other requests
    var call3464 = request(var_a, "value", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call3465 = request(var_b, "value", [0]);
    var call3463 = request(call3465, "compare(1)", [1], call3464);
    return call3463;
  };
  let applyMeth3462 = function apply_2 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth3462.methodName = "apply(2)";
  applyMeth3462.paramCounts = [2];
  applyMeth3462.paramNames = ["a", "b"];
  applyMeth3462.definitionLine = 1483;
  applyMeth3462.definitionModule = "genjs";
  block3462.methods["apply(2)"] = applyMeth3462;
  let matchesMeth3462 = function matches_2 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth3462.methodName = "matches(2)";
  matchesMeth3462.paramCounts = [2];
  matchesMeth3462.paramNames = ["a", "b"];
  matchesMeth3462.definitionLine = 1483;
  matchesMeth3462.definitionModule = "genjs";
  block3462.methods["matches(2)"] = matchesMeth3462;
  var var_valueCompare = block3462;
  var reader3466_valueCompare = function() {  // reader method valueCompare
      if (var_valueCompare === undefined) raiseUninitializedVariable("valueCompare");
      return var_valueCompare;
  };
  reader3466_valueCompare.isDef = true;
  reader3466_valueCompare.confidential = true;
  this.methods["valueCompare"] = reader3466_valueCompare;
  setLineNumber(1543);    // compilenode string
  var string3467 = new GraceString("var_");
  var string3469 = new GraceString("_prelude");
  // call case 2: outer request
  var call3468 = selfRequest(importedModules["genjs"], "escapeident(1)", [1], string3469);
  var opresult3470 = request(string3467, "++(1)", [1], call3468);
  var var_standardPrelude = opresult3470;
  var reader3471_standardPrelude = function() {  // reader method standardPrelude
      if (var_standardPrelude === undefined) raiseUninitializedVariable("standardPrelude");
      return var_standardPrelude;
  };
  reader3471_standardPrelude.isDef = true;
  reader3471_standardPrelude.confidential = true;
  this.methods["standardPrelude"] = reader3471_standardPrelude;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_genjs = gracecode_genjs;
if (typeof window !== "undefined")
  window.gracecode_genjs = gracecode_genjs;
gracecode_genjs.imports = ["ast", "errormessages", "fastDict", "identifierKinds", "io", "mirrors", "standardGrace", "sys", "unixFilePath", "util", "xmodule"];
gracecode_genjs.definitionModule = "genjs";
gracecode_genjs.definitionLine = 1;
