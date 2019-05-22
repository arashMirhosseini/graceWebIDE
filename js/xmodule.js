var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["xmodule"] = "classes:\nconfidential:\n CheckerFailure\n addFreshMethod(1)to(1)for(1)\n addFreshMethodsOf(1)to(1)\n addTransitiveImports(4)\n builtInModules\n checkimport(4)\n compileModule(1)inFile(1)forDialect(1)atRange(1)\n gctCache\n generateGctForModule(1)\n imports\n keyCompare\n methodtypes\n methodtypes:=(methodtypes': Unknown) \u2192 Done\n parseGCT(1)sourceDir(1)\n typeVisitor\n writeGCT(2)\ndialect:\n standardGrace\nfresh-methods:\nmethodtypes-of:LinePos:\n 1 line \u2192 Number\n 1 linePos \u2192 Number\nmethodtypes-of:RangeSuggestions:\n 1 line \u2192 Number\n 1 posEnd \u2192 Number\n 1 posStart \u2192 Number\n 1 suggestions \u2192 Unknown:Type\nmodules:\n ast\n collectionsPrelude\n errormessages\n fastDict\n identifierKinds\n io\n mirrors\n standardGrace\n sys\n unixFilePath\n util\npath:\n /Users/black/Development/mg/gracelang/minigrace/xmodule.grace\npublic:\n DialectError\n LinePos\n RangeSuggestions\n buildGctFor(1)\n checkDialect(1)\n checkExternalModule(1)\n currentDialect\n doAstCheck(1)\n doParseCheck(1)\n dynamicCModules\n extractGctFor(1)sourceDir(1)\n extractGctFromCache(1)\n extractGctFromGctFile(1)sourceDir(1)\n extractGctFromJsFile(1)sourceDir(1)\n gctAsString(1)\n generateMethodHeader(1)\n parseGCT(1)\n printBacktrace(1)asFarAs(1)\n reportDialectError(1)\n splitJsString(1)\n writeGctForModule(1)\npublicMethodTypes:\n DialectError \u2192 Unknown\n buildGctFor(module)\n checkDialect(moduleObject)\n checkExternalModule(node)\n currentDialect \u2192 Unknown\n doAstCheck(moduleNode)\n doParseCheck(moduleNode)\n dynamicCModules \u2192 Unknown\n extractGctFor(moduleName)sourceDir(dir)\n extractGctFromCache(module)\n extractGctFromGctFile(moduleName)sourceDir(dir)\n extractGctFromJsFile(moduleName)sourceDir(dir)\n gctAsString(gctDict)\n generateMethodHeader(methNode) \u2192 String\n parseGCT(moduleName)\n printBacktrace(exceptionPacket)asFarAs(methodName)\n reportDialectError(ex)\n splitJsString(jsLine:String)\n writeGctForModule(moduleObject)\ntypes:\n LinePos\n RangeSuggestions\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["xmodule"] = [
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "import \"ast\" as ast",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "import \"unixFilePath\" as filePath",
    "",
    "",
    "def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "def DialectError is public = Exception.refine \"DialectError\"",
    "    //must correspond to what is defined in \"dialect\"",
    "",
    "def gctCache = emptyDictionary",
    "def keyCompare = { a, b -> a.key.compare(b.key) }",
    "",
    "def builtInModules =",
    "        list [  \"imports\",",
    "                \"io\",",
    "                \"mirrors\",",
    "                \"sys\",",
    "                \"unicode\" ]",
    "",
    "def currentDialect is public = object {",
    "    var name is public := \"standardGrace\"",
    "    var moduleObject is public := prelude",
    "    // TODO: this isn't quite right: should be the prelude",
    "    // on the GRACE_MODULE_PATH of this compilation",
    "    var hasParseChecker is public := false",
    "    var hasAstChecker is public := false",
    "    var hasAtStart is public := false",
    "    var hasAtEnd is public := false",
    "}",
    "",
    "type LinePos = {",
    "    line -> Number",
    "    linePos -> Number",
    "}",
    "",
    "type RangeSuggestions = {",
    "    line -> Number",
    "    posStart -> Number",
    "    posEnd -> Number",
    "    suggestions",
    "}",
    "",
    "def dynamicCModules is public = set [\"mirrors\", \"curl\", \"unicode\"]",
    "def imports = util.requiredModules",
    "",
    "method checkDialect(moduleObject) {",
    "    def dialectNode = moduleObject.theDialect",
    "    def dmn = dialectNode.moduleName",
    "    currentDialect.name := dmn",
    "    if (dmn == \"none\") then { return }",
    "    util.log 50 verbose \"checking dialect {dmn} used by module {moduleObject.name}\"",
    "    checkExternalModule(dialectNode)",
    "    def dialectGct = parseGCT(dialectNode.value)",
    "    if ((dialectGct.at \"public\" ifAbsent {emptySequence}).contains \"thisDialect\") then {",
    "        util.log 50 verbose \"loading dialect \\\"{dmn}\\\" for checkers.\"",
    "        try {",
    "            def dobj = mirrors.loadDynamicModule(dialectNode.path)",
    "            currentDialect.moduleObject := dobj",
    "            if (mirrors.reflect(dobj).methodNames.contains \"thisDialect\") then {",
    "                def mths = mirrors.reflect(dobj.thisDialect).methods",
    "                for (mths) do { m ->",
    "                    if (m.name == \"parseChecker(_)\") then {",
    "                        currentDialect.hasParseChecker := true",
    "                    }",
    "                    if (m.name == \"astChecker(_)\") then {",
    "                        currentDialect.hasAstChecker := true",
    "                    }",
    "                    if (m.name == \"atEnd(_)\") then {",
    "                        currentDialect.hasAtEnd := true",
    "                    }",
    "                    if (m.name == \"atStart(_)\") then {",
    "                        currentDialect.hasAtStart := true",
    "                    }",
    "                }",
    "            }",
    "        } catch { e:Exception ->",
    "            util.setPosition(dialectNode.line, 1)",
    "            e.printBacktrace",
    "            errormessages.error \"Dialect error: dialect \\\"{dmn}\\\" failed to load.\\n{e}.\"",
    "                atLine(dialectNode.line)",
    "        }",
    "    } else {",
    "        util.log 50 verbose \"no need to load dialect \\\"{dmn}\\\": it does not define `thisDialect`\"",
    "    }",
    "}",
    "",
    "method doParseCheck(moduleNode) {",
    "    if (currentDialect.hasParseChecker.not) then { return }",
    "    try {",
    "        currentDialect.moduleObject.thisDialect.parseChecker(moduleNode)",
    "    } catch { e:CheckerFailure | DialectError | errormessages.SyntaxError ->",
    "        reportDialectError(e)",
    "    } catch { e:Exception ->      // some unknown Grace exception",
    "        printBacktrace (e) asFarAs \"thisDialect.parseChecker\"",
    "        errormessages.error(\"Unexpected exception raised by parse checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method doAstCheck(moduleNode) {",
    "    if (currentDialect.hasAstChecker.not) then { return }",
    "    try {",
    "        currentDialect.moduleObject.thisDialect.astChecker(moduleNode)",
    "    } catch { e:CheckerFailure | DialectError | errormessages.SyntaxError ->",
    "        reportDialectError(e)",
    "    } catch { e:Exception ->      // some unknown Grace exception",
    "        printBacktrace (e) asFarAs \"thisDialect.astChecker\"",
    "        errormessages.error(\"Unexpected exception raised by AST checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method reportDialectError(ex) {",
    "    match (ex.data)",
    "      case { rs:RangeSuggestions ->",
    "        errormessages.error \"Dialect {currentDialect.name}: {ex.message}.\"",
    "            atRange(rs)",
    "            withSuggestions(rs.suggestions)",
    "    } case { r:ast.Range ->  //  inlcudes ast.AstNode",
    "        errormessages.error \"Dialect {currentDialect.name}: {ex.message}.\"",
    "            atRange(r)",
    "    } case { p:ast.Position ->",
    "        errormessages.error \"Dialect {currentDialect.name}: {ex.message}.\"",
    "            atPosition(p.line, p.column)",
    "    } else {",
    "        errormessages.error \"Dialect {currentDialect.name}: {ex.message}.\"",
    "            atLine(util.linenum)",
    "    }",
    "}",
    "",
    "method printBacktrace(exceptionPacket) asFarAs (methodName) {",
    "    def ex = exceptionPacket.exception",
    "    def msg = exceptionPacket.message",
    "    def lineNr = exceptionPacket.lineNumber",
    "    def mod = exceptionPacket.moduleName",
    "    if (lineNr == 0) then {",
    "        io.error.write \"{ex} in {mod}: {msg}\\n\"",
    "    } else {",
    "        io.error.write \"{ex} on line {lineNr} of {mod}: {msg}\\n\"",
    "    }",
    "    def bt = exceptionPacket.backtrace",
    "    while {bt.size > 0} do {",
    "        def frameDescription = bt.pop",
    "        io.error.write \"  requested from {frameDescription}\\n\"",
    "        if (frameDescription.contains(methodName)) then { return }",
    "    }",
    "}",
    "",
    "method checkExternalModule(node) {",
    "    checkimport(node.moduleName, node.path, node.isDialect, node.range)",
    "}",
    "",
    "method checkimport(nm, pathname, isDialect, sourceRange) is confidential {",
    "    if (builtInModules.contains(nm)) then {",
    "        imports.other.add(nm)",
    "        return",
    "    }",
    "    if (imports.isAlready(nm)) then {",
    "        return",
    "    }",
    "",
    "    if (inBrowser) then {",
    "        util.file(nm ++ \".js\") onPath \"\" otherwise { _ ->",
    "            errormessages.error \"Please \\\"Run\\\" module {nm} before importing it.\"",
    "                atRange(sourceRange)",
    "        }",
    "        return",
    "    }",
    "    util.log 50 verbose \"checking module \\\"{nm}\\\"\"",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pn = filePath.fromString(pathname).setExtension \"js\"",
    "    def moduleFileJs = util.file(pn) on (util.outDir)",
    "                                orPath (gmp) otherwise { l ->",
    "        def graceFileName = pn.copy.setExtension \"grace\"",
    "        def moduleFileGrace = util.file(graceFileName) on(util.outDir)",
    "                                orPath (gmp) otherwise { m ->",
    "            def rm = errormessages.readableStringFrom(m)",
    "            errormessages.error(\"I can't find {pn.shortName} \" ++",
    "                \"or {graceFileName.shortName}; looked in {rm}.\") atRange (sourceRange)",
    "        }",
    "        util.log 50 verbose \"about to compile module \\\"{nm}\\\"\"",
    "        compileModule (nm) inFile (moduleFileGrace.asString)",
    "                forDialect (isDialect) atRange (sourceRange)",
    "        util.file(pn) on(util.outDir) orPath (gmp) otherwise { m ->",
    "            def rm = errormessages.readableStringFrom(m)",
    "            errormessages.error(\"I just compiled {moduleFileGrace} \" ++",
    "                \"but can't find the .js file; looked in {rm}.\") atRange (sourceRange)",
    "        }",
    "    }",
    "    util.log 50 verbose \"found module \\\"{nm}\\\" in {moduleFileJs}\"",
    "",
    "    def gctDict = parseGCT(nm)",
    "    def sourceFile = filePath.fromString(gctDict.at \"path\" .first)",
    "    def sourceExists = if (sourceFile.directory.contains \"stub\") then {",
    "        false        // for binary-only modules like unicode",
    "    } else {",
    "        sourceFile.exists",
    "    }",
    "    if ( util.target == \"js\" ) then {",
    "        if (moduleFileJs.exists && {",
    "            sourceExists.not || { moduleFileJs.newer(sourceFile) }",
    "        }) then {",
    "        } else {",
    "            if (moduleFileJs.newer(sourceFile).not) then {",
    "                util.log 60 verbose \"{moduleFileJs} not newer than {sourceFile}\"",
    "            }",
    "            if (sourceFile.exists) then {",
    "                compileModule (nm) inFile (sourceFile.asString)",
    "                    forDialect (isDialect) atRange (sourceRange)",
    "            } else {",
    "                def thing = if (isDialect) then {\"dialect\"} else {\"module\"}",
    "                errormessages.error \"Can't find {thing} {nm}\"",
    "                    atRange(sourceRange)",
    "            }",
    "        }",
    "        imports.other.add(nm)",
    "    }",
    "    addTransitiveImports(moduleFileJs.directory, isDialect, nm, sourceRange)",
    "}",
    "",
    "method addTransitiveImports(directory, isDialect, moduleName, sourceRange) is confidential {",
    "    def gctData = gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(directory)",
    "    }",
    "    if (gctData.containsKey \"dialect\") then {",
    "        def dialects = gctData.at \"dialect\"",
    "        if (dialects.isEmpty.not) then {",
    "            def dName = gctData.at \"dialect\" .first",
    "            checkimport(dName, dName, true, sourceRange)",
    "        }",
    "    }",
    "    def importedModules = gctData.at \"modules\" ifAbsent { emptySequence }",
    "    def m = util.modname",
    "    if (importedModules.contains(m)) then {",
    "        errormessages.error(\"Cyclic import detected: '{m}' is imported \"",
    "            ++ \"by '{moduleName}', which is imported by '{m}' (and so on).\")",
    "            atRange(sourceRange)",
    "    }",
    "    importedModules.do { each ->",
    "        checkimport(each, each, isDialect, sourceRange)",
    "    }",
    "}",
    "",
    "method compileModule (nm) inFile (sourceFile)",
    "        forDialect (isDialect) atRange (sourceRange) is confidential {",
    "    if (util.recurse.not) then {",
    "        errormessages.error \"Please compile module {nm} before using it.\"",
    "            atRange (sourceRange)",
    "    }",
    "    if (inBrowser) then {",
    "        errormessages.error \"Please \\\"Run\\\" module {nm} before using it.\"",
    "            atRange (sourceRange)",
    "    }",
    "    var cmd",
    "    if (sys.argv.first.contains \"/\") then {",
    "        cmd := io.realpath(sys.argv.first)",
    "    } else {",
    "        cmd := io.realpath \"{sys.execPath}/{sys.argv.first}\"",
    "    }",
    "    cmd := \"\\\"{cmd}\\\"\"",
    "    cmd := cmd.replace \"compiler-js\" with \"minigrace-js\"",
    "    if (util.verbosity != util.defaultVerbosity) then {",
    "        cmd := cmd ++ \" --verbose {util.verbosity}\"",
    "    }",
    "    if (util.dirFlag) then {",
    "        cmd := cmd ++ \" --dir \" ++ util.outDir",
    "    }",
    "    if (false != util.vtag) then {",
    "        cmd := cmd ++ \" --vtag \" ++ util.vtag",
    "    }",
    "    cmd := cmd ++ \" --gracelib \" ++ util.gracelibPath",
    "    cmd := cmd ++ util.commandLineExtensions",
    "    cmd := \"{cmd} --target {util.target} --make \\\"{sourceFile}\\\"\"",
    "    util.log 50 verbose \"executing sub-compile {cmd}\"",
    "    def exitCode = io.spawn(\"bash\", [\"-c\", cmd]).status",
    "    if (exitCode != 0) then {",
    "        errormessages.error \"Failed to compile imported module {nm} ({exitCode}).\"",
    "            atRange (sourceRange)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) {",
    "    gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(util.outDir)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) sourceDir(dir) is confidential {",
    "    def gctData = emptyDictionary",
    "    def sz = moduleName.size",
    "    def gctList = extractGctFor(moduleName) sourceDir(dir)",
    "    var key := \"\"",
    "    for (gctList) do { line ->",
    "        if (line.size > 0) then {",
    "            if (line.first ≠ \" \") then {",
    "                key := line.substringFrom 1 to (line.size-1)  // dropping the \":\"",
    "                gctData.at(key) put(list [ ])",
    "            } else {",
    "                gctData.at(key).addLast(line.substringFrom 2 to (line.size))",
    "            }",
    "        }",
    "    }",
    "    gctCache.at(moduleName) put(gctData)",
    "    return gctData",
    "}",
    "",
    "method extractGctFor(moduleName) sourceDir(dir) {",
    "    // Extracts the gct information for moduleName from an external resource",
    "",
    "    if (inBrowser) then { return extractGctFromCache(moduleName) }",
    "    try {",
    "        try {",
    "            return extractGctFromJsFile(moduleName) sourceDir(dir)",
    "        } catch { ep:EnvironmentException ->",
    "            done",
    "        } // other exceptions are not caught",
    "",
    "        return extractGctFromGctFile(moduleName) sourceDir(dir)",
    "    } catch {ex:EnvironmentException ->",
    "        util.log 0 verbose(\"Failed to find gct for {moduleName}; \" ++",
    "            \"looked for a .js file containing a gct string, and a .gct file.\")",
    "        sys.exit(2)",
    "    }",
    "}",
    "",
    "method extractGctFromJsFile(moduleName) sourceDir(dir) {",
    "    // Looks for a .js file containing the compiled code for moduleName.",
    "    // The file that referenced moduleName is in directory dir.",
    "    // returns the gct information as a collection of Strings.",
    "",
    "    def sought = filePath.fromString(moduleName).setExtension \".js\"",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def filename = util.file(sought) on(dir) orPath(gmp) otherwise { l ->",
    "        def rl = errormessages.readableStringFrom(l)",
    "        EnvironmentException.raise \"Can't find file {sought} for module {moduleName}; looked in {rl}.\"",
    "    }",
    "    def jsStream = io.open(filename, \"r\")",
    "    var maxLines := 10  // look in first 10 lines of js file",
    "    while { jsStream.eof.not && (maxLines > 0) } do {",
    "        def line = jsStream.getline",
    "        if (line.startsWith \"  gctCache[\") then {",
    "            jsStream.close",
    "            return splitJsString(line)",
    "        }",
    "        maxLines := maxLines - 1",
    "    }",
    "    jsStream.close",
    "    EnvironmentException.raise \"Can't find gct string in JS file {filename}\"",
    "}",
    "",
    "method extractGctFromGctFile(moduleName) sourceDir(dir) {",
    "    // Looks for a .gct file continaing the compiled code for moduleName.",
    "    // The file that referenced moduleName is in directory dir.",
    "    // Returns the gct information as a collection of Strings.",
    "    def sought = filePath.fromString(moduleName).setExtension \".gct\"",
    "",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def filename = util.file(sought) on(dir) orPath(gmp) otherwise { l ->",
    "        def rl = errormessages.readableStringFrom(l)",
    "        EnvironmentException.raise \"Can't find file {sought} for module {moduleName}; looked in {rl}.\"",
    "    }",
    "    def gctStream = io.open(filename, \"r\")",
    "    def result = list []",
    "    while { gctStream.eof.not } do {",
    "        result.push(gctStream.getline)",
    "    }",
    "    result",
    "}",
    "",
    "method splitJsString(jsLine:String) {",
    "    // jsLine is a line of javascript like",
    "    //   gctCache[\"xmodule\"] = \"classes:\\nconfidential:\\n CheckerFailure\\n ...\"",
    "    // Evaluates the string on the rhs of the = sign, splits into lines,",
    "    // and returns a (Grace) list containing those lines as (Grace) strings.",
    "    native \"js\" code ‹",
    "        var arg = var_jsLine._value;",
    "        var keyStr = \"\\\"] = \";",
    "        var keyStart = arg.indexOf(keyStr);",
    "        var stringLit = arg.substr(keyStart + keyStr.length);",
    "        var gctString = eval(stringLit);",
    "        var jsStringArray = gctString.split(\"\\n\");",
    "        result = GraceList([]);",
    "        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {",
    "            callmethod(result, \"push(1)\", [1],",
    "                new GraceString (jsStringArray[ix]));",
    "        }›",
    "}",
    "",
    "method extractGctFromCache(module) {",
    "    // When running in the browser, returns a Grace list containing",
    "    // the contents of the cached gct information for module",
    "",
    "    native \"js\" code ‹var gctString = gctCache[var_module._value];",
    "        var jsStringArray = gctString.split(\"\\n\");",
    "        result = GraceList([]);",
    "        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {",
    "            callmethod(result, \"push(1)\", [1],",
    "                new GraceString (jsStringArray[ix]));",
    "        }›",
    "}",
    "",
    "",
    "method writeGCT(modname, dict) is confidential {",
    "    if (util.extensions.containsKey \"gctfile\") then {",
    "        def fp = io.open(\"{util.outDir}{modname}.gct\", \"w\")",
    "        list.withAll(dict.bindings).sortBy(keyCompare).do { b ->",
    "            fp.write \"{b.key}:\\n\"",
    "            list.withAll(b.value).sort.do { v ->",
    "                fp.write \" {v}\\n\"",
    "            }",
    "        }",
    "        fp.close",
    "    }",
    "    gctCache.at(modname) put(dict)",
    "}",
    "",
    "method writeGctForModule(moduleObject) {",
    "    writeGCT(moduleObject.name, generateGctForModule(moduleObject))",
    "}",
    "",
    "method gctAsString(gctDict) {",
    "    var ret := \"\"",
    "    list.withAll(gctDict.bindings).sortBy(keyCompare).do { b ->",
    "        ret := ret ++ \"{b.key}:\\n\"",
    "        list.withAll(b.value).sort.do { v ->",
    "            ret := ret ++ \" {v}\\n\"",
    "        }",
    "    }",
    "    return ret",
    "}",
    "",
    "var methodtypes := list [ ]",
    "def typeVisitor = object {",
    "    inherit ast.baseVisitor",
    "    var literalCount := 1",
    "    method visitTypeLiteral(lit) {",
    "        for (lit.methods) do { meth ->",
    "            var mtstr := \"{literalCount} \"",
    "            for (meth.signature) do { part ->",
    "                mtstr := mtstr ++ part.name",
    "                if (part.params.size > 0) then {",
    "                    mtstr := mtstr ++ \"(\"",
    "                    for (part.params.indices) do { pnr ->",
    "                        var p := part.params.at(pnr)",
    "                        if (p.dtype != false) then {",
    "                            mtstr := mtstr ++ p.toGrace(1)",
    "                        } else {",
    "                            // if parameter type not listed, give it type Unknown",
    "                            if(p.wildcard) then {",
    "                                mtstr := mtstr ++ \"_\"",
    "                            } else {",
    "                                mtstr := mtstr ++ p.value",
    "                            }",
    "                            mtstr := mtstr ++ \":\" ++ ast.unknownType.value",
    "                            if (false != p.generics) then {",
    "                                mtstr := mtstr ++ \"⟦\"",
    "                                for (1..(p.generics.size - 1)) do {ix ->",
    "                                    mtstr := mtstr ++ p.generics.at(ix).toGrace(1) ++ \", \"",
    "                                }",
    "                                mtstr := mtstr ++ p.generics.last.toGrace(1) ++ \"⟧\"",
    "                            }",
    "                        }",
    "                        if (pnr < part.params.size) then {",
    "                            mtstr := mtstr ++ \", \"",
    "                        }",
    "                    }",
    "                    mtstr := mtstr ++ \")\"",
    "                }",
    "            }",
    "            if (meth.rtype != false) then {",
    "                mtstr := mtstr ++ \" → \" ++ meth.rtype.toGrace(1)",
    "            }",
    "            methodtypes.push(mtstr)",
    "        }",
    "        return false",
    "    }",
    "    method visitOp(op) {",
    "        if ((op.value==\"&\") || (op.value==\"|\")) then {",
    "            def leftkind = op.left.kind",
    "            def rightkind = op.right.kind",
    "            if ((leftkind==\"identifier\") || (leftkind==\"member\")) then {",
    "                var typeIdent := op.left.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { leftkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.left)",
    "            } elseif { leftkind==\"op\" } then {",
    "                visitOp(op.left)",
    "            }",
    "            if ((rightkind==\"identifier\") || (rightkind==\"member\")) then {",
    "                var typeIdent := op.right.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { rightkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.right)",
    "            } elseif { rightkind==\"op\" } then {",
    "                visitOp(op.right)",
    "            }",
    "        }",
    "        return false",
    "    }",
    "}",
    "method generateGctForModule(moduleObject) is confidential {",
    "    def gct = buildGctFor(moduleObject)",
    "    addFreshMethodsOf (moduleObject) to (gct)",
    "    return gct",
    "}",
    "",
    "method generateMethodHeader(methNode) -> String {",
    "    var depth: Number := 0",
    "    var s: String := \"\"",
    "    var firstPart := true",
    "    for (methNode.signature) do { part ->",
    "        s := s ++ part.name",
    "        if (firstPart && {false != methNode.typeParams}) then {",
    "            s := s ++ methNode.typeParams.toGrace(depth + 1)",
    "        }",
    "        firstPart := false",
    "        if (part.params.size > 0) then {",
    "            s := s ++ \"(\"",
    "            for (part.params.indices) do { pnr ->",
    "                var p := part.params.at(pnr)",
    "                s := s ++ p.toGrace(depth + 1)",
    "                if (pnr < part.params.size) then {",
    "                    s := s ++ \", \"",
    "                }",
    "            }",
    "            s := s ++ \")\"",
    "        }",
    "    }",
    "    if (false != methNode.dtype) then {",
    "        s := s ++ \" → {methNode.dtype.toGrace(0)}\"",
    "    }",
    "    s",
    "}",
    "",
    "method buildGctFor(module) {",
    "    def gct = emptyDictionary",
    "    def classes = emptyList",
    "    def confidentials = emptyList",
    "    def meths = set.empty    // this must be a set, because the same name may be added",
    "        // from a module.parent's providedNames, and a body node that is a method.",
    "    def types = emptyList",
    "    def publicMethodTypes = emptyList",
    "    def theDialect = module.theDialect.moduleName",
    "    module.parentsDo { p ->",
    "        meths.addAll(p.providedNames)       // add inherited and used methods",
    "    }",
    "    for (module.value) do { v->",
    "        if (v.kind == \"vardec\") then {",
    "            def gctType = if (false != v.dtype) then {v.dtype.toGrace(0)} else {\"Unknown\"}",
    "            def varRead: String = \"{v.name.value} → {gctType}\"",
    "            if (v.isReadable) then {",
    "                meths.add(v.name.value)",
    "                publicMethodTypes.push(varRead)",
    "            } else {",
    "                confidentials.push(v.name.value)",
    "            }",
    "            def varWrite: String = \"{v.name.value}:=({v.name.value}': {gctType}) → Done\"   ",
    "            if (v.isWritable) then {",
    "                meths.add(v.name.value ++ \":=(1)\")",
    "                publicMethodTypes.push(varWrite)",
    "            } else {",
    "                confidentials.push(varWrite)",
    "            }",
    "        } elseif {v.kind == \"method\"} then {",
    "            if (v.isPublic) then {",
    "                meths.add(v.nameString)",
    "                publicMethodTypes.push(generateMethodHeader(v))",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"typedec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.add(v.nameString)",
    "                types.push(v.name.value)",
    "                methodtypes := list [ ]",
    "                v.accept(typeVisitor)",
    "                var typename := v.name.toGrace(0)",
    "                if (v.typeParams != false) then {",
    "                    typename := typename ++ v.typeParams",
    "                }",
    "                gct.at \"methodtypes-of:{typename}\" put(methodtypes)",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"defdec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.add(v.nameString)",
    "                def gctType = if (false != v.dtype) then {v.dtype.toGrace(0)} else {\"Unknown\"}",
    "                publicMethodTypes.push(\"{v.name.value} → {gctType}\")",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "            if (ast.findAnnotation(v, \"parent\")) then {",
    "                v.scope.elements.keysDo { m ->",
    "                    meths.add(m)",
    "                }",
    "            }",
    "            if (v.returnsObject) then {",
    "                def ob = v.returnedObjectScope.node",
    "                def obConstructors = list [ ]",
    "                if (ob.isObject) then {",
    "                  for (ob.value) do {nd->",
    "                    if (nd.isClass) then {",
    "                        def factMethNm = nd.nameString",
    "                        obConstructors.push(factMethNm)",
    "                        def exportedMethods = emptyList",
    "                        ob.scope.getScope(factMethNm).keysAndKindsDo { key, knd ->",
    "                            if (knd.forGct) then { exportedMethods.add(key) }",
    "                        }",
    "                        gct.at \"methods-of:{v.name.value}.{factMethNm}\"",
    "                            put(exportedMethods.sort)",
    "                    }",
    "                  }",
    "                }",
    "                if (obConstructors.size > 0) then {",
    "                    gct.at \"constructors-of:{v.name.value}\"",
    "                        put(obConstructors)",
    "                    classes.push(v.name.value)",
    "                }",
    "            }",
    "        }",
    "    }",
    "    gct.at \"classes\" put(classes.sort)",
    "    gct.at \"confidential\" put(confidentials.sort)",
    "    gct.at \"modules\" put(list.withAll(module.imports).sorted)",
    "    def p = util.infile.pathname",
    "    gct.at \"path\" put [ if (p.isEmpty) then {",
    "        \"\"",
    "    } elseif { p.startsWith \"/\" } then {",
    "        p",
    "    } else {",
    "        io.realpath(p)",
    "    } ]",
    "    gct.at \"public\" put(list.withAll(meths).sort)",
    "    gct.at \"publicMethodTypes\" put(publicMethodTypes.sort)",
    "    gct.at \"types\" put(types.sort)",
    "    gct.at \"dialect\" put (",
    "        if (theDialect == \"none\") then { [] } else { [theDialect] }",
    "    )",
    "    gct",
    "}",
    "",
    "method addFreshMethodsOf (moduleObject) to (gct) is confidential {",
    "    // adds information about the methods made available via fresh methods.",
    "    // This is done in a separate pass after public information is in the gct,",
    "    // because of the special treatment of prelude.clone",
    "    // TODO: doesn't this just duplicate what's in 'classes' ? No: 'classes'",
    "    // lists only classes declared inside a def'd object constructor, i.e.,",
    "    // something simulating he old \"dotted\" class",
    "    def freshmeths = list [ ]",
    "    for (moduleObject.value) do { node->",
    "        if (node.isClass) then {",
    "            addFreshMethod (node) to (freshmeths) for (gct)",
    "        }",
    "    }",
    "    gct.at \"fresh-methods\" put(freshmeths)",
    "}",
    "",
    "method addFreshMethod (node) to (freshlist) for (gct) is confidential {",
    "    def methName = node.nameString",
    "    freshlist.push(methName)",
    "    def freshMethExpression = node.body.last",
    "    if (freshMethExpression.isObject) then {",
    "        def exportedMethods = emptyList",
    "        freshMethExpression.scope.keysAndKindsDo { key, knd ->",
    "            if (knd.forGct) then { exportedMethods.add(key) }",
    "        }",
    "        gct.at \"fresh:{methName}\" put (exportedMethods.sort)",
    "    } elseif {freshMethExpression.isCall} then {",
    "        // this deals with the two special cases, defined in",
    "        // ast.callNode.returnsObject.  The freshMethExpression must",
    "        // be a request of self.copy or prelude.clone(_)",
    "        def requestedName = freshMethExpression.nameString",
    "        if (requestedName == \"copy\") then {",
    "            gct.at \"fresh:{methName}\" put(gct.at \"public\")",
    "        } elseif {requestedName == \"clone(1)\"} then {",
    "            def cloneArg = freshMethExpression.parts.first.args.first",
    "            if (cloneArg.isSelf) then {",
    "                gct.at \"fresh:{methName}\" put(gct.at \"public\")",
    "            } else {",
    "                gct.at \"fresh:{methName}\"",
    "                    put(gct.at \"methods-of:{cloneArg.toGrace 0}\" isAbsent {",
    "                        ProgrammingError.raise (",
    "                            \"unrecognized fresh method tail-call:\\n\" ++",
    "                              freshMethExpression.pretty(0) ++ \"\\n\" ++",
    "                                \"Can't find methods-of:{cloneArg.toGrace 0} in gct.\" )",
    "                } )",
    "            }",
    "        } else {",
    "            // if it's not a call or an object constructor, why is it labelled as fresh?",
    "            ProgrammingError.raise",
    "                \"unrecognized fresh method tail-call: {freshMethExpression.pretty(0)}\"",
    "        }",
    "    } else {",
    "        ProgrammingError.raise",
    "            \"fresh method result of an unexpected kind: {freshMethExpression.pretty(0)}\"",
    "    }",
    "}" ];
}
function gracecode_xmodule() {
  importedModules["xmodule"] = this;
  var module$xmodule = this;
  this.definitionModule = "xmodule";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_xmodule_1");
  this.outer_xmodule_1 = var_prelude;
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
  func0.definitionModule = "xmodule";
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
  func1.definitionModule = "xmodule";
  func1.debug = "import";
  func1.confidential = true;
  setLineNumber(3);    // compilenode import
  // Import of "util" as util
  if (typeof gracecode_util == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module util"));
  var var_util = do_import("util", gracecode_util);
  var func2 = function(argcv) {     // accessor method util
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("util", 0, numArgs - 0);
    if (var_util === undefined) raiseUninitializedVariable("util");
    return var_util;
  };    // end of method util
  this.methods["util"] = func2;
  func2.methodName = "util";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "xmodule";
  func2.debug = "import";
  func2.confidential = true;
  setLineNumber(4);    // compilenode import
  // Import of "ast" as ast
  if (typeof gracecode_ast == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module ast"));
  var var_ast = do_import("ast", gracecode_ast);
  var func3 = function(argcv) {     // accessor method ast
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("ast", 0, numArgs - 0);
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    return var_ast;
  };    // end of method ast
  this.methods["ast"] = func3;
  func3.methodName = "ast";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 4;
  func3.definitionModule = "xmodule";
  func3.debug = "import";
  func3.confidential = true;
  setLineNumber(5);    // compilenode import
  // Import of "mirrors" as mirrors
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func4 = function(argcv) {     // accessor method mirrors
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("mirrors", 0, numArgs - 0);
    if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
    return var_mirrors;
  };    // end of method mirrors
  this.methods["mirrors"] = func4;
  func4.methodName = "mirrors";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 5;
  func4.definitionModule = "xmodule";
  func4.debug = "import";
  func4.confidential = true;
  setLineNumber(6);    // compilenode import
  // Import of "errormessages" as errormessages
  if (typeof gracecode_errormessages == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module errormessages"));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func5 = function(argcv) {     // accessor method errormessages
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("errormessages", 0, numArgs - 0);
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    return var_errormessages;
  };    // end of method errormessages
  this.methods["errormessages"] = func5;
  func5.methodName = "errormessages";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 6;
  func5.definitionModule = "xmodule";
  func5.debug = "import";
  func5.confidential = true;
  setLineNumber(7);    // compilenode import
  // Import of "unixFilePath" as filePath
  if (typeof gracecode_unixFilePath == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module unixFilePath"));
  var var_filePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func6 = function(argcv) {     // accessor method filePath
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("filePath", 0, numArgs - 0);
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    return var_filePath;
  };    // end of method filePath
  this.methods["filePath"] = func6;
  func6.methodName = "filePath";
  func6.paramCounts = [0];
  func6.paramNames = [];
  func6.definitionLine = 7;
  func6.definitionModule = "xmodule";
  func6.debug = "import";
  func6.confidential = true;
  setLineNumber(35);    // compilenode typedec
  // Type decl LinePos
  var func8 = function(argcv) {    // method LinePos, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(35);    // compilenode typeliteral
    //   Type literal 
    var typeLit9 = new GraceType("LinePos");
    typeLit9.typeMethods.push("line");
    typeLit9.typeMethods.push("linePos");
    return typeLit9;
  };    // end of method LinePos
  function memofunc8(argcv) {
      if (! this.data["memo$LinePos"])    // parameterless memo function
          this.data["memo$LinePos"] = func8.call(this, argcv);
      return this.data["memo$LinePos"];
  };
  this.methods["LinePos"] = memofunc8;
  memofunc8.methodName = "LinePos";
  memofunc8.paramCounts = [0];
  memofunc8.paramNames = [];
  memofunc8.definitionLine = 1;
  memofunc8.definitionModule = "xmodule";
  func8.methodName = "LinePos";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 1;
  func8.definitionModule = "xmodule";
  setLineNumber(40);    // compilenode typedec
  // Type decl RangeSuggestions
  var func11 = function(argcv) {    // method RangeSuggestions, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(40);    // compilenode typeliteral
    //   Type literal 
    var typeLit12 = new GraceType("RangeSuggestions");
    typeLit12.typeMethods.push("line");
    typeLit12.typeMethods.push("posStart");
    typeLit12.typeMethods.push("posEnd");
    typeLit12.typeMethods.push("suggestions");
    return typeLit12;
  };    // end of method RangeSuggestions
  function memofunc11(argcv) {
      if (! this.data["memo$RangeSuggestions"])    // parameterless memo function
          this.data["memo$RangeSuggestions"] = func11.call(this, argcv);
      return this.data["memo$RangeSuggestions"];
  };
  this.methods["RangeSuggestions"] = memofunc11;
  memofunc11.methodName = "RangeSuggestions";
  memofunc11.paramCounts = [0];
  memofunc11.paramNames = [];
  memofunc11.definitionLine = 1;
  memofunc11.definitionModule = "xmodule";
  func11.methodName = "RangeSuggestions";
  func11.paramCounts = [0];
  func11.paramNames = [];
  func11.definitionLine = 1;
  func11.definitionModule = "xmodule";
  var func13 = function(argcv, var_moduleObject) {    // method checkDialect(_), line 50
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("checkDialect(_)", 0, numArgs - 1);
    }
    setLineNumber(51);    // compilenode member
    // call case 6: other requests
    var call14 = request(var_moduleObject, "theDialect", [0]);
    var var_dialectNode = call14;
    setLineNumber(52);    // compilenode member
    // call case 6: other requests
    var call15 = request(var_dialectNode, "moduleName", [0]);
    var var_dmn = call15;
    setLineNumber(53);    // compilenode call
    // call case 6: other requests
    if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
    var call16 = request(var_currentDialect, "name:=(1)", [1], var_dmn);
    var if17 = GraceDone;
    setLineNumber(54);    // compilenode string
    var string18 = new GraceString("none");
    var opresult19 = request(var_dmn, "==(1)", [1], string18);
    if (Grace_isTrue(opresult19)) {
      return var_done;
    }
    setLineNumber(55);    // compilenode string
    var string21 = new GraceString("checking dialect ");
    var opresult22 = request(string21, "++(1)", [1], var_dmn);
    var string23 = new GraceString(" used by module ");
    var opresult24 = request(opresult22, "++(1)", [1], string23);
    // call case 6: other requests
    var call25 = request(var_moduleObject, "name", [0]);
    var opresult26 = request(opresult24, "++(1)", [1], call25);
    var string27 = new GraceString("");
    var opresult28 = request(opresult26, "++(1)", [1], string27);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call20 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult28);
    setLineNumber(56);    // compilenode call
    // call case 2: outer request
    var call29 = selfRequest(importedModules["xmodule"], "checkExternalModule(1)", [1], var_dialectNode);
    setLineNumber(57);    // compilenode member
    // call case 6: other requests
    var call31 = request(var_dialectNode, "value", [0]);
    // call case 2: outer request
    var call30 = selfRequest(importedModules["xmodule"], "parseGCT(1)", [1], call31);
    var var_dialectGct = call30;
    var if32 = GraceDone;
    setLineNumber(58);    // compilenode string
    var string34 = new GraceString("thisDialect");
    // call case 6: other requests
    var string36 = new GraceString("public");
    var block37 = new GraceBlock(this, 58, 0);
    block37.guard = jsTrue;
    block37.real = function block37() {
      setLineNumber(58);    // compilenode member
      // call case 2: outer request
      var call38 = selfRequest(var_prelude, "emptySequence", [0]);
      return call38;
    };
    let applyMeth37 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth37.methodName = "apply";
    applyMeth37.paramCounts = [0];
    applyMeth37.paramNames = [];
    applyMeth37.definitionLine = 58;
    applyMeth37.definitionModule = "xmodule";
    block37.methods["apply"] = applyMeth37;
    // call case 6: other requests
    var call35 = request(var_dialectGct, "at(1)ifAbsent(1)", [1, 1], string36, block37);
    var call33 = request(call35, "contains(1)", [1], string34);
    if (Grace_isTrue(call33)) {
      setLineNumber(59);    // compilenode string
      var string40 = new GraceString("loading dialect \"");
      if (var_dmn === undefined) raiseUninitializedVariable("dmn");
      var opresult41 = request(string40, "++(1)", [1], var_dmn);
      var string42 = new GraceString("\" for checkers.");
      var opresult43 = request(opresult41, "++(1)", [1], string42);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call39 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult43);
      setLineNumber(60);    // compilenode block
      var block45 = new GraceBlock(this, 60, 0);
      block45.guard = jsTrue;
      block45.real = function block45() {
        setLineNumber(61);    // compilenode member
        // call case 6: other requests
        if (var_dialectNode === undefined) raiseUninitializedVariable("dialectNode");
        var call47 = request(var_dialectNode, "path", [0]);
        // call case 6: other requests
        if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
        var call46 = request(var_mirrors, "loadDynamicModule(1)", [1], call47);
        var var_dobj = call46;
        setLineNumber(62);    // compilenode call
        if (var_dobj === undefined) raiseUninitializedVariable("dobj");
        // call case 6: other requests
        if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
        var call48 = request(var_currentDialect, "moduleObject:=(1)", [1], var_dobj);
        var if49 = GraceDone;
        setLineNumber(63);    // compilenode string
        var string51 = new GraceString("thisDialect");
        // call case 6: other requests
        // call case 6: other requests
        if (var_dobj === undefined) raiseUninitializedVariable("dobj");
        // call case 6: other requests
        if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
        var call53 = request(var_mirrors, "reflect(1)", [1], var_dobj);
        var call52 = request(call53, "methodNames", [0]);
        var call50 = request(call52, "contains(1)", [1], string51);
        if (Grace_isTrue(call50)) {
          setLineNumber(64);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_dobj === undefined) raiseUninitializedVariable("dobj");
          var call56 = request(var_dobj, "thisDialect", [0]);
          // call case 6: other requests
          if (var_mirrors === undefined) raiseUninitializedVariable("mirrors");
          var call55 = request(var_mirrors, "reflect(1)", [1], call56);
          var call54 = request(call55, "methods", [0]);
          var var_mths = call54;
          setLineNumber(65);    // compilenode call
          if (var_mths === undefined) raiseUninitializedVariable("mths");
          var block58 = new GraceBlock(this, 65, 1);
          block58.guard = jsTrue;
          block58.real = function block58(var_m) {
            var if59 = GraceDone;
            setLineNumber(66);    // compilenode member
            // call case 6: other requests
            var call60 = request(var_m, "name", [0]);
            var string61 = new GraceString("parseChecker(_)");
            var opresult62 = request(call60, "==(1)", [1], string61);
            if (Grace_isTrue(opresult62)) {
              setLineNumber(67);    // compilenode call
              // call case 6: other requests
              if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
              var call63 = request(var_currentDialect, "hasParseChecker:=(1)", [1], GraceTrue);
              if59 = call63;
            }
            var if64 = GraceDone;
            setLineNumber(69);    // compilenode member
            // call case 6: other requests
            var call65 = request(var_m, "name", [0]);
            var string66 = new GraceString("astChecker(_)");
            var opresult67 = request(call65, "==(1)", [1], string66);
            if (Grace_isTrue(opresult67)) {
              setLineNumber(70);    // compilenode call
              // call case 6: other requests
              if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
              var call68 = request(var_currentDialect, "hasAstChecker:=(1)", [1], GraceTrue);
              if64 = call68;
            }
            var if69 = GraceDone;
            setLineNumber(72);    // compilenode member
            // call case 6: other requests
            var call70 = request(var_m, "name", [0]);
            var string71 = new GraceString("atEnd(_)");
            var opresult72 = request(call70, "==(1)", [1], string71);
            if (Grace_isTrue(opresult72)) {
              setLineNumber(73);    // compilenode call
              // call case 6: other requests
              if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
              var call73 = request(var_currentDialect, "hasAtEnd:=(1)", [1], GraceTrue);
              if69 = call73;
            }
            var if74 = GraceDone;
            setLineNumber(75);    // compilenode member
            // call case 6: other requests
            var call75 = request(var_m, "name", [0]);
            var string76 = new GraceString("atStart(_)");
            var opresult77 = request(call75, "==(1)", [1], string76);
            if (Grace_isTrue(opresult77)) {
              setLineNumber(76);    // compilenode call
              // call case 6: other requests
              if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
              var call78 = request(var_currentDialect, "hasAtStart:=(1)", [1], GraceTrue);
              if74 = call78;
            }
            return if74;
          };
          let applyMeth58 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth58.methodName = "apply(1)";
          applyMeth58.paramCounts = [1];
          applyMeth58.paramNames = ["m"];
          applyMeth58.definitionLine = 65;
          applyMeth58.definitionModule = "xmodule";
          block58.methods["apply(1)"] = applyMeth58;
          let matchesMeth58 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth58.methodName = "matches(1)";
          matchesMeth58.paramCounts = [1];
          matchesMeth58.paramNames = ["m"];
          matchesMeth58.definitionLine = 65;
          matchesMeth58.definitionModule = "xmodule";
          block58.methods["matches(1)"] = matchesMeth58;
          // call case 2: outer request
          var call57 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_mths, block58);
          if49 = call57;
        }
        return if49;
      };
      let applyMeth45 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth45.methodName = "apply";
      applyMeth45.paramCounts = [0];
      applyMeth45.paramNames = [];
      applyMeth45.definitionLine = 60;
      applyMeth45.definitionModule = "xmodule";
      block45.methods["apply"] = applyMeth45;
      var cases44 = [];
      setLineNumber(80);    // compilenode block
      var block79 = new GraceBlock(this, 80, 1);
      // call case 2: outer request
      var call80 = selfRequest(var_prelude, "Exception", [0]);
      block79.paramTypes = [call80];
      var matches81 = function(var_e) {
        // call case 2: outer request
        var call82 = selfRequest(var_prelude, "Exception", [0]);
        if (!Grace_isTrue(request(call82, "matches(1)", [1], var_e)))
            return false;
        return true;
      };
      block79.guard = matches81;
      block79.real = function block79(var_e) {
        setLineNumber(81);    // compilenode member
        // call case 6: other requests
        if (var_dialectNode === undefined) raiseUninitializedVariable("dialectNode");
        var call84 = request(var_dialectNode, "line", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call83 = request(var_util, "setPosition(2)", [2], call84, new GraceNum(1));
        setLineNumber(82);    // compilenode member
        // call case 6: other requests
        var call85 = request(var_e, "printBacktrace", [0]);
        setLineNumber(83);    // compilenode string
        var string87 = new GraceString("Dialect error: dialect \"");
        if (var_dmn === undefined) raiseUninitializedVariable("dmn");
        var opresult88 = request(string87, "++(1)", [1], var_dmn);
        var string89 = new GraceString("\" failed to load.\n");
        var opresult90 = request(opresult88, "++(1)", [1], string89);
        var opresult91 = request(opresult90, "++(1)", [1], var_e);
        var string92 = new GraceString(".");
        var opresult93 = request(opresult91, "++(1)", [1], string92);
        setLineNumber(84);    // compilenode member
        // call case 6: other requests
        if (var_dialectNode === undefined) raiseUninitializedVariable("dialectNode");
        var call94 = request(var_dialectNode, "line", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call86 = request(var_errormessages, "error(1)atLine(1)", [1, 1], opresult93, call94);
        return call86;
      };
      let applyMeth79 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth79.methodName = "apply(1)";
      applyMeth79.paramCounts = [1];
      applyMeth79.paramNames = ["e"];
      applyMeth79.definitionLine = 80;
      applyMeth79.definitionModule = "xmodule";
      block79.methods["apply(1)"] = applyMeth79;
      let matchesMeth79 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth79.methodName = "matches(1)";
      matchesMeth79.paramCounts = [1];
      matchesMeth79.paramNames = ["e"];
      matchesMeth79.definitionLine = 80;
      matchesMeth79.definitionModule = "xmodule";
      block79.methods["matches(1)"] = matchesMeth79;
      cases44.push(block79);
      setLineNumber(60);    // compiletrycatch
      var catchres44 = tryCatch(block45,cases44,false);
      if32 = catchres44;
    } else {
      setLineNumber(87);    // compilenode string
      var string96 = new GraceString("no need to load dialect \"");
      if (var_dmn === undefined) raiseUninitializedVariable("dmn");
      var opresult97 = request(string96, "++(1)", [1], var_dmn);
      var string98 = new GraceString("\": it does not define `thisDialect`");
      var opresult99 = request(opresult97, "++(1)", [1], string98);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call95 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult99);
      if32 = call95;
    }
    return if32;
  };    // end of method checkDialect(_)
  this.methods["checkDialect(1)"] = func13;
  func13.methodName = "checkDialect(1)";
  func13.paramCounts = [1];
  func13.paramNames = ["moduleObject"];
  func13.definitionLine = 50;
  func13.definitionModule = "xmodule";
  var func100 = function(argcv, var_moduleNode) {    // method doParseCheck(_), line 91
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("doParseCheck(_)", 0, numArgs - 1);
    }
    var if101 = GraceDone;
    setLineNumber(92);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
    var call103 = request(var_currentDialect, "hasParseChecker", [0]);
    var call102 = request(call103, "not", [0]);
    if (Grace_isTrue(call102)) {
      return var_done;
    }
    setLineNumber(93);    // compilenode block
    var block105 = new GraceBlock(this, 93, 0);
    block105.guard = jsTrue;
    block105.real = function block105() {
      setLineNumber(94);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call108 = request(var_currentDialect, "moduleObject", [0]);
      var call107 = request(call108, "thisDialect", [0]);
      var call106 = request(call107, "parseChecker(1)", [1], var_moduleNode);
      return call106;
    };
    let applyMeth105 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth105.methodName = "apply";
    applyMeth105.paramCounts = [0];
    applyMeth105.paramNames = [];
    applyMeth105.definitionLine = 93;
    applyMeth105.definitionModule = "xmodule";
    block105.methods["apply"] = applyMeth105;
    var cases104 = [];
    setLineNumber(95);    // compilenode block
    var block109 = new GraceBlock(this, 95, 1);
    if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
    if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
    var opresult110 = request(var_CheckerFailure, "|(1)", [1], var_DialectError);
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call111 = request(var_errormessages, "SyntaxError", [0]);
    var opresult112 = request(opresult110, "|(1)", [1], call111);
    block109.paramTypes = [opresult112];
    var matches113 = function(var_e) {
      if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
      if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
      var opresult114 = request(var_CheckerFailure, "|(1)", [1], var_DialectError);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call115 = request(var_errormessages, "SyntaxError", [0]);
      var opresult116 = request(opresult114, "|(1)", [1], call115);
      if (!Grace_isTrue(request(opresult116, "matches(1)", [1], var_e)))
          return false;
      return true;
    };
    block109.guard = matches113;
    block109.real = function block109(var_e) {
      setLineNumber(96);    // compilenode call
      // call case 2: outer request
      var call117 = selfRequest(importedModules["xmodule"], "reportDialectError(1)", [1], var_e);
      return call117;
    };
    let applyMeth109 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth109.methodName = "apply(1)";
    applyMeth109.paramCounts = [1];
    applyMeth109.paramNames = ["e"];
    applyMeth109.definitionLine = 95;
    applyMeth109.definitionModule = "xmodule";
    block109.methods["apply(1)"] = applyMeth109;
    let matchesMeth109 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth109.methodName = "matches(1)";
    matchesMeth109.paramCounts = [1];
    matchesMeth109.paramNames = ["e"];
    matchesMeth109.definitionLine = 95;
    matchesMeth109.definitionModule = "xmodule";
    block109.methods["matches(1)"] = matchesMeth109;
    cases104.push(block109);
    setLineNumber(97);    // compilenode block
    var block118 = new GraceBlock(this, 97, 1);
    // call case 2: outer request
    var call119 = selfRequest(var_prelude, "Exception", [0]);
    block118.paramTypes = [call119];
    var matches120 = function(var_e) {
      // call case 2: outer request
      var call121 = selfRequest(var_prelude, "Exception", [0]);
      if (!Grace_isTrue(request(call121, "matches(1)", [1], var_e)))
          return false;
      return true;
    };
    block118.guard = matches120;
    block118.real = function block118(var_e) {
      setLineNumber(98);    // compilenode string
      var string123 = new GraceString("thisDialect.parseChecker");
      // call case 2: outer request
      var call122 = selfRequest(importedModules["xmodule"], "printBacktrace(1)asFarAs(1)", [1, 1], var_e, string123);
      setLineNumber(99);    // compilenode string
      var string125 = new GraceString("Unexpected exception raised by parse checker for ");
      setLineNumber(100);    // compilenode string
      var string126 = new GraceString("dialect '");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call127 = request(var_currentDialect, "name", [0]);
      var opresult128 = request(string126, "++(1)", [1], call127);
      var string129 = new GraceString("'.\n");
      var opresult130 = request(opresult128, "++(1)", [1], string129);
      // call case 6: other requests
      var call131 = request(var_e, "exception", [0]);
      var opresult132 = request(opresult130, "++(1)", [1], call131);
      var string133 = new GraceString(": ");
      var opresult134 = request(opresult132, "++(1)", [1], string133);
      // call case 6: other requests
      var call135 = request(var_e, "message", [0]);
      var opresult136 = request(opresult134, "++(1)", [1], call135);
      var string137 = new GraceString("");
      var opresult138 = request(opresult136, "++(1)", [1], string137);
      var opresult139 = request(string125, "++(1)", [1], opresult138);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call124 = request(var_errormessages, "error(1)", [1], opresult139);
      return call124;
    };
    let applyMeth118 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth118.methodName = "apply(1)";
    applyMeth118.paramCounts = [1];
    applyMeth118.paramNames = ["e"];
    applyMeth118.definitionLine = 97;
    applyMeth118.definitionModule = "xmodule";
    block118.methods["apply(1)"] = applyMeth118;
    let matchesMeth118 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth118.methodName = "matches(1)";
    matchesMeth118.paramCounts = [1];
    matchesMeth118.paramNames = ["e"];
    matchesMeth118.definitionLine = 97;
    matchesMeth118.definitionModule = "xmodule";
    block118.methods["matches(1)"] = matchesMeth118;
    cases104.push(block118);
    setLineNumber(93);    // compiletrycatch
    var catchres104 = tryCatch(block105,cases104,false);
    return catchres104;
  };    // end of method doParseCheck(_)
  this.methods["doParseCheck(1)"] = func100;
  func100.methodName = "doParseCheck(1)";
  func100.paramCounts = [1];
  func100.paramNames = ["moduleNode"];
  func100.definitionLine = 91;
  func100.definitionModule = "xmodule";
  var func140 = function(argcv, var_moduleNode) {    // method doAstCheck(_), line 104
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("doAstCheck(_)", 0, numArgs - 1);
    }
    var if141 = GraceDone;
    setLineNumber(105);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
    var call143 = request(var_currentDialect, "hasAstChecker", [0]);
    var call142 = request(call143, "not", [0]);
    if (Grace_isTrue(call142)) {
      return var_done;
    }
    setLineNumber(106);    // compilenode block
    var block145 = new GraceBlock(this, 106, 0);
    block145.guard = jsTrue;
    block145.real = function block145() {
      setLineNumber(107);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call148 = request(var_currentDialect, "moduleObject", [0]);
      var call147 = request(call148, "thisDialect", [0]);
      var call146 = request(call147, "astChecker(1)", [1], var_moduleNode);
      return call146;
    };
    let applyMeth145 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth145.methodName = "apply";
    applyMeth145.paramCounts = [0];
    applyMeth145.paramNames = [];
    applyMeth145.definitionLine = 106;
    applyMeth145.definitionModule = "xmodule";
    block145.methods["apply"] = applyMeth145;
    var cases144 = [];
    setLineNumber(108);    // compilenode block
    var block149 = new GraceBlock(this, 108, 1);
    if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
    if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
    var opresult150 = request(var_CheckerFailure, "|(1)", [1], var_DialectError);
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call151 = request(var_errormessages, "SyntaxError", [0]);
    var opresult152 = request(opresult150, "|(1)", [1], call151);
    block149.paramTypes = [opresult152];
    var matches153 = function(var_e) {
      if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
      if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
      var opresult154 = request(var_CheckerFailure, "|(1)", [1], var_DialectError);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call155 = request(var_errormessages, "SyntaxError", [0]);
      var opresult156 = request(opresult154, "|(1)", [1], call155);
      if (!Grace_isTrue(request(opresult156, "matches(1)", [1], var_e)))
          return false;
      return true;
    };
    block149.guard = matches153;
    block149.real = function block149(var_e) {
      setLineNumber(109);    // compilenode call
      // call case 2: outer request
      var call157 = selfRequest(importedModules["xmodule"], "reportDialectError(1)", [1], var_e);
      return call157;
    };
    let applyMeth149 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth149.methodName = "apply(1)";
    applyMeth149.paramCounts = [1];
    applyMeth149.paramNames = ["e"];
    applyMeth149.definitionLine = 108;
    applyMeth149.definitionModule = "xmodule";
    block149.methods["apply(1)"] = applyMeth149;
    let matchesMeth149 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth149.methodName = "matches(1)";
    matchesMeth149.paramCounts = [1];
    matchesMeth149.paramNames = ["e"];
    matchesMeth149.definitionLine = 108;
    matchesMeth149.definitionModule = "xmodule";
    block149.methods["matches(1)"] = matchesMeth149;
    cases144.push(block149);
    setLineNumber(110);    // compilenode block
    var block158 = new GraceBlock(this, 110, 1);
    // call case 2: outer request
    var call159 = selfRequest(var_prelude, "Exception", [0]);
    block158.paramTypes = [call159];
    var matches160 = function(var_e) {
      // call case 2: outer request
      var call161 = selfRequest(var_prelude, "Exception", [0]);
      if (!Grace_isTrue(request(call161, "matches(1)", [1], var_e)))
          return false;
      return true;
    };
    block158.guard = matches160;
    block158.real = function block158(var_e) {
      setLineNumber(111);    // compilenode string
      var string163 = new GraceString("thisDialect.astChecker");
      // call case 2: outer request
      var call162 = selfRequest(importedModules["xmodule"], "printBacktrace(1)asFarAs(1)", [1, 1], var_e, string163);
      setLineNumber(112);    // compilenode string
      var string165 = new GraceString("Unexpected exception raised by AST checker for ");
      setLineNumber(113);    // compilenode string
      var string166 = new GraceString("dialect '");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call167 = request(var_currentDialect, "name", [0]);
      var opresult168 = request(string166, "++(1)", [1], call167);
      var string169 = new GraceString("'.\n");
      var opresult170 = request(opresult168, "++(1)", [1], string169);
      // call case 6: other requests
      var call171 = request(var_e, "exception", [0]);
      var opresult172 = request(opresult170, "++(1)", [1], call171);
      var string173 = new GraceString(": ");
      var opresult174 = request(opresult172, "++(1)", [1], string173);
      // call case 6: other requests
      var call175 = request(var_e, "message", [0]);
      var opresult176 = request(opresult174, "++(1)", [1], call175);
      var string177 = new GraceString("");
      var opresult178 = request(opresult176, "++(1)", [1], string177);
      var opresult179 = request(string165, "++(1)", [1], opresult178);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call164 = request(var_errormessages, "error(1)", [1], opresult179);
      return call164;
    };
    let applyMeth158 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth158.methodName = "apply(1)";
    applyMeth158.paramCounts = [1];
    applyMeth158.paramNames = ["e"];
    applyMeth158.definitionLine = 110;
    applyMeth158.definitionModule = "xmodule";
    block158.methods["apply(1)"] = applyMeth158;
    let matchesMeth158 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth158.methodName = "matches(1)";
    matchesMeth158.paramCounts = [1];
    matchesMeth158.paramNames = ["e"];
    matchesMeth158.definitionLine = 110;
    matchesMeth158.definitionModule = "xmodule";
    block158.methods["matches(1)"] = matchesMeth158;
    cases144.push(block158);
    setLineNumber(106);    // compiletrycatch
    var catchres144 = tryCatch(block145,cases144,false);
    return catchres144;
  };    // end of method doAstCheck(_)
  this.methods["doAstCheck(1)"] = func140;
  func140.methodName = "doAstCheck(1)";
  func140.paramCounts = [1];
  func140.paramNames = ["moduleNode"];
  func140.definitionLine = 104;
  func140.definitionModule = "xmodule";
  var func180 = function(argcv, var_ex) {    // method reportDialectError(_), line 117
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("reportDialectError(_)", 0, numArgs - 1);
    }
    setLineNumber(118);    // compilenode member
    // call case 6: other requests
    var call182 = request(var_ex, "data", [0]);
    var cases181 = [];
    setLineNumber(119);    // compilenode block
    var block183 = new GraceBlock(this, 119, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call184 = selfRequest(this, "RangeSuggestions", [0]);
    block183.paramTypes = [call184];
    var matches185 = function(var_rs) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call186 = selfRequest(this, "RangeSuggestions", [0]);
      if (!Grace_isTrue(request(call186, "matches(1)", [1], var_rs)))
          return false;
      return true;
    };
    block183.guard = matches185;
    block183.real = function block183(var_rs) {
      setLineNumber(120);    // compilenode string
      var string188 = new GraceString("Dialect ");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call189 = request(var_currentDialect, "name", [0]);
      var opresult190 = request(string188, "++(1)", [1], call189);
      var string191 = new GraceString(": ");
      var opresult192 = request(opresult190, "++(1)", [1], string191);
      // call case 6: other requests
      var call193 = request(var_ex, "message", [0]);
      var opresult194 = request(opresult192, "++(1)", [1], call193);
      var string195 = new GraceString(".");
      var opresult196 = request(opresult194, "++(1)", [1], string195);
      setLineNumber(122);    // compilenode member
      // call case 6: other requests
      var call197 = request(var_rs, "suggestions", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call187 = request(var_errormessages, "error(1)atRange(1)withSuggestions(1)", [1, 1, 1], opresult196, var_rs, call197);
      return call187;
    };
    let applyMeth183 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth183.methodName = "apply(1)";
    applyMeth183.paramCounts = [1];
    applyMeth183.paramNames = ["rs"];
    applyMeth183.definitionLine = 119;
    applyMeth183.definitionModule = "xmodule";
    block183.methods["apply(1)"] = applyMeth183;
    let matchesMeth183 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth183.methodName = "matches(1)";
    matchesMeth183.paramCounts = [1];
    matchesMeth183.paramNames = ["rs"];
    matchesMeth183.definitionLine = 119;
    matchesMeth183.definitionModule = "xmodule";
    block183.methods["matches(1)"] = matchesMeth183;
    cases181.push(block183);
    setLineNumber(123);    // compilenode block
    var block198 = new GraceBlock(this, 123, 1);
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call199 = request(var_ast, "Range", [0]);
    block198.paramTypes = [call199];
    var matches200 = function(var_r) {
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call201 = request(var_ast, "Range", [0]);
      if (!Grace_isTrue(request(call201, "matches(1)", [1], var_r)))
          return false;
      return true;
    };
    block198.guard = matches200;
    block198.real = function block198(var_r) {
      setLineNumber(124);    // compilenode string
      var string203 = new GraceString("Dialect ");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call204 = request(var_currentDialect, "name", [0]);
      var opresult205 = request(string203, "++(1)", [1], call204);
      var string206 = new GraceString(": ");
      var opresult207 = request(opresult205, "++(1)", [1], string206);
      // call case 6: other requests
      var call208 = request(var_ex, "message", [0]);
      var opresult209 = request(opresult207, "++(1)", [1], call208);
      var string210 = new GraceString(".");
      var opresult211 = request(opresult209, "++(1)", [1], string210);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call202 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult211, var_r);
      return call202;
    };
    let applyMeth198 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth198.methodName = "apply(1)";
    applyMeth198.paramCounts = [1];
    applyMeth198.paramNames = ["r"];
    applyMeth198.definitionLine = 123;
    applyMeth198.definitionModule = "xmodule";
    block198.methods["apply(1)"] = applyMeth198;
    let matchesMeth198 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth198.methodName = "matches(1)";
    matchesMeth198.paramCounts = [1];
    matchesMeth198.paramNames = ["r"];
    matchesMeth198.definitionLine = 123;
    matchesMeth198.definitionModule = "xmodule";
    block198.methods["matches(1)"] = matchesMeth198;
    cases181.push(block198);
    setLineNumber(126);    // compilenode block
    var block212 = new GraceBlock(this, 126, 1);
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call213 = request(var_ast, "Position", [0]);
    block212.paramTypes = [call213];
    var matches214 = function(var_p) {
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call215 = request(var_ast, "Position", [0]);
      if (!Grace_isTrue(request(call215, "matches(1)", [1], var_p)))
          return false;
      return true;
    };
    block212.guard = matches214;
    block212.real = function block212(var_p) {
      setLineNumber(127);    // compilenode string
      var string217 = new GraceString("Dialect ");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call218 = request(var_currentDialect, "name", [0]);
      var opresult219 = request(string217, "++(1)", [1], call218);
      var string220 = new GraceString(": ");
      var opresult221 = request(opresult219, "++(1)", [1], string220);
      // call case 6: other requests
      var call222 = request(var_ex, "message", [0]);
      var opresult223 = request(opresult221, "++(1)", [1], call222);
      var string224 = new GraceString(".");
      var opresult225 = request(opresult223, "++(1)", [1], string224);
      setLineNumber(128);    // compilenode member
      // call case 6: other requests
      var call226 = request(var_p, "line", [0]);
      // call case 6: other requests
      var call227 = request(var_p, "column", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call216 = request(var_errormessages, "error(1)atPosition(2)", [1, 2], opresult225, call226, call227);
      return call216;
    };
    let applyMeth212 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth212.methodName = "apply(1)";
    applyMeth212.paramCounts = [1];
    applyMeth212.paramNames = ["p"];
    applyMeth212.definitionLine = 126;
    applyMeth212.definitionModule = "xmodule";
    block212.methods["apply(1)"] = applyMeth212;
    let matchesMeth212 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth212.methodName = "matches(1)";
    matchesMeth212.paramCounts = [1];
    matchesMeth212.paramNames = ["p"];
    matchesMeth212.definitionLine = 126;
    matchesMeth212.definitionModule = "xmodule";
    block212.methods["matches(1)"] = matchesMeth212;
    cases181.push(block212);
    setLineNumber(129);    // compilenode block
    var block228 = new GraceBlock(this, 129, 0);
    block228.guard = jsTrue;
    block228.real = function block228() {
      setLineNumber(130);    // compilenode string
      var string230 = new GraceString("Dialect ");
      // call case 6: other requests
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      var call231 = request(var_currentDialect, "name", [0]);
      var opresult232 = request(string230, "++(1)", [1], call231);
      var string233 = new GraceString(": ");
      var opresult234 = request(opresult232, "++(1)", [1], string233);
      // call case 6: other requests
      var call235 = request(var_ex, "message", [0]);
      var opresult236 = request(opresult234, "++(1)", [1], call235);
      var string237 = new GraceString(".");
      var opresult238 = request(opresult236, "++(1)", [1], string237);
      setLineNumber(131);    // compilenode member
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call239 = request(var_util, "linenum", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call229 = request(var_errormessages, "error(1)atLine(1)", [1, 1], opresult238, call239);
      return call229;
    };
    let applyMeth228 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth228.methodName = "apply";
    applyMeth228.paramCounts = [0];
    applyMeth228.paramNames = [];
    applyMeth228.definitionLine = 129;
    applyMeth228.definitionModule = "xmodule";
    block228.methods["apply"] = applyMeth228;
    setLineNumber(118);    // compilematchcase
    var matchres181 = matchCase(call182,cases181,block228);
    return matchres181;
  };    // end of method reportDialectError(_)
  this.methods["reportDialectError(1)"] = func180;
  func180.methodName = "reportDialectError(1)";
  func180.paramCounts = [1];
  func180.paramNames = ["ex"];
  func180.definitionLine = 117;
  func180.definitionModule = "xmodule";
  var func240 = function(argcv, var_exceptionPacket, var_methodName) {    // method printBacktrace(_)asFarAs(_), line 135
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("printBacktrace(_)asFarAs(_)", 0, numArgs - 2);
    }
    setLineNumber(136);    // compilenode member
    // call case 6: other requests
    var call241 = request(var_exceptionPacket, "exception", [0]);
    var var_ex = call241;
    setLineNumber(137);    // compilenode member
    // call case 6: other requests
    var call242 = request(var_exceptionPacket, "message", [0]);
    var var_msg = call242;
    setLineNumber(138);    // compilenode member
    // call case 6: other requests
    var call243 = request(var_exceptionPacket, "lineNumber", [0]);
    var var_lineNr = call243;
    setLineNumber(139);    // compilenode member
    // call case 6: other requests
    var call244 = request(var_exceptionPacket, "moduleName", [0]);
    var var_mod = call244;
    var if245 = GraceDone;
    setLineNumber(140);    // compilenode num
    var opresult246 = request(var_lineNr, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult246)) {
      setLineNumber(141);    // compilenode string
      var string248 = new GraceString("");
      if (var_ex === undefined) raiseUninitializedVariable("ex");
      var opresult249 = request(string248, "++(1)", [1], var_ex);
      var string250 = new GraceString(" in ");
      var opresult251 = request(opresult249, "++(1)", [1], string250);
      if (var_mod === undefined) raiseUninitializedVariable("mod");
      var opresult252 = request(opresult251, "++(1)", [1], var_mod);
      var string253 = new GraceString(": ");
      var opresult254 = request(opresult252, "++(1)", [1], string253);
      if (var_msg === undefined) raiseUninitializedVariable("msg");
      var opresult255 = request(opresult254, "++(1)", [1], var_msg);
      var string256 = new GraceString("\n");
      var opresult257 = request(opresult255, "++(1)", [1], string256);
      // call case 6: other requests
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call258 = request(var_io, "error", [0]);
      var call247 = request(call258, "write(1)", [1], opresult257);
      if245 = call247;
    } else {
      setLineNumber(143);    // compilenode string
      var string260 = new GraceString("");
      if (var_ex === undefined) raiseUninitializedVariable("ex");
      var opresult261 = request(string260, "++(1)", [1], var_ex);
      var string262 = new GraceString(" on line ");
      var opresult263 = request(opresult261, "++(1)", [1], string262);
      if (var_lineNr === undefined) raiseUninitializedVariable("lineNr");
      var opresult264 = request(opresult263, "++(1)", [1], var_lineNr);
      var string265 = new GraceString(" of ");
      var opresult266 = request(opresult264, "++(1)", [1], string265);
      if (var_mod === undefined) raiseUninitializedVariable("mod");
      var opresult267 = request(opresult266, "++(1)", [1], var_mod);
      var string268 = new GraceString(": ");
      var opresult269 = request(opresult267, "++(1)", [1], string268);
      if (var_msg === undefined) raiseUninitializedVariable("msg");
      var opresult270 = request(opresult269, "++(1)", [1], var_msg);
      var string271 = new GraceString("\n");
      var opresult272 = request(opresult270, "++(1)", [1], string271);
      // call case 6: other requests
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call273 = request(var_io, "error", [0]);
      var call259 = request(call273, "write(1)", [1], opresult272);
      if245 = call259;
    }
    setLineNumber(145);    // compilenode member
    // call case 6: other requests
    var call274 = request(var_exceptionPacket, "backtrace", [0]);
    var var_bt = call274;
    setLineNumber(146);    // compilenode block
    var block276 = new GraceBlock(this, 146, 0);
    block276.guard = jsTrue;
    block276.real = function block276() {
      setLineNumber(146);    // compilenode member
      // call case 6: other requests
      if (var_bt === undefined) raiseUninitializedVariable("bt");
      var call277 = request(var_bt, "size", [0]);
      var opresult278 = request(call277, ">(1)", [1], new GraceNum(0));
      return opresult278;
    };
    let applyMeth276 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth276.methodName = "apply";
    applyMeth276.paramCounts = [0];
    applyMeth276.paramNames = [];
    applyMeth276.definitionLine = 146;
    applyMeth276.definitionModule = "xmodule";
    block276.methods["apply"] = applyMeth276;
    var block279 = new GraceBlock(this, 146, 0);
    block279.guard = jsTrue;
    block279.real = function block279() {
      setLineNumber(147);    // compilenode member
      // call case 6: other requests
      if (var_bt === undefined) raiseUninitializedVariable("bt");
      var call280 = request(var_bt, "pop", [0]);
      var var_frameDescription = call280;
      setLineNumber(148);    // compilenode string
      var string282 = new GraceString("  requested from ");
      if (var_frameDescription === undefined) raiseUninitializedVariable("frameDescription");
      var opresult283 = request(string282, "++(1)", [1], var_frameDescription);
      var string284 = new GraceString("\n");
      var opresult285 = request(opresult283, "++(1)", [1], string284);
      // call case 6: other requests
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call286 = request(var_io, "error", [0]);
      var call281 = request(call286, "write(1)", [1], opresult285);
      var if287 = GraceDone;
      setLineNumber(149);    // compilenode call
      // call case 6: other requests
      if (var_frameDescription === undefined) raiseUninitializedVariable("frameDescription");
      var call288 = request(var_frameDescription, "contains(1)", [1], var_methodName);
      if (Grace_isTrue(call288)) {
        throw new ReturnException(var_done, returnTarget);
      }
      return if287;
    };
    let applyMeth279 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth279.methodName = "apply";
    applyMeth279.paramCounts = [0];
    applyMeth279.paramNames = [];
    applyMeth279.definitionLine = 146;
    applyMeth279.definitionModule = "xmodule";
    block279.methods["apply"] = applyMeth279;
    // call case 2: outer request
    var call275 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block276, block279);
    return call275;
  };    // end of method printBacktrace(_)asFarAs(_)
  this.methods["printBacktrace(1)asFarAs(1)"] = func240;
  func240.methodName = "printBacktrace(1)asFarAs(1)";
  func240.paramCounts = [1, 1];
  func240.paramNames = ["exceptionPacket", "methodName"];
  func240.definitionLine = 135;
  func240.definitionModule = "xmodule";
  var func289 = function(argcv, var_node) {    // method checkExternalModule(_), line 153
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("checkExternalModule(_)", 0, numArgs - 1);
    }
    setLineNumber(154);    // compilenode member
    // call case 6: other requests
    var call291 = request(var_node, "moduleName", [0]);
    // call case 6: other requests
    var call292 = request(var_node, "path", [0]);
    // call case 6: other requests
    var call293 = request(var_node, "isDialect", [0]);
    // call case 6: other requests
    var call294 = request(var_node, "range", [0]);
    // call case 2: outer request
    var call290 = selfRequest(importedModules["xmodule"], "checkimport(4)", [4], call291, call292, call293, call294);
    return call290;
  };    // end of method checkExternalModule(_)
  this.methods["checkExternalModule(1)"] = func289;
  func289.methodName = "checkExternalModule(1)";
  func289.paramCounts = [1];
  func289.paramNames = ["node"];
  func289.definitionLine = 153;
  func289.definitionModule = "xmodule";
  var func295 = function(argcv, var_nm, var_pathname, var_isDialect, var_sourceRange) {    // method checkimport(_,_,_,_), line 157
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("checkimport(_,_,_,_)", 0, numArgs - 4);
    }
    var if296 = GraceDone;
    setLineNumber(158);    // compilenode call
    // call case 6: other requests
    if (var_builtInModules === undefined) raiseUninitializedVariable("builtInModules");
    var call297 = request(var_builtInModules, "contains(1)", [1], var_nm);
    if (Grace_isTrue(call297)) {
      setLineNumber(159);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      if (var_imports === undefined) raiseUninitializedVariable("imports");
      var call299 = request(var_imports, "other", [0]);
      var call298 = request(call299, "add(1)", [1], var_nm);
      setLineNumber(160);    // compilenode return
      return var_done;
    }
    var if300 = GraceDone;
    setLineNumber(162);    // compilenode call
    // call case 6: other requests
    if (var_imports === undefined) raiseUninitializedVariable("imports");
    var call301 = request(var_imports, "isAlready(1)", [1], var_nm);
    if (Grace_isTrue(call301)) {
      setLineNumber(163);    // compilenode return
      return var_done;
    }
    var if302 = GraceDone;
    setLineNumber(166);    // compilenode member
    // call case 2: outer request
    var call303 = selfRequest(var_prelude, "inBrowser", [0]);
    if (Grace_isTrue(call303)) {
      setLineNumber(167);    // compilenode string
      var string305 = new GraceString(".js");
      var opresult306 = request(var_nm, "++(1)", [1], string305);
      var string307 = new GraceString("");
      var block308 = new GraceBlock(this, 167, 1);
      block308.guard = jsTrue;
      block308.real = function block308(var___95____95__1) {
        setLineNumber(168);    // compilenode string
        var string310 = new GraceString("Please \"Run\" module ");
        var opresult311 = request(string310, "++(1)", [1], var_nm);
        var string312 = new GraceString(" before importing it.");
        var opresult313 = request(opresult311, "++(1)", [1], string312);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call309 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult313, var_sourceRange);
        return call309;
      };
      let applyMeth308 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth308.methodName = "apply(1)";
      applyMeth308.paramCounts = [1];
      applyMeth308.paramNames = ["__1"];
      applyMeth308.definitionLine = 167;
      applyMeth308.definitionModule = "xmodule";
      block308.methods["apply(1)"] = applyMeth308;
      let matchesMeth308 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth308.methodName = "matches(1)";
      matchesMeth308.paramCounts = [1];
      matchesMeth308.paramNames = ["__1"];
      matchesMeth308.definitionLine = 167;
      matchesMeth308.definitionModule = "xmodule";
      block308.methods["matches(1)"] = matchesMeth308;
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call304 = request(var_util, "file(1)onPath(1)otherwise(1)", [1, 1, 1], opresult306, string307, block308);
      setLineNumber(171);    // compilenode return
      return var_done;
    }
    setLineNumber(173);    // compilenode string
    var string315 = new GraceString("checking module \"");
    var opresult316 = request(string315, "++(1)", [1], var_nm);
    var string317 = new GraceString("\"");
    var opresult318 = request(opresult316, "++(1)", [1], string317);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call314 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult318);
    setLineNumber(174);    // compilenode string
    var string320 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call321 = request(var_sys, "environ", [0]);
    var call319 = request(call321, "at(1)", [1], string320);
    var var_gmp = call319;
    setLineNumber(175);    // compilenode string
    var string323 = new GraceString("js");
    // call case 6: other requests
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call324 = request(var_filePath, "fromString(1)", [1], var_pathname);
    var call322 = request(call324, "setExtension(1)", [1], string323);
    var var_pn = call322;
    setLineNumber(176);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call326 = request(var_util, "outDir", [0]);
    setLineNumber(177);    // compilenode block
    var block327 = new GraceBlock(this, 177, 1);
    block327.guard = jsTrue;
    block327.real = function block327(var_l) {
      setLineNumber(178);    // compilenode string
      var string329 = new GraceString("grace");
      // call case 6: other requests
      // call case 6: other requests
      if (var_pn === undefined) raiseUninitializedVariable("pn");
      var call330 = request(var_pn, "copy", [0]);
      var call328 = request(call330, "setExtension(1)", [1], string329);
      var var_graceFileName = call328;
      setLineNumber(179);    // compilenode call
      if (var_graceFileName === undefined) raiseUninitializedVariable("graceFileName");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call332 = request(var_util, "outDir", [0]);
      if (var_gmp === undefined) raiseUninitializedVariable("gmp");
      setLineNumber(180);    // compilenode block
      var block333 = new GraceBlock(this, 180, 1);
      block333.guard = jsTrue;
      block333.real = function block333(var_m) {
        setLineNumber(181);    // compilenode call
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call334 = request(var_errormessages, "readableStringFrom(1)", [1], var_m);
        var var_rm = call334;
        setLineNumber(182);    // compilenode string
        var string336 = new GraceString("I can't find ");
        // call case 6: other requests
        if (var_pn === undefined) raiseUninitializedVariable("pn");
        var call337 = request(var_pn, "shortName", [0]);
        var opresult338 = request(string336, "++(1)", [1], call337);
        var string339 = new GraceString(" ");
        var opresult340 = request(opresult338, "++(1)", [1], string339);
        setLineNumber(183);    // compilenode string
        var string341 = new GraceString("or ");
        // call case 6: other requests
        if (var_graceFileName === undefined) raiseUninitializedVariable("graceFileName");
        var call342 = request(var_graceFileName, "shortName", [0]);
        var opresult343 = request(string341, "++(1)", [1], call342);
        var string344 = new GraceString("; looked in ");
        var opresult345 = request(opresult343, "++(1)", [1], string344);
        if (var_rm === undefined) raiseUninitializedVariable("rm");
        var opresult346 = request(opresult345, "++(1)", [1], var_rm);
        var string347 = new GraceString(".");
        var opresult348 = request(opresult346, "++(1)", [1], string347);
        var opresult349 = request(opresult340, "++(1)", [1], opresult348);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call335 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult349, var_sourceRange);
        return call335;
      };
      let applyMeth333 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth333.methodName = "apply(1)";
      applyMeth333.paramCounts = [1];
      applyMeth333.paramNames = ["m"];
      applyMeth333.definitionLine = 180;
      applyMeth333.definitionModule = "xmodule";
      block333.methods["apply(1)"] = applyMeth333;
      let matchesMeth333 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth333.methodName = "matches(1)";
      matchesMeth333.paramCounts = [1];
      matchesMeth333.paramNames = ["m"];
      matchesMeth333.definitionLine = 180;
      matchesMeth333.definitionModule = "xmodule";
      block333.methods["matches(1)"] = matchesMeth333;
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call331 = request(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_graceFileName, call332, var_gmp, block333);
      var var_moduleFileGrace = call331;
      setLineNumber(185);    // compilenode string
      var string351 = new GraceString("about to compile module \"");
      var opresult352 = request(string351, "++(1)", [1], var_nm);
      var string353 = new GraceString("\"");
      var opresult354 = request(opresult352, "++(1)", [1], string353);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call350 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult354);
      setLineNumber(186);    // compilenode member
      // call case 6: other requests
      if (var_moduleFileGrace === undefined) raiseUninitializedVariable("moduleFileGrace");
      var call356 = request(var_moduleFileGrace, "asString", [0]);
      // call case 2: outer request
      var call355 = selfRequest(importedModules["xmodule"], "compileModule(1)inFile(1)forDialect(1)atRange(1)", [1, 1, 1, 1], var_nm, call356, var_isDialect, var_sourceRange);
      setLineNumber(188);    // compilenode call
      if (var_pn === undefined) raiseUninitializedVariable("pn");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call358 = request(var_util, "outDir", [0]);
      if (var_gmp === undefined) raiseUninitializedVariable("gmp");
      var block359 = new GraceBlock(this, 188, 1);
      block359.guard = jsTrue;
      block359.real = function block359(var_m) {
        setLineNumber(189);    // compilenode call
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call360 = request(var_errormessages, "readableStringFrom(1)", [1], var_m);
        var var_rm = call360;
        setLineNumber(190);    // compilenode string
        var string362 = new GraceString("I just compiled ");
        if (var_moduleFileGrace === undefined) raiseUninitializedVariable("moduleFileGrace");
        var opresult363 = request(string362, "++(1)", [1], var_moduleFileGrace);
        var string364 = new GraceString(" ");
        var opresult365 = request(opresult363, "++(1)", [1], string364);
        setLineNumber(191);    // compilenode string
        var string366 = new GraceString("but can't find the .js file; looked in ");
        if (var_rm === undefined) raiseUninitializedVariable("rm");
        var opresult367 = request(string366, "++(1)", [1], var_rm);
        var string368 = new GraceString(".");
        var opresult369 = request(opresult367, "++(1)", [1], string368);
        var opresult370 = request(opresult365, "++(1)", [1], opresult369);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call361 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult370, var_sourceRange);
        return call361;
      };
      let applyMeth359 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth359.methodName = "apply(1)";
      applyMeth359.paramCounts = [1];
      applyMeth359.paramNames = ["m"];
      applyMeth359.definitionLine = 188;
      applyMeth359.definitionModule = "xmodule";
      block359.methods["apply(1)"] = applyMeth359;
      let matchesMeth359 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth359.methodName = "matches(1)";
      matchesMeth359.paramCounts = [1];
      matchesMeth359.paramNames = ["m"];
      matchesMeth359.definitionLine = 188;
      matchesMeth359.definitionModule = "xmodule";
      block359.methods["matches(1)"] = matchesMeth359;
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call357 = request(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_pn, call358, var_gmp, block359);
      return call357;
    };
    let applyMeth327 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth327.methodName = "apply(1)";
    applyMeth327.paramCounts = [1];
    applyMeth327.paramNames = ["l"];
    applyMeth327.definitionLine = 177;
    applyMeth327.definitionModule = "xmodule";
    block327.methods["apply(1)"] = applyMeth327;
    let matchesMeth327 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth327.methodName = "matches(1)";
    matchesMeth327.paramCounts = [1];
    matchesMeth327.paramNames = ["l"];
    matchesMeth327.definitionLine = 177;
    matchesMeth327.definitionModule = "xmodule";
    block327.methods["matches(1)"] = matchesMeth327;
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call325 = request(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_pn, call326, var_gmp, block327);
    var var_moduleFileJs = call325;
    setLineNumber(194);    // compilenode string
    var string372 = new GraceString("found module \"");
    var opresult373 = request(string372, "++(1)", [1], var_nm);
    var string374 = new GraceString("\" in ");
    var opresult375 = request(opresult373, "++(1)", [1], string374);
    var opresult376 = request(opresult375, "++(1)", [1], var_moduleFileJs);
    var string377 = new GraceString("");
    var opresult378 = request(opresult376, "++(1)", [1], string377);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call371 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult378);
    setLineNumber(196);    // compilenode call
    // call case 2: outer request
    var call379 = selfRequest(importedModules["xmodule"], "parseGCT(1)", [1], var_nm);
    var var_gctDict = call379;
    setLineNumber(197);    // compilenode member
    // call case 6: other requests
    var string383 = new GraceString("path");
    // call case 6: other requests
    var call382 = request(var_gctDict, "at(1)", [1], string383);
    var call381 = request(call382, "first", [0]);
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call380 = request(var_filePath, "fromString(1)", [1], call381);
    var var_sourceFile = call380;
    var if384 = GraceDone;
    setLineNumber(198);    // compilenode string
    var string386 = new GraceString("stub");
    // call case 6: other requests
    // call case 6: other requests
    var call387 = request(var_sourceFile, "directory", [0]);
    var call385 = request(call387, "contains(1)", [1], string386);
    if (Grace_isTrue(call385)) {
      if384 = GraceFalse;
    } else {
      setLineNumber(201);    // compilenode member
      // call case 6: other requests
      if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
      var call388 = request(var_sourceFile, "exists", [0]);
      if384 = call388;
    }
    var var_sourceExists = if384;
    var if389 = GraceDone;
    setLineNumber(203);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call390 = request(var_util, "target", [0]);
    var string391 = new GraceString("js");
    var opresult392 = request(call390, "==(1)", [1], string391);
    if (Grace_isTrue(opresult392)) {
      var if393 = GraceDone;
      setLineNumber(204);    // compilenode member
      // call case 6: other requests
      if (var_moduleFileJs === undefined) raiseUninitializedVariable("moduleFileJs");
      var call394 = request(var_moduleFileJs, "exists", [0]);
      var block395 = new GraceBlock(this, 204, 0);
      block395.guard = jsTrue;
      block395.real = function block395() {
        setLineNumber(205);    // compilenode member
        // call case 6: other requests
        if (var_sourceExists === undefined) raiseUninitializedVariable("sourceExists");
        var call396 = request(var_sourceExists, "not", [0]);
        var block397 = new GraceBlock(this, 205, 0);
        block397.guard = jsTrue;
        block397.real = function block397() {
          setLineNumber(205);    // compilenode call
          if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
          // call case 6: other requests
          if (var_moduleFileJs === undefined) raiseUninitializedVariable("moduleFileJs");
          var call398 = request(var_moduleFileJs, "newer(1)", [1], var_sourceFile);
          return call398;
        };
        let applyMeth397 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth397.methodName = "apply";
        applyMeth397.paramCounts = [0];
        applyMeth397.paramNames = [];
        applyMeth397.definitionLine = 205;
        applyMeth397.definitionModule = "xmodule";
        block397.methods["apply"] = applyMeth397;
        var opresult399 = request(call396, "||(1)", [1], block397);
        return opresult399;
      };
      let applyMeth395 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth395.methodName = "apply";
      applyMeth395.paramCounts = [0];
      applyMeth395.paramNames = [];
      applyMeth395.definitionLine = 204;
      applyMeth395.definitionModule = "xmodule";
      block395.methods["apply"] = applyMeth395;
      var opresult400 = request(call394, "&&(1)", [1], block395);
      if (Grace_isTrue(opresult400)) {
        if393 = GraceDone;
      } else {
        var if401 = GraceDone;
        setLineNumber(208);    // compilenode member
        // call case 6: other requests
        if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
        // call case 6: other requests
        if (var_moduleFileJs === undefined) raiseUninitializedVariable("moduleFileJs");
        var call403 = request(var_moduleFileJs, "newer(1)", [1], var_sourceFile);
        var call402 = request(call403, "not", [0]);
        if (Grace_isTrue(call402)) {
          setLineNumber(209);    // compilenode string
          var string405 = new GraceString("");
          if (var_moduleFileJs === undefined) raiseUninitializedVariable("moduleFileJs");
          var opresult406 = request(string405, "++(1)", [1], var_moduleFileJs);
          var string407 = new GraceString(" not newer than ");
          var opresult408 = request(opresult406, "++(1)", [1], string407);
          if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
          var opresult409 = request(opresult408, "++(1)", [1], var_sourceFile);
          var string410 = new GraceString("");
          var opresult411 = request(opresult409, "++(1)", [1], string410);
          // call case 6: other requests
          if (var_util === undefined) raiseUninitializedVariable("util");
          var call404 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult411);
          if401 = call404;
        }
        var if412 = GraceDone;
        setLineNumber(211);    // compilenode member
        // call case 6: other requests
        if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
        var call413 = request(var_sourceFile, "exists", [0]);
        if (Grace_isTrue(call413)) {
          setLineNumber(212);    // compilenode member
          // call case 6: other requests
          if (var_sourceFile === undefined) raiseUninitializedVariable("sourceFile");
          var call415 = request(var_sourceFile, "asString", [0]);
          // call case 2: outer request
          var call414 = selfRequest(importedModules["xmodule"], "compileModule(1)inFile(1)forDialect(1)atRange(1)", [1, 1, 1, 1], var_nm, call415, var_isDialect, var_sourceRange);
          if412 = call414;
        } else {
          var if416 = GraceDone;
          setLineNumber(215);    // compilenode if
          if (Grace_isTrue(var_isDialect)) {
            var string417 = new GraceString("dialect");
            if416 = string417;
          } else {
            var string418 = new GraceString("module");
            if416 = string418;
          }
          var var_thing = if416;
          setLineNumber(216);    // compilenode string
          var string420 = new GraceString("Can't find ");
          if (var_thing === undefined) raiseUninitializedVariable("thing");
          var opresult421 = request(string420, "++(1)", [1], var_thing);
          var string422 = new GraceString(" ");
          var opresult423 = request(opresult421, "++(1)", [1], string422);
          var opresult424 = request(opresult423, "++(1)", [1], var_nm);
          var string425 = new GraceString("");
          var opresult426 = request(opresult424, "++(1)", [1], string425);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call419 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult426, var_sourceRange);
          if412 = call419;
        }
        if393 = if412;
      }
      setLineNumber(220);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      if (var_imports === undefined) raiseUninitializedVariable("imports");
      var call428 = request(var_imports, "other", [0]);
      var call427 = request(call428, "add(1)", [1], var_nm);
      if389 = call427;
    }
    setLineNumber(222);    // compilenode member
    // call case 6: other requests
    var call430 = request(var_moduleFileJs, "directory", [0]);
    // call case 2: outer request
    var call429 = selfRequest(importedModules["xmodule"], "addTransitiveImports(4)", [4], call430, var_isDialect, var_nm, var_sourceRange);
    return call429;
  };    // end of method checkimport(_,_,_,_)
  func295.confidential = true;
  this.methods["checkimport(4)"] = func295;
  func295.methodName = "checkimport(4)";
  func295.paramCounts = [4];
  func295.paramNames = ["nm", "pathname", "isDialect", "sourceRange"];
  func295.definitionLine = 157;
  func295.definitionModule = "xmodule";
  var func431 = function(argcv, var_directory, var_isDialect, var_moduleName, var_sourceRange) {    // method addTransitiveImports(_,_,_,_), line 225
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("addTransitiveImports(_,_,_,_)", 0, numArgs - 4);
    }
    setLineNumber(226);    // compilenode block
    var block433 = new GraceBlock(this, 226, 0);
    block433.guard = jsTrue;
    block433.real = function block433() {
      setLineNumber(227);    // compilenode call
      // call case 2: outer request
      var call434 = selfRequest(importedModules["xmodule"], "parseGCT(1)sourceDir(1)", [1, 1], var_moduleName, var_directory);
      return call434;
    };
    let applyMeth433 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth433.methodName = "apply";
    applyMeth433.paramCounts = [0];
    applyMeth433.paramNames = [];
    applyMeth433.definitionLine = 226;
    applyMeth433.definitionModule = "xmodule";
    block433.methods["apply"] = applyMeth433;
    // call case 6: other requests
    if (var_gctCache === undefined) raiseUninitializedVariable("gctCache");
    var call432 = request(var_gctCache, "at(1)ifAbsent(1)", [1, 1], var_moduleName, block433);
    var var_gctData = call432;
    var if435 = GraceDone;
    setLineNumber(229);    // compilenode string
    var string437 = new GraceString("dialect");
    // call case 6: other requests
    var call436 = request(var_gctData, "containsKey(1)", [1], string437);
    if (Grace_isTrue(call436)) {
      setLineNumber(230);    // compilenode string
      var string439 = new GraceString("dialect");
      // call case 6: other requests
      if (var_gctData === undefined) raiseUninitializedVariable("gctData");
      var call438 = request(var_gctData, "at(1)", [1], string439);
      var var_dialects = call438;
      var if440 = GraceDone;
      setLineNumber(231);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_dialects === undefined) raiseUninitializedVariable("dialects");
      var call442 = request(var_dialects, "isEmpty", [0]);
      var call441 = request(call442, "not", [0]);
      if (Grace_isTrue(call441)) {
        setLineNumber(232);    // compilenode member
        // call case 6: other requests
        var string445 = new GraceString("dialect");
        // call case 6: other requests
        if (var_gctData === undefined) raiseUninitializedVariable("gctData");
        var call444 = request(var_gctData, "at(1)", [1], string445);
        var call443 = request(call444, "first", [0]);
        var var_dName = call443;
        setLineNumber(233);    // compilenode call
        if (var_dName === undefined) raiseUninitializedVariable("dName");
        if (var_dName === undefined) raiseUninitializedVariable("dName");
        // call case 2: outer request
        var call446 = selfRequest(importedModules["xmodule"], "checkimport(4)", [4], var_dName, var_dName, GraceTrue, var_sourceRange);
        if440 = call446;
      }
      if435 = if440;
    }
    setLineNumber(236);    // compilenode string
    var string448 = new GraceString("modules");
    var block449 = new GraceBlock(this, 236, 0);
    block449.guard = jsTrue;
    block449.real = function block449() {
      setLineNumber(236);    // compilenode member
      // call case 2: outer request
      var call450 = selfRequest(var_prelude, "emptySequence", [0]);
      return call450;
    };
    let applyMeth449 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth449.methodName = "apply";
    applyMeth449.paramCounts = [0];
    applyMeth449.paramNames = [];
    applyMeth449.definitionLine = 236;
    applyMeth449.definitionModule = "xmodule";
    block449.methods["apply"] = applyMeth449;
    // call case 6: other requests
    var call447 = request(var_gctData, "at(1)ifAbsent(1)", [1, 1], string448, block449);
    var var_importedModules = call447;
    setLineNumber(237);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call451 = request(var_util, "modname", [0]);
    var var_m = call451;
    var if452 = GraceDone;
    setLineNumber(238);    // compilenode call
    // call case 6: other requests
    var call453 = request(var_importedModules, "contains(1)", [1], var_m);
    if (Grace_isTrue(call453)) {
      setLineNumber(239);    // compilenode string
      var string455 = new GraceString("Cyclic import detected: '");
      if (var_m === undefined) raiseUninitializedVariable("m");
      var opresult456 = request(string455, "++(1)", [1], var_m);
      var string457 = new GraceString("' is imported ");
      var opresult458 = request(opresult456, "++(1)", [1], string457);
      setLineNumber(240);    // compilenode string
      var string459 = new GraceString("by '");
      var opresult460 = request(string459, "++(1)", [1], var_moduleName);
      var string461 = new GraceString("', which is imported by '");
      var opresult462 = request(opresult460, "++(1)", [1], string461);
      if (var_m === undefined) raiseUninitializedVariable("m");
      var opresult463 = request(opresult462, "++(1)", [1], var_m);
      var string464 = new GraceString("' (and so on).");
      var opresult465 = request(opresult463, "++(1)", [1], string464);
      var opresult466 = request(opresult458, "++(1)", [1], opresult465);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call454 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult466, var_sourceRange);
      if452 = call454;
    }
    setLineNumber(243);    // compilenode block
    var block468 = new GraceBlock(this, 243, 1);
    block468.guard = jsTrue;
    block468.real = function block468(var_each) {
      setLineNumber(244);    // compilenode call
      // call case 2: outer request
      var call469 = selfRequest(importedModules["xmodule"], "checkimport(4)", [4], var_each, var_each, var_isDialect, var_sourceRange);
      return call469;
    };
    let applyMeth468 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth468.methodName = "apply(1)";
    applyMeth468.paramCounts = [1];
    applyMeth468.paramNames = ["each"];
    applyMeth468.definitionLine = 243;
    applyMeth468.definitionModule = "xmodule";
    block468.methods["apply(1)"] = applyMeth468;
    let matchesMeth468 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth468.methodName = "matches(1)";
    matchesMeth468.paramCounts = [1];
    matchesMeth468.paramNames = ["each"];
    matchesMeth468.definitionLine = 243;
    matchesMeth468.definitionModule = "xmodule";
    block468.methods["matches(1)"] = matchesMeth468;
    // call case 6: other requests
    var call467 = request(var_importedModules, "do(1)", [1], block468);
    return call467;
  };    // end of method addTransitiveImports(_,_,_,_)
  func431.confidential = true;
  this.methods["addTransitiveImports(4)"] = func431;
  func431.methodName = "addTransitiveImports(4)";
  func431.paramCounts = [4];
  func431.paramNames = ["directory", "isDialect", "moduleName", "sourceRange"];
  func431.definitionLine = 225;
  func431.definitionModule = "xmodule";
  var func470 = function(argcv, var_nm, var_sourceFile, var_isDialect, var_sourceRange) {    // method compileModule(_)inFile(_)forDialect(_)atRange(_), line 248
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("compileModule(_)inFile(_)forDialect(_)atRange(_)", 0, numArgs - 4);
    }
    var if471 = GraceDone;
    setLineNumber(250);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call473 = request(var_util, "recurse", [0]);
    var call472 = request(call473, "not", [0]);
    if (Grace_isTrue(call472)) {
      setLineNumber(251);    // compilenode string
      var string475 = new GraceString("Please compile module ");
      var opresult476 = request(string475, "++(1)", [1], var_nm);
      var string477 = new GraceString(" before using it.");
      var opresult478 = request(opresult476, "++(1)", [1], string477);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call474 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult478, var_sourceRange);
      if471 = call474;
    }
    var if479 = GraceDone;
    setLineNumber(254);    // compilenode member
    // call case 2: outer request
    var call480 = selfRequest(var_prelude, "inBrowser", [0]);
    if (Grace_isTrue(call480)) {
      setLineNumber(255);    // compilenode string
      var string482 = new GraceString("Please \"Run\" module ");
      var opresult483 = request(string482, "++(1)", [1], var_nm);
      var string484 = new GraceString(" before using it.");
      var opresult485 = request(opresult483, "++(1)", [1], string484);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call481 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult485, var_sourceRange);
      if479 = call481;
    }
    setLineNumber(258);    // compilenode vardec
    var var_cmd;
    var if486 = GraceDone;
    setLineNumber(259);    // compilenode string
    var string488 = new GraceString("/");
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call490 = request(var_sys, "argv", [0]);
    var call489 = request(call490, "first", [0]);
    var call487 = request(call489, "contains(1)", [1], string488);
    if (Grace_isTrue(call487)) {
      setLineNumber(260);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call493 = request(var_sys, "argv", [0]);
      var call492 = request(call493, "first", [0]);
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call491 = request(var_io, "realpath(1)", [1], call492);
      var_cmd = call491;
      if486 = GraceDone;
    } else {
      setLineNumber(262);    // compilenode string
      var string495 = new GraceString("");
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call496 = request(var_sys, "execPath", [0]);
      var opresult497 = request(string495, "++(1)", [1], call496);
      var string498 = new GraceString("/");
      var opresult499 = request(opresult497, "++(1)", [1], string498);
      // call case 6: other requests
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call501 = request(var_sys, "argv", [0]);
      var call500 = request(call501, "first", [0]);
      var opresult502 = request(opresult499, "++(1)", [1], call500);
      var string503 = new GraceString("");
      var opresult504 = request(opresult502, "++(1)", [1], string503);
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call494 = request(var_io, "realpath(1)", [1], opresult504);
      var_cmd = call494;
      if486 = GraceDone;
    }
    setLineNumber(264);    // compilenode string
    var string505 = new GraceString("\"");
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var opresult506 = request(string505, "++(1)", [1], var_cmd);
    var string507 = new GraceString("\"");
    var opresult508 = request(opresult506, "++(1)", [1], string507);
    var_cmd = opresult508;
    setLineNumber(265);    // compilenode string
    var string510 = new GraceString("compiler-js");
    var string511 = new GraceString("minigrace-js");
    // call case 6: other requests
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var call509 = request(var_cmd, "replace(1)with(1)", [1, 1], string510, string511);
    var_cmd = call509;
    var if512 = GraceDone;
    setLineNumber(266);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call513 = request(var_util, "verbosity", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call514 = request(var_util, "defaultVerbosity", [0]);
    var opresult515 = request(call513, "\u2260(1)", [1], call514);
    if (Grace_isTrue(opresult515)) {
      setLineNumber(267);    // compilenode op
      if (var_cmd === undefined) raiseUninitializedVariable("cmd");
      var string516 = new GraceString(" --verbose ");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call517 = request(var_util, "verbosity", [0]);
      var opresult518 = request(string516, "++(1)", [1], call517);
      var string519 = new GraceString("");
      var opresult520 = request(opresult518, "++(1)", [1], string519);
      var opresult521 = request(var_cmd, "++(1)", [1], opresult520);
      var_cmd = opresult521;
      if512 = GraceDone;
    }
    var if522 = GraceDone;
    setLineNumber(269);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call523 = request(var_util, "dirFlag", [0]);
    if (Grace_isTrue(call523)) {
      setLineNumber(270);    // compilenode op
      if (var_cmd === undefined) raiseUninitializedVariable("cmd");
      var string524 = new GraceString(" --dir ");
      var opresult525 = request(var_cmd, "++(1)", [1], string524);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call526 = request(var_util, "outDir", [0]);
      var opresult527 = request(opresult525, "++(1)", [1], call526);
      var_cmd = opresult527;
      if522 = GraceDone;
    }
    var if528 = GraceDone;
    setLineNumber(272);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call529 = request(var_util, "vtag", [0]);
    var opresult530 = request(GraceFalse, "\u2260(1)", [1], call529);
    if (Grace_isTrue(opresult530)) {
      setLineNumber(273);    // compilenode op
      if (var_cmd === undefined) raiseUninitializedVariable("cmd");
      var string531 = new GraceString(" --vtag ");
      var opresult532 = request(var_cmd, "++(1)", [1], string531);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call533 = request(var_util, "vtag", [0]);
      var opresult534 = request(opresult532, "++(1)", [1], call533);
      var_cmd = opresult534;
      if528 = GraceDone;
    }
    setLineNumber(275);    // compilenode op
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var string535 = new GraceString(" --gracelib ");
    var opresult536 = request(var_cmd, "++(1)", [1], string535);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call537 = request(var_util, "gracelibPath", [0]);
    var opresult538 = request(opresult536, "++(1)", [1], call537);
    var_cmd = opresult538;
    setLineNumber(276);    // compilenode op
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call539 = request(var_util, "commandLineExtensions", [0]);
    var opresult540 = request(var_cmd, "++(1)", [1], call539);
    var_cmd = opresult540;
    setLineNumber(277);    // compilenode string
    var string541 = new GraceString("");
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var opresult542 = request(string541, "++(1)", [1], var_cmd);
    var string543 = new GraceString(" --target ");
    var opresult544 = request(opresult542, "++(1)", [1], string543);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call545 = request(var_util, "target", [0]);
    var opresult546 = request(opresult544, "++(1)", [1], call545);
    var string547 = new GraceString(" --make \"");
    var opresult548 = request(opresult546, "++(1)", [1], string547);
    var opresult549 = request(opresult548, "++(1)", [1], var_sourceFile);
    var string550 = new GraceString("\"");
    var opresult551 = request(opresult549, "++(1)", [1], string550);
    var_cmd = opresult551;
    setLineNumber(278);    // compilenode string
    var string553 = new GraceString("executing sub-compile ");
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var opresult554 = request(string553, "++(1)", [1], var_cmd);
    var string555 = new GraceString("");
    var opresult556 = request(opresult554, "++(1)", [1], string555);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call552 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult556);
    setLineNumber(279);    // compilenode member
    // call case 6: other requests
    var string559 = new GraceString("bash");
    var string561 = new GraceString("-c");
    if (var_cmd === undefined) raiseUninitializedVariable("cmd");
    var array560 = new GraceSequence([string561, var_cmd]);
    // call case 6: other requests
    if (var_io === undefined) raiseUninitializedVariable("io");
    var call558 = request(var_io, "spawn(2)", [2], string559, array560);
    var call557 = request(call558, "status", [0]);
    var var_exitCode = call557;
    var if562 = GraceDone;
    setLineNumber(280);    // compilenode num
    var opresult563 = request(var_exitCode, "\u2260(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult563)) {
      setLineNumber(281);    // compilenode string
      var string565 = new GraceString("Failed to compile imported module ");
      var opresult566 = request(string565, "++(1)", [1], var_nm);
      var string567 = new GraceString(" (");
      var opresult568 = request(opresult566, "++(1)", [1], string567);
      if (var_exitCode === undefined) raiseUninitializedVariable("exitCode");
      var opresult569 = request(opresult568, "++(1)", [1], var_exitCode);
      var string570 = new GraceString(").");
      var opresult571 = request(opresult569, "++(1)", [1], string570);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call564 = request(var_errormessages, "error(1)atRange(1)", [1, 1], opresult571, var_sourceRange);
      if562 = call564;
    }
    return if562;
  };    // end of method compileModule(_)inFile(_)forDialect(_)atRange(_)
  func470.confidential = true;
  this.methods["compileModule(1)inFile(1)forDialect(1)atRange(1)"] = func470;
  func470.methodName = "compileModule(1)inFile(1)forDialect(1)atRange(1)";
  func470.paramCounts = [1, 1, 1, 1];
  func470.paramNames = ["nm", "sourceFile", "isDialect", "sourceRange"];
  func470.definitionLine = 248;
  func470.definitionModule = "xmodule";
  var func572 = function(argcv, var_moduleName) {    // method parseGCT(_), line 286
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("parseGCT(_)", 0, numArgs - 1);
    }
    setLineNumber(287);    // compilenode block
    var block574 = new GraceBlock(this, 287, 0);
    block574.guard = jsTrue;
    block574.real = function block574() {
      setLineNumber(288);    // compilenode member
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call576 = request(var_util, "outDir", [0]);
      // call case 2: outer request
      var call575 = selfRequest(importedModules["xmodule"], "parseGCT(1)sourceDir(1)", [1, 1], var_moduleName, call576);
      return call575;
    };
    let applyMeth574 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth574.methodName = "apply";
    applyMeth574.paramCounts = [0];
    applyMeth574.paramNames = [];
    applyMeth574.definitionLine = 287;
    applyMeth574.definitionModule = "xmodule";
    block574.methods["apply"] = applyMeth574;
    // call case 6: other requests
    if (var_gctCache === undefined) raiseUninitializedVariable("gctCache");
    var call573 = request(var_gctCache, "at(1)ifAbsent(1)", [1, 1], var_moduleName, block574);
    return call573;
  };    // end of method parseGCT(_)
  this.methods["parseGCT(1)"] = func572;
  func572.methodName = "parseGCT(1)";
  func572.paramCounts = [1];
  func572.paramNames = ["moduleName"];
  func572.definitionLine = 286;
  func572.definitionModule = "xmodule";
  var func577 = function(argcv, var_moduleName, var_dir) {    // method parseGCT(_)sourceDir(_), line 292
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("parseGCT(_)sourceDir(_)", 0, numArgs - 2);
    }
    setLineNumber(293);    // compilenode member
    // call case 2: outer request
    var call578 = selfRequest(var_prelude, "emptyDictionary", [0]);
    var var_gctData = call578;
    setLineNumber(294);    // compilenode member
    // call case 6: other requests
    var call579 = request(var_moduleName, "size", [0]);
    var var_sz = call579;
    setLineNumber(295);    // compilenode call
    // call case 2: outer request
    var call580 = selfRequest(importedModules["xmodule"], "extractGctFor(1)sourceDir(1)", [1, 1], var_moduleName, var_dir);
    var var_gctList = call580;
    setLineNumber(296);    // compilenode string
    var string581 = new GraceString("");
    var var_key = string581;
    setLineNumber(297);    // compilenode block
    var block583 = new GraceBlock(this, 297, 1);
    block583.guard = jsTrue;
    block583.real = function block583(var_line) {
      var if584 = GraceDone;
      setLineNumber(298);    // compilenode member
      // call case 6: other requests
      var call585 = request(var_line, "size", [0]);
      var opresult586 = request(call585, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult586)) {
        var if587 = GraceDone;
        setLineNumber(299);    // compilenode member
        // call case 6: other requests
        var call588 = request(var_line, "first", [0]);
        var string589 = new GraceString(" ");
        var opresult590 = request(call588, "\u2260(1)", [1], string589);
        if (Grace_isTrue(opresult590)) {
          setLineNumber(300);    // compilenode member
          // call case 6: other requests
          var call592 = request(var_line, "size", [0]);
          var diff593 = request(call592, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call591 = request(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff593);
          var_key = call591;
          setLineNumber(301);    // compilenode call
          if (var_key === undefined) raiseUninitializedVariable("key");
          var array596 = new GraceSequence([]);
          // call case 2: outer request
          var call595 = selfRequest(var_prelude, "list(1)", [1], array596);
          // call case 6: other requests
          if (var_gctData === undefined) raiseUninitializedVariable("gctData");
          var call594 = request(var_gctData, "at(1)put(1)", [1, 1], var_key, call595);
          if587 = call594;
        } else {
          setLineNumber(303);    // compilenode member
          // call case 6: other requests
          var call599 = request(var_line, "size", [0]);
          // call case 6: other requests
          var call598 = request(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(2), call599);
          // call case 6: other requests
          if (var_key === undefined) raiseUninitializedVariable("key");
          // call case 6: other requests
          if (var_gctData === undefined) raiseUninitializedVariable("gctData");
          var call600 = request(var_gctData, "at(1)", [1], var_key);
          var call597 = request(call600, "addLast(1)", [1], call598);
          if587 = call597;
        }
        if584 = if587;
      }
      return if584;
    };
    let applyMeth583 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth583.methodName = "apply(1)";
    applyMeth583.paramCounts = [1];
    applyMeth583.paramNames = ["line"];
    applyMeth583.definitionLine = 297;
    applyMeth583.definitionModule = "xmodule";
    block583.methods["apply(1)"] = applyMeth583;
    let matchesMeth583 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth583.methodName = "matches(1)";
    matchesMeth583.paramCounts = [1];
    matchesMeth583.paramNames = ["line"];
    matchesMeth583.definitionLine = 297;
    matchesMeth583.definitionModule = "xmodule";
    block583.methods["matches(1)"] = matchesMeth583;
    // call case 2: outer request
    var call582 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_gctList, block583);
    setLineNumber(307);    // compilenode call
    // call case 6: other requests
    if (var_gctCache === undefined) raiseUninitializedVariable("gctCache");
    var call601 = request(var_gctCache, "at(1)put(1)", [1, 1], var_moduleName, var_gctData);
    setLineNumber(308);    // compilenode return
    return var_gctData;
  };    // end of method parseGCT(_)sourceDir(_)
  func577.confidential = true;
  this.methods["parseGCT(1)sourceDir(1)"] = func577;
  func577.methodName = "parseGCT(1)sourceDir(1)";
  func577.paramCounts = [1, 1];
  func577.paramNames = ["moduleName", "dir"];
  func577.definitionLine = 292;
  func577.definitionModule = "xmodule";
  var func602 = function(argcv, var_moduleName, var_dir) {    // method extractGctFor(_)sourceDir(_), line 311
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("extractGctFor(_)sourceDir(_)", 0, numArgs - 2);
    }
    var if603 = GraceDone;
    setLineNumber(314);    // compilenode member
    // call case 2: outer request
    var call604 = selfRequest(var_prelude, "inBrowser", [0]);
    if (Grace_isTrue(call604)) {
      // call case 2: outer request
      var call605 = selfRequest(importedModules["xmodule"], "extractGctFromCache(1)", [1], var_moduleName);
      return call605;
    }
    setLineNumber(315);    // compilenode block
    var block607 = new GraceBlock(this, 315, 0);
    block607.guard = jsTrue;
    block607.real = function block607() {
      setLineNumber(316);    // compilenode block
      var block609 = new GraceBlock(this, 316, 0);
      block609.guard = jsTrue;
      block609.real = function block609() {
        setLineNumber(317);    // compilenode call
        // call case 2: outer request
        var call610 = selfRequest(importedModules["xmodule"], "extractGctFromJsFile(1)sourceDir(1)", [1, 1], var_moduleName, var_dir);
        throw new ReturnException(call610, returnTarget);
      };
      let applyMeth609 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth609.methodName = "apply";
      applyMeth609.paramCounts = [0];
      applyMeth609.paramNames = [];
      applyMeth609.definitionLine = 316;
      applyMeth609.definitionModule = "xmodule";
      block609.methods["apply"] = applyMeth609;
      var cases608 = [];
      setLineNumber(318);    // compilenode block
      var block611 = new GraceBlock(this, 318, 1);
      // call case 2: outer request
      var call612 = selfRequest(var_prelude, "EnvironmentException", [0]);
      block611.paramTypes = [call612];
      var matches613 = function(var_ep) {
        // call case 2: outer request
        var call614 = selfRequest(var_prelude, "EnvironmentException", [0]);
        if (!Grace_isTrue(request(call614, "matches(1)", [1], var_ep)))
            return false;
        return true;
      };
      block611.guard = matches613;
      block611.real = function block611(var_ep) {
        setLineNumber(318);    // compileBlock
        return var_done;
      };
      let applyMeth611 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth611.methodName = "apply(1)";
      applyMeth611.paramCounts = [1];
      applyMeth611.paramNames = ["ep"];
      applyMeth611.definitionLine = 318;
      applyMeth611.definitionModule = "xmodule";
      block611.methods["apply(1)"] = applyMeth611;
      let matchesMeth611 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth611.methodName = "matches(1)";
      matchesMeth611.paramCounts = [1];
      matchesMeth611.paramNames = ["ep"];
      matchesMeth611.definitionLine = 318;
      matchesMeth611.definitionModule = "xmodule";
      block611.methods["matches(1)"] = matchesMeth611;
      cases608.push(block611);
      setLineNumber(316);    // compiletrycatch
      var catchres608 = tryCatch(block609,cases608,false);
      setLineNumber(322);    // compilenode call
      // call case 2: outer request
      var call615 = selfRequest(importedModules["xmodule"], "extractGctFromGctFile(1)sourceDir(1)", [1, 1], var_moduleName, var_dir);
      throw new ReturnException(call615, returnTarget);
    };
    let applyMeth607 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth607.methodName = "apply";
    applyMeth607.paramCounts = [0];
    applyMeth607.paramNames = [];
    applyMeth607.definitionLine = 315;
    applyMeth607.definitionModule = "xmodule";
    block607.methods["apply"] = applyMeth607;
    var cases606 = [];
    setLineNumber(323);    // compilenode block
    var block616 = new GraceBlock(this, 323, 1);
    // call case 2: outer request
    var call617 = selfRequest(var_prelude, "EnvironmentException", [0]);
    block616.paramTypes = [call617];
    var matches618 = function(var_ex) {
      // call case 2: outer request
      var call619 = selfRequest(var_prelude, "EnvironmentException", [0]);
      if (!Grace_isTrue(request(call619, "matches(1)", [1], var_ex)))
          return false;
      return true;
    };
    block616.guard = matches618;
    block616.real = function block616(var_ex) {
      setLineNumber(324);    // compilenode string
      var string621 = new GraceString("Failed to find gct for ");
      var opresult622 = request(string621, "++(1)", [1], var_moduleName);
      var string623 = new GraceString("; ");
      var opresult624 = request(opresult622, "++(1)", [1], string623);
      setLineNumber(325);    // compilenode string
      var string625 = new GraceString("looked for a .js file containing a gct string, and a .gct file.");
      var opresult626 = request(opresult624, "++(1)", [1], string625);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call620 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(0), opresult626);
      setLineNumber(326);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call627 = request(var_sys, "exit(1)", [1], new GraceNum(2));
      return call627;
    };
    let applyMeth616 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth616.methodName = "apply(1)";
    applyMeth616.paramCounts = [1];
    applyMeth616.paramNames = ["ex"];
    applyMeth616.definitionLine = 323;
    applyMeth616.definitionModule = "xmodule";
    block616.methods["apply(1)"] = applyMeth616;
    let matchesMeth616 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth616.methodName = "matches(1)";
    matchesMeth616.paramCounts = [1];
    matchesMeth616.paramNames = ["ex"];
    matchesMeth616.definitionLine = 323;
    matchesMeth616.definitionModule = "xmodule";
    block616.methods["matches(1)"] = matchesMeth616;
    cases606.push(block616);
    setLineNumber(315);    // compiletrycatch
    var catchres606 = tryCatch(block607,cases606,false);
    return catchres606;
  };    // end of method extractGctFor(_)sourceDir(_)
  this.methods["extractGctFor(1)sourceDir(1)"] = func602;
  func602.methodName = "extractGctFor(1)sourceDir(1)";
  func602.paramCounts = [1, 1];
  func602.paramNames = ["moduleName", "dir"];
  func602.definitionLine = 311;
  func602.definitionModule = "xmodule";
  var func628 = function(argcv, var_moduleName, var_dir) {    // method extractGctFromJsFile(_)sourceDir(_), line 330
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("extractGctFromJsFile(_)sourceDir(_)", 0, numArgs - 2);
    }
    setLineNumber(335);    // compilenode string
    var string630 = new GraceString(".js");
    // call case 6: other requests
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call631 = request(var_filePath, "fromString(1)", [1], var_moduleName);
    var call629 = request(call631, "setExtension(1)", [1], string630);
    var var_sought = call629;
    setLineNumber(336);    // compilenode string
    var string633 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call634 = request(var_sys, "environ", [0]);
    var call632 = request(call634, "at(1)", [1], string633);
    var var_gmp = call632;
    setLineNumber(337);    // compilenode block
    var block636 = new GraceBlock(this, 337, 1);
    block636.guard = jsTrue;
    block636.real = function block636(var_l) {
      setLineNumber(338);    // compilenode call
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call637 = request(var_errormessages, "readableStringFrom(1)", [1], var_l);
      var var_rl = call637;
      setLineNumber(339);    // compilenode string
      var string639 = new GraceString("Can't find file ");
      if (var_sought === undefined) raiseUninitializedVariable("sought");
      var opresult640 = request(string639, "++(1)", [1], var_sought);
      var string641 = new GraceString(" for module ");
      var opresult642 = request(opresult640, "++(1)", [1], string641);
      var opresult643 = request(opresult642, "++(1)", [1], var_moduleName);
      var string644 = new GraceString("; looked in ");
      var opresult645 = request(opresult643, "++(1)", [1], string644);
      if (var_rl === undefined) raiseUninitializedVariable("rl");
      var opresult646 = request(opresult645, "++(1)", [1], var_rl);
      var string647 = new GraceString(".");
      var opresult648 = request(opresult646, "++(1)", [1], string647);
      // call case 6: other requests
      // call case 2: outer request
      var call649 = selfRequest(var_prelude, "EnvironmentException", [0]);
      var call638 = request(call649, "raise(1)", [1], opresult648);
      return call638;
    };
    let applyMeth636 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth636.methodName = "apply(1)";
    applyMeth636.paramCounts = [1];
    applyMeth636.paramNames = ["l"];
    applyMeth636.definitionLine = 337;
    applyMeth636.definitionModule = "xmodule";
    block636.methods["apply(1)"] = applyMeth636;
    let matchesMeth636 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth636.methodName = "matches(1)";
    matchesMeth636.paramCounts = [1];
    matchesMeth636.paramNames = ["l"];
    matchesMeth636.definitionLine = 337;
    matchesMeth636.definitionModule = "xmodule";
    block636.methods["matches(1)"] = matchesMeth636;
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call635 = request(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_sought, var_dir, var_gmp, block636);
    var var_filename = call635;
    setLineNumber(341);    // compilenode string
    var string651 = new GraceString("r");
    // call case 6: other requests
    if (var_io === undefined) raiseUninitializedVariable("io");
    var call650 = request(var_io, "open(2)", [2], var_filename, string651);
    var var_jsStream = call650;
    setLineNumber(342);    // compilenode num
    var var_maxLines = new GraceNum(10);
    setLineNumber(343);    // compilenode block
    var block653 = new GraceBlock(this, 343, 0);
    block653.guard = jsTrue;
    block653.real = function block653() {
      setLineNumber(343);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_jsStream === undefined) raiseUninitializedVariable("jsStream");
      var call655 = request(var_jsStream, "eof", [0]);
      var call654 = request(call655, "not", [0]);
      if (var_maxLines === undefined) raiseUninitializedVariable("maxLines");
      var opresult656 = request(var_maxLines, ">(1)", [1], new GraceNum(0));
      var opresult657 = request(call654, "&&(1)", [1], opresult656);
      return opresult657;
    };
    let applyMeth653 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth653.methodName = "apply";
    applyMeth653.paramCounts = [0];
    applyMeth653.paramNames = [];
    applyMeth653.definitionLine = 343;
    applyMeth653.definitionModule = "xmodule";
    block653.methods["apply"] = applyMeth653;
    var block658 = new GraceBlock(this, 343, 0);
    block658.guard = jsTrue;
    block658.real = function block658() {
      setLineNumber(344);    // compilenode member
      // call case 6: other requests
      if (var_jsStream === undefined) raiseUninitializedVariable("jsStream");
      var call659 = request(var_jsStream, "getline", [0]);
      var var_line = call659;
      var if660 = GraceDone;
      setLineNumber(345);    // compilenode string
      var string662 = new GraceString("  gctCache[");
      // call case 6: other requests
      if (var_line === undefined) raiseUninitializedVariable("line");
      var call661 = request(var_line, "startsWith(1)", [1], string662);
      if (Grace_isTrue(call661)) {
        setLineNumber(346);    // compilenode member
        // call case 6: other requests
        if (var_jsStream === undefined) raiseUninitializedVariable("jsStream");
        var call663 = request(var_jsStream, "close", [0]);
        setLineNumber(347);    // compilenode call
        if (var_line === undefined) raiseUninitializedVariable("line");
        // call case 2: outer request
        var call664 = selfRequest(importedModules["xmodule"], "splitJsString(1)", [1], var_line);
        throw new ReturnException(call664, returnTarget);
      }
      setLineNumber(349);    // compilenode op
      if (var_maxLines === undefined) raiseUninitializedVariable("maxLines");
      var diff665 = request(var_maxLines, "-(1)", [1], new GraceNum(1));
      var_maxLines = diff665;
      return GraceDone;
    };
    let applyMeth658 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth658.methodName = "apply";
    applyMeth658.paramCounts = [0];
    applyMeth658.paramNames = [];
    applyMeth658.definitionLine = 343;
    applyMeth658.definitionModule = "xmodule";
    block658.methods["apply"] = applyMeth658;
    // call case 2: outer request
    var call652 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block653, block658);
    setLineNumber(351);    // compilenode member
    // call case 6: other requests
    var call666 = request(var_jsStream, "close", [0]);
    setLineNumber(352);    // compilenode string
    var string668 = new GraceString("Can't find gct string in JS file ");
    var opresult669 = request(string668, "++(1)", [1], var_filename);
    var string670 = new GraceString("");
    var opresult671 = request(opresult669, "++(1)", [1], string670);
    // call case 6: other requests
    // call case 2: outer request
    var call672 = selfRequest(var_prelude, "EnvironmentException", [0]);
    var call667 = request(call672, "raise(1)", [1], opresult671);
    return call667;
  };    // end of method extractGctFromJsFile(_)sourceDir(_)
  this.methods["extractGctFromJsFile(1)sourceDir(1)"] = func628;
  func628.methodName = "extractGctFromJsFile(1)sourceDir(1)";
  func628.paramCounts = [1, 1];
  func628.paramNames = ["moduleName", "dir"];
  func628.definitionLine = 330;
  func628.definitionModule = "xmodule";
  var func673 = function(argcv, var_moduleName, var_dir) {    // method extractGctFromGctFile(_)sourceDir(_), line 355
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("extractGctFromGctFile(_)sourceDir(_)", 0, numArgs - 2);
    }
    setLineNumber(359);    // compilenode string
    var string675 = new GraceString(".gct");
    // call case 6: other requests
    // call case 6: other requests
    if (var_filePath === undefined) raiseUninitializedVariable("filePath");
    var call676 = request(var_filePath, "fromString(1)", [1], var_moduleName);
    var call674 = request(call676, "setExtension(1)", [1], string675);
    var var_sought = call674;
    setLineNumber(361);    // compilenode string
    var string678 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    if (var_sys === undefined) raiseUninitializedVariable("sys");
    var call679 = request(var_sys, "environ", [0]);
    var call677 = request(call679, "at(1)", [1], string678);
    var var_gmp = call677;
    setLineNumber(362);    // compilenode block
    var block681 = new GraceBlock(this, 362, 1);
    block681.guard = jsTrue;
    block681.real = function block681(var_l) {
      setLineNumber(363);    // compilenode call
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call682 = request(var_errormessages, "readableStringFrom(1)", [1], var_l);
      var var_rl = call682;
      setLineNumber(364);    // compilenode string
      var string684 = new GraceString("Can't find file ");
      if (var_sought === undefined) raiseUninitializedVariable("sought");
      var opresult685 = request(string684, "++(1)", [1], var_sought);
      var string686 = new GraceString(" for module ");
      var opresult687 = request(opresult685, "++(1)", [1], string686);
      var opresult688 = request(opresult687, "++(1)", [1], var_moduleName);
      var string689 = new GraceString("; looked in ");
      var opresult690 = request(opresult688, "++(1)", [1], string689);
      if (var_rl === undefined) raiseUninitializedVariable("rl");
      var opresult691 = request(opresult690, "++(1)", [1], var_rl);
      var string692 = new GraceString(".");
      var opresult693 = request(opresult691, "++(1)", [1], string692);
      // call case 6: other requests
      // call case 2: outer request
      var call694 = selfRequest(var_prelude, "EnvironmentException", [0]);
      var call683 = request(call694, "raise(1)", [1], opresult693);
      return call683;
    };
    let applyMeth681 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth681.methodName = "apply(1)";
    applyMeth681.paramCounts = [1];
    applyMeth681.paramNames = ["l"];
    applyMeth681.definitionLine = 362;
    applyMeth681.definitionModule = "xmodule";
    block681.methods["apply(1)"] = applyMeth681;
    let matchesMeth681 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth681.methodName = "matches(1)";
    matchesMeth681.paramCounts = [1];
    matchesMeth681.paramNames = ["l"];
    matchesMeth681.definitionLine = 362;
    matchesMeth681.definitionModule = "xmodule";
    block681.methods["matches(1)"] = matchesMeth681;
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call680 = request(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_sought, var_dir, var_gmp, block681);
    var var_filename = call680;
    setLineNumber(366);    // compilenode string
    var string696 = new GraceString("r");
    // call case 6: other requests
    if (var_io === undefined) raiseUninitializedVariable("io");
    var call695 = request(var_io, "open(2)", [2], var_filename, string696);
    var var_gctStream = call695;
    setLineNumber(367);    // compilenode array
    var array698 = new GraceSequence([]);
    // call case 2: outer request
    var call697 = selfRequest(var_prelude, "list(1)", [1], array698);
    var var_result = call697;
    setLineNumber(368);    // compilenode block
    var block700 = new GraceBlock(this, 368, 0);
    block700.guard = jsTrue;
    block700.real = function block700() {
      setLineNumber(368);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_gctStream === undefined) raiseUninitializedVariable("gctStream");
      var call702 = request(var_gctStream, "eof", [0]);
      var call701 = request(call702, "not", [0]);
      return call701;
    };
    let applyMeth700 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth700.methodName = "apply";
    applyMeth700.paramCounts = [0];
    applyMeth700.paramNames = [];
    applyMeth700.definitionLine = 368;
    applyMeth700.definitionModule = "xmodule";
    block700.methods["apply"] = applyMeth700;
    var block703 = new GraceBlock(this, 368, 0);
    block703.guard = jsTrue;
    block703.real = function block703() {
      setLineNumber(369);    // compilenode member
      // call case 6: other requests
      if (var_gctStream === undefined) raiseUninitializedVariable("gctStream");
      var call705 = request(var_gctStream, "getline", [0]);
      // call case 6: other requests
      if (var_result === undefined) raiseUninitializedVariable("result");
      var call704 = request(var_result, "push(1)", [1], call705);
      return call704;
    };
    let applyMeth703 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth703.methodName = "apply";
    applyMeth703.paramCounts = [0];
    applyMeth703.paramNames = [];
    applyMeth703.definitionLine = 368;
    applyMeth703.definitionModule = "xmodule";
    block703.methods["apply"] = applyMeth703;
    // call case 2: outer request
    var call699 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block700, block703);
    return var_result;
  };    // end of method extractGctFromGctFile(_)sourceDir(_)
  this.methods["extractGctFromGctFile(1)sourceDir(1)"] = func673;
  func673.methodName = "extractGctFromGctFile(1)sourceDir(1)";
  func673.paramCounts = [1, 1];
  func673.paramNames = ["moduleName", "dir"];
  func673.definitionLine = 355;
  func673.definitionModule = "xmodule";
  var func706 = function(argcv, var_jsLine) {    // method splitJsString(_), line 374
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("splitJsString(_)", 0, numArgs - 1);
    }
    assertTypeOrMsg(var_jsLine, var_String, "argument to request of `splitJsString(_)`", "String");
    setLineNumber(379);    // compilenode call
    var result = GraceDone;    // start native code from line 379
    
        var arg = var_jsLine._value;
        var keyStr = "\"] = ";
        var keyStart = arg.indexOf(keyStr);
        var stringLit = arg.substr(keyStart + keyStr.length);
        var gctString = eval(stringLit);
        var jsStringArray = gctString.split("\n");
        result = GraceList([]);
        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {
            callmethod(result, "push(1)", [1],
                new GraceString (jsStringArray[ix]));
        }   // end native code insertion
    return result;
  };    // end of method splitJsString(_)
  func706.paramTypes = [];
  func706.paramTypes.push([type_String, "jsLine"]);
  this.methods["splitJsString(1)"] = func706;
  func706.methodName = "splitJsString(1)";
  func706.paramCounts = [1];
  func706.paramNames = ["jsLine"];
  func706.definitionLine = 374;
  func706.definitionModule = "xmodule";
  var func707 = function(argcv, var_module) {    // method extractGctFromCache(_), line 393
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("extractGctFromCache(_)", 0, numArgs - 1);
    }
    setLineNumber(397);    // compilenode call
    var result = GraceDone;    // start native code from line 397
    var gctString = gctCache[var_module._value];
        var jsStringArray = gctString.split("\n");
        result = GraceList([]);
        for (var ix = 0, len = jsStringArray.length ; ix < len; ix++) {
            callmethod(result, "push(1)", [1],
                new GraceString (jsStringArray[ix]));
        }   // end native code insertion
    return result;
  };    // end of method extractGctFromCache(_)
  this.methods["extractGctFromCache(1)"] = func707;
  func707.methodName = "extractGctFromCache(1)";
  func707.paramCounts = [1];
  func707.paramNames = ["module"];
  func707.definitionLine = 393;
  func707.definitionModule = "xmodule";
  var func708 = function(argcv, var_modname, var_dict) {    // method writeGCT(_,_), line 407
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("writeGCT(_,_)", 0, numArgs - 2);
    }
    var if709 = GraceDone;
    setLineNumber(408);    // compilenode string
    var string711 = new GraceString("gctfile");
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call712 = request(var_util, "extensions", [0]);
    var call710 = request(call712, "containsKey(1)", [1], string711);
    if (Grace_isTrue(call710)) {
      setLineNumber(409);    // compilenode string
      var string714 = new GraceString("");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call715 = request(var_util, "outDir", [0]);
      var opresult716 = request(string714, "++(1)", [1], call715);
      var string717 = new GraceString("");
      var opresult718 = request(opresult716, "++(1)", [1], string717);
      var opresult719 = request(opresult718, "++(1)", [1], var_modname);
      var string720 = new GraceString(".gct");
      var opresult721 = request(opresult719, "++(1)", [1], string720);
      var string722 = new GraceString("w");
      // call case 6: other requests
      if (var_io === undefined) raiseUninitializedVariable("io");
      var call713 = request(var_io, "open(2)", [2], opresult721, string722);
      var var_fp = call713;
      setLineNumber(410);    // compilenode block
      var block724 = new GraceBlock(this, 410, 1);
      block724.guard = jsTrue;
      block724.real = function block724(var_b) {
        setLineNumber(411);    // compilenode string
        var string726 = new GraceString("");
        // call case 6: other requests
        var call727 = request(var_b, "key", [0]);
        var opresult728 = request(string726, "++(1)", [1], call727);
        var string729 = new GraceString(":\n");
        var opresult730 = request(opresult728, "++(1)", [1], string729);
        // call case 6: other requests
        if (var_fp === undefined) raiseUninitializedVariable("fp");
        var call725 = request(var_fp, "write(1)", [1], opresult730);
        setLineNumber(412);    // compilenode block
        var block732 = new GraceBlock(this, 412, 1);
        block732.guard = jsTrue;
        block732.real = function block732(var_v) {
          setLineNumber(413);    // compilenode string
          var string734 = new GraceString(" ");
          var opresult735 = request(string734, "++(1)", [1], var_v);
          var string736 = new GraceString("\n");
          var opresult737 = request(opresult735, "++(1)", [1], string736);
          // call case 6: other requests
          if (var_fp === undefined) raiseUninitializedVariable("fp");
          var call733 = request(var_fp, "write(1)", [1], opresult737);
          return call733;
        };
        let applyMeth732 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth732.methodName = "apply(1)";
        applyMeth732.paramCounts = [1];
        applyMeth732.paramNames = ["v"];
        applyMeth732.definitionLine = 412;
        applyMeth732.definitionModule = "xmodule";
        block732.methods["apply(1)"] = applyMeth732;
        let matchesMeth732 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth732.methodName = "matches(1)";
        matchesMeth732.paramCounts = [1];
        matchesMeth732.paramNames = ["v"];
        matchesMeth732.definitionLine = 412;
        matchesMeth732.definitionModule = "xmodule";
        block732.methods["matches(1)"] = matchesMeth732;
        // call case 6: other requests
        setLineNumber(412);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call740 = request(var_b, "value", [0]);
        // call case 6: other requests
        // call case 2: outer request
        var call741 = selfRequest(var_prelude, "list", [0]);
        var call739 = request(call741, "withAll(1)", [1], call740);
        var call738 = request(call739, "sort", [0]);
        var call731 = request(call738, "do(1)", [1], block732);
        return call731;
      };
      let applyMeth724 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth724.methodName = "apply(1)";
      applyMeth724.paramCounts = [1];
      applyMeth724.paramNames = ["b"];
      applyMeth724.definitionLine = 410;
      applyMeth724.definitionModule = "xmodule";
      block724.methods["apply(1)"] = applyMeth724;
      let matchesMeth724 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth724.methodName = "matches(1)";
      matchesMeth724.paramCounts = [1];
      matchesMeth724.paramNames = ["b"];
      matchesMeth724.definitionLine = 410;
      matchesMeth724.definitionModule = "xmodule";
      block724.methods["matches(1)"] = matchesMeth724;
      // call case 6: other requests
      setLineNumber(410);    // compilenode call
      if (var_keyCompare === undefined) raiseUninitializedVariable("keyCompare");
      // call case 6: other requests
      // call case 6: other requests
      var call744 = request(var_dict, "bindings", [0]);
      // call case 6: other requests
      // call case 2: outer request
      var call745 = selfRequest(var_prelude, "list", [0]);
      var call743 = request(call745, "withAll(1)", [1], call744);
      var call742 = request(call743, "sortBy(1)", [1], var_keyCompare);
      var call723 = request(call742, "do(1)", [1], block724);
      setLineNumber(416);    // compilenode member
      // call case 6: other requests
      if (var_fp === undefined) raiseUninitializedVariable("fp");
      var call746 = request(var_fp, "close", [0]);
      if709 = call746;
    }
    setLineNumber(418);    // compilenode call
    // call case 6: other requests
    if (var_gctCache === undefined) raiseUninitializedVariable("gctCache");
    var call747 = request(var_gctCache, "at(1)put(1)", [1, 1], var_modname, var_dict);
    return call747;
  };    // end of method writeGCT(_,_)
  func708.confidential = true;
  this.methods["writeGCT(2)"] = func708;
  func708.methodName = "writeGCT(2)";
  func708.paramCounts = [2];
  func708.paramNames = ["modname", "dict"];
  func708.definitionLine = 407;
  func708.definitionModule = "xmodule";
  var func748 = function(argcv, var_moduleObject) {    // method writeGctForModule(_), line 421
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("writeGctForModule(_)", 0, numArgs - 1);
    }
    setLineNumber(422);    // compilenode member
    // call case 6: other requests
    var call750 = request(var_moduleObject, "name", [0]);
    // call case 2: outer request
    var call751 = selfRequest(importedModules["xmodule"], "generateGctForModule(1)", [1], var_moduleObject);
    // call case 2: outer request
    var call749 = selfRequest(importedModules["xmodule"], "writeGCT(2)", [2], call750, call751);
    return call749;
  };    // end of method writeGctForModule(_)
  this.methods["writeGctForModule(1)"] = func748;
  func748.methodName = "writeGctForModule(1)";
  func748.paramCounts = [1];
  func748.paramNames = ["moduleObject"];
  func748.definitionLine = 421;
  func748.definitionModule = "xmodule";
  var func752 = function(argcv, var_gctDict) {    // method gctAsString(_), line 425
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("gctAsString(_)", 0, numArgs - 1);
    }
    setLineNumber(426);    // compilenode string
    var string753 = new GraceString("");
    var var_ret = string753;
    setLineNumber(427);    // compilenode block
    var block755 = new GraceBlock(this, 427, 1);
    block755.guard = jsTrue;
    block755.real = function block755(var_b) {
      setLineNumber(428);    // compilenode op
      if (var_ret === undefined) raiseUninitializedVariable("ret");
      var string756 = new GraceString("");
      // call case 6: other requests
      var call757 = request(var_b, "key", [0]);
      var opresult758 = request(string756, "++(1)", [1], call757);
      var string759 = new GraceString(":\n");
      var opresult760 = request(opresult758, "++(1)", [1], string759);
      var opresult761 = request(var_ret, "++(1)", [1], opresult760);
      var_ret = opresult761;
      setLineNumber(429);    // compilenode block
      var block763 = new GraceBlock(this, 429, 1);
      block763.guard = jsTrue;
      block763.real = function block763(var_v) {
        setLineNumber(430);    // compilenode op
        if (var_ret === undefined) raiseUninitializedVariable("ret");
        var string764 = new GraceString(" ");
        var opresult765 = request(string764, "++(1)", [1], var_v);
        var string766 = new GraceString("\n");
        var opresult767 = request(opresult765, "++(1)", [1], string766);
        var opresult768 = request(var_ret, "++(1)", [1], opresult767);
        var_ret = opresult768;
        return GraceDone;
      };
      let applyMeth763 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth763.methodName = "apply(1)";
      applyMeth763.paramCounts = [1];
      applyMeth763.paramNames = ["v"];
      applyMeth763.definitionLine = 429;
      applyMeth763.definitionModule = "xmodule";
      block763.methods["apply(1)"] = applyMeth763;
      let matchesMeth763 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth763.methodName = "matches(1)";
      matchesMeth763.paramCounts = [1];
      matchesMeth763.paramNames = ["v"];
      matchesMeth763.definitionLine = 429;
      matchesMeth763.definitionModule = "xmodule";
      block763.methods["matches(1)"] = matchesMeth763;
      // call case 6: other requests
      setLineNumber(429);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call771 = request(var_b, "value", [0]);
      // call case 6: other requests
      // call case 2: outer request
      var call772 = selfRequest(var_prelude, "list", [0]);
      var call770 = request(call772, "withAll(1)", [1], call771);
      var call769 = request(call770, "sort", [0]);
      var call762 = request(call769, "do(1)", [1], block763);
      return call762;
    };
    let applyMeth755 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth755.methodName = "apply(1)";
    applyMeth755.paramCounts = [1];
    applyMeth755.paramNames = ["b"];
    applyMeth755.definitionLine = 427;
    applyMeth755.definitionModule = "xmodule";
    block755.methods["apply(1)"] = applyMeth755;
    let matchesMeth755 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth755.methodName = "matches(1)";
    matchesMeth755.paramCounts = [1];
    matchesMeth755.paramNames = ["b"];
    matchesMeth755.definitionLine = 427;
    matchesMeth755.definitionModule = "xmodule";
    block755.methods["matches(1)"] = matchesMeth755;
    // call case 6: other requests
    setLineNumber(427);    // compilenode call
    if (var_keyCompare === undefined) raiseUninitializedVariable("keyCompare");
    // call case 6: other requests
    // call case 6: other requests
    var call775 = request(var_gctDict, "bindings", [0]);
    // call case 6: other requests
    // call case 2: outer request
    var call776 = selfRequest(var_prelude, "list", [0]);
    var call774 = request(call776, "withAll(1)", [1], call775);
    var call773 = request(call774, "sortBy(1)", [1], var_keyCompare);
    var call754 = request(call773, "do(1)", [1], block755);
    setLineNumber(433);    // compilenode return
    return var_ret;
  };    // end of method gctAsString(_)
  this.methods["gctAsString(1)"] = func752;
  func752.methodName = "gctAsString(1)";
  func752.paramCounts = [1];
  func752.paramNames = ["gctDict"];
  func752.definitionLine = 425;
  func752.definitionModule = "xmodule";
  var func777 = function(argcv, var_moduleObject) {    // method generateGctForModule(_), line 509
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("generateGctForModule(_)", 0, numArgs - 1);
    }
    setLineNumber(510);    // compilenode call
    // call case 2: outer request
    var call778 = selfRequest(importedModules["xmodule"], "buildGctFor(1)", [1], var_moduleObject);
    var var_gct = call778;
    setLineNumber(511);    // compilenode call
    // call case 2: outer request
    var call779 = selfRequest(importedModules["xmodule"], "addFreshMethodsOf(1)to(1)", [1, 1], var_moduleObject, var_gct);
    setLineNumber(512);    // compilenode return
    return var_gct;
  };    // end of method generateGctForModule(_)
  func777.confidential = true;
  this.methods["generateGctForModule(1)"] = func777;
  func777.methodName = "generateGctForModule(1)";
  func777.paramCounts = [1];
  func777.paramNames = ["moduleObject"];
  func777.definitionLine = 509;
  func777.definitionModule = "xmodule";
  var func780 = function(argcv, var_methNode) {    // method generateMethodHeader(_), line 515
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("generateMethodHeader(_)", 0, numArgs - 1);
    }
    setLineNumber(516);    // typecheck
    assertTypeOrMsg(new GraceNum(0), var_Number, "initial value of var depth", "Number");
    var var_depth = new GraceNum(0);
    setLineNumber(517);    // compilenode string
    var string781 = new GraceString("");
    assertTypeOrMsg(string781, var_String, "initial value of var s", "String");
    var var_s = string781;
    setLineNumber(518);    // compilenode vardec
    var var_firstPart = GraceTrue;
    setLineNumber(519);    // compilenode member
    // call case 6: other requests
    var call783 = request(var_methNode, "signature", [0]);
    var block784 = new GraceBlock(this, 519, 1);
    block784.guard = jsTrue;
    block784.real = function block784(var_part) {
      setLineNumber(520);    // compilenode op
      if (var_s === undefined) raiseUninitializedVariable("s");
      // call case 6: other requests
      var call785 = request(var_part, "name", [0]);
      var opresult786 = request(var_s, "++(1)", [1], call785);
      var_s = opresult786;
      var if787 = GraceDone;
      setLineNumber(521);    // compilenode op
      if (var_firstPart === undefined) raiseUninitializedVariable("firstPart");
      var block788 = new GraceBlock(this, 521, 0);
      block788.guard = jsTrue;
      block788.real = function block788() {
        setLineNumber(521);    // compilenode member
        // call case 6: other requests
        var call789 = request(var_methNode, "typeParams", [0]);
        var opresult790 = request(GraceFalse, "\u2260(1)", [1], call789);
        return opresult790;
      };
      let applyMeth788 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth788.methodName = "apply";
      applyMeth788.paramCounts = [0];
      applyMeth788.paramNames = [];
      applyMeth788.definitionLine = 521;
      applyMeth788.definitionModule = "xmodule";
      block788.methods["apply"] = applyMeth788;
      var opresult791 = request(var_firstPart, "&&(1)", [1], block788);
      if (Grace_isTrue(opresult791)) {
        setLineNumber(522);    // compilenode op
        if (var_s === undefined) raiseUninitializedVariable("s");
        if (var_depth === undefined) raiseUninitializedVariable("depth");
        var sum793 = request(var_depth, "+(1)", [1], new GraceNum(1));
        // call case 6: other requests
        // call case 6: other requests
        var call794 = request(var_methNode, "typeParams", [0]);
        var call792 = request(call794, "toGrace(1)", [1], sum793);
        var opresult795 = request(var_s, "++(1)", [1], call792);
        var_s = opresult795;
        if787 = GraceDone;
      }
      setLineNumber(524);    // compilenode bind
      var_firstPart = GraceFalse;
      var if796 = GraceDone;
      setLineNumber(525);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call798 = request(var_part, "params", [0]);
      var call797 = request(call798, "size", [0]);
      var opresult799 = request(call797, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult799)) {
        setLineNumber(526);    // compilenode op
        if (var_s === undefined) raiseUninitializedVariable("s");
        var string800 = new GraceString("(");
        var opresult801 = request(var_s, "++(1)", [1], string800);
        var_s = opresult801;
        setLineNumber(527);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call804 = request(var_part, "params", [0]);
        var call803 = request(call804, "indices", [0]);
        var block805 = new GraceBlock(this, 527, 1);
        block805.guard = jsTrue;
        block805.real = function block805(var_pnr) {
          setLineNumber(528);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          var call807 = request(var_part, "params", [0]);
          var call806 = request(call807, "at(1)", [1], var_pnr);
          var var_p = call806;
          setLineNumber(529);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          if (var_depth === undefined) raiseUninitializedVariable("depth");
          var sum809 = request(var_depth, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          if (var_p === undefined) raiseUninitializedVariable("p");
          var call808 = request(var_p, "toGrace(1)", [1], sum809);
          var opresult810 = request(var_s, "++(1)", [1], call808);
          var_s = opresult810;
          var if811 = GraceDone;
          setLineNumber(530);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call813 = request(var_part, "params", [0]);
          var call812 = request(call813, "size", [0]);
          var opresult814 = request(var_pnr, "<(1)", [1], call812);
          if (Grace_isTrue(opresult814)) {
            setLineNumber(531);    // compilenode op
            if (var_s === undefined) raiseUninitializedVariable("s");
            var string815 = new GraceString(", ");
            var opresult816 = request(var_s, "++(1)", [1], string815);
            var_s = opresult816;
            if811 = GraceDone;
          }
          return if811;
        };
        let applyMeth805 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth805.methodName = "apply(1)";
        applyMeth805.paramCounts = [1];
        applyMeth805.paramNames = ["pnr"];
        applyMeth805.definitionLine = 527;
        applyMeth805.definitionModule = "xmodule";
        block805.methods["apply(1)"] = applyMeth805;
        let matchesMeth805 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth805.methodName = "matches(1)";
        matchesMeth805.paramCounts = [1];
        matchesMeth805.paramNames = ["pnr"];
        matchesMeth805.definitionLine = 527;
        matchesMeth805.definitionModule = "xmodule";
        block805.methods["matches(1)"] = matchesMeth805;
        // call case 2: outer request
        var call802 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call803, block805);
        setLineNumber(534);    // compilenode op
        if (var_s === undefined) raiseUninitializedVariable("s");
        var string817 = new GraceString(")");
        var opresult818 = request(var_s, "++(1)", [1], string817);
        var_s = opresult818;
        if796 = GraceDone;
      }
      return if796;
    };
    let applyMeth784 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth784.methodName = "apply(1)";
    applyMeth784.paramCounts = [1];
    applyMeth784.paramNames = ["part"];
    applyMeth784.definitionLine = 519;
    applyMeth784.definitionModule = "xmodule";
    block784.methods["apply(1)"] = applyMeth784;
    let matchesMeth784 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth784.methodName = "matches(1)";
    matchesMeth784.paramCounts = [1];
    matchesMeth784.paramNames = ["part"];
    matchesMeth784.definitionLine = 519;
    matchesMeth784.definitionModule = "xmodule";
    block784.methods["matches(1)"] = matchesMeth784;
    // call case 2: outer request
    var call782 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call783, block784);
    var if819 = GraceDone;
    setLineNumber(537);    // compilenode member
    // call case 6: other requests
    var call820 = request(var_methNode, "dtype", [0]);
    var opresult821 = request(GraceFalse, "\u2260(1)", [1], call820);
    if (Grace_isTrue(opresult821)) {
      setLineNumber(538);    // compilenode op
      if (var_s === undefined) raiseUninitializedVariable("s");
      var string822 = new GraceString(" \u2192 ");
      // call case 6: other requests
      // call case 6: other requests
      var call824 = request(var_methNode, "dtype", [0]);
      var call823 = request(call824, "toGrace(1)", [1], new GraceNum(0));
      var opresult825 = request(string822, "++(1)", [1], call823);
      var string826 = new GraceString("");
      var opresult827 = request(opresult825, "++(1)", [1], string826);
      var opresult828 = request(var_s, "++(1)", [1], opresult827);
      var_s = opresult828;
      if819 = GraceDone;
    }
    setLineNumber(540);    // typecheck
    assertTypeOrMsg(var_s, var_String, "result of method generateMethodHeader(_)", "String");
    return var_s;
  };    // end of method generateMethodHeader(_)
  this.methods["generateMethodHeader(1)"] = func780;
  func780.methodName = "generateMethodHeader(1)";
  func780.paramCounts = [1];
  func780.paramNames = ["methNode"];
  func780.definitionLine = 515;
  func780.definitionModule = "xmodule";
  var func829 = function(argcv, var_module) {    // method buildGctFor(_), line 543
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("buildGctFor(_)", 0, numArgs - 1);
    }
    setLineNumber(544);    // compilenode member
    // call case 2: outer request
    var call830 = selfRequest(var_prelude, "emptyDictionary", [0]);
    var var_gct = call830;
    setLineNumber(545);    // compilenode member
    // call case 2: outer request
    var call831 = selfRequest(var_prelude, "emptyList", [0]);
    var var_classes = call831;
    setLineNumber(546);    // compilenode member
    // call case 2: outer request
    var call832 = selfRequest(var_prelude, "emptyList", [0]);
    var var_confidentials = call832;
    setLineNumber(547);    // compilenode member
    // call case 6: other requests
    // call case 2: outer request
    var call834 = selfRequest(var_prelude, "set", [0]);
    var call833 = request(call834, "empty", [0]);
    var var_meths = call833;
    setLineNumber(549);    // compilenode member
    // call case 2: outer request
    var call835 = selfRequest(var_prelude, "emptyList", [0]);
    var var_types = call835;
    setLineNumber(550);    // compilenode member
    // call case 2: outer request
    var call836 = selfRequest(var_prelude, "emptyList", [0]);
    var var_publicMethodTypes = call836;
    setLineNumber(551);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call838 = request(var_module, "theDialect", [0]);
    var call837 = request(call838, "moduleName", [0]);
    var var_theDialect = call837;
    setLineNumber(552);    // compilenode block
    var block840 = new GraceBlock(this, 552, 1);
    block840.guard = jsTrue;
    block840.real = function block840(var_p) {
      setLineNumber(553);    // compilenode member
      // call case 6: other requests
      var call842 = request(var_p, "providedNames", [0]);
      // call case 6: other requests
      if (var_meths === undefined) raiseUninitializedVariable("meths");
      var call841 = request(var_meths, "addAll(1)", [1], call842);
      return call841;
    };
    let applyMeth840 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth840.methodName = "apply(1)";
    applyMeth840.paramCounts = [1];
    applyMeth840.paramNames = ["p"];
    applyMeth840.definitionLine = 552;
    applyMeth840.definitionModule = "xmodule";
    block840.methods["apply(1)"] = applyMeth840;
    let matchesMeth840 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth840.methodName = "matches(1)";
    matchesMeth840.paramCounts = [1];
    matchesMeth840.paramNames = ["p"];
    matchesMeth840.definitionLine = 552;
    matchesMeth840.definitionModule = "xmodule";
    block840.methods["matches(1)"] = matchesMeth840;
    // call case 6: other requests
    var call839 = request(var_module, "parentsDo(1)", [1], block840);
    setLineNumber(555);    // compilenode member
    // call case 6: other requests
    var call844 = request(var_module, "value", [0]);
    var block845 = new GraceBlock(this, 555, 1);
    block845.guard = jsTrue;
    block845.real = function block845(var_v) {
      var if846 = GraceDone;
      setLineNumber(556);    // compilenode member
      // call case 6: other requests
      var call847 = request(var_v, "kind", [0]);
      var string848 = new GraceString("vardec");
      var opresult849 = request(call847, "==(1)", [1], string848);
      if (Grace_isTrue(opresult849)) {
        var if850 = GraceDone;
        setLineNumber(557);    // compilenode member
        // call case 6: other requests
        var call851 = request(var_v, "dtype", [0]);
        var opresult852 = request(GraceFalse, "\u2260(1)", [1], call851);
        if (Grace_isTrue(opresult852)) {
          // call case 6: other requests
          // call case 6: other requests
          var call854 = request(var_v, "dtype", [0]);
          var call853 = request(call854, "toGrace(1)", [1], new GraceNum(0));
          if850 = call853;
        } else {
          var string855 = new GraceString("Unknown");
          if850 = string855;
        }
        var var_gctType = if850;
        setLineNumber(558);    // compilenode string
        var string856 = new GraceString("");
        // call case 6: other requests
        // call case 6: other requests
        var call858 = request(var_v, "name", [0]);
        var call857 = request(call858, "value", [0]);
        var opresult859 = request(string856, "++(1)", [1], call857);
        var string860 = new GraceString(" \u2192 ");
        var opresult861 = request(opresult859, "++(1)", [1], string860);
        if (var_gctType === undefined) raiseUninitializedVariable("gctType");
        var opresult862 = request(opresult861, "++(1)", [1], var_gctType);
        var string863 = new GraceString("");
        var opresult864 = request(opresult862, "++(1)", [1], string863);
        var var_varRead = opresult864;
        assertTypeOrMsg(var_varRead, var_String, "value of def varRead", "String");
        var if865 = GraceDone;
        setLineNumber(559);    // compilenode member
        // call case 6: other requests
        var call866 = request(var_v, "isReadable", [0]);
        if (Grace_isTrue(call866)) {
          setLineNumber(560);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call869 = request(var_v, "name", [0]);
          var call868 = request(call869, "value", [0]);
          // call case 6: other requests
          if (var_meths === undefined) raiseUninitializedVariable("meths");
          var call867 = request(var_meths, "add(1)", [1], call868);
          setLineNumber(561);    // compilenode call
          if (var_varRead === undefined) raiseUninitializedVariable("varRead");
          // call case 6: other requests
          if (var_publicMethodTypes === undefined) raiseUninitializedVariable("publicMethodTypes");
          var call870 = request(var_publicMethodTypes, "push(1)", [1], var_varRead);
          if865 = call870;
        } else {
          setLineNumber(563);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call873 = request(var_v, "name", [0]);
          var call872 = request(call873, "value", [0]);
          // call case 6: other requests
          if (var_confidentials === undefined) raiseUninitializedVariable("confidentials");
          var call871 = request(var_confidentials, "push(1)", [1], call872);
          if865 = call871;
        }
        setLineNumber(565);    // compilenode string
        var string874 = new GraceString("");
        // call case 6: other requests
        // call case 6: other requests
        var call876 = request(var_v, "name", [0]);
        var call875 = request(call876, "value", [0]);
        var opresult877 = request(string874, "++(1)", [1], call875);
        var string878 = new GraceString(":=(");
        var opresult879 = request(opresult877, "++(1)", [1], string878);
        // call case 6: other requests
        // call case 6: other requests
        var call881 = request(var_v, "name", [0]);
        var call880 = request(call881, "value", [0]);
        var opresult882 = request(opresult879, "++(1)", [1], call880);
        var string883 = new GraceString("': ");
        var opresult884 = request(opresult882, "++(1)", [1], string883);
        if (var_gctType === undefined) raiseUninitializedVariable("gctType");
        var opresult885 = request(opresult884, "++(1)", [1], var_gctType);
        var string886 = new GraceString(") \u2192 Done");
        var opresult887 = request(opresult885, "++(1)", [1], string886);
        var var_varWrite = opresult887;
        assertTypeOrMsg(var_varWrite, var_String, "value of def varWrite", "String");
        var if888 = GraceDone;
        setLineNumber(566);    // compilenode member
        // call case 6: other requests
        var call889 = request(var_v, "isWritable", [0]);
        if (Grace_isTrue(call889)) {
          setLineNumber(567);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call892 = request(var_v, "name", [0]);
          var call891 = request(call892, "value", [0]);
          var string893 = new GraceString(":=(1)");
          var opresult894 = request(call891, "++(1)", [1], string893);
          // call case 6: other requests
          if (var_meths === undefined) raiseUninitializedVariable("meths");
          var call890 = request(var_meths, "add(1)", [1], opresult894);
          setLineNumber(568);    // compilenode call
          if (var_varWrite === undefined) raiseUninitializedVariable("varWrite");
          // call case 6: other requests
          if (var_publicMethodTypes === undefined) raiseUninitializedVariable("publicMethodTypes");
          var call895 = request(var_publicMethodTypes, "push(1)", [1], var_varWrite);
          if888 = call895;
        } else {
          setLineNumber(570);    // compilenode call
          if (var_varWrite === undefined) raiseUninitializedVariable("varWrite");
          // call case 6: other requests
          if (var_confidentials === undefined) raiseUninitializedVariable("confidentials");
          var call896 = request(var_confidentials, "push(1)", [1], var_varWrite);
          if888 = call896;
        }
        if846 = if888;
      } else {
        var if897 = GraceDone;
        setLineNumber(572);    // compilenode member
        // call case 6: other requests
        var call898 = request(var_v, "kind", [0]);
        var string899 = new GraceString("method");
        var opresult900 = request(call898, "==(1)", [1], string899);
        if (Grace_isTrue(opresult900)) {
          var if901 = GraceDone;
          setLineNumber(573);    // compilenode member
          // call case 6: other requests
          var call902 = request(var_v, "isPublic", [0]);
          if (Grace_isTrue(call902)) {
            setLineNumber(574);    // compilenode member
            // call case 6: other requests
            var call904 = request(var_v, "nameString", [0]);
            // call case 6: other requests
            if (var_meths === undefined) raiseUninitializedVariable("meths");
            var call903 = request(var_meths, "add(1)", [1], call904);
            setLineNumber(575);    // compilenode call
            // call case 2: outer request
            var call906 = selfRequest(importedModules["xmodule"], "generateMethodHeader(1)", [1], var_v);
            // call case 6: other requests
            if (var_publicMethodTypes === undefined) raiseUninitializedVariable("publicMethodTypes");
            var call905 = request(var_publicMethodTypes, "push(1)", [1], call906);
            if901 = call905;
          } else {
            setLineNumber(577);    // compilenode member
            // call case 6: other requests
            var call908 = request(var_v, "nameString", [0]);
            // call case 6: other requests
            if (var_confidentials === undefined) raiseUninitializedVariable("confidentials");
            var call907 = request(var_confidentials, "push(1)", [1], call908);
            if901 = call907;
          }
          if897 = if901;
        } else {
          var if909 = GraceDone;
          setLineNumber(579);    // compilenode member
          // call case 6: other requests
          var call910 = request(var_v, "kind", [0]);
          var string911 = new GraceString("typedec");
          var opresult912 = request(call910, "==(1)", [1], string911);
          if (Grace_isTrue(opresult912)) {
            var if913 = GraceDone;
            setLineNumber(580);    // compilenode member
            // call case 6: other requests
            var call914 = request(var_v, "isPublic", [0]);
            if (Grace_isTrue(call914)) {
              setLineNumber(581);    // compilenode member
              // call case 6: other requests
              var call916 = request(var_v, "nameString", [0]);
              // call case 6: other requests
              if (var_meths === undefined) raiseUninitializedVariable("meths");
              var call915 = request(var_meths, "add(1)", [1], call916);
              setLineNumber(582);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call919 = request(var_v, "name", [0]);
              var call918 = request(call919, "value", [0]);
              // call case 6: other requests
              if (var_types === undefined) raiseUninitializedVariable("types");
              var call917 = request(var_types, "push(1)", [1], call918);
              setLineNumber(583);    // compilenode array
              var array921 = new GraceSequence([]);
              // call case 2: outer request
              var call920 = selfRequest(var_prelude, "list(1)", [1], array921);
              var_methodtypes = call920;
              setLineNumber(584);    // compilenode call
              if (var_typeVisitor === undefined) raiseUninitializedVariable("typeVisitor");
              // call case 6: other requests
              var call922 = request(var_v, "accept(1)", [1], var_typeVisitor);
              setLineNumber(585);    // compilenode num
              // call case 6: other requests
              // call case 6: other requests
              var call924 = request(var_v, "name", [0]);
              var call923 = request(call924, "toGrace(1)", [1], new GraceNum(0));
              var var_typename = call923;
              var if925 = GraceDone;
              setLineNumber(586);    // compilenode member
              // call case 6: other requests
              var call926 = request(var_v, "typeParams", [0]);
              var opresult927 = request(call926, "\u2260(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult927)) {
                setLineNumber(587);    // compilenode op
                if (var_typename === undefined) raiseUninitializedVariable("typename");
                // call case 6: other requests
                var call928 = request(var_v, "typeParams", [0]);
                var opresult929 = request(var_typename, "++(1)", [1], call928);
                var_typename = opresult929;
                if925 = GraceDone;
              }
              setLineNumber(589);    // compilenode string
              var string931 = new GraceString("methodtypes-of:");
              if (var_typename === undefined) raiseUninitializedVariable("typename");
              var opresult932 = request(string931, "++(1)", [1], var_typename);
              var string933 = new GraceString("");
              var opresult934 = request(opresult932, "++(1)", [1], string933);
              if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
              // call case 6: other requests
              if (var_gct === undefined) raiseUninitializedVariable("gct");
              var call930 = request(var_gct, "at(1)put(1)", [1, 1], opresult934, var_methodtypes);
              if913 = call930;
            } else {
              setLineNumber(591);    // compilenode member
              // call case 6: other requests
              var call936 = request(var_v, "nameString", [0]);
              // call case 6: other requests
              if (var_confidentials === undefined) raiseUninitializedVariable("confidentials");
              var call935 = request(var_confidentials, "push(1)", [1], call936);
              if913 = call935;
            }
            if909 = if913;
          } else {
            var if937 = GraceDone;
            setLineNumber(593);    // compilenode member
            // call case 6: other requests
            var call938 = request(var_v, "kind", [0]);
            var string939 = new GraceString("defdec");
            var opresult940 = request(call938, "==(1)", [1], string939);
            if (Grace_isTrue(opresult940)) {
              var if941 = GraceDone;
              setLineNumber(594);    // compilenode member
              // call case 6: other requests
              var call942 = request(var_v, "isPublic", [0]);
              if (Grace_isTrue(call942)) {
                setLineNumber(595);    // compilenode member
                // call case 6: other requests
                var call944 = request(var_v, "nameString", [0]);
                // call case 6: other requests
                if (var_meths === undefined) raiseUninitializedVariable("meths");
                var call943 = request(var_meths, "add(1)", [1], call944);
                var if945 = GraceDone;
                setLineNumber(596);    // compilenode member
                // call case 6: other requests
                var call946 = request(var_v, "dtype", [0]);
                var opresult947 = request(GraceFalse, "\u2260(1)", [1], call946);
                if (Grace_isTrue(opresult947)) {
                  // call case 6: other requests
                  // call case 6: other requests
                  var call949 = request(var_v, "dtype", [0]);
                  var call948 = request(call949, "toGrace(1)", [1], new GraceNum(0));
                  if945 = call948;
                } else {
                  var string950 = new GraceString("Unknown");
                  if945 = string950;
                }
                var var_gctType = if945;
                setLineNumber(597);    // compilenode string
                var string952 = new GraceString("");
                // call case 6: other requests
                // call case 6: other requests
                var call954 = request(var_v, "name", [0]);
                var call953 = request(call954, "value", [0]);
                var opresult955 = request(string952, "++(1)", [1], call953);
                var string956 = new GraceString(" \u2192 ");
                var opresult957 = request(opresult955, "++(1)", [1], string956);
                if (var_gctType === undefined) raiseUninitializedVariable("gctType");
                var opresult958 = request(opresult957, "++(1)", [1], var_gctType);
                var string959 = new GraceString("");
                var opresult960 = request(opresult958, "++(1)", [1], string959);
                // call case 6: other requests
                if (var_publicMethodTypes === undefined) raiseUninitializedVariable("publicMethodTypes");
                var call951 = request(var_publicMethodTypes, "push(1)", [1], opresult960);
                if941 = call951;
              } else {
                setLineNumber(599);    // compilenode member
                // call case 6: other requests
                var call962 = request(var_v, "nameString", [0]);
                // call case 6: other requests
                if (var_confidentials === undefined) raiseUninitializedVariable("confidentials");
                var call961 = request(var_confidentials, "push(1)", [1], call962);
                if941 = call961;
              }
              var if963 = GraceDone;
              setLineNumber(601);    // compilenode string
              var string965 = new GraceString("parent");
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call964 = request(var_ast, "findAnnotation(2)", [2], var_v, string965);
              if (Grace_isTrue(call964)) {
                setLineNumber(602);    // compilenode block
                var block967 = new GraceBlock(this, 602, 1);
                block967.guard = jsTrue;
                block967.real = function block967(var_m) {
                  setLineNumber(603);    // compilenode call
                  // call case 6: other requests
                  if (var_meths === undefined) raiseUninitializedVariable("meths");
                  var call968 = request(var_meths, "add(1)", [1], var_m);
                  return call968;
                };
                let applyMeth967 = function apply_1 (argcv, ...args) {
                    if (this.guard.apply(this.receiver, args))
                        return this.real.apply(this.receiver, args);
                    badBlockArgs.apply(this, args);
                };
                applyMeth967.methodName = "apply(1)";
                applyMeth967.paramCounts = [1];
                applyMeth967.paramNames = ["m"];
                applyMeth967.definitionLine = 602;
                applyMeth967.definitionModule = "xmodule";
                block967.methods["apply(1)"] = applyMeth967;
                let matchesMeth967 = function matches_1 (argcv, ...args) {
                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                };
                matchesMeth967.methodName = "matches(1)";
                matchesMeth967.paramCounts = [1];
                matchesMeth967.paramNames = ["m"];
                matchesMeth967.definitionLine = 602;
                matchesMeth967.definitionModule = "xmodule";
                block967.methods["matches(1)"] = matchesMeth967;
                // call case 6: other requests
                setLineNumber(602);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call970 = request(var_v, "scope", [0]);
                var call969 = request(call970, "elements", [0]);
                var call966 = request(call969, "keysDo(1)", [1], block967);
                if963 = call966;
              }
              var if971 = GraceDone;
              setLineNumber(606);    // compilenode member
              // call case 6: other requests
              var call972 = request(var_v, "returnsObject", [0]);
              if (Grace_isTrue(call972)) {
                setLineNumber(607);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call974 = request(var_v, "returnedObjectScope", [0]);
                var call973 = request(call974, "node", [0]);
                var var_ob = call973;
                setLineNumber(608);    // compilenode array
                var array976 = new GraceSequence([]);
                // call case 2: outer request
                var call975 = selfRequest(var_prelude, "list(1)", [1], array976);
                var var_obConstructors = call975;
                var if977 = GraceDone;
                setLineNumber(609);    // compilenode member
                // call case 6: other requests
                if (var_ob === undefined) raiseUninitializedVariable("ob");
                var call978 = request(var_ob, "isObject", [0]);
                if (Grace_isTrue(call978)) {
                  setLineNumber(610);    // compilenode member
                  // call case 6: other requests
                  if (var_ob === undefined) raiseUninitializedVariable("ob");
                  var call980 = request(var_ob, "value", [0]);
                  var block981 = new GraceBlock(this, 610, 1);
                  block981.guard = jsTrue;
                  block981.real = function block981(var_nd) {
                    var if982 = GraceDone;
                    setLineNumber(611);    // compilenode member
                    // call case 6: other requests
                    var call983 = request(var_nd, "isClass", [0]);
                    if (Grace_isTrue(call983)) {
                      setLineNumber(612);    // compilenode member
                      // call case 6: other requests
                      var call984 = request(var_nd, "nameString", [0]);
                      var var_factMethNm = call984;
                      setLineNumber(613);    // compilenode call
                      if (var_factMethNm === undefined) raiseUninitializedVariable("factMethNm");
                      // call case 6: other requests
                      if (var_obConstructors === undefined) raiseUninitializedVariable("obConstructors");
                      var call985 = request(var_obConstructors, "push(1)", [1], var_factMethNm);
                      setLineNumber(614);    // compilenode member
                      // call case 2: outer request
                      var call986 = selfRequest(var_prelude, "emptyList", [0]);
                      var var_exportedMethods = call986;
                      setLineNumber(615);    // compilenode block
                      var block988 = new GraceBlock(this, 615, 2);
                      block988.guard = jsTrue;
                      block988.real = function block988(var_key, var_knd) {
                        var if989 = GraceDone;
                        setLineNumber(616);    // compilenode member
                        // call case 6: other requests
                        var call990 = request(var_knd, "forGct", [0]);
                        if (Grace_isTrue(call990)) {
                          // call case 6: other requests
                          if (var_exportedMethods === undefined) raiseUninitializedVariable("exportedMethods");
                          var call991 = request(var_exportedMethods, "add(1)", [1], var_key);
                          if989 = call991;
                        }
                        return if989;
                      };
                      let applyMeth988 = function apply_2 (argcv, ...args) {
                          if (this.guard.apply(this.receiver, args))
                              return this.real.apply(this.receiver, args);
                          badBlockArgs.apply(this, args);
                      };
                      applyMeth988.methodName = "apply(2)";
                      applyMeth988.paramCounts = [2];
                      applyMeth988.paramNames = ["key", "knd"];
                      applyMeth988.definitionLine = 615;
                      applyMeth988.definitionModule = "xmodule";
                      block988.methods["apply(2)"] = applyMeth988;
                      let matchesMeth988 = function matches_2 (argcv, ...args) {
                          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                      };
                      matchesMeth988.methodName = "matches(2)";
                      matchesMeth988.paramCounts = [2];
                      matchesMeth988.paramNames = ["key", "knd"];
                      matchesMeth988.definitionLine = 615;
                      matchesMeth988.definitionModule = "xmodule";
                      block988.methods["matches(2)"] = matchesMeth988;
                      // call case 6: other requests
                      setLineNumber(615);    // compilenode call
                      if (var_factMethNm === undefined) raiseUninitializedVariable("factMethNm");
                      // call case 6: other requests
                      // call case 6: other requests
                      if (var_ob === undefined) raiseUninitializedVariable("ob");
                      var call993 = request(var_ob, "scope", [0]);
                      var call992 = request(call993, "getScope(1)", [1], var_factMethNm);
                      var call987 = request(call992, "keysAndKindsDo(1)", [1], block988);
                      setLineNumber(618);    // compilenode string
                      var string995 = new GraceString("methods-of:");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call997 = request(var_v, "name", [0]);
                      var call996 = request(call997, "value", [0]);
                      var opresult998 = request(string995, "++(1)", [1], call996);
                      var string999 = new GraceString(".");
                      var opresult1000 = request(opresult998, "++(1)", [1], string999);
                      if (var_factMethNm === undefined) raiseUninitializedVariable("factMethNm");
                      var opresult1001 = request(opresult1000, "++(1)", [1], var_factMethNm);
                      var string1002 = new GraceString("");
                      var opresult1003 = request(opresult1001, "++(1)", [1], string1002);
                      setLineNumber(619);    // compilenode member
                      // call case 6: other requests
                      if (var_exportedMethods === undefined) raiseUninitializedVariable("exportedMethods");
                      var call1004 = request(var_exportedMethods, "sort", [0]);
                      // call case 6: other requests
                      if (var_gct === undefined) raiseUninitializedVariable("gct");
                      var call994 = request(var_gct, "at(1)put(1)", [1, 1], opresult1003, call1004);
                      if982 = call994;
                    }
                    return if982;
                  };
                  let applyMeth981 = function apply_1 (argcv, ...args) {
                      if (this.guard.apply(this.receiver, args))
                          return this.real.apply(this.receiver, args);
                      badBlockArgs.apply(this, args);
                  };
                  applyMeth981.methodName = "apply(1)";
                  applyMeth981.paramCounts = [1];
                  applyMeth981.paramNames = ["nd"];
                  applyMeth981.definitionLine = 610;
                  applyMeth981.definitionModule = "xmodule";
                  block981.methods["apply(1)"] = applyMeth981;
                  let matchesMeth981 = function matches_1 (argcv, ...args) {
                      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                  };
                  matchesMeth981.methodName = "matches(1)";
                  matchesMeth981.paramCounts = [1];
                  matchesMeth981.paramNames = ["nd"];
                  matchesMeth981.definitionLine = 610;
                  matchesMeth981.definitionModule = "xmodule";
                  block981.methods["matches(1)"] = matchesMeth981;
                  // call case 2: outer request
                  var call979 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call980, block981);
                  if977 = call979;
                }
                var if1005 = GraceDone;
                setLineNumber(623);    // compilenode member
                // call case 6: other requests
                if (var_obConstructors === undefined) raiseUninitializedVariable("obConstructors");
                var call1006 = request(var_obConstructors, "size", [0]);
                var opresult1007 = request(call1006, ">(1)", [1], new GraceNum(0));
                if (Grace_isTrue(opresult1007)) {
                  setLineNumber(624);    // compilenode string
                  var string1009 = new GraceString("constructors-of:");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1011 = request(var_v, "name", [0]);
                  var call1010 = request(call1011, "value", [0]);
                  var opresult1012 = request(string1009, "++(1)", [1], call1010);
                  var string1013 = new GraceString("");
                  var opresult1014 = request(opresult1012, "++(1)", [1], string1013);
                  if (var_obConstructors === undefined) raiseUninitializedVariable("obConstructors");
                  // call case 6: other requests
                  if (var_gct === undefined) raiseUninitializedVariable("gct");
                  var call1008 = request(var_gct, "at(1)put(1)", [1, 1], opresult1014, var_obConstructors);
                  setLineNumber(626);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1017 = request(var_v, "name", [0]);
                  var call1016 = request(call1017, "value", [0]);
                  // call case 6: other requests
                  if (var_classes === undefined) raiseUninitializedVariable("classes");
                  var call1015 = request(var_classes, "push(1)", [1], call1016);
                  if1005 = call1015;
                }
                if971 = if1005;
              }
              if937 = if971;
            }
            if909 = if937;
          }
          if897 = if909;
        }
        if846 = if897;
      }
      return if846;
    };
    let applyMeth845 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth845.methodName = "apply(1)";
    applyMeth845.paramCounts = [1];
    applyMeth845.paramNames = ["v"];
    applyMeth845.definitionLine = 555;
    applyMeth845.definitionModule = "xmodule";
    block845.methods["apply(1)"] = applyMeth845;
    let matchesMeth845 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth845.methodName = "matches(1)";
    matchesMeth845.paramCounts = [1];
    matchesMeth845.paramNames = ["v"];
    matchesMeth845.definitionLine = 555;
    matchesMeth845.definitionModule = "xmodule";
    block845.methods["matches(1)"] = matchesMeth845;
    // call case 2: outer request
    var call843 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call844, block845);
    setLineNumber(631);    // compilenode string
    var string1019 = new GraceString("classes");
    // call case 6: other requests
    var call1020 = request(var_classes, "sort", [0]);
    // call case 6: other requests
    var call1018 = request(var_gct, "at(1)put(1)", [1, 1], string1019, call1020);
    setLineNumber(632);    // compilenode string
    var string1022 = new GraceString("confidential");
    // call case 6: other requests
    var call1023 = request(var_confidentials, "sort", [0]);
    // call case 6: other requests
    var call1021 = request(var_gct, "at(1)put(1)", [1, 1], string1022, call1023);
    setLineNumber(633);    // compilenode string
    var string1025 = new GraceString("modules");
    // call case 6: other requests
    // call case 6: other requests
    var call1028 = request(var_module, "imports", [0]);
    // call case 6: other requests
    // call case 2: outer request
    var call1029 = selfRequest(var_prelude, "list", [0]);
    var call1027 = request(call1029, "withAll(1)", [1], call1028);
    var call1026 = request(call1027, "sorted", [0]);
    // call case 6: other requests
    var call1024 = request(var_gct, "at(1)put(1)", [1, 1], string1025, call1026);
    setLineNumber(634);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call1031 = request(var_util, "infile", [0]);
    var call1030 = request(call1031, "pathname", [0]);
    var var_p = call1030;
    setLineNumber(635);    // compilenode string
    var string1033 = new GraceString("path");
    var if1035 = GraceDone;
    // call case 6: other requests
    var call1036 = request(var_p, "isEmpty", [0]);
    if (Grace_isTrue(call1036)) {
      setLineNumber(636);    // compilenode string
      var string1037 = new GraceString("");
      if1035 = string1037;
    } else {
      var if1038 = GraceDone;
      setLineNumber(637);    // compilenode string
      var string1040 = new GraceString("/");
      // call case 6: other requests
      if (var_p === undefined) raiseUninitializedVariable("p");
      var call1039 = request(var_p, "startsWith(1)", [1], string1040);
      if (Grace_isTrue(call1039)) {
        if (var_p === undefined) raiseUninitializedVariable("p");
        if1038 = var_p;
      } else {
        setLineNumber(640);    // compilenode call
        if (var_p === undefined) raiseUninitializedVariable("p");
        // call case 6: other requests
        if (var_io === undefined) raiseUninitializedVariable("io");
        var call1041 = request(var_io, "realpath(1)", [1], var_p);
        if1038 = call1041;
      }
      if1035 = if1038;
    }
    var array1034 = new GraceSequence([if1035]);
    // call case 6: other requests
    var call1032 = request(var_gct, "at(1)put(1)", [1, 1], string1033, array1034);
    setLineNumber(642);    // compilenode string
    var string1043 = new GraceString("public");
    // call case 6: other requests
    // call case 6: other requests
    // call case 2: outer request
    var call1046 = selfRequest(var_prelude, "list", [0]);
    var call1045 = request(call1046, "withAll(1)", [1], var_meths);
    var call1044 = request(call1045, "sort", [0]);
    // call case 6: other requests
    var call1042 = request(var_gct, "at(1)put(1)", [1, 1], string1043, call1044);
    setLineNumber(643);    // compilenode string
    var string1048 = new GraceString("publicMethodTypes");
    // call case 6: other requests
    var call1049 = request(var_publicMethodTypes, "sort", [0]);
    // call case 6: other requests
    var call1047 = request(var_gct, "at(1)put(1)", [1, 1], string1048, call1049);
    setLineNumber(644);    // compilenode string
    var string1051 = new GraceString("types");
    // call case 6: other requests
    var call1052 = request(var_types, "sort", [0]);
    // call case 6: other requests
    var call1050 = request(var_gct, "at(1)put(1)", [1, 1], string1051, call1052);
    setLineNumber(645);    // compilenode string
    var string1054 = new GraceString("dialect");
    var if1055 = GraceDone;
    setLineNumber(646);    // compilenode string
    var string1056 = new GraceString("none");
    var opresult1057 = request(var_theDialect, "==(1)", [1], string1056);
    if (Grace_isTrue(opresult1057)) {
      var array1058 = new GraceSequence([]);
      if1055 = array1058;
    } else {
      if (var_theDialect === undefined) raiseUninitializedVariable("theDialect");
      var array1059 = new GraceSequence([var_theDialect]);
      if1055 = array1059;
    }
    // call case 6: other requests
    var call1053 = request(var_gct, "at(1)put(1)", [1, 1], string1054, if1055);
    return var_gct;
  };    // end of method buildGctFor(_)
  this.methods["buildGctFor(1)"] = func829;
  func829.methodName = "buildGctFor(1)";
  func829.paramCounts = [1];
  func829.paramNames = ["module"];
  func829.definitionLine = 543;
  func829.definitionModule = "xmodule";
  var func1060 = function(argcv, var_moduleObject, var_gct) {    // method addFreshMethodsOf(_)to(_), line 651
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("addFreshMethodsOf(_)to(_)", 0, numArgs - 2);
    }
    setLineNumber(658);    // compilenode array
    var array1062 = new GraceSequence([]);
    // call case 2: outer request
    var call1061 = selfRequest(var_prelude, "list(1)", [1], array1062);
    var var_freshmeths = call1061;
    setLineNumber(659);    // compilenode member
    // call case 6: other requests
    var call1064 = request(var_moduleObject, "value", [0]);
    var block1065 = new GraceBlock(this, 659, 1);
    block1065.guard = jsTrue;
    block1065.real = function block1065(var_node) {
      var if1066 = GraceDone;
      setLineNumber(660);    // compilenode member
      // call case 6: other requests
      var call1067 = request(var_node, "isClass", [0]);
      if (Grace_isTrue(call1067)) {
        setLineNumber(661);    // compilenode call
        if (var_freshmeths === undefined) raiseUninitializedVariable("freshmeths");
        // call case 2: outer request
        var call1068 = selfRequest(importedModules["xmodule"], "addFreshMethod(1)to(1)for(1)", [1, 1, 1], var_node, var_freshmeths, var_gct);
        if1066 = call1068;
      }
      return if1066;
    };
    let applyMeth1065 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1065.methodName = "apply(1)";
    applyMeth1065.paramCounts = [1];
    applyMeth1065.paramNames = ["node"];
    applyMeth1065.definitionLine = 659;
    applyMeth1065.definitionModule = "xmodule";
    block1065.methods["apply(1)"] = applyMeth1065;
    let matchesMeth1065 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1065.methodName = "matches(1)";
    matchesMeth1065.paramCounts = [1];
    matchesMeth1065.paramNames = ["node"];
    matchesMeth1065.definitionLine = 659;
    matchesMeth1065.definitionModule = "xmodule";
    block1065.methods["matches(1)"] = matchesMeth1065;
    // call case 2: outer request
    var call1063 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1064, block1065);
    setLineNumber(664);    // compilenode string
    var string1070 = new GraceString("fresh-methods");
    // call case 6: other requests
    var call1069 = request(var_gct, "at(1)put(1)", [1, 1], string1070, var_freshmeths);
    return call1069;
  };    // end of method addFreshMethodsOf(_)to(_)
  func1060.confidential = true;
  this.methods["addFreshMethodsOf(1)to(1)"] = func1060;
  func1060.methodName = "addFreshMethodsOf(1)to(1)";
  func1060.paramCounts = [1, 1];
  func1060.paramNames = ["moduleObject", "gct"];
  func1060.definitionLine = 651;
  func1060.definitionModule = "xmodule";
  var func1071 = function(argcv, var_node, var_freshlist, var_gct) {    // method addFreshMethod(_)to(_)for(_), line 667
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("addFreshMethod(_)to(_)for(_)", 0, numArgs - 3);
    }
    setLineNumber(668);    // compilenode member
    // call case 6: other requests
    var call1072 = request(var_node, "nameString", [0]);
    var var_methName = call1072;
    setLineNumber(669);    // compilenode call
    // call case 6: other requests
    var call1073 = request(var_freshlist, "push(1)", [1], var_methName);
    setLineNumber(670);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1075 = request(var_node, "body", [0]);
    var call1074 = request(call1075, "last", [0]);
    var var_freshMethExpression = call1074;
    var if1076 = GraceDone;
    setLineNumber(671);    // compilenode member
    // call case 6: other requests
    var call1077 = request(var_freshMethExpression, "isObject", [0]);
    if (Grace_isTrue(call1077)) {
      setLineNumber(672);    // compilenode member
      // call case 2: outer request
      var call1078 = selfRequest(var_prelude, "emptyList", [0]);
      var var_exportedMethods = call1078;
      setLineNumber(673);    // compilenode block
      var block1080 = new GraceBlock(this, 673, 2);
      block1080.guard = jsTrue;
      block1080.real = function block1080(var_key, var_knd) {
        var if1081 = GraceDone;
        setLineNumber(674);    // compilenode member
        // call case 6: other requests
        var call1082 = request(var_knd, "forGct", [0]);
        if (Grace_isTrue(call1082)) {
          // call case 6: other requests
          if (var_exportedMethods === undefined) raiseUninitializedVariable("exportedMethods");
          var call1083 = request(var_exportedMethods, "add(1)", [1], var_key);
          if1081 = call1083;
        }
        return if1081;
      };
      let applyMeth1080 = function apply_2 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1080.methodName = "apply(2)";
      applyMeth1080.paramCounts = [2];
      applyMeth1080.paramNames = ["key", "knd"];
      applyMeth1080.definitionLine = 673;
      applyMeth1080.definitionModule = "xmodule";
      block1080.methods["apply(2)"] = applyMeth1080;
      let matchesMeth1080 = function matches_2 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1080.methodName = "matches(2)";
      matchesMeth1080.paramCounts = [2];
      matchesMeth1080.paramNames = ["key", "knd"];
      matchesMeth1080.definitionLine = 673;
      matchesMeth1080.definitionModule = "xmodule";
      block1080.methods["matches(2)"] = matchesMeth1080;
      // call case 6: other requests
      setLineNumber(673);    // compilenode member
      // call case 6: other requests
      if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
      var call1084 = request(var_freshMethExpression, "scope", [0]);
      var call1079 = request(call1084, "keysAndKindsDo(1)", [1], block1080);
      setLineNumber(676);    // compilenode string
      var string1086 = new GraceString("fresh:");
      if (var_methName === undefined) raiseUninitializedVariable("methName");
      var opresult1087 = request(string1086, "++(1)", [1], var_methName);
      var string1088 = new GraceString("");
      var opresult1089 = request(opresult1087, "++(1)", [1], string1088);
      // call case 6: other requests
      if (var_exportedMethods === undefined) raiseUninitializedVariable("exportedMethods");
      var call1090 = request(var_exportedMethods, "sort", [0]);
      // call case 6: other requests
      var call1085 = request(var_gct, "at(1)put(1)", [1, 1], opresult1089, call1090);
      if1076 = call1085;
    } else {
      var if1091 = GraceDone;
      setLineNumber(677);    // compilenode member
      // call case 6: other requests
      if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
      var call1092 = request(var_freshMethExpression, "isCall", [0]);
      if (Grace_isTrue(call1092)) {
        setLineNumber(681);    // compilenode member
        // call case 6: other requests
        if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
        var call1093 = request(var_freshMethExpression, "nameString", [0]);
        var var_requestedName = call1093;
        var if1094 = GraceDone;
        setLineNumber(682);    // compilenode op
        if (var_requestedName === undefined) raiseUninitializedVariable("requestedName");
        var string1095 = new GraceString("copy");
        var opresult1096 = request(var_requestedName, "==(1)", [1], string1095);
        if (Grace_isTrue(opresult1096)) {
          setLineNumber(683);    // compilenode string
          var string1098 = new GraceString("fresh:");
          if (var_methName === undefined) raiseUninitializedVariable("methName");
          var opresult1099 = request(string1098, "++(1)", [1], var_methName);
          var string1100 = new GraceString("");
          var opresult1101 = request(opresult1099, "++(1)", [1], string1100);
          var string1103 = new GraceString("public");
          // call case 6: other requests
          var call1102 = request(var_gct, "at(1)", [1], string1103);
          // call case 6: other requests
          var call1097 = request(var_gct, "at(1)put(1)", [1, 1], opresult1101, call1102);
          if1094 = call1097;
        } else {
          var if1104 = GraceDone;
          setLineNumber(684);    // compilenode op
          if (var_requestedName === undefined) raiseUninitializedVariable("requestedName");
          var string1105 = new GraceString("clone(1)");
          var opresult1106 = request(var_requestedName, "==(1)", [1], string1105);
          if (Grace_isTrue(opresult1106)) {
            setLineNumber(685);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
            var call1110 = request(var_freshMethExpression, "parts", [0]);
            var call1109 = request(call1110, "first", [0]);
            var call1108 = request(call1109, "args", [0]);
            var call1107 = request(call1108, "first", [0]);
            var var_cloneArg = call1107;
            var if1111 = GraceDone;
            setLineNumber(686);    // compilenode member
            // call case 6: other requests
            if (var_cloneArg === undefined) raiseUninitializedVariable("cloneArg");
            var call1112 = request(var_cloneArg, "isSelf", [0]);
            if (Grace_isTrue(call1112)) {
              setLineNumber(687);    // compilenode string
              var string1114 = new GraceString("fresh:");
              if (var_methName === undefined) raiseUninitializedVariable("methName");
              var opresult1115 = request(string1114, "++(1)", [1], var_methName);
              var string1116 = new GraceString("");
              var opresult1117 = request(opresult1115, "++(1)", [1], string1116);
              var string1119 = new GraceString("public");
              // call case 6: other requests
              var call1118 = request(var_gct, "at(1)", [1], string1119);
              // call case 6: other requests
              var call1113 = request(var_gct, "at(1)put(1)", [1, 1], opresult1117, call1118);
              if1111 = call1113;
            } else {
              setLineNumber(689);    // compilenode string
              var string1121 = new GraceString("fresh:");
              if (var_methName === undefined) raiseUninitializedVariable("methName");
              var opresult1122 = request(string1121, "++(1)", [1], var_methName);
              var string1123 = new GraceString("");
              var opresult1124 = request(opresult1122, "++(1)", [1], string1123);
              setLineNumber(690);    // compilenode string
              var string1126 = new GraceString("methods-of:");
              // call case 6: other requests
              if (var_cloneArg === undefined) raiseUninitializedVariable("cloneArg");
              var call1127 = request(var_cloneArg, "toGrace(1)", [1], new GraceNum(0));
              var opresult1128 = request(string1126, "++(1)", [1], call1127);
              var string1129 = new GraceString("");
              var opresult1130 = request(opresult1128, "++(1)", [1], string1129);
              var block1131 = new GraceBlock(this, 690, 0);
              block1131.guard = jsTrue;
              block1131.real = function block1131() {
                setLineNumber(692);    // compilenode string
                var string1133 = new GraceString("unrecognized fresh method tail-call:\n");
                setLineNumber(693);    // compilenode num
                // call case 6: other requests
                if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
                var call1134 = request(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
                var opresult1135 = request(string1133, "++(1)", [1], call1134);
                var string1136 = new GraceString("\n");
                var opresult1137 = request(opresult1135, "++(1)", [1], string1136);
                setLineNumber(694);    // compilenode string
                var string1138 = new GraceString("Can't find methods-of:");
                // call case 6: other requests
                if (var_cloneArg === undefined) raiseUninitializedVariable("cloneArg");
                var call1139 = request(var_cloneArg, "toGrace(1)", [1], new GraceNum(0));
                var opresult1140 = request(string1138, "++(1)", [1], call1139);
                var string1141 = new GraceString(" in gct.");
                var opresult1142 = request(opresult1140, "++(1)", [1], string1141);
                var opresult1143 = request(opresult1137, "++(1)", [1], opresult1142);
                // call case 6: other requests
                setLineNumber(691);    // compilenode member
                // call case 2: outer request
                var call1144 = selfRequest(var_prelude, "ProgrammingError", [0]);
                var call1132 = request(call1144, "raise(1)", [1], opresult1143);
                return call1132;
              };
              let applyMeth1131 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth1131.methodName = "apply";
              applyMeth1131.paramCounts = [0];
              applyMeth1131.paramNames = [];
              applyMeth1131.definitionLine = 690;
              applyMeth1131.definitionModule = "xmodule";
              block1131.methods["apply"] = applyMeth1131;
              // call case 6: other requests
              var call1125 = request(var_gct, "at(1)isAbsent(1)", [1, 1], opresult1130, block1131);
              // call case 6: other requests
              var call1120 = request(var_gct, "at(1)put(1)", [1, 1], opresult1124, call1125);
              if1111 = call1120;
            }
            if1104 = if1111;
          } else {
            setLineNumber(700);    // compilenode string
            var string1146 = new GraceString("unrecognized fresh method tail-call: ");
            // call case 6: other requests
            if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
            var call1147 = request(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
            var opresult1148 = request(string1146, "++(1)", [1], call1147);
            var string1149 = new GraceString("");
            var opresult1150 = request(opresult1148, "++(1)", [1], string1149);
            // call case 6: other requests
            setLineNumber(699);    // compilenode member
            // call case 2: outer request
            var call1151 = selfRequest(var_prelude, "ProgrammingError", [0]);
            var call1145 = request(call1151, "raise(1)", [1], opresult1150);
            if1104 = call1145;
          }
          if1094 = if1104;
        }
        if1091 = if1094;
      } else {
        setLineNumber(704);    // compilenode string
        var string1153 = new GraceString("fresh method result of an unexpected kind: ");
        // call case 6: other requests
        if (var_freshMethExpression === undefined) raiseUninitializedVariable("freshMethExpression");
        var call1154 = request(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
        var opresult1155 = request(string1153, "++(1)", [1], call1154);
        var string1156 = new GraceString("");
        var opresult1157 = request(opresult1155, "++(1)", [1], string1156);
        // call case 6: other requests
        setLineNumber(703);    // compilenode member
        // call case 2: outer request
        var call1158 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call1152 = request(call1158, "raise(1)", [1], opresult1157);
        if1091 = call1152;
      }
      if1076 = if1091;
    }
    return if1076;
  };    // end of method addFreshMethod(_)to(_)for(_)
  func1071.confidential = true;
  this.methods["addFreshMethod(1)to(1)for(1)"] = func1071;
  func1071.methodName = "addFreshMethod(1)to(1)for(1)";
  func1071.paramCounts = [1, 1, 1];
  func1071.paramNames = ["node", "freshlist", "gct"];
  func1071.definitionLine = 667;
  func1071.definitionModule = "xmodule";
  setLineNumber(10);    // compilenode string
  var string1160 = new GraceString("CheckerFailure");
  // call case 6: other requests
  // call case 2: outer request
  var call1161 = selfRequest(var_prelude, "Exception", [0]);
  var call1159 = request(call1161, "refine(1)", [1], string1160);
  var var_CheckerFailure = call1159;
  var reader1162_CheckerFailure = function() {  // reader method CheckerFailure
      if (var_CheckerFailure === undefined) raiseUninitializedVariable("CheckerFailure");
      return var_CheckerFailure;
  };
  reader1162_CheckerFailure.isDef = true;
  reader1162_CheckerFailure.confidential = true;
  this.methods["CheckerFailure"] = reader1162_CheckerFailure;
  setLineNumber(11);    // compilenode string
  var string1164 = new GraceString("DialectError");
  // call case 6: other requests
  // call case 2: outer request
  var call1165 = selfRequest(var_prelude, "Exception", [0]);
  var call1163 = request(call1165, "refine(1)", [1], string1164);
  var var_DialectError = call1163;
  var reader1166_DialectError = function() {  // reader method DialectError
      if (var_DialectError === undefined) raiseUninitializedVariable("DialectError");
      return var_DialectError;
  };
  reader1166_DialectError.isDef = true;
  this.methods["DialectError"] = reader1166_DialectError;
  setLineNumber(14);    // compilenode member
  // call case 2: outer request
  var call1167 = selfRequest(var_prelude, "emptyDictionary", [0]);
  var var_gctCache = call1167;
  var reader1168_gctCache = function() {  // reader method gctCache
      if (var_gctCache === undefined) raiseUninitializedVariable("gctCache");
      return var_gctCache;
  };
  reader1168_gctCache.isDef = true;
  reader1168_gctCache.confidential = true;
  this.methods["gctCache"] = reader1168_gctCache;
  setLineNumber(15);    // compilenode block
  var block1169 = new GraceBlock(this, 15, 2);
  block1169.guard = jsTrue;
  block1169.real = function block1169(var_a, var_b) {
    setLineNumber(15);    // compilenode member
    // call case 6: other requests
    var call1171 = request(var_b, "key", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call1172 = request(var_a, "key", [0]);
    var call1170 = request(call1172, "compare(1)", [1], call1171);
    return call1170;
  };
  let applyMeth1169 = function apply_2 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1169.methodName = "apply(2)";
  applyMeth1169.paramCounts = [2];
  applyMeth1169.paramNames = ["a", "b"];
  applyMeth1169.definitionLine = 15;
  applyMeth1169.definitionModule = "xmodule";
  block1169.methods["apply(2)"] = applyMeth1169;
  let matchesMeth1169 = function matches_2 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1169.methodName = "matches(2)";
  matchesMeth1169.paramCounts = [2];
  matchesMeth1169.paramNames = ["a", "b"];
  matchesMeth1169.definitionLine = 15;
  matchesMeth1169.definitionModule = "xmodule";
  block1169.methods["matches(2)"] = matchesMeth1169;
  var var_keyCompare = block1169;
  var reader1173_keyCompare = function() {  // reader method keyCompare
      if (var_keyCompare === undefined) raiseUninitializedVariable("keyCompare");
      return var_keyCompare;
  };
  reader1173_keyCompare.isDef = true;
  reader1173_keyCompare.confidential = true;
  this.methods["keyCompare"] = reader1173_keyCompare;
  setLineNumber(18);    // compilenode string
  var string1176 = new GraceString("imports");
  setLineNumber(19);    // compilenode string
  var string1177 = new GraceString("io");
  setLineNumber(20);    // compilenode string
  var string1178 = new GraceString("mirrors");
  setLineNumber(21);    // compilenode string
  var string1179 = new GraceString("sys");
  setLineNumber(22);    // compilenode string
  var string1180 = new GraceString("unicode");
  var array1175 = new GraceSequence([string1176, string1177, string1178, string1179, string1180]);
  // call case 2: outer request
  var call1174 = selfRequest(var_prelude, "list(1)", [1], array1175);
  var var_builtInModules = call1174;
  var reader1181_builtInModules = function() {  // reader method builtInModules
      if (var_builtInModules === undefined) raiseUninitializedVariable("builtInModules");
      return var_builtInModules;
  };
  reader1181_builtInModules.isDef = true;
  reader1181_builtInModules.confidential = true;
  this.methods["builtInModules"] = reader1181_builtInModules;
  setLineNumber(24);    // compilenode object
  var obj1182_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_xmodule_24");
    this.outer_xmodule_24 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    this.data.name = undefined;
    var reader1183_name = function() {  // reader method name
        if (this.data.name === undefined) raiseUninitializedVariable("name");
        return this.data.name;
    };
    reader1183_name.isVar = true;
    this.methods["name"] = reader1183_name;
    var writer1184_name = function(argcv, n) {   // writer method name:=(_)
      this.data.name = n;
      return GraceDone;
    };
    this.methods["name:=(1)"] = writer1184_name;
    this.data.moduleObject = undefined;
    var reader1185_moduleObject = function() {  // reader method moduleObject
        if (this.data.moduleObject === undefined) raiseUninitializedVariable("moduleObject");
        return this.data.moduleObject;
    };
    reader1185_moduleObject.isVar = true;
    this.methods["moduleObject"] = reader1185_moduleObject;
    var writer1186_moduleObject = function(argcv, n) {   // writer method moduleObject:=(_)
      this.data.moduleObject = n;
      return GraceDone;
    };
    this.methods["moduleObject:=(1)"] = writer1186_moduleObject;
    this.data.hasParseChecker = undefined;
    var reader1187_hasParseChecker = function() {  // reader method hasParseChecker
        if (this.data.hasParseChecker === undefined) raiseUninitializedVariable("hasParseChecker");
        return this.data.hasParseChecker;
    };
    reader1187_hasParseChecker.isVar = true;
    this.methods["hasParseChecker"] = reader1187_hasParseChecker;
    var writer1188_hasParseChecker = function(argcv, n) {   // writer method hasParseChecker:=(_)
      this.data.hasParseChecker = n;
      return GraceDone;
    };
    this.methods["hasParseChecker:=(1)"] = writer1188_hasParseChecker;
    this.data.hasAstChecker = undefined;
    var reader1189_hasAstChecker = function() {  // reader method hasAstChecker
        if (this.data.hasAstChecker === undefined) raiseUninitializedVariable("hasAstChecker");
        return this.data.hasAstChecker;
    };
    reader1189_hasAstChecker.isVar = true;
    this.methods["hasAstChecker"] = reader1189_hasAstChecker;
    var writer1190_hasAstChecker = function(argcv, n) {   // writer method hasAstChecker:=(_)
      this.data.hasAstChecker = n;
      return GraceDone;
    };
    this.methods["hasAstChecker:=(1)"] = writer1190_hasAstChecker;
    this.data.hasAtStart = undefined;
    var reader1191_hasAtStart = function() {  // reader method hasAtStart
        if (this.data.hasAtStart === undefined) raiseUninitializedVariable("hasAtStart");
        return this.data.hasAtStart;
    };
    reader1191_hasAtStart.isVar = true;
    this.methods["hasAtStart"] = reader1191_hasAtStart;
    var writer1192_hasAtStart = function(argcv, n) {   // writer method hasAtStart:=(_)
      this.data.hasAtStart = n;
      return GraceDone;
    };
    this.methods["hasAtStart:=(1)"] = writer1192_hasAtStart;
    this.data.hasAtEnd = undefined;
    var reader1193_hasAtEnd = function() {  // reader method hasAtEnd
        if (this.data.hasAtEnd === undefined) raiseUninitializedVariable("hasAtEnd");
        return this.data.hasAtEnd;
    };
    reader1193_hasAtEnd.isVar = true;
    this.methods["hasAtEnd"] = reader1193_hasAtEnd;
    var writer1194_hasAtEnd = function(argcv, n) {   // writer method hasAtEnd:=(_)
      this.data.hasAtEnd = n;
      return GraceDone;
    };
    this.methods["hasAtEnd:=(1)"] = writer1194_hasAtEnd;
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 24;
        m.definitionModule = "xmodule";
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
    var obj1182_init = function() {    // init of object on line 24
      setLineNumber(25);    // compilenode string
      var string1195 = new GraceString("standardGrace");
      this.data.name = string1195;
      this.data.moduleObject = var_prelude;
      this.data.hasParseChecker = GraceFalse;
      this.data.hasAstChecker = GraceFalse;
      this.data.hasAtStart = GraceFalse;
      this.data.hasAtEnd = GraceFalse;
    };
    return obj1182_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj1182 = emptyGraceObject("currentDialect", "xmodule", 24);
  var obj1182_init = obj1182_build.call(obj1182, null, this, [], []);
  obj1182_init.call(obj1182);  // end of compileobject
  var var_currentDialect = obj1182;
  var reader1196_currentDialect = function() {  // reader method currentDialect
      if (var_currentDialect === undefined) raiseUninitializedVariable("currentDialect");
      return var_currentDialect;
  };
  reader1196_currentDialect.isDef = true;
  this.methods["currentDialect"] = reader1196_currentDialect;
  setLineNumber(47);    // compilenode string
  var string1199 = new GraceString("mirrors");
  var string1200 = new GraceString("curl");
  var string1201 = new GraceString("unicode");
  var array1198 = new GraceSequence([string1199, string1200, string1201]);
  // call case 2: outer request
  var call1197 = selfRequest(var_prelude, "set(1)", [1], array1198);
  var var_dynamicCModules = call1197;
  var reader1202_dynamicCModules = function() {  // reader method dynamicCModules
      if (var_dynamicCModules === undefined) raiseUninitializedVariable("dynamicCModules");
      return var_dynamicCModules;
  };
  reader1202_dynamicCModules.isDef = true;
  this.methods["dynamicCModules"] = reader1202_dynamicCModules;
  setLineNumber(48);    // compilenode member
  // call case 6: other requests
  var call1203 = request(var_util, "requiredModules", [0]);
  var var_imports = call1203;
  var reader1204_imports = function() {  // reader method imports
      if (var_imports === undefined) raiseUninitializedVariable("imports");
      return var_imports;
  };
  reader1204_imports.isDef = true;
  reader1204_imports.confidential = true;
  this.methods["imports"] = reader1204_imports;
  setLineNumber(436);    // compilenode array
  var array1206 = new GraceSequence([]);
  // call case 2: outer request
  var call1205 = selfRequest(var_prelude, "list(1)", [1], array1206);
  var var_methodtypes = call1205;
  var reader1207_methodtypes = function() {  // reader method methodtypes
      if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
      return var_methodtypes;
  };
  reader1207_methodtypes.isVar = true;
  reader1207_methodtypes.confidential = true;
  this.methods["methodtypes"] = reader1207_methodtypes;
  var writer1208_methodtypes = function(argcv, n) {   // writer method methodtypes:=(_)
    var_methodtypes = n;
    return GraceDone;
  };
  writer1208_methodtypes.confidential = true;
  this.methods["methodtypes:=(1)"] = writer1208_methodtypes;
  setLineNumber(437);    // compilenode object
  var obj1209_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_xmodule_437");
    this.outer_xmodule_437 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(438);    // reuse call
    var initFun1210 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
    this.data.literalCount = undefined;
    var reader1211_literalCount = function() {  // reader method literalCount
        if (this.data.literalCount === undefined) raiseUninitializedVariable("literalCount");
        return this.data.literalCount;
    };
    reader1211_literalCount.isVar = true;
    reader1211_literalCount.confidential = true;
    this.methods["literalCount"] = reader1211_literalCount;
    var writer1212_literalCount = function(argcv, n) {   // writer method literalCount:=(_)
      this.data.literalCount = n;
      return GraceDone;
    };
    writer1212_literalCount.confidential = true;
    this.methods["literalCount:=(1)"] = writer1212_literalCount;
    var func1213 = function(argcv, var_lit) {    // method visitTypeLiteral(_), line 440
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitTypeLiteral(_)", 0, numArgs - 1);
      }
      setLineNumber(441);    // compilenode member
      // call case 6: other requests
      var call1215 = request(var_lit, "methods", [0]);
      var block1216 = new GraceBlock(this, 441, 1);
      block1216.guard = jsTrue;
      block1216.real = function block1216(var_meth) {
        setLineNumber(442);    // compilenode string
        var string1217 = new GraceString("");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1218 = selfRequest(this, "literalCount", [0]);
        var opresult1219 = request(string1217, "++(1)", [1], call1218);
        var string1220 = new GraceString(" ");
        var opresult1221 = request(opresult1219, "++(1)", [1], string1220);
        var var_mtstr = opresult1221;
        setLineNumber(443);    // compilenode member
        // call case 6: other requests
        var call1223 = request(var_meth, "signature", [0]);
        var block1224 = new GraceBlock(this, 443, 1);
        block1224.guard = jsTrue;
        block1224.real = function block1224(var_part) {
          setLineNumber(444);    // compilenode op
          if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
          // call case 6: other requests
          var call1225 = request(var_part, "name", [0]);
          var opresult1226 = request(var_mtstr, "++(1)", [1], call1225);
          var_mtstr = opresult1226;
          var if1227 = GraceDone;
          setLineNumber(445);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1229 = request(var_part, "params", [0]);
          var call1228 = request(call1229, "size", [0]);
          var opresult1230 = request(call1228, ">(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult1230)) {
            setLineNumber(446);    // compilenode op
            if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
            var string1231 = new GraceString("(");
            var opresult1232 = request(var_mtstr, "++(1)", [1], string1231);
            var_mtstr = opresult1232;
            setLineNumber(447);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1235 = request(var_part, "params", [0]);
            var call1234 = request(call1235, "indices", [0]);
            var block1236 = new GraceBlock(this, 447, 1);
            block1236.guard = jsTrue;
            block1236.real = function block1236(var_pnr) {
              setLineNumber(448);    // compilenode call
              // call case 6: other requests
              // call case 6: other requests
              var call1238 = request(var_part, "params", [0]);
              var call1237 = request(call1238, "at(1)", [1], var_pnr);
              var var_p = call1237;
              var if1239 = GraceDone;
              setLineNumber(449);    // compilenode member
              // call case 6: other requests
              if (var_p === undefined) raiseUninitializedVariable("p");
              var call1240 = request(var_p, "dtype", [0]);
              var opresult1241 = request(call1240, "\u2260(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult1241)) {
                setLineNumber(450);    // compilenode op
                if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                // call case 6: other requests
                if (var_p === undefined) raiseUninitializedVariable("p");
                var call1242 = request(var_p, "toGrace(1)", [1], new GraceNum(1));
                var opresult1243 = request(var_mtstr, "++(1)", [1], call1242);
                var_mtstr = opresult1243;
                if1239 = GraceDone;
              } else {
                var if1244 = GraceDone;
                setLineNumber(453);    // compilenode member
                // call case 6: other requests
                if (var_p === undefined) raiseUninitializedVariable("p");
                var call1245 = request(var_p, "wildcard", [0]);
                if (Grace_isTrue(call1245)) {
                  setLineNumber(454);    // compilenode op
                  if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                  var string1246 = new GraceString("_");
                  var opresult1247 = request(var_mtstr, "++(1)", [1], string1246);
                  var_mtstr = opresult1247;
                  if1244 = GraceDone;
                } else {
                  setLineNumber(456);    // compilenode op
                  if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                  // call case 6: other requests
                  if (var_p === undefined) raiseUninitializedVariable("p");
                  var call1248 = request(var_p, "value", [0]);
                  var opresult1249 = request(var_mtstr, "++(1)", [1], call1248);
                  var_mtstr = opresult1249;
                  if1244 = GraceDone;
                }
                setLineNumber(458);    // compilenode op
                if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                var string1250 = new GraceString(":");
                var opresult1251 = request(var_mtstr, "++(1)", [1], string1250);
                // call case 6: other requests
                // call case 6: other requests
                if (var_ast === undefined) raiseUninitializedVariable("ast");
                var call1253 = request(var_ast, "unknownType", [0]);
                var call1252 = request(call1253, "value", [0]);
                var opresult1254 = request(opresult1251, "++(1)", [1], call1252);
                var_mtstr = opresult1254;
                var if1255 = GraceDone;
                setLineNumber(459);    // compilenode member
                // call case 6: other requests
                if (var_p === undefined) raiseUninitializedVariable("p");
                var call1256 = request(var_p, "generics", [0]);
                var opresult1257 = request(GraceFalse, "\u2260(1)", [1], call1256);
                if (Grace_isTrue(opresult1257)) {
                  setLineNumber(460);    // compilenode op
                  if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                  var string1258 = new GraceString("\u27e6");
                  var opresult1259 = request(var_mtstr, "++(1)", [1], string1258);
                  var_mtstr = opresult1259;
                  setLineNumber(461);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  if (var_p === undefined) raiseUninitializedVariable("p");
                  var call1262 = request(var_p, "generics", [0]);
                  var call1261 = request(call1262, "size", [0]);
                  var diff1263 = request(call1261, "-(1)", [1], new GraceNum(1));
                  var opresult1264 = request(new GraceNum(1), "..(1)", [1], diff1263);
                  var block1265 = new GraceBlock(this, 461, 1);
                  block1265.guard = jsTrue;
                  block1265.real = function block1265(var_ix) {
                    setLineNumber(462);    // compilenode op
                    if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 6: other requests
                    if (var_p === undefined) raiseUninitializedVariable("p");
                    var call1268 = request(var_p, "generics", [0]);
                    var call1267 = request(call1268, "at(1)", [1], var_ix);
                    var call1266 = request(call1267, "toGrace(1)", [1], new GraceNum(1));
                    var opresult1269 = request(var_mtstr, "++(1)", [1], call1266);
                    var string1270 = new GraceString(", ");
                    var opresult1271 = request(opresult1269, "++(1)", [1], string1270);
                    var_mtstr = opresult1271;
                    return GraceDone;
                  };
                  let applyMeth1265 = function apply_1 (argcv, ...args) {
                      if (this.guard.apply(this.receiver, args))
                          return this.real.apply(this.receiver, args);
                      badBlockArgs.apply(this, args);
                  };
                  applyMeth1265.methodName = "apply(1)";
                  applyMeth1265.paramCounts = [1];
                  applyMeth1265.paramNames = ["ix"];
                  applyMeth1265.definitionLine = 461;
                  applyMeth1265.definitionModule = "xmodule";
                  block1265.methods["apply(1)"] = applyMeth1265;
                  let matchesMeth1265 = function matches_1 (argcv, ...args) {
                      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                  };
                  matchesMeth1265.methodName = "matches(1)";
                  matchesMeth1265.paramCounts = [1];
                  matchesMeth1265.paramNames = ["ix"];
                  matchesMeth1265.definitionLine = 461;
                  matchesMeth1265.definitionModule = "xmodule";
                  block1265.methods["matches(1)"] = matchesMeth1265;
                  // call case 2: outer request
                  var call1260 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1264, block1265);
                  setLineNumber(464);    // compilenode op
                  if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 6: other requests
                  if (var_p === undefined) raiseUninitializedVariable("p");
                  var call1274 = request(var_p, "generics", [0]);
                  var call1273 = request(call1274, "last", [0]);
                  var call1272 = request(call1273, "toGrace(1)", [1], new GraceNum(1));
                  var opresult1275 = request(var_mtstr, "++(1)", [1], call1272);
                  var string1276 = new GraceString("\u27e7");
                  var opresult1277 = request(opresult1275, "++(1)", [1], string1276);
                  var_mtstr = opresult1277;
                  if1255 = GraceDone;
                }
                if1239 = if1255;
              }
              var if1278 = GraceDone;
              setLineNumber(467);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1280 = request(var_part, "params", [0]);
              var call1279 = request(call1280, "size", [0]);
              var opresult1281 = request(var_pnr, "<(1)", [1], call1279);
              if (Grace_isTrue(opresult1281)) {
                setLineNumber(468);    // compilenode op
                if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
                var string1282 = new GraceString(", ");
                var opresult1283 = request(var_mtstr, "++(1)", [1], string1282);
                var_mtstr = opresult1283;
                if1278 = GraceDone;
              }
              return if1278;
            };
            let applyMeth1236 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1236.methodName = "apply(1)";
            applyMeth1236.paramCounts = [1];
            applyMeth1236.paramNames = ["pnr"];
            applyMeth1236.definitionLine = 447;
            applyMeth1236.definitionModule = "xmodule";
            block1236.methods["apply(1)"] = applyMeth1236;
            let matchesMeth1236 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1236.methodName = "matches(1)";
            matchesMeth1236.paramCounts = [1];
            matchesMeth1236.paramNames = ["pnr"];
            matchesMeth1236.definitionLine = 447;
            matchesMeth1236.definitionModule = "xmodule";
            block1236.methods["matches(1)"] = matchesMeth1236;
            // call case 2: outer request
            var call1233 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1234, block1236);
            setLineNumber(471);    // compilenode op
            if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
            var string1284 = new GraceString(")");
            var opresult1285 = request(var_mtstr, "++(1)", [1], string1284);
            var_mtstr = opresult1285;
            if1227 = GraceDone;
          }
          return if1227;
        };
        let applyMeth1224 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1224.methodName = "apply(1)";
        applyMeth1224.paramCounts = [1];
        applyMeth1224.paramNames = ["part"];
        applyMeth1224.definitionLine = 443;
        applyMeth1224.definitionModule = "xmodule";
        block1224.methods["apply(1)"] = applyMeth1224;
        let matchesMeth1224 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1224.methodName = "matches(1)";
        matchesMeth1224.paramCounts = [1];
        matchesMeth1224.paramNames = ["part"];
        matchesMeth1224.definitionLine = 443;
        matchesMeth1224.definitionModule = "xmodule";
        block1224.methods["matches(1)"] = matchesMeth1224;
        // call case 2: outer request
        var call1222 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1223, block1224);
        var if1286 = GraceDone;
        setLineNumber(474);    // compilenode member
        // call case 6: other requests
        var call1287 = request(var_meth, "rtype", [0]);
        var opresult1288 = request(call1287, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult1288)) {
          setLineNumber(475);    // compilenode op
          if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
          var string1289 = new GraceString(" \u2192 ");
          var opresult1290 = request(var_mtstr, "++(1)", [1], string1289);
          // call case 6: other requests
          // call case 6: other requests
          var call1292 = request(var_meth, "rtype", [0]);
          var call1291 = request(call1292, "toGrace(1)", [1], new GraceNum(1));
          var opresult1293 = request(opresult1290, "++(1)", [1], call1291);
          var_mtstr = opresult1293;
          if1286 = GraceDone;
        }
        setLineNumber(477);    // compilenode call
        if (var_mtstr === undefined) raiseUninitializedVariable("mtstr");
        // call case 6: other requests
        if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
        var call1294 = request(var_methodtypes, "push(1)", [1], var_mtstr);
        return call1294;
      };
      let applyMeth1216 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1216.methodName = "apply(1)";
      applyMeth1216.paramCounts = [1];
      applyMeth1216.paramNames = ["meth"];
      applyMeth1216.definitionLine = 441;
      applyMeth1216.definitionModule = "xmodule";
      block1216.methods["apply(1)"] = applyMeth1216;
      let matchesMeth1216 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1216.methodName = "matches(1)";
      matchesMeth1216.paramCounts = [1];
      matchesMeth1216.paramNames = ["meth"];
      matchesMeth1216.definitionLine = 441;
      matchesMeth1216.definitionModule = "xmodule";
      block1216.methods["matches(1)"] = matchesMeth1216;
      // call case 2: outer request
      var call1214 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call1215, block1216);
      setLineNumber(479);    // compilenode return
      return GraceFalse;
    };    // end of method visitTypeLiteral(_)
    this.methods["visitTypeLiteral(1)"] = func1213;
    func1213.methodName = "visitTypeLiteral(1)";
    func1213.paramCounts = [1];
    func1213.paramNames = ["lit"];
    func1213.definitionLine = 440;
    func1213.definitionModule = "xmodule";
    var func1295 = function(argcv, var_op) {    // method visitOp(_), line 481
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("visitOp(_)", 0, numArgs - 1);
      }
      var if1296 = GraceDone;
      setLineNumber(482);    // compilenode member
      // call case 6: other requests
      var call1297 = request(var_op, "value", [0]);
      var string1298 = new GraceString("&");
      var opresult1299 = request(call1297, "==(1)", [1], string1298);
      // call case 6: other requests
      var call1300 = request(var_op, "value", [0]);
      var string1301 = new GraceString("|");
      var opresult1302 = request(call1300, "==(1)", [1], string1301);
      var opresult1303 = request(opresult1299, "||(1)", [1], opresult1302);
      if (Grace_isTrue(opresult1303)) {
        setLineNumber(483);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1305 = request(var_op, "left", [0]);
        var call1304 = request(call1305, "kind", [0]);
        var var_leftkind = call1304;
        setLineNumber(484);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1307 = request(var_op, "right", [0]);
        var call1306 = request(call1307, "kind", [0]);
        var var_rightkind = call1306;
        var if1308 = GraceDone;
        setLineNumber(485);    // compilenode op
        if (var_leftkind === undefined) raiseUninitializedVariable("leftkind");
        var string1309 = new GraceString("identifier");
        var opresult1310 = request(var_leftkind, "==(1)", [1], string1309);
        if (var_leftkind === undefined) raiseUninitializedVariable("leftkind");
        var string1311 = new GraceString("member");
        var opresult1312 = request(var_leftkind, "==(1)", [1], string1311);
        var opresult1313 = request(opresult1310, "||(1)", [1], opresult1312);
        if (Grace_isTrue(opresult1313)) {
          setLineNumber(486);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call1315 = request(var_op, "left", [0]);
          var call1314 = request(call1315, "toGrace(1)", [1], new GraceNum(0));
          var var_typeIdent = call1314;
          setLineNumber(487);    // compilenode string
          var string1317 = new GraceString("");
          // call case 6: other requests
          var call1318 = request(var_op, "value", [0]);
          var opresult1319 = request(string1317, "++(1)", [1], call1318);
          var string1320 = new GraceString(" ");
          var opresult1321 = request(opresult1319, "++(1)", [1], string1320);
          if (var_typeIdent === undefined) raiseUninitializedVariable("typeIdent");
          var opresult1322 = request(opresult1321, "++(1)", [1], var_typeIdent);
          var string1323 = new GraceString("");
          var opresult1324 = request(opresult1322, "++(1)", [1], string1323);
          // call case 6: other requests
          if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
          var call1316 = request(var_methodtypes, "push(1)", [1], opresult1324);
          if1308 = call1316;
        } else {
          var if1325 = GraceDone;
          setLineNumber(488);    // compilenode op
          if (var_leftkind === undefined) raiseUninitializedVariable("leftkind");
          var string1326 = new GraceString("typeliteral");
          var opresult1327 = request(var_leftkind, "==(1)", [1], string1326);
          if (Grace_isTrue(opresult1327)) {
            setLineNumber(489);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1329 = selfRequest(this, "literalCount", [0]);
            var sum1330 = request(call1329, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1328 = selfRequest(this, "literalCount:=(1)", [1], sum1330);
            setLineNumber(490);    // compilenode string
            var string1332 = new GraceString("");
            // call case 6: other requests
            var call1333 = request(var_op, "value", [0]);
            var opresult1334 = request(string1332, "++(1)", [1], call1333);
            var string1335 = new GraceString(" ");
            var opresult1336 = request(opresult1334, "++(1)", [1], string1335);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1337 = selfRequest(this, "literalCount", [0]);
            var opresult1338 = request(opresult1336, "++(1)", [1], call1337);
            var string1339 = new GraceString("");
            var opresult1340 = request(opresult1338, "++(1)", [1], string1339);
            // call case 6: other requests
            if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
            var call1331 = request(var_methodtypes, "push(1)", [1], opresult1340);
            setLineNumber(491);    // compilenode member
            // call case 6: other requests
            var call1342 = request(var_op, "left", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1341 = selfRequest(this, "visitTypeLiteral(1)", [1], call1342);
            if1325 = call1341;
          } else {
            var if1343 = GraceDone;
            setLineNumber(492);    // compilenode op
            if (var_leftkind === undefined) raiseUninitializedVariable("leftkind");
            var string1344 = new GraceString("op");
            var opresult1345 = request(var_leftkind, "==(1)", [1], string1344);
            if (Grace_isTrue(opresult1345)) {
              setLineNumber(493);    // compilenode member
              // call case 6: other requests
              var call1347 = request(var_op, "left", [0]);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1346 = selfRequest(this, "visitOp(1)", [1], call1347);
              if1343 = call1346;
            }
            if1325 = if1343;
          }
          if1308 = if1325;
        }
        var if1348 = GraceDone;
        setLineNumber(495);    // compilenode op
        if (var_rightkind === undefined) raiseUninitializedVariable("rightkind");
        var string1349 = new GraceString("identifier");
        var opresult1350 = request(var_rightkind, "==(1)", [1], string1349);
        if (var_rightkind === undefined) raiseUninitializedVariable("rightkind");
        var string1351 = new GraceString("member");
        var opresult1352 = request(var_rightkind, "==(1)", [1], string1351);
        var opresult1353 = request(opresult1350, "||(1)", [1], opresult1352);
        if (Grace_isTrue(opresult1353)) {
          setLineNumber(496);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call1355 = request(var_op, "right", [0]);
          var call1354 = request(call1355, "toGrace(1)", [1], new GraceNum(0));
          var var_typeIdent = call1354;
          setLineNumber(497);    // compilenode string
          var string1357 = new GraceString("");
          // call case 6: other requests
          var call1358 = request(var_op, "value", [0]);
          var opresult1359 = request(string1357, "++(1)", [1], call1358);
          var string1360 = new GraceString(" ");
          var opresult1361 = request(opresult1359, "++(1)", [1], string1360);
          if (var_typeIdent === undefined) raiseUninitializedVariable("typeIdent");
          var opresult1362 = request(opresult1361, "++(1)", [1], var_typeIdent);
          var string1363 = new GraceString("");
          var opresult1364 = request(opresult1362, "++(1)", [1], string1363);
          // call case 6: other requests
          if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
          var call1356 = request(var_methodtypes, "push(1)", [1], opresult1364);
          if1348 = call1356;
        } else {
          var if1365 = GraceDone;
          setLineNumber(498);    // compilenode op
          if (var_rightkind === undefined) raiseUninitializedVariable("rightkind");
          var string1366 = new GraceString("typeliteral");
          var opresult1367 = request(var_rightkind, "==(1)", [1], string1366);
          if (Grace_isTrue(opresult1367)) {
            setLineNumber(499);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1369 = selfRequest(this, "literalCount", [0]);
            var sum1370 = request(call1369, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1368 = selfRequest(this, "literalCount:=(1)", [1], sum1370);
            setLineNumber(500);    // compilenode string
            var string1372 = new GraceString("");
            // call case 6: other requests
            var call1373 = request(var_op, "value", [0]);
            var opresult1374 = request(string1372, "++(1)", [1], call1373);
            var string1375 = new GraceString(" ");
            var opresult1376 = request(opresult1374, "++(1)", [1], string1375);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1377 = selfRequest(this, "literalCount", [0]);
            var opresult1378 = request(opresult1376, "++(1)", [1], call1377);
            var string1379 = new GraceString("");
            var opresult1380 = request(opresult1378, "++(1)", [1], string1379);
            // call case 6: other requests
            if (var_methodtypes === undefined) raiseUninitializedVariable("methodtypes");
            var call1371 = request(var_methodtypes, "push(1)", [1], opresult1380);
            setLineNumber(501);    // compilenode member
            // call case 6: other requests
            var call1382 = request(var_op, "right", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1381 = selfRequest(this, "visitTypeLiteral(1)", [1], call1382);
            if1365 = call1381;
          } else {
            var if1383 = GraceDone;
            setLineNumber(502);    // compilenode op
            if (var_rightkind === undefined) raiseUninitializedVariable("rightkind");
            var string1384 = new GraceString("op");
            var opresult1385 = request(var_rightkind, "==(1)", [1], string1384);
            if (Grace_isTrue(opresult1385)) {
              setLineNumber(503);    // compilenode member
              // call case 6: other requests
              var call1387 = request(var_op, "right", [0]);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1386 = selfRequest(this, "visitOp(1)", [1], call1387);
              if1383 = call1386;
            }
            if1365 = if1383;
          }
          if1348 = if1365;
        }
        if1296 = if1348;
      }
      setLineNumber(506);    // compilenode return
      return GraceFalse;
    };    // end of method visitOp(_)
    this.methods["visitOp(1)"] = func1295;
    func1295.methodName = "visitOp(1)";
    func1295.paramCounts = [1];
    func1295.paramNames = ["op"];
    func1295.definitionLine = 481;
    func1295.definitionModule = "xmodule";
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 437;
        m.definitionModule = "xmodule";
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
    var obj1209_init = function() {    // init of object on line 437
      initFun1210.call(this);
      setLineNumber(439);    // compilenode num
      this.data.literalCount = new GraceNum(1);
    };
    return obj1209_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj1209 = emptyGraceObject("typeVisitor", "xmodule", 437);
  var obj1209_init = obj1209_build.call(obj1209, null, this, [], []);
  obj1209_init.call(obj1209);  // end of compileobject
  var var_typeVisitor = obj1209;
  var reader1388_typeVisitor = function() {  // reader method typeVisitor
      if (var_typeVisitor === undefined) raiseUninitializedVariable("typeVisitor");
      return var_typeVisitor;
  };
  reader1388_typeVisitor.isDef = true;
  reader1388_typeVisitor.confidential = true;
  this.methods["typeVisitor"] = reader1388_typeVisitor;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_xmodule = gracecode_xmodule;
if (typeof window !== "undefined")
  window.gracecode_xmodule = gracecode_xmodule;
gracecode_xmodule.imports = ["ast", "errormessages", "io", "mirrors", "standardGrace", "sys", "unixFilePath", "util"];
gracecode_xmodule.definitionModule = "xmodule";
gracecode_xmodule.definitionLine = 1;
