var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["errormessages"] = "classes:\nconfidential:\n min3(3)\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n fastDict\n io\n standardGrace\n sys\n unixFilePath\n util\npath:\n /Users/black/Development/mg/gracelang/minigrace/errormessages.grace\npublic:\n CompilationError\n ReuseError\n SyntaxError\n error(1)\n error(1)atLine(1)\n error(1)atLine(1)withSuggestions(1)\n error(1)atPosition(2)\n error(1)atPosition(2)withSuggestions(1)\n error(1)atRange(1)\n error(1)atRange(3)\n error(1)atRange(3)withSuggestions(1)\n error(1)atRange(4)withSuggestions(1)\n name(1)matches(1)within(1)\n name(1)mightBeIntendedToBe(1)\n readableStringFrom(1)\n suggestion\n syntaxError(1)atLine(1)\n syntaxError(1)atLine(1)withSuggestion(1)\n syntaxError(1)atLine(1)withSuggestions(1)\n syntaxError(1)atPosition(2)\n syntaxError(1)atPosition(2)withSuggestion(1)\n syntaxError(1)atPosition(2)withSuggestions(1)\n syntaxError(1)atRange(1)\n syntaxError(1)atRange(1)withSuggestion(1)\n syntaxError(1)atRange(1)withSuggestions(1)\n syntaxError(1)atRange(3)\n syntaxError(1)atRange(3)withSuggestion(1)\n syntaxError(1)atRange(3)withSuggestions(1)\n syntaxError(1)atRange(4)\n syntaxError(1)atRange(4)withSuggestions(1)\n syntaxError(5)\npublicMethodTypes:\n CompilationError \u2192 Unknown\n ReuseError \u2192 Unknown\n SyntaxError \u2192 Unknown\n error(message)\n error(message)atLine(errLinenum)\n error(message)atLine(errLinenum)withSuggestions(suggestions)\n error(message)atPosition(errLinenum, errPosition)withSuggestions(suggestions)\n error(message)atPosition(errLinenum, errpos)\n error(message)atRange(errLinenum, startpos, endpos)\n error(message)atRange(errLinenum, startpos, endpos)withSuggestions(suggestions)\n error(message)atRange(r)\n error(message)atRange(startline, startpos, endline, endpos)withSuggestions(suggestions)\n name(p:String)matches(t:String)within(k:Number)\n name(p:String)mightBeIntendedToBe(target:String)\n readableStringFrom(xs:Collection)\n suggestion \u2192 Unknown\n syntaxError(message)atLine(errLinenum)\n syntaxError(message)atLine(errLinenum)withSuggestion(suggestion')\n syntaxError(message)atLine(errLinenum)withSuggestions(suggestions)\n syntaxError(message)atPosition(errLinenum, errpos)\n syntaxError(message)atPosition(errLinenum, errpos)withSuggestion(suggestion')\n syntaxError(message)atPosition(errLinenum, errpos)withSuggestions(suggestions)\n syntaxError(message)atRange(errLinenum, startpos, endpos)\n syntaxError(message)atRange(errLinenum, startpos, endpos)withSuggestion(suggestion')\n syntaxError(message)atRange(errLinenum, startpos, endpos)withSuggestions(suggestions)\n syntaxError(message)atRange(r)\n syntaxError(message)atRange(r)withSuggestion(s)\n syntaxError(message)atRange(r)withSuggestions(s)\n syntaxError(message)atRange(sl, sp, el, ep)\n syntaxError(message)atRange(startline, startpos, endline, endpos)withSuggestions(suggestions)\n syntaxError(message, errLinenum, errPosition, arr, suggestions)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["errormessages"] = [
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "",
    "def suggestion is public = object {",
    "    // Contains modified lines used as suggestions for error messages.",
    "    // When a line is added using one of the utility methods such as",
    "    // insert()afterToken()onLine(), the line is copied from util.lines to the",
    "    // lines array in the suggestion. When a line that is already in",
    "    // the array is modified, the lines array is updated.",
    "    // There is no sorting of the order of the lines at any point, so",
    "    // lines must be added in ascending order.",
    "",
    "  class new {",
    "    use equality",
    "",
    "    def lineNumbers is public = list.empty     // two parallel arrays,",
    "    def lines is public = list.empty           // simulating a dictionary",
    "",
    "    method ==(other) {",
    "        if (lineNumbers == other.lineNumbers) then {",
    "            if (lines == other.lines) then { return true }",
    "        }",
    "        return false",
    "    }",
    "",
    "    method hash { lines.hash }",
    "",
    "    // Methods that deal with inserting/replacing/deleting character positions",
    "    // and ranges. These methods are usually called by lexing error messages",
    "    // due to lack of access to tokens, and by insert/replace/delete methods",
    "    // that operate on tokens.",
    "",
    "    method replaceRange(start, end)with(s)onLine(lineNumber) {",
    "        def line = getLine(lineNumber)",
    "        def size = line.size",
    "        if (size == 0) then {",
    "            addLine(lineNumber, s)",
    "        } else {",
    "            def newStart = min(start, size)",
    "            def newEnd = min(end, size)",
    "            addLine(lineNumber, line.substringFrom 1 to (newStart - 1)",
    "                    ++ s ++ line.substringFrom (newEnd + 1))",
    "        }",
    "    }",
    "",
    "    method replaceChar(pos)with(s)onLine(lineNumber) {",
    "        replaceRange(pos, pos)with(s)onLine(lineNumber)",
    "    }",
    "",
    "    method replaceUntil(until)with(s)onLine(lineNumber) {",
    "        def line = getLine(lineNumber)",
    "        def len = until.size",
    "        for (1..line.size) do {i->",
    "            if (line.substringFrom(i)to(i + len - 1) == until) then {",
    "                replaceRange(1, i + len - 1)with(s)onLine(lineNumber)",
    "                return true",
    "            }",
    "        }",
    "        return false",
    "    }",
    "",
    "    method deleteRange(start, end)onLine(lineNumber) {",
    "        var start' := start",
    "        def line = getLine(lineNumber)",
    "        if ((start > 1) && (end == line.size) && (start ≤ end)) then {",
    "            // Check for removing the whole line, then remove the indent also.",
    "            var indent := true",
    "            for(1..(start'-1)) do { i ->",
    "                if(line.at(i) != \" \") then {",
    "                    indent := false",
    "                }",
    "            }",
    "            if(indent == true) then {",
    "                start' := 1",
    "            }",
    "        }",
    "        replaceRange(start', end)with(\"\")onLine(lineNumber)",
    "    }",
    "",
    "    method deleteChar(pos)onLine(lineNumber) {",
    "        replaceRange(pos, pos)with(\"\")onLine(lineNumber)",
    "    }",
    "",
    "    method append(s)onLine(lineNumber) {",
    "        def line = getLine(lineNumber)",
    "        addLine(lineNumber, line ++ s)",
    "    }",
    "",
    "    method insert(s)atPosition(pos)onLine(lineNumber) {",
    "        def line = getLine(lineNumber)",
    "        if (pos > line.size) then {",
    "            addLine(lineNumber, line ++ s)",
    "        } else {",
    "            addLine(lineNumber, line.substringFrom(1)to(pos - 1) ++ s",
    "                ++ line.substringFrom(pos)to(line.size))",
    "        }",
    "    }",
    "",
    "    // Methods that deal with inserting/replacing/deleteing tokens or ranges of",
    "    // tokens. These methods call the underlying methods that operate on",
    "    // characters.",
    "",
    "    method getTokenStart(token)includeLeadingSpace(includeLeading) {",
    "        var start := token.linePos",
    "        // Include leading whitespace.",
    "        if (true == includeLeading) then {",
    "            if (token.hasPrev && {token.prev.line == token.line}) then {",
    "                start := token.prev.linePos + token.prev.size",
    "            }",
    "        }",
    "        // Include indentation if this is the only token on the line.",
    "        if (token.linePos == (token.indent + 1)) then {",
    "            if (token.hasNext.not || {token.next.line ≠ token.line}) then {",
    "                start := 1",
    "            }",
    "        }",
    "        start",
    "    }",
    "",
    "    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {",
    "        var end := token.linePos + token.size - 1",
    "        // Include trailing space.",
    "        if (true == includeTrailing) then {",
    "            if (token.hasNext && {token.next.line == token.line}) then {",
    "                end := token.next.linePos - 1",
    "            } else {",
    "                end := getLine(token.line).size",
    "            }",
    "        }",
    "        end",
    "    }",
    "",
    "    method replaceToken(token)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
    "        def start = getTokenStart(token)includeLeadingSpace(replaceLeading)",
    "        def end = getTokenEnd(token)includeTrailingSpace(replaceTrailing)",
    "        replaceRange(start, end)with(s)onLine(token.line)",
    "    }",
    "",
    "    method replaceToken(token)with(s) {",
    "        replaceToken(token)leading(false)trailing(false)with(s)",
    "    }",
    "",
    "    method replaceTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
    "        if(start == end) then {",
    "            replaceToken(start)leading(replaceLeading)trailing(replaceTrailing)with(s)",
    "        } else {",
    "            // Get the ident and position now in case deleteTokenRange changes it.",
    "            def insertPos = getTokenStart(start)includeLeadingSpace(replaceLeading)",
    "            def indent = getLine(start.line).substringFrom(1)to(start.indent)",
    "            deleteTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)",
    "            // If delete token range deleted the indent, then add it back.",
    "            if(getLine(start.line) == \"\") then {",
    "                insert(indent ++ s)atPosition(insertPos)onLine(start.line)",
    "            } else {",
    "                insert(s)atPosition(insertPos)onLine(start.line)",
    "            }",
    "        }",
    "    }",
    "",
    "    method replaceTokenRange(start, end)with(s) {",
    "        replaceTokenRange(start, end)leading(false)trailing(false)with(s)",
    "    }",
    "",
    "    // Deletes a token, and optionally leading and/or trailing spaces.",
    "    method deleteToken(token)leading(deleteLeading)trailing(deleteTrailing) {",
    "        def start = getTokenStart(token)includeLeadingSpace(deleteLeading)",
    "        def end = getTokenEnd(token)includeTrailingSpace(deleteTrailing)",
    "        deleteRange(start, end)onLine(token.line)",
    "    }",
    "",
    "    method deleteToken(token) {",
    "        deleteToken(token)leading(false)trailing(false)",
    "    }",
    "",
    "    // Deletes a range of tokens, and optionally leading and/or trailing spaces.",
    "    method deleteTokenRange(start, end)leading(deleteLeading)trailing(deleteTrailing) {",
    "        if(start == end) then {",
    "            deleteToken(start)leading(deleteLeading)trailing(deleteTrailing)",
    "        } else {",
    "            var line := start.line",
    "            var startPos := getTokenStart(start)includeLeadingSpace(deleteLeading)",
    "            var endPos := getTokenEnd(start)includeTrailingSpace(deleteTrailing)",
    "            var tok := start.next",
    "            while {tok != end} do {",
    "                if(tok.line != line) then {",
    "                    deleteRange(startPos, endPos)onLine(line)",
    "                    line := tok.line",
    "                    startPos := getTokenStart(tok)includeLeadingSpace(deleteLeading)",
    "                }",
    "                endPos := getTokenEnd(tok)includeTrailingSpace(deleteTrailing)",
    "                tok := tok.next",
    "            }",
    "            if(end.line != line) then {",
    "                deleteRange(startPos, endPos)onLine(line)",
    "            }",
    "            endPos := getTokenEnd(end)includeTrailingSpace(deleteTrailing)",
    "            deleteRange(startPos, endPos)onLine(end.line)",
    "        }",
    "    }",
    "",
    "    method deleteTokenRange(start, end) {",
    "        deleteTokenRange(start, end)leading(false)trailing(false)",
    "    }",
    "",
    "    method deleteLine(lineNumber) {",
    "        addLine(lineNumber, \"\")",
    "    }",
    "",
    "    method insert(s)afterToken(token)andTrailingSpace(afterTrailing) {",
    "        def pos = getTokenEnd(token)includeTrailingSpace(afterTrailing) + 1",
    "        insert(s)atPosition(pos)onLine(token.line)",
    "    }",
    "",
    "    method insert(s)afterToken(token) {",
    "        insert(s)afterToken(token)andTrailingSpace(false)",
    "    }",
    "",
    "    method insert(s)beforeToken(token) {",
    "        insert(s)atPosition(token.linePos)onLine(token.line)",
    "    }",
    "",
    "    // Insert a new line. This stores the line with the same number as the line it comes after.",
    "    method insertNewLine(line)after(lineNumber) {",
    "        addLine(lineNumber, line)",
    "    }",
    "",
    "    // Manually add a line to the suggestion. This will overwrite any previous",
    "    // changes that may have been made to this line.",
    "    method addLine(lineNumber, line) {",
    "        var i := findLine(lineNumber)",
    "        if(i != false) then {",
    "            lines.at(i)put(line)",
    "        } else {",
    "            // Add new lines to make the list big enough.",
    "            lineNumbers.push(lineNumber)",
    "            lines.push(line)",
    "            if (lines.size > 1) then {",
    "                // Re-order the list.",
    "                i := lines.size",
    "                while {(i > 1) && {lineNumber < lineNumbers.at(i - 1)}} do {",
    "                    lineNumbers.at(i) put(lineNumbers.at(i - 1))",
    "                    lines.at(i) put (lines.at(i - 1))",
    "                    i := i - 1",
    "                }",
    "                lineNumbers.at(i) put (lineNumber)",
    "                lines.at(i) put (line)",
    "            }",
    "        }",
    "    }",
    "",
    "    // Internal method used to find the index of a line in the lines array.",
    "    // Returns false if the line is not found.",
    "    method findLine(lineNumber) is confidential {",
    "        for(lineNumbers.indices) do { i ->",
    "            if(lineNumbers.at(i) == lineNumber) then {",
    "                return i",
    "            }",
    "        }",
    "        false",
    "    }",
    "",
    "    // Internal method used to get the contents of a line so far.",
    "    // If the line is not part of this suggestion then it gets the unmodified line.",
    "    method getLine(lineNumber) is confidential {",
    "        def i = findLine(lineNumber)",
    "        if(i == false) then {",
    "            util.lines.at(lineNumber)",
    "        } else {",
    "            lines.at(i)",
    "        }",
    "    }",
    "",
    "    method print {",
    "        for(1..lines.size) do { i ->",
    "            if ((i > 1) && {(lineNumbers.at(i) > (lineNumbers.at(i-1) + 1))}) then {",
    "                var s := \"\"",
    "                repeat (lineNumbers.at(i-1).asString.size) times {",
    "                    s := s ++ \" \"",
    "                }",
    "                io.error.write(\"    {s}...\\n\")",
    "            }",
    "            // Handle insertion of new lines.",
    "            if(lineNumbers.at(i).truncated != lineNumbers.at(i)) then {",
    "                io.error.write(\" *{lineNumbers.at(i).truncated}: {lines.at(i)}\\n\")",
    "            } else {",
    "                io.error.write(\"  {lineNumbers.at(i)}: {lines.at(i)}\\n\")",
    "            }",
    "        }",
    "    }",
    "  }",
    "}",
    "",
    "method readableStringFrom(xs:Collection) {",
    "    // returns a string describing the contents of xs,",
    "    // separating items with commas and the word \"and\"",
    "    var result := \"\"",
    "    var count := xs.size",
    "    xs.do { v ->",
    "        result := result ++ v.asString",
    "        count := count - 1",
    "        if (count == 1) then {",
    "            if (xs.size > 2) then { result := result ++ \",\" }",
    "            result := result ++ \" and \"",
    "        } elseif { count > 1 } then {",
    "            result := result ++ \", \"",
    "        }",
    "    }",
    "    result",
    "}",
    "",
    "method name (p:String) mightBeIntendedToBe (target:String) {",
    "    // heuristics for finding typos, mis-spellings, etc.",
    "",
    "    if (p == \"module()object\") then { return false }",
    "    if (p.contains \"$\") then { return false }",
    "    if (p.startsWithLetter ≠ target.startsWithLetter) then { return false }",
    "        // either both operators, or both names",
    "    def parenIx = p.indexOf \"(\" ifAbsent { p.size + 1 }",
    "    def pPrefix = p.substringFrom 1 to (parenIx - 1)",
    "    if (target.startsWith(pPrefix)) then { return true }",
    "    if (target.size > (p.size * 2)) then { return false }",
    "    def rng = name (p) matches (target) within 2",
    "    if (rng == 0) then { return false }",
    "    if (rng > (p.size * 2)) then { return false }  // found too far along",
    "    return true",
    "}",
    "",
    "",
    "method name (p:String) matches (t:String) within (k:Number) {",
    "    // This is algorithm EDP from Jokinen, Jorma, Tarhio and Ukkinen:",
    "    // \"A comparison of Approximate String Matching Algorithms\"",
    "    // Software—Practice and Experience Vol 1(1), January 1988, pp.1–19",
    "    //",
    "    // Implements the \"Enhanced Dynamic Programming\" (EDP) algorithm for",
    "    // approximate string matching.  If pattern p matches text t within",
    "    // an edit distance ≤ k, this method returns j, the index of the highest",
    "    // character of t involved in the match.  Its time compelxity is O(k*|p|).",
    "    //",
    "    // The algorithm builds a dynamic progarmming table D such that",
    "    // D[i,j] is the minimum edit distance between p[1] p[2] ... p[i]",
    "    // and any substring of t ending at t[j].   However, it isn't necessary",
    "    // to store the whole table D.  Because D[i,j] depends on only D[i-1, j],",
    "    // D[i-1, j-1] and D[i, j-1], we can store only the current",
    "    // column, which we do in h, and the value of D[i-1,j-1], which is",
    "    // cached in c.  Moreover, since we are not interested in edit",
    "    // distances > k, it's necessary to evaluate only those elements",
    "    // of the table around the diagonal.",
    "",
    "",
    "    def m = p.size",
    "    def n = t.size",
    "    if ((m ≤ k)) then {",
    "        return min(m, n)   // can match first min(m, n) chars of t",
    "    }",
    "    var top := k + 1  // the location where the topmost diagonal under",
    "                      // threshold intersects the current column",
    "    var maxResult := 0",
    "    def h = list.empty",
    "    for (0..m) do { i -> h.at(i+1) put(i) }",
    "    try {",
    "        for (1..n) do { j ->",
    "            var c := 0",
    "            for (1..top) do { i ->",
    "                def e = if (p.at(i) == t.at(j)) then {",
    "                    c",
    "                } else {",
    "                    min3(h.at(i), h.at(i+1), c) + 1",
    "                }",
    "                c := h.at(i+1)",
    "                h.at(i+1) put (e)",
    "            }",
    "            while { h.at(top+1) > k } do { top := top - 1 }",
    "            if (top == m) then {",
    "                maxResult := max(maxResult, j)       //  j is the index of",
    "                    //  the last character of t that was used in the match",
    "            } else {",
    "                top := top + 1",
    "            }",
    "        }",
    "    } catch { e:BoundsError ->",
    "        print \"BoundsError in name({p})matches({t})within({k})\"",
    "        e.printBacktrace",
    "        return 0 }   // if the code is buggy, don't crash",
    "    return maxResult",
    "}",
    "",
    "method min3(a, b, c) is confidential {",
    "    def sf = if (a < b) then { a } else { b }",
    "    if (sf < c) then { sf } else { c }",
    "}",
    "",
    "// Methods to raise a SyntaxError exception, with an accompanying",
    "// data object that contains information and suggestions.",
    "// The exception will normally be caught by a try(_)catch(_) in",
    "// the compiler module, which requests util.generalError to",
    "// actually print the message",
    "",
    "def CompilationError is public = Exception.refine \"CompilationError\"",
    "def SyntaxError is public = CompilationError.refine \"SyntaxError\"",
    "def ReuseError is public = CompilationError.refine \"ReuseError\"",
    "",
    "method syntaxError(message, errLinenum, errPosition, arr, suggestions) {",
    "    // Used by various wrapper methods declared below.",
    "    // The parameters mean:",
    "    //   - message: The text of the error message.",
    "    //   - errLinenum: The line number on which the error occurred.",
    "    //   - position: A string used to show the position of the error in the error message.",
    "    //   - arr: The string used to draw an arrow showing the position of the error.",
    "    //   - suggestions: A (possibly empty) list of suggestions to correct the error.",
    "",
    "    def errorObj = object {",
    "        def lineNum is public = errLinenum",
    "        def position is public = errPosition",
    "        def arrow is public = arr",
    "        def sugg is public = suggestions",
    "    }",
    "    SyntaxError.raise (message) with (errorObj)",
    "}",
    "",
    "method syntaxError (message) atRange (r) {",
    "    def more = if (r.start.line < r.end.line) then {",
    "        \"  This statement spans multiple lines; is that what you intended?\"",
    "    } else {",
    "        \"\"",
    "    }",
    "    syntaxError (message ++ more) atRange (r) withSuggestions []",
    "}",
    "method syntaxError (message) atRange (r) withSuggestion (s) {",
    "    syntaxError (message) atRange (r) withSuggestions [s]",
    "}",
    "method syntaxError (message) atRange (r) withSuggestions (s) {",
    "    syntaxError (message)",
    "          atRange (r.start.line, r.start.column, r.end.line, r.end.column)",
    "          withSuggestions (s)",
    "}",
    "",
    "method syntaxError(message)atRange(errLinenum, startpos, endpos) {",
    "    syntaxError(message)atRange(errLinenum, startpos, endpos)withSuggestions []",
    "}",
    "",
    "method syntaxError (message) atRange (sl, sp, el, ep) {",
    "    syntaxError (message) atRange (sl, sp, el, ep) withSuggestions []",
    "}",
    "",
    "method syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestion(suggestion') {",
    "    syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestions [suggestion']",
    "}",
    "",
    "method syntaxError(message) atRange(errLinenum, startpos, endpos) withSuggestions(suggestions) {",
    "    syntaxError (message)",
    "          atRange (errLinenum, startpos, errLinenum, endpos)",
    "          withSuggestions (suggestions)",
    "}",
    "",
    "method syntaxError (message)",
    "          atRange (startline, startpos, endline, endpos)",
    "          withSuggestions (suggestions) {",
    "",
    "    // this variant allows for range to start and end on different lines.",
    "    def loc = if (startline == endline) then {",
    "        if (startpos == endpos)",
    "              then { startpos.asString }",
    "              else { \"{startpos}-{endpos}\" }",
    "    } else { \"{startpos}-{endline}:{endpos}\" }",
    "    def arr = (\"-\" * (startpos-1)) ++ (\"^\" * (endpos - startpos + 1))",
    "    syntaxError(message, startline, \":{loc}\", arr, suggestions)",
    "}",
    "",
    "method error (message) atRange (r) {",
    "    error (message)",
    "        atRange (r.start.line, r.start.column, r.end.line, r.end.column)",
    "        withSuggestions []",
    "}",
    "",
    "method error (message)",
    "          atRange (startline, startpos, endline, endpos)",
    "          withSuggestions (suggestions) {",
    "",
    "    // this variant allows for range to start and end on different lines.",
    "    def loc = if (startline == endline) then {",
    "        if (startpos == endpos)",
    "              then { startpos.asString }",
    "              else { \"{startpos}-{endpos}\" }",
    "    } else { \"{startpos}-{endline}:{endpos}\" }",
    "    def arr = (\"-\" * (startpos-1)) ++ (\"^\" * (endpos - startpos + 1))",
    "    util.generalError(message, startline, \":{loc}\", arr, suggestions)",
    "}",
    "",
    "method error(message) atRange(errLinenum, startpos, endpos) withSuggestions(suggestions) {",
    "    error (message)",
    "          atRange (errLinenum, startpos, errLinenum, endpos)",
    "          withSuggestions (suggestions)",
    "}",
    "",
    "method error(message) atRange(errLinenum, startpos, endpos) {",
    "    error (message) atRange(errLinenum, startpos, endpos) withSuggestions []",
    "}",
    "",
    "method syntaxError(message) atPosition(errLinenum, errpos) {",
    "    syntaxError(message)atPosition(errLinenum, errpos)withSuggestions []",
    "}",
    "",
    "method error(message) atPosition(errLinenum, errpos) {",
    "    error(message) atPosition(errLinenum, errpos) withSuggestions []",
    "}",
    "",
    "method syntaxError(message) atPosition(errLinenum, errpos) withSuggestion(suggestion') {",
    "    syntaxError(message) atPosition(errLinenum, errpos) withSuggestions [suggestion']",
    "}",
    "",
    "method syntaxError(message)atPosition(errLinenum, errpos)withSuggestions(suggestions) {",
    "    def arr = (\"-\" * (errpos-1)) ++ \"^\"",
    "    syntaxError(message, errLinenum, \":{errpos}\", arr, suggestions)",
    "}",
    "",
    "method error(message) atPosition(errLinenum, errPosition)",
    "        withSuggestions(suggestions) {",
    "    def arr = \"^\"",
    "",
    "    def errorObj = object {",
    "        def lineNum is public = errLinenum",
    "        def position is public = errPosition",
    "        def arrow is public = arr",
    "        def sugg is public = suggestions",
    "    }",
    "    CompilationError.raise (message) with (errorObj)",
    "}",
    "",
    "method error(message) {",
    "    error(message) atPosition(0, \"\") withSuggestions []",
    "}",
    "",
    "method error(message) atLine(errLinenum) withSuggestions(suggestions) {",
    "    def arr = if ((errLinenum > 0) && (errLinenum <= util.lines.size)) then {",
    "        \"^\" * util.lines.at(errLinenum).size",
    "    } else {",
    "        \"^\"",
    "    }",
    "    def errorObj = object {",
    "        def lineNum is public = errLinenum",
    "        def position is public = \"\"",
    "        def arrow is public = arr",
    "        def sugg is public = suggestions",
    "    }",
    "    CompilationError.raise (message) with (errorObj)",
    "",
    "}",
    "",
    "method error(message)atLine(errLinenum) {",
    "    error(message)atLine(errLinenum)withSuggestions []",
    "}",
    "",
    "method syntaxError(message)atLine(errLinenum) {",
    "    syntaxError(message)atLine(errLinenum)withSuggestions []",
    "}",
    "",
    "method syntaxError(message) atLine(errLinenum) withSuggestion(suggestion') {",
    "    syntaxError(message) atLine(errLinenum) withSuggestions [suggestion']",
    "}",
    "",
    "method syntaxError(message) atLine(errLinenum) withSuggestions(suggestions) {",
    "    def arr = \"^\" * util.lines.at(errLinenum).size",
    "    syntaxError(message, errLinenum, \"\", arr, suggestions)",
    "}" ];
}
function gracecode_errormessages() {
  importedModules["errormessages"] = this;
  var module$errormessages = this;
  this.definitionModule = "errormessages";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_errormessages_1");
  this.outer_errormessages_1 = var_prelude;
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
  func0.definitionModule = "errormessages";
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
  func1.definitionModule = "errormessages";
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
  func2.definitionModule = "errormessages";
  func2.debug = "import";
  func2.confidential = true;
  var func3 = function(argcv, var_xs) {    // method readableStringFrom(_), line 294
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("readableStringFrom(_)", 0, numArgs - 1);
    }
    setLineNumber(294);    // compilenode member
    // call case 2: outer request
    var call4 = selfRequest(var_prelude, "Collection", [0]);
    assertTypeOrMsg(var_xs, call4, "argument to request of `readableStringFrom(_)`", "Collection");
    setLineNumber(297);    // compilenode string
    var string5 = new GraceString("");
    var var_result = string5;
    setLineNumber(298);    // compilenode member
    // call case 6: other requests
    var call6 = request(var_xs, "size", [0]);
    var var_count = call6;
    setLineNumber(299);    // compilenode block
    var block8 = new GraceBlock(this, 299, 1);
    block8.guard = jsTrue;
    block8.real = function block8(var_v) {
      setLineNumber(300);    // compilenode op
      if (var_result === undefined) raiseUninitializedVariable("result");
      // call case 6: other requests
      var call9 = request(var_v, "asString", [0]);
      var opresult10 = request(var_result, "++(1)", [1], call9);
      var_result = opresult10;
      setLineNumber(301);    // compilenode op
      if (var_count === undefined) raiseUninitializedVariable("count");
      var diff11 = request(var_count, "-(1)", [1], new GraceNum(1));
      var_count = diff11;
      var if12 = GraceDone;
      setLineNumber(302);    // compilenode op
      if (var_count === undefined) raiseUninitializedVariable("count");
      var opresult13 = request(var_count, "==(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult13)) {
        var if14 = GraceDone;
        setLineNumber(303);    // compilenode member
        // call case 6: other requests
        var call15 = request(var_xs, "size", [0]);
        var opresult16 = request(call15, ">(1)", [1], new GraceNum(2));
        if (Grace_isTrue(opresult16)) {
          if (var_result === undefined) raiseUninitializedVariable("result");
          var string17 = new GraceString(",");
          var opresult18 = request(var_result, "++(1)", [1], string17);
          var_result = opresult18;
          if14 = GraceDone;
        }
        setLineNumber(304);    // compilenode op
        if (var_result === undefined) raiseUninitializedVariable("result");
        var string19 = new GraceString(" and ");
        var opresult20 = request(var_result, "++(1)", [1], string19);
        var_result = opresult20;
        if12 = GraceDone;
      } else {
        var if21 = GraceDone;
        setLineNumber(305);    // compilenode op
        if (var_count === undefined) raiseUninitializedVariable("count");
        var opresult22 = request(var_count, ">(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult22)) {
          setLineNumber(306);    // compilenode op
          if (var_result === undefined) raiseUninitializedVariable("result");
          var string23 = new GraceString(", ");
          var opresult24 = request(var_result, "++(1)", [1], string23);
          var_result = opresult24;
          if21 = GraceDone;
        }
        if12 = if21;
      }
      return if12;
    };
    let applyMeth8 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth8.methodName = "apply(1)";
    applyMeth8.paramCounts = [1];
    applyMeth8.paramNames = ["v"];
    applyMeth8.definitionLine = 299;
    applyMeth8.definitionModule = "errormessages";
    block8.methods["apply(1)"] = applyMeth8;
    let matchesMeth8 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth8.methodName = "matches(1)";
    matchesMeth8.paramCounts = [1];
    matchesMeth8.paramNames = ["v"];
    matchesMeth8.definitionLine = 299;
    matchesMeth8.definitionModule = "errormessages";
    block8.methods["matches(1)"] = matchesMeth8;
    // call case 6: other requests
    var call7 = request(var_xs, "do(1)", [1], block8);
    return var_result;
  };    // end of method readableStringFrom(_)
  this.methods["readableStringFrom(1)"] = func3;
  func3.methodName = "readableStringFrom(1)";
  func3.paramCounts = [1];
  func3.paramNames = ["xs"];
  func3.definitionLine = 294;
  func3.definitionModule = "errormessages";
  var func25 = function(argcv, var_p, var_target) {    // method name(_)mightBeIntendedToBe(_), line 312
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("name(_)mightBeIntendedToBe(_)", 0, numArgs - 2);
    }
    assertTypeOrMsg(var_p, var_String, "argument 1 in request of `name(_)mightBeIntendedToBe(_)`", "String");
    assertTypeOrMsg(var_target, var_String, "argument 2 in request of `name(_)mightBeIntendedToBe(_)`", "String");
    var if26 = GraceDone;
    setLineNumber(315);    // compilenode string
    var string27 = new GraceString("module()object");
    var opresult28 = request(var_p, "==(1)", [1], string27);
    if (Grace_isTrue(opresult28)) {
      return GraceFalse;
    }
    var if29 = GraceDone;
    setLineNumber(316);    // compilenode string
    var string31 = new GraceString("$");
    // call case 6: other requests
    var call30 = request(var_p, "contains(1)", [1], string31);
    if (Grace_isTrue(call30)) {
      return GraceFalse;
    }
    var if32 = GraceDone;
    setLineNumber(317);    // compilenode member
    // call case 6: other requests
    var call33 = request(var_p, "startsWithLetter", [0]);
    // call case 6: other requests
    var call34 = request(var_target, "startsWithLetter", [0]);
    var opresult35 = request(call33, "\u2260(1)", [1], call34);
    if (Grace_isTrue(opresult35)) {
      return GraceFalse;
    }
    setLineNumber(319);    // compilenode string
    var string37 = new GraceString("(");
    var block38 = new GraceBlock(this, 319, 0);
    block38.guard = jsTrue;
    block38.real = function block38() {
      setLineNumber(319);    // compilenode member
      // call case 6: other requests
      var call39 = request(var_p, "size", [0]);
      var sum40 = request(call39, "+(1)", [1], new GraceNum(1));
      return sum40;
    };
    let applyMeth38 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth38.methodName = "apply";
    applyMeth38.paramCounts = [0];
    applyMeth38.paramNames = [];
    applyMeth38.definitionLine = 319;
    applyMeth38.definitionModule = "errormessages";
    block38.methods["apply"] = applyMeth38;
    // call case 6: other requests
    var call36 = request(var_p, "indexOf(1)ifAbsent(1)", [1, 1], string37, block38);
    var var_parenIx = call36;
    setLineNumber(320);    // compilenode num
    var diff42 = request(var_parenIx, "-(1)", [1], new GraceNum(1));
    // call case 6: other requests
    var call41 = request(var_p, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff42);
    var var_pPrefix = call41;
    var if43 = GraceDone;
    setLineNumber(321);    // compilenode call
    // call case 6: other requests
    var call44 = request(var_target, "startsWith(1)", [1], var_pPrefix);
    if (Grace_isTrue(call44)) {
      return GraceTrue;
    }
    var if45 = GraceDone;
    setLineNumber(322);    // compilenode member
    // call case 6: other requests
    var call46 = request(var_target, "size", [0]);
    // call case 6: other requests
    var call47 = request(var_p, "size", [0]);
    var prod48 = request(call47, "*(1)", [1], new GraceNum(2));
    var opresult49 = request(call46, ">(1)", [1], prod48);
    if (Grace_isTrue(opresult49)) {
      return GraceFalse;
    }
    setLineNumber(323);    // compilenode num
    // call case 2: outer request
    var call50 = selfRequest(importedModules["errormessages"], "name(1)matches(1)within(1)", [1, 1, 1], var_p, var_target, new GraceNum(2));
    var var_rng = call50;
    var if51 = GraceDone;
    setLineNumber(324);    // compilenode num
    var opresult52 = request(var_rng, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult52)) {
      return GraceFalse;
    }
    var if53 = GraceDone;
    setLineNumber(325);    // compilenode member
    // call case 6: other requests
    var call54 = request(var_p, "size", [0]);
    var prod55 = request(call54, "*(1)", [1], new GraceNum(2));
    var opresult56 = request(var_rng, ">(1)", [1], prod55);
    if (Grace_isTrue(opresult56)) {
      return GraceFalse;
    }
    setLineNumber(326);    // compilenode return
    return GraceTrue;
  };    // end of method name(_)mightBeIntendedToBe(_)
  func25.paramTypes = [];
  func25.paramTypes.push([type_String, "p"]);
  func25.paramTypes.push([type_String, "target"]);
  this.methods["name(1)mightBeIntendedToBe(1)"] = func25;
  func25.methodName = "name(1)mightBeIntendedToBe(1)";
  func25.paramCounts = [1, 1];
  func25.paramNames = ["p", "target"];
  func25.definitionLine = 312;
  func25.definitionModule = "errormessages";
  var func57 = function(argcv, var_p, var_t, var_k) {    // method name(_)matches(_)within(_), line 330
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("name(_)matches(_)within(_)", 0, numArgs - 3);
    }
    assertTypeOrMsg(var_p, var_String, "argument 1 in request of `name(_)matches(_)within(_)`", "String");
    assertTypeOrMsg(var_t, var_String, "argument 2 in request of `name(_)matches(_)within(_)`", "String");
    assertTypeOrMsg(var_k, var_Number, "argument 3 in request of `name(_)matches(_)within(_)`", "Number");
    setLineNumber(351);    // compilenode member
    // call case 6: other requests
    var call58 = request(var_p, "size", [0]);
    var var_m = call58;
    setLineNumber(352);    // compilenode member
    // call case 6: other requests
    var call59 = request(var_t, "size", [0]);
    var var_n = call59;
    var if60 = GraceDone;
    setLineNumber(353);    // compilenode op
    var opresult61 = request(var_m, "\u2264(1)", [1], var_k);
    if (Grace_isTrue(opresult61)) {
      setLineNumber(354);    // compilenode call
      if (var_m === undefined) raiseUninitializedVariable("m");
      if (var_n === undefined) raiseUninitializedVariable("n");
      // call case 2: outer request
      var call62 = selfRequest(var_prelude, "min(2)", [2], var_m, var_n);
      return call62;
    }
    setLineNumber(356);    // compilenode num
    var sum63 = request(var_k, "+(1)", [1], new GraceNum(1));
    var var_top = sum63;
    setLineNumber(358);    // compilenode num
    var var_maxResult = new GraceNum(0);
    setLineNumber(359);    // compilenode member
    // call case 6: other requests
    // call case 2: outer request
    var call65 = selfRequest(var_prelude, "list", [0]);
    var call64 = request(call65, "empty", [0]);
    var var_h = call64;
    setLineNumber(360);    // compilenode num
    var opresult67 = request(new GraceNum(0), "..(1)", [1], var_m);
    var block68 = new GraceBlock(this, 360, 1);
    block68.guard = jsTrue;
    block68.real = function block68(var_i) {
      setLineNumber(360);    // compilenode num
      var sum70 = request(var_i, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      if (var_h === undefined) raiseUninitializedVariable("h");
      var call69 = request(var_h, "at(1)put(1)", [1, 1], sum70, var_i);
      return call69;
    };
    let applyMeth68 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth68.methodName = "apply(1)";
    applyMeth68.paramCounts = [1];
    applyMeth68.paramNames = ["i"];
    applyMeth68.definitionLine = 360;
    applyMeth68.definitionModule = "errormessages";
    block68.methods["apply(1)"] = applyMeth68;
    let matchesMeth68 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth68.methodName = "matches(1)";
    matchesMeth68.paramCounts = [1];
    matchesMeth68.paramNames = ["i"];
    matchesMeth68.definitionLine = 360;
    matchesMeth68.definitionModule = "errormessages";
    block68.methods["matches(1)"] = matchesMeth68;
    // call case 2: outer request
    var call66 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult67, block68);
    setLineNumber(361);    // compilenode block
    var block72 = new GraceBlock(this, 361, 0);
    block72.guard = jsTrue;
    block72.real = function block72() {
      setLineNumber(362);    // compilenode num
      if (var_n === undefined) raiseUninitializedVariable("n");
      var opresult74 = request(new GraceNum(1), "..(1)", [1], var_n);
      var block75 = new GraceBlock(this, 362, 1);
      block75.guard = jsTrue;
      block75.real = function block75(var_j) {
        setLineNumber(363);    // compilenode num
        var var_c = new GraceNum(0);
        setLineNumber(364);    // compilenode num
        if (var_top === undefined) raiseUninitializedVariable("top");
        var opresult77 = request(new GraceNum(1), "..(1)", [1], var_top);
        var block78 = new GraceBlock(this, 364, 1);
        block78.guard = jsTrue;
        block78.real = function block78(var_i) {
          var if79 = GraceDone;
          setLineNumber(365);    // compilenode call
          // call case 6: other requests
          var call80 = request(var_p, "at(1)", [1], var_i);
          // call case 6: other requests
          var call81 = request(var_t, "at(1)", [1], var_j);
          var opresult82 = request(call80, "==(1)", [1], call81);
          if (Grace_isTrue(opresult82)) {
            if (var_c === undefined) raiseUninitializedVariable("c");
            if79 = var_c;
          } else {
            setLineNumber(368);    // compilenode call
            // call case 6: other requests
            if (var_h === undefined) raiseUninitializedVariable("h");
            var call84 = request(var_h, "at(1)", [1], var_i);
            var sum86 = request(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            if (var_h === undefined) raiseUninitializedVariable("h");
            var call85 = request(var_h, "at(1)", [1], sum86);
            if (var_c === undefined) raiseUninitializedVariable("c");
            // call case 2: outer request
            var call83 = selfRequest(importedModules["errormessages"], "min3(3)", [3], call84, call85, var_c);
            var sum87 = request(call83, "+(1)", [1], new GraceNum(1));
            if79 = sum87;
          }
          var var_e = if79;
          setLineNumber(370);    // compilenode num
          var sum89 = request(var_i, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          if (var_h === undefined) raiseUninitializedVariable("h");
          var call88 = request(var_h, "at(1)", [1], sum89);
          var_c = call88;
          setLineNumber(371);    // compilenode num
          var sum91 = request(var_i, "+(1)", [1], new GraceNum(1));
          if (var_e === undefined) raiseUninitializedVariable("e");
          // call case 6: other requests
          if (var_h === undefined) raiseUninitializedVariable("h");
          var call90 = request(var_h, "at(1)put(1)", [1, 1], sum91, var_e);
          return call90;
        };
        let applyMeth78 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth78.methodName = "apply(1)";
        applyMeth78.paramCounts = [1];
        applyMeth78.paramNames = ["i"];
        applyMeth78.definitionLine = 364;
        applyMeth78.definitionModule = "errormessages";
        block78.methods["apply(1)"] = applyMeth78;
        let matchesMeth78 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth78.methodName = "matches(1)";
        matchesMeth78.paramCounts = [1];
        matchesMeth78.paramNames = ["i"];
        matchesMeth78.definitionLine = 364;
        matchesMeth78.definitionModule = "errormessages";
        block78.methods["matches(1)"] = matchesMeth78;
        // call case 2: outer request
        var call76 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult77, block78);
        setLineNumber(373);    // compilenode block
        var block93 = new GraceBlock(this, 373, 0);
        block93.guard = jsTrue;
        block93.real = function block93() {
          setLineNumber(373);    // compilenode op
          if (var_top === undefined) raiseUninitializedVariable("top");
          var sum95 = request(var_top, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          if (var_h === undefined) raiseUninitializedVariable("h");
          var call94 = request(var_h, "at(1)", [1], sum95);
          var opresult96 = request(call94, ">(1)", [1], var_k);
          return opresult96;
        };
        let applyMeth93 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth93.methodName = "apply";
        applyMeth93.paramCounts = [0];
        applyMeth93.paramNames = [];
        applyMeth93.definitionLine = 373;
        applyMeth93.definitionModule = "errormessages";
        block93.methods["apply"] = applyMeth93;
        var block97 = new GraceBlock(this, 373, 0);
        block97.guard = jsTrue;
        block97.real = function block97() {
          setLineNumber(373);    // compilenode op
          if (var_top === undefined) raiseUninitializedVariable("top");
          var diff98 = request(var_top, "-(1)", [1], new GraceNum(1));
          var_top = diff98;
          return GraceDone;
        };
        let applyMeth97 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth97.methodName = "apply";
        applyMeth97.paramCounts = [0];
        applyMeth97.paramNames = [];
        applyMeth97.definitionLine = 373;
        applyMeth97.definitionModule = "errormessages";
        block97.methods["apply"] = applyMeth97;
        // call case 2: outer request
        var call92 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block93, block97);
        var if99 = GraceDone;
        setLineNumber(374);    // compilenode op
        if (var_top === undefined) raiseUninitializedVariable("top");
        if (var_m === undefined) raiseUninitializedVariable("m");
        var opresult100 = request(var_top, "==(1)", [1], var_m);
        if (Grace_isTrue(opresult100)) {
          setLineNumber(375);    // compilenode call
          if (var_maxResult === undefined) raiseUninitializedVariable("maxResult");
          // call case 2: outer request
          var call101 = selfRequest(var_prelude, "max(2)", [2], var_maxResult, var_j);
          var_maxResult = call101;
          if99 = GraceDone;
        } else {
          setLineNumber(378);    // compilenode op
          if (var_top === undefined) raiseUninitializedVariable("top");
          var sum102 = request(var_top, "+(1)", [1], new GraceNum(1));
          var_top = sum102;
          if99 = GraceDone;
        }
        return if99;
      };
      let applyMeth75 = function apply_1 (argcv, ...args) {
          if (this.guard.apply(this.receiver, args))
              return this.real.apply(this.receiver, args);
          badBlockArgs.apply(this, args);
      };
      applyMeth75.methodName = "apply(1)";
      applyMeth75.paramCounts = [1];
      applyMeth75.paramNames = ["j"];
      applyMeth75.definitionLine = 362;
      applyMeth75.definitionModule = "errormessages";
      block75.methods["apply(1)"] = applyMeth75;
      let matchesMeth75 = function matches_1 (argcv, ...args) {
          return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
      };
      matchesMeth75.methodName = "matches(1)";
      matchesMeth75.paramCounts = [1];
      matchesMeth75.paramNames = ["j"];
      matchesMeth75.definitionLine = 362;
      matchesMeth75.definitionModule = "errormessages";
      block75.methods["matches(1)"] = matchesMeth75;
      // call case 2: outer request
      var call73 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult74, block75);
      return call73;
    };
    let applyMeth72 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth72.methodName = "apply";
    applyMeth72.paramCounts = [0];
    applyMeth72.paramNames = [];
    applyMeth72.definitionLine = 361;
    applyMeth72.definitionModule = "errormessages";
    block72.methods["apply"] = applyMeth72;
    var cases71 = [];
    setLineNumber(381);    // compilenode block
    var block103 = new GraceBlock(this, 381, 1);
    // call case 2: outer request
    var call104 = selfRequest(var_prelude, "BoundsError", [0]);
    block103.paramTypes = [call104];
    var matches105 = function(var_e) {
      // call case 2: outer request
      var call106 = selfRequest(var_prelude, "BoundsError", [0]);
      if (!Grace_isTrue(request(call106, "matches(1)", [1], var_e)))
          return false;
      return true;
    };
    block103.guard = matches105;
    block103.real = function block103(var_e) {
      setLineNumber(382);    // compilenode string
      var string107 = new GraceString("BoundsError in name(");
      var opresult108 = request(string107, "++(1)", [1], var_p);
      var string109 = new GraceString(")matches(");
      var opresult110 = request(opresult108, "++(1)", [1], string109);
      var opresult111 = request(opresult110, "++(1)", [1], var_t);
      var string112 = new GraceString(")within(");
      var opresult113 = request(opresult111, "++(1)", [1], string112);
      var opresult114 = request(opresult113, "++(1)", [1], var_k);
      var string115 = new GraceString(")");
      var opresult116 = request(opresult114, "++(1)", [1], string115);
      Grace_print(opresult116);
      setLineNumber(383);    // compilenode member
      // call case 6: other requests
      var call117 = request(var_e, "printBacktrace", [0]);
      setLineNumber(384);    // compilenode num
      throw new ReturnException(new GraceNum(0), returnTarget);
    };
    let applyMeth103 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth103.methodName = "apply(1)";
    applyMeth103.paramCounts = [1];
    applyMeth103.paramNames = ["e"];
    applyMeth103.definitionLine = 381;
    applyMeth103.definitionModule = "errormessages";
    block103.methods["apply(1)"] = applyMeth103;
    let matchesMeth103 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth103.methodName = "matches(1)";
    matchesMeth103.paramCounts = [1];
    matchesMeth103.paramNames = ["e"];
    matchesMeth103.definitionLine = 381;
    matchesMeth103.definitionModule = "errormessages";
    block103.methods["matches(1)"] = matchesMeth103;
    cases71.push(block103);
    setLineNumber(361);    // compiletrycatch
    var catchres71 = tryCatch(block72,cases71,false);
    setLineNumber(385);    // compilenode return
    return var_maxResult;
  };    // end of method name(_)matches(_)within(_)
  func57.paramTypes = [];
  func57.paramTypes.push([type_String, "p"]);
  func57.paramTypes.push([type_String, "t"]);
  func57.paramTypes.push([type_Number, "k"]);
  this.methods["name(1)matches(1)within(1)"] = func57;
  func57.methodName = "name(1)matches(1)within(1)";
  func57.paramCounts = [1, 1, 1];
  func57.paramNames = ["p", "t", "k"];
  func57.definitionLine = 330;
  func57.definitionModule = "errormessages";
  var func118 = function(argcv, var_a, var_b, var_c) {    // method min3(_,_,_), line 388
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("min3(_,_,_)", 0, numArgs - 3);
    }
    var if119 = GraceDone;
    setLineNumber(389);    // compilenode op
    var opresult120 = request(var_a, "<(1)", [1], var_b);
    if (Grace_isTrue(opresult120)) {
      if119 = var_a;
    } else {
      if119 = var_b;
    }
    var var_sf = if119;
    var if121 = GraceDone;
    setLineNumber(390);    // compilenode op
    var opresult122 = request(var_sf, "<(1)", [1], var_c);
    if (Grace_isTrue(opresult122)) {
      if (var_sf === undefined) raiseUninitializedVariable("sf");
      if121 = var_sf;
    } else {
      if121 = var_c;
    }
    return if121;
  };    // end of method min3(_,_,_)
  func118.confidential = true;
  this.methods["min3(3)"] = func118;
  func118.methodName = "min3(3)";
  func118.paramCounts = [3];
  func118.paramNames = ["a", "b", "c"];
  func118.definitionLine = 388;
  func118.definitionModule = "errormessages";
  var func123 = function(argcv, var_message, var_errLinenum, var_errPosition, var_arr, var_suggestions) {    // method syntaxError(_,_,_,_,_), line 403
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 5) && (numArgs !== 5)) {
        raiseTypeArgError("syntaxError(_,_,_,_,_)", 0, numArgs - 5);
    }
    setLineNumber(412);    // compilenode object
    var obj124_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_errormessages_412");
      this.outer_errormessages_412 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.lineNum = undefined;
      var reader125_lineNum = function() {  // reader method lineNum
          if (this.data.lineNum === undefined) raiseUninitializedVariable("lineNum");
          return this.data.lineNum;
      };
      reader125_lineNum.isDef = true;
      this.methods["lineNum"] = reader125_lineNum;
      this.data.position = undefined;
      var reader126_position = function() {  // reader method position
          if (this.data.position === undefined) raiseUninitializedVariable("position");
          return this.data.position;
      };
      reader126_position.isDef = true;
      this.methods["position"] = reader126_position;
      this.data.arrow = undefined;
      var reader127_arrow = function() {  // reader method arrow
          if (this.data.arrow === undefined) raiseUninitializedVariable("arrow");
          return this.data.arrow;
      };
      reader127_arrow.isDef = true;
      this.methods["arrow"] = reader127_arrow;
      this.data.sugg = undefined;
      var reader128_sugg = function() {  // reader method sugg
          if (this.data.sugg === undefined) raiseUninitializedVariable("sugg");
          return this.data.sugg;
      };
      reader128_sugg.isDef = true;
      this.methods["sugg"] = reader128_sugg;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 412;
          m.definitionModule = "errormessages";
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
      var obj124_init = function() {    // init of object on line 412
        this.data.lineNum = var_errLinenum;
        this.data.position = var_errPosition;
        this.data.arrow = var_arr;
        this.data.sugg = var_suggestions;
      };
      return obj124_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj124 = emptyGraceObject("errorObj", "errormessages", 412);
    var obj124_init = obj124_build.call(obj124, null, this, [], []);
    obj124_init.call(obj124);  // end of compileobject
    var var_errorObj = obj124;
    setLineNumber(418);    // compilenode call
    // call case 6: other requests
    if (var_SyntaxError === undefined) raiseUninitializedVariable("SyntaxError");
    var call129 = request(var_SyntaxError, "raise(1)with(1)", [1, 1], var_message, var_errorObj);
    return call129;
  };    // end of method syntaxError(_,_,_,_,_)
  this.methods["syntaxError(5)"] = func123;
  func123.methodName = "syntaxError(5)";
  func123.paramCounts = [5];
  func123.paramNames = ["message", "errLinenum", "errPosition", "arr", "suggestions"];
  func123.definitionLine = 403;
  func123.definitionModule = "errormessages";
  var func130 = function(argcv, var_message, var_r) {    // method syntaxError(_)atRange(_), line 421
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("syntaxError(_)atRange(_)", 0, numArgs - 2);
    }
    var if131 = GraceDone;
    setLineNumber(422);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call133 = request(var_r, "start", [0]);
    var call132 = request(call133, "line", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call135 = request(var_r, "end", [0]);
    var call134 = request(call135, "line", [0]);
    var opresult136 = request(call132, "<(1)", [1], call134);
    if (Grace_isTrue(opresult136)) {
      setLineNumber(423);    // compilenode string
      var string137 = new GraceString("  This statement spans multiple lines; is that what you intended?");
      if131 = string137;
    } else {
      setLineNumber(425);    // compilenode string
      var string138 = new GraceString("");
      if131 = string138;
    }
    var var_more = if131;
    setLineNumber(427);    // compilenode op
    var opresult140 = request(var_message, "++(1)", [1], var_more);
    var array141 = new GraceSequence([]);
    // call case 2: outer request
    var call139 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(1)withSuggestions(1)", [1, 1, 1], opresult140, var_r, array141);
    return call139;
  };    // end of method syntaxError(_)atRange(_)
  this.methods["syntaxError(1)atRange(1)"] = func130;
  func130.methodName = "syntaxError(1)atRange(1)";
  func130.paramCounts = [1, 1];
  func130.paramNames = ["message", "r"];
  func130.definitionLine = 421;
  func130.definitionModule = "errormessages";
  var func142 = function(argcv, var_message, var_r, var_s) {    // method syntaxError(_)atRange(_)withSuggestion(_), line 429
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("syntaxError(_)atRange(_)withSuggestion(_)", 0, numArgs - 3);
    }
    setLineNumber(430);    // compilenode array
    var array144 = new GraceSequence([var_s]);
    // call case 2: outer request
    var call143 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(1)withSuggestions(1)", [1, 1, 1], var_message, var_r, array144);
    return call143;
  };    // end of method syntaxError(_)atRange(_)withSuggestion(_)
  this.methods["syntaxError(1)atRange(1)withSuggestion(1)"] = func142;
  func142.methodName = "syntaxError(1)atRange(1)withSuggestion(1)";
  func142.paramCounts = [1, 1, 1];
  func142.paramNames = ["message", "r", "s"];
  func142.definitionLine = 429;
  func142.definitionModule = "errormessages";
  var func145 = function(argcv, var_message, var_r, var_s) {    // method syntaxError(_)atRange(_)withSuggestions(_), line 432
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("syntaxError(_)atRange(_)withSuggestions(_)", 0, numArgs - 3);
    }
    setLineNumber(434);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call148 = request(var_r, "start", [0]);
    var call147 = request(call148, "line", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call150 = request(var_r, "start", [0]);
    var call149 = request(call150, "column", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call152 = request(var_r, "end", [0]);
    var call151 = request(call152, "line", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call154 = request(var_r, "end", [0]);
    var call153 = request(call154, "column", [0]);
    // call case 2: outer request
    var call146 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(4)withSuggestions(1)", [1, 4, 1], var_message, call147, call149, call151, call153, var_s);
    return call146;
  };    // end of method syntaxError(_)atRange(_)withSuggestions(_)
  this.methods["syntaxError(1)atRange(1)withSuggestions(1)"] = func145;
  func145.methodName = "syntaxError(1)atRange(1)withSuggestions(1)";
  func145.paramCounts = [1, 1, 1];
  func145.paramNames = ["message", "r", "s"];
  func145.definitionLine = 432;
  func145.definitionModule = "errormessages";
  var func155 = function(argcv, var_message, var_errLinenum, var_startpos, var_endpos) {    // method syntaxError(_)atRange(_,_,_), line 438
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("syntaxError(_)atRange(_,_,_)", 0, numArgs - 4);
    }
    setLineNumber(439);    // compilenode array
    var array157 = new GraceSequence([]);
    // call case 2: outer request
    var call156 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errLinenum, var_startpos, var_endpos, array157);
    return call156;
  };    // end of method syntaxError(_)atRange(_,_,_)
  this.methods["syntaxError(1)atRange(3)"] = func155;
  func155.methodName = "syntaxError(1)atRange(3)";
  func155.paramCounts = [1, 3];
  func155.paramNames = ["message", "errLinenum", "startpos", "endpos"];
  func155.definitionLine = 438;
  func155.definitionModule = "errormessages";
  var func158 = function(argcv, var_message, var_sl, var_sp, var_el, var_ep) {    // method syntaxError(_)atRange(_,_,_,_), line 442
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 5) && (numArgs !== 5)) {
        raiseTypeArgError("syntaxError(_)atRange(_,_,_,_)", 0, numArgs - 5);
    }
    setLineNumber(443);    // compilenode array
    var array160 = new GraceSequence([]);
    // call case 2: outer request
    var call159 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(4)withSuggestions(1)", [1, 4, 1], var_message, var_sl, var_sp, var_el, var_ep, array160);
    return call159;
  };    // end of method syntaxError(_)atRange(_,_,_,_)
  this.methods["syntaxError(1)atRange(4)"] = func158;
  func158.methodName = "syntaxError(1)atRange(4)";
  func158.paramCounts = [1, 4];
  func158.paramNames = ["message", "sl", "sp", "el", "ep"];
  func158.definitionLine = 442;
  func158.definitionModule = "errormessages";
  var func161 = function(argcv, var_message, var_errLinenum, var_startpos, var_endpos, var_suggestion__39__) {    // method syntaxError(_)atRange(_,_,_)withSuggestion(_), line 446
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 5) && (numArgs !== 5)) {
        raiseTypeArgError("syntaxError(_)atRange(_,_,_)withSuggestion(_)", 0, numArgs - 5);
    }
    setLineNumber(447);    // compilenode array
    var array163 = new GraceSequence([var_suggestion__39__]);
    // call case 2: outer request
    var call162 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errLinenum, var_startpos, var_endpos, array163);
    return call162;
  };    // end of method syntaxError(_)atRange(_,_,_)withSuggestion(_)
  this.methods["syntaxError(1)atRange(3)withSuggestion(1)"] = func161;
  func161.methodName = "syntaxError(1)atRange(3)withSuggestion(1)";
  func161.paramCounts = [1, 3, 1];
  func161.paramNames = ["message", "errLinenum", "startpos", "endpos", "suggestion'"];
  func161.definitionLine = 446;
  func161.definitionModule = "errormessages";
  var func164 = function(argcv, var_message, var_errLinenum, var_startpos, var_endpos, var_suggestions) {    // method syntaxError(_)atRange(_,_,_)withSuggestions(_), line 450
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 5) && (numArgs !== 5)) {
        raiseTypeArgError("syntaxError(_)atRange(_,_,_)withSuggestions(_)", 0, numArgs - 5);
    }
    setLineNumber(451);    // compilenode call
    // call case 2: outer request
    var call165 = selfRequest(importedModules["errormessages"], "syntaxError(1)atRange(4)withSuggestions(1)", [1, 4, 1], var_message, var_errLinenum, var_startpos, var_errLinenum, var_endpos, var_suggestions);
    return call165;
  };    // end of method syntaxError(_)atRange(_,_,_)withSuggestions(_)
  this.methods["syntaxError(1)atRange(3)withSuggestions(1)"] = func164;
  func164.methodName = "syntaxError(1)atRange(3)withSuggestions(1)";
  func164.paramCounts = [1, 3, 1];
  func164.paramNames = ["message", "errLinenum", "startpos", "endpos", "suggestions"];
  func164.definitionLine = 450;
  func164.definitionModule = "errormessages";
  var func166 = function(argcv, var_message, var_startline, var_startpos, var_endline, var_endpos, var_suggestions) {    // method syntaxError(_)atRange(_,_,_,_)withSuggestions(_), line 456
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 6) && (numArgs !== 6)) {
        raiseTypeArgError("syntaxError(_)atRange(_,_,_,_)withSuggestions(_)", 0, numArgs - 6);
    }
    var if167 = GraceDone;
    setLineNumber(461);    // compilenode op
    var opresult168 = request(var_startline, "==(1)", [1], var_endline);
    if (Grace_isTrue(opresult168)) {
      var if169 = GraceDone;
      setLineNumber(462);    // compilenode op
      var opresult170 = request(var_startpos, "==(1)", [1], var_endpos);
      if (Grace_isTrue(opresult170)) {
        setLineNumber(463);    // compilenode member
        // call case 6: other requests
        var call171 = request(var_startpos, "asString", [0]);
        if169 = call171;
      } else {
        setLineNumber(464);    // compilenode string
        var string172 = new GraceString("");
        var opresult173 = request(string172, "++(1)", [1], var_startpos);
        var string174 = new GraceString("-");
        var opresult175 = request(opresult173, "++(1)", [1], string174);
        var opresult176 = request(opresult175, "++(1)", [1], var_endpos);
        var string177 = new GraceString("");
        var opresult178 = request(opresult176, "++(1)", [1], string177);
        if169 = opresult178;
      }
      if167 = if169;
    } else {
      setLineNumber(465);    // compilenode string
      var string179 = new GraceString("");
      var opresult180 = request(string179, "++(1)", [1], var_startpos);
      var string181 = new GraceString("-");
      var opresult182 = request(opresult180, "++(1)", [1], string181);
      var opresult183 = request(opresult182, "++(1)", [1], var_endline);
      var string184 = new GraceString(":");
      var opresult185 = request(opresult183, "++(1)", [1], string184);
      var opresult186 = request(opresult185, "++(1)", [1], var_endpos);
      var string187 = new GraceString("");
      var opresult188 = request(opresult186, "++(1)", [1], string187);
      if167 = opresult188;
    }
    var var_loc = if167;
    setLineNumber(466);    // compilenode string
    var string189 = new GraceString("-");
    var diff190 = request(var_startpos, "-(1)", [1], new GraceNum(1));
    var prod191 = request(string189, "*(1)", [1], diff190);
    var string192 = new GraceString("^");
    var diff193 = request(var_endpos, "-(1)", [1], var_startpos);
    var sum194 = request(diff193, "+(1)", [1], new GraceNum(1));
    var prod195 = request(string192, "*(1)", [1], sum194);
    var opresult196 = request(prod191, "++(1)", [1], prod195);
    var var_arr = opresult196;
    setLineNumber(467);    // compilenode string
    var string198 = new GraceString(":");
    var opresult199 = request(string198, "++(1)", [1], var_loc);
    var string200 = new GraceString("");
    var opresult201 = request(opresult199, "++(1)", [1], string200);
    // call case 2: outer request
    var call197 = selfRequest(importedModules["errormessages"], "syntaxError(5)", [5], var_message, var_startline, opresult201, var_arr, var_suggestions);
    return call197;
  };    // end of method syntaxError(_)atRange(_,_,_,_)withSuggestions(_)
  this.methods["syntaxError(1)atRange(4)withSuggestions(1)"] = func166;
  func166.methodName = "syntaxError(1)atRange(4)withSuggestions(1)";
  func166.paramCounts = [1, 4, 1];
  func166.paramNames = ["message", "startline", "startpos", "endline", "endpos", "suggestions"];
  func166.definitionLine = 456;
  func166.definitionModule = "errormessages";
  var func202 = function(argcv, var_message, var_r) {    // method error(_)atRange(_), line 470
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("error(_)atRange(_)", 0, numArgs - 2);
    }
    setLineNumber(472);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call205 = request(var_r, "start", [0]);
    var call204 = request(call205, "line", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call207 = request(var_r, "start", [0]);
    var call206 = request(call207, "column", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call209 = request(var_r, "end", [0]);
    var call208 = request(call209, "line", [0]);
    // call case 6: other requests
    // call case 6: other requests
    var call211 = request(var_r, "end", [0]);
    var call210 = request(call211, "column", [0]);
    setLineNumber(473);    // compilenode array
    var array212 = new GraceSequence([]);
    // call case 2: outer request
    var call203 = selfRequest(importedModules["errormessages"], "error(1)atRange(4)withSuggestions(1)", [1, 4, 1], var_message, call204, call206, call208, call210, array212);
    return call203;
  };    // end of method error(_)atRange(_)
  this.methods["error(1)atRange(1)"] = func202;
  func202.methodName = "error(1)atRange(1)";
  func202.paramCounts = [1, 1];
  func202.paramNames = ["message", "r"];
  func202.definitionLine = 470;
  func202.definitionModule = "errormessages";
  var func213 = function(argcv, var_message, var_startline, var_startpos, var_endline, var_endpos, var_suggestions) {    // method error(_)atRange(_,_,_,_)withSuggestions(_), line 476
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 6) && (numArgs !== 6)) {
        raiseTypeArgError("error(_)atRange(_,_,_,_)withSuggestions(_)", 0, numArgs - 6);
    }
    var if214 = GraceDone;
    setLineNumber(481);    // compilenode op
    var opresult215 = request(var_startline, "==(1)", [1], var_endline);
    if (Grace_isTrue(opresult215)) {
      var if216 = GraceDone;
      setLineNumber(482);    // compilenode op
      var opresult217 = request(var_startpos, "==(1)", [1], var_endpos);
      if (Grace_isTrue(opresult217)) {
        setLineNumber(483);    // compilenode member
        // call case 6: other requests
        var call218 = request(var_startpos, "asString", [0]);
        if216 = call218;
      } else {
        setLineNumber(484);    // compilenode string
        var string219 = new GraceString("");
        var opresult220 = request(string219, "++(1)", [1], var_startpos);
        var string221 = new GraceString("-");
        var opresult222 = request(opresult220, "++(1)", [1], string221);
        var opresult223 = request(opresult222, "++(1)", [1], var_endpos);
        var string224 = new GraceString("");
        var opresult225 = request(opresult223, "++(1)", [1], string224);
        if216 = opresult225;
      }
      if214 = if216;
    } else {
      setLineNumber(485);    // compilenode string
      var string226 = new GraceString("");
      var opresult227 = request(string226, "++(1)", [1], var_startpos);
      var string228 = new GraceString("-");
      var opresult229 = request(opresult227, "++(1)", [1], string228);
      var opresult230 = request(opresult229, "++(1)", [1], var_endline);
      var string231 = new GraceString(":");
      var opresult232 = request(opresult230, "++(1)", [1], string231);
      var opresult233 = request(opresult232, "++(1)", [1], var_endpos);
      var string234 = new GraceString("");
      var opresult235 = request(opresult233, "++(1)", [1], string234);
      if214 = opresult235;
    }
    var var_loc = if214;
    setLineNumber(486);    // compilenode string
    var string236 = new GraceString("-");
    var diff237 = request(var_startpos, "-(1)", [1], new GraceNum(1));
    var prod238 = request(string236, "*(1)", [1], diff237);
    var string239 = new GraceString("^");
    var diff240 = request(var_endpos, "-(1)", [1], var_startpos);
    var sum241 = request(diff240, "+(1)", [1], new GraceNum(1));
    var prod242 = request(string239, "*(1)", [1], sum241);
    var opresult243 = request(prod238, "++(1)", [1], prod242);
    var var_arr = opresult243;
    setLineNumber(487);    // compilenode string
    var string245 = new GraceString(":");
    var opresult246 = request(string245, "++(1)", [1], var_loc);
    var string247 = new GraceString("");
    var opresult248 = request(opresult246, "++(1)", [1], string247);
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call244 = request(var_util, "generalError(5)", [5], var_message, var_startline, opresult248, var_arr, var_suggestions);
    return call244;
  };    // end of method error(_)atRange(_,_,_,_)withSuggestions(_)
  this.methods["error(1)atRange(4)withSuggestions(1)"] = func213;
  func213.methodName = "error(1)atRange(4)withSuggestions(1)";
  func213.paramCounts = [1, 4, 1];
  func213.paramNames = ["message", "startline", "startpos", "endline", "endpos", "suggestions"];
  func213.definitionLine = 476;
  func213.definitionModule = "errormessages";
  var func249 = function(argcv, var_message, var_errLinenum, var_startpos, var_endpos, var_suggestions) {    // method error(_)atRange(_,_,_)withSuggestions(_), line 490
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 5) && (numArgs !== 5)) {
        raiseTypeArgError("error(_)atRange(_,_,_)withSuggestions(_)", 0, numArgs - 5);
    }
    setLineNumber(491);    // compilenode call
    // call case 2: outer request
    var call250 = selfRequest(importedModules["errormessages"], "error(1)atRange(4)withSuggestions(1)", [1, 4, 1], var_message, var_errLinenum, var_startpos, var_errLinenum, var_endpos, var_suggestions);
    return call250;
  };    // end of method error(_)atRange(_,_,_)withSuggestions(_)
  this.methods["error(1)atRange(3)withSuggestions(1)"] = func249;
  func249.methodName = "error(1)atRange(3)withSuggestions(1)";
  func249.paramCounts = [1, 3, 1];
  func249.paramNames = ["message", "errLinenum", "startpos", "endpos", "suggestions"];
  func249.definitionLine = 490;
  func249.definitionModule = "errormessages";
  var func251 = function(argcv, var_message, var_errLinenum, var_startpos, var_endpos) {    // method error(_)atRange(_,_,_), line 496
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("error(_)atRange(_,_,_)", 0, numArgs - 4);
    }
    setLineNumber(497);    // compilenode array
    var array253 = new GraceSequence([]);
    // call case 2: outer request
    var call252 = selfRequest(importedModules["errormessages"], "error(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errLinenum, var_startpos, var_endpos, array253);
    return call252;
  };    // end of method error(_)atRange(_,_,_)
  this.methods["error(1)atRange(3)"] = func251;
  func251.methodName = "error(1)atRange(3)";
  func251.paramCounts = [1, 3];
  func251.paramNames = ["message", "errLinenum", "startpos", "endpos"];
  func251.definitionLine = 496;
  func251.definitionModule = "errormessages";
  var func254 = function(argcv, var_message, var_errLinenum, var_errpos) {    // method syntaxError(_)atPosition(_,_), line 500
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("syntaxError(_)atPosition(_,_)", 0, numArgs - 3);
    }
    setLineNumber(501);    // compilenode array
    var array256 = new GraceSequence([]);
    // call case 2: outer request
    var call255 = selfRequest(importedModules["errormessages"], "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errLinenum, var_errpos, array256);
    return call255;
  };    // end of method syntaxError(_)atPosition(_,_)
  this.methods["syntaxError(1)atPosition(2)"] = func254;
  func254.methodName = "syntaxError(1)atPosition(2)";
  func254.paramCounts = [1, 2];
  func254.paramNames = ["message", "errLinenum", "errpos"];
  func254.definitionLine = 500;
  func254.definitionModule = "errormessages";
  var func257 = function(argcv, var_message, var_errLinenum, var_errpos) {    // method error(_)atPosition(_,_), line 504
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("error(_)atPosition(_,_)", 0, numArgs - 3);
    }
    setLineNumber(505);    // compilenode array
    var array259 = new GraceSequence([]);
    // call case 2: outer request
    var call258 = selfRequest(importedModules["errormessages"], "error(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errLinenum, var_errpos, array259);
    return call258;
  };    // end of method error(_)atPosition(_,_)
  this.methods["error(1)atPosition(2)"] = func257;
  func257.methodName = "error(1)atPosition(2)";
  func257.paramCounts = [1, 2];
  func257.paramNames = ["message", "errLinenum", "errpos"];
  func257.definitionLine = 504;
  func257.definitionModule = "errormessages";
  var func260 = function(argcv, var_message, var_errLinenum, var_errpos, var_suggestion__39__) {    // method syntaxError(_)atPosition(_,_)withSuggestion(_), line 508
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("syntaxError(_)atPosition(_,_)withSuggestion(_)", 0, numArgs - 4);
    }
    setLineNumber(509);    // compilenode array
    var array262 = new GraceSequence([var_suggestion__39__]);
    // call case 2: outer request
    var call261 = selfRequest(importedModules["errormessages"], "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errLinenum, var_errpos, array262);
    return call261;
  };    // end of method syntaxError(_)atPosition(_,_)withSuggestion(_)
  this.methods["syntaxError(1)atPosition(2)withSuggestion(1)"] = func260;
  func260.methodName = "syntaxError(1)atPosition(2)withSuggestion(1)";
  func260.paramCounts = [1, 2, 1];
  func260.paramNames = ["message", "errLinenum", "errpos", "suggestion'"];
  func260.definitionLine = 508;
  func260.definitionModule = "errormessages";
  var func263 = function(argcv, var_message, var_errLinenum, var_errpos, var_suggestions) {    // method syntaxError(_)atPosition(_,_)withSuggestions(_), line 512
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("syntaxError(_)atPosition(_,_)withSuggestions(_)", 0, numArgs - 4);
    }
    setLineNumber(513);    // compilenode string
    var string264 = new GraceString("-");
    var diff265 = request(var_errpos, "-(1)", [1], new GraceNum(1));
    var prod266 = request(string264, "*(1)", [1], diff265);
    var string267 = new GraceString("^");
    var opresult268 = request(prod266, "++(1)", [1], string267);
    var var_arr = opresult268;
    setLineNumber(514);    // compilenode string
    var string270 = new GraceString(":");
    var opresult271 = request(string270, "++(1)", [1], var_errpos);
    var string272 = new GraceString("");
    var opresult273 = request(opresult271, "++(1)", [1], string272);
    // call case 2: outer request
    var call269 = selfRequest(importedModules["errormessages"], "syntaxError(5)", [5], var_message, var_errLinenum, opresult273, var_arr, var_suggestions);
    return call269;
  };    // end of method syntaxError(_)atPosition(_,_)withSuggestions(_)
  this.methods["syntaxError(1)atPosition(2)withSuggestions(1)"] = func263;
  func263.methodName = "syntaxError(1)atPosition(2)withSuggestions(1)";
  func263.paramCounts = [1, 2, 1];
  func263.paramNames = ["message", "errLinenum", "errpos", "suggestions"];
  func263.definitionLine = 512;
  func263.definitionModule = "errormessages";
  var func274 = function(argcv, var_message, var_errLinenum, var_errPosition, var_suggestions) {    // method error(_)atPosition(_,_)withSuggestions(_), line 517
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 4) && (numArgs !== 4)) {
        raiseTypeArgError("error(_)atPosition(_,_)withSuggestions(_)", 0, numArgs - 4);
    }
    setLineNumber(519);    // compilenode string
    var string275 = new GraceString("^");
    var var_arr = string275;
    setLineNumber(521);    // compilenode object
    var obj276_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_errormessages_521");
      this.outer_errormessages_521 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.lineNum = undefined;
      var reader277_lineNum = function() {  // reader method lineNum
          if (this.data.lineNum === undefined) raiseUninitializedVariable("lineNum");
          return this.data.lineNum;
      };
      reader277_lineNum.isDef = true;
      this.methods["lineNum"] = reader277_lineNum;
      this.data.position = undefined;
      var reader278_position = function() {  // reader method position
          if (this.data.position === undefined) raiseUninitializedVariable("position");
          return this.data.position;
      };
      reader278_position.isDef = true;
      this.methods["position"] = reader278_position;
      this.data.arrow = undefined;
      var reader279_arrow = function() {  // reader method arrow
          if (this.data.arrow === undefined) raiseUninitializedVariable("arrow");
          return this.data.arrow;
      };
      reader279_arrow.isDef = true;
      this.methods["arrow"] = reader279_arrow;
      this.data.sugg = undefined;
      var reader280_sugg = function() {  // reader method sugg
          if (this.data.sugg === undefined) raiseUninitializedVariable("sugg");
          return this.data.sugg;
      };
      reader280_sugg.isDef = true;
      this.methods["sugg"] = reader280_sugg;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 521;
          m.definitionModule = "errormessages";
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
      var obj276_init = function() {    // init of object on line 521
        this.data.lineNum = var_errLinenum;
        this.data.position = var_errPosition;
        this.data.arrow = var_arr;
        this.data.sugg = var_suggestions;
      };
      return obj276_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj276 = emptyGraceObject("errorObj", "errormessages", 521);
    var obj276_init = obj276_build.call(obj276, null, this, [], []);
    obj276_init.call(obj276);  // end of compileobject
    var var_errorObj = obj276;
    setLineNumber(527);    // compilenode call
    // call case 6: other requests
    if (var_CompilationError === undefined) raiseUninitializedVariable("CompilationError");
    var call281 = request(var_CompilationError, "raise(1)with(1)", [1, 1], var_message, var_errorObj);
    return call281;
  };    // end of method error(_)atPosition(_,_)withSuggestions(_)
  this.methods["error(1)atPosition(2)withSuggestions(1)"] = func274;
  func274.methodName = "error(1)atPosition(2)withSuggestions(1)";
  func274.paramCounts = [1, 2, 1];
  func274.paramNames = ["message", "errLinenum", "errPosition", "suggestions"];
  func274.definitionLine = 517;
  func274.definitionModule = "errormessages";
  var func282 = function(argcv, var_message) {    // method error(_), line 530
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("error(_)", 0, numArgs - 1);
    }
    setLineNumber(531);    // compilenode string
    var string284 = new GraceString("");
    var array285 = new GraceSequence([]);
    // call case 2: outer request
    var call283 = selfRequest(importedModules["errormessages"], "error(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, new GraceNum(0), string284, array285);
    return call283;
  };    // end of method error(_)
  this.methods["error(1)"] = func282;
  func282.methodName = "error(1)";
  func282.paramCounts = [1];
  func282.paramNames = ["message"];
  func282.definitionLine = 530;
  func282.definitionModule = "errormessages";
  var func286 = function(argcv, var_message, var_errLinenum, var_suggestions) {    // method error(_)atLine(_)withSuggestions(_), line 534
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("error(_)atLine(_)withSuggestions(_)", 0, numArgs - 3);
    }
    var if287 = GraceDone;
    setLineNumber(535);    // compilenode num
    var opresult288 = request(var_errLinenum, ">(1)", [1], new GraceNum(0));
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call290 = request(var_util, "lines", [0]);
    var call289 = request(call290, "size", [0]);
    var opresult291 = request(var_errLinenum, "\u2264(1)", [1], call289);
    var opresult292 = request(opresult288, "&&(1)", [1], opresult291);
    if (Grace_isTrue(opresult292)) {
      setLineNumber(536);    // compilenode string
      var string293 = new GraceString("^");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      if (var_util === undefined) raiseUninitializedVariable("util");
      var call296 = request(var_util, "lines", [0]);
      var call295 = request(call296, "at(1)", [1], var_errLinenum);
      var call294 = request(call295, "size", [0]);
      var prod297 = request(string293, "*(1)", [1], call294);
      if287 = prod297;
    } else {
      setLineNumber(538);    // compilenode string
      var string298 = new GraceString("^");
      if287 = string298;
    }
    var var_arr = if287;
    setLineNumber(540);    // compilenode object
    var obj299_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_errormessages_540");
      this.outer_errormessages_540 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.lineNum = undefined;
      var reader300_lineNum = function() {  // reader method lineNum
          if (this.data.lineNum === undefined) raiseUninitializedVariable("lineNum");
          return this.data.lineNum;
      };
      reader300_lineNum.isDef = true;
      this.methods["lineNum"] = reader300_lineNum;
      this.data.position = undefined;
      var reader301_position = function() {  // reader method position
          if (this.data.position === undefined) raiseUninitializedVariable("position");
          return this.data.position;
      };
      reader301_position.isDef = true;
      this.methods["position"] = reader301_position;
      this.data.arrow = undefined;
      var reader302_arrow = function() {  // reader method arrow
          if (this.data.arrow === undefined) raiseUninitializedVariable("arrow");
          return this.data.arrow;
      };
      reader302_arrow.isDef = true;
      this.methods["arrow"] = reader302_arrow;
      this.data.sugg = undefined;
      var reader303_sugg = function() {  // reader method sugg
          if (this.data.sugg === undefined) raiseUninitializedVariable("sugg");
          return this.data.sugg;
      };
      reader303_sugg.isDef = true;
      this.methods["sugg"] = reader303_sugg;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 540;
          m.definitionModule = "errormessages";
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
      var obj299_init = function() {    // init of object on line 540
        this.data.lineNum = var_errLinenum;
        setLineNumber(542);    // compilenode string
        var string304 = new GraceString("");
        this.data.position = string304;
        this.data.arrow = var_arr;
        this.data.sugg = var_suggestions;
      };
      return obj299_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj299 = emptyGraceObject("errorObj", "errormessages", 540);
    var obj299_init = obj299_build.call(obj299, null, this, [], []);
    obj299_init.call(obj299);  // end of compileobject
    var var_errorObj = obj299;
    setLineNumber(546);    // compilenode call
    // call case 6: other requests
    if (var_CompilationError === undefined) raiseUninitializedVariable("CompilationError");
    var call305 = request(var_CompilationError, "raise(1)with(1)", [1, 1], var_message, var_errorObj);
    return call305;
  };    // end of method error(_)atLine(_)withSuggestions(_)
  this.methods["error(1)atLine(1)withSuggestions(1)"] = func286;
  func286.methodName = "error(1)atLine(1)withSuggestions(1)";
  func286.paramCounts = [1, 1, 1];
  func286.paramNames = ["message", "errLinenum", "suggestions"];
  func286.definitionLine = 534;
  func286.definitionModule = "errormessages";
  var func306 = function(argcv, var_message, var_errLinenum) {    // method error(_)atLine(_), line 550
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("error(_)atLine(_)", 0, numArgs - 2);
    }
    setLineNumber(551);    // compilenode array
    var array308 = new GraceSequence([]);
    // call case 2: outer request
    var call307 = selfRequest(importedModules["errormessages"], "error(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errLinenum, array308);
    return call307;
  };    // end of method error(_)atLine(_)
  this.methods["error(1)atLine(1)"] = func306;
  func306.methodName = "error(1)atLine(1)";
  func306.paramCounts = [1, 1];
  func306.paramNames = ["message", "errLinenum"];
  func306.definitionLine = 550;
  func306.definitionModule = "errormessages";
  var func309 = function(argcv, var_message, var_errLinenum) {    // method syntaxError(_)atLine(_), line 554
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("syntaxError(_)atLine(_)", 0, numArgs - 2);
    }
    setLineNumber(555);    // compilenode array
    var array311 = new GraceSequence([]);
    // call case 2: outer request
    var call310 = selfRequest(importedModules["errormessages"], "syntaxError(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errLinenum, array311);
    return call310;
  };    // end of method syntaxError(_)atLine(_)
  this.methods["syntaxError(1)atLine(1)"] = func309;
  func309.methodName = "syntaxError(1)atLine(1)";
  func309.paramCounts = [1, 1];
  func309.paramNames = ["message", "errLinenum"];
  func309.definitionLine = 554;
  func309.definitionModule = "errormessages";
  var func312 = function(argcv, var_message, var_errLinenum, var_suggestion__39__) {    // method syntaxError(_)atLine(_)withSuggestion(_), line 558
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("syntaxError(_)atLine(_)withSuggestion(_)", 0, numArgs - 3);
    }
    setLineNumber(559);    // compilenode array
    var array314 = new GraceSequence([var_suggestion__39__]);
    // call case 2: outer request
    var call313 = selfRequest(importedModules["errormessages"], "syntaxError(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errLinenum, array314);
    return call313;
  };    // end of method syntaxError(_)atLine(_)withSuggestion(_)
  this.methods["syntaxError(1)atLine(1)withSuggestion(1)"] = func312;
  func312.methodName = "syntaxError(1)atLine(1)withSuggestion(1)";
  func312.paramCounts = [1, 1, 1];
  func312.paramNames = ["message", "errLinenum", "suggestion'"];
  func312.definitionLine = 558;
  func312.definitionModule = "errormessages";
  var func315 = function(argcv, var_message, var_errLinenum, var_suggestions) {    // method syntaxError(_)atLine(_)withSuggestions(_), line 562
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("syntaxError(_)atLine(_)withSuggestions(_)", 0, numArgs - 3);
    }
    setLineNumber(563);    // compilenode string
    var string316 = new GraceString("^");
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    if (var_util === undefined) raiseUninitializedVariable("util");
    var call319 = request(var_util, "lines", [0]);
    var call318 = request(call319, "at(1)", [1], var_errLinenum);
    var call317 = request(call318, "size", [0]);
    var prod320 = request(string316, "*(1)", [1], call317);
    var var_arr = prod320;
    setLineNumber(564);    // compilenode string
    var string322 = new GraceString("");
    // call case 2: outer request
    var call321 = selfRequest(importedModules["errormessages"], "syntaxError(5)", [5], var_message, var_errLinenum, string322, var_arr, var_suggestions);
    return call321;
  };    // end of method syntaxError(_)atLine(_)withSuggestions(_)
  this.methods["syntaxError(1)atLine(1)withSuggestions(1)"] = func315;
  func315.methodName = "syntaxError(1)atLine(1)withSuggestions(1)";
  func315.paramCounts = [1, 1, 1];
  func315.paramNames = ["message", "errLinenum", "suggestions"];
  func315.definitionLine = 562;
  func315.definitionModule = "errormessages";
  setLineNumber(5);    // compilenode object
  var obj323_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_errormessages_5");
    this.outer_errormessages_5 = outerObj;
    const inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        const exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth]; };
    var func324 = function(argcv) {    // method new, line 14
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 1;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("new", 0, numArgs - 0);
      }
      var ouc = emptyGraceObject("suggestion.new", "errormessages", 14);
      var ouc_init = this.methods["new$build(3)"].call(this, null, ouc, [], []);
      ouc_init.call(ouc);
      return ouc;
    };    // end of method new
    this.methods["new"] = func324;
    func324.methodName = "new";
    func324.paramCounts = [0];
    func324.paramNames = [];
    func324.definitionLine = 14;
    func324.definitionModule = "errormessages";
    var func325 = function(argcv, inheritingObject, aliases, exclusions) {    // method new$build(_,_,_), line 14
      var returnTarget = invocationCount;
      invocationCount++;
      const numArgs = arguments.length - 4;
      if ((numArgs > 0) && (numArgs !== 0)) {
          raiseTypeArgError("new", 0, numArgs - 0);
      }
      var obj326_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_errormessages_14");
        this.outer_errormessages_14 = outerObj;
        const inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            const exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth]; };
        setLineNumber(15);    // reuse call
        var initFun327 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
        this.data.lineNumbers = undefined;
        var reader328_lineNumbers = function() {  // reader method lineNumbers
            if (this.data.lineNumbers === undefined) raiseUninitializedVariable("lineNumbers");
            return this.data.lineNumbers;
        };
        reader328_lineNumbers.isDef = true;
        this.methods["lineNumbers"] = reader328_lineNumbers;
        this.data.lines = undefined;
        var reader329_lines = function() {  // reader method lines
            if (this.data.lines === undefined) raiseUninitializedVariable("lines");
            return this.data.lines;
        };
        reader329_lines.isDef = true;
        this.methods["lines"] = reader329_lines;
        var func330 = function(argcv, var_other) {    // method ==(_), line 20
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("==(_)", 0, numArgs - 1);
          }
          var if331 = GraceDone;
          setLineNumber(21);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call332 = selfRequest(this, "lineNumbers", [0]);
          // call case 6: other requests
          var call333 = request(var_other, "lineNumbers", [0]);
          var opresult334 = request(call332, "==(1)", [1], call333);
          if (Grace_isTrue(opresult334)) {
            var if335 = GraceDone;
            setLineNumber(22);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call336 = selfRequest(this, "lines", [0]);
            // call case 6: other requests
            var call337 = request(var_other, "lines", [0]);
            var opresult338 = request(call336, "==(1)", [1], call337);
            if (Grace_isTrue(opresult338)) {
              return GraceTrue;
            }
            if331 = if335;
          }
          setLineNumber(24);    // compilenode return
          return GraceFalse;
        };    // end of method ==(_)
        this.methods["==(1)"] = func330;
        func330.methodName = "==(1)";
        func330.paramCounts = [1];
        func330.paramNames = ["other"];
        func330.definitionLine = 20;
        func330.definitionModule = "errormessages";
        var func339 = function(argcv) {    // method hash, line 27
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("hash", 0, numArgs - 0);
          }
          setLineNumber(27);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call341 = selfRequest(this, "lines", [0]);
          var call340 = request(call341, "hash", [0]);
          return call340;
        };    // end of method hash
        this.methods["hash"] = func339;
        func339.methodName = "hash";
        func339.paramCounts = [0];
        func339.paramNames = [];
        func339.definitionLine = 27;
        func339.definitionModule = "errormessages";
        var func342 = function(argcv, var_start, var_end, var_s, var_lineNumber) {    // method replaceRange(_,_)with(_)onLine(_), line 34
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 4) && (numArgs !== 4)) {
              raiseTypeArgError("replaceRange(_,_)with(_)onLine(_)", 0, numArgs - 4);
          }
          setLineNumber(35);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call343 = selfRequest(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call343;
          setLineNumber(36);    // compilenode member
          // call case 6: other requests
          var call344 = request(var_line, "size", [0]);
          var var_size = call344;
          var if345 = GraceDone;
          setLineNumber(37);    // compilenode num
          var opresult346 = request(var_size, "==(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult346)) {
            setLineNumber(38);    // compilenode call
            // call case 4: self request with 2 args and 0 typeArgs 
            var call347 = selfRequest(this, "addLine(2)", [2], var_lineNumber, var_s);
            if345 = call347;
          } else {
            setLineNumber(40);    // compilenode call
            if (var_size === undefined) raiseUninitializedVariable("size");
            // call case 2: outer request
            var call348 = selfRequest(var_prelude, "min(2)", [2], var_start, var_size);
            var var_newStart = call348;
            setLineNumber(41);    // compilenode call
            if (var_size === undefined) raiseUninitializedVariable("size");
            // call case 2: outer request
            var call349 = selfRequest(var_prelude, "min(2)", [2], var_end, var_size);
            var var_newEnd = call349;
            setLineNumber(42);    // compilenode op
            if (var_newStart === undefined) raiseUninitializedVariable("newStart");
            var diff352 = request(var_newStart, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call351 = request(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff352);
            var opresult353 = request(call351, "++(1)", [1], var_s);
            setLineNumber(43);    // compilenode op
            if (var_newEnd === undefined) raiseUninitializedVariable("newEnd");
            var sum355 = request(var_newEnd, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call354 = request(var_line, "substringFrom(1)", [1], sum355);
            var opresult356 = request(opresult353, "++(1)", [1], call354);
            // call case 4: self request with 2 args and 0 typeArgs 
            var call350 = selfRequest(this, "addLine(2)", [2], var_lineNumber, opresult356);
            if345 = call350;
          }
          return if345;
        };    // end of method replaceRange(_,_)with(_)onLine(_)
        this.methods["replaceRange(2)with(1)onLine(1)"] = func342;
        func342.methodName = "replaceRange(2)with(1)onLine(1)";
        func342.paramCounts = [2, 1, 1];
        func342.paramNames = ["start", "end", "s", "lineNumber"];
        func342.definitionLine = 34;
        func342.definitionModule = "errormessages";
        var func357 = function(argcv, var_pos, var_s, var_lineNumber) {    // method replaceChar(_)with(_)onLine(_), line 47
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("replaceChar(_)with(_)onLine(_)", 0, numArgs - 3);
          }
          setLineNumber(48);    // compilenode call
          // call case 4: self request with 4 args and 0 typeArgs 
          var call358 = selfRequest(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, var_s, var_lineNumber);
          return call358;
        };    // end of method replaceChar(_)with(_)onLine(_)
        this.methods["replaceChar(1)with(1)onLine(1)"] = func357;
        func357.methodName = "replaceChar(1)with(1)onLine(1)";
        func357.paramCounts = [1, 1, 1];
        func357.paramNames = ["pos", "s", "lineNumber"];
        func357.definitionLine = 47;
        func357.definitionModule = "errormessages";
        var func359 = function(argcv, var_until, var_s, var_lineNumber) {    // method replaceUntil(_)with(_)onLine(_), line 51
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("replaceUntil(_)with(_)onLine(_)", 0, numArgs - 3);
          }
          setLineNumber(52);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call360 = selfRequest(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call360;
          setLineNumber(53);    // compilenode member
          // call case 6: other requests
          var call361 = request(var_until, "size", [0]);
          var var_len = call361;
          setLineNumber(54);    // compilenode member
          // call case 6: other requests
          var call363 = request(var_line, "size", [0]);
          var opresult364 = request(new GraceNum(1), "..(1)", [1], call363);
          var block365 = new GraceBlock(this, 54, 1);
          block365.guard = jsTrue;
          block365.real = function block365(var_i) {
            var if366 = GraceDone;
            setLineNumber(55);    // compilenode op
            if (var_len === undefined) raiseUninitializedVariable("len");
            var sum368 = request(var_i, "+(1)", [1], var_len);
            var diff369 = request(sum368, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call367 = request(var_line, "substringFrom(1)to(1)", [1, 1], var_i, diff369);
            var opresult370 = request(call367, "==(1)", [1], var_until);
            if (Grace_isTrue(opresult370)) {
              setLineNumber(56);    // compilenode op
              if (var_len === undefined) raiseUninitializedVariable("len");
              var sum372 = request(var_i, "+(1)", [1], var_len);
              var diff373 = request(sum372, "-(1)", [1], new GraceNum(1));
              // call case 4: self request with 4 args and 0 typeArgs 
              var call371 = selfRequest(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], new GraceNum(1), diff373, var_s, var_lineNumber);
              setLineNumber(57);    // compilenode return
              throw new ReturnException(GraceTrue, returnTarget);
            }
            return if366;
          };
          let applyMeth365 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth365.methodName = "apply(1)";
          applyMeth365.paramCounts = [1];
          applyMeth365.paramNames = ["i"];
          applyMeth365.definitionLine = 54;
          applyMeth365.definitionModule = "errormessages";
          block365.methods["apply(1)"] = applyMeth365;
          let matchesMeth365 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth365.methodName = "matches(1)";
          matchesMeth365.paramCounts = [1];
          matchesMeth365.paramNames = ["i"];
          matchesMeth365.definitionLine = 54;
          matchesMeth365.definitionModule = "errormessages";
          block365.methods["matches(1)"] = matchesMeth365;
          // call case 2: outer request
          var call362 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult364, block365);
          setLineNumber(60);    // compilenode return
          return GraceFalse;
        };    // end of method replaceUntil(_)with(_)onLine(_)
        this.methods["replaceUntil(1)with(1)onLine(1)"] = func359;
        func359.methodName = "replaceUntil(1)with(1)onLine(1)";
        func359.paramCounts = [1, 1, 1];
        func359.paramNames = ["until", "s", "lineNumber"];
        func359.definitionLine = 51;
        func359.definitionModule = "errormessages";
        var func374 = function(argcv, var_start, var_end, var_lineNumber) {    // method deleteRange(_,_)onLine(_), line 63
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("deleteRange(_,_)onLine(_)", 0, numArgs - 3);
          }
          setLineNumber(64);    // compilenode vardec
          var var_start__39__ = var_start;
          setLineNumber(65);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call375 = selfRequest(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call375;
          var if376 = GraceDone;
          setLineNumber(66);    // compilenode num
          var opresult377 = request(var_start, ">(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call378 = request(var_line, "size", [0]);
          var opresult379 = request(var_end, "==(1)", [1], call378);
          var opresult380 = request(opresult377, "&&(1)", [1], opresult379);
          var opresult381 = request(var_start, "\u2264(1)", [1], var_end);
          var opresult382 = request(opresult380, "&&(1)", [1], opresult381);
          if (Grace_isTrue(opresult382)) {
            setLineNumber(68);    // compilenode vardec
            var var_indent = GraceTrue;
            setLineNumber(69);    // compilenode op
            if (var_start__39__ === undefined) raiseUninitializedVariable("start'");
            var diff384 = request(var_start__39__, "-(1)", [1], new GraceNum(1));
            var opresult385 = request(new GraceNum(1), "..(1)", [1], diff384);
            var block386 = new GraceBlock(this, 69, 1);
            block386.guard = jsTrue;
            block386.real = function block386(var_i) {
              var if387 = GraceDone;
              setLineNumber(70);    // compilenode call
              // call case 6: other requests
              if (var_line === undefined) raiseUninitializedVariable("line");
              var call388 = request(var_line, "at(1)", [1], var_i);
              var string389 = new GraceString(" ");
              var opresult390 = request(call388, "\u2260(1)", [1], string389);
              if (Grace_isTrue(opresult390)) {
                setLineNumber(71);    // compilenode bind
                var_indent = GraceFalse;
                if387 = GraceDone;
              }
              return if387;
            };
            let applyMeth386 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth386.methodName = "apply(1)";
            applyMeth386.paramCounts = [1];
            applyMeth386.paramNames = ["i"];
            applyMeth386.definitionLine = 69;
            applyMeth386.definitionModule = "errormessages";
            block386.methods["apply(1)"] = applyMeth386;
            let matchesMeth386 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth386.methodName = "matches(1)";
            matchesMeth386.paramCounts = [1];
            matchesMeth386.paramNames = ["i"];
            matchesMeth386.definitionLine = 69;
            matchesMeth386.definitionModule = "errormessages";
            block386.methods["matches(1)"] = matchesMeth386;
            // call case 2: outer request
            var call383 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult385, block386);
            var if391 = GraceDone;
            setLineNumber(74);    // compilenode op
            if (var_indent === undefined) raiseUninitializedVariable("indent");
            var opresult392 = request(var_indent, "==(1)", [1], GraceTrue);
            if (Grace_isTrue(opresult392)) {
              setLineNumber(75);    // compilenode num
              var_start__39__ = new GraceNum(1);
              if391 = GraceDone;
            }
            if376 = if391;
          }
          setLineNumber(78);    // compilenode string
          var string394 = new GraceString("");
          // call case 4: self request with 4 args and 0 typeArgs 
          var call393 = selfRequest(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start__39__, var_end, string394, var_lineNumber);
          return call393;
        };    // end of method deleteRange(_,_)onLine(_)
        this.methods["deleteRange(2)onLine(1)"] = func374;
        func374.methodName = "deleteRange(2)onLine(1)";
        func374.paramCounts = [2, 1];
        func374.paramNames = ["start", "end", "lineNumber"];
        func374.definitionLine = 63;
        func374.definitionModule = "errormessages";
        var func395 = function(argcv, var_pos, var_lineNumber) {    // method deleteChar(_)onLine(_), line 81
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("deleteChar(_)onLine(_)", 0, numArgs - 2);
          }
          setLineNumber(82);    // compilenode string
          var string397 = new GraceString("");
          // call case 4: self request with 4 args and 0 typeArgs 
          var call396 = selfRequest(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, string397, var_lineNumber);
          return call396;
        };    // end of method deleteChar(_)onLine(_)
        this.methods["deleteChar(1)onLine(1)"] = func395;
        func395.methodName = "deleteChar(1)onLine(1)";
        func395.paramCounts = [1, 1];
        func395.paramNames = ["pos", "lineNumber"];
        func395.definitionLine = 81;
        func395.definitionModule = "errormessages";
        var func398 = function(argcv, var_s, var_lineNumber) {    // method append(_)onLine(_), line 85
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("append(_)onLine(_)", 0, numArgs - 2);
          }
          setLineNumber(86);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call399 = selfRequest(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call399;
          setLineNumber(87);    // compilenode op
          var opresult401 = request(var_line, "++(1)", [1], var_s);
          // call case 4: self request with 2 args and 0 typeArgs 
          var call400 = selfRequest(this, "addLine(2)", [2], var_lineNumber, opresult401);
          return call400;
        };    // end of method append(_)onLine(_)
        this.methods["append(1)onLine(1)"] = func398;
        func398.methodName = "append(1)onLine(1)";
        func398.paramCounts = [1, 1];
        func398.paramNames = ["s", "lineNumber"];
        func398.definitionLine = 85;
        func398.definitionModule = "errormessages";
        var func402 = function(argcv, var_s, var_pos, var_lineNumber) {    // method insert(_)atPosition(_)onLine(_), line 90
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("insert(_)atPosition(_)onLine(_)", 0, numArgs - 3);
          }
          setLineNumber(91);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call403 = selfRequest(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call403;
          var if404 = GraceDone;
          setLineNumber(92);    // compilenode member
          // call case 6: other requests
          var call405 = request(var_line, "size", [0]);
          var opresult406 = request(var_pos, ">(1)", [1], call405);
          if (Grace_isTrue(opresult406)) {
            setLineNumber(93);    // compilenode op
            if (var_line === undefined) raiseUninitializedVariable("line");
            var opresult408 = request(var_line, "++(1)", [1], var_s);
            // call case 4: self request with 2 args and 0 typeArgs 
            var call407 = selfRequest(this, "addLine(2)", [2], var_lineNumber, opresult408);
            if404 = call407;
          } else {
            setLineNumber(95);    // compilenode num
            var diff411 = request(var_pos, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call410 = request(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff411);
            var opresult412 = request(call410, "++(1)", [1], var_s);
            setLineNumber(96);    // compilenode member
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call414 = request(var_line, "size", [0]);
            // call case 6: other requests
            if (var_line === undefined) raiseUninitializedVariable("line");
            var call413 = request(var_line, "substringFrom(1)to(1)", [1, 1], var_pos, call414);
            var opresult415 = request(opresult412, "++(1)", [1], call413);
            // call case 4: self request with 2 args and 0 typeArgs 
            var call409 = selfRequest(this, "addLine(2)", [2], var_lineNumber, opresult415);
            if404 = call409;
          }
          return if404;
        };    // end of method insert(_)atPosition(_)onLine(_)
        this.methods["insert(1)atPosition(1)onLine(1)"] = func402;
        func402.methodName = "insert(1)atPosition(1)onLine(1)";
        func402.paramCounts = [1, 1, 1];
        func402.paramNames = ["s", "pos", "lineNumber"];
        func402.definitionLine = 90;
        func402.definitionModule = "errormessages";
        var func416 = function(argcv, var_token, var_includeLeading) {    // method getTokenStart(_)includeLeadingSpace(_), line 104
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("getTokenStart(_)includeLeadingSpace(_)", 0, numArgs - 2);
          }
          setLineNumber(105);    // compilenode member
          // call case 6: other requests
          var call417 = request(var_token, "linePos", [0]);
          var var_start = call417;
          var if418 = GraceDone;
          setLineNumber(107);    // compilenode op
          var opresult419 = request(GraceTrue, "==(1)", [1], var_includeLeading);
          if (Grace_isTrue(opresult419)) {
            var if420 = GraceDone;
            setLineNumber(108);    // compilenode member
            // call case 6: other requests
            var call421 = request(var_token, "hasPrev", [0]);
            var block422 = new GraceBlock(this, 108, 0);
            block422.guard = jsTrue;
            block422.real = function block422() {
              setLineNumber(108);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call424 = request(var_token, "prev", [0]);
              var call423 = request(call424, "line", [0]);
              // call case 6: other requests
              var call425 = request(var_token, "line", [0]);
              var opresult426 = request(call423, "==(1)", [1], call425);
              return opresult426;
            };
            let applyMeth422 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth422.methodName = "apply";
            applyMeth422.paramCounts = [0];
            applyMeth422.paramNames = [];
            applyMeth422.definitionLine = 108;
            applyMeth422.definitionModule = "errormessages";
            block422.methods["apply"] = applyMeth422;
            var opresult427 = request(call421, "&&(1)", [1], block422);
            if (Grace_isTrue(opresult427)) {
              setLineNumber(109);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call429 = request(var_token, "prev", [0]);
              var call428 = request(call429, "linePos", [0]);
              // call case 6: other requests
              // call case 6: other requests
              var call431 = request(var_token, "prev", [0]);
              var call430 = request(call431, "size", [0]);
              var sum432 = request(call428, "+(1)", [1], call430);
              var_start = sum432;
              if420 = GraceDone;
            }
            if418 = if420;
          }
          var if433 = GraceDone;
          setLineNumber(113);    // compilenode member
          // call case 6: other requests
          var call434 = request(var_token, "linePos", [0]);
          // call case 6: other requests
          var call435 = request(var_token, "indent", [0]);
          var sum436 = request(call435, "+(1)", [1], new GraceNum(1));
          var opresult437 = request(call434, "==(1)", [1], sum436);
          if (Grace_isTrue(opresult437)) {
            var if438 = GraceDone;
            setLineNumber(114);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call440 = request(var_token, "hasNext", [0]);
            var call439 = request(call440, "not", [0]);
            var block441 = new GraceBlock(this, 114, 0);
            block441.guard = jsTrue;
            block441.real = function block441() {
              setLineNumber(114);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call443 = request(var_token, "next", [0]);
              var call442 = request(call443, "line", [0]);
              // call case 6: other requests
              var call444 = request(var_token, "line", [0]);
              var opresult445 = request(call442, "\u2260(1)", [1], call444);
              return opresult445;
            };
            let applyMeth441 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth441.methodName = "apply";
            applyMeth441.paramCounts = [0];
            applyMeth441.paramNames = [];
            applyMeth441.definitionLine = 114;
            applyMeth441.definitionModule = "errormessages";
            block441.methods["apply"] = applyMeth441;
            var opresult446 = request(call439, "||(1)", [1], block441);
            if (Grace_isTrue(opresult446)) {
              setLineNumber(115);    // compilenode num
              var_start = new GraceNum(1);
              if438 = GraceDone;
            }
            if433 = if438;
          }
          return var_start;
        };    // end of method getTokenStart(_)includeLeadingSpace(_)
        this.methods["getTokenStart(1)includeLeadingSpace(1)"] = func416;
        func416.methodName = "getTokenStart(1)includeLeadingSpace(1)";
        func416.paramCounts = [1, 1];
        func416.paramNames = ["token", "includeLeading"];
        func416.definitionLine = 104;
        func416.definitionModule = "errormessages";
        var func447 = function(argcv, var_token, var_includeTrailing) {    // method getTokenEnd(_)includeTrailingSpace(_), line 121
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("getTokenEnd(_)includeTrailingSpace(_)", 0, numArgs - 2);
          }
          setLineNumber(122);    // compilenode member
          // call case 6: other requests
          var call448 = request(var_token, "linePos", [0]);
          // call case 6: other requests
          var call449 = request(var_token, "size", [0]);
          var sum450 = request(call448, "+(1)", [1], call449);
          var diff451 = request(sum450, "-(1)", [1], new GraceNum(1));
          var var_end = diff451;
          var if452 = GraceDone;
          setLineNumber(124);    // compilenode op
          var opresult453 = request(GraceTrue, "==(1)", [1], var_includeTrailing);
          if (Grace_isTrue(opresult453)) {
            var if454 = GraceDone;
            setLineNumber(125);    // compilenode member
            // call case 6: other requests
            var call455 = request(var_token, "hasNext", [0]);
            var block456 = new GraceBlock(this, 125, 0);
            block456.guard = jsTrue;
            block456.real = function block456() {
              setLineNumber(125);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call458 = request(var_token, "next", [0]);
              var call457 = request(call458, "line", [0]);
              // call case 6: other requests
              var call459 = request(var_token, "line", [0]);
              var opresult460 = request(call457, "==(1)", [1], call459);
              return opresult460;
            };
            let applyMeth456 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth456.methodName = "apply";
            applyMeth456.paramCounts = [0];
            applyMeth456.paramNames = [];
            applyMeth456.definitionLine = 125;
            applyMeth456.definitionModule = "errormessages";
            block456.methods["apply"] = applyMeth456;
            var opresult461 = request(call455, "&&(1)", [1], block456);
            if (Grace_isTrue(opresult461)) {
              setLineNumber(126);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call463 = request(var_token, "next", [0]);
              var call462 = request(call463, "linePos", [0]);
              var diff464 = request(call462, "-(1)", [1], new GraceNum(1));
              var_end = diff464;
              if454 = GraceDone;
            } else {
              setLineNumber(128);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call467 = request(var_token, "line", [0]);
              // call case 4: self request with 1 args and 0 typeArgs 
              var call466 = selfRequest(this, "getLine(1)", [1], call467);
              var call465 = request(call466, "size", [0]);
              var_end = call465;
              if454 = GraceDone;
            }
            if452 = if454;
          }
          return var_end;
        };    // end of method getTokenEnd(_)includeTrailingSpace(_)
        this.methods["getTokenEnd(1)includeTrailingSpace(1)"] = func447;
        func447.methodName = "getTokenEnd(1)includeTrailingSpace(1)";
        func447.paramCounts = [1, 1];
        func447.paramNames = ["token", "includeTrailing"];
        func447.definitionLine = 121;
        func447.definitionModule = "errormessages";
        var func468 = function(argcv, var_token, var_replaceLeading, var_replaceTrailing, var_s) {    // method replaceToken(_)leading(_)trailing(_)with(_), line 134
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 4) && (numArgs !== 4)) {
              raiseTypeArgError("replaceToken(_)leading(_)trailing(_)with(_)", 0, numArgs - 4);
          }
          setLineNumber(135);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call469 = selfRequest(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_replaceLeading);
          var var_start = call469;
          setLineNumber(136);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call470 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_replaceTrailing);
          var var_end = call470;
          setLineNumber(137);    // compilenode member
          // call case 6: other requests
          var call472 = request(var_token, "line", [0]);
          // call case 4: self request with 4 args and 0 typeArgs 
          var call471 = selfRequest(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start, var_end, var_s, call472);
          return call471;
        };    // end of method replaceToken(_)leading(_)trailing(_)with(_)
        this.methods["replaceToken(1)leading(1)trailing(1)with(1)"] = func468;
        func468.methodName = "replaceToken(1)leading(1)trailing(1)with(1)";
        func468.paramCounts = [1, 1, 1, 1];
        func468.paramNames = ["token", "replaceLeading", "replaceTrailing", "s"];
        func468.definitionLine = 134;
        func468.definitionModule = "errormessages";
        var func473 = function(argcv, var_token, var_s) {    // method replaceToken(_)with(_), line 140
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("replaceToken(_)with(_)", 0, numArgs - 2);
          }
          setLineNumber(141);    // compilenode call
          // call case 4: self request with 4 args and 0 typeArgs 
          var call474 = selfRequest(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_token, GraceFalse, GraceFalse, var_s);
          return call474;
        };    // end of method replaceToken(_)with(_)
        this.methods["replaceToken(1)with(1)"] = func473;
        func473.methodName = "replaceToken(1)with(1)";
        func473.paramCounts = [1, 1];
        func473.paramNames = ["token", "s"];
        func473.definitionLine = 140;
        func473.definitionModule = "errormessages";
        var func475 = function(argcv, var_start, var_end, var_replaceLeading, var_replaceTrailing, var_s) {    // method replaceTokenRange(_,_)leading(_)trailing(_)with(_), line 144
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 5) && (numArgs !== 5)) {
              raiseTypeArgError("replaceTokenRange(_,_)leading(_)trailing(_)with(_)", 0, numArgs - 5);
          }
          var if476 = GraceDone;
          setLineNumber(145);    // compilenode op
          var opresult477 = request(var_start, "==(1)", [1], var_end);
          if (Grace_isTrue(opresult477)) {
            setLineNumber(146);    // compilenode call
            // call case 4: self request with 4 args and 0 typeArgs 
            var call478 = selfRequest(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_start, var_replaceLeading, var_replaceTrailing, var_s);
            if476 = call478;
          } else {
            setLineNumber(149);    // compilenode call
            // call case 4: self request with 2 args and 0 typeArgs 
            var call479 = selfRequest(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_replaceLeading);
            var var_insertPos = call479;
            setLineNumber(150);    // compilenode member
            // call case 6: other requests
            var call481 = request(var_start, "indent", [0]);
            // call case 6: other requests
            // call case 6: other requests
            var call483 = request(var_start, "line", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call482 = selfRequest(this, "getLine(1)", [1], call483);
            var call480 = request(call482, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), call481);
            var var_indent = call480;
            setLineNumber(151);    // compilenode call
            // call case 4: self request with 4 args and 0 typeArgs 
            var call484 = selfRequest(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, var_replaceLeading, var_replaceTrailing);
            var if485 = GraceDone;
            setLineNumber(153);    // compilenode member
            // call case 6: other requests
            var call487 = request(var_start, "line", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call486 = selfRequest(this, "getLine(1)", [1], call487);
            var string488 = new GraceString("");
            var opresult489 = request(call486, "==(1)", [1], string488);
            if (Grace_isTrue(opresult489)) {
              setLineNumber(154);    // compilenode op
              if (var_indent === undefined) raiseUninitializedVariable("indent");
              var opresult491 = request(var_indent, "++(1)", [1], var_s);
              if (var_insertPos === undefined) raiseUninitializedVariable("insertPos");
              // call case 6: other requests
              var call492 = request(var_start, "line", [0]);
              // call case 4: self request with 3 args and 0 typeArgs 
              var call490 = selfRequest(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], opresult491, var_insertPos, call492);
              if485 = call490;
            } else {
              setLineNumber(156);    // compilenode call
              if (var_insertPos === undefined) raiseUninitializedVariable("insertPos");
              // call case 6: other requests
              var call494 = request(var_start, "line", [0]);
              // call case 4: self request with 3 args and 0 typeArgs 
              var call493 = selfRequest(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_insertPos, call494);
              if485 = call493;
            }
            if476 = if485;
          }
          return if476;
        };    // end of method replaceTokenRange(_,_)leading(_)trailing(_)with(_)
        this.methods["replaceTokenRange(2)leading(1)trailing(1)with(1)"] = func475;
        func475.methodName = "replaceTokenRange(2)leading(1)trailing(1)with(1)";
        func475.paramCounts = [2, 1, 1, 1];
        func475.paramNames = ["start", "end", "replaceLeading", "replaceTrailing", "s"];
        func475.definitionLine = 144;
        func475.definitionModule = "errormessages";
        var func495 = function(argcv, var_start, var_end, var_s) {    // method replaceTokenRange(_,_)with(_), line 161
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("replaceTokenRange(_,_)with(_)", 0, numArgs - 3);
          }
          setLineNumber(162);    // compilenode call
          // call case 4: self request with 5 args and 0 typeArgs 
          var call496 = selfRequest(this, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_start, var_end, GraceFalse, GraceFalse, var_s);
          return call496;
        };    // end of method replaceTokenRange(_,_)with(_)
        this.methods["replaceTokenRange(2)with(1)"] = func495;
        func495.methodName = "replaceTokenRange(2)with(1)";
        func495.paramCounts = [2, 1];
        func495.paramNames = ["start", "end", "s"];
        func495.definitionLine = 161;
        func495.definitionModule = "errormessages";
        var func497 = function(argcv, var_token, var_deleteLeading, var_deleteTrailing) {    // method deleteToken(_)leading(_)trailing(_), line 166
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("deleteToken(_)leading(_)trailing(_)", 0, numArgs - 3);
          }
          setLineNumber(167);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call498 = selfRequest(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_deleteLeading);
          var var_start = call498;
          setLineNumber(168);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call499 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_deleteTrailing);
          var var_end = call499;
          setLineNumber(169);    // compilenode member
          // call case 6: other requests
          var call501 = request(var_token, "line", [0]);
          // call case 4: self request with 3 args and 0 typeArgs 
          var call500 = selfRequest(this, "deleteRange(2)onLine(1)", [2, 1], var_start, var_end, call501);
          return call500;
        };    // end of method deleteToken(_)leading(_)trailing(_)
        this.methods["deleteToken(1)leading(1)trailing(1)"] = func497;
        func497.methodName = "deleteToken(1)leading(1)trailing(1)";
        func497.paramCounts = [1, 1, 1];
        func497.paramNames = ["token", "deleteLeading", "deleteTrailing"];
        func497.definitionLine = 166;
        func497.definitionModule = "errormessages";
        var func502 = function(argcv, var_token) {    // method deleteToken(_), line 172
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("deleteToken(_)", 0, numArgs - 1);
          }
          setLineNumber(173);    // compilenode call
          // call case 4: self request with 3 args and 0 typeArgs 
          var call503 = selfRequest(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_token, GraceFalse, GraceFalse);
          return call503;
        };    // end of method deleteToken(_)
        this.methods["deleteToken(1)"] = func502;
        func502.methodName = "deleteToken(1)";
        func502.paramCounts = [1];
        func502.paramNames = ["token"];
        func502.definitionLine = 172;
        func502.definitionModule = "errormessages";
        var func504 = function(argcv, var_start, var_end, var_deleteLeading, var_deleteTrailing) {    // method deleteTokenRange(_,_)leading(_)trailing(_), line 177
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 4) && (numArgs !== 4)) {
              raiseTypeArgError("deleteTokenRange(_,_)leading(_)trailing(_)", 0, numArgs - 4);
          }
          var if505 = GraceDone;
          setLineNumber(178);    // compilenode op
          var opresult506 = request(var_start, "==(1)", [1], var_end);
          if (Grace_isTrue(opresult506)) {
            setLineNumber(179);    // compilenode call
            // call case 4: self request with 3 args and 0 typeArgs 
            var call507 = selfRequest(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_start, var_deleteLeading, var_deleteTrailing);
            if505 = call507;
          } else {
            setLineNumber(181);    // compilenode member
            // call case 6: other requests
            var call508 = request(var_start, "line", [0]);
            var var_line = call508;
            setLineNumber(182);    // compilenode call
            // call case 4: self request with 2 args and 0 typeArgs 
            var call509 = selfRequest(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_deleteLeading);
            var var_startPos = call509;
            setLineNumber(183);    // compilenode call
            // call case 4: self request with 2 args and 0 typeArgs 
            var call510 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_start, var_deleteTrailing);
            var var_endPos = call510;
            setLineNumber(184);    // compilenode member
            // call case 6: other requests
            var call511 = request(var_start, "next", [0]);
            var var_tok = call511;
            setLineNumber(185);    // compilenode block
            var block513 = new GraceBlock(this, 185, 0);
            block513.guard = jsTrue;
            block513.real = function block513() {
              setLineNumber(185);    // compilenode op
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var opresult514 = request(var_tok, "\u2260(1)", [1], var_end);
              return opresult514;
            };
            let applyMeth513 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth513.methodName = "apply";
            applyMeth513.paramCounts = [0];
            applyMeth513.paramNames = [];
            applyMeth513.definitionLine = 185;
            applyMeth513.definitionModule = "errormessages";
            block513.methods["apply"] = applyMeth513;
            var block515 = new GraceBlock(this, 185, 0);
            block515.guard = jsTrue;
            block515.real = function block515() {
              var if516 = GraceDone;
              setLineNumber(186);    // compilenode member
              // call case 6: other requests
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var call517 = request(var_tok, "line", [0]);
              if (var_line === undefined) raiseUninitializedVariable("line");
              var opresult518 = request(call517, "\u2260(1)", [1], var_line);
              if (Grace_isTrue(opresult518)) {
                setLineNumber(187);    // compilenode call
                if (var_startPos === undefined) raiseUninitializedVariable("startPos");
                if (var_endPos === undefined) raiseUninitializedVariable("endPos");
                if (var_line === undefined) raiseUninitializedVariable("line");
                // call case 4: self request with 3 args and 0 typeArgs 
                var call519 = selfRequest(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
                setLineNumber(188);    // compilenode member
                // call case 6: other requests
                if (var_tok === undefined) raiseUninitializedVariable("tok");
                var call520 = request(var_tok, "line", [0]);
                var_line = call520;
                setLineNumber(189);    // compilenode call
                if (var_tok === undefined) raiseUninitializedVariable("tok");
                // call case 4: self request with 2 args and 0 typeArgs 
                var call521 = selfRequest(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_tok, var_deleteLeading);
                var_startPos = call521;
                if516 = GraceDone;
              }
              setLineNumber(191);    // compilenode call
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              // call case 4: self request with 2 args and 0 typeArgs 
              var call522 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_tok, var_deleteTrailing);
              var_endPos = call522;
              setLineNumber(192);    // compilenode member
              // call case 6: other requests
              if (var_tok === undefined) raiseUninitializedVariable("tok");
              var call523 = request(var_tok, "next", [0]);
              var_tok = call523;
              return GraceDone;
            };
            let applyMeth515 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth515.methodName = "apply";
            applyMeth515.paramCounts = [0];
            applyMeth515.paramNames = [];
            applyMeth515.definitionLine = 185;
            applyMeth515.definitionModule = "errormessages";
            block515.methods["apply"] = applyMeth515;
            // call case 2: outer request
            var call512 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block513, block515);
            var if524 = GraceDone;
            setLineNumber(194);    // compilenode member
            // call case 6: other requests
            var call525 = request(var_end, "line", [0]);
            if (var_line === undefined) raiseUninitializedVariable("line");
            var opresult526 = request(call525, "\u2260(1)", [1], var_line);
            if (Grace_isTrue(opresult526)) {
              setLineNumber(195);    // compilenode call
              if (var_startPos === undefined) raiseUninitializedVariable("startPos");
              if (var_endPos === undefined) raiseUninitializedVariable("endPos");
              if (var_line === undefined) raiseUninitializedVariable("line");
              // call case 4: self request with 3 args and 0 typeArgs 
              var call527 = selfRequest(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
              if524 = call527;
            }
            setLineNumber(197);    // compilenode call
            // call case 4: self request with 2 args and 0 typeArgs 
            var call528 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_end, var_deleteTrailing);
            var_endPos = call528;
            setLineNumber(198);    // compilenode call
            if (var_startPos === undefined) raiseUninitializedVariable("startPos");
            if (var_endPos === undefined) raiseUninitializedVariable("endPos");
            // call case 6: other requests
            var call530 = request(var_end, "line", [0]);
            // call case 4: self request with 3 args and 0 typeArgs 
            var call529 = selfRequest(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, call530);
            if505 = call529;
          }
          return if505;
        };    // end of method deleteTokenRange(_,_)leading(_)trailing(_)
        this.methods["deleteTokenRange(2)leading(1)trailing(1)"] = func504;
        func504.methodName = "deleteTokenRange(2)leading(1)trailing(1)";
        func504.paramCounts = [2, 1, 1];
        func504.paramNames = ["start", "end", "deleteLeading", "deleteTrailing"];
        func504.definitionLine = 177;
        func504.definitionModule = "errormessages";
        var func531 = function(argcv, var_start, var_end) {    // method deleteTokenRange(_,_), line 202
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("deleteTokenRange(_,_)", 0, numArgs - 2);
          }
          setLineNumber(203);    // compilenode call
          // call case 4: self request with 4 args and 0 typeArgs 
          var call532 = selfRequest(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, GraceFalse, GraceFalse);
          return call532;
        };    // end of method deleteTokenRange(_,_)
        this.methods["deleteTokenRange(2)"] = func531;
        func531.methodName = "deleteTokenRange(2)";
        func531.paramCounts = [2];
        func531.paramNames = ["start", "end"];
        func531.definitionLine = 202;
        func531.definitionModule = "errormessages";
        var func533 = function(argcv, var_lineNumber) {    // method deleteLine(_), line 206
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("deleteLine(_)", 0, numArgs - 1);
          }
          setLineNumber(207);    // compilenode string
          var string535 = new GraceString("");
          // call case 4: self request with 2 args and 0 typeArgs 
          var call534 = selfRequest(this, "addLine(2)", [2], var_lineNumber, string535);
          return call534;
        };    // end of method deleteLine(_)
        this.methods["deleteLine(1)"] = func533;
        func533.methodName = "deleteLine(1)";
        func533.paramCounts = [1];
        func533.paramNames = ["lineNumber"];
        func533.definitionLine = 206;
        func533.definitionModule = "errormessages";
        var func536 = function(argcv, var_s, var_token, var_afterTrailing) {    // method insert(_)afterToken(_)andTrailingSpace(_), line 210
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 3) && (numArgs !== 3)) {
              raiseTypeArgError("insert(_)afterToken(_)andTrailingSpace(_)", 0, numArgs - 3);
          }
          setLineNumber(211);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call537 = selfRequest(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_afterTrailing);
          var sum538 = request(call537, "+(1)", [1], new GraceNum(1));
          var var_pos = sum538;
          setLineNumber(212);    // compilenode member
          // call case 6: other requests
          var call540 = request(var_token, "line", [0]);
          // call case 4: self request with 3 args and 0 typeArgs 
          var call539 = selfRequest(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_pos, call540);
          return call539;
        };    // end of method insert(_)afterToken(_)andTrailingSpace(_)
        this.methods["insert(1)afterToken(1)andTrailingSpace(1)"] = func536;
        func536.methodName = "insert(1)afterToken(1)andTrailingSpace(1)";
        func536.paramCounts = [1, 1, 1];
        func536.paramNames = ["s", "token", "afterTrailing"];
        func536.definitionLine = 210;
        func536.definitionModule = "errormessages";
        var func541 = function(argcv, var_s, var_token) {    // method insert(_)afterToken(_), line 215
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("insert(_)afterToken(_)", 0, numArgs - 2);
          }
          setLineNumber(216);    // compilenode call
          // call case 4: self request with 3 args and 0 typeArgs 
          var call542 = selfRequest(this, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], var_s, var_token, GraceFalse);
          return call542;
        };    // end of method insert(_)afterToken(_)
        this.methods["insert(1)afterToken(1)"] = func541;
        func541.methodName = "insert(1)afterToken(1)";
        func541.paramCounts = [1, 1];
        func541.paramNames = ["s", "token"];
        func541.definitionLine = 215;
        func541.definitionModule = "errormessages";
        var func543 = function(argcv, var_s, var_token) {    // method insert(_)beforeToken(_), line 219
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("insert(_)beforeToken(_)", 0, numArgs - 2);
          }
          setLineNumber(220);    // compilenode member
          // call case 6: other requests
          var call545 = request(var_token, "linePos", [0]);
          // call case 6: other requests
          var call546 = request(var_token, "line", [0]);
          // call case 4: self request with 3 args and 0 typeArgs 
          var call544 = selfRequest(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, call545, call546);
          return call544;
        };    // end of method insert(_)beforeToken(_)
        this.methods["insert(1)beforeToken(1)"] = func543;
        func543.methodName = "insert(1)beforeToken(1)";
        func543.paramCounts = [1, 1];
        func543.paramNames = ["s", "token"];
        func543.definitionLine = 219;
        func543.definitionModule = "errormessages";
        var func547 = function(argcv, var_line, var_lineNumber) {    // method insertNewLine(_)after(_), line 224
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("insertNewLine(_)after(_)", 0, numArgs - 2);
          }
          setLineNumber(225);    // compilenode call
          // call case 4: self request with 2 args and 0 typeArgs 
          var call548 = selfRequest(this, "addLine(2)", [2], var_lineNumber, var_line);
          return call548;
        };    // end of method insertNewLine(_)after(_)
        this.methods["insertNewLine(1)after(1)"] = func547;
        func547.methodName = "insertNewLine(1)after(1)";
        func547.paramCounts = [1, 1];
        func547.paramNames = ["line", "lineNumber"];
        func547.definitionLine = 224;
        func547.definitionModule = "errormessages";
        var func549 = function(argcv, var_lineNumber, var_line) {    // method addLine(_,_), line 230
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 2) && (numArgs !== 2)) {
              raiseTypeArgError("addLine(_,_)", 0, numArgs - 2);
          }
          setLineNumber(231);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call550 = selfRequest(this, "findLine(1)", [1], var_lineNumber);
          var var_i = call550;
          var if551 = GraceDone;
          setLineNumber(232);    // compilenode op
          var opresult552 = request(var_i, "\u2260(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult552)) {
            setLineNumber(233);    // compilenode call
            if (var_i === undefined) raiseUninitializedVariable("i");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call554 = selfRequest(this, "lines", [0]);
            var call553 = request(call554, "at(1)put(1)", [1, 1], var_i, var_line);
            if551 = call553;
          } else {
            setLineNumber(236);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call556 = selfRequest(this, "lineNumbers", [0]);
            var call555 = request(call556, "push(1)", [1], var_lineNumber);
            setLineNumber(237);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call558 = selfRequest(this, "lines", [0]);
            var call557 = request(call558, "push(1)", [1], var_line);
            var if559 = GraceDone;
            setLineNumber(238);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call561 = selfRequest(this, "lines", [0]);
            var call560 = request(call561, "size", [0]);
            var opresult562 = request(call560, ">(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult562)) {
              setLineNumber(240);    // compilenode member
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call564 = selfRequest(this, "lines", [0]);
              var call563 = request(call564, "size", [0]);
              var_i = call563;
              setLineNumber(241);    // compilenode block
              var block566 = new GraceBlock(this, 241, 0);
              block566.guard = jsTrue;
              block566.real = function block566() {
                setLineNumber(241);    // compilenode op
                if (var_i === undefined) raiseUninitializedVariable("i");
                var opresult567 = request(var_i, ">(1)", [1], new GraceNum(1));
                var block568 = new GraceBlock(this, 241, 0);
                block568.guard = jsTrue;
                block568.real = function block568() {
                  setLineNumber(241);    // compilenode op
                  if (var_i === undefined) raiseUninitializedVariable("i");
                  var diff570 = request(var_i, "-(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  // call case 4: self request with 0 args and 0 typeArgs 
                  var call571 = selfRequest(this, "lineNumbers", [0]);
                  var call569 = request(call571, "at(1)", [1], diff570);
                  var opresult572 = request(var_lineNumber, "<(1)", [1], call569);
                  return opresult572;
                };
                let applyMeth568 = function apply (argcv) {
                    return this.real.apply(this.receiver);
                };
                applyMeth568.methodName = "apply";
                applyMeth568.paramCounts = [0];
                applyMeth568.paramNames = [];
                applyMeth568.definitionLine = 241;
                applyMeth568.definitionModule = "errormessages";
                block568.methods["apply"] = applyMeth568;
                var opresult573 = request(opresult567, "&&(1)", [1], block568);
                return opresult573;
              };
              let applyMeth566 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth566.methodName = "apply";
              applyMeth566.paramCounts = [0];
              applyMeth566.paramNames = [];
              applyMeth566.definitionLine = 241;
              applyMeth566.definitionModule = "errormessages";
              block566.methods["apply"] = applyMeth566;
              var block574 = new GraceBlock(this, 241, 0);
              block574.guard = jsTrue;
              block574.real = function block574() {
                setLineNumber(242);    // compilenode call
                if (var_i === undefined) raiseUninitializedVariable("i");
                if (var_i === undefined) raiseUninitializedVariable("i");
                var diff577 = request(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call578 = selfRequest(this, "lineNumbers", [0]);
                var call576 = request(call578, "at(1)", [1], diff577);
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call579 = selfRequest(this, "lineNumbers", [0]);
                var call575 = request(call579, "at(1)put(1)", [1, 1], var_i, call576);
                setLineNumber(243);    // compilenode call
                if (var_i === undefined) raiseUninitializedVariable("i");
                if (var_i === undefined) raiseUninitializedVariable("i");
                var diff582 = request(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call583 = selfRequest(this, "lines", [0]);
                var call581 = request(call583, "at(1)", [1], diff582);
                // call case 6: other requests
                // call case 4: self request with 0 args and 0 typeArgs 
                var call584 = selfRequest(this, "lines", [0]);
                var call580 = request(call584, "at(1)put(1)", [1, 1], var_i, call581);
                setLineNumber(244);    // compilenode op
                if (var_i === undefined) raiseUninitializedVariable("i");
                var diff585 = request(var_i, "-(1)", [1], new GraceNum(1));
                var_i = diff585;
                return GraceDone;
              };
              let applyMeth574 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth574.methodName = "apply";
              applyMeth574.paramCounts = [0];
              applyMeth574.paramNames = [];
              applyMeth574.definitionLine = 241;
              applyMeth574.definitionModule = "errormessages";
              block574.methods["apply"] = applyMeth574;
              // call case 2: outer request
              var call565 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block566, block574);
              setLineNumber(246);    // compilenode call
              if (var_i === undefined) raiseUninitializedVariable("i");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call587 = selfRequest(this, "lineNumbers", [0]);
              var call586 = request(call587, "at(1)put(1)", [1, 1], var_i, var_lineNumber);
              setLineNumber(247);    // compilenode call
              if (var_i === undefined) raiseUninitializedVariable("i");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call589 = selfRequest(this, "lines", [0]);
              var call588 = request(call589, "at(1)put(1)", [1, 1], var_i, var_line);
              if559 = call588;
            }
            if551 = if559;
          }
          return if551;
        };    // end of method addLine(_,_)
        this.methods["addLine(2)"] = func549;
        func549.methodName = "addLine(2)";
        func549.paramCounts = [2];
        func549.paramNames = ["lineNumber", "line"];
        func549.definitionLine = 230;
        func549.definitionModule = "errormessages";
        var func590 = function(argcv, var_lineNumber) {    // method findLine(_), line 254
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("findLine(_)", 0, numArgs - 1);
          }
          setLineNumber(255);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call593 = selfRequest(this, "lineNumbers", [0]);
          var call592 = request(call593, "indices", [0]);
          var block594 = new GraceBlock(this, 255, 1);
          block594.guard = jsTrue;
          block594.real = function block594(var_i) {
            var if595 = GraceDone;
            setLineNumber(256);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call597 = selfRequest(this, "lineNumbers", [0]);
            var call596 = request(call597, "at(1)", [1], var_i);
            var opresult598 = request(call596, "==(1)", [1], var_lineNumber);
            if (Grace_isTrue(opresult598)) {
              setLineNumber(257);    // compilenode return
              throw new ReturnException(var_i, returnTarget);
            }
            return if595;
          };
          let applyMeth594 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth594.methodName = "apply(1)";
          applyMeth594.paramCounts = [1];
          applyMeth594.paramNames = ["i"];
          applyMeth594.definitionLine = 255;
          applyMeth594.definitionModule = "errormessages";
          block594.methods["apply(1)"] = applyMeth594;
          let matchesMeth594 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth594.methodName = "matches(1)";
          matchesMeth594.paramCounts = [1];
          matchesMeth594.paramNames = ["i"];
          matchesMeth594.definitionLine = 255;
          matchesMeth594.definitionModule = "errormessages";
          block594.methods["matches(1)"] = matchesMeth594;
          // call case 2: outer request
          var call591 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call592, block594);
          return GraceFalse;
        };    // end of method findLine(_)
        func590.confidential = true;
        this.methods["findLine(1)"] = func590;
        func590.methodName = "findLine(1)";
        func590.paramCounts = [1];
        func590.paramNames = ["lineNumber"];
        func590.definitionLine = 254;
        func590.definitionModule = "errormessages";
        var func599 = function(argcv, var_lineNumber) {    // method getLine(_), line 265
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 1) && (numArgs !== 1)) {
              raiseTypeArgError("getLine(_)", 0, numArgs - 1);
          }
          setLineNumber(266);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call600 = selfRequest(this, "findLine(1)", [1], var_lineNumber);
          var var_i = call600;
          var if601 = GraceDone;
          setLineNumber(267);    // compilenode op
          var opresult602 = request(var_i, "==(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult602)) {
            setLineNumber(268);    // compilenode call
            // call case 6: other requests
            // call case 6: other requests
            if (var_util === undefined) raiseUninitializedVariable("util");
            var call604 = request(var_util, "lines", [0]);
            var call603 = request(call604, "at(1)", [1], var_lineNumber);
            if601 = call603;
          } else {
            setLineNumber(270);    // compilenode call
            if (var_i === undefined) raiseUninitializedVariable("i");
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call606 = selfRequest(this, "lines", [0]);
            var call605 = request(call606, "at(1)", [1], var_i);
            if601 = call605;
          }
          return if601;
        };    // end of method getLine(_)
        func599.confidential = true;
        this.methods["getLine(1)"] = func599;
        func599.methodName = "getLine(1)";
        func599.paramCounts = [1];
        func599.paramNames = ["lineNumber"];
        func599.definitionLine = 265;
        func599.definitionModule = "errormessages";
        var func607 = function(argcv) {    // method print, line 274
          var returnTarget = invocationCount;
          invocationCount++;
          const numArgs = arguments.length - 1;
          if ((numArgs > 0) && (numArgs !== 0)) {
              raiseTypeArgError("print", 0, numArgs - 0);
          }
          setLineNumber(275);    // compilenode member
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call610 = selfRequest(this, "lines", [0]);
          var call609 = request(call610, "size", [0]);
          var opresult611 = request(new GraceNum(1), "..(1)", [1], call609);
          var block612 = new GraceBlock(this, 275, 1);
          block612.guard = jsTrue;
          block612.real = function block612(var_i) {
            var if613 = GraceDone;
            setLineNumber(276);    // compilenode num
            var opresult614 = request(var_i, ">(1)", [1], new GraceNum(1));
            var block615 = new GraceBlock(this, 276, 0);
            block615.guard = jsTrue;
            block615.real = function block615() {
              setLineNumber(276);    // compilenode call
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call617 = selfRequest(this, "lineNumbers", [0]);
              var call616 = request(call617, "at(1)", [1], var_i);
              var diff619 = request(var_i, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call620 = selfRequest(this, "lineNumbers", [0]);
              var call618 = request(call620, "at(1)", [1], diff619);
              var sum621 = request(call618, "+(1)", [1], new GraceNum(1));
              var opresult622 = request(call616, ">(1)", [1], sum621);
              return opresult622;
            };
            let applyMeth615 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth615.methodName = "apply";
            applyMeth615.paramCounts = [0];
            applyMeth615.paramNames = [];
            applyMeth615.definitionLine = 276;
            applyMeth615.definitionModule = "errormessages";
            block615.methods["apply"] = applyMeth615;
            var opresult623 = request(opresult614, "&&(1)", [1], block615);
            if (Grace_isTrue(opresult623)) {
              setLineNumber(277);    // compilenode string
              var string624 = new GraceString("");
              var var_s = string624;
              setLineNumber(278);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var diff629 = request(var_i, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call630 = selfRequest(this, "lineNumbers", [0]);
              var call628 = request(call630, "at(1)", [1], diff629);
              var call627 = request(call628, "asString", [0]);
              var call626 = request(call627, "size", [0]);
              var block631 = new GraceBlock(this, 278, 0);
              block631.guard = jsTrue;
              block631.real = function block631() {
                setLineNumber(279);    // compilenode op
                if (var_s === undefined) raiseUninitializedVariable("s");
                var string632 = new GraceString(" ");
                var opresult633 = request(var_s, "++(1)", [1], string632);
                var_s = opresult633;
                return GraceDone;
              };
              let applyMeth631 = function apply (argcv) {
                  return this.real.apply(this.receiver);
              };
              applyMeth631.methodName = "apply";
              applyMeth631.paramCounts = [0];
              applyMeth631.paramNames = [];
              applyMeth631.definitionLine = 278;
              applyMeth631.definitionModule = "errormessages";
              block631.methods["apply"] = applyMeth631;
              // call case 2: outer request
              var call625 = selfRequest(var_prelude, "repeat(1)times(1)", [1, 1], call626, block631);
              setLineNumber(281);    // compilenode string
              var string635 = new GraceString("    ");
              if (var_s === undefined) raiseUninitializedVariable("s");
              var opresult636 = request(string635, "++(1)", [1], var_s);
              var string637 = new GraceString("...\n");
              var opresult638 = request(opresult636, "++(1)", [1], string637);
              // call case 6: other requests
              // call case 6: other requests
              if (var_io === undefined) raiseUninitializedVariable("io");
              var call639 = request(var_io, "error", [0]);
              var call634 = request(call639, "write(1)", [1], opresult638);
              if613 = call634;
            }
            var if640 = GraceDone;
            setLineNumber(284);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call643 = selfRequest(this, "lineNumbers", [0]);
            var call642 = request(call643, "at(1)", [1], var_i);
            var call641 = request(call642, "truncated", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call645 = selfRequest(this, "lineNumbers", [0]);
            var call644 = request(call645, "at(1)", [1], var_i);
            var opresult646 = request(call641, "\u2260(1)", [1], call644);
            if (Grace_isTrue(opresult646)) {
              setLineNumber(285);    // compilenode string
              var string648 = new GraceString(" *");
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call651 = selfRequest(this, "lineNumbers", [0]);
              var call650 = request(call651, "at(1)", [1], var_i);
              var call649 = request(call650, "truncated", [0]);
              var opresult652 = request(string648, "++(1)", [1], call649);
              var string653 = new GraceString(": ");
              var opresult654 = request(opresult652, "++(1)", [1], string653);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call656 = selfRequest(this, "lines", [0]);
              var call655 = request(call656, "at(1)", [1], var_i);
              var opresult657 = request(opresult654, "++(1)", [1], call655);
              var string658 = new GraceString("\n");
              var opresult659 = request(opresult657, "++(1)", [1], string658);
              // call case 6: other requests
              // call case 6: other requests
              if (var_io === undefined) raiseUninitializedVariable("io");
              var call660 = request(var_io, "error", [0]);
              var call647 = request(call660, "write(1)", [1], opresult659);
              if640 = call647;
            } else {
              setLineNumber(287);    // compilenode string
              var string662 = new GraceString("  ");
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call664 = selfRequest(this, "lineNumbers", [0]);
              var call663 = request(call664, "at(1)", [1], var_i);
              var opresult665 = request(string662, "++(1)", [1], call663);
              var string666 = new GraceString(": ");
              var opresult667 = request(opresult665, "++(1)", [1], string666);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call669 = selfRequest(this, "lines", [0]);
              var call668 = request(call669, "at(1)", [1], var_i);
              var opresult670 = request(opresult667, "++(1)", [1], call668);
              var string671 = new GraceString("\n");
              var opresult672 = request(opresult670, "++(1)", [1], string671);
              // call case 6: other requests
              // call case 6: other requests
              if (var_io === undefined) raiseUninitializedVariable("io");
              var call673 = request(var_io, "error", [0]);
              var call661 = request(call673, "write(1)", [1], opresult672);
              if640 = call661;
            }
            return if640;
          };
          let applyMeth612 = function apply_1 (argcv, ...args) {
              if (this.guard.apply(this.receiver, args))
                  return this.real.apply(this.receiver, args);
              badBlockArgs.apply(this, args);
          };
          applyMeth612.methodName = "apply(1)";
          applyMeth612.paramCounts = [1];
          applyMeth612.paramNames = ["i"];
          applyMeth612.definitionLine = 275;
          applyMeth612.definitionModule = "errormessages";
          block612.methods["apply(1)"] = applyMeth612;
          let matchesMeth612 = function matches_1 (argcv, ...args) {
              return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
          };
          matchesMeth612.methodName = "matches(1)";
          matchesMeth612.paramCounts = [1];
          matchesMeth612.paramNames = ["i"];
          matchesMeth612.definitionLine = 275;
          matchesMeth612.definitionModule = "errormessages";
          block612.methods["matches(1)"] = matchesMeth612;
          // call case 2: outer request
          var call608 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult611, block612);
          return call608;
        };    // end of method print
        this.methods["print"] = func607;
        func607.methodName = "print";
        func607.paramCounts = [0];
        func607.paramNames = [];
        func607.definitionLine = 274;
        func607.definitionModule = "errormessages";
        const overridenByAliases = { };
        for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
            const a = aliases[aix];
            const newNm = a.newName;
            const oldNm = a.oldName;
            overridenByAliases[newNm] = this.methods[newNm];
            const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
            m.definitionLine = 14;
            m.definitionModule = "errormessages";
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
        var obj326_init = function() {    // init of object on line 14
          setLineNumber(17);    // compilenode member
          // call case 6: other requests
          // call case 2: outer request
          var call675 = selfRequest(var_prelude, "list", [0]);
          var call674 = request(call675, "empty", [0]);
          this.data.lineNumbers = call674;
          setLineNumber(18);    // compilenode member
          // call case 6: other requests
          // call case 2: outer request
          var call677 = selfRequest(var_prelude, "list", [0]);
          var call676 = request(call677, "empty", [0]);
          this.data.lines = call676;
        };
        return obj326_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj326_init = obj326_build.call(inheritingObject, null, this, aliases, exclusions);
      return obj326_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method new$build(_,_,_)
    this.methods["new$build(3)"] = func325;
    func325.methodName = "new$build(3)";
    func325.paramCounts = [0];
    func325.paramNames = [];
    func325.definitionLine = 14;
    func325.definitionModule = "errormessages";
    const overridenByAliases = { };
    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
        const a = aliases[aix];
        const newNm = a.newName;
        const oldNm = a.oldName;
        overridenByAliases[newNm] = this.methods[newNm];
        const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
        m.definitionLine = 5;
        m.definitionModule = "errormessages";
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
    var obj323_init = function() {    // init of object on line 5
    };
    return obj323_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj323 = emptyGraceObject("suggestion", "errormessages", 5);
  var obj323_init = obj323_build.call(obj323, null, this, [], []);
  obj323_init.call(obj323);  // end of compileobject
  var var_suggestion = obj323;
  var reader678_suggestion = function() {  // reader method suggestion
      if (var_suggestion === undefined) raiseUninitializedVariable("suggestion");
      return var_suggestion;
  };
  reader678_suggestion.isDef = true;
  this.methods["suggestion"] = reader678_suggestion;
  setLineNumber(399);    // compilenode string
  var string680 = new GraceString("CompilationError");
  // call case 6: other requests
  // call case 2: outer request
  var call681 = selfRequest(var_prelude, "Exception", [0]);
  var call679 = request(call681, "refine(1)", [1], string680);
  var var_CompilationError = call679;
  var reader682_CompilationError = function() {  // reader method CompilationError
      if (var_CompilationError === undefined) raiseUninitializedVariable("CompilationError");
      return var_CompilationError;
  };
  reader682_CompilationError.isDef = true;
  this.methods["CompilationError"] = reader682_CompilationError;
  setLineNumber(400);    // compilenode string
  var string684 = new GraceString("SyntaxError");
  // call case 6: other requests
  if (var_CompilationError === undefined) raiseUninitializedVariable("CompilationError");
  var call683 = request(var_CompilationError, "refine(1)", [1], string684);
  var var_SyntaxError = call683;
  var reader685_SyntaxError = function() {  // reader method SyntaxError
      if (var_SyntaxError === undefined) raiseUninitializedVariable("SyntaxError");
      return var_SyntaxError;
  };
  reader685_SyntaxError.isDef = true;
  this.methods["SyntaxError"] = reader685_SyntaxError;
  setLineNumber(401);    // compilenode string
  var string687 = new GraceString("ReuseError");
  // call case 6: other requests
  if (var_CompilationError === undefined) raiseUninitializedVariable("CompilationError");
  var call686 = request(var_CompilationError, "refine(1)", [1], string687);
  var var_ReuseError = call686;
  var reader688_ReuseError = function() {  // reader method ReuseError
      if (var_ReuseError === undefined) raiseUninitializedVariable("ReuseError");
      return var_ReuseError;
  };
  reader688_ReuseError.isDef = true;
  this.methods["ReuseError"] = reader688_ReuseError;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_errormessages = gracecode_errormessages;
if (typeof window !== "undefined")
  window.gracecode_errormessages = gracecode_errormessages;
gracecode_errormessages.imports = ["io", "standardGrace", "sys", "util"];
gracecode_errormessages.definitionModule = "errormessages";
gracecode_errormessages.definitionLine = 1;
