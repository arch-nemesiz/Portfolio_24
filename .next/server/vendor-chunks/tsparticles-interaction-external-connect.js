"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-connect";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-connect"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Connector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/esm/Connector.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Connector: () => (/* binding */ Connector)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var _Options_Classes_Connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options/Classes/Connect */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Utils.js\");\n\n\n\nclass Connector extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n    }\n    clear() {\n    }\n    init() {\n        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;\n        if (!connect) {\n            return;\n        }\n        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;\n        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;\n    }\n    async interact() {\n        const container = this.container, options = container.actualOptions;\n        if (options.interactivity.events.onHover.enable && container.interactivity.status === \"pointermove\") {\n            const mousePos = container.interactivity.mouse.position;\n            if (!container.retina.connectModeDistance ||\n                container.retina.connectModeDistance < 0 ||\n                !container.retina.connectModeRadius ||\n                container.retina.connectModeRadius < 0 ||\n                !mousePos) {\n                return;\n            }\n            const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));\n            let i = 0;\n            for (const p1 of query) {\n                const pos1 = p1.getPosition();\n                for (const p2 of query.slice(i + 1)) {\n                    const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);\n                    if (xDiff < distMax && yDiff < distMax) {\n                        (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.drawConnection)(container, p1, p2);\n                    }\n                }\n                ++i;\n            }\n        }\n    }\n    isEnabled(particle) {\n        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;\n        if (!(events.onHover.enable && mouse.position)) {\n            return false;\n        }\n        return (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.isInArray)(\"connect\", events.onHover.mode);\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.connect) {\n            options.connect = new _Options_Classes_Connect__WEBPACK_IMPORTED_MODULE_3__.Connect();\n        }\n        for (const source of sources) {\n            options.connect.load(source?.connect);\n        }\n    }\n    reset() {\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vQ29ubmVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdFO0FBQ3BCO0FBQ1g7QUFDbEMsd0JBQXdCLHNFQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkRBQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaHVsLXBvcnRmb2xpby0yNC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1jb25uZWN0L2VzbS9Db25uZWN0b3IuanM/ODZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbEludGVyYWN0b3JCYXNlLCBpc0luQXJyYXksIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IHsgQ29ubmVjdCB9IGZyb20gXCIuL09wdGlvbnMvQ2xhc3Nlcy9Db25uZWN0XCI7XG5pbXBvcnQgeyBkcmF3Q29ubmVjdGlvbiB9IGZyb20gXCIuL1V0aWxzXCI7XG5leHBvcnQgY2xhc3MgQ29ubmVjdG9yIGV4dGVuZHMgRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgY29ubmVjdCA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLmludGVyYWN0aXZpdHkubW9kZXMuY29ubmVjdDtcbiAgICAgICAgaWYgKCFjb25uZWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJldGluYS5jb25uZWN0TW9kZURpc3RhbmNlID0gY29ubmVjdC5kaXN0YW5jZSAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICAgICAgY29udGFpbmVyLnJldGluYS5jb25uZWN0TW9kZVJhZGl1cyA9IGNvbm5lY3QucmFkaXVzICogY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvO1xuICAgIH1cbiAgICBhc3luYyBpbnRlcmFjdCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIG9wdGlvbnMgPSBjb250YWluZXIuYWN0dWFsT3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5lbmFibGUgJiYgY29udGFpbmVyLmludGVyYWN0aXZpdHkuc3RhdHVzID09PSBcInBvaW50ZXJtb3ZlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlUG9zID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UucG9zaXRpb247XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVEaXN0YW5jZSB8fFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVEaXN0YW5jZSA8IDAgfHxcbiAgICAgICAgICAgICAgICAhY29udGFpbmVyLnJldGluYS5jb25uZWN0TW9kZVJhZGl1cyB8fFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVSYWRpdXMgPCAwIHx8XG4gICAgICAgICAgICAgICAgIW1vdXNlUG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhjb250YWluZXIucmV0aW5hLmNvbm5lY3RNb2RlUmFkaXVzKSwgcXVlcnkgPSBjb250YWluZXIucGFydGljbGVzLnF1YWRUcmVlLnF1ZXJ5Q2lyY2xlKG1vdXNlUG9zLCBkaXN0YW5jZSwgKHApID0+IHRoaXMuaXNFbmFibGVkKHApKTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcDEgb2YgcXVlcnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MxID0gcDEuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHAyIG9mIHF1ZXJ5LnNsaWNlKGkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MyID0gcDIuZ2V0UG9zaXRpb24oKSwgZGlzdE1heCA9IE1hdGguYWJzKGNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVEaXN0YW5jZSksIHhEaWZmID0gTWF0aC5hYnMocG9zMS54IC0gcG9zMi54KSwgeURpZmYgPSBNYXRoLmFicyhwb3MxLnkgLSBwb3MyLnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeERpZmYgPCBkaXN0TWF4ICYmIHlEaWZmIDwgZGlzdE1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0Nvbm5lY3Rpb24oY29udGFpbmVyLCBwMSwgcDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIG1vdXNlID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UsIGV2ZW50cyA9IChwYXJ0aWNsZT8uaW50ZXJhY3Rpdml0eSA/PyBjb250YWluZXIuYWN0dWFsT3B0aW9ucy5pbnRlcmFjdGl2aXR5KS5ldmVudHM7XG4gICAgICAgIGlmICghKGV2ZW50cy5vbkhvdmVyLmVuYWJsZSAmJiBtb3VzZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNJbkFycmF5KFwiY29ubmVjdFwiLCBldmVudHMub25Ib3Zlci5tb2RlKTtcbiAgICB9XG4gICAgbG9hZE1vZGVPcHRpb25zKG9wdGlvbnMsIC4uLnNvdXJjZXMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmNvbm5lY3QpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY29ubmVjdCA9IG5ldyBDb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgb3B0aW9ucy5jb25uZWN0LmxvYWQoc291cmNlPy5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Connector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Connect: () => (/* binding */ Connect)\n/* harmony export */ });\n/* harmony import */ var _ConnectLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectLinks */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js\");\n\nclass Connect {\n    constructor() {\n        this.distance = 80;\n        this.links = new _ConnectLinks__WEBPACK_IMPORTED_MODULE_0__.ConnectLinks();\n        this.radius = 60;\n    }\n    get lineLinked() {\n        return this.links;\n    }\n    set lineLinked(value) {\n        this.links = value;\n    }\n    get line_linked() {\n        return this.links;\n    }\n    set line_linked(value) {\n        this.links = value;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = data.distance;\n        }\n        this.links.load(data.links ?? data.lineLinked ?? data.line_linked);\n        if (data.radius !== undefined) {\n            this.radius = data.radius;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkM7QUFDUDtBQUNBO0FBQ0EseUJBQXlCLHVEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaHVsLXBvcnRmb2xpby0yNC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1jb25uZWN0L2VzbS9PcHRpb25zL0NsYXNzZXMvQ29ubmVjdC5qcz9jOTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RMaW5rcyB9IGZyb20gXCIuL0Nvbm5lY3RMaW5rc1wiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gODA7XG4gICAgICAgIHRoaXMubGlua3MgPSBuZXcgQ29ubmVjdExpbmtzKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNjA7XG4gICAgfVxuICAgIGdldCBsaW5lTGlua2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rcztcbiAgICB9XG4gICAgc2V0IGxpbmVMaW5rZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbGluZV9saW5rZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtzO1xuICAgIH1cbiAgICBzZXQgbGluZV9saW5rZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHZhbHVlO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGlzdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRhdGEuZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rcy5sb2FkKGRhdGEubGlua3MgPz8gZGF0YS5saW5lTGlua2VkID8/IGRhdGEubGluZV9saW5rZWQpO1xuICAgICAgICBpZiAoZGF0YS5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBkYXRhLnJhZGl1cztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectLinks: () => (/* binding */ ConnectLinks)\n/* harmony export */ });\nclass ConnectLinks {\n    constructor() {\n        this.opacity = 0.5;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.opacity !== undefined) {\n            this.opacity = data.opacity;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3RMaW5rcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWh1bC1wb3J0Zm9saW8tMjQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3RMaW5rcy5qcz81YTJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25uZWN0TGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAwLjU7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/esm/Utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawConnectLine: () => (/* binding */ drawConnectLine),\n/* harmony export */   drawConnection: () => (/* binding */ drawConnection),\n/* harmony export */   gradient: () => (/* binding */ gradient),\n/* harmony export */   lineStyle: () => (/* binding */ lineStyle)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/CanvasUtils.js\");\n\nfunction gradient(context, p1, p2, opacity) {\n    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();\n    if (!color1 || !color2) {\n        return;\n    }\n    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.colorMix)(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);\n    grad.addColorStop(0, (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getStyleFromHsl)(color1, opacity));\n    grad.addColorStop(gradStop > 1 ? 1 : gradStop, (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getStyleFromRgb)(midRgb, opacity));\n    grad.addColorStop(1, (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getStyleFromHsl)(color2, opacity));\n    return grad;\n}\nfunction drawConnectLine(context, width, lineStyle, begin, end) {\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.drawLine)(context, begin, end);\n    context.lineWidth = width;\n    context.strokeStyle = lineStyle;\n    context.stroke();\n}\nfunction lineStyle(container, ctx, p1, p2) {\n    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;\n    if (!connectOptions) {\n        return;\n    }\n    return gradient(ctx, p1, p2, connectOptions.links.opacity);\n}\nfunction drawConnection(container, p1, p2) {\n    container.canvas.draw((ctx) => {\n        const ls = lineStyle(container, ctx, p1, p2);\n        if (!ls) {\n            return;\n        }\n        const pos1 = p1.getPosition(), pos2 = p2.getPosition();\n        drawConnectLine(ctx, p1.retina.linksWidth ?? 0, ls, pos1, pos2);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vVXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJGO0FBQ3BGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsNERBQVE7QUFDckYseUJBQXlCLG1FQUFlO0FBQ3hDLG1EQUFtRCxtRUFBZTtBQUNsRSx5QkFBeUIsbUVBQWU7QUFDeEM7QUFDQTtBQUNPO0FBQ1AsSUFBSSw0REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFodWwtcG9ydGZvbGlvLTI0Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLWNvbm5lY3QvZXNtL1V0aWxzLmpzP2YxZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3JNaXgsIGRyYXdMaW5lLCBnZXRTdHlsZUZyb21Ic2wsIGdldFN0eWxlRnJvbVJnYiwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnQoY29udGV4dCwgcDEsIHAyLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZ3JhZFN0b3AgPSBNYXRoLmZsb29yKHAyLmdldFJhZGl1cygpIC8gcDEuZ2V0UmFkaXVzKCkpLCBjb2xvcjEgPSBwMS5nZXRGaWxsQ29sb3IoKSwgY29sb3IyID0gcDIuZ2V0RmlsbENvbG9yKCk7XG4gICAgaWYgKCFjb2xvcjEgfHwgIWNvbG9yMikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZVBvcyA9IHAxLmdldFBvc2l0aW9uKCksIGRlc3RQb3MgPSBwMi5nZXRQb3NpdGlvbigpLCBtaWRSZ2IgPSBjb2xvck1peChjb2xvcjEsIGNvbG9yMiwgcDEuZ2V0UmFkaXVzKCksIHAyLmdldFJhZGl1cygpKSwgZ3JhZCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoc291cmNlUG9zLngsIHNvdXJjZVBvcy55LCBkZXN0UG9zLngsIGRlc3RQb3MueSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgZ2V0U3R5bGVGcm9tSHNsKGNvbG9yMSwgb3BhY2l0eSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKGdyYWRTdG9wID4gMSA/IDEgOiBncmFkU3RvcCwgZ2V0U3R5bGVGcm9tUmdiKG1pZFJnYiwgb3BhY2l0eSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGdldFN0eWxlRnJvbUhzbChjb2xvcjIsIG9wYWNpdHkpKTtcbiAgICByZXR1cm4gZ3JhZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q29ubmVjdExpbmUoY29udGV4dCwgd2lkdGgsIGxpbmVTdHlsZSwgYmVnaW4sIGVuZCkge1xuICAgIGRyYXdMaW5lKGNvbnRleHQsIGJlZ2luLCBlbmQpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gd2lkdGg7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGxpbmVTdHlsZTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTdHlsZShjb250YWluZXIsIGN0eCwgcDEsIHAyKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBjb25uZWN0T3B0aW9ucyA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5jb25uZWN0O1xuICAgIGlmICghY29ubmVjdE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZ3JhZGllbnQoY3R4LCBwMSwgcDIsIGNvbm5lY3RPcHRpb25zLmxpbmtzLm9wYWNpdHkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDb25uZWN0aW9uKGNvbnRhaW5lciwgcDEsIHAyKSB7XG4gICAgY29udGFpbmVyLmNhbnZhcy5kcmF3KChjdHgpID0+IHtcbiAgICAgICAgY29uc3QgbHMgPSBsaW5lU3R5bGUoY29udGFpbmVyLCBjdHgsIHAxLCBwMik7XG4gICAgICAgIGlmICghbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MxID0gcDEuZ2V0UG9zaXRpb24oKSwgcG9zMiA9IHAyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGRyYXdDb25uZWN0TGluZShjdHgsIHAxLnJldGluYS5saW5rc1dpZHRoID8/IDAsIGxzLCBwb3MxLCBwb3MyKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Connect: () => (/* reexport safe */ _Options_Classes_Connect__WEBPACK_IMPORTED_MODULE_1__.Connect),\n/* harmony export */   ConnectLinks: () => (/* reexport safe */ _Options_Classes_ConnectLinks__WEBPACK_IMPORTED_MODULE_2__.ConnectLinks),\n/* harmony export */   loadExternalConnectInteraction: () => (/* binding */ loadExternalConnectInteraction)\n/* harmony export */ });\n/* harmony import */ var _Connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Connector */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Connector.js\");\n/* harmony import */ var _Options_Classes_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Connect */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js\");\n/* harmony import */ var _Options_Classes_ConnectLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options/Classes/ConnectLinks */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js\");\n\nasync function loadExternalConnectInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalConnect\", (container) => new _Connector__WEBPACK_IMPORTED_MODULE_0__.Connector(container), refresh);\n}\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ2pDO0FBQ1AscUVBQXFFLGlEQUFTO0FBQzlFO0FBQzBDO0FBQ0s7QUFDRDtBQUNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFodWwtcG9ydGZvbGlvLTI0Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLWNvbm5lY3QvZXNtL2luZGV4LmpzPzEzZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdG9yIH0gZnJvbSBcIi4vQ29ubmVjdG9yXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsQ29ubmVjdEludGVyYWN0aW9uKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkSW50ZXJhY3RvcihcImV4dGVybmFsQ29ubmVjdFwiLCAoY29udGFpbmVyKSA9PiBuZXcgQ29ubmVjdG9yKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMvQ2xhc3Nlcy9Db25uZWN0TGlua3NcIjtcbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMvSW50ZXJmYWNlcy9JQ29ubmVjdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9ucy9JbnRlcmZhY2VzL0lDb25uZWN0TGlua3NcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/esm/index.js\n");

/***/ })

};
;