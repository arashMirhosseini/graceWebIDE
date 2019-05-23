var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["graphix"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n create(2)\n shape\nfresh:create(2):\n addArc\n addButton\n addCircle\n addCustomShape\n addEllipse\n addInputBox\n addLine\n addPolyStar\n addRectangle\n addRoundRect\n addText\n after(1)do(1)\n asString\n clear\n clearTicker\n clearTimedEvent\n drawall\n every(1)do(1)\n inputs\n inputs:=(_)\n mouseLocation\n onMouseDownDo(1)\n onMouseExit:=(1)\n onMouseExitDo(1)\n onMouseMoveDo(1)\n onMouseUpDo(1)\n onStageMouseDown:=(1)\n onStageMouseMove:=(1)\n onStageMouseUp:=(1)\n play(1)\n shapes\n shapes:=(_)\n stage\n stage:=(_)\n tickEvent(2)\n timedEvent(2)\n timeoutIsSet\n timeoutIsSet:=(_)\nfresh:shape:\n at(1)\n clear\n color\n color:=(_)\n colored(1)\n contains(1)\n draw\n drawAt(1)\n fill\n fill:=(_)\n filled(1)\n jsShapeObject\n jsShapeObject:=(_)\n location\n location:=(_)\n mouseLocation\n moveBy(2)\n myStage\n myStage:=(_)\n onClick:=(1)\n onClickDo(1)\n onMouseDown:=(1)\n onMouseDownDo(1)\n onMouseOver:=(1)\n onMouseOverDo(1)\n onMouseUp:=(1)\n onMouseUpDo(1)\n onPressMove:=(1)\n onPressMoveDo(1)\n shapeDraw\n tween\n visible'\n visible':=(_)\n visible:=(1)\nmodules:\n collectionsPrelude\n createJsGraphicsWrapper\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/graphix.grace\npublic:\n convertStrToNum(1)\n create(2)\n roundTo(2)\n shape\npublicMethodTypes:\n convertStrToNum(str)\n create(canvasWidth, canvasHeight)\n roundTo(num, digits)\n shape\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["graphix"] = [
    "import \"createJsGraphicsWrapper\" as gr",
    "",
    "class shape {",
    "    var color is public := \"black\"",
    "    var fill is public := false",
    "    var location is public := 0@0",
    "    var myStage",
    "    var jsShapeObject is public",
    "    var visible'",
    "",
    "    method colored(c) {",
    "        color := c",
    "        self",
    "    }",
    "",
    "    method filled(f) {",
    "        fill := f",
    "        self",
    "    }",
    "",
    "    method at(l) {",
    "        location := l",
    "        self",
    "    }",
    "",
    "    method moveBy(xDiff,yDiff) {",
    "        def currentX = location.x",
    "        def currentY = location.y",
    "        location := (currentX + xDiff)@(currentY + yDiff)",
    "        jsShapeObject.setLocation(location)",
    "        jsShapeObject.move(location.x, location.y)",
    "        myStage.update",
    "    }",
    "",
    "    method drawAt(p) {",
    "        location := p",
    "        draw",
    "    }",
    "",
    "    method visible := (v) {",
    "        visible' := v",
    "        jsShapeObject.setVisible(v)",
    "        myStage.update",
    "    }",
    "",
    "    method contains(point) {",
    "        jsShapeObject.hitTest(point.x, point.y)",
    "    }",
    "",
    "    method mouseLocation {",
    "        jsShapeObject.mouseLocation",
    "    }",
    "",
    "    method onClick := (block) {",
    "        jsShapeObject.addClickListener(jsShapeObject, block)",
    "        myStage.update",
    "    }",
    "    method onClickDo(block) {",
    "        jsShapeObject.addClickListener(jsShapeObject, block)",
    "        myStage.update",
    "        self",
    "    }",
    "",
    "    method onMouseUp := (block) {",
    "        jsShapeObject.addMouseUpListener(jsShapeObject, block)",
    "    }",
    "    method onMouseUpDo(block) {",
    "        jsShapeObject.addMouseUpListener(jsShapeObject, block)",
    "        self",
    "    }",
    "",
    "    method onMouseDown := (block) {",
    "        jsShapeObject.addMouseDownListener(jsShapeObject, block)",
    "    }",
    "    method onMouseDownDo(block) {",
    "        jsShapeObject.addMouseDownListener(jsShapeObject, block)",
    "        self",
    "    }",
    "",
    "    method onPressMove := (block) {",
    "        jsShapeObject.addPressMoveListener(jsShapeObject, block)",
    "    }",
    "",
    "    method onPressMoveDo(block) {",
    "        jsShapeObject.addPressMoveListener(jsShapeObject, block)",
    "        self",
    "    }",
    "",
    "    method onMouseOver := (block) {",
    "        myStage.enableMouseOver(20)",
    "        jsShapeObject.addMouseOverListener(jsShapeObject, block)",
    "    }",
    "",
    "    method onMouseOverDo(block) {",
    "        myStage.enableMouseOver(20)",
    "        jsShapeObject.addMouseOverListener(jsShapeObject, block)",
    "        self",
    "    }",
    "",
    "    method shapeDraw is confidential { abstract }",
    "",
    "    method draw {",
    "        clear",
    "        visible := true",
    "        jsShapeObject.setLocation(location)",
    "        if (fill) then {",
    "            jsShapeObject.beginFill(color)",
    "        } else {",
    "            jsShapeObject.beginStroke(color)",
    "        }",
    "        shapeDraw",
    "        myStage.add(jsShapeObject)",
    "        myStage.update",
    "        self",
    "    }",
    "",
    "    method clear {",
    "        myStage.removeChild(jsShapeObject)",
    "        jsShapeObject.clear",
    "        myStage.update",
    "    }",
    "",
    "    method tween {",
    "        object {",
    "            var jsTween := gr.tween(jsShapeObject, myStage)",
    "            method toX(x) {",
    "                jsTween.toX(x)",
    "            }",
    "",
    "            method wait(time) {",
    "                jsTween.wait(time)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "class create(canvasWidth, canvasHeight) {",
    "    var shapes := emptyList",
    "    var inputs := emptyList",
    "    var stage := gr.stage(canvasHeight, canvasWidth)",
    "    var timeoutIsSet := false",
    "",
    "    method asString {",
    "        \"aGraphixCanvas({canvasWidth}×{canvasHeight})\"",
    "    }",
    "",
    "    method drawall {",
    "        for (shapes) do {x -> x.draw}",
    "    }",
    "    method play(sound) {",
    "        native \"js\" code ‹",
    "              createjs.Sound.play(var_sound._value);",
    "        ›",
    "    }",
    "    method onStageMouseDown := (block) {",
    "        stage.addStageDownListener(block)",
    "    }",
    "    method onMouseDownDo(block) {",
    "        stage.addStageDownListener(block)",
    "        self",
    "    }",
    "",
    "    method onStageMouseUp := (block) {",
    "        stage.addStageUpListener(block)",
    "    }",
    "    method onMouseUpDo(block) {",
    "        stage.addStageUpListener(block)",
    "        self",
    "    }",
    "",
    "    method onMouseExit := (block) {",
    "        stage.addMouseExitListener(block)",
    "    }",
    "    method onMouseExitDo(block) {",
    "        stage.addMouseExitListener(block)",
    "        self",
    "    }",
    "",
    "    method onStageMouseMove := (block) {",
    "        stage.addStageMouseMoveListener(block)",
    "    }",
    "    method onMouseMoveDo(block) {",
    "        stage.addStageMouseMoveListener(block)",
    "        self",
    "    }",
    "",
    "    method mouseLocation {",
    "        stage.mouseLocation",
    "    }",
    "",
    "    method clear {",
    "        stage.removeAllChildren",
    "        stage.removeAllEventListeners",
    "        stage.createClearButton",
    "        stage.update",
    "    }",
    "",
    "    method timedEvent(block, time) {",
    "        // decprecated; use after(time) do(block)",
    "        stage.setTimeout(block, time, stage)",
    "    }",
    "    method after(time) do(block) {",
    "        stage.setTimeout(block, time, stage)",
    "    }",
    "",
    "    method clearTimedEvent {",
    "        stage.clearTimeout",
    "    }",
    "",
    "    method tickEvent(block, freq) {",
    "        // deprecated; use every(interval) do(block)",
    "        stage.setTicker(block, freq, stage)",
    "    }",
    "    method every(interval) do(block) {",
    "        stage.setTicker(block, 1000/interval, stage)",
    "    }",
    "",
    "    method clearTicker {",
    "        stage.clearTicker",
    "    }",
    "",
    "    class addCircle {",
    "        inherit shape",
    "        var radius is public := 15",
    "        jsShapeObject := gr.circle",
    "        myStage:=stage",
    "        method asString {",
    "            \"aCircle(radius={radius})\"",
    "        }",
    "",
    "        method setRadius(r) {",
    "            radius := r",
    "            self",
    "        }",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(radius)",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addRectangle {",
    "        inherit shape",
    "        jsShapeObject := gr.rectangle",
    "        var width is public := 15",
    "        var height is public := 15",
    "        myStage:=stage",
    "",
    "        method asString {",
    "            \"aRectangle({width}×{height})\"",
    "        }",
    "",
    "        method setHeight(h) {",
    "            height := h",
    "            self",
    "        }",
    "",
    "        method setWidth(w) {",
    "            width := w",
    "            self",
    "        }",
    "",
    "        method size { width@height }",
    "",
    "        method size:= (p) {",
    "            width := p.x",
    "            height := p.y",
    "        }",
    "",
    "        method setSize(p) {",
    "            width := p.x",
    "            height := p.y",
    "            self",
    "        }",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(width, height)",
    "        }",
    "",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addPolyStar {",
    "        inherit shape",
    "",
    "        var sz := 20",
    "        var sides is public := 5",
    "        var pointSize is public := 2",
    "        var angle is public := -90",
    "",
    "        jsShapeObject := gr.polyStar",
    "        myStage:=stage",
    "",
    "        method asString {",
    "            \"aPolyStar(size={size}, sides={sides})\"",
    "        }",
    "",
    "        method setSize(s) {",
    "            size := s",
    "            self",
    "        }",
    "",
    "        method size:= (s) {",
    "            match (s)",
    "                  case { scalar:Number -> sz := scalar }",
    "                  case { point:Point -> sz := (point.x + point.y)/2 }",
    "                  else { ProgrammingError.raise \"argument to polyStar.setSize should be a Number or a Point.\" }",
    "        }",
    "",
    "        method size { sz }",
    "",
    "        method setSides(s) {",
    "            sides := s",
    "            self",
    "        }",
    "",
    "        method setPointSize(p) {",
    "            pointSize := p",
    "            self",
    "        }",
    "",
    "        method setAngle(a) {",
    "            angle := a",
    "            self",
    "        }",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(size, sides, pointSize, angle)",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addRoundRect {",
    "        inherit shape",
    "        var width is public := 15",
    "        var height is public := 15",
    "        var radius is public := 2",
    "        jsShapeObject := gr.roundRect",
    "        myStage:=stage",
    "",
    "        method asString {",
    "            \"aRoundRect({width}×{height})\"",
    "        }",
    "",
    "        method setHeight(h) {",
    "            height := h",
    "            self",
    "        }",
    "",
    "        method setWidth(w) {",
    "            width := w",
    "            self",
    "        }",
    "",
    "        method size { width@height }",
    "",
    "        method size:= (p) {",
    "            width := p.x",
    "            height := p.y",
    "        }",
    "",
    "        method setSize(p) {",
    "            width := p.x",
    "            height := p.y",
    "            self",
    "        }",
    "",
    "        method setRadius(r) {",
    "            radius := r",
    "            self",
    "        }",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(width, height, radius)",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addEllipse {",
    "        inherit shape",
    "        var width is public := 15",
    "        var height is public := 15",
    "",
    "        jsShapeObject := gr.ellipse",
    "        myStage:=stage",
    "",
    "        method asString {",
    "            \"anEllipse({width}×{height})\"",
    "        }",
    "",
    "        method setWidth(w) {",
    "            width := w",
    "            self",
    "        }",
    "",
    "        method setHeight(h) {",
    "            height := h",
    "            self",
    "        }",
    "",
    "        method size { width@height }",
    "",
    "        method size:= (p) {",
    "            width := p.x",
    "            height := p.y",
    "        }",
    "",
    "        method setSize(p) {",
    "            width := p.x",
    "            height := p.y",
    "            self",
    "        }",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(width, height)",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addArc {",
    "        inherit shape",
    "        var radius is public := 15",
    "        var startAngle is public := 0",
    "        var endAngle is public := 180",
    "        var anticlockwise is public := false",
    "",
    "        jsShapeObject := gr.arc",
    "        myStage:=stage",
    "",
    "        method asString {",
    "            def clock = if (anticlockwise) then {\"⤿\"} else {\"⤾\"}",
    "            \"anArc({clock} radius={radius}, start={startAngle}, end={endAngle})\"",
    "        }",
    "",
    "        method setRadius(r) {",
    "            radius := r",
    "            self",
    "        }",
    "        method setStartAngle(a) {",
    "            startAngle := a",
    "            self",
    "        }",
    "        method setEndAngle(a) {",
    "            endAngle := a",
    "            self",
    "        }",
    "",
    "        method setAnticlockwise(a) {",
    "            anticlockwise := a",
    "            self",
    "        }",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(radius, startAngle, endAngle, anticlockwise)",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addText {",
    "        var location is public := 0@0",
    "        var color is public := \"black\"",
    "        var jsText is public := 0",
    "        var content is public := \"Did you forget to set text.content?\"",
    "        var font is public := \"12px Arial\"",
    "",
    "        method asString {",
    "            \"aText({content})\"",
    "        }",
    "        method at(l) {",
    "            location := l",
    "            self",
    "        }",
    "        method colored(c) {",
    "            color := c",
    "            self",
    "        }",
    "        method setContent(c) {",
    "            content := c",
    "            self",
    "        }",
    "        method setFont(f) {",
    "            font := f",
    "            self",
    "        }",
    "",
    "        method height {",
    "            jsText.height",
    "        }",
    "",
    "        method width {",
    "            jsText.width",
    "        }",
    "",
    "        method draw {",
    "            if (0 ≠ jsText) then {",
    "                stage.removeChild(jsText);",
    "            }",
    "            jsText := gr.text",
    "            jsText.setLocation(location)",
    "            jsText.draw(content, font, color)",
    "            stage.add(jsText)",
    "            stage.update",
    "            self",
    "        }",
    "",
    "        method clear {",
    "            stage.removeChild(jsText)",
    "            stage.update",
    "        }",
    "        shapes.add(self)",
    "    }",
    "",
    "    class addLine {",
    "        inherit shape",
    "        var start is public := 0@0",
    "        var end is public := 50@50",
    "",
    "        jsShapeObject := gr.line",
    "        myStage := stage",
    "",
    "        method asString {",
    "            \"aLine(start={start}, end={end})\"",
    "        }",
    "        method setStart(s) {",
    "            start := s",
    "            self",
    "        }",
    "        method setEnd(e) {",
    "            end := e",
    "            self",
    "        }",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(start, end)",
    "        }",
    "        shapes.add(self)",
    "        self",
    "    }",
    "",
    "    class addCustomShape {",
    "        inherit shape",
    "        jsShapeObject := gr.customShape",
    "        myStage := stage",
    "",
    "        method asString {",
    "            \"aCustomShape({width}×{height})\"",
    "        }",
    "        var width is public := 10",
    "        var height is public := 10",
    "",
    "        method shapeDraw is confidential {",
    "            jsShapeObject.draw(color, color)",
    "        }",
    "",
    "        method addPoint(p) {",
    "            jsShapeObject.addPoint(p)",
    "            self",
    "        }",
    "        shapes.add(self);",
    "    }",
    "",
    "    class addButton {",
    "        inherit shape",
    "        var width is public := 40",
    "        var height is public := 20",
    "        var buttonShape is public := addRectangle",
    "        var buttonText is public := \"button\"",
    "        var textObj is public := addText",
    "        var location is public := 0@0",
    "        var color is public := \"#F5F5F5\"",
    "        var shapeChanged := false",
    "        var textObjChanged := false",
    "",
    "        myStage := stage",
    "        buttonShape.filled(true)",
    "        jsShapeObject := gr.container",
    "        stage.add(jsShapeObject)",
    "",
    "        method asString {",
    "            \"aButton({width}×{height})\"",
    "        }",
    "",
    "        method setShape(s) {",
    "            shapeChanged := true",
    "            buttonShape := s",
    "            self",
    "        }",
    "",
    "        method setText(t) {",
    "            buttonText := t",
    "            self",
    "        }",
    "",
    "        method setTextObj(t) {",
    "            textObjChanged := true",
    "            textObj := t",
    "            self",
    "        }",
    "",
    "        method setWidth(w) {",
    "            width := w",
    "            self",
    "        }",
    "",
    "        method setHeight(h) {",
    "            height := h",
    "            self",
    "        }",
    "",
    "        method size { width@height }",
    "",
    "        method size:= (p) {",
    "            width := p.x",
    "            height := p.y",
    "        }",
    "",
    "        method setSize(p) {",
    "            width := p.x",
    "            height := p.y",
    "            self",
    "        }",
    "",
    "        method colored(c) {",
    "            color := c",
    "            self",
    "        }",
    "",
    "        method draw {",
    "            if(!textObjChanged) then {",
    "                textObj.setContent(buttonText)",
    "            }",
    "            textObj.draw",
    "",
    "            var textWidth := textObj.width",
    "            var textHeight := textObj.height",
    "",
    "            if(!shapeChanged) then {",
    "                buttonShape.setWidth(width).setHeight(height).colored(color)",
    "                var x := (width/2) - (textWidth / 2)",
    "                var y := (height/2) - (textHeight / 2)",
    "                textObj.location := x@y",
    "                textObj.draw",
    "            }",
    "            buttonShape.draw",
    "",
    "            jsShapeObject.add(buttonShape.jsShapeObject)",
    "            jsShapeObject.add(textObj.jsText)",
    "            jsShapeObject.setLocation(location)",
    "            stage.update",
    "            self",
    "        }",
    "    }",
    "",
    "    class addInputBox {",
    "        var width is public := 50",
    "        var height is public := 20",
    "        var location is public := 0@0",
    "        var fontSize is public := 14",
    "        var fontFamily is public := \"Arial\"",
    "        var fontColor is public := \"black\"",
    "        var backgroundColor is public := \"white\"",
    "        var borderColor is public := \"black\"",
    "        var jsInputObject := 0",
    "        var submitBlock := {}",
    "",
    "        method asString {",
    "            \"anInputBox({width}×{height})\"",
    "        }",
    "        method value {",
    "            jsInputObject.value",
    "        }",
    "",
    "        method value := (val) {",
    "            jsInputObject.value := val",
    "        }",
    "",
    "        method setWidth(w) {",
    "            width := w",
    "            self",
    "        }",
    "",
    "        method setHeight(h) {",
    "            height := h",
    "            self",
    "        }",
    "",
    "        method size { width@height }",
    "",
    "        method size:= (p) {",
    "            width := p.x",
    "            height := p.y",
    "        }",
    "",
    "        method setSize(p) {",
    "            width := p.x",
    "            height := p.y",
    "            self",
    "        }",
    "",
    "        method at(l) {",
    "            location := l",
    "            self",
    "        }",
    "",
    "        method setFontSize(f) {",
    "            fontSize := f",
    "            self",
    "        }",
    "",
    "        method setFontFamily(f) {",
    "            fontFamily := f",
    "            self",
    "        }",
    "",
    "        method setBackgroundColor(c) {",
    "            backgroundColor := c",
    "            self",
    "        }",
    "",
    "        method setBorderColor(c) {",
    "            borderColor := c",
    "            self",
    "        }",
    "",
    "        method draw {",
    "            jsInputObject := gr.inputBox(stage)",
    "            jsInputObject.location := location",
    "            jsInputObject.width := width",
    "            jsInputObject.height := height",
    "            jsInputObject.fontSize := fontSize",
    "            jsInputObject.fontFamily := fontFamily",
    "            jsInputObject.fontColor := fontColor",
    "            jsInputObject.backgroundColor := backgroundColor",
    "            jsInputObject.borderColor := borderColor",
    "            jsInputObject.onSubmit(jsInputObject,submitBlock)",
    "            jsInputObject.draw",
    "            self",
    "        }",
    "",
    "        method focus {",
    "            jsInputObject.focus",
    "        }",
    "",
    "        method onSubmitDo(block) {",
    "            if (0 ≠ jsInputObject) then {",
    "                jsInputObject.onSubmit(jsInputObject, block)",
    "            }",
    "            submitBlock := block",
    "            self",
    "        }",
    "",
    "        method destroy {",
    "            jsInputObject.destroy",
    "        }",
    "        inputs.add(self)",
    "    }",
    "}",
    "",
    "method convertStrToNum(str) {",
    "    native \"js\" code ‹",
    "          var str = var_str._value;",
    "          return new GraceNum(str);",
    "    ›",
    "}",
    "",
    "method roundTo(num, digits) {",
    "    native \"js\" code ‹",
    "          var digits = var_digits._value;",
    "          var num = var_num._value.toFixed(digits);",
    "          return new GraceNum(num);",
    "    ›",
    "}" ];
}
function gracecode_graphix() {
  importedModules["graphix"] = this;
  var module$graphix = this;
  this.definitionModule = "graphix";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_graphix_1");
  this.outer_graphix_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "createJsGraphicsWrapper" as gr
  if (typeof gracecode_createJsGraphicsWrapper == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module createJsGraphicsWrapper"));
  var var_gr = do_import("createJsGraphicsWrapper", gracecode_createJsGraphicsWrapper);
  var func0 = function(argcv) {     // accessor method gr
    const numArgs = arguments.length - 1;
    if (numArgs > 0) raiseTypeArgError("gr", 0, numArgs - 0);
    if (var_gr === undefined) raiseUninitializedVariable("gr");
    return var_gr;
  };    // end of method gr
  this.methods["gr"] = func0;
  func0.methodName = "gr";
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "graphix";
  func0.debug = "import";
  func0.confidential = true;
  var func1 = function(argcv) {    // method shape, line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("shape", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("shape", "graphix", 3);
    var ouc_init = this.methods["shape$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method shape
  this.methods["shape"] = func1;
  func1.methodName = "shape";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 3;
  func1.definitionModule = "graphix";
  var func2 = function(argcv, inheritingObject, aliases, exclusions) {    // method shape$build(_,_,_), line 3
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("shape", 0, numArgs - 0);
    }
    var obj3_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_graphix_3");
      this.outer_graphix_3 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.color = undefined;
      var reader4_color = function() {  // reader method color
          if (this.data.color === undefined) raiseUninitializedVariable("color");
          return this.data.color;
      };
      reader4_color.isVar = true;
      this.methods["color"] = reader4_color;
      var writer5_color = function(argcv, n) {   // writer method color:=(_)
        this.data.color = n;
        return GraceDone;
      };
      this.methods["color:=(1)"] = writer5_color;
      this.data.fill = undefined;
      var reader6_fill = function() {  // reader method fill
          if (this.data.fill === undefined) raiseUninitializedVariable("fill");
          return this.data.fill;
      };
      reader6_fill.isVar = true;
      this.methods["fill"] = reader6_fill;
      var writer7_fill = function(argcv, n) {   // writer method fill:=(_)
        this.data.fill = n;
        return GraceDone;
      };
      this.methods["fill:=(1)"] = writer7_fill;
      this.data.location = undefined;
      var reader8_location = function() {  // reader method location
          if (this.data.location === undefined) raiseUninitializedVariable("location");
          return this.data.location;
      };
      reader8_location.isVar = true;
      this.methods["location"] = reader8_location;
      var writer9_location = function(argcv, n) {   // writer method location:=(_)
        this.data.location = n;
        return GraceDone;
      };
      this.methods["location:=(1)"] = writer9_location;
      this.data.myStage = undefined;
      var reader10_myStage = function() {  // reader method myStage
          if (this.data.myStage === undefined) raiseUninitializedVariable("myStage");
          return this.data.myStage;
      };
      reader10_myStage.isVar = true;
      reader10_myStage.confidential = true;
      this.methods["myStage"] = reader10_myStage;
      var writer11_myStage = function(argcv, n) {   // writer method myStage:=(_)
        this.data.myStage = n;
        return GraceDone;
      };
      writer11_myStage.confidential = true;
      this.methods["myStage:=(1)"] = writer11_myStage;
      this.data.jsShapeObject = undefined;
      var reader12_jsShapeObject = function() {  // reader method jsShapeObject
          if (this.data.jsShapeObject === undefined) raiseUninitializedVariable("jsShapeObject");
          return this.data.jsShapeObject;
      };
      reader12_jsShapeObject.isVar = true;
      this.methods["jsShapeObject"] = reader12_jsShapeObject;
      var writer13_jsShapeObject = function(argcv, n) {   // writer method jsShapeObject:=(_)
        this.data.jsShapeObject = n;
        return GraceDone;
      };
      this.methods["jsShapeObject:=(1)"] = writer13_jsShapeObject;
      this.data.visible__39__ = undefined;
      var reader14_visible__39__ = function() {  // reader method visible'
          if (this.data.visible__39__ === undefined) raiseUninitializedVariable("visible'");
          return this.data.visible__39__;
      };
      reader14_visible__39__.isVar = true;
      reader14_visible__39__.confidential = true;
      this.methods["visible'"] = reader14_visible__39__;
      var writer15_visible__39__ = function(argcv, n) {   // writer method visible':=(_)
        this.data.visible__39__ = n;
        return GraceDone;
      };
      writer15_visible__39__.confidential = true;
      this.methods["visible':=(1)"] = writer15_visible__39__;
      var func16 = function(argcv, var_c) {    // method colored(_), line 11
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("colored(_)", 0, numArgs - 1);
        }
        setLineNumber(12);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call17 = selfRequest(this, "color:=(1)", [1], var_c);
        return this;
      };    // end of method colored(_)
      this.methods["colored(1)"] = func16;
      func16.methodName = "colored(1)";
      func16.paramCounts = [1];
      func16.paramNames = ["c"];
      func16.definitionLine = 11;
      func16.definitionModule = "graphix";
      var func18 = function(argcv, var_f) {    // method filled(_), line 16
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("filled(_)", 0, numArgs - 1);
        }
        setLineNumber(17);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call19 = selfRequest(this, "fill:=(1)", [1], var_f);
        return this;
      };    // end of method filled(_)
      this.methods["filled(1)"] = func18;
      func18.methodName = "filled(1)";
      func18.paramCounts = [1];
      func18.paramNames = ["f"];
      func18.definitionLine = 16;
      func18.definitionModule = "graphix";
      var func20 = function(argcv, var_l) {    // method at(_), line 21
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("at(_)", 0, numArgs - 1);
        }
        setLineNumber(22);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call21 = selfRequest(this, "location:=(1)", [1], var_l);
        return this;
      };    // end of method at(_)
      this.methods["at(1)"] = func20;
      func20.methodName = "at(1)";
      func20.paramCounts = [1];
      func20.paramNames = ["l"];
      func20.definitionLine = 21;
      func20.definitionModule = "graphix";
      var func22 = function(argcv, var_xDiff, var_yDiff) {    // method moveBy(_,_), line 26
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("moveBy(_,_)", 0, numArgs - 2);
        }
        setLineNumber(27);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call24 = selfRequest(this, "location", [0]);
        var call23 = request(call24, "x", [0]);
        var var_currentX = call23;
        setLineNumber(28);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call26 = selfRequest(this, "location", [0]);
        var call25 = request(call26, "y", [0]);
        var var_currentY = call25;
        setLineNumber(29);    // compilenode op
        var sum28 = request(var_currentX, "+(1)", [1], var_xDiff);
        var sum29 = request(var_currentY, "+(1)", [1], var_yDiff);
        var opresult30 = request(sum28, "@(1)", [1], sum29);
        // call case 4: self request with 1 args and 0 typeArgs 
        var call27 = selfRequest(this, "location:=(1)", [1], opresult30);
        setLineNumber(30);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call32 = selfRequest(this, "location", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call33 = selfRequest(this, "jsShapeObject", [0]);
        var call31 = request(call33, "setLocation(1)", [1], call32);
        setLineNumber(31);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call36 = selfRequest(this, "location", [0]);
        var call35 = request(call36, "x", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call38 = selfRequest(this, "location", [0]);
        var call37 = request(call38, "y", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call39 = selfRequest(this, "jsShapeObject", [0]);
        var call34 = request(call39, "move(2)", [2], call35, call37);
        setLineNumber(32);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call41 = selfRequest(this, "myStage", [0]);
        var call40 = request(call41, "update", [0]);
        return call40;
      };    // end of method moveBy(_,_)
      this.methods["moveBy(2)"] = func22;
      func22.methodName = "moveBy(2)";
      func22.paramCounts = [2];
      func22.paramNames = ["xDiff", "yDiff"];
      func22.definitionLine = 26;
      func22.definitionModule = "graphix";
      var func42 = function(argcv, var_p) {    // method drawAt(_), line 35
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("drawAt(_)", 0, numArgs - 1);
        }
        setLineNumber(36);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call43 = selfRequest(this, "location:=(1)", [1], var_p);
        setLineNumber(37);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call44 = selfRequest(this, "draw", [0]);
        return call44;
      };    // end of method drawAt(_)
      this.methods["drawAt(1)"] = func42;
      func42.methodName = "drawAt(1)";
      func42.paramCounts = [1];
      func42.paramNames = ["p"];
      func42.definitionLine = 35;
      func42.definitionModule = "graphix";
      var func45 = function(argcv, var_v) {    // method visible:=(_), line 40
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("visible:=(_)", 0, numArgs - 1);
        }
        setLineNumber(41);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call46 = selfRequest(this, "visible':=(1)", [1], var_v);
        setLineNumber(42);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call48 = selfRequest(this, "jsShapeObject", [0]);
        var call47 = request(call48, "setVisible(1)", [1], var_v);
        setLineNumber(43);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call50 = selfRequest(this, "myStage", [0]);
        var call49 = request(call50, "update", [0]);
        return call49;
      };    // end of method visible:=(_)
      this.methods["visible:=(1)"] = func45;
      func45.methodName = "visible:=(1)";
      func45.paramCounts = [1];
      func45.paramNames = ["v"];
      func45.definitionLine = 40;
      func45.definitionModule = "graphix";
      var func51 = function(argcv, var_point) {    // method contains(_), line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("contains(_)", 0, numArgs - 1);
        }
        setLineNumber(47);    // compilenode member
        // call case 6: other requests
        var call53 = request(var_point, "x", [0]);
        // call case 6: other requests
        var call54 = request(var_point, "y", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call55 = selfRequest(this, "jsShapeObject", [0]);
        var call52 = request(call55, "hitTest(2)", [2], call53, call54);
        return call52;
      };    // end of method contains(_)
      this.methods["contains(1)"] = func51;
      func51.methodName = "contains(1)";
      func51.paramCounts = [1];
      func51.paramNames = ["point"];
      func51.definitionLine = 46;
      func51.definitionModule = "graphix";
      var func56 = function(argcv) {    // method mouseLocation, line 50
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("mouseLocation", 0, numArgs - 0);
        }
        setLineNumber(51);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call58 = selfRequest(this, "jsShapeObject", [0]);
        var call57 = request(call58, "mouseLocation", [0]);
        return call57;
      };    // end of method mouseLocation
      this.methods["mouseLocation"] = func56;
      func56.methodName = "mouseLocation";
      func56.paramCounts = [0];
      func56.paramNames = [];
      func56.definitionLine = 50;
      func56.definitionModule = "graphix";
      var func59 = function(argcv, var_block) {    // method onClick:=(_), line 54
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onClick:=(_)", 0, numArgs - 1);
        }
        setLineNumber(55);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call61 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call62 = selfRequest(this, "jsShapeObject", [0]);
        var call60 = request(call62, "addClickListener(2)", [2], call61, var_block);
        setLineNumber(56);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call64 = selfRequest(this, "myStage", [0]);
        var call63 = request(call64, "update", [0]);
        return call63;
      };    // end of method onClick:=(_)
      this.methods["onClick:=(1)"] = func59;
      func59.methodName = "onClick:=(1)";
      func59.paramCounts = [1];
      func59.paramNames = ["block"];
      func59.definitionLine = 54;
      func59.definitionModule = "graphix";
      var func65 = function(argcv, var_block) {    // method onClickDo(_), line 58
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onClickDo(_)", 0, numArgs - 1);
        }
        setLineNumber(59);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call67 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call68 = selfRequest(this, "jsShapeObject", [0]);
        var call66 = request(call68, "addClickListener(2)", [2], call67, var_block);
        setLineNumber(60);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call70 = selfRequest(this, "myStage", [0]);
        var call69 = request(call70, "update", [0]);
        return this;
      };    // end of method onClickDo(_)
      this.methods["onClickDo(1)"] = func65;
      func65.methodName = "onClickDo(1)";
      func65.paramCounts = [1];
      func65.paramNames = ["block"];
      func65.definitionLine = 58;
      func65.definitionModule = "graphix";
      var func71 = function(argcv, var_block) {    // method onMouseUp:=(_), line 64
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseUp:=(_)", 0, numArgs - 1);
        }
        setLineNumber(65);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call73 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call74 = selfRequest(this, "jsShapeObject", [0]);
        var call72 = request(call74, "addMouseUpListener(2)", [2], call73, var_block);
        return call72;
      };    // end of method onMouseUp:=(_)
      this.methods["onMouseUp:=(1)"] = func71;
      func71.methodName = "onMouseUp:=(1)";
      func71.paramCounts = [1];
      func71.paramNames = ["block"];
      func71.definitionLine = 64;
      func71.definitionModule = "graphix";
      var func75 = function(argcv, var_block) {    // method onMouseUpDo(_), line 67
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseUpDo(_)", 0, numArgs - 1);
        }
        setLineNumber(68);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call77 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call78 = selfRequest(this, "jsShapeObject", [0]);
        var call76 = request(call78, "addMouseUpListener(2)", [2], call77, var_block);
        return this;
      };    // end of method onMouseUpDo(_)
      this.methods["onMouseUpDo(1)"] = func75;
      func75.methodName = "onMouseUpDo(1)";
      func75.paramCounts = [1];
      func75.paramNames = ["block"];
      func75.definitionLine = 67;
      func75.definitionModule = "graphix";
      var func79 = function(argcv, var_block) {    // method onMouseDown:=(_), line 72
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseDown:=(_)", 0, numArgs - 1);
        }
        setLineNumber(73);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call81 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call82 = selfRequest(this, "jsShapeObject", [0]);
        var call80 = request(call82, "addMouseDownListener(2)", [2], call81, var_block);
        return call80;
      };    // end of method onMouseDown:=(_)
      this.methods["onMouseDown:=(1)"] = func79;
      func79.methodName = "onMouseDown:=(1)";
      func79.paramCounts = [1];
      func79.paramNames = ["block"];
      func79.definitionLine = 72;
      func79.definitionModule = "graphix";
      var func83 = function(argcv, var_block) {    // method onMouseDownDo(_), line 75
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseDownDo(_)", 0, numArgs - 1);
        }
        setLineNumber(76);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call85 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call86 = selfRequest(this, "jsShapeObject", [0]);
        var call84 = request(call86, "addMouseDownListener(2)", [2], call85, var_block);
        return this;
      };    // end of method onMouseDownDo(_)
      this.methods["onMouseDownDo(1)"] = func83;
      func83.methodName = "onMouseDownDo(1)";
      func83.paramCounts = [1];
      func83.paramNames = ["block"];
      func83.definitionLine = 75;
      func83.definitionModule = "graphix";
      var func87 = function(argcv, var_block) {    // method onPressMove:=(_), line 80
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onPressMove:=(_)", 0, numArgs - 1);
        }
        setLineNumber(81);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call89 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call90 = selfRequest(this, "jsShapeObject", [0]);
        var call88 = request(call90, "addPressMoveListener(2)", [2], call89, var_block);
        return call88;
      };    // end of method onPressMove:=(_)
      this.methods["onPressMove:=(1)"] = func87;
      func87.methodName = "onPressMove:=(1)";
      func87.paramCounts = [1];
      func87.paramNames = ["block"];
      func87.definitionLine = 80;
      func87.definitionModule = "graphix";
      var func91 = function(argcv, var_block) {    // method onPressMoveDo(_), line 84
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onPressMoveDo(_)", 0, numArgs - 1);
        }
        setLineNumber(85);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call93 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call94 = selfRequest(this, "jsShapeObject", [0]);
        var call92 = request(call94, "addPressMoveListener(2)", [2], call93, var_block);
        return this;
      };    // end of method onPressMoveDo(_)
      this.methods["onPressMoveDo(1)"] = func91;
      func91.methodName = "onPressMoveDo(1)";
      func91.paramCounts = [1];
      func91.paramNames = ["block"];
      func91.definitionLine = 84;
      func91.definitionModule = "graphix";
      var func95 = function(argcv, var_block) {    // method onMouseOver:=(_), line 89
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseOver:=(_)", 0, numArgs - 1);
        }
        setLineNumber(90);    // compilenode num
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call97 = selfRequest(this, "myStage", [0]);
        var call96 = request(call97, "enableMouseOver(1)", [1], new GraceNum(20));
        setLineNumber(91);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call99 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call100 = selfRequest(this, "jsShapeObject", [0]);
        var call98 = request(call100, "addMouseOverListener(2)", [2], call99, var_block);
        return call98;
      };    // end of method onMouseOver:=(_)
      this.methods["onMouseOver:=(1)"] = func95;
      func95.methodName = "onMouseOver:=(1)";
      func95.paramCounts = [1];
      func95.paramNames = ["block"];
      func95.definitionLine = 89;
      func95.definitionModule = "graphix";
      var func101 = function(argcv, var_block) {    // method onMouseOverDo(_), line 94
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseOverDo(_)", 0, numArgs - 1);
        }
        setLineNumber(95);    // compilenode num
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call103 = selfRequest(this, "myStage", [0]);
        var call102 = request(call103, "enableMouseOver(1)", [1], new GraceNum(20));
        setLineNumber(96);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call105 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call106 = selfRequest(this, "jsShapeObject", [0]);
        var call104 = request(call106, "addMouseOverListener(2)", [2], call105, var_block);
        return this;
      };    // end of method onMouseOverDo(_)
      this.methods["onMouseOverDo(1)"] = func101;
      func101.methodName = "onMouseOverDo(1)";
      func101.paramCounts = [1];
      func101.paramNames = ["block"];
      func101.definitionLine = 94;
      func101.definitionModule = "graphix";
      var func107 = function(argcv) {    // method shapeDraw, line 100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("shapeDraw", 0, numArgs - 0);
        }
        setLineNumber(100);    // compilenode member
        // call case 2: outer request
        var call108 = selfRequest(var_prelude, "abstract", [0]);
        return call108;
      };    // end of method shapeDraw
      func107.confidential = true;
      this.methods["shapeDraw"] = func107;
      func107.methodName = "shapeDraw";
      func107.paramCounts = [0];
      func107.paramNames = [];
      func107.definitionLine = 100;
      func107.definitionModule = "graphix";
      var func109 = function(argcv) {    // method draw, line 102
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("draw", 0, numArgs - 0);
        }
        setLineNumber(103);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call110 = selfRequest(this, "clear", [0]);
        setLineNumber(104);    // compilenode call
        // call case 4: self request with 1 args and 0 typeArgs 
        var call111 = selfRequest(this, "visible:=(1)", [1], GraceTrue);
        setLineNumber(105);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call113 = selfRequest(this, "location", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call114 = selfRequest(this, "jsShapeObject", [0]);
        var call112 = request(call114, "setLocation(1)", [1], call113);
        var if115 = GraceDone;
        setLineNumber(106);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call116 = selfRequest(this, "fill", [0]);
        if (Grace_isTrue(call116)) {
          setLineNumber(107);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call118 = selfRequest(this, "color", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call119 = selfRequest(this, "jsShapeObject", [0]);
          var call117 = request(call119, "beginFill(1)", [1], call118);
          if115 = call117;
        } else {
          setLineNumber(109);    // compilenode member
          // call case 4: self request with 0 args and 0 typeArgs 
          var call121 = selfRequest(this, "color", [0]);
          // call case 6: other requests
          // call case 4: self request with 0 args and 0 typeArgs 
          var call122 = selfRequest(this, "jsShapeObject", [0]);
          var call120 = request(call122, "beginStroke(1)", [1], call121);
          if115 = call120;
        }
        setLineNumber(111);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call123 = selfRequest(this, "shapeDraw", [0]);
        setLineNumber(112);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call125 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call126 = selfRequest(this, "myStage", [0]);
        var call124 = request(call126, "add(1)", [1], call125);
        setLineNumber(113);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call128 = selfRequest(this, "myStage", [0]);
        var call127 = request(call128, "update", [0]);
        return this;
      };    // end of method draw
      this.methods["draw"] = func109;
      func109.methodName = "draw";
      func109.paramCounts = [0];
      func109.paramNames = [];
      func109.definitionLine = 102;
      func109.definitionModule = "graphix";
      var func129 = function(argcv) {    // method clear, line 117
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("clear", 0, numArgs - 0);
        }
        setLineNumber(118);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call131 = selfRequest(this, "jsShapeObject", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call132 = selfRequest(this, "myStage", [0]);
        var call130 = request(call132, "removeChild(1)", [1], call131);
        setLineNumber(119);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call134 = selfRequest(this, "jsShapeObject", [0]);
        var call133 = request(call134, "clear", [0]);
        setLineNumber(120);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call136 = selfRequest(this, "myStage", [0]);
        var call135 = request(call136, "update", [0]);
        return call135;
      };    // end of method clear
      this.methods["clear"] = func129;
      func129.methodName = "clear";
      func129.paramCounts = [0];
      func129.paramNames = [];
      func129.definitionLine = 117;
      func129.definitionModule = "graphix";
      var func137 = function(argcv) {    // method tween, line 123
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("tween", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("shape.tween", "graphix", 123);
        var ouc_init = this.methods["tween$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method tween
      this.methods["tween"] = func137;
      func137.methodName = "tween";
      func137.paramCounts = [0];
      func137.paramNames = [];
      func137.definitionLine = 123;
      func137.definitionModule = "graphix";
      var func138 = function(argcv, inheritingObject, aliases, exclusions) {    // method tween$build(_,_,_), line 123
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("tween", 0, numArgs - 0);
        }
        var obj139_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_124");
          this.outer_graphix_124 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.jsTween = undefined;
          var reader140_jsTween = function() {  // reader method jsTween
              if (this.data.jsTween === undefined) raiseUninitializedVariable("jsTween");
              return this.data.jsTween;
          };
          reader140_jsTween.isVar = true;
          reader140_jsTween.confidential = true;
          this.methods["jsTween"] = reader140_jsTween;
          var writer141_jsTween = function(argcv, n) {   // writer method jsTween:=(_)
            this.data.jsTween = n;
            return GraceDone;
          };
          writer141_jsTween.confidential = true;
          this.methods["jsTween:=(1)"] = writer141_jsTween;
          var func142 = function(argcv, var_x) {    // method toX(_), line 126
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("toX(_)", 0, numArgs - 1);
            }
            setLineNumber(127);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call144 = selfRequest(this, "jsTween", [0]);
            var call143 = request(call144, "toX(1)", [1], var_x);
            return call143;
          };    // end of method toX(_)
          this.methods["toX(1)"] = func142;
          func142.methodName = "toX(1)";
          func142.paramCounts = [1];
          func142.paramNames = ["x"];
          func142.definitionLine = 126;
          func142.definitionModule = "graphix";
          var func145 = function(argcv, var_time) {    // method wait(_), line 130
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("wait(_)", 0, numArgs - 1);
            }
            setLineNumber(131);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call147 = selfRequest(this, "jsTween", [0]);
            var call146 = request(call147, "wait(1)", [1], var_time);
            return call146;
          };    // end of method wait(_)
          this.methods["wait(1)"] = func145;
          func145.methodName = "wait(1)";
          func145.paramCounts = [1];
          func145.paramNames = ["time"];
          func145.definitionLine = 130;
          func145.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 124;
              m.definitionModule = "graphix";
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
          var obj139_init = function() {    // init of object on line 124
            setLineNumber(125);    // compilenode member
            // call case 2: outer request
            var call149 = selfRequest(this.outer_graphix_124, "jsShapeObject", [0]);
            // call case 2: outer request
            var call150 = selfRequest(this.outer_graphix_124, "myStage", [0]);
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call148 = request(var_gr, "tween(2)", [2], call149, call150);
            this.data.jsTween = call148;
          };
          return obj139_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj139_init = obj139_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj139_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method tween$build(_,_,_)
      this.methods["tween$build(3)"] = func138;
      func138.methodName = "tween$build(3)";
      func138.paramCounts = [0];
      func138.paramNames = [];
      func138.definitionLine = 123;
      func138.definitionModule = "graphix";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 3;
          m.definitionModule = "graphix";
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
        setLineNumber(4);    // compilenode string
        var string151 = new GraceString("black");
        this.data.color = string151;
        this.data.fill = GraceFalse;
        setLineNumber(6);    // compilenode num
        var opresult152 = request(new GraceNum(0), "@(1)", [1], new GraceNum(0));
        this.data.location = opresult152;
        this.data.myStage = undefined;
        this.data.jsShapeObject = undefined;
        this.data.visible__39__ = undefined;
      };
      return obj3_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj3_init = obj3_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj3_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method shape$build(_,_,_)
  this.methods["shape$build(3)"] = func2;
  func2.methodName = "shape$build(3)";
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.definitionLine = 3;
  func2.definitionModule = "graphix";
  var func153 = function(argcv, var_canvasWidth, var_canvasHeight) {    // method create(_,_), line 137
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("create(_,_)", 0, numArgs - 2);
    }
    var ouc = emptyGraceObject("create(_,_)", "graphix", 137);
    var ouc_init = this.methods["create(2)$build(3)"].call(this, null, var_canvasWidth, var_canvasHeight, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method create(_,_)
  this.methods["create(2)"] = func153;
  func153.methodName = "create(2)";
  func153.paramCounts = [2];
  func153.paramNames = ["canvasWidth", "canvasHeight"];
  func153.definitionLine = 137;
  func153.definitionModule = "graphix";
  var func154 = function(argcv, var_canvasWidth, var_canvasHeight, inheritingObject, aliases, exclusions) {    // method create(_,_)$build(_,_,_), line 137
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("create(_,_)", 0, numArgs - 2);
    }
    var obj155_build = function(ignore, var_canvasWidth, var_canvasHeight, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_graphix_137");
      this.outer_graphix_137 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      this.data.shapes = undefined;
      var reader156_shapes = function() {  // reader method shapes
          if (this.data.shapes === undefined) raiseUninitializedVariable("shapes");
          return this.data.shapes;
      };
      reader156_shapes.isVar = true;
      reader156_shapes.confidential = true;
      this.methods["shapes"] = reader156_shapes;
      var writer157_shapes = function(argcv, n) {   // writer method shapes:=(_)
        this.data.shapes = n;
        return GraceDone;
      };
      writer157_shapes.confidential = true;
      this.methods["shapes:=(1)"] = writer157_shapes;
      this.data.inputs = undefined;
      var reader158_inputs = function() {  // reader method inputs
          if (this.data.inputs === undefined) raiseUninitializedVariable("inputs");
          return this.data.inputs;
      };
      reader158_inputs.isVar = true;
      reader158_inputs.confidential = true;
      this.methods["inputs"] = reader158_inputs;
      var writer159_inputs = function(argcv, n) {   // writer method inputs:=(_)
        this.data.inputs = n;
        return GraceDone;
      };
      writer159_inputs.confidential = true;
      this.methods["inputs:=(1)"] = writer159_inputs;
      this.data.stage = undefined;
      var reader160_stage = function() {  // reader method stage
          if (this.data.stage === undefined) raiseUninitializedVariable("stage");
          return this.data.stage;
      };
      reader160_stage.isVar = true;
      reader160_stage.confidential = true;
      this.methods["stage"] = reader160_stage;
      var writer161_stage = function(argcv, n) {   // writer method stage:=(_)
        this.data.stage = n;
        return GraceDone;
      };
      writer161_stage.confidential = true;
      this.methods["stage:=(1)"] = writer161_stage;
      this.data.timeoutIsSet = undefined;
      var reader162_timeoutIsSet = function() {  // reader method timeoutIsSet
          if (this.data.timeoutIsSet === undefined) raiseUninitializedVariable("timeoutIsSet");
          return this.data.timeoutIsSet;
      };
      reader162_timeoutIsSet.isVar = true;
      reader162_timeoutIsSet.confidential = true;
      this.methods["timeoutIsSet"] = reader162_timeoutIsSet;
      var writer163_timeoutIsSet = function(argcv, n) {   // writer method timeoutIsSet:=(_)
        this.data.timeoutIsSet = n;
        return GraceDone;
      };
      writer163_timeoutIsSet.confidential = true;
      this.methods["timeoutIsSet:=(1)"] = writer163_timeoutIsSet;
      var func164 = function(argcv) {    // method asString, line 143
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(144);    // compilenode string
        var string165 = new GraceString("aGraphixCanvas(");
        var opresult166 = request(string165, "++(1)", [1], var_canvasWidth);
        var string167 = new GraceString("\u00d7");
        var opresult168 = request(opresult166, "++(1)", [1], string167);
        var opresult169 = request(opresult168, "++(1)", [1], var_canvasHeight);
        var string170 = new GraceString(")");
        var opresult171 = request(opresult169, "++(1)", [1], string170);
        return opresult171;
      };    // end of method asString
      this.methods["asString"] = func164;
      func164.methodName = "asString";
      func164.paramCounts = [0];
      func164.paramNames = [];
      func164.definitionLine = 143;
      func164.definitionModule = "graphix";
      var func172 = function(argcv) {    // method drawall, line 147
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("drawall", 0, numArgs - 0);
        }
        setLineNumber(148);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call174 = selfRequest(this, "shapes", [0]);
        var block175 = new GraceBlock(this, 148, 1);
        block175.guard = jsTrue;
        block175.real = function block175(var_x) {
          setLineNumber(148);    // compilenode member
          // call case 6: other requests
          var call176 = request(var_x, "draw", [0]);
          return call176;
        };
        let applyMeth175 = function apply_1 (argcv, ...args) {
            if (this.guard.apply(this.receiver, args))
                return this.real.apply(this.receiver, args);
            badBlockArgs.apply(this, args);
        };
        applyMeth175.methodName = "apply(1)";
        applyMeth175.paramCounts = [1];
        applyMeth175.paramNames = ["x"];
        applyMeth175.definitionLine = 148;
        applyMeth175.definitionModule = "graphix";
        block175.methods["apply(1)"] = applyMeth175;
        let matchesMeth175 = function matches_1 (argcv, ...args) {
            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
        };
        matchesMeth175.methodName = "matches(1)";
        matchesMeth175.paramCounts = [1];
        matchesMeth175.paramNames = ["x"];
        matchesMeth175.definitionLine = 148;
        matchesMeth175.definitionModule = "graphix";
        block175.methods["matches(1)"] = matchesMeth175;
        // call case 2: outer request
        var call173 = selfRequest(var_prelude, "for(1)do(1)", [1, 1], call174, block175);
        return call173;
      };    // end of method drawall
      this.methods["drawall"] = func172;
      func172.methodName = "drawall";
      func172.paramCounts = [0];
      func172.paramNames = [];
      func172.definitionLine = 147;
      func172.definitionModule = "graphix";
      var func177 = function(argcv, var_sound) {    // method play(_), line 150
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("play(_)", 0, numArgs - 1);
        }
        setLineNumber(151);    // compilenode call
        var result = GraceDone;    // start native code from line 151
        
              createjs.Sound.play(var_sound._value);
           // end native code insertion
        return result;
      };    // end of method play(_)
      this.methods["play(1)"] = func177;
      func177.methodName = "play(1)";
      func177.paramCounts = [1];
      func177.paramNames = ["sound"];
      func177.definitionLine = 150;
      func177.definitionModule = "graphix";
      var func178 = function(argcv, var_block) {    // method onStageMouseDown:=(_), line 155
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onStageMouseDown:=(_)", 0, numArgs - 1);
        }
        setLineNumber(156);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call180 = selfRequest(this, "stage", [0]);
        var call179 = request(call180, "addStageDownListener(1)", [1], var_block);
        return call179;
      };    // end of method onStageMouseDown:=(_)
      this.methods["onStageMouseDown:=(1)"] = func178;
      func178.methodName = "onStageMouseDown:=(1)";
      func178.paramCounts = [1];
      func178.paramNames = ["block"];
      func178.definitionLine = 155;
      func178.definitionModule = "graphix";
      var func181 = function(argcv, var_block) {    // method onMouseDownDo(_), line 158
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseDownDo(_)", 0, numArgs - 1);
        }
        setLineNumber(159);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call183 = selfRequest(this, "stage", [0]);
        var call182 = request(call183, "addStageDownListener(1)", [1], var_block);
        return this;
      };    // end of method onMouseDownDo(_)
      this.methods["onMouseDownDo(1)"] = func181;
      func181.methodName = "onMouseDownDo(1)";
      func181.paramCounts = [1];
      func181.paramNames = ["block"];
      func181.definitionLine = 158;
      func181.definitionModule = "graphix";
      var func184 = function(argcv, var_block) {    // method onStageMouseUp:=(_), line 163
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onStageMouseUp:=(_)", 0, numArgs - 1);
        }
        setLineNumber(164);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call186 = selfRequest(this, "stage", [0]);
        var call185 = request(call186, "addStageUpListener(1)", [1], var_block);
        return call185;
      };    // end of method onStageMouseUp:=(_)
      this.methods["onStageMouseUp:=(1)"] = func184;
      func184.methodName = "onStageMouseUp:=(1)";
      func184.paramCounts = [1];
      func184.paramNames = ["block"];
      func184.definitionLine = 163;
      func184.definitionModule = "graphix";
      var func187 = function(argcv, var_block) {    // method onMouseUpDo(_), line 166
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseUpDo(_)", 0, numArgs - 1);
        }
        setLineNumber(167);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call189 = selfRequest(this, "stage", [0]);
        var call188 = request(call189, "addStageUpListener(1)", [1], var_block);
        return this;
      };    // end of method onMouseUpDo(_)
      this.methods["onMouseUpDo(1)"] = func187;
      func187.methodName = "onMouseUpDo(1)";
      func187.paramCounts = [1];
      func187.paramNames = ["block"];
      func187.definitionLine = 166;
      func187.definitionModule = "graphix";
      var func190 = function(argcv, var_block) {    // method onMouseExit:=(_), line 171
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseExit:=(_)", 0, numArgs - 1);
        }
        setLineNumber(172);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call192 = selfRequest(this, "stage", [0]);
        var call191 = request(call192, "addMouseExitListener(1)", [1], var_block);
        return call191;
      };    // end of method onMouseExit:=(_)
      this.methods["onMouseExit:=(1)"] = func190;
      func190.methodName = "onMouseExit:=(1)";
      func190.paramCounts = [1];
      func190.paramNames = ["block"];
      func190.definitionLine = 171;
      func190.definitionModule = "graphix";
      var func193 = function(argcv, var_block) {    // method onMouseExitDo(_), line 174
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseExitDo(_)", 0, numArgs - 1);
        }
        setLineNumber(175);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call195 = selfRequest(this, "stage", [0]);
        var call194 = request(call195, "addMouseExitListener(1)", [1], var_block);
        return this;
      };    // end of method onMouseExitDo(_)
      this.methods["onMouseExitDo(1)"] = func193;
      func193.methodName = "onMouseExitDo(1)";
      func193.paramCounts = [1];
      func193.paramNames = ["block"];
      func193.definitionLine = 174;
      func193.definitionModule = "graphix";
      var func196 = function(argcv, var_block) {    // method onStageMouseMove:=(_), line 179
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onStageMouseMove:=(_)", 0, numArgs - 1);
        }
        setLineNumber(180);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call198 = selfRequest(this, "stage", [0]);
        var call197 = request(call198, "addStageMouseMoveListener(1)", [1], var_block);
        return call197;
      };    // end of method onStageMouseMove:=(_)
      this.methods["onStageMouseMove:=(1)"] = func196;
      func196.methodName = "onStageMouseMove:=(1)";
      func196.paramCounts = [1];
      func196.paramNames = ["block"];
      func196.definitionLine = 179;
      func196.definitionModule = "graphix";
      var func199 = function(argcv, var_block) {    // method onMouseMoveDo(_), line 182
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("onMouseMoveDo(_)", 0, numArgs - 1);
        }
        setLineNumber(183);    // compilenode call
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call201 = selfRequest(this, "stage", [0]);
        var call200 = request(call201, "addStageMouseMoveListener(1)", [1], var_block);
        return this;
      };    // end of method onMouseMoveDo(_)
      this.methods["onMouseMoveDo(1)"] = func199;
      func199.methodName = "onMouseMoveDo(1)";
      func199.paramCounts = [1];
      func199.paramNames = ["block"];
      func199.definitionLine = 182;
      func199.definitionModule = "graphix";
      var func202 = function(argcv) {    // method mouseLocation, line 187
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("mouseLocation", 0, numArgs - 0);
        }
        setLineNumber(188);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call204 = selfRequest(this, "stage", [0]);
        var call203 = request(call204, "mouseLocation", [0]);
        return call203;
      };    // end of method mouseLocation
      this.methods["mouseLocation"] = func202;
      func202.methodName = "mouseLocation";
      func202.paramCounts = [0];
      func202.paramNames = [];
      func202.definitionLine = 187;
      func202.definitionModule = "graphix";
      var func205 = function(argcv) {    // method clear, line 191
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("clear", 0, numArgs - 0);
        }
        setLineNumber(192);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call207 = selfRequest(this, "stage", [0]);
        var call206 = request(call207, "removeAllChildren", [0]);
        setLineNumber(193);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call209 = selfRequest(this, "stage", [0]);
        var call208 = request(call209, "removeAllEventListeners", [0]);
        setLineNumber(194);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call211 = selfRequest(this, "stage", [0]);
        var call210 = request(call211, "createClearButton", [0]);
        setLineNumber(195);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call213 = selfRequest(this, "stage", [0]);
        var call212 = request(call213, "update", [0]);
        return call212;
      };    // end of method clear
      this.methods["clear"] = func205;
      func205.methodName = "clear";
      func205.paramCounts = [0];
      func205.paramNames = [];
      func205.definitionLine = 191;
      func205.definitionModule = "graphix";
      var func214 = function(argcv, var_block, var_time) {    // method timedEvent(_,_), line 198
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("timedEvent(_,_)", 0, numArgs - 2);
        }
        setLineNumber(200);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call216 = selfRequest(this, "stage", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call217 = selfRequest(this, "stage", [0]);
        var call215 = request(call217, "setTimeout(3)", [3], var_block, var_time, call216);
        return call215;
      };    // end of method timedEvent(_,_)
      this.methods["timedEvent(2)"] = func214;
      func214.methodName = "timedEvent(2)";
      func214.paramCounts = [2];
      func214.paramNames = ["block", "time"];
      func214.definitionLine = 198;
      func214.definitionModule = "graphix";
      var func218 = function(argcv, var_time, var_block) {    // method after(_)do(_), line 202
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("after(_)do(_)", 0, numArgs - 2);
        }
        setLineNumber(203);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call220 = selfRequest(this, "stage", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call221 = selfRequest(this, "stage", [0]);
        var call219 = request(call221, "setTimeout(3)", [3], var_block, var_time, call220);
        return call219;
      };    // end of method after(_)do(_)
      this.methods["after(1)do(1)"] = func218;
      func218.methodName = "after(1)do(1)";
      func218.paramCounts = [1, 1];
      func218.paramNames = ["time", "block"];
      func218.definitionLine = 202;
      func218.definitionModule = "graphix";
      var func222 = function(argcv) {    // method clearTimedEvent, line 206
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("clearTimedEvent", 0, numArgs - 0);
        }
        setLineNumber(207);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call224 = selfRequest(this, "stage", [0]);
        var call223 = request(call224, "clearTimeout", [0]);
        return call223;
      };    // end of method clearTimedEvent
      this.methods["clearTimedEvent"] = func222;
      func222.methodName = "clearTimedEvent";
      func222.paramCounts = [0];
      func222.paramNames = [];
      func222.definitionLine = 206;
      func222.definitionModule = "graphix";
      var func225 = function(argcv, var_block, var_freq) {    // method tickEvent(_,_), line 210
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("tickEvent(_,_)", 0, numArgs - 2);
        }
        setLineNumber(212);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call227 = selfRequest(this, "stage", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call228 = selfRequest(this, "stage", [0]);
        var call226 = request(call228, "setTicker(3)", [3], var_block, var_freq, call227);
        return call226;
      };    // end of method tickEvent(_,_)
      this.methods["tickEvent(2)"] = func225;
      func225.methodName = "tickEvent(2)";
      func225.paramCounts = [2];
      func225.paramNames = ["block", "freq"];
      func225.definitionLine = 210;
      func225.definitionModule = "graphix";
      var func229 = function(argcv, var_interval, var_block) {    // method every(_)do(_), line 214
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 2) && (numArgs !== 2)) {
            raiseTypeArgError("every(_)do(_)", 0, numArgs - 2);
        }
        setLineNumber(215);    // compilenode num
        var quotient231 = request(new GraceNum(1000), "/(1)", [1], var_interval);
        // call case 4: self request with 0 args and 0 typeArgs 
        var call232 = selfRequest(this, "stage", [0]);
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call233 = selfRequest(this, "stage", [0]);
        var call230 = request(call233, "setTicker(3)", [3], var_block, quotient231, call232);
        return call230;
      };    // end of method every(_)do(_)
      this.methods["every(1)do(1)"] = func229;
      func229.methodName = "every(1)do(1)";
      func229.paramCounts = [1, 1];
      func229.paramNames = ["interval", "block"];
      func229.definitionLine = 214;
      func229.definitionModule = "graphix";
      var func234 = function(argcv) {    // method clearTicker, line 218
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("clearTicker", 0, numArgs - 0);
        }
        setLineNumber(219);    // compilenode member
        // call case 6: other requests
        // call case 4: self request with 0 args and 0 typeArgs 
        var call236 = selfRequest(this, "stage", [0]);
        var call235 = request(call236, "clearTicker", [0]);
        return call235;
      };    // end of method clearTicker
      this.methods["clearTicker"] = func234;
      func234.methodName = "clearTicker";
      func234.paramCounts = [0];
      func234.paramNames = [];
      func234.definitionLine = 218;
      func234.definitionModule = "graphix";
      var func237 = function(argcv) {    // method addCircle, line 222
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addCircle", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addCircle", "graphix", 222);
        var ouc_init = this.methods["addCircle$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addCircle
      this.methods["addCircle"] = func237;
      func237.methodName = "addCircle";
      func237.paramCounts = [0];
      func237.paramNames = [];
      func237.definitionLine = 222;
      func237.definitionModule = "graphix";
      var func238 = function(argcv, inheritingObject, aliases, exclusions) {    // method addCircle$build(_,_,_), line 222
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addCircle", 0, numArgs - 0);
        }
        var obj239_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_222");
          this.outer_graphix_222 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(223);    // reuse call
          var initFun240 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.radius = undefined;
          var reader241_radius = function() {  // reader method radius
              if (this.data.radius === undefined) raiseUninitializedVariable("radius");
              return this.data.radius;
          };
          reader241_radius.isVar = true;
          this.methods["radius"] = reader241_radius;
          var writer242_radius = function(argcv, n) {   // writer method radius:=(_)
            this.data.radius = n;
            return GraceDone;
          };
          this.methods["radius:=(1)"] = writer242_radius;
          var func243 = function(argcv) {    // method asString, line 227
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(228);    // compilenode string
            var string244 = new GraceString("aCircle(radius=");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call245 = selfRequest(this, "radius", [0]);
            var opresult246 = request(string244, "++(1)", [1], call245);
            var string247 = new GraceString(")");
            var opresult248 = request(opresult246, "++(1)", [1], string247);
            return opresult248;
          };    // end of method asString
          this.methods["asString"] = func243;
          func243.methodName = "asString";
          func243.paramCounts = [0];
          func243.paramNames = [];
          func243.definitionLine = 227;
          func243.definitionModule = "graphix";
          var func249 = function(argcv, var_r) {    // method setRadius(_), line 231
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setRadius(_)", 0, numArgs - 1);
            }
            setLineNumber(232);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call250 = selfRequest(this, "radius:=(1)", [1], var_r);
            return this;
          };    // end of method setRadius(_)
          this.methods["setRadius(1)"] = func249;
          func249.methodName = "setRadius(1)";
          func249.paramCounts = [1];
          func249.paramNames = ["r"];
          func249.definitionLine = 231;
          func249.definitionModule = "graphix";
          var func251 = function(argcv) {    // method shapeDraw, line 235
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(236);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call253 = selfRequest(this, "radius", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call254 = selfRequest(this, "jsShapeObject", [0]);
            var call252 = request(call254, "draw(1)", [1], call253);
            return call252;
          };    // end of method shapeDraw
          func251.confidential = true;
          this.methods["shapeDraw"] = func251;
          func251.methodName = "shapeDraw";
          func251.paramCounts = [0];
          func251.paramNames = [];
          func251.definitionLine = 235;
          func251.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 222;
              m.definitionModule = "graphix";
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
          var obj239_init = function() {    // init of object on line 222
            initFun240.call(this);
            setLineNumber(224);    // compilenode num
            this.data.radius = new GraceNum(15);
            setLineNumber(225);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call256 = request(var_gr, "circle", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call255 = selfRequest(this, "jsShapeObject:=(1)", [1], call256);
            setLineNumber(226);    // compilenode member
            // call case 2: outer request
            var call258 = selfRequest(this.outer_graphix_222, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call257 = selfRequest(this, "myStage:=(1)", [1], call258);
            setLineNumber(238);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call260 = selfRequest(this.outer_graphix_222, "shapes", [0]);
            var call259 = request(call260, "add(1)", [1], this);
          };
          return obj239_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj239_init = obj239_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj239_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addCircle$build(_,_,_)
      this.methods["addCircle$build(3)"] = func238;
      func238.methodName = "addCircle$build(3)";
      func238.paramCounts = [0];
      func238.paramNames = [];
      func238.definitionLine = 222;
      func238.definitionModule = "graphix";
      var func261 = function(argcv) {    // method addRectangle, line 241
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addRectangle", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addRectangle", "graphix", 241);
        var ouc_init = this.methods["addRectangle$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addRectangle
      this.methods["addRectangle"] = func261;
      func261.methodName = "addRectangle";
      func261.paramCounts = [0];
      func261.paramNames = [];
      func261.definitionLine = 241;
      func261.definitionModule = "graphix";
      var func262 = function(argcv, inheritingObject, aliases, exclusions) {    // method addRectangle$build(_,_,_), line 241
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addRectangle", 0, numArgs - 0);
        }
        var obj263_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_241");
          this.outer_graphix_241 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(242);    // reuse call
          var initFun264 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.width = undefined;
          var reader265_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader265_width.isVar = true;
          this.methods["width"] = reader265_width;
          var writer266_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer266_width;
          this.data.height = undefined;
          var reader267_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader267_height.isVar = true;
          this.methods["height"] = reader267_height;
          var writer268_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer268_height;
          var func269 = function(argcv) {    // method asString, line 248
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(249);    // compilenode string
            var string270 = new GraceString("aRectangle(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call271 = selfRequest(this, "width", [0]);
            var opresult272 = request(string270, "++(1)", [1], call271);
            var string273 = new GraceString("\u00d7");
            var opresult274 = request(opresult272, "++(1)", [1], string273);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call275 = selfRequest(this, "height", [0]);
            var opresult276 = request(opresult274, "++(1)", [1], call275);
            var string277 = new GraceString(")");
            var opresult278 = request(opresult276, "++(1)", [1], string277);
            return opresult278;
          };    // end of method asString
          this.methods["asString"] = func269;
          func269.methodName = "asString";
          func269.paramCounts = [0];
          func269.paramNames = [];
          func269.definitionLine = 248;
          func269.definitionModule = "graphix";
          var func279 = function(argcv, var_h) {    // method setHeight(_), line 252
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setHeight(_)", 0, numArgs - 1);
            }
            setLineNumber(253);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call280 = selfRequest(this, "height:=(1)", [1], var_h);
            return this;
          };    // end of method setHeight(_)
          this.methods["setHeight(1)"] = func279;
          func279.methodName = "setHeight(1)";
          func279.paramCounts = [1];
          func279.paramNames = ["h"];
          func279.definitionLine = 252;
          func279.definitionModule = "graphix";
          var func281 = function(argcv, var_w) {    // method setWidth(_), line 257
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setWidth(_)", 0, numArgs - 1);
            }
            setLineNumber(258);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call282 = selfRequest(this, "width:=(1)", [1], var_w);
            return this;
          };    // end of method setWidth(_)
          this.methods["setWidth(1)"] = func281;
          func281.methodName = "setWidth(1)";
          func281.paramCounts = [1];
          func281.paramNames = ["w"];
          func281.definitionLine = 257;
          func281.definitionModule = "graphix";
          var func283 = function(argcv) {    // method size, line 262
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(262);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call284 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call285 = selfRequest(this, "height", [0]);
            var opresult286 = request(call284, "@(1)", [1], call285);
            return opresult286;
          };    // end of method size
          this.methods["size"] = func283;
          func283.methodName = "size";
          func283.paramCounts = [0];
          func283.paramNames = [];
          func283.definitionLine = 262;
          func283.definitionModule = "graphix";
          var func287 = function(argcv, var_p) {    // method size:=(_), line 264
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(265);    // compilenode member
            // call case 6: other requests
            var call289 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call288 = selfRequest(this, "width:=(1)", [1], call289);
            setLineNumber(266);    // compilenode member
            // call case 6: other requests
            var call291 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call290 = selfRequest(this, "height:=(1)", [1], call291);
            return call290;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func287;
          func287.methodName = "size:=(1)";
          func287.paramCounts = [1];
          func287.paramNames = ["p"];
          func287.definitionLine = 264;
          func287.definitionModule = "graphix";
          var func292 = function(argcv, var_p) {    // method setSize(_), line 269
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(270);    // compilenode member
            // call case 6: other requests
            var call294 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call293 = selfRequest(this, "width:=(1)", [1], call294);
            setLineNumber(271);    // compilenode member
            // call case 6: other requests
            var call296 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call295 = selfRequest(this, "height:=(1)", [1], call296);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func292;
          func292.methodName = "setSize(1)";
          func292.paramCounts = [1];
          func292.paramNames = ["p"];
          func292.definitionLine = 269;
          func292.definitionModule = "graphix";
          var func297 = function(argcv) {    // method shapeDraw, line 275
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(276);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call299 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call300 = selfRequest(this, "height", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call301 = selfRequest(this, "jsShapeObject", [0]);
            var call298 = request(call301, "draw(2)", [2], call299, call300);
            return call298;
          };    // end of method shapeDraw
          func297.confidential = true;
          this.methods["shapeDraw"] = func297;
          func297.methodName = "shapeDraw";
          func297.paramCounts = [0];
          func297.paramNames = [];
          func297.definitionLine = 275;
          func297.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 241;
              m.definitionModule = "graphix";
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
          var obj263_init = function() {    // init of object on line 241
            initFun264.call(this);
            setLineNumber(243);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call303 = request(var_gr, "rectangle", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call302 = selfRequest(this, "jsShapeObject:=(1)", [1], call303);
            setLineNumber(244);    // compilenode num
            this.data.width = new GraceNum(15);
            setLineNumber(245);    // compilenode num
            this.data.height = new GraceNum(15);
            setLineNumber(246);    // compilenode member
            // call case 2: outer request
            var call305 = selfRequest(this.outer_graphix_241, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call304 = selfRequest(this, "myStage:=(1)", [1], call305);
            setLineNumber(279);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call307 = selfRequest(this.outer_graphix_241, "shapes", [0]);
            var call306 = request(call307, "add(1)", [1], this);
          };
          return obj263_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj263_init = obj263_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj263_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addRectangle$build(_,_,_)
      this.methods["addRectangle$build(3)"] = func262;
      func262.methodName = "addRectangle$build(3)";
      func262.paramCounts = [0];
      func262.paramNames = [];
      func262.definitionLine = 241;
      func262.definitionModule = "graphix";
      var func308 = function(argcv) {    // method addPolyStar, line 282
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addPolyStar", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addPolyStar", "graphix", 282);
        var ouc_init = this.methods["addPolyStar$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addPolyStar
      this.methods["addPolyStar"] = func308;
      func308.methodName = "addPolyStar";
      func308.paramCounts = [0];
      func308.paramNames = [];
      func308.definitionLine = 282;
      func308.definitionModule = "graphix";
      var func309 = function(argcv, inheritingObject, aliases, exclusions) {    // method addPolyStar$build(_,_,_), line 282
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addPolyStar", 0, numArgs - 0);
        }
        var obj310_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_282");
          this.outer_graphix_282 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(283);    // reuse call
          var initFun311 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.sz = undefined;
          var reader312_sz = function() {  // reader method sz
              if (this.data.sz === undefined) raiseUninitializedVariable("sz");
              return this.data.sz;
          };
          reader312_sz.isVar = true;
          reader312_sz.confidential = true;
          this.methods["sz"] = reader312_sz;
          var writer313_sz = function(argcv, n) {   // writer method sz:=(_)
            this.data.sz = n;
            return GraceDone;
          };
          writer313_sz.confidential = true;
          this.methods["sz:=(1)"] = writer313_sz;
          this.data.sides = undefined;
          var reader314_sides = function() {  // reader method sides
              if (this.data.sides === undefined) raiseUninitializedVariable("sides");
              return this.data.sides;
          };
          reader314_sides.isVar = true;
          this.methods["sides"] = reader314_sides;
          var writer315_sides = function(argcv, n) {   // writer method sides:=(_)
            this.data.sides = n;
            return GraceDone;
          };
          this.methods["sides:=(1)"] = writer315_sides;
          this.data.pointSize = undefined;
          var reader316_pointSize = function() {  // reader method pointSize
              if (this.data.pointSize === undefined) raiseUninitializedVariable("pointSize");
              return this.data.pointSize;
          };
          reader316_pointSize.isVar = true;
          this.methods["pointSize"] = reader316_pointSize;
          var writer317_pointSize = function(argcv, n) {   // writer method pointSize:=(_)
            this.data.pointSize = n;
            return GraceDone;
          };
          this.methods["pointSize:=(1)"] = writer317_pointSize;
          this.data.angle = undefined;
          var reader318_angle = function() {  // reader method angle
              if (this.data.angle === undefined) raiseUninitializedVariable("angle");
              return this.data.angle;
          };
          reader318_angle.isVar = true;
          this.methods["angle"] = reader318_angle;
          var writer319_angle = function(argcv, n) {   // writer method angle:=(_)
            this.data.angle = n;
            return GraceDone;
          };
          this.methods["angle:=(1)"] = writer319_angle;
          var func320 = function(argcv) {    // method asString, line 293
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(294);    // compilenode string
            var string321 = new GraceString("aPolyStar(size=");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call322 = selfRequest(this, "size", [0]);
            var opresult323 = request(string321, "++(1)", [1], call322);
            var string324 = new GraceString(", sides=");
            var opresult325 = request(opresult323, "++(1)", [1], string324);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call326 = selfRequest(this, "sides", [0]);
            var opresult327 = request(opresult325, "++(1)", [1], call326);
            var string328 = new GraceString(")");
            var opresult329 = request(opresult327, "++(1)", [1], string328);
            return opresult329;
          };    // end of method asString
          this.methods["asString"] = func320;
          func320.methodName = "asString";
          func320.paramCounts = [0];
          func320.paramNames = [];
          func320.definitionLine = 293;
          func320.definitionModule = "graphix";
          var func330 = function(argcv, var_s) {    // method setSize(_), line 297
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(298);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call331 = selfRequest(this, "size:=(1)", [1], var_s);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func330;
          func330.methodName = "setSize(1)";
          func330.paramCounts = [1];
          func330.paramNames = ["s"];
          func330.definitionLine = 297;
          func330.definitionModule = "graphix";
          var func332 = function(argcv, var_s) {    // method size:=(_), line 302
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(303);    // compilenode matchcase
            var cases333 = [];
            setLineNumber(304);    // compilenode block
            var block334 = new GraceBlock(this, 304, 1);
            block334.paramTypes = [var_Number];
            var matches335 = function(var_scalar) {
              if (!Grace_isTrue(request(var_Number, "matches(1)", [1], var_scalar)))
                  return false;
              return true;
            };
            block334.guard = matches335;
            block334.real = function block334(var_scalar) {
              setLineNumber(304);    // compilenode call
              // call case 4: self request with 1 args and 0 typeArgs 
              var call336 = selfRequest(this, "sz:=(1)", [1], var_scalar);
              return call336;
            };
            let applyMeth334 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth334.methodName = "apply(1)";
            applyMeth334.paramCounts = [1];
            applyMeth334.paramNames = ["scalar"];
            applyMeth334.definitionLine = 304;
            applyMeth334.definitionModule = "graphix";
            block334.methods["apply(1)"] = applyMeth334;
            let matchesMeth334 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth334.methodName = "matches(1)";
            matchesMeth334.paramCounts = [1];
            matchesMeth334.paramNames = ["scalar"];
            matchesMeth334.definitionLine = 304;
            matchesMeth334.definitionModule = "graphix";
            block334.methods["matches(1)"] = matchesMeth334;
            cases333.push(block334);
            setLineNumber(305);    // compilenode block
            var block337 = new GraceBlock(this, 305, 1);
            // call case 2: outer request
            var call338 = selfRequest(var_prelude, "Point", [0]);
            block337.paramTypes = [call338];
            var matches339 = function(var_point) {
              // call case 2: outer request
              var call340 = selfRequest(var_prelude, "Point", [0]);
              if (!Grace_isTrue(request(call340, "matches(1)", [1], var_point)))
                  return false;
              return true;
            };
            block337.guard = matches339;
            block337.real = function block337(var_point) {
              setLineNumber(305);    // compilenode member
              // call case 6: other requests
              var call342 = request(var_point, "x", [0]);
              // call case 6: other requests
              var call343 = request(var_point, "y", [0]);
              var sum344 = request(call342, "+(1)", [1], call343);
              var quotient345 = request(sum344, "/(1)", [1], new GraceNum(2));
              // call case 4: self request with 1 args and 0 typeArgs 
              var call341 = selfRequest(this, "sz:=(1)", [1], quotient345);
              return call341;
            };
            let applyMeth337 = function apply_1 (argcv, ...args) {
                if (this.guard.apply(this.receiver, args))
                    return this.real.apply(this.receiver, args);
                badBlockArgs.apply(this, args);
            };
            applyMeth337.methodName = "apply(1)";
            applyMeth337.paramCounts = [1];
            applyMeth337.paramNames = ["point"];
            applyMeth337.definitionLine = 305;
            applyMeth337.definitionModule = "graphix";
            block337.methods["apply(1)"] = applyMeth337;
            let matchesMeth337 = function matches_1 (argcv, ...args) {
                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
            };
            matchesMeth337.methodName = "matches(1)";
            matchesMeth337.paramCounts = [1];
            matchesMeth337.paramNames = ["point"];
            matchesMeth337.definitionLine = 305;
            matchesMeth337.definitionModule = "graphix";
            block337.methods["matches(1)"] = matchesMeth337;
            cases333.push(block337);
            setLineNumber(306);    // compilenode block
            var block346 = new GraceBlock(this, 306, 0);
            block346.guard = jsTrue;
            block346.real = function block346() {
              setLineNumber(306);    // compilenode string
              var string348 = new GraceString("argument to polyStar.setSize should be a Number or a Point.");
              // call case 6: other requests
              // call case 2: outer request
              var call349 = selfRequest(var_prelude, "ProgrammingError", [0]);
              var call347 = request(call349, "raise(1)", [1], string348);
              return call347;
            };
            let applyMeth346 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth346.methodName = "apply";
            applyMeth346.paramCounts = [0];
            applyMeth346.paramNames = [];
            applyMeth346.definitionLine = 306;
            applyMeth346.definitionModule = "graphix";
            block346.methods["apply"] = applyMeth346;
            setLineNumber(303);    // compilematchcase
            var matchres333 = matchCase(var_s,cases333,block346);
            return matchres333;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func332;
          func332.methodName = "size:=(1)";
          func332.paramCounts = [1];
          func332.paramNames = ["s"];
          func332.definitionLine = 302;
          func332.definitionModule = "graphix";
          var func350 = function(argcv) {    // method size, line 309
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(309);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call351 = selfRequest(this, "sz", [0]);
            return call351;
          };    // end of method size
          this.methods["size"] = func350;
          func350.methodName = "size";
          func350.paramCounts = [0];
          func350.paramNames = [];
          func350.definitionLine = 309;
          func350.definitionModule = "graphix";
          var func352 = function(argcv, var_s) {    // method setSides(_), line 311
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSides(_)", 0, numArgs - 1);
            }
            setLineNumber(312);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call353 = selfRequest(this, "sides:=(1)", [1], var_s);
            return this;
          };    // end of method setSides(_)
          this.methods["setSides(1)"] = func352;
          func352.methodName = "setSides(1)";
          func352.paramCounts = [1];
          func352.paramNames = ["s"];
          func352.definitionLine = 311;
          func352.definitionModule = "graphix";
          var func354 = function(argcv, var_p) {    // method setPointSize(_), line 316
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setPointSize(_)", 0, numArgs - 1);
            }
            setLineNumber(317);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call355 = selfRequest(this, "pointSize:=(1)", [1], var_p);
            return this;
          };    // end of method setPointSize(_)
          this.methods["setPointSize(1)"] = func354;
          func354.methodName = "setPointSize(1)";
          func354.paramCounts = [1];
          func354.paramNames = ["p"];
          func354.definitionLine = 316;
          func354.definitionModule = "graphix";
          var func356 = function(argcv, var_a) {    // method setAngle(_), line 321
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setAngle(_)", 0, numArgs - 1);
            }
            setLineNumber(322);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call357 = selfRequest(this, "angle:=(1)", [1], var_a);
            return this;
          };    // end of method setAngle(_)
          this.methods["setAngle(1)"] = func356;
          func356.methodName = "setAngle(1)";
          func356.paramCounts = [1];
          func356.paramNames = ["a"];
          func356.definitionLine = 321;
          func356.definitionModule = "graphix";
          var func358 = function(argcv) {    // method shapeDraw, line 326
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(327);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call360 = selfRequest(this, "size", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call361 = selfRequest(this, "sides", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call362 = selfRequest(this, "pointSize", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call363 = selfRequest(this, "angle", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call364 = selfRequest(this, "jsShapeObject", [0]);
            var call359 = request(call364, "draw(4)", [4], call360, call361, call362, call363);
            return call359;
          };    // end of method shapeDraw
          func358.confidential = true;
          this.methods["shapeDraw"] = func358;
          func358.methodName = "shapeDraw";
          func358.paramCounts = [0];
          func358.paramNames = [];
          func358.definitionLine = 326;
          func358.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 282;
              m.definitionModule = "graphix";
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
          var obj310_init = function() {    // init of object on line 282
            initFun311.call(this);
            setLineNumber(285);    // compilenode num
            this.data.sz = new GraceNum(20);
            setLineNumber(286);    // compilenode num
            this.data.sides = new GraceNum(5);
            setLineNumber(287);    // compilenode num
            this.data.pointSize = new GraceNum(2);
            setLineNumber(289);    // compilenode call
            // call case 6: other requests
            setLineNumber(288);    // compilenode num
            var call365 = request(new GraceNum(90), "prefix-", [0]);
            this.data.angle = call365;
            setLineNumber(290);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call367 = request(var_gr, "polyStar", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call366 = selfRequest(this, "jsShapeObject:=(1)", [1], call367);
            setLineNumber(291);    // compilenode member
            // call case 2: outer request
            var call369 = selfRequest(this.outer_graphix_282, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call368 = selfRequest(this, "myStage:=(1)", [1], call369);
            setLineNumber(329);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call371 = selfRequest(this.outer_graphix_282, "shapes", [0]);
            var call370 = request(call371, "add(1)", [1], this);
          };
          return obj310_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj310_init = obj310_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj310_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addPolyStar$build(_,_,_)
      this.methods["addPolyStar$build(3)"] = func309;
      func309.methodName = "addPolyStar$build(3)";
      func309.paramCounts = [0];
      func309.paramNames = [];
      func309.definitionLine = 282;
      func309.definitionModule = "graphix";
      var func372 = function(argcv) {    // method addRoundRect, line 332
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addRoundRect", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addRoundRect", "graphix", 332);
        var ouc_init = this.methods["addRoundRect$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addRoundRect
      this.methods["addRoundRect"] = func372;
      func372.methodName = "addRoundRect";
      func372.paramCounts = [0];
      func372.paramNames = [];
      func372.definitionLine = 332;
      func372.definitionModule = "graphix";
      var func373 = function(argcv, inheritingObject, aliases, exclusions) {    // method addRoundRect$build(_,_,_), line 332
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addRoundRect", 0, numArgs - 0);
        }
        var obj374_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_332");
          this.outer_graphix_332 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(333);    // reuse call
          var initFun375 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.width = undefined;
          var reader376_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader376_width.isVar = true;
          this.methods["width"] = reader376_width;
          var writer377_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer377_width;
          this.data.height = undefined;
          var reader378_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader378_height.isVar = true;
          this.methods["height"] = reader378_height;
          var writer379_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer379_height;
          this.data.radius = undefined;
          var reader380_radius = function() {  // reader method radius
              if (this.data.radius === undefined) raiseUninitializedVariable("radius");
              return this.data.radius;
          };
          reader380_radius.isVar = true;
          this.methods["radius"] = reader380_radius;
          var writer381_radius = function(argcv, n) {   // writer method radius:=(_)
            this.data.radius = n;
            return GraceDone;
          };
          this.methods["radius:=(1)"] = writer381_radius;
          var func382 = function(argcv) {    // method asString, line 340
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(341);    // compilenode string
            var string383 = new GraceString("aRoundRect(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call384 = selfRequest(this, "width", [0]);
            var opresult385 = request(string383, "++(1)", [1], call384);
            var string386 = new GraceString("\u00d7");
            var opresult387 = request(opresult385, "++(1)", [1], string386);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call388 = selfRequest(this, "height", [0]);
            var opresult389 = request(opresult387, "++(1)", [1], call388);
            var string390 = new GraceString(")");
            var opresult391 = request(opresult389, "++(1)", [1], string390);
            return opresult391;
          };    // end of method asString
          this.methods["asString"] = func382;
          func382.methodName = "asString";
          func382.paramCounts = [0];
          func382.paramNames = [];
          func382.definitionLine = 340;
          func382.definitionModule = "graphix";
          var func392 = function(argcv, var_h) {    // method setHeight(_), line 344
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setHeight(_)", 0, numArgs - 1);
            }
            setLineNumber(345);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call393 = selfRequest(this, "height:=(1)", [1], var_h);
            return this;
          };    // end of method setHeight(_)
          this.methods["setHeight(1)"] = func392;
          func392.methodName = "setHeight(1)";
          func392.paramCounts = [1];
          func392.paramNames = ["h"];
          func392.definitionLine = 344;
          func392.definitionModule = "graphix";
          var func394 = function(argcv, var_w) {    // method setWidth(_), line 349
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setWidth(_)", 0, numArgs - 1);
            }
            setLineNumber(350);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call395 = selfRequest(this, "width:=(1)", [1], var_w);
            return this;
          };    // end of method setWidth(_)
          this.methods["setWidth(1)"] = func394;
          func394.methodName = "setWidth(1)";
          func394.paramCounts = [1];
          func394.paramNames = ["w"];
          func394.definitionLine = 349;
          func394.definitionModule = "graphix";
          var func396 = function(argcv) {    // method size, line 354
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(354);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call397 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call398 = selfRequest(this, "height", [0]);
            var opresult399 = request(call397, "@(1)", [1], call398);
            return opresult399;
          };    // end of method size
          this.methods["size"] = func396;
          func396.methodName = "size";
          func396.paramCounts = [0];
          func396.paramNames = [];
          func396.definitionLine = 354;
          func396.definitionModule = "graphix";
          var func400 = function(argcv, var_p) {    // method size:=(_), line 356
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(357);    // compilenode member
            // call case 6: other requests
            var call402 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call401 = selfRequest(this, "width:=(1)", [1], call402);
            setLineNumber(358);    // compilenode member
            // call case 6: other requests
            var call404 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call403 = selfRequest(this, "height:=(1)", [1], call404);
            return call403;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func400;
          func400.methodName = "size:=(1)";
          func400.paramCounts = [1];
          func400.paramNames = ["p"];
          func400.definitionLine = 356;
          func400.definitionModule = "graphix";
          var func405 = function(argcv, var_p) {    // method setSize(_), line 361
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(362);    // compilenode member
            // call case 6: other requests
            var call407 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call406 = selfRequest(this, "width:=(1)", [1], call407);
            setLineNumber(363);    // compilenode member
            // call case 6: other requests
            var call409 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call408 = selfRequest(this, "height:=(1)", [1], call409);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func405;
          func405.methodName = "setSize(1)";
          func405.paramCounts = [1];
          func405.paramNames = ["p"];
          func405.definitionLine = 361;
          func405.definitionModule = "graphix";
          var func410 = function(argcv, var_r) {    // method setRadius(_), line 367
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setRadius(_)", 0, numArgs - 1);
            }
            setLineNumber(368);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call411 = selfRequest(this, "radius:=(1)", [1], var_r);
            return this;
          };    // end of method setRadius(_)
          this.methods["setRadius(1)"] = func410;
          func410.methodName = "setRadius(1)";
          func410.paramCounts = [1];
          func410.paramNames = ["r"];
          func410.definitionLine = 367;
          func410.definitionModule = "graphix";
          var func412 = function(argcv) {    // method shapeDraw, line 372
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(373);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call414 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call415 = selfRequest(this, "height", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call416 = selfRequest(this, "radius", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call417 = selfRequest(this, "jsShapeObject", [0]);
            var call413 = request(call417, "draw(3)", [3], call414, call415, call416);
            return call413;
          };    // end of method shapeDraw
          func412.confidential = true;
          this.methods["shapeDraw"] = func412;
          func412.methodName = "shapeDraw";
          func412.paramCounts = [0];
          func412.paramNames = [];
          func412.definitionLine = 372;
          func412.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 332;
              m.definitionModule = "graphix";
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
          var obj374_init = function() {    // init of object on line 332
            initFun375.call(this);
            setLineNumber(334);    // compilenode num
            this.data.width = new GraceNum(15);
            setLineNumber(335);    // compilenode num
            this.data.height = new GraceNum(15);
            setLineNumber(336);    // compilenode num
            this.data.radius = new GraceNum(2);
            setLineNumber(337);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call419 = request(var_gr, "roundRect", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call418 = selfRequest(this, "jsShapeObject:=(1)", [1], call419);
            setLineNumber(338);    // compilenode member
            // call case 2: outer request
            var call421 = selfRequest(this.outer_graphix_332, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call420 = selfRequest(this, "myStage:=(1)", [1], call421);
            setLineNumber(375);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call423 = selfRequest(this.outer_graphix_332, "shapes", [0]);
            var call422 = request(call423, "add(1)", [1], this);
          };
          return obj374_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj374_init = obj374_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj374_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addRoundRect$build(_,_,_)
      this.methods["addRoundRect$build(3)"] = func373;
      func373.methodName = "addRoundRect$build(3)";
      func373.paramCounts = [0];
      func373.paramNames = [];
      func373.definitionLine = 332;
      func373.definitionModule = "graphix";
      var func424 = function(argcv) {    // method addEllipse, line 378
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addEllipse", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addEllipse", "graphix", 378);
        var ouc_init = this.methods["addEllipse$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addEllipse
      this.methods["addEllipse"] = func424;
      func424.methodName = "addEllipse";
      func424.paramCounts = [0];
      func424.paramNames = [];
      func424.definitionLine = 378;
      func424.definitionModule = "graphix";
      var func425 = function(argcv, inheritingObject, aliases, exclusions) {    // method addEllipse$build(_,_,_), line 378
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addEllipse", 0, numArgs - 0);
        }
        var obj426_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_378");
          this.outer_graphix_378 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(379);    // reuse call
          var initFun427 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.width = undefined;
          var reader428_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader428_width.isVar = true;
          this.methods["width"] = reader428_width;
          var writer429_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer429_width;
          this.data.height = undefined;
          var reader430_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader430_height.isVar = true;
          this.methods["height"] = reader430_height;
          var writer431_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer431_height;
          var func432 = function(argcv) {    // method asString, line 386
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(387);    // compilenode string
            var string433 = new GraceString("anEllipse(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call434 = selfRequest(this, "width", [0]);
            var opresult435 = request(string433, "++(1)", [1], call434);
            var string436 = new GraceString("\u00d7");
            var opresult437 = request(opresult435, "++(1)", [1], string436);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call438 = selfRequest(this, "height", [0]);
            var opresult439 = request(opresult437, "++(1)", [1], call438);
            var string440 = new GraceString(")");
            var opresult441 = request(opresult439, "++(1)", [1], string440);
            return opresult441;
          };    // end of method asString
          this.methods["asString"] = func432;
          func432.methodName = "asString";
          func432.paramCounts = [0];
          func432.paramNames = [];
          func432.definitionLine = 386;
          func432.definitionModule = "graphix";
          var func442 = function(argcv, var_w) {    // method setWidth(_), line 390
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setWidth(_)", 0, numArgs - 1);
            }
            setLineNumber(391);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call443 = selfRequest(this, "width:=(1)", [1], var_w);
            return this;
          };    // end of method setWidth(_)
          this.methods["setWidth(1)"] = func442;
          func442.methodName = "setWidth(1)";
          func442.paramCounts = [1];
          func442.paramNames = ["w"];
          func442.definitionLine = 390;
          func442.definitionModule = "graphix";
          var func444 = function(argcv, var_h) {    // method setHeight(_), line 395
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setHeight(_)", 0, numArgs - 1);
            }
            setLineNumber(396);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call445 = selfRequest(this, "height:=(1)", [1], var_h);
            return this;
          };    // end of method setHeight(_)
          this.methods["setHeight(1)"] = func444;
          func444.methodName = "setHeight(1)";
          func444.paramCounts = [1];
          func444.paramNames = ["h"];
          func444.definitionLine = 395;
          func444.definitionModule = "graphix";
          var func446 = function(argcv) {    // method size, line 400
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(400);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call447 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call448 = selfRequest(this, "height", [0]);
            var opresult449 = request(call447, "@(1)", [1], call448);
            return opresult449;
          };    // end of method size
          this.methods["size"] = func446;
          func446.methodName = "size";
          func446.paramCounts = [0];
          func446.paramNames = [];
          func446.definitionLine = 400;
          func446.definitionModule = "graphix";
          var func450 = function(argcv, var_p) {    // method size:=(_), line 402
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(403);    // compilenode member
            // call case 6: other requests
            var call452 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call451 = selfRequest(this, "width:=(1)", [1], call452);
            setLineNumber(404);    // compilenode member
            // call case 6: other requests
            var call454 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call453 = selfRequest(this, "height:=(1)", [1], call454);
            return call453;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func450;
          func450.methodName = "size:=(1)";
          func450.paramCounts = [1];
          func450.paramNames = ["p"];
          func450.definitionLine = 402;
          func450.definitionModule = "graphix";
          var func455 = function(argcv, var_p) {    // method setSize(_), line 407
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(408);    // compilenode member
            // call case 6: other requests
            var call457 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call456 = selfRequest(this, "width:=(1)", [1], call457);
            setLineNumber(409);    // compilenode member
            // call case 6: other requests
            var call459 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call458 = selfRequest(this, "height:=(1)", [1], call459);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func455;
          func455.methodName = "setSize(1)";
          func455.paramCounts = [1];
          func455.paramNames = ["p"];
          func455.definitionLine = 407;
          func455.definitionModule = "graphix";
          var func460 = function(argcv) {    // method shapeDraw, line 413
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(414);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call462 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call463 = selfRequest(this, "height", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call464 = selfRequest(this, "jsShapeObject", [0]);
            var call461 = request(call464, "draw(2)", [2], call462, call463);
            return call461;
          };    // end of method shapeDraw
          func460.confidential = true;
          this.methods["shapeDraw"] = func460;
          func460.methodName = "shapeDraw";
          func460.paramCounts = [0];
          func460.paramNames = [];
          func460.definitionLine = 413;
          func460.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 378;
              m.definitionModule = "graphix";
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
          var obj426_init = function() {    // init of object on line 378
            initFun427.call(this);
            setLineNumber(380);    // compilenode num
            this.data.width = new GraceNum(15);
            setLineNumber(381);    // compilenode num
            this.data.height = new GraceNum(15);
            setLineNumber(383);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call466 = request(var_gr, "ellipse", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call465 = selfRequest(this, "jsShapeObject:=(1)", [1], call466);
            setLineNumber(384);    // compilenode member
            // call case 2: outer request
            var call468 = selfRequest(this.outer_graphix_378, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call467 = selfRequest(this, "myStage:=(1)", [1], call468);
            setLineNumber(416);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call470 = selfRequest(this.outer_graphix_378, "shapes", [0]);
            var call469 = request(call470, "add(1)", [1], this);
          };
          return obj426_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj426_init = obj426_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj426_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addEllipse$build(_,_,_)
      this.methods["addEllipse$build(3)"] = func425;
      func425.methodName = "addEllipse$build(3)";
      func425.paramCounts = [0];
      func425.paramNames = [];
      func425.definitionLine = 378;
      func425.definitionModule = "graphix";
      var func471 = function(argcv) {    // method addArc, line 419
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addArc", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addArc", "graphix", 419);
        var ouc_init = this.methods["addArc$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addArc
      this.methods["addArc"] = func471;
      func471.methodName = "addArc";
      func471.paramCounts = [0];
      func471.paramNames = [];
      func471.definitionLine = 419;
      func471.definitionModule = "graphix";
      var func472 = function(argcv, inheritingObject, aliases, exclusions) {    // method addArc$build(_,_,_), line 419
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addArc", 0, numArgs - 0);
        }
        var obj473_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_419");
          this.outer_graphix_419 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(420);    // reuse call
          var initFun474 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.radius = undefined;
          var reader475_radius = function() {  // reader method radius
              if (this.data.radius === undefined) raiseUninitializedVariable("radius");
              return this.data.radius;
          };
          reader475_radius.isVar = true;
          this.methods["radius"] = reader475_radius;
          var writer476_radius = function(argcv, n) {   // writer method radius:=(_)
            this.data.radius = n;
            return GraceDone;
          };
          this.methods["radius:=(1)"] = writer476_radius;
          this.data.startAngle = undefined;
          var reader477_startAngle = function() {  // reader method startAngle
              if (this.data.startAngle === undefined) raiseUninitializedVariable("startAngle");
              return this.data.startAngle;
          };
          reader477_startAngle.isVar = true;
          this.methods["startAngle"] = reader477_startAngle;
          var writer478_startAngle = function(argcv, n) {   // writer method startAngle:=(_)
            this.data.startAngle = n;
            return GraceDone;
          };
          this.methods["startAngle:=(1)"] = writer478_startAngle;
          this.data.endAngle = undefined;
          var reader479_endAngle = function() {  // reader method endAngle
              if (this.data.endAngle === undefined) raiseUninitializedVariable("endAngle");
              return this.data.endAngle;
          };
          reader479_endAngle.isVar = true;
          this.methods["endAngle"] = reader479_endAngle;
          var writer480_endAngle = function(argcv, n) {   // writer method endAngle:=(_)
            this.data.endAngle = n;
            return GraceDone;
          };
          this.methods["endAngle:=(1)"] = writer480_endAngle;
          this.data.anticlockwise = undefined;
          var reader481_anticlockwise = function() {  // reader method anticlockwise
              if (this.data.anticlockwise === undefined) raiseUninitializedVariable("anticlockwise");
              return this.data.anticlockwise;
          };
          reader481_anticlockwise.isVar = true;
          this.methods["anticlockwise"] = reader481_anticlockwise;
          var writer482_anticlockwise = function(argcv, n) {   // writer method anticlockwise:=(_)
            this.data.anticlockwise = n;
            return GraceDone;
          };
          this.methods["anticlockwise:=(1)"] = writer482_anticlockwise;
          var func483 = function(argcv) {    // method asString, line 429
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            var if484 = GraceDone;
            setLineNumber(430);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call485 = selfRequest(this, "anticlockwise", [0]);
            if (Grace_isTrue(call485)) {
              var string486 = new GraceString("\u293f");
              if484 = string486;
            } else {
              var string487 = new GraceString("\u293e");
              if484 = string487;
            }
            var var_clock = if484;
            setLineNumber(431);    // compilenode string
            var string488 = new GraceString("anArc(");
            var opresult489 = request(string488, "++(1)", [1], var_clock);
            var string490 = new GraceString(" radius=");
            var opresult491 = request(opresult489, "++(1)", [1], string490);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call492 = selfRequest(this, "radius", [0]);
            var opresult493 = request(opresult491, "++(1)", [1], call492);
            var string494 = new GraceString(", start=");
            var opresult495 = request(opresult493, "++(1)", [1], string494);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call496 = selfRequest(this, "startAngle", [0]);
            var opresult497 = request(opresult495, "++(1)", [1], call496);
            var string498 = new GraceString(", end=");
            var opresult499 = request(opresult497, "++(1)", [1], string498);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call500 = selfRequest(this, "endAngle", [0]);
            var opresult501 = request(opresult499, "++(1)", [1], call500);
            var string502 = new GraceString(")");
            var opresult503 = request(opresult501, "++(1)", [1], string502);
            return opresult503;
          };    // end of method asString
          this.methods["asString"] = func483;
          func483.methodName = "asString";
          func483.paramCounts = [0];
          func483.paramNames = [];
          func483.definitionLine = 429;
          func483.definitionModule = "graphix";
          var func504 = function(argcv, var_r) {    // method setRadius(_), line 434
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setRadius(_)", 0, numArgs - 1);
            }
            setLineNumber(435);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call505 = selfRequest(this, "radius:=(1)", [1], var_r);
            return this;
          };    // end of method setRadius(_)
          this.methods["setRadius(1)"] = func504;
          func504.methodName = "setRadius(1)";
          func504.paramCounts = [1];
          func504.paramNames = ["r"];
          func504.definitionLine = 434;
          func504.definitionModule = "graphix";
          var func506 = function(argcv, var_a) {    // method setStartAngle(_), line 438
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setStartAngle(_)", 0, numArgs - 1);
            }
            setLineNumber(439);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call507 = selfRequest(this, "startAngle:=(1)", [1], var_a);
            return this;
          };    // end of method setStartAngle(_)
          this.methods["setStartAngle(1)"] = func506;
          func506.methodName = "setStartAngle(1)";
          func506.paramCounts = [1];
          func506.paramNames = ["a"];
          func506.definitionLine = 438;
          func506.definitionModule = "graphix";
          var func508 = function(argcv, var_a) {    // method setEndAngle(_), line 442
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setEndAngle(_)", 0, numArgs - 1);
            }
            setLineNumber(443);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call509 = selfRequest(this, "endAngle:=(1)", [1], var_a);
            return this;
          };    // end of method setEndAngle(_)
          this.methods["setEndAngle(1)"] = func508;
          func508.methodName = "setEndAngle(1)";
          func508.paramCounts = [1];
          func508.paramNames = ["a"];
          func508.definitionLine = 442;
          func508.definitionModule = "graphix";
          var func510 = function(argcv, var_a) {    // method setAnticlockwise(_), line 447
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setAnticlockwise(_)", 0, numArgs - 1);
            }
            setLineNumber(448);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call511 = selfRequest(this, "anticlockwise:=(1)", [1], var_a);
            return this;
          };    // end of method setAnticlockwise(_)
          this.methods["setAnticlockwise(1)"] = func510;
          func510.methodName = "setAnticlockwise(1)";
          func510.paramCounts = [1];
          func510.paramNames = ["a"];
          func510.definitionLine = 447;
          func510.definitionModule = "graphix";
          var func512 = function(argcv) {    // method shapeDraw, line 452
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(453);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call514 = selfRequest(this, "radius", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call515 = selfRequest(this, "startAngle", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call516 = selfRequest(this, "endAngle", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call517 = selfRequest(this, "anticlockwise", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call518 = selfRequest(this, "jsShapeObject", [0]);
            var call513 = request(call518, "draw(4)", [4], call514, call515, call516, call517);
            return call513;
          };    // end of method shapeDraw
          func512.confidential = true;
          this.methods["shapeDraw"] = func512;
          func512.methodName = "shapeDraw";
          func512.paramCounts = [0];
          func512.paramNames = [];
          func512.definitionLine = 452;
          func512.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 419;
              m.definitionModule = "graphix";
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
          var obj473_init = function() {    // init of object on line 419
            initFun474.call(this);
            setLineNumber(421);    // compilenode num
            this.data.radius = new GraceNum(15);
            setLineNumber(422);    // compilenode num
            this.data.startAngle = new GraceNum(0);
            setLineNumber(423);    // compilenode num
            this.data.endAngle = new GraceNum(180);
            this.data.anticlockwise = GraceFalse;
            setLineNumber(426);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call520 = request(var_gr, "arc", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call519 = selfRequest(this, "jsShapeObject:=(1)", [1], call520);
            setLineNumber(427);    // compilenode member
            // call case 2: outer request
            var call522 = selfRequest(this.outer_graphix_419, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call521 = selfRequest(this, "myStage:=(1)", [1], call522);
            setLineNumber(455);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call524 = selfRequest(this.outer_graphix_419, "shapes", [0]);
            var call523 = request(call524, "add(1)", [1], this);
          };
          return obj473_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj473_init = obj473_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj473_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addArc$build(_,_,_)
      this.methods["addArc$build(3)"] = func472;
      func472.methodName = "addArc$build(3)";
      func472.paramCounts = [0];
      func472.paramNames = [];
      func472.definitionLine = 419;
      func472.definitionModule = "graphix";
      var func525 = function(argcv) {    // method addText, line 458
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addText", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addText", "graphix", 458);
        var ouc_init = this.methods["addText$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addText
      this.methods["addText"] = func525;
      func525.methodName = "addText";
      func525.paramCounts = [0];
      func525.paramNames = [];
      func525.definitionLine = 458;
      func525.definitionModule = "graphix";
      var func526 = function(argcv, inheritingObject, aliases, exclusions) {    // method addText$build(_,_,_), line 458
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addText", 0, numArgs - 0);
        }
        var obj527_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_458");
          this.outer_graphix_458 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.location = undefined;
          var reader528_location = function() {  // reader method location
              if (this.data.location === undefined) raiseUninitializedVariable("location");
              return this.data.location;
          };
          reader528_location.isVar = true;
          this.methods["location"] = reader528_location;
          var writer529_location = function(argcv, n) {   // writer method location:=(_)
            this.data.location = n;
            return GraceDone;
          };
          this.methods["location:=(1)"] = writer529_location;
          this.data.color = undefined;
          var reader530_color = function() {  // reader method color
              if (this.data.color === undefined) raiseUninitializedVariable("color");
              return this.data.color;
          };
          reader530_color.isVar = true;
          this.methods["color"] = reader530_color;
          var writer531_color = function(argcv, n) {   // writer method color:=(_)
            this.data.color = n;
            return GraceDone;
          };
          this.methods["color:=(1)"] = writer531_color;
          this.data.jsText = undefined;
          var reader532_jsText = function() {  // reader method jsText
              if (this.data.jsText === undefined) raiseUninitializedVariable("jsText");
              return this.data.jsText;
          };
          reader532_jsText.isVar = true;
          this.methods["jsText"] = reader532_jsText;
          var writer533_jsText = function(argcv, n) {   // writer method jsText:=(_)
            this.data.jsText = n;
            return GraceDone;
          };
          this.methods["jsText:=(1)"] = writer533_jsText;
          this.data.content = undefined;
          var reader534_content = function() {  // reader method content
              if (this.data.content === undefined) raiseUninitializedVariable("content");
              return this.data.content;
          };
          reader534_content.isVar = true;
          this.methods["content"] = reader534_content;
          var writer535_content = function(argcv, n) {   // writer method content:=(_)
            this.data.content = n;
            return GraceDone;
          };
          this.methods["content:=(1)"] = writer535_content;
          this.data.font = undefined;
          var reader536_font = function() {  // reader method font
              if (this.data.font === undefined) raiseUninitializedVariable("font");
              return this.data.font;
          };
          reader536_font.isVar = true;
          this.methods["font"] = reader536_font;
          var writer537_font = function(argcv, n) {   // writer method font:=(_)
            this.data.font = n;
            return GraceDone;
          };
          this.methods["font:=(1)"] = writer537_font;
          var func538 = function(argcv) {    // method asString, line 465
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(466);    // compilenode string
            var string539 = new GraceString("aText(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call540 = selfRequest(this, "content", [0]);
            var opresult541 = request(string539, "++(1)", [1], call540);
            var string542 = new GraceString(")");
            var opresult543 = request(opresult541, "++(1)", [1], string542);
            return opresult543;
          };    // end of method asString
          this.methods["asString"] = func538;
          func538.methodName = "asString";
          func538.paramCounts = [0];
          func538.paramNames = [];
          func538.definitionLine = 465;
          func538.definitionModule = "graphix";
          var func544 = function(argcv, var_l) {    // method at(_), line 468
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("at(_)", 0, numArgs - 1);
            }
            setLineNumber(469);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call545 = selfRequest(this, "location:=(1)", [1], var_l);
            return this;
          };    // end of method at(_)
          this.methods["at(1)"] = func544;
          func544.methodName = "at(1)";
          func544.paramCounts = [1];
          func544.paramNames = ["l"];
          func544.definitionLine = 468;
          func544.definitionModule = "graphix";
          var func546 = function(argcv, var_c) {    // method colored(_), line 472
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("colored(_)", 0, numArgs - 1);
            }
            setLineNumber(473);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call547 = selfRequest(this, "color:=(1)", [1], var_c);
            return this;
          };    // end of method colored(_)
          this.methods["colored(1)"] = func546;
          func546.methodName = "colored(1)";
          func546.paramCounts = [1];
          func546.paramNames = ["c"];
          func546.definitionLine = 472;
          func546.definitionModule = "graphix";
          var func548 = function(argcv, var_c) {    // method setContent(_), line 476
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setContent(_)", 0, numArgs - 1);
            }
            setLineNumber(477);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call549 = selfRequest(this, "content:=(1)", [1], var_c);
            return this;
          };    // end of method setContent(_)
          this.methods["setContent(1)"] = func548;
          func548.methodName = "setContent(1)";
          func548.paramCounts = [1];
          func548.paramNames = ["c"];
          func548.definitionLine = 476;
          func548.definitionModule = "graphix";
          var func550 = function(argcv, var_f) {    // method setFont(_), line 480
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setFont(_)", 0, numArgs - 1);
            }
            setLineNumber(481);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call551 = selfRequest(this, "font:=(1)", [1], var_f);
            return this;
          };    // end of method setFont(_)
          this.methods["setFont(1)"] = func550;
          func550.methodName = "setFont(1)";
          func550.paramCounts = [1];
          func550.paramNames = ["f"];
          func550.definitionLine = 480;
          func550.definitionModule = "graphix";
          var func552 = function(argcv) {    // method height, line 485
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("height", 0, numArgs - 0);
            }
            setLineNumber(486);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call554 = selfRequest(this, "jsText", [0]);
            var call553 = request(call554, "height", [0]);
            return call553;
          };    // end of method height
          this.methods["height"] = func552;
          func552.methodName = "height";
          func552.paramCounts = [0];
          func552.paramNames = [];
          func552.definitionLine = 485;
          func552.definitionModule = "graphix";
          var func555 = function(argcv) {    // method width, line 489
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("width", 0, numArgs - 0);
            }
            setLineNumber(490);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call557 = selfRequest(this, "jsText", [0]);
            var call556 = request(call557, "width", [0]);
            return call556;
          };    // end of method width
          this.methods["width"] = func555;
          func555.methodName = "width";
          func555.paramCounts = [0];
          func555.paramNames = [];
          func555.definitionLine = 489;
          func555.definitionModule = "graphix";
          var func558 = function(argcv) {    // method draw, line 493
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("draw", 0, numArgs - 0);
            }
            var if559 = GraceDone;
            setLineNumber(494);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call560 = selfRequest(this, "jsText", [0]);
            var opresult561 = request(new GraceNum(0), "\u2260(1)", [1], call560);
            if (Grace_isTrue(opresult561)) {
              setLineNumber(495);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call563 = selfRequest(this, "jsText", [0]);
              // call case 6: other requests
              // call case 2: outer request
              var call564 = selfRequest(this.outer_graphix_458, "stage", [0]);
              var call562 = request(call564, "removeChild(1)", [1], call563);
              if559 = call562;
            }
            setLineNumber(497);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call566 = request(var_gr, "text", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call565 = selfRequest(this, "jsText:=(1)", [1], call566);
            setLineNumber(498);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call568 = selfRequest(this, "location", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call569 = selfRequest(this, "jsText", [0]);
            var call567 = request(call569, "setLocation(1)", [1], call568);
            setLineNumber(499);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call571 = selfRequest(this, "content", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call572 = selfRequest(this, "font", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call573 = selfRequest(this, "color", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call574 = selfRequest(this, "jsText", [0]);
            var call570 = request(call574, "draw(3)", [3], call571, call572, call573);
            setLineNumber(500);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call576 = selfRequest(this, "jsText", [0]);
            // call case 6: other requests
            // call case 2: outer request
            var call577 = selfRequest(this.outer_graphix_458, "stage", [0]);
            var call575 = request(call577, "add(1)", [1], call576);
            setLineNumber(501);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call579 = selfRequest(this.outer_graphix_458, "stage", [0]);
            var call578 = request(call579, "update", [0]);
            return this;
          };    // end of method draw
          this.methods["draw"] = func558;
          func558.methodName = "draw";
          func558.paramCounts = [0];
          func558.paramNames = [];
          func558.definitionLine = 493;
          func558.definitionModule = "graphix";
          var func580 = function(argcv) {    // method clear, line 505
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("clear", 0, numArgs - 0);
            }
            setLineNumber(506);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call582 = selfRequest(this, "jsText", [0]);
            // call case 6: other requests
            // call case 2: outer request
            var call583 = selfRequest(this.outer_graphix_458, "stage", [0]);
            var call581 = request(call583, "removeChild(1)", [1], call582);
            setLineNumber(507);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call585 = selfRequest(this.outer_graphix_458, "stage", [0]);
            var call584 = request(call585, "update", [0]);
            return call584;
          };    // end of method clear
          this.methods["clear"] = func580;
          func580.methodName = "clear";
          func580.paramCounts = [0];
          func580.paramNames = [];
          func580.definitionLine = 505;
          func580.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 458;
              m.definitionModule = "graphix";
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
          var obj527_init = function() {    // init of object on line 458
            setLineNumber(459);    // compilenode num
            var opresult586 = request(new GraceNum(0), "@(1)", [1], new GraceNum(0));
            this.data.location = opresult586;
            setLineNumber(460);    // compilenode string
            var string587 = new GraceString("black");
            this.data.color = string587;
            setLineNumber(461);    // compilenode num
            this.data.jsText = new GraceNum(0);
            setLineNumber(462);    // compilenode string
            var string588 = new GraceString("Did you forget to set text.content?");
            this.data.content = string588;
            setLineNumber(463);    // compilenode string
            var string589 = new GraceString("12px Arial");
            this.data.font = string589;
            setLineNumber(509);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call591 = selfRequest(this.outer_graphix_458, "shapes", [0]);
            var call590 = request(call591, "add(1)", [1], this);
          };
          return obj527_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj527_init = obj527_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj527_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addText$build(_,_,_)
      this.methods["addText$build(3)"] = func526;
      func526.methodName = "addText$build(3)";
      func526.paramCounts = [0];
      func526.paramNames = [];
      func526.definitionLine = 458;
      func526.definitionModule = "graphix";
      var func592 = function(argcv) {    // method addLine, line 512
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addLine", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addLine", "graphix", 512);
        var ouc_init = this.methods["addLine$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addLine
      this.methods["addLine"] = func592;
      func592.methodName = "addLine";
      func592.paramCounts = [0];
      func592.paramNames = [];
      func592.definitionLine = 512;
      func592.definitionModule = "graphix";
      var func593 = function(argcv, inheritingObject, aliases, exclusions) {    // method addLine$build(_,_,_), line 512
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addLine", 0, numArgs - 0);
        }
        var obj594_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_512");
          this.outer_graphix_512 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(513);    // reuse call
          var initFun595 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.start = undefined;
          var reader596_start = function() {  // reader method start
              if (this.data.start === undefined) raiseUninitializedVariable("start");
              return this.data.start;
          };
          reader596_start.isVar = true;
          this.methods["start"] = reader596_start;
          var writer597_start = function(argcv, n) {   // writer method start:=(_)
            this.data.start = n;
            return GraceDone;
          };
          this.methods["start:=(1)"] = writer597_start;
          this.data.end = undefined;
          var reader598_end = function() {  // reader method end
              if (this.data.end === undefined) raiseUninitializedVariable("end");
              return this.data.end;
          };
          reader598_end.isVar = true;
          this.methods["end"] = reader598_end;
          var writer599_end = function(argcv, n) {   // writer method end:=(_)
            this.data.end = n;
            return GraceDone;
          };
          this.methods["end:=(1)"] = writer599_end;
          var func600 = function(argcv) {    // method asString, line 520
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(521);    // compilenode string
            var string601 = new GraceString("aLine(start=");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call602 = selfRequest(this, "start", [0]);
            var opresult603 = request(string601, "++(1)", [1], call602);
            var string604 = new GraceString(", end=");
            var opresult605 = request(opresult603, "++(1)", [1], string604);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call606 = selfRequest(this, "end", [0]);
            var opresult607 = request(opresult605, "++(1)", [1], call606);
            var string608 = new GraceString(")");
            var opresult609 = request(opresult607, "++(1)", [1], string608);
            return opresult609;
          };    // end of method asString
          this.methods["asString"] = func600;
          func600.methodName = "asString";
          func600.paramCounts = [0];
          func600.paramNames = [];
          func600.definitionLine = 520;
          func600.definitionModule = "graphix";
          var func610 = function(argcv, var_s) {    // method setStart(_), line 523
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setStart(_)", 0, numArgs - 1);
            }
            setLineNumber(524);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call611 = selfRequest(this, "start:=(1)", [1], var_s);
            return this;
          };    // end of method setStart(_)
          this.methods["setStart(1)"] = func610;
          func610.methodName = "setStart(1)";
          func610.paramCounts = [1];
          func610.paramNames = ["s"];
          func610.definitionLine = 523;
          func610.definitionModule = "graphix";
          var func612 = function(argcv, var_e) {    // method setEnd(_), line 527
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setEnd(_)", 0, numArgs - 1);
            }
            setLineNumber(528);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call613 = selfRequest(this, "end:=(1)", [1], var_e);
            return this;
          };    // end of method setEnd(_)
          this.methods["setEnd(1)"] = func612;
          func612.methodName = "setEnd(1)";
          func612.paramCounts = [1];
          func612.paramNames = ["e"];
          func612.definitionLine = 527;
          func612.definitionModule = "graphix";
          var func614 = function(argcv) {    // method shapeDraw, line 531
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(532);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call616 = selfRequest(this, "start", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call617 = selfRequest(this, "end", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call618 = selfRequest(this, "jsShapeObject", [0]);
            var call615 = request(call618, "draw(2)", [2], call616, call617);
            return call615;
          };    // end of method shapeDraw
          func614.confidential = true;
          this.methods["shapeDraw"] = func614;
          func614.methodName = "shapeDraw";
          func614.paramCounts = [0];
          func614.paramNames = [];
          func614.definitionLine = 531;
          func614.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 512;
              m.definitionModule = "graphix";
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
          var obj594_init = function() {    // init of object on line 512
            initFun595.call(this);
            setLineNumber(514);    // compilenode num
            var opresult619 = request(new GraceNum(0), "@(1)", [1], new GraceNum(0));
            this.data.start = opresult619;
            setLineNumber(515);    // compilenode num
            var opresult620 = request(new GraceNum(50), "@(1)", [1], new GraceNum(50));
            this.data.end = opresult620;
            setLineNumber(517);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call622 = request(var_gr, "line", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call621 = selfRequest(this, "jsShapeObject:=(1)", [1], call622);
            setLineNumber(518);    // compilenode member
            // call case 2: outer request
            var call624 = selfRequest(this.outer_graphix_512, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call623 = selfRequest(this, "myStage:=(1)", [1], call624);
            setLineNumber(534);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call626 = selfRequest(this.outer_graphix_512, "shapes", [0]);
            var call625 = request(call626, "add(1)", [1], this);
          };
          return obj594_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj594_init = obj594_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj594_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addLine$build(_,_,_)
      this.methods["addLine$build(3)"] = func593;
      func593.methodName = "addLine$build(3)";
      func593.paramCounts = [0];
      func593.paramNames = [];
      func593.definitionLine = 512;
      func593.definitionModule = "graphix";
      var func627 = function(argcv) {    // method addCustomShape, line 538
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addCustomShape", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addCustomShape", "graphix", 538);
        var ouc_init = this.methods["addCustomShape$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addCustomShape
      this.methods["addCustomShape"] = func627;
      func627.methodName = "addCustomShape";
      func627.paramCounts = [0];
      func627.paramNames = [];
      func627.definitionLine = 538;
      func627.definitionModule = "graphix";
      var func628 = function(argcv, inheritingObject, aliases, exclusions) {    // method addCustomShape$build(_,_,_), line 538
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addCustomShape", 0, numArgs - 0);
        }
        var obj629_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_538");
          this.outer_graphix_538 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(539);    // reuse call
          var initFun630 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          var func631 = function(argcv) {    // method asString, line 543
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(544);    // compilenode string
            var string632 = new GraceString("aCustomShape(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call633 = selfRequest(this, "width", [0]);
            var opresult634 = request(string632, "++(1)", [1], call633);
            var string635 = new GraceString("\u00d7");
            var opresult636 = request(opresult634, "++(1)", [1], string635);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call637 = selfRequest(this, "height", [0]);
            var opresult638 = request(opresult636, "++(1)", [1], call637);
            var string639 = new GraceString(")");
            var opresult640 = request(opresult638, "++(1)", [1], string639);
            return opresult640;
          };    // end of method asString
          this.methods["asString"] = func631;
          func631.methodName = "asString";
          func631.paramCounts = [0];
          func631.paramNames = [];
          func631.definitionLine = 543;
          func631.definitionModule = "graphix";
          this.data.width = undefined;
          var reader641_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader641_width.isVar = true;
          this.methods["width"] = reader641_width;
          var writer642_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer642_width;
          this.data.height = undefined;
          var reader643_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader643_height.isVar = true;
          this.methods["height"] = reader643_height;
          var writer644_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer644_height;
          var func645 = function(argcv) {    // method shapeDraw, line 549
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("shapeDraw", 0, numArgs - 0);
            }
            setLineNumber(550);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call647 = selfRequest(this, "color", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call648 = selfRequest(this, "color", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call649 = selfRequest(this, "jsShapeObject", [0]);
            var call646 = request(call649, "draw(2)", [2], call647, call648);
            return call646;
          };    // end of method shapeDraw
          func645.confidential = true;
          this.methods["shapeDraw"] = func645;
          func645.methodName = "shapeDraw";
          func645.paramCounts = [0];
          func645.paramNames = [];
          func645.definitionLine = 549;
          func645.definitionModule = "graphix";
          var func650 = function(argcv, var_p) {    // method addPoint(_), line 553
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("addPoint(_)", 0, numArgs - 1);
            }
            setLineNumber(554);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call652 = selfRequest(this, "jsShapeObject", [0]);
            var call651 = request(call652, "addPoint(1)", [1], var_p);
            return this;
          };    // end of method addPoint(_)
          this.methods["addPoint(1)"] = func650;
          func650.methodName = "addPoint(1)";
          func650.paramCounts = [1];
          func650.paramNames = ["p"];
          func650.definitionLine = 553;
          func650.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 538;
              m.definitionModule = "graphix";
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
          var obj629_init = function() {    // init of object on line 538
            initFun630.call(this);
            setLineNumber(540);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call654 = request(var_gr, "customShape", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call653 = selfRequest(this, "jsShapeObject:=(1)", [1], call654);
            setLineNumber(541);    // compilenode member
            // call case 2: outer request
            var call656 = selfRequest(this.outer_graphix_538, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call655 = selfRequest(this, "myStage:=(1)", [1], call656);
            setLineNumber(546);    // compilenode num
            this.data.width = new GraceNum(10);
            setLineNumber(547);    // compilenode num
            this.data.height = new GraceNum(10);
            setLineNumber(557);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call658 = selfRequest(this.outer_graphix_538, "shapes", [0]);
            var call657 = request(call658, "add(1)", [1], this);
          };
          return obj629_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj629_init = obj629_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj629_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addCustomShape$build(_,_,_)
      this.methods["addCustomShape$build(3)"] = func628;
      func628.methodName = "addCustomShape$build(3)";
      func628.paramCounts = [0];
      func628.paramNames = [];
      func628.definitionLine = 538;
      func628.definitionModule = "graphix";
      var func659 = function(argcv) {    // method addButton, line 560
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addButton", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addButton", "graphix", 560);
        var ouc_init = this.methods["addButton$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addButton
      this.methods["addButton"] = func659;
      func659.methodName = "addButton";
      func659.paramCounts = [0];
      func659.paramNames = [];
      func659.definitionLine = 560;
      func659.definitionModule = "graphix";
      var func660 = function(argcv, inheritingObject, aliases, exclusions) {    // method addButton$build(_,_,_), line 560
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addButton", 0, numArgs - 0);
        }
        var obj661_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_560");
          this.outer_graphix_560 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          setLineNumber(561);    // reuse call
          var initFun662 = selfRequest(importedModules["graphix"], "shape$build(3)", [null], this, [], []);  // compileReuseCall
          this.data.width = undefined;
          var reader663_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader663_width.isVar = true;
          this.methods["width"] = reader663_width;
          var writer664_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer664_width;
          this.data.height = undefined;
          var reader665_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader665_height.isVar = true;
          this.methods["height"] = reader665_height;
          var writer666_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer666_height;
          this.data.buttonShape = undefined;
          var reader667_buttonShape = function() {  // reader method buttonShape
              if (this.data.buttonShape === undefined) raiseUninitializedVariable("buttonShape");
              return this.data.buttonShape;
          };
          reader667_buttonShape.isVar = true;
          this.methods["buttonShape"] = reader667_buttonShape;
          var writer668_buttonShape = function(argcv, n) {   // writer method buttonShape:=(_)
            this.data.buttonShape = n;
            return GraceDone;
          };
          this.methods["buttonShape:=(1)"] = writer668_buttonShape;
          this.data.buttonText = undefined;
          var reader669_buttonText = function() {  // reader method buttonText
              if (this.data.buttonText === undefined) raiseUninitializedVariable("buttonText");
              return this.data.buttonText;
          };
          reader669_buttonText.isVar = true;
          this.methods["buttonText"] = reader669_buttonText;
          var writer670_buttonText = function(argcv, n) {   // writer method buttonText:=(_)
            this.data.buttonText = n;
            return GraceDone;
          };
          this.methods["buttonText:=(1)"] = writer670_buttonText;
          this.data.textObj = undefined;
          var reader671_textObj = function() {  // reader method textObj
              if (this.data.textObj === undefined) raiseUninitializedVariable("textObj");
              return this.data.textObj;
          };
          reader671_textObj.isVar = true;
          this.methods["textObj"] = reader671_textObj;
          var writer672_textObj = function(argcv, n) {   // writer method textObj:=(_)
            this.data.textObj = n;
            return GraceDone;
          };
          this.methods["textObj:=(1)"] = writer672_textObj;
          this.data.location = undefined;
          var reader673_location = function() {  // reader method location
              if (this.data.location === undefined) raiseUninitializedVariable("location");
              return this.data.location;
          };
          reader673_location.isVar = true;
          this.methods["location"] = reader673_location;
          var writer674_location = function(argcv, n) {   // writer method location:=(_)
            this.data.location = n;
            return GraceDone;
          };
          this.methods["location:=(1)"] = writer674_location;
          this.data.color = undefined;
          var reader675_color = function() {  // reader method color
              if (this.data.color === undefined) raiseUninitializedVariable("color");
              return this.data.color;
          };
          reader675_color.isVar = true;
          this.methods["color"] = reader675_color;
          var writer676_color = function(argcv, n) {   // writer method color:=(_)
            this.data.color = n;
            return GraceDone;
          };
          this.methods["color:=(1)"] = writer676_color;
          this.data.shapeChanged = undefined;
          var reader677_shapeChanged = function() {  // reader method shapeChanged
              if (this.data.shapeChanged === undefined) raiseUninitializedVariable("shapeChanged");
              return this.data.shapeChanged;
          };
          reader677_shapeChanged.isVar = true;
          reader677_shapeChanged.confidential = true;
          this.methods["shapeChanged"] = reader677_shapeChanged;
          var writer678_shapeChanged = function(argcv, n) {   // writer method shapeChanged:=(_)
            this.data.shapeChanged = n;
            return GraceDone;
          };
          writer678_shapeChanged.confidential = true;
          this.methods["shapeChanged:=(1)"] = writer678_shapeChanged;
          this.data.textObjChanged = undefined;
          var reader679_textObjChanged = function() {  // reader method textObjChanged
              if (this.data.textObjChanged === undefined) raiseUninitializedVariable("textObjChanged");
              return this.data.textObjChanged;
          };
          reader679_textObjChanged.isVar = true;
          reader679_textObjChanged.confidential = true;
          this.methods["textObjChanged"] = reader679_textObjChanged;
          var writer680_textObjChanged = function(argcv, n) {   // writer method textObjChanged:=(_)
            this.data.textObjChanged = n;
            return GraceDone;
          };
          writer680_textObjChanged.confidential = true;
          this.methods["textObjChanged:=(1)"] = writer680_textObjChanged;
          var func681 = function(argcv) {    // method asString, line 577
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(578);    // compilenode string
            var string682 = new GraceString("aButton(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call683 = selfRequest(this, "width", [0]);
            var opresult684 = request(string682, "++(1)", [1], call683);
            var string685 = new GraceString("\u00d7");
            var opresult686 = request(opresult684, "++(1)", [1], string685);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call687 = selfRequest(this, "height", [0]);
            var opresult688 = request(opresult686, "++(1)", [1], call687);
            var string689 = new GraceString(")");
            var opresult690 = request(opresult688, "++(1)", [1], string689);
            return opresult690;
          };    // end of method asString
          this.methods["asString"] = func681;
          func681.methodName = "asString";
          func681.paramCounts = [0];
          func681.paramNames = [];
          func681.definitionLine = 577;
          func681.definitionModule = "graphix";
          var func691 = function(argcv, var_s) {    // method setShape(_), line 581
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setShape(_)", 0, numArgs - 1);
            }
            setLineNumber(582);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call692 = selfRequest(this, "shapeChanged:=(1)", [1], GraceTrue);
            setLineNumber(583);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call693 = selfRequest(this, "buttonShape:=(1)", [1], var_s);
            return this;
          };    // end of method setShape(_)
          this.methods["setShape(1)"] = func691;
          func691.methodName = "setShape(1)";
          func691.paramCounts = [1];
          func691.paramNames = ["s"];
          func691.definitionLine = 581;
          func691.definitionModule = "graphix";
          var func694 = function(argcv, var_t) {    // method setText(_), line 587
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setText(_)", 0, numArgs - 1);
            }
            setLineNumber(588);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call695 = selfRequest(this, "buttonText:=(1)", [1], var_t);
            return this;
          };    // end of method setText(_)
          this.methods["setText(1)"] = func694;
          func694.methodName = "setText(1)";
          func694.paramCounts = [1];
          func694.paramNames = ["t"];
          func694.definitionLine = 587;
          func694.definitionModule = "graphix";
          var func696 = function(argcv, var_t) {    // method setTextObj(_), line 592
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setTextObj(_)", 0, numArgs - 1);
            }
            setLineNumber(593);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call697 = selfRequest(this, "textObjChanged:=(1)", [1], GraceTrue);
            setLineNumber(594);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call698 = selfRequest(this, "textObj:=(1)", [1], var_t);
            return this;
          };    // end of method setTextObj(_)
          this.methods["setTextObj(1)"] = func696;
          func696.methodName = "setTextObj(1)";
          func696.paramCounts = [1];
          func696.paramNames = ["t"];
          func696.definitionLine = 592;
          func696.definitionModule = "graphix";
          var func699 = function(argcv, var_w) {    // method setWidth(_), line 598
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setWidth(_)", 0, numArgs - 1);
            }
            setLineNumber(599);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call700 = selfRequest(this, "width:=(1)", [1], var_w);
            return this;
          };    // end of method setWidth(_)
          this.methods["setWidth(1)"] = func699;
          func699.methodName = "setWidth(1)";
          func699.paramCounts = [1];
          func699.paramNames = ["w"];
          func699.definitionLine = 598;
          func699.definitionModule = "graphix";
          var func701 = function(argcv, var_h) {    // method setHeight(_), line 603
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setHeight(_)", 0, numArgs - 1);
            }
            setLineNumber(604);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call702 = selfRequest(this, "height:=(1)", [1], var_h);
            return this;
          };    // end of method setHeight(_)
          this.methods["setHeight(1)"] = func701;
          func701.methodName = "setHeight(1)";
          func701.paramCounts = [1];
          func701.paramNames = ["h"];
          func701.definitionLine = 603;
          func701.definitionModule = "graphix";
          var func703 = function(argcv) {    // method size, line 608
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(608);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call704 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call705 = selfRequest(this, "height", [0]);
            var opresult706 = request(call704, "@(1)", [1], call705);
            return opresult706;
          };    // end of method size
          this.methods["size"] = func703;
          func703.methodName = "size";
          func703.paramCounts = [0];
          func703.paramNames = [];
          func703.definitionLine = 608;
          func703.definitionModule = "graphix";
          var func707 = function(argcv, var_p) {    // method size:=(_), line 610
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(611);    // compilenode member
            // call case 6: other requests
            var call709 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call708 = selfRequest(this, "width:=(1)", [1], call709);
            setLineNumber(612);    // compilenode member
            // call case 6: other requests
            var call711 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call710 = selfRequest(this, "height:=(1)", [1], call711);
            return call710;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func707;
          func707.methodName = "size:=(1)";
          func707.paramCounts = [1];
          func707.paramNames = ["p"];
          func707.definitionLine = 610;
          func707.definitionModule = "graphix";
          var func712 = function(argcv, var_p) {    // method setSize(_), line 615
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(616);    // compilenode member
            // call case 6: other requests
            var call714 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call713 = selfRequest(this, "width:=(1)", [1], call714);
            setLineNumber(617);    // compilenode member
            // call case 6: other requests
            var call716 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call715 = selfRequest(this, "height:=(1)", [1], call716);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func712;
          func712.methodName = "setSize(1)";
          func712.paramCounts = [1];
          func712.paramNames = ["p"];
          func712.definitionLine = 615;
          func712.definitionModule = "graphix";
          var func717 = function(argcv, var_c) {    // method colored(_), line 621
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("colored(_)", 0, numArgs - 1);
            }
            setLineNumber(622);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call718 = selfRequest(this, "color:=(1)", [1], var_c);
            return this;
          };    // end of method colored(_)
          this.methods["colored(1)"] = func717;
          func717.methodName = "colored(1)";
          func717.paramCounts = [1];
          func717.paramNames = ["c"];
          func717.definitionLine = 621;
          func717.definitionModule = "graphix";
          var func719 = function(argcv) {    // method draw, line 626
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("draw", 0, numArgs - 0);
            }
            var if720 = GraceDone;
            setLineNumber(627);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call722 = selfRequest(this, "textObjChanged", [0]);
            var call721 = request(call722, "prefix!", [0]);
            if (Grace_isTrue(call721)) {
              setLineNumber(628);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call724 = selfRequest(this, "buttonText", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call725 = selfRequest(this, "textObj", [0]);
              var call723 = request(call725, "setContent(1)", [1], call724);
              if720 = call723;
            }
            setLineNumber(630);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call727 = selfRequest(this, "textObj", [0]);
            var call726 = request(call727, "draw", [0]);
            setLineNumber(632);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call729 = selfRequest(this, "textObj", [0]);
            var call728 = request(call729, "width", [0]);
            var var_textWidth = call728;
            setLineNumber(633);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call731 = selfRequest(this, "textObj", [0]);
            var call730 = request(call731, "height", [0]);
            var var_textHeight = call730;
            var if732 = GraceDone;
            setLineNumber(635);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call734 = selfRequest(this, "shapeChanged", [0]);
            var call733 = request(call734, "prefix!", [0]);
            if (Grace_isTrue(call733)) {
              setLineNumber(636);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call736 = selfRequest(this, "color", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call738 = selfRequest(this, "height", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call740 = selfRequest(this, "width", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call741 = selfRequest(this, "buttonShape", [0]);
              var call739 = request(call741, "setWidth(1)", [1], call740);
              var call737 = request(call739, "setHeight(1)", [1], call738);
              var call735 = request(call737, "colored(1)", [1], call736);
              setLineNumber(637);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call742 = selfRequest(this, "width", [0]);
              var quotient743 = request(call742, "/(1)", [1], new GraceNum(2));
              if (var_textWidth === undefined) raiseUninitializedVariable("textWidth");
              var quotient744 = request(var_textWidth, "/(1)", [1], new GraceNum(2));
              var diff745 = request(quotient743, "-(1)", [1], quotient744);
              var var_x = diff745;
              setLineNumber(638);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call746 = selfRequest(this, "height", [0]);
              var quotient747 = request(call746, "/(1)", [1], new GraceNum(2));
              if (var_textHeight === undefined) raiseUninitializedVariable("textHeight");
              var quotient748 = request(var_textHeight, "/(1)", [1], new GraceNum(2));
              var diff749 = request(quotient747, "-(1)", [1], quotient748);
              var var_y = diff749;
              setLineNumber(639);    // compilenode op
              if (var_x === undefined) raiseUninitializedVariable("x");
              if (var_y === undefined) raiseUninitializedVariable("y");
              var opresult751 = request(var_x, "@(1)", [1], var_y);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call752 = selfRequest(this, "textObj", [0]);
              var call750 = selfRequest(call752, "location:=(1)", [1], opresult751);
              setLineNumber(640);    // compilenode member
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call754 = selfRequest(this, "textObj", [0]);
              var call753 = request(call754, "draw", [0]);
              if732 = call753;
            }
            setLineNumber(642);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call756 = selfRequest(this, "buttonShape", [0]);
            var call755 = request(call756, "draw", [0]);
            setLineNumber(644);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call759 = selfRequest(this, "buttonShape", [0]);
            var call758 = request(call759, "jsShapeObject", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call760 = selfRequest(this, "jsShapeObject", [0]);
            var call757 = request(call760, "add(1)", [1], call758);
            setLineNumber(645);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call763 = selfRequest(this, "textObj", [0]);
            var call762 = request(call763, "jsText", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call764 = selfRequest(this, "jsShapeObject", [0]);
            var call761 = request(call764, "add(1)", [1], call762);
            setLineNumber(646);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call766 = selfRequest(this, "location", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call767 = selfRequest(this, "jsShapeObject", [0]);
            var call765 = request(call767, "setLocation(1)", [1], call766);
            setLineNumber(647);    // compilenode member
            // call case 6: other requests
            // call case 2: outer request
            var call769 = selfRequest(this.outer_graphix_560, "stage", [0]);
            var call768 = request(call769, "update", [0]);
            return this;
          };    // end of method draw
          this.methods["draw"] = func719;
          func719.methodName = "draw";
          func719.paramCounts = [0];
          func719.paramNames = [];
          func719.definitionLine = 626;
          func719.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 560;
              m.definitionModule = "graphix";
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
          var obj661_init = function() {    // init of object on line 560
            initFun662.call(this);
            setLineNumber(562);    // compilenode num
            this.data.width = new GraceNum(40);
            setLineNumber(563);    // compilenode num
            this.data.height = new GraceNum(20);
            setLineNumber(564);    // compilenode member
            // call case 2: outer request
            var call770 = selfRequest(this.outer_graphix_560, "addRectangle", [0]);
            this.data.buttonShape = call770;
            setLineNumber(565);    // compilenode string
            var string771 = new GraceString("button");
            this.data.buttonText = string771;
            setLineNumber(566);    // compilenode member
            // call case 2: outer request
            var call772 = selfRequest(this.outer_graphix_560, "addText", [0]);
            this.data.textObj = call772;
            setLineNumber(567);    // compilenode num
            var opresult773 = request(new GraceNum(0), "@(1)", [1], new GraceNum(0));
            this.data.location = opresult773;
            setLineNumber(568);    // compilenode string
            var string774 = new GraceString("#F5F5F5");
            this.data.color = string774;
            this.data.shapeChanged = GraceFalse;
            this.data.textObjChanged = GraceFalse;
            setLineNumber(572);    // compilenode member
            // call case 2: outer request
            var call776 = selfRequest(this.outer_graphix_560, "stage", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call775 = selfRequest(this, "myStage:=(1)", [1], call776);
            setLineNumber(573);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call778 = selfRequest(this, "buttonShape", [0]);
            var call777 = request(call778, "filled(1)", [1], GraceTrue);
            setLineNumber(574);    // compilenode member
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call780 = request(var_gr, "container", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call779 = selfRequest(this, "jsShapeObject:=(1)", [1], call780);
            setLineNumber(575);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call782 = selfRequest(this, "jsShapeObject", [0]);
            // call case 6: other requests
            // call case 2: outer request
            var call783 = selfRequest(this.outer_graphix_560, "stage", [0]);
            var call781 = request(call783, "add(1)", [1], call782);
          };
          return obj661_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj661_init = obj661_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj661_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addButton$build(_,_,_)
      this.methods["addButton$build(3)"] = func660;
      func660.methodName = "addButton$build(3)";
      func660.paramCounts = [0];
      func660.paramNames = [];
      func660.definitionLine = 560;
      func660.definitionModule = "graphix";
      var func784 = function(argcv) {    // method addInputBox, line 652
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addInputBox", 0, numArgs - 0);
        }
        var ouc = emptyGraceObject("create(_,_).addInputBox", "graphix", 652);
        var ouc_init = this.methods["addInputBox$build(3)"].call(this, null, ouc, [], []);
        ouc_init.call(ouc);
        return ouc;
      };    // end of method addInputBox
      this.methods["addInputBox"] = func784;
      func784.methodName = "addInputBox";
      func784.paramCounts = [0];
      func784.paramNames = [];
      func784.definitionLine = 652;
      func784.definitionModule = "graphix";
      var func785 = function(argcv, inheritingObject, aliases, exclusions) {    // method addInputBox$build(_,_,_), line 652
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 4;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("addInputBox", 0, numArgs - 0);
        }
        var obj786_build = function(ignore, outerObj, aliases, exclusions) {
          this.closureKeys = this.closureKeys || [];
          this.closureKeys.push("outer_graphix_652");
          this.outer_graphix_652 = outerObj;
          const inheritedExclusions = { };
          for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
              const exMeth = exclusions[eix];
              inheritedExclusions[exMeth] = this.methods[exMeth]; };
          this.data.width = undefined;
          var reader787_width = function() {  // reader method width
              if (this.data.width === undefined) raiseUninitializedVariable("width");
              return this.data.width;
          };
          reader787_width.isVar = true;
          this.methods["width"] = reader787_width;
          var writer788_width = function(argcv, n) {   // writer method width:=(_)
            this.data.width = n;
            return GraceDone;
          };
          this.methods["width:=(1)"] = writer788_width;
          this.data.height = undefined;
          var reader789_height = function() {  // reader method height
              if (this.data.height === undefined) raiseUninitializedVariable("height");
              return this.data.height;
          };
          reader789_height.isVar = true;
          this.methods["height"] = reader789_height;
          var writer790_height = function(argcv, n) {   // writer method height:=(_)
            this.data.height = n;
            return GraceDone;
          };
          this.methods["height:=(1)"] = writer790_height;
          this.data.location = undefined;
          var reader791_location = function() {  // reader method location
              if (this.data.location === undefined) raiseUninitializedVariable("location");
              return this.data.location;
          };
          reader791_location.isVar = true;
          this.methods["location"] = reader791_location;
          var writer792_location = function(argcv, n) {   // writer method location:=(_)
            this.data.location = n;
            return GraceDone;
          };
          this.methods["location:=(1)"] = writer792_location;
          this.data.fontSize = undefined;
          var reader793_fontSize = function() {  // reader method fontSize
              if (this.data.fontSize === undefined) raiseUninitializedVariable("fontSize");
              return this.data.fontSize;
          };
          reader793_fontSize.isVar = true;
          this.methods["fontSize"] = reader793_fontSize;
          var writer794_fontSize = function(argcv, n) {   // writer method fontSize:=(_)
            this.data.fontSize = n;
            return GraceDone;
          };
          this.methods["fontSize:=(1)"] = writer794_fontSize;
          this.data.fontFamily = undefined;
          var reader795_fontFamily = function() {  // reader method fontFamily
              if (this.data.fontFamily === undefined) raiseUninitializedVariable("fontFamily");
              return this.data.fontFamily;
          };
          reader795_fontFamily.isVar = true;
          this.methods["fontFamily"] = reader795_fontFamily;
          var writer796_fontFamily = function(argcv, n) {   // writer method fontFamily:=(_)
            this.data.fontFamily = n;
            return GraceDone;
          };
          this.methods["fontFamily:=(1)"] = writer796_fontFamily;
          this.data.fontColor = undefined;
          var reader797_fontColor = function() {  // reader method fontColor
              if (this.data.fontColor === undefined) raiseUninitializedVariable("fontColor");
              return this.data.fontColor;
          };
          reader797_fontColor.isVar = true;
          this.methods["fontColor"] = reader797_fontColor;
          var writer798_fontColor = function(argcv, n) {   // writer method fontColor:=(_)
            this.data.fontColor = n;
            return GraceDone;
          };
          this.methods["fontColor:=(1)"] = writer798_fontColor;
          this.data.backgroundColor = undefined;
          var reader799_backgroundColor = function() {  // reader method backgroundColor
              if (this.data.backgroundColor === undefined) raiseUninitializedVariable("backgroundColor");
              return this.data.backgroundColor;
          };
          reader799_backgroundColor.isVar = true;
          this.methods["backgroundColor"] = reader799_backgroundColor;
          var writer800_backgroundColor = function(argcv, n) {   // writer method backgroundColor:=(_)
            this.data.backgroundColor = n;
            return GraceDone;
          };
          this.methods["backgroundColor:=(1)"] = writer800_backgroundColor;
          this.data.borderColor = undefined;
          var reader801_borderColor = function() {  // reader method borderColor
              if (this.data.borderColor === undefined) raiseUninitializedVariable("borderColor");
              return this.data.borderColor;
          };
          reader801_borderColor.isVar = true;
          this.methods["borderColor"] = reader801_borderColor;
          var writer802_borderColor = function(argcv, n) {   // writer method borderColor:=(_)
            this.data.borderColor = n;
            return GraceDone;
          };
          this.methods["borderColor:=(1)"] = writer802_borderColor;
          this.data.jsInputObject = undefined;
          var reader803_jsInputObject = function() {  // reader method jsInputObject
              if (this.data.jsInputObject === undefined) raiseUninitializedVariable("jsInputObject");
              return this.data.jsInputObject;
          };
          reader803_jsInputObject.isVar = true;
          reader803_jsInputObject.confidential = true;
          this.methods["jsInputObject"] = reader803_jsInputObject;
          var writer804_jsInputObject = function(argcv, n) {   // writer method jsInputObject:=(_)
            this.data.jsInputObject = n;
            return GraceDone;
          };
          writer804_jsInputObject.confidential = true;
          this.methods["jsInputObject:=(1)"] = writer804_jsInputObject;
          this.data.submitBlock = undefined;
          var reader805_submitBlock = function() {  // reader method submitBlock
              if (this.data.submitBlock === undefined) raiseUninitializedVariable("submitBlock");
              return this.data.submitBlock;
          };
          reader805_submitBlock.isVar = true;
          reader805_submitBlock.confidential = true;
          this.methods["submitBlock"] = reader805_submitBlock;
          var writer806_submitBlock = function(argcv, n) {   // writer method submitBlock:=(_)
            this.data.submitBlock = n;
            return GraceDone;
          };
          writer806_submitBlock.confidential = true;
          this.methods["submitBlock:=(1)"] = writer806_submitBlock;
          var func807 = function(argcv) {    // method asString, line 664
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("asString", 0, numArgs - 0);
            }
            setLineNumber(665);    // compilenode string
            var string808 = new GraceString("anInputBox(");
            // call case 4: self request with 0 args and 0 typeArgs 
            var call809 = selfRequest(this, "width", [0]);
            var opresult810 = request(string808, "++(1)", [1], call809);
            var string811 = new GraceString("\u00d7");
            var opresult812 = request(opresult810, "++(1)", [1], string811);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call813 = selfRequest(this, "height", [0]);
            var opresult814 = request(opresult812, "++(1)", [1], call813);
            var string815 = new GraceString(")");
            var opresult816 = request(opresult814, "++(1)", [1], string815);
            return opresult816;
          };    // end of method asString
          this.methods["asString"] = func807;
          func807.methodName = "asString";
          func807.paramCounts = [0];
          func807.paramNames = [];
          func807.definitionLine = 664;
          func807.definitionModule = "graphix";
          var func817 = function(argcv) {    // method value, line 667
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("value", 0, numArgs - 0);
            }
            setLineNumber(668);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call819 = selfRequest(this, "jsInputObject", [0]);
            var call818 = request(call819, "value", [0]);
            return call818;
          };    // end of method value
          this.methods["value"] = func817;
          func817.methodName = "value";
          func817.paramCounts = [0];
          func817.paramNames = [];
          func817.definitionLine = 667;
          func817.definitionModule = "graphix";
          var func820 = function(argcv, var_val) {    // method value:=(_), line 671
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("value:=(_)", 0, numArgs - 1);
            }
            setLineNumber(672);    // compilenode call
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call822 = selfRequest(this, "jsInputObject", [0]);
            var call821 = selfRequest(call822, "value:=(1)", [1], var_val);
            return call821;
          };    // end of method value:=(_)
          this.methods["value:=(1)"] = func820;
          func820.methodName = "value:=(1)";
          func820.paramCounts = [1];
          func820.paramNames = ["val"];
          func820.definitionLine = 671;
          func820.definitionModule = "graphix";
          var func823 = function(argcv, var_w) {    // method setWidth(_), line 675
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setWidth(_)", 0, numArgs - 1);
            }
            setLineNumber(676);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call824 = selfRequest(this, "width:=(1)", [1], var_w);
            return this;
          };    // end of method setWidth(_)
          this.methods["setWidth(1)"] = func823;
          func823.methodName = "setWidth(1)";
          func823.paramCounts = [1];
          func823.paramNames = ["w"];
          func823.definitionLine = 675;
          func823.definitionModule = "graphix";
          var func825 = function(argcv, var_h) {    // method setHeight(_), line 680
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setHeight(_)", 0, numArgs - 1);
            }
            setLineNumber(681);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call826 = selfRequest(this, "height:=(1)", [1], var_h);
            return this;
          };    // end of method setHeight(_)
          this.methods["setHeight(1)"] = func825;
          func825.methodName = "setHeight(1)";
          func825.paramCounts = [1];
          func825.paramNames = ["h"];
          func825.definitionLine = 680;
          func825.definitionModule = "graphix";
          var func827 = function(argcv) {    // method size, line 685
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("size", 0, numArgs - 0);
            }
            setLineNumber(685);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call828 = selfRequest(this, "width", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call829 = selfRequest(this, "height", [0]);
            var opresult830 = request(call828, "@(1)", [1], call829);
            return opresult830;
          };    // end of method size
          this.methods["size"] = func827;
          func827.methodName = "size";
          func827.paramCounts = [0];
          func827.paramNames = [];
          func827.definitionLine = 685;
          func827.definitionModule = "graphix";
          var func831 = function(argcv, var_p) {    // method size:=(_), line 687
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("size:=(_)", 0, numArgs - 1);
            }
            setLineNumber(688);    // compilenode member
            // call case 6: other requests
            var call833 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call832 = selfRequest(this, "width:=(1)", [1], call833);
            setLineNumber(689);    // compilenode member
            // call case 6: other requests
            var call835 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call834 = selfRequest(this, "height:=(1)", [1], call835);
            return call834;
          };    // end of method size:=(_)
          this.methods["size:=(1)"] = func831;
          func831.methodName = "size:=(1)";
          func831.paramCounts = [1];
          func831.paramNames = ["p"];
          func831.definitionLine = 687;
          func831.definitionModule = "graphix";
          var func836 = function(argcv, var_p) {    // method setSize(_), line 692
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setSize(_)", 0, numArgs - 1);
            }
            setLineNumber(693);    // compilenode member
            // call case 6: other requests
            var call838 = request(var_p, "x", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call837 = selfRequest(this, "width:=(1)", [1], call838);
            setLineNumber(694);    // compilenode member
            // call case 6: other requests
            var call840 = request(var_p, "y", [0]);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call839 = selfRequest(this, "height:=(1)", [1], call840);
            return this;
          };    // end of method setSize(_)
          this.methods["setSize(1)"] = func836;
          func836.methodName = "setSize(1)";
          func836.paramCounts = [1];
          func836.paramNames = ["p"];
          func836.definitionLine = 692;
          func836.definitionModule = "graphix";
          var func841 = function(argcv, var_l) {    // method at(_), line 698
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("at(_)", 0, numArgs - 1);
            }
            setLineNumber(699);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call842 = selfRequest(this, "location:=(1)", [1], var_l);
            return this;
          };    // end of method at(_)
          this.methods["at(1)"] = func841;
          func841.methodName = "at(1)";
          func841.paramCounts = [1];
          func841.paramNames = ["l"];
          func841.definitionLine = 698;
          func841.definitionModule = "graphix";
          var func843 = function(argcv, var_f) {    // method setFontSize(_), line 703
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setFontSize(_)", 0, numArgs - 1);
            }
            setLineNumber(704);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call844 = selfRequest(this, "fontSize:=(1)", [1], var_f);
            return this;
          };    // end of method setFontSize(_)
          this.methods["setFontSize(1)"] = func843;
          func843.methodName = "setFontSize(1)";
          func843.paramCounts = [1];
          func843.paramNames = ["f"];
          func843.definitionLine = 703;
          func843.definitionModule = "graphix";
          var func845 = function(argcv, var_f) {    // method setFontFamily(_), line 708
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setFontFamily(_)", 0, numArgs - 1);
            }
            setLineNumber(709);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call846 = selfRequest(this, "fontFamily:=(1)", [1], var_f);
            return this;
          };    // end of method setFontFamily(_)
          this.methods["setFontFamily(1)"] = func845;
          func845.methodName = "setFontFamily(1)";
          func845.paramCounts = [1];
          func845.paramNames = ["f"];
          func845.definitionLine = 708;
          func845.definitionModule = "graphix";
          var func847 = function(argcv, var_c) {    // method setBackgroundColor(_), line 713
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setBackgroundColor(_)", 0, numArgs - 1);
            }
            setLineNumber(714);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call848 = selfRequest(this, "backgroundColor:=(1)", [1], var_c);
            return this;
          };    // end of method setBackgroundColor(_)
          this.methods["setBackgroundColor(1)"] = func847;
          func847.methodName = "setBackgroundColor(1)";
          func847.paramCounts = [1];
          func847.paramNames = ["c"];
          func847.definitionLine = 713;
          func847.definitionModule = "graphix";
          var func849 = function(argcv, var_c) {    // method setBorderColor(_), line 718
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("setBorderColor(_)", 0, numArgs - 1);
            }
            setLineNumber(719);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call850 = selfRequest(this, "borderColor:=(1)", [1], var_c);
            return this;
          };    // end of method setBorderColor(_)
          this.methods["setBorderColor(1)"] = func849;
          func849.methodName = "setBorderColor(1)";
          func849.paramCounts = [1];
          func849.paramNames = ["c"];
          func849.definitionLine = 718;
          func849.definitionModule = "graphix";
          var func851 = function(argcv) {    // method draw, line 723
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("draw", 0, numArgs - 0);
            }
            setLineNumber(724);    // compilenode member
            // call case 2: outer request
            var call854 = selfRequest(this.outer_graphix_652, "stage", [0]);
            // call case 6: other requests
            if (var_gr === undefined) raiseUninitializedVariable("gr");
            var call853 = request(var_gr, "inputBox(1)", [1], call854);
            // call case 4: self request with 1 args and 0 typeArgs 
            var call852 = selfRequest(this, "jsInputObject:=(1)", [1], call853);
            setLineNumber(725);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call856 = selfRequest(this, "location", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call857 = selfRequest(this, "jsInputObject", [0]);
            var call855 = selfRequest(call857, "location:=(1)", [1], call856);
            setLineNumber(726);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call859 = selfRequest(this, "width", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call860 = selfRequest(this, "jsInputObject", [0]);
            var call858 = selfRequest(call860, "width:=(1)", [1], call859);
            setLineNumber(727);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call862 = selfRequest(this, "height", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call863 = selfRequest(this, "jsInputObject", [0]);
            var call861 = selfRequest(call863, "height:=(1)", [1], call862);
            setLineNumber(728);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call865 = selfRequest(this, "fontSize", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call866 = selfRequest(this, "jsInputObject", [0]);
            var call864 = selfRequest(call866, "fontSize:=(1)", [1], call865);
            setLineNumber(729);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call868 = selfRequest(this, "fontFamily", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call869 = selfRequest(this, "jsInputObject", [0]);
            var call867 = selfRequest(call869, "fontFamily:=(1)", [1], call868);
            setLineNumber(730);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call871 = selfRequest(this, "fontColor", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call872 = selfRequest(this, "jsInputObject", [0]);
            var call870 = selfRequest(call872, "fontColor:=(1)", [1], call871);
            setLineNumber(731);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call874 = selfRequest(this, "backgroundColor", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call875 = selfRequest(this, "jsInputObject", [0]);
            var call873 = selfRequest(call875, "backgroundColor:=(1)", [1], call874);
            setLineNumber(732);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call877 = selfRequest(this, "borderColor", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call878 = selfRequest(this, "jsInputObject", [0]);
            var call876 = selfRequest(call878, "borderColor:=(1)", [1], call877);
            setLineNumber(733);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call880 = selfRequest(this, "jsInputObject", [0]);
            // call case 4: self request with 0 args and 0 typeArgs 
            var call881 = selfRequest(this, "submitBlock", [0]);
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call882 = selfRequest(this, "jsInputObject", [0]);
            var call879 = request(call882, "onSubmit(2)", [2], call880, call881);
            setLineNumber(734);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call884 = selfRequest(this, "jsInputObject", [0]);
            var call883 = request(call884, "draw", [0]);
            return this;
          };    // end of method draw
          this.methods["draw"] = func851;
          func851.methodName = "draw";
          func851.paramCounts = [0];
          func851.paramNames = [];
          func851.definitionLine = 723;
          func851.definitionModule = "graphix";
          var func885 = function(argcv) {    // method focus, line 738
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("focus", 0, numArgs - 0);
            }
            setLineNumber(739);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call887 = selfRequest(this, "jsInputObject", [0]);
            var call886 = request(call887, "focus", [0]);
            return call886;
          };    // end of method focus
          this.methods["focus"] = func885;
          func885.methodName = "focus";
          func885.paramCounts = [0];
          func885.paramNames = [];
          func885.definitionLine = 738;
          func885.definitionModule = "graphix";
          var func888 = function(argcv, var_block) {    // method onSubmitDo(_), line 742
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 1) && (numArgs !== 1)) {
                raiseTypeArgError("onSubmitDo(_)", 0, numArgs - 1);
            }
            var if889 = GraceDone;
            setLineNumber(743);    // compilenode member
            // call case 4: self request with 0 args and 0 typeArgs 
            var call890 = selfRequest(this, "jsInputObject", [0]);
            var opresult891 = request(new GraceNum(0), "\u2260(1)", [1], call890);
            if (Grace_isTrue(opresult891)) {
              setLineNumber(744);    // compilenode member
              // call case 4: self request with 0 args and 0 typeArgs 
              var call893 = selfRequest(this, "jsInputObject", [0]);
              // call case 6: other requests
              // call case 4: self request with 0 args and 0 typeArgs 
              var call894 = selfRequest(this, "jsInputObject", [0]);
              var call892 = request(call894, "onSubmit(2)", [2], call893, var_block);
              if889 = call892;
            }
            setLineNumber(746);    // compilenode call
            // call case 4: self request with 1 args and 0 typeArgs 
            var call895 = selfRequest(this, "submitBlock:=(1)", [1], var_block);
            return this;
          };    // end of method onSubmitDo(_)
          this.methods["onSubmitDo(1)"] = func888;
          func888.methodName = "onSubmitDo(1)";
          func888.paramCounts = [1];
          func888.paramNames = ["block"];
          func888.definitionLine = 742;
          func888.definitionModule = "graphix";
          var func896 = function(argcv) {    // method destroy, line 750
            var returnTarget = invocationCount;
            invocationCount++;
            const numArgs = arguments.length - 1;
            if ((numArgs > 0) && (numArgs !== 0)) {
                raiseTypeArgError("destroy", 0, numArgs - 0);
            }
            setLineNumber(751);    // compilenode member
            // call case 6: other requests
            // call case 4: self request with 0 args and 0 typeArgs 
            var call898 = selfRequest(this, "jsInputObject", [0]);
            var call897 = request(call898, "destroy", [0]);
            return call897;
          };    // end of method destroy
          this.methods["destroy"] = func896;
          func896.methodName = "destroy";
          func896.paramCounts = [0];
          func896.paramNames = [];
          func896.definitionLine = 750;
          func896.definitionModule = "graphix";
          this.mutable = true;
          const overridenByAliases = { };
          for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
              const a = aliases[aix];
              const newNm = a.newName;
              const oldNm = a.oldName;
              overridenByAliases[newNm] = this.methods[newNm];
              const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
              m.definitionLine = 652;
              m.definitionModule = "graphix";
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
          var obj786_init = function() {    // init of object on line 652
            setLineNumber(653);    // compilenode num
            this.data.width = new GraceNum(50);
            setLineNumber(654);    // compilenode num
            this.data.height = new GraceNum(20);
            setLineNumber(655);    // compilenode num
            var opresult899 = request(new GraceNum(0), "@(1)", [1], new GraceNum(0));
            this.data.location = opresult899;
            setLineNumber(656);    // compilenode num
            this.data.fontSize = new GraceNum(14);
            setLineNumber(657);    // compilenode string
            var string900 = new GraceString("Arial");
            this.data.fontFamily = string900;
            setLineNumber(658);    // compilenode string
            var string901 = new GraceString("black");
            this.data.fontColor = string901;
            setLineNumber(659);    // compilenode string
            var string902 = new GraceString("white");
            this.data.backgroundColor = string902;
            setLineNumber(660);    // compilenode string
            var string903 = new GraceString("black");
            this.data.borderColor = string903;
            setLineNumber(661);    // compilenode num
            this.data.jsInputObject = new GraceNum(0);
            setLineNumber(662);    // compilenode block
            var block904 = new GraceBlock(this, 662, 0);
            block904.guard = jsTrue;
            block904.real = function block904() {
              setLineNumber(662);    // compileBlock
              return GraceDone;
            };
            let applyMeth904 = function apply (argcv) {
                return this.real.apply(this.receiver);
            };
            applyMeth904.methodName = "apply";
            applyMeth904.paramCounts = [0];
            applyMeth904.paramNames = [];
            applyMeth904.definitionLine = 662;
            applyMeth904.definitionModule = "graphix";
            block904.methods["apply"] = applyMeth904;
            this.data.submitBlock = block904;
            setLineNumber(753);    // compilenode call
            // call case 6: other requests
            // call case 2: outer request
            var call906 = selfRequest(this.outer_graphix_652, "inputs", [0]);
            var call905 = request(call906, "add(1)", [1], this);
          };
          return obj786_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj786_init = obj786_build.call(inheritingObject, null, this, aliases, exclusions);
        return obj786_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
      };    // end of method addInputBox$build(_,_,_)
      this.methods["addInputBox$build(3)"] = func785;
      func785.methodName = "addInputBox$build(3)";
      func785.paramCounts = [0];
      func785.paramNames = [];
      func785.definitionLine = 652;
      func785.definitionModule = "graphix";
      this.mutable = true;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 137;
          m.definitionModule = "graphix";
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
      var obj155_init = function() {    // init of object on line 137
        setLineNumber(138);    // compilenode member
        // call case 2: outer request
        var call907 = selfRequest(var_prelude, "emptyList", [0]);
        this.data.shapes = call907;
        setLineNumber(139);    // compilenode member
        // call case 2: outer request
        var call908 = selfRequest(var_prelude, "emptyList", [0]);
        this.data.inputs = call908;
        setLineNumber(140);    // compilenode call
        // call case 6: other requests
        if (var_gr === undefined) raiseUninitializedVariable("gr");
        var call909 = request(var_gr, "stage(2)", [2], var_canvasHeight, var_canvasWidth);
        this.data.stage = call909;
        this.data.timeoutIsSet = GraceFalse;
      };
      return obj155_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj155_init = obj155_build.call(inheritingObject, null, var_canvasWidth, var_canvasHeight, this, aliases, exclusions);
    return obj155_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method create(_,_)$build(_,_,_)
  this.methods["create(2)$build(3)"] = func154;
  func154.methodName = "create(2)$build(3)";
  func154.paramCounts = [2];
  func154.paramNames = ["canvasWidth", "canvasHeight"];
  func154.definitionLine = 137;
  func154.definitionModule = "graphix";
  var func910 = function(argcv, var_str) {    // method convertStrToNum(_), line 757
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("convertStrToNum(_)", 0, numArgs - 1);
    }
    setLineNumber(758);    // compilenode call
    var result = GraceDone;    // start native code from line 758
    
          var str = var_str._value;
          return new GraceNum(str);
       // end native code insertion
    return result;
  };    // end of method convertStrToNum(_)
  this.methods["convertStrToNum(1)"] = func910;
  func910.methodName = "convertStrToNum(1)";
  func910.paramCounts = [1];
  func910.paramNames = ["str"];
  func910.definitionLine = 757;
  func910.definitionModule = "graphix";
  var func911 = function(argcv, var_num, var_digits) {    // method roundTo(_,_), line 764
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 2) && (numArgs !== 2)) {
        raiseTypeArgError("roundTo(_,_)", 0, numArgs - 2);
    }
    setLineNumber(765);    // compilenode call
    var result = GraceDone;    // start native code from line 765
    
          var digits = var_digits._value;
          var num = var_num._value.toFixed(digits);
          return new GraceNum(num);
       // end native code insertion
    return result;
  };    // end of method roundTo(_,_)
  this.methods["roundTo(2)"] = func911;
  func911.methodName = "roundTo(2)";
  func911.paramCounts = [2];
  func911.paramNames = ["num", "digits"];
  func911.definitionLine = 764;
  func911.definitionModule = "graphix";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_graphix = gracecode_graphix;
if (typeof window !== "undefined")
  window.gracecode_graphix = gracecode_graphix;
gracecode_graphix.imports = ["createJsGraphicsWrapper", "standardGrace"];
gracecode_graphix.definitionModule = "graphix";
gracecode_graphix.definitionLine = 1;
