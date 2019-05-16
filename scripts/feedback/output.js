// The logging and runtime error reporting system.

"use strict";

var $ = require("jquery");

exports.setup = function (output) {
  function scroll() {
    output.scrollTop(0).scrollTop(output.children().last().position().top);
  }

  function newChunk(text) {
    return $("<p>").text(text);
  }

  function newError(text) {
    return $("<p>").addClass("error").html($("<div>").text(text));
  }

  function newTrace() {
    return $("<ol>").addClass("trace");
  }

  function newTraceLine(text) {
    return $("<li>").text(text);
  }

  return {
    "write": function (content) {
      output.append(newChunk(content));
      scroll();
    },

    "clear": function () {
      output.children().remove();
    },

    "error": function (error) {
      var location, mlMatch;

      if (typeof error === "string") {
        output.append(newError(error));
        return;
      } else if (error.text) {
        output.append(newError(error.text));
        return;
      }

      if (error.stack !== undefined) {
        location = error.stack;
      } else {
        location = '    in "' + error.module + '"';

        if (error.line && (error.line != 0)) {   // not null and not 0 or "0"
          location += " (line " + error.line + ", column ";
          if (mlMatch = error.column.match( /^(\d+)-(\d+):(\d+)$/ )) {
              location += mlMatch[1] + " - line " + mlMatch[2] +
                            ", column " + mlMatch[3] + ")";
          } else {
              location += error.column + ")";
          }
        }
      }

      output.append(newError(error.message)
        .append(newTrace().append(newTraceLine(location))));
    }
  };
};
