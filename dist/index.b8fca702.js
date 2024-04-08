// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
// Модуль с основными функциями (инициализация, кнопки, слушатели)
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "cancelModal", ()=>cancelModal);
parcelHelpers.export(exports, "taskConfirm", ()=>taskConfirm);
parcelHelpers.export(exports, "todoHeader", ()=>todoHeader);
parcelHelpers.export(exports, "progressHeader", ()=>progressHeader);
parcelHelpers.export(exports, "completedHeader", ()=>completedHeader);
parcelHelpers.export(exports, "modalTitle", ()=>modalTitle);
parcelHelpers.export(exports, "modalDescription", ()=>modalDescription);
parcelHelpers.export(exports, "modalUser", ()=>modalUser);
parcelHelpers.export(exports, "todoContainer", ()=>todoContainer);
parcelHelpers.export(exports, "progressContainer", ()=>progressContainer);
parcelHelpers.export(exports, "completedContainer", ()=>completedContainer);
parcelHelpers.export(exports, "deleteAll", ()=>deleteAll);
var _loadTasksJs = require("./loadTasks.js");
var _localStorageJs = require("./localStorage.js");
var _eventHandlersJs = require("./eventHandlers.js");
var _modalJs = require("./modal.js");
var _dragDropJs = require("./drag&drop.js");
var _cardTransferJs = require("./cardTransfer.js");
var _hideCategoriesJs = require("./hideCategories.js");
var _deleteAllCompletedJs = require("./deleteAllCompleted.js");
var _additionalFunctionsJs = require("./additionalFunctions.js");
// Проверка наличия данных в localStorage и создание пустого массива, если данных нет
if (!localStorage.getItem("tasks")) localStorage.setItem("tasks", JSON.stringify([])); // Если его нет, то создаем его с пустым массивом в качестве значения
(0, _modalJs.createTaskModal)(); // Создаём модальное окно для добавления или редактирования карточки
const modal = document.getElementById("modal");
const cancelModal = document.getElementById("task__cancel");
const taskConfirm = document.getElementById("task__confirm");
const todoHeader = document.getElementById("todo__header");
const progressHeader = document.getElementById("progress__header");
const completedHeader = document.getElementById("completed__header");
const modalTitle = document.getElementById("modal__title");
const modalDescription = document.getElementById("modal__description");
const modalUser = document.getElementById("modal__user");
const todoContainer = document.getElementById("todo__container");
const progressContainer = document.getElementById("progress__container");
const completedContainer = document.getElementById("completed__container");
const deleteAll = document.getElementById("completed__delete-all");
// Создаём переменную для хранения редактируемой карточки (изначально null)
let editingCard = null;
(0, _eventHandlersJs.addWindowEventListeners)(); // Вызов функции для добавления обработчиков событий к окну
(0, _dragDropJs.addEventListenerForDragAndDrop)(); // Вызов функции для добавления обработчиков событий на Drag&Drop
// Добавляем слушатель событий на весь документ
document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("card__edit")) {
        modal.style.display = "block"; // Показываем модальное окно
        // Получаем ссылку на редактируемую карточку
        editingCard = e.target.closest(".card"); // Получаем ссылку на редактируемую карточку
        let card = e.target.closest(".card");
        // Заполняем поля модального окна значениями из карточки
        modalTitle.value = card.querySelector(".card__title").textContent;
        modalDescription.value = card.querySelector(".card__description").textContent;
        // Получаем имя пользователя из карточки
        const userName = card.querySelector(".card__user").textContent;
        for(let i = 0; i < modalUser.options.length; i++)if (modalUser.options[i].text === userName) {
            modalUser.selectedIndex = i;
            break; // Выходим из цикла, когда нашли нужного пользователя
        }
    }
    if (e.target.classList.contains("todo__add")) {
        // Удаляем статус редактируемой карточки
        editingCard = null;
        // Показываем модальное окно
        modal.style.display = "block";
    }
    if (e.target === taskConfirm) // Передаём пустую или редактируемую карточку
    (0, _modalJs.taskModalConfirm)(editingCard);
    if (e.target === deleteAll) // Запускаем функцию удаления всех завершённых карточек
    (0, _deleteAllCompletedJs.deleteAllCompleted)();
    if (e.target === cancelModal) {
        // Закрываем модальное окно
        modal.style.display = "none";
        // Обнуляем модальное окно
        (0, _modalJs.modalReset)();
    }
    if (e.target === modal) {
        modal.style.display = "none";
        // Обнуляем модальное окно
        (0, _modalJs.modalReset)();
    }
    if (e.target.closest(".todo__header") === todoHeader) (0, _hideCategoriesJs.hideTodo)();
    if (e.target.closest(".progress__header") === progressHeader) (0, _hideCategoriesJs.hideProgress)();
    if (e.target.closest(".completed__header") === completedHeader) (0, _hideCategoriesJs.hideCompleted)();
    if (e.target.classList.contains("card__delete")) {
        // Находим карточку, которую нужно удалить
        const card = e.target.closest(".card");
        // Получаем id карточки и преобразуем его в число
        const id = Number(card.dataset.id);
        // Удаляем карточку из DOM
        card.remove();
        // Получаем текущие задачи из Local Storage
        const tasks = (0, _localStorageJs.getDate)();
        // Удаляем задачу с соответствующим id из массива задач
        const updatedTasks = tasks.filter((task)=>task.id !== id);
        // Обновляем Local Storage с новым массивом задач
        (0, _localStorageJs.setDate)(updatedTasks);
        // Обновляем счётчики
        (0, _loadTasksJs.updateCounts)();
        // Обновляем видимость кнопки удаления всех карточек
        (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
    }
    if (e.target.classList.contains("card__forward")) {
        const card = e.target.closest(".card"); // Находим карточку, к которой относится кнопка
        if (card.parentElement === todoContainer) (0, _cardTransferJs.moveToInProgress)(card); // Перемещаем её в InProgress
        else if (card.parentElement === progressContainer) (0, _cardTransferJs.moveToCompleted)(card); // Перемещаем её в Completed
    }
    if (e.target.classList.contains("card__back")) {
        const card = e.target.closest(".card"); // Находим карточку, к которой относится кнопка
        if (card.parentElement === progressContainer) (0, _cardTransferJs.moveToTodo)(card); // Перемещаем её в ToDo
        else if (card.parentElement === completedContainer) (0, _cardTransferJs.moveToInProgress)(card); // Перемещаем её в InProgress
    }
});
// Обработчик события нажатия на кнопку 'Escape'
document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape") {
        if (modal.style.display === "block") {
            // Закрываем модальное окно
            modal.style.display = "none";
            // Обнуляем модальное окно
            (0, _modalJs.modalReset)();
        }
    }
});

},{"./loadTasks.js":"gDMTf","./localStorage.js":"36iVX","./eventHandlers.js":"jCd3G","./modal.js":"1hEIt","./drag&drop.js":"5YQL7","./cardTransfer.js":"eRiW9","./hideCategories.js":"4PetE","./deleteAllCompleted.js":"8DQJW","./additionalFunctions.js":"1nMbn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDMTf":[function(require,module,exports) {
// Модуль с функциями загрузки и обновления списка задач
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функция для загрузки задач из localStorage и отображения их на странице
parcelHelpers.export(exports, "loadTasks", ()=>loadTasks);
// Функция для обновления счетчиков задач в категориях
parcelHelpers.export(exports, "updateCounts", ()=>updateCounts);
var _mainJs = require("./main.js");
var _localStorageJs = require("./localStorage.js");
var _additionalFunctionsJs = require("./additionalFunctions.js");
function loadTasks() {
    const tasks = (0, _localStorageJs.getDate)(); // Получаем текущий список задач из localStorage
    // Очищаем контейнеры карточек перед добавлением новых
    (0, _mainJs.todoContainer).innerHTML = "";
    (0, _mainJs.progressContainer).innerHTML = "";
    (0, _mainJs.completedContainer).innerHTML = "";
    tasks.forEach((task)=>{
        if (task.status === "todo") (0, _mainJs.todoContainer).innerHTML += createCard("todo", task); // Добавляем карточку в контейнер TODO
        else if (task.status === "progress") (0, _mainJs.progressContainer).innerHTML += createCard("progress", task); // Добавляем карточку в контейнер PROGRESS
        else if (task.status === "completed") (0, _mainJs.completedContainer).innerHTML += createCard("completed", task); // Добавляем карточку в контейнер COMPLETED
    });
    updateCounts(); // Обновляем счетчики задач
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
}
function updateCounts() {
    // Получаем количество всех задач
    const todoCountLength = (0, _mainJs.todoContainer).children.length;
    const progressCountLength = (0, _mainJs.progressContainer).children.length;
    const completedCountLength = (0, _mainJs.completedContainer).children.length;
    // Получаем текстовые поля счётчиков
    const todoCount = document.getElementById("todo__count");
    const progressCount = document.getElementById("progress__count");
    const completedCount = document.getElementById("completed__count");
    // Устанавливаем нужные счётчики
    todoCount.textContent = todoCountLength;
    progressCount.textContent = progressCountLength;
    completedCount.textContent = completedCountLength;
    // Проверяем содержимое контейнера TODO для отрисовки белой линии
    (0, _additionalFunctionsJs.addWhiteLine)();
}
function createCard(status, { id, title, description, time, userName }) {
    return `
    <div class="card ${status}__card" data-id="${id}" draggable="true">
      <div class="card__buttons">
        ${status === "todo" ? `
            <button class="card__edit todo__button">Edit</button>
            <button class="card__delete todo__button">Delete</button>
            <button class="card__forward todo__button">Start</button>
          ` : status === "progress" ? `
            <button class="card__back progress__button">Back</button>
            <button class="card__forward progress__button">Complete</button>
          ` : status === "completed" ? `
            <button class="card__back completed__button">Back</button>
            <button class="card__delete completed__button">Delete</button>
          ` : "" // Если статус не распознан, не добавляем кнопки
    }
      </div>
      <h3 class="card__title">${title}</h3>
      <p class="card__description">${description}</p>
      <div class="card__bottom">
        <p class="card__user">${userName}</p>
        <p class="card__time">${time}</p>
      </div>
    </div>
  `;
}

},{"./main.js":"3cYfC","./localStorage.js":"36iVX","./additionalFunctions.js":"1nMbn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36iVX":[function(require,module,exports) {
// Модуль с функциями для работы с localStorage
// Функции для работы с localStorage: сохранение и получение данных
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDate", ()=>setDate);
parcelHelpers.export(exports, "getDate", ()=>getDate);
function setDate(data) {
    localStorage.setItem("tasks", JSON.stringify(data)); // Сохраняем данные в localStorage с ключом 'tasks', предварительно преобразовав их в формат JSON
}
function getDate() {
    return JSON.parse(localStorage.getItem("tasks")); // Получаем данные из localStorage с ключом 'tasks' и преобразуем их из формата JSON в JavaScript-объект
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1nMbn":[function(require,module,exports) {
// Модуль с дополнительными функциями
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функция для получения списка пользователей с API 
parcelHelpers.export(exports, "getUsers", ()=>getUsers);
// Функция для обновления видимости кнопки "Удалить все" в зависимости от наличия завершенных задач
parcelHelpers.export(exports, "updateDeleteButtonVisibility", ()=>updateDeleteButtonVisibility);
// Функция для добавления белой линии в пустой контейнер TODO
parcelHelpers.export(exports, "addWhiteLine", ()=>addWhiteLine);
var _mainJs = require("./main.js");
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users") // Отправляем запрос на API для получения списка пользователей
    .then((response)=>response.json()) // Преобразуем ответ сервера в JSON формат
    .then((users)=>{
        const selector = document.querySelector(".modal__selector"); // Находим селектор (список выбора) в DOM по классу 'modal__selector'
        while(selector.firstChild)selector.firstChild.remove();
        // Создаем статическую опцию "Select user" и добавляем её в селектор
        const defaultOption = document.createElement("option");
        defaultOption.value = 0;
        defaultOption.textContent = "Select user";
        selector.appendChild(defaultOption);
        users.forEach((user)=>{
            const option = document.createElement("option");
            option.value = user.id; // Устанавливаем значение опции как id пользователя
            option.textContent = user.name; // Устанавливаем текст опции как имя пользователя
            selector.appendChild(option); // Добавляем опцию в селектор
        });
    });
}
function updateDeleteButtonVisibility() {
    if ((0, _mainJs.completedContainer).children.length === 0) (0, _mainJs.deleteAll).style.display = "none";
    else (0, _mainJs.deleteAll).style.display = "";
}
function addWhiteLine() {
    if ((0, _mainJs.todoContainer).children.length == 0) (0, _mainJs.todoContainer).classList.add("white-line"); // Если карточек нет, добавляем класс 'white-line' к контейнеру
    else (0, _mainJs.todoContainer).classList.remove("white-line"); // Если карточки есть, удаляем класс 'white-line' из контейнера
}

},{"./main.js":"3cYfC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCd3G":[function(require,module,exports) {
// Модуль с функцией добавления слушателей к объекту window
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функция для добавления обработчиков событий к окну (загрузка страницы и изменение localStorage)
parcelHelpers.export(exports, "addWindowEventListeners", ()=>addWindowEventListeners);
var _loadTasksJs = require("./loadTasks.js");
var _timeJs = require("./time.js");
function addWindowEventListeners() {
    window.addEventListener("load", function() {
        (0, _loadTasksJs.loadTasks)();
        (0, _timeJs.showTime)();
    });
    window.addEventListener("storage", function() {
        (0, _loadTasksJs.loadTasks)();
    });
}

},{"./loadTasks.js":"gDMTf","./time.js":"djMqB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djMqB":[function(require,module,exports) {
// Модуль с функцией отображения времени
// Функция отображения текущего времени
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showTime", ()=>showTime);
function showTime() {
    // Получаем текущую дату и время
    const date = new Date();
    // Преобразуем время в строку
    const timeString = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    // Помещаем время в элемент с id clock
    document.getElementById("clock").innerText = timeString;
    // Запускаем функцию showTime каждую секунду
    setTimeout(showTime, 1000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEIt":[function(require,module,exports) {
// Модуль с модальными окнами
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функция создания модального окна для добавления или редактирования карточки
parcelHelpers.export(exports, "createTaskModal", ()=>createTaskModal);
// Функция для обнуления модального окна
parcelHelpers.export(exports, "modalReset", ()=>modalReset);
// Функция для проверки введённых данных в модальном окне
parcelHelpers.export(exports, "validateInput", ()=>validateInput);
// Функция для обработки подтверждения в модальном окне (создание или обновление карточки)
parcelHelpers.export(exports, "taskModalConfirm", ()=>taskModalConfirm);
// Функция для создания модального окна подтверждения
parcelHelpers.export(exports, "createModal", ()=>createModal);
var _mainJs = require("./main.js");
var _loadTasksJs = require("./loadTasks.js");
var _localStorageJs = require("./localStorage.js");
var _additionalFunctionsJs = require("./additionalFunctions.js");
function createTaskModal() {
    const taskModal = document.createElement("div"); // Создаём div для модального окна
    // Добавляем HTML-структуру модального окна, включая поля ввода, кнопки и селектор
    taskModal.innerHTML = `<div class="modal__content"> 
    <div class="todo__card modal__card">
        <input class="modal__title" placeholder="Title" id="modal__title"></input>
        <textarea class="modal__description" rows="10" placeholder="Description" id="modal__description"></textarea>
        <div class="modal__bottom">
            <select class="modal__selector" name="modal__user" required="required" id="modal__user">
                <option value="0" selected>Select user</option>
            </select>
            <div class="card__buttons">
                <button class="todo__button" id="task__cancel"">Cancel</button>
                <button class="todo__button" id="task__confirm">Confirm</button>
            </div>
        </div>
    </div>
  </div>`;
    taskModal.classList.add("modal"); // Добавляем класс 'modal'
    taskModal.setAttribute("id", "modal"); // Устанавливаем id 'modal'
    document.body.prepend(taskModal); // Добавляем модальное окно в начало body
    (0, _additionalFunctionsJs.getUsers)(); // Загружаем список пользователей для селектора
}
function modalReset() {
    (0, _mainJs.modalTitle).style.border = "1px solid #4e50d3"; // Возвращаем стандартный цвет рамки для названия
    (0, _mainJs.modalDescription).style.border = "1px solid #4e50d3"; // Возвращаем стандартный цвет рамки для описания
    (0, _mainJs.modalUser).style.border = "1px solid #4e50d3"; // Возвращаем стандартный цвет рамки для выбора пользователя
    // Обнуляем все элементы модального окна
    (0, _mainJs.modalTitle).value = "";
    (0, _mainJs.modalDescription).value = "";
    (0, _mainJs.modalUser).value = 0;
}
function validateInput(title, description, user) {
    if (!title.trim()) {
        (0, _mainJs.modalTitle).style.border = "2px solid red"; // Устанавливаем красную рамку для поля ввода названия
        return false; // Возвращаем false, если название пустое
    } else (0, _mainJs.modalTitle).style.border = "1px solid #4e50d3"; // Устанавливаем стандартную рамку, если название не пустое
    if (!description.trim()) {
        (0, _mainJs.modalDescription).style.border = "2px solid red"; // Устанавливаем красную рамку для поля ввода описания
        return false; // Возвращаем false, если описание пустое
    } else (0, _mainJs.modalDescription).style.border = "1px solid #4e50d3"; // Устанавливаем стандартную рамку, если описание не пустое
    if (user == 0) {
        (0, _mainJs.modalUser).style.border = "2px solid red"; // Устанавливаем красную рамку для селектора пользователя
        return false; // Возвращаем false, если пользователь не выбран
    } else (0, _mainJs.modalUser).style.border = "1px solid #4e50d3"; // Устанавливаем стандартную рамку, если пользователь выбран
    return true; // Если все проверки пройдены возвращает true
}
function taskModalConfirm(editingCard) {
    const valueTitle = (0, _mainJs.modalTitle).value; // Получаем значение из поля ввода названия
    const valueDescription = (0, _mainJs.modalDescription).value; // Получаем значение из поля ввода описания
    const valueUser = (0, _mainJs.modalUser).value; // Получаем значение из поля выбора пользователя (ID)
    // Вызов функции проверки на наличие введённых значений
    if (!validateInput(valueTitle, valueDescription, valueUser)) return; // Останавливаем выполнение, если проверка не пройдена
    const tasks = (0, _localStorageJs.getDate)(); // Получаем текущий список задач из localStorage
    if (editingCard) {
        // Обновляем текстовое содержимое элементов карточки с новыми значениями из модального окна
        editingCard.querySelector(".card__title").textContent = (0, _mainJs.modalTitle).value;
        editingCard.querySelector(".card__description").textContent = (0, _mainJs.modalDescription).value;
        editingCard.querySelector(".card__user").textContent = (0, _mainJs.modalUser).options[(0, _mainJs.modalUser).selectedIndex].text;
        // Получаем текущий список задач из localStorage
        const tasks = (0, _localStorageJs.getDate)();
        // Находим задачу, которую нужно обновить, по id карточки
        const taskToUpdate = tasks.find((task)=>task.id === Number(editingCard.dataset.id));
        if (taskToUpdate) {
            // Обновляем свойства задачи с новыми значениями из модального окна
            taskToUpdate.title = (0, _mainJs.modalTitle).value;
            taskToUpdate.description = (0, _mainJs.modalDescription).value;
            taskToUpdate.userID = (0, _mainJs.modalUser).value;
            taskToUpdate.userName = (0, _mainJs.modalUser).options[(0, _mainJs.modalUser).selectedIndex].text;
            (0, _localStorageJs.setDate)(tasks);
        }
        // Обновляем ID карточки
        editingCard.dataset.id = taskToUpdate.id;
    } else {
        const date = new Date(); // Получаем текущее время
        const timeString = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }); // Преобразуем время в строку
        const id = Date.now(); // Генерируем уникальный идентификатор для задачи, используя текущее время в миллисекундах
        const userName = (0, _mainJs.modalUser).options[(0, _mainJs.modalUser).selectedIndex].text; // Забираем имя пользователя
        // Добавляем новую карточку в контейнер
        (0, _mainJs.todoContainer).innerHTML += `<div class="card todo__card" data-id="${id}" draggable="true">
                                    <div class="card__buttons">
                                      <button class="card__edit todo__button">Edit</button>
                                      <button class="card__delete todo__button">Delete</button>
                                      <button class="card__forward todo__button">Start</button>
                                    </div>
                                    <h3 class="card__title">${valueTitle}</h3>
                                    <p class="card__description">${valueDescription}</p>
                                    <div class="card__bottom">
                                      <p class="card__user">${userName}</p>
                                      <p class="card__time">${timeString}</p>
                                    </div>
                                  </div>`;
        tasks.push({
            id: id,
            time: timeString,
            title: valueTitle,
            description: valueDescription,
            userID: (0, _mainJs.modalUser).value,
            userName: (0, _mainJs.modalUser).options[(0, _mainJs.modalUser).selectedIndex].text,
            status: "todo" // Устанавливаем статус задачи
        });
        (0, _localStorageJs.setDate)(tasks); // Сохраняем обновленный список задач в localStorage
    }
    // Закрываем модальное окно
    (0, _mainJs.modal).style.display = "none";
    // Сбрасываем ссылку на редактируемую карточку
    editingCard = null;
    // Обнуляем модальное окно
    modalReset();
    // Обновляем счётчики
    (0, _loadTasksJs.updateCounts)();
}
function createModal(warningText, cancelFunction, confirmFunction, colorCategory) {
    // Создаем div-элемент для модального окна
    const confirmModal = document.createElement("div");
    // Устанавливаем id и class модального окна для удобства обращения
    confirmModal.id = "confirmModal";
    confirmModal.className = "modalConfirm";
    // Устанавливаем HTML-содержимое модального окна
    confirmModal.innerHTML = `
      <div class="modalConfirm__content">
        <div class="modalConfirm__container${colorCategory}">
          <p class="modalConfirm__warning">${warningText}</p>
          <div class="modalConfirm__bottom">
            <button id="modalConfirm__cancel" class="modalConfirm__button${colorCategory} cancel">Cancel</button>
            <button id="modalConfirm__confirm" class="modalConfirm__button${colorCategory}">Confirm</button>
          </div>
        </div>
      </div>`;
    // Показываем модальное окно подтверждения
    confirmModal.style.display = "block";
    // Добавляем модальное окно в конец body
    document.body.appendChild(confirmModal);
    // Добавляем обработчики событий для кнопок "Confirm" и "Cancel"
    document.getElementById("modalConfirm__confirm").addEventListener("click", confirmFunction);
    document.getElementById("modalConfirm__cancel").addEventListener("click", cancelFunction);
    // Обработчик события клика для закрытия модального окна при клике вне его области
    document.addEventListener("click", (event)=>{
        if (event.target == confirmModal) confirmModal.remove();
    });
    // Обработчик события нажатия на кнопку 'Escape' в поле ввода задачи
    document.addEventListener("keydown", (e)=>{
        if (e.key === "Escape") confirmModal.remove();
    });
}

},{"./main.js":"3cYfC","./loadTasks.js":"gDMTf","./localStorage.js":"36iVX","./additionalFunctions.js":"1nMbn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YQL7":[function(require,module,exports) {
// Модуль с функциями для работы Drag&Drop
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функции для добавления обработчиков событий на Drag&Drop
parcelHelpers.export(exports, "addEventListenerForDragAndDrop", ()=>addEventListenerForDragAndDrop);
var _cardTransferJs = require("./cardTransfer.js");
let draggedCardId = null;
function addEventListenerForDragAndDrop() {
    // Добавляем обработчики событий для drag and drop
    document.addEventListener("dragstart", (e)=>{
        // Сохраняем id перетаскиваемой карточки
        draggedCardId = e.target.dataset.id;
        // Добавляем класс 'dragging' для визуального эффекта
        e.target.classList.add("dragging");
    });
    document.addEventListener("dragover", (e)=>{
        // Разрешаем drop, чтобы можно было поместить карточку в это место
        e.preventDefault();
    });
    document.addEventListener("drop", (e)=>{
        if (e.target.closest(".card__container")) {
            // Получаем id контейнера, в который была перемещена карточка
            const dropTargetId = e.target.closest(".card__container").id;
            // Получаем ссылку на перетаскиваемую карточку по её id
            const card = document.querySelector(`[data-id="${draggedCardId}"]`);
            // Проверяем, куда была перемещена карточка, и вызываем соответствующую функцию перемещения
            if (dropTargetId === "todo__container" && !card.classList.contains("todo__card")) (0, _cardTransferJs.moveToTodo)(card);
            else if (dropTargetId === "progress__container" && !card.classList.contains("progress__card")) (0, _cardTransferJs.moveToInProgress)(card);
            else if (dropTargetId === "completed__container" && !card.classList.contains("completed__card")) (0, _cardTransferJs.moveToCompleted)(card);
            // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
            card.classList.remove("dragging");
        }
    });
    document.addEventListener("dragend", (e)=>{
        // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
        e.target.classList.remove("dragging");
    });
}

},{"./cardTransfer.js":"eRiW9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRiW9":[function(require,module,exports) {
// Модуль с функциями для перетаскивания карточек между разделами
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveToTodo", ()=>moveToTodo);
parcelHelpers.export(exports, "moveToInProgress", ()=>moveToInProgress);
parcelHelpers.export(exports, "moveToCompleted", ()=>moveToCompleted);
var _mainJs = require("./main.js");
var _loadTasksJs = require("./loadTasks.js");
var _localStorageJs = require("./localStorage.js");
var _additionalFunctionsJs = require("./additionalFunctions.js");
var _modalJs = require("./modal.js");
function moveToTodo(card) {
    // Получаем ссылки на поля карточки и id
    const currentTitle = card.getElementsByClassName("card__title")[0].innerHTML;
    const currentDescription = card.getElementsByClassName("card__description")[0].innerHTML;
    const currentTime = card.getElementsByClassName("card__time")[0].innerHTML;
    const currentUser = card.getElementsByClassName("card__user")[0].innerHTML;
    const id = Number(card.dataset.id);
    // Создаём такую же карточку в новом разделе
    (0, _mainJs.todoContainer).innerHTML += `<div class="card todo__card" data-id="${id}" draggable="true">
                                  <div class="card__buttons">
                                    <button class="card__edit todo__button">Edit</button>
                                    <button class="card__delete todo__button">Delete</button>
                                    <button class="card__forward todo__button">Start</button>
                                  </div>
                                  <h3 class="card__title">${currentTitle}</h3>
                                  <p class="card__description">${currentDescription}</p>
                                  <div class="card__bottom">
                                    <p class="card__user">${currentUser}</p>
                                    <p class="card__time">${currentTime}</p>
                                  </div>
                                </div>`;
    // Удаляем старую карточку
    card.remove(card);
    // Получаем текущие задачи из Local Storage
    const tasks = (0, _localStorageJs.getDate)();
    // Находим задачу, которую нужно обновить
    const taskToUpdate = tasks.find((task)=>task.id === id);
    // Обновляем поле 'status'
    taskToUpdate.status = "todo";
    // Обновляем Local Storage с новым массивом задач
    (0, _localStorageJs.setDate)(tasks);
    // Обновляем счётчики
    (0, _loadTasksJs.updateCounts)();
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
}
function moveToInProgress(card) {
    const cancelFunction = ()=>{
        confirmModal.remove(); // Закрываем модальное окно
    };
    const confirmFunction = ()=>{
        confirmModal.remove(); // Закрываем модальное окно
        toProgressWhatever(); // Перемещаем карточку, если подтвердили превышение лимита
    };
    if ((0, _mainJs.progressContainer).children.length > 5) // Создаем модальное окно с подтверждением
    (0, _modalJs.createModal)("You have accumulated unfulfilled tasks. Are you sure you want to add another task?", cancelFunction, confirmFunction, "Progress");
    else toProgressWhatever() // Перемещаем карточку если лимита нету
    ;
    function toProgressWhatever() {
        // Получаем ссылки на поля карточки и id
        const currentTitle = card.getElementsByClassName("card__title")[0].innerHTML;
        const currentDescription = card.getElementsByClassName("card__description")[0].innerHTML;
        const currentTime = card.getElementsByClassName("card__time")[0].innerHTML;
        const currentUser = card.getElementsByClassName("card__user")[0].innerHTML;
        const id = Number(card.dataset.id);
        // Создаём такую же карточку в новом разделе
        (0, _mainJs.progressContainer).innerHTML += `<div class="card progress__card" data-id="${id}" draggable="true">
                                        <div class="card__buttons">
                                          <button class="card__back progress__button">Back</button>
                                          <button class="card__forward progress__button">Complete</button>
                                        </div>
                                        <h3 class="card__title">${currentTitle}</h3>
                                        <p class="card__description">${currentDescription}</p>
                                        <div class="card__bottom">
                                          <p class="card__user">${currentUser}</p>
                                          <p class="card__time">${currentTime}</p>
                                        </div>
                                      </div>`;
        // Удаляем старую карточку
        card.remove(card);
        // Получаем текущие задачи из Local Storage
        const tasks = (0, _localStorageJs.getDate)();
        // Находим задачу, которую нужно обновить
        const taskToUpdate = tasks.find((task)=>task.id === id);
        // Обновляем поле 'status'
        taskToUpdate.status = "progress";
        // Обновляем Local Storage с новым массивом задач
        (0, _localStorageJs.setDate)(tasks);
        // Обновляем счётчики
        (0, _loadTasksJs.updateCounts)();
        // Обновляем видимость кнопки удаления всех карточек
        (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
    }
}
function moveToCompleted(card) {
    // Получаем ссылки на поля карточки и id
    const currentTitle = card.getElementsByClassName("card__title")[0].innerHTML;
    const currentDescription = card.getElementsByClassName("card__description")[0].innerHTML;
    const currentTime = card.getElementsByClassName("card__time")[0].innerHTML;
    const currentUser = card.getElementsByClassName("card__user")[0].innerHTML;
    const id = Number(card.dataset.id);
    // Создаём такую же карточку в новом разделе
    (0, _mainJs.completedContainer).innerHTML += `<div class="card completed__card" data-id="${id}" draggable="true">
                                      <div class="card__buttons">
                                        <button class="card__back completed__button">Back</button>
                                        <button class="card__delete completed__button">Delete</button>
                                      </div>
                                      <h3 class="card__title">${currentTitle}</h3>
                                      <p class="card__description">${currentDescription}</p>
                                      <div class="card__bottom">
                                        <p class="card__user">${currentUser}</p>
                                        <p class="card__time">${currentTime}</p>
                                      </div>
                                    </div>`;
    // Удаляем старую карточку
    card.remove(card);
    // Получаем текущие задачи из Local Storage
    const tasks = (0, _localStorageJs.getDate)();
    // Находим задачу, которую нужно обновить
    const taskToUpdate = tasks.find((task)=>task.id === id);
    // Обновляем поле 'status'
    taskToUpdate.status = "completed";
    // Обновляем Local Storage с новым массивом задач
    (0, _localStorageJs.setDate)(tasks);
    // Обновляем счётчики
    (0, _loadTasksJs.updateCounts)();
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
}

},{"./main.js":"3cYfC","./loadTasks.js":"gDMTf","./localStorage.js":"36iVX","./additionalFunctions.js":"1nMbn","./modal.js":"1hEIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PetE":[function(require,module,exports) {
// Модуль с функциями для схлопывания кнопок
// Функции для схлопывания кнопок
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideTodo", ()=>hideTodo);
parcelHelpers.export(exports, "hideProgress", ()=>hideProgress);
parcelHelpers.export(exports, "hideCompleted", ()=>hideCompleted);
function hideTodo() {
    // Получаем элементы, которые нужно скрыть
    const cardContainer = document.body.getElementsByClassName("card__container")[0];
    const categoryButton = document.body.getElementsByClassName("category__button")[0];
    const todo = document.body.querySelector(".todo");
    // Скрываем или показываем элементы
    cardContainer.classList.toggle("hidden");
    categoryButton.classList.toggle("hidden");
    todo.classList.toggle("collapsed");
}
function hideProgress() {
    // Получаем элементы, которые нужно скрыть
    const cardContainer = document.body.getElementsByClassName("card__container")[1];
    const progress = document.body.querySelector(".progress");
    // Скрываем или показываем элементы
    cardContainer.classList.toggle("hidden");
    progress.classList.toggle("collapsed");
}
function hideCompleted() {
    // Получаем элементы, которые нужно скрыть
    const cardContainer = document.body.getElementsByClassName("card__container")[2];
    const categoryButton = document.body.getElementsByClassName("category__button")[1];
    const completed = document.body.querySelector(".completed");
    // Скрываем или показываем элементы
    cardContainer.classList.toggle("hidden");
    categoryButton.classList.toggle("hidden");
    completed.classList.toggle("collapsed");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DQJW":[function(require,module,exports) {
// Модуль с функцией удаления всех завершённых задач
// Импортируем сторонние модули
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Функция для удаления всех завершенных задач
parcelHelpers.export(exports, "deleteAllCompleted", ()=>deleteAllCompleted);
var _mainJs = require("./main.js");
var _loadTasksJs = require("./loadTasks.js");
var _localStorageJs = require("./localStorage.js");
var _additionalFunctionsJs = require("./additionalFunctions.js");
var _modalJs = require("./modal.js");
function deleteAllCompleted() {
    (0, _modalJs.createModal)("Are you sure you want to delete all completed tasks?", ()=>{
        // Скрываем модальное окно подтверждения без удаления задач
        confirmModal.remove();
    }, ()=>{
        // Получаем текущие задачи из Local Storage
        const tasks = (0, _localStorageJs.getDate)();
        // Фильтруем задачи, оставляя только те, у которых статус не 'completed'
        const updatedTasks = tasks.filter((task)=>task.status !== "completed");
        // Обновляем Local Storage с новым массивом задач (без завершенных)
        (0, _localStorageJs.setDate)(updatedTasks);
        // Очищаем содержимое контейнера завершенных задач в DOM
        (0, _mainJs.completedContainer).innerHTML = "";
        // Обновляем счетчики задач
        (0, _loadTasksJs.updateCounts)();
        // Скрываем модальное окно подтверждения
        confirmModal.remove();
        // Обновляем видимость кнопки удаления всех карточек
        (0, _additionalFunctionsJs.updateDeleteButtonVisibility)();
    }, "Completed" // Цвет категории для оформления модального окна
    );
}

},{"./main.js":"3cYfC","./loadTasks.js":"gDMTf","./localStorage.js":"36iVX","./additionalFunctions.js":"1nMbn","./modal.js":"1hEIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequireed93")

//# sourceMappingURL=index.b8fca702.js.map
