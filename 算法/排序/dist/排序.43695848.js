// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"bubbleSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubbleSort = bubbleSort;
exports.bubbleSort2 = bubbleSort2;
/**
 *冒泡排序
 *
 * @export
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var _ref = [arr[j + 1], arr[j]];
        arr[j] = _ref[0];
        arr[j + 1] = _ref[1];
      }
    }
  }

  return arr;
}

/**
 *改进后的冒泡排序
 *
 * @export
 * @param {*} arr
 * @returns
 */
function bubbleSort2(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var _ref2 = [arr[j + 1], arr[j]];
        arr[j] = _ref2[0];
        arr[j + 1] = _ref2[1];
      }
    }
  }

  return arr;
}
},{}],"selectionSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectionSort = selectionSort;
/**
 *选择排序
 *
 * @export
 * @param {Array} arr
 * @returns
 */
function selectionSort(arr) {
  var length = arr.length;
  var minIndex = void 0;

  for (var i = 0; i < length - 1; i++) {
    minIndex = i;

    for (var j = i; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      var _ref = [arr[minIndex], arr[i]];
      arr[i] = _ref[0];
      arr[minIndex] = _ref[1];
    }
  }
  return arr;
}
},{}],"mergeSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSort = mergeSort;
/**
 *归并排序
 *
 * @export
 * @param {*} arr
 */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  return recursion(array);
}

function recursion(arr) {
  var length = arr.length;
  var mid = Math.floor(length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, length);
  return merge(recursion(left), recursion(right));
}

function merge(left, right) {
  var res = [],
      li = 0,
      ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[li]) {
      res.push(left[li]);
      li++;
    } else {
      res.push(right[ri]);
      ri++;
    }
  }

  while (li < left.length) {
    res.push(left[li]);
    li++;
  }

  while (ri < right.length) {
    res.push(right[ri]);
    ri++;
  }

  return res;
}
},{}],"quickSort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSort = quickSort;
function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var lesser = [];
  var greater = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (element < pivot) {
      lesser.push(element);
    } else if (element > pivot) {
      greater.push(element);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _bubbleSort = require("./bubbleSort");

var _selectionSort = require("./selectionSort");

var _mergeSort = require("./mergeSort");

var _quickSort = require("./quickSort");

var arr = [8, 7, 6, 5, 4, 3, 2, 1];

// arr = bubbleSort(arr);
// arr = bubbleSort2(arr);
// arr = selectionSort(arr);
// arr = mergeSort(arr)
arr = (0, _quickSort.quickSort)(arr);
console.log(arr);
},{"./bubbleSort":"bubbleSort.js","./selectionSort":"selectionSort.js","./mergeSort":"mergeSort.js","./quickSort":"quickSort.js"}],"../../../../.nvm/versions/node/v8.11.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '65378' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.nvm/versions/node/v8.11.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/排序.43695848.map