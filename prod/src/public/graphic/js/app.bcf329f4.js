"use strict";
(function (e) { function t(t) { for (var n, r, o = t[0], c = t[1], l = t[2], p = 0, d = []; p < o.length; p++)
    r = o[p], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0; for (n in c)
    Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]); u && u(t); while (d.length)
    d.shift()(); return i.push.apply(i, l || []), a(); } function a() { for (var e, t = 0; t < i.length; t++) {
    for (var a = i[t], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== s[c] && (n = !1);
    }
    n && (i.splice(t--, 1), e = r(r.s = a[0]));
} return e; } var n = {}, s = { app: 0 }, i = []; function r(t) { if (n[t])
    return n[t].exports; var a = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports; } r.m = e, r.c = n, r.d = function (e, t, a) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }); }, r.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
    return e; if (4 & t && "object" === typeof e && e && e.__esModule)
    return e; var a = Object.create(null); if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var n in e)
        r.d(a, n, function (t) { return e[t]; }.bind(null, n)); return a; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e["default"]; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "/"; var o = window["webpackJsonp"] = window["webpackJsonp"] || [], c = o.push.bind(o); o.push = t, o = o.slice(); for (var l = 0; l < o.length; l++)
    t(o[l]); var u = c; i.push([0, "chunk-vendors"]), a(); })({ 0: function (e, t, a) { e.exports = a("56d7"); }, "449f": function (e, t, a) {
        "use strict";
        var n = a("7f4a"), s = a.n(n);
        s.a;
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"), s = function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("v-app", [a("Header"), a("v-row", { attrs: { id: "body" } }, [a("v-content", [a("Form")], 1)], 1)], 1); }, i = [], r = function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("v-container", [a("v-app-bar", { attrs: { app: "", color: "primary", dark: "" } }, [a("div", { staticClass: "d-flex align-center" }, [a("h1", [e._v("Grafico")])]), a("v-spacer")], 1)], 1); }, o = [], c = { name: "Header" }, l = c, u = a("2877"), p = a("6544"), d = a.n(p), v = a("40dc"), f = a("a523"), h = a("2fa4"), b = Object(u["a"])(l, r, o, !1, null, null, null), m = b.exports;
        d()(b, { VAppBar: v["a"], VContainer: f["a"], VSpacer: h["a"] });
        var x = function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("v-row", [a("v-col", { attrs: { cols: "6" } }, [a("v-row", [a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: e.numVariables, label: "Variables", solo: "" }, on: { change: e.draw }, model: { value: e.nVariables, callback: function (t) { e.nVariables = t; }, expression: "nVariables" } })], 1), a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: e.numRestrictions, label: "restricciones", solo: "" }, on: { change: e.draw }, model: { value: e.nRestricciones, callback: function (t) { e.nRestricciones = t; }, expression: "nRestricciones" } })], 1), a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: e.tipoEjercicio, label: "accion", solo: "" }, on: { change: e.updateOperation }, model: { value: e.ejercicio, callback: function (t) { e.ejercicio = t; }, expression: "ejercicio" } })], 1)], 1), e.variables.length > 0 ? a("v-row", [a("v-col", { attrs: { cols: "1" } }, [e._v(" Z = ")]), e._l(e.variables, (function (t, n) { return a("v-col", { key: n, attrs: { cols: "2" } }, [a("InputValue", { attrs: { index: n, type: 1, label: "X" + (n + 1), updateData: e.update } })], 1); })), a("v-col", { attrs: { cols: "2" } }, [e._v(" Sujeto a: ")])], 2) : e._e(), e._l(e.restricciones, (function (t, n) { return a("v-row", { key: n }, [e._l(t, (function (t, s) { return a("v-col", { key: s, attrs: { cols: "2" } }, [a("InputValue", { attrs: { index: n, subindex: s, type: 4, label: "X" + (s + 1), updateData: e.updateRestriction } })], 1); })), a("v-col", { attrs: { cols: "2" } }, [a("RestrictionType", { attrs: { index: n, type: 2, updateData: e.update } })], 1), a("v-col", { attrs: { cols: "2" } }, [a("InputValue", { attrs: { label: "", index: n, type: 3, updateData: e.update } })], 1)], 2); }))], 2), a("v-col", { attrs: { cols: "6" } }, [a("v-row", [a("div", { staticClass: "my-2" }, [a("v-btn", { attrs: { large: "", color: "primary" }, on: { click: e.resolver } }, [e._v("Resolver")])], 1)]), a("v-row", [2 == e.status ? a("v-alert", { attrs: { type: "info" } }, [e._v(" Calculando... ")]) : e._e(), 3 == e.status ? a("v-simple-table", [a("tbody", { domProps: { innerHTML: e._s(e.answer) } })]) : e._e()], 1)], 1)], 1); }, y = [], V = (a("99af"), a("a15b"), function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("v-text-field", { attrs: { label: e.label }, on: { change: e.update }, model: { value: e.value, callback: function (t) { e.value = t; }, expression: "value" } }); }), g = [], w = { name: "Inputvalue", props: ["index", "label", "subindex", "updateData", "type"], data: function () { return { value: 0 }; }, methods: { update: function () { 4 == this.type ? (console.log("update restriction"), this.updateData(this.index, this.subindex, 1 * this.value)) : (console.log("update init...", this.type, this.index, 1 * this.value), this.updateData(this.type, this.index, 1 * this.value)); } } }, _ = w, j = a("8654"), O = Object(u["a"])(_, V, g, !1, null, null, null), R = O.exports;
        d()(O, { VTextField: j["a"] });
        var k = function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("v-select", { attrs: { items: e.items, solo: "" }, on: { change: e.updateValue }, model: { value: e.value, callback: function (t) { e.value = t; }, expression: "value" } }); }, S = [], C = { name: "RestrictionType", props: ["index", "updateData", "type"], data: function () { return { items: ["<=", "=", ">="], value: "<=" }; }, methods: { updateValue: function () { var e; "<=" == this.value && (e = -1), "<=" == this.value && (e = 0), ">=" == this.value && (e = 1), this.updateData(this.type, this.index, e); } } }, D = C, T = a("b974"), P = Object(u["a"])(D, k, S, !1, null, null, null), E = P.exports;
        d()(P, { VSelect: T["a"] });
        var $ = a("bc3a"), I = a.n($), M = { name: "Form", components: { InputValue: R, RestrictionType: E }, data: function () { return { numVariables: ["2"], numRestrictions: ["2", "3", "4", "5"], tipoEjercicio: ["maximizar", "minimizar"], ejercicio: "maximizar", nVariables: 0, nRestricciones: 0, variables: [], restricciones: [], condiciones: [], desigualdades: [], maxmin: "max", baseUrl: "http://www.phpsimplex.com/simplex/grafico2.php", answer: "", status: 1 }; }, methods: { draw: function () { if (0 != this.nVariables && 0 != this.nRestricciones) {
                    this.variables = [], this.restricciones = [];
                    for (var e = 0; e < this.nVariables; e++)
                        this.variables[e] = 0;
                    for (var t = 0; t < this.nRestricciones; t++) {
                        this.restricciones[t] = [], this.condiciones[t] = -1, this.desigualdades[t] = 0;
                        for (var a = 0; a < this.nVariables; a++)
                            this.restricciones[t][a] = 0;
                    }
                    console.log(this.restricciones);
                } }, updateOperation: function () { this.maxmin = "maximizar" == this.ejercicio ? "max" : "min"; }, update: function (e, t, a) { 1 == e ? this.variables[t] = a : 2 == e ? this.condiciones[t] = a : 3 == e && (this.desigualdades[t] = a); }, updateRestriction: function (e, t, a) { this.restricciones[e][t] = a; }, resolver: function () { var e = this; if (this.nVariables > 0) {
                    this.status = 2;
                    var t = [];
                    t.push("o=".concat(this.maxmin));
                    for (var a = 0; a < this.nVariables; a++)
                        t.push("x".concat(a + 1, "=").concat(this.variables[a]));
                    t.push("rt=".concat(this.nRestricciones)), t.push("v=".concat(this.nVariables)), t.push("l=es");
                    for (var n = 0; n < this.nRestricciones; n++) {
                        for (var s = 0; s < this.nVariables; s++)
                            t.push("r".concat(n + 1, "_").concat(s + 1, "=").concat(this.restricciones[n][s]));
                        t.push("d".concat(n + 1, "=").concat(this.condiciones[n])), t.push("y".concat(n + 1, "=").concat(this.desigualdades[n]));
                    }
                    var i = "".concat(this.baseUrl, "?").concat(t.join("&"), "&Submit=Continuar");
                    console.log(i), I.a.post("/api/v1/graphic", { url: i }).then((function (t) { e.answer = t.data.answer, e.status = 3; })).catch((function (e) { return console.log(e); })), console.log(i);
                } } } }, z = M, A = a("0798"), F = a("8336"), H = a("62ad"), B = a("0fd9"), J = a("1f4f"), U = Object(u["a"])(z, x, y, !1, null, null, null), X = U.exports;
        d()(U, { VAlert: A["a"], VBtn: F["a"], VCol: H["a"], VRow: B["a"], VSelect: T["a"], VSimpleTable: J["a"] });
        var G = { name: "App", components: { Form: X, Header: m }, data: function () { return {}; } }, L = G, Z = (a("449f"), a("7496")), q = a("a75b"), K = Object(u["a"])(L, s, i, !1, null, "577713e9", null), N = K.exports;
        d()(K, { VApp: Z["a"], VContent: q["a"], VRow: B["a"] });
        var Q = a("f309");
        n["a"].use(Q["a"]);
        var W = new Q["a"]({});
        n["a"].config.productionTip = !1, new n["a"]({ vuetify: W, render: function (e) { return e(N); } }).$mount("#app");
    }, "7f4a": function (e, t, a) { } });
//# sourceMappingURL=app.bcf329f4.js.map
//# sourceMappingURL=app.bcf329f4.js.map