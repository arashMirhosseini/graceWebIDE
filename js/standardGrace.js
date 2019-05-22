if (typeof gctCache !== "undefined")
  gctCache["standardGrace"] = "classes:\nconfidential:\n classUid(1)\n hashMap\n mirror\ndialect:\nfresh-methods:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n NotPattern(1)\n OrPattern\n OrPattern(2)\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n equality\n identityEquality\n methods\n point2Dx(1)y(1)\nfresh:AndPattern:\n new(2)\nfresh:AndPattern(2):\n &(1)\n matches(1)\n prefix\u00ac\n |(1)\nfresh:BaseType:\n &(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asString\n hash\n matchHook(1)\n matches(1)\n setName(1)\n |(1)\n \u2260(1)\nfresh:BasicPattern:\n &(1)\n prefix\u00ac\n |(1)\nfresh:NotPattern(1):\n &(1)\n matches(1)\n prefix\u00ac\n |(1)\nfresh:OrPattern:\n new(2)\nfresh:OrPattern(2):\n &(1)\n matches(1)\n prefix\u00ac\n |(1)\nfresh:TypeIntersection:\n new(2)\nfresh:TypeSubtraction:\n new(2)\nfresh:TypeUnion:\n new(2)\nfresh:TypeVariant:\n new(2)\nfresh:equality:\n ::(1)\n ==(1)\n hash\n \u2260(1)\nfresh:identityEquality:\n ::(1)\n ==(1)\n hash\n \u2260(1)\nfresh:methods:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n valueOf(1)\nfresh:point2Dx(1)y(1):\n *(1)\n +(1)\n -(1)\n /(1)\n ::(1)\n ==(1)\n asDebugString\n asString\n distanceTo(1)\n dot(1)\n hash\n length\n norm\n prefix-\n reverseDivideNumber(1)\n reverseMinusNumber(1)\n reversePlusNumber(1)\n reverseTimesNumber(1)\n x\n y\n \u2260(1)\n \u22c5(1)\nmethodtypes-of:Binding\u27e6K, T\u27e7:\nmethodtypes-of:Collection\u27e6T\u27e7:\nmethodtypes-of:Dictionary\u27e6K, T\u27e7:\nmethodtypes-of:Enumerable\u27e6T\u27e7:\nmethodtypes-of:EqualityObject:\n & 3\n & Object\n 3 ::(o:Object) \u2192 Binding\n 3 ==(other:Object) \u2192 Boolean\n 3 hash \u2192 Number\n 3 \u2260(other:Object) \u2192 Boolean\nmethodtypes-of:ExceptionKind:\n & 2\n & Pattern\n 2 parent \u2192 ExceptionKind\n 2 raise(message:String) \u2192 Done\n 2 raise(message:String)with(argument:Object) \u2192 Done\n 2 refine(parentKind:ExceptionKind) \u2192 ExceptionKind\nmethodtypes-of:Expandable\u27e6T\u27e7:\nmethodtypes-of:Extractable:\n 1 extract \u2192 Unknown:Type\nmethodtypes-of:Function0\u27e6ResultT\u27e7:\n 2 apply \u2192 ResultT\nmethodtypes-of:Function1\u27e6ArgT1, ResultT\u27e7:\n 2 apply(a1:ArgT1) \u2192 ResultT\n 2 matches(a1:Object) \u2192 Boolean\nmethodtypes-of:Function2\u27e6ArgT1, ArgT2, ResultT\u27e7:\n 2 apply(a1:ArgT1, a2:ArgT2) \u2192 ResultT\n 2 matches(a1:Object, a2:Object) \u2192 Boolean\nmethodtypes-of:Function3\u27e6ArgT1, ArgT2, ArgT3, ResultT\u27e7:\n 2 apply(a1:ArgT1, a2:ArgT2, a3:ArgT3) \u2192 ResultT\n 2 matches(a1:Object, a2:Object, a3:Object) \u2192 Boolean\nmethodtypes-of:Iterable\u27e6T\u27e7:\nmethodtypes-of:Iterator\u27e6T\u27e7:\nmethodtypes-of:List\u27e6T\u27e7:\nmethodtypes-of:Pattern:\n 1 &(other:Pattern) \u2192 Pattern\n 1 matches(value:Object) \u2192 Boolean\n 1 |(other:Pattern) \u2192 Pattern\nmethodtypes-of:Point:\n 2 *(factor:Number) \u2192 Point\n 2 +(other:Point | Number) \u2192 Point\n 2 -(other:Point | Number) \u2192 Point\n 2 /(factor:Number) \u2192 Point\n 2 ==(other:Object) \u2192 Boolean\n 2 distanceTo(other:Point) \u2192 Number\n 2 dot(other:Point) \u2192 Number\n 2 hash \u2192 Number\n 2 length \u2192 Number\n 2 norm \u2192 Point\n 2 prefix- \u2192 Point\n 2 x \u2192 Number\n 2 y \u2192 Number\n 2 \u22c5(other:Point) \u2192 Number\nmethodtypes-of:Predicate0:\nmethodtypes-of:Predicate1\u27e6ArgT1\u27e7:\nmethodtypes-of:Predicate2\u27e6ArgT1, ArgT2\u27e7:\nmethodtypes-of:Predicate3\u27e6ArgT1, ArgT2, ArgT3\u27e7:\nmethodtypes-of:Procedure0:\nmethodtypes-of:Procedure1\u27e6ArgT1\u27e7:\nmethodtypes-of:Procedure2\u27e6ArgT1, ArgT2\u27e7:\nmethodtypes-of:Procedure3\u27e6ArgT1, ArgT2, ArgT3\u27e7:\nmethodtypes-of:Sequence\u27e6T\u27e7:\nmethodtypes-of:Set\u27e6T\u27e7:\nmodules:\n collectionsPrelude\npath:\n /Users/black/Development/mg/gracelang/minigrace/standardGrace.grace\npublic:\n AndPattern\n AndPattern(2)\n BaseType\n BasicPattern\n Binding\n BoundsError\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n IteratorExhausted\n List\n NoSuchObject\n NotPattern(1)\n OrPattern\n OrPattern(2)\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n abstract\n binding\n collection\n collections\n dictionary\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n equality\n for(1)and(1)do(1)\n hashCombine(2)\n identityEquality\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n pi\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n singleton\n singleton(1)\n valueOf(1)\npublicMethodTypes:\n AndPattern\n AndPattern(p1, p2)\n BaseType\n BasicPattern\n BoundsError \u2192 Unknown\n ConcurrentModification \u2192 Unknown\n IteratorExhausted \u2192 Unknown\n NoSuchObject \u2192 Unknown\n NotPattern(p)\n OrPattern\n OrPattern(p1, p2)\n RequestError \u2192 Unknown\n Singleton \u2192 Unknown\n SubobjectResponsibility \u2192 Unknown\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable \u2192 Unknown\n abstract\n binding \u2192 Unknown\n collections \u2192 Unknown\n collection\u27e6T\u27e7\n dictionary\u27e6K, T\u27e7\n dictionary\u27e6K, T\u27e7(arg)\n do(action)while(condition)\n emptyDictionary\u27e6K, T\u27e7\n emptyList\u27e6T\u27e7\n emptySequence \u2192 Unknown\n emptySet\u27e6T\u27e7\n enumerable\u27e6T\u27e7\n equality\n for(cs)and(ds)do(action) \u2192 Done\n hashCombine(a, b)\n identityEquality\n indexable\u27e6T\u27e7\n list\u27e6T\u27e7\n list\u27e6T\u27e7(arg)\n max(a, b)\n methods\n min(a, b)\n pi \u2192 Unknown\n point2Dx(x')y(y')\n range \u2192 Unknown\n repeat(n)times(action)\n required\n sequence\u27e6T\u27e7\n sequence\u27e6T\u27e7(arg)\n set\u27e6T\u27e7\n set\u27e6T\u27e7(arg)\n singleton\n singleton(nameString)\n valueOf(nullaryBlock)\ntypes:\n Binding\n Collection\n Dictionary\n Enumerable\n EqualityObject\n ExceptionKind\n Expandable\n Extractable\n Function0\n Function1\n Function2\n Function3\n Iterable\n Iterator\n List\n Pattern\n Point\n Predicate0\n Predicate1\n Predicate2\n Predicate3\n Procedure0\n Procedure1\n Procedure2\n Procedure3\n Sequence\n Set\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["standardGrace"] = [
    "dialect \"none\"",
    "",
    "method abstract {",
    "    SubobjectResponsibility.raise \"abstract method not overriden by subobject\"",
    "}",
    "",
    "method required {",
    "    SubobjectResponsibility.raise \"required method not provided by subobject\"",
    "}",
    "",
    "method do(action)while(condition) {",
    "    while {",
    "        action.apply",
    "        condition.apply",
    "    } do { }",
    "}",
    "",
    "method repeat(n)times(action) {",
    "    if (n.isInteger.not) then {",
    "        ProgrammingError.raise \"you can't repeat {n} times, because {n} is not an integer\"",
    "    }",
    "    var ix := n",
    "    while {ix > 0} do {",
    "        ix := ix - 1",
    "        action.apply",
    "    }",
    "}",
    "",
    "method for (cs) and (ds) do (action) -> Done {",
    "    def dIter = ds.iterator",
    "    cs.do { c -> ",
    "        if (dIter.hasNext) then {",
    "            action.apply(c, dIter.next)",
    "        } else {",
    "            return",
    "        }",
    "    }",
    "}",
    "",
    "method min(a, b) {",
    "    if (a < b) then { a } else { b }",
    "}",
    "",
    "method max(a, b) {",
    "    if (a > b) then { a } else { b }",
    "}",
    "",
    "method valueOf (nullaryBlock) {",
    "    nullaryBlock.apply",
    "}",
    "",
    "trait BasicPattern {",
    "    method &(o) {",
    "        AndPattern.new(self, o)",
    "    }",
    "    method |(o) {",
    "        OrPattern.new(self, o)",
    "    }",
    "    method prefix ¬ {",
    "        NotPattern(self)",
    "    }",
    "}",
    "",
    "once method AndPattern {",
    "  object {",
    "    trait new(p1, p2) {",
    "        use BasicPattern",
    "        method matches(obj) {",
    "            if (p1.matches(obj)) then {",
    "                p2.matches(obj)",
    "            } else {",
    "                false",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "trait AndPattern(p1, p2) {",
    "    use BasicPattern",
    "    method matches(obj) {",
    "        if (p1.matches(obj)) then { p2.matches(obj) } else { false }",
    "    }",
    "}",
    "",
    "once method OrPattern {",
    "  object {",
    "    trait new(p1, p2) {",
    "        use BasicPattern",
    "        method matches(o) {",
    "            if (p1.matches(o)) then { return true }",
    "            p2.matches(o)",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "trait OrPattern(p1, p2) {",
    "    use BasicPattern",
    "    method matches(o) {",
    "        if (p1.matches(o)) then { true } else { p2.matches(o) }",
    "    }",
    "}",
    "",
    "trait NotPattern(p) {",
    "    use BasicPattern",
    "    method matches(o) {",
    "        p.matches(o).not",
    "    }",
    "}",
    "",
    "def Singleton is public = object {",
    "    class new {",
    "        use BasicPattern",
    "        use identityEquality",
    "        method matches(other) { self.isMe(other) }",
    "    }",
    "    class named(printString) {",
    "        use Singleton.new",
    "        method asString { printString }",
    "    }",
    "}",
    "",
    "method singleton { Singleton.new }",
    "",
    "method singleton (nameString) { Singleton.named(nameString) }",
    "",
    "once method hashMap is confidential {",
    "    native \"js\" code \"result = var_HashMap;\\n\"",
    "}",
    "",
    "method classUid(obj) is confidential {",
    "    native \"js\" code \"result = new GraceString(var_obj.classUid);\\n\"",
    "}",
    "",
    "once method mirror is confidential {",
    "    native \"js\" code ‹result = do_import(\"mirrors\", gracecode_mirrors);",
    "        ›",
    "}",
    "",
    "class BaseType {",
    "    use identityEquality",
    "",
    "    method &(o) {",
    "        TypeIntersection.new(self, o)",
    "    }",
    "    method |(o) {",
    "        TypeVariant.new(self, o)",
    "    }",
    "    method +(o) {",
    "        TypeUnion.new(self, o)",
    "    }",
    "    method -(o) {",
    "        TypeSubtraction.new(self, o)",
    "    }",
    "    method asString {",
    "        \"type {self.name}\"",
    "    }",
    "    method setName(nu) is confidential {",
    "        self.name:=(nu)",
    "        return self     // for chaining",
    "    }",
    "    method matchHook(obj) is required",
    "    method matches(obj) {",
    "        // this caches the result of matchHook, under the assumption",
    "        // that two objects with the same classUid will have the same type",
    "        native \"js\" code ‹",
    "        if (! this.matchCache) this.matchCache = [];",
    "        let key = var_obj.classUid;",
    "        result = this.matchCache[key];",
    "        if (result) return result;",
    "        result = selfRequest(this, \"matchHook(1)\", [1], var_obj);",
    "        this.matchCache[key] = result;",
    "        ›",
    "    }",
    "}",
    "",
    "once method TypeIntersection {",
    "  object {",
    "    class new(t1, t2) {",
    "        inherit AndPattern.new(t1, t2)",
    "            alias matchHook(_) = matches(_)",
    "        use BaseType",
    "        var name is readable := \"‹anon›\"",
    "        method methodNames {",
    "            t1.methodNames.addAll(t2.methodNames)",
    "        }",
    "        method asString {",
    "            if (self.name == \"‹anon›\") then {",
    "                \"({t1} & {t2})\"",
    "            } else {",
    "                \"type {self.name}\"",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "once method TypeVariant {",
    "  object {",
    "    class new(t1, t2) {",
    "        inherit OrPattern.new(t1, t2)",
    "            alias matchHook(_) = matches(_)",
    "        use BaseType",
    "        var name is readable := \"‹anon›\"",
    "        method methodNames {",
    "            self.MethodsInTypeVariantsNotImplemented",
    "        }",
    "        method asString {",
    "            if (self.name == \"‹anon›\") then {",
    "                \"({t1} | {t2})\"",
    "            } else {",
    "                \"type {self.name}\"",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "once method TypeUnion {",
    "  object {",
    "    class new(t1, t2) {",
    "        inherit BasicPattern",
    "        use BaseType",
    "        var name is readable := \"‹anon›\"",
    "        method methodNames {",
    "            t1.methodNames ** t2.methodNames",
    "        }",
    "        method matchHook(o) {",
    "            def oMethodNames = mirror.reflect(o).methodNames",
    "            for (self.methodNames) do { each ->",
    "                if (! oMethodNames.contains(each)) then {",
    "                    return false",
    "                }",
    "            }",
    "            return true",
    "        }",
    "        method asString {",
    "            if (self.name == \"‹anon›\") then {",
    "                \"({t1} + {t2})\"",
    "            } else {",
    "                \"type {self.name}\"",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "once method TypeSubtraction {",
    "  object {",
    "    class new(t1, t2) {",
    "        inherit BasicPattern",
    "        use BaseType",
    "        var name is readable := \"‹anon›\"",
    "        method methodNames {",
    "            t1.methodNames.removeAll(t2.methodNames)",
    "        }",
    "        method asString {",
    "            if (self.name == \"‹anon›\") then {",
    "                \"({t1} - {t2})\"",
    "            } else {",
    "                \"type {self.name}\"",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "// Now define the types.  Because some of the types are defined using &,",
    "// TypeIntersection must be defined first.",
    "",
    "type Extractable = {",
    "    extract",
    "}",
    "",
    "type Pattern = {",
    "    & (other:Pattern) -> Pattern",
    "    | (other:Pattern) -> Pattern",
    "    matches(value:Object) -> Boolean",
    "}",
    "",
    "type ExceptionKind = Pattern & interface {",
    "    refine (parentKind:ExceptionKind) -> ExceptionKind",
    "    parent -> ExceptionKind",
    "    raise (message:String) -> Done",
    "    raise (message:String) with (argument:Object) -> Done",
    "}",
    "",
    "type Point =  {",
    "",
    "    x -> Number",
    "    // the x-coordinates of self",
    "",
    "    y -> Number",
    "    // the y-coordinate of self",
    "",
    "    == (other:Object) -> Boolean",
    "    // true if other is a Point with the same x and y coordinates as self.",
    "",
    "    + (other:Point|Number) -> Point",
    "    // if other is a Point, returns the Point that is the vector sum of self",
    "    // and other, i.e. (self.x+other.x) @ (self.y+other.y).  If other is a Number,",
    "    // returns the point (self.x+other) @ (self.y+other)",
    "",
    "    - (other:Point|Number) -> Point",
    "    // if other is a Point, returns the Point that is the vector difference of",
    "    // self and other, i.e. (self.x-other.x) @ (self.y-other.y). If other is a",
    "    // Number, returns the point (self.x-other) @ (self.y-other)",
    "",
    "",
    "    prefix- -> Point",
    "    // the negation of self",
    "    ",
    "    * (factor:Number) -> Point",
    "    // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)",
    "    ",
    "    / (factor:Number) -> Point",
    "    // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)",
    "",
    "    length -> Number",
    "    // distance from self to the origin",
    "",
    "    distanceTo(other:Point) -> Number",
    "    // distance from self to other",
    "",
    "    dot (other:Point) -> Number",
    "    ⋅ (other:Point) -> Number",
    "    // dot product of self and other",
    "",
    "    norm -> Point",
    "    // the unit vector (vecor of length 1) in same direction as self",
    "",
    "    hash -> Number",
    "    // the hash of self",
    "}",
    "",
    "class point2Dx (x') y (y') {",
    "    use equality",
    "    def x is readable = x'",
    "    def y is readable = y'",
    "    method asString { \"({x}@{y})\" }",
    "    method asDebugString { self.asString }",
    "    method distanceTo(other:Point) {",
    "        (((x - other.x)^2) + ((y - other.y)^2)).sqrt",
    "    }",
    "    method -(other) {",
    "        match(other)",
    "            case { o:Point -> point2Dx (x - o.x) y (y - o.y) }",
    "            case { n:Number -> point2Dx (x - n) y (y - n) }",
    "            else { other.reverseMinusPoint(self) }",
    "    }",
    "    method +(other) {",
    "        match(other)",
    "            case { o:Point -> point2Dx (x + o.x) y (y + o.y) }",
    "            case { n:Number -> point2Dx (x + n) y (y + n) }",
    "            else { other.reversePlusPoint(self) }",
    "    }",
    "    method /(other:Number) { point2Dx (x / other) y (y / other) }",
    "    method *(other:Number) { point2Dx (x * other) y (y * other) }",
    "    method length { ((x^2) + (y^2)).sqrt }",
    "    method ==(other) {",
    "        match (other)",
    "            case { o:Point -> (x == o.x) && (y == o.y) }",
    "            else { false }",
    "    }",
    "    method prefix- { point2Dx (-x) y (-y) }",
    "    method dot (other:Point) -> Number {",
    "        // dot product",
    "        (x * other.x) + (y * other.y)",
    "    }",
    "    method ⋅ (other:Point) -> Number {",
    "        // dot product",
    "        (x * other.x) + (y * other.y)",
    "    }",
    "    method reverseTimesNumber(n) { point2Dx (n * x) y (n * y) }",
    "    method reversePlusNumber(n) { point2Dx (n + x) y (n + y) }",
    "    method reverseDivideNumber(n) { point2Dx (n / x) y (n / y) }",
    "    method reverseMinusNumber(n) { point2Dx (n - x) y (n - y) }",
    "    method norm { self / self.length }",
    "    method hash { hashCombine(x.hash, y.hash) }",
    "}",
    "",
    "def pi is public = π",
    "",
    "method hashCombine(a, b) {",
    "    native \"c\" code ‹",
    "        int a = (int)(args[0]->data);",
    "        int b = (int)(args[1]->data);",
    "        int aHash = a * 1664525;",
    "        int bHash = (b * 1664525 - 0xA21FE89) * 3;",
    "        return alloc_Float64((aHash * 2) ^ bHash);›",
    "    native \"js\" code ‹",
    "        var a = var_a._value;",
    "        var b = var_b._value;",
    "        var aHash = a * 1664525;",
    "        var bHash = (b * 1664525 - 0xA21FE89) * 3;",
    "        result = new GraceNum((aHash * 2) ^ bHash);›",
    "}",
    "import \"collectionsPrelude\" as coll",
    "// collectionsPrelude defines types using &, so it can't be imported until",
    "// the above definition of TypeIntersection has been executed.",
    "",
    "// We should just be able to put \"is public\" on the above import, but this is",
    "// not fully implemented.  So instead we create an alias:",
    "def collections is public = coll",
    "",
    "trait equality {",
    "    method == (other) is required",
    "    method hash is required    // should obey invariant (a == b) => (a.hash == b.hash)",
    "    method ≠ (other)  { (self == other).not }",
    "    method :: (obj) { binding.key (self) value (obj) }",
    "}",
    "",
    "trait identityEquality {",
    "    use equality",
    "    method == (other) { self.isMe(other) }",
    "    method hash { self.myIdentityHash }",
    "}",
    "",
    "// New names for Blocks: FunctionN == BlockN",
    "",
    "type Function0⟦ResultT⟧  = interface {",
    "    apply -> ResultT     // Function with no arguments and a result of type ResultT",
    "    //  matches -> Boolean   // answers true",
    "}",
    "type Function1⟦ArgT1, ResultT⟧ = interface {",
    "    apply(a1:ArgT1) -> ResultT    // Function with argument a1 of type ArgT1, and a result of type ResultT",
    "    matches(a1:Object) -> Boolean   // answers true if a1 <: ArgT1",
    "}",
    "type Function2⟦ArgT1, ArgT2, ResultT⟧ = interface {",
    "    apply(a1:ArgT1, a2:ArgT2) -> ResultT",
    "    // Function with arguments of types ArgT1 and ArgT2, and a result of type ResultT",
    "    matches(a1:Object, a2:Object) -> Boolean",
    "        // answers true if a1 <: ArgT1 and a2 <: ArgT2",
    "}",
    "type Function3⟦ArgT1, ArgT2, ArgT3, ResultT⟧  = interface {",
    "    apply(a1:ArgT1, a2:ArgT2, a3:ArgT3) -> ResultT",
    "    matches(a1:Object, a2:Object, a3:Object) -> Boolean",
    "        // answers true if a1 <: ArgT1 and a2 <: ArgT2 and a3 :< ArgT3",
    "}",
    "",
    "type EqualityObject = Object & interface {",
    "    ::(o:Object) -> Binding",
    "    ==(other:Object) -> Boolean",
    "    ≠(other:Object) -> Boolean",
    "    hash -> Number",
    "}",
    "",
    "// Procedures are fuctions that have no result",
    "",
    "type Procedure0 = Function0⟦Done⟧",
    "    // Function with no arguments and no result",
    "type Procedure1⟦ArgT1⟧ = Function1⟦ArgT1, Done⟧",
    "    // Function with 1 argument of type ArgT1, and no result",
    "type Procedure2⟦ArgT1, ArgT2⟧ = Function2⟦ArgT1, ArgT2, Done⟧ ",
    "    // Function with 2 arguments of types ArgT1 and ArgT2, and no result",
    "type Procedure3⟦ArgT1, ArgT2, ArgT3⟧ = Function3⟦ArgT1, ArgT2, ArgT3, Done⟧",
    "",
    "// Predictates are functions that return a Boolean",
    "",
    "type Predicate0 = Function0⟦Boolean⟧",
    "    // Function with no arguments returning Boolean",
    "type Predicate1⟦ArgT1⟧ = Function1⟦ArgT1, Boolean⟧",
    "    // Function with 1 argument of type ArgT1, returning Boolean",
    "type Predicate2⟦ArgT1, ArgT2⟧ = Function2⟦ArgT1, ArgT2, Boolean⟧",
    "    // Function with 2 arguments of types ArgT1 and ArgT2, returning Boolean",
    "type Predicate3⟦ArgT1, ArgT2, ArgT3⟧ = Function3⟦ArgT1, ArgT2, ArgT3, Boolean⟧",
    "    // Function with 3 arguments of types ArgT1, ArgT2, and ArgT3, returning Boolean",
    "",
    "type Collection⟦T⟧ = collections.Collection⟦T⟧",
    "type Iterable⟦T⟧ = collections.Iterable⟦T⟧",
    "type Expandable⟦T⟧ = collections.Expandable⟦T⟧",
    "type Enumerable⟦T⟧ = collections.Enumerable⟦T⟧",
    "type Binding⟦K,T⟧ = collections.Binding⟦K,T⟧",
    "type Iterator⟦T⟧ = collections.Iterator⟦T⟧",
    "type Sequence⟦T⟧ = collections.Sequence⟦T⟧",
    "type List⟦T⟧ = collections.List⟦T⟧",
    "type Set⟦T⟧ = collections.Set⟦T⟧",
    "type Dictionary⟦K,T⟧ = collections.Dictionary⟦K,T⟧",
    "",
    "def BoundsError is public = collections.BoundsError",
    "def IteratorExhausted is public = collections.IteratorExhausted",
    "def NoSuchObject is public = collections.NoSuchObject",
    "def RequestError is public = collections.RequestError",
    "def SubobjectResponsibility is public = collections.SubobjectResponsibility",
    "def ConcurrentModification is public = collections.ConcurrentModification",
    "def UninitializedVariable is public = ProgrammingError.refine \"UninitializedVariable\"",
    "",
    "method collection⟦T⟧ { collections.collection⟦T⟧ }",
    "method enumerable⟦T⟧ { collections.enumerable⟦T⟧ }",
    "method indexable⟦T⟧ { collections.indexable⟦T⟧ }",
    "",
    "method sequence⟦T⟧ { collections.sequence⟦T⟧ }",
    "method sequence⟦T⟧(arg) { collections.sequence⟦T⟧.withAll(arg) }",
    "def emptySequence is public = collections.sequence.empty",
    "",
    "method list⟦T⟧ { collections.list⟦T⟧ }",
    "method list⟦T⟧(arg) { collections.list⟦T⟧.withAll(arg) }",
    "method emptyList⟦T⟧ { collections.list⟦T⟧.empty }",
    "",
    "method set⟦T⟧ { collections.set⟦T⟧ }",
    "method set⟦T⟧(arg) { collections.set⟦T⟧.withAll(arg) }",
    "method emptySet⟦T⟧ { collections.set⟦T⟧.empty }",
    "",
    "method dictionary⟦K, T⟧  { collections.dictionary⟦K, T⟧ }",
    "method dictionary⟦K, T⟧(arg) { collections.dictionary⟦K, T⟧.withAll(arg) }",
    "method emptyDictionary⟦K, T⟧ { collections.dictionary⟦K, T⟧.empty }",
    "",
    "def binding is public = collections.binding",
    "def range is public = collections.range",
    "",
    "method methods {",
    "    prelude.clone(self)",
    "}" ];
}
function gracecode_standardGrace() {
  importedModules["standardGrace"] = this;
  var module$standardGrace = this;
  this.definitionModule = "standardGrace";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_standardGrace_1");
  this.outer_standardGrace_1 = var_prelude;
  var func0 = function(argcv) {    // method abstract, line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("abstract", 0, numArgs - 0);
    }
    setLineNumber(4);    // compilenode string
    var string2 = new GraceString("abstract method not overriden by subobject");
    // call case 6: other requests
    if (var_SubobjectResponsibility === undefined) raiseUninitializedVariable("SubobjectResponsibility");
    var call1 = request(var_SubobjectResponsibility, "raise(1)", [1], string2);
    return call1;
  };    // end of method abstract
  this.methods["abstract"] = func0;
  func0.methodName = "abstract";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 3;
  func0.definitionModule = "standardGrace";
  var func3 = function(argcv) {    // method required, line 7
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("required", 0, numArgs - 0);
    }
    setLineNumber(8);    // compilenode string
    var string5 = new GraceString("required method not provided by subobject");
    // call case 6: other requests
    if (var_SubobjectResponsibility === undefined) raiseUninitializedVariable("SubobjectResponsibility");
    var call4 = request(var_SubobjectResponsibility, "raise(1)", [1], string5);
    return call4;
  };    // end of method required
  this.methods["required"] = func3;
  func3.methodName = "required";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 7;
  func3.definitionModule = "standardGrace";
  var func6 = function(argcv, var_action, var_condition) {    // method do(_)while(_), line 11
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("do(_)while(_)", 0, numArgs - 2);
    }
    setLineNumber(12);    // compilenode block
    var block8 = new GraceBlock(this, 12, 0);
    block8.guard = jsTrue;
    block8.real = function block8() {
      setLineNumber(13);    // compilenode member
      // call case 6: other requests
      var call9 = request(var_action, "apply", [0]);
      setLineNumber(14);    // compilenode member
      // call case 6: other requests
      var call10 = request(var_condition, "apply", [0]);
      return call10;
    };
    let applyMeth8 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth8.methodName = "apply";
    applyMeth8.paramCounts = [0];
    applyMeth8.paramNames = [];
    applyMeth8.definitionLine = 12;
    applyMeth8.definitionModule = "standardGrace";
    block8.methods["apply"] = applyMeth8;
    setLineNumber(15);    // compilenode block
    var block11 = new GraceBlock(this, 15, 0);
    block11.guard = jsTrue;
    block11.real = function block11() {
      setLineNumber(15);    // compileBlock
      return GraceDone;
    };
    let applyMeth11 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth11.methodName = "apply";
    applyMeth11.paramCounts = [0];
    applyMeth11.paramNames = [];
    applyMeth11.definitionLine = 15;
    applyMeth11.definitionModule = "standardGrace";
    block11.methods["apply"] = applyMeth11;
    // call case 2: outer request
    var call7 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block8, block11);
    return call7;
  };    // end of method do(_)while(_)
  this.methods["do(1)while(1)"] = func6;
  func6.methodName = "do(1)while(1)";
  func6.paramCounts = [1, 1];
  func6.paramNames = ["action", "condition"];
  func6.definitionLine = 11;
  func6.definitionModule = "standardGrace";
  var func12 = function(argcv, var_n, var_action) {    // method repeat(_)times(_), line 18
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("repeat(_)times(_)", 0, numArgs - 2);
    }
    var if13 = GraceDone;
    setLineNumber(19);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call15 = request(var_n, "isInteger", [0]);
    var call14 = request(call15, "not", [0]);
    if (Grace_isTrue(call14)) {
      setLineNumber(20);    // compilenode string
      var string17 = new GraceString("you can't repeat ");
      var opresult18 = request(string17, "++(1)", [1], var_n);
      var string19 = new GraceString(" times, because ");
      var opresult20 = request(opresult18, "++(1)", [1], string19);
      var opresult21 = request(opresult20, "++(1)", [1], var_n);
      var string22 = new GraceString(" is not an integer");
      var opresult23 = request(opresult21, "++(1)", [1], string22);
      // call case 6: other requests
      // call case 2: outer request
      var call24 = selfRequest(var_prelude, "ProgrammingError", [0]);
      var call16 = request(call24, "raise(1)", [1], opresult23);
      if13 = call16;
    }
    setLineNumber(22);    // compilenode vardec
    var var_ix = var_n;
    setLineNumber(23);    // compilenode block
    var block26 = new GraceBlock(this, 23, 0);
    block26.guard = jsTrue;
    block26.real = function block26() {
      setLineNumber(23);    // compilenode op
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      var opresult27 = request(var_ix, ">(1)", [1], new GraceNum(0));
      return opresult27;
    };
    let applyMeth26 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth26.methodName = "apply";
    applyMeth26.paramCounts = [0];
    applyMeth26.paramNames = [];
    applyMeth26.definitionLine = 23;
    applyMeth26.definitionModule = "standardGrace";
    block26.methods["apply"] = applyMeth26;
    var block28 = new GraceBlock(this, 23, 0);
    block28.guard = jsTrue;
    block28.real = function block28() {
      setLineNumber(24);    // compilenode op
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      var diff29 = request(var_ix, "-(1)", [1], new GraceNum(1));
      var_ix = diff29;
      setLineNumber(25);    // compilenode member
      // call case 6: other requests
      var call30 = request(var_action, "apply", [0]);
      return call30;
    };
    let applyMeth28 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth28.methodName = "apply";
    applyMeth28.paramCounts = [0];
    applyMeth28.paramNames = [];
    applyMeth28.definitionLine = 23;
    applyMeth28.definitionModule = "standardGrace";
    block28.methods["apply"] = applyMeth28;
    // call case 2: outer request
    var call25 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block26, block28);
    return call25;
  };    // end of method repeat(_)times(_)
  this.methods["repeat(1)times(1)"] = func12;
  func12.methodName = "repeat(1)times(1)";
  func12.paramCounts = [1, 1];
  func12.paramNames = ["n", "action"];
  func12.definitionLine = 18;
  func12.definitionModule = "standardGrace";
  var func31 = function(argcv, var_cs, var_ds, var_action) {    // method for(_)and(_)do(_), line 29
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("for(_)and(_)do(_)", 0, numArgs - 3);
    }
    setLineNumber(30);    // compilenode member
    // call case 6: other requests
    var call32 = request(var_ds, "iterator", [0]);
    var var_dIter = call32;
    setLineNumber(31);    // compilenode block
    var block34 = new GraceBlock(this, 31, 1);
    block34.guard = jsTrue;
    block34.real = function block34(var_c) {
      var if35 = GraceDone;
      setLineNumber(32);    // compilenode member
      // call case 6: other requests
      if (var_dIter === undefined) raiseUninitializedVariable("dIter");
      var call36 = request(var_dIter, "hasNext", [0]);
      if (Grace_isTrue(call36)) {
        setLineNumber(33);    // compilenode member
        // call case 6: other requests
        if (var_dIter === undefined) raiseUninitializedVariable("dIter");
        var call38 = request(var_dIter, "next", [0]);
        // call case 6: other requests
        var call37 = request(var_action, "apply(2)", [2], var_c, call38);
        if35 = call37;
      } else {
        setLineNumber(35);    // compilenode return
        throw new ReturnException(var_done, returnTarget);
      }
      return if35;
    };
    let applyMeth34 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth34.methodName = "apply(1)";
    applyMeth34.paramCounts = [1];
    applyMeth34.paramNames = ["c"];
    applyMeth34.definitionLine = 31;
    applyMeth34.definitionModule = "standardGrace";
    block34.methods["apply(1)"] = applyMeth34;
    let matchesMeth34 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth34.methodName = "matches(1)";
    matchesMeth34.paramCounts = [1];
    matchesMeth34.paramNames = ["c"];
    matchesMeth34.definitionLine = 31;
    matchesMeth34.definitionModule = "standardGrace";
    block34.methods["matches(1)"] = matchesMeth34;
    // call case 6: other requests
    var call33 = request(var_cs, "do(1)", [1], block34);
    return call33;
  };    // end of method for(_)and(_)do(_)
  this.methods["for(1)and(1)do(1)"] = func31;
  func31.methodName = "for(1)and(1)do(1)";
  func31.paramCounts = [1, 1, 1];
  func31.paramNames = ["cs", "ds", "action"];
  func31.definitionLine = 29;
  func31.definitionModule = "standardGrace";
  var func39 = function(argcv, var_a, var_b) {    // method min(_,_), line 40
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("min(_,_)", 0, numArgs - 2);
    }
    var if40 = GraceDone;
    setLineNumber(41);    // compilenode op
    var opresult41 = request(var_a, "<(1)", [1], var_b);
    if (Grace_isTrue(opresult41)) {
      if40 = var_a;
    } else {
      if40 = var_b;
    }
    return if40;
  };    // end of method min(_,_)
  this.methods["min(2)"] = func39;
  func39.methodName = "min(2)";
  func39.paramCounts = [2];
  func39.paramNames = ["a", "b"];
  func39.definitionLine = 40;
  func39.definitionModule = "standardGrace";
  var func42 = function(argcv, var_a, var_b) {    // method max(_,_), line 44
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("max(_,_)", 0, numArgs - 2);
    }
    var if43 = GraceDone;
    setLineNumber(45);    // compilenode op
    var opresult44 = request(var_a, ">(1)", [1], var_b);
    if (Grace_isTrue(opresult44)) {
      if43 = var_a;
    } else {
      if43 = var_b;
    }
    return if43;
  };    // end of method max(_,_)
  this.methods["max(2)"] = func42;
  func42.methodName = "max(2)";
  func42.paramCounts = [2];
  func42.paramNames = ["a", "b"];
  func42.definitionLine = 44;
  func42.definitionModule = "standardGrace";
  var func45 = function(argcv, var_nullaryBlock) {    // method valueOf(_), line 48
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("valueOf(_)", 0, numArgs - 1);
    }
    setLineNumber(49);    // compilenode member
    // call case 6: other requests
    var call46 = request(var_nullaryBlock, "apply", [0]);
    return call46;
  };    // end of method valueOf(_)
  this.methods["valueOf(1)"] = func45;
  func45.methodName = "valueOf(1)";
  func45.paramCounts = [1];
  func45.paramNames = ["nullaryBlock"];
  func45.definitionLine = 48;
  func45.definitionModule = "standardGrace";
  var func47 = function(argcv) {    // method BasicPattern, line 52
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("BasicPattern", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("BasicPattern", "standardGrace", 52);
    var ouc_init = this.methods["BasicPattern$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method BasicPattern
  this.methods["BasicPattern"] = func47;
  func47.methodName = "BasicPattern";
  func47.paramCounts = [0];
  func47.paramNames = [];
  func47.definitionLine = 52;
  func47.definitionModule = "standardGrace";
  var func48 = function(argcv, inheritingObject, aliases, exclusions) {    // method BasicPattern$build(_,_,_), line 52
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("BasicPattern", 0, numArgs - 0);
    }
    var obj49_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_52");
      this.outer_standardGrace_52 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func50 = function(argcv, var_o) {    // method &(_), line 53
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("&(_)", 0, numArgs - 1);
        }
        setLineNumber(54);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call52 = selfRequest(importedModules["standardGrace"], "AndPattern", [0]);
        var call51 = request(call52, "new(2)", [2], this, var_o);
        return call51;
      };    // end of method &(_)
      this.methods["&(1)"] = func50;
      func50.methodName = "&(1)";
      func50.paramCounts = [1];
      func50.paramNames = ["o"];
      func50.definitionLine = 53;
      func50.definitionModule = "standardGrace";
      var func53 = function(argcv, var_o) {    // method |(_), line 56
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("|(_)", 0, numArgs - 1);
        }
        setLineNumber(57);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call55 = selfRequest(importedModules["standardGrace"], "OrPattern", [0]);
        var call54 = request(call55, "new(2)", [2], this, var_o);
        return call54;
      };    // end of method |(_)
      this.methods["|(1)"] = func53;
      func53.methodName = "|(1)";
      func53.paramCounts = [1];
      func53.paramNames = ["o"];
      func53.definitionLine = 56;
      func53.definitionModule = "standardGrace";
      var func56 = function(argcv) {    // method prefix¬, line 59
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("prefix¬", 0, numArgs - 0);
        }
        setLineNumber(60);    // compilenode call
        // call case 2: outer request
        var call57 = selfRequest(importedModules["standardGrace"], "NotPattern(1)", [1], this);
        return call57;
      };    // end of method prefix¬
      this.methods["prefix\u00ac"] = func56;
      func56.methodName = "prefix\u00ac";
      func56.paramCounts = [0];
      func56.paramNames = [];
      func56.definitionLine = 59;
      func56.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 52;
          m.definitionModule = "standardGrace";
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
      var obj49_init = function() {    // init of object on line 52
      };
      return obj49_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj49_init = obj49_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj49_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method BasicPattern$build(_,_,_)
  this.methods["BasicPattern$build(3)"] = func48;
  func48.methodName = "BasicPattern$build(3)";
  func48.paramCounts = [0];
  func48.paramNames = [];
  func48.definitionLine = 52;
  func48.definitionModule = "standardGrace";
  var func58 = function(argcv) {    // method AndPattern, line 64
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("AndPattern", "standardGrace", 64);
    var ouc_init = this.methods["AndPattern$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method AndPattern
  function memofunc58(argcv) {
      if (! this.data["memo$AndPattern"])    // parameterless memo function
          this.data["memo$AndPattern"] = func58.call(this, argcv);
      return this.data["memo$AndPattern"];
  };
  this.methods["AndPattern"] = memofunc58;
  memofunc58.methodName = "AndPattern";
  memofunc58.paramCounts = [0];
  memofunc58.paramNames = [];
  memofunc58.definitionLine = 64;
  memofunc58.definitionModule = "standardGrace";
  func58.methodName = "AndPattern";
  func58.paramCounts = [0];
  func58.paramNames = [];
  func58.definitionLine = 64;
  func58.definitionModule = "standardGrace";
  var func59 = function(argcv, inheritingObject, aliases, exclusions) {    // method AndPattern$build(_,_,_), line 64
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("AndPattern", 0, numArgs - 0);
    }
    var obj60_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_65");
      this.outer_standardGrace_65 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func61 = function(argcv, var_p1, var_p2) {    // method new(_,_), line 66
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("AndPattern.new(_,_)", "standardGrace", 66);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_p1, var_p2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func61;
      func61.methodName = "new(2)";
      func61.paramCounts = [2];
      func61.paramNames = ["p1", "p2"];
      func61.definitionLine = 66;
      func61.definitionModule = "standardGrace";
      var func62 = function(argcv, var_p1, var_p2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 66
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj63_build = function(ignore, var_p1, var_p2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_66");
          this.outer_standardGrace_66 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(67);    // reuse call
          var initFun64 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
          var func65 = function(argcv, var_obj) {    // method matches(_), line 68
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("matches(_)", 0, numArgs - 1);
            }
            var if66 = GraceDone;
            setLineNumber(69);    // compilenode call
            // call case 6: other requests
            var call67 = request(var_p1, "matches(1)", [1], var_obj);
            if (Grace_isTrue(call67)) {
              setLineNumber(70);    // compilenode call
              // call case 6: other requests
              var call68 = request(var_p2, "matches(1)", [1], var_obj);
              if66 = call68;
            } else {
              if66 = GraceFalse;
            }
            return if66;
          };    // end of method matches(_)
          this.methods["matches(1)"] = func65;
          func65.methodName = "matches(1)";
          func65.paramCounts = [1];
          func65.paramNames = ["obj"];
          func65.definitionLine = 68;
          func65.definitionModule = "standardGrace";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 66;
              m.definitionModule = "standardGrace";
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
          var obj63_init = function() {    // init of object on line 66
          };
          return obj63_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj63_init = obj63_build.call(inheritingObject, null, var_p1, var_p2, this, aliases, exclusions);
        return obj63_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func62;
      func62.methodName = "new(2)$build(3)";
      func62.paramCounts = [2];
      func62.paramNames = ["p1", "p2"];
      func62.definitionLine = 66;
      func62.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 65;
          m.definitionModule = "standardGrace";
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
      var obj60_init = function() {    // init of object on line 65
      };
      return obj60_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj60_init = obj60_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj60_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method AndPattern$build(_,_,_)
  this.methods["AndPattern$build(3)"] = func59;
  func59.methodName = "AndPattern$build(3)";
  func59.paramCounts = [0];
  func59.paramNames = [];
  func59.definitionLine = 64;
  func59.definitionModule = "standardGrace";
  var func69 = function(argcv, var_p1, var_p2) {    // method AndPattern(_,_), line 79
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("AndPattern(_,_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("AndPattern(_,_)", "standardGrace", 79);
    var ouc_init = this.methods["AndPattern(2)$build(3)"].call(this, null, var_p1, var_p2, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method AndPattern(_,_)
  this.methods["AndPattern(2)"] = func69;
  func69.methodName = "AndPattern(2)";
  func69.paramCounts = [2];
  func69.paramNames = ["p1", "p2"];
  func69.definitionLine = 79;
  func69.definitionModule = "standardGrace";
  var func70 = function(argcv, var_p1, var_p2, inheritingObject, aliases, exclusions) {    // method AndPattern(_,_)$build(_,_,_), line 79
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("AndPattern(_,_)", 0, numArgs - 2);
    }
    var obj71_build = function(ignore, var_p1, var_p2, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_79");
      this.outer_standardGrace_79 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(80);    // reuse call
      var initFun72 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
      var func73 = function(argcv, var_obj) {    // method matches(_), line 81
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("matches(_)", 0, numArgs - 1);
        }
        var if74 = GraceDone;
        setLineNumber(82);    // compilenode call
        // call case 6: other requests
        var call75 = request(var_p1, "matches(1)", [1], var_obj);
        if (Grace_isTrue(call75)) {
          // call case 6: other requests
          var call76 = request(var_p2, "matches(1)", [1], var_obj);
          if74 = call76;
        } else {
          if74 = GraceFalse;
        }
        return if74;
      };    // end of method matches(_)
      this.methods["matches(1)"] = func73;
      func73.methodName = "matches(1)";
      func73.paramCounts = [1];
      func73.paramNames = ["obj"];
      func73.definitionLine = 81;
      func73.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 79;
          m.definitionModule = "standardGrace";
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
      var obj71_init = function() {    // init of object on line 79
      };
      return obj71_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj71_init = obj71_build.call(inheritingObject, null, var_p1, var_p2, this, aliases, exclusions);
    return obj71_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method AndPattern(_,_)$build(_,_,_)
  this.methods["AndPattern(2)$build(3)"] = func70;
  func70.methodName = "AndPattern(2)$build(3)";
  func70.paramCounts = [2];
  func70.paramNames = ["p1", "p2"];
  func70.definitionLine = 79;
  func70.definitionModule = "standardGrace";
  var func77 = function(argcv) {    // method OrPattern, line 86
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("OrPattern", "standardGrace", 86);
    var ouc_init = this.methods["OrPattern$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method OrPattern
  function memofunc77(argcv) {
      if (! this.data["memo$OrPattern"])    // parameterless memo function
          this.data["memo$OrPattern"] = func77.call(this, argcv);
      return this.data["memo$OrPattern"];
  };
  this.methods["OrPattern"] = memofunc77;
  memofunc77.methodName = "OrPattern";
  memofunc77.paramCounts = [0];
  memofunc77.paramNames = [];
  memofunc77.definitionLine = 86;
  memofunc77.definitionModule = "standardGrace";
  func77.methodName = "OrPattern";
  func77.paramCounts = [0];
  func77.paramNames = [];
  func77.definitionLine = 86;
  func77.definitionModule = "standardGrace";
  var func78 = function(argcv, inheritingObject, aliases, exclusions) {    // method OrPattern$build(_,_,_), line 86
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("OrPattern", 0, numArgs - 0);
    }
    var obj79_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_87");
      this.outer_standardGrace_87 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func80 = function(argcv, var_p1, var_p2) {    // method new(_,_), line 88
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("OrPattern.new(_,_)", "standardGrace", 88);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_p1, var_p2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func80;
      func80.methodName = "new(2)";
      func80.paramCounts = [2];
      func80.paramNames = ["p1", "p2"];
      func80.definitionLine = 88;
      func80.definitionModule = "standardGrace";
      var func81 = function(argcv, var_p1, var_p2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 88
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj82_build = function(ignore, var_p1, var_p2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_88");
          this.outer_standardGrace_88 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(89);    // reuse call
          var initFun83 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
          var func84 = function(argcv, var_o) {    // method matches(_), line 90
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("matches(_)", 0, numArgs - 1);
            }
            var if85 = GraceDone;
            setLineNumber(91);    // compilenode call
            // call case 6: other requests
            var call86 = request(var_p1, "matches(1)", [1], var_o);
            if (Grace_isTrue(call86)) {
              return GraceTrue;
            }
            setLineNumber(92);    // compilenode call
            // call case 6: other requests
            var call87 = request(var_p2, "matches(1)", [1], var_o);
            return call87;
          };    // end of method matches(_)
          this.methods["matches(1)"] = func84;
          func84.methodName = "matches(1)";
          func84.paramCounts = [1];
          func84.paramNames = ["o"];
          func84.definitionLine = 90;
          func84.definitionModule = "standardGrace";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 88;
              m.definitionModule = "standardGrace";
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
          var obj82_init = function() {    // init of object on line 88
          };
          return obj82_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj82_init = obj82_build.call(inheritingObject, null, var_p1, var_p2, this, aliases, exclusions);
        return obj82_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func81;
      func81.methodName = "new(2)$build(3)";
      func81.paramCounts = [2];
      func81.paramNames = ["p1", "p2"];
      func81.definitionLine = 88;
      func81.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 87;
          m.definitionModule = "standardGrace";
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
      var obj79_init = function() {    // init of object on line 87
      };
      return obj79_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj79_init = obj79_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj79_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method OrPattern$build(_,_,_)
  this.methods["OrPattern$build(3)"] = func78;
  func78.methodName = "OrPattern$build(3)";
  func78.paramCounts = [0];
  func78.paramNames = [];
  func78.definitionLine = 86;
  func78.definitionModule = "standardGrace";
  var func88 = function(argcv, var_p1, var_p2) {    // method OrPattern(_,_), line 98
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("OrPattern(_,_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("OrPattern(_,_)", "standardGrace", 98);
    var ouc_init = this.methods["OrPattern(2)$build(3)"].call(this, null, var_p1, var_p2, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method OrPattern(_,_)
  this.methods["OrPattern(2)"] = func88;
  func88.methodName = "OrPattern(2)";
  func88.paramCounts = [2];
  func88.paramNames = ["p1", "p2"];
  func88.definitionLine = 98;
  func88.definitionModule = "standardGrace";
  var func89 = function(argcv, var_p1, var_p2, inheritingObject, aliases, exclusions) {    // method OrPattern(_,_)$build(_,_,_), line 98
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("OrPattern(_,_)", 0, numArgs - 2);
    }
    var obj90_build = function(ignore, var_p1, var_p2, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_98");
      this.outer_standardGrace_98 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(99);    // reuse call
      var initFun91 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
      var func92 = function(argcv, var_o) {    // method matches(_), line 100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("matches(_)", 0, numArgs - 1);
        }
        var if93 = GraceDone;
        setLineNumber(101);    // compilenode call
        // call case 6: other requests
        var call94 = request(var_p1, "matches(1)", [1], var_o);
        if (Grace_isTrue(call94)) {
          if93 = GraceTrue;
        } else {
          // call case 6: other requests
          var call95 = request(var_p2, "matches(1)", [1], var_o);
          if93 = call95;
        }
        return if93;
      };    // end of method matches(_)
      this.methods["matches(1)"] = func92;
      func92.methodName = "matches(1)";
      func92.paramCounts = [1];
      func92.paramNames = ["o"];
      func92.definitionLine = 100;
      func92.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 98;
          m.definitionModule = "standardGrace";
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
      var obj90_init = function() {    // init of object on line 98
      };
      return obj90_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj90_init = obj90_build.call(inheritingObject, null, var_p1, var_p2, this, aliases, exclusions);
    return obj90_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method OrPattern(_,_)$build(_,_,_)
  this.methods["OrPattern(2)$build(3)"] = func89;
  func89.methodName = "OrPattern(2)$build(3)";
  func89.paramCounts = [2];
  func89.paramNames = ["p1", "p2"];
  func89.definitionLine = 98;
  func89.definitionModule = "standardGrace";
  var func96 = function(argcv, var_p) {    // method NotPattern(_), line 105
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("NotPattern(_)", 0, numArgs - 1);
    }
    var ouc = emptyGraceObject("NotPattern(_)", "standardGrace", 105);
    var ouc_init = this.methods["NotPattern(1)$build(3)"].call(this, null, var_p, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method NotPattern(_)
  this.methods["NotPattern(1)"] = func96;
  func96.methodName = "NotPattern(1)";
  func96.paramCounts = [1];
  func96.paramNames = ["p"];
  func96.definitionLine = 105;
  func96.definitionModule = "standardGrace";
  var func97 = function(argcv, var_p, inheritingObject, aliases, exclusions) {    // method NotPattern(_)$build(_,_,_), line 105
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("NotPattern(_)", 0, numArgs - 1);
    }
    var obj98_build = function(ignore, var_p, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_105");
      this.outer_standardGrace_105 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(106);    // reuse call
      var initFun99 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
      var func100 = function(argcv, var_o) {    // method matches(_), line 107
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("matches(_)", 0, numArgs - 1);
        }
        setLineNumber(108);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call102 = request(var_p, "matches(1)", [1], var_o);
        var call101 = request(call102, "not", [0]);
        return call101;
      };    // end of method matches(_)
      this.methods["matches(1)"] = func100;
      func100.methodName = "matches(1)";
      func100.paramCounts = [1];
      func100.paramNames = ["o"];
      func100.definitionLine = 107;
      func100.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 105;
          m.definitionModule = "standardGrace";
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
      var obj98_init = function() {    // init of object on line 105
      };
      return obj98_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj98_init = obj98_build.call(inheritingObject, null, var_p, this, aliases, exclusions);
    return obj98_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method NotPattern(_)$build(_,_,_)
  this.methods["NotPattern(1)$build(3)"] = func97;
  func97.methodName = "NotPattern(1)$build(3)";
  func97.paramCounts = [1];
  func97.paramNames = ["p"];
  func97.definitionLine = 105;
  func97.definitionModule = "standardGrace";
  var func103 = function(argcv) {    // method singleton, line 124
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("singleton", 0, numArgs - 0);
    }
    setLineNumber(124);    // compilenode member
    // call case 6: other requests
    if (var_Singleton === undefined) raiseUninitializedVariable("Singleton");
    var call104 = request(var_Singleton, "new", [0]);
    return call104;
  };    // end of method singleton
  this.methods["singleton"] = func103;
  func103.methodName = "singleton";
  func103.paramCounts = [0];
  func103.paramNames = [];
  func103.definitionLine = 124;
  func103.definitionModule = "standardGrace";
  var func105 = function(argcv, var_nameString) {    // method singleton(_), line 126
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("singleton(_)", 0, numArgs - 1);
    }
    setLineNumber(126);    // compilenode call
    // call case 6: other requests
    if (var_Singleton === undefined) raiseUninitializedVariable("Singleton");
    var call106 = request(var_Singleton, "named(1)", [1], var_nameString);
    return call106;
  };    // end of method singleton(_)
  this.methods["singleton(1)"] = func105;
  func105.methodName = "singleton(1)";
  func105.paramCounts = [1];
  func105.paramNames = ["nameString"];
  func105.definitionLine = 126;
  func105.definitionModule = "standardGrace";
  var func107 = function(argcv) {    // method hashMap, line 128
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(129);    // compilenode call
    var result = GraceDone;    // start native code from line 129
    result = var_HashMap;
   // end native code insertion
    return result;
  };    // end of method hashMap
  func107.confidential = true;
  function memofunc107(argcv) {
      if (! this.data["memo$hashMap"])    // parameterless memo function
          this.data["memo$hashMap"] = func107.call(this, argcv);
      return this.data["memo$hashMap"];
  };
  this.methods["hashMap"] = memofunc107;
  memofunc107.methodName = "hashMap";
  memofunc107.paramCounts = [0];
  memofunc107.paramNames = [];
  memofunc107.definitionLine = 128;
  memofunc107.definitionModule = "standardGrace";
  func107.methodName = "hashMap";
  func107.paramCounts = [0];
  func107.paramNames = [];
  func107.definitionLine = 128;
  func107.definitionModule = "standardGrace";
  var func108 = function(argcv, var_obj) {    // method classUid(_), line 132
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("classUid(_)", 0, numArgs - 1);
    }
    setLineNumber(133);    // compilenode call
    var result = GraceDone;    // start native code from line 133
    result = new GraceString(var_obj.classUid);
   // end native code insertion
    return result;
  };    // end of method classUid(_)
  func108.confidential = true;
  this.methods["classUid(1)"] = func108;
  func108.methodName = "classUid(1)";
  func108.paramCounts = [1];
  func108.paramNames = ["obj"];
  func108.definitionLine = 132;
  func108.definitionModule = "standardGrace";
  var func109 = function(argcv) {    // method mirror, line 136
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(137);    // compilenode call
    var result = GraceDone;    // start native code from line 137
    result = do_import("mirrors", gracecode_mirrors);
           // end native code insertion
    return result;
  };    // end of method mirror
  func109.confidential = true;
  function memofunc109(argcv) {
      if (! this.data["memo$mirror"])    // parameterless memo function
          this.data["memo$mirror"] = func109.call(this, argcv);
      return this.data["memo$mirror"];
  };
  this.methods["mirror"] = memofunc109;
  memofunc109.methodName = "mirror";
  memofunc109.paramCounts = [0];
  memofunc109.paramNames = [];
  memofunc109.definitionLine = 136;
  memofunc109.definitionModule = "standardGrace";
  func109.methodName = "mirror";
  func109.paramCounts = [0];
  func109.paramNames = [];
  func109.definitionLine = 136;
  func109.definitionModule = "standardGrace";
  var func110 = function(argcv) {    // method BaseType, line 141
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("BaseType", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("BaseType", "standardGrace", 141);
    var ouc_init = this.methods["BaseType$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method BaseType
  this.methods["BaseType"] = func110;
  func110.methodName = "BaseType";
  func110.paramCounts = [0];
  func110.paramNames = [];
  func110.definitionLine = 141;
  func110.definitionModule = "standardGrace";
  var func111 = function(argcv, inheritingObject, aliases, exclusions) {    // method BaseType$build(_,_,_), line 141
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("BaseType", 0, numArgs - 0);
    }
    var obj112_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_141");
      this.outer_standardGrace_141 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(142);    // reuse call
      var initFun113 = selfRequest(importedModules["standardGrace"], "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
      var func114 = function(argcv, var_o) {    // method &(_), line 144
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("&(_)", 0, numArgs - 1);
        }
        setLineNumber(145);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call116 = selfRequest(importedModules["standardGrace"], "TypeIntersection", [0]);
        var call115 = request(call116, "new(2)", [2], this, var_o);
        return call115;
      };    // end of method &(_)
      this.methods["&(1)"] = func114;
      func114.methodName = "&(1)";
      func114.paramCounts = [1];
      func114.paramNames = ["o"];
      func114.definitionLine = 144;
      func114.definitionModule = "standardGrace";
      var func117 = function(argcv, var_o) {    // method |(_), line 147
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("|(_)", 0, numArgs - 1);
        }
        setLineNumber(148);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call119 = selfRequest(importedModules["standardGrace"], "TypeVariant", [0]);
        var call118 = request(call119, "new(2)", [2], this, var_o);
        return call118;
      };    // end of method |(_)
      this.methods["|(1)"] = func117;
      func117.methodName = "|(1)";
      func117.paramCounts = [1];
      func117.paramNames = ["o"];
      func117.definitionLine = 147;
      func117.definitionModule = "standardGrace";
      var func120 = function(argcv, var_o) {    // method +(_), line 150
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("+(_)", 0, numArgs - 1);
        }
        setLineNumber(151);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call122 = selfRequest(importedModules["standardGrace"], "TypeUnion", [0]);
        var call121 = request(call122, "new(2)", [2], this, var_o);
        return call121;
      };    // end of method +(_)
      this.methods["+(1)"] = func120;
      func120.methodName = "+(1)";
      func120.paramCounts = [1];
      func120.paramNames = ["o"];
      func120.definitionLine = 150;
      func120.definitionModule = "standardGrace";
      var func123 = function(argcv, var_o) {    // method -(_), line 153
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("-(_)", 0, numArgs - 1);
        }
        setLineNumber(154);    // compilenode call
        // call case 6: other requests
        // call case 2: outer request
        var call125 = selfRequest(importedModules["standardGrace"], "TypeSubtraction", [0]);
        var call124 = request(call125, "new(2)", [2], this, var_o);
        return call124;
      };    // end of method -(_)
      this.methods["-(1)"] = func123;
      func123.methodName = "-(1)";
      func123.paramCounts = [1];
      func123.paramNames = ["o"];
      func123.definitionLine = 153;
      func123.definitionModule = "standardGrace";
      var func126 = function(argcv) {    // method asString, line 156
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(157);    // compilenode string
        var string127 = new GraceString("type ");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call128 = selfRequest(this, "name", [0]);
        var opresult129 = request(string127, "++(1)", [1], call128);
        var string130 = new GraceString("");
        var opresult131 = request(opresult129, "++(1)", [1], string130);
        return opresult131;
      };    // end of method asString
      this.methods["asString"] = func126;
      func126.methodName = "asString";
      func126.paramCounts = [0];
      func126.paramNames = [];
      func126.definitionLine = 156;
      func126.definitionModule = "standardGrace";
      var func132 = function(argcv, var_nu) {    // method setName(_), line 159
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("setName(_)", 0, numArgs - 1);
        }
        setLineNumber(160);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call133 = selfRequest(this, "name:=(1)", [1], var_nu);
        setLineNumber(161);    // compilenode return
        return this;
      };    // end of method setName(_)
      func132.confidential = true;
      this.methods["setName(1)"] = func132;
      func132.methodName = "setName(1)";
      func132.paramCounts = [1];
      func132.paramNames = ["nu"];
      func132.definitionLine = 159;
      func132.definitionModule = "standardGrace";
      if (! this.methods["matchHook(1)"]) {
        var func134 = function(argcv, var_obj) {    // method matchHook(_), line 163
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("matchHook(_)", 0, numArgs - 1);
          }
          setLineNumber(163);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method matchHook(_) was not supplied"));
        };    // end of method matchHook(_)
        this.methods["matchHook(1)"] = func134;
        func134.methodName = "matchHook(1)";
        func134.paramCounts = [1];
        func134.paramNames = ["obj"];
        func134.definitionLine = 163;
        func134.definitionModule = "standardGrace";
      };
      var func135 = function(argcv, var_obj) {    // method matches(_), line 164
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("matches(_)", 0, numArgs - 1);
        }
        setLineNumber(167);    // compilenode call
        var result = GraceDone;    // start native code from line 167
        
        if (! this.matchCache) this.matchCache = [];
        let key = var_obj.classUid;
        result = this.matchCache[key];
        if (result) return result;
        result = selfRequest(this, "matchHook(1)", [1], var_obj);
        this.matchCache[key] = result;
           // end native code insertion
        return result;
      };    // end of method matches(_)
      this.methods["matches(1)"] = func135;
      func135.methodName = "matches(1)";
      func135.paramCounts = [1];
      func135.paramNames = ["obj"];
      func135.definitionLine = 164;
      func135.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 141;
          m.definitionModule = "standardGrace";
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
      var obj112_init = function() {    // init of object on line 141
      };
      return obj112_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj112_init = obj112_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj112_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method BaseType$build(_,_,_)
  this.methods["BaseType$build(3)"] = func111;
  func111.methodName = "BaseType$build(3)";
  func111.paramCounts = [0];
  func111.paramNames = [];
  func111.definitionLine = 141;
  func111.definitionModule = "standardGrace";
  var func136 = function(argcv) {    // method TypeIntersection, line 178
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("TypeIntersection", "standardGrace", 178);
    var ouc_init = this.methods["TypeIntersection$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method TypeIntersection
  function memofunc136(argcv) {
      if (! this.data["memo$TypeIntersection"])    // parameterless memo function
          this.data["memo$TypeIntersection"] = func136.call(this, argcv);
      return this.data["memo$TypeIntersection"];
  };
  this.methods["TypeIntersection"] = memofunc136;
  memofunc136.methodName = "TypeIntersection";
  memofunc136.paramCounts = [0];
  memofunc136.paramNames = [];
  memofunc136.definitionLine = 178;
  memofunc136.definitionModule = "standardGrace";
  func136.methodName = "TypeIntersection";
  func136.paramCounts = [0];
  func136.paramNames = [];
  func136.definitionLine = 178;
  func136.definitionModule = "standardGrace";
  var func137 = function(argcv, inheritingObject, aliases, exclusions) {    // method TypeIntersection$build(_,_,_), line 178
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("TypeIntersection", 0, numArgs - 0);
    }
    var obj138_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_179");
      this.outer_standardGrace_179 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func139 = function(argcv, var_t1, var_t2) {    // method new(_,_), line 180
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("TypeIntersection.new(_,_)", "standardGrace", 180);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_t1, var_t2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func139;
      func139.methodName = "new(2)";
      func139.paramCounts = [2];
      func139.paramNames = ["t1", "t2"];
      func139.definitionLine = 180;
      func139.definitionModule = "standardGrace";
      var func140 = function(argcv, var_t1, var_t2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 180
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj141_build = function(ignore, var_t1, var_t2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_180");
          this.outer_standardGrace_180 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(181);    // compilenode member
          // call case 2: outer request
          var call142 = selfRequest(importedModules["standardGrace"], "AndPattern", [0]);
          var initFun143 = request(call142, "new(2)$build(3)", [null], var_t1, var_t2, this, [new Alias("matchHook(1)", "matches(1)")], []);  // compileReuseCall
          setLineNumber(183);    // reuse call
          var initFun144 = selfRequest(importedModules["standardGrace"], "BaseType$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.name = undefined;
          var reader145_name = function() {  // reader method name
              if (this.data.name === undefined) raiseUninitializedVariable("name");
              return this.data.name;
          };
          reader145_name.isVar = true;
          this.methods["name"] = reader145_name;
          var writer146_name = function(argcv, n) {   // writer method name:=(_)
            this.data.name = n;
            return GraceDone;
          };
          writer146_name.confidential = true;
          this.methods["name:=(1)"] = writer146_name;
          var func147 = function(argcv) {    // method methodNames, line 185
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("methodNames", 0, numArgs - 0);
            }
            setLineNumber(186);    // compilenode member
            // call case 6: other requests
            var call149 = request(var_t2, "methodNames", [0]);
            // call case 6: other requests
            // call case 6: other requests
            var call150 = request(var_t1, "methodNames", [0]);
            var call148 = request(call150, "addAll(1)", [1], call149);
            return call148;
          };    // end of method methodNames
          this.methods["methodNames"] = func147;
          func147.methodName = "methodNames";
          func147.paramCounts = [0];
          func147.paramNames = [];
          func147.definitionLine = 185;
          func147.definitionModule = "standardGrace";
          var func151 = function(argcv) {    // method asString, line 188
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            var if152 = GraceDone;
            setLineNumber(189);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call153 = selfRequest(this, "name", [0]);
            var string154 = new GraceString("\u2039anon\u203a");
            var opresult155 = request(call153, "==(1)", [1], string154);
            if (Grace_isTrue(opresult155)) {
              setLineNumber(190);    // compilenode string
              var string156 = new GraceString("(");
              var opresult157 = request(string156, "++(1)", [1], var_t1);
              var string158 = new GraceString(" & ");
              var opresult159 = request(opresult157, "++(1)", [1], string158);
              var opresult160 = request(opresult159, "++(1)", [1], var_t2);
              var string161 = new GraceString(")");
              var opresult162 = request(opresult160, "++(1)", [1], string161);
              if152 = opresult162;
            } else {
              setLineNumber(192);    // compilenode string
              var string163 = new GraceString("type ");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call164 = selfRequest(this, "name", [0]);
              var opresult165 = request(string163, "++(1)", [1], call164);
              var string166 = new GraceString("");
              var opresult167 = request(opresult165, "++(1)", [1], string166);
              if152 = opresult167;
            }
            return if152;
          };    // end of method asString
          this.methods["asString"] = func151;
          func151.methodName = "asString";
          func151.paramCounts = [0];
          func151.paramNames = [];
          func151.definitionLine = 188;
          func151.definitionModule = "standardGrace";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 180;
              m.definitionModule = "standardGrace";
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
          var obj141_init = function() {    // init of object on line 180
            initFun143.call(this);
            setLineNumber(184);    // compilenode string
            var string168 = new GraceString("\u2039anon\u203a");
            this.data.name = string168;
          };
          return obj141_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj141_init = obj141_build.call(inheritingObject, null, var_t1, var_t2, this, aliases, exclusions);
        return obj141_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func140;
      func140.methodName = "new(2)$build(3)";
      func140.paramCounts = [2];
      func140.paramNames = ["t1", "t2"];
      func140.definitionLine = 180;
      func140.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 179;
          m.definitionModule = "standardGrace";
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
      var obj138_init = function() {    // init of object on line 179
      };
      return obj138_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj138_init = obj138_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj138_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method TypeIntersection$build(_,_,_)
  this.methods["TypeIntersection$build(3)"] = func137;
  func137.methodName = "TypeIntersection$build(3)";
  func137.paramCounts = [0];
  func137.paramNames = [];
  func137.definitionLine = 178;
  func137.definitionModule = "standardGrace";
  var func169 = function(argcv) {    // method TypeVariant, line 199
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("TypeVariant", "standardGrace", 199);
    var ouc_init = this.methods["TypeVariant$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method TypeVariant
  function memofunc169(argcv) {
      if (! this.data["memo$TypeVariant"])    // parameterless memo function
          this.data["memo$TypeVariant"] = func169.call(this, argcv);
      return this.data["memo$TypeVariant"];
  };
  this.methods["TypeVariant"] = memofunc169;
  memofunc169.methodName = "TypeVariant";
  memofunc169.paramCounts = [0];
  memofunc169.paramNames = [];
  memofunc169.definitionLine = 199;
  memofunc169.definitionModule = "standardGrace";
  func169.methodName = "TypeVariant";
  func169.paramCounts = [0];
  func169.paramNames = [];
  func169.definitionLine = 199;
  func169.definitionModule = "standardGrace";
  var func170 = function(argcv, inheritingObject, aliases, exclusions) {    // method TypeVariant$build(_,_,_), line 199
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("TypeVariant", 0, numArgs - 0);
    }
    var obj171_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_200");
      this.outer_standardGrace_200 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func172 = function(argcv, var_t1, var_t2) {    // method new(_,_), line 201
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("TypeVariant.new(_,_)", "standardGrace", 201);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_t1, var_t2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func172;
      func172.methodName = "new(2)";
      func172.paramCounts = [2];
      func172.paramNames = ["t1", "t2"];
      func172.definitionLine = 201;
      func172.definitionModule = "standardGrace";
      var func173 = function(argcv, var_t1, var_t2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 201
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj174_build = function(ignore, var_t1, var_t2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_201");
          this.outer_standardGrace_201 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(202);    // compilenode member
          // call case 2: outer request
          var call175 = selfRequest(importedModules["standardGrace"], "OrPattern", [0]);
          var initFun176 = request(call175, "new(2)$build(3)", [null], var_t1, var_t2, this, [new Alias("matchHook(1)", "matches(1)")], []);  // compileReuseCall
          setLineNumber(204);    // reuse call
          var initFun177 = selfRequest(importedModules["standardGrace"], "BaseType$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.name = undefined;
          var reader178_name = function() {  // reader method name
              if (this.data.name === undefined) raiseUninitializedVariable("name");
              return this.data.name;
          };
          reader178_name.isVar = true;
          this.methods["name"] = reader178_name;
          var writer179_name = function(argcv, n) {   // writer method name:=(_)
            this.data.name = n;
            return GraceDone;
          };
          writer179_name.confidential = true;
          this.methods["name:=(1)"] = writer179_name;
          var func180 = function(argcv) {    // method methodNames, line 206
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("methodNames", 0, numArgs - 0);
            }
            setLineNumber(207);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call181 = selfRequest(this, "MethodsInTypeVariantsNotImplemented", [0]);
            return call181;
          };    // end of method methodNames
          this.methods["methodNames"] = func180;
          func180.methodName = "methodNames";
          func180.paramCounts = [0];
          func180.paramNames = [];
          func180.definitionLine = 206;
          func180.definitionModule = "standardGrace";
          var func182 = function(argcv) {    // method asString, line 209
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            var if183 = GraceDone;
            setLineNumber(210);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call184 = selfRequest(this, "name", [0]);
            var string185 = new GraceString("\u2039anon\u203a");
            var opresult186 = request(call184, "==(1)", [1], string185);
            if (Grace_isTrue(opresult186)) {
              setLineNumber(211);    // compilenode string
              var string187 = new GraceString("(");
              var opresult188 = request(string187, "++(1)", [1], var_t1);
              var string189 = new GraceString(" | ");
              var opresult190 = request(opresult188, "++(1)", [1], string189);
              var opresult191 = request(opresult190, "++(1)", [1], var_t2);
              var string192 = new GraceString(")");
              var opresult193 = request(opresult191, "++(1)", [1], string192);
              if183 = opresult193;
            } else {
              setLineNumber(213);    // compilenode string
              var string194 = new GraceString("type ");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call195 = selfRequest(this, "name", [0]);
              var opresult196 = request(string194, "++(1)", [1], call195);
              var string197 = new GraceString("");
              var opresult198 = request(opresult196, "++(1)", [1], string197);
              if183 = opresult198;
            }
            return if183;
          };    // end of method asString
          this.methods["asString"] = func182;
          func182.methodName = "asString";
          func182.paramCounts = [0];
          func182.paramNames = [];
          func182.definitionLine = 209;
          func182.definitionModule = "standardGrace";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 201;
              m.definitionModule = "standardGrace";
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
          var obj174_init = function() {    // init of object on line 201
            initFun176.call(this);
            setLineNumber(205);    // compilenode string
            var string199 = new GraceString("\u2039anon\u203a");
            this.data.name = string199;
          };
          return obj174_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj174_init = obj174_build.call(inheritingObject, null, var_t1, var_t2, this, aliases, exclusions);
        return obj174_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func173;
      func173.methodName = "new(2)$build(3)";
      func173.paramCounts = [2];
      func173.paramNames = ["t1", "t2"];
      func173.definitionLine = 201;
      func173.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 200;
          m.definitionModule = "standardGrace";
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
      var obj171_init = function() {    // init of object on line 200
      };
      return obj171_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj171_init = obj171_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj171_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method TypeVariant$build(_,_,_)
  this.methods["TypeVariant$build(3)"] = func170;
  func170.methodName = "TypeVariant$build(3)";
  func170.paramCounts = [0];
  func170.paramNames = [];
  func170.definitionLine = 199;
  func170.definitionModule = "standardGrace";
  var func200 = function(argcv) {    // method TypeUnion, line 220
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("TypeUnion", "standardGrace", 220);
    var ouc_init = this.methods["TypeUnion$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method TypeUnion
  function memofunc200(argcv) {
      if (! this.data["memo$TypeUnion"])    // parameterless memo function
          this.data["memo$TypeUnion"] = func200.call(this, argcv);
      return this.data["memo$TypeUnion"];
  };
  this.methods["TypeUnion"] = memofunc200;
  memofunc200.methodName = "TypeUnion";
  memofunc200.paramCounts = [0];
  memofunc200.paramNames = [];
  memofunc200.definitionLine = 220;
  memofunc200.definitionModule = "standardGrace";
  func200.methodName = "TypeUnion";
  func200.paramCounts = [0];
  func200.paramNames = [];
  func200.definitionLine = 220;
  func200.definitionModule = "standardGrace";
  var func201 = function(argcv, inheritingObject, aliases, exclusions) {    // method TypeUnion$build(_,_,_), line 220
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("TypeUnion", 0, numArgs - 0);
    }
    var obj202_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_221");
      this.outer_standardGrace_221 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func203 = function(argcv, var_t1, var_t2) {    // method new(_,_), line 222
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("TypeUnion.new(_,_)", "standardGrace", 222);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_t1, var_t2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func203;
      func203.methodName = "new(2)";
      func203.paramCounts = [2];
      func203.paramNames = ["t1", "t2"];
      func203.definitionLine = 222;
      func203.definitionModule = "standardGrace";
      var func204 = function(argcv, var_t1, var_t2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 222
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj205_build = function(ignore, var_t1, var_t2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_222");
          this.outer_standardGrace_222 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(223);    // reuse call
          var initFun206 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
          setLineNumber(224);    // reuse call
          var initFun207 = selfRequest(importedModules["standardGrace"], "BaseType$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.name = undefined;
          var reader208_name = function() {  // reader method name
              if (this.data.name === undefined) raiseUninitializedVariable("name");
              return this.data.name;
          };
          reader208_name.isVar = true;
          this.methods["name"] = reader208_name;
          var writer209_name = function(argcv, n) {   // writer method name:=(_)
            this.data.name = n;
            return GraceDone;
          };
          writer209_name.confidential = true;
          this.methods["name:=(1)"] = writer209_name;
          var func210 = function(argcv) {    // method methodNames, line 226
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("methodNames", 0, numArgs - 0);
            }
            setLineNumber(227);    // compilenode member
            // call case 6: other requests
            var call211 = request(var_t1, "methodNames", [0]);
            // call case 6: other requests
            var call212 = request(var_t2, "methodNames", [0]);
            var opresult213 = request(call211, "**(1)", [1], call212);
            return opresult213;
          };    // end of method methodNames
          this.methods["methodNames"] = func210;
          func210.methodName = "methodNames";
          func210.paramCounts = [0];
          func210.paramNames = [];
          func210.definitionLine = 226;
          func210.definitionModule = "standardGrace";
          var func214 = function(argcv, var_o) {    // method matchHook(_), line 229
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("matchHook(_)", 0, numArgs - 1);
            }
            setLineNumber(230);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 2: outer request
            var call217 = selfRequest(importedModules["standardGrace"], "mirror", [0]);
            var call216 = request(call217, "reflect(1)", [1], var_o);
            var call215 = request(call216, "methodNames", [0]);
            var var_oMethodNames = call215;
            setLineNumber(231);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call219 = selfRequest(this, "methodNames", [0]);
            var block220 = new GraceBlock(this, 231, 1);
            block220.guard = jsTrue;
            block220.real = function block220(var_each) {
              var if221 = GraceDone;
              setLineNumber(232);    // compilenode call
              // call case 6: other requests
              // call case 6: other requests
              if (var_oMethodNames === undefined) raiseUninitializedVariable("oMethodNames");
              var call223 = request(var_oMethodNames, "contains(1)", [1], var_each);
              var call222 = request(call223, "prefix!", [0]);
              if (Grace_isTrue(call222)) {
                setLineNumber(233);    // compilenode return
                throw new ReturnException(GraceFalse, returnTarget);
              }
              return if221;
            };
            let applyMeth220 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth220.methodName = "apply(1)";
            applyMeth220.paramCounts = [1];
            applyMeth220.paramNames = ["each"];
            applyMeth220.definitionLine = 231;
            applyMeth220.definitionModule = "standardGrace";
            block220.methods["apply(1)"] = applyMeth220;
            let matchesMeth220 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth220.methodName = "matches(1)";
            matchesMeth220.paramCounts = [1];
            matchesMeth220.paramNames = ["each"];
            matchesMeth220.definitionLine = 231;
            matchesMeth220.definitionModule = "standardGrace";
            block220.methods["matches(1)"] = matchesMeth220;
            // call case 2: outer request
            var call218 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call219, block220);
            setLineNumber(236);    // compilenode return
            return GraceTrue;
          };    // end of method matchHook(_)
          this.methods["matchHook(1)"] = func214;
          func214.methodName = "matchHook(1)";
          func214.paramCounts = [1];
          func214.paramNames = ["o"];
          func214.definitionLine = 229;
          func214.definitionModule = "standardGrace";
          var func224 = function(argcv) {    // method asString, line 238
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            var if225 = GraceDone;
            setLineNumber(239);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call226 = selfRequest(this, "name", [0]);
            var string227 = new GraceString("\u2039anon\u203a");
            var opresult228 = request(call226, "==(1)", [1], string227);
            if (Grace_isTrue(opresult228)) {
              setLineNumber(240);    // compilenode string
              var string229 = new GraceString("(");
              var opresult230 = request(string229, "++(1)", [1], var_t1);
              var string231 = new GraceString(" + ");
              var opresult232 = request(opresult230, "++(1)", [1], string231);
              var opresult233 = request(opresult232, "++(1)", [1], var_t2);
              var string234 = new GraceString(")");
              var opresult235 = request(opresult233, "++(1)", [1], string234);
              if225 = opresult235;
            } else {
              setLineNumber(242);    // compilenode string
              var string236 = new GraceString("type ");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call237 = selfRequest(this, "name", [0]);
              var opresult238 = request(string236, "++(1)", [1], call237);
              var string239 = new GraceString("");
              var opresult240 = request(opresult238, "++(1)", [1], string239);
              if225 = opresult240;
            }
            return if225;
          };    // end of method asString
          this.methods["asString"] = func224;
          func224.methodName = "asString";
          func224.paramCounts = [0];
          func224.paramNames = [];
          func224.definitionLine = 238;
          func224.definitionModule = "standardGrace";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 222;
              m.definitionModule = "standardGrace";
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
          var obj205_init = function() {    // init of object on line 222
            initFun206.call(this);
            setLineNumber(225);    // compilenode string
            var string241 = new GraceString("\u2039anon\u203a");
            this.data.name = string241;
          };
          return obj205_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj205_init = obj205_build.call(inheritingObject, null, var_t1, var_t2, this, aliases, exclusions);
        return obj205_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func204;
      func204.methodName = "new(2)$build(3)";
      func204.paramCounts = [2];
      func204.paramNames = ["t1", "t2"];
      func204.definitionLine = 222;
      func204.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 221;
          m.definitionModule = "standardGrace";
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
      var obj202_init = function() {    // init of object on line 221
      };
      return obj202_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj202_init = obj202_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj202_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method TypeUnion$build(_,_,_)
  this.methods["TypeUnion$build(3)"] = func201;
  func201.methodName = "TypeUnion$build(3)";
  func201.paramCounts = [0];
  func201.paramNames = [];
  func201.definitionLine = 220;
  func201.definitionModule = "standardGrace";
  var func242 = function(argcv) {    // method TypeSubtraction, line 249
    var returnTarget = invocationCount;
    invocationCount++;
    var ouc = emptyGraceObject("TypeSubtraction", "standardGrace", 249);
    var ouc_init = this.methods["TypeSubtraction$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method TypeSubtraction
  function memofunc242(argcv) {
      if (! this.data["memo$TypeSubtraction"])    // parameterless memo function
          this.data["memo$TypeSubtraction"] = func242.call(this, argcv);
      return this.data["memo$TypeSubtraction"];
  };
  this.methods["TypeSubtraction"] = memofunc242;
  memofunc242.methodName = "TypeSubtraction";
  memofunc242.paramCounts = [0];
  memofunc242.paramNames = [];
  memofunc242.definitionLine = 249;
  memofunc242.definitionModule = "standardGrace";
  func242.methodName = "TypeSubtraction";
  func242.paramCounts = [0];
  func242.paramNames = [];
  func242.definitionLine = 249;
  func242.definitionModule = "standardGrace";
  var func243 = function(argcv, inheritingObject, aliases, exclusions) {    // method TypeSubtraction$build(_,_,_), line 249
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("TypeSubtraction", 0, numArgs - 0);
    }
    var obj244_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_250");
      this.outer_standardGrace_250 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func245 = function(argcv, var_t1, var_t2) {    // method new(_,_), line 251
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("TypeSubtraction.new(_,_)", "standardGrace", 251);
        var ouc_init = this.methods["new(2)$build(3)"].call(this, null, var_t1, var_t2, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method new(_,_)
      this.methods["new(2)"] = func245;
      func245.methodName = "new(2)";
      func245.paramCounts = [2];
      func245.paramNames = ["t1", "t2"];
      func245.definitionLine = 251;
      func245.definitionModule = "standardGrace";
      var func246 = function(argcv, var_t1, var_t2, inheritingObject, aliases, exclusions) {    // method new(_,_)$build(_,_,_), line 251
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("new(_,_)", 0, numArgs - 2);
        }
        var obj247_build = function(ignore, var_t1, var_t2, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_standardGrace_251");
          this.outer_standardGrace_251 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(252);    // reuse call
          var initFun248 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
          setLineNumber(253);    // reuse call
          var initFun249 = selfRequest(importedModules["standardGrace"], "BaseType$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.name = undefined;
          var reader250_name = function() {  // reader method name
              if (this.data.name === undefined) raiseUninitializedVariable("name");
              return this.data.name;
          };
          reader250_name.isVar = true;
          this.methods["name"] = reader250_name;
          var writer251_name = function(argcv, n) {   // writer method name:=(_)
            this.data.name = n;
            return GraceDone;
          };
          writer251_name.confidential = true;
          this.methods["name:=(1)"] = writer251_name;
          var func252 = function(argcv) {    // method methodNames, line 255
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("methodNames", 0, numArgs - 0);
            }
            setLineNumber(256);    // compilenode member
            // call case 6: other requests
            var call254 = request(var_t2, "methodNames", [0]);
            // call case 6: other requests
            // call case 6: other requests
            var call255 = request(var_t1, "methodNames", [0]);
            var call253 = request(call255, "removeAll(1)", [1], call254);
            return call253;
          };    // end of method methodNames
          this.methods["methodNames"] = func252;
          func252.methodName = "methodNames";
          func252.paramCounts = [0];
          func252.paramNames = [];
          func252.definitionLine = 255;
          func252.definitionModule = "standardGrace";
          var func256 = function(argcv) {    // method asString, line 258
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            var if257 = GraceDone;
            setLineNumber(259);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call258 = selfRequest(this, "name", [0]);
            var string259 = new GraceString("\u2039anon\u203a");
            var opresult260 = request(call258, "==(1)", [1], string259);
            if (Grace_isTrue(opresult260)) {
              setLineNumber(260);    // compilenode string
              var string261 = new GraceString("(");
              var opresult262 = request(string261, "++(1)", [1], var_t1);
              var string263 = new GraceString(" - ");
              var opresult264 = request(opresult262, "++(1)", [1], string263);
              var opresult265 = request(opresult264, "++(1)", [1], var_t2);
              var string266 = new GraceString(")");
              var opresult267 = request(opresult265, "++(1)", [1], string266);
              if257 = opresult267;
            } else {
              setLineNumber(262);    // compilenode string
              var string268 = new GraceString("type ");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call269 = selfRequest(this, "name", [0]);
              var opresult270 = request(string268, "++(1)", [1], call269);
              var string271 = new GraceString("");
              var opresult272 = request(opresult270, "++(1)", [1], string271);
              if257 = opresult272;
            }
            return if257;
          };    // end of method asString
          this.methods["asString"] = func256;
          func256.methodName = "asString";
          func256.paramCounts = [0];
          func256.paramNames = [];
          func256.definitionLine = 258;
          func256.definitionModule = "standardGrace";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 251;
              m.definitionModule = "standardGrace";
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
          var obj247_init = function() {    // init of object on line 251
            initFun248.call(this);
            setLineNumber(254);    // compilenode string
            var string273 = new GraceString("\u2039anon\u203a");
            this.data.name = string273;
          };
          return obj247_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj247_init = obj247_build.call(inheritingObject, null, var_t1, var_t2, this, aliases, exclusions);
        return obj247_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method new(_,_)$build(_,_,_)
      this.methods["new(2)$build(3)"] = func246;
      func246.methodName = "new(2)$build(3)";
      func246.paramCounts = [2];
      func246.paramNames = ["t1", "t2"];
      func246.definitionLine = 251;
      func246.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 250;
          m.definitionModule = "standardGrace";
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
      var obj244_init = function() {    // init of object on line 250
      };
      return obj244_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj244_init = obj244_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj244_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method TypeSubtraction$build(_,_,_)
  this.methods["TypeSubtraction$build(3)"] = func243;
  func243.methodName = "TypeSubtraction$build(3)";
  func243.paramCounts = [0];
  func243.paramNames = [];
  func243.definitionLine = 249;
  func243.definitionModule = "standardGrace";
  var func274 = function(argcv, var_x__39__, var_y__39__) {    // method point2Dx(_)y(_), line 337
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("point2Dx(_)y(_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("point2Dx(_)y(_)", "standardGrace", 337);
    var ouc_init = this.methods["point2Dx(1)y(1)$build(3)"].call(this, null, var_x__39__, var_y__39__, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method point2Dx(_)y(_)
  this.methods["point2Dx(1)y(1)"] = func274;
  func274.methodName = "point2Dx(1)y(1)";
  func274.paramCounts = [1, 1];
  func274.paramNames = ["x'", "y'"];
  func274.definitionLine = 337;
  func274.definitionModule = "standardGrace";
  var func275 = function(argcv, var_x__39__, var_y__39__, inheritingObject, aliases, exclusions) {    // method point2Dx(_)y(_)$build(_,_,_), line 337
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("point2Dx(_)y(_)", 0, numArgs - 2);
    }
    var obj276_build = function(ignore, var_x__39__, var_y__39__, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_337");
      this.outer_standardGrace_337 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(338);    // reuse call
      var initFun277 = selfRequest(importedModules["standardGrace"], "equality$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.x = undefined;
      var reader278_x = function() {  // reader method x
          if (this.data.x === undefined) raiseUninitializedVariable("x");
          return this.data.x;
      };
      reader278_x.isDef = true;
      this.methods["x"] = reader278_x;
      this.data.y = undefined;
      var reader279_y = function() {  // reader method y
          if (this.data.y === undefined) raiseUninitializedVariable("y");
          return this.data.y;
      };
      reader279_y.isDef = true;
      this.methods["y"] = reader279_y;
      var func280 = function(argcv) {    // method asString, line 341
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(341);    // compilenode string
        var string281 = new GraceString("(");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call282 = selfRequest(this, "x", [0]);
        var opresult283 = request(string281, "++(1)", [1], call282);
        var string284 = new GraceString("@");
        var opresult285 = request(opresult283, "++(1)", [1], string284);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call286 = selfRequest(this, "y", [0]);
        var opresult287 = request(opresult285, "++(1)", [1], call286);
        var string288 = new GraceString(")");
        var opresult289 = request(opresult287, "++(1)", [1], string288);
        return opresult289;
      };    // end of method asString
      this.methods["asString"] = func280;
      func280.methodName = "asString";
      func280.paramCounts = [0];
      func280.paramNames = [];
      func280.definitionLine = 341;
      func280.definitionModule = "standardGrace";
      var func290 = function(argcv) {    // method asDebugString, line 342
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(342);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call291 = selfRequest(this, "asString", [0]);
        return call291;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func290;
      func290.methodName = "asDebugString";
      func290.paramCounts = [0];
      func290.paramNames = [];
      func290.definitionLine = 342;
      func290.definitionModule = "standardGrace";
      var func292 = function(argcv, var_other) {    // method distanceTo(_), line 343
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("distanceTo(_)", 0, numArgs - 1);
        }
        setLineNumber(343);    // compilenode member
        // call case 2: outer request
        var call293 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        assertTypeOrMsg(var_other, call293, "argument to request of `distanceTo(_)`", "Point");
        setLineNumber(344);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call295 = selfRequest(this, "x", [0]);
        // call case 6: other requests
        var call296 = request(var_other, "x", [0]);
        var diff297 = request(call295, "-(1)", [1], call296);
        var opresult298 = request(diff297, "^(1)", [1], new GraceNum(2));
        // call case 4: self request with 0 args and 0 typeArgs 
        var call299 = selfRequest(this, "y", [0]);
        // call case 6: other requests
        var call300 = request(var_other, "y", [0]);
        var diff301 = request(call299, "-(1)", [1], call300);
        var opresult302 = request(diff301, "^(1)", [1], new GraceNum(2));
        var sum303 = request(opresult298, "+(1)", [1], opresult302);
        var call294 = request(sum303, "sqrt", [0]);
        return call294;
      };    // end of method distanceTo(_)
      this.methods["distanceTo(1)"] = func292;
      func292.methodName = "distanceTo(1)";
      func292.paramCounts = [1];
      func292.paramNames = ["other"];
      func292.definitionLine = 343;
      func292.definitionModule = "standardGrace";
      var func304 = function(argcv, var_other) {    // method -(_), line 346
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("-(_)", 0, numArgs - 1);
        }
        setLineNumber(347);    // compilenode matchcase
        var cases305 = [];
        setLineNumber(348);    // compilenode block
        var block306 = new GraceBlock(this, 348, 1);
        // call case 2: outer request
        var call307 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        block306.paramTypes = [call307];
        var matches308 = function(var_o) {
          // call case 2: outer request
          var call309 = selfRequest(importedModules["standardGrace"], "Point", [0]);
          if (!Grace_isTrue(request(call309, "matches(1)", [1], var_o)))
              return false;
          return true;
        };
        block306.guard = matches308;
        block306.real = function block306(var_o) {
          setLineNumber(348);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call311 = selfRequest(this, "x", [0]);
          // call case 6: other requests
          var call312 = request(var_o, "x", [0]);
          var diff313 = request(call311, "-(1)", [1], call312);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call314 = selfRequest(this, "y", [0]);
          // call case 6: other requests
          var call315 = request(var_o, "y", [0]);
          var diff316 = request(call314, "-(1)", [1], call315);
          // call case 2: outer request
          var call310 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], diff313, diff316);
          return call310;
        };
        let applyMeth306 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth306.methodName = "apply(1)";
        applyMeth306.paramCounts = [1];
        applyMeth306.paramNames = ["o"];
        applyMeth306.definitionLine = 348;
        applyMeth306.definitionModule = "standardGrace";
        block306.methods["apply(1)"] = applyMeth306;
        let matchesMeth306 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth306.methodName = "matches(1)";
        matchesMeth306.paramCounts = [1];
        matchesMeth306.paramNames = ["o"];
        matchesMeth306.definitionLine = 348;
        matchesMeth306.definitionModule = "standardGrace";
        block306.methods["matches(1)"] = matchesMeth306;
        cases305.push(block306);
        setLineNumber(349);    // compilenode block
        var block317 = new GraceBlock(this, 349, 1);
        block317.paramTypes = [var_Number];
        var matches318 = function(var_n) {
          if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var_n)))
              return false;
          return true;
        };
        block317.guard = matches318;
        block317.real = function block317(var_n) {
          setLineNumber(349);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call320 = selfRequest(this, "x", [0]);
          var diff321 = request(call320, "-(1)", [1], var_n);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call322 = selfRequest(this, "y", [0]);
          var diff323 = request(call322, "-(1)", [1], var_n);
          // call case 2: outer request
          var call319 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], diff321, diff323);
          return call319;
        };
        let applyMeth317 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth317.methodName = "apply(1)";
        applyMeth317.paramCounts = [1];
        applyMeth317.paramNames = ["n"];
        applyMeth317.definitionLine = 349;
        applyMeth317.definitionModule = "standardGrace";
        block317.methods["apply(1)"] = applyMeth317;
        let matchesMeth317 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth317.methodName = "matches(1)";
        matchesMeth317.paramCounts = [1];
        matchesMeth317.paramNames = ["n"];
        matchesMeth317.definitionLine = 349;
        matchesMeth317.definitionModule = "standardGrace";
        block317.methods["matches(1)"] = matchesMeth317;
        cases305.push(block317);
        setLineNumber(350);    // compilenode block
        var block324 = new GraceBlock(this, 350, 0);
        block324.guard = jsTrue;
        block324.real = function block324() {
          setLineNumber(350);    // compilenode call
          // call case 6: other requests
          var call325 = request(var_other, "reverseMinusPoint(1)", [1], this);
          return call325;
        };
        let applyMeth324 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth324.methodName = "apply";
        applyMeth324.paramCounts = [0];
        applyMeth324.paramNames = [];
        applyMeth324.definitionLine = 350;
        applyMeth324.definitionModule = "standardGrace";
        block324.methods["apply"] = applyMeth324;
        setLineNumber(347);    // compilematchcase
        var matchres305 = matchCase(var_other,cases305,block324);
        return matchres305;
      };    // end of method -(_)
      this.methods["-(1)"] = func304;
      func304.methodName = "-(1)";
      func304.paramCounts = [1];
      func304.paramNames = ["other"];
      func304.definitionLine = 346;
      func304.definitionModule = "standardGrace";
      var func326 = function(argcv, var_other) {    // method +(_), line 352
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("+(_)", 0, numArgs - 1);
        }
        setLineNumber(353);    // compilenode matchcase
        var cases327 = [];
        setLineNumber(354);    // compilenode block
        var block328 = new GraceBlock(this, 354, 1);
        // call case 2: outer request
        var call329 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        block328.paramTypes = [call329];
        var matches330 = function(var_o) {
          // call case 2: outer request
          var call331 = selfRequest(importedModules["standardGrace"], "Point", [0]);
          if (!Grace_isTrue(request(call331, "matches(1)", [1], var_o)))
              return false;
          return true;
        };
        block328.guard = matches330;
        block328.real = function block328(var_o) {
          setLineNumber(354);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call333 = selfRequest(this, "x", [0]);
          // call case 6: other requests
          var call334 = request(var_o, "x", [0]);
          var sum335 = request(call333, "+(1)", [1], call334);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call336 = selfRequest(this, "y", [0]);
          // call case 6: other requests
          var call337 = request(var_o, "y", [0]);
          var sum338 = request(call336, "+(1)", [1], call337);
          // call case 2: outer request
          var call332 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], sum335, sum338);
          return call332;
        };
        let applyMeth328 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth328.methodName = "apply(1)";
        applyMeth328.paramCounts = [1];
        applyMeth328.paramNames = ["o"];
        applyMeth328.definitionLine = 354;
        applyMeth328.definitionModule = "standardGrace";
        block328.methods["apply(1)"] = applyMeth328;
        let matchesMeth328 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth328.methodName = "matches(1)";
        matchesMeth328.paramCounts = [1];
        matchesMeth328.paramNames = ["o"];
        matchesMeth328.definitionLine = 354;
        matchesMeth328.definitionModule = "standardGrace";
        block328.methods["matches(1)"] = matchesMeth328;
        cases327.push(block328);
        setLineNumber(355);    // compilenode block
        var block339 = new GraceBlock(this, 355, 1);
        block339.paramTypes = [var_Number];
        var matches340 = function(var_n) {
          if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var_n)))
              return false;
          return true;
        };
        block339.guard = matches340;
        block339.real = function block339(var_n) {
          setLineNumber(355);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call342 = selfRequest(this, "x", [0]);
          var sum343 = request(call342, "+(1)", [1], var_n);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call344 = selfRequest(this, "y", [0]);
          var sum345 = request(call344, "+(1)", [1], var_n);
          // call case 2: outer request
          var call341 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], sum343, sum345);
          return call341;
        };
        let applyMeth339 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth339.methodName = "apply(1)";
        applyMeth339.paramCounts = [1];
        applyMeth339.paramNames = ["n"];
        applyMeth339.definitionLine = 355;
        applyMeth339.definitionModule = "standardGrace";
        block339.methods["apply(1)"] = applyMeth339;
        let matchesMeth339 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth339.methodName = "matches(1)";
        matchesMeth339.paramCounts = [1];
        matchesMeth339.paramNames = ["n"];
        matchesMeth339.definitionLine = 355;
        matchesMeth339.definitionModule = "standardGrace";
        block339.methods["matches(1)"] = matchesMeth339;
        cases327.push(block339);
        setLineNumber(356);    // compilenode block
        var block346 = new GraceBlock(this, 356, 0);
        block346.guard = jsTrue;
        block346.real = function block346() {
          setLineNumber(356);    // compilenode call
          // call case 6: other requests
          var call347 = request(var_other, "reversePlusPoint(1)", [1], this);
          return call347;
        };
        let applyMeth346 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth346.methodName = "apply";
        applyMeth346.paramCounts = [0];
        applyMeth346.paramNames = [];
        applyMeth346.definitionLine = 356;
        applyMeth346.definitionModule = "standardGrace";
        block346.methods["apply"] = applyMeth346;
        setLineNumber(353);    // compilematchcase
        var matchres327 = matchCase(var_other,cases327,block346);
        return matchres327;
      };    // end of method +(_)
      this.methods["+(1)"] = func326;
      func326.methodName = "+(1)";
      func326.paramCounts = [1];
      func326.paramNames = ["other"];
      func326.definitionLine = 352;
      func326.definitionModule = "standardGrace";
      var func348 = function(argcv, var_other) {    // method /(_), line 358
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("/(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_other, var_Number, "argument to request of `/(_)`", "Number");
        setLineNumber(358);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call350 = selfRequest(this, "x", [0]);
        var quotient351 = request(call350, "/(1)", [1], var_other);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call352 = selfRequest(this, "y", [0]);
        var quotient353 = request(call352, "/(1)", [1], var_other);
        // call case 2: outer request
        var call349 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], quotient351, quotient353);
        return call349;
      };    // end of method /(_)
      func348.paramTypes = [];
      func348.paramTypes.push([type_Number, "other"]);
      this.methods["/(1)"] = func348;
      func348.methodName = "/(1)";
      func348.paramCounts = [1];
      func348.paramNames = ["other"];
      func348.definitionLine = 358;
      func348.definitionModule = "standardGrace";
      var func354 = function(argcv, var_other) {    // method *(_), line 359
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("*(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_other, var_Number, "argument to request of `*(_)`", "Number");
        setLineNumber(359);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call356 = selfRequest(this, "x", [0]);
        var prod357 = request(call356, "*(1)", [1], var_other);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call358 = selfRequest(this, "y", [0]);
        var prod359 = request(call358, "*(1)", [1], var_other);
        // call case 2: outer request
        var call355 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], prod357, prod359);
        return call355;
      };    // end of method *(_)
      func354.paramTypes = [];
      func354.paramTypes.push([type_Number, "other"]);
      this.methods["*(1)"] = func354;
      func354.methodName = "*(1)";
      func354.paramCounts = [1];
      func354.paramNames = ["other"];
      func354.definitionLine = 359;
      func354.definitionModule = "standardGrace";
      var func360 = function(argcv) {    // method length, line 360
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("length", 0, numArgs - 0);
        }
        setLineNumber(360);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call362 = selfRequest(this, "x", [0]);
        var opresult363 = request(call362, "^(1)", [1], new GraceNum(2));
        // call case 4: self request with 0 args and 0 typeArgs 
        var call364 = selfRequest(this, "y", [0]);
        var opresult365 = request(call364, "^(1)", [1], new GraceNum(2));
        var sum366 = request(opresult363, "+(1)", [1], opresult365);
        var call361 = request(sum366, "sqrt", [0]);
        return call361;
      };    // end of method length
      this.methods["length"] = func360;
      func360.methodName = "length";
      func360.paramCounts = [0];
      func360.paramNames = [];
      func360.definitionLine = 360;
      func360.definitionModule = "standardGrace";
      var func367 = function(argcv, var_other) {    // method ==(_), line 361
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(362);    // compilenode matchcase
        var cases368 = [];
        setLineNumber(363);    // compilenode block
        var block369 = new GraceBlock(this, 363, 1);
        // call case 2: outer request
        var call370 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        block369.paramTypes = [call370];
        var matches371 = function(var_o) {
          // call case 2: outer request
          var call372 = selfRequest(importedModules["standardGrace"], "Point", [0]);
          if (!Grace_isTrue(request(call372, "matches(1)", [1], var_o)))
              return false;
          return true;
        };
        block369.guard = matches371;
        block369.real = function block369(var_o) {
          setLineNumber(363);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call373 = selfRequest(this, "x", [0]);
          // call case 6: other requests
          var call374 = request(var_o, "x", [0]);
          var opresult375 = request(call373, "==(1)", [1], call374);
          // call case 4: self request with 0 args and 0 typeArgs 
          var call376 = selfRequest(this, "y", [0]);
          // call case 6: other requests
          var call377 = request(var_o, "y", [0]);
          var opresult378 = request(call376, "==(1)", [1], call377);
          var opresult379 = request(opresult375, "&&(1)", [1], opresult378);
          return opresult379;
        };
        let applyMeth369 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth369.methodName = "apply(1)";
        applyMeth369.paramCounts = [1];
        applyMeth369.paramNames = ["o"];
        applyMeth369.definitionLine = 363;
        applyMeth369.definitionModule = "standardGrace";
        block369.methods["apply(1)"] = applyMeth369;
        let matchesMeth369 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth369.methodName = "matches(1)";
        matchesMeth369.paramCounts = [1];
        matchesMeth369.paramNames = ["o"];
        matchesMeth369.definitionLine = 363;
        matchesMeth369.definitionModule = "standardGrace";
        block369.methods["matches(1)"] = matchesMeth369;
        cases368.push(block369);
        setLineNumber(364);    // compilenode block
        var block380 = new GraceBlock(this, 364, 0);
        block380.guard = jsTrue;
        block380.real = function block380() {
          setLineNumber(364);    // compileBlock
          return GraceFalse;
        };
        let applyMeth380 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth380.methodName = "apply";
        applyMeth380.paramCounts = [0];
        applyMeth380.paramNames = [];
        applyMeth380.definitionLine = 364;
        applyMeth380.definitionModule = "standardGrace";
        block380.methods["apply"] = applyMeth380;
        setLineNumber(362);    // compilematchcase
        var matchres368 = matchCase(var_other,cases368,block380);
        return matchres368;
      };    // end of method ==(_)
      this.methods["==(1)"] = func367;
      func367.methodName = "==(1)";
      func367.paramCounts = [1];
      func367.paramNames = ["other"];
      func367.definitionLine = 361;
      func367.definitionModule = "standardGrace";
      var func381 = function(argcv) {    // method prefix-, line 366
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("prefix-", 0, numArgs - 0);
        }
        setLineNumber(366);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call384 = selfRequest(this, "x", [0]);
        var call383 = request(call384, "prefix-", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call386 = selfRequest(this, "y", [0]);
        var call385 = request(call386, "prefix-", [0]);
        // call case 2: outer request
        var call382 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], call383, call385);
        return call382;
      };    // end of method prefix-
      this.methods["prefix-"] = func381;
      func381.methodName = "prefix-";
      func381.paramCounts = [0];
      func381.paramNames = [];
      func381.definitionLine = 366;
      func381.definitionModule = "standardGrace";
      var func387 = function(argcv, var_other) {    // method dot(_), line 367
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("dot(_)", 0, numArgs - 1);
        }
        setLineNumber(367);    // compilenode member
        // call case 2: outer request
        var call388 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        assertTypeOrMsg(var_other, call388, "argument to request of `dot(_)`", "Point");
        setLineNumber(369);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call389 = selfRequest(this, "x", [0]);
        // call case 6: other requests
        var call390 = request(var_other, "x", [0]);
        var prod391 = request(call389, "*(1)", [1], call390);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call392 = selfRequest(this, "y", [0]);
        // call case 6: other requests
        var call393 = request(var_other, "y", [0]);
        var prod394 = request(call392, "*(1)", [1], call393);
        var sum395 = request(prod391, "+(1)", [1], prod394);
        assertTypeOrMsg(sum395, var_Number, "result of method dot(_)", "Number");
        return sum395;
      };    // end of method dot(_)
      this.methods["dot(1)"] = func387;
      func387.methodName = "dot(1)";
      func387.paramCounts = [1];
      func387.paramNames = ["other"];
      func387.definitionLine = 367;
      func387.definitionModule = "standardGrace";
      var func396 = function(argcv, var_other) {    // method ⋅(_), line 371
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("⋅(_)", 0, numArgs - 1);
        }
        setLineNumber(371);    // compilenode member
        // call case 2: outer request
        var call397 = selfRequest(importedModules["standardGrace"], "Point", [0]);
        assertTypeOrMsg(var_other, call397, "argument to request of `⋅(_)`", "Point");
        setLineNumber(373);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call398 = selfRequest(this, "x", [0]);
        // call case 6: other requests
        var call399 = request(var_other, "x", [0]);
        var prod400 = request(call398, "*(1)", [1], call399);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call401 = selfRequest(this, "y", [0]);
        // call case 6: other requests
        var call402 = request(var_other, "y", [0]);
        var prod403 = request(call401, "*(1)", [1], call402);
        var sum404 = request(prod400, "+(1)", [1], prod403);
        assertTypeOrMsg(sum404, var_Number, "result of method ⋅(_)", "Number");
        return sum404;
      };    // end of method ⋅(_)
      this.methods["\u22c5(1)"] = func396;
      func396.methodName = "\u22c5(1)";
      func396.paramCounts = [1];
      func396.paramNames = ["other"];
      func396.definitionLine = 371;
      func396.definitionModule = "standardGrace";
      var func405 = function(argcv, var_n) {    // method reverseTimesNumber(_), line 375
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("reverseTimesNumber(_)", 0, numArgs - 1);
        }
        setLineNumber(375);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call407 = selfRequest(this, "x", [0]);
        var prod408 = request(var_n, "*(1)", [1], call407);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call409 = selfRequest(this, "y", [0]);
        var prod410 = request(var_n, "*(1)", [1], call409);
        // call case 2: outer request
        var call406 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], prod408, prod410);
        return call406;
      };    // end of method reverseTimesNumber(_)
      this.methods["reverseTimesNumber(1)"] = func405;
      func405.methodName = "reverseTimesNumber(1)";
      func405.paramCounts = [1];
      func405.paramNames = ["n"];
      func405.definitionLine = 375;
      func405.definitionModule = "standardGrace";
      var func411 = function(argcv, var_n) {    // method reversePlusNumber(_), line 376
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("reversePlusNumber(_)", 0, numArgs - 1);
        }
        setLineNumber(376);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call413 = selfRequest(this, "x", [0]);
        var sum414 = request(var_n, "+(1)", [1], call413);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call415 = selfRequest(this, "y", [0]);
        var sum416 = request(var_n, "+(1)", [1], call415);
        // call case 2: outer request
        var call412 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], sum414, sum416);
        return call412;
      };    // end of method reversePlusNumber(_)
      this.methods["reversePlusNumber(1)"] = func411;
      func411.methodName = "reversePlusNumber(1)";
      func411.paramCounts = [1];
      func411.paramNames = ["n"];
      func411.definitionLine = 376;
      func411.definitionModule = "standardGrace";
      var func417 = function(argcv, var_n) {    // method reverseDivideNumber(_), line 377
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("reverseDivideNumber(_)", 0, numArgs - 1);
        }
        setLineNumber(377);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call419 = selfRequest(this, "x", [0]);
        var quotient420 = request(var_n, "/(1)", [1], call419);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call421 = selfRequest(this, "y", [0]);
        var quotient422 = request(var_n, "/(1)", [1], call421);
        // call case 2: outer request
        var call418 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], quotient420, quotient422);
        return call418;
      };    // end of method reverseDivideNumber(_)
      this.methods["reverseDivideNumber(1)"] = func417;
      func417.methodName = "reverseDivideNumber(1)";
      func417.paramCounts = [1];
      func417.paramNames = ["n"];
      func417.definitionLine = 377;
      func417.definitionModule = "standardGrace";
      var func423 = function(argcv, var_n) {    // method reverseMinusNumber(_), line 378
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("reverseMinusNumber(_)", 0, numArgs - 1);
        }
        setLineNumber(378);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call425 = selfRequest(this, "x", [0]);
        var diff426 = request(var_n, "-(1)", [1], call425);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call427 = selfRequest(this, "y", [0]);
        var diff428 = request(var_n, "-(1)", [1], call427);
        // call case 2: outer request
        var call424 = selfRequest(importedModules["standardGrace"], "point2Dx(1)y(1)", [1, 1], diff426, diff428);
        return call424;
      };    // end of method reverseMinusNumber(_)
      this.methods["reverseMinusNumber(1)"] = func423;
      func423.methodName = "reverseMinusNumber(1)";
      func423.paramCounts = [1];
      func423.paramNames = ["n"];
      func423.definitionLine = 378;
      func423.definitionModule = "standardGrace";
      var func429 = function(argcv) {    // method norm, line 379
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("norm", 0, numArgs - 0);
        }
        setLineNumber(379);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call430 = selfRequest(this, "length", [0]);
        var quotient431 = request(this, "/(1)", [1], call430);
        return quotient431;
      };    // end of method norm
      this.methods["norm"] = func429;
      func429.methodName = "norm";
      func429.paramCounts = [0];
      func429.paramNames = [];
      func429.definitionLine = 379;
      func429.definitionModule = "standardGrace";
      var func432 = function(argcv) {    // method hash, line 380
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(380);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call435 = selfRequest(this, "x", [0]);
        var call434 = request(call435, "hash", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call437 = selfRequest(this, "y", [0]);
        var call436 = request(call437, "hash", [0]);
        // call case 2: outer request
        var call433 = selfRequest(importedModules["standardGrace"], "hashCombine(2)", [2], call434, call436);
        return call433;
      };    // end of method hash
      this.methods["hash"] = func432;
      func432.methodName = "hash";
      func432.paramCounts = [0];
      func432.paramNames = [];
      func432.definitionLine = 380;
      func432.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 337;
          m.definitionModule = "standardGrace";
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
      var obj276_init = function() {    // init of object on line 337
        this.data.x = var_x__39__;
        this.data.y = var_y__39__;
      };
      return obj276_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj276_init = obj276_build.call(inheritingObject, null, var_x__39__, var_y__39__, this, aliases, exclusions);
    return obj276_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method point2Dx(_)y(_)$build(_,_,_)
  this.methods["point2Dx(1)y(1)$build(3)"] = func275;
  func275.methodName = "point2Dx(1)y(1)$build(3)";
  func275.paramCounts = [1, 1];
  func275.paramNames = ["x'", "y'"];
  func275.definitionLine = 337;
  func275.definitionModule = "standardGrace";
  var func438 = function(argcv, var_a, var_b) {    // method hashCombine(_,_), line 385
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("hashCombine(_,_)", 0, numArgs - 2);
    }
    setLineNumber(392);    // compilenode call
    var result = GraceDone;    // start native code from line 392
    
        var a = var_a._value;
        var b = var_b._value;
        var aHash = a * 1664525;
        var bHash = (b * 1664525 - 0xA21FE89) * 3;
        result = new GraceNum((aHash * 2) ^ bHash);   // end native code insertion
    return result;
  };    // end of method hashCombine(_,_)
  this.methods["hashCombine(2)"] = func438;
  func438.methodName = "hashCombine(2)";
  func438.paramCounts = [2];
  func438.paramNames = ["a", "b"];
  func438.definitionLine = 385;
  func438.definitionModule = "standardGrace";
  var func439 = function(argcv) {    // method equality, line 407
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("equality", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("equality", "standardGrace", 407);
    var ouc_init = this.methods["equality$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method equality
  this.methods["equality"] = func439;
  func439.methodName = "equality";
  func439.paramCounts = [0];
  func439.paramNames = [];
  func439.definitionLine = 407;
  func439.definitionModule = "standardGrace";
  var func440 = function(argcv, inheritingObject, aliases, exclusions) {    // method equality$build(_,_,_), line 407
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("equality", 0, numArgs - 0);
    }
    var obj441_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_407");
      this.outer_standardGrace_407 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      if (! this.methods["==(1)"]) {
        var func442 = function(argcv, var_other) {    // method ==(_), line 408
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("==(_)", 0, numArgs - 1);
          }
          setLineNumber(408);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method ==(_) was not supplied"));
        };    // end of method ==(_)
        this.methods["==(1)"] = func442;
        func442.methodName = "==(1)";
        func442.paramCounts = [1];
        func442.paramNames = ["other"];
        func442.definitionLine = 408;
        func442.definitionModule = "standardGrace";
      };
      if (! this.methods["hash"]) {
        var func443 = function(argcv) {    // method hash, line 409
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("hash", 0, numArgs - 0);
          }
          setLineNumber(409);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method hash was not supplied"));
        };    // end of method hash
        this.methods["hash"] = func443;
        func443.methodName = "hash";
        func443.paramCounts = [0];
        func443.paramNames = [];
        func443.definitionLine = 409;
        func443.definitionModule = "standardGrace";
      };
      var func444 = function(argcv, var_other) {    // method ≠(_), line 410
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≠(_)", 0, numArgs - 1);
        }
        setLineNumber(410);    // compilenode member
        // call case 6: other requests
        var opresult446 = request(this, "==(1)", [1], var_other);
        var call445 = request(opresult446, "not", [0]);
        return call445;
      };    // end of method ≠(_)
      this.methods["\u2260(1)"] = func444;
      func444.methodName = "\u2260(1)";
      func444.paramCounts = [1];
      func444.paramNames = ["other"];
      func444.definitionLine = 410;
      func444.definitionModule = "standardGrace";
      var func447 = function(argcv, var_obj) {    // method ::(_), line 411
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("::(_)", 0, numArgs - 1);
        }
        setLineNumber(411);    // compilenode call
        // call case 6: other requests
        if (var_binding === undefined) raiseUninitializedVariable("binding");
        var call448 = request(var_binding, "key(1)value(1)", [1, 1], this, var_obj);
        return call448;
      };    // end of method ::(_)
      this.methods["::(1)"] = func447;
      func447.methodName = "::(1)";
      func447.paramCounts = [1];
      func447.paramNames = ["obj"];
      func447.definitionLine = 411;
      func447.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 407;
          m.definitionModule = "standardGrace";
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
      var obj441_init = function() {    // init of object on line 407
      };
      return obj441_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj441_init = obj441_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj441_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method equality$build(_,_,_)
  this.methods["equality$build(3)"] = func440;
  func440.methodName = "equality$build(3)";
  func440.paramCounts = [0];
  func440.paramNames = [];
  func440.definitionLine = 407;
  func440.definitionModule = "standardGrace";
  var func449 = function(argcv) {    // method identityEquality, line 414
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("identityEquality", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("identityEquality", "standardGrace", 414);
    var ouc_init = this.methods["identityEquality$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method identityEquality
  this.methods["identityEquality"] = func449;
  func449.methodName = "identityEquality";
  func449.paramCounts = [0];
  func449.paramNames = [];
  func449.definitionLine = 414;
  func449.definitionModule = "standardGrace";
  var func450 = function(argcv, inheritingObject, aliases, exclusions) {    // method identityEquality$build(_,_,_), line 414
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("identityEquality", 0, numArgs - 0);
    }
    var obj451_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_standardGrace_414");
      this.outer_standardGrace_414 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(415);    // reuse call
      var initFun452 = selfRequest(importedModules["standardGrace"], "equality$build(3)", [null], this, [], []);  // compileReuseCall
      var func453 = function(argcv, var_other) {    // method ==(_), line 416
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(416);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call454 = selfRequest(this, "isMe(1)", [1], var_other);
        return call454;
      };    // end of method ==(_)
      this.methods["==(1)"] = func453;
      func453.methodName = "==(1)";
      func453.paramCounts = [1];
      func453.paramNames = ["other"];
      func453.definitionLine = 416;
      func453.definitionModule = "standardGrace";
      var func455 = function(argcv) {    // method hash, line 417
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(417);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call456 = selfRequest(this, "myIdentityHash", [0]);
        return call456;
      };    // end of method hash
      this.methods["hash"] = func455;
      func455.methodName = "hash";
      func455.paramCounts = [0];
      func455.paramNames = [];
      func455.definitionLine = 417;
      func455.definitionModule = "standardGrace";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 414;
          m.definitionModule = "standardGrace";
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
      var obj451_init = function() {    // init of object on line 414
      };
      return obj451_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj451_init = obj451_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj451_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method identityEquality$build(_,_,_)
  this.methods["identityEquality$build(3)"] = func450;
  func450.methodName = "identityEquality$build(3)";
  func450.paramCounts = [0];
  func450.paramNames = [];
  func450.definitionLine = 414;
  func450.definitionModule = "standardGrace";
  var func457 = function(argcv, var_T) {    // method collection, line 489
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("collection", 1, numArgs - 0);
    }
    setLineNumber(489);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call458 = request(var_collections, "collection", [0, 1], var_T);
    return call458;
  };    // end of method collection
  this.methods["collection"] = func457;
  func457.methodName = "collection";
  func457.paramCounts = [0];
  func457.paramNames = [];
  func457.typeParamNames = ["T"];
  func457.definitionLine = 489;
  func457.definitionModule = "standardGrace";
  var func459 = function(argcv, var_T) {    // method enumerable, line 490
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("enumerable", 1, numArgs - 0);
    }
    setLineNumber(490);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call460 = request(var_collections, "enumerable", [0, 1], var_T);
    return call460;
  };    // end of method enumerable
  this.methods["enumerable"] = func459;
  func459.methodName = "enumerable";
  func459.paramCounts = [0];
  func459.paramNames = [];
  func459.typeParamNames = ["T"];
  func459.definitionLine = 490;
  func459.definitionModule = "standardGrace";
  var func461 = function(argcv, var_T) {    // method indexable, line 491
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("indexable", 1, numArgs - 0);
    }
    setLineNumber(491);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call462 = request(var_collections, "indexable", [0, 1], var_T);
    return call462;
  };    // end of method indexable
  this.methods["indexable"] = func461;
  func461.methodName = "indexable";
  func461.paramCounts = [0];
  func461.paramNames = [];
  func461.typeParamNames = ["T"];
  func461.definitionLine = 491;
  func461.definitionModule = "standardGrace";
  var func463 = function(argcv, var_T) {    // method sequence, line 493
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("sequence", 1, numArgs - 0);
    }
    setLineNumber(493);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call464 = request(var_collections, "sequence", [0, 1], var_T);
    return call464;
  };    // end of method sequence
  this.methods["sequence"] = func463;
  func463.methodName = "sequence";
  func463.paramCounts = [0];
  func463.paramNames = [];
  func463.typeParamNames = ["T"];
  func463.definitionLine = 493;
  func463.definitionModule = "standardGrace";
  var func465 = function(argcv, var_arg, var_T) {    // method sequence(_), line 494
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("sequence(_)", 1, numArgs - 1);
    }
    setLineNumber(494);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call467 = request(var_collections, "sequence", [0, 1], var_T);
    var call466 = request(call467, "withAll(1)", [1], var_arg);
    return call466;
  };    // end of method sequence(_)
  this.methods["sequence(1)"] = func465;
  func465.methodName = "sequence(1)";
  func465.paramCounts = [1];
  func465.paramNames = ["arg"];
  func465.typeParamNames = ["T"];
  func465.definitionLine = 494;
  func465.definitionModule = "standardGrace";
  var func468 = function(argcv, var_T) {    // method list, line 497
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("list", 1, numArgs - 0);
    }
    setLineNumber(497);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call469 = request(var_collections, "list", [0, 1], var_T);
    return call469;
  };    // end of method list
  this.methods["list"] = func468;
  func468.methodName = "list";
  func468.paramCounts = [0];
  func468.paramNames = [];
  func468.typeParamNames = ["T"];
  func468.definitionLine = 497;
  func468.definitionModule = "standardGrace";
  var func470 = function(argcv, var_arg, var_T) {    // method list(_), line 498
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("list(_)", 1, numArgs - 1);
    }
    setLineNumber(498);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call472 = request(var_collections, "list", [0, 1], var_T);
    var call471 = request(call472, "withAll(1)", [1], var_arg);
    return call471;
  };    // end of method list(_)
  this.methods["list(1)"] = func470;
  func470.methodName = "list(1)";
  func470.paramCounts = [1];
  func470.paramNames = ["arg"];
  func470.typeParamNames = ["T"];
  func470.definitionLine = 498;
  func470.definitionModule = "standardGrace";
  var func473 = function(argcv, var_T) {    // method emptyList, line 499
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("emptyList", 1, numArgs - 0);
    }
    setLineNumber(499);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call475 = request(var_collections, "list", [0, 1], var_T);
    var call474 = request(call475, "empty", [0]);
    return call474;
  };    // end of method emptyList
  this.methods["emptyList"] = func473;
  func473.methodName = "emptyList";
  func473.paramCounts = [0];
  func473.paramNames = [];
  func473.typeParamNames = ["T"];
  func473.definitionLine = 499;
  func473.definitionModule = "standardGrace";
  var func476 = function(argcv, var_T) {    // method set, line 501
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("set", 1, numArgs - 0);
    }
    setLineNumber(501);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call477 = request(var_collections, "set", [0, 1], var_T);
    return call477;
  };    // end of method set
  this.methods["set"] = func476;
  func476.methodName = "set";
  func476.paramCounts = [0];
  func476.paramNames = [];
  func476.typeParamNames = ["T"];
  func476.definitionLine = 501;
  func476.definitionModule = "standardGrace";
  var func478 = function(argcv, var_arg, var_T) {    // method set(_), line 502
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 2)) {
        raiseTypeArgError("set(_)", 1, numArgs - 1);
    }
    setLineNumber(502);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call480 = request(var_collections, "set", [0, 1], var_T);
    var call479 = request(call480, "withAll(1)", [1], var_arg);
    return call479;
  };    // end of method set(_)
  this.methods["set(1)"] = func478;
  func478.methodName = "set(1)";
  func478.paramCounts = [1];
  func478.paramNames = ["arg"];
  func478.typeParamNames = ["T"];
  func478.definitionLine = 502;
  func478.definitionModule = "standardGrace";
  var func481 = function(argcv, var_T) {    // method emptySet, line 503
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("emptySet", 1, numArgs - 0);
    }
    setLineNumber(503);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call483 = request(var_collections, "set", [0, 1], var_T);
    var call482 = request(call483, "empty", [0]);
    return call482;
  };    // end of method emptySet
  this.methods["emptySet"] = func481;
  func481.methodName = "emptySet";
  func481.paramCounts = [0];
  func481.paramNames = [];
  func481.typeParamNames = ["T"];
  func481.definitionLine = 503;
  func481.definitionModule = "standardGrace";
  var func484 = function(argcv, var_K, var_T) {    // method dictionary, line 505
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    setLineNumber(505);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call485 = request(var_collections, "dictionary", [0, 2], var_K, var_T);
    return call485;
  };    // end of method dictionary
  this.methods["dictionary"] = func484;
  func484.methodName = "dictionary";
  func484.paramCounts = [0];
  func484.paramNames = [];
  func484.typeParamNames = ["K", "T"];
  func484.definitionLine = 505;
  func484.definitionModule = "standardGrace";
  var func486 = function(argcv, var_arg, var_K, var_T) {    // method dictionary(_), line 506
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 3)) {
        raiseTypeArgError("dictionary(_)", 2, numArgs - 1);
    }
    setLineNumber(506);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call488 = request(var_collections, "dictionary", [0, 2], var_K, var_T);
    var call487 = request(call488, "withAll(1)", [1], var_arg);
    return call487;
  };    // end of method dictionary(_)
  this.methods["dictionary(1)"] = func486;
  func486.methodName = "dictionary(1)";
  func486.paramCounts = [1];
  func486.paramNames = ["arg"];
  func486.typeParamNames = ["K", "T"];
  func486.definitionLine = 506;
  func486.definitionModule = "standardGrace";
  var func489 = function(argcv, var_K, var_T) {    // method emptyDictionary, line 507
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("emptyDictionary", 2, numArgs - 0);
    }
    setLineNumber(507);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call491 = request(var_collections, "dictionary", [0, 2], var_K, var_T);
    var call490 = request(call491, "empty", [0]);
    return call490;
  };    // end of method emptyDictionary
  this.methods["emptyDictionary"] = func489;
  func489.methodName = "emptyDictionary";
  func489.paramCounts = [0];
  func489.paramNames = [];
  func489.typeParamNames = ["K", "T"];
  func489.definitionLine = 507;
  func489.definitionModule = "standardGrace";
  var func492 = function(argcv) {    // method methods, line 512
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("methods", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("methods", "standardGrace", 512);
    var ouc_init = this.methods["methods$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method methods
  this.methods["methods"] = func492;
  func492.methodName = "methods";
  func492.paramCounts = [0];
  func492.paramNames = [];
  func492.definitionLine = 512;
  func492.definitionModule = "standardGrace";
  var func493 = function(argcv, ouc, aliases, exclusions) {    // method methods$build(_,_,_), line 512
    var returnTarget = invocationCount;
    invocationCount++;
    // call case 2: outer request
    var call494 = selfRequest(var_prelude, "clone(1)$build(3)", [1, 3], this, ouc, aliases, exclusions);
    return call494;      // from compileBuildMethodFor(_)withFreshCall(_)inside(_)
  };    // end of method methods$build(_,_,_)
  this.methods["methods$build(3)"] = func493;
  func493.methodName = "methods$build(3)";
  func493.paramCounts = [0];
  func493.paramNames = [];
  func493.definitionLine = 512;
  func493.definitionModule = "standardGrace";
  setLineNumber(112);    // compilenode object
  var obj495_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_standardGrace_112");
    this.outer_standardGrace_112 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func496 = function(argcv) {    // method new, line 113
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("new", 0, numArgs - 0);
      }
      var ouc = emptyGraceObject("Singleton.new", "standardGrace", 113);
      var ouc_init = this.methods["new$build(3)"].call(this, null, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method new
    this.methods["new"] = func496;
    func496.methodName = "new";
    func496.paramCounts = [0];
    func496.paramNames = [];
    func496.definitionLine = 113;
    func496.definitionModule = "standardGrace";
    var func497 = function(argcv, inheritingObject, aliases, exclusions) {    // method new$build(_,_,_), line 113
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("new", 0, numArgs - 0);
      }
      var obj498_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_standardGrace_113");
        this.outer_standardGrace_113 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(114);    // reuse call
        var initFun499 = selfRequest(importedModules["standardGrace"], "BasicPattern$build(3)", [null], this, [], []);  // compileReuseCall
        setLineNumber(115);    // reuse call
        var initFun500 = selfRequest(importedModules["standardGrace"], "identityEquality$build(3)", [null], this, [], []);  // compileReuseCall
        var func501 = function(argcv, var_other) {    // method matches(_), line 116
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("matches(_)", 0, numArgs - 1);
          }
          setLineNumber(116);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call502 = selfRequest(this, "isMe(1)", [1], var_other);
          return call502;
        };    // end of method matches(_)
        this.methods["matches(1)"] = func501;
        func501.methodName = "matches(1)";
        func501.paramCounts = [1];
        func501.paramNames = ["other"];
        func501.definitionLine = 116;
        func501.definitionModule = "standardGrace";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 113;
            m.definitionModule = "standardGrace";
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
        var obj498_init = function() {    // init of object on line 113
        };
        return obj498_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj498_init = obj498_build.call(inheritingObject, null, this, aliases, exclusions);
      return obj498_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method new$build(_,_,_)
    this.methods["new$build(3)"] = func497;
    func497.methodName = "new$build(3)";
    func497.paramCounts = [0];
    func497.paramNames = [];
    func497.definitionLine = 113;
    func497.definitionModule = "standardGrace";
    var func503 = function(argcv, var_printString) {    // method named(_), line 118
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("named(_)", 0, numArgs - 1);
      }
      var ouc = emptyGraceObject("Singleton.named(_)", "standardGrace", 118);
      var ouc_init = this.methods["named(1)$build(3)"].call(this, null, var_printString, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method named(_)
    this.methods["named(1)"] = func503;
    func503.methodName = "named(1)";
    func503.paramCounts = [1];
    func503.paramNames = ["printString"];
    func503.definitionLine = 118;
    func503.definitionModule = "standardGrace";
    var func504 = function(argcv, var_printString, inheritingObject, aliases, exclusions) {    // method named(_)$build(_,_,_), line 118
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("named(_)", 0, numArgs - 1);
      }
      var obj505_build = function(ignore, var_printString, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_standardGrace_118");
        this.outer_standardGrace_118 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(119);    // reuse call
        if (var_Singleton === undefined) raiseUninitializedVariable("Singleton");
        var initFun506 = request(var_Singleton, "new$build(3)", [null], this, [], []);  // compileReuseCall
        var func507 = function(argcv) {     // accessor method asString
          const numArgs = arguments.length - 1;
          if (numArgs > 0) raiseTypeArgError("asString", 0, numArgs - 0);
          return var_printString;
        };    // end of method asString
        this.methods["asString"] = func507;
        func507.methodName = "asString";
        func507.paramCounts = [0];
        func507.paramNames = [];
        func507.definitionLine = 120;
        func507.definitionModule = "standardGrace";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 118;
            m.definitionModule = "standardGrace";
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
        var obj505_init = function() {    // init of object on line 118
        };
        return obj505_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj505_init = obj505_build.call(inheritingObject, null, var_printString, this, aliases, exclusions);
      return obj505_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method named(_)$build(_,_,_)
    this.methods["named(1)$build(3)"] = func504;
    func504.methodName = "named(1)$build(3)";
    func504.paramCounts = [1];
    func504.paramNames = ["printString"];
    func504.definitionLine = 118;
    func504.definitionModule = "standardGrace";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 112;
        m.definitionModule = "standardGrace";
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
    var obj495_init = function() {    // init of object on line 112
    };
    return obj495_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj495 = emptyGraceObject("Singleton", "standardGrace", 112);
  var obj495_init = obj495_build.call(obj495, null, this, [], []);
  obj495_init.call(obj495);  // end of compileobject
  var var_Singleton = obj495;
  var reader508_Singleton = function() {  // reader method Singleton
      if (var_Singleton === undefined) raiseUninitializedVariable("Singleton");
      return var_Singleton;
  };
  reader508_Singleton.isDef = true;
  this.methods["Singleton"] = reader508_Singleton;
  setLineNumber(272);    // compilenode typedec
  // Type decl Extractable
  var func510 = function(argcv) {    // method Extractable, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(272);    // compilenode typeliteral
    //   Type literal 
    var typeLit511 = new GraceType("Extractable");
    typeLit511.typeMethods.push("extract");
    return typeLit511;
  };    // end of method Extractable
  function memofunc510(argcv) {
      if (! this.data["memo$Extractable"])    // parameterless memo function
          this.data["memo$Extractable"] = func510.call(this, argcv);
      return this.data["memo$Extractable"];
  };
  this.methods["Extractable"] = memofunc510;
  memofunc510.methodName = "Extractable";
  memofunc510.paramCounts = [0];
  memofunc510.paramNames = [];
  memofunc510.definitionLine = 513;
  memofunc510.definitionModule = "standardGrace";
  func510.methodName = "Extractable";
  func510.paramCounts = [0];
  func510.paramNames = [];
  func510.definitionLine = 513;
  func510.definitionModule = "standardGrace";
  setLineNumber(276);    // compilenode typedec
  // Type decl Pattern
  var func513 = function(argcv) {    // method Pattern, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(276);    // compilenode typeliteral
    //   Type literal 
    var typeLit514 = new GraceType("Pattern");
    typeLit514.typeMethods.push("&(1)");
    typeLit514.typeMethods.push("|(1)");
    typeLit514.typeMethods.push("matches(1)");
    return typeLit514;
  };    // end of method Pattern
  function memofunc513(argcv) {
      if (! this.data["memo$Pattern"])    // parameterless memo function
          this.data["memo$Pattern"] = func513.call(this, argcv);
      return this.data["memo$Pattern"];
  };
  this.methods["Pattern"] = memofunc513;
  memofunc513.methodName = "Pattern";
  memofunc513.paramCounts = [0];
  memofunc513.paramNames = [];
  memofunc513.definitionLine = 513;
  memofunc513.definitionModule = "standardGrace";
  func513.methodName = "Pattern";
  func513.paramCounts = [0];
  func513.paramNames = [];
  func513.definitionLine = 513;
  func513.definitionModule = "standardGrace";
  setLineNumber(282);    // compilenode typedec
  // Type decl ExceptionKind
  var func516 = function(argcv) {    // method ExceptionKind, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(513);    // compilenode string
    var string518 = new GraceString("ExceptionKind");
    // call case 6: other requests
    setLineNumber(282);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call519 = selfRequest(this, "Pattern", [0]);
    //   Type literal 
    var typeLit520 = new GraceType("\u2039anon\u203a");
    typeLit520.typeMethods.push("refine(1)");
    typeLit520.typeMethods.push("parent");
    typeLit520.typeMethods.push("raise(1)");
    typeLit520.typeMethods.push("raise(1)with(1)");
    var opresult521 = request(call519, "&(1)", [1], typeLit520);
    var call517 = selfRequest(opresult521, "setName(1)", [1], string518);
    return call517;
  };    // end of method ExceptionKind
  function memofunc516(argcv) {
      if (! this.data["memo$ExceptionKind"])    // parameterless memo function
          this.data["memo$ExceptionKind"] = func516.call(this, argcv);
      return this.data["memo$ExceptionKind"];
  };
  this.methods["ExceptionKind"] = memofunc516;
  memofunc516.methodName = "ExceptionKind";
  memofunc516.paramCounts = [0];
  memofunc516.paramNames = [];
  memofunc516.definitionLine = 513;
  memofunc516.definitionModule = "standardGrace";
  func516.methodName = "ExceptionKind";
  func516.paramCounts = [0];
  func516.paramNames = [];
  func516.definitionLine = 513;
  func516.definitionModule = "standardGrace";
  setLineNumber(289);    // compilenode typedec
  // Type decl Point
  var func523 = function(argcv) {    // method Point, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(289);    // compilenode typeliteral
    //   Type literal 
    var typeLit524 = new GraceType("Point");
    typeLit524.typeMethods.push("x");
    typeLit524.typeMethods.push("y");
    typeLit524.typeMethods.push("==(1)");
    typeLit524.typeMethods.push("+(1)");
    typeLit524.typeMethods.push("-(1)");
    typeLit524.typeMethods.push("prefix-");
    typeLit524.typeMethods.push("*(1)");
    typeLit524.typeMethods.push("/(1)");
    typeLit524.typeMethods.push("length");
    typeLit524.typeMethods.push("distanceTo(1)");
    typeLit524.typeMethods.push("dot(1)");
    typeLit524.typeMethods.push("\u22c5(1)");
    typeLit524.typeMethods.push("norm");
    typeLit524.typeMethods.push("hash");
    return typeLit524;
  };    // end of method Point
  function memofunc523(argcv) {
      if (! this.data["memo$Point"])    // parameterless memo function
          this.data["memo$Point"] = func523.call(this, argcv);
      return this.data["memo$Point"];
  };
  this.methods["Point"] = memofunc523;
  memofunc523.methodName = "Point";
  memofunc523.paramCounts = [0];
  memofunc523.paramNames = [];
  memofunc523.definitionLine = 513;
  memofunc523.definitionModule = "standardGrace";
  func523.methodName = "Point";
  func523.paramCounts = [0];
  func523.paramNames = [];
  func523.definitionLine = 513;
  func523.definitionModule = "standardGrace";
  setLineNumber(383);    // compilenode member
  // call case 2: outer request
  var call525 = selfRequest(var_prelude, "\u03c0", [0]);
  var var_pi = call525;
  var reader526_pi = function() {  // reader method pi
      if (var_pi === undefined) raiseUninitializedVariable("pi");
      return var_pi;
  };
  reader526_pi.isDef = true;
  this.methods["pi"] = reader526_pi;
  setLineNumber(399);    // compilenode import
  // Import of "collectionsPrelude" as coll
  if (typeof gracecode_collectionsPrelude == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module collectionsPrelude"));
  var var_coll = do_import("collectionsPrelude", gracecode_collectionsPrelude);
  var func527 = function(argcv) {     // accessor method coll
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("coll", 0, numArgs - 0);
    if (var_coll === undefined) raiseUninitializedVariable("coll");
    return var_coll;
  };    // end of method coll
  this.methods["coll"] = func527;
  func527.methodName = "coll";
  func527.paramCounts = [0];
  func527.paramNames = [];
  func527.definitionLine = 399;
  func527.definitionModule = "standardGrace";
  func527.debug = "import";
  func527.confidential = true;
  setLineNumber(405);    // compilenode defdec
  var var_collections = var_coll;
  var reader528_collections = function() {  // reader method collections
      if (var_collections === undefined) raiseUninitializedVariable("collections");
      return var_collections;
  };
  reader528_collections.isDef = true;
  this.methods["collections"] = reader528_collections;
  setLineNumber(422);    // compilenode typedec
  // Type decl Function0
  var func530 = function(argcv, var_ResultT) {    // method Function0, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(422);    // compilenode typeliteral
    //   Type literal 
    var typeLit531 = new GraceType("Function0");
    typeLit531.typeMethods.push("apply");
    return typeLit531;
  };    // end of method Function0
  function memofunc530(argcv, var_ResultT) {
    if (! var_ResultT) var_ResultT = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Function0", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Function0"] ||
          ( this.data["memo$Function0"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ResultT;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func530.call(this, argcv, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function0"] = memofunc530;
  memofunc530.methodName = "Function0";
  memofunc530.paramCounts = [0];
  memofunc530.paramNames = [];
  memofunc530.typeParamNames = ["ResultT"];
  memofunc530.definitionLine = 513;
  memofunc530.definitionModule = "standardGrace";
  func530.methodName = "Function0";
  func530.paramCounts = [0];
  func530.paramNames = [];
  func530.typeParamNames = ["ResultT"];
  func530.definitionLine = 513;
  func530.definitionModule = "standardGrace";
  setLineNumber(426);    // compilenode typedec
  // Type decl Function1
  var func533 = function(argcv, var_ArgT1, var_ResultT) {    // method Function1, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(426);    // compilenode typeliteral
    //   Type literal 
    var typeLit534 = new GraceType("Function1");
    typeLit534.typeMethods.push("apply(1)");
    typeLit534.typeMethods.push("matches(1)");
    return typeLit534;
  };    // end of method Function1
  function memofunc533(argcv, var_ArgT1, var_ResultT) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ResultT) var_ResultT = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("Function1", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$Function1"] ||
          ( this.data["memo$Function1"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ResultT]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func533.call(this, argcv, var_ArgT1, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function1"] = memofunc533;
  memofunc533.methodName = "Function1";
  memofunc533.paramCounts = [0];
  memofunc533.paramNames = [];
  memofunc533.typeParamNames = ["ArgT1", "ResultT"];
  memofunc533.definitionLine = 513;
  memofunc533.definitionModule = "standardGrace";
  func533.methodName = "Function1";
  func533.paramCounts = [0];
  func533.paramNames = [];
  func533.typeParamNames = ["ArgT1", "ResultT"];
  func533.definitionLine = 513;
  func533.definitionModule = "standardGrace";
  setLineNumber(430);    // compilenode typedec
  // Type decl Function2
  var func536 = function(argcv, var_ArgT1, var_ArgT2, var_ResultT) {    // method Function2, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(430);    // compilenode typeliteral
    //   Type literal 
    var typeLit537 = new GraceType("Function2");
    typeLit537.typeMethods.push("apply(2)");
    typeLit537.typeMethods.push("matches(2)");
    return typeLit537;
  };    // end of method Function2
  function memofunc536(argcv, var_ArgT1, var_ArgT2, var_ResultT) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    if (! var_ResultT) var_ResultT = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 3)) {
        raiseTypeArgError("Function2", 3, numArgs - 0);
    }
    let memoTable = this.data["memo$Function2"] ||
          ( this.data["memo$Function2"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2, var_ResultT]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func536.call(this, argcv, var_ArgT1, var_ArgT2, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function2"] = memofunc536;
  memofunc536.methodName = "Function2";
  memofunc536.paramCounts = [0];
  memofunc536.paramNames = [];
  memofunc536.typeParamNames = ["ArgT1", "ArgT2", "ResultT"];
  memofunc536.definitionLine = 513;
  memofunc536.definitionModule = "standardGrace";
  func536.methodName = "Function2";
  func536.paramCounts = [0];
  func536.paramNames = [];
  func536.typeParamNames = ["ArgT1", "ArgT2", "ResultT"];
  func536.definitionLine = 513;
  func536.definitionModule = "standardGrace";
  setLineNumber(436);    // compilenode typedec
  // Type decl Function3
  var func539 = function(argcv, var_ArgT1, var_ArgT2, var_ArgT3, var_ResultT) {    // method Function3, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(436);    // compilenode typeliteral
    //   Type literal 
    var typeLit540 = new GraceType("Function3");
    typeLit540.typeMethods.push("apply(3)");
    typeLit540.typeMethods.push("matches(3)");
    return typeLit540;
  };    // end of method Function3
  function memofunc539(argcv, var_ArgT1, var_ArgT2, var_ArgT3, var_ResultT) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    if (! var_ArgT3) var_ArgT3 = var_Unknown;
    if (! var_ResultT) var_ResultT = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 4)) {
        raiseTypeArgError("Function3", 4, numArgs - 0);
    }
    let memoTable = this.data["memo$Function3"] ||
          ( this.data["memo$Function3"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2, var_ArgT3, var_ResultT]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func539.call(this, argcv, var_ArgT1, var_ArgT2, var_ArgT3, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function3"] = memofunc539;
  memofunc539.methodName = "Function3";
  memofunc539.paramCounts = [0];
  memofunc539.paramNames = [];
  memofunc539.typeParamNames = ["ArgT1", "ArgT2", "ArgT3", "ResultT"];
  memofunc539.definitionLine = 513;
  memofunc539.definitionModule = "standardGrace";
  func539.methodName = "Function3";
  func539.paramCounts = [0];
  func539.paramNames = [];
  func539.typeParamNames = ["ArgT1", "ArgT2", "ArgT3", "ResultT"];
  func539.definitionLine = 513;
  func539.definitionModule = "standardGrace";
  setLineNumber(442);    // compilenode typedec
  // Type decl EqualityObject
  var func542 = function(argcv) {    // method EqualityObject, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(513);    // compilenode string
    var string544 = new GraceString("EqualityObject");
    // call case 6: other requests
    setLineNumber(442);    // compilenode typeliteral
    //   Type literal 
    var typeLit545 = new GraceType("\u2039anon\u203a");
    typeLit545.typeMethods.push("::(1)");
    typeLit545.typeMethods.push("==(1)");
    typeLit545.typeMethods.push("\u2260(1)");
    typeLit545.typeMethods.push("hash");
    var opresult546 = request(var_Object, "&(1)", [1], typeLit545);
    var call543 = selfRequest(opresult546, "setName(1)", [1], string544);
    return call543;
  };    // end of method EqualityObject
  function memofunc542(argcv) {
      if (! this.data["memo$EqualityObject"])    // parameterless memo function
          this.data["memo$EqualityObject"] = func542.call(this, argcv);
      return this.data["memo$EqualityObject"];
  };
  this.methods["EqualityObject"] = memofunc542;
  memofunc542.methodName = "EqualityObject";
  memofunc542.paramCounts = [0];
  memofunc542.paramNames = [];
  memofunc542.definitionLine = 513;
  memofunc542.definitionModule = "standardGrace";
  func542.methodName = "EqualityObject";
  func542.paramCounts = [0];
  func542.paramNames = [];
  func542.definitionLine = 513;
  func542.definitionModule = "standardGrace";
  setLineNumber(451);    // compilenode typedec
  // Type decl Procedure0
  var func548 = function(argcv) {    // method Procedure0, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(451);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call549 = selfRequest(this, "Function0", [0, 1], var_Done);
    return call549;
  };    // end of method Procedure0
  function memofunc548(argcv) {
      if (! this.data["memo$Procedure0"])    // parameterless memo function
          this.data["memo$Procedure0"] = func548.call(this, argcv);
      return this.data["memo$Procedure0"];
  };
  this.methods["Procedure0"] = memofunc548;
  memofunc548.methodName = "Procedure0";
  memofunc548.paramCounts = [0];
  memofunc548.paramNames = [];
  memofunc548.definitionLine = 513;
  memofunc548.definitionModule = "standardGrace";
  func548.methodName = "Procedure0";
  func548.paramCounts = [0];
  func548.paramNames = [];
  func548.definitionLine = 513;
  func548.definitionModule = "standardGrace";
  setLineNumber(453);    // compilenode typedec
  // Type decl Procedure1
  var func551 = function(argcv, var_ArgT1) {    // method Procedure1, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(453);    // compilenode member
    // call case 4: self request with 0 args and 2 typeArgs 
    var call552 = selfRequest(this, "Function1", [0, 2], var_ArgT1, var_Done);
    return call552;
  };    // end of method Procedure1
  function memofunc551(argcv, var_ArgT1) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Procedure1", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Procedure1"] ||
          ( this.data["memo$Procedure1"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ArgT1;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func551.call(this, argcv, var_ArgT1);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Procedure1"] = memofunc551;
  memofunc551.methodName = "Procedure1";
  memofunc551.paramCounts = [0];
  memofunc551.paramNames = [];
  memofunc551.typeParamNames = ["ArgT1"];
  memofunc551.definitionLine = 513;
  memofunc551.definitionModule = "standardGrace";
  func551.methodName = "Procedure1";
  func551.paramCounts = [0];
  func551.paramNames = [];
  func551.typeParamNames = ["ArgT1"];
  func551.definitionLine = 513;
  func551.definitionModule = "standardGrace";
  setLineNumber(455);    // compilenode typedec
  // Type decl Procedure2
  var func554 = function(argcv, var_ArgT1, var_ArgT2) {    // method Procedure2, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(455);    // compilenode member
    // call case 4: self request with 0 args and 3 typeArgs 
    var call555 = selfRequest(this, "Function2", [0, 3], var_ArgT1, var_ArgT2, var_Done);
    return call555;
  };    // end of method Procedure2
  function memofunc554(argcv, var_ArgT1, var_ArgT2) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("Procedure2", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$Procedure2"] ||
          ( this.data["memo$Procedure2"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func554.call(this, argcv, var_ArgT1, var_ArgT2);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Procedure2"] = memofunc554;
  memofunc554.methodName = "Procedure2";
  memofunc554.paramCounts = [0];
  memofunc554.paramNames = [];
  memofunc554.typeParamNames = ["ArgT1", "ArgT2"];
  memofunc554.definitionLine = 513;
  memofunc554.definitionModule = "standardGrace";
  func554.methodName = "Procedure2";
  func554.paramCounts = [0];
  func554.paramNames = [];
  func554.typeParamNames = ["ArgT1", "ArgT2"];
  func554.definitionLine = 513;
  func554.definitionModule = "standardGrace";
  setLineNumber(457);    // compilenode typedec
  // Type decl Procedure3
  var func557 = function(argcv, var_ArgT1, var_ArgT2, var_ArgT3) {    // method Procedure3, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(457);    // compilenode member
    // call case 4: self request with 0 args and 4 typeArgs 
    var call558 = selfRequest(this, "Function3", [0, 4], var_ArgT1, var_ArgT2, var_ArgT3, var_Done);
    return call558;
  };    // end of method Procedure3
  function memofunc557(argcv, var_ArgT1, var_ArgT2, var_ArgT3) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    if (! var_ArgT3) var_ArgT3 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 3)) {
        raiseTypeArgError("Procedure3", 3, numArgs - 0);
    }
    let memoTable = this.data["memo$Procedure3"] ||
          ( this.data["memo$Procedure3"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2, var_ArgT3]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func557.call(this, argcv, var_ArgT1, var_ArgT2, var_ArgT3);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Procedure3"] = memofunc557;
  memofunc557.methodName = "Procedure3";
  memofunc557.paramCounts = [0];
  memofunc557.paramNames = [];
  memofunc557.typeParamNames = ["ArgT1", "ArgT2", "ArgT3"];
  memofunc557.definitionLine = 513;
  memofunc557.definitionModule = "standardGrace";
  func557.methodName = "Procedure3";
  func557.paramCounts = [0];
  func557.paramNames = [];
  func557.typeParamNames = ["ArgT1", "ArgT2", "ArgT3"];
  func557.definitionLine = 513;
  func557.definitionModule = "standardGrace";
  setLineNumber(461);    // compilenode typedec
  // Type decl Predicate0
  var func560 = function(argcv) {    // method Predicate0, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(461);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call561 = selfRequest(this, "Function0", [0, 1], var_Boolean);
    return call561;
  };    // end of method Predicate0
  function memofunc560(argcv) {
      if (! this.data["memo$Predicate0"])    // parameterless memo function
          this.data["memo$Predicate0"] = func560.call(this, argcv);
      return this.data["memo$Predicate0"];
  };
  this.methods["Predicate0"] = memofunc560;
  memofunc560.methodName = "Predicate0";
  memofunc560.paramCounts = [0];
  memofunc560.paramNames = [];
  memofunc560.definitionLine = 513;
  memofunc560.definitionModule = "standardGrace";
  func560.methodName = "Predicate0";
  func560.paramCounts = [0];
  func560.paramNames = [];
  func560.definitionLine = 513;
  func560.definitionModule = "standardGrace";
  setLineNumber(463);    // compilenode typedec
  // Type decl Predicate1
  var func563 = function(argcv, var_ArgT1) {    // method Predicate1, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(463);    // compilenode member
    // call case 4: self request with 0 args and 2 typeArgs 
    var call564 = selfRequest(this, "Function1", [0, 2], var_ArgT1, var_Boolean);
    return call564;
  };    // end of method Predicate1
  function memofunc563(argcv, var_ArgT1) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Predicate1", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Predicate1"] ||
          ( this.data["memo$Predicate1"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ArgT1;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func563.call(this, argcv, var_ArgT1);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Predicate1"] = memofunc563;
  memofunc563.methodName = "Predicate1";
  memofunc563.paramCounts = [0];
  memofunc563.paramNames = [];
  memofunc563.typeParamNames = ["ArgT1"];
  memofunc563.definitionLine = 513;
  memofunc563.definitionModule = "standardGrace";
  func563.methodName = "Predicate1";
  func563.paramCounts = [0];
  func563.paramNames = [];
  func563.typeParamNames = ["ArgT1"];
  func563.definitionLine = 513;
  func563.definitionModule = "standardGrace";
  setLineNumber(465);    // compilenode typedec
  // Type decl Predicate2
  var func566 = function(argcv, var_ArgT1, var_ArgT2) {    // method Predicate2, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(465);    // compilenode member
    // call case 4: self request with 0 args and 3 typeArgs 
    var call567 = selfRequest(this, "Function2", [0, 3], var_ArgT1, var_ArgT2, var_Boolean);
    return call567;
  };    // end of method Predicate2
  function memofunc566(argcv, var_ArgT1, var_ArgT2) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("Predicate2", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$Predicate2"] ||
          ( this.data["memo$Predicate2"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func566.call(this, argcv, var_ArgT1, var_ArgT2);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Predicate2"] = memofunc566;
  memofunc566.methodName = "Predicate2";
  memofunc566.paramCounts = [0];
  memofunc566.paramNames = [];
  memofunc566.typeParamNames = ["ArgT1", "ArgT2"];
  memofunc566.definitionLine = 513;
  memofunc566.definitionModule = "standardGrace";
  func566.methodName = "Predicate2";
  func566.paramCounts = [0];
  func566.paramNames = [];
  func566.typeParamNames = ["ArgT1", "ArgT2"];
  func566.definitionLine = 513;
  func566.definitionModule = "standardGrace";
  setLineNumber(467);    // compilenode typedec
  // Type decl Predicate3
  var func569 = function(argcv, var_ArgT1, var_ArgT2, var_ArgT3) {    // method Predicate3, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(467);    // compilenode member
    // call case 4: self request with 0 args and 4 typeArgs 
    var call570 = selfRequest(this, "Function3", [0, 4], var_ArgT1, var_ArgT2, var_ArgT3, var_Boolean);
    return call570;
  };    // end of method Predicate3
  function memofunc569(argcv, var_ArgT1, var_ArgT2, var_ArgT3) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    if (! var_ArgT2) var_ArgT2 = var_Unknown;
    if (! var_ArgT3) var_ArgT3 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 3)) {
        raiseTypeArgError("Predicate3", 3, numArgs - 0);
    }
    let memoTable = this.data["memo$Predicate3"] ||
          ( this.data["memo$Predicate3"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_ArgT1, var_ArgT2, var_ArgT3]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func569.call(this, argcv, var_ArgT1, var_ArgT2, var_ArgT3);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Predicate3"] = memofunc569;
  memofunc569.methodName = "Predicate3";
  memofunc569.paramCounts = [0];
  memofunc569.paramNames = [];
  memofunc569.typeParamNames = ["ArgT1", "ArgT2", "ArgT3"];
  memofunc569.definitionLine = 513;
  memofunc569.definitionModule = "standardGrace";
  func569.methodName = "Predicate3";
  func569.paramCounts = [0];
  func569.paramNames = [];
  func569.typeParamNames = ["ArgT1", "ArgT2", "ArgT3"];
  func569.definitionLine = 513;
  func569.definitionModule = "standardGrace";
  setLineNumber(470);    // compilenode typedec
  // Type decl Collection
  var func572 = function(argcv, var_T) {    // method Collection, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(470);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call573 = request(var_collections, "Collection", [0, 1], var_T);
    return call573;
  };    // end of method Collection
  function memofunc572(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Collection", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Collection"] ||
          ( this.data["memo$Collection"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func572.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Collection"] = memofunc572;
  memofunc572.methodName = "Collection";
  memofunc572.paramCounts = [0];
  memofunc572.paramNames = [];
  memofunc572.typeParamNames = ["T"];
  memofunc572.definitionLine = 513;
  memofunc572.definitionModule = "standardGrace";
  func572.methodName = "Collection";
  func572.paramCounts = [0];
  func572.paramNames = [];
  func572.typeParamNames = ["T"];
  func572.definitionLine = 513;
  func572.definitionModule = "standardGrace";
  setLineNumber(471);    // compilenode typedec
  // Type decl Iterable
  var func575 = function(argcv, var_T) {    // method Iterable, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(471);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call576 = request(var_collections, "Iterable", [0, 1], var_T);
    return call576;
  };    // end of method Iterable
  function memofunc575(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Iterable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Iterable"] ||
          ( this.data["memo$Iterable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func575.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Iterable"] = memofunc575;
  memofunc575.methodName = "Iterable";
  memofunc575.paramCounts = [0];
  memofunc575.paramNames = [];
  memofunc575.typeParamNames = ["T"];
  memofunc575.definitionLine = 513;
  memofunc575.definitionModule = "standardGrace";
  func575.methodName = "Iterable";
  func575.paramCounts = [0];
  func575.paramNames = [];
  func575.typeParamNames = ["T"];
  func575.definitionLine = 513;
  func575.definitionModule = "standardGrace";
  setLineNumber(472);    // compilenode typedec
  // Type decl Expandable
  var func578 = function(argcv, var_T) {    // method Expandable, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(472);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call579 = request(var_collections, "Expandable", [0, 1], var_T);
    return call579;
  };    // end of method Expandable
  function memofunc578(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Expandable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Expandable"] ||
          ( this.data["memo$Expandable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func578.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Expandable"] = memofunc578;
  memofunc578.methodName = "Expandable";
  memofunc578.paramCounts = [0];
  memofunc578.paramNames = [];
  memofunc578.typeParamNames = ["T"];
  memofunc578.definitionLine = 513;
  memofunc578.definitionModule = "standardGrace";
  func578.methodName = "Expandable";
  func578.paramCounts = [0];
  func578.paramNames = [];
  func578.typeParamNames = ["T"];
  func578.definitionLine = 513;
  func578.definitionModule = "standardGrace";
  setLineNumber(473);    // compilenode typedec
  // Type decl Enumerable
  var func581 = function(argcv, var_T) {    // method Enumerable, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(473);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call582 = request(var_collections, "Enumerable", [0, 1], var_T);
    return call582;
  };    // end of method Enumerable
  function memofunc581(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Enumerable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Enumerable"] ||
          ( this.data["memo$Enumerable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func581.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Enumerable"] = memofunc581;
  memofunc581.methodName = "Enumerable";
  memofunc581.paramCounts = [0];
  memofunc581.paramNames = [];
  memofunc581.typeParamNames = ["T"];
  memofunc581.definitionLine = 513;
  memofunc581.definitionModule = "standardGrace";
  func581.methodName = "Enumerable";
  func581.paramCounts = [0];
  func581.paramNames = [];
  func581.typeParamNames = ["T"];
  func581.definitionLine = 513;
  func581.definitionModule = "standardGrace";
  setLineNumber(474);    // compilenode typedec
  // Type decl Binding
  var func584 = function(argcv, var_K, var_T) {    // method Binding, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(474);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call585 = request(var_collections, "Binding", [0, 2], var_K, var_T);
    return call585;
  };    // end of method Binding
  function memofunc584(argcv, var_K, var_T) {
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
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func584.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Binding"] = memofunc584;
  memofunc584.methodName = "Binding";
  memofunc584.paramCounts = [0];
  memofunc584.paramNames = [];
  memofunc584.typeParamNames = ["K", "T"];
  memofunc584.definitionLine = 513;
  memofunc584.definitionModule = "standardGrace";
  func584.methodName = "Binding";
  func584.paramCounts = [0];
  func584.paramNames = [];
  func584.typeParamNames = ["K", "T"];
  func584.definitionLine = 513;
  func584.definitionModule = "standardGrace";
  setLineNumber(475);    // compilenode typedec
  // Type decl Iterator
  var func587 = function(argcv, var_T) {    // method Iterator, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(475);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call588 = request(var_collections, "Iterator", [0, 1], var_T);
    return call588;
  };    // end of method Iterator
  function memofunc587(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Iterator", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Iterator"] ||
          ( this.data["memo$Iterator"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func587.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Iterator"] = memofunc587;
  memofunc587.methodName = "Iterator";
  memofunc587.paramCounts = [0];
  memofunc587.paramNames = [];
  memofunc587.typeParamNames = ["T"];
  memofunc587.definitionLine = 513;
  memofunc587.definitionModule = "standardGrace";
  func587.methodName = "Iterator";
  func587.paramCounts = [0];
  func587.paramNames = [];
  func587.typeParamNames = ["T"];
  func587.definitionLine = 513;
  func587.definitionModule = "standardGrace";
  setLineNumber(476);    // compilenode typedec
  // Type decl Sequence
  var func590 = function(argcv, var_T) {    // method Sequence, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(476);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call591 = request(var_collections, "Sequence", [0, 1], var_T);
    return call591;
  };    // end of method Sequence
  function memofunc590(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Sequence", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Sequence"] ||
          ( this.data["memo$Sequence"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func590.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Sequence"] = memofunc590;
  memofunc590.methodName = "Sequence";
  memofunc590.paramCounts = [0];
  memofunc590.paramNames = [];
  memofunc590.typeParamNames = ["T"];
  memofunc590.definitionLine = 513;
  memofunc590.definitionModule = "standardGrace";
  func590.methodName = "Sequence";
  func590.paramCounts = [0];
  func590.paramNames = [];
  func590.typeParamNames = ["T"];
  func590.definitionLine = 513;
  func590.definitionModule = "standardGrace";
  setLineNumber(477);    // compilenode typedec
  // Type decl List
  var func593 = function(argcv, var_T) {    // method List, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(477);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call594 = request(var_collections, "List", [0, 1], var_T);
    return call594;
  };    // end of method List
  function memofunc593(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("List", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$List"] ||
          ( this.data["memo$List"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func593.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["List"] = memofunc593;
  memofunc593.methodName = "List";
  memofunc593.paramCounts = [0];
  memofunc593.paramNames = [];
  memofunc593.typeParamNames = ["T"];
  memofunc593.definitionLine = 513;
  memofunc593.definitionModule = "standardGrace";
  func593.methodName = "List";
  func593.paramCounts = [0];
  func593.paramNames = [];
  func593.typeParamNames = ["T"];
  func593.definitionLine = 513;
  func593.definitionModule = "standardGrace";
  setLineNumber(478);    // compilenode typedec
  // Type decl Set
  var func596 = function(argcv, var_T) {    // method Set, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(478);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call597 = request(var_collections, "Set", [0, 1], var_T);
    return call597;
  };    // end of method Set
  function memofunc596(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Set", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Set"] ||
          ( this.data["memo$Set"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func596.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Set"] = memofunc596;
  memofunc596.methodName = "Set";
  memofunc596.paramCounts = [0];
  memofunc596.paramNames = [];
  memofunc596.typeParamNames = ["T"];
  memofunc596.definitionLine = 513;
  memofunc596.definitionModule = "standardGrace";
  func596.methodName = "Set";
  func596.paramCounts = [0];
  func596.paramNames = [];
  func596.typeParamNames = ["T"];
  func596.definitionLine = 513;
  func596.definitionModule = "standardGrace";
  setLineNumber(479);    // compilenode typedec
  // Type decl Dictionary
  var func599 = function(argcv, var_K, var_T) {    // method Dictionary, line 513
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(479);    // compilenode member
    // call case 6: other requests
    if (var_collections === undefined) raiseUninitializedVariable("collections");
    var call600 = request(var_collections, "Dictionary", [0, 2], var_K, var_T);
    return call600;
  };    // end of method Dictionary
  function memofunc599(argcv, var_K, var_T) {
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("Dictionary", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$Dictionary"] ||
          ( this.data["memo$Dictionary"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_K, var_T]);
    let absentBlock = new GraceBlock(this, 513, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func599.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Dictionary"] = memofunc599;
  memofunc599.methodName = "Dictionary";
  memofunc599.paramCounts = [0];
  memofunc599.paramNames = [];
  memofunc599.typeParamNames = ["K", "T"];
  memofunc599.definitionLine = 513;
  memofunc599.definitionModule = "standardGrace";
  func599.methodName = "Dictionary";
  func599.paramCounts = [0];
  func599.paramNames = [];
  func599.typeParamNames = ["K", "T"];
  func599.definitionLine = 513;
  func599.definitionModule = "standardGrace";
  setLineNumber(481);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call601 = request(var_collections, "BoundsError", [0]);
  var var_BoundsError = call601;
  var reader602_BoundsError = function() {  // reader method BoundsError
      if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
      return var_BoundsError;
  };
  reader602_BoundsError.isDef = true;
  this.methods["BoundsError"] = reader602_BoundsError;
  setLineNumber(482);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call603 = request(var_collections, "IteratorExhausted", [0]);
  var var_IteratorExhausted = call603;
  var reader604_IteratorExhausted = function() {  // reader method IteratorExhausted
      if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
      return var_IteratorExhausted;
  };
  reader604_IteratorExhausted.isDef = true;
  this.methods["IteratorExhausted"] = reader604_IteratorExhausted;
  setLineNumber(483);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call605 = request(var_collections, "NoSuchObject", [0]);
  var var_NoSuchObject = call605;
  var reader606_NoSuchObject = function() {  // reader method NoSuchObject
      if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
      return var_NoSuchObject;
  };
  reader606_NoSuchObject.isDef = true;
  this.methods["NoSuchObject"] = reader606_NoSuchObject;
  setLineNumber(484);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call607 = request(var_collections, "RequestError", [0]);
  var var_RequestError = call607;
  var reader608_RequestError = function() {  // reader method RequestError
      if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
      return var_RequestError;
  };
  reader608_RequestError.isDef = true;
  this.methods["RequestError"] = reader608_RequestError;
  setLineNumber(485);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call609 = request(var_collections, "SubobjectResponsibility", [0]);
  var var_SubobjectResponsibility = call609;
  var reader610_SubobjectResponsibility = function() {  // reader method SubobjectResponsibility
      if (var_SubobjectResponsibility === undefined) raiseUninitializedVariable("SubobjectResponsibility");
      return var_SubobjectResponsibility;
  };
  reader610_SubobjectResponsibility.isDef = true;
  this.methods["SubobjectResponsibility"] = reader610_SubobjectResponsibility;
  setLineNumber(486);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call611 = request(var_collections, "ConcurrentModification", [0]);
  var var_ConcurrentModification = call611;
  var reader612_ConcurrentModification = function() {  // reader method ConcurrentModification
      if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
      return var_ConcurrentModification;
  };
  reader612_ConcurrentModification.isDef = true;
  this.methods["ConcurrentModification"] = reader612_ConcurrentModification;
  setLineNumber(487);    // compilenode string
  var string614 = new GraceString("UninitializedVariable");
  // call case 6: other requests
  // call case 2: outer request
  var call615 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call613 = request(call615, "refine(1)", [1], string614);
  var var_UninitializedVariable = call613;
  var reader616_UninitializedVariable = function() {  // reader method UninitializedVariable
      if (var_UninitializedVariable === undefined) raiseUninitializedVariable("UninitializedVariable");
      return var_UninitializedVariable;
  };
  reader616_UninitializedVariable.isDef = true;
  this.methods["UninitializedVariable"] = reader616_UninitializedVariable;
  setLineNumber(495);    // compilenode member
  // call case 6: other requests
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call618 = request(var_collections, "sequence", [0]);
  var call617 = request(call618, "empty", [0]);
  var var_emptySequence = call617;
  var reader619_emptySequence = function() {  // reader method emptySequence
      if (var_emptySequence === undefined) raiseUninitializedVariable("emptySequence");
      return var_emptySequence;
  };
  reader619_emptySequence.isDef = true;
  this.methods["emptySequence"] = reader619_emptySequence;
  setLineNumber(509);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call620 = request(var_collections, "binding", [0]);
  var var_binding = call620;
  var reader621_binding = function() {  // reader method binding
      if (var_binding === undefined) raiseUninitializedVariable("binding");
      return var_binding;
  };
  reader621_binding.isDef = true;
  this.methods["binding"] = reader621_binding;
  setLineNumber(510);    // compilenode member
  // call case 6: other requests
  if (var_collections === undefined) raiseUninitializedVariable("collections");
  var call622 = request(var_collections, "range", [0]);
  var var_range = call622;
  var reader623_range = function() {  // reader method range
      if (var_range === undefined) raiseUninitializedVariable("range");
      return var_range;
  };
  reader623_range.isDef = true;
  this.methods["range"] = reader623_range;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_standardGrace = gracecode_standardGrace;
if (typeof window !== "undefined")
  window.gracecode_standardGrace = gracecode_standardGrace;
gracecode_standardGrace.imports = ["collectionsPrelude"];
gracecode_standardGrace.definitionModule = "standardGrace";
gracecode_standardGrace.definitionLine = 1;
