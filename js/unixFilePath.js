var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["unixFilePath"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n filePath\nfresh:filePath:\n ::(1)\n ==(1)\n asDebugString\n asString\n base\n base:=(_)\n copy\n dir\n dir:=(_)\n directory\n directory:=(1)\n exists\n extension\n extension:=(_)\n hash\n newer(1)\n setBase(1)\n setDirectory(1)\n setExtension(1)\n shortName\n \u2260(1)\nmodules:\n collectionsPrelude\n io\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/unixFilePath.grace\npublic:\n file(1)onPath(1)otherwise(1)\n filePath\n fromString(1)\n null\n split(1)\n withBase(1)\n withDirectory(1)\n withDirectory(1)base(1)extension(1)\n withExtension(1)\npublicMethodTypes:\n file(name)onPath(pathString)otherwise(action)\n filePath\n fromString(s)\n null\n split(pathString)\n withBase(b)\n withDirectory(d)\n withDirectory(d)base(b)extension(e)\n withExtension(e)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["unixFilePath"] = [
    "import \"io\" as io",
    "",
    "class filePath {",
    "    // creates a unixFilePath with empty components.",
    "    // Why is this not called null?  Because that name emits confusing error",
    "    // messages.  Instead, null redirects to this method.",
    "",
    "    use equality",
    "",
    "    var dir := \"\"",
    "    // the directory part; \"\" if in current directory",
    "",
    "    var base is public := \"\"",
    "    // the base part of the file name (without an extension)",
    "",
    "    var extension is public := \"\"",
    "    // the extension (like `.grace`) , including the `.`",
    "",
    "    method asString { dir ++ base ++ extension }",
    "    // the whole file name as a string",
    "",
    "    method shortName { base ++ extension }",
    "    // the file name without the directory part",
    "",
    "    method asDebugString { \"unixFilePath[{dir}|{base}|{extension}]\" }",
    "    // for debugging; shows the division into parts",
    "",
    "    method directory {",
    "    // the directory part; \"./\" if in current directory",
    "        if (dir == \"\") then { \"./\" } else { dir }",
    "    }",
    "",
    "    method directory:=(d) {",
    "    // set the directory part",
    "        var newDir := d",
    "        if (newDir == \"\") then {",
    "            dir := \"\"",
    "            return",
    "        }",
    "        if (newDir.at(newDir.size) != \"/\") then {",
    "            newDir := newDir ++ \"/\"",
    "        }",
    "        if (newDir == \"./\") then { newDir := \"\" }",
    "        dir := newDir",
    "    }",
    "    method setDirectory(d) {",
    "    // set the directory part; answers self for chaining",
    "        directory := d",
    "        self",
    "    }",
    "    method setBase(b) {",
    "    // set the base part; answers self for chaining",
    "        base := b",
    "        self",
    "    }",
    "    method setExtension(e) {",
    "    // set the extension; answers self for chaining",
    "        if (e.first == \".\") then {",
    "            extension := e",
    "        } else {",
    "            extension := \".\" ++ e",
    "        }",
    "        self",
    "    }",
    "    method exists -> Boolean {",
    "    // true if his file exists",
    "        io.exists(self.asString)",
    "    }",
    "    method newer(other) -> Boolean {",
    "    // true if this file is newer than other",
    "        io.newer(self.asString, other.asString)",
    "    }",
    "",
    "    method copy {",
    "    // a copy of this filePath",
    "        def p = filePath",
    "        p.directory := directory",
    "        p.base := base",
    "        p.extension := extension",
    "        p",
    "    }",
    "",
    "    method == (other) {",
    "    // am I equal to other?",
    "        if (directory != other.directory) then { return false }",
    "        if (base != other.base) then { return false }",
    "        if (extension != other.extension) then { return false }",
    "        return true",
    "    }",
    "",
    "    method hash {",
    "        hashCombine(hashCombine(directory.hash, base.hash), extension.hash)",
    "    }",
    "}",
    "",
    "method null { filePath }",
    "",
    "method withDirectory(d) {",
    "    filePath.setDirectory(d)",
    "}",
    "",
    "method withBase(b) {",
    "    filePath.setBase(b)",
    "}",
    "",
    "method withExtension(e) {",
    "    filePath.setExtension(e)",
    "}",
    "",
    "method withDirectory(d) base(b) extension(e) {",
    "    // creates a unixFilePath with directory d, base b and extension e",
    "    filePath.setDirectory(d).setBase(b).setExtension(e)",
    "}",
    "",
    "method fromString(s) {",
    "    // parses the filename s into components and answers the approriate unixFilePath",
    "    def p = filePath",
    "    var slashPosn := 0",
    "    def sSize = s.size",
    "    var ix := sSize",
    "    while { (slashPosn == 0) && (ix > 0) } do {",
    "        if (s.at(ix) == \"/\") then {",
    "            slashPosn := ix",
    "        } else {",
    "            ix := ix - 1",
    "        }",
    "    }",
    "    p.directory := s.substringFrom 1 to (slashPosn)",
    "    var dotPosn := sSize + 1",
    "    ix := sSize",
    "    while { (dotPosn > sSize) && (ix > slashPosn) } do {",
    "        if (s.at(ix) == \".\") then {",
    "            dotPosn := ix",
    "        } else {",
    "            ix := ix - 1",
    "        }",
    "    }",
    "    if (dotPosn <= sSize) then {",
    "        p.extension := s.substringFrom (dotPosn) to (sSize)",
    "    }",
    "    p.base := s.substringFrom (slashPosn + 1) to (dotPosn - 1)",
    "    p",
    "}",
    "",
    "method split(pathString) {",
    "    // splits pathString, assumed to be a Unix PATH containing items separated",
    "    // by colons, into a List of items.  Ensures that each item ends with /",
    "    def locations = list.empty",
    "    var ix := 1",
    "    var ox := 1",
    "    def pss = pathString.size",
    "    while { ox <= pss } do {",
    "        while { (ox <= pss) && {pathString.at(ox) != \":\"} } do {",
    "            ox := ox + 1",
    "        }",
    "        var item := pathString.substringFrom(ix) to(ox-1)",
    "        if (item.isEmpty.not) then {",
    "            if (item.last != \"/\") then { item := item ++ \"/\" }",
    "            locations.addLast (item)",
    "        }",
    "        ix := ox + 1",
    "        ox := ix",
    "    }",
    "    return locations",
    "}",
    "",
    "method file(name) onPath(pathString) otherwise(action) {",
    "    def locations = split(pathString)",
    "    def candidate = name.copy",
    "    def originalDir = name.directory",
    "    if (originalDir.first == \"/\") then {",
    "        if (candidate.exists) then {",
    "            return candidate",
    "        } else {",
    "            return action.apply [originalDir]",
    "        }",
    "    }",
    "    locations.do { each ->",
    "        candidate.setDirectory(each ++ originalDir)",
    "        if ( candidate.exists ) then {",
    "            return candidate",
    "        }",
    "    }",
    "    action.apply(locations)",
    "}" ];
}
function gracecode_unixFilePath() {
  importedModules["unixFilePath"] = this;
  var module$unixFilePath = this;
  this.definitionModule = "unixFilePath";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_unixFilePath_1");
  this.outer_unixFilePath_1 = var_prelude;
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
  func0.definitionModule = "unixFilePath";
  func0.debug = "import";
  func0.confidential = true;
  var func1 = function(argcv) {    // method filePath, line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("filePath", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("filePath", "unixFilePath", 3);
    var ouc_init = this.methods["filePath$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method filePath
  this.methods["filePath"] = func1;
  func1.methodName = "filePath";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 3;
  func1.definitionModule = "unixFilePath";
  var func2 = function(argcv, inheritingObject, aliases, exclusions) {    // method filePath$build(_,_,_), line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("filePath", 0, numArgs - 0);
    }
    var obj3_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_unixFilePath_3");
      this.outer_unixFilePath_3 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(8);    // reuse call
      var initFun4 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.dir = undefined;
      var reader5_dir = function() {  // reader method dir
          if (this.data.dir === undefined) raiseUninitializedVariable("dir");
          return this.data.dir;
      };
      reader5_dir.isVar = true;
      reader5_dir.confidential = true;
      this.methods["dir"] = reader5_dir;
      var writer6_dir = function(argcv, n) {   // writer method dir:=(_)
        this.data.dir = n;
        return GraceDone;
      };
      writer6_dir.confidential = true;
      this.methods["dir:=(1)"] = writer6_dir;
      this.data.base = undefined;
      var reader7_base = function() {  // reader method base
          if (this.data.base === undefined) raiseUninitializedVariable("base");
          return this.data.base;
      };
      reader7_base.isVar = true;
      this.methods["base"] = reader7_base;
      var writer8_base = function(argcv, n) {   // writer method base:=(_)
        this.data.base = n;
        return GraceDone;
      };
      this.methods["base:=(1)"] = writer8_base;
      this.data.extension = undefined;
      var reader9_extension = function() {  // reader method extension
          if (this.data.extension === undefined) raiseUninitializedVariable("extension");
          return this.data.extension;
      };
      reader9_extension.isVar = true;
      this.methods["extension"] = reader9_extension;
      var writer10_extension = function(argcv, n) {   // writer method extension:=(_)
        this.data.extension = n;
        return GraceDone;
      };
      this.methods["extension:=(1)"] = writer10_extension;
      var func11 = function(argcv) {    // method asString, line 19
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(19);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call12 = selfRequest(this, "dir", [0]);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call13 = selfRequest(this, "base", [0]);
        var opresult14 = request(call12, "++(1)", [1], call13);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call15 = selfRequest(this, "extension", [0]);
        var opresult16 = request(opresult14, "++(1)", [1], call15);
        return opresult16;
      };    // end of method asString
      this.methods["asString"] = func11;
      func11.methodName = "asString";
      func11.paramCounts = [0];
      func11.paramNames = [];
      func11.definitionLine = 19;
      func11.definitionModule = "unixFilePath";
      var func17 = function(argcv) {    // method shortName, line 22
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("shortName", 0, numArgs - 0);
        }
        setLineNumber(22);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call18 = selfRequest(this, "base", [0]);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call19 = selfRequest(this, "extension", [0]);
        var opresult20 = request(call18, "++(1)", [1], call19);
        return opresult20;
      };    // end of method shortName
      this.methods["shortName"] = func17;
      func17.methodName = "shortName";
      func17.paramCounts = [0];
      func17.paramNames = [];
      func17.definitionLine = 22;
      func17.definitionModule = "unixFilePath";
      var func21 = function(argcv) {    // method asDebugString, line 25
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDebugString", 0, numArgs - 0);
        }
        setLineNumber(25);    // compilenode string
        var string22 = new GraceString("unixFilePath[");
        // call case 4: self request with 0 args and 0 typeArgs 
        var call23 = selfRequest(this, "dir", [0]);
        var opresult24 = request(string22, "++(1)", [1], call23);
        var string25 = new GraceString("|");
        var opresult26 = request(opresult24, "++(1)", [1], string25);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call27 = selfRequest(this, "base", [0]);
        var opresult28 = request(opresult26, "++(1)", [1], call27);
        var string29 = new GraceString("|");
        var opresult30 = request(opresult28, "++(1)", [1], string29);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call31 = selfRequest(this, "extension", [0]);
        var opresult32 = request(opresult30, "++(1)", [1], call31);
        var string33 = new GraceString("]");
        var opresult34 = request(opresult32, "++(1)", [1], string33);
        return opresult34;
      };    // end of method asDebugString
      this.methods["asDebugString"] = func21;
      func21.methodName = "asDebugString";
      func21.paramCounts = [0];
      func21.paramNames = [];
      func21.definitionLine = 25;
      func21.definitionModule = "unixFilePath";
      var func35 = function(argcv) {    // method directory, line 28
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("directory", 0, numArgs - 0);
        }
        var if36 = GraceDone;
        setLineNumber(30);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call37 = selfRequest(this, "dir", [0]);
        var string38 = new GraceString("");
        var opresult39 = request(call37, "==(1)", [1], string38);
        if (Grace_isTrue(opresult39)) {
          var string40 = new GraceString("./");
          if36 = string40;
        } else {
          // call case 4: self request with 0 args and 0 typeArgs 
          var call41 = selfRequest(this, "dir", [0]);
          if36 = call41;
        }
        return if36;
      };    // end of method directory
      this.methods["directory"] = func35;
      func35.methodName = "directory";
      func35.paramCounts = [0];
      func35.paramNames = [];
      func35.definitionLine = 28;
      func35.definitionModule = "unixFilePath";
      var func42 = function(argcv, var_d) {    // method directory:=(_), line 33
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("directory:=(_)", 0, numArgs - 1);
        }
        setLineNumber(35);    // compilenode vardec
        var var_newDir = var_d;
        var if43 = GraceDone;
        setLineNumber(36);    // compilenode string
        var string44 = new GraceString("");
        var opresult45 = request(var_newDir, "==(1)", [1], string44);
        if (Grace_isTrue(opresult45)) {
          setLineNumber(37);    // compilenode string
          var string47 = new GraceString("");
          // call case 4: self request with 1 args and 0 typeArgs 
          var call46 = selfRequest(this, "dir:=(1)", [1], string47);
          setLineNumber(38);    // compilenode return
          return var_done;
        }
        var if48 = GraceDone;
        setLineNumber(40);    // compilenode member
        // call case 6: other requests
        var call50 = request(var_newDir, "size", [0]);
        // call case 6: other requests
        var call49 = request(var_newDir, "at(1)", [1], call50);
        var string51 = new GraceString("/");
        var opresult52 = request(call49, "\u2260(1)", [1], string51);
        if (Grace_isTrue(opresult52)) {
          setLineNumber(41);    // compilenode op
          if (var_newDir === undefined) raiseUninitializedVariable("newDir");
          var string53 = new GraceString("/");
          var opresult54 = request(var_newDir, "++(1)", [1], string53);
          var_newDir = opresult54;
          if48 = GraceDone;
        }
        var if55 = GraceDone;
        setLineNumber(43);    // compilenode string
        var string56 = new GraceString("./");
        var opresult57 = request(var_newDir, "==(1)", [1], string56);
        if (Grace_isTrue(opresult57)) {
          var string58 = new GraceString("");
          var_newDir = string58;
          if55 = GraceDone;
        }
        setLineNumber(44);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call59 = selfRequest(this, "dir:=(1)", [1], var_newDir);
        return call59;
      };    // end of method directory:=(_)
      this.methods["directory:=(1)"] = func42;
      func42.methodName = "directory:=(1)";
      func42.paramCounts = [1];
      func42.paramNames = ["d"];
      func42.definitionLine = 33;
      func42.definitionModule = "unixFilePath";
      var func60 = function(argcv, var_d) {    // method setDirectory(_), line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("setDirectory(_)", 0, numArgs - 1);
        }
        setLineNumber(48);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call61 = selfRequest(this, "directory:=(1)", [1], var_d);
        return this;
      };    // end of method setDirectory(_)
      this.methods["setDirectory(1)"] = func60;
      func60.methodName = "setDirectory(1)";
      func60.paramCounts = [1];
      func60.paramNames = ["d"];
      func60.definitionLine = 46;
      func60.definitionModule = "unixFilePath";
      var func62 = function(argcv, var_b) {    // method setBase(_), line 51
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("setBase(_)", 0, numArgs - 1);
        }
        setLineNumber(53);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call63 = selfRequest(this, "base:=(1)", [1], var_b);
        return this;
      };    // end of method setBase(_)
      this.methods["setBase(1)"] = func62;
      func62.methodName = "setBase(1)";
      func62.paramCounts = [1];
      func62.paramNames = ["b"];
      func62.definitionLine = 51;
      func62.definitionModule = "unixFilePath";
      var func64 = function(argcv, var_e) {    // method setExtension(_), line 56
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("setExtension(_)", 0, numArgs - 1);
        }
        var if65 = GraceDone;
        setLineNumber(58);    // compilenode member
        // call case 6: other requests
        var call66 = request(var_e, "first", [0]);
        var string67 = new GraceString(".");
        var opresult68 = request(call66, "==(1)", [1], string67);
        if (Grace_isTrue(opresult68)) {
          setLineNumber(59);    // compilenode call
          // call case 4: self request with 1 args and 0 typeArgs 
          var call69 = selfRequest(this, "extension:=(1)", [1], var_e);
          if65 = call69;
        } else {
          setLineNumber(61);    // compilenode string
          var string71 = new GraceString(".");
          var opresult72 = request(string71, "++(1)", [1], var_e);
          // call case 4: self request with 1 args and 0 typeArgs 
          var call70 = selfRequest(this, "extension:=(1)", [1], opresult72);
          if65 = call70;
        }
        return this;
      };    // end of method setExtension(_)
      this.methods["setExtension(1)"] = func64;
      func64.methodName = "setExtension(1)";
      func64.paramCounts = [1];
      func64.paramNames = ["e"];
      func64.definitionLine = 56;
      func64.definitionModule = "unixFilePath";
      var func73 = function(argcv) {    // method exists, line 65
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("exists", 0, numArgs - 0);
        }
        setLineNumber(67);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call75 = selfRequest(this, "asString", [0]);
        // call case 6: other requests
        if (var_io === undefined) raiseUninitializedVariable("io");
        var call74 = request(var_io, "exists(1)", [1], call75);
        assertTypeOrMsg(call74, var_Boolean, "result of method exists", "Boolean");
        return call74;
      };    // end of method exists
      this.methods["exists"] = func73;
      func73.methodName = "exists";
      func73.paramCounts = [0];
      func73.paramNames = [];
      func73.definitionLine = 65;
      func73.definitionModule = "unixFilePath";
      var func76 = function(argcv, var_other) {    // method newer(_), line 69
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("newer(_)", 0, numArgs - 1);
        }
        setLineNumber(71);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call78 = selfRequest(this, "asString", [0]);
        // call case 6: other requests
        var call79 = request(var_other, "asString", [0]);
        // call case 6: other requests
        if (var_io === undefined) raiseUninitializedVariable("io");
        var call77 = request(var_io, "newer(2)", [2], call78, call79);
        assertTypeOrMsg(call77, var_Boolean, "result of method newer(_)", "Boolean");
        return call77;
      };    // end of method newer(_)
      this.methods["newer(1)"] = func76;
      func76.methodName = "newer(1)";
      func76.paramCounts = [1];
      func76.paramNames = ["other"];
      func76.definitionLine = 69;
      func76.definitionModule = "unixFilePath";
      var func80 = function(argcv) {    // method copy, line 74
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("copy", 0, numArgs - 0);
        }
        setLineNumber(76);    // compilenode member
        // call case 2: outer request
        var call81 = selfRequest(importedModules["unixFilePath"], "filePath", [0]);
        var var_p = call81;
        setLineNumber(77);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call83 = selfRequest(this, "directory", [0]);
        // call case 6: other requests
        var call82 = request(var_p, "directory:=(1)", [1], call83);
        setLineNumber(78);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call85 = selfRequest(this, "base", [0]);
        // call case 6: other requests
        var call84 = request(var_p, "base:=(1)", [1], call85);
        setLineNumber(79);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call87 = selfRequest(this, "extension", [0]);
        // call case 6: other requests
        var call86 = request(var_p, "extension:=(1)", [1], call87);
        return var_p;
      };    // end of method copy
      this.methods["copy"] = func80;
      func80.methodName = "copy";
      func80.paramCounts = [0];
      func80.paramNames = [];
      func80.definitionLine = 74;
      func80.definitionModule = "unixFilePath";
      var func88 = function(argcv, var_other) {    // method ==(_), line 83
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        var if89 = GraceDone;
        setLineNumber(85);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call90 = selfRequest(this, "directory", [0]);
        // call case 6: other requests
        var call91 = request(var_other, "directory", [0]);
        var opresult92 = request(call90, "\u2260(1)", [1], call91);
        if (Grace_isTrue(opresult92)) {
          return GraceFalse;
        }
        var if93 = GraceDone;
        setLineNumber(86);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call94 = selfRequest(this, "base", [0]);
        // call case 6: other requests
        var call95 = request(var_other, "base", [0]);
        var opresult96 = request(call94, "\u2260(1)", [1], call95);
        if (Grace_isTrue(opresult96)) {
          return GraceFalse;
        }
        var if97 = GraceDone;
        setLineNumber(87);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call98 = selfRequest(this, "extension", [0]);
        // call case 6: other requests
        var call99 = request(var_other, "extension", [0]);
        var opresult100 = request(call98, "\u2260(1)", [1], call99);
        if (Grace_isTrue(opresult100)) {
          return GraceFalse;
        }
        setLineNumber(88);    // compilenode return
        return GraceTrue;
      };    // end of method ==(_)
      this.methods["==(1)"] = func88;
      func88.methodName = "==(1)";
      func88.paramCounts = [1];
      func88.paramNames = ["other"];
      func88.definitionLine = 83;
      func88.definitionModule = "unixFilePath";
      var func101 = function(argcv) {    // method hash, line 91
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hash", 0, numArgs - 0);
        }
        setLineNumber(92);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call105 = selfRequest(this, "directory", [0]);
        var call104 = request(call105, "hash", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call107 = selfRequest(this, "base", [0]);
        var call106 = request(call107, "hash", [0]);
        // call case 2: outer request
        var call103 = selfRequest(var_prelude, "hashCombine(2)", [2], call104, call106);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call109 = selfRequest(this, "extension", [0]);
        var call108 = request(call109, "hash", [0]);
        // call case 2: outer request
        var call102 = selfRequest(var_prelude, "hashCombine(2)", [2], call103, call108);
        return call102;
      };    // end of method hash
      this.methods["hash"] = func101;
      func101.methodName = "hash";
      func101.paramCounts = [0];
      func101.paramNames = [];
      func101.definitionLine = 91;
      func101.definitionModule = "unixFilePath";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 3;
          m.definitionModule = "unixFilePath";
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
      var obj3_init = function() {    // init of object on line 3
        setLineNumber(10);    // compilenode string
        var string110 = new GraceString("");
        this.data.dir = string110;
        setLineNumber(13);    // compilenode string
        var string111 = new GraceString("");
        this.data.base = string111;
        setLineNumber(16);    // compilenode string
        var string112 = new GraceString("");
        this.data.extension = string112;
      };
      return obj3_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj3_init = obj3_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj3_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method filePath$build(_,_,_)
  this.methods["filePath$build(3)"] = func2;
  func2.methodName = "filePath$build(3)";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "unixFilePath";
  var func113 = function(argcv) {    // method null, line 96
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("null", 0, numArgs - 0);
    }
    setLineNumber(96);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call114 = selfRequest(this, "filePath", [0]);
    return call114;
  };    // end of method null
  this.methods["null"] = func113;
  func113.methodName = "null";
  func113.paramCounts = [0];
  func113.paramNames = [];
  func113.definitionLine = 96;
  func113.definitionModule = "unixFilePath";
  var func115 = function(argcv, var_d) {    // method withDirectory(_), line 98
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("withDirectory(_)", 0, numArgs - 1);
    }
    setLineNumber(99);    // compilenode call
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call117 = selfRequest(this, "filePath", [0]);
    var call116 = request(call117, "setDirectory(1)", [1], var_d);
    return call116;
  };    // end of method withDirectory(_)
  this.methods["withDirectory(1)"] = func115;
  func115.methodName = "withDirectory(1)";
  func115.paramCounts = [1];
  func115.paramNames = ["d"];
  func115.definitionLine = 98;
  func115.definitionModule = "unixFilePath";
  var func118 = function(argcv, var_b) {    // method withBase(_), line 102
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("withBase(_)", 0, numArgs - 1);
    }
    setLineNumber(103);    // compilenode call
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call120 = selfRequest(this, "filePath", [0]);
    var call119 = request(call120, "setBase(1)", [1], var_b);
    return call119;
  };    // end of method withBase(_)
  this.methods["withBase(1)"] = func118;
  func118.methodName = "withBase(1)";
  func118.paramCounts = [1];
  func118.paramNames = ["b"];
  func118.definitionLine = 102;
  func118.definitionModule = "unixFilePath";
  var func121 = function(argcv, var_e) {    // method withExtension(_), line 106
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("withExtension(_)", 0, numArgs - 1);
    }
    setLineNumber(107);    // compilenode call
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call123 = selfRequest(this, "filePath", [0]);
    var call122 = request(call123, "setExtension(1)", [1], var_e);
    return call122;
  };    // end of method withExtension(_)
  this.methods["withExtension(1)"] = func121;
  func121.methodName = "withExtension(1)";
  func121.paramCounts = [1];
  func121.paramNames = ["e"];
  func121.definitionLine = 106;
  func121.definitionModule = "unixFilePath";
  var func124 = function(argcv, var_d, var_b, var_e) {    // method withDirectory(_)base(_)extension(_), line 110
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("withDirectory(_)base(_)extension(_)", 0, numArgs - 3);
    }
    setLineNumber(112);    // compilenode call
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 4: self request with 0 args and 0 typeArgs 
    var call128 = selfRequest(this, "filePath", [0]);
    var call127 = request(call128, "setDirectory(1)", [1], var_d);
    var call126 = request(call127, "setBase(1)", [1], var_b);
    var call125 = request(call126, "setExtension(1)", [1], var_e);
    return call125;
  };    // end of method withDirectory(_)base(_)extension(_)
  this.methods["withDirectory(1)base(1)extension(1)"] = func124;
  func124.methodName = "withDirectory(1)base(1)extension(1)";
  func124.paramCounts = [1, 1, 1];
  func124.paramNames = ["d", "b", "e"];
  func124.definitionLine = 110;
  func124.definitionModule = "unixFilePath";
  var func129 = function(argcv, var_s) {    // method fromString(_), line 115
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("fromString(_)", 0, numArgs - 1);
    }
    setLineNumber(117);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call130 = selfRequest(this, "filePath", [0]);
    var var_p = call130;
    setLineNumber(118);    // compilenode num
    var var_slashPosn = new GraceNum(0);
    setLineNumber(119);    // compilenode member
    // call case 6: other requests
    var call131 = request(var_s, "size", [0]);
    var var_sSize = call131;
    setLineNumber(120);    // compilenode vardec
    var var_ix = var_sSize;
    setLineNumber(121);    // compilenode block
    var block133 = new GraceBlock(this, 121, 0);
    block133.guard = jsTrue;
    block133.real = function block133() {
      setLineNumber(121);    // compilenode op
      if (var_slashPosn === undefined) raiseUninitializedVariable("slashPosn");
      var opresult134 = request(var_slashPosn, "==(1)", [1], new GraceNum(0));
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      var opresult135 = request(var_ix, ">(1)", [1], new GraceNum(0));
      var opresult136 = request(opresult134, "&&(1)", [1], opresult135);
      return opresult136;
    };
    let applyMeth133 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth133.methodName = "apply";
    applyMeth133.paramCounts = [0];
    applyMeth133.paramNames = [];
    applyMeth133.definitionLine = 121;
    applyMeth133.definitionModule = "unixFilePath";
    block133.methods["apply"] = applyMeth133;
    var block137 = new GraceBlock(this, 121, 0);
    block137.guard = jsTrue;
    block137.real = function block137() {
      var if138 = GraceDone;
      setLineNumber(122);    // compilenode call
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      // call case 6: other requests
      var call139 = request(var_s, "at(1)", [1], var_ix);
      var string140 = new GraceString("/");
      var opresult141 = request(call139, "==(1)", [1], string140);
      if (Grace_isTrue(opresult141)) {
        setLineNumber(123);    // compilenode bind
        if (var_ix === undefined) raiseUninitializedVariable("ix");
        var_slashPosn = var_ix;
        if138 = GraceDone;
      } else {
        setLineNumber(125);    // compilenode op
        if (var_ix === undefined) raiseUninitializedVariable("ix");
        var diff142 = request(var_ix, "-(1)", [1], new GraceNum(1));
        var_ix = diff142;
        if138 = GraceDone;
      }
      return if138;
    };
    let applyMeth137 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth137.methodName = "apply";
    applyMeth137.paramCounts = [0];
    applyMeth137.paramNames = [];
    applyMeth137.definitionLine = 121;
    applyMeth137.definitionModule = "unixFilePath";
    block137.methods["apply"] = applyMeth137;
    // call case 2: outer request
    var call132 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block133, block137);
    setLineNumber(128);    // compilenode num
    // call case 6: other requests
    var call144 = request(var_s, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), var_slashPosn);
    // call case 6: other requests
    var call143 = request(var_p, "directory:=(1)", [1], call144);
    setLineNumber(129);    // compilenode num
    var sum145 = request(var_sSize, "+(1)", [1], new GraceNum(1));
    var var_dotPosn = sum145;
    setLineNumber(130);    // compilenode bind
    var_ix = var_sSize;
    setLineNumber(131);    // compilenode block
    var block147 = new GraceBlock(this, 131, 0);
    block147.guard = jsTrue;
    block147.real = function block147() {
      setLineNumber(131);    // compilenode op
      if (var_dotPosn === undefined) raiseUninitializedVariable("dotPosn");
      if (var_sSize === undefined) raiseUninitializedVariable("sSize");
      var opresult148 = request(var_dotPosn, ">(1)", [1], var_sSize);
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      if (var_slashPosn === undefined) raiseUninitializedVariable("slashPosn");
      var opresult149 = request(var_ix, ">(1)", [1], var_slashPosn);
      var opresult150 = request(opresult148, "&&(1)", [1], opresult149);
      return opresult150;
    };
    let applyMeth147 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth147.methodName = "apply";
    applyMeth147.paramCounts = [0];
    applyMeth147.paramNames = [];
    applyMeth147.definitionLine = 131;
    applyMeth147.definitionModule = "unixFilePath";
    block147.methods["apply"] = applyMeth147;
    var block151 = new GraceBlock(this, 131, 0);
    block151.guard = jsTrue;
    block151.real = function block151() {
      var if152 = GraceDone;
      setLineNumber(132);    // compilenode call
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      // call case 6: other requests
      var call153 = request(var_s, "at(1)", [1], var_ix);
      var string154 = new GraceString(".");
      var opresult155 = request(call153, "==(1)", [1], string154);
      if (Grace_isTrue(opresult155)) {
        setLineNumber(133);    // compilenode bind
        if (var_ix === undefined) raiseUninitializedVariable("ix");
        var_dotPosn = var_ix;
        if152 = GraceDone;
      } else {
        setLineNumber(135);    // compilenode op
        if (var_ix === undefined) raiseUninitializedVariable("ix");
        var diff156 = request(var_ix, "-(1)", [1], new GraceNum(1));
        var_ix = diff156;
        if152 = GraceDone;
      }
      return if152;
    };
    let applyMeth151 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth151.methodName = "apply";
    applyMeth151.paramCounts = [0];
    applyMeth151.paramNames = [];
    applyMeth151.definitionLine = 131;
    applyMeth151.definitionModule = "unixFilePath";
    block151.methods["apply"] = applyMeth151;
    // call case 2: outer request
    var call146 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block147, block151);
    var if157 = GraceDone;
    setLineNumber(138);    // compilenode op
    var opresult158 = request(var_dotPosn, "\u2264(1)", [1], var_sSize);
    if (Grace_isTrue(opresult158)) {
      setLineNumber(139);    // compilenode call
      if (var_dotPosn === undefined) raiseUninitializedVariable("dotPosn");
      if (var_sSize === undefined) raiseUninitializedVariable("sSize");
      // call case 6: other requests
      var call160 = request(var_s, "substringFrom(1)to(1)", [1, 1], var_dotPosn, var_sSize);
      // call case 6: other requests
      if (var_p === undefined) raiseUninitializedVariable("p");
      var call159 = request(var_p, "extension:=(1)", [1], call160);
      if157 = call159;
    }
    setLineNumber(141);    // compilenode num
    var sum163 = request(var_slashPosn, "+(1)", [1], new GraceNum(1));
    var diff164 = request(var_dotPosn, "-(1)", [1], new GraceNum(1));
    // call case 6: other requests
    var call162 = request(var_s, "substringFrom(1)to(1)", [1, 1], sum163, diff164);
    // call case 6: other requests
    var call161 = request(var_p, "base:=(1)", [1], call162);
    return var_p;
  };    // end of method fromString(_)
  this.methods["fromString(1)"] = func129;
  func129.methodName = "fromString(1)";
  func129.paramCounts = [1];
  func129.paramNames = ["s"];
  func129.definitionLine = 115;
  func129.definitionModule = "unixFilePath";
  var func165 = function(argcv, var_pathString) {    // method split(_), line 145
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("split(_)", 0, numArgs - 1);
    }
    setLineNumber(148);    // compilenode member
    // call case 6: other requests
    // call case 2: outer request
    var call167 = selfRequest(var_prelude, "list", [0]);
    var call166 = request(call167, "empty", [0]);
    var var_locations = call166;
    setLineNumber(149);    // compilenode num
    var var_ix = new GraceNum(1);
    setLineNumber(150);    // compilenode num
    var var_ox = new GraceNum(1);
    setLineNumber(151);    // compilenode member
    // call case 6: other requests
    var call168 = request(var_pathString, "size", [0]);
    var var_pss = call168;
    setLineNumber(152);    // compilenode block
    var block170 = new GraceBlock(this, 152, 0);
    block170.guard = jsTrue;
    block170.real = function block170() {
      setLineNumber(152);    // compilenode op
      if (var_ox === undefined) raiseUninitializedVariable("ox");
      if (var_pss === undefined) raiseUninitializedVariable("pss");
      var opresult171 = request(var_ox, "\u2264(1)", [1], var_pss);
      return opresult171;
    };
    let applyMeth170 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth170.methodName = "apply";
    applyMeth170.paramCounts = [0];
    applyMeth170.paramNames = [];
    applyMeth170.definitionLine = 152;
    applyMeth170.definitionModule = "unixFilePath";
    block170.methods["apply"] = applyMeth170;
    var block172 = new GraceBlock(this, 152, 0);
    block172.guard = jsTrue;
    block172.real = function block172() {
      setLineNumber(153);    // compilenode block
      var block174 = new GraceBlock(this, 153, 0);
      block174.guard = jsTrue;
      block174.real = function block174() {
        setLineNumber(153);    // compilenode op
        if (var_ox === undefined) raiseUninitializedVariable("ox");
        if (var_pss === undefined) raiseUninitializedVariable("pss");
        var opresult175 = request(var_ox, "\u2264(1)", [1], var_pss);
        var block176 = new GraceBlock(this, 153, 0);
        block176.guard = jsTrue;
        block176.real = function block176() {
          setLineNumber(153);    // compilenode call
          if (var_ox === undefined) raiseUninitializedVariable("ox");
          // call case 6: other requests
          var call177 = request(var_pathString, "at(1)", [1], var_ox);
          var string178 = new GraceString(":");
          var opresult179 = request(call177, "\u2260(1)", [1], string178);
          return opresult179;
        };
        let applyMeth176 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth176.methodName = "apply";
        applyMeth176.paramCounts = [0];
        applyMeth176.paramNames = [];
        applyMeth176.definitionLine = 153;
        applyMeth176.definitionModule = "unixFilePath";
        block176.methods["apply"] = applyMeth176;
        var opresult180 = request(opresult175, "&&(1)", [1], block176);
        return opresult180;
      };
      let applyMeth174 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth174.methodName = "apply";
      applyMeth174.paramCounts = [0];
      applyMeth174.paramNames = [];
      applyMeth174.definitionLine = 153;
      applyMeth174.definitionModule = "unixFilePath";
      block174.methods["apply"] = applyMeth174;
      var block181 = new GraceBlock(this, 153, 0);
      block181.guard = jsTrue;
      block181.real = function block181() {
        setLineNumber(154);    // compilenode op
        if (var_ox === undefined) raiseUninitializedVariable("ox");
        var sum182 = request(var_ox, "+(1)", [1], new GraceNum(1));
        var_ox = sum182;
        return GraceDone;
      };
      let applyMeth181 = function apply (argcv) {
          return this.real.apply(this.receiver);
      };
      applyMeth181.methodName = "apply";
      applyMeth181.paramCounts = [0];
      applyMeth181.paramNames = [];
      applyMeth181.definitionLine = 153;
      applyMeth181.definitionModule = "unixFilePath";
      block181.methods["apply"] = applyMeth181;
      // call case 2: outer request
      var call173 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block174, block181);
      setLineNumber(156);    // compilenode call
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      if (var_ox === undefined) raiseUninitializedVariable("ox");
      var diff184 = request(var_ox, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call183 = request(var_pathString, "substringFrom(1)to(1)", [1, 1], var_ix, diff184);
      var var_item = call183;
      var if185 = GraceDone;
      setLineNumber(157);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      if (var_item === undefined) raiseUninitializedVariable("item");
      var call187 = request(var_item, "isEmpty", [0]);
      var call186 = request(call187, "not", [0]);
      if (Grace_isTrue(call186)) {
        var if188 = GraceDone;
        setLineNumber(158);    // compilenode member
        // call case 6: other requests
        if (var_item === undefined) raiseUninitializedVariable("item");
        var call189 = request(var_item, "last", [0]);
        var string190 = new GraceString("/");
        var opresult191 = request(call189, "\u2260(1)", [1], string190);
        if (Grace_isTrue(opresult191)) {
          if (var_item === undefined) raiseUninitializedVariable("item");
          var string192 = new GraceString("/");
          var opresult193 = request(var_item, "++(1)", [1], string192);
          var_item = opresult193;
          if188 = GraceDone;
        }
        setLineNumber(159);    // compilenode call
        if (var_item === undefined) raiseUninitializedVariable("item");
        // call case 6: other requests
        if (var_locations === undefined) raiseUninitializedVariable("locations");
        var call194 = request(var_locations, "addLast(1)", [1], var_item);
        if185 = call194;
      }
      setLineNumber(161);    // compilenode op
      if (var_ox === undefined) raiseUninitializedVariable("ox");
      var sum195 = request(var_ox, "+(1)", [1], new GraceNum(1));
      var_ix = sum195;
      setLineNumber(162);    // compilenode bind
      if (var_ix === undefined) raiseUninitializedVariable("ix");
      var_ox = var_ix;
      return GraceDone;
    };
    let applyMeth172 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth172.methodName = "apply";
    applyMeth172.paramCounts = [0];
    applyMeth172.paramNames = [];
    applyMeth172.definitionLine = 152;
    applyMeth172.definitionModule = "unixFilePath";
    block172.methods["apply"] = applyMeth172;
    // call case 2: outer request
    var call169 = selfRequest(var_prelude, "while(1)do(1)", [1, 1], block170, block172);
    setLineNumber(164);    // compilenode return
    return var_locations;
  };    // end of method split(_)
  this.methods["split(1)"] = func165;
  func165.methodName = "split(1)";
  func165.paramCounts = [1];
  func165.paramNames = ["pathString"];
  func165.definitionLine = 145;
  func165.definitionModule = "unixFilePath";
  var func196 = function(argcv, var_name, var_pathString, var_action) {    // method file(_)onPath(_)otherwise(_), line 167
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("file(_)onPath(_)otherwise(_)", 0, numArgs - 3);
    }
    setLineNumber(168);    // compilenode call
    // call case 2: outer request
    var call197 = selfRequest(importedModules["unixFilePath"], "split(1)", [1], var_pathString);
    var var_locations = call197;
    setLineNumber(169);    // compilenode member
    // call case 6: other requests
    var call198 = request(var_name, "copy", [0]);
    var var_candidate = call198;
    setLineNumber(170);    // compilenode member
    // call case 6: other requests
    var call199 = request(var_name, "directory", [0]);
    var var_originalDir = call199;
    var if200 = GraceDone;
    setLineNumber(171);    // compilenode member
    // call case 6: other requests
    var call201 = request(var_originalDir, "first", [0]);
    var string202 = new GraceString("/");
    var opresult203 = request(call201, "==(1)", [1], string202);
    if (Grace_isTrue(opresult203)) {
      var if204 = GraceDone;
      setLineNumber(172);    // compilenode member
      // call case 6: other requests
      if (var_candidate === undefined) raiseUninitializedVariable("candidate");
      var call205 = request(var_candidate, "exists", [0]);
      if (Grace_isTrue(call205)) {
        setLineNumber(173);    // compilenode return
        if (var_candidate === undefined) raiseUninitializedVariable("candidate");
        return var_candidate;
      } else {
        setLineNumber(175);    // compilenode array
        if (var_originalDir === undefined) raiseUninitializedVariable("originalDir");
        var array207 = new GraceSequence([var_originalDir]);
        // call case 6: other requests
        var call206 = request(var_action, "apply(1)", [1], array207);
        return call206;
      }
      if200 = if204;
    }
    setLineNumber(178);    // compilenode block
    var block209 = new GraceBlock(this, 178, 1);
    block209.guard = jsTrue;
    block209.real = function block209(var_each) {
      setLineNumber(179);    // compilenode op
      if (var_originalDir === undefined) raiseUninitializedVariable("originalDir");
      var opresult211 = request(var_each, "++(1)", [1], var_originalDir);
      // call case 6: other requests
      if (var_candidate === undefined) raiseUninitializedVariable("candidate");
      var call210 = request(var_candidate, "setDirectory(1)", [1], opresult211);
      var if212 = GraceDone;
      setLineNumber(180);    // compilenode member
      // call case 6: other requests
      if (var_candidate === undefined) raiseUninitializedVariable("candidate");
      var call213 = request(var_candidate, "exists", [0]);
      if (Grace_isTrue(call213)) {
        setLineNumber(181);    // compilenode return
        if (var_candidate === undefined) raiseUninitializedVariable("candidate");
        throw new ReturnException(var_candidate, returnTarget);
      }
      return if212;
    };
    let applyMeth209 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth209.methodName = "apply(1)";
    applyMeth209.paramCounts = [1];
    applyMeth209.paramNames = ["each"];
    applyMeth209.definitionLine = 178;
    applyMeth209.definitionModule = "unixFilePath";
    block209.methods["apply(1)"] = applyMeth209;
    let matchesMeth209 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth209.methodName = "matches(1)";
    matchesMeth209.paramCounts = [1];
    matchesMeth209.paramNames = ["each"];
    matchesMeth209.definitionLine = 178;
    matchesMeth209.definitionModule = "unixFilePath";
    block209.methods["matches(1)"] = matchesMeth209;
    // call case 6: other requests
    var call208 = request(var_locations, "do(1)", [1], block209);
    setLineNumber(184);    // compilenode call
    // call case 6: other requests
    var call214 = request(var_action, "apply(1)", [1], var_locations);
    return call214;
  };    // end of method file(_)onPath(_)otherwise(_)
  this.methods["file(1)onPath(1)otherwise(1)"] = func196;
  func196.methodName = "file(1)onPath(1)otherwise(1)";
  func196.paramCounts = [1, 1, 1];
  func196.paramNames = ["name", "pathString", "action"];
  func196.definitionLine = 167;
  func196.definitionModule = "unixFilePath";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_unixFilePath = gracecode_unixFilePath;
if (typeof window !== "undefined")
  window.gracecode_unixFilePath = gracecode_unixFilePath;
gracecode_unixFilePath.imports = ["io", "standardGrace"];
gracecode_unixFilePath.definitionModule = "unixFilePath";
gracecode_unixFilePath.definitionLine = 1;
