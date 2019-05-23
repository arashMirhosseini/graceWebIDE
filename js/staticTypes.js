if (typeof gctCache !== "undefined")
  gctCache["staticTypes"] = "classes:\nconfidential:\n ClassError\n DefError\n MethodError\n ObjectError\n RequestError\n TypeDeclarationError\n aMethodType\n aParam\n addVar(1)ofType(1)\n check(1)against(1)\n check(1)matches(1)inMethod(1)\n collectTypes(1)\n continue'(2)\n find(1)atScope(1)\n isMember(1)\n noSuchMethod\n objectType\n outerAt(1)\n processBody(1)\ndialect:\nfresh-methods:\n mixPartNamed(1)parameters(1)\nfresh:mixPartNamed(1)parameters(1):\n name\n parameters\nmethodtypes-of:MethodType:\n 1 isSpecialisationOf(other:MethodType) \u2192 Boolean\n 1 name \u2192 String\n 1 returnType \u2192 ObjectType\n 1 signature \u2192 List\u27e6MixPart\u27e7\nmethodtypes-of:MixPart:\n 1 name \u2192 String\n 1 parameters \u2192 List\u27e6Param\u27e7\nmethodtypes-of:ObjectType:\n 1 &(other:ObjectType) \u2192 ObjectType\n 1 getMethod(name:String) \u2192 MethodType | noSuchMethod\n 1 isSubtypeOf(other:ObjectType) \u2192 Boolean\n 1 isUnknown \u2192 Boolean\n 1 methods \u2192 List\u27e6MethodType\u27e7\n 1 |(other:ObjectType) \u2192 ObjectType\nmethodtypes-of:Param:\n 1 name \u2192 String\n 1 typeAnnotation \u2192 ObjectType\nmodules:\n ast\n collectionsPrelude\n dialect\n errormessages\n fastDict\n identifierKinds\n io\n standardGrace\n sys\n unixFilePath\n util\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/staticTypes.grace\npublic:\n AndPattern\n AndPattern(2)\n ArrayLiteral\n AstNode\n BaseType\n BasicPattern\n Bind\n Binding\n BlockLiteral\n BoundsError\n CheckerFailure\n Class\n Collection\n ConcurrentModification\n Def\n Dialect\n DialectError\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n ForRequest\n Function0\n Function1\n Function2\n Function3\n Generic\n Identifier\n If\n Import\n Inherit\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchCase\n Member\n Method\n MethodSignature\n MethodType\n MixPart\n NoSuchObject\n NotPattern(1)\n NumberLiteral\n ObjectLiteral\n ObjectType\n OctetsLiteral\n Operator\n OrPattern\n OrPattern(2)\n Outer\n Param\n Parameter\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n Request\n RequestError\n RequestOf(1)\n Return\n Sequence\n Set\n Singleton\n StringLiteral\n SubobjectResponsibility\n TryCatch\n TypeAnnotation\n TypeDeclaration\n TypeIntersection\n TypeLiteral\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n Var\n WhileRequest\n aMutableMap\n aPatternMatchingNode(1)\n abstract\n binding\n check(1)\n checkTypes(1)\n collection\n collections\n createSuggestion\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n fail(1)\n fail(1)at(1)\n fail(1)from(1)to(1)\n fail(1)from(1)to(1)suggest(1)\n fail(1)when(1)\n for(1)and(1)do(1)\n for(1)doWithBreak(1)\n for(1)doWithContinue(1)\n forBody(1)\n forCollection(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n mixPartNamed(1)parameters(1)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n rule(1)\n runRules(1)\n scope\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n thisDialect\n typeOf(1)\n valueOf(1)\n when(1)error(1)\n whileBody(1)\n whileCond(1)\npublicMethodTypes:\n for(a)doWithBreak(bl) \u2192 Done\n for(a)doWithContinue(bl) \u2192 Done\n mixPartNamed(name':String)parameters(parameters':List\u27e6Param\u27e7) \u2192 MixPart\n thisDialect \u2192 Unknown\ntypes:\n MethodType\n MixPart\n ObjectType\n Param\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["staticTypes"] = [
    "#pragma noTypeChecks",
    "dialect \"none\"",
    "import \"dialect\" as dia",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "",
    "inherit dia.methods",
    "",
    "type MethodType = {",
    "    // Method signature information consisting of the name, list of MixParts,",
    "    // return type and info on what types it specializes.",
    "    name -> String",
    "    signature -> List⟦MixPart⟧",
    "    returnType -> ObjectType",
    "    isSpecialisationOf (other: MethodType) -> Boolean",
    "}",
    "",
    "type Param = {",
    "    name -> String",
    "    typeAnnotation -> ObjectType",
    "}",
    "",
    "// factory method to create parameters with given name and type",
    "def aParam = object {",
    "    // create parameter with name': type'",
    "    class withName (name': String) ofType (type': ObjectType) -> Param {",
    "        def name: String is public = name'",
    "        def typeAnnotation: ObjectType is public = type'",
    "        method asString is override { \"{name}:{typeAnnotation}\" }",
    "    }",
    "",
    "    // create parameter with type', but use wildcard as name",
    "    method ofType (type': Object) -> Param {",
    "        withName \"_\" ofType (type')",
    "    }",
    "}",
    "",
    "type MixPart = {",
    "    name -> String",
    "    parameters -> List⟦Param⟧",
    "}",
    "",
    "// create a mixPart from name and list of parameters ",
    "class mixPartNamed (name': String)",
    "        parameters (parameters': List⟦Param⟧) -> MixPart {",
    "    def name: String is public = name'",
    "    def parameters: List⟦Param⟧ is public = parameters'",
    "}",
    "",
    "// A factory object to create method types",
    "def aMethodType = object {",
    "    // create method type from signature and return type",
    "    // The name is constructed by gluing together part names",
    "    class signature (signature': List⟦MixPart⟧)",
    "          returnType (rType: ObjectType)-> MethodType {",
    "        def signature: List⟦MixPart⟧ is public = signature'",
    "        def returnType: ObjectType is public = rType",
    "",
    "        var name: String is readable:= \"\"",
    "        var show: String:= \"\"",
    "",
    "        def fst = signature.at 1",
    "",
    "        if (fst.parameters.size == 0) then {",
    "            name := fst.name",
    "            show := name",
    "        } else {",
    "            signature.do { part ->",
    "                name:= \"{name}{part.name}(\"",
    "                show:= \"{show}{part.name}(\"",
    "                part.parameters.do { param ->",
    "                    show := show ++ param",
    "                    name := name ++ \"_\"",
    "                } separatedBy {",
    "                    show := show ++ \", \"",
    "                    name := name ++ \",\"",
    "                }",
    "                show := show ++ \")\"",
    "                name := name ++ \")\"",
    "            }",
    "        }",
    "",
    "        show := \"{show} -> {returnType}\"",
    "",
    "        // Determines if this method is a specialisation of the given one.",
    "        method isSpecialisationOf (other: MethodType) -> Boolean {",
    "            if (self.isMe(other)) then {",
    "                return true",
    "            }",
    "",
    "            if (name != other.name) then {",
    "                return false",
    "            }",
    "",
    "            if (other.signature.size != signature.size) then {",
    "                return false",
    "            }",
    "",
    "            prelude.for (signature) and (other.signature) do { part, part' ->",
    "                if (part.name != part'.name) then {",
    "                    return false",
    "                }",
    "",
    "                prelude.for (part.parameters) and (part'.parameters) do { p, p' ->",
    "                    def pt = p.typeAnnotation",
    "                    def pt' = p'.typeAnnotation",
    "",
    "                    // Contravariant in parameter types.",
    "                    if (pt'.isSubtypeOf (pt).not) then {",
    "                        return false",
    "                    }",
    "                }",
    "            }",
    "",
    "            return returnType.isSubtypeOf (other.returnType)",
    "        }",
    "",
    "        def asString: String is public, override = show",
    "    }",
    "",
    "    // create method type for methods without parameters",
    "    method member (name: String) ofType (rType: ObjectType) -> MethodType {",
    "        signature ([mixPartNamed (name) parameters [ ] ]) returnType (rType)",
    "    }",
    "",
    "    // create method type from a node",
    "    // Do obvious thing if method, class, or method signature",
    "    // If it is a def or var, create method to return value",
    "    method fromNode (node) -> MethodType {",
    "        match (node) case { meth: Method | Class | MethodSignature ->",
    "            def signature = list []",
    "",
    "            meth.signature.do { part ->",
    "                def params = list []",
    "",
    "                part.params.do { param ->",
    "                    params.push (aParam.withName (param.value)",
    "                        ofType (objectType.fromDType (param.dtype)))",
    "                }",
    "",
    "                signature.push (mixPartNamed (part.name) parameters (params))",
    "            }",
    "",
    "            def rType = match (meth) case { m: Method | Class ->",
    "                m.dtype",
    "            } case { m: MethodSignature ->",
    "                meth.rtype",
    "            } else { }",
    "",
    "            return signature (signature)",
    "                returnType (objectType.fromDType (rType))",
    "        } case { defd: Def | Var ->",
    "            def signature = [mixPartNamed (defd.name.value) parameters [ ] ]",
    "            def dtype = objectType.fromDType (defd.dtype)",
    "            return signature (signature) returnType (dtype)",
    "        } else {",
    "            prelude.Exception.raise \"unrecognised method node\" with (node)",
    "        }",
    "    }",
    "",
    "}",
    "",
    "",
    "// Object type information.",
    "",
    "def noSuchMethod = prelude.Singleton.named \"noSuchMethod\"",
    "",
    "type ObjectType = {",
    "    // return list of methods",
    "    methods -> List⟦MethodType⟧",
    "    // return method type matching name, if it exists",
    "    getMethod (name: String) -> MethodType | noSuchMethod",
    "    // return whether type is unknown",
    "    isUnknown -> Boolean",
    "    // return if type is subytpe of other",
    "    isSubtypeOf (other: ObjectType) -> Boolean",
    "    // create new types using |, &",
    "    |(other: ObjectType) -> ObjectType",
    "    &(other: ObjectType) -> ObjectType",
    "}",
    "",
    "// Factory for creating object types",
    "def objectType = object {",
    "",
    "    // return object type built from methods'",
    "    class fromMethods (methods': List⟦MethodType⟧) -> ObjectType {",
    "        def methods: List⟦MethodType⟧ is public = if (base == unknown)",
    "            then { list [] } else { base.methods } ++ methods'",
    "",
    "        method getMethod (name: String) -> MethodType | noSuchMethod {",
    "            methods.do { meth ->",
    "                if (meth.name == name) then {",
    "                    return meth",
    "                }",
    "            }",
    "",
    "            return noSuchMethod",
    "        }",
    "",
    "        def isUnknown: Boolean is public = false",
    "",
    "        // Necessary to prevent infinite loops of subtype testing.",
    "        def currentlyTesting = list []",
    "",
    "        method isSubtypeOf (other: ObjectType) -> Boolean {",
    "            if (self.isMe(other)) then {",
    "                return true",
    "            }",
    "",
    "            if (other.isUnknown) then {",
    "                return true",
    "            }",
    "",
    "            // If this test is already being performed, assume it succeeds.",
    "            if (currentlyTesting.contains (other)) then {",
    "                return true",
    "            }",
    "",
    "            currentlyTesting.push (other)",
    "",
    "            for (other.methods) doWithContinue { a, continue ->",
    "                methods.do { b ->",
    "                    if (b.isSpecialisationOf (a)) then {",
    "                        continue.apply",
    "                    }",
    "                }",
    "",
    "                currentlyTesting.pop",
    "                return false",
    "            }",
    "",
    "            currentlyTesting.pop",
    "            return true",
    "        }",
    "",
    "        method |(other: ObjectType) -> ObjectType {",
    "            if (self.isMe(other)) then { return self }",
    "            if (other.isUnknown) then { return unknown }",
    "",
    "            def combine = list []",
    "",
    "            for (methods) doWithContinue { meth, continue ->",
    "                other.methods.do { meth'->",
    "                    if (meth.name == meth'.name) then {",
    "                        if (meth.isSpecialisationOf (meth')) then {",
    "                            combine.push (meth)",
    "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
    "                            combine.push (meth')",
    "                        } else {",
    "                            TypeError.raise (\"cannot produce intersection of \" ++",
    "                                \"incompatible types '{self}' and '{other}'\")",
    "                        }",
    "",
    "                        continue.apply",
    "                    }",
    "                }",
    "            }",
    "",
    "            def hack = objectType",
    "            return object {",
    "                inherit hack.fromMethods (combine)",
    "",
    "                method asString -> String is override {",
    "                    \"{outer} | {other}\"",
    "                }",
    "            }",
    "        }",
    "",
    "        method &(other: ObjectType) -> ObjectType {",
    "            if (self.isMe(other)) then { return self }",
    "            if (other.isUnknown) then { return unknown }",
    "",
    "            def combine = list []",
    "            def twice = list []",
    "",
    "            for (methods) doWithContinue { meth, continue ->",
    "                other.methods.do { meth' ->",
    "                    if (meth.name == meth'.name) then {",
    "                        if (meth.isSpecialisationOf (meth')) then {",
    "                            combine.push (meth)",
    "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
    "                            combine.push (meth')",
    "                        } else {",
    "                            TypeError.raise (\"cannot produce union of \" ++",
    "                                \"incompatible types '{self}' and '{other}'\")",
    "                        }",
    "",
    "                        twice.push (meth.name)",
    "",
    "                        continue.apply",
    "                    }",
    "                }",
    "",
    "                combine.push (meth)",
    "            }",
    "",
    "            other.methods.do { meth ->",
    "                if (twice.contains (meth.name).not) then {",
    "                    combine.push (meth)",
    "                }",
    "            }",
    "",
    "            def hack = objectType",
    "            object {",
    "                inherit hack.fromMethods (combine)",
    "",
    "                method asString -> String is override {",
    "                    \"{outer} & {other}\"",
    "                }",
    "            }",
    "        }",
    "",
    "        method asString -> String is override {",
    "            if (methods.size == 3) then {",
    "                return \"Object\"",
    "            }",
    "",
    "            var out:= \"\\{ \"",
    "",
    "            methods.do { mtype ->",
    "                if ([\"!=\", \"≠\", \"asString\", \"asDebugString\", \"::\"].contains (mtype.name).not) then {",
    "                    out:= \"{out}{mtype}; \"",
    "                }",
    "            }",
    "",
    "            return \"{out}\\}\"",
    "        }",
    "    }",
    "",
    "    class fromMethods (methods': List⟦MethodType⟧)",
    "            withName (name: String) -> ObjectType {",
    "        inherit fromMethods (methods')",
    "        use identityEquality",
    "",
    "        method asString is override { name }",
    "    }",
    "",
    "    method fromDType (dtype) -> ObjectType {",
    "        match (dtype) case { (false) ->",
    "            unknown",
    "        } case { lit: TypeDeclaration ->",
    "//        TODO: re-write this code to understand the syntax of type expressions",
    "//          and type declarations, which are not the same!",
    "            return unknown",
    "            def intersection = lit.intersectionTypes",
    "            if (intersection.size > 1) then {",
    "                var oType:= fromDType (intersection.first)",
    "",
    "                for (2..(intersection.size - 1)) do { i ->",
    "                    oType:= oType & fromDType (intersection.at (i))",
    "                }",
    "",
    "                return if (false ≠ lit.value) then {",
    "                    object {",
    "//                        inherit oType & fromDType (intersection.last)",
    "                        inherit TypeIntersection.new (oType, fromDType (intersection.last))",
    "",
    "                        method asString is override { lit.value }",
    "                    }",
    "                } else {",
    "                    oType & fromDType (intersection.last)",
    "                }",
    "            }",
    "",
    "            def union = lit.unionTypes",
    "            if (union.size > 1) then {",
    "                var oType:= fromDType (union.first)",
    "",
    "                for (2..(union.size - 1)) do { i ->",
    "                    oType:= oType | fromDType (union.at (i))",
    "                }",
    "",
    "                return if (false ≠ lit.value) then {",
    "                    object {",
    "//                        inherit oType | fromDType (union.last)",
    "                        inherit TypeUnion.new (oType, fromDType (union.last))",
    "                        def asString: String is public, override = lit.value",
    "                    }",
    "                } else {",
    "                    oType | fromDType (union.last)",
    "                }",
    "            }",
    "",
    "            def meths = list []",
    "",
    "            lit.methods.do { mType ->",
    "                meths.push (aMethodType.fromNode (mType))",
    "            }",
    "",
    "            if ((lit.value != false) && { lit.value.at (1) != \"<\" }) then {",
    "                objectType.fromMethods (meths) withName (lit.value)",
    "            } else {",
    "                objectType.fromMethods (meths)",
    "            }",
    "        } case { ident: Identifier ->",
    "            objectType.fromIdentifier (ident)",
    "        } case { generic: Generic ->",
    "//            TODO: figure out what to do here!",
    "            objectType.fromIdentifier (generic.value)",
    "        } else {",
    "            ProgrammingError.raise \"No case for node of kind {dtype.kind}\" with (dtype)",
    "        }",
    "    }",
    "",
    "    method fromIdentifier (ident: Identifier) -> ObjectType {",
    "        scope.types.find (ident.value) butIfMissing { unknown }",
    "    }",
    "",
    "    method fromBlock (block) -> ObjectType {",
    "        def bType = typeOf (block)",
    "",
    "        if (bType.isUnknown) then { return unknown }",
    "",
    "        def apply = bType.getMethod \"apply\"",
    "",
    "        match (apply) case { (noSuchMethod) ->",
    "            TypeError.raise (\"the expression `{block.toGrace (0)}` of \" ++",
    "                \"type '{bType}' does not satisfy the type 'Procedure0'\") with (block)",
    "        } case { meth: MethodType ->",
    "            return meth.returnType",
    "        } else { }",
    "    }",
    "",
    "    method fromBlockBody (body) -> ObjectType {",
    "        if (body.size == 0) then {",
    "            objectType.done",
    "        } else {",
    "            typeOf (body.last)",
    "        }",
    "    }",
    "",
    "    def unknown:ObjectType is public = object {",
    "        use identityEquality",
    "        def methods is public = list []",
    "        method getMethod (_: String) -> noSuchMethod { noSuchMethod }",
    "        def isUnknown: Boolean is public = true",
    "        method isSubtypeOf (_: ObjectType) -> Boolean { true }",
    "        method |(_: ObjectType) -> unknown { unknown }",
    "        method &(_: ObjectType) -> unknown { unknown }",
    "        def asString: String is public, override = \"Unknown\"",
    "    }",
    "",
    "    method blockTaking (params: List⟦Parameter⟧)",
    "            returning (rType: ObjectType) -> ObjectType {",
    "        def signature = [mixPartNamed \"apply\" parameters (params)]",
    "        def meths = [aMethodType.signature (signature) returnType (rType)]",
    "",
    "        fromMethods (meths) withName \"Procedure0\"",
    "    }",
    "",
    "    method blockReturning (rType: ObjectType) -> ObjectType {",
    "        blockTaking [ ] returning (rType)",
    "    }",
    "",
    "    method addTo (oType: ObjectType) name (name': String)",
    "            returns (rType: ObjectType) -> Done is confidential {",
    "        def signature = [mixPartNamed (name') parameters (list [ ]) ]",
    "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
    "    }",
    "",
    "    method addTo (oType: ObjectType) name (name': String)",
    "            params (ptypes: prelude.Iterable⟦ObjectType⟧) returns (rType: ObjectType)",
    "            -> Done is confidential {",
    "        def parameters = list []",
    "        ptypes.do { ptype ->",
    "            parameters.push (aParam.ofType (ptype))",
    "        }",
    "",
    "        def signature = [mixPartNamed (name') parameters (parameters)]",
    "",
    "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
    "    }",
    "",
    "    method extend (this: ObjectType) with (that: ObjectType)",
    "            -> Done is confidential {",
    "        that.methods.do { mType ->",
    "            this.methods.push (mType)",
    "        }",
    "    }",
    "",
    "    var base: ObjectType is readable := unknown     // to avoid a circularity",
    "    def done: ObjectType is public = fromMethods (list [ ]) withName \"Done\"",
    "    base := fromMethods (list [ ]) withName \"Object\"",
    "",
    "    def pattern: ObjectType is public = fromMethods [ ] withName \"Pattern\"",
    "    def iterator: ObjectType is public = fromMethods [ ] withName \"Iterator\"",
    "    def binding: ObjectType is public = fromMethods [ ] withName \"Binding\"",
    "    def boolean: ObjectType is public = fromMethods [ ] withName \"Boolean\"",
    "    def number: ObjectType is public = fromMethods [ ] withName \"Number\"",
    "    def string: ObjectType is public = fromMethods [ ] withName \"String\"",
    "    def list: ObjectType is public = fromMethods [ ] withName \"List\"",
    "    def point: ObjectType is public = fromMethods [ ] withName \"Point\"",
    "",
    "    addTo (binding) name \"key\" returns (base)",
    "    addTo (binding) name \"value\" returns (base)",
    "",
    "    addTo (base) name \"≠(_)\" params [base] returns (boolean)",
    "    addTo (base) name \"asDebugString\" returns (string)",
    "    addTo (base) name \"asString\" returns (string)",
    "    addTo (base) name \"::(_)\" returns (binding)",
    "    addTo (base) name \"emptyList\" returns (list)",
    "",
    "    addTo (done) name \"asDebugString\" returns (string)",
    "    addTo (done) name \"asString\" returns (string)",
    "",
    "    extend (pattern) with (base)",
    "    addTo (pattern) name \"matches(_)\" params [base] returns (unknown)",
    "    addTo (pattern) name \"|(_)\" params [pattern] returns (pattern)",
    "    addTo (pattern) name \"&(_)\" params [pattern] returns (pattern)",
    "",
    "    extend (iterator) with (base)",
    "    addTo (iterator) name \"hasNext\" returns (boolean)",
    "    addTo (iterator) name \"next\" returns (unknown)",
    "",
    "    def shortCircuit = blockTaking ([aParam.ofType (blockReturning (unknown))])",
    "        returning (base)",
    "    extend (boolean) with (base)",
    "    addTo (boolean) name \"&&(_)\" params [boolean] returns (boolean)",
    "    addTo (boolean) name \"||(_)\" params [boolean] returns (boolean)",
    "    addTo (boolean) name \"prefix!\" returns (boolean)",
    "    addTo (boolean) name \"not\" returns (boolean)",
    "",
    "    extend (number) with (base)",
    "    addTo (number) name \"+(_)\" params [number] returns (number)",
    "    addTo (number) name \"*(_)\" params [number] returns (number)",
    "    addTo (number) name \"-(_)\" params [number] returns (number)",
    "    addTo (number) name \"/(_)\" params [number] returns (number)",
    "    addTo (number) name \"^(_)\" params [number] returns (number)",
    "    addTo (number) name \"%(_)\" params [number] returns (number)",
    "    addTo (number) name \"÷(_)\" params [number] returns (number)",
    "    addTo (number) name \"@(_)\" params [number] returns (point)",
    "    addTo (number) name \"hash\" returns (number)",
    "    addTo (number) name \"++(_)\" params [base] returns (string)",
    "    addTo (number) name \"<(_)\" params [number] returns (boolean)",
    "    addTo (number) name \">(_)\" params [number] returns (boolean)",
    "    addTo (number) name \"≤(_)\" params [number] returns (boolean)",
    "    addTo (number) name \"≥(_)\" params [number] returns (boolean)",
    "    addTo (number) name \"..(_)\" params [number] returns (list)",
    "    addTo (number) name \"asInteger32\" returns (number)",
    "    addTo (number) name \"prefix-\" returns (number)",
    "    addTo (number) name \"inBase(_)\" params [number] returns (number)",
    "    addTo (number) name \"truncated\" returns (number)",
    "    addTo (number) name \"rounded\" returns (number)",
    "    addTo (number) name \"prefix<\" returns (pattern)",
    "    addTo (number) name \"prefix>\" returns (pattern)",
    "",
    "    extend (point) with (base)",
    "    addTo (point) name \"x\" returns (number)",
    "    addTo (point) name \"y\" returns (number)",
    "",
    "    extend (string) with (base)",
    "    addTo (string) name \"++(_)\" params [base] returns (string)",
    "    addTo (string) name \"at(_)\" params [number] returns (string)",
    "    addTo (string) name \"iterator\" returns (base)",
    "    addTo (string) name \"quoted\" returns (string)",
    "    addTo (string) name \"size\" returns (number)",
    "    addTo (string) name \"iterator\" returns (iterator)",
    "    addTo (string) name \"ord\" returns (number)",
    "    addTo (string) name \"substringFrom(_)to(_)\" params [number, number] returns (string)",
    "    addTo (string) name \"replace()with(_)\" params [string, string] returns (string)",
    "    addTo (string) name \"hash\" returns (string)",
    "    addTo (string) name \"indices\" returns (list)",
    "    addTo (string) name \"asNumber\" returns (number)",
    "",
    "    def fold = blockTaking ([aParam.ofType (unknown), aParam.ofType (unknown)])",
    "        returning (unknown)",
    "    extend (list) with (base)",
    "    addTo (list) name \"at(_)\" params [number] returns (unknown)",
    "    addTo (list) name \"at(_)put(_)\" params [number, unknown] returns (done)",
    "    addTo (list) name \"push(_)\" params [unknown] returns (done)",
    "    addTo (list) name \"pop\" returns (unknown)",
    "    addTo (list) name \"size\" returns (number)",
    "    addTo (list) name \"iterator\" returns (iterator)",
    "    addTo (list) name \"contains(_)\" params [unknown] returns (boolean)",
    "    addTo (list) name \"indices\" returns (list)",
    "    addTo (list) name \"first\" returns (unknown)",
    "    addTo (list) name \"last\" returns (unknown)",
    "    addTo (list) name \"add(_)\" params [unknown] returns (list)",
    "    addTo (list) name \"addFirst(_)\" params [unknown] returns (list)",
    "    addTo (list) name \"addAll(_)\" params [unknown] returns (list)",
    "    addTo (list) name \"++(_)\" params [list] returns (list)",
    "    addTo (list) name \"fold(_)startingWith(_)\" params [fold, unknown] returns (unknown)",
    "",
    "    scope.types.at \"Unknown\" put (unknown)",
    "    scope.types.at \"Done\" put (done)",
    "    scope.types.at \"Object\" put (base)",
    "    scope.types.at \"Pattern\" put (pattern)",
    "    scope.types.at \"Boolean\" put (boolean)",
    "    scope.types.at \"Number\" put (number)",
    "    scope.types.at \"String\" put (string)",
    "    scope.types.at \"List\" put (list)",
    "    scope.types.at \"Point\" put (point)",
    "",
    "    addVar \"Unknown\" ofType (pattern)",
    "    addVar \"Dynamic\" ofType (pattern)",
    "    addVar \"Done\" ofType (pattern)",
    "    addVar \"Object\" ofType (pattern)",
    "    addVar \"Pattern\" ofType (pattern)",
    "    addVar \"Boolean\" ofType (pattern)",
    "    addVar \"Number\" ofType (pattern)",
    "    addVar \"String\" ofType (pattern)",
    "    addVar \"List\" ofType (pattern)",
    "    addVar \"Point\" ofType (pattern)",
    "",
    "    addVar \"done\" ofType (self.done)",
    "    addVar \"true\" ofType (boolean)",
    "    addVar \"false\" ofType (boolean)",
    "    addVar \"emptyList\" ofType (list)",
    "}",
    "",
    "method addVar (name: String) ofType (oType: ObjectType) is confidential {",
    "    scope.variables.at (name) put (oType)",
    "    scope.methods.at (name) put (aMethodType.member (name) ofType (oType))",
    "}",
    "",
    "",
    "// Object literals.",
    "",
    "def ObjectError = TypeError.refine \"ObjectError\"",
    "",
    "rule { obj: ObjectLiteral ->",
    "    scope.enter { processBody (obj.value) }",
    "}",
    "",
    "",
    "// Simple literals.",
    "",
    "rule { _: NumberLiteral | OctetsLiteral ->",
    "    objectType.number",
    "}",
    "",
    "rule { _: StringLiteral ->",
    "    objectType.string",
    "}",
    "",
    "rule { _: ArrayLiteral ->",
    "    objectType.list",
    "}",
    "",
    "",
    "// Method requests.",
    "",
    "def RequestError = TypeError.refine \"RequestError\"",
    "",
    "rule { req: Request ->",
    "    match (req.receiver)",
    "      case { innerReq: Request ->",
    "        def rec = innerReq.receiver",
    "        def rType = if (Identifier.match (rec) && (rec.value == \"self\")) then {",
    "            scope.types.find \"Self\" butIfMissing {",
    "                prelude.Exception.raise \"type of self missing\" with (rec)",
    "            }",
    "        } else {",
    "            typeOf (rec)",
    "        }",
    "",
    "        if (rType.isUnknown) then {",
    "            objectType.unknown",
    "        } else {",
    "            def name = innerReq.canonicalName",
    "",
    "            match (rType.getMethod (name))",
    "              case { (noSuchMethod) ->",
    "                RequestError.raise (\"no method `{name}` in \" ++",
    "                    \"`{rec.toGrace (0)}` of type `{rType}`\") with (innerReq)",
    "            } case { meth: MethodType ->",
    "                check (req) against (meth)",
    "            }",
    "        }",
    "    } case { ident: Identifier ->",
    "        find (req) atScope (scope.methods.stack.size)",
    "    } case { outerObj: Outer ->",
    "        objectType.unknown      // we should be able to do better than that!",
    "    } case { other: Object ->",
    "        print \"receiver {req} is not a Request, an Identifier or an Outer node\"",
    "        objectType.unknown",
    "    }",
    "}",
    "",
    "method check (req: Request)",
    "        against (meth: MethodType) -> ObjectType is confidential {",
    "    def name = meth.name",
    "",
    "    prelude.for (meth.signature) and (req.parts) do { part, args' ->",
    "        def params = part.parameters",
    "        def args   = args'.args",
    "",
    "        def pSize = params.size",
    "        def aSize = args.size",
    "",
    "        if (aSize != pSize) then {",
    "            def which = if (aSize > pSize) then { \"many\" } else { \"few\" }",
    "            def location = if (aSize > pSize) then {",
    "                args.at (pSize + 1)",
    "            } else {",
    "                // Can we get beyond the final argument?",
    "                req.value",
    "            }",
    "",
    "            RequestError",
    "                .raise (\"too {which} arguments to method part \" ++",
    "                    \"'{part.name}', expected {pSize} but got {aSize}\")",
    "                    with (location)",
    "        }",
    "",
    "        prelude.for (params) and (args) do { param, arg ->",
    "            def pType = param.typeAnnotation",
    "            def aType = typeOf (arg)",
    "",
    "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
    "                RequestError.raise (\"the expression \" ++",
    "                    \"`{arg.toGrace (0)}` of type '{aType}' does not \" ++",
    "                    \"satisfy the type of parameter '{param}' in the \" ++",
    "                    \"method '{name}'\") with (arg)",
    "            }",
    "        }",
    "    }",
    "",
    "    return meth.returnType",
    "}",
    "",
    "method find (req: Request) atScope (i: Number) -> ObjectType is confidential {",
    "    if (i == 0) then {",
    "        return objectType.unknown",
    "    }",
    "",
    "    def sType = objectType.fromMethods (scope.methods.stack.at (i).values)",
    "",
    "    return match (sType.getMethod (req.receiver.value)) case { (noSuchMethod) ->",
    "        find (req) atScope (i - 1)",
    "    } case { meth: MethodType ->",
    "        check (req) against (meth)",
    "    }",
    "}",
    "",
    "rule { memb: Member ->",
    "    typeOf (ast.callNode.new (memb, [object {",
    "        def name is public = memb.value",
    "        def args is public = []",
    "    }]))",
    "}",
    "",
    "rule { op: Operator ->",
    "    def rec = op.left",
    "    def rType = typeOf (rec)",
    "",
    "    if (rType.isUnknown) then {",
    "        objectType.unknown",
    "    } else {",
    "        def name = op.value",
    "",
    "        match (rType.getMethod (name)) case { (noSuchMethod) ->",
    "            RequestError.raise (\"no method '{name}' in \" ++",
    "                \"`{rec.toGrace (0)}` of type '{rType}'\") with (op)",
    "        } case { meth: MethodType ->",
    "            def arg = op.right",
    "            def params = meth.signature.first.parameters",
    "",
    "            if (params.size == 0) then {",
    "                RequestError.raise (\"the definition of operator \" ++",
    "                    \"`{name}` is missing its parameter\") with (op)",
    "            }",
    "",
    "            def param = params.first",
    "            def pType = param.typeAnnotation",
    "",
    "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
    "                RequestError.raise (\"the expression \" ++",
    "                    \"`{arg.toGrace 0}` does not satisfy the type of \" ++",
    "                    \"parameter `{param}` in the method `{name}`\") with (arg)",
    "            }",
    "",
    "            meth.returnType",
    "        }",
    "    }",
    "}",
    "",
    "",
    "// Special cases.",
    "",
    "rule { req: If ->",
    "    def cond = req.value",
    "    if (typeOf (cond).isSubtypeOf (objectType.boolean).not) then {",
    "        RequestError.raise (\"the condition `{cond.toGrace 0}` does not \" ++",
    "            \"conform to type `Boolean`.\") with (cond)",
    "    }",
    "",
    "    def then = objectType.fromBlock (req.thenblock)",
    "",
    "    def else = objectType.fromBlock (req.elseblock)",
    "",
    "    then | else",
    "}",
    "",
    "rule { req: MatchCase ->",
    "    def cases = req.cases",
    "    var union := done",
    "",
    "    cases.do { case ->",
    "        def cType = objectType.fromBlock (case)",
    "        union := if (done == union) then {",
    "            cType",
    "        } else {",
    "            union | cType",
    "        }",
    "    }",
    "    union",
    "}",
    "",
    "rule { req: TryCatch ->",
    "    match (req.value) case { bl: BlockLiteral ->",
    "        def params = bl.params",
    "        if (params.size > 0) then {",
    "            RequestError.raise \"too many parameters for try block\" with (bl)",
    "        }",
    "    }",
    "",
    "    req.cases.do { eachCase ->",
    "        match (eachCase) case { bl: BlockLiteral ->",
    "            def params = bl.params",
    "            if (params.size != 1) then {",
    "                def which = if (params.size == 0)",
    "                    then { \"not enough\" } else { \"too many\" }",
    "",
    "                RequestError.raise \"{which} parameters for catch block\" with (bl)",
    "            }",
    "        }",
    "    }",
    "",
    "    if (false ≠ req.finally) then {",
    "        match (req.finally) case { bl: BlockLiteral ->",
    "            def params = bl.params",
    "            if (params.size > 0) then {",
    "                RequestError.raise \"too many parameters to finally\" with (bl)",
    "            }",
    "        }",
    "    }",
    "",
    "    objectType.done",
    "}",
    "",
    "",
    "// Method declaration.",
    "",
    "def MethodError = TypeError.refine \"MethodError\"",
    "",
    "rule { meth: Method ->",
    "    def name = meth.value.value",
    "    def mType = aMethodType.fromNode (meth)",
    "    def returnType = mType.returnType",
    "",
    "    scope.enter {",
    "        meth.signature.do { part ->",
    "            part.params.do { param ->",
    "                scope.variables.at (param.value)",
    "                    put (objectType.fromDType (param.dtype))",
    "            }",
    "        }",
    "",
    "        collectTypes (meth.body)",
    "",
    "        meth.body.do { stmt ->",
    "            checkTypes (stmt)",
    "",
    "            stmt.accept (object {",
    "                inherit ast.baseVisitor",
    "",
    "                method visitReturn (ret) is override {",
    "                    check (ret.value) matches (returnType) inMethod (name)",
    "                    return false",
    "                }",
    "",
    "                method visitMethod (node) is override {",
    "                    false",
    "                }",
    "            })",
    "        }",
    "",
    "        if (meth.body.size == 0) then {",
    "            if (objectType.done.isSubtypeOf (returnType).not) then {",
    "                MethodError.raise (\"method `{name}` declares a \" ++",
    "                    \"result of type '{returnType}', but has no body\") with (meth)",
    "            }",
    "        } else {",
    "            def lastNode = meth.body.last",
    "            if (Return.match (lastNode).not) then {",
    "                def lastType = typeOf (lastNode)",
    "                if (lastType.isSubtypeOf (returnType).not) then {",
    "                    MethodError.raise (\"method `{name}` declares a \" ++",
    "                        \"result of type `{returnType}`, but returns an \" ++",
    "                        \"expression of type `{lastType}`\") with (lastNode)",
    "                }",
    "            }",
    "        }",
    "    }",
    "",
    "    if (isMember (mType)) then {",
    "        scope.variables.at (name) put (returnType)",
    "    }",
    "",
    "    scope.methods.at (name) put (mType)",
    "    objectType.done",
    "}",
    "",
    "method check (node) matches (eType: ObjectType)",
    "        inMethod (name: String) -> Done is confidential {",
    "    def aType = typeOf (node)",
    "    if (aType.isSubtypeOf (eType).not) then {",
    "        MethodError.raise (\"method `{name}` declares a result of \" ++",
    "            \"type `{eType}`, but returns an expression of type \" ++",
    "            \"`{aType}`\") with (node)",
    "    }",
    "}",
    "",
    "",
    "// Class declaration.",
    "",
    "def ClassError = TypeError.refine \"ClassError\"",
    "",
    "rule { cls: Class ->",
    "    def name = cls.name.value",
    "    def dType = objectType.fromDType (cls.dtype)",
    "    def cType = scope.enter {",
    "        cls.signature.do { part ->",
    "            part.params.do { param ->",
    "                scope.variables.at (param.value)",
    "                    put (objectType.fromDType (param.dtype))",
    "            }",
    "        }",
    "",
    "        def aType = processBody (cls.value)",
    "        if (aType.isUnknown) then {",
    "            objectType.unknown",
    "        } else {",
    "            if (aType.isSubtypeOf (dType).not) then {",
    "                ClassError.raise (\"class `{name}` declares a result \" ++",
    "                    \"of type `{dType}`, but constructs an object of type \" ++",
    "                    \"`{aType}`\") with (cls)",
    "            }",
    "",
    "            aType",
    "        }",
    "    }",
    "",
    "    scope.variables.at (name)",
    "        put (objectType.fromMethods ([aMethodType.fromNode (cls)]))",
    "",
    "    if (dType.isUnknown) then {",
    "        // Class type inference.",
    "        cType",
    "    } else {",
    "        dType",
    "    }",
    "}",
    "",
    "",
    "// Def and var declarations.",
    "",
    "def DefError = TypeError.refine \"DefError\"",
    "",
    "rule { defd: Def | Var ->",
    "    var defType:= objectType.fromDType (defd.dtype)",
    "",
    "    def value = defd.value",
    "",
    "    if (value != false) then {",
    "        def vType = typeOf (value)",
    "",
    "        if (defType.isUnknown && (defd.kind == \"defdec\")) then {",
    "            defType:= vType",
    "        }",
    "",
    "        if (vType.isSubtypeOf (defType).not) then {",
    "            DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
    "                \"`{vType}` does not satisfy the type of {defd.kind} \" ++",
    "                \"annotation `{defType}`\") with (value)",
    "        }",
    "    }",
    "",
    "    def name = defd.name.value",
    "    scope.variables.at (name) put (defType)",
    "",
    "    defd.annotations.do { ann ->",
    "        if (defd.isReadable) then {",
    "            scope.methods.at (name) put (aMethodType.member (name) ofType (defType))",
    "        }",
    "",
    "        if (defd.isWritable) then {",
    "            def name' = name ++ \":=\"",
    "            def param = aParam.withName (name) ofType (defType)",
    "            def sig = [mixPartNamed (name') parameters ([param])]",
    "",
    "            scope.methods.at (name')",
    "                put (aMethodType.signature (sig) returnType (objectType.done))",
    "        }",
    "    }",
    "    objectType.done",
    "}",
    "",
    "rule { bind: Bind ->",
    "    def dest = bind.dest",
    "    def dType = typeOf (dest)",
    "",
    "    def value = bind.value",
    "    def vType = typeOf (value)",
    "",
    "    if (vType.isSubtypeOf (dType).not) then {",
    "        DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
    "            \"`{vType}` does not satisfy the type `{dType}` of \" ++",
    "            \"`{dest.toGrace 0}`\") with (value)",
    "    }",
    "    objectType.done",
    "}",
    "",
    "",
    "// Import declarations.",
    "",
    "rule { imp: Import ->",
    "    scope.variables.at (imp.nameString) put (objectType.unknown)",
    "    objectType.done",
    "}",
    "",
    "",
    "// Block expressions.",
    "",
    "rule { block: BlockLiteral ->",
    "    def body = block.body",
    "",
    "    scope.enter {",
    "        block.params.do { param ->",
    "            scope.variables.at (param.value)",
    "                put (objectType.fromDType (param.dtype))",
    "        }",
    "",
    "        collectTypes (body)",
    "",
    "        body.do { stmt ->",
    "            checkTypes (stmt)",
    "        }",
    "    }",
    "",
    "    def parameters = list []",
    "    block.params.do { param ->",
    "        parameters.push (aParam.withName (param.value)",
    "            ofType (objectType.fromDType (param.dtype)))",
    "    }",
    "",
    "    objectType.blockTaking (parameters)",
    "        returning (objectType.fromBlockBody (body))",
    "}",
    "",
    "",
    "// Identifier references.",
    "",
    "rule { ident: Identifier ->",
    "    match (ident.value) case { \"outer\" ->",
    "        outerAt (scope.size)",
    "    } else {",
    "        scope.variables.find (ident.value) butIfMissing { objectType.unknown }",
    "    }",
    "}",
    "",
    "method outerAt (i: Number) -> ObjectType is confidential {",
    "    // Required to cope with not knowing the prelude.",
    "    if (i <= 1) then {",
    "        return objectType.unknown",
    "    }",
    "",
    "    def vStack = scope.variables.stack",
    "    def curr = vStack.at (i)",
    "",
    "    return curr.atKey \"outer\" do { t -> t } else {",
    "        def prev = outerAt (i - 1)",
    "",
    "        def mStack = scope.methods.stack",
    "",
    "        def vars = vStack.at (i - 1)",
    "        def meths = mStack.at (i - 1).values",
    "",
    "        def oType = objectType.fromMethods (meths)",
    "        def mType = aMethodType.member \"outer\" ofType (oType)",
    "",
    "        curr.at \"outer\" put (oType)",
    "        mStack.at (i).at \"outer\" put (mType)",
    "",
    "        oType",
    "    }",
    "}",
    "",
    "",
    "// Typing methods.",
    "",
    "method processBody (body: List) -> ObjectType is confidential {",
    "    // Collect the declarative types directly in the object body.",
    "    collectTypes (body)",
    "",
    "    // Inheritance typing.",
    "    def hasInherits = (body.size > 0) && { Inherit.match (body.first) }",
    "    def superType = if (hasInherits) then {",
    "        def inheriting = body.first.value",
    "        inheriting.accept (object {",
    "            inherit ast.baseVisitor",
    "",
    "            def illegal = [\"self\"]",
    "",
    "            method visitIdentifier (ident) {",
    "                if (illegal.contains (ident.value)) then {",
    "                    ObjectError.raise (\"reference to `{ident.value}` \" ++",
    "                        \"in inheritance clause\") with (ident)",
    "                }",
    "            }",
    "        })",
    "",
    "        typeOf (inheriting)",
    "    } else {",
    "        objectType.base",
    "    }",
    "",
    "    scope.variables.at \"super\" put (superType)",
    "",
    "    // If the super type is unknown, then we can't know anything about the",
    "    // self type.  TODO We actually can, because an object cannot have two",
    "    // methods with the same name.",
    "    def publicType = if (superType.isUnknown) then {",
    "        scope.types.at \"Self\" put (superType)",
    "        superType",
    "    } else {",
    "        // Collect the method types to add the two self types.",
    "        def publicMethods = list []",
    "        def allMethods = list []",
    "",
    "        body.do { stmt ->",
    "            match (stmt) case { meth: Method ->",
    "                def mType = aMethodType.fromNode (meth)",
    "                allMethods.push (mType)",
    "                if (meth.isPublic) then {",
    "                    publicMethods.push (mType)",
    "                }",
    "",
    "                scope.methods.at (mType.name) put (mType)",
    "                if (isMember (mType)) then {",
    "                    scope.variables.at (mType.name) put (mType.returnType)",
    "                }",
    "            } case { defd: Def | Var ->",
    "                if (defd.isPublic) then {",
    "                    def mType = aMethodType.fromNode (defd)",
    "                    allMethods.push (mType)",
    "                    publicMethods.push (mType)",
    "                }",
    "            } else { }",
    "        }",
    "",
    "        scope.types.at \"Self\" put (objectType.fromMethods (allMethods))",
    "        objectType.fromMethods (publicMethods)",
    "    }",
    "",
    "    scope.variables.at \"self\" put (publicType)",
    "",
    "    // Type-check the object body.",
    "    def indices = if (hasInherits) then {",
    "        2..body.size",
    "    } else {",
    "        body.indices",
    "    }",
    "",
    "    indices.do { i ->",
    "        checkTypes (body.at (i))",
    "    }",
    "",
    "    return publicType",
    "}",
    "",
    "",
    "def TypeDeclarationError = TypeError.refine \"TypeDeclarationError\"",
    "",
    "// The first pass over a body, collecting all type declarations so that they can",
    "// reference one another declaratively.",
    "method collectTypes (nodes: List) -> Done is confidential {",
    "    def names = list []",
    "    def types = list []",
    "    def placeholders = list []",
    "",
    "    nodes.do { node ->",
    "        match (node) case { td: TypeDeclaration ->",
    "            if (names.contains (td.nameString)) then {",
    "                TypeDeclarationError.raise (\"the type {td.nameString} uses \" ++",
    "                    \"the same name as another type in the same scope\") with (td)",
    "            }",
    "",
    "            names.push (td.value)",
    "",
    "            // In order to allow the types to be declarative, the scope needs",
    "            // to be populated by placeholder types first.",
    "            def placeholder = objectType.unknown",
    "            types.push (td)",
    "            placeholders.push (placeholder)",
    "            scope.types.at (td.nameString) put (placeholder)",
    "        } else { }",
    "    }",
    "",
    "    prelude.for (types) and (placeholders) do { td, ph ->",
    "        def oType = objectType.fromDType (td)",
    "        prelude.become (ph, oType)",
    "    }",
    "}",
    "",
    "",
    "// Determines if a method will be accessed as a member.",
    "method isMember (mType: MethodType) -> Boolean is confidential {",
    "    (mType.signature.size == 1) && {",
    "        mType.signature.first.parameters.size == 0",
    "    }",
    "}",
    "",
    "",
    "// Helper methods.",
    "",
    "",
    "// For loop with break.",
    "method for (a) doWithBreak (bl) -> Done {",
    "    a.do { e ->",
    "        bl.apply (e, {",
    "            return",
    "        })",
    "    }",
    "}",
    "",
    "// For loop with continue.",
    "method for (a) doWithContinue (bl) -> Done {",
    "    a.do { e ->",
    "        continue'(e, bl)",
    "    }",
    "}",
    "",
    "method continue'(e, bl) -> Done is confidential {",
    "    bl.apply (e, {",
    "        return",
    "    })",
    "}",
    "",
    "def thisDialect is public = object {",
    "    method astChecker (moduleObj) { check (moduleObj) }",
    "    method atStart { print \"module start\" }",
    "    method atEnd { print \"module end\" }",
    "}" ];
}
function gracecode_staticTypes() {
  importedModules["staticTypes"] = this;
  var module$staticTypes = this;
  this.definitionModule = "staticTypes";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_staticTypes_1");
  this.outer_staticTypes_1 = var_prelude;
  setLineNumber(3);    // compilenode import
  // Import of "dialect" as dia
  if (typeof gracecode_dialect == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module dialect"));
  var var_dia = do_import("dialect", gracecode_dialect);
  var func0 = function(argcv) {     // accessor method dia
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("dia", 0, numArgs - 0);
    if (var_dia === undefined) raiseUninitializedVariable("dia");
    return var_dia;
  };    // end of method dia
  this.methods["dia"] = func0;
  func0.methodName = "dia";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 3;
  func0.definitionModule = "staticTypes";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(4);    // compilenode import
  // Import of "ast" as ast
  if (typeof gracecode_ast == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module ast"));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {     // accessor method ast
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("ast", 0, numArgs - 0);
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    return var_ast;
  };    // end of method ast
  this.methods["ast"] = func1;
  func1.methodName = "ast";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 4;
  func1.definitionModule = "staticTypes";
  func1.debug = "import";
  func1.confidential = true;
  setLineNumber(5);    // compilenode import
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
  func2.definitionLine = 5;
  func2.definitionModule = "staticTypes";
  func2.debug = "import";
  func2.confidential = true;
  setLineNumber(7);    // reuse call
  var initFun3 = request(var_dia, "methods$build(3)", [null], this, [], []);  // compileReuseCall
  setLineNumber(9);    // compilenode typedec
  // Type decl MethodType
  var func5 = function(argcv) {    // method MethodType, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(9);    // compilenode typeliteral
    //   Type literal 
    var typeLit6 = new GraceType("MethodType");
    typeLit6.typeMethods.push("name");
    typeLit6.typeMethods.push("signature");
    typeLit6.typeMethods.push("returnType");
    typeLit6.typeMethods.push("isSpecialisationOf(1)");
    return typeLit6;
  };    // end of method MethodType
  function memofunc5(argcv) {
      if (! this.data["memo$MethodType"])    // parameterless memo function
          this.data["memo$MethodType"] = func5.call(this, argcv);
      return this.data["memo$MethodType"];
  };
  this.methods["MethodType"] = memofunc5;
  memofunc5.methodName = "MethodType";
  memofunc5.paramCounts = [0];
  memofunc5.paramNames = [];
  memofunc5.definitionLine = 1;
  memofunc5.definitionModule = "staticTypes";
  func5.methodName = "MethodType";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.definitionLine = 1;
  func5.definitionModule = "staticTypes";
  setLineNumber(18);    // compilenode typedec
  // Type decl Param
  var func8 = function(argcv) {    // method Param, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(18);    // compilenode typeliteral
    //   Type literal 
    var typeLit9 = new GraceType("Param");
    typeLit9.typeMethods.push("name");
    typeLit9.typeMethods.push("typeAnnotation");
    return typeLit9;
  };    // end of method Param
  function memofunc8(argcv) {
      if (! this.data["memo$Param"])    // parameterless memo function
          this.data["memo$Param"] = func8.call(this, argcv);
      return this.data["memo$Param"];
  };
  this.methods["Param"] = memofunc8;
  memofunc8.methodName = "Param";
  memofunc8.paramCounts = [0];
  memofunc8.paramNames = [];
  memofunc8.definitionLine = 1;
  memofunc8.definitionModule = "staticTypes";
  func8.methodName = "Param";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 1;
  func8.definitionModule = "staticTypes";
  setLineNumber(38);    // compilenode typedec
  // Type decl MixPart
  var func11 = function(argcv) {    // method MixPart, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(38);    // compilenode typeliteral
    //   Type literal 
    var typeLit12 = new GraceType("MixPart");
    typeLit12.typeMethods.push("name");
    typeLit12.typeMethods.push("parameters");
    return typeLit12;
  };    // end of method MixPart
  function memofunc11(argcv) {
      if (! this.data["memo$MixPart"])    // parameterless memo function
          this.data["memo$MixPart"] = func11.call(this, argcv);
      return this.data["memo$MixPart"];
  };
  this.methods["MixPart"] = memofunc11;
  memofunc11.methodName = "MixPart";
  memofunc11.paramCounts = [0];
  memofunc11.paramNames = [];
  memofunc11.definitionLine = 1;
  memofunc11.definitionModule = "staticTypes";
  func11.methodName = "MixPart";
  func11.paramCounts = [0];
  func11.paramNames = [];
  func11.definitionLine = 1;
  func11.definitionModule = "staticTypes";
  var func13 = function(argcv, var_name__39__, var_parameters__39__) {    // method mixPartNamed(_)parameters(_), line 44
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("mixPartNamed(_)parameters(_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("mixPartNamed(_)parameters(_)", "staticTypes", 44);
    var ouc_init = this.methods["mixPartNamed(1)parameters(1)$build(3)"].call(this, null, var_name__39__, var_parameters__39__, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method mixPartNamed(_)parameters(_)
  func13.paramTypes = [];
  func13.paramTypes.push([type_String, "name'"]);
  func13.paramTypes.push([]);
  this.methods["mixPartNamed(1)parameters(1)"] = func13;
  func13.methodName = "mixPartNamed(1)parameters(1)";
  func13.paramCounts = [1, 1];
  func13.paramNames = ["name'", "parameters'"];
  func13.definitionLine = 44;
  func13.definitionModule = "staticTypes";
  var func14 = function(argcv, var_name__39__, var_parameters__39__, inheritingObject, aliases, exclusions) {    // method mixPartNamed(_)parameters(_)$build(_,_,_), line 44
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("mixPartNamed(_)parameters(_)", 0, numArgs - 2);
    }
    var obj15_build = function(ignore, var_name__39__, var_parameters__39__, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_staticTypes_44");
      this.outer_staticTypes_44 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.name = undefined;
      var reader16_name = function() {  // reader method name
          if (this.data.name === undefined) raiseUninitializedVariable("name");
          return this.data.name;
      };
      reader16_name.isDef = true;
      this.methods["name"] = reader16_name;
      this.data.parameters = undefined;
      var reader17_parameters = function() {  // reader method parameters
          if (this.data.parameters === undefined) raiseUninitializedVariable("parameters");
          return this.data.parameters;
      };
      reader17_parameters.isDef = true;
      this.methods["parameters"] = reader17_parameters;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 44;
          m.definitionModule = "staticTypes";
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
      var obj15_init = function() {    // init of object on line 44
        this.data.name = var_name__39__;
        this.data.parameters = var_parameters__39__;
      };
      return obj15_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj15_init = obj15_build.call(inheritingObject, null, var_name__39__, var_parameters__39__, this, aliases, exclusions);
    return obj15_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method mixPartNamed(_)parameters(_)$build(_,_,_)
  func14.paramTypes = [];
  func14.paramTypes.push([type_String, "name'"]);
  func14.paramTypes.push([]);
  this.methods["mixPartNamed(1)parameters(1)$build(3)"] = func14;
  func14.methodName = "mixPartNamed(1)parameters(1)$build(3)";
  func14.paramCounts = [1, 1];
  func14.paramNames = ["name'", "parameters'"];
  func14.definitionLine = 44;
  func14.definitionModule = "staticTypes";
  setLineNumber(168);    // compilenode typedec
  // Type decl ObjectType
  var func19 = function(argcv) {    // method ObjectType, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(168);    // compilenode typeliteral
    //   Type literal 
    var typeLit20 = new GraceType("ObjectType");
    typeLit20.typeMethods.push("methods");
    typeLit20.typeMethods.push("getMethod(1)");
    typeLit20.typeMethods.push("isUnknown");
    typeLit20.typeMethods.push("isSubtypeOf(1)");
    typeLit20.typeMethods.push("|(1)");
    typeLit20.typeMethods.push("&(1)");
    return typeLit20;
  };    // end of method ObjectType
  function memofunc19(argcv) {
      if (! this.data["memo$ObjectType"])    // parameterless memo function
          this.data["memo$ObjectType"] = func19.call(this, argcv);
      return this.data["memo$ObjectType"];
  };
  this.methods["ObjectType"] = memofunc19;
  memofunc19.methodName = "ObjectType";
  memofunc19.paramCounts = [0];
  memofunc19.paramNames = [];
  memofunc19.definitionLine = 1;
  memofunc19.definitionModule = "staticTypes";
  func19.methodName = "ObjectType";
  func19.paramCounts = [0];
  func19.paramNames = [];
  func19.definitionLine = 1;
  func19.definitionModule = "staticTypes";
  var func21 = function(argcv, var_name, var_oType) {    // method addVar(_)ofType(_), line 611
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("addVar(_)ofType(_)", 0, numArgs - 2);
    }
    setLineNumber(612);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call24 = selfRequest(this, "scope", [0]);
    var call23 = request(call24, "variables", [0]);
    var call22 = request(call23, "at(1)put(1)", [1, 1], var_name, var_oType);
    setLineNumber(613);    // compilenode call
    // call case 6: other requests
    if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
    var call26 = request(var_aMethodType, "member(1)ofType(1)", [1, 1], var_name, var_oType);
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call28 = selfRequest(this, "scope", [0]);
    var call27 = request(call28, "methods", [0]);
    var call25 = request(call27, "at(1)put(1)", [1, 1], var_name, call26);
    return call25;
  };    // end of method addVar(_)ofType(_)
  func21.paramTypes = [];
  func21.paramTypes.push([type_String, "name"]);
  func21.paramTypes.push([]);
  func21.confidential = true;
  this.methods["addVar(1)ofType(1)"] = func21;
  func21.methodName = "addVar(1)ofType(1)";
  func21.paramCounts = [1, 1];
  func21.paramNames = ["name", "oType"];
  func21.definitionLine = 611;
  func21.definitionModule = "staticTypes";
  var func29 = function(argcv, var_req, var_meth) {    // method check(_)against(_), line 680
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("check(_)against(_)", 0, numArgs - 2);
    }
    setLineNumber(682);    // compilenode member
    // call case 6: other requests
    var call30 = request(var_meth, "name", [0]);
    var var_name = call30;
    setLineNumber(684);    // compilenode member
    // call case 6: other requests
    var call32 = request(var_meth, "signature", [0]);
    // call case 6: other requests
    var call33 = request(var_req, "parts", [0]);
    var block34 = new GraceBlock(this, 684, 2);
    block34.guard = jsTrue;
    block34.real = function block34(var_part, var_args__39__) {
      setLineNumber(685);    // compilenode member
      // call case 6: other requests
      var call35 = request(var_part, "parameters", [0]);
      var var_params = call35;
      setLineNumber(686);    // compilenode member
      // call case 6: other requests
      var call36 = request(var_args__39__, "args", [0]);
      var var_args = call36;
      setLineNumber(688);    // compilenode member
      // call case 6: other requests
      if (var_params === undefined) raiseUninitializedVariable("params");
      var call37 = request(var_params, "size", [0]);
      var var_pSize = call37;
      setLineNumber(689);    // compilenode member
      // call case 6: other requests
      if (var_args === undefined) raiseUninitializedVariable("args");
      var call38 = request(var_args, "size", [0]);
      var var_aSize = call38;
      var if39 = GraceDone;
      setLineNumber(691);    // compilenode op
      if (var_aSize === undefined) raiseUninitializedVariable("aSize");
      if (var_pSize === undefined) raiseUninitializedVariable("pSize");
      var opresult40 = request(var_aSize, "\u2260(1)", [1], var_pSize);
      if (Grace_isTrue(opresult40)) {
        var if41 = GraceDone;
        setLineNumber(692);    // compilenode op
        if (var_aSize === undefined) raiseUninitializedVariable("aSize");
        if (var_pSize === undefined) raiseUninitializedVariable("pSize");
        var opresult42 = request(var_aSize, ">(1)", [1], var_pSize);
        if (Grace_isTrue(opresult42)) {
          var string43 = new GraceString("many");
          if41 = string43;
        } else {
          var string44 = new GraceString("few");
          if41 = string44;
        }
        var var_which = if41;
        var if45 = GraceDone;
        setLineNumber(693);    // compilenode op
        if (var_aSize === undefined) raiseUninitializedVariable("aSize");
        if (var_pSize === undefined) raiseUninitializedVariable("pSize");
        var opresult46 = request(var_aSize, ">(1)", [1], var_pSize);
        if (Grace_isTrue(opresult46)) {
          setLineNumber(694);    // compilenode op
          if (var_pSize === undefined) raiseUninitializedVariable("pSize");
          var sum48 = request(var_pSize, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          if (var_args === undefined) raiseUninitializedVariable("args");
          var call47 = request(var_args, "at(1)", [1], sum48);
          if45 = call47;
        } else {
          setLineNumber(697);    // compilenode member
          // call case 6: other requests
          var call49 = request(var_req, "value", [0]);
          if45 = call49;
        }
        var var_location = if45;
        setLineNumber(701);    // compilenode string
        var string51 = new GraceString("too ");
        if (var_which === undefined) raiseUninitializedVariable("which");
        var opresult52 = request(string51, "++(1)", [1], var_which);
        var string53 = new GraceString(" arguments to method part ");
        var opresult54 = request(opresult52, "++(1)", [1], string53);
        setLineNumber(702);    // compilenode string
        var string55 = new GraceString("'");
        // call case 6: other requests
        var call56 = request(var_part, "name", [0]);
        var opresult57 = request(string55, "++(1)", [1], call56);
        var string58 = new GraceString("', expected ");
        var opresult59 = request(opresult57, "++(1)", [1], string58);
        if (var_pSize === undefined) raiseUninitializedVariable("pSize");
        var opresult60 = request(opresult59, "++(1)", [1], var_pSize);
        var string61 = new GraceString(" but got ");
        var opresult62 = request(opresult60, "++(1)", [1], string61);
        if (var_aSize === undefined) raiseUninitializedVariable("aSize");
        var opresult63 = request(opresult62, "++(1)", [1], var_aSize);
        var string64 = new GraceString("");
        var opresult65 = request(opresult63, "++(1)", [1], string64);
        var opresult66 = request(opresult54, "++(1)", [1], opresult65);
        if (var_location === undefined) raiseUninitializedVariable("location");
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call50 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult66, var_location);
        if39 = call50;
      }
      setLineNumber(706);    // compilenode call
      if (var_params === undefined) raiseUninitializedVariable("params");
      if (var_args === undefined) raiseUninitializedVariable("args");
      var block68 = new GraceBlock(this, 706, 2);
      block68.guard = jsTrue;
      block68.real = function block68(var_param, var_arg) {
        setLineNumber(707);    // compilenode member
        // call case 6: other requests
        var call69 = request(var_param, "typeAnnotation", [0]);
        var var_pType = call69;
        setLineNumber(708);    // compilenode call
        // call case 2: outer request
        var call70 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_arg);
        var var_aType = call70;
        var if71 = GraceDone;
        setLineNumber(710);    // compilenode member
        // call case 6: other requests
        if (var_pType === undefined) raiseUninitializedVariable("pType");
        // call case 6: other requests
        // call case 2: outer request
        var call74 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_arg);
        var call73 = request(call74, "isSubtypeOf(1)", [1], var_pType);
        var call72 = request(call73, "not", [0]);
        if (Grace_isTrue(call72)) {
          setLineNumber(711);    // compilenode string
          var string76 = new GraceString("the expression ");
          setLineNumber(712);    // compilenode string
          var string77 = new GraceString("`");
          // call case 6: other requests
          var call78 = request(var_arg, "toGrace(1)", [1], new GraceNum(0));
          var opresult79 = request(string77, "++(1)", [1], call78);
          var string80 = new GraceString("` of type '");
          var opresult81 = request(opresult79, "++(1)", [1], string80);
          if (var_aType === undefined) raiseUninitializedVariable("aType");
          var opresult82 = request(opresult81, "++(1)", [1], var_aType);
          var string83 = new GraceString("' does not ");
          var opresult84 = request(opresult82, "++(1)", [1], string83);
          var opresult85 = request(string76, "++(1)", [1], opresult84);
          setLineNumber(713);    // compilenode string
          var string86 = new GraceString("satisfy the type of parameter '");
          var opresult87 = request(string86, "++(1)", [1], var_param);
          var string88 = new GraceString("' in the ");
          var opresult89 = request(opresult87, "++(1)", [1], string88);
          var opresult90 = request(opresult85, "++(1)", [1], opresult89);
          setLineNumber(714);    // compilenode string
          var string91 = new GraceString("method '");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult92 = request(string91, "++(1)", [1], var_name);
          var string93 = new GraceString("'");
          var opresult94 = request(opresult92, "++(1)", [1], string93);
          var opresult95 = request(opresult90, "++(1)", [1], opresult94);
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call75 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult95, var_arg);
          if71 = call75;
        }
        return if71;
      };
      let applyMeth68 = function apply_2 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth68.methodName = "apply(2)";
      applyMeth68.paramCounts = [2];
      applyMeth68.paramNames = ["param", "arg"];
      applyMeth68.definitionLine = 706;
      applyMeth68.definitionModule = "staticTypes";
      block68.methods["apply(2)"] = applyMeth68;
      let matchesMeth68 = function matches_2 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth68.methodName = "matches(2)";
      matchesMeth68.paramCounts = [2];
      matchesMeth68.paramNames = ["param", "arg"];
      matchesMeth68.definitionLine = 706;
      matchesMeth68.definitionModule = "staticTypes";
      block68.methods["matches(2)"] = matchesMeth68;
      // call case 2: outer request
      var call67 = selfRequest(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], var_params, var_args, block68);
      return call67;
    };
    let applyMeth34 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth34.methodName = "apply(2)";
    applyMeth34.paramCounts = [2];
    applyMeth34.paramNames = ["part", "args'"];
    applyMeth34.definitionLine = 684;
    applyMeth34.definitionModule = "staticTypes";
    block34.methods["apply(2)"] = applyMeth34;
    let matchesMeth34 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth34.methodName = "matches(2)";
    matchesMeth34.paramCounts = [2];
    matchesMeth34.paramNames = ["part", "args'"];
    matchesMeth34.definitionLine = 684;
    matchesMeth34.definitionModule = "staticTypes";
    block34.methods["matches(2)"] = matchesMeth34;
    // call case 2: outer request
    var call31 = selfRequest(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call32, call33, block34);
    setLineNumber(719);    // compilenode member
    // call case 6: other requests
    var call96 = request(var_meth, "returnType", [0]);
    return call96;
  };    // end of method check(_)against(_)
  func29.confidential = true;
  this.methods["check(1)against(1)"] = func29;
  func29.methodName = "check(1)against(1)";
  func29.paramCounts = [1, 1];
  func29.paramNames = ["req", "meth"];
  func29.definitionLine = 680;
  func29.definitionModule = "staticTypes";
  var func97 = function(argcv, var_req, var_i) {    // method find(_)atScope(_), line 722
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("find(_)atScope(_)", 0, numArgs - 2);
    }
    var if98 = GraceDone;
    setLineNumber(723);    // compilenode num
    var opresult99 = request(var_i, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult99)) {
      setLineNumber(724);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call100 = request(var_objectType, "unknown", [0]);
      return call100;
    }
    setLineNumber(727);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call106 = selfRequest(this, "scope", [0]);
    var call105 = request(call106, "methods", [0]);
    var call104 = request(call105, "stack", [0]);
    var call103 = request(call104, "at(1)", [1], var_i);
    var call102 = request(call103, "values", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call101 = request(var_objectType, "fromMethods(1)", [1], call102);
    var var_sType = call101;
    setLineNumber(729);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call110 = request(var_req, "receiver", [0]);
    var call109 = request(call110, "value", [0]);
    // call case 6: other requests
    var call108 = request(var_sType, "getMethod(1)", [1], call109);
    var cases107 = [];
    var block111 = new GraceBlock(this, 729, 1);
    if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
    block111.paramTypes = [var_noSuchMethod];
    var matches112 = function(var___95____95__11) {
      if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
      if (!Grace_isTrue(request(var_noSuchMethod, "matches(1)", [1], var___95____95__11)))
          return false;
      return true;
    };
    block111.guard = matches112;
    block111.real = function block111(var___95____95__11) {
      setLineNumber(730);    // compilenode num
      var diff114 = request(var_i, "-(1)", [1], new GraceNum(1));
      // call case 2: outer request
      var call113 = selfRequest(importedModules["staticTypes"], "find(1)atScope(1)", [1, 1], var_req, diff114);
      return call113;
    };
    let applyMeth111 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth111.methodName = "apply(1)";
    applyMeth111.paramCounts = [1];
    applyMeth111.paramNames = ["__11"];
    applyMeth111.definitionLine = 729;
    applyMeth111.definitionModule = "staticTypes";
    block111.methods["apply(1)"] = applyMeth111;
    let matchesMeth111 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth111.methodName = "matches(1)";
    matchesMeth111.paramCounts = [1];
    matchesMeth111.paramNames = ["__11"];
    matchesMeth111.definitionLine = 729;
    matchesMeth111.definitionModule = "staticTypes";
    block111.methods["matches(1)"] = matchesMeth111;
    cases107.push(block111);
    setLineNumber(731);    // compilenode block
    var block115 = new GraceBlock(this, 731, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call116 = selfRequest(this, "MethodType", [0]);
    block115.paramTypes = [call116];
    var matches117 = function(var_meth) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call118 = selfRequest(this, "MethodType", [0]);
      if (!Grace_isTrue(request(call118, "matches(1)", [1], var_meth)))
          return false;
      return true;
    };
    block115.guard = matches117;
    block115.real = function block115(var_meth) {
      setLineNumber(732);    // compilenode call
      // call case 2: outer request
      var call119 = selfRequest(importedModules["staticTypes"], "check(1)against(1)", [1, 1], var_req, var_meth);
      return call119;
    };
    let applyMeth115 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth115.methodName = "apply(1)";
    applyMeth115.paramCounts = [1];
    applyMeth115.paramNames = ["meth"];
    applyMeth115.definitionLine = 731;
    applyMeth115.definitionModule = "staticTypes";
    block115.methods["apply(1)"] = applyMeth115;
    let matchesMeth115 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth115.methodName = "matches(1)";
    matchesMeth115.paramCounts = [1];
    matchesMeth115.paramNames = ["meth"];
    matchesMeth115.definitionLine = 731;
    matchesMeth115.definitionModule = "staticTypes";
    block115.methods["matches(1)"] = matchesMeth115;
    cases107.push(block115);
    setLineNumber(729);    // compilematchcase
    var matchres107 = matchCase(call108,cases107,false);
    return matchres107;
  };    // end of method find(_)atScope(_)
  func97.paramTypes = [];
  func97.paramTypes.push([]);
  func97.paramTypes.push([type_Number, "i"]);
  func97.confidential = true;
  this.methods["find(1)atScope(1)"] = func97;
  func97.methodName = "find(1)atScope(1)";
  func97.paramCounts = [1, 1];
  func97.paramNames = ["req", "i"];
  func97.definitionLine = 722;
  func97.definitionModule = "staticTypes";
  var func120 = function(argcv, var_node, var_eType, var_name) {    // method check(_)matches(_)inMethod(_), line 905
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("check(_)matches(_)inMethod(_)", 0, numArgs - 3);
    }
    setLineNumber(907);    // compilenode call
    // call case 2: outer request
    var call121 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_node);
    var var_aType = call121;
    var if122 = GraceDone;
    setLineNumber(908);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call124 = request(var_aType, "isSubtypeOf(1)", [1], var_eType);
    var call123 = request(call124, "not", [0]);
    if (Grace_isTrue(call123)) {
      setLineNumber(909);    // compilenode string
      var string126 = new GraceString("method `");
      var opresult127 = request(string126, "++(1)", [1], var_name);
      var string128 = new GraceString("` declares a result of ");
      var opresult129 = request(opresult127, "++(1)", [1], string128);
      setLineNumber(910);    // compilenode string
      var string130 = new GraceString("type `");
      var opresult131 = request(string130, "++(1)", [1], var_eType);
      var string132 = new GraceString("`, but returns an expression of type ");
      var opresult133 = request(opresult131, "++(1)", [1], string132);
      var opresult134 = request(opresult129, "++(1)", [1], opresult133);
      setLineNumber(911);    // compilenode string
      var string135 = new GraceString("`");
      if (var_aType === undefined) raiseUninitializedVariable("aType");
      var opresult136 = request(string135, "++(1)", [1], var_aType);
      var string137 = new GraceString("`");
      var opresult138 = request(opresult136, "++(1)", [1], string137);
      var opresult139 = request(opresult134, "++(1)", [1], opresult138);
      // call case 6: other requests
      if (var_MethodError === undefined) raiseUninitializedVariable("MethodError");
      var call125 = request(var_MethodError, "raise(1)with(1)", [1, 1], opresult139, var_node);
      if122 = call125;
    }
    return if122;
  };    // end of method check(_)matches(_)inMethod(_)
  func120.paramTypes = [];
  func120.paramTypes.push([]);
  func120.paramTypes.push([]);
  func120.paramTypes.push([type_String, "name"]);
  func120.confidential = true;
  this.methods["check(1)matches(1)inMethod(1)"] = func120;
  func120.methodName = "check(1)matches(1)inMethod(1)";
  func120.paramCounts = [1, 1, 1];
  func120.paramNames = ["node", "eType", "name"];
  func120.definitionLine = 905;
  func120.definitionModule = "staticTypes";
  var func140 = function(argcv, var_i) {    // method outerAt(_), line 1063
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("outerAt(_)", 0, numArgs - 1);
    }
    var if141 = GraceDone;
    setLineNumber(1065);    // compilenode num
    var opresult142 = request(var_i, "\u2264(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult142)) {
      setLineNumber(1066);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call143 = request(var_objectType, "unknown", [0]);
      return call143;
    }
    setLineNumber(1069);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call146 = selfRequest(this, "scope", [0]);
    var call145 = request(call146, "variables", [0]);
    var call144 = request(call145, "stack", [0]);
    var var_vStack = call144;
    setLineNumber(1070);    // compilenode call
    // call case 6: other requests
    var call147 = request(var_vStack, "at(1)", [1], var_i);
    var var_curr = call147;
    setLineNumber(1072);    // compilenode string
    var string149 = new GraceString("outer");
    var block150 = new GraceBlock(this, 1072, 1);
    block150.guard = jsTrue;
    block150.real = function block150(var_t) {
      setLineNumber(1072);    // compileBlock
      return var_t;
    };
    let applyMeth150 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth150.methodName = "apply(1)";
    applyMeth150.paramCounts = [1];
    applyMeth150.paramNames = ["t"];
    applyMeth150.definitionLine = 1072;
    applyMeth150.definitionModule = "staticTypes";
    block150.methods["apply(1)"] = applyMeth150;
    let matchesMeth150 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth150.methodName = "matches(1)";
    matchesMeth150.paramCounts = [1];
    matchesMeth150.paramNames = ["t"];
    matchesMeth150.definitionLine = 1072;
    matchesMeth150.definitionModule = "staticTypes";
    block150.methods["matches(1)"] = matchesMeth150;
    var block151 = new GraceBlock(this, 1072, 0);
    block151.guard = jsTrue;
    block151.real = function block151() {
      setLineNumber(1073);    // compilenode num
      var diff153 = request(var_i, "-(1)", [1], new GraceNum(1));
      // call case 2: outer request
      var call152 = selfRequest(importedModules["staticTypes"], "outerAt(1)", [1], diff153);
      var var_prev = call152;
      setLineNumber(1075);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call156 = selfRequest(this, "scope", [0]);
      var call155 = request(call156, "methods", [0]);
      var call154 = request(call155, "stack", [0]);
      var var_mStack = call154;
      setLineNumber(1077);    // compilenode num
      var diff158 = request(var_i, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      if (var_vStack === undefined) raiseUninitializedVariable("vStack");
      var call157 = request(var_vStack, "at(1)", [1], diff158);
      var var_vars = call157;
      setLineNumber(1078);    // compilenode member
      // call case 6: other requests
      var diff161 = request(var_i, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      if (var_mStack === undefined) raiseUninitializedVariable("mStack");
      var call160 = request(var_mStack, "at(1)", [1], diff161);
      var call159 = request(call160, "values", [0]);
      var var_meths = call159;
      setLineNumber(1080);    // compilenode call
      if (var_meths === undefined) raiseUninitializedVariable("meths");
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call162 = request(var_objectType, "fromMethods(1)", [1], var_meths);
      var var_oType = call162;
      setLineNumber(1081);    // compilenode string
      var string164 = new GraceString("outer");
      if (var_oType === undefined) raiseUninitializedVariable("oType");
      // call case 6: other requests
      if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
      var call163 = request(var_aMethodType, "member(1)ofType(1)", [1, 1], string164, var_oType);
      var var_mType = call163;
      setLineNumber(1083);    // compilenode string
      var string166 = new GraceString("outer");
      if (var_oType === undefined) raiseUninitializedVariable("oType");
      // call case 6: other requests
      if (var_curr === undefined) raiseUninitializedVariable("curr");
      var call165 = request(var_curr, "at(1)put(1)", [1, 1], string166, var_oType);
      setLineNumber(1084);    // compilenode string
      var string168 = new GraceString("outer");
      if (var_mType === undefined) raiseUninitializedVariable("mType");
      // call case 6: other requests
      // call case 6: other requests
      if (var_mStack === undefined) raiseUninitializedVariable("mStack");
      var call169 = request(var_mStack, "at(1)", [1], var_i);
      var call167 = request(call169, "at(1)put(1)", [1, 1], string168, var_mType);
      if (var_oType === undefined) raiseUninitializedVariable("oType");
      return var_oType;
    };
    let applyMeth151 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth151.methodName = "apply";
    applyMeth151.paramCounts = [0];
    applyMeth151.paramNames = [];
    applyMeth151.definitionLine = 1072;
    applyMeth151.definitionModule = "staticTypes";
    block151.methods["apply"] = applyMeth151;
    // call case 6: other requests
    var call148 = request(var_curr, "atKey(1)do(1)else(1)", [1, 1, 1], string149, block150, block151);
    return call148;
  };    // end of method outerAt(_)
  func140.paramTypes = [];
  func140.paramTypes.push([type_Number, "i"]);
  func140.confidential = true;
  this.methods["outerAt(1)"] = func140;
  func140.methodName = "outerAt(1)";
  func140.paramCounts = [1];
  func140.paramNames = ["i"];
  func140.definitionLine = 1063;
  func140.definitionModule = "staticTypes";
  var func170 = function(argcv, var_body) {    // method processBody(_), line 1093
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("processBody(_)", 0, numArgs - 1);
    }
    setLineNumber(1095);    // compilenode call
    // call case 2: outer request
    var call171 = selfRequest(importedModules["staticTypes"], "collectTypes(1)", [1], var_body);
    setLineNumber(1098);    // compilenode member
    // call case 6: other requests
    var call172 = request(var_body, "size", [0]);
    var opresult173 = request(call172, ">(1)", [1], new GraceNum(0));
    var block174 = new GraceBlock(this, 1098, 0);
    block174.guard = jsTrue;
    block174.real = function block174() {
      setLineNumber(1098);    // compilenode member
      // call case 6: other requests
      var call176 = request(var_body, "first", [0]);
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call177 = selfRequest(this, "Inherit", [0]);
      var call175 = request(call177, "match(1)", [1], call176);
      return call175;
    };
    let applyMeth174 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth174.methodName = "apply";
    applyMeth174.paramCounts = [0];
    applyMeth174.paramNames = [];
    applyMeth174.definitionLine = 1098;
    applyMeth174.definitionModule = "staticTypes";
    block174.methods["apply"] = applyMeth174;
    var opresult178 = request(opresult173, "&&(1)", [1], block174);
    var var_hasInherits = opresult178;
    var if179 = GraceDone;
    setLineNumber(1099);    // compilenode if
    if (Grace_isTrue(var_hasInherits)) {
      setLineNumber(1100);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call181 = request(var_body, "first", [0]);
      var call180 = request(call181, "value", [0]);
      var var_inheriting = call180;
      setLineNumber(1101);    // compilenode object
      var obj183_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_1101");
        this.outer_staticTypes_1101 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(1102);    // reuse call
        if (var_ast === undefined) raiseUninitializedVariable("ast");
        var initFun184 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.illegal = undefined;
        var reader185_illegal = function() {  // reader method illegal
            if (this.data.illegal === undefined) raiseUninitializedVariable("illegal");
            return this.data.illegal;
        };
        reader185_illegal.isDef = true;
        reader185_illegal.confidential = true;
        this.methods["illegal"] = reader185_illegal;
        var func186 = function(argcv, var_ident) {    // method visitIdentifier(_), line 1106
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("visitIdentifier(_)", 0, numArgs - 1);
          }
          var if187 = GraceDone;
          setLineNumber(1107);    // compilenode member
          // call case 6: other requests
          var call189 = request(var_ident, "value", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call190 = selfRequest(this, "illegal", [0]);
          var call188 = request(call190, "contains(1)", [1], call189);
          if (Grace_isTrue(call188)) {
            setLineNumber(1108);    // compilenode string
            var string192 = new GraceString("reference to `");
            // call case 6: other requests
            var call193 = request(var_ident, "value", [0]);
            var opresult194 = request(string192, "++(1)", [1], call193);
            var string195 = new GraceString("` ");
            var opresult196 = request(opresult194, "++(1)", [1], string195);
            setLineNumber(1109);    // compilenode string
            var string197 = new GraceString("in inheritance clause");
            var opresult198 = request(opresult196, "++(1)", [1], string197);
            // call case 6: other requests
            if (var_ObjectError === undefined) raiseUninitializedVariable("ObjectError");
            var call191 = request(var_ObjectError, "raise(1)with(1)", [1, 1], opresult198, var_ident);
            if187 = call191;
          }
          return if187;
        };    // end of method visitIdentifier(_)
        this.methods["visitIdentifier(1)"] = func186;
        func186.methodName = "visitIdentifier(1)";
        func186.paramCounts = [1];
        func186.paramNames = ["ident"];
        func186.definitionLine = 1106;
        func186.definitionModule = "staticTypes";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 1101;
            m.definitionModule = "staticTypes";
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
        var obj183_init = function() {    // init of object on line 1101
          initFun184.call(this);
          setLineNumber(1104);    // compilenode string
          var string200 = new GraceString("self");
          var array199 = new GraceSequence([string200]);
          this.data.illegal = array199;
        };
        return obj183_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj183 = emptyGraceObject("object", "staticTypes", 1101);
      var obj183_init = obj183_build.call(obj183, null, this, [], []);
      obj183_init.call(obj183);  // end of compileobject
      // call case 6: other requests
      if (var_inheriting === undefined) raiseUninitializedVariable("inheriting");
      var call182 = request(var_inheriting, "accept(1)", [1], obj183);
      setLineNumber(1114);    // compilenode call
      if (var_inheriting === undefined) raiseUninitializedVariable("inheriting");
      // call case 2: outer request
      var call201 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_inheriting);
      if179 = call201;
    } else {
      setLineNumber(1116);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call202 = request(var_objectType, "base", [0]);
      if179 = call202;
    }
    var var_superType = if179;
    setLineNumber(1119);    // compilenode string
    var string204 = new GraceString("super");
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call206 = selfRequest(this, "scope", [0]);
    var call205 = request(call206, "variables", [0]);
    var call203 = request(call205, "at(1)put(1)", [1, 1], string204, var_superType);
    var if207 = GraceDone;
    setLineNumber(1124);    // compilenode member
    // call case 6: other requests
    var call208 = request(var_superType, "isUnknown", [0]);
    if (Grace_isTrue(call208)) {
      setLineNumber(1125);    // compilenode string
      var string210 = new GraceString("Self");
      if (var_superType === undefined) raiseUninitializedVariable("superType");
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call212 = selfRequest(this, "scope", [0]);
      var call211 = request(call212, "types", [0]);
      var call209 = request(call211, "at(1)put(1)", [1, 1], string210, var_superType);
      if (var_superType === undefined) raiseUninitializedVariable("superType");
      if207 = var_superType;
    } else {
      setLineNumber(1129);    // compilenode array
      var array214 = new GraceSequence([]);
      // call case 2: outer request
      var call213 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array214);
      var var_publicMethods = call213;
      setLineNumber(1130);    // compilenode array
      var array216 = new GraceSequence([]);
      // call case 2: outer request
      var call215 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array216);
      var var_allMethods = call215;
      setLineNumber(1132);    // compilenode block
      var block218 = new GraceBlock(this, 1132, 1);
      block218.guard = jsTrue;
      block218.real = function block218(var_stmt) {
        setLineNumber(1133);    // compilenode matchcase
        var cases219 = [];
        var block220 = new GraceBlock(this, 1133, 1);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call221 = selfRequest(this, "Method", [0]);
        block220.paramTypes = [call221];
        var matches222 = function(var_meth) {
          // call case 4: self request with 0 args and 0 typeArgs 
          var call223 = selfRequest(this, "Method", [0]);
          if (!Grace_isTrue(request(call223, "matches(1)", [1], var_meth)))
              return false;
          return true;
        };
        block220.guard = matches222;
        block220.real = function block220(var_meth) {
          setLineNumber(1134);    // compilenode call
          // call case 6: other requests
          if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
          var call224 = request(var_aMethodType, "fromNode(1)", [1], var_meth);
          var var_mType = call224;
          setLineNumber(1135);    // compilenode call
          if (var_mType === undefined) raiseUninitializedVariable("mType");
          // call case 6: other requests
          if (var_allMethods === undefined) raiseUninitializedVariable("allMethods");
          var call225 = request(var_allMethods, "push(1)", [1], var_mType);
          var if226 = GraceDone;
          setLineNumber(1136);    // compilenode member
          // call case 6: other requests
          var call227 = request(var_meth, "isPublic", [0]);
          if (Grace_isTrue(call227)) {
            setLineNumber(1137);    // compilenode call
            if (var_mType === undefined) raiseUninitializedVariable("mType");
            // call case 6: other requests
            if (var_publicMethods === undefined) raiseUninitializedVariable("publicMethods");
            var call228 = request(var_publicMethods, "push(1)", [1], var_mType);
            if226 = call228;
          }
          setLineNumber(1140);    // compilenode member
          // call case 6: other requests
          if (var_mType === undefined) raiseUninitializedVariable("mType");
          var call230 = request(var_mType, "name", [0]);
          if (var_mType === undefined) raiseUninitializedVariable("mType");
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call232 = selfRequest(this, "scope", [0]);
          var call231 = request(call232, "methods", [0]);
          var call229 = request(call231, "at(1)put(1)", [1, 1], call230, var_mType);
          var if233 = GraceDone;
          setLineNumber(1141);    // compilenode call
          if (var_mType === undefined) raiseUninitializedVariable("mType");
          // call case 2: outer request
          var call234 = selfRequest(importedModules["staticTypes"], "isMember(1)", [1], var_mType);
          if (Grace_isTrue(call234)) {
            setLineNumber(1142);    // compilenode member
            // call case 6: other requests
            if (var_mType === undefined) raiseUninitializedVariable("mType");
            var call236 = request(var_mType, "name", [0]);
            // call case 6: other requests
            if (var_mType === undefined) raiseUninitializedVariable("mType");
            var call237 = request(var_mType, "returnType", [0]);
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call239 = selfRequest(this, "scope", [0]);
            var call238 = request(call239, "variables", [0]);
            var call235 = request(call238, "at(1)put(1)", [1, 1], call236, call237);
            if233 = call235;
          }
          return if233;
        };
        let applyMeth220 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth220.methodName = "apply(1)";
        applyMeth220.paramCounts = [1];
        applyMeth220.paramNames = ["meth"];
        applyMeth220.definitionLine = 1133;
        applyMeth220.definitionModule = "staticTypes";
        block220.methods["apply(1)"] = applyMeth220;
        let matchesMeth220 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth220.methodName = "matches(1)";
        matchesMeth220.paramCounts = [1];
        matchesMeth220.paramNames = ["meth"];
        matchesMeth220.definitionLine = 1133;
        matchesMeth220.definitionModule = "staticTypes";
        block220.methods["matches(1)"] = matchesMeth220;
        cases219.push(block220);
        setLineNumber(1144);    // compilenode block
        var block240 = new GraceBlock(this, 1144, 1);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call241 = selfRequest(this, "Def", [0]);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call242 = selfRequest(this, "Var", [0]);
        var opresult243 = request(call241, "|(1)", [1], call242);
        block240.paramTypes = [opresult243];
        var matches244 = function(var_defd) {
          // call case 4: self request with 0 args and 0 typeArgs 
          var call245 = selfRequest(this, "Def", [0]);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call246 = selfRequest(this, "Var", [0]);
          var opresult247 = request(call245, "|(1)", [1], call246);
          if (!Grace_isTrue(request(opresult247, "matches(1)", [1], var_defd)))
              return false;
          return true;
        };
        block240.guard = matches244;
        block240.real = function block240(var_defd) {
          var if248 = GraceDone;
          setLineNumber(1145);    // compilenode member
          // call case 6: other requests
          var call249 = request(var_defd, "isPublic", [0]);
          if (Grace_isTrue(call249)) {
            setLineNumber(1146);    // compilenode call
            // call case 6: other requests
            if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
            var call250 = request(var_aMethodType, "fromNode(1)", [1], var_defd);
            var var_mType = call250;
            setLineNumber(1147);    // compilenode call
            if (var_mType === undefined) raiseUninitializedVariable("mType");
            // call case 6: other requests
            if (var_allMethods === undefined) raiseUninitializedVariable("allMethods");
            var call251 = request(var_allMethods, "push(1)", [1], var_mType);
            setLineNumber(1148);    // compilenode call
            if (var_mType === undefined) raiseUninitializedVariable("mType");
            // call case 6: other requests
            if (var_publicMethods === undefined) raiseUninitializedVariable("publicMethods");
            var call252 = request(var_publicMethods, "push(1)", [1], var_mType);
            if248 = call252;
          }
          return if248;
        };
        let applyMeth240 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth240.methodName = "apply(1)";
        applyMeth240.paramCounts = [1];
        applyMeth240.paramNames = ["defd"];
        applyMeth240.definitionLine = 1144;
        applyMeth240.definitionModule = "staticTypes";
        block240.methods["apply(1)"] = applyMeth240;
        let matchesMeth240 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth240.methodName = "matches(1)";
        matchesMeth240.paramCounts = [1];
        matchesMeth240.paramNames = ["defd"];
        matchesMeth240.definitionLine = 1144;
        matchesMeth240.definitionModule = "staticTypes";
        block240.methods["matches(1)"] = matchesMeth240;
        cases219.push(block240);
        setLineNumber(1150);    // compilenode block
        var block253 = new GraceBlock(this, 1150, 0);
        block253.guard = jsTrue;
        block253.real = function block253() {
          setLineNumber(1150);    // compileBlock
          return GraceDone;
        };
        let applyMeth253 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth253.methodName = "apply";
        applyMeth253.paramCounts = [0];
        applyMeth253.paramNames = [];
        applyMeth253.definitionLine = 1150;
        applyMeth253.definitionModule = "staticTypes";
        block253.methods["apply"] = applyMeth253;
        setLineNumber(1133);    // compilematchcase
        var matchres219 = matchCase(var_stmt,cases219,block253);
        return matchres219;
      };
      let applyMeth218 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth218.methodName = "apply(1)";
      applyMeth218.paramCounts = [1];
      applyMeth218.paramNames = ["stmt"];
      applyMeth218.definitionLine = 1132;
      applyMeth218.definitionModule = "staticTypes";
      block218.methods["apply(1)"] = applyMeth218;
      let matchesMeth218 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth218.methodName = "matches(1)";
      matchesMeth218.paramCounts = [1];
      matchesMeth218.paramNames = ["stmt"];
      matchesMeth218.definitionLine = 1132;
      matchesMeth218.definitionModule = "staticTypes";
      block218.methods["matches(1)"] = matchesMeth218;
      // call case 6: other requests
      var call217 = request(var_body, "do(1)", [1], block218);
      setLineNumber(1153);    // compilenode string
      var string255 = new GraceString("Self");
      if (var_allMethods === undefined) raiseUninitializedVariable("allMethods");
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call256 = request(var_objectType, "fromMethods(1)", [1], var_allMethods);
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call258 = selfRequest(this, "scope", [0]);
      var call257 = request(call258, "types", [0]);
      var call254 = request(call257, "at(1)put(1)", [1, 1], string255, call256);
      setLineNumber(1154);    // compilenode call
      if (var_publicMethods === undefined) raiseUninitializedVariable("publicMethods");
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call259 = request(var_objectType, "fromMethods(1)", [1], var_publicMethods);
      if207 = call259;
    }
    var var_publicType = if207;
    setLineNumber(1157);    // compilenode string
    var string261 = new GraceString("self");
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call263 = selfRequest(this, "scope", [0]);
    var call262 = request(call263, "variables", [0]);
    var call260 = request(call262, "at(1)put(1)", [1, 1], string261, var_publicType);
    var if264 = GraceDone;
    setLineNumber(1160);    // compilenode if
    if (Grace_isTrue(var_hasInherits)) {
      setLineNumber(1161);    // compilenode member
      // call case 6: other requests
      var call265 = request(var_body, "size", [0]);
      var opresult266 = request(new GraceNum(2), "..(1)", [1], call265);
      if264 = opresult266;
    } else {
      setLineNumber(1163);    // compilenode member
      // call case 6: other requests
      var call267 = request(var_body, "indices", [0]);
      if264 = call267;
    }
    var var_indices = if264;
    setLineNumber(1166);    // compilenode block
    var block269 = new GraceBlock(this, 1166, 1);
    block269.guard = jsTrue;
    block269.real = function block269(var_i) {
      setLineNumber(1167);    // compilenode call
      // call case 6: other requests
      var call271 = request(var_body, "at(1)", [1], var_i);
      // call case 2: outer request
      var call270 = selfRequest(importedModules["staticTypes"], "checkTypes(1)", [1], call271);
      return call270;
    };
    let applyMeth269 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth269.methodName = "apply(1)";
    applyMeth269.paramCounts = [1];
    applyMeth269.paramNames = ["i"];
    applyMeth269.definitionLine = 1166;
    applyMeth269.definitionModule = "staticTypes";
    block269.methods["apply(1)"] = applyMeth269;
    let matchesMeth269 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth269.methodName = "matches(1)";
    matchesMeth269.paramCounts = [1];
    matchesMeth269.paramNames = ["i"];
    matchesMeth269.definitionLine = 1166;
    matchesMeth269.definitionModule = "staticTypes";
    block269.methods["matches(1)"] = matchesMeth269;
    // call case 6: other requests
    var call268 = request(var_indices, "do(1)", [1], block269);
    setLineNumber(1170);    // compilenode return
    return var_publicType;
  };    // end of method processBody(_)
  func170.confidential = true;
  this.methods["processBody(1)"] = func170;
  func170.methodName = "processBody(1)";
  func170.paramCounts = [1];
  func170.paramNames = ["body"];
  func170.definitionLine = 1093;
  func170.definitionModule = "staticTypes";
  var func272 = function(argcv, var_nodes) {    // method collectTypes(_), line 1178
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("collectTypes(_)", 0, numArgs - 1);
    }
    setLineNumber(1179);    // compilenode array
    var array274 = new GraceSequence([]);
    // call case 2: outer request
    var call273 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array274);
    var var_names = call273;
    setLineNumber(1180);    // compilenode array
    var array276 = new GraceSequence([]);
    // call case 2: outer request
    var call275 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array276);
    var var_types = call275;
    setLineNumber(1181);    // compilenode array
    var array278 = new GraceSequence([]);
    // call case 2: outer request
    var call277 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array278);
    var var_placeholders = call277;
    setLineNumber(1183);    // compilenode block
    var block280 = new GraceBlock(this, 1183, 1);
    block280.guard = jsTrue;
    block280.real = function block280(var_node) {
      setLineNumber(1184);    // compilenode matchcase
      var cases281 = [];
      var block282 = new GraceBlock(this, 1184, 1);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call283 = selfRequest(this, "TypeDeclaration", [0]);
      block282.paramTypes = [call283];
      var matches284 = function(var_td) {
        // call case 4: self request with 0 args and 0 typeArgs 
        var call285 = selfRequest(this, "TypeDeclaration", [0]);
        if (!Grace_isTrue(request(call285, "matches(1)", [1], var_td)))
            return false;
        return true;
      };
      block282.guard = matches284;
      block282.real = function block282(var_td) {
        var if286 = GraceDone;
        setLineNumber(1185);    // compilenode member
        // call case 6: other requests
        var call288 = request(var_td, "nameString", [0]);
        // call case 6: other requests
        if (var_names === undefined) raiseUninitializedVariable("names");
        var call287 = request(var_names, "contains(1)", [1], call288);
        if (Grace_isTrue(call287)) {
          setLineNumber(1186);    // compilenode string
          var string290 = new GraceString("the type ");
          // call case 6: other requests
          var call291 = request(var_td, "nameString", [0]);
          var opresult292 = request(string290, "++(1)", [1], call291);
          var string293 = new GraceString(" uses ");
          var opresult294 = request(opresult292, "++(1)", [1], string293);
          setLineNumber(1187);    // compilenode string
          var string295 = new GraceString("the same name as another type in the same scope");
          var opresult296 = request(opresult294, "++(1)", [1], string295);
          // call case 6: other requests
          if (var_TypeDeclarationError === undefined) raiseUninitializedVariable("TypeDeclarationError");
          var call289 = request(var_TypeDeclarationError, "raise(1)with(1)", [1, 1], opresult296, var_td);
          if286 = call289;
        }
        setLineNumber(1190);    // compilenode member
        // call case 6: other requests
        var call298 = request(var_td, "value", [0]);
        // call case 6: other requests
        if (var_names === undefined) raiseUninitializedVariable("names");
        var call297 = request(var_names, "push(1)", [1], call298);
        setLineNumber(1194);    // compilenode member
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call299 = request(var_objectType, "unknown", [0]);
        var var_placeholder = call299;
        setLineNumber(1195);    // compilenode call
        // call case 6: other requests
        if (var_types === undefined) raiseUninitializedVariable("types");
        var call300 = request(var_types, "push(1)", [1], var_td);
        setLineNumber(1196);    // compilenode call
        if (var_placeholder === undefined) raiseUninitializedVariable("placeholder");
        // call case 6: other requests
        if (var_placeholders === undefined) raiseUninitializedVariable("placeholders");
        var call301 = request(var_placeholders, "push(1)", [1], var_placeholder);
        setLineNumber(1197);    // compilenode member
        // call case 6: other requests
        var call303 = request(var_td, "nameString", [0]);
        if (var_placeholder === undefined) raiseUninitializedVariable("placeholder");
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call305 = selfRequest(this, "scope", [0]);
        var call304 = request(call305, "types", [0]);
        var call302 = request(call304, "at(1)put(1)", [1, 1], call303, var_placeholder);
        return call302;
      };
      let applyMeth282 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth282.methodName = "apply(1)";
      applyMeth282.paramCounts = [1];
      applyMeth282.paramNames = ["td"];
      applyMeth282.definitionLine = 1184;
      applyMeth282.definitionModule = "staticTypes";
      block282.methods["apply(1)"] = applyMeth282;
      let matchesMeth282 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth282.methodName = "matches(1)";
      matchesMeth282.paramCounts = [1];
      matchesMeth282.paramNames = ["td"];
      matchesMeth282.definitionLine = 1184;
      matchesMeth282.definitionModule = "staticTypes";
      block282.methods["matches(1)"] = matchesMeth282;
      cases281.push(block282);
      setLineNumber(1198);    // compilenode block
      var block306 = new GraceBlock(this, 1198, 0);
      block306.guard = jsTrue;
      block306.real = function block306() {
        setLineNumber(1198);    // compileBlock
        return GraceDone;
      };
      let applyMeth306 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth306.methodName = "apply";
      applyMeth306.paramCounts = [0];
      applyMeth306.paramNames = [];
      applyMeth306.definitionLine = 1198;
      applyMeth306.definitionModule = "staticTypes";
      block306.methods["apply"] = applyMeth306;
      setLineNumber(1184);    // compilematchcase
      var matchres281 = matchCase(var_node,cases281,block306);
      return matchres281;
    };
    let applyMeth280 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth280.methodName = "apply(1)";
    applyMeth280.paramCounts = [1];
    applyMeth280.paramNames = ["node"];
    applyMeth280.definitionLine = 1183;
    applyMeth280.definitionModule = "staticTypes";
    block280.methods["apply(1)"] = applyMeth280;
    let matchesMeth280 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth280.methodName = "matches(1)";
    matchesMeth280.paramCounts = [1];
    matchesMeth280.paramNames = ["node"];
    matchesMeth280.definitionLine = 1183;
    matchesMeth280.definitionModule = "staticTypes";
    block280.methods["matches(1)"] = matchesMeth280;
    // call case 6: other requests
    var call279 = request(var_nodes, "do(1)", [1], block280);
    setLineNumber(1201);    // compilenode block
    var block308 = new GraceBlock(this, 1201, 2);
    block308.guard = jsTrue;
    block308.real = function block308(var_td, var_ph) {
      setLineNumber(1202);    // compilenode call
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call309 = request(var_objectType, "fromDType(1)", [1], var_td);
      var var_oType = call309;
      setLineNumber(1203);    // compilenode call
      if (var_oType === undefined) raiseUninitializedVariable("oType");
      // call case 2: outer request
      var call310 = selfRequest(var_prelude, "become(2)", [2], var_ph, var_oType);
      return call310;
    };
    let applyMeth308 = function apply_2 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth308.methodName = "apply(2)";
    applyMeth308.paramCounts = [2];
    applyMeth308.paramNames = ["td", "ph"];
    applyMeth308.definitionLine = 1201;
    applyMeth308.definitionModule = "staticTypes";
    block308.methods["apply(2)"] = applyMeth308;
    let matchesMeth308 = function matches_2 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth308.methodName = "matches(2)";
    matchesMeth308.paramCounts = [2];
    matchesMeth308.paramNames = ["td", "ph"];
    matchesMeth308.definitionLine = 1201;
    matchesMeth308.definitionModule = "staticTypes";
    block308.methods["matches(2)"] = matchesMeth308;
    // call case 2: outer request
    var call307 = selfRequest(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], var_types, var_placeholders, block308);
    return call307;
  };    // end of method collectTypes(_)
  func272.confidential = true;
  this.methods["collectTypes(1)"] = func272;
  func272.methodName = "collectTypes(1)";
  func272.paramCounts = [1];
  func272.paramNames = ["nodes"];
  func272.definitionLine = 1178;
  func272.definitionModule = "staticTypes";
  var func311 = function(argcv, var_mType) {    // method isMember(_), line 1209
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("isMember(_)", 0, numArgs - 1);
    }
    setLineNumber(1210);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call313 = request(var_mType, "signature", [0]);
    var call312 = request(call313, "size", [0]);
    var opresult314 = request(call312, "==(1)", [1], new GraceNum(1));
    var block315 = new GraceBlock(this, 1210, 0);
    block315.guard = jsTrue;
    block315.real = function block315() {
      setLineNumber(1211);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call319 = request(var_mType, "signature", [0]);
      var call318 = request(call319, "first", [0]);
      var call317 = request(call318, "parameters", [0]);
      var call316 = request(call317, "size", [0]);
      var opresult320 = request(call316, "==(1)", [1], new GraceNum(0));
      return opresult320;
    };
    let applyMeth315 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth315.methodName = "apply";
    applyMeth315.paramCounts = [0];
    applyMeth315.paramNames = [];
    applyMeth315.definitionLine = 1210;
    applyMeth315.definitionModule = "staticTypes";
    block315.methods["apply"] = applyMeth315;
    var opresult321 = request(opresult314, "&&(1)", [1], block315);
    return opresult321;
  };    // end of method isMember(_)
  func311.confidential = true;
  this.methods["isMember(1)"] = func311;
  func311.methodName = "isMember(1)";
  func311.paramCounts = [1];
  func311.paramNames = ["mType"];
  func311.definitionLine = 1209;
  func311.definitionModule = "staticTypes";
  var func322 = function(argcv, var_a, var_bl) {    // method for(_)doWithBreak(_), line 1220
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("for(_)doWithBreak(_)", 0, numArgs - 2);
    }
    setLineNumber(1221);    // compilenode block
    var block324 = new GraceBlock(this, 1221, 1);
    block324.guard = jsTrue;
    block324.real = function block324(var_e) {
      setLineNumber(1222);    // compilenode block
      var block326 = new GraceBlock(this, 1222, 0);
      block326.guard = jsTrue;
      block326.real = function block326() {
        setLineNumber(1223);    // compilenode return
        throw new ReturnException(var_done, returnTarget);
      };
      let applyMeth326 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth326.methodName = "apply";
      applyMeth326.paramCounts = [0];
      applyMeth326.paramNames = [];
      applyMeth326.definitionLine = 1222;
      applyMeth326.definitionModule = "staticTypes";
      block326.methods["apply"] = applyMeth326;
      // call case 6: other requests
      var call325 = request(var_bl, "apply(2)", [2], var_e, block326);
      return call325;
    };
    let applyMeth324 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth324.methodName = "apply(1)";
    applyMeth324.paramCounts = [1];
    applyMeth324.paramNames = ["e"];
    applyMeth324.definitionLine = 1221;
    applyMeth324.definitionModule = "staticTypes";
    block324.methods["apply(1)"] = applyMeth324;
    let matchesMeth324 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth324.methodName = "matches(1)";
    matchesMeth324.paramCounts = [1];
    matchesMeth324.paramNames = ["e"];
    matchesMeth324.definitionLine = 1221;
    matchesMeth324.definitionModule = "staticTypes";
    block324.methods["matches(1)"] = matchesMeth324;
    // call case 6: other requests
    var call323 = request(var_a, "do(1)", [1], block324);
    return call323;
  };    // end of method for(_)doWithBreak(_)
  this.methods["for(1)doWithBreak(1)"] = func322;
  func322.methodName = "for(1)doWithBreak(1)";
  func322.paramCounts = [1, 1];
  func322.paramNames = ["a", "bl"];
  func322.definitionLine = 1220;
  func322.definitionModule = "staticTypes";
  var func327 = function(argcv, var_a, var_bl) {    // method for(_)doWithContinue(_), line 1229
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("for(_)doWithContinue(_)", 0, numArgs - 2);
    }
    setLineNumber(1230);    // compilenode block
    var block329 = new GraceBlock(this, 1230, 1);
    block329.guard = jsTrue;
    block329.real = function block329(var_e) {
      setLineNumber(1231);    // compilenode call
      // call case 2: outer request
      var call330 = selfRequest(importedModules["staticTypes"], "continue'(2)", [2], var_e, var_bl);
      return call330;
    };
    let applyMeth329 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth329.methodName = "apply(1)";
    applyMeth329.paramCounts = [1];
    applyMeth329.paramNames = ["e"];
    applyMeth329.definitionLine = 1230;
    applyMeth329.definitionModule = "staticTypes";
    block329.methods["apply(1)"] = applyMeth329;
    let matchesMeth329 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth329.methodName = "matches(1)";
    matchesMeth329.paramCounts = [1];
    matchesMeth329.paramNames = ["e"];
    matchesMeth329.definitionLine = 1230;
    matchesMeth329.definitionModule = "staticTypes";
    block329.methods["matches(1)"] = matchesMeth329;
    // call case 6: other requests
    var call328 = request(var_a, "do(1)", [1], block329);
    return call328;
  };    // end of method for(_)doWithContinue(_)
  this.methods["for(1)doWithContinue(1)"] = func327;
  func327.methodName = "for(1)doWithContinue(1)";
  func327.paramCounts = [1, 1];
  func327.paramNames = ["a", "bl"];
  func327.definitionLine = 1229;
  func327.definitionModule = "staticTypes";
  var func331 = function(argcv, var_e, var_bl) {    // method continue'(_,_), line 1235
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("continue'(_,_)", 0, numArgs - 2);
    }
    setLineNumber(1236);    // compilenode block
    var block333 = new GraceBlock(this, 1236, 0);
    block333.guard = jsTrue;
    block333.real = function block333() {
      setLineNumber(1237);    // compilenode return
      throw new ReturnException(var_done, returnTarget);
    };
    let applyMeth333 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth333.methodName = "apply";
    applyMeth333.paramCounts = [0];
    applyMeth333.paramNames = [];
    applyMeth333.definitionLine = 1236;
    applyMeth333.definitionModule = "staticTypes";
    block333.methods["apply"] = applyMeth333;
    // call case 6: other requests
    var call332 = request(var_bl, "apply(2)", [2], var_e, block333);
    return call332;
  };    // end of method continue'(_,_)
  func331.confidential = true;
  this.methods["continue'(2)"] = func331;
  func331.methodName = "continue'(2)";
  func331.paramCounts = [2];
  func331.paramNames = ["e", "bl"];
  func331.definitionLine = 1235;
  func331.definitionModule = "staticTypes";
  initFun3.call(this);
  setLineNumber(24);    // compilenode object
  var obj334_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_staticTypes_24");
    this.outer_staticTypes_24 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func335 = function(argcv, var_name__39__, var_type__39__) {    // method withName(_)ofType(_), line 26
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("withName(_)ofType(_)", 0, numArgs - 2);
      }
      var ouc = emptyGraceObject("aParam.withName(_)ofType(_)", "staticTypes", 26);
      var ouc_init = this.methods["withName(1)ofType(1)$build(3)"].call(this, null, var_name__39__, var_type__39__, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method withName(_)ofType(_)
    func335.paramTypes = [];
    func335.paramTypes.push([type_String, "name'"]);
    func335.paramTypes.push([]);
    this.methods["withName(1)ofType(1)"] = func335;
    func335.methodName = "withName(1)ofType(1)";
    func335.paramCounts = [1, 1];
    func335.paramNames = ["name'", "type'"];
    func335.definitionLine = 26;
    func335.definitionModule = "staticTypes";
    var func336 = function(argcv, var_name__39__, var_type__39__, inheritingObject, aliases, exclusions) {    // method withName(_)ofType(_)$build(_,_,_), line 26
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("withName(_)ofType(_)", 0, numArgs - 2);
      }
      var obj337_build = function(ignore, var_name__39__, var_type__39__, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_26");
        this.outer_staticTypes_26 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        this.data.name = undefined;
        var reader338_name = function() {  // reader method name
            if (this.data.name === undefined) raiseUninitializedVariable("name");
            return this.data.name;
        };
        reader338_name.isDef = true;
        this.methods["name"] = reader338_name;
        this.data.typeAnnotation = undefined;
        var reader339_typeAnnotation = function() {  // reader method typeAnnotation
            if (this.data.typeAnnotation === undefined) raiseUninitializedVariable("typeAnnotation");
            return this.data.typeAnnotation;
        };
        reader339_typeAnnotation.isDef = true;
        this.methods["typeAnnotation"] = reader339_typeAnnotation;
        var func340 = function(argcv) {    // method asString, line 29
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("asString", 0, numArgs - 0);
          }
          setLineNumber(29);    // compilenode string
          var string341 = new GraceString("");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call342 = selfRequest(this, "name", [0]);
          var opresult343 = request(string341, "++(1)", [1], call342);
          var string344 = new GraceString(":");
          var opresult345 = request(opresult343, "++(1)", [1], string344);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call346 = selfRequest(this, "typeAnnotation", [0]);
          var opresult347 = request(opresult345, "++(1)", [1], call346);
          var string348 = new GraceString("");
          var opresult349 = request(opresult347, "++(1)", [1], string348);
          return opresult349;
        };    // end of method asString
        this.methods["asString"] = func340;
        func340.methodName = "asString";
        func340.paramCounts = [0];
        func340.paramNames = [];
        func340.definitionLine = 29;
        func340.definitionModule = "staticTypes";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 26;
            m.definitionModule = "staticTypes";
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
        var obj337_init = function() {    // init of object on line 26
          this.data.name = var_name__39__;
          this.data.typeAnnotation = var_type__39__;
        };
        return obj337_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj337_init = obj337_build.call(inheritingObject, null, var_name__39__, var_type__39__, this, aliases, exclusions);
      return obj337_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method withName(_)ofType(_)$build(_,_,_)
    func336.paramTypes = [];
    func336.paramTypes.push([type_String, "name'"]);
    func336.paramTypes.push([]);
    this.methods["withName(1)ofType(1)$build(3)"] = func336;
    func336.methodName = "withName(1)ofType(1)$build(3)";
    func336.paramCounts = [1, 1];
    func336.paramNames = ["name'", "type'"];
    func336.definitionLine = 26;
    func336.definitionModule = "staticTypes";
    var func350 = function(argcv, var_type__39__) {    // method ofType(_), line 33
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("ofType(_)", 0, numArgs - 1);
      }
      setLineNumber(34);    // compilenode string
      var string352 = new GraceString("_");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call351 = selfRequest(this, "withName(1)ofType(1)", [1, 1], string352, var_type__39__);
      return call351;
    };    // end of method ofType(_)
    func350.paramTypes = [];
    func350.paramTypes.push([type_Object, "type'"]);
    this.methods["ofType(1)"] = func350;
    func350.methodName = "ofType(1)";
    func350.paramCounts = [1];
    func350.paramNames = ["type'"];
    func350.definitionLine = 33;
    func350.definitionModule = "staticTypes";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 24;
        m.definitionModule = "staticTypes";
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
    var obj334_init = function() {    // init of object on line 24
    };
    return obj334_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj334 = emptyGraceObject("aParam", "staticTypes", 24);
  var obj334_init = obj334_build.call(obj334, null, this, [], []);
  obj334_init.call(obj334);  // end of compileobject
  var var_aParam = obj334;
  var reader353_aParam = function() {  // reader method aParam
      if (var_aParam === undefined) raiseUninitializedVariable("aParam");
      return var_aParam;
  };
  reader353_aParam.isDef = true;
  reader353_aParam.confidential = true;
  this.methods["aParam"] = reader353_aParam;
  setLineNumber(51);    // compilenode object
  var obj354_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_staticTypes_51");
    this.outer_staticTypes_51 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func355 = function(argcv, var_signature__39__, var_rType) {    // method signature(_)returnType(_), line 54
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("signature(_)returnType(_)", 0, numArgs - 2);
      }
      var ouc = emptyGraceObject("aMethodType.signature(_)returnType(_)", "staticTypes", 54);
      var ouc_init = this.methods["signature(1)returnType(1)$build(3)"].call(this, null, var_signature__39__, var_rType, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method signature(_)returnType(_)
    this.methods["signature(1)returnType(1)"] = func355;
    func355.methodName = "signature(1)returnType(1)";
    func355.paramCounts = [1, 1];
    func355.paramNames = ["signature'", "rType"];
    func355.definitionLine = 54;
    func355.definitionModule = "staticTypes";
    var func356 = function(argcv, var_signature__39__, var_rType, inheritingObject, aliases, exclusions) {    // method signature(_)returnType(_)$build(_,_,_), line 54
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("signature(_)returnType(_)", 0, numArgs - 2);
      }
      var obj357_build = function(ignore, var_signature__39__, var_rType, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_54");
        this.outer_staticTypes_54 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        this.data.signature = undefined;
        var reader358_signature = function() {  // reader method signature
            if (this.data.signature === undefined) raiseUninitializedVariable("signature");
            return this.data.signature;
        };
        reader358_signature.isDef = true;
        this.methods["signature"] = reader358_signature;
        this.data.returnType = undefined;
        var reader359_returnType = function() {  // reader method returnType
            if (this.data.returnType === undefined) raiseUninitializedVariable("returnType");
            return this.data.returnType;
        };
        reader359_returnType.isDef = true;
        this.methods["returnType"] = reader359_returnType;
        this.data.name = undefined;
        var reader360_name = function() {  // reader method name
            if (this.data.name === undefined) raiseUninitializedVariable("name");
            return this.data.name;
        };
        reader360_name.isVar = true;
        this.methods["name"] = reader360_name;
        var writer361_name = function(argcv, n) {   // writer method name:=(_)
          this.data.name = n;
          return GraceDone;
        };
        writer361_name.confidential = true;
        this.methods["name:=(1)"] = writer361_name;
        this.data.show = undefined;
        var reader362_show = function() {  // reader method show
            if (this.data.show === undefined) raiseUninitializedVariable("show");
            return this.data.show;
        };
        reader362_show.isVar = true;
        reader362_show.confidential = true;
        this.methods["show"] = reader362_show;
        var writer363_show = function(argcv, n) {   // writer method show:=(_)
          this.data.show = n;
          return GraceDone;
        };
        writer363_show.confidential = true;
        this.methods["show:=(1)"] = writer363_show;
        this.data.fst = undefined;
        var reader364_fst = function() {  // reader method fst
            if (this.data.fst === undefined) raiseUninitializedVariable("fst");
            return this.data.fst;
        };
        reader364_fst.isDef = true;
        reader364_fst.confidential = true;
        this.methods["fst"] = reader364_fst;
        var func365 = function(argcv, var_other) {    // method isSpecialisationOf(_), line 86
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("isSpecialisationOf(_)", 0, numArgs - 1);
          }
          var if366 = GraceDone;
          setLineNumber(87);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call367 = selfRequest(this, "isMe(1)", [1], var_other);
          if (Grace_isTrue(call367)) {
            setLineNumber(88);    // compilenode return
            return GraceTrue;
          }
          var if368 = GraceDone;
          setLineNumber(91);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call369 = selfRequest(this, "name", [0]);
          // call case 6: other requests
          var call370 = request(var_other, "name", [0]);
          var opresult371 = request(call369, "\u2260(1)", [1], call370);
          if (Grace_isTrue(opresult371)) {
            setLineNumber(92);    // compilenode return
            return GraceFalse;
          }
          var if372 = GraceDone;
          setLineNumber(95);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call374 = request(var_other, "signature", [0]);
          var call373 = request(call374, "size", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call376 = selfRequest(this, "signature", [0]);
          var call375 = request(call376, "size", [0]);
          var opresult377 = request(call373, "\u2260(1)", [1], call375);
          if (Grace_isTrue(opresult377)) {
            setLineNumber(96);    // compilenode return
            return GraceFalse;
          }
          setLineNumber(99);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call379 = selfRequest(this, "signature", [0]);
          // call case 6: other requests
          var call380 = request(var_other, "signature", [0]);
          var block381 = new GraceBlock(this, 99, 2);
          block381.guard = jsTrue;
          block381.real = function block381(var_part, var_part__39__) {
            var if382 = GraceDone;
            setLineNumber(100);    // compilenode member
            // call case 6: other requests
            var call383 = request(var_part, "name", [0]);
            // call case 6: other requests
            var call384 = request(var_part__39__, "name", [0]);
            var opresult385 = request(call383, "\u2260(1)", [1], call384);
            if (Grace_isTrue(opresult385)) {
              setLineNumber(101);    // compilenode return
              throw new ReturnException(GraceFalse, returnTarget);
            }
            setLineNumber(104);    // compilenode member
            // call case 6: other requests
            var call387 = request(var_part, "parameters", [0]);
            // call case 6: other requests
            var call388 = request(var_part__39__, "parameters", [0]);
            var block389 = new GraceBlock(this, 104, 2);
            block389.guard = jsTrue;
            block389.real = function block389(var_p, var_p__39__) {
              setLineNumber(105);    // compilenode member
              // call case 6: other requests
              var call390 = request(var_p, "typeAnnotation", [0]);
              var var_pt = call390;
              setLineNumber(106);    // compilenode member
              // call case 6: other requests
              var call391 = request(var_p__39__, "typeAnnotation", [0]);
              var var_pt__39__ = call391;
              var if392 = GraceDone;
              setLineNumber(109);    // compilenode member
              // call case 6: other requests
              if (var_pt === undefined) raiseUninitializedVariable("pt");
              // call case 6: other requests
              if (var_pt__39__ === undefined) raiseUninitializedVariable("pt'");
              var call394 = request(var_pt__39__, "isSubtypeOf(1)", [1], var_pt);
              var call393 = request(call394, "not", [0]);
              if (Grace_isTrue(call393)) {
                setLineNumber(110);    // compilenode return
                throw new ReturnException(GraceFalse, returnTarget);
              }
              return if392;
            };
            let applyMeth389 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth389.methodName = "apply(2)";
            applyMeth389.paramCounts = [2];
            applyMeth389.paramNames = ["p", "p'"];
            applyMeth389.definitionLine = 104;
            applyMeth389.definitionModule = "staticTypes";
            block389.methods["apply(2)"] = applyMeth389;
            let matchesMeth389 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth389.methodName = "matches(2)";
            matchesMeth389.paramCounts = [2];
            matchesMeth389.paramNames = ["p", "p'"];
            matchesMeth389.definitionLine = 104;
            matchesMeth389.definitionModule = "staticTypes";
            block389.methods["matches(2)"] = matchesMeth389;
            // call case 2: outer request
            var call386 = selfRequest(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call387, call388, block389);
            return call386;
          };
          let applyMeth381 = function apply_2 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth381.methodName = "apply(2)";
          applyMeth381.paramCounts = [2];
          applyMeth381.paramNames = ["part", "part'"];
          applyMeth381.definitionLine = 99;
          applyMeth381.definitionModule = "staticTypes";
          block381.methods["apply(2)"] = applyMeth381;
          let matchesMeth381 = function matches_2 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth381.methodName = "matches(2)";
          matchesMeth381.paramCounts = [2];
          matchesMeth381.paramNames = ["part", "part'"];
          matchesMeth381.definitionLine = 99;
          matchesMeth381.definitionModule = "staticTypes";
          block381.methods["matches(2)"] = matchesMeth381;
          // call case 2: outer request
          var call378 = selfRequest(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call379, call380, block381);
          setLineNumber(115);    // compilenode member
          // call case 6: other requests
          var call396 = request(var_other, "returnType", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call397 = selfRequest(this, "returnType", [0]);
          var call395 = request(call397, "isSubtypeOf(1)", [1], call396);
          return call395;
        };    // end of method isSpecialisationOf(_)
        this.methods["isSpecialisationOf(1)"] = func365;
        func365.methodName = "isSpecialisationOf(1)";
        func365.paramCounts = [1];
        func365.paramNames = ["other"];
        func365.definitionLine = 86;
        func365.definitionModule = "staticTypes";
        this.data.asString = undefined;
        var reader398_asString = function() {  // reader method asString
            if (this.data.asString === undefined) raiseUninitializedVariable("asString");
            return this.data.asString;
        };
        reader398_asString.isDef = true;
        this.methods["asString"] = reader398_asString;
        this.mutable = true;
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 54;
            m.definitionModule = "staticTypes";
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
        var obj357_init = function() {    // init of object on line 54
          this.data.signature = var_signature__39__;
          this.data.returnType = var_rType;
          setLineNumber(59);    // compilenode string
          var string399 = new GraceString("");
          this.data.name = string399;
          setLineNumber(60);    // compilenode string
          var string400 = new GraceString("");
          this.data.show = string400;
          setLineNumber(62);    // compilenode num
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call402 = selfRequest(this, "signature", [0]);
          var call401 = request(call402, "at(1)", [1], new GraceNum(1));
          this.data.fst = call401;
          var if403 = GraceDone;
          setLineNumber(64);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call406 = selfRequest(this, "fst", [0]);
          var call405 = request(call406, "parameters", [0]);
          var call404 = request(call405, "size", [0]);
          var opresult407 = request(call404, "==(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult407)) {
            setLineNumber(65);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call410 = selfRequest(this, "fst", [0]);
            var call409 = request(call410, "name", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call408 = selfRequest(this, "name:=(1)", [1], call409);
            setLineNumber(66);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call412 = selfRequest(this, "name", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call411 = selfRequest(this, "show:=(1)", [1], call412);
            if403 = call411;
          } else {
            setLineNumber(68);    // compilenode block
            var block414 = new GraceBlock(this, 68, 1);
            block414.guard = jsTrue;
            block414.real = function block414(var_part) {
              setLineNumber(69);    // compilenode string
              var string416 = new GraceString("");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call417 = selfRequest(this, "name", [0]);
              var opresult418 = request(string416, "++(1)", [1], call417);
              var string419 = new GraceString("");
              var opresult420 = request(opresult418, "++(1)", [1], string419);
              // call case 6: other requests
              var call421 = request(var_part, "name", [0]);
              var opresult422 = request(opresult420, "++(1)", [1], call421);
              var string423 = new GraceString("(");
              var opresult424 = request(opresult422, "++(1)", [1], string423);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call415 = selfRequest(this, "name:=(1)", [1], opresult424);
              setLineNumber(70);    // compilenode string
              var string426 = new GraceString("");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call427 = selfRequest(this, "show", [0]);
              var opresult428 = request(string426, "++(1)", [1], call427);
              var string429 = new GraceString("");
              var opresult430 = request(opresult428, "++(1)", [1], string429);
              // call case 6: other requests
              var call431 = request(var_part, "name", [0]);
              var opresult432 = request(opresult430, "++(1)", [1], call431);
              var string433 = new GraceString("(");
              var opresult434 = request(opresult432, "++(1)", [1], string433);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call425 = selfRequest(this, "show:=(1)", [1], opresult434);
              setLineNumber(71);    // compilenode block
              var block436 = new GraceBlock(this, 71, 1);
              block436.guard = jsTrue;
              block436.real = function block436(var_param) {
                setLineNumber(72);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call438 = selfRequest(this, "show", [0]);
                var opresult439 = request(call438, "++(1)", [1], var_param);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call437 = selfRequest(this, "show:=(1)", [1], opresult439);
                setLineNumber(73);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call441 = selfRequest(this, "name", [0]);
                var string442 = new GraceString("_");
                var opresult443 = request(call441, "++(1)", [1], string442);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call440 = selfRequest(this, "name:=(1)", [1], opresult443);
                return call440;
              };
              let applyMeth436 = function apply_1 (argcv, ...args) {
                  if (this.guard.apply(this.receiver, args))
                      return this.real.apply(this.receiver, args);
                  badBlockArgs.apply(this, args);
              };
              applyMeth436.methodName = "apply(1)";
              applyMeth436.paramCounts = [1];
              applyMeth436.paramNames = ["param"];
              applyMeth436.definitionLine = 71;
              applyMeth436.definitionModule = "staticTypes";
              block436.methods["apply(1)"] = applyMeth436;
              let matchesMeth436 = function matches_1 (argcv, ...args) {
                  return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
              };
              matchesMeth436.methodName = "matches(1)";
              matchesMeth436.paramCounts = [1];
              matchesMeth436.paramNames = ["param"];
              matchesMeth436.definitionLine = 71;
              matchesMeth436.definitionModule = "staticTypes";
              block436.methods["matches(1)"] = matchesMeth436;
              setLineNumber(74);    // compilenode block
              var block444 = new GraceBlock(this, 74, 0);
              block444.guard = jsTrue;
              block444.real = function block444() {
                setLineNumber(75);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call446 = selfRequest(this, "show", [0]);
                var string447 = new GraceString(", ");
                var opresult448 = request(call446, "++(1)", [1], string447);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call445 = selfRequest(this, "show:=(1)", [1], opresult448);
                setLineNumber(76);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call450 = selfRequest(this, "name", [0]);
                var string451 = new GraceString(",");
                var opresult452 = request(call450, "++(1)", [1], string451);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call449 = selfRequest(this, "name:=(1)", [1], opresult452);
                return call449;
              };
              let applyMeth444 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth444.methodName = "apply";
              applyMeth444.paramCounts = [0];
              applyMeth444.paramNames = [];
              applyMeth444.definitionLine = 74;
              applyMeth444.definitionModule = "staticTypes";
              block444.methods["apply"] = applyMeth444;
              // call case 6: other requests
              setLineNumber(71);    // compilenode member
              // call case 6: other requests
              var call453 = request(var_part, "parameters", [0]);
              var call435 = request(call453, "do(1)separatedBy(1)", [1, 1], block436, block444);
              setLineNumber(78);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call455 = selfRequest(this, "show", [0]);
              var string456 = new GraceString(")");
              var opresult457 = request(call455, "++(1)", [1], string456);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call454 = selfRequest(this, "show:=(1)", [1], opresult457);
              setLineNumber(79);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call459 = selfRequest(this, "name", [0]);
              var string460 = new GraceString(")");
              var opresult461 = request(call459, "++(1)", [1], string460);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call458 = selfRequest(this, "name:=(1)", [1], opresult461);
              return call458;
            };
            let applyMeth414 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth414.methodName = "apply(1)";
            applyMeth414.paramCounts = [1];
            applyMeth414.paramNames = ["part"];
            applyMeth414.definitionLine = 68;
            applyMeth414.definitionModule = "staticTypes";
            block414.methods["apply(1)"] = applyMeth414;
            let matchesMeth414 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth414.methodName = "matches(1)";
            matchesMeth414.paramCounts = [1];
            matchesMeth414.paramNames = ["part"];
            matchesMeth414.definitionLine = 68;
            matchesMeth414.definitionModule = "staticTypes";
            block414.methods["matches(1)"] = matchesMeth414;
            // call case 6: other requests
            setLineNumber(68);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call462 = selfRequest(this, "signature", [0]);
            var call413 = request(call462, "do(1)", [1], block414);
            if403 = call413;
          }
          setLineNumber(83);    // compilenode string
          var string464 = new GraceString("");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call465 = selfRequest(this, "show", [0]);
          var opresult466 = request(string464, "++(1)", [1], call465);
          var string467 = new GraceString(" -> ");
          var opresult468 = request(opresult466, "++(1)", [1], string467);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call469 = selfRequest(this, "returnType", [0]);
          var opresult470 = request(opresult468, "++(1)", [1], call469);
          var string471 = new GraceString("");
          var opresult472 = request(opresult470, "++(1)", [1], string471);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call463 = selfRequest(this, "show:=(1)", [1], opresult472);
          setLineNumber(118);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call473 = selfRequest(this, "show", [0]);
          this.data.asString = call473;
        };
        return obj357_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj357_init = obj357_build.call(inheritingObject, null, var_signature__39__, var_rType, this, aliases, exclusions);
      return obj357_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method signature(_)returnType(_)$build(_,_,_)
    this.methods["signature(1)returnType(1)$build(3)"] = func356;
    func356.methodName = "signature(1)returnType(1)$build(3)";
    func356.paramCounts = [1, 1];
    func356.paramNames = ["signature'", "rType"];
    func356.definitionLine = 54;
    func356.definitionModule = "staticTypes";
    var func474 = function(argcv, var_name, var_rType) {    // method member(_)ofType(_), line 122
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("member(_)ofType(_)", 0, numArgs - 2);
      }
      setLineNumber(123);    // compilenode array
      var array478 = new GraceSequence([]);
      // call case 2: outer request
      var call477 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], var_name, array478);
      var array476 = new GraceSequence([call477]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call475 = selfRequest(this, "signature(1)returnType(1)", [1, 1], array476, var_rType);
      return call475;
    };    // end of method member(_)ofType(_)
    func474.paramTypes = [];
    func474.paramTypes.push([type_String, "name"]);
    func474.paramTypes.push([]);
    this.methods["member(1)ofType(1)"] = func474;
    func474.methodName = "member(1)ofType(1)";
    func474.paramCounts = [1, 1];
    func474.paramNames = ["name", "rType"];
    func474.definitionLine = 122;
    func474.definitionModule = "staticTypes";
    var func479 = function(argcv, var_node) {    // method fromNode(_), line 129
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromNode(_)", 0, numArgs - 1);
      }
      setLineNumber(130);    // compilenode matchcase
      var cases480 = [];
      var block481 = new GraceBlock(this, 130, 1);
      // call case 2: outer request
      var call482 = selfRequest(importedModules["staticTypes"], "Method", [0]);
      // call case 2: outer request
      var call483 = selfRequest(importedModules["staticTypes"], "Class", [0]);
      var opresult484 = request(call482, "|(1)", [1], call483);
      // call case 2: outer request
      var call485 = selfRequest(importedModules["staticTypes"], "MethodSignature", [0]);
      var opresult486 = request(opresult484, "|(1)", [1], call485);
      block481.paramTypes = [opresult486];
      var matches487 = function(var_meth) {
        // call case 2: outer request
        var call488 = selfRequest(importedModules["staticTypes"], "Method", [0]);
        // call case 2: outer request
        var call489 = selfRequest(importedModules["staticTypes"], "Class", [0]);
        var opresult490 = request(call488, "|(1)", [1], call489);
        // call case 2: outer request
        var call491 = selfRequest(importedModules["staticTypes"], "MethodSignature", [0]);
        var opresult492 = request(opresult490, "|(1)", [1], call491);
        if (!Grace_isTrue(request(opresult492, "matches(1)", [1], var_meth)))
            return false;
        return true;
      };
      block481.guard = matches487;
      block481.real = function block481(var_meth) {
        setLineNumber(131);    // compilenode array
        var array494 = new GraceSequence([]);
        // call case 2: outer request
        var call493 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array494);
        var var_signature = call493;
        setLineNumber(133);    // compilenode block
        var block496 = new GraceBlock(this, 133, 1);
        block496.guard = jsTrue;
        block496.real = function block496(var_part) {
          setLineNumber(134);    // compilenode array
          var array498 = new GraceSequence([]);
          // call case 2: outer request
          var call497 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array498);
          var var_params = call497;
          setLineNumber(136);    // compilenode block
          var block500 = new GraceBlock(this, 136, 1);
          block500.guard = jsTrue;
          block500.real = function block500(var_param) {
            setLineNumber(137);    // compilenode member
            // call case 6: other requests
            var call503 = request(var_param, "value", [0]);
            setLineNumber(138);    // compilenode member
            // call case 6: other requests
            var call505 = request(var_param, "dtype", [0]);
            // call case 6: other requests
            if (var_objectType === undefined) raiseUninitializedVariable("objectType");
            var call504 = request(var_objectType, "fromDType(1)", [1], call505);
            // call case 6: other requests
            if (var_aParam === undefined) raiseUninitializedVariable("aParam");
            var call502 = request(var_aParam, "withName(1)ofType(1)", [1, 1], call503, call504);
            // call case 6: other requests
            if (var_params === undefined) raiseUninitializedVariable("params");
            var call501 = request(var_params, "push(1)", [1], call502);
            return call501;
          };
          let applyMeth500 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth500.methodName = "apply(1)";
          applyMeth500.paramCounts = [1];
          applyMeth500.paramNames = ["param"];
          applyMeth500.definitionLine = 136;
          applyMeth500.definitionModule = "staticTypes";
          block500.methods["apply(1)"] = applyMeth500;
          let matchesMeth500 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth500.methodName = "matches(1)";
          matchesMeth500.paramCounts = [1];
          matchesMeth500.paramNames = ["param"];
          matchesMeth500.definitionLine = 136;
          matchesMeth500.definitionModule = "staticTypes";
          block500.methods["matches(1)"] = matchesMeth500;
          // call case 6: other requests
          setLineNumber(136);    // compilenode member
          // call case 6: other requests
          var call506 = request(var_part, "params", [0]);
          var call499 = request(call506, "do(1)", [1], block500);
          setLineNumber(141);    // compilenode member
          // call case 6: other requests
          var call509 = request(var_part, "name", [0]);
          if (var_params === undefined) raiseUninitializedVariable("params");
          // call case 2: outer request
          var call508 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], call509, var_params);
          // call case 6: other requests
          if (var_signature === undefined) raiseUninitializedVariable("signature");
          var call507 = request(var_signature, "push(1)", [1], call508);
          return call507;
        };
        let applyMeth496 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth496.methodName = "apply(1)";
        applyMeth496.paramCounts = [1];
        applyMeth496.paramNames = ["part"];
        applyMeth496.definitionLine = 133;
        applyMeth496.definitionModule = "staticTypes";
        block496.methods["apply(1)"] = applyMeth496;
        let matchesMeth496 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth496.methodName = "matches(1)";
        matchesMeth496.paramCounts = [1];
        matchesMeth496.paramNames = ["part"];
        matchesMeth496.definitionLine = 133;
        matchesMeth496.definitionModule = "staticTypes";
        block496.methods["matches(1)"] = matchesMeth496;
        // call case 6: other requests
        setLineNumber(133);    // compilenode member
        // call case 6: other requests
        var call510 = request(var_meth, "signature", [0]);
        var call495 = request(call510, "do(1)", [1], block496);
        setLineNumber(144);    // compilenode matchcase
        var cases511 = [];
        var block512 = new GraceBlock(this, 144, 1);
        // call case 2: outer request
        var call513 = selfRequest(importedModules["staticTypes"], "Method", [0]);
        // call case 2: outer request
        var call514 = selfRequest(importedModules["staticTypes"], "Class", [0]);
        var opresult515 = request(call513, "|(1)", [1], call514);
        block512.paramTypes = [opresult515];
        var matches516 = function(var_m) {
          // call case 2: outer request
          var call517 = selfRequest(importedModules["staticTypes"], "Method", [0]);
          // call case 2: outer request
          var call518 = selfRequest(importedModules["staticTypes"], "Class", [0]);
          var opresult519 = request(call517, "|(1)", [1], call518);
          if (!Grace_isTrue(request(opresult519, "matches(1)", [1], var_m)))
              return false;
          return true;
        };
        block512.guard = matches516;
        block512.real = function block512(var_m) {
          setLineNumber(145);    // compilenode member
          // call case 6: other requests
          var call520 = request(var_m, "dtype", [0]);
          return call520;
        };
        let applyMeth512 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth512.methodName = "apply(1)";
        applyMeth512.paramCounts = [1];
        applyMeth512.paramNames = ["m"];
        applyMeth512.definitionLine = 144;
        applyMeth512.definitionModule = "staticTypes";
        block512.methods["apply(1)"] = applyMeth512;
        let matchesMeth512 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth512.methodName = "matches(1)";
        matchesMeth512.paramCounts = [1];
        matchesMeth512.paramNames = ["m"];
        matchesMeth512.definitionLine = 144;
        matchesMeth512.definitionModule = "staticTypes";
        block512.methods["matches(1)"] = matchesMeth512;
        cases511.push(block512);
        setLineNumber(146);    // compilenode block
        var block521 = new GraceBlock(this, 146, 1);
        // call case 2: outer request
        var call522 = selfRequest(importedModules["staticTypes"], "MethodSignature", [0]);
        block521.paramTypes = [call522];
        var matches523 = function(var_m) {
          // call case 2: outer request
          var call524 = selfRequest(importedModules["staticTypes"], "MethodSignature", [0]);
          if (!Grace_isTrue(request(call524, "matches(1)", [1], var_m)))
              return false;
          return true;
        };
        block521.guard = matches523;
        block521.real = function block521(var_m) {
          setLineNumber(147);    // compilenode member
          // call case 6: other requests
          var call525 = request(var_meth, "rtype", [0]);
          return call525;
        };
        let applyMeth521 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth521.methodName = "apply(1)";
        applyMeth521.paramCounts = [1];
        applyMeth521.paramNames = ["m"];
        applyMeth521.definitionLine = 146;
        applyMeth521.definitionModule = "staticTypes";
        block521.methods["apply(1)"] = applyMeth521;
        let matchesMeth521 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth521.methodName = "matches(1)";
        matchesMeth521.paramCounts = [1];
        matchesMeth521.paramNames = ["m"];
        matchesMeth521.definitionLine = 146;
        matchesMeth521.definitionModule = "staticTypes";
        block521.methods["matches(1)"] = matchesMeth521;
        cases511.push(block521);
        setLineNumber(148);    // compilenode block
        var block526 = new GraceBlock(this, 148, 0);
        block526.guard = jsTrue;
        block526.real = function block526() {
          setLineNumber(148);    // compileBlock
          return GraceDone;
        };
        let applyMeth526 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth526.methodName = "apply";
        applyMeth526.paramCounts = [0];
        applyMeth526.paramNames = [];
        applyMeth526.definitionLine = 148;
        applyMeth526.definitionModule = "staticTypes";
        block526.methods["apply"] = applyMeth526;
        setLineNumber(144);    // compilematchcase
        var matchres511 = matchCase(var_meth,cases511,block526);
        var var_rType = matchres511;
        setLineNumber(150);    // compilenode call
        if (var_signature === undefined) raiseUninitializedVariable("signature");
        setLineNumber(151);    // compilenode call
        if (var_rType === undefined) raiseUninitializedVariable("rType");
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call528 = request(var_objectType, "fromDType(1)", [1], var_rType);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call527 = selfRequest(this, "signature(1)returnType(1)", [1, 1], var_signature, call528);
        throw new ReturnException(call527, returnTarget);
      };
      let applyMeth481 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth481.methodName = "apply(1)";
      applyMeth481.paramCounts = [1];
      applyMeth481.paramNames = ["meth"];
      applyMeth481.definitionLine = 130;
      applyMeth481.definitionModule = "staticTypes";
      block481.methods["apply(1)"] = applyMeth481;
      let matchesMeth481 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth481.methodName = "matches(1)";
      matchesMeth481.paramCounts = [1];
      matchesMeth481.paramNames = ["meth"];
      matchesMeth481.definitionLine = 130;
      matchesMeth481.definitionModule = "staticTypes";
      block481.methods["matches(1)"] = matchesMeth481;
      cases480.push(block481);
      setLineNumber(152);    // compilenode block
      var block529 = new GraceBlock(this, 152, 1);
      // call case 2: outer request
      var call530 = selfRequest(importedModules["staticTypes"], "Def", [0]);
      // call case 2: outer request
      var call531 = selfRequest(importedModules["staticTypes"], "Var", [0]);
      var opresult532 = request(call530, "|(1)", [1], call531);
      block529.paramTypes = [opresult532];
      var matches533 = function(var_defd) {
        // call case 2: outer request
        var call534 = selfRequest(importedModules["staticTypes"], "Def", [0]);
        // call case 2: outer request
        var call535 = selfRequest(importedModules["staticTypes"], "Var", [0]);
        var opresult536 = request(call534, "|(1)", [1], call535);
        if (!Grace_isTrue(request(opresult536, "matches(1)", [1], var_defd)))
            return false;
        return true;
      };
      block529.guard = matches533;
      block529.real = function block529(var_defd) {
        setLineNumber(153);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call540 = request(var_defd, "name", [0]);
        var call539 = request(call540, "value", [0]);
        var array541 = new GraceSequence([]);
        // call case 2: outer request
        var call538 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], call539, array541);
        var array537 = new GraceSequence([call538]);
        var var_signature = array537;
        setLineNumber(154);    // compilenode member
        // call case 6: other requests
        var call543 = request(var_defd, "dtype", [0]);
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call542 = request(var_objectType, "fromDType(1)", [1], call543);
        var var_dtype = call542;
        setLineNumber(155);    // compilenode call
        if (var_signature === undefined) raiseUninitializedVariable("signature");
        if (var_dtype === undefined) raiseUninitializedVariable("dtype");
        // call case 4: self request with 2 args and 0 typeArgs 
        var call544 = selfRequest(this, "signature(1)returnType(1)", [1, 1], var_signature, var_dtype);
        throw new ReturnException(call544, returnTarget);
      };
      let applyMeth529 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth529.methodName = "apply(1)";
      applyMeth529.paramCounts = [1];
      applyMeth529.paramNames = ["defd"];
      applyMeth529.definitionLine = 152;
      applyMeth529.definitionModule = "staticTypes";
      block529.methods["apply(1)"] = applyMeth529;
      let matchesMeth529 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth529.methodName = "matches(1)";
      matchesMeth529.paramCounts = [1];
      matchesMeth529.paramNames = ["defd"];
      matchesMeth529.definitionLine = 152;
      matchesMeth529.definitionModule = "staticTypes";
      block529.methods["matches(1)"] = matchesMeth529;
      cases480.push(block529);
      setLineNumber(156);    // compilenode block
      var block545 = new GraceBlock(this, 156, 0);
      block545.guard = jsTrue;
      block545.real = function block545() {
        setLineNumber(157);    // compilenode string
        var string547 = new GraceString("unrecognised method node");
        // call case 6: other requests
        // call case 2: outer request
        var call548 = selfRequest(var_prelude, "Exception", [0]);
        var call546 = request(call548, "raise(1)with(1)", [1, 1], string547, var_node);
        return call546;
      };
      let applyMeth545 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth545.methodName = "apply";
      applyMeth545.paramCounts = [0];
      applyMeth545.paramNames = [];
      applyMeth545.definitionLine = 156;
      applyMeth545.definitionModule = "staticTypes";
      block545.methods["apply"] = applyMeth545;
      setLineNumber(130);    // compilematchcase
      var matchres480 = matchCase(var_node,cases480,block545);
      return matchres480;
    };    // end of method fromNode(_)
    this.methods["fromNode(1)"] = func479;
    func479.methodName = "fromNode(1)";
    func479.paramCounts = [1];
    func479.paramNames = ["node"];
    func479.definitionLine = 129;
    func479.definitionModule = "staticTypes";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 51;
        m.definitionModule = "staticTypes";
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
    var obj354_init = function() {    // init of object on line 51
    };
    return obj354_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj354 = emptyGraceObject("aMethodType", "staticTypes", 51);
  var obj354_init = obj354_build.call(obj354, null, this, [], []);
  obj354_init.call(obj354);  // end of compileobject
  var var_aMethodType = obj354;
  var reader549_aMethodType = function() {  // reader method aMethodType
      if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
      return var_aMethodType;
  };
  reader549_aMethodType.isDef = true;
  reader549_aMethodType.confidential = true;
  this.methods["aMethodType"] = reader549_aMethodType;
  setLineNumber(166);    // compilenode string
  var string551 = new GraceString("noSuchMethod");
  // call case 6: other requests
  // call case 2: outer request
  var call552 = selfRequest(var_prelude, "Singleton", [0]);
  var call550 = request(call552, "named(1)", [1], string551);
  var var_noSuchMethod = call550;
  var reader553_noSuchMethod = function() {  // reader method noSuchMethod
      if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
      return var_noSuchMethod;
  };
  reader553_noSuchMethod.isDef = true;
  reader553_noSuchMethod.confidential = true;
  this.methods["noSuchMethod"] = reader553_noSuchMethod;
  setLineNumber(183);    // compilenode object
  var obj554_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_staticTypes_183");
    this.outer_staticTypes_183 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func555 = function(argcv, var_methods__39__) {    // method fromMethods(_), line 186
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromMethods(_)", 0, numArgs - 1);
      }
      var ouc = emptyGraceObject("objectType.fromMethods(_)", "staticTypes", 186);
      var ouc_init = this.methods["fromMethods(1)$build(3)"].call(this, null, var_methods__39__, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method fromMethods(_)
    this.methods["fromMethods(1)"] = func555;
    func555.methodName = "fromMethods(1)";
    func555.paramCounts = [1];
    func555.paramNames = ["methods'"];
    func555.definitionLine = 186;
    func555.definitionModule = "staticTypes";
    var func556 = function(argcv, var_methods__39__, inheritingObject, aliases, exclusions) {    // method fromMethods(_)$build(_,_,_), line 186
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromMethods(_)", 0, numArgs - 1);
      }
      var obj557_build = function(ignore, var_methods__39__, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_186");
        this.outer_staticTypes_186 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        this.data.methods = undefined;
        var reader558_methods = function() {  // reader method methods
            if (this.data.methods === undefined) raiseUninitializedVariable("methods");
            return this.data.methods;
        };
        reader558_methods.isDef = true;
        this.methods["methods"] = reader558_methods;
        var func559 = function(argcv, var_name) {    // method getMethod(_), line 190
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("getMethod(_)", 0, numArgs - 1);
          }
          setLineNumber(191);    // compilenode block
          var block561 = new GraceBlock(this, 191, 1);
          block561.guard = jsTrue;
          block561.real = function block561(var_meth) {
            var if562 = GraceDone;
            setLineNumber(192);    // compilenode member
            // call case 6: other requests
            var call563 = request(var_meth, "name", [0]);
            var opresult564 = request(call563, "==(1)", [1], var_name);
            if (Grace_isTrue(opresult564)) {
              setLineNumber(193);    // compilenode return
              throw new ReturnException(var_meth, returnTarget);
            }
            return if562;
          };
          let applyMeth561 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth561.methodName = "apply(1)";
          applyMeth561.paramCounts = [1];
          applyMeth561.paramNames = ["meth"];
          applyMeth561.definitionLine = 191;
          applyMeth561.definitionModule = "staticTypes";
          block561.methods["apply(1)"] = applyMeth561;
          let matchesMeth561 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth561.methodName = "matches(1)";
          matchesMeth561.paramCounts = [1];
          matchesMeth561.paramNames = ["meth"];
          matchesMeth561.definitionLine = 191;
          matchesMeth561.definitionModule = "staticTypes";
          block561.methods["matches(1)"] = matchesMeth561;
          // call case 6: other requests
          setLineNumber(191);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call565 = selfRequest(this, "methods", [0]);
          var call560 = request(call565, "do(1)", [1], block561);
          setLineNumber(197);    // compilenode return
          if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
          return var_noSuchMethod;
        };    // end of method getMethod(_)
        func559.paramTypes = [];
        func559.paramTypes.push([type_String, "name"]);
        this.methods["getMethod(1)"] = func559;
        func559.methodName = "getMethod(1)";
        func559.paramCounts = [1];
        func559.paramNames = ["name"];
        func559.definitionLine = 190;
        func559.definitionModule = "staticTypes";
        this.data.isUnknown = undefined;
        var reader566_isUnknown = function() {  // reader method isUnknown
            if (this.data.isUnknown === undefined) raiseUninitializedVariable("isUnknown");
            return this.data.isUnknown;
        };
        reader566_isUnknown.isDef = true;
        this.methods["isUnknown"] = reader566_isUnknown;
        this.data.currentlyTesting = undefined;
        var reader567_currentlyTesting = function() {  // reader method currentlyTesting
            if (this.data.currentlyTesting === undefined) raiseUninitializedVariable("currentlyTesting");
            return this.data.currentlyTesting;
        };
        reader567_currentlyTesting.isDef = true;
        reader567_currentlyTesting.confidential = true;
        this.methods["currentlyTesting"] = reader567_currentlyTesting;
        var func568 = function(argcv, var_other) {    // method isSubtypeOf(_), line 205
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("isSubtypeOf(_)", 0, numArgs - 1);
          }
          var if569 = GraceDone;
          setLineNumber(206);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call570 = selfRequest(this, "isMe(1)", [1], var_other);
          if (Grace_isTrue(call570)) {
            setLineNumber(207);    // compilenode return
            return GraceTrue;
          }
          var if571 = GraceDone;
          setLineNumber(210);    // compilenode member
          // call case 6: other requests
          var call572 = request(var_other, "isUnknown", [0]);
          if (Grace_isTrue(call572)) {
            setLineNumber(211);    // compilenode return
            return GraceTrue;
          }
          var if573 = GraceDone;
          setLineNumber(215);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call575 = selfRequest(this, "currentlyTesting", [0]);
          var call574 = request(call575, "contains(1)", [1], var_other);
          if (Grace_isTrue(call574)) {
            setLineNumber(216);    // compilenode return
            return GraceTrue;
          }
          setLineNumber(219);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call577 = selfRequest(this, "currentlyTesting", [0]);
          var call576 = request(call577, "push(1)", [1], var_other);
          setLineNumber(221);    // compilenode member
          // call case 6: other requests
          var call579 = request(var_other, "methods", [0]);
          var block580 = new GraceBlock(this, 221, 2);
          block580.guard = jsTrue;
          block580.real = function block580(var_a, var_continue) {
            setLineNumber(222);    // compilenode block
            var block582 = new GraceBlock(this, 222, 1);
            block582.guard = jsTrue;
            block582.real = function block582(var_b) {
              var if583 = GraceDone;
              setLineNumber(223);    // compilenode call
              // call case 6: other requests
              var call584 = request(var_b, "isSpecialisationOf(1)", [1], var_a);
              if (Grace_isTrue(call584)) {
                setLineNumber(224);    // compilenode member
                // call case 6: other requests
                var call585 = request(var_continue, "apply", [0]);
                if583 = call585;
              }
              return if583;
            };
            let applyMeth582 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth582.methodName = "apply(1)";
            applyMeth582.paramCounts = [1];
            applyMeth582.paramNames = ["b"];
            applyMeth582.definitionLine = 222;
            applyMeth582.definitionModule = "staticTypes";
            block582.methods["apply(1)"] = applyMeth582;
            let matchesMeth582 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth582.methodName = "matches(1)";
            matchesMeth582.paramCounts = [1];
            matchesMeth582.paramNames = ["b"];
            matchesMeth582.definitionLine = 222;
            matchesMeth582.definitionModule = "staticTypes";
            block582.methods["matches(1)"] = matchesMeth582;
            // call case 6: other requests
            setLineNumber(222);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call586 = selfRequest(this, "methods", [0]);
            var call581 = request(call586, "do(1)", [1], block582);
            setLineNumber(228);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call588 = selfRequest(this, "currentlyTesting", [0]);
            var call587 = request(call588, "pop", [0]);
            setLineNumber(229);    // compilenode return
            throw new ReturnException(GraceFalse, returnTarget);
          };
          let applyMeth580 = function apply_2 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth580.methodName = "apply(2)";
          applyMeth580.paramCounts = [2];
          applyMeth580.paramNames = ["a", "continue"];
          applyMeth580.definitionLine = 221;
          applyMeth580.definitionModule = "staticTypes";
          block580.methods["apply(2)"] = applyMeth580;
          let matchesMeth580 = function matches_2 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth580.methodName = "matches(2)";
          matchesMeth580.paramCounts = [2];
          matchesMeth580.paramNames = ["a", "continue"];
          matchesMeth580.definitionLine = 221;
          matchesMeth580.definitionModule = "staticTypes";
          block580.methods["matches(2)"] = matchesMeth580;
          // call case 2: outer request
          var call578 = selfRequest(importedModules["staticTypes"], "for(1)doWithContinue(1)", [1, 1], call579, block580);
          setLineNumber(232);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call590 = selfRequest(this, "currentlyTesting", [0]);
          var call589 = request(call590, "pop", [0]);
          setLineNumber(233);    // compilenode return
          return GraceTrue;
        };    // end of method isSubtypeOf(_)
        this.methods["isSubtypeOf(1)"] = func568;
        func568.methodName = "isSubtypeOf(1)";
        func568.paramCounts = [1];
        func568.paramNames = ["other"];
        func568.definitionLine = 205;
        func568.definitionModule = "staticTypes";
        var func591 = function(argcv, var_other) {    // method |(_), line 236
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("|(_)", 0, numArgs - 1);
          }
          var ouc = emptyGraceObject("|(_)", "staticTypes", 236);
          var ouc_init = this.methods["|(1)$build(3)"].call(this, null, var_other, ouc, [], []);
          ouc_init.call(ouc);
          return ouc;
        };    // end of method |(_)
        this.methods["|(1)"] = func591;
        func591.methodName = "|(1)";
        func591.paramCounts = [1];
        func591.paramNames = ["other"];
        func591.definitionLine = 236;
        func591.definitionModule = "staticTypes";
        var func592 = function(argcv, var_other, inheritingObject, aliases, exclusions) {    // method |(_)$build(_,_,_), line 236
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 4;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("|(_)", 0, numArgs - 1);
          }
          var if593 = GraceDone;
          setLineNumber(237);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call594 = selfRequest(this, "isMe(1)", [1], var_other);
          if (Grace_isTrue(call594)) {
            return this;
          }
          var if595 = GraceDone;
          setLineNumber(238);    // compilenode member
          // call case 6: other requests
          var call596 = request(var_other, "isUnknown", [0]);
          if (Grace_isTrue(call596)) {
            // call case 2: outer request
            var call597 = selfRequest(this.outer_staticTypes_186, "unknown", [0]);
            return call597;
          }
          setLineNumber(240);    // compilenode array
          var array599 = new GraceSequence([]);
          // call case 2: outer request
          var call598 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array599);
          var var_combine = call598;
          setLineNumber(242);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call601 = selfRequest(this, "methods", [0]);
          var block602 = new GraceBlock(this, 242, 2);
          block602.guard = jsTrue;
          block602.real = function block602(var_meth, var_continue) {
            setLineNumber(243);    // compilenode block
            var block604 = new GraceBlock(this, 243, 1);
            block604.guard = jsTrue;
            block604.real = function block604(var_meth__39__) {
              var if605 = GraceDone;
              setLineNumber(244);    // compilenode member
              // call case 6: other requests
              var call606 = request(var_meth, "name", [0]);
              // call case 6: other requests
              var call607 = request(var_meth__39__, "name", [0]);
              var opresult608 = request(call606, "==(1)", [1], call607);
              if (Grace_isTrue(opresult608)) {
                var if609 = GraceDone;
                setLineNumber(245);    // compilenode call
                // call case 6: other requests
                var call610 = request(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                if (Grace_isTrue(call610)) {
                  setLineNumber(246);    // compilenode call
                  // call case 6: other requests
                  if (var_combine === undefined) raiseUninitializedVariable("combine");
                  var call611 = request(var_combine, "push(1)", [1], var_meth);
                  if609 = call611;
                } else {
                  var if612 = GraceDone;
                  setLineNumber(247);    // compilenode call
                  // call case 6: other requests
                  var call613 = request(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                  if (Grace_isTrue(call613)) {
                    setLineNumber(248);    // compilenode call
                    // call case 6: other requests
                    if (var_combine === undefined) raiseUninitializedVariable("combine");
                    var call614 = request(var_combine, "push(1)", [1], var_meth__39__);
                    if612 = call614;
                  } else {
                    setLineNumber(250);    // compilenode string
                    var string616 = new GraceString("cannot produce intersection of ");
                    setLineNumber(251);    // compilenode string
                    var string617 = new GraceString("incompatible types '");
                    var opresult618 = request(string617, "++(1)", [1], this);
                    var string619 = new GraceString("' and '");
                    var opresult620 = request(opresult618, "++(1)", [1], string619);
                    var opresult621 = request(opresult620, "++(1)", [1], var_other);
                    var string622 = new GraceString("'");
                    var opresult623 = request(opresult621, "++(1)", [1], string622);
                    var opresult624 = request(string616, "++(1)", [1], opresult623);
                    // call case 6: other requests
                    setLineNumber(250);    // compilenode member
                    // call case 2: outer request
                    var call625 = selfRequest(var_prelude, "TypeError", [0]);
                    var call615 = request(call625, "raise(1)", [1], opresult624);
                    if612 = call615;
                  }
                  if609 = if612;
                }
                setLineNumber(254);    // compilenode member
                // call case 6: other requests
                var call626 = request(var_continue, "apply", [0]);
                if605 = call626;
              }
              return if605;
            };
            let applyMeth604 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth604.methodName = "apply(1)";
            applyMeth604.paramCounts = [1];
            applyMeth604.paramNames = ["meth'"];
            applyMeth604.definitionLine = 243;
            applyMeth604.definitionModule = "staticTypes";
            block604.methods["apply(1)"] = applyMeth604;
            let matchesMeth604 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth604.methodName = "matches(1)";
            matchesMeth604.paramCounts = [1];
            matchesMeth604.paramNames = ["meth'"];
            matchesMeth604.definitionLine = 243;
            matchesMeth604.definitionModule = "staticTypes";
            block604.methods["matches(1)"] = matchesMeth604;
            // call case 6: other requests
            setLineNumber(243);    // compilenode member
            // call case 6: other requests
            var call627 = request(var_other, "methods", [0]);
            var call603 = request(call627, "do(1)", [1], block604);
            return call603;
          };
          let applyMeth602 = function apply_2 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth602.methodName = "apply(2)";
          applyMeth602.paramCounts = [2];
          applyMeth602.paramNames = ["meth", "continue"];
          applyMeth602.definitionLine = 242;
          applyMeth602.definitionModule = "staticTypes";
          block602.methods["apply(2)"] = applyMeth602;
          let matchesMeth602 = function matches_2 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth602.methodName = "matches(2)";
          matchesMeth602.paramCounts = [2];
          matchesMeth602.paramNames = ["meth", "continue"];
          matchesMeth602.definitionLine = 242;
          matchesMeth602.definitionModule = "staticTypes";
          block602.methods["matches(2)"] = matchesMeth602;
          // call case 2: outer request
          var call600 = selfRequest(importedModules["staticTypes"], "for(1)doWithContinue(1)", [1, 1], call601, block602);
          setLineNumber(259);    // compilenode defdec
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var var_hack = var_objectType;
          var obj628_build = function(ignore, var_other, outerObj, aliases, exclusions) {
            this.closureKeys = this.closureKeys || [];
            this.closureKeys.push("outer_staticTypes_260");
            this.outer_staticTypes_260 = outerObj;
            const inheritedExclusions = { };
            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                const exMeth = exclusions[eix];
                inheritedExclusions[exMeth] = this.methods[exMeth]; };
            setLineNumber(261);    // reuse call
            var initFun629 = request(var_hack, "fromMethods(1)$build(3)", [null], var_combine, this, [], []);  // compileReuseCall
            var func630 = function(argcv) {    // method asString, line 263
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("asString", 0, numArgs - 0);
              }
              setLineNumber(264);    // compilenode string
              var string631 = new GraceString("");
              var opresult632 = request(string631, "++(1)", [1], this.outer_staticTypes_260);
              var string633 = new GraceString(" | ");
              var opresult634 = request(opresult632, "++(1)", [1], string633);
              var opresult635 = request(opresult634, "++(1)", [1], var_other);
              var string636 = new GraceString("");
              var opresult637 = request(opresult635, "++(1)", [1], string636);
              return opresult637;
            };    // end of method asString
            this.methods["asString"] = func630;
            func630.methodName = "asString";
            func630.paramCounts = [0];
            func630.paramNames = [];
            func630.definitionLine = 263;
            func630.definitionModule = "staticTypes";
            const overridenByAliases = { };
            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                const a = aliases[aix];
                const newNm = a.newName;
                const oldNm = a.oldName;
                overridenByAliases[newNm] = this.methods[newNm];
                const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                m.definitionLine = 260;
                m.definitionModule = "staticTypes";
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
            var obj628_init = function() {    // init of object on line 260
              initFun629.call(this);
            };
            return obj628_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
          };
          var obj628_init = obj628_build.call(inheritingObject, null, var_other, this, aliases, exclusions);
          return obj628_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
        };    // end of method |(_)$build(_,_,_)
        this.methods["|(1)$build(3)"] = func592;
        func592.methodName = "|(1)$build(3)";
        func592.paramCounts = [1];
        func592.paramNames = ["other"];
        func592.definitionLine = 236;
        func592.definitionModule = "staticTypes";
        var func638 = function(argcv, var_other) {    // method &(_), line 269
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("&(_)", 0, numArgs - 1);
          }
          var ouc = emptyGraceObject("objectType.fromMethods(_).&(_)", "staticTypes", 269);
          var ouc_init = this.methods["&(1)$build(3)"].call(this, null, var_other, ouc, [], []);
          ouc_init.call(ouc);
          return ouc;
        };    // end of method &(_)
        this.methods["&(1)"] = func638;
        func638.methodName = "&(1)";
        func638.paramCounts = [1];
        func638.paramNames = ["other"];
        func638.definitionLine = 269;
        func638.definitionModule = "staticTypes";
        var func639 = function(argcv, var_other, inheritingObject, aliases, exclusions) {    // method &(_)$build(_,_,_), line 269
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 4;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("&(_)", 0, numArgs - 1);
          }
          var if640 = GraceDone;
          setLineNumber(270);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call641 = selfRequest(this, "isMe(1)", [1], var_other);
          if (Grace_isTrue(call641)) {
            return this;
          }
          var if642 = GraceDone;
          setLineNumber(271);    // compilenode member
          // call case 6: other requests
          var call643 = request(var_other, "isUnknown", [0]);
          if (Grace_isTrue(call643)) {
            // call case 2: outer request
            var call644 = selfRequest(this.outer_staticTypes_186, "unknown", [0]);
            return call644;
          }
          setLineNumber(273);    // compilenode array
          var array646 = new GraceSequence([]);
          // call case 2: outer request
          var call645 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array646);
          var var_combine = call645;
          setLineNumber(274);    // compilenode array
          var array648 = new GraceSequence([]);
          // call case 2: outer request
          var call647 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array648);
          var var_twice = call647;
          setLineNumber(276);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call650 = selfRequest(this, "methods", [0]);
          var block651 = new GraceBlock(this, 276, 2);
          block651.guard = jsTrue;
          block651.real = function block651(var_meth, var_continue) {
            setLineNumber(277);    // compilenode block
            var block653 = new GraceBlock(this, 277, 1);
            block653.guard = jsTrue;
            block653.real = function block653(var_meth__39__) {
              var if654 = GraceDone;
              setLineNumber(278);    // compilenode member
              // call case 6: other requests
              var call655 = request(var_meth, "name", [0]);
              // call case 6: other requests
              var call656 = request(var_meth__39__, "name", [0]);
              var opresult657 = request(call655, "==(1)", [1], call656);
              if (Grace_isTrue(opresult657)) {
                var if658 = GraceDone;
                setLineNumber(279);    // compilenode call
                // call case 6: other requests
                var call659 = request(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                if (Grace_isTrue(call659)) {
                  setLineNumber(280);    // compilenode call
                  // call case 6: other requests
                  if (var_combine === undefined) raiseUninitializedVariable("combine");
                  var call660 = request(var_combine, "push(1)", [1], var_meth);
                  if658 = call660;
                } else {
                  var if661 = GraceDone;
                  setLineNumber(281);    // compilenode call
                  // call case 6: other requests
                  var call662 = request(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                  if (Grace_isTrue(call662)) {
                    setLineNumber(282);    // compilenode call
                    // call case 6: other requests
                    if (var_combine === undefined) raiseUninitializedVariable("combine");
                    var call663 = request(var_combine, "push(1)", [1], var_meth__39__);
                    if661 = call663;
                  } else {
                    setLineNumber(284);    // compilenode string
                    var string665 = new GraceString("cannot produce union of ");
                    setLineNumber(285);    // compilenode string
                    var string666 = new GraceString("incompatible types '");
                    var opresult667 = request(string666, "++(1)", [1], this);
                    var string668 = new GraceString("' and '");
                    var opresult669 = request(opresult667, "++(1)", [1], string668);
                    var opresult670 = request(opresult669, "++(1)", [1], var_other);
                    var string671 = new GraceString("'");
                    var opresult672 = request(opresult670, "++(1)", [1], string671);
                    var opresult673 = request(string665, "++(1)", [1], opresult672);
                    // call case 6: other requests
                    setLineNumber(284);    // compilenode member
                    // call case 2: outer request
                    var call674 = selfRequest(var_prelude, "TypeError", [0]);
                    var call664 = request(call674, "raise(1)", [1], opresult673);
                    if661 = call664;
                  }
                  if658 = if661;
                }
                setLineNumber(288);    // compilenode member
                // call case 6: other requests
                var call676 = request(var_meth, "name", [0]);
                // call case 6: other requests
                if (var_twice === undefined) raiseUninitializedVariable("twice");
                var call675 = request(var_twice, "push(1)", [1], call676);
                setLineNumber(290);    // compilenode member
                // call case 6: other requests
                var call677 = request(var_continue, "apply", [0]);
                if654 = call677;
              }
              return if654;
            };
            let applyMeth653 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth653.methodName = "apply(1)";
            applyMeth653.paramCounts = [1];
            applyMeth653.paramNames = ["meth'"];
            applyMeth653.definitionLine = 277;
            applyMeth653.definitionModule = "staticTypes";
            block653.methods["apply(1)"] = applyMeth653;
            let matchesMeth653 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth653.methodName = "matches(1)";
            matchesMeth653.paramCounts = [1];
            matchesMeth653.paramNames = ["meth'"];
            matchesMeth653.definitionLine = 277;
            matchesMeth653.definitionModule = "staticTypes";
            block653.methods["matches(1)"] = matchesMeth653;
            // call case 6: other requests
            setLineNumber(277);    // compilenode member
            // call case 6: other requests
            var call678 = request(var_other, "methods", [0]);
            var call652 = request(call678, "do(1)", [1], block653);
            setLineNumber(294);    // compilenode call
            // call case 6: other requests
            if (var_combine === undefined) raiseUninitializedVariable("combine");
            var call679 = request(var_combine, "push(1)", [1], var_meth);
            return call679;
          };
          let applyMeth651 = function apply_2 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth651.methodName = "apply(2)";
          applyMeth651.paramCounts = [2];
          applyMeth651.paramNames = ["meth", "continue"];
          applyMeth651.definitionLine = 276;
          applyMeth651.definitionModule = "staticTypes";
          block651.methods["apply(2)"] = applyMeth651;
          let matchesMeth651 = function matches_2 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth651.methodName = "matches(2)";
          matchesMeth651.paramCounts = [2];
          matchesMeth651.paramNames = ["meth", "continue"];
          matchesMeth651.definitionLine = 276;
          matchesMeth651.definitionModule = "staticTypes";
          block651.methods["matches(2)"] = matchesMeth651;
          // call case 2: outer request
          var call649 = selfRequest(importedModules["staticTypes"], "for(1)doWithContinue(1)", [1, 1], call650, block651);
          setLineNumber(297);    // compilenode block
          var block681 = new GraceBlock(this, 297, 1);
          block681.guard = jsTrue;
          block681.real = function block681(var_meth) {
            var if682 = GraceDone;
            setLineNumber(298);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call685 = request(var_meth, "name", [0]);
            // call case 6: other requests
            if (var_twice === undefined) raiseUninitializedVariable("twice");
            var call684 = request(var_twice, "contains(1)", [1], call685);
            var call683 = request(call684, "not", [0]);
            if (Grace_isTrue(call683)) {
              setLineNumber(299);    // compilenode call
              // call case 6: other requests
              if (var_combine === undefined) raiseUninitializedVariable("combine");
              var call686 = request(var_combine, "push(1)", [1], var_meth);
              if682 = call686;
            }
            return if682;
          };
          let applyMeth681 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth681.methodName = "apply(1)";
          applyMeth681.paramCounts = [1];
          applyMeth681.paramNames = ["meth"];
          applyMeth681.definitionLine = 297;
          applyMeth681.definitionModule = "staticTypes";
          block681.methods["apply(1)"] = applyMeth681;
          let matchesMeth681 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth681.methodName = "matches(1)";
          matchesMeth681.paramCounts = [1];
          matchesMeth681.paramNames = ["meth"];
          matchesMeth681.definitionLine = 297;
          matchesMeth681.definitionModule = "staticTypes";
          block681.methods["matches(1)"] = matchesMeth681;
          // call case 6: other requests
          setLineNumber(297);    // compilenode member
          // call case 6: other requests
          var call687 = request(var_other, "methods", [0]);
          var call680 = request(call687, "do(1)", [1], block681);
          setLineNumber(303);    // compilenode defdec
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var var_hack = var_objectType;
          var obj688_build = function(ignore, var_other, outerObj, aliases, exclusions) {
            this.closureKeys = this.closureKeys || [];
            this.closureKeys.push("outer_staticTypes_304");
            this.outer_staticTypes_304 = outerObj;
            const inheritedExclusions = { };
            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                const exMeth = exclusions[eix];
                inheritedExclusions[exMeth] = this.methods[exMeth]; };
            setLineNumber(305);    // reuse call
            var initFun689 = request(var_hack, "fromMethods(1)$build(3)", [null], var_combine, this, [], []);  // compileReuseCall
            var func690 = function(argcv) {    // method asString, line 307
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("asString", 0, numArgs - 0);
              }
              setLineNumber(308);    // compilenode string
              var string691 = new GraceString("");
              var opresult692 = request(string691, "++(1)", [1], this.outer_staticTypes_304);
              var string693 = new GraceString(" & ");
              var opresult694 = request(opresult692, "++(1)", [1], string693);
              var opresult695 = request(opresult694, "++(1)", [1], var_other);
              var string696 = new GraceString("");
              var opresult697 = request(opresult695, "++(1)", [1], string696);
              return opresult697;
            };    // end of method asString
            this.methods["asString"] = func690;
            func690.methodName = "asString";
            func690.paramCounts = [0];
            func690.paramNames = [];
            func690.definitionLine = 307;
            func690.definitionModule = "staticTypes";
            const overridenByAliases = { };
            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                const a = aliases[aix];
                const newNm = a.newName;
                const oldNm = a.oldName;
                overridenByAliases[newNm] = this.methods[newNm];
                const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                m.definitionLine = 304;
                m.definitionModule = "staticTypes";
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
            var obj688_init = function() {    // init of object on line 304
              initFun689.call(this);
            };
            return obj688_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
          };
          var obj688_init = obj688_build.call(inheritingObject, null, var_other, this, aliases, exclusions);
          return obj688_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
        };    // end of method &(_)$build(_,_,_)
        this.methods["&(1)$build(3)"] = func639;
        func639.methodName = "&(1)$build(3)";
        func639.paramCounts = [1];
        func639.paramNames = ["other"];
        func639.definitionLine = 269;
        func639.definitionModule = "staticTypes";
        var func698 = function(argcv) {    // method asString, line 313
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("asString", 0, numArgs - 0);
          }
          var if699 = GraceDone;
          setLineNumber(314);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call701 = selfRequest(this, "methods", [0]);
          var call700 = request(call701, "size", [0]);
          var opresult702 = request(call700, "==(1)", [1], new GraceNum(3));
          if (Grace_isTrue(opresult702)) {
            setLineNumber(315);    // compilenode string
            var string703 = new GraceString("Object");
            return string703;
          }
          setLineNumber(318);    // compilenode string
          var string704 = new GraceString("{ ");
          var var_out = string704;
          setLineNumber(320);    // compilenode block
          var block706 = new GraceBlock(this, 320, 1);
          block706.guard = jsTrue;
          block706.real = function block706(var_mtype) {
            var if707 = GraceDone;
            setLineNumber(321);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call710 = request(var_mtype, "name", [0]);
            // call case 6: other requests
            var string712 = new GraceString("!=");
            var string713 = new GraceString("\u2260");
            var string714 = new GraceString("asString");
            var string715 = new GraceString("asDebugString");
            var string716 = new GraceString("::");
            var array711 = new GraceSequence([string712, string713, string714, string715, string716]);
            var call709 = request(array711, "contains(1)", [1], call710);
            var call708 = request(call709, "not", [0]);
            if (Grace_isTrue(call708)) {
              setLineNumber(322);    // compilenode string
              var string717 = new GraceString("");
              if (var_out === undefined) raiseUninitializedVariable("out");
              var opresult718 = request(string717, "++(1)", [1], var_out);
              var string719 = new GraceString("");
              var opresult720 = request(opresult718, "++(1)", [1], string719);
              var opresult721 = request(opresult720, "++(1)", [1], var_mtype);
              var string722 = new GraceString("; ");
              var opresult723 = request(opresult721, "++(1)", [1], string722);
              var_out = opresult723;
              if707 = GraceDone;
            }
            return if707;
          };
          let applyMeth706 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth706.methodName = "apply(1)";
          applyMeth706.paramCounts = [1];
          applyMeth706.paramNames = ["mtype"];
          applyMeth706.definitionLine = 320;
          applyMeth706.definitionModule = "staticTypes";
          block706.methods["apply(1)"] = applyMeth706;
          let matchesMeth706 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth706.methodName = "matches(1)";
          matchesMeth706.paramCounts = [1];
          matchesMeth706.paramNames = ["mtype"];
          matchesMeth706.definitionLine = 320;
          matchesMeth706.definitionModule = "staticTypes";
          block706.methods["matches(1)"] = matchesMeth706;
          // call case 6: other requests
          setLineNumber(320);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call724 = selfRequest(this, "methods", [0]);
          var call705 = request(call724, "do(1)", [1], block706);
          setLineNumber(326);    // compilenode string
          var string725 = new GraceString("");
          var opresult726 = request(string725, "++(1)", [1], var_out);
          var string727 = new GraceString("}");
          var opresult728 = request(opresult726, "++(1)", [1], string727);
          return opresult728;
        };    // end of method asString
        this.methods["asString"] = func698;
        func698.methodName = "asString";
        func698.paramCounts = [0];
        func698.paramNames = [];
        func698.definitionLine = 313;
        func698.definitionModule = "staticTypes";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 186;
            m.definitionModule = "staticTypes";
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
        var obj557_init = function() {    // init of object on line 186
          var if729 = GraceDone;
          setLineNumber(187);    // compilenode member
          // call case 2: outer request
          var call730 = selfRequest(this.outer_staticTypes_186, "base", [0]);
          // call case 2: outer request
          var call731 = selfRequest(this.outer_staticTypes_186, "unknown", [0]);
          var opresult732 = request(call730, "==(1)", [1], call731);
          if (Grace_isTrue(opresult732)) {
            setLineNumber(188);    // compilenode array
            var array734 = new GraceSequence([]);
            // call case 2: outer request
            var call733 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array734);
            if729 = call733;
          } else {
            // call case 6: other requests
            // call case 2: outer request
            var call736 = selfRequest(this.outer_staticTypes_186, "base", [0]);
            var call735 = request(call736, "methods", [0]);
            if729 = call735;
          }
          var opresult737 = request(if729, "++(1)", [1], var_methods__39__);
          this.data.methods = opresult737;
          this.data.isUnknown = GraceFalse;
          setLineNumber(203);    // compilenode array
          var array739 = new GraceSequence([]);
          // call case 2: outer request
          var call738 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array739);
          this.data.currentlyTesting = call738;
        };
        return obj557_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj557_init = obj557_build.call(inheritingObject, null, var_methods__39__, this, aliases, exclusions);
      return obj557_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method fromMethods(_)$build(_,_,_)
    this.methods["fromMethods(1)$build(3)"] = func556;
    func556.methodName = "fromMethods(1)$build(3)";
    func556.paramCounts = [1];
    func556.paramNames = ["methods'"];
    func556.definitionLine = 186;
    func556.definitionModule = "staticTypes";
    var func740 = function(argcv, var_methods__39__, var_name) {    // method fromMethods(_)withName(_), line 330
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("fromMethods(_)withName(_)", 0, numArgs - 2);
      }
      var ouc = emptyGraceObject("objectType.fromMethods(_)withName(_)", "staticTypes", 330);
      var ouc_init = this.methods["fromMethods(1)withName(1)$build(3)"].call(this, null, var_methods__39__, var_name, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method fromMethods(_)withName(_)
    func740.paramTypes = [];
    func740.paramTypes.push([]);
    func740.paramTypes.push([type_String, "name"]);
    this.methods["fromMethods(1)withName(1)"] = func740;
    func740.methodName = "fromMethods(1)withName(1)";
    func740.paramCounts = [1, 1];
    func740.paramNames = ["methods'", "name"];
    func740.definitionLine = 330;
    func740.definitionModule = "staticTypes";
    var func741 = function(argcv, var_methods__39__, var_name, inheritingObject, aliases, exclusions) {    // method fromMethods(_)withName(_)$build(_,_,_), line 330
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("fromMethods(_)withName(_)", 0, numArgs - 2);
      }
      var obj742_build = function(ignore, var_methods__39__, var_name, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_330");
        this.outer_staticTypes_330 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(332);    // reuse call
        var initFun743 = selfRequest(this.outer_staticTypes_330, "fromMethods(1)$build(3)", [null], var_methods__39__, this, [], []);  // compileReuseCall
        setLineNumber(333);    // reuse call
        var initFun744 = selfRequest(importedModules["staticTypes"], "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
        var func745 = function(argcv) {     // accessor method asString
          const numArgs = arguments.length - 1;
          if (numArgs > 0) raiseTypeArgError("asString", 0, numArgs - 0);
          return var_name;
        };    // end of method asString
        this.methods["asString"] = func745;
        func745.methodName = "asString";
        func745.paramCounts = [0];
        func745.paramNames = [];
        func745.definitionLine = 335;
        func745.definitionModule = "staticTypes";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 330;
            m.definitionModule = "staticTypes";
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
        var obj742_init = function() {    // init of object on line 330
          initFun743.call(this);
        };
        return obj742_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj742_init = obj742_build.call(inheritingObject, null, var_methods__39__, var_name, this, aliases, exclusions);
      return obj742_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method fromMethods(_)withName(_)$build(_,_,_)
    func741.paramTypes = [];
    func741.paramTypes.push([]);
    func741.paramTypes.push([type_String, "name"]);
    this.methods["fromMethods(1)withName(1)$build(3)"] = func741;
    func741.methodName = "fromMethods(1)withName(1)$build(3)";
    func741.paramCounts = [1, 1];
    func741.paramNames = ["methods'", "name"];
    func741.definitionLine = 330;
    func741.definitionModule = "staticTypes";
    var func746 = function(argcv, var_dtype) {    // method fromDType(_), line 338
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromDType(_)", 0, numArgs - 1);
      }
      setLineNumber(339);    // compilenode matchcase
      var cases747 = [];
      var block748 = new GraceBlock(this, 339, 1);
      block748.paramTypes = [GraceFalse];
      var matches749 = function(var___95____95__1) {
        if (!Grace_isTrue(request(GraceFalse, "matches(1)", [1], var___95____95__1)))
            return false;
        return true;
      };
      block748.guard = matches749;
      block748.real = function block748(var___95____95__1) {
        setLineNumber(340);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call750 = selfRequest(this, "unknown", [0]);
        return call750;
      };
      let applyMeth748 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth748.methodName = "apply(1)";
      applyMeth748.paramCounts = [1];
      applyMeth748.paramNames = ["__1"];
      applyMeth748.definitionLine = 339;
      applyMeth748.definitionModule = "staticTypes";
      block748.methods["apply(1)"] = applyMeth748;
      let matchesMeth748 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth748.methodName = "matches(1)";
      matchesMeth748.paramCounts = [1];
      matchesMeth748.paramNames = ["__1"];
      matchesMeth748.definitionLine = 339;
      matchesMeth748.definitionModule = "staticTypes";
      block748.methods["matches(1)"] = matchesMeth748;
      cases747.push(block748);
      setLineNumber(341);    // compilenode block
      var block751 = new GraceBlock(this, 341, 1);
      // call case 2: outer request
      var call752 = selfRequest(importedModules["staticTypes"], "TypeDeclaration", [0]);
      block751.paramTypes = [call752];
      var matches753 = function(var_lit) {
        // call case 2: outer request
        var call754 = selfRequest(importedModules["staticTypes"], "TypeDeclaration", [0]);
        if (!Grace_isTrue(request(call754, "matches(1)", [1], var_lit)))
            return false;
        return true;
      };
      block751.guard = matches753;
      block751.real = function block751(var_lit) {
        setLineNumber(344);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call755 = selfRequest(this, "unknown", [0]);
        throw new ReturnException(call755, returnTarget);
        setLineNumber(345);    // compilenode member
        // call case 6: other requests
        var call756 = request(var_lit, "intersectionTypes", [0]);
        var var_intersection = call756;
        var if757 = GraceDone;
        setLineNumber(346);    // compilenode member
        // call case 6: other requests
        if (var_intersection === undefined) raiseUninitializedVariable("intersection");
        var call758 = request(var_intersection, "size", [0]);
        var opresult759 = request(call758, ">(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult759)) {
          setLineNumber(347);    // compilenode member
          // call case 6: other requests
          if (var_intersection === undefined) raiseUninitializedVariable("intersection");
          var call761 = request(var_intersection, "first", [0]);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call760 = selfRequest(this, "fromDType(1)", [1], call761);
          var var_oType = call760;
          setLineNumber(349);    // compilenode member
          // call case 6: other requests
          if (var_intersection === undefined) raiseUninitializedVariable("intersection");
          var call763 = request(var_intersection, "size", [0]);
          var diff764 = request(call763, "-(1)", [1], new GraceNum(1));
          var opresult765 = request(new GraceNum(2), "..(1)", [1], diff764);
          var block766 = new GraceBlock(this, 349, 1);
          block766.guard = jsTrue;
          block766.real = function block766(var_i) {
            setLineNumber(350);    // compilenode op
            if (var_oType === undefined) raiseUninitializedVariable("oType");
            // call case 6: other requests
            if (var_intersection === undefined) raiseUninitializedVariable("intersection");
            var call768 = request(var_intersection, "at(1)", [1], var_i);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call767 = selfRequest(this, "fromDType(1)", [1], call768);
            var opresult769 = request(var_oType, "&(1)", [1], call767);
            var_oType = opresult769;
            return GraceDone;
          };
          let applyMeth766 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth766.methodName = "apply(1)";
          applyMeth766.paramCounts = [1];
          applyMeth766.paramNames = ["i"];
          applyMeth766.definitionLine = 349;
          applyMeth766.definitionModule = "staticTypes";
          block766.methods["apply(1)"] = applyMeth766;
          let matchesMeth766 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth766.methodName = "matches(1)";
          matchesMeth766.paramCounts = [1];
          matchesMeth766.paramNames = ["i"];
          matchesMeth766.definitionLine = 349;
          matchesMeth766.definitionModule = "staticTypes";
          block766.methods["matches(1)"] = matchesMeth766;
          // call case 2: outer request
          var call762 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult765, block766);
          var if770 = GraceDone;
          setLineNumber(353);    // compilenode member
          // call case 6: other requests
          var call771 = request(var_lit, "value", [0]);
          var opresult772 = request(GraceFalse, "\u2260(1)", [1], call771);
          if (Grace_isTrue(opresult772)) {
            setLineNumber(354);    // compilenode object
            var obj773_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_staticTypes_354");
              this.outer_staticTypes_354 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(356);    // compilenode member
              // call case 2: outer request
              var call774 = selfRequest(importedModules["staticTypes"], "TypeIntersection", [0]);
              if (var_oType === undefined) raiseUninitializedVariable("oType");
              // call case 6: other requests
              if (var_intersection === undefined) raiseUninitializedVariable("intersection");
              var call776 = request(var_intersection, "last", [0]);
              // call case 2: outer request
              var call775 = selfRequest(this.outer_staticTypes_354, "fromDType(1)", [1], call776);
              var initFun777 = request(call774, "new(2)$build(3)", [null], var_oType, call775, this, [], []);  // compileReuseCall
              var func778 = function(argcv) {    // method asString, line 358
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asString", 0, numArgs - 0);
                }
                setLineNumber(358);    // compilenode member
                // call case 6: other requests
                var call779 = request(var_lit, "value", [0]);
                return call779;
              };    // end of method asString
              this.methods["asString"] = func778;
              func778.methodName = "asString";
              func778.paramCounts = [0];
              func778.paramNames = [];
              func778.definitionLine = 358;
              func778.definitionModule = "staticTypes";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 354;
                  m.definitionModule = "staticTypes";
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
              var obj773_init = function() {    // init of object on line 354
                initFun777.call(this);
              };
              return obj773_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj773 = emptyGraceObject("object", "staticTypes", 354);
            var obj773_init = obj773_build.call(obj773, null, this, [], []);
            obj773_init.call(obj773);  // end of compileobject
            if770 = obj773;
          } else {
            setLineNumber(361);    // compilenode op
            if (var_oType === undefined) raiseUninitializedVariable("oType");
            // call case 6: other requests
            if (var_intersection === undefined) raiseUninitializedVariable("intersection");
            var call781 = request(var_intersection, "last", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call780 = selfRequest(this, "fromDType(1)", [1], call781);
            var opresult782 = request(var_oType, "&(1)", [1], call780);
            if770 = opresult782;
          }
          throw new ReturnException(if770, returnTarget);
        }
        setLineNumber(365);    // compilenode member
        // call case 6: other requests
        var call783 = request(var_lit, "unionTypes", [0]);
        var var_union = call783;
        var if784 = GraceDone;
        setLineNumber(366);    // compilenode member
        // call case 6: other requests
        if (var_union === undefined) raiseUninitializedVariable("union");
        var call785 = request(var_union, "size", [0]);
        var opresult786 = request(call785, ">(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult786)) {
          setLineNumber(367);    // compilenode member
          // call case 6: other requests
          if (var_union === undefined) raiseUninitializedVariable("union");
          var call788 = request(var_union, "first", [0]);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call787 = selfRequest(this, "fromDType(1)", [1], call788);
          var var_oType = call787;
          setLineNumber(369);    // compilenode member
          // call case 6: other requests
          if (var_union === undefined) raiseUninitializedVariable("union");
          var call790 = request(var_union, "size", [0]);
          var diff791 = request(call790, "-(1)", [1], new GraceNum(1));
          var opresult792 = request(new GraceNum(2), "..(1)", [1], diff791);
          var block793 = new GraceBlock(this, 369, 1);
          block793.guard = jsTrue;
          block793.real = function block793(var_i) {
            setLineNumber(370);    // compilenode op
            if (var_oType === undefined) raiseUninitializedVariable("oType");
            // call case 6: other requests
            if (var_union === undefined) raiseUninitializedVariable("union");
            var call795 = request(var_union, "at(1)", [1], var_i);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call794 = selfRequest(this, "fromDType(1)", [1], call795);
            var opresult796 = request(var_oType, "|(1)", [1], call794);
            var_oType = opresult796;
            return GraceDone;
          };
          let applyMeth793 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth793.methodName = "apply(1)";
          applyMeth793.paramCounts = [1];
          applyMeth793.paramNames = ["i"];
          applyMeth793.definitionLine = 369;
          applyMeth793.definitionModule = "staticTypes";
          block793.methods["apply(1)"] = applyMeth793;
          let matchesMeth793 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth793.methodName = "matches(1)";
          matchesMeth793.paramCounts = [1];
          matchesMeth793.paramNames = ["i"];
          matchesMeth793.definitionLine = 369;
          matchesMeth793.definitionModule = "staticTypes";
          block793.methods["matches(1)"] = matchesMeth793;
          // call case 2: outer request
          var call789 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult792, block793);
          var if797 = GraceDone;
          setLineNumber(373);    // compilenode member
          // call case 6: other requests
          var call798 = request(var_lit, "value", [0]);
          var opresult799 = request(GraceFalse, "\u2260(1)", [1], call798);
          if (Grace_isTrue(opresult799)) {
            setLineNumber(374);    // compilenode object
            var obj800_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_staticTypes_374");
              this.outer_staticTypes_374 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(376);    // compilenode member
              // call case 2: outer request
              var call801 = selfRequest(importedModules["staticTypes"], "TypeUnion", [0]);
              if (var_oType === undefined) raiseUninitializedVariable("oType");
              // call case 6: other requests
              if (var_union === undefined) raiseUninitializedVariable("union");
              var call803 = request(var_union, "last", [0]);
              // call case 2: outer request
              var call802 = selfRequest(this.outer_staticTypes_374, "fromDType(1)", [1], call803);
              var initFun804 = request(call801, "new(2)$build(3)", [null], var_oType, call802, this, [], []);  // compileReuseCall
              this.data.asString = undefined;
              var reader805_asString = function() {  // reader method asString
                  if (this.data.asString === undefined) raiseUninitializedVariable("asString");
                  return this.data.asString;
              };
              reader805_asString.isDef = true;
              this.methods["asString"] = reader805_asString;
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 374;
                  m.definitionModule = "staticTypes";
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
              var obj800_init = function() {    // init of object on line 374
                initFun804.call(this);
                setLineNumber(377);    // compilenode member
                // call case 6: other requests
                var call806 = request(var_lit, "value", [0]);
                this.data.asString = call806;
              };
              return obj800_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj800 = emptyGraceObject("object", "staticTypes", 374);
            var obj800_init = obj800_build.call(obj800, null, this, [], []);
            obj800_init.call(obj800);  // end of compileobject
            if797 = obj800;
          } else {
            setLineNumber(380);    // compilenode op
            if (var_oType === undefined) raiseUninitializedVariable("oType");
            // call case 6: other requests
            if (var_union === undefined) raiseUninitializedVariable("union");
            var call808 = request(var_union, "last", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call807 = selfRequest(this, "fromDType(1)", [1], call808);
            var opresult809 = request(var_oType, "|(1)", [1], call807);
            if797 = opresult809;
          }
          throw new ReturnException(if797, returnTarget);
        }
        setLineNumber(384);    // compilenode array
        var array811 = new GraceSequence([]);
        // call case 2: outer request
        var call810 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array811);
        var var_meths = call810;
        setLineNumber(386);    // compilenode block
        var block813 = new GraceBlock(this, 386, 1);
        block813.guard = jsTrue;
        block813.real = function block813(var_mType) {
          setLineNumber(387);    // compilenode call
          // call case 6: other requests
          if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
          var call815 = request(var_aMethodType, "fromNode(1)", [1], var_mType);
          // call case 6: other requests
          if (var_meths === undefined) raiseUninitializedVariable("meths");
          var call814 = request(var_meths, "push(1)", [1], call815);
          return call814;
        };
        let applyMeth813 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth813.methodName = "apply(1)";
        applyMeth813.paramCounts = [1];
        applyMeth813.paramNames = ["mType"];
        applyMeth813.definitionLine = 386;
        applyMeth813.definitionModule = "staticTypes";
        block813.methods["apply(1)"] = applyMeth813;
        let matchesMeth813 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth813.methodName = "matches(1)";
        matchesMeth813.paramCounts = [1];
        matchesMeth813.paramNames = ["mType"];
        matchesMeth813.definitionLine = 386;
        matchesMeth813.definitionModule = "staticTypes";
        block813.methods["matches(1)"] = matchesMeth813;
        // call case 6: other requests
        setLineNumber(386);    // compilenode member
        // call case 6: other requests
        var call816 = request(var_lit, "methods", [0]);
        var call812 = request(call816, "do(1)", [1], block813);
        var if817 = GraceDone;
        setLineNumber(390);    // compilenode member
        // call case 6: other requests
        var call818 = request(var_lit, "value", [0]);
        var opresult819 = request(call818, "\u2260(1)", [1], GraceFalse);
        var block820 = new GraceBlock(this, 390, 0);
        block820.guard = jsTrue;
        block820.real = function block820() {
          setLineNumber(390);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call822 = request(var_lit, "value", [0]);
          var call821 = request(call822, "at(1)", [1], new GraceNum(1));
          var string823 = new GraceString("<");
          var opresult824 = request(call821, "\u2260(1)", [1], string823);
          return opresult824;
        };
        let applyMeth820 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth820.methodName = "apply";
        applyMeth820.paramCounts = [0];
        applyMeth820.paramNames = [];
        applyMeth820.definitionLine = 390;
        applyMeth820.definitionModule = "staticTypes";
        block820.methods["apply"] = applyMeth820;
        var opresult825 = request(opresult819, "&&(1)", [1], block820);
        if (Grace_isTrue(opresult825)) {
          setLineNumber(391);    // compilenode call
          if (var_meths === undefined) raiseUninitializedVariable("meths");
          // call case 6: other requests
          var call827 = request(var_lit, "value", [0]);
          // call case 6: other requests
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var call826 = request(var_objectType, "fromMethods(1)withName(1)", [1, 1], var_meths, call827);
          if817 = call826;
        } else {
          setLineNumber(393);    // compilenode call
          if (var_meths === undefined) raiseUninitializedVariable("meths");
          // call case 6: other requests
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var call828 = request(var_objectType, "fromMethods(1)", [1], var_meths);
          if817 = call828;
        }
        return if817;
      };
      let applyMeth751 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth751.methodName = "apply(1)";
      applyMeth751.paramCounts = [1];
      applyMeth751.paramNames = ["lit"];
      applyMeth751.definitionLine = 341;
      applyMeth751.definitionModule = "staticTypes";
      block751.methods["apply(1)"] = applyMeth751;
      let matchesMeth751 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth751.methodName = "matches(1)";
      matchesMeth751.paramCounts = [1];
      matchesMeth751.paramNames = ["lit"];
      matchesMeth751.definitionLine = 341;
      matchesMeth751.definitionModule = "staticTypes";
      block751.methods["matches(1)"] = matchesMeth751;
      cases747.push(block751);
      setLineNumber(395);    // compilenode block
      var block829 = new GraceBlock(this, 395, 1);
      // call case 2: outer request
      var call830 = selfRequest(importedModules["staticTypes"], "Identifier", [0]);
      block829.paramTypes = [call830];
      var matches831 = function(var_ident) {
        // call case 2: outer request
        var call832 = selfRequest(importedModules["staticTypes"], "Identifier", [0]);
        if (!Grace_isTrue(request(call832, "matches(1)", [1], var_ident)))
            return false;
        return true;
      };
      block829.guard = matches831;
      block829.real = function block829(var_ident) {
        setLineNumber(396);    // compilenode call
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call833 = request(var_objectType, "fromIdentifier(1)", [1], var_ident);
        return call833;
      };
      let applyMeth829 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth829.methodName = "apply(1)";
      applyMeth829.paramCounts = [1];
      applyMeth829.paramNames = ["ident"];
      applyMeth829.definitionLine = 395;
      applyMeth829.definitionModule = "staticTypes";
      block829.methods["apply(1)"] = applyMeth829;
      let matchesMeth829 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth829.methodName = "matches(1)";
      matchesMeth829.paramCounts = [1];
      matchesMeth829.paramNames = ["ident"];
      matchesMeth829.definitionLine = 395;
      matchesMeth829.definitionModule = "staticTypes";
      block829.methods["matches(1)"] = matchesMeth829;
      cases747.push(block829);
      setLineNumber(397);    // compilenode block
      var block834 = new GraceBlock(this, 397, 1);
      // call case 2: outer request
      var call835 = selfRequest(importedModules["staticTypes"], "Generic", [0]);
      block834.paramTypes = [call835];
      var matches836 = function(var_generic) {
        // call case 2: outer request
        var call837 = selfRequest(importedModules["staticTypes"], "Generic", [0]);
        if (!Grace_isTrue(request(call837, "matches(1)", [1], var_generic)))
            return false;
        return true;
      };
      block834.guard = matches836;
      block834.real = function block834(var_generic) {
        setLineNumber(399);    // compilenode member
        // call case 6: other requests
        var call839 = request(var_generic, "value", [0]);
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call838 = request(var_objectType, "fromIdentifier(1)", [1], call839);
        return call838;
      };
      let applyMeth834 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth834.methodName = "apply(1)";
      applyMeth834.paramCounts = [1];
      applyMeth834.paramNames = ["generic"];
      applyMeth834.definitionLine = 397;
      applyMeth834.definitionModule = "staticTypes";
      block834.methods["apply(1)"] = applyMeth834;
      let matchesMeth834 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth834.methodName = "matches(1)";
      matchesMeth834.paramCounts = [1];
      matchesMeth834.paramNames = ["generic"];
      matchesMeth834.definitionLine = 397;
      matchesMeth834.definitionModule = "staticTypes";
      block834.methods["matches(1)"] = matchesMeth834;
      cases747.push(block834);
      setLineNumber(400);    // compilenode block
      var block840 = new GraceBlock(this, 400, 0);
      block840.guard = jsTrue;
      block840.real = function block840() {
        setLineNumber(401);    // compilenode string
        var string842 = new GraceString("No case for node of kind ");
        // call case 6: other requests
        var call843 = request(var_dtype, "kind", [0]);
        var opresult844 = request(string842, "++(1)", [1], call843);
        var string845 = new GraceString("");
        var opresult846 = request(opresult844, "++(1)", [1], string845);
        // call case 6: other requests
        // call case 2: outer request
        var call847 = selfRequest(var_prelude, "ProgrammingError", [0]);
        var call841 = request(call847, "raise(1)with(1)", [1, 1], opresult846, var_dtype);
        return call841;
      };
      let applyMeth840 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth840.methodName = "apply";
      applyMeth840.paramCounts = [0];
      applyMeth840.paramNames = [];
      applyMeth840.definitionLine = 400;
      applyMeth840.definitionModule = "staticTypes";
      block840.methods["apply"] = applyMeth840;
      setLineNumber(339);    // compilematchcase
      var matchres747 = matchCase(var_dtype,cases747,block840);
      return matchres747;
    };    // end of method fromDType(_)
    this.methods["fromDType(1)"] = func746;
    func746.methodName = "fromDType(1)";
    func746.paramCounts = [1];
    func746.paramNames = ["dtype"];
    func746.definitionLine = 338;
    func746.definitionModule = "staticTypes";
    var func848 = function(argcv, var_ident) {    // method fromIdentifier(_), line 405
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromIdentifier(_)", 0, numArgs - 1);
      }
      setLineNumber(406);    // compilenode member
      // call case 6: other requests
      var call850 = request(var_ident, "value", [0]);
      var block851 = new GraceBlock(this, 406, 0);
      block851.guard = jsTrue;
      block851.real = function block851() {
        setLineNumber(406);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call852 = selfRequest(this, "unknown", [0]);
        return call852;
      };
      let applyMeth851 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth851.methodName = "apply";
      applyMeth851.paramCounts = [0];
      applyMeth851.paramNames = [];
      applyMeth851.definitionLine = 406;
      applyMeth851.definitionModule = "staticTypes";
      block851.methods["apply"] = applyMeth851;
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call854 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call853 = request(call854, "types", [0]);
      var call849 = request(call853, "find(1)butIfMissing(1)", [1, 1], call850, block851);
      return call849;
    };    // end of method fromIdentifier(_)
    this.methods["fromIdentifier(1)"] = func848;
    func848.methodName = "fromIdentifier(1)";
    func848.paramCounts = [1];
    func848.paramNames = ["ident"];
    func848.definitionLine = 405;
    func848.definitionModule = "staticTypes";
    var func855 = function(argcv, var_block) {    // method fromBlock(_), line 409
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromBlock(_)", 0, numArgs - 1);
      }
      setLineNumber(410);    // compilenode call
      // call case 2: outer request
      var call856 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_block);
      var var_bType = call856;
      var if857 = GraceDone;
      setLineNumber(412);    // compilenode member
      // call case 6: other requests
      var call858 = request(var_bType, "isUnknown", [0]);
      if (Grace_isTrue(call858)) {
        // call case 4: self request with 0 args and 0 typeArgs 
        var call859 = selfRequest(this, "unknown", [0]);
        return call859;
      }
      setLineNumber(414);    // compilenode string
      var string861 = new GraceString("apply");
      // call case 6: other requests
      var call860 = request(var_bType, "getMethod(1)", [1], string861);
      var var_apply = call860;
      setLineNumber(416);    // compilenode matchcase
      var cases862 = [];
      var block863 = new GraceBlock(this, 416, 1);
      if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
      block863.paramTypes = [var_noSuchMethod];
      var matches864 = function(var___95____95__2) {
        if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
        if (!Grace_isTrue(request(var_noSuchMethod, "matches(1)", [1], var___95____95__2)))
            return false;
        return true;
      };
      block863.guard = matches864;
      block863.real = function block863(var___95____95__2) {
        setLineNumber(417);    // compilenode string
        var string866 = new GraceString("the expression `");
        // call case 6: other requests
        var call867 = request(var_block, "toGrace(1)", [1], new GraceNum(0));
        var opresult868 = request(string866, "++(1)", [1], call867);
        var string869 = new GraceString("` of ");
        var opresult870 = request(opresult868, "++(1)", [1], string869);
        setLineNumber(418);    // compilenode string
        var string871 = new GraceString("type '");
        if (var_bType === undefined) raiseUninitializedVariable("bType");
        var opresult872 = request(string871, "++(1)", [1], var_bType);
        var string873 = new GraceString("' does not satisfy the type 'Procedure0'");
        var opresult874 = request(opresult872, "++(1)", [1], string873);
        var opresult875 = request(opresult870, "++(1)", [1], opresult874);
        // call case 6: other requests
        setLineNumber(417);    // compilenode member
        // call case 2: outer request
        var call876 = selfRequest(var_prelude, "TypeError", [0]);
        var call865 = request(call876, "raise(1)with(1)", [1, 1], opresult875, var_block);
        return call865;
      };
      let applyMeth863 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth863.methodName = "apply(1)";
      applyMeth863.paramCounts = [1];
      applyMeth863.paramNames = ["__2"];
      applyMeth863.definitionLine = 416;
      applyMeth863.definitionModule = "staticTypes";
      block863.methods["apply(1)"] = applyMeth863;
      let matchesMeth863 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth863.methodName = "matches(1)";
      matchesMeth863.paramCounts = [1];
      matchesMeth863.paramNames = ["__2"];
      matchesMeth863.definitionLine = 416;
      matchesMeth863.definitionModule = "staticTypes";
      block863.methods["matches(1)"] = matchesMeth863;
      cases862.push(block863);
      setLineNumber(419);    // compilenode block
      var block877 = new GraceBlock(this, 419, 1);
      // call case 2: outer request
      var call878 = selfRequest(importedModules["staticTypes"], "MethodType", [0]);
      block877.paramTypes = [call878];
      var matches879 = function(var_meth) {
        // call case 2: outer request
        var call880 = selfRequest(importedModules["staticTypes"], "MethodType", [0]);
        if (!Grace_isTrue(request(call880, "matches(1)", [1], var_meth)))
            return false;
        return true;
      };
      block877.guard = matches879;
      block877.real = function block877(var_meth) {
        setLineNumber(420);    // compilenode member
        // call case 6: other requests
        var call881 = request(var_meth, "returnType", [0]);
        throw new ReturnException(call881, returnTarget);
      };
      let applyMeth877 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth877.methodName = "apply(1)";
      applyMeth877.paramCounts = [1];
      applyMeth877.paramNames = ["meth"];
      applyMeth877.definitionLine = 419;
      applyMeth877.definitionModule = "staticTypes";
      block877.methods["apply(1)"] = applyMeth877;
      let matchesMeth877 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth877.methodName = "matches(1)";
      matchesMeth877.paramCounts = [1];
      matchesMeth877.paramNames = ["meth"];
      matchesMeth877.definitionLine = 419;
      matchesMeth877.definitionModule = "staticTypes";
      block877.methods["matches(1)"] = matchesMeth877;
      cases862.push(block877);
      setLineNumber(421);    // compilenode block
      var block882 = new GraceBlock(this, 421, 0);
      block882.guard = jsTrue;
      block882.real = function block882() {
        setLineNumber(421);    // compileBlock
        return GraceDone;
      };
      let applyMeth882 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth882.methodName = "apply";
      applyMeth882.paramCounts = [0];
      applyMeth882.paramNames = [];
      applyMeth882.definitionLine = 421;
      applyMeth882.definitionModule = "staticTypes";
      block882.methods["apply"] = applyMeth882;
      setLineNumber(416);    // compilematchcase
      var matchres862 = matchCase(var_apply,cases862,block882);
      return matchres862;
    };    // end of method fromBlock(_)
    this.methods["fromBlock(1)"] = func855;
    func855.methodName = "fromBlock(1)";
    func855.paramCounts = [1];
    func855.paramNames = ["block"];
    func855.definitionLine = 409;
    func855.definitionModule = "staticTypes";
    var func883 = function(argcv, var_body) {    // method fromBlockBody(_), line 424
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("fromBlockBody(_)", 0, numArgs - 1);
      }
      var if884 = GraceDone;
      setLineNumber(425);    // compilenode member
      // call case 6: other requests
      var call885 = request(var_body, "size", [0]);
      var opresult886 = request(call885, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult886)) {
        setLineNumber(426);    // compilenode member
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call887 = request(var_objectType, "done", [0]);
        if884 = call887;
      } else {
        setLineNumber(428);    // compilenode member
        // call case 6: other requests
        var call889 = request(var_body, "last", [0]);
        // call case 2: outer request
        var call888 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], call889);
        if884 = call888;
      }
      return if884;
    };    // end of method fromBlockBody(_)
    this.methods["fromBlockBody(1)"] = func883;
    func883.methodName = "fromBlockBody(1)";
    func883.paramCounts = [1];
    func883.paramNames = ["body"];
    func883.definitionLine = 424;
    func883.definitionModule = "staticTypes";
    this.data.unknown = undefined;
    var reader890_unknown = function() {  // reader method unknown
        if (this.data.unknown === undefined) raiseUninitializedVariable("unknown");
        return this.data.unknown;
    };
    reader890_unknown.isDef = true;
    this.methods["unknown"] = reader890_unknown;
    var func891 = function(argcv, var_params, var_rType) {    // method blockTaking(_)returning(_), line 443
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("blockTaking(_)returning(_)", 0, numArgs - 2);
      }
      setLineNumber(445);    // compilenode string
      var string894 = new GraceString("apply");
      // call case 2: outer request
      var call893 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], string894, var_params);
      var array892 = new GraceSequence([call893]);
      var var_signature = array892;
      setLineNumber(446);    // compilenode call
      // call case 6: other requests
      if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
      var call896 = request(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
      var array895 = new GraceSequence([call896]);
      var var_meths = array895;
      setLineNumber(448);    // compilenode string
      var string898 = new GraceString("Procedure0");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call897 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], var_meths, string898);
      return call897;
    };    // end of method blockTaking(_)returning(_)
    this.methods["blockTaking(1)returning(1)"] = func891;
    func891.methodName = "blockTaking(1)returning(1)";
    func891.paramCounts = [1, 1];
    func891.paramNames = ["params", "rType"];
    func891.definitionLine = 443;
    func891.definitionModule = "staticTypes";
    var func899 = function(argcv, var_rType) {    // method blockReturning(_), line 451
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("blockReturning(_)", 0, numArgs - 1);
      }
      setLineNumber(452);    // compilenode array
      var array901 = new GraceSequence([]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call900 = selfRequest(this, "blockTaking(1)returning(1)", [1, 1], array901, var_rType);
      return call900;
    };    // end of method blockReturning(_)
    this.methods["blockReturning(1)"] = func899;
    func899.methodName = "blockReturning(1)";
    func899.paramCounts = [1];
    func899.paramNames = ["rType"];
    func899.definitionLine = 451;
    func899.definitionModule = "staticTypes";
    var func902 = function(argcv, var_oType, var_name__39__, var_rType) {    // method addTo(_)name(_)returns(_), line 455
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 3) && (numArgs !== 3)) {
          raiseTypeArgError("addTo(_)name(_)returns(_)", 0, numArgs - 3);
      }
      setLineNumber(457);    // compilenode array
      var array906 = new GraceSequence([]);
      // call case 2: outer request
      var call905 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array906);
      // call case 2: outer request
      var call904 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, call905);
      var array903 = new GraceSequence([call904]);
      var var_signature = array903;
      setLineNumber(458);    // compilenode call
      // call case 6: other requests
      if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
      var call908 = request(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
      // call case 6: other requests
      // call case 6: other requests
      var call909 = request(var_oType, "methods", [0]);
      var call907 = request(call909, "push(1)", [1], call908);
      return call907;
    };    // end of method addTo(_)name(_)returns(_)
    func902.paramTypes = [];
    func902.paramTypes.push([]);
    func902.paramTypes.push([type_String, "name'"]);
    func902.paramTypes.push([]);
    func902.confidential = true;
    this.methods["addTo(1)name(1)returns(1)"] = func902;
    func902.methodName = "addTo(1)name(1)returns(1)";
    func902.paramCounts = [1, 1, 1];
    func902.paramNames = ["oType", "name'", "rType"];
    func902.definitionLine = 455;
    func902.definitionModule = "staticTypes";
    var func910 = function(argcv, var_oType, var_name__39__, var_ptypes, var_rType) {    // method addTo(_)name(_)params(_)returns(_), line 461
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 4) && (numArgs !== 4)) {
          raiseTypeArgError("addTo(_)name(_)params(_)returns(_)", 0, numArgs - 4);
      }
      setLineNumber(464);    // compilenode array
      var array912 = new GraceSequence([]);
      // call case 2: outer request
      var call911 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array912);
      var var_parameters = call911;
      setLineNumber(465);    // compilenode block
      var block914 = new GraceBlock(this, 465, 1);
      block914.guard = jsTrue;
      block914.real = function block914(var_ptype) {
        setLineNumber(466);    // compilenode call
        // call case 6: other requests
        if (var_aParam === undefined) raiseUninitializedVariable("aParam");
        var call916 = request(var_aParam, "ofType(1)", [1], var_ptype);
        // call case 6: other requests
        if (var_parameters === undefined) raiseUninitializedVariable("parameters");
        var call915 = request(var_parameters, "push(1)", [1], call916);
        return call915;
      };
      let applyMeth914 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth914.methodName = "apply(1)";
      applyMeth914.paramCounts = [1];
      applyMeth914.paramNames = ["ptype"];
      applyMeth914.definitionLine = 465;
      applyMeth914.definitionModule = "staticTypes";
      block914.methods["apply(1)"] = applyMeth914;
      let matchesMeth914 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth914.methodName = "matches(1)";
      matchesMeth914.paramCounts = [1];
      matchesMeth914.paramNames = ["ptype"];
      matchesMeth914.definitionLine = 465;
      matchesMeth914.definitionModule = "staticTypes";
      block914.methods["matches(1)"] = matchesMeth914;
      // call case 6: other requests
      var call913 = request(var_ptypes, "do(1)", [1], block914);
      setLineNumber(469);    // compilenode call
      // call case 2: outer request
      var call918 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, var_parameters);
      var array917 = new GraceSequence([call918]);
      var var_signature = array917;
      setLineNumber(471);    // compilenode call
      // call case 6: other requests
      if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
      var call920 = request(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
      // call case 6: other requests
      // call case 6: other requests
      var call921 = request(var_oType, "methods", [0]);
      var call919 = request(call921, "push(1)", [1], call920);
      return call919;
    };    // end of method addTo(_)name(_)params(_)returns(_)
    func910.paramTypes = [];
    func910.paramTypes.push([]);
    func910.paramTypes.push([type_String, "name'"]);
    func910.paramTypes.push([]);
    func910.paramTypes.push([]);
    func910.confidential = true;
    this.methods["addTo(1)name(1)params(1)returns(1)"] = func910;
    func910.methodName = "addTo(1)name(1)params(1)returns(1)";
    func910.paramCounts = [1, 1, 1, 1];
    func910.paramNames = ["oType", "name'", "ptypes", "rType"];
    func910.definitionLine = 461;
    func910.definitionModule = "staticTypes";
    var func922 = function(argcv, var_this, var_that) {    // method extend(_)with(_), line 474
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("extend(_)with(_)", 0, numArgs - 2);
      }
      setLineNumber(476);    // compilenode block
      var block924 = new GraceBlock(this, 476, 1);
      block924.guard = jsTrue;
      block924.real = function block924(var_mType) {
        setLineNumber(477);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        var call926 = request(var_this, "methods", [0]);
        var call925 = request(call926, "push(1)", [1], var_mType);
        return call925;
      };
      let applyMeth924 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth924.methodName = "apply(1)";
      applyMeth924.paramCounts = [1];
      applyMeth924.paramNames = ["mType"];
      applyMeth924.definitionLine = 476;
      applyMeth924.definitionModule = "staticTypes";
      block924.methods["apply(1)"] = applyMeth924;
      let matchesMeth924 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth924.methodName = "matches(1)";
      matchesMeth924.paramCounts = [1];
      matchesMeth924.paramNames = ["mType"];
      matchesMeth924.definitionLine = 476;
      matchesMeth924.definitionModule = "staticTypes";
      block924.methods["matches(1)"] = matchesMeth924;
      // call case 6: other requests
      setLineNumber(476);    // compilenode member
      // call case 6: other requests
      var call927 = request(var_that, "methods", [0]);
      var call923 = request(call927, "do(1)", [1], block924);
      return call923;
    };    // end of method extend(_)with(_)
    func922.confidential = true;
    this.methods["extend(1)with(1)"] = func922;
    func922.methodName = "extend(1)with(1)";
    func922.paramCounts = [1, 1];
    func922.paramNames = ["this", "that"];
    func922.definitionLine = 474;
    func922.definitionModule = "staticTypes";
    this.data.base = undefined;
    var reader928_base = function() {  // reader method base
        if (this.data.base === undefined) raiseUninitializedVariable("base");
        return this.data.base;
    };
    reader928_base.isVar = true;
    this.methods["base"] = reader928_base;
    var writer929_base = function(argcv, n) {   // writer method base:=(_)
      this.data.base = n;
      return GraceDone;
    };
    writer929_base.confidential = true;
    this.methods["base:=(1)"] = writer929_base;
    this.data.done = undefined;
    var reader930_done = function() {  // reader method done
        if (this.data.done === undefined) raiseUninitializedVariable("done");
        return this.data.done;
    };
    reader930_done.isDef = true;
    this.methods["done"] = reader930_done;
    this.data.pattern = undefined;
    var reader931_pattern = function() {  // reader method pattern
        if (this.data.pattern === undefined) raiseUninitializedVariable("pattern");
        return this.data.pattern;
    };
    reader931_pattern.isDef = true;
    this.methods["pattern"] = reader931_pattern;
    this.data.iterator = undefined;
    var reader932_iterator = function() {  // reader method iterator
        if (this.data.iterator === undefined) raiseUninitializedVariable("iterator");
        return this.data.iterator;
    };
    reader932_iterator.isDef = true;
    this.methods["iterator"] = reader932_iterator;
    this.data.binding = undefined;
    var reader933_binding = function() {  // reader method binding
        if (this.data.binding === undefined) raiseUninitializedVariable("binding");
        return this.data.binding;
    };
    reader933_binding.isDef = true;
    this.methods["binding"] = reader933_binding;
    this.data.boolean = undefined;
    var reader934_boolean = function() {  // reader method boolean
        if (this.data.boolean === undefined) raiseUninitializedVariable("boolean");
        return this.data.boolean;
    };
    reader934_boolean.isDef = true;
    this.methods["boolean"] = reader934_boolean;
    this.data.number = undefined;
    var reader935_number = function() {  // reader method number
        if (this.data.number === undefined) raiseUninitializedVariable("number");
        return this.data.number;
    };
    reader935_number.isDef = true;
    this.methods["number"] = reader935_number;
    this.data.string = undefined;
    var reader936_string = function() {  // reader method string
        if (this.data.string === undefined) raiseUninitializedVariable("string");
        return this.data.string;
    };
    reader936_string.isDef = true;
    this.methods["string"] = reader936_string;
    this.data.list = undefined;
    var reader937_list = function() {  // reader method list
        if (this.data.list === undefined) raiseUninitializedVariable("list");
        return this.data.list;
    };
    reader937_list.isDef = true;
    this.methods["list"] = reader937_list;
    this.data.point = undefined;
    var reader938_point = function() {  // reader method point
        if (this.data.point === undefined) raiseUninitializedVariable("point");
        return this.data.point;
    };
    reader938_point.isDef = true;
    this.methods["point"] = reader938_point;
    this.data.shortCircuit = undefined;
    var reader939_shortCircuit = function() {  // reader method shortCircuit
        if (this.data.shortCircuit === undefined) raiseUninitializedVariable("shortCircuit");
        return this.data.shortCircuit;
    };
    reader939_shortCircuit.isDef = true;
    reader939_shortCircuit.confidential = true;
    this.methods["shortCircuit"] = reader939_shortCircuit;
    this.data.fold = undefined;
    var reader940_fold = function() {  // reader method fold
        if (this.data.fold === undefined) raiseUninitializedVariable("fold");
        return this.data.fold;
    };
    reader940_fold.isDef = true;
    reader940_fold.confidential = true;
    this.methods["fold"] = reader940_fold;
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 183;
        m.definitionModule = "staticTypes";
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
    var obj554_init = function() {    // init of object on line 183
      setLineNumber(432);    // compilenode object
      var obj941_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_staticTypes_432");
        this.outer_staticTypes_432 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(433);    // reuse call
        var initFun942 = selfRequest(importedModules["staticTypes"], "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.methods = undefined;
        var reader943_methods = function() {  // reader method methods
            if (this.data.methods === undefined) raiseUninitializedVariable("methods");
            return this.data.methods;
        };
        reader943_methods.isDef = true;
        this.methods["methods"] = reader943_methods;
        var func944 = function(argcv, var___95____95__3) {     // accessor method getMethod(_)
          const numArgs = arguments.length - 1;
          if (numArgs > 1) raiseTypeArgError("getMethod(_)", 0, numArgs - 1);
          if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
          return var_noSuchMethod;
        };    // end of method getMethod(_)
        func944.paramTypes = [];
        func944.paramTypes.push([type_String, "__3"]);
        this.methods["getMethod(1)"] = func944;
        func944.methodName = "getMethod(1)";
        func944.paramCounts = [1];
        func944.paramNames = ["__3"];
        func944.definitionLine = 435;
        func944.definitionModule = "staticTypes";
        this.data.isUnknown = undefined;
        var reader945_isUnknown = function() {  // reader method isUnknown
            if (this.data.isUnknown === undefined) raiseUninitializedVariable("isUnknown");
            return this.data.isUnknown;
        };
        reader945_isUnknown.isDef = true;
        this.methods["isUnknown"] = reader945_isUnknown;
        var func946 = function(argcv, var___95____95__4) {     // accessor method isSubtypeOf(_)
          const numArgs = arguments.length - 1;
          if (numArgs > 1) raiseTypeArgError("isSubtypeOf(_)", 0, numArgs - 1);
          return GraceTrue;
        };    // end of method isSubtypeOf(_)
        this.methods["isSubtypeOf(1)"] = func946;
        func946.methodName = "isSubtypeOf(1)";
        func946.paramCounts = [1];
        func946.paramNames = ["__4"];
        func946.definitionLine = 437;
        func946.definitionModule = "staticTypes";
        var func947 = function(argcv, var___95____95__5) {    // method |(_), line 438
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("|(_)", 0, numArgs - 1);
          }
          setLineNumber(438);    // compilenode member
          // call case 2: outer request
          var call948 = selfRequest(this.outer_staticTypes_432, "unknown", [0]);
          return call948;
        };    // end of method |(_)
        this.methods["|(1)"] = func947;
        func947.methodName = "|(1)";
        func947.paramCounts = [1];
        func947.paramNames = ["__5"];
        func947.definitionLine = 438;
        func947.definitionModule = "staticTypes";
        var func949 = function(argcv, var___95____95__6) {    // method &(_), line 439
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("&(_)", 0, numArgs - 1);
          }
          setLineNumber(439);    // compilenode member
          // call case 2: outer request
          var call950 = selfRequest(this.outer_staticTypes_432, "unknown", [0]);
          return call950;
        };    // end of method &(_)
        this.methods["&(1)"] = func949;
        func949.methodName = "&(1)";
        func949.paramCounts = [1];
        func949.paramNames = ["__6"];
        func949.definitionLine = 439;
        func949.definitionModule = "staticTypes";
        this.data.asString = undefined;
        var reader951_asString = function() {  // reader method asString
            if (this.data.asString === undefined) raiseUninitializedVariable("asString");
            return this.data.asString;
        };
        reader951_asString.isDef = true;
        this.methods["asString"] = reader951_asString;
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 432;
            m.definitionModule = "staticTypes";
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
        var obj941_init = function() {    // init of object on line 432
          setLineNumber(434);    // compilenode array
          var array953 = new GraceSequence([]);
          // call case 2: outer request
          var call952 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array953);
          this.data.methods = call952;
          this.data.isUnknown = GraceTrue;
          setLineNumber(440);    // compilenode string
          var string954 = new GraceString("Unknown");
          this.data.asString = string954;
        };
        return obj941_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj941 = emptyGraceObject("unknown", "staticTypes", 432);
      var obj941_init = obj941_build.call(obj941, null, this, [], []);
      obj941_init.call(obj941);  // end of compileobject
      this.data.unknown = obj941;
      setLineNumber(481);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call955 = selfRequest(this, "unknown", [0]);
      this.data.base = call955;
      setLineNumber(482);    // compilenode array
      var array958 = new GraceSequence([]);
      // call case 2: outer request
      var call957 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array958);
      var string959 = new GraceString("Done");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call956 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], call957, string959);
      this.data.done = call956;
      setLineNumber(483);    // compilenode array
      var array963 = new GraceSequence([]);
      // call case 2: outer request
      var call962 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array963);
      var string964 = new GraceString("Object");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call961 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], call962, string964);
      // call case 4: self request with 1 args and 0 typeArgs 
      var call960 = selfRequest(this, "base:=(1)", [1], call961);
      setLineNumber(485);    // compilenode array
      var array966 = new GraceSequence([]);
      var string967 = new GraceString("Pattern");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call965 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array966, string967);
      this.data.pattern = call965;
      setLineNumber(486);    // compilenode array
      var array969 = new GraceSequence([]);
      var string970 = new GraceString("Iterator");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call968 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array969, string970);
      this.data.iterator = call968;
      setLineNumber(487);    // compilenode array
      var array972 = new GraceSequence([]);
      var string973 = new GraceString("Binding");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call971 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array972, string973);
      this.data.binding = call971;
      setLineNumber(488);    // compilenode array
      var array975 = new GraceSequence([]);
      var string976 = new GraceString("Boolean");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call974 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array975, string976);
      this.data.boolean = call974;
      setLineNumber(489);    // compilenode array
      var array978 = new GraceSequence([]);
      var string979 = new GraceString("Number");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call977 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array978, string979);
      this.data.number = call977;
      setLineNumber(490);    // compilenode array
      var array981 = new GraceSequence([]);
      var string982 = new GraceString("String");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call980 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array981, string982);
      this.data.string = call980;
      setLineNumber(491);    // compilenode array
      var array984 = new GraceSequence([]);
      var string985 = new GraceString("List");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call983 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array984, string985);
      this.data.list = call983;
      setLineNumber(492);    // compilenode array
      var array987 = new GraceSequence([]);
      var string988 = new GraceString("Point");
      // call case 4: self request with 2 args and 0 typeArgs 
      var call986 = selfRequest(this, "fromMethods(1)withName(1)", [1, 1], array987, string988);
      this.data.point = call986;
      setLineNumber(494);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call990 = selfRequest(this, "binding", [0]);
      var string991 = new GraceString("key");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call992 = selfRequest(this, "base", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call989 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call990, string991, call992);
      setLineNumber(495);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call994 = selfRequest(this, "binding", [0]);
      var string995 = new GraceString("value");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call996 = selfRequest(this, "base", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call993 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call994, string995, call996);
      setLineNumber(497);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call998 = selfRequest(this, "base", [0]);
      var string999 = new GraceString("\u2260(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1001 = selfRequest(this, "base", [0]);
      var array1000 = new GraceSequence([call1001]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1002 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call997 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call998, string999, array1000, call1002);
      setLineNumber(498);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1004 = selfRequest(this, "base", [0]);
      var string1005 = new GraceString("asDebugString");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1006 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1003 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1004, string1005, call1006);
      setLineNumber(499);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1008 = selfRequest(this, "base", [0]);
      var string1009 = new GraceString("asString");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1010 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1007 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1008, string1009, call1010);
      setLineNumber(500);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1012 = selfRequest(this, "base", [0]);
      var string1013 = new GraceString("::(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1014 = selfRequest(this, "binding", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1011 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1012, string1013, call1014);
      setLineNumber(501);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1016 = selfRequest(this, "base", [0]);
      var string1017 = new GraceString("emptyList");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1018 = selfRequest(this, "list", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1015 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1016, string1017, call1018);
      setLineNumber(503);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1020 = selfRequest(this, "done", [0]);
      var string1021 = new GraceString("asDebugString");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1022 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1019 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1020, string1021, call1022);
      setLineNumber(504);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1024 = selfRequest(this, "done", [0]);
      var string1025 = new GraceString("asString");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1026 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1023 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1024, string1025, call1026);
      setLineNumber(506);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1028 = selfRequest(this, "pattern", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1029 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1027 = selfRequest(this, "extend(1)with(1)", [1, 1], call1028, call1029);
      setLineNumber(507);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1031 = selfRequest(this, "pattern", [0]);
      var string1032 = new GraceString("matches(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1034 = selfRequest(this, "base", [0]);
      var array1033 = new GraceSequence([call1034]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1035 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1030 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1031, string1032, array1033, call1035);
      setLineNumber(508);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1037 = selfRequest(this, "pattern", [0]);
      var string1038 = new GraceString("|(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1040 = selfRequest(this, "pattern", [0]);
      var array1039 = new GraceSequence([call1040]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1041 = selfRequest(this, "pattern", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1036 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1037, string1038, array1039, call1041);
      setLineNumber(509);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1043 = selfRequest(this, "pattern", [0]);
      var string1044 = new GraceString("&(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1046 = selfRequest(this, "pattern", [0]);
      var array1045 = new GraceSequence([call1046]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1047 = selfRequest(this, "pattern", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1042 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1043, string1044, array1045, call1047);
      setLineNumber(511);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1049 = selfRequest(this, "iterator", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1050 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1048 = selfRequest(this, "extend(1)with(1)", [1, 1], call1049, call1050);
      setLineNumber(512);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1052 = selfRequest(this, "iterator", [0]);
      var string1053 = new GraceString("hasNext");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1054 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1051 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1052, string1053, call1054);
      setLineNumber(513);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1056 = selfRequest(this, "iterator", [0]);
      var string1057 = new GraceString("next");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1058 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1055 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1056, string1057, call1058);
      setLineNumber(515);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1063 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 1 args and 0 typeArgs 
      var call1062 = selfRequest(this, "blockReturning(1)", [1], call1063);
      // call case 6: other requests
      if (var_aParam === undefined) raiseUninitializedVariable("aParam");
      var call1061 = request(var_aParam, "ofType(1)", [1], call1062);
      var array1060 = new GraceSequence([call1061]);
      setLineNumber(516);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1064 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1059 = selfRequest(this, "blockTaking(1)returning(1)", [1, 1], array1060, call1064);
      this.data.shortCircuit = call1059;
      setLineNumber(517);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1066 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1067 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1065 = selfRequest(this, "extend(1)with(1)", [1, 1], call1066, call1067);
      setLineNumber(518);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1069 = selfRequest(this, "boolean", [0]);
      var string1070 = new GraceString("&&(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1072 = selfRequest(this, "boolean", [0]);
      var array1071 = new GraceSequence([call1072]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1073 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1068 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1069, string1070, array1071, call1073);
      setLineNumber(519);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1075 = selfRequest(this, "boolean", [0]);
      var string1076 = new GraceString("||(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1078 = selfRequest(this, "boolean", [0]);
      var array1077 = new GraceSequence([call1078]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1079 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1074 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1075, string1076, array1077, call1079);
      setLineNumber(520);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1081 = selfRequest(this, "boolean", [0]);
      var string1082 = new GraceString("prefix!");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1083 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1080 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1081, string1082, call1083);
      setLineNumber(521);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1085 = selfRequest(this, "boolean", [0]);
      var string1086 = new GraceString("not");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1087 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1084 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1085, string1086, call1087);
      setLineNumber(523);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1089 = selfRequest(this, "number", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1090 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1088 = selfRequest(this, "extend(1)with(1)", [1, 1], call1089, call1090);
      setLineNumber(524);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1092 = selfRequest(this, "number", [0]);
      var string1093 = new GraceString("+(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1095 = selfRequest(this, "number", [0]);
      var array1094 = new GraceSequence([call1095]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1096 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1091 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1092, string1093, array1094, call1096);
      setLineNumber(525);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1098 = selfRequest(this, "number", [0]);
      var string1099 = new GraceString("*(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1101 = selfRequest(this, "number", [0]);
      var array1100 = new GraceSequence([call1101]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1102 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1097 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1098, string1099, array1100, call1102);
      setLineNumber(526);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1104 = selfRequest(this, "number", [0]);
      var string1105 = new GraceString("-(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1107 = selfRequest(this, "number", [0]);
      var array1106 = new GraceSequence([call1107]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1108 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1103 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1104, string1105, array1106, call1108);
      setLineNumber(527);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1110 = selfRequest(this, "number", [0]);
      var string1111 = new GraceString("/(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1113 = selfRequest(this, "number", [0]);
      var array1112 = new GraceSequence([call1113]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1114 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1109 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1110, string1111, array1112, call1114);
      setLineNumber(528);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1116 = selfRequest(this, "number", [0]);
      var string1117 = new GraceString("^(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1119 = selfRequest(this, "number", [0]);
      var array1118 = new GraceSequence([call1119]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1120 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1115 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1116, string1117, array1118, call1120);
      setLineNumber(529);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1122 = selfRequest(this, "number", [0]);
      var string1123 = new GraceString("%(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1125 = selfRequest(this, "number", [0]);
      var array1124 = new GraceSequence([call1125]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1126 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1121 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1122, string1123, array1124, call1126);
      setLineNumber(530);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1128 = selfRequest(this, "number", [0]);
      var string1129 = new GraceString("\u00f7(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1131 = selfRequest(this, "number", [0]);
      var array1130 = new GraceSequence([call1131]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1132 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1127 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1128, string1129, array1130, call1132);
      setLineNumber(531);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1134 = selfRequest(this, "number", [0]);
      var string1135 = new GraceString("@(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1137 = selfRequest(this, "number", [0]);
      var array1136 = new GraceSequence([call1137]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1138 = selfRequest(this, "point", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1133 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1134, string1135, array1136, call1138);
      setLineNumber(532);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1140 = selfRequest(this, "number", [0]);
      var string1141 = new GraceString("hash");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1142 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1139 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1140, string1141, call1142);
      setLineNumber(533);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1144 = selfRequest(this, "number", [0]);
      var string1145 = new GraceString("++(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1147 = selfRequest(this, "base", [0]);
      var array1146 = new GraceSequence([call1147]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1148 = selfRequest(this, "string", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1143 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1144, string1145, array1146, call1148);
      setLineNumber(534);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1150 = selfRequest(this, "number", [0]);
      var string1151 = new GraceString("<(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1153 = selfRequest(this, "number", [0]);
      var array1152 = new GraceSequence([call1153]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1154 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1149 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1150, string1151, array1152, call1154);
      setLineNumber(535);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1156 = selfRequest(this, "number", [0]);
      var string1157 = new GraceString(">(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1159 = selfRequest(this, "number", [0]);
      var array1158 = new GraceSequence([call1159]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1160 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1155 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1156, string1157, array1158, call1160);
      setLineNumber(536);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1162 = selfRequest(this, "number", [0]);
      var string1163 = new GraceString("\u2264(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1165 = selfRequest(this, "number", [0]);
      var array1164 = new GraceSequence([call1165]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1166 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1161 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1162, string1163, array1164, call1166);
      setLineNumber(537);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1168 = selfRequest(this, "number", [0]);
      var string1169 = new GraceString("\u2265(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1171 = selfRequest(this, "number", [0]);
      var array1170 = new GraceSequence([call1171]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1172 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1167 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1168, string1169, array1170, call1172);
      setLineNumber(538);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1174 = selfRequest(this, "number", [0]);
      var string1175 = new GraceString("..(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1177 = selfRequest(this, "number", [0]);
      var array1176 = new GraceSequence([call1177]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1178 = selfRequest(this, "list", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1173 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1174, string1175, array1176, call1178);
      setLineNumber(539);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1180 = selfRequest(this, "number", [0]);
      var string1181 = new GraceString("asInteger32");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1182 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1179 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1180, string1181, call1182);
      setLineNumber(540);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1184 = selfRequest(this, "number", [0]);
      var string1185 = new GraceString("prefix-");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1186 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1183 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1184, string1185, call1186);
      setLineNumber(541);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1188 = selfRequest(this, "number", [0]);
      var string1189 = new GraceString("inBase(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1191 = selfRequest(this, "number", [0]);
      var array1190 = new GraceSequence([call1191]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1192 = selfRequest(this, "number", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1187 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1188, string1189, array1190, call1192);
      setLineNumber(542);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1194 = selfRequest(this, "number", [0]);
      var string1195 = new GraceString("truncated");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1196 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1193 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1194, string1195, call1196);
      setLineNumber(543);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1198 = selfRequest(this, "number", [0]);
      var string1199 = new GraceString("rounded");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1200 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1197 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1198, string1199, call1200);
      setLineNumber(544);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1202 = selfRequest(this, "number", [0]);
      var string1203 = new GraceString("prefix<");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1204 = selfRequest(this, "pattern", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1201 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1202, string1203, call1204);
      setLineNumber(545);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1206 = selfRequest(this, "number", [0]);
      var string1207 = new GraceString("prefix>");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1208 = selfRequest(this, "pattern", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1205 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1206, string1207, call1208);
      setLineNumber(547);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1210 = selfRequest(this, "point", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1211 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1209 = selfRequest(this, "extend(1)with(1)", [1, 1], call1210, call1211);
      setLineNumber(548);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1213 = selfRequest(this, "point", [0]);
      var string1214 = new GraceString("x");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1215 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1212 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1213, string1214, call1215);
      setLineNumber(549);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1217 = selfRequest(this, "point", [0]);
      var string1218 = new GraceString("y");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1219 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1216 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1217, string1218, call1219);
      setLineNumber(551);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1221 = selfRequest(this, "string", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1222 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1220 = selfRequest(this, "extend(1)with(1)", [1, 1], call1221, call1222);
      setLineNumber(552);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1224 = selfRequest(this, "string", [0]);
      var string1225 = new GraceString("++(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1227 = selfRequest(this, "base", [0]);
      var array1226 = new GraceSequence([call1227]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1228 = selfRequest(this, "string", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1223 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1224, string1225, array1226, call1228);
      setLineNumber(553);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1230 = selfRequest(this, "string", [0]);
      var string1231 = new GraceString("at(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1233 = selfRequest(this, "number", [0]);
      var array1232 = new GraceSequence([call1233]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1234 = selfRequest(this, "string", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1229 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1230, string1231, array1232, call1234);
      setLineNumber(554);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1236 = selfRequest(this, "string", [0]);
      var string1237 = new GraceString("iterator");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1238 = selfRequest(this, "base", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1235 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1236, string1237, call1238);
      setLineNumber(555);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1240 = selfRequest(this, "string", [0]);
      var string1241 = new GraceString("quoted");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1242 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1239 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1240, string1241, call1242);
      setLineNumber(556);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1244 = selfRequest(this, "string", [0]);
      var string1245 = new GraceString("size");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1246 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1243 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1244, string1245, call1246);
      setLineNumber(557);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1248 = selfRequest(this, "string", [0]);
      var string1249 = new GraceString("iterator");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1250 = selfRequest(this, "iterator", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1247 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1248, string1249, call1250);
      setLineNumber(558);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1252 = selfRequest(this, "string", [0]);
      var string1253 = new GraceString("ord");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1254 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1251 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1252, string1253, call1254);
      setLineNumber(559);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1256 = selfRequest(this, "string", [0]);
      var string1257 = new GraceString("substringFrom(_)to(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1259 = selfRequest(this, "number", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1260 = selfRequest(this, "number", [0]);
      var array1258 = new GraceSequence([call1259, call1260]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1261 = selfRequest(this, "string", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1255 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1256, string1257, array1258, call1261);
      setLineNumber(560);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1263 = selfRequest(this, "string", [0]);
      var string1264 = new GraceString("replace()with(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1266 = selfRequest(this, "string", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1267 = selfRequest(this, "string", [0]);
      var array1265 = new GraceSequence([call1266, call1267]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1268 = selfRequest(this, "string", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1262 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1263, string1264, array1265, call1268);
      setLineNumber(561);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1270 = selfRequest(this, "string", [0]);
      var string1271 = new GraceString("hash");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1272 = selfRequest(this, "string", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1269 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1270, string1271, call1272);
      setLineNumber(562);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1274 = selfRequest(this, "string", [0]);
      var string1275 = new GraceString("indices");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1276 = selfRequest(this, "list", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1273 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1274, string1275, call1276);
      setLineNumber(563);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1278 = selfRequest(this, "string", [0]);
      var string1279 = new GraceString("asNumber");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1280 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1277 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1278, string1279, call1280);
      setLineNumber(565);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1284 = selfRequest(this, "unknown", [0]);
      // call case 6: other requests
      if (var_aParam === undefined) raiseUninitializedVariable("aParam");
      var call1283 = request(var_aParam, "ofType(1)", [1], call1284);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1286 = selfRequest(this, "unknown", [0]);
      // call case 6: other requests
      if (var_aParam === undefined) raiseUninitializedVariable("aParam");
      var call1285 = request(var_aParam, "ofType(1)", [1], call1286);
      var array1282 = new GraceSequence([call1283, call1285]);
      setLineNumber(566);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1287 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1281 = selfRequest(this, "blockTaking(1)returning(1)", [1, 1], array1282, call1287);
      this.data.fold = call1281;
      setLineNumber(567);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1289 = selfRequest(this, "list", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1290 = selfRequest(this, "base", [0]);
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1288 = selfRequest(this, "extend(1)with(1)", [1, 1], call1289, call1290);
      setLineNumber(568);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1292 = selfRequest(this, "list", [0]);
      var string1293 = new GraceString("at(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1295 = selfRequest(this, "number", [0]);
      var array1294 = new GraceSequence([call1295]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1296 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1291 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1292, string1293, array1294, call1296);
      setLineNumber(569);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1298 = selfRequest(this, "list", [0]);
      var string1299 = new GraceString("at(_)put(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1301 = selfRequest(this, "number", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1302 = selfRequest(this, "unknown", [0]);
      var array1300 = new GraceSequence([call1301, call1302]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1303 = selfRequest(this, "done", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1297 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1298, string1299, array1300, call1303);
      setLineNumber(570);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1305 = selfRequest(this, "list", [0]);
      var string1306 = new GraceString("push(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1308 = selfRequest(this, "unknown", [0]);
      var array1307 = new GraceSequence([call1308]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1309 = selfRequest(this, "done", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1304 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1305, string1306, array1307, call1309);
      setLineNumber(571);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1311 = selfRequest(this, "list", [0]);
      var string1312 = new GraceString("pop");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1313 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1310 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1311, string1312, call1313);
      setLineNumber(572);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1315 = selfRequest(this, "list", [0]);
      var string1316 = new GraceString("size");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1317 = selfRequest(this, "number", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1314 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1315, string1316, call1317);
      setLineNumber(573);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1319 = selfRequest(this, "list", [0]);
      var string1320 = new GraceString("iterator");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1321 = selfRequest(this, "iterator", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1318 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1319, string1320, call1321);
      setLineNumber(574);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1323 = selfRequest(this, "list", [0]);
      var string1324 = new GraceString("contains(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1326 = selfRequest(this, "unknown", [0]);
      var array1325 = new GraceSequence([call1326]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1327 = selfRequest(this, "boolean", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1322 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1323, string1324, array1325, call1327);
      setLineNumber(575);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1329 = selfRequest(this, "list", [0]);
      var string1330 = new GraceString("indices");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1331 = selfRequest(this, "list", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1328 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1329, string1330, call1331);
      setLineNumber(576);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1333 = selfRequest(this, "list", [0]);
      var string1334 = new GraceString("first");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1335 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1332 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1333, string1334, call1335);
      setLineNumber(577);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1337 = selfRequest(this, "list", [0]);
      var string1338 = new GraceString("last");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1339 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 3 args and 0 typeArgs 
      var call1336 = selfRequest(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call1337, string1338, call1339);
      setLineNumber(578);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1341 = selfRequest(this, "list", [0]);
      var string1342 = new GraceString("add(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1344 = selfRequest(this, "unknown", [0]);
      var array1343 = new GraceSequence([call1344]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1345 = selfRequest(this, "list", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1340 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1341, string1342, array1343, call1345);
      setLineNumber(579);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1347 = selfRequest(this, "list", [0]);
      var string1348 = new GraceString("addFirst(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1350 = selfRequest(this, "unknown", [0]);
      var array1349 = new GraceSequence([call1350]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1351 = selfRequest(this, "list", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1346 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1347, string1348, array1349, call1351);
      setLineNumber(580);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1353 = selfRequest(this, "list", [0]);
      var string1354 = new GraceString("addAll(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1356 = selfRequest(this, "unknown", [0]);
      var array1355 = new GraceSequence([call1356]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1357 = selfRequest(this, "list", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1352 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1353, string1354, array1355, call1357);
      setLineNumber(581);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1359 = selfRequest(this, "list", [0]);
      var string1360 = new GraceString("++(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1362 = selfRequest(this, "list", [0]);
      var array1361 = new GraceSequence([call1362]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1363 = selfRequest(this, "list", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1358 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1359, string1360, array1361, call1363);
      setLineNumber(582);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1365 = selfRequest(this, "list", [0]);
      var string1366 = new GraceString("fold(_)startingWith(_)");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1368 = selfRequest(this, "fold", [0]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1369 = selfRequest(this, "unknown", [0]);
      var array1367 = new GraceSequence([call1368, call1369]);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1370 = selfRequest(this, "unknown", [0]);
      // call case 4: self request with 4 args and 0 typeArgs 
      var call1364 = selfRequest(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call1365, string1366, array1367, call1370);
      setLineNumber(584);    // compilenode string
      var string1372 = new GraceString("Unknown");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1373 = selfRequest(this, "unknown", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1375 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1374 = request(call1375, "types", [0]);
      var call1371 = request(call1374, "at(1)put(1)", [1, 1], string1372, call1373);
      setLineNumber(585);    // compilenode string
      var string1377 = new GraceString("Done");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1378 = selfRequest(this, "done", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1380 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1379 = request(call1380, "types", [0]);
      var call1376 = request(call1379, "at(1)put(1)", [1, 1], string1377, call1378);
      setLineNumber(586);    // compilenode string
      var string1382 = new GraceString("Object");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1383 = selfRequest(this, "base", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1385 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1384 = request(call1385, "types", [0]);
      var call1381 = request(call1384, "at(1)put(1)", [1, 1], string1382, call1383);
      setLineNumber(587);    // compilenode string
      var string1387 = new GraceString("Pattern");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1388 = selfRequest(this, "pattern", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1390 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1389 = request(call1390, "types", [0]);
      var call1386 = request(call1389, "at(1)put(1)", [1, 1], string1387, call1388);
      setLineNumber(588);    // compilenode string
      var string1392 = new GraceString("Boolean");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1393 = selfRequest(this, "boolean", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1395 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1394 = request(call1395, "types", [0]);
      var call1391 = request(call1394, "at(1)put(1)", [1, 1], string1392, call1393);
      setLineNumber(589);    // compilenode string
      var string1397 = new GraceString("Number");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1398 = selfRequest(this, "number", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1400 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1399 = request(call1400, "types", [0]);
      var call1396 = request(call1399, "at(1)put(1)", [1, 1], string1397, call1398);
      setLineNumber(590);    // compilenode string
      var string1402 = new GraceString("String");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1403 = selfRequest(this, "string", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1405 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1404 = request(call1405, "types", [0]);
      var call1401 = request(call1404, "at(1)put(1)", [1, 1], string1402, call1403);
      setLineNumber(591);    // compilenode string
      var string1407 = new GraceString("List");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1408 = selfRequest(this, "list", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1410 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1409 = request(call1410, "types", [0]);
      var call1406 = request(call1409, "at(1)put(1)", [1, 1], string1407, call1408);
      setLineNumber(592);    // compilenode string
      var string1412 = new GraceString("Point");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1413 = selfRequest(this, "point", [0]);
      // call case 6: other requests
      // call case 6: other requests
      // call case 2: outer request
      var call1415 = selfRequest(importedModules["staticTypes"], "scope", [0]);
      var call1414 = request(call1415, "types", [0]);
      var call1411 = request(call1414, "at(1)put(1)", [1, 1], string1412, call1413);
      setLineNumber(594);    // compilenode string
      var string1417 = new GraceString("Unknown");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1418 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1416 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1417, call1418);
      setLineNumber(595);    // compilenode string
      var string1420 = new GraceString("Dynamic");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1421 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1419 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1420, call1421);
      setLineNumber(596);    // compilenode string
      var string1423 = new GraceString("Done");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1424 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1422 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1423, call1424);
      setLineNumber(597);    // compilenode string
      var string1426 = new GraceString("Object");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1427 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1425 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1426, call1427);
      setLineNumber(598);    // compilenode string
      var string1429 = new GraceString("Pattern");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1430 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1428 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1429, call1430);
      setLineNumber(599);    // compilenode string
      var string1432 = new GraceString("Boolean");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1433 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1431 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1432, call1433);
      setLineNumber(600);    // compilenode string
      var string1435 = new GraceString("Number");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1436 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1434 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1435, call1436);
      setLineNumber(601);    // compilenode string
      var string1438 = new GraceString("String");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1439 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1437 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1438, call1439);
      setLineNumber(602);    // compilenode string
      var string1441 = new GraceString("List");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1442 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1440 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1441, call1442);
      setLineNumber(603);    // compilenode string
      var string1444 = new GraceString("Point");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1445 = selfRequest(this, "pattern", [0]);
      // call case 2: outer request
      var call1443 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1444, call1445);
      setLineNumber(605);    // compilenode string
      var string1447 = new GraceString("done");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1448 = selfRequest(this, "done", [0]);
      // call case 2: outer request
      var call1446 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1447, call1448);
      setLineNumber(606);    // compilenode string
      var string1450 = new GraceString("true");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1451 = selfRequest(this, "boolean", [0]);
      // call case 2: outer request
      var call1449 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1450, call1451);
      setLineNumber(607);    // compilenode string
      var string1453 = new GraceString("false");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1454 = selfRequest(this, "boolean", [0]);
      // call case 2: outer request
      var call1452 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1453, call1454);
      setLineNumber(608);    // compilenode string
      var string1456 = new GraceString("emptyList");
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1457 = selfRequest(this, "list", [0]);
      // call case 2: outer request
      var call1455 = selfRequest(importedModules["staticTypes"], "addVar(1)ofType(1)", [1, 1], string1456, call1457);
    };
    return obj554_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj554 = emptyGraceObject("objectType", "staticTypes", 183);
  var obj554_init = obj554_build.call(obj554, null, this, [], []);
  obj554_init.call(obj554);  // end of compileobject
  var var_objectType = obj554;
  var reader1458_objectType = function() {  // reader method objectType
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      return var_objectType;
  };
  reader1458_objectType.isDef = true;
  reader1458_objectType.confidential = true;
  this.methods["objectType"] = reader1458_objectType;
  setLineNumber(619);    // compilenode string
  var string1460 = new GraceString("ObjectError");
  // call case 6: other requests
  // call case 2: outer request
  var call1461 = selfRequest(var_prelude, "TypeError", [0]);
  var call1459 = request(call1461, "refine(1)", [1], string1460);
  var var_ObjectError = call1459;
  var reader1462_ObjectError = function() {  // reader method ObjectError
      if (var_ObjectError === undefined) raiseUninitializedVariable("ObjectError");
      return var_ObjectError;
  };
  reader1462_ObjectError.isDef = true;
  reader1462_ObjectError.confidential = true;
  this.methods["ObjectError"] = reader1462_ObjectError;
  setLineNumber(621);    // compilenode block
  var block1464 = new GraceBlock(this, 621, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1465 = selfRequest(this, "ObjectLiteral", [0]);
  block1464.paramTypes = [call1465];
  var matches1466 = function(var_obj) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1467 = selfRequest(this, "ObjectLiteral", [0]);
    if (!Grace_isTrue(request(call1467, "matches(1)", [1], var_obj)))
        return false;
    return true;
  };
  block1464.guard = matches1466;
  block1464.real = function block1464(var_obj) {
    setLineNumber(622);    // compilenode block
    var block1469 = new GraceBlock(this, 622, 0);
    block1469.guard = jsTrue;
    block1469.real = function block1469() {
      setLineNumber(622);    // compilenode member
      // call case 6: other requests
      var call1471 = request(var_obj, "value", [0]);
      // call case 2: outer request
      var call1470 = selfRequest(importedModules["staticTypes"], "processBody(1)", [1], call1471);
      return call1470;
    };
    let applyMeth1469 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1469.methodName = "apply";
    applyMeth1469.paramCounts = [0];
    applyMeth1469.paramNames = [];
    applyMeth1469.definitionLine = 622;
    applyMeth1469.definitionModule = "staticTypes";
    block1469.methods["apply"] = applyMeth1469;
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1472 = selfRequest(this, "scope", [0]);
    var call1468 = request(call1472, "enter(1)", [1], block1469);
    return call1468;
  };
  let applyMeth1464 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1464.methodName = "apply(1)";
  applyMeth1464.paramCounts = [1];
  applyMeth1464.paramNames = ["obj"];
  applyMeth1464.definitionLine = 621;
  applyMeth1464.definitionModule = "staticTypes";
  block1464.methods["apply(1)"] = applyMeth1464;
  let matchesMeth1464 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1464.methodName = "matches(1)";
  matchesMeth1464.paramCounts = [1];
  matchesMeth1464.paramNames = ["obj"];
  matchesMeth1464.definitionLine = 621;
  matchesMeth1464.definitionModule = "staticTypes";
  block1464.methods["matches(1)"] = matchesMeth1464;
  // call case 2: outer request
  var call1463 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1464);
  setLineNumber(628);    // compilenode block
  var block1474 = new GraceBlock(this, 628, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1475 = selfRequest(this, "NumberLiteral", [0]);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1476 = selfRequest(this, "OctetsLiteral", [0]);
  var opresult1477 = request(call1475, "|(1)", [1], call1476);
  block1474.paramTypes = [opresult1477];
  var matches1478 = function(var___95____95__7) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1479 = selfRequest(this, "NumberLiteral", [0]);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1480 = selfRequest(this, "OctetsLiteral", [0]);
    var opresult1481 = request(call1479, "|(1)", [1], call1480);
    if (!Grace_isTrue(request(opresult1481, "matches(1)", [1], var___95____95__7)))
        return false;
    return true;
  };
  block1474.guard = matches1478;
  block1474.real = function block1474(var___95____95__7) {
    setLineNumber(629);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1482 = request(var_objectType, "number", [0]);
    return call1482;
  };
  let applyMeth1474 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1474.methodName = "apply(1)";
  applyMeth1474.paramCounts = [1];
  applyMeth1474.paramNames = ["__7"];
  applyMeth1474.definitionLine = 628;
  applyMeth1474.definitionModule = "staticTypes";
  block1474.methods["apply(1)"] = applyMeth1474;
  let matchesMeth1474 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1474.methodName = "matches(1)";
  matchesMeth1474.paramCounts = [1];
  matchesMeth1474.paramNames = ["__7"];
  matchesMeth1474.definitionLine = 628;
  matchesMeth1474.definitionModule = "staticTypes";
  block1474.methods["matches(1)"] = matchesMeth1474;
  // call case 2: outer request
  var call1473 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1474);
  setLineNumber(632);    // compilenode block
  var block1484 = new GraceBlock(this, 632, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1485 = selfRequest(this, "StringLiteral", [0]);
  block1484.paramTypes = [call1485];
  var matches1486 = function(var___95____95__8) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1487 = selfRequest(this, "StringLiteral", [0]);
    if (!Grace_isTrue(request(call1487, "matches(1)", [1], var___95____95__8)))
        return false;
    return true;
  };
  block1484.guard = matches1486;
  block1484.real = function block1484(var___95____95__8) {
    setLineNumber(633);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1488 = request(var_objectType, "string", [0]);
    return call1488;
  };
  let applyMeth1484 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1484.methodName = "apply(1)";
  applyMeth1484.paramCounts = [1];
  applyMeth1484.paramNames = ["__8"];
  applyMeth1484.definitionLine = 632;
  applyMeth1484.definitionModule = "staticTypes";
  block1484.methods["apply(1)"] = applyMeth1484;
  let matchesMeth1484 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1484.methodName = "matches(1)";
  matchesMeth1484.paramCounts = [1];
  matchesMeth1484.paramNames = ["__8"];
  matchesMeth1484.definitionLine = 632;
  matchesMeth1484.definitionModule = "staticTypes";
  block1484.methods["matches(1)"] = matchesMeth1484;
  // call case 2: outer request
  var call1483 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1484);
  setLineNumber(636);    // compilenode block
  var block1490 = new GraceBlock(this, 636, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1491 = selfRequest(this, "ArrayLiteral", [0]);
  block1490.paramTypes = [call1491];
  var matches1492 = function(var___95____95__9) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1493 = selfRequest(this, "ArrayLiteral", [0]);
    if (!Grace_isTrue(request(call1493, "matches(1)", [1], var___95____95__9)))
        return false;
    return true;
  };
  block1490.guard = matches1492;
  block1490.real = function block1490(var___95____95__9) {
    setLineNumber(637);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1494 = request(var_objectType, "list", [0]);
    return call1494;
  };
  let applyMeth1490 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1490.methodName = "apply(1)";
  applyMeth1490.paramCounts = [1];
  applyMeth1490.paramNames = ["__9"];
  applyMeth1490.definitionLine = 636;
  applyMeth1490.definitionModule = "staticTypes";
  block1490.methods["apply(1)"] = applyMeth1490;
  let matchesMeth1490 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1490.methodName = "matches(1)";
  matchesMeth1490.paramCounts = [1];
  matchesMeth1490.paramNames = ["__9"];
  matchesMeth1490.definitionLine = 636;
  matchesMeth1490.definitionModule = "staticTypes";
  block1490.methods["matches(1)"] = matchesMeth1490;
  // call case 2: outer request
  var call1489 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1490);
  setLineNumber(643);    // compilenode string
  var string1496 = new GraceString("RequestError");
  // call case 6: other requests
  // call case 2: outer request
  var call1497 = selfRequest(var_prelude, "TypeError", [0]);
  var call1495 = request(call1497, "refine(1)", [1], string1496);
  var var_RequestError = call1495;
  var reader1498_RequestError = function() {  // reader method RequestError
      if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
      return var_RequestError;
  };
  reader1498_RequestError.isDef = true;
  reader1498_RequestError.confidential = true;
  this.methods["RequestError"] = reader1498_RequestError;
  setLineNumber(645);    // compilenode block
  var block1500 = new GraceBlock(this, 645, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1501 = selfRequest(this, "Request", [0]);
  block1500.paramTypes = [call1501];
  var matches1502 = function(var_req) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1503 = selfRequest(this, "Request", [0]);
    if (!Grace_isTrue(request(call1503, "matches(1)", [1], var_req)))
        return false;
    return true;
  };
  block1500.guard = matches1502;
  block1500.real = function block1500(var_req) {
    setLineNumber(646);    // compilenode member
    // call case 6: other requests
    var call1505 = request(var_req, "receiver", [0]);
    var cases1504 = [];
    setLineNumber(647);    // compilenode block
    var block1506 = new GraceBlock(this, 647, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1507 = selfRequest(this, "Request", [0]);
    block1506.paramTypes = [call1507];
    var matches1508 = function(var_innerReq) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1509 = selfRequest(this, "Request", [0]);
      if (!Grace_isTrue(request(call1509, "matches(1)", [1], var_innerReq)))
          return false;
      return true;
    };
    block1506.guard = matches1508;
    block1506.real = function block1506(var_innerReq) {
      setLineNumber(648);    // compilenode member
      // call case 6: other requests
      var call1510 = request(var_innerReq, "receiver", [0]);
      var var_rec = call1510;
      var if1511 = GraceDone;
      setLineNumber(649);    // compilenode call
      if (var_rec === undefined) raiseUninitializedVariable("rec");
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1513 = selfRequest(this, "Identifier", [0]);
      var call1512 = request(call1513, "match(1)", [1], var_rec);
      // call case 6: other requests
      if (var_rec === undefined) raiseUninitializedVariable("rec");
      var call1514 = request(var_rec, "value", [0]);
      var string1515 = new GraceString("self");
      var opresult1516 = request(call1514, "==(1)", [1], string1515);
      var opresult1517 = request(call1512, "&&(1)", [1], opresult1516);
      if (Grace_isTrue(opresult1517)) {
        setLineNumber(650);    // compilenode string
        var string1519 = new GraceString("Self");
        var block1520 = new GraceBlock(this, 650, 0);
        block1520.guard = jsTrue;
        block1520.real = function block1520() {
          setLineNumber(651);    // compilenode string
          var string1522 = new GraceString("type of self missing");
          if (var_rec === undefined) raiseUninitializedVariable("rec");
          // call case 6: other requests
          // call case 2: outer request
          var call1523 = selfRequest(var_prelude, "Exception", [0]);
          var call1521 = request(call1523, "raise(1)with(1)", [1, 1], string1522, var_rec);
          return call1521;
        };
        let applyMeth1520 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth1520.methodName = "apply";
        applyMeth1520.paramCounts = [0];
        applyMeth1520.paramNames = [];
        applyMeth1520.definitionLine = 650;
        applyMeth1520.definitionModule = "staticTypes";
        block1520.methods["apply"] = applyMeth1520;
        // call case 6: other requests
        setLineNumber(650);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1525 = selfRequest(this, "scope", [0]);
        var call1524 = request(call1525, "types", [0]);
        var call1518 = request(call1524, "find(1)butIfMissing(1)", [1, 1], string1519, block1520);
        if1511 = call1518;
      } else {
        setLineNumber(654);    // compilenode call
        if (var_rec === undefined) raiseUninitializedVariable("rec");
        // call case 2: outer request
        var call1526 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_rec);
        if1511 = call1526;
      }
      var var_rType = if1511;
      var if1527 = GraceDone;
      setLineNumber(657);    // compilenode member
      // call case 6: other requests
      if (var_rType === undefined) raiseUninitializedVariable("rType");
      var call1528 = request(var_rType, "isUnknown", [0]);
      if (Grace_isTrue(call1528)) {
        setLineNumber(658);    // compilenode member
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call1529 = request(var_objectType, "unknown", [0]);
        if1527 = call1529;
      } else {
        setLineNumber(660);    // compilenode member
        // call case 6: other requests
        var call1530 = request(var_innerReq, "canonicalName", [0]);
        var var_name = call1530;
        setLineNumber(662);    // compilenode call
        if (var_name === undefined) raiseUninitializedVariable("name");
        // call case 6: other requests
        if (var_rType === undefined) raiseUninitializedVariable("rType");
        var call1532 = request(var_rType, "getMethod(1)", [1], var_name);
        var cases1531 = [];
        setLineNumber(663);    // compilenode block
        var block1533 = new GraceBlock(this, 663, 1);
        if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
        block1533.paramTypes = [var_noSuchMethod];
        var matches1534 = function(var___95____95__10) {
          if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
          if (!Grace_isTrue(request(var_noSuchMethod, "matches(1)", [1], var___95____95__10)))
              return false;
          return true;
        };
        block1533.guard = matches1534;
        block1533.real = function block1533(var___95____95__10) {
          setLineNumber(664);    // compilenode string
          var string1536 = new GraceString("no method `");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1537 = request(string1536, "++(1)", [1], var_name);
          var string1538 = new GraceString("` in ");
          var opresult1539 = request(opresult1537, "++(1)", [1], string1538);
          setLineNumber(665);    // compilenode string
          var string1540 = new GraceString("`");
          // call case 6: other requests
          if (var_rec === undefined) raiseUninitializedVariable("rec");
          var call1541 = request(var_rec, "toGrace(1)", [1], new GraceNum(0));
          var opresult1542 = request(string1540, "++(1)", [1], call1541);
          var string1543 = new GraceString("` of type `");
          var opresult1544 = request(opresult1542, "++(1)", [1], string1543);
          if (var_rType === undefined) raiseUninitializedVariable("rType");
          var opresult1545 = request(opresult1544, "++(1)", [1], var_rType);
          var string1546 = new GraceString("`");
          var opresult1547 = request(opresult1545, "++(1)", [1], string1546);
          var opresult1548 = request(opresult1539, "++(1)", [1], opresult1547);
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call1535 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1548, var_innerReq);
          return call1535;
        };
        let applyMeth1533 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1533.methodName = "apply(1)";
        applyMeth1533.paramCounts = [1];
        applyMeth1533.paramNames = ["__10"];
        applyMeth1533.definitionLine = 663;
        applyMeth1533.definitionModule = "staticTypes";
        block1533.methods["apply(1)"] = applyMeth1533;
        let matchesMeth1533 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1533.methodName = "matches(1)";
        matchesMeth1533.paramCounts = [1];
        matchesMeth1533.paramNames = ["__10"];
        matchesMeth1533.definitionLine = 663;
        matchesMeth1533.definitionModule = "staticTypes";
        block1533.methods["matches(1)"] = matchesMeth1533;
        cases1531.push(block1533);
        setLineNumber(666);    // compilenode block
        var block1549 = new GraceBlock(this, 666, 1);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1550 = selfRequest(this, "MethodType", [0]);
        block1549.paramTypes = [call1550];
        var matches1551 = function(var_meth) {
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1552 = selfRequest(this, "MethodType", [0]);
          if (!Grace_isTrue(request(call1552, "matches(1)", [1], var_meth)))
              return false;
          return true;
        };
        block1549.guard = matches1551;
        block1549.real = function block1549(var_meth) {
          setLineNumber(667);    // compilenode call
          // call case 2: outer request
          var call1553 = selfRequest(importedModules["staticTypes"], "check(1)against(1)", [1, 1], var_req, var_meth);
          return call1553;
        };
        let applyMeth1549 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1549.methodName = "apply(1)";
        applyMeth1549.paramCounts = [1];
        applyMeth1549.paramNames = ["meth"];
        applyMeth1549.definitionLine = 666;
        applyMeth1549.definitionModule = "staticTypes";
        block1549.methods["apply(1)"] = applyMeth1549;
        let matchesMeth1549 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1549.methodName = "matches(1)";
        matchesMeth1549.paramCounts = [1];
        matchesMeth1549.paramNames = ["meth"];
        matchesMeth1549.definitionLine = 666;
        matchesMeth1549.definitionModule = "staticTypes";
        block1549.methods["matches(1)"] = matchesMeth1549;
        cases1531.push(block1549);
        setLineNumber(662);    // compilematchcase
        var matchres1531 = matchCase(call1532,cases1531,false);
        if1527 = matchres1531;
      }
      return if1527;
    };
    let applyMeth1506 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1506.methodName = "apply(1)";
    applyMeth1506.paramCounts = [1];
    applyMeth1506.paramNames = ["innerReq"];
    applyMeth1506.definitionLine = 647;
    applyMeth1506.definitionModule = "staticTypes";
    block1506.methods["apply(1)"] = applyMeth1506;
    let matchesMeth1506 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1506.methodName = "matches(1)";
    matchesMeth1506.paramCounts = [1];
    matchesMeth1506.paramNames = ["innerReq"];
    matchesMeth1506.definitionLine = 647;
    matchesMeth1506.definitionModule = "staticTypes";
    block1506.methods["matches(1)"] = matchesMeth1506;
    cases1504.push(block1506);
    setLineNumber(670);    // compilenode block
    var block1554 = new GraceBlock(this, 670, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1555 = selfRequest(this, "Identifier", [0]);
    block1554.paramTypes = [call1555];
    var matches1556 = function(var_ident) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1557 = selfRequest(this, "Identifier", [0]);
      if (!Grace_isTrue(request(call1557, "matches(1)", [1], var_ident)))
          return false;
      return true;
    };
    block1554.guard = matches1556;
    block1554.real = function block1554(var_ident) {
      setLineNumber(671);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1562 = selfRequest(this, "scope", [0]);
      var call1561 = request(call1562, "methods", [0]);
      var call1560 = request(call1561, "stack", [0]);
      var call1559 = request(call1560, "size", [0]);
      // call case 2: outer request
      var call1558 = selfRequest(importedModules["staticTypes"], "find(1)atScope(1)", [1, 1], var_req, call1559);
      return call1558;
    };
    let applyMeth1554 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1554.methodName = "apply(1)";
    applyMeth1554.paramCounts = [1];
    applyMeth1554.paramNames = ["ident"];
    applyMeth1554.definitionLine = 670;
    applyMeth1554.definitionModule = "staticTypes";
    block1554.methods["apply(1)"] = applyMeth1554;
    let matchesMeth1554 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1554.methodName = "matches(1)";
    matchesMeth1554.paramCounts = [1];
    matchesMeth1554.paramNames = ["ident"];
    matchesMeth1554.definitionLine = 670;
    matchesMeth1554.definitionModule = "staticTypes";
    block1554.methods["matches(1)"] = matchesMeth1554;
    cases1504.push(block1554);
    setLineNumber(672);    // compilenode block
    var block1563 = new GraceBlock(this, 672, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1564 = selfRequest(this, "Outer", [0]);
    block1563.paramTypes = [call1564];
    var matches1565 = function(var_outerObj) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1566 = selfRequest(this, "Outer", [0]);
      if (!Grace_isTrue(request(call1566, "matches(1)", [1], var_outerObj)))
          return false;
      return true;
    };
    block1563.guard = matches1565;
    block1563.real = function block1563(var_outerObj) {
      setLineNumber(673);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call1567 = request(var_objectType, "unknown", [0]);
      return call1567;
    };
    let applyMeth1563 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1563.methodName = "apply(1)";
    applyMeth1563.paramCounts = [1];
    applyMeth1563.paramNames = ["outerObj"];
    applyMeth1563.definitionLine = 672;
    applyMeth1563.definitionModule = "staticTypes";
    block1563.methods["apply(1)"] = applyMeth1563;
    let matchesMeth1563 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1563.methodName = "matches(1)";
    matchesMeth1563.paramCounts = [1];
    matchesMeth1563.paramNames = ["outerObj"];
    matchesMeth1563.definitionLine = 672;
    matchesMeth1563.definitionModule = "staticTypes";
    block1563.methods["matches(1)"] = matchesMeth1563;
    cases1504.push(block1563);
    setLineNumber(674);    // compilenode block
    var block1568 = new GraceBlock(this, 674, 1);
    block1568.paramTypes = [var_Object];
    var matches1569 = function(var_other) {
      if (!Grace_isTrue(request(var_Object, "matches(1)", [1], var_other)))
          return false;
      return true;
    };
    block1568.guard = matches1569;
    block1568.real = function block1568(var_other) {
      setLineNumber(675);    // compilenode string
      var string1570 = new GraceString("receiver ");
      var opresult1571 = request(string1570, "++(1)", [1], var_req);
      var string1572 = new GraceString(" is not a Request, an Identifier or an Outer node");
      var opresult1573 = request(opresult1571, "++(1)", [1], string1572);
      Grace_print(opresult1573);
      setLineNumber(676);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call1574 = request(var_objectType, "unknown", [0]);
      return call1574;
    };
    let applyMeth1568 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1568.methodName = "apply(1)";
    applyMeth1568.paramCounts = [1];
    applyMeth1568.paramNames = ["other"];
    applyMeth1568.definitionLine = 674;
    applyMeth1568.definitionModule = "staticTypes";
    block1568.methods["apply(1)"] = applyMeth1568;
    let matchesMeth1568 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1568.methodName = "matches(1)";
    matchesMeth1568.paramCounts = [1];
    matchesMeth1568.paramNames = ["other"];
    matchesMeth1568.definitionLine = 674;
    matchesMeth1568.definitionModule = "staticTypes";
    block1568.methods["matches(1)"] = matchesMeth1568;
    cases1504.push(block1568);
    setLineNumber(646);    // compilematchcase
    var matchres1504 = matchCase(call1505,cases1504,false);
    return matchres1504;
  };
  let applyMeth1500 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1500.methodName = "apply(1)";
  applyMeth1500.paramCounts = [1];
  applyMeth1500.paramNames = ["req"];
  applyMeth1500.definitionLine = 645;
  applyMeth1500.definitionModule = "staticTypes";
  block1500.methods["apply(1)"] = applyMeth1500;
  let matchesMeth1500 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1500.methodName = "matches(1)";
  matchesMeth1500.paramCounts = [1];
  matchesMeth1500.paramNames = ["req"];
  matchesMeth1500.definitionLine = 645;
  matchesMeth1500.definitionModule = "staticTypes";
  block1500.methods["matches(1)"] = matchesMeth1500;
  // call case 2: outer request
  var call1499 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1500);
  setLineNumber(736);    // compilenode block
  var block1576 = new GraceBlock(this, 736, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1577 = selfRequest(this, "Member", [0]);
  block1576.paramTypes = [call1577];
  var matches1578 = function(var_memb) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1579 = selfRequest(this, "Member", [0]);
    if (!Grace_isTrue(request(call1579, "matches(1)", [1], var_memb)))
        return false;
    return true;
  };
  block1576.guard = matches1578;
  block1576.real = function block1576(var_memb) {
    setLineNumber(737);    // compilenode object
    var obj1583_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_staticTypes_737");
      this.outer_staticTypes_737 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.name = undefined;
      var reader1584_name = function() {  // reader method name
          if (this.data.name === undefined) raiseUninitializedVariable("name");
          return this.data.name;
      };
      reader1584_name.isDef = true;
      this.methods["name"] = reader1584_name;
      this.data.args = undefined;
      var reader1585_args = function() {  // reader method args
          if (this.data.args === undefined) raiseUninitializedVariable("args");
          return this.data.args;
      };
      reader1585_args.isDef = true;
      this.methods["args"] = reader1585_args;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 737;
          m.definitionModule = "staticTypes";
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
      var obj1583_init = function() {    // init of object on line 737
        setLineNumber(738);    // compilenode member
        // call case 6: other requests
        var call1586 = request(var_memb, "value", [0]);
        this.data.name = call1586;
        setLineNumber(739);    // compilenode array
        var array1587 = new GraceSequence([]);
        this.data.args = array1587;
      };
      return obj1583_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1583 = emptyGraceObject("object", "staticTypes", 737);
    var obj1583_init = obj1583_build.call(obj1583, null, this, [], []);
    obj1583_init.call(obj1583);  // end of compileobject
    var array1582 = new GraceSequence([obj1583]);
    // call case 6: other requests
    setLineNumber(737);    // compilenode member
    // call case 6: other requests
    if (var_ast === undefined) raiseUninitializedVariable("ast");
    var call1588 = request(var_ast, "callNode", [0]);
    var call1581 = request(call1588, "new(2)", [2], var_memb, array1582);
    // call case 2: outer request
    var call1580 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], call1581);
    return call1580;
  };
  let applyMeth1576 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1576.methodName = "apply(1)";
  applyMeth1576.paramCounts = [1];
  applyMeth1576.paramNames = ["memb"];
  applyMeth1576.definitionLine = 736;
  applyMeth1576.definitionModule = "staticTypes";
  block1576.methods["apply(1)"] = applyMeth1576;
  let matchesMeth1576 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1576.methodName = "matches(1)";
  matchesMeth1576.paramCounts = [1];
  matchesMeth1576.paramNames = ["memb"];
  matchesMeth1576.definitionLine = 736;
  matchesMeth1576.definitionModule = "staticTypes";
  block1576.methods["matches(1)"] = matchesMeth1576;
  // call case 2: outer request
  var call1575 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1576);
  setLineNumber(743);    // compilenode block
  var block1590 = new GraceBlock(this, 743, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1591 = selfRequest(this, "Operator", [0]);
  block1590.paramTypes = [call1591];
  var matches1592 = function(var_op) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1593 = selfRequest(this, "Operator", [0]);
    if (!Grace_isTrue(request(call1593, "matches(1)", [1], var_op)))
        return false;
    return true;
  };
  block1590.guard = matches1592;
  block1590.real = function block1590(var_op) {
    setLineNumber(744);    // compilenode member
    // call case 6: other requests
    var call1594 = request(var_op, "left", [0]);
    var var_rec = call1594;
    setLineNumber(745);    // compilenode call
    if (var_rec === undefined) raiseUninitializedVariable("rec");
    // call case 2: outer request
    var call1595 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_rec);
    var var_rType = call1595;
    var if1596 = GraceDone;
    setLineNumber(747);    // compilenode member
    // call case 6: other requests
    if (var_rType === undefined) raiseUninitializedVariable("rType");
    var call1597 = request(var_rType, "isUnknown", [0]);
    if (Grace_isTrue(call1597)) {
      setLineNumber(748);    // compilenode member
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call1598 = request(var_objectType, "unknown", [0]);
      if1596 = call1598;
    } else {
      setLineNumber(750);    // compilenode member
      // call case 6: other requests
      var call1599 = request(var_op, "value", [0]);
      var var_name = call1599;
      setLineNumber(752);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      // call case 6: other requests
      if (var_rType === undefined) raiseUninitializedVariable("rType");
      var call1601 = request(var_rType, "getMethod(1)", [1], var_name);
      var cases1600 = [];
      var block1602 = new GraceBlock(this, 752, 1);
      if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
      block1602.paramTypes = [var_noSuchMethod];
      var matches1603 = function(var___95____95__12) {
        if (var_noSuchMethod === undefined) raiseUninitializedVariable("noSuchMethod");
        if (!Grace_isTrue(request(var_noSuchMethod, "matches(1)", [1], var___95____95__12)))
            return false;
        return true;
      };
      block1602.guard = matches1603;
      block1602.real = function block1602(var___95____95__12) {
        setLineNumber(753);    // compilenode string
        var string1605 = new GraceString("no method '");
        if (var_name === undefined) raiseUninitializedVariable("name");
        var opresult1606 = request(string1605, "++(1)", [1], var_name);
        var string1607 = new GraceString("' in ");
        var opresult1608 = request(opresult1606, "++(1)", [1], string1607);
        setLineNumber(754);    // compilenode string
        var string1609 = new GraceString("`");
        // call case 6: other requests
        if (var_rec === undefined) raiseUninitializedVariable("rec");
        var call1610 = request(var_rec, "toGrace(1)", [1], new GraceNum(0));
        var opresult1611 = request(string1609, "++(1)", [1], call1610);
        var string1612 = new GraceString("` of type '");
        var opresult1613 = request(opresult1611, "++(1)", [1], string1612);
        if (var_rType === undefined) raiseUninitializedVariable("rType");
        var opresult1614 = request(opresult1613, "++(1)", [1], var_rType);
        var string1615 = new GraceString("'");
        var opresult1616 = request(opresult1614, "++(1)", [1], string1615);
        var opresult1617 = request(opresult1608, "++(1)", [1], opresult1616);
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1604 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1617, var_op);
        return call1604;
      };
      let applyMeth1602 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1602.methodName = "apply(1)";
      applyMeth1602.paramCounts = [1];
      applyMeth1602.paramNames = ["__12"];
      applyMeth1602.definitionLine = 752;
      applyMeth1602.definitionModule = "staticTypes";
      block1602.methods["apply(1)"] = applyMeth1602;
      let matchesMeth1602 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1602.methodName = "matches(1)";
      matchesMeth1602.paramCounts = [1];
      matchesMeth1602.paramNames = ["__12"];
      matchesMeth1602.definitionLine = 752;
      matchesMeth1602.definitionModule = "staticTypes";
      block1602.methods["matches(1)"] = matchesMeth1602;
      cases1600.push(block1602);
      setLineNumber(755);    // compilenode block
      var block1618 = new GraceBlock(this, 755, 1);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1619 = selfRequest(this, "MethodType", [0]);
      block1618.paramTypes = [call1619];
      var matches1620 = function(var_meth) {
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1621 = selfRequest(this, "MethodType", [0]);
        if (!Grace_isTrue(request(call1621, "matches(1)", [1], var_meth)))
            return false;
        return true;
      };
      block1618.guard = matches1620;
      block1618.real = function block1618(var_meth) {
        setLineNumber(756);    // compilenode member
        // call case 6: other requests
        var call1622 = request(var_op, "right", [0]);
        var var_arg = call1622;
        setLineNumber(757);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call1625 = request(var_meth, "signature", [0]);
        var call1624 = request(call1625, "first", [0]);
        var call1623 = request(call1624, "parameters", [0]);
        var var_params = call1623;
        var if1626 = GraceDone;
        setLineNumber(759);    // compilenode member
        // call case 6: other requests
        if (var_params === undefined) raiseUninitializedVariable("params");
        var call1627 = request(var_params, "size", [0]);
        var opresult1628 = request(call1627, "==(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult1628)) {
          setLineNumber(760);    // compilenode string
          var string1630 = new GraceString("the definition of operator ");
          setLineNumber(761);    // compilenode string
          var string1631 = new GraceString("`");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1632 = request(string1631, "++(1)", [1], var_name);
          var string1633 = new GraceString("` is missing its parameter");
          var opresult1634 = request(opresult1632, "++(1)", [1], string1633);
          var opresult1635 = request(string1630, "++(1)", [1], opresult1634);
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call1629 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1635, var_op);
          if1626 = call1629;
        }
        setLineNumber(764);    // compilenode member
        // call case 6: other requests
        if (var_params === undefined) raiseUninitializedVariable("params");
        var call1636 = request(var_params, "first", [0]);
        var var_param = call1636;
        setLineNumber(765);    // compilenode member
        // call case 6: other requests
        if (var_param === undefined) raiseUninitializedVariable("param");
        var call1637 = request(var_param, "typeAnnotation", [0]);
        var var_pType = call1637;
        var if1638 = GraceDone;
        setLineNumber(767);    // compilenode member
        // call case 6: other requests
        if (var_pType === undefined) raiseUninitializedVariable("pType");
        // call case 6: other requests
        if (var_arg === undefined) raiseUninitializedVariable("arg");
        // call case 2: outer request
        var call1641 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_arg);
        var call1640 = request(call1641, "isSubtypeOf(1)", [1], var_pType);
        var call1639 = request(call1640, "not", [0]);
        if (Grace_isTrue(call1639)) {
          setLineNumber(768);    // compilenode string
          var string1643 = new GraceString("the expression ");
          setLineNumber(769);    // compilenode string
          var string1644 = new GraceString("`");
          // call case 6: other requests
          if (var_arg === undefined) raiseUninitializedVariable("arg");
          var call1645 = request(var_arg, "toGrace(1)", [1], new GraceNum(0));
          var opresult1646 = request(string1644, "++(1)", [1], call1645);
          var string1647 = new GraceString("` does not satisfy the type of ");
          var opresult1648 = request(opresult1646, "++(1)", [1], string1647);
          var opresult1649 = request(string1643, "++(1)", [1], opresult1648);
          setLineNumber(770);    // compilenode string
          var string1650 = new GraceString("parameter `");
          if (var_param === undefined) raiseUninitializedVariable("param");
          var opresult1651 = request(string1650, "++(1)", [1], var_param);
          var string1652 = new GraceString("` in the method `");
          var opresult1653 = request(opresult1651, "++(1)", [1], string1652);
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1654 = request(opresult1653, "++(1)", [1], var_name);
          var string1655 = new GraceString("`");
          var opresult1656 = request(opresult1654, "++(1)", [1], string1655);
          var opresult1657 = request(opresult1649, "++(1)", [1], opresult1656);
          if (var_arg === undefined) raiseUninitializedVariable("arg");
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call1642 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1657, var_arg);
          if1638 = call1642;
        }
        setLineNumber(773);    // compilenode member
        // call case 6: other requests
        var call1658 = request(var_meth, "returnType", [0]);
        return call1658;
      };
      let applyMeth1618 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1618.methodName = "apply(1)";
      applyMeth1618.paramCounts = [1];
      applyMeth1618.paramNames = ["meth"];
      applyMeth1618.definitionLine = 755;
      applyMeth1618.definitionModule = "staticTypes";
      block1618.methods["apply(1)"] = applyMeth1618;
      let matchesMeth1618 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1618.methodName = "matches(1)";
      matchesMeth1618.paramCounts = [1];
      matchesMeth1618.paramNames = ["meth"];
      matchesMeth1618.definitionLine = 755;
      matchesMeth1618.definitionModule = "staticTypes";
      block1618.methods["matches(1)"] = matchesMeth1618;
      cases1600.push(block1618);
      setLineNumber(752);    // compilematchcase
      var matchres1600 = matchCase(call1601,cases1600,false);
      if1596 = matchres1600;
    }
    return if1596;
  };
  let applyMeth1590 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1590.methodName = "apply(1)";
  applyMeth1590.paramCounts = [1];
  applyMeth1590.paramNames = ["op"];
  applyMeth1590.definitionLine = 743;
  applyMeth1590.definitionModule = "staticTypes";
  block1590.methods["apply(1)"] = applyMeth1590;
  let matchesMeth1590 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1590.methodName = "matches(1)";
  matchesMeth1590.paramCounts = [1];
  matchesMeth1590.paramNames = ["op"];
  matchesMeth1590.definitionLine = 743;
  matchesMeth1590.definitionModule = "staticTypes";
  block1590.methods["matches(1)"] = matchesMeth1590;
  // call case 2: outer request
  var call1589 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1590);
  setLineNumber(781);    // compilenode block
  var block1660 = new GraceBlock(this, 781, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1661 = selfRequest(this, "If", [0]);
  block1660.paramTypes = [call1661];
  var matches1662 = function(var_req) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1663 = selfRequest(this, "If", [0]);
    if (!Grace_isTrue(request(call1663, "matches(1)", [1], var_req)))
        return false;
    return true;
  };
  block1660.guard = matches1662;
  block1660.real = function block1660(var_req) {
    setLineNumber(782);    // compilenode member
    // call case 6: other requests
    var call1664 = request(var_req, "value", [0]);
    var var_cond = call1664;
    var if1665 = GraceDone;
    setLineNumber(783);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1668 = request(var_objectType, "boolean", [0]);
    // call case 6: other requests
    if (var_cond === undefined) raiseUninitializedVariable("cond");
    // call case 2: outer request
    var call1669 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_cond);
    var call1667 = request(call1669, "isSubtypeOf(1)", [1], call1668);
    var call1666 = request(call1667, "not", [0]);
    if (Grace_isTrue(call1666)) {
      setLineNumber(784);    // compilenode string
      var string1671 = new GraceString("the condition `");
      // call case 6: other requests
      if (var_cond === undefined) raiseUninitializedVariable("cond");
      var call1672 = request(var_cond, "toGrace(1)", [1], new GraceNum(0));
      var opresult1673 = request(string1671, "++(1)", [1], call1672);
      var string1674 = new GraceString("` does not ");
      var opresult1675 = request(opresult1673, "++(1)", [1], string1674);
      setLineNumber(785);    // compilenode string
      var string1676 = new GraceString("conform to type `Boolean`.");
      var opresult1677 = request(opresult1675, "++(1)", [1], string1676);
      if (var_cond === undefined) raiseUninitializedVariable("cond");
      // call case 6: other requests
      if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
      var call1670 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1677, var_cond);
      if1665 = call1670;
    }
    setLineNumber(788);    // compilenode member
    // call case 6: other requests
    var call1679 = request(var_req, "thenblock", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1678 = request(var_objectType, "fromBlock(1)", [1], call1679);
    var var_then = call1678;
    setLineNumber(790);    // compilenode member
    // call case 6: other requests
    var call1681 = request(var_req, "elseblock", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1680 = request(var_objectType, "fromBlock(1)", [1], call1681);
    var var_else = call1680;
    setLineNumber(792);    // compilenode op
    if (var_then === undefined) raiseUninitializedVariable("then");
    if (var_else === undefined) raiseUninitializedVariable("else");
    var opresult1682 = request(var_then, "|(1)", [1], var_else);
    return opresult1682;
  };
  let applyMeth1660 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1660.methodName = "apply(1)";
  applyMeth1660.paramCounts = [1];
  applyMeth1660.paramNames = ["req"];
  applyMeth1660.definitionLine = 781;
  applyMeth1660.definitionModule = "staticTypes";
  block1660.methods["apply(1)"] = applyMeth1660;
  let matchesMeth1660 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1660.methodName = "matches(1)";
  matchesMeth1660.paramCounts = [1];
  matchesMeth1660.paramNames = ["req"];
  matchesMeth1660.definitionLine = 781;
  matchesMeth1660.definitionModule = "staticTypes";
  block1660.methods["matches(1)"] = matchesMeth1660;
  // call case 2: outer request
  var call1659 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1660);
  setLineNumber(795);    // compilenode block
  var block1684 = new GraceBlock(this, 795, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1685 = selfRequest(this, "MatchCase", [0]);
  block1684.paramTypes = [call1685];
  var matches1686 = function(var_req) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1687 = selfRequest(this, "MatchCase", [0]);
    if (!Grace_isTrue(request(call1687, "matches(1)", [1], var_req)))
        return false;
    return true;
  };
  block1684.guard = matches1686;
  block1684.real = function block1684(var_req) {
    setLineNumber(796);    // compilenode member
    // call case 6: other requests
    var call1688 = request(var_req, "cases", [0]);
    var var_cases = call1688;
    setLineNumber(797);    // compilenode vardec
    var var_union = var_done;
    setLineNumber(799);    // compilenode block
    var block1690 = new GraceBlock(this, 799, 1);
    block1690.guard = jsTrue;
    block1690.real = function block1690(var_case) {
      setLineNumber(800);    // compilenode call
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call1691 = request(var_objectType, "fromBlock(1)", [1], var_case);
      var var_cType = call1691;
      var if1692 = GraceDone;
      setLineNumber(801);    // compilenode op
      if (var_union === undefined) raiseUninitializedVariable("union");
      var opresult1693 = request(var_done, "==(1)", [1], var_union);
      if (Grace_isTrue(opresult1693)) {
        if (var_cType === undefined) raiseUninitializedVariable("cType");
        if1692 = var_cType;
      } else {
        setLineNumber(804);    // compilenode op
        if (var_union === undefined) raiseUninitializedVariable("union");
        if (var_cType === undefined) raiseUninitializedVariable("cType");
        var opresult1694 = request(var_union, "|(1)", [1], var_cType);
        if1692 = opresult1694;
      }
      var_union = if1692;
      return GraceDone;
    };
    let applyMeth1690 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1690.methodName = "apply(1)";
    applyMeth1690.paramCounts = [1];
    applyMeth1690.paramNames = ["case"];
    applyMeth1690.definitionLine = 799;
    applyMeth1690.definitionModule = "staticTypes";
    block1690.methods["apply(1)"] = applyMeth1690;
    let matchesMeth1690 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1690.methodName = "matches(1)";
    matchesMeth1690.paramCounts = [1];
    matchesMeth1690.paramNames = ["case"];
    matchesMeth1690.definitionLine = 799;
    matchesMeth1690.definitionModule = "staticTypes";
    block1690.methods["matches(1)"] = matchesMeth1690;
    // call case 6: other requests
    if (var_cases === undefined) raiseUninitializedVariable("cases");
    var call1689 = request(var_cases, "do(1)", [1], block1690);
    if (var_union === undefined) raiseUninitializedVariable("union");
    return var_union;
  };
  let applyMeth1684 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1684.methodName = "apply(1)";
  applyMeth1684.paramCounts = [1];
  applyMeth1684.paramNames = ["req"];
  applyMeth1684.definitionLine = 795;
  applyMeth1684.definitionModule = "staticTypes";
  block1684.methods["apply(1)"] = applyMeth1684;
  let matchesMeth1684 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1684.methodName = "matches(1)";
  matchesMeth1684.paramCounts = [1];
  matchesMeth1684.paramNames = ["req"];
  matchesMeth1684.definitionLine = 795;
  matchesMeth1684.definitionModule = "staticTypes";
  block1684.methods["matches(1)"] = matchesMeth1684;
  // call case 2: outer request
  var call1683 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1684);
  setLineNumber(810);    // compilenode block
  var block1696 = new GraceBlock(this, 810, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1697 = selfRequest(this, "TryCatch", [0]);
  block1696.paramTypes = [call1697];
  var matches1698 = function(var_req) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1699 = selfRequest(this, "TryCatch", [0]);
    if (!Grace_isTrue(request(call1699, "matches(1)", [1], var_req)))
        return false;
    return true;
  };
  block1696.guard = matches1698;
  block1696.real = function block1696(var_req) {
    setLineNumber(811);    // compilenode member
    // call case 6: other requests
    var call1701 = request(var_req, "value", [0]);
    var cases1700 = [];
    var block1702 = new GraceBlock(this, 811, 1);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1703 = selfRequest(this, "BlockLiteral", [0]);
    block1702.paramTypes = [call1703];
    var matches1704 = function(var_bl) {
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1705 = selfRequest(this, "BlockLiteral", [0]);
      if (!Grace_isTrue(request(call1705, "matches(1)", [1], var_bl)))
          return false;
      return true;
    };
    block1702.guard = matches1704;
    block1702.real = function block1702(var_bl) {
      setLineNumber(812);    // compilenode member
      // call case 6: other requests
      var call1706 = request(var_bl, "params", [0]);
      var var_params = call1706;
      var if1707 = GraceDone;
      setLineNumber(813);    // compilenode member
      // call case 6: other requests
      if (var_params === undefined) raiseUninitializedVariable("params");
      var call1708 = request(var_params, "size", [0]);
      var opresult1709 = request(call1708, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult1709)) {
        setLineNumber(814);    // compilenode string
        var string1711 = new GraceString("too many parameters for try block");
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1710 = request(var_RequestError, "raise(1)with(1)", [1, 1], string1711, var_bl);
        if1707 = call1710;
      }
      return if1707;
    };
    let applyMeth1702 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1702.methodName = "apply(1)";
    applyMeth1702.paramCounts = [1];
    applyMeth1702.paramNames = ["bl"];
    applyMeth1702.definitionLine = 811;
    applyMeth1702.definitionModule = "staticTypes";
    block1702.methods["apply(1)"] = applyMeth1702;
    let matchesMeth1702 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1702.methodName = "matches(1)";
    matchesMeth1702.paramCounts = [1];
    matchesMeth1702.paramNames = ["bl"];
    matchesMeth1702.definitionLine = 811;
    matchesMeth1702.definitionModule = "staticTypes";
    block1702.methods["matches(1)"] = matchesMeth1702;
    cases1700.push(block1702);
    setLineNumber(811);    // compilematchcase
    var matchres1700 = matchCase(call1701,cases1700,false);
    setLineNumber(818);    // compilenode block
    var block1713 = new GraceBlock(this, 818, 1);
    block1713.guard = jsTrue;
    block1713.real = function block1713(var_eachCase) {
      setLineNumber(819);    // compilenode matchcase
      var cases1714 = [];
      var block1715 = new GraceBlock(this, 819, 1);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1716 = selfRequest(this, "BlockLiteral", [0]);
      block1715.paramTypes = [call1716];
      var matches1717 = function(var_bl) {
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1718 = selfRequest(this, "BlockLiteral", [0]);
        if (!Grace_isTrue(request(call1718, "matches(1)", [1], var_bl)))
            return false;
        return true;
      };
      block1715.guard = matches1717;
      block1715.real = function block1715(var_bl) {
        setLineNumber(820);    // compilenode member
        // call case 6: other requests
        var call1719 = request(var_bl, "params", [0]);
        var var_params = call1719;
        var if1720 = GraceDone;
        setLineNumber(821);    // compilenode member
        // call case 6: other requests
        if (var_params === undefined) raiseUninitializedVariable("params");
        var call1721 = request(var_params, "size", [0]);
        var opresult1722 = request(call1721, "\u2260(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult1722)) {
          var if1723 = GraceDone;
          setLineNumber(822);    // compilenode member
          // call case 6: other requests
          if (var_params === undefined) raiseUninitializedVariable("params");
          var call1724 = request(var_params, "size", [0]);
          var opresult1725 = request(call1724, "==(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult1725)) {
            setLineNumber(823);    // compilenode string
            var string1726 = new GraceString("not enough");
            if1723 = string1726;
          } else {
            var string1727 = new GraceString("too many");
            if1723 = string1727;
          }
          var var_which = if1723;
          setLineNumber(825);    // compilenode string
          var string1729 = new GraceString("");
          if (var_which === undefined) raiseUninitializedVariable("which");
          var opresult1730 = request(string1729, "++(1)", [1], var_which);
          var string1731 = new GraceString(" parameters for catch block");
          var opresult1732 = request(opresult1730, "++(1)", [1], string1731);
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call1728 = request(var_RequestError, "raise(1)with(1)", [1, 1], opresult1732, var_bl);
          if1720 = call1728;
        }
        return if1720;
      };
      let applyMeth1715 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1715.methodName = "apply(1)";
      applyMeth1715.paramCounts = [1];
      applyMeth1715.paramNames = ["bl"];
      applyMeth1715.definitionLine = 819;
      applyMeth1715.definitionModule = "staticTypes";
      block1715.methods["apply(1)"] = applyMeth1715;
      let matchesMeth1715 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1715.methodName = "matches(1)";
      matchesMeth1715.paramCounts = [1];
      matchesMeth1715.paramNames = ["bl"];
      matchesMeth1715.definitionLine = 819;
      matchesMeth1715.definitionModule = "staticTypes";
      block1715.methods["matches(1)"] = matchesMeth1715;
      cases1714.push(block1715);
      setLineNumber(819);    // compilematchcase
      var matchres1714 = matchCase(var_eachCase,cases1714,false);
      return matchres1714;
    };
    let applyMeth1713 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1713.methodName = "apply(1)";
    applyMeth1713.paramCounts = [1];
    applyMeth1713.paramNames = ["eachCase"];
    applyMeth1713.definitionLine = 818;
    applyMeth1713.definitionModule = "staticTypes";
    block1713.methods["apply(1)"] = applyMeth1713;
    let matchesMeth1713 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1713.methodName = "matches(1)";
    matchesMeth1713.paramCounts = [1];
    matchesMeth1713.paramNames = ["eachCase"];
    matchesMeth1713.definitionLine = 818;
    matchesMeth1713.definitionModule = "staticTypes";
    block1713.methods["matches(1)"] = matchesMeth1713;
    // call case 6: other requests
    setLineNumber(818);    // compilenode member
    // call case 6: other requests
    var call1733 = request(var_req, "cases", [0]);
    var call1712 = request(call1733, "do(1)", [1], block1713);
    var if1734 = GraceDone;
    setLineNumber(830);    // compilenode member
    // call case 6: other requests
    var call1735 = request(var_req, "finally", [0]);
    var opresult1736 = request(GraceFalse, "\u2260(1)", [1], call1735);
    if (Grace_isTrue(opresult1736)) {
      setLineNumber(831);    // compilenode member
      // call case 6: other requests
      var call1738 = request(var_req, "finally", [0]);
      var cases1737 = [];
      var block1739 = new GraceBlock(this, 831, 1);
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1740 = selfRequest(this, "BlockLiteral", [0]);
      block1739.paramTypes = [call1740];
      var matches1741 = function(var_bl) {
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1742 = selfRequest(this, "BlockLiteral", [0]);
        if (!Grace_isTrue(request(call1742, "matches(1)", [1], var_bl)))
            return false;
        return true;
      };
      block1739.guard = matches1741;
      block1739.real = function block1739(var_bl) {
        setLineNumber(832);    // compilenode member
        // call case 6: other requests
        var call1743 = request(var_bl, "params", [0]);
        var var_params = call1743;
        var if1744 = GraceDone;
        setLineNumber(833);    // compilenode member
        // call case 6: other requests
        if (var_params === undefined) raiseUninitializedVariable("params");
        var call1745 = request(var_params, "size", [0]);
        var opresult1746 = request(call1745, ">(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult1746)) {
          setLineNumber(834);    // compilenode string
          var string1748 = new GraceString("too many parameters to finally");
          // call case 6: other requests
          if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
          var call1747 = request(var_RequestError, "raise(1)with(1)", [1, 1], string1748, var_bl);
          if1744 = call1747;
        }
        return if1744;
      };
      let applyMeth1739 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1739.methodName = "apply(1)";
      applyMeth1739.paramCounts = [1];
      applyMeth1739.paramNames = ["bl"];
      applyMeth1739.definitionLine = 831;
      applyMeth1739.definitionModule = "staticTypes";
      block1739.methods["apply(1)"] = applyMeth1739;
      let matchesMeth1739 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1739.methodName = "matches(1)";
      matchesMeth1739.paramCounts = [1];
      matchesMeth1739.paramNames = ["bl"];
      matchesMeth1739.definitionLine = 831;
      matchesMeth1739.definitionModule = "staticTypes";
      block1739.methods["matches(1)"] = matchesMeth1739;
      cases1737.push(block1739);
      setLineNumber(831);    // compilematchcase
      var matchres1737 = matchCase(call1738,cases1737,false);
      if1734 = matchres1737;
    }
    setLineNumber(839);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1749 = request(var_objectType, "done", [0]);
    return call1749;
  };
  let applyMeth1696 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1696.methodName = "apply(1)";
  applyMeth1696.paramCounts = [1];
  applyMeth1696.paramNames = ["req"];
  applyMeth1696.definitionLine = 810;
  applyMeth1696.definitionModule = "staticTypes";
  block1696.methods["apply(1)"] = applyMeth1696;
  let matchesMeth1696 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1696.methodName = "matches(1)";
  matchesMeth1696.paramCounts = [1];
  matchesMeth1696.paramNames = ["req"];
  matchesMeth1696.definitionLine = 810;
  matchesMeth1696.definitionModule = "staticTypes";
  block1696.methods["matches(1)"] = matchesMeth1696;
  // call case 2: outer request
  var call1695 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1696);
  setLineNumber(845);    // compilenode string
  var string1751 = new GraceString("MethodError");
  // call case 6: other requests
  // call case 2: outer request
  var call1752 = selfRequest(var_prelude, "TypeError", [0]);
  var call1750 = request(call1752, "refine(1)", [1], string1751);
  var var_MethodError = call1750;
  var reader1753_MethodError = function() {  // reader method MethodError
      if (var_MethodError === undefined) raiseUninitializedVariable("MethodError");
      return var_MethodError;
  };
  reader1753_MethodError.isDef = true;
  reader1753_MethodError.confidential = true;
  this.methods["MethodError"] = reader1753_MethodError;
  setLineNumber(847);    // compilenode block
  var block1755 = new GraceBlock(this, 847, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1756 = selfRequest(this, "Method", [0]);
  block1755.paramTypes = [call1756];
  var matches1757 = function(var_meth) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1758 = selfRequest(this, "Method", [0]);
    if (!Grace_isTrue(request(call1758, "matches(1)", [1], var_meth)))
        return false;
    return true;
  };
  block1755.guard = matches1757;
  block1755.real = function block1755(var_meth) {
    setLineNumber(848);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1760 = request(var_meth, "value", [0]);
    var call1759 = request(call1760, "value", [0]);
    var var_name = call1759;
    setLineNumber(849);    // compilenode call
    // call case 6: other requests
    if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
    var call1761 = request(var_aMethodType, "fromNode(1)", [1], var_meth);
    var var_mType = call1761;
    setLineNumber(850);    // compilenode member
    // call case 6: other requests
    if (var_mType === undefined) raiseUninitializedVariable("mType");
    var call1762 = request(var_mType, "returnType", [0]);
    var var_returnType = call1762;
    setLineNumber(852);    // compilenode block
    var block1764 = new GraceBlock(this, 852, 0);
    block1764.guard = jsTrue;
    block1764.real = function block1764() {
      setLineNumber(853);    // compilenode block
      var block1766 = new GraceBlock(this, 853, 1);
      block1766.guard = jsTrue;
      block1766.real = function block1766(var_part) {
        setLineNumber(854);    // compilenode block
        var block1768 = new GraceBlock(this, 854, 1);
        block1768.guard = jsTrue;
        block1768.real = function block1768(var_param) {
          setLineNumber(855);    // compilenode member
          // call case 6: other requests
          var call1770 = request(var_param, "value", [0]);
          setLineNumber(856);    // compilenode member
          // call case 6: other requests
          var call1772 = request(var_param, "dtype", [0]);
          // call case 6: other requests
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var call1771 = request(var_objectType, "fromDType(1)", [1], call1772);
          // call case 6: other requests
          setLineNumber(855);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1774 = selfRequest(this, "scope", [0]);
          var call1773 = request(call1774, "variables", [0]);
          var call1769 = request(call1773, "at(1)put(1)", [1, 1], call1770, call1771);
          return call1769;
        };
        let applyMeth1768 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1768.methodName = "apply(1)";
        applyMeth1768.paramCounts = [1];
        applyMeth1768.paramNames = ["param"];
        applyMeth1768.definitionLine = 854;
        applyMeth1768.definitionModule = "staticTypes";
        block1768.methods["apply(1)"] = applyMeth1768;
        let matchesMeth1768 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1768.methodName = "matches(1)";
        matchesMeth1768.paramCounts = [1];
        matchesMeth1768.paramNames = ["param"];
        matchesMeth1768.definitionLine = 854;
        matchesMeth1768.definitionModule = "staticTypes";
        block1768.methods["matches(1)"] = matchesMeth1768;
        // call case 6: other requests
        setLineNumber(854);    // compilenode member
        // call case 6: other requests
        var call1775 = request(var_part, "params", [0]);
        var call1767 = request(call1775, "do(1)", [1], block1768);
        return call1767;
      };
      let applyMeth1766 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1766.methodName = "apply(1)";
      applyMeth1766.paramCounts = [1];
      applyMeth1766.paramNames = ["part"];
      applyMeth1766.definitionLine = 853;
      applyMeth1766.definitionModule = "staticTypes";
      block1766.methods["apply(1)"] = applyMeth1766;
      let matchesMeth1766 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1766.methodName = "matches(1)";
      matchesMeth1766.paramCounts = [1];
      matchesMeth1766.paramNames = ["part"];
      matchesMeth1766.definitionLine = 853;
      matchesMeth1766.definitionModule = "staticTypes";
      block1766.methods["matches(1)"] = matchesMeth1766;
      // call case 6: other requests
      setLineNumber(853);    // compilenode member
      // call case 6: other requests
      var call1776 = request(var_meth, "signature", [0]);
      var call1765 = request(call1776, "do(1)", [1], block1766);
      setLineNumber(860);    // compilenode member
      // call case 6: other requests
      var call1778 = request(var_meth, "body", [0]);
      // call case 2: outer request
      var call1777 = selfRequest(importedModules["staticTypes"], "collectTypes(1)", [1], call1778);
      setLineNumber(862);    // compilenode block
      var block1780 = new GraceBlock(this, 862, 1);
      block1780.guard = jsTrue;
      block1780.real = function block1780(var_stmt) {
        setLineNumber(863);    // compilenode call
        // call case 2: outer request
        var call1781 = selfRequest(importedModules["staticTypes"], "checkTypes(1)", [1], var_stmt);
        setLineNumber(865);    // compilenode object
        var obj1783_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_staticTypes_865");
          this.outer_staticTypes_865 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(866);    // reuse call
          if (var_ast === undefined) raiseUninitializedVariable("ast");
          var initFun1784 = request(var_ast, "baseVisitor$build(3)", [null], this, [], []);  // compileReuseCall
          var func1785 = function(argcv, var_ret) {    // method visitReturn(_), line 868
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("visitReturn(_)", 0, numArgs - 1);
            }
            setLineNumber(869);    // compilenode member
            // call case 6: other requests
            var call1787 = request(var_ret, "value", [0]);
            if (var_returnType === undefined) raiseUninitializedVariable("returnType");
            if (var_name === undefined) raiseUninitializedVariable("name");
            // call case 2: outer request
            var call1786 = selfRequest(importedModules["staticTypes"], "check(1)matches(1)inMethod(1)", [1, 1, 1], call1787, var_returnType, var_name);
            setLineNumber(870);    // compilenode return
            return GraceFalse;
          };    // end of method visitReturn(_)
          this.methods["visitReturn(1)"] = func1785;
          func1785.methodName = "visitReturn(1)";
          func1785.paramCounts = [1];
          func1785.paramNames = ["ret"];
          func1785.definitionLine = 868;
          func1785.definitionModule = "staticTypes";
          var func1788 = function(argcv, var_node) {     // accessor method visitMethod(_)
            const numArgs = arguments.length - 1;
            if (numArgs > 1) raiseTypeArgError("visitMethod(_)", 0, numArgs - 1);
            return GraceFalse;
          };    // end of method visitMethod(_)
          this.methods["visitMethod(1)"] = func1788;
          func1788.methodName = "visitMethod(1)";
          func1788.paramCounts = [1];
          func1788.paramNames = ["node"];
          func1788.definitionLine = 873;
          func1788.definitionModule = "staticTypes";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 865;
              m.definitionModule = "staticTypes";
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
          var obj1783_init = function() {    // init of object on line 865
            initFun1784.call(this);
          };
          return obj1783_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj1783 = emptyGraceObject("object", "staticTypes", 865);
        var obj1783_init = obj1783_build.call(obj1783, null, this, [], []);
        obj1783_init.call(obj1783);  // end of compileobject
        // call case 6: other requests
        var call1782 = request(var_stmt, "accept(1)", [1], obj1783);
        return call1782;
      };
      let applyMeth1780 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1780.methodName = "apply(1)";
      applyMeth1780.paramCounts = [1];
      applyMeth1780.paramNames = ["stmt"];
      applyMeth1780.definitionLine = 862;
      applyMeth1780.definitionModule = "staticTypes";
      block1780.methods["apply(1)"] = applyMeth1780;
      let matchesMeth1780 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1780.methodName = "matches(1)";
      matchesMeth1780.paramCounts = [1];
      matchesMeth1780.paramNames = ["stmt"];
      matchesMeth1780.definitionLine = 862;
      matchesMeth1780.definitionModule = "staticTypes";
      block1780.methods["matches(1)"] = matchesMeth1780;
      // call case 6: other requests
      setLineNumber(862);    // compilenode member
      // call case 6: other requests
      var call1789 = request(var_meth, "body", [0]);
      var call1779 = request(call1789, "do(1)", [1], block1780);
      var if1790 = GraceDone;
      setLineNumber(879);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1792 = request(var_meth, "body", [0]);
      var call1791 = request(call1792, "size", [0]);
      var opresult1793 = request(call1791, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult1793)) {
        var if1794 = GraceDone;
        setLineNumber(880);    // compilenode member
        // call case 6: other requests
        if (var_returnType === undefined) raiseUninitializedVariable("returnType");
        // call case 6: other requests
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call1797 = request(var_objectType, "done", [0]);
        var call1796 = request(call1797, "isSubtypeOf(1)", [1], var_returnType);
        var call1795 = request(call1796, "not", [0]);
        if (Grace_isTrue(call1795)) {
          setLineNumber(881);    // compilenode string
          var string1799 = new GraceString("method `");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1800 = request(string1799, "++(1)", [1], var_name);
          var string1801 = new GraceString("` declares a ");
          var opresult1802 = request(opresult1800, "++(1)", [1], string1801);
          setLineNumber(882);    // compilenode string
          var string1803 = new GraceString("result of type '");
          if (var_returnType === undefined) raiseUninitializedVariable("returnType");
          var opresult1804 = request(string1803, "++(1)", [1], var_returnType);
          var string1805 = new GraceString("', but has no body");
          var opresult1806 = request(opresult1804, "++(1)", [1], string1805);
          var opresult1807 = request(opresult1802, "++(1)", [1], opresult1806);
          // call case 6: other requests
          if (var_MethodError === undefined) raiseUninitializedVariable("MethodError");
          var call1798 = request(var_MethodError, "raise(1)with(1)", [1, 1], opresult1807, var_meth);
          if1794 = call1798;
        }
        if1790 = if1794;
      } else {
        setLineNumber(885);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1809 = request(var_meth, "body", [0]);
        var call1808 = request(call1809, "last", [0]);
        var var_lastNode = call1808;
        var if1810 = GraceDone;
        setLineNumber(886);    // compilenode member
        // call case 6: other requests
        if (var_lastNode === undefined) raiseUninitializedVariable("lastNode");
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1813 = selfRequest(this, "Return", [0]);
        var call1812 = request(call1813, "match(1)", [1], var_lastNode);
        var call1811 = request(call1812, "not", [0]);
        if (Grace_isTrue(call1811)) {
          setLineNumber(887);    // compilenode call
          if (var_lastNode === undefined) raiseUninitializedVariable("lastNode");
          // call case 2: outer request
          var call1814 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_lastNode);
          var var_lastType = call1814;
          var if1815 = GraceDone;
          setLineNumber(888);    // compilenode member
          // call case 6: other requests
          if (var_returnType === undefined) raiseUninitializedVariable("returnType");
          // call case 6: other requests
          if (var_lastType === undefined) raiseUninitializedVariable("lastType");
          var call1817 = request(var_lastType, "isSubtypeOf(1)", [1], var_returnType);
          var call1816 = request(call1817, "not", [0]);
          if (Grace_isTrue(call1816)) {
            setLineNumber(889);    // compilenode string
            var string1819 = new GraceString("method `");
            if (var_name === undefined) raiseUninitializedVariable("name");
            var opresult1820 = request(string1819, "++(1)", [1], var_name);
            var string1821 = new GraceString("` declares a ");
            var opresult1822 = request(opresult1820, "++(1)", [1], string1821);
            setLineNumber(890);    // compilenode string
            var string1823 = new GraceString("result of type `");
            if (var_returnType === undefined) raiseUninitializedVariable("returnType");
            var opresult1824 = request(string1823, "++(1)", [1], var_returnType);
            var string1825 = new GraceString("`, but returns an ");
            var opresult1826 = request(opresult1824, "++(1)", [1], string1825);
            var opresult1827 = request(opresult1822, "++(1)", [1], opresult1826);
            setLineNumber(891);    // compilenode string
            var string1828 = new GraceString("expression of type `");
            if (var_lastType === undefined) raiseUninitializedVariable("lastType");
            var opresult1829 = request(string1828, "++(1)", [1], var_lastType);
            var string1830 = new GraceString("`");
            var opresult1831 = request(opresult1829, "++(1)", [1], string1830);
            var opresult1832 = request(opresult1827, "++(1)", [1], opresult1831);
            if (var_lastNode === undefined) raiseUninitializedVariable("lastNode");
            // call case 6: other requests
            if (var_MethodError === undefined) raiseUninitializedVariable("MethodError");
            var call1818 = request(var_MethodError, "raise(1)with(1)", [1, 1], opresult1832, var_lastNode);
            if1815 = call1818;
          }
          if1810 = if1815;
        }
        if1790 = if1810;
      }
      return if1790;
    };
    let applyMeth1764 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1764.methodName = "apply";
    applyMeth1764.paramCounts = [0];
    applyMeth1764.paramNames = [];
    applyMeth1764.definitionLine = 852;
    applyMeth1764.definitionModule = "staticTypes";
    block1764.methods["apply"] = applyMeth1764;
    // call case 6: other requests
    setLineNumber(852);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1833 = selfRequest(this, "scope", [0]);
    var call1763 = request(call1833, "enter(1)", [1], block1764);
    var if1834 = GraceDone;
    setLineNumber(897);    // compilenode call
    if (var_mType === undefined) raiseUninitializedVariable("mType");
    // call case 2: outer request
    var call1835 = selfRequest(importedModules["staticTypes"], "isMember(1)", [1], var_mType);
    if (Grace_isTrue(call1835)) {
      setLineNumber(898);    // compilenode call
      if (var_name === undefined) raiseUninitializedVariable("name");
      if (var_returnType === undefined) raiseUninitializedVariable("returnType");
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1838 = selfRequest(this, "scope", [0]);
      var call1837 = request(call1838, "variables", [0]);
      var call1836 = request(call1837, "at(1)put(1)", [1, 1], var_name, var_returnType);
      if1834 = call1836;
    }
    setLineNumber(901);    // compilenode call
    if (var_name === undefined) raiseUninitializedVariable("name");
    if (var_mType === undefined) raiseUninitializedVariable("mType");
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1841 = selfRequest(this, "scope", [0]);
    var call1840 = request(call1841, "methods", [0]);
    var call1839 = request(call1840, "at(1)put(1)", [1, 1], var_name, var_mType);
    setLineNumber(902);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1842 = request(var_objectType, "done", [0]);
    return call1842;
  };
  let applyMeth1755 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1755.methodName = "apply(1)";
  applyMeth1755.paramCounts = [1];
  applyMeth1755.paramNames = ["meth"];
  applyMeth1755.definitionLine = 847;
  applyMeth1755.definitionModule = "staticTypes";
  block1755.methods["apply(1)"] = applyMeth1755;
  let matchesMeth1755 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1755.methodName = "matches(1)";
  matchesMeth1755.paramCounts = [1];
  matchesMeth1755.paramNames = ["meth"];
  matchesMeth1755.definitionLine = 847;
  matchesMeth1755.definitionModule = "staticTypes";
  block1755.methods["matches(1)"] = matchesMeth1755;
  // call case 2: outer request
  var call1754 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1755);
  setLineNumber(918);    // compilenode string
  var string1844 = new GraceString("ClassError");
  // call case 6: other requests
  // call case 2: outer request
  var call1845 = selfRequest(var_prelude, "TypeError", [0]);
  var call1843 = request(call1845, "refine(1)", [1], string1844);
  var var_ClassError = call1843;
  var reader1846_ClassError = function() {  // reader method ClassError
      if (var_ClassError === undefined) raiseUninitializedVariable("ClassError");
      return var_ClassError;
  };
  reader1846_ClassError.isDef = true;
  reader1846_ClassError.confidential = true;
  this.methods["ClassError"] = reader1846_ClassError;
  setLineNumber(920);    // compilenode block
  var block1848 = new GraceBlock(this, 920, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1849 = selfRequest(this, "Class", [0]);
  block1848.paramTypes = [call1849];
  var matches1850 = function(var_cls) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1851 = selfRequest(this, "Class", [0]);
    if (!Grace_isTrue(request(call1851, "matches(1)", [1], var_cls)))
        return false;
    return true;
  };
  block1848.guard = matches1850;
  block1848.real = function block1848(var_cls) {
    setLineNumber(921);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1853 = request(var_cls, "name", [0]);
    var call1852 = request(call1853, "value", [0]);
    var var_name = call1852;
    setLineNumber(922);    // compilenode member
    // call case 6: other requests
    var call1855 = request(var_cls, "dtype", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1854 = request(var_objectType, "fromDType(1)", [1], call1855);
    var var_dType = call1854;
    setLineNumber(923);    // compilenode block
    var block1857 = new GraceBlock(this, 923, 0);
    block1857.guard = jsTrue;
    block1857.real = function block1857() {
      setLineNumber(924);    // compilenode block
      var block1859 = new GraceBlock(this, 924, 1);
      block1859.guard = jsTrue;
      block1859.real = function block1859(var_part) {
        setLineNumber(925);    // compilenode block
        var block1861 = new GraceBlock(this, 925, 1);
        block1861.guard = jsTrue;
        block1861.real = function block1861(var_param) {
          setLineNumber(926);    // compilenode member
          // call case 6: other requests
          var call1863 = request(var_param, "value", [0]);
          setLineNumber(927);    // compilenode member
          // call case 6: other requests
          var call1865 = request(var_param, "dtype", [0]);
          // call case 6: other requests
          if (var_objectType === undefined) raiseUninitializedVariable("objectType");
          var call1864 = request(var_objectType, "fromDType(1)", [1], call1865);
          // call case 6: other requests
          setLineNumber(926);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1867 = selfRequest(this, "scope", [0]);
          var call1866 = request(call1867, "variables", [0]);
          var call1862 = request(call1866, "at(1)put(1)", [1, 1], call1863, call1864);
          return call1862;
        };
        let applyMeth1861 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1861.methodName = "apply(1)";
        applyMeth1861.paramCounts = [1];
        applyMeth1861.paramNames = ["param"];
        applyMeth1861.definitionLine = 925;
        applyMeth1861.definitionModule = "staticTypes";
        block1861.methods["apply(1)"] = applyMeth1861;
        let matchesMeth1861 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1861.methodName = "matches(1)";
        matchesMeth1861.paramCounts = [1];
        matchesMeth1861.paramNames = ["param"];
        matchesMeth1861.definitionLine = 925;
        matchesMeth1861.definitionModule = "staticTypes";
        block1861.methods["matches(1)"] = matchesMeth1861;
        // call case 6: other requests
        setLineNumber(925);    // compilenode member
        // call case 6: other requests
        var call1868 = request(var_part, "params", [0]);
        var call1860 = request(call1868, "do(1)", [1], block1861);
        return call1860;
      };
      let applyMeth1859 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1859.methodName = "apply(1)";
      applyMeth1859.paramCounts = [1];
      applyMeth1859.paramNames = ["part"];
      applyMeth1859.definitionLine = 924;
      applyMeth1859.definitionModule = "staticTypes";
      block1859.methods["apply(1)"] = applyMeth1859;
      let matchesMeth1859 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1859.methodName = "matches(1)";
      matchesMeth1859.paramCounts = [1];
      matchesMeth1859.paramNames = ["part"];
      matchesMeth1859.definitionLine = 924;
      matchesMeth1859.definitionModule = "staticTypes";
      block1859.methods["matches(1)"] = matchesMeth1859;
      // call case 6: other requests
      setLineNumber(924);    // compilenode member
      // call case 6: other requests
      var call1869 = request(var_cls, "signature", [0]);
      var call1858 = request(call1869, "do(1)", [1], block1859);
      setLineNumber(931);    // compilenode member
      // call case 6: other requests
      var call1871 = request(var_cls, "value", [0]);
      // call case 2: outer request
      var call1870 = selfRequest(importedModules["staticTypes"], "processBody(1)", [1], call1871);
      var var_aType = call1870;
      var if1872 = GraceDone;
      setLineNumber(932);    // compilenode member
      // call case 6: other requests
      if (var_aType === undefined) raiseUninitializedVariable("aType");
      var call1873 = request(var_aType, "isUnknown", [0]);
      if (Grace_isTrue(call1873)) {
        setLineNumber(933);    // compilenode member
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call1874 = request(var_objectType, "unknown", [0]);
        if1872 = call1874;
      } else {
        var if1875 = GraceDone;
        setLineNumber(935);    // compilenode member
        // call case 6: other requests
        if (var_dType === undefined) raiseUninitializedVariable("dType");
        // call case 6: other requests
        if (var_aType === undefined) raiseUninitializedVariable("aType");
        var call1877 = request(var_aType, "isSubtypeOf(1)", [1], var_dType);
        var call1876 = request(call1877, "not", [0]);
        if (Grace_isTrue(call1876)) {
          setLineNumber(936);    // compilenode string
          var string1879 = new GraceString("class `");
          if (var_name === undefined) raiseUninitializedVariable("name");
          var opresult1880 = request(string1879, "++(1)", [1], var_name);
          var string1881 = new GraceString("` declares a result ");
          var opresult1882 = request(opresult1880, "++(1)", [1], string1881);
          setLineNumber(937);    // compilenode string
          var string1883 = new GraceString("of type `");
          if (var_dType === undefined) raiseUninitializedVariable("dType");
          var opresult1884 = request(string1883, "++(1)", [1], var_dType);
          var string1885 = new GraceString("`, but constructs an object of type ");
          var opresult1886 = request(opresult1884, "++(1)", [1], string1885);
          var opresult1887 = request(opresult1882, "++(1)", [1], opresult1886);
          setLineNumber(938);    // compilenode string
          var string1888 = new GraceString("`");
          if (var_aType === undefined) raiseUninitializedVariable("aType");
          var opresult1889 = request(string1888, "++(1)", [1], var_aType);
          var string1890 = new GraceString("`");
          var opresult1891 = request(opresult1889, "++(1)", [1], string1890);
          var opresult1892 = request(opresult1887, "++(1)", [1], opresult1891);
          // call case 6: other requests
          if (var_ClassError === undefined) raiseUninitializedVariable("ClassError");
          var call1878 = request(var_ClassError, "raise(1)with(1)", [1, 1], opresult1892, var_cls);
          if1875 = call1878;
        }
        if (var_aType === undefined) raiseUninitializedVariable("aType");
        if1872 = var_aType;
      }
      return if1872;
    };
    let applyMeth1857 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth1857.methodName = "apply";
    applyMeth1857.paramCounts = [0];
    applyMeth1857.paramNames = [];
    applyMeth1857.definitionLine = 923;
    applyMeth1857.definitionModule = "staticTypes";
    block1857.methods["apply"] = applyMeth1857;
    // call case 6: other requests
    setLineNumber(923);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1893 = selfRequest(this, "scope", [0]);
    var call1856 = request(call1893, "enter(1)", [1], block1857);
    var var_cType = call1856;
    setLineNumber(945);    // compilenode call
    if (var_name === undefined) raiseUninitializedVariable("name");
    setLineNumber(946);    // compilenode call
    // call case 6: other requests
    if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
    var call1897 = request(var_aMethodType, "fromNode(1)", [1], var_cls);
    var array1896 = new GraceSequence([call1897]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1895 = request(var_objectType, "fromMethods(1)", [1], array1896);
    // call case 6: other requests
    setLineNumber(945);    // compilenode member
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1899 = selfRequest(this, "scope", [0]);
    var call1898 = request(call1899, "variables", [0]);
    var call1894 = request(call1898, "at(1)put(1)", [1, 1], var_name, call1895);
    var if1900 = GraceDone;
    setLineNumber(948);    // compilenode member
    // call case 6: other requests
    if (var_dType === undefined) raiseUninitializedVariable("dType");
    var call1901 = request(var_dType, "isUnknown", [0]);
    if (Grace_isTrue(call1901)) {
      if (var_cType === undefined) raiseUninitializedVariable("cType");
      if1900 = var_cType;
    } else {
      if (var_dType === undefined) raiseUninitializedVariable("dType");
      if1900 = var_dType;
    }
    return if1900;
  };
  let applyMeth1848 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1848.methodName = "apply(1)";
  applyMeth1848.paramCounts = [1];
  applyMeth1848.paramNames = ["cls"];
  applyMeth1848.definitionLine = 920;
  applyMeth1848.definitionModule = "staticTypes";
  block1848.methods["apply(1)"] = applyMeth1848;
  let matchesMeth1848 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1848.methodName = "matches(1)";
  matchesMeth1848.paramCounts = [1];
  matchesMeth1848.paramNames = ["cls"];
  matchesMeth1848.definitionLine = 920;
  matchesMeth1848.definitionModule = "staticTypes";
  block1848.methods["matches(1)"] = matchesMeth1848;
  // call case 2: outer request
  var call1847 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1848);
  setLineNumber(959);    // compilenode string
  var string1903 = new GraceString("DefError");
  // call case 6: other requests
  // call case 2: outer request
  var call1904 = selfRequest(var_prelude, "TypeError", [0]);
  var call1902 = request(call1904, "refine(1)", [1], string1903);
  var var_DefError = call1902;
  var reader1905_DefError = function() {  // reader method DefError
      if (var_DefError === undefined) raiseUninitializedVariable("DefError");
      return var_DefError;
  };
  reader1905_DefError.isDef = true;
  reader1905_DefError.confidential = true;
  this.methods["DefError"] = reader1905_DefError;
  setLineNumber(961);    // compilenode block
  var block1907 = new GraceBlock(this, 961, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1908 = selfRequest(this, "Def", [0]);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1909 = selfRequest(this, "Var", [0]);
  var opresult1910 = request(call1908, "|(1)", [1], call1909);
  block1907.paramTypes = [opresult1910];
  var matches1911 = function(var_defd) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1912 = selfRequest(this, "Def", [0]);
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1913 = selfRequest(this, "Var", [0]);
    var opresult1914 = request(call1912, "|(1)", [1], call1913);
    if (!Grace_isTrue(request(opresult1914, "matches(1)", [1], var_defd)))
        return false;
    return true;
  };
  block1907.guard = matches1911;
  block1907.real = function block1907(var_defd) {
    setLineNumber(962);    // compilenode member
    // call case 6: other requests
    var call1916 = request(var_defd, "dtype", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1915 = request(var_objectType, "fromDType(1)", [1], call1916);
    var var_defType = call1915;
    setLineNumber(964);    // compilenode member
    // call case 6: other requests
    var call1917 = request(var_defd, "value", [0]);
    var var_value = call1917;
    var if1918 = GraceDone;
    setLineNumber(966);    // compilenode op
    if (var_value === undefined) raiseUninitializedVariable("value");
    var opresult1919 = request(var_value, "\u2260(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult1919)) {
      setLineNumber(967);    // compilenode call
      if (var_value === undefined) raiseUninitializedVariable("value");
      // call case 2: outer request
      var call1920 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_value);
      var var_vType = call1920;
      var if1921 = GraceDone;
      setLineNumber(969);    // compilenode member
      // call case 6: other requests
      if (var_defType === undefined) raiseUninitializedVariable("defType");
      var call1922 = request(var_defType, "isUnknown", [0]);
      // call case 6: other requests
      var call1923 = request(var_defd, "kind", [0]);
      var string1924 = new GraceString("defdec");
      var opresult1925 = request(call1923, "==(1)", [1], string1924);
      var opresult1926 = request(call1922, "&&(1)", [1], opresult1925);
      if (Grace_isTrue(opresult1926)) {
        setLineNumber(970);    // compilenode bind
        if (var_vType === undefined) raiseUninitializedVariable("vType");
        var_defType = var_vType;
        if1921 = GraceDone;
      }
      var if1927 = GraceDone;
      setLineNumber(973);    // compilenode member
      // call case 6: other requests
      if (var_defType === undefined) raiseUninitializedVariable("defType");
      // call case 6: other requests
      if (var_vType === undefined) raiseUninitializedVariable("vType");
      var call1929 = request(var_vType, "isSubtypeOf(1)", [1], var_defType);
      var call1928 = request(call1929, "not", [0]);
      if (Grace_isTrue(call1928)) {
        setLineNumber(974);    // compilenode string
        var string1931 = new GraceString("the expression `");
        // call case 6: other requests
        if (var_value === undefined) raiseUninitializedVariable("value");
        var call1932 = request(var_value, "toGrace(1)", [1], new GraceNum(0));
        var opresult1933 = request(string1931, "++(1)", [1], call1932);
        var string1934 = new GraceString("` of type ");
        var opresult1935 = request(opresult1933, "++(1)", [1], string1934);
        setLineNumber(975);    // compilenode string
        var string1936 = new GraceString("`");
        if (var_vType === undefined) raiseUninitializedVariable("vType");
        var opresult1937 = request(string1936, "++(1)", [1], var_vType);
        var string1938 = new GraceString("` does not satisfy the type of ");
        var opresult1939 = request(opresult1937, "++(1)", [1], string1938);
        // call case 6: other requests
        var call1940 = request(var_defd, "kind", [0]);
        var opresult1941 = request(opresult1939, "++(1)", [1], call1940);
        var string1942 = new GraceString(" ");
        var opresult1943 = request(opresult1941, "++(1)", [1], string1942);
        var opresult1944 = request(opresult1935, "++(1)", [1], opresult1943);
        setLineNumber(976);    // compilenode string
        var string1945 = new GraceString("annotation `");
        if (var_defType === undefined) raiseUninitializedVariable("defType");
        var opresult1946 = request(string1945, "++(1)", [1], var_defType);
        var string1947 = new GraceString("`");
        var opresult1948 = request(opresult1946, "++(1)", [1], string1947);
        var opresult1949 = request(opresult1944, "++(1)", [1], opresult1948);
        if (var_value === undefined) raiseUninitializedVariable("value");
        // call case 6: other requests
        if (var_DefError === undefined) raiseUninitializedVariable("DefError");
        var call1930 = request(var_DefError, "raise(1)with(1)", [1, 1], opresult1949, var_value);
        if1927 = call1930;
      }
      if1918 = if1927;
    }
    setLineNumber(980);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1951 = request(var_defd, "name", [0]);
    var call1950 = request(call1951, "value", [0]);
    var var_name = call1950;
    setLineNumber(981);    // compilenode call
    if (var_name === undefined) raiseUninitializedVariable("name");
    if (var_defType === undefined) raiseUninitializedVariable("defType");
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1954 = selfRequest(this, "scope", [0]);
    var call1953 = request(call1954, "variables", [0]);
    var call1952 = request(call1953, "at(1)put(1)", [1, 1], var_name, var_defType);
    setLineNumber(983);    // compilenode block
    var block1956 = new GraceBlock(this, 983, 1);
    block1956.guard = jsTrue;
    block1956.real = function block1956(var_ann) {
      var if1957 = GraceDone;
      setLineNumber(984);    // compilenode member
      // call case 6: other requests
      var call1958 = request(var_defd, "isReadable", [0]);
      if (Grace_isTrue(call1958)) {
        setLineNumber(985);    // compilenode call
        if (var_name === undefined) raiseUninitializedVariable("name");
        if (var_name === undefined) raiseUninitializedVariable("name");
        if (var_defType === undefined) raiseUninitializedVariable("defType");
        // call case 6: other requests
        if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
        var call1960 = request(var_aMethodType, "member(1)ofType(1)", [1, 1], var_name, var_defType);
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1962 = selfRequest(this, "scope", [0]);
        var call1961 = request(call1962, "methods", [0]);
        var call1959 = request(call1961, "at(1)put(1)", [1, 1], var_name, call1960);
        if1957 = call1959;
      }
      var if1963 = GraceDone;
      setLineNumber(988);    // compilenode member
      // call case 6: other requests
      var call1964 = request(var_defd, "isWritable", [0]);
      if (Grace_isTrue(call1964)) {
        setLineNumber(989);    // compilenode op
        if (var_name === undefined) raiseUninitializedVariable("name");
        var string1965 = new GraceString(":=");
        var opresult1966 = request(var_name, "++(1)", [1], string1965);
        var var_name__39__ = opresult1966;
        setLineNumber(990);    // compilenode call
        if (var_name === undefined) raiseUninitializedVariable("name");
        if (var_defType === undefined) raiseUninitializedVariable("defType");
        // call case 6: other requests
        if (var_aParam === undefined) raiseUninitializedVariable("aParam");
        var call1967 = request(var_aParam, "withName(1)ofType(1)", [1, 1], var_name, var_defType);
        var var_param = call1967;
        setLineNumber(991);    // compilenode call
        if (var_name__39__ === undefined) raiseUninitializedVariable("name'");
        if (var_param === undefined) raiseUninitializedVariable("param");
        var array1970 = new GraceSequence([var_param]);
        // call case 2: outer request
        var call1969 = selfRequest(importedModules["staticTypes"], "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, array1970);
        var array1968 = new GraceSequence([call1969]);
        var var_sig = array1968;
        setLineNumber(993);    // compilenode call
        if (var_name__39__ === undefined) raiseUninitializedVariable("name'");
        setLineNumber(994);    // compilenode call
        if (var_sig === undefined) raiseUninitializedVariable("sig");
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call1973 = request(var_objectType, "done", [0]);
        // call case 6: other requests
        if (var_aMethodType === undefined) raiseUninitializedVariable("aMethodType");
        var call1972 = request(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_sig, call1973);
        // call case 6: other requests
        setLineNumber(993);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1975 = selfRequest(this, "scope", [0]);
        var call1974 = request(call1975, "methods", [0]);
        var call1971 = request(call1974, "at(1)put(1)", [1, 1], var_name__39__, call1972);
        if1963 = call1971;
      }
      return if1963;
    };
    let applyMeth1956 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth1956.methodName = "apply(1)";
    applyMeth1956.paramCounts = [1];
    applyMeth1956.paramNames = ["ann"];
    applyMeth1956.definitionLine = 983;
    applyMeth1956.definitionModule = "staticTypes";
    block1956.methods["apply(1)"] = applyMeth1956;
    let matchesMeth1956 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth1956.methodName = "matches(1)";
    matchesMeth1956.paramCounts = [1];
    matchesMeth1956.paramNames = ["ann"];
    matchesMeth1956.definitionLine = 983;
    matchesMeth1956.definitionModule = "staticTypes";
    block1956.methods["matches(1)"] = matchesMeth1956;
    // call case 6: other requests
    setLineNumber(983);    // compilenode member
    // call case 6: other requests
    var call1976 = request(var_defd, "annotations", [0]);
    var call1955 = request(call1976, "do(1)", [1], block1956);
    setLineNumber(997);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call1977 = request(var_objectType, "done", [0]);
    return call1977;
  };
  let applyMeth1907 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1907.methodName = "apply(1)";
  applyMeth1907.paramCounts = [1];
  applyMeth1907.paramNames = ["defd"];
  applyMeth1907.definitionLine = 961;
  applyMeth1907.definitionModule = "staticTypes";
  block1907.methods["apply(1)"] = applyMeth1907;
  let matchesMeth1907 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1907.methodName = "matches(1)";
  matchesMeth1907.paramCounts = [1];
  matchesMeth1907.paramNames = ["defd"];
  matchesMeth1907.definitionLine = 961;
  matchesMeth1907.definitionModule = "staticTypes";
  block1907.methods["matches(1)"] = matchesMeth1907;
  // call case 2: outer request
  var call1906 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1907);
  setLineNumber(1000);    // compilenode block
  var block1979 = new GraceBlock(this, 1000, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call1980 = selfRequest(this, "Bind", [0]);
  block1979.paramTypes = [call1980];
  var matches1981 = function(var_bind) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call1982 = selfRequest(this, "Bind", [0]);
    if (!Grace_isTrue(request(call1982, "matches(1)", [1], var_bind)))
        return false;
    return true;
  };
  block1979.guard = matches1981;
  block1979.real = function block1979(var_bind) {
    setLineNumber(1001);    // compilenode member
    // call case 6: other requests
    var call1983 = request(var_bind, "dest", [0]);
    var var_dest = call1983;
    setLineNumber(1002);    // compilenode call
    if (var_dest === undefined) raiseUninitializedVariable("dest");
    // call case 2: outer request
    var call1984 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_dest);
    var var_dType = call1984;
    setLineNumber(1004);    // compilenode member
    // call case 6: other requests
    var call1985 = request(var_bind, "value", [0]);
    var var_value = call1985;
    setLineNumber(1005);    // compilenode call
    if (var_value === undefined) raiseUninitializedVariable("value");
    // call case 2: outer request
    var call1986 = selfRequest(importedModules["staticTypes"], "typeOf(1)", [1], var_value);
    var var_vType = call1986;
    var if1987 = GraceDone;
    setLineNumber(1007);    // compilenode member
    // call case 6: other requests
    if (var_dType === undefined) raiseUninitializedVariable("dType");
    // call case 6: other requests
    if (var_vType === undefined) raiseUninitializedVariable("vType");
    var call1989 = request(var_vType, "isSubtypeOf(1)", [1], var_dType);
    var call1988 = request(call1989, "not", [0]);
    if (Grace_isTrue(call1988)) {
      setLineNumber(1008);    // compilenode string
      var string1991 = new GraceString("the expression `");
      // call case 6: other requests
      if (var_value === undefined) raiseUninitializedVariable("value");
      var call1992 = request(var_value, "toGrace(1)", [1], new GraceNum(0));
      var opresult1993 = request(string1991, "++(1)", [1], call1992);
      var string1994 = new GraceString("` of type ");
      var opresult1995 = request(opresult1993, "++(1)", [1], string1994);
      setLineNumber(1009);    // compilenode string
      var string1996 = new GraceString("`");
      if (var_vType === undefined) raiseUninitializedVariable("vType");
      var opresult1997 = request(string1996, "++(1)", [1], var_vType);
      var string1998 = new GraceString("` does not satisfy the type `");
      var opresult1999 = request(opresult1997, "++(1)", [1], string1998);
      if (var_dType === undefined) raiseUninitializedVariable("dType");
      var opresult2000 = request(opresult1999, "++(1)", [1], var_dType);
      var string2001 = new GraceString("` of ");
      var opresult2002 = request(opresult2000, "++(1)", [1], string2001);
      var opresult2003 = request(opresult1995, "++(1)", [1], opresult2002);
      setLineNumber(1010);    // compilenode string
      var string2004 = new GraceString("`");
      // call case 6: other requests
      if (var_dest === undefined) raiseUninitializedVariable("dest");
      var call2005 = request(var_dest, "toGrace(1)", [1], new GraceNum(0));
      var opresult2006 = request(string2004, "++(1)", [1], call2005);
      var string2007 = new GraceString("`");
      var opresult2008 = request(opresult2006, "++(1)", [1], string2007);
      var opresult2009 = request(opresult2003, "++(1)", [1], opresult2008);
      if (var_value === undefined) raiseUninitializedVariable("value");
      // call case 6: other requests
      if (var_DefError === undefined) raiseUninitializedVariable("DefError");
      var call1990 = request(var_DefError, "raise(1)with(1)", [1, 1], opresult2009, var_value);
      if1987 = call1990;
    }
    setLineNumber(1012);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call2010 = request(var_objectType, "done", [0]);
    return call2010;
  };
  let applyMeth1979 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth1979.methodName = "apply(1)";
  applyMeth1979.paramCounts = [1];
  applyMeth1979.paramNames = ["bind"];
  applyMeth1979.definitionLine = 1000;
  applyMeth1979.definitionModule = "staticTypes";
  block1979.methods["apply(1)"] = applyMeth1979;
  let matchesMeth1979 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth1979.methodName = "matches(1)";
  matchesMeth1979.paramCounts = [1];
  matchesMeth1979.paramNames = ["bind"];
  matchesMeth1979.definitionLine = 1000;
  matchesMeth1979.definitionModule = "staticTypes";
  block1979.methods["matches(1)"] = matchesMeth1979;
  // call case 2: outer request
  var call1978 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block1979);
  setLineNumber(1018);    // compilenode block
  var block2012 = new GraceBlock(this, 1018, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call2013 = selfRequest(this, "Import", [0]);
  block2012.paramTypes = [call2013];
  var matches2014 = function(var_imp) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2015 = selfRequest(this, "Import", [0]);
    if (!Grace_isTrue(request(call2015, "matches(1)", [1], var_imp)))
        return false;
    return true;
  };
  block2012.guard = matches2014;
  block2012.real = function block2012(var_imp) {
    setLineNumber(1019);    // compilenode member
    // call case 6: other requests
    var call2017 = request(var_imp, "nameString", [0]);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call2018 = request(var_objectType, "unknown", [0]);
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2020 = selfRequest(this, "scope", [0]);
    var call2019 = request(call2020, "variables", [0]);
    var call2016 = request(call2019, "at(1)put(1)", [1, 1], call2017, call2018);
    setLineNumber(1020);    // compilenode member
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call2021 = request(var_objectType, "done", [0]);
    return call2021;
  };
  let applyMeth2012 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth2012.methodName = "apply(1)";
  applyMeth2012.paramCounts = [1];
  applyMeth2012.paramNames = ["imp"];
  applyMeth2012.definitionLine = 1018;
  applyMeth2012.definitionModule = "staticTypes";
  block2012.methods["apply(1)"] = applyMeth2012;
  let matchesMeth2012 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth2012.methodName = "matches(1)";
  matchesMeth2012.paramCounts = [1];
  matchesMeth2012.paramNames = ["imp"];
  matchesMeth2012.definitionLine = 1018;
  matchesMeth2012.definitionModule = "staticTypes";
  block2012.methods["matches(1)"] = matchesMeth2012;
  // call case 2: outer request
  var call2011 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block2012);
  setLineNumber(1026);    // compilenode block
  var block2023 = new GraceBlock(this, 1026, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call2024 = selfRequest(this, "BlockLiteral", [0]);
  block2023.paramTypes = [call2024];
  var matches2025 = function(var_block) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2026 = selfRequest(this, "BlockLiteral", [0]);
    if (!Grace_isTrue(request(call2026, "matches(1)", [1], var_block)))
        return false;
    return true;
  };
  block2023.guard = matches2025;
  block2023.real = function block2023(var_block) {
    setLineNumber(1027);    // compilenode member
    // call case 6: other requests
    var call2027 = request(var_block, "body", [0]);
    var var_body = call2027;
    setLineNumber(1029);    // compilenode block
    var block2029 = new GraceBlock(this, 1029, 0);
    block2029.guard = jsTrue;
    block2029.real = function block2029() {
      setLineNumber(1030);    // compilenode block
      var block2031 = new GraceBlock(this, 1030, 1);
      block2031.guard = jsTrue;
      block2031.real = function block2031(var_param) {
        setLineNumber(1031);    // compilenode member
        // call case 6: other requests
        var call2033 = request(var_param, "value", [0]);
        setLineNumber(1032);    // compilenode member
        // call case 6: other requests
        var call2035 = request(var_param, "dtype", [0]);
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call2034 = request(var_objectType, "fromDType(1)", [1], call2035);
        // call case 6: other requests
        setLineNumber(1031);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call2037 = selfRequest(this, "scope", [0]);
        var call2036 = request(call2037, "variables", [0]);
        var call2032 = request(call2036, "at(1)put(1)", [1, 1], call2033, call2034);
        return call2032;
      };
      let applyMeth2031 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2031.methodName = "apply(1)";
      applyMeth2031.paramCounts = [1];
      applyMeth2031.paramNames = ["param"];
      applyMeth2031.definitionLine = 1030;
      applyMeth2031.definitionModule = "staticTypes";
      block2031.methods["apply(1)"] = applyMeth2031;
      let matchesMeth2031 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2031.methodName = "matches(1)";
      matchesMeth2031.paramCounts = [1];
      matchesMeth2031.paramNames = ["param"];
      matchesMeth2031.definitionLine = 1030;
      matchesMeth2031.definitionModule = "staticTypes";
      block2031.methods["matches(1)"] = matchesMeth2031;
      // call case 6: other requests
      setLineNumber(1030);    // compilenode member
      // call case 6: other requests
      var call2038 = request(var_block, "params", [0]);
      var call2030 = request(call2038, "do(1)", [1], block2031);
      setLineNumber(1035);    // compilenode call
      if (var_body === undefined) raiseUninitializedVariable("body");
      // call case 2: outer request
      var call2039 = selfRequest(importedModules["staticTypes"], "collectTypes(1)", [1], var_body);
      setLineNumber(1037);    // compilenode block
      var block2041 = new GraceBlock(this, 1037, 1);
      block2041.guard = jsTrue;
      block2041.real = function block2041(var_stmt) {
        setLineNumber(1038);    // compilenode call
        // call case 2: outer request
        var call2042 = selfRequest(importedModules["staticTypes"], "checkTypes(1)", [1], var_stmt);
        return call2042;
      };
      let applyMeth2041 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth2041.methodName = "apply(1)";
      applyMeth2041.paramCounts = [1];
      applyMeth2041.paramNames = ["stmt"];
      applyMeth2041.definitionLine = 1037;
      applyMeth2041.definitionModule = "staticTypes";
      block2041.methods["apply(1)"] = applyMeth2041;
      let matchesMeth2041 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth2041.methodName = "matches(1)";
      matchesMeth2041.paramCounts = [1];
      matchesMeth2041.paramNames = ["stmt"];
      matchesMeth2041.definitionLine = 1037;
      matchesMeth2041.definitionModule = "staticTypes";
      block2041.methods["matches(1)"] = matchesMeth2041;
      // call case 6: other requests
      if (var_body === undefined) raiseUninitializedVariable("body");
      var call2040 = request(var_body, "do(1)", [1], block2041);
      return call2040;
    };
    let applyMeth2029 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth2029.methodName = "apply";
    applyMeth2029.paramCounts = [0];
    applyMeth2029.paramNames = [];
    applyMeth2029.definitionLine = 1029;
    applyMeth2029.definitionModule = "staticTypes";
    block2029.methods["apply"] = applyMeth2029;
    // call case 6: other requests
    setLineNumber(1029);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2043 = selfRequest(this, "scope", [0]);
    var call2028 = request(call2043, "enter(1)", [1], block2029);
    setLineNumber(1042);    // compilenode array
    var array2045 = new GraceSequence([]);
    // call case 2: outer request
    var call2044 = selfRequest(importedModules["staticTypes"], "list(1)", [1], array2045);
    var var_parameters = call2044;
    setLineNumber(1043);    // compilenode block
    var block2047 = new GraceBlock(this, 1043, 1);
    block2047.guard = jsTrue;
    block2047.real = function block2047(var_param) {
      setLineNumber(1044);    // compilenode member
      // call case 6: other requests
      var call2050 = request(var_param, "value", [0]);
      setLineNumber(1045);    // compilenode member
      // call case 6: other requests
      var call2052 = request(var_param, "dtype", [0]);
      // call case 6: other requests
      if (var_objectType === undefined) raiseUninitializedVariable("objectType");
      var call2051 = request(var_objectType, "fromDType(1)", [1], call2052);
      // call case 6: other requests
      if (var_aParam === undefined) raiseUninitializedVariable("aParam");
      var call2049 = request(var_aParam, "withName(1)ofType(1)", [1, 1], call2050, call2051);
      // call case 6: other requests
      if (var_parameters === undefined) raiseUninitializedVariable("parameters");
      var call2048 = request(var_parameters, "push(1)", [1], call2049);
      return call2048;
    };
    let applyMeth2047 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2047.methodName = "apply(1)";
    applyMeth2047.paramCounts = [1];
    applyMeth2047.paramNames = ["param"];
    applyMeth2047.definitionLine = 1043;
    applyMeth2047.definitionModule = "staticTypes";
    block2047.methods["apply(1)"] = applyMeth2047;
    let matchesMeth2047 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2047.methodName = "matches(1)";
    matchesMeth2047.paramCounts = [1];
    matchesMeth2047.paramNames = ["param"];
    matchesMeth2047.definitionLine = 1043;
    matchesMeth2047.definitionModule = "staticTypes";
    block2047.methods["matches(1)"] = matchesMeth2047;
    // call case 6: other requests
    setLineNumber(1043);    // compilenode member
    // call case 6: other requests
    var call2053 = request(var_block, "params", [0]);
    var call2046 = request(call2053, "do(1)", [1], block2047);
    setLineNumber(1048);    // compilenode call
    if (var_parameters === undefined) raiseUninitializedVariable("parameters");
    setLineNumber(1049);    // compilenode call
    if (var_body === undefined) raiseUninitializedVariable("body");
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call2055 = request(var_objectType, "fromBlockBody(1)", [1], var_body);
    // call case 6: other requests
    if (var_objectType === undefined) raiseUninitializedVariable("objectType");
    var call2054 = request(var_objectType, "blockTaking(1)returning(1)", [1, 1], var_parameters, call2055);
    return call2054;
  };
  let applyMeth2023 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth2023.methodName = "apply(1)";
  applyMeth2023.paramCounts = [1];
  applyMeth2023.paramNames = ["block"];
  applyMeth2023.definitionLine = 1026;
  applyMeth2023.definitionModule = "staticTypes";
  block2023.methods["apply(1)"] = applyMeth2023;
  let matchesMeth2023 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth2023.methodName = "matches(1)";
  matchesMeth2023.paramCounts = [1];
  matchesMeth2023.paramNames = ["block"];
  matchesMeth2023.definitionLine = 1026;
  matchesMeth2023.definitionModule = "staticTypes";
  block2023.methods["matches(1)"] = matchesMeth2023;
  // call case 2: outer request
  var call2022 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block2023);
  setLineNumber(1055);    // compilenode block
  var block2057 = new GraceBlock(this, 1055, 1);
  // call case 4: self request with 0 args and 0 typeArgs 
  var call2058 = selfRequest(this, "Identifier", [0]);
  block2057.paramTypes = [call2058];
  var matches2059 = function(var_ident) {
    // call case 4: self request with 0 args and 0 typeArgs 
    var call2060 = selfRequest(this, "Identifier", [0]);
    if (!Grace_isTrue(request(call2060, "matches(1)", [1], var_ident)))
        return false;
    return true;
  };
  block2057.guard = matches2059;
  block2057.real = function block2057(var_ident) {
    setLineNumber(1056);    // compilenode member
    // call case 6: other requests
    var call2062 = request(var_ident, "value", [0]);
    var cases2061 = [];
    var block2063 = new GraceBlock(this, 1056, 1);
    var string2064 = new GraceString("outer");
    block2063.paramTypes = [string2064];
    var matches2065 = function(var___95____95__13) {
      var string2066 = new GraceString("outer");
      if (!Grace_isTrue(request(string2066, "matches(1)", [1], var___95____95__13)))
          return false;
      return true;
    };
    block2063.guard = matches2065;
    block2063.real = function block2063(var___95____95__13) {
      setLineNumber(1057);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call2069 = selfRequest(this, "scope", [0]);
      var call2068 = request(call2069, "size", [0]);
      // call case 2: outer request
      var call2067 = selfRequest(importedModules["staticTypes"], "outerAt(1)", [1], call2068);
      return call2067;
    };
    let applyMeth2063 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth2063.methodName = "apply(1)";
    applyMeth2063.paramCounts = [1];
    applyMeth2063.paramNames = ["__13"];
    applyMeth2063.definitionLine = 1056;
    applyMeth2063.definitionModule = "staticTypes";
    block2063.methods["apply(1)"] = applyMeth2063;
    let matchesMeth2063 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth2063.methodName = "matches(1)";
    matchesMeth2063.paramCounts = [1];
    matchesMeth2063.paramNames = ["__13"];
    matchesMeth2063.definitionLine = 1056;
    matchesMeth2063.definitionModule = "staticTypes";
    block2063.methods["matches(1)"] = matchesMeth2063;
    cases2061.push(block2063);
    setLineNumber(1058);    // compilenode block
    var block2070 = new GraceBlock(this, 1058, 0);
    block2070.guard = jsTrue;
    block2070.real = function block2070() {
      setLineNumber(1059);    // compilenode member
      // call case 6: other requests
      var call2072 = request(var_ident, "value", [0]);
      var block2073 = new GraceBlock(this, 1059, 0);
      block2073.guard = jsTrue;
      block2073.real = function block2073() {
        setLineNumber(1059);    // compilenode member
        // call case 6: other requests
        if (var_objectType === undefined) raiseUninitializedVariable("objectType");
        var call2074 = request(var_objectType, "unknown", [0]);
        return call2074;
      };
      let applyMeth2073 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth2073.methodName = "apply";
      applyMeth2073.paramCounts = [0];
      applyMeth2073.paramNames = [];
      applyMeth2073.definitionLine = 1059;
      applyMeth2073.definitionModule = "staticTypes";
      block2073.methods["apply"] = applyMeth2073;
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request with 0 args and 0 typeArgs 
      var call2076 = selfRequest(this, "scope", [0]);
      var call2075 = request(call2076, "variables", [0]);
      var call2071 = request(call2075, "find(1)butIfMissing(1)", [1, 1], call2072, block2073);
      return call2071;
    };
    let applyMeth2070 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth2070.methodName = "apply";
    applyMeth2070.paramCounts = [0];
    applyMeth2070.paramNames = [];
    applyMeth2070.definitionLine = 1058;
    applyMeth2070.definitionModule = "staticTypes";
    block2070.methods["apply"] = applyMeth2070;
    setLineNumber(1056);    // compilematchcase
    var matchres2061 = matchCase(call2062,cases2061,block2070);
    return matchres2061;
  };
  let applyMeth2057 = function apply_1 (argcv, ...args) {
      if (this.guard.apply(this.receiver, args))
          return this.real.apply(this.receiver, args);
      badBlockArgs.apply(this, args);
  };
  applyMeth2057.methodName = "apply(1)";
  applyMeth2057.paramCounts = [1];
  applyMeth2057.paramNames = ["ident"];
  applyMeth2057.definitionLine = 1055;
  applyMeth2057.definitionModule = "staticTypes";
  block2057.methods["apply(1)"] = applyMeth2057;
  let matchesMeth2057 = function matches_1 (argcv, ...args) {
      return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
  };
  matchesMeth2057.methodName = "matches(1)";
  matchesMeth2057.paramCounts = [1];
  matchesMeth2057.paramNames = ["ident"];
  matchesMeth2057.definitionLine = 1055;
  matchesMeth2057.definitionModule = "staticTypes";
  block2057.methods["matches(1)"] = matchesMeth2057;
  // call case 2: outer request
  var call2056 = selfRequest(importedModules["staticTypes"], "rule(1)", [1], block2057);
  setLineNumber(1174);    // compilenode string
  var string2078 = new GraceString("TypeDeclarationError");
  // call case 6: other requests
  // call case 2: outer request
  var call2079 = selfRequest(var_prelude, "TypeError", [0]);
  var call2077 = request(call2079, "refine(1)", [1], string2078);
  var var_TypeDeclarationError = call2077;
  var reader2080_TypeDeclarationError = function() {  // reader method TypeDeclarationError
      if (var_TypeDeclarationError === undefined) raiseUninitializedVariable("TypeDeclarationError");
      return var_TypeDeclarationError;
  };
  reader2080_TypeDeclarationError.isDef = true;
  reader2080_TypeDeclarationError.confidential = true;
  this.methods["TypeDeclarationError"] = reader2080_TypeDeclarationError;
  setLineNumber(1241);    // compilenode object
  var obj2081_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_staticTypes_1241");
    this.outer_staticTypes_1241 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func2082 = function(argcv, var_moduleObj) {    // method astChecker(_), line 1242
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("astChecker(_)", 0, numArgs - 1);
      }
      setLineNumber(1242);    // compilenode call
      // call case 2: outer request
      var call2083 = selfRequest(importedModules["staticTypes"], "check(1)", [1], var_moduleObj);
      return call2083;
    };    // end of method astChecker(_)
    this.methods["astChecker(1)"] = func2082;
    func2082.methodName = "astChecker(1)";
    func2082.paramCounts = [1];
    func2082.paramNames = ["moduleObj"];
    func2082.definitionLine = 1242;
    func2082.definitionModule = "staticTypes";
    var func2084 = function(argcv) {    // method atStart, line 1243
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("atStart", 0, numArgs - 0);
      }
      setLineNumber(1243);    // compilenode string
      var string2085 = new GraceString("module start");
      Grace_print(string2085);
      return GraceDone;
    };    // end of method atStart
    this.methods["atStart"] = func2084;
    func2084.methodName = "atStart";
    func2084.paramCounts = [0];
    func2084.paramNames = [];
    func2084.definitionLine = 1243;
    func2084.definitionModule = "staticTypes";
    var func2086 = function(argcv) {    // method atEnd, line 1244
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("atEnd", 0, numArgs - 0);
      }
      setLineNumber(1244);    // compilenode string
      var string2087 = new GraceString("module end");
      Grace_print(string2087);
      return GraceDone;
    };    // end of method atEnd
    this.methods["atEnd"] = func2086;
    func2086.methodName = "atEnd";
    func2086.paramCounts = [0];
    func2086.paramNames = [];
    func2086.definitionLine = 1244;
    func2086.definitionModule = "staticTypes";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 1241;
        m.definitionModule = "staticTypes";
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
    var obj2081_init = function() {    // init of object on line 1241
    };
    return obj2081_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj2081 = emptyGraceObject("thisDialect", "staticTypes", 1241);
  var obj2081_init = obj2081_build.call(obj2081, null, this, [], []);
  obj2081_init.call(obj2081);  // end of compileobject
  var var_thisDialect = obj2081;
  var reader2088_thisDialect = function() {  // reader method thisDialect
      if (var_thisDialect === undefined) raiseUninitializedVariable("thisDialect");
      return var_thisDialect;
  };
  reader2088_thisDialect.isDef = true;
  this.methods["thisDialect"] = reader2088_thisDialect;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_staticTypes = gracecode_staticTypes;
if (typeof window !== "undefined")
  window.gracecode_staticTypes = gracecode_staticTypes;
gracecode_staticTypes.imports = ["ast", "dialect", "util"];
gracecode_staticTypes.definitionModule = "staticTypes";
gracecode_staticTypes.definitionLine = 1;
