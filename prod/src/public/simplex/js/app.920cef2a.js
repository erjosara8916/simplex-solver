"use strict";
(function (t) { function e(e) { for (var n, r, o = e[0], c = e[1], l = e[2], p = 0, v = []; p < o.length; p++)
    r = o[p], Object.prototype.hasOwnProperty.call(s, r) && s[r] && v.push(s[r][0]), s[r] = 0; for (n in c)
    Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]); u && u(e); while (v.length)
    v.shift()(); return i.push.apply(i, l || []), a(); } function a() { for (var t, e = 0; e < i.length; e++) {
    for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== s[c] && (n = !1);
    }
    n && (i.splice(e--, 1), t = r(r.s = a[0]));
} return t; } var n = {}, s = { app: 0 }, i = []; function r(e) { if (n[e])
    return n[e].exports; var a = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports; } r.m = t, r.c = n, r.d = function (t, e, a) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }); }, r.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
    return t; if (4 & e && "object" === typeof t && t && t.__esModule)
    return t; var a = Object.create(null); if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
    for (var n in t)
        r.d(a, n, function (e) { return t[e]; }.bind(null, n)); return a; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t["default"]; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "/"; var o = window["webpackJsonp"] = window["webpackJsonp"] || [], c = o.push.bind(o); o.push = e, o = o.slice(); for (var l = 0; l < o.length; l++)
    e(o[l]); var u = c; i.push([0, "chunk-vendors"]), a(); })({ 0: function (t, e, a) { t.exports = a("56d7"); }, "449f": function (t, e, a) {
        "use strict";
        var n = a("7f4a"), s = a.n(n);
        s.a;
    }, "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"), s = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("v-app", [a("Header"), a("v-row", { attrs: { id: "body" } }, [a("v-content", [a("Form")], 1)], 1)], 1); }, i = [], r = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("v-container", [a("v-app-bar", { attrs: { app: "", color: "primary", dark: "" } }, [a("div", { staticClass: "d-flex align-center" }, [a("h1", [t._v("Simplex")])]), a("v-spacer")], 1)], 1); }, o = [], c = { name: "Header" }, l = c, u = a("2877"), p = a("6544"), v = a.n(p), d = a("40dc"), f = a("a523"), h = a("2fa4"), m = Object(u["a"])(l, r, o, !1, null, null, null), b = m.exports;
        v()(m, { VAppBar: d["a"], VContainer: f["a"], VSpacer: h["a"] });
        var x = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("v-row", [a("v-col", { attrs: { cols: "6" } }, [a("v-row", [a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: t.numVariables, label: "Variables", solo: "" }, on: { change: t.draw }, model: { value: t.nVariables, callback: function (e) { t.nVariables = e; }, expression: "nVariables" } })], 1), a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: t.numVariables, label: "restricciones", solo: "" }, on: { change: t.draw }, model: { value: t.nRestricciones, callback: function (e) { t.nRestricciones = e; }, expression: "nRestricciones" } })], 1), a("v-col", { staticClass: "d-flex", attrs: { cols: "4", sm: "4" } }, [a("v-select", { attrs: { items: t.tipoEjercicio, label: "accion", solo: "" }, on: { change: t.updateOperation }, model: { value: t.ejercicio, callback: function (e) { t.ejercicio = e; }, expression: "ejercicio" } })], 1)], 1), t.variables.length > 0 ? a("v-row", [a("v-col", { attrs: { cols: "1" } }, [t._v(" Z = ")]), t._l(t.variables, (function (e, n) { return a("v-col", { key: n, attrs: { cols: "2" } }, [a("InputValue", { attrs: { index: n, type: 1, label: "X" + (n + 1), updateData: t.update } })], 1); })), a("v-col", { attrs: { cols: "2" } }, [t._v(" Sujeto a: ")])], 2) : t._e(), t._l(t.restricciones, (function (e, n) { return a("v-row", { key: n }, [t._l(e, (function (e, s) { return a("v-col", { key: s, attrs: { cols: "2" } }, [a("InputValue", { attrs: { index: n, subindex: s, type: 4, label: "X" + (s + 1), updateData: t.updateRestriction } })], 1); })), a("v-col", { attrs: { cols: "2" } }, [a("RestrictionType", { attrs: { index: n, type: 2, updateData: t.update } })], 1), a("v-col", { attrs: { cols: "2" } }, [a("InputValue", { attrs: { label: "", index: n, type: 3, updateData: t.update } })], 1)], 2); }))], 2), a("v-col", { attrs: { cols: "6" } }, [a("v-row", [a("div", { staticClass: "my-2" }, [a("v-btn", { attrs: { large: "", color: "primary" }, on: { click: t.resolver } }, [t._v("Resolver")])], 1)]), a("v-row", [1 == t.status ? a("v-alert", { attrs: { type: "info" } }, [t._v(" Por Favor envia los datos... ")]) : t._e(), 2 == t.status ? a("v-alert", { attrs: { type: "info" } }, [t._v(" Calculando... ")]) : t._e(), 3 == t.status ? a("v-alert", { attrs: { type: "info" } }, [a("v-list", { attrs: { shaped: "" } }, t._l(t.answer, (function (e, n) { return a("v-list-item", { key: n }, [a("v-list-item-content", [a("v-list-item-title", { domProps: { textContent: t._s(e) } })], 1)], 1); })), 1)], 1) : t._e()], 1)], 1)], 1); }, y = [], V = (a("99af"), a("a15b"), a("ac1f"), a("1276"), function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("v-text-field", { attrs: { label: t.label }, on: { change: t.update }, model: { value: t.value, callback: function (e) { t.value = e; }, expression: "value" } }); }), _ = [], g = { name: "Inputvalue", props: ["index", "label", "subindex", "updateData", "type"], data: function () { return { value: 0 }; }, methods: { update: function () { 4 == this.type ? (console.log("update restriction"), this.updateData(this.index, this.subindex, 1 * this.value)) : (console.log("update init...", this.type, this.index, 1 * this.value), this.updateData(this.type, this.index, 1 * this.value)); } } }, w = g, j = a("8654"), O = Object(u["a"])(w, V, _, !1, null, null, null), R = O.exports;
        v()(O, { VTextField: j["a"] });
        var k = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("v-select", { attrs: { items: t.items, solo: "" }, on: { change: t.updateValue }, model: { value: t.value, callback: function (e) { t.value = e; }, expression: "value" } }); }, C = [], S = { name: "RestrictionType", props: ["index", "updateData", "type"], data: function () { return { items: ["<=", "=", ">="], value: "<=" }; }, methods: { updateValue: function () { var t; "<=" == this.value && (t = -1), "<=" == this.value && (t = 0), ">=" == this.value && (t = 1), this.updateData(this.type, this.index, t); } } }, D = S, P = a("b974"), I = Object(u["a"])(D, k, C, !1, null, null, null), T = I.exports;
        v()(I, { VSelect: P["a"] });
        var E = a("bc3a"), $ = a.n(E), F = { name: "Form", components: { InputValue: R, RestrictionType: T }, data: function () { return { numVariables: ["2", "3", "4"], tipoEjercicio: ["maximizar", "minimizar"], ejercicio: "maximizar", nVariables: 0, nRestricciones: 0, variables: [], restricciones: [], condiciones: [], desigualdades: [], maxmin: "max", baseUrl: "http://www.phpsimplex.com/simplex/page2.php", answer: [], status: 1 }; }, methods: { draw: function () { if (0 != this.nVariables && 0 != this.nRestricciones) {
                    this.variables = [], this.restricciones = [];
                    for (var t = 0; t < this.nVariables; t++)
                        this.variables[t] = 0;
                    for (var e = 0; e < this.nRestricciones; e++) {
                        this.restricciones[e] = [], this.condiciones[e] = -1, this.desigualdades[e] = 0;
                        for (var a = 0; a < this.nVariables; a++)
                            this.restricciones[e][a] = 0;
                    }
                    console.log(this.restricciones);
                } }, updateOperation: function () { this.maxmin = "maximizar" == this.ejercicio ? "max" : "min"; }, update: function (t, e, a) { 1 == t ? this.variables[e] = a : 2 == t ? this.condiciones[e] = a : 3 == t && (this.desigualdades[e] = a); }, updateRestriction: function (t, e, a) { this.restricciones[t][e] = a; }, resolver: function () { var t = this; if (this.nVariables > 0) {
                    this.status = 2;
                    var e = [];
                    e.push("o=".concat(this.maxmin));
                    for (var a = 0; a < this.nVariables; a++)
                        e.push("x".concat(a + 1, "=").concat(this.variables[a]));
                    e.push("rt=".concat(this.nRestricciones)), e.push("v=".concat(this.nVariables)), e.push("l=es");
                    for (var n = 0; n < this.nRestricciones; n++) {
                        for (var s = 0; s < this.nVariables; s++)
                            e.push("r".concat(n + 1, "_").concat(s + 1, "=").concat(this.restricciones[n][s]));
                        e.push("d".concat(n + 1, "=").concat(this.condiciones[n])), e.push("y".concat(n + 1, "=").concat(this.desigualdades[n]));
                    }
                    var i = "".concat(this.baseUrl, "?").concat(e.join("&"), "&Submit=Continuar");
                    console.log(i), $.a.post("/api/v1/simplex", { url: i }).then((function (e) { t.answer = e.data.answer.split("\n"), t.status = 3; })).catch((function (t) { return console.log(t); })), console.log(i);
                } } } }, z = F, A = a("0798"), L = a("8336"), M = a("62ad"), H = a("8860"), B = a("da13"), J = a("5d23"), U = a("0fd9"), X = Object(u["a"])(z, x, y, !1, null, null, null), Z = X.exports;
        v()(X, { VAlert: A["a"], VBtn: L["a"], VCol: M["a"], VList: H["a"], VListItem: B["a"], VListItemContent: J["a"], VListItemTitle: J["b"], VRow: U["a"], VSelect: P["a"] });
        var q = { name: "App", components: { Form: Z, Header: b }, data: function () { return {}; } }, G = q, K = (a("449f"), a("7496")), N = a("a75b"), Q = Object(u["a"])(G, s, i, !1, null, "577713e9", null), W = Q.exports;
        v()(Q, { VApp: K["a"], VContent: N["a"], VRow: U["a"] });
        var Y = a("f309");
        n["a"].use(Y["a"]);
        var tt = new Y["a"]({});
        n["a"].config.productionTip = !1, new n["a"]({ vuetify: tt, render: function (t) { return t(W); } }).$mount("#app");
    }, "7f4a": function (t, e, a) { } });
//# sourceMappingURL=app.920cef2a.js.map
//# sourceMappingURL=app.920cef2a.js.map