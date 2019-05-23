var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
if (typeof gctCache !== "undefined")
  gctCache["date"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n basic\n fromString(1)\n milliseconds(1)\n now\nfresh:basic:\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hash\n hour\n millisecond\n minute\n month\n reverseTimesNumber(1)\n second\n timeZoneOffsetInHours\n timeZoneOffsetInMinutes\n year\n \u2260(1)\nfresh:fromString(1):\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hash\n hour\n isMe(1)\n millisecond\n minute\n month\n myIdentityHash\n reverseTimesNumber(1)\n second\n timeZoneOffsetInHours\n timeZoneOffsetInMinutes\n value\n year\n \u2260(1)\nfresh:milliseconds(1):\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hash\n hour\n isMe(1)\n millisecond\n minute\n month\n myIdentityHash\n reverseTimesNumber(1)\n second\n timeZoneOffsetInHours\n timeZoneOffsetInMinutes\n value\n year\n \u2260(1)\nfresh:now:\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hash\n hour\n isMe(1)\n millisecond\n minute\n month\n myIdentityHash\n reverseTimesNumber(1)\n second\n timeZoneOffsetInHours\n timeZoneOffsetInMinutes\n value\n year\n \u2260(1)\nmethodtypes-of:Date:\n 1 *(factor:Number) \u2192 Unknown:Type\n 1 +(other:Date) \u2192 Date\n 1 -(other:Date) \u2192 Unknown:Type\n 1 ==(other:Date) \u2192 Boolean\n 1 asDateString \u2192 String\n 1 asIsoString \u2192 String\n 1 asString \u2192 String\n 1 asTimeString \u2192 String\n 1 date \u2192 Number\n 1 day \u2192 Number\n 1 hour \u2192 Number\n 1 minute \u2192 Number\n 1 month \u2192 Number\n 1 second \u2192 Number\n 1 timeZoneOffsetInHours \u2192 Number\n 1 timeZoneOffsetInMinutes \u2192 Number\n 1 year \u2192 Number\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/modules/date.grace\npublic:\n Date\n basic\n days(1)\n fromString(1)\n hours(1)\n milliseconds(1)\n minutes(1)\n now\n seconds(1)\n weeks(1)\npublicMethodTypes:\n basic\n days(n) \u2192 Date\n fromString(dateString)\n hours(n) \u2192 Date\n milliseconds(n) \u2192 Date\n minutes(n) \u2192 Date\n now\n seconds(n) \u2192 Date\n weeks(n) \u2192 Date\ntypes:\n Date\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["date"] = [
    "type Date = interface {",
    "    year -> Number",
    "        // the year, e.g., 2016",
    "    month -> Number",
    "        // the month, e.g, for 1 for January, 4 for April",
    "    date -> Number",
    "        // the day of the month, from 1 to 31",
    "    day -> Number",
    "        // the day of the week, e.g. 1 for Sunday, 1 for Monday",
    "    hour -> Number",
    "        // the hour of the day, e.g. 16 for 4 pm",
    "    minute -> Number",
    "        // the minutes past the hour, e.g. 49 for 4:49 pm",
    "    second -> Number",
    "        // the seconds past the minute, e.g. 32 for 4:49:32 pm",
    "    asString -> String",
    "        // a string representation of this date and time",
    "    asDateString -> String",
    "        // a string representation of just the date part",
    "    asTimeString -> String",
    "        // a string representation of just the time part",
    "    asIsoString -> String",
    "        // a string representation that complies with ISO 8601",
    "    timeZoneOffsetInMinutes -> Number",
    "        // the offset between this time and UTC, in minutes.",
    "    timeZoneOffsetInHours -> Number",
    "        // the offset between this time and UTC, in hours.",
    "    == (other:Date) -> Boolean",
    "        // is self == to other?",
    "    + (other:Date) -> Date",
    "        // the sum of self and other",
    "    - (other:Date)",
    "        // the difference betweem self and other",
    "    * (factor:Number)",
    "        // the product of self and factor",
    "}",
    "",
    "trait basic {",
    "    // all in local time",
    "",
    "    use equality",
    "    method year -> Number {",
    "        // the year, e.g., 2016",
    "        native \"js\" code \"return new GraceNum(this.data.value.getFullYear())\"",
    "    }",
    "    method month -> Number {",
    "        // the month, e.g, for 1 for January, 4 for April",
    "        native \"js\" code \"return new GraceNum(this.data.value.getMonth() + 1)\"",
    "    }",
    "    method date -> Number {",
    "        // the day of the month, from 1 to 31",
    "        native \"js\" code \"return new GraceNum(this.data.value.getDate())\"",
    "    }",
    "    method day -> Number {",
    "        // the day of the week, e.g. 1 for Sunday, 2 for Monday",
    "        native \"js\" code \"return new GraceNum(this.data.value.getDay() + 1)\"",
    "    }",
    "    method hour -> Number {",
    "        // the hour of the day, e.g. 16 for 4 pm",
    "        native \"js\" code \"return new GraceNum(this.data.value.getHours())\"",
    "    }",
    "    method minute -> Number {",
    "        // the minute past the hour, e.g. 49 for 4:49 pm",
    "        native \"js\" code \"return new GraceNum(this.data.value.getMinutes())\"",
    "    }",
    "    method second -> Number {",
    "        // the second past the minute, e.g. 33 for 4:49:33 pm",
    "        native \"js\" code \"return new GraceNum(this.data.value.getSeconds())\"",
    "    }",
    "    method millisecond -> Number {",
    "        // the second past the minute, e.g. 33 for 4:49:33 pm",
    "        native \"js\" code \"return new GraceNum(this.data.value.getMilliseconds())\"",
    "    }    ",
    "    method asString -> String {",
    "        native \"js\" code \"return new GraceString(this.data.value.toString())\"",
    "    }",
    "    method asDateString -> String {",
    "        native \"js\" code \"return new GraceString(this.data.value.toDateString());\"",
    "    }",
    "    method asTimeString -> String {",
    "        native \"js\" code \"return new GraceString(this.data.value.toTimeString());\"",
    "    }",
    "    method asIsoString -> String {",
    "        native \"js\" code \"return new GraceString(this.data.value.toISOString());\"",
    "    }",
    "    method asMilliseconds -> Number {",
    "        // date as milliseconds since the epoch",
    "        native \"js\" code \"return new GraceNum(this.data.value.getTime());\"",
    "    }",
    "    method timeZoneOffsetInMinutes -> Number {",
    "        // the offset between this time and UTC, as a Number of minutes.",
    "",
    "        // why not present this as a date?  Because, as a date, it's always zero",
    "        native \"js\" code \"return new GraceNum(this.data.value.getTimezoneOffset());\"",
    "    }",
    "    method timeZoneOffsetInHours -> Number {",
    "        // the offset between this time and UTC, as a Number of hours.",
    "        native \"js\" code \"return new GraceNum(this.data.value.getTimezoneOffset() / 60);\"",
    "    }",
    "    method + (other:Date) -> Date {",
    "        milliseconds(self.asMilliseconds + other.asMilliseconds)",
    "    }",
    "    method - (other:Date) -> Date {",
    "        milliseconds(self.asMilliseconds - other.asMilliseconds)",
    "    }    ",
    "    method * (factor:Number) -> Date {",
    "        milliseconds(self.asMilliseconds * factor)",
    "    }    ",
    "    method reverseTimesNumber (factor:Number) -> Date {",
    "        milliseconds(factor * self.asMilliseconds)",
    "    }",
    "    method == (other:Date) -> Boolean {",
    "        self.asMilliseconds == other.asMilliseconds",
    "    }",
    "}",
    "",
    "class milliseconds(n) -> Date {",
    "    // n milliseconds since the epoch ",
    "    inherit basic",
    "    def value = native \"js\" code \"result = new Date(var_n._value);\"",
    "}",
    "    ",
    "method seconds(n) -> Date {",
    "    // n seconds in milliseconds",
    "    milliseconds(1000 * n)",
    "}",
    "",
    "method minutes(n) -> Date {",
    "    seconds(60 * n)",
    "}",
    "",
    "method hours(n) -> Date {",
    "    minutes(60 * n)",
    "}",
    "",
    "method days(n) -> Date {",
    "    hours(24 * n)",
    "}",
    "",
    "method weeks(n) -> Date {",
    "    days(7 * n)",
    "}",
    "",
    "class now {",
    "    inherit basic",
    "    def value = native \"js\" code \"result = new Date();\"",
    "}",
    "",
    "class fromString(dateString) {",
    "    inherit basic",
    "    def value = native \"js\" code \"result = new Date(var_dateString._value);\"",
    "}",
    "",
    "    " ];
}
function gracecode_date() {
  importedModules["date"] = this;
  var module$date = this;
  this.definitionModule = "date";
  this.definitionLine = 1;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_date_1");
  this.outer_date_1 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode typedec
  // Type decl Date
  var func1 = function(argcv) {    // method Date, line 1
    var returnTarget = invocationCount;
    invocationCount++;
    setLineNumber(1);    // compilenode typeliteral
    //   Type literal 
    var typeLit2 = new GraceType("Date");
    typeLit2.typeMethods.push("year");
    typeLit2.typeMethods.push("month");
    typeLit2.typeMethods.push("date");
    typeLit2.typeMethods.push("day");
    typeLit2.typeMethods.push("hour");
    typeLit2.typeMethods.push("minute");
    typeLit2.typeMethods.push("second");
    typeLit2.typeMethods.push("asString");
    typeLit2.typeMethods.push("asDateString");
    typeLit2.typeMethods.push("asTimeString");
    typeLit2.typeMethods.push("asIsoString");
    typeLit2.typeMethods.push("timeZoneOffsetInMinutes");
    typeLit2.typeMethods.push("timeZoneOffsetInHours");
    typeLit2.typeMethods.push("==(1)");
    typeLit2.typeMethods.push("+(1)");
    typeLit2.typeMethods.push("-(1)");
    typeLit2.typeMethods.push("*(1)");
    return typeLit2;
  };    // end of method Date
  function memofunc1(argcv) {
      if (! this.data["memo$Date"])    // parameterless memo function
          this.data["memo$Date"] = func1.call(this, argcv);
      return this.data["memo$Date"];
  };
  this.methods["Date"] = memofunc1;
  memofunc1.methodName = "Date";
  memofunc1.paramCounts = [0];
  memofunc1.paramNames = [];
  memofunc1.definitionLine = 1;
  memofunc1.definitionModule = "date";
  func1.methodName = "Date";
  func1.paramCounts = [0];
  func1.paramNames = [];
  func1.definitionLine = 1;
  func1.definitionModule = "date";
  var func3 = function(argcv) {    // method basic, line 38
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("basic", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("basic", "date", 38);
    var ouc_init = this.methods["basic$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method basic
  this.methods["basic"] = func3;
  func3.methodName = "basic";
  func3.paramCounts = [0];
  func3.paramNames = [];
  func3.definitionLine = 38;
  func3.definitionModule = "date";
  var func4 = function(argcv, inheritingObject, aliases, exclusions) {    // method basic$build(_,_,_), line 38
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("basic", 0, numArgs - 0);
    }
    var obj5_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_date_38");
      this.outer_date_38 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(41);    // reuse call
      var initFun6 = selfRequest(var_prelude, "equality$build(3)", [null], this, [], []);  // compileReuseCall
      var func7 = function(argcv) {    // method year, line 42
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("year", 0, numArgs - 0);
        }
        setLineNumber(44);    // compilenode call
        var result = GraceDone;    // start native code from line 44
        return new GraceNum(this.data.value.getFullYear())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method year", "Number");
        return result;
      };    // end of method year
      this.methods["year"] = func7;
      func7.methodName = "year";
      func7.paramCounts = [0];
      func7.paramNames = [];
      func7.definitionLine = 42;
      func7.definitionModule = "date";
      var func8 = function(argcv) {    // method month, line 46
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("month", 0, numArgs - 0);
        }
        setLineNumber(48);    // compilenode call
        var result = GraceDone;    // start native code from line 48
        return new GraceNum(this.data.value.getMonth() + 1)   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method month", "Number");
        return result;
      };    // end of method month
      this.methods["month"] = func8;
      func8.methodName = "month";
      func8.paramCounts = [0];
      func8.paramNames = [];
      func8.definitionLine = 46;
      func8.definitionModule = "date";
      var func9 = function(argcv) {    // method date, line 50
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("date", 0, numArgs - 0);
        }
        setLineNumber(52);    // compilenode call
        var result = GraceDone;    // start native code from line 52
        return new GraceNum(this.data.value.getDate())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method date", "Number");
        return result;
      };    // end of method date
      this.methods["date"] = func9;
      func9.methodName = "date";
      func9.paramCounts = [0];
      func9.paramNames = [];
      func9.definitionLine = 50;
      func9.definitionModule = "date";
      var func10 = function(argcv) {    // method day, line 54
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("day", 0, numArgs - 0);
        }
        setLineNumber(56);    // compilenode call
        var result = GraceDone;    // start native code from line 56
        return new GraceNum(this.data.value.getDay() + 1)   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method day", "Number");
        return result;
      };    // end of method day
      this.methods["day"] = func10;
      func10.methodName = "day";
      func10.paramCounts = [0];
      func10.paramNames = [];
      func10.definitionLine = 54;
      func10.definitionModule = "date";
      var func11 = function(argcv) {    // method hour, line 58
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("hour", 0, numArgs - 0);
        }
        setLineNumber(60);    // compilenode call
        var result = GraceDone;    // start native code from line 60
        return new GraceNum(this.data.value.getHours())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method hour", "Number");
        return result;
      };    // end of method hour
      this.methods["hour"] = func11;
      func11.methodName = "hour";
      func11.paramCounts = [0];
      func11.paramNames = [];
      func11.definitionLine = 58;
      func11.definitionModule = "date";
      var func12 = function(argcv) {    // method minute, line 62
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("minute", 0, numArgs - 0);
        }
        setLineNumber(64);    // compilenode call
        var result = GraceDone;    // start native code from line 64
        return new GraceNum(this.data.value.getMinutes())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method minute", "Number");
        return result;
      };    // end of method minute
      this.methods["minute"] = func12;
      func12.methodName = "minute";
      func12.paramCounts = [0];
      func12.paramNames = [];
      func12.definitionLine = 62;
      func12.definitionModule = "date";
      var func13 = function(argcv) {    // method second, line 66
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("second", 0, numArgs - 0);
        }
        setLineNumber(68);    // compilenode call
        var result = GraceDone;    // start native code from line 68
        return new GraceNum(this.data.value.getSeconds())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method second", "Number");
        return result;
      };    // end of method second
      this.methods["second"] = func13;
      func13.methodName = "second";
      func13.paramCounts = [0];
      func13.paramNames = [];
      func13.definitionLine = 66;
      func13.definitionModule = "date";
      var func14 = function(argcv) {    // method millisecond, line 70
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("millisecond", 0, numArgs - 0);
        }
        setLineNumber(72);    // compilenode call
        var result = GraceDone;    // start native code from line 72
        return new GraceNum(this.data.value.getMilliseconds())   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method millisecond", "Number");
        return result;
      };    // end of method millisecond
      this.methods["millisecond"] = func14;
      func14.methodName = "millisecond";
      func14.paramCounts = [0];
      func14.paramNames = [];
      func14.definitionLine = 70;
      func14.definitionModule = "date";
      var func15 = function(argcv) {    // method asString, line 74
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asString", 0, numArgs - 0);
        }
        setLineNumber(75);    // compilenode call
        var result = GraceDone;    // start native code from line 75
        return new GraceString(this.data.value.toString())   // end native code insertion
        assertTypeOrMsg(result, var_String, "result of method asString", "String");
        return result;
      };    // end of method asString
      this.methods["asString"] = func15;
      func15.methodName = "asString";
      func15.paramCounts = [0];
      func15.paramNames = [];
      func15.definitionLine = 74;
      func15.definitionModule = "date";
      var func16 = function(argcv) {    // method asDateString, line 77
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asDateString", 0, numArgs - 0);
        }
        setLineNumber(78);    // compilenode call
        var result = GraceDone;    // start native code from line 78
        return new GraceString(this.data.value.toDateString());   // end native code insertion
        assertTypeOrMsg(result, var_String, "result of method asDateString", "String");
        return result;
      };    // end of method asDateString
      this.methods["asDateString"] = func16;
      func16.methodName = "asDateString";
      func16.paramCounts = [0];
      func16.paramNames = [];
      func16.definitionLine = 77;
      func16.definitionModule = "date";
      var func17 = function(argcv) {    // method asTimeString, line 80
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asTimeString", 0, numArgs - 0);
        }
        setLineNumber(81);    // compilenode call
        var result = GraceDone;    // start native code from line 81
        return new GraceString(this.data.value.toTimeString());   // end native code insertion
        assertTypeOrMsg(result, var_String, "result of method asTimeString", "String");
        return result;
      };    // end of method asTimeString
      this.methods["asTimeString"] = func17;
      func17.methodName = "asTimeString";
      func17.paramCounts = [0];
      func17.paramNames = [];
      func17.definitionLine = 80;
      func17.definitionModule = "date";
      var func18 = function(argcv) {    // method asIsoString, line 83
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asIsoString", 0, numArgs - 0);
        }
        setLineNumber(84);    // compilenode call
        var result = GraceDone;    // start native code from line 84
        return new GraceString(this.data.value.toISOString());   // end native code insertion
        assertTypeOrMsg(result, var_String, "result of method asIsoString", "String");
        return result;
      };    // end of method asIsoString
      this.methods["asIsoString"] = func18;
      func18.methodName = "asIsoString";
      func18.paramCounts = [0];
      func18.paramNames = [];
      func18.definitionLine = 83;
      func18.definitionModule = "date";
      var func19 = function(argcv) {    // method asMilliseconds, line 86
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("asMilliseconds", 0, numArgs - 0);
        }
        setLineNumber(88);    // compilenode call
        var result = GraceDone;    // start native code from line 88
        return new GraceNum(this.data.value.getTime());   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method asMilliseconds", "Number");
        return result;
      };    // end of method asMilliseconds
      this.methods["asMilliseconds"] = func19;
      func19.methodName = "asMilliseconds";
      func19.paramCounts = [0];
      func19.paramNames = [];
      func19.definitionLine = 86;
      func19.definitionModule = "date";
      var func20 = function(argcv) {    // method timeZoneOffsetInMinutes, line 90
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("timeZoneOffsetInMinutes", 0, numArgs - 0);
        }
        setLineNumber(94);    // compilenode call
        var result = GraceDone;    // start native code from line 94
        return new GraceNum(this.data.value.getTimezoneOffset());   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method timeZoneOffsetInMinutes", "Number");
        return result;
      };    // end of method timeZoneOffsetInMinutes
      this.methods["timeZoneOffsetInMinutes"] = func20;
      func20.methodName = "timeZoneOffsetInMinutes";
      func20.paramCounts = [0];
      func20.paramNames = [];
      func20.definitionLine = 90;
      func20.definitionModule = "date";
      var func21 = function(argcv) {    // method timeZoneOffsetInHours, line 96
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 0)) {
            raiseTypeArgError("timeZoneOffsetInHours", 0, numArgs - 0);
        }
        setLineNumber(98);    // compilenode call
        var result = GraceDone;    // start native code from line 98
        return new GraceNum(this.data.value.getTimezoneOffset() / 60);   // end native code insertion
        assertTypeOrMsg(result, var_Number, "result of method timeZoneOffsetInHours", "Number");
        return result;
      };    // end of method timeZoneOffsetInHours
      this.methods["timeZoneOffsetInHours"] = func21;
      func21.methodName = "timeZoneOffsetInHours";
      func21.paramCounts = [0];
      func21.paramNames = [];
      func21.definitionLine = 96;
      func21.definitionModule = "date";
      var func22 = function(argcv, var_other) {    // method +(_), line 100
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("+(_)", 0, numArgs - 1);
        }
        setLineNumber(100);    // compilenode member
        // call case 2: outer request
        var call23 = selfRequest(importedModules["date"], "Date", [0]);
        assertTypeOrMsg(var_other, call23, "argument to request of `+(_)`", "Date");
        setLineNumber(101);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call25 = selfRequest(this, "asMilliseconds", [0]);
        // call case 6: other requests
        var call26 = request(var_other, "asMilliseconds", [0]);
        var sum27 = request(call25, "+(1)", [1], call26);
        // call case 2: outer request
        var call24 = selfRequest(importedModules["date"], "milliseconds(1)", [1], sum27);
        setLineNumber(100);    // compilenode member
        // call case 2: outer request
        var call28 = selfRequest(importedModules["date"], "Date", [0]);
        setLineNumber(101);    // typecheck
        assertTypeOrMsg(call24, call28, "result of method +(_)", "Date");
        return call24;
      };    // end of method +(_)
      this.methods["+(1)"] = func22;
      func22.methodName = "+(1)";
      func22.paramCounts = [1];
      func22.paramNames = ["other"];
      func22.definitionLine = 100;
      func22.definitionModule = "date";
      var func29 = function(argcv, var_other) {    // method -(_), line 103
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("-(_)", 0, numArgs - 1);
        }
        setLineNumber(103);    // compilenode member
        // call case 2: outer request
        var call30 = selfRequest(importedModules["date"], "Date", [0]);
        assertTypeOrMsg(var_other, call30, "argument to request of `-(_)`", "Date");
        setLineNumber(104);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call32 = selfRequest(this, "asMilliseconds", [0]);
        // call case 6: other requests
        var call33 = request(var_other, "asMilliseconds", [0]);
        var diff34 = request(call32, "-(1)", [1], call33);
        // call case 2: outer request
        var call31 = selfRequest(importedModules["date"], "milliseconds(1)", [1], diff34);
        setLineNumber(103);    // compilenode member
        // call case 2: outer request
        var call35 = selfRequest(importedModules["date"], "Date", [0]);
        setLineNumber(104);    // typecheck
        assertTypeOrMsg(call31, call35, "result of method -(_)", "Date");
        return call31;
      };    // end of method -(_)
      this.methods["-(1)"] = func29;
      func29.methodName = "-(1)";
      func29.paramCounts = [1];
      func29.paramNames = ["other"];
      func29.definitionLine = 103;
      func29.definitionModule = "date";
      var func36 = function(argcv, var_factor) {    // method *(_), line 106
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("*(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_factor, var_Number, "argument to request of `*(_)`", "Number");
        setLineNumber(107);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call38 = selfRequest(this, "asMilliseconds", [0]);
        var prod39 = request(call38, "*(1)", [1], var_factor);
        // call case 2: outer request
        var call37 = selfRequest(importedModules["date"], "milliseconds(1)", [1], prod39);
        setLineNumber(106);    // compilenode member
        // call case 2: outer request
        var call40 = selfRequest(importedModules["date"], "Date", [0]);
        setLineNumber(107);    // typecheck
        assertTypeOrMsg(call37, call40, "result of method *(_)", "Date");
        return call37;
      };    // end of method *(_)
      func36.paramTypes = [];
      func36.paramTypes.push([type_Number, "factor"]);
      this.methods["*(1)"] = func36;
      func36.methodName = "*(1)";
      func36.paramCounts = [1];
      func36.paramNames = ["factor"];
      func36.definitionLine = 106;
      func36.definitionModule = "date";
      var func41 = function(argcv, var_factor) {    // method reverseTimesNumber(_), line 109
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("reverseTimesNumber(_)", 0, numArgs - 1);
        }
        assertTypeOrMsg(var_factor, var_Number, "argument to request of `reverseTimesNumber(_)`", "Number");
        setLineNumber(110);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call43 = selfRequest(this, "asMilliseconds", [0]);
        var prod44 = request(var_factor, "*(1)", [1], call43);
        // call case 2: outer request
        var call42 = selfRequest(importedModules["date"], "milliseconds(1)", [1], prod44);
        setLineNumber(109);    // compilenode member
        // call case 2: outer request
        var call45 = selfRequest(importedModules["date"], "Date", [0]);
        setLineNumber(110);    // typecheck
        assertTypeOrMsg(call42, call45, "result of method reverseTimesNumber(_)", "Date");
        return call42;
      };    // end of method reverseTimesNumber(_)
      func41.paramTypes = [];
      func41.paramTypes.push([type_Number, "factor"]);
      this.methods["reverseTimesNumber(1)"] = func41;
      func41.methodName = "reverseTimesNumber(1)";
      func41.paramCounts = [1];
      func41.paramNames = ["factor"];
      func41.definitionLine = 109;
      func41.definitionModule = "date";
      var func46 = function(argcv, var_other) {    // method ==(_), line 112
        var returnTarget = invocationCount;
        invocationCount++;
        const numArgs = arguments.length - 1;
        if ((numArgs > 1) && (numArgs !== 1)) {
            raiseTypeArgError("==(_)", 0, numArgs - 1);
        }
        setLineNumber(112);    // compilenode member
        // call case 2: outer request
        var call47 = selfRequest(importedModules["date"], "Date", [0]);
        assertTypeOrMsg(var_other, call47, "argument to request of `==(_)`", "Date");
        setLineNumber(113);    // compilenode member
        // call case 4: self request with 0 args and 0 typeArgs 
        var call48 = selfRequest(this, "asMilliseconds", [0]);
        // call case 6: other requests
        var call49 = request(var_other, "asMilliseconds", [0]);
        var opresult50 = request(call48, "==(1)", [1], call49);
        assertTypeOrMsg(opresult50, var_Boolean, "result of method ==(_)", "Boolean");
        return opresult50;
      };    // end of method ==(_)
      this.methods["==(1)"] = func46;
      func46.methodName = "==(1)";
      func46.paramCounts = [1];
      func46.paramNames = ["other"];
      func46.definitionLine = 112;
      func46.definitionModule = "date";
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 38;
          m.definitionModule = "date";
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
      var obj5_init = function() {    // init of object on line 38
      };
      return obj5_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj5_init = obj5_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj5_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method basic$build(_,_,_)
  this.methods["basic$build(3)"] = func4;
  func4.methodName = "basic$build(3)";
  func4.paramCounts = [0];
  func4.paramNames = [];
  func4.definitionLine = 38;
  func4.definitionModule = "date";
  var func51 = function(argcv, var_n) {    // method milliseconds(_), line 117
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("milliseconds(_)", 0, numArgs - 1);
    }
    var ouc = emptyGraceObject("milliseconds(_)", "date", 117);
    var ouc_init = this.methods["milliseconds(1)$build(3)"].call(this, null, var_n, ouc, [], []);
    ouc_init.call(ouc);
    setLineNumber(117);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call52 = selfRequest(this, "Date", [0]);
    setLineNumber(121);    // typecheck
    assertTypeOrMsg(ouc, call52, "object returned from milliseconds(_)", "Date");
    return ouc;
  };    // end of method milliseconds(_)
  this.methods["milliseconds(1)"] = func51;
  func51.methodName = "milliseconds(1)";
  func51.paramCounts = [1];
  func51.paramNames = ["n"];
  func51.definitionLine = 117;
  func51.definitionModule = "date";
  var func53 = function(argcv, var_n, inheritingObject, aliases, exclusions) {    // method milliseconds(_)$build(_,_,_), line 117
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("milliseconds(_)", 0, numArgs - 1);
    }
    var obj54_build = function(ignore, var_n, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_date_117");
      this.outer_date_117 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(119);    // reuse call
      var initFun55 = selfRequest(importedModules["date"], "basic$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.value = undefined;
      var reader56_value = function() {  // reader method value
          if (this.data.value === undefined) raiseUninitializedVariable("value");
          return this.data.value;
      };
      reader56_value.isDef = true;
      reader56_value.confidential = true;
      this.methods["value"] = reader56_value;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 117;
          m.definitionModule = "date";
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
      var obj54_init = function() {    // init of object on line 117
        initFun55.call(this);
        setLineNumber(120);    // compilenode call
        var result = GraceDone;    // start native code from line 120
        result = new Date(var_n._value);   // end native code insertion
        this.data.value = result;
      };
      return obj54_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj54_init = obj54_build.call(inheritingObject, null, var_n, this, aliases, exclusions);
    return obj54_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method milliseconds(_)$build(_,_,_)
  this.methods["milliseconds(1)$build(3)"] = func53;
  func53.methodName = "milliseconds(1)$build(3)";
  func53.paramCounts = [1];
  func53.paramNames = ["n"];
  func53.definitionLine = 117;
  func53.definitionModule = "date";
  var func57 = function(argcv, var_n) {    // method seconds(_), line 123
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("seconds(_)", 0, numArgs - 1);
    }
    setLineNumber(125);    // compilenode num
    var prod59 = request(new GraceNum(1000), "*(1)", [1], var_n);
    // call case 2: outer request
    var call58 = selfRequest(importedModules["date"], "milliseconds(1)", [1], prod59);
    setLineNumber(123);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call60 = selfRequest(this, "Date", [0]);
    setLineNumber(125);    // typecheck
    assertTypeOrMsg(call58, call60, "result of method seconds(_)", "Date");
    return call58;
  };    // end of method seconds(_)
  this.methods["seconds(1)"] = func57;
  func57.methodName = "seconds(1)";
  func57.paramCounts = [1];
  func57.paramNames = ["n"];
  func57.definitionLine = 123;
  func57.definitionModule = "date";
  var func61 = function(argcv, var_n) {    // method minutes(_), line 128
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("minutes(_)", 0, numArgs - 1);
    }
    setLineNumber(129);    // compilenode num
    var prod63 = request(new GraceNum(60), "*(1)", [1], var_n);
    // call case 2: outer request
    var call62 = selfRequest(importedModules["date"], "seconds(1)", [1], prod63);
    setLineNumber(128);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call64 = selfRequest(this, "Date", [0]);
    setLineNumber(129);    // typecheck
    assertTypeOrMsg(call62, call64, "result of method minutes(_)", "Date");
    return call62;
  };    // end of method minutes(_)
  this.methods["minutes(1)"] = func61;
  func61.methodName = "minutes(1)";
  func61.paramCounts = [1];
  func61.paramNames = ["n"];
  func61.definitionLine = 128;
  func61.definitionModule = "date";
  var func65 = function(argcv, var_n) {    // method hours(_), line 132
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("hours(_)", 0, numArgs - 1);
    }
    setLineNumber(133);    // compilenode num
    var prod67 = request(new GraceNum(60), "*(1)", [1], var_n);
    // call case 2: outer request
    var call66 = selfRequest(importedModules["date"], "minutes(1)", [1], prod67);
    setLineNumber(132);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call68 = selfRequest(this, "Date", [0]);
    setLineNumber(133);    // typecheck
    assertTypeOrMsg(call66, call68, "result of method hours(_)", "Date");
    return call66;
  };    // end of method hours(_)
  this.methods["hours(1)"] = func65;
  func65.methodName = "hours(1)";
  func65.paramCounts = [1];
  func65.paramNames = ["n"];
  func65.definitionLine = 132;
  func65.definitionModule = "date";
  var func69 = function(argcv, var_n) {    // method days(_), line 136
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("days(_)", 0, numArgs - 1);
    }
    setLineNumber(137);    // compilenode num
    var prod71 = request(new GraceNum(24), "*(1)", [1], var_n);
    // call case 2: outer request
    var call70 = selfRequest(importedModules["date"], "hours(1)", [1], prod71);
    setLineNumber(136);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call72 = selfRequest(this, "Date", [0]);
    setLineNumber(137);    // typecheck
    assertTypeOrMsg(call70, call72, "result of method days(_)", "Date");
    return call70;
  };    // end of method days(_)
  this.methods["days(1)"] = func69;
  func69.methodName = "days(1)";
  func69.paramCounts = [1];
  func69.paramNames = ["n"];
  func69.definitionLine = 136;
  func69.definitionModule = "date";
  var func73 = function(argcv, var_n) {    // method weeks(_), line 140
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("weeks(_)", 0, numArgs - 1);
    }
    setLineNumber(141);    // compilenode num
    var prod75 = request(new GraceNum(7), "*(1)", [1], var_n);
    // call case 2: outer request
    var call74 = selfRequest(importedModules["date"], "days(1)", [1], prod75);
    setLineNumber(140);    // compilenode member
    // call case 4: self request with 0 args and 0 typeArgs 
    var call76 = selfRequest(this, "Date", [0]);
    setLineNumber(141);    // typecheck
    assertTypeOrMsg(call74, call76, "result of method weeks(_)", "Date");
    return call74;
  };    // end of method weeks(_)
  this.methods["weeks(1)"] = func73;
  func73.methodName = "weeks(1)";
  func73.paramCounts = [1];
  func73.paramNames = ["n"];
  func73.definitionLine = 140;
  func73.definitionModule = "date";
  var func77 = function(argcv) {    // method now, line 144
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("now", 0, numArgs - 0);
    }
    var ouc = emptyGraceObject("now", "date", 144);
    var ouc_init = this.methods["now$build(3)"].call(this, null, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method now
  this.methods["now"] = func77;
  func77.methodName = "now";
  func77.paramCounts = [0];
  func77.paramNames = [];
  func77.definitionLine = 144;
  func77.definitionModule = "date";
  var func78 = function(argcv, inheritingObject, aliases, exclusions) {    // method now$build(_,_,_), line 144
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 0) && (numArgs !== 0)) {
        raiseTypeArgError("now", 0, numArgs - 0);
    }
    var obj79_build = function(ignore, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_date_144");
      this.outer_date_144 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(145);    // reuse call
      var initFun80 = selfRequest(importedModules["date"], "basic$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.value = undefined;
      var reader81_value = function() {  // reader method value
          if (this.data.value === undefined) raiseUninitializedVariable("value");
          return this.data.value;
      };
      reader81_value.isDef = true;
      reader81_value.confidential = true;
      this.methods["value"] = reader81_value;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 144;
          m.definitionModule = "date";
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
      var obj79_init = function() {    // init of object on line 144
        initFun80.call(this);
        setLineNumber(146);    // compilenode call
        var result = GraceDone;    // start native code from line 146
        result = new Date();   // end native code insertion
        this.data.value = result;
      };
      return obj79_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj79_init = obj79_build.call(inheritingObject, null, this, aliases, exclusions);
    return obj79_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method now$build(_,_,_)
  this.methods["now$build(3)"] = func78;
  func78.methodName = "now$build(3)";
  func78.paramCounts = [0];
  func78.paramNames = [];
  func78.definitionLine = 144;
  func78.definitionModule = "date";
  var func82 = function(argcv, var_dateString) {    // method fromString(_), line 149
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 1;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("fromString(_)", 0, numArgs - 1);
    }
    var ouc = emptyGraceObject("fromString(_)", "date", 149);
    var ouc_init = this.methods["fromString(1)$build(3)"].call(this, null, var_dateString, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method fromString(_)
  this.methods["fromString(1)"] = func82;
  func82.methodName = "fromString(1)";
  func82.paramCounts = [1];
  func82.paramNames = ["dateString"];
  func82.definitionLine = 149;
  func82.definitionModule = "date";
  var func83 = function(argcv, var_dateString, inheritingObject, aliases, exclusions) {    // method fromString(_)$build(_,_,_), line 149
    var returnTarget = invocationCount;
    invocationCount++;
    const numArgs = arguments.length - 4;
    if ((numArgs > 1) && (numArgs !== 1)) {
        raiseTypeArgError("fromString(_)", 0, numArgs - 1);
    }
    var obj84_build = function(ignore, var_dateString, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_date_149");
      this.outer_date_149 = outerObj;
      const inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          const exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth]; };
      setLineNumber(150);    // reuse call
      var initFun85 = selfRequest(importedModules["date"], "basic$build(3)", [null], this, [], []);  // compileReuseCall
      this.data.value = undefined;
      var reader86_value = function() {  // reader method value
          if (this.data.value === undefined) raiseUninitializedVariable("value");
          return this.data.value;
      };
      reader86_value.isDef = true;
      reader86_value.confidential = true;
      this.methods["value"] = reader86_value;
      const overridenByAliases = { };
      for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
          const a = aliases[aix];
          const newNm = a.newName;
          const oldNm = a.oldName;
          overridenByAliases[newNm] = this.methods[newNm];
          const m = confidentialVersion(overridenByAliases[oldNm] || this.methods[oldNm], newNm);
          m.definitionLine = 149;
          m.definitionModule = "date";
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
      var obj84_init = function() {    // init of object on line 149
        initFun85.call(this);
        setLineNumber(151);    // compilenode call
        var result = GraceDone;    // start native code from line 151
        result = new Date(var_dateString._value);   // end native code insertion
        this.data.value = result;
      };
      return obj84_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj84_init = obj84_build.call(inheritingObject, null, var_dateString, this, aliases, exclusions);
    return obj84_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method fromString(_)$build(_,_,_)
  this.methods["fromString(1)$build(3)"] = func83;
  func83.methodName = "fromString(1)$build(3)";
  func83.paramCounts = [1];
  func83.paramNames = ["dateString"];
  func83.definitionLine = 149;
  func83.definitionModule = "date";
  return this;
}
if (typeof global !== "undefined")
  global.gracecode_date = gracecode_date;
if (typeof window !== "undefined")
  window.gracecode_date = gracecode_date;
gracecode_date.imports = ["standardGrace"];
gracecode_date.definitionModule = "date";
gracecode_date.definitionLine = 1;
