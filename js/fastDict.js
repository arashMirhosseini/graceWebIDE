if (typeof gctCache !== "undefined")
  gctCache["fastDict"] = "classes:\nconfidential:\n IteratorExhausted\n NoSuchObject\n prims\n removed\ndialect:\nfresh-methods:\n dictionary\nfresh:dictionary:\n <<(1)\n asString\n empty\n with(1)\n withAll(1)\nmethodtypes-of:Binding\u27e6K, T\u27e7:\nmethodtypes-of:Collection\u27e6T\u27e7:\nmodules:\n collectionsPrelude\npath:\n /Users/black/Development/mg/gracelang/minigrace/fastDict.grace\npublic:\n Binding\n Collection\n ConcurrentModification\n dictionary\npublicMethodTypes:\n ConcurrentModification \u2192 Unknown\n dictionary\u27e6K, T\u27e7\ntypes:\n Binding\n Collection\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["fastDict"] = [
    "dialect \"none\"",
    "import \"collectionsPrelude\" as collections",
    "",
    "def ConcurrentModification is public = ProgrammingError.refine \"ConcurrentModification\"",
    "",
    "type Binding⟦K,T⟧ = collections.Binding⟦K,T⟧",
    "type Collection⟦T⟧ = collections.Collection⟦T⟧",
    "def NoSuchObject = collections.NoSuchObject",
    "def IteratorExhausted = collections.IteratorExhausted",
    "",
    "def prims = object {",
    "    method emptyJSObject {",
    "        native \"js\" code ‹return {};",
    "    ›",
    "    }",
    "}",
    "",
    "def removed = object {",
    "    // Used as a tombestone to mark the location of a removed VALUE.",
    "    // The key, and the key-value binding object, remain in the dictionary",
    "    method asString { \"removed\" }",
    "    method == (other) { self.isMe(other) }",
    "    method ≠ (other) { self.isMe(other).not }",
    "    method hash { self.myIdentityHash }",
    "}",
    "",
    "class dictionary⟦K,T⟧ {",
    "",
    "    method asString { \"the dictionary factory\" }",
    "",
    "    method with(aBinding) {",
    "        empty.add(aBinding)",
    "    }",
    "",
    "    method withAll(initialBindings: Collection⟦Binding⟦K,T⟧⟧) {",
    "        // we can't say -> Dictionary⟦K,T⟧, because checking that (dynamically)",
    "        // requires building a dictionary for the memo table in the Dictionary type",
    "",
    "        def result = empty",
    "        initialBindings.do { b:Binding -> result.add(b) }",
    "        result",
    "    }",
    "    ",
    "    method << (source:Collection⟦Binding⟦K,T⟧⟧) { self.withAll(source) }",
    "",
    "    class empty {",
    "",
    "        use collections.collection⟦T⟧",
    "        var mods is readable := 0",
    "        var numBindings := 0",
    "        var table := prims.emptyJSObject",
    "",
    "        method size { numBindings }",
    "",
    "        method at (k) put (v) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹var hc = request(var_k, \"hash\", [0])._value;",
    "                while (true) {",
    "                    let b = this.data.table[hc]",
    "                    if (! b) break;",
    "                    if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                        if (var_removed === b.value) {",
    "                            this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);",
    "                        }   // otherwise, we are overwriting an existing binding",
    "                        b.value = var_v;",
    "                        return this;",
    "                    }",
    "                    hc++;",
    "                }",
    "                this.data.table[hc] = {key: var_k, value: var_v};",
    "                this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);",
    "                return this;",
    "            ›",
    "        }",
    "        method add(aBinding) {",
    "            self.at (aBinding.key) put (aBinding.value)",
    "        }",
    "        method addAll(bindings) {",
    "            bindings.do{ each -> add(each) }",
    "            self    // for chaining",
    "        }",
    "        method at(k) {",
    "            native \"js\" code ‹",
    "            var hc = request(var_k, \"hash\", [0])._value;",
    "            while (true) {",
    "                let b = this.data.table[hc];",
    "                if (! b) break;",
    "                if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                    if (var_removed === b.value) break;",
    "                    return b.value;",
    "                }",
    "                hc++;",
    "            }›",
    "            NoSuchObject.raise \"dictionary does not contain entry with key {k}\"",
    "        }",
    "        method at(k) ifAbsent(action) {",
    "            native \"js\" code ‹",
    "            var hc = request(var_k, \"hash\", [0])._value;",
    "            while (true) {",
    "                let b = this.data.table[hc];",
    "                if (! b) break;",
    "                if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                    if (var_removed === b.value) break;",
    "                    return b.value;",
    "                }",
    "                hc++;",
    "            }›",
    "            action.apply",
    "        }",
    "        method containsKey(k) {",
    "            native \"js\" code ‹",
    "            var hc = request(var_k, \"hash\", [0])._value;",
    "            while (true) {",
    "                let b = this.data.table[hc];",
    "                if (! b) break;",
    "                if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                    return (var_removed === b.value ? GraceFalse : GraceTrue);",
    "                }",
    "                hc++;",
    "            };",
    "            return GraceFalse;›",
    "        }",
    "        method removeAllKeys(keys) {",
    "            mods := mods + 1",
    "            for (keys) do { k → removeKey(k) }",
    "            self",
    "        }",
    "        method removeKey(k) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹",
    "            var hc = request(var_k, \"hash\", [0])._value;",
    "            while (true) {",
    "                let b = this.data.table[hc];",
    "                if (! b) break;",
    "                if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                    if (var_removed === b.value) break;",
    "                    b.value = var_removed;",
    "                    this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);",
    "                    return this;",
    "                }",
    "                hc++;",
    "            };›",
    "            NoSuchObject.raise \"dictionary does not contain entry with key {k}\"",
    "        }",
    "        method removeKey(k) ifAbsent (action) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹",
    "            var hc = request(var_k, \"hash\", [0])._value;",
    "            while (true) {",
    "                let b = this.data.table[hc];",
    "                if (! b) break;",
    "                if (Grace_isTrue(request(b.key, \"==(1)\", [1], var_k))) {",
    "                    if (var_removed === b.value) break;",
    "                    b.value = var_removed;",
    "                    this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);",
    "                    return this;",
    "                }",
    "                hc++;",
    "            };›",
    "            action.apply",
    "        }",
    "        method removeAllValues(removals) {",
    "            // remove all bindings with any of the values in removals",
    "            mods := mods + 1",
    "            native \"js\" code ‹",
    "            let t = this.data.table",
    "            for (let k in t) {",
    "                if (t.hasOwnProperty(k)) {",
    "                    let b = t[k];",
    "                    if (Grace_isTrue(request(var_removals, 'contains(1)', [1], b.value))) {",
    "                        b.value = var_removed;",
    "                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);",
    "                    }",
    "                }",
    "            };›",
    "            self",
    "        }",
    "        method removeValue(v) {",
    "            // remove all bindings with value v",
    "            mods := mods + 1",
    "            def initialNumBindings = numBindings",
    "            native \"js\" code ‹",
    "            let t = this.data.table",
    "            for (let k in t) {",
    "                if (t.hasOwnProperty(k)) {",
    "                    let b = t[k];",
    "                    if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {",
    "                        b.value = var_removed;",
    "                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);",
    "                    }",
    "                }",
    "            };›",
    "            if (numBindings == initialNumBindings) then {",
    "                NoSuchObject.raise \"dictionary does not contain any entries with value {v}\"",
    "            }",
    "            self",
    "        }",
    "        method removeValue(v) ifAbsent (action) {",
    "            // remove all bindings with value v",
    "            mods := mods + 1",
    "            def initialNumBindings = numBindings",
    "            native \"js\" code ‹",
    "            let t = this.data.table",
    "            for (let k in t) {",
    "                if (t.hasOwnProperty(k)) {",
    "                    let b = t[k];",
    "                    if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {",
    "                        b.value = var_removed;",
    "                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);",
    "                    }",
    "                }",
    "            };›",
    "            if (numBindings == initialNumBindings) then {",
    "                action.apply",
    "            }",
    "            self",
    "        }",
    "        method clear { ",
    "            table := prims.emptyJSObject",
    "            numBindings := 0",
    "            mods := mods + 1",
    "            self",
    "        }",
    "        method containsValue(v) {",
    "            self.valuesDo{ each ->",
    "                if (v == each) then { return true }",
    "            }",
    "            false",
    "        }",
    "        method contains(v) { containsValue(v) }",
    "        method asString {",
    "            // do()separatedBy won't work, because it iterates over values,",
    "            // and we need an iterator over bindings.",
    "            native \"js\" code ‹",
    "            var s = \"fastDict⟬\";",
    "            var first = true;",
    "            let t = this.data.table;",
    "            for (var h in t) {",
    "                if (t.hasOwnProperty(h)) {",
    "                    var p = t[h];",
    "                    if (var_removed !== p.value) {",
    "                        if (first)",
    "                            first = false;",
    "                        else",
    "                            s += \", \";",
    "                        s += request(p.key, \"asString\", [0])._value;",
    "                        s += \"::\";",
    "                        s += request(p.value, \"asString\", [0])._value;",
    "                    }",
    "                }",
    "            }",
    "            s += \"⟭\";",
    "            return new GraceString(s);",
    "        ›",
    "        }",
    "        method asDebugString {",
    "            native \"js\" code ‹",
    "            var s = \"fastDict⟬\";",
    "            var first = true;",
    "            let t = this.data.table;",
    "            for (var h in t) {",
    "                if (t.hasOwnProperty(h)) {",
    "                    var p = t[h];",
    "                    if (first)",
    "                        first = false;",
    "                    else",
    "                        s += \", \";",
    "                    s += request(p.key, \"asDebugString\", [0])._value;",
    "                    s += \"::\";",
    "                    s += request(p.value, \"asDebugString\", [0])._value;",
    "                }",
    "            }",
    "            s += \"⟭\";",
    "            return new GraceString(s);",
    "        ›",
    "        }",
    "        method keys  {",
    "            def sourceDictionary = self",
    "            object {",
    "                use collections.enumerable⟦K⟧",
    "                class iterator {",
    "                    def sourceIterator = sourceDictionary.bindingsIterator",
    "                    method hasNext { sourceIterator.hasNext }",
    "                    method next { sourceIterator.next.key }",
    "                    method asString {",
    "                        \"an iterator over keys of {sourceDictionary}\"",
    "                    }",
    "                }",
    "                def size is public = sourceDictionary.size",
    "                method asDebugString {",
    "                    \"a lazy sequence over keys of {sourceDictionary}\"",
    "                }",
    "            }",
    "        }",
    "        method values {",
    "            def sourceDictionary = self",
    "            object {",
    "                use collections.enumerable⟦T⟧",
    "                class iterator {",
    "                    def sourceIterator = sourceDictionary.bindingsIterator",
    "                    // should be request on outer",
    "                    method hasNext { sourceIterator.hasNext }",
    "                    method next { sourceIterator.next.value }",
    "                    method asString {",
    "                        \"an iterator over values of {sourceDictionary}\"",
    "                    }",
    "                }",
    "                def size is public = sourceDictionary.size",
    "                method asDebugString {",
    "                    \"a lazy sequence over values of {sourceDictionary}\"",
    "                }",
    "            }",
    "        }",
    "        method bindings {",
    "            def sourceDictionary = self",
    "            object {",
    "                use collections.enumerable⟦T⟧",
    "                method iterator { sourceDictionary.bindingsIterator }",
    "                // should be request on outer",
    "                def size is public = sourceDictionary.size",
    "                method asDebugString {",
    "                    \"a lazy sequence over bindings of {sourceDictionary}\"",
    "                }",
    "            }",
    "        }",
    "        method iterator { values.iterator }",
    "        class bindingsIterator {",
    "            // this should be confidential, but can't be until `outer` is fixed.",
    "            def iMods = mods",
    "            var count := 1",
    "            def subjectDictionary = outer;",
    "            native \"js\" code ‹this.data.allTheKeys = Object.keys(this.data.subjectDictionary.data.table);",
    "            ›",
    "            method hasNext { size >= count }",
    "            method next {",
    "                if (iMods != mods) then {",
    "                    ConcurrentModification.raise (outer.asString)",
    "                }",
    "                if (size < count) then { IteratorExhausted.raise \"over {outer.asString}\" }",
    "                native \"js\" code ‹",
    "                let binding = request(var_prelude, 'binding', [0]);",
    "                while (true) {",
    "                    let nextKey = this.data.allTheKeys.shift();",
    "                    let b = this.data.subjectDictionary.data.table[nextKey];",
    "                        if (var_removed !== b.value) {",
    "                            this.data.count = new GraceNum(this.data.count._value + 1);",
    "                            return request(binding, 'key(1)value(1)',  [1,1], b.key, b.value);",
    "                        }",
    "                }",
    "                ›",
    "            }",
    "        }",
    "        method keysAndValuesDo(block2) {",
    "            native \"js\" code ‹",
    "            let t = this.data.table;",
    "            let iMods = this.data.mods._value;",
    "            for (var h in t) {",
    "                if (t.hasOwnProperty(h)) {",
    "                    let p = t[h];",
    "                    if (var_removed !== p.value) {",
    "                        if (iMods !== this.data.mods._value) ",
    "                            request(var_ConcurrentModification, \"raise(1)\", [1], request(this, \"asDebugString\", [0]));",
    "                        request(var_block2, 'apply(2)', [2], p.key, p.value);",
    "                    }",
    "                }",
    "            }",
    "            ›",
    "        }",
    "        method keysDo(block1) {",
    "            native \"js\" code ‹",
    "            let t = this.data.table;",
    "            let iMods = this.data.mods._value;",
    "            for (var h in t) {",
    "                if (t.hasOwnProperty(h)) {",
    "                    let p = t[h];",
    "                    if (var_removed !== p.value) {",
    "                        if (iMods !== this.data.mods._value) ",
    "                            request(var_ConcurrentModification, \"raise(1)\", [1], request(this, \"asDebugString\", [0]));",
    "                        request(var_block1, 'apply(1)', [1], p.key);",
    "                    }",
    "                }",
    "            }",
    "            ›",
    "        }",
    "        method valuesDo(block1) {",
    "            native \"js\" code ‹",
    "            let t = this.data.table;",
    "            let iMods = this.data.mods._value;",
    "            for (var h in t) {",
    "                if (t.hasOwnProperty(h)) {",
    "                    let p = t[h];",
    "                    if (var_removed != p.value) {",
    "                        if (iMods !== this.data.mods._value) ",
    "                            request(var_ConcurrentModification, \"raise(1)\", [1], request(this, \"asDebugString\", [0]));",
    "                        request(var_block1, 'apply(1)', [1], p.value);",
    "                    }",
    "                }",
    "            }",
    "            ›",
    "        }",
    "        method do(block1) { valuesDo(block1) }",
    "",
    "        method ==(other) {",
    "            match (other) case { o:collections.ComparableToDictionary⟦K,T⟧ ->",
    "                if (self.size != o.size) then {return false}",
    "                self.keysAndValuesDo { k, v ->",
    "                    if (o.at(k)ifAbsent{return false} != v) then {",
    "                        return false",
    "                    }",
    "                }",
    "                return true",
    "            } else {",
    "                return false",
    "            }",
    "        }",
    "        method ≠ (other) { (self == other).not }",
    "",
    "        method copy {",
    "            def newCopy = dictionary.empty",
    "            self.keysAndValuesDo{ k, v ->",
    "                newCopy.at(k)put(v)",
    "            }",
    "            newCopy",
    "        }",
    "",
    "",
    "        method ++ (other:Collection⟦T⟧) {",
    "            // answers a new dictionary containing all my keys and the keys of other;",
    "            // if other contains one of my keys, other's value overrides mine",
    "            def newDict = self.copy",
    "            other.keysAndValuesDo {k, v ->",
    "                newDict.at(k) put(v)",
    "            }",
    "            return newDict",
    "        }",
    "",
    "        method -- (other:Collection⟦T⟧) {",
    "            // answers a new dictionary like me but excluding the keys of other",
    "            def newDict = dictionary.empty",
    "            keysAndValuesDo { k, v ->",
    "                if (! other.containsKey(k)) then {",
    "                    newDict.at(k) put(v)",
    "                }",
    "            }",
    "            return newDict",
    "        }",
    "",
    "        method >>(target) is override {",
    "            target << self.bindings",
    "        }",
    "",
    "        method <<(source) is override {",
    "            self.addAll(source)",
    "        }",
    "    }",
    "}",
    "" ];
}
function gracecode_fastDict() {
  importedModules["fastDict"] = this;
  var module$fastDict = this;
  this.definitionModule = "fastDict";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_fastDict_1");
  this.outer_fastDict_1 = var_prelude;
  setLineNumber(2);    // compilenode import
  // Import of "collectionsPrelude" as collections
  if (typeof gracecode_collectionsPrelude == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module collectionsPrelude"));
  var var_collections = do_import("collectionsPrelude", gracecode_collectionsPrelude);
  var func0 = function(argcv) {     // accessor method collections
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("collections", 0, numArgs - 0);
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    return var_collections;
  };    // end of method collections
  this.methods["collections"] = func0;
  func0.methodName = "collections";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 2;
  func0.definitionModule = "fastDict";
  func0.debug = "import";
  func0.confidential = true;
  setLineNumber(6);    // compilenode typedec
  // Type decl Binding
  var func2 = function(argcv, var_K, var_T) {    // method Binding, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(6);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call3 = request(var_collections, "Binding", [0, 2], var_K, var_T);
    return call3;
  };    // end of method Binding
  function memofunc2(argcv, var_K, var_T) {
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("Binding", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$Binding"] ||
          ( this.data["memo$Binding"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_K, var_T]);
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func2.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Binding"] = memofunc2;
  memofunc2.methodName = "Binding";
  memofunc2.paramCounts = [0];
  memofunc2.paramNames = [];
  memofunc2.typeParamNames = ["K", "T"];
  memofunc2.definitionLine = 1;
  memofunc2.definitionModule = "fastDict";
  func2.methodName = "Binding";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.typeParamNames = ["K", "T"];
  func2.definitionLine = 1;
  func2.definitionModule = "fastDict";
  setLineNumber(7);    // compilenode typedec
  // Type decl Collection
  var func5 = function(argcv, var_T) {    // method Collection, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(7);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call6 = request(var_collections, "Collection", [0, 1], var_T);
    return call6;
  };    // end of method Collection
  function memofunc5(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Collection", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Collection"] ||
          ( this.data["memo$Collection"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func5.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Collection"] = memofunc5;
  memofunc5.methodName = "Collection";
  memofunc5.paramCounts = [0];
  memofunc5.paramNames = [];
  memofunc5.typeParamNames = ["T"];
  memofunc5.definitionLine = 1;
  memofunc5.definitionModule = "fastDict";
  func5.methodName = "Collection";
  func5.paramCounts = [0];
  func5.paramNames = [];
  func5.typeParamNames = ["T"];
  func5.definitionLine = 1;
  func5.definitionModule = "fastDict";
  var func7 = function(argcv, var_K, var_T) {    // method dictionary, line 27
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    var ouc = emptyGraceObject("dictionary", "fastDict", 27);
    var ouc_init = this.methods["dictionary$build(3)"].call(this, null, ouc, [], [], var_K, var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method dictionary
  this.methods["dictionary"] = func7;
  func7.methodName = "dictionary";
  func7.paramCounts = [0];
  func7.paramNames = [];
  func7.typeParamNames = ["K", "T"];
  func7.definitionLine = 27;
  func7.definitionModule = "fastDict";
  var func8 = function(argcv, inheritingObject, aliases, exclusions, var_K, var_T) {    // method dictionary$build(_,_,_), line 27
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    var obj9_build = function(ignore, outerObj, aliases, exclusions, var_K, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_fastDict_27");
      this.outer_fastDict_27 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func10 = function(argcv) {    // method asString, line 29
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(29);    // compilenode string
        var string11 = new GraceString("the dictionary factory");
        return string11;
      };    // end of method asString
      this.methods["asString"] = func10;
      func10.methodName = "asString";
      func10.paramCounts = [0];
      func10.paramNames = [];
      func10.definitionLine = 29;
      func10.definitionModule = "fastDict";
      var func12 = function(argcv, var_aBinding) {    // method with(_), line 31
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("with(_)", 0, numArgs - 1);
        }
        setLineNumber(32);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call14 = selfRequest(this, "empty", [0]);
        var call13 = request(call14, "add(1)", [1], var_aBinding);
        return call13;
      };    // end of method with(_)
      this.methods["with(1)"] = func12;
      func12.methodName = "with(1)";
      func12.paramCounts = [1];
      func12.paramNames = ["aBinding"];
      func12.definitionLine = 31;
      func12.definitionModule = "fastDict";
      var func15 = function(argcv, var_initialBindings) {    // method withAll(_), line 35
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        setLineNumber(35);    // compilenode member
        // call case 2: outer request
        var call16 = selfRequest(importedModules["fastDict"], "Collection", [0]);
        assertTypeOrMsg(var_initialBindings, call16, "argument to request of `withAll(_)`", "Collection");
        setLineNumber(39);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call17 = selfRequest(this, "empty", [0]);
        var var_result = call17;
        setLineNumber(40);    // compilenode block
        var block19 = new GraceBlock(this, 40, 1);
        // call case 2: outer request
        var call20 = selfRequest(importedModules["fastDict"], "Binding", [0]);
        block19.paramTypes = [call20];
        var matches21 = function(var_b) {
          // call case 2: outer request
          var call22 = selfRequest(importedModules["fastDict"], "Binding", [0]);
          if (!Grace_isTrue(request(call22, "matches(1)", [1], var_b)))
              return false;
          return true;
        };
        block19.guard = matches21;
        block19.real = function block19(var_b) {
          setLineNumber(40);    // compilenode call
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call23 = request(var_result, "add(1)", [1], var_b);
          return call23;
        };
        let applyMeth19 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth19.methodName = "apply(1)";
        applyMeth19.paramCounts = [1];
        applyMeth19.paramNames = ["b"];
        applyMeth19.definitionLine = 40;
        applyMeth19.definitionModule = "fastDict";
        block19.methods["apply(1)"] = applyMeth19;
        let matchesMeth19 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth19.methodName = "matches(1)";
        matchesMeth19.paramCounts = [1];
        matchesMeth19.paramNames = ["b"];
        matchesMeth19.definitionLine = 40;
        matchesMeth19.definitionModule = "fastDict";
        block19.methods["matches(1)"] = matchesMeth19;
        // call case 6: other requests
        var call18 = request(var_initialBindings, "do(1)", [1], block19);
        return var_result;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func15;
      func15.methodName = "withAll(1)";
      func15.paramCounts = [1];
      func15.paramNames = ["initialBindings"];
      func15.definitionLine = 35;
      func15.definitionModule = "fastDict";
      var func24 = function(argcv, var_source) {    // method <<(_), line 44
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(44);    // compilenode member
        // call case 2: outer request
        var call25 = selfRequest(importedModules["fastDict"], "Collection", [0]);
        assertTypeOrMsg(var_source, call25, "argument to request of `<<(_)`", "Collection");
        // call case 4: self request with 1 args and 0 typeArgs 
        var call26 = selfRequest(this, "withAll(1)", [1], var_source);
        return call26;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func24;
      func24.methodName = "<<(1)";
      func24.paramCounts = [1];
      func24.paramNames = ["source"];
      func24.definitionLine = 44;
      func24.definitionModule = "fastDict";
      var func27 = function(argcv) {    // method empty, line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("dictionary.empty", "fastDict", 46);
        var ouc_init = this.methods["empty$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method empty
      this.methods["empty"] = func27;
      func27.methodName = "empty";
      func27.paramCounts = [0];
      func27.paramNames = [];
      func27.definitionLine = 46;
      func27.definitionModule = "fastDict";
      var func28 = function(argcv, inheritingObject, aliases, exclusions) {    // method empty$build(_,_,_), line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        var obj29_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_fastDict_46");
          this.outer_fastDict_46 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(48);    // reuse call
          if (var_collections === undefined) raiseUninitializedVariable("collections");
          var initFun30 = request(var_collections, "collection$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.mods = undefined;
          var reader31_mods = function() {  // reader method mods
              if (this.data.mods === undefined) raiseUninitializedVariable("mods");
              return this.data.mods;
          };
          reader31_mods.isVar = true;
          this.methods["mods"] = reader31_mods;
          var writer32_mods = function(argcv, n) {   // writer method mods:=(_)
            this.data.mods = n;
            return GraceDone;
          };
          writer32_mods.confidential = true;
          this.methods["mods:=(1)"] = writer32_mods;
          this.data.numBindings = undefined;
          var reader33_numBindings = function() {  // reader method numBindings
              if (this.data.numBindings === undefined) raiseUninitializedVariable("numBindings");
              return this.data.numBindings;
          };
          reader33_numBindings.isVar = true;
          reader33_numBindings.confidential = true;
          this.methods["numBindings"] = reader33_numBindings;
          var writer34_numBindings = function(argcv, n) {   // writer method numBindings:=(_)
            this.data.numBindings = n;
            return GraceDone;
          };
          writer34_numBindings.confidential = true;
          this.methods["numBindings:=(1)"] = writer34_numBindings;
          this.data.table = undefined;
          var reader35_table = function() {  // reader method table
              if (this.data.table === undefined) raiseUninitializedVariable("table");
              return this.data.table;
          };
          reader35_table.isVar = true;
          reader35_table.confidential = true;
          this.methods["table"] = reader35_table;
          var writer36_table = function(argcv, n) {   // writer method table:=(_)
            this.data.table = n;
            return GraceDone;
          };
          writer36_table.confidential = true;
          this.methods["table:=(1)"] = writer36_table;
          var func37 = function(argcv) {    // method size, line 53
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(53);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call38 = selfRequest(this, "numBindings", [0]);
            return call38;
          };    // end of method size
          this.methods["size"] = func37;
          func37.methodName = "size";
          func37.paramCounts = [0];
          func37.paramNames = [];
          func37.definitionLine = 53;
          func37.definitionModule = "fastDict";
          var func39 = function(argcv, var_k, var_v) {    // method at(_)put(_), line 55
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)put(_)", 0, numArgs - 2);
            }
            setLineNumber(56);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call41 = selfRequest(this, "mods", [0]);
            var sum42 = request(call41, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call40 = selfRequest(this, "mods:=(1)", [1], sum42);
            setLineNumber(57);    // compilenode call
            var result = GraceDone;    // start native code from line 57
            var hc = request(var_k, "hash", [0])._value;
                while (true) {
                    let b = this.data.table[hc]
                    if (! b) break;
                    if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                        if (var_removed === b.value) {
                            this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);
                        }   // otherwise, we are overwriting an existing binding
                        b.value = var_v;
                        return this;
                    }
                    hc++;
                }
                this.data.table[hc] = {key: var_k, value: var_v};
                this.data.numBindings = new GraceNum(this.data.numBindings._value + 1);
                return this;
               // end native code insertion
            return result;
          };    // end of method at(_)put(_)
          this.methods["at(1)put(1)"] = func39;
          func39.methodName = "at(1)put(1)";
          func39.paramCounts = [1, 1];
          func39.paramNames = ["k", "v"];
          func39.definitionLine = 55;
          func39.definitionModule = "fastDict";
          var func43 = function(argcv, var_aBinding) {    // method add(_), line 75
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("add(_)", 0, numArgs - 1);
            }
            setLineNumber(76);    // compilenode member
            // call case 6: other requests
            var call45 = request(var_aBinding, "key", [0]);
            // call case 6: other requests
            var call46 = request(var_aBinding, "value", [0]);
            // call case 4: self request with 2 args and 0 typeArgs 
            var call44 = selfRequest(this, "at(1)put(1)", [1, 1], call45, call46);
            return call44;
          };    // end of method add(_)
          this.methods["add(1)"] = func43;
          func43.methodName = "add(1)";
          func43.paramCounts = [1];
          func43.paramNames = ["aBinding"];
          func43.definitionLine = 75;
          func43.definitionModule = "fastDict";
          var func47 = function(argcv, var_bindings) {    // method addAll(_), line 78
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addAll(_)", 0, numArgs - 1);
            }
            setLineNumber(79);    // compilenode block
            var block49 = new GraceBlock(this, 79, 1);
            block49.guard = jsTrue;
            block49.real = function block49(var_each) {
              setLineNumber(79);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call50 = selfRequest(this, "add(1)", [1], var_each);
              return call50;
            };
            let applyMeth49 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth49.methodName = "apply(1)";
            applyMeth49.paramCounts = [1];
            applyMeth49.paramNames = ["each"];
            applyMeth49.definitionLine = 79;
            applyMeth49.definitionModule = "fastDict";
            block49.methods["apply(1)"] = applyMeth49;
            let matchesMeth49 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth49.methodName = "matches(1)";
            matchesMeth49.paramCounts = [1];
            matchesMeth49.paramNames = ["each"];
            matchesMeth49.definitionLine = 79;
            matchesMeth49.definitionModule = "fastDict";
            block49.methods["matches(1)"] = matchesMeth49;
            // call case 6: other requests
            var call48 = request(var_bindings, "do(1)", [1], block49);
            return this;
          };    // end of method addAll(_)
          this.methods["addAll(1)"] = func47;
          func47.methodName = "addAll(1)";
          func47.paramCounts = [1];
          func47.paramNames = ["bindings"];
          func47.definitionLine = 78;
          func47.definitionModule = "fastDict";
          var func51 = function(argcv, var_k) {    // method at(_), line 82
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("at(_)", 0, numArgs - 1);
            }
            setLineNumber(83);    // compilenode call
            var result = GraceDone;    // start native code from line 83
            
            var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table[hc];
                if (! b) break;
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    if (var_removed === b.value) break;
                    return b.value;
                }
                hc++;
            }   // end native code insertion
            setLineNumber(94);    // compilenode string
            var string53 = new GraceString("dictionary does not contain entry with key ");
            var opresult54 = request(string53, "++(1)", [1], var_k);
            var string55 = new GraceString("");
            var opresult56 = request(opresult54, "++(1)", [1], string55);
            // call case 6: other requests
            if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
            var call52 = request(var_NoSuchObject, "raise(1)", [1], opresult56);
            return call52;
          };    // end of method at(_)
          this.methods["at(1)"] = func51;
          func51.methodName = "at(1)";
          func51.paramCounts = [1];
          func51.paramNames = ["k"];
          func51.definitionLine = 82;
          func51.definitionModule = "fastDict";
          var func57 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 96
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(97);    // compilenode call
            var result = GraceDone;    // start native code from line 97
            
            var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table[hc];
                if (! b) break;
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    if (var_removed === b.value) break;
                    return b.value;
                }
                hc++;
            }   // end native code insertion
            setLineNumber(108);    // compilenode member
            // call case 6: other requests
            var call58 = request(var_action, "apply", [0]);
            return call58;
          };    // end of method at(_)ifAbsent(_)
          this.methods["at(1)ifAbsent(1)"] = func57;
          func57.methodName = "at(1)ifAbsent(1)";
          func57.paramCounts = [1, 1];
          func57.paramNames = ["k", "action"];
          func57.definitionLine = 96;
          func57.definitionModule = "fastDict";
          var func59 = function(argcv, var_k) {    // method containsKey(_), line 110
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("containsKey(_)", 0, numArgs - 1);
            }
            setLineNumber(111);    // compilenode call
            var result = GraceDone;    // start native code from line 111
            
            var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table[hc];
                if (! b) break;
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    return (var_removed === b.value ? GraceFalse : GraceTrue);
                }
                hc++;
            };
            return GraceFalse;   // end native code insertion
            return result;
          };    // end of method containsKey(_)
          this.methods["containsKey(1)"] = func59;
          func59.methodName = "containsKey(1)";
          func59.paramCounts = [1];
          func59.paramNames = ["k"];
          func59.definitionLine = 110;
          func59.definitionModule = "fastDict";
          var func60 = function(argcv, var_keys) {    // method removeAllKeys(_), line 123
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAllKeys(_)", 0, numArgs - 1);
            }
            setLineNumber(124);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call62 = selfRequest(this, "mods", [0]);
            var sum63 = request(call62, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call61 = selfRequest(this, "mods:=(1)", [1], sum63);
            setLineNumber(125);    // compilenode block
            var block65 = new GraceBlock(this, 125, 1);
            block65.guard = jsTrue;
            block65.real = function block65(var_k) {
              setLineNumber(125);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call66 = selfRequest(this, "removeKey(1)", [1], var_k);
              return call66;
            };
            let applyMeth65 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth65.methodName = "apply(1)";
            applyMeth65.paramCounts = [1];
            applyMeth65.paramNames = ["k"];
            applyMeth65.definitionLine = 125;
            applyMeth65.definitionModule = "fastDict";
            block65.methods["apply(1)"] = applyMeth65;
            let matchesMeth65 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth65.methodName = "matches(1)";
            matchesMeth65.paramCounts = [1];
            matchesMeth65.paramNames = ["k"];
            matchesMeth65.definitionLine = 125;
            matchesMeth65.definitionModule = "fastDict";
            block65.methods["matches(1)"] = matchesMeth65;
            // call case 2: outer request
            var call64 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_keys, block65);
            return this;
          };    // end of method removeAllKeys(_)
          this.methods["removeAllKeys(1)"] = func60;
          func60.methodName = "removeAllKeys(1)";
          func60.paramCounts = [1];
          func60.paramNames = ["keys"];
          func60.definitionLine = 123;
          func60.definitionModule = "fastDict";
          var func67 = function(argcv, var_k) {    // method removeKey(_), line 128
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeKey(_)", 0, numArgs - 1);
            }
            setLineNumber(129);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call69 = selfRequest(this, "mods", [0]);
            var sum70 = request(call69, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call68 = selfRequest(this, "mods:=(1)", [1], sum70);
            setLineNumber(130);    // compilenode call
            var result = GraceDone;    // start native code from line 130
            
            var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table[hc];
                if (! b) break;
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    if (var_removed === b.value) break;
                    b.value = var_removed;
                    this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                    return this;
                }
                hc++;
            };   // end native code insertion
            setLineNumber(143);    // compilenode string
            var string72 = new GraceString("dictionary does not contain entry with key ");
            var opresult73 = request(string72, "++(1)", [1], var_k);
            var string74 = new GraceString("");
            var opresult75 = request(opresult73, "++(1)", [1], string74);
            // call case 6: other requests
            if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
            var call71 = request(var_NoSuchObject, "raise(1)", [1], opresult75);
            return call71;
          };    // end of method removeKey(_)
          this.methods["removeKey(1)"] = func67;
          func67.methodName = "removeKey(1)";
          func67.paramCounts = [1];
          func67.paramNames = ["k"];
          func67.definitionLine = 128;
          func67.definitionModule = "fastDict";
          var func76 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 145
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeKey(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(146);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call78 = selfRequest(this, "mods", [0]);
            var sum79 = request(call78, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call77 = selfRequest(this, "mods:=(1)", [1], sum79);
            setLineNumber(147);    // compilenode call
            var result = GraceDone;    // start native code from line 147
            
            var hc = request(var_k, "hash", [0])._value;
            while (true) {
                let b = this.data.table[hc];
                if (! b) break;
                if (Grace_isTrue(request(b.key, "==(1)", [1], var_k))) {
                    if (var_removed === b.value) break;
                    b.value = var_removed;
                    this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                    return this;
                }
                hc++;
            };   // end native code insertion
            setLineNumber(160);    // compilenode member
            // call case 6: other requests
            var call80 = request(var_action, "apply", [0]);
            return call80;
          };    // end of method removeKey(_)ifAbsent(_)
          this.methods["removeKey(1)ifAbsent(1)"] = func76;
          func76.methodName = "removeKey(1)ifAbsent(1)";
          func76.paramCounts = [1, 1];
          func76.paramNames = ["k", "action"];
          func76.definitionLine = 145;
          func76.definitionModule = "fastDict";
          var func81 = function(argcv, var_removals) {    // method removeAllValues(_), line 162
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAllValues(_)", 0, numArgs - 1);
            }
            setLineNumber(164);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call83 = selfRequest(this, "mods", [0]);
            var sum84 = request(call83, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call82 = selfRequest(this, "mods:=(1)", [1], sum84);
            setLineNumber(165);    // compilenode call
            var result = GraceDone;    // start native code from line 165
            
            let t = this.data.table
            for (let k in t) {
                if (t.hasOwnProperty(k)) {
                    let b = t[k];
                    if (Grace_isTrue(request(var_removals, 'contains(1)', [1], b.value))) {
                        b.value = var_removed;
                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                    }
                }
            };   // end native code insertion
            return this;
          };    // end of method removeAllValues(_)
          this.methods["removeAllValues(1)"] = func81;
          func81.methodName = "removeAllValues(1)";
          func81.paramCounts = [1];
          func81.paramNames = ["removals"];
          func81.definitionLine = 162;
          func81.definitionModule = "fastDict";
          var func85 = function(argcv, var_v) {    // method removeValue(_), line 178
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeValue(_)", 0, numArgs - 1);
            }
            setLineNumber(180);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call87 = selfRequest(this, "mods", [0]);
            var sum88 = request(call87, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call86 = selfRequest(this, "mods:=(1)", [1], sum88);
            setLineNumber(181);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call89 = selfRequest(this, "numBindings", [0]);
            var var_initialNumBindings = call89;
            setLineNumber(182);    // compilenode call
            var result = GraceDone;    // start native code from line 182
            
            let t = this.data.table
            for (let k in t) {
                if (t.hasOwnProperty(k)) {
                    let b = t[k];
                    if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {
                        b.value = var_removed;
                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                    }
                }
            };   // end native code insertion
            var if90 = GraceDone;
            setLineNumber(193);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call91 = selfRequest(this, "numBindings", [0]);
            var opresult92 = request(call91, "==(1)", [1], var_initialNumBindings);
            if (Grace_isTrue(opresult92)) {
              setLineNumber(194);    // compilenode string
              var string94 = new GraceString("dictionary does not contain any entries with value ");
              var opresult95 = request(string94, "++(1)", [1], var_v);
              var string96 = new GraceString("");
              var opresult97 = request(opresult95, "++(1)", [1], string96);
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call93 = request(var_NoSuchObject, "raise(1)", [1], opresult97);
              if90 = call93;
            }
            return this;
          };    // end of method removeValue(_)
          this.methods["removeValue(1)"] = func85;
          func85.methodName = "removeValue(1)";
          func85.paramCounts = [1];
          func85.paramNames = ["v"];
          func85.definitionLine = 178;
          func85.definitionModule = "fastDict";
          var func98 = function(argcv, var_v, var_action) {    // method removeValue(_)ifAbsent(_), line 198
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeValue(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(200);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call100 = selfRequest(this, "mods", [0]);
            var sum101 = request(call100, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call99 = selfRequest(this, "mods:=(1)", [1], sum101);
            setLineNumber(201);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call102 = selfRequest(this, "numBindings", [0]);
            var var_initialNumBindings = call102;
            setLineNumber(202);    // compilenode call
            var result = GraceDone;    // start native code from line 202
            
            let t = this.data.table
            for (let k in t) {
                if (t.hasOwnProperty(k)) {
                    let b = t[k];
                    if (Grace_isTrue(request(var_v, '==(1)', [1], b.value))) {
                        b.value = var_removed;
                        this.data.numBindings = new GraceNum(this.data.numBindings._value - 1);
                    }
                }
            };   // end native code insertion
            var if103 = GraceDone;
            setLineNumber(213);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call104 = selfRequest(this, "numBindings", [0]);
            var opresult105 = request(call104, "==(1)", [1], var_initialNumBindings);
            if (Grace_isTrue(opresult105)) {
              setLineNumber(214);    // compilenode member
              // call case 6: other requests
              var call106 = request(var_action, "apply", [0]);
              if103 = call106;
            }
            return this;
          };    // end of method removeValue(_)ifAbsent(_)
          this.methods["removeValue(1)ifAbsent(1)"] = func98;
          func98.methodName = "removeValue(1)ifAbsent(1)";
          func98.paramCounts = [1, 1];
          func98.paramNames = ["v", "action"];
          func98.definitionLine = 198;
          func98.definitionModule = "fastDict";
          var func107 = function(argcv) {    // method clear, line 218
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("clear", 0, numArgs - 0);
            }
            setLineNumber(219);    // compilenode member
            // call case 6: other requests
            if (var_prims === undefined) raiseUninitializedVariable("prims");
            var call109 = request(var_prims, "emptyJSObject", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call108 = selfRequest(this, "table:=(1)", [1], call109);
            setLineNumber(220);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call110 = selfRequest(this, "numBindings:=(1)", [1], new GraceNum(0));
            setLineNumber(221);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call112 = selfRequest(this, "mods", [0]);
            var sum113 = request(call112, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call111 = selfRequest(this, "mods:=(1)", [1], sum113);
            return this;
          };    // end of method clear
          this.methods["clear"] = func107;
          func107.methodName = "clear";
          func107.paramCounts = [0];
          func107.paramNames = [];
          func107.definitionLine = 218;
          func107.definitionModule = "fastDict";
          var func114 = function(argcv, var_v) {    // method containsValue(_), line 224
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("containsValue(_)", 0, numArgs - 1);
            }
            setLineNumber(225);    // compilenode block
            var block116 = new GraceBlock(this, 225, 1);
            block116.guard = jsTrue;
            block116.real = function block116(var_each) {
              var if117 = GraceDone;
              setLineNumber(226);    // compilenode op
              var opresult118 = request(var_v, "==(1)", [1], var_each);
              if (Grace_isTrue(opresult118)) {
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if117;
            };
            let applyMeth116 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth116.methodName = "apply(1)";
            applyMeth116.paramCounts = [1];
            applyMeth116.paramNames = ["each"];
            applyMeth116.definitionLine = 225;
            applyMeth116.definitionModule = "fastDict";
            block116.methods["apply(1)"] = applyMeth116;
            let matchesMeth116 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth116.methodName = "matches(1)";
            matchesMeth116.paramCounts = [1];
            matchesMeth116.paramNames = ["each"];
            matchesMeth116.definitionLine = 225;
            matchesMeth116.definitionModule = "fastDict";
            block116.methods["matches(1)"] = matchesMeth116;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call115 = selfRequest(this, "valuesDo(1)", [1], block116);
            return GraceFalse;
          };    // end of method containsValue(_)
          this.methods["containsValue(1)"] = func114;
          func114.methodName = "containsValue(1)";
          func114.paramCounts = [1];
          func114.paramNames = ["v"];
          func114.definitionLine = 224;
          func114.definitionModule = "fastDict";
          var func119 = function(argcv, var_v) {    // method contains(_), line 230
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("contains(_)", 0, numArgs - 1);
            }
            setLineNumber(230);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call120 = selfRequest(this, "containsValue(1)", [1], var_v);
            return call120;
          };    // end of method contains(_)
          this.methods["contains(1)"] = func119;
          func119.methodName = "contains(1)";
          func119.paramCounts = [1];
          func119.paramNames = ["v"];
          func119.definitionLine = 230;
          func119.definitionModule = "fastDict";
          var func121 = function(argcv) {    // method asString, line 231
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(234);    // compilenode call
            var result = GraceDone;    // start native code from line 234
            
            var s = "fastDict⟬";
            var first = true;
            let t = this.data.table;
            for (var h in t) {
                if (t.hasOwnProperty(h)) {
                    var p = t[h];
                    if (var_removed !== p.value) {
                        if (first)
                            first = false;
                        else
                            s += ", ";
                        s += request(p.key, "asString", [0])._value;
                        s += "::";
                        s += request(p.value, "asString", [0])._value;
                    }
                }
            }
            s += "⟭";
            return new GraceString(s);
           // end native code insertion
            return result;
          };    // end of method asString
          this.methods["asString"] = func121;
          func121.methodName = "asString";
          func121.paramCounts = [0];
          func121.paramNames = [];
          func121.definitionLine = 231;
          func121.definitionModule = "fastDict";
          var func122 = function(argcv) {    // method asDebugString, line 256
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asDebugString", 0, numArgs - 0);
            }
            setLineNumber(257);    // compilenode call
            var result = GraceDone;    // start native code from line 257
            
            var s = "fastDict⟬";
            var first = true;
            let t = this.data.table;
            for (var h in t) {
                if (t.hasOwnProperty(h)) {
                    var p = t[h];
                    if (first)
                        first = false;
                    else
                        s += ", ";
                    s += request(p.key, "asDebugString", [0])._value;
                    s += "::";
                    s += request(p.value, "asDebugString", [0])._value;
                }
            }
            s += "⟭";
            return new GraceString(s);
           // end native code insertion
            return result;
          };    // end of method asDebugString
          this.methods["asDebugString"] = func122;
          func122.methodName = "asDebugString";
          func122.paramCounts = [0];
          func122.paramNames = [];
          func122.definitionLine = 256;
          func122.definitionModule = "fastDict";
          var func123 = function(argcv) {    // method keys, line 277
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("keys", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.keys", "fastDict", 277);
            var ouc_init = this.methods["keys$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method keys
          this.methods["keys"] = func123;
          func123.methodName = "keys";
          func123.paramCounts = [0];
          func123.paramNames = [];
          func123.definitionLine = 277;
          func123.definitionModule = "fastDict";
          var func124 = function(argcv, inheritingObject, aliases, exclusions) {    // method keys$build(_,_,_), line 277
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("keys", 0, numArgs - 0);
            }
            setLineNumber(278);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj125_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_fastDict_279");
              this.outer_fastDict_279 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(280);    // reuse call
              if (var_collections === undefined) raiseUninitializedVariable("collections");
              var initFun126 = request(var_collections, "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func127 = function(argcv) {    // method iterator, line 281
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var ouc = emptyGraceObject("dictionary.empty.keys.iterator", "fastDict", 281);
                var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
                ouc_init.call(ouc);
                return ouc;
              };    // end of method iterator
              this.methods["iterator"] = func127;
              func127.methodName = "iterator";
              func127.paramCounts = [0];
              func127.paramNames = [];
              func127.definitionLine = 281;
              func127.definitionModule = "fastDict";
              var func128 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 281
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 4;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var obj129_build = function(ignore, outerObj, aliases, exclusions) {
                  this.closureKeys = this.closureKeys || [];
                  this.closureKeys.push("outer_fastDict_281");
                  this.outer_fastDict_281 = outerObj;
                  const inheritedExclusions = { };
                  for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                      const exMeth = exclusions[eix];
                      inheritedExclusions[exMeth] = this.methods[exMeth]; };
                  this.data.sourceIterator = undefined;
                  var reader130_sourceIterator = function() {  // reader method sourceIterator
                      if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
                      return this.data.sourceIterator;
                  };
                  reader130_sourceIterator.isDef = true;
                  reader130_sourceIterator.confidential = true;
                  this.methods["sourceIterator"] = reader130_sourceIterator;
                  var func131 = function(argcv) {    // method hasNext, line 283
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("hasNext", 0, numArgs - 0);
                    }
                    setLineNumber(283);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call133 = selfRequest(this, "sourceIterator", [0]);
                    var call132 = request(call133, "hasNext", [0]);
                    return call132;
                  };    // end of method hasNext
                  this.methods["hasNext"] = func131;
                  func131.methodName = "hasNext";
                  func131.paramCounts = [0];
                  func131.paramNames = [];
                  func131.definitionLine = 283;
                  func131.definitionModule = "fastDict";
                  var func134 = function(argcv) {    // method next, line 284
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("next", 0, numArgs - 0);
                    }
                    setLineNumber(284);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call137 = selfRequest(this, "sourceIterator", [0]);
                    var call136 = request(call137, "next", [0]);
                    var call135 = request(call136, "key", [0]);
                    return call135;
                  };    // end of method next
                  this.methods["next"] = func134;
                  func134.methodName = "next";
                  func134.paramCounts = [0];
                  func134.paramNames = [];
                  func134.definitionLine = 284;
                  func134.definitionModule = "fastDict";
                  var func138 = function(argcv) {    // method asString, line 285
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("asString", 0, numArgs - 0);
                    }
                    setLineNumber(286);    // compilenode string
                    var string139 = new GraceString("an iterator over keys of ");
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var opresult140 = request(string139, "++(1)", [1], var_sourceDictionary);
                    var string141 = new GraceString("");
                    var opresult142 = request(opresult140, "++(1)", [1], string141);
                    return opresult142;
                  };    // end of method asString
                  this.methods["asString"] = func138;
                  func138.methodName = "asString";
                  func138.paramCounts = [0];
                  func138.paramNames = [];
                  func138.definitionLine = 285;
                  func138.definitionModule = "fastDict";
                  const overridenByAliases = { };
                  for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                      const a = aliases[aix];
                      const newNm = a.newName;
                      const oldNm = a.oldName;
                      overridenByAliases[newNm] = this.methods[newNm];
                      const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                      m.definitionLine = 281;
                      m.definitionModule = "fastDict";
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
                  var obj129_init = function() {    // init of object on line 281
                    setLineNumber(282);    // compilenode member
                    // call case 6: other requests
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var call143 = request(var_sourceDictionary, "bindingsIterator", [0]);
                    this.data.sourceIterator = call143;
                  };
                  return obj129_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj129_init = obj129_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj129_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
              };    // end of method iterator$build(_,_,_)
              this.methods["iterator$build(3)"] = func128;
              func128.methodName = "iterator$build(3)";
              func128.paramCounts = [0];
              func128.paramNames = [];
              func128.definitionLine = 281;
              func128.definitionModule = "fastDict";
              this.data.size = undefined;
              var reader144_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader144_size.isDef = true;
              this.methods["size"] = reader144_size;
              var func145 = function(argcv) {    // method asDebugString, line 290
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(291);    // compilenode string
                var string146 = new GraceString("a lazy sequence over keys of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult147 = request(string146, "++(1)", [1], var_sourceDictionary);
                var string148 = new GraceString("");
                var opresult149 = request(opresult147, "++(1)", [1], string148);
                return opresult149;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func145;
              func145.methodName = "asDebugString";
              func145.paramCounts = [0];
              func145.paramNames = [];
              func145.definitionLine = 290;
              func145.definitionModule = "fastDict";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 279;
                  m.definitionModule = "fastDict";
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
              var obj125_init = function() {    // init of object on line 279
                setLineNumber(289);    // compilenode member
                // call case 6: other requests
                var call150 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call150;
              };
              return obj125_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj125_init = obj125_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj125_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method keys$build(_,_,_)
          this.methods["keys$build(3)"] = func124;
          func124.methodName = "keys$build(3)";
          func124.paramCounts = [0];
          func124.paramNames = [];
          func124.definitionLine = 277;
          func124.definitionModule = "fastDict";
          var func151 = function(argcv) {    // method values, line 295
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("values", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.values", "fastDict", 295);
            var ouc_init = this.methods["values$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method values
          this.methods["values"] = func151;
          func151.methodName = "values";
          func151.paramCounts = [0];
          func151.paramNames = [];
          func151.definitionLine = 295;
          func151.definitionModule = "fastDict";
          var func152 = function(argcv, inheritingObject, aliases, exclusions) {    // method values$build(_,_,_), line 295
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("values", 0, numArgs - 0);
            }
            setLineNumber(296);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj153_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_fastDict_297");
              this.outer_fastDict_297 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(298);    // reuse call
              if (var_collections === undefined) raiseUninitializedVariable("collections");
              var initFun154 = request(var_collections, "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func155 = function(argcv) {    // method iterator, line 299
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var ouc = emptyGraceObject("dictionary.empty.values.iterator", "fastDict", 299);
                var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
                ouc_init.call(ouc);
                return ouc;
              };    // end of method iterator
              this.methods["iterator"] = func155;
              func155.methodName = "iterator";
              func155.paramCounts = [0];
              func155.paramNames = [];
              func155.definitionLine = 299;
              func155.definitionModule = "fastDict";
              var func156 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 299
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 4;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var obj157_build = function(ignore, outerObj, aliases, exclusions) {
                  this.closureKeys = this.closureKeys || [];
                  this.closureKeys.push("outer_fastDict_299");
                  this.outer_fastDict_299 = outerObj;
                  const inheritedExclusions = { };
                  for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                      const exMeth = exclusions[eix];
                      inheritedExclusions[exMeth] = this.methods[exMeth]; };
                  this.data.sourceIterator = undefined;
                  var reader158_sourceIterator = function() {  // reader method sourceIterator
                      if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
                      return this.data.sourceIterator;
                  };
                  reader158_sourceIterator.isDef = true;
                  reader158_sourceIterator.confidential = true;
                  this.methods["sourceIterator"] = reader158_sourceIterator;
                  var func159 = function(argcv) {    // method hasNext, line 302
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("hasNext", 0, numArgs - 0);
                    }
                    setLineNumber(302);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call161 = selfRequest(this, "sourceIterator", [0]);
                    var call160 = request(call161, "hasNext", [0]);
                    return call160;
                  };    // end of method hasNext
                  this.methods["hasNext"] = func159;
                  func159.methodName = "hasNext";
                  func159.paramCounts = [0];
                  func159.paramNames = [];
                  func159.definitionLine = 302;
                  func159.definitionModule = "fastDict";
                  var func162 = function(argcv) {    // method next, line 303
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("next", 0, numArgs - 0);
                    }
                    setLineNumber(303);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call165 = selfRequest(this, "sourceIterator", [0]);
                    var call164 = request(call165, "next", [0]);
                    var call163 = request(call164, "value", [0]);
                    return call163;
                  };    // end of method next
                  this.methods["next"] = func162;
                  func162.methodName = "next";
                  func162.paramCounts = [0];
                  func162.paramNames = [];
                  func162.definitionLine = 303;
                  func162.definitionModule = "fastDict";
                  var func166 = function(argcv) {    // method asString, line 304
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("asString", 0, numArgs - 0);
                    }
                    setLineNumber(305);    // compilenode string
                    var string167 = new GraceString("an iterator over values of ");
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var opresult168 = request(string167, "++(1)", [1], var_sourceDictionary);
                    var string169 = new GraceString("");
                    var opresult170 = request(opresult168, "++(1)", [1], string169);
                    return opresult170;
                  };    // end of method asString
                  this.methods["asString"] = func166;
                  func166.methodName = "asString";
                  func166.paramCounts = [0];
                  func166.paramNames = [];
                  func166.definitionLine = 304;
                  func166.definitionModule = "fastDict";
                  const overridenByAliases = { };
                  for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                      const a = aliases[aix];
                      const newNm = a.newName;
                      const oldNm = a.oldName;
                      overridenByAliases[newNm] = this.methods[newNm];
                      const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                      m.definitionLine = 299;
                      m.definitionModule = "fastDict";
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
                  var obj157_init = function() {    // init of object on line 299
                    setLineNumber(300);    // compilenode member
                    // call case 6: other requests
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var call171 = request(var_sourceDictionary, "bindingsIterator", [0]);
                    this.data.sourceIterator = call171;
                  };
                  return obj157_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj157_init = obj157_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj157_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
              };    // end of method iterator$build(_,_,_)
              this.methods["iterator$build(3)"] = func156;
              func156.methodName = "iterator$build(3)";
              func156.paramCounts = [0];
              func156.paramNames = [];
              func156.definitionLine = 299;
              func156.definitionModule = "fastDict";
              this.data.size = undefined;
              var reader172_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader172_size.isDef = true;
              this.methods["size"] = reader172_size;
              var func173 = function(argcv) {    // method asDebugString, line 309
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(310);    // compilenode string
                var string174 = new GraceString("a lazy sequence over values of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult175 = request(string174, "++(1)", [1], var_sourceDictionary);
                var string176 = new GraceString("");
                var opresult177 = request(opresult175, "++(1)", [1], string176);
                return opresult177;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func173;
              func173.methodName = "asDebugString";
              func173.paramCounts = [0];
              func173.paramNames = [];
              func173.definitionLine = 309;
              func173.definitionModule = "fastDict";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 297;
                  m.definitionModule = "fastDict";
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
              var obj153_init = function() {    // init of object on line 297
                setLineNumber(308);    // compilenode member
                // call case 6: other requests
                var call178 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call178;
              };
              return obj153_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj153_init = obj153_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj153_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method values$build(_,_,_)
          this.methods["values$build(3)"] = func152;
          func152.methodName = "values$build(3)";
          func152.paramCounts = [0];
          func152.paramNames = [];
          func152.definitionLine = 295;
          func152.definitionModule = "fastDict";
          var func179 = function(argcv) {    // method bindings, line 314
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindings", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.bindings", "fastDict", 314);
            var ouc_init = this.methods["bindings$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method bindings
          this.methods["bindings"] = func179;
          func179.methodName = "bindings";
          func179.paramCounts = [0];
          func179.paramNames = [];
          func179.definitionLine = 314;
          func179.definitionModule = "fastDict";
          var func180 = function(argcv, inheritingObject, aliases, exclusions) {    // method bindings$build(_,_,_), line 314
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindings", 0, numArgs - 0);
            }
            setLineNumber(315);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj181_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_fastDict_316");
              this.outer_fastDict_316 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(317);    // reuse call
              if (var_collections === undefined) raiseUninitializedVariable("collections");
              var initFun182 = request(var_collections, "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func183 = function(argcv) {    // method iterator, line 318
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                setLineNumber(318);    // compilenode member
                // call case 6: other requests
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var call184 = request(var_sourceDictionary, "bindingsIterator", [0]);
                return call184;
              };    // end of method iterator
              this.methods["iterator"] = func183;
              func183.methodName = "iterator";
              func183.paramCounts = [0];
              func183.paramNames = [];
              func183.definitionLine = 318;
              func183.definitionModule = "fastDict";
              this.data.size = undefined;
              var reader185_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader185_size.isDef = true;
              this.methods["size"] = reader185_size;
              var func186 = function(argcv) {    // method asDebugString, line 321
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(322);    // compilenode string
                var string187 = new GraceString("a lazy sequence over bindings of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult188 = request(string187, "++(1)", [1], var_sourceDictionary);
                var string189 = new GraceString("");
                var opresult190 = request(opresult188, "++(1)", [1], string189);
                return opresult190;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func186;
              func186.methodName = "asDebugString";
              func186.paramCounts = [0];
              func186.paramNames = [];
              func186.definitionLine = 321;
              func186.definitionModule = "fastDict";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 316;
                  m.definitionModule = "fastDict";
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
              var obj181_init = function() {    // init of object on line 316
                setLineNumber(320);    // compilenode member
                // call case 6: other requests
                var call191 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call191;
              };
              return obj181_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj181_init = obj181_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj181_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method bindings$build(_,_,_)
          this.methods["bindings$build(3)"] = func180;
          func180.methodName = "bindings$build(3)";
          func180.paramCounts = [0];
          func180.paramNames = [];
          func180.definitionLine = 314;
          func180.definitionModule = "fastDict";
          var func192 = function(argcv) {    // method iterator, line 326
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            setLineNumber(326);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call194 = selfRequest(this, "values", [0]);
            var call193 = request(call194, "iterator", [0]);
            return call193;
          };    // end of method iterator
          this.methods["iterator"] = func192;
          func192.methodName = "iterator";
          func192.paramCounts = [0];
          func192.paramNames = [];
          func192.definitionLine = 326;
          func192.definitionModule = "fastDict";
          var func195 = function(argcv) {    // method bindingsIterator, line 327
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindingsIterator", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.bindingsIterator", "fastDict", 327);
            var ouc_init = this.methods["bindingsIterator$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method bindingsIterator
          this.methods["bindingsIterator"] = func195;
          func195.methodName = "bindingsIterator";
          func195.paramCounts = [0];
          func195.paramNames = [];
          func195.definitionLine = 327;
          func195.definitionModule = "fastDict";
          var func196 = function(argcv, inheritingObject, aliases, exclusions) {    // method bindingsIterator$build(_,_,_), line 327
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindingsIterator", 0, numArgs - 0);
            }
            var obj197_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_fastDict_327");
              this.outer_fastDict_327 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              this.data.iMods = undefined;
              var reader198_iMods = function() {  // reader method iMods
                  if (this.data.iMods === undefined) raiseUninitializedVariable("iMods");
                  return this.data.iMods;
              };
              reader198_iMods.isDef = true;
              reader198_iMods.confidential = true;
              this.methods["iMods"] = reader198_iMods;
              this.data.count = undefined;
              var reader199_count = function() {  // reader method count
                  if (this.data.count === undefined) raiseUninitializedVariable("count");
                  return this.data.count;
              };
              reader199_count.isVar = true;
              reader199_count.confidential = true;
              this.methods["count"] = reader199_count;
              var writer200_count = function(argcv, n) {   // writer method count:=(_)
                this.data.count = n;
                return GraceDone;
              };
              writer200_count.confidential = true;
              this.methods["count:=(1)"] = writer200_count;
              this.data.subjectDictionary = undefined;
              var reader201_subjectDictionary = function() {  // reader method subjectDictionary
                  if (this.data.subjectDictionary === undefined) raiseUninitializedVariable("subjectDictionary");
                  return this.data.subjectDictionary;
              };
              reader201_subjectDictionary.isDef = true;
              reader201_subjectDictionary.confidential = true;
              this.methods["subjectDictionary"] = reader201_subjectDictionary;
              var func202 = function(argcv) {    // method hasNext, line 334
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("hasNext", 0, numArgs - 0);
                }
                setLineNumber(334);    // compilenode member
                // call case 2: outer request
                var call203 = selfRequest(this.outer_fastDict_327, "size", [0]);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call204 = selfRequest(this, "count", [0]);
                var opresult205 = request(call203, "\u2265(1)", [1], call204);
                return opresult205;
              };    // end of method hasNext
              this.methods["hasNext"] = func202;
              func202.methodName = "hasNext";
              func202.paramCounts = [0];
              func202.paramNames = [];
              func202.definitionLine = 334;
              func202.definitionModule = "fastDict";
              var func206 = function(argcv) {    // method next, line 335
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("next", 0, numArgs - 0);
                }
                var if207 = GraceDone;
                setLineNumber(336);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call208 = selfRequest(this, "iMods", [0]);
                // call case 2: outer request
                var call209 = selfRequest(this.outer_fastDict_327, "mods", [0]);
                var opresult210 = request(call208, "\u2260(1)", [1], call209);
                if (Grace_isTrue(opresult210)) {
                  setLineNumber(337);    // compilenode member
                  // call case 2: outer request
                  var call212 = selfRequest(this.outer_fastDict_327, "asString", [0]);
                  // call case 6: other requests
                  if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                  var call211 = request(var_ConcurrentModification, "raise(1)", [1], call212);
                  if207 = call211;
                }
                var if213 = GraceDone;
                setLineNumber(339);    // compilenode member
                // call case 2: outer request
                var call214 = selfRequest(this.outer_fastDict_327, "size", [0]);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call215 = selfRequest(this, "count", [0]);
                var opresult216 = request(call214, "<(1)", [1], call215);
                if (Grace_isTrue(opresult216)) {
                  var string218 = new GraceString("over ");
                  // call case 2: outer request
                  var call219 = selfRequest(this.outer_fastDict_327, "asString", [0]);
                  var opresult220 = request(string218, "++(1)", [1], call219);
                  var string221 = new GraceString("");
                  var opresult222 = request(opresult220, "++(1)", [1], string221);
                  // call case 6: other requests
                  if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                  var call217 = request(var_IteratorExhausted, "raise(1)", [1], opresult222);
                  if213 = call217;
                }
                setLineNumber(340);    // compilenode call
                var result = GraceDone;    // start native code from line 340
                
                let binding = request(var_prelude, 'binding', [0]);
                while (true) {
                    let nextKey = this.data.allTheKeys.shift();
                    let b = this.data.subjectDictionary.data.table[nextKey];
                        if (var_removed !== b.value) {
                            this.data.count = new GraceNum(this.data.count._value + 1);
                            return request(binding, 'key(1)value(1)',  [1,1], b.key, b.value);
                        }
                }
                   // end native code insertion
                return result;
              };    // end of method next
              this.methods["next"] = func206;
              func206.methodName = "next";
              func206.paramCounts = [0];
              func206.paramNames = [];
              func206.definitionLine = 335;
              func206.definitionModule = "fastDict";
              this.mutable = true;
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 327;
                  m.definitionModule = "fastDict";
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
              var obj197_init = function() {    // init of object on line 327
                setLineNumber(329);    // compilenode member
                // call case 2: outer request
                var call223 = selfRequest(this.outer_fastDict_327, "mods", [0]);
                this.data.iMods = call223;
                setLineNumber(330);    // compilenode num
                this.data.count = new GraceNum(1);
                setLineNumber(331);    // compilenode outer
                this.data.subjectDictionary = this.outer_fastDict_327;
                setLineNumber(332);    // compilenode call
                var result = GraceDone;    // start native code from line 332
                this.data.allTheKeys = Object.keys(this.data.subjectDictionary.data.table);
               // end native code insertion
              };
              return obj197_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj197_init = obj197_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj197_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method bindingsIterator$build(_,_,_)
          this.methods["bindingsIterator$build(3)"] = func196;
          func196.methodName = "bindingsIterator$build(3)";
          func196.paramCounts = [0];
          func196.paramNames = [];
          func196.definitionLine = 327;
          func196.definitionModule = "fastDict";
          var func224 = function(argcv, var_block2) {    // method keysAndValuesDo(_), line 353
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
            }
            setLineNumber(354);    // compilenode call
            var result = GraceDone;    // start native code from line 354
            
            let t = this.data.table;
            let iMods = this.data.mods._value;
            for (var h in t) {
                if (t.hasOwnProperty(h)) {
                    let p = t[h];
                    if (var_removed !== p.value) {
                        if (iMods !== this.data.mods._value) 
                            request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                        request(var_block2, 'apply(2)', [2], p.key, p.value);
                    }
                }
            }
               // end native code insertion
            return result;
          };    // end of method keysAndValuesDo(_)
          this.methods["keysAndValuesDo(1)"] = func224;
          func224.methodName = "keysAndValuesDo(1)";
          func224.paramCounts = [1];
          func224.paramNames = ["block2"];
          func224.definitionLine = 353;
          func224.definitionModule = "fastDict";
          var func225 = function(argcv, var_block1) {    // method keysDo(_), line 369
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("keysDo(_)", 0, numArgs - 1);
            }
            setLineNumber(370);    // compilenode call
            var result = GraceDone;    // start native code from line 370
            
            let t = this.data.table;
            let iMods = this.data.mods._value;
            for (var h in t) {
                if (t.hasOwnProperty(h)) {
                    let p = t[h];
                    if (var_removed !== p.value) {
                        if (iMods !== this.data.mods._value) 
                            request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                        request(var_block1, 'apply(1)', [1], p.key);
                    }
                }
            }
               // end native code insertion
            return result;
          };    // end of method keysDo(_)
          this.methods["keysDo(1)"] = func225;
          func225.methodName = "keysDo(1)";
          func225.paramCounts = [1];
          func225.paramNames = ["block1"];
          func225.definitionLine = 369;
          func225.definitionModule = "fastDict";
          var func226 = function(argcv, var_block1) {    // method valuesDo(_), line 385
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("valuesDo(_)", 0, numArgs - 1);
            }
            setLineNumber(386);    // compilenode call
            var result = GraceDone;    // start native code from line 386
            
            let t = this.data.table;
            let iMods = this.data.mods._value;
            for (var h in t) {
                if (t.hasOwnProperty(h)) {
                    let p = t[h];
                    if (var_removed != p.value) {
                        if (iMods !== this.data.mods._value) 
                            request(var_ConcurrentModification, "raise(1)", [1], request(this, "asDebugString", [0]));
                        request(var_block1, 'apply(1)', [1], p.value);
                    }
                }
            }
               // end native code insertion
            return result;
          };    // end of method valuesDo(_)
          this.methods["valuesDo(1)"] = func226;
          func226.methodName = "valuesDo(1)";
          func226.paramCounts = [1];
          func226.paramNames = ["block1"];
          func226.definitionLine = 385;
          func226.definitionModule = "fastDict";
          var func227 = function(argcv, var_block1) {    // method do(_), line 401
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("do(_)", 0, numArgs - 1);
            }
            setLineNumber(401);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call228 = selfRequest(this, "valuesDo(1)", [1], var_block1);
            return call228;
          };    // end of method do(_)
          this.methods["do(1)"] = func227;
          func227.methodName = "do(1)";
          func227.paramCounts = [1];
          func227.paramNames = ["block1"];
          func227.definitionLine = 401;
          func227.definitionModule = "fastDict";
          var func229 = function(argcv, var_other) {    // method ==(_), line 403
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("==(_)", 0, numArgs - 1);
            }
            setLineNumber(404);    // compilenode matchcase
            var cases230 = [];
            var block231 = new GraceBlock(this, 404, 1);
            // call case 6: other requests
            if (var_collections === undefined) raiseUninitializedVariable("collections");
            var call232 = request(var_collections, "ComparableToDictionary", [0, 2], var_K, var_T);
            block231.paramTypes = [call232];
            var matches233 = function(var_o) {
              // call case 6: other requests
              if (var_collections === undefined) raiseUninitializedVariable("collections");
              var call234 = request(var_collections, "ComparableToDictionary", [0, 2], var_K, var_T);
              if (!Grace_isTrue(request(call234, "matches(1)", [1], var_o)))
                  return false;
              return true;
            };
            block231.guard = matches233;
            block231.real = function block231(var_o) {
              var if235 = GraceDone;
              setLineNumber(405);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call236 = selfRequest(this, "size", [0]);
              // call case 6: other requests
              var call237 = request(var_o, "size", [0]);
              var opresult238 = request(call236, "\u2260(1)", [1], call237);
              if (Grace_isTrue(opresult238)) {
                throw new ReturnException(GraceFalse, returnTarget);
              }
              setLineNumber(406);    // compilenode block
              var block240 = new GraceBlock(this, 406, 2);
              block240.guard = jsTrue;
              block240.real = function block240(var_k, var_v) {
                var if241 = GraceDone;
                setLineNumber(407);    // compilenode block
                var block243 = new GraceBlock(this, 407, 0);
                block243.guard = jsTrue;
                block243.real = function block243() {
                  setLineNumber(407);    // compilenode return
                  throw new ReturnException(GraceFalse, returnTarget);
                };
                let applyMeth243 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth243.methodName = "apply";
                applyMeth243.paramCounts = [0];
                applyMeth243.paramNames = [];
                applyMeth243.definitionLine = 407;
                applyMeth243.definitionModule = "fastDict";
                block243.methods["apply"] = applyMeth243;
                // call case 6: other requests
                var call242 = request(var_o, "at(1)ifAbsent(1)", [1, 1], var_k, block243);
                var opresult244 = request(call242, "\u2260(1)", [1], var_v);
                if (Grace_isTrue(opresult244)) {
                  setLineNumber(408);    // compilenode return
                  throw new ReturnException(GraceFalse, returnTarget);
                }
                return if241;
              };
              let applyMeth240 = function apply_2 (argcv, ...args) {
                  if (this.guard.apply(this.receiver, args))
                      return this.real.apply(this.receiver, args);
                  badBlockArgs.apply(this, args);
              };
              applyMeth240.methodName = "apply(2)";
              applyMeth240.paramCounts = [2];
              applyMeth240.paramNames = ["k", "v"];
              applyMeth240.definitionLine = 406;
              applyMeth240.definitionModule = "fastDict";
              block240.methods["apply(2)"] = applyMeth240;
              let matchesMeth240 = function matches_2 (argcv, ...args) {
                  return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
              };
              matchesMeth240.methodName = "matches(2)";
              matchesMeth240.paramCounts = [2];
              matchesMeth240.paramNames = ["k", "v"];
              matchesMeth240.definitionLine = 406;
              matchesMeth240.definitionModule = "fastDict";
              block240.methods["matches(2)"] = matchesMeth240;
              // call case 4: self request with 1 args and 0 typeArgs 
              var call239 = selfRequest(this, "keysAndValuesDo(1)", [1], block240);
              setLineNumber(411);    // compilenode return
              throw new ReturnException(GraceTrue, returnTarget);
            };
            let applyMeth231 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth231.methodName = "apply(1)";
            applyMeth231.paramCounts = [1];
            applyMeth231.paramNames = ["o"];
            applyMeth231.definitionLine = 404;
            applyMeth231.definitionModule = "fastDict";
            block231.methods["apply(1)"] = applyMeth231;
            let matchesMeth231 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth231.methodName = "matches(1)";
            matchesMeth231.paramCounts = [1];
            matchesMeth231.paramNames = ["o"];
            matchesMeth231.definitionLine = 404;
            matchesMeth231.definitionModule = "fastDict";
            block231.methods["matches(1)"] = matchesMeth231;
            cases230.push(block231);
            setLineNumber(412);    // compilenode block
            var block245 = new GraceBlock(this, 412, 0);
            block245.guard = jsTrue;
            block245.real = function block245() {
              setLineNumber(413);    // compilenode return
              throw new ReturnException(GraceFalse, returnTarget);
            };
            let applyMeth245 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth245.methodName = "apply";
            applyMeth245.paramCounts = [0];
            applyMeth245.paramNames = [];
            applyMeth245.definitionLine = 412;
            applyMeth245.definitionModule = "fastDict";
            block245.methods["apply"] = applyMeth245;
            setLineNumber(404);    // compilematchcase
            var matchres230 = matchCase(var_other,cases230,block245);
            return matchres230;
          };    // end of method ==(_)
          this.methods["==(1)"] = func229;
          func229.methodName = "==(1)";
          func229.paramCounts = [1];
          func229.paramNames = ["other"];
          func229.definitionLine = 403;
          func229.definitionModule = "fastDict";
          var func246 = function(argcv, var_other) {    // method ≠(_), line 416
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("≠(_)", 0, numArgs - 1);
            }
            setLineNumber(416);    // compilenode member
            // call case 6: other requests
            var opresult248 = request(this, "==(1)", [1], var_other);
            var call247 = request(opresult248, "not", [0]);
            return call247;
          };    // end of method ≠(_)
          this.methods["\u2260(1)"] = func246;
          func246.methodName = "\u2260(1)";
          func246.paramCounts = [1];
          func246.paramNames = ["other"];
          func246.definitionLine = 416;
          func246.definitionModule = "fastDict";
          var func249 = function(argcv) {    // method copy, line 418
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("copy", 0, numArgs - 0);
            }
            setLineNumber(419);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call251 = selfRequest(importedModules["fastDict"], "dictionary", [0]);
            var call250 = request(call251, "empty", [0]);
            var var_newCopy = call250;
            setLineNumber(420);    // compilenode block
            var block253 = new GraceBlock(this, 420, 2);
            block253.guard = jsTrue;
            block253.real = function block253(var_k, var_v) {
              setLineNumber(421);    // compilenode call
              // call case 6: other requests
              if (var_newCopy === undefined) raiseUninitializedVariable("newCopy");
              var call254 = request(var_newCopy, "at(1)put(1)", [1, 1], var_k, var_v);
              return call254;
            };
            let applyMeth253 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth253.methodName = "apply(2)";
            applyMeth253.paramCounts = [2];
            applyMeth253.paramNames = ["k", "v"];
            applyMeth253.definitionLine = 420;
            applyMeth253.definitionModule = "fastDict";
            block253.methods["apply(2)"] = applyMeth253;
            let matchesMeth253 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth253.methodName = "matches(2)";
            matchesMeth253.paramCounts = [2];
            matchesMeth253.paramNames = ["k", "v"];
            matchesMeth253.definitionLine = 420;
            matchesMeth253.definitionModule = "fastDict";
            block253.methods["matches(2)"] = matchesMeth253;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call252 = selfRequest(this, "keysAndValuesDo(1)", [1], block253);
            return var_newCopy;
          };    // end of method copy
          this.methods["copy"] = func249;
          func249.methodName = "copy";
          func249.paramCounts = [0];
          func249.paramNames = [];
          func249.definitionLine = 418;
          func249.definitionModule = "fastDict";
          var func255 = function(argcv, var_other) {    // method ++(_), line 427
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("++(_)", 0, numArgs - 1);
            }
            setLineNumber(427);    // compilenode member
            // call case 2: outer request
            var call256 = selfRequest(importedModules["fastDict"], "Collection", [0]);
            assertTypeOrMsg(var_other, call256, "argument to request of `++(_)`", "Collection");
            setLineNumber(430);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call257 = selfRequest(this, "copy", [0]);
            var var_newDict = call257;
            setLineNumber(431);    // compilenode block
            var block259 = new GraceBlock(this, 431, 2);
            block259.guard = jsTrue;
            block259.real = function block259(var_k, var_v) {
              setLineNumber(432);    // compilenode call
              // call case 6: other requests
              if (var_newDict === undefined) raiseUninitializedVariable("newDict");
              var call260 = request(var_newDict, "at(1)put(1)", [1, 1], var_k, var_v);
              return call260;
            };
            let applyMeth259 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth259.methodName = "apply(2)";
            applyMeth259.paramCounts = [2];
            applyMeth259.paramNames = ["k", "v"];
            applyMeth259.definitionLine = 431;
            applyMeth259.definitionModule = "fastDict";
            block259.methods["apply(2)"] = applyMeth259;
            let matchesMeth259 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth259.methodName = "matches(2)";
            matchesMeth259.paramCounts = [2];
            matchesMeth259.paramNames = ["k", "v"];
            matchesMeth259.definitionLine = 431;
            matchesMeth259.definitionModule = "fastDict";
            block259.methods["matches(2)"] = matchesMeth259;
            // call case 6: other requests
            var call258 = request(var_other, "keysAndValuesDo(1)", [1], block259);
            setLineNumber(434);    // compilenode return
            return var_newDict;
          };    // end of method ++(_)
          this.methods["++(1)"] = func255;
          func255.methodName = "++(1)";
          func255.paramCounts = [1];
          func255.paramNames = ["other"];
          func255.definitionLine = 427;
          func255.definitionModule = "fastDict";
          var func261 = function(argcv, var_other) {    // method --(_), line 437
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("--(_)", 0, numArgs - 1);
            }
            setLineNumber(437);    // compilenode member
            // call case 2: outer request
            var call262 = selfRequest(importedModules["fastDict"], "Collection", [0]);
            assertTypeOrMsg(var_other, call262, "argument to request of `--(_)`", "Collection");
            setLineNumber(439);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call264 = selfRequest(importedModules["fastDict"], "dictionary", [0]);
            var call263 = request(call264, "empty", [0]);
            var var_newDict = call263;
            setLineNumber(440);    // compilenode block
            var block266 = new GraceBlock(this, 440, 2);
            block266.guard = jsTrue;
            block266.real = function block266(var_k, var_v) {
              var if267 = GraceDone;
              setLineNumber(441);    // compilenode call
              // call case 6: other requests
              // call case 6: other requests
              var call269 = request(var_other, "containsKey(1)", [1], var_k);
              var call268 = request(call269, "prefix!", [0]);
              if (Grace_isTrue(call268)) {
                setLineNumber(442);    // compilenode call
                // call case 6: other requests
                if (var_newDict === undefined) raiseUninitializedVariable("newDict");
                var call270 = request(var_newDict, "at(1)put(1)", [1, 1], var_k, var_v);
                if267 = call270;
              }
              return if267;
            };
            let applyMeth266 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth266.methodName = "apply(2)";
            applyMeth266.paramCounts = [2];
            applyMeth266.paramNames = ["k", "v"];
            applyMeth266.definitionLine = 440;
            applyMeth266.definitionModule = "fastDict";
            block266.methods["apply(2)"] = applyMeth266;
            let matchesMeth266 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth266.methodName = "matches(2)";
            matchesMeth266.paramCounts = [2];
            matchesMeth266.paramNames = ["k", "v"];
            matchesMeth266.definitionLine = 440;
            matchesMeth266.definitionModule = "fastDict";
            block266.methods["matches(2)"] = matchesMeth266;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call265 = selfRequest(this, "keysAndValuesDo(1)", [1], block266);
            setLineNumber(445);    // compilenode return
            return var_newDict;
          };    // end of method --(_)
          this.methods["--(1)"] = func261;
          func261.methodName = "--(1)";
          func261.paramCounts = [1];
          func261.paramNames = ["other"];
          func261.definitionLine = 437;
          func261.definitionModule = "fastDict";
          var func271 = function(argcv, var_target) {    // method >>(_), line 448
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError(">>(_)", 0, numArgs - 1);
            }
            setLineNumber(449);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call272 = selfRequest(this, "bindings", [0]);
            var opresult273 = request(var_target, "<<(1)", [1], call272);
            return opresult273;
          };    // end of method >>(_)
          this.methods[">>(1)"] = func271;
          func271.methodName = ">>(1)";
          func271.paramCounts = [1];
          func271.paramNames = ["target"];
          func271.definitionLine = 448;
          func271.definitionModule = "fastDict";
          var func274 = function(argcv, var_source) {    // method <<(_), line 452
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("<<(_)", 0, numArgs - 1);
            }
            setLineNumber(453);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call275 = selfRequest(this, "addAll(1)", [1], var_source);
            return call275;
          };    // end of method <<(_)
          this.methods["<<(1)"] = func274;
          func274.methodName = "<<(1)";
          func274.paramCounts = [1];
          func274.paramNames = ["source"];
          func274.definitionLine = 452;
          func274.definitionModule = "fastDict";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 46;
              m.definitionModule = "fastDict";
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
          var obj29_init = function() {    // init of object on line 46
            setLineNumber(49);    // compilenode num
            this.data.mods = new GraceNum(0);
            setLineNumber(50);    // compilenode num
            this.data.numBindings = new GraceNum(0);
            setLineNumber(51);    // compilenode member
            // call case 6: other requests
            if (var_prims === undefined) raiseUninitializedVariable("prims");
            var call276 = request(var_prims, "emptyJSObject", [0]);
            this.data.table = call276;
          };
          return obj29_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj29_init = obj29_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj29_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method empty$build(_,_,_)
      this.methods["empty$build(3)"] = func28;
      func28.methodName = "empty$build(3)";
      func28.paramCounts = [0];
      func28.paramNames = [];
      func28.definitionLine = 46;
      func28.definitionModule = "fastDict";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 27;
          m.definitionModule = "fastDict";
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
      var obj9_init = function() {    // init of object on line 27
      };
      return obj9_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj9_init = obj9_build.call(inheritingObject, null, this, aliases, exclusions, var_K, var_T);
    return obj9_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method dictionary$build(_,_,_)
  this.methods["dictionary$build(3)"] = func8;
  func8.methodName = "dictionary$build(3)";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.typeParamNames = ["K", "T"];
  func8.definitionLine = 27;
  func8.definitionModule = "fastDict";
  setLineNumber(4);    // compilenode string
  var string278 = new GraceString("ConcurrentModification");
  // call case 6: other requests
  // call case 2: outer request
  var call279 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call277 = request(call279, "refine(1)", [1], string278);
  var var_ConcurrentModification = call277;
  var reader280_ConcurrentModification = function() {  // reader method ConcurrentModification
      if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
      return var_ConcurrentModification;
  };
  reader280_ConcurrentModification.isDef = true;
  this.methods["ConcurrentModification"] = reader280_ConcurrentModification;
  setLineNumber(8);    // compilenode member
  // call case 6: other requests
  var call281 = request(var_collections, "NoSuchObject", [0]);
  var var_NoSuchObject = call281;
  var reader282_NoSuchObject = function() {  // reader method NoSuchObject
      if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
      return var_NoSuchObject;
  };
  reader282_NoSuchObject.isDef = true;
  reader282_NoSuchObject.confidential = true;
  this.methods["NoSuchObject"] = reader282_NoSuchObject;
  setLineNumber(9);    // compilenode member
  // call case 6: other requests
  var call283 = request(var_collections, "IteratorExhausted", [0]);
  var var_IteratorExhausted = call283;
  var reader284_IteratorExhausted = function() {  // reader method IteratorExhausted
      if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
      return var_IteratorExhausted;
  };
  reader284_IteratorExhausted.isDef = true;
  reader284_IteratorExhausted.confidential = true;
  this.methods["IteratorExhausted"] = reader284_IteratorExhausted;
  setLineNumber(11);    // compilenode object
  var obj285_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_fastDict_11");
    this.outer_fastDict_11 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func286 = function(argcv) {    // method emptyJSObject, line 12
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("emptyJSObject", 0, numArgs - 0);
      }
      setLineNumber(13);    // compilenode call
      var result = GraceDone;    // start native code from line 13
      return {};
       // end native code insertion
      return result;
    };    // end of method emptyJSObject
    this.methods["emptyJSObject"] = func286;
    func286.methodName = "emptyJSObject";
    func286.paramCounts = [0];
    func286.paramNames = [];
    func286.definitionLine = 12;
    func286.definitionModule = "fastDict";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 11;
        m.definitionModule = "fastDict";
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
    var obj285_init = function() {    // init of object on line 11
    };
    return obj285_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj285 = emptyGraceObject("prims", "fastDict", 11);
  var obj285_init = obj285_build.call(obj285, null, this, [], []);
  obj285_init.call(obj285);  // end of compileobject
  var var_prims = obj285;
  var reader287_prims = function() {  // reader method prims
      if (var_prims === undefined) raiseUninitializedVariable("prims");
      return var_prims;
  };
  reader287_prims.isDef = true;
  reader287_prims.confidential = true;
  this.methods["prims"] = reader287_prims;
  setLineNumber(18);    // compilenode object
  var obj288_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_fastDict_18");
    this.outer_fastDict_18 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func289 = function(argcv) {    // method asString, line 21
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(21);    // compilenode string
      var string290 = new GraceString("removed");
      return string290;
    };    // end of method asString
    this.methods["asString"] = func289;
    func289.methodName = "asString";
    func289.paramCounts = [0];
    func289.paramNames = [];
    func289.definitionLine = 21;
    func289.definitionModule = "fastDict";
    var func291 = function(argcv, var_other) {    // method ==(_), line 22
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("==(_)", 0, numArgs - 1);
      }
      setLineNumber(22);    // compilenode call
      // call case 4: self request with 1 args and 0 typeArgs 
      var call292 = selfRequest(this, "isMe(1)", [1], var_other);
      return call292;
    };    // end of method ==(_)
    this.methods["==(1)"] = func291;
    func291.methodName = "==(1)";
    func291.paramCounts = [1];
    func291.paramNames = ["other"];
    func291.definitionLine = 22;
    func291.definitionModule = "fastDict";
    var func293 = function(argcv, var_other) {    // method ≠(_), line 23
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("≠(_)", 0, numArgs - 1);
      }
      setLineNumber(23);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 1 args and 0 typeArgs 
      var call295 = selfRequest(this, "isMe(1)", [1], var_other);
      var call294 = request(call295, "not", [0]);
      return call294;
    };    // end of method ≠(_)
    this.methods["\u2260(1)"] = func293;
    func293.methodName = "\u2260(1)";
    func293.paramCounts = [1];
    func293.paramNames = ["other"];
    func293.definitionLine = 23;
    func293.definitionModule = "fastDict";
    var func296 = function(argcv) {    // method hash, line 24
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("hash", 0, numArgs - 0);
      }
      setLineNumber(24);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call297 = selfRequest(this, "myIdentityHash", [0]);
      return call297;
    };    // end of method hash
    this.methods["hash"] = func296;
    func296.methodName = "hash";
    func296.paramCounts = [0];
    func296.paramNames = [];
    func296.definitionLine = 24;
    func296.definitionModule = "fastDict";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 18;
        m.definitionModule = "fastDict";
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
    var obj288_init = function() {    // init of object on line 18
    };
    return obj288_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj288 = emptyGraceObject("removed", "fastDict", 18);
  var obj288_init = obj288_build.call(obj288, null, this, [], []);
  obj288_init.call(obj288);  // end of compileobject
  var var_removed = obj288;
  var reader298_removed = function() {  // reader method removed
      if (var_removed === undefined) raiseUninitializedVariable("removed");
      return var_removed;
  };
  reader298_removed.isDef = true;
  reader298_removed.confidential = true;
  this.methods["removed"] = reader298_removed;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_fastDict = gracecode_fastDict;
if (typeof window !== "undefined")
  window.gracecode_fastDict = gracecode_fastDict;
gracecode_fastDict.imports = ["collectionsPrelude"];
gracecode_fastDict.definitionModule = "fastDict";
gracecode_fastDict.definitionLine = 1;
