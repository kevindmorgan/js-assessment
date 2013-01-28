if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (endStr) {
            return str + ', ' + endStr;
        };
    },

    makeClosures : function(arr, fn) {
        var funcs = [],
            funcFactory = function (fn, x) {
                return function () {
                    return fn(x);
                };
            };

        for (var i = 0; i < arr.length; i++) {
            funcs.push(funcFactory(fn, arr[i]));
        }

        return funcs;
    },

    partial : function(fn, str1, str2) {
        return function (str) {
            return fn(str1, str2, str);
        };
    },

    useArguments : function() {
        return Array.prototype.slice.call(arguments).reduce(function (memo, x) { return memo + x; });
    },

    callIt : function(fn) {
        return fn.apply(
            this,
            Array.prototype.slice.call(arguments, 1)
        );
    },

    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        
        return function () {
            var allArgs = Array.prototype.concat.call(
                args,
                Array.prototype.slice.call(arguments)
            );
            return fn.apply(this, allArgs);
        };
    }
  };
});
