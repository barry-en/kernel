(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../private/var/folders/k0/l6n3lg0s1qb2fkyt6f2p5z3m0000gn/T/0.6055298313413748.WebWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../private/var/folders/k0/l6n3lg0s1qb2fkyt6f2p5z3m0000gn/T/0.6055298313413748.WebWorker.js":
/*!************************************************************************************************!*\
  !*** /private/var/folders/k0/l6n3lg0s1qb2fkyt6f2p5z3m0000gn/T/0.6055298313413748.WebWorker.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Barry_go_src_barry_en_kernel_node_modules_decentraland_rpc_lib_common_transports_WebWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/decentraland-rpc/lib/common/transports/WebWorker */ \"./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js\");\n\n\nconst imported = __webpack_require__(/*! ./packages/gif-processor/worker.ts */ \"./packages/gif-processor/worker.ts\")\n\nif (imported && imported.__esModule && imported['default']) {\n  new imported['default'](Object(_Users_Barry_go_src_barry_en_kernel_node_modules_decentraland_rpc_lib_common_transports_WebWorker__WEBPACK_IMPORTED_MODULE_0__[\"WebWorkerTransport\"])(self))\n}\n\n\n//# sourceURL=webpack:////private/var/folders/k0/l6n3lg0s1qb2fkyt6f2p5z3m0000gn/T/0.6055298313413748.WebWorker.js?");

/***/ }),

/***/ "./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js ***!
  \**************************************************************************/
/*! exports provided: WebWorkerTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebWorkerTransport\", function() { return WebWorkerTransport; });\nfunction WebWorkerTransport(worker) {\n    const api = {\n        onConnect(handler) {\n            worker.addEventListener('message', () => handler(), { once: true });\n        },\n        onError(handler) {\n            worker.addEventListener('error', (err) => {\n                if (err.error) {\n                    handler(err.error);\n                }\n                else if (err.message) {\n                    handler(Object.assign(new Error(err.message), {\n                        colno: err.colno,\n                        error: err.error,\n                        filename: err.filename,\n                        lineno: err.lineno,\n                        message: err.message\n                    }));\n                }\n            });\n        },\n        onMessage(handler) {\n            worker.addEventListener('message', (message) => {\n                handler(message.data);\n            });\n        },\n        sendMessage(message) {\n            worker.postMessage(message);\n        },\n        close() {\n            if ('terminate' in worker) {\n                ;\n                worker.terminate();\n            }\n            else if ('close' in worker) {\n                ;\n                worker.close();\n            }\n        }\n    };\n    return api;\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViV29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi90cmFuc3BvcnRzL1dlYldvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBZTtJQUNoRCxNQUFNLEdBQUcsR0FBdUI7UUFDOUIsU0FBUyxDQUFDLE9BQU87WUFDZixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDckUsQ0FBQztRQUNELE9BQU8sQ0FBQyxPQUFPO1lBQ2IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQWUsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDbkI7cUJBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUN0QixPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3BDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNoQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTt3QkFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3FCQUNyQixDQUFDLENBQ0gsQ0FBQTtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFNBQVMsQ0FBQyxPQUFPO1lBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQXFCLEVBQUUsRUFBRTtnQkFDM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxXQUFXLENBQUMsT0FBTztZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdCLENBQUM7UUFDRCxLQUFLO1lBQ0gsSUFBSSxXQUFXLElBQUksTUFBTSxFQUFFO2dCQUV6QixDQUFDO2dCQUFDLE1BQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUM3QjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7Z0JBRTVCLENBQUM7Z0JBQUMsTUFBYyxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQ3pCO1FBQ0gsQ0FBQztLQUNGLENBQUE7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JpcHRpbmdUcmFuc3BvcnQgfSBmcm9tICcuLi9qc29uLXJwYy90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBJV29ya2VyIHtcbiAgdGVybWluYXRlPygpOiB2b2lkXG4gIGNsb3NlPygpOiB2b2lkXG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWRcbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiAnbWVzc2FnZScgfCAnZXJyb3InLCBsaXN0ZW5lcjogRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXZWJXb3JrZXJUcmFuc3BvcnQod29ya2VyOiBJV29ya2VyKTogU2NyaXB0aW5nVHJhbnNwb3J0IHtcbiAgY29uc3QgYXBpOiBTY3JpcHRpbmdUcmFuc3BvcnQgPSB7XG4gICAgb25Db25uZWN0KGhhbmRsZXIpIHtcbiAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gaGFuZGxlcigpLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9LFxuICAgIG9uRXJyb3IoaGFuZGxlcikge1xuICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycjogRXJyb3JFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXJyLmVycm9yKSB7XG4gICAgICAgICAgaGFuZGxlcihlcnIuZXJyb3IpXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICBoYW5kbGVyKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpLCB7XG4gICAgICAgICAgICAgIGNvbG5vOiBlcnIuY29sbm8sXG4gICAgICAgICAgICAgIGVycm9yOiBlcnIuZXJyb3IsXG4gICAgICAgICAgICAgIGZpbGVuYW1lOiBlcnIuZmlsZW5hbWUsXG4gICAgICAgICAgICAgIGxpbmVubzogZXJyLmxpbmVubyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25NZXNzYWdlKGhhbmRsZXIpIHtcbiAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2U6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBoYW5kbGVyKG1lc3NhZ2UuZGF0YSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSlcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgaWYgKCd0ZXJtaW5hdGUnIGluIHdvcmtlcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c2VtaWNvbG9uXG4gICAgICAgIDsod29ya2VyIGFzIGFueSkudGVybWluYXRlKClcbiAgICAgIH0gZWxzZSBpZiAoJ2Nsb3NlJyBpbiB3b3JrZXIpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnNlbWljb2xvblxuICAgICAgICA7KHdvcmtlciBhcyBhbnkpLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXBpXG59XG4iXX0=\n\n//# sourceURL=webpack:///./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js?");

/***/ }),

/***/ "./node_modules/gifuct-js/lib/deinterlace.js":
/*!***************************************************!*\
  !*** ./node_modules/gifuct-js/lib/deinterlace.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deinterlace = void 0;\n\n/**\r\n * Deinterlace function from https://github.com/shachaf/jsgif\r\n */\nvar deinterlace = function deinterlace(pixels, width) {\n  var newPixels = new Array(pixels.length);\n  var rows = pixels.length / width;\n\n  var cpRow = function cpRow(toRow, fromRow) {\n    var fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);\n    newPixels.splice.apply(newPixels, [toRow * width, width].concat(fromPixels));\n  }; // See appendix E.\n\n\n  var offsets = [0, 4, 2, 1];\n  var steps = [8, 8, 4, 2];\n  var fromRow = 0;\n\n  for (var pass = 0; pass < 4; pass++) {\n    for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {\n      cpRow(toRow, fromRow);\n      fromRow++;\n    }\n  }\n\n  return newPixels;\n};\n\nexports.deinterlace = deinterlace;\n\n//# sourceURL=webpack:///./node_modules/gifuct-js/lib/deinterlace.js?");

/***/ }),

/***/ "./node_modules/gifuct-js/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gifuct-js/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.decompressFrames = exports.decompressFrame = exports.parseGIF = void 0;\n\nvar _gif = _interopRequireDefault(__webpack_require__(/*! js-binary-schema-parser/lib/schemas/gif */ \"./node_modules/js-binary-schema-parser/lib/schemas/gif.js\"));\n\nvar _jsBinarySchemaParser = __webpack_require__(/*! js-binary-schema-parser */ \"./node_modules/js-binary-schema-parser/lib/index.js\");\n\nvar _uint = __webpack_require__(/*! js-binary-schema-parser/lib/parsers/uint8 */ \"./node_modules/js-binary-schema-parser/lib/parsers/uint8.js\");\n\nvar _deinterlace = __webpack_require__(/*! ./deinterlace */ \"./node_modules/gifuct-js/lib/deinterlace.js\");\n\nvar _lzw = __webpack_require__(/*! ./lzw */ \"./node_modules/gifuct-js/lib/lzw.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar parseGIF = function parseGIF(arrayBuffer) {\n  var byteData = new Uint8Array(arrayBuffer);\n  return (0, _jsBinarySchemaParser.parse)((0, _uint.buildStream)(byteData), _gif[\"default\"]);\n};\n\nexports.parseGIF = parseGIF;\n\nvar generatePatch = function generatePatch(image) {\n  var totalPixels = image.pixels.length;\n  var patchData = new Uint8ClampedArray(totalPixels * 4);\n\n  for (var i = 0; i < totalPixels; i++) {\n    var pos = i * 4;\n    var colorIndex = image.pixels[i];\n    var color = image.colorTable[colorIndex];\n    patchData[pos] = color[0];\n    patchData[pos + 1] = color[1];\n    patchData[pos + 2] = color[2];\n    patchData[pos + 3] = colorIndex !== image.transparentIndex ? 255 : 0;\n  }\n\n  return patchData;\n};\n\nvar decompressFrame = function decompressFrame(frame, gct, buildImagePatch) {\n  if (!frame.image) {\n    console.warn('gif frame does not have associated image.');\n    return;\n  }\n\n  var image = frame.image; // get the number of pixels\n\n  var totalPixels = image.descriptor.width * image.descriptor.height; // do lzw decompression\n\n  var pixels = (0, _lzw.lzw)(image.data.minCodeSize, image.data.blocks, totalPixels); // deal with interlacing if necessary\n\n  if (image.descriptor.lct.interlaced) {\n    pixels = (0, _deinterlace.deinterlace)(pixels, image.descriptor.width);\n  }\n\n  var resultImage = {\n    pixels: pixels,\n    dims: {\n      top: frame.image.descriptor.top,\n      left: frame.image.descriptor.left,\n      width: frame.image.descriptor.width,\n      height: frame.image.descriptor.height\n    }\n  }; // color table\n\n  if (image.descriptor.lct && image.descriptor.lct.exists) {\n    resultImage.colorTable = image.lct;\n  } else {\n    resultImage.colorTable = gct;\n  } // add per frame relevant gce information\n\n\n  if (frame.gce) {\n    resultImage.delay = (frame.gce.delay || 10) * 10; // convert to ms\n\n    resultImage.disposalType = frame.gce.extras.disposal; // transparency\n\n    if (frame.gce.extras.transparentColorGiven) {\n      resultImage.transparentIndex = frame.gce.transparentColorIndex;\n    }\n  } // create canvas usable imagedata if desired\n\n\n  if (buildImagePatch) {\n    resultImage.patch = generatePatch(resultImage);\n  }\n\n  return resultImage;\n};\n\nexports.decompressFrame = decompressFrame;\n\nvar decompressFrames = function decompressFrames(parsedGif, buildImagePatches) {\n  return parsedGif.frames.filter(function (f) {\n    return f.image;\n  }).map(function (f) {\n    return decompressFrame(f, parsedGif.gct, buildImagePatches);\n  });\n};\n\nexports.decompressFrames = decompressFrames;\n\n//# sourceURL=webpack:///./node_modules/gifuct-js/lib/index.js?");

/***/ }),

/***/ "./node_modules/gifuct-js/lib/lzw.js":
/*!*******************************************!*\
  !*** ./node_modules/gifuct-js/lib/lzw.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.lzw = void 0;\n\n/**\r\n * javascript port of java LZW decompression\r\n * Original java author url: https://gist.github.com/devunwired/4479231\r\n */\nvar lzw = function lzw(minCodeSize, data, pixelCount) {\n  var MAX_STACK_SIZE = 4096;\n  var nullCode = -1;\n  var npix = pixelCount;\n  var available, clear, code_mask, code_size, end_of_information, in_code, old_code, bits, code, i, datum, data_size, first, top, bi, pi;\n  var dstPixels = new Array(pixelCount);\n  var prefix = new Array(MAX_STACK_SIZE);\n  var suffix = new Array(MAX_STACK_SIZE);\n  var pixelStack = new Array(MAX_STACK_SIZE + 1); // Initialize GIF data stream decoder.\n\n  data_size = minCodeSize;\n  clear = 1 << data_size;\n  end_of_information = clear + 1;\n  available = clear + 2;\n  old_code = nullCode;\n  code_size = data_size + 1;\n  code_mask = (1 << code_size) - 1;\n\n  for (code = 0; code < clear; code++) {\n    prefix[code] = 0;\n    suffix[code] = code;\n  } // Decode GIF pixel stream.\n\n\n  var datum, bits, count, first, top, pi, bi;\n  datum = bits = count = first = top = pi = bi = 0;\n\n  for (i = 0; i < npix;) {\n    if (top === 0) {\n      if (bits < code_size) {\n        // get the next byte\n        datum += data[bi] << bits;\n        bits += 8;\n        bi++;\n        continue;\n      } // Get the next code.\n\n\n      code = datum & code_mask;\n      datum >>= code_size;\n      bits -= code_size; // Interpret the code\n\n      if (code > available || code == end_of_information) {\n        break;\n      }\n\n      if (code == clear) {\n        // Reset decoder.\n        code_size = data_size + 1;\n        code_mask = (1 << code_size) - 1;\n        available = clear + 2;\n        old_code = nullCode;\n        continue;\n      }\n\n      if (old_code == nullCode) {\n        pixelStack[top++] = suffix[code];\n        old_code = code;\n        first = code;\n        continue;\n      }\n\n      in_code = code;\n\n      if (code == available) {\n        pixelStack[top++] = first;\n        code = old_code;\n      }\n\n      while (code > clear) {\n        pixelStack[top++] = suffix[code];\n        code = prefix[code];\n      }\n\n      first = suffix[code] & 0xff;\n      pixelStack[top++] = first; // add a new string to the table, but only if space is available\n      // if not, just continue with current table until a clear code is found\n      // (deferred clear code implementation as per GIF spec)\n\n      if (available < MAX_STACK_SIZE) {\n        prefix[available] = old_code;\n        suffix[available] = first;\n        available++;\n\n        if ((available & code_mask) === 0 && available < MAX_STACK_SIZE) {\n          code_size++;\n          code_mask += available;\n        }\n      }\n\n      old_code = in_code;\n    } // Pop a pixel off the pixel stack.\n\n\n    top--;\n    dstPixels[pi++] = pixelStack[top];\n    i++;\n  }\n\n  for (i = pi; i < npix; i++) {\n    dstPixels[i] = 0; // clear missing pixels\n  }\n\n  return dstPixels;\n};\n\nexports.lzw = lzw;\n\n//# sourceURL=webpack:///./node_modules/gifuct-js/lib/lzw.js?");

/***/ }),

/***/ "./node_modules/js-binary-schema-parser/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-binary-schema-parser/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loop = exports.conditional = exports.parse = void 0;\n\nvar parse = function parse(stream, schema) {\n  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : result;\n\n  if (Array.isArray(schema)) {\n    schema.forEach(function (partSchema) {\n      return parse(stream, partSchema, result, parent);\n    });\n  } else if (typeof schema === 'function') {\n    schema(stream, result, parent, parse);\n  } else {\n    var key = Object.keys(schema)[0];\n\n    if (Array.isArray(schema[key])) {\n      parent[key] = {};\n      parse(stream, schema[key], result, parent[key]);\n    } else {\n      parent[key] = schema[key](stream, result, parent, parse);\n    }\n  }\n\n  return result;\n};\n\nexports.parse = parse;\n\nvar conditional = function conditional(schema, conditionFunc) {\n  return function (stream, result, parent, parse) {\n    if (conditionFunc(stream, result, parent)) {\n      parse(stream, schema, result, parent);\n    }\n  };\n};\n\nexports.conditional = conditional;\n\nvar loop = function loop(schema, continueFunc) {\n  return function (stream, result, parent, parse) {\n    var arr = [];\n\n    while (continueFunc(stream, result, parent)) {\n      var newParent = {};\n      parse(stream, schema, result, newParent);\n      arr.push(newParent);\n    }\n\n    return arr;\n  };\n};\n\nexports.loop = loop;\n\n//# sourceURL=webpack:///./node_modules/js-binary-schema-parser/lib/index.js?");

/***/ }),

/***/ "./node_modules/js-binary-schema-parser/lib/parsers/uint8.js":
/*!*******************************************************************!*\
  !*** ./node_modules/js-binary-schema-parser/lib/parsers/uint8.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.readBits = exports.readArray = exports.readUnsigned = exports.readString = exports.peekBytes = exports.readBytes = exports.peekByte = exports.readByte = exports.buildStream = void 0;\n\n// Default stream and parsers for Uint8TypedArray data type\nvar buildStream = function buildStream(uint8Data) {\n  return {\n    data: uint8Data,\n    pos: 0\n  };\n};\n\nexports.buildStream = buildStream;\n\nvar readByte = function readByte() {\n  return function (stream) {\n    return stream.data[stream.pos++];\n  };\n};\n\nexports.readByte = readByte;\n\nvar peekByte = function peekByte() {\n  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  return function (stream) {\n    return stream.data[stream.pos + offset];\n  };\n};\n\nexports.peekByte = peekByte;\n\nvar readBytes = function readBytes(length) {\n  return function (stream) {\n    return stream.data.subarray(stream.pos, stream.pos += length);\n  };\n};\n\nexports.readBytes = readBytes;\n\nvar peekBytes = function peekBytes(length) {\n  return function (stream) {\n    return stream.data.subarray(stream.pos, stream.pos + length);\n  };\n};\n\nexports.peekBytes = peekBytes;\n\nvar readString = function readString(length) {\n  return function (stream) {\n    return Array.from(readBytes(length)(stream)).map(function (value) {\n      return String.fromCharCode(value);\n    }).join('');\n  };\n};\n\nexports.readString = readString;\n\nvar readUnsigned = function readUnsigned(littleEndian) {\n  return function (stream) {\n    var bytes = readBytes(2)(stream);\n    return littleEndian ? (bytes[1] << 8) + bytes[0] : (bytes[0] << 8) + bytes[1];\n  };\n};\n\nexports.readUnsigned = readUnsigned;\n\nvar readArray = function readArray(byteSize, totalOrFunc) {\n  return function (stream, result, parent) {\n    var total = typeof totalOrFunc === 'function' ? totalOrFunc(stream, result, parent) : totalOrFunc;\n    var parser = readBytes(byteSize);\n    var arr = new Array(total);\n\n    for (var i = 0; i < total; i++) {\n      arr[i] = parser(stream);\n    }\n\n    return arr;\n  };\n};\n\nexports.readArray = readArray;\n\nvar subBitsTotal = function subBitsTotal(bits, startIndex, length) {\n  var result = 0;\n\n  for (var i = 0; i < length; i++) {\n    result += bits[startIndex + i] && Math.pow(2, length - i - 1);\n  }\n\n  return result;\n};\n\nvar readBits = function readBits(schema) {\n  return function (stream) {\n    var _byte = readByte()(stream); // convert the byte to bit array\n\n\n    var bits = new Array(8);\n\n    for (var i = 0; i < 8; i++) {\n      bits[7 - i] = !!(_byte & 1 << i);\n    } // convert the bit array to values based on the schema\n\n\n    return Object.keys(schema).reduce(function (res, key) {\n      var def = schema[key];\n\n      if (def.length) {\n        res[key] = subBitsTotal(bits, def.index, def.length);\n      } else {\n        res[key] = bits[def.index];\n      }\n\n      return res;\n    }, {});\n  };\n};\n\nexports.readBits = readBits;\n\n//# sourceURL=webpack:///./node_modules/js-binary-schema-parser/lib/parsers/uint8.js?");

/***/ }),

/***/ "./node_modules/js-binary-schema-parser/lib/schemas/gif.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-binary-schema-parser/lib/schemas/gif.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _ = __webpack_require__(/*! ../ */ \"./node_modules/js-binary-schema-parser/lib/index.js\");\n\nvar _uint = __webpack_require__(/*! ../parsers/uint8 */ \"./node_modules/js-binary-schema-parser/lib/parsers/uint8.js\");\n\n// a set of 0x00 terminated subblocks\nvar subBlocksSchema = {\n  blocks: function blocks(stream) {\n    var terminator = 0x00;\n    var chunks = [];\n    var total = 0;\n\n    for (var size = (0, _uint.readByte)()(stream); size !== terminator; size = (0, _uint.readByte)()(stream)) {\n      chunks.push((0, _uint.readBytes)(size)(stream));\n      total += size;\n    }\n\n    var result = new Uint8Array(total);\n    var offset = 0;\n\n    for (var i = 0; i < chunks.length; i++) {\n      result.set(chunks[i], offset);\n      offset += chunks[i].length;\n    }\n\n    return result;\n  }\n}; // global control extension\n\nvar gceSchema = (0, _.conditional)({\n  gce: [{\n    codes: (0, _uint.readBytes)(2)\n  }, {\n    byteSize: (0, _uint.readByte)()\n  }, {\n    extras: (0, _uint.readBits)({\n      future: {\n        index: 0,\n        length: 3\n      },\n      disposal: {\n        index: 3,\n        length: 3\n      },\n      userInput: {\n        index: 6\n      },\n      transparentColorGiven: {\n        index: 7\n      }\n    })\n  }, {\n    delay: (0, _uint.readUnsigned)(true)\n  }, {\n    transparentColorIndex: (0, _uint.readByte)()\n  }, {\n    terminator: (0, _uint.readByte)()\n  }]\n}, function (stream) {\n  var codes = (0, _uint.peekBytes)(2)(stream);\n  return codes[0] === 0x21 && codes[1] === 0xf9;\n}); // image pipeline block\n\nvar imageSchema = (0, _.conditional)({\n  image: [{\n    code: (0, _uint.readByte)()\n  }, {\n    descriptor: [{\n      left: (0, _uint.readUnsigned)(true)\n    }, {\n      top: (0, _uint.readUnsigned)(true)\n    }, {\n      width: (0, _uint.readUnsigned)(true)\n    }, {\n      height: (0, _uint.readUnsigned)(true)\n    }, {\n      lct: (0, _uint.readBits)({\n        exists: {\n          index: 0\n        },\n        interlaced: {\n          index: 1\n        },\n        sort: {\n          index: 2\n        },\n        future: {\n          index: 3,\n          length: 2\n        },\n        size: {\n          index: 5,\n          length: 3\n        }\n      })\n    }]\n  }, (0, _.conditional)({\n    lct: (0, _uint.readArray)(3, function (stream, result, parent) {\n      return Math.pow(2, parent.descriptor.lct.size + 1);\n    })\n  }, function (stream, result, parent) {\n    return parent.descriptor.lct.exists;\n  }), {\n    data: [{\n      minCodeSize: (0, _uint.readByte)()\n    }, subBlocksSchema]\n  }]\n}, function (stream) {\n  return (0, _uint.peekByte)()(stream) === 0x2c;\n}); // plain text block\n\nvar textSchema = (0, _.conditional)({\n  text: [{\n    codes: (0, _uint.readBytes)(2)\n  }, {\n    blockSize: (0, _uint.readByte)()\n  }, {\n    preData: function preData(stream, result, parent) {\n      return (0, _uint.readBytes)(parent.text.blockSize)(stream);\n    }\n  }, subBlocksSchema]\n}, function (stream) {\n  var codes = (0, _uint.peekBytes)(2)(stream);\n  return codes[0] === 0x21 && codes[1] === 0x01;\n}); // application block\n\nvar applicationSchema = (0, _.conditional)({\n  application: [{\n    codes: (0, _uint.readBytes)(2)\n  }, {\n    blockSize: (0, _uint.readByte)()\n  }, {\n    id: function id(stream, result, parent) {\n      return (0, _uint.readString)(parent.blockSize)(stream);\n    }\n  }, subBlocksSchema]\n}, function (stream) {\n  var codes = (0, _uint.peekBytes)(2)(stream);\n  return codes[0] === 0x21 && codes[1] === 0xff;\n}); // comment block\n\nvar commentSchema = (0, _.conditional)({\n  comment: [{\n    codes: (0, _uint.readBytes)(2)\n  }, subBlocksSchema]\n}, function (stream) {\n  var codes = (0, _uint.peekBytes)(2)(stream);\n  return codes[0] === 0x21 && codes[1] === 0xfe;\n});\nvar schema = [{\n  header: [{\n    signature: (0, _uint.readString)(3)\n  }, {\n    version: (0, _uint.readString)(3)\n  }]\n}, {\n  lsd: [{\n    width: (0, _uint.readUnsigned)(true)\n  }, {\n    height: (0, _uint.readUnsigned)(true)\n  }, {\n    gct: (0, _uint.readBits)({\n      exists: {\n        index: 0\n      },\n      resolution: {\n        index: 1,\n        length: 3\n      },\n      sort: {\n        index: 4\n      },\n      size: {\n        index: 5,\n        length: 3\n      }\n    })\n  }, {\n    backgroundColorIndex: (0, _uint.readByte)()\n  }, {\n    pixelAspectRatio: (0, _uint.readByte)()\n  }]\n}, (0, _.conditional)({\n  gct: (0, _uint.readArray)(3, function (stream, result) {\n    return Math.pow(2, result.lsd.gct.size + 1);\n  })\n}, function (stream, result) {\n  return result.lsd.gct.exists;\n}), // content frames\n{\n  frames: (0, _.loop)([gceSchema, applicationSchema, commentSchema, imageSchema, textSchema], function (stream) {\n    var nextCode = (0, _uint.peekByte)()(stream); // rather than check for a terminator, we should check for the existence\n    // of an ext or image block to avoid infinite loops\n    //var terminator = 0x3B;\n    //return nextCode !== terminator;\n\n    return nextCode === 0x21 || nextCode === 0x2c;\n  })\n}];\nvar _default = schema;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/js-binary-schema-parser/lib/schemas/gif.js?");

/***/ }),

/***/ "./packages/gif-processor/processors/gifuct-jsProcessor.ts":
/*!*****************************************************************!*\
  !*** ./packages/gif-processor/processors/gifuct-jsProcessor.ts ***!
  \*****************************************************************/
/*! exports provided: processGif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processGif\", function() { return processGif; });\n/* harmony import */ var gifuct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gifuct-js */ \"./node_modules/gifuct-js/lib/index.js\");\n/* harmony import */ var gifuct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gifuct_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst composedFrameCanvas = new OffscreenCanvas(1, 1);\nconst composedFrameCtx = composedFrameCanvas.getContext('2d');\nconst frameCanvas = new OffscreenCanvas(1, 1);\nconst frameCanvasCtx = frameCanvas.getContext('2d');\nconst resizedFrameCanvas = new OffscreenCanvas(1, 1);\nconst resizedFrameCtx = composedFrameCanvas.getContext('2d');\nconst maxGIFDimension = 512;\nlet prevFrameImageData;\nvar FrameDisposalMethod;\n(function (FrameDisposalMethod) {\n    FrameDisposalMethod[FrameDisposalMethod[\"NOT_SPECIFIED\"] = 0] = \"NOT_SPECIFIED\";\n    FrameDisposalMethod[FrameDisposalMethod[\"NO_DISPOSAL\"] = 1] = \"NO_DISPOSAL\";\n    FrameDisposalMethod[FrameDisposalMethod[\"RESTORE_TO_BACKGROUND_COLOR\"] = 2] = \"RESTORE_TO_BACKGROUND_COLOR\";\n    FrameDisposalMethod[FrameDisposalMethod[\"RESTORE_TO_PREVIOUS\"] = 3] = \"RESTORE_TO_PREVIOUS\";\n})(FrameDisposalMethod || (FrameDisposalMethod = {}));\nasync function processGif(buffer) {\n    const parsedGif = await Object(gifuct_js__WEBPACK_IMPORTED_MODULE_0__[\"parseGIF\"])(buffer);\n    const decompressedFrames = Object(gifuct_js__WEBPACK_IMPORTED_MODULE_0__[\"decompressFrames\"])(parsedGif, true);\n    const frameDelays = [];\n    const framesImageData = [];\n    const gifDims = decompressedFrames[0].dims;\n    composedFrameCanvas.width = gifDims.width;\n    composedFrameCanvas.height = gifDims.height;\n    const { width, height, shouldResize } = getResizingInfo(gifDims);\n    resizedFrameCanvas.width = width;\n    resizedFrameCanvas.height = height;\n    let isFirstFrame = true;\n    for (const frame of decompressedFrames) {\n        frameDelays.push(frame.delay);\n        const processedImageData = generateFinalImageData(frame, shouldResize, isFirstFrame);\n        if (processedImageData) {\n            framesImageData.push(processedImageData.data.buffer);\n        }\n        isFirstFrame = false;\n    }\n    return {\n        imagesData: framesImageData,\n        width: width,\n        height: height,\n        frameDelays: frameDelays\n    };\n}\nfunction getResizingInfo(gifDims) {\n    let width = gifDims.width;\n    let height = gifDims.height;\n    const shouldResize = width > maxGIFDimension || height > maxGIFDimension;\n    if (shouldResize) {\n        const scalingFactor = width > height ? width / maxGIFDimension : height / maxGIFDimension;\n        width = width / scalingFactor;\n        height = height / scalingFactor;\n    }\n    return { width, height, shouldResize };\n}\nfunction generateFinalImageData(frame, hasToBeResized, isFirstFrame) {\n    if (!frameCanvasCtx || !composedFrameCtx) {\n        return undefined;\n    }\n    if (!isFirstFrame) {\n        restorePrevFrame();\n    }\n    setFrameCanvas(frame);\n    let finalImageData = setComposedFrameCanvas(frameCanvas, frame);\n    if (frame.disposalType !== FrameDisposalMethod.RESTORE_TO_BACKGROUND_COLOR &&\n        frame.disposalType !== FrameDisposalMethod.RESTORE_TO_PREVIOUS) {\n        setPrevFrameImage(finalImageData);\n    }\n    composedFrameCtx.setTransform(1, 0, 0, 1, 0, 0);\n    if (finalImageData && hasToBeResized) {\n        finalImageData = resizeImage(composedFrameCanvas, resizedFrameCanvas.width, resizedFrameCanvas.height);\n    }\n    return finalImageData;\n}\nfunction setFrameCanvas(frame) {\n    if (!frameCanvasCtx) {\n        return undefined;\n    }\n    frameCanvas.width = frame.dims.width;\n    frameCanvas.height = frame.dims.height;\n    const frameImageData = frameCanvasCtx.createImageData(frame.dims.width, frame.dims.height);\n    frameImageData.data.set(frame.patch);\n    frameCanvasCtx.putImageData(frameImageData, 0, 0);\n    return frameImageData;\n}\nfunction setComposedFrameCanvas(image, frame) {\n    if (!composedFrameCtx) {\n        return undefined;\n    }\n    composedFrameCtx.scale(1, -1);\n    composedFrameCtx.drawImage(image, frame.dims.left, -(composedFrameCanvas.height - frame.dims.top));\n    return composedFrameCtx.getImageData(0, 0, composedFrameCanvas.width, composedFrameCanvas.height);\n}\nfunction setPrevFrameImage(imageData) {\n    prevFrameImageData = imageData;\n}\nfunction restorePrevFrame() {\n    if (!composedFrameCtx) {\n        return undefined;\n    }\n    composedFrameCtx.putImageData(prevFrameImageData, 0, 0);\n}\nfunction resizeImage(canvas, width, height) {\n    if (!composedFrameCtx || !resizedFrameCtx) {\n        return undefined;\n    }\n    composedFrameCtx.setTransform(1, 0, 0, 1, 0, 0);\n    resizedFrameCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, width, height);\n    return resizedFrameCtx.getImageData(0, 0, width, height);\n}\n\n\n//# sourceURL=webpack:///./packages/gif-processor/processors/gifuct-jsProcessor.ts?");

/***/ }),

/***/ "./packages/gif-processor/worker.ts":
/*!******************************************!*\
  !*** ./packages/gif-processor/worker.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var shared_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/logger */ \"./packages/shared/logger/index.ts\");\n/* harmony import */ var _processors_gifuct_jsProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors/gifuct-jsProcessor */ \"./packages/gif-processor/processors/gifuct-jsProcessor.ts\");\n\n\n{\n    const payloads = [];\n    let payloadInProcess = null;\n    let abortController;\n    self.onmessage = (e) => {\n        if (e.data.type === 'FETCH') {\n            EnqueuePayload(e);\n        }\n        else if (e.data.type === 'CANCEL') {\n            CancelPayload(e);\n        }\n    };\n    function EnqueuePayload(e) {\n        payloads.push(e);\n        if (payloads.length === 1) {\n            const promise = ConsumePayload();\n            promise.catch((error) => shared_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(error));\n        }\n    }\n    function CancelPayload(e) {\n        const isDownloading = abortController && payloadInProcess && payloadInProcess.data.id === e.data.id;\n        if (isDownloading) {\n            abortController.abort();\n            return;\n        }\n        for (let i = 0; i < payloads.length; i++) {\n            if (payloads[i].data.id === e.data.id) {\n                payloads.slice(i, 0);\n                return;\n            }\n        }\n    }\n    async function ConsumePayload() {\n        while (payloads.length > 0) {\n            payloadInProcess = payloads[0];\n            await DownloadAndProcessGIF(payloadInProcess);\n            payloadInProcess = null;\n            payloads.splice(0, 1);\n        }\n    }\n    async function DownloadAndProcessGIF(e) {\n        abortController = new AbortController();\n        const signal = abortController.signal;\n        try {\n            const imageFetch = fetch(e.data.url, { signal });\n            const response = await imageFetch;\n            abortController = null;\n            const buffer = await response.arrayBuffer();\n            const gifData = await Object(_processors_gifuct_jsProcessor__WEBPACK_IMPORTED_MODULE_1__[\"processGif\"])(buffer);\n            self.postMessage({\n                success: true,\n                arrayBufferFrames: gifData.imagesData,\n                width: gifData.width,\n                height: gifData.height,\n                delays: gifData.frameDelays,\n                url: e.data.url,\n                id: e.data.id\n            }, gifData.imagesData);\n        }\n        catch (err) {\n            abortController = null;\n            self.postMessage({\n                success: false,\n                id: e.data.id\n            });\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./packages/gif-processor/worker.ts?");

/***/ }),

/***/ "./packages/shared/logger/index.ts":
/*!*****************************************!*\
  !*** ./packages/shared/logger/index.ts ***!
  \*****************************************/
/*! exports provided: createDummyLogger, createLogger, createUnityLogger, defaultLogger, default, createGenericLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDummyLogger\", function() { return createDummyLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLogger\", function() { return createLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUnityLogger\", function() { return createUnityLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLogger\", function() { return defaultLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGenericLogComponent\", function() { return createGenericLogComponent; });\nfunction createDummyLogger() {\n    return {\n        error(_message, ..._args) {\n        },\n        log(_message, ..._args) {\n        },\n        warn(_message, ..._args) {\n        },\n        info(_message, ..._args) {\n        },\n        trace(_message, ..._args) {\n        }\n    };\n}\nfunction createDefaultLogger(type, prefix, subPrefix = '') {\n    const kernelPrefix = `${type}:${prefix} `;\n    return {\n        error(message, ...args) {\n            if (typeof message === 'object' && message.stack) {\n                console.error(kernelPrefix, subPrefix, message, ...args, message.stack);\n            }\n            else {\n                console.error(kernelPrefix, subPrefix, message, ...args);\n            }\n        },\n        log(message, ...args) {\n            if (args && args[0] && args[0].startsWith && args[0].startsWith('The entity is already in the engine.')) {\n                return;\n            }\n            console.log(kernelPrefix, subPrefix, message, ...args);\n        },\n        warn(message, ...args) {\n            console.log(kernelPrefix, subPrefix, message, ...args);\n        },\n        info(message, ...args) {\n            console.info(kernelPrefix, subPrefix, message, ...args);\n        },\n        trace(message, ...args) {\n            console.trace(kernelPrefix, subPrefix, message, ...args);\n        }\n    };\n}\nfunction createLogger(prefix, subPrefix = '') {\n    return createDefaultLogger('kernel', prefix, subPrefix);\n}\nfunction createUnityLogger() {\n    return createDefaultLogger('unity', '');\n}\nconst defaultLogger = createLogger('');\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultLogger);\nfunction createGenericLogComponent() {\n    return {\n        getLogger(loggerName) {\n            return {\n                log(message, extra) {\n                    defaultLogger.log(loggerName, message, extra);\n                },\n                warn(message, extra) {\n                    defaultLogger.warn(loggerName, message, extra);\n                },\n                info(message, extra) {\n                    defaultLogger.info(loggerName, message, extra);\n                },\n                trace(message, extra) {\n                    defaultLogger.trace(loggerName, message, extra);\n                },\n                error(error, extra) {\n                    let message = `${error}`;\n                    let printTrace = true;\n                    if (error instanceof Error && 'stack' in error && typeof error.stack === 'string') {\n                        if (error.stack.includes(error.message)) {\n                            message = error.stack;\n                            printTrace = false;\n                        }\n                    }\n                    defaultLogger.error(loggerName, message, extra || error);\n                    if (printTrace) {\n                        console.trace();\n                    }\n                }\n            };\n        }\n    };\n}\n\n\n//# sourceURL=webpack:///./packages/shared/logger/index.ts?");

/***/ })

/******/ })));