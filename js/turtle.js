var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["turtle"] = "classes:\nconfidential:\n backingCanvas\n backingCanvas:=(backingCanvas': Unknown) \u2192 Done\n canvas\n canvas:=(canvas': Unknown) \u2192 Done\n canvasElement\n canvasElement:=(canvasElement': Unknown) \u2192 Done\n ctx\n ctx:=(ctx': Unknown) \u2192 Done\n delay\n delay:=(delay': Unknown) \u2192 Done\n document\n document:=(document': Unknown) \u2192 Done\n drawingEnabled\n drawingEnabled:=(drawingEnabled': Unknown) \u2192 Done\n initialised\n initialised:=(initialised': Unknown) \u2192 Done\n maxActionsDrawn\n maxActionsDrawn:=(maxActionsDrawn': Unknown) \u2192 Done\n started\n started:=(started': Unknown) \u2192 Done\n steps\n theWindow\n theWindow:=(theWindow': Unknown) \u2192 Done\n turtleAngle:=(turtleAngle': Unknown) \u2192 Done\n useCanvas\n useCanvas:=(useCanvas': Unknown) \u2192 Done\n usePopup\n usePopup:=(usePopup': Unknown) \u2192 Done\n windowHeight\n windowHeight:=(windowHeight': Unknown) \u2192 Done\n windowWidth\n windowWidth:=(windowWidth': Unknown) \u2192 Done\n x\n x:=(x': Unknown) \u2192 Done\n y\n y:=(y': Unknown) \u2192 Done\ndialect:\n standardGrace\nfresh-methods:\n r(1)g(1)b(1)\nfresh:r(1)g(1)b(1):\n b\n g\n r\nmodules:\n collectionsPrelude\n dom\n standardGrace\n sys\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/turtle.grace\npublic:\n black\n blue\n createPopupWindow\n drawTurtle(1)\n green\n initialise\n move(3)\n penDown\n penUp\n r(1)g(1)b(1)\n red\n speed\n speed:=(1)\n start\n turnLeft(1)\n turnRight(1)\n turtleAngle\n turtlePosition\n useCanvas(1)\npublicMethodTypes:\n black \u2192 Unknown\n blue \u2192 Unknown\n createPopupWindow\n drawTurtle(angle)\n green \u2192 Unknown\n initialise\n move(dist, lineCol, lineWidth)\n penDown\n penUp\n r(r')g(g')b(b')\n red \u2192 Unknown\n speed \u2192 Unknown\n speed:=(speed': Unknown) \u2192 Done\n start\n turnLeft(ang)\n turnRight(ang)\n turtleAngle \u2192 Unknown\n turtlePosition\n useCanvas(size:Point)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["turtle"] = [
    "import \"dom\" as dom",
    "import \"sys\" as sys",
    "",
    "// These are vars to allow updating them only when \"start\" runs",
    "var document",
    "var canvas",
    "var ctx",
    "var theWindow",
    "var canvasElement",
    "var useCanvas",
    "",
    "class r(r')g(g')b(b') {",
    "    def r is readable = r'",
    "    def g is readable = g'",
    "    def b is readable = b'",
    "}",
    "def black is public = r 0 g 0 b 0",
    "def blue is public = r 0 g 0 b 255",
    "def green is public = r 0 g 255 b 0",
    "def red is public = r 255 g 0 b 0",
    "",
    "var x",
    "var y",
    "var started := false",
    "var maxActionsDrawn := -1",
    "var delay := 1",
    "var usePopup := false",
    "var windowHeight := 700",
    "var windowWidth := 850",
    "",
    "var speed is public := 1",
    "",
    "var turtleAngle is readable := 0",
    "",
    "method turtlePosition {",
    "    initialise",
    "    x@y",
    "}",
    "",
    "// Each frame of the image is a step",
    "def steps = list []",
    "",
    "method drawTurtle(angle) {",
    "    initialise",
    "    def mctx = canvas.getContext \"2d\"",
    "    def triangleSize = 30",
    "    def x' = x + (angle / 180 * π).sin * triangleSize / 2",
    "    def y' = y - (angle / 180 * π).cos * triangleSize / 2",
    "    mctx.beginPath",
    "    mctx.fillStyle := \"rgb(0, 128, 0)\"",
    "    mctx.lineWidth := 3",
    "    mctx.moveTo(x', y')",
    "    mctx.lineTo(x' - ((angle - 75) / 180 * π).cos * triangleSize,",
    "          y' - ((angle - 75) / 180 * π).sin * triangleSize)",
    "    mctx.lineTo(x' + ((angle + 75) / 180 * π).cos * triangleSize,",
    "          y' + ((angle + 75) / 180 * π).sin * triangleSize)",
    "    mctx.lineTo(x', y')",
    "    mctx.fill",
    "    mctx.closePath",
    "}",
    "",
    "var backingCanvas",
    "var drawingEnabled := true",
    "",
    "method move(dist, lineCol, lineWidth) {",
    "    initialise",
    "    def angle = turtleAngle",
    "    def y' = (angle / 180 * π).cos * dist",
    "    def x' = (angle / 180 * π).sin * dist",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    y := y - y'",
    "    x := x + x'",
    "    def mctx = canvas.getContext(\"2d\")",
    "    // One frame for each unit of distance",
    "    for (1..dist.floor) do {i->",
    "        if ((i % speed) == 0) then {",
    "            steps.push {",
    "                def y'' = (angle / 180 * π).cos * i",
    "                def x'' = (angle / 180 * π).sin * i",
    "                mctx.beginPath",
    "                mctx.strokeStyle := \"rgb({lineCol.r}, {lineCol.g}, {lineCol.b})\"",
    "                mctx.lineWidth := lineWidth",
    "                mctx.moveTo(startX, startY)",
    "                y := startY - y''",
    "                x := startX + x''",
    "                if (drawingEnabled) then {",
    "                    mctx.lineTo(x, y)",
    "                    mctx.stroke",
    "                }",
    "                turtleAngle := startAngle",
    "            }",
    "        }",
    "    }",
    "    steps.push {",
    "        def y'' = (angle / 180 * π).cos * dist",
    "        def x'' = (angle / 180 * π).sin * dist",
    "        ctx.beginPath",
    "        ctx.strokeStyle := \"rgb({lineCol.r}, {lineCol.g}, {lineCol.b})\"",
    "        ctx.lineWidth := lineWidth",
    "        ctx.moveTo(startX, startY)",
    "        y := startY - y''",
    "        x := startX + x''",
    "        if (drawingEnabled) then {",
    "            ctx.lineTo(x, y)",
    "            ctx.stroke",
    "        }",
    "        turtleAngle := startAngle",
    "    }",
    "}",
    "method turnRight(ang) {",
    "    initialise",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    for (0..ang.floor) do {i->",
    "        if ((i % speed) == 0) then {",
    "            steps.push {",
    "                x := startX",
    "                y := startY",
    "                turtleAngle := (startAngle + i) % 360",
    "            }",
    "        }",
    "    }",
    "    steps.push {",
    "        x := startX",
    "        y := startY",
    "        turtleAngle := (startAngle + ang) % 360",
    "    }",
    "    turtleAngle := (turtleAngle + ang) % 360",
    "}",
    "method turnLeft(ang) {",
    "    initialise",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    for (0..ang.floor) do { i ->",
    "        if ((i % speed) == 0) then {",
    "            steps.push {",
    "                x := startX",
    "                y := startY",
    "                turtleAngle := (startAngle - i) % 360",
    "            }",
    "        }",
    "    }",
    "    steps.push {",
    "        x := startX",
    "        y := startY",
    "        turtleAngle := (startAngle - ang) % 360",
    "    }",
    "    turtleAngle := (turtleAngle - ang) % 360",
    "}",
    "method penUp {",
    "    initialise",
    "    steps.push {",
    "        drawingEnabled := false",
    "    }",
    "}",
    "method penDown {",
    "    initialise",
    "    steps.push {",
    "        drawingEnabled := true",
    "    }",
    "}",
    "var initialised := false",
    "method initialise {",
    "    if (initialised) then {",
    "        return false",
    "    }",
    "    document := dom.document",
    "",
    "    def tab = document.getElementById \"tab_canvas\"",
    "    if (dom.noObject != tab) then {",
    "        tab.click",
    "    }",
    "    initialised := true",
    "",
    "    // Get the canvas: if the user requested a pop-up, use one",
    "    if (usePopup) then {",
    "        createPopupWindow",
    "    } else {",
    "        // Look for the canvas in the embedded web editor",
    "        canvas := document.getElementById \"standard-canvas\"",
    "",
    "        // Look for the canvas in the web IDE",
    "        if (dom.noObject == canvas) then {",
    "            canvas := document.getElementById \"graphics\"",
    "        }",
    "",
    "        // If these are not found, use a seperate window",
    "        if (dom.noObject == canvas) then {",
    "            createPopupWindow",
    "        }",
    "    }",
    "",
    "    ctx := canvas.getContext(\"2d\")",
    "    ctx.lineWidth := 1",
    "    ctx.fillStyle := \"white\"",
    "    ctx.fillRect(0, 0, canvas.width, canvas.height)",
    "    ctx.strokeStyle := \"black\"",
    "    ctx.rect(0, 0, canvas.width, canvas.height)",
    "    ctx.stroke",
    "",
    "    //Put the cursor in the center",
    "    x := canvas.width/2;",
    "    y := canvas.height/2;",
    "}",
    "",
    "method createPopupWindow {",
    "    // create a pop-up window with a canvas for graphics",
    "    theWindow := dom.window.open(\"\", \"\", \"width={windowWidth}+50, height={windowHeight}+50\")",
    "",
    "    // check to make sure window is open",
    "    if (prelude.inBrowser && (dom.noObject == theWindow)) then {",
    "        print \"Failed to open the graphics window.\\nIs your browser blocking pop-ups?\"",
    "        sys.exit(1)",
    "    }",
    "",
    "    // set the window attributes",
    "    canvasElement := document.createElement \"canvas\"",
    "    canvasElement.width := windowWidth",
    "    canvasElement.height := windowHeight",
    "    canvasElement.style.alignSelf:= \"center\"",
    "    theWindow.document.body.appendChild(canvasElement)",
    "    theWindow.document.title := \"Logo Graphics\"",
    "",
    "    // register the window",
    "    if (dom.doesObject(dom.window) haveProperty \"graceRegisterWindow\") then {",
    "        dom.window.graceRegisterWindow(theWindow)",
    "    }",
    "    // set the canvas",
    "    canvas := canvasElement",
    "}",
    "",
    "method start {",
    "    initialise",
    "    // Iterate through the frames of the image and draw them,",
    "    // each separated in time by 10ms. dom.for()waiting()do",
    "    // uses setTimeout internally so it runs asynchronously.",
    "    backingCanvas := dom.document.createElement \"canvas\"",
    "    backingCanvas.height := canvas.height",
    "    backingCanvas.width := canvas.width",
    "    ctx := backingCanvas.getContext \"2d\"",
    "    def mctx = canvas.getContext \"2d\"",
    "    dom.for (steps) waiting (delay) do { step ->",
    "        mctx.fillStyle := \"white\"",
    "        mctx.fillRect(0, 0, canvas.width, canvas.height)",
    "        step.apply",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        drawTurtle(turtleAngle)",
    "    }",
    "}",
    "",
    "method useCanvas(size:Point) {",
    "    // API for Logo to signal popup use",
    "    usePopup := true",
    "    windowWidth := size.x",
    "    windowHeight := size.y",
    "}" ];
}
function gracecode_turtle() {
  importedModules["turtle"] = this;
  var module$turtle = this;
  this.definitionModule = "turtle";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_turtle_1");
  this.outer_turtle_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "dom" as dom
  if (typeof gracecode_dom == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module dom"));
  var var_dom = do_import("dom", gracecode_dom);
  var func0 = function(argcv) {     // accessor method dom
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("dom", 0, numArgs - 0);
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    return var_dom;
  };    // end of method dom
  this.methods["dom"] = func0;
  func0.methodName = "dom";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "turtle";
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
  func1.definitionModule = "turtle";
  func1.debug = "import";
  func1.confidential = true;
  var func2 = function(argcv, var_r__39__, var_g__39__, var_b__39__) {    // method r(_)g(_)b(_), line 12
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("r(_)g(_)b(_)", 0, numArgs - 3);
    }
    var ouc = emptyGraceObject("r(_)g(_)b(_)", "turtle", 12);
    var ouc_init = this.methods["r(1)g(1)b(1)$build(3)"].call(this, null, var_r__39__, var_g__39__, var_b__39__, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method r(_)g(_)b(_)
  this.methods["r(1)g(1)b(1)"] = func2;
  func2.methodName = "r(1)g(1)b(1)";
  func2.paramCounts = [1, 1, 1];
  func2.paramNames = ["r'", "g'", "b'"];
  func2.definitionLine = 12;
  func2.definitionModule = "turtle";
  var func3 = function(argcv, var_r__39__, var_g__39__, var_b__39__, inheritingObject, aliases, exclusions) {    // method r(_)g(_)b(_)$build(_,_,_), line 12
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("r(_)g(_)b(_)", 0, numArgs - 3);
    }
    var obj4_build = function(ignore, var_r__39__, var_g__39__, var_b__39__, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_turtle_12");
      this.outer_turtle_12 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.r = undefined;
      var reader5_r = function() {  // reader method r
          if (this.data.r === undefined) raiseUninitializedVariable("r");
          return this.data.r;
      };
      reader5_r.isDef = true;
      this.methods["r"] = reader5_r;
      this.data.g = undefined;
      var reader6_g = function() {  // reader method g
          if (this.data.g === undefined) raiseUninitializedVariable("g");
          return this.data.g;
      };
      reader6_g.isDef = true;
      this.methods["g"] = reader6_g;
      this.data.b = undefined;
      var reader7_b = function() {  // reader method b
          if (this.data.b === undefined) raiseUninitializedVariable("b");
          return this.data.b;
      };
      reader7_b.isDef = true;
      this.methods["b"] = reader7_b;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 12;
          m.definitionModule = "turtle";
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
      var obj4_init = function() {    // init of object on line 12
        this.data.r = var_r__39__;
        this.data.g = var_g__39__;
        this.data.b = var_b__39__;
      };
      return obj4_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj4_init = obj4_build.call(inheritingObject, null, var_r__39__, var_g__39__, var_b__39__, this, aliases, exclusions);
    return obj4_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method r(_)g(_)b(_)$build(_,_,_)
  this.methods["r(1)g(1)b(1)$build(3)"] = func3;
  func3.methodName = "r(1)g(1)b(1)$build(3)";
  func3.paramCounts = [1, 1, 1];
  func3.paramNames = ["r'", "g'", "b'"];
  func3.definitionLine = 12;
  func3.definitionModule = "turtle";
  var func8 = function(argcv) {    // method turtlePosition, line 35
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("turtlePosition", 0, numArgs - 0);
    }
    setLineNumber(36);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call9 = selfRequest(this, "initialise", [0]);
    setLineNumber(37);    // compilenode op
    if (var_x === undefined) raiseUninitializedVariable("x");
    if (var_y === undefined) raiseUninitializedVariable("y");
    var opresult10 = request(var_x, "@(1)", [1], var_y);
    return opresult10;
  };    // end of method turtlePosition
  this.methods["turtlePosition"] = func8;
  func8.methodName = "turtlePosition";
  func8.paramCounts = [0];
  func8.paramNames = [];
  func8.definitionLine = 35;
  func8.definitionModule = "turtle";
  var func11 = function(argcv, var_angle) {    // method drawTurtle(_), line 43
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("drawTurtle(_)", 0, numArgs - 1);
    }
    setLineNumber(44);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call12 = selfRequest(this, "initialise", [0]);
    setLineNumber(45);    // compilenode string
    var string14 = new GraceString("2d");
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call13 = request(var_canvas, "getContext(1)", [1], string14);
    var var_mctx = call13;
    setLineNumber(46);    // compilenode num
    var var_triangleSize = new GraceNum(30);
    setLineNumber(47);    // compilenode op
    if (var_x === undefined) raiseUninitializedVariable("x");
    // call case 6: other requests
    var quotient16 = request(var_angle, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call17 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod18 = request(quotient16, "*(1)", [1], call17);
    var call15 = request(prod18, "sin", [0]);
    var prod19 = request(call15, "*(1)", [1], var_triangleSize);
    var quotient20 = request(prod19, "/(1)", [1], new GraceNum(2));
    var sum21 = request(var_x, "+(1)", [1], quotient20);
    var var_x__39__ = sum21;
    setLineNumber(48);    // compilenode op
    if (var_y === undefined) raiseUninitializedVariable("y");
    // call case 6: other requests
    var quotient23 = request(var_angle, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call24 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod25 = request(quotient23, "*(1)", [1], call24);
    var call22 = request(prod25, "cos", [0]);
    var prod26 = request(call22, "*(1)", [1], var_triangleSize);
    var quotient27 = request(prod26, "/(1)", [1], new GraceNum(2));
    var diff28 = request(var_y, "-(1)", [1], quotient27);
    var var_y__39__ = diff28;
    setLineNumber(49);    // compilenode member
    // call case 6: other requests
    var call29 = request(var_mctx, "beginPath", [0]);
    setLineNumber(50);    // compilenode string
    var string31 = new GraceString("rgb(0, 128, 0)");
    // call case 6: other requests
    var call30 = request(var_mctx, "fillStyle:=(1)", [1], string31);
    setLineNumber(51);    // compilenode num
    // call case 6: other requests
    var call32 = request(var_mctx, "lineWidth:=(1)", [1], new GraceNum(3));
    setLineNumber(52);    // compilenode call
    // call case 6: other requests
    var call33 = request(var_mctx, "moveTo(2)", [2], var_x__39__, var_y__39__);
    setLineNumber(53);    // compilenode member
    // call case 6: other requests
    var diff36 = request(var_angle, "-(1)", [1], new GraceNum(75));
    var quotient37 = request(diff36, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call38 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod39 = request(quotient37, "*(1)", [1], call38);
    var call35 = request(prod39, "cos", [0]);
    var prod40 = request(call35, "*(1)", [1], var_triangleSize);
    var diff41 = request(var_x__39__, "-(1)", [1], prod40);
    setLineNumber(54);    // compilenode member
    // call case 6: other requests
    var diff43 = request(var_angle, "-(1)", [1], new GraceNum(75));
    var quotient44 = request(diff43, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call45 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod46 = request(quotient44, "*(1)", [1], call45);
    var call42 = request(prod46, "sin", [0]);
    var prod47 = request(call42, "*(1)", [1], var_triangleSize);
    var diff48 = request(var_y__39__, "-(1)", [1], prod47);
    // call case 6: other requests
    var call34 = request(var_mctx, "lineTo(2)", [2], diff41, diff48);
    setLineNumber(55);    // compilenode member
    // call case 6: other requests
    var sum51 = request(var_angle, "+(1)", [1], new GraceNum(75));
    var quotient52 = request(sum51, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call53 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod54 = request(quotient52, "*(1)", [1], call53);
    var call50 = request(prod54, "cos", [0]);
    var prod55 = request(call50, "*(1)", [1], var_triangleSize);
    var sum56 = request(var_x__39__, "+(1)", [1], prod55);
    setLineNumber(56);    // compilenode member
    // call case 6: other requests
    var sum58 = request(var_angle, "+(1)", [1], new GraceNum(75));
    var quotient59 = request(sum58, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call60 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod61 = request(quotient59, "*(1)", [1], call60);
    var call57 = request(prod61, "sin", [0]);
    var prod62 = request(call57, "*(1)", [1], var_triangleSize);
    var sum63 = request(var_y__39__, "+(1)", [1], prod62);
    // call case 6: other requests
    var call49 = request(var_mctx, "lineTo(2)", [2], sum56, sum63);
    setLineNumber(57);    // compilenode call
    // call case 6: other requests
    var call64 = request(var_mctx, "lineTo(2)", [2], var_x__39__, var_y__39__);
    setLineNumber(58);    // compilenode member
    // call case 6: other requests
    var call65 = request(var_mctx, "fill", [0]);
    setLineNumber(59);    // compilenode member
    // call case 6: other requests
    var call66 = request(var_mctx, "closePath", [0]);
    return call66;
  };    // end of method drawTurtle(_)
  this.methods["drawTurtle(1)"] = func11;
  func11.methodName = "drawTurtle(1)";
  func11.paramCounts = [1];
  func11.paramNames = ["angle"];
  func11.definitionLine = 43;
  func11.definitionModule = "turtle";
  var func67 = function(argcv, var_dist, var_lineCol, var_lineWidth) {    // method move(_,_,_), line 65
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 3) && (numArgs !== 3)) {
        raiseTypeArgError("move(_,_,_)", 0, numArgs - 3);
    }
    setLineNumber(66);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call68 = selfRequest(this, "initialise", [0]);
    setLineNumber(67);    // compilenode defdec
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var var_angle = var_turtleAngle;
    setLineNumber(68);    // compilenode member
    // call case 6: other requests
    var quotient70 = request(var_angle, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call71 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod72 = request(quotient70, "*(1)", [1], call71);
    var call69 = request(prod72, "cos", [0]);
    var prod73 = request(call69, "*(1)", [1], var_dist);
    var var_y__39__ = prod73;
    setLineNumber(69);    // compilenode member
    // call case 6: other requests
    var quotient75 = request(var_angle, "/(1)", [1], new GraceNum(180));
    // call case 2: outer request
    var call76 = selfRequest(var_prelude, "\u03c0", [0]);
    var prod77 = request(quotient75, "*(1)", [1], call76);
    var call74 = request(prod77, "sin", [0]);
    var prod78 = request(call74, "*(1)", [1], var_dist);
    var var_x__39__ = prod78;
    setLineNumber(70);    // compilenode defdec
    if (var_x === undefined) raiseUninitializedVariable("x");
    var var_startX = var_x;
    setLineNumber(71);    // compilenode defdec
    if (var_y === undefined) raiseUninitializedVariable("y");
    var var_startY = var_y;
    setLineNumber(72);    // compilenode defdec
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var var_startAngle = var_turtleAngle;
    setLineNumber(73);    // compilenode op
    if (var_y === undefined) raiseUninitializedVariable("y");
    var diff79 = request(var_y, "-(1)", [1], var_y__39__);
    var_y = diff79;
    setLineNumber(74);    // compilenode op
    if (var_x === undefined) raiseUninitializedVariable("x");
    var sum80 = request(var_x, "+(1)", [1], var_x__39__);
    var_x = sum80;
    setLineNumber(75);    // compilenode string
    var string82 = new GraceString("2d");
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call81 = request(var_canvas, "getContext(1)", [1], string82);
    var var_mctx = call81;
    setLineNumber(77);    // compilenode member
    // call case 6: other requests
    var call84 = request(var_dist, "floor", [0]);
    var opresult85 = request(new GraceNum(1), "..(1)", [1], call84);
    var block86 = new GraceBlock(this, 77, 1);
    block86.guard = jsTrue;
    block86.real = function block86(var_i) {
      var if87 = GraceDone;
      setLineNumber(78);    // compilenode op
      if (var_speed === undefined) raiseUninitializedVariable("speed");
      var modulus88 = request(var_i, "%(1)", [1], var_speed);
      var opresult89 = request(modulus88, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult89)) {
        setLineNumber(79);    // compilenode block
        var block91 = new GraceBlock(this, 79, 0);
        block91.guard = jsTrue;
        block91.real = function block91() {
          setLineNumber(80);    // compilenode member
          // call case 6: other requests
          if (var_angle === undefined) raiseUninitializedVariable("angle");
          var quotient93 = request(var_angle, "/(1)", [1], new GraceNum(180));
          // call case 2: outer request
          var call94 = selfRequest(var_prelude, "\u03c0", [0]);
          var prod95 = request(quotient93, "*(1)", [1], call94);
          var call92 = request(prod95, "cos", [0]);
          var prod96 = request(call92, "*(1)", [1], var_i);
          var var_y__39____39__ = prod96;
          setLineNumber(81);    // compilenode member
          // call case 6: other requests
          if (var_angle === undefined) raiseUninitializedVariable("angle");
          var quotient98 = request(var_angle, "/(1)", [1], new GraceNum(180));
          // call case 2: outer request
          var call99 = selfRequest(var_prelude, "\u03c0", [0]);
          var prod100 = request(quotient98, "*(1)", [1], call99);
          var call97 = request(prod100, "sin", [0]);
          var prod101 = request(call97, "*(1)", [1], var_i);
          var var_x__39____39__ = prod101;
          setLineNumber(82);    // compilenode member
          // call case 6: other requests
          if (var_mctx === undefined) raiseUninitializedVariable("mctx");
          var call102 = request(var_mctx, "beginPath", [0]);
          setLineNumber(83);    // compilenode string
          var string104 = new GraceString("rgb(");
          // call case 6: other requests
          var call105 = request(var_lineCol, "r", [0]);
          var opresult106 = request(string104, "++(1)", [1], call105);
          var string107 = new GraceString(", ");
          var opresult108 = request(opresult106, "++(1)", [1], string107);
          // call case 6: other requests
          var call109 = request(var_lineCol, "g", [0]);
          var opresult110 = request(opresult108, "++(1)", [1], call109);
          var string111 = new GraceString(", ");
          var opresult112 = request(opresult110, "++(1)", [1], string111);
          // call case 6: other requests
          var call113 = request(var_lineCol, "b", [0]);
          var opresult114 = request(opresult112, "++(1)", [1], call113);
          var string115 = new GraceString(")");
          var opresult116 = request(opresult114, "++(1)", [1], string115);
          // call case 6: other requests
          if (var_mctx === undefined) raiseUninitializedVariable("mctx");
          var call103 = request(var_mctx, "strokeStyle:=(1)", [1], opresult116);
          setLineNumber(84);    // compilenode call
          // call case 6: other requests
          if (var_mctx === undefined) raiseUninitializedVariable("mctx");
          var call117 = request(var_mctx, "lineWidth:=(1)", [1], var_lineWidth);
          setLineNumber(85);    // compilenode call
          if (var_startX === undefined) raiseUninitializedVariable("startX");
          if (var_startY === undefined) raiseUninitializedVariable("startY");
          // call case 6: other requests
          if (var_mctx === undefined) raiseUninitializedVariable("mctx");
          var call118 = request(var_mctx, "moveTo(2)", [2], var_startX, var_startY);
          setLineNumber(86);    // compilenode op
          if (var_startY === undefined) raiseUninitializedVariable("startY");
          if (var_y__39____39__ === undefined) raiseUninitializedVariable("y''");
          var diff119 = request(var_startY, "-(1)", [1], var_y__39____39__);
          var_y = diff119;
          setLineNumber(87);    // compilenode op
          if (var_startX === undefined) raiseUninitializedVariable("startX");
          if (var_x__39____39__ === undefined) raiseUninitializedVariable("x''");
          var sum120 = request(var_startX, "+(1)", [1], var_x__39____39__);
          var_x = sum120;
          var if121 = GraceDone;
          setLineNumber(88);    // compilenode if
          if (var_drawingEnabled === undefined) raiseUninitializedVariable("drawingEnabled");
          if (Grace_isTrue(var_drawingEnabled)) {
            setLineNumber(89);    // compilenode call
            if (var_x === undefined) raiseUninitializedVariable("x");
            if (var_y === undefined) raiseUninitializedVariable("y");
            // call case 6: other requests
            if (var_mctx === undefined) raiseUninitializedVariable("mctx");
            var call122 = request(var_mctx, "lineTo(2)", [2], var_x, var_y);
            setLineNumber(90);    // compilenode member
            // call case 6: other requests
            if (var_mctx === undefined) raiseUninitializedVariable("mctx");
            var call123 = request(var_mctx, "stroke", [0]);
            if121 = call123;
          }
          setLineNumber(92);    // compilenode bind
          if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
          var_turtleAngle = var_startAngle;
          return GraceDone;
        };
        let applyMeth91 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth91.methodName = "apply";
        applyMeth91.paramCounts = [0];
        applyMeth91.paramNames = [];
        applyMeth91.definitionLine = 79;
        applyMeth91.definitionModule = "turtle";
        block91.methods["apply"] = applyMeth91;
        // call case 6: other requests
        if (var_steps === undefined) raiseUninitializedVariable("steps");
        var call90 = request(var_steps, "push(1)", [1], block91);
        if87 = call90;
      }
      return if87;
    };
    let applyMeth86 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth86.methodName = "apply(1)";
    applyMeth86.paramCounts = [1];
    applyMeth86.paramNames = ["i"];
    applyMeth86.definitionLine = 77;
    applyMeth86.definitionModule = "turtle";
    block86.methods["apply(1)"] = applyMeth86;
    let matchesMeth86 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth86.methodName = "matches(1)";
    matchesMeth86.paramCounts = [1];
    matchesMeth86.paramNames = ["i"];
    matchesMeth86.definitionLine = 77;
    matchesMeth86.definitionModule = "turtle";
    block86.methods["matches(1)"] = matchesMeth86;
    // call case 2: outer request
    var call83 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult85, block86);
    setLineNumber(96);    // compilenode block
    var block125 = new GraceBlock(this, 96, 0);
    block125.guard = jsTrue;
    block125.real = function block125() {
      setLineNumber(97);    // compilenode member
      // call case 6: other requests
      if (var_angle === undefined) raiseUninitializedVariable("angle");
      var quotient127 = request(var_angle, "/(1)", [1], new GraceNum(180));
      // call case 2: outer request
      var call128 = selfRequest(var_prelude, "\u03c0", [0]);
      var prod129 = request(quotient127, "*(1)", [1], call128);
      var call126 = request(prod129, "cos", [0]);
      var prod130 = request(call126, "*(1)", [1], var_dist);
      var var_y__39____39__ = prod130;
      setLineNumber(98);    // compilenode member
      // call case 6: other requests
      if (var_angle === undefined) raiseUninitializedVariable("angle");
      var quotient132 = request(var_angle, "/(1)", [1], new GraceNum(180));
      // call case 2: outer request
      var call133 = selfRequest(var_prelude, "\u03c0", [0]);
      var prod134 = request(quotient132, "*(1)", [1], call133);
      var call131 = request(prod134, "sin", [0]);
      var prod135 = request(call131, "*(1)", [1], var_dist);
      var var_x__39____39__ = prod135;
      setLineNumber(99);    // compilenode member
      // call case 6: other requests
      if (var_ctx === undefined) raiseUninitializedVariable("ctx");
      var call136 = request(var_ctx, "beginPath", [0]);
      setLineNumber(100);    // compilenode string
      var string138 = new GraceString("rgb(");
      // call case 6: other requests
      var call139 = request(var_lineCol, "r", [0]);
      var opresult140 = request(string138, "++(1)", [1], call139);
      var string141 = new GraceString(", ");
      var opresult142 = request(opresult140, "++(1)", [1], string141);
      // call case 6: other requests
      var call143 = request(var_lineCol, "g", [0]);
      var opresult144 = request(opresult142, "++(1)", [1], call143);
      var string145 = new GraceString(", ");
      var opresult146 = request(opresult144, "++(1)", [1], string145);
      // call case 6: other requests
      var call147 = request(var_lineCol, "b", [0]);
      var opresult148 = request(opresult146, "++(1)", [1], call147);
      var string149 = new GraceString(")");
      var opresult150 = request(opresult148, "++(1)", [1], string149);
      // call case 6: other requests
      if (var_ctx === undefined) raiseUninitializedVariable("ctx");
      var call137 = request(var_ctx, "strokeStyle:=(1)", [1], opresult150);
      setLineNumber(101);    // compilenode call
      // call case 6: other requests
      if (var_ctx === undefined) raiseUninitializedVariable("ctx");
      var call151 = request(var_ctx, "lineWidth:=(1)", [1], var_lineWidth);
      setLineNumber(102);    // compilenode call
      if (var_startX === undefined) raiseUninitializedVariable("startX");
      if (var_startY === undefined) raiseUninitializedVariable("startY");
      // call case 6: other requests
      if (var_ctx === undefined) raiseUninitializedVariable("ctx");
      var call152 = request(var_ctx, "moveTo(2)", [2], var_startX, var_startY);
      setLineNumber(103);    // compilenode op
      if (var_startY === undefined) raiseUninitializedVariable("startY");
      if (var_y__39____39__ === undefined) raiseUninitializedVariable("y''");
      var diff153 = request(var_startY, "-(1)", [1], var_y__39____39__);
      var_y = diff153;
      setLineNumber(104);    // compilenode op
      if (var_startX === undefined) raiseUninitializedVariable("startX");
      if (var_x__39____39__ === undefined) raiseUninitializedVariable("x''");
      var sum154 = request(var_startX, "+(1)", [1], var_x__39____39__);
      var_x = sum154;
      var if155 = GraceDone;
      setLineNumber(105);    // compilenode if
      if (var_drawingEnabled === undefined) raiseUninitializedVariable("drawingEnabled");
      if (Grace_isTrue(var_drawingEnabled)) {
        setLineNumber(106);    // compilenode call
        if (var_x === undefined) raiseUninitializedVariable("x");
        if (var_y === undefined) raiseUninitializedVariable("y");
        // call case 6: other requests
        if (var_ctx === undefined) raiseUninitializedVariable("ctx");
        var call156 = request(var_ctx, "lineTo(2)", [2], var_x, var_y);
        setLineNumber(107);    // compilenode member
        // call case 6: other requests
        if (var_ctx === undefined) raiseUninitializedVariable("ctx");
        var call157 = request(var_ctx, "stroke", [0]);
        if155 = call157;
      }
      setLineNumber(109);    // compilenode bind
      if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
      var_turtleAngle = var_startAngle;
      return GraceDone;
    };
    let applyMeth125 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth125.methodName = "apply";
    applyMeth125.paramCounts = [0];
    applyMeth125.paramNames = [];
    applyMeth125.definitionLine = 96;
    applyMeth125.definitionModule = "turtle";
    block125.methods["apply"] = applyMeth125;
    // call case 6: other requests
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    var call124 = request(var_steps, "push(1)", [1], block125);
    return call124;
  };    // end of method move(_,_,_)
  this.methods["move(3)"] = func67;
  func67.methodName = "move(3)";
  func67.paramCounts = [3];
  func67.paramNames = ["dist", "lineCol", "lineWidth"];
  func67.definitionLine = 65;
  func67.definitionModule = "turtle";
  var func158 = function(argcv, var_ang) {    // method turnRight(_), line 112
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("turnRight(_)", 0, numArgs - 1);
    }
    setLineNumber(113);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call159 = selfRequest(this, "initialise", [0]);
    setLineNumber(114);    // compilenode defdec
    if (var_x === undefined) raiseUninitializedVariable("x");
    var var_startX = var_x;
    setLineNumber(115);    // compilenode defdec
    if (var_y === undefined) raiseUninitializedVariable("y");
    var var_startY = var_y;
    setLineNumber(116);    // compilenode defdec
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var var_startAngle = var_turtleAngle;
    setLineNumber(117);    // compilenode member
    // call case 6: other requests
    var call161 = request(var_ang, "floor", [0]);
    var opresult162 = request(new GraceNum(0), "..(1)", [1], call161);
    var block163 = new GraceBlock(this, 117, 1);
    block163.guard = jsTrue;
    block163.real = function block163(var_i) {
      var if164 = GraceDone;
      setLineNumber(118);    // compilenode op
      if (var_speed === undefined) raiseUninitializedVariable("speed");
      var modulus165 = request(var_i, "%(1)", [1], var_speed);
      var opresult166 = request(modulus165, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult166)) {
        setLineNumber(119);    // compilenode block
        var block168 = new GraceBlock(this, 119, 0);
        block168.guard = jsTrue;
        block168.real = function block168() {
          setLineNumber(120);    // compilenode bind
          if (var_startX === undefined) raiseUninitializedVariable("startX");
          var_x = var_startX;
          setLineNumber(121);    // compilenode bind
          if (var_startY === undefined) raiseUninitializedVariable("startY");
          var_y = var_startY;
          setLineNumber(122);    // compilenode op
          if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
          var sum169 = request(var_startAngle, "+(1)", [1], var_i);
          var modulus170 = request(sum169, "%(1)", [1], new GraceNum(360));
          var_turtleAngle = modulus170;
          return GraceDone;
        };
        let applyMeth168 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth168.methodName = "apply";
        applyMeth168.paramCounts = [0];
        applyMeth168.paramNames = [];
        applyMeth168.definitionLine = 119;
        applyMeth168.definitionModule = "turtle";
        block168.methods["apply"] = applyMeth168;
        // call case 6: other requests
        if (var_steps === undefined) raiseUninitializedVariable("steps");
        var call167 = request(var_steps, "push(1)", [1], block168);
        if164 = call167;
      }
      return if164;
    };
    let applyMeth163 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth163.methodName = "apply(1)";
    applyMeth163.paramCounts = [1];
    applyMeth163.paramNames = ["i"];
    applyMeth163.definitionLine = 117;
    applyMeth163.definitionModule = "turtle";
    block163.methods["apply(1)"] = applyMeth163;
    let matchesMeth163 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth163.methodName = "matches(1)";
    matchesMeth163.paramCounts = [1];
    matchesMeth163.paramNames = ["i"];
    matchesMeth163.definitionLine = 117;
    matchesMeth163.definitionModule = "turtle";
    block163.methods["matches(1)"] = matchesMeth163;
    // call case 2: outer request
    var call160 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult162, block163);
    setLineNumber(126);    // compilenode block
    var block172 = new GraceBlock(this, 126, 0);
    block172.guard = jsTrue;
    block172.real = function block172() {
      setLineNumber(127);    // compilenode bind
      if (var_startX === undefined) raiseUninitializedVariable("startX");
      var_x = var_startX;
      setLineNumber(128);    // compilenode bind
      if (var_startY === undefined) raiseUninitializedVariable("startY");
      var_y = var_startY;
      setLineNumber(129);    // compilenode op
      if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
      var sum173 = request(var_startAngle, "+(1)", [1], var_ang);
      var modulus174 = request(sum173, "%(1)", [1], new GraceNum(360));
      var_turtleAngle = modulus174;
      return GraceDone;
    };
    let applyMeth172 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth172.methodName = "apply";
    applyMeth172.paramCounts = [0];
    applyMeth172.paramNames = [];
    applyMeth172.definitionLine = 126;
    applyMeth172.definitionModule = "turtle";
    block172.methods["apply"] = applyMeth172;
    // call case 6: other requests
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    var call171 = request(var_steps, "push(1)", [1], block172);
    setLineNumber(131);    // compilenode op
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var sum175 = request(var_turtleAngle, "+(1)", [1], var_ang);
    var modulus176 = request(sum175, "%(1)", [1], new GraceNum(360));
    var_turtleAngle = modulus176;
    return GraceDone;
  };    // end of method turnRight(_)
  this.methods["turnRight(1)"] = func158;
  func158.methodName = "turnRight(1)";
  func158.paramCounts = [1];
  func158.paramNames = ["ang"];
  func158.definitionLine = 112;
  func158.definitionModule = "turtle";
  var func177 = function(argcv, var_ang) {    // method turnLeft(_), line 133
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("turnLeft(_)", 0, numArgs - 1);
    }
    setLineNumber(134);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call178 = selfRequest(this, "initialise", [0]);
    setLineNumber(135);    // compilenode defdec
    if (var_x === undefined) raiseUninitializedVariable("x");
    var var_startX = var_x;
    setLineNumber(136);    // compilenode defdec
    if (var_y === undefined) raiseUninitializedVariable("y");
    var var_startY = var_y;
    setLineNumber(137);    // compilenode defdec
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var var_startAngle = var_turtleAngle;
    setLineNumber(138);    // compilenode member
    // call case 6: other requests
    var call180 = request(var_ang, "floor", [0]);
    var opresult181 = request(new GraceNum(0), "..(1)", [1], call180);
    var block182 = new GraceBlock(this, 138, 1);
    block182.guard = jsTrue;
    block182.real = function block182(var_i) {
      var if183 = GraceDone;
      setLineNumber(139);    // compilenode op
      if (var_speed === undefined) raiseUninitializedVariable("speed");
      var modulus184 = request(var_i, "%(1)", [1], var_speed);
      var opresult185 = request(modulus184, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult185)) {
        setLineNumber(140);    // compilenode block
        var block187 = new GraceBlock(this, 140, 0);
        block187.guard = jsTrue;
        block187.real = function block187() {
          setLineNumber(141);    // compilenode bind
          if (var_startX === undefined) raiseUninitializedVariable("startX");
          var_x = var_startX;
          setLineNumber(142);    // compilenode bind
          if (var_startY === undefined) raiseUninitializedVariable("startY");
          var_y = var_startY;
          setLineNumber(143);    // compilenode op
          if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
          var diff188 = request(var_startAngle, "-(1)", [1], var_i);
          var modulus189 = request(diff188, "%(1)", [1], new GraceNum(360));
          var_turtleAngle = modulus189;
          return GraceDone;
        };
        let applyMeth187 = function apply (argcv) {
            return this.real.apply(this.receiver);
        };
        applyMeth187.methodName = "apply";
        applyMeth187.paramCounts = [0];
        applyMeth187.paramNames = [];
        applyMeth187.definitionLine = 140;
        applyMeth187.definitionModule = "turtle";
        block187.methods["apply"] = applyMeth187;
        // call case 6: other requests
        if (var_steps === undefined) raiseUninitializedVariable("steps");
        var call186 = request(var_steps, "push(1)", [1], block187);
        if183 = call186;
      }
      return if183;
    };
    let applyMeth182 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth182.methodName = "apply(1)";
    applyMeth182.paramCounts = [1];
    applyMeth182.paramNames = ["i"];
    applyMeth182.definitionLine = 138;
    applyMeth182.definitionModule = "turtle";
    block182.methods["apply(1)"] = applyMeth182;
    let matchesMeth182 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth182.methodName = "matches(1)";
    matchesMeth182.paramCounts = [1];
    matchesMeth182.paramNames = ["i"];
    matchesMeth182.definitionLine = 138;
    matchesMeth182.definitionModule = "turtle";
    block182.methods["matches(1)"] = matchesMeth182;
    // call case 2: outer request
    var call179 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], opresult181, block182);
    setLineNumber(147);    // compilenode block
    var block191 = new GraceBlock(this, 147, 0);
    block191.guard = jsTrue;
    block191.real = function block191() {
      setLineNumber(148);    // compilenode bind
      if (var_startX === undefined) raiseUninitializedVariable("startX");
      var_x = var_startX;
      setLineNumber(149);    // compilenode bind
      if (var_startY === undefined) raiseUninitializedVariable("startY");
      var_y = var_startY;
      setLineNumber(150);    // compilenode op
      if (var_startAngle === undefined) raiseUninitializedVariable("startAngle");
      var diff192 = request(var_startAngle, "-(1)", [1], var_ang);
      var modulus193 = request(diff192, "%(1)", [1], new GraceNum(360));
      var_turtleAngle = modulus193;
      return GraceDone;
    };
    let applyMeth191 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth191.methodName = "apply";
    applyMeth191.paramCounts = [0];
    applyMeth191.paramNames = [];
    applyMeth191.definitionLine = 147;
    applyMeth191.definitionModule = "turtle";
    block191.methods["apply"] = applyMeth191;
    // call case 6: other requests
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    var call190 = request(var_steps, "push(1)", [1], block191);
    setLineNumber(152);    // compilenode op
    if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
    var diff194 = request(var_turtleAngle, "-(1)", [1], var_ang);
    var modulus195 = request(diff194, "%(1)", [1], new GraceNum(360));
    var_turtleAngle = modulus195;
    return GraceDone;
  };    // end of method turnLeft(_)
  this.methods["turnLeft(1)"] = func177;
  func177.methodName = "turnLeft(1)";
  func177.paramCounts = [1];
  func177.paramNames = ["ang"];
  func177.definitionLine = 133;
  func177.definitionModule = "turtle";
  var func196 = function(argcv) {    // method penUp, line 154
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("penUp", 0, numArgs - 0);
    }
    setLineNumber(155);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call197 = selfRequest(this, "initialise", [0]);
    setLineNumber(156);    // compilenode block
    var block199 = new GraceBlock(this, 156, 0);
    block199.guard = jsTrue;
    block199.real = function block199() {
      setLineNumber(157);    // compilenode bind
      var_drawingEnabled = GraceFalse;
      return GraceDone;
    };
    let applyMeth199 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth199.methodName = "apply";
    applyMeth199.paramCounts = [0];
    applyMeth199.paramNames = [];
    applyMeth199.definitionLine = 156;
    applyMeth199.definitionModule = "turtle";
    block199.methods["apply"] = applyMeth199;
    // call case 6: other requests
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    var call198 = request(var_steps, "push(1)", [1], block199);
    return call198;
  };    // end of method penUp
  this.methods["penUp"] = func196;
  func196.methodName = "penUp";
  func196.paramCounts = [0];
  func196.paramNames = [];
  func196.definitionLine = 154;
  func196.definitionModule = "turtle";
  var func200 = function(argcv) {    // method penDown, line 160
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("penDown", 0, numArgs - 0);
    }
    setLineNumber(161);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call201 = selfRequest(this, "initialise", [0]);
    setLineNumber(162);    // compilenode block
    var block203 = new GraceBlock(this, 162, 0);
    block203.guard = jsTrue;
    block203.real = function block203() {
      setLineNumber(163);    // compilenode bind
      var_drawingEnabled = GraceTrue;
      return GraceDone;
    };
    let applyMeth203 = function apply (argcv) {
        return this.real.apply(this.receiver);
    };
    applyMeth203.methodName = "apply";
    applyMeth203.paramCounts = [0];
    applyMeth203.paramNames = [];
    applyMeth203.definitionLine = 162;
    applyMeth203.definitionModule = "turtle";
    block203.methods["apply"] = applyMeth203;
    // call case 6: other requests
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    var call202 = request(var_steps, "push(1)", [1], block203);
    return call202;
  };    // end of method penDown
  this.methods["penDown"] = func200;
  func200.methodName = "penDown";
  func200.paramCounts = [0];
  func200.paramNames = [];
  func200.definitionLine = 160;
  func200.definitionModule = "turtle";
  var func204 = function(argcv) {    // method initialise, line 167
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("initialise", 0, numArgs - 0);
    }
    var if205 = GraceDone;
    setLineNumber(168);    // compilenode if
    if (var_initialised === undefined) raiseUninitializedVariable("initialised");
    if (Grace_isTrue(var_initialised)) {
      setLineNumber(169);    // compilenode return
      return GraceFalse;
    }
    setLineNumber(171);    // compilenode member
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call206 = request(var_dom, "document", [0]);
    var_document = call206;
    setLineNumber(173);    // compilenode string
    var string208 = new GraceString("tab_canvas");
    // call case 6: other requests
    if (var_document === undefined) raiseUninitializedVariable("document");
    var call207 = request(var_document, "getElementById(1)", [1], string208);
    var var_tab = call207;
    var if209 = GraceDone;
    setLineNumber(174);    // compilenode member
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call210 = request(var_dom, "noObject", [0]);
    var opresult211 = request(call210, "\u2260(1)", [1], var_tab);
    if (Grace_isTrue(opresult211)) {
      setLineNumber(175);    // compilenode member
      // call case 6: other requests
      if (var_tab === undefined) raiseUninitializedVariable("tab");
      var call212 = request(var_tab, "click", [0]);
      if209 = call212;
    }
    setLineNumber(177);    // compilenode bind
    var_initialised = GraceTrue;
    var if213 = GraceDone;
    setLineNumber(180);    // compilenode if
    if (var_usePopup === undefined) raiseUninitializedVariable("usePopup");
    if (Grace_isTrue(var_usePopup)) {
      setLineNumber(181);    // compilenode member
      // call case 4: self request with 0 args and 0 typeArgs 
      var call214 = selfRequest(this, "createPopupWindow", [0]);
      if213 = call214;
    } else {
      setLineNumber(184);    // compilenode string
      var string216 = new GraceString("standard-canvas");
      // call case 6: other requests
      if (var_document === undefined) raiseUninitializedVariable("document");
      var call215 = request(var_document, "getElementById(1)", [1], string216);
      var_canvas = call215;
      var if217 = GraceDone;
      setLineNumber(187);    // compilenode member
      // call case 6: other requests
      if (var_dom === undefined) raiseUninitializedVariable("dom");
      var call218 = request(var_dom, "noObject", [0]);
      if (var_canvas === undefined) raiseUninitializedVariable("canvas");
      var opresult219 = request(call218, "==(1)", [1], var_canvas);
      if (Grace_isTrue(opresult219)) {
        setLineNumber(188);    // compilenode string
        var string221 = new GraceString("graphics");
        // call case 6: other requests
        if (var_document === undefined) raiseUninitializedVariable("document");
        var call220 = request(var_document, "getElementById(1)", [1], string221);
        var_canvas = call220;
        if217 = GraceDone;
      }
      var if222 = GraceDone;
      setLineNumber(192);    // compilenode member
      // call case 6: other requests
      if (var_dom === undefined) raiseUninitializedVariable("dom");
      var call223 = request(var_dom, "noObject", [0]);
      if (var_canvas === undefined) raiseUninitializedVariable("canvas");
      var opresult224 = request(call223, "==(1)", [1], var_canvas);
      if (Grace_isTrue(opresult224)) {
        setLineNumber(193);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call225 = selfRequest(this, "createPopupWindow", [0]);
        if222 = call225;
      }
      if213 = if222;
    }
    setLineNumber(197);    // compilenode string
    var string227 = new GraceString("2d");
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call226 = request(var_canvas, "getContext(1)", [1], string227);
    var_ctx = call226;
    setLineNumber(198);    // compilenode num
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call228 = request(var_ctx, "lineWidth:=(1)", [1], new GraceNum(1));
    setLineNumber(199);    // compilenode string
    var string230 = new GraceString("white");
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call229 = request(var_ctx, "fillStyle:=(1)", [1], string230);
    setLineNumber(200);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call232 = request(var_canvas, "width", [0]);
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call233 = request(var_canvas, "height", [0]);
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call231 = request(var_ctx, "fillRect(4)", [4], new GraceNum(0), new GraceNum(0), call232, call233);
    setLineNumber(201);    // compilenode string
    var string235 = new GraceString("black");
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call234 = request(var_ctx, "strokeStyle:=(1)", [1], string235);
    setLineNumber(202);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call237 = request(var_canvas, "width", [0]);
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call238 = request(var_canvas, "height", [0]);
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call236 = request(var_ctx, "rect(4)", [4], new GraceNum(0), new GraceNum(0), call237, call238);
    setLineNumber(203);    // compilenode member
    // call case 6: other requests
    if (var_ctx === undefined) raiseUninitializedVariable("ctx");
    var call239 = request(var_ctx, "stroke", [0]);
    setLineNumber(206);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call240 = request(var_canvas, "width", [0]);
    var quotient241 = request(call240, "/(1)", [1], new GraceNum(2));
    var_x = quotient241;
    setLineNumber(207);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call242 = request(var_canvas, "height", [0]);
    var quotient243 = request(call242, "/(1)", [1], new GraceNum(2));
    var_y = quotient243;
    return GraceDone;
  };    // end of method initialise
  this.methods["initialise"] = func204;
  func204.methodName = "initialise";
  func204.paramCounts = [0];
  func204.paramNames = [];
  func204.definitionLine = 167;
  func204.definitionModule = "turtle";
  var func244 = function(argcv) {    // method createPopupWindow, line 210
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("createPopupWindow", 0, numArgs - 0);
    }
    setLineNumber(212);    // compilenode string
    var string246 = new GraceString("");
    var string247 = new GraceString("");
    var string248 = new GraceString("width=");
    if (var_windowWidth === undefined) raiseUninitializedVariable("windowWidth");
    var opresult249 = request(string248, "++(1)", [1], var_windowWidth);
    var string250 = new GraceString("+50, height=");
    var opresult251 = request(opresult249, "++(1)", [1], string250);
    if (var_windowHeight === undefined) raiseUninitializedVariable("windowHeight");
    var opresult252 = request(opresult251, "++(1)", [1], var_windowHeight);
    var string253 = new GraceString("+50");
    var opresult254 = request(opresult252, "++(1)", [1], string253);
    // call case 6: other requests
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call255 = request(var_dom, "window", [0]);
    var call245 = request(call255, "open(3)", [3], string246, string247, opresult254);
    var_theWindow = call245;
    var if256 = GraceDone;
    setLineNumber(215);    // compilenode member
    // call case 2: outer request
    var call257 = selfRequest(var_prelude, "inBrowser", [0]);
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call258 = request(var_dom, "noObject", [0]);
    if (var_theWindow === undefined) raiseUninitializedVariable("theWindow");
    var opresult259 = request(call258, "==(1)", [1], var_theWindow);
    var opresult260 = request(call257, "&&(1)", [1], opresult259);
    if (Grace_isTrue(opresult260)) {
      setLineNumber(216);    // compilenode string
      var string261 = new GraceString("Failed to open the graphics window.\nIs your browser blocking pop-ups?");
      Grace_print(string261);
      setLineNumber(217);    // compilenode num
      // call case 6: other requests
      if (var_sys === undefined) raiseUninitializedVariable("sys");
      var call262 = request(var_sys, "exit(1)", [1], new GraceNum(1));
      if256 = call262;
    }
    setLineNumber(221);    // compilenode string
    var string264 = new GraceString("canvas");
    // call case 6: other requests
    if (var_document === undefined) raiseUninitializedVariable("document");
    var call263 = request(var_document, "createElement(1)", [1], string264);
    var_canvasElement = call263;
    setLineNumber(222);    // compilenode call
    if (var_windowWidth === undefined) raiseUninitializedVariable("windowWidth");
    // call case 6: other requests
    if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
    var call265 = request(var_canvasElement, "width:=(1)", [1], var_windowWidth);
    setLineNumber(223);    // compilenode call
    if (var_windowHeight === undefined) raiseUninitializedVariable("windowHeight");
    // call case 6: other requests
    if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
    var call266 = request(var_canvasElement, "height:=(1)", [1], var_windowHeight);
    setLineNumber(224);    // compilenode string
    var string268 = new GraceString("center");
    // call case 6: other requests
    // call case 6: other requests
    if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
    var call269 = request(var_canvasElement, "style", [0]);
    var call267 = request(call269, "alignSelf:=(1)", [1], string268);
    setLineNumber(225);    // compilenode call
    if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    if (var_theWindow === undefined) raiseUninitializedVariable("theWindow");
    var call272 = request(var_theWindow, "document", [0]);
    var call271 = request(call272, "body", [0]);
    var call270 = request(call271, "appendChild(1)", [1], var_canvasElement);
    setLineNumber(226);    // compilenode string
    var string274 = new GraceString("Logo Graphics");
    // call case 6: other requests
    // call case 6: other requests
    if (var_theWindow === undefined) raiseUninitializedVariable("theWindow");
    var call275 = request(var_theWindow, "document", [0]);
    var call273 = request(call275, "title:=(1)", [1], string274);
    var if276 = GraceDone;
    setLineNumber(229);    // compilenode member
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call278 = request(var_dom, "window", [0]);
    var string279 = new GraceString("graceRegisterWindow");
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call277 = request(var_dom, "doesObject(1)haveProperty(1)", [1, 1], call278, string279);
    if (Grace_isTrue(call277)) {
      setLineNumber(230);    // compilenode call
      if (var_theWindow === undefined) raiseUninitializedVariable("theWindow");
      // call case 6: other requests
      // call case 6: other requests
      if (var_dom === undefined) raiseUninitializedVariable("dom");
      var call281 = request(var_dom, "window", [0]);
      var call280 = request(call281, "graceRegisterWindow(1)", [1], var_theWindow);
      if276 = call280;
    }
    setLineNumber(233);    // compilenode bind
    if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
    var_canvas = var_canvasElement;
    return GraceDone;
  };    // end of method createPopupWindow
  this.methods["createPopupWindow"] = func244;
  func244.methodName = "createPopupWindow";
  func244.paramCounts = [0];
  func244.paramNames = [];
  func244.definitionLine = 210;
  func244.definitionModule = "turtle";
  var func282 = function(argcv) {    // method start, line 236
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("start", 0, numArgs - 0);
    }
    setLineNumber(237);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call283 = selfRequest(this, "initialise", [0]);
    setLineNumber(241);    // compilenode string
    var string285 = new GraceString("canvas");
    // call case 6: other requests
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call286 = request(var_dom, "document", [0]);
    var call284 = request(call286, "createElement(1)", [1], string285);
    var_backingCanvas = call284;
    setLineNumber(242);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call288 = request(var_canvas, "height", [0]);
    // call case 6: other requests
    if (var_backingCanvas === undefined) raiseUninitializedVariable("backingCanvas");
    var call287 = request(var_backingCanvas, "height:=(1)", [1], call288);
    setLineNumber(243);    // compilenode member
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call290 = request(var_canvas, "width", [0]);
    // call case 6: other requests
    if (var_backingCanvas === undefined) raiseUninitializedVariable("backingCanvas");
    var call289 = request(var_backingCanvas, "width:=(1)", [1], call290);
    setLineNumber(244);    // compilenode string
    var string292 = new GraceString("2d");
    // call case 6: other requests
    if (var_backingCanvas === undefined) raiseUninitializedVariable("backingCanvas");
    var call291 = request(var_backingCanvas, "getContext(1)", [1], string292);
    var_ctx = call291;
    setLineNumber(245);    // compilenode string
    var string294 = new GraceString("2d");
    // call case 6: other requests
    if (var_canvas === undefined) raiseUninitializedVariable("canvas");
    var call293 = request(var_canvas, "getContext(1)", [1], string294);
    var var_mctx = call293;
    setLineNumber(246);    // compilenode call
    if (var_steps === undefined) raiseUninitializedVariable("steps");
    if (var_delay === undefined) raiseUninitializedVariable("delay");
    var block296 = new GraceBlock(this, 246, 1);
    block296.guard = jsTrue;
    block296.real = function block296(var_step) {
      setLineNumber(247);    // compilenode string
      var string298 = new GraceString("white");
      // call case 6: other requests
      if (var_mctx === undefined) raiseUninitializedVariable("mctx");
      var call297 = request(var_mctx, "fillStyle:=(1)", [1], string298);
      setLineNumber(248);    // compilenode member
      // call case 6: other requests
      if (var_canvas === undefined) raiseUninitializedVariable("canvas");
      var call300 = request(var_canvas, "width", [0]);
      // call case 6: other requests
      if (var_canvas === undefined) raiseUninitializedVariable("canvas");
      var call301 = request(var_canvas, "height", [0]);
      // call case 6: other requests
      if (var_mctx === undefined) raiseUninitializedVariable("mctx");
      var call299 = request(var_mctx, "fillRect(4)", [4], new GraceNum(0), new GraceNum(0), call300, call301);
      setLineNumber(249);    // compilenode member
      // call case 6: other requests
      var call302 = request(var_step, "apply", [0]);
      setLineNumber(250);    // compilenode call
      if (var_backingCanvas === undefined) raiseUninitializedVariable("backingCanvas");
      // call case 6: other requests
      if (var_mctx === undefined) raiseUninitializedVariable("mctx");
      var call303 = request(var_mctx, "drawImage(3)", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
      setLineNumber(251);    // compilenode call
      if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
      // call case 2: outer request
      var call304 = selfRequest(importedModules["turtle"], "drawTurtle(1)", [1], var_turtleAngle);
      return call304;
    };
    let applyMeth296 = function apply_1 (argcv, ...args) {
        if (this.guard.apply(this.receiver, args))
            return this.real.apply(this.receiver, args);
        badBlockArgs.apply(this, args);
    };
    applyMeth296.methodName = "apply(1)";
    applyMeth296.paramCounts = [1];
    applyMeth296.paramNames = ["step"];
    applyMeth296.definitionLine = 246;
    applyMeth296.definitionModule = "turtle";
    block296.methods["apply(1)"] = applyMeth296;
    let matchesMeth296 = function matches_1 (argcv, ...args) {
        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
    };
    matchesMeth296.methodName = "matches(1)";
    matchesMeth296.paramCounts = [1];
    matchesMeth296.paramNames = ["step"];
    matchesMeth296.definitionLine = 246;
    matchesMeth296.definitionModule = "turtle";
    block296.methods["matches(1)"] = matchesMeth296;
    // call case 6: other requests
    if (var_dom === undefined) raiseUninitializedVariable("dom");
    var call295 = request(var_dom, "for(1)waiting(1)do(1)", [1, 1, 1], var_steps, var_delay, block296);
    return call295;
  };    // end of method start
  this.methods["start"] = func282;
  func282.methodName = "start";
  func282.paramCounts = [0];
  func282.paramNames = [];
  func282.definitionLine = 236;
  func282.definitionModule = "turtle";
  var func305 = function(argcv, var_size) {    // method useCanvas(_), line 255
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("useCanvas(_)", 0, numArgs - 1);
    }
    setLineNumber(255);    // compilenode member
    // call case 2: outer request
    var call306 = selfRequest(var_prelude, "Point", [0]);
    assertTypeOrMsg(var_size, call306, "argument to request of `useCanvas(_)`", "Point");
    setLineNumber(257);    // compilenode bind
    var_usePopup = GraceTrue;
    setLineNumber(258);    // compilenode member
    // call case 6: other requests
    var call307 = request(var_size, "x", [0]);
    var_windowWidth = call307;
    setLineNumber(259);    // compilenode member
    // call case 6: other requests
    var call308 = request(var_size, "y", [0]);
    var_windowHeight = call308;
    return GraceDone;
  };    // end of method useCanvas(_)
  this.methods["useCanvas(1)"] = func305;
  func305.methodName = "useCanvas(1)";
  func305.paramCounts = [1];
  func305.paramNames = ["size"];
  func305.definitionLine = 255;
  func305.definitionModule = "turtle";
  setLineNumber(5);    // compilenode vardec
  var var_document;
  var reader309_document = function() {  // reader method document
      if (var_document === undefined) raiseUninitializedVariable("document");
      return var_document;
  };
  reader309_document.isVar = true;
  reader309_document.confidential = true;
  this.methods["document"] = reader309_document;
  var writer310_document = function(argcv, n) {   // writer method document:=(_)
    var_document = n;
    return GraceDone;
  };
  writer310_document.confidential = true;
  this.methods["document:=(1)"] = writer310_document;
  setLineNumber(6);    // compilenode vardec
  var var_canvas;
  var reader311_canvas = function() {  // reader method canvas
      if (var_canvas === undefined) raiseUninitializedVariable("canvas");
      return var_canvas;
  };
  reader311_canvas.isVar = true;
  reader311_canvas.confidential = true;
  this.methods["canvas"] = reader311_canvas;
  var writer312_canvas = function(argcv, n) {   // writer method canvas:=(_)
    var_canvas = n;
    return GraceDone;
  };
  writer312_canvas.confidential = true;
  this.methods["canvas:=(1)"] = writer312_canvas;
  setLineNumber(7);    // compilenode vardec
  var var_ctx;
  var reader313_ctx = function() {  // reader method ctx
      if (var_ctx === undefined) raiseUninitializedVariable("ctx");
      return var_ctx;
  };
  reader313_ctx.isVar = true;
  reader313_ctx.confidential = true;
  this.methods["ctx"] = reader313_ctx;
  var writer314_ctx = function(argcv, n) {   // writer method ctx:=(_)
    var_ctx = n;
    return GraceDone;
  };
  writer314_ctx.confidential = true;
  this.methods["ctx:=(1)"] = writer314_ctx;
  setLineNumber(8);    // compilenode vardec
  var var_theWindow;
  var reader315_theWindow = function() {  // reader method theWindow
      if (var_theWindow === undefined) raiseUninitializedVariable("theWindow");
      return var_theWindow;
  };
  reader315_theWindow.isVar = true;
  reader315_theWindow.confidential = true;
  this.methods["theWindow"] = reader315_theWindow;
  var writer316_theWindow = function(argcv, n) {   // writer method theWindow:=(_)
    var_theWindow = n;
    return GraceDone;
  };
  writer316_theWindow.confidential = true;
  this.methods["theWindow:=(1)"] = writer316_theWindow;
  setLineNumber(9);    // compilenode vardec
  var var_canvasElement;
  var reader317_canvasElement = function() {  // reader method canvasElement
      if (var_canvasElement === undefined) raiseUninitializedVariable("canvasElement");
      return var_canvasElement;
  };
  reader317_canvasElement.isVar = true;
  reader317_canvasElement.confidential = true;
  this.methods["canvasElement"] = reader317_canvasElement;
  var writer318_canvasElement = function(argcv, n) {   // writer method canvasElement:=(_)
    var_canvasElement = n;
    return GraceDone;
  };
  writer318_canvasElement.confidential = true;
  this.methods["canvasElement:=(1)"] = writer318_canvasElement;
  setLineNumber(10);    // compilenode vardec
  var var_useCanvas;
  var reader319_useCanvas = function() {  // reader method useCanvas
      if (var_useCanvas === undefined) raiseUninitializedVariable("useCanvas");
      return var_useCanvas;
  };
  reader319_useCanvas.isVar = true;
  reader319_useCanvas.confidential = true;
  this.methods["useCanvas"] = reader319_useCanvas;
  var writer320_useCanvas = function(argcv, n) {   // writer method useCanvas:=(_)
    var_useCanvas = n;
    return GraceDone;
  };
  writer320_useCanvas.confidential = true;
  this.methods["useCanvas:=(1)"] = writer320_useCanvas;
  setLineNumber(17);    // compilenode num
  // call case 2: outer request
  var call321 = selfRequest(importedModules["turtle"], "r(1)g(1)b(1)", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(0));
  var var_black = call321;
  var reader322_black = function() {  // reader method black
      if (var_black === undefined) raiseUninitializedVariable("black");
      return var_black;
  };
  reader322_black.isDef = true;
  this.methods["black"] = reader322_black;
  setLineNumber(18);    // compilenode num
  // call case 2: outer request
  var call323 = selfRequest(importedModules["turtle"], "r(1)g(1)b(1)", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(255));
  var var_blue = call323;
  var reader324_blue = function() {  // reader method blue
      if (var_blue === undefined) raiseUninitializedVariable("blue");
      return var_blue;
  };
  reader324_blue.isDef = true;
  this.methods["blue"] = reader324_blue;
  setLineNumber(19);    // compilenode num
  // call case 2: outer request
  var call325 = selfRequest(importedModules["turtle"], "r(1)g(1)b(1)", [1, 1, 1], new GraceNum(0), new GraceNum(255), new GraceNum(0));
  var var_green = call325;
  var reader326_green = function() {  // reader method green
      if (var_green === undefined) raiseUninitializedVariable("green");
      return var_green;
  };
  reader326_green.isDef = true;
  this.methods["green"] = reader326_green;
  setLineNumber(20);    // compilenode num
  // call case 2: outer request
  var call327 = selfRequest(importedModules["turtle"], "r(1)g(1)b(1)", [1, 1, 1], new GraceNum(255), new GraceNum(0), new GraceNum(0));
  var var_red = call327;
  var reader328_red = function() {  // reader method red
      if (var_red === undefined) raiseUninitializedVariable("red");
      return var_red;
  };
  reader328_red.isDef = true;
  this.methods["red"] = reader328_red;
  setLineNumber(22);    // compilenode vardec
  var var_x;
  var reader329_x = function() {  // reader method x
      if (var_x === undefined) raiseUninitializedVariable("x");
      return var_x;
  };
  reader329_x.isVar = true;
  reader329_x.confidential = true;
  this.methods["x"] = reader329_x;
  var writer330_x = function(argcv, n) {   // writer method x:=(_)
    var_x = n;
    return GraceDone;
  };
  writer330_x.confidential = true;
  this.methods["x:=(1)"] = writer330_x;
  setLineNumber(23);    // compilenode vardec
  var var_y;
  var reader331_y = function() {  // reader method y
      if (var_y === undefined) raiseUninitializedVariable("y");
      return var_y;
  };
  reader331_y.isVar = true;
  reader331_y.confidential = true;
  this.methods["y"] = reader331_y;
  var writer332_y = function(argcv, n) {   // writer method y:=(_)
    var_y = n;
    return GraceDone;
  };
  writer332_y.confidential = true;
  this.methods["y:=(1)"] = writer332_y;
  setLineNumber(24);    // compilenode vardec
  var var_started = GraceFalse;
  var reader333_started = function() {  // reader method started
      if (var_started === undefined) raiseUninitializedVariable("started");
      return var_started;
  };
  reader333_started.isVar = true;
  reader333_started.confidential = true;
  this.methods["started"] = reader333_started;
  var writer334_started = function(argcv, n) {   // writer method started:=(_)
    var_started = n;
    return GraceDone;
  };
  writer334_started.confidential = true;
  this.methods["started:=(1)"] = writer334_started;
  setLineNumber(25);    // compilenode call
  // call case 6: other requests
  var call335 = request(new GraceNum(1), "prefix-", [0]);
  var var_maxActionsDrawn = call335;
  var reader336_maxActionsDrawn = function() {  // reader method maxActionsDrawn
      if (var_maxActionsDrawn === undefined) raiseUninitializedVariable("maxActionsDrawn");
      return var_maxActionsDrawn;
  };
  reader336_maxActionsDrawn.isVar = true;
  reader336_maxActionsDrawn.confidential = true;
  this.methods["maxActionsDrawn"] = reader336_maxActionsDrawn;
  var writer337_maxActionsDrawn = function(argcv, n) {   // writer method maxActionsDrawn:=(_)
    var_maxActionsDrawn = n;
    return GraceDone;
  };
  writer337_maxActionsDrawn.confidential = true;
  this.methods["maxActionsDrawn:=(1)"] = writer337_maxActionsDrawn;
  setLineNumber(26);    // compilenode num
  var var_delay = new GraceNum(1);
  var reader338_delay = function() {  // reader method delay
      if (var_delay === undefined) raiseUninitializedVariable("delay");
      return var_delay;
  };
  reader338_delay.isVar = true;
  reader338_delay.confidential = true;
  this.methods["delay"] = reader338_delay;
  var writer339_delay = function(argcv, n) {   // writer method delay:=(_)
    var_delay = n;
    return GraceDone;
  };
  writer339_delay.confidential = true;
  this.methods["delay:=(1)"] = writer339_delay;
  setLineNumber(27);    // compilenode vardec
  var var_usePopup = GraceFalse;
  var reader340_usePopup = function() {  // reader method usePopup
      if (var_usePopup === undefined) raiseUninitializedVariable("usePopup");
      return var_usePopup;
  };
  reader340_usePopup.isVar = true;
  reader340_usePopup.confidential = true;
  this.methods["usePopup"] = reader340_usePopup;
  var writer341_usePopup = function(argcv, n) {   // writer method usePopup:=(_)
    var_usePopup = n;
    return GraceDone;
  };
  writer341_usePopup.confidential = true;
  this.methods["usePopup:=(1)"] = writer341_usePopup;
  setLineNumber(28);    // compilenode num
  var var_windowHeight = new GraceNum(700);
  var reader342_windowHeight = function() {  // reader method windowHeight
      if (var_windowHeight === undefined) raiseUninitializedVariable("windowHeight");
      return var_windowHeight;
  };
  reader342_windowHeight.isVar = true;
  reader342_windowHeight.confidential = true;
  this.methods["windowHeight"] = reader342_windowHeight;
  var writer343_windowHeight = function(argcv, n) {   // writer method windowHeight:=(_)
    var_windowHeight = n;
    return GraceDone;
  };
  writer343_windowHeight.confidential = true;
  this.methods["windowHeight:=(1)"] = writer343_windowHeight;
  setLineNumber(29);    // compilenode num
  var var_windowWidth = new GraceNum(850);
  var reader344_windowWidth = function() {  // reader method windowWidth
      if (var_windowWidth === undefined) raiseUninitializedVariable("windowWidth");
      return var_windowWidth;
  };
  reader344_windowWidth.isVar = true;
  reader344_windowWidth.confidential = true;
  this.methods["windowWidth"] = reader344_windowWidth;
  var writer345_windowWidth = function(argcv, n) {   // writer method windowWidth:=(_)
    var_windowWidth = n;
    return GraceDone;
  };
  writer345_windowWidth.confidential = true;
  this.methods["windowWidth:=(1)"] = writer345_windowWidth;
  setLineNumber(31);    // compilenode num
  var var_speed = new GraceNum(1);
  var reader346_speed = function() {  // reader method speed
      if (var_speed === undefined) raiseUninitializedVariable("speed");
      return var_speed;
  };
  reader346_speed.isVar = true;
  this.methods["speed"] = reader346_speed;
  var writer347_speed = function(argcv, n) {   // writer method speed:=(_)
    var_speed = n;
    return GraceDone;
  };
  this.methods["speed:=(1)"] = writer347_speed;
  setLineNumber(33);    // compilenode num
  var var_turtleAngle = new GraceNum(0);
  var reader348_turtleAngle = function() {  // reader method turtleAngle
      if (var_turtleAngle === undefined) raiseUninitializedVariable("turtleAngle");
      return var_turtleAngle;
  };
  reader348_turtleAngle.isVar = true;
  this.methods["turtleAngle"] = reader348_turtleAngle;
  var writer349_turtleAngle = function(argcv, n) {   // writer method turtleAngle:=(_)
    var_turtleAngle = n;
    return GraceDone;
  };
  writer349_turtleAngle.confidential = true;
  this.methods["turtleAngle:=(1)"] = writer349_turtleAngle;
  setLineNumber(41);    // compilenode array
  var array351 = new GraceSequence([]);
  // call case 2: outer request
  var call350 = selfRequest(var_prelude, "list(1)", [1], array351);
  var var_steps = call350;
  var reader352_steps = function() {  // reader method steps
      if (var_steps === undefined) raiseUninitializedVariable("steps");
      return var_steps;
  };
  reader352_steps.isDef = true;
  reader352_steps.confidential = true;
  this.methods["steps"] = reader352_steps;
  setLineNumber(62);    // compilenode vardec
  var var_backingCanvas;
  var reader353_backingCanvas = function() {  // reader method backingCanvas
      if (var_backingCanvas === undefined) raiseUninitializedVariable("backingCanvas");
      return var_backingCanvas;
  };
  reader353_backingCanvas.isVar = true;
  reader353_backingCanvas.confidential = true;
  this.methods["backingCanvas"] = reader353_backingCanvas;
  var writer354_backingCanvas = function(argcv, n) {   // writer method backingCanvas:=(_)
    var_backingCanvas = n;
    return GraceDone;
  };
  writer354_backingCanvas.confidential = true;
  this.methods["backingCanvas:=(1)"] = writer354_backingCanvas;
  setLineNumber(63);    // compilenode vardec
  var var_drawingEnabled = GraceTrue;
  var reader355_drawingEnabled = function() {  // reader method drawingEnabled
      if (var_drawingEnabled === undefined) raiseUninitializedVariable("drawingEnabled");
      return var_drawingEnabled;
  };
  reader355_drawingEnabled.isVar = true;
  reader355_drawingEnabled.confidential = true;
  this.methods["drawingEnabled"] = reader355_drawingEnabled;
  var writer356_drawingEnabled = function(argcv, n) {   // writer method drawingEnabled:=(_)
    var_drawingEnabled = n;
    return GraceDone;
  };
  writer356_drawingEnabled.confidential = true;
  this.methods["drawingEnabled:=(1)"] = writer356_drawingEnabled;
  setLineNumber(166);    // compilenode vardec
  var var_initialised = GraceFalse;
  var reader357_initialised = function() {  // reader method initialised
      if (var_initialised === undefined) raiseUninitializedVariable("initialised");
      return var_initialised;
  };
  reader357_initialised.isVar = true;
  reader357_initialised.confidential = true;
  this.methods["initialised"] = reader357_initialised;
  var writer358_initialised = function(argcv, n) {   // writer method initialised:=(_)
    var_initialised = n;
    return GraceDone;
  };
  writer358_initialised.confidential = true;
  this.methods["initialised:=(1)"] = writer358_initialised;
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_turtle = gracecode_turtle;
if (typeof window !== "undefined")
  window.gracecode_turtle = gracecode_turtle;
gracecode_turtle.imports = ["dom", "standardGrace", "sys"];
gracecode_turtle.definitionModule = "turtle";
gracecode_turtle.definitionLine = 1;
