var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["identifierresolution"] = "classes:\nconfidential:\n booleanScope\n builtInsScope\n completed\n emptyScope\n gatherInheritedNames(1)\n gatherUsedNames(1)\n graceObjectScope\n inProgress\n isInBeginningStudentDialect\n isInBeginningStudentDialect:=(isInBeginningStudentDialect': Unknown) \u2192 Done\n keyOrdering\n moduleScope\n preludeScope\n reserved\n stSerial\n stSerial:=(stSerial': Unknown) \u2192 Done\n thisModule\n undiscovered\n universalScope\n varFieldDecls\ndialect:\n standardGrace\nfresh-methods:\n conflictForMethodName(1)from(1)\n newScopeIn(1)kind(1)\nfresh:conflictForMethodName(1)from(1):\n methodName\n sources\nfresh:newScopeIn(1)kind(1):\n ::(1)\n ==(1)\n addName(1)\n addName(1)asA(1)\n addNode(1)asA(1)\n allowsShadowing\n asDebugString\n asString\n asStringWithParents\n at(1)putScope(1)\n checkShadowing(1)asA(1)\n contains(1)\n elementLines\n elementScopes\n elementScopesAsString\n elementTokens\n elements\n enclosingObjectScope\n endsWithParenthesizedNumber(2)\n getScope(1)\n hasDefinitionInNest(1)\n hasParent\n hasParent:=(_)\n hash\n inSameContextAs(1)\n inheritedNames\n inheritedNames:=(_)\n isEmpty\n isInSameObjectAs(1)\n isInheritableScope\n isMethodScope\n isModuleScope\n isObjectScope\n isSpecial(1)\n isUniversal\n keysAndKindsDo(1)\n keysAsList\n kind(1)\n kind(1)ifAbsent(1)\n kindInNest(1)\n node\n node:=(_)\n parent\n receiverScope(1)\n resolveOuterMethod(1)fromNode(1)\n scopeInNest(1)\n scopeReferencedBy(1)\n serialNumber\n thatDefines(1)\n thatDefines(1)ifNone(1)\n variety\n withSurroundingScopesDo(1)\n \u2260(1)\nmethodtypes-of:DeclKind:\nmodules:\n ast\n collectionsPrelude\n errormessages\n fastDict\n identifierKinds\n io\n mirrors\n standardGrace\n sys\n unixFilePath\n util\n xmodule\npath:\n /Users/black/Development/mg/gracelang/minigrace/identifierresolution.grace\npublic:\n DeclKind\n addAssignmentMethodsToSymbolTable\n articleFor(1)\n buildSymbolTableFor(1)ancestors(1)\n callReturnsFreshObject(1)\n canonical(1)\n checkForAmbiguityOf(1)definedIn(1)asA(1)\n checkForConflicts(2)\n checkForReservedName(1)\n checkTraitBody(1)\n collectParentNames(1)\n conflictForMethodName(1)from(1)\n newScopeIn(1)kind(1)\n newScopeKind(1)\n processGCT(2)\n reportAssignmentTo(1)declaredInScope(1)\n reportUndeclaredIdentifier(1)\n resolve(1)\n resolveIdentifiers(1)\n setupContext(1)\n suggestionsForIdentifier(1)\n transformBind(1)ancestors(1)\n transformCall(1)\n transformIdentifier(1)ancestors(1)\n transformInherits(1)ancestors(1)\npublicMethodTypes:\n addAssignmentMethodsToSymbolTable\n articleFor(str)\n buildSymbolTableFor(topNode)ancestors(topChain)\n callReturnsFreshObject(cNode)\n canonical(numericName)\n checkForAmbiguityOf(node)definedIn(definingScope)asA(kind)\n checkForConflicts(objNode, traitMethods)\n checkForReservedName(node)\n checkTraitBody(traitObjNode)\n collectParentNames(node)\n conflictForMethodName(nm)from(srcs)\n newScopeIn(parent')kind(variety')\n newScopeKind(variety')\n processGCT(gct, importedModuleScope)\n reportAssignmentTo(node)declaredInScope(scp)\n reportUndeclaredIdentifier(node)\n resolve(moduleObject)\n resolveIdentifiers(topNode)\n setupContext(moduleObject)\n suggestionsForIdentifier(node)\n transformBind(bindNode)ancestors(anc)\n transformCall(cNode) \u2192 ast.AstNode\n transformIdentifier(node)ancestors(anc)\n transformInherits(inhNode)ancestors(anc)\ntypes:\n DeclKind\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["identifierresolution"] = [
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "import \"fastDict\" as map",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "import \"identifierKinds\" as k",
    "",
    "def completed = Singleton.named \"completed\"",
    "def inProgress = Singleton.named \"inProgress\"",
    "def undiscovered = Singleton.named \"undiscovered\"",
    "// constants used in detecting cyclic inheritance",
    "",
    "var stSerial := 100",
    "",
    "def reserved = [\"self\", \"outer\", \"true\", \"false\"]",
    "// reserved names that cannot be re-assigned or re-declared",
    "",
    "method newScopeKind(variety') {",
    "    // for the top of the scope chain",
    "    def s = newScopeIn(object {})kind(variety')",
    "    s.hasParent := false",
    "    s",
    "}",
    "",
    "def keyOrdering = { a, b -> a.key.compare(b.key) }",
    "",
    "type DeclKind = k.T",
    "",
    "class newScopeIn(parent') kind(variety') {",
    "    use identityEquality",
    "    def elements is public = map.dictionary.empty",
    "    def elementScopes is public = map.dictionary.empty",
    "    def elementLines is public = map.dictionary.empty",
    "    def elementTokens is public = map.dictionary.empty",
    "    def parent is public = parent'",
    "    var hasParent is public := true",
    "    def variety is public = variety'",
    "    var node is public := ast.nullNode      // the outermost ast node that I'm in",
    "    var inheritedNames is public := undiscovered",
    "    stSerial := stSerial + 1",
    "    def serialNumber is public = stSerial",
    "    def hash is public = serialNumber.hash",
    "",
    "    if (isObjectScope) then {",
    "        addName \"self\" asA(k.selfDef)",
    "        at \"self\" putScope(self)",
    "    }",
    "    method isEmpty { elements.size == 0 }",
    "    method addName(n) {",
    "        elements.at(n)put(k.methdec)",
    "        elementLines.at(n)put(util.linenum)",
    "    }",
    "    method addName (n) asA (kind:DeclKind) {",
    "        def oldKind = elements.at(n) ifAbsent {",
    "            elements.at(n)put(kind)",
    "            elementLines.at(n)put(util.linenum)",
    "            return",
    "        }",
    "        if (kind.isImplicit) then {",
    "            return  // don't overwrite local id with id from trait or super",
    "        }",
    "        if (oldKind.isImplicit)  then {",
    "            elements.at(n)put(kind)",
    "            elementLines.at(n)put(util.linenum)",
    "            return",
    "        }",
    "        errormessages.syntaxError(\"'{n}' cannot be\" ++",
    "            \" redefined as {kind} because it is already declared as {oldKind}\")",
    "            atRange(util.linenum, util.linepos, util.linepos + n.size - 1)",
    "    }",
    "    method addNode (nd) asA (kind) {",
    "        def ndName = nd.value",
    "        checkShadowing(nd) asA(kind)",
    "        def oldKind = elements.at(ndName) ifAbsent {",
    "            elements.at(ndName)put(kind)",
    "            elementLines.at(ndName)put(nd.line)",
    "            return",
    "        }",
    "        if (kind.isImplicit) then {",
    "            return  // don't overwrite local id with id from trait or super",
    "        }",
    "        if (oldKind.isImplicit)  then {",
    "            elements.at(ndName)put(kind)",
    "            elementLines.at(ndName)put(nd.line)",
    "            return",
    "        }",
    "        var more := \" in this scope\"",
    "        if (elementLines.containsKey(ndName)) then {",
    "            more := \" as a {oldKind}\"",
    "                ++ \" on line {elementLines.at(ndName)}\"",
    "        }",
    "        errormessages.syntaxError(\"'{nd.canonicalName}' cannot be\"",
    "            ++ \" redeclared because it is already declared\" ++ more )",
    "            atRange(nd.range)",
    "    }",
    "    method contains (n) {",
    "        if (elements.containsKey(n)) then { return true }",
    "        if (isInBeginningStudentDialect.not) then { return false }",
    "        if (self ≠ preludeScope) then { return false }",
    "        return isSpecial(n)",
    "    }",
    "    method withSurroundingScopesDo (b) {",
    "        // do b in this scope and all surounding scopes.",
    "        var cur := self",
    "        while {b.apply(cur); cur.hasParent} do {",
    "            cur := cur.parent",
    "        }",
    "    }",
    "    method keysAsList {",
    "        def result = emptyList",
    "        elements.keysDo { each -> result.addLast(each) }",
    "        result",
    "    }",
    "    method keysAndKindsDo (action) {",
    "        elements.keysAndValuesDo(action)",
    "    }",
    "    method kind (n) {",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(n)) then { return k.methdec }",
    "        }",
    "        elements.at(n)",
    "    }",
    "    method kind (n) ifAbsent (action) {",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(n)) then { return k.methdec }",
    "        }",
    "        elements.at(n) ifAbsent (action)",
    "    }",
    "    method at(n) putScope(scp) {",
    "        elementScopes.at(n)put(scp)",
    "    }",
    "    method getScope(n) {",
    "        if (elementScopes.containsKey(n)) then {",
    "            return elementScopes.at(n)",
    "        }",
    "//        util.log 70 verbose (\"scope {self}: elements.containsKey({n}) = {elements.containsKey(n)}\" ++",
    "//              \" but elementScopes.containsKey({n}) = {elementScopes.containsKey(n)}\")",
    "        //  This occurs for names like `true` that are built-in, but for which there",
    "        //  is no symbolTable describing their atttributes.",
    "        //  TODO: add complete information for the built-in names.",
    "        //  in the meantime:",
    "        return universalScope",
    "    }",
    "    method asStringWithParents {",
    "        var result := \"\\nCurrent: {self}\"",
    "        var s := self",
    "        while {s.hasParent} do {",
    "            s := s.parent",
    "            result := result ++ \"\\nParent: {s}\"",
    "        }",
    "        result ++ \"\\n\"",
    "    }",
    "    method asString {",
    "        var result := \"({variety} ST: \"",
    "        withSurroundingScopesDo { each ->",
    "            result := result ++ each.serialNumber",
    "            if (each.hasParent) then { result := result ++ \"➞\" }",
    "        }",
    "        result := result ++  \"):\\n    \"",
    "        elements.bindings.sortedBy(keyOrdering).do { each ->",
    "            result := \"{result} {each.key}({kind(each.key)}) \"",
    "        }",
    "        result ++ \"\\n\"",
    "    }",
    "",
    "    method asDebugString { \"(ST {serialNumber})\" }",
    "",
    "    method elementScopesAsString {",
    "        def referencedScopes = emptySet",
    "        var result := \"\\n    [elementScopes:\"",
    "        elementScopes.bindings.sortedBy(keyOrdering).do { each ->",
    "            result := \"{result} {each.key}➞{each.value.asDebugString}\"",
    "            referencedScopes.add (each.value)",
    "        }",
    "        result := result ++ \"]\\n____________\\n\"",
    "        list.withAll(referencedScopes)",
    "            .sortBy { a, b -> a.serialNumber.compare(b.serialNumber) }",
    "                .do { each -> result := result ++ each.asString }",
    "        result ++ \"____________\\n\"",
    "    }",
    "    method hasDefinitionInNest(nm) {",
    "        withSurroundingScopesDo { s ->",
    "            if (s.contains(nm)) then {",
    "                return true",
    "            }",
    "        }",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(nm)) then { return true }",
    "        }",
    "        return false",
    "    }",
    "    method kindInNest(nm) {",
    "        // NEVER answers `inherited` or `fromTrait` !",
    "        withSurroundingScopesDo {s->",
    "            if (s.contains(nm)) then {",
    "                def kd = s.kind(nm)",
    "                if (kd.fromParent) then {",
    "                    return k.methdec",
    "                } else {",
    "                    return kd",
    "                }",
    "            }",
    "        }",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(nm)) then { return k.methdec }",
    "        }",
    "        return k.undefined",
    "    }",
    "    method scopeInNest(nm) {",
    "        // answers the elementScope associated with nm, or universalScope",
    "        // if there is none",
    "",
    "        withSurroundingScopesDo { s->",
    "            if (s.contains(nm)) then {",
    "                return s.getScope(nm)",
    "            }",
    "        }",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(nm)) then { return preludeScope }",
    "        }",
    "        return universalScope",
    "    }",
    "    method thatDefines(name) ifNone(action) {",
    "        withSurroundingScopesDo { s->",
    "            if (s.contains(name)) then { return s }",
    "        }",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(name)) then { return preludeScope }",
    "        }",
    "        action.apply",
    "    }",
    "    method thatDefines(name) {",
    "        withSurroundingScopesDo { s->",
    "            if (s.contains(name)) then { return s }",
    "        }",
    "        if { isInBeginningStudentDialect } then {",
    "            if (isSpecial(name)) then { return preludeScope }",
    "        }",
    "        print(self.asStringWithParents)",
    "        ProgrammingError.raise \"no scope defines {name}\"",
    "    }",
    "    method receiverScope(rcvrNode) {",
    "        // rcvrNode is the receiver of a request. Answer the scope",
    "        // associated with it.  So, if the receiver is a.b.c,",
    "        // find the scope associated with c in the scope associated with b",
    "        // in the scope associated with a in this scope.  Answers",
    "        // universalScope if we don't have enough information to be exact.",
    "",
    "        if (rcvrNode.isIdentifier) then {",
    "            scopeInNest(rcvrNode.nameString)",
    "        } elseif { rcvrNode.isCall } then {",
    "            receiverScope(rcvrNode.receiver).getScope(rcvrNode.nameString)",
    "        } elseif { rcvrNode.isOuter } then {",
    "            var resultScope := rcvrNode.scope.enclosingObjectScope  // self's scope",
    "            repeat (rcvrNode.numberOfLevels) times {",
    "                resultScope := resultScope.enclosingObjectScope",
    "            }",
    "            resultScope",
    "        } elseif { rcvrNode.isConstant } then {",
    "            universalScope  //  TODO: define scopes for strings and numbers",
    "        } elseif { rcvrNode.isSequenceConstructor } then {",
    "            universalScope  //  TODO: define scope for Sequences",
    "        } elseif { rcvrNode.isObject } then {",
    "            rcvrNode.scope  //  TODO: do we need to remove the confidential attributes?",
    "        } else {",
    "            ProgrammingError.raise(\"unexpected receiver {rcvrNode.toGrace 0} \" ++",
    "                  \"on line {rcvrNode.line}\")",
    "        }",
    "    }",
    "    method isInSameObjectAs (enclosingScope) {",
    "        if (self == enclosingScope) then { return true }",
    "        if (self.parent.isObjectScope) then { return false }",
    "        self.parent.isInSameObjectAs(enclosingScope)",
    "    }",
    "    method isObjectScope {",
    "        if (variety == \"object\") then { return true }",
    "        if (variety == \"module\") then { return true }",
    "        if (variety == \"dialect\") then { return true }",
    "        if (variety == \"class\") then { return true }",
    "        if (variety == \"built-in\") then { return true }",
    "        false",
    "    }",
    "    method allowsShadowing {",
    "        if (variety == \"type\") then { return true }",
    "        isObjectScope",
    "    }",
    "    method isMethodScope {",
    "        variety == \"method\"",
    "    }",
    "    method isModuleScope {",
    "        variety == \"module\"",
    "    }",
    "    method isInheritableScope {",
    "        \"class | object\".contains(variety)",
    "    }",
    "    method resolveOuterMethod(name) fromNode (aNode) {",
    "        // replace name by a request with receiver self, or an outerNode",
    "",
    "        def outerChain = list [ ]",
    "        withSurroundingScopesDo { s->",
    "            if (s.contains(name)) then {",
    "                if (s.variety == \"dialect\") then {",
    "                    return ast.memberNode.new(name,",
    "                          ast.identifierNode.new(\"prelude\", false)",
    "                                scope(self)) scope(self).",
    "                                      onSelf.withGenericArgs(aNode.generics)",
    "                } elseif { s.variety == \"module\" } then {",
    "                    return ast.memberNode.new(name, thisModule) scope(self).",
    "                          onSelf.withGenericArgs(aNode.generics)",
    "                }",
    "                def rcvr = if (outerChain.isEmpty) then {",
    "                    ast.identifierNode.new(\"self\", false) scope(self).",
    "                          setStart(ast.noPosition)",
    "                } else {",
    "                    ast.outerNode(outerChain).setScope(self).",
    "                          setStart(ast.noPosition)",
    "                }",
    "                return ast.memberNode.new(name, rcvr).setScope(self).",
    "                      setPositionFrom(aNode).",
    "                        onSelf.withGenericArgs(aNode.generics)",
    "            }",
    "            if (s.variety == \"object\") then {",
    "                def definingObjNode = s.node",
    "                if (outerChain.isEmpty.not && {outerChain.last == definingObjNode}) then {",
    "                    ProgrammingError.raise \"adding {definingObjNode} twice\"",
    "                } else {",
    "                    outerChain.addLast(s.node)",
    "                }",
    "            }",
    "        }",
    "",
    "        if (aNode.nameString == \"explOde(1)\") then {",
    "            ProgrammingError.raise \"the compiler exploded.\"",
    "        }",
    "        reportUndeclaredIdentifier(aNode.asIdentifier)",
    "    }",
    "    method isSpecial(name) is confidential {",
    "        if (name.startsWith \"list\") then {",
    "            endsWithParenthesizedNumber(name, 5)",
    "        } elseif { name.startsWith \"set\" } then {",
    "            endsWithParenthesizedNumber(name, 4)",
    "        } elseif { name.startsWith \"sequence\" } then {",
    "            endsWithParenthesizedNumber(name, 9)",
    "        } elseif { name.startsWith \"dictionary\" } then {",
    "            endsWithParenthesizedNumber(name, 11)",
    "        } else {",
    "            false",
    "        }",
    "    }",
    "    method endsWithParenthesizedNumber(name, startIndex) is confidential {",
    "        def sz = name.size",
    "        if ( startIndex ≥ sz ) then { return false }",
    "        if ( name.at(startIndex) ≠ \"(\" ) then { return false }",
    "        var i := startIndex + 1",
    "        while { name.at(i).startsWithDigit } do {",
    "            i := i + 1",
    "            if (i > sz) then { return false }",
    "        }",
    "        ( name.at(i) == \")\" ) && ( i == sz )",
    "    }",
    "    method scopeReferencedBy(nd:ast.AstNode) {",
    "        // Finds the scope referenced by astNode nd.",
    "        // If nd references an object, then the returned",
    "        // scope will have bindings for the methods of that object.",
    "        // Otherwise, it will be the empty scope.",
    "",
    "        if (nd.isIdentifier) then {",
    "            def sought = nd.nameString",
    "            if (sought == \"outer\") then {",
    "                return parent.enclosingObjectScope",
    "            }",
    "            withSurroundingScopesDo {s->",
    "                if (s.contains(sought)) then {",
    "                    return s.getScope(sought)",
    "                }",
    "            }",
    "            if (nd.nameString == \"explOde(1)\") then {",
    "                ProgrammingError.raise \"the compiler exploded.\"",
    "            }",
    "            errormessages.syntaxError \"no method {nd.canonicalName}.\"",
    "                  atRange (nd.range)",
    "        } elseif {nd.kind == \"outer\"} then {",
    "            nd.theObjects.last.scope",
    "        } elseif {nd.kind == \"op\"} then {",
    "            def receiverScope = self.scopeReferencedBy(nd.left)",
    "            receiverScope.scopeReferencedBy(nd.asIdentifier)",
    "        } elseif {nd.isCall} then { // this includes \"memberNodes\"",
    "            def receiver = nd.receiver",
    "            if (receiver.isImplicit) then {",
    "                util.log 60 verbose \"inherit from implicit.{nd.nameString} on line {nd.line}\"",
    "            }",
    "            def newNd = transformCall(nd)",
    "            def receiverScope = self.scopeReferencedBy(newNd.receiver)",
    "            receiverScope.scopeReferencedBy(newNd.asIdentifier)",
    "        } else {",
    "            ProgrammingError.raise(\"{nd.nameString} is not a Call, Member, Identifier, Outer or Op node.\\n\"",
    "                    ++ nd.pretty(0))",
    "        }",
    "    }",
    "    method enclosingObjectScope {",
    "        // Answer the closest enclosing scope that describes an",
    "        // object, class or module.  Could answer self.",
    "        withSurroundingScopesDo { s ->",
    "            if (s.isObjectScope) then { return s }",
    "        }",
    "        ProgrammingError.raise \"no object scope found!\"",
    "        // the outermost scope should always be a module scope,",
    "        // which is an object scope.",
    "    }",
    "    method inSameContextAs(encScope) {",
    "        // Is this scope within the same context as encScope?",
    "        // i.e. within the same method and object?",
    "        if (encScope.isObjectScope) then { return false }",
    "        withSurroundingScopesDo { s ->",
    "            if (s == encScope) then { return true }",
    "            if (s.isObjectScope) then { return false }",
    "            if (s.isMethodScope) then { return false }",
    "        }",
    "        ProgrammingError.raise \"self = {self}; encScope = {encScope}\"",
    "    }",
    "    method isUniversal { false }",
    "    method checkShadowing(ident) asA(newKind) {",
    "        def name = ident.nameString",
    "        def priorScope = thatDefines(name) ifNone {",
    "            return",
    "        }",
    "        def description = if (priorScope == self) then {",
    "            \"this\"",
    "        } else {",
    "            \"an enclosing {priorScope.variety}\"",
    "        }",
    "        def priorKind = priorScope.kind(name)",
    "        if (priorScope.allowsShadowing && {self.allowsShadowing}) then {",
    "            return",
    "        }",
    "        // new object attributes can shadow old, but other shadowing is illegal",
    "        var more := \"\"",
    "        if (priorScope.elementLines.containsKey(name)) then {",
    "            def ln = priorScope.elementLines.at(name)",
    "            if (ln > 0) then {",
    "                more := \" on line {priorScope.elementLines.at(name)}\"",
    "            }",
    "        }",
    "        if (newKind == k.vardec) then {",
    "            def suggs = list [ ]",
    "            def sugg = errormessages.suggestion.new",
    "            if (sugg.replaceUntil(\"=\")with(\"{name} :=\")",
    "                    onLine(ident.line)) then {",
    "                suggs.push(sugg)",
    "            }",
    "            if (priorKind == k.vardec) then {",
    "                more := more ++ \". To assign to the existing variable, remove 'var'\"",
    "            }",
    "            errormessages.syntaxError(\"'{ident.canonicalName}' cannot be \"",
    "                ++ \"redeclared because it is already declared in \"",
    "                ++ \"{description} scope{more}.\")",
    "                atRange(ident.range)",
    "                withSuggestions(suggs)",
    "        } else {",
    "            errormessages.syntaxError(\"'{ident.canonicalName}' cannot be \"",
    "                ++ \"redeclared in this {variety} scope because it is already declared in \"",
    "                ++ \"{description} scope{more}. Use a different name.\")",
    "                atRange(ident.range)",
    "        }",
    "    }",
    "}",
    "",
    "def emptyScope = newScopeKind(\"empty\")",
    "ast.nullNode.scope := emptyScope      // TODO: eliminate!",
    "def builtInsScope = newScopeIn(emptyScope) kind \"built-in\"",
    "def preludeScope = newScopeIn(builtInsScope) kind \"dialect\"",
    "def moduleScope = newScopeIn(preludeScope) kind \"module\"",
    "def graceObjectScope = newScopeIn(emptyScope) kind \"object\"",
    "def booleanScope = newScopeIn(builtInsScope) kind \"object\"",
    "def varFieldDecls = list []   // a list of declarations of var fields",
    "",
    "util.setPosition(0, 0)",
    "def thisModule = ast.identifierNode.new(\"module()object\", false)",
    "                                       scope(moduleScope)",
    "    // a hack to give us a way of referring to this module,",
    "    // other than by a chain of `outer`s.  The name is one that",
    "    // cannot occur naturally in a program",
    "moduleScope.addName \"module()object\" asA (k.defdec)",
    "moduleScope.at \"module()object\" putScope(moduleScope)",
    "",
    "def universalScope = object {",
    "    // The scope that defines every identifier,",
    "    // used when we have no information about an object",
    "    inherit newScopeIn(emptyScope) kind \"universal\"",
    "    method hasParent { false }",
    "    method parent { ProgrammingError.raise \"universal scope has no parent\" }",
    "    method addName(n) { ProgrammingError.raise \"can't add to the universal scope\" }",
    "    method addName(n)asA(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
    "    method addNode(n)asA(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
    "    method contains(n) { true }",
    "    method withSurroundingScopesDo(b) { b.apply(self) }",
    "    method kind(n) { \"unknown\" }",
    "    method at(n) putScope(scp) { }",
    "    method getScope(n) { self }",
    "    method isUniversal { true }",
    "}",
    "",
    "method transformIdentifier(node) ancestors(anc) {",
    "    // node is a (copy of an) ast node that represents an applied occurrence of",
    "    // an identifer id.",
    "    // This method may or may not transform node into another ast.",
    "    // There is no spec for what this method should do.  The code below",
    "    // was developed by addding and removing particular cases until",
    "    // the transformed AST was sufficiecntly similar to the one emitted by the",
    "    // old identifier resolution pass for the C code generator to accept it.",
    "    // This method seems to do the following:",
    "    // - id is self => do nothing",
    "    // - id is super => do nothing",
    "    // - id is outer => transform to an outerNode",
    "    // - id is in an assignment position and a method ‹id›:=(_) is in scope => do nothing.  The enclosing bind will transform it.",
    "    // - id is in the lexical scope: store binding occurrence of id in node",
    "    // - id is a method in an outer object scope: transform into member nodes or requests on outerNodes",
    "    // - id is a self-method: transform into a request on self",
    "    // - id is not declared: generate an error message",
    "",
    "    def nm = node.nameString",
    "    def nodeScope = node.scope",
    "    def nmGets = nm ++ \":=(1)\"",
    "    util.setPosition(node.line, node.linePos)",
    "    if (node.isAssigned) then {",
    "        if (nodeScope.hasDefinitionInNest(nmGets)) then {",
    "            if (nodeScope.kindInNest(nmGets) == k.methdec) then {",
    "                return node     // do nothing; this will be tranformed by the enclosing bind",
    "            }",
    "        }",
    "    }",
    "    def definingScope = nodeScope.thatDefines(nm) ifNone {",
    "        reportUndeclaredIdentifier(node)",
    "    }",
    "    def nodeKind = definingScope.kind(nm)",
    "    if (node.isAssigned) then {",
    "        if (nodeKind.isAssignable.not) then {",
    "            reportAssignmentTo(node) declaredInScope(definingScope)",
    "        }",
    "    }",
    "    if (nm == \"outer\") then {",
    "        return ast.outerNode [nodeScope.enclosingObjectScope.node].",
    "                setPositionFrom(node).setScope(nodeScope)",
    "    }",
    "    if (nm == \"self\") then {",
    "        return node",
    "    }",
    "    checkForAmbiguityOf (node) definedIn (definingScope) asA (nodeKind)",
    "    def v = definingScope.variety",
    "    if (v == \"built-in\") then { return node }",
    "    if (v == \"dialect\") then {",
    "        def p = ast.identifierNode.new(\"prelude\", false) scope(nodeScope)",
    "        return ast.memberNode.new(nm, p)",
    "              scope(nodeScope).onSelf.withGenericArgs(node.generics)",
    "    }",
    "    if (nodeKind.isParameter) then { return node }",
    "",
    "    if (definingScope == moduleScope) then {",
    "        if (nodeKind == k.defdec) then { return node }",
    "        if (nodeKind == k.vardec) then { return node }",
    "    }",
    "    if (definingScope == nodeScope.enclosingObjectScope) then {",
    "        return ast.memberNode.new(nm,",
    "            ast.identifierNode.new(\"self\", false) scope(nodeScope)",
    "        ) scope(nodeScope).onSelf.withGenericArgs(node.generics)",
    "    }",
    "    if (nodeScope.isObjectScope.not",
    "             && {nodeScope.isInSameObjectAs(definingScope)}) then {",
    "        if (nodeKind == k.methdec) then { return node }     // can this ever happen?",
    "        if (nodeKind == k.defdec) then { return node }",
    "        if (nodeKind == k.vardec) then { return node }",
    "    }",
    "    if (v == \"method\") then { return node }",
    "        // node is defined in the closest enclosing method.",
    "        // there may be intervening blocks, but no objects or clases.",
    "        // If this identifier is in a block that is returned, then ids",
    "        // defined in the enclosing method scope have to go in a closure",
    "        // In that case, leaving the id untouched may be wrong",
    "    if (v == \"block\") then { return node }",
    "    return nodeScope.resolveOuterMethod(nm) fromNode(node)",
    "}",
    "method checkForAmbiguityOf (node) definedIn (definingScope) asA (kind) {",
    "    // The spec says:",
    "    // When resolving an implicit request, the usual rules of lexical scoping",
    "    // apply, so a definition of m in the current scope will take precedence",
    "    // over any definitions in enclosing scopes. However, if m is defined in",
    "    // the current scope by inheritance or trait use, rather than directly,",
    "    // and also defined directly in an enclosing scope, then an implicit",
    "    // request of m is ambiguous and is an error.",
    "    ",
    "    def currentScope = node.scope",
    "    if (kind.fromParent.not) then { return }",
    "    def name = node.nameString",
    "    def conflictingScope = definingScope.parent.thatDefines(name) ifNone {",
    "        return",
    "    }",
    "    def conflictingKind = conflictingScope.kind(name)",
    "    if (conflictingKind.fromParent) then {",
    "        return    // request is ambiguous only if name is defined",
    "                  // _directly_ in an enclosing scope.  ",
    "    }",
    "    var more := \"\"",
    "    if (conflictingScope.elementLines.containsKey(name)) then {",
    "        def earlierDef = conflictingScope.elementLines.at(name)",
    "        if (earlierDef != 0) then {",
    "            more := \" at line {earlierDef}\"",
    "        }",
    "    }",
    "    util.log 60 verbose \"currentScope = {currentScope}\\n defines {name} as {kind}\\nconflictingScope = {conflictingScope}\\n defines {name} as {conflictingKind}\"",
    "    errormessages.syntaxError \"{node.canonicalName} is both {kind}, and defined in an enclosing scope{more}.\"",
    "        atRange(node.range)",
    "}",
    "method checkForReservedName(node) {",
    "    def ns = node.nameString",
    "    if (reserved.contains(ns)) then {",
    "        errormessages.syntaxError \"{ns} is a reserved name and cannot be re-declared.\"",
    "            atRange(node.range)",
    "    }",
    "}",
    "",
    "method suggestionsForIdentifier(node) {",
    "    def nm = node.nameString",
    "    def suggestions = set.empty",
    "    def nodeScope = node.scope",
    "    def thresh = 4      // max number of suggestions",
    "    nodeScope.withSurroundingScopesDo { s ->",
    "        s.elements.keysDo { v ->",
    "            if (errormessages.name (nm) mightBeIntendedToBe(v)) then {",
    "                def sug = errormessages.suggestion.new",
    "                sug.replaceRange(node.linePos, node.linePos +",
    "                    node.value.size - 1) with (canonical(v)) onLine(node.line)",
    "                suggestions.add(sug)",
    "                if (suggestions.size ≥ thresh) then { return suggestions }",
    "            }",
    "        }",
    "    }",
    "    nodeScope.elementScopes.keysDo { s ->",
    "        if (nodeScope.elementScopes.at(s).contains(nm)) then {",
    "            def sug = errormessages.suggestion.new",
    "            sug.insert \"{s}.\" atPosition (node.linePos) onLine(node.line)",
    "            suggestions.add(sug)",
    "            if (suggestions.size ≥ thresh) then { return suggestions }",
    "        }",
    "    }",
    "    suggestions",
    "}",
    "",
    "method canonical(numericName) {",
    "    def parts = numericName.split \"(\"",
    "    var output := parts.first",
    "    for (2..parts.size) do { i ->",
    "        def part_split = parts.at(i).split \")\"",
    "        def n = part_split.first.asNumber",
    "        if (n.isNaN) then {",
    "            output := output ++ part_split.first",
    "        } else {",
    "            output := output ++ \"(\" ++ (\"_,\" * (n - 1)) ++ \"_)\"",
    "            if (part_split.size > 1) then {",
    "                output := output ++ part_split.second",
    "            }",
    "        }",
    "    }",
    "    return output",
    "}",
    "",
    "method reportUndeclaredIdentifier(node) {",
    "    def suggestions = suggestionsForIdentifier(node)",
    "    def cn = node.canonicalName",
    "    def varBit = if (cn.endsWith \")\") then { \"\" } else { \" variable or\" }",
    "    errormessages.syntaxError(\"unknown{varBit} method '{cn}'; \" ++",
    "          \"this may be a spelling mistake, or an attempt to access a{varBit} method in another scope\")",
    "          atRange (node.range) withSuggestions (suggestions)",
    "}",
    "",
    "method reportAssignmentTo(node) declaredInScope(scp) {",
    "    // Report a syntax error for an illegal assignment",
    "",
    "    def name = node.nameString",
    "    def kind = scp.kind(name)",
    "    var more := \"\"",
    "    def suggestions = list []",
    "    if (scp.elementLines.containsKey(name)) then {",
    "        more := \" on line {scp.elementLines.at(name)}\"",
    "    }",
    "    if (kind == k.selfDef) then {",
    "        errormessages.syntaxError(\"'{name}' cannot be re-bound; \" ++",
    "              \"it always refers to the current object.\")",
    "              atRange(node.range)",
    "    } elseif { reserved.contains(name) } then {",
    "        errormessages.syntaxError(\"'{name}' is a reserved name and \" ++",
    "              \"cannot be re-bound.\")",
    "              atRange(node.range)",
    "    } elseif { kind == k.defdec } then {",
    "        if (scp.elementTokens.containsKey(name)) then {",
    "            def tok = scp.elementTokens.at(name)",
    "            def sugg = errormessages.suggestion.new",
    "            if (tok.value == \"def\") then {",
    "                var eq := tok",
    "                while {(eq.kind != \"op\") || (eq.value != \"=\")} do {",
    "                    eq := eq.next",
    "                }",
    "                sugg.replaceToken(eq)with(\":=\")",
    "                sugg.replaceToken(tok)with(\"var\")",
    "                suggestions.push(sugg)",
    "            } else {",
    "                errormessages.syntaxError(\"'{name}' cannot be changed \" ++",
    "                    \"because it was declared as a '{tok.value}'{more}.\")",
    "                    atRange(node.range)",
    "            }",
    "        }",
    "        errormessages.syntaxError(\"'{name}' cannot be changed \"",
    "            ++ \"because it was declared with 'def'{more}. \"",
    "            ++ \"To make it a variable, use 'var' in the declaration\")",
    "            atRange(node.range)",
    "            withSuggestions(suggestions)",
    "    } elseif { kind == k.typedec } then {",
    "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
    "            ++ \"because it is declared as a type{more}.\")",
    "            atRange(node.range)",
    "    } elseif { kind.isParameter } then {",
    "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
    "            ++ \"because it is declared as a parameter{more}.\")",
    "            atRange(node.range)",
    "    } elseif { kind == k.methdec } then {",
    "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
    "            ++ \"because it is declared as a method{more}.\")",
    "            atRange(node.range)",
    "    }",
    "}",
    "",
    "method resolveIdentifiers(topNode) {",
    "    // Recursively replace bare identifiers with their fully-qualified",
    "    // equivalents.  Creates and returns a new AST; map works",
    "    // bottom-up, so by the time a node is mapped, all of its",
    "    // descendents have already been mapped.",
    "",
    "    def newModule = topNode.map { node, anc ->",
    "        if ( node.isAppliedOccurrence ) then {",
    "            transformIdentifier(node) ancestors(anc)",
    "        } elseif { node.isCall } then {",
    "            transformCall(node)",
    "        } elseif { node.isInherits } then {",
    "            transformInherits(node) ancestors(anc)",
    "        } elseif { node.isBind } then {",
    "            transformBind(node) ancestors(anc)",
    "        } elseif { node.isTypeDec } then {",
    "            node",
    "        } else {",
    "            node",
    "        }",
    "    } ancestors (ast.ancestorChain.empty)",
    "    addAssignmentMethodsToSymbolTable",
    "    newModule",
    "}",
    "",
    "method addAssignmentMethodsToSymbolTable {",
    "    // Adds the ‹var›(_):= methods for var fields to the symbol table, so that",
    "    // they will be inserted into the gct file.  This is delayed until after",
    "    // identifiers have been resolved, so that assignments to module-level",
    "    // var fields are _not_ resolved into requests on the ‹var›(_):= method,",
    "    // but are compiled as simple assignments (which are more efficient). Note",
    "    // that module-level var fields that are not public don't get (_):= methods",
    "",
    "    varFieldDecls.do { decl ->",
    "        def dScope = decl.scope",
    "        def nameGets = decl.nameString ++ \":=(_)\"",
    "        if (dScope.isModuleScope.not || decl.isPublic) then {",
    "            util.setPosition(decl.line, decl.linePos)",
    "            dScope.addName(nameGets) asA (k.methdec)  // will complain if already declared",
    "        }",
    "    }",
    "}",
    "",
    "method processGCT(gct, importedModuleScope) {",
    "    gct.at \"classes\" ifAbsent {emptySequence}.do { c ->",
    "        def constrs = gct.at \"constructors-of:{c}\"",
    "        def classScope = newScopeIn(importedModuleScope) kind \"class\"",
    "        for (constrs) do { constr ->",
    "            def ns = newScopeIn(importedModuleScope) kind \"object\"",
    "            classScope.addName(constr)",
    "            classScope.at(constr) putScope(ns)",
    "            gct.at \"methods-of:{c}.{constr}\".do { mn ->",
    "                ns.addName(mn)",
    "            }",
    "        }",
    "        importedModuleScope.addName(c)",
    "        importedModuleScope.at(c) putScope(classScope)",
    "    }",
    "    gct.at \"fresh-methods\" ifAbsent {emptySequence}.do { c ->",
    "        def objScope = newScopeIn(importedModuleScope) kind \"object\"",
    "        gct.at \"fresh:{c}\".do { mn ->",
    "            objScope.addName(mn)",
    "        }",
    "        importedModuleScope.addName(c)",
    "        importedModuleScope.at(c) putScope(objScope)",
    "    }",
    "}",
    "",
    "var isInBeginningStudentDialect := false",
    "",
    "method setupContext(moduleObject) {",
    "    // define the built-in names",
    "    util.setPosition(0, 0)",
    "",
    "    builtInsScope.addName \"Type\" asA(k.typedec)",
    "    builtInsScope.addName \"Object\" asA(k.typedec)",
    "    builtInsScope.addName \"Unknown\" asA(k.typedec)",
    "    builtInsScope.addName \"String\" asA(k.typedec)",
    "    builtInsScope.addName \"Number\" asA(k.typedec)",
    "    builtInsScope.addName \"Boolean\" asA(k.typedec)",
    "    builtInsScope.addName \"Done\" asA(k.typedec)",
    "    builtInsScope.addName \"done\" asA(k.defdec)",
    "    builtInsScope.addName \"true\"",
    "    builtInsScope.addName \"false\"",
    "    builtInsScope.addName \"outer\" asA(k.defdec)",
    "    builtInsScope.addName \"readable\"",
    "    builtInsScope.addName \"writable\"",
    "    builtInsScope.addName \"public\"",
    "    builtInsScope.addName \"confidential\"",
    "    builtInsScope.addName \"override\"",
    "    builtInsScope.addName \"parent\"",
    "    builtInsScope.addName \"...\" asA(k.defdec)",
    "",
    "    preludeScope.addName \"asString\"",
    "    preludeScope.addName \"::(1)\"",
    "    preludeScope.addName \"++(1)\"",
    "    preludeScope.addName \"==(1)\"",
    "    preludeScope.addName \"≠(1)\"",
    "    preludeScope.addName \"hash\"",
    "    preludeScope.addName \"for(1)do(1)\"",
    "    preludeScope.addName \"while(1)do(1)\"",
    "    preludeScope.addName \"print(1)\"",
    "    preludeScope.addName \"native(1)code(1)\"",
    "    preludeScope.addName \"native(1)header(1)\"",
    "    preludeScope.addName \"Exception\" asA(k.defdec)",
    "    preludeScope.addName \"RuntimeError\" asA(k.defdec)",
    "    preludeScope.addName \"NoSuchMethod\" asA(k.defdec)",
    "    preludeScope.addName \"ProgrammingError\" asA(k.defdec)",
    "    preludeScope.addName \"TypeError\" asA(k.defdec)",
    "    preludeScope.addName \"ResourceException\" asA(k.defdec)",
    "    preludeScope.addName \"EnvironmentException\" asA(k.defdec)",
    "    preludeScope.addName \"π\" asA(k.defdec)",
    "    preludeScope.addName \"infinity\" asA(k.defdec)",
    "    preludeScope.addName \"minigrace\"",
    "    preludeScope.addName \"_methods\"",
    "    preludeScope.addName \"primitiveArray\"",
    "    preludeScope.addName \"become(1)\"",
    "    preludeScope.addName \"unbecome(1)\"",
    "    preludeScope.addName \"clone(1)\"",
    "    preludeScope.addName \"inBrowser\"",
    "    preludeScope.addName \"engine\"",
    "",
    "    graceObjectScope.addName \"isMe(1)\" asA (k.graceObjectMethod)",
    "    graceObjectScope.addName \"myIdentityHash\" asA (k.graceObjectMethod)",
    "    graceObjectScope.addName \"asString\" asA (k.graceObjectMethod)",
    "    graceObjectScope.addName \"asDebugString\" asA (k.graceObjectMethod)",
    "",
    "    booleanScope.addName \"prefix!\"",
    "    booleanScope.addName \"&&(1)\"",
    "    booleanScope.addName \"||(1)\"",
    "    booleanScope.addName \"not\"",
    "",
    "    builtInsScope.addName \"graceObject\"",
    "    builtInsScope.at \"graceObject\" putScope(graceObjectScope)",
    "    builtInsScope.addName \"prelude\" asA(k.defdec)",
    "    builtInsScope.at \"prelude\" putScope(preludeScope)",
    "    builtInsScope.addName \"_prelude\" asA(k.defdec)",
    "    builtInsScope.at \"_prelude\" putScope(preludeScope)",
    "    builtInsScope.at \"true\" putScope(booleanScope)",
    "    builtInsScope.at \"false\" putScope(booleanScope)",
    "",
    "    def dialectNode = moduleObject.theDialect",
    "    def dialectName:String = dialectNode.value",
    "    if (dialectName ≠ \"none\") then {",
    "        xmodule.checkExternalModule(dialectNode)",
    "        def gctDict = xmodule.parseGCT(dialectName)",
    "        def typeDecls = set.withAll(gctDict.at \"types\" ifAbsent {sequence.empty})",
    "        gctDict.at \"public\" ifAbsent {emptySequence}.do { mn ->",
    "            preludeScope.addName(mn) asA (if (typeDecls.contains(mn))",
    "                                           then { k.typedec } else { k.methdec })",
    "        }",
    "        processGCT(gctDict, preludeScope)",
    "    }",
    "    if (dialectName == \"beginningStudent\") then {",
    "        isInBeginningStudentDialect := true",
    "    }",
    "}",
    "",
    "method checkTraitBody(traitObjNode) {",
    "    traitObjNode.value.do { node ->",
    "        if (node.isLegalInTrait.not) then {",
    "            def badThing = node.statementName",
    "            def article = articleFor (badThing)",
    "            errormessages.syntaxError(\"{article} {badThing} cannot appear in \" ++",
    "                \"a trait (defined on line {traitObjNode.line})\")",
    "                atLine(node.line)",
    "        }",
    "    }",
    "}",
    "",
    "method articleFor(str) {",
    "    // the indefinite article to preceed str",
    "    if (\"aeioAEIO\".contains(str.first)) then { \"an\" } else { \"a\" }",
    "}",
    "",
    "method buildSymbolTableFor(topNode) ancestors(topChain) {",
    "    def symbolTableVis = object {",
    "        inherit ast.baseVisitor",
    "",
    "        method visitBind (o) up (anc) {",
    "            o.scope := anc.parent.scope",
    "            def lValue = o.dest",
    "            if (lValue.kind == \"identifier\") then {",
    "                lValue.isAssigned := true",
    "            }",
    "            return true",
    "        }",
    "        method visitCall (o) up (anc) {",
    "            def enclosingNode = anc.parent",
    "            def scope = enclosingNode.scope",
    "            o.scope := scope",
    "            def callee = o.receiver",
    "            if (callee.isIdentifier) then {",
    "                callee.inRequest := true",
    "            }",
    "            o.parts.do { each -> each.scope := o }",
    "            if (enclosingNode.isMethod) then {",
    "                if (enclosingNode.body.last == o) then {",
    "                    o.isTailCall := true",
    "                }",
    "            } elseif { enclosingNode.isReturn } then {",
    "                    o.isTailCall := true",
    "            }",
    "            return true",
    "        }",
    "        method visitBlock (o) up (anc) {",
    "            o.scope := newScopeIn(anc.parent.scope) kind \"block\"",
    "            true",
    "        }",
    "        method visitDefDec (o) up (anc) {",
    "            def myParent = anc.parent",
    "            o.scope := myParent.scope",
    "            o.parentKind := myParent.kind",
    "            def declaredName = o.nameString",
    "            if (false != o.startToken) then {",
    "                myParent.scope.elementTokens.at(declaredName)put(o.startToken)",
    "            }",
    "            if (o.value.isObject) then { o.value.name := declaredName }",
    "            true",
    "        }",
    "        method visitVarDec(o) up (anc) {",
    "            def myParent = anc.parent",
    "            o.scope := myParent.scope",
    "            o.parentKind := myParent.kind",
    "            true",
    "        }",
    "        method visitIdentifier (o) up (anc) {",
    "            var scope := anc.parent.scope",
    "            o.scope := scope",
    "            if (o.isBindingOccurrence) then {",
    "                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {",
    "                    checkForReservedName(o)",
    "                    def kind = o.declarationKindWithAncestors(anc)",
    "                    if (scope.isObjectScope && (kind == k.vardec)) then {",
    "                        varFieldDecls.add(anc.parent)",
    "                        // Why not just add the :=(_) now?",
    "                        // Because we want some field assignments to be compiled as",
    "                        // direct assignments, and hence have to distinguish",
    "                        // programmer-writen :=(_) methods from synthetic ones.",
    "                    }",
    "                    scope.addNode(o) asA (kind)",
    "                }",
    "            } elseif {o.wildcard} then {",
    "                errormessages.syntaxError(\"'_' cannot be used in an expression\")",
    "                    atRange(o.range)",
    "            }",
    "            true",
    "        }",
    "        method visitAlias (o) up (ac) {",
    "            o.scope := ac.parent.scope",
    "            o.newName.accept(self) from (ac.extend(o))",
    "            false   // no need to visit the aliasNode's other components",
    "        }",
    "        method visitImport (o) up (anc) {",
    "            o.scope := anc.parent.scope",
    "            xmodule.checkExternalModule(o)",
    "            def gct = xmodule.parseGCT(o.path)",
    "            def otherModule = newScopeIn(anc.parent.scope) kind \"module\"",
    "            otherModule.node := o",
    "            processGCT(gct, otherModule)",
    "            o.scope.at(o.nameString) putScope(otherModule)",
    "            true",
    "        }",
    "        method visitInherits (o) up (anc) {",
    "            o.scope := anc.parent.scope",
    "            if (o.isUse) then {",
    "                if (anc.parent.canUse.not) then {",
    "                    errormessages.syntaxError(\"use statements must \" ++",
    "                        \"be inside an object, class, or trait\")",
    "                        atRange(o.range)",
    "                }",
    "            } else {",
    "                if (anc.parent.canInherit.not) then {",
    "                    errormessages.syntaxError(\"inherit statements must \" ++",
    "                        \"be inside an object or class; a trait cannot inherit\")",
    "                        atRange(o.range)",
    "                }",
    "            }",
    "            true",
    "        }",
    "        method visitMethod (o) up (anc) {",
    "            def surroundingScope = anc.parent.scope",
    "            if (surroundingScope.isObjectScope.not) then {",
    "                // The parser accepts method declarations as statments, and thus",
    "                // class and trait declarations as statements too.",
    "                // Here we check that they are inside an object.",
    "                // This produces better diagnostics than rejecting them in",
    "                // the parser, as well as simplifying the parser.",
    "",
    "                errormessages.syntaxError(\"{o.description} declarations are permitted only\" ++",
    "                    \" inside an object\") atRange(o.range)",
    "            }",
    "            def ident = o.asIdentifier",
    "            checkForReservedName(ident)",
    "            if (ident.isBindingOccurrence) then {",
    "                def knd = if (o.isRequired) then {",
    "                    k.required",
    "                } else {",
    "                    k.methdec",
    "                }",
    "                surroundingScope.addNode (ident) asA (knd)",
    "                ident.isDeclaredByParent := true",
    "                // aliased and excluded names are appliedOccurrences",
    "                o.scope := newScopeIn(surroundingScope) kind \"method\"",
    "                if (o.returnsObject) then {",
    "                    o.isFresh := true",
    "                }",
    "            }",
    "            if (o.body.isEmpty.not && {o.body.last.isObject}) then {",
    "                o.body.last.name := o.canonicalName",
    "            }",
    "            true",
    "        }",
    "        method visitMethodType (o) up (anc) {",
    "            def surroundingScope = anc.parent.scope",
    "            def ident = o.asIdentifier",
    "            checkForReservedName(ident)",
    "            surroundingScope.addNode (ident) asA (k.methdec)",
    "            ident.isDeclaredByParent := true",
    "            o.scope := newScopeIn(anc.parent.scope) kind \"methodtype\"",
    "            // the scope for the parameters (including the type parameters,",
    "            // if any) of this method.",
    "            true",
    "        }",
    "        method visitObject (o) up (anc) {",
    "            def myParent = anc.parent",
    "            o.scope := newScopeIn(myParent.scope) kind \"object\"",
    "            if (o.inTrait) then { checkTraitBody(o) }",
    "            true",
    "        }",
    "        method visitModule(o) up (anc) {",
    "            // the module scope was set before the traversal started",
    "            true",
    "        }",
    "        method visitTypeDec (o) up (anc) {",
    "            def enclosingScope = anc.parent.scope",
    "            if (enclosingScope.isObjectScope.not) then {",
    "                errormessages.syntaxError(\"type declarations are permitted only\" ++",
    "                    \" inside an object\") atRange(o.range)",
    "            }",
    "            enclosingScope.addNode(o.name) asA(k.typedec)",
    "            o.name.isDeclaredByParent := true",
    "            o.scope := newScopeIn(enclosingScope) kind \"typedec\"",
    "            // this scope will be the home for any type parameters.",
    "            // If there are no parameters, it won't be used.",
    "            true",
    "        }",
    "        method visitTypeLiteral (o) up (anc) {",
    "            o.scope := newScopeIn(anc.parent.scope) kind \"type\"",
    "            true",
    "        }",
    "        method visitReturn(o) up (anc) {",
    "            o.scope := anc.parent.scope;",
    "            def enclosingMethodNode = anc.suchThat { n -> n.isMethod } ifAbsent {",
    "                errormessages.syntaxError \"`return` statements must be inside methods.\"",
    "                    atRange(o.range)",
    "            }",
    "            o.dtype := enclosingMethodNode.dtype",
    "            true",
    "        }",
    "        method visitTypeParameters(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitIf(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitMatchCase(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitTryCatch(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitSignaturePart(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitArray(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitMember(o) up (anc) {",
    "            visitCall(o) up (anc)",
    "        }",
    "        method visitGeneric(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitString(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitNum(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitOp(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitDialect(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "        method visitCommentNode(o) up (anc) { o.scope := anc.parent.scope ; true }",
    "    }   // end of symbolTableVis",
    "",
    "    def objectScopesVis = object {",
    "        // This traversal can't be completed in the buildSymbolTable visitor,",
    "        // because the visitation is top-down, and hence the scope of the",
    "        // body of a def or method won't have been allocated when the",
    "        // delcaration is visited.",
    "",
    "        inherit ast.baseVisitor",
    "        method visitDefDec (o) up (anc) {",
    "            def rhs = o.value",
    "            if (rhs.returnsObject) then {",
    "                o.scope.at(o.nameString) putScope(rhs.returnedObjectScope)",
    "            }",
    "            true",
    "        }",
    "        method visitMethod (o) up (anc) {",
    "            def myParent = anc.parent",
    "            if (o.returnsObject) then {",
    "                myParent.scope.at(o.nameString) putScope(o.returnedObjectScope)",
    "                if (anc.forebears.forebears.isEmpty.not) then {",
    "                    // omit this if I'm at the module-level",
    "                    def factoryName = myParent.name",
    "                    def tailNode = o.body.last",
    "                    if ((factoryName != \"object\") && (tailNode.isObject)) then {",
    "                        tailNode.name := factoryName ++ \".\" ++ tailNode.name",
    "                    }",
    "                }",
    "            }",
    "            true",
    "        }",
    "    }",
    "",
    "    def inheritanceVis = object {",
    "        inherit ast.baseVisitor",
    "        method visitObject (o) up (anc) {",
    "            collectParentNames(o)",
    "            true",
    "        }",
    "        method visitModule (o) up (anc) {",
    "            collectParentNames(o)",
    "            true",
    "        }",
    "    }",
    "",
    "    topNode.accept(symbolTableVis) from(topChain)",
    "    topNode.accept(objectScopesVis) from(topChain)",
    "    topNode.accept(inheritanceVis) from(topChain)",
    "}",
    "",
    "method collectParentNames(node) {",
    "    // node is an object or class; put the names that it inherit into its scope.",
    "    // In the process, checks for a cycle in the inheritance chain.",
    "    def nodeScope = node.scope",
    "    if (nodeScope.inheritedNames == completed) then {",
    "        return",
    "    }",
    "    if (nodeScope.inheritedNames == inProgress) then {",
    "        errormessages.syntaxError \"cyclic inheritance or trait use.\"",
    "            atRange(node.line, node.linePos, node.linePos + 4)",
    "    }",
    "    nodeScope.inheritedNames := inProgress",
    "    gatherInheritedNames(node)",
    "    gatherUsedNames(node)",
    "    nodeScope.inheritedNames := completed",
    "}",
    "",
    "method gatherInheritedNames(node) is confidential {",
    "    if (node.isObject) then {",
    "        var inhNode := node.superclass",
    "        def objScope = node.scope",
    "        var superScope",
    "        var inheritedKind := k.inherited",
    "        if (false == inhNode) then {",
    "            def gO = ast.identifierNode.new(\"graceObject\", false) scope(objScope)",
    "            inhNode := ast.inheritNode.new(gO) scope(objScope)",
    "            superScope := graceObjectScope",
    "            inheritedKind := k.graceObjectMethod",
    "        } else {",
    "            superScope := objScope.scopeReferencedBy(inhNode.value)",
    "            // If superScope is the universal scope, then we have no information",
    "            // about the inherited attributes",
    "            if (superScope.isUniversal.not) then {",
    "                if (ast.nullNode != superScope.node) then {",
    "                    // superScope.node == nullNode when superScope describes",
    "                    // an imported module.",
    "                    collectParentNames(superScope.node)",
    "                }",
    "            }",
    "        }",
    "        superScope.elements.keysDo { each ->",
    "            if (each != \"self\") then {",
    "                objScope.addName(each) asA(inheritedKind)",
    "                inhNode.providedNames.add(each)",
    "            }",
    "        }",
    "        inhNode.aliases.do { a ->",
    "            def old = a.oldName.nameString",
    "            if (superScope.contains(old)) then {",
    "                inhNode.providedNames.add(a.newName.nameString)",
    "            } else {",
    "                errormessages.syntaxError(\"can't define an alias for {old} \" ++",
    "                    \"because it is not present in the inherited object\")",
    "                    atRange(a.oldName.range)",
    "            }",
    "        }",
    "        inhNode.exclusions.do { exMeth ->",
    "            inhNode.providedNames.remove(exMeth.nameString) ifAbsent {",
    "                errormessages.syntaxError(\"can't exclude {exMeth.canonicalName} \" ++",
    "                    \"because it is not present in the inherited object\")",
    "                    atRange(exMeth.range)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "method gatherUsedNames(objNode) is confidential {",
    "    // For each of objNodes's used traits, gather the names",
    "    // introduced by that trait, as modified by alias and exclude.",
    "",
    "    def traitMethods = map.dictionary.empty",
    "    def objScope = objNode.scope",
    "    objNode.usedTraits.do { t ->",
    "        def traitScope = objScope.scopeReferencedBy(t.value)",
    "        def traitNode = traitScope.node",
    "        def requiredNames = list.empty",
    "        if (traitNode.isNull.not) then {",
    "            // if traitNode is null, the trait's scope comes from a gct, and",
    "            // we have no information as to whether or not it references a trait.",
    "            if (traitNode.isTrait.not) then {",
    "                errormessages.syntaxError(\"{t.value.toGrace 0} is not a trait,\"",
    "                      + \" so it may not appear in a 'use' statement\")",
    "                      atRange(t)",
    "            }",
    "        }",
    "        if (traitNode.isObject) then {",
    "            collectParentNames(traitScope.node)",
    "        }",
    "        traitScope.keysAndKindsDo { nm, kd ->",
    "            if (kd.forUsers) then {",
    "                objScope.addName(nm) asA(k.fromTrait)",
    "                t.providedNames.add(nm)",
    "                if (kd.isRequired) then {",
    "                    requiredNames.add(nm)",
    "                }",
    "            }",
    "        }",
    "        t.aliases.do { a ->",
    "            def old = a.oldName.nameString",
    "            if (traitScope.contains(old)) then {",
    "                t.providedNames.add(a.newName.nameString)",
    "            } else {",
    "                errormessages.syntaxError(\"can't define an alias for \" ++",
    "                    \"{old} because it is not present in the trait\")",
    "                    atRange(a.oldName.range)",
    "            }",
    "        }",
    "        t.exclusions.do { exMeth ->",
    "            t.providedNames.remove(exMeth.nameString) ifAbsent {",
    "                errormessages.syntaxError(\"can't exclude {exMeth.canonicalName} \" ++",
    "                    \"because it is not available in the used trait\")",
    "                    atRange(exMeth.range)",
    "            }",
    "        }",
    "        t.providedNames.do { methName ->",
    "            if (requiredNames.contains(methName).not) then {",
    "                def definingTraits = traitMethods.at(methName) ifAbsent { list [] }",
    "                definingTraits.push(t)",
    "                traitMethods.at(methName)put(definingTraits)",
    "            }",
    "        }",
    "    }",
    "    checkForConflicts(objNode, traitMethods)",
    "}",
    "",
    "method checkForConflicts(objNode, traitMethods) {",
    "    // traitMethods is a dictionary with methodNames as keys, and",
    "    // a list of sources as values.  Multiple sources indicate a conflict,",
    "    // unless there is a local definition too.",
    "    def conflicts = emptyList",
    "",
    "    traitMethods.keysDo { methName ->",
    "        def sources = traitMethods.at(methName)",
    "        if (sources.size > 1) then {    // a method has more than one source trait",
    "            if (objNode.localNames.contains(methName).not) then {",
    "                conflicts.addLast (conflictForMethodName(methName) from(sources))",
    "            }",
    "        }",
    "    }",
    "",
    "    if (conflicts.isEmpty) then { return }",
    "",
    "    var maxSourceLine := 0",
    "    var message := if (conflicts.size > 1) then {",
    "        \"trait conflicts found.\\n    \"",
    "    } else {",
    "        \"trait conflict found. \"",
    "    }",
    "    conflicts.do { each ->",
    "        def sourceList = each.sources.map { s -> s.nameString }",
    "        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }",
    "              startingWith(maxSourceLine)",
    "        message := message ++ \"Method `{each.methodName}` is defined in \" ++",
    "              errormessages.readableStringFrom(sourceList) ++ \".\\n    \"",
    "    }",
    "    if (maxSourceLine == 0) then {",
    "        errormessages.error(message)",
    "    } else {",
    "        errormessages.error(message) atLine (maxSourceLine)",
    "    }",
    "}",
    "",
    "class conflictForMethodName(nm) from(srcs) {",
    "    def methodName is public = nm",
    "    def sources is public = srcs",
    "}",
    "",
    "method transformBind(bindNode) ancestors(anc) {",
    "    // bindNode is (a shallow copy of) a bindNode.  If it is binding a",
    "    // \"member\" or an identifier, transform it into a request on a setter",
    "",
    "    def dest = bindNode.dest",
    "    def currentScope = bindNode.scope",
    "    util.setPosition(bindNode.line, bindNode.linePos)",
    "    if ( dest.isMember ) then {",
    "        def nm = dest.nameString",
    "        def nmGets = nm ++ \":=\"",
    "        def part = ast.requestPart.request(nmGets) withArgs [bindNode.value]",
    "                scope(currentScope)",
    "        def newCall = ast.callNode.new(dest.receiver, [part]) scope(currentScope)",
    "        newCall.end := bindNode.value.end",
    "        if (dest.receiver.isSelfOrOuter) then {",
    "            newCall.onSelf",
    "        }",
    "        return newCall",
    "    } elseif { dest.isIdentifier } then {",
    "        def nm = dest.nameString",
    "        def nmGets = nm ++ \":=(1)\"",
    "        if (currentScope.hasDefinitionInNest(nmGets)) then {",
    "            if (currentScope.kindInNest(nmGets) == k.methdec) then {",
    "                def rcvr = currentScope.resolveOuterMethod(nmGets) fromNode(bindNode).receiver",
    "                def part = ast.requestPart.request(nm ++ \":=\")",
    "                        withArgs [ bindNode.value ] scope(currentScope)",
    "                def newCall = ast.callNode.new(rcvr, [ part ]) scope(currentScope).onSelf",
    "                newCall.end := bindNode.value.end",
    "                return newCall",
    "            } else {",
    "                util.log 20 verbose \"bind check 2 failed\"",
    "            }",
    "        }",
    "    }",
    "    bindNode",
    "}",
    "",
    "",
    "method transformInherits(inhNode) ancestors(anc) {",
    "    // inhNode is (a shallow copy of) an inheritNode.  Transform it to deal",
    "    // with superobject initialization and inherited names, including",
    "    // inheritance modifiers",
    "    def superExpr = inhNode.value",
    "    def currentScope = inhNode.scope",
    "    if (currentScope.isObjectScope.not) then {",
    "        errormessages.syntaxError \"{inhNode.statementName} statements must be directly inside an object.\"",
    "                    atRange(inhNode.range)",
    "    }",
    "    if (superExpr.isAppliedOccurrence) then {",
    "        def nm = superExpr.nameString",
    "        def definingScope = currentScope.thatDefines(nm)",
    "        if (definingScope == currentScope) then {",
    "            errormessages.syntaxError \"the object being inherited must be from an enclosing scope.\"",
    "                atRange(superExpr.range)",
    "        }",
    "        if ((definingScope.kind(nm)) ≠ k.methdec) then {",
    "            errormessages.syntaxError \"the object being inherited must be freshly generated from a method.\"",
    "                  atRange(superExpr.range)",
    "        }",
    "        def sv = definingScope.variety",
    "        if ((sv == \"built-in\") || (sv == \"dialect\")) then {",
    "            // this deals with \"inherit true\" etc; identifiers from the built-in",
    "            // scope have not been transformed to member nodes",
    "            def preludeName = if (sv == \"built-in\") then { \"_prelude\" }",
    "                                                    else { \"prelude\" }",
    "            def preludeNode = ast.identifierNode.new(preludeName, false) scope(currentScope)",
    "            def newCall = ast.callNode.new(preludeNode, [",
    "                ast.requestPart.request (nm) withArgs [] scope(currentScope),",
    "                ast.requestPart.request \"$object\" withArgs [",
    "                    ast.identifierNode.new(\"self\", false) scope(currentScope)] scope(currentScope) ])",
    "            newCall.end := superExpr.end",
    "            inhNode.value := newCall",
    "        } else {",
    "            ProgrammingError.raise (\"untransformed idfentifer `{nm}` found \" ++",
    "                \"in {inhNode.statementName} statement on line {inhNode.line}\")",
    "        }",
    "    } elseif {superExpr.isMember} then {",
    "        def newCall = ast.callNode.new(inhNode.value.receiver, [",
    "            ast.requestPart.request(inhNode.value.value) withArgs( [] ) scope(currentScope),",
    "            ast.requestPart.request \"$object\" withArgs (",
    "            [ast.identifierNode.new(\"self\", false) scope(currentScope)]) scope(currentScope) ]",
    "            ) scope(currentScope)",
    "        newCall.isSelfRequest := superExpr.isSelfRequest",
    "        newCall.end := superExpr.end",
    "        inhNode.value := newCall",
    "    } elseif {superExpr.isCall} then {",
    "        superExpr.parts.push(ast.requestPart.request \"$object\"",
    "            withArgs ( [ast.identifierNode.new(\"self\", false) scope(currentScope)] ))",
    "    } else {",
    "        errormessages.syntaxError \"inheritance must be from a freshly-created object.\"",
    "            atRange(inhNode.range)",
    "    }",
    "    inhNode",
    "}",
    "",
    "method transformCall(cNode) -> ast.AstNode {",
    "    def methodName = cNode.nameString",
    "    var result := cNode",
    "    def s = cNode.scope",
    "    def nominalRcvr = cNode.receiver",
    "    if (nominalRcvr.isImplicit) then {",
    "        def rcvr = s.resolveOuterMethod(methodName) fromNode(cNode)",
    "        if (rcvr.isIdentifier) then {",
    "            util.log 60 verbose \"Transformed {cNode.pretty 0} did nothing\"",
    "            return cNode",
    "        }",
    "        def definingScope = s.thatDefines(methodName)",
    "        checkForAmbiguityOf (cNode)",
    "            definedIn (definingScope) asA (definingScope.kind(methodName))",
    "        cNode.receiver := rcvr.receiver",
    "        cNode.onSelf",
    "        if (definingScope.kind(methodName) == \"object\") then {",
    "            cNode.isFresh := true",
    "        }",
    "    } elseif { nominalRcvr.isOuter && (cNode.nameString == \"outer\") } then {",
    "        // deal with outer.outer ..., which has been parsed into a memberNode",
    "        // The reciever has already been converted from an identifier to an",
    "        // outerNode; here we add another object to that outerNode's object list.",
    "",
    "        def priorOuter = nominalRcvr.theObjects.last",
    "        def newOuter = priorOuter.scope.parent.enclosingObjectScope.node",
    "        nominalRcvr.theObjects.addLast(newOuter)",
    "        result := nominalRcvr",
    "    } else {",
    "        if (cNode.isTailCall) then {    // don't do this work if no one cares",
    "            result.isFresh := callReturnsFreshObject(cNode)",
    "        }",
    "    }",
    "    result",
    "}",
    "",
    "method callReturnsFreshObject(cNode) {",
    "    def rcvrScope = cNode.scope.receiverScope(cNode.receiver)",
    "    def ansrScope = rcvrScope.getScope(cNode.nameString)",
    "    ansrScope.isObjectScope",
    "}",
    "",
    "method resolve(moduleObject) {",
    "    util.log_verbose \"rewriting tree.\"",
    "    setupContext(moduleObject)",
    "    util.setPosition(0, 0)",
    "    moduleObject.scope := moduleScope",
    "    def preludeObject = ast.moduleNode.body([moduleObject])",
    "        named \"prelude\" scope (preludeScope)",
    "    def preludeChain = ast.ancestorChain.with(preludeObject)",
    "",
    "    buildSymbolTableFor(moduleObject) ancestors(preludeChain)",
    "    util.log_verbose \"symbol tables built.\"",
    "",
    "    if (util.target == \"symbols\") then {",
    "        util.outprint \"=====================================\"",
    "        util.outprint \"module with symbol tables\"",
    "        util.outprint \"=====================================\"",
    "        util.outprint \"top-level\"",
    "        util.outprint \"Universal scope = {universalScope.asDebugString}\"",
    "        moduleObject.scope.withSurroundingScopesDo { each ->",
    "            util.outprint (each.asString)",
    "            util.outprint (each.elementScopesAsString)",
    "            util.outprint \"----------------\"",
    "        }",
    "        util.outprint(moduleObject.pretty(0))",
    "        util.log_verbose \"done\"",
    "        util.outfile.close",
    "        sys.exit(0)",
    "    }",
    "    resolveIdentifiers(moduleObject)",
    "}" ];
}
function gracecode_identifierresolution() {
  importedModules["identifierresolution"] = this;
  var module$identifierresolution = this;
  this.definitionModule = "identifierresolution";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_identifierresolution_1");
  this.outer_identifierresolution_1 = var_prelude;
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
  func0.definitionModule = "identifierresolution";
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
  func1.definitionModule = "identifierresolution";
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
  func2.definitionModule = "identifierresolution";
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
  func3.definitionModule = "identifierresolution";
  func3.debug = "import";
  func3.confidential = true;
  setLineNumber(5);    // compilenode import
  // Import of "xmodule" as xmodule
  if (typeof gracecode_xmodule == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module xmodule"));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func4 = function(argcv) {     // accessor method xmodule
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("xmodule", 0, numArgs - 0);
    if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
    return var_xmodule;
  };    // end of method xmodule
  this.methods["xmodule"] = func4;
  func4.methodName = "xmodule";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 5;
  func4.definitionModule = "identifierresolution";
  func4.debug = "import";
  func4.confidential = true;
  setLineNumber(6);    // compilenode import
  // Import of "fastDict" as map
  if (typeof gracecode_fastDict == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module fastDict"));
  var var_map = do_import("fastDict", gracecode_fastDict);
  var func5 = function(argcv) {     // accessor method map
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("map", 0, numArgs - 0);
    if (var_map === undefined) raiseUninitializedVariable("map");
    return var_map;
  };    // end of method map
  this.methods["map"] = func5;
  func5.methodName = "map";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 6;
  func5.definitionModule = "identifierresolution";
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
  func6.definitionModule = "identifierresolution";
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
  func7.definitionModule = "identifierresolution";
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
  func8.definitionModule = "identifierresolution";
  func8.debug = "import";
  func8.confidential = true;
  var func9 = function(argcv, var_variety__39__) {    // method newScopeKind(_), line 21
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("newScopeKind(_)", 0, numArgs - 1);
    }
    setLineNumber(23);    // compilenode object
    var obj11_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_23");
      this.outer_identifierresolution_23 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 23;
          m.definitionModule = "identifierresolution";
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
      var obj11_init = function() {    // init of object on line 23
      };
      return obj11_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj11 = emptyGraceObject("object", "identifierresolution", 23);
    var obj11_init = obj11_build.call(obj11, null, this, [], []);
    obj11_init.call(obj11);  // end of compileobject
    // call case 2: outer request
    var call10 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], obj11, var_variety__39__);
    var var_s = call10;
    setLineNumber(24);    // compilenode call
    // call case 6: other requests
    var call12 = request(var_s, "hasParent:=(1)", [1], GraceFalse);
    return var_s;
  };    // end of method newScopeKind(_)
  this.methods["newScopeKind(1)"] = func9;
  func9.methodName = "newScopeKind(1)";
  func9.paramCounts = [1];
  func9.paramNames = ["variety'"];
  func9.definitionLine = 21;
  func9.definitionModule = "identifierresolution";
  setLineNumber(30);    // compilenode typedec
  // Type decl DeclKind
  var func14 = function(argcv) {    // method DeclKind, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(30);    // compilenode member
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call15 = request(var_k, "T", [0]);
    return call15;
  };    // end of method DeclKind
  function memofunc14(argcv) {
      if (! this.data["memo$DeclKind"])    // parameterless memo function
          this.data["memo$DeclKind"] = func14.call(this, argcv);
      return this.data["memo$DeclKind"];
  };
  this.methods["DeclKind"] = memofunc14;
  memofunc14.methodName = "DeclKind";
  memofunc14.paramCounts = [0];
  memofunc14.paramNames = [];
  memofunc14.definitionLine = 1;
  memofunc14.definitionModule = "identifierresolution";
  func14.methodName = "DeclKind";
  func14.paramCounts = [0];
  func14.paramNames = [];
  func14.definitionLine = 1;
  func14.definitionModule = "identifierresolution";
  var func16 = function(argcv, var_parent__39__, var_variety__39__) {    // method newScopeIn(_)kind(_), line 32
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("newScopeIn(_)kind(_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("newScopeIn(_)kind(_)", "identifierresolution", 32);
    var ouc_init = this.methods["newScopeIn(1)kind(1)$build(3)"].call(this, null, var_parent__39__, var_variety__39__, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method newScopeIn(_)kind(_)
  this.methods["newScopeIn(1)kind(1)"] = func16;
  func16.methodName = "newScopeIn(1)kind(1)";
  func16.paramCounts = [1, 1];
  func16.paramNames = ["parent'", "variety'"];
  func16.definitionLine = 32;
  func16.definitionModule = "identifierresolution";
  var func17 = function(argcv, var_parent__39__, var_variety__39__, inheritingObject, aliases, exclusions) {    // method newScopeIn(_)kind(_)$build(_,_,_), line 32
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("newScopeIn(_)kind(_)", 0, numArgs - 2);
    }
    var obj18_build = function(ignore, var_parent__39__, var_variety__39__, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_32");
      this.outer_identifierresolution_32 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(33);    // reuse call
      var initFun19 = selfRequest(var_prelude, "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.elements = undefined;
      var reader20_elements = function() {  // reader method elements
          if (this.data.elements === undefined) raiseUninitializedVariable("elements");
          return this.data.elements;
      };
      reader20_elements.isDef = true;
      this.methods["elements"] = reader20_elements;
      this.data.elementScopes = undefined;
      var reader21_elementScopes = function() {  // reader method elementScopes
          if (this.data.elementScopes === undefined) raiseUninitializedVariable("elementScopes");
          return this.data.elementScopes;
      };
      reader21_elementScopes.isDef = true;
      this.methods["elementScopes"] = reader21_elementScopes;
      this.data.elementLines = undefined;
      var reader22_elementLines = function() {  // reader method elementLines
          if (this.data.elementLines === undefined) raiseUninitializedVariable("elementLines");
          return this.data.elementLines;
      };
      reader22_elementLines.isDef = true;
      this.methods["elementLines"] = reader22_elementLines;
      this.data.elementTokens = undefined;
      var reader23_elementTokens = function() {  // reader method elementTokens
          if (this.data.elementTokens === undefined) raiseUninitializedVariable("elementTokens");
          return this.data.elementTokens;
      };
      reader23_elementTokens.isDef = true;
      this.methods["elementTokens"] = reader23_elementTokens;
      this.data.parent = undefined;
      var reader24_parent = function() {  // reader method parent
          if (this.data.parent === undefined) raiseUninitializedVariable("parent");
          return this.data.parent;
      };
      reader24_parent.isDef = true;
      this.methods["parent"] = reader24_parent;
      this.data.hasParent = undefined;
      var reader25_hasParent = function() {  // reader method hasParent
          if (this.data.hasParent === undefined) raiseUninitializedVariable("hasParent");
          return this.data.hasParent;
      };
      reader25_hasParent.isVar = true;
      this.methods["hasParent"] = reader25_hasParent;
      var writer26_hasParent = function(argcv, n) {   // writer method hasParent:=(_)
        this.data.hasParent = n;
        return GraceDone;
      };
      this.methods["hasParent:=(1)"] = writer26_hasParent;
      this.data.variety = undefined;
      var reader27_variety = function() {  // reader method variety
          if (this.data.variety === undefined) raiseUninitializedVariable("variety");
          return this.data.variety;
      };
      reader27_variety.isDef = true;
      this.methods["variety"] = reader27_variety;
      this.data.node = undefined;
      var reader28_node = function() {  // reader method node
          if (this.data.node === undefined) raiseUninitializedVariable("node");
          return this.data.node;
      };
      reader28_node.isVar = true;
      this.methods["node"] = reader28_node;
      var writer29_node = function(argcv, n) {   // writer method node:=(_)
        this.data.node = n;
        return GraceDone;
      };
      this.methods["node:=(1)"] = writer29_node;
      this.data.inheritedNames = undefined;
      var reader30_inheritedNames = function() {  // reader method inheritedNames
          if (this.data.inheritedNames === undefined) raiseUninitializedVariable("inheritedNames");
          return this.data.inheritedNames;
      };
      reader30_inheritedNames.isVar = true;
      this.methods["inheritedNames"] = reader30_inheritedNames;
      var writer31_inheritedNames = function(argcv, n) {   // writer method inheritedNames:=(_)
        this.data.inheritedNames = n;
        return GraceDone;
      };
      this.methods["inheritedNames:=(1)"] = writer31_inheritedNames;
      this.data.serialNumber = undefined;
      var reader32_serialNumber = function() {  // reader method serialNumber
          if (this.data.serialNumber === undefined) raiseUninitializedVariable("serialNumber");
          return this.data.serialNumber;
      };
      reader32_serialNumber.isDef = true;
      this.methods["serialNumber"] = reader32_serialNumber;
      this.data.hash = undefined;
      var reader33_hash = function() {  // reader method hash
          if (this.data.hash === undefined) raiseUninitializedVariable("hash");
          return this.data.hash;
      };
      reader33_hash.isDef = true;
      this.methods["hash"] = reader33_hash;
      var func34 = function(argcv) {    // method isEmpty, line 51
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isEmpty", 0, numArgs - 0);
        }
        setLineNumber(51);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call36 = selfRequest(this, "elements", [0]);
        var call35 = request(call36, "size", [0]);
        var opresult37 = request(call35, "==(1)", [1], new GraceNum(0));
        return opresult37;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func34;
      func34.methodName = "isEmpty";
      func34.paramCounts = [0];
      func34.paramNames = [];
      func34.definitionLine = 51;
      func34.definitionModule = "identifierresolution";
      var func38 = function(argcv, var_n) {    // method addName(_), line 52
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("addName(_)", 0, numArgs - 1);
        }
        setLineNumber(53);    // compilenode member
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call40 = request(var_k, "methdec", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call41 = selfRequest(this, "elements", [0]);
        var call39 = request(call41, "at(1)put(1)", [1, 1], var_n, call40);
        setLineNumber(54);    // compilenode member
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call43 = request(var_util, "linenum", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call44 = selfRequest(this, "elementLines", [0]);
        var call42 = request(call44, "at(1)put(1)", [1, 1], var_n, call43);
        return call42;
      };    // end of method addName(_)
      this.methods["addName(1)"] = func38;
      func38.methodName = "addName(1)";
      func38.paramCounts = [1];
      func38.paramNames = ["n"];
      func38.definitionLine = 52;
      func38.definitionModule = "identifierresolution";
      var func45 = function(argcv, var_n, var_kind) {    // method addName(_)asA(_), line 56
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("addName(_)asA(_)", 0, numArgs - 2);
        }
        setLineNumber(56);    // compilenode member
        // call case 2: outer request
        var call46 = selfRequest(importedModules["identifierresolution"], "DeclKind", [0]);
        assertTypeOrMsg(var_kind, call46, "argument 2 in request of `addName(_)asA(_)`", "DeclKind");
        setLineNumber(57);    // compilenode block
        var block48 = new GraceBlock(this, 57, 0);
        block48.guard = jsTrue;
        block48.real = function block48() {
          setLineNumber(58);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call50 = selfRequest(this, "elements", [0]);
          var call49 = request(call50, "at(1)put(1)", [1, 1], var_n, var_kind);
          setLineNumber(59);    // compilenode member
          // call case 6: other requests
          if (var_util === undefined) raiseUninitializedVariable("util");
          var call52 = request(var_util, "linenum", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call53 = selfRequest(this, "elementLines", [0]);
          var call51 = request(call53, "at(1)put(1)", [1, 1], var_n, call52);
          setLineNumber(60);    // compilenode return
          throw new ReturnException(var_done, returnTarget);
        };
        let applyMeth48 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth48.methodName = "apply";
        applyMeth48.paramCounts = [0];
        applyMeth48.paramNames = [];
        applyMeth48.definitionLine = 57;
        applyMeth48.definitionModule = "identifierresolution";
        block48.methods["apply"] = applyMeth48;
        // call case 6: other requests
        setLineNumber(57);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call54 = selfRequest(this, "elements", [0]);
        var call47 = request(call54, "at(1)ifAbsent(1)", [1, 1], var_n, block48);
        var var_oldKind = call47;
        var if55 = GraceDone;
        setLineNumber(62);    // compilenode member
        // call case 6: other requests
        var call56 = request(var_kind, "isImplicit", [0]);
        if (Grace_isTrue(call56)) {
          setLineNumber(63);    // compilenode return
          return var_done;
        }
        var if57 = GraceDone;
        setLineNumber(65);    // compilenode member
        // call case 6: other requests
        var call58 = request(var_oldKind, "isImplicit", [0]);
        if (Grace_isTrue(call58)) {
          setLineNumber(66);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call60 = selfRequest(this, "elements", [0]);
          var call59 = request(call60, "at(1)put(1)", [1, 1], var_n, var_kind);
          setLineNumber(67);    // compilenode member
          // call case 6: other requests
          if (var_util === undefined) raiseUninitializedVariable("util");
          var call62 = request(var_util, "linenum", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call63 = selfRequest(this, "elementLines", [0]);
          var call61 = request(call63, "at(1)put(1)", [1, 1], var_n, call62);
          setLineNumber(68);    // compilenode return
          return var_done;
        }
        setLineNumber(70);    // compilenode string
        var string65 = new GraceString("'");
        var opresult66 = request(string65, "++(1)", [1], var_n);
        var string67 = new GraceString("' cannot be");
        var opresult68 = request(opresult66, "++(1)", [1], string67);
        setLineNumber(71);    // compilenode string
        var string69 = new GraceString(" redefined as ");
        var opresult70 = request(string69, "++(1)", [1], var_kind);
        var string71 = new GraceString(" because it is already declared as ");
        var opresult72 = request(opresult70, "++(1)", [1], string71);
        var opresult73 = request(opresult72, "++(1)", [1], var_oldKind);
        var string74 = new GraceString("");
        var opresult75 = request(opresult73, "++(1)", [1], string74);
        var opresult76 = request(opresult68, "++(1)", [1], opresult75);
        setLineNumber(72);    // compilenode member
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call77 = request(var_util, "linenum", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call78 = request(var_util, "linepos", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call79 = request(var_util, "linepos", [0]);
        // call case 6: other requests
        var call80 = request(var_n, "size", [0]);
        var sum81 = request(call79, "+(1)", [1], call80);
        var diff82 = request(sum81, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call64 = request(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult76, call77, call78, diff82);
        return call64;
      };    // end of method addName(_)asA(_)
      this.methods["addName(1)asA(1)"] = func45;
      func45.methodName = "addName(1)asA(1)";
      func45.paramCounts = [1, 1];
      func45.paramNames = ["n", "kind"];
      func45.definitionLine = 56;
      func45.definitionModule = "identifierresolution";
      var func83 = function(argcv, var_nd, var_kind) {    // method addNode(_)asA(_), line 74
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("addNode(_)asA(_)", 0, numArgs - 2);
        }
        setLineNumber(75);    // compilenode member
        // call case 6: other requests
        var call84 = request(var_nd, "value", [0]);
        var var_ndName = call84;
        setLineNumber(76);    // compilenode call
        // call case 4: self request with 2 args and 0 typeArgs 
        var call85 = selfRequest(this, "checkShadowing(1)asA(1)", [1, 1], var_nd, var_kind);
        setLineNumber(77);    // compilenode block
        var block87 = new GraceBlock(this, 77, 0);
        block87.guard = jsTrue;
        block87.real = function block87() {
          setLineNumber(78);    // compilenode call
          if (var_ndName === undefined) raiseUninitializedVariable("ndName");
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call89 = selfRequest(this, "elements", [0]);
          var call88 = request(call89, "at(1)put(1)", [1, 1], var_ndName, var_kind);
          setLineNumber(79);    // compilenode call
          if (var_ndName === undefined) raiseUninitializedVariable("ndName");
          // call case 6: other requests
          var call91 = request(var_nd, "line", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call92 = selfRequest(this, "elementLines", [0]);
          var call90 = request(call92, "at(1)put(1)", [1, 1], var_ndName, call91);
          setLineNumber(80);    // compilenode return
          throw new ReturnException(var_done, returnTarget);
        };
        let applyMeth87 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth87.methodName = "apply";
        applyMeth87.paramCounts = [0];
        applyMeth87.paramNames = [];
        applyMeth87.definitionLine = 77;
        applyMeth87.definitionModule = "identifierresolution";
        block87.methods["apply"] = applyMeth87;
        // call case 6: other requests
        setLineNumber(77);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call93 = selfRequest(this, "elements", [0]);
        var call86 = request(call93, "at(1)ifAbsent(1)", [1, 1], var_ndName, block87);
        var var_oldKind = call86;
        var if94 = GraceDone;
        setLineNumber(82);    // compilenode member
        // call case 6: other requests
        var call95 = request(var_kind, "isImplicit", [0]);
        if (Grace_isTrue(call95)) {
          setLineNumber(83);    // compilenode return
          return var_done;
        }
        var if96 = GraceDone;
        setLineNumber(85);    // compilenode member
        // call case 6: other requests
        var call97 = request(var_oldKind, "isImplicit", [0]);
        if (Grace_isTrue(call97)) {
          setLineNumber(86);    // compilenode call
          if (var_ndName === undefined) raiseUninitializedVariable("ndName");
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call99 = selfRequest(this, "elements", [0]);
          var call98 = request(call99, "at(1)put(1)", [1, 1], var_ndName, var_kind);
          setLineNumber(87);    // compilenode call
          if (var_ndName === undefined) raiseUninitializedVariable("ndName");
          // call case 6: other requests
          var call101 = request(var_nd, "line", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call102 = selfRequest(this, "elementLines", [0]);
          var call100 = request(call102, "at(1)put(1)", [1, 1], var_ndName, call101);
          setLineNumber(88);    // compilenode return
          return var_done;
        }
        setLineNumber(90);    // compilenode string
        var string103 = new GraceString(" in this scope");
        var var_more = string103;
        var if104 = GraceDone;
        setLineNumber(91);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call106 = selfRequest(this, "elementLines", [0]);
        var call105 = request(call106, "containsKey(1)", [1], var_ndName);
        if (Grace_isTrue(call105)) {
          setLineNumber(92);    // compilenode string
          var string107 = new GraceString(" as a ");
          if (var_oldKind === undefined) raiseUninitializedVariable("oldKind");
          var opresult108 = request(string107, "++(1)", [1], var_oldKind);
          var string109 = new GraceString("");
          var opresult110 = request(opresult108, "++(1)", [1], string109);
          setLineNumber(93);    // compilenode string
          var string111 = new GraceString(" on line ");
          if (var_ndName === undefined) raiseUninitializedVariable("ndName");
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call113 = selfRequest(this, "elementLines", [0]);
          var call112 = request(call113, "at(1)", [1], var_ndName);
          var opresult114 = request(string111, "++(1)", [1], call112);
          var string115 = new GraceString("");
          var opresult116 = request(opresult114, "++(1)", [1], string115);
          var opresult117 = request(opresult110, "++(1)", [1], opresult116);
          var_more = opresult117;
          if104 = GraceDone;
        }
        setLineNumber(95);    // compilenode string
        var string119 = new GraceString("'");
        // call case 6: other requests
        var call120 = request(var_nd, "canonicalName", [0]);
        var opresult121 = request(string119, "++(1)", [1], call120);
        var string122 = new GraceString("' cannot be");
        var opresult123 = request(opresult121, "++(1)", [1], string122);
        setLineNumber(96);    // compilenode string
        var string124 = new GraceString(" redeclared because it is already declared");
        var opresult125 = request(opresult123, "++(1)", [1], string124);
        var opresult126 = request(opresult125, "++(1)", [1], var_more);
        setLineNumber(97);    // compilenode member
        // call case 6: other requests
        var call127 = request(var_nd, "range", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call118 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult126, call127);
        return call118;
      };    // end of method addNode(_)asA(_)
      this.methods["addNode(1)asA(1)"] = func83;
      func83.methodName = "addNode(1)asA(1)";
      func83.paramCounts = [1, 1];
      func83.paramNames = ["nd", "kind"];
      func83.definitionLine = 74;
      func83.definitionModule = "identifierresolution";
      var func128 = function(argcv, var_n) {    // method contains(_), line 99
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("contains(_)", 0, numArgs - 1);
        }
        var if129 = GraceDone;
        setLineNumber(100);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call131 = selfRequest(this, "elements", [0]);
        var call130 = request(call131, "containsKey(1)", [1], var_n);
        if (Grace_isTrue(call130)) {
          return GraceTrue;
        }
        var if132 = GraceDone;
        setLineNumber(101);    // compilenode member
        // call case 6: other requests
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        var call133 = request(var_isInBeginningStudentDialect, "not", [0]);
        if (Grace_isTrue(call133)) {
          return GraceFalse;
        }
        var if134 = GraceDone;
        setLineNumber(102);    // compilenode op
        if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
        var opresult135 = request(this, "\u2260(1)", [1], var_preludeScope);
        if (Grace_isTrue(opresult135)) {
          return GraceFalse;
        }
        setLineNumber(103);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call136 = selfRequest(this, "isSpecial(1)", [1], var_n);
        return call136;
      };    // end of method contains(_)
      this.methods["contains(1)"] = func128;
      func128.methodName = "contains(1)";
      func128.paramCounts = [1];
      func128.paramNames = ["n"];
      func128.definitionLine = 99;
      func128.definitionModule = "identifierresolution";
      var func137 = function(argcv, var_b) {    // method withSurroundingScopesDo(_), line 105
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withSurroundingScopesDo(_)", 0, numArgs - 1);
        }
        setLineNumber(107);    // compilenode vardec
        var var_cur = this;
        setLineNumber(108);    // compilenode block
        var block139 = new GraceBlock(this, 108, 0);
        block139.guard = jsTrue;
        block139.real = function block139() {
          setLineNumber(108);    // compilenode call
          if (var_cur === undefined) raiseUninitializedVariable("cur");
          // call case 6: other requests
          var call140 = request(var_b, "apply(1)", [1], var_cur);
          // call case 6: other requests
          if (var_cur === undefined) raiseUninitializedVariable("cur");
          var call141 = request(var_cur, "hasParent", [0]);
          return call141;
        };
        let applyMeth139 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth139.methodName = "apply";
        applyMeth139.paramCounts = [0];
        applyMeth139.paramNames = [];
        applyMeth139.definitionLine = 108;
        applyMeth139.definitionModule = "identifierresolution";
        block139.methods["apply"] = applyMeth139;
        var block142 = new GraceBlock(this, 108, 0);
        block142.guard = jsTrue;
        block142.real = function block142() {
          setLineNumber(109);    // compilenode member
          // call case 6: other requests
          if (var_cur === undefined) raiseUninitializedVariable("cur");
          var call143 = request(var_cur, "parent", [0]);
          var_cur = call143;
          return GraceDone;
        };
        let applyMeth142 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth142.methodName = "apply";
        applyMeth142.paramCounts = [0];
        applyMeth142.paramNames = [];
        applyMeth142.definitionLine = 108;
        applyMeth142.definitionModule = "identifierresolution";
        block142.methods["apply"] = applyMeth142;
        // call case 2: outer request
        var call138 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block139, block142);
        return call138;
      };    // end of method withSurroundingScopesDo(_)
      this.methods["withSurroundingScopesDo(1)"] = func137;
      func137.methodName = "withSurroundingScopesDo(1)";
      func137.paramCounts = [1];
      func137.paramNames = ["b"];
      func137.definitionLine = 105;
      func137.definitionModule = "identifierresolution";
      var func144 = function(argcv) {    // method keysAsList, line 112
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("keysAsList", 0, numArgs - 0);
        }
        setLineNumber(113);    // compilenode member
        // call case 2: outer request
        var call145 = selfRequest(var_prelude, "emptyList", [0]);
        var var_result = call145;
        setLineNumber(114);    // compilenode block
        var block147 = new GraceBlock(this, 114, 1);
        block147.guard = jsTrue;
        block147.real = function block147(var_each) {
          setLineNumber(114);    // compilenode call
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call148 = request(var_result, "addLast(1)", [1], var_each);
          return call148;
        };
        let applyMeth147 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth147.methodName = "apply(1)";
        applyMeth147.paramCounts = [1];
        applyMeth147.paramNames = ["each"];
        applyMeth147.definitionLine = 114;
        applyMeth147.definitionModule = "identifierresolution";
        block147.methods["apply(1)"] = applyMeth147;
        let matchesMeth147 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth147.methodName = "matches(1)";
        matchesMeth147.paramCounts = [1];
        matchesMeth147.paramNames = ["each"];
        matchesMeth147.definitionLine = 114;
        matchesMeth147.definitionModule = "identifierresolution";
        block147.methods["matches(1)"] = matchesMeth147;
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call149 = selfRequest(this, "elements", [0]);
        var call146 = request(call149, "keysDo(1)", [1], block147);
        return var_result;
      };    // end of method keysAsList
      this.methods["keysAsList"] = func144;
      func144.methodName = "keysAsList";
      func144.paramCounts = [0];
      func144.paramNames = [];
      func144.definitionLine = 112;
      func144.definitionModule = "identifierresolution";
      var func150 = function(argcv, var_action) {    // method keysAndKindsDo(_), line 117
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("keysAndKindsDo(_)", 0, numArgs - 1);
        }
        setLineNumber(118);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call152 = selfRequest(this, "elements", [0]);
        var call151 = request(call152, "keysAndValuesDo(1)", [1], var_action);
        return call151;
      };    // end of method keysAndKindsDo(_)
      this.methods["keysAndKindsDo(1)"] = func150;
      func150.methodName = "keysAndKindsDo(1)";
      func150.paramCounts = [1];
      func150.paramNames = ["action"];
      func150.definitionLine = 117;
      func150.definitionModule = "identifierresolution";
      var func153 = function(argcv, var_n) {    // method kind(_), line 120
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("kind(_)", 0, numArgs - 1);
        }
        var if154 = GraceDone;
        setLineNumber(121);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if155 = GraceDone;
          setLineNumber(122);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call156 = selfRequest(this, "isSpecial(1)", [1], var_n);
          if (Grace_isTrue(call156)) {
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call157 = request(var_k, "methdec", [0]);
            return call157;
          }
          if154 = if155;
        }
        setLineNumber(124);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call159 = selfRequest(this, "elements", [0]);
        var call158 = request(call159, "at(1)", [1], var_n);
        return call158;
      };    // end of method kind(_)
      this.methods["kind(1)"] = func153;
      func153.methodName = "kind(1)";
      func153.paramCounts = [1];
      func153.paramNames = ["n"];
      func153.definitionLine = 120;
      func153.definitionModule = "identifierresolution";
      var func160 = function(argcv, var_n, var_action) {    // method kind(_)ifAbsent(_), line 126
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("kind(_)ifAbsent(_)", 0, numArgs - 2);
        }
        var if161 = GraceDone;
        setLineNumber(127);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if162 = GraceDone;
          setLineNumber(128);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call163 = selfRequest(this, "isSpecial(1)", [1], var_n);
          if (Grace_isTrue(call163)) {
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call164 = request(var_k, "methdec", [0]);
            return call164;
          }
          if161 = if162;
        }
        setLineNumber(130);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call166 = selfRequest(this, "elements", [0]);
        var call165 = request(call166, "at(1)ifAbsent(1)", [1, 1], var_n, var_action);
        return call165;
      };    // end of method kind(_)ifAbsent(_)
      this.methods["kind(1)ifAbsent(1)"] = func160;
      func160.methodName = "kind(1)ifAbsent(1)";
      func160.paramCounts = [1, 1];
      func160.paramNames = ["n", "action"];
      func160.definitionLine = 126;
      func160.definitionModule = "identifierresolution";
      var func167 = function(argcv, var_n, var_scp) {    // method at(_)putScope(_), line 132
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("at(_)putScope(_)", 0, numArgs - 2);
        }
        setLineNumber(133);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call169 = selfRequest(this, "elementScopes", [0]);
        var call168 = request(call169, "at(1)put(1)", [1, 1], var_n, var_scp);
        return call168;
      };    // end of method at(_)putScope(_)
      this.methods["at(1)putScope(1)"] = func167;
      func167.methodName = "at(1)putScope(1)";
      func167.paramCounts = [1, 1];
      func167.paramNames = ["n", "scp"];
      func167.definitionLine = 132;
      func167.definitionModule = "identifierresolution";
      var func170 = function(argcv, var_n) {    // method getScope(_), line 135
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("getScope(_)", 0, numArgs - 1);
        }
        var if171 = GraceDone;
        setLineNumber(136);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call173 = selfRequest(this, "elementScopes", [0]);
        var call172 = request(call173, "containsKey(1)", [1], var_n);
        if (Grace_isTrue(call172)) {
          setLineNumber(137);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call175 = selfRequest(this, "elementScopes", [0]);
          var call174 = request(call175, "at(1)", [1], var_n);
          return call174;
        }
        setLineNumber(145);    // compilenode return
        if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
        return var_universalScope;
      };    // end of method getScope(_)
      this.methods["getScope(1)"] = func170;
      func170.methodName = "getScope(1)";
      func170.paramCounts = [1];
      func170.paramNames = ["n"];
      func170.definitionLine = 135;
      func170.definitionModule = "identifierresolution";
      var func176 = function(argcv) {    // method asStringWithParents, line 147
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asStringWithParents", 0, numArgs - 0);
        }
        setLineNumber(148);    // compilenode string
        var string177 = new GraceString("\nCurrent: ");
        var opresult178 = request(string177, "++(1)", [1], this);
        var string179 = new GraceString("");
        var opresult180 = request(opresult178, "++(1)", [1], string179);
        var var_result = opresult180;
        setLineNumber(149);    // compilenode vardec
        var var_s = this;
        setLineNumber(150);    // compilenode block
        var block182 = new GraceBlock(this, 150, 0);
        block182.guard = jsTrue;
        block182.real = function block182() {
          setLineNumber(150);    // compilenode member
          // call case 6: other requests
          if (var_s === undefined) raiseUninitializedVariable("s");
          var call183 = request(var_s, "hasParent", [0]);
          return call183;
        };
        let applyMeth182 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth182.methodName = "apply";
        applyMeth182.paramCounts = [0];
        applyMeth182.paramNames = [];
        applyMeth182.definitionLine = 150;
        applyMeth182.definitionModule = "identifierresolution";
        block182.methods["apply"] = applyMeth182;
        var block184 = new GraceBlock(this, 150, 0);
        block184.guard = jsTrue;
        block184.real = function block184() {
          setLineNumber(151);    // compilenode member
          // call case 6: other requests
          if (var_s === undefined) raiseUninitializedVariable("s");
          var call185 = request(var_s, "parent", [0]);
          var_s = call185;
          setLineNumber(152);    // compilenode op
          if (var_result === undefined) raiseUninitializedVariable("result");
          var string186 = new GraceString("\nParent: ");
          if (var_s === undefined) raiseUninitializedVariable("s");
          var opresult187 = request(string186, "++(1)", [1], var_s);
          var string188 = new GraceString("");
          var opresult189 = request(opresult187, "++(1)", [1], string188);
          var opresult190 = request(var_result, "++(1)", [1], opresult189);
          var_result = opresult190;
          return GraceDone;
        };
        let applyMeth184 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth184.methodName = "apply";
        applyMeth184.paramCounts = [0];
        applyMeth184.paramNames = [];
        applyMeth184.definitionLine = 150;
        applyMeth184.definitionModule = "identifierresolution";
        block184.methods["apply"] = applyMeth184;
        // call case 2: outer request
        var call181 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block182, block184);
        setLineNumber(154);    // compilenode string
        var string191 = new GraceString("\n");
        var opresult192 = request(var_result, "++(1)", [1], string191);
        return opresult192;
      };    // end of method asStringWithParents
      this.methods["asStringWithParents"] = func176;
      func176.methodName = "asStringWithParents";
      func176.paramCounts = [0];
      func176.paramNames = [];
      func176.definitionLine = 147;
      func176.definitionModule = "identifierresolution";
      var func193 = function(argcv) {    // method asString, line 156
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(157);    // compilenode string
        var string194 = new GraceString("(");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call195 = selfRequest(this, "variety", [0]);
        var opresult196 = request(string194, "++(1)", [1], call195);
        var string197 = new GraceString(" ST: ");
        var opresult198 = request(opresult196, "++(1)", [1], string197);
        var var_result = opresult198;
        setLineNumber(158);    // compilenode block
        var block200 = new GraceBlock(this, 158, 1);
        block200.guard = jsTrue;
        block200.real = function block200(var_each) {
          setLineNumber(159);    // compilenode op
          if (var_result === undefined) raiseUninitializedVariable("result");
          // call case 6: other requests
          var call201 = request(var_each, "serialNumber", [0]);
          var opresult202 = request(var_result, "++(1)", [1], call201);
          var_result = opresult202;
          var if203 = GraceDone;
          setLineNumber(160);    // compilenode member
          // call case 6: other requests
          var call204 = request(var_each, "hasParent", [0]);
          if (Grace_isTrue(call204)) {
            if (var_result === undefined) raiseUninitializedVariable("result");
            var string205 = new GraceString("\u279e");
            var opresult206 = request(var_result, "++(1)", [1], string205);
            var_result = opresult206;
            if203 = GraceDone;
          }
          return if203;
        };
        let applyMeth200 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth200.methodName = "apply(1)";
        applyMeth200.paramCounts = [1];
        applyMeth200.paramNames = ["each"];
        applyMeth200.definitionLine = 158;
        applyMeth200.definitionModule = "identifierresolution";
        block200.methods["apply(1)"] = applyMeth200;
        let matchesMeth200 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth200.methodName = "matches(1)";
        matchesMeth200.paramCounts = [1];
        matchesMeth200.paramNames = ["each"];
        matchesMeth200.definitionLine = 158;
        matchesMeth200.definitionModule = "identifierresolution";
        block200.methods["matches(1)"] = matchesMeth200;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call199 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block200);
        setLineNumber(162);    // compilenode string
        var string207 = new GraceString("):\n    ");
        var opresult208 = request(var_result, "++(1)", [1], string207);
        var_result = opresult208;
        setLineNumber(163);    // compilenode block
        var block210 = new GraceBlock(this, 163, 1);
        block210.guard = jsTrue;
        block210.real = function block210(var_each) {
          setLineNumber(164);    // compilenode string
          var string211 = new GraceString("");
          if (var_result === undefined) raiseUninitializedVariable("result");
          var opresult212 = request(string211, "++(1)", [1], var_result);
          var string213 = new GraceString(" ");
          var opresult214 = request(opresult212, "++(1)", [1], string213);
          // call case 6: other requests
          var call215 = request(var_each, "key", [0]);
          var opresult216 = request(opresult214, "++(1)", [1], call215);
          var string217 = new GraceString("(");
          var opresult218 = request(opresult216, "++(1)", [1], string217);
          // call case 6: other requests
          var call220 = request(var_each, "key", [0]);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call219 = selfRequest(this, "kind(1)", [1], call220);
          var opresult221 = request(opresult218, "++(1)", [1], call219);
          var string222 = new GraceString(") ");
          var opresult223 = request(opresult221, "++(1)", [1], string222);
          var_result = opresult223;
          return GraceDone;
        };
        let applyMeth210 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth210.methodName = "apply(1)";
        applyMeth210.paramCounts = [1];
        applyMeth210.paramNames = ["each"];
        applyMeth210.definitionLine = 163;
        applyMeth210.definitionModule = "identifierresolution";
        block210.methods["apply(1)"] = applyMeth210;
        let matchesMeth210 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth210.methodName = "matches(1)";
        matchesMeth210.paramCounts = [1];
        matchesMeth210.paramNames = ["each"];
        matchesMeth210.definitionLine = 163;
        matchesMeth210.definitionModule = "identifierresolution";
        block210.methods["matches(1)"] = matchesMeth210;
        // call case 6: other requests
        setLineNumber(163);    // compilenode call
        if (var_keyOrdering === undefined) raiseUninitializedVariable("keyOrdering");
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call226 = selfRequest(this, "elements", [0]);
        var call225 = request(call226, "bindings", [0]);
        var call224 = request(call225, "sortedBy(1)", [1], var_keyOrdering);
        var call209 = request(call224, "do(1)", [1], block210);
        setLineNumber(166);    // compilenode string
        var string227 = new GraceString("\n");
        var opresult228 = request(var_result, "++(1)", [1], string227);
        return opresult228;
      };    // end of method asString
      this.methods["asString"] = func193;
      func193.methodName = "asString";
      func193.paramCounts = [0];
      func193.paramNames = [];
      func193.definitionLine = 156;
      func193.definitionModule = "identifierresolution";
      var func229 = function(argcv) {    // method asDebugString, line 169
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(169);    // compilenode string
        var string230 = new GraceString("(ST ");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call231 = selfRequest(this, "serialNumber", [0]);
        var opresult232 = request(string230, "++(1)", [1], call231);
        var string233 = new GraceString(")");
        var opresult234 = request(opresult232, "++(1)", [1], string233);
        return opresult234;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func229;
      func229.methodName = "asDebugString";
      func229.paramCounts = [0];
      func229.paramNames = [];
      func229.definitionLine = 169;
      func229.definitionModule = "identifierresolution";
      var func235 = function(argcv) {    // method elementScopesAsString, line 171
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("elementScopesAsString", 0, numArgs - 0);
        }
        setLineNumber(172);    // compilenode member
        // call case 2: outer request
        var call236 = selfRequest(var_prelude, "emptySet", [0]);
        var var_referencedScopes = call236;
        setLineNumber(173);    // compilenode string
        var string237 = new GraceString("\n    [elementScopes:");
        var var_result = string237;
        setLineNumber(174);    // compilenode block
        var block239 = new GraceBlock(this, 174, 1);
        block239.guard = jsTrue;
        block239.real = function block239(var_each) {
          setLineNumber(175);    // compilenode string
          var string240 = new GraceString("");
          if (var_result === undefined) raiseUninitializedVariable("result");
          var opresult241 = request(string240, "++(1)", [1], var_result);
          var string242 = new GraceString(" ");
          var opresult243 = request(opresult241, "++(1)", [1], string242);
          // call case 6: other requests
          var call244 = request(var_each, "key", [0]);
          var opresult245 = request(opresult243, "++(1)", [1], call244);
          var string246 = new GraceString("\u279e");
          var opresult247 = request(opresult245, "++(1)", [1], string246);
          // call case 6: other requests
          // call case 6: other requests
          var call249 = request(var_each, "value", [0]);
          var call248 = request(call249, "asDebugString", [0]);
          var opresult250 = request(opresult247, "++(1)", [1], call248);
          var string251 = new GraceString("");
          var opresult252 = request(opresult250, "++(1)", [1], string251);
          var_result = opresult252;
          setLineNumber(176);    // compilenode member
          // call case 6: other requests
          var call254 = request(var_each, "value", [0]);
          // call case 6: other requests
          if (var_referencedScopes === undefined) raiseUninitializedVariable("referencedScopes");
          var call253 = request(var_referencedScopes, "add(1)", [1], call254);
          return call253;
        };
        let applyMeth239 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth239.methodName = "apply(1)";
        applyMeth239.paramCounts = [1];
        applyMeth239.paramNames = ["each"];
        applyMeth239.definitionLine = 174;
        applyMeth239.definitionModule = "identifierresolution";
        block239.methods["apply(1)"] = applyMeth239;
        let matchesMeth239 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth239.methodName = "matches(1)";
        matchesMeth239.paramCounts = [1];
        matchesMeth239.paramNames = ["each"];
        matchesMeth239.definitionLine = 174;
        matchesMeth239.definitionModule = "identifierresolution";
        block239.methods["matches(1)"] = matchesMeth239;
        // call case 6: other requests
        setLineNumber(174);    // compilenode call
        if (var_keyOrdering === undefined) raiseUninitializedVariable("keyOrdering");
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call257 = selfRequest(this, "elementScopes", [0]);
        var call256 = request(call257, "bindings", [0]);
        var call255 = request(call256, "sortedBy(1)", [1], var_keyOrdering);
        var call238 = request(call255, "do(1)", [1], block239);
        setLineNumber(178);    // compilenode string
        var string258 = new GraceString("]\n____________\n");
        var opresult259 = request(var_result, "++(1)", [1], string258);
        var_result = opresult259;
        setLineNumber(181);    // compilenode block
        var block261 = new GraceBlock(this, 181, 1);
        block261.guard = jsTrue;
        block261.real = function block261(var_each) {
          setLineNumber(181);    // compilenode op
          if (var_result === undefined) raiseUninitializedVariable("result");
          // call case 6: other requests
          var call262 = request(var_each, "asString", [0]);
          var opresult263 = request(var_result, "++(1)", [1], call262);
          var_result = opresult263;
          return GraceDone;
        };
        let applyMeth261 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth261.methodName = "apply(1)";
        applyMeth261.paramCounts = [1];
        applyMeth261.paramNames = ["each"];
        applyMeth261.definitionLine = 181;
        applyMeth261.definitionModule = "identifierresolution";
        block261.methods["apply(1)"] = applyMeth261;
        let matchesMeth261 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth261.methodName = "matches(1)";
        matchesMeth261.paramCounts = [1];
        matchesMeth261.paramNames = ["each"];
        matchesMeth261.definitionLine = 181;
        matchesMeth261.definitionModule = "identifierresolution";
        block261.methods["matches(1)"] = matchesMeth261;
        // call case 6: other requests
        setLineNumber(180);    // compilenode block
        var block265 = new GraceBlock(this, 180, 2);
        block265.guard = jsTrue;
        block265.real = function block265(var_a, var_b) {
          setLineNumber(180);    // compilenode member
          // call case 6: other requests
          var call267 = request(var_b, "serialNumber", [0]);
          // call case 6: other requests
          // call case 6: other requests
          var call268 = request(var_a, "serialNumber", [0]);
          var call266 = request(call268, "compare(1)", [1], call267);
          return call266;
        };
        let applyMeth265 = function apply_2 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth265.methodName = "apply(2)";
        applyMeth265.paramCounts = [2];
        applyMeth265.paramNames = ["a", "b"];
        applyMeth265.definitionLine = 180;
        applyMeth265.definitionModule = "identifierresolution";
        block265.methods["apply(2)"] = applyMeth265;
        let matchesMeth265 = function matches_2 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth265.methodName = "matches(2)";
        matchesMeth265.paramCounts = [2];
        matchesMeth265.paramNames = ["a", "b"];
        matchesMeth265.definitionLine = 180;
        matchesMeth265.definitionModule = "identifierresolution";
        block265.methods["matches(2)"] = matchesMeth265;
        // call case 6: other requests
        setLineNumber(179);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call270 = selfRequest(var_prelude, "list", [0]);
        var call269 = request(call270, "withAll(1)", [1], var_referencedScopes);
        var call264 = request(call269, "sortBy(1)", [1], block265);
        var call260 = request(call264, "do(1)", [1], block261);
        setLineNumber(182);    // compilenode string
        var string271 = new GraceString("____________\n");
        var opresult272 = request(var_result, "++(1)", [1], string271);
        return opresult272;
      };    // end of method elementScopesAsString
      this.methods["elementScopesAsString"] = func235;
      func235.methodName = "elementScopesAsString";
      func235.paramCounts = [0];
      func235.paramNames = [];
      func235.definitionLine = 171;
      func235.definitionModule = "identifierresolution";
      var func273 = function(argcv, var_nm) {    // method hasDefinitionInNest(_), line 184
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("hasDefinitionInNest(_)", 0, numArgs - 1);
        }
        setLineNumber(185);    // compilenode block
        var block275 = new GraceBlock(this, 185, 1);
        block275.guard = jsTrue;
        block275.real = function block275(var_s) {
          var if276 = GraceDone;
          setLineNumber(186);    // compilenode call
          // call case 6: other requests
          var call277 = request(var_s, "contains(1)", [1], var_nm);
          if (Grace_isTrue(call277)) {
            setLineNumber(187);    // compilenode return
            throw new ReturnException(GraceTrue, returnTarget);
          }
          return if276;
        };
        let applyMeth275 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth275.methodName = "apply(1)";
        applyMeth275.paramCounts = [1];
        applyMeth275.paramNames = ["s"];
        applyMeth275.definitionLine = 185;
        applyMeth275.definitionModule = "identifierresolution";
        block275.methods["apply(1)"] = applyMeth275;
        let matchesMeth275 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth275.methodName = "matches(1)";
        matchesMeth275.paramCounts = [1];
        matchesMeth275.paramNames = ["s"];
        matchesMeth275.definitionLine = 185;
        matchesMeth275.definitionModule = "identifierresolution";
        block275.methods["matches(1)"] = matchesMeth275;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call274 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block275);
        var if278 = GraceDone;
        setLineNumber(190);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if279 = GraceDone;
          setLineNumber(191);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call280 = selfRequest(this, "isSpecial(1)", [1], var_nm);
          if (Grace_isTrue(call280)) {
            return GraceTrue;
          }
          if278 = if279;
        }
        setLineNumber(193);    // compilenode return
        return GraceFalse;
      };    // end of method hasDefinitionInNest(_)
      this.methods["hasDefinitionInNest(1)"] = func273;
      func273.methodName = "hasDefinitionInNest(1)";
      func273.paramCounts = [1];
      func273.paramNames = ["nm"];
      func273.definitionLine = 184;
      func273.definitionModule = "identifierresolution";
      var func281 = function(argcv, var_nm) {    // method kindInNest(_), line 195
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("kindInNest(_)", 0, numArgs - 1);
        }
        setLineNumber(197);    // compilenode block
        var block283 = new GraceBlock(this, 197, 1);
        block283.guard = jsTrue;
        block283.real = function block283(var_s) {
          var if284 = GraceDone;
          setLineNumber(198);    // compilenode call
          // call case 6: other requests
          var call285 = request(var_s, "contains(1)", [1], var_nm);
          if (Grace_isTrue(call285)) {
            setLineNumber(199);    // compilenode call
            // call case 6: other requests
            var call286 = request(var_s, "kind(1)", [1], var_nm);
            var var_kd = call286;
            var if287 = GraceDone;
            setLineNumber(200);    // compilenode member
            // call case 6: other requests
            if (var_kd === undefined) raiseUninitializedVariable("kd");
            var call288 = request(var_kd, "fromParent", [0]);
            if (Grace_isTrue(call288)) {
              setLineNumber(201);    // compilenode member
              // call case 6: other requests
              if (var_k === undefined) raiseUninitializedVariable("k");
              var call289 = request(var_k, "methdec", [0]);
              throw new ReturnException(call289, returnTarget);
            } else {
              setLineNumber(203);    // compilenode return
              if (var_kd === undefined) raiseUninitializedVariable("kd");
              throw new ReturnException(var_kd, returnTarget);
            }
            if284 = if287;
          }
          return if284;
        };
        let applyMeth283 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth283.methodName = "apply(1)";
        applyMeth283.paramCounts = [1];
        applyMeth283.paramNames = ["s"];
        applyMeth283.definitionLine = 197;
        applyMeth283.definitionModule = "identifierresolution";
        block283.methods["apply(1)"] = applyMeth283;
        let matchesMeth283 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth283.methodName = "matches(1)";
        matchesMeth283.paramCounts = [1];
        matchesMeth283.paramNames = ["s"];
        matchesMeth283.definitionLine = 197;
        matchesMeth283.definitionModule = "identifierresolution";
        block283.methods["matches(1)"] = matchesMeth283;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call282 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block283);
        var if290 = GraceDone;
        setLineNumber(207);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if291 = GraceDone;
          setLineNumber(208);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call292 = selfRequest(this, "isSpecial(1)", [1], var_nm);
          if (Grace_isTrue(call292)) {
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call293 = request(var_k, "methdec", [0]);
            return call293;
          }
          if290 = if291;
        }
        setLineNumber(210);    // compilenode member
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call294 = request(var_k, "undefined", [0]);
        return call294;
      };    // end of method kindInNest(_)
      this.methods["kindInNest(1)"] = func281;
      func281.methodName = "kindInNest(1)";
      func281.paramCounts = [1];
      func281.paramNames = ["nm"];
      func281.definitionLine = 195;
      func281.definitionModule = "identifierresolution";
      var func295 = function(argcv, var_nm) {    // method scopeInNest(_), line 212
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("scopeInNest(_)", 0, numArgs - 1);
        }
        setLineNumber(216);    // compilenode block
        var block297 = new GraceBlock(this, 216, 1);
        block297.guard = jsTrue;
        block297.real = function block297(var_s) {
          var if298 = GraceDone;
          setLineNumber(217);    // compilenode call
          // call case 6: other requests
          var call299 = request(var_s, "contains(1)", [1], var_nm);
          if (Grace_isTrue(call299)) {
            setLineNumber(218);    // compilenode call
            // call case 6: other requests
            var call300 = request(var_s, "getScope(1)", [1], var_nm);
            throw new ReturnException(call300, returnTarget);
          }
          return if298;
        };
        let applyMeth297 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth297.methodName = "apply(1)";
        applyMeth297.paramCounts = [1];
        applyMeth297.paramNames = ["s"];
        applyMeth297.definitionLine = 216;
        applyMeth297.definitionModule = "identifierresolution";
        block297.methods["apply(1)"] = applyMeth297;
        let matchesMeth297 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth297.methodName = "matches(1)";
        matchesMeth297.paramCounts = [1];
        matchesMeth297.paramNames = ["s"];
        matchesMeth297.definitionLine = 216;
        matchesMeth297.definitionModule = "identifierresolution";
        block297.methods["matches(1)"] = matchesMeth297;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call296 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block297);
        var if301 = GraceDone;
        setLineNumber(221);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if302 = GraceDone;
          setLineNumber(222);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call303 = selfRequest(this, "isSpecial(1)", [1], var_nm);
          if (Grace_isTrue(call303)) {
            if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
            return var_preludeScope;
          }
          if301 = if302;
        }
        setLineNumber(224);    // compilenode return
        if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
        return var_universalScope;
      };    // end of method scopeInNest(_)
      this.methods["scopeInNest(1)"] = func295;
      func295.methodName = "scopeInNest(1)";
      func295.paramCounts = [1];
      func295.paramNames = ["nm"];
      func295.definitionLine = 212;
      func295.definitionModule = "identifierresolution";
      var func304 = function(argcv, var_name, var_action) {    // method thatDefines(_)ifNone(_), line 226
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("thatDefines(_)ifNone(_)", 0, numArgs - 2);
        }
        setLineNumber(227);    // compilenode block
        var block306 = new GraceBlock(this, 227, 1);
        block306.guard = jsTrue;
        block306.real = function block306(var_s) {
          var if307 = GraceDone;
          setLineNumber(228);    // compilenode call
          // call case 6: other requests
          var call308 = request(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call308)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if307;
        };
        let applyMeth306 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth306.methodName = "apply(1)";
        applyMeth306.paramCounts = [1];
        applyMeth306.paramNames = ["s"];
        applyMeth306.definitionLine = 227;
        applyMeth306.definitionModule = "identifierresolution";
        block306.methods["apply(1)"] = applyMeth306;
        let matchesMeth306 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth306.methodName = "matches(1)";
        matchesMeth306.paramCounts = [1];
        matchesMeth306.paramNames = ["s"];
        matchesMeth306.definitionLine = 227;
        matchesMeth306.definitionModule = "identifierresolution";
        block306.methods["matches(1)"] = matchesMeth306;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call305 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block306);
        var if309 = GraceDone;
        setLineNumber(230);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if310 = GraceDone;
          setLineNumber(231);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call311 = selfRequest(this, "isSpecial(1)", [1], var_name);
          if (Grace_isTrue(call311)) {
            if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
            return var_preludeScope;
          }
          if309 = if310;
        }
        setLineNumber(233);    // compilenode member
        // call case 6: other requests
        var call312 = request(var_action, "apply", [0]);
        return call312;
      };    // end of method thatDefines(_)ifNone(_)
      this.methods["thatDefines(1)ifNone(1)"] = func304;
      func304.methodName = "thatDefines(1)ifNone(1)";
      func304.paramCounts = [1, 1];
      func304.paramNames = ["name", "action"];
      func304.definitionLine = 226;
      func304.definitionModule = "identifierresolution";
      var func313 = function(argcv, var_name) {    // method thatDefines(_), line 235
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("thatDefines(_)", 0, numArgs - 1);
        }
        setLineNumber(236);    // compilenode block
        var block315 = new GraceBlock(this, 236, 1);
        block315.guard = jsTrue;
        block315.real = function block315(var_s) {
          var if316 = GraceDone;
          setLineNumber(237);    // compilenode call
          // call case 6: other requests
          var call317 = request(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call317)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if316;
        };
        let applyMeth315 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth315.methodName = "apply(1)";
        applyMeth315.paramCounts = [1];
        applyMeth315.paramNames = ["s"];
        applyMeth315.definitionLine = 236;
        applyMeth315.definitionModule = "identifierresolution";
        block315.methods["apply(1)"] = applyMeth315;
        let matchesMeth315 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth315.methodName = "matches(1)";
        matchesMeth315.paramCounts = [1];
        matchesMeth315.paramNames = ["s"];
        matchesMeth315.definitionLine = 236;
        matchesMeth315.definitionModule = "identifierresolution";
        block315.methods["matches(1)"] = matchesMeth315;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call314 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block315);
        var if318 = GraceDone;
        setLineNumber(239);    // compilenode if
        if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
        if (Grace_isTrue(var_isInBeginningStudentDialect)) {
          var if319 = GraceDone;
          setLineNumber(240);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call320 = selfRequest(this, "isSpecial(1)", [1], var_name);
          if (Grace_isTrue(call320)) {
            if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
            return var_preludeScope;
          }
          if318 = if319;
        }
        setLineNumber(242);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call321 = selfRequest(this, "asStringWithParents", [0]);
        Grace_print(call321);
        setLineNumber(243);    // compilenode string
        var string323 = new GraceString("no scope defines ");
        var opresult324 = request(string323, "++(1)", [1], var_name);
        var string325 = new GraceString("");
        var opresult326 = request(opresult324, "++(1)", [1], string325);
        // call case 6: other requests
        // call case 2: outer request
        var call327 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call322 = request(call327, "raise(1)", [1], opresult326);
        return call322;
      };    // end of method thatDefines(_)
      this.methods["thatDefines(1)"] = func313;
      func313.methodName = "thatDefines(1)";
      func313.paramCounts = [1];
      func313.paramNames = ["name"];
      func313.definitionLine = 235;
      func313.definitionModule = "identifierresolution";
      var func328 = function(argcv, var_rcvrNode) {    // method receiverScope(_), line 245
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("receiverScope(_)", 0, numArgs - 1);
        }
        var if329 = GraceDone;
        setLineNumber(252);    // compilenode member
        // call case 6: other requests
        var call330 = request(var_rcvrNode, "isIdentifier", [0]);
        if (Grace_isTrue(call330)) {
          setLineNumber(253);    // compilenode member
          // call case 6: other requests
          var call332 = request(var_rcvrNode, "nameString", [0]);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call331 = selfRequest(this, "scopeInNest(1)", [1], call332);
          if329 = call331;
        } else {
          var if333 = GraceDone;
          setLineNumber(254);    // compilenode member
          // call case 6: other requests
          var call334 = request(var_rcvrNode, "isCall", [0]);
          if (Grace_isTrue(call334)) {
            setLineNumber(255);    // compilenode member
            // call case 6: other requests
            var call336 = request(var_rcvrNode, "nameString", [0]);
            // call case 6: other requests
            // call case 6: other requests
            var call338 = request(var_rcvrNode, "receiver", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call337 = selfRequest(this, "receiverScope(1)", [1], call338);
            var call335 = request(call337, "getScope(1)", [1], call336);
            if333 = call335;
          } else {
            var if339 = GraceDone;
            setLineNumber(256);    // compilenode member
            // call case 6: other requests
            var call340 = request(var_rcvrNode, "isOuter", [0]);
            if (Grace_isTrue(call340)) {
              setLineNumber(257);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call342 = request(var_rcvrNode, "scope", [0]);
              var call341 = request(call342, "enclosingObjectScope", [0]);
              var var_resultScope = call341;
              setLineNumber(258);    // compilenode member
              // call case 6: other requests
              var call344 = request(var_rcvrNode, "numberOfLevels", [0]);
              var block345 = new GraceBlock(this, 258, 0);
              block345.guard = jsTrue;
              block345.real = function block345() {
                setLineNumber(259);    // compilenode member
                // call case 6: other requests
                if (var_resultScope === undefined) raiseUninitializedVariable("resultScope");
                var call346 = request(var_resultScope, "enclosingObjectScope", [0]);
                var_resultScope = call346;
                return GraceDone;
              };
              let applyMeth345 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth345.methodName = "apply";
              applyMeth345.paramCounts = [0];
              applyMeth345.paramNames = [];
              applyMeth345.definitionLine = 258;
              applyMeth345.definitionModule = "identifierresolution";
              block345.methods["apply"] = applyMeth345;
              // call case 2: outer request
              var call343 = selfRequest(var_prelude, "repeat(1)times(1)", [1, 1], call344, block345);
              if (var_resultScope === undefined) raiseUninitializedVariable("resultScope");
              if339 = var_resultScope;
            } else {
              var if347 = GraceDone;
              setLineNumber(262);    // compilenode member
              // call case 6: other requests
              var call348 = request(var_rcvrNode, "isConstant", [0]);
              if (Grace_isTrue(call348)) {
                if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
                if347 = var_universalScope;
              } else {
                var if349 = GraceDone;
                setLineNumber(264);    // compilenode member
                // call case 6: other requests
                var call350 = request(var_rcvrNode, "isSequenceConstructor", [0]);
                if (Grace_isTrue(call350)) {
                  if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
                  if349 = var_universalScope;
                } else {
                  var if351 = GraceDone;
                  setLineNumber(266);    // compilenode member
                  // call case 6: other requests
                  var call352 = request(var_rcvrNode, "isObject", [0]);
                  if (Grace_isTrue(call352)) {
                    setLineNumber(267);    // compilenode member
                    // call case 6: other requests
                    var call353 = request(var_rcvrNode, "scope", [0]);
                    if351 = call353;
                  } else {
                    setLineNumber(269);    // compilenode string
                    var string355 = new GraceString("unexpected receiver ");
                    // call case 6: other requests
                    var call356 = request(var_rcvrNode, "toGrace(1)", [1], new GraceNum(0));
                    var opresult357 = request(string355, "++(1)", [1], call356);
                    var string358 = new GraceString(" ");
                    var opresult359 = request(opresult357, "++(1)", [1], string358);
                    setLineNumber(270);    // compilenode string
                    var string360 = new GraceString("on line ");
                    // call case 6: other requests
                    var call361 = request(var_rcvrNode, "line", [0]);
                    var opresult362 = request(string360, "++(1)", [1], call361);
                    var string363 = new GraceString("");
                    var opresult364 = request(opresult362, "++(1)", [1], string363);
                    var opresult365 = request(opresult359, "++(1)", [1], opresult364);
                    // call case 6: other requests
                    setLineNumber(269);    // compilenode member
                    // call case 2: outer request
                    var call366 = selfRequest(var_prelude, "ProgrammingError", [0]);
                    var call354 = request(call366, "raise(1)", [1], opresult365);
                    if351 = call354;
                  }
                  if349 = if351;
                }
                if347 = if349;
              }
              if339 = if347;
            }
            if333 = if339;
          }
          if329 = if333;
        }
        return if329;
      };    // end of method receiverScope(_)
      this.methods["receiverScope(1)"] = func328;
      func328.methodName = "receiverScope(1)";
      func328.paramCounts = [1];
      func328.paramNames = ["rcvrNode"];
      func328.definitionLine = 245;
      func328.definitionModule = "identifierresolution";
      var func367 = function(argcv, var_enclosingScope) {    // method isInSameObjectAs(_), line 273
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("isInSameObjectAs(_)", 0, numArgs - 1);
        }
        var if368 = GraceDone;
        setLineNumber(274);    // compilenode op
        var opresult369 = request(this, "==(1)", [1], var_enclosingScope);
        if (Grace_isTrue(opresult369)) {
          return GraceTrue;
        }
        var if370 = GraceDone;
        setLineNumber(275);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call372 = selfRequest(this, "parent", [0]);
        var call371 = request(call372, "isObjectScope", [0]);
        if (Grace_isTrue(call371)) {
          return GraceFalse;
        }
        setLineNumber(276);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call374 = selfRequest(this, "parent", [0]);
        var call373 = request(call374, "isInSameObjectAs(1)", [1], var_enclosingScope);
        return call373;
      };    // end of method isInSameObjectAs(_)
      this.methods["isInSameObjectAs(1)"] = func367;
      func367.methodName = "isInSameObjectAs(1)";
      func367.paramCounts = [1];
      func367.paramNames = ["enclosingScope"];
      func367.definitionLine = 273;
      func367.definitionModule = "identifierresolution";
      var func375 = function(argcv) {    // method isObjectScope, line 278
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isObjectScope", 0, numArgs - 0);
        }
        var if376 = GraceDone;
        setLineNumber(279);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call377 = selfRequest(this, "variety", [0]);
        var string378 = new GraceString("object");
        var opresult379 = request(call377, "==(1)", [1], string378);
        if (Grace_isTrue(opresult379)) {
          return GraceTrue;
        }
        var if380 = GraceDone;
        setLineNumber(280);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call381 = selfRequest(this, "variety", [0]);
        var string382 = new GraceString("module");
        var opresult383 = request(call381, "==(1)", [1], string382);
        if (Grace_isTrue(opresult383)) {
          return GraceTrue;
        }
        var if384 = GraceDone;
        setLineNumber(281);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call385 = selfRequest(this, "variety", [0]);
        var string386 = new GraceString("dialect");
        var opresult387 = request(call385, "==(1)", [1], string386);
        if (Grace_isTrue(opresult387)) {
          return GraceTrue;
        }
        var if388 = GraceDone;
        setLineNumber(282);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call389 = selfRequest(this, "variety", [0]);
        var string390 = new GraceString("class");
        var opresult391 = request(call389, "==(1)", [1], string390);
        if (Grace_isTrue(opresult391)) {
          return GraceTrue;
        }
        var if392 = GraceDone;
        setLineNumber(283);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call393 = selfRequest(this, "variety", [0]);
        var string394 = new GraceString("built-in");
        var opresult395 = request(call393, "==(1)", [1], string394);
        if (Grace_isTrue(opresult395)) {
          return GraceTrue;
        }
        return GraceFalse;
      };    // end of method isObjectScope
      this.methods["isObjectScope"] = func375;
      func375.methodName = "isObjectScope";
      func375.paramCounts = [0];
      func375.paramNames = [];
      func375.definitionLine = 278;
      func375.definitionModule = "identifierresolution";
      var func396 = function(argcv) {    // method allowsShadowing, line 286
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("allowsShadowing", 0, numArgs - 0);
        }
        var if397 = GraceDone;
        setLineNumber(287);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call398 = selfRequest(this, "variety", [0]);
        var string399 = new GraceString("type");
        var opresult400 = request(call398, "==(1)", [1], string399);
        if (Grace_isTrue(opresult400)) {
          return GraceTrue;
        }
        setLineNumber(288);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call401 = selfRequest(this, "isObjectScope", [0]);
        return call401;
      };    // end of method allowsShadowing
      this.methods["allowsShadowing"] = func396;
      func396.methodName = "allowsShadowing";
      func396.paramCounts = [0];
      func396.paramNames = [];
      func396.definitionLine = 286;
      func396.definitionModule = "identifierresolution";
      var func402 = function(argcv) {    // method isMethodScope, line 290
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isMethodScope", 0, numArgs - 0);
        }
        setLineNumber(291);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call403 = selfRequest(this, "variety", [0]);
        var string404 = new GraceString("method");
        var opresult405 = request(call403, "==(1)", [1], string404);
        return opresult405;
      };    // end of method isMethodScope
      this.methods["isMethodScope"] = func402;
      func402.methodName = "isMethodScope";
      func402.paramCounts = [0];
      func402.paramNames = [];
      func402.definitionLine = 290;
      func402.definitionModule = "identifierresolution";
      var func406 = function(argcv) {    // method isModuleScope, line 293
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isModuleScope", 0, numArgs - 0);
        }
        setLineNumber(294);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call407 = selfRequest(this, "variety", [0]);
        var string408 = new GraceString("module");
        var opresult409 = request(call407, "==(1)", [1], string408);
        return opresult409;
      };    // end of method isModuleScope
      this.methods["isModuleScope"] = func406;
      func406.methodName = "isModuleScope";
      func406.paramCounts = [0];
      func406.paramNames = [];
      func406.definitionLine = 293;
      func406.definitionModule = "identifierresolution";
      var func410 = function(argcv) {    // method isInheritableScope, line 296
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isInheritableScope", 0, numArgs - 0);
        }
        setLineNumber(297);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call412 = selfRequest(this, "variety", [0]);
        // call case 6: other requests
        var string413 = new GraceString("class | object");
        var call411 = request(string413, "contains(1)", [1], call412);
        return call411;
      };    // end of method isInheritableScope
      this.methods["isInheritableScope"] = func410;
      func410.methodName = "isInheritableScope";
      func410.paramCounts = [0];
      func410.paramNames = [];
      func410.definitionLine = 296;
      func410.definitionModule = "identifierresolution";
      var func414 = function(argcv, var_name, var_aNode) {    // method resolveOuterMethod(_)fromNode(_), line 299
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("resolveOuterMethod(_)fromNode(_)", 0, numArgs - 2);
        }
        setLineNumber(302);    // compilenode array
        var array416 = new GraceSequence([]);
        // call case 2: outer request
        var call415 = selfRequest(var_prelude, "list(1)", [1], array416);
        var var_outerChain = call415;
        setLineNumber(303);    // compilenode block
        var block418 = new GraceBlock(this, 303, 1);
        block418.guard = jsTrue;
        block418.real = function block418(var_s) {
          var if419 = GraceDone;
          setLineNumber(304);    // compilenode call
          // call case 6: other requests
          var call420 = request(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call420)) {
            var if421 = GraceDone;
            setLineNumber(305);    // compilenode member
            // call case 6: other requests
            var call422 = request(var_s, "variety", [0]);
            var string423 = new GraceString("dialect");
            var opresult424 = request(call422, "==(1)", [1], string423);
            if (Grace_isTrue(opresult424)) {
              setLineNumber(309);    // compilenode member
              // call case 6: other requests
              var call426 = request(var_aNode, "generics", [0]);
              // call case 6: other requests
              setLineNumber(306);    // compilenode member
              // call case 6: other requests
              setLineNumber(307);    // compilenode string
              var string430 = new GraceString("prelude");
              // call case 6: other requests
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call431 = request(var_ast, "identifierNode", [0]);
              var call429 = request(call431, "new(2)scope(1)", [2, 1], string430, GraceFalse, this);
              // call case 6: other requests
              setLineNumber(306);    // compilenode member
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call432 = request(var_ast, "memberNode", [0]);
              var call428 = request(call432, "new(2)scope(1)", [2, 1], var_name, call429, this);
              var call427 = request(call428, "onSelf", [0]);
              var call425 = request(call427, "withGenericArgs(1)", [1], call426);
              throw new ReturnException(call425, returnTarget);
            } else {
              var if433 = GraceDone;
              setLineNumber(310);    // compilenode member
              // call case 6: other requests
              var call434 = request(var_s, "variety", [0]);
              var string435 = new GraceString("module");
              var opresult436 = request(call434, "==(1)", [1], string435);
              if (Grace_isTrue(opresult436)) {
                setLineNumber(312);    // compilenode member
                // call case 6: other requests
                var call438 = request(var_aNode, "generics", [0]);
                // call case 6: other requests
                setLineNumber(311);    // compilenode member
                // call case 6: other requests
                if (var_thisModule === undefined) raiseUninitializedVariable("thisModule");
                // call case 6: other requests
                // call case 6: other requests
                if (var_ast === undefined) raiseUninitializedVariable("ast");
                var call441 = request(var_ast, "memberNode", [0]);
                var call440 = request(call441, "new(2)scope(1)", [2, 1], var_name, var_thisModule, this);
                var call439 = request(call440, "onSelf", [0]);
                var call437 = request(call439, "withGenericArgs(1)", [1], call438);
                throw new ReturnException(call437, returnTarget);
              }
              if421 = if433;
            }
            var if442 = GraceDone;
            setLineNumber(314);    // compilenode member
            // call case 6: other requests
            if (var_outerChain === undefined) raiseUninitializedVariable("outerChain");
            var call443 = request(var_outerChain, "isEmpty", [0]);
            if (Grace_isTrue(call443)) {
              setLineNumber(316);    // compilenode member
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call445 = request(var_ast, "noPosition", [0]);
              // call case 6: other requests
              setLineNumber(315);    // compilenode string
              var string447 = new GraceString("self");
              // call case 6: other requests
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call448 = request(var_ast, "identifierNode", [0]);
              var call446 = request(call448, "new(2)scope(1)", [2, 1], string447, GraceFalse, this);
              var call444 = request(call446, "setStart(1)", [1], call445);
              if442 = call444;
            } else {
              setLineNumber(319);    // compilenode member
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call450 = request(var_ast, "noPosition", [0]);
              // call case 6: other requests
              setLineNumber(318);    // compilenode call
              // call case 6: other requests
              if (var_outerChain === undefined) raiseUninitializedVariable("outerChain");
              // call case 6: other requests
              if (var_ast === undefined) raiseUninitializedVariable("ast");
              var call452 = request(var_ast, "outerNode(1)", [1], var_outerChain);
              var call451 = request(call452, "setScope(1)", [1], this);
              var call449 = request(call451, "setStart(1)", [1], call450);
              if442 = call449;
            }
            var var_rcvr = if442;
            setLineNumber(323);    // compilenode member
            // call case 6: other requests
            var call454 = request(var_aNode, "generics", [0]);
            // call case 6: other requests
            setLineNumber(321);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            if (var_rcvr === undefined) raiseUninitializedVariable("rcvr");
            // call case 6: other requests
            // call case 6: other requests
            if (var_ast === undefined) raiseUninitializedVariable("ast");
            var call459 = request(var_ast, "memberNode", [0]);
            var call458 = request(call459, "new(2)", [2], var_name, var_rcvr);
            var call457 = request(call458, "setScope(1)", [1], this);
            var call456 = request(call457, "setPositionFrom(1)", [1], var_aNode);
            var call455 = request(call456, "onSelf", [0]);
            var call453 = request(call455, "withGenericArgs(1)", [1], call454);
            throw new ReturnException(call453, returnTarget);
          }
          var if460 = GraceDone;
          setLineNumber(325);    // compilenode member
          // call case 6: other requests
          var call461 = request(var_s, "variety", [0]);
          var string462 = new GraceString("object");
          var opresult463 = request(call461, "==(1)", [1], string462);
          if (Grace_isTrue(opresult463)) {
            setLineNumber(326);    // compilenode member
            // call case 6: other requests
            var call464 = request(var_s, "node", [0]);
            var var_definingObjNode = call464;
            var if465 = GraceDone;
            setLineNumber(327);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            if (var_outerChain === undefined) raiseUninitializedVariable("outerChain");
            var call467 = request(var_outerChain, "isEmpty", [0]);
            var call466 = request(call467, "not", [0]);
            var block468 = new GraceBlock(this, 327, 0);
            block468.guard = jsTrue;
            block468.real = function block468() {
              setLineNumber(327);    // compilenode member
              // call case 6: other requests
              if (var_outerChain === undefined) raiseUninitializedVariable("outerChain");
              var call469 = request(var_outerChain, "last", [0]);
              if (var_definingObjNode === undefined) raiseUninitializedVariable("definingObjNode");
              var opresult470 = request(call469, "==(1)", [1], var_definingObjNode);
              return opresult470;
            };
            let applyMeth468 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth468.methodName = "apply";
            applyMeth468.paramCounts = [0];
            applyMeth468.paramNames = [];
            applyMeth468.definitionLine = 327;
            applyMeth468.definitionModule = "identifierresolution";
            block468.methods["apply"] = applyMeth468;
            var opresult471 = request(call466, "&&(1)", [1], block468);
            if (Grace_isTrue(opresult471)) {
              setLineNumber(328);    // compilenode string
              var string473 = new GraceString("adding ");
              if (var_definingObjNode === undefined) raiseUninitializedVariable("definingObjNode");
              var opresult474 = request(string473, "++(1)", [1], var_definingObjNode);
              var string475 = new GraceString(" twice");
              var opresult476 = request(opresult474, "++(1)", [1], string475);
              // call case 6: other requests
              // call case 2: outer request
              var call477 = selfRequest(var_prelude, "ProgrammingError", [0]);
              var call472 = request(call477, "raise(1)", [1], opresult476);
              if465 = call472;
            } else {
              setLineNumber(330);    // compilenode member
              // call case 6: other requests
              var call479 = request(var_s, "node", [0]);
              // call case 6: other requests
              if (var_outerChain === undefined) raiseUninitializedVariable("outerChain");
              var call478 = request(var_outerChain, "addLast(1)", [1], call479);
              if465 = call478;
            }
            if460 = if465;
          }
          return if460;
        };
        let applyMeth418 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth418.methodName = "apply(1)";
        applyMeth418.paramCounts = [1];
        applyMeth418.paramNames = ["s"];
        applyMeth418.definitionLine = 303;
        applyMeth418.definitionModule = "identifierresolution";
        block418.methods["apply(1)"] = applyMeth418;
        let matchesMeth418 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth418.methodName = "matches(1)";
        matchesMeth418.paramCounts = [1];
        matchesMeth418.paramNames = ["s"];
        matchesMeth418.definitionLine = 303;
        matchesMeth418.definitionModule = "identifierresolution";
        block418.methods["matches(1)"] = matchesMeth418;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call417 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block418);
        var if480 = GraceDone;
        setLineNumber(335);    // compilenode member
        // call case 6: other requests
        var call481 = request(var_aNode, "nameString", [0]);
        var string482 = new GraceString("explOde(1)");
        var opresult483 = request(call481, "==(1)", [1], string482);
        if (Grace_isTrue(opresult483)) {
          setLineNumber(336);    // compilenode string
          var string485 = new GraceString("the compiler exploded.");
          // call case 6: other requests
          // call case 2: outer request
          var call486 = selfRequest(var_prelude, "ProgrammingError", [0]);
          var call484 = request(call486, "raise(1)", [1], string485);
          if480 = call484;
        }
        setLineNumber(338);    // compilenode member
        // call case 6: other requests
        var call488 = request(var_aNode, "asIdentifier", [0]);
        // call case 2: outer request
        var call487 = selfRequest(importedModules["identifierresolution"], "reportUndeclaredIdentifier(1)", [1], call488);
        return call487;
      };    // end of method resolveOuterMethod(_)fromNode(_)
      this.methods["resolveOuterMethod(1)fromNode(1)"] = func414;
      func414.methodName = "resolveOuterMethod(1)fromNode(1)";
      func414.paramCounts = [1, 1];
      func414.paramNames = ["name", "aNode"];
      func414.definitionLine = 299;
      func414.definitionModule = "identifierresolution";
      var func489 = function(argcv, var_name) {    // method isSpecial(_), line 340
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("isSpecial(_)", 0, numArgs - 1);
        }
        var if490 = GraceDone;
        setLineNumber(341);    // compilenode string
        var string492 = new GraceString("list");
        // call case 6: other requests
        var call491 = request(var_name, "startsWith(1)", [1], string492);
        if (Grace_isTrue(call491)) {
          setLineNumber(342);    // compilenode num
          // call case 4: self request with 2 args and 0 typeArgs 
          var call493 = selfRequest(this, "endsWithParenthesizedNumber(2)", [2], var_name, new GraceNum(5));
          if490 = call493;
        } else {
          var if494 = GraceDone;
          setLineNumber(343);    // compilenode string
          var string496 = new GraceString("set");
          // call case 6: other requests
          var call495 = request(var_name, "startsWith(1)", [1], string496);
          if (Grace_isTrue(call495)) {
            setLineNumber(344);    // compilenode num
            // call case 4: self request with 2 args and 0 typeArgs 
            var call497 = selfRequest(this, "endsWithParenthesizedNumber(2)", [2], var_name, new GraceNum(4));
            if494 = call497;
          } else {
            var if498 = GraceDone;
            setLineNumber(345);    // compilenode string
            var string500 = new GraceString("sequence");
            // call case 6: other requests
            var call499 = request(var_name, "startsWith(1)", [1], string500);
            if (Grace_isTrue(call499)) {
              setLineNumber(346);    // compilenode num
              // call case 4: self request with 2 args and 0 typeArgs 
              var call501 = selfRequest(this, "endsWithParenthesizedNumber(2)", [2], var_name, new GraceNum(9));
              if498 = call501;
            } else {
              var if502 = GraceDone;
              setLineNumber(347);    // compilenode string
              var string504 = new GraceString("dictionary");
              // call case 6: other requests
              var call503 = request(var_name, "startsWith(1)", [1], string504);
              if (Grace_isTrue(call503)) {
                setLineNumber(348);    // compilenode num
                // call case 4: self request with 2 args and 0 typeArgs 
                var call505 = selfRequest(this, "endsWithParenthesizedNumber(2)", [2], var_name, new GraceNum(11));
                if502 = call505;
              } else {
                if502 = GraceFalse;
              }
              if498 = if502;
            }
            if494 = if498;
          }
          if490 = if494;
        }
        return if490;
      };    // end of method isSpecial(_)
      func489.confidential = true;
      this.methods["isSpecial(1)"] = func489;
      func489.methodName = "isSpecial(1)";
      func489.paramCounts = [1];
      func489.paramNames = ["name"];
      func489.definitionLine = 340;
      func489.definitionModule = "identifierresolution";
      var func506 = function(argcv, var_name, var_startIndex) {    // method endsWithParenthesizedNumber(_,_), line 353
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("endsWithParenthesizedNumber(_,_)", 0, numArgs - 2);
        }
        setLineNumber(354);    // compilenode member
        // call case 6: other requests
        var call507 = request(var_name, "size", [0]);
        var var_sz = call507;
        var if508 = GraceDone;
        setLineNumber(355);    // compilenode op
        var opresult509 = request(var_startIndex, "\u2265(1)", [1], var_sz);
        if (Grace_isTrue(opresult509)) {
          return GraceFalse;
        }
        var if510 = GraceDone;
        setLineNumber(356);    // compilenode call
        // call case 6: other requests
        var call511 = request(var_name, "at(1)", [1], var_startIndex);
        var string512 = new GraceString("(");
        var opresult513 = request(call511, "\u2260(1)", [1], string512);
        if (Grace_isTrue(opresult513)) {
          return GraceFalse;
        }
        setLineNumber(357);    // compilenode num
        var sum514 = request(var_startIndex, "+(1)", [1], new GraceNum(1));
        var var_i = sum514;
        setLineNumber(358);    // compilenode block
        var block516 = new GraceBlock(this, 358, 0);
        block516.guard = jsTrue;
        block516.real = function block516() {
          setLineNumber(358);    // compilenode member
          // call case 6: other requests
          if (var_i === undefined) raiseUninitializedVariable("i");
          // call case 6: other requests
          var call518 = request(var_name, "at(1)", [1], var_i);
          var call517 = request(call518, "startsWithDigit", [0]);
          return call517;
        };
        let applyMeth516 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth516.methodName = "apply";
        applyMeth516.paramCounts = [0];
        applyMeth516.paramNames = [];
        applyMeth516.definitionLine = 358;
        applyMeth516.definitionModule = "identifierresolution";
        block516.methods["apply"] = applyMeth516;
        var block519 = new GraceBlock(this, 358, 0);
        block519.guard = jsTrue;
        block519.real = function block519() {
          setLineNumber(359);    // compilenode op
          if (var_i === undefined) raiseUninitializedVariable("i");
          var sum520 = request(var_i, "+(1)", [1], new GraceNum(1));
          var_i = sum520;
          var if521 = GraceDone;
          setLineNumber(360);    // compilenode op
          if (var_i === undefined) raiseUninitializedVariable("i");
          if (var_sz === undefined) raiseUninitializedVariable("sz");
          var opresult522 = request(var_i, ">(1)", [1], var_sz);
          if (Grace_isTrue(opresult522)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if521;
        };
        let applyMeth519 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth519.methodName = "apply";
        applyMeth519.paramCounts = [0];
        applyMeth519.paramNames = [];
        applyMeth519.definitionLine = 358;
        applyMeth519.definitionModule = "identifierresolution";
        block519.methods["apply"] = applyMeth519;
        // call case 2: outer request
        var call515 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block516, block519);
        setLineNumber(362);    // compilenode call
        // call case 6: other requests
        var call523 = request(var_name, "at(1)", [1], var_i);
        var string524 = new GraceString(")");
        var opresult525 = request(call523, "==(1)", [1], string524);
        var opresult526 = request(var_i, "==(1)", [1], var_sz);
        var opresult527 = request(opresult525, "&&(1)", [1], opresult526);
        return opresult527;
      };    // end of method endsWithParenthesizedNumber(_,_)
      func506.confidential = true;
      this.methods["endsWithParenthesizedNumber(2)"] = func506;
      func506.methodName = "endsWithParenthesizedNumber(2)";
      func506.paramCounts = [2];
      func506.paramNames = ["name", "startIndex"];
      func506.definitionLine = 353;
      func506.definitionModule = "identifierresolution";
      var func528 = function(argcv, var_nd) {    // method scopeReferencedBy(_), line 364
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("scopeReferencedBy(_)", 0, numArgs - 1);
        }
        setLineNumber(364);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call529 = request(var_ast, "AstNode", [0]);
        assertTypeOrMsg(var_nd, call529, "argument to request of `scopeReferencedBy(_)`", "ast.AstNode");
        var if530 = GraceDone;
        setLineNumber(370);    // compilenode member
        // call case 6: other requests
        var call531 = request(var_nd, "isIdentifier", [0]);
        if (Grace_isTrue(call531)) {
          setLineNumber(371);    // compilenode member
          // call case 6: other requests
          var call532 = request(var_nd, "nameString", [0]);
          var var_sought = call532;
          var if533 = GraceDone;
          setLineNumber(372);    // compilenode op
          if (var_sought === undefined) raiseUninitializedVariable("sought");
          var string534 = new GraceString("outer");
          var opresult535 = request(var_sought, "==(1)", [1], string534);
          if (Grace_isTrue(opresult535)) {
            setLineNumber(373);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call537 = selfRequest(this, "parent", [0]);
            var call536 = request(call537, "enclosingObjectScope", [0]);
            return call536;
          }
          setLineNumber(375);    // compilenode block
          var block539 = new GraceBlock(this, 375, 1);
          block539.guard = jsTrue;
          block539.real = function block539(var_s) {
            var if540 = GraceDone;
            setLineNumber(376);    // compilenode call
            if (var_sought === undefined) raiseUninitializedVariable("sought");
            // call case 6: other requests
            var call541 = request(var_s, "contains(1)", [1], var_sought);
            if (Grace_isTrue(call541)) {
              setLineNumber(377);    // compilenode call
              if (var_sought === undefined) raiseUninitializedVariable("sought");
              // call case 6: other requests
              var call542 = request(var_s, "getScope(1)", [1], var_sought);
              throw new ReturnException(call542, returnTarget);
            }
            return if540;
          };
          let applyMeth539 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth539.methodName = "apply(1)";
          applyMeth539.paramCounts = [1];
          applyMeth539.paramNames = ["s"];
          applyMeth539.definitionLine = 375;
          applyMeth539.definitionModule = "identifierresolution";
          block539.methods["apply(1)"] = applyMeth539;
          let matchesMeth539 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth539.methodName = "matches(1)";
          matchesMeth539.paramCounts = [1];
          matchesMeth539.paramNames = ["s"];
          matchesMeth539.definitionLine = 375;
          matchesMeth539.definitionModule = "identifierresolution";
          block539.methods["matches(1)"] = matchesMeth539;
          // call case 4: self request with 1 args and 0 typeArgs 
          var call538 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block539);
          var if543 = GraceDone;
          setLineNumber(380);    // compilenode member
          // call case 6: other requests
          var call544 = request(var_nd, "nameString", [0]);
          var string545 = new GraceString("explOde(1)");
          var opresult546 = request(call544, "==(1)", [1], string545);
          if (Grace_isTrue(opresult546)) {
            setLineNumber(381);    // compilenode string
            var string548 = new GraceString("the compiler exploded.");
            // call case 6: other requests
            // call case 2: outer request
            var call549 = selfRequest(var_prelude, "ProgrammingError", [0]);
            var call547 = request(call549, "raise(1)", [1], string548);
            if543 = call547;
          }
          setLineNumber(383);    // compilenode string
          var string551 = new GraceString("no method ");
          // call case 6: other requests
          var call552 = request(var_nd, "canonicalName", [0]);
          var opresult553 = request(string551, "++(1)", [1], call552);
          var string554 = new GraceString(".");
          var opresult555 = request(opresult553, "++(1)", [1], string554);
          setLineNumber(384);    // compilenode member
          // call case 6: other requests
          var call556 = request(var_nd, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call550 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult555, call556);
          if530 = call550;
        } else {
          var if557 = GraceDone;
          setLineNumber(385);    // compilenode member
          // call case 6: other requests
          var call558 = request(var_nd, "kind", [0]);
          var string559 = new GraceString("outer");
          var opresult560 = request(call558, "==(1)", [1], string559);
          if (Grace_isTrue(opresult560)) {
            setLineNumber(386);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call563 = request(var_nd, "theObjects", [0]);
            var call562 = request(call563, "last", [0]);
            var call561 = request(call562, "scope", [0]);
            if557 = call561;
          } else {
            var if564 = GraceDone;
            setLineNumber(387);    // compilenode member
            // call case 6: other requests
            var call565 = request(var_nd, "kind", [0]);
            var string566 = new GraceString("op");
            var opresult567 = request(call565, "==(1)", [1], string566);
            if (Grace_isTrue(opresult567)) {
              setLineNumber(388);    // compilenode member
              // call case 6: other requests
              var call569 = request(var_nd, "left", [0]);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call568 = selfRequest(this, "scopeReferencedBy(1)", [1], call569);
              var var_receiverScope = call568;
              setLineNumber(389);    // compilenode member
              // call case 6: other requests
              var call571 = request(var_nd, "asIdentifier", [0]);
              // call case 6: other requests
              if (var_receiverScope === undefined) raiseUninitializedVariable("receiverScope");
              var call570 = request(var_receiverScope, "scopeReferencedBy(1)", [1], call571);
              if564 = call570;
            } else {
              var if572 = GraceDone;
              setLineNumber(390);    // compilenode member
              // call case 6: other requests
              var call573 = request(var_nd, "isCall", [0]);
              if (Grace_isTrue(call573)) {
                setLineNumber(391);    // compilenode member
                // call case 6: other requests
                var call574 = request(var_nd, "receiver", [0]);
                var var_receiver = call574;
                var if575 = GraceDone;
                setLineNumber(392);    // compilenode member
                // call case 6: other requests
                if (var_receiver === undefined) raiseUninitializedVariable("receiver");
                var call576 = request(var_receiver, "isImplicit", [0]);
                if (Grace_isTrue(call576)) {
                  setLineNumber(393);    // compilenode string
                  var string578 = new GraceString("inherit from implicit.");
                  // call case 6: other requests
                  var call579 = request(var_nd, "nameString", [0]);
                  var opresult580 = request(string578, "++(1)", [1], call579);
                  var string581 = new GraceString(" on line ");
                  var opresult582 = request(opresult580, "++(1)", [1], string581);
                  // call case 6: other requests
                  var call583 = request(var_nd, "line", [0]);
                  var opresult584 = request(opresult582, "++(1)", [1], call583);
                  var string585 = new GraceString("");
                  var opresult586 = request(opresult584, "++(1)", [1], string585);
                  // call case 6: other requests
                  if (var_util === undefined) raiseUninitializedVariable("util");
                  var call577 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult586);
                  if575 = call577;
                }
                setLineNumber(395);    // compilenode call
                // call case 2: outer request
                var call587 = selfRequest(importedModules["identifierresolution"], "transformCall(1)", [1], var_nd);
                var var_newNd = call587;
                setLineNumber(396);    // compilenode member
                // call case 6: other requests
                if (var_newNd === undefined) raiseUninitializedVariable("newNd");
                var call589 = request(var_newNd, "receiver", [0]);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call588 = selfRequest(this, "scopeReferencedBy(1)", [1], call589);
                var var_receiverScope = call588;
                setLineNumber(397);    // compilenode member
                // call case 6: other requests
                if (var_newNd === undefined) raiseUninitializedVariable("newNd");
                var call591 = request(var_newNd, "asIdentifier", [0]);
                // call case 6: other requests
                if (var_receiverScope === undefined) raiseUninitializedVariable("receiverScope");
                var call590 = request(var_receiverScope, "scopeReferencedBy(1)", [1], call591);
                if572 = call590;
              } else {
                setLineNumber(399);    // compilenode string
                var string593 = new GraceString("");
                // call case 6: other requests
                var call594 = request(var_nd, "nameString", [0]);
                var opresult595 = request(string593, "++(1)", [1], call594);
                var string596 = new GraceString(" is not a Call, Member, Identifier, Outer or Op node.\n");
                var opresult597 = request(opresult595, "++(1)", [1], string596);
                setLineNumber(400);    // compilenode num
                // call case 6: other requests
                var call598 = request(var_nd, "pretty(1)", [1], new GraceNum(0));
                var opresult599 = request(opresult597, "++(1)", [1], call598);
                // call case 6: other requests
                setLineNumber(399);    // compilenode member
                // call case 2: outer request
                var call600 = selfRequest(var_prelude, "ProgrammingError", [0]);
                var call592 = request(call600, "raise(1)", [1], opresult599);
                if572 = call592;
              }
              if564 = if572;
            }
            if557 = if564;
          }
          if530 = if557;
        }
        return if530;
      };    // end of method scopeReferencedBy(_)
      this.methods["scopeReferencedBy(1)"] = func528;
      func528.methodName = "scopeReferencedBy(1)";
      func528.paramCounts = [1];
      func528.paramNames = ["nd"];
      func528.definitionLine = 364;
      func528.definitionModule = "identifierresolution";
      var func601 = function(argcv) {    // method enclosingObjectScope, line 403
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("enclosingObjectScope", 0, numArgs - 0);
        }
        setLineNumber(406);    // compilenode block
        var block603 = new GraceBlock(this, 406, 1);
        block603.guard = jsTrue;
        block603.real = function block603(var_s) {
          var if604 = GraceDone;
          setLineNumber(407);    // compilenode member
          // call case 6: other requests
          var call605 = request(var_s, "isObjectScope", [0]);
          if (Grace_isTrue(call605)) {
            throw new ReturnException(var_s, returnTarget);
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
        applyMeth603.paramNames = ["s"];
        applyMeth603.definitionLine = 406;
        applyMeth603.definitionModule = "identifierresolution";
        block603.methods["apply(1)"] = applyMeth603;
        let matchesMeth603 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth603.methodName = "matches(1)";
        matchesMeth603.paramCounts = [1];
        matchesMeth603.paramNames = ["s"];
        matchesMeth603.definitionLine = 406;
        matchesMeth603.definitionModule = "identifierresolution";
        block603.methods["matches(1)"] = matchesMeth603;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call602 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block603);
        setLineNumber(409);    // compilenode string
        var string607 = new GraceString("no object scope found!");
        // call case 6: other requests
        // call case 2: outer request
        var call608 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call606 = request(call608, "raise(1)", [1], string607);
        return call606;
      };    // end of method enclosingObjectScope
      this.methods["enclosingObjectScope"] = func601;
      func601.methodName = "enclosingObjectScope";
      func601.paramCounts = [0];
      func601.paramNames = [];
      func601.definitionLine = 403;
      func601.definitionModule = "identifierresolution";
      var func609 = function(argcv, var_encScope) {    // method inSameContextAs(_), line 413
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("inSameContextAs(_)", 0, numArgs - 1);
        }
        var if610 = GraceDone;
        setLineNumber(416);    // compilenode member
        // call case 6: other requests
        var call611 = request(var_encScope, "isObjectScope", [0]);
        if (Grace_isTrue(call611)) {
          return GraceFalse;
        }
        setLineNumber(417);    // compilenode block
        var block613 = new GraceBlock(this, 417, 1);
        block613.guard = jsTrue;
        block613.real = function block613(var_s) {
          var if614 = GraceDone;
          setLineNumber(418);    // compilenode op
          var opresult615 = request(var_s, "==(1)", [1], var_encScope);
          if (Grace_isTrue(opresult615)) {
            throw new ReturnException(GraceTrue, returnTarget);
          }
          var if616 = GraceDone;
          setLineNumber(419);    // compilenode member
          // call case 6: other requests
          var call617 = request(var_s, "isObjectScope", [0]);
          if (Grace_isTrue(call617)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          var if618 = GraceDone;
          setLineNumber(420);    // compilenode member
          // call case 6: other requests
          var call619 = request(var_s, "isMethodScope", [0]);
          if (Grace_isTrue(call619)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if618;
        };
        let applyMeth613 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth613.methodName = "apply(1)";
        applyMeth613.paramCounts = [1];
        applyMeth613.paramNames = ["s"];
        applyMeth613.definitionLine = 417;
        applyMeth613.definitionModule = "identifierresolution";
        block613.methods["apply(1)"] = applyMeth613;
        let matchesMeth613 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth613.methodName = "matches(1)";
        matchesMeth613.paramCounts = [1];
        matchesMeth613.paramNames = ["s"];
        matchesMeth613.definitionLine = 417;
        matchesMeth613.definitionModule = "identifierresolution";
        block613.methods["matches(1)"] = matchesMeth613;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call612 = selfRequest(this, "withSurroundingScopesDo(1)", [1], block613);
        setLineNumber(422);    // compilenode string
        var string621 = new GraceString("self = ");
        var opresult622 = request(string621, "++(1)", [1], this);
        var string623 = new GraceString("; encScope = ");
        var opresult624 = request(opresult622, "++(1)", [1], string623);
        var opresult625 = request(opresult624, "++(1)", [1], var_encScope);
        var string626 = new GraceString("");
        var opresult627 = request(opresult625, "++(1)", [1], string626);
        // call case 6: other requests
        // call case 2: outer request
        var call628 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call620 = request(call628, "raise(1)", [1], opresult627);
        return call620;
      };    // end of method inSameContextAs(_)
      this.methods["inSameContextAs(1)"] = func609;
      func609.methodName = "inSameContextAs(1)";
      func609.paramCounts = [1];
      func609.paramNames = ["encScope"];
      func609.definitionLine = 413;
      func609.definitionModule = "identifierresolution";
      var func629 = function(argcv) {     // accessor method isUniversal
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("isUniversal", 0, numArgs - 0);
        return GraceFalse;
      };    // end of method isUniversal
      this.methods["isUniversal"] = func629;
      func629.methodName = "isUniversal";
      func629.paramCounts = [0];
      func629.paramNames = [];
      func629.definitionLine = 424;
      func629.definitionModule = "identifierresolution";
      var func630 = function(argcv, var_ident, var_newKind) {    // method checkShadowing(_)asA(_), line 425
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("checkShadowing(_)asA(_)", 0, numArgs - 2);
        }
        setLineNumber(426);    // compilenode member
        // call case 6: other requests
        var call631 = request(var_ident, "nameString", [0]);
        var var_name = call631;
        setLineNumber(427);    // compilenode block
        var block633 = new GraceBlock(this, 427, 0);
        block633.guard = jsTrue;
        block633.real = function block633() {
          setLineNumber(428);    // compilenode return
          throw new ReturnException(var_done, returnTarget);
        };
        let applyMeth633 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth633.methodName = "apply";
        applyMeth633.paramCounts = [0];
        applyMeth633.paramNames = [];
        applyMeth633.definitionLine = 427;
        applyMeth633.definitionModule = "identifierresolution";
        block633.methods["apply"] = applyMeth633;
        // call case 4: self request with 2 args and 0 typeArgs 
        var call632 = selfRequest(this, "thatDefines(1)ifNone(1)", [1, 1], var_name, block633);
        var var_priorScope = call632;
        var if634 = GraceDone;
        setLineNumber(430);    // compilenode op
        var opresult635 = request(var_priorScope, "==(1)", [1], this);
        if (Grace_isTrue(opresult635)) {
          setLineNumber(431);    // compilenode string
          var string636 = new GraceString("this");
          if634 = string636;
        } else {
          setLineNumber(433);    // compilenode string
          var string637 = new GraceString("an enclosing ");
          // call case 6: other requests
          if (var_priorScope === undefined) raiseUninitializedVariable("priorScope");
          var call638 = request(var_priorScope, "variety", [0]);
          var opresult639 = request(string637, "++(1)", [1], call638);
          var string640 = new GraceString("");
          var opresult641 = request(opresult639, "++(1)", [1], string640);
          if634 = opresult641;
        }
        var var_description = if634;
        setLineNumber(435);    // compilenode call
        // call case 6: other requests
        var call642 = request(var_priorScope, "kind(1)", [1], var_name);
        var var_priorKind = call642;
        var if643 = GraceDone;
        setLineNumber(436);    // compilenode member
        // call case 6: other requests
        var call644 = request(var_priorScope, "allowsShadowing", [0]);
        var block645 = new GraceBlock(this, 436, 0);
        block645.guard = jsTrue;
        block645.real = function block645() {
          setLineNumber(436);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call646 = selfRequest(this, "allowsShadowing", [0]);
          return call646;
        };
        let applyMeth645 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth645.methodName = "apply";
        applyMeth645.paramCounts = [0];
        applyMeth645.paramNames = [];
        applyMeth645.definitionLine = 436;
        applyMeth645.definitionModule = "identifierresolution";
        block645.methods["apply"] = applyMeth645;
        var opresult647 = request(call644, "&&(1)", [1], block645);
        if (Grace_isTrue(opresult647)) {
          setLineNumber(437);    // compilenode return
          return var_done;
        }
        setLineNumber(440);    // compilenode string
        var string648 = new GraceString("");
        var var_more = string648;
        var if649 = GraceDone;
        setLineNumber(441);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        var call651 = request(var_priorScope, "elementLines", [0]);
        var call650 = request(call651, "containsKey(1)", [1], var_name);
        if (Grace_isTrue(call650)) {
          setLineNumber(442);    // compilenode call
          if (var_name === undefined) raiseUninitializedVariable("name");
          // call case 6: other requests
          // call case 6: other requests
          if (var_priorScope === undefined) raiseUninitializedVariable("priorScope");
          var call653 = request(var_priorScope, "elementLines", [0]);
          var call652 = request(call653, "at(1)", [1], var_name);
          var var_ln = call652;
          var if654 = GraceDone;
          setLineNumber(443);    // compilenode op
          if (var_ln === undefined) raiseUninitializedVariable("ln");
          var opresult655 = request(var_ln, ">(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult655)) {
            setLineNumber(444);    // compilenode string
            var string656 = new GraceString(" on line ");
            if (var_name === undefined) raiseUninitializedVariable("name");
            // call case 6: other requests
            // call case 6: other requests
            if (var_priorScope === undefined) raiseUninitializedVariable("priorScope");
            var call658 = request(var_priorScope, "elementLines", [0]);
            var call657 = request(call658, "at(1)", [1], var_name);
            var opresult659 = request(string656, "++(1)", [1], call657);
            var string660 = new GraceString("");
            var opresult661 = request(opresult659, "++(1)", [1], string660);
            var_more = opresult661;
            if654 = GraceDone;
          }
          if649 = if654;
        }
        var if662 = GraceDone;
        setLineNumber(447);    // compilenode member
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call663 = request(var_k, "vardec", [0]);
        var opresult664 = request(var_newKind, "==(1)", [1], call663);
        if (Grace_isTrue(opresult664)) {
          setLineNumber(448);    // compilenode array
          var array666 = new GraceSequence([]);
          // call case 2: outer request
          var call665 = selfRequest(var_prelude, "list(1)", [1], array666);
          var var_suggs = call665;
          setLineNumber(449);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call668 = request(var_errormessages, "suggestion", [0]);
          var call667 = request(call668, "new", [0]);
          var var_sugg = call667;
          var if669 = GraceDone;
          setLineNumber(450);    // compilenode string
          var string671 = new GraceString("=");
          var string672 = new GraceString("");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult673 = request(string672, "++(1)", [1], var_name);
          var string674 = new GraceString(" :=");
          var opresult675 = request(opresult673, "++(1)", [1], string674);
          setLineNumber(451);    // compilenode member
          // call case 6: other requests
          var call676 = request(var_ident, "line", [0]);
          // call case 6: other requests
          if (var_sugg === undefined) raiseUninitializedVariable("sugg");
          var call670 = request(var_sugg, "replaceUntil(1)with(1)onLine(1)", [1, 1, 1], string671, opresult675, call676);
          if (Grace_isTrue(call670)) {
            setLineNumber(452);    // compilenode call
            if (var_sugg === undefined) raiseUninitializedVariable("sugg");
            // call case 6: other requests
            if (var_suggs === undefined) raiseUninitializedVariable("suggs");
            var call677 = request(var_suggs, "push(1)", [1], var_sugg);
            if669 = call677;
          }
          var if678 = GraceDone;
          setLineNumber(454);    // compilenode op
          if (var_priorKind === undefined) raiseUninitializedVariable("priorKind");
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call679 = request(var_k, "vardec", [0]);
          var opresult680 = request(var_priorKind, "==(1)", [1], call679);
          if (Grace_isTrue(opresult680)) {
            setLineNumber(455);    // compilenode op
            if (var_more === undefined) raiseUninitializedVariable("more");
            var string681 = new GraceString(". To assign to the existing variable, remove 'var'");
            var opresult682 = request(var_more, "++(1)", [1], string681);
            var_more = opresult682;
            if678 = GraceDone;
          }
          setLineNumber(457);    // compilenode string
          var string684 = new GraceString("'");
          // call case 6: other requests
          var call685 = request(var_ident, "canonicalName", [0]);
          var opresult686 = request(string684, "++(1)", [1], call685);
          var string687 = new GraceString("' cannot be ");
          var opresult688 = request(opresult686, "++(1)", [1], string687);
          setLineNumber(458);    // compilenode string
          var string689 = new GraceString("redeclared because it is already declared in ");
          var opresult690 = request(opresult688, "++(1)", [1], string689);
          setLineNumber(459);    // compilenode string
          var string691 = new GraceString("");
          if (var_description === undefined) raiseUninitializedVariable("description");
          var opresult692 = request(string691, "++(1)", [1], var_description);
          var string693 = new GraceString(" scope");
          var opresult694 = request(opresult692, "++(1)", [1], string693);
          if (var_more === undefined) raiseUninitializedVariable("more");
          var opresult695 = request(opresult694, "++(1)", [1], var_more);
          var string696 = new GraceString(".");
          var opresult697 = request(opresult695, "++(1)", [1], string696);
          var opresult698 = request(opresult690, "++(1)", [1], opresult697);
          setLineNumber(460);    // compilenode member
          // call case 6: other requests
          var call699 = request(var_ident, "range", [0]);
          if (var_suggs === undefined) raiseUninitializedVariable("suggs");
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call683 = request(var_errormessages, "syntaxError(1)atRange(1)withSuggestions(1)", [1, 1, 1], opresult698, call699, var_suggs);
          if662 = call683;
        } else {
          setLineNumber(463);    // compilenode string
          var string701 = new GraceString("'");
          // call case 6: other requests
          var call702 = request(var_ident, "canonicalName", [0]);
          var opresult703 = request(string701, "++(1)", [1], call702);
          var string704 = new GraceString("' cannot be ");
          var opresult705 = request(opresult703, "++(1)", [1], string704);
          setLineNumber(464);    // compilenode string
          var string706 = new GraceString("redeclared in this ");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call707 = selfRequest(this, "variety", [0]);
          var opresult708 = request(string706, "++(1)", [1], call707);
          var string709 = new GraceString(" scope because it is already declared in ");
          var opresult710 = request(opresult708, "++(1)", [1], string709);
          var opresult711 = request(opresult705, "++(1)", [1], opresult710);
          setLineNumber(465);    // compilenode string
          var string712 = new GraceString("");
          if (var_description === undefined) raiseUninitializedVariable("description");
          var opresult713 = request(string712, "++(1)", [1], var_description);
          var string714 = new GraceString(" scope");
          var opresult715 = request(opresult713, "++(1)", [1], string714);
          if (var_more === undefined) raiseUninitializedVariable("more");
          var opresult716 = request(opresult715, "++(1)", [1], var_more);
          var string717 = new GraceString(". Use a different name.");
          var opresult718 = request(opresult716, "++(1)", [1], string717);
          var opresult719 = request(opresult711, "++(1)", [1], opresult718);
          setLineNumber(466);    // compilenode member
          // call case 6: other requests
          var call720 = request(var_ident, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call700 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult719, call720);
          if662 = call700;
        }
        return if662;
      };    // end of method checkShadowing(_)asA(_)
      this.methods["checkShadowing(1)asA(1)"] = func630;
      func630.methodName = "checkShadowing(1)asA(1)";
      func630.paramCounts = [1, 1];
      func630.paramNames = ["ident", "newKind"];
      func630.definitionLine = 425;
      func630.definitionModule = "identifierresolution";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 32;
          m.definitionModule = "identifierresolution";
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
      var obj18_init = function() {    // init of object on line 32
        setLineNumber(34);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_map === undefined) raiseUninitializedVariable("map");
        var call722 = request(var_map, "dictionary", [0]);
        var call721 = request(call722, "empty", [0]);
        this.data.elements = call721;
        setLineNumber(35);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_map === undefined) raiseUninitializedVariable("map");
        var call724 = request(var_map, "dictionary", [0]);
        var call723 = request(call724, "empty", [0]);
        this.data.elementScopes = call723;
        setLineNumber(36);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_map === undefined) raiseUninitializedVariable("map");
        var call726 = request(var_map, "dictionary", [0]);
        var call725 = request(call726, "empty", [0]);
        this.data.elementLines = call725;
        setLineNumber(37);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_map === undefined) raiseUninitializedVariable("map");
        var call728 = request(var_map, "dictionary", [0]);
        var call727 = request(call728, "empty", [0]);
        this.data.elementTokens = call727;
        this.data.parent = var_parent__39__;
        this.data.hasParent = GraceTrue;
        this.data.variety = var_variety__39__;
        setLineNumber(41);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call729 = request(var_ast, "nullNode", [0]);
        this.data.node = call729;
        if (var_undiscovered === undefined) raiseUninitializedVariable("undiscovered");
        this.data.inheritedNames = var_undiscovered;
        setLineNumber(43);    // compilenode op
        if (var_stSerial === undefined) raiseUninitializedVariable("stSerial");
        var sum730 = request(var_stSerial, "+(1)", [1], new GraceNum(1));
        var_stSerial = sum730;
        this.data.serialNumber = var_stSerial;
        setLineNumber(45);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call732 = selfRequest(this, "serialNumber", [0]);
        var call731 = request(call732, "hash", [0]);
        this.data.hash = call731;
        var if733 = GraceDone;
        setLineNumber(47);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call734 = selfRequest(this, "isObjectScope", [0]);
        if (Grace_isTrue(call734)) {
          setLineNumber(48);    // compilenode string
          var string736 = new GraceString("self");
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call737 = request(var_k, "selfDef", [0]);
          // call case 4: self request with 2 args and 0 typeArgs 
          var call735 = selfRequest(this, "addName(1)asA(1)", [1, 1], string736, call737);
          setLineNumber(49);    // compilenode string
          var string739 = new GraceString("self");
          // call case 4: self request with 2 args and 0 typeArgs 
          var call738 = selfRequest(this, "at(1)putScope(1)", [1, 1], string739, this);
          if733 = call738;
        }
      };
      return obj18_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj18_init = obj18_build.call(inheritingObject, null, var_parent__39__, var_variety__39__, this, aliases, exclusions);
    return obj18_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method newScopeIn(_)kind(_)$build(_,_,_)
  this.methods["newScopeIn(1)kind(1)$build(3)"] = func17;
  func17.methodName = "newScopeIn(1)kind(1)$build(3)";
  func17.paramCounts = [1, 1];
  func17.paramNames = ["parent'", "variety'"];
  func17.definitionLine = 32;
  func17.definitionModule = "identifierresolution";
  var func740 = function(argcv, var_node, var_anc) {    // method transformIdentifier(_)ancestors(_), line 506
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("transformIdentifier(_)ancestors(_)", 0, numArgs - 2);
    }
    setLineNumber(524);    // compilenode member
    // call case 6: other requests
    var call741 = request(var_node, "nameString", [0]);
    var var_nm = call741;
    setLineNumber(525);    // compilenode member
    // call case 6: other requests
    var call742 = request(var_node, "scope", [0]);
    var var_nodeScope = call742;
    setLineNumber(526);    // compilenode string
    var string743 = new GraceString(":=(1)");
    var opresult744 = request(var_nm, "++(1)", [1], string743);
    var var_nmGets = opresult744;
    setLineNumber(527);    // compilenode member
    // call case 6: other requests
    var call746 = request(var_node, "line", [0]);
    // call case 6: other requests
    var call747 = request(var_node, "linePos", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call745 = request(var_util, "setPosition(2)", [2], call746, call747);
    var if748 = GraceDone;
    setLineNumber(528);    // compilenode member
    // call case 6: other requests
    var call749 = request(var_node, "isAssigned", [0]);
    if (Grace_isTrue(call749)) {
      var if750 = GraceDone;
      setLineNumber(529);    // compilenode call
      if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
      // call case 6: other requests
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      var call751 = request(var_nodeScope, "hasDefinitionInNest(1)", [1], var_nmGets);
      if (Grace_isTrue(call751)) {
        var if752 = GraceDone;
        setLineNumber(530);    // compilenode call
        if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
        // call case 6: other requests
        if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
        var call753 = request(var_nodeScope, "kindInNest(1)", [1], var_nmGets);
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call754 = request(var_k, "methdec", [0]);
        var opresult755 = request(call753, "==(1)", [1], call754);
        if (Grace_isTrue(opresult755)) {
          setLineNumber(531);    // compilenode return
          return var_node;
        }
        if750 = if752;
      }
      if748 = if750;
    }
    setLineNumber(535);    // compilenode block
    var block757 = new GraceBlock(this, 535, 0);
    block757.guard = jsTrue;
    block757.real = function block757() {
      setLineNumber(536);    // compilenode call
      // call case 2: outer request
      var call758 = selfRequest(importedModules["identifierresolution"], "reportUndeclaredIdentifier(1)", [1], var_node);
      return call758;
    };
    let applyMeth757 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth757.methodName = "apply";
    applyMeth757.paramCounts = [0];
    applyMeth757.paramNames = [];
    applyMeth757.definitionLine = 535;
    applyMeth757.definitionModule = "identifierresolution";
    block757.methods["apply"] = applyMeth757;
    // call case 6: other requests
    var call756 = request(var_nodeScope, "thatDefines(1)ifNone(1)", [1, 1], var_nm, block757);
    var var_definingScope = call756;
    setLineNumber(538);    // compilenode call
    // call case 6: other requests
    var call759 = request(var_definingScope, "kind(1)", [1], var_nm);
    var var_nodeKind = call759;
    var if760 = GraceDone;
    setLineNumber(539);    // compilenode member
    // call case 6: other requests
    var call761 = request(var_node, "isAssigned", [0]);
    if (Grace_isTrue(call761)) {
      var if762 = GraceDone;
      setLineNumber(540);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      var call764 = request(var_nodeKind, "isAssignable", [0]);
      var call763 = request(call764, "not", [0]);
      if (Grace_isTrue(call763)) {
        setLineNumber(541);    // compilenode call
        if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
        // call case 2: outer request
        var call765 = selfRequest(importedModules["identifierresolution"], "reportAssignmentTo(1)declaredInScope(1)", [1, 1], var_node, var_definingScope);
        if762 = call765;
      }
      if760 = if762;
    }
    var if766 = GraceDone;
    setLineNumber(544);    // compilenode string
    var string767 = new GraceString("outer");
    var opresult768 = request(var_nm, "==(1)", [1], string767);
    if (Grace_isTrue(opresult768)) {
      setLineNumber(545);    // compilenode call
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      var call774 = request(var_nodeScope, "enclosingObjectScope", [0]);
      var call773 = request(call774, "node", [0]);
      var array772 = new GraceSequence([call773]);
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call771 = request(var_ast, "outerNode(1)", [1], array772);
      var call770 = request(call771, "setPositionFrom(1)", [1], var_node);
      var call769 = request(call770, "setScope(1)", [1], var_nodeScope);
      return call769;
    }
    var if775 = GraceDone;
    setLineNumber(548);    // compilenode string
    var string776 = new GraceString("self");
    var opresult777 = request(var_nm, "==(1)", [1], string776);
    if (Grace_isTrue(opresult777)) {
      setLineNumber(549);    // compilenode return
      return var_node;
    }
    setLineNumber(551);    // compilenode call
    // call case 2: outer request
    var call778 = selfRequest(importedModules["identifierresolution"], "checkForAmbiguityOf(1)definedIn(1)asA(1)", [1, 1, 1], var_node, var_definingScope, var_nodeKind);
    setLineNumber(552);    // compilenode member
    // call case 6: other requests
    var call779 = request(var_definingScope, "variety", [0]);
    var var_v = call779;
    var if780 = GraceDone;
    setLineNumber(553);    // compilenode string
    var string781 = new GraceString("built-in");
    var opresult782 = request(var_v, "==(1)", [1], string781);
    if (Grace_isTrue(opresult782)) {
      return var_node;
    }
    var if783 = GraceDone;
    setLineNumber(554);    // compilenode string
    var string784 = new GraceString("dialect");
    var opresult785 = request(var_v, "==(1)", [1], string784);
    if (Grace_isTrue(opresult785)) {
      setLineNumber(555);    // compilenode string
      var string787 = new GraceString("prelude");
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call788 = request(var_ast, "identifierNode", [0]);
      var call786 = request(call788, "new(2)scope(1)", [2, 1], string787, GraceFalse, var_nodeScope);
      var var_p = call786;
      setLineNumber(557);    // compilenode member
      // call case 6: other requests
      var call790 = request(var_node, "generics", [0]);
      // call case 6: other requests
      setLineNumber(556);    // compilenode member
      // call case 6: other requests
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      if (var_p === undefined) raiseUninitializedVariable("p");
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call793 = request(var_ast, "memberNode", [0]);
      var call792 = request(call793, "new(2)scope(1)", [2, 1], var_nm, var_p, var_nodeScope);
      var call791 = request(call792, "onSelf", [0]);
      var call789 = request(call791, "withGenericArgs(1)", [1], call790);
      return call789;
    }
    var if794 = GraceDone;
    setLineNumber(559);    // compilenode member
    // call case 6: other requests
    var call795 = request(var_nodeKind, "isParameter", [0]);
    if (Grace_isTrue(call795)) {
      return var_node;
    }
    var if796 = GraceDone;
    setLineNumber(561);    // compilenode op
    if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
    var opresult797 = request(var_definingScope, "==(1)", [1], var_moduleScope);
    if (Grace_isTrue(opresult797)) {
      var if798 = GraceDone;
      setLineNumber(562);    // compilenode op
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call799 = request(var_k, "defdec", [0]);
      var opresult800 = request(var_nodeKind, "==(1)", [1], call799);
      if (Grace_isTrue(opresult800)) {
        return var_node;
      }
      var if801 = GraceDone;
      setLineNumber(563);    // compilenode op
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call802 = request(var_k, "vardec", [0]);
      var opresult803 = request(var_nodeKind, "==(1)", [1], call802);
      if (Grace_isTrue(opresult803)) {
        return var_node;
      }
      if796 = if801;
    }
    var if804 = GraceDone;
    setLineNumber(565);    // compilenode member
    // call case 6: other requests
    var call805 = request(var_nodeScope, "enclosingObjectScope", [0]);
    var opresult806 = request(var_definingScope, "==(1)", [1], call805);
    if (Grace_isTrue(opresult806)) {
      setLineNumber(568);    // compilenode member
      // call case 6: other requests
      var call808 = request(var_node, "generics", [0]);
      // call case 6: other requests
      setLineNumber(566);    // compilenode member
      // call case 6: other requests
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      setLineNumber(567);    // compilenode string
      var string812 = new GraceString("self");
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call813 = request(var_ast, "identifierNode", [0]);
      var call811 = request(call813, "new(2)scope(1)", [2, 1], string812, GraceFalse, var_nodeScope);
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      // call case 6: other requests
      setLineNumber(566);    // compilenode member
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call814 = request(var_ast, "memberNode", [0]);
      var call810 = request(call814, "new(2)scope(1)", [2, 1], var_nm, call811, var_nodeScope);
      var call809 = request(call810, "onSelf", [0]);
      var call807 = request(call809, "withGenericArgs(1)", [1], call808);
      return call807;
    }
    var if815 = GraceDone;
    setLineNumber(570);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call817 = request(var_nodeScope, "isObjectScope", [0]);
    var call816 = request(call817, "not", [0]);
    setLineNumber(571);    // compilenode block
    var block818 = new GraceBlock(this, 571, 0);
    block818.guard = jsTrue;
    block818.real = function block818() {
      setLineNumber(571);    // compilenode call
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      // call case 6: other requests
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      var call819 = request(var_nodeScope, "isInSameObjectAs(1)", [1], var_definingScope);
      return call819;
    };
    let applyMeth818 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth818.methodName = "apply";
    applyMeth818.paramCounts = [0];
    applyMeth818.paramNames = [];
    applyMeth818.definitionLine = 571;
    applyMeth818.definitionModule = "identifierresolution";
    block818.methods["apply"] = applyMeth818;
    var opresult820 = request(call816, "&&(1)", [1], block818);
    if (Grace_isTrue(opresult820)) {
      var if821 = GraceDone;
      setLineNumber(572);    // compilenode op
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call822 = request(var_k, "methdec", [0]);
      var opresult823 = request(var_nodeKind, "==(1)", [1], call822);
      if (Grace_isTrue(opresult823)) {
        return var_node;
      }
      var if824 = GraceDone;
      setLineNumber(573);    // compilenode op
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call825 = request(var_k, "defdec", [0]);
      var opresult826 = request(var_nodeKind, "==(1)", [1], call825);
      if (Grace_isTrue(opresult826)) {
        return var_node;
      }
      var if827 = GraceDone;
      setLineNumber(574);    // compilenode op
      if (var_nodeKind === undefined) raiseUninitializedVariable("nodeKind");
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call828 = request(var_k, "vardec", [0]);
      var opresult829 = request(var_nodeKind, "==(1)", [1], call828);
      if (Grace_isTrue(opresult829)) {
        return var_node;
      }
      if815 = if827;
    }
    var if830 = GraceDone;
    setLineNumber(576);    // compilenode string
    var string831 = new GraceString("method");
    var opresult832 = request(var_v, "==(1)", [1], string831);
    if (Grace_isTrue(opresult832)) {
      return var_node;
    }
    var if833 = GraceDone;
    setLineNumber(582);    // compilenode string
    var string834 = new GraceString("block");
    var opresult835 = request(var_v, "==(1)", [1], string834);
    if (Grace_isTrue(opresult835)) {
      return var_node;
    }
    setLineNumber(583);    // compilenode call
    // call case 6: other requests
    var call836 = request(var_nodeScope, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_nm, var_node);
    return call836;
  };    // end of method transformIdentifier(_)ancestors(_)
  this.methods["transformIdentifier(1)ancestors(1)"] = func740;
  func740.methodName = "transformIdentifier(1)ancestors(1)";
  func740.paramCounts = [1, 1];
  func740.paramNames = ["node", "anc"];
  func740.definitionLine = 506;
  func740.definitionModule = "identifierresolution";
  var func837 = function(argcv, var_node, var_definingScope, var_kind) {    // method checkForAmbiguityOf(_)definedIn(_)asA(_), line 585
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("checkForAmbiguityOf(_)definedIn(_)asA(_)", 0, numArgs - 3);
    }
    setLineNumber(594);    // compilenode member
    // call case 6: other requests
    var call838 = request(var_node, "scope", [0]);
    var var_currentScope = call838;
    var if839 = GraceDone;
    setLineNumber(595);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call841 = request(var_kind, "fromParent", [0]);
    var call840 = request(call841, "not", [0]);
    if (Grace_isTrue(call840)) {
      return var_done;
    }
    setLineNumber(596);    // compilenode member
    // call case 6: other requests
    var call842 = request(var_node, "nameString", [0]);
    var var_name = call842;
    setLineNumber(597);    // compilenode block
    var block844 = new GraceBlock(this, 597, 0);
    block844.guard = jsTrue;
    block844.real = function block844() {
      setLineNumber(598);    // compilenode return
      throw new ReturnException(var_done, returnTarget);
    };
    let applyMeth844 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth844.methodName = "apply";
    applyMeth844.paramCounts = [0];
    applyMeth844.paramNames = [];
    applyMeth844.definitionLine = 597;
    applyMeth844.definitionModule = "identifierresolution";
    block844.methods["apply"] = applyMeth844;
    // call case 6: other requests
    setLineNumber(597);    // compilenode member
    // call case 6: other requests
    var call845 = request(var_definingScope, "parent", [0]);
    var call843 = request(call845, "thatDefines(1)ifNone(1)", [1, 1], var_name, block844);
    var var_conflictingScope = call843;
    setLineNumber(600);    // compilenode call
    // call case 6: other requests
    var call846 = request(var_conflictingScope, "kind(1)", [1], var_name);
    var var_conflictingKind = call846;
    var if847 = GraceDone;
    setLineNumber(601);    // compilenode member
    // call case 6: other requests
    var call848 = request(var_conflictingKind, "fromParent", [0]);
    if (Grace_isTrue(call848)) {
      setLineNumber(602);    // compilenode return
      return var_done;
    }
    setLineNumber(605);    // compilenode string
    var string849 = new GraceString("");
    var var_more = string849;
    var if850 = GraceDone;
    setLineNumber(606);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    var call852 = request(var_conflictingScope, "elementLines", [0]);
    var call851 = request(call852, "containsKey(1)", [1], var_name);
    if (Grace_isTrue(call851)) {
      setLineNumber(607);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 6: other requests
      // call case 6: other requests
      if (var_conflictingScope === undefined) raiseUninitializedVariable("conflictingScope");
      var call854 = request(var_conflictingScope, "elementLines", [0]);
      var call853 = request(call854, "at(1)", [1], var_name);
      var var_earlierDef = call853;
      var if855 = GraceDone;
      setLineNumber(608);    // compilenode op
      if (var_earlierDef === undefined) raiseUninitializedVariable("earlierDef");
      var opresult856 = request(var_earlierDef, "\u2260(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult856)) {
        setLineNumber(609);    // compilenode string
        var string857 = new GraceString(" at line ");
        if (var_earlierDef === undefined) raiseUninitializedVariable("earlierDef");
        var opresult858 = request(string857, "++(1)", [1], var_earlierDef);
        var string859 = new GraceString("");
        var opresult860 = request(opresult858, "++(1)", [1], string859);
        var_more = opresult860;
        if855 = GraceDone;
      }
      if850 = if855;
    }
    setLineNumber(612);    // compilenode string
    var string862 = new GraceString("currentScope = ");
    var opresult863 = request(string862, "++(1)", [1], var_currentScope);
    var string864 = new GraceString("\n defines ");
    var opresult865 = request(opresult863, "++(1)", [1], string864);
    var opresult866 = request(opresult865, "++(1)", [1], var_name);
    var string867 = new GraceString(" as ");
    var opresult868 = request(opresult866, "++(1)", [1], string867);
    var opresult869 = request(opresult868, "++(1)", [1], var_kind);
    var string870 = new GraceString("\nconflictingScope = ");
    var opresult871 = request(opresult869, "++(1)", [1], string870);
    var opresult872 = request(opresult871, "++(1)", [1], var_conflictingScope);
    var string873 = new GraceString("\n defines ");
    var opresult874 = request(opresult872, "++(1)", [1], string873);
    var opresult875 = request(opresult874, "++(1)", [1], var_name);
    var string876 = new GraceString(" as ");
    var opresult877 = request(opresult875, "++(1)", [1], string876);
    var opresult878 = request(opresult877, "++(1)", [1], var_conflictingKind);
    var string879 = new GraceString("");
    var opresult880 = request(opresult878, "++(1)", [1], string879);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call861 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult880);
    setLineNumber(613);    // compilenode string
    var string882 = new GraceString("");
    // call case 6: other requests
    var call883 = request(var_node, "canonicalName", [0]);
    var opresult884 = request(string882, "++(1)", [1], call883);
    var string885 = new GraceString(" is both ");
    var opresult886 = request(opresult884, "++(1)", [1], string885);
    var opresult887 = request(opresult886, "++(1)", [1], var_kind);
    var string888 = new GraceString(", and defined in an enclosing scope");
    var opresult889 = request(opresult887, "++(1)", [1], string888);
    var opresult890 = request(opresult889, "++(1)", [1], var_more);
    var string891 = new GraceString(".");
    var opresult892 = request(opresult890, "++(1)", [1], string891);
    setLineNumber(614);    // compilenode member
    // call case 6: other requests
    var call893 = request(var_node, "range", [0]);
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call881 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult892, call893);
    return call881;
  };    // end of method checkForAmbiguityOf(_)definedIn(_)asA(_)
  this.methods["checkForAmbiguityOf(1)definedIn(1)asA(1)"] = func837;
  func837.methodName = "checkForAmbiguityOf(1)definedIn(1)asA(1)";
  func837.paramCounts = [1, 1, 1];
  func837.paramNames = ["node", "definingScope", "kind"];
  func837.definitionLine = 585;
  func837.definitionModule = "identifierresolution";
  var func894 = function(argcv, var_node) {    // method checkForReservedName(_), line 616
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("checkForReservedName(_)", 0, numArgs - 1);
    }
    setLineNumber(617);    // compilenode member
    // call case 6: other requests
    var call895 = request(var_node, "nameString", [0]);
    var var_ns = call895;
    var if896 = GraceDone;
    setLineNumber(618);    // compilenode call
    // call case 6: other requests
    if (var_reserved === undefined) raiseUninitializedVariable("reserved");
    var call897 = request(var_reserved, "contains(1)", [1], var_ns);
    if (Grace_isTrue(call897)) {
      setLineNumber(619);    // compilenode string
      var string899 = new GraceString("");
      if (var_ns === undefined) raiseUninitializedVariable("ns");
      var opresult900 = request(string899, "++(1)", [1], var_ns);
      var string901 = new GraceString(" is a reserved name and cannot be re-declared.");
      var opresult902 = request(opresult900, "++(1)", [1], string901);
      setLineNumber(620);    // compilenode member
      // call case 6: other requests
      var call903 = request(var_node, "range", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call898 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult902, call903);
      if896 = call898;
    }
    return if896;
  };    // end of method checkForReservedName(_)
  this.methods["checkForReservedName(1)"] = func894;
  func894.methodName = "checkForReservedName(1)";
  func894.paramCounts = [1];
  func894.paramNames = ["node"];
  func894.definitionLine = 616;
  func894.definitionModule = "identifierresolution";
  var func904 = function(argcv, var_node) {    // method suggestionsForIdentifier(_), line 624
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("suggestionsForIdentifier(_)", 0, numArgs - 1);
    }
    setLineNumber(625);    // compilenode member
    // call case 6: other requests
    var call905 = request(var_node, "nameString", [0]);
    var var_nm = call905;
    setLineNumber(626);    // compilenode member
    // call case 6: other requests
    // call case 2: outer request
    var call907 = selfRequest(var_prelude, "set", [0]);
    var call906 = request(call907, "empty", [0]);
    var var_suggestions = call906;
    setLineNumber(627);    // compilenode member
    // call case 6: other requests
    var call908 = request(var_node, "scope", [0]);
    var var_nodeScope = call908;
    setLineNumber(628);    // compilenode num
    var var_thresh = new GraceNum(4);
    setLineNumber(629);    // compilenode block
    var block910 = new GraceBlock(this, 629, 1);
    block910.guard = jsTrue;
    block910.real = function block910(var_s) {
      setLineNumber(630);    // compilenode block
      var block912 = new GraceBlock(this, 630, 1);
      block912.guard = jsTrue;
      block912.real = function block912(var_v) {
        var if913 = GraceDone;
        setLineNumber(631);    // compilenode call
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call914 = request(var_errormessages, "name(1)mightBeIntendedToBe(1)", [1, 1], var_nm, var_v);
        if (Grace_isTrue(call914)) {
          setLineNumber(632);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call916 = request(var_errormessages, "suggestion", [0]);
          var call915 = request(call916, "new", [0]);
          var var_sug = call915;
          setLineNumber(633);    // compilenode member
          // call case 6: other requests
          var call918 = request(var_node, "linePos", [0]);
          // call case 6: other requests
          var call919 = request(var_node, "linePos", [0]);
          setLineNumber(634);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call921 = request(var_node, "value", [0]);
          var call920 = request(call921, "size", [0]);
          var sum922 = request(call919, "+(1)", [1], call920);
          var diff923 = request(sum922, "-(1)", [1], new GraceNum(1));
          // call case 2: outer request
          var call924 = selfRequest(importedModules["identifierresolution"], "canonical(1)", [1], var_v);
          // call case 6: other requests
          var call925 = request(var_node, "line", [0]);
          // call case 6: other requests
          if (var_sug === undefined) raiseUninitializedVariable("sug");
          var call917 = request(var_sug, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], call918, diff923, call924, call925);
          setLineNumber(635);    // compilenode call
          if (var_sug === undefined) raiseUninitializedVariable("sug");
          // call case 6: other requests
          if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
          var call926 = request(var_suggestions, "add(1)", [1], var_sug);
          var if927 = GraceDone;
          setLineNumber(636);    // compilenode member
          // call case 6: other requests
          if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
          var call928 = request(var_suggestions, "size", [0]);
          if (var_thresh === undefined) raiseUninitializedVariable("thresh");
          var opresult929 = request(call928, "\u2265(1)", [1], var_thresh);
          if (Grace_isTrue(opresult929)) {
            if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
            throw new ReturnException(var_suggestions, returnTarget);
          }
          if913 = if927;
        }
        return if913;
      };
      let applyMeth912 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth912.methodName = "apply(1)";
      applyMeth912.paramCounts = [1];
      applyMeth912.paramNames = ["v"];
      applyMeth912.definitionLine = 630;
      applyMeth912.definitionModule = "identifierresolution";
      block912.methods["apply(1)"] = applyMeth912;
      let matchesMeth912 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth912.methodName = "matches(1)";
      matchesMeth912.paramCounts = [1];
      matchesMeth912.paramNames = ["v"];
      matchesMeth912.definitionLine = 630;
      matchesMeth912.definitionModule = "identifierresolution";
      block912.methods["matches(1)"] = matchesMeth912;
      // call case 6: other requests
      setLineNumber(630);    // compilenode member
      // call case 6: other requests
      var call930 = request(var_s, "elements", [0]);
      var call911 = request(call930, "keysDo(1)", [1], block912);
      return call911;
    };
    let applyMeth910 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth910.methodName = "apply(1)";
    applyMeth910.paramCounts = [1];
    applyMeth910.paramNames = ["s"];
    applyMeth910.definitionLine = 629;
    applyMeth910.definitionModule = "identifierresolution";
    block910.methods["apply(1)"] = applyMeth910;
    let matchesMeth910 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth910.methodName = "matches(1)";
    matchesMeth910.paramCounts = [1];
    matchesMeth910.paramNames = ["s"];
    matchesMeth910.definitionLine = 629;
    matchesMeth910.definitionModule = "identifierresolution";
    block910.methods["matches(1)"] = matchesMeth910;
    // call case 6: other requests
    var call909 = request(var_nodeScope, "withSurroundingScopesDo(1)", [1], block910);
    setLineNumber(640);    // compilenode block
    var block932 = new GraceBlock(this, 640, 1);
    block932.guard = jsTrue;
    block932.real = function block932(var_s) {
      var if933 = GraceDone;
      setLineNumber(641);    // compilenode call
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      if (var_nodeScope === undefined) raiseUninitializedVariable("nodeScope");
      var call936 = request(var_nodeScope, "elementScopes", [0]);
      var call935 = request(call936, "at(1)", [1], var_s);
      var call934 = request(call935, "contains(1)", [1], var_nm);
      if (Grace_isTrue(call934)) {
        setLineNumber(642);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call938 = request(var_errormessages, "suggestion", [0]);
        var call937 = request(call938, "new", [0]);
        var var_sug = call937;
        setLineNumber(643);    // compilenode string
        var string940 = new GraceString("");
        var opresult941 = request(string940, "++(1)", [1], var_s);
        var string942 = new GraceString(".");
        var opresult943 = request(opresult941, "++(1)", [1], string942);
        // call case 6: other requests
        var call944 = request(var_node, "linePos", [0]);
        // call case 6: other requests
        var call945 = request(var_node, "line", [0]);
        // call case 6: other requests
        if (var_sug === undefined) raiseUninitializedVariable("sug");
        var call939 = request(var_sug, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], opresult943, call944, call945);
        setLineNumber(644);    // compilenode call
        if (var_sug === undefined) raiseUninitializedVariable("sug");
        // call case 6: other requests
        if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
        var call946 = request(var_suggestions, "add(1)", [1], var_sug);
        var if947 = GraceDone;
        setLineNumber(645);    // compilenode member
        // call case 6: other requests
        if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
        var call948 = request(var_suggestions, "size", [0]);
        if (var_thresh === undefined) raiseUninitializedVariable("thresh");
        var opresult949 = request(call948, "\u2265(1)", [1], var_thresh);
        if (Grace_isTrue(opresult949)) {
          if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
          throw new ReturnException(var_suggestions, returnTarget);
        }
        if933 = if947;
      }
      return if933;
    };
    let applyMeth932 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth932.methodName = "apply(1)";
    applyMeth932.paramCounts = [1];
    applyMeth932.paramNames = ["s"];
    applyMeth932.definitionLine = 640;
    applyMeth932.definitionModule = "identifierresolution";
    block932.methods["apply(1)"] = applyMeth932;
    let matchesMeth932 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth932.methodName = "matches(1)";
    matchesMeth932.paramCounts = [1];
    matchesMeth932.paramNames = ["s"];
    matchesMeth932.definitionLine = 640;
    matchesMeth932.definitionModule = "identifierresolution";
    block932.methods["matches(1)"] = matchesMeth932;
    // call case 6: other requests
    setLineNumber(640);    // compilenode member
    // call case 6: other requests
    var call950 = request(var_nodeScope, "elementScopes", [0]);
    var call931 = request(call950, "keysDo(1)", [1], block932);
    return var_suggestions;
  };    // end of method suggestionsForIdentifier(_)
  this.methods["suggestionsForIdentifier(1)"] = func904;
  func904.methodName = "suggestionsForIdentifier(1)";
  func904.paramCounts = [1];
  func904.paramNames = ["node"];
  func904.definitionLine = 624;
  func904.definitionModule = "identifierresolution";
  var func951 = function(argcv, var_numericName) {    // method canonical(_), line 651
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("canonical(_)", 0, numArgs - 1);
    }
    setLineNumber(652);    // compilenode string
    var string953 = new GraceString("(");
    // call case 6: other requests
    var call952 = request(var_numericName, "split(1)", [1], string953);
    var var_parts = call952;
    setLineNumber(653);    // compilenode member
    // call case 6: other requests
    var call954 = request(var_parts, "first", [0]);
    var var_output = call954;
    setLineNumber(654);    // compilenode member
    // call case 6: other requests
    var call956 = request(var_parts, "size", [0]);
    var opresult957 = request(new GraceNum(2), "..(1)", [1], call956);
    var block958 = new GraceBlock(this, 654, 1);
    block958.guard = jsTrue;
    block958.real = function block958(var_i) {
      setLineNumber(655);    // compilenode string
      var string960 = new GraceString(")");
      // call case 6: other requests
      // call case 6: other requests
      if (var_parts === undefined) raiseUninitializedVariable("parts");
      var call961 = request(var_parts, "at(1)", [1], var_i);
      var call959 = request(call961, "split(1)", [1], string960);
      var var_part__95__split = call959;
      setLineNumber(656);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_part__95__split === undefined) raiseUninitializedVariable("part_split");
      var call963 = request(var_part__95__split, "first", [0]);
      var call962 = request(call963, "asNumber", [0]);
      var var_n = call962;
      var if964 = GraceDone;
      setLineNumber(657);    // compilenode member
      // call case 6: other requests
      if (var_n === undefined) raiseUninitializedVariable("n");
      var call965 = request(var_n, "isNaN", [0]);
      if (Grace_isTrue(call965)) {
        setLineNumber(658);    // compilenode op
        if (var_output === undefined) raiseUninitializedVariable("output");
        // call case 6: other requests
        if (var_part__95__split === undefined) raiseUninitializedVariable("part_split");
        var call966 = request(var_part__95__split, "first", [0]);
        var opresult967 = request(var_output, "++(1)", [1], call966);
        var_output = opresult967;
        if964 = GraceDone;
      } else {
        setLineNumber(660);    // compilenode op
        if (var_output === undefined) raiseUninitializedVariable("output");
        var string968 = new GraceString("(");
        var opresult969 = request(var_output, "++(1)", [1], string968);
        var string970 = new GraceString("_,");
        if (var_n === undefined) raiseUninitializedVariable("n");
        var diff971 = request(var_n, "-(1)", [1], new GraceNum(1));
        var prod972 = request(string970, "*(1)", [1], diff971);
        var opresult973 = request(opresult969, "++(1)", [1], prod972);
        var string974 = new GraceString("_)");
        var opresult975 = request(opresult973, "++(1)", [1], string974);
        var_output = opresult975;
        var if976 = GraceDone;
        setLineNumber(661);    // compilenode member
        // call case 6: other requests
        if (var_part__95__split === undefined) raiseUninitializedVariable("part_split");
        var call977 = request(var_part__95__split, "size", [0]);
        var opresult978 = request(call977, ">(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult978)) {
          setLineNumber(662);    // compilenode op
          if (var_output === undefined) raiseUninitializedVariable("output");
          // call case 6: other requests
          if (var_part__95__split === undefined) raiseUninitializedVariable("part_split");
          var call979 = request(var_part__95__split, "second", [0]);
          var opresult980 = request(var_output, "++(1)", [1], call979);
          var_output = opresult980;
          if976 = GraceDone;
        }
        if964 = if976;
      }
      return if964;
    };
    let applyMeth958 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth958.methodName = "apply(1)";
    applyMeth958.paramCounts = [1];
    applyMeth958.paramNames = ["i"];
    applyMeth958.definitionLine = 654;
    applyMeth958.definitionModule = "identifierresolution";
    block958.methods["apply(1)"] = applyMeth958;
    let matchesMeth958 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth958.methodName = "matches(1)";
    matchesMeth958.paramCounts = [1];
    matchesMeth958.paramNames = ["i"];
    matchesMeth958.definitionLine = 654;
    matchesMeth958.definitionModule = "identifierresolution";
    block958.methods["matches(1)"] = matchesMeth958;
    // call case 2: outer request
    var call955 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult957, block958);
    setLineNumber(666);    // compilenode return
    return var_output;
  };    // end of method canonical(_)
  this.methods["canonical(1)"] = func951;
  func951.methodName = "canonical(1)";
  func951.paramCounts = [1];
  func951.paramNames = ["numericName"];
  func951.definitionLine = 651;
  func951.definitionModule = "identifierresolution";
  var func981 = function(argcv, var_node) {    // method reportUndeclaredIdentifier(_), line 669
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("reportUndeclaredIdentifier(_)", 0, numArgs - 1);
    }
    setLineNumber(670);    // compilenode call
    // call case 2: outer request
    var call982 = selfRequest(importedModules["identifierresolution"], "suggestionsForIdentifier(1)", [1], var_node);
    var var_suggestions = call982;
    setLineNumber(671);    // compilenode member
    // call case 6: other requests
    var call983 = request(var_node, "canonicalName", [0]);
    var var_cn = call983;
    var if984 = GraceDone;
    setLineNumber(672);    // compilenode string
    var string986 = new GraceString(")");
    // call case 6: other requests
    var call985 = request(var_cn, "endsWith(1)", [1], string986);
    if (Grace_isTrue(call985)) {
      var string987 = new GraceString("");
      if984 = string987;
    } else {
      var string988 = new GraceString(" variable or");
      if984 = string988;
    }
    var var_varBit = if984;
    setLineNumber(673);    // compilenode string
    var string990 = new GraceString("unknown");
    var opresult991 = request(string990, "++(1)", [1], var_varBit);
    var string992 = new GraceString(" method '");
    var opresult993 = request(opresult991, "++(1)", [1], string992);
    var opresult994 = request(opresult993, "++(1)", [1], var_cn);
    var string995 = new GraceString("'; ");
    var opresult996 = request(opresult994, "++(1)", [1], string995);
    setLineNumber(674);    // compilenode string
    var string997 = new GraceString("this may be a spelling mistake, or an attempt to access a");
    var opresult998 = request(string997, "++(1)", [1], var_varBit);
    var string999 = new GraceString(" method in another scope");
    var opresult1000 = request(opresult998, "++(1)", [1], string999);
    var opresult1001 = request(opresult996, "++(1)", [1], opresult1000);
    setLineNumber(675);    // compilenode member
    // call case 6: other requests
    var call1002 = request(var_node, "range", [0]);
    // call case 6: other requests
    if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
    var call989 = request(var_errormessages, "syntaxError(1)atRange(1)withSuggestions(1)", [1, 1, 1], opresult1001, call1002, var_suggestions);
    return call989;
  };    // end of method reportUndeclaredIdentifier(_)
  this.methods["reportUndeclaredIdentifier(1)"] = func981;
  func981.methodName = "reportUndeclaredIdentifier(1)";
  func981.paramCounts = [1];
  func981.paramNames = ["node"];
  func981.definitionLine = 669;
  func981.definitionModule = "identifierresolution";
  var func1003 = function(argcv, var_node, var_scp) {    // method reportAssignmentTo(_)declaredInScope(_), line 678
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("reportAssignmentTo(_)declaredInScope(_)", 0, numArgs - 2);
    }
    setLineNumber(681);    // compilenode member
    // call case 6: other requests
    var call1004 = request(var_node, "nameString", [0]);
    var var_name = call1004;
    setLineNumber(682);    // compilenode call
    // call case 6: other requests
    var call1005 = request(var_scp, "kind(1)", [1], var_name);
    var var_kind = call1005;
    setLineNumber(683);    // compilenode string
    var string1006 = new GraceString("");
    var var_more = string1006;
    setLineNumber(684);    // compilenode array
    var array1008 = new GraceSequence([]);
    // call case 2: outer request
    var call1007 = selfRequest(var_prelude, "list(1)", [1], array1008);
    var var_suggestions = call1007;
    var if1009 = GraceDone;
    setLineNumber(685);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    var call1011 = request(var_scp, "elementLines", [0]);
    var call1010 = request(call1011, "containsKey(1)", [1], var_name);
    if (Grace_isTrue(call1010)) {
      setLineNumber(686);    // compilenode string
      var string1012 = new GraceString(" on line ");
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 6: other requests
      // call case 6: other requests
      var call1014 = request(var_scp, "elementLines", [0]);
      var call1013 = request(call1014, "at(1)", [1], var_name);
      var opresult1015 = request(string1012, "++(1)", [1], call1013);
      var string1016 = new GraceString("");
      var opresult1017 = request(opresult1015, "++(1)", [1], string1016);
      var_more = opresult1017;
      if1009 = GraceDone;
    }
    var if1018 = GraceDone;
    setLineNumber(688);    // compilenode member
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1019 = request(var_k, "selfDef", [0]);
    var opresult1020 = request(var_kind, "==(1)", [1], call1019);
    if (Grace_isTrue(opresult1020)) {
      setLineNumber(689);    // compilenode string
      var string1022 = new GraceString("'");
      if (var_name === undefined) raiseUninitializedVariable("name");
      var opresult1023 = request(string1022, "++(1)", [1], var_name);
      var string1024 = new GraceString("' cannot be re-bound; ");
      var opresult1025 = request(opresult1023, "++(1)", [1], string1024);
      setLineNumber(690);    // compilenode string
      var string1026 = new GraceString("it always refers to the current object.");
      var opresult1027 = request(opresult1025, "++(1)", [1], string1026);
      setLineNumber(691);    // compilenode member
      // call case 6: other requests
      var call1028 = request(var_node, "range", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call1021 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1027, call1028);
      if1018 = call1021;
    } else {
      var if1029 = GraceDone;
      setLineNumber(692);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 6: other requests
      if (var_reserved === undefined) raiseUninitializedVariable("reserved");
      var call1030 = request(var_reserved, "contains(1)", [1], var_name);
      if (Grace_isTrue(call1030)) {
        setLineNumber(693);    // compilenode string
        var string1032 = new GraceString("'");
        if (var_name === undefined) raiseUninitializedVariable("name");
        var opresult1033 = request(string1032, "++(1)", [1], var_name);
        var string1034 = new GraceString("' is a reserved name and ");
        var opresult1035 = request(opresult1033, "++(1)", [1], string1034);
        setLineNumber(694);    // compilenode string
        var string1036 = new GraceString("cannot be re-bound.");
        var opresult1037 = request(opresult1035, "++(1)", [1], string1036);
        setLineNumber(695);    // compilenode member
        // call case 6: other requests
        var call1038 = request(var_node, "range", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call1031 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1037, call1038);
        if1029 = call1031;
      } else {
        var if1039 = GraceDone;
        setLineNumber(696);    // compilenode op
        if (var_kind === undefined) raiseUninitializedVariable("kind");
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call1040 = request(var_k, "defdec", [0]);
        var opresult1041 = request(var_kind, "==(1)", [1], call1040);
        if (Grace_isTrue(opresult1041)) {
          var if1042 = GraceDone;
          setLineNumber(697);    // compilenode call
          if (var_name === undefined) raiseUninitializedVariable("name");
          // call case 6: other requests
          // call case 6: other requests
          var call1044 = request(var_scp, "elementTokens", [0]);
          var call1043 = request(call1044, "containsKey(1)", [1], var_name);
          if (Grace_isTrue(call1043)) {
            setLineNumber(698);    // compilenode call
            if (var_name === undefined) raiseUninitializedVariable("name");
            // call case 6: other requests
            // call case 6: other requests
            var call1046 = request(var_scp, "elementTokens", [0]);
            var call1045 = request(call1046, "at(1)", [1], var_name);
            var var_tok = call1045;
            setLineNumber(699);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
            var call1048 = request(var_errormessages, "suggestion", [0]);
            var call1047 = request(call1048, "new", [0]);
            var var_sugg = call1047;
            var if1049 = GraceDone;
            setLineNumber(700);    // compilenode member
            // call case 6: other requests
            if (var_tok === undefined) raiseUninitializedVariable("tok");
            var call1050 = request(var_tok, "value", [0]);
            var string1051 = new GraceString("def");
            var opresult1052 = request(call1050, "==(1)", [1], string1051);
            if (Grace_isTrue(opresult1052)) {
              setLineNumber(701);    // compilenode vardec
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var var_eq = var_tok;
              setLineNumber(702);    // compilenode block
              var block1054 = new GraceBlock(this, 702, 0);
              block1054.guard = jsTrue;
              block1054.real = function block1054() {
                setLineNumber(702);    // compilenode member
                // call case 6: other requests
                if (var_eq === undefined) raiseUninitializedVariable("eq");
                var call1055 = request(var_eq, "kind", [0]);
                var string1056 = new GraceString("op");
                var opresult1057 = request(call1055, "\u2260(1)", [1], string1056);
                // call case 6: other requests
                if (var_eq === undefined) raiseUninitializedVariable("eq");
                var call1058 = request(var_eq, "value", [0]);
                var string1059 = new GraceString("=");
                var opresult1060 = request(call1058, "\u2260(1)", [1], string1059);
                var opresult1061 = request(opresult1057, "||(1)", [1], opresult1060);
                return opresult1061;
              };
              let applyMeth1054 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth1054.methodName = "apply";
              applyMeth1054.paramCounts = [0];
              applyMeth1054.paramNames = [];
              applyMeth1054.definitionLine = 702;
              applyMeth1054.definitionModule = "identifierresolution";
              block1054.methods["apply"] = applyMeth1054;
              var block1062 = new GraceBlock(this, 702, 0);
              block1062.guard = jsTrue;
              block1062.real = function block1062() {
                setLineNumber(703);    // compilenode member
                // call case 6: other requests
                if (var_eq === undefined) raiseUninitializedVariable("eq");
                var call1063 = request(var_eq, "next", [0]);
                var_eq = call1063;
                return GraceDone;
              };
              let applyMeth1062 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth1062.methodName = "apply";
              applyMeth1062.paramCounts = [0];
              applyMeth1062.paramNames = [];
              applyMeth1062.definitionLine = 702;
              applyMeth1062.definitionModule = "identifierresolution";
              block1062.methods["apply"] = applyMeth1062;
              // call case 2: outer request
              var call1053 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block1054, block1062);
              setLineNumber(705);    // compilenode call
              if (var_eq === undefined) raiseUninitializedVariable("eq");
              var string1065 = new GraceString(":=");
              // call case 6: other requests
              if (var_sugg === undefined) raiseUninitializedVariable("sugg");
              var call1064 = request(var_sugg, "replaceToken(1)with(1)", [1, 1], var_eq, string1065);
              setLineNumber(706);    // compilenode call
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var string1067 = new GraceString("var");
              // call case 6: other requests
              if (var_sugg === undefined) raiseUninitializedVariable("sugg");
              var call1066 = request(var_sugg, "replaceToken(1)with(1)", [1, 1], var_tok, string1067);
              setLineNumber(707);    // compilenode call
              if (var_sugg === undefined) raiseUninitializedVariable("sugg");
              // call case 6: other requests
              if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
              var call1068 = request(var_suggestions, "push(1)", [1], var_sugg);
              if1049 = call1068;
            } else {
              setLineNumber(709);    // compilenode string
              var string1070 = new GraceString("'");
              if (var_name === undefined) raiseUninitializedVariable("name");
              var opresult1071 = request(string1070, "++(1)", [1], var_name);
              var string1072 = new GraceString("' cannot be changed ");
              var opresult1073 = request(opresult1071, "++(1)", [1], string1072);
              setLineNumber(710);    // compilenode string
              var string1074 = new GraceString("because it was declared as a '");
              // call case 6: other requests
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var call1075 = request(var_tok, "value", [0]);
              var opresult1076 = request(string1074, "++(1)", [1], call1075);
              var string1077 = new GraceString("'");
              var opresult1078 = request(opresult1076, "++(1)", [1], string1077);
              if (var_more === undefined) raiseUninitializedVariable("more");
              var opresult1079 = request(opresult1078, "++(1)", [1], var_more);
              var string1080 = new GraceString(".");
              var opresult1081 = request(opresult1079, "++(1)", [1], string1080);
              var opresult1082 = request(opresult1073, "++(1)", [1], opresult1081);
              setLineNumber(711);    // compilenode member
              // call case 6: other requests
              var call1083 = request(var_node, "range", [0]);
              // call case 6: other requests
              if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
              var call1069 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1082, call1083);
              if1049 = call1069;
            }
            if1042 = if1049;
          }
          setLineNumber(714);    // compilenode string
          var string1085 = new GraceString("'");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1086 = request(string1085, "++(1)", [1], var_name);
          var string1087 = new GraceString("' cannot be changed ");
          var opresult1088 = request(opresult1086, "++(1)", [1], string1087);
          setLineNumber(715);    // compilenode string
          var string1089 = new GraceString("because it was declared with 'def'");
          if (var_more === undefined) raiseUninitializedVariable("more");
          var opresult1090 = request(string1089, "++(1)", [1], var_more);
          var string1091 = new GraceString(". ");
          var opresult1092 = request(opresult1090, "++(1)", [1], string1091);
          var opresult1093 = request(opresult1088, "++(1)", [1], opresult1092);
          setLineNumber(716);    // compilenode string
          var string1094 = new GraceString("To make it a variable, use 'var' in the declaration");
          var opresult1095 = request(opresult1093, "++(1)", [1], string1094);
          setLineNumber(717);    // compilenode member
          // call case 6: other requests
          var call1096 = request(var_node, "range", [0]);
          if (var_suggestions === undefined) raiseUninitializedVariable("suggestions");
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1084 = request(var_errormessages, "syntaxError(1)atRange(1)withSuggestions(1)", [1, 1, 1], opresult1095, call1096, var_suggestions);
          if1039 = call1084;
        } else {
          var if1097 = GraceDone;
          setLineNumber(719);    // compilenode op
          if (var_kind === undefined) raiseUninitializedVariable("kind");
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call1098 = request(var_k, "typedec", [0]);
          var opresult1099 = request(var_kind, "==(1)", [1], call1098);
          if (Grace_isTrue(opresult1099)) {
            setLineNumber(720);    // compilenode string
            var string1101 = new GraceString("'");
            if (var_name === undefined) raiseUninitializedVariable("name");
            var opresult1102 = request(string1101, "++(1)", [1], var_name);
            var string1103 = new GraceString("' cannot be re-bound ");
            var opresult1104 = request(opresult1102, "++(1)", [1], string1103);
            setLineNumber(721);    // compilenode string
            var string1105 = new GraceString("because it is declared as a type");
            if (var_more === undefined) raiseUninitializedVariable("more");
            var opresult1106 = request(string1105, "++(1)", [1], var_more);
            var string1107 = new GraceString(".");
            var opresult1108 = request(opresult1106, "++(1)", [1], string1107);
            var opresult1109 = request(opresult1104, "++(1)", [1], opresult1108);
            setLineNumber(722);    // compilenode member
            // call case 6: other requests
            var call1110 = request(var_node, "range", [0]);
            // call case 6: other requests
            if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
            var call1100 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1109, call1110);
            if1097 = call1100;
          } else {
            var if1111 = GraceDone;
            setLineNumber(723);    // compilenode member
            // call case 6: other requests
            if (var_kind === undefined) raiseUninitializedVariable("kind");
            var call1112 = request(var_kind, "isParameter", [0]);
            if (Grace_isTrue(call1112)) {
              setLineNumber(724);    // compilenode string
              var string1114 = new GraceString("'");
              if (var_name === undefined) raiseUninitializedVariable("name");
              var opresult1115 = request(string1114, "++(1)", [1], var_name);
              var string1116 = new GraceString("' cannot be re-bound ");
              var opresult1117 = request(opresult1115, "++(1)", [1], string1116);
              setLineNumber(725);    // compilenode string
              var string1118 = new GraceString("because it is declared as a parameter");
              if (var_more === undefined) raiseUninitializedVariable("more");
              var opresult1119 = request(string1118, "++(1)", [1], var_more);
              var string1120 = new GraceString(".");
              var opresult1121 = request(opresult1119, "++(1)", [1], string1120);
              var opresult1122 = request(opresult1117, "++(1)", [1], opresult1121);
              setLineNumber(726);    // compilenode member
              // call case 6: other requests
              var call1123 = request(var_node, "range", [0]);
              // call case 6: other requests
              if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
              var call1113 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1122, call1123);
              if1111 = call1113;
            } else {
              var if1124 = GraceDone;
              setLineNumber(727);    // compilenode op
              if (var_kind === undefined) raiseUninitializedVariable("kind");
              // call case 6: other requests
              if (var_k === undefined) raiseUninitializedVariable("k");
              var call1125 = request(var_k, "methdec", [0]);
              var opresult1126 = request(var_kind, "==(1)", [1], call1125);
              if (Grace_isTrue(opresult1126)) {
                setLineNumber(728);    // compilenode string
                var string1128 = new GraceString("'");
                if (var_name === undefined) raiseUninitializedVariable("name");
                var opresult1129 = request(string1128, "++(1)", [1], var_name);
                var string1130 = new GraceString("' cannot be re-bound ");
                var opresult1131 = request(opresult1129, "++(1)", [1], string1130);
                setLineNumber(729);    // compilenode string
                var string1132 = new GraceString("because it is declared as a method");
                if (var_more === undefined) raiseUninitializedVariable("more");
                var opresult1133 = request(string1132, "++(1)", [1], var_more);
                var string1134 = new GraceString(".");
                var opresult1135 = request(opresult1133, "++(1)", [1], string1134);
                var opresult1136 = request(opresult1131, "++(1)", [1], opresult1135);
                setLineNumber(730);    // compilenode member
                // call case 6: other requests
                var call1137 = request(var_node, "range", [0]);
                // call case 6: other requests
                if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
                var call1127 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1136, call1137);
                if1124 = call1127;
              }
              if1111 = if1124;
            }
            if1097 = if1111;
          }
          if1039 = if1097;
        }
        if1029 = if1039;
      }
      if1018 = if1029;
    }
    return if1018;
  };    // end of method reportAssignmentTo(_)declaredInScope(_)
  this.methods["reportAssignmentTo(1)declaredInScope(1)"] = func1003;
  func1003.methodName = "reportAssignmentTo(1)declaredInScope(1)";
  func1003.paramCounts = [1, 1];
  func1003.paramNames = ["node", "scp"];
  func1003.definitionLine = 678;
  func1003.definitionModule = "identifierresolution";
  var func1138 = function(argcv, var_topNode) {    // method resolveIdentifiers(_), line 734
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("resolveIdentifiers(_)", 0, numArgs - 1);
    }
    setLineNumber(740);    // compilenode block
    var block1140 = new GraceBlock(this, 740, 2);
    block1140.guard = jsTrue;
    block1140.real = function block1140(var_node, var_anc) {
      var if1141 = GraceDone;
      setLineNumber(741);    // compilenode member
      // call case 6: other requests
      var call1142 = request(var_node, "isAppliedOccurrence", [0]);
      if (Grace_isTrue(call1142)) {
        setLineNumber(742);    // compilenode call
        // call case 2: outer request
        var call1143 = selfRequest(importedModules["identifierresolution"], "transformIdentifier(1)ancestors(1)", [1, 1], var_node, var_anc);
        if1141 = call1143;
      } else {
        var if1144 = GraceDone;
        setLineNumber(743);    // compilenode member
        // call case 6: other requests
        var call1145 = request(var_node, "isCall", [0]);
        if (Grace_isTrue(call1145)) {
          setLineNumber(744);    // compilenode call
          // call case 2: outer request
          var call1146 = selfRequest(importedModules["identifierresolution"], "transformCall(1)", [1], var_node);
          if1144 = call1146;
        } else {
          var if1147 = GraceDone;
          setLineNumber(745);    // compilenode member
          // call case 6: other requests
          var call1148 = request(var_node, "isInherits", [0]);
          if (Grace_isTrue(call1148)) {
            setLineNumber(746);    // compilenode call
            // call case 2: outer request
            var call1149 = selfRequest(importedModules["identifierresolution"], "transformInherits(1)ancestors(1)", [1, 1], var_node, var_anc);
            if1147 = call1149;
          } else {
            var if1150 = GraceDone;
            setLineNumber(747);    // compilenode member
            // call case 6: other requests
            var call1151 = request(var_node, "isBind", [0]);
            if (Grace_isTrue(call1151)) {
              setLineNumber(748);    // compilenode call
              // call case 2: outer request
              var call1152 = selfRequest(importedModules["identifierresolution"], "transformBind(1)ancestors(1)", [1, 1], var_node, var_anc);
              if1150 = call1152;
            } else {
              var if1153 = GraceDone;
              setLineNumber(749);    // compilenode member
              // call case 6: other requests
              var call1154 = request(var_node, "isTypeDec", [0]);
              if (Grace_isTrue(call1154)) {
                if1153 = var_node;
              } else {
                if1153 = var_node;
              }
              if1150 = if1153;
            }
            if1147 = if1150;
          }
          if1144 = if1147;
        }
        if1141 = if1144;
      }
      return if1141;
    };
    let applyMeth1140 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1140.methodName = "apply(2)";
    applyMeth1140.paramCounts = [2];
    applyMeth1140.paramNames = ["node", "anc"];
    applyMeth1140.definitionLine = 740;
    applyMeth1140.definitionModule = "identifierresolution";
    block1140.methods["apply(2)"] = applyMeth1140;
    let matchesMeth1140 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1140.methodName = "matches(2)";
    matchesMeth1140.paramCounts = [2];
    matchesMeth1140.paramNames = ["node", "anc"];
    matchesMeth1140.definitionLine = 740;
    matchesMeth1140.definitionModule = "identifierresolution";
    block1140.methods["matches(2)"] = matchesMeth1140;
    setLineNumber(754);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1156 = request(var_ast, "ancestorChain", [0]);
    var call1155 = request(call1156, "empty", [0]);
    // call case 6: other requests
    var call1139 = request(var_topNode, "map(1)ancestors(1)", [1, 1], block1140, call1155);
    var var_newModule = call1139;
    setLineNumber(755);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1157 = selfRequest(this, "addAssignmentMethodsToSymbolTable", [0]);
    return var_newModule;
  };    // end of method resolveIdentifiers(_)
  this.methods["resolveIdentifiers(1)"] = func1138;
  func1138.methodName = "resolveIdentifiers(1)";
  func1138.paramCounts = [1];
  func1138.paramNames = ["topNode"];
  func1138.definitionLine = 734;
  func1138.definitionModule = "identifierresolution";
  var func1158 = function(argcv) {    // method addAssignmentMethodsToSymbolTable, line 759
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("addAssignmentMethodsToSymbolTable", 0, numArgs - 0);
    }
    setLineNumber(767);    // compilenode block
    var block1160 = new GraceBlock(this, 767, 1);
    block1160.guard = jsTrue;
    block1160.real = function block1160(var_decl) {
      setLineNumber(768);    // compilenode member
      // call case 6: other requests
      var call1161 = request(var_decl, "scope", [0]);
      var var_dScope = call1161;
      setLineNumber(769);    // compilenode member
      // call case 6: other requests
      var call1162 = request(var_decl, "nameString", [0]);
      var string1163 = new GraceString(":=(_)");
      var opresult1164 = request(call1162, "++(1)", [1], string1163);
      var var_nameGets = opresult1164;
      var if1165 = GraceDone;
      setLineNumber(770);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_dScope === undefined) raiseUninitializedVariable("dScope");
      var call1167 = request(var_dScope, "isModuleScope", [0]);
      var call1166 = request(call1167, "not", [0]);
      // call case 6: other requests
      var call1168 = request(var_decl, "isPublic", [0]);
      var opresult1169 = request(call1166, "||(1)", [1], call1168);
      if (Grace_isTrue(opresult1169)) {
        setLineNumber(771);    // compilenode member
        // call case 6: other requests
        var call1171 = request(var_decl, "line", [0]);
        // call case 6: other requests
        var call1172 = request(var_decl, "linePos", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call1170 = request(var_util, "setPosition(2)", [2], call1171, call1172);
        setLineNumber(772);    // compilenode call
        if (var_nameGets === undefined) raiseUninitializedVariable("nameGets");
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call1174 = request(var_k, "methdec", [0]);
        // call case 6: other requests
        if (var_dScope === undefined) raiseUninitializedVariable("dScope");
        var call1173 = request(var_dScope, "addName(1)asA(1)", [1, 1], var_nameGets, call1174);
        if1165 = call1173;
      }
      return if1165;
    };
    let applyMeth1160 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1160.methodName = "apply(1)";
    applyMeth1160.paramCounts = [1];
    applyMeth1160.paramNames = ["decl"];
    applyMeth1160.definitionLine = 767;
    applyMeth1160.definitionModule = "identifierresolution";
    block1160.methods["apply(1)"] = applyMeth1160;
    let matchesMeth1160 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1160.methodName = "matches(1)";
    matchesMeth1160.paramCounts = [1];
    matchesMeth1160.paramNames = ["decl"];
    matchesMeth1160.definitionLine = 767;
    matchesMeth1160.definitionModule = "identifierresolution";
    block1160.methods["matches(1)"] = matchesMeth1160;
    // call case 6: other requests
    if (var_varFieldDecls === undefined) raiseUninitializedVariable("varFieldDecls");
    var call1159 = request(var_varFieldDecls, "do(1)", [1], block1160);
    return call1159;
  };    // end of method addAssignmentMethodsToSymbolTable
  this.methods["addAssignmentMethodsToSymbolTable"] = func1158;
  func1158.methodName = "addAssignmentMethodsToSymbolTable";
  func1158.paramCounts = [0];
  func1158.paramNames = [];
  func1158.definitionLine = 759;
  func1158.definitionModule = "identifierresolution";
  var func1175 = function(argcv, var_gct, var_importedModuleScope) {    // method processGCT(_,_), line 777
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("processGCT(_,_)", 0, numArgs - 2);
    }
    setLineNumber(778);    // compilenode block
    var block1177 = new GraceBlock(this, 778, 1);
    block1177.guard = jsTrue;
    block1177.real = function block1177(var_c) {
      setLineNumber(779);    // compilenode string
      var string1179 = new GraceString("constructors-of:");
      var opresult1180 = request(string1179, "++(1)", [1], var_c);
      var string1181 = new GraceString("");
      var opresult1182 = request(opresult1180, "++(1)", [1], string1181);
      // call case 6: other requests
      var call1178 = request(var_gct, "at(1)", [1], opresult1182);
      var var_constrs = call1178;
      setLineNumber(780);    // compilenode string
      var string1184 = new GraceString("class");
      // call case 2: outer request
      var call1183 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string1184);
      var var_classScope = call1183;
      setLineNumber(781);    // compilenode call
      if (var_constrs === undefined) raiseUninitializedVariable("constrs");
      var block1186 = new GraceBlock(this, 781, 1);
      block1186.guard = jsTrue;
      block1186.real = function block1186(var_constr) {
        setLineNumber(782);    // compilenode string
        var string1188 = new GraceString("object");
        // call case 2: outer request
        var call1187 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string1188);
        var var_ns = call1187;
        setLineNumber(783);    // compilenode call
        // call case 6: other requests
        if (var_classScope === undefined) raiseUninitializedVariable("classScope");
        var call1189 = request(var_classScope, "addName(1)", [1], var_constr);
        setLineNumber(784);    // compilenode call
        if (var_ns === undefined) raiseUninitializedVariable("ns");
        // call case 6: other requests
        if (var_classScope === undefined) raiseUninitializedVariable("classScope");
        var call1190 = request(var_classScope, "at(1)putScope(1)", [1, 1], var_constr, var_ns);
        setLineNumber(785);    // compilenode block
        var block1192 = new GraceBlock(this, 785, 1);
        block1192.guard = jsTrue;
        block1192.real = function block1192(var_mn) {
          setLineNumber(786);    // compilenode call
          // call case 6: other requests
          if (var_ns === undefined) raiseUninitializedVariable("ns");
          var call1193 = request(var_ns, "addName(1)", [1], var_mn);
          return call1193;
        };
        let applyMeth1192 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1192.methodName = "apply(1)";
        applyMeth1192.paramCounts = [1];
        applyMeth1192.paramNames = ["mn"];
        applyMeth1192.definitionLine = 785;
        applyMeth1192.definitionModule = "identifierresolution";
        block1192.methods["apply(1)"] = applyMeth1192;
        let matchesMeth1192 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1192.methodName = "matches(1)";
        matchesMeth1192.paramCounts = [1];
        matchesMeth1192.paramNames = ["mn"];
        matchesMeth1192.definitionLine = 785;
        matchesMeth1192.definitionModule = "identifierresolution";
        block1192.methods["matches(1)"] = matchesMeth1192;
        // call case 6: other requests
        setLineNumber(785);    // compilenode string
        var string1195 = new GraceString("methods-of:");
        var opresult1196 = request(string1195, "++(1)", [1], var_c);
        var string1197 = new GraceString(".");
        var opresult1198 = request(opresult1196, "++(1)", [1], string1197);
        var opresult1199 = request(opresult1198, "++(1)", [1], var_constr);
        var string1200 = new GraceString("");
        var opresult1201 = request(opresult1199, "++(1)", [1], string1200);
        // call case 6: other requests
        var call1194 = request(var_gct, "at(1)", [1], opresult1201);
        var call1191 = request(call1194, "do(1)", [1], block1192);
        return call1191;
      };
      let applyMeth1186 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1186.methodName = "apply(1)";
      applyMeth1186.paramCounts = [1];
      applyMeth1186.paramNames = ["constr"];
      applyMeth1186.definitionLine = 781;
      applyMeth1186.definitionModule = "identifierresolution";
      block1186.methods["apply(1)"] = applyMeth1186;
      let matchesMeth1186 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1186.methodName = "matches(1)";
      matchesMeth1186.paramCounts = [1];
      matchesMeth1186.paramNames = ["constr"];
      matchesMeth1186.definitionLine = 781;
      matchesMeth1186.definitionModule = "identifierresolution";
      block1186.methods["matches(1)"] = matchesMeth1186;
      // call case 2: outer request
      var call1185 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_constrs, block1186);
      setLineNumber(789);    // compilenode call
      // call case 6: other requests
      var call1202 = request(var_importedModuleScope, "addName(1)", [1], var_c);
      setLineNumber(790);    // compilenode call
      if (var_classScope === undefined) raiseUninitializedVariable("classScope");
      // call case 6: other requests
      var call1203 = request(var_importedModuleScope, "at(1)putScope(1)", [1, 1], var_c, var_classScope);
      return call1203;
    };
    let applyMeth1177 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1177.methodName = "apply(1)";
    applyMeth1177.paramCounts = [1];
    applyMeth1177.paramNames = ["c"];
    applyMeth1177.definitionLine = 778;
    applyMeth1177.definitionModule = "identifierresolution";
    block1177.methods["apply(1)"] = applyMeth1177;
    let matchesMeth1177 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1177.methodName = "matches(1)";
    matchesMeth1177.paramCounts = [1];
    matchesMeth1177.paramNames = ["c"];
    matchesMeth1177.definitionLine = 778;
    matchesMeth1177.definitionModule = "identifierresolution";
    block1177.methods["matches(1)"] = matchesMeth1177;
    // call case 6: other requests
    setLineNumber(778);    // compilenode string
    var string1205 = new GraceString("classes");
    var block1206 = new GraceBlock(this, 778, 0);
    block1206.guard = jsTrue;
    block1206.real = function block1206() {
      setLineNumber(778);    // compilenode member
      // call case 2: outer request
      var call1207 = selfRequest(var_prelude, "emptySequence", [0]);
      return call1207;
    };
    let applyMeth1206 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1206.methodName = "apply";
    applyMeth1206.paramCounts = [0];
    applyMeth1206.paramNames = [];
    applyMeth1206.definitionLine = 778;
    applyMeth1206.definitionModule = "identifierresolution";
    block1206.methods["apply"] = applyMeth1206;
    // call case 6: other requests
    var call1204 = request(var_gct, "at(1)ifAbsent(1)", [1, 1], string1205, block1206);
    var call1176 = request(call1204, "do(1)", [1], block1177);
    setLineNumber(792);    // compilenode block
    var block1209 = new GraceBlock(this, 792, 1);
    block1209.guard = jsTrue;
    block1209.real = function block1209(var_c) {
      setLineNumber(793);    // compilenode string
      var string1211 = new GraceString("object");
      // call case 2: outer request
      var call1210 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string1211);
      var var_objScope = call1210;
      setLineNumber(794);    // compilenode block
      var block1213 = new GraceBlock(this, 794, 1);
      block1213.guard = jsTrue;
      block1213.real = function block1213(var_mn) {
        setLineNumber(795);    // compilenode call
        // call case 6: other requests
        if (var_objScope === undefined) raiseUninitializedVariable("objScope");
        var call1214 = request(var_objScope, "addName(1)", [1], var_mn);
        return call1214;
      };
      let applyMeth1213 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1213.methodName = "apply(1)";
      applyMeth1213.paramCounts = [1];
      applyMeth1213.paramNames = ["mn"];
      applyMeth1213.definitionLine = 794;
      applyMeth1213.definitionModule = "identifierresolution";
      block1213.methods["apply(1)"] = applyMeth1213;
      let matchesMeth1213 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1213.methodName = "matches(1)";
      matchesMeth1213.paramCounts = [1];
      matchesMeth1213.paramNames = ["mn"];
      matchesMeth1213.definitionLine = 794;
      matchesMeth1213.definitionModule = "identifierresolution";
      block1213.methods["matches(1)"] = matchesMeth1213;
      // call case 6: other requests
      setLineNumber(794);    // compilenode string
      var string1216 = new GraceString("fresh:");
      var opresult1217 = request(string1216, "++(1)", [1], var_c);
      var string1218 = new GraceString("");
      var opresult1219 = request(opresult1217, "++(1)", [1], string1218);
      // call case 6: other requests
      var call1215 = request(var_gct, "at(1)", [1], opresult1219);
      var call1212 = request(call1215, "do(1)", [1], block1213);
      setLineNumber(797);    // compilenode call
      // call case 6: other requests
      var call1220 = request(var_importedModuleScope, "addName(1)", [1], var_c);
      setLineNumber(798);    // compilenode call
      if (var_objScope === undefined) raiseUninitializedVariable("objScope");
      // call case 6: other requests
      var call1221 = request(var_importedModuleScope, "at(1)putScope(1)", [1, 1], var_c, var_objScope);
      return call1221;
    };
    let applyMeth1209 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1209.methodName = "apply(1)";
    applyMeth1209.paramCounts = [1];
    applyMeth1209.paramNames = ["c"];
    applyMeth1209.definitionLine = 792;
    applyMeth1209.definitionModule = "identifierresolution";
    block1209.methods["apply(1)"] = applyMeth1209;
    let matchesMeth1209 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1209.methodName = "matches(1)";
    matchesMeth1209.paramCounts = [1];
    matchesMeth1209.paramNames = ["c"];
    matchesMeth1209.definitionLine = 792;
    matchesMeth1209.definitionModule = "identifierresolution";
    block1209.methods["matches(1)"] = matchesMeth1209;
    // call case 6: other requests
    setLineNumber(792);    // compilenode string
    var string1223 = new GraceString("fresh-methods");
    var block1224 = new GraceBlock(this, 792, 0);
    block1224.guard = jsTrue;
    block1224.real = function block1224() {
      setLineNumber(792);    // compilenode member
      // call case 2: outer request
      var call1225 = selfRequest(var_prelude, "emptySequence", [0]);
      return call1225;
    };
    let applyMeth1224 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1224.methodName = "apply";
    applyMeth1224.paramCounts = [0];
    applyMeth1224.paramNames = [];
    applyMeth1224.definitionLine = 792;
    applyMeth1224.definitionModule = "identifierresolution";
    block1224.methods["apply"] = applyMeth1224;
    // call case 6: other requests
    var call1222 = request(var_gct, "at(1)ifAbsent(1)", [1, 1], string1223, block1224);
    var call1208 = request(call1222, "do(1)", [1], block1209);
    return call1208;
  };    // end of method processGCT(_,_)
  this.methods["processGCT(2)"] = func1175;
  func1175.methodName = "processGCT(2)";
  func1175.paramCounts = [2];
  func1175.paramNames = ["gct", "importedModuleScope"];
  func1175.definitionLine = 777;
  func1175.definitionModule = "identifierresolution";
  var func1226 = function(argcv, var_moduleObject) {    // method setupContext(_), line 804
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("setupContext(_)", 0, numArgs - 1);
    }
    setLineNumber(806);    // compilenode num
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call1227 = request(var_util, "setPosition(2)", [2], new GraceNum(0), new GraceNum(0));
    setLineNumber(808);    // compilenode string
    var string1229 = new GraceString("Type");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1230 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1228 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1229, call1230);
    setLineNumber(809);    // compilenode string
    var string1232 = new GraceString("Object");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1233 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1231 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1232, call1233);
    setLineNumber(810);    // compilenode string
    var string1235 = new GraceString("Unknown");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1236 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1234 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1235, call1236);
    setLineNumber(811);    // compilenode string
    var string1238 = new GraceString("String");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1239 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1237 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1238, call1239);
    setLineNumber(812);    // compilenode string
    var string1241 = new GraceString("Number");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1242 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1240 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1241, call1242);
    setLineNumber(813);    // compilenode string
    var string1244 = new GraceString("Boolean");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1245 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1243 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1244, call1245);
    setLineNumber(814);    // compilenode string
    var string1247 = new GraceString("Done");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1248 = request(var_k, "typedec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1246 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1247, call1248);
    setLineNumber(815);    // compilenode string
    var string1250 = new GraceString("done");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1251 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1249 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1250, call1251);
    setLineNumber(816);    // compilenode string
    var string1253 = new GraceString("true");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1252 = request(var_builtInsScope, "addName(1)", [1], string1253);
    setLineNumber(817);    // compilenode string
    var string1255 = new GraceString("false");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1254 = request(var_builtInsScope, "addName(1)", [1], string1255);
    setLineNumber(818);    // compilenode string
    var string1257 = new GraceString("outer");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1258 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1256 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1257, call1258);
    setLineNumber(819);    // compilenode string
    var string1260 = new GraceString("readable");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1259 = request(var_builtInsScope, "addName(1)", [1], string1260);
    setLineNumber(820);    // compilenode string
    var string1262 = new GraceString("writable");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1261 = request(var_builtInsScope, "addName(1)", [1], string1262);
    setLineNumber(821);    // compilenode string
    var string1264 = new GraceString("public");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1263 = request(var_builtInsScope, "addName(1)", [1], string1264);
    setLineNumber(822);    // compilenode string
    var string1266 = new GraceString("confidential");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1265 = request(var_builtInsScope, "addName(1)", [1], string1266);
    setLineNumber(823);    // compilenode string
    var string1268 = new GraceString("override");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1267 = request(var_builtInsScope, "addName(1)", [1], string1268);
    setLineNumber(824);    // compilenode string
    var string1270 = new GraceString("parent");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1269 = request(var_builtInsScope, "addName(1)", [1], string1270);
    setLineNumber(825);    // compilenode string
    var string1272 = new GraceString("...");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1273 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1271 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1272, call1273);
    setLineNumber(827);    // compilenode string
    var string1275 = new GraceString("asString");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1274 = request(var_preludeScope, "addName(1)", [1], string1275);
    setLineNumber(828);    // compilenode string
    var string1277 = new GraceString("::(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1276 = request(var_preludeScope, "addName(1)", [1], string1277);
    setLineNumber(829);    // compilenode string
    var string1279 = new GraceString("++(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1278 = request(var_preludeScope, "addName(1)", [1], string1279);
    setLineNumber(830);    // compilenode string
    var string1281 = new GraceString("==(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1280 = request(var_preludeScope, "addName(1)", [1], string1281);
    setLineNumber(831);    // compilenode string
    var string1283 = new GraceString("\u2260(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1282 = request(var_preludeScope, "addName(1)", [1], string1283);
    setLineNumber(832);    // compilenode string
    var string1285 = new GraceString("hash");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1284 = request(var_preludeScope, "addName(1)", [1], string1285);
    setLineNumber(833);    // compilenode string
    var string1287 = new GraceString("for(1)do(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1286 = request(var_preludeScope, "addName(1)", [1], string1287);
    setLineNumber(834);    // compilenode string
    var string1289 = new GraceString("while(1)do(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1288 = request(var_preludeScope, "addName(1)", [1], string1289);
    setLineNumber(835);    // compilenode string
    var string1291 = new GraceString("print(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1290 = request(var_preludeScope, "addName(1)", [1], string1291);
    setLineNumber(836);    // compilenode string
    var string1293 = new GraceString("native(1)code(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1292 = request(var_preludeScope, "addName(1)", [1], string1293);
    setLineNumber(837);    // compilenode string
    var string1295 = new GraceString("native(1)header(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1294 = request(var_preludeScope, "addName(1)", [1], string1295);
    setLineNumber(838);    // compilenode string
    var string1297 = new GraceString("Exception");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1298 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1296 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1297, call1298);
    setLineNumber(839);    // compilenode string
    var string1300 = new GraceString("RuntimeError");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1301 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1299 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1300, call1301);
    setLineNumber(840);    // compilenode string
    var string1303 = new GraceString("NoSuchMethod");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1304 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1302 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1303, call1304);
    setLineNumber(841);    // compilenode string
    var string1306 = new GraceString("ProgrammingError");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1307 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1305 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1306, call1307);
    setLineNumber(842);    // compilenode string
    var string1309 = new GraceString("TypeError");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1310 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1308 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1309, call1310);
    setLineNumber(843);    // compilenode string
    var string1312 = new GraceString("ResourceException");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1313 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1311 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1312, call1313);
    setLineNumber(844);    // compilenode string
    var string1315 = new GraceString("EnvironmentException");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1316 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1314 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1315, call1316);
    setLineNumber(845);    // compilenode string
    var string1318 = new GraceString("\u03c0");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1319 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1317 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1318, call1319);
    setLineNumber(846);    // compilenode string
    var string1321 = new GraceString("infinity");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1322 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1320 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], string1321, call1322);
    setLineNumber(847);    // compilenode string
    var string1324 = new GraceString("minigrace");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1323 = request(var_preludeScope, "addName(1)", [1], string1324);
    setLineNumber(848);    // compilenode string
    var string1326 = new GraceString("_methods");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1325 = request(var_preludeScope, "addName(1)", [1], string1326);
    setLineNumber(849);    // compilenode string
    var string1328 = new GraceString("primitiveArray");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1327 = request(var_preludeScope, "addName(1)", [1], string1328);
    setLineNumber(850);    // compilenode string
    var string1330 = new GraceString("become(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1329 = request(var_preludeScope, "addName(1)", [1], string1330);
    setLineNumber(851);    // compilenode string
    var string1332 = new GraceString("unbecome(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1331 = request(var_preludeScope, "addName(1)", [1], string1332);
    setLineNumber(852);    // compilenode string
    var string1334 = new GraceString("clone(1)");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1333 = request(var_preludeScope, "addName(1)", [1], string1334);
    setLineNumber(853);    // compilenode string
    var string1336 = new GraceString("inBrowser");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1335 = request(var_preludeScope, "addName(1)", [1], string1336);
    setLineNumber(854);    // compilenode string
    var string1338 = new GraceString("engine");
    // call case 6: other requests
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    var call1337 = request(var_preludeScope, "addName(1)", [1], string1338);
    setLineNumber(856);    // compilenode string
    var string1340 = new GraceString("isMe(1)");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1341 = request(var_k, "graceObjectMethod", [0]);
    // call case 6: other requests
    if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
    var call1339 = request(var_graceObjectScope, "addName(1)asA(1)", [1, 1], string1340, call1341);
    setLineNumber(857);    // compilenode string
    var string1343 = new GraceString("myIdentityHash");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1344 = request(var_k, "graceObjectMethod", [0]);
    // call case 6: other requests
    if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
    var call1342 = request(var_graceObjectScope, "addName(1)asA(1)", [1, 1], string1343, call1344);
    setLineNumber(858);    // compilenode string
    var string1346 = new GraceString("asString");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1347 = request(var_k, "graceObjectMethod", [0]);
    // call case 6: other requests
    if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
    var call1345 = request(var_graceObjectScope, "addName(1)asA(1)", [1, 1], string1346, call1347);
    setLineNumber(859);    // compilenode string
    var string1349 = new GraceString("asDebugString");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1350 = request(var_k, "graceObjectMethod", [0]);
    // call case 6: other requests
    if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
    var call1348 = request(var_graceObjectScope, "addName(1)asA(1)", [1, 1], string1349, call1350);
    setLineNumber(861);    // compilenode string
    var string1352 = new GraceString("prefix!");
    // call case 6: other requests
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    var call1351 = request(var_booleanScope, "addName(1)", [1], string1352);
    setLineNumber(862);    // compilenode string
    var string1354 = new GraceString("&&(1)");
    // call case 6: other requests
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    var call1353 = request(var_booleanScope, "addName(1)", [1], string1354);
    setLineNumber(863);    // compilenode string
    var string1356 = new GraceString("||(1)");
    // call case 6: other requests
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    var call1355 = request(var_booleanScope, "addName(1)", [1], string1356);
    setLineNumber(864);    // compilenode string
    var string1358 = new GraceString("not");
    // call case 6: other requests
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    var call1357 = request(var_booleanScope, "addName(1)", [1], string1358);
    setLineNumber(866);    // compilenode string
    var string1360 = new GraceString("graceObject");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1359 = request(var_builtInsScope, "addName(1)", [1], string1360);
    setLineNumber(867);    // compilenode string
    var string1362 = new GraceString("graceObject");
    if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1361 = request(var_builtInsScope, "at(1)putScope(1)", [1, 1], string1362, var_graceObjectScope);
    setLineNumber(868);    // compilenode string
    var string1364 = new GraceString("prelude");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1365 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1363 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1364, call1365);
    setLineNumber(869);    // compilenode string
    var string1367 = new GraceString("prelude");
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1366 = request(var_builtInsScope, "at(1)putScope(1)", [1, 1], string1367, var_preludeScope);
    setLineNumber(870);    // compilenode string
    var string1369 = new GraceString("_prelude");
    // call case 6: other requests
    if (var_k === undefined) raiseUninitializedVariable("k");
    var call1370 = request(var_k, "defdec", [0]);
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1368 = request(var_builtInsScope, "addName(1)asA(1)", [1, 1], string1369, call1370);
    setLineNumber(871);    // compilenode string
    var string1372 = new GraceString("_prelude");
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1371 = request(var_builtInsScope, "at(1)putScope(1)", [1, 1], string1372, var_preludeScope);
    setLineNumber(872);    // compilenode string
    var string1374 = new GraceString("true");
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1373 = request(var_builtInsScope, "at(1)putScope(1)", [1, 1], string1374, var_booleanScope);
    setLineNumber(873);    // compilenode string
    var string1376 = new GraceString("false");
    if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
    // call case 6: other requests
    if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
    var call1375 = request(var_builtInsScope, "at(1)putScope(1)", [1, 1], string1376, var_booleanScope);
    setLineNumber(875);    // compilenode member
    // call case 6: other requests
    var call1377 = request(var_moduleObject, "theDialect", [0]);
    var var_dialectNode = call1377;
    setLineNumber(876);    // compilenode member
    // call case 6: other requests
    var call1378 = request(var_dialectNode, "value", [0]);
    var var_dialectName = call1378;
    assertTypeOrMsg(var_dialectName, var_String, "value of def dialectName", "String");
    var if1379 = GraceDone;
    setLineNumber(877);    // compilenode string
    var string1380 = new GraceString("none");
    var opresult1381 = request(var_dialectName, "\u2260(1)", [1], string1380);
    if (Grace_isTrue(opresult1381)) {
      setLineNumber(878);    // compilenode call
      if (var_dialectNode === undefined) raiseUninitializedVariable("dialectNode");
      // call case 6: other requests
      if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
      var call1382 = request(var_xmodule, "checkExternalModule(1)", [1], var_dialectNode);
      setLineNumber(879);    // compilenode call
      if (var_dialectName === undefined) raiseUninitializedVariable("dialectName");
      // call case 6: other requests
      if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
      var call1383 = request(var_xmodule, "parseGCT(1)", [1], var_dialectName);
      var var_gctDict = call1383;
      setLineNumber(880);    // compilenode string
      var string1386 = new GraceString("types");
      var block1387 = new GraceBlock(this, 880, 0);
      block1387.guard = jsTrue;
      block1387.real = function block1387() {
        setLineNumber(880);    // compilenode member
        // call case 6: other requests
        // call case 2: outer request
        var call1389 = selfRequest(var_prelude, "sequence", [0]);
        var call1388 = request(call1389, "empty", [0]);
        return call1388;
      };
      let applyMeth1387 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth1387.methodName = "apply";
      applyMeth1387.paramCounts = [0];
      applyMeth1387.paramNames = [];
      applyMeth1387.definitionLine = 880;
      applyMeth1387.definitionModule = "identifierresolution";
      block1387.methods["apply"] = applyMeth1387;
      // call case 6: other requests
      if (var_gctDict === undefined) raiseUninitializedVariable("gctDict");
      var call1385 = request(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string1386, block1387);
      // call case 6: other requests
      // call case 2: outer request
      var call1390 = selfRequest(var_prelude, "set", [0]);
      var call1384 = request(call1390, "withAll(1)", [1], call1385);
      var var_typeDecls = call1384;
      setLineNumber(881);    // compilenode block
      var block1392 = new GraceBlock(this, 881, 1);
      block1392.guard = jsTrue;
      block1392.real = function block1392(var_mn) {
        var if1394 = GraceDone;
        setLineNumber(882);    // compilenode call
        // call case 6: other requests
        if (var_typeDecls === undefined) raiseUninitializedVariable("typeDecls");
        var call1395 = request(var_typeDecls, "contains(1)", [1], var_mn);
        if (Grace_isTrue(call1395)) {
          setLineNumber(883);    // compilenode member
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call1396 = request(var_k, "typedec", [0]);
          if1394 = call1396;
        } else {
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call1397 = request(var_k, "methdec", [0]);
          if1394 = call1397;
        }
        // call case 6: other requests
        if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
        var call1393 = request(var_preludeScope, "addName(1)asA(1)", [1, 1], var_mn, if1394);
        return call1393;
      };
      let applyMeth1392 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1392.methodName = "apply(1)";
      applyMeth1392.paramCounts = [1];
      applyMeth1392.paramNames = ["mn"];
      applyMeth1392.definitionLine = 881;
      applyMeth1392.definitionModule = "identifierresolution";
      block1392.methods["apply(1)"] = applyMeth1392;
      let matchesMeth1392 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1392.methodName = "matches(1)";
      matchesMeth1392.paramCounts = [1];
      matchesMeth1392.paramNames = ["mn"];
      matchesMeth1392.definitionLine = 881;
      matchesMeth1392.definitionModule = "identifierresolution";
      block1392.methods["matches(1)"] = matchesMeth1392;
      // call case 6: other requests
      setLineNumber(881);    // compilenode string
      var string1399 = new GraceString("public");
      var block1400 = new GraceBlock(this, 881, 0);
      block1400.guard = jsTrue;
      block1400.real = function block1400() {
        setLineNumber(881);    // compilenode member
        // call case 2: outer request
        var call1401 = selfRequest(var_prelude, "emptySequence", [0]);
        return call1401;
      };
      let applyMeth1400 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth1400.methodName = "apply";
      applyMeth1400.paramCounts = [0];
      applyMeth1400.paramNames = [];
      applyMeth1400.definitionLine = 881;
      applyMeth1400.definitionModule = "identifierresolution";
      block1400.methods["apply"] = applyMeth1400;
      // call case 6: other requests
      if (var_gctDict === undefined) raiseUninitializedVariable("gctDict");
      var call1398 = request(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string1399, block1400);
      var call1391 = request(call1398, "do(1)", [1], block1392);
      setLineNumber(885);    // compilenode call
      if (var_gctDict === undefined) raiseUninitializedVariable("gctDict");
      if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
      // call case 2: outer request
      var call1402 = selfRequest(importedModules["identifierresolution"], "processGCT(2)", [2], var_gctDict, var_preludeScope);
      if1379 = call1402;
    }
    var if1403 = GraceDone;
    setLineNumber(887);    // compilenode string
    var string1404 = new GraceString("beginningStudent");
    var opresult1405 = request(var_dialectName, "==(1)", [1], string1404);
    if (Grace_isTrue(opresult1405)) {
      setLineNumber(888);    // compilenode bind
      var_isInBeginningStudentDialect = GraceTrue;
      if1403 = GraceDone;
    }
    return if1403;
  };    // end of method setupContext(_)
  this.methods["setupContext(1)"] = func1226;
  func1226.methodName = "setupContext(1)";
  func1226.paramCounts = [1];
  func1226.paramNames = ["moduleObject"];
  func1226.definitionLine = 804;
  func1226.definitionModule = "identifierresolution";
  var func1406 = function(argcv, var_traitObjNode) {    // method checkTraitBody(_), line 892
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("checkTraitBody(_)", 0, numArgs - 1);
    }
    setLineNumber(893);    // compilenode block
    var block1408 = new GraceBlock(this, 893, 1);
    block1408.guard = jsTrue;
    block1408.real = function block1408(var_node) {
      var if1409 = GraceDone;
      setLineNumber(894);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1411 = request(var_node, "isLegalInTrait", [0]);
      var call1410 = request(call1411, "not", [0]);
      if (Grace_isTrue(call1410)) {
        setLineNumber(895);    // compilenode member
        // call case 6: other requests
        var call1412 = request(var_node, "statementName", [0]);
        var var_badThing = call1412;
        setLineNumber(896);    // compilenode call
        if (var_badThing === undefined) raiseUninitializedVariable("badThing");
        // call case 2: outer request
        var call1413 = selfRequest(importedModules["identifierresolution"], "articleFor(1)", [1], var_badThing);
        var var_article = call1413;
        setLineNumber(897);    // compilenode string
        var string1415 = new GraceString("");
        if (var_article === undefined) raiseUninitializedVariable("article");
        var opresult1416 = request(string1415, "++(1)", [1], var_article);
        var string1417 = new GraceString(" ");
        var opresult1418 = request(opresult1416, "++(1)", [1], string1417);
        if (var_badThing === undefined) raiseUninitializedVariable("badThing");
        var opresult1419 = request(opresult1418, "++(1)", [1], var_badThing);
        var string1420 = new GraceString(" cannot appear in ");
        var opresult1421 = request(opresult1419, "++(1)", [1], string1420);
        setLineNumber(898);    // compilenode string
        var string1422 = new GraceString("a trait (defined on line ");
        // call case 6: other requests
        var call1423 = request(var_traitObjNode, "line", [0]);
        var opresult1424 = request(string1422, "++(1)", [1], call1423);
        var string1425 = new GraceString(")");
        var opresult1426 = request(opresult1424, "++(1)", [1], string1425);
        var opresult1427 = request(opresult1421, "++(1)", [1], opresult1426);
        setLineNumber(899);    // compilenode member
        // call case 6: other requests
        var call1428 = request(var_node, "line", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call1414 = request(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], opresult1427, call1428);
        if1409 = call1414;
      }
      return if1409;
    };
    let applyMeth1408 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1408.methodName = "apply(1)";
    applyMeth1408.paramCounts = [1];
    applyMeth1408.paramNames = ["node"];
    applyMeth1408.definitionLine = 893;
    applyMeth1408.definitionModule = "identifierresolution";
    block1408.methods["apply(1)"] = applyMeth1408;
    let matchesMeth1408 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1408.methodName = "matches(1)";
    matchesMeth1408.paramCounts = [1];
    matchesMeth1408.paramNames = ["node"];
    matchesMeth1408.definitionLine = 893;
    matchesMeth1408.definitionModule = "identifierresolution";
    block1408.methods["matches(1)"] = matchesMeth1408;
    // call case 6: other requests
    setLineNumber(893);    // compilenode member
    // call case 6: other requests
    var call1429 = request(var_traitObjNode, "value", [0]);
    var call1407 = request(call1429, "do(1)", [1], block1408);
    return call1407;
  };    // end of method checkTraitBody(_)
  this.methods["checkTraitBody(1)"] = func1406;
  func1406.methodName = "checkTraitBody(1)";
  func1406.paramCounts = [1];
  func1406.paramNames = ["traitObjNode"];
  func1406.definitionLine = 892;
  func1406.definitionModule = "identifierresolution";
  var func1430 = function(argcv, var_str) {    // method articleFor(_), line 904
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("articleFor(_)", 0, numArgs - 1);
    }
    var if1431 = GraceDone;
    setLineNumber(906);    // compilenode member
    // call case 6: other requests
    var call1433 = request(var_str, "first", [0]);
    // call case 6: other requests
    var string1434 = new GraceString("aeioAEIO");
    var call1432 = request(string1434, "contains(1)", [1], call1433);
    if (Grace_isTrue(call1432)) {
      var string1435 = new GraceString("an");
      if1431 = string1435;
    } else {
      var string1436 = new GraceString("a");
      if1431 = string1436;
    }
    return if1431;
  };    // end of method articleFor(_)
  this.methods["articleFor(1)"] = func1430;
  func1430.methodName = "articleFor(1)";
  func1430.paramCounts = [1];
  func1430.paramNames = ["str"];
  func1430.definitionLine = 904;
  func1430.definitionModule = "identifierresolution";
  var func1437 = function(argcv, var_topNode, var_topChain) {    // method buildSymbolTableFor(_)ancestors(_), line 909
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("buildSymbolTableFor(_)ancestors(_)", 0, numArgs - 2);
    }
    setLineNumber(910);    // compilenode object
    var obj1438_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_910");
      this.outer_identifierresolution_910 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(911);    // reuse call
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var initFun1439 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
      var func1440 = function(argcv, var_o, var_anc) {    // method visitBind(_)up(_), line 913
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitBind(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(914);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1443 = request(var_anc, "parent", [0]);
        var call1442 = request(call1443, "scope", [0]);
        // call case 6: other requests
        var call1441 = request(var_o, "scope:=(1)", [1], call1442);
        setLineNumber(915);    // compilenode member
        // call case 6: other requests
        var call1444 = request(var_o, "dest", [0]);
        var var_lValue = call1444;
        var if1445 = GraceDone;
        setLineNumber(916);    // compilenode member
        // call case 6: other requests
        var call1446 = request(var_lValue, "kind", [0]);
        var string1447 = new GraceString("identifier");
        var opresult1448 = request(call1446, "==(1)", [1], string1447);
        if (Grace_isTrue(opresult1448)) {
          setLineNumber(917);    // compilenode call
          // call case 6: other requests
          if (var_lValue === undefined) raiseUninitializedVariable("lValue");
          var call1449 = request(var_lValue, "isAssigned:=(1)", [1], GraceTrue);
          if1445 = call1449;
        }
        setLineNumber(919);    // compilenode return
        return GraceTrue;
      };    // end of method visitBind(_)up(_)
      this.methods["visitBind(1)up(1)"] = func1440;
      func1440.methodName = "visitBind(1)up(1)";
      func1440.paramCounts = [1, 1];
      func1440.paramNames = ["o", "anc"];
      func1440.definitionLine = 913;
      func1440.definitionModule = "identifierresolution";
      var func1450 = function(argcv, var_o, var_anc) {    // method visitCall(_)up(_), line 921
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitCall(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(922);    // compilenode member
        // call case 6: other requests
        var call1451 = request(var_anc, "parent", [0]);
        var var_enclosingNode = call1451;
        setLineNumber(923);    // compilenode member
        // call case 6: other requests
        var call1452 = request(var_enclosingNode, "scope", [0]);
        var var_scope = call1452;
        setLineNumber(924);    // compilenode call
        // call case 6: other requests
        var call1453 = request(var_o, "scope:=(1)", [1], var_scope);
        setLineNumber(925);    // compilenode member
        // call case 6: other requests
        var call1454 = request(var_o, "receiver", [0]);
        var var_callee = call1454;
        var if1455 = GraceDone;
        setLineNumber(926);    // compilenode member
        // call case 6: other requests
        var call1456 = request(var_callee, "isIdentifier", [0]);
        if (Grace_isTrue(call1456)) {
          setLineNumber(927);    // compilenode call
          // call case 6: other requests
          if (var_callee === undefined) raiseUninitializedVariable("callee");
          var call1457 = request(var_callee, "inRequest:=(1)", [1], GraceTrue);
          if1455 = call1457;
        }
        setLineNumber(929);    // compilenode block
        var block1459 = new GraceBlock(this, 929, 1);
        block1459.guard = jsTrue;
        block1459.real = function block1459(var_each) {
          setLineNumber(929);    // compilenode call
          // call case 6: other requests
          var call1460 = request(var_each, "scope:=(1)", [1], var_o);
          return call1460;
        };
        let applyMeth1459 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1459.methodName = "apply(1)";
        applyMeth1459.paramCounts = [1];
        applyMeth1459.paramNames = ["each"];
        applyMeth1459.definitionLine = 929;
        applyMeth1459.definitionModule = "identifierresolution";
        block1459.methods["apply(1)"] = applyMeth1459;
        let matchesMeth1459 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1459.methodName = "matches(1)";
        matchesMeth1459.paramCounts = [1];
        matchesMeth1459.paramNames = ["each"];
        matchesMeth1459.definitionLine = 929;
        matchesMeth1459.definitionModule = "identifierresolution";
        block1459.methods["matches(1)"] = matchesMeth1459;
        // call case 6: other requests
        // call case 6: other requests
        var call1461 = request(var_o, "parts", [0]);
        var call1458 = request(call1461, "do(1)", [1], block1459);
        var if1462 = GraceDone;
        setLineNumber(930);    // compilenode member
        // call case 6: other requests
        var call1463 = request(var_enclosingNode, "isMethod", [0]);
        if (Grace_isTrue(call1463)) {
          var if1464 = GraceDone;
          setLineNumber(931);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          if (var_enclosingNode === undefined) raiseUninitializedVariable("enclosingNode");
          var call1466 = request(var_enclosingNode, "body", [0]);
          var call1465 = request(call1466, "last", [0]);
          var opresult1467 = request(call1465, "==(1)", [1], var_o);
          if (Grace_isTrue(opresult1467)) {
            setLineNumber(932);    // compilenode call
            // call case 6: other requests
            var call1468 = request(var_o, "isTailCall:=(1)", [1], GraceTrue);
            if1464 = call1468;
          }
          if1462 = if1464;
        } else {
          var if1469 = GraceDone;
          setLineNumber(934);    // compilenode member
          // call case 6: other requests
          if (var_enclosingNode === undefined) raiseUninitializedVariable("enclosingNode");
          var call1470 = request(var_enclosingNode, "isReturn", [0]);
          if (Grace_isTrue(call1470)) {
            setLineNumber(935);    // compilenode call
            // call case 6: other requests
            var call1471 = request(var_o, "isTailCall:=(1)", [1], GraceTrue);
            if1469 = call1471;
          }
          if1462 = if1469;
        }
        setLineNumber(937);    // compilenode return
        return GraceTrue;
      };    // end of method visitCall(_)up(_)
      this.methods["visitCall(1)up(1)"] = func1450;
      func1450.methodName = "visitCall(1)up(1)";
      func1450.paramCounts = [1, 1];
      func1450.paramNames = ["o", "anc"];
      func1450.definitionLine = 921;
      func1450.definitionModule = "identifierresolution";
      var func1472 = function(argcv, var_o, var_anc) {    // method visitBlock(_)up(_), line 939
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitBlock(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(940);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1476 = request(var_anc, "parent", [0]);
        var call1475 = request(call1476, "scope", [0]);
        var string1477 = new GraceString("block");
        // call case 2: outer request
        var call1474 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], call1475, string1477);
        // call case 6: other requests
        var call1473 = request(var_o, "scope:=(1)", [1], call1474);
        return GraceTrue;
      };    // end of method visitBlock(_)up(_)
      this.methods["visitBlock(1)up(1)"] = func1472;
      func1472.methodName = "visitBlock(1)up(1)";
      func1472.paramCounts = [1, 1];
      func1472.paramNames = ["o", "anc"];
      func1472.definitionLine = 939;
      func1472.definitionModule = "identifierresolution";
      var func1478 = function(argcv, var_o, var_anc) {    // method visitDefDec(_)up(_), line 943
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitDefDec(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(944);    // compilenode member
        // call case 6: other requests
        var call1479 = request(var_anc, "parent", [0]);
        var var_myParent = call1479;
        setLineNumber(945);    // compilenode member
        // call case 6: other requests
        var call1481 = request(var_myParent, "scope", [0]);
        // call case 6: other requests
        var call1480 = request(var_o, "scope:=(1)", [1], call1481);
        setLineNumber(946);    // compilenode member
        // call case 6: other requests
        var call1483 = request(var_myParent, "kind", [0]);
        // call case 6: other requests
        var call1482 = request(var_o, "parentKind:=(1)", [1], call1483);
        setLineNumber(947);    // compilenode member
        // call case 6: other requests
        var call1484 = request(var_o, "nameString", [0]);
        var var_declaredName = call1484;
        var if1485 = GraceDone;
        setLineNumber(948);    // compilenode member
        // call case 6: other requests
        var call1486 = request(var_o, "startToken", [0]);
        var opresult1487 = request(GraceFalse, "\u2260(1)", [1], call1486);
        if (Grace_isTrue(opresult1487)) {
          setLineNumber(949);    // compilenode call
          if (var_declaredName === undefined) raiseUninitializedVariable("declaredName");
          // call case 6: other requests
          var call1489 = request(var_o, "startToken", [0]);
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          if (var_myParent === undefined) raiseUninitializedVariable("myParent");
          var call1491 = request(var_myParent, "scope", [0]);
          var call1490 = request(call1491, "elementTokens", [0]);
          var call1488 = request(call1490, "at(1)put(1)", [1, 1], var_declaredName, call1489);
          if1485 = call1488;
        }
        var if1492 = GraceDone;
        setLineNumber(951);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1494 = request(var_o, "value", [0]);
        var call1493 = request(call1494, "isObject", [0]);
        if (Grace_isTrue(call1493)) {
          if (var_declaredName === undefined) raiseUninitializedVariable("declaredName");
          // call case 6: other requests
          // call case 6: other requests
          var call1496 = request(var_o, "value", [0]);
          var call1495 = request(call1496, "name:=(1)", [1], var_declaredName);
          if1492 = call1495;
        }
        return GraceTrue;
      };    // end of method visitDefDec(_)up(_)
      this.methods["visitDefDec(1)up(1)"] = func1478;
      func1478.methodName = "visitDefDec(1)up(1)";
      func1478.paramCounts = [1, 1];
      func1478.paramNames = ["o", "anc"];
      func1478.definitionLine = 943;
      func1478.definitionModule = "identifierresolution";
      var func1497 = function(argcv, var_o, var_anc) {    // method visitVarDec(_)up(_), line 954
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitVarDec(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(955);    // compilenode member
        // call case 6: other requests
        var call1498 = request(var_anc, "parent", [0]);
        var var_myParent = call1498;
        setLineNumber(956);    // compilenode member
        // call case 6: other requests
        var call1500 = request(var_myParent, "scope", [0]);
        // call case 6: other requests
        var call1499 = request(var_o, "scope:=(1)", [1], call1500);
        setLineNumber(957);    // compilenode member
        // call case 6: other requests
        var call1502 = request(var_myParent, "kind", [0]);
        // call case 6: other requests
        var call1501 = request(var_o, "parentKind:=(1)", [1], call1502);
        return GraceTrue;
      };    // end of method visitVarDec(_)up(_)
      this.methods["visitVarDec(1)up(1)"] = func1497;
      func1497.methodName = "visitVarDec(1)up(1)";
      func1497.paramCounts = [1, 1];
      func1497.paramNames = ["o", "anc"];
      func1497.definitionLine = 954;
      func1497.definitionModule = "identifierresolution";
      var func1503 = function(argcv, var_o, var_anc) {    // method visitIdentifier(_)up(_), line 960
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitIdentifier(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(961);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1505 = request(var_anc, "parent", [0]);
        var call1504 = request(call1505, "scope", [0]);
        var var_scope = call1504;
        setLineNumber(962);    // compilenode call
        // call case 6: other requests
        var call1506 = request(var_o, "scope:=(1)", [1], var_scope);
        var if1507 = GraceDone;
        setLineNumber(963);    // compilenode member
        // call case 6: other requests
        var call1508 = request(var_o, "isBindingOccurrence", [0]);
        if (Grace_isTrue(call1508)) {
          var if1509 = GraceDone;
          setLineNumber(964);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1511 = request(var_o, "isDeclaredByParent", [0]);
          var call1510 = request(call1511, "not", [0]);
          var block1512 = new GraceBlock(this, 964, 0);
          block1512.guard = jsTrue;
          block1512.real = function block1512() {
            setLineNumber(964);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1514 = request(var_o, "wildcard", [0]);
            var call1513 = request(call1514, "not", [0]);
            return call1513;
          };
          let applyMeth1512 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1512.methodName = "apply";
          applyMeth1512.paramCounts = [0];
          applyMeth1512.paramNames = [];
          applyMeth1512.definitionLine = 964;
          applyMeth1512.definitionModule = "identifierresolution";
          block1512.methods["apply"] = applyMeth1512;
          var opresult1515 = request(call1510, "&&(1)", [1], block1512);
          if (Grace_isTrue(opresult1515)) {
            setLineNumber(965);    // compilenode call
            // call case 2: outer request
            var call1516 = selfRequest(importedModules["identifierresolution"], "checkForReservedName(1)", [1], var_o);
            setLineNumber(966);    // compilenode call
            // call case 6: other requests
            var call1517 = request(var_o, "declarationKindWithAncestors(1)", [1], var_anc);
            var var_kind = call1517;
            var if1518 = GraceDone;
            setLineNumber(967);    // compilenode member
            // call case 6: other requests
            if (var_scope === undefined) raiseUninitializedVariable("scope");
            var call1519 = request(var_scope, "isObjectScope", [0]);
            if (var_kind === undefined) raiseUninitializedVariable("kind");
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call1520 = request(var_k, "vardec", [0]);
            var opresult1521 = request(var_kind, "==(1)", [1], call1520);
            var opresult1522 = request(call1519, "&&(1)", [1], opresult1521);
            if (Grace_isTrue(opresult1522)) {
              setLineNumber(968);    // compilenode member
              // call case 6: other requests
              var call1524 = request(var_anc, "parent", [0]);
              // call case 6: other requests
              if (var_varFieldDecls === undefined) raiseUninitializedVariable("varFieldDecls");
              var call1523 = request(var_varFieldDecls, "add(1)", [1], call1524);
              if1518 = call1523;
            }
            setLineNumber(974);    // compilenode call
            if (var_kind === undefined) raiseUninitializedVariable("kind");
            // call case 6: other requests
            if (var_scope === undefined) raiseUninitializedVariable("scope");
            var call1525 = request(var_scope, "addNode(1)asA(1)", [1, 1], var_o, var_kind);
            if1509 = call1525;
          }
          if1507 = if1509;
        } else {
          var if1526 = GraceDone;
          setLineNumber(976);    // compilenode member
          // call case 6: other requests
          var call1527 = request(var_o, "wildcard", [0]);
          if (Grace_isTrue(call1527)) {
            setLineNumber(977);    // compilenode string
            var string1529 = new GraceString("'_' cannot be used in an expression");
            setLineNumber(978);    // compilenode member
            // call case 6: other requests
            var call1530 = request(var_o, "range", [0]);
            // call case 6: other requests
            if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
            var call1528 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], string1529, call1530);
            if1526 = call1528;
          }
          if1507 = if1526;
        }
        return GraceTrue;
      };    // end of method visitIdentifier(_)up(_)
      this.methods["visitIdentifier(1)up(1)"] = func1503;
      func1503.methodName = "visitIdentifier(1)up(1)";
      func1503.paramCounts = [1, 1];
      func1503.paramNames = ["o", "anc"];
      func1503.definitionLine = 960;
      func1503.definitionModule = "identifierresolution";
      var func1531 = function(argcv, var_o, var_ac) {    // method visitAlias(_)up(_), line 982
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitAlias(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(983);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1534 = request(var_ac, "parent", [0]);
        var call1533 = request(call1534, "scope", [0]);
        // call case 6: other requests
        var call1532 = request(var_o, "scope:=(1)", [1], call1533);
        setLineNumber(984);    // compilenode call
        // call case 6: other requests
        var call1536 = request(var_ac, "extend(1)", [1], var_o);
        // call case 6: other requests
        // call case 6: other requests
        var call1537 = request(var_o, "newName", [0]);
        var call1535 = request(call1537, "accept(1)from(1)", [1, 1], this, call1536);
        return GraceFalse;
      };    // end of method visitAlias(_)up(_)
      this.methods["visitAlias(1)up(1)"] = func1531;
      func1531.methodName = "visitAlias(1)up(1)";
      func1531.paramCounts = [1, 1];
      func1531.paramNames = ["o", "ac"];
      func1531.definitionLine = 982;
      func1531.definitionModule = "identifierresolution";
      var func1538 = function(argcv, var_o, var_anc) {    // method visitImport(_)up(_), line 987
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitImport(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(988);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1541 = request(var_anc, "parent", [0]);
        var call1540 = request(call1541, "scope", [0]);
        // call case 6: other requests
        var call1539 = request(var_o, "scope:=(1)", [1], call1540);
        setLineNumber(989);    // compilenode call
        // call case 6: other requests
        if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
        var call1542 = request(var_xmodule, "checkExternalModule(1)", [1], var_o);
        setLineNumber(990);    // compilenode member
        // call case 6: other requests
        var call1544 = request(var_o, "path", [0]);
        // call case 6: other requests
        if (var_xmodule === undefined) raiseUninitializedVariable("xmodule");
        var call1543 = request(var_xmodule, "parseGCT(1)", [1], call1544);
        var var_gct = call1543;
        setLineNumber(991);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1547 = request(var_anc, "parent", [0]);
        var call1546 = request(call1547, "scope", [0]);
        var string1548 = new GraceString("module");
        // call case 2: outer request
        var call1545 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], call1546, string1548);
        var var_otherModule = call1545;
        setLineNumber(992);    // compilenode call
        // call case 6: other requests
        var call1549 = request(var_otherModule, "node:=(1)", [1], var_o);
        setLineNumber(993);    // compilenode call
        // call case 2: outer request
        var call1550 = selfRequest(importedModules["identifierresolution"], "processGCT(2)", [2], var_gct, var_otherModule);
        setLineNumber(994);    // compilenode member
        // call case 6: other requests
        var call1552 = request(var_o, "nameString", [0]);
        // call case 6: other requests
        // call case 6: other requests
        var call1553 = request(var_o, "scope", [0]);
        var call1551 = request(call1553, "at(1)putScope(1)", [1, 1], call1552, var_otherModule);
        return GraceTrue;
      };    // end of method visitImport(_)up(_)
      this.methods["visitImport(1)up(1)"] = func1538;
      func1538.methodName = "visitImport(1)up(1)";
      func1538.paramCounts = [1, 1];
      func1538.paramNames = ["o", "anc"];
      func1538.definitionLine = 987;
      func1538.definitionModule = "identifierresolution";
      var func1554 = function(argcv, var_o, var_anc) {    // method visitInherits(_)up(_), line 997
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitInherits(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(998);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1557 = request(var_anc, "parent", [0]);
        var call1556 = request(call1557, "scope", [0]);
        // call case 6: other requests
        var call1555 = request(var_o, "scope:=(1)", [1], call1556);
        var if1558 = GraceDone;
        setLineNumber(999);    // compilenode member
        // call case 6: other requests
        var call1559 = request(var_o, "isUse", [0]);
        if (Grace_isTrue(call1559)) {
          var if1560 = GraceDone;
          setLineNumber(1000);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call1563 = request(var_anc, "parent", [0]);
          var call1562 = request(call1563, "canUse", [0]);
          var call1561 = request(call1562, "not", [0]);
          if (Grace_isTrue(call1561)) {
            setLineNumber(1001);    // compilenode string
            var string1565 = new GraceString("use statements must ");
            setLineNumber(1002);    // compilenode string
            var string1566 = new GraceString("be inside an object, class, or trait");
            var opresult1567 = request(string1565, "++(1)", [1], string1566);
            setLineNumber(1003);    // compilenode member
            // call case 6: other requests
            var call1568 = request(var_o, "range", [0]);
            // call case 6: other requests
            if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
            var call1564 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1567, call1568);
            if1560 = call1564;
          }
          if1558 = if1560;
        } else {
          var if1569 = GraceDone;
          setLineNumber(1006);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call1572 = request(var_anc, "parent", [0]);
          var call1571 = request(call1572, "canInherit", [0]);
          var call1570 = request(call1571, "not", [0]);
          if (Grace_isTrue(call1570)) {
            setLineNumber(1007);    // compilenode string
            var string1574 = new GraceString("inherit statements must ");
            setLineNumber(1008);    // compilenode string
            var string1575 = new GraceString("be inside an object or class; a trait cannot inherit");
            var opresult1576 = request(string1574, "++(1)", [1], string1575);
            setLineNumber(1009);    // compilenode member
            // call case 6: other requests
            var call1577 = request(var_o, "range", [0]);
            // call case 6: other requests
            if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
            var call1573 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1576, call1577);
            if1569 = call1573;
          }
          if1558 = if1569;
        }
        return GraceTrue;
      };    // end of method visitInherits(_)up(_)
      this.methods["visitInherits(1)up(1)"] = func1554;
      func1554.methodName = "visitInherits(1)up(1)";
      func1554.paramCounts = [1, 1];
      func1554.paramNames = ["o", "anc"];
      func1554.definitionLine = 997;
      func1554.definitionModule = "identifierresolution";
      var func1578 = function(argcv, var_o, var_anc) {    // method visitMethod(_)up(_), line 1014
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitMethod(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1015);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1580 = request(var_anc, "parent", [0]);
        var call1579 = request(call1580, "scope", [0]);
        var var_surroundingScope = call1579;
        var if1581 = GraceDone;
        setLineNumber(1016);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1583 = request(var_surroundingScope, "isObjectScope", [0]);
        var call1582 = request(call1583, "not", [0]);
        if (Grace_isTrue(call1582)) {
          setLineNumber(1023);    // compilenode string
          var string1585 = new GraceString("");
          // call case 6: other requests
          var call1586 = request(var_o, "description", [0]);
          var opresult1587 = request(string1585, "++(1)", [1], call1586);
          var string1588 = new GraceString(" declarations are permitted only");
          var opresult1589 = request(opresult1587, "++(1)", [1], string1588);
          setLineNumber(1024);    // compilenode string
          var string1590 = new GraceString(" inside an object");
          var opresult1591 = request(opresult1589, "++(1)", [1], string1590);
          // call case 6: other requests
          var call1592 = request(var_o, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1584 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1591, call1592);
          if1581 = call1584;
        }
        setLineNumber(1026);    // compilenode member
        // call case 6: other requests
        var call1593 = request(var_o, "asIdentifier", [0]);
        var var_ident = call1593;
        setLineNumber(1027);    // compilenode call
        // call case 2: outer request
        var call1594 = selfRequest(importedModules["identifierresolution"], "checkForReservedName(1)", [1], var_ident);
        var if1595 = GraceDone;
        setLineNumber(1028);    // compilenode member
        // call case 6: other requests
        var call1596 = request(var_ident, "isBindingOccurrence", [0]);
        if (Grace_isTrue(call1596)) {
          var if1597 = GraceDone;
          setLineNumber(1029);    // compilenode member
          // call case 6: other requests
          var call1598 = request(var_o, "isRequired", [0]);
          if (Grace_isTrue(call1598)) {
            setLineNumber(1030);    // compilenode member
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call1599 = request(var_k, "required", [0]);
            if1597 = call1599;
          } else {
            setLineNumber(1032);    // compilenode member
            // call case 6: other requests
            if (var_k === undefined) raiseUninitializedVariable("k");
            var call1600 = request(var_k, "methdec", [0]);
            if1597 = call1600;
          }
          var var_knd = if1597;
          setLineNumber(1034);    // compilenode call
          if (var_ident === undefined) raiseUninitializedVariable("ident");
          if (var_knd === undefined) raiseUninitializedVariable("knd");
          // call case 6: other requests
          if (var_surroundingScope === undefined) raiseUninitializedVariable("surroundingScope");
          var call1601 = request(var_surroundingScope, "addNode(1)asA(1)", [1, 1], var_ident, var_knd);
          setLineNumber(1035);    // compilenode call
          // call case 6: other requests
          if (var_ident === undefined) raiseUninitializedVariable("ident");
          var call1602 = request(var_ident, "isDeclaredByParent:=(1)", [1], GraceTrue);
          setLineNumber(1037);    // compilenode call
          if (var_surroundingScope === undefined) raiseUninitializedVariable("surroundingScope");
          var string1605 = new GraceString("method");
          // call case 2: outer request
          var call1604 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_surroundingScope, string1605);
          // call case 6: other requests
          var call1603 = request(var_o, "scope:=(1)", [1], call1604);
          var if1606 = GraceDone;
          setLineNumber(1038);    // compilenode member
          // call case 6: other requests
          var call1607 = request(var_o, "returnsObject", [0]);
          if (Grace_isTrue(call1607)) {
            setLineNumber(1039);    // compilenode call
            // call case 6: other requests
            var call1608 = request(var_o, "isFresh:=(1)", [1], GraceTrue);
            if1606 = call1608;
          }
          if1595 = if1606;
        }
        var if1609 = GraceDone;
        setLineNumber(1042);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call1612 = request(var_o, "body", [0]);
        var call1611 = request(call1612, "isEmpty", [0]);
        var call1610 = request(call1611, "not", [0]);
        var block1613 = new GraceBlock(this, 1042, 0);
        block1613.guard = jsTrue;
        block1613.real = function block1613() {
          setLineNumber(1042);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call1616 = request(var_o, "body", [0]);
          var call1615 = request(call1616, "last", [0]);
          var call1614 = request(call1615, "isObject", [0]);
          return call1614;
        };
        let applyMeth1613 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth1613.methodName = "apply";
        applyMeth1613.paramCounts = [0];
        applyMeth1613.paramNames = [];
        applyMeth1613.definitionLine = 1042;
        applyMeth1613.definitionModule = "identifierresolution";
        block1613.methods["apply"] = applyMeth1613;
        var opresult1617 = request(call1610, "&&(1)", [1], block1613);
        if (Grace_isTrue(opresult1617)) {
          setLineNumber(1043);    // compilenode member
          // call case 6: other requests
          var call1619 = request(var_o, "canonicalName", [0]);
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call1621 = request(var_o, "body", [0]);
          var call1620 = request(call1621, "last", [0]);
          var call1618 = request(call1620, "name:=(1)", [1], call1619);
          if1609 = call1618;
        }
        return GraceTrue;
      };    // end of method visitMethod(_)up(_)
      this.methods["visitMethod(1)up(1)"] = func1578;
      func1578.methodName = "visitMethod(1)up(1)";
      func1578.paramCounts = [1, 1];
      func1578.paramNames = ["o", "anc"];
      func1578.definitionLine = 1014;
      func1578.definitionModule = "identifierresolution";
      var func1622 = function(argcv, var_o, var_anc) {    // method visitMethodType(_)up(_), line 1047
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitMethodType(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1048);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1624 = request(var_anc, "parent", [0]);
        var call1623 = request(call1624, "scope", [0]);
        var var_surroundingScope = call1623;
        setLineNumber(1049);    // compilenode member
        // call case 6: other requests
        var call1625 = request(var_o, "asIdentifier", [0]);
        var var_ident = call1625;
        setLineNumber(1050);    // compilenode call
        // call case 2: outer request
        var call1626 = selfRequest(importedModules["identifierresolution"], "checkForReservedName(1)", [1], var_ident);
        setLineNumber(1051);    // compilenode member
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call1628 = request(var_k, "methdec", [0]);
        // call case 6: other requests
        var call1627 = request(var_surroundingScope, "addNode(1)asA(1)", [1, 1], var_ident, call1628);
        setLineNumber(1052);    // compilenode call
        // call case 6: other requests
        var call1629 = request(var_ident, "isDeclaredByParent:=(1)", [1], GraceTrue);
        setLineNumber(1053);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1633 = request(var_anc, "parent", [0]);
        var call1632 = request(call1633, "scope", [0]);
        var string1634 = new GraceString("methodtype");
        // call case 2: outer request
        var call1631 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], call1632, string1634);
        // call case 6: other requests
        var call1630 = request(var_o, "scope:=(1)", [1], call1631);
        return GraceTrue;
      };    // end of method visitMethodType(_)up(_)
      this.methods["visitMethodType(1)up(1)"] = func1622;
      func1622.methodName = "visitMethodType(1)up(1)";
      func1622.paramCounts = [1, 1];
      func1622.paramNames = ["o", "anc"];
      func1622.definitionLine = 1047;
      func1622.definitionModule = "identifierresolution";
      var func1635 = function(argcv, var_o, var_anc) {    // method visitObject(_)up(_), line 1058
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitObject(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1059);    // compilenode member
        // call case 6: other requests
        var call1636 = request(var_anc, "parent", [0]);
        var var_myParent = call1636;
        setLineNumber(1060);    // compilenode member
        // call case 6: other requests
        var call1639 = request(var_myParent, "scope", [0]);
        var string1640 = new GraceString("object");
        // call case 2: outer request
        var call1638 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], call1639, string1640);
        // call case 6: other requests
        var call1637 = request(var_o, "scope:=(1)", [1], call1638);
        var if1641 = GraceDone;
        setLineNumber(1061);    // compilenode member
        // call case 6: other requests
        var call1642 = request(var_o, "inTrait", [0]);
        if (Grace_isTrue(call1642)) {
          // call case 2: outer request
          var call1643 = selfRequest(importedModules["identifierresolution"], "checkTraitBody(1)", [1], var_o);
          if1641 = call1643;
        }
        return GraceTrue;
      };    // end of method visitObject(_)up(_)
      this.methods["visitObject(1)up(1)"] = func1635;
      func1635.methodName = "visitObject(1)up(1)";
      func1635.paramCounts = [1, 1];
      func1635.paramNames = ["o", "anc"];
      func1635.definitionLine = 1058;
      func1635.definitionModule = "identifierresolution";
      var func1644 = function(argcv, var_o, var_anc) {     // accessor method visitModule(_)up(_)
        const numArgs = arguments.length - 1;
        if (numArgs > 2) raiseTypeArgError("visitModule(_)up(_)", 0, numArgs - 2);
        return GraceTrue;
      };    // end of method visitModule(_)up(_)
      this.methods["visitModule(1)up(1)"] = func1644;
      func1644.methodName = "visitModule(1)up(1)";
      func1644.paramCounts = [1, 1];
      func1644.paramNames = ["o", "anc"];
      func1644.definitionLine = 1064;
      func1644.definitionModule = "identifierresolution";
      var func1645 = function(argcv, var_o, var_anc) {    // method visitTypeDec(_)up(_), line 1068
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitTypeDec(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1069);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1647 = request(var_anc, "parent", [0]);
        var call1646 = request(call1647, "scope", [0]);
        var var_enclosingScope = call1646;
        var if1648 = GraceDone;
        setLineNumber(1070);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1650 = request(var_enclosingScope, "isObjectScope", [0]);
        var call1649 = request(call1650, "not", [0]);
        if (Grace_isTrue(call1649)) {
          setLineNumber(1071);    // compilenode string
          var string1652 = new GraceString("type declarations are permitted only");
          setLineNumber(1072);    // compilenode string
          var string1653 = new GraceString(" inside an object");
          var opresult1654 = request(string1652, "++(1)", [1], string1653);
          // call case 6: other requests
          var call1655 = request(var_o, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1651 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1654, call1655);
          if1648 = call1651;
        }
        setLineNumber(1074);    // compilenode member
        // call case 6: other requests
        var call1657 = request(var_o, "name", [0]);
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call1658 = request(var_k, "typedec", [0]);
        // call case 6: other requests
        var call1656 = request(var_enclosingScope, "addNode(1)asA(1)", [1, 1], call1657, call1658);
        setLineNumber(1075);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        var call1660 = request(var_o, "name", [0]);
        var call1659 = request(call1660, "isDeclaredByParent:=(1)", [1], GraceTrue);
        setLineNumber(1076);    // compilenode string
        var string1663 = new GraceString("typedec");
        // call case 2: outer request
        var call1662 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_enclosingScope, string1663);
        // call case 6: other requests
        var call1661 = request(var_o, "scope:=(1)", [1], call1662);
        return GraceTrue;
      };    // end of method visitTypeDec(_)up(_)
      this.methods["visitTypeDec(1)up(1)"] = func1645;
      func1645.methodName = "visitTypeDec(1)up(1)";
      func1645.paramCounts = [1, 1];
      func1645.paramNames = ["o", "anc"];
      func1645.definitionLine = 1068;
      func1645.definitionModule = "identifierresolution";
      var func1664 = function(argcv, var_o, var_anc) {    // method visitTypeLiteral(_)up(_), line 1081
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitTypeLiteral(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1082);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1668 = request(var_anc, "parent", [0]);
        var call1667 = request(call1668, "scope", [0]);
        var string1669 = new GraceString("type");
        // call case 2: outer request
        var call1666 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], call1667, string1669);
        // call case 6: other requests
        var call1665 = request(var_o, "scope:=(1)", [1], call1666);
        return GraceTrue;
      };    // end of method visitTypeLiteral(_)up(_)
      this.methods["visitTypeLiteral(1)up(1)"] = func1664;
      func1664.methodName = "visitTypeLiteral(1)up(1)";
      func1664.paramCounts = [1, 1];
      func1664.paramNames = ["o", "anc"];
      func1664.definitionLine = 1081;
      func1664.definitionModule = "identifierresolution";
      var func1670 = function(argcv, var_o, var_anc) {    // method visitReturn(_)up(_), line 1085
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitReturn(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1086);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1673 = request(var_anc, "parent", [0]);
        var call1672 = request(call1673, "scope", [0]);
        // call case 6: other requests
        var call1671 = request(var_o, "scope:=(1)", [1], call1672);
        setLineNumber(1087);    // compilenode block
        var block1675 = new GraceBlock(this, 1087, 1);
        block1675.guard = jsTrue;
        block1675.real = function block1675(var_n) {
          setLineNumber(1087);    // compilenode member
          // call case 6: other requests
          var call1676 = request(var_n, "isMethod", [0]);
          return call1676;
        };
        let applyMeth1675 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1675.methodName = "apply(1)";
        applyMeth1675.paramCounts = [1];
        applyMeth1675.paramNames = ["n"];
        applyMeth1675.definitionLine = 1087;
        applyMeth1675.definitionModule = "identifierresolution";
        block1675.methods["apply(1)"] = applyMeth1675;
        let matchesMeth1675 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1675.methodName = "matches(1)";
        matchesMeth1675.paramCounts = [1];
        matchesMeth1675.paramNames = ["n"];
        matchesMeth1675.definitionLine = 1087;
        matchesMeth1675.definitionModule = "identifierresolution";
        block1675.methods["matches(1)"] = matchesMeth1675;
        var block1677 = new GraceBlock(this, 1087, 0);
        block1677.guard = jsTrue;
        block1677.real = function block1677() {
          setLineNumber(1088);    // compilenode string
          var string1679 = new GraceString("`return` statements must be inside methods.");
          setLineNumber(1089);    // compilenode member
          // call case 6: other requests
          var call1680 = request(var_o, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1678 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], string1679, call1680);
          return call1678;
        };
        let applyMeth1677 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth1677.methodName = "apply";
        applyMeth1677.paramCounts = [0];
        applyMeth1677.paramNames = [];
        applyMeth1677.definitionLine = 1087;
        applyMeth1677.definitionModule = "identifierresolution";
        block1677.methods["apply"] = applyMeth1677;
        // call case 6: other requests
        var call1674 = request(var_anc, "suchThat(1)ifAbsent(1)", [1, 1], block1675, block1677);
        var var_enclosingMethodNode = call1674;
        setLineNumber(1091);    // compilenode member
        // call case 6: other requests
        var call1682 = request(var_enclosingMethodNode, "dtype", [0]);
        // call case 6: other requests
        var call1681 = request(var_o, "dtype:=(1)", [1], call1682);
        return GraceTrue;
      };    // end of method visitReturn(_)up(_)
      this.methods["visitReturn(1)up(1)"] = func1670;
      func1670.methodName = "visitReturn(1)up(1)";
      func1670.paramCounts = [1, 1];
      func1670.paramNames = ["o", "anc"];
      func1670.definitionLine = 1085;
      func1670.definitionModule = "identifierresolution";
      var func1683 = function(argcv, var_o, var_anc) {    // method visitTypeParameters(_)up(_), line 1094
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitTypeParameters(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1094);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1686 = request(var_anc, "parent", [0]);
        var call1685 = request(call1686, "scope", [0]);
        // call case 6: other requests
        var call1684 = request(var_o, "scope:=(1)", [1], call1685);
        return GraceTrue;
      };    // end of method visitTypeParameters(_)up(_)
      this.methods["visitTypeParameters(1)up(1)"] = func1683;
      func1683.methodName = "visitTypeParameters(1)up(1)";
      func1683.paramCounts = [1, 1];
      func1683.paramNames = ["o", "anc"];
      func1683.definitionLine = 1094;
      func1683.definitionModule = "identifierresolution";
      var func1687 = function(argcv, var_o, var_anc) {    // method visitIf(_)up(_), line 1095
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitIf(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1095);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1690 = request(var_anc, "parent", [0]);
        var call1689 = request(call1690, "scope", [0]);
        // call case 6: other requests
        var call1688 = request(var_o, "scope:=(1)", [1], call1689);
        return GraceTrue;
      };    // end of method visitIf(_)up(_)
      this.methods["visitIf(1)up(1)"] = func1687;
      func1687.methodName = "visitIf(1)up(1)";
      func1687.paramCounts = [1, 1];
      func1687.paramNames = ["o", "anc"];
      func1687.definitionLine = 1095;
      func1687.definitionModule = "identifierresolution";
      var func1691 = function(argcv, var_o, var_anc) {    // method visitMatchCase(_)up(_), line 1096
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitMatchCase(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1096);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1694 = request(var_anc, "parent", [0]);
        var call1693 = request(call1694, "scope", [0]);
        // call case 6: other requests
        var call1692 = request(var_o, "scope:=(1)", [1], call1693);
        return GraceTrue;
      };    // end of method visitMatchCase(_)up(_)
      this.methods["visitMatchCase(1)up(1)"] = func1691;
      func1691.methodName = "visitMatchCase(1)up(1)";
      func1691.paramCounts = [1, 1];
      func1691.paramNames = ["o", "anc"];
      func1691.definitionLine = 1096;
      func1691.definitionModule = "identifierresolution";
      var func1695 = function(argcv, var_o, var_anc) {    // method visitTryCatch(_)up(_), line 1097
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitTryCatch(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1097);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1698 = request(var_anc, "parent", [0]);
        var call1697 = request(call1698, "scope", [0]);
        // call case 6: other requests
        var call1696 = request(var_o, "scope:=(1)", [1], call1697);
        return GraceTrue;
      };    // end of method visitTryCatch(_)up(_)
      this.methods["visitTryCatch(1)up(1)"] = func1695;
      func1695.methodName = "visitTryCatch(1)up(1)";
      func1695.paramCounts = [1, 1];
      func1695.paramNames = ["o", "anc"];
      func1695.definitionLine = 1097;
      func1695.definitionModule = "identifierresolution";
      var func1699 = function(argcv, var_o, var_anc) {    // method visitSignaturePart(_)up(_), line 1098
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitSignaturePart(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1098);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1702 = request(var_anc, "parent", [0]);
        var call1701 = request(call1702, "scope", [0]);
        // call case 6: other requests
        var call1700 = request(var_o, "scope:=(1)", [1], call1701);
        return GraceTrue;
      };    // end of method visitSignaturePart(_)up(_)
      this.methods["visitSignaturePart(1)up(1)"] = func1699;
      func1699.methodName = "visitSignaturePart(1)up(1)";
      func1699.paramCounts = [1, 1];
      func1699.paramNames = ["o", "anc"];
      func1699.definitionLine = 1098;
      func1699.definitionModule = "identifierresolution";
      var func1703 = function(argcv, var_o, var_anc) {    // method visitArray(_)up(_), line 1099
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitArray(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1099);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1706 = request(var_anc, "parent", [0]);
        var call1705 = request(call1706, "scope", [0]);
        // call case 6: other requests
        var call1704 = request(var_o, "scope:=(1)", [1], call1705);
        return GraceTrue;
      };    // end of method visitArray(_)up(_)
      this.methods["visitArray(1)up(1)"] = func1703;
      func1703.methodName = "visitArray(1)up(1)";
      func1703.paramCounts = [1, 1];
      func1703.paramNames = ["o", "anc"];
      func1703.definitionLine = 1099;
      func1703.definitionModule = "identifierresolution";
      var func1707 = function(argcv, var_o, var_anc) {    // method visitMember(_)up(_), line 1100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitMember(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1101);    // compilenode call
        // call case 4: self request with 2 args and 0 typeArgs 
        var call1708 = selfRequest(this, "visitCall(1)up(1)", [1, 1], var_o, var_anc);
        return call1708;
      };    // end of method visitMember(_)up(_)
      this.methods["visitMember(1)up(1)"] = func1707;
      func1707.methodName = "visitMember(1)up(1)";
      func1707.paramCounts = [1, 1];
      func1707.paramNames = ["o", "anc"];
      func1707.definitionLine = 1100;
      func1707.definitionModule = "identifierresolution";
      var func1709 = function(argcv, var_o, var_anc) {    // method visitGeneric(_)up(_), line 1103
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitGeneric(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1103);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1712 = request(var_anc, "parent", [0]);
        var call1711 = request(call1712, "scope", [0]);
        // call case 6: other requests
        var call1710 = request(var_o, "scope:=(1)", [1], call1711);
        return GraceTrue;
      };    // end of method visitGeneric(_)up(_)
      this.methods["visitGeneric(1)up(1)"] = func1709;
      func1709.methodName = "visitGeneric(1)up(1)";
      func1709.paramCounts = [1, 1];
      func1709.paramNames = ["o", "anc"];
      func1709.definitionLine = 1103;
      func1709.definitionModule = "identifierresolution";
      var func1713 = function(argcv, var_o, var_anc) {    // method visitString(_)up(_), line 1104
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitString(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1104);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1716 = request(var_anc, "parent", [0]);
        var call1715 = request(call1716, "scope", [0]);
        // call case 6: other requests
        var call1714 = request(var_o, "scope:=(1)", [1], call1715);
        return GraceTrue;
      };    // end of method visitString(_)up(_)
      this.methods["visitString(1)up(1)"] = func1713;
      func1713.methodName = "visitString(1)up(1)";
      func1713.paramCounts = [1, 1];
      func1713.paramNames = ["o", "anc"];
      func1713.definitionLine = 1104;
      func1713.definitionModule = "identifierresolution";
      var func1717 = function(argcv, var_o, var_anc) {    // method visitNum(_)up(_), line 1105
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitNum(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1105);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1720 = request(var_anc, "parent", [0]);
        var call1719 = request(call1720, "scope", [0]);
        // call case 6: other requests
        var call1718 = request(var_o, "scope:=(1)", [1], call1719);
        return GraceTrue;
      };    // end of method visitNum(_)up(_)
      this.methods["visitNum(1)up(1)"] = func1717;
      func1717.methodName = "visitNum(1)up(1)";
      func1717.paramCounts = [1, 1];
      func1717.paramNames = ["o", "anc"];
      func1717.definitionLine = 1105;
      func1717.definitionModule = "identifierresolution";
      var func1721 = function(argcv, var_o, var_anc) {    // method visitOp(_)up(_), line 1106
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitOp(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1106);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1724 = request(var_anc, "parent", [0]);
        var call1723 = request(call1724, "scope", [0]);
        // call case 6: other requests
        var call1722 = request(var_o, "scope:=(1)", [1], call1723);
        return GraceTrue;
      };    // end of method visitOp(_)up(_)
      this.methods["visitOp(1)up(1)"] = func1721;
      func1721.methodName = "visitOp(1)up(1)";
      func1721.paramCounts = [1, 1];
      func1721.paramNames = ["o", "anc"];
      func1721.definitionLine = 1106;
      func1721.definitionModule = "identifierresolution";
      var func1725 = function(argcv, var_o, var_anc) {    // method visitDialect(_)up(_), line 1107
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitDialect(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1107);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1728 = request(var_anc, "parent", [0]);
        var call1727 = request(call1728, "scope", [0]);
        // call case 6: other requests
        var call1726 = request(var_o, "scope:=(1)", [1], call1727);
        return GraceTrue;
      };    // end of method visitDialect(_)up(_)
      this.methods["visitDialect(1)up(1)"] = func1725;
      func1725.methodName = "visitDialect(1)up(1)";
      func1725.paramCounts = [1, 1];
      func1725.paramNames = ["o", "anc"];
      func1725.definitionLine = 1107;
      func1725.definitionModule = "identifierresolution";
      var func1729 = function(argcv, var_o, var_anc) {    // method visitCommentNode(_)up(_), line 1108
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitCommentNode(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1108);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1732 = request(var_anc, "parent", [0]);
        var call1731 = request(call1732, "scope", [0]);
        // call case 6: other requests
        var call1730 = request(var_o, "scope:=(1)", [1], call1731);
        return GraceTrue;
      };    // end of method visitCommentNode(_)up(_)
      this.methods["visitCommentNode(1)up(1)"] = func1729;
      func1729.methodName = "visitCommentNode(1)up(1)";
      func1729.paramCounts = [1, 1];
      func1729.paramNames = ["o", "anc"];
      func1729.definitionLine = 1108;
      func1729.definitionModule = "identifierresolution";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 910;
          m.definitionModule = "identifierresolution";
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
      var obj1438_init = function() {    // init of object on line 910
        initFun1439.call(this);
      };
      return obj1438_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1438 = emptyGraceObject("symbolTableVis", "identifierresolution", 910);
    var obj1438_init = obj1438_build.call(obj1438, null, this, [], []);
    obj1438_init.call(obj1438);  // end of compileobject
    var var_symbolTableVis = obj1438;
    setLineNumber(1111);    // compilenode object
    var obj1733_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_1111");
      this.outer_identifierresolution_1111 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(1117);    // reuse call
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var initFun1734 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
      var func1735 = function(argcv, var_o, var_anc) {    // method visitDefDec(_)up(_), line 1118
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitDefDec(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1119);    // compilenode member
        // call case 6: other requests
        var call1736 = request(var_o, "value", [0]);
        var var_rhs = call1736;
        var if1737 = GraceDone;
        setLineNumber(1120);    // compilenode member
        // call case 6: other requests
        var call1738 = request(var_rhs, "returnsObject", [0]);
        if (Grace_isTrue(call1738)) {
          setLineNumber(1121);    // compilenode member
          // call case 6: other requests
          var call1740 = request(var_o, "nameString", [0]);
          // call case 6: other requests
          if (var_rhs === undefined) raiseUninitializedVariable("rhs");
          var call1741 = request(var_rhs, "returnedObjectScope", [0]);
          // call case 6: other requests
          // call case 6: other requests
          var call1742 = request(var_o, "scope", [0]);
          var call1739 = request(call1742, "at(1)putScope(1)", [1, 1], call1740, call1741);
          if1737 = call1739;
        }
        return GraceTrue;
      };    // end of method visitDefDec(_)up(_)
      this.methods["visitDefDec(1)up(1)"] = func1735;
      func1735.methodName = "visitDefDec(1)up(1)";
      func1735.paramCounts = [1, 1];
      func1735.paramNames = ["o", "anc"];
      func1735.definitionLine = 1118;
      func1735.definitionModule = "identifierresolution";
      var func1743 = function(argcv, var_o, var_anc) {    // method visitMethod(_)up(_), line 1125
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitMethod(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1126);    // compilenode member
        // call case 6: other requests
        var call1744 = request(var_anc, "parent", [0]);
        var var_myParent = call1744;
        var if1745 = GraceDone;
        setLineNumber(1127);    // compilenode member
        // call case 6: other requests
        var call1746 = request(var_o, "returnsObject", [0]);
        if (Grace_isTrue(call1746)) {
          setLineNumber(1128);    // compilenode member
          // call case 6: other requests
          var call1748 = request(var_o, "nameString", [0]);
          // call case 6: other requests
          var call1749 = request(var_o, "returnedObjectScope", [0]);
          // call case 6: other requests
          // call case 6: other requests
          if (var_myParent === undefined) raiseUninitializedVariable("myParent");
          var call1750 = request(var_myParent, "scope", [0]);
          var call1747 = request(call1750, "at(1)putScope(1)", [1, 1], call1748, call1749);
          var if1751 = GraceDone;
          setLineNumber(1129);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call1755 = request(var_anc, "forebears", [0]);
          var call1754 = request(call1755, "forebears", [0]);
          var call1753 = request(call1754, "isEmpty", [0]);
          var call1752 = request(call1753, "not", [0]);
          if (Grace_isTrue(call1752)) {
            setLineNumber(1131);    // compilenode member
            // call case 6: other requests
            if (var_myParent === undefined) raiseUninitializedVariable("myParent");
            var call1756 = request(var_myParent, "name", [0]);
            var var_factoryName = call1756;
            setLineNumber(1132);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1758 = request(var_o, "body", [0]);
            var call1757 = request(call1758, "last", [0]);
            var var_tailNode = call1757;
            var if1759 = GraceDone;
            setLineNumber(1133);    // compilenode op
            if (var_factoryName === undefined) raiseUninitializedVariable("factoryName");
            var string1760 = new GraceString("object");
            var opresult1761 = request(var_factoryName, "\u2260(1)", [1], string1760);
            // call case 6: other requests
            if (var_tailNode === undefined) raiseUninitializedVariable("tailNode");
            var call1762 = request(var_tailNode, "isObject", [0]);
            var opresult1763 = request(opresult1761, "&&(1)", [1], call1762);
            if (Grace_isTrue(opresult1763)) {
              setLineNumber(1134);    // compilenode op
              if (var_factoryName === undefined) raiseUninitializedVariable("factoryName");
              var string1765 = new GraceString(".");
              var opresult1766 = request(var_factoryName, "++(1)", [1], string1765);
              // call case 6: other requests
              if (var_tailNode === undefined) raiseUninitializedVariable("tailNode");
              var call1767 = request(var_tailNode, "name", [0]);
              var opresult1768 = request(opresult1766, "++(1)", [1], call1767);
              // call case 6: other requests
              if (var_tailNode === undefined) raiseUninitializedVariable("tailNode");
              var call1764 = request(var_tailNode, "name:=(1)", [1], opresult1768);
              if1759 = call1764;
            }
            if1751 = if1759;
          }
          if1745 = if1751;
        }
        return GraceTrue;
      };    // end of method visitMethod(_)up(_)
      this.methods["visitMethod(1)up(1)"] = func1743;
      func1743.methodName = "visitMethod(1)up(1)";
      func1743.paramCounts = [1, 1];
      func1743.paramNames = ["o", "anc"];
      func1743.definitionLine = 1125;
      func1743.definitionModule = "identifierresolution";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 1111;
          m.definitionModule = "identifierresolution";
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
      var obj1733_init = function() {    // init of object on line 1111
        initFun1734.call(this);
      };
      return obj1733_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1733 = emptyGraceObject("objectScopesVis", "identifierresolution", 1111);
    var obj1733_init = obj1733_build.call(obj1733, null, this, [], []);
    obj1733_init.call(obj1733);  // end of compileobject
    var var_objectScopesVis = obj1733;
    setLineNumber(1142);    // compilenode object
    var obj1769_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_1142");
      this.outer_identifierresolution_1142 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(1143);    // reuse call
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var initFun1770 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
      var func1771 = function(argcv, var_o, var_anc) {    // method visitObject(_)up(_), line 1144
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitObject(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1145);    // compilenode call
        // call case 2: outer request
        var call1772 = selfRequest(importedModules["identifierresolution"], "collectParentNames(1)", [1], var_o);
        return GraceTrue;
      };    // end of method visitObject(_)up(_)
      this.methods["visitObject(1)up(1)"] = func1771;
      func1771.methodName = "visitObject(1)up(1)";
      func1771.paramCounts = [1, 1];
      func1771.paramNames = ["o", "anc"];
      func1771.definitionLine = 1144;
      func1771.definitionModule = "identifierresolution";
      var func1773 = function(argcv, var_o, var_anc) {    // method visitModule(_)up(_), line 1148
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("visitModule(_)up(_)", 0, numArgs - 2);
        }
        setLineNumber(1149);    // compilenode call
        // call case 2: outer request
        var call1774 = selfRequest(importedModules["identifierresolution"], "collectParentNames(1)", [1], var_o);
        return GraceTrue;
      };    // end of method visitModule(_)up(_)
      this.methods["visitModule(1)up(1)"] = func1773;
      func1773.methodName = "visitModule(1)up(1)";
      func1773.paramCounts = [1, 1];
      func1773.paramNames = ["o", "anc"];
      func1773.definitionLine = 1148;
      func1773.definitionModule = "identifierresolution";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 1142;
          m.definitionModule = "identifierresolution";
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
      var obj1769_init = function() {    // init of object on line 1142
        initFun1770.call(this);
      };
      return obj1769_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1769 = emptyGraceObject("inheritanceVis", "identifierresolution", 1142);
    var obj1769_init = obj1769_build.call(obj1769, null, this, [], []);
    obj1769_init.call(obj1769);  // end of compileobject
    var var_inheritanceVis = obj1769;
    setLineNumber(1154);    // compilenode call
    // call case 6: other requests
    var call1775 = request(var_topNode, "accept(1)from(1)", [1, 1], var_symbolTableVis, var_topChain);
    setLineNumber(1155);    // compilenode call
    // call case 6: other requests
    var call1776 = request(var_topNode, "accept(1)from(1)", [1, 1], var_objectScopesVis, var_topChain);
    setLineNumber(1156);    // compilenode call
    // call case 6: other requests
    var call1777 = request(var_topNode, "accept(1)from(1)", [1, 1], var_inheritanceVis, var_topChain);
    return call1777;
  };    // end of method buildSymbolTableFor(_)ancestors(_)
  this.methods["buildSymbolTableFor(1)ancestors(1)"] = func1437;
  func1437.methodName = "buildSymbolTableFor(1)ancestors(1)";
  func1437.paramCounts = [1, 1];
  func1437.paramNames = ["topNode", "topChain"];
  func1437.definitionLine = 909;
  func1437.definitionModule = "identifierresolution";
  var func1778 = function(argcv, var_node) {    // method collectParentNames(_), line 1159
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("collectParentNames(_)", 0, numArgs - 1);
    }
    setLineNumber(1162);    // compilenode member
    // call case 6: other requests
    var call1779 = request(var_node, "scope", [0]);
    var var_nodeScope = call1779;
    var if1780 = GraceDone;
    setLineNumber(1163);    // compilenode member
    // call case 6: other requests
    var call1781 = request(var_nodeScope, "inheritedNames", [0]);
    if (var_completed === undefined) raiseUninitializedVariable("completed");
    var opresult1782 = request(call1781, "==(1)", [1], var_completed);
    if (Grace_isTrue(opresult1782)) {
      setLineNumber(1164);    // compilenode return
      return var_done;
    }
    var if1783 = GraceDone;
    setLineNumber(1166);    // compilenode member
    // call case 6: other requests
    var call1784 = request(var_nodeScope, "inheritedNames", [0]);
    if (var_inProgress === undefined) raiseUninitializedVariable("inProgress");
    var opresult1785 = request(call1784, "==(1)", [1], var_inProgress);
    if (Grace_isTrue(opresult1785)) {
      setLineNumber(1167);    // compilenode string
      var string1787 = new GraceString("cyclic inheritance or trait use.");
      setLineNumber(1168);    // compilenode member
      // call case 6: other requests
      var call1788 = request(var_node, "line", [0]);
      // call case 6: other requests
      var call1789 = request(var_node, "linePos", [0]);
      // call case 6: other requests
      var call1790 = request(var_node, "linePos", [0]);
      var sum1791 = request(call1790, "+(1)", [1], new GraceNum(4));
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call1786 = request(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string1787, call1788, call1789, sum1791);
      if1783 = call1786;
    }
    setLineNumber(1170);    // compilenode call
    if (var_inProgress === undefined) raiseUninitializedVariable("inProgress");
    // call case 6: other requests
    var call1792 = request(var_nodeScope, "inheritedNames:=(1)", [1], var_inProgress);
    setLineNumber(1171);    // compilenode call
    // call case 2: outer request
    var call1793 = selfRequest(importedModules["identifierresolution"], "gatherInheritedNames(1)", [1], var_node);
    setLineNumber(1172);    // compilenode call
    // call case 2: outer request
    var call1794 = selfRequest(importedModules["identifierresolution"], "gatherUsedNames(1)", [1], var_node);
    setLineNumber(1173);    // compilenode call
    if (var_completed === undefined) raiseUninitializedVariable("completed");
    // call case 6: other requests
    var call1795 = request(var_nodeScope, "inheritedNames:=(1)", [1], var_completed);
    return call1795;
  };    // end of method collectParentNames(_)
  this.methods["collectParentNames(1)"] = func1778;
  func1778.methodName = "collectParentNames(1)";
  func1778.paramCounts = [1];
  func1778.paramNames = ["node"];
  func1778.definitionLine = 1159;
  func1778.definitionModule = "identifierresolution";
  var func1796 = function(argcv, var_node) {    // method gatherInheritedNames(_), line 1176
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("gatherInheritedNames(_)", 0, numArgs - 1);
    }
    var if1797 = GraceDone;
    setLineNumber(1177);    // compilenode member
    // call case 6: other requests
    var call1798 = request(var_node, "isObject", [0]);
    if (Grace_isTrue(call1798)) {
      setLineNumber(1178);    // compilenode member
      // call case 6: other requests
      var call1799 = request(var_node, "superclass", [0]);
      var var_inhNode = call1799;
      setLineNumber(1179);    // compilenode member
      // call case 6: other requests
      var call1800 = request(var_node, "scope", [0]);
      var var_objScope = call1800;
      setLineNumber(1180);    // compilenode vardec
      var var_superScope;
      setLineNumber(1181);    // compilenode member
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call1801 = request(var_k, "inherited", [0]);
      var var_inheritedKind = call1801;
      var if1802 = GraceDone;
      setLineNumber(1182);    // compilenode op
      if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
      var opresult1803 = request(GraceFalse, "==(1)", [1], var_inhNode);
      if (Grace_isTrue(opresult1803)) {
        setLineNumber(1183);    // compilenode string
        var string1805 = new GraceString("graceObject");
        if (var_objScope === undefined) raiseUninitializedVariable("objScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call1806 = request(var_ast, "identifierNode", [0]);
        var call1804 = request(call1806, "new(2)scope(1)", [2, 1], string1805, GraceFalse, var_objScope);
        var var_gO = call1804;
        setLineNumber(1184);    // compilenode call
        if (var_gO === undefined) raiseUninitializedVariable("gO");
        if (var_objScope === undefined) raiseUninitializedVariable("objScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call1808 = request(var_ast, "inheritNode", [0]);
        var call1807 = request(call1808, "new(1)scope(1)", [1, 1], var_gO, var_objScope);
        var_inhNode = call1807;
        setLineNumber(1185);    // compilenode bind
        if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
        var_superScope = var_graceObjectScope;
        setLineNumber(1186);    // compilenode member
        // call case 6: other requests
        if (var_k === undefined) raiseUninitializedVariable("k");
        var call1809 = request(var_k, "graceObjectMethod", [0]);
        var_inheritedKind = call1809;
        if1802 = GraceDone;
      } else {
        setLineNumber(1188);    // compilenode member
        // call case 6: other requests
        if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
        var call1811 = request(var_inhNode, "value", [0]);
        // call case 6: other requests
        if (var_objScope === undefined) raiseUninitializedVariable("objScope");
        var call1810 = request(var_objScope, "scopeReferencedBy(1)", [1], call1811);
        var_superScope = call1810;
        var if1812 = GraceDone;
        setLineNumber(1191);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_superScope === undefined) raiseUninitializedVariable("superScope");
        var call1814 = request(var_superScope, "isUniversal", [0]);
        var call1813 = request(call1814, "not", [0]);
        if (Grace_isTrue(call1813)) {
          var if1815 = GraceDone;
          setLineNumber(1192);    // compilenode member
          // call case 6: other requests
          if (var_ast === undefined) raiseUninitializedVariable("ast");
          var call1816 = request(var_ast, "nullNode", [0]);
          // call case 6: other requests
          if (var_superScope === undefined) raiseUninitializedVariable("superScope");
          var call1817 = request(var_superScope, "node", [0]);
          var opresult1818 = request(call1816, "\u2260(1)", [1], call1817);
          if (Grace_isTrue(opresult1818)) {
            setLineNumber(1195);    // compilenode member
            // call case 6: other requests
            if (var_superScope === undefined) raiseUninitializedVariable("superScope");
            var call1820 = request(var_superScope, "node", [0]);
            // call case 2: outer request
            var call1819 = selfRequest(importedModules["identifierresolution"], "collectParentNames(1)", [1], call1820);
            if1815 = call1819;
          }
          if1812 = if1815;
        }
        if1802 = if1812;
      }
      setLineNumber(1199);    // compilenode block
      var block1822 = new GraceBlock(this, 1199, 1);
      block1822.guard = jsTrue;
      block1822.real = function block1822(var_each) {
        var if1823 = GraceDone;
        setLineNumber(1200);    // compilenode string
        var string1824 = new GraceString("self");
        var opresult1825 = request(var_each, "\u2260(1)", [1], string1824);
        if (Grace_isTrue(opresult1825)) {
          setLineNumber(1201);    // compilenode call
          if (var_inheritedKind === undefined) raiseUninitializedVariable("inheritedKind");
          // call case 6: other requests
          if (var_objScope === undefined) raiseUninitializedVariable("objScope");
          var call1826 = request(var_objScope, "addName(1)asA(1)", [1, 1], var_each, var_inheritedKind);
          setLineNumber(1202);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
          var call1828 = request(var_inhNode, "providedNames", [0]);
          var call1827 = request(call1828, "add(1)", [1], var_each);
          if1823 = call1827;
        }
        return if1823;
      };
      let applyMeth1822 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1822.methodName = "apply(1)";
      applyMeth1822.paramCounts = [1];
      applyMeth1822.paramNames = ["each"];
      applyMeth1822.definitionLine = 1199;
      applyMeth1822.definitionModule = "identifierresolution";
      block1822.methods["apply(1)"] = applyMeth1822;
      let matchesMeth1822 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1822.methodName = "matches(1)";
      matchesMeth1822.paramCounts = [1];
      matchesMeth1822.paramNames = ["each"];
      matchesMeth1822.definitionLine = 1199;
      matchesMeth1822.definitionModule = "identifierresolution";
      block1822.methods["matches(1)"] = matchesMeth1822;
      // call case 6: other requests
      setLineNumber(1199);    // compilenode member
      // call case 6: other requests
      if (var_superScope === undefined) raiseUninitializedVariable("superScope");
      var call1829 = request(var_superScope, "elements", [0]);
      var call1821 = request(call1829, "keysDo(1)", [1], block1822);
      setLineNumber(1205);    // compilenode block
      var block1831 = new GraceBlock(this, 1205, 1);
      block1831.guard = jsTrue;
      block1831.real = function block1831(var_a) {
        setLineNumber(1206);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1833 = request(var_a, "oldName", [0]);
        var call1832 = request(call1833, "nameString", [0]);
        var var_old = call1832;
        var if1834 = GraceDone;
        setLineNumber(1207);    // compilenode call
        if (var_old === undefined) raiseUninitializedVariable("old");
        // call case 6: other requests
        if (var_superScope === undefined) raiseUninitializedVariable("superScope");
        var call1835 = request(var_superScope, "contains(1)", [1], var_old);
        if (Grace_isTrue(call1835)) {
          setLineNumber(1208);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1838 = request(var_a, "newName", [0]);
          var call1837 = request(call1838, "nameString", [0]);
          // call case 6: other requests
          // call case 6: other requests
          if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
          var call1839 = request(var_inhNode, "providedNames", [0]);
          var call1836 = request(call1839, "add(1)", [1], call1837);
          if1834 = call1836;
        } else {
          setLineNumber(1210);    // compilenode string
          var string1841 = new GraceString("can't define an alias for ");
          if (var_old === undefined) raiseUninitializedVariable("old");
          var opresult1842 = request(string1841, "++(1)", [1], var_old);
          var string1843 = new GraceString(" ");
          var opresult1844 = request(opresult1842, "++(1)", [1], string1843);
          setLineNumber(1211);    // compilenode string
          var string1845 = new GraceString("because it is not present in the inherited object");
          var opresult1846 = request(opresult1844, "++(1)", [1], string1845);
          setLineNumber(1212);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1848 = request(var_a, "oldName", [0]);
          var call1847 = request(call1848, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1840 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1846, call1847);
          if1834 = call1840;
        }
        return if1834;
      };
      let applyMeth1831 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1831.methodName = "apply(1)";
      applyMeth1831.paramCounts = [1];
      applyMeth1831.paramNames = ["a"];
      applyMeth1831.definitionLine = 1205;
      applyMeth1831.definitionModule = "identifierresolution";
      block1831.methods["apply(1)"] = applyMeth1831;
      let matchesMeth1831 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1831.methodName = "matches(1)";
      matchesMeth1831.paramCounts = [1];
      matchesMeth1831.paramNames = ["a"];
      matchesMeth1831.definitionLine = 1205;
      matchesMeth1831.definitionModule = "identifierresolution";
      block1831.methods["matches(1)"] = matchesMeth1831;
      // call case 6: other requests
      setLineNumber(1205);    // compilenode member
      // call case 6: other requests
      if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
      var call1849 = request(var_inhNode, "aliases", [0]);
      var call1830 = request(call1849, "do(1)", [1], block1831);
      setLineNumber(1215);    // compilenode block
      var block1851 = new GraceBlock(this, 1215, 1);
      block1851.guard = jsTrue;
      block1851.real = function block1851(var_exMeth) {
        setLineNumber(1216);    // compilenode member
        // call case 6: other requests
        var call1853 = request(var_exMeth, "nameString", [0]);
        var block1854 = new GraceBlock(this, 1216, 0);
        block1854.guard = jsTrue;
        block1854.real = function block1854() {
          setLineNumber(1217);    // compilenode string
          var string1856 = new GraceString("can't exclude ");
          // call case 6: other requests
          var call1857 = request(var_exMeth, "canonicalName", [0]);
          var opresult1858 = request(string1856, "++(1)", [1], call1857);
          var string1859 = new GraceString(" ");
          var opresult1860 = request(opresult1858, "++(1)", [1], string1859);
          setLineNumber(1218);    // compilenode string
          var string1861 = new GraceString("because it is not present in the inherited object");
          var opresult1862 = request(opresult1860, "++(1)", [1], string1861);
          setLineNumber(1219);    // compilenode member
          // call case 6: other requests
          var call1863 = request(var_exMeth, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1855 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1862, call1863);
          return call1855;
        };
        let applyMeth1854 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth1854.methodName = "apply";
        applyMeth1854.paramCounts = [0];
        applyMeth1854.paramNames = [];
        applyMeth1854.definitionLine = 1216;
        applyMeth1854.definitionModule = "identifierresolution";
        block1854.methods["apply"] = applyMeth1854;
        // call case 6: other requests
        setLineNumber(1216);    // compilenode member
        // call case 6: other requests
        if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
        var call1864 = request(var_inhNode, "providedNames", [0]);
        var call1852 = request(call1864, "remove(1)ifAbsent(1)", [1, 1], call1853, block1854);
        return call1852;
      };
      let applyMeth1851 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1851.methodName = "apply(1)";
      applyMeth1851.paramCounts = [1];
      applyMeth1851.paramNames = ["exMeth"];
      applyMeth1851.definitionLine = 1215;
      applyMeth1851.definitionModule = "identifierresolution";
      block1851.methods["apply(1)"] = applyMeth1851;
      let matchesMeth1851 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1851.methodName = "matches(1)";
      matchesMeth1851.paramCounts = [1];
      matchesMeth1851.paramNames = ["exMeth"];
      matchesMeth1851.definitionLine = 1215;
      matchesMeth1851.definitionModule = "identifierresolution";
      block1851.methods["matches(1)"] = matchesMeth1851;
      // call case 6: other requests
      setLineNumber(1215);    // compilenode member
      // call case 6: other requests
      if (var_inhNode === undefined) raiseUninitializedVariable("inhNode");
      var call1865 = request(var_inhNode, "exclusions", [0]);
      var call1850 = request(call1865, "do(1)", [1], block1851);
      if1797 = call1850;
    }
    return if1797;
  };    // end of method gatherInheritedNames(_)
  func1796.confidential = true;
  this.methods["gatherInheritedNames(1)"] = func1796;
  func1796.methodName = "gatherInheritedNames(1)";
  func1796.paramCounts = [1];
  func1796.paramNames = ["node"];
  func1796.definitionLine = 1176;
  func1796.definitionModule = "identifierresolution";
  var func1866 = function(argcv, var_objNode) {    // method gatherUsedNames(_), line 1225
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("gatherUsedNames(_)", 0, numArgs - 1);
    }
    setLineNumber(1229);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_map === undefined) raiseUninitializedVariable("map");
    var call1868 = request(var_map, "dictionary", [0]);
    var call1867 = request(call1868, "empty", [0]);
    var var_traitMethods = call1867;
    setLineNumber(1230);    // compilenode member
    // call case 6: other requests
    var call1869 = request(var_objNode, "scope", [0]);
    var var_objScope = call1869;
    setLineNumber(1231);    // compilenode block
    var block1871 = new GraceBlock(this, 1231, 1);
    block1871.guard = jsTrue;
    block1871.real = function block1871(var_t) {
      setLineNumber(1232);    // compilenode member
      // call case 6: other requests
      var call1873 = request(var_t, "value", [0]);
      // call case 6: other requests
      if (var_objScope === undefined) raiseUninitializedVariable("objScope");
      var call1872 = request(var_objScope, "scopeReferencedBy(1)", [1], call1873);
      var var_traitScope = call1872;
      setLineNumber(1233);    // compilenode member
      // call case 6: other requests
      if (var_traitScope === undefined) raiseUninitializedVariable("traitScope");
      var call1874 = request(var_traitScope, "node", [0]);
      var var_traitNode = call1874;
      setLineNumber(1234);    // compilenode member
      // call case 6: other requests
      // call case 2: outer request
      var call1876 = selfRequest(var_prelude, "list", [0]);
      var call1875 = request(call1876, "empty", [0]);
      var var_requiredNames = call1875;
      var if1877 = GraceDone;
      setLineNumber(1235);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_traitNode === undefined) raiseUninitializedVariable("traitNode");
      var call1879 = request(var_traitNode, "isNull", [0]);
      var call1878 = request(call1879, "not", [0]);
      if (Grace_isTrue(call1878)) {
        var if1880 = GraceDone;
        setLineNumber(1238);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_traitNode === undefined) raiseUninitializedVariable("traitNode");
        var call1882 = request(var_traitNode, "isTrait", [0]);
        var call1881 = request(call1882, "not", [0]);
        if (Grace_isTrue(call1881)) {
          setLineNumber(1239);    // compilenode string
          var string1884 = new GraceString("");
          // call case 6: other requests
          // call case 6: other requests
          var call1886 = request(var_t, "value", [0]);
          var call1885 = request(call1886, "toGrace(1)", [1], new GraceNum(0));
          var opresult1887 = request(string1884, "++(1)", [1], call1885);
          var string1888 = new GraceString(" is not a trait,");
          var opresult1889 = request(opresult1887, "++(1)", [1], string1888);
          setLineNumber(1240);    // compilenode string
          var string1890 = new GraceString(" so it may not appear in a 'use' statement");
          var sum1891 = request(opresult1889, "+(1)", [1], string1890);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1883 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], sum1891, var_t);
          if1880 = call1883;
        }
        if1877 = if1880;
      }
      var if1892 = GraceDone;
      setLineNumber(1244);    // compilenode member
      // call case 6: other requests
      if (var_traitNode === undefined) raiseUninitializedVariable("traitNode");
      var call1893 = request(var_traitNode, "isObject", [0]);
      if (Grace_isTrue(call1893)) {
        setLineNumber(1245);    // compilenode member
        // call case 6: other requests
        if (var_traitScope === undefined) raiseUninitializedVariable("traitScope");
        var call1895 = request(var_traitScope, "node", [0]);
        // call case 2: outer request
        var call1894 = selfRequest(importedModules["identifierresolution"], "collectParentNames(1)", [1], call1895);
        if1892 = call1894;
      }
      setLineNumber(1247);    // compilenode block
      var block1897 = new GraceBlock(this, 1247, 2);
      block1897.guard = jsTrue;
      block1897.real = function block1897(var_nm, var_kd) {
        var if1898 = GraceDone;
        setLineNumber(1248);    // compilenode member
        // call case 6: other requests
        var call1899 = request(var_kd, "forUsers", [0]);
        if (Grace_isTrue(call1899)) {
          setLineNumber(1249);    // compilenode member
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call1901 = request(var_k, "fromTrait", [0]);
          // call case 6: other requests
          if (var_objScope === undefined) raiseUninitializedVariable("objScope");
          var call1900 = request(var_objScope, "addName(1)asA(1)", [1, 1], var_nm, call1901);
          setLineNumber(1250);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          var call1903 = request(var_t, "providedNames", [0]);
          var call1902 = request(call1903, "add(1)", [1], var_nm);
          var if1904 = GraceDone;
          setLineNumber(1251);    // compilenode member
          // call case 6: other requests
          var call1905 = request(var_kd, "isRequired", [0]);
          if (Grace_isTrue(call1905)) {
            setLineNumber(1252);    // compilenode call
            // call case 6: other requests
            if (var_requiredNames === undefined) raiseUninitializedVariable("requiredNames");
            var call1906 = request(var_requiredNames, "add(1)", [1], var_nm);
            if1904 = call1906;
          }
          if1898 = if1904;
        }
        return if1898;
      };
      let applyMeth1897 = function apply_2 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1897.methodName = "apply(2)";
      applyMeth1897.paramCounts = [2];
      applyMeth1897.paramNames = ["nm", "kd"];
      applyMeth1897.definitionLine = 1247;
      applyMeth1897.definitionModule = "identifierresolution";
      block1897.methods["apply(2)"] = applyMeth1897;
      let matchesMeth1897 = function matches_2 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1897.methodName = "matches(2)";
      matchesMeth1897.paramCounts = [2];
      matchesMeth1897.paramNames = ["nm", "kd"];
      matchesMeth1897.definitionLine = 1247;
      matchesMeth1897.definitionModule = "identifierresolution";
      block1897.methods["matches(2)"] = matchesMeth1897;
      // call case 6: other requests
      if (var_traitScope === undefined) raiseUninitializedVariable("traitScope");
      var call1896 = request(var_traitScope, "keysAndKindsDo(1)", [1], block1897);
      setLineNumber(1256);    // compilenode block
      var block1908 = new GraceBlock(this, 1256, 1);
      block1908.guard = jsTrue;
      block1908.real = function block1908(var_a) {
        setLineNumber(1257);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1910 = request(var_a, "oldName", [0]);
        var call1909 = request(call1910, "nameString", [0]);
        var var_old = call1909;
        var if1911 = GraceDone;
        setLineNumber(1258);    // compilenode call
        if (var_old === undefined) raiseUninitializedVariable("old");
        // call case 6: other requests
        if (var_traitScope === undefined) raiseUninitializedVariable("traitScope");
        var call1912 = request(var_traitScope, "contains(1)", [1], var_old);
        if (Grace_isTrue(call1912)) {
          setLineNumber(1259);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1915 = request(var_a, "newName", [0]);
          var call1914 = request(call1915, "nameString", [0]);
          // call case 6: other requests
          // call case 6: other requests
          var call1916 = request(var_t, "providedNames", [0]);
          var call1913 = request(call1916, "add(1)", [1], call1914);
          if1911 = call1913;
        } else {
          setLineNumber(1261);    // compilenode string
          var string1918 = new GraceString("can't define an alias for ");
          setLineNumber(1262);    // compilenode string
          var string1919 = new GraceString("");
          if (var_old === undefined) raiseUninitializedVariable("old");
          var opresult1920 = request(string1919, "++(1)", [1], var_old);
          var string1921 = new GraceString(" because it is not present in the trait");
          var opresult1922 = request(opresult1920, "++(1)", [1], string1921);
          var opresult1923 = request(string1918, "++(1)", [1], opresult1922);
          setLineNumber(1263);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1925 = request(var_a, "oldName", [0]);
          var call1924 = request(call1925, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1917 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1923, call1924);
          if1911 = call1917;
        }
        return if1911;
      };
      let applyMeth1908 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1908.methodName = "apply(1)";
      applyMeth1908.paramCounts = [1];
      applyMeth1908.paramNames = ["a"];
      applyMeth1908.definitionLine = 1256;
      applyMeth1908.definitionModule = "identifierresolution";
      block1908.methods["apply(1)"] = applyMeth1908;
      let matchesMeth1908 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1908.methodName = "matches(1)";
      matchesMeth1908.paramCounts = [1];
      matchesMeth1908.paramNames = ["a"];
      matchesMeth1908.definitionLine = 1256;
      matchesMeth1908.definitionModule = "identifierresolution";
      block1908.methods["matches(1)"] = matchesMeth1908;
      // call case 6: other requests
      setLineNumber(1256);    // compilenode member
      // call case 6: other requests
      var call1926 = request(var_t, "aliases", [0]);
      var call1907 = request(call1926, "do(1)", [1], block1908);
      setLineNumber(1266);    // compilenode block
      var block1928 = new GraceBlock(this, 1266, 1);
      block1928.guard = jsTrue;
      block1928.real = function block1928(var_exMeth) {
        setLineNumber(1267);    // compilenode member
        // call case 6: other requests
        var call1930 = request(var_exMeth, "nameString", [0]);
        var block1931 = new GraceBlock(this, 1267, 0);
        block1931.guard = jsTrue;
        block1931.real = function block1931() {
          setLineNumber(1268);    // compilenode string
          var string1933 = new GraceString("can't exclude ");
          // call case 6: other requests
          var call1934 = request(var_exMeth, "canonicalName", [0]);
          var opresult1935 = request(string1933, "++(1)", [1], call1934);
          var string1936 = new GraceString(" ");
          var opresult1937 = request(opresult1935, "++(1)", [1], string1936);
          setLineNumber(1269);    // compilenode string
          var string1938 = new GraceString("because it is not available in the used trait");
          var opresult1939 = request(opresult1937, "++(1)", [1], string1938);
          setLineNumber(1270);    // compilenode member
          // call case 6: other requests
          var call1940 = request(var_exMeth, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call1932 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult1939, call1940);
          return call1932;
        };
        let applyMeth1931 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth1931.methodName = "apply";
        applyMeth1931.paramCounts = [0];
        applyMeth1931.paramNames = [];
        applyMeth1931.definitionLine = 1267;
        applyMeth1931.definitionModule = "identifierresolution";
        block1931.methods["apply"] = applyMeth1931;
        // call case 6: other requests
        setLineNumber(1267);    // compilenode member
        // call case 6: other requests
        var call1941 = request(var_t, "providedNames", [0]);
        var call1929 = request(call1941, "remove(1)ifAbsent(1)", [1, 1], call1930, block1931);
        return call1929;
      };
      let applyMeth1928 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1928.methodName = "apply(1)";
      applyMeth1928.paramCounts = [1];
      applyMeth1928.paramNames = ["exMeth"];
      applyMeth1928.definitionLine = 1266;
      applyMeth1928.definitionModule = "identifierresolution";
      block1928.methods["apply(1)"] = applyMeth1928;
      let matchesMeth1928 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1928.methodName = "matches(1)";
      matchesMeth1928.paramCounts = [1];
      matchesMeth1928.paramNames = ["exMeth"];
      matchesMeth1928.definitionLine = 1266;
      matchesMeth1928.definitionModule = "identifierresolution";
      block1928.methods["matches(1)"] = matchesMeth1928;
      // call case 6: other requests
      setLineNumber(1266);    // compilenode member
      // call case 6: other requests
      var call1942 = request(var_t, "exclusions", [0]);
      var call1927 = request(call1942, "do(1)", [1], block1928);
      setLineNumber(1273);    // compilenode block
      var block1944 = new GraceBlock(this, 1273, 1);
      block1944.guard = jsTrue;
      block1944.real = function block1944(var_methName) {
        var if1945 = GraceDone;
        setLineNumber(1274);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_requiredNames === undefined) raiseUninitializedVariable("requiredNames");
        var call1947 = request(var_requiredNames, "contains(1)", [1], var_methName);
        var call1946 = request(call1947, "not", [0]);
        if (Grace_isTrue(call1946)) {
          setLineNumber(1275);    // compilenode block
          var block1949 = new GraceBlock(this, 1275, 0);
          block1949.guard = jsTrue;
          block1949.real = function block1949() {
            setLineNumber(1275);    // compilenode array
            var array1951 = new GraceSequence([]);
            // call case 2: outer request
            var call1950 = selfRequest(var_prelude, "list(1)", [1], array1951);
            return call1950;
          };
          let applyMeth1949 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1949.methodName = "apply";
          applyMeth1949.paramCounts = [0];
          applyMeth1949.paramNames = [];
          applyMeth1949.definitionLine = 1275;
          applyMeth1949.definitionModule = "identifierresolution";
          block1949.methods["apply"] = applyMeth1949;
          // call case 6: other requests
          if (var_traitMethods === undefined) raiseUninitializedVariable("traitMethods");
          var call1948 = request(var_traitMethods, "at(1)ifAbsent(1)", [1, 1], var_methName, block1949);
          var var_definingTraits = call1948;
          setLineNumber(1276);    // compilenode call
          // call case 6: other requests
          if (var_definingTraits === undefined) raiseUninitializedVariable("definingTraits");
          var call1952 = request(var_definingTraits, "push(1)", [1], var_t);
          setLineNumber(1277);    // compilenode call
          if (var_definingTraits === undefined) raiseUninitializedVariable("definingTraits");
          // call case 6: other requests
          if (var_traitMethods === undefined) raiseUninitializedVariable("traitMethods");
          var call1953 = request(var_traitMethods, "at(1)put(1)", [1, 1], var_methName, var_definingTraits);
          if1945 = call1953;
        }
        return if1945;
      };
      let applyMeth1944 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1944.methodName = "apply(1)";
      applyMeth1944.paramCounts = [1];
      applyMeth1944.paramNames = ["methName"];
      applyMeth1944.definitionLine = 1273;
      applyMeth1944.definitionModule = "identifierresolution";
      block1944.methods["apply(1)"] = applyMeth1944;
      let matchesMeth1944 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1944.methodName = "matches(1)";
      matchesMeth1944.paramCounts = [1];
      matchesMeth1944.paramNames = ["methName"];
      matchesMeth1944.definitionLine = 1273;
      matchesMeth1944.definitionModule = "identifierresolution";
      block1944.methods["matches(1)"] = matchesMeth1944;
      // call case 6: other requests
      setLineNumber(1273);    // compilenode member
      // call case 6: other requests
      var call1954 = request(var_t, "providedNames", [0]);
      var call1943 = request(call1954, "do(1)", [1], block1944);
      return call1943;
    };
    let applyMeth1871 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1871.methodName = "apply(1)";
    applyMeth1871.paramCounts = [1];
    applyMeth1871.paramNames = ["t"];
    applyMeth1871.definitionLine = 1231;
    applyMeth1871.definitionModule = "identifierresolution";
    block1871.methods["apply(1)"] = applyMeth1871;
    let matchesMeth1871 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1871.methodName = "matches(1)";
    matchesMeth1871.paramCounts = [1];
    matchesMeth1871.paramNames = ["t"];
    matchesMeth1871.definitionLine = 1231;
    matchesMeth1871.definitionModule = "identifierresolution";
    block1871.methods["matches(1)"] = matchesMeth1871;
    // call case 6: other requests
    setLineNumber(1231);    // compilenode member
    // call case 6: other requests
    var call1955 = request(var_objNode, "usedTraits", [0]);
    var call1870 = request(call1955, "do(1)", [1], block1871);
    setLineNumber(1281);    // compilenode call
    // call case 2: outer request
    var call1956 = selfRequest(importedModules["identifierresolution"], "checkForConflicts(2)", [2], var_objNode, var_traitMethods);
    return call1956;
  };    // end of method gatherUsedNames(_)
  func1866.confidential = true;
  this.methods["gatherUsedNames(1)"] = func1866;
  func1866.methodName = "gatherUsedNames(1)";
  func1866.paramCounts = [1];
  func1866.paramNames = ["objNode"];
  func1866.definitionLine = 1225;
  func1866.definitionModule = "identifierresolution";
  var func1957 = function(argcv, var_objNode, var_traitMethods) {    // method checkForConflicts(_,_), line 1284
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("checkForConflicts(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1288);    // compilenode member
    // call case 2: outer request
    var call1958 = selfRequest(var_prelude, "emptyList", [0]);
    var var_conflicts = call1958;
    setLineNumber(1290);    // compilenode block
    var block1960 = new GraceBlock(this, 1290, 1);
    block1960.guard = jsTrue;
    block1960.real = function block1960(var_methName) {
      setLineNumber(1291);    // compilenode call
      // call case 6: other requests
      var call1961 = request(var_traitMethods, "at(1)", [1], var_methName);
      var var_sources = call1961;
      var if1962 = GraceDone;
      setLineNumber(1292);    // compilenode member
      // call case 6: other requests
      if (var_sources === undefined) raiseUninitializedVariable("sources");
      var call1963 = request(var_sources, "size", [0]);
      var opresult1964 = request(call1963, ">(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult1964)) {
        var if1965 = GraceDone;
        setLineNumber(1293);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call1968 = request(var_objNode, "localNames", [0]);
        var call1967 = request(call1968, "contains(1)", [1], var_methName);
        var call1966 = request(call1967, "not", [0]);
        if (Grace_isTrue(call1966)) {
          setLineNumber(1294);    // compilenode call
          if (var_sources === undefined) raiseUninitializedVariable("sources");
          // call case 2: outer request
          var call1970 = selfRequest(importedModules["identifierresolution"], "conflictForMethodName(1)from(1)", [1, 1], var_methName, var_sources);
          // call case 6: other requests
          if (var_conflicts === undefined) raiseUninitializedVariable("conflicts");
          var call1969 = request(var_conflicts, "addLast(1)", [1], call1970);
          if1965 = call1969;
        }
        if1962 = if1965;
      }
      return if1962;
    };
    let applyMeth1960 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1960.methodName = "apply(1)";
    applyMeth1960.paramCounts = [1];
    applyMeth1960.paramNames = ["methName"];
    applyMeth1960.definitionLine = 1290;
    applyMeth1960.definitionModule = "identifierresolution";
    block1960.methods["apply(1)"] = applyMeth1960;
    let matchesMeth1960 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1960.methodName = "matches(1)";
    matchesMeth1960.paramCounts = [1];
    matchesMeth1960.paramNames = ["methName"];
    matchesMeth1960.definitionLine = 1290;
    matchesMeth1960.definitionModule = "identifierresolution";
    block1960.methods["matches(1)"] = matchesMeth1960;
    // call case 6: other requests
    var call1959 = request(var_traitMethods, "keysDo(1)", [1], block1960);
    var if1971 = GraceDone;
    setLineNumber(1299);    // compilenode member
    // call case 6: other requests
    var call1972 = request(var_conflicts, "isEmpty", [0]);
    if (Grace_isTrue(call1972)) {
      return var_done;
    }
    setLineNumber(1301);    // compilenode num
    var var_maxSourceLine = new GraceNum(0);
    var if1973 = GraceDone;
    setLineNumber(1302);    // compilenode member
    // call case 6: other requests
    var call1974 = request(var_conflicts, "size", [0]);
    var opresult1975 = request(call1974, ">(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult1975)) {
      setLineNumber(1303);    // compilenode string
      var string1976 = new GraceString("trait conflicts found.\n    ");
      if1973 = string1976;
    } else {
      setLineNumber(1305);    // compilenode string
      var string1977 = new GraceString("trait conflict found. ");
      if1973 = string1977;
    }
    var var_message = if1973;
    setLineNumber(1307);    // compilenode block
    var block1979 = new GraceBlock(this, 1307, 1);
    block1979.guard = jsTrue;
    block1979.real = function block1979(var_each) {
      setLineNumber(1308);    // compilenode block
      var block1981 = new GraceBlock(this, 1308, 1);
      block1981.guard = jsTrue;
      block1981.real = function block1981(var_s) {
        setLineNumber(1308);    // compilenode member
        // call case 6: other requests
        var call1982 = request(var_s, "nameString", [0]);
        return call1982;
      };
      let applyMeth1981 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1981.methodName = "apply(1)";
      applyMeth1981.paramCounts = [1];
      applyMeth1981.paramNames = ["s"];
      applyMeth1981.definitionLine = 1308;
      applyMeth1981.definitionModule = "identifierresolution";
      block1981.methods["apply(1)"] = applyMeth1981;
      let matchesMeth1981 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1981.methodName = "matches(1)";
      matchesMeth1981.paramCounts = [1];
      matchesMeth1981.paramNames = ["s"];
      matchesMeth1981.definitionLine = 1308;
      matchesMeth1981.definitionModule = "identifierresolution";
      block1981.methods["matches(1)"] = matchesMeth1981;
      // call case 6: other requests
      // call case 6: other requests
      var call1983 = request(var_each, "sources", [0]);
      var call1980 = request(call1983, "map(1)", [1], block1981);
      var var_sourceList = call1980;
      setLineNumber(1309);    // compilenode block
      var block1985 = new GraceBlock(this, 1309, 2);
      block1985.guard = jsTrue;
      block1985.real = function block1985(var_a, var_s) {
        setLineNumber(1309);    // compilenode member
        // call case 6: other requests
        var call1987 = request(var_s, "line", [0]);
        // call case 2: outer request
        var call1986 = selfRequest(var_prelude, "max(2)", [2], var_a, call1987);
        return call1986;
      };
      let applyMeth1985 = function apply_2 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1985.methodName = "apply(2)";
      applyMeth1985.paramCounts = [2];
      applyMeth1985.paramNames = ["a", "s"];
      applyMeth1985.definitionLine = 1309;
      applyMeth1985.definitionModule = "identifierresolution";
      block1985.methods["apply(2)"] = applyMeth1985;
      let matchesMeth1985 = function matches_2 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1985.methodName = "matches(2)";
      matchesMeth1985.paramCounts = [2];
      matchesMeth1985.paramNames = ["a", "s"];
      matchesMeth1985.definitionLine = 1309;
      matchesMeth1985.definitionModule = "identifierresolution";
      block1985.methods["matches(2)"] = matchesMeth1985;
      if (var_maxSourceLine === undefined) raiseUninitializedVariable("maxSourceLine");
      // call case 6: other requests
      // call case 6: other requests
      var call1988 = request(var_each, "sources", [0]);
      var call1984 = request(call1988, "fold(1)startingWith(1)", [1, 1], block1985, var_maxSourceLine);
      var_maxSourceLine = call1984;
      setLineNumber(1311);    // compilenode op
      if (var_message === undefined) raiseUninitializedVariable("message");
      var string1989 = new GraceString("Method `");
      // call case 6: other requests
      var call1990 = request(var_each, "methodName", [0]);
      var opresult1991 = request(string1989, "++(1)", [1], call1990);
      var string1992 = new GraceString("` is defined in ");
      var opresult1993 = request(opresult1991, "++(1)", [1], string1992);
      var opresult1994 = request(var_message, "++(1)", [1], opresult1993);
      setLineNumber(1312);    // compilenode call
      if (var_sourceList === undefined) raiseUninitializedVariable("sourceList");
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call1995 = request(var_errormessages, "readableStringFrom(1)", [1], var_sourceList);
      var opresult1996 = request(opresult1994, "++(1)", [1], call1995);
      var string1997 = new GraceString(".\n    ");
      var opresult1998 = request(opresult1996, "++(1)", [1], string1997);
      var_message = opresult1998;
      return GraceDone;
    };
    let applyMeth1979 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1979.methodName = "apply(1)";
    applyMeth1979.paramCounts = [1];
    applyMeth1979.paramNames = ["each"];
    applyMeth1979.definitionLine = 1307;
    applyMeth1979.definitionModule = "identifierresolution";
    block1979.methods["apply(1)"] = applyMeth1979;
    let matchesMeth1979 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1979.methodName = "matches(1)";
    matchesMeth1979.paramCounts = [1];
    matchesMeth1979.paramNames = ["each"];
    matchesMeth1979.definitionLine = 1307;
    matchesMeth1979.definitionModule = "identifierresolution";
    block1979.methods["matches(1)"] = matchesMeth1979;
    // call case 6: other requests
    var call1978 = request(var_conflicts, "do(1)", [1], block1979);
    var if1999 = GraceDone;
    setLineNumber(1314);    // compilenode num
    var opresult2000 = request(var_maxSourceLine, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult2000)) {
      setLineNumber(1315);    // compilenode call
      if (var_message === undefined) raiseUninitializedVariable("message");
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2001 = request(var_errormessages, "error(1)", [1], var_message);
      if1999 = call2001;
    } else {
      setLineNumber(1317);    // compilenode call
      if (var_message === undefined) raiseUninitializedVariable("message");
      if (var_maxSourceLine === undefined) raiseUninitializedVariable("maxSourceLine");
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2002 = request(var_errormessages, "error(1)atLine(1)", [1, 1], var_message, var_maxSourceLine);
      if1999 = call2002;
    }
    return if1999;
  };    // end of method checkForConflicts(_,_)
  this.methods["checkForConflicts(2)"] = func1957;
  func1957.methodName = "checkForConflicts(2)";
  func1957.paramCounts = [2];
  func1957.paramNames = ["objNode", "traitMethods"];
  func1957.definitionLine = 1284;
  func1957.definitionModule = "identifierresolution";
  var func2003 = function(argcv, var_nm, var_srcs) {    // method conflictForMethodName(_)from(_), line 1321
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("conflictForMethodName(_)from(_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("conflictForMethodName(_)from(_)", "identifierresolution", 1321);
    var ouc_init = this.methods["conflictForMethodName(1)from(1)$build(3)"].call(this, null, var_nm, var_srcs, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method conflictForMethodName(_)from(_)
  this.methods["conflictForMethodName(1)from(1)"] = func2003;
  func2003.methodName = "conflictForMethodName(1)from(1)";
  func2003.paramCounts = [1, 1];
  func2003.paramNames = ["nm", "srcs"];
  func2003.definitionLine = 1321;
  func2003.definitionModule = "identifierresolution";
  var func2004 = function(argcv, var_nm, var_srcs, inheritingObject, aliases, exclusions) {    // method conflictForMethodName(_)from(_)$build(_,_,_), line 1321
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("conflictForMethodName(_)from(_)", 0, numArgs - 2);
    }
    var obj2005_build = function(ignore, var_nm, var_srcs, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_identifierresolution_1321");
      this.outer_identifierresolution_1321 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.methodName = undefined;
      var reader2006_methodName = function() {  // reader method methodName
          if (this.data.methodName === undefined) raiseUninitializedVariable("methodName");
          return this.data.methodName;
      };
      reader2006_methodName.isDef = true;
      this.methods["methodName"] = reader2006_methodName;
      this.data.sources = undefined;
      var reader2007_sources = function() {  // reader method sources
          if (this.data.sources === undefined) raiseUninitializedVariable("sources");
          return this.data.sources;
      };
      reader2007_sources.isDef = true;
      this.methods["sources"] = reader2007_sources;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 1321;
          m.definitionModule = "identifierresolution";
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
      var obj2005_init = function() {    // init of object on line 1321
        this.data.methodName = var_nm;
        this.data.sources = var_srcs;
      };
      return obj2005_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj2005_init = obj2005_build.call(inheritingObject, null, var_nm, var_srcs, this, aliases, exclusions);
    return obj2005_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method conflictForMethodName(_)from(_)$build(_,_,_)
  this.methods["conflictForMethodName(1)from(1)$build(3)"] = func2004;
  func2004.methodName = "conflictForMethodName(1)from(1)$build(3)";
  func2004.paramCounts = [1, 1];
  func2004.paramNames = ["nm", "srcs"];
  func2004.definitionLine = 1321;
  func2004.definitionModule = "identifierresolution";
  var func2008 = function(argcv, var_bindNode, var_anc) {    // method transformBind(_)ancestors(_), line 1326
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("transformBind(_)ancestors(_)", 0, numArgs - 2);
    }
    setLineNumber(1330);    // compilenode member
    // call case 6: other requests
    var call2009 = request(var_bindNode, "dest", [0]);
    var var_dest = call2009;
    setLineNumber(1331);    // compilenode member
    // call case 6: other requests
    var call2010 = request(var_bindNode, "scope", [0]);
    var var_currentScope = call2010;
    setLineNumber(1332);    // compilenode member
    // call case 6: other requests
    var call2012 = request(var_bindNode, "line", [0]);
    // call case 6: other requests
    var call2013 = request(var_bindNode, "linePos", [0]);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2011 = request(var_util, "setPosition(2)", [2], call2012, call2013);
    var if2014 = GraceDone;
    setLineNumber(1333);    // compilenode member
    // call case 6: other requests
    var call2015 = request(var_dest, "isMember", [0]);
    if (Grace_isTrue(call2015)) {
      setLineNumber(1334);    // compilenode member
      // call case 6: other requests
      if (var_dest === undefined) raiseUninitializedVariable("dest");
      var call2016 = request(var_dest, "nameString", [0]);
      var var_nm = call2016;
      setLineNumber(1335);    // compilenode op
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      var string2017 = new GraceString(":=");
      var opresult2018 = request(var_nm, "++(1)", [1], string2017);
      var var_nmGets = opresult2018;
      setLineNumber(1336);    // compilenode call
      if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
      // call case 6: other requests
      var call2021 = request(var_bindNode, "value", [0]);
      var array2020 = new GraceSequence([call2021]);
      if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call2022 = request(var_ast, "requestPart", [0]);
      var call2019 = request(call2022, "request(1)withArgs(1)scope(1)", [1, 1, 1], var_nmGets, array2020, var_currentScope);
      var var_part = call2019;
      setLineNumber(1338);    // compilenode member
      // call case 6: other requests
      if (var_dest === undefined) raiseUninitializedVariable("dest");
      var call2024 = request(var_dest, "receiver", [0]);
      if (var_part === undefined) raiseUninitializedVariable("part");
      var array2025 = new GraceSequence([var_part]);
      if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
      // call case 6: other requests
      // call case 6: other requests
      if (var_ast === undefined) raiseUninitializedVariable("ast");
      var call2026 = request(var_ast, "callNode", [0]);
      var call2023 = request(call2026, "new(2)scope(1)", [2, 1], call2024, array2025, var_currentScope);
      var var_newCall = call2023;
      setLineNumber(1339);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2029 = request(var_bindNode, "value", [0]);
      var call2028 = request(call2029, "end", [0]);
      // call case 6: other requests
      if (var_newCall === undefined) raiseUninitializedVariable("newCall");
      var call2027 = request(var_newCall, "end:=(1)", [1], call2028);
      var if2030 = GraceDone;
      setLineNumber(1340);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_dest === undefined) raiseUninitializedVariable("dest");
      var call2032 = request(var_dest, "receiver", [0]);
      var call2031 = request(call2032, "isSelfOrOuter", [0]);
      if (Grace_isTrue(call2031)) {
        setLineNumber(1341);    // compilenode member
        // call case 6: other requests
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        var call2033 = request(var_newCall, "onSelf", [0]);
        if2030 = call2033;
      }
      setLineNumber(1343);    // compilenode return
      if (var_newCall === undefined) raiseUninitializedVariable("newCall");
      return var_newCall;
    } else {
      var if2034 = GraceDone;
      setLineNumber(1344);    // compilenode member
      // call case 6: other requests
      if (var_dest === undefined) raiseUninitializedVariable("dest");
      var call2035 = request(var_dest, "isIdentifier", [0]);
      if (Grace_isTrue(call2035)) {
        setLineNumber(1345);    // compilenode member
        // call case 6: other requests
        if (var_dest === undefined) raiseUninitializedVariable("dest");
        var call2036 = request(var_dest, "nameString", [0]);
        var var_nm = call2036;
        setLineNumber(1346);    // compilenode op
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        var string2037 = new GraceString(":=(1)");
        var opresult2038 = request(var_nm, "++(1)", [1], string2037);
        var var_nmGets = opresult2038;
        var if2039 = GraceDone;
        setLineNumber(1347);    // compilenode call
        if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
        // call case 6: other requests
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        var call2040 = request(var_currentScope, "hasDefinitionInNest(1)", [1], var_nmGets);
        if (Grace_isTrue(call2040)) {
          var if2041 = GraceDone;
          setLineNumber(1348);    // compilenode call
          if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
          // call case 6: other requests
          if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
          var call2042 = request(var_currentScope, "kindInNest(1)", [1], var_nmGets);
          // call case 6: other requests
          if (var_k === undefined) raiseUninitializedVariable("k");
          var call2043 = request(var_k, "methdec", [0]);
          var opresult2044 = request(call2042, "==(1)", [1], call2043);
          if (Grace_isTrue(opresult2044)) {
            setLineNumber(1349);    // compilenode member
            // call case 6: other requests
            if (var_nmGets === undefined) raiseUninitializedVariable("nmGets");
            // call case 6: other requests
            if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
            var call2046 = request(var_currentScope, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_nmGets, var_bindNode);
            var call2045 = request(call2046, "receiver", [0]);
            var var_rcvr = call2045;
            setLineNumber(1350);    // compilenode op
            if (var_nm === undefined) raiseUninitializedVariable("nm");
            var string2048 = new GraceString(":=");
            var opresult2049 = request(var_nm, "++(1)", [1], string2048);
            setLineNumber(1351);    // compilenode member
            // call case 6: other requests
            var call2051 = request(var_bindNode, "value", [0]);
            var array2050 = new GraceSequence([call2051]);
            if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
            // call case 6: other requests
            setLineNumber(1350);    // compilenode member
            // call case 6: other requests
            if (var_ast === undefined) raiseUninitializedVariable("ast");
            var call2052 = request(var_ast, "requestPart", [0]);
            var call2047 = request(call2052, "request(1)withArgs(1)scope(1)", [1, 1, 1], opresult2049, array2050, var_currentScope);
            var var_part = call2047;
            setLineNumber(1352);    // compilenode member
            // call case 6: other requests
            if (var_rcvr === undefined) raiseUninitializedVariable("rcvr");
            if (var_part === undefined) raiseUninitializedVariable("part");
            var array2055 = new GraceSequence([var_part]);
            if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
            // call case 6: other requests
            // call case 6: other requests
            if (var_ast === undefined) raiseUninitializedVariable("ast");
            var call2056 = request(var_ast, "callNode", [0]);
            var call2054 = request(call2056, "new(2)scope(1)", [2, 1], var_rcvr, array2055, var_currentScope);
            var call2053 = request(call2054, "onSelf", [0]);
            var var_newCall = call2053;
            setLineNumber(1353);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2059 = request(var_bindNode, "value", [0]);
            var call2058 = request(call2059, "end", [0]);
            // call case 6: other requests
            if (var_newCall === undefined) raiseUninitializedVariable("newCall");
            var call2057 = request(var_newCall, "end:=(1)", [1], call2058);
            setLineNumber(1354);    // compilenode return
            if (var_newCall === undefined) raiseUninitializedVariable("newCall");
            return var_newCall;
          } else {
            setLineNumber(1356);    // compilenode string
            var string2061 = new GraceString("bind check 2 failed");
            // call case 6: other requests
            if (var_util === undefined) raiseUninitializedVariable("util");
            var call2060 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(20), string2061);
            if2041 = call2060;
          }
          if2039 = if2041;
        }
        if2034 = if2039;
      }
      if2014 = if2034;
    }
    return var_bindNode;
  };    // end of method transformBind(_)ancestors(_)
  this.methods["transformBind(1)ancestors(1)"] = func2008;
  func2008.methodName = "transformBind(1)ancestors(1)";
  func2008.paramCounts = [1, 1];
  func2008.paramNames = ["bindNode", "anc"];
  func2008.definitionLine = 1326;
  func2008.definitionModule = "identifierresolution";
  var func2062 = function(argcv, var_inhNode, var_anc) {    // method transformInherits(_)ancestors(_), line 1364
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("transformInherits(_)ancestors(_)", 0, numArgs - 2);
    }
    setLineNumber(1368);    // compilenode member
    // call case 6: other requests
    var call2063 = request(var_inhNode, "value", [0]);
    var var_superExpr = call2063;
    setLineNumber(1369);    // compilenode member
    // call case 6: other requests
    var call2064 = request(var_inhNode, "scope", [0]);
    var var_currentScope = call2064;
    var if2065 = GraceDone;
    setLineNumber(1370);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2067 = request(var_currentScope, "isObjectScope", [0]);
    var call2066 = request(call2067, "not", [0]);
    if (Grace_isTrue(call2066)) {
      setLineNumber(1371);    // compilenode string
      var string2069 = new GraceString("");
      // call case 6: other requests
      var call2070 = request(var_inhNode, "statementName", [0]);
      var opresult2071 = request(string2069, "++(1)", [1], call2070);
      var string2072 = new GraceString(" statements must be directly inside an object.");
      var opresult2073 = request(opresult2071, "++(1)", [1], string2072);
      setLineNumber(1372);    // compilenode member
      // call case 6: other requests
      var call2074 = request(var_inhNode, "range", [0]);
      // call case 6: other requests
      if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
      var call2068 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], opresult2073, call2074);
      if2065 = call2068;
    }
    var if2075 = GraceDone;
    setLineNumber(1374);    // compilenode member
    // call case 6: other requests
    var call2076 = request(var_superExpr, "isAppliedOccurrence", [0]);
    if (Grace_isTrue(call2076)) {
      setLineNumber(1375);    // compilenode member
      // call case 6: other requests
      if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
      var call2077 = request(var_superExpr, "nameString", [0]);
      var var_nm = call2077;
      setLineNumber(1376);    // compilenode call
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 6: other requests
      if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
      var call2078 = request(var_currentScope, "thatDefines(1)", [1], var_nm);
      var var_definingScope = call2078;
      var if2079 = GraceDone;
      setLineNumber(1377);    // compilenode op
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
      var opresult2080 = request(var_definingScope, "==(1)", [1], var_currentScope);
      if (Grace_isTrue(opresult2080)) {
        setLineNumber(1378);    // compilenode string
        var string2082 = new GraceString("the object being inherited must be from an enclosing scope.");
        setLineNumber(1379);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2083 = request(var_superExpr, "range", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call2081 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], string2082, call2083);
        if2079 = call2081;
      }
      var if2084 = GraceDone;
      setLineNumber(1381);    // compilenode call
      if (var_nm === undefined) raiseUninitializedVariable("nm");
      // call case 6: other requests
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      var call2085 = request(var_definingScope, "kind(1)", [1], var_nm);
      // call case 6: other requests
      if (var_k === undefined) raiseUninitializedVariable("k");
      var call2086 = request(var_k, "methdec", [0]);
      var opresult2087 = request(call2085, "\u2260(1)", [1], call2086);
      if (Grace_isTrue(opresult2087)) {
        setLineNumber(1382);    // compilenode string
        var string2089 = new GraceString("the object being inherited must be freshly generated from a method.");
        setLineNumber(1383);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2090 = request(var_superExpr, "range", [0]);
        // call case 6: other requests
        if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
        var call2088 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], string2089, call2090);
        if2084 = call2088;
      }
      setLineNumber(1385);    // compilenode member
      // call case 6: other requests
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      var call2091 = request(var_definingScope, "variety", [0]);
      var var_sv = call2091;
      var if2092 = GraceDone;
      setLineNumber(1386);    // compilenode op
      if (var_sv === undefined) raiseUninitializedVariable("sv");
      var string2093 = new GraceString("built-in");
      var opresult2094 = request(var_sv, "==(1)", [1], string2093);
      if (var_sv === undefined) raiseUninitializedVariable("sv");
      var string2095 = new GraceString("dialect");
      var opresult2096 = request(var_sv, "==(1)", [1], string2095);
      var opresult2097 = request(opresult2094, "||(1)", [1], opresult2096);
      if (Grace_isTrue(opresult2097)) {
        var if2098 = GraceDone;
        setLineNumber(1389);    // compilenode op
        if (var_sv === undefined) raiseUninitializedVariable("sv");
        var string2099 = new GraceString("built-in");
        var opresult2100 = request(var_sv, "==(1)", [1], string2099);
        if (Grace_isTrue(opresult2100)) {
          var string2101 = new GraceString("_prelude");
          if2098 = string2101;
        } else {
          setLineNumber(1390);    // compilenode string
          var string2102 = new GraceString("prelude");
          if2098 = string2102;
        }
        var var_preludeName = if2098;
        setLineNumber(1391);    // compilenode call
        if (var_preludeName === undefined) raiseUninitializedVariable("preludeName");
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2104 = request(var_ast, "identifierNode", [0]);
        var call2103 = request(call2104, "new(2)scope(1)", [2, 1], var_preludeName, GraceFalse, var_currentScope);
        var var_preludeNode = call2103;
        setLineNumber(1392);    // compilenode call
        if (var_preludeNode === undefined) raiseUninitializedVariable("preludeNode");
        setLineNumber(1393);    // compilenode call
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        var array2108 = new GraceSequence([]);
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2109 = request(var_ast, "requestPart", [0]);
        var call2107 = request(call2109, "request(1)withArgs(1)scope(1)", [1, 1, 1], var_nm, array2108, var_currentScope);
        setLineNumber(1394);    // compilenode string
        var string2111 = new GraceString("$object");
        setLineNumber(1395);    // compilenode string
        var string2114 = new GraceString("self");
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2115 = request(var_ast, "identifierNode", [0]);
        var call2113 = request(call2115, "new(2)scope(1)", [2, 1], string2114, GraceFalse, var_currentScope);
        var array2112 = new GraceSequence([call2113]);
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        setLineNumber(1394);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2116 = request(var_ast, "requestPart", [0]);
        var call2110 = request(call2116, "request(1)withArgs(1)scope(1)", [1, 1, 1], string2111, array2112, var_currentScope);
        var array2106 = new GraceSequence([call2107, call2110]);
        // call case 6: other requests
        setLineNumber(1392);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2117 = request(var_ast, "callNode", [0]);
        var call2105 = request(call2117, "new(2)", [2], var_preludeNode, array2106);
        var var_newCall = call2105;
        setLineNumber(1396);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2119 = request(var_superExpr, "end", [0]);
        // call case 6: other requests
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        var call2118 = request(var_newCall, "end:=(1)", [1], call2119);
        setLineNumber(1397);    // compilenode call
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        // call case 6: other requests
        var call2120 = request(var_inhNode, "value:=(1)", [1], var_newCall);
        if2092 = call2120;
      } else {
        setLineNumber(1399);    // compilenode string
        var string2122 = new GraceString("untransformed idfentifer `");
        if (var_nm === undefined) raiseUninitializedVariable("nm");
        var opresult2123 = request(string2122, "++(1)", [1], var_nm);
        var string2124 = new GraceString("` found ");
        var opresult2125 = request(opresult2123, "++(1)", [1], string2124);
        setLineNumber(1400);    // compilenode string
        var string2126 = new GraceString("in ");
        // call case 6: other requests
        var call2127 = request(var_inhNode, "statementName", [0]);
        var opresult2128 = request(string2126, "++(1)", [1], call2127);
        var string2129 = new GraceString(" statement on line ");
        var opresult2130 = request(opresult2128, "++(1)", [1], string2129);
        // call case 6: other requests
        var call2131 = request(var_inhNode, "line", [0]);
        var opresult2132 = request(opresult2130, "++(1)", [1], call2131);
        var string2133 = new GraceString("");
        var opresult2134 = request(opresult2132, "++(1)", [1], string2133);
        var opresult2135 = request(opresult2125, "++(1)", [1], opresult2134);
        // call case 6: other requests
        setLineNumber(1399);    // compilenode member
        // call case 2: outer request
        var call2136 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call2121 = request(call2136, "raise(1)", [1], opresult2135);
        if2092 = call2121;
      }
      if2075 = if2092;
    } else {
      var if2137 = GraceDone;
      setLineNumber(1402);    // compilenode member
      // call case 6: other requests
      if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
      var call2138 = request(var_superExpr, "isMember", [0]);
      if (Grace_isTrue(call2138)) {
        setLineNumber(1403);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2141 = request(var_inhNode, "value", [0]);
        var call2140 = request(call2141, "receiver", [0]);
        setLineNumber(1404);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2145 = request(var_inhNode, "value", [0]);
        var call2144 = request(call2145, "value", [0]);
        var array2146 = new GraceSequence([]);
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2147 = request(var_ast, "requestPart", [0]);
        var call2143 = request(call2147, "request(1)withArgs(1)scope(1)", [1, 1, 1], call2144, array2146, var_currentScope);
        setLineNumber(1405);    // compilenode string
        var string2149 = new GraceString("$object");
        setLineNumber(1406);    // compilenode string
        var string2152 = new GraceString("self");
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2153 = request(var_ast, "identifierNode", [0]);
        var call2151 = request(call2153, "new(2)scope(1)", [2, 1], string2152, GraceFalse, var_currentScope);
        var array2150 = new GraceSequence([call2151]);
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        setLineNumber(1405);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2154 = request(var_ast, "requestPart", [0]);
        var call2148 = request(call2154, "request(1)withArgs(1)scope(1)", [1, 1, 1], string2149, array2150, var_currentScope);
        var array2142 = new GraceSequence([call2143, call2148]);
        if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
        // call case 6: other requests
        setLineNumber(1403);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2155 = request(var_ast, "callNode", [0]);
        var call2139 = request(call2155, "new(2)scope(1)", [2, 1], call2140, array2142, var_currentScope);
        var var_newCall = call2139;
        setLineNumber(1408);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2157 = request(var_superExpr, "isSelfRequest", [0]);
        // call case 6: other requests
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        var call2156 = request(var_newCall, "isSelfRequest:=(1)", [1], call2157);
        setLineNumber(1409);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2159 = request(var_superExpr, "end", [0]);
        // call case 6: other requests
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        var call2158 = request(var_newCall, "end:=(1)", [1], call2159);
        setLineNumber(1410);    // compilenode call
        if (var_newCall === undefined) raiseUninitializedVariable("newCall");
        // call case 6: other requests
        var call2160 = request(var_inhNode, "value:=(1)", [1], var_newCall);
        if2137 = call2160;
      } else {
        var if2161 = GraceDone;
        setLineNumber(1411);    // compilenode member
        // call case 6: other requests
        if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
        var call2162 = request(var_superExpr, "isCall", [0]);
        if (Grace_isTrue(call2162)) {
          setLineNumber(1412);    // compilenode string
          var string2165 = new GraceString("$object");
          setLineNumber(1413);    // compilenode string
          var string2168 = new GraceString("self");
          if (var_currentScope === undefined) raiseUninitializedVariable("currentScope");
          // call case 6: other requests
          // call case 6: other requests
          if (var_ast === undefined) raiseUninitializedVariable("ast");
          var call2169 = request(var_ast, "identifierNode", [0]);
          var call2167 = request(call2169, "new(2)scope(1)", [2, 1], string2168, GraceFalse, var_currentScope);
          var array2166 = new GraceSequence([call2167]);
          // call case 6: other requests
          setLineNumber(1412);    // compilenode member
          // call case 6: other requests
          if (var_ast === undefined) raiseUninitializedVariable("ast");
          var call2170 = request(var_ast, "requestPart", [0]);
          var call2164 = request(call2170, "request(1)withArgs(1)", [1, 1], string2165, array2166);
          // call case 6: other requests
          // call case 6: other requests
          if (var_superExpr === undefined) raiseUninitializedVariable("superExpr");
          var call2171 = request(var_superExpr, "parts", [0]);
          var call2163 = request(call2171, "push(1)", [1], call2164);
          if2161 = call2163;
        } else {
          setLineNumber(1415);    // compilenode string
          var string2173 = new GraceString("inheritance must be from a freshly-created object.");
          setLineNumber(1416);    // compilenode member
          // call case 6: other requests
          var call2174 = request(var_inhNode, "range", [0]);
          // call case 6: other requests
          if (var_errormessages === undefined) raiseUninitializedVariable("errormessages");
          var call2172 = request(var_errormessages, "syntaxError(1)atRange(1)", [1, 1], string2173, call2174);
          if2161 = call2172;
        }
        if2137 = if2161;
      }
      if2075 = if2137;
    }
    return var_inhNode;
  };    // end of method transformInherits(_)ancestors(_)
  this.methods["transformInherits(1)ancestors(1)"] = func2062;
  func2062.methodName = "transformInherits(1)ancestors(1)";
  func2062.paramCounts = [1, 1];
  func2062.paramNames = ["inhNode", "anc"];
  func2062.definitionLine = 1364;
  func2062.definitionModule = "identifierresolution";
  var func2175 = function(argcv, var_cNode) {    // method transformCall(_), line 1421
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("transformCall(_)", 0, numArgs - 1);
    }
    setLineNumber(1422);    // compilenode member
    // call case 6: other requests
    var call2176 = request(var_cNode, "nameString", [0]);
    var var_methodName = call2176;
    setLineNumber(1423);    // compilenode vardec
    var var_result = var_cNode;
    setLineNumber(1424);    // compilenode member
    // call case 6: other requests
    var call2177 = request(var_cNode, "scope", [0]);
    var var_s = call2177;
    setLineNumber(1425);    // compilenode member
    // call case 6: other requests
    var call2178 = request(var_cNode, "receiver", [0]);
    var var_nominalRcvr = call2178;
    var if2179 = GraceDone;
    setLineNumber(1426);    // compilenode member
    // call case 6: other requests
    var call2180 = request(var_nominalRcvr, "isImplicit", [0]);
    if (Grace_isTrue(call2180)) {
      setLineNumber(1427);    // compilenode call
      if (var_methodName === undefined) raiseUninitializedVariable("methodName");
      // call case 6: other requests
      if (var_s === undefined) raiseUninitializedVariable("s");
      var call2181 = request(var_s, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_methodName, var_cNode);
      var var_rcvr = call2181;
      var if2182 = GraceDone;
      setLineNumber(1428);    // compilenode member
      // call case 6: other requests
      if (var_rcvr === undefined) raiseUninitializedVariable("rcvr");
      var call2183 = request(var_rcvr, "isIdentifier", [0]);
      if (Grace_isTrue(call2183)) {
        setLineNumber(1429);    // compilenode string
        var string2185 = new GraceString("Transformed ");
        // call case 6: other requests
        var call2186 = request(var_cNode, "pretty(1)", [1], new GraceNum(0));
        var opresult2187 = request(string2185, "++(1)", [1], call2186);
        var string2188 = new GraceString(" did nothing");
        var opresult2189 = request(opresult2187, "++(1)", [1], string2188);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call2184 = request(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult2189);
        setLineNumber(1421);    // compilenode member
        // call case 6: other requests
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var call2190 = request(var_ast, "AstNode", [0]);
        setLineNumber(1430);    // typecheck
        assertTypeOrMsg(var_cNode, call2190, "return value", "ast.AstNode");
        return var_cNode;
      }
      setLineNumber(1432);    // compilenode call
      if (var_methodName === undefined) raiseUninitializedVariable("methodName");
      // call case 6: other requests
      if (var_s === undefined) raiseUninitializedVariable("s");
      var call2191 = request(var_s, "thatDefines(1)", [1], var_methodName);
      var var_definingScope = call2191;
      setLineNumber(1433);    // compilenode call
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      setLineNumber(1434);    // compilenode call
      if (var_methodName === undefined) raiseUninitializedVariable("methodName");
      // call case 6: other requests
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      var call2193 = request(var_definingScope, "kind(1)", [1], var_methodName);
      // call case 2: outer request
      var call2192 = selfRequest(importedModules["identifierresolution"], "checkForAmbiguityOf(1)definedIn(1)asA(1)", [1, 1, 1], var_cNode, var_definingScope, call2193);
      setLineNumber(1435);    // compilenode member
      // call case 6: other requests
      if (var_rcvr === undefined) raiseUninitializedVariable("rcvr");
      var call2195 = request(var_rcvr, "receiver", [0]);
      // call case 6: other requests
      var call2194 = request(var_cNode, "receiver:=(1)", [1], call2195);
      setLineNumber(1436);    // compilenode member
      // call case 6: other requests
      var call2196 = request(var_cNode, "onSelf", [0]);
      var if2197 = GraceDone;
      setLineNumber(1437);    // compilenode call
      if (var_methodName === undefined) raiseUninitializedVariable("methodName");
      // call case 6: other requests
      if (var_definingScope === undefined) raiseUninitializedVariable("definingScope");
      var call2198 = request(var_definingScope, "kind(1)", [1], var_methodName);
      var string2199 = new GraceString("object");
      var opresult2200 = request(call2198, "==(1)", [1], string2199);
      if (Grace_isTrue(opresult2200)) {
        setLineNumber(1438);    // compilenode call
        // call case 6: other requests
        var call2201 = request(var_cNode, "isFresh:=(1)", [1], GraceTrue);
        if2197 = call2201;
      }
      if2179 = if2197;
    } else {
      var if2202 = GraceDone;
      setLineNumber(1440);    // compilenode member
      // call case 6: other requests
      if (var_nominalRcvr === undefined) raiseUninitializedVariable("nominalRcvr");
      var call2203 = request(var_nominalRcvr, "isOuter", [0]);
      // call case 6: other requests
      var call2204 = request(var_cNode, "nameString", [0]);
      var string2205 = new GraceString("outer");
      var opresult2206 = request(call2204, "==(1)", [1], string2205);
      var opresult2207 = request(call2203, "&&(1)", [1], opresult2206);
      if (Grace_isTrue(opresult2207)) {
        setLineNumber(1445);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        if (var_nominalRcvr === undefined) raiseUninitializedVariable("nominalRcvr");
        var call2209 = request(var_nominalRcvr, "theObjects", [0]);
        var call2208 = request(call2209, "last", [0]);
        var var_priorOuter = call2208;
        setLineNumber(1446);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        if (var_priorOuter === undefined) raiseUninitializedVariable("priorOuter");
        var call2213 = request(var_priorOuter, "scope", [0]);
        var call2212 = request(call2213, "parent", [0]);
        var call2211 = request(call2212, "enclosingObjectScope", [0]);
        var call2210 = request(call2211, "node", [0]);
        var var_newOuter = call2210;
        setLineNumber(1447);    // compilenode call
        if (var_newOuter === undefined) raiseUninitializedVariable("newOuter");
        // call case 6: other requests
        // call case 6: other requests
        if (var_nominalRcvr === undefined) raiseUninitializedVariable("nominalRcvr");
        var call2215 = request(var_nominalRcvr, "theObjects", [0]);
        var call2214 = request(call2215, "addLast(1)", [1], var_newOuter);
        setLineNumber(1448);    // compilenode bind
        if (var_nominalRcvr === undefined) raiseUninitializedVariable("nominalRcvr");
        var_result = var_nominalRcvr;
        if2202 = GraceDone;
      } else {
        var if2216 = GraceDone;
        setLineNumber(1450);    // compilenode member
        // call case 6: other requests
        var call2217 = request(var_cNode, "isTailCall", [0]);
        if (Grace_isTrue(call2217)) {
          setLineNumber(1451);    // compilenode call
          // call case 2: outer request
          var call2219 = selfRequest(importedModules["identifierresolution"], "callReturnsFreshObject(1)", [1], var_cNode);
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call2218 = request(var_result, "isFresh:=(1)", [1], call2219);
          if2216 = call2218;
        }
        if2202 = if2216;
      }
      if2179 = if2202;
    }
    setLineNumber(1421);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call2220 = request(var_ast, "AstNode", [0]);
    setLineNumber(1454);    // typecheck
    assertTypeOrMsg(var_result, call2220, "result of method transformCall(_)", "ast.AstNode");
    return var_result;
  };    // end of method transformCall(_)
  this.methods["transformCall(1)"] = func2175;
  func2175.methodName = "transformCall(1)";
  func2175.paramCounts = [1];
  func2175.paramNames = ["cNode"];
  func2175.definitionLine = 1421;
  func2175.definitionModule = "identifierresolution";
  var func2221 = function(argcv, var_cNode) {    // method callReturnsFreshObject(_), line 1457
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("callReturnsFreshObject(_)", 0, numArgs - 1);
    }
    setLineNumber(1458);    // compilenode member
    // call case 6: other requests
    var call2223 = request(var_cNode, "receiver", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call2224 = request(var_cNode, "scope", [0]);
    var call2222 = request(call2224, "receiverScope(1)", [1], call2223);
    var var_rcvrScope = call2222;
    setLineNumber(1459);    // compilenode member
    // call case 6: other requests
    var call2226 = request(var_cNode, "nameString", [0]);
    // call case 6: other requests
    var call2225 = request(var_rcvrScope, "getScope(1)", [1], call2226);
    var var_ansrScope = call2225;
    setLineNumber(1460);    // compilenode member
    // call case 6: other requests
    var call2227 = request(var_ansrScope, "isObjectScope", [0]);
    return call2227;
  };    // end of method callReturnsFreshObject(_)
  this.methods["callReturnsFreshObject(1)"] = func2221;
  func2221.methodName = "callReturnsFreshObject(1)";
  func2221.paramCounts = [1];
  func2221.paramNames = ["cNode"];
  func2221.definitionLine = 1457;
  func2221.definitionModule = "identifierresolution";
  var func2228 = function(argcv, var_moduleObject) {    // method resolve(_), line 1463
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("resolve(_)", 0, numArgs - 1);
    }
    setLineNumber(1464);    // compilenode string
    var string2230 = new GraceString("rewriting tree.");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2229 = request(var_util, "log_verbose(1)", [1], string2230);
    setLineNumber(1465);    // compilenode call
    // call case 2: outer request
    var call2231 = selfRequest(importedModules["identifierresolution"], "setupContext(1)", [1], var_moduleObject);
    setLineNumber(1466);    // compilenode num
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2232 = request(var_util, "setPosition(2)", [2], new GraceNum(0), new GraceNum(0));
    setLineNumber(1467);    // compilenode call
    if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
    // call case 6: other requests
    var call2233 = request(var_moduleObject, "scope:=(1)", [1], var_moduleScope);
    setLineNumber(1468);    // compilenode array
    var array2235 = new GraceSequence([var_moduleObject]);
    setLineNumber(1469);    // compilenode string
    var string2236 = new GraceString("prelude");
    if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
    // call case 6: other requests
    setLineNumber(1468);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call2237 = request(var_ast, "moduleNode", [0]);
    var call2234 = request(call2237, "body(1)named(1)scope(1)", [1, 1, 1], array2235, string2236, var_preludeScope);
    var var_preludeObject = call2234;
    setLineNumber(1470);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call2239 = request(var_ast, "ancestorChain", [0]);
    var call2238 = request(call2239, "with(1)", [1], var_preludeObject);
    var var_preludeChain = call2238;
    setLineNumber(1472);    // compilenode call
    // call case 2: outer request
    var call2240 = selfRequest(importedModules["identifierresolution"], "buildSymbolTableFor(1)ancestors(1)", [1, 1], var_moduleObject, var_preludeChain);
    setLineNumber(1473);    // compilenode string
    var string2242 = new GraceString("symbol tables built.");
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2241 = request(var_util, "log_verbose(1)", [1], string2242);
    var if2243 = GraceDone;
    setLineNumber(1475);    // compilenode member
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call2244 = request(var_util, "target", [0]);
    var string2245 = new GraceString("symbols");
    var opresult2246 = request(call2244, "==(1)", [1], string2245);
    if (Grace_isTrue(opresult2246)) {
      setLineNumber(1476);    // compilenode string
      var string2248 = new GraceString("=====================================");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2247 = request(var_util, "outprint(1)", [1], string2248);
      setLineNumber(1477);    // compilenode string
      var string2250 = new GraceString("module with symbol tables");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2249 = request(var_util, "outprint(1)", [1], string2250);
      setLineNumber(1478);    // compilenode string
      var string2252 = new GraceString("=====================================");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2251 = request(var_util, "outprint(1)", [1], string2252);
      setLineNumber(1479);    // compilenode string
      var string2254 = new GraceString("top-level");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2253 = request(var_util, "outprint(1)", [1], string2254);
      setLineNumber(1480);    // compilenode string
      var string2256 = new GraceString("Universal scope = ");
      // call case 6: other requests
      if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
      var call2257 = request(var_universalScope, "asDebugString", [0]);
      var opresult2258 = request(string2256, "++(1)", [1], call2257);
      var string2259 = new GraceString("");
      var opresult2260 = request(opresult2258, "++(1)", [1], string2259);
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2255 = request(var_util, "outprint(1)", [1], opresult2260);
      setLineNumber(1481);    // compilenode block
      var block2262 = new GraceBlock(this, 1481, 1);
      block2262.guard = jsTrue;
      block2262.real = function block2262(var_each) {
        setLineNumber(1482);    // compilenode member
        // call case 6: other requests
        var call2264 = request(var_each, "asString", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call2263 = request(var_util, "outprint(1)", [1], call2264);
        setLineNumber(1483);    // compilenode member
        // call case 6: other requests
        var call2266 = request(var_each, "elementScopesAsString", [0]);
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call2265 = request(var_util, "outprint(1)", [1], call2266);
        setLineNumber(1484);    // compilenode string
        var string2268 = new GraceString("----------------");
        // call case 6: other requests
        if (var_util === undefined) raiseUninitializedVariable("util");
        var call2267 = request(var_util, "outprint(1)", [1], string2268);
        return call2267;
      };
      let applyMeth2262 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2262.methodName = "apply(1)";
      applyMeth2262.paramCounts = [1];
      applyMeth2262.paramNames = ["each"];
      applyMeth2262.definitionLine = 1481;
      applyMeth2262.definitionModule = "identifierresolution";
      block2262.methods["apply(1)"] = applyMeth2262;
      let matchesMeth2262 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2262.methodName = "matches(1)";
      matchesMeth2262.paramCounts = [1];
      matchesMeth2262.paramNames = ["each"];
      matchesMeth2262.definitionLine = 1481;
      matchesMeth2262.definitionModule = "identifierresolution";
      block2262.methods["matches(1)"] = matchesMeth2262;
      // call case 6: other requests
      setLineNumber(1481);    // compilenode member
      // call case 6: other requests
      var call2269 = request(var_moduleObject, "scope", [0]);
      var call2261 = request(call2269, "withSurroundingScopesDo(1)", [1], block2262);
      setLineNumber(1486);    // compilenode num
      // call case 6: other requests
      var call2271 = request(var_moduleObject, "pretty(1)", [1], new GraceNum(0));
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2270 = request(var_util, "outprint(1)", [1], call2271);
      setLineNumber(1487);    // compilenode string
      var string2273 = new GraceString("done");
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2272 = request(var_util, "log_verbose(1)", [1], string2273);
      setLineNumber(1488);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call2275 = request(var_util, "outfile", [0]);
      var call2274 = request(call2275, "close", [0]);
      setLineNumber(1489);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call2276 = request(var_sys, "exit(1)", [1], new GraceNum(0));
      if2243 = call2276;
    }
    setLineNumber(1491);    // compilenode call
    // call case 2: outer request
    var call2277 = selfRequest(importedModules["identifierresolution"], "resolveIdentifiers(1)", [1], var_moduleObject);
    return call2277;
  };    // end of method resolve(_)
  this.methods["resolve(1)"] = func2228;
  func2228.methodName = "resolve(1)";
  func2228.paramCounts = [1];
  func2228.paramNames = ["moduleObject"];
  func2228.definitionLine = 1463;
  func2228.definitionModule = "identifierresolution";
  setLineNumber(11);    // compilenode string
  var string2279 = new GraceString("completed");
  // call case 6: other requests
  // call case 2: outer request
  var call2280 = selfRequest(var_prelude, "Singleton", [0]);
  var call2278 = request(call2280, "named(1)", [1], string2279);
  var var_completed = call2278;
  var reader2281_completed = function() {  // reader method completed
      if (var_completed === undefined) raiseUninitializedVariable("completed");
      return var_completed;
  };
  reader2281_completed.isDef = true;
  reader2281_completed.confidential = true;
  this.methods["completed"] = reader2281_completed;
  setLineNumber(12);    // compilenode string
  var string2283 = new GraceString("inProgress");
  // call case 6: other requests
  // call case 2: outer request
  var call2284 = selfRequest(var_prelude, "Singleton", [0]);
  var call2282 = request(call2284, "named(1)", [1], string2283);
  var var_inProgress = call2282;
  var reader2285_inProgress = function() {  // reader method inProgress
      if (var_inProgress === undefined) raiseUninitializedVariable("inProgress");
      return var_inProgress;
  };
  reader2285_inProgress.isDef = true;
  reader2285_inProgress.confidential = true;
  this.methods["inProgress"] = reader2285_inProgress;
  setLineNumber(13);    // compilenode string
  var string2287 = new GraceString("undiscovered");
  // call case 6: other requests
  // call case 2: outer request
  var call2288 = selfRequest(var_prelude, "Singleton", [0]);
  var call2286 = request(call2288, "named(1)", [1], string2287);
  var var_undiscovered = call2286;
  var reader2289_undiscovered = function() {  // reader method undiscovered
      if (var_undiscovered === undefined) raiseUninitializedVariable("undiscovered");
      return var_undiscovered;
  };
  reader2289_undiscovered.isDef = true;
  reader2289_undiscovered.confidential = true;
  this.methods["undiscovered"] = reader2289_undiscovered;
  setLineNumber(16);    // compilenode num
  var var_stSerial = new GraceNum(100);
  var reader2290_stSerial = function() {  // reader method stSerial
      if (var_stSerial === undefined) raiseUninitializedVariable("stSerial");
      return var_stSerial;
  };
  reader2290_stSerial.isVar = true;
  reader2290_stSerial.confidential = true;
  this.methods["stSerial"] = reader2290_stSerial;
  var writer2291_stSerial = function(argcv, n) {   // writer method stSerial:=(_)
    var_stSerial = n;
    return GraceDone;
  };
  writer2291_stSerial.confidential = true;
  this.methods["stSerial:=(1)"] = writer2291_stSerial;
  setLineNumber(18);    // compilenode string
  var string2293 = new GraceString("self");
  var string2294 = new GraceString("outer");
  var string2295 = new GraceString("true");
  var string2296 = new GraceString("false");
  var array2292 = new GraceSequence([string2293, string2294, string2295, string2296]);
  var var_reserved = array2292;
  var reader2297_reserved = function() {  // reader method reserved
      if (var_reserved === undefined) raiseUninitializedVariable("reserved");
      return var_reserved;
  };
  reader2297_reserved.isDef = true;
  reader2297_reserved.confidential = true;
  this.methods["reserved"] = reader2297_reserved;
  setLineNumber(28);    // compilenode block
  var block2298 = new GraceBlock(this, 28, 2);
  block2298.guard = jsTrue;
  block2298.real = function block2298(var_a, var_b) {
    setLineNumber(28);    // compilenode member
    // call case 6: other requests
    var call2300 = request(var_b, "key", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call2301 = request(var_a, "key", [0]);
    var call2299 = request(call2301, "compare(1)", [1], call2300);
    return call2299;
  };
  let applyMeth2298 = function apply_2 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth2298.methodName = "apply(2)";
  applyMeth2298.paramCounts = [2];
  applyMeth2298.paramNames = ["a", "b"];
  applyMeth2298.definitionLine = 28;
  applyMeth2298.definitionModule = "identifierresolution";
  block2298.methods["apply(2)"] = applyMeth2298;
  let matchesMeth2298 = function matches_2 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth2298.methodName = "matches(2)";
  matchesMeth2298.paramCounts = [2];
  matchesMeth2298.paramNames = ["a", "b"];
  matchesMeth2298.definitionLine = 28;
  matchesMeth2298.definitionModule = "identifierresolution";
  block2298.methods["matches(2)"] = matchesMeth2298;
  var var_keyOrdering = block2298;
  var reader2302_keyOrdering = function() {  // reader method keyOrdering
      if (var_keyOrdering === undefined) raiseUninitializedVariable("keyOrdering");
      return var_keyOrdering;
  };
  reader2302_keyOrdering.isDef = true;
  reader2302_keyOrdering.confidential = true;
  this.methods["keyOrdering"] = reader2302_keyOrdering;
  setLineNumber(471);    // compilenode string
  var string2304 = new GraceString("empty");
  // call case 2: outer request
  var call2303 = selfRequest(importedModules["identifierresolution"], "newScopeKind(1)", [1], string2304);
  var var_emptyScope = call2303;
  var reader2305_emptyScope = function() {  // reader method emptyScope
      if (var_emptyScope === undefined) raiseUninitializedVariable("emptyScope");
      return var_emptyScope;
  };
  reader2305_emptyScope.isDef = true;
  reader2305_emptyScope.confidential = true;
  this.methods["emptyScope"] = reader2305_emptyScope;
  setLineNumber(472);    // compilenode call
  if (var_emptyScope === undefined) raiseUninitializedVariable("emptyScope");
  // call case 6: other requests
  // call case 6: other requests
  var call2307 = request(var_ast, "nullNode", [0]);
  var call2306 = request(call2307, "scope:=(1)", [1], var_emptyScope);
  setLineNumber(473);    // compilenode call
  if (var_emptyScope === undefined) raiseUninitializedVariable("emptyScope");
  var string2309 = new GraceString("built-in");
  // call case 2: outer request
  var call2308 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_emptyScope, string2309);
  var var_builtInsScope = call2308;
  var reader2310_builtInsScope = function() {  // reader method builtInsScope
      if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
      return var_builtInsScope;
  };
  reader2310_builtInsScope.isDef = true;
  reader2310_builtInsScope.confidential = true;
  this.methods["builtInsScope"] = reader2310_builtInsScope;
  setLineNumber(474);    // compilenode call
  if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
  var string2312 = new GraceString("dialect");
  // call case 2: outer request
  var call2311 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_builtInsScope, string2312);
  var var_preludeScope = call2311;
  var reader2313_preludeScope = function() {  // reader method preludeScope
      if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
      return var_preludeScope;
  };
  reader2313_preludeScope.isDef = true;
  reader2313_preludeScope.confidential = true;
  this.methods["preludeScope"] = reader2313_preludeScope;
  setLineNumber(475);    // compilenode call
  if (var_preludeScope === undefined) raiseUninitializedVariable("preludeScope");
  var string2315 = new GraceString("module");
  // call case 2: outer request
  var call2314 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_preludeScope, string2315);
  var var_moduleScope = call2314;
  var reader2316_moduleScope = function() {  // reader method moduleScope
      if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
      return var_moduleScope;
  };
  reader2316_moduleScope.isDef = true;
  reader2316_moduleScope.confidential = true;
  this.methods["moduleScope"] = reader2316_moduleScope;
  setLineNumber(476);    // compilenode call
  if (var_emptyScope === undefined) raiseUninitializedVariable("emptyScope");
  var string2318 = new GraceString("object");
  // call case 2: outer request
  var call2317 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_emptyScope, string2318);
  var var_graceObjectScope = call2317;
  var reader2319_graceObjectScope = function() {  // reader method graceObjectScope
      if (var_graceObjectScope === undefined) raiseUninitializedVariable("graceObjectScope");
      return var_graceObjectScope;
  };
  reader2319_graceObjectScope.isDef = true;
  reader2319_graceObjectScope.confidential = true;
  this.methods["graceObjectScope"] = reader2319_graceObjectScope;
  setLineNumber(477);    // compilenode call
  if (var_builtInsScope === undefined) raiseUninitializedVariable("builtInsScope");
  var string2321 = new GraceString("object");
  // call case 2: outer request
  var call2320 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)", [1, 1], var_builtInsScope, string2321);
  var var_booleanScope = call2320;
  var reader2322_booleanScope = function() {  // reader method booleanScope
      if (var_booleanScope === undefined) raiseUninitializedVariable("booleanScope");
      return var_booleanScope;
  };
  reader2322_booleanScope.isDef = true;
  reader2322_booleanScope.confidential = true;
  this.methods["booleanScope"] = reader2322_booleanScope;
  setLineNumber(478);    // compilenode array
  var array2324 = new GraceSequence([]);
  // call case 2: outer request
  var call2323 = selfRequest(var_prelude, "list(1)", [1], array2324);
  var var_varFieldDecls = call2323;
  var reader2325_varFieldDecls = function() {  // reader method varFieldDecls
      if (var_varFieldDecls === undefined) raiseUninitializedVariable("varFieldDecls");
      return var_varFieldDecls;
  };
  reader2325_varFieldDecls.isDef = true;
  reader2325_varFieldDecls.confidential = true;
  this.methods["varFieldDecls"] = reader2325_varFieldDecls;
  setLineNumber(480);    // compilenode num
  // call case 6: other requests
  var call2326 = request(var_util, "setPosition(2)", [2], new GraceNum(0), new GraceNum(0));
  setLineNumber(481);    // compilenode string
  var string2328 = new GraceString("module()object");
  if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
  // call case 6: other requests
  // call case 6: other requests
  var call2329 = request(var_ast, "identifierNode", [0]);
  var call2327 = request(call2329, "new(2)scope(1)", [2, 1], string2328, GraceFalse, var_moduleScope);
  var var_thisModule = call2327;
  var reader2330_thisModule = function() {  // reader method thisModule
      if (var_thisModule === undefined) raiseUninitializedVariable("thisModule");
      return var_thisModule;
  };
  reader2330_thisModule.isDef = true;
  reader2330_thisModule.confidential = true;
  this.methods["thisModule"] = reader2330_thisModule;
  setLineNumber(486);    // compilenode string
  var string2332 = new GraceString("module()object");
  // call case 6: other requests
  var call2333 = request(var_k, "defdec", [0]);
  // call case 6: other requests
  if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
  var call2331 = request(var_moduleScope, "addName(1)asA(1)", [1, 1], string2332, call2333);
  setLineNumber(487);    // compilenode string
  var string2335 = new GraceString("module()object");
  if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
  // call case 6: other requests
  if (var_moduleScope === undefined) raiseUninitializedVariable("moduleScope");
  var call2334 = request(var_moduleScope, "at(1)putScope(1)", [1, 1], string2335, var_moduleScope);
  setLineNumber(489);    // compilenode object
  var obj2336_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_identifierresolution_489");
    this.outer_identifierresolution_489 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    setLineNumber(492);    // reuse call
    if (var_emptyScope === undefined) raiseUninitializedVariable("emptyScope");
    var string2337 = new GraceString("universal");
    var initFun2338 = selfRequest(importedModules["identifierresolution"], "newScopeIn(1)kind(1)$build(3)", [null], var_emptyScope, string2337, this, [], []);  // compileReuseCall
    var func2339 = function(argcv) {     // accessor method hasParent
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("hasParent", 0, numArgs - 0);
      return GraceFalse;
    };    // end of method hasParent
    this.methods["hasParent"] = func2339;
    func2339.methodName = "hasParent";
    func2339.paramCounts = [0];
    func2339.paramNames = [];
    func2339.definitionLine = 493;
    func2339.definitionModule = "identifierresolution";
    var func2340 = function(argcv) {    // method parent, line 494
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("parent", 0, numArgs - 0);
      }
      setLineNumber(494);    // compilenode string
      var string2342 = new GraceString("universal scope has no parent");
      // call case 6: other requests
      // call case 2: outer request
      var call2343 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call2341 = request(call2343, "raise(1)", [1], string2342);
      return call2341;
    };    // end of method parent
    this.methods["parent"] = func2340;
    func2340.methodName = "parent";
    func2340.paramCounts = [0];
    func2340.paramNames = [];
    func2340.definitionLine = 494;
    func2340.definitionModule = "identifierresolution";
    var func2344 = function(argcv, var_n) {    // method addName(_), line 495
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("addName(_)", 0, numArgs - 1);
      }
      setLineNumber(495);    // compilenode string
      var string2346 = new GraceString("can't add to the universal scope");
      // call case 6: other requests
      // call case 2: outer request
      var call2347 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call2345 = request(call2347, "raise(1)", [1], string2346);
      return call2345;
    };    // end of method addName(_)
    this.methods["addName(1)"] = func2344;
    func2344.methodName = "addName(1)";
    func2344.paramCounts = [1];
    func2344.paramNames = ["n"];
    func2344.definitionLine = 495;
    func2344.definitionModule = "identifierresolution";
    var func2348 = function(argcv, var_n, var_kd) {    // method addName(_)asA(_), line 496
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("addName(_)asA(_)", 0, numArgs - 2);
      }
      setLineNumber(496);    // compilenode string
      var string2350 = new GraceString("can't add to the universal scope");
      // call case 6: other requests
      // call case 2: outer request
      var call2351 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call2349 = request(call2351, "raise(1)", [1], string2350);
      return call2349;
    };    // end of method addName(_)asA(_)
    this.methods["addName(1)asA(1)"] = func2348;
    func2348.methodName = "addName(1)asA(1)";
    func2348.paramCounts = [1, 1];
    func2348.paramNames = ["n", "kd"];
    func2348.definitionLine = 496;
    func2348.definitionModule = "identifierresolution";
    var func2352 = function(argcv, var_n, var_kd) {    // method addNode(_)asA(_), line 497
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("addNode(_)asA(_)", 0, numArgs - 2);
      }
      setLineNumber(497);    // compilenode string
      var string2354 = new GraceString("can't add to the universal scope");
      // call case 6: other requests
      // call case 2: outer request
      var call2355 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call2353 = request(call2355, "raise(1)", [1], string2354);
      return call2353;
    };    // end of method addNode(_)asA(_)
    this.methods["addNode(1)asA(1)"] = func2352;
    func2352.methodName = "addNode(1)asA(1)";
    func2352.paramCounts = [1, 1];
    func2352.paramNames = ["n", "kd"];
    func2352.definitionLine = 497;
    func2352.definitionModule = "identifierresolution";
    var func2356 = function(argcv, var_n) {     // accessor method contains(_)
      const numArgs = arguments.length - 1;
      if (numArgs > 1) raiseTypeArgError("contains(_)", 0, numArgs - 1);
      return GraceTrue;
    };    // end of method contains(_)
    this.methods["contains(1)"] = func2356;
    func2356.methodName = "contains(1)";
    func2356.paramCounts = [1];
    func2356.paramNames = ["n"];
    func2356.definitionLine = 498;
    func2356.definitionModule = "identifierresolution";
    var func2357 = function(argcv, var_b) {    // method withSurroundingScopesDo(_), line 499
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("withSurroundingScopesDo(_)", 0, numArgs - 1);
      }
      setLineNumber(499);    // compilenode call
      // call case 6: other requests
      var call2358 = request(var_b, "apply(1)", [1], this);
      return call2358;
    };    // end of method withSurroundingScopesDo(_)
    this.methods["withSurroundingScopesDo(1)"] = func2357;
    func2357.methodName = "withSurroundingScopesDo(1)";
    func2357.paramCounts = [1];
    func2357.paramNames = ["b"];
    func2357.definitionLine = 499;
    func2357.definitionModule = "identifierresolution";
    var func2359 = function(argcv, var_n) {    // method kind(_), line 500
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("kind(_)", 0, numArgs - 1);
      }
      setLineNumber(500);    // compilenode string
      var string2360 = new GraceString("unknown");
      return string2360;
    };    // end of method kind(_)
    this.methods["kind(1)"] = func2359;
    func2359.methodName = "kind(1)";
    func2359.paramCounts = [1];
    func2359.paramNames = ["n"];
    func2359.definitionLine = 500;
    func2359.definitionModule = "identifierresolution";
    var func2361 = function(argcv, var_n, var_scp) {    // method at(_)putScope(_), line 501
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("at(_)putScope(_)", 0, numArgs - 2);
      }
      return GraceDone;
    };    // end of method at(_)putScope(_)
    this.methods["at(1)putScope(1)"] = func2361;
    func2361.methodName = "at(1)putScope(1)";
    func2361.paramCounts = [1, 1];
    func2361.paramNames = ["n", "scp"];
    func2361.definitionLine = 501;
    func2361.definitionModule = "identifierresolution";
    var func2362 = function(argcv, var_n) {     // accessor method getScope(_)
      const numArgs = arguments.length - 1;
      if (numArgs > 1) raiseTypeArgError("getScope(_)", 0, numArgs - 1);
      return this;
    };    // end of method getScope(_)
    this.methods["getScope(1)"] = func2362;
    func2362.methodName = "getScope(1)";
    func2362.paramCounts = [1];
    func2362.paramNames = ["n"];
    func2362.definitionLine = 502;
    func2362.definitionModule = "identifierresolution";
    var func2363 = function(argcv) {     // accessor method isUniversal
      const numArgs = arguments.length - 1;
      if (numArgs > 0) raiseTypeArgError("isUniversal", 0, numArgs - 0);
      return GraceTrue;
    };    // end of method isUniversal
    this.methods["isUniversal"] = func2363;
    func2363.methodName = "isUniversal";
    func2363.paramCounts = [0];
    func2363.paramNames = [];
    func2363.definitionLine = 503;
    func2363.definitionModule = "identifierresolution";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 489;
        m.definitionModule = "identifierresolution";
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
    var obj2336_init = function() {    // init of object on line 489
      initFun2338.call(this);
    };
    return obj2336_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj2336 = emptyGraceObject("universalScope", "identifierresolution", 489);
  var obj2336_init = obj2336_build.call(obj2336, null, this, [], []);
  obj2336_init.call(obj2336);  // end of compileobject
  var var_universalScope = obj2336;
  var reader2364_universalScope = function() {  // reader method universalScope
      if (var_universalScope === undefined) raiseUninitializedVariable("universalScope");
      return var_universalScope;
  };
  reader2364_universalScope.isDef = true;
  reader2364_universalScope.confidential = true;
  this.methods["universalScope"] = reader2364_universalScope;
  setLineNumber(802);    // compilenode vardec
  var var_isInBeginningStudentDialect = GraceFalse;
  var reader2365_isInBeginningStudentDialect = function() {  // reader method isInBeginningStudentDialect
      if (var_isInBeginningStudentDialect === undefined) raiseUninitializedVariable("isInBeginningStudentDialect");
      return var_isInBeginningStudentDialect;
  };
  reader2365_isInBeginningStudentDialect.isVar = true;
  reader2365_isInBeginningStudentDialect.confidential = true;
  this.methods["isInBeginningStudentDialect"] = reader2365_isInBeginningStudentDialect;
  var writer2366_isInBeginningStudentDialect = function(argcv, n) {   // writer method isInBeginningStudentDialect:=(_)
    var_isInBeginningStudentDialect = n;
    return GraceDone;
  };
  writer2366_isInBeginningStudentDialect.confidential = true;
  this.methods["isInBeginningStudentDialect:=(1)"] = writer2366_isInBeginningStudentDialect;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_identifierresolution = gracecode_identifierresolution;
if (typeof window !== "undefined")
  window.gracecode_identifierresolution = gracecode_identifierresolution;
gracecode_identifierresolution.imports = ["ast", "errormessages", "fastDict", "identifierKinds", "io", "mirrors", "standardGrace", "sys", "util", "xmodule"];
gracecode_identifierresolution.definitionModule = "identifierresolution";
gracecode_identifierresolution.definitionLine = 1;
