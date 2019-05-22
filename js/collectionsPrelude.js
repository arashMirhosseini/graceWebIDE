if (typeof gctCache !== "undefined")
  gctCache["collectionsPrelude"] = "classes:\nconfidential:\n max(2)\n removed\n unused\ndialect:\nfresh-methods:\n binding\n collection\n dictionary\n enumerable\n indexable\n iteratorConcat(2)\n lazyConcatenation(2)\n lazySequenceOver(1)filteredBy(1)\n lazySequenceOver(1)mappedBy(1)\n list\n sequence\n set\nfresh:binding:\n asString\n key(1)value(1)\nfresh:collection:\n <<(1)\n >>(1)\n asString\n do(1)\n do(1)separatedBy(1)\n filter(1)\n first\n fold(1)startingWith(1)\n isEmpty\n iterator\n map(1)\n reduce(2)\n size\n sizeIfUnknown(1)\nfresh:dictionary:\n <<(1)\n asString\n empty\n with(1)\n withAll(1)\nfresh:enumerable:\n ++(1)\n <<(1)\n ==(1)\n >>(1)\n asString\n do(1)\n do(1)separatedBy(1)\n filter(1)\n first\n fold(1)startingWith(1)\n isEmpty\n iterator\n keysAndValuesDo(1)\n map(1)\n reduce(2)\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n values\n \u2260(1)\nfresh:indexable:\n <<(1)\n ==(1)\n >>(1)\n at(1)\n do(1)\n do(1)separatedBy(1)\n fifth\n filter(1)\n first\n fold(1)startingWith(1)\n fourth\n hash\n indexOf(1)\n indexOf(1)ifAbsent(1)\n indices\n isEmpty\n iterator\n keysAndValuesDo(1)\n last\n map(1)\n reduce(2)\n second\n size\n sizeIfUnknown(1)\n third\n \u2260(1)\nfresh:iteratorConcat(2):\n asDebugString\n asString\n hasNext\n next\nfresh:lazyConcatenation(2):\n ++(1)\n <<(1)\n ==(1)\n >>(1)\n asDebugString\n do(1)\n do(1)separatedBy(1)\n filter(1)\n first\n fold(1)startingWith(1)\n isEmpty\n iterator\n keysAndValuesDo(1)\n map(1)\n reduce(2)\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n values\n \u2260(1)\nfresh:lazySequenceOver(1)filteredBy(1):\n ++(1)\n <<(1)\n ==(1)\n >>(1)\n asDebugString\n do(1)\n do(1)separatedBy(1)\n filter(1)\n first\n fold(1)startingWith(1)\n isEmpty\n iterator\n keysAndValuesDo(1)\n map(1)\n reduce(2)\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n values\n \u2260(1)\nfresh:lazySequenceOver(1)mappedBy(1):\n ++(1)\n <<(1)\n ==(1)\n >>(1)\n asDebugString\n do(1)\n do(1)separatedBy(1)\n filter(1)\n first\n fold(1)startingWith(1)\n isEmpty\n iterator\n keysAndValuesDo(1)\n map(1)\n reduce(2)\n size\n sizeIfUnknown(1)\n sorted\n sortedBy(1)\n values\n \u2260(1)\nfresh:list:\n <<(1)\n asString\n empty\n with(1)\n withAll(1)\nfresh:sequence:\n <<(1)\n asString\n empty\n with(1)\n withAll(1)\nfresh:set:\n <<(1)\n asString\n empty\n ofCapacity(1)\n with(1)\n withAll(1)\nmethodtypes-of:Binding\u27e6K, T\u27e7:\n 9 ==(other:Unknown) \u2192 Boolean\n 9 hash \u2192 Number\n 9 key \u2192 K\n 9 value \u2192 T\nmethodtypes-of:CollectionFactory\u27e6T\u27e7:\n 2 <<(source:Collection\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\n 2 empty \u2192 Collection\u27e6T\u27e7\n 2 with(element:T) \u2192 Collection\u27e6T\u27e7\n 2 withAll(elements:Collection\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\nmethodtypes-of:Collection\u27e6T\u27e7:\n & 3\n & Object\n 3 ++(other:Collection\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\n 3 <<(source:Collection\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\n 3 ==(other:Unknown) \u2192 Boolean\n 3 >>(target:Collection\u27e6T\u27e7 | CollectionFactory\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\n 3 do(body:Procedure1\u27e6T\u27e7) \u2192 Done\n 3 do(body:Procedure1\u27e6T\u27e7)separatedBy(separator:Procedure0) \u2192 Done\n 3 filter(condition:Predicate1\u27e6T\u27e7) \u2192 Collection\u27e6T\u27e7\n 3 first \u2192 T\n 3 fold(binaryFunction:Function2\u27e6T, T, T\u27e7)startingWith(initial:T) \u2192 T\n 3 isEmpty \u2192 Boolean\n 3 iterator \u2192 Iterator\u27e6T\u27e7\n 3 map(function:Function1\u27e6T, U\u27e7) \u2192 Collection\u27e6U\u27e7\n 3 size \u2192 Number\n 3 sizeIfUnknown(action:Function0\u27e6Number\u27e7) \u2192 Unknown:Type\n 3 \u2260(other:Unknown) \u2192 Boolean\nmethodtypes-of:ComparableToDictionary\u27e6K, T\u27e7:\n 9 at(_:K)ifAbsent(_:Unknown) \u2192 T\n 9 size \u2192 Number\nmethodtypes-of:Dictionary\u27e6K, T\u27e7:\n & 9\n & Collection\u27e6T\u27e7\n 9 ++(other:Dictionary\u27e6K, T\u27e7) \u2192 Dictionary\u27e6K, T\u27e7\n 9 --(other:Dictionary\u27e6K, T\u27e7) \u2192 Dictionary\u27e6K, T\u27e7\n 9 ==(other:Object) \u2192 Boolean\n 9 at(k:K) \u2192 T\n 9 at(key:K)ifAbsent(action:Function0\u27e6Unknown\u27e7) \u2192 Unknown\n 9 at(key:K)put(value:T) \u2192 Dictionary\u27e6K, T\u27e7\n 9 bindings \u2192 Enumerable\u27e6Binding\u27e6K, T\u27e7\u27e7\n 9 clear \u2192 Dictionary\u27e6K, T\u27e7\n 9 contains(elem:T) \u2192 Boolean\n 9 containsKey(k:K) \u2192 Boolean\n 9 containsValue(v:T) \u2192 Boolean\n 9 copy \u2192 Dictionary\u27e6K, T\u27e7\n 9 keys \u2192 Enumerable\u27e6K\u27e7\n 9 keysAndValuesDo(action:Procedure2\u27e6K, T\u27e7) \u2192 Done\n 9 keysDo(action:Procedure1\u27e6K\u27e7) \u2192 Done\n 9 removeAllKeys(keys:Collection\u27e6K\u27e7) \u2192 Dictionary\u27e6K, T\u27e7\n 9 removeAllValues(removals:Collection\u27e6T\u27e7) \u2192 Dictionary\u27e6K, T\u27e7\n 9 removeKey(key:K) \u2192 Dictionary\u27e6K, T\u27e7\n 9 removeValue(v:T) \u2192 Dictionary\u27e6K, T\u27e7\n 9 size \u2192 Number\n 9 values \u2192 Enumerable\u27e6T\u27e7\n 9 valuesDo(action:Procedure1\u27e6T\u27e7) \u2192 Done\nmethodtypes-of:Enumerable\u27e6T\u27e7:\n & 5\n & Collection\u27e6T\u27e7\n 5 keysAndValuesDo(action:Function2\u27e6Number, T, Object\u27e7) \u2192 Done\n 5 sorted \u2192 SelfType\n 5 sortedBy(comparison:Function2\u27e6T, T, Number\u27e7) \u2192 SelfType\n 5 values \u2192 Collection\u27e6T\u27e7\nmethodtypes-of:EqualityObject:\n & 2\n & Object\n 2 ::(o:Object) \u2192 Binding\n 2 ==(other:Object) \u2192 Boolean\n 2 hash \u2192 Number\n 2 \u2260(other:Object) \u2192 Boolean\nmethodtypes-of:Expandable\u27e6T\u27e7:\n & 4\n & Collection\u27e6T\u27e7\n 4 add(x:T) \u2192 SelfType\n 4 addAll(xs:Collection\u27e6T\u27e7) \u2192 SelfType\nmethodtypes-of:Function0\u27e6ResultT\u27e7:\n 2 apply \u2192 ResultT\nmethodtypes-of:Function1\u27e6ArgT1, ResultT\u27e7:\n 2 apply(a1:ArgT1) \u2192 ResultT\nmethodtypes-of:Function2\u27e6ArgT1, ArgT2, ResultT\u27e7:\n 2 apply(a1:ArgT1, a2:ArgT2) \u2192 ResultT\nmethodtypes-of:Iterable\u27e6T\u27e7:\nmethodtypes-of:Iterator\u27e6T\u27e7:\n 9 hasNext \u2192 Boolean\n 9 next \u2192 T\nmethodtypes-of:List\u27e6T\u27e7:\n & 7\n & Sequenceable\u27e6T\u27e7\n 7 ++(o:List\u27e6T\u27e7) \u2192 List\u27e6T\u27e7\n 7 add(x:T) \u2192 List\u27e6T\u27e7\n 7 addAll(xs:Collection\u27e6T\u27e7) \u2192 List\u27e6T\u27e7\n 7 addAllFirst(xs:Collection\u27e6T\u27e7) \u2192 List\u27e6T\u27e7\n 7 addFirst(x:T) \u2192 List\u27e6T\u27e7\n 7 addLast(x:T) \u2192 List\u27e6T\u27e7\n 7 at(ix:Number)put(v:T) \u2192 List\u27e6T\u27e7\n 7 clear \u2192 List\u27e6T\u27e7\n 7 copy \u2192 List\u27e6T\u27e7\n 7 insert(elt:T)at(n:Number) \u2192 List\u27e6T\u27e7\n 7 pop \u2192 T\n 7 remove(v:T) \u2192 Unknown:Type\n 7 remove(v:T)ifAbsent(action:Procedure0) \u2192 Unknown:Type\n 7 removeAll(vs:Collection\u27e6T\u27e7) \u2192 Unknown:Type\n 7 removeAll(vs:Collection\u27e6T\u27e7)ifAbsent(action:Procedure0) \u2192 Unknown:Type\n 7 removeAt(n:Number) \u2192 T\n 7 removeFirst \u2192 T\n 7 removeLast \u2192 T\n 7 reverse \u2192 List\u27e6T\u27e7\n 7 reversed \u2192 List\u27e6T\u27e7\n 7 sort \u2192 List\u27e6T\u27e7\n 7 sortBy(sortBlock:Function2\u27e6T, T, Number\u27e7) \u2192 List\u27e6T\u27e7\nmethodtypes-of:MinimalyIterable:\n 9 iterator \u2192 Iterator\nmethodtypes-of:Predicate1\u27e6ArgT1\u27e7:\nmethodtypes-of:Procedure0:\nmethodtypes-of:Procedure1\u27e6ArgT1\u27e7:\nmethodtypes-of:Procedure2\u27e6ArgT1, ArgT2\u27e7:\nmethodtypes-of:SelfType:\nmethodtypes-of:Sequenceable\u27e6T\u27e7:\n & 6\n & Enumerable\u27e6T\u27e7\n 6 at(n:Number) \u2192 T\n 6 at(n:Number)ifAbsent(action:Function0\u27e6W\u27e7) \u2192 T | W\n 6 contains(elem:T) \u2192 Boolean\n 6 fifth \u2192 T\n 6 fourth \u2192 T\n 6 indexOf(elem:T) \u2192 Number\n 6 indexOf(elem:T)ifAbsent(action:Function0\u27e6W\u27e7) \u2192 Number | W\n 6 indices \u2192 Sequence\u27e6Number\u27e7\n 6 keys \u2192 Sequence\u27e6Number\u27e7\n 6 last \u2192 T\n 6 reversed \u2192 Sequence\u27e6T\u27e7\n 6 second \u2192 T\n 6 size \u2192 Number\n 6 third \u2192 T\nmethodtypes-of:Sequence\u27e6T\u27e7:\n & EqualityObject\n & Sequenceable\u27e6T\u27e7\nmethodtypes-of:Set\u27e6T\u27e7:\n & 8\n & Collection\u27e6T\u27e7\n 8 **(other:Set\u27e6T\u27e7) \u2192 Set\u27e6T\u27e7\n 8 ++(other:Set\u27e6T\u27e7) \u2192 Set\u27e6T\u27e7\n 8 --(other:Set\u27e6T\u27e7) \u2192 Set\u27e6T\u27e7\n 8 add(x:T) \u2192 SelfType\n 8 addAll(elements:Collection\u27e6T\u27e7) \u2192 SelfType\n 8 clear \u2192 Set\u27e6T\u27e7\n 8 contains(elem:T) \u2192 Boolean\n 8 copy \u2192 Set\u27e6T\u27e7\n 8 find(booleanBlock:Predicate1\u27e6T\u27e7)ifNone(notFoundBlock:Function0\u27e6T\u27e7) \u2192 T\n 8 includes(booleanBlock:Predicate1\u27e6T\u27e7) \u2192 Boolean\n 8 isSubset(s2:Set\u27e6T\u27e7) \u2192 Boolean\n 8 isSuperset(s2:Collection\u27e6T\u27e7) \u2192 Boolean\n 8 remove(x:T) \u2192 Set\u27e6T\u27e7\n 8 remove(x:T)ifAbsent(block:Procedure0) \u2192 Set\u27e6T\u27e7\n 8 removeAll(elems:Collection\u27e6T\u27e7) \u2192 Unknown:Type\n 8 removeAll(elems:Collection\u27e6T\u27e7)ifAbsent(action:Procedure0) \u2192 Set\u27e6T\u27e7\n 8 size \u2192 Number\nmodules:\npath:\n /Users/black/Development/mg/gracelang/minigrace/collectionsPrelude.grace\npublic:\n Binding\n BoundsError\n Collection\n CollectionFactory\n ComparableToDictionary\n ConcurrentModification\n Dictionary\n Enumerable\n EqualityObject\n Expandable\n Function0\n Function1\n Function2\n Iterable\n Iterator\n IteratorExhausted\n List\n MinimalyIterable\n NoSuchObject\n Predicate1\n Procedure0\n Procedure1\n Procedure2\n RequestError\n SelfType\n Sequence\n Sequenceable\n Set\n SizeUnknown\n SubobjectResponsibility\n abstract\n annotation\n binding\n collection\n dictionary\n enumerable\n hashAndCombine(2)\n indexable\n isEqual(1)toCollection(1)\n iteratorConcat(2)\n lazyConcatenation(2)\n lazySequenceOver(1)filteredBy(1)\n lazySequenceOver(1)mappedBy(1)\n list\n range\n required\n sequence\n set\npublicMethodTypes:\n BoundsError \u2192 Unknown\n ConcurrentModification \u2192 Unknown\n IteratorExhausted \u2192 Unknown\n NoSuchObject \u2192 Unknown\n RequestError \u2192 Unknown\n SizeUnknown \u2192 Unknown\n SubobjectResponsibility \u2192 Unknown\n abstract\n annotation\n binding\u27e6K, T\u27e7\n collection\u27e6T\u27e7\n dictionary\u27e6K, T\u27e7\n enumerable\u27e6T\u27e7\n hashAndCombine(aHash, anObj)\n indexable\u27e6T\u27e7\n isEqual(left)toCollection(right)\n iteratorConcat\u27e6T\u27e7(left:Iterator\u27e6T\u27e7, right:Iterator\u27e6T\u27e7)\n lazyConcatenation\u27e6T\u27e7(left, right) \u2192 Enumerable\u27e6T\u27e7\n lazySequenceOver\u27e6T, R\u27e7(source:Collection\u27e6T\u27e7)mappedBy(function:Function1\u27e6T, R\u27e7) \u2192 Enumerable\u27e6R\u27e7\n lazySequenceOver\u27e6T\u27e7(source:Collection\u27e6T\u27e7)filteredBy(predicate:Predicate1\u27e6T\u27e7) \u2192 Enumerable\u27e6T\u27e7\n list\u27e6T\u27e7\n range \u2192 Unknown\n required\n sequence\u27e6T\u27e7\n set\u27e6T\u27e7\ntypes:\n Binding\n Collection\n CollectionFactory\n ComparableToDictionary\n Dictionary\n Enumerable\n EqualityObject\n Expandable\n Function0\n Function1\n Function2\n Iterable\n Iterator\n List\n MinimalyIterable\n Predicate1\n Procedure0\n Procedure1\n Procedure2\n SelfType\n Sequence\n Sequenceable\n Set\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["collectionsPrelude"] = [
    "#pragma noTypeChecks",
    "dialect \"none\"",
    "",
    "def BoundsError is public = ProgrammingError.refine \"BoundsError\"",
    "def IteratorExhausted is public = ProgrammingError.refine \"IteratorExhausted\"",
    "def SubobjectResponsibility is public = ProgrammingError.refine \"SubobjectResponsibility\"",
    "def NoSuchObject is public = ProgrammingError.refine \"NoSuchObject\"",
    "def RequestError is public = ProgrammingError.refine \"RequestError\"",
    "def ConcurrentModification is public = ProgrammingError.refine \"ConcurrentModification\"",
    "def SizeUnknown is public = Exception.refine \"SizeUnknown\"",
    "",
    "method annotation is annotation",
    "method required is annotation",
    "method abstract is annotation",
    "",
    "type EqualityObject = Object & interface {",
    "    ::(o:Object) -> Binding",
    "    ==(other:Object) -> Boolean",
    "    ≠(other:Object) -> Boolean",
    "    hash -> Number",
    "}",
    "",
    "type Function0⟦ResultT⟧  = interface {",
    "    apply -> ResultT     // Function with no arguments and a result of type ResultT",
    "    //  matches -> Boolean   // answers true",
    "}",
    "type Function1⟦ArgT1, ResultT⟧ = interface {",
    "    apply(a1:ArgT1) -> ResultT    // Function with argument a1 of type ArgT1, and a result of type ResultT",
    "    //  matches(a1:Object) -> Boolean   // answers true if a1 <: ArgT1",
    "}",
    "type Function2⟦ArgT1, ArgT2, ResultT⟧ = interface {",
    "    apply(a1:ArgT1, a2:ArgT2) -> ResultT",
    "    // Function with arguments of types ArgT1 and ArgT2, and a result of type ResultT",
    "    //  matches(a1:Object, a2:Object) -> Boolean",
    "        // answers true if a1 <: ArgT1 and a2 <: ArgT2",
    "}",
    "type Procedure0 = Function0⟦Done⟧",
    "    // Function with no arguments and no result",
    "type Procedure1⟦ArgT1⟧ = Function1⟦ArgT1, Done⟧",
    "    // Function with 1 argument of type ArgT1, and no result",
    "type Procedure2⟦ArgT1, ArgT2⟧ = Function2⟦ArgT1, ArgT2, Done⟧",
    "    // Function with 2 argument of types ArgT1, and ArgT2, and no result",
    "type Predicate1⟦ArgT1⟧ = Function1⟦ArgT1, Boolean⟧",
    "    // Function with 1 argument of type ArgT1, returning Boolean",
    "",
    "",
    "type SelfType = Unknown     // becuase it's not yet in the language",
    "",
    "type CollectionFactory⟦T⟧ = interface {",
    "    empty -> Collection⟦T⟧",
    "        // an empty collection",
    "    with(element:T) -> Collection⟦T⟧",
    "        // a collection containing a single element",
    "    withAll(elements:Collection⟦T⟧) -> Collection⟦T⟧",
    "        // a collection containing elements",
    "    << (source:Collection⟦T⟧) -> Collection⟦T⟧",
    "}",
    "",
    "type Collection⟦T⟧ = Object & interface {",
    "    // Note that Collection does not include :: or hash, so collections",
    "    // cannot be used as keys in dictionaries (although Sequences can)",
    "",
    "    iterator -> Iterator⟦T⟧",
    "        // the iterator on which I am based",
    "    isEmpty -> Boolean",
    "        // true if I have no elements",
    "    size -> Number",
    "        // my size (the number of elements that I contain);",
    "        // may raise SizeUnknown.",
    "    sizeIfUnknown(action: Function0⟦Number⟧)",
    "        // my size; if not known, then the result of applying action",
    "    == (other) -> Boolean",
    "        // other and self have the same size, and contain the same elements.",
    "    ≠ (other) -> Boolean",
    "        // other and self do not contain the same elements.",
    "    first -> T",
    "        // my first element; raises BoundsError if I have none.",
    "    do (body: Procedure1⟦T⟧) -> Done",
    "        // an internal iterator; applies body to each of my elements",
    "    do (body:Procedure1⟦T⟧) separatedBy(separator:Procedure0) -> Done",
    "        // an internal iterator; applies body to each of my elements, and applies separator in between",
    "    ++ (other: Collection⟦T⟧) -> Collection⟦T⟧",
    "        // returns a new Collection over the concatenation of self and other",
    "    fold (binaryFunction:Function2⟦T, T, T⟧) startingWith(initial:T) -> T",
    "        // the left-associative fold of binaryFunction over self, starting with initial",
    "    map⟦U⟧ (function:Function1⟦T, U⟧) -> Collection⟦U⟧",
    "        // returns a new collection that yields my elements mapped by function",
    "    filter (condition:Predicate1⟦T⟧) -> Collection⟦T⟧",
    "        // returns a new collection that yields those of my elements for which condition holds",
    "    >> (target: Collection⟦T⟧ | CollectionFactory⟦T⟧) -> Collection⟦T⟧",
    "        // returns target << self; used for writing pipelines",
    "    << (source: Collection⟦T⟧) -> Collection⟦T⟧",
    "        // returns self ++ source; used for writing pipelines",
    "}",
    "",
    "type Expandable⟦T⟧ = Collection⟦T⟧ & interface {",
    "    add(x: T) -> SelfType",
    "    addAll(xs: Collection⟦T⟧) -> SelfType",
    "}",
    "",
    "type Iterable⟦T⟧ = Collection⟦T⟧    // for backward compatibility",
    "",
    "type Enumerable⟦T⟧ = Collection⟦T⟧ & interface {",
    "    values -> Collection⟦T⟧",
    "    keysAndValuesDo(action:Function2⟦Number,T,Object⟧) -> Done",
    "    sortedBy(comparison:Function2⟦T,T,Number⟧) -> SelfType",
    "    sorted -> SelfType",
    "}",
    "",
    "type Sequenceable⟦T⟧ = Enumerable⟦T⟧ & interface {",
    "    size -> Number",
    "    at(n:Number) -> T",
    "    at⟦W⟧(n:Number) ifAbsent(action:Function0⟦W⟧) -> T | W",
    "    indices -> Sequence⟦Number⟧",
    "    keys -> Sequence⟦Number⟧",
    "    second -> T",
    "    third -> T",
    "    fourth -> T",
    "    fifth -> T",
    "    last -> T",
    "    indexOf⟦W⟧(elem:T) ifAbsent(action:Function0⟦W⟧) -> Number | W",
    "    indexOf(elem:T) -> Number",
    "    contains(elem:T) -> Boolean",
    "    reversed -> Sequence⟦T⟧",
    "}",
    "",
    "type Sequence⟦T⟧ = EqualityObject & Sequenceable⟦T⟧",
    "",
    "type List⟦T⟧ = Sequenceable⟦T⟧ & interface {",
    "    add(x: T) -> List⟦T⟧",
    "    addAll(xs: Collection⟦T⟧) -> List⟦T⟧",
    "    addFirst(x: T) -> List⟦T⟧",
    "    addAllFirst(xs: Collection⟦T⟧) -> List⟦T⟧",
    "    addLast(x: T) -> List⟦T⟧    // same as add",
    "    at(ix:Number) put(v:T) -> List⟦T⟧",
    "    clear -> List⟦T⟧",
    "    removeFirst -> T",
    "    removeAt(n: Number) -> T",
    "    removeLast -> T",
    "    remove(v:T)",
    "    remove(v:T) ifAbsent(action:Procedure0)",
    "    removeAll(vs: Collection⟦T⟧)",
    "    removeAll(vs: Collection⟦T⟧) ifAbsent(action:Procedure0)",
    "    insert(elt:T)at(n:Number) -> List⟦T⟧",
    "    pop -> T",
    "    ++(o: List⟦T⟧) -> List⟦T⟧",
    "    copy -> List⟦T⟧",
    "    sort -> List⟦T⟧",
    "    sortBy(sortBlock:Function2⟦T,T,Number⟧) -> List⟦T⟧",
    "    reverse -> List⟦T⟧",
    "    reversed -> List⟦T⟧",
    "}",
    "",
    "type Set⟦T⟧ = Collection⟦T⟧ & interface {",
    "    size -> Number",
    "    add(x:T) -> SelfType",
    "    addAll(elements: Collection⟦T⟧) -> SelfType",
    "    remove(x: T) -> Set⟦T⟧",
    "    remove(x: T) ifAbsent(block: Procedure0) -> Set⟦T⟧",
    "    clear -> Set⟦T⟧",
    "    includes(booleanBlock: Predicate1⟦T⟧) -> Boolean",
    "    find(booleanBlock: Predicate1⟦T⟧) ifNone(notFoundBlock: Function0⟦T⟧) -> T",
    "    copy -> Set⟦T⟧",
    "    contains(elem:T) -> Boolean",
    "    ** (other:Set⟦T⟧) -> Set⟦T⟧",
    "    -- (other:Set⟦T⟧) -> Set⟦T⟧",
    "    ++ (other:Set⟦T⟧) -> Set⟦T⟧",
    "    isSubset(s2: Set⟦T⟧) -> Boolean",
    "    isSuperset(s2: Collection⟦T⟧) -> Boolean",
    "    removeAll(elems: Collection⟦T⟧)",
    "    removeAll(elems: Collection⟦T⟧)ifAbsent(action:Procedure0) -> Set⟦T⟧",
    "}",
    "",
    "type Dictionary⟦K,T⟧ = Collection⟦T⟧ & interface {",
    "    size -> Number",
    "    containsKey(k:K) -> Boolean",
    "    containsValue(v:T) -> Boolean",
    "    contains(elem:T) -> Boolean",
    "    at(key:K)ifAbsent(action:Function0⟦Unknown⟧) -> Unknown",
    "    at(key:K)put(value:T) -> Dictionary⟦K,T⟧",
    "    at(k:K) -> T",
    "    removeAllKeys(keys: Collection⟦K⟧) -> Dictionary⟦K,T⟧",
    "    removeKey(key:K) -> Dictionary⟦K,T⟧",
    "    removeAllValues(removals: Collection⟦T⟧) -> Dictionary⟦K,T⟧",
    "    removeValue(v:T) -> Dictionary⟦K,T⟧",
    "    clear -> Dictionary⟦K,T⟧",
    "    keys -> Enumerable⟦K⟧",
    "    values -> Enumerable⟦T⟧",
    "    bindings -> Enumerable⟦Binding⟦K,T⟧⟧",
    "    keysAndValuesDo(action:Procedure2⟦K,T⟧) -> Done",
    "    keysDo(action:Procedure1⟦K⟧) -> Done",
    "    valuesDo(action:Procedure1⟦T⟧) -> Done",
    "    == (other:Object) -> Boolean",
    "    copy -> Dictionary⟦K,T⟧",
    "    ++ (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧",
    "    -- (other:Dictionary⟦K, T⟧) -> Dictionary⟦K, T⟧",
    "}",
    "",
    "type Iterator⟦T⟧ = interface {",
    "    hasNext -> Boolean",
    "    next -> T",
    "}",
    "",
    "class lazySequenceOver⟦T,R⟧ (source: Collection⟦T⟧)",
    "        mappedBy (function:Function1⟦T, R⟧) -> Enumerable⟦R⟧ {",
    "    use enumerable⟦T⟧",
    "    class iterator {",
    "        def sourceIterator = source.iterator",
    "        method asString { \"an iterator over a lazy map sequence\" }",
    "        method hasNext { sourceIterator.hasNext }",
    "        method next { function.apply(sourceIterator.next) }",
    "    }",
    "    method size { source.size }",
    "    method isEmpty { source.isEmpty }",
    "    method asDebugString { \"a lazy sequence mapping over {source}\" }",
    "}",
    "",
    "class lazySequenceOver⟦T⟧ (source: Collection⟦T⟧)",
    "        filteredBy(predicate:Predicate1⟦T⟧) -> Enumerable⟦T⟧ {",
    "    use enumerable⟦T⟧",
    "    class iterator {",
    "        var cache",
    "        var cacheLoaded := false",
    "        def sourceIterator = source.iterator",
    "        method asString { \"an iterator over filtered {source}\" }",
    "        method hasNext {",
    "        // To determine if this iterator has a next element, we have to find",
    "        // an acceptable element; this is then cached, for the use of next",
    "            if (cacheLoaded) then { true } else { hasNextAcceptableElement }",
    "        }",
    "        method next {",
    "            if (cacheLoaded.not) then { cache := nextAcceptableElement }",
    "            cacheLoaded := false",
    "            return cache",
    "        }",
    "        method nextAcceptableElement is confidential {",
    "        // return the next element of the underlying iterator satisfying",
    "        // predicate; if there is none, raises IteratorExhausted.",
    "            while { true } do {",
    "                def outerNext = sourceIterator.next",
    "                def isAcceptable = predicate.apply(outerNext)",
    "                if (isAcceptable) then { return outerNext }",
    "            }",
    "        }",
    "        method hasNextAcceptableElement is confidential {",
    "        // returns true is there is another element in the underlying iterator",
    "        // satisfying predicate, otherwise false",
    "            while { true } do {",
    "                if (sourceIterator.hasNext.not) then { return false }",
    "                def outerNext = sourceIterator.next",
    "                def isAcceptable = predicate.apply(outerNext)",
    "                if (isAcceptable) then {",
    "                    cacheLoaded := true",
    "                    cache := outerNext",
    "                    return true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    method asDebugString { \"a lazy sequence filtering {source}\" }",
    "}",
    "",
    "class iteratorConcat⟦T⟧(left:Iterator⟦T⟧, right:Iterator⟦T⟧) {",
    "    method next {",
    "        if (left.hasNext) then {",
    "            left.next",
    "        } else {",
    "            right.next",
    "        }",
    "    }",
    "    method hasNext {",
    "        if (left.hasNext) then { return true }",
    "        return right.hasNext",
    "    }",
    "    method asDebugString { \"iteratorConcat of {left} and {right}\" }",
    "    method asString { \"an iterator over a concatenation\" }",
    "}",
    "class lazyConcatenation⟦T⟧(left, right) -> Enumerable⟦T⟧{",
    "    use enumerable⟦T⟧",
    "    method iterator {",
    "        iteratorConcat(left.iterator, right.iterator)",
    "    }",
    "    method asDebugString { \"lazy concatenation of {left} and {right}\" }",
    "    method size { left.size + right.size }  // may raise SizeUnknown",
    "}",
    "",
    "trait collection⟦T⟧ {",
    "",
    "    method asString { \"a collection trait\" }",
    "    method sizeIfUnknown(action) {",
    "        // override if size is known",
    "        action.apply",
    "    }",
    "    method size {",
    "        sizeIfUnknown {",
    "            SizeUnknown.raise \"collection {asDebugString} does not know its size\"",
    "        }",
    "    }",
    "    method do(action) is required",
    "    method iterator is required",
    "    method isEmpty {",
    "        // override if size is known",
    "        iterator.hasNext.not",
    "    }",
    "    method first {",
    "        def it = iterator",
    "        if (it.hasNext) then { ",
    "            it.next",
    "        } else {",
    "            BoundsError.raise \"no first element in {self}\"",
    "        }",
    "    }",
    "    method do(block1) separatedBy(block0) {",
    "        var firstTime := true",
    "        var i := 0",
    "        do { each ->",
    "            if (firstTime) then {",
    "                firstTime := false",
    "            } else {",
    "                block0.apply",
    "            }",
    "            block1.apply(each)",
    "        }",
    "        return self",
    "    }",
    "    method reduce(initial, blk) {",
    "    // deprecated; for compatibility with builtInList",
    "        fold(blk)startingWith(initial)",
    "    }",
    "    method fold(blk)startingWith(initial) {",
    "        var result := initial",
    "        do {it ->",
    "            result := blk.apply(result, it)",
    "        }",
    "        return result",
    "    }",
    "    method map⟦R⟧(block1:Function1⟦T, R⟧) -> Enumerable⟦R⟧ {",
    "        lazySequenceOver(self) mappedBy(block1)",
    "    }",
    "    method filter(selectionCondition:Predicate1⟦T⟧) -> Enumerable⟦T⟧ {",
    "        lazySequenceOver(self) filteredBy(selectionCondition)",
    "    }",
    "    method >>(target) { target << self }",
    "    method <<(source) { self ++ source }",
    "",
    "}   // end of trait collection",
    "",
    "trait enumerable⟦T⟧ {",
    "    use collection⟦T⟧",
    "    method iterator is required",
    "    method ==(other) {",
    "        isEqual (self) toCollection (other)",
    "    }",
    "    method ≠ (other) { (self == other).not }",
    "    method do(block1:Procedure1⟦T⟧) -> Done {",
    "        def selfIterator = self.iterator",
    "        while {selfIterator.hasNext} do {",
    "            block1.apply(selfIterator.next)",
    "        }",
    "    }",
    "    method keysAndValuesDo(block2:Procedure2⟦Number,T⟧) -> Done {",
    "        var ix := 0",
    "        def selfIterator = self.iterator",
    "        while {selfIterator.hasNext} do {",
    "            ix := ix + 1",
    "            block2.apply(ix, selfIterator.next)",
    "        }",
    "    }",
    "    method values -> Collection⟦T⟧ {",
    "        self",
    "    }",
    "    method fold⟦R⟧(block2)startingWith(initial) -> R {",
    "        var res := initial",
    "        def selfIterator = self.iterator",
    "        while { selfIterator.hasNext } do {",
    "            res := block2.apply(res, selfIterator.next)",
    "        }",
    "        return res",
    "    }",
    "    method ++ (other:Collection⟦T⟧) -> Enumerable⟦T⟧ {",
    "        lazyConcatenation(self, other)",
    "    }",
    "    method sortedBy(sortBlock:Function2) -> List⟦T⟧ {",
    "        list.withAll(self).sortBy(sortBlock)",
    "    }",
    "    method sorted -> List⟦T⟧ {",
    "        list.withAll(self).sort",
    "    }",
    "    method asString {",
    "        var s := \"[\"",
    "        do { each -> s := s ++ each.asString } separatedBy { s := s ++ \", \" }",
    "        s ++ \"]\"",
    "    }",
    "}   // end of trait enumerable",
    "",
    "trait indexable⟦T⟧ {",
    "    use collection⟦T⟧",
    "    method at(index) is required",
    "    method size is required",
    "    method sizeIfUnknown(action) { size }",
    "    method isEmpty { size == 0 }",
    "    method keysAndValuesDo(action:Procedure2⟦Number,T⟧) -> Done {",
    "        def curSize = size",
    "        var i := 1",
    "        while {i <= curSize} do {",
    "            action.apply(i, self.at(i))",
    "            i := i + 1",
    "        }",
    "    }",
    "    method first { at(1) }",
    "    method second { at(2) }",
    "    method third { at(3) }",
    "    method fourth { at(4) }",
    "    method fifth { at(5) }",
    "    method last { at(size) }",
    "    method indices { range.from 1 to(size) }",
    "    method indexOf(sought:T)  {",
    "        indexOf(sought) ifAbsent { NoSuchObject.raise \"collection does not contain {sought}\" }",
    "    }",
    "    method indexOf(sought:T) ifAbsent(action:Function0⟦Unknown⟧)  {",
    "        keysAndValuesDo { ix, v ->",
    "            if (v == sought) then { return ix }",
    "        }",
    "        action.apply",
    "    }",
    "    method ==(other) {",
    "        isEqual (self) toCollection (other)",
    "    }",
    "    method hash {",
    "        self.fold { acc, each ->",
    "            hashAndCombine(acc, each)",
    "        } startingWith ([].hash)",
    "    }",
    "    method ≠ (other) { (self == other).not }",
    "}   // end of trait indexable",
    "",
    "method max(a,b) is confidential {       // copied from standard prelude",
    "    if (a > b) then { a } else { b }",
    "}",
    "",
    "// we used to define",
    "// once method emptySequence⟦T⟧ is confidential { ... }",
    "// and use this to defin esequence.empty, but it turns out that getting the",
    "// correct emptySequence from the cache is slower than just creating a [ ]",
    "",
    "class sequence⟦T⟧ {",
    "",
    "    method asString { \"the sequence factory\" }",
    "",
    "    method empty { [] }",
    "",
    "    method with(x:T) { [] ++ [x] }",
    "",
    "    method withAll(arg: Collection⟦T⟧) { [] ++ arg }",
    "",
    "    method << (source) { [] ++ source }",
    "",
    "}",
    "",
    "type MinimalyIterable = interface {",
    "    iterator -> Iterator",
    "}",
    "",
    "method isEqual(left) toCollection(right) {",
    "    if (MinimalyIterable.matches(right)) then {",
    "        def leftIter = left.iterator",
    "        def rightIter = right.iterator",
    "        while {leftIter.hasNext && rightIter.hasNext} do {",
    "            if (leftIter.next != rightIter.next) then {",
    "                return false",
    "            }",
    "        }",
    "        leftIter.hasNext == rightIter.hasNext",
    "    } else { ",
    "        false",
    "    }",
    "}",
    "",
    "",
    "method hashAndCombine(aHash, anObj) {",
    "    def objHash = anObj.hash",
    "    native \"js\" code ‹return new GraceNum((var_aHash._value * 2) ^ var_objHash._value);",
    "›       //  ^ is bitwsie XOR",
    "}",
    "",
    "class list⟦T⟧ {",
    "    ",
    "    method asString { \"the list factory\" }",
    "    ",
    "    method empty -> List⟦T⟧ { withAll [] }",
    "    ",
    "    method with(x:T)  -> List⟦T⟧ { withAll [x] }",
    "",
    "    class withAll(a: Collection⟦T⟧) -> List⟦T⟧ {",
    "        use indexable⟦T⟧",
    "",
    "        var mods is readable := 0",
    "        native \"js\" code ‹this._value = [];",
    "            this.className = 'list';›",
    "        a.do { each ->",
    "            native \"js\" code ‹this._value.push(var_each);›",
    "        }",
    "        method size {",
    "            native \"js\" code ‹return new GraceNum(this._value.length);›",
    "        }",
    "        method at(n) {",
    "            native \"js\" code ‹var idx = var_n._value;",
    "                var result = this._value[idx-1];",
    "                if (result !== undefined) return result;     // fast path",
    "                // Now investigate the cause of the problem:",
    "                checkBounds(this, var_n);›",
    "        }",
    "",
    "        method at(n) ifAbsent(action) {",
    "            native \"js\" code ‹var idx = var_n._value;",
    "                var result = this._value[idx-1];",
    "                if (result !== undefined) return result;     // fast path",
    "                return request(var_action, \"apply\", [0]);›",
    "        }",
    "",
    "        method at(n)put(x) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹var  ix = var_n._value;",
    "                checkBounds(this, var_n, this._value.length + 1);",
    "                    // we allow n to be one greater than the current size",
    "                this._value[ix-1] = var_x;",
    "                return this;›",
    "        }",
    "",
    "        method add(x:T) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹this._value.push(var_x);",
    "                return this;›",
    "        }",
    "        method addAll(l) {",
    "            mods := mods + 1",
    "            l.do { each ->",
    "                native \"js\" code ‹this._value.push(var_each);›",
    "            }",
    "            self",
    "        }",
    "        method push(x) {        // backward compatibility",
    "            mods := mods + 1",
    "            native \"js\" code ‹this._value.push(var_x);",
    "                return this;›",
    "        }",
    "        method addLast(x) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹this._value.push(var_x);",
    "                return this;›",
    "        }",
    "        method removeLast {",
    "            mods := mods + 1",
    "            native \"js\" code ‹if (this._value.length === 0) {",
    "                var msg = \"you can't remove an element from an empty list\";",
    "                var BoundsError = callmethod(Grace_prelude, \"BoundsError\", [0]);",
    "                callmethod(BoundsError, \"raise(1)\", [1], new GraceString(msg));",
    "            } else",
    "                return this._value.pop();›",
    "        }",
    "        method addAllFirst(l) {",
    "            mods := mods + 1",
    "            var ix := l.size;",
    "            while {ix > 0} do {",
    "                def each = l.at(ix)",
    "                ix := ix - 1",
    "                native \"js\" code ‹this._value.unshift(var_each);›",
    "            }",
    "            self",
    "        }",
    "        method addFirst(elem) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹this._value.unshift(var_elem);›",
    "            self",
    "        }",
    "        method clear {",
    "            mods := mods + 1",
    "            native \"js\" code ‹this._value = [];",
    "                return this;›",
    "        }",
    "",
    "        method removeFirst {",
    "            removeAt(1)",
    "        }",
    "        method removeAt(n) {",
    "            mods := mods + 1",
    "            def removed = self.at(n)    // does the bounds check",
    "            native \"js\" code ‹this._value.splice(var_n._value - 1, 1);›",
    "            return removed",
    "        }",
    "",
    "        method remove(elt:T) {",
    "            def ix = self.indexOf(elt) ifAbsent {",
    "                NoSuchObject.raise \"list does not contain {elt}\"",
    "            }",
    "            removeAt(ix)",
    "            self",
    "        }",
    "",
    "        method remove(elt:T) ifAbsent(action:Procedure0) {",
    "            def ix = self.indexOf(elt) ifAbsent {",
    "                action.apply",
    "                return self",
    "            }",
    "            removeAt(ix)",
    "            self",
    "        }",
    "",
    "        method removeAll(vs: Collection⟦T⟧) {",
    "            removeAll(vs) ifAbsent { NoSuchObject.raise \"list does not contain object\" }",
    "            self",
    "        }",
    "        method removeAll(vs: Collection⟦T⟧) ifAbsent(action:Procedure0)  {",
    "            for (vs) do { each ->",
    "                def ix = indexOf(each) ifAbsent { 0 }",
    "                if (ix ≠ 0) then {",
    "                    removeAt(ix)",
    "                } else {",
    "                    action.apply",
    "                }",
    "            }",
    "            self",
    "        }",
    "        method insert(elt:T) at(n) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹checkBounds(this, var_n, this._value.length + 1);",
    "                this._value.splice(var_n._value - 1, 0, var_elt);›",
    "            self",
    "        }",
    "        method pop { removeLast }",
    "        method reversed {",
    "            def result = list.empty",
    "            do { each -> result.addFirst(each) }",
    "            result",
    "        }",
    "        method reverse {",
    "            mods := mods + 1",
    "            var hiIx := size",
    "            var loIx := 1",
    "            while {loIx < hiIx} do {",
    "                def hiVal = self.at(hiIx)",
    "                self.at(hiIx) put (self.at(loIx))",
    "                self.at(loIx) put (hiVal)",
    "                hiIx := hiIx - 1",
    "                loIx := loIx + 1",
    "            }",
    "            self",
    "        }",
    "        method ++ (o:Collection⟦T⟧) {",
    "            def l = list.withAll(self)",
    "            l.addAll(o)",
    "        }",
    "        method asString {",
    "            var s := \"list [\"",
    "            do { each -> s := s ++ each.asString }",
    "                  separatedBy { s := s ++ \", \" }",
    "            s ++ \"]\"",
    "        }",
    "        method asDebugString {",
    "            var s := \"list [\"",
    "            do { each -> s := s ++ each.asDebugString }",
    "                  separatedBy { s := s ++ \", \" }",
    "            s ++ \"]\"",
    "        }",
    "        method contains(element) {",
    "            do { each -> if (each == element) then { return true } }",
    "            return false",
    "        }",
    "        method do(block1) {",
    "            def iMods = mods",
    "            var i := 1",
    "            while {i ≤ size} do {",
    "                if (iMods ≠ mods) then {",
    "                    ConcurrentModification.raise (asDebugString)",
    "                }",
    "                block1.apply(self.at(i))",
    "                i := i + 1",
    "            }",
    "        }",
    "        method iterator {",
    "            object {",
    "                def iMods = mods",
    "                var idx := 1",
    "                method asDebugString { \"{asString}⟪{idx}⟫\" }",
    "                method asString { \"aListIterator\" }",
    "                method hasNext { idx <= size }",
    "                method next {",
    "                    if (iMods != mods) then {",
    "                        ConcurrentModification.raise (asDebugString)",
    "                    }",
    "                    if (idx > size) then { IteratorExhausted.raise \"on list\" }",
    "                    def ret = at(idx)",
    "                    idx := idx + 1",
    "                    ret",
    "                }",
    "            }",
    "        }",
    "        method values {",
    "            self",
    "        }",
    "        method keys {",
    "            self.indices",
    "        }",
    "        method sortBy(sortBlock:Function2) {",
    "            mods := mods + 1",
    "            native \"js\" code ‹var compareFun = function compareFun(a, b) {",
    "                    var res = callmethod(var_sortBlock, \"apply(2)\", [2], a, b);",
    "                    if (res.className == \"number\") return res._value;",
    "                    throw new GraceExceptionPacket(TypeErrorObject,",
    "                           new GraceString(\"sort block in list.sortBy method did not return a number\"));",
    "          };",
    "          this._value.sort(compareFun);›",
    "            self",
    "        }",
    "        method sort {",
    "            sortBy { l, r ->",
    "                if (l == r) then {0}",
    "                    elseif {l < r} then {-1}",
    "                    else {1}",
    "            }",
    "        }",
    "        method sortedBy(sortBlock:Function2) {",
    "            copy.sortBy(sortBlock)",
    "        }",
    "        method sorted {",
    "            copy.sort",
    "        }",
    "        method copy {",
    "            outer.withAll(self)",
    "        }",
    "        method << (source) {",
    "            self.addAll(source)",
    "        }",
    "    }   // end of list.withAll",
    "",
    "    method << (source) { self.withAll(source) }",
    "",
    "}   // end of list class",
    "",
    "def unused = object {",
    "    var unused := true",
    "    def key is public = self",
    "    def value is public = self",
    "    method asString { \"unused\" }",
    "    method == (other) { self.isMe(other) }",
    "    method ≠ (other) { self.isMe(other).not }",
    "    method hash { self.myIdentityHash }",
    "}",
    "",
    "def removed = object {",
    "    var removed := true",
    "    def key is public = self",
    "    def value is public = self",
    "    method asString { \"removed\" }",
    "    method == (other) { self.isMe(other) }",
    "    method ≠ (other) { self.isMe(other).not }",
    "    method hash { self.myIdentityHash }",
    "}",
    "",
    "class set⟦T⟧ {",
    "",
    "    method asString { \"the set factory\" }",
    "",
    "    method withAll(a: Collection⟦T⟧) -> Set⟦T⟧ {",
    "        def cap = max (a.sizeIfUnknown{2} * 3 + 1, 8)",
    "        def result = ofCapacity (cap)",
    "        a.do { x -> result.add(x) }",
    "        result",
    "    }",
    "    method with(x:T) -> Set⟦T⟧ {",
    "        empty.add(x)",
    "    }",
    "    method empty -> Set⟦T⟧ {",
    "        ofCapacity 8",
    "    }",
    "    ",
    "    method << (source) { self.withAll(source) }",
    "",
    "    class ofCapacity(cap) -> Set⟦T⟧ is confidential {",
    "        use collection⟦T⟧",
    "        var mods is readable := 0",
    "        var inner := prelude.primitiveArray.new(cap)",
    "        var size is readable := 0",
    "        (0..(cap - 1)).do { i ->",
    "            inner.at (i) put (unused)",
    "        }",
    "",
    "        method isEmpty { size == 0 }",
    "",
    "        method addAll(elements) {",
    "            mods := mods + 1",
    "            for (elements) do { x ->",
    "                if (! contains(x)) then {",
    "                    def t = findPositionForAdd(x)",
    "                    inner.at(t)put(x)",
    "                    size := size + 1",
    "                    if (size > (inner.size / 2)) then {",
    "                        expand",
    "                    }",
    "                }",
    "            }",
    "            self    // for chaining",
    "        }",
    "",
    "        method add(x:T) {",
    "            if (! contains(x)) then {",
    "                mods := mods + 1",
    "                def t = findPositionForAdd(x)",
    "                inner.at(t)put(x)",
    "                size := size + 1",
    "                if (size > (inner.size / 2)) then {",
    "                    expand",
    "                }",
    "            }",
    "            self    // for chaining",
    "        }",
    "",
    "        method removeAll(elements) {",
    "            for (elements) do { x ->",
    "                remove (x) ifAbsent {",
    "                    NoSuchObject.raise \"set does not contain {x}\"",
    "                }",
    "            }",
    "            self    // for chaining",
    "        }",
    "        method removeAll(elements)ifAbsent(block:Procedure1⟦T⟧) {",
    "            mods := mods + 1",
    "            for (elements) do { x ->",
    "                var t := findPosition(x)",
    "                if (inner.at(t) == x) then {",
    "                    inner.at(t) put (removed)",
    "                    size := size - 1",
    "                } else {",
    "                    block.apply(x)",
    "                }",
    "            }",
    "            self    // for chaining",
    "        }",
    "        method clear {",
    "            mods := mods + 1",
    "            inner := prelude.primitiveArray.new(cap)",
    "            size := 0",
    "            self",
    "        }",
    "",
    "        method remove (elt:T) ifAbsent (block) {",
    "            var t := findPosition(elt)",
    "            if (inner.at(t) == elt) then {",
    "                inner.at(t) put (removed)",
    "                mods := mods + 1",
    "                size := size - 1",
    "            } else {",
    "                block.apply",
    "            }",
    "            self    // for chaining",
    "        }",
    "",
    "        method remove(elt:T) {",
    "            remove (elt) ifAbsent {",
    "                NoSuchObject.raise \"set does not contain {elt}\"",
    "            }",
    "            self    // for chaining",
    "        }",
    "",
    "        method contains(x) {",
    "            var t := findPosition(x)",
    "            if (inner.at(t) == x) then {",
    "                return true",
    "            }",
    "            return false",
    "        }",
    "        method includes(booleanBlock) {",
    "            self.do { each ->",
    "                if (booleanBlock.apply(each)) then { return true }",
    "            }",
    "            return false",
    "        }",
    "        method find(booleanBlock)ifNone(notFoundBlock) {",
    "            self.do { each ->",
    "                if (booleanBlock.apply(each)) then { return each }",
    "            }",
    "            return notFoundBlock.apply",
    "        }",
    "        method findPosition(x) is confidential {",
    "            def h = x.hash",
    "            def s = inner.size",
    "            var t := h % s",
    "            var jump := 5",
    "            var candidate",
    "            while {",
    "                candidate := inner.at(t)",
    "                unused ≠ candidate",
    "            } do {",
    "                if (candidate == x) then {",
    "                    return t",
    "                }",
    "                if (jump != 0) then {",
    "                    t := (t * 3 + 1) % s",
    "                    jump := jump - 1",
    "                } else {",
    "                    t := (t + 1) % s",
    "                }",
    "            }",
    "            return t",
    "        }",
    "        method findPositionForAdd(x) is confidential {",
    "            def h = x.hash",
    "            def s = inner.size",
    "            var t := h % s",
    "            var jump := 5",
    "            var candidate",
    "            while {",
    "                candidate := inner.at(t)",
    "                (unused != candidate) && (removed != candidate)",
    "            } do {",
    "                if (candidate == x) then {",
    "                    return t",
    "                }",
    "                if (jump != 0) then {",
    "                    t := (t * 3 + 1) % s",
    "                    jump := jump - 1",
    "                } else {",
    "                    t := (t + 1) % s",
    "                }",
    "            }",
    "            return t",
    "        }",
    "",
    "        method asString {",
    "            var s := \"set [\"",
    "            do {each -> s := s ++ each.asString }",
    "                separatedBy { s := s ++ \", \" }",
    "            s ++ \"]\"",
    "        }",
    "        method asDebugString {",
    "            var s := \"set\\{\"",
    "            do {each -> s := s ++ each.asDebugString }",
    "                separatedBy { s := s ++ \", \" }",
    "            s ++ \"\\}\"",
    "        }",
    "        method extend(l) {",
    "            for (l) do {i->",
    "                add(i)",
    "            }",
    "        }",
    "        method do(block1) {",
    "            def iMods = mods",
    "            var i := 0",
    "            var found := 0",
    "            var candidate",
    "            while {found < size} do {",
    "                if (iMods != mods) then {",
    "                    ConcurrentModification.raise (outer.asDebugString)",
    "                }",
    "                candidate := inner.at(i)",
    "                if ((unused != candidate) && (removed != candidate)) then {",
    "                    found := found + 1",
    "                    block1.apply(candidate)",
    "                }",
    "                i := i + 1",
    "            }",
    "        }",
    "        method iterator {",
    "            object {",
    "                def iMods = mods",
    "                var count := 1",
    "                var idx := -1",
    "                method hasNext { size >= count }",
    "                method next {",
    "                    var candidate",
    "                    def innerSize = inner.size",
    "                    while {",
    "                        idx := idx + 1",
    "                        if (iMods != mods) then {",
    "                            ConcurrentModification.raise (outer.asDebugString)",
    "                        }",
    "                        if (idx >= innerSize) then {",
    "                            IteratorExhausted.raise \"iterator over {outer.asString}\"",
    "                        }",
    "                        candidate := inner.at(idx)",
    "                        (unused == candidate) || (removed == candidate)",
    "                    } do { }",
    "                    count := count + 1",
    "                    candidate",
    "                }",
    "            }",
    "        }",
    "",
    "        method expand is confidential {",
    "            def c = inner.size",
    "            def n = c * 2",
    "            def oldInner = inner",
    "            size := 0",
    "            inner := prelude.primitiveArray.new(n)",
    "            for (0..(inner.size-1)) do {i->",
    "                inner.at(i)put(unused)",
    "            }",
    "            for (0..(oldInner.size-1)) do {i->",
    "                if ((unused != oldInner.at(i)) && (removed != oldInner.at(i))) then {",
    "                    add(oldInner.at(i))",
    "                }",
    "            }",
    "        }",
    "        method ==(other) {",
    "            if (Collection.matches(other)) then {",
    "                var otherSize := 0",
    "                other.do { each ->",
    "                    otherSize := otherSize + 1",
    "                    if (! self.contains(each)) then {",
    "                        return false",
    "                    }",
    "                }",
    "                otherSize == self.size",
    "            } else { ",
    "                false",
    "            }",
    "        }",
    "        method hash {",
    "            // we have to sort our elements to obtain the same hash for two equal sets",
    "            list.withAll(self).sort.hash",
    "        }",
    "        method ≠ (other) { (self == other).not }",
    "        method copy {",
    "            outer.withAll(self)",
    "        }",
    "        method ++ (other:Collection⟦T⟧) {",
    "        // set union",
    "            copy.addAll(other)",
    "        }",
    "        method -- (other:Collection⟦T⟧) {",
    "        // set difference",
    "            def result = set.empty",
    "            for (self) do {v->",
    "                if (!other.contains(v)) then {",
    "                    result.add(v)",
    "                }",
    "            }",
    "            result",
    "        }",
    "        method ** (other) {",
    "        // set intersection",
    "            set.withAll((filter {each -> other.contains(each)}))",
    "        }",
    "        method isSubset(s2: Set⟦T⟧) {",
    "            self.do{ each ->",
    "                if (s2.contains(each).not) then { return false }",
    "            }",
    "            return true",
    "        }",
    "",
    "        method isSuperset(s2: Collection⟦T⟧) {",
    "            s2.do{ each ->",
    "                if (self.contains(each).not) then { return false }",
    "            }",
    "            return true",
    "        }",
    "        method << (source) {",
    "            self.addAll(source)",
    "        }",
    "    }",
    "}",
    "",
    "type Binding⟦K,T⟧ = {",
    "    key -> K",
    "    value -> T",
    "    hash -> Number",
    "    ==(other) -> Boolean",
    "}",
    "",
    "class binding⟦K, T⟧ {",
    "    method asString { \"the binding factory\" }",
    "",
    "    class key(k)value(v) {",
    "        def key is public = k",
    "        def value is public = v",
    "        method asString { \"{key}::{value}\" }",
    "        method hash { (key.hash * 1021) + value.hash }",
    "        method == (other) {",
    "            match (other)",
    "                case { o:Binding -> (key == o.key) && (value == o.value) }",
    "                else { return false }",
    "        }",
    "        method ≠ (other) { (self == other).not }",
    "    }",
    "}",
    "",
    "type ComparableToDictionary⟦K,T⟧ = interface {",
    "    size -> Number",
    "    at(_:K)ifAbsent(_) -> T",
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
    "        // we can't say -> Dictionary⟦K,T⟧, because checking that (dynamically)",
    "        // requires building a dictionary for the memo table in the Dictionary type",
    "",
    "        use collection⟦T⟧",
    "        var mods is readable := 0",
    "        var numBindings := 0",
    "        var inner := prelude.primitiveArray.new(8)",
    "        for (0..(inner.size-1)) do { i ->",
    "            inner.at(i)put(unused)",
    "        }",
    "        method size { numBindings }",
    "        method at(key')put(value') {",
    "            mods := mods + 1",
    "            var t := findPositionForAdd(key')",
    "            if ((unused == inner.at(t)) || (removed == inner.at(t))) then {",
    "                numBindings := numBindings + 1",
    "            }",
    "            inner.at(t)put(binding.key(key')value(value'))",
    "            if ((size * 2) > inner.size) then { expand }",
    "            self    // for chaining",
    "        }",
    "        method add(aBinding) {",
    "            mods := mods + 1",
    "            var t := findPositionForAdd (aBinding.key)",
    "            if ((unused == inner.at(t)) || (removed == inner.at(t))) then {",
    "                numBindings := numBindings + 1",
    "            }",
    "            inner.at(t)put(aBinding)",
    "            if ((size * 2) > inner.size) then { expand }",
    "            self    // for chaining",
    "        }",
    "        method addAll(bindings) {",
    "            bindings.do{ each -> add(each) }",
    "            self    // for chaining",
    "        }",
    "        method at(k) {",
    "            var b := inner.at(findPosition(k))",
    "            if (b.key == k) then {",
    "                return b.value",
    "            }",
    "            NoSuchObject.raise \"dictionary does not contain entry with key {k}\"",
    "        }",
    "        method at(k) ifAbsent(action) {",
    "            var b := inner.at(findPosition(k))",
    "            if (b.key == k) then {",
    "                return b.value",
    "            }",
    "            action.apply",
    "        }",
    "        method containsKey(k) {",
    "            var t := findPosition(k)",
    "            if (inner.at(t).key == k) then {",
    "                return true",
    "            }",
    "            false",
    "        }",
    "        method removeAllKeys(keys) {",
    "            mods := mods + 1",
    "            for (keys) do { k ->",
    "                var t := findPosition(k)",
    "                if (inner.at(t).key == k) then {",
    "                    inner.at(t)put(removed)",
    "                    numBindings := numBindings - 1",
    "                } else {",
    "                    NoSuchObject.raise \"dictionary does not contain entry with key {k}\"",
    "                }",
    "            }",
    "            self",
    "        }",
    "        method removeKey(k:K) {",
    "            mods := mods + 1",
    "            var t := findPosition(k)",
    "            if (inner.at(t).key == k) then {",
    "                inner.at(t)put(removed)",
    "                numBindings := numBindings - 1",
    "            } else {",
    "                NoSuchObject.raise \"dictionary does not contain entry with key {k}\"",
    "            }",
    "            self",
    "        }",
    "        method removeKey(k:K) ifAbsent (action:Function0⟦Unknown⟧) {",
    "            mods := mods + 1",
    "            var t := findPosition(k)",
    "            if (inner.at(t).key == k) then {",
    "                inner.at(t)put(removed)",
    "                numBindings := numBindings - 1",
    "            } else {",
    "                action.apply",
    "            }",
    "            self",
    "        }",
    "        method removeAllValues(removals) {",
    "            mods := mods + 1",
    "            for (0..(inner.size-1)) do {i->",
    "                def a = inner.at(i)",
    "                if (removals.contains(a.value)) then {",
    "                    inner.at(i)put(removed)",
    "                    numBindings := numBindings - 1",
    "                }",
    "            }",
    "            self",
    "        }",
    "        method removeValue(v) {",
    "            // remove all bindings with value v",
    "            mods := mods + 1",
    "            def initialNumBindings = numBindings",
    "            for (0..(inner.size-1)) do {i->",
    "                def a = inner.at(i)",
    "                if (v == a.value) then {",
    "                    inner.at (i) put (removed)",
    "                    numBindings := numBindings - 1",
    "                }",
    "            }",
    "            if (numBindings == initialNumBindings) then {",
    "                NoSuchObject.raise \"dictionary does not contain entry with value {v}\"",
    "            }",
    "            self",
    "        }",
    "        method removeValue(v) ifAbsent (action:Function0⟦Unknown⟧) {",
    "            // remove all bindings with value v",
    "            mods := mods + 1",
    "            def initialNumBindings = numBindings",
    "            for (0..(inner.size-1)) do {i->",
    "                def a = inner.at(i)",
    "                if (v == a.value) then {",
    "                    inner.at (i) put (removed)",
    "                    numBindings := numBindings - 1",
    "                }",
    "            }",
    "            if (numBindings == initialNumBindings) then {",
    "                action.apply",
    "            }",
    "            self",
    "        }",
    "        method clear {",
    "            inner := prelude.primitiveArray.new(8)",
    "            numBindings := 0",
    "            mods := mods + 1",
    "            for (0..(inner.size-1)) do { i ->",
    "                inner.at(i)put(unused)",
    "            }",
    "            self",
    "        }",
    "        method containsValue(v) {",
    "            self.valuesDo{ each ->",
    "                if (v == each) then { return true }",
    "            }",
    "            false",
    "        }",
    "        method contains(v) { containsValue(v) }",
    "",
    "        method findPosition(x) is confidential {",
    "            def h = x.hash",
    "            def s = inner.size",
    "            var t := h % s",
    "            var jump := 5",
    "            while { unused ≠ inner.at(t) } do {",
    "                if (inner.at(t).key == x) then {",
    "                    return t",
    "                }",
    "                if (jump != 0) then {",
    "                    t := (t * 3 + 1) % s",
    "                    jump := jump - 1",
    "                } else {",
    "                    t := (t + 1) % s",
    "                }",
    "            }",
    "            return t",
    "        }",
    "        method findPositionForAdd(x) is confidential {",
    "            def h = x.hash",
    "            def s = inner.size",
    "            var t := h % s",
    "            var jump := 5",
    "            while { (unused ≠ inner.at(t)) && (removed ≠ inner.at(t)) } do {",
    "                if (inner.at(t).key == x) then {",
    "                    return t",
    "                }",
    "                if (jump != 0) then {",
    "                    t := (t * 3 + 1) % s",
    "                    jump := jump - 1",
    "                } else {",
    "                    t := (t + 1) % s",
    "                }",
    "            }",
    "            return t",
    "        }",
    "        method asString {",
    "            // do(_)separatedBy(_) won't work; it iterates over values,",
    "            // and we need an iterator over bindings.",
    "            var s := \"dictionary [\"",
    "            var firstElement := true",
    "            for (0..(inner.size-1)) do {i->",
    "                def a = inner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    if (! firstElement) then {",
    "                        s := s ++ \", \"",
    "                    } else {",
    "                        firstElement := false",
    "                    }",
    "                    s := s ++ \"{a.key}::{a.value}\"",
    "                }",
    "            }",
    "            s ++ \"]\"",
    "        }",
    "        method asDebugString {",
    "            var s := \"dict⟬\"",
    "            for (0..(inner.size-1)) do {i->",
    "                if (i > 0) then { s := s ++ \", \" }",
    "                def a = inner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    s := s ++ \"{i}→{a.key}::{a.value}\"",
    "                } else {",
    "                    s := s ++ \"{i}→{a.asDebugString}\"",
    "                }",
    "            }",
    "            s ++ \"⟭\"",
    "        }",
    "        method keys -> Enumerable⟦K⟧ {",
    "            def sourceDictionary = self",
    "            object {",
    "                use enumerable⟦K⟧",
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
    "        method values -> Enumerable⟦T⟧ {",
    "            def sourceDictionary = self",
    "            object {",
    "                use enumerable⟦T⟧",
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
    "        method bindings -> Enumerable⟦T⟧ {",
    "            def sourceDictionary = self",
    "            object {",
    "                use enumerable⟦T⟧",
    "                method iterator { sourceDictionary.bindingsIterator }",
    "                // should be request on outer",
    "                def size is public = sourceDictionary.size",
    "                method asDebugString {",
    "                    \"a lazy sequence over bindings of {sourceDictionary}\"",
    "                }",
    "            }",
    "        }",
    "        method iterator -> Iterator⟦T⟧ { values.iterator }",
    "        class bindingsIterator -> Iterator⟦Binding⟦K, T⟧⟧ {",
    "            // this should be confidential, but can't be until `outer` is fixed.",
    "            def iMods = mods",
    "            var count := 1",
    "            var idx := 0",
    "            var elt",
    "            method hasNext { size >= count }",
    "            method next {",
    "                if (iMods != mods) then {",
    "                    ConcurrentModification.raise (outer.asString)",
    "                }",
    "                if (size < count) then { IteratorExhausted.raise \"over {outer.asString}\" }",
    "                while {",
    "                    elt := inner.at(idx)",
    "                    (unused == elt) || (removed == elt)",
    "                } do {",
    "                    idx := idx + 1",
    "                }",
    "                count := count + 1",
    "                idx := idx + 1",
    "                elt",
    "            }",
    "        }",
    "        method expand is confidential {",
    "            def c = inner.size",
    "            def n = c * 2",
    "            def oldInner = inner",
    "            inner := prelude.primitiveArray.new(n)",
    "            for (0..(n - 1)) do {i->",
    "                inner.at(i)put(unused)",
    "            }",
    "            numBindings := 0",
    "            for (0..(c - 1)) do {i->",
    "                def a = oldInner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    self.at(a.key)put(a.value)",
    "                }",
    "            }",
    "        }",
    "        method keysAndValuesDo(block2) {",
    "            for (0..(inner.size-1)) do {i->",
    "                def a = inner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    block2.apply(a.key, a.value)",
    "                }",
    "            }",
    "        }",
    "        method keysDo(block1) {",
    "            def iMods = mods",
    "            for (0..(inner.size-1)) do { i ->",
    "                if (iMods ≠ mods) then {",
    "                    ConcurrentModification.raise (asDebugString)",
    "                }",
    "                def a = inner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    block1.apply(a.key)",
    "                }",
    "            }",
    "        }",
    "        method valuesDo(block1) {",
    "            def iMods = mods",
    "            for (0..(inner.size-1)) do { i ->",
    "                if (iMods ≠ mods) then {",
    "                    ConcurrentModification.raise (asDebugString)",
    "                }",
    "                def a = inner.at(i)",
    "                if ((unused ≠ a) && (removed ≠ a)) then {",
    "                    block1.apply(a.value)",
    "                }",
    "            }",
    "        }",
    "        method do(block1) { valuesDo(block1) }",
    "",
    "        method ==(other) {",
    "            match (other)",
    "              case { o:ComparableToDictionary⟦K,T⟧ ->",
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
    "",
    "def range is public = object {",
    "    method asString { \"the range factory\" }",
    "    method from(lower)to(upper) {",
    "        //  returns Sequence⟦Number⟧",
    "        match (lower)",
    "          case { _:Number ->",
    "        } else {",
    "            RequestError.raise (\"lower bound {lower}\" ++",
    "                \" in range.from({lower})to({upper}) is not an integer\")",
    "        }",
    "        def start = lower.truncated",
    "        if (start != lower) then {",
    "            RequestError.raise (\"lower bound {lower}\" ++",
    "                \" in range.from({lower})to({upper}) is not an integer\") }",
    "",
    "        match (upper)",
    "          case {_:Number ->",
    "        } else {",
    "            RequestError.raise (\"upper bound {upper}\" ++",
    "                \" in range.from({lower})to({upper}) is not an integer\")",
    "        }",
    "        def stop = upper.truncated",
    "        if (stop != upper) then {",
    "            RequestError.raise (\"upper bound {upper}\" ++",
    "                \" in range.from()to() is not an integer\")",
    "        }",
    "",
    "        uncheckedFrom (lower) to (upper)",
    "    }",
    "",
    "    method uncheckedFrom (lower) to (upper) {",
    "        //  returns Sequence⟦Number⟧",
    "        object {",
    "            use indexable⟦Number⟧",
    "            def start = lower",
    "            def stop = upper",
    "            def size is public =",
    "                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}",
    "",
    "            method iterator -> Iterator {",
    "                object {",
    "                    var val := start",
    "                    method hasNext { val <= stop }",
    "                    method next {",
    "                        if (val > stop) then {",
    "                            IteratorExhausted.raise \"over {outer.asString}\"",
    "                        }",
    "                        val := val + 1",
    "                        return (val - 1)",
    "                    }",
    "                    method asString { \"iterator over {outer.asString} at {val}\" }",
    "                }",
    "            }",
    "            method at(ix:Number) {",
    "                if (!(ix <= self.size)) then {",
    "                    BoundsError.raise \"requested range.at({ix}), but upper bound is {size}\"",
    "                }",
    "                if (!(ix >= 1)) then {",
    "                    BoundsError.raise \"requested range.at({ix}), but lower bound is 1\"",
    "                }",
    "                return start + (ix - 1)",
    "            }",
    "            method at(ix:Number)ifAbsent(action) {",
    "                if ((ix >= 1) && (ix <= self.size)) then {",
    "                    start + (ix - 1)",
    "                } else {",
    "                    action.apply",
    "                }",
    "            }",
    "            method contains(elem) -> Boolean {",
    "                try {",
    "                    def intElem = elem.truncated",
    "                    if (intElem != elem) then {return false}",
    "                    if (intElem < start) then {return false}",
    "                    if (intElem > stop) then {return false}",
    "                } catch { ex:prelude.Exception -> return false }",
    "                return true",
    "            }",
    "            method do(block1) {",
    "                var val := start",
    "                while {val <= stop} do {",
    "                    block1.apply(val)",
    "                    val := val + 1",
    "                }",
    "            }",
    "            method keysAndValuesDo(block2) {",
    "                var key := 1",
    "                var val := start",
    "                while {val <= stop} do {",
    "                    block2.apply(key, val)",
    "                    key := key + 1",
    "                    val := val + 1",
    "                }",
    "            }",
    "            method reversed {",
    "                from(upper)downTo(lower)",
    "            }",
    "            method ++ (other:Collection⟦Number⟧) {",
    "                sequence.withAll(lazyConcatenation(self, other))",
    "            }",
    "            method ==(other) {",
    "                isEqual (self) toCollection (other)",
    "            }",
    "            method hash {",
    "                // must be compatable with hash on sequences",
    "                var result := 0x5E0EACE;     // sort of like SEQENCE",
    "                do { each ->",
    "                    result := hashAndCombine(result, each)",
    "                }",
    "                result",
    "            }",
    "            method :: (obj) { binding.key (self) value (obj) }",
    "            method ≠ (other) { (self == other).not }",
    "            method sorted { self }",
    "",
    "            method sortedBy(c) { list.withAll(self).sortBy(c) }",
    "",
    "            method keys { 1..self.size }",
    "",
    "            method values { self }",
    "",
    "            method asString -> String{",
    "                \"range.from({lower})to({upper})\"",
    "            }",
    "        }",
    "    }",
    "    method from(upper)downTo(lower) -> Sequence⟦Number⟧ {",
    "        object {",
    "            use indexable⟦Number⟧",
    "            match (upper)",
    "              case {_:Number ->",
    "            } else {",
    "                RequestError.raise (\"upper bound {upper}\" ++",
    "                    \" in range.from({upper})downTo({lower}) is not an integer\") }",
    "            def start = upper.truncated",
    "            if (start != upper) then {",
    "                RequestError.raise (\"upper bound {upper}\" ++",
    "                    \" in range.from({upper})downTo({lower}) is not an integer\")",
    "            }",
    "            match (lower)",
    "              case {_:Number ->",
    "            } else {",
    "                RequestError.raise (\"lower bound {lower}\" ++",
    "                    \" in range.from({upper})downTo({lower}) is not an integer\")",
    "            }",
    "            def stop = lower.truncated",
    "            if (stop != lower) then {",
    "                RequestError.raise (\"lower bound {lower}\" ++",
    "                    \" in range.from({upper})downTo({lower}) is not an integer\")",
    "            }",
    "            def size is public =",
    "                if ((upper-lower+1) < 0) then { 0 } else {upper-lower+1}",
    "            method iterator {",
    "                object {",
    "                    var val := start",
    "                    method hasNext { val >= stop }",
    "                    method next {",
    "                        if (val < stop) then { IteratorExhausted.raise \"over {outer.asString}\" }",
    "                        val := val - 1",
    "                        return (val + 1)",
    "                    }",
    "                    method asString { \"an iterator over {outer.asString} at {val}\" }",
    "                }",
    "            }",
    "            method at(ix:Number) {",
    "                if (!(ix <= self.size)) then {",
    "                    BoundsError.raise \"requested range.at({ix}) but upper bound is {size}\"",
    "                }",
    "                if (!(ix >= 1)) then {",
    "                    BoundsError.raise \"requested range.at({ix}) but lower bound is 1\"",
    "                }",
    "                return start - (ix - 1)",
    "            }",
    "            method at(ix:Number)ifAbsent(action) {",
    "                if ((ix >= 1) && (ix <= self.size)) then {",
    "                    start - (ix - 1)",
    "                } else {",
    "                    action.apply",
    "                }",
    "            }",
    "            method contains(elem) -> Boolean {",
    "                try {",
    "                    def intElem = elem.truncated",
    "                    if (intElem != elem) then {return false}",
    "                    if (intElem > start) then {return false}",
    "                    if (intElem < stop) then {return false}",
    "                } catch { ex:prelude.Exception -> return false }",
    "                return true",
    "            }",
    "            method do(block1) {",
    "                var val := start",
    "                while {val >= stop} do {",
    "                    block1.apply(val)",
    "                    val := val - 1",
    "                }",
    "            }",
    "            method keysAndValuesDo(block2) {",
    "                var key := 1",
    "                var val := start",
    "                while {val >= stop} do {",
    "                    block2.apply(key, val)",
    "                    key := key + 1",
    "                    val := val - 1",
    "                }",
    "            }",
    "            method reversed {",
    "                from(lower)to(upper)",
    "            }",
    "            method ++ (other:Collection⟦Number⟧) {",
    "                sequence.withAll(lazyConcatenation(self, other))",
    "            }",
    "            method ==(other) {",
    "                isEqual (self) toCollection (other)",
    "            }",
    "            method hash {",
    "                // must be compatable with hash on sequences",
    "                var result := 0x5E0EACE;     // sort of like SEQENCE",
    "                do { each ->",
    "                    result := hashAndCombine(result, each)",
    "                }",
    "                result",
    "            }",
    "            method :: (obj) { binding.key (self) value (obj) }",
    "            method ≠ (other) { (self == other).not }",
    "            method sorted { self.reversed }",
    "",
    "            method sortedBy(c) { list.withAll(self).sortBy(c) }",
    "",
    "            method keys { 1..self.size }",
    "",
    "            method values { self }",
    "",
    "            method asString -> String {",
    "                \"range.from {upper} downTo {lower}\"",
    "            }",
    "        }",
    "    }",
    "}" ];
}
function gracecode_collectionsPrelude() {
  importedModules["collectionsPrelude"] = this;
  var module$collectionsPrelude = this;
  this.definitionModule = "collectionsPrelude";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_collectionsPrelude_1");
  this.outer_collectionsPrelude_1 = var_prelude;
  var func0 = function(argcv) {    // method annotation, line 12
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("annotation", 0, numArgs - 0);
    }
    return GraceDone;
  };    // end of method annotation
  this.methods["annotation"] = func0;
  func0.methodName = "annotation";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 12;
  func0.definitionModule = "collectionsPrelude";
  var func1 = function(argcv) {    // method required, line 13
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("required", 0, numArgs - 0);
    }
    return GraceDone;
  };    // end of method required
  this.methods["required"] = func1;
  func1.methodName = "required";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 13;
  func1.definitionModule = "collectionsPrelude";
  var func2 = function(argcv) {    // method abstract, line 14
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("abstract", 0, numArgs - 0);
    }
    return GraceDone;
  };    // end of method abstract
  this.methods["abstract"] = func2;
  func2.methodName = "abstract";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 14;
  func2.definitionModule = "collectionsPrelude";
  setLineNumber(16);    // compilenode typedec
  // Type decl EqualityObject
  var func4 = function(argcv) {    // method EqualityObject, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string6 = new GraceString("EqualityObject");
    // call case 6: other requests
    setLineNumber(16);    // compilenode typeliteral
    //   Type literal 
    var typeLit7 = new GraceType("\u2039anon\u203a");
    typeLit7.typeMethods.push("::(1)");
    typeLit7.typeMethods.push("==(1)");
    typeLit7.typeMethods.push("\u2260(1)");
    typeLit7.typeMethods.push("hash");
    var opresult8 = request(var_Object, "&(1)", [1], typeLit7);
    var call5 = selfRequest(opresult8, "setName(1)", [1], string6);
    return call5;
  };    // end of method EqualityObject
  function memofunc4(argcv) {
      if (! this.data["memo$EqualityObject"])    // parameterless memo function
          this.data["memo$EqualityObject"] = func4.call(this, argcv);
      return this.data["memo$EqualityObject"];
  };
  this.methods["EqualityObject"] = memofunc4;
  memofunc4.methodName = "EqualityObject";
  memofunc4.paramCounts = [0];
  memofunc4.paramNames = [];
  memofunc4.definitionLine = 1;
  memofunc4.definitionModule = "collectionsPrelude";
  func4.methodName = "EqualityObject";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 1;
  func4.definitionModule = "collectionsPrelude";
  setLineNumber(23);    // compilenode typedec
  // Type decl Function0
  var func10 = function(argcv, var_ResultT) {    // method Function0, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(23);    // compilenode typeliteral
    //   Type literal 
    var typeLit11 = new GraceType("Function0");
    typeLit11.typeMethods.push("apply");
    return typeLit11;
  };    // end of method Function0
  function memofunc10(argcv, var_ResultT) {
    if (! var_ResultT) var_ResultT = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Function0", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Function0"] ||
          ( this.data["memo$Function0"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ResultT;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func10.call(this, argcv, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function0"] = memofunc10;
  memofunc10.methodName = "Function0";
  memofunc10.paramCounts = [0];
  memofunc10.paramNames = [];
  memofunc10.typeParamNames = ["ResultT"];
  memofunc10.definitionLine = 1;
  memofunc10.definitionModule = "collectionsPrelude";
  func10.methodName = "Function0";
  func10.paramCounts = [0];
  func10.paramNames = [];
  func10.typeParamNames = ["ResultT"];
  func10.definitionLine = 1;
  func10.definitionModule = "collectionsPrelude";
  setLineNumber(27);    // compilenode typedec
  // Type decl Function1
  var func13 = function(argcv, var_ArgT1, var_ResultT) {    // method Function1, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(27);    // compilenode typeliteral
    //   Type literal 
    var typeLit14 = new GraceType("Function1");
    typeLit14.typeMethods.push("apply(1)");
    return typeLit14;
  };    // end of method Function1
  function memofunc13(argcv, var_ArgT1, var_ResultT) {
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
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func13.call(this, argcv, var_ArgT1, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function1"] = memofunc13;
  memofunc13.methodName = "Function1";
  memofunc13.paramCounts = [0];
  memofunc13.paramNames = [];
  memofunc13.typeParamNames = ["ArgT1", "ResultT"];
  memofunc13.definitionLine = 1;
  memofunc13.definitionModule = "collectionsPrelude";
  func13.methodName = "Function1";
  func13.paramCounts = [0];
  func13.paramNames = [];
  func13.typeParamNames = ["ArgT1", "ResultT"];
  func13.definitionLine = 1;
  func13.definitionModule = "collectionsPrelude";
  setLineNumber(31);    // compilenode typedec
  // Type decl Function2
  var func16 = function(argcv, var_ArgT1, var_ArgT2, var_ResultT) {    // method Function2, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(31);    // compilenode typeliteral
    //   Type literal 
    var typeLit17 = new GraceType("Function2");
    typeLit17.typeMethods.push("apply(2)");
    return typeLit17;
  };    // end of method Function2
  function memofunc16(argcv, var_ArgT1, var_ArgT2, var_ResultT) {
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
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func16.call(this, argcv, var_ArgT1, var_ArgT2, var_ResultT);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Function2"] = memofunc16;
  memofunc16.methodName = "Function2";
  memofunc16.paramCounts = [0];
  memofunc16.paramNames = [];
  memofunc16.typeParamNames = ["ArgT1", "ArgT2", "ResultT"];
  memofunc16.definitionLine = 1;
  memofunc16.definitionModule = "collectionsPrelude";
  func16.methodName = "Function2";
  func16.paramCounts = [0];
  func16.paramNames = [];
  func16.typeParamNames = ["ArgT1", "ArgT2", "ResultT"];
  func16.definitionLine = 1;
  func16.definitionModule = "collectionsPrelude";
  setLineNumber(37);    // compilenode typedec
  // Type decl Procedure0
  var func19 = function(argcv) {    // method Procedure0, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(37);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call20 = selfRequest(this, "Function0", [0, 1], var_Done);
    return call20;
  };    // end of method Procedure0
  function memofunc19(argcv) {
      if (! this.data["memo$Procedure0"])    // parameterless memo function
          this.data["memo$Procedure0"] = func19.call(this, argcv);
      return this.data["memo$Procedure0"];
  };
  this.methods["Procedure0"] = memofunc19;
  memofunc19.methodName = "Procedure0";
  memofunc19.paramCounts = [0];
  memofunc19.paramNames = [];
  memofunc19.definitionLine = 1;
  memofunc19.definitionModule = "collectionsPrelude";
  func19.methodName = "Procedure0";
  func19.paramCounts = [0];
  func19.paramNames = [];
  func19.definitionLine = 1;
  func19.definitionModule = "collectionsPrelude";
  setLineNumber(39);    // compilenode typedec
  // Type decl Procedure1
  var func22 = function(argcv, var_ArgT1) {    // method Procedure1, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(39);    // compilenode member
    // call case 4: self request with 0 args and 2 typeArgs 
    var call23 = selfRequest(this, "Function1", [0, 2], var_ArgT1, var_Done);
    return call23;
  };    // end of method Procedure1
  function memofunc22(argcv, var_ArgT1) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Procedure1", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Procedure1"] ||
          ( this.data["memo$Procedure1"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ArgT1;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func22.call(this, argcv, var_ArgT1);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Procedure1"] = memofunc22;
  memofunc22.methodName = "Procedure1";
  memofunc22.paramCounts = [0];
  memofunc22.paramNames = [];
  memofunc22.typeParamNames = ["ArgT1"];
  memofunc22.definitionLine = 1;
  memofunc22.definitionModule = "collectionsPrelude";
  func22.methodName = "Procedure1";
  func22.paramCounts = [0];
  func22.paramNames = [];
  func22.typeParamNames = ["ArgT1"];
  func22.definitionLine = 1;
  func22.definitionModule = "collectionsPrelude";
  setLineNumber(41);    // compilenode typedec
  // Type decl Procedure2
  var func25 = function(argcv, var_ArgT1, var_ArgT2) {    // method Procedure2, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(41);    // compilenode member
    // call case 4: self request with 0 args and 3 typeArgs 
    var call26 = selfRequest(this, "Function2", [0, 3], var_ArgT1, var_ArgT2, var_Done);
    return call26;
  };    // end of method Procedure2
  function memofunc25(argcv, var_ArgT1, var_ArgT2) {
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
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func25.call(this, argcv, var_ArgT1, var_ArgT2);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Procedure2"] = memofunc25;
  memofunc25.methodName = "Procedure2";
  memofunc25.paramCounts = [0];
  memofunc25.paramNames = [];
  memofunc25.typeParamNames = ["ArgT1", "ArgT2"];
  memofunc25.definitionLine = 1;
  memofunc25.definitionModule = "collectionsPrelude";
  func25.methodName = "Procedure2";
  func25.paramCounts = [0];
  func25.paramNames = [];
  func25.typeParamNames = ["ArgT1", "ArgT2"];
  func25.definitionLine = 1;
  func25.definitionModule = "collectionsPrelude";
  setLineNumber(43);    // compilenode typedec
  // Type decl Predicate1
  var func28 = function(argcv, var_ArgT1) {    // method Predicate1, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(43);    // compilenode member
    // call case 4: self request with 0 args and 2 typeArgs 
    var call29 = selfRequest(this, "Function1", [0, 2], var_ArgT1, var_Boolean);
    return call29;
  };    // end of method Predicate1
  function memofunc28(argcv, var_ArgT1) {
    if (! var_ArgT1) var_ArgT1 = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Predicate1", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Predicate1"] ||
          ( this.data["memo$Predicate1"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_ArgT1;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func28.call(this, argcv, var_ArgT1);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Predicate1"] = memofunc28;
  memofunc28.methodName = "Predicate1";
  memofunc28.paramCounts = [0];
  memofunc28.paramNames = [];
  memofunc28.typeParamNames = ["ArgT1"];
  memofunc28.definitionLine = 1;
  memofunc28.definitionModule = "collectionsPrelude";
  func28.methodName = "Predicate1";
  func28.paramCounts = [0];
  func28.paramNames = [];
  func28.typeParamNames = ["ArgT1"];
  func28.definitionLine = 1;
  func28.definitionModule = "collectionsPrelude";
  setLineNumber(47);    // compilenode typedec
  // Type decl SelfType
  var func31 = function(argcv) {     // accessor method SelfType
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("SelfType", 0, numArgs - 0);
    return var_Unknown;
  };    // end of method SelfType
  this.methods["SelfType"] = func31;
  func31.methodName = "SelfType";
  func31.paramCounts = [0];
  func31.paramNames = [];
  func31.definitionLine = 1;
  func31.definitionModule = "collectionsPrelude";
  setLineNumber(49);    // compilenode typedec
  // Type decl CollectionFactory
  var func33 = function(argcv, var_T) {    // method CollectionFactory, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(49);    // compilenode typeliteral
    //   Type literal 
    var typeLit34 = new GraceType("CollectionFactory");
    typeLit34.typeMethods.push("empty");
    typeLit34.typeMethods.push("with(1)");
    typeLit34.typeMethods.push("withAll(1)");
    typeLit34.typeMethods.push("<<(1)");
    return typeLit34;
  };    // end of method CollectionFactory
  function memofunc33(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("CollectionFactory", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$CollectionFactory"] ||
          ( this.data["memo$CollectionFactory"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func33.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["CollectionFactory"] = memofunc33;
  memofunc33.methodName = "CollectionFactory";
  memofunc33.paramCounts = [0];
  memofunc33.paramNames = [];
  memofunc33.typeParamNames = ["T"];
  memofunc33.definitionLine = 1;
  memofunc33.definitionModule = "collectionsPrelude";
  func33.methodName = "CollectionFactory";
  func33.paramCounts = [0];
  func33.paramNames = [];
  func33.typeParamNames = ["T"];
  func33.definitionLine = 1;
  func33.definitionModule = "collectionsPrelude";
  setLineNumber(59);    // compilenode typedec
  // Type decl Collection
  var func36 = function(argcv, var_T) {    // method Collection, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string38 = new GraceString("Collection");
    // call case 6: other requests
    setLineNumber(59);    // compilenode typeliteral
    //   Type literal 
    var typeLit39 = new GraceType("\u2039anon\u203a");
    typeLit39.typeMethods.push("iterator");
    typeLit39.typeMethods.push("isEmpty");
    typeLit39.typeMethods.push("size");
    typeLit39.typeMethods.push("sizeIfUnknown(1)");
    typeLit39.typeMethods.push("==(1)");
    typeLit39.typeMethods.push("\u2260(1)");
    typeLit39.typeMethods.push("first");
    typeLit39.typeMethods.push("do(1)");
    typeLit39.typeMethods.push("do(1)separatedBy(1)");
    typeLit39.typeMethods.push("++(1)");
    typeLit39.typeMethods.push("fold(1)startingWith(1)");
    typeLit39.typeMethods.push("map(1)");
    typeLit39.typeMethods.push("filter(1)");
    typeLit39.typeMethods.push(">>(1)");
    typeLit39.typeMethods.push("<<(1)");
    var opresult40 = request(var_Object, "&(1)", [1], typeLit39);
    var call37 = selfRequest(opresult40, "setName(1)", [1], string38);
    return call37;
  };    // end of method Collection
  function memofunc36(argcv, var_T) {
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
        let newResult = func36.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Collection"] = memofunc36;
  memofunc36.methodName = "Collection";
  memofunc36.paramCounts = [0];
  memofunc36.paramNames = [];
  memofunc36.typeParamNames = ["T"];
  memofunc36.definitionLine = 1;
  memofunc36.definitionModule = "collectionsPrelude";
  func36.methodName = "Collection";
  func36.paramCounts = [0];
  func36.paramNames = [];
  func36.typeParamNames = ["T"];
  func36.definitionLine = 1;
  func36.definitionModule = "collectionsPrelude";
  setLineNumber(96);    // compilenode typedec
  // Type decl Expandable
  var func42 = function(argcv, var_T) {    // method Expandable, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string44 = new GraceString("Expandable");
    // call case 6: other requests
    setLineNumber(96);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call45 = selfRequest(this, "Collection", [0, 1], var_T);
    //   Type literal 
    var typeLit46 = new GraceType("\u2039anon\u203a");
    typeLit46.typeMethods.push("add(1)");
    typeLit46.typeMethods.push("addAll(1)");
    var opresult47 = request(call45, "&(1)", [1], typeLit46);
    var call43 = selfRequest(opresult47, "setName(1)", [1], string44);
    return call43;
  };    // end of method Expandable
  function memofunc42(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Expandable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Expandable"] ||
          ( this.data["memo$Expandable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func42.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Expandable"] = memofunc42;
  memofunc42.methodName = "Expandable";
  memofunc42.paramCounts = [0];
  memofunc42.paramNames = [];
  memofunc42.typeParamNames = ["T"];
  memofunc42.definitionLine = 1;
  memofunc42.definitionModule = "collectionsPrelude";
  func42.methodName = "Expandable";
  func42.paramCounts = [0];
  func42.paramNames = [];
  func42.typeParamNames = ["T"];
  func42.definitionLine = 1;
  func42.definitionModule = "collectionsPrelude";
  setLineNumber(101);    // compilenode typedec
  // Type decl Iterable
  var func49 = function(argcv, var_T) {    // method Iterable, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(101);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call50 = selfRequest(this, "Collection", [0, 1], var_T);
    return call50;
  };    // end of method Iterable
  function memofunc49(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Iterable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Iterable"] ||
          ( this.data["memo$Iterable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func49.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Iterable"] = memofunc49;
  memofunc49.methodName = "Iterable";
  memofunc49.paramCounts = [0];
  memofunc49.paramNames = [];
  memofunc49.typeParamNames = ["T"];
  memofunc49.definitionLine = 1;
  memofunc49.definitionModule = "collectionsPrelude";
  func49.methodName = "Iterable";
  func49.paramCounts = [0];
  func49.paramNames = [];
  func49.typeParamNames = ["T"];
  func49.definitionLine = 1;
  func49.definitionModule = "collectionsPrelude";
  setLineNumber(103);    // compilenode typedec
  // Type decl Enumerable
  var func52 = function(argcv, var_T) {    // method Enumerable, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string54 = new GraceString("Enumerable");
    // call case 6: other requests
    setLineNumber(103);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call55 = selfRequest(this, "Collection", [0, 1], var_T);
    //   Type literal 
    var typeLit56 = new GraceType("\u2039anon\u203a");
    typeLit56.typeMethods.push("values");
    typeLit56.typeMethods.push("keysAndValuesDo(1)");
    typeLit56.typeMethods.push("sortedBy(1)");
    typeLit56.typeMethods.push("sorted");
    var opresult57 = request(call55, "&(1)", [1], typeLit56);
    var call53 = selfRequest(opresult57, "setName(1)", [1], string54);
    return call53;
  };    // end of method Enumerable
  function memofunc52(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Enumerable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Enumerable"] ||
          ( this.data["memo$Enumerable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func52.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Enumerable"] = memofunc52;
  memofunc52.methodName = "Enumerable";
  memofunc52.paramCounts = [0];
  memofunc52.paramNames = [];
  memofunc52.typeParamNames = ["T"];
  memofunc52.definitionLine = 1;
  memofunc52.definitionModule = "collectionsPrelude";
  func52.methodName = "Enumerable";
  func52.paramCounts = [0];
  func52.paramNames = [];
  func52.typeParamNames = ["T"];
  func52.definitionLine = 1;
  func52.definitionModule = "collectionsPrelude";
  setLineNumber(110);    // compilenode typedec
  // Type decl Sequenceable
  var func59 = function(argcv, var_T) {    // method Sequenceable, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string61 = new GraceString("Sequenceable");
    // call case 6: other requests
    setLineNumber(110);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call62 = selfRequest(this, "Enumerable", [0, 1], var_T);
    //   Type literal 
    var typeLit63 = new GraceType("\u2039anon\u203a");
    typeLit63.typeMethods.push("size");
    typeLit63.typeMethods.push("at(1)");
    typeLit63.typeMethods.push("at(1)ifAbsent(1)");
    typeLit63.typeMethods.push("indices");
    typeLit63.typeMethods.push("keys");
    typeLit63.typeMethods.push("second");
    typeLit63.typeMethods.push("third");
    typeLit63.typeMethods.push("fourth");
    typeLit63.typeMethods.push("fifth");
    typeLit63.typeMethods.push("last");
    typeLit63.typeMethods.push("indexOf(1)ifAbsent(1)");
    typeLit63.typeMethods.push("indexOf(1)");
    typeLit63.typeMethods.push("contains(1)");
    typeLit63.typeMethods.push("reversed");
    var opresult64 = request(call62, "&(1)", [1], typeLit63);
    var call60 = selfRequest(opresult64, "setName(1)", [1], string61);
    return call60;
  };    // end of method Sequenceable
  function memofunc59(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Sequenceable", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Sequenceable"] ||
          ( this.data["memo$Sequenceable"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func59.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Sequenceable"] = memofunc59;
  memofunc59.methodName = "Sequenceable";
  memofunc59.paramCounts = [0];
  memofunc59.paramNames = [];
  memofunc59.typeParamNames = ["T"];
  memofunc59.definitionLine = 1;
  memofunc59.definitionModule = "collectionsPrelude";
  func59.methodName = "Sequenceable";
  func59.paramCounts = [0];
  func59.paramNames = [];
  func59.typeParamNames = ["T"];
  func59.definitionLine = 1;
  func59.definitionModule = "collectionsPrelude";
  setLineNumber(127);    // compilenode typedec
  // Type decl Sequence
  var func66 = function(argcv, var_T) {    // method Sequence, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string68 = new GraceString("Sequence");
    // call case 6: other requests
    setLineNumber(127);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call69 = selfRequest(this, "EqualityObject", [0]);
    // call case 4: self request with 0 args and 1 typeArgs 
    var call70 = selfRequest(this, "Sequenceable", [0, 1], var_T);
    var opresult71 = request(call69, "&(1)", [1], call70);
    var call67 = selfRequest(opresult71, "setName(1)", [1], string68);
    return call67;
  };    // end of method Sequence
  function memofunc66(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Sequence", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Sequence"] ||
          ( this.data["memo$Sequence"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func66.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Sequence"] = memofunc66;
  memofunc66.methodName = "Sequence";
  memofunc66.paramCounts = [0];
  memofunc66.paramNames = [];
  memofunc66.typeParamNames = ["T"];
  memofunc66.definitionLine = 1;
  memofunc66.definitionModule = "collectionsPrelude";
  func66.methodName = "Sequence";
  func66.paramCounts = [0];
  func66.paramNames = [];
  func66.typeParamNames = ["T"];
  func66.definitionLine = 1;
  func66.definitionModule = "collectionsPrelude";
  setLineNumber(129);    // compilenode typedec
  // Type decl List
  var func73 = function(argcv, var_T) {    // method List, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string75 = new GraceString("List");
    // call case 6: other requests
    setLineNumber(129);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call76 = selfRequest(this, "Sequenceable", [0, 1], var_T);
    //   Type literal 
    var typeLit77 = new GraceType("\u2039anon\u203a");
    typeLit77.typeMethods.push("add(1)");
    typeLit77.typeMethods.push("addAll(1)");
    typeLit77.typeMethods.push("addFirst(1)");
    typeLit77.typeMethods.push("addAllFirst(1)");
    typeLit77.typeMethods.push("addLast(1)");
    typeLit77.typeMethods.push("at(1)put(1)");
    typeLit77.typeMethods.push("clear");
    typeLit77.typeMethods.push("removeFirst");
    typeLit77.typeMethods.push("removeAt(1)");
    typeLit77.typeMethods.push("removeLast");
    typeLit77.typeMethods.push("remove(1)");
    typeLit77.typeMethods.push("remove(1)ifAbsent(1)");
    typeLit77.typeMethods.push("removeAll(1)");
    typeLit77.typeMethods.push("removeAll(1)ifAbsent(1)");
    typeLit77.typeMethods.push("insert(1)at(1)");
    typeLit77.typeMethods.push("pop");
    typeLit77.typeMethods.push("++(1)");
    typeLit77.typeMethods.push("copy");
    typeLit77.typeMethods.push("sort");
    typeLit77.typeMethods.push("sortBy(1)");
    typeLit77.typeMethods.push("reverse");
    typeLit77.typeMethods.push("reversed");
    var opresult78 = request(call76, "&(1)", [1], typeLit77);
    var call74 = selfRequest(opresult78, "setName(1)", [1], string75);
    return call74;
  };    // end of method List
  function memofunc73(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("List", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$List"] ||
          ( this.data["memo$List"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func73.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["List"] = memofunc73;
  memofunc73.methodName = "List";
  memofunc73.paramCounts = [0];
  memofunc73.paramNames = [];
  memofunc73.typeParamNames = ["T"];
  memofunc73.definitionLine = 1;
  memofunc73.definitionModule = "collectionsPrelude";
  func73.methodName = "List";
  func73.paramCounts = [0];
  func73.paramNames = [];
  func73.typeParamNames = ["T"];
  func73.definitionLine = 1;
  func73.definitionModule = "collectionsPrelude";
  setLineNumber(154);    // compilenode typedec
  // Type decl Set
  var func80 = function(argcv, var_T) {    // method Set, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string82 = new GraceString("Set");
    // call case 6: other requests
    setLineNumber(154);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call83 = selfRequest(this, "Collection", [0, 1], var_T);
    //   Type literal 
    var typeLit84 = new GraceType("\u2039anon\u203a");
    typeLit84.typeMethods.push("size");
    typeLit84.typeMethods.push("add(1)");
    typeLit84.typeMethods.push("addAll(1)");
    typeLit84.typeMethods.push("remove(1)");
    typeLit84.typeMethods.push("remove(1)ifAbsent(1)");
    typeLit84.typeMethods.push("clear");
    typeLit84.typeMethods.push("includes(1)");
    typeLit84.typeMethods.push("find(1)ifNone(1)");
    typeLit84.typeMethods.push("copy");
    typeLit84.typeMethods.push("contains(1)");
    typeLit84.typeMethods.push("**(1)");
    typeLit84.typeMethods.push("--(1)");
    typeLit84.typeMethods.push("++(1)");
    typeLit84.typeMethods.push("isSubset(1)");
    typeLit84.typeMethods.push("isSuperset(1)");
    typeLit84.typeMethods.push("removeAll(1)");
    typeLit84.typeMethods.push("removeAll(1)ifAbsent(1)");
    var opresult85 = request(call83, "&(1)", [1], typeLit84);
    var call81 = selfRequest(opresult85, "setName(1)", [1], string82);
    return call81;
  };    // end of method Set
  function memofunc80(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Set", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Set"] ||
          ( this.data["memo$Set"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func80.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Set"] = memofunc80;
  memofunc80.methodName = "Set";
  memofunc80.paramCounts = [0];
  memofunc80.paramNames = [];
  memofunc80.typeParamNames = ["T"];
  memofunc80.definitionLine = 1;
  memofunc80.definitionModule = "collectionsPrelude";
  func80.methodName = "Set";
  func80.paramCounts = [0];
  func80.paramNames = [];
  func80.typeParamNames = ["T"];
  func80.definitionLine = 1;
  func80.definitionModule = "collectionsPrelude";
  setLineNumber(174);    // compilenode typedec
  // Type decl Dictionary
  var func87 = function(argcv, var_K, var_T) {    // method Dictionary, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode string
    var string89 = new GraceString("Dictionary");
    // call case 6: other requests
    setLineNumber(174);    // compilenode member
    // call case 4: self request with 0 args and 1 typeArgs 
    var call90 = selfRequest(this, "Collection", [0, 1], var_T);
    //   Type literal 
    var typeLit91 = new GraceType("\u2039anon\u203a");
    typeLit91.typeMethods.push("size");
    typeLit91.typeMethods.push("containsKey(1)");
    typeLit91.typeMethods.push("containsValue(1)");
    typeLit91.typeMethods.push("contains(1)");
    typeLit91.typeMethods.push("at(1)ifAbsent(1)");
    typeLit91.typeMethods.push("at(1)put(1)");
    typeLit91.typeMethods.push("at(1)");
    typeLit91.typeMethods.push("removeAllKeys(1)");
    typeLit91.typeMethods.push("removeKey(1)");
    typeLit91.typeMethods.push("removeAllValues(1)");
    typeLit91.typeMethods.push("removeValue(1)");
    typeLit91.typeMethods.push("clear");
    typeLit91.typeMethods.push("keys");
    typeLit91.typeMethods.push("values");
    typeLit91.typeMethods.push("bindings");
    typeLit91.typeMethods.push("keysAndValuesDo(1)");
    typeLit91.typeMethods.push("keysDo(1)");
    typeLit91.typeMethods.push("valuesDo(1)");
    typeLit91.typeMethods.push("==(1)");
    typeLit91.typeMethods.push("copy");
    typeLit91.typeMethods.push("++(1)");
    typeLit91.typeMethods.push("--(1)");
    var opresult92 = request(call90, "&(1)", [1], typeLit91);
    var call88 = selfRequest(opresult92, "setName(1)", [1], string89);
    return call88;
  };    // end of method Dictionary
  function memofunc87(argcv, var_K, var_T) {
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
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func87.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Dictionary"] = memofunc87;
  memofunc87.methodName = "Dictionary";
  memofunc87.paramCounts = [0];
  memofunc87.paramNames = [];
  memofunc87.typeParamNames = ["K", "T"];
  memofunc87.definitionLine = 1;
  memofunc87.definitionModule = "collectionsPrelude";
  func87.methodName = "Dictionary";
  func87.paramCounts = [0];
  func87.paramNames = [];
  func87.typeParamNames = ["K", "T"];
  func87.definitionLine = 1;
  func87.definitionModule = "collectionsPrelude";
  setLineNumber(199);    // compilenode typedec
  // Type decl Iterator
  var func94 = function(argcv, var_T) {    // method Iterator, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(199);    // compilenode typeliteral
    //   Type literal 
    var typeLit95 = new GraceType("Iterator");
    typeLit95.typeMethods.push("hasNext");
    typeLit95.typeMethods.push("next");
    return typeLit95;
  };    // end of method Iterator
  function memofunc94(argcv, var_T) {
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("Iterator", 1, numArgs - 0);
    }
    let memoTable = this.data["memo$Iterator"] ||
          ( this.data["memo$Iterator"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = var_T;
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func94.call(this, argcv, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Iterator"] = memofunc94;
  memofunc94.methodName = "Iterator";
  memofunc94.paramCounts = [0];
  memofunc94.paramNames = [];
  memofunc94.typeParamNames = ["T"];
  memofunc94.definitionLine = 1;
  memofunc94.definitionModule = "collectionsPrelude";
  func94.methodName = "Iterator";
  func94.paramCounts = [0];
  func94.paramNames = [];
  func94.typeParamNames = ["T"];
  func94.definitionLine = 1;
  func94.definitionModule = "collectionsPrelude";
  var func96 = function(argcv, var_source, var_function, var_T, var_R) {    // method lazySequenceOver(_)mappedBy(_), line 204
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    if (! var_R) var_R = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 4)) {
        raiseTypeArgError("lazySequenceOver(_)mappedBy(_)", 2, numArgs - 2);
    }
    var ouc = emptyGraceObject("lazySequenceOver(_)mappedBy(_)", "collectionsPrelude", 204);
    var ouc_init = this.methods["lazySequenceOver(1)mappedBy(1)$build(3)"].call(this, null, var_source, var_function, ouc, [], [], var_T, var_R);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method lazySequenceOver(_)mappedBy(_)
  this.methods["lazySequenceOver(1)mappedBy(1)"] = func96;
  func96.methodName = "lazySequenceOver(1)mappedBy(1)";
  func96.paramCounts = [1, 1];
  func96.paramNames = ["source", "function"];
  func96.typeParamNames = ["T", "R"];
  func96.definitionLine = 204;
  func96.definitionModule = "collectionsPrelude";
  var func97 = function(argcv, var_source, var_function, inheritingObject, aliases, exclusions, var_T, var_R) {    // method lazySequenceOver(_)mappedBy(_)$build(_,_,_), line 204
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    if (! var_R) var_R = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 4)) {
        raiseTypeArgError("lazySequenceOver(_)mappedBy(_)", 2, numArgs - 2);
    }
    var obj98_build = function(ignore, var_source, var_function, outerObj, aliases, exclusions, var_T, var_R) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_204");
      this.outer_collectionsPrelude_204 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(206);    // reuse call
      var initFun99 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
      var func100 = function(argcv) {    // method iterator, line 207
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("lazySequenceOver(_)mappedBy(_).iterator", "collectionsPrelude", 207);
        var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method iterator
      this.methods["iterator"] = func100;
      func100.methodName = "iterator";
      func100.paramCounts = [0];
      func100.paramNames = [];
      func100.definitionLine = 207;
      func100.definitionModule = "collectionsPrelude";
      var func101 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 207
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var obj102_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_207");
          this.outer_collectionsPrelude_207 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.sourceIterator = undefined;
          var reader103_sourceIterator = function() {  // reader method sourceIterator
              if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
              return this.data.sourceIterator;
          };
          reader103_sourceIterator.isDef = true;
          reader103_sourceIterator.confidential = true;
          this.methods["sourceIterator"] = reader103_sourceIterator;
          var func104 = function(argcv) {    // method asString, line 209
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(209);    // compilenode string
            var string105 = new GraceString("an iterator over a lazy map sequence");
            return string105;
          };    // end of method asString
          this.methods["asString"] = func104;
          func104.methodName = "asString";
          func104.paramCounts = [0];
          func104.paramNames = [];
          func104.definitionLine = 209;
          func104.definitionModule = "collectionsPrelude";
          var func106 = function(argcv) {    // method hasNext, line 210
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("hasNext", 0, numArgs - 0);
            }
            setLineNumber(210);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call108 = selfRequest(this, "sourceIterator", [0]);
            var call107 = request(call108, "hasNext", [0]);
            return call107;
          };    // end of method hasNext
          this.methods["hasNext"] = func106;
          func106.methodName = "hasNext";
          func106.paramCounts = [0];
          func106.paramNames = [];
          func106.definitionLine = 210;
          func106.definitionModule = "collectionsPrelude";
          var func109 = function(argcv) {    // method next, line 211
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("next", 0, numArgs - 0);
            }
            setLineNumber(211);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call112 = selfRequest(this, "sourceIterator", [0]);
            var call111 = request(call112, "next", [0]);
            // call case 6: other requests
            var call110 = request(var_function, "apply(1)", [1], call111);
            return call110;
          };    // end of method next
          this.methods["next"] = func109;
          func109.methodName = "next";
          func109.paramCounts = [0];
          func109.paramNames = [];
          func109.definitionLine = 211;
          func109.definitionModule = "collectionsPrelude";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 207;
              m.definitionModule = "collectionsPrelude";
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
          var obj102_init = function() {    // init of object on line 207
            setLineNumber(208);    // compilenode member
            // call case 6: other requests
            var call113 = request(var_source, "iterator", [0]);
            this.data.sourceIterator = call113;
          };
          return obj102_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj102_init = obj102_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj102_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method iterator$build(_,_,_)
      this.methods["iterator$build(3)"] = func101;
      func101.methodName = "iterator$build(3)";
      func101.paramCounts = [0];
      func101.paramNames = [];
      func101.definitionLine = 207;
      func101.definitionModule = "collectionsPrelude";
      var func114 = function(argcv) {    // method size, line 213
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(213);    // compilenode member
        // call case 6: other requests
        var call115 = request(var_source, "size", [0]);
        return call115;
      };    // end of method size
      this.methods["size"] = func114;
      func114.methodName = "size";
      func114.paramCounts = [0];
      func114.paramNames = [];
      func114.definitionLine = 213;
      func114.definitionModule = "collectionsPrelude";
      var func116 = function(argcv) {    // method isEmpty, line 214
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isEmpty", 0, numArgs - 0);
        }
        setLineNumber(214);    // compilenode member
        // call case 6: other requests
        var call117 = request(var_source, "isEmpty", [0]);
        return call117;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func116;
      func116.methodName = "isEmpty";
      func116.paramCounts = [0];
      func116.paramNames = [];
      func116.definitionLine = 214;
      func116.definitionModule = "collectionsPrelude";
      var func118 = function(argcv) {    // method asDebugString, line 215
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(215);    // compilenode string
        var string119 = new GraceString("a lazy sequence mapping over ");
        var opresult120 = request(string119, "++(1)", [1], var_source);
        var string121 = new GraceString("");
        var opresult122 = request(opresult120, "++(1)", [1], string121);
        return opresult122;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func118;
      func118.methodName = "asDebugString";
      func118.paramCounts = [0];
      func118.paramNames = [];
      func118.definitionLine = 215;
      func118.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 204;
          m.definitionModule = "collectionsPrelude";
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
      var obj98_init = function() {    // init of object on line 204
      };
      return obj98_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj98_init = obj98_build.call(inheritingObject, null, var_source, var_function, this, aliases, exclusions, var_T, var_R);
    return obj98_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method lazySequenceOver(_)mappedBy(_)$build(_,_,_)
  this.methods["lazySequenceOver(1)mappedBy(1)$build(3)"] = func97;
  func97.methodName = "lazySequenceOver(1)mappedBy(1)$build(3)";
  func97.paramCounts = [1, 1];
  func97.paramNames = ["source", "function"];
  func97.typeParamNames = ["T", "R"];
  func97.definitionLine = 204;
  func97.definitionModule = "collectionsPrelude";
  var func123 = function(argcv, var_source, var_predicate, var_T) {    // method lazySequenceOver(_)filteredBy(_), line 218
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("lazySequenceOver(_)filteredBy(_)", 1, numArgs - 2);
    }
    var ouc = emptyGraceObject("lazySequenceOver(_)filteredBy(_)", "collectionsPrelude", 218);
    var ouc_init = this.methods["lazySequenceOver(1)filteredBy(1)$build(3)"].call(this, null, var_source, var_predicate, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method lazySequenceOver(_)filteredBy(_)
  this.methods["lazySequenceOver(1)filteredBy(1)"] = func123;
  func123.methodName = "lazySequenceOver(1)filteredBy(1)";
  func123.paramCounts = [1, 1];
  func123.paramNames = ["source", "predicate"];
  func123.typeParamNames = ["T"];
  func123.definitionLine = 218;
  func123.definitionModule = "collectionsPrelude";
  var func124 = function(argcv, var_source, var_predicate, inheritingObject, aliases, exclusions, var_T) {    // method lazySequenceOver(_)filteredBy(_)$build(_,_,_), line 218
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("lazySequenceOver(_)filteredBy(_)", 1, numArgs - 2);
    }
    var obj125_build = function(ignore, var_source, var_predicate, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_218");
      this.outer_collectionsPrelude_218 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(220);    // reuse call
      var initFun126 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
      var func127 = function(argcv) {    // method iterator, line 221
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("lazySequenceOver(_)filteredBy(_).iterator", "collectionsPrelude", 221);
        var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method iterator
      this.methods["iterator"] = func127;
      func127.methodName = "iterator";
      func127.paramCounts = [0];
      func127.paramNames = [];
      func127.definitionLine = 221;
      func127.definitionModule = "collectionsPrelude";
      var func128 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 221
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        var obj129_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_221");
          this.outer_collectionsPrelude_221 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.cache = undefined;
          var reader130_cache = function() {  // reader method cache
              if (this.data.cache === undefined) raiseUninitializedVariable("cache");
              return this.data.cache;
          };
          reader130_cache.isVar = true;
          reader130_cache.confidential = true;
          this.methods["cache"] = reader130_cache;
          var writer131_cache = function(argcv, n) {   // writer method cache:=(_)
            this.data.cache = n;
            return GraceDone;
          };
          writer131_cache.confidential = true;
          this.methods["cache:=(1)"] = writer131_cache;
          this.data.cacheLoaded = undefined;
          var reader132_cacheLoaded = function() {  // reader method cacheLoaded
              if (this.data.cacheLoaded === undefined) raiseUninitializedVariable("cacheLoaded");
              return this.data.cacheLoaded;
          };
          reader132_cacheLoaded.isVar = true;
          reader132_cacheLoaded.confidential = true;
          this.methods["cacheLoaded"] = reader132_cacheLoaded;
          var writer133_cacheLoaded = function(argcv, n) {   // writer method cacheLoaded:=(_)
            this.data.cacheLoaded = n;
            return GraceDone;
          };
          writer133_cacheLoaded.confidential = true;
          this.methods["cacheLoaded:=(1)"] = writer133_cacheLoaded;
          this.data.sourceIterator = undefined;
          var reader134_sourceIterator = function() {  // reader method sourceIterator
              if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
              return this.data.sourceIterator;
          };
          reader134_sourceIterator.isDef = true;
          reader134_sourceIterator.confidential = true;
          this.methods["sourceIterator"] = reader134_sourceIterator;
          var func135 = function(argcv) {    // method asString, line 225
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(225);    // compilenode string
            var string136 = new GraceString("an iterator over filtered ");
            var opresult137 = request(string136, "++(1)", [1], var_source);
            var string138 = new GraceString("");
            var opresult139 = request(opresult137, "++(1)", [1], string138);
            return opresult139;
          };    // end of method asString
          this.methods["asString"] = func135;
          func135.methodName = "asString";
          func135.paramCounts = [0];
          func135.paramNames = [];
          func135.definitionLine = 225;
          func135.definitionModule = "collectionsPrelude";
          var func140 = function(argcv) {    // method hasNext, line 226
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("hasNext", 0, numArgs - 0);
            }
            var if141 = GraceDone;
            setLineNumber(229);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call142 = selfRequest(this, "cacheLoaded", [0]);
            if (Grace_isTrue(call142)) {
              if141 = GraceTrue;
            } else {
              // call case 4: self request with 0 args and 0 typeArgs 
              var call143 = selfRequest(this, "hasNextAcceptableElement", [0]);
              if141 = call143;
            }
            return if141;
          };    // end of method hasNext
          this.methods["hasNext"] = func140;
          func140.methodName = "hasNext";
          func140.paramCounts = [0];
          func140.paramNames = [];
          func140.definitionLine = 226;
          func140.definitionModule = "collectionsPrelude";
          var func144 = function(argcv) {    // method next, line 231
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("next", 0, numArgs - 0);
            }
            var if145 = GraceDone;
            setLineNumber(232);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call147 = selfRequest(this, "cacheLoaded", [0]);
            var call146 = request(call147, "not", [0]);
            if (Grace_isTrue(call146)) {
              // call case 4: self request with 0 args and 0 typeArgs 
              var call149 = selfRequest(this, "nextAcceptableElement", [0]);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call148 = selfRequest(this, "cache:=(1)", [1], call149);
              if145 = call148;
            }
            setLineNumber(233);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call150 = selfRequest(this, "cacheLoaded:=(1)", [1], GraceFalse);
            setLineNumber(234);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call151 = selfRequest(this, "cache", [0]);
            return call151;
          };    // end of method next
          this.methods["next"] = func144;
          func144.methodName = "next";
          func144.paramCounts = [0];
          func144.paramNames = [];
          func144.definitionLine = 231;
          func144.definitionModule = "collectionsPrelude";
          var func152 = function(argcv) {    // method nextAcceptableElement, line 236
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("nextAcceptableElement", 0, numArgs - 0);
            }
            setLineNumber(239);    // compilenode block
            var block154 = new GraceBlock(this, 239, 0);
            block154.guard = jsTrue;
            block154.real = function block154() {
              setLineNumber(239);    // compileBlock
              return GraceTrue;
            };
            let applyMeth154 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth154.methodName = "apply";
            applyMeth154.paramCounts = [0];
            applyMeth154.paramNames = [];
            applyMeth154.definitionLine = 239;
            applyMeth154.definitionModule = "collectionsPrelude";
            block154.methods["apply"] = applyMeth154;
            var block155 = new GraceBlock(this, 239, 0);
            block155.guard = jsTrue;
            block155.real = function block155() {
              setLineNumber(240);    // compilenode member
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call157 = selfRequest(this, "sourceIterator", [0]);
              var call156 = request(call157, "next", [0]);
              var var_outerNext = call156;
              setLineNumber(241);    // compilenode call
              if (var_outerNext === undefined) raiseUninitializedVariable("outerNext");
              // call case 6: other requests
              var call158 = request(var_predicate, "apply(1)", [1], var_outerNext);
              var var_isAcceptable = call158;
              var if159 = GraceDone;
              setLineNumber(242);    // compilenode if
              if (var_isAcceptable === undefined) raiseUninitializedVariable("isAcceptable");
              if (Grace_isTrue(var_isAcceptable)) {
                if (var_outerNext === undefined) raiseUninitializedVariable("outerNext");
                throw new ReturnException(var_outerNext, returnTarget);
              }
              return if159;
            };
            let applyMeth155 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth155.methodName = "apply";
            applyMeth155.paramCounts = [0];
            applyMeth155.paramNames = [];
            applyMeth155.definitionLine = 239;
            applyMeth155.definitionModule = "collectionsPrelude";
            block155.methods["apply"] = applyMeth155;
            // call case 2: outer request
            var call153 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block154, block155);
            return call153;
          };    // end of method nextAcceptableElement
          func152.confidential = true;
          this.methods["nextAcceptableElement"] = func152;
          func152.methodName = "nextAcceptableElement";
          func152.paramCounts = [0];
          func152.paramNames = [];
          func152.definitionLine = 236;
          func152.definitionModule = "collectionsPrelude";
          var func160 = function(argcv) {    // method hasNextAcceptableElement, line 245
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("hasNextAcceptableElement", 0, numArgs - 0);
            }
            setLineNumber(248);    // compilenode block
            var block162 = new GraceBlock(this, 248, 0);
            block162.guard = jsTrue;
            block162.real = function block162() {
              setLineNumber(248);    // compileBlock
              return GraceTrue;
            };
            let applyMeth162 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth162.methodName = "apply";
            applyMeth162.paramCounts = [0];
            applyMeth162.paramNames = [];
            applyMeth162.definitionLine = 248;
            applyMeth162.definitionModule = "collectionsPrelude";
            block162.methods["apply"] = applyMeth162;
            var block163 = new GraceBlock(this, 248, 0);
            block163.guard = jsTrue;
            block163.real = function block163() {
              var if164 = GraceDone;
              setLineNumber(249);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call167 = selfRequest(this, "sourceIterator", [0]);
              var call166 = request(call167, "hasNext", [0]);
              var call165 = request(call166, "not", [0]);
              if (Grace_isTrue(call165)) {
                throw new ReturnException(GraceFalse, returnTarget);
              }
              setLineNumber(250);    // compilenode member
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call169 = selfRequest(this, "sourceIterator", [0]);
              var call168 = request(call169, "next", [0]);
              var var_outerNext = call168;
              setLineNumber(251);    // compilenode call
              if (var_outerNext === undefined) raiseUninitializedVariable("outerNext");
              // call case 6: other requests
              var call170 = request(var_predicate, "apply(1)", [1], var_outerNext);
              var var_isAcceptable = call170;
              var if171 = GraceDone;
              setLineNumber(252);    // compilenode if
              if (var_isAcceptable === undefined) raiseUninitializedVariable("isAcceptable");
              if (Grace_isTrue(var_isAcceptable)) {
                setLineNumber(253);    // compilenode call
                // call case 4: self request with 1 args and 0 typeArgs 
                var call172 = selfRequest(this, "cacheLoaded:=(1)", [1], GraceTrue);
                setLineNumber(254);    // compilenode call
                if (var_outerNext === undefined) raiseUninitializedVariable("outerNext");
                // call case 4: self request with 1 args and 0 typeArgs 
                var call173 = selfRequest(this, "cache:=(1)", [1], var_outerNext);
                setLineNumber(255);    // compilenode return
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if171;
            };
            let applyMeth163 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth163.methodName = "apply";
            applyMeth163.paramCounts = [0];
            applyMeth163.paramNames = [];
            applyMeth163.definitionLine = 248;
            applyMeth163.definitionModule = "collectionsPrelude";
            block163.methods["apply"] = applyMeth163;
            // call case 2: outer request
            var call161 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block162, block163);
            return call161;
          };    // end of method hasNextAcceptableElement
          func160.confidential = true;
          this.methods["hasNextAcceptableElement"] = func160;
          func160.methodName = "hasNextAcceptableElement";
          func160.paramCounts = [0];
          func160.paramNames = [];
          func160.definitionLine = 245;
          func160.definitionModule = "collectionsPrelude";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 221;
              m.definitionModule = "collectionsPrelude";
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
          var obj129_init = function() {    // init of object on line 221
            this.data.cache = undefined;
            this.data.cacheLoaded = GraceFalse;
            setLineNumber(224);    // compilenode member
            // call case 6: other requests
            var call174 = request(var_source, "iterator", [0]);
            this.data.sourceIterator = call174;
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
      func128.definitionLine = 221;
      func128.definitionModule = "collectionsPrelude";
      var func175 = function(argcv) {    // method asDebugString, line 260
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(260);    // compilenode string
        var string176 = new GraceString("a lazy sequence filtering ");
        var opresult177 = request(string176, "++(1)", [1], var_source);
        var string178 = new GraceString("");
        var opresult179 = request(opresult177, "++(1)", [1], string178);
        return opresult179;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func175;
      func175.methodName = "asDebugString";
      func175.paramCounts = [0];
      func175.paramNames = [];
      func175.definitionLine = 260;
      func175.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 218;
          m.definitionModule = "collectionsPrelude";
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
      var obj125_init = function() {    // init of object on line 218
      };
      return obj125_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj125_init = obj125_build.call(inheritingObject, null, var_source, var_predicate, this, aliases, exclusions, var_T);
    return obj125_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method lazySequenceOver(_)filteredBy(_)$build(_,_,_)
  this.methods["lazySequenceOver(1)filteredBy(1)$build(3)"] = func124;
  func124.methodName = "lazySequenceOver(1)filteredBy(1)$build(3)";
  func124.paramCounts = [1, 1];
  func124.paramNames = ["source", "predicate"];
  func124.typeParamNames = ["T"];
  func124.definitionLine = 218;
  func124.definitionModule = "collectionsPrelude";
  var func180 = function(argcv, var_left, var_right, var_T) {    // method iteratorConcat(_,_), line 263
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("iteratorConcat(_,_)", 1, numArgs - 2);
    }
    var ouc = emptyGraceObject("iteratorConcat(_,_)", "collectionsPrelude", 263);
    var ouc_init = this.methods["iteratorConcat(2)$build(3)"].call(this, null, var_left, var_right, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method iteratorConcat(_,_)
  this.methods["iteratorConcat(2)"] = func180;
  func180.methodName = "iteratorConcat(2)";
  func180.paramCounts = [2];
  func180.paramNames = ["left", "right"];
  func180.typeParamNames = ["T"];
  func180.definitionLine = 263;
  func180.definitionModule = "collectionsPrelude";
  var func181 = function(argcv, var_left, var_right, inheritingObject, aliases, exclusions, var_T) {    // method iteratorConcat(_,_)$build(_,_,_), line 263
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("iteratorConcat(_,_)", 1, numArgs - 2);
    }
    var obj182_build = function(ignore, var_left, var_right, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_263");
      this.outer_collectionsPrelude_263 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func183 = function(argcv) {    // method next, line 264
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("next", 0, numArgs - 0);
        }
        var if184 = GraceDone;
        setLineNumber(265);    // compilenode member
        // call case 6: other requests
        var call185 = request(var_left, "hasNext", [0]);
        if (Grace_isTrue(call185)) {
          setLineNumber(266);    // compilenode member
          // call case 6: other requests
          var call186 = request(var_left, "next", [0]);
          if184 = call186;
        } else {
          setLineNumber(268);    // compilenode member
          // call case 6: other requests
          var call187 = request(var_right, "next", [0]);
          if184 = call187;
        }
        return if184;
      };    // end of method next
      this.methods["next"] = func183;
      func183.methodName = "next";
      func183.paramCounts = [0];
      func183.paramNames = [];
      func183.definitionLine = 264;
      func183.definitionModule = "collectionsPrelude";
      var func188 = function(argcv) {    // method hasNext, line 271
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hasNext", 0, numArgs - 0);
        }
        var if189 = GraceDone;
        setLineNumber(272);    // compilenode member
        // call case 6: other requests
        var call190 = request(var_left, "hasNext", [0]);
        if (Grace_isTrue(call190)) {
          return GraceTrue;
        }
        setLineNumber(273);    // compilenode member
        // call case 6: other requests
        var call191 = request(var_right, "hasNext", [0]);
        return call191;
      };    // end of method hasNext
      this.methods["hasNext"] = func188;
      func188.methodName = "hasNext";
      func188.paramCounts = [0];
      func188.paramNames = [];
      func188.definitionLine = 271;
      func188.definitionModule = "collectionsPrelude";
      var func192 = function(argcv) {    // method asDebugString, line 275
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(275);    // compilenode string
        var string193 = new GraceString("iteratorConcat of ");
        var opresult194 = request(string193, "++(1)", [1], var_left);
        var string195 = new GraceString(" and ");
        var opresult196 = request(opresult194, "++(1)", [1], string195);
        var opresult197 = request(opresult196, "++(1)", [1], var_right);
        var string198 = new GraceString("");
        var opresult199 = request(opresult197, "++(1)", [1], string198);
        return opresult199;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func192;
      func192.methodName = "asDebugString";
      func192.paramCounts = [0];
      func192.paramNames = [];
      func192.definitionLine = 275;
      func192.definitionModule = "collectionsPrelude";
      var func200 = function(argcv) {    // method asString, line 276
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(276);    // compilenode string
        var string201 = new GraceString("an iterator over a concatenation");
        return string201;
      };    // end of method asString
      this.methods["asString"] = func200;
      func200.methodName = "asString";
      func200.paramCounts = [0];
      func200.paramNames = [];
      func200.definitionLine = 276;
      func200.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 263;
          m.definitionModule = "collectionsPrelude";
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
      var obj182_init = function() {    // init of object on line 263
      };
      return obj182_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj182_init = obj182_build.call(inheritingObject, null, var_left, var_right, this, aliases, exclusions, var_T);
    return obj182_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method iteratorConcat(_,_)$build(_,_,_)
  this.methods["iteratorConcat(2)$build(3)"] = func181;
  func181.methodName = "iteratorConcat(2)$build(3)";
  func181.paramCounts = [2];
  func181.paramNames = ["left", "right"];
  func181.typeParamNames = ["T"];
  func181.definitionLine = 263;
  func181.definitionModule = "collectionsPrelude";
  var func202 = function(argcv, var_left, var_right, var_T) {    // method lazyConcatenation(_,_), line 278
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("lazyConcatenation(_,_)", 1, numArgs - 2);
    }
    var ouc = emptyGraceObject("lazyConcatenation(_,_)", "collectionsPrelude", 278);
    var ouc_init = this.methods["lazyConcatenation(2)$build(3)"].call(this, null, var_left, var_right, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method lazyConcatenation(_,_)
  this.methods["lazyConcatenation(2)"] = func202;
  func202.methodName = "lazyConcatenation(2)";
  func202.paramCounts = [2];
  func202.paramNames = ["left", "right"];
  func202.typeParamNames = ["T"];
  func202.definitionLine = 278;
  func202.definitionModule = "collectionsPrelude";
  var func203 = function(argcv, var_left, var_right, inheritingObject, aliases, exclusions, var_T) {    // method lazyConcatenation(_,_)$build(_,_,_), line 278
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 3)) {
        raiseTypeArgError("lazyConcatenation(_,_)", 1, numArgs - 2);
    }
    var obj204_build = function(ignore, var_left, var_right, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_278");
      this.outer_collectionsPrelude_278 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(279);    // reuse call
      var initFun205 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
      var func206 = function(argcv) {    // method iterator, line 280
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("iterator", 0, numArgs - 0);
        }
        setLineNumber(281);    // compilenode member
        // call case 6: other requests
        var call208 = request(var_left, "iterator", [0]);
        // call case 6: other requests
        var call209 = request(var_right, "iterator", [0]);
        // call case 2: outer request
        var call207 = selfRequest(importedModules["collectionsPrelude"], "iteratorConcat(2)", [2], call208, call209);
        return call207;
      };    // end of method iterator
      this.methods["iterator"] = func206;
      func206.methodName = "iterator";
      func206.paramCounts = [0];
      func206.paramNames = [];
      func206.definitionLine = 280;
      func206.definitionModule = "collectionsPrelude";
      var func210 = function(argcv) {    // method asDebugString, line 283
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(283);    // compilenode string
        var string211 = new GraceString("lazy concatenation of ");
        var opresult212 = request(string211, "++(1)", [1], var_left);
        var string213 = new GraceString(" and ");
        var opresult214 = request(opresult212, "++(1)", [1], string213);
        var opresult215 = request(opresult214, "++(1)", [1], var_right);
        var string216 = new GraceString("");
        var opresult217 = request(opresult215, "++(1)", [1], string216);
        return opresult217;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func210;
      func210.methodName = "asDebugString";
      func210.paramCounts = [0];
      func210.paramNames = [];
      func210.definitionLine = 283;
      func210.definitionModule = "collectionsPrelude";
      var func218 = function(argcv) {    // method size, line 284
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(284);    // compilenode member
        // call case 6: other requests
        var call219 = request(var_left, "size", [0]);
        // call case 6: other requests
        var call220 = request(var_right, "size", [0]);
        var sum221 = request(call219, "+(1)", [1], call220);
        return sum221;
      };    // end of method size
      this.methods["size"] = func218;
      func218.methodName = "size";
      func218.paramCounts = [0];
      func218.paramNames = [];
      func218.definitionLine = 284;
      func218.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 278;
          m.definitionModule = "collectionsPrelude";
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
      var obj204_init = function() {    // init of object on line 278
      };
      return obj204_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj204_init = obj204_build.call(inheritingObject, null, var_left, var_right, this, aliases, exclusions, var_T);
    return obj204_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method lazyConcatenation(_,_)$build(_,_,_)
  this.methods["lazyConcatenation(2)$build(3)"] = func203;
  func203.methodName = "lazyConcatenation(2)$build(3)";
  func203.paramCounts = [2];
  func203.paramNames = ["left", "right"];
  func203.typeParamNames = ["T"];
  func203.definitionLine = 278;
  func203.definitionModule = "collectionsPrelude";
  var func222 = function(argcv, var_T) {    // method collection, line 287
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("collection", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("collection", "collectionsPrelude", 287);
    var ouc_init = this.methods["collection$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method collection
  this.methods["collection"] = func222;
  func222.methodName = "collection";
  func222.paramCounts = [0];
  func222.paramNames = [];
  func222.typeParamNames = ["T"];
  func222.definitionLine = 287;
  func222.definitionModule = "collectionsPrelude";
  var func223 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method collection$build(_,_,_), line 287
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("collection", 1, numArgs - 0);
    }
    var obj224_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_287");
      this.outer_collectionsPrelude_287 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func225 = function(argcv) {    // method asString, line 289
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(289);    // compilenode string
        var string226 = new GraceString("a collection trait");
        return string226;
      };    // end of method asString
      this.methods["asString"] = func225;
      func225.methodName = "asString";
      func225.paramCounts = [0];
      func225.paramNames = [];
      func225.definitionLine = 289;
      func225.definitionModule = "collectionsPrelude";
      var func227 = function(argcv, var_action) {    // method sizeIfUnknown(_), line 290
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(292);    // compilenode member
        // call case 6: other requests
        var call228 = request(var_action, "apply", [0]);
        return call228;
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func227;
      func227.methodName = "sizeIfUnknown(1)";
      func227.paramCounts = [1];
      func227.paramNames = ["action"];
      func227.definitionLine = 290;
      func227.definitionModule = "collectionsPrelude";
      var func229 = function(argcv) {    // method size, line 294
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("size", 0, numArgs - 0);
        }
        setLineNumber(295);    // compilenode block
        var block231 = new GraceBlock(this, 295, 0);
        block231.guard = jsTrue;
        block231.real = function block231() {
          setLineNumber(296);    // compilenode string
          var string233 = new GraceString("collection ");
          // call case 4: self request with 0 args and 0 typeArgs 
          var call234 = selfRequest(this, "asDebugString", [0]);
          var opresult235 = request(string233, "++(1)", [1], call234);
          var string236 = new GraceString(" does not know its size");
          var opresult237 = request(opresult235, "++(1)", [1], string236);
          // call case 6: other requests
          if (var_SizeUnknown === undefined) raiseUninitializedVariable("SizeUnknown");
          var call232 = request(var_SizeUnknown, "raise(1)", [1], opresult237);
          return call232;
        };
        let applyMeth231 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth231.methodName = "apply";
        applyMeth231.paramCounts = [0];
        applyMeth231.paramNames = [];
        applyMeth231.definitionLine = 295;
        applyMeth231.definitionModule = "collectionsPrelude";
        block231.methods["apply"] = applyMeth231;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call230 = selfRequest(this, "sizeIfUnknown(1)", [1], block231);
        return call230;
      };    // end of method size
      this.methods["size"] = func229;
      func229.methodName = "size";
      func229.paramCounts = [0];
      func229.paramNames = [];
      func229.definitionLine = 294;
      func229.definitionModule = "collectionsPrelude";
      if (! this.methods["do(1)"]) {
        var func238 = function(argcv, var_action) {    // method do(_), line 299
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("do(_)", 0, numArgs - 1);
          }
          setLineNumber(299);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method do(_) was not supplied"));
        };    // end of method do(_)
        this.methods["do(1)"] = func238;
        func238.methodName = "do(1)";
        func238.paramCounts = [1];
        func238.paramNames = ["action"];
        func238.definitionLine = 299;
        func238.definitionModule = "collectionsPrelude";
      };
      if (! this.methods["iterator"]) {
        var func239 = function(argcv) {    // method iterator, line 300
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          setLineNumber(300);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method iterator was not supplied"));
        };    // end of method iterator
        this.methods["iterator"] = func239;
        func239.methodName = "iterator";
        func239.paramCounts = [0];
        func239.paramNames = [];
        func239.definitionLine = 300;
        func239.definitionModule = "collectionsPrelude";
      };
      var func240 = function(argcv) {    // method isEmpty, line 301
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isEmpty", 0, numArgs - 0);
        }
        setLineNumber(303);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call243 = selfRequest(this, "iterator", [0]);
        var call242 = request(call243, "hasNext", [0]);
        var call241 = request(call242, "not", [0]);
        return call241;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func240;
      func240.methodName = "isEmpty";
      func240.paramCounts = [0];
      func240.paramNames = [];
      func240.definitionLine = 301;
      func240.definitionModule = "collectionsPrelude";
      var func244 = function(argcv) {    // method first, line 305
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("first", 0, numArgs - 0);
        }
        setLineNumber(306);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call245 = selfRequest(this, "iterator", [0]);
        var var_it = call245;
        var if246 = GraceDone;
        setLineNumber(307);    // compilenode member
        // call case 6: other requests
        var call247 = request(var_it, "hasNext", [0]);
        if (Grace_isTrue(call247)) {
          setLineNumber(308);    // compilenode member
          // call case 6: other requests
          if (var_it === undefined) raiseUninitializedVariable("it");
          var call248 = request(var_it, "next", [0]);
          if246 = call248;
        } else {
          setLineNumber(310);    // compilenode string
          var string250 = new GraceString("no first element in ");
          var opresult251 = request(string250, "++(1)", [1], this);
          var string252 = new GraceString("");
          var opresult253 = request(opresult251, "++(1)", [1], string252);
          // call case 6: other requests
          if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
          var call249 = request(var_BoundsError, "raise(1)", [1], opresult253);
          if246 = call249;
        }
        return if246;
      };    // end of method first
      this.methods["first"] = func244;
      func244.methodName = "first";
      func244.paramCounts = [0];
      func244.paramNames = [];
      func244.definitionLine = 305;
      func244.definitionModule = "collectionsPrelude";
      var func254 = function(argcv, var_block1, var_block0) {    // method do(_)separatedBy(_), line 313
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("do(_)separatedBy(_)", 0, numArgs - 2);
        }
        setLineNumber(314);    // compilenode vardec
        var var_firstTime = GraceTrue;
        setLineNumber(315);    // compilenode num
        var var_i = new GraceNum(0);
        setLineNumber(316);    // compilenode block
        var block256 = new GraceBlock(this, 316, 1);
        block256.guard = jsTrue;
        block256.real = function block256(var_each) {
          var if257 = GraceDone;
          setLineNumber(317);    // compilenode if
          if (var_firstTime === undefined) raiseUninitializedVariable("firstTime");
          if (Grace_isTrue(var_firstTime)) {
            setLineNumber(318);    // compilenode bind
            var_firstTime = GraceFalse;
            if257 = GraceDone;
          } else {
            setLineNumber(320);    // compilenode member
            // call case 6: other requests
            var call258 = request(var_block0, "apply", [0]);
            if257 = call258;
          }
          setLineNumber(322);    // compilenode call
          // call case 6: other requests
          var call259 = request(var_block1, "apply(1)", [1], var_each);
          return call259;
        };
        let applyMeth256 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth256.methodName = "apply(1)";
        applyMeth256.paramCounts = [1];
        applyMeth256.paramNames = ["each"];
        applyMeth256.definitionLine = 316;
        applyMeth256.definitionModule = "collectionsPrelude";
        block256.methods["apply(1)"] = applyMeth256;
        let matchesMeth256 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth256.methodName = "matches(1)";
        matchesMeth256.paramCounts = [1];
        matchesMeth256.paramNames = ["each"];
        matchesMeth256.definitionLine = 316;
        matchesMeth256.definitionModule = "collectionsPrelude";
        block256.methods["matches(1)"] = matchesMeth256;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call255 = selfRequest(this, "do(1)", [1], block256);
        setLineNumber(324);    // compilenode return
        return this;
      };    // end of method do(_)separatedBy(_)
      this.methods["do(1)separatedBy(1)"] = func254;
      func254.methodName = "do(1)separatedBy(1)";
      func254.paramCounts = [1, 1];
      func254.paramNames = ["block1", "block0"];
      func254.definitionLine = 313;
      func254.definitionModule = "collectionsPrelude";
      var func260 = function(argcv, var_initial, var_blk) {    // method reduce(_,_), line 326
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("reduce(_,_)", 0, numArgs - 2);
        }
        setLineNumber(328);    // compilenode call
        // call case 4: self request with 2 args and 0 typeArgs 
        var call261 = selfRequest(this, "fold(1)startingWith(1)", [1, 1], var_blk, var_initial);
        return call261;
      };    // end of method reduce(_,_)
      this.methods["reduce(2)"] = func260;
      func260.methodName = "reduce(2)";
      func260.paramCounts = [2];
      func260.paramNames = ["initial", "blk"];
      func260.definitionLine = 326;
      func260.definitionModule = "collectionsPrelude";
      var func262 = function(argcv, var_blk, var_initial) {    // method fold(_)startingWith(_), line 330
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("fold(_)startingWith(_)", 0, numArgs - 2);
        }
        setLineNumber(331);    // compilenode vardec
        var var_result = var_initial;
        setLineNumber(332);    // compilenode block
        var block264 = new GraceBlock(this, 332, 1);
        block264.guard = jsTrue;
        block264.real = function block264(var_it) {
          setLineNumber(333);    // compilenode call
          if (var_result === undefined) raiseUninitializedVariable("result");
          // call case 6: other requests
          var call265 = request(var_blk, "apply(2)", [2], var_result, var_it);
          var_result = call265;
          return GraceDone;
        };
        let applyMeth264 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth264.methodName = "apply(1)";
        applyMeth264.paramCounts = [1];
        applyMeth264.paramNames = ["it"];
        applyMeth264.definitionLine = 332;
        applyMeth264.definitionModule = "collectionsPrelude";
        block264.methods["apply(1)"] = applyMeth264;
        let matchesMeth264 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth264.methodName = "matches(1)";
        matchesMeth264.paramCounts = [1];
        matchesMeth264.paramNames = ["it"];
        matchesMeth264.definitionLine = 332;
        matchesMeth264.definitionModule = "collectionsPrelude";
        block264.methods["matches(1)"] = matchesMeth264;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call263 = selfRequest(this, "do(1)", [1], block264);
        setLineNumber(335);    // compilenode return
        return var_result;
      };    // end of method fold(_)startingWith(_)
      this.methods["fold(1)startingWith(1)"] = func262;
      func262.methodName = "fold(1)startingWith(1)";
      func262.paramCounts = [1, 1];
      func262.paramNames = ["blk", "initial"];
      func262.definitionLine = 330;
      func262.definitionModule = "collectionsPrelude";
      var func266 = function(argcv, var_block1, var_R) {    // method map(_), line 337
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_R) var_R = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 2)) {
            raiseTypeArgError("map(_)", 1, numArgs - 1);
        }
        setLineNumber(338);    // compilenode call
        // call case 2: outer request
        var call267 = selfRequest(importedModules["collectionsPrelude"], "lazySequenceOver(1)mappedBy(1)", [1, 1], this, var_block1);
        return call267;
      };    // end of method map(_)
      this.methods["map(1)"] = func266;
      func266.methodName = "map(1)";
      func266.paramCounts = [1];
      func266.paramNames = ["block1"];
      func266.typeParamNames = ["R"];
      func266.definitionLine = 337;
      func266.definitionModule = "collectionsPrelude";
      var func268 = function(argcv, var_selectionCondition) {    // method filter(_), line 340
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("filter(_)", 0, numArgs - 1);
        }
        setLineNumber(341);    // compilenode call
        // call case 2: outer request
        var call269 = selfRequest(importedModules["collectionsPrelude"], "lazySequenceOver(1)filteredBy(1)", [1, 1], this, var_selectionCondition);
        return call269;
      };    // end of method filter(_)
      this.methods["filter(1)"] = func268;
      func268.methodName = "filter(1)";
      func268.paramCounts = [1];
      func268.paramNames = ["selectionCondition"];
      func268.definitionLine = 340;
      func268.definitionModule = "collectionsPrelude";
      var func270 = function(argcv, var_target) {    // method >>(_), line 343
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError(">>(_)", 0, numArgs - 1);
        }
        setLineNumber(343);    // compilenode op
        var opresult271 = request(var_target, "<<(1)", [1], this);
        return opresult271;
      };    // end of method >>(_)
      this.methods[">>(1)"] = func270;
      func270.methodName = ">>(1)";
      func270.paramCounts = [1];
      func270.paramNames = ["target"];
      func270.definitionLine = 343;
      func270.definitionModule = "collectionsPrelude";
      var func272 = function(argcv, var_source) {    // method <<(_), line 344
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(344);    // compilenode op
        var opresult273 = request(this, "++(1)", [1], var_source);
        return opresult273;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func272;
      func272.methodName = "<<(1)";
      func272.paramCounts = [1];
      func272.paramNames = ["source"];
      func272.definitionLine = 344;
      func272.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 287;
          m.definitionModule = "collectionsPrelude";
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
      var obj224_init = function() {    // init of object on line 287
      };
      return obj224_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj224_init = obj224_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj224_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method collection$build(_,_,_)
  this.methods["collection$build(3)"] = func223;
  func223.methodName = "collection$build(3)";
  func223.paramCounts = [0];
  func223.paramNames = [];
  func223.typeParamNames = ["T"];
  func223.definitionLine = 287;
  func223.definitionModule = "collectionsPrelude";
  var func274 = function(argcv, var_T) {    // method enumerable, line 348
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("enumerable", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("enumerable", "collectionsPrelude", 348);
    var ouc_init = this.methods["enumerable$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method enumerable
  this.methods["enumerable"] = func274;
  func274.methodName = "enumerable";
  func274.paramCounts = [0];
  func274.paramNames = [];
  func274.typeParamNames = ["T"];
  func274.definitionLine = 348;
  func274.definitionModule = "collectionsPrelude";
  var func275 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method enumerable$build(_,_,_), line 348
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("enumerable", 1, numArgs - 0);
    }
    var obj276_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_348");
      this.outer_collectionsPrelude_348 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(349);    // reuse call
      var initFun277 = selfRequest(importedModules["collectionsPrelude"], "collection$build(3)", [null], this, [], []);  // compileReuseCall
      if (! this.methods["iterator"]) {
        var func278 = function(argcv) {    // method iterator, line 350
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          setLineNumber(350);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method iterator was not supplied"));
        };    // end of method iterator
        this.methods["iterator"] = func278;
        func278.methodName = "iterator";
        func278.paramCounts = [0];
        func278.paramNames = [];
        func278.definitionLine = 350;
        func278.definitionModule = "collectionsPrelude";
      };
      var func279 = function(argcv, var_other) {    // method ==(_), line 351
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(352);    // compilenode call
        // call case 2: outer request
        var call280 = selfRequest(importedModules["collectionsPrelude"], "isEqual(1)toCollection(1)", [1, 1], this, var_other);
        return call280;
      };    // end of method ==(_)
      this.methods["==(1)"] = func279;
      func279.methodName = "==(1)";
      func279.paramCounts = [1];
      func279.paramNames = ["other"];
      func279.definitionLine = 351;
      func279.definitionModule = "collectionsPrelude";
      var func281 = function(argcv, var_other) {    // method ≠(_), line 354
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≠(_)", 0, numArgs - 1);
        }
        setLineNumber(354);    // compilenode member
        // call case 6: other requests
        var opresult283 = request(this, "==(1)", [1], var_other);
        var call282 = request(opresult283, "not", [0]);
        return call282;
      };    // end of method ≠(_)
      this.methods["\u2260(1)"] = func281;
      func281.methodName = "\u2260(1)";
      func281.paramCounts = [1];
      func281.paramNames = ["other"];
      func281.definitionLine = 354;
      func281.definitionModule = "collectionsPrelude";
      var func284 = function(argcv, var_block1) {    // method do(_), line 355
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("do(_)", 0, numArgs - 1);
        }
        setLineNumber(356);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call285 = selfRequest(this, "iterator", [0]);
        var var_selfIterator = call285;
        setLineNumber(357);    // compilenode block
        var block287 = new GraceBlock(this, 357, 0);
        block287.guard = jsTrue;
        block287.real = function block287() {
          setLineNumber(357);    // compilenode member
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call288 = request(var_selfIterator, "hasNext", [0]);
          return call288;
        };
        let applyMeth287 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth287.methodName = "apply";
        applyMeth287.paramCounts = [0];
        applyMeth287.paramNames = [];
        applyMeth287.definitionLine = 357;
        applyMeth287.definitionModule = "collectionsPrelude";
        block287.methods["apply"] = applyMeth287;
        var block289 = new GraceBlock(this, 357, 0);
        block289.guard = jsTrue;
        block289.real = function block289() {
          setLineNumber(358);    // compilenode member
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call291 = request(var_selfIterator, "next", [0]);
          // call case 6: other requests
          var call290 = request(var_block1, "apply(1)", [1], call291);
          return call290;
        };
        let applyMeth289 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth289.methodName = "apply";
        applyMeth289.paramCounts = [0];
        applyMeth289.paramNames = [];
        applyMeth289.definitionLine = 357;
        applyMeth289.definitionModule = "collectionsPrelude";
        block289.methods["apply"] = applyMeth289;
        // call case 2: outer request
        var call286 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block287, block289);
        return call286;
      };    // end of method do(_)
      this.methods["do(1)"] = func284;
      func284.methodName = "do(1)";
      func284.paramCounts = [1];
      func284.paramNames = ["block1"];
      func284.definitionLine = 355;
      func284.definitionModule = "collectionsPrelude";
      var func292 = function(argcv, var_block2) {    // method keysAndValuesDo(_), line 361
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
        }
        setLineNumber(362);    // compilenode num
        var var_ix = new GraceNum(0);
        setLineNumber(363);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call293 = selfRequest(this, "iterator", [0]);
        var var_selfIterator = call293;
        setLineNumber(364);    // compilenode block
        var block295 = new GraceBlock(this, 364, 0);
        block295.guard = jsTrue;
        block295.real = function block295() {
          setLineNumber(364);    // compilenode member
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call296 = request(var_selfIterator, "hasNext", [0]);
          return call296;
        };
        let applyMeth295 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth295.methodName = "apply";
        applyMeth295.paramCounts = [0];
        applyMeth295.paramNames = [];
        applyMeth295.definitionLine = 364;
        applyMeth295.definitionModule = "collectionsPrelude";
        block295.methods["apply"] = applyMeth295;
        var block297 = new GraceBlock(this, 364, 0);
        block297.guard = jsTrue;
        block297.real = function block297() {
          setLineNumber(365);    // compilenode op
          if (var_ix === undefined) raiseUninitializedVariable("ix");
          var sum298 = request(var_ix, "+(1)", [1], new GraceNum(1));
          var_ix = sum298;
          setLineNumber(366);    // compilenode call
          if (var_ix === undefined) raiseUninitializedVariable("ix");
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call300 = request(var_selfIterator, "next", [0]);
          // call case 6: other requests
          var call299 = request(var_block2, "apply(2)", [2], var_ix, call300);
          return call299;
        };
        let applyMeth297 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth297.methodName = "apply";
        applyMeth297.paramCounts = [0];
        applyMeth297.paramNames = [];
        applyMeth297.definitionLine = 364;
        applyMeth297.definitionModule = "collectionsPrelude";
        block297.methods["apply"] = applyMeth297;
        // call case 2: outer request
        var call294 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block295, block297);
        return call294;
      };    // end of method keysAndValuesDo(_)
      this.methods["keysAndValuesDo(1)"] = func292;
      func292.methodName = "keysAndValuesDo(1)";
      func292.paramCounts = [1];
      func292.paramNames = ["block2"];
      func292.definitionLine = 361;
      func292.definitionModule = "collectionsPrelude";
      var func301 = function(argcv) {     // accessor method values
        const numArgs = arguments.length - 1;
        if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
        return this;
      };    // end of method values
      this.methods["values"] = func301;
      func301.methodName = "values";
      func301.paramCounts = [0];
      func301.paramNames = [];
      func301.definitionLine = 369;
      func301.definitionModule = "collectionsPrelude";
      var func302 = function(argcv, var_block2, var_initial, var_R) {    // method fold(_)startingWith(_), line 372
        var returnTarget = invocationCount;
        invocationCount++;
        if (! var_R) var_R = var_Unknown;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 3)) {
            raiseTypeArgError("fold(_)startingWith(_)", 1, numArgs - 2);
        }
        setLineNumber(373);    // compilenode vardec
        var var_res = var_initial;
        setLineNumber(374);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call303 = selfRequest(this, "iterator", [0]);
        var var_selfIterator = call303;
        setLineNumber(375);    // compilenode block
        var block305 = new GraceBlock(this, 375, 0);
        block305.guard = jsTrue;
        block305.real = function block305() {
          setLineNumber(375);    // compilenode member
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call306 = request(var_selfIterator, "hasNext", [0]);
          return call306;
        };
        let applyMeth305 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth305.methodName = "apply";
        applyMeth305.paramCounts = [0];
        applyMeth305.paramNames = [];
        applyMeth305.definitionLine = 375;
        applyMeth305.definitionModule = "collectionsPrelude";
        block305.methods["apply"] = applyMeth305;
        var block307 = new GraceBlock(this, 375, 0);
        block307.guard = jsTrue;
        block307.real = function block307() {
          setLineNumber(376);    // compilenode call
          if (var_res === undefined) raiseUninitializedVariable("res");
          // call case 6: other requests
          if (var_selfIterator === undefined) raiseUninitializedVariable("selfIterator");
          var call309 = request(var_selfIterator, "next", [0]);
          // call case 6: other requests
          var call308 = request(var_block2, "apply(2)", [2], var_res, call309);
          var_res = call308;
          return GraceDone;
        };
        let applyMeth307 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth307.methodName = "apply";
        applyMeth307.paramCounts = [0];
        applyMeth307.paramNames = [];
        applyMeth307.definitionLine = 375;
        applyMeth307.definitionModule = "collectionsPrelude";
        block307.methods["apply"] = applyMeth307;
        // call case 2: outer request
        var call304 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block305, block307);
        setLineNumber(378);    // compilenode return
        return var_res;
      };    // end of method fold(_)startingWith(_)
      this.methods["fold(1)startingWith(1)"] = func302;
      func302.methodName = "fold(1)startingWith(1)";
      func302.paramCounts = [1, 1];
      func302.paramNames = ["block2", "initial"];
      func302.typeParamNames = ["R"];
      func302.definitionLine = 372;
      func302.definitionModule = "collectionsPrelude";
      var func310 = function(argcv, var_other) {    // method ++(_), line 380
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("++(_)", 0, numArgs - 1);
        }
        setLineNumber(381);    // compilenode call
        // call case 2: outer request
        var call311 = selfRequest(importedModules["collectionsPrelude"], "lazyConcatenation(2)", [2], this, var_other);
        return call311;
      };    // end of method ++(_)
      this.methods["++(1)"] = func310;
      func310.methodName = "++(1)";
      func310.paramCounts = [1];
      func310.paramNames = ["other"];
      func310.definitionLine = 380;
      func310.definitionModule = "collectionsPrelude";
      var func312 = function(argcv, var_sortBlock) {    // method sortedBy(_), line 383
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
        }
        setLineNumber(384);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        // call case 2: outer request
        var call315 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
        var call314 = request(call315, "withAll(1)", [1], this);
        var call313 = request(call314, "sortBy(1)", [1], var_sortBlock);
        return call313;
      };    // end of method sortedBy(_)
      this.methods["sortedBy(1)"] = func312;
      func312.methodName = "sortedBy(1)";
      func312.paramCounts = [1];
      func312.paramNames = ["sortBlock"];
      func312.definitionLine = 383;
      func312.definitionModule = "collectionsPrelude";
      var func316 = function(argcv) {    // method sorted, line 386
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("sorted", 0, numArgs - 0);
        }
        setLineNumber(387);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 2: outer request
        var call319 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
        var call318 = request(call319, "withAll(1)", [1], this);
        var call317 = request(call318, "sort", [0]);
        return call317;
      };    // end of method sorted
      this.methods["sorted"] = func316;
      func316.methodName = "sorted";
      func316.paramCounts = [0];
      func316.paramNames = [];
      func316.definitionLine = 386;
      func316.definitionModule = "collectionsPrelude";
      var func320 = function(argcv) {    // method asString, line 389
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(390);    // compilenode string
        var string321 = new GraceString("[");
        var var_s = string321;
        setLineNumber(391);    // compilenode block
        var block323 = new GraceBlock(this, 391, 1);
        block323.guard = jsTrue;
        block323.real = function block323(var_each) {
          setLineNumber(391);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          // call case 6: other requests
          var call324 = request(var_each, "asString", [0]);
          var opresult325 = request(var_s, "++(1)", [1], call324);
          var_s = opresult325;
          return GraceDone;
        };
        let applyMeth323 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth323.methodName = "apply(1)";
        applyMeth323.paramCounts = [1];
        applyMeth323.paramNames = ["each"];
        applyMeth323.definitionLine = 391;
        applyMeth323.definitionModule = "collectionsPrelude";
        block323.methods["apply(1)"] = applyMeth323;
        let matchesMeth323 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth323.methodName = "matches(1)";
        matchesMeth323.paramCounts = [1];
        matchesMeth323.paramNames = ["each"];
        matchesMeth323.definitionLine = 391;
        matchesMeth323.definitionModule = "collectionsPrelude";
        block323.methods["matches(1)"] = matchesMeth323;
        var block326 = new GraceBlock(this, 391, 0);
        block326.guard = jsTrue;
        block326.real = function block326() {
          setLineNumber(391);    // compilenode op
          if (var_s === undefined) raiseUninitializedVariable("s");
          var string327 = new GraceString(", ");
          var opresult328 = request(var_s, "++(1)", [1], string327);
          var_s = opresult328;
          return GraceDone;
        };
        let applyMeth326 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth326.methodName = "apply";
        applyMeth326.paramCounts = [0];
        applyMeth326.paramNames = [];
        applyMeth326.definitionLine = 391;
        applyMeth326.definitionModule = "collectionsPrelude";
        block326.methods["apply"] = applyMeth326;
        // call case 4: self request with 2 args and 0 typeArgs 
        var call322 = selfRequest(this, "do(1)separatedBy(1)", [1, 1], block323, block326);
        setLineNumber(392);    // compilenode string
        var string329 = new GraceString("]");
        var opresult330 = request(var_s, "++(1)", [1], string329);
        return opresult330;
      };    // end of method asString
      this.methods["asString"] = func320;
      func320.methodName = "asString";
      func320.paramCounts = [0];
      func320.paramNames = [];
      func320.definitionLine = 389;
      func320.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 348;
          m.definitionModule = "collectionsPrelude";
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
      var obj276_init = function() {    // init of object on line 348
      };
      return obj276_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj276_init = obj276_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj276_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method enumerable$build(_,_,_)
  this.methods["enumerable$build(3)"] = func275;
  func275.methodName = "enumerable$build(3)";
  func275.paramCounts = [0];
  func275.paramNames = [];
  func275.typeParamNames = ["T"];
  func275.definitionLine = 348;
  func275.definitionModule = "collectionsPrelude";
  var func331 = function(argcv, var_T) {    // method indexable, line 396
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("indexable", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("indexable", "collectionsPrelude", 396);
    var ouc_init = this.methods["indexable$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method indexable
  this.methods["indexable"] = func331;
  func331.methodName = "indexable";
  func331.paramCounts = [0];
  func331.paramNames = [];
  func331.typeParamNames = ["T"];
  func331.definitionLine = 396;
  func331.definitionModule = "collectionsPrelude";
  var func332 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method indexable$build(_,_,_), line 396
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("indexable", 1, numArgs - 0);
    }
    var obj333_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_396");
      this.outer_collectionsPrelude_396 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(397);    // reuse call
      var initFun334 = selfRequest(importedModules["collectionsPrelude"], "collection$build(3)", [null], this, [], []);  // compileReuseCall
      if (! this.methods["at(1)"]) {
        var func335 = function(argcv, var_index) {    // method at(_), line 398
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("at(_)", 0, numArgs - 1);
          }
          setLineNumber(398);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method at(_) was not supplied"));
        };    // end of method at(_)
        this.methods["at(1)"] = func335;
        func335.methodName = "at(1)";
        func335.paramCounts = [1];
        func335.paramNames = ["index"];
        func335.definitionLine = 398;
        func335.definitionModule = "collectionsPrelude";
      };
      if (! this.methods["size"]) {
        var func336 = function(argcv) {    // method size, line 399
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("size", 0, numArgs - 0);
          }
          setLineNumber(399);    // required method
          throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("required method size was not supplied"));
        };    // end of method size
        this.methods["size"] = func336;
        func336.methodName = "size";
        func336.paramCounts = [0];
        func336.paramNames = [];
        func336.definitionLine = 399;
        func336.definitionModule = "collectionsPrelude";
      };
      var func337 = function(argcv, var_action) {    // method sizeIfUnknown(_), line 400
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("sizeIfUnknown(_)", 0, numArgs - 1);
        }
        setLineNumber(400);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call338 = selfRequest(this, "size", [0]);
        return call338;
      };    // end of method sizeIfUnknown(_)
      this.methods["sizeIfUnknown(1)"] = func337;
      func337.methodName = "sizeIfUnknown(1)";
      func337.paramCounts = [1];
      func337.paramNames = ["action"];
      func337.definitionLine = 400;
      func337.definitionModule = "collectionsPrelude";
      var func339 = function(argcv) {    // method isEmpty, line 401
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("isEmpty", 0, numArgs - 0);
        }
        setLineNumber(401);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call340 = selfRequest(this, "size", [0]);
        var opresult341 = request(call340, "==(1)", [1], new GraceNum(0));
        return opresult341;
      };    // end of method isEmpty
      this.methods["isEmpty"] = func339;
      func339.methodName = "isEmpty";
      func339.paramCounts = [0];
      func339.paramNames = [];
      func339.definitionLine = 401;
      func339.definitionModule = "collectionsPrelude";
      var func342 = function(argcv, var_action) {    // method keysAndValuesDo(_), line 402
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
        }
        setLineNumber(403);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call343 = selfRequest(this, "size", [0]);
        var var_curSize = call343;
        setLineNumber(404);    // compilenode num
        var var_i = new GraceNum(1);
        setLineNumber(405);    // compilenode block
        var block345 = new GraceBlock(this, 405, 0);
        block345.guard = jsTrue;
        block345.real = function block345() {
          setLineNumber(405);    // compilenode op
          if (var_i === undefined) raiseUninitializedVariable("i");
          if (var_curSize === undefined) raiseUninitializedVariable("curSize");
          var opresult346 = request(var_i, "\u2264(1)", [1], var_curSize);
          return opresult346;
        };
        let applyMeth345 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth345.methodName = "apply";
        applyMeth345.paramCounts = [0];
        applyMeth345.paramNames = [];
        applyMeth345.definitionLine = 405;
        applyMeth345.definitionModule = "collectionsPrelude";
        block345.methods["apply"] = applyMeth345;
        var block347 = new GraceBlock(this, 405, 0);
        block347.guard = jsTrue;
        block347.real = function block347() {
          setLineNumber(406);    // compilenode call
          if (var_i === undefined) raiseUninitializedVariable("i");
          if (var_i === undefined) raiseUninitializedVariable("i");
          // call case 4: self request with 1 args and 0 typeArgs 
          var call349 = selfRequest(this, "at(1)", [1], var_i);
          // call case 6: other requests
          var call348 = request(var_action, "apply(2)", [2], var_i, call349);
          setLineNumber(407);    // compilenode op
          if (var_i === undefined) raiseUninitializedVariable("i");
          var sum350 = request(var_i, "+(1)", [1], new GraceNum(1));
          var_i = sum350;
          return GraceDone;
        };
        let applyMeth347 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth347.methodName = "apply";
        applyMeth347.paramCounts = [0];
        applyMeth347.paramNames = [];
        applyMeth347.definitionLine = 405;
        applyMeth347.definitionModule = "collectionsPrelude";
        block347.methods["apply"] = applyMeth347;
        // call case 2: outer request
        var call344 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block345, block347);
        return call344;
      };    // end of method keysAndValuesDo(_)
      this.methods["keysAndValuesDo(1)"] = func342;
      func342.methodName = "keysAndValuesDo(1)";
      func342.paramCounts = [1];
      func342.paramNames = ["action"];
      func342.definitionLine = 402;
      func342.definitionModule = "collectionsPrelude";
      var func351 = function(argcv) {    // method first, line 410
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("first", 0, numArgs - 0);
        }
        setLineNumber(410);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call352 = selfRequest(this, "at(1)", [1], new GraceNum(1));
        return call352;
      };    // end of method first
      this.methods["first"] = func351;
      func351.methodName = "first";
      func351.paramCounts = [0];
      func351.paramNames = [];
      func351.definitionLine = 410;
      func351.definitionModule = "collectionsPrelude";
      var func353 = function(argcv) {    // method second, line 411
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("second", 0, numArgs - 0);
        }
        setLineNumber(411);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call354 = selfRequest(this, "at(1)", [1], new GraceNum(2));
        return call354;
      };    // end of method second
      this.methods["second"] = func353;
      func353.methodName = "second";
      func353.paramCounts = [0];
      func353.paramNames = [];
      func353.definitionLine = 411;
      func353.definitionModule = "collectionsPrelude";
      var func355 = function(argcv) {    // method third, line 412
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("third", 0, numArgs - 0);
        }
        setLineNumber(412);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call356 = selfRequest(this, "at(1)", [1], new GraceNum(3));
        return call356;
      };    // end of method third
      this.methods["third"] = func355;
      func355.methodName = "third";
      func355.paramCounts = [0];
      func355.paramNames = [];
      func355.definitionLine = 412;
      func355.definitionModule = "collectionsPrelude";
      var func357 = function(argcv) {    // method fourth, line 413
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("fourth", 0, numArgs - 0);
        }
        setLineNumber(413);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call358 = selfRequest(this, "at(1)", [1], new GraceNum(4));
        return call358;
      };    // end of method fourth
      this.methods["fourth"] = func357;
      func357.methodName = "fourth";
      func357.paramCounts = [0];
      func357.paramNames = [];
      func357.definitionLine = 413;
      func357.definitionModule = "collectionsPrelude";
      var func359 = function(argcv) {    // method fifth, line 414
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("fifth", 0, numArgs - 0);
        }
        setLineNumber(414);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call360 = selfRequest(this, "at(1)", [1], new GraceNum(5));
        return call360;
      };    // end of method fifth
      this.methods["fifth"] = func359;
      func359.methodName = "fifth";
      func359.paramCounts = [0];
      func359.paramNames = [];
      func359.definitionLine = 414;
      func359.definitionModule = "collectionsPrelude";
      var func361 = function(argcv) {    // method last, line 415
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("last", 0, numArgs - 0);
        }
        setLineNumber(415);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call363 = selfRequest(this, "size", [0]);
        // call case 4: self request with 1 args and 0 typeArgs 
        var call362 = selfRequest(this, "at(1)", [1], call363);
        return call362;
      };    // end of method last
      this.methods["last"] = func361;
      func361.methodName = "last";
      func361.paramCounts = [0];
      func361.paramNames = [];
      func361.definitionLine = 415;
      func361.definitionModule = "collectionsPrelude";
      var func364 = function(argcv) {    // method indices, line 416
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("indices", 0, numArgs - 0);
        }
        setLineNumber(416);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call366 = selfRequest(this, "size", [0]);
        // call case 6: other requests
        if (var_range === undefined) raiseUninitializedVariable("range");
        var call365 = request(var_range, "from(1)to(1)", [1, 1], new GraceNum(1), call366);
        return call365;
      };    // end of method indices
      this.methods["indices"] = func364;
      func364.methodName = "indices";
      func364.paramCounts = [0];
      func364.paramNames = [];
      func364.definitionLine = 416;
      func364.definitionModule = "collectionsPrelude";
      var func367 = function(argcv, var_sought) {    // method indexOf(_), line 417
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("indexOf(_)", 0, numArgs - 1);
        }
        setLineNumber(418);    // compilenode block
        var block369 = new GraceBlock(this, 418, 0);
        block369.guard = jsTrue;
        block369.real = function block369() {
          setLineNumber(418);    // compilenode string
          var string371 = new GraceString("collection does not contain ");
          var opresult372 = request(string371, "++(1)", [1], var_sought);
          var string373 = new GraceString("");
          var opresult374 = request(opresult372, "++(1)", [1], string373);
          // call case 6: other requests
          if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
          var call370 = request(var_NoSuchObject, "raise(1)", [1], opresult374);
          return call370;
        };
        let applyMeth369 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth369.methodName = "apply";
        applyMeth369.paramCounts = [0];
        applyMeth369.paramNames = [];
        applyMeth369.definitionLine = 418;
        applyMeth369.definitionModule = "collectionsPrelude";
        block369.methods["apply"] = applyMeth369;
        // call case 4: self request with 2 args and 0 typeArgs 
        var call368 = selfRequest(this, "indexOf(1)ifAbsent(1)", [1, 1], var_sought, block369);
        return call368;
      };    // end of method indexOf(_)
      func367.paramTypes = [];
      func367.paramTypes.push([]);
      this.methods["indexOf(1)"] = func367;
      func367.methodName = "indexOf(1)";
      func367.paramCounts = [1];
      func367.paramNames = ["sought"];
      func367.definitionLine = 417;
      func367.definitionModule = "collectionsPrelude";
      var func375 = function(argcv, var_sought, var_action) {    // method indexOf(_)ifAbsent(_), line 420
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("indexOf(_)ifAbsent(_)", 0, numArgs - 2);
        }
        setLineNumber(421);    // compilenode block
        var block377 = new GraceBlock(this, 421, 2);
        block377.guard = jsTrue;
        block377.real = function block377(var_ix, var_v) {
          var if378 = GraceDone;
          setLineNumber(422);    // compilenode op
          var opresult379 = request(var_v, "==(1)", [1], var_sought);
          if (Grace_isTrue(opresult379)) {
            throw new ReturnException(var_ix, returnTarget);
          }
          return if378;
        };
        let applyMeth377 = function apply_2 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth377.methodName = "apply(2)";
        applyMeth377.paramCounts = [2];
        applyMeth377.paramNames = ["ix", "v"];
        applyMeth377.definitionLine = 421;
        applyMeth377.definitionModule = "collectionsPrelude";
        block377.methods["apply(2)"] = applyMeth377;
        let matchesMeth377 = function matches_2 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth377.methodName = "matches(2)";
        matchesMeth377.paramCounts = [2];
        matchesMeth377.paramNames = ["ix", "v"];
        matchesMeth377.definitionLine = 421;
        matchesMeth377.definitionModule = "collectionsPrelude";
        block377.methods["matches(2)"] = matchesMeth377;
        // call case 4: self request with 1 args and 0 typeArgs 
        var call376 = selfRequest(this, "keysAndValuesDo(1)", [1], block377);
        setLineNumber(424);    // compilenode member
        // call case 6: other requests
        var call380 = request(var_action, "apply", [0]);
        return call380;
      };    // end of method indexOf(_)ifAbsent(_)
      func375.paramTypes = [];
      func375.paramTypes.push([]);
      func375.paramTypes.push([]);
      this.methods["indexOf(1)ifAbsent(1)"] = func375;
      func375.methodName = "indexOf(1)ifAbsent(1)";
      func375.paramCounts = [1, 1];
      func375.paramNames = ["sought", "action"];
      func375.definitionLine = 420;
      func375.definitionModule = "collectionsPrelude";
      var func381 = function(argcv, var_other) {    // method ==(_), line 426
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(427);    // compilenode call
        // call case 2: outer request
        var call382 = selfRequest(importedModules["collectionsPrelude"], "isEqual(1)toCollection(1)", [1, 1], this, var_other);
        return call382;
      };    // end of method ==(_)
      this.methods["==(1)"] = func381;
      func381.methodName = "==(1)";
      func381.paramCounts = [1];
      func381.paramNames = ["other"];
      func381.definitionLine = 426;
      func381.definitionModule = "collectionsPrelude";
      var func383 = function(argcv) {    // method hash, line 429
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(430);    // compilenode block
        var block385 = new GraceBlock(this, 430, 2);
        block385.guard = jsTrue;
        block385.real = function block385(var_acc, var_each) {
          setLineNumber(431);    // compilenode call
          // call case 2: outer request
          var call386 = selfRequest(importedModules["collectionsPrelude"], "hashAndCombine(2)", [2], var_acc, var_each);
          return call386;
        };
        let applyMeth385 = function apply_2 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth385.methodName = "apply(2)";
        applyMeth385.paramCounts = [2];
        applyMeth385.paramNames = ["acc", "each"];
        applyMeth385.definitionLine = 430;
        applyMeth385.definitionModule = "collectionsPrelude";
        block385.methods["apply(2)"] = applyMeth385;
        let matchesMeth385 = function matches_2 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth385.methodName = "matches(2)";
        matchesMeth385.paramCounts = [2];
        matchesMeth385.paramNames = ["acc", "each"];
        matchesMeth385.definitionLine = 430;
        matchesMeth385.definitionModule = "collectionsPrelude";
        block385.methods["matches(2)"] = matchesMeth385;
        setLineNumber(432);    // compilenode member
        // call case 6: other requests
        var array388 = new GraceSequence([]);
        var call387 = request(array388, "hash", [0]);
        // call case 4: self request with 2 args and 0 typeArgs 
        var call384 = selfRequest(this, "fold(1)startingWith(1)", [1, 1], block385, call387);
        return call384;
      };    // end of method hash
      this.methods["hash"] = func383;
      func383.methodName = "hash";
      func383.paramCounts = [0];
      func383.paramNames = [];
      func383.definitionLine = 429;
      func383.definitionModule = "collectionsPrelude";
      var func389 = function(argcv, var_other) {    // method ≠(_), line 434
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("≠(_)", 0, numArgs - 1);
        }
        setLineNumber(434);    // compilenode member
        // call case 6: other requests
        var opresult391 = request(this, "==(1)", [1], var_other);
        var call390 = request(opresult391, "not", [0]);
        return call390;
      };    // end of method ≠(_)
      this.methods["\u2260(1)"] = func389;
      func389.methodName = "\u2260(1)";
      func389.paramCounts = [1];
      func389.paramNames = ["other"];
      func389.definitionLine = 434;
      func389.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 396;
          m.definitionModule = "collectionsPrelude";
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
      var obj333_init = function() {    // init of object on line 396
      };
      return obj333_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj333_init = obj333_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj333_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method indexable$build(_,_,_)
  this.methods["indexable$build(3)"] = func332;
  func332.methodName = "indexable$build(3)";
  func332.paramCounts = [0];
  func332.paramNames = [];
  func332.typeParamNames = ["T"];
  func332.definitionLine = 396;
  func332.definitionModule = "collectionsPrelude";
  var func392 = function(argcv, var_a, var_b) {    // method max(_,_), line 437
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("max(_,_)", 0, numArgs - 2);
    }
    var if393 = GraceDone;
    setLineNumber(438);    // compilenode op
    var opresult394 = request(var_a, ">(1)", [1], var_b);
    if (Grace_isTrue(opresult394)) {
      if393 = var_a;
    } else {
      if393 = var_b;
    }
    return if393;
  };    // end of method max(_,_)
  func392.confidential = true;
  this.methods["max(2)"] = func392;
  func392.methodName = "max(2)";
  func392.paramCounts = [2];
  func392.paramNames = ["a", "b"];
  func392.definitionLine = 437;
  func392.definitionModule = "collectionsPrelude";
  var func395 = function(argcv, var_T) {    // method sequence, line 446
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("sequence", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("sequence", "collectionsPrelude", 446);
    var ouc_init = this.methods["sequence$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method sequence
  this.methods["sequence"] = func395;
  func395.methodName = "sequence";
  func395.paramCounts = [0];
  func395.paramNames = [];
  func395.typeParamNames = ["T"];
  func395.definitionLine = 446;
  func395.definitionModule = "collectionsPrelude";
  var func396 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method sequence$build(_,_,_), line 446
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("sequence", 1, numArgs - 0);
    }
    var obj397_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_446");
      this.outer_collectionsPrelude_446 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func398 = function(argcv) {    // method asString, line 448
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(448);    // compilenode string
        var string399 = new GraceString("the sequence factory");
        return string399;
      };    // end of method asString
      this.methods["asString"] = func398;
      func398.methodName = "asString";
      func398.paramCounts = [0];
      func398.paramNames = [];
      func398.definitionLine = 448;
      func398.definitionModule = "collectionsPrelude";
      var func400 = function(argcv) {    // method empty, line 450
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        setLineNumber(450);    // compilenode array
        var array401 = new GraceSequence([]);
        return array401;
      };    // end of method empty
      this.methods["empty"] = func400;
      func400.methodName = "empty";
      func400.paramCounts = [0];
      func400.paramNames = [];
      func400.definitionLine = 450;
      func400.definitionModule = "collectionsPrelude";
      var func402 = function(argcv, var_x) {    // method with(_), line 452
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("with(_)", 0, numArgs - 1);
        }
        setLineNumber(452);    // compilenode array
        var array403 = new GraceSequence([]);
        var array404 = new GraceSequence([var_x]);
        var opresult405 = request(array403, "++(1)", [1], array404);
        return opresult405;
      };    // end of method with(_)
      func402.paramTypes = [];
      func402.paramTypes.push([]);
      this.methods["with(1)"] = func402;
      func402.methodName = "with(1)";
      func402.paramCounts = [1];
      func402.paramNames = ["x"];
      func402.definitionLine = 452;
      func402.definitionModule = "collectionsPrelude";
      var func406 = function(argcv, var_arg) {    // method withAll(_), line 454
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        setLineNumber(454);    // compilenode array
        var array407 = new GraceSequence([]);
        var opresult408 = request(array407, "++(1)", [1], var_arg);
        return opresult408;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func406;
      func406.methodName = "withAll(1)";
      func406.paramCounts = [1];
      func406.paramNames = ["arg"];
      func406.definitionLine = 454;
      func406.definitionModule = "collectionsPrelude";
      var func409 = function(argcv, var_source) {    // method <<(_), line 456
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(456);    // compilenode array
        var array410 = new GraceSequence([]);
        var opresult411 = request(array410, "++(1)", [1], var_source);
        return opresult411;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func409;
      func409.methodName = "<<(1)";
      func409.paramCounts = [1];
      func409.paramNames = ["source"];
      func409.definitionLine = 456;
      func409.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 446;
          m.definitionModule = "collectionsPrelude";
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
      var obj397_init = function() {    // init of object on line 446
      };
      return obj397_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj397_init = obj397_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj397_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method sequence$build(_,_,_)
  this.methods["sequence$build(3)"] = func396;
  func396.methodName = "sequence$build(3)";
  func396.paramCounts = [0];
  func396.paramNames = [];
  func396.typeParamNames = ["T"];
  func396.definitionLine = 446;
  func396.definitionModule = "collectionsPrelude";
  setLineNumber(460);    // compilenode typedec
  // Type decl MinimalyIterable
  var func413 = function(argcv) {    // method MinimalyIterable, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(460);    // compilenode typeliteral
    //   Type literal 
    var typeLit414 = new GraceType("MinimalyIterable");
    typeLit414.typeMethods.push("iterator");
    return typeLit414;
  };    // end of method MinimalyIterable
  function memofunc413(argcv) {
      if (! this.data["memo$MinimalyIterable"])    // parameterless memo function
          this.data["memo$MinimalyIterable"] = func413.call(this, argcv);
      return this.data["memo$MinimalyIterable"];
  };
  this.methods["MinimalyIterable"] = memofunc413;
  memofunc413.methodName = "MinimalyIterable";
  memofunc413.paramCounts = [0];
  memofunc413.paramNames = [];
  memofunc413.definitionLine = 1;
  memofunc413.definitionModule = "collectionsPrelude";
  func413.methodName = "MinimalyIterable";
  func413.paramCounts = [0];
  func413.paramNames = [];
  func413.definitionLine = 1;
  func413.definitionModule = "collectionsPrelude";
  var func415 = function(argcv, var_left, var_right) {    // method isEqual(_)toCollection(_), line 464
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("isEqual(_)toCollection(_)", 0, numArgs - 2);
    }
    var if416 = GraceDone;
    setLineNumber(465);    // compilenode call
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call418 = selfRequest(this, "MinimalyIterable", [0]);
    var call417 = request(call418, "matches(1)", [1], var_right);
    if (Grace_isTrue(call417)) {
      setLineNumber(466);    // compilenode member
      // call case 6: other requests
      var call419 = request(var_left, "iterator", [0]);
      var var_leftIter = call419;
      setLineNumber(467);    // compilenode member
      // call case 6: other requests
      var call420 = request(var_right, "iterator", [0]);
      var var_rightIter = call420;
      setLineNumber(468);    // compilenode block
      var block422 = new GraceBlock(this, 468, 0);
      block422.guard = jsTrue;
      block422.real = function block422() {
        setLineNumber(468);    // compilenode member
        // call case 6: other requests
        if (var_leftIter === undefined) raiseUninitializedVariable("leftIter");
        var call423 = request(var_leftIter, "hasNext", [0]);
        // call case 6: other requests
        if (var_rightIter === undefined) raiseUninitializedVariable("rightIter");
        var call424 = request(var_rightIter, "hasNext", [0]);
        var opresult425 = request(call423, "&&(1)", [1], call424);
        return opresult425;
      };
      let applyMeth422 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth422.methodName = "apply";
      applyMeth422.paramCounts = [0];
      applyMeth422.paramNames = [];
      applyMeth422.definitionLine = 468;
      applyMeth422.definitionModule = "collectionsPrelude";
      block422.methods["apply"] = applyMeth422;
      var block426 = new GraceBlock(this, 468, 0);
      block426.guard = jsTrue;
      block426.real = function block426() {
        var if427 = GraceDone;
        setLineNumber(469);    // compilenode member
        // call case 6: other requests
        if (var_leftIter === undefined) raiseUninitializedVariable("leftIter");
        var call428 = request(var_leftIter, "next", [0]);
        // call case 6: other requests
        if (var_rightIter === undefined) raiseUninitializedVariable("rightIter");
        var call429 = request(var_rightIter, "next", [0]);
        var opresult430 = request(call428, "\u2260(1)", [1], call429);
        if (Grace_isTrue(opresult430)) {
          setLineNumber(470);    // compilenode return
          throw new ReturnException(GraceFalse, returnTarget);
        }
        return if427;
      };
      let applyMeth426 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth426.methodName = "apply";
      applyMeth426.paramCounts = [0];
      applyMeth426.paramNames = [];
      applyMeth426.definitionLine = 468;
      applyMeth426.definitionModule = "collectionsPrelude";
      block426.methods["apply"] = applyMeth426;
      // call case 2: outer request
      var call421 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block422, block426);
      setLineNumber(473);    // compilenode member
      // call case 6: other requests
      if (var_leftIter === undefined) raiseUninitializedVariable("leftIter");
      var call431 = request(var_leftIter, "hasNext", [0]);
      // call case 6: other requests
      if (var_rightIter === undefined) raiseUninitializedVariable("rightIter");
      var call432 = request(var_rightIter, "hasNext", [0]);
      var opresult433 = request(call431, "==(1)", [1], call432);
      if416 = opresult433;
    } else {
      if416 = GraceFalse;
    }
    return if416;
  };    // end of method isEqual(_)toCollection(_)
  this.methods["isEqual(1)toCollection(1)"] = func415;
  func415.methodName = "isEqual(1)toCollection(1)";
  func415.paramCounts = [1, 1];
  func415.paramNames = ["left", "right"];
  func415.definitionLine = 464;
  func415.definitionModule = "collectionsPrelude";
  var func434 = function(argcv, var_aHash, var_anObj) {    // method hashAndCombine(_,_), line 480
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("hashAndCombine(_,_)", 0, numArgs - 2);
    }
    setLineNumber(481);    // compilenode member
    // call case 6: other requests
    var call435 = request(var_anObj, "hash", [0]);
    var var_objHash = call435;
    setLineNumber(482);    // compilenode call
    var result = GraceDone;    // start native code from line 482
    return new GraceNum((var_aHash._value * 2) ^ var_objHash._value);
   // end native code insertion
    return result;
  };    // end of method hashAndCombine(_,_)
  this.methods["hashAndCombine(2)"] = func434;
  func434.methodName = "hashAndCombine(2)";
  func434.paramCounts = [2];
  func434.paramNames = ["aHash", "anObj"];
  func434.definitionLine = 480;
  func434.definitionModule = "collectionsPrelude";
  var func436 = function(argcv, var_T) {    // method list, line 486
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("list", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("list", "collectionsPrelude", 486);
    var ouc_init = this.methods["list$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method list
  this.methods["list"] = func436;
  func436.methodName = "list";
  func436.paramCounts = [0];
  func436.paramNames = [];
  func436.typeParamNames = ["T"];
  func436.definitionLine = 486;
  func436.definitionModule = "collectionsPrelude";
  var func437 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method list$build(_,_,_), line 486
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("list", 1, numArgs - 0);
    }
    var obj438_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_486");
      this.outer_collectionsPrelude_486 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func439 = function(argcv) {    // method asString, line 488
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(488);    // compilenode string
        var string440 = new GraceString("the list factory");
        return string440;
      };    // end of method asString
      this.methods["asString"] = func439;
      func439.methodName = "asString";
      func439.paramCounts = [0];
      func439.paramNames = [];
      func439.definitionLine = 488;
      func439.definitionModule = "collectionsPrelude";
      var func441 = function(argcv) {    // method empty, line 490
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        setLineNumber(490);    // compilenode array
        var array443 = new GraceSequence([]);
        // call case 4: self request with 1 args and 0 typeArgs 
        var call442 = selfRequest(this, "withAll(1)", [1], array443);
        return call442;
      };    // end of method empty
      this.methods["empty"] = func441;
      func441.methodName = "empty";
      func441.paramCounts = [0];
      func441.paramNames = [];
      func441.definitionLine = 490;
      func441.definitionModule = "collectionsPrelude";
      var func444 = function(argcv, var_x) {    // method with(_), line 492
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("with(_)", 0, numArgs - 1);
        }
        setLineNumber(492);    // compilenode array
        var array446 = new GraceSequence([var_x]);
        // call case 4: self request with 1 args and 0 typeArgs 
        var call445 = selfRequest(this, "withAll(1)", [1], array446);
        return call445;
      };    // end of method with(_)
      func444.paramTypes = [];
      func444.paramTypes.push([]);
      this.methods["with(1)"] = func444;
      func444.methodName = "with(1)";
      func444.paramCounts = [1];
      func444.paramNames = ["x"];
      func444.definitionLine = 492;
      func444.definitionModule = "collectionsPrelude";
      var func447 = function(argcv, var_a) {    // method withAll(_), line 494
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        var ouc = emptyGraceObject("list.withAll(_)", "collectionsPrelude", 494);
        var ouc_init = this.methods["withAll(1)$build(3)"].call(this, null, var_a, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func447;
      func447.methodName = "withAll(1)";
      func447.paramCounts = [1];
      func447.paramNames = ["a"];
      func447.definitionLine = 494;
      func447.definitionModule = "collectionsPrelude";
      var func448 = function(argcv, var_a, inheritingObject, aliases, exclusions) {    // method withAll(_)$build(_,_,_), line 494
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        var obj449_build = function(ignore, var_a, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_494");
          this.outer_collectionsPrelude_494 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(495);    // reuse call
          var initFun450 = selfRequest(importedModules["collectionsPrelude"], "indexable$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.mods = undefined;
          var reader451_mods = function() {  // reader method mods
              if (this.data.mods === undefined) raiseUninitializedVariable("mods");
              return this.data.mods;
          };
          reader451_mods.isVar = true;
          this.methods["mods"] = reader451_mods;
          var writer452_mods = function(argcv, n) {   // writer method mods:=(_)
            this.data.mods = n;
            return GraceDone;
          };
          writer452_mods.confidential = true;
          this.methods["mods:=(1)"] = writer452_mods;
          var func453 = function(argcv) {    // method size, line 503
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(504);    // compilenode call
            var result = GraceDone;    // start native code from line 504
            return new GraceNum(this._value.length);   // end native code insertion
            return result;
          };    // end of method size
          this.methods["size"] = func453;
          func453.methodName = "size";
          func453.paramCounts = [0];
          func453.paramNames = [];
          func453.definitionLine = 503;
          func453.definitionModule = "collectionsPrelude";
          var func454 = function(argcv, var_n) {    // method at(_), line 506
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("at(_)", 0, numArgs - 1);
            }
            setLineNumber(507);    // compilenode call
            var result = GraceDone;    // start native code from line 507
            var idx = var_n._value;
                var result = this._value[idx-1];
                if (result !== undefined) return result;     // fast path
                // Now investigate the cause of the problem:
                checkBounds(this, var_n);   // end native code insertion
            return result;
          };    // end of method at(_)
          this.methods["at(1)"] = func454;
          func454.methodName = "at(1)";
          func454.paramCounts = [1];
          func454.paramNames = ["n"];
          func454.definitionLine = 506;
          func454.definitionModule = "collectionsPrelude";
          var func455 = function(argcv, var_n, var_action) {    // method at(_)ifAbsent(_), line 514
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(515);    // compilenode call
            var result = GraceDone;    // start native code from line 515
            var idx = var_n._value;
                var result = this._value[idx-1];
                if (result !== undefined) return result;     // fast path
                return request(var_action, "apply", [0]);   // end native code insertion
            return result;
          };    // end of method at(_)ifAbsent(_)
          this.methods["at(1)ifAbsent(1)"] = func455;
          func455.methodName = "at(1)ifAbsent(1)";
          func455.paramCounts = [1, 1];
          func455.paramNames = ["n", "action"];
          func455.definitionLine = 514;
          func455.definitionModule = "collectionsPrelude";
          var func456 = function(argcv, var_n, var_x) {    // method at(_)put(_), line 521
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)put(_)", 0, numArgs - 2);
            }
            setLineNumber(522);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call458 = selfRequest(this, "mods", [0]);
            var sum459 = request(call458, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call457 = selfRequest(this, "mods:=(1)", [1], sum459);
            setLineNumber(523);    // compilenode call
            var result = GraceDone;    // start native code from line 523
            var  ix = var_n._value;
                checkBounds(this, var_n, this._value.length + 1);
                    // we allow n to be one greater than the current size
                this._value[ix-1] = var_x;
                return this;   // end native code insertion
            return result;
          };    // end of method at(_)put(_)
          this.methods["at(1)put(1)"] = func456;
          func456.methodName = "at(1)put(1)";
          func456.paramCounts = [1, 1];
          func456.paramNames = ["n", "x"];
          func456.definitionLine = 521;
          func456.definitionModule = "collectionsPrelude";
          var func460 = function(argcv, var_x) {    // method add(_), line 530
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("add(_)", 0, numArgs - 1);
            }
            setLineNumber(531);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call462 = selfRequest(this, "mods", [0]);
            var sum463 = request(call462, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call461 = selfRequest(this, "mods:=(1)", [1], sum463);
            setLineNumber(532);    // compilenode call
            var result = GraceDone;    // start native code from line 532
            this._value.push(var_x);
                return this;   // end native code insertion
            return result;
          };    // end of method add(_)
          func460.paramTypes = [];
          func460.paramTypes.push([]);
          this.methods["add(1)"] = func460;
          func460.methodName = "add(1)";
          func460.paramCounts = [1];
          func460.paramNames = ["x"];
          func460.definitionLine = 530;
          func460.definitionModule = "collectionsPrelude";
          var func464 = function(argcv, var_l) {    // method addAll(_), line 535
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addAll(_)", 0, numArgs - 1);
            }
            setLineNumber(536);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call466 = selfRequest(this, "mods", [0]);
            var sum467 = request(call466, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call465 = selfRequest(this, "mods:=(1)", [1], sum467);
            setLineNumber(537);    // compilenode block
            var block469 = new GraceBlock(this, 537, 1);
            block469.guard = jsTrue;
            block469.real = function block469(var_each) {
              setLineNumber(538);    // compilenode call
              var result = GraceDone;    // start native code from line 538
              this._value.push(var_each);   // end native code insertion
              return result;
            };
            let applyMeth469 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth469.methodName = "apply(1)";
            applyMeth469.paramCounts = [1];
            applyMeth469.paramNames = ["each"];
            applyMeth469.definitionLine = 537;
            applyMeth469.definitionModule = "collectionsPrelude";
            block469.methods["apply(1)"] = applyMeth469;
            let matchesMeth469 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth469.methodName = "matches(1)";
            matchesMeth469.paramCounts = [1];
            matchesMeth469.paramNames = ["each"];
            matchesMeth469.definitionLine = 537;
            matchesMeth469.definitionModule = "collectionsPrelude";
            block469.methods["matches(1)"] = matchesMeth469;
            // call case 6: other requests
            var call468 = request(var_l, "do(1)", [1], block469);
            return this;
          };    // end of method addAll(_)
          this.methods["addAll(1)"] = func464;
          func464.methodName = "addAll(1)";
          func464.paramCounts = [1];
          func464.paramNames = ["l"];
          func464.definitionLine = 535;
          func464.definitionModule = "collectionsPrelude";
          var func470 = function(argcv, var_x) {    // method push(_), line 542
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("push(_)", 0, numArgs - 1);
            }
            setLineNumber(543);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call472 = selfRequest(this, "mods", [0]);
            var sum473 = request(call472, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call471 = selfRequest(this, "mods:=(1)", [1], sum473);
            setLineNumber(544);    // compilenode call
            var result = GraceDone;    // start native code from line 544
            this._value.push(var_x);
                return this;   // end native code insertion
            return result;
          };    // end of method push(_)
          this.methods["push(1)"] = func470;
          func470.methodName = "push(1)";
          func470.paramCounts = [1];
          func470.paramNames = ["x"];
          func470.definitionLine = 542;
          func470.definitionModule = "collectionsPrelude";
          var func474 = function(argcv, var_x) {    // method addLast(_), line 547
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addLast(_)", 0, numArgs - 1);
            }
            setLineNumber(548);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call476 = selfRequest(this, "mods", [0]);
            var sum477 = request(call476, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call475 = selfRequest(this, "mods:=(1)", [1], sum477);
            setLineNumber(549);    // compilenode call
            var result = GraceDone;    // start native code from line 549
            this._value.push(var_x);
                return this;   // end native code insertion
            return result;
          };    // end of method addLast(_)
          this.methods["addLast(1)"] = func474;
          func474.methodName = "addLast(1)";
          func474.paramCounts = [1];
          func474.paramNames = ["x"];
          func474.definitionLine = 547;
          func474.definitionModule = "collectionsPrelude";
          var func478 = function(argcv) {    // method removeLast, line 552
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("removeLast", 0, numArgs - 0);
            }
            setLineNumber(553);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call480 = selfRequest(this, "mods", [0]);
            var sum481 = request(call480, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call479 = selfRequest(this, "mods:=(1)", [1], sum481);
            setLineNumber(554);    // compilenode call
            var result = GraceDone;    // start native code from line 554
            if (this._value.length === 0) {
                var msg = "you can't remove an element from an empty list";
                var BoundsError = callmethod(Grace_prelude, "BoundsError", [0]);
                callmethod(BoundsError, "raise(1)", [1], new GraceString(msg));
            } else
                return this._value.pop();   // end native code insertion
            return result;
          };    // end of method removeLast
          this.methods["removeLast"] = func478;
          func478.methodName = "removeLast";
          func478.paramCounts = [0];
          func478.paramNames = [];
          func478.definitionLine = 552;
          func478.definitionModule = "collectionsPrelude";
          var func482 = function(argcv, var_l) {    // method addAllFirst(_), line 561
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addAllFirst(_)", 0, numArgs - 1);
            }
            setLineNumber(562);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call484 = selfRequest(this, "mods", [0]);
            var sum485 = request(call484, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call483 = selfRequest(this, "mods:=(1)", [1], sum485);
            setLineNumber(563);    // compilenode member
            // call case 6: other requests
            var call486 = request(var_l, "size", [0]);
            var var_ix = call486;
            setLineNumber(564);    // compilenode block
            var block488 = new GraceBlock(this, 564, 0);
            block488.guard = jsTrue;
            block488.real = function block488() {
              setLineNumber(564);    // compilenode op
              if (var_ix === undefined) raiseUninitializedVariable("ix");
              var opresult489 = request(var_ix, ">(1)", [1], new GraceNum(0));
              return opresult489;
            };
            let applyMeth488 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth488.methodName = "apply";
            applyMeth488.paramCounts = [0];
            applyMeth488.paramNames = [];
            applyMeth488.definitionLine = 564;
            applyMeth488.definitionModule = "collectionsPrelude";
            block488.methods["apply"] = applyMeth488;
            var block490 = new GraceBlock(this, 564, 0);
            block490.guard = jsTrue;
            block490.real = function block490() {
              setLineNumber(565);    // compilenode call
              if (var_ix === undefined) raiseUninitializedVariable("ix");
              // call case 6: other requests
              var call491 = request(var_l, "at(1)", [1], var_ix);
              var var_each = call491;
              setLineNumber(566);    // compilenode op
              if (var_ix === undefined) raiseUninitializedVariable("ix");
              var diff492 = request(var_ix, "-(1)", [1], new GraceNum(1));
              var_ix = diff492;
              setLineNumber(567);    // compilenode call
              var result = GraceDone;    // start native code from line 567
              this._value.unshift(var_each);   // end native code insertion
              return result;
            };
            let applyMeth490 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth490.methodName = "apply";
            applyMeth490.paramCounts = [0];
            applyMeth490.paramNames = [];
            applyMeth490.definitionLine = 564;
            applyMeth490.definitionModule = "collectionsPrelude";
            block490.methods["apply"] = applyMeth490;
            // call case 2: outer request
            var call487 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block488, block490);
            return this;
          };    // end of method addAllFirst(_)
          this.methods["addAllFirst(1)"] = func482;
          func482.methodName = "addAllFirst(1)";
          func482.paramCounts = [1];
          func482.paramNames = ["l"];
          func482.definitionLine = 561;
          func482.definitionModule = "collectionsPrelude";
          var func493 = function(argcv, var_elem) {    // method addFirst(_), line 571
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addFirst(_)", 0, numArgs - 1);
            }
            setLineNumber(572);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call495 = selfRequest(this, "mods", [0]);
            var sum496 = request(call495, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call494 = selfRequest(this, "mods:=(1)", [1], sum496);
            setLineNumber(573);    // compilenode call
            var result = GraceDone;    // start native code from line 573
            this._value.unshift(var_elem);   // end native code insertion
            return this;
          };    // end of method addFirst(_)
          this.methods["addFirst(1)"] = func493;
          func493.methodName = "addFirst(1)";
          func493.paramCounts = [1];
          func493.paramNames = ["elem"];
          func493.definitionLine = 571;
          func493.definitionModule = "collectionsPrelude";
          var func497 = function(argcv) {    // method clear, line 576
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("clear", 0, numArgs - 0);
            }
            setLineNumber(577);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call499 = selfRequest(this, "mods", [0]);
            var sum500 = request(call499, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call498 = selfRequest(this, "mods:=(1)", [1], sum500);
            setLineNumber(578);    // compilenode call
            var result = GraceDone;    // start native code from line 578
            this._value = [];
                return this;   // end native code insertion
            return result;
          };    // end of method clear
          this.methods["clear"] = func497;
          func497.methodName = "clear";
          func497.paramCounts = [0];
          func497.paramNames = [];
          func497.definitionLine = 576;
          func497.definitionModule = "collectionsPrelude";
          var func501 = function(argcv) {    // method removeFirst, line 582
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("removeFirst", 0, numArgs - 0);
            }
            setLineNumber(583);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call502 = selfRequest(this, "removeAt(1)", [1], new GraceNum(1));
            return call502;
          };    // end of method removeFirst
          this.methods["removeFirst"] = func501;
          func501.methodName = "removeFirst";
          func501.paramCounts = [0];
          func501.paramNames = [];
          func501.definitionLine = 582;
          func501.definitionModule = "collectionsPrelude";
          var func503 = function(argcv, var_n) {    // method removeAt(_), line 585
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAt(_)", 0, numArgs - 1);
            }
            setLineNumber(586);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call505 = selfRequest(this, "mods", [0]);
            var sum506 = request(call505, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call504 = selfRequest(this, "mods:=(1)", [1], sum506);
            setLineNumber(587);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call507 = selfRequest(this, "at(1)", [1], var_n);
            var var_removed = call507;
            setLineNumber(588);    // compilenode call
            var result = GraceDone;    // start native code from line 588
            this._value.splice(var_n._value - 1, 1);   // end native code insertion
            setLineNumber(589);    // compilenode return
            return var_removed;
          };    // end of method removeAt(_)
          this.methods["removeAt(1)"] = func503;
          func503.methodName = "removeAt(1)";
          func503.paramCounts = [1];
          func503.paramNames = ["n"];
          func503.definitionLine = 585;
          func503.definitionModule = "collectionsPrelude";
          var func508 = function(argcv, var_elt) {    // method remove(_), line 592
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("remove(_)", 0, numArgs - 1);
            }
            setLineNumber(593);    // compilenode block
            var block510 = new GraceBlock(this, 593, 0);
            block510.guard = jsTrue;
            block510.real = function block510() {
              setLineNumber(594);    // compilenode string
              var string512 = new GraceString("list does not contain ");
              var opresult513 = request(string512, "++(1)", [1], var_elt);
              var string514 = new GraceString("");
              var opresult515 = request(opresult513, "++(1)", [1], string514);
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call511 = request(var_NoSuchObject, "raise(1)", [1], opresult515);
              return call511;
            };
            let applyMeth510 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth510.methodName = "apply";
            applyMeth510.paramCounts = [0];
            applyMeth510.paramNames = [];
            applyMeth510.definitionLine = 593;
            applyMeth510.definitionModule = "collectionsPrelude";
            block510.methods["apply"] = applyMeth510;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call509 = selfRequest(this, "indexOf(1)ifAbsent(1)", [1, 1], var_elt, block510);
            var var_ix = call509;
            setLineNumber(596);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call516 = selfRequest(this, "removeAt(1)", [1], var_ix);
            return this;
          };    // end of method remove(_)
          func508.paramTypes = [];
          func508.paramTypes.push([]);
          this.methods["remove(1)"] = func508;
          func508.methodName = "remove(1)";
          func508.paramCounts = [1];
          func508.paramNames = ["elt"];
          func508.definitionLine = 592;
          func508.definitionModule = "collectionsPrelude";
          var func517 = function(argcv, var_elt, var_action) {    // method remove(_)ifAbsent(_), line 600
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("remove(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(601);    // compilenode block
            var block519 = new GraceBlock(this, 601, 0);
            block519.guard = jsTrue;
            block519.real = function block519() {
              setLineNumber(602);    // compilenode member
              // call case 6: other requests
              var call520 = request(var_action, "apply", [0]);
              setLineNumber(603);    // compilenode return
              throw new ReturnException(this, returnTarget);
            };
            let applyMeth519 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth519.methodName = "apply";
            applyMeth519.paramCounts = [0];
            applyMeth519.paramNames = [];
            applyMeth519.definitionLine = 601;
            applyMeth519.definitionModule = "collectionsPrelude";
            block519.methods["apply"] = applyMeth519;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call518 = selfRequest(this, "indexOf(1)ifAbsent(1)", [1, 1], var_elt, block519);
            var var_ix = call518;
            setLineNumber(605);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call521 = selfRequest(this, "removeAt(1)", [1], var_ix);
            return this;
          };    // end of method remove(_)ifAbsent(_)
          func517.paramTypes = [];
          func517.paramTypes.push([]);
          func517.paramTypes.push([]);
          this.methods["remove(1)ifAbsent(1)"] = func517;
          func517.methodName = "remove(1)ifAbsent(1)";
          func517.paramCounts = [1, 1];
          func517.paramNames = ["elt", "action"];
          func517.definitionLine = 600;
          func517.definitionModule = "collectionsPrelude";
          var func522 = function(argcv, var_vs) {    // method removeAll(_), line 609
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAll(_)", 0, numArgs - 1);
            }
            setLineNumber(610);    // compilenode block
            var block524 = new GraceBlock(this, 610, 0);
            block524.guard = jsTrue;
            block524.real = function block524() {
              setLineNumber(610);    // compilenode string
              var string526 = new GraceString("list does not contain object");
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call525 = request(var_NoSuchObject, "raise(1)", [1], string526);
              return call525;
            };
            let applyMeth524 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth524.methodName = "apply";
            applyMeth524.paramCounts = [0];
            applyMeth524.paramNames = [];
            applyMeth524.definitionLine = 610;
            applyMeth524.definitionModule = "collectionsPrelude";
            block524.methods["apply"] = applyMeth524;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call523 = selfRequest(this, "removeAll(1)ifAbsent(1)", [1, 1], var_vs, block524);
            return this;
          };    // end of method removeAll(_)
          this.methods["removeAll(1)"] = func522;
          func522.methodName = "removeAll(1)";
          func522.paramCounts = [1];
          func522.paramNames = ["vs"];
          func522.definitionLine = 609;
          func522.definitionModule = "collectionsPrelude";
          var func527 = function(argcv, var_vs, var_action) {    // method removeAll(_)ifAbsent(_), line 613
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeAll(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(614);    // compilenode block
            var block529 = new GraceBlock(this, 614, 1);
            block529.guard = jsTrue;
            block529.real = function block529(var_each) {
              setLineNumber(615);    // compilenode block
              var block531 = new GraceBlock(this, 615, 0);
              block531.guard = jsTrue;
              block531.real = function block531() {
                setLineNumber(615);    // compilenode num
                return new GraceNum(0);
              };
              let applyMeth531 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth531.methodName = "apply";
              applyMeth531.paramCounts = [0];
              applyMeth531.paramNames = [];
              applyMeth531.definitionLine = 615;
              applyMeth531.definitionModule = "collectionsPrelude";
              block531.methods["apply"] = applyMeth531;
              // call case 4: self request with 2 args and 0 typeArgs 
              var call530 = selfRequest(this, "indexOf(1)ifAbsent(1)", [1, 1], var_each, block531);
              var var_ix = call530;
              var if532 = GraceDone;
              setLineNumber(616);    // compilenode op
              if (var_ix === undefined) raiseUninitializedVariable("ix");
              var opresult533 = request(var_ix, "\u2260(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult533)) {
                setLineNumber(617);    // compilenode call
                if (var_ix === undefined) raiseUninitializedVariable("ix");
                // call case 4: self request with 1 args and 0 typeArgs 
                var call534 = selfRequest(this, "removeAt(1)", [1], var_ix);
                if532 = call534;
              } else {
                setLineNumber(619);    // compilenode member
                // call case 6: other requests
                var call535 = request(var_action, "apply", [0]);
                if532 = call535;
              }
              return if532;
            };
            let applyMeth529 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth529.methodName = "apply(1)";
            applyMeth529.paramCounts = [1];
            applyMeth529.paramNames = ["each"];
            applyMeth529.definitionLine = 614;
            applyMeth529.definitionModule = "collectionsPrelude";
            block529.methods["apply(1)"] = applyMeth529;
            let matchesMeth529 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth529.methodName = "matches(1)";
            matchesMeth529.paramCounts = [1];
            matchesMeth529.paramNames = ["each"];
            matchesMeth529.definitionLine = 614;
            matchesMeth529.definitionModule = "collectionsPrelude";
            block529.methods["matches(1)"] = matchesMeth529;
            // call case 2: outer request
            var call528 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_vs, block529);
            return this;
          };    // end of method removeAll(_)ifAbsent(_)
          this.methods["removeAll(1)ifAbsent(1)"] = func527;
          func527.methodName = "removeAll(1)ifAbsent(1)";
          func527.paramCounts = [1, 1];
          func527.paramNames = ["vs", "action"];
          func527.definitionLine = 613;
          func527.definitionModule = "collectionsPrelude";
          var func536 = function(argcv, var_elt, var_n) {    // method insert(_)at(_), line 624
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("insert(_)at(_)", 0, numArgs - 2);
            }
            setLineNumber(625);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call538 = selfRequest(this, "mods", [0]);
            var sum539 = request(call538, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call537 = selfRequest(this, "mods:=(1)", [1], sum539);
            setLineNumber(626);    // compilenode call
            var result = GraceDone;    // start native code from line 626
            checkBounds(this, var_n, this._value.length + 1);
                this._value.splice(var_n._value - 1, 0, var_elt);   // end native code insertion
            return this;
          };    // end of method insert(_)at(_)
          func536.paramTypes = [];
          func536.paramTypes.push([]);
          func536.paramTypes.push([]);
          this.methods["insert(1)at(1)"] = func536;
          func536.methodName = "insert(1)at(1)";
          func536.paramCounts = [1, 1];
          func536.paramNames = ["elt", "n"];
          func536.definitionLine = 624;
          func536.definitionModule = "collectionsPrelude";
          var func540 = function(argcv) {    // method pop, line 630
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("pop", 0, numArgs - 0);
            }
            setLineNumber(630);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call541 = selfRequest(this, "removeLast", [0]);
            return call541;
          };    // end of method pop
          this.methods["pop"] = func540;
          func540.methodName = "pop";
          func540.paramCounts = [0];
          func540.paramNames = [];
          func540.definitionLine = 630;
          func540.definitionModule = "collectionsPrelude";
          var func542 = function(argcv) {    // method reversed, line 631
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("reversed", 0, numArgs - 0);
            }
            setLineNumber(632);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call544 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
            var call543 = request(call544, "empty", [0]);
            var var_result = call543;
            setLineNumber(633);    // compilenode block
            var block546 = new GraceBlock(this, 633, 1);
            block546.guard = jsTrue;
            block546.real = function block546(var_each) {
              setLineNumber(633);    // compilenode call
              // call case 6: other requests
              if (var_result === undefined) raiseUninitializedVariable("result");
              var call547 = request(var_result, "addFirst(1)", [1], var_each);
              return call547;
            };
            let applyMeth546 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth546.methodName = "apply(1)";
            applyMeth546.paramCounts = [1];
            applyMeth546.paramNames = ["each"];
            applyMeth546.definitionLine = 633;
            applyMeth546.definitionModule = "collectionsPrelude";
            block546.methods["apply(1)"] = applyMeth546;
            let matchesMeth546 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth546.methodName = "matches(1)";
            matchesMeth546.paramCounts = [1];
            matchesMeth546.paramNames = ["each"];
            matchesMeth546.definitionLine = 633;
            matchesMeth546.definitionModule = "collectionsPrelude";
            block546.methods["matches(1)"] = matchesMeth546;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call545 = selfRequest(this, "do(1)", [1], block546);
            return var_result;
          };    // end of method reversed
          this.methods["reversed"] = func542;
          func542.methodName = "reversed";
          func542.paramCounts = [0];
          func542.paramNames = [];
          func542.definitionLine = 631;
          func542.definitionModule = "collectionsPrelude";
          var func548 = function(argcv) {    // method reverse, line 636
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("reverse", 0, numArgs - 0);
            }
            setLineNumber(637);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call550 = selfRequest(this, "mods", [0]);
            var sum551 = request(call550, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call549 = selfRequest(this, "mods:=(1)", [1], sum551);
            setLineNumber(638);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call552 = selfRequest(this, "size", [0]);
            var var_hiIx = call552;
            setLineNumber(639);    // compilenode num
            var var_loIx = new GraceNum(1);
            setLineNumber(640);    // compilenode block
            var block554 = new GraceBlock(this, 640, 0);
            block554.guard = jsTrue;
            block554.real = function block554() {
              setLineNumber(640);    // compilenode op
              if (var_loIx === undefined) raiseUninitializedVariable("loIx");
              if (var_hiIx === undefined) raiseUninitializedVariable("hiIx");
              var opresult555 = request(var_loIx, "<(1)", [1], var_hiIx);
              return opresult555;
            };
            let applyMeth554 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth554.methodName = "apply";
            applyMeth554.paramCounts = [0];
            applyMeth554.paramNames = [];
            applyMeth554.definitionLine = 640;
            applyMeth554.definitionModule = "collectionsPrelude";
            block554.methods["apply"] = applyMeth554;
            var block556 = new GraceBlock(this, 640, 0);
            block556.guard = jsTrue;
            block556.real = function block556() {
              setLineNumber(641);    // compilenode call
              if (var_hiIx === undefined) raiseUninitializedVariable("hiIx");
              // call case 4: self request with 1 args and 0 typeArgs 
              var call557 = selfRequest(this, "at(1)", [1], var_hiIx);
              var var_hiVal = call557;
              setLineNumber(642);    // compilenode call
              if (var_hiIx === undefined) raiseUninitializedVariable("hiIx");
              if (var_loIx === undefined) raiseUninitializedVariable("loIx");
              // call case 4: self request with 1 args and 0 typeArgs 
              var call559 = selfRequest(this, "at(1)", [1], var_loIx);
              // call case 4: self request with 2 args and 0 typeArgs 
              var call558 = selfRequest(this, "at(1)put(1)", [1, 1], var_hiIx, call559);
              setLineNumber(643);    // compilenode call
              if (var_loIx === undefined) raiseUninitializedVariable("loIx");
              if (var_hiVal === undefined) raiseUninitializedVariable("hiVal");
              // call case 4: self request with 2 args and 0 typeArgs 
              var call560 = selfRequest(this, "at(1)put(1)", [1, 1], var_loIx, var_hiVal);
              setLineNumber(644);    // compilenode op
              if (var_hiIx === undefined) raiseUninitializedVariable("hiIx");
              var diff561 = request(var_hiIx, "-(1)", [1], new GraceNum(1));
              var_hiIx = diff561;
              setLineNumber(645);    // compilenode op
              if (var_loIx === undefined) raiseUninitializedVariable("loIx");
              var sum562 = request(var_loIx, "+(1)", [1], new GraceNum(1));
              var_loIx = sum562;
              return GraceDone;
            };
            let applyMeth556 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth556.methodName = "apply";
            applyMeth556.paramCounts = [0];
            applyMeth556.paramNames = [];
            applyMeth556.definitionLine = 640;
            applyMeth556.definitionModule = "collectionsPrelude";
            block556.methods["apply"] = applyMeth556;
            // call case 2: outer request
            var call553 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block554, block556);
            return this;
          };    // end of method reverse
          this.methods["reverse"] = func548;
          func548.methodName = "reverse";
          func548.paramCounts = [0];
          func548.paramNames = [];
          func548.definitionLine = 636;
          func548.definitionModule = "collectionsPrelude";
          var func563 = function(argcv, var_o) {    // method ++(_), line 649
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("++(_)", 0, numArgs - 1);
            }
            setLineNumber(650);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call565 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
            var call564 = request(call565, "withAll(1)", [1], this);
            var var_l = call564;
            setLineNumber(651);    // compilenode call
            // call case 6: other requests
            var call566 = request(var_l, "addAll(1)", [1], var_o);
            return call566;
          };    // end of method ++(_)
          this.methods["++(1)"] = func563;
          func563.methodName = "++(1)";
          func563.paramCounts = [1];
          func563.paramNames = ["o"];
          func563.definitionLine = 649;
          func563.definitionModule = "collectionsPrelude";
          var func567 = function(argcv) {    // method asString, line 653
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(654);    // compilenode string
            var string568 = new GraceString("list [");
            var var_s = string568;
            setLineNumber(655);    // compilenode block
            var block570 = new GraceBlock(this, 655, 1);
            block570.guard = jsTrue;
            block570.real = function block570(var_each) {
              setLineNumber(655);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              // call case 6: other requests
              var call571 = request(var_each, "asString", [0]);
              var opresult572 = request(var_s, "++(1)", [1], call571);
              var_s = opresult572;
              return GraceDone;
            };
            let applyMeth570 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth570.methodName = "apply(1)";
            applyMeth570.paramCounts = [1];
            applyMeth570.paramNames = ["each"];
            applyMeth570.definitionLine = 655;
            applyMeth570.definitionModule = "collectionsPrelude";
            block570.methods["apply(1)"] = applyMeth570;
            let matchesMeth570 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth570.methodName = "matches(1)";
            matchesMeth570.paramCounts = [1];
            matchesMeth570.paramNames = ["each"];
            matchesMeth570.definitionLine = 655;
            matchesMeth570.definitionModule = "collectionsPrelude";
            block570.methods["matches(1)"] = matchesMeth570;
            setLineNumber(656);    // compilenode block
            var block573 = new GraceBlock(this, 656, 0);
            block573.guard = jsTrue;
            block573.real = function block573() {
              setLineNumber(656);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              var string574 = new GraceString(", ");
              var opresult575 = request(var_s, "++(1)", [1], string574);
              var_s = opresult575;
              return GraceDone;
            };
            let applyMeth573 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth573.methodName = "apply";
            applyMeth573.paramCounts = [0];
            applyMeth573.paramNames = [];
            applyMeth573.definitionLine = 656;
            applyMeth573.definitionModule = "collectionsPrelude";
            block573.methods["apply"] = applyMeth573;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call569 = selfRequest(this, "do(1)separatedBy(1)", [1, 1], block570, block573);
            setLineNumber(657);    // compilenode string
            var string576 = new GraceString("]");
            var opresult577 = request(var_s, "++(1)", [1], string576);
            return opresult577;
          };    // end of method asString
          this.methods["asString"] = func567;
          func567.methodName = "asString";
          func567.paramCounts = [0];
          func567.paramNames = [];
          func567.definitionLine = 653;
          func567.definitionModule = "collectionsPrelude";
          var func578 = function(argcv) {    // method asDebugString, line 659
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asDebugString", 0, numArgs - 0);
            }
            setLineNumber(660);    // compilenode string
            var string579 = new GraceString("list [");
            var var_s = string579;
            setLineNumber(661);    // compilenode block
            var block581 = new GraceBlock(this, 661, 1);
            block581.guard = jsTrue;
            block581.real = function block581(var_each) {
              setLineNumber(661);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              // call case 6: other requests
              var call582 = request(var_each, "asDebugString", [0]);
              var opresult583 = request(var_s, "++(1)", [1], call582);
              var_s = opresult583;
              return GraceDone;
            };
            let applyMeth581 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth581.methodName = "apply(1)";
            applyMeth581.paramCounts = [1];
            applyMeth581.paramNames = ["each"];
            applyMeth581.definitionLine = 661;
            applyMeth581.definitionModule = "collectionsPrelude";
            block581.methods["apply(1)"] = applyMeth581;
            let matchesMeth581 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth581.methodName = "matches(1)";
            matchesMeth581.paramCounts = [1];
            matchesMeth581.paramNames = ["each"];
            matchesMeth581.definitionLine = 661;
            matchesMeth581.definitionModule = "collectionsPrelude";
            block581.methods["matches(1)"] = matchesMeth581;
            setLineNumber(662);    // compilenode block
            var block584 = new GraceBlock(this, 662, 0);
            block584.guard = jsTrue;
            block584.real = function block584() {
              setLineNumber(662);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              var string585 = new GraceString(", ");
              var opresult586 = request(var_s, "++(1)", [1], string585);
              var_s = opresult586;
              return GraceDone;
            };
            let applyMeth584 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth584.methodName = "apply";
            applyMeth584.paramCounts = [0];
            applyMeth584.paramNames = [];
            applyMeth584.definitionLine = 662;
            applyMeth584.definitionModule = "collectionsPrelude";
            block584.methods["apply"] = applyMeth584;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call580 = selfRequest(this, "do(1)separatedBy(1)", [1, 1], block581, block584);
            setLineNumber(663);    // compilenode string
            var string587 = new GraceString("]");
            var opresult588 = request(var_s, "++(1)", [1], string587);
            return opresult588;
          };    // end of method asDebugString
          this.methods["asDebugString"] = func578;
          func578.methodName = "asDebugString";
          func578.paramCounts = [0];
          func578.paramNames = [];
          func578.definitionLine = 659;
          func578.definitionModule = "collectionsPrelude";
          var func589 = function(argcv, var_element) {    // method contains(_), line 665
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("contains(_)", 0, numArgs - 1);
            }
            setLineNumber(666);    // compilenode block
            var block591 = new GraceBlock(this, 666, 1);
            block591.guard = jsTrue;
            block591.real = function block591(var_each) {
              var if592 = GraceDone;
              setLineNumber(666);    // compilenode op
              var opresult593 = request(var_each, "==(1)", [1], var_element);
              if (Grace_isTrue(opresult593)) {
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if592;
            };
            let applyMeth591 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth591.methodName = "apply(1)";
            applyMeth591.paramCounts = [1];
            applyMeth591.paramNames = ["each"];
            applyMeth591.definitionLine = 666;
            applyMeth591.definitionModule = "collectionsPrelude";
            block591.methods["apply(1)"] = applyMeth591;
            let matchesMeth591 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth591.methodName = "matches(1)";
            matchesMeth591.paramCounts = [1];
            matchesMeth591.paramNames = ["each"];
            matchesMeth591.definitionLine = 666;
            matchesMeth591.definitionModule = "collectionsPrelude";
            block591.methods["matches(1)"] = matchesMeth591;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call590 = selfRequest(this, "do(1)", [1], block591);
            setLineNumber(667);    // compilenode return
            return GraceFalse;
          };    // end of method contains(_)
          this.methods["contains(1)"] = func589;
          func589.methodName = "contains(1)";
          func589.paramCounts = [1];
          func589.paramNames = ["element"];
          func589.definitionLine = 665;
          func589.definitionModule = "collectionsPrelude";
          var func594 = function(argcv, var_block1) {    // method do(_), line 669
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("do(_)", 0, numArgs - 1);
            }
            setLineNumber(670);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call595 = selfRequest(this, "mods", [0]);
            var var_iMods = call595;
            setLineNumber(671);    // compilenode num
            var var_i = new GraceNum(1);
            setLineNumber(672);    // compilenode block
            var block597 = new GraceBlock(this, 672, 0);
            block597.guard = jsTrue;
            block597.real = function block597() {
              setLineNumber(672);    // compilenode op
              if (var_i === undefined) raiseUninitializedVariable("i");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call598 = selfRequest(this, "size", [0]);
              var opresult599 = request(var_i, "\u2264(1)", [1], call598);
              return opresult599;
            };
            let applyMeth597 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth597.methodName = "apply";
            applyMeth597.paramCounts = [0];
            applyMeth597.paramNames = [];
            applyMeth597.definitionLine = 672;
            applyMeth597.definitionModule = "collectionsPrelude";
            block597.methods["apply"] = applyMeth597;
            var block600 = new GraceBlock(this, 672, 0);
            block600.guard = jsTrue;
            block600.real = function block600() {
              var if601 = GraceDone;
              setLineNumber(673);    // compilenode op
              if (var_iMods === undefined) raiseUninitializedVariable("iMods");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call602 = selfRequest(this, "mods", [0]);
              var opresult603 = request(var_iMods, "\u2260(1)", [1], call602);
              if (Grace_isTrue(opresult603)) {
                setLineNumber(674);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call605 = selfRequest(this, "asDebugString", [0]);
                // call case 6: other requests
                if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                var call604 = request(var_ConcurrentModification, "raise(1)", [1], call605);
                if601 = call604;
              }
              setLineNumber(676);    // compilenode call
              if (var_i === undefined) raiseUninitializedVariable("i");
              // call case 4: self request with 1 args and 0 typeArgs 
              var call607 = selfRequest(this, "at(1)", [1], var_i);
              // call case 6: other requests
              var call606 = request(var_block1, "apply(1)", [1], call607);
              setLineNumber(677);    // compilenode op
              if (var_i === undefined) raiseUninitializedVariable("i");
              var sum608 = request(var_i, "+(1)", [1], new GraceNum(1));
              var_i = sum608;
              return GraceDone;
            };
            let applyMeth600 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth600.methodName = "apply";
            applyMeth600.paramCounts = [0];
            applyMeth600.paramNames = [];
            applyMeth600.definitionLine = 672;
            applyMeth600.definitionModule = "collectionsPrelude";
            block600.methods["apply"] = applyMeth600;
            // call case 2: outer request
            var call596 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block597, block600);
            return call596;
          };    // end of method do(_)
          this.methods["do(1)"] = func594;
          func594.methodName = "do(1)";
          func594.paramCounts = [1];
          func594.paramNames = ["block1"];
          func594.definitionLine = 669;
          func594.definitionModule = "collectionsPrelude";
          var func609 = function(argcv) {    // method iterator, line 680
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("list.withAll(_).iterator", "collectionsPrelude", 680);
            var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method iterator
          this.methods["iterator"] = func609;
          func609.methodName = "iterator";
          func609.paramCounts = [0];
          func609.paramNames = [];
          func609.definitionLine = 680;
          func609.definitionModule = "collectionsPrelude";
          var func610 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 680
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            var obj611_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_681");
              this.outer_collectionsPrelude_681 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              this.data.iMods = undefined;
              var reader612_iMods = function() {  // reader method iMods
                  if (this.data.iMods === undefined) raiseUninitializedVariable("iMods");
                  return this.data.iMods;
              };
              reader612_iMods.isDef = true;
              reader612_iMods.confidential = true;
              this.methods["iMods"] = reader612_iMods;
              this.data.idx = undefined;
              var reader613_idx = function() {  // reader method idx
                  if (this.data.idx === undefined) raiseUninitializedVariable("idx");
                  return this.data.idx;
              };
              reader613_idx.isVar = true;
              reader613_idx.confidential = true;
              this.methods["idx"] = reader613_idx;
              var writer614_idx = function(argcv, n) {   // writer method idx:=(_)
                this.data.idx = n;
                return GraceDone;
              };
              writer614_idx.confidential = true;
              this.methods["idx:=(1)"] = writer614_idx;
              var func615 = function(argcv) {    // method asDebugString, line 684
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(684);    // compilenode string
                var string616 = new GraceString("");
                // call case 4: self request with 0 args and 0 typeArgs 
                var call617 = selfRequest(this, "asString", [0]);
                var opresult618 = request(string616, "++(1)", [1], call617);
                var string619 = new GraceString("\u27ea");
                var opresult620 = request(opresult618, "++(1)", [1], string619);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call621 = selfRequest(this, "idx", [0]);
                var opresult622 = request(opresult620, "++(1)", [1], call621);
                var string623 = new GraceString("\u27eb");
                var opresult624 = request(opresult622, "++(1)", [1], string623);
                return opresult624;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func615;
              func615.methodName = "asDebugString";
              func615.paramCounts = [0];
              func615.paramNames = [];
              func615.definitionLine = 684;
              func615.definitionModule = "collectionsPrelude";
              var func625 = function(argcv) {    // method asString, line 685
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asString", 0, numArgs - 0);
                }
                setLineNumber(685);    // compilenode string
                var string626 = new GraceString("aListIterator");
                return string626;
              };    // end of method asString
              this.methods["asString"] = func625;
              func625.methodName = "asString";
              func625.paramCounts = [0];
              func625.paramNames = [];
              func625.definitionLine = 685;
              func625.definitionModule = "collectionsPrelude";
              var func627 = function(argcv) {    // method hasNext, line 686
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("hasNext", 0, numArgs - 0);
                }
                setLineNumber(686);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call628 = selfRequest(this, "idx", [0]);
                // call case 2: outer request
                var call629 = selfRequest(this.outer_collectionsPrelude_681, "size", [0]);
                var opresult630 = request(call628, "\u2264(1)", [1], call629);
                return opresult630;
              };    // end of method hasNext
              this.methods["hasNext"] = func627;
              func627.methodName = "hasNext";
              func627.paramCounts = [0];
              func627.paramNames = [];
              func627.definitionLine = 686;
              func627.definitionModule = "collectionsPrelude";
              var func631 = function(argcv) {    // method next, line 687
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("next", 0, numArgs - 0);
                }
                var if632 = GraceDone;
                setLineNumber(688);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call633 = selfRequest(this, "iMods", [0]);
                // call case 2: outer request
                var call634 = selfRequest(this.outer_collectionsPrelude_681, "mods", [0]);
                var opresult635 = request(call633, "\u2260(1)", [1], call634);
                if (Grace_isTrue(opresult635)) {
                  setLineNumber(689);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call637 = selfRequest(this, "asDebugString", [0]);
                  // call case 6: other requests
                  if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                  var call636 = request(var_ConcurrentModification, "raise(1)", [1], call637);
                  if632 = call636;
                }
                var if638 = GraceDone;
                setLineNumber(691);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call639 = selfRequest(this, "idx", [0]);
                // call case 2: outer request
                var call640 = selfRequest(this.outer_collectionsPrelude_681, "size", [0]);
                var opresult641 = request(call639, ">(1)", [1], call640);
                if (Grace_isTrue(opresult641)) {
                  var string643 = new GraceString("on list");
                  // call case 6: other requests
                  if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                  var call642 = request(var_IteratorExhausted, "raise(1)", [1], string643);
                  if638 = call642;
                }
                setLineNumber(692);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call645 = selfRequest(this, "idx", [0]);
                // call case 2: outer request
                var call644 = selfRequest(this.outer_collectionsPrelude_681, "at(1)", [1], call645);
                var var_ret = call644;
                setLineNumber(693);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call647 = selfRequest(this, "idx", [0]);
                var sum648 = request(call647, "+(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call646 = selfRequest(this, "idx:=(1)", [1], sum648);
                return var_ret;
              };    // end of method next
              this.methods["next"] = func631;
              func631.methodName = "next";
              func631.paramCounts = [0];
              func631.paramNames = [];
              func631.definitionLine = 687;
              func631.definitionModule = "collectionsPrelude";
              this.mutable = true;
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 681;
                  m.definitionModule = "collectionsPrelude";
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
              var obj611_init = function() {    // init of object on line 681
                setLineNumber(682);    // compilenode member
                // call case 2: outer request
                var call649 = selfRequest(this.outer_collectionsPrelude_681, "mods", [0]);
                this.data.iMods = call649;
                setLineNumber(683);    // compilenode num
                this.data.idx = new GraceNum(1);
              };
              return obj611_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj611_init = obj611_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj611_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method iterator$build(_,_,_)
          this.methods["iterator$build(3)"] = func610;
          func610.methodName = "iterator$build(3)";
          func610.paramCounts = [0];
          func610.paramNames = [];
          func610.definitionLine = 680;
          func610.definitionModule = "collectionsPrelude";
          var func650 = function(argcv) {     // accessor method values
            const numArgs = arguments.length - 1;
            if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
            return this;
          };    // end of method values
          this.methods["values"] = func650;
          func650.methodName = "values";
          func650.paramCounts = [0];
          func650.paramNames = [];
          func650.definitionLine = 698;
          func650.definitionModule = "collectionsPrelude";
          var func651 = function(argcv) {    // method keys, line 701
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("keys", 0, numArgs - 0);
            }
            setLineNumber(702);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call652 = selfRequest(this, "indices", [0]);
            return call652;
          };    // end of method keys
          this.methods["keys"] = func651;
          func651.methodName = "keys";
          func651.paramCounts = [0];
          func651.paramNames = [];
          func651.definitionLine = 701;
          func651.definitionModule = "collectionsPrelude";
          var func653 = function(argcv, var_sortBlock) {    // method sortBy(_), line 704
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("sortBy(_)", 0, numArgs - 1);
            }
            setLineNumber(705);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call655 = selfRequest(this, "mods", [0]);
            var sum656 = request(call655, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call654 = selfRequest(this, "mods:=(1)", [1], sum656);
            setLineNumber(706);    // compilenode call
            var result = GraceDone;    // start native code from line 706
            var compareFun = function compareFun(a, b) {
                    var res = callmethod(var_sortBlock, "apply(2)", [2], a, b);
                    if (res.className == "number") return res._value;
                    throw new GraceExceptionPacket(TypeErrorObject,
                           new GraceString("sort block in list.sortBy method did not return a number"));
          };
          this._value.sort(compareFun);   // end native code insertion
            return this;
          };    // end of method sortBy(_)
          this.methods["sortBy(1)"] = func653;
          func653.methodName = "sortBy(1)";
          func653.paramCounts = [1];
          func653.paramNames = ["sortBlock"];
          func653.definitionLine = 704;
          func653.definitionModule = "collectionsPrelude";
          var func657 = function(argcv) {    // method sort, line 715
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("sort", 0, numArgs - 0);
            }
            setLineNumber(716);    // compilenode block
            var block659 = new GraceBlock(this, 716, 2);
            block659.guard = jsTrue;
            block659.real = function block659(var_l, var_r) {
              var if660 = GraceDone;
              setLineNumber(717);    // compilenode op
              var opresult661 = request(var_l, "==(1)", [1], var_r);
              if (Grace_isTrue(opresult661)) {
                if660 = new GraceNum(0);
              } else {
                var if662 = GraceDone;
                setLineNumber(718);    // compilenode op
                var opresult663 = request(var_l, "<(1)", [1], var_r);
                if (Grace_isTrue(opresult663)) {
                  // call case 6: other requests
                  var call664 = request(new GraceNum(1), "prefix-", [0]);
                  if662 = call664;
                } else {
                  setLineNumber(719);    // compilenode num
                  if662 = new GraceNum(1);
                }
                if660 = if662;
              }
              return if660;
            };
            let applyMeth659 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth659.methodName = "apply(2)";
            applyMeth659.paramCounts = [2];
            applyMeth659.paramNames = ["l", "r"];
            applyMeth659.definitionLine = 716;
            applyMeth659.definitionModule = "collectionsPrelude";
            block659.methods["apply(2)"] = applyMeth659;
            let matchesMeth659 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth659.methodName = "matches(2)";
            matchesMeth659.paramCounts = [2];
            matchesMeth659.paramNames = ["l", "r"];
            matchesMeth659.definitionLine = 716;
            matchesMeth659.definitionModule = "collectionsPrelude";
            block659.methods["matches(2)"] = matchesMeth659;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call658 = selfRequest(this, "sortBy(1)", [1], block659);
            return call658;
          };    // end of method sort
          this.methods["sort"] = func657;
          func657.methodName = "sort";
          func657.paramCounts = [0];
          func657.paramNames = [];
          func657.definitionLine = 715;
          func657.definitionModule = "collectionsPrelude";
          var func665 = function(argcv, var_sortBlock) {    // method sortedBy(_), line 722
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
            }
            setLineNumber(723);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call667 = selfRequest(this, "copy", [0]);
            var call666 = request(call667, "sortBy(1)", [1], var_sortBlock);
            return call666;
          };    // end of method sortedBy(_)
          this.methods["sortedBy(1)"] = func665;
          func665.methodName = "sortedBy(1)";
          func665.paramCounts = [1];
          func665.paramNames = ["sortBlock"];
          func665.definitionLine = 722;
          func665.definitionModule = "collectionsPrelude";
          var func668 = function(argcv) {    // method sorted, line 725
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("sorted", 0, numArgs - 0);
            }
            setLineNumber(726);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call670 = selfRequest(this, "copy", [0]);
            var call669 = request(call670, "sort", [0]);
            return call669;
          };    // end of method sorted
          this.methods["sorted"] = func668;
          func668.methodName = "sorted";
          func668.paramCounts = [0];
          func668.paramNames = [];
          func668.definitionLine = 725;
          func668.definitionModule = "collectionsPrelude";
          var func671 = function(argcv) {    // method copy, line 728
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("copy", 0, numArgs - 0);
            }
            setLineNumber(729);    // compilenode call
            // call case 2: outer request
            var call672 = selfRequest(this.outer_collectionsPrelude_494, "withAll(1)", [1], this);
            return call672;
          };    // end of method copy
          this.methods["copy"] = func671;
          func671.methodName = "copy";
          func671.paramCounts = [0];
          func671.paramNames = [];
          func671.definitionLine = 728;
          func671.definitionModule = "collectionsPrelude";
          var func673 = function(argcv, var_source) {    // method <<(_), line 731
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("<<(_)", 0, numArgs - 1);
            }
            setLineNumber(732);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call674 = selfRequest(this, "addAll(1)", [1], var_source);
            return call674;
          };    // end of method <<(_)
          this.methods["<<(1)"] = func673;
          func673.methodName = "<<(1)";
          func673.paramCounts = [1];
          func673.paramNames = ["source"];
          func673.definitionLine = 731;
          func673.definitionModule = "collectionsPrelude";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 494;
              m.definitionModule = "collectionsPrelude";
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
          var obj449_init = function() {    // init of object on line 494
            setLineNumber(497);    // compilenode num
            this.data.mods = new GraceNum(0);
            setLineNumber(498);    // compilenode call
            var result = GraceDone;    // start native code from line 498
            this._value = [];
            this.className = 'list';   // end native code insertion
            setLineNumber(500);    // compilenode block
            var block676 = new GraceBlock(this, 500, 1);
            block676.guard = jsTrue;
            block676.real = function block676(var_each) {
              setLineNumber(501);    // compilenode call
              var result = GraceDone;    // start native code from line 501
              this._value.push(var_each);   // end native code insertion
              return result;
            };
            let applyMeth676 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth676.methodName = "apply(1)";
            applyMeth676.paramCounts = [1];
            applyMeth676.paramNames = ["each"];
            applyMeth676.definitionLine = 500;
            applyMeth676.definitionModule = "collectionsPrelude";
            block676.methods["apply(1)"] = applyMeth676;
            let matchesMeth676 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth676.methodName = "matches(1)";
            matchesMeth676.paramCounts = [1];
            matchesMeth676.paramNames = ["each"];
            matchesMeth676.definitionLine = 500;
            matchesMeth676.definitionModule = "collectionsPrelude";
            block676.methods["matches(1)"] = matchesMeth676;
            // call case 6: other requests
            var call675 = request(var_a, "do(1)", [1], block676);
          };
          return obj449_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj449_init = obj449_build.call(inheritingObject, null, var_a, this, aliases, exclusions);
        return obj449_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method withAll(_)$build(_,_,_)
      this.methods["withAll(1)$build(3)"] = func448;
      func448.methodName = "withAll(1)$build(3)";
      func448.paramCounts = [1];
      func448.paramNames = ["a"];
      func448.definitionLine = 494;
      func448.definitionModule = "collectionsPrelude";
      var func677 = function(argcv, var_source) {    // method <<(_), line 736
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(736);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call678 = selfRequest(this, "withAll(1)", [1], var_source);
        return call678;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func677;
      func677.methodName = "<<(1)";
      func677.paramCounts = [1];
      func677.paramNames = ["source"];
      func677.definitionLine = 736;
      func677.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 486;
          m.definitionModule = "collectionsPrelude";
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
      var obj438_init = function() {    // init of object on line 486
      };
      return obj438_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj438_init = obj438_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj438_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method list$build(_,_,_)
  this.methods["list$build(3)"] = func437;
  func437.methodName = "list$build(3)";
  func437.paramCounts = [0];
  func437.paramNames = [];
  func437.typeParamNames = ["T"];
  func437.definitionLine = 486;
  func437.definitionModule = "collectionsPrelude";
  var func679 = function(argcv, var_T) {    // method set, line 760
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("set", 1, numArgs - 0);
    }
    var ouc = emptyGraceObject("set", "collectionsPrelude", 760);
    var ouc_init = this.methods["set$build(3)"].call(this, null, ouc, [], [], var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method set
  this.methods["set"] = func679;
  func679.methodName = "set";
  func679.paramCounts = [0];
  func679.paramNames = [];
  func679.typeParamNames = ["T"];
  func679.definitionLine = 760;
  func679.definitionModule = "collectionsPrelude";
  var func680 = function(argcv, inheritingObject, aliases, exclusions, var_T) {    // method set$build(_,_,_), line 760
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 1)) {
        raiseTypeArgError("set", 1, numArgs - 0);
    }
    var obj681_build = function(ignore, outerObj, aliases, exclusions, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_760");
      this.outer_collectionsPrelude_760 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func682 = function(argcv) {    // method asString, line 762
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(762);    // compilenode string
        var string683 = new GraceString("the set factory");
        return string683;
      };    // end of method asString
      this.methods["asString"] = func682;
      func682.methodName = "asString";
      func682.paramCounts = [0];
      func682.paramNames = [];
      func682.definitionLine = 762;
      func682.definitionModule = "collectionsPrelude";
      var func684 = function(argcv, var_a) {    // method withAll(_), line 764
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        setLineNumber(765);    // compilenode block
        var block687 = new GraceBlock(this, 765, 0);
        block687.guard = jsTrue;
        block687.real = function block687() {
          setLineNumber(765);    // compilenode num
          return new GraceNum(2);
        };
        let applyMeth687 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth687.methodName = "apply";
        applyMeth687.paramCounts = [0];
        applyMeth687.paramNames = [];
        applyMeth687.definitionLine = 765;
        applyMeth687.definitionModule = "collectionsPrelude";
        block687.methods["apply"] = applyMeth687;
        // call case 6: other requests
        var call686 = request(var_a, "sizeIfUnknown(1)", [1], block687);
        var prod688 = request(call686, "*(1)", [1], new GraceNum(3));
        var sum689 = request(prod688, "+(1)", [1], new GraceNum(1));
        // call case 2: outer request
        var call685 = selfRequest(importedModules["collectionsPrelude"], "max(2)", [2], sum689, new GraceNum(8));
        var var_cap = call685;
        setLineNumber(766);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call690 = selfRequest(this, "ofCapacity(1)", [1], var_cap);
        var var_result = call690;
        setLineNumber(767);    // compilenode block
        var block692 = new GraceBlock(this, 767, 1);
        block692.guard = jsTrue;
        block692.real = function block692(var_x) {
          setLineNumber(767);    // compilenode call
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call693 = request(var_result, "add(1)", [1], var_x);
          return call693;
        };
        let applyMeth692 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth692.methodName = "apply(1)";
        applyMeth692.paramCounts = [1];
        applyMeth692.paramNames = ["x"];
        applyMeth692.definitionLine = 767;
        applyMeth692.definitionModule = "collectionsPrelude";
        block692.methods["apply(1)"] = applyMeth692;
        let matchesMeth692 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth692.methodName = "matches(1)";
        matchesMeth692.paramCounts = [1];
        matchesMeth692.paramNames = ["x"];
        matchesMeth692.definitionLine = 767;
        matchesMeth692.definitionModule = "collectionsPrelude";
        block692.methods["matches(1)"] = matchesMeth692;
        // call case 6: other requests
        var call691 = request(var_a, "do(1)", [1], block692);
        return var_result;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func684;
      func684.methodName = "withAll(1)";
      func684.paramCounts = [1];
      func684.paramNames = ["a"];
      func684.definitionLine = 764;
      func684.definitionModule = "collectionsPrelude";
      var func694 = function(argcv, var_x) {    // method with(_), line 770
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("with(_)", 0, numArgs - 1);
        }
        setLineNumber(771);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call696 = selfRequest(this, "empty", [0]);
        var call695 = request(call696, "add(1)", [1], var_x);
        return call695;
      };    // end of method with(_)
      func694.paramTypes = [];
      func694.paramTypes.push([]);
      this.methods["with(1)"] = func694;
      func694.methodName = "with(1)";
      func694.paramCounts = [1];
      func694.paramNames = ["x"];
      func694.definitionLine = 770;
      func694.definitionModule = "collectionsPrelude";
      var func697 = function(argcv) {    // method empty, line 773
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        setLineNumber(774);    // compilenode num
        // call case 4: self request with 1 args and 0 typeArgs 
        var call698 = selfRequest(this, "ofCapacity(1)", [1], new GraceNum(8));
        return call698;
      };    // end of method empty
      this.methods["empty"] = func697;
      func697.methodName = "empty";
      func697.paramCounts = [0];
      func697.paramNames = [];
      func697.definitionLine = 773;
      func697.definitionModule = "collectionsPrelude";
      var func699 = function(argcv, var_source) {    // method <<(_), line 777
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(777);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call700 = selfRequest(this, "withAll(1)", [1], var_source);
        return call700;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func699;
      func699.methodName = "<<(1)";
      func699.paramCounts = [1];
      func699.paramNames = ["source"];
      func699.definitionLine = 777;
      func699.definitionModule = "collectionsPrelude";
      var func701 = function(argcv, var_cap) {    // method ofCapacity(_), line 779
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("ofCapacity(_)", 0, numArgs - 1);
        }
        var ouc = emptyGraceObject("set.ofCapacity(_)", "collectionsPrelude", 779);
        var ouc_init = this.methods["ofCapacity(1)$build(3)"].call(this, null, var_cap, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method ofCapacity(_)
      func701.confidential = true;
      this.methods["ofCapacity(1)"] = func701;
      func701.methodName = "ofCapacity(1)";
      func701.paramCounts = [1];
      func701.paramNames = ["cap"];
      func701.definitionLine = 779;
      func701.definitionModule = "collectionsPrelude";
      var func702 = function(argcv, var_cap, inheritingObject, aliases, exclusions) {    // method ofCapacity(_)$build(_,_,_), line 779
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("ofCapacity(_)", 0, numArgs - 1);
        }
        var obj703_build = function(ignore, var_cap, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_779");
          this.outer_collectionsPrelude_779 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(780);    // reuse call
          var initFun704 = selfRequest(importedModules["collectionsPrelude"], "collection$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.mods = undefined;
          var reader705_mods = function() {  // reader method mods
              if (this.data.mods === undefined) raiseUninitializedVariable("mods");
              return this.data.mods;
          };
          reader705_mods.isVar = true;
          this.methods["mods"] = reader705_mods;
          var writer706_mods = function(argcv, n) {   // writer method mods:=(_)
            this.data.mods = n;
            return GraceDone;
          };
          writer706_mods.confidential = true;
          this.methods["mods:=(1)"] = writer706_mods;
          this.data.inner = undefined;
          var reader707_inner = function() {  // reader method inner
              if (this.data.inner === undefined) raiseUninitializedVariable("inner");
              return this.data.inner;
          };
          reader707_inner.isVar = true;
          reader707_inner.confidential = true;
          this.methods["inner"] = reader707_inner;
          var writer708_inner = function(argcv, n) {   // writer method inner:=(_)
            this.data.inner = n;
            return GraceDone;
          };
          writer708_inner.confidential = true;
          this.methods["inner:=(1)"] = writer708_inner;
          this.data.size = undefined;
          var reader709_size = function() {  // reader method size
              if (this.data.size === undefined) raiseUninitializedVariable("size");
              return this.data.size;
          };
          reader709_size.isVar = true;
          this.methods["size"] = reader709_size;
          var writer710_size = function(argcv, n) {   // writer method size:=(_)
            this.data.size = n;
            return GraceDone;
          };
          writer710_size.confidential = true;
          this.methods["size:=(1)"] = writer710_size;
          var func711 = function(argcv) {    // method isEmpty, line 788
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("isEmpty", 0, numArgs - 0);
            }
            setLineNumber(788);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call712 = selfRequest(this, "size", [0]);
            var opresult713 = request(call712, "==(1)", [1], new GraceNum(0));
            return opresult713;
          };    // end of method isEmpty
          this.methods["isEmpty"] = func711;
          func711.methodName = "isEmpty";
          func711.paramCounts = [0];
          func711.paramNames = [];
          func711.definitionLine = 788;
          func711.definitionModule = "collectionsPrelude";
          var func714 = function(argcv, var_elements) {    // method addAll(_), line 790
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addAll(_)", 0, numArgs - 1);
            }
            setLineNumber(791);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call716 = selfRequest(this, "mods", [0]);
            var sum717 = request(call716, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call715 = selfRequest(this, "mods:=(1)", [1], sum717);
            setLineNumber(792);    // compilenode block
            var block719 = new GraceBlock(this, 792, 1);
            block719.guard = jsTrue;
            block719.real = function block719(var_x) {
              var if720 = GraceDone;
              setLineNumber(793);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 1 args and 0 typeArgs 
              var call722 = selfRequest(this, "contains(1)", [1], var_x);
              var call721 = request(call722, "prefix!", [0]);
              if (Grace_isTrue(call721)) {
                setLineNumber(794);    // compilenode call
                // call case 4: self request with 1 args and 0 typeArgs 
                var call723 = selfRequest(this, "findPositionForAdd(1)", [1], var_x);
                var var_t = call723;
                setLineNumber(795);    // compilenode call
                if (var_t === undefined) raiseUninitializedVariable("t");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call725 = selfRequest(this, "inner", [0]);
                var call724 = request(call725, "at(1)put(1)", [1, 1], var_t, var_x);
                setLineNumber(796);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call727 = selfRequest(this, "size", [0]);
                var sum728 = request(call727, "+(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call726 = selfRequest(this, "size:=(1)", [1], sum728);
                var if729 = GraceDone;
                setLineNumber(797);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call730 = selfRequest(this, "size", [0]);
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call732 = selfRequest(this, "inner", [0]);
                var call731 = request(call732, "size", [0]);
                var quotient733 = request(call731, "/(1)", [1], new GraceNum(2));
                var opresult734 = request(call730, ">(1)", [1], quotient733);
                if (Grace_isTrue(opresult734)) {
                  setLineNumber(798);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call735 = selfRequest(this, "expand", [0]);
                  if729 = call735;
                }
                if720 = if729;
              }
              return if720;
            };
            let applyMeth719 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth719.methodName = "apply(1)";
            applyMeth719.paramCounts = [1];
            applyMeth719.paramNames = ["x"];
            applyMeth719.definitionLine = 792;
            applyMeth719.definitionModule = "collectionsPrelude";
            block719.methods["apply(1)"] = applyMeth719;
            let matchesMeth719 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth719.methodName = "matches(1)";
            matchesMeth719.paramCounts = [1];
            matchesMeth719.paramNames = ["x"];
            matchesMeth719.definitionLine = 792;
            matchesMeth719.definitionModule = "collectionsPrelude";
            block719.methods["matches(1)"] = matchesMeth719;
            // call case 2: outer request
            var call718 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_elements, block719);
            return this;
          };    // end of method addAll(_)
          this.methods["addAll(1)"] = func714;
          func714.methodName = "addAll(1)";
          func714.paramCounts = [1];
          func714.paramNames = ["elements"];
          func714.definitionLine = 790;
          func714.definitionModule = "collectionsPrelude";
          var func736 = function(argcv, var_x) {    // method add(_), line 805
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("add(_)", 0, numArgs - 1);
            }
            var if737 = GraceDone;
            setLineNumber(806);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 1 args and 0 typeArgs 
            var call739 = selfRequest(this, "contains(1)", [1], var_x);
            var call738 = request(call739, "prefix!", [0]);
            if (Grace_isTrue(call738)) {
              setLineNumber(807);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call741 = selfRequest(this, "mods", [0]);
              var sum742 = request(call741, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call740 = selfRequest(this, "mods:=(1)", [1], sum742);
              setLineNumber(808);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call743 = selfRequest(this, "findPositionForAdd(1)", [1], var_x);
              var var_t = call743;
              setLineNumber(809);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call745 = selfRequest(this, "inner", [0]);
              var call744 = request(call745, "at(1)put(1)", [1, 1], var_t, var_x);
              setLineNumber(810);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call747 = selfRequest(this, "size", [0]);
              var sum748 = request(call747, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call746 = selfRequest(this, "size:=(1)", [1], sum748);
              var if749 = GraceDone;
              setLineNumber(811);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call750 = selfRequest(this, "size", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call752 = selfRequest(this, "inner", [0]);
              var call751 = request(call752, "size", [0]);
              var quotient753 = request(call751, "/(1)", [1], new GraceNum(2));
              var opresult754 = request(call750, ">(1)", [1], quotient753);
              if (Grace_isTrue(opresult754)) {
                setLineNumber(812);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call755 = selfRequest(this, "expand", [0]);
                if749 = call755;
              }
              if737 = if749;
            }
            return this;
          };    // end of method add(_)
          func736.paramTypes = [];
          func736.paramTypes.push([]);
          this.methods["add(1)"] = func736;
          func736.methodName = "add(1)";
          func736.paramCounts = [1];
          func736.paramNames = ["x"];
          func736.definitionLine = 805;
          func736.definitionModule = "collectionsPrelude";
          var func756 = function(argcv, var_elements) {    // method removeAll(_), line 818
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAll(_)", 0, numArgs - 1);
            }
            setLineNumber(819);    // compilenode block
            var block758 = new GraceBlock(this, 819, 1);
            block758.guard = jsTrue;
            block758.real = function block758(var_x) {
              setLineNumber(820);    // compilenode block
              var block760 = new GraceBlock(this, 820, 0);
              block760.guard = jsTrue;
              block760.real = function block760() {
                setLineNumber(821);    // compilenode string
                var string762 = new GraceString("set does not contain ");
                var opresult763 = request(string762, "++(1)", [1], var_x);
                var string764 = new GraceString("");
                var opresult765 = request(opresult763, "++(1)", [1], string764);
                // call case 6: other requests
                if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
                var call761 = request(var_NoSuchObject, "raise(1)", [1], opresult765);
                return call761;
              };
              let applyMeth760 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth760.methodName = "apply";
              applyMeth760.paramCounts = [0];
              applyMeth760.paramNames = [];
              applyMeth760.definitionLine = 820;
              applyMeth760.definitionModule = "collectionsPrelude";
              block760.methods["apply"] = applyMeth760;
              // call case 4: self request with 2 args and 0 typeArgs 
              var call759 = selfRequest(this, "remove(1)ifAbsent(1)", [1, 1], var_x, block760);
              return call759;
            };
            let applyMeth758 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth758.methodName = "apply(1)";
            applyMeth758.paramCounts = [1];
            applyMeth758.paramNames = ["x"];
            applyMeth758.definitionLine = 819;
            applyMeth758.definitionModule = "collectionsPrelude";
            block758.methods["apply(1)"] = applyMeth758;
            let matchesMeth758 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth758.methodName = "matches(1)";
            matchesMeth758.paramCounts = [1];
            matchesMeth758.paramNames = ["x"];
            matchesMeth758.definitionLine = 819;
            matchesMeth758.definitionModule = "collectionsPrelude";
            block758.methods["matches(1)"] = matchesMeth758;
            // call case 2: outer request
            var call757 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_elements, block758);
            return this;
          };    // end of method removeAll(_)
          this.methods["removeAll(1)"] = func756;
          func756.methodName = "removeAll(1)";
          func756.paramCounts = [1];
          func756.paramNames = ["elements"];
          func756.definitionLine = 818;
          func756.definitionModule = "collectionsPrelude";
          var func766 = function(argcv, var_elements, var_block) {    // method removeAll(_)ifAbsent(_), line 826
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeAll(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(827);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call768 = selfRequest(this, "mods", [0]);
            var sum769 = request(call768, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call767 = selfRequest(this, "mods:=(1)", [1], sum769);
            setLineNumber(828);    // compilenode block
            var block771 = new GraceBlock(this, 828, 1);
            block771.guard = jsTrue;
            block771.real = function block771(var_x) {
              setLineNumber(829);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call772 = selfRequest(this, "findPosition(1)", [1], var_x);
              var var_t = call772;
              var if773 = GraceDone;
              setLineNumber(830);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call775 = selfRequest(this, "inner", [0]);
              var call774 = request(call775, "at(1)", [1], var_t);
              var opresult776 = request(call774, "==(1)", [1], var_x);
              if (Grace_isTrue(opresult776)) {
                setLineNumber(831);    // compilenode call
                if (var_t === undefined) raiseUninitializedVariable("t");
                if (var_removed === undefined) raiseUninitializedVariable("removed");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call778 = selfRequest(this, "inner", [0]);
                var call777 = request(call778, "at(1)put(1)", [1, 1], var_t, var_removed);
                setLineNumber(832);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call780 = selfRequest(this, "size", [0]);
                var diff781 = request(call780, "-(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call779 = selfRequest(this, "size:=(1)", [1], diff781);
                if773 = call779;
              } else {
                setLineNumber(834);    // compilenode call
                // call case 6: other requests
                var call782 = request(var_block, "apply(1)", [1], var_x);
                if773 = call782;
              }
              return if773;
            };
            let applyMeth771 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth771.methodName = "apply(1)";
            applyMeth771.paramCounts = [1];
            applyMeth771.paramNames = ["x"];
            applyMeth771.definitionLine = 828;
            applyMeth771.definitionModule = "collectionsPrelude";
            block771.methods["apply(1)"] = applyMeth771;
            let matchesMeth771 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth771.methodName = "matches(1)";
            matchesMeth771.paramCounts = [1];
            matchesMeth771.paramNames = ["x"];
            matchesMeth771.definitionLine = 828;
            matchesMeth771.definitionModule = "collectionsPrelude";
            block771.methods["matches(1)"] = matchesMeth771;
            // call case 2: outer request
            var call770 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_elements, block771);
            return this;
          };    // end of method removeAll(_)ifAbsent(_)
          this.methods["removeAll(1)ifAbsent(1)"] = func766;
          func766.methodName = "removeAll(1)ifAbsent(1)";
          func766.paramCounts = [1, 1];
          func766.paramNames = ["elements", "block"];
          func766.definitionLine = 826;
          func766.definitionModule = "collectionsPrelude";
          var func783 = function(argcv) {    // method clear, line 839
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("clear", 0, numArgs - 0);
            }
            setLineNumber(840);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call785 = selfRequest(this, "mods", [0]);
            var sum786 = request(call785, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call784 = selfRequest(this, "mods:=(1)", [1], sum786);
            setLineNumber(841);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call789 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call788 = request(call789, "new(1)", [1], var_cap);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call787 = selfRequest(this, "inner:=(1)", [1], call788);
            setLineNumber(842);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call790 = selfRequest(this, "size:=(1)", [1], new GraceNum(0));
            return this;
          };    // end of method clear
          this.methods["clear"] = func783;
          func783.methodName = "clear";
          func783.paramCounts = [0];
          func783.paramNames = [];
          func783.definitionLine = 839;
          func783.definitionModule = "collectionsPrelude";
          var func791 = function(argcv, var_elt, var_block) {    // method remove(_)ifAbsent(_), line 846
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("remove(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(847);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call792 = selfRequest(this, "findPosition(1)", [1], var_elt);
            var var_t = call792;
            var if793 = GraceDone;
            setLineNumber(848);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call795 = selfRequest(this, "inner", [0]);
            var call794 = request(call795, "at(1)", [1], var_t);
            var opresult796 = request(call794, "==(1)", [1], var_elt);
            if (Grace_isTrue(opresult796)) {
              setLineNumber(849);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call798 = selfRequest(this, "inner", [0]);
              var call797 = request(call798, "at(1)put(1)", [1, 1], var_t, var_removed);
              setLineNumber(850);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call800 = selfRequest(this, "mods", [0]);
              var sum801 = request(call800, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call799 = selfRequest(this, "mods:=(1)", [1], sum801);
              setLineNumber(851);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call803 = selfRequest(this, "size", [0]);
              var diff804 = request(call803, "-(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call802 = selfRequest(this, "size:=(1)", [1], diff804);
              if793 = call802;
            } else {
              setLineNumber(853);    // compilenode member
              // call case 6: other requests
              var call805 = request(var_block, "apply", [0]);
              if793 = call805;
            }
            return this;
          };    // end of method remove(_)ifAbsent(_)
          func791.paramTypes = [];
          func791.paramTypes.push([]);
          func791.paramTypes.push([]);
          this.methods["remove(1)ifAbsent(1)"] = func791;
          func791.methodName = "remove(1)ifAbsent(1)";
          func791.paramCounts = [1, 1];
          func791.paramNames = ["elt", "block"];
          func791.definitionLine = 846;
          func791.definitionModule = "collectionsPrelude";
          var func806 = function(argcv, var_elt) {    // method remove(_), line 858
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("remove(_)", 0, numArgs - 1);
            }
            setLineNumber(859);    // compilenode block
            var block808 = new GraceBlock(this, 859, 0);
            block808.guard = jsTrue;
            block808.real = function block808() {
              setLineNumber(860);    // compilenode string
              var string810 = new GraceString("set does not contain ");
              var opresult811 = request(string810, "++(1)", [1], var_elt);
              var string812 = new GraceString("");
              var opresult813 = request(opresult811, "++(1)", [1], string812);
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call809 = request(var_NoSuchObject, "raise(1)", [1], opresult813);
              return call809;
            };
            let applyMeth808 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth808.methodName = "apply";
            applyMeth808.paramCounts = [0];
            applyMeth808.paramNames = [];
            applyMeth808.definitionLine = 859;
            applyMeth808.definitionModule = "collectionsPrelude";
            block808.methods["apply"] = applyMeth808;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call807 = selfRequest(this, "remove(1)ifAbsent(1)", [1, 1], var_elt, block808);
            return this;
          };    // end of method remove(_)
          func806.paramTypes = [];
          func806.paramTypes.push([]);
          this.methods["remove(1)"] = func806;
          func806.methodName = "remove(1)";
          func806.paramCounts = [1];
          func806.paramNames = ["elt"];
          func806.definitionLine = 858;
          func806.definitionModule = "collectionsPrelude";
          var func814 = function(argcv, var_x) {    // method contains(_), line 865
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("contains(_)", 0, numArgs - 1);
            }
            setLineNumber(866);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call815 = selfRequest(this, "findPosition(1)", [1], var_x);
            var var_t = call815;
            var if816 = GraceDone;
            setLineNumber(867);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call818 = selfRequest(this, "inner", [0]);
            var call817 = request(call818, "at(1)", [1], var_t);
            var opresult819 = request(call817, "==(1)", [1], var_x);
            if (Grace_isTrue(opresult819)) {
              setLineNumber(868);    // compilenode return
              return GraceTrue;
            }
            setLineNumber(870);    // compilenode return
            return GraceFalse;
          };    // end of method contains(_)
          this.methods["contains(1)"] = func814;
          func814.methodName = "contains(1)";
          func814.paramCounts = [1];
          func814.paramNames = ["x"];
          func814.definitionLine = 865;
          func814.definitionModule = "collectionsPrelude";
          var func820 = function(argcv, var_booleanBlock) {    // method includes(_), line 872
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("includes(_)", 0, numArgs - 1);
            }
            setLineNumber(873);    // compilenode block
            var block822 = new GraceBlock(this, 873, 1);
            block822.guard = jsTrue;
            block822.real = function block822(var_each) {
              var if823 = GraceDone;
              setLineNumber(874);    // compilenode call
              // call case 6: other requests
              var call824 = request(var_booleanBlock, "apply(1)", [1], var_each);
              if (Grace_isTrue(call824)) {
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if823;
            };
            let applyMeth822 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth822.methodName = "apply(1)";
            applyMeth822.paramCounts = [1];
            applyMeth822.paramNames = ["each"];
            applyMeth822.definitionLine = 873;
            applyMeth822.definitionModule = "collectionsPrelude";
            block822.methods["apply(1)"] = applyMeth822;
            let matchesMeth822 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth822.methodName = "matches(1)";
            matchesMeth822.paramCounts = [1];
            matchesMeth822.paramNames = ["each"];
            matchesMeth822.definitionLine = 873;
            matchesMeth822.definitionModule = "collectionsPrelude";
            block822.methods["matches(1)"] = matchesMeth822;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call821 = selfRequest(this, "do(1)", [1], block822);
            setLineNumber(876);    // compilenode return
            return GraceFalse;
          };    // end of method includes(_)
          this.methods["includes(1)"] = func820;
          func820.methodName = "includes(1)";
          func820.paramCounts = [1];
          func820.paramNames = ["booleanBlock"];
          func820.definitionLine = 872;
          func820.definitionModule = "collectionsPrelude";
          var func825 = function(argcv, var_booleanBlock, var_notFoundBlock) {    // method find(_)ifNone(_), line 878
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("find(_)ifNone(_)", 0, numArgs - 2);
            }
            setLineNumber(879);    // compilenode block
            var block827 = new GraceBlock(this, 879, 1);
            block827.guard = jsTrue;
            block827.real = function block827(var_each) {
              var if828 = GraceDone;
              setLineNumber(880);    // compilenode call
              // call case 6: other requests
              var call829 = request(var_booleanBlock, "apply(1)", [1], var_each);
              if (Grace_isTrue(call829)) {
                throw new ReturnException(var_each, returnTarget);
              }
              return if828;
            };
            let applyMeth827 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth827.methodName = "apply(1)";
            applyMeth827.paramCounts = [1];
            applyMeth827.paramNames = ["each"];
            applyMeth827.definitionLine = 879;
            applyMeth827.definitionModule = "collectionsPrelude";
            block827.methods["apply(1)"] = applyMeth827;
            let matchesMeth827 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth827.methodName = "matches(1)";
            matchesMeth827.paramCounts = [1];
            matchesMeth827.paramNames = ["each"];
            matchesMeth827.definitionLine = 879;
            matchesMeth827.definitionModule = "collectionsPrelude";
            block827.methods["matches(1)"] = matchesMeth827;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call826 = selfRequest(this, "do(1)", [1], block827);
            setLineNumber(882);    // compilenode member
            // call case 6: other requests
            var call830 = request(var_notFoundBlock, "apply", [0]);
            return call830;
          };    // end of method find(_)ifNone(_)
          this.methods["find(1)ifNone(1)"] = func825;
          func825.methodName = "find(1)ifNone(1)";
          func825.paramCounts = [1, 1];
          func825.paramNames = ["booleanBlock", "notFoundBlock"];
          func825.definitionLine = 878;
          func825.definitionModule = "collectionsPrelude";
          var func831 = function(argcv, var_x) {    // method findPosition(_), line 884
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("findPosition(_)", 0, numArgs - 1);
            }
            setLineNumber(885);    // compilenode member
            // call case 6: other requests
            var call832 = request(var_x, "hash", [0]);
            var var_h = call832;
            setLineNumber(886);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call834 = selfRequest(this, "inner", [0]);
            var call833 = request(call834, "size", [0]);
            var var_s = call833;
            setLineNumber(887);    // compilenode op
            var modulus835 = request(var_h, "%(1)", [1], var_s);
            var var_t = modulus835;
            setLineNumber(888);    // compilenode num
            var var_jump = new GraceNum(5);
            setLineNumber(889);    // compilenode vardec
            var var_candidate;
            setLineNumber(890);    // compilenode block
            var block837 = new GraceBlock(this, 890, 0);
            block837.guard = jsTrue;
            block837.real = function block837() {
              setLineNumber(891);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call839 = selfRequest(this, "inner", [0]);
              var call838 = request(call839, "at(1)", [1], var_t);
              var_candidate = call838;
              setLineNumber(892);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult840 = request(var_unused, "\u2260(1)", [1], var_candidate);
              return opresult840;
            };
            let applyMeth837 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth837.methodName = "apply";
            applyMeth837.paramCounts = [0];
            applyMeth837.paramNames = [];
            applyMeth837.definitionLine = 890;
            applyMeth837.definitionModule = "collectionsPrelude";
            block837.methods["apply"] = applyMeth837;
            setLineNumber(893);    // compilenode block
            var block841 = new GraceBlock(this, 893, 0);
            block841.guard = jsTrue;
            block841.real = function block841() {
              var if842 = GraceDone;
              setLineNumber(894);    // compilenode op
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult843 = request(var_candidate, "==(1)", [1], var_x);
              if (Grace_isTrue(opresult843)) {
                setLineNumber(895);    // compilenode return
                if (var_t === undefined) raiseUninitializedVariable("t");
                throw new ReturnException(var_t, returnTarget);
              }
              var if844 = GraceDone;
              setLineNumber(897);    // compilenode op
              if (var_jump === undefined) raiseUninitializedVariable("jump");
              var opresult845 = request(var_jump, "\u2260(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult845)) {
                setLineNumber(898);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var prod846 = request(var_t, "*(1)", [1], new GraceNum(3));
                var sum847 = request(prod846, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus848 = request(sum847, "%(1)", [1], var_s);
                var_t = modulus848;
                setLineNumber(899);    // compilenode op
                if (var_jump === undefined) raiseUninitializedVariable("jump");
                var diff849 = request(var_jump, "-(1)", [1], new GraceNum(1));
                var_jump = diff849;
                if844 = GraceDone;
              } else {
                setLineNumber(901);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var sum850 = request(var_t, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus851 = request(sum850, "%(1)", [1], var_s);
                var_t = modulus851;
                if844 = GraceDone;
              }
              return if844;
            };
            let applyMeth841 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth841.methodName = "apply";
            applyMeth841.paramCounts = [0];
            applyMeth841.paramNames = [];
            applyMeth841.definitionLine = 893;
            applyMeth841.definitionModule = "collectionsPrelude";
            block841.methods["apply"] = applyMeth841;
            // call case 2: outer request
            var call836 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block837, block841);
            setLineNumber(904);    // compilenode return
            return var_t;
          };    // end of method findPosition(_)
          func831.confidential = true;
          this.methods["findPosition(1)"] = func831;
          func831.methodName = "findPosition(1)";
          func831.paramCounts = [1];
          func831.paramNames = ["x"];
          func831.definitionLine = 884;
          func831.definitionModule = "collectionsPrelude";
          var func852 = function(argcv, var_x) {    // method findPositionForAdd(_), line 906
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("findPositionForAdd(_)", 0, numArgs - 1);
            }
            setLineNumber(907);    // compilenode member
            // call case 6: other requests
            var call853 = request(var_x, "hash", [0]);
            var var_h = call853;
            setLineNumber(908);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call855 = selfRequest(this, "inner", [0]);
            var call854 = request(call855, "size", [0]);
            var var_s = call854;
            setLineNumber(909);    // compilenode op
            var modulus856 = request(var_h, "%(1)", [1], var_s);
            var var_t = modulus856;
            setLineNumber(910);    // compilenode num
            var var_jump = new GraceNum(5);
            setLineNumber(911);    // compilenode vardec
            var var_candidate;
            setLineNumber(912);    // compilenode block
            var block858 = new GraceBlock(this, 912, 0);
            block858.guard = jsTrue;
            block858.real = function block858() {
              setLineNumber(913);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call860 = selfRequest(this, "inner", [0]);
              var call859 = request(call860, "at(1)", [1], var_t);
              var_candidate = call859;
              setLineNumber(914);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult861 = request(var_unused, "\u2260(1)", [1], var_candidate);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult862 = request(var_removed, "\u2260(1)", [1], var_candidate);
              var opresult863 = request(opresult861, "&&(1)", [1], opresult862);
              return opresult863;
            };
            let applyMeth858 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth858.methodName = "apply";
            applyMeth858.paramCounts = [0];
            applyMeth858.paramNames = [];
            applyMeth858.definitionLine = 912;
            applyMeth858.definitionModule = "collectionsPrelude";
            block858.methods["apply"] = applyMeth858;
            setLineNumber(915);    // compilenode block
            var block864 = new GraceBlock(this, 915, 0);
            block864.guard = jsTrue;
            block864.real = function block864() {
              var if865 = GraceDone;
              setLineNumber(916);    // compilenode op
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult866 = request(var_candidate, "==(1)", [1], var_x);
              if (Grace_isTrue(opresult866)) {
                setLineNumber(917);    // compilenode return
                if (var_t === undefined) raiseUninitializedVariable("t");
                throw new ReturnException(var_t, returnTarget);
              }
              var if867 = GraceDone;
              setLineNumber(919);    // compilenode op
              if (var_jump === undefined) raiseUninitializedVariable("jump");
              var opresult868 = request(var_jump, "\u2260(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult868)) {
                setLineNumber(920);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var prod869 = request(var_t, "*(1)", [1], new GraceNum(3));
                var sum870 = request(prod869, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus871 = request(sum870, "%(1)", [1], var_s);
                var_t = modulus871;
                setLineNumber(921);    // compilenode op
                if (var_jump === undefined) raiseUninitializedVariable("jump");
                var diff872 = request(var_jump, "-(1)", [1], new GraceNum(1));
                var_jump = diff872;
                if867 = GraceDone;
              } else {
                setLineNumber(923);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var sum873 = request(var_t, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus874 = request(sum873, "%(1)", [1], var_s);
                var_t = modulus874;
                if867 = GraceDone;
              }
              return if867;
            };
            let applyMeth864 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth864.methodName = "apply";
            applyMeth864.paramCounts = [0];
            applyMeth864.paramNames = [];
            applyMeth864.definitionLine = 915;
            applyMeth864.definitionModule = "collectionsPrelude";
            block864.methods["apply"] = applyMeth864;
            // call case 2: outer request
            var call857 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block858, block864);
            setLineNumber(926);    // compilenode return
            return var_t;
          };    // end of method findPositionForAdd(_)
          func852.confidential = true;
          this.methods["findPositionForAdd(1)"] = func852;
          func852.methodName = "findPositionForAdd(1)";
          func852.paramCounts = [1];
          func852.paramNames = ["x"];
          func852.definitionLine = 906;
          func852.definitionModule = "collectionsPrelude";
          var func875 = function(argcv) {    // method asString, line 929
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(930);    // compilenode string
            var string876 = new GraceString("set [");
            var var_s = string876;
            setLineNumber(931);    // compilenode block
            var block878 = new GraceBlock(this, 931, 1);
            block878.guard = jsTrue;
            block878.real = function block878(var_each) {
              setLineNumber(931);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              // call case 6: other requests
              var call879 = request(var_each, "asString", [0]);
              var opresult880 = request(var_s, "++(1)", [1], call879);
              var_s = opresult880;
              return GraceDone;
            };
            let applyMeth878 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth878.methodName = "apply(1)";
            applyMeth878.paramCounts = [1];
            applyMeth878.paramNames = ["each"];
            applyMeth878.definitionLine = 931;
            applyMeth878.definitionModule = "collectionsPrelude";
            block878.methods["apply(1)"] = applyMeth878;
            let matchesMeth878 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth878.methodName = "matches(1)";
            matchesMeth878.paramCounts = [1];
            matchesMeth878.paramNames = ["each"];
            matchesMeth878.definitionLine = 931;
            matchesMeth878.definitionModule = "collectionsPrelude";
            block878.methods["matches(1)"] = matchesMeth878;
            setLineNumber(932);    // compilenode block
            var block881 = new GraceBlock(this, 932, 0);
            block881.guard = jsTrue;
            block881.real = function block881() {
              setLineNumber(932);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              var string882 = new GraceString(", ");
              var opresult883 = request(var_s, "++(1)", [1], string882);
              var_s = opresult883;
              return GraceDone;
            };
            let applyMeth881 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth881.methodName = "apply";
            applyMeth881.paramCounts = [0];
            applyMeth881.paramNames = [];
            applyMeth881.definitionLine = 932;
            applyMeth881.definitionModule = "collectionsPrelude";
            block881.methods["apply"] = applyMeth881;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call877 = selfRequest(this, "do(1)separatedBy(1)", [1, 1], block878, block881);
            setLineNumber(933);    // compilenode string
            var string884 = new GraceString("]");
            var opresult885 = request(var_s, "++(1)", [1], string884);
            return opresult885;
          };    // end of method asString
          this.methods["asString"] = func875;
          func875.methodName = "asString";
          func875.paramCounts = [0];
          func875.paramNames = [];
          func875.definitionLine = 929;
          func875.definitionModule = "collectionsPrelude";
          var func886 = function(argcv) {    // method asDebugString, line 935
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asDebugString", 0, numArgs - 0);
            }
            setLineNumber(936);    // compilenode string
            var string887 = new GraceString("set{");
            var var_s = string887;
            setLineNumber(937);    // compilenode block
            var block889 = new GraceBlock(this, 937, 1);
            block889.guard = jsTrue;
            block889.real = function block889(var_each) {
              setLineNumber(937);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              // call case 6: other requests
              var call890 = request(var_each, "asDebugString", [0]);
              var opresult891 = request(var_s, "++(1)", [1], call890);
              var_s = opresult891;
              return GraceDone;
            };
            let applyMeth889 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth889.methodName = "apply(1)";
            applyMeth889.paramCounts = [1];
            applyMeth889.paramNames = ["each"];
            applyMeth889.definitionLine = 937;
            applyMeth889.definitionModule = "collectionsPrelude";
            block889.methods["apply(1)"] = applyMeth889;
            let matchesMeth889 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth889.methodName = "matches(1)";
            matchesMeth889.paramCounts = [1];
            matchesMeth889.paramNames = ["each"];
            matchesMeth889.definitionLine = 937;
            matchesMeth889.definitionModule = "collectionsPrelude";
            block889.methods["matches(1)"] = matchesMeth889;
            setLineNumber(938);    // compilenode block
            var block892 = new GraceBlock(this, 938, 0);
            block892.guard = jsTrue;
            block892.real = function block892() {
              setLineNumber(938);    // compilenode op
              if (var_s === undefined) raiseUninitializedVariable("s");
              var string893 = new GraceString(", ");
              var opresult894 = request(var_s, "++(1)", [1], string893);
              var_s = opresult894;
              return GraceDone;
            };
            let applyMeth892 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth892.methodName = "apply";
            applyMeth892.paramCounts = [0];
            applyMeth892.paramNames = [];
            applyMeth892.definitionLine = 938;
            applyMeth892.definitionModule = "collectionsPrelude";
            block892.methods["apply"] = applyMeth892;
            // call case 4: self request with 2 args and 0 typeArgs 
            var call888 = selfRequest(this, "do(1)separatedBy(1)", [1, 1], block889, block892);
            setLineNumber(939);    // compilenode string
            var string895 = new GraceString("}");
            var opresult896 = request(var_s, "++(1)", [1], string895);
            return opresult896;
          };    // end of method asDebugString
          this.methods["asDebugString"] = func886;
          func886.methodName = "asDebugString";
          func886.paramCounts = [0];
          func886.paramNames = [];
          func886.definitionLine = 935;
          func886.definitionModule = "collectionsPrelude";
          var func897 = function(argcv, var_l) {    // method extend(_), line 941
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("extend(_)", 0, numArgs - 1);
            }
            setLineNumber(942);    // compilenode block
            var block899 = new GraceBlock(this, 942, 1);
            block899.guard = jsTrue;
            block899.real = function block899(var_i) {
              setLineNumber(943);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call900 = selfRequest(this, "add(1)", [1], var_i);
              return call900;
            };
            let applyMeth899 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth899.methodName = "apply(1)";
            applyMeth899.paramCounts = [1];
            applyMeth899.paramNames = ["i"];
            applyMeth899.definitionLine = 942;
            applyMeth899.definitionModule = "collectionsPrelude";
            block899.methods["apply(1)"] = applyMeth899;
            let matchesMeth899 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth899.methodName = "matches(1)";
            matchesMeth899.paramCounts = [1];
            matchesMeth899.paramNames = ["i"];
            matchesMeth899.definitionLine = 942;
            matchesMeth899.definitionModule = "collectionsPrelude";
            block899.methods["matches(1)"] = matchesMeth899;
            // call case 2: outer request
            var call898 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_l, block899);
            return call898;
          };    // end of method extend(_)
          this.methods["extend(1)"] = func897;
          func897.methodName = "extend(1)";
          func897.paramCounts = [1];
          func897.paramNames = ["l"];
          func897.definitionLine = 941;
          func897.definitionModule = "collectionsPrelude";
          var func901 = function(argcv, var_block1) {    // method do(_), line 946
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("do(_)", 0, numArgs - 1);
            }
            setLineNumber(947);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call902 = selfRequest(this, "mods", [0]);
            var var_iMods = call902;
            setLineNumber(948);    // compilenode num
            var var_i = new GraceNum(0);
            setLineNumber(949);    // compilenode num
            var var_found = new GraceNum(0);
            setLineNumber(950);    // compilenode vardec
            var var_candidate;
            setLineNumber(951);    // compilenode block
            var block904 = new GraceBlock(this, 951, 0);
            block904.guard = jsTrue;
            block904.real = function block904() {
              setLineNumber(951);    // compilenode op
              if (var_found === undefined) raiseUninitializedVariable("found");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call905 = selfRequest(this, "size", [0]);
              var opresult906 = request(var_found, "<(1)", [1], call905);
              return opresult906;
            };
            let applyMeth904 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth904.methodName = "apply";
            applyMeth904.paramCounts = [0];
            applyMeth904.paramNames = [];
            applyMeth904.definitionLine = 951;
            applyMeth904.definitionModule = "collectionsPrelude";
            block904.methods["apply"] = applyMeth904;
            var block907 = new GraceBlock(this, 951, 0);
            block907.guard = jsTrue;
            block907.real = function block907() {
              var if908 = GraceDone;
              setLineNumber(952);    // compilenode op
              if (var_iMods === undefined) raiseUninitializedVariable("iMods");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call909 = selfRequest(this, "mods", [0]);
              var opresult910 = request(var_iMods, "\u2260(1)", [1], call909);
              if (Grace_isTrue(opresult910)) {
                setLineNumber(953);    // compilenode member
                // call case 2: outer request
                var call912 = selfRequest(this.outer_collectionsPrelude_779, "asDebugString", [0]);
                // call case 6: other requests
                if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                var call911 = request(var_ConcurrentModification, "raise(1)", [1], call912);
                if908 = call911;
              }
              setLineNumber(955);    // compilenode call
              if (var_i === undefined) raiseUninitializedVariable("i");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call914 = selfRequest(this, "inner", [0]);
              var call913 = request(call914, "at(1)", [1], var_i);
              var_candidate = call913;
              var if915 = GraceDone;
              setLineNumber(956);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult916 = request(var_unused, "\u2260(1)", [1], var_candidate);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_candidate === undefined) raiseUninitializedVariable("candidate");
              var opresult917 = request(var_removed, "\u2260(1)", [1], var_candidate);
              var opresult918 = request(opresult916, "&&(1)", [1], opresult917);
              if (Grace_isTrue(opresult918)) {
                setLineNumber(957);    // compilenode op
                if (var_found === undefined) raiseUninitializedVariable("found");
                var sum919 = request(var_found, "+(1)", [1], new GraceNum(1));
                var_found = sum919;
                setLineNumber(958);    // compilenode call
                if (var_candidate === undefined) raiseUninitializedVariable("candidate");
                // call case 6: other requests
                var call920 = request(var_block1, "apply(1)", [1], var_candidate);
                if915 = call920;
              }
              setLineNumber(960);    // compilenode op
              if (var_i === undefined) raiseUninitializedVariable("i");
              var sum921 = request(var_i, "+(1)", [1], new GraceNum(1));
              var_i = sum921;
              return GraceDone;
            };
            let applyMeth907 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth907.methodName = "apply";
            applyMeth907.paramCounts = [0];
            applyMeth907.paramNames = [];
            applyMeth907.definitionLine = 951;
            applyMeth907.definitionModule = "collectionsPrelude";
            block907.methods["apply"] = applyMeth907;
            // call case 2: outer request
            var call903 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block904, block907);
            return call903;
          };    // end of method do(_)
          this.methods["do(1)"] = func901;
          func901.methodName = "do(1)";
          func901.paramCounts = [1];
          func901.paramNames = ["block1"];
          func901.definitionLine = 946;
          func901.definitionModule = "collectionsPrelude";
          var func922 = function(argcv) {    // method iterator, line 963
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("set.ofCapacity(_).iterator", "collectionsPrelude", 963);
            var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method iterator
          this.methods["iterator"] = func922;
          func922.methodName = "iterator";
          func922.paramCounts = [0];
          func922.paramNames = [];
          func922.definitionLine = 963;
          func922.definitionModule = "collectionsPrelude";
          var func923 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 963
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            var obj924_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_964");
              this.outer_collectionsPrelude_964 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              this.data.iMods = undefined;
              var reader925_iMods = function() {  // reader method iMods
                  if (this.data.iMods === undefined) raiseUninitializedVariable("iMods");
                  return this.data.iMods;
              };
              reader925_iMods.isDef = true;
              reader925_iMods.confidential = true;
              this.methods["iMods"] = reader925_iMods;
              this.data.count = undefined;
              var reader926_count = function() {  // reader method count
                  if (this.data.count === undefined) raiseUninitializedVariable("count");
                  return this.data.count;
              };
              reader926_count.isVar = true;
              reader926_count.confidential = true;
              this.methods["count"] = reader926_count;
              var writer927_count = function(argcv, n) {   // writer method count:=(_)
                this.data.count = n;
                return GraceDone;
              };
              writer927_count.confidential = true;
              this.methods["count:=(1)"] = writer927_count;
              this.data.idx = undefined;
              var reader928_idx = function() {  // reader method idx
                  if (this.data.idx === undefined) raiseUninitializedVariable("idx");
                  return this.data.idx;
              };
              reader928_idx.isVar = true;
              reader928_idx.confidential = true;
              this.methods["idx"] = reader928_idx;
              var writer929_idx = function(argcv, n) {   // writer method idx:=(_)
                this.data.idx = n;
                return GraceDone;
              };
              writer929_idx.confidential = true;
              this.methods["idx:=(1)"] = writer929_idx;
              var func930 = function(argcv) {    // method hasNext, line 968
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("hasNext", 0, numArgs - 0);
                }
                setLineNumber(968);    // compilenode member
                // call case 2: outer request
                var call931 = selfRequest(this.outer_collectionsPrelude_964, "size", [0]);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call932 = selfRequest(this, "count", [0]);
                var opresult933 = request(call931, "\u2265(1)", [1], call932);
                return opresult933;
              };    // end of method hasNext
              this.methods["hasNext"] = func930;
              func930.methodName = "hasNext";
              func930.paramCounts = [0];
              func930.paramNames = [];
              func930.definitionLine = 968;
              func930.definitionModule = "collectionsPrelude";
              var func934 = function(argcv) {    // method next, line 969
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("next", 0, numArgs - 0);
                }
                setLineNumber(970);    // compilenode vardec
                var var_candidate;
                setLineNumber(971);    // compilenode member
                // call case 6: other requests
                // call case 2: outer request
                var call936 = selfRequest(this.outer_collectionsPrelude_964, "inner", [0]);
                var call935 = request(call936, "size", [0]);
                var var_innerSize = call935;
                setLineNumber(972);    // compilenode block
                var block938 = new GraceBlock(this, 972, 0);
                block938.guard = jsTrue;
                block938.real = function block938() {
                  setLineNumber(973);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call940 = selfRequest(this, "idx", [0]);
                  var sum941 = request(call940, "+(1)", [1], new GraceNum(1));
                  // call case 4: self request with 1 args and 0 typeArgs 
                  var call939 = selfRequest(this, "idx:=(1)", [1], sum941);
                  var if942 = GraceDone;
                  setLineNumber(974);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call943 = selfRequest(this, "iMods", [0]);
                  // call case 2: outer request
                  var call944 = selfRequest(this.outer_collectionsPrelude_964, "mods", [0]);
                  var opresult945 = request(call943, "\u2260(1)", [1], call944);
                  if (Grace_isTrue(opresult945)) {
                    setLineNumber(975);    // compilenode member
                    // call case 2: outer request
                    var call947 = selfRequest(this.outer_collectionsPrelude_964, "asDebugString", [0]);
                    // call case 6: other requests
                    if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                    var call946 = request(var_ConcurrentModification, "raise(1)", [1], call947);
                    if942 = call946;
                  }
                  var if948 = GraceDone;
                  setLineNumber(977);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call949 = selfRequest(this, "idx", [0]);
                  if (var_innerSize === undefined) raiseUninitializedVariable("innerSize");
                  var opresult950 = request(call949, "\u2265(1)", [1], var_innerSize);
                  if (Grace_isTrue(opresult950)) {
                    setLineNumber(978);    // compilenode string
                    var string952 = new GraceString("iterator over ");
                    // call case 2: outer request
                    var call953 = selfRequest(this.outer_collectionsPrelude_964, "asString", [0]);
                    var opresult954 = request(string952, "++(1)", [1], call953);
                    var string955 = new GraceString("");
                    var opresult956 = request(opresult954, "++(1)", [1], string955);
                    // call case 6: other requests
                    if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                    var call951 = request(var_IteratorExhausted, "raise(1)", [1], opresult956);
                    if948 = call951;
                  }
                  setLineNumber(980);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call958 = selfRequest(this, "idx", [0]);
                  // call case 6: other requests
                  // call case 2: outer request
                  var call959 = selfRequest(this.outer_collectionsPrelude_964, "inner", [0]);
                  var call957 = request(call959, "at(1)", [1], call958);
                  var_candidate = call957;
                  setLineNumber(981);    // compilenode op
                  if (var_unused === undefined) raiseUninitializedVariable("unused");
                  if (var_candidate === undefined) raiseUninitializedVariable("candidate");
                  var opresult960 = request(var_unused, "==(1)", [1], var_candidate);
                  if (var_removed === undefined) raiseUninitializedVariable("removed");
                  if (var_candidate === undefined) raiseUninitializedVariable("candidate");
                  var opresult961 = request(var_removed, "==(1)", [1], var_candidate);
                  var opresult962 = request(opresult960, "||(1)", [1], opresult961);
                  return opresult962;
                };
                let applyMeth938 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth938.methodName = "apply";
                applyMeth938.paramCounts = [0];
                applyMeth938.paramNames = [];
                applyMeth938.definitionLine = 972;
                applyMeth938.definitionModule = "collectionsPrelude";
                block938.methods["apply"] = applyMeth938;
                setLineNumber(982);    // compilenode block
                var block963 = new GraceBlock(this, 982, 0);
                block963.guard = jsTrue;
                block963.real = function block963() {
                  setLineNumber(982);    // compileBlock
                  return GraceDone;
                };
                let applyMeth963 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth963.methodName = "apply";
                applyMeth963.paramCounts = [0];
                applyMeth963.paramNames = [];
                applyMeth963.definitionLine = 982;
                applyMeth963.definitionModule = "collectionsPrelude";
                block963.methods["apply"] = applyMeth963;
                // call case 2: outer request
                var call937 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block938, block963);
                setLineNumber(983);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call965 = selfRequest(this, "count", [0]);
                var sum966 = request(call965, "+(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call964 = selfRequest(this, "count:=(1)", [1], sum966);
                if (var_candidate === undefined) raiseUninitializedVariable("candidate");
                return var_candidate;
              };    // end of method next
              this.methods["next"] = func934;
              func934.methodName = "next";
              func934.paramCounts = [0];
              func934.paramNames = [];
              func934.definitionLine = 969;
              func934.definitionModule = "collectionsPrelude";
              this.mutable = true;
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 964;
                  m.definitionModule = "collectionsPrelude";
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
              var obj924_init = function() {    // init of object on line 964
                setLineNumber(965);    // compilenode member
                // call case 2: outer request
                var call967 = selfRequest(this.outer_collectionsPrelude_964, "mods", [0]);
                this.data.iMods = call967;
                setLineNumber(966);    // compilenode num
                this.data.count = new GraceNum(1);
                setLineNumber(967);    // compilenode call
                // call case 6: other requests
                var call968 = request(new GraceNum(1), "prefix-", [0]);
                this.data.idx = call968;
              };
              return obj924_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj924_init = obj924_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj924_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method iterator$build(_,_,_)
          this.methods["iterator$build(3)"] = func923;
          func923.methodName = "iterator$build(3)";
          func923.paramCounts = [0];
          func923.paramNames = [];
          func923.definitionLine = 963;
          func923.definitionModule = "collectionsPrelude";
          var func969 = function(argcv) {    // method expand, line 989
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("expand", 0, numArgs - 0);
            }
            setLineNumber(990);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call971 = selfRequest(this, "inner", [0]);
            var call970 = request(call971, "size", [0]);
            var var_c = call970;
            setLineNumber(991);    // compilenode num
            var prod972 = request(var_c, "*(1)", [1], new GraceNum(2));
            var var_n = prod972;
            setLineNumber(992);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call973 = selfRequest(this, "inner", [0]);
            var var_oldInner = call973;
            setLineNumber(993);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call974 = selfRequest(this, "size:=(1)", [1], new GraceNum(0));
            setLineNumber(994);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call977 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call976 = request(call977, "new(1)", [1], var_n);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call975 = selfRequest(this, "inner:=(1)", [1], call976);
            setLineNumber(995);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call980 = selfRequest(this, "inner", [0]);
            var call979 = request(call980, "size", [0]);
            var diff981 = request(call979, "-(1)", [1], new GraceNum(1));
            var opresult982 = request(new GraceNum(0), "..(1)", [1], diff981);
            var block983 = new GraceBlock(this, 995, 1);
            block983.guard = jsTrue;
            block983.real = function block983(var_i) {
              setLineNumber(996);    // compilenode call
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call985 = selfRequest(this, "inner", [0]);
              var call984 = request(call985, "at(1)put(1)", [1, 1], var_i, var_unused);
              return call984;
            };
            let applyMeth983 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth983.methodName = "apply(1)";
            applyMeth983.paramCounts = [1];
            applyMeth983.paramNames = ["i"];
            applyMeth983.definitionLine = 995;
            applyMeth983.definitionModule = "collectionsPrelude";
            block983.methods["apply(1)"] = applyMeth983;
            let matchesMeth983 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth983.methodName = "matches(1)";
            matchesMeth983.paramCounts = [1];
            matchesMeth983.paramNames = ["i"];
            matchesMeth983.definitionLine = 995;
            matchesMeth983.definitionModule = "collectionsPrelude";
            block983.methods["matches(1)"] = matchesMeth983;
            // call case 2: outer request
            var call978 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult982, block983);
            setLineNumber(998);    // compilenode member
            // call case 6: other requests
            var call987 = request(var_oldInner, "size", [0]);
            var diff988 = request(call987, "-(1)", [1], new GraceNum(1));
            var opresult989 = request(new GraceNum(0), "..(1)", [1], diff988);
            var block990 = new GraceBlock(this, 998, 1);
            block990.guard = jsTrue;
            block990.real = function block990(var_i) {
              var if991 = GraceDone;
              setLineNumber(999);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              if (var_oldInner === undefined) raiseUninitializedVariable("oldInner");
              var call992 = request(var_oldInner, "at(1)", [1], var_i);
              var opresult993 = request(var_unused, "\u2260(1)", [1], call992);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              // call case 6: other requests
              if (var_oldInner === undefined) raiseUninitializedVariable("oldInner");
              var call994 = request(var_oldInner, "at(1)", [1], var_i);
              var opresult995 = request(var_removed, "\u2260(1)", [1], call994);
              var opresult996 = request(opresult993, "&&(1)", [1], opresult995);
              if (Grace_isTrue(opresult996)) {
                setLineNumber(1000);    // compilenode call
                // call case 6: other requests
                if (var_oldInner === undefined) raiseUninitializedVariable("oldInner");
                var call998 = request(var_oldInner, "at(1)", [1], var_i);
                // call case 4: self request with 1 args and 0 typeArgs 
                var call997 = selfRequest(this, "add(1)", [1], call998);
                if991 = call997;
              }
              return if991;
            };
            let applyMeth990 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth990.methodName = "apply(1)";
            applyMeth990.paramCounts = [1];
            applyMeth990.paramNames = ["i"];
            applyMeth990.definitionLine = 998;
            applyMeth990.definitionModule = "collectionsPrelude";
            block990.methods["apply(1)"] = applyMeth990;
            let matchesMeth990 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth990.methodName = "matches(1)";
            matchesMeth990.paramCounts = [1];
            matchesMeth990.paramNames = ["i"];
            matchesMeth990.definitionLine = 998;
            matchesMeth990.definitionModule = "collectionsPrelude";
            block990.methods["matches(1)"] = matchesMeth990;
            // call case 2: outer request
            var call986 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult989, block990);
            return call986;
          };    // end of method expand
          func969.confidential = true;
          this.methods["expand"] = func969;
          func969.methodName = "expand";
          func969.paramCounts = [0];
          func969.paramNames = [];
          func969.definitionLine = 989;
          func969.definitionModule = "collectionsPrelude";
          var func999 = function(argcv, var_other) {    // method ==(_), line 1004
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("==(_)", 0, numArgs - 1);
            }
            var if1000 = GraceDone;
            setLineNumber(1005);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call1002 = selfRequest(importedModules["collectionsPrelude"], "Collection", [0]);
            var call1001 = request(call1002, "matches(1)", [1], var_other);
            if (Grace_isTrue(call1001)) {
              setLineNumber(1006);    // compilenode num
              var var_otherSize = new GraceNum(0);
              setLineNumber(1007);    // compilenode block
              var block1004 = new GraceBlock(this, 1007, 1);
              block1004.guard = jsTrue;
              block1004.real = function block1004(var_each) {
                setLineNumber(1008);    // compilenode op
                if (var_otherSize === undefined) raiseUninitializedVariable("otherSize");
                var sum1005 = request(var_otherSize, "+(1)", [1], new GraceNum(1));
                var_otherSize = sum1005;
                var if1006 = GraceDone;
                setLineNumber(1009);    // compilenode call
                // call case 6: other requests
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1008 = selfRequest(this, "contains(1)", [1], var_each);
                var call1007 = request(call1008, "prefix!", [0]);
                if (Grace_isTrue(call1007)) {
                  setLineNumber(1010);    // compilenode return
                  throw new ReturnException(GraceFalse, returnTarget);
                }
                return if1006;
              };
              let applyMeth1004 = function apply_1 (argcv, ...args) {
                  if (this.guard.apply(this.receiver, args))
                      return this.real.apply(this.receiver, args);
                  badBlockArgs.apply(this, args);
              };
              applyMeth1004.methodName = "apply(1)";
              applyMeth1004.paramCounts = [1];
              applyMeth1004.paramNames = ["each"];
              applyMeth1004.definitionLine = 1007;
              applyMeth1004.definitionModule = "collectionsPrelude";
              block1004.methods["apply(1)"] = applyMeth1004;
              let matchesMeth1004 = function matches_1 (argcv, ...args) {
                  return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
              };
              matchesMeth1004.methodName = "matches(1)";
              matchesMeth1004.paramCounts = [1];
              matchesMeth1004.paramNames = ["each"];
              matchesMeth1004.definitionLine = 1007;
              matchesMeth1004.definitionModule = "collectionsPrelude";
              block1004.methods["matches(1)"] = matchesMeth1004;
              // call case 6: other requests
              var call1003 = request(var_other, "do(1)", [1], block1004);
              setLineNumber(1013);    // compilenode op
              if (var_otherSize === undefined) raiseUninitializedVariable("otherSize");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1009 = selfRequest(this, "size", [0]);
              var opresult1010 = request(var_otherSize, "==(1)", [1], call1009);
              if1000 = opresult1010;
            } else {
              if1000 = GraceFalse;
            }
            return if1000;
          };    // end of method ==(_)
          this.methods["==(1)"] = func999;
          func999.methodName = "==(1)";
          func999.paramCounts = [1];
          func999.paramNames = ["other"];
          func999.definitionLine = 1004;
          func999.definitionModule = "collectionsPrelude";
          var func1011 = function(argcv) {    // method hash, line 1018
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("hash", 0, numArgs - 0);
            }
            setLineNumber(1020);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            // call case 2: outer request
            var call1015 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
            var call1014 = request(call1015, "withAll(1)", [1], this);
            var call1013 = request(call1014, "sort", [0]);
            var call1012 = request(call1013, "hash", [0]);
            return call1012;
          };    // end of method hash
          this.methods["hash"] = func1011;
          func1011.methodName = "hash";
          func1011.paramCounts = [0];
          func1011.paramNames = [];
          func1011.definitionLine = 1018;
          func1011.definitionModule = "collectionsPrelude";
          var func1016 = function(argcv, var_other) {    // method ≠(_), line 1022
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("≠(_)", 0, numArgs - 1);
            }
            setLineNumber(1022);    // compilenode member
            // call case 6: other requests
            var opresult1018 = request(this, "==(1)", [1], var_other);
            var call1017 = request(opresult1018, "not", [0]);
            return call1017;
          };    // end of method ≠(_)
          this.methods["\u2260(1)"] = func1016;
          func1016.methodName = "\u2260(1)";
          func1016.paramCounts = [1];
          func1016.paramNames = ["other"];
          func1016.definitionLine = 1022;
          func1016.definitionModule = "collectionsPrelude";
          var func1019 = function(argcv) {    // method copy, line 1023
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("copy", 0, numArgs - 0);
            }
            setLineNumber(1024);    // compilenode call
            // call case 2: outer request
            var call1020 = selfRequest(this.outer_collectionsPrelude_779, "withAll(1)", [1], this);
            return call1020;
          };    // end of method copy
          this.methods["copy"] = func1019;
          func1019.methodName = "copy";
          func1019.paramCounts = [0];
          func1019.paramNames = [];
          func1019.definitionLine = 1023;
          func1019.definitionModule = "collectionsPrelude";
          var func1021 = function(argcv, var_other) {    // method ++(_), line 1026
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("++(_)", 0, numArgs - 1);
            }
            setLineNumber(1028);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1023 = selfRequest(this, "copy", [0]);
            var call1022 = request(call1023, "addAll(1)", [1], var_other);
            return call1022;
          };    // end of method ++(_)
          this.methods["++(1)"] = func1021;
          func1021.methodName = "++(1)";
          func1021.paramCounts = [1];
          func1021.paramNames = ["other"];
          func1021.definitionLine = 1026;
          func1021.definitionModule = "collectionsPrelude";
          var func1024 = function(argcv, var_other) {    // method --(_), line 1030
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("--(_)", 0, numArgs - 1);
            }
            setLineNumber(1032);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call1026 = selfRequest(importedModules["collectionsPrelude"], "set", [0]);
            var call1025 = request(call1026, "empty", [0]);
            var var_result = call1025;
            setLineNumber(1033);    // compilenode block
            var block1028 = new GraceBlock(this, 1033, 1);
            block1028.guard = jsTrue;
            block1028.real = function block1028(var_v) {
              var if1029 = GraceDone;
              setLineNumber(1034);    // compilenode call
              // call case 6: other requests
              // call case 6: other requests
              var call1031 = request(var_other, "contains(1)", [1], var_v);
              var call1030 = request(call1031, "prefix!", [0]);
              if (Grace_isTrue(call1030)) {
                setLineNumber(1035);    // compilenode call
                // call case 6: other requests
                if (var_result === undefined) raiseUninitializedVariable("result");
                var call1032 = request(var_result, "add(1)", [1], var_v);
                if1029 = call1032;
              }
              return if1029;
            };
            let applyMeth1028 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1028.methodName = "apply(1)";
            applyMeth1028.paramCounts = [1];
            applyMeth1028.paramNames = ["v"];
            applyMeth1028.definitionLine = 1033;
            applyMeth1028.definitionModule = "collectionsPrelude";
            block1028.methods["apply(1)"] = applyMeth1028;
            let matchesMeth1028 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1028.methodName = "matches(1)";
            matchesMeth1028.paramCounts = [1];
            matchesMeth1028.paramNames = ["v"];
            matchesMeth1028.definitionLine = 1033;
            matchesMeth1028.definitionModule = "collectionsPrelude";
            block1028.methods["matches(1)"] = matchesMeth1028;
            // call case 2: outer request
            var call1027 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], this, block1028);
            return var_result;
          };    // end of method --(_)
          this.methods["--(1)"] = func1024;
          func1024.methodName = "--(1)";
          func1024.paramCounts = [1];
          func1024.paramNames = ["other"];
          func1024.definitionLine = 1030;
          func1024.definitionModule = "collectionsPrelude";
          var func1033 = function(argcv, var_other) {    // method **(_), line 1040
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("**(_)", 0, numArgs - 1);
            }
            setLineNumber(1042);    // compilenode block
            var block1036 = new GraceBlock(this, 1042, 1);
            block1036.guard = jsTrue;
            block1036.real = function block1036(var_each) {
              setLineNumber(1042);    // compilenode call
              // call case 6: other requests
              var call1037 = request(var_other, "contains(1)", [1], var_each);
              return call1037;
            };
            let applyMeth1036 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1036.methodName = "apply(1)";
            applyMeth1036.paramCounts = [1];
            applyMeth1036.paramNames = ["each"];
            applyMeth1036.definitionLine = 1042;
            applyMeth1036.definitionModule = "collectionsPrelude";
            block1036.methods["apply(1)"] = applyMeth1036;
            let matchesMeth1036 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1036.methodName = "matches(1)";
            matchesMeth1036.paramCounts = [1];
            matchesMeth1036.paramNames = ["each"];
            matchesMeth1036.definitionLine = 1042;
            matchesMeth1036.definitionModule = "collectionsPrelude";
            block1036.methods["matches(1)"] = matchesMeth1036;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1035 = selfRequest(this, "filter(1)", [1], block1036);
            // call case 6: other requests
            // call case 2: outer request
            var call1038 = selfRequest(importedModules["collectionsPrelude"], "set", [0]);
            var call1034 = request(call1038, "withAll(1)", [1], call1035);
            return call1034;
          };    // end of method **(_)
          this.methods["**(1)"] = func1033;
          func1033.methodName = "**(1)";
          func1033.paramCounts = [1];
          func1033.paramNames = ["other"];
          func1033.definitionLine = 1040;
          func1033.definitionModule = "collectionsPrelude";
          var func1039 = function(argcv, var_s2) {    // method isSubset(_), line 1044
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("isSubset(_)", 0, numArgs - 1);
            }
            setLineNumber(1045);    // compilenode block
            var block1041 = new GraceBlock(this, 1045, 1);
            block1041.guard = jsTrue;
            block1041.real = function block1041(var_each) {
              var if1042 = GraceDone;
              setLineNumber(1046);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1044 = request(var_s2, "contains(1)", [1], var_each);
              var call1043 = request(call1044, "not", [0]);
              if (Grace_isTrue(call1043)) {
                throw new ReturnException(GraceFalse, returnTarget);
              }
              return if1042;
            };
            let applyMeth1041 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1041.methodName = "apply(1)";
            applyMeth1041.paramCounts = [1];
            applyMeth1041.paramNames = ["each"];
            applyMeth1041.definitionLine = 1045;
            applyMeth1041.definitionModule = "collectionsPrelude";
            block1041.methods["apply(1)"] = applyMeth1041;
            let matchesMeth1041 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1041.methodName = "matches(1)";
            matchesMeth1041.paramCounts = [1];
            matchesMeth1041.paramNames = ["each"];
            matchesMeth1041.definitionLine = 1045;
            matchesMeth1041.definitionModule = "collectionsPrelude";
            block1041.methods["matches(1)"] = matchesMeth1041;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1040 = selfRequest(this, "do(1)", [1], block1041);
            setLineNumber(1048);    // compilenode return
            return GraceTrue;
          };    // end of method isSubset(_)
          this.methods["isSubset(1)"] = func1039;
          func1039.methodName = "isSubset(1)";
          func1039.paramCounts = [1];
          func1039.paramNames = ["s2"];
          func1039.definitionLine = 1044;
          func1039.definitionModule = "collectionsPrelude";
          var func1045 = function(argcv, var_s2) {    // method isSuperset(_), line 1051
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("isSuperset(_)", 0, numArgs - 1);
            }
            setLineNumber(1052);    // compilenode block
            var block1047 = new GraceBlock(this, 1052, 1);
            block1047.guard = jsTrue;
            block1047.real = function block1047(var_each) {
              var if1048 = GraceDone;
              setLineNumber(1053);    // compilenode member
              // call case 6: other requests
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1050 = selfRequest(this, "contains(1)", [1], var_each);
              var call1049 = request(call1050, "not", [0]);
              if (Grace_isTrue(call1049)) {
                throw new ReturnException(GraceFalse, returnTarget);
              }
              return if1048;
            };
            let applyMeth1047 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1047.methodName = "apply(1)";
            applyMeth1047.paramCounts = [1];
            applyMeth1047.paramNames = ["each"];
            applyMeth1047.definitionLine = 1052;
            applyMeth1047.definitionModule = "collectionsPrelude";
            block1047.methods["apply(1)"] = applyMeth1047;
            let matchesMeth1047 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1047.methodName = "matches(1)";
            matchesMeth1047.paramCounts = [1];
            matchesMeth1047.paramNames = ["each"];
            matchesMeth1047.definitionLine = 1052;
            matchesMeth1047.definitionModule = "collectionsPrelude";
            block1047.methods["matches(1)"] = matchesMeth1047;
            // call case 6: other requests
            var call1046 = request(var_s2, "do(1)", [1], block1047);
            setLineNumber(1055);    // compilenode return
            return GraceTrue;
          };    // end of method isSuperset(_)
          this.methods["isSuperset(1)"] = func1045;
          func1045.methodName = "isSuperset(1)";
          func1045.paramCounts = [1];
          func1045.paramNames = ["s2"];
          func1045.definitionLine = 1051;
          func1045.definitionModule = "collectionsPrelude";
          var func1051 = function(argcv, var_source) {    // method <<(_), line 1057
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("<<(_)", 0, numArgs - 1);
            }
            setLineNumber(1058);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1052 = selfRequest(this, "addAll(1)", [1], var_source);
            return call1052;
          };    // end of method <<(_)
          this.methods["<<(1)"] = func1051;
          func1051.methodName = "<<(1)";
          func1051.paramCounts = [1];
          func1051.paramNames = ["source"];
          func1051.definitionLine = 1057;
          func1051.definitionModule = "collectionsPrelude";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 779;
              m.definitionModule = "collectionsPrelude";
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
          var obj703_init = function() {    // init of object on line 779
            setLineNumber(781);    // compilenode num
            this.data.mods = new GraceNum(0);
            setLineNumber(782);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call1054 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call1053 = request(call1054, "new(1)", [1], var_cap);
            this.data.inner = call1053;
            setLineNumber(783);    // compilenode num
            this.data.size = new GraceNum(0);
            setLineNumber(784);    // compilenode block
            var block1056 = new GraceBlock(this, 784, 1);
            block1056.guard = jsTrue;
            block1056.real = function block1056(var_i) {
              setLineNumber(785);    // compilenode call
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1058 = selfRequest(this, "inner", [0]);
              var call1057 = request(call1058, "at(1)put(1)", [1, 1], var_i, var_unused);
              return call1057;
            };
            let applyMeth1056 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1056.methodName = "apply(1)";
            applyMeth1056.paramCounts = [1];
            applyMeth1056.paramNames = ["i"];
            applyMeth1056.definitionLine = 784;
            applyMeth1056.definitionModule = "collectionsPrelude";
            block1056.methods["apply(1)"] = applyMeth1056;
            let matchesMeth1056 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1056.methodName = "matches(1)";
            matchesMeth1056.paramCounts = [1];
            matchesMeth1056.paramNames = ["i"];
            matchesMeth1056.definitionLine = 784;
            matchesMeth1056.definitionModule = "collectionsPrelude";
            block1056.methods["matches(1)"] = matchesMeth1056;
            // call case 6: other requests
            setLineNumber(784);    // compilenode num
            var diff1059 = request(var_cap, "-(1)", [1], new GraceNum(1));
            var opresult1060 = request(new GraceNum(0), "..(1)", [1], diff1059);
            var call1055 = request(opresult1060, "do(1)", [1], block1056);
          };
          return obj703_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj703_init = obj703_build.call(inheritingObject, null, var_cap, this, aliases, exclusions);
        return obj703_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method ofCapacity(_)$build(_,_,_)
      func702.confidential = true;
      this.methods["ofCapacity(1)$build(3)"] = func702;
      func702.methodName = "ofCapacity(1)$build(3)";
      func702.paramCounts = [1];
      func702.paramNames = ["cap"];
      func702.definitionLine = 779;
      func702.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 760;
          m.definitionModule = "collectionsPrelude";
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
      var obj681_init = function() {    // init of object on line 760
      };
      return obj681_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj681_init = obj681_build.call(inheritingObject, null, this, aliases, exclusions, var_T);
    return obj681_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method set$build(_,_,_)
  this.methods["set$build(3)"] = func680;
  func680.methodName = "set$build(3)";
  func680.paramCounts = [0];
  func680.paramNames = [];
  func680.typeParamNames = ["T"];
  func680.definitionLine = 760;
  func680.definitionModule = "collectionsPrelude";
  setLineNumber(1063);    // compilenode typedec
  // Type decl Binding
  var func1062 = function(argcv, var_K, var_T) {    // method Binding, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1063);    // compilenode typeliteral
    //   Type literal 
    var typeLit1063 = new GraceType("Binding");
    typeLit1063.typeMethods.push("key");
    typeLit1063.typeMethods.push("value");
    typeLit1063.typeMethods.push("hash");
    typeLit1063.typeMethods.push("==(1)");
    return typeLit1063;
  };    // end of method Binding
  function memofunc1062(argcv, var_K, var_T) {
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
        let newResult = func1062.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["Binding"] = memofunc1062;
  memofunc1062.methodName = "Binding";
  memofunc1062.paramCounts = [0];
  memofunc1062.paramNames = [];
  memofunc1062.typeParamNames = ["K", "T"];
  memofunc1062.definitionLine = 1;
  memofunc1062.definitionModule = "collectionsPrelude";
  func1062.methodName = "Binding";
  func1062.paramCounts = [0];
  func1062.paramNames = [];
  func1062.typeParamNames = ["K", "T"];
  func1062.definitionLine = 1;
  func1062.definitionModule = "collectionsPrelude";
  var func1064 = function(argcv, var_K, var_T) {    // method binding, line 1070
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("binding", 2, numArgs - 0);
    }
    var ouc = emptyGraceObject("binding", "collectionsPrelude", 1070);
    var ouc_init = this.methods["binding$build(3)"].call(this, null, ouc, [], [], var_K, var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method binding
  this.methods["binding"] = func1064;
  func1064.methodName = "binding";
  func1064.paramCounts = [0];
  func1064.paramNames = [];
  func1064.typeParamNames = ["K", "T"];
  func1064.definitionLine = 1070;
  func1064.definitionModule = "collectionsPrelude";
  var func1065 = function(argcv, inheritingObject, aliases, exclusions, var_K, var_T) {    // method binding$build(_,_,_), line 1070
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("binding", 2, numArgs - 0);
    }
    var obj1066_build = function(ignore, outerObj, aliases, exclusions, var_K, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_1070");
      this.outer_collectionsPrelude_1070 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func1067 = function(argcv) {    // method asString, line 1071
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(1071);    // compilenode string
        var string1068 = new GraceString("the binding factory");
        return string1068;
      };    // end of method asString
      this.methods["asString"] = func1067;
      func1067.methodName = "asString";
      func1067.paramCounts = [0];
      func1067.paramNames = [];
      func1067.definitionLine = 1071;
      func1067.definitionModule = "collectionsPrelude";
      var func1069 = function(argcv, var_k, var_v) {    // method key(_)value(_), line 1073
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("key(_)value(_)", 0, numArgs - 2);
        }
        var ouc = emptyGraceObject("binding.key(_)value(_)", "collectionsPrelude", 1073);
        var ouc_init = this.methods["key(1)value(1)$build(3)"].call(this, null, var_k, var_v, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method key(_)value(_)
      this.methods["key(1)value(1)"] = func1069;
      func1069.methodName = "key(1)value(1)";
      func1069.paramCounts = [1, 1];
      func1069.paramNames = ["k", "v"];
      func1069.definitionLine = 1073;
      func1069.definitionModule = "collectionsPrelude";
      var func1070 = function(argcv, var_k, var_v, inheritingObject, aliases, exclusions) {    // method key(_)value(_)$build(_,_,_), line 1073
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("key(_)value(_)", 0, numArgs - 2);
        }
        var obj1071_build = function(ignore, var_k, var_v, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_1073");
          this.outer_collectionsPrelude_1073 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.key = undefined;
          var reader1072_key = function() {  // reader method key
              if (this.data.key === undefined) raiseUninitializedVariable("key");
              return this.data.key;
          };
          reader1072_key.isDef = true;
          this.methods["key"] = reader1072_key;
          this.data.value = undefined;
          var reader1073_value = function() {  // reader method value
              if (this.data.value === undefined) raiseUninitializedVariable("value");
              return this.data.value;
          };
          reader1073_value.isDef = true;
          this.methods["value"] = reader1073_value;
          var func1074 = function(argcv) {    // method asString, line 1076
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(1076);    // compilenode string
            var string1075 = new GraceString("");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1076 = selfRequest(this, "key", [0]);
            var opresult1077 = request(string1075, "++(1)", [1], call1076);
            var string1078 = new GraceString("::");
            var opresult1079 = request(opresult1077, "++(1)", [1], string1078);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1080 = selfRequest(this, "value", [0]);
            var opresult1081 = request(opresult1079, "++(1)", [1], call1080);
            var string1082 = new GraceString("");
            var opresult1083 = request(opresult1081, "++(1)", [1], string1082);
            return opresult1083;
          };    // end of method asString
          this.methods["asString"] = func1074;
          func1074.methodName = "asString";
          func1074.paramCounts = [0];
          func1074.paramNames = [];
          func1074.definitionLine = 1076;
          func1074.definitionModule = "collectionsPrelude";
          var func1084 = function(argcv) {    // method hash, line 1077
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("hash", 0, numArgs - 0);
            }
            setLineNumber(1077);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1086 = selfRequest(this, "key", [0]);
            var call1085 = request(call1086, "hash", [0]);
            var prod1087 = request(call1085, "*(1)", [1], new GraceNum(1021));
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1089 = selfRequest(this, "value", [0]);
            var call1088 = request(call1089, "hash", [0]);
            var sum1090 = request(prod1087, "+(1)", [1], call1088);
            return sum1090;
          };    // end of method hash
          this.methods["hash"] = func1084;
          func1084.methodName = "hash";
          func1084.paramCounts = [0];
          func1084.paramNames = [];
          func1084.definitionLine = 1077;
          func1084.definitionModule = "collectionsPrelude";
          var func1091 = function(argcv, var_other) {    // method ==(_), line 1078
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("==(_)", 0, numArgs - 1);
            }
            setLineNumber(1079);    // compilenode matchcase
            var cases1092 = [];
            setLineNumber(1080);    // compilenode block
            var block1093 = new GraceBlock(this, 1080, 1);
            // call case 2: outer request
            var call1094 = selfRequest(importedModules["collectionsPrelude"], "Binding", [0]);
            block1093.paramTypes = [call1094];
            var matches1095 = function(var_o) {
              // call case 2: outer request
              var call1096 = selfRequest(importedModules["collectionsPrelude"], "Binding", [0]);
              if (!Grace_isTrue(request(call1096, "matches(1)", [1], var_o)))
                  return false;
              return true;
            };
            block1093.guard = matches1095;
            block1093.real = function block1093(var_o) {
              setLineNumber(1080);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1097 = selfRequest(this, "key", [0]);
              // call case 6: other requests
              var call1098 = request(var_o, "key", [0]);
              var opresult1099 = request(call1097, "==(1)", [1], call1098);
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1100 = selfRequest(this, "value", [0]);
              // call case 6: other requests
              var call1101 = request(var_o, "value", [0]);
              var opresult1102 = request(call1100, "==(1)", [1], call1101);
              var opresult1103 = request(opresult1099, "&&(1)", [1], opresult1102);
              return opresult1103;
            };
            let applyMeth1093 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1093.methodName = "apply(1)";
            applyMeth1093.paramCounts = [1];
            applyMeth1093.paramNames = ["o"];
            applyMeth1093.definitionLine = 1080;
            applyMeth1093.definitionModule = "collectionsPrelude";
            block1093.methods["apply(1)"] = applyMeth1093;
            let matchesMeth1093 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1093.methodName = "matches(1)";
            matchesMeth1093.paramCounts = [1];
            matchesMeth1093.paramNames = ["o"];
            matchesMeth1093.definitionLine = 1080;
            matchesMeth1093.definitionModule = "collectionsPrelude";
            block1093.methods["matches(1)"] = matchesMeth1093;
            cases1092.push(block1093);
            setLineNumber(1081);    // compilenode block
            var block1104 = new GraceBlock(this, 1081, 0);
            block1104.guard = jsTrue;
            block1104.real = function block1104() {
              setLineNumber(1081);    // compilenode return
              throw new ReturnException(GraceFalse, returnTarget);
            };
            let applyMeth1104 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1104.methodName = "apply";
            applyMeth1104.paramCounts = [0];
            applyMeth1104.paramNames = [];
            applyMeth1104.definitionLine = 1081;
            applyMeth1104.definitionModule = "collectionsPrelude";
            block1104.methods["apply"] = applyMeth1104;
            setLineNumber(1079);    // compilematchcase
            var matchres1092 = matchCase(var_other,cases1092,block1104);
            return matchres1092;
          };    // end of method ==(_)
          this.methods["==(1)"] = func1091;
          func1091.methodName = "==(1)";
          func1091.paramCounts = [1];
          func1091.paramNames = ["other"];
          func1091.definitionLine = 1078;
          func1091.definitionModule = "collectionsPrelude";
          var func1105 = function(argcv, var_other) {    // method ≠(_), line 1083
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("≠(_)", 0, numArgs - 1);
            }
            setLineNumber(1083);    // compilenode member
            // call case 6: other requests
            var opresult1107 = request(this, "==(1)", [1], var_other);
            var call1106 = request(opresult1107, "not", [0]);
            return call1106;
          };    // end of method ≠(_)
          this.methods["\u2260(1)"] = func1105;
          func1105.methodName = "\u2260(1)";
          func1105.paramCounts = [1];
          func1105.paramNames = ["other"];
          func1105.definitionLine = 1083;
          func1105.definitionModule = "collectionsPrelude";
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 1073;
              m.definitionModule = "collectionsPrelude";
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
          var obj1071_init = function() {    // init of object on line 1073
            this.data.key = var_k;
            this.data.value = var_v;
          };
          return obj1071_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj1071_init = obj1071_build.call(inheritingObject, null, var_k, var_v, this, aliases, exclusions);
        return obj1071_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method key(_)value(_)$build(_,_,_)
      this.methods["key(1)value(1)$build(3)"] = func1070;
      func1070.methodName = "key(1)value(1)$build(3)";
      func1070.paramCounts = [1, 1];
      func1070.paramNames = ["k", "v"];
      func1070.definitionLine = 1073;
      func1070.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 1070;
          m.definitionModule = "collectionsPrelude";
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
      var obj1066_init = function() {    // init of object on line 1070
      };
      return obj1066_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1066_init = obj1066_build.call(inheritingObject, null, this, aliases, exclusions, var_K, var_T);
    return obj1066_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method binding$build(_,_,_)
  this.methods["binding$build(3)"] = func1065;
  func1065.methodName = "binding$build(3)";
  func1065.paramCounts = [0];
  func1065.paramNames = [];
  func1065.typeParamNames = ["K", "T"];
  func1065.definitionLine = 1070;
  func1065.definitionModule = "collectionsPrelude";
  setLineNumber(1087);    // compilenode typedec
  // Type decl ComparableToDictionary
  var func1109 = function(argcv, var_K, var_T) {    // method ComparableToDictionary, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1087);    // compilenode typeliteral
    //   Type literal 
    var typeLit1110 = new GraceType("ComparableToDictionary");
    typeLit1110.typeMethods.push("size");
    typeLit1110.typeMethods.push("at(1)ifAbsent(1)");
    return typeLit1110;
  };    // end of method ComparableToDictionary
  function memofunc1109(argcv, var_K, var_T) {
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("ComparableToDictionary", 2, numArgs - 0);
    }
    let memoTable = this.data["memo$ComparableToDictionary"] ||
          ( this.data["memo$ComparableToDictionary"] =
               request(var_HashMap, 'empty', [0]) );
    let tableKey = new GraceSequence([var_K, var_T]);
    let absentBlock = new GraceBlock(this, 1, 0);
    absentBlock.guard = jsTrue;
    absentBlock.real = function ifAbsentBlock() {
        let newResult = func1109.call(this, argcv, var_K, var_T);
        request(memoTable, 'at(1)put(1)', [1,1], tableKey, newResult);
        return newResult;
    };
    absentBlock.methods.apply = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    return request(memoTable, 'at(1)ifAbsent(1)', [1,1], tableKey, absentBlock);
  };
  this.methods["ComparableToDictionary"] = memofunc1109;
  memofunc1109.methodName = "ComparableToDictionary";
  memofunc1109.paramCounts = [0];
  memofunc1109.paramNames = [];
  memofunc1109.typeParamNames = ["K", "T"];
  memofunc1109.definitionLine = 1;
  memofunc1109.definitionModule = "collectionsPrelude";
  func1109.methodName = "ComparableToDictionary";
  func1109.paramCounts = [0];
  func1109.paramNames = [];
  func1109.typeParamNames = ["K", "T"];
  func1109.definitionLine = 1;
  func1109.definitionModule = "collectionsPrelude";
  var func1111 = function(argcv, var_K, var_T) {    // method dictionary, line 1092
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    var ouc = emptyGraceObject("dictionary", "collectionsPrelude", 1092);
    var ouc_init = this.methods["dictionary$build(3)"].call(this, null, ouc, [], [], var_K, var_T);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method dictionary
  this.methods["dictionary"] = func1111;
  func1111.methodName = "dictionary";
  func1111.paramCounts = [0];
  func1111.paramNames = [];
  func1111.typeParamNames = ["K", "T"];
  func1111.definitionLine = 1092;
  func1111.definitionModule = "collectionsPrelude";
  var func1112 = function(argcv, inheritingObject, aliases, exclusions, var_K, var_T) {    // method dictionary$build(_,_,_), line 1092
    var returnTarget = invocationCount;
    invocationCount++;
    if (! var_K) var_K = var_Unknown;
    if (! var_T) var_T = var_Unknown;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 2)) {
        raiseTypeArgError("dictionary", 2, numArgs - 0);
    }
    var obj1113_build = function(ignore, outerObj, aliases, exclusions, var_K, var_T) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_collectionsPrelude_1092");
      this.outer_collectionsPrelude_1092 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      var func1114 = function(argcv) {    // method asString, line 1094
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(1094);    // compilenode string
        var string1115 = new GraceString("the dictionary factory");
        return string1115;
      };    // end of method asString
      this.methods["asString"] = func1114;
      func1114.methodName = "asString";
      func1114.paramCounts = [0];
      func1114.paramNames = [];
      func1114.definitionLine = 1094;
      func1114.definitionModule = "collectionsPrelude";
      var func1116 = function(argcv, var_aBinding) {    // method with(_), line 1096
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("with(_)", 0, numArgs - 1);
        }
        setLineNumber(1097);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1118 = selfRequest(this, "empty", [0]);
        var call1117 = request(call1118, "add(1)", [1], var_aBinding);
        return call1117;
      };    // end of method with(_)
      this.methods["with(1)"] = func1116;
      func1116.methodName = "with(1)";
      func1116.paramCounts = [1];
      func1116.paramNames = ["aBinding"];
      func1116.definitionLine = 1096;
      func1116.definitionModule = "collectionsPrelude";
      var func1119 = function(argcv, var_initialBindings) {    // method withAll(_), line 1100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("withAll(_)", 0, numArgs - 1);
        }
        setLineNumber(1104);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call1120 = selfRequest(this, "empty", [0]);
        var var_result = call1120;
        setLineNumber(1105);    // compilenode block
        var block1122 = new GraceBlock(this, 1105, 1);
        // call case 2: outer request
        var call1123 = selfRequest(importedModules["collectionsPrelude"], "Binding", [0]);
        block1122.paramTypes = [call1123];
        var matches1124 = function(var_b) {
          // call case 2: outer request
          var call1125 = selfRequest(importedModules["collectionsPrelude"], "Binding", [0]);
          if (!Grace_isTrue(request(call1125, "matches(1)", [1], var_b)))
              return false;
          return true;
        };
        block1122.guard = matches1124;
        block1122.real = function block1122(var_b) {
          setLineNumber(1105);    // compilenode call
          // call case 6: other requests
          if (var_result === undefined) raiseUninitializedVariable("result");
          var call1126 = request(var_result, "add(1)", [1], var_b);
          return call1126;
        };
        let applyMeth1122 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth1122.methodName = "apply(1)";
        applyMeth1122.paramCounts = [1];
        applyMeth1122.paramNames = ["b"];
        applyMeth1122.definitionLine = 1105;
        applyMeth1122.definitionModule = "collectionsPrelude";
        block1122.methods["apply(1)"] = applyMeth1122;
        let matchesMeth1122 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth1122.methodName = "matches(1)";
        matchesMeth1122.paramCounts = [1];
        matchesMeth1122.paramNames = ["b"];
        matchesMeth1122.definitionLine = 1105;
        matchesMeth1122.definitionModule = "collectionsPrelude";
        block1122.methods["matches(1)"] = matchesMeth1122;
        // call case 6: other requests
        var call1121 = request(var_initialBindings, "do(1)", [1], block1122);
        return var_result;
      };    // end of method withAll(_)
      this.methods["withAll(1)"] = func1119;
      func1119.methodName = "withAll(1)";
      func1119.paramCounts = [1];
      func1119.paramNames = ["initialBindings"];
      func1119.definitionLine = 1100;
      func1119.definitionModule = "collectionsPrelude";
      var func1127 = function(argcv, var_source) {    // method <<(_), line 1109
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("<<(_)", 0, numArgs - 1);
        }
        setLineNumber(1109);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call1128 = selfRequest(this, "withAll(1)", [1], var_source);
        return call1128;
      };    // end of method <<(_)
      this.methods["<<(1)"] = func1127;
      func1127.methodName = "<<(1)";
      func1127.paramCounts = [1];
      func1127.paramNames = ["source"];
      func1127.definitionLine = 1109;
      func1127.definitionModule = "collectionsPrelude";
      var func1129 = function(argcv) {    // method empty, line 1111
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("dictionary.empty", "collectionsPrelude", 1111);
        var ouc_init = this.methods["empty$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method empty
      this.methods["empty"] = func1129;
      func1129.methodName = "empty";
      func1129.paramCounts = [0];
      func1129.paramNames = [];
      func1129.definitionLine = 1111;
      func1129.definitionModule = "collectionsPrelude";
      var func1130 = function(argcv, inheritingObject, aliases, exclusions) {    // method empty$build(_,_,_), line 1111
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("empty", 0, numArgs - 0);
        }
        var obj1131_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_collectionsPrelude_1111");
          this.outer_collectionsPrelude_1111 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(1115);    // reuse call
          var initFun1132 = selfRequest(importedModules["collectionsPrelude"], "collection$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.mods = undefined;
          var reader1133_mods = function() {  // reader method mods
              if (this.data.mods === undefined) raiseUninitializedVariable("mods");
              return this.data.mods;
          };
          reader1133_mods.isVar = true;
          this.methods["mods"] = reader1133_mods;
          var writer1134_mods = function(argcv, n) {   // writer method mods:=(_)
            this.data.mods = n;
            return GraceDone;
          };
          writer1134_mods.confidential = true;
          this.methods["mods:=(1)"] = writer1134_mods;
          this.data.numBindings = undefined;
          var reader1135_numBindings = function() {  // reader method numBindings
              if (this.data.numBindings === undefined) raiseUninitializedVariable("numBindings");
              return this.data.numBindings;
          };
          reader1135_numBindings.isVar = true;
          reader1135_numBindings.confidential = true;
          this.methods["numBindings"] = reader1135_numBindings;
          var writer1136_numBindings = function(argcv, n) {   // writer method numBindings:=(_)
            this.data.numBindings = n;
            return GraceDone;
          };
          writer1136_numBindings.confidential = true;
          this.methods["numBindings:=(1)"] = writer1136_numBindings;
          this.data.inner = undefined;
          var reader1137_inner = function() {  // reader method inner
              if (this.data.inner === undefined) raiseUninitializedVariable("inner");
              return this.data.inner;
          };
          reader1137_inner.isVar = true;
          reader1137_inner.confidential = true;
          this.methods["inner"] = reader1137_inner;
          var writer1138_inner = function(argcv, n) {   // writer method inner:=(_)
            this.data.inner = n;
            return GraceDone;
          };
          writer1138_inner.confidential = true;
          this.methods["inner:=(1)"] = writer1138_inner;
          var func1139 = function(argcv) {    // method size, line 1122
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(1122);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1140 = selfRequest(this, "numBindings", [0]);
            return call1140;
          };    // end of method size
          this.methods["size"] = func1139;
          func1139.methodName = "size";
          func1139.paramCounts = [0];
          func1139.paramNames = [];
          func1139.definitionLine = 1122;
          func1139.definitionModule = "collectionsPrelude";
          var func1141 = function(argcv, var_key__39__, var_value__39__) {    // method at(_)put(_), line 1123
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)put(_)", 0, numArgs - 2);
            }
            setLineNumber(1124);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1143 = selfRequest(this, "mods", [0]);
            var sum1144 = request(call1143, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1142 = selfRequest(this, "mods:=(1)", [1], sum1144);
            setLineNumber(1125);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1145 = selfRequest(this, "findPositionForAdd(1)", [1], var_key__39__);
            var var_t = call1145;
            var if1146 = GraceDone;
            setLineNumber(1126);    // compilenode op
            if (var_unused === undefined) raiseUninitializedVariable("unused");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1148 = selfRequest(this, "inner", [0]);
            var call1147 = request(call1148, "at(1)", [1], var_t);
            var opresult1149 = request(var_unused, "==(1)", [1], call1147);
            if (var_removed === undefined) raiseUninitializedVariable("removed");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1151 = selfRequest(this, "inner", [0]);
            var call1150 = request(call1151, "at(1)", [1], var_t);
            var opresult1152 = request(var_removed, "==(1)", [1], call1150);
            var opresult1153 = request(opresult1149, "||(1)", [1], opresult1152);
            if (Grace_isTrue(opresult1153)) {
              setLineNumber(1127);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1155 = selfRequest(this, "numBindings", [0]);
              var sum1156 = request(call1155, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1154 = selfRequest(this, "numBindings:=(1)", [1], sum1156);
              if1146 = call1154;
            }
            setLineNumber(1129);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call1159 = selfRequest(importedModules["collectionsPrelude"], "binding", [0]);
            var call1158 = request(call1159, "key(1)value(1)", [1, 1], var_key__39__, var_value__39__);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1160 = selfRequest(this, "inner", [0]);
            var call1157 = request(call1160, "at(1)put(1)", [1, 1], var_t, call1158);
            var if1161 = GraceDone;
            setLineNumber(1130);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1162 = selfRequest(this, "size", [0]);
            var prod1163 = request(call1162, "*(1)", [1], new GraceNum(2));
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1165 = selfRequest(this, "inner", [0]);
            var call1164 = request(call1165, "size", [0]);
            var opresult1166 = request(prod1163, ">(1)", [1], call1164);
            if (Grace_isTrue(opresult1166)) {
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1167 = selfRequest(this, "expand", [0]);
              if1161 = call1167;
            }
            return this;
          };    // end of method at(_)put(_)
          this.methods["at(1)put(1)"] = func1141;
          func1141.methodName = "at(1)put(1)";
          func1141.paramCounts = [1, 1];
          func1141.paramNames = ["key'", "value'"];
          func1141.definitionLine = 1123;
          func1141.definitionModule = "collectionsPrelude";
          var func1168 = function(argcv, var_aBinding) {    // method add(_), line 1133
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("add(_)", 0, numArgs - 1);
            }
            setLineNumber(1134);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1170 = selfRequest(this, "mods", [0]);
            var sum1171 = request(call1170, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1169 = selfRequest(this, "mods:=(1)", [1], sum1171);
            setLineNumber(1135);    // compilenode member
            // call case 6: other requests
            var call1173 = request(var_aBinding, "key", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1172 = selfRequest(this, "findPositionForAdd(1)", [1], call1173);
            var var_t = call1172;
            var if1174 = GraceDone;
            setLineNumber(1136);    // compilenode op
            if (var_unused === undefined) raiseUninitializedVariable("unused");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1176 = selfRequest(this, "inner", [0]);
            var call1175 = request(call1176, "at(1)", [1], var_t);
            var opresult1177 = request(var_unused, "==(1)", [1], call1175);
            if (var_removed === undefined) raiseUninitializedVariable("removed");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1179 = selfRequest(this, "inner", [0]);
            var call1178 = request(call1179, "at(1)", [1], var_t);
            var opresult1180 = request(var_removed, "==(1)", [1], call1178);
            var opresult1181 = request(opresult1177, "||(1)", [1], opresult1180);
            if (Grace_isTrue(opresult1181)) {
              setLineNumber(1137);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1183 = selfRequest(this, "numBindings", [0]);
              var sum1184 = request(call1183, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1182 = selfRequest(this, "numBindings:=(1)", [1], sum1184);
              if1174 = call1182;
            }
            setLineNumber(1139);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1186 = selfRequest(this, "inner", [0]);
            var call1185 = request(call1186, "at(1)put(1)", [1, 1], var_t, var_aBinding);
            var if1187 = GraceDone;
            setLineNumber(1140);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1188 = selfRequest(this, "size", [0]);
            var prod1189 = request(call1188, "*(1)", [1], new GraceNum(2));
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1191 = selfRequest(this, "inner", [0]);
            var call1190 = request(call1191, "size", [0]);
            var opresult1192 = request(prod1189, ">(1)", [1], call1190);
            if (Grace_isTrue(opresult1192)) {
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1193 = selfRequest(this, "expand", [0]);
              if1187 = call1193;
            }
            return this;
          };    // end of method add(_)
          this.methods["add(1)"] = func1168;
          func1168.methodName = "add(1)";
          func1168.paramCounts = [1];
          func1168.paramNames = ["aBinding"];
          func1168.definitionLine = 1133;
          func1168.definitionModule = "collectionsPrelude";
          var func1194 = function(argcv, var_bindings) {    // method addAll(_), line 1143
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addAll(_)", 0, numArgs - 1);
            }
            setLineNumber(1144);    // compilenode block
            var block1196 = new GraceBlock(this, 1144, 1);
            block1196.guard = jsTrue;
            block1196.real = function block1196(var_each) {
              setLineNumber(1144);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1197 = selfRequest(this, "add(1)", [1], var_each);
              return call1197;
            };
            let applyMeth1196 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1196.methodName = "apply(1)";
            applyMeth1196.paramCounts = [1];
            applyMeth1196.paramNames = ["each"];
            applyMeth1196.definitionLine = 1144;
            applyMeth1196.definitionModule = "collectionsPrelude";
            block1196.methods["apply(1)"] = applyMeth1196;
            let matchesMeth1196 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1196.methodName = "matches(1)";
            matchesMeth1196.paramCounts = [1];
            matchesMeth1196.paramNames = ["each"];
            matchesMeth1196.definitionLine = 1144;
            matchesMeth1196.definitionModule = "collectionsPrelude";
            block1196.methods["matches(1)"] = matchesMeth1196;
            // call case 6: other requests
            var call1195 = request(var_bindings, "do(1)", [1], block1196);
            return this;
          };    // end of method addAll(_)
          this.methods["addAll(1)"] = func1194;
          func1194.methodName = "addAll(1)";
          func1194.paramCounts = [1];
          func1194.paramNames = ["bindings"];
          func1194.definitionLine = 1143;
          func1194.definitionModule = "collectionsPrelude";
          var func1198 = function(argcv, var_k) {    // method at(_), line 1147
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("at(_)", 0, numArgs - 1);
            }
            setLineNumber(1148);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1200 = selfRequest(this, "findPosition(1)", [1], var_k);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1201 = selfRequest(this, "inner", [0]);
            var call1199 = request(call1201, "at(1)", [1], call1200);
            var var_b = call1199;
            var if1202 = GraceDone;
            setLineNumber(1149);    // compilenode member
            // call case 6: other requests
            var call1203 = request(var_b, "key", [0]);
            var opresult1204 = request(call1203, "==(1)", [1], var_k);
            if (Grace_isTrue(opresult1204)) {
              setLineNumber(1150);    // compilenode member
              // call case 6: other requests
              if (var_b === undefined) raiseUninitializedVariable("b");
              var call1205 = request(var_b, "value", [0]);
              return call1205;
            }
            setLineNumber(1152);    // compilenode string
            var string1207 = new GraceString("dictionary does not contain entry with key ");
            var opresult1208 = request(string1207, "++(1)", [1], var_k);
            var string1209 = new GraceString("");
            var opresult1210 = request(opresult1208, "++(1)", [1], string1209);
            // call case 6: other requests
            if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
            var call1206 = request(var_NoSuchObject, "raise(1)", [1], opresult1210);
            return call1206;
          };    // end of method at(_)
          this.methods["at(1)"] = func1198;
          func1198.methodName = "at(1)";
          func1198.paramCounts = [1];
          func1198.paramNames = ["k"];
          func1198.definitionLine = 1147;
          func1198.definitionModule = "collectionsPrelude";
          var func1211 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 1154
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(1155);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1213 = selfRequest(this, "findPosition(1)", [1], var_k);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1214 = selfRequest(this, "inner", [0]);
            var call1212 = request(call1214, "at(1)", [1], call1213);
            var var_b = call1212;
            var if1215 = GraceDone;
            setLineNumber(1156);    // compilenode member
            // call case 6: other requests
            var call1216 = request(var_b, "key", [0]);
            var opresult1217 = request(call1216, "==(1)", [1], var_k);
            if (Grace_isTrue(opresult1217)) {
              setLineNumber(1157);    // compilenode member
              // call case 6: other requests
              if (var_b === undefined) raiseUninitializedVariable("b");
              var call1218 = request(var_b, "value", [0]);
              return call1218;
            }
            setLineNumber(1159);    // compilenode member
            // call case 6: other requests
            var call1219 = request(var_action, "apply", [0]);
            return call1219;
          };    // end of method at(_)ifAbsent(_)
          this.methods["at(1)ifAbsent(1)"] = func1211;
          func1211.methodName = "at(1)ifAbsent(1)";
          func1211.paramCounts = [1, 1];
          func1211.paramNames = ["k", "action"];
          func1211.definitionLine = 1154;
          func1211.definitionModule = "collectionsPrelude";
          var func1220 = function(argcv, var_k) {    // method containsKey(_), line 1161
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("containsKey(_)", 0, numArgs - 1);
            }
            setLineNumber(1162);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1221 = selfRequest(this, "findPosition(1)", [1], var_k);
            var var_t = call1221;
            var if1222 = GraceDone;
            setLineNumber(1163);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1225 = selfRequest(this, "inner", [0]);
            var call1224 = request(call1225, "at(1)", [1], var_t);
            var call1223 = request(call1224, "key", [0]);
            var opresult1226 = request(call1223, "==(1)", [1], var_k);
            if (Grace_isTrue(opresult1226)) {
              setLineNumber(1164);    // compilenode return
              return GraceTrue;
            }
            return GraceFalse;
          };    // end of method containsKey(_)
          this.methods["containsKey(1)"] = func1220;
          func1220.methodName = "containsKey(1)";
          func1220.paramCounts = [1];
          func1220.paramNames = ["k"];
          func1220.definitionLine = 1161;
          func1220.definitionModule = "collectionsPrelude";
          var func1227 = function(argcv, var_keys) {    // method removeAllKeys(_), line 1168
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAllKeys(_)", 0, numArgs - 1);
            }
            setLineNumber(1169);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1229 = selfRequest(this, "mods", [0]);
            var sum1230 = request(call1229, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1228 = selfRequest(this, "mods:=(1)", [1], sum1230);
            setLineNumber(1170);    // compilenode block
            var block1232 = new GraceBlock(this, 1170, 1);
            block1232.guard = jsTrue;
            block1232.real = function block1232(var_k) {
              setLineNumber(1171);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1233 = selfRequest(this, "findPosition(1)", [1], var_k);
              var var_t = call1233;
              var if1234 = GraceDone;
              setLineNumber(1172);    // compilenode member
              // call case 6: other requests
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1237 = selfRequest(this, "inner", [0]);
              var call1236 = request(call1237, "at(1)", [1], var_t);
              var call1235 = request(call1236, "key", [0]);
              var opresult1238 = request(call1235, "==(1)", [1], var_k);
              if (Grace_isTrue(opresult1238)) {
                setLineNumber(1173);    // compilenode call
                if (var_t === undefined) raiseUninitializedVariable("t");
                if (var_removed === undefined) raiseUninitializedVariable("removed");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1240 = selfRequest(this, "inner", [0]);
                var call1239 = request(call1240, "at(1)put(1)", [1, 1], var_t, var_removed);
                setLineNumber(1174);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1242 = selfRequest(this, "numBindings", [0]);
                var diff1243 = request(call1242, "-(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1241 = selfRequest(this, "numBindings:=(1)", [1], diff1243);
                if1234 = call1241;
              } else {
                setLineNumber(1176);    // compilenode string
                var string1245 = new GraceString("dictionary does not contain entry with key ");
                var opresult1246 = request(string1245, "++(1)", [1], var_k);
                var string1247 = new GraceString("");
                var opresult1248 = request(opresult1246, "++(1)", [1], string1247);
                // call case 6: other requests
                if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
                var call1244 = request(var_NoSuchObject, "raise(1)", [1], opresult1248);
                if1234 = call1244;
              }
              return if1234;
            };
            let applyMeth1232 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1232.methodName = "apply(1)";
            applyMeth1232.paramCounts = [1];
            applyMeth1232.paramNames = ["k"];
            applyMeth1232.definitionLine = 1170;
            applyMeth1232.definitionModule = "collectionsPrelude";
            block1232.methods["apply(1)"] = applyMeth1232;
            let matchesMeth1232 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1232.methodName = "matches(1)";
            matchesMeth1232.paramCounts = [1];
            matchesMeth1232.paramNames = ["k"];
            matchesMeth1232.definitionLine = 1170;
            matchesMeth1232.definitionModule = "collectionsPrelude";
            block1232.methods["matches(1)"] = matchesMeth1232;
            // call case 2: outer request
            var call1231 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], var_keys, block1232);
            return this;
          };    // end of method removeAllKeys(_)
          this.methods["removeAllKeys(1)"] = func1227;
          func1227.methodName = "removeAllKeys(1)";
          func1227.paramCounts = [1];
          func1227.paramNames = ["keys"];
          func1227.definitionLine = 1168;
          func1227.definitionModule = "collectionsPrelude";
          var func1249 = function(argcv, var_k) {    // method removeKey(_), line 1181
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeKey(_)", 0, numArgs - 1);
            }
            setLineNumber(1182);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1251 = selfRequest(this, "mods", [0]);
            var sum1252 = request(call1251, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1250 = selfRequest(this, "mods:=(1)", [1], sum1252);
            setLineNumber(1183);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1253 = selfRequest(this, "findPosition(1)", [1], var_k);
            var var_t = call1253;
            var if1254 = GraceDone;
            setLineNumber(1184);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1257 = selfRequest(this, "inner", [0]);
            var call1256 = request(call1257, "at(1)", [1], var_t);
            var call1255 = request(call1256, "key", [0]);
            var opresult1258 = request(call1255, "==(1)", [1], var_k);
            if (Grace_isTrue(opresult1258)) {
              setLineNumber(1185);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1260 = selfRequest(this, "inner", [0]);
              var call1259 = request(call1260, "at(1)put(1)", [1, 1], var_t, var_removed);
              setLineNumber(1186);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1262 = selfRequest(this, "numBindings", [0]);
              var diff1263 = request(call1262, "-(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1261 = selfRequest(this, "numBindings:=(1)", [1], diff1263);
              if1254 = call1261;
            } else {
              setLineNumber(1188);    // compilenode string
              var string1265 = new GraceString("dictionary does not contain entry with key ");
              var opresult1266 = request(string1265, "++(1)", [1], var_k);
              var string1267 = new GraceString("");
              var opresult1268 = request(opresult1266, "++(1)", [1], string1267);
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call1264 = request(var_NoSuchObject, "raise(1)", [1], opresult1268);
              if1254 = call1264;
            }
            return this;
          };    // end of method removeKey(_)
          func1249.paramTypes = [];
          func1249.paramTypes.push([]);
          this.methods["removeKey(1)"] = func1249;
          func1249.methodName = "removeKey(1)";
          func1249.paramCounts = [1];
          func1249.paramNames = ["k"];
          func1249.definitionLine = 1181;
          func1249.definitionModule = "collectionsPrelude";
          var func1269 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 1192
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeKey(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(1193);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1271 = selfRequest(this, "mods", [0]);
            var sum1272 = request(call1271, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1270 = selfRequest(this, "mods:=(1)", [1], sum1272);
            setLineNumber(1194);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1273 = selfRequest(this, "findPosition(1)", [1], var_k);
            var var_t = call1273;
            var if1274 = GraceDone;
            setLineNumber(1195);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1277 = selfRequest(this, "inner", [0]);
            var call1276 = request(call1277, "at(1)", [1], var_t);
            var call1275 = request(call1276, "key", [0]);
            var opresult1278 = request(call1275, "==(1)", [1], var_k);
            if (Grace_isTrue(opresult1278)) {
              setLineNumber(1196);    // compilenode call
              if (var_t === undefined) raiseUninitializedVariable("t");
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1280 = selfRequest(this, "inner", [0]);
              var call1279 = request(call1280, "at(1)put(1)", [1, 1], var_t, var_removed);
              setLineNumber(1197);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1282 = selfRequest(this, "numBindings", [0]);
              var diff1283 = request(call1282, "-(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1281 = selfRequest(this, "numBindings:=(1)", [1], diff1283);
              if1274 = call1281;
            } else {
              setLineNumber(1199);    // compilenode member
              // call case 6: other requests
              var call1284 = request(var_action, "apply", [0]);
              if1274 = call1284;
            }
            return this;
          };    // end of method removeKey(_)ifAbsent(_)
          func1269.paramTypes = [];
          func1269.paramTypes.push([]);
          func1269.paramTypes.push([]);
          this.methods["removeKey(1)ifAbsent(1)"] = func1269;
          func1269.methodName = "removeKey(1)ifAbsent(1)";
          func1269.paramCounts = [1, 1];
          func1269.paramNames = ["k", "action"];
          func1269.definitionLine = 1192;
          func1269.definitionModule = "collectionsPrelude";
          var func1285 = function(argcv, var_removals) {    // method removeAllValues(_), line 1203
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeAllValues(_)", 0, numArgs - 1);
            }
            setLineNumber(1204);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1287 = selfRequest(this, "mods", [0]);
            var sum1288 = request(call1287, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1286 = selfRequest(this, "mods:=(1)", [1], sum1288);
            setLineNumber(1205);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1291 = selfRequest(this, "inner", [0]);
            var call1290 = request(call1291, "size", [0]);
            var diff1292 = request(call1290, "-(1)", [1], new GraceNum(1));
            var opresult1293 = request(new GraceNum(0), "..(1)", [1], diff1292);
            var block1294 = new GraceBlock(this, 1205, 1);
            block1294.guard = jsTrue;
            block1294.real = function block1294(var_i) {
              setLineNumber(1206);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1296 = selfRequest(this, "inner", [0]);
              var call1295 = request(call1296, "at(1)", [1], var_i);
              var var_a = call1295;
              var if1297 = GraceDone;
              setLineNumber(1207);    // compilenode member
              // call case 6: other requests
              if (var_a === undefined) raiseUninitializedVariable("a");
              var call1299 = request(var_a, "value", [0]);
              // call case 6: other requests
              var call1298 = request(var_removals, "contains(1)", [1], call1299);
              if (Grace_isTrue(call1298)) {
                setLineNumber(1208);    // compilenode call
                if (var_removed === undefined) raiseUninitializedVariable("removed");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1301 = selfRequest(this, "inner", [0]);
                var call1300 = request(call1301, "at(1)put(1)", [1, 1], var_i, var_removed);
                setLineNumber(1209);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1303 = selfRequest(this, "numBindings", [0]);
                var diff1304 = request(call1303, "-(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1302 = selfRequest(this, "numBindings:=(1)", [1], diff1304);
                if1297 = call1302;
              }
              return if1297;
            };
            let applyMeth1294 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1294.methodName = "apply(1)";
            applyMeth1294.paramCounts = [1];
            applyMeth1294.paramNames = ["i"];
            applyMeth1294.definitionLine = 1205;
            applyMeth1294.definitionModule = "collectionsPrelude";
            block1294.methods["apply(1)"] = applyMeth1294;
            let matchesMeth1294 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1294.methodName = "matches(1)";
            matchesMeth1294.paramCounts = [1];
            matchesMeth1294.paramNames = ["i"];
            matchesMeth1294.definitionLine = 1205;
            matchesMeth1294.definitionModule = "collectionsPrelude";
            block1294.methods["matches(1)"] = matchesMeth1294;
            // call case 2: outer request
            var call1289 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1293, block1294);
            return this;
          };    // end of method removeAllValues(_)
          this.methods["removeAllValues(1)"] = func1285;
          func1285.methodName = "removeAllValues(1)";
          func1285.paramCounts = [1];
          func1285.paramNames = ["removals"];
          func1285.definitionLine = 1203;
          func1285.definitionModule = "collectionsPrelude";
          var func1305 = function(argcv, var_v) {    // method removeValue(_), line 1214
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("removeValue(_)", 0, numArgs - 1);
            }
            setLineNumber(1216);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1307 = selfRequest(this, "mods", [0]);
            var sum1308 = request(call1307, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1306 = selfRequest(this, "mods:=(1)", [1], sum1308);
            setLineNumber(1217);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1309 = selfRequest(this, "numBindings", [0]);
            var var_initialNumBindings = call1309;
            setLineNumber(1218);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1312 = selfRequest(this, "inner", [0]);
            var call1311 = request(call1312, "size", [0]);
            var diff1313 = request(call1311, "-(1)", [1], new GraceNum(1));
            var opresult1314 = request(new GraceNum(0), "..(1)", [1], diff1313);
            var block1315 = new GraceBlock(this, 1218, 1);
            block1315.guard = jsTrue;
            block1315.real = function block1315(var_i) {
              setLineNumber(1219);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1317 = selfRequest(this, "inner", [0]);
              var call1316 = request(call1317, "at(1)", [1], var_i);
              var var_a = call1316;
              var if1318 = GraceDone;
              setLineNumber(1220);    // compilenode member
              // call case 6: other requests
              if (var_a === undefined) raiseUninitializedVariable("a");
              var call1319 = request(var_a, "value", [0]);
              var opresult1320 = request(var_v, "==(1)", [1], call1319);
              if (Grace_isTrue(opresult1320)) {
                setLineNumber(1221);    // compilenode call
                if (var_removed === undefined) raiseUninitializedVariable("removed");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1322 = selfRequest(this, "inner", [0]);
                var call1321 = request(call1322, "at(1)put(1)", [1, 1], var_i, var_removed);
                setLineNumber(1222);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1324 = selfRequest(this, "numBindings", [0]);
                var diff1325 = request(call1324, "-(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1323 = selfRequest(this, "numBindings:=(1)", [1], diff1325);
                if1318 = call1323;
              }
              return if1318;
            };
            let applyMeth1315 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1315.methodName = "apply(1)";
            applyMeth1315.paramCounts = [1];
            applyMeth1315.paramNames = ["i"];
            applyMeth1315.definitionLine = 1218;
            applyMeth1315.definitionModule = "collectionsPrelude";
            block1315.methods["apply(1)"] = applyMeth1315;
            let matchesMeth1315 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1315.methodName = "matches(1)";
            matchesMeth1315.paramCounts = [1];
            matchesMeth1315.paramNames = ["i"];
            matchesMeth1315.definitionLine = 1218;
            matchesMeth1315.definitionModule = "collectionsPrelude";
            block1315.methods["matches(1)"] = matchesMeth1315;
            // call case 2: outer request
            var call1310 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1314, block1315);
            var if1326 = GraceDone;
            setLineNumber(1225);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1327 = selfRequest(this, "numBindings", [0]);
            var opresult1328 = request(call1327, "==(1)", [1], var_initialNumBindings);
            if (Grace_isTrue(opresult1328)) {
              setLineNumber(1226);    // compilenode string
              var string1330 = new GraceString("dictionary does not contain entry with value ");
              var opresult1331 = request(string1330, "++(1)", [1], var_v);
              var string1332 = new GraceString("");
              var opresult1333 = request(opresult1331, "++(1)", [1], string1332);
              // call case 6: other requests
              if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
              var call1329 = request(var_NoSuchObject, "raise(1)", [1], opresult1333);
              if1326 = call1329;
            }
            return this;
          };    // end of method removeValue(_)
          this.methods["removeValue(1)"] = func1305;
          func1305.methodName = "removeValue(1)";
          func1305.paramCounts = [1];
          func1305.paramNames = ["v"];
          func1305.definitionLine = 1214;
          func1305.definitionModule = "collectionsPrelude";
          var func1334 = function(argcv, var_v, var_action) {    // method removeValue(_)ifAbsent(_), line 1230
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 2) && (numArgs !== 2)) {
                raiseTypeArgError("removeValue(_)ifAbsent(_)", 0, numArgs - 2);
            }
            setLineNumber(1232);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1336 = selfRequest(this, "mods", [0]);
            var sum1337 = request(call1336, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1335 = selfRequest(this, "mods:=(1)", [1], sum1337);
            setLineNumber(1233);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1338 = selfRequest(this, "numBindings", [0]);
            var var_initialNumBindings = call1338;
            setLineNumber(1234);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1341 = selfRequest(this, "inner", [0]);
            var call1340 = request(call1341, "size", [0]);
            var diff1342 = request(call1340, "-(1)", [1], new GraceNum(1));
            var opresult1343 = request(new GraceNum(0), "..(1)", [1], diff1342);
            var block1344 = new GraceBlock(this, 1234, 1);
            block1344.guard = jsTrue;
            block1344.real = function block1344(var_i) {
              setLineNumber(1235);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1346 = selfRequest(this, "inner", [0]);
              var call1345 = request(call1346, "at(1)", [1], var_i);
              var var_a = call1345;
              var if1347 = GraceDone;
              setLineNumber(1236);    // compilenode member
              // call case 6: other requests
              if (var_a === undefined) raiseUninitializedVariable("a");
              var call1348 = request(var_a, "value", [0]);
              var opresult1349 = request(var_v, "==(1)", [1], call1348);
              if (Grace_isTrue(opresult1349)) {
                setLineNumber(1237);    // compilenode call
                if (var_removed === undefined) raiseUninitializedVariable("removed");
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1351 = selfRequest(this, "inner", [0]);
                var call1350 = request(call1351, "at(1)put(1)", [1, 1], var_i, var_removed);
                setLineNumber(1238);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1353 = selfRequest(this, "numBindings", [0]);
                var diff1354 = request(call1353, "-(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1352 = selfRequest(this, "numBindings:=(1)", [1], diff1354);
                if1347 = call1352;
              }
              return if1347;
            };
            let applyMeth1344 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1344.methodName = "apply(1)";
            applyMeth1344.paramCounts = [1];
            applyMeth1344.paramNames = ["i"];
            applyMeth1344.definitionLine = 1234;
            applyMeth1344.definitionModule = "collectionsPrelude";
            block1344.methods["apply(1)"] = applyMeth1344;
            let matchesMeth1344 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1344.methodName = "matches(1)";
            matchesMeth1344.paramCounts = [1];
            matchesMeth1344.paramNames = ["i"];
            matchesMeth1344.definitionLine = 1234;
            matchesMeth1344.definitionModule = "collectionsPrelude";
            block1344.methods["matches(1)"] = matchesMeth1344;
            // call case 2: outer request
            var call1339 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1343, block1344);
            var if1355 = GraceDone;
            setLineNumber(1241);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1356 = selfRequest(this, "numBindings", [0]);
            var opresult1357 = request(call1356, "==(1)", [1], var_initialNumBindings);
            if (Grace_isTrue(opresult1357)) {
              setLineNumber(1242);    // compilenode member
              // call case 6: other requests
              var call1358 = request(var_action, "apply", [0]);
              if1355 = call1358;
            }
            return this;
          };    // end of method removeValue(_)ifAbsent(_)
          this.methods["removeValue(1)ifAbsent(1)"] = func1334;
          func1334.methodName = "removeValue(1)ifAbsent(1)";
          func1334.paramCounts = [1, 1];
          func1334.paramNames = ["v", "action"];
          func1334.definitionLine = 1230;
          func1334.definitionModule = "collectionsPrelude";
          var func1359 = function(argcv) {    // method clear, line 1246
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("clear", 0, numArgs - 0);
            }
            setLineNumber(1247);    // compilenode num
            // call case 6: other requests
            // call case 2: outer request
            var call1362 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call1361 = request(call1362, "new(1)", [1], new GraceNum(8));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1360 = selfRequest(this, "inner:=(1)", [1], call1361);
            setLineNumber(1248);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1363 = selfRequest(this, "numBindings:=(1)", [1], new GraceNum(0));
            setLineNumber(1249);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1365 = selfRequest(this, "mods", [0]);
            var sum1366 = request(call1365, "+(1)", [1], new GraceNum(1));
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1364 = selfRequest(this, "mods:=(1)", [1], sum1366);
            setLineNumber(1250);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1369 = selfRequest(this, "inner", [0]);
            var call1368 = request(call1369, "size", [0]);
            var diff1370 = request(call1368, "-(1)", [1], new GraceNum(1));
            var opresult1371 = request(new GraceNum(0), "..(1)", [1], diff1370);
            var block1372 = new GraceBlock(this, 1250, 1);
            block1372.guard = jsTrue;
            block1372.real = function block1372(var_i) {
              setLineNumber(1251);    // compilenode call
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1374 = selfRequest(this, "inner", [0]);
              var call1373 = request(call1374, "at(1)put(1)", [1, 1], var_i, var_unused);
              return call1373;
            };
            let applyMeth1372 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1372.methodName = "apply(1)";
            applyMeth1372.paramCounts = [1];
            applyMeth1372.paramNames = ["i"];
            applyMeth1372.definitionLine = 1250;
            applyMeth1372.definitionModule = "collectionsPrelude";
            block1372.methods["apply(1)"] = applyMeth1372;
            let matchesMeth1372 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1372.methodName = "matches(1)";
            matchesMeth1372.paramCounts = [1];
            matchesMeth1372.paramNames = ["i"];
            matchesMeth1372.definitionLine = 1250;
            matchesMeth1372.definitionModule = "collectionsPrelude";
            block1372.methods["matches(1)"] = matchesMeth1372;
            // call case 2: outer request
            var call1367 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1371, block1372);
            return this;
          };    // end of method clear
          this.methods["clear"] = func1359;
          func1359.methodName = "clear";
          func1359.paramCounts = [0];
          func1359.paramNames = [];
          func1359.definitionLine = 1246;
          func1359.definitionModule = "collectionsPrelude";
          var func1375 = function(argcv, var_v) {    // method containsValue(_), line 1255
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("containsValue(_)", 0, numArgs - 1);
            }
            setLineNumber(1256);    // compilenode block
            var block1377 = new GraceBlock(this, 1256, 1);
            block1377.guard = jsTrue;
            block1377.real = function block1377(var_each) {
              var if1378 = GraceDone;
              setLineNumber(1257);    // compilenode op
              var opresult1379 = request(var_v, "==(1)", [1], var_each);
              if (Grace_isTrue(opresult1379)) {
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if1378;
            };
            let applyMeth1377 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1377.methodName = "apply(1)";
            applyMeth1377.paramCounts = [1];
            applyMeth1377.paramNames = ["each"];
            applyMeth1377.definitionLine = 1256;
            applyMeth1377.definitionModule = "collectionsPrelude";
            block1377.methods["apply(1)"] = applyMeth1377;
            let matchesMeth1377 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1377.methodName = "matches(1)";
            matchesMeth1377.paramCounts = [1];
            matchesMeth1377.paramNames = ["each"];
            matchesMeth1377.definitionLine = 1256;
            matchesMeth1377.definitionModule = "collectionsPrelude";
            block1377.methods["matches(1)"] = matchesMeth1377;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1376 = selfRequest(this, "valuesDo(1)", [1], block1377);
            return GraceFalse;
          };    // end of method containsValue(_)
          this.methods["containsValue(1)"] = func1375;
          func1375.methodName = "containsValue(1)";
          func1375.paramCounts = [1];
          func1375.paramNames = ["v"];
          func1375.definitionLine = 1255;
          func1375.definitionModule = "collectionsPrelude";
          var func1380 = function(argcv, var_v) {    // method contains(_), line 1261
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("contains(_)", 0, numArgs - 1);
            }
            setLineNumber(1261);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1381 = selfRequest(this, "containsValue(1)", [1], var_v);
            return call1381;
          };    // end of method contains(_)
          this.methods["contains(1)"] = func1380;
          func1380.methodName = "contains(1)";
          func1380.paramCounts = [1];
          func1380.paramNames = ["v"];
          func1380.definitionLine = 1261;
          func1380.definitionModule = "collectionsPrelude";
          var func1382 = function(argcv, var_x) {    // method findPosition(_), line 1263
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("findPosition(_)", 0, numArgs - 1);
            }
            setLineNumber(1264);    // compilenode member
            // call case 6: other requests
            var call1383 = request(var_x, "hash", [0]);
            var var_h = call1383;
            setLineNumber(1265);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1385 = selfRequest(this, "inner", [0]);
            var call1384 = request(call1385, "size", [0]);
            var var_s = call1384;
            setLineNumber(1266);    // compilenode op
            var modulus1386 = request(var_h, "%(1)", [1], var_s);
            var var_t = modulus1386;
            setLineNumber(1267);    // compilenode num
            var var_jump = new GraceNum(5);
            setLineNumber(1268);    // compilenode block
            var block1388 = new GraceBlock(this, 1268, 0);
            block1388.guard = jsTrue;
            block1388.real = function block1388() {
              setLineNumber(1268);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1390 = selfRequest(this, "inner", [0]);
              var call1389 = request(call1390, "at(1)", [1], var_t);
              var opresult1391 = request(var_unused, "\u2260(1)", [1], call1389);
              return opresult1391;
            };
            let applyMeth1388 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1388.methodName = "apply";
            applyMeth1388.paramCounts = [0];
            applyMeth1388.paramNames = [];
            applyMeth1388.definitionLine = 1268;
            applyMeth1388.definitionModule = "collectionsPrelude";
            block1388.methods["apply"] = applyMeth1388;
            var block1392 = new GraceBlock(this, 1268, 0);
            block1392.guard = jsTrue;
            block1392.real = function block1392() {
              var if1393 = GraceDone;
              setLineNumber(1269);    // compilenode member
              // call case 6: other requests
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1396 = selfRequest(this, "inner", [0]);
              var call1395 = request(call1396, "at(1)", [1], var_t);
              var call1394 = request(call1395, "key", [0]);
              var opresult1397 = request(call1394, "==(1)", [1], var_x);
              if (Grace_isTrue(opresult1397)) {
                setLineNumber(1270);    // compilenode return
                if (var_t === undefined) raiseUninitializedVariable("t");
                throw new ReturnException(var_t, returnTarget);
              }
              var if1398 = GraceDone;
              setLineNumber(1272);    // compilenode op
              if (var_jump === undefined) raiseUninitializedVariable("jump");
              var opresult1399 = request(var_jump, "\u2260(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1399)) {
                setLineNumber(1273);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var prod1400 = request(var_t, "*(1)", [1], new GraceNum(3));
                var sum1401 = request(prod1400, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus1402 = request(sum1401, "%(1)", [1], var_s);
                var_t = modulus1402;
                setLineNumber(1274);    // compilenode op
                if (var_jump === undefined) raiseUninitializedVariable("jump");
                var diff1403 = request(var_jump, "-(1)", [1], new GraceNum(1));
                var_jump = diff1403;
                if1398 = GraceDone;
              } else {
                setLineNumber(1276);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var sum1404 = request(var_t, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus1405 = request(sum1404, "%(1)", [1], var_s);
                var_t = modulus1405;
                if1398 = GraceDone;
              }
              return if1398;
            };
            let applyMeth1392 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1392.methodName = "apply";
            applyMeth1392.paramCounts = [0];
            applyMeth1392.paramNames = [];
            applyMeth1392.definitionLine = 1268;
            applyMeth1392.definitionModule = "collectionsPrelude";
            block1392.methods["apply"] = applyMeth1392;
            // call case 2: outer request
            var call1387 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block1388, block1392);
            setLineNumber(1279);    // compilenode return
            return var_t;
          };    // end of method findPosition(_)
          func1382.confidential = true;
          this.methods["findPosition(1)"] = func1382;
          func1382.methodName = "findPosition(1)";
          func1382.paramCounts = [1];
          func1382.paramNames = ["x"];
          func1382.definitionLine = 1263;
          func1382.definitionModule = "collectionsPrelude";
          var func1406 = function(argcv, var_x) {    // method findPositionForAdd(_), line 1281
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("findPositionForAdd(_)", 0, numArgs - 1);
            }
            setLineNumber(1282);    // compilenode member
            // call case 6: other requests
            var call1407 = request(var_x, "hash", [0]);
            var var_h = call1407;
            setLineNumber(1283);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1409 = selfRequest(this, "inner", [0]);
            var call1408 = request(call1409, "size", [0]);
            var var_s = call1408;
            setLineNumber(1284);    // compilenode op
            var modulus1410 = request(var_h, "%(1)", [1], var_s);
            var var_t = modulus1410;
            setLineNumber(1285);    // compilenode num
            var var_jump = new GraceNum(5);
            setLineNumber(1286);    // compilenode block
            var block1412 = new GraceBlock(this, 1286, 0);
            block1412.guard = jsTrue;
            block1412.real = function block1412() {
              setLineNumber(1286);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1414 = selfRequest(this, "inner", [0]);
              var call1413 = request(call1414, "at(1)", [1], var_t);
              var opresult1415 = request(var_unused, "\u2260(1)", [1], call1413);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1417 = selfRequest(this, "inner", [0]);
              var call1416 = request(call1417, "at(1)", [1], var_t);
              var opresult1418 = request(var_removed, "\u2260(1)", [1], call1416);
              var opresult1419 = request(opresult1415, "&&(1)", [1], opresult1418);
              return opresult1419;
            };
            let applyMeth1412 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1412.methodName = "apply";
            applyMeth1412.paramCounts = [0];
            applyMeth1412.paramNames = [];
            applyMeth1412.definitionLine = 1286;
            applyMeth1412.definitionModule = "collectionsPrelude";
            block1412.methods["apply"] = applyMeth1412;
            var block1420 = new GraceBlock(this, 1286, 0);
            block1420.guard = jsTrue;
            block1420.real = function block1420() {
              var if1421 = GraceDone;
              setLineNumber(1287);    // compilenode member
              // call case 6: other requests
              if (var_t === undefined) raiseUninitializedVariable("t");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1424 = selfRequest(this, "inner", [0]);
              var call1423 = request(call1424, "at(1)", [1], var_t);
              var call1422 = request(call1423, "key", [0]);
              var opresult1425 = request(call1422, "==(1)", [1], var_x);
              if (Grace_isTrue(opresult1425)) {
                setLineNumber(1288);    // compilenode return
                if (var_t === undefined) raiseUninitializedVariable("t");
                throw new ReturnException(var_t, returnTarget);
              }
              var if1426 = GraceDone;
              setLineNumber(1290);    // compilenode op
              if (var_jump === undefined) raiseUninitializedVariable("jump");
              var opresult1427 = request(var_jump, "\u2260(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1427)) {
                setLineNumber(1291);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var prod1428 = request(var_t, "*(1)", [1], new GraceNum(3));
                var sum1429 = request(prod1428, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus1430 = request(sum1429, "%(1)", [1], var_s);
                var_t = modulus1430;
                setLineNumber(1292);    // compilenode op
                if (var_jump === undefined) raiseUninitializedVariable("jump");
                var diff1431 = request(var_jump, "-(1)", [1], new GraceNum(1));
                var_jump = diff1431;
                if1426 = GraceDone;
              } else {
                setLineNumber(1294);    // compilenode op
                if (var_t === undefined) raiseUninitializedVariable("t");
                var sum1432 = request(var_t, "+(1)", [1], new GraceNum(1));
                if (var_s === undefined) raiseUninitializedVariable("s");
                var modulus1433 = request(sum1432, "%(1)", [1], var_s);
                var_t = modulus1433;
                if1426 = GraceDone;
              }
              return if1426;
            };
            let applyMeth1420 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1420.methodName = "apply";
            applyMeth1420.paramCounts = [0];
            applyMeth1420.paramNames = [];
            applyMeth1420.definitionLine = 1286;
            applyMeth1420.definitionModule = "collectionsPrelude";
            block1420.methods["apply"] = applyMeth1420;
            // call case 2: outer request
            var call1411 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block1412, block1420);
            setLineNumber(1297);    // compilenode return
            return var_t;
          };    // end of method findPositionForAdd(_)
          func1406.confidential = true;
          this.methods["findPositionForAdd(1)"] = func1406;
          func1406.methodName = "findPositionForAdd(1)";
          func1406.paramCounts = [1];
          func1406.paramNames = ["x"];
          func1406.definitionLine = 1281;
          func1406.definitionModule = "collectionsPrelude";
          var func1434 = function(argcv) {    // method asString, line 1299
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(1302);    // compilenode string
            var string1435 = new GraceString("dictionary [");
            var var_s = string1435;
            setLineNumber(1303);    // compilenode vardec
            var var_firstElement = GraceTrue;
            setLineNumber(1304);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1438 = selfRequest(this, "inner", [0]);
            var call1437 = request(call1438, "size", [0]);
            var diff1439 = request(call1437, "-(1)", [1], new GraceNum(1));
            var opresult1440 = request(new GraceNum(0), "..(1)", [1], diff1439);
            var block1441 = new GraceBlock(this, 1304, 1);
            block1441.guard = jsTrue;
            block1441.real = function block1441(var_i) {
              setLineNumber(1305);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1443 = selfRequest(this, "inner", [0]);
              var call1442 = request(call1443, "at(1)", [1], var_i);
              var var_a = call1442;
              var if1444 = GraceDone;
              setLineNumber(1306);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1445 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1446 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1447 = request(opresult1445, "&&(1)", [1], opresult1446);
              if (Grace_isTrue(opresult1447)) {
                var if1448 = GraceDone;
                setLineNumber(1307);    // compilenode call
                // call case 6: other requests
                if (var_firstElement === undefined) raiseUninitializedVariable("firstElement");
                var call1449 = request(var_firstElement, "prefix!", [0]);
                if (Grace_isTrue(call1449)) {
                  setLineNumber(1308);    // compilenode op
                  if (var_s === undefined) raiseUninitializedVariable("s");
                  var string1450 = new GraceString(", ");
                  var opresult1451 = request(var_s, "++(1)", [1], string1450);
                  var_s = opresult1451;
                  if1448 = GraceDone;
                } else {
                  setLineNumber(1310);    // compilenode bind
                  var_firstElement = GraceFalse;
                  if1448 = GraceDone;
                }
                setLineNumber(1312);    // compilenode op
                if (var_s === undefined) raiseUninitializedVariable("s");
                var string1452 = new GraceString("");
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1453 = request(var_a, "key", [0]);
                var opresult1454 = request(string1452, "++(1)", [1], call1453);
                var string1455 = new GraceString("::");
                var opresult1456 = request(opresult1454, "++(1)", [1], string1455);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1457 = request(var_a, "value", [0]);
                var opresult1458 = request(opresult1456, "++(1)", [1], call1457);
                var string1459 = new GraceString("");
                var opresult1460 = request(opresult1458, "++(1)", [1], string1459);
                var opresult1461 = request(var_s, "++(1)", [1], opresult1460);
                var_s = opresult1461;
                if1444 = GraceDone;
              }
              return if1444;
            };
            let applyMeth1441 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1441.methodName = "apply(1)";
            applyMeth1441.paramCounts = [1];
            applyMeth1441.paramNames = ["i"];
            applyMeth1441.definitionLine = 1304;
            applyMeth1441.definitionModule = "collectionsPrelude";
            block1441.methods["apply(1)"] = applyMeth1441;
            let matchesMeth1441 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1441.methodName = "matches(1)";
            matchesMeth1441.paramCounts = [1];
            matchesMeth1441.paramNames = ["i"];
            matchesMeth1441.definitionLine = 1304;
            matchesMeth1441.definitionModule = "collectionsPrelude";
            block1441.methods["matches(1)"] = matchesMeth1441;
            // call case 2: outer request
            var call1436 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1440, block1441);
            setLineNumber(1315);    // compilenode string
            var string1462 = new GraceString("]");
            var opresult1463 = request(var_s, "++(1)", [1], string1462);
            return opresult1463;
          };    // end of method asString
          this.methods["asString"] = func1434;
          func1434.methodName = "asString";
          func1434.paramCounts = [0];
          func1434.paramNames = [];
          func1434.definitionLine = 1299;
          func1434.definitionModule = "collectionsPrelude";
          var func1464 = function(argcv) {    // method asDebugString, line 1317
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asDebugString", 0, numArgs - 0);
            }
            setLineNumber(1318);    // compilenode string
            var string1465 = new GraceString("dict\u27ec");
            var var_s = string1465;
            setLineNumber(1319);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1468 = selfRequest(this, "inner", [0]);
            var call1467 = request(call1468, "size", [0]);
            var diff1469 = request(call1467, "-(1)", [1], new GraceNum(1));
            var opresult1470 = request(new GraceNum(0), "..(1)", [1], diff1469);
            var block1471 = new GraceBlock(this, 1319, 1);
            block1471.guard = jsTrue;
            block1471.real = function block1471(var_i) {
              var if1472 = GraceDone;
              setLineNumber(1320);    // compilenode num
              var opresult1473 = request(var_i, ">(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1473)) {
                if (var_s === undefined) raiseUninitializedVariable("s");
                var string1474 = new GraceString(", ");
                var opresult1475 = request(var_s, "++(1)", [1], string1474);
                var_s = opresult1475;
                if1472 = GraceDone;
              }
              setLineNumber(1321);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1477 = selfRequest(this, "inner", [0]);
              var call1476 = request(call1477, "at(1)", [1], var_i);
              var var_a = call1476;
              var if1478 = GraceDone;
              setLineNumber(1322);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1479 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1480 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1481 = request(opresult1479, "&&(1)", [1], opresult1480);
              if (Grace_isTrue(opresult1481)) {
                setLineNumber(1323);    // compilenode op
                if (var_s === undefined) raiseUninitializedVariable("s");
                var string1482 = new GraceString("");
                var opresult1483 = request(string1482, "++(1)", [1], var_i);
                var string1484 = new GraceString("\u2192");
                var opresult1485 = request(opresult1483, "++(1)", [1], string1484);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1486 = request(var_a, "key", [0]);
                var opresult1487 = request(opresult1485, "++(1)", [1], call1486);
                var string1488 = new GraceString("::");
                var opresult1489 = request(opresult1487, "++(1)", [1], string1488);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1490 = request(var_a, "value", [0]);
                var opresult1491 = request(opresult1489, "++(1)", [1], call1490);
                var string1492 = new GraceString("");
                var opresult1493 = request(opresult1491, "++(1)", [1], string1492);
                var opresult1494 = request(var_s, "++(1)", [1], opresult1493);
                var_s = opresult1494;
                if1478 = GraceDone;
              } else {
                setLineNumber(1325);    // compilenode op
                if (var_s === undefined) raiseUninitializedVariable("s");
                var string1495 = new GraceString("");
                var opresult1496 = request(string1495, "++(1)", [1], var_i);
                var string1497 = new GraceString("\u2192");
                var opresult1498 = request(opresult1496, "++(1)", [1], string1497);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1499 = request(var_a, "asDebugString", [0]);
                var opresult1500 = request(opresult1498, "++(1)", [1], call1499);
                var string1501 = new GraceString("");
                var opresult1502 = request(opresult1500, "++(1)", [1], string1501);
                var opresult1503 = request(var_s, "++(1)", [1], opresult1502);
                var_s = opresult1503;
                if1478 = GraceDone;
              }
              return if1478;
            };
            let applyMeth1471 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1471.methodName = "apply(1)";
            applyMeth1471.paramCounts = [1];
            applyMeth1471.paramNames = ["i"];
            applyMeth1471.definitionLine = 1319;
            applyMeth1471.definitionModule = "collectionsPrelude";
            block1471.methods["apply(1)"] = applyMeth1471;
            let matchesMeth1471 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1471.methodName = "matches(1)";
            matchesMeth1471.paramCounts = [1];
            matchesMeth1471.paramNames = ["i"];
            matchesMeth1471.definitionLine = 1319;
            matchesMeth1471.definitionModule = "collectionsPrelude";
            block1471.methods["matches(1)"] = matchesMeth1471;
            // call case 2: outer request
            var call1466 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1470, block1471);
            setLineNumber(1328);    // compilenode string
            var string1504 = new GraceString("\u27ed");
            var opresult1505 = request(var_s, "++(1)", [1], string1504);
            return opresult1505;
          };    // end of method asDebugString
          this.methods["asDebugString"] = func1464;
          func1464.methodName = "asDebugString";
          func1464.paramCounts = [0];
          func1464.paramNames = [];
          func1464.definitionLine = 1317;
          func1464.definitionModule = "collectionsPrelude";
          var func1506 = function(argcv) {    // method keys, line 1330
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("keys", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.keys", "collectionsPrelude", 1330);
            var ouc_init = this.methods["keys$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method keys
          this.methods["keys"] = func1506;
          func1506.methodName = "keys";
          func1506.paramCounts = [0];
          func1506.paramNames = [];
          func1506.definitionLine = 1330;
          func1506.definitionModule = "collectionsPrelude";
          var func1507 = function(argcv, inheritingObject, aliases, exclusions) {    // method keys$build(_,_,_), line 1330
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("keys", 0, numArgs - 0);
            }
            setLineNumber(1331);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj1508_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_1332");
              this.outer_collectionsPrelude_1332 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(1333);    // reuse call
              var initFun1509 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func1510 = function(argcv) {    // method iterator, line 1334
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var ouc = emptyGraceObject("dictionary.empty.keys.iterator", "collectionsPrelude", 1334);
                var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
                ouc_init.call(ouc);
                return ouc;
              };    // end of method iterator
              this.methods["iterator"] = func1510;
              func1510.methodName = "iterator";
              func1510.paramCounts = [0];
              func1510.paramNames = [];
              func1510.definitionLine = 1334;
              func1510.definitionModule = "collectionsPrelude";
              var func1511 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 1334
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 4;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var obj1512_build = function(ignore, outerObj, aliases, exclusions) {
                  this.closureKeys = this.closureKeys || [];
                  this.closureKeys.push("outer_collectionsPrelude_1334");
                  this.outer_collectionsPrelude_1334 = outerObj;
                  const inheritedExclusions = { };
                  for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                      const exMeth = exclusions[eix];
                      inheritedExclusions[exMeth] = this.methods[exMeth]; };
                  this.data.sourceIterator = undefined;
                  var reader1513_sourceIterator = function() {  // reader method sourceIterator
                      if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
                      return this.data.sourceIterator;
                  };
                  reader1513_sourceIterator.isDef = true;
                  reader1513_sourceIterator.confidential = true;
                  this.methods["sourceIterator"] = reader1513_sourceIterator;
                  var func1514 = function(argcv) {    // method hasNext, line 1336
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("hasNext", 0, numArgs - 0);
                    }
                    setLineNumber(1336);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call1516 = selfRequest(this, "sourceIterator", [0]);
                    var call1515 = request(call1516, "hasNext", [0]);
                    return call1515;
                  };    // end of method hasNext
                  this.methods["hasNext"] = func1514;
                  func1514.methodName = "hasNext";
                  func1514.paramCounts = [0];
                  func1514.paramNames = [];
                  func1514.definitionLine = 1336;
                  func1514.definitionModule = "collectionsPrelude";
                  var func1517 = function(argcv) {    // method next, line 1337
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("next", 0, numArgs - 0);
                    }
                    setLineNumber(1337);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call1520 = selfRequest(this, "sourceIterator", [0]);
                    var call1519 = request(call1520, "next", [0]);
                    var call1518 = request(call1519, "key", [0]);
                    return call1518;
                  };    // end of method next
                  this.methods["next"] = func1517;
                  func1517.methodName = "next";
                  func1517.paramCounts = [0];
                  func1517.paramNames = [];
                  func1517.definitionLine = 1337;
                  func1517.definitionModule = "collectionsPrelude";
                  var func1521 = function(argcv) {    // method asString, line 1338
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("asString", 0, numArgs - 0);
                    }
                    setLineNumber(1339);    // compilenode string
                    var string1522 = new GraceString("an iterator over keys of ");
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var opresult1523 = request(string1522, "++(1)", [1], var_sourceDictionary);
                    var string1524 = new GraceString("");
                    var opresult1525 = request(opresult1523, "++(1)", [1], string1524);
                    return opresult1525;
                  };    // end of method asString
                  this.methods["asString"] = func1521;
                  func1521.methodName = "asString";
                  func1521.paramCounts = [0];
                  func1521.paramNames = [];
                  func1521.definitionLine = 1338;
                  func1521.definitionModule = "collectionsPrelude";
                  const overridenByAliases = { };
                  for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                      const a = aliases[aix];
                      const newNm = a.newName;
                      const oldNm = a.oldName;
                      overridenByAliases[newNm] = this.methods[newNm];
                      const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                      m.definitionLine = 1334;
                      m.definitionModule = "collectionsPrelude";
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
                  var obj1512_init = function() {    // init of object on line 1334
                    setLineNumber(1335);    // compilenode member
                    // call case 6: other requests
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var call1526 = request(var_sourceDictionary, "bindingsIterator", [0]);
                    this.data.sourceIterator = call1526;
                  };
                  return obj1512_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj1512_init = obj1512_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj1512_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
              };    // end of method iterator$build(_,_,_)
              this.methods["iterator$build(3)"] = func1511;
              func1511.methodName = "iterator$build(3)";
              func1511.paramCounts = [0];
              func1511.paramNames = [];
              func1511.definitionLine = 1334;
              func1511.definitionModule = "collectionsPrelude";
              this.data.size = undefined;
              var reader1527_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader1527_size.isDef = true;
              this.methods["size"] = reader1527_size;
              var func1528 = function(argcv) {    // method asDebugString, line 1343
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(1344);    // compilenode string
                var string1529 = new GraceString("a lazy sequence over keys of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult1530 = request(string1529, "++(1)", [1], var_sourceDictionary);
                var string1531 = new GraceString("");
                var opresult1532 = request(opresult1530, "++(1)", [1], string1531);
                return opresult1532;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func1528;
              func1528.methodName = "asDebugString";
              func1528.paramCounts = [0];
              func1528.paramNames = [];
              func1528.definitionLine = 1343;
              func1528.definitionModule = "collectionsPrelude";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 1332;
                  m.definitionModule = "collectionsPrelude";
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
              var obj1508_init = function() {    // init of object on line 1332
                setLineNumber(1342);    // compilenode member
                // call case 6: other requests
                var call1533 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call1533;
              };
              return obj1508_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj1508_init = obj1508_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj1508_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method keys$build(_,_,_)
          this.methods["keys$build(3)"] = func1507;
          func1507.methodName = "keys$build(3)";
          func1507.paramCounts = [0];
          func1507.paramNames = [];
          func1507.definitionLine = 1330;
          func1507.definitionModule = "collectionsPrelude";
          var func1534 = function(argcv) {    // method values, line 1348
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("values", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.values", "collectionsPrelude", 1348);
            var ouc_init = this.methods["values$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method values
          this.methods["values"] = func1534;
          func1534.methodName = "values";
          func1534.paramCounts = [0];
          func1534.paramNames = [];
          func1534.definitionLine = 1348;
          func1534.definitionModule = "collectionsPrelude";
          var func1535 = function(argcv, inheritingObject, aliases, exclusions) {    // method values$build(_,_,_), line 1348
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("values", 0, numArgs - 0);
            }
            setLineNumber(1349);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj1536_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_1350");
              this.outer_collectionsPrelude_1350 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(1351);    // reuse call
              var initFun1537 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func1538 = function(argcv) {    // method iterator, line 1352
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var ouc = emptyGraceObject("dictionary.empty.values.iterator", "collectionsPrelude", 1352);
                var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
                ouc_init.call(ouc);
                return ouc;
              };    // end of method iterator
              this.methods["iterator"] = func1538;
              func1538.methodName = "iterator";
              func1538.paramCounts = [0];
              func1538.paramNames = [];
              func1538.definitionLine = 1352;
              func1538.definitionModule = "collectionsPrelude";
              var func1539 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 1352
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 4;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                var obj1540_build = function(ignore, outerObj, aliases, exclusions) {
                  this.closureKeys = this.closureKeys || [];
                  this.closureKeys.push("outer_collectionsPrelude_1352");
                  this.outer_collectionsPrelude_1352 = outerObj;
                  const inheritedExclusions = { };
                  for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                      const exMeth = exclusions[eix];
                      inheritedExclusions[exMeth] = this.methods[exMeth]; };
                  this.data.sourceIterator = undefined;
                  var reader1541_sourceIterator = function() {  // reader method sourceIterator
                      if (this.data.sourceIterator === undefined) raiseUninitializedVariable("sourceIterator");
                      return this.data.sourceIterator;
                  };
                  reader1541_sourceIterator.isDef = true;
                  reader1541_sourceIterator.confidential = true;
                  this.methods["sourceIterator"] = reader1541_sourceIterator;
                  var func1542 = function(argcv) {    // method hasNext, line 1355
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("hasNext", 0, numArgs - 0);
                    }
                    setLineNumber(1355);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call1544 = selfRequest(this, "sourceIterator", [0]);
                    var call1543 = request(call1544, "hasNext", [0]);
                    return call1543;
                  };    // end of method hasNext
                  this.methods["hasNext"] = func1542;
                  func1542.methodName = "hasNext";
                  func1542.paramCounts = [0];
                  func1542.paramNames = [];
                  func1542.definitionLine = 1355;
                  func1542.definitionModule = "collectionsPrelude";
                  var func1545 = function(argcv) {    // method next, line 1356
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("next", 0, numArgs - 0);
                    }
                    setLineNumber(1356);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 4: self request with 0 args and 0 typeArgs 
                    var call1548 = selfRequest(this, "sourceIterator", [0]);
                    var call1547 = request(call1548, "next", [0]);
                    var call1546 = request(call1547, "value", [0]);
                    return call1546;
                  };    // end of method next
                  this.methods["next"] = func1545;
                  func1545.methodName = "next";
                  func1545.paramCounts = [0];
                  func1545.paramNames = [];
                  func1545.definitionLine = 1356;
                  func1545.definitionModule = "collectionsPrelude";
                  var func1549 = function(argcv) {    // method asString, line 1357
                    var returnTarget = invocationCount;
                    invocationCount++;
                    const numArgs = arguments.length - 1;
                    if ((numArgs > 0) && (numArgs !== 0)) {
                        raiseTypeArgError("asString", 0, numArgs - 0);
                    }
                    setLineNumber(1358);    // compilenode string
                    var string1550 = new GraceString("an iterator over values of ");
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var opresult1551 = request(string1550, "++(1)", [1], var_sourceDictionary);
                    var string1552 = new GraceString("");
                    var opresult1553 = request(opresult1551, "++(1)", [1], string1552);
                    return opresult1553;
                  };    // end of method asString
                  this.methods["asString"] = func1549;
                  func1549.methodName = "asString";
                  func1549.paramCounts = [0];
                  func1549.paramNames = [];
                  func1549.definitionLine = 1357;
                  func1549.definitionModule = "collectionsPrelude";
                  const overridenByAliases = { };
                  for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                      const a = aliases[aix];
                      const newNm = a.newName;
                      const oldNm = a.oldName;
                      overridenByAliases[newNm] = this.methods[newNm];
                      const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                      m.definitionLine = 1352;
                      m.definitionModule = "collectionsPrelude";
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
                  var obj1540_init = function() {    // init of object on line 1352
                    setLineNumber(1353);    // compilenode member
                    // call case 6: other requests
                    if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                    var call1554 = request(var_sourceDictionary, "bindingsIterator", [0]);
                    this.data.sourceIterator = call1554;
                  };
                  return obj1540_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj1540_init = obj1540_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj1540_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
              };    // end of method iterator$build(_,_,_)
              this.methods["iterator$build(3)"] = func1539;
              func1539.methodName = "iterator$build(3)";
              func1539.paramCounts = [0];
              func1539.paramNames = [];
              func1539.definitionLine = 1352;
              func1539.definitionModule = "collectionsPrelude";
              this.data.size = undefined;
              var reader1555_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader1555_size.isDef = true;
              this.methods["size"] = reader1555_size;
              var func1556 = function(argcv) {    // method asDebugString, line 1362
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(1363);    // compilenode string
                var string1557 = new GraceString("a lazy sequence over values of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult1558 = request(string1557, "++(1)", [1], var_sourceDictionary);
                var string1559 = new GraceString("");
                var opresult1560 = request(opresult1558, "++(1)", [1], string1559);
                return opresult1560;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func1556;
              func1556.methodName = "asDebugString";
              func1556.paramCounts = [0];
              func1556.paramNames = [];
              func1556.definitionLine = 1362;
              func1556.definitionModule = "collectionsPrelude";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 1350;
                  m.definitionModule = "collectionsPrelude";
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
              var obj1536_init = function() {    // init of object on line 1350
                setLineNumber(1361);    // compilenode member
                // call case 6: other requests
                var call1561 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call1561;
              };
              return obj1536_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj1536_init = obj1536_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj1536_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method values$build(_,_,_)
          this.methods["values$build(3)"] = func1535;
          func1535.methodName = "values$build(3)";
          func1535.paramCounts = [0];
          func1535.paramNames = [];
          func1535.definitionLine = 1348;
          func1535.definitionModule = "collectionsPrelude";
          var func1562 = function(argcv) {    // method bindings, line 1367
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindings", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.bindings", "collectionsPrelude", 1367);
            var ouc_init = this.methods["bindings$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method bindings
          this.methods["bindings"] = func1562;
          func1562.methodName = "bindings";
          func1562.paramCounts = [0];
          func1562.paramNames = [];
          func1562.definitionLine = 1367;
          func1562.definitionModule = "collectionsPrelude";
          var func1563 = function(argcv, inheritingObject, aliases, exclusions) {    // method bindings$build(_,_,_), line 1367
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindings", 0, numArgs - 0);
            }
            setLineNumber(1368);    // compilenode defdec
            var var_sourceDictionary = this;
            var obj1564_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_1369");
              this.outer_collectionsPrelude_1369 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              setLineNumber(1370);    // reuse call
              var initFun1565 = selfRequest(importedModules["collectionsPrelude"], "enumerable$build(3)", [null], this, [], []);  // compileReuseCall
              var func1566 = function(argcv) {    // method iterator, line 1371
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("iterator", 0, numArgs - 0);
                }
                setLineNumber(1371);    // compilenode member
                // call case 6: other requests
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var call1567 = request(var_sourceDictionary, "bindingsIterator", [0]);
                return call1567;
              };    // end of method iterator
              this.methods["iterator"] = func1566;
              func1566.methodName = "iterator";
              func1566.paramCounts = [0];
              func1566.paramNames = [];
              func1566.definitionLine = 1371;
              func1566.definitionModule = "collectionsPrelude";
              this.data.size = undefined;
              var reader1568_size = function() {  // reader method size
                  if (this.data.size === undefined) raiseUninitializedVariable("size");
                  return this.data.size;
              };
              reader1568_size.isDef = true;
              this.methods["size"] = reader1568_size;
              var func1569 = function(argcv) {    // method asDebugString, line 1374
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("asDebugString", 0, numArgs - 0);
                }
                setLineNumber(1375);    // compilenode string
                var string1570 = new GraceString("a lazy sequence over bindings of ");
                if (var_sourceDictionary === undefined) raiseUninitializedVariable("sourceDictionary");
                var opresult1571 = request(string1570, "++(1)", [1], var_sourceDictionary);
                var string1572 = new GraceString("");
                var opresult1573 = request(opresult1571, "++(1)", [1], string1572);
                return opresult1573;
              };    // end of method asDebugString
              this.methods["asDebugString"] = func1569;
              func1569.methodName = "asDebugString";
              func1569.paramCounts = [0];
              func1569.paramNames = [];
              func1569.definitionLine = 1374;
              func1569.definitionModule = "collectionsPrelude";
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 1369;
                  m.definitionModule = "collectionsPrelude";
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
              var obj1564_init = function() {    // init of object on line 1369
                setLineNumber(1373);    // compilenode member
                // call case 6: other requests
                var call1574 = request(var_sourceDictionary, "size", [0]);
                this.data.size = call1574;
              };
              return obj1564_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj1564_init = obj1564_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj1564_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method bindings$build(_,_,_)
          this.methods["bindings$build(3)"] = func1563;
          func1563.methodName = "bindings$build(3)";
          func1563.paramCounts = [0];
          func1563.paramNames = [];
          func1563.definitionLine = 1367;
          func1563.definitionModule = "collectionsPrelude";
          var func1575 = function(argcv) {    // method iterator, line 1379
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("iterator", 0, numArgs - 0);
            }
            setLineNumber(1379);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1577 = selfRequest(this, "values", [0]);
            var call1576 = request(call1577, "iterator", [0]);
            return call1576;
          };    // end of method iterator
          this.methods["iterator"] = func1575;
          func1575.methodName = "iterator";
          func1575.paramCounts = [0];
          func1575.paramNames = [];
          func1575.definitionLine = 1379;
          func1575.definitionModule = "collectionsPrelude";
          var func1578 = function(argcv) {    // method bindingsIterator, line 1380
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindingsIterator", 0, numArgs - 0);
            }
            var ouc = emptyGraceObject("dictionary.empty.bindingsIterator", "collectionsPrelude", 1380);
            var ouc_init = this.methods["bindingsIterator$build(3)"].call(this, null, ouc, [], []);
            ouc_init.call(ouc);
            return ouc;
          };    // end of method bindingsIterator
          this.methods["bindingsIterator"] = func1578;
          func1578.methodName = "bindingsIterator";
          func1578.paramCounts = [0];
          func1578.paramNames = [];
          func1578.definitionLine = 1380;
          func1578.definitionModule = "collectionsPrelude";
          var func1579 = function(argcv, inheritingObject, aliases, exclusions) {    // method bindingsIterator$build(_,_,_), line 1380
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 4;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("bindingsIterator", 0, numArgs - 0);
            }
            var obj1580_build = function(ignore, outerObj, aliases, exclusions) {
              this.closureKeys = this.closureKeys || [];
              this.closureKeys.push("outer_collectionsPrelude_1380");
              this.outer_collectionsPrelude_1380 = outerObj;
              const inheritedExclusions = { };
              for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                  const exMeth = exclusions[eix];
                  inheritedExclusions[exMeth] = this.methods[exMeth]; };
              this.data.iMods = undefined;
              var reader1581_iMods = function() {  // reader method iMods
                  if (this.data.iMods === undefined) raiseUninitializedVariable("iMods");
                  return this.data.iMods;
              };
              reader1581_iMods.isDef = true;
              reader1581_iMods.confidential = true;
              this.methods["iMods"] = reader1581_iMods;
              this.data.count = undefined;
              var reader1582_count = function() {  // reader method count
                  if (this.data.count === undefined) raiseUninitializedVariable("count");
                  return this.data.count;
              };
              reader1582_count.isVar = true;
              reader1582_count.confidential = true;
              this.methods["count"] = reader1582_count;
              var writer1583_count = function(argcv, n) {   // writer method count:=(_)
                this.data.count = n;
                return GraceDone;
              };
              writer1583_count.confidential = true;
              this.methods["count:=(1)"] = writer1583_count;
              this.data.idx = undefined;
              var reader1584_idx = function() {  // reader method idx
                  if (this.data.idx === undefined) raiseUninitializedVariable("idx");
                  return this.data.idx;
              };
              reader1584_idx.isVar = true;
              reader1584_idx.confidential = true;
              this.methods["idx"] = reader1584_idx;
              var writer1585_idx = function(argcv, n) {   // writer method idx:=(_)
                this.data.idx = n;
                return GraceDone;
              };
              writer1585_idx.confidential = true;
              this.methods["idx:=(1)"] = writer1585_idx;
              this.data.elt = undefined;
              var reader1586_elt = function() {  // reader method elt
                  if (this.data.elt === undefined) raiseUninitializedVariable("elt");
                  return this.data.elt;
              };
              reader1586_elt.isVar = true;
              reader1586_elt.confidential = true;
              this.methods["elt"] = reader1586_elt;
              var writer1587_elt = function(argcv, n) {   // writer method elt:=(_)
                this.data.elt = n;
                return GraceDone;
              };
              writer1587_elt.confidential = true;
              this.methods["elt:=(1)"] = writer1587_elt;
              var func1588 = function(argcv) {    // method hasNext, line 1386
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("hasNext", 0, numArgs - 0);
                }
                setLineNumber(1386);    // compilenode member
                // call case 2: outer request
                var call1589 = selfRequest(this.outer_collectionsPrelude_1380, "size", [0]);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1590 = selfRequest(this, "count", [0]);
                var opresult1591 = request(call1589, "\u2265(1)", [1], call1590);
                return opresult1591;
              };    // end of method hasNext
              this.methods["hasNext"] = func1588;
              func1588.methodName = "hasNext";
              func1588.paramCounts = [0];
              func1588.paramNames = [];
              func1588.definitionLine = 1386;
              func1588.definitionModule = "collectionsPrelude";
              var func1592 = function(argcv) {    // method next, line 1387
                var returnTarget = invocationCount;
                invocationCount++;
                const numArgs = arguments.length - 1;
                if ((numArgs > 0) && (numArgs !== 0)) {
                    raiseTypeArgError("next", 0, numArgs - 0);
                }
                var if1593 = GraceDone;
                setLineNumber(1388);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1594 = selfRequest(this, "iMods", [0]);
                // call case 2: outer request
                var call1595 = selfRequest(this.outer_collectionsPrelude_1380, "mods", [0]);
                var opresult1596 = request(call1594, "\u2260(1)", [1], call1595);
                if (Grace_isTrue(opresult1596)) {
                  setLineNumber(1389);    // compilenode member
                  // call case 2: outer request
                  var call1598 = selfRequest(this.outer_collectionsPrelude_1380, "asString", [0]);
                  // call case 6: other requests
                  if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                  var call1597 = request(var_ConcurrentModification, "raise(1)", [1], call1598);
                  if1593 = call1597;
                }
                var if1599 = GraceDone;
                setLineNumber(1391);    // compilenode member
                // call case 2: outer request
                var call1600 = selfRequest(this.outer_collectionsPrelude_1380, "size", [0]);
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1601 = selfRequest(this, "count", [0]);
                var opresult1602 = request(call1600, "<(1)", [1], call1601);
                if (Grace_isTrue(opresult1602)) {
                  var string1604 = new GraceString("over ");
                  // call case 2: outer request
                  var call1605 = selfRequest(this.outer_collectionsPrelude_1380, "asString", [0]);
                  var opresult1606 = request(string1604, "++(1)", [1], call1605);
                  var string1607 = new GraceString("");
                  var opresult1608 = request(opresult1606, "++(1)", [1], string1607);
                  // call case 6: other requests
                  if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                  var call1603 = request(var_IteratorExhausted, "raise(1)", [1], opresult1608);
                  if1599 = call1603;
                }
                setLineNumber(1392);    // compilenode block
                var block1610 = new GraceBlock(this, 1392, 0);
                block1610.guard = jsTrue;
                block1610.real = function block1610() {
                  setLineNumber(1393);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call1613 = selfRequest(this, "idx", [0]);
                  // call case 6: other requests
                  // call case 2: outer request
                  var call1614 = selfRequest(this.outer_collectionsPrelude_1380, "inner", [0]);
                  var call1612 = request(call1614, "at(1)", [1], call1613);
                  // call case 4: self request with 1 args and 0 typeArgs 
                  var call1611 = selfRequest(this, "elt:=(1)", [1], call1612);
                  setLineNumber(1394);    // compilenode op
                  if (var_unused === undefined) raiseUninitializedVariable("unused");
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call1615 = selfRequest(this, "elt", [0]);
                  var opresult1616 = request(var_unused, "==(1)", [1], call1615);
                  if (var_removed === undefined) raiseUninitializedVariable("removed");
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call1617 = selfRequest(this, "elt", [0]);
                  var opresult1618 = request(var_removed, "==(1)", [1], call1617);
                  var opresult1619 = request(opresult1616, "||(1)", [1], opresult1618);
                  return opresult1619;
                };
                let applyMeth1610 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth1610.methodName = "apply";
                applyMeth1610.paramCounts = [0];
                applyMeth1610.paramNames = [];
                applyMeth1610.definitionLine = 1392;
                applyMeth1610.definitionModule = "collectionsPrelude";
                block1610.methods["apply"] = applyMeth1610;
                setLineNumber(1395);    // compilenode block
                var block1620 = new GraceBlock(this, 1395, 0);
                block1620.guard = jsTrue;
                block1620.real = function block1620() {
                  setLineNumber(1396);    // compilenode member
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call1622 = selfRequest(this, "idx", [0]);
                  var sum1623 = request(call1622, "+(1)", [1], new GraceNum(1));
                  // call case 4: self request with 1 args and 0 typeArgs 
                  var call1621 = selfRequest(this, "idx:=(1)", [1], sum1623);
                  return call1621;
                };
                let applyMeth1620 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth1620.methodName = "apply";
                applyMeth1620.paramCounts = [0];
                applyMeth1620.paramNames = [];
                applyMeth1620.definitionLine = 1395;
                applyMeth1620.definitionModule = "collectionsPrelude";
                block1620.methods["apply"] = applyMeth1620;
                // call case 2: outer request
                var call1609 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block1610, block1620);
                setLineNumber(1398);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1625 = selfRequest(this, "count", [0]);
                var sum1626 = request(call1625, "+(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1624 = selfRequest(this, "count:=(1)", [1], sum1626);
                setLineNumber(1399);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1628 = selfRequest(this, "idx", [0]);
                var sum1629 = request(call1628, "+(1)", [1], new GraceNum(1));
                // call case 4: self request with 1 args and 0 typeArgs 
                var call1627 = selfRequest(this, "idx:=(1)", [1], sum1629);
                setLineNumber(1400);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1630 = selfRequest(this, "elt", [0]);
                return call1630;
              };    // end of method next
              this.methods["next"] = func1592;
              func1592.methodName = "next";
              func1592.paramCounts = [0];
              func1592.paramNames = [];
              func1592.definitionLine = 1387;
              func1592.definitionModule = "collectionsPrelude";
              this.mutable = true;
              const overridenByAliases = { };
              for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                  const a = aliases[aix];
                  const newNm = a.newName;
                  const oldNm = a.oldName;
                  overridenByAliases[newNm] = this.methods[newNm];
                  const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                  m.definitionLine = 1380;
                  m.definitionModule = "collectionsPrelude";
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
              var obj1580_init = function() {    // init of object on line 1380
                setLineNumber(1382);    // compilenode member
                // call case 2: outer request
                var call1631 = selfRequest(this.outer_collectionsPrelude_1380, "mods", [0]);
                this.data.iMods = call1631;
                setLineNumber(1383);    // compilenode num
                this.data.count = new GraceNum(1);
                setLineNumber(1384);    // compilenode num
                this.data.idx = new GraceNum(0);
                this.data.elt = undefined;
              };
              return obj1580_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
            };
            var obj1580_init = obj1580_build.call(inheritingObject, null, this, aliases, exclusions);
            return obj1580_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
          };    // end of method bindingsIterator$build(_,_,_)
          this.methods["bindingsIterator$build(3)"] = func1579;
          func1579.methodName = "bindingsIterator$build(3)";
          func1579.paramCounts = [0];
          func1579.paramNames = [];
          func1579.definitionLine = 1380;
          func1579.definitionModule = "collectionsPrelude";
          var func1632 = function(argcv) {    // method expand, line 1403
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("expand", 0, numArgs - 0);
            }
            setLineNumber(1404);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1634 = selfRequest(this, "inner", [0]);
            var call1633 = request(call1634, "size", [0]);
            var var_c = call1633;
            setLineNumber(1405);    // compilenode num
            var prod1635 = request(var_c, "*(1)", [1], new GraceNum(2));
            var var_n = prod1635;
            setLineNumber(1406);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1636 = selfRequest(this, "inner", [0]);
            var var_oldInner = call1636;
            setLineNumber(1407);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call1639 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call1638 = request(call1639, "new(1)", [1], var_n);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1637 = selfRequest(this, "inner:=(1)", [1], call1638);
            setLineNumber(1408);    // compilenode num
            var diff1641 = request(var_n, "-(1)", [1], new GraceNum(1));
            var opresult1642 = request(new GraceNum(0), "..(1)", [1], diff1641);
            var block1643 = new GraceBlock(this, 1408, 1);
            block1643.guard = jsTrue;
            block1643.real = function block1643(var_i) {
              setLineNumber(1409);    // compilenode call
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1645 = selfRequest(this, "inner", [0]);
              var call1644 = request(call1645, "at(1)put(1)", [1, 1], var_i, var_unused);
              return call1644;
            };
            let applyMeth1643 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1643.methodName = "apply(1)";
            applyMeth1643.paramCounts = [1];
            applyMeth1643.paramNames = ["i"];
            applyMeth1643.definitionLine = 1408;
            applyMeth1643.definitionModule = "collectionsPrelude";
            block1643.methods["apply(1)"] = applyMeth1643;
            let matchesMeth1643 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1643.methodName = "matches(1)";
            matchesMeth1643.paramCounts = [1];
            matchesMeth1643.paramNames = ["i"];
            matchesMeth1643.definitionLine = 1408;
            matchesMeth1643.definitionModule = "collectionsPrelude";
            block1643.methods["matches(1)"] = matchesMeth1643;
            // call case 2: outer request
            var call1640 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1642, block1643);
            setLineNumber(1411);    // compilenode num
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1646 = selfRequest(this, "numBindings:=(1)", [1], new GraceNum(0));
            setLineNumber(1412);    // compilenode num
            var diff1648 = request(var_c, "-(1)", [1], new GraceNum(1));
            var opresult1649 = request(new GraceNum(0), "..(1)", [1], diff1648);
            var block1650 = new GraceBlock(this, 1412, 1);
            block1650.guard = jsTrue;
            block1650.real = function block1650(var_i) {
              setLineNumber(1413);    // compilenode call
              // call case 6: other requests
              if (var_oldInner === undefined) raiseUninitializedVariable("oldInner");
              var call1651 = request(var_oldInner, "at(1)", [1], var_i);
              var var_a = call1651;
              var if1652 = GraceDone;
              setLineNumber(1414);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1653 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1654 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1655 = request(opresult1653, "&&(1)", [1], opresult1654);
              if (Grace_isTrue(opresult1655)) {
                setLineNumber(1415);    // compilenode member
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1657 = request(var_a, "key", [0]);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1658 = request(var_a, "value", [0]);
                // call case 4: self request with 2 args and 0 typeArgs 
                var call1656 = selfRequest(this, "at(1)put(1)", [1, 1], call1657, call1658);
                if1652 = call1656;
              }
              return if1652;
            };
            let applyMeth1650 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1650.methodName = "apply(1)";
            applyMeth1650.paramCounts = [1];
            applyMeth1650.paramNames = ["i"];
            applyMeth1650.definitionLine = 1412;
            applyMeth1650.definitionModule = "collectionsPrelude";
            block1650.methods["apply(1)"] = applyMeth1650;
            let matchesMeth1650 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1650.methodName = "matches(1)";
            matchesMeth1650.paramCounts = [1];
            matchesMeth1650.paramNames = ["i"];
            matchesMeth1650.definitionLine = 1412;
            matchesMeth1650.definitionModule = "collectionsPrelude";
            block1650.methods["matches(1)"] = matchesMeth1650;
            // call case 2: outer request
            var call1647 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1649, block1650);
            return call1647;
          };    // end of method expand
          func1632.confidential = true;
          this.methods["expand"] = func1632;
          func1632.methodName = "expand";
          func1632.paramCounts = [0];
          func1632.paramNames = [];
          func1632.definitionLine = 1403;
          func1632.definitionModule = "collectionsPrelude";
          var func1659 = function(argcv, var_block2) {    // method keysAndValuesDo(_), line 1419
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
            }
            setLineNumber(1420);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1662 = selfRequest(this, "inner", [0]);
            var call1661 = request(call1662, "size", [0]);
            var diff1663 = request(call1661, "-(1)", [1], new GraceNum(1));
            var opresult1664 = request(new GraceNum(0), "..(1)", [1], diff1663);
            var block1665 = new GraceBlock(this, 1420, 1);
            block1665.guard = jsTrue;
            block1665.real = function block1665(var_i) {
              setLineNumber(1421);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1667 = selfRequest(this, "inner", [0]);
              var call1666 = request(call1667, "at(1)", [1], var_i);
              var var_a = call1666;
              var if1668 = GraceDone;
              setLineNumber(1422);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1669 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1670 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1671 = request(opresult1669, "&&(1)", [1], opresult1670);
              if (Grace_isTrue(opresult1671)) {
                setLineNumber(1423);    // compilenode member
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1673 = request(var_a, "key", [0]);
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1674 = request(var_a, "value", [0]);
                // call case 6: other requests
                var call1672 = request(var_block2, "apply(2)", [2], call1673, call1674);
                if1668 = call1672;
              }
              return if1668;
            };
            let applyMeth1665 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1665.methodName = "apply(1)";
            applyMeth1665.paramCounts = [1];
            applyMeth1665.paramNames = ["i"];
            applyMeth1665.definitionLine = 1420;
            applyMeth1665.definitionModule = "collectionsPrelude";
            block1665.methods["apply(1)"] = applyMeth1665;
            let matchesMeth1665 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1665.methodName = "matches(1)";
            matchesMeth1665.paramCounts = [1];
            matchesMeth1665.paramNames = ["i"];
            matchesMeth1665.definitionLine = 1420;
            matchesMeth1665.definitionModule = "collectionsPrelude";
            block1665.methods["matches(1)"] = matchesMeth1665;
            // call case 2: outer request
            var call1660 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1664, block1665);
            return call1660;
          };    // end of method keysAndValuesDo(_)
          this.methods["keysAndValuesDo(1)"] = func1659;
          func1659.methodName = "keysAndValuesDo(1)";
          func1659.paramCounts = [1];
          func1659.paramNames = ["block2"];
          func1659.definitionLine = 1419;
          func1659.definitionModule = "collectionsPrelude";
          var func1675 = function(argcv, var_block1) {    // method keysDo(_), line 1427
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("keysDo(_)", 0, numArgs - 1);
            }
            setLineNumber(1428);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1676 = selfRequest(this, "mods", [0]);
            var var_iMods = call1676;
            setLineNumber(1429);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1679 = selfRequest(this, "inner", [0]);
            var call1678 = request(call1679, "size", [0]);
            var diff1680 = request(call1678, "-(1)", [1], new GraceNum(1));
            var opresult1681 = request(new GraceNum(0), "..(1)", [1], diff1680);
            var block1682 = new GraceBlock(this, 1429, 1);
            block1682.guard = jsTrue;
            block1682.real = function block1682(var_i) {
              var if1683 = GraceDone;
              setLineNumber(1430);    // compilenode op
              if (var_iMods === undefined) raiseUninitializedVariable("iMods");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1684 = selfRequest(this, "mods", [0]);
              var opresult1685 = request(var_iMods, "\u2260(1)", [1], call1684);
              if (Grace_isTrue(opresult1685)) {
                setLineNumber(1431);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1687 = selfRequest(this, "asDebugString", [0]);
                // call case 6: other requests
                if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                var call1686 = request(var_ConcurrentModification, "raise(1)", [1], call1687);
                if1683 = call1686;
              }
              setLineNumber(1433);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1689 = selfRequest(this, "inner", [0]);
              var call1688 = request(call1689, "at(1)", [1], var_i);
              var var_a = call1688;
              var if1690 = GraceDone;
              setLineNumber(1434);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1691 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1692 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1693 = request(opresult1691, "&&(1)", [1], opresult1692);
              if (Grace_isTrue(opresult1693)) {
                setLineNumber(1435);    // compilenode member
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1695 = request(var_a, "key", [0]);
                // call case 6: other requests
                var call1694 = request(var_block1, "apply(1)", [1], call1695);
                if1690 = call1694;
              }
              return if1690;
            };
            let applyMeth1682 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1682.methodName = "apply(1)";
            applyMeth1682.paramCounts = [1];
            applyMeth1682.paramNames = ["i"];
            applyMeth1682.definitionLine = 1429;
            applyMeth1682.definitionModule = "collectionsPrelude";
            block1682.methods["apply(1)"] = applyMeth1682;
            let matchesMeth1682 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1682.methodName = "matches(1)";
            matchesMeth1682.paramCounts = [1];
            matchesMeth1682.paramNames = ["i"];
            matchesMeth1682.definitionLine = 1429;
            matchesMeth1682.definitionModule = "collectionsPrelude";
            block1682.methods["matches(1)"] = matchesMeth1682;
            // call case 2: outer request
            var call1677 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1681, block1682);
            return call1677;
          };    // end of method keysDo(_)
          this.methods["keysDo(1)"] = func1675;
          func1675.methodName = "keysDo(1)";
          func1675.paramCounts = [1];
          func1675.paramNames = ["block1"];
          func1675.definitionLine = 1427;
          func1675.definitionModule = "collectionsPrelude";
          var func1696 = function(argcv, var_block1) {    // method valuesDo(_), line 1439
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("valuesDo(_)", 0, numArgs - 1);
            }
            setLineNumber(1440);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1697 = selfRequest(this, "mods", [0]);
            var var_iMods = call1697;
            setLineNumber(1441);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1700 = selfRequest(this, "inner", [0]);
            var call1699 = request(call1700, "size", [0]);
            var diff1701 = request(call1699, "-(1)", [1], new GraceNum(1));
            var opresult1702 = request(new GraceNum(0), "..(1)", [1], diff1701);
            var block1703 = new GraceBlock(this, 1441, 1);
            block1703.guard = jsTrue;
            block1703.real = function block1703(var_i) {
              var if1704 = GraceDone;
              setLineNumber(1442);    // compilenode op
              if (var_iMods === undefined) raiseUninitializedVariable("iMods");
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1705 = selfRequest(this, "mods", [0]);
              var opresult1706 = request(var_iMods, "\u2260(1)", [1], call1705);
              if (Grace_isTrue(opresult1706)) {
                setLineNumber(1443);    // compilenode member
                // call case 4: self request with 0 args and 0 typeArgs 
                var call1708 = selfRequest(this, "asDebugString", [0]);
                // call case 6: other requests
                if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
                var call1707 = request(var_ConcurrentModification, "raise(1)", [1], call1708);
                if1704 = call1707;
              }
              setLineNumber(1445);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1710 = selfRequest(this, "inner", [0]);
              var call1709 = request(call1710, "at(1)", [1], var_i);
              var var_a = call1709;
              var if1711 = GraceDone;
              setLineNumber(1446);    // compilenode op
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1712 = request(var_unused, "\u2260(1)", [1], var_a);
              if (var_removed === undefined) raiseUninitializedVariable("removed");
              if (var_a === undefined) raiseUninitializedVariable("a");
              var opresult1713 = request(var_removed, "\u2260(1)", [1], var_a);
              var opresult1714 = request(opresult1712, "&&(1)", [1], opresult1713);
              if (Grace_isTrue(opresult1714)) {
                setLineNumber(1447);    // compilenode member
                // call case 6: other requests
                if (var_a === undefined) raiseUninitializedVariable("a");
                var call1716 = request(var_a, "value", [0]);
                // call case 6: other requests
                var call1715 = request(var_block1, "apply(1)", [1], call1716);
                if1711 = call1715;
              }
              return if1711;
            };
            let applyMeth1703 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1703.methodName = "apply(1)";
            applyMeth1703.paramCounts = [1];
            applyMeth1703.paramNames = ["i"];
            applyMeth1703.definitionLine = 1441;
            applyMeth1703.definitionModule = "collectionsPrelude";
            block1703.methods["apply(1)"] = applyMeth1703;
            let matchesMeth1703 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1703.methodName = "matches(1)";
            matchesMeth1703.paramCounts = [1];
            matchesMeth1703.paramNames = ["i"];
            matchesMeth1703.definitionLine = 1441;
            matchesMeth1703.definitionModule = "collectionsPrelude";
            block1703.methods["matches(1)"] = matchesMeth1703;
            // call case 2: outer request
            var call1698 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1702, block1703);
            return call1698;
          };    // end of method valuesDo(_)
          this.methods["valuesDo(1)"] = func1696;
          func1696.methodName = "valuesDo(1)";
          func1696.paramCounts = [1];
          func1696.paramNames = ["block1"];
          func1696.definitionLine = 1439;
          func1696.definitionModule = "collectionsPrelude";
          var func1717 = function(argcv, var_block1) {    // method do(_), line 1451
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("do(_)", 0, numArgs - 1);
            }
            setLineNumber(1451);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1718 = selfRequest(this, "valuesDo(1)", [1], var_block1);
            return call1718;
          };    // end of method do(_)
          this.methods["do(1)"] = func1717;
          func1717.methodName = "do(1)";
          func1717.paramCounts = [1];
          func1717.paramNames = ["block1"];
          func1717.definitionLine = 1451;
          func1717.definitionModule = "collectionsPrelude";
          var func1719 = function(argcv, var_other) {    // method ==(_), line 1453
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("==(_)", 0, numArgs - 1);
            }
            setLineNumber(1454);    // compilenode matchcase
            var cases1720 = [];
            setLineNumber(1455);    // compilenode block
            var block1721 = new GraceBlock(this, 1455, 1);
            // call case 2: outer request
            var call1722 = selfRequest(importedModules["collectionsPrelude"], "ComparableToDictionary", [0, 2], var_K, var_T);
            block1721.paramTypes = [call1722];
            var matches1723 = function(var_o) {
              // call case 2: outer request
              var call1724 = selfRequest(importedModules["collectionsPrelude"], "ComparableToDictionary", [0, 2], var_K, var_T);
              if (!Grace_isTrue(request(call1724, "matches(1)", [1], var_o)))
                  return false;
              return true;
            };
            block1721.guard = matches1723;
            block1721.real = function block1721(var_o) {
              var if1725 = GraceDone;
              setLineNumber(1456);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1726 = selfRequest(this, "size", [0]);
              // call case 6: other requests
              var call1727 = request(var_o, "size", [0]);
              var opresult1728 = request(call1726, "\u2260(1)", [1], call1727);
              if (Grace_isTrue(opresult1728)) {
                throw new ReturnException(GraceFalse, returnTarget);
              }
              setLineNumber(1457);    // compilenode block
              var block1730 = new GraceBlock(this, 1457, 2);
              block1730.guard = jsTrue;
              block1730.real = function block1730(var_k, var_v) {
                var if1731 = GraceDone;
                setLineNumber(1458);    // compilenode block
                var block1733 = new GraceBlock(this, 1458, 0);
                block1733.guard = jsTrue;
                block1733.real = function block1733() {
                  setLineNumber(1458);    // compilenode return
                  throw new ReturnException(GraceFalse, returnTarget);
                };
                let applyMeth1733 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth1733.methodName = "apply";
                applyMeth1733.paramCounts = [0];
                applyMeth1733.paramNames = [];
                applyMeth1733.definitionLine = 1458;
                applyMeth1733.definitionModule = "collectionsPrelude";
                block1733.methods["apply"] = applyMeth1733;
                // call case 6: other requests
                var call1732 = request(var_o, "at(1)ifAbsent(1)", [1, 1], var_k, block1733);
                var opresult1734 = request(call1732, "\u2260(1)", [1], var_v);
                if (Grace_isTrue(opresult1734)) {
                  setLineNumber(1459);    // compilenode return
                  throw new ReturnException(GraceFalse, returnTarget);
                }
                return if1731;
              };
              let applyMeth1730 = function apply_2 (argcv, ...args) {
                  if (this.guard.apply(this.receiver, args))
                      return this.real.apply(this.receiver, args);
                  badBlockArgs.apply(this, args);
              };
              applyMeth1730.methodName = "apply(2)";
              applyMeth1730.paramCounts = [2];
              applyMeth1730.paramNames = ["k", "v"];
              applyMeth1730.definitionLine = 1457;
              applyMeth1730.definitionModule = "collectionsPrelude";
              block1730.methods["apply(2)"] = applyMeth1730;
              let matchesMeth1730 = function matches_2 (argcv, ...args) {
                  return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
              };
              matchesMeth1730.methodName = "matches(2)";
              matchesMeth1730.paramCounts = [2];
              matchesMeth1730.paramNames = ["k", "v"];
              matchesMeth1730.definitionLine = 1457;
              matchesMeth1730.definitionModule = "collectionsPrelude";
              block1730.methods["matches(2)"] = matchesMeth1730;
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1729 = selfRequest(this, "keysAndValuesDo(1)", [1], block1730);
              setLineNumber(1462);    // compilenode return
              throw new ReturnException(GraceTrue, returnTarget);
            };
            let applyMeth1721 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1721.methodName = "apply(1)";
            applyMeth1721.paramCounts = [1];
            applyMeth1721.paramNames = ["o"];
            applyMeth1721.definitionLine = 1455;
            applyMeth1721.definitionModule = "collectionsPrelude";
            block1721.methods["apply(1)"] = applyMeth1721;
            let matchesMeth1721 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1721.methodName = "matches(1)";
            matchesMeth1721.paramCounts = [1];
            matchesMeth1721.paramNames = ["o"];
            matchesMeth1721.definitionLine = 1455;
            matchesMeth1721.definitionModule = "collectionsPrelude";
            block1721.methods["matches(1)"] = matchesMeth1721;
            cases1720.push(block1721);
            setLineNumber(1463);    // compilenode block
            var block1735 = new GraceBlock(this, 1463, 0);
            block1735.guard = jsTrue;
            block1735.real = function block1735() {
              setLineNumber(1464);    // compilenode return
              throw new ReturnException(GraceFalse, returnTarget);
            };
            let applyMeth1735 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth1735.methodName = "apply";
            applyMeth1735.paramCounts = [0];
            applyMeth1735.paramNames = [];
            applyMeth1735.definitionLine = 1463;
            applyMeth1735.definitionModule = "collectionsPrelude";
            block1735.methods["apply"] = applyMeth1735;
            setLineNumber(1454);    // compilematchcase
            var matchres1720 = matchCase(var_other,cases1720,block1735);
            return matchres1720;
          };    // end of method ==(_)
          this.methods["==(1)"] = func1719;
          func1719.methodName = "==(1)";
          func1719.paramCounts = [1];
          func1719.paramNames = ["other"];
          func1719.definitionLine = 1453;
          func1719.definitionModule = "collectionsPrelude";
          var func1736 = function(argcv, var_other) {    // method ≠(_), line 1467
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("≠(_)", 0, numArgs - 1);
            }
            setLineNumber(1467);    // compilenode member
            // call case 6: other requests
            var opresult1738 = request(this, "==(1)", [1], var_other);
            var call1737 = request(opresult1738, "not", [0]);
            return call1737;
          };    // end of method ≠(_)
          this.methods["\u2260(1)"] = func1736;
          func1736.methodName = "\u2260(1)";
          func1736.paramCounts = [1];
          func1736.paramNames = ["other"];
          func1736.definitionLine = 1467;
          func1736.definitionModule = "collectionsPrelude";
          var func1739 = function(argcv) {    // method copy, line 1469
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("copy", 0, numArgs - 0);
            }
            setLineNumber(1470);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call1741 = selfRequest(importedModules["collectionsPrelude"], "dictionary", [0]);
            var call1740 = request(call1741, "empty", [0]);
            var var_newCopy = call1740;
            setLineNumber(1471);    // compilenode block
            var block1743 = new GraceBlock(this, 1471, 2);
            block1743.guard = jsTrue;
            block1743.real = function block1743(var_k, var_v) {
              setLineNumber(1472);    // compilenode call
              // call case 6: other requests
              if (var_newCopy === undefined) raiseUninitializedVariable("newCopy");
              var call1744 = request(var_newCopy, "at(1)put(1)", [1, 1], var_k, var_v);
              return call1744;
            };
            let applyMeth1743 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1743.methodName = "apply(2)";
            applyMeth1743.paramCounts = [2];
            applyMeth1743.paramNames = ["k", "v"];
            applyMeth1743.definitionLine = 1471;
            applyMeth1743.definitionModule = "collectionsPrelude";
            block1743.methods["apply(2)"] = applyMeth1743;
            let matchesMeth1743 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1743.methodName = "matches(2)";
            matchesMeth1743.paramCounts = [2];
            matchesMeth1743.paramNames = ["k", "v"];
            matchesMeth1743.definitionLine = 1471;
            matchesMeth1743.definitionModule = "collectionsPrelude";
            block1743.methods["matches(2)"] = matchesMeth1743;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1742 = selfRequest(this, "keysAndValuesDo(1)", [1], block1743);
            return var_newCopy;
          };    // end of method copy
          this.methods["copy"] = func1739;
          func1739.methodName = "copy";
          func1739.paramCounts = [0];
          func1739.paramNames = [];
          func1739.definitionLine = 1469;
          func1739.definitionModule = "collectionsPrelude";
          var func1745 = function(argcv, var_other) {    // method ++(_), line 1477
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("++(_)", 0, numArgs - 1);
            }
            setLineNumber(1480);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1746 = selfRequest(this, "copy", [0]);
            var var_newDict = call1746;
            setLineNumber(1481);    // compilenode block
            var block1748 = new GraceBlock(this, 1481, 2);
            block1748.guard = jsTrue;
            block1748.real = function block1748(var_k, var_v) {
              setLineNumber(1482);    // compilenode call
              // call case 6: other requests
              if (var_newDict === undefined) raiseUninitializedVariable("newDict");
              var call1749 = request(var_newDict, "at(1)put(1)", [1, 1], var_k, var_v);
              return call1749;
            };
            let applyMeth1748 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1748.methodName = "apply(2)";
            applyMeth1748.paramCounts = [2];
            applyMeth1748.paramNames = ["k", "v"];
            applyMeth1748.definitionLine = 1481;
            applyMeth1748.definitionModule = "collectionsPrelude";
            block1748.methods["apply(2)"] = applyMeth1748;
            let matchesMeth1748 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1748.methodName = "matches(2)";
            matchesMeth1748.paramCounts = [2];
            matchesMeth1748.paramNames = ["k", "v"];
            matchesMeth1748.definitionLine = 1481;
            matchesMeth1748.definitionModule = "collectionsPrelude";
            block1748.methods["matches(2)"] = matchesMeth1748;
            // call case 6: other requests
            var call1747 = request(var_other, "keysAndValuesDo(1)", [1], block1748);
            setLineNumber(1484);    // compilenode return
            return var_newDict;
          };    // end of method ++(_)
          this.methods["++(1)"] = func1745;
          func1745.methodName = "++(1)";
          func1745.paramCounts = [1];
          func1745.paramNames = ["other"];
          func1745.definitionLine = 1477;
          func1745.definitionModule = "collectionsPrelude";
          var func1750 = function(argcv, var_other) {    // method --(_), line 1487
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("--(_)", 0, numArgs - 1);
            }
            setLineNumber(1489);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call1752 = selfRequest(importedModules["collectionsPrelude"], "dictionary", [0]);
            var call1751 = request(call1752, "empty", [0]);
            var var_newDict = call1751;
            setLineNumber(1490);    // compilenode block
            var block1754 = new GraceBlock(this, 1490, 2);
            block1754.guard = jsTrue;
            block1754.real = function block1754(var_k, var_v) {
              var if1755 = GraceDone;
              setLineNumber(1491);    // compilenode call
              // call case 6: other requests
              // call case 6: other requests
              var call1757 = request(var_other, "containsKey(1)", [1], var_k);
              var call1756 = request(call1757, "prefix!", [0]);
              if (Grace_isTrue(call1756)) {
                setLineNumber(1492);    // compilenode call
                // call case 6: other requests
                if (var_newDict === undefined) raiseUninitializedVariable("newDict");
                var call1758 = request(var_newDict, "at(1)put(1)", [1, 1], var_k, var_v);
                if1755 = call1758;
              }
              return if1755;
            };
            let applyMeth1754 = function apply_2 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1754.methodName = "apply(2)";
            applyMeth1754.paramCounts = [2];
            applyMeth1754.paramNames = ["k", "v"];
            applyMeth1754.definitionLine = 1490;
            applyMeth1754.definitionModule = "collectionsPrelude";
            block1754.methods["apply(2)"] = applyMeth1754;
            let matchesMeth1754 = function matches_2 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1754.methodName = "matches(2)";
            matchesMeth1754.paramCounts = [2];
            matchesMeth1754.paramNames = ["k", "v"];
            matchesMeth1754.definitionLine = 1490;
            matchesMeth1754.definitionModule = "collectionsPrelude";
            block1754.methods["matches(2)"] = matchesMeth1754;
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1753 = selfRequest(this, "keysAndValuesDo(1)", [1], block1754);
            setLineNumber(1495);    // compilenode return
            return var_newDict;
          };    // end of method --(_)
          this.methods["--(1)"] = func1750;
          func1750.methodName = "--(1)";
          func1750.paramCounts = [1];
          func1750.paramNames = ["other"];
          func1750.definitionLine = 1487;
          func1750.definitionModule = "collectionsPrelude";
          var func1759 = function(argcv, var_target) {    // method >>(_), line 1498
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError(">>(_)", 0, numArgs - 1);
            }
            setLineNumber(1499);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1760 = selfRequest(this, "bindings", [0]);
            var opresult1761 = request(var_target, "<<(1)", [1], call1760);
            return opresult1761;
          };    // end of method >>(_)
          this.methods[">>(1)"] = func1759;
          func1759.methodName = ">>(1)";
          func1759.paramCounts = [1];
          func1759.paramNames = ["target"];
          func1759.definitionLine = 1498;
          func1759.definitionModule = "collectionsPrelude";
          var func1762 = function(argcv, var_source) {    // method <<(_), line 1502
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("<<(_)", 0, numArgs - 1);
            }
            setLineNumber(1503);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call1763 = selfRequest(this, "addAll(1)", [1], var_source);
            return call1763;
          };    // end of method <<(_)
          this.methods["<<(1)"] = func1762;
          func1762.methodName = "<<(1)";
          func1762.paramCounts = [1];
          func1762.paramNames = ["source"];
          func1762.definitionLine = 1502;
          func1762.definitionModule = "collectionsPrelude";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 1111;
              m.definitionModule = "collectionsPrelude";
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
          var obj1131_init = function() {    // init of object on line 1111
            setLineNumber(1116);    // compilenode num
            this.data.mods = new GraceNum(0);
            setLineNumber(1117);    // compilenode num
            this.data.numBindings = new GraceNum(0);
            setLineNumber(1118);    // compilenode num
            // call case 6: other requests
            // call case 2: outer request
            var call1765 = selfRequest(var_prelude, "primitiveArray", [0]);
            var call1764 = request(call1765, "new(1)", [1], new GraceNum(8));
            this.data.inner = call1764;
            setLineNumber(1119);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1768 = selfRequest(this, "inner", [0]);
            var call1767 = request(call1768, "size", [0]);
            var diff1769 = request(call1767, "-(1)", [1], new GraceNum(1));
            var opresult1770 = request(new GraceNum(0), "..(1)", [1], diff1769);
            var block1771 = new GraceBlock(this, 1119, 1);
            block1771.guard = jsTrue;
            block1771.real = function block1771(var_i) {
              setLineNumber(1120);    // compilenode call
              if (var_unused === undefined) raiseUninitializedVariable("unused");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1773 = selfRequest(this, "inner", [0]);
              var call1772 = request(call1773, "at(1)put(1)", [1, 1], var_i, var_unused);
              return call1772;
            };
            let applyMeth1771 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth1771.methodName = "apply(1)";
            applyMeth1771.paramCounts = [1];
            applyMeth1771.paramNames = ["i"];
            applyMeth1771.definitionLine = 1119;
            applyMeth1771.definitionModule = "collectionsPrelude";
            block1771.methods["apply(1)"] = applyMeth1771;
            let matchesMeth1771 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth1771.methodName = "matches(1)";
            matchesMeth1771.paramCounts = [1];
            matchesMeth1771.paramNames = ["i"];
            matchesMeth1771.definitionLine = 1119;
            matchesMeth1771.definitionModule = "collectionsPrelude";
            block1771.methods["matches(1)"] = matchesMeth1771;
            // call case 2: outer request
            var call1766 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult1770, block1771);
          };
          return obj1131_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj1131_init = obj1131_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj1131_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method empty$build(_,_,_)
      this.methods["empty$build(3)"] = func1130;
      func1130.methodName = "empty$build(3)";
      func1130.paramCounts = [0];
      func1130.paramNames = [];
      func1130.definitionLine = 1111;
      func1130.definitionModule = "collectionsPrelude";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 1092;
          m.definitionModule = "collectionsPrelude";
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
      var obj1113_init = function() {    // init of object on line 1092
      };
      return obj1113_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj1113_init = obj1113_build.call(inheritingObject, null, this, aliases, exclusions, var_K, var_T);
    return obj1113_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method dictionary$build(_,_,_)
  this.methods["dictionary$build(3)"] = func1112;
  func1112.methodName = "dictionary$build(3)";
  func1112.paramCounts = [0];
  func1112.paramNames = [];
  func1112.typeParamNames = ["K", "T"];
  func1112.definitionLine = 1092;
  func1112.definitionModule = "collectionsPrelude";
  setLineNumber(4);    // compilenode string
  var string1775 = new GraceString("BoundsError");
  // call case 6: other requests
  // call case 2: outer request
  var call1776 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1774 = request(call1776, "refine(1)", [1], string1775);
  var var_BoundsError = call1774;
  var reader1777_BoundsError = function() {  // reader method BoundsError
      if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
      return var_BoundsError;
  };
  reader1777_BoundsError.isDef = true;
  this.methods["BoundsError"] = reader1777_BoundsError;
  setLineNumber(5);    // compilenode string
  var string1779 = new GraceString("IteratorExhausted");
  // call case 6: other requests
  // call case 2: outer request
  var call1780 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1778 = request(call1780, "refine(1)", [1], string1779);
  var var_IteratorExhausted = call1778;
  var reader1781_IteratorExhausted = function() {  // reader method IteratorExhausted
      if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
      return var_IteratorExhausted;
  };
  reader1781_IteratorExhausted.isDef = true;
  this.methods["IteratorExhausted"] = reader1781_IteratorExhausted;
  setLineNumber(6);    // compilenode string
  var string1783 = new GraceString("SubobjectResponsibility");
  // call case 6: other requests
  // call case 2: outer request
  var call1784 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1782 = request(call1784, "refine(1)", [1], string1783);
  var var_SubobjectResponsibility = call1782;
  var reader1785_SubobjectResponsibility = function() {  // reader method SubobjectResponsibility
      if (var_SubobjectResponsibility === undefined) raiseUninitializedVariable("SubobjectResponsibility");
      return var_SubobjectResponsibility;
  };
  reader1785_SubobjectResponsibility.isDef = true;
  this.methods["SubobjectResponsibility"] = reader1785_SubobjectResponsibility;
  setLineNumber(7);    // compilenode string
  var string1787 = new GraceString("NoSuchObject");
  // call case 6: other requests
  // call case 2: outer request
  var call1788 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1786 = request(call1788, "refine(1)", [1], string1787);
  var var_NoSuchObject = call1786;
  var reader1789_NoSuchObject = function() {  // reader method NoSuchObject
      if (var_NoSuchObject === undefined) raiseUninitializedVariable("NoSuchObject");
      return var_NoSuchObject;
  };
  reader1789_NoSuchObject.isDef = true;
  this.methods["NoSuchObject"] = reader1789_NoSuchObject;
  setLineNumber(8);    // compilenode string
  var string1791 = new GraceString("RequestError");
  // call case 6: other requests
  // call case 2: outer request
  var call1792 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1790 = request(call1792, "refine(1)", [1], string1791);
  var var_RequestError = call1790;
  var reader1793_RequestError = function() {  // reader method RequestError
      if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
      return var_RequestError;
  };
  reader1793_RequestError.isDef = true;
  this.methods["RequestError"] = reader1793_RequestError;
  setLineNumber(9);    // compilenode string
  var string1795 = new GraceString("ConcurrentModification");
  // call case 6: other requests
  // call case 2: outer request
  var call1796 = selfRequest(var_prelude, "ProgrammingError", [0]);
  var call1794 = request(call1796, "refine(1)", [1], string1795);
  var var_ConcurrentModification = call1794;
  var reader1797_ConcurrentModification = function() {  // reader method ConcurrentModification
      if (var_ConcurrentModification === undefined) raiseUninitializedVariable("ConcurrentModification");
      return var_ConcurrentModification;
  };
  reader1797_ConcurrentModification.isDef = true;
  this.methods["ConcurrentModification"] = reader1797_ConcurrentModification;
  setLineNumber(10);    // compilenode string
  var string1799 = new GraceString("SizeUnknown");
  // call case 6: other requests
  // call case 2: outer request
  var call1800 = selfRequest(var_prelude, "Exception", [0]);
  var call1798 = request(call1800, "refine(1)", [1], string1799);
  var var_SizeUnknown = call1798;
  var reader1801_SizeUnknown = function() {  // reader method SizeUnknown
      if (var_SizeUnknown === undefined) raiseUninitializedVariable("SizeUnknown");
      return var_SizeUnknown;
  };
  reader1801_SizeUnknown.isDef = true;
  this.methods["SizeUnknown"] = reader1801_SizeUnknown;
  setLineNumber(740);    // compilenode object
  var obj1802_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_collectionsPrelude_740");
    this.outer_collectionsPrelude_740 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    this.data.unused = undefined;
    var reader1803_unused = function() {  // reader method unused
        if (this.data.unused === undefined) raiseUninitializedVariable("unused");
        return this.data.unused;
    };
    reader1803_unused.isVar = true;
    reader1803_unused.confidential = true;
    this.methods["unused"] = reader1803_unused;
    var writer1804_unused = function(argcv, n) {   // writer method unused:=(_)
      this.data.unused = n;
      return GraceDone;
    };
    writer1804_unused.confidential = true;
    this.methods["unused:=(1)"] = writer1804_unused;
    this.data.key = undefined;
    var reader1805_key = function() {  // reader method key
        if (this.data.key === undefined) raiseUninitializedVariable("key");
        return this.data.key;
    };
    reader1805_key.isDef = true;
    this.methods["key"] = reader1805_key;
    this.data.value = undefined;
    var reader1806_value = function() {  // reader method value
        if (this.data.value === undefined) raiseUninitializedVariable("value");
        return this.data.value;
    };
    reader1806_value.isDef = true;
    this.methods["value"] = reader1806_value;
    var func1807 = function(argcv) {    // method asString, line 744
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(744);    // compilenode string
      var string1808 = new GraceString("unused");
      return string1808;
    };    // end of method asString
    this.methods["asString"] = func1807;
    func1807.methodName = "asString";
    func1807.paramCounts = [0];
    func1807.paramNames = [];
    func1807.definitionLine = 744;
    func1807.definitionModule = "collectionsPrelude";
    var func1809 = function(argcv, var_other) {    // method ==(_), line 745
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("==(_)", 0, numArgs - 1);
      }
      setLineNumber(745);    // compilenode call
      // call case 4: self request with 1 args and 0 typeArgs 
      var call1810 = selfRequest(this, "isMe(1)", [1], var_other);
      return call1810;
    };    // end of method ==(_)
    this.methods["==(1)"] = func1809;
    func1809.methodName = "==(1)";
    func1809.paramCounts = [1];
    func1809.paramNames = ["other"];
    func1809.definitionLine = 745;
    func1809.definitionModule = "collectionsPrelude";
    var func1811 = function(argcv, var_other) {    // method ≠(_), line 746
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("≠(_)", 0, numArgs - 1);
      }
      setLineNumber(746);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 1 args and 0 typeArgs 
      var call1813 = selfRequest(this, "isMe(1)", [1], var_other);
      var call1812 = request(call1813, "not", [0]);
      return call1812;
    };    // end of method ≠(_)
    this.methods["\u2260(1)"] = func1811;
    func1811.methodName = "\u2260(1)";
    func1811.paramCounts = [1];
    func1811.paramNames = ["other"];
    func1811.definitionLine = 746;
    func1811.definitionModule = "collectionsPrelude";
    var func1814 = function(argcv) {    // method hash, line 747
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("hash", 0, numArgs - 0);
      }
      setLineNumber(747);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1815 = selfRequest(this, "myIdentityHash", [0]);
      return call1815;
    };    // end of method hash
    this.methods["hash"] = func1814;
    func1814.methodName = "hash";
    func1814.paramCounts = [0];
    func1814.paramNames = [];
    func1814.definitionLine = 747;
    func1814.definitionModule = "collectionsPrelude";
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 740;
        m.definitionModule = "collectionsPrelude";
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
    var obj1802_init = function() {    // init of object on line 740
      this.data.unused = GraceTrue;
      this.data.key = this;
      this.data.value = this;
    };
    return obj1802_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj1802 = emptyGraceObject("unused", "collectionsPrelude", 740);
  var obj1802_init = obj1802_build.call(obj1802, null, this, [], []);
  obj1802_init.call(obj1802);  // end of compileobject
  var var_unused = obj1802;
  var reader1816_unused = function() {  // reader method unused
      if (var_unused === undefined) raiseUninitializedVariable("unused");
      return var_unused;
  };
  reader1816_unused.isDef = true;
  reader1816_unused.confidential = true;
  this.methods["unused"] = reader1816_unused;
  setLineNumber(750);    // compilenode object
  var obj1817_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_collectionsPrelude_750");
    this.outer_collectionsPrelude_750 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    this.data.removed = undefined;
    var reader1818_removed = function() {  // reader method removed
        if (this.data.removed === undefined) raiseUninitializedVariable("removed");
        return this.data.removed;
    };
    reader1818_removed.isVar = true;
    reader1818_removed.confidential = true;
    this.methods["removed"] = reader1818_removed;
    var writer1819_removed = function(argcv, n) {   // writer method removed:=(_)
      this.data.removed = n;
      return GraceDone;
    };
    writer1819_removed.confidential = true;
    this.methods["removed:=(1)"] = writer1819_removed;
    this.data.key = undefined;
    var reader1820_key = function() {  // reader method key
        if (this.data.key === undefined) raiseUninitializedVariable("key");
        return this.data.key;
    };
    reader1820_key.isDef = true;
    this.methods["key"] = reader1820_key;
    this.data.value = undefined;
    var reader1821_value = function() {  // reader method value
        if (this.data.value === undefined) raiseUninitializedVariable("value");
        return this.data.value;
    };
    reader1821_value.isDef = true;
    this.methods["value"] = reader1821_value;
    var func1822 = function(argcv) {    // method asString, line 754
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(754);    // compilenode string
      var string1823 = new GraceString("removed");
      return string1823;
    };    // end of method asString
    this.methods["asString"] = func1822;
    func1822.methodName = "asString";
    func1822.paramCounts = [0];
    func1822.paramNames = [];
    func1822.definitionLine = 754;
    func1822.definitionModule = "collectionsPrelude";
    var func1824 = function(argcv, var_other) {    // method ==(_), line 755
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("==(_)", 0, numArgs - 1);
      }
      setLineNumber(755);    // compilenode call
      // call case 4: self request with 1 args and 0 typeArgs 
      var call1825 = selfRequest(this, "isMe(1)", [1], var_other);
      return call1825;
    };    // end of method ==(_)
    this.methods["==(1)"] = func1824;
    func1824.methodName = "==(1)";
    func1824.paramCounts = [1];
    func1824.paramNames = ["other"];
    func1824.definitionLine = 755;
    func1824.definitionModule = "collectionsPrelude";
    var func1826 = function(argcv, var_other) {    // method ≠(_), line 756
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 1) && (numArgs !== 1)) {
          raiseTypeArgError("≠(_)", 0, numArgs - 1);
      }
      setLineNumber(756);    // compilenode member
      // call case 6: other requests
      // call case 4: self request with 1 args and 0 typeArgs 
      var call1828 = selfRequest(this, "isMe(1)", [1], var_other);
      var call1827 = request(call1828, "not", [0]);
      return call1827;
    };    // end of method ≠(_)
    this.methods["\u2260(1)"] = func1826;
    func1826.methodName = "\u2260(1)";
    func1826.paramCounts = [1];
    func1826.paramNames = ["other"];
    func1826.definitionLine = 756;
    func1826.definitionModule = "collectionsPrelude";
    var func1829 = function(argcv) {    // method hash, line 757
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("hash", 0, numArgs - 0);
      }
      setLineNumber(757);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call1830 = selfRequest(this, "myIdentityHash", [0]);
      return call1830;
    };    // end of method hash
    this.methods["hash"] = func1829;
    func1829.methodName = "hash";
    func1829.paramCounts = [0];
    func1829.paramNames = [];
    func1829.definitionLine = 757;
    func1829.definitionModule = "collectionsPrelude";
    this.mutable = true;
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 750;
        m.definitionModule = "collectionsPrelude";
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
    var obj1817_init = function() {    // init of object on line 750
      this.data.removed = GraceTrue;
      this.data.key = this;
      this.data.value = this;
    };
    return obj1817_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj1817 = emptyGraceObject("removed", "collectionsPrelude", 750);
  var obj1817_init = obj1817_build.call(obj1817, null, this, [], []);
  obj1817_init.call(obj1817);  // end of compileobject
  var var_removed = obj1817;
  var reader1831_removed = function() {  // reader method removed
      if (var_removed === undefined) raiseUninitializedVariable("removed");
      return var_removed;
  };
  reader1831_removed.isDef = true;
  reader1831_removed.confidential = true;
  this.methods["removed"] = reader1831_removed;
  setLineNumber(1508);    // compilenode object
  var obj1832_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_collectionsPrelude_1508");
    this.outer_collectionsPrelude_1508 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func1833 = function(argcv) {    // method asString, line 1509
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("asString", 0, numArgs - 0);
      }
      setLineNumber(1509);    // compilenode string
      var string1834 = new GraceString("the range factory");
      return string1834;
    };    // end of method asString
    this.methods["asString"] = func1833;
    func1833.methodName = "asString";
    func1833.paramCounts = [0];
    func1833.paramNames = [];
    func1833.definitionLine = 1509;
    func1833.definitionModule = "collectionsPrelude";
    var func1835 = function(argcv, var_lower, var_upper) {    // method from(_)to(_), line 1510
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("from(_)to(_)", 0, numArgs - 2);
      }
      setLineNumber(1512);    // compilenode matchcase
      var cases1836 = [];
      setLineNumber(1513);    // compilenode block
      var block1837 = new GraceBlock(this, 1513, 1);
      block1837.paramTypes = [var_Number];
      var matches1838 = function(var___95____95__3) {
        if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var___95____95__3)))
            return false;
        return true;
      };
      block1837.guard = matches1838;
      block1837.real = function block1837(var___95____95__3) {
        setLineNumber(1513);    // compileBlock
        return GraceDone;
      };
      let applyMeth1837 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1837.methodName = "apply(1)";
      applyMeth1837.paramCounts = [1];
      applyMeth1837.paramNames = ["__3"];
      applyMeth1837.definitionLine = 1513;
      applyMeth1837.definitionModule = "collectionsPrelude";
      block1837.methods["apply(1)"] = applyMeth1837;
      let matchesMeth1837 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1837.methodName = "matches(1)";
      matchesMeth1837.paramCounts = [1];
      matchesMeth1837.paramNames = ["__3"];
      matchesMeth1837.definitionLine = 1513;
      matchesMeth1837.definitionModule = "collectionsPrelude";
      block1837.methods["matches(1)"] = matchesMeth1837;
      cases1836.push(block1837);
      setLineNumber(1514);    // compilenode block
      var block1839 = new GraceBlock(this, 1514, 0);
      block1839.guard = jsTrue;
      block1839.real = function block1839() {
        setLineNumber(1515);    // compilenode string
        var string1841 = new GraceString("lower bound ");
        var opresult1842 = request(string1841, "++(1)", [1], var_lower);
        var string1843 = new GraceString("");
        var opresult1844 = request(opresult1842, "++(1)", [1], string1843);
        setLineNumber(1516);    // compilenode string
        var string1845 = new GraceString(" in range.from(");
        var opresult1846 = request(string1845, "++(1)", [1], var_lower);
        var string1847 = new GraceString(")to(");
        var opresult1848 = request(opresult1846, "++(1)", [1], string1847);
        var opresult1849 = request(opresult1848, "++(1)", [1], var_upper);
        var string1850 = new GraceString(") is not an integer");
        var opresult1851 = request(opresult1849, "++(1)", [1], string1850);
        var opresult1852 = request(opresult1844, "++(1)", [1], opresult1851);
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1840 = request(var_RequestError, "raise(1)", [1], opresult1852);
        return call1840;
      };
      let applyMeth1839 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth1839.methodName = "apply";
      applyMeth1839.paramCounts = [0];
      applyMeth1839.paramNames = [];
      applyMeth1839.definitionLine = 1514;
      applyMeth1839.definitionModule = "collectionsPrelude";
      block1839.methods["apply"] = applyMeth1839;
      setLineNumber(1512);    // compilematchcase
      var matchres1836 = matchCase(var_lower,cases1836,block1839);
      setLineNumber(1518);    // compilenode member
      // call case 6: other requests
      var call1853 = request(var_lower, "truncated", [0]);
      var var_start = call1853;
      var if1854 = GraceDone;
      setLineNumber(1519);    // compilenode op
      var opresult1855 = request(var_start, "\u2260(1)", [1], var_lower);
      if (Grace_isTrue(opresult1855)) {
        setLineNumber(1520);    // compilenode string
        var string1857 = new GraceString("lower bound ");
        var opresult1858 = request(string1857, "++(1)", [1], var_lower);
        var string1859 = new GraceString("");
        var opresult1860 = request(opresult1858, "++(1)", [1], string1859);
        setLineNumber(1521);    // compilenode string
        var string1861 = new GraceString(" in range.from(");
        var opresult1862 = request(string1861, "++(1)", [1], var_lower);
        var string1863 = new GraceString(")to(");
        var opresult1864 = request(opresult1862, "++(1)", [1], string1863);
        var opresult1865 = request(opresult1864, "++(1)", [1], var_upper);
        var string1866 = new GraceString(") is not an integer");
        var opresult1867 = request(opresult1865, "++(1)", [1], string1866);
        var opresult1868 = request(opresult1860, "++(1)", [1], opresult1867);
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1856 = request(var_RequestError, "raise(1)", [1], opresult1868);
        if1854 = call1856;
      }
      setLineNumber(1523);    // compilenode matchcase
      var cases1869 = [];
      setLineNumber(1524);    // compilenode block
      var block1870 = new GraceBlock(this, 1524, 1);
      block1870.paramTypes = [var_Number];
      var matches1871 = function(var___95____95__4) {
        if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var___95____95__4)))
            return false;
        return true;
      };
      block1870.guard = matches1871;
      block1870.real = function block1870(var___95____95__4) {
        setLineNumber(1524);    // compileBlock
        return GraceDone;
      };
      let applyMeth1870 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth1870.methodName = "apply(1)";
      applyMeth1870.paramCounts = [1];
      applyMeth1870.paramNames = ["__4"];
      applyMeth1870.definitionLine = 1524;
      applyMeth1870.definitionModule = "collectionsPrelude";
      block1870.methods["apply(1)"] = applyMeth1870;
      let matchesMeth1870 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth1870.methodName = "matches(1)";
      matchesMeth1870.paramCounts = [1];
      matchesMeth1870.paramNames = ["__4"];
      matchesMeth1870.definitionLine = 1524;
      matchesMeth1870.definitionModule = "collectionsPrelude";
      block1870.methods["matches(1)"] = matchesMeth1870;
      cases1869.push(block1870);
      setLineNumber(1525);    // compilenode block
      var block1872 = new GraceBlock(this, 1525, 0);
      block1872.guard = jsTrue;
      block1872.real = function block1872() {
        setLineNumber(1526);    // compilenode string
        var string1874 = new GraceString("upper bound ");
        var opresult1875 = request(string1874, "++(1)", [1], var_upper);
        var string1876 = new GraceString("");
        var opresult1877 = request(opresult1875, "++(1)", [1], string1876);
        setLineNumber(1527);    // compilenode string
        var string1878 = new GraceString(" in range.from(");
        var opresult1879 = request(string1878, "++(1)", [1], var_lower);
        var string1880 = new GraceString(")to(");
        var opresult1881 = request(opresult1879, "++(1)", [1], string1880);
        var opresult1882 = request(opresult1881, "++(1)", [1], var_upper);
        var string1883 = new GraceString(") is not an integer");
        var opresult1884 = request(opresult1882, "++(1)", [1], string1883);
        var opresult1885 = request(opresult1877, "++(1)", [1], opresult1884);
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1873 = request(var_RequestError, "raise(1)", [1], opresult1885);
        return call1873;
      };
      let applyMeth1872 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth1872.methodName = "apply";
      applyMeth1872.paramCounts = [0];
      applyMeth1872.paramNames = [];
      applyMeth1872.definitionLine = 1525;
      applyMeth1872.definitionModule = "collectionsPrelude";
      block1872.methods["apply"] = applyMeth1872;
      setLineNumber(1523);    // compilematchcase
      var matchres1869 = matchCase(var_upper,cases1869,block1872);
      setLineNumber(1529);    // compilenode member
      // call case 6: other requests
      var call1886 = request(var_upper, "truncated", [0]);
      var var_stop = call1886;
      var if1887 = GraceDone;
      setLineNumber(1530);    // compilenode op
      var opresult1888 = request(var_stop, "\u2260(1)", [1], var_upper);
      if (Grace_isTrue(opresult1888)) {
        setLineNumber(1531);    // compilenode string
        var string1890 = new GraceString("upper bound ");
        var opresult1891 = request(string1890, "++(1)", [1], var_upper);
        var string1892 = new GraceString("");
        var opresult1893 = request(opresult1891, "++(1)", [1], string1892);
        setLineNumber(1532);    // compilenode string
        var string1894 = new GraceString(" in range.from()to() is not an integer");
        var opresult1895 = request(opresult1893, "++(1)", [1], string1894);
        // call case 6: other requests
        if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
        var call1889 = request(var_RequestError, "raise(1)", [1], opresult1895);
        if1887 = call1889;
      }
      setLineNumber(1535);    // compilenode call
      // call case 4: self request with 2 args and 0 typeArgs 
      var call1896 = selfRequest(this, "uncheckedFrom(1)to(1)", [1, 1], var_lower, var_upper);
      return call1896;
    };    // end of method from(_)to(_)
    this.methods["from(1)to(1)"] = func1835;
    func1835.methodName = "from(1)to(1)";
    func1835.paramCounts = [1, 1];
    func1835.paramNames = ["lower", "upper"];
    func1835.definitionLine = 1510;
    func1835.definitionModule = "collectionsPrelude";
    var func1897 = function(argcv, var_lower, var_upper) {    // method uncheckedFrom(_)to(_), line 1538
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("uncheckedFrom(_)to(_)", 0, numArgs - 2);
      }
      var ouc = emptyGraceObject("range.uncheckedFrom(_)to(_)", "collectionsPrelude", 1538);
      var ouc_init = this.methods["uncheckedFrom(1)to(1)$build(3)"].call(this, null, var_lower, var_upper, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method uncheckedFrom(_)to(_)
    this.methods["uncheckedFrom(1)to(1)"] = func1897;
    func1897.methodName = "uncheckedFrom(1)to(1)";
    func1897.paramCounts = [1, 1];
    func1897.paramNames = ["lower", "upper"];
    func1897.definitionLine = 1538;
    func1897.definitionModule = "collectionsPrelude";
    var func1898 = function(argcv, var_lower, var_upper, inheritingObject, aliases, exclusions) {    // method uncheckedFrom(_)to(_)$build(_,_,_), line 1538
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("uncheckedFrom(_)to(_)", 0, numArgs - 2);
      }
      var obj1899_build = function(ignore, var_lower, var_upper, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_collectionsPrelude_1540");
        this.outer_collectionsPrelude_1540 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(1541);    // reuse call
        var initFun1900 = selfRequest(importedModules["collectionsPrelude"], "indexable$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.start = undefined;
        var reader1901_start = function() {  // reader method start
            if (this.data.start === undefined) raiseUninitializedVariable("start");
            return this.data.start;
        };
        reader1901_start.isDef = true;
        reader1901_start.confidential = true;
        this.methods["start"] = reader1901_start;
        this.data.stop = undefined;
        var reader1902_stop = function() {  // reader method stop
            if (this.data.stop === undefined) raiseUninitializedVariable("stop");
            return this.data.stop;
        };
        reader1902_stop.isDef = true;
        reader1902_stop.confidential = true;
        this.methods["stop"] = reader1902_stop;
        this.data.size = undefined;
        var reader1903_size = function() {  // reader method size
            if (this.data.size === undefined) raiseUninitializedVariable("size");
            return this.data.size;
        };
        reader1903_size.isDef = true;
        this.methods["size"] = reader1903_size;
        var func1904 = function(argcv) {    // method iterator, line 1547
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          var ouc = emptyGraceObject("range.uncheckedFrom(_)to(_).iterator", "collectionsPrelude", 1547);
          var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
          ouc_init.call(ouc);
          return ouc;
        };    // end of method iterator
        this.methods["iterator"] = func1904;
        func1904.methodName = "iterator";
        func1904.paramCounts = [0];
        func1904.paramNames = [];
        func1904.definitionLine = 1547;
        func1904.definitionModule = "collectionsPrelude";
        var func1905 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 1547
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 4;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          var obj1906_build = function(ignore, outerObj, aliases, exclusions) {
            this.closureKeys = this.closureKeys || [];
            this.closureKeys.push("outer_collectionsPrelude_1548");
            this.outer_collectionsPrelude_1548 = outerObj;
            const inheritedExclusions = { };
            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                const exMeth = exclusions[eix];
                inheritedExclusions[exMeth] = this.methods[exMeth]; };
            this.data.val = undefined;
            var reader1907_val = function() {  // reader method val
                if (this.data.val === undefined) raiseUninitializedVariable("val");
                return this.data.val;
            };
            reader1907_val.isVar = true;
            reader1907_val.confidential = true;
            this.methods["val"] = reader1907_val;
            var writer1908_val = function(argcv, n) {   // writer method val:=(_)
              this.data.val = n;
              return GraceDone;
            };
            writer1908_val.confidential = true;
            this.methods["val:=(1)"] = writer1908_val;
            var func1909 = function(argcv) {    // method hasNext, line 1550
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("hasNext", 0, numArgs - 0);
              }
              setLineNumber(1550);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1910 = selfRequest(this, "val", [0]);
              // call case 2: outer request
              var call1911 = selfRequest(this.outer_collectionsPrelude_1548, "stop", [0]);
              var opresult1912 = request(call1910, "\u2264(1)", [1], call1911);
              return opresult1912;
            };    // end of method hasNext
            this.methods["hasNext"] = func1909;
            func1909.methodName = "hasNext";
            func1909.paramCounts = [0];
            func1909.paramNames = [];
            func1909.definitionLine = 1550;
            func1909.definitionModule = "collectionsPrelude";
            var func1913 = function(argcv) {    // method next, line 1551
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("next", 0, numArgs - 0);
              }
              var if1914 = GraceDone;
              setLineNumber(1552);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1915 = selfRequest(this, "val", [0]);
              // call case 2: outer request
              var call1916 = selfRequest(this.outer_collectionsPrelude_1548, "stop", [0]);
              var opresult1917 = request(call1915, ">(1)", [1], call1916);
              if (Grace_isTrue(opresult1917)) {
                setLineNumber(1553);    // compilenode string
                var string1919 = new GraceString("over ");
                // call case 2: outer request
                var call1920 = selfRequest(this.outer_collectionsPrelude_1548, "asString", [0]);
                var opresult1921 = request(string1919, "++(1)", [1], call1920);
                var string1922 = new GraceString("");
                var opresult1923 = request(opresult1921, "++(1)", [1], string1922);
                // call case 6: other requests
                if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                var call1918 = request(var_IteratorExhausted, "raise(1)", [1], opresult1923);
                if1914 = call1918;
              }
              setLineNumber(1555);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1925 = selfRequest(this, "val", [0]);
              var sum1926 = request(call1925, "+(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call1924 = selfRequest(this, "val:=(1)", [1], sum1926);
              setLineNumber(1556);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1927 = selfRequest(this, "val", [0]);
              var diff1928 = request(call1927, "-(1)", [1], new GraceNum(1));
              return diff1928;
            };    // end of method next
            this.methods["next"] = func1913;
            func1913.methodName = "next";
            func1913.paramCounts = [0];
            func1913.paramNames = [];
            func1913.definitionLine = 1551;
            func1913.definitionModule = "collectionsPrelude";
            var func1929 = function(argcv) {    // method asString, line 1558
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("asString", 0, numArgs - 0);
              }
              setLineNumber(1558);    // compilenode string
              var string1930 = new GraceString("iterator over ");
              // call case 2: outer request
              var call1931 = selfRequest(this.outer_collectionsPrelude_1548, "asString", [0]);
              var opresult1932 = request(string1930, "++(1)", [1], call1931);
              var string1933 = new GraceString(" at ");
              var opresult1934 = request(opresult1932, "++(1)", [1], string1933);
              // call case 4: self request with 0 args and 0 typeArgs 
              var call1935 = selfRequest(this, "val", [0]);
              var opresult1936 = request(opresult1934, "++(1)", [1], call1935);
              var string1937 = new GraceString("");
              var opresult1938 = request(opresult1936, "++(1)", [1], string1937);
              return opresult1938;
            };    // end of method asString
            this.methods["asString"] = func1929;
            func1929.methodName = "asString";
            func1929.paramCounts = [0];
            func1929.paramNames = [];
            func1929.definitionLine = 1558;
            func1929.definitionModule = "collectionsPrelude";
            this.mutable = true;
            const overridenByAliases = { };
            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                const a = aliases[aix];
                const newNm = a.newName;
                const oldNm = a.oldName;
                overridenByAliases[newNm] = this.methods[newNm];
                const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                m.definitionLine = 1548;
                m.definitionModule = "collectionsPrelude";
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
            var obj1906_init = function() {    // init of object on line 1548
              setLineNumber(1549);    // compilenode member
              // call case 2: outer request
              var call1939 = selfRequest(this.outer_collectionsPrelude_1548, "start", [0]);
              this.data.val = call1939;
            };
            return obj1906_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
          };
          var obj1906_init = obj1906_build.call(inheritingObject, null, this, aliases, exclusions);
          return obj1906_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
        };    // end of method iterator$build(_,_,_)
        this.methods["iterator$build(3)"] = func1905;
        func1905.methodName = "iterator$build(3)";
        func1905.paramCounts = [0];
        func1905.paramNames = [];
        func1905.definitionLine = 1547;
        func1905.definitionModule = "collectionsPrelude";
        var func1940 = function(argcv, var_ix) {    // method at(_), line 1561
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("at(_)", 0, numArgs - 1);
          }
          var if1941 = GraceDone;
          setLineNumber(1562);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1943 = selfRequest(this, "size", [0]);
          var opresult1944 = request(var_ix, "\u2264(1)", [1], call1943);
          var call1942 = request(opresult1944, "prefix!", [0]);
          if (Grace_isTrue(call1942)) {
            setLineNumber(1563);    // compilenode string
            var string1946 = new GraceString("requested range.at(");
            var opresult1947 = request(string1946, "++(1)", [1], var_ix);
            var string1948 = new GraceString("), but upper bound is ");
            var opresult1949 = request(opresult1947, "++(1)", [1], string1948);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1950 = selfRequest(this, "size", [0]);
            var opresult1951 = request(opresult1949, "++(1)", [1], call1950);
            var string1952 = new GraceString("");
            var opresult1953 = request(opresult1951, "++(1)", [1], string1952);
            // call case 6: other requests
            if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
            var call1945 = request(var_BoundsError, "raise(1)", [1], opresult1953);
            if1941 = call1945;
          }
          var if1954 = GraceDone;
          setLineNumber(1565);    // compilenode call
          // call case 6: other requests
          var opresult1956 = request(var_ix, "\u2265(1)", [1], new GraceNum(1));
          var call1955 = request(opresult1956, "prefix!", [0]);
          if (Grace_isTrue(call1955)) {
            setLineNumber(1566);    // compilenode string
            var string1958 = new GraceString("requested range.at(");
            var opresult1959 = request(string1958, "++(1)", [1], var_ix);
            var string1960 = new GraceString("), but lower bound is 1");
            var opresult1961 = request(opresult1959, "++(1)", [1], string1960);
            // call case 6: other requests
            if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
            var call1957 = request(var_BoundsError, "raise(1)", [1], opresult1961);
            if1954 = call1957;
          }
          setLineNumber(1568);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1962 = selfRequest(this, "start", [0]);
          var diff1963 = request(var_ix, "-(1)", [1], new GraceNum(1));
          var sum1964 = request(call1962, "+(1)", [1], diff1963);
          return sum1964;
        };    // end of method at(_)
        func1940.paramTypes = [];
        func1940.paramTypes.push([type_Number, "ix"]);
        this.methods["at(1)"] = func1940;
        func1940.methodName = "at(1)";
        func1940.paramCounts = [1];
        func1940.paramNames = ["ix"];
        func1940.definitionLine = 1561;
        func1940.definitionModule = "collectionsPrelude";
        var func1965 = function(argcv, var_ix, var_action) {    // method at(_)ifAbsent(_), line 1570
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
          }
          var if1966 = GraceDone;
          setLineNumber(1571);    // compilenode num
          var opresult1967 = request(var_ix, "\u2265(1)", [1], new GraceNum(1));
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1968 = selfRequest(this, "size", [0]);
          var opresult1969 = request(var_ix, "\u2264(1)", [1], call1968);
          var opresult1970 = request(opresult1967, "&&(1)", [1], opresult1969);
          if (Grace_isTrue(opresult1970)) {
            setLineNumber(1572);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1971 = selfRequest(this, "start", [0]);
            var diff1972 = request(var_ix, "-(1)", [1], new GraceNum(1));
            var sum1973 = request(call1971, "+(1)", [1], diff1972);
            if1966 = sum1973;
          } else {
            setLineNumber(1574);    // compilenode member
            // call case 6: other requests
            var call1974 = request(var_action, "apply", [0]);
            if1966 = call1974;
          }
          return if1966;
        };    // end of method at(_)ifAbsent(_)
        func1965.paramTypes = [];
        func1965.paramTypes.push([type_Number, "ix"]);
        func1965.paramTypes.push([]);
        this.methods["at(1)ifAbsent(1)"] = func1965;
        func1965.methodName = "at(1)ifAbsent(1)";
        func1965.paramCounts = [1, 1];
        func1965.paramNames = ["ix", "action"];
        func1965.definitionLine = 1570;
        func1965.definitionModule = "collectionsPrelude";
        var func1975 = function(argcv, var_elem) {    // method contains(_), line 1577
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("contains(_)", 0, numArgs - 1);
          }
          setLineNumber(1578);    // compilenode block
          var block1977 = new GraceBlock(this, 1578, 0);
          block1977.guard = jsTrue;
          block1977.real = function block1977() {
            setLineNumber(1579);    // compilenode member
            // call case 6: other requests
            var call1978 = request(var_elem, "truncated", [0]);
            var var_intElem = call1978;
            var if1979 = GraceDone;
            setLineNumber(1580);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            var opresult1980 = request(var_intElem, "\u2260(1)", [1], var_elem);
            if (Grace_isTrue(opresult1980)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if1981 = GraceDone;
            setLineNumber(1581);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1982 = selfRequest(this, "start", [0]);
            var opresult1983 = request(var_intElem, "<(1)", [1], call1982);
            if (Grace_isTrue(opresult1983)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if1984 = GraceDone;
            setLineNumber(1582);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1985 = selfRequest(this, "stop", [0]);
            var opresult1986 = request(var_intElem, ">(1)", [1], call1985);
            if (Grace_isTrue(opresult1986)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            return if1984;
          };
          let applyMeth1977 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1977.methodName = "apply";
          applyMeth1977.paramCounts = [0];
          applyMeth1977.paramNames = [];
          applyMeth1977.definitionLine = 1578;
          applyMeth1977.definitionModule = "collectionsPrelude";
          block1977.methods["apply"] = applyMeth1977;
          var cases1976 = [];
          setLineNumber(1583);    // compilenode block
          var block1987 = new GraceBlock(this, 1583, 1);
          // call case 2: outer request
          var call1988 = selfRequest(var_prelude, "Exception", [0]);
          block1987.paramTypes = [call1988];
          var matches1989 = function(var_ex) {
            // call case 2: outer request
            var call1990 = selfRequest(var_prelude, "Exception", [0]);
            if (!Grace_isTrue(request(call1990, "matches(1)", [1], var_ex)))
                return false;
            return true;
          };
          block1987.guard = matches1989;
          block1987.real = function block1987(var_ex) {
            setLineNumber(1583);    // compilenode return
            throw new ReturnException(GraceFalse, returnTarget);
          };
          let applyMeth1987 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth1987.methodName = "apply(1)";
          applyMeth1987.paramCounts = [1];
          applyMeth1987.paramNames = ["ex"];
          applyMeth1987.definitionLine = 1583;
          applyMeth1987.definitionModule = "collectionsPrelude";
          block1987.methods["apply(1)"] = applyMeth1987;
          let matchesMeth1987 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth1987.methodName = "matches(1)";
          matchesMeth1987.paramCounts = [1];
          matchesMeth1987.paramNames = ["ex"];
          matchesMeth1987.definitionLine = 1583;
          matchesMeth1987.definitionModule = "collectionsPrelude";
          block1987.methods["matches(1)"] = matchesMeth1987;
          cases1976.push(block1987);
          setLineNumber(1578);    // compiletrycatch
          var catchres1976 = tryCatch(block1977,cases1976,false);
          setLineNumber(1584);    // compilenode return
          return GraceTrue;
        };    // end of method contains(_)
        this.methods["contains(1)"] = func1975;
        func1975.methodName = "contains(1)";
        func1975.paramCounts = [1];
        func1975.paramNames = ["elem"];
        func1975.definitionLine = 1577;
        func1975.definitionModule = "collectionsPrelude";
        var func1991 = function(argcv, var_block1) {    // method do(_), line 1586
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("do(_)", 0, numArgs - 1);
          }
          setLineNumber(1587);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call1992 = selfRequest(this, "start", [0]);
          var var_val = call1992;
          setLineNumber(1588);    // compilenode block
          var block1994 = new GraceBlock(this, 1588, 0);
          block1994.guard = jsTrue;
          block1994.real = function block1994() {
            setLineNumber(1588);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call1995 = selfRequest(this, "stop", [0]);
            var opresult1996 = request(var_val, "\u2264(1)", [1], call1995);
            return opresult1996;
          };
          let applyMeth1994 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1994.methodName = "apply";
          applyMeth1994.paramCounts = [0];
          applyMeth1994.paramNames = [];
          applyMeth1994.definitionLine = 1588;
          applyMeth1994.definitionModule = "collectionsPrelude";
          block1994.methods["apply"] = applyMeth1994;
          var block1997 = new GraceBlock(this, 1588, 0);
          block1997.guard = jsTrue;
          block1997.real = function block1997() {
            setLineNumber(1589);    // compilenode call
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 6: other requests
            var call1998 = request(var_block1, "apply(1)", [1], var_val);
            setLineNumber(1590);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            var sum1999 = request(var_val, "+(1)", [1], new GraceNum(1));
            var_val = sum1999;
            return GraceDone;
          };
          let applyMeth1997 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth1997.methodName = "apply";
          applyMeth1997.paramCounts = [0];
          applyMeth1997.paramNames = [];
          applyMeth1997.definitionLine = 1588;
          applyMeth1997.definitionModule = "collectionsPrelude";
          block1997.methods["apply"] = applyMeth1997;
          // call case 2: outer request
          var call1993 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block1994, block1997);
          return call1993;
        };    // end of method do(_)
        this.methods["do(1)"] = func1991;
        func1991.methodName = "do(1)";
        func1991.paramCounts = [1];
        func1991.paramNames = ["block1"];
        func1991.definitionLine = 1586;
        func1991.definitionModule = "collectionsPrelude";
        var func2000 = function(argcv, var_block2) {    // method keysAndValuesDo(_), line 1593
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
          }
          setLineNumber(1594);    // compilenode num
          var var_key = new GraceNum(1);
          setLineNumber(1595);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2001 = selfRequest(this, "start", [0]);
          var var_val = call2001;
          setLineNumber(1596);    // compilenode block
          var block2003 = new GraceBlock(this, 1596, 0);
          block2003.guard = jsTrue;
          block2003.real = function block2003() {
            setLineNumber(1596);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2004 = selfRequest(this, "stop", [0]);
            var opresult2005 = request(var_val, "\u2264(1)", [1], call2004);
            return opresult2005;
          };
          let applyMeth2003 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2003.methodName = "apply";
          applyMeth2003.paramCounts = [0];
          applyMeth2003.paramNames = [];
          applyMeth2003.definitionLine = 1596;
          applyMeth2003.definitionModule = "collectionsPrelude";
          block2003.methods["apply"] = applyMeth2003;
          var block2006 = new GraceBlock(this, 1596, 0);
          block2006.guard = jsTrue;
          block2006.real = function block2006() {
            setLineNumber(1597);    // compilenode call
            if (var_key === undefined) raiseUninitializedVariable("key");
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 6: other requests
            var call2007 = request(var_block2, "apply(2)", [2], var_key, var_val);
            setLineNumber(1598);    // compilenode op
            if (var_key === undefined) raiseUninitializedVariable("key");
            var sum2008 = request(var_key, "+(1)", [1], new GraceNum(1));
            var_key = sum2008;
            setLineNumber(1599);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            var sum2009 = request(var_val, "+(1)", [1], new GraceNum(1));
            var_val = sum2009;
            return GraceDone;
          };
          let applyMeth2006 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2006.methodName = "apply";
          applyMeth2006.paramCounts = [0];
          applyMeth2006.paramNames = [];
          applyMeth2006.definitionLine = 1596;
          applyMeth2006.definitionModule = "collectionsPrelude";
          block2006.methods["apply"] = applyMeth2006;
          // call case 2: outer request
          var call2002 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block2003, block2006);
          return call2002;
        };    // end of method keysAndValuesDo(_)
        this.methods["keysAndValuesDo(1)"] = func2000;
        func2000.methodName = "keysAndValuesDo(1)";
        func2000.paramCounts = [1];
        func2000.paramNames = ["block2"];
        func2000.definitionLine = 1593;
        func2000.definitionModule = "collectionsPrelude";
        var func2010 = function(argcv) {    // method reversed, line 1602
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("reversed", 0, numArgs - 0);
          }
          setLineNumber(1603);    // compilenode call
          // call case 2: outer request
          var call2011 = selfRequest(this.outer_collectionsPrelude_1540, "from(1)downTo(1)", [1, 1], var_upper, var_lower);
          return call2011;
        };    // end of method reversed
        this.methods["reversed"] = func2010;
        func2010.methodName = "reversed";
        func2010.paramCounts = [0];
        func2010.paramNames = [];
        func2010.definitionLine = 1602;
        func2010.definitionModule = "collectionsPrelude";
        var func2012 = function(argcv, var_other) {    // method ++(_), line 1605
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("++(_)", 0, numArgs - 1);
          }
          setLineNumber(1606);    // compilenode call
          // call case 2: outer request
          var call2014 = selfRequest(importedModules["collectionsPrelude"], "lazyConcatenation(2)", [2], this, var_other);
          // call case 6: other requests
          // call case 2: outer request
          var call2015 = selfRequest(importedModules["collectionsPrelude"], "sequence", [0]);
          var call2013 = request(call2015, "withAll(1)", [1], call2014);
          return call2013;
        };    // end of method ++(_)
        this.methods["++(1)"] = func2012;
        func2012.methodName = "++(1)";
        func2012.paramCounts = [1];
        func2012.paramNames = ["other"];
        func2012.definitionLine = 1605;
        func2012.definitionModule = "collectionsPrelude";
        var func2016 = function(argcv, var_other) {    // method ==(_), line 1608
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("==(_)", 0, numArgs - 1);
          }
          setLineNumber(1609);    // compilenode call
          // call case 2: outer request
          var call2017 = selfRequest(importedModules["collectionsPrelude"], "isEqual(1)toCollection(1)", [1, 1], this, var_other);
          return call2017;
        };    // end of method ==(_)
        this.methods["==(1)"] = func2016;
        func2016.methodName = "==(1)";
        func2016.paramCounts = [1];
        func2016.paramNames = ["other"];
        func2016.definitionLine = 1608;
        func2016.definitionModule = "collectionsPrelude";
        var func2018 = function(argcv) {    // method hash, line 1611
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("hash", 0, numArgs - 0);
          }
          setLineNumber(1613);    // compilenode num
          var var_result = new GraceNum(98626254);
          setLineNumber(1614);    // compilenode block
          var block2020 = new GraceBlock(this, 1614, 1);
          block2020.guard = jsTrue;
          block2020.real = function block2020(var_each) {
            setLineNumber(1615);    // compilenode call
            if (var_result === undefined) raiseUninitializedVariable("result");
            // call case 2: outer request
            var call2021 = selfRequest(importedModules["collectionsPrelude"], "hashAndCombine(2)", [2], var_result, var_each);
            var_result = call2021;
            return GraceDone;
          };
          let applyMeth2020 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth2020.methodName = "apply(1)";
          applyMeth2020.paramCounts = [1];
          applyMeth2020.paramNames = ["each"];
          applyMeth2020.definitionLine = 1614;
          applyMeth2020.definitionModule = "collectionsPrelude";
          block2020.methods["apply(1)"] = applyMeth2020;
          let matchesMeth2020 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth2020.methodName = "matches(1)";
          matchesMeth2020.paramCounts = [1];
          matchesMeth2020.paramNames = ["each"];
          matchesMeth2020.definitionLine = 1614;
          matchesMeth2020.definitionModule = "collectionsPrelude";
          block2020.methods["matches(1)"] = matchesMeth2020;
          // call case 4: self request with 1 args and 0 typeArgs 
          var call2019 = selfRequest(this, "do(1)", [1], block2020);
          return var_result;
        };    // end of method hash
        this.methods["hash"] = func2018;
        func2018.methodName = "hash";
        func2018.paramCounts = [0];
        func2018.paramNames = [];
        func2018.definitionLine = 1611;
        func2018.definitionModule = "collectionsPrelude";
        var func2022 = function(argcv, var_obj) {    // method ::(_), line 1619
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("::(_)", 0, numArgs - 1);
          }
          setLineNumber(1619);    // compilenode call
          // call case 6: other requests
          // call case 2: outer request
          var call2024 = selfRequest(importedModules["collectionsPrelude"], "binding", [0]);
          var call2023 = request(call2024, "key(1)value(1)", [1, 1], this, var_obj);
          return call2023;
        };    // end of method ::(_)
        this.methods["::(1)"] = func2022;
        func2022.methodName = "::(1)";
        func2022.paramCounts = [1];
        func2022.paramNames = ["obj"];
        func2022.definitionLine = 1619;
        func2022.definitionModule = "collectionsPrelude";
        var func2025 = function(argcv, var_other) {    // method ≠(_), line 1620
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("≠(_)", 0, numArgs - 1);
          }
          setLineNumber(1620);    // compilenode member
          // call case 6: other requests
          var opresult2027 = request(this, "==(1)", [1], var_other);
          var call2026 = request(opresult2027, "not", [0]);
          return call2026;
        };    // end of method ≠(_)
        this.methods["\u2260(1)"] = func2025;
        func2025.methodName = "\u2260(1)";
        func2025.paramCounts = [1];
        func2025.paramNames = ["other"];
        func2025.definitionLine = 1620;
        func2025.definitionModule = "collectionsPrelude";
        var func2028 = function(argcv) {     // accessor method sorted
          const numArgs = arguments.length - 1;
          if (numArgs > 0) raiseTypeArgError("sorted", 0, numArgs - 0);
          return this;
        };    // end of method sorted
        this.methods["sorted"] = func2028;
        func2028.methodName = "sorted";
        func2028.paramCounts = [0];
        func2028.paramNames = [];
        func2028.definitionLine = 1621;
        func2028.definitionModule = "collectionsPrelude";
        var func2029 = function(argcv, var_c) {    // method sortedBy(_), line 1623
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
          }
          setLineNumber(1623);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          // call case 2: outer request
          var call2032 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
          var call2031 = request(call2032, "withAll(1)", [1], this);
          var call2030 = request(call2031, "sortBy(1)", [1], var_c);
          return call2030;
        };    // end of method sortedBy(_)
        this.methods["sortedBy(1)"] = func2029;
        func2029.methodName = "sortedBy(1)";
        func2029.paramCounts = [1];
        func2029.paramNames = ["c"];
        func2029.definitionLine = 1623;
        func2029.definitionModule = "collectionsPrelude";
        var func2033 = function(argcv) {    // method keys, line 1625
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("keys", 0, numArgs - 0);
          }
          setLineNumber(1625);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2034 = selfRequest(this, "size", [0]);
          var opresult2035 = request(new GraceNum(1), "..(1)", [1], call2034);
          return opresult2035;
        };    // end of method keys
        this.methods["keys"] = func2033;
        func2033.methodName = "keys";
        func2033.paramCounts = [0];
        func2033.paramNames = [];
        func2033.definitionLine = 1625;
        func2033.definitionModule = "collectionsPrelude";
        var func2036 = function(argcv) {     // accessor method values
          const numArgs = arguments.length - 1;
          if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
          return this;
        };    // end of method values
        this.methods["values"] = func2036;
        func2036.methodName = "values";
        func2036.paramCounts = [0];
        func2036.paramNames = [];
        func2036.definitionLine = 1627;
        func2036.definitionModule = "collectionsPrelude";
        var func2037 = function(argcv) {    // method asString, line 1629
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("asString", 0, numArgs - 0);
          }
          setLineNumber(1630);    // compilenode string
          var string2038 = new GraceString("range.from(");
          var opresult2039 = request(string2038, "++(1)", [1], var_lower);
          var string2040 = new GraceString(")to(");
          var opresult2041 = request(opresult2039, "++(1)", [1], string2040);
          var opresult2042 = request(opresult2041, "++(1)", [1], var_upper);
          var string2043 = new GraceString(")");
          var opresult2044 = request(opresult2042, "++(1)", [1], string2043);
          return opresult2044;
        };    // end of method asString
        this.methods["asString"] = func2037;
        func2037.methodName = "asString";
        func2037.paramCounts = [0];
        func2037.paramNames = [];
        func2037.definitionLine = 1629;
        func2037.definitionModule = "collectionsPrelude";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 1540;
            m.definitionModule = "collectionsPrelude";
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
        var obj1899_init = function() {    // init of object on line 1540
          this.data.start = var_lower;
          this.data.stop = var_upper;
          var if2045 = GraceDone;
          setLineNumber(1545);    // compilenode op
          var diff2046 = request(var_upper, "-(1)", [1], var_lower);
          var sum2047 = request(diff2046, "+(1)", [1], new GraceNum(1));
          var opresult2048 = request(sum2047, "<(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult2048)) {
            if2045 = new GraceNum(0);
          } else {
            var diff2049 = request(var_upper, "-(1)", [1], var_lower);
            var sum2050 = request(diff2049, "+(1)", [1], new GraceNum(1));
            if2045 = sum2050;
          }
          this.data.size = if2045;
        };
        return obj1899_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj1899_init = obj1899_build.call(inheritingObject, null, var_lower, var_upper, this, aliases, exclusions);
      return obj1899_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method uncheckedFrom(_)to(_)$build(_,_,_)
    this.methods["uncheckedFrom(1)to(1)$build(3)"] = func1898;
    func1898.methodName = "uncheckedFrom(1)to(1)$build(3)";
    func1898.paramCounts = [1, 1];
    func1898.paramNames = ["lower", "upper"];
    func1898.definitionLine = 1538;
    func1898.definitionModule = "collectionsPrelude";
    var func2051 = function(argcv, var_upper, var_lower) {    // method from(_)downTo(_), line 1634
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("from(_)downTo(_)", 0, numArgs - 2);
      }
      var ouc = emptyGraceObject("range.from(_)downTo(_)", "collectionsPrelude", 1634);
      var ouc_init = this.methods["from(1)downTo(1)$build(3)"].call(this, null, var_upper, var_lower, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method from(_)downTo(_)
    this.methods["from(1)downTo(1)"] = func2051;
    func2051.methodName = "from(1)downTo(1)";
    func2051.paramCounts = [1, 1];
    func2051.paramNames = ["upper", "lower"];
    func2051.definitionLine = 1634;
    func2051.definitionModule = "collectionsPrelude";
    var func2052 = function(argcv, var_upper, var_lower, inheritingObject, aliases, exclusions) {    // method from(_)downTo(_)$build(_,_,_), line 1634
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 2) && (numArgs !== 2)) {
          raiseTypeArgError("from(_)downTo(_)", 0, numArgs - 2);
      }
      var obj2053_build = function(ignore, var_upper, var_lower, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_collectionsPrelude_1635");
        this.outer_collectionsPrelude_1635 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(1636);    // reuse call
        var initFun2054 = selfRequest(importedModules["collectionsPrelude"], "indexable$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.start = undefined;
        var reader2055_start = function() {  // reader method start
            if (this.data.start === undefined) raiseUninitializedVariable("start");
            return this.data.start;
        };
        reader2055_start.isDef = true;
        reader2055_start.confidential = true;
        this.methods["start"] = reader2055_start;
        this.data.stop = undefined;
        var reader2056_stop = function() {  // reader method stop
            if (this.data.stop === undefined) raiseUninitializedVariable("stop");
            return this.data.stop;
        };
        reader2056_stop.isDef = true;
        reader2056_stop.confidential = true;
        this.methods["stop"] = reader2056_stop;
        this.data.size = undefined;
        var reader2057_size = function() {  // reader method size
            if (this.data.size === undefined) raiseUninitializedVariable("size");
            return this.data.size;
        };
        reader2057_size.isDef = true;
        this.methods["size"] = reader2057_size;
        var func2058 = function(argcv) {    // method iterator, line 1660
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          var ouc = emptyGraceObject("range.from(_)downTo(_).iterator", "collectionsPrelude", 1660);
          var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
          ouc_init.call(ouc);
          return ouc;
        };    // end of method iterator
        this.methods["iterator"] = func2058;
        func2058.methodName = "iterator";
        func2058.paramCounts = [0];
        func2058.paramNames = [];
        func2058.definitionLine = 1660;
        func2058.definitionModule = "collectionsPrelude";
        var func2059 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 1660
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 4;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("iterator", 0, numArgs - 0);
          }
          var obj2060_build = function(ignore, outerObj, aliases, exclusions) {
            this.closureKeys = this.closureKeys || [];
            this.closureKeys.push("outer_collectionsPrelude_1661");
            this.outer_collectionsPrelude_1661 = outerObj;
            const inheritedExclusions = { };
            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                const exMeth = exclusions[eix];
                inheritedExclusions[exMeth] = this.methods[exMeth]; };
            this.data.val = undefined;
            var reader2061_val = function() {  // reader method val
                if (this.data.val === undefined) raiseUninitializedVariable("val");
                return this.data.val;
            };
            reader2061_val.isVar = true;
            reader2061_val.confidential = true;
            this.methods["val"] = reader2061_val;
            var writer2062_val = function(argcv, n) {   // writer method val:=(_)
              this.data.val = n;
              return GraceDone;
            };
            writer2062_val.confidential = true;
            this.methods["val:=(1)"] = writer2062_val;
            var func2063 = function(argcv) {    // method hasNext, line 1663
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("hasNext", 0, numArgs - 0);
              }
              setLineNumber(1663);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call2064 = selfRequest(this, "val", [0]);
              // call case 2: outer request
              var call2065 = selfRequest(this.outer_collectionsPrelude_1661, "stop", [0]);
              var opresult2066 = request(call2064, "\u2265(1)", [1], call2065);
              return opresult2066;
            };    // end of method hasNext
            this.methods["hasNext"] = func2063;
            func2063.methodName = "hasNext";
            func2063.paramCounts = [0];
            func2063.paramNames = [];
            func2063.definitionLine = 1663;
            func2063.definitionModule = "collectionsPrelude";
            var func2067 = function(argcv) {    // method next, line 1664
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("next", 0, numArgs - 0);
              }
              var if2068 = GraceDone;
              setLineNumber(1665);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call2069 = selfRequest(this, "val", [0]);
              // call case 2: outer request
              var call2070 = selfRequest(this.outer_collectionsPrelude_1661, "stop", [0]);
              var opresult2071 = request(call2069, "<(1)", [1], call2070);
              if (Grace_isTrue(opresult2071)) {
                var string2073 = new GraceString("over ");
                // call case 2: outer request
                var call2074 = selfRequest(this.outer_collectionsPrelude_1661, "asString", [0]);
                var opresult2075 = request(string2073, "++(1)", [1], call2074);
                var string2076 = new GraceString("");
                var opresult2077 = request(opresult2075, "++(1)", [1], string2076);
                // call case 6: other requests
                if (var_IteratorExhausted === undefined) raiseUninitializedVariable("IteratorExhausted");
                var call2072 = request(var_IteratorExhausted, "raise(1)", [1], opresult2077);
                if2068 = call2072;
              }
              setLineNumber(1666);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call2079 = selfRequest(this, "val", [0]);
              var diff2080 = request(call2079, "-(1)", [1], new GraceNum(1));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call2078 = selfRequest(this, "val:=(1)", [1], diff2080);
              setLineNumber(1667);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call2081 = selfRequest(this, "val", [0]);
              var sum2082 = request(call2081, "+(1)", [1], new GraceNum(1));
              return sum2082;
            };    // end of method next
            this.methods["next"] = func2067;
            func2067.methodName = "next";
            func2067.paramCounts = [0];
            func2067.paramNames = [];
            func2067.definitionLine = 1664;
            func2067.definitionModule = "collectionsPrelude";
            var func2083 = function(argcv) {    // method asString, line 1669
              var returnTarget = invocationCount;
              invocationCount++;
              const numArgs = arguments.length - 1;
              if ((numArgs > 0) && (numArgs !== 0)) {
                  raiseTypeArgError("asString", 0, numArgs - 0);
              }
              setLineNumber(1669);    // compilenode string
              var string2084 = new GraceString("an iterator over ");
              // call case 2: outer request
              var call2085 = selfRequest(this.outer_collectionsPrelude_1661, "asString", [0]);
              var opresult2086 = request(string2084, "++(1)", [1], call2085);
              var string2087 = new GraceString(" at ");
              var opresult2088 = request(opresult2086, "++(1)", [1], string2087);
              // call case 4: self request with 0 args and 0 typeArgs 
              var call2089 = selfRequest(this, "val", [0]);
              var opresult2090 = request(opresult2088, "++(1)", [1], call2089);
              var string2091 = new GraceString("");
              var opresult2092 = request(opresult2090, "++(1)", [1], string2091);
              return opresult2092;
            };    // end of method asString
            this.methods["asString"] = func2083;
            func2083.methodName = "asString";
            func2083.paramCounts = [0];
            func2083.paramNames = [];
            func2083.definitionLine = 1669;
            func2083.definitionModule = "collectionsPrelude";
            this.mutable = true;
            const overridenByAliases = { };
            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                const a = aliases[aix];
                const newNm = a.newName;
                const oldNm = a.oldName;
                overridenByAliases[newNm] = this.methods[newNm];
                const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                m.definitionLine = 1661;
                m.definitionModule = "collectionsPrelude";
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
            var obj2060_init = function() {    // init of object on line 1661
              setLineNumber(1662);    // compilenode member
              // call case 2: outer request
              var call2093 = selfRequest(this.outer_collectionsPrelude_1661, "start", [0]);
              this.data.val = call2093;
            };
            return obj2060_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
          };
          var obj2060_init = obj2060_build.call(inheritingObject, null, this, aliases, exclusions);
          return obj2060_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
        };    // end of method iterator$build(_,_,_)
        this.methods["iterator$build(3)"] = func2059;
        func2059.methodName = "iterator$build(3)";
        func2059.paramCounts = [0];
        func2059.paramNames = [];
        func2059.definitionLine = 1660;
        func2059.definitionModule = "collectionsPrelude";
        var func2094 = function(argcv, var_ix) {    // method at(_), line 1672
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("at(_)", 0, numArgs - 1);
          }
          var if2095 = GraceDone;
          setLineNumber(1673);    // compilenode call
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2097 = selfRequest(this, "size", [0]);
          var opresult2098 = request(var_ix, "\u2264(1)", [1], call2097);
          var call2096 = request(opresult2098, "prefix!", [0]);
          if (Grace_isTrue(call2096)) {
            setLineNumber(1674);    // compilenode string
            var string2100 = new GraceString("requested range.at(");
            var opresult2101 = request(string2100, "++(1)", [1], var_ix);
            var string2102 = new GraceString(") but upper bound is ");
            var opresult2103 = request(opresult2101, "++(1)", [1], string2102);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2104 = selfRequest(this, "size", [0]);
            var opresult2105 = request(opresult2103, "++(1)", [1], call2104);
            var string2106 = new GraceString("");
            var opresult2107 = request(opresult2105, "++(1)", [1], string2106);
            // call case 6: other requests
            if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
            var call2099 = request(var_BoundsError, "raise(1)", [1], opresult2107);
            if2095 = call2099;
          }
          var if2108 = GraceDone;
          setLineNumber(1676);    // compilenode call
          // call case 6: other requests
          var opresult2110 = request(var_ix, "\u2265(1)", [1], new GraceNum(1));
          var call2109 = request(opresult2110, "prefix!", [0]);
          if (Grace_isTrue(call2109)) {
            setLineNumber(1677);    // compilenode string
            var string2112 = new GraceString("requested range.at(");
            var opresult2113 = request(string2112, "++(1)", [1], var_ix);
            var string2114 = new GraceString(") but lower bound is 1");
            var opresult2115 = request(opresult2113, "++(1)", [1], string2114);
            // call case 6: other requests
            if (var_BoundsError === undefined) raiseUninitializedVariable("BoundsError");
            var call2111 = request(var_BoundsError, "raise(1)", [1], opresult2115);
            if2108 = call2111;
          }
          setLineNumber(1679);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2116 = selfRequest(this, "start", [0]);
          var diff2117 = request(var_ix, "-(1)", [1], new GraceNum(1));
          var diff2118 = request(call2116, "-(1)", [1], diff2117);
          return diff2118;
        };    // end of method at(_)
        func2094.paramTypes = [];
        func2094.paramTypes.push([type_Number, "ix"]);
        this.methods["at(1)"] = func2094;
        func2094.methodName = "at(1)";
        func2094.paramCounts = [1];
        func2094.paramNames = ["ix"];
        func2094.definitionLine = 1672;
        func2094.definitionModule = "collectionsPrelude";
        var func2119 = function(argcv, var_ix, var_action) {    // method at(_)ifAbsent(_), line 1681
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("at(_)ifAbsent(_)", 0, numArgs - 2);
          }
          var if2120 = GraceDone;
          setLineNumber(1682);    // compilenode num
          var opresult2121 = request(var_ix, "\u2265(1)", [1], new GraceNum(1));
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2122 = selfRequest(this, "size", [0]);
          var opresult2123 = request(var_ix, "\u2264(1)", [1], call2122);
          var opresult2124 = request(opresult2121, "&&(1)", [1], opresult2123);
          if (Grace_isTrue(opresult2124)) {
            setLineNumber(1683);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2125 = selfRequest(this, "start", [0]);
            var diff2126 = request(var_ix, "-(1)", [1], new GraceNum(1));
            var diff2127 = request(call2125, "-(1)", [1], diff2126);
            if2120 = diff2127;
          } else {
            setLineNumber(1685);    // compilenode member
            // call case 6: other requests
            var call2128 = request(var_action, "apply", [0]);
            if2120 = call2128;
          }
          return if2120;
        };    // end of method at(_)ifAbsent(_)
        func2119.paramTypes = [];
        func2119.paramTypes.push([type_Number, "ix"]);
        func2119.paramTypes.push([]);
        this.methods["at(1)ifAbsent(1)"] = func2119;
        func2119.methodName = "at(1)ifAbsent(1)";
        func2119.paramCounts = [1, 1];
        func2119.paramNames = ["ix", "action"];
        func2119.definitionLine = 1681;
        func2119.definitionModule = "collectionsPrelude";
        var func2129 = function(argcv, var_elem) {    // method contains(_), line 1688
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("contains(_)", 0, numArgs - 1);
          }
          setLineNumber(1689);    // compilenode block
          var block2131 = new GraceBlock(this, 1689, 0);
          block2131.guard = jsTrue;
          block2131.real = function block2131() {
            setLineNumber(1690);    // compilenode member
            // call case 6: other requests
            var call2132 = request(var_elem, "truncated", [0]);
            var var_intElem = call2132;
            var if2133 = GraceDone;
            setLineNumber(1691);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            var opresult2134 = request(var_intElem, "\u2260(1)", [1], var_elem);
            if (Grace_isTrue(opresult2134)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if2135 = GraceDone;
            setLineNumber(1692);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2136 = selfRequest(this, "start", [0]);
            var opresult2137 = request(var_intElem, ">(1)", [1], call2136);
            if (Grace_isTrue(opresult2137)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if2138 = GraceDone;
            setLineNumber(1693);    // compilenode op
            if (var_intElem === undefined) raiseUninitializedVariable("intElem");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2139 = selfRequest(this, "stop", [0]);
            var opresult2140 = request(var_intElem, "<(1)", [1], call2139);
            if (Grace_isTrue(opresult2140)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            return if2138;
          };
          let applyMeth2131 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2131.methodName = "apply";
          applyMeth2131.paramCounts = [0];
          applyMeth2131.paramNames = [];
          applyMeth2131.definitionLine = 1689;
          applyMeth2131.definitionModule = "collectionsPrelude";
          block2131.methods["apply"] = applyMeth2131;
          var cases2130 = [];
          setLineNumber(1694);    // compilenode block
          var block2141 = new GraceBlock(this, 1694, 1);
          // call case 2: outer request
          var call2142 = selfRequest(var_prelude, "Exception", [0]);
          block2141.paramTypes = [call2142];
          var matches2143 = function(var_ex) {
            // call case 2: outer request
            var call2144 = selfRequest(var_prelude, "Exception", [0]);
            if (!Grace_isTrue(request(call2144, "matches(1)", [1], var_ex)))
                return false;
            return true;
          };
          block2141.guard = matches2143;
          block2141.real = function block2141(var_ex) {
            setLineNumber(1694);    // compilenode return
            throw new ReturnException(GraceFalse, returnTarget);
          };
          let applyMeth2141 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth2141.methodName = "apply(1)";
          applyMeth2141.paramCounts = [1];
          applyMeth2141.paramNames = ["ex"];
          applyMeth2141.definitionLine = 1694;
          applyMeth2141.definitionModule = "collectionsPrelude";
          block2141.methods["apply(1)"] = applyMeth2141;
          let matchesMeth2141 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth2141.methodName = "matches(1)";
          matchesMeth2141.paramCounts = [1];
          matchesMeth2141.paramNames = ["ex"];
          matchesMeth2141.definitionLine = 1694;
          matchesMeth2141.definitionModule = "collectionsPrelude";
          block2141.methods["matches(1)"] = matchesMeth2141;
          cases2130.push(block2141);
          setLineNumber(1689);    // compiletrycatch
          var catchres2130 = tryCatch(block2131,cases2130,false);
          setLineNumber(1695);    // compilenode return
          return GraceTrue;
        };    // end of method contains(_)
        this.methods["contains(1)"] = func2129;
        func2129.methodName = "contains(1)";
        func2129.paramCounts = [1];
        func2129.paramNames = ["elem"];
        func2129.definitionLine = 1688;
        func2129.definitionModule = "collectionsPrelude";
        var func2145 = function(argcv, var_block1) {    // method do(_), line 1697
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("do(_)", 0, numArgs - 1);
          }
          setLineNumber(1698);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2146 = selfRequest(this, "start", [0]);
          var var_val = call2146;
          setLineNumber(1699);    // compilenode block
          var block2148 = new GraceBlock(this, 1699, 0);
          block2148.guard = jsTrue;
          block2148.real = function block2148() {
            setLineNumber(1699);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2149 = selfRequest(this, "stop", [0]);
            var opresult2150 = request(var_val, "\u2265(1)", [1], call2149);
            return opresult2150;
          };
          let applyMeth2148 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2148.methodName = "apply";
          applyMeth2148.paramCounts = [0];
          applyMeth2148.paramNames = [];
          applyMeth2148.definitionLine = 1699;
          applyMeth2148.definitionModule = "collectionsPrelude";
          block2148.methods["apply"] = applyMeth2148;
          var block2151 = new GraceBlock(this, 1699, 0);
          block2151.guard = jsTrue;
          block2151.real = function block2151() {
            setLineNumber(1700);    // compilenode call
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 6: other requests
            var call2152 = request(var_block1, "apply(1)", [1], var_val);
            setLineNumber(1701);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            var diff2153 = request(var_val, "-(1)", [1], new GraceNum(1));
            var_val = diff2153;
            return GraceDone;
          };
          let applyMeth2151 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2151.methodName = "apply";
          applyMeth2151.paramCounts = [0];
          applyMeth2151.paramNames = [];
          applyMeth2151.definitionLine = 1699;
          applyMeth2151.definitionModule = "collectionsPrelude";
          block2151.methods["apply"] = applyMeth2151;
          // call case 2: outer request
          var call2147 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block2148, block2151);
          return call2147;
        };    // end of method do(_)
        this.methods["do(1)"] = func2145;
        func2145.methodName = "do(1)";
        func2145.paramCounts = [1];
        func2145.paramNames = ["block1"];
        func2145.definitionLine = 1697;
        func2145.definitionModule = "collectionsPrelude";
        var func2154 = function(argcv, var_block2) {    // method keysAndValuesDo(_), line 1704
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("keysAndValuesDo(_)", 0, numArgs - 1);
          }
          setLineNumber(1705);    // compilenode num
          var var_key = new GraceNum(1);
          setLineNumber(1706);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2155 = selfRequest(this, "start", [0]);
          var var_val = call2155;
          setLineNumber(1707);    // compilenode block
          var block2157 = new GraceBlock(this, 1707, 0);
          block2157.guard = jsTrue;
          block2157.real = function block2157() {
            setLineNumber(1707);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call2158 = selfRequest(this, "stop", [0]);
            var opresult2159 = request(var_val, "\u2265(1)", [1], call2158);
            return opresult2159;
          };
          let applyMeth2157 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2157.methodName = "apply";
          applyMeth2157.paramCounts = [0];
          applyMeth2157.paramNames = [];
          applyMeth2157.definitionLine = 1707;
          applyMeth2157.definitionModule = "collectionsPrelude";
          block2157.methods["apply"] = applyMeth2157;
          var block2160 = new GraceBlock(this, 1707, 0);
          block2160.guard = jsTrue;
          block2160.real = function block2160() {
            setLineNumber(1708);    // compilenode call
            if (var_key === undefined) raiseUninitializedVariable("key");
            if (var_val === undefined) raiseUninitializedVariable("val");
            // call case 6: other requests
            var call2161 = request(var_block2, "apply(2)", [2], var_key, var_val);
            setLineNumber(1709);    // compilenode op
            if (var_key === undefined) raiseUninitializedVariable("key");
            var sum2162 = request(var_key, "+(1)", [1], new GraceNum(1));
            var_key = sum2162;
            setLineNumber(1710);    // compilenode op
            if (var_val === undefined) raiseUninitializedVariable("val");
            var diff2163 = request(var_val, "-(1)", [1], new GraceNum(1));
            var_val = diff2163;
            return GraceDone;
          };
          let applyMeth2160 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2160.methodName = "apply";
          applyMeth2160.paramCounts = [0];
          applyMeth2160.paramNames = [];
          applyMeth2160.definitionLine = 1707;
          applyMeth2160.definitionModule = "collectionsPrelude";
          block2160.methods["apply"] = applyMeth2160;
          // call case 2: outer request
          var call2156 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block2157, block2160);
          return call2156;
        };    // end of method keysAndValuesDo(_)
        this.methods["keysAndValuesDo(1)"] = func2154;
        func2154.methodName = "keysAndValuesDo(1)";
        func2154.paramCounts = [1];
        func2154.paramNames = ["block2"];
        func2154.definitionLine = 1704;
        func2154.definitionModule = "collectionsPrelude";
        var func2164 = function(argcv) {    // method reversed, line 1713
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("reversed", 0, numArgs - 0);
          }
          setLineNumber(1714);    // compilenode call
          // call case 2: outer request
          var call2165 = selfRequest(this.outer_collectionsPrelude_1635, "from(1)to(1)", [1, 1], var_lower, var_upper);
          return call2165;
        };    // end of method reversed
        this.methods["reversed"] = func2164;
        func2164.methodName = "reversed";
        func2164.paramCounts = [0];
        func2164.paramNames = [];
        func2164.definitionLine = 1713;
        func2164.definitionModule = "collectionsPrelude";
        var func2166 = function(argcv, var_other) {    // method ++(_), line 1716
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("++(_)", 0, numArgs - 1);
          }
          setLineNumber(1717);    // compilenode call
          // call case 2: outer request
          var call2168 = selfRequest(importedModules["collectionsPrelude"], "lazyConcatenation(2)", [2], this, var_other);
          // call case 6: other requests
          // call case 2: outer request
          var call2169 = selfRequest(importedModules["collectionsPrelude"], "sequence", [0]);
          var call2167 = request(call2169, "withAll(1)", [1], call2168);
          return call2167;
        };    // end of method ++(_)
        this.methods["++(1)"] = func2166;
        func2166.methodName = "++(1)";
        func2166.paramCounts = [1];
        func2166.paramNames = ["other"];
        func2166.definitionLine = 1716;
        func2166.definitionModule = "collectionsPrelude";
        var func2170 = function(argcv, var_other) {    // method ==(_), line 1719
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("==(_)", 0, numArgs - 1);
          }
          setLineNumber(1720);    // compilenode call
          // call case 2: outer request
          var call2171 = selfRequest(importedModules["collectionsPrelude"], "isEqual(1)toCollection(1)", [1, 1], this, var_other);
          return call2171;
        };    // end of method ==(_)
        this.methods["==(1)"] = func2170;
        func2170.methodName = "==(1)";
        func2170.paramCounts = [1];
        func2170.paramNames = ["other"];
        func2170.definitionLine = 1719;
        func2170.definitionModule = "collectionsPrelude";
        var func2172 = function(argcv) {    // method hash, line 1722
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("hash", 0, numArgs - 0);
          }
          setLineNumber(1724);    // compilenode num
          var var_result = new GraceNum(98626254);
          setLineNumber(1725);    // compilenode block
          var block2174 = new GraceBlock(this, 1725, 1);
          block2174.guard = jsTrue;
          block2174.real = function block2174(var_each) {
            setLineNumber(1726);    // compilenode call
            if (var_result === undefined) raiseUninitializedVariable("result");
            // call case 2: outer request
            var call2175 = selfRequest(importedModules["collectionsPrelude"], "hashAndCombine(2)", [2], var_result, var_each);
            var_result = call2175;
            return GraceDone;
          };
          let applyMeth2174 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth2174.methodName = "apply(1)";
          applyMeth2174.paramCounts = [1];
          applyMeth2174.paramNames = ["each"];
          applyMeth2174.definitionLine = 1725;
          applyMeth2174.definitionModule = "collectionsPrelude";
          block2174.methods["apply(1)"] = applyMeth2174;
          let matchesMeth2174 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth2174.methodName = "matches(1)";
          matchesMeth2174.paramCounts = [1];
          matchesMeth2174.paramNames = ["each"];
          matchesMeth2174.definitionLine = 1725;
          matchesMeth2174.definitionModule = "collectionsPrelude";
          block2174.methods["matches(1)"] = matchesMeth2174;
          // call case 4: self request with 1 args and 0 typeArgs 
          var call2173 = selfRequest(this, "do(1)", [1], block2174);
          return var_result;
        };    // end of method hash
        this.methods["hash"] = func2172;
        func2172.methodName = "hash";
        func2172.paramCounts = [0];
        func2172.paramNames = [];
        func2172.definitionLine = 1722;
        func2172.definitionModule = "collectionsPrelude";
        var func2176 = function(argcv, var_obj) {    // method ::(_), line 1730
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("::(_)", 0, numArgs - 1);
          }
          setLineNumber(1730);    // compilenode call
          // call case 6: other requests
          // call case 2: outer request
          var call2178 = selfRequest(importedModules["collectionsPrelude"], "binding", [0]);
          var call2177 = request(call2178, "key(1)value(1)", [1, 1], this, var_obj);
          return call2177;
        };    // end of method ::(_)
        this.methods["::(1)"] = func2176;
        func2176.methodName = "::(1)";
        func2176.paramCounts = [1];
        func2176.paramNames = ["obj"];
        func2176.definitionLine = 1730;
        func2176.definitionModule = "collectionsPrelude";
        var func2179 = function(argcv, var_other) {    // method ≠(_), line 1731
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("≠(_)", 0, numArgs - 1);
          }
          setLineNumber(1731);    // compilenode member
          // call case 6: other requests
          var opresult2181 = request(this, "==(1)", [1], var_other);
          var call2180 = request(opresult2181, "not", [0]);
          return call2180;
        };    // end of method ≠(_)
        this.methods["\u2260(1)"] = func2179;
        func2179.methodName = "\u2260(1)";
        func2179.paramCounts = [1];
        func2179.paramNames = ["other"];
        func2179.definitionLine = 1731;
        func2179.definitionModule = "collectionsPrelude";
        var func2182 = function(argcv) {    // method sorted, line 1732
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("sorted", 0, numArgs - 0);
          }
          setLineNumber(1732);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2183 = selfRequest(this, "reversed", [0]);
          return call2183;
        };    // end of method sorted
        this.methods["sorted"] = func2182;
        func2182.methodName = "sorted";
        func2182.paramCounts = [0];
        func2182.paramNames = [];
        func2182.definitionLine = 1732;
        func2182.definitionModule = "collectionsPrelude";
        var func2184 = function(argcv, var_c) {    // method sortedBy(_), line 1734
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("sortedBy(_)", 0, numArgs - 1);
          }
          setLineNumber(1734);    // compilenode call
          // call case 6: other requests
          // call case 6: other requests
          // call case 2: outer request
          var call2187 = selfRequest(importedModules["collectionsPrelude"], "list", [0]);
          var call2186 = request(call2187, "withAll(1)", [1], this);
          var call2185 = request(call2186, "sortBy(1)", [1], var_c);
          return call2185;
        };    // end of method sortedBy(_)
        this.methods["sortedBy(1)"] = func2184;
        func2184.methodName = "sortedBy(1)";
        func2184.paramCounts = [1];
        func2184.paramNames = ["c"];
        func2184.definitionLine = 1734;
        func2184.definitionModule = "collectionsPrelude";
        var func2188 = function(argcv) {    // method keys, line 1736
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("keys", 0, numArgs - 0);
          }
          setLineNumber(1736);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2189 = selfRequest(this, "size", [0]);
          var opresult2190 = request(new GraceNum(1), "..(1)", [1], call2189);
          return opresult2190;
        };    // end of method keys
        this.methods["keys"] = func2188;
        func2188.methodName = "keys";
        func2188.paramCounts = [0];
        func2188.paramNames = [];
        func2188.definitionLine = 1736;
        func2188.definitionModule = "collectionsPrelude";
        var func2191 = function(argcv) {     // accessor method values
          const numArgs = arguments.length - 1;
          if (numArgs > 0) raiseTypeArgError("values", 0, numArgs - 0);
          return this;
        };    // end of method values
        this.methods["values"] = func2191;
        func2191.methodName = "values";
        func2191.paramCounts = [0];
        func2191.paramNames = [];
        func2191.definitionLine = 1738;
        func2191.definitionModule = "collectionsPrelude";
        var func2192 = function(argcv) {    // method asString, line 1740
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("asString", 0, numArgs - 0);
          }
          setLineNumber(1741);    // compilenode string
          var string2193 = new GraceString("range.from ");
          var opresult2194 = request(string2193, "++(1)", [1], var_upper);
          var string2195 = new GraceString(" downTo ");
          var opresult2196 = request(opresult2194, "++(1)", [1], string2195);
          var opresult2197 = request(opresult2196, "++(1)", [1], var_lower);
          var string2198 = new GraceString("");
          var opresult2199 = request(opresult2197, "++(1)", [1], string2198);
          return opresult2199;
        };    // end of method asString
        this.methods["asString"] = func2192;
        func2192.methodName = "asString";
        func2192.paramCounts = [0];
        func2192.paramNames = [];
        func2192.definitionLine = 1740;
        func2192.definitionModule = "collectionsPrelude";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 1635;
            m.definitionModule = "collectionsPrelude";
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
        var obj2053_init = function() {    // init of object on line 1635
          setLineNumber(1637);    // compilenode matchcase
          var cases2200 = [];
          setLineNumber(1638);    // compilenode block
          var block2201 = new GraceBlock(this, 1638, 1);
          block2201.paramTypes = [var_Number];
          var matches2202 = function(var___95____95__5) {
            if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var___95____95__5)))
                return false;
            return true;
          };
          block2201.guard = matches2202;
          block2201.real = function block2201(var___95____95__5) {
            setLineNumber(1638);    // compileBlock
            return GraceDone;
          };
          let applyMeth2201 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth2201.methodName = "apply(1)";
          applyMeth2201.paramCounts = [1];
          applyMeth2201.paramNames = ["__5"];
          applyMeth2201.definitionLine = 1638;
          applyMeth2201.definitionModule = "collectionsPrelude";
          block2201.methods["apply(1)"] = applyMeth2201;
          let matchesMeth2201 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth2201.methodName = "matches(1)";
          matchesMeth2201.paramCounts = [1];
          matchesMeth2201.paramNames = ["__5"];
          matchesMeth2201.definitionLine = 1638;
          matchesMeth2201.definitionModule = "collectionsPrelude";
          block2201.methods["matches(1)"] = matchesMeth2201;
          cases2200.push(block2201);
          setLineNumber(1639);    // compilenode block
          var block2203 = new GraceBlock(this, 1639, 0);
          block2203.guard = jsTrue;
          block2203.real = function block2203() {
            setLineNumber(1640);    // compilenode string
            var string2205 = new GraceString("upper bound ");
            var opresult2206 = request(string2205, "++(1)", [1], var_upper);
            var string2207 = new GraceString("");
            var opresult2208 = request(opresult2206, "++(1)", [1], string2207);
            setLineNumber(1641);    // compilenode string
            var string2209 = new GraceString(" in range.from(");
            var opresult2210 = request(string2209, "++(1)", [1], var_upper);
            var string2211 = new GraceString(")downTo(");
            var opresult2212 = request(opresult2210, "++(1)", [1], string2211);
            var opresult2213 = request(opresult2212, "++(1)", [1], var_lower);
            var string2214 = new GraceString(") is not an integer");
            var opresult2215 = request(opresult2213, "++(1)", [1], string2214);
            var opresult2216 = request(opresult2208, "++(1)", [1], opresult2215);
            // call case 6: other requests
            if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
            var call2204 = request(var_RequestError, "raise(1)", [1], opresult2216);
            return call2204;
          };
          let applyMeth2203 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2203.methodName = "apply";
          applyMeth2203.paramCounts = [0];
          applyMeth2203.paramNames = [];
          applyMeth2203.definitionLine = 1639;
          applyMeth2203.definitionModule = "collectionsPrelude";
          block2203.methods["apply"] = applyMeth2203;
          setLineNumber(1637);    // compilematchcase
          var matchres2200 = matchCase(var_upper,cases2200,block2203);
          setLineNumber(1642);    // compilenode member
          // call case 6: other requests
          var call2217 = request(var_upper, "truncated", [0]);
          this.data.start = call2217;
          var if2218 = GraceDone;
          setLineNumber(1643);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2219 = selfRequest(this, "start", [0]);
          var opresult2220 = request(call2219, "\u2260(1)", [1], var_upper);
          if (Grace_isTrue(opresult2220)) {
            setLineNumber(1644);    // compilenode string
            var string2222 = new GraceString("upper bound ");
            var opresult2223 = request(string2222, "++(1)", [1], var_upper);
            var string2224 = new GraceString("");
            var opresult2225 = request(opresult2223, "++(1)", [1], string2224);
            setLineNumber(1645);    // compilenode string
            var string2226 = new GraceString(" in range.from(");
            var opresult2227 = request(string2226, "++(1)", [1], var_upper);
            var string2228 = new GraceString(")downTo(");
            var opresult2229 = request(opresult2227, "++(1)", [1], string2228);
            var opresult2230 = request(opresult2229, "++(1)", [1], var_lower);
            var string2231 = new GraceString(") is not an integer");
            var opresult2232 = request(opresult2230, "++(1)", [1], string2231);
            var opresult2233 = request(opresult2225, "++(1)", [1], opresult2232);
            // call case 6: other requests
            if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
            var call2221 = request(var_RequestError, "raise(1)", [1], opresult2233);
            if2218 = call2221;
          }
          setLineNumber(1647);    // compilenode matchcase
          var cases2234 = [];
          setLineNumber(1648);    // compilenode block
          var block2235 = new GraceBlock(this, 1648, 1);
          block2235.paramTypes = [var_Number];
          var matches2236 = function(var___95____95__6) {
            if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var___95____95__6)))
                return false;
            return true;
          };
          block2235.guard = matches2236;
          block2235.real = function block2235(var___95____95__6) {
            setLineNumber(1648);    // compileBlock
            return GraceDone;
          };
          let applyMeth2235 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth2235.methodName = "apply(1)";
          applyMeth2235.paramCounts = [1];
          applyMeth2235.paramNames = ["__6"];
          applyMeth2235.definitionLine = 1648;
          applyMeth2235.definitionModule = "collectionsPrelude";
          block2235.methods["apply(1)"] = applyMeth2235;
          let matchesMeth2235 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth2235.methodName = "matches(1)";
          matchesMeth2235.paramCounts = [1];
          matchesMeth2235.paramNames = ["__6"];
          matchesMeth2235.definitionLine = 1648;
          matchesMeth2235.definitionModule = "collectionsPrelude";
          block2235.methods["matches(1)"] = matchesMeth2235;
          cases2234.push(block2235);
          setLineNumber(1649);    // compilenode block
          var block2237 = new GraceBlock(this, 1649, 0);
          block2237.guard = jsTrue;
          block2237.real = function block2237() {
            setLineNumber(1650);    // compilenode string
            var string2239 = new GraceString("lower bound ");
            var opresult2240 = request(string2239, "++(1)", [1], var_lower);
            var string2241 = new GraceString("");
            var opresult2242 = request(opresult2240, "++(1)", [1], string2241);
            setLineNumber(1651);    // compilenode string
            var string2243 = new GraceString(" in range.from(");
            var opresult2244 = request(string2243, "++(1)", [1], var_upper);
            var string2245 = new GraceString(")downTo(");
            var opresult2246 = request(opresult2244, "++(1)", [1], string2245);
            var opresult2247 = request(opresult2246, "++(1)", [1], var_lower);
            var string2248 = new GraceString(") is not an integer");
            var opresult2249 = request(opresult2247, "++(1)", [1], string2248);
            var opresult2250 = request(opresult2242, "++(1)", [1], opresult2249);
            // call case 6: other requests
            if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
            var call2238 = request(var_RequestError, "raise(1)", [1], opresult2250);
            return call2238;
          };
          let applyMeth2237 = function apply (argcv) {
              return this.real.apply(this.receiver);
          };
          applyMeth2237.methodName = "apply";
          applyMeth2237.paramCounts = [0];
          applyMeth2237.paramNames = [];
          applyMeth2237.definitionLine = 1649;
          applyMeth2237.definitionModule = "collectionsPrelude";
          block2237.methods["apply"] = applyMeth2237;
          setLineNumber(1647);    // compilematchcase
          var matchres2234 = matchCase(var_lower,cases2234,block2237);
          setLineNumber(1653);    // compilenode member
          // call case 6: other requests
          var call2251 = request(var_lower, "truncated", [0]);
          this.data.stop = call2251;
          var if2252 = GraceDone;
          setLineNumber(1654);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call2253 = selfRequest(this, "stop", [0]);
          var opresult2254 = request(call2253, "\u2260(1)", [1], var_lower);
          if (Grace_isTrue(opresult2254)) {
            setLineNumber(1655);    // compilenode string
            var string2256 = new GraceString("lower bound ");
            var opresult2257 = request(string2256, "++(1)", [1], var_lower);
            var string2258 = new GraceString("");
            var opresult2259 = request(opresult2257, "++(1)", [1], string2258);
            setLineNumber(1656);    // compilenode string
            var string2260 = new GraceString(" in range.from(");
            var opresult2261 = request(string2260, "++(1)", [1], var_upper);
            var string2262 = new GraceString(")downTo(");
            var opresult2263 = request(opresult2261, "++(1)", [1], string2262);
            var opresult2264 = request(opresult2263, "++(1)", [1], var_lower);
            var string2265 = new GraceString(") is not an integer");
            var opresult2266 = request(opresult2264, "++(1)", [1], string2265);
            var opresult2267 = request(opresult2259, "++(1)", [1], opresult2266);
            // call case 6: other requests
            if (var_RequestError === undefined) raiseUninitializedVariable("RequestError");
            var call2255 = request(var_RequestError, "raise(1)", [1], opresult2267);
            if2252 = call2255;
          }
          var if2268 = GraceDone;
          setLineNumber(1659);    // compilenode op
          var diff2269 = request(var_upper, "-(1)", [1], var_lower);
          var sum2270 = request(diff2269, "+(1)", [1], new GraceNum(1));
          var opresult2271 = request(sum2270, "<(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult2271)) {
            if2268 = new GraceNum(0);
          } else {
            var diff2272 = request(var_upper, "-(1)", [1], var_lower);
            var sum2273 = request(diff2272, "+(1)", [1], new GraceNum(1));
            if2268 = sum2273;
          }
          this.data.size = if2268;
        };
        return obj2053_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj2053_init = obj2053_build.call(inheritingObject, null, var_upper, var_lower, this, aliases, exclusions);
      return obj2053_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method from(_)downTo(_)$build(_,_,_)
    this.methods["from(1)downTo(1)$build(3)"] = func2052;
    func2052.methodName = "from(1)downTo(1)$build(3)";
    func2052.paramCounts = [1, 1];
    func2052.paramNames = ["upper", "lower"];
    func2052.definitionLine = 1634;
    func2052.definitionModule = "collectionsPrelude";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 1508;
        m.definitionModule = "collectionsPrelude";
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
    var obj1832_init = function() {    // init of object on line 1508
    };
    return obj1832_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj1832 = emptyGraceObject("range", "collectionsPrelude", 1508);
  var obj1832_init = obj1832_build.call(obj1832, null, this, [], []);
  obj1832_init.call(obj1832);  // end of compileobject
  var var_range = obj1832;
  var reader2274_range = function() {  // reader method range
      if (var_range === undefined) raiseUninitializedVariable("range");
      return var_range;
  };
  reader2274_range.isDef = true;
  this.methods["range"] = reader2274_range;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_collectionsPrelude = gracecode_collectionsPrelude;
if (typeof window !== "undefined")
  window.gracecode_collectionsPrelude = gracecode_collectionsPrelude;
gracecode_collectionsPrelude.imports = [];
gracecode_collectionsPrelude.definitionModule = "collectionsPrelude";
gracecode_collectionsPrelude.definitionLine = 1;
