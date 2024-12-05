var Bd = Object.defineProperty,
    Vd = Object.defineProperties;
var Hd = Object.getOwnPropertyDescriptors;
var Ya = Object.getOwnPropertySymbols;
var Wd = Object.prototype.hasOwnProperty,
    qd = Object.prototype.propertyIsEnumerable;
var ds = (t, e) => (e = Symbol[t]) ? e : Symbol.for("Symbol." + t),
    Kd = t => {
        throw TypeError(t)
    };
var Xa = (t, e, n) => e in t ? Bd(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    Fn = (t, e) => {
        for (var n in e || (e = {})) Wd.call(e, n) && Xa(t, n, e[n]);
        if (Ya)
            for (var n of Ya(e)) qd.call(e, n) && Xa(t, n, e[n]);
        return t
    },
    xr = (t, e) => Vd(t, Hd(e));
var Yd = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var _t = (t, e, n) => new Promise((s, r) => {
        var i = l => {
                try {
                    a(n.next(l))
                } catch (c) {
                    r(c)
                }
            },
            o = l => {
                try {
                    a(n.throw(l))
                } catch (c) {
                    r(c)
                }
            },
            a = l => l.done ? s(l.value) : Promise.resolve(l.value).then(i, o);
        a((n = n.apply(t, e)).next())
    }),
    jn = function(t, e) {
        this[0] = t, this[1] = e
    },
    Ai = (t, e, n) => {
        var s = (o, a, l, c) => {
                try {
                    var u = n[o](a),
                        f = (a = u.value) instanceof jn,
                        d = u.done;
                    Promise.resolve(f ? a[0] : a).then(h => f ? s(o === "return" ? o : "next", a[1] ? {
                        done: h.done,
                        value: h.value
                    } : h, l, c) : l({
                        value: h,
                        done: d
                    })).catch(h => s("throw", h, l, c))
                } catch (h) {
                    c(h)
                }
            },
            r = o => i[o] = a => new Promise((l, c) => s(o, a, l, c)),
            i = {};
        return n = n.apply(t, e), i[ds("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i
    },
    Ii = t => {
        var e = t[ds("asyncIterator")],
            n = !1,
            s, r = {};
        return e == null ? (e = t[ds("iterator")](), s = i => r[i] = o => e[i](o)) : (e = e.call(t), s = i => r[i] = o => {
            if (n) {
                if (n = !1, i === "throw") throw o;
                return o
            }
            return n = !0, {
                done: !1,
                value: new jn(new Promise(a => {
                    var l = e[i](o);
                    l instanceof Object || Kd("Object expected"), a(l)
                }), 1)
            }
        }), r[ds("iterator")] = () => r, s("next"), "throw" in e ? s("throw") : r.throw = i => {
            throw i
        }, "return" in e && s("return"), r
    },
    Ja = (t, e, n) => (e = t[ds("asyncIterator")]) ? e.call(t) : (t = t[ds("iterator")](), e = {}, n = (s, r) => (r = t[s]) && (e[s] = i => new Promise((o, a, l) => (i = r.call(t, i), l = i.done, Promise.resolve(i.value).then(c => o({
        value: c,
        done: l
    }), a)))), n("next"), n("return"), e);
var JN = Yd(Or => {
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
        new MutationObserver(r => {
            for (const i of r)
                if (i.type === "childList")
                    for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function n(r) {
            const i = {};
            return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
        }

        function s(r) {
            if (r.ep) return;
            r.ep = !0;
            const i = n(r);
            fetch(r.href, i)
        }
    })();
    /**
     * @vue/shared v3.5.4
     * (c) 2018-present Yuxi (Evan) You and Vue contributors
     * @license MIT
     **/
    /*! #__NO_SIDE_EFFECTS__ */
    function Ko(t) {
        const e = Object.create(null);
        for (const n of t.split(",")) e[n] = 1;
        return n => n in e
    }
    const ge = {},
        ks = [],
        Yt = () => {},
        Xd = () => !1,
        ci = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
        Yo = t => t.startsWith("onUpdate:"),
        Be = Object.assign,
        Xo = (t, e) => {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        },
        Jd = Object.prototype.hasOwnProperty,
        le = (t, e) => Jd.call(t, e),
        te = Array.isArray,
        Ts = t => ui(t) === "[object Map]",
        Fc = t => ui(t) === "[object Set]",
        se = t => typeof t == "function",
        Le = t => typeof t == "string",
        Rn = t => typeof t == "symbol",
        $e = t => t !== null && typeof t == "object",
        jc = t => ($e(t) || se(t)) && se(t.then) && se(t.catch),
        Uc = Object.prototype.toString,
        ui = t => Uc.call(t),
        Qd = t => ui(t).slice(8, -1),
        zc = t => ui(t) === "[object Object]",
        Jo = t => Le(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
        Ks = Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        fi = t => {
            const e = Object.create(null);
            return n => e[n] || (e[n] = t(n))
        },
        Zd = /-(\w)/g,
        ss = fi(t => t.replace(Zd, (e, n) => n ? n.toUpperCase() : "")),
        e_ = /\B([A-Z])/g,
        cs = fi(t => t.replace(e_, "-$1").toLowerCase()),
        Gc = fi(t => t.charAt(0).toUpperCase() + t.slice(1)),
        Ri = fi(t => t ? "on".concat(Gc(t)) : ""),
        xn = (t, e) => !Object.is(t, e),
        Ni = (t, ...e) => {
            for (let n = 0; n < t.length; n++) t[n](...e)
        },
        Bc = (t, e, n, s = !1) => {
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                writable: s,
                value: n
            })
        },
        t_ = t => {
            const e = parseFloat(t);
            return isNaN(e) ? t : e
        };
    let Qa;
    const Vc = () => Qa || (Qa = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});

    function rr(t) {
        if (te(t)) {
            const e = {};
            for (let n = 0; n < t.length; n++) {
                const s = t[n],
                    r = Le(s) ? i_(s) : rr(s);
                if (r)
                    for (const i in r) e[i] = r[i]
            }
            return e
        } else if (Le(t) || $e(t)) return t
    }
    const n_ = /;(?![^(]*\))/g,
        s_ = /:([^]+)/,
        r_ = /\/\*[^]*?\*\//g;

    function i_(t) {
        const e = {};
        return t.replace(r_, "").split(n_).forEach(n => {
            if (n) {
                const s = n.split(s_);
                s.length > 1 && (e[s[0].trim()] = s[1].trim())
            }
        }), e
    }

    function he(t) {
        let e = "";
        if (Le(t)) e = t;
        else if (te(t))
            for (let n = 0; n < t.length; n++) {
                const s = he(t[n]);
                s && (e += s + " ")
            } else if ($e(t))
                for (const n in t) t[n] && (e += n + " ");
        return e.trim()
    }
    const o_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        a_ = Ko(o_);

    function Hc(t) {
        return !!t || t === ""
    }
    const Wc = t => !!(t && t.__v_isRef === !0),
        Re = t => Le(t) ? t : t == null ? "" : te(t) || $e(t) && (t.toString === Uc || !se(t.toString)) ? Wc(t) ? Re(t.value) : JSON.stringify(t, qc, 2) : String(t),
        qc = (t, e) => Wc(e) ? qc(t, e.value) : Ts(e) ? {
            ["Map(".concat(e.size, ")")]: [...e.entries()].reduce((n, [s, r], i) => (n[Ci(s, i) + " =>"] = r, n), {})
        } : Fc(e) ? {
            ["Set(".concat(e.size, ")")]: [...e.values()].map(n => Ci(n))
        } : Rn(e) ? Ci(e) : $e(e) && !te(e) && !zc(e) ? String(e) : e,
        Ci = (t, e = "") => {
            var n;
            return Rn(t) ? "Symbol(".concat((n = t.description) != null ? n : e, ")") : t
        };
    /**
     * @vue/reactivity v3.5.4
     * (c) 2018-present Yuxi (Evan) You and Vue contributors
     * @license MIT
     **/
    let pt;
    class Kc {
        constructor(e = !1) {
            this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pt, !e && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1)
        }
        get active() {
            return this._active
        }
        pause() {
            if (this._active) {
                this._isPaused = !0;
                let e, n;
                if (this.scopes)
                    for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
                for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
            }
        }
        resume() {
            if (this._active && this._isPaused) {
                this._isPaused = !1;
                let e, n;
                if (this.scopes)
                    for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
                for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
            }
        }
        run(e) {
            if (this._active) {
                const n = pt;
                try {
                    return pt = this, e()
                } finally {
                    pt = n
                }
            }
        }
        on() {
            pt = this
        }
        off() {
            pt = this.parent
        }
        stop(e) {
            if (this._active) {
                let n, s;
                for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
                for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
                if (this.scopes)
                    for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                if (!this.detached && this.parent && !e) {
                    const r = this.parent.scopes.pop();
                    r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                }
                this.parent = void 0, this._active = !1
            }
        }
    }

    function l_(t) {
        return new Kc(t)
    }

    function c_() {
        return pt
    }
    let me;
    const Li = new WeakSet;
    class Yc {
        constructor(e) {
            this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, pt && pt.active && pt.effects.push(this)
        }
        pause() {
            this.flags |= 64
        }
        resume() {
            this.flags & 64 && (this.flags &= -65, Li.has(this) && (Li.delete(this), this.trigger()))
        }
        notify() {
            this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = Ys, Ys = this)
        }
        run() {
            if (!(this.flags & 1)) return this.fn();
            this.flags |= 2, Za(this), Jc(this);
            const e = me,
                n = Mt;
            me = this, Mt = !0;
            try {
                return this.fn()
            } finally {
                Qc(this), me = e, Mt = n, this.flags &= -3
            }
        }
        stop() {
            if (this.flags & 1) {
                for (let e = this.deps; e; e = e.nextDep) ea(e);
                this.deps = this.depsTail = void 0, Za(this), this.onStop && this.onStop(), this.flags &= -2
            }
        }
        trigger() {
            this.flags & 64 ? Li.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
        }
        runIfDirty() {
            ro(this) && this.run()
        }
        get dirty() {
            return ro(this)
        }
    }
    let Xc = 0,
        Ys;

    function Qo() {
        Xc++
    }

    function Zo() {
        if (--Xc > 0) return;
        let t;
        for (; Ys;) {
            let e = Ys;
            for (Ys = void 0; e;) {
                const n = e.nextEffect;
                if (e.nextEffect = void 0, e.flags &= -9, e.flags & 1) try {
                    e.trigger()
                } catch (s) {
                    t || (t = s)
                }
                e = n
            }
        }
        if (t) throw t
    }

    function Jc(t) {
        for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e
    }

    function Qc(t) {
        let e, n = t.depsTail;
        for (let s = n; s; s = s.prevDep) s.version === -1 ? (s === n && (n = s.prevDep), ea(s), u_(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0;
        t.deps = e, t.depsTail = n
    }

    function ro(t) {
        for (let e = t.deps; e; e = e.nextDep)
            if (e.dep.version !== e.version || e.dep.computed && Zc(e.dep.computed) || e.dep.version !== e.version) return !0;
        return !!t._dirty
    }

    function Zc(t) {
        if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === ir)) return;
        t.globalVersion = ir;
        const e = t.dep;
        if (t.flags |= 2, e.version > 0 && !t.isSSR && !ro(t)) {
            t.flags &= -3;
            return
        }
        const n = me,
            s = Mt;
        me = t, Mt = !0;
        try {
            Jc(t);
            const r = t.fn(t._value);
            (e.version === 0 || xn(r, t._value)) && (t._value = r, e.version++)
        } catch (r) {
            throw e.version++, r
        } finally {
            me = n, Mt = s, Qc(t), t.flags &= -3
        }
    }

    function ea(t) {
        const {
            dep: e,
            prevSub: n,
            nextSub: s
        } = t;
        if (n && (n.nextSub = s, t.prevSub = void 0), s && (s.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n), !e.subs && e.computed) {
            e.computed.flags &= -5;
            for (let r = e.computed.deps; r; r = r.nextDep) ea(r)
        }
    }

    function u_(t) {
        const {
            prevDep: e,
            nextDep: n
        } = t;
        e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
    }
    let Mt = !0;
    const eu = [];

    function Nn() {
        eu.push(Mt), Mt = !1
    }

    function Cn() {
        const t = eu.pop();
        Mt = t === void 0 ? !0 : t
    }

    function Za(t) {
        const {
            cleanup: e
        } = t;
        if (t.cleanup = void 0, e) {
            const n = me;
            me = void 0;
            try {
                e()
            } finally {
                me = n
            }
        }
    }
    let ir = 0;
    class ta {
        constructor(e) {
            this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0
        }
        track(e) {
            if (!me || !Mt || me === this.computed) return;
            let n = this.activeLink;
            if (n === void 0 || n.sub !== me) n = this.activeLink = {
                dep: this,
                sub: me,
                version: this.version,
                nextDep: void 0,
                prevDep: void 0,
                nextSub: void 0,
                prevSub: void 0,
                prevActiveLink: void 0
            }, me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, me.flags & 4 && tu(n);
            else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
                const s = n.nextDep;
                s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = s)
            }
            return n
        }
        trigger(e) {
            this.version++, ir++, this.notify(e)
        }
        notify(e) {
            Qo();
            try {
                for (let n = this.subs; n; n = n.prevSub) n.sub.notify()
            } finally {
                Zo()
            }
        }
    }

    function tu(t) {
        const e = t.dep.computed;
        if (e && !t.dep.subs) {
            e.flags |= 20;
            for (let s = e.deps; s; s = s.nextDep) tu(s)
        }
        const n = t.dep.subs;
        n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
    }
    const io = new WeakMap,
        Jn = Symbol(""),
        oo = Symbol(""),
        or = Symbol("");

    function Ye(t, e, n) {
        if (Mt && me) {
            let s = io.get(t);
            s || io.set(t, s = new Map);
            let r = s.get(n);
            r || s.set(n, r = new ta), r.track()
        }
    }

    function cn(t, e, n, s, r, i) {
        const o = io.get(t);
        if (!o) {
            ir++;
            return
        }
        const a = l => {
            l && l.trigger()
        };
        if (Qo(), e === "clear") o.forEach(a);
        else {
            const l = te(t),
                c = l && Jo(n);
            if (l && n === "length") {
                const u = Number(s);
                o.forEach((f, d) => {
                    (d === "length" || d === or || !Rn(d) && d >= u) && a(f)
                })
            } else switch (n !== void 0 && a(o.get(n)), c && a(o.get(or)), e) {
                case "add":
                    l ? c && a(o.get("length")) : (a(o.get(Jn)), Ts(t) && a(o.get(oo)));
                    break;
                case "delete":
                    l || (a(o.get(Jn)), Ts(t) && a(o.get(oo)));
                    break;
                case "set":
                    Ts(t) && a(o.get(Jn));
                    break
            }
        }
        Zo()
    }

    function _s(t) {
        const e = ue(t);
        return e === t ? e : (Ye(e, "iterate", or), Ft(t) ? e : e.map(et))
    }

    function na(t) {
        return Ye(t = ue(t), "iterate", or), t
    }
    const f_ = {
        __proto__: null,
        [Symbol.iterator]() {
            return Di(this, Symbol.iterator, et)
        },
        concat(...t) {
            return _s(this).concat(...t.map(e => te(e) ? _s(e) : e))
        },
        entries() {
            return Di(this, "entries", t => (t[1] = et(t[1]), t))
        },
        every(t, e) {
            return tn(this, "every", t, e, void 0, arguments)
        },
        filter(t, e) {
            return tn(this, "filter", t, e, n => n.map(et), arguments)
        },
        find(t, e) {
            return tn(this, "find", t, e, et, arguments)
        },
        findIndex(t, e) {
            return tn(this, "findIndex", t, e, void 0, arguments)
        },
        findLast(t, e) {
            return tn(this, "findLast", t, e, et, arguments)
        },
        findLastIndex(t, e) {
            return tn(this, "findLastIndex", t, e, void 0, arguments)
        },
        forEach(t, e) {
            return tn(this, "forEach", t, e, void 0, arguments)
        },
        includes(...t) {
            return Mi(this, "includes", t)
        },
        indexOf(...t) {
            return Mi(this, "indexOf", t)
        },
        join(t) {
            return _s(this).join(t)
        },
        lastIndexOf(...t) {
            return Mi(this, "lastIndexOf", t)
        },
        map(t, e) {
            return tn(this, "map", t, e, void 0, arguments)
        },
        pop() {
            return Us(this, "pop")
        },
        push(...t) {
            return Us(this, "push", t)
        },
        reduce(t, ...e) {
            return el(this, "reduce", t, e)
        },
        reduceRight(t, ...e) {
            return el(this, "reduceRight", t, e)
        },
        shift() {
            return Us(this, "shift")
        },
        some(t, e) {
            return tn(this, "some", t, e, void 0, arguments)
        },
        splice(...t) {
            return Us(this, "splice", t)
        },
        toReversed() {
            return _s(this).toReversed()
        },
        toSorted(t) {
            return _s(this).toSorted(t)
        },
        toSpliced(...t) {
            return _s(this).toSpliced(...t)
        },
        unshift(...t) {
            return Us(this, "unshift", t)
        },
        values() {
            return Di(this, "values", et)
        }
    };

    function Di(t, e, n) {
        const s = na(t),
            r = s[e]();
        return s !== t && !Ft(t) && (r._next = r.next, r.next = () => {
            const i = r._next();
            return i.value && (i.value = n(i.value)), i
        }), r
    }
    const d_ = Array.prototype;

    function tn(t, e, n, s, r, i) {
        const o = na(t),
            a = o !== t && !Ft(t),
            l = o[e];
        if (l !== d_[e]) {
            const f = l.apply(t, i);
            return a ? et(f) : f
        }
        let c = n;
        o !== t && (a ? c = function(f, d) {
            return n.call(this, et(f), d, t)
        } : n.length > 2 && (c = function(f, d) {
            return n.call(this, f, d, t)
        }));
        const u = l.call(o, c, s);
        return a && r ? r(u) : u
    }

    function el(t, e, n, s) {
        const r = na(t);
        let i = n;
        return r !== t && (Ft(t) ? n.length > 3 && (i = function(o, a, l) {
            return n.call(this, o, a, l, t)
        }) : i = function(o, a, l) {
            return n.call(this, o, et(a), l, t)
        }), r[e](i, ...s)
    }

    function Mi(t, e, n) {
        const s = ue(t);
        Ye(s, "iterate", or);
        const r = s[e](...n);
        return (r === -1 || r === !1) && aa(n[0]) ? (n[0] = ue(n[0]), s[e](...n)) : r
    }

    function Us(t, e, n = []) {
        Nn(), Qo();
        const s = ue(t)[e].apply(t, n);
        return Zo(), Cn(), s
    }
    const __ = Ko("__proto__,__v_isRef,__isVue"),
        nu = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Rn));

    function h_(t) {
        Rn(t) || (t = String(t));
        const e = ue(this);
        return Ye(e, "has", t), e.hasOwnProperty(t)
    }
    class su {
        constructor(e = !1, n = !1) {
            this._isReadonly = e, this._isShallow = n
        }
        get(e, n, s) {
            const r = this._isReadonly,
                i = this._isShallow;
            if (n === "__v_isReactive") return !r;
            if (n === "__v_isReadonly") return r;
            if (n === "__v_isShallow") return i;
            if (n === "__v_raw") return s === (r ? i ? O_ : au : i ? ou : iu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
            const o = te(e);
            if (!r) {
                let l;
                if (o && (l = f_[n])) return l;
                if (n === "hasOwnProperty") return h_
            }
            const a = Reflect.get(e, n, ze(e) ? e : s);
            return (Rn(n) ? nu.has(n) : __(n)) || (r || Ye(e, "get", n), i) ? a : ze(a) ? o && Jo(n) ? a : a.value : $e(a) ? r ? lu(a) : ia(a) : a
        }
    }
    class ru extends su {
        constructor(e = !1) {
            super(!1, e)
        }
        set(e, n, s, r) {
            let i = e[n];
            if (!this._isShallow) {
                const l = rs(i);
                if (!Ft(s) && !rs(s) && (i = ue(i), s = ue(s)), !te(e) && ze(i) && !ze(s)) return l ? !1 : (i.value = s, !0)
            }
            const o = te(e) && Jo(n) ? Number(n) < e.length : le(e, n),
                a = Reflect.set(e, n, s, ze(e) ? e : r);
            return e === ue(r) && (o ? xn(s, i) && cn(e, "set", n, s) : cn(e, "add", n, s)), a
        }
        deleteProperty(e, n) {
            const s = le(e, n);
            e[n];
            const r = Reflect.deleteProperty(e, n);
            return r && s && cn(e, "delete", n, void 0), r
        }
        has(e, n) {
            const s = Reflect.has(e, n);
            return (!Rn(n) || !nu.has(n)) && Ye(e, "has", n), s
        }
        ownKeys(e) {
            return Ye(e, "iterate", te(e) ? "length" : Jn), Reflect.ownKeys(e)
        }
    }
    class p_ extends su {
        constructor(e = !1) {
            super(!0, e)
        }
        set(e, n) {
            return !0
        }
        deleteProperty(e, n) {
            return !0
        }
    }
    const m_ = new ru,
        g_ = new p_,
        y_ = new ru(!0),
        sa = t => t,
        di = t => Reflect.getPrototypeOf(t);

    function Pr(t, e, n = !1, s = !1) {
        t = t.__v_raw;
        const r = ue(t),
            i = ue(e);
        n || (xn(e, i) && Ye(r, "get", e), Ye(r, "get", i));
        const {
            has: o
        } = di(r), a = s ? sa : n ? la : et;
        if (o.call(r, e)) return a(t.get(e));
        if (o.call(r, i)) return a(t.get(i));
        t !== r && t.get(e)
    }

    function Ar(t, e = !1) {
        const n = this.__v_raw,
            s = ue(n),
            r = ue(t);
        return e || (xn(t, r) && Ye(s, "has", t), Ye(s, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r)
    }

    function Ir(t, e = !1) {
        return t = t.__v_raw, !e && Ye(ue(t), "iterate", Jn), Reflect.get(t, "size", t)
    }

    function tl(t, e = !1) {
        !e && !Ft(t) && !rs(t) && (t = ue(t));
        const n = ue(this);
        return di(n).has.call(n, t) || (n.add(t), cn(n, "add", t, t)), this
    }

    function nl(t, e, n = !1) {
        !n && !Ft(e) && !rs(e) && (e = ue(e));
        const s = ue(this),
            {
                has: r,
                get: i
            } = di(s);
        let o = r.call(s, t);
        o || (t = ue(t), o = r.call(s, t));
        const a = i.call(s, t);
        return s.set(t, e), o ? xn(e, a) && cn(s, "set", t, e) : cn(s, "add", t, e), this
    }

    function sl(t) {
        const e = ue(this),
            {
                has: n,
                get: s
            } = di(e);
        let r = n.call(e, t);
        r || (t = ue(t), r = n.call(e, t)), s && s.call(e, t);
        const i = e.delete(t);
        return r && cn(e, "delete", t, void 0), i
    }

    function rl() {
        const t = ue(this),
            e = t.size !== 0,
            n = t.clear();
        return e && cn(t, "clear", void 0, void 0), n
    }

    function Rr(t, e) {
        return function(s, r) {
            const i = this,
                o = i.__v_raw,
                a = ue(o),
                l = e ? sa : t ? la : et;
            return !t && Ye(a, "iterate", Jn), o.forEach((c, u) => s.call(r, l(c), l(u), i))
        }
    }

    function Nr(t, e, n) {
        return function(...s) {
            const r = this.__v_raw,
                i = ue(r),
                o = Ts(i),
                a = t === "entries" || t === Symbol.iterator && o,
                l = t === "keys" && o,
                c = r[t](...s),
                u = n ? sa : e ? la : et;
            return !e && Ye(i, "iterate", l ? oo : Jn), {
                next() {
                    const {
                        value: f,
                        done: d
                    } = c.next();
                    return d ? {
                        value: f,
                        done: d
                    } : {
                        value: a ? [u(f[0]), u(f[1])] : u(f),
                        done: d
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function mn(t) {
        return function(...e) {
            return t === "delete" ? !1 : t === "clear" ? void 0 : this
        }
    }

    function v_() {
        const t = {
                get(i) {
                    return Pr(this, i)
                },
                get size() {
                    return Ir(this)
                },
                has: Ar,
                add: tl,
                set: nl,
                delete: sl,
                clear: rl,
                forEach: Rr(!1, !1)
            },
            e = {
                get(i) {
                    return Pr(this, i, !1, !0)
                },
                get size() {
                    return Ir(this)
                },
                has: Ar,
                add(i) {
                    return tl.call(this, i, !0)
                },
                set(i, o) {
                    return nl.call(this, i, o, !0)
                },
                delete: sl,
                clear: rl,
                forEach: Rr(!1, !0)
            },
            n = {
                get(i) {
                    return Pr(this, i, !0)
                },
                get size() {
                    return Ir(this, !0)
                },
                has(i) {
                    return Ar.call(this, i, !0)
                },
                add: mn("add"),
                set: mn("set"),
                delete: mn("delete"),
                clear: mn("clear"),
                forEach: Rr(!0, !1)
            },
            s = {
                get(i) {
                    return Pr(this, i, !0, !0)
                },
                get size() {
                    return Ir(this, !0)
                },
                has(i) {
                    return Ar.call(this, i, !0)
                },
                add: mn("add"),
                set: mn("set"),
                delete: mn("delete"),
                clear: mn("clear"),
                forEach: Rr(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
            t[i] = Nr(i, !1, !1), n[i] = Nr(i, !0, !1), e[i] = Nr(i, !1, !0), s[i] = Nr(i, !0, !0)
        }), [t, n, e, s]
    }
    const [b_, k_, T_, E_] = v_();

    function ra(t, e) {
        const n = e ? t ? E_ : T_ : t ? k_ : b_;
        return (s, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? s : Reflect.get(le(n, r) && r in s ? n : s, r, i)
    }
    const w_ = {
            get: ra(!1, !1)
        },
        $_ = {
            get: ra(!1, !0)
        },
        S_ = {
            get: ra(!0, !1)
        },
        iu = new WeakMap,
        ou = new WeakMap,
        au = new WeakMap,
        O_ = new WeakMap;

    function x_(t) {
        switch (t) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
        }
    }

    function P_(t) {
        return t.__v_skip || !Object.isExtensible(t) ? 0 : x_(Qd(t))
    }

    function ia(t) {
        return rs(t) ? t : oa(t, !1, m_, w_, iu)
    }

    function A_(t) {
        return oa(t, !1, y_, $_, ou)
    }

    function lu(t) {
        return oa(t, !0, g_, S_, au)
    }

    function oa(t, e, n, s, r) {
        if (!$e(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
        const i = r.get(t);
        if (i) return i;
        const o = P_(t);
        if (o === 0) return t;
        const a = new Proxy(t, o === 2 ? s : n);
        return r.set(t, a), a
    }

    function Xs(t) {
        return rs(t) ? Xs(t.__v_raw) : !!(t && t.__v_isReactive)
    }

    function rs(t) {
        return !!(t && t.__v_isReadonly)
    }

    function Ft(t) {
        return !!(t && t.__v_isShallow)
    }

    function aa(t) {
        return t ? !!t.__v_raw : !1
    }

    function ue(t) {
        const e = t && t.__v_raw;
        return e ? ue(e) : t
    }

    function I_(t) {
        return !le(t, "__v_skip") && Object.isExtensible(t) && Bc(t, "__v_skip", !0), t
    }
    const et = t => $e(t) ? ia(t) : t,
        la = t => $e(t) ? lu(t) : t;

    function ze(t) {
        return t ? t.__v_isRef === !0 : !1
    }

    function Ve(t) {
        return uu(t, !1)
    }

    function cu(t) {
        return uu(t, !0)
    }

    function uu(t, e) {
        return ze(t) ? t : new R_(t, e)
    }
    class R_ {
        constructor(e, n) {
            this.dep = new ta, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : ue(e), this._value = n ? e : et(e), this.__v_isShallow = n
        }
        get value() {
            return this.dep.track(), this._value
        }
        set value(e) {
            const n = this._rawValue,
                s = this.__v_isShallow || Ft(e) || rs(e);
            e = s ? e : ue(e), xn(e, n) && (this._rawValue = e, this._value = s ? e : et(e), this.dep.trigger())
        }
    }

    function Wn(t) {
        return ze(t) ? t.value : t
    }
    const N_ = {
        get: (t, e, n) => e === "__v_raw" ? t : Wn(Reflect.get(t, e, n)),
        set: (t, e, n, s) => {
            const r = t[e];
            return ze(r) && !ze(n) ? (r.value = n, !0) : Reflect.set(t, e, n, s)
        }
    };

    function fu(t) {
        return Xs(t) ? t : new Proxy(t, N_)
    }
    class C_ {
        constructor(e, n, s) {
            this.fn = e, this.setter = n, this._value = void 0, this.dep = new ta(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ir - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s
        }
        notify() {
            this.flags |= 16, me !== this && this.dep.notify()
        }
        get value() {
            const e = this.dep.track();
            return Zc(this), e && (e.version = this.dep.version), this._value
        }
        set value(e) {
            this.setter && this.setter(e)
        }
    }

    function L_(t, e, n = !1) {
        let s, r;
        return se(t) ? s = t : (s = t.get, r = t.set), new C_(s, r, n)
    }
    const Cr = {},
        qr = new WeakMap;
    let qn;

    function D_(t, e = !1, n = qn) {
        if (n) {
            let s = qr.get(n);
            s || qr.set(n, s = []), s.push(t)
        }
    }

    function M_(t, e, n = ge) {
        const {
            immediate: s,
            deep: r,
            once: i,
            scheduler: o,
            augmentJob: a,
            call: l
        } = n, c = b => r ? b : Ft(b) || r === !1 || r === 0 ? kn(b, 1) : kn(b);
        let u, f, d, h, m = !1,
            _ = !1;
        if (ze(t) ? (f = () => t.value, m = Ft(t)) : Xs(t) ? (f = () => c(t), m = !0) : te(t) ? (_ = !0, m = t.some(b => Xs(b) || Ft(b)), f = () => t.map(b => {
                if (ze(b)) return b.value;
                if (Xs(b)) return c(b);
                if (se(b)) return l ? l(b, 2) : b()
            })) : se(t) ? e ? f = l ? () => l(t, 2) : t : f = () => {
                if (d) {
                    Nn();
                    try {
                        d()
                    } finally {
                        Cn()
                    }
                }
                const b = qn;
                qn = u;
                try {
                    return l ? l(t, 3, [h]) : t(h)
                } finally {
                    qn = b
                }
            } : f = Yt, e && r) {
            const b = f,
                E = r === !0 ? 1 / 0 : r;
            f = () => kn(b(), E)
        }
        const v = c_(),
            w = () => {
                u.stop(), v && Xo(v.effects, u)
            };
        if (i)
            if (e) {
                const b = e;
                e = (...E) => {
                    b(...E), w()
                }
            } else {
                const b = f;
                f = () => {
                    b(), w()
                }
            }
        let O = _ ? new Array(t.length).fill(Cr) : Cr;
        const k = b => {
            if (!(!(u.flags & 1) || !u.dirty && !b))
                if (e) {
                    const E = u.run();
                    if (r || m || (_ ? E.some(($, P) => xn($, O[P])) : xn(E, O))) {
                        d && d();
                        const $ = qn;
                        qn = u;
                        try {
                            const P = [E, O === Cr ? void 0 : _ && O[0] === Cr ? [] : O, h];
                            l ? l(e, 3, P) : e(...P), O = E
                        } finally {
                            qn = $
                        }
                    }
                } else u.run()
        };
        return a && a(k), u = new Yc(f), u.scheduler = o ? () => o(k, !1) : k, h = b => D_(b, !1, u), d = u.onStop = () => {
            const b = qr.get(u);
            if (b) {
                if (l) l(b, 4);
                else
                    for (const E of b) E();
                qr.delete(u)
            }
        }, e ? s ? k(!0) : O = u.run() : o ? o(k.bind(null, !0), !0) : u.run(), w.pause = u.pause.bind(u), w.resume = u.resume.bind(u), w.stop = w, w
    }

    function kn(t, e = 1 / 0, n) {
        if (e <= 0 || !$e(t) || t.__v_skip || (n = n || new Set, n.has(t))) return t;
        if (n.add(t), e--, ze(t)) kn(t.value, e, n);
        else if (te(t))
            for (let s = 0; s < t.length; s++) kn(t[s], e, n);
        else if (Fc(t) || Ts(t)) t.forEach(s => {
            kn(s, e, n)
        });
        else if (zc(t)) {
            for (const s in t) kn(t[s], e, n);
            for (const s of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, s) && kn(t[s], e, n)
        }
        return t
    }
    /**
     * @vue/runtime-core v3.5.4
     * (c) 2018-present Yuxi (Evan) You and Vue contributors
     * @license MIT
     **/
    function kr(t, e, n, s) {
        try {
            return s ? t(...s) : t()
        } catch (r) {
            _i(r, e, n)
        }
    }

    function Jt(t, e, n, s) {
        if (se(t)) {
            const r = kr(t, e, n, s);
            return r && jc(r) && r.catch(i => {
                _i(i, e, n)
            }), r
        }
        if (te(t)) {
            const r = [];
            for (let i = 0; i < t.length; i++) r.push(Jt(t[i], e, n, s));
            return r
        }
    }

    function _i(t, e, n, s = !0) {
        const r = e ? e.vnode : null,
            {
                errorHandler: i,
                throwUnhandledErrorInProduction: o
            } = e && e.appContext.config || ge;
        if (e) {
            let a = e.parent;
            const l = e.proxy,
                c = "https://vuejs.org/error-reference/#runtime-".concat(n);
            for (; a;) {
                const u = a.ec;
                if (u) {
                    for (let f = 0; f < u.length; f++)
                        if (u[f](t, l, c) === !1) return
                }
                a = a.parent
            }
            if (i) {
                Nn(), kr(i, null, 10, [t, l, c]), Cn();
                return
            }
        }
        F_(t, n, r, s, o)
    }

    function F_(t, e, n, s = !0, r = !1) {
        if (r) throw t;
        console.error(t)
    }
    let ar = !1,
        ao = !1;
    const tt = [];
    let Bt = 0;
    const Es = [];
    let vn = null,
        ms = 0;
    const du = Promise.resolve();
    let ca = null;

    function _u(t) {
        const e = ca || du;
        return t ? e.then(this ? t.bind(this) : t) : e
    }

    function j_(t) {
        let e = ar ? Bt + 1 : 0,
            n = tt.length;
        for (; e < n;) {
            const s = e + n >>> 1,
                r = tt[s],
                i = lr(r);
            i < t || i === t && r.flags & 2 ? e = s + 1 : n = s
        }
        return e
    }

    function ua(t) {
        if (!(t.flags & 1)) {
            const e = lr(t),
                n = tt[tt.length - 1];
            !n || !(t.flags & 2) && e >= lr(n) ? tt.push(t) : tt.splice(j_(e), 0, t), t.flags |= 1, hu()
        }
    }

    function hu() {
        !ar && !ao && (ao = !0, ca = du.then(mu))
    }

    function U_(t) {
        te(t) ? Es.push(...t) : vn && t.id === -1 ? vn.splice(ms + 1, 0, t) : t.flags & 1 || (Es.push(t), t.flags |= 1), hu()
    }

    function il(t, e, n = ar ? Bt + 1 : 0) {
        for (; n < tt.length; n++) {
            const s = tt[n];
            if (s && s.flags & 2) {
                if (t && s.id !== t.uid) continue;
                tt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags &= -2
            }
        }
    }

    function pu(t) {
        if (Es.length) {
            const e = [...new Set(Es)].sort((n, s) => lr(n) - lr(s));
            if (Es.length = 0, vn) {
                vn.push(...e);
                return
            }
            for (vn = e, ms = 0; ms < vn.length; ms++) {
                const n = vn[ms];
                n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
            }
            vn = null, ms = 0
        }
    }
    const lr = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;

    function mu(t) {
        ao = !1, ar = !0;
        try {
            for (Bt = 0; Bt < tt.length; Bt++) {
                const e = tt[Bt];
                e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), kr(e, e.i, e.i ? 15 : 14), e.flags &= -2)
            }
        } finally {
            for (; Bt < tt.length; Bt++) {
                const e = tt[Bt];
                e && (e.flags &= -2)
            }
            Bt = 0, tt.length = 0, pu(), ar = !1, ca = null, (tt.length || Es.length) && mu()
        }
    }
    let Lt = null,
        gu = null;

    function Kr(t) {
        const e = Lt;
        return Lt = t, gu = t && t.type.__scopeId || null, e
    }

    function z_(t, e = Lt, n) {
        if (!e || t._n) return t;
        const s = (...r) => {
            s._d && _l(-1);
            const i = Kr(e);
            let o;
            try {
                o = t(...r)
            } finally {
                Kr(i), s._d && _l(1)
            }
            return o
        };
        return s._n = !0, s._c = !0, s._d = !0, s
    }

    function Un(t, e, n, s) {
        const r = t.dirs,
            i = e && e.dirs;
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            i && (a.oldValue = i[o].value);
            let l = a.dir[s];
            l && (Nn(), Jt(l, n, 8, [t.el, a, t, e]), Cn())
        }
    }
    const G_ = Symbol("_vte"),
        B_ = t => t.__isTeleport;

    function fa(t, e) {
        t.shapeFlag & 6 && t.component ? (t.transition = e, fa(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
    } /*! #__NO_SIDE_EFFECTS__ */
    function da(t, e) {
        return se(t) ? Be({
            name: t.name
        }, e, {
            setup: t
        }) : t
    }

    function yu(t) {
        t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
    }

    function lo(t, e, n, s, r = !1) {
        if (te(t)) {
            t.forEach((m, _) => lo(m, e && (te(e) ? e[_] : e), n, s, r));
            return
        }
        if (Js(s) && !r) return;
        const i = s.shapeFlag & 4 ? ya(s.component) : s.el,
            o = r ? null : i,
            {
                i: a,
                r: l
            } = t,
            c = e && e.r,
            u = a.refs === ge ? a.refs = {} : a.refs,
            f = a.setupState,
            d = ue(f),
            h = f === ge ? () => !1 : m => le(d, m);
        if (c != null && c !== l && (Le(c) ? (u[c] = null, h(c) && (f[c] = null)) : ze(c) && (c.value = null)), se(l)) kr(l, a, 12, [o, u]);
        else {
            const m = Le(l),
                _ = ze(l);
            if (m || _) {
                const v = () => {
                    if (t.f) {
                        const w = m ? h(l) ? f[l] : u[l] : l.value;
                        r ? te(w) && Xo(w, i) : te(w) ? w.includes(i) || w.push(i) : m ? (u[l] = [i], h(l) && (f[l] = u[l])) : (l.value = [i], t.k && (u[t.k] = l.value))
                    } else m ? (u[l] = o, h(l) && (f[l] = o)) : _ && (l.value = o, t.k && (u[t.k] = o))
                };
                o ? (v.id = -1, ht(v, n)) : v()
            }
        }
    }
    const Js = t => !!t.type.__asyncLoader,
        vu = t => t.type.__isKeepAlive;

    function V_(t, e) {
        bu(t, "a", e)
    }

    function H_(t, e) {
        bu(t, "da", e)
    }

    function bu(t, e, n = He) {
        const s = t.__wdc || (t.__wdc = () => {
            let r = n;
            for (; r;) {
                if (r.isDeactivated) return;
                r = r.parent
            }
            return t()
        });
        if (hi(e, s, n), n) {
            let r = n.parent;
            for (; r && r.parent;) vu(r.parent.vnode) && W_(s, e, n, r), r = r.parent
        }
    }

    function W_(t, e, n, s) {
        const r = hi(e, t, s, !0);
        ha(() => {
            Xo(s[e], r)
        }, n)
    }

    function hi(t, e, n = He, s = !1) {
        if (n) {
            const r = n[t] || (n[t] = []),
                i = e.__weh || (e.__weh = (...o) => {
                    Nn();
                    const a = Er(n),
                        l = Jt(e, n, t, o);
                    return a(), Cn(), l
                });
            return s ? r.unshift(i) : r.push(i), i
        }
    }
    const dn = t => (e, n = He) => {
            (!mi || t === "sp") && hi(t, (...s) => e(...s), n)
        },
        ku = dn("bm"),
        _a = dn("m"),
        q_ = dn("bu"),
        K_ = dn("u"),
        Y_ = dn("bum"),
        ha = dn("um"),
        X_ = dn("sp"),
        J_ = dn("rtg"),
        Q_ = dn("rtc");

    function Z_(t, e = He) {
        hi("ec", t, e)
    }
    const eh = Symbol.for("v-ndc"),
        co = t => t ? zu(t) ? ya(t) : co(t.parent) : null,
        Qs = Be(Object.create(null), {
            $: t => t,
            $el: t => t.vnode.el,
            $data: t => t.data,
            $props: t => t.props,
            $attrs: t => t.attrs,
            $slots: t => t.slots,
            $refs: t => t.refs,
            $parent: t => co(t.parent),
            $root: t => co(t.root),
            $host: t => t.ce,
            $emit: t => t.emit,
            $options: t => pa(t),
            $forceUpdate: t => t.f || (t.f = () => {
                ua(t.update)
            }),
            $nextTick: t => t.n || (t.n = _u.bind(t.proxy)),
            $watch: t => Th.bind(t)
        }),
        Fi = (t, e) => t !== ge && !t.__isScriptSetup && le(t, e),
        th = {
            get({
                _: t
            }, e) {
                if (e === "__v_skip") return !0;
                const {
                    ctx: n,
                    setupState: s,
                    data: r,
                    props: i,
                    accessCache: o,
                    type: a,
                    appContext: l
                } = t;
                let c;
                if (e[0] !== "$") {
                    const h = o[e];
                    if (h !== void 0) switch (h) {
                        case 1:
                            return s[e];
                        case 2:
                            return r[e];
                        case 4:
                            return n[e];
                        case 3:
                            return i[e]
                    } else {
                        if (Fi(s, e)) return o[e] = 1, s[e];
                        if (r !== ge && le(r, e)) return o[e] = 2, r[e];
                        if ((c = t.propsOptions[0]) && le(c, e)) return o[e] = 3, i[e];
                        if (n !== ge && le(n, e)) return o[e] = 4, n[e];
                        uo && (o[e] = 0)
                    }
                }
                const u = Qs[e];
                let f, d;
                if (u) return e === "$attrs" && Ye(t.attrs, "get", ""), u(t);
                if ((f = a.__cssModules) && (f = f[e])) return f;
                if (n !== ge && le(n, e)) return o[e] = 4, n[e];
                if (d = l.config.globalProperties, le(d, e)) return d[e]
            },
            set({
                _: t
            }, e, n) {
                const {
                    data: s,
                    setupState: r,
                    ctx: i
                } = t;
                return Fi(r, e) ? (r[e] = n, !0) : s !== ge && le(s, e) ? (s[e] = n, !0) : le(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = n, !0)
            },
            has({
                _: {
                    data: t,
                    setupState: e,
                    accessCache: n,
                    ctx: s,
                    appContext: r,
                    propsOptions: i
                }
            }, o) {
                let a;
                return !!n[o] || t !== ge && le(t, o) || Fi(e, o) || (a = i[0]) && le(a, o) || le(s, o) || le(Qs, o) || le(r.config.globalProperties, o)
            },
            defineProperty(t, e, n) {
                return n.get != null ? t._.accessCache[e] = 0 : le(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
            }
        };

    function ol(t) {
        return te(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
    }
    let uo = !0;

    function nh(t) {
        const e = pa(t),
            n = t.proxy,
            s = t.ctx;
        uo = !1, e.beforeCreate && al(e.beforeCreate, t, "bc");
        const {
            data: r,
            computed: i,
            methods: o,
            watch: a,
            provide: l,
            inject: c,
            created: u,
            beforeMount: f,
            mounted: d,
            beforeUpdate: h,
            updated: m,
            activated: _,
            deactivated: v,
            beforeDestroy: w,
            beforeUnmount: O,
            destroyed: k,
            unmounted: b,
            render: E,
            renderTracked: $,
            renderTriggered: P,
            errorCaptured: R,
            serverPrefetch: A,
            expose: q,
            inheritAttrs: Z,
            components: W,
            directives: Y,
            filters: ae
        } = e;
        if (c && sh(c, s, null), o)
            for (const L in o) {
                const G = o[L];
                se(G) && (s[L] = G.bind(n))
            }
        if (r) {
            const L = r.call(n, n);
            $e(L) && (t.data = ia(L))
        }
        if (uo = !0, i)
            for (const L in i) {
                const G = i[L],
                    Te = se(G) ? G.bind(n, n) : se(G.get) ? G.get.bind(n, n) : Yt,
                    _e = !se(G) && se(G.set) ? G.set.bind(n) : Yt,
                    de = Ct({
                        get: Te,
                        set: _e
                    });
                Object.defineProperty(s, L, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => de.value,
                    set: ie => de.value = ie
                })
            }
        if (a)
            for (const L in a) Tu(a[L], s, n, L);
        if (l) {
            const L = se(l) ? l.call(n) : l;
            Reflect.ownKeys(L).forEach(G => {
                ch(G, L[G])
            })
        }
        u && al(u, t, "c");

        function J(L, G) {
            te(G) ? G.forEach(Te => L(Te.bind(n))) : G && L(G.bind(n))
        }
        if (J(ku, f), J(_a, d), J(q_, h), J(K_, m), J(V_, _), J(H_, v), J(Z_, R), J(Q_, $), J(J_, P), J(Y_, O), J(ha, b), J(X_, A), te(q))
            if (q.length) {
                const L = t.exposed || (t.exposed = {});
                q.forEach(G => {
                    Object.defineProperty(L, G, {
                        get: () => n[G],
                        set: Te => n[G] = Te
                    })
                })
            } else t.exposed || (t.exposed = {});
        E && t.render === Yt && (t.render = E), Z != null && (t.inheritAttrs = Z), W && (t.components = W), Y && (t.directives = Y), A && yu(t)
    }

    function sh(t, e, n = Yt) {
        te(t) && (t = fo(t));
        for (const s in t) {
            const r = t[s];
            let i;
            $e(r) ? "default" in r ? i = Zs(r.from || s, r.default, !0) : i = Zs(r.from || s) : i = Zs(r), ze(i) ? Object.defineProperty(e, s, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: o => i.value = o
            }) : e[s] = i
        }
    }

    function al(t, e, n) {
        Jt(te(t) ? t.map(s => s.bind(e.proxy)) : t.bind(e.proxy), e, n)
    }

    function Tu(t, e, n, s) {
        let r = s.includes(".") ? Du(n, s) : () => n[s];
        if (Le(t)) {
            const i = e[t];
            se(i) && $n(r, i)
        } else if (se(t)) $n(r, t.bind(n));
        else if ($e(t))
            if (te(t)) t.forEach(i => Tu(i, e, n, s));
            else {
                const i = se(t.handler) ? t.handler.bind(n) : e[t.handler];
                se(i) && $n(r, i, t)
            }
    }

    function pa(t) {
        const e = t.type,
            {
                mixins: n,
                extends: s
            } = e,
            {
                mixins: r,
                optionsCache: i,
                config: {
                    optionMergeStrategies: o
                }
            } = t.appContext,
            a = i.get(e);
        let l;
        return a ? l = a : !r.length && !n && !s ? l = e : (l = {}, r.length && r.forEach(c => Yr(l, c, o, !0)), Yr(l, e, o)), $e(e) && i.set(e, l), l
    }

    function Yr(t, e, n, s = !1) {
        const {
            mixins: r,
            extends: i
        } = e;
        i && Yr(t, i, n, !0), r && r.forEach(o => Yr(t, o, n, !0));
        for (const o in e)
            if (!(s && o === "expose")) {
                const a = rh[o] || n && n[o];
                t[o] = a ? a(t[o], e[o]) : e[o]
            }
        return t
    }
    const rh = {
        data: ll,
        props: cl,
        emits: cl,
        methods: Hs,
        computed: Hs,
        beforeCreate: Qe,
        created: Qe,
        beforeMount: Qe,
        mounted: Qe,
        beforeUpdate: Qe,
        updated: Qe,
        beforeDestroy: Qe,
        beforeUnmount: Qe,
        destroyed: Qe,
        unmounted: Qe,
        activated: Qe,
        deactivated: Qe,
        errorCaptured: Qe,
        serverPrefetch: Qe,
        components: Hs,
        directives: Hs,
        watch: oh,
        provide: ll,
        inject: ih
    };

    function ll(t, e) {
        return e ? t ? function() {
            return Be(se(t) ? t.call(this, this) : t, se(e) ? e.call(this, this) : e)
        } : e : t
    }

    function ih(t, e) {
        return Hs(fo(t), fo(e))
    }

    function fo(t) {
        if (te(t)) {
            const e = {};
            for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
            return e
        }
        return t
    }

    function Qe(t, e) {
        return t ? [...new Set([].concat(t, e))] : e
    }

    function Hs(t, e) {
        return t ? Be(Object.create(null), t, e) : e
    }

    function cl(t, e) {
        return t ? te(t) && te(e) ? [...new Set([...t, ...e])] : Be(Object.create(null), ol(t), ol(e != null ? e : {})) : e
    }

    function oh(t, e) {
        if (!t) return e;
        if (!e) return t;
        const n = Be(Object.create(null), t);
        for (const s in e) n[s] = Qe(t[s], e[s]);
        return n
    }

    function Eu() {
        return {
            app: null,
            config: {
                isNativeTag: Xd,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }
    let ah = 0;

    function lh(t, e) {
        return function(s, r = null) {
            se(s) || (s = Be({}, s)), r != null && !$e(r) && (r = null);
            const i = Eu(),
                o = new WeakSet,
                a = [];
            let l = !1;
            const c = i.app = {
                _uid: ah++,
                _component: s,
                _props: r,
                _container: null,
                _context: i,
                _instance: null,
                version: Hh,
                get config() {
                    return i.config
                },
                set config(u) {},
                use(u, ...f) {
                    return o.has(u) || (u && se(u.install) ? (o.add(u), u.install(c, ...f)) : se(u) && (o.add(u), u(c, ...f))), c
                },
                mixin(u) {
                    return i.mixins.includes(u) || i.mixins.push(u), c
                },
                component(u, f) {
                    return f ? (i.components[u] = f, c) : i.components[u]
                },
                directive(u, f) {
                    return f ? (i.directives[u] = f, c) : i.directives[u]
                },
                mount(u, f, d) {
                    if (!l) {
                        const h = c._ceVNode || st(s, r);
                        return h.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && e ? e(h, u) : t(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, ya(h.component)
                    }
                },
                onUnmount(u) {
                    a.push(u)
                },
                unmount() {
                    l && (Jt(a, c._instance, 16), t(null, c._container), delete c._container.__vue_app__)
                },
                provide(u, f) {
                    return i.provides[u] = f, c
                },
                runWithContext(u) {
                    const f = ws;
                    ws = c;
                    try {
                        return u()
                    } finally {
                        ws = f
                    }
                }
            };
            return c
        }
    }
    let ws = null;

    function ch(t, e) {
        if (He) {
            let n = He.provides;
            const s = He.parent && He.parent.provides;
            s === n && (n = He.provides = Object.create(s)), n[t] = e
        }
    }

    function Zs(t, e, n = !1) {
        const s = He || Lt;
        if (s || ws) {
            const r = ws ? ws._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
            if (r && t in r) return r[t];
            if (arguments.length > 1) return n && se(e) ? e.call(s && s.proxy) : e
        }
    }
    const wu = {},
        $u = () => Object.create(wu),
        Su = t => Object.getPrototypeOf(t) === wu;

    function uh(t, e, n, s = !1) {
        const r = {},
            i = $u();
        t.propsDefaults = Object.create(null), Ou(t, e, r, i);
        for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
        n ? t.props = s ? r : A_(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i
    }

    function fh(t, e, n, s) {
        const {
            props: r,
            attrs: i,
            vnode: {
                patchFlag: o
            }
        } = t, a = ue(r), [l] = t.propsOptions;
        let c = !1;
        if ((s || o > 0) && !(o & 16)) {
            if (o & 8) {
                const u = t.vnode.dynamicProps;
                for (let f = 0; f < u.length; f++) {
                    let d = u[f];
                    if (pi(t.emitsOptions, d)) continue;
                    const h = e[d];
                    if (l)
                        if (le(i, d)) h !== i[d] && (i[d] = h, c = !0);
                        else {
                            const m = ss(d);
                            r[m] = _o(l, a, m, h, t, !1)
                        }
                    else h !== i[d] && (i[d] = h, c = !0)
                }
            }
        } else {
            Ou(t, e, r, i) && (c = !0);
            let u;
            for (const f in a)(!e || !le(e, f) && ((u = cs(f)) === f || !le(e, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = _o(l, a, f, void 0, t, !0)) : delete r[f]);
            if (i !== a)
                for (const f in i)(!e || !le(e, f)) && (delete i[f], c = !0)
        }
        c && cn(t.attrs, "set", "")
    }

    function Ou(t, e, n, s) {
        const [r, i] = t.propsOptions;
        let o = !1,
            a;
        if (e)
            for (let l in e) {
                if (Ks(l)) continue;
                const c = e[l];
                let u;
                r && le(r, u = ss(l)) ? !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : pi(t.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0)
            }
        if (i) {
            const l = ue(n),
                c = a || ge;
            for (let u = 0; u < i.length; u++) {
                const f = i[u];
                n[f] = _o(r, l, f, c[f], t, !le(c, f))
            }
        }
        return o
    }

    function _o(t, e, n, s, r, i) {
        const o = t[n];
        if (o != null) {
            const a = le(o, "default");
            if (a && s === void 0) {
                const l = o.default;
                if (o.type !== Function && !o.skipFactory && se(l)) {
                    const {
                        propsDefaults: c
                    } = r;
                    if (n in c) s = c[n];
                    else {
                        const u = Er(r);
                        s = c[n] = l.call(null, e), u()
                    }
                } else s = l;
                r.ce && r.ce._setProp(n, s)
            }
            o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === cs(n)) && (s = !0))
        }
        return s
    }
    const dh = new WeakMap;

    function xu(t, e, n = !1) {
        const s = n ? dh : e.propsCache,
            r = s.get(t);
        if (r) return r;
        const i = t.props,
            o = {},
            a = [];
        let l = !1;
        if (!se(t)) {
            const u = f => {
                l = !0;
                const [d, h] = xu(f, e, !0);
                Be(o, d), h && a.push(...h)
            };
            !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u)
        }
        if (!i && !l) return $e(t) && s.set(t, ks), ks;
        if (te(i))
            for (let u = 0; u < i.length; u++) {
                const f = ss(i[u]);
                ul(f) && (o[f] = ge)
            } else if (i)
                for (const u in i) {
                    const f = ss(u);
                    if (ul(f)) {
                        const d = i[u],
                            h = o[f] = te(d) || se(d) ? {
                                type: d
                            } : Be({}, d),
                            m = h.type;
                        let _ = !1,
                            v = !0;
                        if (te(m))
                            for (let w = 0; w < m.length; ++w) {
                                const O = m[w],
                                    k = se(O) && O.name;
                                if (k === "Boolean") {
                                    _ = !0;
                                    break
                                } else k === "String" && (v = !1)
                            } else _ = se(m) && m.name === "Boolean";
                        h[0] = _, h[1] = v, (_ || le(h, "default")) && a.push(f)
                    }
                }
        const c = [o, a];
        return $e(t) && s.set(t, c), c
    }

    function ul(t) {
        return t[0] !== "$" && !Ks(t)
    }
    const Pu = t => t[0] === "_" || t === "$stable",
        ma = t => te(t) ? t.map(Ht) : [Ht(t)],
        _h = (t, e, n) => {
            if (e._n) return e;
            const s = z_((...r) => ma(e(...r)), n);
            return s._c = !1, s
        },
        Au = (t, e, n) => {
            const s = t._ctx;
            for (const r in t) {
                if (Pu(r)) continue;
                const i = t[r];
                if (se(i)) e[r] = _h(r, i, s);
                else if (i != null) {
                    const o = ma(i);
                    e[r] = () => o
                }
            }
        },
        Iu = (t, e) => {
            const n = ma(e);
            t.slots.default = () => n
        },
        Ru = (t, e, n) => {
            for (const s in e)(n || s !== "_") && (t[s] = e[s])
        },
        hh = (t, e, n) => {
            const s = t.slots = $u();
            if (t.vnode.shapeFlag & 32) {
                const r = e._;
                r ? (Ru(s, e, n), n && Bc(s, "_", r, !0)) : Au(e, s)
            } else e && Iu(t, e)
        },
        ph = (t, e, n) => {
            const {
                vnode: s,
                slots: r
            } = t;
            let i = !0,
                o = ge;
            if (s.shapeFlag & 32) {
                const a = e._;
                a ? n && a === 1 ? i = !1 : Ru(r, e, n) : (i = !e.$stable, Au(e, r)), o = e
            } else e && (Iu(t, e), o = {
                default: 1
            });
            if (i)
                for (const a in r) !Pu(a) && o[a] == null && delete r[a]
        },
        ht = Ph;

    function mh(t) {
        return gh(t)
    }

    function gh(t, e) {
        const n = Vc();
        n.__VUE__ = !0;
        const {
            insert: s,
            remove: r,
            patchProp: i,
            createElement: o,
            createText: a,
            createComment: l,
            setText: c,
            setElementText: u,
            parentNode: f,
            nextSibling: d,
            setScopeId: h = Yt,
            insertStaticContent: m
        } = t, _ = (T, y, I, U = null, D = null, F = null, V = void 0, p = null, g = !!y.dynamicChildren) => {
            if (T === y) return;
            T && !zs(T, y) && (U = Zt(T), ie(T, D, F, !0), T = null), y.patchFlag === -2 && (g = !1, y.dynamicChildren = null);
            const {
                type: S,
                ref: M,
                shapeFlag: z
            } = y;
            switch (S) {
                case Tr:
                    v(T, y, I, U);
                    break;
                case is:
                    w(T, y, I, U);
                    break;
                case Mr:
                    T == null && O(y, I, U, V);
                    break;
                case Nt:
                    W(T, y, I, U, D, F, V, p, g);
                    break;
                default:
                    z & 1 ? E(T, y, I, U, D, F, V, p, g) : z & 6 ? Y(T, y, I, U, D, F, V, p, g) : (z & 64 || z & 128) && S.process(T, y, I, U, D, F, V, p, g, Et)
            }
            M != null && D && lo(M, T && T.ref, F, y || T, !y)
        }, v = (T, y, I, U) => {
            if (T == null) s(y.el = a(y.children), I, U);
            else {
                const D = y.el = T.el;
                y.children !== T.children && c(D, y.children)
            }
        }, w = (T, y, I, U) => {
            T == null ? s(y.el = l(y.children || ""), I, U) : y.el = T.el
        }, O = (T, y, I, U) => {
            [T.el, T.anchor] = m(T.children, y, I, U, T.el, T.anchor)
        }, k = ({
            el: T,
            anchor: y
        }, I, U) => {
            let D;
            for (; T && T !== y;) D = d(T), s(T, I, U), T = D;
            s(y, I, U)
        }, b = ({
            el: T,
            anchor: y
        }) => {
            let I;
            for (; T && T !== y;) I = d(T), r(T), T = I;
            r(y)
        }, E = (T, y, I, U, D, F, V, p, g) => {
            y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), T == null ? $(y, I, U, D, F, V, p, g) : A(T, y, D, F, V, p, g)
        }, $ = (T, y, I, U, D, F, V, p) => {
            let g, S;
            const {
                props: M,
                shapeFlag: z,
                transition: j,
                dirs: x
            } = T;
            if (g = T.el = o(T.type, F, M && M.is, M), z & 8 ? u(g, T.children) : z & 16 && R(T.children, g, null, U, D, ji(T, F), V, p), x && Un(T, null, U, "created"), P(g, T, T.scopeId, V, U), M) {
                for (const K in M) K !== "value" && !Ks(K) && i(g, K, null, M[K], F, U);
                "value" in M && i(g, "value", null, M.value, F), (S = M.onVnodeBeforeMount) && Gt(S, U, T)
            }
            x && Un(T, null, U, "beforeMount");
            const C = yh(D, j);
            C && j.beforeEnter(g), s(g, y, I), ((S = M && M.onVnodeMounted) || C || x) && ht(() => {
                S && Gt(S, U, T), C && j.enter(g), x && Un(T, null, U, "mounted")
            }, D)
        }, P = (T, y, I, U, D) => {
            if (I && h(T, I), U)
                for (let F = 0; F < U.length; F++) h(T, U[F]);
            if (D) {
                let F = D.subTree;
                if (y === F || Fu(F.type) && (F.ssContent === y || F.ssFallback === y)) {
                    const V = D.vnode;
                    P(T, V, V.scopeId, V.slotScopeIds, D.parent)
                }
            }
        }, R = (T, y, I, U, D, F, V, p, g = 0) => {
            for (let S = g; S < T.length; S++) {
                const M = T[S] = p ? bn(T[S]) : Ht(T[S]);
                _(null, M, y, I, U, D, F, V, p)
            }
        }, A = (T, y, I, U, D, F, V) => {
            const p = y.el = T.el;
            let {
                patchFlag: g,
                dynamicChildren: S,
                dirs: M
            } = y;
            g |= T.patchFlag & 16;
            const z = T.props || ge,
                j = y.props || ge;
            let x;
            if (I && zn(I, !1), (x = j.onVnodeBeforeUpdate) && Gt(x, I, y, T), M && Un(y, T, I, "beforeUpdate"), I && zn(I, !0), (z.innerHTML && j.innerHTML == null || z.textContent && j.textContent == null) && u(p, ""), S ? q(T.dynamicChildren, S, p, I, U, ji(y, D), F) : V || G(T, y, p, null, I, U, ji(y, D), F, !1), g > 0) {
                if (g & 16) Z(p, z, j, I, D);
                else if (g & 2 && z.class !== j.class && i(p, "class", null, j.class, D), g & 4 && i(p, "style", z.style, j.style, D), g & 8) {
                    const C = y.dynamicProps;
                    for (let K = 0; K < C.length; K++) {
                        const X = C[K],
                            Se = z[X],
                            Pe = j[X];
                        (Pe !== Se || X === "value") && i(p, X, Se, Pe, D, I)
                    }
                }
                g & 1 && T.children !== y.children && u(p, y.children)
            } else !V && S == null && Z(p, z, j, I, D);
            ((x = j.onVnodeUpdated) || M) && ht(() => {
                x && Gt(x, I, y, T), M && Un(y, T, I, "updated")
            }, U)
        }, q = (T, y, I, U, D, F, V) => {
            for (let p = 0; p < y.length; p++) {
                const g = T[p],
                    S = y[p],
                    M = g.el && (g.type === Nt || !zs(g, S) || g.shapeFlag & 70) ? f(g.el) : I;
                _(g, S, M, null, U, D, F, V, !0)
            }
        }, Z = (T, y, I, U, D) => {
            if (y !== I) {
                if (y !== ge)
                    for (const F in y) !Ks(F) && !(F in I) && i(T, F, y[F], null, D, U);
                for (const F in I) {
                    if (Ks(F)) continue;
                    const V = I[F],
                        p = y[F];
                    V !== p && F !== "value" && i(T, F, p, V, D, U)
                }
                "value" in I && i(T, "value", y.value, I.value, D)
            }
        }, W = (T, y, I, U, D, F, V, p, g) => {
            const S = y.el = T ? T.el : a(""),
                M = y.anchor = T ? T.anchor : a("");
            let {
                patchFlag: z,
                dynamicChildren: j,
                slotScopeIds: x
            } = y;
            x && (p = p ? p.concat(x) : x), T == null ? (s(S, I, U), s(M, I, U), R(y.children || [], I, M, D, F, V, p, g)) : z > 0 && z & 64 && j && T.dynamicChildren ? (q(T.dynamicChildren, j, I, D, F, V, p), (y.key != null || D && y === D.subTree) && Nu(T, y, !0)) : G(T, y, I, M, D, F, V, p, g)
        }, Y = (T, y, I, U, D, F, V, p, g) => {
            y.slotScopeIds = p, T == null ? y.shapeFlag & 512 ? D.ctx.activate(y, I, U, V, g) : ae(y, I, U, D, F, V, g) : fe(T, y, g)
        }, ae = (T, y, I, U, D, F, V) => {
            const p = T.component = jh(T, U, D);
            if (vu(T) && (p.ctx.renderer = Et), Uh(p, !1, V), p.asyncDep) {
                if (D && D.registerDep(p, J, V), !T.el) {
                    const g = p.subTree = st(is);
                    w(null, g, y, I)
                }
            } else J(p, T, y, I, D, F, V)
        }, fe = (T, y, I) => {
            const U = y.component = T.component;
            if (Oh(T, y, I))
                if (U.asyncDep && !U.asyncResolved) {
                    L(U, y, I);
                    return
                } else U.next = y, U.update();
            else y.el = T.el, U.vnode = y
        }, J = (T, y, I, U, D, F, V) => {
            const p = () => {
                if (T.isMounted) {
                    let {
                        next: z,
                        bu: j,
                        u: x,
                        parent: C,
                        vnode: K
                    } = T; {
                        const Je = Cu(T);
                        if (Je) {
                            z && (z.el = K.el, L(T, z, V)), Je.asyncDep.then(() => {
                                T.isUnmounted || p()
                            });
                            return
                        }
                    }
                    let X = z,
                        Se;
                    zn(T, !1), z ? (z.el = K.el, L(T, z, V)) : z = K, j && Ni(j), (Se = z.props && z.props.onVnodeBeforeUpdate) && Gt(Se, C, z, K), zn(T, !0);
                    const Pe = Ui(T),
                        Me = T.subTree;
                    T.subTree = Pe, _(Me, Pe, f(Me.el), Zt(Me), T, D, F), z.el = Pe.el, X === null && xh(T, Pe.el), x && ht(x, D), (Se = z.props && z.props.onVnodeUpdated) && ht(() => Gt(Se, C, z, K), D)
                } else {
                    let z;
                    const {
                        el: j,
                        props: x
                    } = y, {
                        bm: C,
                        m: K,
                        parent: X,
                        root: Se,
                        type: Pe
                    } = T, Me = Js(y);
                    if (zn(T, !1), C && Ni(C), !Me && (z = x && x.onVnodeBeforeMount) && Gt(z, X, y), zn(T, !0), j && pn) {
                        const Je = () => {
                            T.subTree = Ui(T), pn(j, T.subTree, T, D, null)
                        };
                        Me && Pe.__asyncHydrate ? Pe.__asyncHydrate(j, T, Je) : Je()
                    } else {
                        Se.ce && Se.ce._injectChildStyle(Pe);
                        const Je = T.subTree = Ui(T);
                        _(null, Je, I, U, T, D, F), y.el = Je.el
                    }
                    if (K && ht(K, D), !Me && (z = x && x.onVnodeMounted)) {
                        const Je = y;
                        ht(() => Gt(z, X, Je), D)
                    }(y.shapeFlag & 256 || X && Js(X.vnode) && X.vnode.shapeFlag & 256) && T.a && ht(T.a, D), T.isMounted = !0, y = I = U = null
                }
            };
            T.scope.on();
            const g = T.effect = new Yc(p);
            T.scope.off();
            const S = T.update = g.run.bind(g),
                M = T.job = g.runIfDirty.bind(g);
            M.i = T, M.id = T.uid, g.scheduler = () => ua(M), zn(T, !0), S()
        }, L = (T, y, I) => {
            y.component = T;
            const U = T.vnode.props;
            T.vnode = y, T.next = null, fh(T, y.props, U, I), ph(T, y.children, I), Nn(), il(T), Cn()
        }, G = (T, y, I, U, D, F, V, p, g = !1) => {
            const S = T && T.children,
                M = T ? T.shapeFlag : 0,
                z = y.children,
                {
                    patchFlag: j,
                    shapeFlag: x
                } = y;
            if (j > 0) {
                if (j & 128) {
                    _e(S, z, I, U, D, F, V, p, g);
                    return
                } else if (j & 256) {
                    Te(S, z, I, U, D, F, V, p, g);
                    return
                }
            }
            x & 8 ? (M & 16 && At(S, D, F), z !== S && u(I, z)) : M & 16 ? x & 16 ? _e(S, z, I, U, D, F, V, p, g) : At(S, D, F, !0) : (M & 8 && u(I, ""), x & 16 && R(z, I, U, D, F, V, p, g))
        }, Te = (T, y, I, U, D, F, V, p, g) => {
            T = T || ks, y = y || ks;
            const S = T.length,
                M = y.length,
                z = Math.min(S, M);
            let j;
            for (j = 0; j < z; j++) {
                const x = y[j] = g ? bn(y[j]) : Ht(y[j]);
                _(T[j], x, I, null, D, F, V, p, g)
            }
            S > M ? At(T, D, F, !0, !1, z) : R(y, I, U, D, F, V, p, g, z)
        }, _e = (T, y, I, U, D, F, V, p, g) => {
            let S = 0;
            const M = y.length;
            let z = T.length - 1,
                j = M - 1;
            for (; S <= z && S <= j;) {
                const x = T[S],
                    C = y[S] = g ? bn(y[S]) : Ht(y[S]);
                if (zs(x, C)) _(x, C, I, null, D, F, V, p, g);
                else break;
                S++
            }
            for (; S <= z && S <= j;) {
                const x = T[z],
                    C = y[j] = g ? bn(y[j]) : Ht(y[j]);
                if (zs(x, C)) _(x, C, I, null, D, F, V, p, g);
                else break;
                z--, j--
            }
            if (S > z) {
                if (S <= j) {
                    const x = j + 1,
                        C = x < M ? y[x].el : U;
                    for (; S <= j;) _(null, y[S] = g ? bn(y[S]) : Ht(y[S]), I, C, D, F, V, p, g), S++
                }
            } else if (S > j)
                for (; S <= z;) ie(T[S], D, F, !0), S++;
            else {
                const x = S,
                    C = S,
                    K = new Map;
                for (S = C; S <= j; S++) {
                    const dt = y[S] = g ? bn(y[S]) : Ht(y[S]);
                    dt.key != null && K.set(dt.key, S)
                }
                let X, Se = 0;
                const Pe = j - C + 1;
                let Me = !1,
                    Je = 0;
                const fs = new Array(Pe);
                for (S = 0; S < Pe; S++) fs[S] = 0;
                for (S = x; S <= z; S++) {
                    const dt = T[S];
                    if (Se >= Pe) {
                        ie(dt, D, F, !0);
                        continue
                    }
                    let Ut;
                    if (dt.key != null) Ut = K.get(dt.key);
                    else
                        for (X = C; X <= j; X++)
                            if (fs[X - C] === 0 && zs(dt, y[X])) {
                                Ut = X;
                                break
                            }
                    Ut === void 0 ? ie(dt, D, F, !0) : (fs[Ut - C] = S + 1, Ut >= Je ? Je = Ut : Me = !0, _(dt, y[Ut], I, null, D, F, V, p, g), Se++)
                }
                const qa = Me ? vh(fs) : ks;
                for (X = qa.length - 1, S = Pe - 1; S >= 0; S--) {
                    const dt = C + S,
                        Ut = y[dt],
                        Ka = dt + 1 < M ? y[dt + 1].el : U;
                    fs[S] === 0 ? _(null, Ut, I, Ka, D, F, V, p, g) : Me && (X < 0 || S !== qa[X] ? de(Ut, I, Ka, 2) : X--)
                }
            }
        }, de = (T, y, I, U, D = null) => {
            const {
                el: F,
                type: V,
                transition: p,
                children: g,
                shapeFlag: S
            } = T;
            if (S & 6) {
                de(T.component.subTree, y, I, U);
                return
            }
            if (S & 128) {
                T.suspense.move(y, I, U);
                return
            }
            if (S & 64) {
                V.move(T, y, I, Et);
                return
            }
            if (V === Nt) {
                s(F, y, I);
                for (let z = 0; z < g.length; z++) de(g[z], y, I, U);
                s(T.anchor, y, I);
                return
            }
            if (V === Mr) {
                k(T, y, I);
                return
            }
            if (U !== 2 && S & 1 && p)
                if (U === 0) p.beforeEnter(F), s(F, y, I), ht(() => p.enter(F), D);
                else {
                    const {
                        leave: z,
                        delayLeave: j,
                        afterLeave: x
                    } = p, C = () => s(F, y, I), K = () => {
                        z(F, () => {
                            C(), x && x()
                        })
                    };
                    j ? j(F, C, K) : K()
                }
            else s(F, y, I)
        }, ie = (T, y, I, U = !1, D = !1) => {
            const {
                type: F,
                props: V,
                ref: p,
                children: g,
                dynamicChildren: S,
                shapeFlag: M,
                patchFlag: z,
                dirs: j,
                cacheIndex: x
            } = T;
            if (z === -2 && (D = !1), p != null && lo(p, null, I, T, !0), x != null && (y.renderCache[x] = void 0), M & 256) {
                y.ctx.deactivate(T);
                return
            }
            const C = M & 1 && j,
                K = !Js(T);
            let X;
            if (K && (X = V && V.onVnodeBeforeUnmount) && Gt(X, y, T), M & 6) Xe(T.component, I, U);
            else {
                if (M & 128) {
                    T.suspense.unmount(I, U);
                    return
                }
                C && Un(T, null, y, "beforeUnmount"), M & 64 ? T.type.remove(T, y, I, Et, U) : S && !S.hasOnce && (F !== Nt || z > 0 && z & 64) ? At(S, y, I, !1, !0) : (F === Nt && z & 384 || !D && M & 16) && At(g, y, I), U && Pt(T)
            }(K && (X = V && V.onVnodeUnmounted) || C) && ht(() => {
                X && Gt(X, y, T), C && Un(T, null, y, "unmounted")
            }, I)
        }, Pt = T => {
            const {
                type: y,
                el: I,
                anchor: U,
                transition: D
            } = T;
            if (y === Nt) {
                De(I, U);
                return
            }
            if (y === Mr) {
                b(T);
                return
            }
            const F = () => {
                r(I), D && !D.persisted && D.afterLeave && D.afterLeave()
            };
            if (T.shapeFlag & 1 && D && !D.persisted) {
                const {
                    leave: V,
                    delayLeave: p
                } = D, g = () => V(I, F);
                p ? p(T.el, F, g) : g()
            } else F()
        }, De = (T, y) => {
            let I;
            for (; T !== y;) I = d(T), r(T), T = I;
            r(y)
        }, Xe = (T, y, I) => {
            const {
                bum: U,
                scope: D,
                job: F,
                subTree: V,
                um: p,
                m: g,
                a: S
            } = T;
            fl(g), fl(S), U && Ni(U), D.stop(), F && (F.flags |= 8, ie(V, T, y, I)), p && ht(p, y), ht(() => {
                T.isUnmounted = !0
            }, y), y && y.pendingBranch && !y.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve())
        }, At = (T, y, I, U = !1, D = !1, F = 0) => {
            for (let V = F; V < T.length; V++) ie(T[V], y, I, U, D)
        }, Zt = T => {
            if (T.shapeFlag & 6) return Zt(T.component.subTree);
            if (T.shapeFlag & 128) return T.suspense.next();
            const y = d(T.anchor || T.el),
                I = y && y[G_];
            return I ? d(I) : y
        };
        let en = !1;
        const _n = (T, y, I) => {
                T == null ? y._vnode && ie(y._vnode, null, null, !0) : _(y._vnode || null, T, y, null, null, null, I), y._vnode = T, en || (en = !0, il(), pu(), en = !1)
            },
            Et = {
                p: _,
                um: ie,
                m: de,
                r: Pt,
                mt: ae,
                mc: R,
                pc: G,
                pbc: q,
                n: Zt,
                o: t
            };
        let hn, pn;
        return {
            render: _n,
            hydrate: hn,
            createApp: lh(_n, hn)
        }
    }

    function ji({
        type: t,
        props: e
    }, n) {
        return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
    }

    function zn({
        effect: t,
        job: e
    }, n) {
        n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5)
    }

    function yh(t, e) {
        return (!t || t && !t.pendingBranch) && e && !e.persisted
    }

    function Nu(t, e, n = !1) {
        const s = t.children,
            r = e.children;
        if (te(s) && te(r))
            for (let i = 0; i < s.length; i++) {
                const o = s[i];
                let a = r[i];
                a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = bn(r[i]), a.el = o.el), !n && a.patchFlag !== -2 && Nu(o, a)), a.type === Tr && (a.el = o.el)
            }
    }

    function vh(t) {
        const e = t.slice(),
            n = [0];
        let s, r, i, o, a;
        const l = t.length;
        for (s = 0; s < l; s++) {
            const c = t[s];
            if (c !== 0) {
                if (r = n[n.length - 1], t[r] < c) {
                    e[s] = r, n.push(s);
                    continue
                }
                for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, t[n[a]] < c ? i = a + 1 : o = a;
                c < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), n[i] = s)
            }
        }
        for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = e[o];
        return n
    }

    function Cu(t) {
        const e = t.subTree.component;
        if (e) return e.asyncDep && !e.asyncResolved ? e : Cu(e)
    }

    function fl(t) {
        if (t)
            for (let e = 0; e < t.length; e++) t[e].flags |= 8
    }
    const bh = Symbol.for("v-scx"),
        kh = () => Zs(bh);

    function $n(t, e, n) {
        return Lu(t, e, n)
    }

    function Lu(t, e, n = ge) {
        const {
            immediate: s,
            deep: r,
            flush: i,
            once: o
        } = n, a = Be({}, n);
        let l;
        if (mi)
            if (i === "sync") {
                const d = kh();
                l = d.__watcherHandles || (d.__watcherHandles = [])
            } else if (!e || s) a.once = !0;
        else return {
            stop: Yt,
            resume: Yt,
            pause: Yt
        };
        const c = He;
        a.call = (d, h, m) => Jt(d, c, h, m);
        let u = !1;
        i === "post" ? a.scheduler = d => {
            ht(d, c && c.suspense)
        } : i !== "sync" && (u = !0, a.scheduler = (d, h) => {
            h ? d() : ua(d)
        }), a.augmentJob = d => {
            e && (d.flags |= 4), u && (d.flags |= 2, c && (d.id = c.uid, d.i = c))
        };
        const f = M_(t, e, a);
        return l && l.push(f), f
    }

    function Th(t, e, n) {
        const s = this.proxy,
            r = Le(t) ? t.includes(".") ? Du(s, t) : () => s[t] : t.bind(s, s);
        let i;
        se(e) ? i = e : (i = e.handler, n = e);
        const o = Er(this),
            a = Lu(r, i.bind(s), n);
        return o(), a
    }

    function Du(t, e) {
        const n = e.split(".");
        return () => {
            let s = t;
            for (let r = 0; r < n.length && s; r++) s = s[n[r]];
            return s
        }
    }
    const Eh = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t["".concat(e, "Modifiers")] || t["".concat(ss(e), "Modifiers")] || t["".concat(cs(e), "Modifiers")];

    function wh(t, e, ...n) {
        if (t.isUnmounted) return;
        const s = t.vnode.props || ge;
        let r = n;
        const i = e.startsWith("update:"),
            o = i && Eh(s, e.slice(7));
        o && (o.trim && (r = n.map(u => Le(u) ? u.trim() : u)), o.number && (r = n.map(t_)));
        let a, l = s[a = Ri(e)] || s[a = Ri(ss(e))];
        !l && i && (l = s[a = Ri(cs(e))]), l && Jt(l, t, 6, r);
        const c = s[a + "Once"];
        if (c) {
            if (!t.emitted) t.emitted = {};
            else if (t.emitted[a]) return;
            t.emitted[a] = !0, Jt(c, t, 6, r)
        }
    }

    function Mu(t, e, n = !1) {
        const s = e.emitsCache,
            r = s.get(t);
        if (r !== void 0) return r;
        const i = t.emits;
        let o = {},
            a = !1;
        if (!se(t)) {
            const l = c => {
                const u = Mu(c, e, !0);
                u && (a = !0, Be(o, u))
            };
            !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
        }
        return !i && !a ? ($e(t) && s.set(t, null), null) : (te(i) ? i.forEach(l => o[l] = null) : Be(o, i), $e(t) && s.set(t, o), o)
    }

    function pi(t, e) {
        return !t || !ci(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), le(t, e[0].toLowerCase() + e.slice(1)) || le(t, cs(e)) || le(t, e))
    }

    function Ui(t) {
        const {
            type: e,
            vnode: n,
            proxy: s,
            withProxy: r,
            propsOptions: [i],
            slots: o,
            attrs: a,
            emit: l,
            render: c,
            renderCache: u,
            props: f,
            data: d,
            setupState: h,
            ctx: m,
            inheritAttrs: _
        } = t, v = Kr(t);
        let w, O;
        try {
            if (n.shapeFlag & 4) {
                const b = r || s,
                    E = b;
                w = Ht(c.call(E, b, u, f, h, d, m)), O = a
            } else {
                const b = e;
                w = Ht(b.length > 1 ? b(f, {
                    attrs: a,
                    slots: o,
                    emit: l
                }) : b(f, null)), O = e.props ? a : $h(a)
            }
        } catch (b) {
            er.length = 0, _i(b, t, 1), w = st(is)
        }
        let k = w;
        if (O && _ !== !1) {
            const b = Object.keys(O),
                {
                    shapeFlag: E
                } = k;
            b.length && E & 7 && (i && b.some(Yo) && (O = Sh(O, i)), k = xs(k, O, !1, !0))
        }
        return n.dirs && (k = xs(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && fa(k, n.transition), w = k, Kr(v), w
    }
    const $h = t => {
            let e;
            for (const n in t)(n === "class" || n === "style" || ci(n)) && ((e || (e = {}))[n] = t[n]);
            return e
        },
        Sh = (t, e) => {
            const n = {};
            for (const s in t)(!Yo(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
            return n
        };

    function Oh(t, e, n) {
        const {
            props: s,
            children: r,
            component: i
        } = t, {
            props: o,
            children: a,
            patchFlag: l
        } = e, c = i.emitsOptions;
        if (e.dirs || e.transition) return !0;
        if (n && l >= 0) {
            if (l & 1024) return !0;
            if (l & 16) return s ? dl(s, o, c) : !!o;
            if (l & 8) {
                const u = e.dynamicProps;
                for (let f = 0; f < u.length; f++) {
                    const d = u[f];
                    if (o[d] !== s[d] && !pi(c, d)) return !0
                }
            }
        } else return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? dl(s, o, c) : !0 : !!o;
        return !1
    }

    function dl(t, e, n) {
        const s = Object.keys(e);
        if (s.length !== Object.keys(t).length) return !0;
        for (let r = 0; r < s.length; r++) {
            const i = s[r];
            if (e[i] !== t[i] && !pi(n, i)) return !0
        }
        return !1
    }

    function xh({
        vnode: t,
        parent: e
    }, n) {
        for (; e;) {
            const s = e.subTree;
            if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t)(t = e.vnode).el = n, e = e.parent;
            else break
        }
    }
    const Fu = t => t.__isSuspense;

    function Ph(t, e) {
        e && e.pendingBranch ? te(t) ? e.effects.push(...t) : e.effects.push(t) : U_(t)
    }
    const Nt = Symbol.for("v-fgt"),
        Tr = Symbol.for("v-txt"),
        is = Symbol.for("v-cmt"),
        Mr = Symbol.for("v-stc"),
        er = [];
    let yt = null;

    function Rt(t = !1) {
        er.push(yt = t ? null : [])
    }

    function Ah() {
        er.pop(), yt = er[er.length - 1] || null
    }
    let cr = 1;

    function _l(t) {
        cr += t, t < 0 && yt && (yt.hasOnce = !0)
    }

    function ju(t) {
        return t.dynamicChildren = cr > 0 ? yt || ks : null, Ah(), cr > 0 && yt && yt.push(t), t
    }

    function zt(t, e, n, s, r, i) {
        return ju(B(t, e, n, s, r, i, !0))
    }

    function Ih(t, e, n, s, r) {
        return ju(st(t, e, n, s, r, !0))
    }

    function ho(t) {
        return t ? t.__v_isVNode === !0 : !1
    }

    function zs(t, e) {
        return t.type === e.type && t.key === e.key
    }
    const Uu = ({
            key: t
        }) => t != null ? t : null,
        Fr = ({
            ref: t,
            ref_key: e,
            ref_for: n
        }) => (typeof t == "number" && (t = "" + t), t != null ? Le(t) || ze(t) || se(t) ? {
            i: Lt,
            r: t,
            k: e,
            f: !!n
        } : t : null);

    function B(t, e = null, n = null, s = 0, r = null, i = t === Nt ? 0 : 1, o = !1, a = !1) {
        const l = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t,
            props: e,
            key: e && Uu(e),
            ref: e && Fr(e),
            scopeId: gu,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetStart: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: i,
            patchFlag: s,
            dynamicProps: r,
            dynamicChildren: null,
            appContext: null,
            ctx: Lt
        };
        return a ? (ga(l, n), i & 128 && t.normalize(l)) : n && (l.shapeFlag |= Le(n) ? 8 : 16), cr > 0 && !o && yt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && yt.push(l), l
    }
    const st = Rh;

    function Rh(t, e = null, n = null, s = 0, r = null, i = !1) {
        if ((!t || t === eh) && (t = is), ho(t)) {
            const a = xs(t, e, !0);
            return n && ga(a, n), cr > 0 && !i && yt && (a.shapeFlag & 6 ? yt[yt.indexOf(t)] = a : yt.push(a)), a.patchFlag = -2, a
        }
        if (Vh(t) && (t = t.__vccOpts), e) {
            e = Nh(e);
            let {
                class: a,
                style: l
            } = e;
            a && !Le(a) && (e.class = he(a)), $e(l) && (aa(l) && !te(l) && (l = Be({}, l)), e.style = rr(l))
        }
        const o = Le(t) ? 1 : Fu(t) ? 128 : B_(t) ? 64 : $e(t) ? 4 : se(t) ? 2 : 0;
        return B(t, e, n, s, r, o, i, !0)
    }

    function Nh(t) {
        return t ? aa(t) || Su(t) ? Be({}, t) : t : null
    }

    function xs(t, e, n = !1, s = !1) {
        const {
            props: r,
            ref: i,
            patchFlag: o,
            children: a,
            transition: l
        } = t, c = e ? Dh(r || {}, e) : r, u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t.type,
            props: c,
            key: c && Uu(c),
            ref: e && e.ref ? n && i ? te(i) ? i.concat(Fr(e)) : [i, Fr(e)] : Fr(e) : i,
            scopeId: t.scopeId,
            slotScopeIds: t.slotScopeIds,
            children: a,
            target: t.target,
            targetStart: t.targetStart,
            targetAnchor: t.targetAnchor,
            staticCount: t.staticCount,
            shapeFlag: t.shapeFlag,
            patchFlag: e && t.type !== Nt ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: t.dynamicProps,
            dynamicChildren: t.dynamicChildren,
            appContext: t.appContext,
            dirs: t.dirs,
            transition: l,
            component: t.component,
            suspense: t.suspense,
            ssContent: t.ssContent && xs(t.ssContent),
            ssFallback: t.ssFallback && xs(t.ssFallback),
            el: t.el,
            anchor: t.anchor,
            ctx: t.ctx,
            ce: t.ce
        };
        return l && s && fa(u, l.clone(u)), u
    }

    function Ch(t = " ", e = 0) {
        return st(Tr, null, t, e)
    }

    function Lh(t, e) {
        const n = st(Mr, null, t);
        return n.staticCount = e, n
    }

    function hs(t = "", e = !1) {
        return e ? (Rt(), Ih(is, null, t)) : st(is, null, t)
    }

    function Ht(t) {
        return t == null || typeof t == "boolean" ? st(is) : te(t) ? st(Nt, null, t.slice()) : typeof t == "object" ? bn(t) : st(Tr, null, String(t))
    }

    function bn(t) {
        return t.el === null && t.patchFlag !== -1 || t.memo ? t : xs(t)
    }

    function ga(t, e) {
        let n = 0;
        const {
            shapeFlag: s
        } = t;
        if (e == null) e = null;
        else if (te(e)) n = 16;
        else if (typeof e == "object")
            if (s & 65) {
                const r = e.default;
                r && (r._c && (r._d = !1), ga(t, r()), r._c && (r._d = !0));
                return
            } else {
                n = 32;
                const r = e._;
                !r && !Su(e) ? e._ctx = Lt : r === 3 && Lt && (Lt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
            }
        else se(e) ? (e = {
            default: e,
            _ctx: Lt
        }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [Ch(e)]) : n = 8);
        t.children = e, t.shapeFlag |= n
    }

    function Dh(...t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const s = t[n];
            for (const r in s)
                if (r === "class") e.class !== s.class && (e.class = he([e.class, s.class]));
                else if (r === "style") e.style = rr([e.style, s.style]);
            else if (ci(r)) {
                const i = e[r],
                    o = s[r];
                o && i !== o && !(te(i) && i.includes(o)) && (e[r] = i ? [].concat(i, o) : o)
            } else r !== "" && (e[r] = s[r])
        }
        return e
    }

    function Gt(t, e, n, s = null) {
        Jt(t, e, 7, [n, s])
    }
    const Mh = Eu();
    let Fh = 0;

    function jh(t, e, n) {
        const s = t.type,
            r = (e ? e.appContext : t.appContext) || Mh,
            i = {
                uid: Fh++,
                vnode: t,
                type: s,
                parent: e,
                appContext: r,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                job: null,
                scope: new Kc(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: e ? e.provides : Object.create(r.provides),
                ids: e ? e.ids : ["", 0, 0],
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: xu(s, r),
                emitsOptions: Mu(s, r),
                emit: null,
                emitted: null,
                propsDefaults: ge,
                inheritAttrs: s.inheritAttrs,
                ctx: ge,
                data: ge,
                props: ge,
                attrs: ge,
                slots: ge,
                refs: ge,
                setupState: ge,
                setupContext: null,
                suspense: n,
                suspenseId: n ? n.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null
            };
        return i.ctx = {
            _: i
        }, i.root = e ? e.root : i, i.emit = wh.bind(null, i), t.ce && t.ce(i), i
    }
    let He = null;
    const ur = () => He || Lt;
    let Xr, po; {
        const t = Vc(),
            e = (n, s) => {
                let r;
                return (r = t[n]) || (r = t[n] = []), r.push(s), i => {
                    r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
                }
            };
        Xr = e("__VUE_INSTANCE_SETTERS__", n => He = n), po = e("__VUE_SSR_SETTERS__", n => mi = n)
    }
    const Er = t => {
            const e = He;
            return Xr(t), t.scope.on(), () => {
                t.scope.off(), Xr(e)
            }
        },
        hl = () => {
            He && He.scope.off(), Xr(null)
        };

    function zu(t) {
        return t.vnode.shapeFlag & 4
    }
    let mi = !1;

    function Uh(t, e = !1, n = !1) {
        e && po(e);
        const {
            props: s,
            children: r
        } = t.vnode, i = zu(t);
        uh(t, s, i, e), hh(t, r, n);
        const o = i ? zh(t, e) : void 0;
        return e && po(!1), o
    }

    function zh(t, e) {
        const n = t.type;
        t.accessCache = Object.create(null), t.proxy = new Proxy(t.ctx, th);
        const {
            setup: s
        } = n;
        if (s) {
            const r = t.setupContext = s.length > 1 ? Bh(t) : null,
                i = Er(t);
            Nn();
            const o = kr(s, t, 0, [t.props, r]);
            if (Cn(), i(), jc(o)) {
                if (Js(t) || yu(t), o.then(hl, hl), e) return o.then(a => {
                    pl(t, a, e)
                }).catch(a => {
                    _i(a, t, 0)
                });
                t.asyncDep = o
            } else pl(t, o, e)
        } else Gu(t, e)
    }

    function pl(t, e, n) {
        se(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : $e(e) && (t.setupState = fu(e)), Gu(t, n)
    }
    let ml;

    function Gu(t, e, n) {
        const s = t.type;
        if (!t.render) {
            if (!e && ml && !s.render) {
                const r = s.template || pa(t).template;
                if (r) {
                    const {
                        isCustomElement: i,
                        compilerOptions: o
                    } = t.appContext.config, {
                        delimiters: a,
                        compilerOptions: l
                    } = s, c = Be(Be({
                        isCustomElement: i,
                        delimiters: a
                    }, o), l);
                    s.render = ml(r, c)
                }
            }
            t.render = s.render || Yt
        } {
            const r = Er(t);
            Nn();
            try {
                nh(t)
            } finally {
                Cn(), r()
            }
        }
    }
    const Gh = {
        get(t, e) {
            return Ye(t, "get", ""), t[e]
        }
    };

    function Bh(t) {
        const e = n => {
            t.exposed = n || {}
        };
        return {
            attrs: new Proxy(t.attrs, Gh),
            slots: t.slots,
            emit: t.emit,
            expose: e
        }
    }

    function ya(t) {
        return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(fu(I_(t.exposed)), {
            get(e, n) {
                if (n in e) return e[n];
                if (n in Qs) return Qs[n](t)
            },
            has(e, n) {
                return n in e || n in Qs
            }
        })) : t.proxy
    }

    function Vh(t) {
        return se(t) && "__vccOpts" in t
    }
    const Ct = (t, e) => L_(t, e, mi);

    function Bu(t, e, n) {
        const s = arguments.length;
        return s === 2 ? $e(e) && !te(e) ? ho(e) ? st(t, null, [e]) : st(t, e) : st(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ho(n) && (n = [n]), st(t, e, n))
    }
    const Hh = "3.5.4";
    /**
     * @vue/runtime-dom v3.5.4
     * (c) 2018-present Yuxi (Evan) You and Vue contributors
     * @license MIT
     **/
    let mo;
    const gl = typeof window != "undefined" && window.trustedTypes;
    if (gl) try {
        mo = gl.createPolicy("vue", {
            createHTML: t => t
        })
    } catch (t) {}
    const Vu = mo ? t => mo.createHTML(t) : t => t,
        Wh = "http://www.w3.org/2000/svg",
        qh = "http://www.w3.org/1998/Math/MathML",
        rn = typeof document != "undefined" ? document : null,
        yl = rn && rn.createElement("template"),
        Kh = {
            insert: (t, e, n) => {
                e.insertBefore(t, n || null)
            },
            remove: t => {
                const e = t.parentNode;
                e && e.removeChild(t)
            },
            createElement: (t, e, n, s) => {
                const r = e === "svg" ? rn.createElementNS(Wh, t) : e === "mathml" ? rn.createElementNS(qh, t) : n ? rn.createElement(t, {
                    is: n
                }) : rn.createElement(t);
                return t === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
            },
            createText: t => rn.createTextNode(t),
            createComment: t => rn.createComment(t),
            setText: (t, e) => {
                t.nodeValue = e
            },
            setElementText: (t, e) => {
                t.textContent = e
            },
            parentNode: t => t.parentNode,
            nextSibling: t => t.nextSibling,
            querySelector: t => rn.querySelector(t),
            setScopeId(t, e) {
                t.setAttribute(e, "")
            },
            insertStaticContent(t, e, n, s, r, i) {
                const o = n ? n.previousSibling : e.lastChild;
                if (r && (r === i || r.nextSibling))
                    for (; e.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
                else {
                    yl.innerHTML = Vu(s === "svg" ? "<svg>".concat(t, "</svg>") : s === "mathml" ? "<math>".concat(t, "</math>") : t);
                    const a = yl.content;
                    if (s === "svg" || s === "mathml") {
                        const l = a.firstChild;
                        for (; l.firstChild;) a.appendChild(l.firstChild);
                        a.removeChild(l)
                    }
                    e.insertBefore(a, n)
                }
                return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
            }
        },
        Yh = Symbol("_vtc");

    function Xh(t, e, n) {
        const s = t[Yh];
        s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
    }
    const vl = Symbol("_vod"),
        Jh = Symbol("_vsh"),
        Qh = Symbol(""),
        Zh = /(^|;)\s*display\s*:/;

    function ep(t, e, n) {
        const s = t.style,
            r = Le(n);
        let i = !1;
        if (n && !r) {
            if (e)
                if (Le(e))
                    for (const o of e.split(";")) {
                        const a = o.slice(0, o.indexOf(":")).trim();
                        n[a] == null && jr(s, a, "")
                    } else
                        for (const o in e) n[o] == null && jr(s, o, "");
            for (const o in n) o === "display" && (i = !0), jr(s, o, n[o])
        } else if (r) {
            if (e !== n) {
                const o = s[Qh];
                o && (n += ";" + o), s.cssText = n, i = Zh.test(n)
            }
        } else e && t.removeAttribute("style");
        vl in t && (t[vl] = i ? s.display : "", t[Jh] && (s.display = "none"))
    }
    const bl = /\s*!important$/;

    function jr(t, e, n) {
        if (te(n)) n.forEach(s => jr(t, e, s));
        else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
        else {
            const s = tp(t, e);
            bl.test(n) ? t.setProperty(cs(s), n.replace(bl, ""), "important") : t[s] = n
        }
    }
    const kl = ["Webkit", "Moz", "ms"],
        zi = {};

    function tp(t, e) {
        const n = zi[e];
        if (n) return n;
        let s = ss(e);
        if (s !== "filter" && s in t) return zi[e] = s;
        s = Gc(s);
        for (let r = 0; r < kl.length; r++) {
            const i = kl[r] + s;
            if (i in t) return zi[e] = i
        }
        return e
    }
    const Tl = "http://www.w3.org/1999/xlink";

    function El(t, e, n, s, r, i = a_(e)) {
        s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Tl, e.slice(6, e.length)) : t.setAttributeNS(Tl, e, n) : n == null || i && !Hc(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : Rn(n) ? String(n) : n)
    }

    function np(t, e, n, s) {
        if (e === "innerHTML" || e === "textContent") {
            n != null && (t[e] = e === "innerHTML" ? Vu(n) : n);
            return
        }
        const r = t.tagName;
        if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
            const o = r === "OPTION" ? t.getAttribute("value") || "" : t.value,
                a = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
            (o !== a || !("_value" in t)) && (t.value = a), n == null && t.removeAttribute(e), t._value = n;
            return
        }
        let i = !1;
        if (n === "" || n == null) {
            const o = typeof t[e];
            o === "boolean" ? n = Hc(n) : n == null && o === "string" ? (n = "", i = !0) : o === "number" && (n = 0, i = !0)
        }
        try {
            t[e] = n
        } catch (o) {}
        i && t.removeAttribute(e)
    }

    function sp(t, e, n, s) {
        t.addEventListener(e, n, s)
    }

    function rp(t, e, n, s) {
        t.removeEventListener(e, n, s)
    }
    const wl = Symbol("_vei");

    function ip(t, e, n, s, r = null) {
        const i = t[wl] || (t[wl] = {}),
            o = i[e];
        if (s && o) o.value = s;
        else {
            const [a, l] = op(e);
            if (s) {
                const c = i[e] = cp(s, r);
                sp(t, a, c, l)
            } else o && (rp(t, a, o, l), i[e] = void 0)
        }
    }
    const $l = /(?:Once|Passive|Capture)$/;

    function op(t) {
        let e;
        if ($l.test(t)) {
            e = {};
            let s;
            for (; s = t.match($l);) t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0
        }
        return [t[2] === ":" ? t.slice(3) : cs(t.slice(2)), e]
    }
    let Gi = 0;
    const ap = Promise.resolve(),
        lp = () => Gi || (ap.then(() => Gi = 0), Gi = Date.now());

    function cp(t, e) {
        const n = s => {
            if (!s._vts) s._vts = Date.now();
            else if (s._vts <= n.attached) return;
            Jt(up(s, n.value), e, 5, [s])
        };
        return n.value = t, n.attached = lp(), n
    }

    function up(t, e) {
        if (te(e)) {
            const n = t.stopImmediatePropagation;
            return t.stopImmediatePropagation = () => {
                n.call(t), t._stopped = !0
            }, e.map(s => r => !r._stopped && s && s(r))
        } else return e
    }
    const Sl = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
        fp = (t, e, n, s, r, i) => {
            const o = r === "svg";
            e === "class" ? Xh(t, s, o) : e === "style" ? ep(t, n, s) : ci(e) ? Yo(e) || ip(t, e, n, s, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : dp(t, e, s, o)) ? (np(t, e, s), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && El(t, e, s, o, i, e !== "value")) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), El(t, e, s, o))
        };

    function dp(t, e, n, s) {
        if (s) return !!(e === "innerHTML" || e === "textContent" || e in t && Sl(e) && se(n));
        if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
        if (e === "width" || e === "height") {
            const r = t.tagName;
            if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
        }
        return Sl(e) && Le(n) ? !1 : !!(e in t || t._isVueCE && (/[A-Z]/.test(e) || !Le(n)))
    }
    const _p = Be({
        patchProp: fp
    }, Kh);
    let Ol;

    function hp() {
        return Ol || (Ol = mh(_p))
    }
    const pp = (...t) => {
        const e = hp().createApp(...t),
            {
                mount: n
            } = e;
        return e.mount = s => {
            const r = gp(s);
            if (!r) return;
            const i = e._component;
            !se(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
            const o = n(r, !1, mp(r));
            return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
        }, e
    };

    function mp(t) {
        if (t instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
    }

    function gp(t) {
        return Le(t) ? document.querySelector(t) : t
    }
    const yp = "/assets/pgsoft-DEL0842a.png",
        vp = "/assets/gambling%20commission-DxiLVeV5.png",
        bp = "/assets/mga-D4OtwHDg.png",
        kp = "/assets/ga-BcEmqrDF.png",
        Tp = "/assets/bmm-l4cnuRBa.png",
        Ep = "/assets/glowing-JnIZjW1R.png",
        wp = "/assets/scale-fVkRgtFq.png",
        $p = "/assets/invalid_session_token_error-DlWkoO_3.png",
        Sp = "/assets/wrong_id_error-DzbJHpc_.png",
        Op = "/assets/step1-BVku9Q4a.png",
        xp = "/assets/step2-qjWQYSb5.png",
        Pp = "/assets/record_not_found_error-BeaFRuuJ.png",
        Ap = "/assets/internal_server_error-BMDpPUK-.png";

    function Hu(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    const {
        toString: Ip
    } = Object.prototype, {
        getPrototypeOf: va
    } = Object, gi = (t => e => {
        const n = Ip.call(e);
        return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), jt = t => (t = t.toLowerCase(), e => gi(e) === t), yi = t => e => typeof e === t, {
        isArray: Ms
    } = Array, fr = yi("undefined");

    function Rp(t) {
        return t !== null && !fr(t) && t.constructor !== null && !fr(t.constructor) && bt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
    }
    const Wu = jt("ArrayBuffer");

    function Np(t) {
        let e;
        return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wu(t.buffer), e
    }
    const Cp = yi("string"),
        bt = yi("function"),
        qu = yi("number"),
        vi = t => t !== null && typeof t == "object",
        Lp = t => t === !0 || t === !1,
        Ur = t => {
            if (gi(t) !== "object") return !1;
            const e = va(t);
            return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
        },
        Dp = jt("Date"),
        Mp = jt("File"),
        Fp = jt("Blob"),
        jp = jt("FileList"),
        Up = t => vi(t) && bt(t.pipe),
        zp = t => {
            let e;
            return t && (typeof FormData == "function" && t instanceof FormData || bt(t.append) && ((e = gi(t)) === "formdata" || e === "object" && bt(t.toString) && t.toString() === "[object FormData]"))
        },
        Gp = jt("URLSearchParams"),
        [Bp, Vp, Hp, Wp] = ["ReadableStream", "Request", "Response", "Headers"].map(jt),
        qp = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function wr(t, e, {
        allOwnKeys: n = !1
    } = {}) {
        if (t === null || typeof t == "undefined") return;
        let s, r;
        if (typeof t != "object" && (t = [t]), Ms(t))
            for (s = 0, r = t.length; s < r; s++) e.call(null, t[s], s, t);
        else {
            const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
                o = i.length;
            let a;
            for (s = 0; s < o; s++) a = i[s], e.call(null, t[a], a, t)
        }
    }

    function Ku(t, e) {
        e = e.toLowerCase();
        const n = Object.keys(t);
        let s = n.length,
            r;
        for (; s-- > 0;)
            if (r = n[s], e === r.toLowerCase()) return r;
        return null
    }
    const Yn = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global,
        Yu = t => !fr(t) && t !== Yn;

    function go() {
        const {
            caseless: t
        } = Yu(this) && this || {}, e = {}, n = (s, r) => {
            const i = t && Ku(e, r) || r;
            Ur(e[i]) && Ur(s) ? e[i] = go(e[i], s) : Ur(s) ? e[i] = go({}, s) : Ms(s) ? e[i] = s.slice() : e[i] = s
        };
        for (let s = 0, r = arguments.length; s < r; s++) arguments[s] && wr(arguments[s], n);
        return e
    }
    const Kp = (t, e, n, {
            allOwnKeys: s
        } = {}) => (wr(e, (r, i) => {
            n && bt(r) ? t[i] = Hu(r, n) : t[i] = r
        }, {
            allOwnKeys: s
        }), t),
        Yp = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
        Xp = (t, e, n, s) => {
            t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                value: e.prototype
            }), n && Object.assign(t.prototype, n)
        },
        Jp = (t, e, n, s) => {
            let r, i, o;
            const a = {};
            if (e = e || {}, t == null) return e;
            do {
                for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0;) o = r[i], (!s || s(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
                t = n !== !1 && va(t)
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e
        },
        Qp = (t, e, n) => {
            t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
            const s = t.indexOf(e, n);
            return s !== -1 && s === n
        },
        Zp = t => {
            if (!t) return null;
            if (Ms(t)) return t;
            let e = t.length;
            if (!qu(e)) return null;
            const n = new Array(e);
            for (; e-- > 0;) n[e] = t[e];
            return n
        },
        em = (t => e => t && e instanceof t)(typeof Uint8Array != "undefined" && va(Uint8Array)),
        tm = (t, e) => {
            const s = (t && t[Symbol.iterator]).call(t);
            let r;
            for (;
                (r = s.next()) && !r.done;) {
                const i = r.value;
                e.call(t, i[0], i[1])
            }
        },
        nm = (t, e) => {
            let n;
            const s = [];
            for (;
                (n = t.exec(e)) !== null;) s.push(n);
            return s
        },
        sm = jt("HTMLFormElement"),
        rm = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
            return s.toUpperCase() + r
        }),
        xl = (({
            hasOwnProperty: t
        }) => (e, n) => t.call(e, n))(Object.prototype),
        im = jt("RegExp"),
        Xu = (t, e) => {
            const n = Object.getOwnPropertyDescriptors(t),
                s = {};
            wr(n, (r, i) => {
                let o;
                (o = e(r, i, t)) !== !1 && (s[i] = o || r)
            }), Object.defineProperties(t, s)
        },
        om = t => {
            Xu(t, (e, n) => {
                if (bt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
                const s = t[n];
                if (bt(s)) {
                    if (e.enumerable = !1, "writable" in e) {
                        e.writable = !1;
                        return
                    }
                    e.set || (e.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    })
                }
            })
        },
        am = (t, e) => {
            const n = {},
                s = r => {
                    r.forEach(i => {
                        n[i] = !0
                    })
                };
            return Ms(t) ? s(t) : s(String(t).split(e)), n
        },
        lm = () => {},
        cm = (t, e) => t != null && Number.isFinite(t = +t) ? t : e,
        Bi = "abcdefghijklmnopqrstuvwxyz",
        Pl = "0123456789",
        Ju = {
            DIGIT: Pl,
            ALPHA: Bi,
            ALPHA_DIGIT: Bi + Bi.toUpperCase() + Pl
        },
        um = (t = 16, e = Ju.ALPHA_DIGIT) => {
            let n = "";
            const {
                length: s
            } = e;
            for (; t--;) n += e[Math.random() * s | 0];
            return n
        };

    function fm(t) {
        return !!(t && bt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator])
    }
    const dm = t => {
            const e = new Array(10),
                n = (s, r) => {
                    if (vi(s)) {
                        if (e.indexOf(s) >= 0) return;
                        if (!("toJSON" in s)) {
                            e[r] = s;
                            const i = Ms(s) ? [] : {};
                            return wr(s, (o, a) => {
                                const l = n(o, r + 1);
                                !fr(l) && (i[a] = l)
                            }), e[r] = void 0, i
                        }
                    }
                    return s
                };
            return n(t, 0)
        },
        _m = jt("AsyncFunction"),
        hm = t => t && (vi(t) || bt(t)) && bt(t.then) && bt(t.catch),
        Qu = ((t, e) => t ? setImmediate : e ? ((n, s) => (Yn.addEventListener("message", ({
            source: r,
            data: i
        }) => {
            r === Yn && i === n && s.length && s.shift()()
        }, !1), r => {
            s.push(r), Yn.postMessage(n, "*")
        }))("axios@".concat(Math.random()), []) : n => setTimeout(n))(typeof setImmediate == "function", bt(Yn.postMessage)),
        pm = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Yn) : typeof process != "undefined" && process.nextTick || Qu,
        N = {
            isArray: Ms,
            isArrayBuffer: Wu,
            isBuffer: Rp,
            isFormData: zp,
            isArrayBufferView: Np,
            isString: Cp,
            isNumber: qu,
            isBoolean: Lp,
            isObject: vi,
            isPlainObject: Ur,
            isReadableStream: Bp,
            isRequest: Vp,
            isResponse: Hp,
            isHeaders: Wp,
            isUndefined: fr,
            isDate: Dp,
            isFile: Mp,
            isBlob: Fp,
            isRegExp: im,
            isFunction: bt,
            isStream: Up,
            isURLSearchParams: Gp,
            isTypedArray: em,
            isFileList: jp,
            forEach: wr,
            merge: go,
            extend: Kp,
            trim: qp,
            stripBOM: Yp,
            inherits: Xp,
            toFlatObject: Jp,
            kindOf: gi,
            kindOfTest: jt,
            endsWith: Qp,
            toArray: Zp,
            forEachEntry: tm,
            matchAll: nm,
            isHTMLForm: sm,
            hasOwnProperty: xl,
            hasOwnProp: xl,
            reduceDescriptors: Xu,
            freezeMethods: om,
            toObjectSet: am,
            toCamelCase: rm,
            noop: lm,
            toFiniteNumber: cm,
            findKey: Ku,
            global: Yn,
            isContextDefined: Yu,
            ALPHABET: Ju,
            generateString: um,
            isSpecCompliantForm: fm,
            toJSONObject: dm,
            isAsyncFn: _m,
            isThenable: hm,
            setImmediate: Qu,
            asap: pm
        };

    function ne(t, e, n, s, r) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null)
    }
    N.inherits(ne, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: N.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const Zu = ne.prototype,
        ef = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
        ef[t] = {
            value: t
        }
    });
    Object.defineProperties(ne, ef);
    Object.defineProperty(Zu, "isAxiosError", {
        value: !0
    });
    ne.from = (t, e, n, s, r, i) => {
        const o = Object.create(Zu);
        return N.toFlatObject(t, o, function(l) {
            return l !== Error.prototype
        }, a => a !== "isAxiosError"), ne.call(o, t.message, e, n, s, r), o.cause = t, o.name = t.name, i && Object.assign(o, i), o
    };
    const mm = null;

    function yo(t) {
        return N.isPlainObject(t) || N.isArray(t)
    }

    function tf(t) {
        return N.endsWith(t, "[]") ? t.slice(0, -2) : t
    }

    function Al(t, e, n) {
        return t ? t.concat(e).map(function(r, i) {
            return r = tf(r), !n && i ? "[" + r + "]" : r
        }).join(n ? "." : "") : e
    }

    function gm(t) {
        return N.isArray(t) && !t.some(yo)
    }
    const ym = N.toFlatObject(N, {}, null, function(e) {
        return /^is[A-Z]/.test(e)
    });

    function bi(t, e, n) {
        if (!N.isObject(t)) throw new TypeError("target must be an object");
        e = e || new FormData, n = N.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(_, v) {
            return !N.isUndefined(v[_])
        });
        const s = n.metaTokens,
            r = n.visitor || u,
            i = n.dots,
            o = n.indexes,
            l = (n.Blob || typeof Blob != "undefined" && Blob) && N.isSpecCompliantForm(e);
        if (!N.isFunction(r)) throw new TypeError("visitor must be a function");

        function c(m) {
            if (m === null) return "";
            if (N.isDate(m)) return m.toISOString();
            if (!l && N.isBlob(m)) throw new ne("Blob is not supported. Use a Buffer instead.");
            return N.isArrayBuffer(m) || N.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
        }

        function u(m, _, v) {
            let w = m;
            if (m && !v && typeof m == "object") {
                if (N.endsWith(_, "{}")) _ = s ? _ : _.slice(0, -2), m = JSON.stringify(m);
                else if (N.isArray(m) && gm(m) || (N.isFileList(m) || N.endsWith(_, "[]")) && (w = N.toArray(m))) return _ = tf(_), w.forEach(function(k, b) {
                    !(N.isUndefined(k) || k === null) && e.append(o === !0 ? Al([_], b, i) : o === null ? _ : _ + "[]", c(k))
                }), !1
            }
            return yo(m) ? !0 : (e.append(Al(v, _, i), c(m)), !1)
        }
        const f = [],
            d = Object.assign(ym, {
                defaultVisitor: u,
                convertValue: c,
                isVisitable: yo
            });

        function h(m, _) {
            if (!N.isUndefined(m)) {
                if (f.indexOf(m) !== -1) throw Error("Circular reference detected in " + _.join("."));
                f.push(m), N.forEach(m, function(w, O) {
                    (!(N.isUndefined(w) || w === null) && r.call(e, w, N.isString(O) ? O.trim() : O, _, d)) === !0 && h(w, _ ? _.concat(O) : [O])
                }), f.pop()
            }
        }
        if (!N.isObject(t)) throw new TypeError("data must be an object");
        return h(t), e
    }

    function Il(t) {
        const e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
            return e[s]
        })
    }

    function ba(t, e) {
        this._pairs = [], t && bi(t, this, e)
    }
    const nf = ba.prototype;
    nf.append = function(e, n) {
        this._pairs.push([e, n])
    };
    nf.toString = function(e) {
        const n = e ? function(s) {
            return e.call(this, s, Il)
        } : Il;
        return this._pairs.map(function(r) {
            return n(r[0]) + "=" + n(r[1])
        }, "").join("&")
    };

    function vm(t) {
        return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function sf(t, e, n) {
        if (!e) return t;
        const s = n && n.encode || vm,
            r = n && n.serialize;
        let i;
        if (r ? i = r(e, n) : i = N.isURLSearchParams(e) ? e.toString() : new ba(e, n).toString(s), i) {
            const o = t.indexOf("#");
            o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i
        }
        return t
    }
    class Rl {
        constructor() {
            this.handlers = []
        }
        use(e, n, s) {
            return this.handlers.push({
                fulfilled: e,
                rejected: n,
                synchronous: s ? s.synchronous : !1,
                runWhen: s ? s.runWhen : null
            }), this.handlers.length - 1
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(e) {
            N.forEach(this.handlers, function(s) {
                s !== null && e(s)
            })
        }
    }
    const rf = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        bm = typeof URLSearchParams != "undefined" ? URLSearchParams : ba,
        km = typeof FormData != "undefined" ? FormData : null,
        Tm = typeof Blob != "undefined" ? Blob : null,
        Em = {
            isBrowser: !0,
            classes: {
                URLSearchParams: bm,
                FormData: km,
                Blob: Tm
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        ka = typeof window != "undefined" && typeof document != "undefined",
        vo = typeof navigator == "object" && navigator || void 0,
        wm = ka && (!vo || ["ReactNative", "NativeScript", "NS"].indexOf(vo.product) < 0),
        $m = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
        Sm = ka && window.location.href || "http://localhost",
        Om = Object.freeze(Object.defineProperty({
            __proto__: null,
            hasBrowserEnv: ka,
            hasStandardBrowserEnv: wm,
            hasStandardBrowserWebWorkerEnv: $m,
            navigator: vo,
            origin: Sm
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        it = Fn(Fn({}, Om), Em);

    function xm(t, e) {
        return bi(t, new it.classes.URLSearchParams, Object.assign({
            visitor: function(n, s, r, i) {
                return it.isNode && N.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
            }
        }, e))
    }

    function Pm(t) {
        return N.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
    }

    function Am(t) {
        const e = {},
            n = Object.keys(t);
        let s;
        const r = n.length;
        let i;
        for (s = 0; s < r; s++) i = n[s], e[i] = t[i];
        return e
    }

    function of (t) {
        function e(n, s, r, i) {
            let o = n[i++];
            if (o === "__proto__") return !0;
            const a = Number.isFinite(+o),
                l = i >= n.length;
            return o = !o && N.isArray(r) ? r.length : o, l ? (N.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !N.isObject(r[o])) && (r[o] = []), e(n, s, r[o], i) && N.isArray(r[o]) && (r[o] = Am(r[o])), !a)
        }
        if (N.isFormData(t) && N.isFunction(t.entries)) {
            const n = {};
            return N.forEachEntry(t, (s, r) => {
                e(Pm(s), r, n, 0)
            }), n
        }
        return null
    }

    function Im(t, e, n) {
        if (N.isString(t)) try {
            return (e || JSON.parse)(t), N.trim(t)
        } catch (s) {
            if (s.name !== "SyntaxError") throw s
        }
        return (n || JSON.stringify)(t)
    }
    const $r = {
        transitional: rf,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(e, n) {
            const s = n.getContentType() || "",
                r = s.indexOf("application/json") > -1,
                i = N.isObject(e);
            if (i && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e)) return r ? JSON.stringify( of (e)) : e;
            if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e)) return e;
            if (N.isArrayBufferView(e)) return e.buffer;
            if (N.isURLSearchParams(e)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let a;
            if (i) {
                if (s.indexOf("application/x-www-form-urlencoded") > -1) return xm(e, this.formSerializer).toString();
                if ((a = N.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
                    const l = this.env && this.env.FormData;
                    return bi(a ? {
                        "files[]": e
                    } : e, l && new l, this.formSerializer)
                }
            }
            return i || r ? (n.setContentType("application/json", !1), Im(e)) : e
        }],
        transformResponse: [function(e) {
            const n = this.transitional || $r.transitional,
                s = n && n.forcedJSONParsing,
                r = this.responseType === "json";
            if (N.isResponse(e) || N.isReadableStream(e)) return e;
            if (e && N.isString(e) && (s && !this.responseType || r)) {
                const o = !(n && n.silentJSONParsing) && r;
                try {
                    return JSON.parse(e)
                } catch (a) {
                    if (o) throw a.name === "SyntaxError" ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response) : a
                }
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: it.classes.FormData,
            Blob: it.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    N.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
        $r.headers[t] = {}
    });
    const Rm = N.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Nm = t => {
            const e = {};
            let n, s, r;
            return t && t.split("\n").forEach(function(o) {
                r = o.indexOf(":"), n = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!n || e[n] && Rm[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s)
            }), e
        },
        Nl = Symbol("internals");

    function Gs(t) {
        return t && String(t).trim().toLowerCase()
    }

    function zr(t) {
        return t === !1 || t == null ? t : N.isArray(t) ? t.map(zr) : String(t)
    }

    function Cm(t) {
        const e = Object.create(null),
            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let s;
        for (; s = n.exec(t);) e[s[1]] = s[2];
        return e
    }
    const Lm = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

    function Vi(t, e, n, s, r) {
        if (N.isFunction(s)) return s.call(this, e, n);
        if (r && (e = n), !!N.isString(e)) {
            if (N.isString(s)) return e.indexOf(s) !== -1;
            if (N.isRegExp(s)) return s.test(e)
        }
    }

    function Dm(t) {
        return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s)
    }

    function Mm(t, e) {
        const n = N.toCamelCase(" " + e);
        ["get", "set", "has"].forEach(s => {
            Object.defineProperty(t, s + n, {
                value: function(r, i, o) {
                    return this[s].call(this, e, r, i, o)
                },
                configurable: !0
            })
        })
    }
    class ot {
        constructor(e) {
            e && this.set(e)
        }
        set(e, n, s) {
            const r = this;

            function i(a, l, c) {
                const u = Gs(l);
                if (!u) throw new Error("header name must be a non-empty string");
                const f = N.findKey(r, u);
                (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || l] = zr(a))
            }
            const o = (a, l) => N.forEach(a, (c, u) => i(c, u, l));
            if (N.isPlainObject(e) || e instanceof this.constructor) o(e, n);
            else if (N.isString(e) && (e = e.trim()) && !Lm(e)) o(Nm(e), n);
            else if (N.isHeaders(e))
                for (const [a, l] of e.entries()) i(l, a, s);
            else e != null && i(n, e, s);
            return this
        }
        get(e, n) {
            if (e = Gs(e), e) {
                const s = N.findKey(this, e);
                if (s) {
                    const r = this[s];
                    if (!n) return r;
                    if (n === !0) return Cm(r);
                    if (N.isFunction(n)) return n.call(this, r, s);
                    if (N.isRegExp(n)) return n.exec(r);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, n) {
            if (e = Gs(e), e) {
                const s = N.findKey(this, e);
                return !!(s && this[s] !== void 0 && (!n || Vi(this, this[s], s, n)))
            }
            return !1
        }
        delete(e, n) {
            const s = this;
            let r = !1;

            function i(o) {
                if (o = Gs(o), o) {
                    const a = N.findKey(s, o);
                    a && (!n || Vi(s, s[a], a, n)) && (delete s[a], r = !0)
                }
            }
            return N.isArray(e) ? e.forEach(i) : i(e), r
        }
        clear(e) {
            const n = Object.keys(this);
            let s = n.length,
                r = !1;
            for (; s--;) {
                const i = n[s];
                (!e || Vi(this, this[i], i, e, !0)) && (delete this[i], r = !0)
            }
            return r
        }
        normalize(e) {
            const n = this,
                s = {};
            return N.forEach(this, (r, i) => {
                const o = N.findKey(s, i);
                if (o) {
                    n[o] = zr(r), delete n[i];
                    return
                }
                const a = e ? Dm(i) : String(i).trim();
                a !== i && delete n[i], n[a] = zr(r), s[a] = !0
            }), this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            const n = Object.create(null);
            return N.forEach(this, (s, r) => {
                s != null && s !== !1 && (n[r] = e && N.isArray(s) ? s.join(", ") : s)
            }), n
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join("\n")
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e, ...n) {
            const s = new this(e);
            return n.forEach(r => s.set(r)), s
        }
        static accessor(e) {
            const s = (this[Nl] = this[Nl] = {
                    accessors: {}
                }).accessors,
                r = this.prototype;

            function i(o) {
                const a = Gs(o);
                s[a] || (Mm(r, o), s[a] = !0)
            }
            return N.isArray(e) ? e.forEach(i) : i(e), this
        }
    }
    ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    N.reduceDescriptors(ot.prototype, ({
        value: t
    }, e) => {
        let n = e[0].toUpperCase() + e.slice(1);
        return {
            get: () => t,
            set(s) {
                this[n] = s
            }
        }
    });
    N.freezeMethods(ot);

    function Hi(t, e) {
        const n = this || $r,
            s = e || n,
            r = ot.from(s.headers);
        let i = s.data;
        return N.forEach(t, function(a) {
            i = a.call(n, i, r.normalize(), e ? e.status : void 0)
        }), r.normalize(), i
    }

    function af(t) {
        return !!(t && t.__CANCEL__)
    }

    function Fs(t, e, n) {
        ne.call(this, t == null ? "canceled" : t, ne.ERR_CANCELED, e, n), this.name = "CanceledError"
    }
    N.inherits(Fs, ne, {
        __CANCEL__: !0
    });

    function lf(t, e, n) {
        const s = n.config.validateStatus;
        !n.status || !s || s(n.status) ? t(n) : e(new ne("Request failed with status code " + n.status, [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
    }

    function Fm(t) {
        const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return e && e[1] || ""
    }

    function jm(t, e) {
        t = t || 10;
        const n = new Array(t),
            s = new Array(t);
        let r = 0,
            i = 0,
            o;
        return e = e !== void 0 ? e : 1e3,
            function(l) {
                const c = Date.now(),
                    u = s[i];
                o || (o = c), n[r] = l, s[r] = c;
                let f = i,
                    d = 0;
                for (; f !== r;) d += n[f++], f = f % t;
                if (r = (r + 1) % t, r === i && (i = (i + 1) % t), c - o < e) return;
                const h = u && c - u;
                return h ? Math.round(d * 1e3 / h) : void 0
            }
    }

    function Um(t, e) {
        let n = 0,
            s = 1e3 / e,
            r, i;
        const o = (c, u = Date.now()) => {
            n = u, r = null, i && (clearTimeout(i), i = null), t.apply(null, c)
        };
        return [(...c) => {
            const u = Date.now(),
                f = u - n;
            f >= s ? o(c, u) : (r = c, i || (i = setTimeout(() => {
                i = null, o(r)
            }, s - f)))
        }, () => r && o(r)]
    }
    const Jr = (t, e, n = 3) => {
            let s = 0;
            const r = jm(50, 250);
            return Um(i => {
                const o = i.loaded,
                    a = i.lengthComputable ? i.total : void 0,
                    l = o - s,
                    c = r(l),
                    u = o <= a;
                s = o;
                const f = {
                    loaded: o,
                    total: a,
                    progress: a ? o / a : void 0,
                    bytes: l,
                    rate: c || void 0,
                    estimated: c && a && u ? (a - o) / c : void 0,
                    event: i,
                    lengthComputable: a != null,
                    [e ? "download" : "upload"]: !0
                };
                t(f)
            }, n)
        },
        Cl = (t, e) => {
            const n = t != null;
            return [s => e[0]({
                lengthComputable: n,
                total: t,
                loaded: s
            }), e[1]]
        },
        Ll = t => (...e) => N.asap(() => t(...e)),
        zm = it.hasStandardBrowserEnv ? function() {
            const e = it.navigator && /(msie|trident)/i.test(it.navigator.userAgent),
                n = document.createElement("a");
            let s;

            function r(i) {
                let o = i;
                return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
                }
            }
            return s = r(window.location.href),
                function(o) {
                    const a = N.isString(o) ? r(o) : o;
                    return a.protocol === s.protocol && a.host === s.host
                }
        }() : function() {
            return function() {
                return !0
            }
        }(),
        Gm = it.hasStandardBrowserEnv ? {
            write(t, e, n, s, r, i) {
                const o = [t + "=" + encodeURIComponent(e)];
                N.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), N.isString(s) && o.push("path=" + s), N.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ")
            },
            read(t) {
                const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read() {
                return null
            },
            remove() {}
        };

    function Bm(t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
    }

    function Vm(t, e) {
        return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
    }

    function cf(t, e) {
        return t && !Bm(e) ? Vm(t, e) : e
    }
    const Dl = t => t instanceof ot ? Fn({}, t) : t;

    function os(t, e) {
        e = e || {};
        const n = {};

        function s(c, u, f) {
            return N.isPlainObject(c) && N.isPlainObject(u) ? N.merge.call({
                caseless: f
            }, c, u) : N.isPlainObject(u) ? N.merge({}, u) : N.isArray(u) ? u.slice() : u
        }

        function r(c, u, f) {
            if (N.isUndefined(u)) {
                if (!N.isUndefined(c)) return s(void 0, c, f)
            } else return s(c, u, f)
        }

        function i(c, u) {
            if (!N.isUndefined(u)) return s(void 0, u)
        }

        function o(c, u) {
            if (N.isUndefined(u)) {
                if (!N.isUndefined(c)) return s(void 0, c)
            } else return s(void 0, u)
        }

        function a(c, u, f) {
            if (f in e) return s(c, u);
            if (f in t) return s(void 0, c)
        }
        const l = {
            url: i,
            method: i,
            data: i,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            withXSRFToken: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: a,
            headers: (c, u) => r(Dl(c), Dl(u), !0)
        };
        return N.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
            const f = l[u] || r,
                d = f(t[u], e[u], u);
            N.isUndefined(d) && f !== a || (n[u] = d)
        }), n
    }
    const uf = t => {
            const e = os({}, t);
            let {
                data: n,
                withXSRFToken: s,
                xsrfHeaderName: r,
                xsrfCookieName: i,
                headers: o,
                auth: a
            } = e;
            e.headers = o = ot.from(o), e.url = sf(cf(e.baseURL, e.url), t.params, t.paramsSerializer), a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
            let l;
            if (N.isFormData(n)) {
                if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
                else if ((l = o.getContentType()) !== !1) {
                    const [c, ...u] = l ? l.split(";").map(f => f.trim()).filter(Boolean) : [];
                    o.setContentType([c || "multipart/form-data", ...u].join("; "))
                }
            }
            if (it.hasStandardBrowserEnv && (s && N.isFunction(s) && (s = s(e)), s || s !== !1 && zm(e.url))) {
                const c = r && i && Gm.read(i);
                c && o.set(r, c)
            }
            return e
        },
        Hm = typeof XMLHttpRequest != "undefined",
        Wm = Hm && function(t) {
            return new Promise(function(n, s) {
                const r = uf(t);
                let i = r.data;
                const o = ot.from(r.headers).normalize();
                let {
                    responseType: a,
                    onUploadProgress: l,
                    onDownloadProgress: c
                } = r, u, f, d, h, m;

                function _() {
                    h && h(), m && m(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u)
                }
                let v = new XMLHttpRequest;
                v.open(r.method.toUpperCase(), r.url, !0), v.timeout = r.timeout;

                function w() {
                    if (!v) return;
                    const k = ot.from("getAllResponseHeaders" in v && v.getAllResponseHeaders()),
                        E = {
                            data: !a || a === "text" || a === "json" ? v.responseText : v.response,
                            status: v.status,
                            statusText: v.statusText,
                            headers: k,
                            config: t,
                            request: v
                        };
                    lf(function(P) {
                        n(P), _()
                    }, function(P) {
                        s(P), _()
                    }, E), v = null
                }
                "onloadend" in v ? v.onloadend = w : v.onreadystatechange = function() {
                    !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(w)
                }, v.onabort = function() {
                    v && (s(new ne("Request aborted", ne.ECONNABORTED, t, v)), v = null)
                }, v.onerror = function() {
                    s(new ne("Network Error", ne.ERR_NETWORK, t, v)), v = null
                }, v.ontimeout = function() {
                    let b = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const E = r.transitional || rf;
                    r.timeoutErrorMessage && (b = r.timeoutErrorMessage), s(new ne(b, E.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED, t, v)), v = null
                }, i === void 0 && o.setContentType(null), "setRequestHeader" in v && N.forEach(o.toJSON(), function(b, E) {
                    v.setRequestHeader(E, b)
                }), N.isUndefined(r.withCredentials) || (v.withCredentials = !!r.withCredentials), a && a !== "json" && (v.responseType = r.responseType), c && ([d, m] = Jr(c, !0), v.addEventListener("progress", d)), l && v.upload && ([f, h] = Jr(l), v.upload.addEventListener("progress", f), v.upload.addEventListener("loadend", h)), (r.cancelToken || r.signal) && (u = k => {
                    v && (s(!k || k.type ? new Fs(null, t, v) : k), v.abort(), v = null)
                }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
                const O = Fm(r.url);
                if (O && it.protocols.indexOf(O) === -1) {
                    s(new ne("Unsupported protocol " + O + ":", ne.ERR_BAD_REQUEST, t));
                    return
                }
                v.send(i || null)
            })
        },
        qm = (t, e) => {
            const {
                length: n
            } = t = t ? t.filter(Boolean) : [];
            if (e || n) {
                let s = new AbortController,
                    r;
                const i = function(c) {
                    if (!r) {
                        r = !0, a();
                        const u = c instanceof Error ? c : this.reason;
                        s.abort(u instanceof ne ? u : new Fs(u instanceof Error ? u.message : u))
                    }
                };
                let o = e && setTimeout(() => {
                    o = null, i(new ne("timeout ".concat(e, " of ms exceeded"), ne.ETIMEDOUT))
                }, e);
                const a = () => {
                    t && (o && clearTimeout(o), o = null, t.forEach(c => {
                        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i)
                    }), t = null)
                };
                t.forEach(c => c.addEventListener("abort", i));
                const {
                    signal: l
                } = s;
                return l.unsubscribe = () => N.asap(a), l
            }
        },
        Km = function*(t, e) {
            let n = t.byteLength;
            if (!e || n < e) {
                yield t;
                return
            }
            let s = 0,
                r;
            for (; s < n;) r = s + e, yield t.slice(s, r), s = r
        },
        Ym = function(t, e) {
            return Ai(this, null, function*() {
                try {
                    for (var n = Ja(Xm(t)), s, r, i; s = !(r = yield new jn(n.next())).done; s = !1) {
                        const o = r.value;
                        yield* Ii(Km(o, e))
                    }
                } catch (r) {
                    i = [r]
                } finally {
                    try {
                        s && (r = n.return) && (yield new jn(r.call(n)))
                    } finally {
                        if (i) throw i[0]
                    }
                }
            })
        },
        Xm = function(t) {
            return Ai(this, null, function*() {
                if (t[Symbol.asyncIterator]) {
                    yield* Ii(t);
                    return
                }
                const e = t.getReader();
                try {
                    for (;;) {
                        const {
                            done: n,
                            value: s
                        } = yield new jn(e.read());
                        if (n) break;
                        yield s
                    }
                } finally {
                    yield new jn(e.cancel())
                }
            })
        },
        Ml = (t, e, n, s) => {
            const r = Ym(t, e);
            let i = 0,
                o, a = c => {
                    o || (o = !0, s && s(c))
                };
            return new ReadableStream({
                pull(c) {
                    return _t(this, null, function*() {
                        try {
                            const {
                                done: u,
                                value: f
                            } = yield r.next();
                            if (u) {
                                a(), c.close();
                                return
                            }
                            let d = f.byteLength;
                            if (n) {
                                let h = i += d;
                                n(h)
                            }
                            c.enqueue(new Uint8Array(f))
                        } catch (u) {
                            throw a(u), u
                        }
                    })
                },
                cancel(c) {
                    return a(c), r.return()
                }
            }, {
                highWaterMark: 2
            })
        },
        ki = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
        ff = ki && typeof ReadableStream == "function",
        Jm = ki && (typeof TextEncoder == "function" ? (t => e => t.encode(e))(new TextEncoder) : t => _t(Or, null, function*() {
            return new Uint8Array(yield new Response(t).arrayBuffer())
        })),
        df = (t, ...e) => {
            try {
                return !!t(...e)
            } catch (n) {
                return !1
            }
        },
        Qm = ff && df(() => {
            let t = !1;
            const e = new Request(it.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return t = !0, "half"
                }
            }).headers.has("Content-Type");
            return t && !e
        }),
        Fl = 64 * 1024,
        bo = ff && df(() => N.isReadableStream(new Response("").body)),
        Qr = {
            stream: bo && (t => t.body)
        };
    ki && (t => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            !Qr[e] && (Qr[e] = N.isFunction(t[e]) ? n => n[e]() : (n, s) => {
                throw new ne("Response type '".concat(e, "' is not supported"), ne.ERR_NOT_SUPPORT, s)
            })
        })
    })(new Response);
    const Zm = t => _t(Or, null, function*() {
            if (t == null) return 0;
            if (N.isBlob(t)) return t.size;
            if (N.isSpecCompliantForm(t)) return (yield new Request(it.origin, {
                method: "POST",
                body: t
            }).arrayBuffer()).byteLength;
            if (N.isArrayBufferView(t) || N.isArrayBuffer(t)) return t.byteLength;
            if (N.isURLSearchParams(t) && (t = t + ""), N.isString(t)) return (yield Jm(t)).byteLength
        }),
        eg = (t, e) => _t(Or, null, function*() {
            const n = N.toFiniteNumber(t.getContentLength());
            return n == null ? Zm(e) : n
        }),
        tg = ki && (t => _t(Or, null, function*() {
            let {
                url: e,
                method: n,
                data: s,
                signal: r,
                cancelToken: i,
                timeout: o,
                onDownloadProgress: a,
                onUploadProgress: l,
                responseType: c,
                headers: u,
                withCredentials: f = "same-origin",
                fetchOptions: d
            } = uf(t);
            c = c ? (c + "").toLowerCase() : "text";
            let h = qm([r, i && i.toAbortSignal()], o),
                m;
            const _ = h && h.unsubscribe && (() => {
                h.unsubscribe()
            });
            let v;
            try {
                if (l && Qm && n !== "get" && n !== "head" && (v = yield eg(u, s)) !== 0) {
                    let E = new Request(e, {
                            method: "POST",
                            body: s,
                            duplex: "half"
                        }),
                        $;
                    if (N.isFormData(s) && ($ = E.headers.get("content-type")) && u.setContentType($), E.body) {
                        const [P, R] = Cl(v, Jr(Ll(l)));
                        s = Ml(E.body, Fl, P, R)
                    }
                }
                N.isString(f) || (f = f ? "include" : "omit");
                const w = "credentials" in Request.prototype;
                m = new Request(e, xr(Fn({}, d), {
                    signal: h,
                    method: n.toUpperCase(),
                    headers: u.normalize().toJSON(),
                    body: s,
                    duplex: "half",
                    credentials: w ? f : void 0
                }));
                let O = yield fetch(m);
                const k = bo && (c === "stream" || c === "response");
                if (bo && (a || k && _)) {
                    const E = {};
                    ["status", "statusText", "headers"].forEach(A => {
                        E[A] = O[A]
                    });
                    const $ = N.toFiniteNumber(O.headers.get("content-length")),
                        [P, R] = a && Cl($, Jr(Ll(a), !0)) || [];
                    O = new Response(Ml(O.body, Fl, P, () => {
                        R && R(), _ && _()
                    }), E)
                }
                c = c || "text";
                let b = yield Qr[N.findKey(Qr, c) || "text"](O, t);
                return !k && _ && _(), yield new Promise((E, $) => {
                    lf(E, $, {
                        data: b,
                        headers: ot.from(O.headers),
                        status: O.status,
                        statusText: O.statusText,
                        config: t,
                        request: m
                    })
                })
            } catch (w) {
                throw _ && _(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(new ne("Network Error", ne.ERR_NETWORK, t, m), {
                    cause: w.cause || w
                }) : ne.from(w, w && w.code, t, m)
            }
        })),
        ko = {
            http: mm,
            xhr: Wm,
            fetch: tg
        };
    N.forEach(ko, (t, e) => {
        if (t) {
            try {
                Object.defineProperty(t, "name", {
                    value: e
                })
            } catch (n) {}
            Object.defineProperty(t, "adapterName", {
                value: e
            })
        }
    });
    const jl = t => "- ".concat(t),
        ng = t => N.isFunction(t) || t === null || t === !1,
        _f = {
            getAdapter: t => {
                t = N.isArray(t) ? t : [t];
                const {
                    length: e
                } = t;
                let n, s;
                const r = {};
                for (let i = 0; i < e; i++) {
                    n = t[i];
                    let o;
                    if (s = n, !ng(n) && (s = ko[(o = String(n)).toLowerCase()], s === void 0)) throw new ne("Unknown adapter '".concat(o, "'"));
                    if (s) break;
                    r[o || "#" + i] = s
                }
                if (!s) {
                    const i = Object.entries(r).map(([a, l]) => "adapter ".concat(a, " ") + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                    let o = e ? i.length > 1 ? "since :\n" + i.map(jl).join("\n") : " " + jl(i[0]) : "as no adapter specified";
                    throw new ne("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
                }
                return s
            },
            adapters: ko
        };

    function Wi(t) {
        if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Fs(null, t)
    }

    function Ul(t) {
        return Wi(t), t.headers = ot.from(t.headers), t.data = Hi.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), _f.getAdapter(t.adapter || $r.adapter)(t).then(function(s) {
            return Wi(t), s.data = Hi.call(t, t.transformResponse, s), s.headers = ot.from(s.headers), s
        }, function(s) {
            return af(s) || (Wi(t), s && s.response && (s.response.data = Hi.call(t, t.transformResponse, s.response), s.response.headers = ot.from(s.response.headers))), Promise.reject(s)
        })
    }
    const hf = "1.7.7",
        Ta = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
        Ta[t] = function(s) {
            return typeof s === t || "a" + (e < 1 ? "n " : " ") + t
        }
    });
    const zl = {};
    Ta.transitional = function(e, n, s) {
        function r(i, o) {
            return "[Axios v" + hf + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "")
        }
        return (i, o, a) => {
            if (e === !1) throw new ne(r(o, " has been removed" + (n ? " in " + n : "")), ne.ERR_DEPRECATED);
            return n && !zl[o] && (zl[o] = !0, console.warn(r(o, " has been deprecated since v" + n + " and will be removed in the near future"))), e ? e(i, o, a) : !0
        }
    };

    function sg(t, e, n) {
        if (typeof t != "object") throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
        const s = Object.keys(t);
        let r = s.length;
        for (; r-- > 0;) {
            const i = s[r],
                o = e[i];
            if (o) {
                const a = t[i],
                    l = a === void 0 || o(a, i, t);
                if (l !== !0) throw new ne("option " + i + " must be " + l, ne.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0) throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION)
        }
    }
    const To = {
            assertOptions: sg,
            validators: Ta
        },
        gn = To.validators;
    class Qn {
        constructor(e) {
            this.defaults = e, this.interceptors = {
                request: new Rl,
                response: new Rl
            }
        }
        request(e, n) {
            return _t(this, null, function*() {
                try {
                    return yield this._request(e, n)
                } catch (s) {
                    if (s instanceof Error) {
                        let r;
                        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error;
                        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                        try {
                            s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += "\n" + i) : s.stack = i
                        } catch (o) {}
                    }
                    throw s
                }
            })
        }
        _request(e, n) {
            typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = os(this.defaults, n);
            const {
                transitional: s,
                paramsSerializer: r,
                headers: i
            } = n;
            s !== void 0 && To.assertOptions(s, {
                silentJSONParsing: gn.transitional(gn.boolean),
                forcedJSONParsing: gn.transitional(gn.boolean),
                clarifyTimeoutError: gn.transitional(gn.boolean)
            }, !1), r != null && (N.isFunction(r) ? n.paramsSerializer = {
                serialize: r
            } : To.assertOptions(r, {
                encode: gn.function,
                serialize: gn.function
            }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
            let o = i && N.merge(i.common, i[n.method]);
            i && N.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
                delete i[m]
            }), n.headers = ot.concat(o, i);
            const a = [];
            let l = !0;
            this.interceptors.request.forEach(function(_) {
                typeof _.runWhen == "function" && _.runWhen(n) === !1 || (l = l && _.synchronous, a.unshift(_.fulfilled, _.rejected))
            });
            const c = [];
            this.interceptors.response.forEach(function(_) {
                c.push(_.fulfilled, _.rejected)
            });
            let u, f = 0,
                d;
            if (!l) {
                const m = [Ul.bind(this), void 0];
                for (m.unshift.apply(m, a), m.push.apply(m, c), d = m.length, u = Promise.resolve(n); f < d;) u = u.then(m[f++], m[f++]);
                return u
            }
            d = a.length;
            let h = n;
            for (f = 0; f < d;) {
                const m = a[f++],
                    _ = a[f++];
                try {
                    h = m(h)
                } catch (v) {
                    _.call(this, v);
                    break
                }
            }
            try {
                u = Ul.call(this, h)
            } catch (m) {
                return Promise.reject(m)
            }
            for (f = 0, d = c.length; f < d;) u = u.then(c[f++], c[f++]);
            return u
        }
        getUri(e) {
            e = os(this.defaults, e);
            const n = cf(e.baseURL, e.url);
            return sf(n, e.params, e.paramsSerializer)
        }
    }
    N.forEach(["delete", "get", "head", "options"], function(e) {
        Qn.prototype[e] = function(n, s) {
            return this.request(os(s || {}, {
                method: e,
                url: n,
                data: (s || {}).data
            }))
        }
    });
    N.forEach(["post", "put", "patch"], function(e) {
        function n(s) {
            return function(i, o, a) {
                return this.request(os(a || {}, {
                    method: e,
                    headers: s ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: i,
                    data: o
                }))
            }
        }
        Qn.prototype[e] = n(), Qn.prototype[e + "Form"] = n(!0)
    });
    class Ea {
        constructor(e) {
            if (typeof e != "function") throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function(i) {
                n = i
            });
            const s = this;
            this.promise.then(r => {
                if (!s._listeners) return;
                let i = s._listeners.length;
                for (; i-- > 0;) s._listeners[i](r);
                s._listeners = null
            }), this.promise.then = r => {
                let i;
                const o = new Promise(a => {
                    s.subscribe(a), i = a
                }).then(r);
                return o.cancel = function() {
                    s.unsubscribe(i)
                }, o
            }, e(function(i, o, a) {
                s.reason || (s.reason = new Fs(i, o, a), n(s.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            if (this.reason) {
                e(this.reason);
                return
            }
            this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const n = this._listeners.indexOf(e);
            n !== -1 && this._listeners.splice(n, 1)
        }
        toAbortSignal() {
            const e = new AbortController,
                n = s => {
                    e.abort(s)
                };
            return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal
        }
        static source() {
            let e;
            return {
                token: new Ea(function(r) {
                    e = r
                }),
                cancel: e
            }
        }
    }

    function rg(t) {
        return function(n) {
            return t.apply(null, n)
        }
    }

    function ig(t) {
        return N.isObject(t) && t.isAxiosError === !0
    }
    const Eo = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Eo).forEach(([t, e]) => {
        Eo[e] = t
    });

    function pf(t) {
        const e = new Qn(t),
            n = Hu(Qn.prototype.request, e);
        return N.extend(n, Qn.prototype, e, {
            allOwnKeys: !0
        }), N.extend(n, e, null, {
            allOwnKeys: !0
        }), n.create = function(r) {
            return pf(os(t, r))
        }, n
    }
    const xe = pf($r);
    xe.Axios = Qn;
    xe.CanceledError = Fs;
    xe.CancelToken = Ea;
    xe.isCancel = af;
    xe.VERSION = hf;
    xe.toFormData = bi;
    xe.AxiosError = ne;
    xe.Cancel = xe.CanceledError;
    xe.all = function(e) {
        return Promise.all(e)
    };
    xe.spread = rg;
    xe.isAxiosError = ig;
    xe.mergeConfig = os;
    xe.AxiosHeaders = ot;
    xe.formToJSON = t => of (N.isHTMLForm(t) ? new FormData(t) : t);
    xe.getAdapter = _f.getAdapter;
    xe.HttpStatusCode = Eo;
    xe.default = xe;

    function on(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function mf(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var kt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Ps = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        wa, qe, ke, St = 1e8,
        ye = 1 / St,
        wo = Math.PI * 2,
        og = wo / 4,
        ag = 0,
        gf = Math.sqrt,
        lg = Math.cos,
        cg = Math.sin,
        Ue = function(e) {
            return typeof e == "string"
        },
        Oe = function(e) {
            return typeof e == "function"
        },
        un = function(e) {
            return typeof e == "number"
        },
        $a = function(e) {
            return typeof e == "undefined"
        },
        Qt = function(e) {
            return typeof e == "object"
        },
        at = function(e) {
            return e !== !1
        },
        Sa = function() {
            return typeof window != "undefined"
        },
        Lr = function(e) {
            return Oe(e) || Ue(e)
        },
        yf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
        Ke = Array.isArray,
        $o = /(?:-?\.?\d|\.)+/gi,
        vf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        qi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        bf = /[+-]=-?[.\d]+/,
        kf = /[^,'"\[\]\s]+/gi,
        ug = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Ee, Vt, So, Oa, Tt = {},
        Zr = {},
        Tf, Ef = function(e) {
            return (Zr = as(e, Tt)) && ft
        },
        xa = function(e, n) {
            return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
        },
        dr = function(e, n) {
            return !n && console.warn(e)
        },
        wf = function(e, n) {
            return e && (Tt[e] = n) && Zr && (Zr[e] = n) || Tt
        },
        _r = function() {
            return 0
        },
        fg = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        Gr = {
            suppressEvents: !0,
            kill: !1
        },
        dg = {
            suppressEvents: !0
        },
        Pa = {},
        Sn = [],
        Oo = {},
        $f, mt = {},
        Ki = {},
        Gl = 30,
        Br = [],
        Aa = "",
        Ia = function(e) {
            var n = e[0],
                s, r;
            if (Qt(n) || Oe(n) || (e = [e]), !(s = (n._gsap || {}).harness)) {
                for (r = Br.length; r-- && !Br[r].targetTest(n););
                s = Br[r]
            }
            for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Yf(e[r], s))) || e.splice(r, 1);
            return e
        },
        Zn = function(e) {
            return e._gsap || Ia(Ot(e))[0]._gsap
        },
        Sf = function(e, n, s) {
            return (s = e[n]) && Oe(s) ? e[n]() : $a(s) && e.getAttribute && e.getAttribute(n) || s
        },
        lt = function(e, n) {
            return (e = e.split(",")).forEach(n) || e
        },
        Ae = function(e) {
            return Math.round(e * 1e5) / 1e5 || 0
        },
        Fe = function(e) {
            return Math.round(e * 1e7) / 1e7 || 0
        },
        $s = function(e, n) {
            var s = n.charAt(0),
                r = parseFloat(n.substr(2));
            return e = parseFloat(e), s === "+" ? e + r : s === "-" ? e - r : s === "*" ? e * r : e / r
        },
        _g = function(e, n) {
            for (var s = n.length, r = 0; e.indexOf(n[r]) < 0 && ++r < s;);
            return r < s
        },
        ei = function() {
            var e = Sn.length,
                n = Sn.slice(0),
                s, r;
            for (Oo = {}, Sn.length = 0, s = 0; s < e; s++) r = n[s], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
        },
        Of = function(e, n, s, r) {
            Sn.length && !qe && ei(), e.render(n, s, qe && n < 0 && (e._initted || e._startAt)), Sn.length && !qe && ei()
        },
        xf = function(e) {
            var n = parseFloat(e);
            return (n || n === 0) && (e + "").match(kf).length < 2 ? n : Ue(e) ? e.trim() : e
        },
        Pf = function(e) {
            return e
        },
        xt = function(e, n) {
            for (var s in n) s in e || (e[s] = n[s]);
            return e
        },
        hg = function(e) {
            return function(n, s) {
                for (var r in s) r in n || r === "duration" && e || r === "ease" || (n[r] = s[r])
            }
        },
        as = function(e, n) {
            for (var s in n) e[s] = n[s];
            return e
        },
        Bl = function t(e, n) {
            for (var s in n) s !== "__proto__" && s !== "constructor" && s !== "prototype" && (e[s] = Qt(n[s]) ? t(e[s] || (e[s] = {}), n[s]) : n[s]);
            return e
        },
        ti = function(e, n) {
            var s = {},
                r;
            for (r in e) r in n || (s[r] = e[r]);
            return s
        },
        tr = function(e) {
            var n = e.parent || Ee,
                s = e.keyframes ? hg(Ke(e.keyframes)) : xt;
            if (at(e.inherit))
                for (; n;) s(e, n.vars.defaults), n = n.parent || n._dp;
            return e
        },
        pg = function(e, n) {
            for (var s = e.length, r = s === n.length; r && s-- && e[s] === n[s];);
            return s < 0
        },
        Af = function(e, n, s, r, i) {
            var o = e[r],
                a;
            if (i)
                for (a = n[i]; o && o[i] > a;) o = o._prev;
            return o ? (n._next = o._next, o._next = n) : (n._next = e[s], e[s] = n), n._next ? n._next._prev = n : e[r] = n, n._prev = o, n.parent = n._dp = e, n
        },
        Ti = function(e, n, s, r) {
            s === void 0 && (s = "_first"), r === void 0 && (r = "_last");
            var i = n._prev,
                o = n._next;
            i ? i._next = o : e[s] === n && (e[s] = o), o ? o._prev = i : e[r] === n && (e[r] = i), n._next = n._prev = n.parent = null
        },
        Pn = function(e, n) {
            e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        es = function(e, n) {
            if (e && (!n || n._end > e._dur || n._start < 0))
                for (var s = e; s;) s._dirty = 1, s = s.parent;
            return e
        },
        mg = function(e) {
            for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
            return e
        },
        xo = function(e, n, s, r) {
            return e._startAt && (qe ? e._startAt.revert(Gr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, r))
        },
        gg = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Vl = function(e) {
            return e._repeat ? As(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        As = function(e, n) {
            var s = Math.floor(e /= n);
            return e && s === e ? s - 1 : s
        },
        ni = function(e, n) {
            return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
        },
        Ei = function(e) {
            return e._end = Fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || ye) || 0))
        },
        wi = function(e, n) {
            var s = e._dp;
            return s && s.smoothChildTiming && e._ts && (e._start = Fe(s._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Ei(e), s._dirty || es(s, e)), e
        },
        If = function(e, n) {
            var s;
            if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (s = ni(e.rawTime(), n), (!n._dur || Sr(0, n.totalDuration(), s) - n._tTime > ye) && n.render(s, !0)), es(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration())
                    for (s = e; s._dp;) s.rawTime() >= 0 && s.totalTime(s._tTime), s = s._dp;
                e._zTime = -ye
            }
        },
        Wt = function(e, n, s, r) {
            return n.parent && Pn(n), n._start = Fe((un(s) ? s : s || e !== Ee ? wt(e, s, n) : e._time) + n._delay), n._end = Fe(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), Af(e, n, "_first", "_last", e._sort ? "_start" : 0), Po(n) || (e._recent = n), r || If(e, n), e._ts < 0 && wi(e, e._tTime), e
        },
        Rf = function(e, n) {
            return (Tt.ScrollTrigger || xa("scrollTrigger", n)) && Tt.ScrollTrigger.create(n, e)
        },
        Nf = function(e, n, s, r, i) {
            if (Na(e, n, i), !e._initted) return 1;
            if (!s && e._pt && !qe && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && $f !== gt.frame) return Sn.push(e), e._lazy = [i, r], 1
        },
        yg = function t(e) {
            var n = e.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        },
        Po = function(e) {
            var n = e.data;
            return n === "isFromStart" || n === "isStart"
        },
        vg = function(e, n, s, r) {
            var i = e.ratio,
                o = n < 0 || !n && (!e._start && yg(e) && !(!e._initted && Po(e)) || (e._ts < 0 || e._dp._ts < 0) && !Po(e)) ? 0 : 1,
                a = e._rDelay,
                l = 0,
                c, u, f;
            if (a && e._repeat && (l = Sr(0, e._tDur, n), u = As(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== As(e._tTime, a) && (i = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== i || qe || r || e._zTime === ye || !n && e._zTime) {
                if (!e._initted && Nf(e, n, r, s, l)) return;
                for (f = e._zTime, e._zTime = n || (s ? ye : 0), s || (s = n && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c;) c.r(o, c.d), c = c._next;
                n < 0 && xo(e, n, s, !0), e._onUpdate && !s && vt(e, "onUpdate"), l && e._repeat && !s && e.parent && vt(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === o && (o && Pn(e, 1), !s && !qe && (vt(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = n)
        },
        bg = function(e, n, s) {
            var r;
            if (s > n)
                for (r = e._first; r && r._start <= s;) {
                    if (r.data === "isPause" && r._start > n) return r;
                    r = r._next
                } else
                    for (r = e._last; r && r._start >= s;) {
                        if (r.data === "isPause" && r._start < n) return r;
                        r = r._prev
                    }
        },
        Is = function(e, n, s, r) {
            var i = e._repeat,
                o = Fe(n) || 0,
                a = e._tTime / e._tDur;
            return a && !r && (e._time *= o / e._dur), e._dur = o, e._tDur = i ? i < 0 ? 1e10 : Fe(o * (i + 1) + e._rDelay * i) : o, a > 0 && !r && wi(e, e._tTime = e._tDur * a), e.parent && Ei(e), s || es(e.parent, e), e
        },
        Hl = function(e) {
            return e instanceof nt ? es(e) : Is(e, e._dur)
        },
        kg = {
            _start: 0,
            endTime: _r,
            totalDuration: _r
        },
        wt = function t(e, n, s) {
            var r = e.labels,
                i = e._recent || kg,
                o = e.duration() >= St ? i.endTime(!1) : e._dur,
                a, l, c;
            return Ue(n) && (isNaN(n) || n in r) ? (l = n.charAt(0), c = n.substr(-1) === "%", a = n.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")), (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (c ? (a < 0 ? i : s).totalDuration() / 100 : 1)) : a < 0 ? (n in r || (r[n] = o), r[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), c && s && (l = l / 100 * (Ke(s) ? s[0] : s).totalDuration()), a > 1 ? t(e, n.substr(0, a - 1), s) + l : o + l)) : n == null ? o : +n
        },
        nr = function(e, n, s) {
            var r = un(n[1]),
                i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                o = n[i],
                a, l;
            if (r && (o.duration = n[1]), o.parent = s, e) {
                for (a = o, l = s; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = at(l.vars.inherit) && l.parent;
                o.immediateRender = at(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = n[i - 1]
            }
            return new Ie(n[0], o, n[i + 1])
        },
        Ln = function(e, n) {
            return e || e === 0 ? n(e) : n
        },
        Sr = function(e, n, s) {
            return s < e ? e : s > n ? n : s
        },
        We = function(e, n) {
            return !Ue(e) || !(n = ug.exec(e)) ? "" : n[1]
        },
        Tg = function(e, n, s) {
            return Ln(s, function(r) {
                return Sr(e, n, r)
            })
        },
        Ao = [].slice,
        Cf = function(e, n) {
            return e && Qt(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Qt(e[0])) && !e.nodeType && e !== Vt
        },
        Eg = function(e, n, s) {
            return s === void 0 && (s = []), e.forEach(function(r) {
                var i;
                return Ue(r) && !n || Cf(r, 1) ? (i = s).push.apply(i, Ot(r)) : s.push(r)
            }) || s
        },
        Ot = function(e, n, s) {
            return ke && !n && ke.selector ? ke.selector(e) : Ue(e) && !s && (So || !Rs()) ? Ao.call((n || Oa).querySelectorAll(e), 0) : Ke(e) ? Eg(e, s) : Cf(e) ? Ao.call(e, 0) : e ? [e] : []
        },
        Io = function(e) {
            return e = Ot(e)[0] || dr("Invalid scope") || {},
                function(n) {
                    var s = e.current || e.nativeElement || e;
                    return Ot(n, s.querySelectorAll ? s : s === e ? dr("Invalid scope") || Oa.createElement("div") : e)
                }
        },
        Lf = function(e) {
            return e.sort(function() {
                return .5 - Math.random()
            })
        },
        Df = function(e) {
            if (Oe(e)) return e;
            var n = Qt(e) ? e : {
                    each: e
                },
                s = ts(n.ease),
                r = n.from || 0,
                i = parseFloat(n.base) || 0,
                o = {},
                a = r > 0 && r < 1,
                l = isNaN(r) || a,
                c = n.axis,
                u = r,
                f = r;
            return Ue(r) ? u = f = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !a && l && (u = r[0], f = r[1]),
                function(d, h, m) {
                    var _ = (m || n).length,
                        v = o[_],
                        w, O, k, b, E, $, P, R, A;
                    if (!v) {
                        if (A = n.grid === "auto" ? 0 : (n.grid || [1, St])[1], !A) {
                            for (P = -St; P < (P = m[A++].getBoundingClientRect().left) && A < _;);
                            A < _ && A--
                        }
                        for (v = o[_] = [], w = l ? Math.min(A, _) * u - .5 : r % A, O = A === St ? 0 : l ? _ * f / A - .5 : r / A | 0, P = 0, R = St, $ = 0; $ < _; $++) k = $ % A - w, b = O - ($ / A | 0), v[$] = E = c ? Math.abs(c === "y" ? b : k) : gf(k * k + b * b), E > P && (P = E), E < R && (R = E);
                        r === "random" && Lf(v), v.max = P - R, v.min = R, v.v = _ = (parseFloat(n.amount) || parseFloat(n.each) * (A > _ ? _ - 1 : c ? c === "y" ? _ / A : A : Math.max(A, _ / A)) || 0) * (r === "edges" ? -1 : 1), v.b = _ < 0 ? i - _ : i, v.u = We(n.amount || n.each) || 0, s = s && _ < 0 ? Wf(s) : s
                    }
                    return _ = (v[d] - v.min) / v.max || 0, Fe(v.b + (s ? s(_) : _) * v.v) + v.u
                }
        },
        Ro = function(e) {
            var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function(s) {
                var r = Fe(Math.round(parseFloat(s) / e) * e * n);
                return (r - r % 1) / n + (un(s) ? 0 : We(s))
            }
        },
        Mf = function(e, n) {
            var s = Ke(e),
                r, i;
            return !s && Qt(e) && (r = s = e.radius || St, e.values ? (e = Ot(e.values), (i = !un(e[0])) && (r *= r)) : e = Ro(e.increment)), Ln(n, s ? Oe(e) ? function(o) {
                return i = e(o), Math.abs(i - o) <= r ? i : o
            } : function(o) {
                for (var a = parseFloat(i ? o.x : o), l = parseFloat(i ? o.y : 0), c = St, u = 0, f = e.length, d, h; f--;) i ? (d = e[f].x - a, h = e[f].y - l, d = d * d + h * h) : d = Math.abs(e[f] - a), d < c && (c = d, u = f);
                return u = !r || c <= r ? e[u] : o, i || u === o || un(o) ? u : u + We(o)
            } : Ro(e))
        },
        Ff = function(e, n, s, r) {
            return Ln(Ke(e) ? !n : s === !0 ? !!(s = 0) : !r, function() {
                return Ke(e) ? e[~~(Math.random() * e.length)] : (s = s || 1e-5) && (r = s < 1 ? Math.pow(10, (s + "").length - 2) : 1) && Math.floor(Math.round((e - s / 2 + Math.random() * (n - e + s * .99)) / s) * s * r) / r
            })
        },
        wg = function() {
            for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
            return function(r) {
                return n.reduce(function(i, o) {
                    return o(i)
                }, r)
            }
        },
        $g = function(e, n) {
            return function(s) {
                return e(parseFloat(s)) + (n || We(s))
            }
        },
        Sg = function(e, n, s) {
            return Uf(e, n, 0, 1, s)
        },
        jf = function(e, n, s) {
            return Ln(s, function(r) {
                return e[~~n(r)]
            })
        },
        Og = function t(e, n, s) {
            var r = n - e;
            return Ke(e) ? jf(e, t(0, e.length), n) : Ln(s, function(i) {
                return (r + (i - e) % r) % r + e
            })
        },
        xg = function t(e, n, s) {
            var r = n - e,
                i = r * 2;
            return Ke(e) ? jf(e, t(0, e.length - 1), n) : Ln(s, function(o) {
                return o = (i + (o - e) % i) % i || 0, e + (o > r ? i - o : o)
            })
        },
        hr = function(e) {
            for (var n = 0, s = "", r, i, o, a; ~(r = e.indexOf("random(", n));) o = e.indexOf(")", r), a = e.charAt(r + 7) === "[", i = e.substr(r + 7, o - r - 7).match(a ? kf : $o), s += e.substr(n, r - n) + Ff(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5), n = o + 1;
            return s + e.substr(n, e.length - n)
        },
        Uf = function(e, n, s, r, i) {
            var o = n - e,
                a = r - s;
            return Ln(i, function(l) {
                return s + ((l - e) / o * a || 0)
            })
        },
        Pg = function t(e, n, s, r) {
            var i = isNaN(e + n) ? 0 : function(h) {
                return (1 - h) * e + h * n
            };
            if (!i) {
                var o = Ue(e),
                    a = {},
                    l, c, u, f, d;
                if (s === !0 && (r = 1) && (s = null), o) e = {
                    p: e
                }, n = {
                    p: n
                };
                else if (Ke(e) && !Ke(n)) {
                    for (u = [], f = e.length, d = f - 2, c = 1; c < f; c++) u.push(t(e[c - 1], e[c]));
                    f--, i = function(m) {
                        m *= f;
                        var _ = Math.min(d, ~~m);
                        return u[_](m - _)
                    }, s = n
                } else r || (e = as(Ke(e) ? [] : {}, e));
                if (!u) {
                    for (l in n) Ra.call(a, e, l, "get", n[l]);
                    i = function(m) {
                        return Da(m, a) || (o ? e.p : e)
                    }
                }
            }
            return Ln(s, i)
        },
        Wl = function(e, n, s) {
            var r = e.labels,
                i = St,
                o, a, l;
            for (o in r) a = r[o] - n, a < 0 == !!s && a && i > (a = Math.abs(a)) && (l = o, i = a);
            return l
        },
        vt = function(e, n, s) {
            var r = e.vars,
                i = r[n],
                o = ke,
                a = e._ctx,
                l, c, u;
            if (i) return l = r[n + "Params"], c = r.callbackScope || e, s && Sn.length && ei(), a && (ke = a), u = l ? i.apply(c, l) : i.call(c), ke = o, u
        },
        Ws = function(e) {
            return Pn(e), e.scrollTrigger && e.scrollTrigger.kill(!!qe), e.progress() < 1 && vt(e, "onInterrupt"), e
        },
        vs, zf = [],
        Gf = function(e) {
            if (e)
                if (e = !e.name && e.default || e, Sa() || e.headless) {
                    var n = e.name,
                        s = Oe(e),
                        r = n && !s && e.init ? function() {
                            this._props = []
                        } : e,
                        i = {
                            init: _r,
                            render: Da,
                            add: Ra,
                            kill: Hg,
                            modifier: Vg,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: La,
                            aliases: {},
                            register: 0
                        };
                    if (Rs(), e !== r) {
                        if (mt[n]) return;
                        xt(r, xt(ti(e, i), o)), as(r.prototype, as(i, ti(e, o))), mt[r.prop = n] = r, e.targetTest && (Br.push(r), Pa[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
                    }
                    wf(n, r), e.register && e.register(ft, r, ct)
                } else zf.push(e)
        },
        pe = 255,
        qs = {
            aqua: [0, pe, pe],
            lime: [0, pe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, pe],
            navy: [0, 0, 128],
            white: [pe, pe, pe],
            olive: [128, 128, 0],
            yellow: [pe, pe, 0],
            orange: [pe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [pe, 0, 0],
            pink: [pe, 192, 203],
            cyan: [0, pe, pe],
            transparent: [pe, pe, pe, 0]
        },
        Yi = function(e, n, s) {
            return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (s - n) * e * 6 : e < .5 ? s : e * 3 < 2 ? n + (s - n) * (2 / 3 - e) * 6 : n) * pe + .5 | 0
        },
        Bf = function(e, n, s) {
            var r = e ? un(e) ? [e >> 16, e >> 8 & pe, e & pe] : 0 : qs.black,
                i, o, a, l, c, u, f, d, h, m;
            if (!r) {
                if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), qs[e]) r = qs[e];
                else if (e.charAt(0) === "#") {
                    if (e.length < 6 && (i = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & pe, r & pe, parseInt(e.substr(7), 16) / 255];
                    e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & pe, e & pe]
                } else if (e.substr(0, 3) === "hsl") {
                    if (r = m = e.match($o), !n) l = +r[0] % 360 / 360, c = +r[1] / 100, u = +r[2] / 100, o = u <= .5 ? u * (c + 1) : u + c - u * c, i = u * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Yi(l + 1 / 3, i, o), r[1] = Yi(l, i, o), r[2] = Yi(l - 1 / 3, i, o);
                    else if (~e.indexOf("=")) return r = e.match(vf), s && r.length < 4 && (r[3] = 1), r
                } else r = e.match($o) || qs.transparent;
                r = r.map(Number)
            }
            return n && !m && (i = r[0] / pe, o = r[1] / pe, a = r[2] / pe, f = Math.max(i, o, a), d = Math.min(i, o, a), u = (f + d) / 2, f === d ? l = c = 0 : (h = f - d, c = u > .5 ? h / (2 - f - d) : h / (f + d), l = f === i ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - i) / h + 2 : (i - o) / h + 4, l *= 60), r[0] = ~~(l + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(u * 100 + .5)), s && r.length < 4 && (r[3] = 1), r
        },
        Vf = function(e) {
            var n = [],
                s = [],
                r = -1;
            return e.split(On).forEach(function(i) {
                var o = i.match(ys) || [];
                n.push.apply(n, o), s.push(r += o.length + 1)
            }), n.c = s, n
        },
        ql = function(e, n, s) {
            var r = "",
                i = (e + r).match(On),
                o = n ? "hsla(" : "rgba(",
                a = 0,
                l, c, u, f;
            if (!i) return e;
            if (i = i.map(function(d) {
                    return (d = Bf(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
                }), s && (u = Vf(e), l = s.c, l.join(r) !== u.c.join(r)))
                for (c = e.replace(On, "1").split(ys), f = c.length - 1; a < f; a++) r += c[a] + (~l.indexOf(a) ? i.shift() || o + "0,0,0,0)" : (u.length ? u : i.length ? i : s).shift());
            if (!c)
                for (c = e.split(On), f = c.length - 1; a < f; a++) r += c[a] + i[a];
            return r + c[f]
        },
        On = function() {
            var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                e;
            for (e in qs) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        Ag = /hsl[a]?\(/,
        Hf = function(e) {
            var n = e.join(" "),
                s;
            if (On.lastIndex = 0, On.test(n)) return s = Ag.test(n), e[1] = ql(e[1], s), e[0] = ql(e[0], s, Vf(e[1])), !0
        },
        pr, gt = function() {
            var t = Date.now,
                e = 500,
                n = 33,
                s = t(),
                r = s,
                i = 1e3 / 240,
                o = i,
                a = [],
                l, c, u, f, d, h, m = function _(v) {
                    var w = t() - r,
                        O = v === !0,
                        k, b, E, $;
                    if ((w > e || w < 0) && (s += w - n), r += w, E = r - s, k = E - o, (k > 0 || O) && ($ = ++f.frame, d = E - f.time * 1e3, f.time = E = E / 1e3, o += k + (k >= i ? 4 : i - k), b = 1), O || (l = c(_)), b)
                        for (h = 0; h < a.length; h++) a[h](E, d, $, v)
                };
            return f = {
                time: 0,
                frame: 0,
                tick: function() {
                    m(!0)
                },
                deltaRatio: function(v) {
                    return d / (1e3 / (v || 60))
                },
                wake: function() {
                    Tf && (!So && Sa() && (Vt = So = window, Oa = Vt.document || {}, Tt.gsap = ft, (Vt.gsapVersions || (Vt.gsapVersions = [])).push(ft.version), Ef(Zr || Vt.GreenSockGlobals || !Vt.gsap && Vt || {}), zf.forEach(Gf)), u = typeof requestAnimationFrame != "undefined" && requestAnimationFrame, l && f.sleep(), c = u || function(v) {
                        return setTimeout(v, o - f.time * 1e3 + 1 | 0)
                    }, pr = 1, m(2))
                },
                sleep: function() {
                    (u ? cancelAnimationFrame : clearTimeout)(l), pr = 0, c = _r
                },
                lagSmoothing: function(v, w) {
                    e = v || 1 / 0, n = Math.min(w || 33, e)
                },
                fps: function(v) {
                    i = 1e3 / (v || 240), o = f.time * 1e3 + i
                },
                add: function(v, w, O) {
                    var k = w ? function(b, E, $, P) {
                        v(b, E, $, P), f.remove(k)
                    } : v;
                    return f.remove(v), a[O ? "unshift" : "push"](k), Rs(), k
                },
                remove: function(v, w) {
                    ~(w = a.indexOf(v)) && a.splice(w, 1) && h >= w && h--
                },
                _listeners: a
            }, f
        }(),
        Rs = function() {
            return !pr && gt.wake()
        },
        oe = {},
        Ig = /^[\d.\-M][\d.\-,\s]/,
        Rg = /["']/g,
        Ng = function(e) {
            for (var n = {}, s = e.substr(1, e.length - 3).split(":"), r = s[0], i = 1, o = s.length, a, l, c; i < o; i++) l = s[i], a = i !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), n[r] = isNaN(c) ? c.replace(Rg, "").trim() : +c, r = l.substr(a + 1).trim();
            return n
        },
        Cg = function(e) {
            var n = e.indexOf("(") + 1,
                s = e.indexOf(")"),
                r = e.indexOf("(", n);
            return e.substring(n, ~r && r < s ? e.indexOf(")", s + 1) : s)
        },
        Lg = function(e) {
            var n = (e + "").split("("),
                s = oe[n[0]];
            return s && n.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [Ng(n[1])] : Cg(e).split(",").map(xf)) : oe._CE && Ig.test(e) ? oe._CE("", e) : s
        },
        Wf = function(e) {
            return function(n) {
                return 1 - e(1 - n)
            }
        },
        qf = function t(e, n) {
            for (var s = e._first, r; s;) s instanceof nt ? t(s, n) : s.vars.yoyoEase && (!s._yoyo || !s._repeat) && s._yoyo !== n && (s.timeline ? t(s.timeline, n) : (r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = n)), s = s._next
        },
        ts = function(e, n) {
            return e && (Oe(e) ? e : oe[e] || Lg(e)) || n
        },
        us = function(e, n, s, r) {
            s === void 0 && (s = function(l) {
                return 1 - n(1 - l)
            }), r === void 0 && (r = function(l) {
                return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
            });
            var i = {
                    easeIn: n,
                    easeOut: s,
                    easeInOut: r
                },
                o;
            return lt(e, function(a) {
                oe[a] = Tt[a] = i, oe[o = a.toLowerCase()] = s;
                for (var l in i) oe[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = oe[a + "." + l] = i[l]
            }), i
        },
        Kf = function(e) {
            return function(n) {
                return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
            }
        },
        Xi = function t(e, n, s) {
            var r = n >= 1 ? n : 1,
                i = (s || (e ? .3 : .45)) / (n < 1 ? n : 1),
                o = i / wo * (Math.asin(1 / r) || 0),
                a = function(u) {
                    return u === 1 ? 1 : r * Math.pow(2, -10 * u) * cg((u - o) * i) + 1
                },
                l = e === "out" ? a : e === "in" ? function(c) {
                    return 1 - a(1 - c)
                } : Kf(a);
            return i = wo / i, l.config = function(c, u) {
                return t(e, c, u)
            }, l
        },
        Ji = function t(e, n) {
            n === void 0 && (n = 1.70158);
            var s = function(o) {
                    return o ? --o * o * ((n + 1) * o + n) + 1 : 0
                },
                r = e === "out" ? s : e === "in" ? function(i) {
                    return 1 - s(1 - i)
                } : Kf(s);
            return r.config = function(i) {
                return t(e, i)
            }, r
        };
    lt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        us(t + ",Power" + (n - 1), e ? function(s) {
            return Math.pow(s, n)
        } : function(s) {
            return s
        }, function(s) {
            return 1 - Math.pow(1 - s, n)
        }, function(s) {
            return s < .5 ? Math.pow(s * 2, n) / 2 : 1 - Math.pow((1 - s) * 2, n) / 2
        })
    });
    oe.Linear.easeNone = oe.none = oe.Linear.easeIn;
    us("Elastic", Xi("in"), Xi("out"), Xi());
    (function(t, e) {
        var n = 1 / e,
            s = 2 * n,
            r = 2.5 * n,
            i = function(a) {
                return a < n ? t * a * a : a < s ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
            };
        us("Bounce", function(o) {
            return 1 - i(1 - o)
        }, i)
    })(7.5625, 2.75);
    us("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    });
    us("Circ", function(t) {
        return -(gf(1 - t * t) - 1)
    });
    us("Sine", function(t) {
        return t === 1 ? 1 : -lg(t * og) + 1
    });
    us("Back", Ji("in"), Ji("out"), Ji());
    oe.SteppedEase = oe.steps = Tt.SteppedEase = {
        config: function(e, n) {
            e === void 0 && (e = 1);
            var s = 1 / e,
                r = e + (n ? 0 : 1),
                i = n ? 1 : 0,
                o = 1 - ye;
            return function(a) {
                return ((r * Sr(0, o, a) | 0) + i) * s
            }
        }
    };
    Ps.ease = oe["quad.out"];
    lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return Aa += t + "," + t + "Params,"
    });
    var Yf = function(e, n) {
            this.id = ag++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : Sf, this.set = n ? n.getSetter : La
        },
        mr = function() {
            function t(n) {
                this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Is(this, +n.duration, 1, 1), this.data = n.data, ke && (this._ctx = ke, ke.data.push(this)), pr || gt.wake()
            }
            var e = t.prototype;
            return e.delay = function(s) {
                return s || s === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + s - this._delay), this._delay = s, this) : this._delay
            }, e.duration = function(s) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? s + (s + this._rDelay) * this._repeat : s) : this.totalDuration() && this._dur
            }, e.totalDuration = function(s) {
                return arguments.length ? (this._dirty = 0, Is(this, this._repeat < 0 ? s : (s - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(s, r) {
                if (Rs(), !arguments.length) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (wi(this, s), !i._dp || i.parent || If(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && s < this._tDur || this._ts < 0 && s > 0 || !this._tDur && !s) && Wt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== s || !this._dur && !r || this._initted && Math.abs(this._zTime) === ye || !s && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = s), Of(this, s, r)), this
            }, e.time = function(s, r) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), s + Vl(this)) % (this._dur + this._rDelay) || (s ? this._dur : 0), r) : this._time
            }, e.totalProgress = function(s, r) {
                return arguments.length ? this.totalTime(this.totalDuration() * s, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
            }, e.progress = function(s, r) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - s : s) + Vl(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(s, r) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (s - 1) * i, r) : this._repeat ? As(this._tTime, i) + 1 : 1
            }, e.timeScale = function(s, r) {
                if (!arguments.length) return this._rts === -ye ? 0 : this._rts;
                if (this._rts === s) return this;
                var i = this.parent && this._ts ? ni(this.parent._time, this) : this._tTime;
                return this._rts = +s || 0, this._ts = this._ps || s === -ye ? 0 : this._rts, this.totalTime(Sr(-Math.abs(this._delay), this._tDur, i), r !== !1), Ei(this), mg(this)
            }, e.paused = function(s) {
                return arguments.length ? (this._ps !== s && (this._ps = s, s ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ye && (this._tTime -= ye)))), this) : this._ps
            }, e.startTime = function(s) {
                if (arguments.length) {
                    this._start = s;
                    var r = this.parent || this._dp;
                    return r && (r._sort || !this.parent) && Wt(r, this, s - this._delay), this
                }
                return this._start
            }, e.endTime = function(s) {
                return this._start + (at(s) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(s) {
                var r = this.parent || this._dp;
                return r ? s && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ni(r.rawTime(s), this) : this._tTime : this._tTime
            }, e.revert = function(s) {
                s === void 0 && (s = dg);
                var r = qe;
                return qe = s, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(s), this.totalTime(-.01, s.suppressEvents)), this.data !== "nested" && s.kill !== !1 && this.kill(), qe = r, this
            }, e.globalTime = function(s) {
                for (var r = this, i = arguments.length ? s : r.rawTime(); r;) i = r._start + i / (Math.abs(r._ts) || 1), r = r._dp;
                return !this.parent && this._sat ? this._sat.globalTime(s) : i
            }, e.repeat = function(s) {
                return arguments.length ? (this._repeat = s === 1 / 0 ? -2 : s, Hl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(s) {
                if (arguments.length) {
                    var r = this._time;
                    return this._rDelay = s, Hl(this), r ? this.time(r) : this
                }
                return this._rDelay
            }, e.yoyo = function(s) {
                return arguments.length ? (this._yoyo = s, this) : this._yoyo
            }, e.seek = function(s, r) {
                return this.totalTime(wt(this, s), at(r))
            }, e.restart = function(s, r) {
                return this.play().totalTime(s ? -this._delay : 0, at(r))
            }, e.play = function(s, r) {
                return s != null && this.seek(s, r), this.reversed(!1).paused(!1)
            }, e.reverse = function(s, r) {
                return s != null && this.seek(s || this.totalDuration(), r), this.reversed(!0).paused(!1)
            }, e.pause = function(s, r) {
                return s != null && this.seek(s, r), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(s) {
                return arguments.length ? (!!s !== this.reversed() && this.timeScale(-this._rts || (s ? -ye : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -ye, this
            }, e.isActive = function() {
                var s = this.parent || this._dp,
                    r = this._start,
                    i;
                return !!(!s || this._ts && this._initted && s.isActive() && (i = s.rawTime(!0)) >= r && i < this.endTime(!0) - ye)
            }, e.eventCallback = function(s, r, i) {
                var o = this.vars;
                return arguments.length > 1 ? (r ? (o[s] = r, i && (o[s + "Params"] = i), s === "onUpdate" && (this._onUpdate = r)) : delete o[s], this) : o[s]
            }, e.then = function(s) {
                var r = this;
                return new Promise(function(i) {
                    var o = Oe(s) ? s : Pf,
                        a = function() {
                            var c = r.then;
                            r.then = null, Oe(o) && (o = o(r)) && (o.then || o === r) && (r.then = c), i(o), r.then = c
                        };
                    r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
                })
            }, e.kill = function() {
                Ws(this)
            }, t
        }();
    xt(mr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -ye,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var nt = function(t) {
        mf(e, t);

        function e(s, r) {
            var i;
            return s === void 0 && (s = {}), i = t.call(this, s) || this, i.labels = {}, i.smoothChildTiming = !!s.smoothChildTiming, i.autoRemoveChildren = !!s.autoRemoveChildren, i._sort = at(s.sortChildren), Ee && Wt(s.parent || Ee, on(i), r), s.reversed && i.reverse(), s.paused && i.paused(!0), s.scrollTrigger && Rf(on(i), s.scrollTrigger), i
        }
        var n = e.prototype;
        return n.to = function(r, i, o) {
            return nr(0, arguments, this), this
        }, n.from = function(r, i, o) {
            return nr(1, arguments, this), this
        }, n.fromTo = function(r, i, o, a) {
            return nr(2, arguments, this), this
        }, n.set = function(r, i, o) {
            return i.duration = 0, i.parent = this, tr(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new Ie(r, i, wt(this, o), 1), this
        }, n.call = function(r, i, o) {
            return Wt(this, Ie.delayedCall(0, r, i), o)
        }, n.staggerTo = function(r, i, o, a, l, c, u) {
            return o.duration = i, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new Ie(r, o, wt(this, l)), this
        }, n.staggerFrom = function(r, i, o, a, l, c, u) {
            return o.runBackwards = 1, tr(o).immediateRender = at(o.immediateRender), this.staggerTo(r, i, o, a, l, c, u)
        }, n.staggerFromTo = function(r, i, o, a, l, c, u, f) {
            return a.startAt = o, tr(a).immediateRender = at(a.immediateRender), this.staggerTo(r, i, a, l, c, u, f)
        }, n.render = function(r, i, o) {
            var a = this._time,
                l = this._dirty ? this.totalDuration() : this._tDur,
                c = this._dur,
                u = r <= 0 ? 0 : Fe(r),
                f = this._zTime < 0 != r < 0 && (this._initted || !c),
                d, h, m, _, v, w, O, k, b, E, $, P;
            if (this !== Ee && u > l && r >= 0 && (u = l), u !== this._tTime || o || f) {
                if (a !== this._time && c && (u += this._time - a, r += this._time - a), d = u, b = this._start, k = this._ts, w = !k, f && (c || (a = this._zTime), (r || !i) && (this._zTime = r)), this._repeat) {
                    if ($ = this._yoyo, v = c + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(v * 100 + r, i, o);
                    if (d = Fe(u % v), u === l ? (_ = this._repeat, d = c) : (_ = ~~(u / v), _ && _ === u / v && (d = c, _--), d > c && (d = c)), E = As(this._tTime, v), !a && this._tTime && E !== _ && this._tTime - E * v - this._dur <= 0 && (E = _), $ && _ & 1 && (d = c - d, P = 1), _ !== E && !this._lock) {
                        var R = $ && E & 1,
                            A = R === ($ && _ & 1);
                        if (_ < E && (R = !R), a = R ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (P ? 0 : Fe(_ * v)), i, !c)._lock = 0, this._tTime = u, !i && this.parent && vt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (c = this._dur, l = this._tDur, A && (this._lock = 2, a = R ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !w) return this;
                        qf(this, P)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (O = bg(this, Fe(a), Fe(d)), O && (u -= d - (d = O._start))), this._tTime = u, this._time = d, this._act = !k, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && d && !i && !_ && (vt(this, "onStart"), this._tTime !== u)) return this;
                if (d >= a && r >= 0)
                    for (h = this._first; h;) {
                        if (m = h._next, (h._act || d >= h._start) && h._ts && O !== h) {
                            if (h.parent !== this) return this.render(r, i, o);
                            if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, i, o), d !== this._time || !this._ts && !w) {
                                O = 0, m && (u += this._zTime = -ye);
                                break
                            }
                        }
                        h = m
                    } else {
                        h = this._last;
                        for (var q = r < 0 ? r : d; h;) {
                            if (m = h._prev, (h._act || q <= h._end) && h._ts && O !== h) {
                                if (h.parent !== this) return this.render(r, i, o);
                                if (h.render(h._ts > 0 ? (q - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (q - h._start) * h._ts, i, o || qe && (h._initted || h._startAt)), d !== this._time || !this._ts && !w) {
                                    O = 0, m && (u += this._zTime = q ? -ye : ye);
                                    break
                                }
                            }
                            h = m
                        }
                    }
                if (O && !i && (this.pause(), O.render(d >= a ? 0 : -ye)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = b, Ei(this), this.render(r, i, o);
                this._onUpdate && !i && vt(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (b === this._start || Math.abs(k) !== Math.abs(this._ts)) && (this._lock || ((r || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Pn(this, 1), !i && !(r < 0 && !a) && (u || a || !l) && (vt(this, u === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(r, i) {
            var o = this;
            if (un(i) || (i = wt(this, i, r)), !(r instanceof mr)) {
                if (Ke(r)) return r.forEach(function(a) {
                    return o.add(a, i)
                }), this;
                if (Ue(r)) return this.addLabel(r, i);
                if (Oe(r)) r = Ie.delayedCall(0, r);
                else return this
            }
            return this !== r ? Wt(this, r, i) : this
        }, n.getChildren = function(r, i, o, a) {
            r === void 0 && (r = !0), i === void 0 && (i = !0), o === void 0 && (o = !0), a === void 0 && (a = -St);
            for (var l = [], c = this._first; c;) c._start >= a && (c instanceof Ie ? i && l.push(c) : (o && l.push(c), r && l.push.apply(l, c.getChildren(!0, i, o)))), c = c._next;
            return l
        }, n.getById = function(r) {
            for (var i = this.getChildren(1, 1, 1), o = i.length; o--;)
                if (i[o].vars.id === r) return i[o]
        }, n.remove = function(r) {
            return Ue(r) ? this.removeLabel(r) : Oe(r) ? this.killTweensOf(r) : (Ti(this, r), r === this._recent && (this._recent = this._last), es(this))
        }, n.totalTime = function(r, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Fe(gt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), t.prototype.totalTime.call(this, r, i), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(r, i) {
            return this.labels[r] = wt(this, i), this
        }, n.removeLabel = function(r) {
            return delete this.labels[r], this
        }, n.addPause = function(r, i, o) {
            var a = Ie.delayedCall(0, i || _r, o);
            return a.data = "isPause", this._hasPause = 1, Wt(this, a, wt(this, r))
        }, n.removePause = function(r) {
            var i = this._first;
            for (r = wt(this, r); i;) i._start === r && i.data === "isPause" && Pn(i), i = i._next
        }, n.killTweensOf = function(r, i, o) {
            for (var a = this.getTweensOf(r, o), l = a.length; l--;) Tn !== a[l] && a[l].kill(r, i);
            return this
        }, n.getTweensOf = function(r, i) {
            for (var o = [], a = Ot(r), l = this._first, c = un(i), u; l;) l instanceof Ie ? _g(l._targets, a) && (c ? (!Tn || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, i)).length && o.push.apply(o, u), l = l._next;
            return o
        }, n.tweenTo = function(r, i) {
            i = i || {};
            var o = this,
                a = wt(o, r),
                l = i,
                c = l.startAt,
                u = l.onStart,
                f = l.onStartParams,
                d = l.immediateRender,
                h, m = Ie.to(o, xt({
                    ease: i.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: a,
                    overwrite: "auto",
                    duration: i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || ye,
                    onStart: function() {
                        if (o.pause(), !h) {
                            var v = i.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
                            m._dur !== v && Is(m, v, 0, 1).render(m._time, !0, !0), h = 1
                        }
                        u && u.apply(m, f || [])
                    }
                }, i));
            return d ? m.render(0) : m
        }, n.tweenFromTo = function(r, i, o) {
            return this.tweenTo(i, xt({
                startAt: {
                    time: wt(this, r)
                }
            }, o))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(r) {
            return r === void 0 && (r = this._time), Wl(this, wt(this, r))
        }, n.previousLabel = function(r) {
            return r === void 0 && (r = this._time), Wl(this, wt(this, r), 1)
        }, n.currentLabel = function(r) {
            return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ye)
        }, n.shiftChildren = function(r, i, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, l = this.labels, c; a;) a._start >= o && (a._start += r, a._end += r), a = a._next;
            if (i)
                for (c in l) l[c] >= o && (l[c] += r);
            return es(this)
        }, n.invalidate = function(r) {
            var i = this._first;
            for (this._lock = 0; i;) i.invalidate(r), i = i._next;
            return t.prototype.invalidate.call(this, r)
        }, n.clear = function(r) {
            r === void 0 && (r = !0);
            for (var i = this._first, o; i;) o = i._next, this.remove(i), i = o;
            return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), es(this)
        }, n.totalDuration = function(r) {
            var i = 0,
                o = this,
                a = o._last,
                l = St,
                c, u, f;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
            if (o._dirty) {
                for (f = o.parent; a;) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Wt(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (i -= u, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += u / o._ts, o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > i && a._ts && (i = a._end), a = c;
                Is(o, o === Ee && o._time > i ? o._time : i, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(r) {
            if (Ee._ts && (Of(Ee, ni(r, Ee)), $f = gt.frame), gt.frame >= Gl) {
                Gl += kt.autoSleep || 120;
                var i = Ee._first;
                if ((!i || !i._ts) && kt.autoSleep && gt._listeners.length < 2) {
                    for (; i && !i._ts;) i = i._next;
                    i || gt.sleep()
                }
            }
        }, e
    }(mr);
    xt(nt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Dg = function(e, n, s, r, i, o, a) {
            var l = new ct(this._pt, e, n, 0, 1, td, null, i),
                c = 0,
                u = 0,
                f, d, h, m, _, v, w, O;
            for (l.b = s, l.e = r, s += "", r += "", (w = ~r.indexOf("random(")) && (r = hr(r)), o && (O = [s, r], o(O, e, n), s = O[0], r = O[1]), d = s.match(qi) || []; f = qi.exec(r);) m = f[0], _ = r.substring(c, f.index), h ? h = (h + 1) % 5 : _.substr(-5) === "rgba(" && (h = 1), m !== d[u++] && (v = parseFloat(d[u - 1]) || 0, l._pt = {
                _next: l._pt,
                p: _ || u === 1 ? _ : ",",
                s: v,
                c: m.charAt(1) === "=" ? $s(v, m) - v : parseFloat(m) - v,
                m: h && h < 4 ? Math.round : 0
            }, c = qi.lastIndex);
            return l.c = c < r.length ? r.substring(c, r.length) : "", l.fp = a, (bf.test(r) || w) && (l.e = 0), this._pt = l, l
        },
        Ra = function(e, n, s, r, i, o, a, l, c, u) {
            Oe(r) && (r = r(i || 0, e, o));
            var f = e[n],
                d = s !== "get" ? s : Oe(f) ? c ? e[n.indexOf("set") || !Oe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](c) : e[n]() : f,
                h = Oe(f) ? c ? zg : Zf : Ca,
                m;
            if (Ue(r) && (~r.indexOf("random(") && (r = hr(r)), r.charAt(1) === "=" && (m = $s(d, r) + (We(d) || 0), (m || m === 0) && (r = m))), !u || d !== r || No) return !isNaN(d * r) && r !== "" ? (m = new ct(this._pt, e, n, +d || 0, r - (d || 0), typeof f == "boolean" ? Bg : ed, 0, h), c && (m.fp = c), a && m.modifier(a, this, e), this._pt = m) : (!f && !(n in e) && xa(n, r), Dg.call(this, e, n, d, r, h, l || kt.stringFilter, c))
        },
        Mg = function(e, n, s, r, i) {
            if (Oe(e) && (e = sr(e, i, n, s, r)), !Qt(e) || e.style && e.nodeType || Ke(e) || yf(e)) return Ue(e) ? sr(e, i, n, s, r) : e;
            var o = {},
                a;
            for (a in e) o[a] = sr(e[a], i, n, s, r);
            return o
        },
        Xf = function(e, n, s, r, i, o) {
            var a, l, c, u;
            if (mt[e] && (a = new mt[e]).init(i, a.rawVars ? n[e] : Mg(n[e], r, i, o, s), s, r, o) !== !1 && (s._pt = l = new ct(s._pt, i, e, 0, 1, a.render, a, 0, a.priority), s !== vs))
                for (c = s._ptLookup[s._targets.indexOf(i)], u = a._props.length; u--;) c[a._props[u]] = l;
            return a
        },
        Tn, No, Na = function t(e, n, s) {
            var r = e.vars,
                i = r.ease,
                o = r.startAt,
                a = r.immediateRender,
                l = r.lazy,
                c = r.onUpdate,
                u = r.runBackwards,
                f = r.yoyoEase,
                d = r.keyframes,
                h = r.autoRevert,
                m = e._dur,
                _ = e._startAt,
                v = e._targets,
                w = e.parent,
                O = w && w.data === "nested" ? w.vars.targets : v,
                k = e._overwrite === "auto" && !wa,
                b = e.timeline,
                E, $, P, R, A, q, Z, W, Y, ae, fe, J, L;
            if (b && (!d || !i) && (i = "none"), e._ease = ts(i, Ps.ease), e._yEase = f ? Wf(ts(f === !0 ? i : f, Ps.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !b && !!r.runBackwards, !b || d && !r.stagger) {
                if (W = v[0] ? Zn(v[0]).harness : 0, J = W && r[W.prop], E = ti(r, Pa), _ && (_._zTime < 0 && _.progress(1), n < 0 && u && a && !h ? _.render(-1, !0) : _.revert(u && m ? Gr : fg), _._lazy = 0), o) {
                    if (Pn(e._startAt = Ie.set(v, xt({
                            data: "isStart",
                            overwrite: !1,
                            parent: w,
                            immediateRender: !0,
                            lazy: !_ && at(l),
                            startAt: null,
                            delay: 0,
                            onUpdate: c && function() {
                                return vt(e, "onUpdate")
                            },
                            stagger: 0
                        }, o))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (qe || !a && !h) && e._startAt.revert(Gr), a && m && n <= 0 && s <= 0) {
                        n && (e._zTime = n);
                        return
                    }
                } else if (u && m && !_) {
                    if (n && (a = !1), P = xt({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: a && !_ && at(l),
                            immediateRender: a,
                            stagger: 0,
                            parent: w
                        }, E), J && (P[W.prop] = J), Pn(e._startAt = Ie.set(v, P)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (qe ? e._startAt.revert(Gr) : e._startAt.render(-1, !0)), e._zTime = n, !a) t(e._startAt, ye, ye);
                    else if (!n) return
                }
                for (e._pt = e._ptCache = 0, l = m && at(l) || l && !m, $ = 0; $ < v.length; $++) {
                    if (A = v[$], Z = A._gsap || Ia(v)[$]._gsap, e._ptLookup[$] = ae = {}, Oo[Z.id] && Sn.length && ei(), fe = O === v ? $ : O.indexOf(A), W && (Y = new W).init(A, J || E, e, fe, O) !== !1 && (e._pt = R = new ct(e._pt, A, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(G) {
                            ae[G] = R
                        }), Y.priority && (q = 1)), !W || J)
                        for (P in E) mt[P] && (Y = Xf(P, E, e, fe, A, O)) ? Y.priority && (q = 1) : ae[P] = R = Ra.call(e, A, P, "get", E[P], fe, O, 0, r.stringFilter);
                    e._op && e._op[$] && e.kill(A, e._op[$]), k && e._pt && (Tn = e, Ee.killTweensOf(A, ae, e.globalTime(n)), L = !e.parent, Tn = 0), e._pt && l && (Oo[Z.id] = 1)
                }
                q && nd(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = c, e._initted = (!e._op || e._pt) && !L, d && n <= 0 && b.render(St, !0, !0)
        },
        Fg = function(e, n, s, r, i, o, a, l) {
            var c = (e._pt && e._ptCache || (e._ptCache = {}))[n],
                u, f, d, h;
            if (!c)
                for (c = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length; h--;) {
                    if (u = d[h][n], u && u.d && u.d._pt)
                        for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
                    if (!u) return No = 1, e.vars[n] = "+=0", Na(e, a), No = 0, l ? dr(n + " not eligible for reset") : 1;
                    c.push(u)
                }
            for (h = c.length; h--;) f = c[h], u = f._pt || f, u.s = (r || r === 0) && !i ? r : u.s + (r || 0) + o * u.c, u.c = s - u.s, f.e && (f.e = Ae(s) + We(f.e)), f.b && (f.b = u.s + We(f.b))
        },
        jg = function(e, n) {
            var s = e[0] ? Zn(e[0]).harness : 0,
                r = s && s.aliases,
                i, o, a, l;
            if (!r) return n;
            i = as({}, n);
            for (o in r)
                if (o in i)
                    for (l = r[o].split(","), a = l.length; a--;) i[l[a]] = i[o];
            return i
        },
        Ug = function(e, n, s, r) {
            var i = n.ease || r || "power1.inOut",
                o, a;
            if (Ke(n)) a = s[e] || (s[e] = []), n.forEach(function(l, c) {
                return a.push({
                    t: c / (n.length - 1) * 100,
                    v: l,
                    e: i
                })
            });
            else
                for (o in n) a = s[o] || (s[o] = []), o === "ease" || a.push({
                    t: parseFloat(e),
                    v: n[o],
                    e: i
                })
        },
        sr = function(e, n, s, r, i) {
            return Oe(e) ? e.call(n, s, r, i) : Ue(e) && ~e.indexOf("random(") ? hr(e) : e
        },
        Jf = Aa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Qf = {};
    lt(Jf + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Qf[t] = 1
    });
    var Ie = function(t) {
        mf(e, t);

        function e(s, r, i, o) {
            var a;
            typeof r == "number" && (i.duration = r, r = i, i = null), a = t.call(this, o ? r : tr(r)) || this;
            var l = a.vars,
                c = l.duration,
                u = l.delay,
                f = l.immediateRender,
                d = l.stagger,
                h = l.overwrite,
                m = l.keyframes,
                _ = l.defaults,
                v = l.scrollTrigger,
                w = l.yoyoEase,
                O = r.parent || Ee,
                k = (Ke(s) || yf(s) ? un(s[0]) : "length" in r) ? [s] : Ot(s),
                b, E, $, P, R, A, q, Z;
            if (a._targets = k.length ? Ia(k) : dr("GSAP target " + s + " not found. https://gsap.com", !kt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, m || d || Lr(c) || Lr(u)) {
                if (r = a.vars, b = a.timeline = new nt({
                        data: "nested",
                        defaults: _ || {},
                        targets: O && O.data === "nested" ? O.vars.targets : k
                    }), b.kill(), b.parent = b._dp = on(a), b._start = 0, d || Lr(c) || Lr(u)) {
                    if (P = k.length, q = d && Df(d), Qt(d))
                        for (R in d) ~Jf.indexOf(R) && (Z || (Z = {}), Z[R] = d[R]);
                    for (E = 0; E < P; E++) $ = ti(r, Qf), $.stagger = 0, w && ($.yoyoEase = w), Z && as($, Z), A = k[E], $.duration = +sr(c, on(a), E, A, k), $.delay = (+sr(u, on(a), E, A, k) || 0) - a._delay, !d && P === 1 && $.delay && (a._delay = u = $.delay, a._start += u, $.delay = 0), b.to(A, $, q ? q(E, A, k) : 0), b._ease = oe.none;
                    b.duration() ? c = u = 0 : a.timeline = 0
                } else if (m) {
                    tr(xt(b.vars.defaults, {
                        ease: "none"
                    })), b._ease = ts(m.ease || r.ease || "none");
                    var W = 0,
                        Y, ae, fe;
                    if (Ke(m)) m.forEach(function(J) {
                        return b.to(k, J, ">")
                    }), b.duration();
                    else {
                        $ = {};
                        for (R in m) R === "ease" || R === "easeEach" || Ug(R, m[R], $, m.easeEach);
                        for (R in $)
                            for (Y = $[R].sort(function(J, L) {
                                    return J.t - L.t
                                }), W = 0, E = 0; E < Y.length; E++) ae = Y[E], fe = {
                                ease: ae.e,
                                duration: (ae.t - (E ? Y[E - 1].t : 0)) / 100 * c
                            }, fe[R] = ae.v, b.to(k, fe, W), W += fe.duration;
                        b.duration() < c && b.to({}, {
                            duration: c - b.duration()
                        })
                    }
                }
                c || a.duration(c = b.duration())
            } else a.timeline = 0;
            return h === !0 && !wa && (Tn = on(a), Ee.killTweensOf(k), Tn = 0), Wt(O, on(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (f || !c && !m && a._start === Fe(O._time) && at(f) && gg(on(a)) && O.data !== "nested") && (a._tTime = -ye, a.render(Math.max(0, -u) || 0)), v && Rf(on(a), v), a
        }
        var n = e.prototype;
        return n.render = function(r, i, o) {
            var a = this._time,
                l = this._tDur,
                c = this._dur,
                u = r < 0,
                f = r > l - ye && !u ? l : r < ye ? 0 : r,
                d, h, m, _, v, w, O, k, b;
            if (!c) vg(this, r, i, o);
            else if (f !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
                if (d = f, k = this.timeline, this._repeat) {
                    if (_ = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(_ * 100 + r, i, o);
                    if (d = Fe(f % _), f === l ? (m = this._repeat, d = c) : (m = ~~(f / _), m && m === Fe(f / _) && (d = c, m--), d > c && (d = c)), w = this._yoyo && m & 1, w && (b = this._yEase, d = c - d), v = As(this._tTime, _), d === a && !o && this._initted && m === v) return this._tTime = f, this;
                    m !== v && (k && this._yEase && qf(k, w), this.vars.repeatRefresh && !w && !this._lock && this._time !== _ && this._initted && (this._lock = o = 1, this.render(Fe(_ * m), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Nf(this, u ? r : d, o, i, f)) return this._tTime = 0, this;
                    if (a !== this._time && !(o && this.vars.repeatRefresh && m !== v)) return this;
                    if (c !== this._dur) return this.render(r, i, o)
                }
                if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = O = (b || this._ease)(d / c), this._from && (this.ratio = O = 1 - O), d && !a && !i && !m && (vt(this, "onStart"), this._tTime !== f)) return this;
                for (h = this._pt; h;) h.r(O, h.d), h = h._next;
                k && k.render(r < 0 ? r : k._dur * k._ease(d / this._dur), i, o) || this._startAt && (this._zTime = r), this._onUpdate && !i && (u && xo(this, r, i, o), vt(this, "onUpdate")), this._repeat && m !== v && this.vars.onRepeat && !i && this.parent && vt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && xo(this, r, !0, !0), (r || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Pn(this, 1), !i && !(u && !a) && (f || a || w) && (vt(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }, n.targets = function() {
            return this._targets
        }, n.invalidate = function(r) {
            return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), t.prototype.invalidate.call(this, r)
        }, n.resetTo = function(r, i, o, a, l) {
            pr || gt.wake(), this._ts || this.play();
            var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                u;
            return this._initted || Na(this, c), u = this._ease(c / this._dur), Fg(this, r, i, o, a, u, c, l) ? this.resetTo(r, i, o, a, 1) : (wi(this, 0), this.parent || Af(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(r, i) {
            if (i === void 0 && (i = "all"), !r && (!i || i === "all")) return this._lazy = this._pt = 0, this.parent ? Ws(this) : this;
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return this.timeline.killTweensOf(r, i, Tn && Tn.vars.overwrite !== !0)._first || Ws(this), this.parent && o !== this.timeline.totalDuration() && Is(this, this._dur * this.timeline._tDur / o, 0, 1), this
            }
            var a = this._targets,
                l = r ? Ot(r) : a,
                c = this._ptLookup,
                u = this._pt,
                f, d, h, m, _, v, w;
            if ((!i || i === "all") && pg(a, l)) return i === "all" && (this._pt = 0), Ws(this);
            for (f = this._op = this._op || [], i !== "all" && (Ue(i) && (_ = {}, lt(i, function(O) {
                    return _[O] = 1
                }), i = _), i = jg(a, i)), w = a.length; w--;)
                if (~l.indexOf(a[w])) {
                    d = c[w], i === "all" ? (f[w] = i, m = d, h = {}) : (h = f[w] = f[w] || {}, m = i);
                    for (_ in m) v = d && d[_], v && ((!("kill" in v.d) || v.d.kill(_) === !0) && Ti(this, v, "_pt"), delete d[_]), h !== "all" && (h[_] = 1)
                }
            return this._initted && !this._pt && u && Ws(this), this
        }, e.to = function(r, i) {
            return new e(r, i, arguments[2])
        }, e.from = function(r, i) {
            return nr(1, arguments)
        }, e.delayedCall = function(r, i, o, a) {
            return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: r,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a
            })
        }, e.fromTo = function(r, i, o) {
            return nr(2, arguments)
        }, e.set = function(r, i) {
            return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(r, i)
        }, e.killTweensOf = function(r, i, o) {
            return Ee.killTweensOf(r, i, o)
        }, e
    }(mr);
    xt(Ie.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    lt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Ie[t] = function() {
            var e = new nt,
                n = Ao.call(arguments, 0);
            return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    });
    var Ca = function(e, n, s) {
            return e[n] = s
        },
        Zf = function(e, n, s) {
            return e[n](s)
        },
        zg = function(e, n, s, r) {
            return e[n](r.fp, s)
        },
        Gg = function(e, n, s) {
            return e.setAttribute(n, s)
        },
        La = function(e, n) {
            return Oe(e[n]) ? Zf : $a(e[n]) && e.setAttribute ? Gg : Ca
        },
        ed = function(e, n) {
            return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
        },
        Bg = function(e, n) {
            return n.set(n.t, n.p, !!(n.s + n.c * e), n)
        },
        td = function(e, n) {
            var s = n._pt,
                r = "";
            if (!e && n.b) r = n.b;
            else if (e === 1 && n.e) r = n.e;
            else {
                for (; s;) r = s.p + (s.m ? s.m(s.s + s.c * e) : Math.round((s.s + s.c * e) * 1e4) / 1e4) + r, s = s._next;
                r += n.c
            }
            n.set(n.t, n.p, r, n)
        },
        Da = function(e, n) {
            for (var s = n._pt; s;) s.r(e, s.d), s = s._next
        },
        Vg = function(e, n, s, r) {
            for (var i = this._pt, o; i;) o = i._next, i.p === r && i.modifier(e, n, s), i = o
        },
        Hg = function(e) {
            for (var n = this._pt, s, r; n;) r = n._next, n.p === e && !n.op || n.op === e ? Ti(this, n, "_pt") : n.dep || (s = 1), n = r;
            return !s
        },
        Wg = function(e, n, s, r) {
            r.mSet(e, n, r.m.call(r.tween, s, r.mt), r)
        },
        nd = function(e) {
            for (var n = e._pt, s, r, i, o; n;) {
                for (s = n._next, r = i; r && r.pr > n.pr;) r = r._next;
                (n._prev = r ? r._prev : o) ? n._prev._next = n: i = n, (n._next = r) ? r._prev = n : o = n, n = s
            }
            e._pt = i
        },
        ct = function() {
            function t(n, s, r, i, o, a, l, c, u) {
                this.t = s, this.s = i, this.c = o, this.p = r, this.r = a || ed, this.d = l || this, this.set = c || Ca, this.pr = u || 0, this._next = n, n && (n._prev = this)
            }
            var e = t.prototype;
            return e.modifier = function(s, r, i) {
                this.mSet = this.mSet || this.set, this.set = Wg, this.m = s, this.mt = i, this.tween = r
            }, t
        }();
    lt(Aa + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return Pa[t] = 1
    });
    Tt.TweenMax = Tt.TweenLite = Ie;
    Tt.TimelineLite = Tt.TimelineMax = nt;
    Ee = new nt({
        sortChildren: !1,
        defaults: Ps,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    kt.stringFilter = Hf;
    var ns = [],
        Vr = {},
        qg = [],
        Kl = 0,
        Kg = 0,
        Qi = function(e) {
            return (Vr[e] || qg).map(function(n) {
                return n()
            })
        },
        Co = function() {
            var e = Date.now(),
                n = [];
            e - Kl > 2 && (Qi("matchMediaInit"), ns.forEach(function(s) {
                var r = s.queries,
                    i = s.conditions,
                    o, a, l, c;
                for (a in r) o = Vt.matchMedia(r[a]).matches, o && (l = 1), o !== i[a] && (i[a] = o, c = 1);
                c && (s.revert(), l && n.push(s))
            }), Qi("matchMediaRevert"), n.forEach(function(s) {
                return s.onMatch(s, function(r) {
                    return s.add(null, r)
                })
            }), Kl = e, Qi("matchMedia"))
        },
        sd = function() {
            function t(n, s) {
                this.selector = s && Io(s), this.data = [], this._r = [], this.isReverted = !1, this.id = Kg++, n && this.add(n)
            }
            var e = t.prototype;
            return e.add = function(s, r, i) {
                Oe(s) && (i = r, r = s, s = Oe);
                var o = this,
                    a = function() {
                        var c = ke,
                            u = o.selector,
                            f;
                        return c && c !== o && c.data.push(o), i && (o.selector = Io(i)), ke = o, f = r.apply(o, arguments), Oe(f) && o._r.push(f), ke = c, o.selector = u, o.isReverted = !1, f
                    };
                return o.last = a, s === Oe ? a(o, function(l) {
                    return o.add(null, l)
                }) : s ? o[s] = a : a
            }, e.ignore = function(s) {
                var r = ke;
                ke = null, s(this), ke = r
            }, e.getTweens = function() {
                var s = [];
                return this.data.forEach(function(r) {
                    return r instanceof t ? s.push.apply(s, r.getTweens()) : r instanceof Ie && !(r.parent && r.parent.data === "nested") && s.push(r)
                }), s
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(s, r) {
                var i = this;
                if (s ? function() {
                        for (var a = i.getTweens(), l = i.data.length, c; l--;) c = i.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
                            return a.splice(a.indexOf(u), 1)
                        }));
                        for (a.map(function(u) {
                                return {
                                    g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                                    t: u
                                }
                            }).sort(function(u, f) {
                                return f.g - u.g || -1 / 0
                            }).forEach(function(u) {
                                return u.t.revert(s)
                            }), l = i.data.length; l--;) c = i.data[l], c instanceof nt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Ie) && c.revert && c.revert(s);
                        i._r.forEach(function(u) {
                            return u(s, i)
                        }), i.isReverted = !0
                    }() : this.data.forEach(function(a) {
                        return a.kill && a.kill()
                    }), this.clear(), r)
                    for (var o = ns.length; o--;) ns[o].id === this.id && ns.splice(o, 1)
            }, e.revert = function(s) {
                this.kill(s || {})
            }, t
        }(),
        Yg = function() {
            function t(n) {
                this.contexts = [], this.scope = n, ke && ke.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(s, r, i) {
                Qt(s) || (s = {
                    matches: s
                });
                var o = new sd(0, i || this.scope),
                    a = o.conditions = {},
                    l, c, u;
                ke && !o.selector && (o.selector = ke.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = s;
                for (c in s) c === "all" ? u = 1 : (l = Vt.matchMedia(s[c]), l && (ns.indexOf(o) < 0 && ns.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Co) : l.addEventListener("change", Co)));
                return u && r(o, function(f) {
                    return o.add(null, f)
                }), this
            }, e.revert = function(s) {
                this.kill(s || {})
            }, e.kill = function(s) {
                this.contexts.forEach(function(r) {
                    return r.kill(s, !0)
                })
            }, t
        }(),
        si = {
            registerPlugin: function() {
                for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                n.forEach(function(r) {
                    return Gf(r)
                })
            },
            timeline: function(e) {
                return new nt(e)
            },
            getTweensOf: function(e, n) {
                return Ee.getTweensOf(e, n)
            },
            getProperty: function(e, n, s, r) {
                Ue(e) && (e = Ot(e)[0]);
                var i = Zn(e || {}).get,
                    o = s ? Pf : xf;
                return s === "native" && (s = ""), e && (n ? o((mt[n] && mt[n].get || i)(e, n, s, r)) : function(a, l, c) {
                    return o((mt[a] && mt[a].get || i)(e, a, l, c))
                })
            },
            quickSetter: function(e, n, s) {
                if (e = Ot(e), e.length > 1) {
                    var r = e.map(function(u) {
                            return ft.quickSetter(u, n, s)
                        }),
                        i = r.length;
                    return function(u) {
                        for (var f = i; f--;) r[f](u)
                    }
                }
                e = e[0] || {};
                var o = mt[n],
                    a = Zn(e),
                    l = a.harness && (a.harness.aliases || {})[n] || n,
                    c = o ? function(u) {
                        var f = new o;
                        vs._pt = 0, f.init(e, s ? u + s : u, vs, 0, [e]), f.render(1, f), vs._pt && Da(1, vs)
                    } : a.set(e, l);
                return o ? c : function(u) {
                    return c(e, l, s ? u + s : u, a, 1)
                }
            },
            quickTo: function(e, n, s) {
                var r, i = ft.to(e, as((r = {}, r[n] = "+=0.1", r.paused = !0, r), s || {})),
                    o = function(l, c, u) {
                        return i.resetTo(n, l, c, u)
                    };
                return o.tween = i, o
            },
            isTweening: function(e) {
                return Ee.getTweensOf(e, !0).length > 0
            },
            defaults: function(e) {
                return e && e.ease && (e.ease = ts(e.ease, Ps.ease)), Bl(Ps, e || {})
            },
            config: function(e) {
                return Bl(kt, e || {})
            },
            registerEffect: function(e) {
                var n = e.name,
                    s = e.effect,
                    r = e.plugins,
                    i = e.defaults,
                    o = e.extendTimeline;
                (r || "").split(",").forEach(function(a) {
                    return a && !mt[a] && !Tt[a] && dr(n + " effect requires " + a + " plugin.")
                }), Ki[n] = function(a, l, c) {
                    return s(Ot(a), xt(l || {}, i), c)
                }, o && (nt.prototype[n] = function(a, l, c) {
                    return this.add(Ki[n](a, Qt(l) ? l : (c = l) && {}, this), c)
                })
            },
            registerEase: function(e, n) {
                oe[e] = ts(n)
            },
            parseEase: function(e, n) {
                return arguments.length ? ts(e, n) : oe
            },
            getById: function(e) {
                return Ee.getById(e)
            },
            exportRoot: function(e, n) {
                e === void 0 && (e = {});
                var s = new nt(e),
                    r, i;
                for (s.smoothChildTiming = at(e.smoothChildTiming), Ee.remove(s), s._dp = 0, s._time = s._tTime = Ee._time, r = Ee._first; r;) i = r._next, (n || !(!r._dur && r instanceof Ie && r.vars.onComplete === r._targets[0])) && Wt(s, r, r._start - r._delay), r = i;
                return Wt(Ee, s, 0), s
            },
            context: function(e, n) {
                return e ? new sd(e, n) : ke
            },
            matchMedia: function(e) {
                return new Yg(e)
            },
            matchMediaRefresh: function() {
                return ns.forEach(function(e) {
                    var n = e.conditions,
                        s, r;
                    for (r in n) n[r] && (n[r] = !1, s = 1);
                    s && e.revert()
                }) || Co()
            },
            addEventListener: function(e, n) {
                var s = Vr[e] || (Vr[e] = []);
                ~s.indexOf(n) || s.push(n)
            },
            removeEventListener: function(e, n) {
                var s = Vr[e],
                    r = s && s.indexOf(n);
                r >= 0 && s.splice(r, 1)
            },
            utils: {
                wrap: Og,
                wrapYoyo: xg,
                distribute: Df,
                random: Ff,
                snap: Mf,
                normalize: Sg,
                getUnit: We,
                clamp: Tg,
                splitColor: Bf,
                toArray: Ot,
                selector: Io,
                mapRange: Uf,
                pipe: wg,
                unitize: $g,
                interpolate: Pg,
                shuffle: Lf
            },
            install: Ef,
            effects: Ki,
            ticker: gt,
            updateRoot: nt.updateRoot,
            plugins: mt,
            globalTimeline: Ee,
            core: {
                PropTween: ct,
                globals: wf,
                Tween: Ie,
                Timeline: nt,
                Animation: mr,
                getCache: Zn,
                _removeLinkedListItem: Ti,
                reverting: function() {
                    return qe
                },
                context: function(e) {
                    return e && ke && (ke.data.push(e), e._ctx = ke), ke
                },
                suppressOverwrites: function(e) {
                    return wa = e
                }
            }
        };
    lt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return si[t] = Ie[t]
    });
    gt.add(nt.updateRoot);
    vs = si.to({}, {
        duration: 0
    });
    var Xg = function(e, n) {
            for (var s = e._pt; s && s.p !== n && s.op !== n && s.fp !== n;) s = s._next;
            return s
        },
        Jg = function(e, n) {
            var s = e._targets,
                r, i, o;
            for (r in n)
                for (i = s.length; i--;) o = e._ptLookup[i][r], o && (o = o.d) && (o._pt && (o = Xg(o, r)), o && o.modifier && o.modifier(n[r], e, s[i], r))
        },
        Zi = function(e, n) {
            return {
                name: e,
                rawVars: 1,
                init: function(r, i, o) {
                    o._onInit = function(a) {
                        var l, c;
                        if (Ue(i) && (l = {}, lt(i, function(u) {
                                return l[u] = 1
                            }), i = l), n) {
                            l = {};
                            for (c in i) l[c] = n(i[c]);
                            i = l
                        }
                        Jg(a, i)
                    }
                }
            }
        },
        ft = si.registerPlugin({
            name: "attr",
            init: function(e, n, s, r, i) {
                var o, a, l;
                this.tween = s;
                for (o in n) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", n[o], r, i, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
            },
            render: function(e, n) {
                for (var s = n._pt; s;) qe ? s.set(s.t, s.p, s.b, s) : s.r(e, s.d), s = s._next
            }
        }, {
            name: "endArray",
            init: function(e, n) {
                for (var s = n.length; s--;) this.add(e, s, e[s] || 0, n[s], 0, 0, 0, 0, 0, 1)
            }
        }, Zi("roundProps", Ro), Zi("modifiers"), Zi("snap", Mf)) || si;
    Ie.version = nt.version = ft.version = "3.12.5";
    Tf = 1;
    Sa() && Rs();
    oe.Power0;
    oe.Power1;
    oe.Power2;
    oe.Power3;
    oe.Power4;
    oe.Linear;
    oe.Quad;
    oe.Cubic;
    oe.Quart;
    oe.Quint;
    oe.Strong;
    oe.Elastic;
    oe.Back;
    oe.SteppedEase;
    oe.Bounce;
    oe.Sine;
    oe.Expo;
    oe.Circ;
    /*!
     * CSSPlugin 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Yl, En, Ss, Ma, Xn, Xl, Fa, Qg = function() {
            return typeof window != "undefined"
        },
        fn = {},
        Kn = 180 / Math.PI,
        Os = Math.PI / 180,
        ps = Math.atan2,
        Jl = 1e8,
        ja = /([A-Z])/g,
        Zg = /(left|right|width|margin|padding|x)/i,
        ey = /[\s,\(]\S/,
        qt = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Lo = function(e, n) {
            return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
        },
        ty = function(e, n) {
            return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
        },
        ny = function(e, n) {
            return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
        },
        sy = function(e, n) {
            var s = n.s + n.c * e;
            n.set(n.t, n.p, ~~(s + (s < 0 ? -.5 : .5)) + n.u, n)
        },
        rd = function(e, n) {
            return n.set(n.t, n.p, e ? n.e : n.b, n)
        },
        id = function(e, n) {
            return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
        },
        ry = function(e, n, s) {
            return e.style[n] = s
        },
        iy = function(e, n, s) {
            return e.style.setProperty(n, s)
        },
        oy = function(e, n, s) {
            return e._gsap[n] = s
        },
        ay = function(e, n, s) {
            return e._gsap.scaleX = e._gsap.scaleY = s
        },
        ly = function(e, n, s, r, i) {
            var o = e._gsap;
            o.scaleX = o.scaleY = s, o.renderTransform(i, o)
        },
        cy = function(e, n, s, r, i) {
            var o = e._gsap;
            o[n] = s, o.renderTransform(i, o)
        },
        we = "transform",
        ut = we + "Origin",
        uy = function t(e, n) {
            var s = this,
                r = this.target,
                i = r.style,
                o = r._gsap;
            if (e in fn && i) {
                if (this.tfm = this.tfm || {}, e !== "transform") e = qt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                    return s.tfm[a] = an(r, a)
                }) : this.tfm[e] = o.x ? o[e] : an(r, e), e === ut && (this.tfm.zOrigin = o.zOrigin);
                else return qt.transform.split(",").forEach(function(a) {
                    return t.call(s, a, n)
                });
                if (this.props.indexOf(we) >= 0) return;
                o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ut, n, "")), e = we
            }(i || n) && this.props.push(e, n, i[e])
        },
        od = function(e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        fy = function() {
            var e = this.props,
                n = this.target,
                s = n.style,
                r = n._gsap,
                i, o;
            for (i = 0; i < e.length; i += 3) e[i + 1] ? n[e[i]] = e[i + 2] : e[i + 2] ? s[e[i]] = e[i + 2] : s.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(ja, "-$1").toLowerCase());
            if (this.tfm) {
                for (o in this.tfm) r[o] = this.tfm[o];
                r.svg && (r.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), i = Fa(), (!i || !i.isStart) && !s[we] && (od(s), r.zOrigin && s[ut] && (s[ut] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1)
            }
        },
        ad = function(e, n) {
            var s = {
                target: e,
                props: [],
                revert: fy,
                save: uy
            };
            return e._gsap || ft.core.getCache(e), n && n.split(",").forEach(function(r) {
                return s.save(r)
            }), s
        },
        ld, Do = function(e, n) {
            var s = En.createElementNS ? En.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : En.createElement(e);
            return s && s.style ? s : En.createElement(e)
        },
        Xt = function t(e, n, s) {
            var r = getComputedStyle(e);
            return r[n] || r.getPropertyValue(n.replace(ja, "-$1").toLowerCase()) || r.getPropertyValue(n) || !s && t(e, Ns(n) || n, 1) || ""
        },
        Ql = "O,Moz,ms,Ms,Webkit".split(","),
        Ns = function(e, n, s) {
            var r = n || Xn,
                i = r.style,
                o = 5;
            if (e in i && !s) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Ql[o] + e in i););
            return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ql[o] : "") + e
        },
        Mo = function() {
            Qg() && window.document && (Yl = window, En = Yl.document, Ss = En.documentElement, Xn = Do("div") || {
                style: {}
            }, Do("div"), we = Ns(we), ut = we + "Origin", Xn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ld = !!Ns("perspective"), Fa = ft.core.reverting, Ma = 1)
        },
        eo = function t(e) {
            var n = Do("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                s = this.parentNode,
                r = this.nextSibling,
                i = this.style.cssText,
                o;
            if (Ss.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (a) {} else this._gsapBBox && (o = this._gsapBBox());
            return s && (r ? s.insertBefore(this, r) : s.appendChild(this)), Ss.removeChild(n), this.style.cssText = i, o
        },
        Zl = function(e, n) {
            for (var s = n.length; s--;)
                if (e.hasAttribute(n[s])) return e.getAttribute(n[s])
        },
        cd = function(e) {
            var n;
            try {
                n = e.getBBox()
            } catch (s) {
                n = eo.call(e, !0)
            }
            return n && (n.width || n.height) || e.getBBox === eo || (n = eo.call(e, !0)), n && !n.width && !n.x && !n.y ? {
                x: +Zl(e, ["x", "cx", "x1"]) || 0,
                y: +Zl(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : n
        },
        ud = function(e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && cd(e))
        },
        ls = function(e, n) {
            if (n) {
                var s = e.style,
                    r;
                n in fn && n !== ut && (n = we), s.removeProperty ? (r = n.substr(0, 2), (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), s.removeProperty(r === "--" ? n : n.replace(ja, "-$1").toLowerCase())) : s.removeAttribute(n)
            }
        },
        wn = function(e, n, s, r, i, o) {
            var a = new ct(e._pt, n, s, 0, 1, o ? id : rd);
            return e._pt = a, a.b = r, a.e = i, e._props.push(s), a
        },
        ec = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        dy = {
            grid: 1,
            flex: 1
        },
        An = function t(e, n, s, r) {
            var i = parseFloat(s) || 0,
                o = (s + "").trim().substr((i + "").length) || "px",
                a = Xn.style,
                l = Zg.test(n),
                c = e.tagName.toLowerCase() === "svg",
                u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
                f = 100,
                d = r === "px",
                h = r === "%",
                m, _, v, w;
            if (r === o || !i || ec[r] || ec[o]) return i;
            if (o !== "px" && !d && (i = t(e, n, s, "px")), w = e.getCTM && ud(e), (h || o === "%") && (fn[n] || ~n.indexOf("adius"))) return m = w ? e.getBBox()[l ? "width" : "height"] : e[u], Ae(h ? i / m * f : i / 100 * m);
            if (a[l ? "width" : "height"] = f + (d ? o : r), _ = ~n.indexOf("adius") || r === "em" && e.appendChild && !c ? e : e.parentNode, w && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === En || !_.appendChild) && (_ = En.body), v = _._gsap, v && h && v.width && l && v.time === gt.time && !v.uncache) return Ae(i / v.width * f);
            if (h && (n === "height" || n === "width")) {
                var O = e.style[n];
                e.style[n] = f + r, m = e[u], O ? e.style[n] = O : ls(e, n)
            } else(h || o === "%") && !dy[Xt(_, "display")] && (a.position = Xt(e, "position")), _ === e && (a.position = "static"), _.appendChild(Xn), m = Xn[u], _.removeChild(Xn), a.position = "absolute";
            return l && h && (v = Zn(_), v.time = gt.time, v.width = _[u]), Ae(d ? m * i / f : m && i ? f / m * i : 0)
        },
        an = function(e, n, s, r) {
            var i;
            return Ma || Mo(), n in qt && n !== "transform" && (n = qt[n], ~n.indexOf(",") && (n = n.split(",")[0])), fn[n] && n !== "transform" ? (i = yr(e, r), i = n !== "transformOrigin" ? i[n] : i.svg ? i.origin : ii(Xt(e, ut)) + " " + i.zOrigin + "px") : (i = e.style[n], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = ri[n] && ri[n](e, n, s) || Xt(e, n) || Sf(e, n) || (n === "opacity" ? 1 : 0))), s && !~(i + "").trim().indexOf(" ") ? An(e, n, i, s) + s : i
        },
        _y = function(e, n, s, r) {
            if (!s || s === "none") {
                var i = Ns(n, e, 1),
                    o = i && Xt(e, i, 1);
                o && o !== s ? (n = i, s = o) : n === "borderColor" && (s = Xt(e, "borderTopColor"))
            }
            var a = new ct(this._pt, e.style, n, 0, 1, td),
                l = 0,
                c = 0,
                u, f, d, h, m, _, v, w, O, k, b, E;
            if (a.b = s, a.e = r, s += "", r += "", r === "auto" && (_ = e.style[n], e.style[n] = r, r = Xt(e, n) || r, _ ? e.style[n] = _ : ls(e, n)), u = [s, r], Hf(u), s = u[0], r = u[1], d = s.match(ys) || [], E = r.match(ys) || [], E.length) {
                for (; f = ys.exec(r);) v = f[0], O = r.substring(l, f.index), m ? m = (m + 1) % 5 : (O.substr(-5) === "rgba(" || O.substr(-5) === "hsla(") && (m = 1), v !== (_ = d[c++] || "") && (h = parseFloat(_) || 0, b = _.substr((h + "").length), v.charAt(1) === "=" && (v = $s(h, v) + b), w = parseFloat(v), k = v.substr((w + "").length), l = ys.lastIndex - k.length, k || (k = k || kt.units[n] || b, l === r.length && (r += k, a.e += k)), b !== k && (h = An(e, n, _, k) || 0), a._pt = {
                    _next: a._pt,
                    p: O || c === 1 ? O : ",",
                    s: h,
                    c: w - h,
                    m: m && m < 4 || n === "zIndex" ? Math.round : 0
                });
                a.c = l < r.length ? r.substring(l, r.length) : ""
            } else a.r = n === "display" && r === "none" ? id : rd;
            return bf.test(r) && (a.e = 0), this._pt = a, a
        },
        tc = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        hy = function(e) {
            var n = e.split(" "),
                s = n[0],
                r = n[1] || "50%";
            return (s === "top" || s === "bottom" || r === "left" || r === "right") && (e = s, s = r, r = e), n[0] = tc[s] || s, n[1] = tc[r] || r, n.join(" ")
        },
        py = function(e, n) {
            if (n.tween && n.tween._time === n.tween._dur) {
                var s = n.t,
                    r = s.style,
                    i = n.u,
                    o = s._gsap,
                    a, l, c;
                if (i === "all" || i === !0) r.cssText = "", l = 1;
                else
                    for (i = i.split(","), c = i.length; --c > -1;) a = i[c], fn[a] && (l = 1, a = a === "transformOrigin" ? ut : we), ls(s, a);
                l && (ls(s, we), o && (o.svg && s.removeAttribute("transform"), yr(s, 1), o.uncache = 1, od(r)))
            }
        },
        ri = {
            clearProps: function(e, n, s, r, i) {
                if (i.data !== "isFromStart") {
                    var o = e._pt = new ct(e._pt, n, s, 0, 0, py);
                    return o.u = r, o.pr = -10, o.tween = i, e._props.push(s), 1
                }
            }
        },
        gr = [1, 0, 0, 1, 0, 0],
        fd = {},
        dd = function(e) {
            return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
        },
        nc = function(e) {
            var n = Xt(e, we);
            return dd(n) ? gr : n.substr(7).match(vf).map(Ae)
        },
        Ua = function(e, n) {
            var s = e._gsap || Zn(e),
                r = e.style,
                i = nc(e),
                o, a, l, c;
            return s.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, i = [l.a, l.b, l.c, l.d, l.e, l.f], i.join(",") === "1,0,0,1,0,0" ? gr : i) : (i === gr && !e.offsetParent && e !== Ss && !s.svg && (l = r.display, r.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (c = 1, a = e.nextElementSibling, Ss.appendChild(e)), i = nc(e), l ? r.display = l : ls(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Ss.removeChild(e))), n && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
        },
        Fo = function(e, n, s, r, i, o) {
            var a = e._gsap,
                l = i || Ua(e, !0),
                c = a.xOrigin || 0,
                u = a.yOrigin || 0,
                f = a.xOffset || 0,
                d = a.yOffset || 0,
                h = l[0],
                m = l[1],
                _ = l[2],
                v = l[3],
                w = l[4],
                O = l[5],
                k = n.split(" "),
                b = parseFloat(k[0]) || 0,
                E = parseFloat(k[1]) || 0,
                $, P, R, A;
            s ? l !== gr && (P = h * v - m * _) && (R = b * (v / P) + E * (-_ / P) + (_ * O - v * w) / P, A = b * (-m / P) + E * (h / P) - (h * O - m * w) / P, b = R, E = A) : ($ = cd(e), b = $.x + (~k[0].indexOf("%") ? b / 100 * $.width : b), E = $.y + (~(k[1] || k[0]).indexOf("%") ? E / 100 * $.height : E)), r || r !== !1 && a.smooth ? (w = b - c, O = E - u, a.xOffset = f + (w * h + O * _) - w, a.yOffset = d + (w * m + O * v) - O) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = E, a.smooth = !!r, a.origin = n, a.originIsAbsolute = !!s, e.style[ut] = "0px 0px", o && (wn(o, a, "xOrigin", c, b), wn(o, a, "yOrigin", u, E), wn(o, a, "xOffset", f, a.xOffset), wn(o, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", b + " " + E)
        },
        yr = function(e, n) {
            var s = e._gsap || new Yf(e);
            if ("x" in s && !n && !s.uncache) return s;
            var r = e.style,
                i = s.scaleX < 0,
                o = "px",
                a = "deg",
                l = getComputedStyle(e),
                c = Xt(e, ut) || "0",
                u, f, d, h, m, _, v, w, O, k, b, E, $, P, R, A, q, Z, W, Y, ae, fe, J, L, G, Te, _e, de, ie, Pt, De, Xe;
            return u = f = d = _ = v = w = O = k = b = 0, h = m = 1, s.svg = !!(e.getCTM && ud(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[we] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[we] !== "none" ? l[we] : "")), r.scale = r.rotate = r.translate = "none"), P = Ua(e, s.svg), s.svg && (s.uncache ? (G = e.getBBox(), c = s.xOrigin - G.x + "px " + (s.yOrigin - G.y) + "px", L = "") : L = !n && e.getAttribute("data-svg-origin"), Fo(e, L || c, !!L || s.originIsAbsolute, s.smooth !== !1, P)), E = s.xOrigin || 0, $ = s.yOrigin || 0, P !== gr && (Z = P[0], W = P[1], Y = P[2], ae = P[3], u = fe = P[4], f = J = P[5], P.length === 6 ? (h = Math.sqrt(Z * Z + W * W), m = Math.sqrt(ae * ae + Y * Y), _ = Z || W ? ps(W, Z) * Kn : 0, O = Y || ae ? ps(Y, ae) * Kn + _ : 0, O && (m *= Math.abs(Math.cos(O * Os))), s.svg && (u -= E - (E * Z + $ * Y), f -= $ - (E * W + $ * ae))) : (Xe = P[6], Pt = P[7], _e = P[8], de = P[9], ie = P[10], De = P[11], u = P[12], f = P[13], d = P[14], R = ps(Xe, ie), v = R * Kn, R && (A = Math.cos(-R), q = Math.sin(-R), L = fe * A + _e * q, G = J * A + de * q, Te = Xe * A + ie * q, _e = fe * -q + _e * A, de = J * -q + de * A, ie = Xe * -q + ie * A, De = Pt * -q + De * A, fe = L, J = G, Xe = Te), R = ps(-Y, ie), w = R * Kn, R && (A = Math.cos(-R), q = Math.sin(-R), L = Z * A - _e * q, G = W * A - de * q, Te = Y * A - ie * q, De = ae * q + De * A, Z = L, W = G, Y = Te), R = ps(W, Z), _ = R * Kn, R && (A = Math.cos(R), q = Math.sin(R), L = Z * A + W * q, G = fe * A + J * q, W = W * A - Z * q, J = J * A - fe * q, Z = L, fe = G), v && Math.abs(v) + Math.abs(_) > 359.9 && (v = _ = 0, w = 180 - w), h = Ae(Math.sqrt(Z * Z + W * W + Y * Y)), m = Ae(Math.sqrt(J * J + Xe * Xe)), R = ps(fe, J), O = Math.abs(R) > 2e-4 ? R * Kn : 0, b = De ? 1 / (De < 0 ? -De : De) : 0), s.svg && (L = e.getAttribute("transform"), s.forceCSS = e.setAttribute("transform", "") || !dd(Xt(e, we)), L && e.setAttribute("transform", L))), Math.abs(O) > 90 && Math.abs(O) < 270 && (i ? (h *= -1, O += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (m *= -1, O += O <= 0 ? 180 : -180)), n = n || s.uncache, s.x = u - ((s.xPercent = u && (!n && s.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * s.xPercent / 100 : 0) + o, s.y = f - ((s.yPercent = f && (!n && s.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * s.yPercent / 100 : 0) + o, s.z = d + o, s.scaleX = Ae(h), s.scaleY = Ae(m), s.rotation = Ae(_) + a, s.rotationX = Ae(v) + a, s.rotationY = Ae(w) + a, s.skewX = O + a, s.skewY = k + a, s.transformPerspective = b + o, (s.zOrigin = parseFloat(c.split(" ")[2]) || !n && s.zOrigin || 0) && (r[ut] = ii(c)), s.xOffset = s.yOffset = 0, s.force3D = kt.force3D, s.renderTransform = s.svg ? gy : ld ? _d : my, s.uncache = 0, s
        },
        ii = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        to = function(e, n, s) {
            var r = We(n);
            return Ae(parseFloat(n) + parseFloat(An(e, "x", s + "px", r))) + r
        },
        my = function(e, n) {
            n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, _d(e, n)
        },
        Gn = "0deg",
        Bs = "0px",
        Bn = ") ",
        _d = function(e, n) {
            var s = n || this,
                r = s.xPercent,
                i = s.yPercent,
                o = s.x,
                a = s.y,
                l = s.z,
                c = s.rotation,
                u = s.rotationY,
                f = s.rotationX,
                d = s.skewX,
                h = s.skewY,
                m = s.scaleX,
                _ = s.scaleY,
                v = s.transformPerspective,
                w = s.force3D,
                O = s.target,
                k = s.zOrigin,
                b = "",
                E = w === "auto" && e && e !== 1 || w === !0;
            if (k && (f !== Gn || u !== Gn)) {
                var $ = parseFloat(u) * Os,
                    P = Math.sin($),
                    R = Math.cos($),
                    A;
                $ = parseFloat(f) * Os, A = Math.cos($), o = to(O, o, P * A * -k), a = to(O, a, -Math.sin($) * -k), l = to(O, l, R * A * -k + k)
            }
            v !== Bs && (b += "perspective(" + v + Bn), (r || i) && (b += "translate(" + r + "%, " + i + "%) "), (E || o !== Bs || a !== Bs || l !== Bs) && (b += l !== Bs || E ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Bn), c !== Gn && (b += "rotate(" + c + Bn), u !== Gn && (b += "rotateY(" + u + Bn), f !== Gn && (b += "rotateX(" + f + Bn), (d !== Gn || h !== Gn) && (b += "skew(" + d + ", " + h + Bn), (m !== 1 || _ !== 1) && (b += "scale(" + m + ", " + _ + Bn), O.style[we] = b || "translate(0, 0)"
        },
        gy = function(e, n) {
            var s = n || this,
                r = s.xPercent,
                i = s.yPercent,
                o = s.x,
                a = s.y,
                l = s.rotation,
                c = s.skewX,
                u = s.skewY,
                f = s.scaleX,
                d = s.scaleY,
                h = s.target,
                m = s.xOrigin,
                _ = s.yOrigin,
                v = s.xOffset,
                w = s.yOffset,
                O = s.forceCSS,
                k = parseFloat(o),
                b = parseFloat(a),
                E, $, P, R, A;
            l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= Os, c *= Os, E = Math.cos(l) * f, $ = Math.sin(l) * f, P = Math.sin(l - c) * -d, R = Math.cos(l - c) * d, c && (u *= Os, A = Math.tan(c - u), A = Math.sqrt(1 + A * A), P *= A, R *= A, u && (A = Math.tan(u), A = Math.sqrt(1 + A * A), E *= A, $ *= A)), E = Ae(E), $ = Ae($), P = Ae(P), R = Ae(R)) : (E = f, R = d, $ = P = 0), (k && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (k = An(h, "x", o, "px"), b = An(h, "y", a, "px")), (m || _ || v || w) && (k = Ae(k + m - (m * E + _ * P) + v), b = Ae(b + _ - (m * $ + _ * R) + w)), (r || i) && (A = h.getBBox(), k = Ae(k + r / 100 * A.width), b = Ae(b + i / 100 * A.height)), A = "matrix(" + E + "," + $ + "," + P + "," + R + "," + k + "," + b + ")", h.setAttribute("transform", A), O && (h.style[we] = A)
        },
        yy = function(e, n, s, r, i) {
            var o = 360,
                a = Ue(i),
                l = parseFloat(i) * (a && ~i.indexOf("rad") ? Kn : 1),
                c = l - r,
                u = r + c + "deg",
                f, d;
            return a && (f = i.split("_")[1], f === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), f === "cw" && c < 0 ? c = (c + o * Jl) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Jl) % o - ~~(c / o) * o)), e._pt = d = new ct(e._pt, n, s, r, c, ty), d.e = u, d.u = "deg", e._props.push(s), d
        },
        sc = function(e, n) {
            for (var s in n) e[s] = n[s];
            return e
        },
        vy = function(e, n, s) {
            var r = sc({}, s._gsap),
                i = "perspective,force3D,transformOrigin,svgOrigin",
                o = s.style,
                a, l, c, u, f, d, h, m;
            r.svg ? (c = s.getAttribute("transform"), s.setAttribute("transform", ""), o[we] = n, a = yr(s, 1), ls(s, we), s.setAttribute("transform", c)) : (c = getComputedStyle(s)[we], o[we] = n, a = yr(s, 1), o[we] = c);
            for (l in fn) c = r[l], u = a[l], c !== u && i.indexOf(l) < 0 && (h = We(c), m = We(u), f = h !== m ? An(s, l, c, m) : parseFloat(c), d = parseFloat(u), e._pt = new ct(e._pt, a, l, f, d - f, Lo), e._pt.u = m || 0, e._props.push(l));
            sc(a, r)
        };
    lt("padding,margin,Width,Radius", function(t, e) {
        var n = "Top",
            s = "Right",
            r = "Bottom",
            i = "Left",
            o = (e < 3 ? [n, s, r, i] : [n + i, n + s, r + s, r + i]).map(function(a) {
                return e < 2 ? t + a : "border" + a + t
            });
        ri[e > 1 ? "border" + t : t] = function(a, l, c, u, f) {
            var d, h;
            if (arguments.length < 4) return d = o.map(function(m) {
                return an(a, m, c)
            }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
            d = (u + "").split(" "), h = {}, o.forEach(function(m, _) {
                return h[m] = d[_] = d[_] || d[(_ - 1) / 2 | 0]
            }), a.init(l, h, f)
        }
    });
    var hd = {
        name: "css",
        register: Mo,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, n, s, r, i) {
            var o = this._props,
                a = e.style,
                l = s.vars.startAt,
                c, u, f, d, h, m, _, v, w, O, k, b, E, $, P, R;
            Ma || Mo(), this.styles = this.styles || ad(e), R = this.styles.props, this.tween = s;
            for (_ in n)
                if (_ !== "autoRound" && (u = n[_], !(mt[_] && Xf(_, n, s, r, e, i)))) {
                    if (h = typeof u, m = ri[_], h === "function" && (u = u.call(s, r, e, i), h = typeof u), h === "string" && ~u.indexOf("random(") && (u = hr(u)), m) m(this, e, _, u, s) && (P = 1);
                    else if (_.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(_) + "").trim(), u += "", On.lastIndex = 0, On.test(c) || (v = We(c), w = We(u)), w ? v !== w && (c = An(e, _, c, w) + w) : v && (u += v), this.add(a, "setProperty", c, u, r, i, 0, 0, _), o.push(_), R.push(_, 0, a[_]);
                    else if (h !== "undefined") {
                        if (l && _ in l ? (c = typeof l[_] == "function" ? l[_].call(s, r, e, i) : l[_], Ue(c) && ~c.indexOf("random(") && (c = hr(c)), We(c + "") || c === "auto" || (c += kt.units[_] || We(an(e, _)) || ""), (c + "").charAt(1) === "=" && (c = an(e, _))) : c = an(e, _), d = parseFloat(c), O = h === "string" && u.charAt(1) === "=" && u.substr(0, 2), O && (u = u.substr(2)), f = parseFloat(u), _ in qt && (_ === "autoAlpha" && (d === 1 && an(e, "visibility") === "hidden" && f && (d = 0), R.push("visibility", 0, a.visibility), wn(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), _ !== "scale" && _ !== "transform" && (_ = qt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), k = _ in fn, k) {
                            if (this.styles.save(_), b || (E = e._gsap, E.renderTransform && !n.parseTransform || yr(e, n.parseTransform), $ = n.smoothOrigin !== !1 && E.smooth, b = this._pt = new ct(this._pt, a, we, 0, 1, E.renderTransform, E, 0, -1), b.dep = 1), _ === "scale") this._pt = new ct(this._pt, E, "scaleY", E.scaleY, (O ? $s(E.scaleY, O + f) : f) - E.scaleY || 0, Lo), this._pt.u = 0, o.push("scaleY", _), _ += "X";
                            else if (_ === "transformOrigin") {
                                R.push(ut, 0, a[ut]), u = hy(u), E.svg ? Fo(e, u, 0, $, 0, this) : (w = parseFloat(u.split(" ")[2]) || 0, w !== E.zOrigin && wn(this, E, "zOrigin", E.zOrigin, w), wn(this, a, _, ii(c), ii(u)));
                                continue
                            } else if (_ === "svgOrigin") {
                                Fo(e, u, 1, $, 0, this);
                                continue
                            } else if (_ in fd) {
                                yy(this, E, _, d, O ? $s(d, O + u) : u);
                                continue
                            } else if (_ === "smoothOrigin") {
                                wn(this, E, "smooth", E.smooth, u);
                                continue
                            } else if (_ === "force3D") {
                                E[_] = u;
                                continue
                            } else if (_ === "transform") {
                                vy(this, u, e);
                                continue
                            }
                        } else _ in a || (_ = Ns(_) || _);
                        if (k || (f || f === 0) && (d || d === 0) && !ey.test(u) && _ in a) v = (c + "").substr((d + "").length), f || (f = 0), w = We(u) || (_ in kt.units ? kt.units[_] : v), v !== w && (d = An(e, _, c, w)), this._pt = new ct(this._pt, k ? E : a, _, d, (O ? $s(d, O + f) : f) - d, !k && (w === "px" || _ === "zIndex") && n.autoRound !== !1 ? sy : Lo), this._pt.u = w || 0, v !== w && w !== "%" && (this._pt.b = c, this._pt.r = ny);
                        else if (_ in a) _y.call(this, e, _, c, O ? O + u : u);
                        else if (_ in e) this.add(e, _, c || e[_], O ? O + u : u, r, i);
                        else if (_ !== "parseTransform") {
                            xa(_, u);
                            continue
                        }
                        k || (_ in a ? R.push(_, 0, a[_]) : R.push(_, 1, c || e[_])), o.push(_)
                    }
                }
            P && nd(this)
        },
        render: function(e, n) {
            if (n.tween._time || !Fa())
                for (var s = n._pt; s;) s.r(e, s.d), s = s._next;
            else n.styles.revert()
        },
        get: an,
        aliases: qt,
        getSetter: function(e, n, s) {
            var r = qt[n];
            return r && r.indexOf(",") < 0 && (n = r), n in fn && n !== ut && (e._gsap.x || an(e, "x")) ? s && Xl === s ? n === "scale" ? ay : oy : (Xl = s || {}) && (n === "scale" ? ly : cy) : e.style && !$a(e.style[n]) ? ry : ~n.indexOf("-") ? iy : La(e, n)
        },
        core: {
            _removeProperty: ls,
            _getMatrix: Ua
        }
    };
    ft.utils.checkPrefix = Ns;
    ft.core.getStyleSaver = ad;
    (function(t, e, n, s) {
        var r = lt(t + "," + e + "," + n, function(i) {
            fn[i] = 1
        });
        lt(e, function(i) {
            kt.units[i] = "deg", fd[i] = 1
        }), qt[r[13]] = t + "," + e, lt(s, function(i) {
            var o = i.split(":");
            qt[o[1]] = r[o[0]]
        })
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        kt.units[t] = "px"
    });
    ft.registerPlugin(hd);
    var Hr = ft.registerPlugin(hd) || ft;
    Hr.core.Tween;
    const by = {
        version: "1.0.5",
        log: "\n1.0.4.1 - vConsole\n1.0.3.1 - add Not Support postMessage, add 35sec no postMessage, writeDoc bypass, isProd\n1.0.3.0 - fix style & enable eruda\n1.0.2.9 - comment eruda\n1.0.2.8 - build.target\n1.0.2.7 - eruda\n1.0.2.6 - rtl certified\n1.0.2.5 - remove lang SR\n1.0.2.4 - incorrect params steps all langs\n1.0.2.3 - Gentle reminder text-align left\n1.0.2.2 - incorrect params steps feedback\n1.0.2.1 - incorrect params steps\n1.0.2.0 - top certified text & iframe writeDoc\n1.0.1.9 - add lang SH same as SR & rtl on 'AR FA UR'\n1.0.1.8 - get launch url html retry require\n1.0.1.7 - gentle reminder line #747A7A\n1.0.1.6 - error code 2122 : env is not allowed to get the launch html\n1.0.1.5 - all langs updates & certified text hide\n1.0.1.4 - gentle reminder update\n1.0.1.3 - load at 280px, uncomplete params > statusPage.wrong, iframe 80%\n1.0.1.2 - revamp\n1.0.1.1 - add new error page and modify new success page\n1.0.1.0 - error code & iframe scale 100%\n1.0.0.9 - add window.onerror\n1.0.0.8 - fix text padding\n1.0.0.7 - messageFunc fix\n1.0.0.6 - remove background\n1.0.0.5 - add multilanguage\n1.0.0.4 - add landscape UI\n1.0.0.3 - remove console, fix scrollbar\n1.0.0.2 - fix image loaded completely\n1.0.0.1 - fix iframe blinking, check domain\n1.0.0.0 - first deployment\n0.0.0.1 - project initialize\n"
    };
    /*!
     * shared v9.14.0
     * (c) 2024 kazuya kawaguchi
     * Released under the MIT License.
     */
    const oi = typeof window != "undefined",
        Dn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t),
        ky = (t, e, n) => Ty({
            l: t,
            k: e,
            s: n
        }),
        Ty = t => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ne = t => typeof t == "number" && isFinite(t),
        Ey = t => md(t) === "[object Date]",
        In = t => md(t) === "[object RegExp]",
        $i = t => ee(t) && Object.keys(t).length === 0,
        Ge = Object.assign;
    let rc;
    const ln = () => rc || (rc = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});

    function ic(t) {
        return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const wy = Object.prototype.hasOwnProperty;

    function ai(t, e) {
        return wy.call(t, e)
    }
    const be = Array.isArray,
        ve = t => typeof t == "function",
        H = t => typeof t == "string",
        re = t => typeof t == "boolean",
        ce = t => t !== null && typeof t == "object",
        $y = t => ce(t) && ve(t.then) && ve(t.catch),
        pd = Object.prototype.toString,
        md = t => pd.call(t),
        ee = t => {
            if (!ce(t)) return !1;
            const e = Object.getPrototypeOf(t);
            return e === null || e.constructor === Object
        },
        Sy = t => t == null ? "" : be(t) || ee(t) && t.toString === pd ? JSON.stringify(t, null, 2) : String(t);

    function Oy(t, e = "") {
        return t.reduce((n, s, r) => r === 0 ? n + s : n + e + s, "")
    }

    function Si(t) {
        let e = t;
        return () => ++e
    }

    function xy(t, e) {
        typeof console != "undefined" && (console.warn("[intlify] " + t), e && console.warn(e.stack))
    }
    const Dr = t => !ce(t) || be(t);

    function Wr(t, e) {
        if (Dr(t) || Dr(e)) throw new Error("Invalid value");
        const n = [{
            src: t,
            des: e
        }];
        for (; n.length;) {
            const {
                src: s,
                des: r
            } = n.pop();
            Object.keys(s).forEach(i => {
                Dr(s[i]) || Dr(r[i]) ? r[i] = s[i] : n.push({
                    src: s[i],
                    des: r[i]
                })
            })
        }
    }
    /*!
     * message-compiler v9.14.0
     * (c) 2024 kazuya kawaguchi
     * Released under the MIT License.
     */
    function Py(t, e, n) {
        return {
            line: t,
            column: e,
            offset: n
        }
    }

    function li(t, e, n) {
        return {
            start: t,
            end: e
        }
    }
    const Ay = /\{([0-9a-zA-Z]+)\}/g;

    function gd(t, ...e) {
        return e.length === 1 && Iy(e[0]) && (e = e[0]), (!e || !e.hasOwnProperty) && (e = {}), t.replace(Ay, (n, s) => e.hasOwnProperty(s) ? e[s] : "")
    }
    const yd = Object.assign,
        oc = t => typeof t == "string",
        Iy = t => t !== null && typeof t == "object";

    function vd(t, e = "") {
        return t.reduce((n, s, r) => r === 0 ? n + s : n + e + s, "")
    }
    const za = {
            USE_MODULO_SYNTAX: 1,
            __EXTEND_POINT__: 2
        },
        Ry = {
            [za.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
        };

    function Ny(t, e, ...n) {
        const s = gd(Ry[t], ...n || []),
            r = {
                message: String(s),
                code: t
            };
        return e && (r.location = e), r
    }
    const Q = {
            EXPECTED_TOKEN: 1,
            INVALID_TOKEN_IN_PLACEHOLDER: 2,
            UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
            UNKNOWN_ESCAPE_SEQUENCE: 4,
            INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
            UNBALANCED_CLOSING_BRACE: 6,
            UNTERMINATED_CLOSING_BRACE: 7,
            EMPTY_PLACEHOLDER: 8,
            NOT_ALLOW_NEST_PLACEHOLDER: 9,
            INVALID_LINKED_FORMAT: 10,
            MUST_HAVE_MESSAGES_IN_PLURAL: 11,
            UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
            UNEXPECTED_EMPTY_LINKED_KEY: 13,
            UNEXPECTED_LEXICAL_ANALYSIS: 14,
            UNHANDLED_CODEGEN_NODE_TYPE: 15,
            UNHANDLED_MINIFIER_NODE_TYPE: 16,
            __EXTEND_POINT__: 17
        },
        Cy = {
            [Q.EXPECTED_TOKEN]: "Expected token: '{0}'",
            [Q.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
            [Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
            [Q.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
            [Q.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
            [Q.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
            [Q.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
            [Q.EMPTY_PLACEHOLDER]: "Empty placeholder",
            [Q.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
            [Q.INVALID_LINKED_FORMAT]: "Invalid linked format",
            [Q.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
            [Q.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
            [Q.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
            [Q.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
            [Q.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
            [Q.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
        };

    function js(t, e, n = {}) {
        const {
            domain: s,
            messages: r,
            args: i
        } = n, o = gd((r || Cy)[t] || "", ...i || []), a = new SyntaxError(String(o));
        return a.code = t, e && (a.location = e), a.domain = s, a
    }

    function Ly(t) {
        throw t
    }
    const nn = " ",
        Dy = "\r",
        Ze = "\n",
        My = "\u2028",
        Fy = "\u2029";

    function jy(t) {
        const e = t;
        let n = 0,
            s = 1,
            r = 1,
            i = 0;
        const o = P => e[P] === Dy && e[P + 1] === Ze,
            a = P => e[P] === Ze,
            l = P => e[P] === Fy,
            c = P => e[P] === My,
            u = P => o(P) || a(P) || l(P) || c(P),
            f = () => n,
            d = () => s,
            h = () => r,
            m = () => i,
            _ = P => o(P) || l(P) || c(P) ? Ze : e[P],
            v = () => _(n),
            w = () => _(n + i);

        function O() {
            return i = 0, u(n) && (s++, r = 0), o(n) && n++, n++, r++, e[n]
        }

        function k() {
            return o(n + i) && i++, i++, e[n + i]
        }

        function b() {
            n = 0, s = 1, r = 1, i = 0
        }

        function E(P = 0) {
            i = P
        }

        function $() {
            const P = n + i;
            for (; P !== n;) O();
            i = 0
        }
        return {
            index: f,
            line: d,
            column: h,
            peekOffset: m,
            charAt: _,
            currentChar: v,
            currentPeek: w,
            next: O,
            peek: k,
            reset: b,
            resetPeek: E,
            skipToPeek: $
        }
    }
    const yn = void 0,
        Uy = ".",
        ac = "'",
        zy = "tokenizer";

    function Gy(t, e = {}) {
        const n = e.location !== !1,
            s = jy(t),
            r = () => s.index(),
            i = () => Py(s.line(), s.column(), s.index()),
            o = i(),
            a = r(),
            l = {
                currentType: 14,
                offset: a,
                startLoc: o,
                endLoc: o,
                lastType: 14,
                lastOffset: a,
                lastStartLoc: o,
                lastEndLoc: o,
                braceNest: 0,
                inLinked: !1,
                text: ""
            },
            c = () => l,
            {
                onError: u
            } = e;

        function f(p, g, S, ...M) {
            const z = c();
            if (g.column += S, g.offset += S, u) {
                const j = n ? li(z.startLoc, g) : null,
                    x = js(p, j, {
                        domain: zy,
                        args: M
                    });
                u(x)
            }
        }

        function d(p, g, S) {
            p.endLoc = i(), p.currentType = g;
            const M = {
                type: g
            };
            return n && (M.loc = li(p.startLoc, p.endLoc)), S != null && (M.value = S), M
        }
        const h = p => d(p, 14);

        function m(p, g) {
            return p.currentChar() === g ? (p.next(), g) : (f(Q.EXPECTED_TOKEN, i(), 0, g), "")
        }

        function _(p) {
            let g = "";
            for (; p.currentPeek() === nn || p.currentPeek() === Ze;) g += p.currentPeek(), p.peek();
            return g
        }

        function v(p) {
            const g = _(p);
            return p.skipToPeek(), g
        }

        function w(p) {
            if (p === yn) return !1;
            const g = p.charCodeAt(0);
            return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g === 95
        }

        function O(p) {
            if (p === yn) return !1;
            const g = p.charCodeAt(0);
            return g >= 48 && g <= 57
        }

        function k(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            _(p);
            const M = w(p.currentPeek());
            return p.resetPeek(), M
        }

        function b(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            _(p);
            const M = p.currentPeek() === "-" ? p.peek() : p.currentPeek(),
                z = O(M);
            return p.resetPeek(), z
        }

        function E(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            _(p);
            const M = p.currentPeek() === ac;
            return p.resetPeek(), M
        }

        function $(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 8) return !1;
            _(p);
            const M = p.currentPeek() === ".";
            return p.resetPeek(), M
        }

        function P(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 9) return !1;
            _(p);
            const M = w(p.currentPeek());
            return p.resetPeek(), M
        }

        function R(p, g) {
            const {
                currentType: S
            } = g;
            if (!(S === 8 || S === 12)) return !1;
            _(p);
            const M = p.currentPeek() === ":";
            return p.resetPeek(), M
        }

        function A(p, g) {
            const {
                currentType: S
            } = g;
            if (S !== 10) return !1;
            const M = () => {
                    const j = p.currentPeek();
                    return j === "{" ? w(p.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === nn || !j ? !1 : j === Ze ? (p.peek(), M()) : W(p, !1)
                },
                z = M();
            return p.resetPeek(), z
        }

        function q(p) {
            _(p);
            const g = p.currentPeek() === "|";
            return p.resetPeek(), g
        }

        function Z(p) {
            const g = _(p),
                S = p.currentPeek() === "%" && p.peek() === "{";
            return p.resetPeek(), {
                isModulo: S,
                hasSpace: g.length > 0
            }
        }

        function W(p, g = !0) {
            const S = (z = !1, j = "", x = !1) => {
                    const C = p.currentPeek();
                    return C === "{" ? j === "%" ? !1 : z : C === "@" || !C ? j === "%" ? !0 : z : C === "%" ? (p.peek(), S(z, "%", !0)) : C === "|" ? j === "%" || x ? !0 : !(j === nn || j === Ze) : C === nn ? (p.peek(), S(!0, nn, x)) : C === Ze ? (p.peek(), S(!0, Ze, x)) : !0
                },
                M = S();
            return g && p.resetPeek(), M
        }

        function Y(p, g) {
            const S = p.currentChar();
            return S === yn ? yn : g(S) ? (p.next(), S) : null
        }

        function ae(p) {
            const g = p.charCodeAt(0);
            return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g >= 48 && g <= 57 || g === 95 || g === 36
        }

        function fe(p) {
            return Y(p, ae)
        }

        function J(p) {
            const g = p.charCodeAt(0);
            return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g >= 48 && g <= 57 || g === 95 || g === 36 || g === 45
        }

        function L(p) {
            return Y(p, J)
        }

        function G(p) {
            const g = p.charCodeAt(0);
            return g >= 48 && g <= 57
        }

        function Te(p) {
            return Y(p, G)
        }

        function _e(p) {
            const g = p.charCodeAt(0);
            return g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102
        }

        function de(p) {
            return Y(p, _e)
        }

        function ie(p) {
            let g = "",
                S = "";
            for (; g = Te(p);) S += g;
            return S
        }

        function Pt(p) {
            v(p);
            const g = p.currentChar();
            return g !== "%" && f(Q.EXPECTED_TOKEN, i(), 0, g), p.next(), "%"
        }

        function De(p) {
            let g = "";
            for (;;) {
                const S = p.currentChar();
                if (S === "{" || S === "}" || S === "@" || S === "|" || !S) break;
                if (S === "%")
                    if (W(p)) g += S, p.next();
                    else break;
                else if (S === nn || S === Ze)
                    if (W(p)) g += S, p.next();
                    else {
                        if (q(p)) break;
                        g += S, p.next()
                    }
                else g += S, p.next()
            }
            return g
        }

        function Xe(p) {
            v(p);
            let g = "",
                S = "";
            for (; g = L(p);) S += g;
            return p.currentChar() === yn && f(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), S
        }

        function At(p) {
            v(p);
            let g = "";
            return p.currentChar() === "-" ? (p.next(), g += "-".concat(ie(p))) : g += ie(p), p.currentChar() === yn && f(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), g
        }

        function Zt(p) {
            return p !== ac && p !== Ze
        }

        function en(p) {
            v(p), m(p, "'");
            let g = "",
                S = "";
            for (; g = Y(p, Zt);) g === "\\" ? S += _n(p) : S += g;
            const M = p.currentChar();
            return M === Ze || M === yn ? (f(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), M === Ze && (p.next(), m(p, "'")), S) : (m(p, "'"), S)
        }

        function _n(p) {
            const g = p.currentChar();
            switch (g) {
                case "\\":
                case "'":
                    return p.next(), "\\".concat(g);
                case "u":
                    return Et(p, g, 4);
                case "U":
                    return Et(p, g, 6);
                default:
                    return f(Q.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, g), ""
            }
        }

        function Et(p, g, S) {
            m(p, g);
            let M = "";
            for (let z = 0; z < S; z++) {
                const j = de(p);
                if (!j) {
                    f(Q.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, "\\".concat(g).concat(M).concat(p.currentChar()));
                    break
                }
                M += j
            }
            return "\\".concat(g).concat(M)
        }

        function hn(p) {
            return p !== "{" && p !== "}" && p !== nn && p !== Ze
        }

        function pn(p) {
            v(p);
            let g = "",
                S = "";
            for (; g = Y(p, hn);) S += g;
            return S
        }

        function T(p) {
            let g = "",
                S = "";
            for (; g = fe(p);) S += g;
            return S
        }

        function y(p) {
            const g = S => {
                const M = p.currentChar();
                return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === nn ? S : (S += M, p.next(), g(S))
            };
            return g("")
        }

        function I(p) {
            v(p);
            const g = m(p, "|");
            return v(p), g
        }

        function U(p, g) {
            let S = null;
            switch (p.currentChar()) {
                case "{":
                    return g.braceNest >= 1 && f(Q.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), p.next(), S = d(g, 2, "{"), v(p), g.braceNest++, S;
                case "}":
                    return g.braceNest > 0 && g.currentType === 2 && f(Q.EMPTY_PLACEHOLDER, i(), 0), p.next(), S = d(g, 3, "}"), g.braceNest--, g.braceNest > 0 && v(p), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), S;
                case "@":
                    return g.braceNest > 0 && f(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), S = D(p, g) || h(g), g.braceNest = 0, S;
                default:
                    {
                        let z = !0,
                            j = !0,
                            x = !0;
                        if (q(p)) return g.braceNest > 0 && f(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), S = d(g, 1, I(p)), g.braceNest = 0, g.inLinked = !1, S;
                        if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7)) return f(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), g.braceNest = 0, F(p, g);
                        if (z = k(p, g)) return S = d(g, 5, Xe(p)), v(p), S;
                        if (j = b(p, g)) return S = d(g, 6, At(p)), v(p), S;
                        if (x = E(p, g)) return S = d(g, 7, en(p)), v(p), S;
                        if (!z && !j && !x) return S = d(g, 13, pn(p)), f(Q.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, S.value), v(p), S;
                        break
                    }
            }
            return S
        }

        function D(p, g) {
            const {
                currentType: S
            } = g;
            let M = null;
            const z = p.currentChar();
            switch ((S === 8 || S === 9 || S === 12 || S === 10) && (z === Ze || z === nn) && f(Q.INVALID_LINKED_FORMAT, i(), 0), z) {
                case "@":
                    return p.next(), M = d(g, 8, "@"), g.inLinked = !0, M;
                case ".":
                    return v(p), p.next(), d(g, 9, ".");
                case ":":
                    return v(p), p.next(), d(g, 10, ":");
                default:
                    return q(p) ? (M = d(g, 1, I(p)), g.braceNest = 0, g.inLinked = !1, M) : $(p, g) || R(p, g) ? (v(p), D(p, g)) : P(p, g) ? (v(p), d(g, 12, T(p))) : A(p, g) ? (v(p), z === "{" ? U(p, g) || M : d(g, 11, y(p))) : (S === 8 && f(Q.INVALID_LINKED_FORMAT, i(), 0), g.braceNest = 0, g.inLinked = !1, F(p, g))
            }
        }

        function F(p, g) {
            let S = {
                type: 14
            };
            if (g.braceNest > 0) return U(p, g) || h(g);
            if (g.inLinked) return D(p, g) || h(g);
            switch (p.currentChar()) {
                case "{":
                    return U(p, g) || h(g);
                case "}":
                    return f(Q.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), d(g, 3, "}");
                case "@":
                    return D(p, g) || h(g);
                default:
                    {
                        if (q(p)) return S = d(g, 1, I(p)), g.braceNest = 0, g.inLinked = !1, S;
                        const {
                            isModulo: z,
                            hasSpace: j
                        } = Z(p);
                        if (z) return j ? d(g, 0, De(p)) : d(g, 4, Pt(p));
                        if (W(p)) return d(g, 0, De(p));
                        break
                    }
            }
            return S
        }

        function V() {
            const {
                currentType: p,
                offset: g,
                startLoc: S,
                endLoc: M
            } = l;
            return l.lastType = p, l.lastOffset = g, l.lastStartLoc = S, l.lastEndLoc = M, l.offset = r(), l.startLoc = i(), s.currentChar() === yn ? d(l, 14) : F(s, l)
        }
        return {
            nextToken: V,
            currentOffset: r,
            currentPosition: i,
            context: c
        }
    }
    const By = "parser",
        Vy = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function Hy(t, e, n) {
        switch (t) {
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default:
                {
                    const s = parseInt(e || n, 16);
                    return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�"
                }
        }
    }

    function Wy(t = {}) {
        const e = t.location !== !1,
            {
                onError: n,
                onWarn: s
            } = t;

        function r(k, b, E, $, ...P) {
            const R = k.currentPosition();
            if (R.offset += $, R.column += $, n) {
                const A = e ? li(E, R) : null,
                    q = js(b, A, {
                        domain: By,
                        args: P
                    });
                n(q)
            }
        }

        function i(k, b, E, $, ...P) {
            const R = k.currentPosition();
            if (R.offset += $, R.column += $, s) {
                const A = e ? li(E, R) : null;
                s(Ny(b, A, P))
            }
        }

        function o(k, b, E) {
            const $ = {
                type: k
            };
            return e && ($.start = b, $.end = b, $.loc = {
                start: E,
                end: E
            }), $
        }

        function a(k, b, E, $) {
            e && (k.end = b, k.loc && (k.loc.end = E))
        }

        function l(k, b) {
            const E = k.context(),
                $ = o(3, E.offset, E.startLoc);
            return $.value = b, a($, k.currentOffset(), k.currentPosition()), $
        }

        function c(k, b) {
            const E = k.context(),
                {
                    lastOffset: $,
                    lastStartLoc: P
                } = E,
                R = o(5, $, P);
            return R.index = parseInt(b, 10), k.nextToken(), a(R, k.currentOffset(), k.currentPosition()), R
        }

        function u(k, b, E) {
            const $ = k.context(),
                {
                    lastOffset: P,
                    lastStartLoc: R
                } = $,
                A = o(4, P, R);
            return A.key = b, E === !0 && (A.modulo = !0), k.nextToken(), a(A, k.currentOffset(), k.currentPosition()), A
        }

        function f(k, b) {
            const E = k.context(),
                {
                    lastOffset: $,
                    lastStartLoc: P
                } = E,
                R = o(9, $, P);
            return R.value = b.replace(Vy, Hy), k.nextToken(), a(R, k.currentOffset(), k.currentPosition()), R
        }

        function d(k) {
            const b = k.nextToken(),
                E = k.context(),
                {
                    lastOffset: $,
                    lastStartLoc: P
                } = E,
                R = o(8, $, P);
            return b.type !== 12 ? (r(k, Q.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), R.value = "", a(R, $, P), {
                nextConsumeToken: b,
                node: R
            }) : (b.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, It(b)), R.value = b.value || "", a(R, k.currentOffset(), k.currentPosition()), {
                node: R
            })
        }

        function h(k, b) {
            const E = k.context(),
                $ = o(7, E.offset, E.startLoc);
            return $.value = b, a($, k.currentOffset(), k.currentPosition()), $
        }

        function m(k) {
            const b = k.context(),
                E = o(6, b.offset, b.startLoc);
            let $ = k.nextToken();
            if ($.type === 9) {
                const P = d(k);
                E.modifier = P.node, $ = P.nextConsumeToken || k.nextToken()
            }
            switch ($.type !== 10 && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It($)), $ = k.nextToken(), $.type === 2 && ($ = k.nextToken()), $.type) {
                case 11:
                    $.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It($)), E.key = h(k, $.value || "");
                    break;
                case 5:
                    $.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It($)), E.key = u(k, $.value || "");
                    break;
                case 6:
                    $.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It($)), E.key = c(k, $.value || "");
                    break;
                case 7:
                    $.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It($)), E.key = f(k, $.value || "");
                    break;
                default:
                    {
                        r(k, Q.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
                        const P = k.context(),
                            R = o(7, P.offset, P.startLoc);
                        return R.value = "",
                        a(R, P.offset, P.startLoc),
                        E.key = R,
                        a(E, P.offset, P.startLoc),
                        {
                            nextConsumeToken: $,
                            node: E
                        }
                    }
            }
            return a(E, k.currentOffset(), k.currentPosition()), {
                node: E
            }
        }

        function _(k) {
            const b = k.context(),
                E = b.currentType === 1 ? k.currentOffset() : b.offset,
                $ = b.currentType === 1 ? b.endLoc : b.startLoc,
                P = o(2, E, $);
            P.items = [];
            let R = null,
                A = null;
            do {
                const W = R || k.nextToken();
                switch (R = null, W.type) {
                    case 0:
                        W.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It(W)), P.items.push(l(k, W.value || ""));
                        break;
                    case 6:
                        W.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It(W)), P.items.push(c(k, W.value || ""));
                        break;
                    case 4:
                        A = !0;
                        break;
                    case 5:
                        W.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It(W)), P.items.push(u(k, W.value || "", !!A)), A && (i(k, za.USE_MODULO_SYNTAX, b.lastStartLoc, 0, It(W)), A = null);
                        break;
                    case 7:
                        W.value == null && r(k, Q.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, It(W)), P.items.push(f(k, W.value || ""));
                        break;
                    case 8:
                        {
                            const Y = m(k);P.items.push(Y.node),
                            R = Y.nextConsumeToken || null;
                            break
                        }
                }
            } while (b.currentType !== 14 && b.currentType !== 1);
            const q = b.currentType === 1 ? b.lastOffset : k.currentOffset(),
                Z = b.currentType === 1 ? b.lastEndLoc : k.currentPosition();
            return a(P, q, Z), P
        }

        function v(k, b, E, $) {
            const P = k.context();
            let R = $.items.length === 0;
            const A = o(1, b, E);
            A.cases = [], A.cases.push($);
            do {
                const q = _(k);
                R || (R = q.items.length === 0), A.cases.push(q)
            } while (P.currentType !== 14);
            return R && r(k, Q.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), a(A, k.currentOffset(), k.currentPosition()), A
        }

        function w(k) {
            const b = k.context(),
                {
                    offset: E,
                    startLoc: $
                } = b,
                P = _(k);
            return b.currentType === 14 ? P : v(k, E, $, P)
        }

        function O(k) {
            const b = Gy(k, yd({}, t)),
                E = b.context(),
                $ = o(0, E.offset, E.startLoc);
            return e && $.loc && ($.loc.source = k), $.body = w(b), t.onCacheKey && ($.cacheKey = t.onCacheKey(k)), E.currentType !== 14 && r(b, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, k[E.offset] || ""), a($, b.currentOffset(), b.currentPosition()), $
        }
        return {
            parse: O
        }
    }

    function It(t) {
        if (t.type === 14) return "EOF";
        const e = (t.value || "").replace(/\r?\n/gu, "\\n");
        return e.length > 10 ? e.slice(0, 9) + "…" : e
    }

    function qy(t, e = {}) {
        const n = {
            ast: t,
            helpers: new Set
        };
        return {
            context: () => n,
            helper: i => (n.helpers.add(i), i)
        }
    }

    function lc(t, e) {
        for (let n = 0; n < t.length; n++) Ga(t[n], e)
    }

    function Ga(t, e) {
        switch (t.type) {
            case 1:
                lc(t.cases, e), e.helper("plural");
                break;
            case 2:
                lc(t.items, e);
                break;
            case 6:
                {
                    Ga(t.key, e),
                    e.helper("linked"),
                    e.helper("type");
                    break
                }
            case 5:
                e.helper("interpolate"), e.helper("list");
                break;
            case 4:
                e.helper("interpolate"), e.helper("named");
                break
        }
    }

    function Ky(t, e = {}) {
        const n = qy(t);
        n.helper("normalize"), t.body && Ga(t.body, n);
        const s = n.context();
        t.helpers = Array.from(s.helpers)
    }

    function Yy(t) {
        const e = t.body;
        return e.type === 2 ? cc(e) : e.cases.forEach(n => cc(n)), t
    }

    function cc(t) {
        if (t.items.length === 1) {
            const e = t.items[0];
            (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value)
        } else {
            const e = [];
            for (let n = 0; n < t.items.length; n++) {
                const s = t.items[n];
                if (!(s.type === 3 || s.type === 9) || s.value == null) break;
                e.push(s.value)
            }
            if (e.length === t.items.length) {
                t.static = vd(e);
                for (let n = 0; n < t.items.length; n++) {
                    const s = t.items[n];
                    (s.type === 3 || s.type === 9) && delete s.value
                }
            }
        }
    }
    const Xy = "minifier";

    function gs(t) {
        switch (t.t = t.type, t.type) {
            case 0:
                {
                    const e = t;gs(e.body),
                    e.b = e.body,
                    delete e.body;
                    break
                }
            case 1:
                {
                    const e = t,
                        n = e.cases;
                    for (let s = 0; s < n.length; s++) gs(n[s]);e.c = n,
                    delete e.cases;
                    break
                }
            case 2:
                {
                    const e = t,
                        n = e.items;
                    for (let s = 0; s < n.length; s++) gs(n[s]);e.i = n,
                    delete e.items,
                    e.static && (e.s = e.static, delete e.static);
                    break
                }
            case 3:
            case 9:
            case 8:
            case 7:
                {
                    const e = t;e.value && (e.v = e.value, delete e.value);
                    break
                }
            case 6:
                {
                    const e = t;gs(e.key),
                    e.k = e.key,
                    delete e.key,
                    e.modifier && (gs(e.modifier), e.m = e.modifier, delete e.modifier);
                    break
                }
            case 5:
                {
                    const e = t;e.i = e.index,
                    delete e.index;
                    break
                }
            case 4:
                {
                    const e = t;e.k = e.key,
                    delete e.key;
                    break
                }
            default:
                throw js(Q.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                    domain: Xy,
                    args: [t.type]
                })
        }
        delete t.type
    }
    const Jy = "parser";

    function Qy(t, e) {
        const {
            sourceMap: n,
            filename: s,
            breakLineCode: r,
            needIndent: i
        } = e, o = e.location !== !1, a = {
            filename: s,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: r,
            needIndent: i,
            indentLevel: 0
        };
        o && t.loc && (a.source = t.loc.source);
        const l = () => a;

        function c(v, w) {
            a.code += v
        }

        function u(v, w = !0) {
            const O = w ? r : "";
            c(i ? O + "  ".repeat(v) : O)
        }

        function f(v = !0) {
            const w = ++a.indentLevel;
            v && u(w)
        }

        function d(v = !0) {
            const w = --a.indentLevel;
            v && u(w)
        }

        function h() {
            u(a.indentLevel)
        }
        return {
            context: l,
            push: c,
            indent: f,
            deindent: d,
            newline: h,
            helper: v => "_".concat(v),
            needIndent: () => a.needIndent
        }
    }

    function Zy(t, e) {
        const {
            helper: n
        } = t;
        t.push("".concat(n("linked"), "(")), Cs(t, e.key), e.modifier ? (t.push(", "), Cs(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")")
    }

    function ev(t, e) {
        const {
            helper: n,
            needIndent: s
        } = t;
        t.push("".concat(n("normalize"), "([")), t.indent(s());
        const r = e.items.length;
        for (let i = 0; i < r && (Cs(t, e.items[i]), i !== r - 1); i++) t.push(", ");
        t.deindent(s()), t.push("])")
    }

    function tv(t, e) {
        const {
            helper: n,
            needIndent: s
        } = t;
        if (e.cases.length > 1) {
            t.push("".concat(n("plural"), "([")), t.indent(s());
            const r = e.cases.length;
            for (let i = 0; i < r && (Cs(t, e.cases[i]), i !== r - 1); i++) t.push(", ");
            t.deindent(s()), t.push("])")
        }
    }

    function nv(t, e) {
        e.body ? Cs(t, e.body) : t.push("null")
    }

    function Cs(t, e) {
        const {
            helper: n
        } = t;
        switch (e.type) {
            case 0:
                nv(t, e);
                break;
            case 1:
                tv(t, e);
                break;
            case 2:
                ev(t, e);
                break;
            case 6:
                Zy(t, e);
                break;
            case 8:
                t.push(JSON.stringify(e.value), e);
                break;
            case 7:
                t.push(JSON.stringify(e.value), e);
                break;
            case 5:
                t.push("".concat(n("interpolate"), "(").concat(n("list"), "(").concat(e.index, "))"), e);
                break;
            case 4:
                t.push("".concat(n("interpolate"), "(").concat(n("named"), "(").concat(JSON.stringify(e.key), "))"), e);
                break;
            case 9:
                t.push(JSON.stringify(e.value), e);
                break;
            case 3:
                t.push(JSON.stringify(e.value), e);
                break;
            default:
                throw js(Q.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                    domain: Jy,
                    args: [e.type]
                })
        }
    }
    const sv = (t, e = {}) => {
        const n = oc(e.mode) ? e.mode : "normal",
            s = oc(e.filename) ? e.filename : "message.intl",
            r = !!e.sourceMap,
            i = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : "\n",
            o = e.needIndent ? e.needIndent : n !== "arrow",
            a = t.helpers || [],
            l = Qy(t, {
                mode: n,
                filename: s,
                sourceMap: r,
                breakLineCode: i,
                needIndent: o
            });
        l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push("const { ".concat(vd(a.map(f => "".concat(f, ": _").concat(f)), ", "), " } = ctx")), l.newline()), l.push("return "), Cs(l, t), l.deindent(o), l.push("}"), delete t.helpers;
        const {
            code: c,
            map: u
        } = l.context();
        return {
            ast: t,
            code: c,
            map: u ? u.toJSON() : void 0
        }
    };

    function rv(t, e = {}) {
        const n = yd({}, e),
            s = !!n.jit,
            r = !!n.minify,
            i = n.optimize == null ? !0 : n.optimize,
            a = Wy(n).parse(t);
        return s ? (i && Yy(a), r && gs(a), {
            ast: a,
            code: ""
        }) : (Ky(a, n), sv(a, n))
    }
    /*!
     * core-base v9.14.0
     * (c) 2024 kazuya kawaguchi
     * Released under the MIT License.
     */
    function iv() {
        typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ln().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ln().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ln().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
    }
    const Mn = [];
    Mn[0] = {
        w: [0],
        i: [3, 0],
        "[": [4],
        o: [7]
    };
    Mn[1] = {
        w: [1],
        ".": [2],
        "[": [4],
        o: [7]
    };
    Mn[2] = {
        w: [2],
        i: [3, 0],
        0: [3, 0]
    };
    Mn[3] = {
        i: [3, 0],
        0: [3, 0],
        w: [1, 1],
        ".": [2, 1],
        "[": [4, 1],
        o: [7, 1]
    };
    Mn[4] = {
        "'": [5, 0],
        '"': [6, 0],
        "[": [4, 2],
        "]": [1, 3],
        o: 8,
        l: [4, 0]
    };
    Mn[5] = {
        "'": [4, 0],
        o: 8,
        l: [5, 0]
    };
    Mn[6] = {
        '"': [4, 0],
        o: 8,
        l: [6, 0]
    };
    const ov = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function av(t) {
        return ov.test(t)
    }

    function lv(t) {
        const e = t.charCodeAt(0),
            n = t.charCodeAt(t.length - 1);
        return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t
    }

    function cv(t) {
        if (t == null) return "o";
        switch (t.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return t;
            case 95:
            case 36:
            case 45:
                return "i";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "w"
        }
        return "i"
    }

    function uv(t) {
        const e = t.trim();
        return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : av(e) ? lv(e) : "*" + e
    }

    function fv(t) {
        const e = [];
        let n = -1,
            s = 0,
            r = 0,
            i, o, a, l, c, u, f;
        const d = [];
        d[0] = () => {
            o === void 0 ? o = a : o += a
        }, d[1] = () => {
            o !== void 0 && (e.push(o), o = void 0)
        }, d[2] = () => {
            d[0](), r++
        }, d[3] = () => {
            if (r > 0) r--, s = 4, d[0]();
            else {
                if (r = 0, o === void 0 || (o = uv(o), o === !1)) return !1;
                d[1]()
            }
        };

        function h() {
            const m = t[n + 1];
            if (s === 5 && m === "'" || s === 6 && m === '"') return n++, a = "\\" + m, d[0](), !0
        }
        for (; s !== null;)
            if (n++, i = t[n], !(i === "\\" && h())) {
                if (l = cv(i), f = Mn[s], c = f[l] || f.l || 8, c === 8 || (s = c[0], c[1] !== void 0 && (u = d[c[1]], u && (a = i, u() === !1)))) return;
                if (s === 7) return e
            }
    }
    const uc = new Map;

    function dv(t, e) {
        return ce(t) ? t[e] : null
    }

    function _v(t, e) {
        if (!ce(t)) return null;
        let n = uc.get(e);
        if (n || (n = fv(e), n && uc.set(e, n)), !n) return null;
        const s = n.length;
        let r = t,
            i = 0;
        for (; i < s;) {
            const o = r[n[i]];
            if (o === void 0 || ve(r)) return null;
            r = o, i++
        }
        return r
    }
    const hv = t => t,
        pv = t => "",
        mv = "text",
        gv = t => t.length === 0 ? "" : Oy(t),
        yv = Sy;

    function fc(t, e) {
        return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
    }

    function vv(t) {
        const e = Ne(t.pluralIndex) ? t.pluralIndex : -1;
        return t.named && (Ne(t.named.count) || Ne(t.named.n)) ? Ne(t.named.count) ? t.named.count : Ne(t.named.n) ? t.named.n : e : e
    }

    function bv(t, e) {
        e.count || (e.count = t), e.n || (e.n = t)
    }

    function kv(t = {}) {
        const e = t.locale,
            n = vv(t),
            s = ce(t.pluralRules) && H(e) && ve(t.pluralRules[e]) ? t.pluralRules[e] : fc,
            r = ce(t.pluralRules) && H(e) && ve(t.pluralRules[e]) ? fc : void 0,
            i = w => w[s(n, w.length, r)],
            o = t.list || [],
            a = w => o[w],
            l = t.named || {};
        Ne(t.pluralIndex) && bv(n, l);
        const c = w => l[w];

        function u(w) {
            const O = ve(t.messages) ? t.messages(w) : ce(t.messages) ? t.messages[w] : !1;
            return O || (t.parent ? t.parent.message(w) : pv)
        }
        const f = w => t.modifiers ? t.modifiers[w] : hv,
            d = ee(t.processor) && ve(t.processor.normalize) ? t.processor.normalize : gv,
            h = ee(t.processor) && ve(t.processor.interpolate) ? t.processor.interpolate : yv,
            m = ee(t.processor) && H(t.processor.type) ? t.processor.type : mv,
            v = {
                list: a,
                named: c,
                plural: i,
                linked: (w, ...O) => {
                    const [k, b] = O;
                    let E = "text",
                        $ = "";
                    O.length === 1 ? ce(k) ? ($ = k.modifier || $, E = k.type || E) : H(k) && ($ = k || $) : O.length === 2 && (H(k) && ($ = k || $), H(b) && (E = b || E));
                    const P = u(w)(v),
                        R = E === "vnode" && be(P) && $ ? P[0] : P;
                    return $ ? f($)(R, E) : R
                },
                message: u,
                type: m,
                interpolate: h,
                normalize: d,
                values: Ge({}, o, l)
            };
        return v
    }
    let vr = null;

    function Tv(t) {
        vr = t
    }

    function Ev(t, e, n) {
        vr && vr.emit("i18n:init", {
            timestamp: Date.now(),
            i18n: t,
            version: e,
            meta: n
        })
    }
    const wv = $v("function:translate");

    function $v(t) {
        return e => vr && vr.emit(t, e)
    }
    const bd = za.__EXTEND_POINT__,
        Vn = Si(bd),
        Sv = {
            NOT_FOUND_KEY: bd,
            FALLBACK_TO_TRANSLATE: Vn(),
            CANNOT_FORMAT_NUMBER: Vn(),
            FALLBACK_TO_NUMBER_FORMAT: Vn(),
            CANNOT_FORMAT_DATE: Vn(),
            FALLBACK_TO_DATE_FORMAT: Vn(),
            EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Vn(),
            __EXTEND_POINT__: Vn()
        },
        kd = Q.__EXTEND_POINT__,
        Hn = Si(kd),
        Dt = {
            INVALID_ARGUMENT: kd,
            INVALID_DATE_ARGUMENT: Hn(),
            INVALID_ISO_DATE_ARGUMENT: Hn(),
            NOT_SUPPORT_NON_STRING_MESSAGE: Hn(),
            NOT_SUPPORT_LOCALE_PROMISE_VALUE: Hn(),
            NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Hn(),
            NOT_SUPPORT_LOCALE_TYPE: Hn(),
            __EXTEND_POINT__: Hn()
        };

    function Kt(t) {
        return js(t, null, void 0)
    }

    function Ba(t, e) {
        return e.locale != null ? dc(e.locale) : dc(t.locale)
    }
    let no;

    function dc(t) {
        if (H(t)) return t;
        if (ve(t)) {
            if (t.resolvedOnce && no != null) return no;
            if (t.constructor.name === "Function") {
                const e = t();
                if ($y(e)) throw Kt(Dt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
                return no = e
            } else throw Kt(Dt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
        } else throw Kt(Dt.NOT_SUPPORT_LOCALE_TYPE)
    }

    function Ov(t, e, n) {
        return [...new Set([n, ...be(e) ? e : ce(e) ? Object.keys(e) : H(e) ? [e] : [n]])]
    }

    function Td(t, e, n) {
        const s = H(n) ? n : Ls,
            r = t;
        r.__localeChainCache || (r.__localeChainCache = new Map);
        let i = r.__localeChainCache.get(s);
        if (!i) {
            i = [];
            let o = [n];
            for (; be(o);) o = _c(i, o, e);
            const a = be(e) || !ee(e) ? e : e.default ? e.default : null;
            o = H(a) ? [a] : a, be(o) && _c(i, o, !1), r.__localeChainCache.set(s, i)
        }
        return i
    }

    function _c(t, e, n) {
        let s = !0;
        for (let r = 0; r < e.length && re(s); r++) {
            const i = e[r];
            H(i) && (s = xv(t, e[r], n))
        }
        return s
    }

    function xv(t, e, n) {
        let s;
        const r = e.split("-");
        do {
            const i = r.join("-");
            s = Pv(t, i, n), r.splice(-1, 1)
        } while (r.length && s === !0);
        return s
    }

    function Pv(t, e, n) {
        let s = !1;
        if (!t.includes(e) && (s = !0, e)) {
            s = e[e.length - 1] !== "!";
            const r = e.replace(/!/g, "");
            t.push(r), (be(n) || ee(n)) && n[r] && (s = n[r])
        }
        return s
    }
    const Av = "9.14.0",
        Oi = -1,
        Ls = "en-US",
        hc = "",
        pc = t => "".concat(t.charAt(0).toLocaleUpperCase()).concat(t.substr(1));

    function Iv() {
        return {
            upper: (t, e) => e === "text" && H(t) ? t.toUpperCase() : e === "vnode" && ce(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
            lower: (t, e) => e === "text" && H(t) ? t.toLowerCase() : e === "vnode" && ce(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
            capitalize: (t, e) => e === "text" && H(t) ? pc(t) : e === "vnode" && ce(t) && "__v_isVNode" in t ? pc(t.children) : t
        }
    }
    let Ed;

    function mc(t) {
        Ed = t
    }
    let wd;

    function Rv(t) {
        wd = t
    }
    let $d;

    function Nv(t) {
        $d = t
    }
    let Sd = null;
    const Cv = t => {
            Sd = t
        },
        Lv = () => Sd;
    let Od = null;
    const gc = t => {
            Od = t
        },
        Dv = () => Od;
    let yc = 0;

    function Mv(t = {}) {
        const e = ve(t.onWarn) ? t.onWarn : xy,
            n = H(t.version) ? t.version : Av,
            s = H(t.locale) || ve(t.locale) ? t.locale : Ls,
            r = ve(s) ? Ls : s,
            i = be(t.fallbackLocale) || ee(t.fallbackLocale) || H(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r,
            o = ee(t.messages) ? t.messages : {
                [r]: {}
            },
            a = ee(t.datetimeFormats) ? t.datetimeFormats : {
                [r]: {}
            },
            l = ee(t.numberFormats) ? t.numberFormats : {
                [r]: {}
            },
            c = Ge({}, t.modifiers || {}, Iv()),
            u = t.pluralRules || {},
            f = ve(t.missing) ? t.missing : null,
            d = re(t.missingWarn) || In(t.missingWarn) ? t.missingWarn : !0,
            h = re(t.fallbackWarn) || In(t.fallbackWarn) ? t.fallbackWarn : !0,
            m = !!t.fallbackFormat,
            _ = !!t.unresolving,
            v = ve(t.postTranslation) ? t.postTranslation : null,
            w = ee(t.processor) ? t.processor : null,
            O = re(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
            k = !!t.escapeParameter,
            b = ve(t.messageCompiler) ? t.messageCompiler : Ed,
            E = ve(t.messageResolver) ? t.messageResolver : wd || dv,
            $ = ve(t.localeFallbacker) ? t.localeFallbacker : $d || Ov,
            P = ce(t.fallbackContext) ? t.fallbackContext : void 0,
            R = t,
            A = ce(R.__datetimeFormatters) ? R.__datetimeFormatters : new Map,
            q = ce(R.__numberFormatters) ? R.__numberFormatters : new Map,
            Z = ce(R.__meta) ? R.__meta : {};
        yc++;
        const W = {
            version: n,
            cid: yc,
            locale: s,
            fallbackLocale: i,
            messages: o,
            modifiers: c,
            pluralRules: u,
            missing: f,
            missingWarn: d,
            fallbackWarn: h,
            fallbackFormat: m,
            unresolving: _,
            postTranslation: v,
            processor: w,
            warnHtmlMessage: O,
            escapeParameter: k,
            messageCompiler: b,
            messageResolver: E,
            localeFallbacker: $,
            fallbackContext: P,
            onWarn: e,
            __meta: Z
        };
        return W.datetimeFormats = a, W.numberFormats = l, W.__datetimeFormatters = A, W.__numberFormatters = q, __INTLIFY_PROD_DEVTOOLS__ && Ev(W, n, Z), W
    }

    function Va(t, e, n, s, r) {
        const {
            missing: i,
            onWarn: o
        } = t;
        if (i !== null) {
            const a = i(t, n, e, r);
            return H(a) ? a : e
        } else return e
    }

    function Vs(t, e, n) {
        const s = t;
        s.__localeChainCache = new Map, t.localeFallbacker(t, n, e)
    }

    function Fv(t, e) {
        return t === e ? !1 : t.split("-")[0] === e.split("-")[0]
    }

    function jv(t, e) {
        const n = e.indexOf(t);
        if (n === -1) return !1;
        for (let s = n + 1; s < e.length; s++)
            if (Fv(t, e[s])) return !0;
        return !1
    }

    function so(t) {
        return n => Uv(n, t)
    }

    function Uv(t, e) {
        const n = e.b || e.body;
        if ((n.t || n.type) === 1) {
            const s = n,
                r = s.c || s.cases;
            return t.plural(r.reduce((i, o) => [...i, vc(t, o)], []))
        } else return vc(t, n)
    }

    function vc(t, e) {
        const n = e.s || e.static;
        if (n) return t.type === "text" ? n : t.normalize([n]); {
            const s = (e.i || e.items).reduce((r, i) => [...r, jo(t, i)], []);
            return t.normalize(s)
        }
    }

    function jo(t, e) {
        const n = e.t || e.type;
        switch (n) {
            case 3:
                {
                    const s = e;
                    return s.v || s.value
                }
            case 9:
                {
                    const s = e;
                    return s.v || s.value
                }
            case 4:
                {
                    const s = e;
                    return t.interpolate(t.named(s.k || s.key))
                }
            case 5:
                {
                    const s = e;
                    return t.interpolate(t.list(s.i != null ? s.i : s.index))
                }
            case 6:
                {
                    const s = e,
                        r = s.m || s.modifier;
                    return t.linked(jo(t, s.k || s.key), r ? jo(t, r) : void 0, t.type)
                }
            case 7:
                {
                    const s = e;
                    return s.v || s.value
                }
            case 8:
                {
                    const s = e;
                    return s.v || s.value
                }
            default:
                throw new Error("unhandled node type on format message part: ".concat(n))
        }
    }
    const xd = t => t;
    let bs = Object.create(null);
    const Ds = t => ce(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);

    function Pd(t, e = {}) {
        let n = !1;
        const s = e.onError || Ly;
        return e.onError = r => {
            n = !0, s(r)
        }, xr(Fn({}, rv(t, e)), {
            detectError: n
        })
    }
    const zv = (t, e) => {
        if (!H(t)) throw Kt(Dt.NOT_SUPPORT_NON_STRING_MESSAGE); {
            re(e.warnHtmlMessage) && e.warnHtmlMessage;
            const s = (e.onCacheKey || xd)(t),
                r = bs[s];
            if (r) return r;
            const {
                code: i,
                detectError: o
            } = Pd(t, e), a = new Function("return ".concat(i))();
            return o ? a : bs[s] = a
        }
    };

    function Gv(t, e) {
        if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && H(t)) {
            re(e.warnHtmlMessage) && e.warnHtmlMessage;
            const s = (e.onCacheKey || xd)(t),
                r = bs[s];
            if (r) return r;
            const {
                ast: i,
                detectError: o
            } = Pd(t, xr(Fn({}, e), {
                location: !1,
                jit: !0
            })), a = so(i);
            return o ? a : bs[s] = a
        } else {
            const n = t.cacheKey;
            if (n) {
                const s = bs[n];
                return s || (bs[n] = so(t))
            } else return so(t)
        }
    }
    const bc = () => "",
        $t = t => ve(t);

    function kc(t, ...e) {
        const {
            fallbackFormat: n,
            postTranslation: s,
            unresolving: r,
            messageCompiler: i,
            fallbackLocale: o,
            messages: a
        } = t, [l, c] = Uo(...e), u = re(c.missingWarn) ? c.missingWarn : t.missingWarn, f = re(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, d = re(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, h = !!c.resolvedMessage, m = H(c.default) || re(c.default) ? re(c.default) ? i ? l : () => l : c.default : n ? i ? l : () => l : "", _ = n || m !== "", v = Ba(t, c);
        d && Bv(c);
        let [w, O, k] = h ? [l, v, a[v] || {}] : Ad(t, l, v, o, f, u), b = w, E = l;
        if (!h && !(H(b) || Ds(b) || $t(b)) && _ && (b = m, E = b), !h && (!(H(b) || Ds(b) || $t(b)) || !H(O))) return r ? Oi : l;
        let $ = !1;
        const P = () => {
                $ = !0
            },
            R = $t(b) ? b : Id(t, l, O, b, E, P);
        if ($) return b;
        const A = Wv(t, O, k, c),
            q = kv(A),
            Z = Vv(t, R, q),
            W = s ? s(Z, l) : Z;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            const Y = {
                timestamp: Date.now(),
                key: H(l) ? l : $t(b) ? b.key : "",
                locale: O || ($t(b) ? b.locale : ""),
                format: H(b) ? b : $t(b) ? b.source : "",
                message: W
            };
            Y.meta = Ge({}, t.__meta, Lv() || {}), wv(Y)
        }
        return W
    }

    function Bv(t) {
        be(t.list) ? t.list = t.list.map(e => H(e) ? ic(e) : e) : ce(t.named) && Object.keys(t.named).forEach(e => {
            H(t.named[e]) && (t.named[e] = ic(t.named[e]))
        })
    }

    function Ad(t, e, n, s, r, i) {
        const {
            messages: o,
            onWarn: a,
            messageResolver: l,
            localeFallbacker: c
        } = t, u = c(t, s, n);
        let f = {},
            d, h = null;
        const m = "translate";
        for (let _ = 0; _ < u.length && (d = u[_], f = o[d] || {}, (h = l(f, e)) === null && (h = f[e]), !(H(h) || Ds(h) || $t(h))); _++)
            if (!jv(d, u)) {
                const v = Va(t, e, d, i, m);
                v !== e && (h = v)
            }
        return [h, d, f]
    }

    function Id(t, e, n, s, r, i) {
        const {
            messageCompiler: o,
            warnHtmlMessage: a
        } = t;
        if ($t(s)) {
            const c = s;
            return c.locale = c.locale || n, c.key = c.key || e, c
        }
        if (o == null) {
            const c = () => s;
            return c.locale = n, c.key = e, c
        }
        const l = o(s, Hv(t, n, r, s, a, i));
        return l.locale = n, l.key = e, l.source = s, l
    }

    function Vv(t, e, n) {
        return e(n)
    }

    function Uo(...t) {
        const [e, n, s] = t, r = {};
        if (!H(e) && !Ne(e) && !$t(e) && !Ds(e)) throw Kt(Dt.INVALID_ARGUMENT);
        const i = Ne(e) ? String(e) : ($t(e), e);
        return Ne(n) ? r.plural = n : H(n) ? r.default = n : ee(n) && !$i(n) ? r.named = n : be(n) && (r.list = n), Ne(s) ? r.plural = s : H(s) ? r.default = s : ee(s) && Ge(r, s), [i, r]
    }

    function Hv(t, e, n, s, r, i) {
        return {
            locale: e,
            key: n,
            warnHtmlMessage: r,
            onError: o => {
                throw i && i(o), o
            },
            onCacheKey: o => ky(e, n, o)
        }
    }

    function Wv(t, e, n, s) {
        const {
            modifiers: r,
            pluralRules: i,
            messageResolver: o,
            fallbackLocale: a,
            fallbackWarn: l,
            missingWarn: c,
            fallbackContext: u
        } = t, d = {
            locale: e,
            modifiers: r,
            pluralRules: i,
            messages: h => {
                let m = o(n, h);
                if (m == null && u) {
                    const [, , _] = Ad(u, h, e, a, l, c);
                    m = o(_, h)
                }
                if (H(m) || Ds(m)) {
                    let _ = !1;
                    const w = Id(t, h, e, m, h, () => {
                        _ = !0
                    });
                    return _ ? bc : w
                } else return $t(m) ? m : bc
            }
        };
        return t.processor && (d.processor = t.processor), s.list && (d.list = s.list), s.named && (d.named = s.named), Ne(s.plural) && (d.pluralIndex = s.plural), d
    }

    function Tc(t, ...e) {
        const {
            datetimeFormats: n,
            unresolving: s,
            fallbackLocale: r,
            onWarn: i,
            localeFallbacker: o
        } = t, {
            __datetimeFormatters: a
        } = t, [l, c, u, f] = zo(...e), d = re(u.missingWarn) ? u.missingWarn : t.missingWarn;
        re(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
        const h = !!u.part,
            m = Ba(t, u),
            _ = o(t, r, m);
        if (!H(l) || l === "") return new Intl.DateTimeFormat(m, f).format(c);
        let v = {},
            w, O = null;
        const k = "datetime format";
        for (let $ = 0; $ < _.length && (w = _[$], v = n[w] || {}, O = v[l], !ee(O)); $++) Va(t, l, w, d, k);
        if (!ee(O) || !H(w)) return s ? Oi : l;
        let b = "".concat(w, "__").concat(l);
        $i(f) || (b = "".concat(b, "__").concat(JSON.stringify(f)));
        let E = a.get(b);
        return E || (E = new Intl.DateTimeFormat(w, Ge({}, O, f)), a.set(b, E)), h ? E.formatToParts(c) : E.format(c)
    }
    const Rd = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function zo(...t) {
        const [e, n, s, r] = t, i = {};
        let o = {},
            a;
        if (H(e)) {
            const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!l) throw Kt(Dt.INVALID_ISO_DATE_ARGUMENT);
            const c = l[3] ? l[3].trim().startsWith("T") ? "".concat(l[1].trim()).concat(l[3].trim()) : "".concat(l[1].trim(), "T").concat(l[3].trim()) : l[1].trim();
            a = new Date(c);
            try {
                a.toISOString()
            } catch (u) {
                throw Kt(Dt.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (Ey(e)) {
            if (isNaN(e.getTime())) throw Kt(Dt.INVALID_DATE_ARGUMENT);
            a = e
        } else if (Ne(e)) a = e;
        else throw Kt(Dt.INVALID_ARGUMENT);
        return H(n) ? i.key = n : ee(n) && Object.keys(n).forEach(l => {
            Rd.includes(l) ? o[l] = n[l] : i[l] = n[l]
        }), H(s) ? i.locale = s : ee(s) && (o = s), ee(r) && (o = r), [i.key || "", a, i, o]
    }

    function Ec(t, e, n) {
        const s = t;
        for (const r in n) {
            const i = "".concat(e, "__").concat(r);
            s.__datetimeFormatters.has(i) && s.__datetimeFormatters.delete(i)
        }
    }

    function wc(t, ...e) {
        const {
            numberFormats: n,
            unresolving: s,
            fallbackLocale: r,
            onWarn: i,
            localeFallbacker: o
        } = t, {
            __numberFormatters: a
        } = t, [l, c, u, f] = Go(...e), d = re(u.missingWarn) ? u.missingWarn : t.missingWarn;
        re(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
        const h = !!u.part,
            m = Ba(t, u),
            _ = o(t, r, m);
        if (!H(l) || l === "") return new Intl.NumberFormat(m, f).format(c);
        let v = {},
            w, O = null;
        const k = "number format";
        for (let $ = 0; $ < _.length && (w = _[$], v = n[w] || {}, O = v[l], !ee(O)); $++) Va(t, l, w, d, k);
        if (!ee(O) || !H(w)) return s ? Oi : l;
        let b = "".concat(w, "__").concat(l);
        $i(f) || (b = "".concat(b, "__").concat(JSON.stringify(f)));
        let E = a.get(b);
        return E || (E = new Intl.NumberFormat(w, Ge({}, O, f)), a.set(b, E)), h ? E.formatToParts(c) : E.format(c)
    }
    const Nd = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function Go(...t) {
        const [e, n, s, r] = t, i = {};
        let o = {};
        if (!Ne(e)) throw Kt(Dt.INVALID_ARGUMENT);
        const a = e;
        return H(n) ? i.key = n : ee(n) && Object.keys(n).forEach(l => {
            Nd.includes(l) ? o[l] = n[l] : i[l] = n[l]
        }), H(s) ? i.locale = s : ee(s) && (o = s), ee(r) && (o = r), [i.key || "", a, i, o]
    }

    function $c(t, e, n) {
        const s = t;
        for (const r in n) {
            const i = "".concat(e, "__").concat(r);
            s.__numberFormatters.has(i) && s.__numberFormatters.delete(i)
        }
    }
    iv();
    /*!
     * vue-i18n v9.14.0
     * (c) 2024 kazuya kawaguchi
     * Released under the MIT License.
     */
    const qv = "9.14.0";

    function Kv() {
        typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ln().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ln().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ln().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ln().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ln().__INTLIFY_PROD_DEVTOOLS__ = !1)
    }
    const Cd = Sv.__EXTEND_POINT__,
        sn = Si(Cd);
    sn(), sn(), sn(), sn(), sn(), sn(), sn(), sn(), sn();
    const Ld = Dt.__EXTEND_POINT__,
        rt = Si(Ld),
        Ce = {
            UNEXPECTED_RETURN_TYPE: Ld,
            INVALID_ARGUMENT: rt(),
            MUST_BE_CALL_SETUP_TOP: rt(),
            NOT_INSTALLED: rt(),
            NOT_AVAILABLE_IN_LEGACY_MODE: rt(),
            REQUIRED_VALUE: rt(),
            INVALID_VALUE: rt(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: rt(),
            NOT_INSTALLED_WITH_PROVIDE: rt(),
            UNEXPECTED_ERROR: rt(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: rt(),
            BRIDGE_SUPPORT_VUE_2_ONLY: rt(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: rt(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: rt(),
            __EXTEND_POINT__: rt()
        };

    function je(t, ...e) {
        return js(t, null, void 0)
    }
    const Bo = Dn("__translateVNode"),
        Vo = Dn("__datetimeParts"),
        Ho = Dn("__numberParts"),
        Dd = Dn("__setPluralRules"),
        Md = Dn("__injectWithOption"),
        Wo = Dn("__dispose");

    function br(t) {
        if (!ce(t)) return t;
        for (const e in t)
            if (ai(t, e))
                if (!e.includes(".")) ce(t[e]) && br(t[e]);
                else {
                    const n = e.split("."),
                        s = n.length - 1;
                    let r = t,
                        i = !1;
                    for (let o = 0; o < s; o++) {
                        if (n[o] in r || (r[n[o]] = {}), !ce(r[n[o]])) {
                            i = !0;
                            break
                        }
                        r = r[n[o]]
                    }
                    i || (r[n[s]] = t[e], delete t[e]), ce(r[n[s]]) && br(r[n[s]])
                }
        return t
    }

    function xi(t, e) {
        const {
            messages: n,
            __i18n: s,
            messageResolver: r,
            flatJson: i
        } = e, o = ee(n) ? n : be(s) ? {} : {
            [t]: {}
        };
        if (be(s) && s.forEach(a => {
                if ("locale" in a && "resource" in a) {
                    const {
                        locale: l,
                        resource: c
                    } = a;
                    l ? (o[l] = o[l] || {}, Wr(c, o[l])) : Wr(c, o)
                } else H(a) && Wr(JSON.parse(a), o)
            }), r == null && i)
            for (const a in o) ai(o, a) && br(o[a]);
        return o
    }

    function Fd(t) {
        return t.type
    }

    function jd(t, e, n) {
        let s = ce(e.messages) ? e.messages : {};
        "__i18nGlobal" in n && (s = xi(t.locale.value, {
            messages: s,
            __i18n: n.__i18nGlobal
        }));
        const r = Object.keys(s);
        r.length && r.forEach(i => {
            t.mergeLocaleMessage(i, s[i])
        }); {
            if (ce(e.datetimeFormats)) {
                const i = Object.keys(e.datetimeFormats);
                i.length && i.forEach(o => {
                    t.mergeDateTimeFormat(o, e.datetimeFormats[o])
                })
            }
            if (ce(e.numberFormats)) {
                const i = Object.keys(e.numberFormats);
                i.length && i.forEach(o => {
                    t.mergeNumberFormat(o, e.numberFormats[o])
                })
            }
        }
    }

    function Sc(t) {
        return st(Tr, null, t, 0)
    }
    const Oc = "__INTLIFY_META__",
        xc = () => [],
        Yv = () => !1;
    let Pc = 0;

    function Ac(t) {
        return (e, n, s, r) => t(n, s, ur() || void 0, r)
    }
    const Xv = () => {
        const t = ur();
        let e = null;
        return t && (e = Fd(t)[Oc]) ? {
            [Oc]: e
        } : null
    };

    function Ha(t = {}, e) {
        const {
            __root: n,
            __injectWithOption: s
        } = t, r = n === void 0, i = t.flatJson, o = oi ? Ve : cu, a = !!t.translateExistCompatible;
        let l = re(t.inheritLocale) ? t.inheritLocale : !0;
        const c = o(n && l ? n.locale.value : H(t.locale) ? t.locale : Ls),
            u = o(n && l ? n.fallbackLocale.value : H(t.fallbackLocale) || be(t.fallbackLocale) || ee(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : c.value),
            f = o(xi(c.value, t)),
            d = o(ee(t.datetimeFormats) ? t.datetimeFormats : {
                [c.value]: {}
            }),
            h = o(ee(t.numberFormats) ? t.numberFormats : {
                [c.value]: {}
            });
        let m = n ? n.missingWarn : re(t.missingWarn) || In(t.missingWarn) ? t.missingWarn : !0,
            _ = n ? n.fallbackWarn : re(t.fallbackWarn) || In(t.fallbackWarn) ? t.fallbackWarn : !0,
            v = n ? n.fallbackRoot : re(t.fallbackRoot) ? t.fallbackRoot : !0,
            w = !!t.fallbackFormat,
            O = ve(t.missing) ? t.missing : null,
            k = ve(t.missing) ? Ac(t.missing) : null,
            b = ve(t.postTranslation) ? t.postTranslation : null,
            E = n ? n.warnHtmlMessage : re(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
            $ = !!t.escapeParameter;
        const P = n ? n.modifiers : ee(t.modifiers) ? t.modifiers : {};
        let R = t.pluralRules || n && n.pluralRules,
            A;
        A = (() => {
            r && gc(null);
            const x = {
                version: qv,
                locale: c.value,
                fallbackLocale: u.value,
                messages: f.value,
                modifiers: P,
                pluralRules: R,
                missing: k === null ? void 0 : k,
                missingWarn: m,
                fallbackWarn: _,
                fallbackFormat: w,
                unresolving: !0,
                postTranslation: b === null ? void 0 : b,
                warnHtmlMessage: E,
                escapeParameter: $,
                messageResolver: t.messageResolver,
                messageCompiler: t.messageCompiler,
                __meta: {
                    framework: "vue"
                }
            };
            x.datetimeFormats = d.value, x.numberFormats = h.value, x.__datetimeFormatters = ee(A) ? A.__datetimeFormatters : void 0, x.__numberFormatters = ee(A) ? A.__numberFormatters : void 0;
            const C = Mv(x);
            return r && gc(C), C
        })(), Vs(A, c.value, u.value);

        function Z() {
            return [c.value, u.value, f.value, d.value, h.value]
        }
        const W = Ct({
                get: () => c.value,
                set: x => {
                    c.value = x, A.locale = c.value
                }
            }),
            Y = Ct({
                get: () => u.value,
                set: x => {
                    u.value = x, A.fallbackLocale = u.value, Vs(A, c.value, x)
                }
            }),
            ae = Ct(() => f.value),
            fe = Ct(() => d.value),
            J = Ct(() => h.value);

        function L() {
            return ve(b) ? b : null
        }

        function G(x) {
            b = x, A.postTranslation = x
        }

        function Te() {
            return O
        }

        function _e(x) {
            x !== null && (k = Ac(x)), O = x, A.missing = k
        }
        const de = (x, C, K, X, Se, Pe) => {
            Z();
            let Me;
            try {
                __INTLIFY_PROD_DEVTOOLS__,
                r || (A.fallbackContext = n ? Dv() : void 0),
                Me = x(A)
            }
            finally {
                __INTLIFY_PROD_DEVTOOLS__,
                r || (A.fallbackContext = void 0)
            }
            if (K !== "translate exists" && Ne(Me) && Me === Oi || K === "translate exists" && !Me) {
                const [Je, fs] = C();
                return n && v ? X(n) : Se(Je)
            } else {
                if (Pe(Me)) return Me;
                throw je(Ce.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ie(...x) {
            return de(C => Reflect.apply(kc, null, [C, ...x]), () => Uo(...x), "translate", C => Reflect.apply(C.t, C, [...x]), C => C, C => H(C))
        }

        function Pt(...x) {
            const [C, K, X] = x;
            if (X && !ce(X)) throw je(Ce.INVALID_ARGUMENT);
            return ie(C, K, Ge({
                resolvedMessage: !0
            }, X || {}))
        }

        function De(...x) {
            return de(C => Reflect.apply(Tc, null, [C, ...x]), () => zo(...x), "datetime format", C => Reflect.apply(C.d, C, [...x]), () => hc, C => H(C))
        }

        function Xe(...x) {
            return de(C => Reflect.apply(wc, null, [C, ...x]), () => Go(...x), "number format", C => Reflect.apply(C.n, C, [...x]), () => hc, C => H(C))
        }

        function At(x) {
            return x.map(C => H(C) || Ne(C) || re(C) ? Sc(String(C)) : C)
        }
        const en = {
            normalize: At,
            interpolate: x => x,
            type: "vnode"
        };

        function _n(...x) {
            return de(C => {
                let K;
                const X = C;
                try {
                    X.processor = en, K = Reflect.apply(kc, null, [X, ...x])
                } finally {
                    X.processor = null
                }
                return K
            }, () => Uo(...x), "translate", C => C[Bo](...x), C => [Sc(C)], C => be(C))
        }

        function Et(...x) {
            return de(C => Reflect.apply(wc, null, [C, ...x]), () => Go(...x), "number format", C => C[Ho](...x), xc, C => H(C) || be(C))
        }

        function hn(...x) {
            return de(C => Reflect.apply(Tc, null, [C, ...x]), () => zo(...x), "datetime format", C => C[Vo](...x), xc, C => H(C) || be(C))
        }

        function pn(x) {
            R = x, A.pluralRules = R
        }

        function T(x, C) {
            return de(() => {
                if (!x) return !1;
                const K = H(C) ? C : c.value,
                    X = U(K),
                    Se = A.messageResolver(X, x);
                return a ? Se != null : Ds(Se) || $t(Se) || H(Se)
            }, () => [x], "translate exists", K => Reflect.apply(K.te, K, [x, C]), Yv, K => re(K))
        }

        function y(x) {
            let C = null;
            const K = Td(A, u.value, c.value);
            for (let X = 0; X < K.length; X++) {
                const Se = f.value[K[X]] || {},
                    Pe = A.messageResolver(Se, x);
                if (Pe != null) {
                    C = Pe;
                    break
                }
            }
            return C
        }

        function I(x) {
            const C = y(x);
            return C != null ? C : n ? n.tm(x) || {} : {}
        }

        function U(x) {
            return f.value[x] || {}
        }

        function D(x, C) {
            if (i) {
                const K = {
                    [x]: C
                };
                for (const X in K) ai(K, X) && br(K[X]);
                C = K[x]
            }
            f.value[x] = C, A.messages = f.value
        }

        function F(x, C) {
            f.value[x] = f.value[x] || {};
            const K = {
                [x]: C
            };
            if (i)
                for (const X in K) ai(K, X) && br(K[X]);
            C = K[x], Wr(C, f.value[x]), A.messages = f.value
        }

        function V(x) {
            return d.value[x] || {}
        }

        function p(x, C) {
            d.value[x] = C, A.datetimeFormats = d.value, Ec(A, x, C)
        }

        function g(x, C) {
            d.value[x] = Ge(d.value[x] || {}, C), A.datetimeFormats = d.value, Ec(A, x, C)
        }

        function S(x) {
            return h.value[x] || {}
        }

        function M(x, C) {
            h.value[x] = C, A.numberFormats = h.value, $c(A, x, C)
        }

        function z(x, C) {
            h.value[x] = Ge(h.value[x] || {}, C), A.numberFormats = h.value, $c(A, x, C)
        }
        Pc++, n && oi && ($n(n.locale, x => {
            l && (c.value = x, A.locale = x, Vs(A, c.value, u.value))
        }), $n(n.fallbackLocale, x => {
            l && (u.value = x, A.fallbackLocale = x, Vs(A, c.value, u.value))
        }));
        const j = {
            id: Pc,
            locale: W,
            fallbackLocale: Y,
            get inheritLocale() {
                return l
            },
            set inheritLocale(x) {
                l = x, x && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, Vs(A, c.value, u.value))
            },
            get availableLocales() {
                return Object.keys(f.value).sort()
            },
            messages: ae,
            get modifiers() {
                return P
            },
            get pluralRules() {
                return R || {}
            },
            get isGlobal() {
                return r
            },
            get missingWarn() {
                return m
            },
            set missingWarn(x) {
                m = x, A.missingWarn = m
            },
            get fallbackWarn() {
                return _
            },
            set fallbackWarn(x) {
                _ = x, A.fallbackWarn = _
            },
            get fallbackRoot() {
                return v
            },
            set fallbackRoot(x) {
                v = x
            },
            get fallbackFormat() {
                return w
            },
            set fallbackFormat(x) {
                w = x, A.fallbackFormat = w
            },
            get warnHtmlMessage() {
                return E
            },
            set warnHtmlMessage(x) {
                E = x, A.warnHtmlMessage = x
            },
            get escapeParameter() {
                return $
            },
            set escapeParameter(x) {
                $ = x, A.escapeParameter = x
            },
            t: ie,
            getLocaleMessage: U,
            setLocaleMessage: D,
            mergeLocaleMessage: F,
            getPostTranslationHandler: L,
            setPostTranslationHandler: G,
            getMissingHandler: Te,
            setMissingHandler: _e,
            [Dd]: pn
        };
        return j.datetimeFormats = fe, j.numberFormats = J, j.rt = Pt, j.te = T, j.tm = I, j.d = De, j.n = Xe, j.getDateTimeFormat = V, j.setDateTimeFormat = p, j.mergeDateTimeFormat = g, j.getNumberFormat = S, j.setNumberFormat = M, j.mergeNumberFormat = z, j[Md] = s, j[Bo] = _n, j[Vo] = hn, j[Ho] = Et, j
    }

    function Jv(t) {
        const e = H(t.locale) ? t.locale : Ls,
            n = H(t.fallbackLocale) || be(t.fallbackLocale) || ee(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : e,
            s = ve(t.missing) ? t.missing : void 0,
            r = re(t.silentTranslationWarn) || In(t.silentTranslationWarn) ? !t.silentTranslationWarn : !0,
            i = re(t.silentFallbackWarn) || In(t.silentFallbackWarn) ? !t.silentFallbackWarn : !0,
            o = re(t.fallbackRoot) ? t.fallbackRoot : !0,
            a = !!t.formatFallbackMessages,
            l = ee(t.modifiers) ? t.modifiers : {},
            c = t.pluralizationRules,
            u = ve(t.postTranslation) ? t.postTranslation : void 0,
            f = H(t.warnHtmlInMessage) ? t.warnHtmlInMessage !== "off" : !0,
            d = !!t.escapeParameterHtml,
            h = re(t.sync) ? t.sync : !0;
        let m = t.messages;
        if (ee(t.sharedMessages)) {
            const $ = t.sharedMessages;
            m = Object.keys($).reduce((R, A) => {
                const q = R[A] || (R[A] = {});
                return Ge(q, $[A]), R
            }, m || {})
        }
        const {
            __i18n: _,
            __root: v,
            __injectWithOption: w
        } = t, O = t.datetimeFormats, k = t.numberFormats, b = t.flatJson, E = t.translateExistCompatible;
        return {
            locale: e,
            fallbackLocale: n,
            messages: m,
            flatJson: b,
            datetimeFormats: O,
            numberFormats: k,
            missing: s,
            missingWarn: r,
            fallbackWarn: i,
            fallbackRoot: o,
            fallbackFormat: a,
            modifiers: l,
            pluralRules: c,
            postTranslation: u,
            warnHtmlMessage: f,
            escapeParameter: d,
            messageResolver: t.messageResolver,
            inheritLocale: h,
            translateExistCompatible: E,
            __i18n: _,
            __root: v,
            __injectWithOption: w
        }
    }

    function qo(t = {}, e) {
        {
            const n = Ha(Jv(t)),
                {
                    __extender: s
                } = t,
                r = {
                    id: n.id,
                    get locale() {
                        return n.locale.value
                    },
                    set locale(i) {
                        n.locale.value = i
                    },
                    get fallbackLocale() {
                        return n.fallbackLocale.value
                    },
                    set fallbackLocale(i) {
                        n.fallbackLocale.value = i
                    },
                    get messages() {
                        return n.messages.value
                    },
                    get datetimeFormats() {
                        return n.datetimeFormats.value
                    },
                    get numberFormats() {
                        return n.numberFormats.value
                    },
                    get availableLocales() {
                        return n.availableLocales
                    },
                    get formatter() {
                        return {
                            interpolate() {
                                return []
                            }
                        }
                    },
                    set formatter(i) {},
                    get missing() {
                        return n.getMissingHandler()
                    },
                    set missing(i) {
                        n.setMissingHandler(i)
                    },
                    get silentTranslationWarn() {
                        return re(n.missingWarn) ? !n.missingWarn : n.missingWarn
                    },
                    set silentTranslationWarn(i) {
                        n.missingWarn = re(i) ? !i : i
                    },
                    get silentFallbackWarn() {
                        return re(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
                    },
                    set silentFallbackWarn(i) {
                        n.fallbackWarn = re(i) ? !i : i
                    },
                    get modifiers() {
                        return n.modifiers
                    },
                    get formatFallbackMessages() {
                        return n.fallbackFormat
                    },
                    set formatFallbackMessages(i) {
                        n.fallbackFormat = i
                    },
                    get postTranslation() {
                        return n.getPostTranslationHandler()
                    },
                    set postTranslation(i) {
                        n.setPostTranslationHandler(i)
                    },
                    get sync() {
                        return n.inheritLocale
                    },
                    set sync(i) {
                        n.inheritLocale = i
                    },
                    get warnHtmlInMessage() {
                        return n.warnHtmlMessage ? "warn" : "off"
                    },
                    set warnHtmlInMessage(i) {
                        n.warnHtmlMessage = i !== "off"
                    },
                    get escapeParameterHtml() {
                        return n.escapeParameter
                    },
                    set escapeParameterHtml(i) {
                        n.escapeParameter = i
                    },
                    get preserveDirectiveContent() {
                        return !0
                    },
                    set preserveDirectiveContent(i) {},
                    get pluralizationRules() {
                        return n.pluralRules || {}
                    },
                    __composer: n,
                    t(...i) {
                        const [o, a, l] = i, c = {};
                        let u = null,
                            f = null;
                        if (!H(o)) throw je(Ce.INVALID_ARGUMENT);
                        const d = o;
                        return H(a) ? c.locale = a : be(a) ? u = a : ee(a) && (f = a), be(l) ? u = l : ee(l) && (f = l), Reflect.apply(n.t, n, [d, u || f || {}, c])
                    },
                    rt(...i) {
                        return Reflect.apply(n.rt, n, [...i])
                    },
                    tc(...i) {
                        const [o, a, l] = i, c = {
                            plural: 1
                        };
                        let u = null,
                            f = null;
                        if (!H(o)) throw je(Ce.INVALID_ARGUMENT);
                        const d = o;
                        return H(a) ? c.locale = a : Ne(a) ? c.plural = a : be(a) ? u = a : ee(a) && (f = a), H(l) ? c.locale = l : be(l) ? u = l : ee(l) && (f = l), Reflect.apply(n.t, n, [d, u || f || {}, c])
                    },
                    te(i, o) {
                        return n.te(i, o)
                    },
                    tm(i) {
                        return n.tm(i)
                    },
                    getLocaleMessage(i) {
                        return n.getLocaleMessage(i)
                    },
                    setLocaleMessage(i, o) {
                        n.setLocaleMessage(i, o)
                    },
                    mergeLocaleMessage(i, o) {
                        n.mergeLocaleMessage(i, o)
                    },
                    d(...i) {
                        return Reflect.apply(n.d, n, [...i])
                    },
                    getDateTimeFormat(i) {
                        return n.getDateTimeFormat(i)
                    },
                    setDateTimeFormat(i, o) {
                        n.setDateTimeFormat(i, o)
                    },
                    mergeDateTimeFormat(i, o) {
                        n.mergeDateTimeFormat(i, o)
                    },
                    n(...i) {
                        return Reflect.apply(n.n, n, [...i])
                    },
                    getNumberFormat(i) {
                        return n.getNumberFormat(i)
                    },
                    setNumberFormat(i, o) {
                        n.setNumberFormat(i, o)
                    },
                    mergeNumberFormat(i, o) {
                        n.mergeNumberFormat(i, o)
                    },
                    getChoiceIndex(i, o) {
                        return -1
                    }
                };
            return r.__extender = s, r
        }
    }
    const Wa = {
        tag: {
            type: [String, Object]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: t => t === "parent" || t === "global",
            default: "parent"
        },
        i18n: {
            type: Object
        }
    };

    function Qv({
        slots: t
    }, e) {
        return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((s, r) => [...s, ...r.type === Nt ? r.children : [r]], []) : e.reduce((n, s) => {
            const r = t[s];
            return r && (n[s] = r()), n
        }, {})
    }

    function Ud(t) {
        return Nt
    }
    const Zv = da({
            name: "i18n-t",
            props: Ge({
                keypath: {
                    type: String,
                    required: !0
                },
                plural: {
                    type: [Number, String],
                    validator: t => Ne(t) || !isNaN(t)
                }
            }, Wa),
            setup(t, e) {
                const {
                    slots: n,
                    attrs: s
                } = e, r = t.i18n || Pi({
                    useScope: t.scope,
                    __useComponent: !0
                });
                return () => {
                    const i = Object.keys(n).filter(f => f !== "_"),
                        o = {};
                    t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = H(t.plural) ? +t.plural : t.plural);
                    const a = Qv(e, i),
                        l = r[Bo](t.keypath, a, o),
                        c = Ge({}, s),
                        u = H(t.tag) || ce(t.tag) ? t.tag : Ud();
                    return Bu(u, c, l)
                }
            }
        }),
        Ic = Zv;

    function eb(t) {
        return be(t) && !H(t[0])
    }

    function zd(t, e, n, s) {
        const {
            slots: r,
            attrs: i
        } = e;
        return () => {
            const o = {
                part: !0
            };
            let a = {};
            t.locale && (o.locale = t.locale), H(t.format) ? o.key = t.format : ce(t.format) && (H(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((d, h) => n.includes(h) ? Ge({}, d, {
                [h]: t.format[h]
            }) : d, {}));
            const l = s(t.value, o, a);
            let c = [o.key];
            be(l) ? c = l.map((d, h) => {
                const m = r[d.type],
                    _ = m ? m({
                        [d.type]: d.value,
                        index: h,
                        parts: l
                    }) : [d.value];
                return eb(_) && (_[0].key = "".concat(d.type, "-").concat(h)), _
            }) : H(l) && (c = [l]);
            const u = Ge({}, i),
                f = H(t.tag) || ce(t.tag) ? t.tag : Ud();
            return Bu(f, u, c)
        }
    }
    const tb = da({
            name: "i18n-n",
            props: Ge({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Wa),
            setup(t, e) {
                const n = t.i18n || Pi({
                    useScope: t.scope,
                    __useComponent: !0
                });
                return zd(t, e, Nd, (...s) => n[Ho](...s))
            }
        }),
        Rc = tb,
        nb = da({
            name: "i18n-d",
            props: Ge({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Wa),
            setup(t, e) {
                const n = t.i18n || Pi({
                    useScope: t.scope,
                    __useComponent: !0
                });
                return zd(t, e, Rd, (...s) => n[Vo](...s))
            }
        }),
        Nc = nb;

    function sb(t, e) {
        const n = t;
        if (t.mode === "composition") return n.__getInstance(e) || t.global; {
            const s = n.__getInstance(e);
            return s != null ? s.__composer : t.global.__composer
        }
    }

    function rb(t) {
        const e = o => {
            const {
                instance: a,
                modifiers: l,
                value: c
            } = o;
            if (!a || !a.$) throw je(Ce.UNEXPECTED_ERROR);
            const u = sb(t, a.$),
                f = Cc(c);
            return [Reflect.apply(u.t, u, [...Lc(f)]), u]
        };
        return {
            created: (o, a) => {
                const [l, c] = e(a);
                oi && t.global === c && (o.__i18nWatcher = $n(c.locale, () => {
                    a.instance && a.instance.$forceUpdate()
                })), o.__composer = c, o.textContent = l
            },
            unmounted: o => {
                oi && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
            },
            beforeUpdate: (o, {
                value: a
            }) => {
                if (o.__composer) {
                    const l = o.__composer,
                        c = Cc(a);
                    o.textContent = Reflect.apply(l.t, l, [...Lc(c)])
                }
            },
            getSSRProps: o => {
                const [a] = e(o);
                return {
                    textContent: a
                }
            }
        }
    }

    function Cc(t) {
        if (H(t)) return {
            path: t
        };
        if (ee(t)) {
            if (!("path" in t)) throw je(Ce.REQUIRED_VALUE, "path");
            return t
        } else throw je(Ce.INVALID_VALUE)
    }

    function Lc(t) {
        const {
            path: e,
            locale: n,
            args: s,
            choice: r,
            plural: i
        } = t, o = {}, a = s || {};
        return H(n) && (o.locale = n), Ne(r) && (o.plural = r), Ne(i) && (o.plural = i), [e, a, o]
    }

    function ib(t, e, ...n) {
        const s = ee(n[0]) ? n[0] : {},
            r = !!s.useI18nComponentName;
        (re(s.globalInstall) ? s.globalInstall : !0) && ([r ? "i18n" : Ic.name, "I18nT"].forEach(o => t.component(o, Ic)), [Rc.name, "I18nN"].forEach(o => t.component(o, Rc)), [Nc.name, "I18nD"].forEach(o => t.component(o, Nc))), t.directive("t", rb(e))
    }

    function ob(t, e, n) {
        return {
            beforeCreate() {
                const s = ur();
                if (!s) throw je(Ce.UNEXPECTED_ERROR);
                const r = this.$options;
                if (r.i18n) {
                    const i = r.i18n;
                    if (r.__i18n && (i.__i18n = r.__i18n), i.__root = e, this === this.$root) this.$i18n = Dc(t, i);
                    else {
                        i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = qo(i);
                        const o = this.$i18n;
                        o.__extender && (o.__disposer = o.__extender(this.$i18n))
                    }
                } else if (r.__i18n)
                    if (this === this.$root) this.$i18n = Dc(t, r);
                    else {
                        this.$i18n = qo({
                            __i18n: r.__i18n,
                            __injectWithOption: !0,
                            __extender: n.__vueI18nExtend,
                            __root: e
                        });
                        const i = this.$i18n;
                        i.__extender && (i.__disposer = i.__extender(this.$i18n))
                    }
                else this.$i18n = t;
                r.__i18nGlobal && jd(e, r, r), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, o) => this.$i18n.te(i, o), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = i => this.$i18n.tm(i), n.__setInstance(s, this.$i18n)
            },
            mounted() {},
            unmounted() {
                const s = ur();
                if (!s) throw je(Ce.UNEXPECTED_ERROR);
                const r = this.$i18n;
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), n.__deleteInstance(s), delete this.$i18n
            }
        }
    }

    function Dc(t, e) {
        t.locale = e.locale || t.locale, t.fallbackLocale = e.fallbackLocale || t.fallbackLocale, t.missing = e.missing || t.missing, t.silentTranslationWarn = e.silentTranslationWarn || t.silentFallbackWarn, t.silentFallbackWarn = e.silentFallbackWarn || t.silentFallbackWarn, t.formatFallbackMessages = e.formatFallbackMessages || t.formatFallbackMessages, t.postTranslation = e.postTranslation || t.postTranslation, t.warnHtmlInMessage = e.warnHtmlInMessage || t.warnHtmlInMessage, t.escapeParameterHtml = e.escapeParameterHtml || t.escapeParameterHtml, t.sync = e.sync || t.sync, t.__composer[Dd](e.pluralizationRules || t.pluralizationRules);
        const n = xi(t.locale, {
            messages: e.messages,
            __i18n: e.__i18n
        });
        return Object.keys(n).forEach(s => t.mergeLocaleMessage(s, n[s])), e.datetimeFormats && Object.keys(e.datetimeFormats).forEach(s => t.mergeDateTimeFormat(s, e.datetimeFormats[s])), e.numberFormats && Object.keys(e.numberFormats).forEach(s => t.mergeNumberFormat(s, e.numberFormats[s])), t
    }
    const ab = Dn("global-vue-i18n");

    function lb(t = {}, e) {
        const n = __VUE_I18N_LEGACY_API__ && re(t.legacy) ? t.legacy : __VUE_I18N_LEGACY_API__,
            s = re(t.globalInjection) ? t.globalInjection : !0,
            r = __VUE_I18N_LEGACY_API__ && n ? !!t.allowComposition : !0,
            i = new Map,
            [o, a] = cb(t, n),
            l = Dn("");

        function c(d) {
            return i.get(d) || null
        }

        function u(d, h) {
            i.set(d, h)
        }

        function f(d) {
            i.delete(d)
        } {
            let h;
            const d = {
                get mode() {
                    return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
                },
                get allowComposition() {
                    return r
                },
                install(m, ..._) {
                    return _t(this, null, function*() {
                        if (m.__VUE_I18N_SYMBOL__ = l, m.provide(m.__VUE_I18N_SYMBOL__, d), ee(_[0])) {
                            const O = _[0];
                            d.__composerExtend = O.__composerExtend, d.__vueI18nExtend = O.__vueI18nExtend
                        }
                        let v = null;
                        !n && s && (v = yb(m, d.global)), __VUE_I18N_FULL_INSTALL__ && ib(m, d, ..._), __VUE_I18N_LEGACY_API__ && n && m.mixin(ob(a, a.__composer, d));
                        const w = m.unmount;
                        m.unmount = () => {
                            v && v(), d.dispose(), w()
                        }
                    })
                },
                get global() {
                    return a
                },
                dispose() {
                    o.stop()
                },
                __instances: i,
                __getInstance: c,
                __setInstance: u,
                __deleteInstance: f
            };
            return d
        }
    }

    function Pi(t = {}) {
        const e = ur();
        if (e == null) throw je(Ce.MUST_BE_CALL_SETUP_TOP);
        if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__) throw je(Ce.NOT_INSTALLED);
        const n = ub(e),
            s = db(n),
            r = Fd(e),
            i = fb(t, r);
        if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !t.__useComponent) {
            if (!n.allowComposition) throw je(Ce.NOT_AVAILABLE_IN_LEGACY_MODE);
            return mb(e, i, s, t)
        }
        if (i === "global") return jd(s, t, r), s;
        if (i === "parent") {
            let l = _b(n, e, t.__useComponent);
            return l == null && (l = s), l
        }
        const o = n;
        let a = o.__getInstance(e);
        if (a == null) {
            const l = Ge({}, t);
            "__i18n" in r && (l.__i18n = r.__i18n), s && (l.__root = s), a = Ha(l), o.__composerExtend && (a[Wo] = o.__composerExtend(a)), pb(o, e, a), o.__setInstance(e, a)
        }
        return a
    }

    function cb(t, e, n) {
        const s = l_(); {
            const r = __VUE_I18N_LEGACY_API__ && e ? s.run(() => qo(t)) : s.run(() => Ha(t));
            if (r == null) throw je(Ce.UNEXPECTED_ERROR);
            return [s, r]
        }
    }

    function ub(t) {
        {
            const e = Zs(t.isCE ? ab : t.appContext.app.__VUE_I18N_SYMBOL__);
            if (!e) throw je(t.isCE ? Ce.NOT_INSTALLED_WITH_PROVIDE : Ce.UNEXPECTED_ERROR);
            return e
        }
    }

    function fb(t, e) {
        return $i(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local"
    }

    function db(t) {
        return t.mode === "composition" ? t.global : t.global.__composer
    }

    function _b(t, e, n = !1) {
        let s = null;
        const r = e.root;
        let i = hb(e, n);
        for (; i != null;) {
            const o = t;
            if (t.mode === "composition") s = o.__getInstance(i);
            else if (__VUE_I18N_LEGACY_API__) {
                const a = o.__getInstance(i);
                a != null && (s = a.__composer, n && s && !s[Md] && (s = null))
            }
            if (s != null || r === i) break;
            i = i.parent
        }
        return s
    }

    function hb(t, e = !1) {
        return t == null ? null : e && t.vnode.ctx || t.parent
    }

    function pb(t, e, n) {
        _a(() => {}, e), ha(() => {
            const s = n;
            t.__deleteInstance(e);
            const r = s[Wo];
            r && (r(), delete s[Wo])
        }, e)
    }

    function mb(t, e, n, s = {}) {
        const r = e === "local",
            i = cu(null);
        if (r && t.proxy && !(t.proxy.$options.i18n || t.proxy.$options.__i18n)) throw je(Ce.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const o = re(s.inheritLocale) ? s.inheritLocale : !H(s.locale),
            a = Ve(!r || o ? n.locale.value : H(s.locale) ? s.locale : Ls),
            l = Ve(!r || o ? n.fallbackLocale.value : H(s.fallbackLocale) || be(s.fallbackLocale) || ee(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : a.value),
            c = Ve(xi(a.value, s)),
            u = Ve(ee(s.datetimeFormats) ? s.datetimeFormats : {
                [a.value]: {}
            }),
            f = Ve(ee(s.numberFormats) ? s.numberFormats : {
                [a.value]: {}
            }),
            d = r ? n.missingWarn : re(s.missingWarn) || In(s.missingWarn) ? s.missingWarn : !0,
            h = r ? n.fallbackWarn : re(s.fallbackWarn) || In(s.fallbackWarn) ? s.fallbackWarn : !0,
            m = r ? n.fallbackRoot : re(s.fallbackRoot) ? s.fallbackRoot : !0,
            _ = !!s.fallbackFormat,
            v = ve(s.missing) ? s.missing : null,
            w = ve(s.postTranslation) ? s.postTranslation : null,
            O = r ? n.warnHtmlMessage : re(s.warnHtmlMessage) ? s.warnHtmlMessage : !0,
            k = !!s.escapeParameter,
            b = r ? n.modifiers : ee(s.modifiers) ? s.modifiers : {},
            E = s.pluralRules || r && n.pluralRules;

        function $() {
            return [a.value, l.value, c.value, u.value, f.value]
        }
        const P = Ct({
                get: () => i.value ? i.value.locale.value : a.value,
                set: y => {
                    i.value && (i.value.locale.value = y), a.value = y
                }
            }),
            R = Ct({
                get: () => i.value ? i.value.fallbackLocale.value : l.value,
                set: y => {
                    i.value && (i.value.fallbackLocale.value = y), l.value = y
                }
            }),
            A = Ct(() => i.value ? i.value.messages.value : c.value),
            q = Ct(() => u.value),
            Z = Ct(() => f.value);

        function W() {
            return i.value ? i.value.getPostTranslationHandler() : w
        }

        function Y(y) {
            i.value && i.value.setPostTranslationHandler(y)
        }

        function ae() {
            return i.value ? i.value.getMissingHandler() : v
        }

        function fe(y) {
            i.value && i.value.setMissingHandler(y)
        }

        function J(y) {
            return $(), y()
        }

        function L(...y) {
            return i.value ? J(() => Reflect.apply(i.value.t, null, [...y])) : J(() => "")
        }

        function G(...y) {
            return i.value ? Reflect.apply(i.value.rt, null, [...y]) : ""
        }

        function Te(...y) {
            return i.value ? J(() => Reflect.apply(i.value.d, null, [...y])) : J(() => "")
        }

        function _e(...y) {
            return i.value ? J(() => Reflect.apply(i.value.n, null, [...y])) : J(() => "")
        }

        function de(y) {
            return i.value ? i.value.tm(y) : {}
        }

        function ie(y, I) {
            return i.value ? i.value.te(y, I) : !1
        }

        function Pt(y) {
            return i.value ? i.value.getLocaleMessage(y) : {}
        }

        function De(y, I) {
            i.value && (i.value.setLocaleMessage(y, I), c.value[y] = I)
        }

        function Xe(y, I) {
            i.value && i.value.mergeLocaleMessage(y, I)
        }

        function At(y) {
            return i.value ? i.value.getDateTimeFormat(y) : {}
        }

        function Zt(y, I) {
            i.value && (i.value.setDateTimeFormat(y, I), u.value[y] = I)
        }

        function en(y, I) {
            i.value && i.value.mergeDateTimeFormat(y, I)
        }

        function _n(y) {
            return i.value ? i.value.getNumberFormat(y) : {}
        }

        function Et(y, I) {
            i.value && (i.value.setNumberFormat(y, I), f.value[y] = I)
        }

        function hn(y, I) {
            i.value && i.value.mergeNumberFormat(y, I)
        }
        const pn = {
            get id() {
                return i.value ? i.value.id : -1
            },
            locale: P,
            fallbackLocale: R,
            messages: A,
            datetimeFormats: q,
            numberFormats: Z,
            get inheritLocale() {
                return i.value ? i.value.inheritLocale : o
            },
            set inheritLocale(y) {
                i.value && (i.value.inheritLocale = y)
            },
            get availableLocales() {
                return i.value ? i.value.availableLocales : Object.keys(c.value)
            },
            get modifiers() {
                return i.value ? i.value.modifiers : b
            },
            get pluralRules() {
                return i.value ? i.value.pluralRules : E
            },
            get isGlobal() {
                return i.value ? i.value.isGlobal : !1
            },
            get missingWarn() {
                return i.value ? i.value.missingWarn : d
            },
            set missingWarn(y) {
                i.value && (i.value.missingWarn = y)
            },
            get fallbackWarn() {
                return i.value ? i.value.fallbackWarn : h
            },
            set fallbackWarn(y) {
                i.value && (i.value.missingWarn = y)
            },
            get fallbackRoot() {
                return i.value ? i.value.fallbackRoot : m
            },
            set fallbackRoot(y) {
                i.value && (i.value.fallbackRoot = y)
            },
            get fallbackFormat() {
                return i.value ? i.value.fallbackFormat : _
            },
            set fallbackFormat(y) {
                i.value && (i.value.fallbackFormat = y)
            },
            get warnHtmlMessage() {
                return i.value ? i.value.warnHtmlMessage : O
            },
            set warnHtmlMessage(y) {
                i.value && (i.value.warnHtmlMessage = y)
            },
            get escapeParameter() {
                return i.value ? i.value.escapeParameter : k
            },
            set escapeParameter(y) {
                i.value && (i.value.escapeParameter = y)
            },
            t: L,
            getPostTranslationHandler: W,
            setPostTranslationHandler: Y,
            getMissingHandler: ae,
            setMissingHandler: fe,
            rt: G,
            d: Te,
            n: _e,
            tm: de,
            te: ie,
            getLocaleMessage: Pt,
            setLocaleMessage: De,
            mergeLocaleMessage: Xe,
            getDateTimeFormat: At,
            setDateTimeFormat: Zt,
            mergeDateTimeFormat: en,
            getNumberFormat: _n,
            setNumberFormat: Et,
            mergeNumberFormat: hn
        };

        function T(y) {
            y.locale.value = a.value, y.fallbackLocale.value = l.value, Object.keys(c.value).forEach(I => {
                y.mergeLocaleMessage(I, c.value[I])
            }), Object.keys(u.value).forEach(I => {
                y.mergeDateTimeFormat(I, u.value[I])
            }), Object.keys(f.value).forEach(I => {
                y.mergeNumberFormat(I, f.value[I])
            }), y.escapeParameter = k, y.fallbackFormat = _, y.fallbackRoot = m, y.fallbackWarn = h, y.missingWarn = d, y.warnHtmlMessage = O
        }
        return ku(() => {
            if (t.proxy == null || t.proxy.$i18n == null) throw je(Ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const y = i.value = t.proxy.$i18n.__composer;
            e === "global" ? (a.value = y.locale.value, l.value = y.fallbackLocale.value, c.value = y.messages.value, u.value = y.datetimeFormats.value, f.value = y.numberFormats.value) : r && T(y)
        }), pn
    }
    const gb = ["locale", "fallbackLocale", "availableLocales"],
        Mc = ["t", "rt", "d", "n", "tm", "te"];

    function yb(t, e) {
        const n = Object.create(null);
        return gb.forEach(r => {
            const i = Object.getOwnPropertyDescriptor(e, r);
            if (!i) throw je(Ce.UNEXPECTED_ERROR);
            const o = ze(i.value) ? {
                get() {
                    return i.value.value
                },
                set(a) {
                    i.value.value = a
                }
            } : {
                get() {
                    return i.get && i.get()
                }
            };
            Object.defineProperty(n, r, o)
        }), t.config.globalProperties.$i18n = n, Mc.forEach(r => {
            const i = Object.getOwnPropertyDescriptor(e, r);
            if (!i || !i.value) throw je(Ce.UNEXPECTED_ERROR);
            Object.defineProperty(t.config.globalProperties, "$".concat(r), i)
        }), () => {
            delete t.config.globalProperties.$i18n, Mc.forEach(r => {
                delete t.config.globalProperties["$".concat(r)]
            })
        }
    }
    Kv();
    __INTLIFY_JIT_COMPILATION__ ? mc(Gv) : mc(zv);
    Rv(_v);
    Nv(Td);
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const t = ln();
        t.__INTLIFY__ = !0, Tv(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
    }
    const vb = {
            class: "mainContent"
        },
        bb = {
            class: "content"
        },
        kb = {
            class: "header"
        },
        Tb = {
            key: 0,
            class: "success"
        },
        Eb = {
            class: "loadGlowImage"
        },
        wb = {
            class: "statusImage"
        },
        $b = {
            class: "shieldImage"
        },
        Sb = {
            class: "text"
        },
        Ob = {
            class: "green"
        },
        xb = ["innerHTML"],
        Pb = {
            class: "loadScaleImage"
        },
        Ab = ["src"],
        Ib = {
            key: 0
        },
        Rb = {
            key: 1
        },
        Nb = {
            class: "steps"
        },
        Cb = {
            class: "white"
        },
        Lb = {
            class: "white"
        },
        Db = {
            key: 2
        },
        Mb = ["innerHTML"],
        Fb = {
            key: 3
        },
        jb = ["innerHTML"],
        Ub = {
            key: 3,
            class: "load"
        },
        zb = "AR FA UR",
        Gb = {
            __name: "App",
            setup(t) {
                const e = Ve(""),
                    n = Ve("load"),
                    s = Ve(0);
                let r = Ve({
                    width: 414,
                    height: 736
                });
                const i = Ve(by.version),
                    {
                        t: o,
                        locale: a,
                        messages: l,
                        availableLocales: c
                    } = Pi(),
                    u = window.location.origin;
                var f = "api.static-pg-soft.com:11000";
                const d = Ve("");
                var h = {
                    attempts: 0,
                    max: 60,
                    time: 1500,
                    timeout: null
                };
                const m = Ve(!1),
                    _ = Ve(!1);
                var v = "";
                _a(() => {
                    window.addEventListener("resize", E), window.addEventListener("message", R), window.parent.postMessage({
                        type: "pg.web-history.redirect.Check"
                    }, "*"), w(!0)
                });

                function w(L) {
                    const G = new URLSearchParams(window.location.search);
                    G.get("l") !== null && (a.value = G.get("l").toUpperCase()), G.get("env") && G.get("sid") && G.get("gid") && G.get("atk") ? k(G) : (n.value = "wrong", G.get("ui-test") && !L && (n.value = G.get("ui-test")))
                }
                $n(n, L => _t(this, null, function*() {
                    switch (L) {
                        case "success":
                            d.value = "success", v || b("bypass"), $ = !0;
                            break;
                        case "nofound":
                            d.value = "failed";
                            break;
                        case "error":
                            d.value = "error";
                            break;
                        case "expired":
                            d.value = "error";
                            break;
                        case "wrong":
                            d.value = "error";
                            break;
                        case "load":
                            d.value = "", e.value = "", $ = !1;
                            break;
                        default:
                            e.value = "", $ = !1
                    }
                })), $n(a, L => _t(this, null, function*() {
                    zb.indexOf(L) >= 0 ? m.value = !0 : m.value = !1
                }));

                function O(L = null) {
                    switch (L) {
                        case "5000":
                            n.value = "nofound";
                            break;
                        case "1302":
                        case "1308":
                            n.value = "expired";
                            break;
                        case "1307":
                        case "1800":
                        case "2122":
                            n.value = "wrong";
                            break;
                        case "1003":
                            n.value = "error";
                            break;
                        default:
                            n.value = "error"
                    }
                }

                function k(L) {
                    window.location.port || (f = window.location.hostname.replace("verify", "api"));
                    let G = "";
                    L.get("trace_id") && (G = "?trace_id=".concat(L.get("trace_id")));
                    let Te = "https://".concat(f, "/AuthenticationVerify/GetBetHistoryVerifyHtml");
                    xe.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", xe.defaults.withCredentials = !0;
                    let _e = {
                            type: "verify",
                            sid: "".concat(L.get("sid") || "1806217391126872576"),
                            gid: "".concat(L.get("gid") || "1738001"),
                            atk: "".concat(L.get("atk") || "BD139AD5-C341-4F32-9569-BD4AC6D6A515"),
                            l: "".concat(L.get("l") || "")
                        },
                        de = [];
                    for (const ie in _e) _e[ie] !== "" && de.push("".concat(ie, "=").concat(_e[ie]));
                    xe.post("".concat(Te).concat(G), {
                        ea: de.join("&"),
                        env: L.get("env")
                    }).then(ie => _t(this, null, function*() {
                        ie.data.dt ? (v = ie.data.dt.content, b(ie.data.dt.content)) : O(ie.data.err.cd || null)
                    })).catch(ie => {
                        h.attempts <= h.max ? (h.attempts += 1, h.timeout = setTimeout(k.bind(null, L), h.time)) : n.value = "error"
                    })
                }

                function b(L) {
                    return _t(this, null, function*() {
                        let G = document.querySelector("#iframegame");
                        e.value = "//".concat(window.location.host, "/history/redirect/");
                        let Te = L;
                        if (L.length <= 50) {
                            let _e = 'style="color:#666; font-size:16px; font-family:Arial; word-wrap: break-word;';
                            _e += 'height: 100%; display: flex; align-items: center; justify-content: center;"', Te = "<div ".concat(_e, ">").concat(L, "<br>")
                        }
                        yield _u(), setTimeout(() => {
                            try {
                                if (G.contentWindow.document.open(), G.contentWindow.document.write(Te), G.contentWindow.document.close(), !_.value) console.warn("Not Support postMessage"), setTimeout(() => {
                                    $ = !0, q()
                                }, 5e3);
                                else {
                                    let _e = 38;
                                    setTimeout(() => {
                                        n.value === "load" && (console.warn("No postMessage received after ".concat(_e, "secs")), $ = !0, q())
                                    }, _e * 1e3)
                                }
                            } catch (_e) {
                                b("Write doc fails!")
                            }
                        }, 0)
                    })
                }

                function E() {
                    if (e.value !== "" && n.value === "success") {
                        let L = document.querySelector(".iframeContainer").getBoundingClientRect().width;
                        s.value = Math.round(L / r.value.width * 100) / 100
                    }
                }
                var $ = !1,
                    P = !1;

                function R(L) {
                    L.data.type && L.data.type.indexOf("redirect.") >= 0 && (L.data.type.indexOf("Check") >= 0 ? _.value = !0 : L.data.type.indexOf("Success") >= 0 ? ($ = !0, q()) : O(L.data.msg || null))
                }

                function A() {
                    P = !0, q()
                }

                function q() {
                    return _t(this, null, function*() {
                        $ && P && (n.value = "success", setTimeout(fe, 100), document.querySelector(".loadScaleImage").remove(), E(), Hr.from(".iframeContainer", {
                            opacity: 0,
                            duration: .5,
                            delay: .3
                        }))
                    })
                }
                var Z = !1;

                function W(L) {
                    Z && L !== null && (ae.value = "00000", Hr.from(".glowSprite", {
                        duration: .5,
                        opacity: 0,
                        delay: 0
                    }), Hr.to(".scaleSprite", {
                        duration: .5,
                        opacity: 0,
                        delay: .5,
                        onComplete: () => {
                            document.querySelector(".scaleSprite").remove(), document.querySelector(".loadGlowImage").remove(), J()
                        }
                    }))
                }
                const Y = Ve(""),
                    ae = Ve("");

                function fe() {
                    let L = 0,
                        G = setInterval(() => {
                            Y.value = L < 10 ? "0000".concat(L) : "000".concat(L), L++, L > 19 && (clearInterval(G), Z = !0, W())
                        }, 55)
                }

                function J() {
                    let L = 0,
                        G = setInterval(() => {
                            ae.value = L < 10 ? "0000".concat(L) : "000".concat(L), L++, L > 23 && (clearInterval(G), setTimeout(J, 2500))
                        }, 55)
                }
                return (L, G) => (Rt(), zt("div", vb, [B("div", null, [n.value != "load" ? (Rt(), zt("div", {
                    key: 0,
                    class: he(["backg", [{
                        successBg: d.value === "success",
                        failedBg: d.value === "failed",
                        wrongBg: d.value === "error"
                    }]])
                }, null, 2)) : hs("", !0), B("div", bb, [B("div", kb, [G[0] || (G[0] = Lh('<div class="top"><div class="logo"><img src="' + yp + '" alt="Logo"></div><div class="line"></div><div class="license"><div class="side left"><div class="gtext">Licensed in UK and Malta</div><div><div class="gambling"><img src="' + vp + '"></div><div class="mga"><img src="' + bp + '"></div></div></div><div class="side right"><div class="gtext">Certified by GA / BMM (UKGC)</div><div><div class="ga"><img src="' + kp + '"></div><div class="bmm"><img src="' + Tp + '"></div></div></div></div></div>', 1)), B("div", {
                    class: he(["certified", {
                        rtl: m.value
                    }])
                }, Re(L.$t("certified")), 3)]), n.value === "success" ? (Rt(), zt("div", Tb, [B("div", Eb, [B("img", {
                    src: Ep,
                    onLoad: W
                }, null, 32)]), B("div", wb, [B("div", $b, [B("span", {
                    class: he("shield_success_pop_up_".concat(Y.value, " scaleSprite"))
                }, null, 2), B("span", {
                    class: he("shield_success_shiny_effect_".concat(ae.value, " glowSprite"))
                }, null, 2)])]), B("div", {
                    class: he(["official", {
                        rtl: m.value
                    }])
                }, Re(L.$t("official")), 3), B("div", {
                    class: he(["centerMsg", {
                        rtl: m.value
                    }])
                }, [B("div", null, [B("div", {
                    class: he(["bigText", [{
                        green: d.value === "success"
                    }]])
                }, Re(L.$t("success")), 3), B("div", Sb, Re(L.$t("success_details")), 1)])], 2), B("div", {
                    class: he(["warn green", {
                        rtl: m.value
                    }])
                }, [B("div", null, [B("span", Ob, Re(L.$t("gentle")), 1), G[1] || (G[1] = B("span", {
                    class: "line"
                }, null, -1)), B("span", {
                    innerHTML: L.$t("reminder", {
                        link: "<span class='white'>".concat(Wn(u), "</span>")
                    })
                }, null, 8, xb)])], 2)])) : hs("", !0), B("div", Pb, [B("img", {
                    src: wp,
                    onLoad: A
                }, null, 32)]), n.value === "success" || n.value === "load" ? (Rt(), zt("div", {
                    key: 1,
                    class: he(["iframeContainer", s.value === 0 ? "" : "border"]),
                    style: rr({
                        height: Wn(r).height * s.value + "px"
                    })
                }, [B("div", {
                    style: rr({
                        transform: "scale(".concat(s.value, ")")
                    })
                }, [B("iframe", {
                    src: e.value,
                    id: "iframegame",
                    class: "iframeContent"
                }, null, 8, Ab)], 4)], 6)) : hs("", !0), n.value !== "success" && n.value !== "load" ? (Rt(), zt("div", {
                    key: 2,
                    class: he(["fail", {
                        fixed: n.value !== "wrong"
                    }])
                }, [n.value === "expired" ? (Rt(), zt("div", Ib, [B("div", null, [G[2] || (G[2] = B("div", {
                    class: "errorLogo"
                }, [B("img", {
                    src: $p
                })], -1)), B("div", {
                    class: he(["bigText blue", {
                        rtl: m.value
                    }])
                }, Re(L.$t("expired")), 3)]), B("div", {
                    class: he(["text", {
                        rtl: m.value
                    }])
                }, Re(L.$t("expired_details")), 3)])) : n.value === "wrong" ? (Rt(), zt("div", Rb, [B("div", null, [G[3] || (G[3] = B("div", {
                    class: "errorLogo"
                }, [B("img", {
                    src: Sp
                })], -1)), B("div", {
                    class: he(["bigText blue", {
                        rtl: m.value
                    }])
                }, Re(L.$t("wrong")), 3)]), B("div", {
                    class: he(["text", {
                        rtl: m.value
                    }])
                }, Re(L.$t("wrong_details")), 3), B("div", Nb, [B("div", null, [B("div", {
                    class: he(["content", {
                        rtl: m.value
                    }])
                }, [B("div", Cb, Re(L.$t("step1")), 1), G[4] || (G[4] = B("div", {
                    class: "space"
                }, null, -1)), B("div", null, Re(L.$t("step1_details")), 1)], 2), G[5] || (G[5] = B("span", null, [B("img", {
                    src: Op
                })], -1))]), G[8] || (G[8] = B("div", {
                    class: "mid"
                }, [B("div")], -1)), B("div", null, [B("div", {
                    class: he(["content", {
                        rtl: m.value
                    }])
                }, [B("div", Lb, Re(L.$t("step2")), 1), G[6] || (G[6] = B("div", {
                    class: "space"
                }, null, -1)), B("div", null, Re(L.$t("step2_details")), 1)], 2), G[7] || (G[7] = B("div", null, [B("img", {
                    src: xp
                })], -1))])])])) : n.value === "nofound" ? (Rt(), zt("div", Db, [B("div", null, [G[9] || (G[9] = B("div", {
                    class: "errorLogo"
                }, [B("img", {
                    src: Pp
                })], -1)), B("div", {
                    class: he(["bigText red", {
                        rtl: m.value
                    }])
                }, Re(L.$t("nofound")), 3)]), B("div", {
                    class: he(["text", {
                        rtl: m.value
                    }]),
                    innerHTML: Wn(o)("nofound_details", {
                        link: "<span>".concat(Wn(u), "</span>")
                    })
                }, null, 10, Mb)])) : n.value === "error" ? (Rt(), zt("div", Fb, [B("div", null, [G[10] || (G[10] = B("div", {
                    class: "cloudLogo"
                }, [B("img", {
                    src: Ap
                })], -1)), B("div", {
                    class: he(["bigText blue", {
                        rtl: m.value
                    }])
                }, Re(Wn(o)("error")), 3)]), B("div", {
                    class: he(["text", {
                        rtl: m.value
                    }])
                }, Re(L.$t("error_details")), 3)])) : hs("", !0), B("div", {
                    class: he(["warn", {
                        blue: d.value === "error",
                        red: d.value === "failed"
                    }])
                }, [B("div", {
                    class: he({
                        rtl: m.value
                    })
                }, [B("span", {
                    class: he({
                        blue: d.value === "error",
                        red: d.value === "failed"
                    })
                }, Re(L.$t("gentle")), 3), G[11] || (G[11] = B("span", {
                    class: "line"
                }, null, -1)), B("span", {
                    innerHTML: L.$t("reminder", {
                        link: "<span class='white'>".concat(Wn(u), "</span>")
                    })
                }, null, 8, jb)], 2)], 2)], 2)) : hs("", !0), n.value === "load" ? (Rt(), zt("div", Ub, G[12] || (G[12] = [B("div", null, [B("div", null, [B("div"), B("div"), B("div"), B("div"), B("div"), B("div"), B("div"), B("div"), B("div")])], -1)]))) : hs("", !0), B("div", {
                    class: he(["version", n.value !== "success" && n.value !== "wrong" ? "bottom" : ""])
                }, Re(i.value), 3)])])]))
            }
        },
        Bb = "ألعاب PG الرسمية والأصلية",
        Vb = "تم التحقق بنجاح",
        Hb = "تهانينا! أنت تلعب لعبة رسمية وأصلية.",
        Wb = "لم يتم العثور على معرف المعاملة",
        qb = "يُرجى العودة إلى صفحة سجل اللعبة للتحقق من آخر سجل رهان.",
        Kb = "انتهت صلاحية الجلسة",
        Yb = "يُرجى العودة إلى صفحة سجل اللعبة للتحقق من آخر سجل رهان.",
        Xb = "معامل غير صحيح",
        Jb = "يُرجى العودة إلى صفحة سجل اللعبة للتحقق من آخر سجل رهان.",
        Qb = "خطأ داخلي في الخادم",
        Zb = "يرجى تحديث الصفحة أو العودة إلى صفحة سجل اللعبة للتحقق من أحدث سجل رهان.",
        e0 = "تذكير بسيط",
        t0 = "الألعاب المزيفة غير معتمدة وقد تشكل مخاطر أمنية وتهديدات مالية. يرجى استخدام الموقع الإلكتروني الرسمي للتحقق {link} لضمان حماية حقوقك.",
        n0 = "تم اعتماد منتجات PG SOFT™ واختبارها بشكل صارم ومزدوج من قِبل الهيئات العالمية BMM وGA، مما يضمن أن خوارزمية المولد العشوائي RNG وتنفيذها ورياضيات اللعبة وقواعدها تفي بأعلى معايير الصناعة من حيث الإنصاف والتكامل.",
        s0 = "الخطوة 1:",
        r0 = "حدد معرف المعاملة.",
        i0 = "الخطوة 2:",
        o0 = "انقر زر تحقق.ستتم إعادة توجيهك تلقائيًا.",
        a0 = {
            official: Bb,
            success: Vb,
            success_details: Hb,
            nofound: Wb,
            nofound_details: qb,
            expired: Kb,
            expired_details: Yb,
            wrong: Xb,
            wrong_details: Jb,
            error: Qb,
            error_details: Zb,
            gentle: e0,
            reminder: t0,
            certified: n0,
            step1: s0,
            step1_details: r0,
            step2: i0,
            step2_details: o0
        },
        l0 = "Rəsmi və Orijinal PG Oyunları",
        c0 = "Uğurla təsdiq edildi",
        u0 = "Təbriklər! Rəsmi və orijinal oyun oynayırsınız.",
        f0 = "Tranzaksiya İD nömrəsi tapılmadı",
        d0 = "Sonuncu mərc qeydini yoxlamaq üçün oyun tarixçəsinə qayıdın.",
        _0 = "Seans Müddəti Bitdi",
        h0 = "Sonuncu mərc qeydini yoxlamaq üçün oyun tarixçəsinə qayıdın.",
        p0 = "Yanlış Parametr",
        m0 = "Sonuncu mərc qeydini yoxlamaq üçün oyun tarixçəsinə qayıdın.",
        g0 = "Daxili Server Xətası",
        y0 = "Sonuncu mərc qeydini yoxlamaq üçün oyun tarixçəsinə qayıdın və ya səhifəni yeniləyin.",
        v0 = "Xatırlatma",
        b0 = "Saxta oyunlar sertifikatlaşdırılmayıb, təhlükəsizlik riski və maliyyə təhlükəsi təşkil edə bilər. Hüquqlarınızın qorunduğuna əmin olmaq üçün rəsmi yoxlanış veb-saytından istifadə edin: {link} ",
        k0 = 'Qlobal təşkilatlar "BMM" və "GA" tərəfindən RNG alqoritmi, onun icrası, oyunun riyaziyyatı,\nədalətlilik və dürüstlük sahəsində ən yüksək sektor standartlarına cavab verən qaydalar\nüzrə ikiqat sertifikatlaşdırma və testdən keçirilib.',
        T0 = "ADDIM 1:",
        E0 = "Tranzaksiya İD nömrələrindən birini seçin.",
        w0 = "ADDIM 2:",
        $0 = '"Yoxla" düyməsinə klikləyin. Avtomatik yönləndiriləcəksiniz.',
        S0 = {
            official: l0,
            success: c0,
            success_details: u0,
            nofound: f0,
            nofound_details: d0,
            expired: _0,
            expired_details: h0,
            wrong: p0,
            wrong_details: m0,
            error: g0,
            error_details: y0,
            gentle: v0,
            reminder: b0,
            certified: k0,
            step1: T0,
            step1_details: E0,
            step2: w0,
            step2_details: $0
        },
        O0 = "Официални и оригинални игри от PG",
        x0 = "Проверката е успешна",
        P0 = "Поздравления! Играете официална и оригинална игра.",
        A0 = "Идентификаторът на трансакцията не бе намерен",
        I0 = "Моля, върнете се на страницата с историята на играта, за да проверите последния запис за залозите.",
        R0 = "Сесията е изтекла",
        N0 = "Моля, върнете се на страницата с историята на играта, за да проверите последния запис за залозите.",
        C0 = "Неправилен параметър",
        L0 = "Моля, върнете се на страницата с историята на играта, за да проверите последния запис за залозите.",
        D0 = "Вътрешна грешка на сървъра",
        M0 = "Моля, опреснете или се върнете на страницата с историята на играта, за да проверите последния запис за залозите.",
        F0 = "Любезно напомняне",
        j0 = "Пиратските игри не са сертифицирани и може да доведат до рискове за сигурността и финансови заплахи. Моля, използвайте официалния уебсайт за проверка {link}, за да бъдат правата Ви защитени.",
        U0 = "Продуктите на PG SOFT™ са преминали строго двойно сертифициране и са тествани от глобалните органи BMM и GA, за да се гарантира, че алгоритъмът на RNG и внедряването, математиката на играта и правилата изпълняват най-високите изисквания в сектора за добросъвестност и честност.",
        z0 = "СТЪПКА 1:",
        G0 = "Изберете един от идентификаторите на трансакция.",
        B0 = "СТЪПКА 2:",
        V0 = "Кликнете върху бутона за проверка. Ще бъдете пренасочени автоматично.",
        H0 = {
            official: O0,
            success: x0,
            success_details: P0,
            nofound: A0,
            nofound_details: I0,
            expired: R0,
            expired_details: N0,
            wrong: C0,
            wrong_details: L0,
            error: D0,
            error_details: M0,
            gentle: F0,
            reminder: j0,
            certified: U0,
            step1: z0,
            step1_details: G0,
            step2: B0,
            step2_details: V0
        },
        W0 = "অফিসিয়াল এবং প্রকৃত PG গেমস",
        q0 = "যাচাইকরণ সফলভাবে সম্পন্ন হয়েছে",
        K0 = "অভিনন্দন! আপনি একটি অফিসিয়াল এবং প্রকৃত গেম খেলছেন।",
        Y0 = "লেনদেনের ID পাওয়া যায়নি",
        X0 = "বাজির সর্বশেষ রেকর্ড যাচাই করতে গেমের ইতিহাস পেজে ফিরে যান।",
        J0 = "সেশনের মেয়াদ শেষ হয়ে গেছে",
        Q0 = "বাজির সর্বশেষ রেকর্ড যাচাই করতে গেমের ইতিহাস পেজে ফিরে যান।",
        Z0 = "ভুল প্যারামিটার",
        e1 = "বাজির সর্বশেষ রেকর্ড যাচাই করতে গেমের ইতিহাস পেজে ফিরে যান।",
        t1 = "আভ্যন্তরীণ সার্ভারের ত্রুটি",
        n1 = "বাজির সর্বশেষ রেকর্ড যাচাই করতে রিফ্রেশ করুন অথবা গেমের ইতিহাস পেজে ফিরে যান।",
        s1 = "জেন্টল রিমাইন্ডার",
        r1 = "জাল গেমগুলো প্রত্যয়িত নয় এবং এগুলো নিরাপত্তা ঝুঁকি এবং আর্থিক হুমকি সৃষ্টি করতে পারে। আপনার অধিকার সুরক্ষিত আছে তা নিশ্চিত করতে অনুগ্রহ করে অফিসিয়াল ভেরিফিকেশন ওয়েবসাইট {link} ব্যবহার করুন।",
        i1 = "PG SOFT™-এর পণ্যগুলি BMM ও GA-এর মতো কর্তৃপক্ষ দ্বারা কঠোরভাবে দ্বৈত প্রত্যয়িত এবং পরীক্ষিত।এতে RNG অ্যালগরিদম ও তার বাস্তবায়ন, গেমের গণিত, বিধির ন্যায্যতা এবং অখণ্ডতাও রয়েছে।উপরোক্ত বৈশিষ্ট্যগুলি শিল্পের সর্বোচ্চ মান সুনিশ্চিত করে।",
        o1 = "ধাপ 1:",
        a1 = "এর মধ্যে থেকে একটি নির্বাচন করুন লেনদেন সম্পর্কিত ID",
        l1 = "ধাপ 2:",
        c1 = "যাচাইকরণ বাটনে ক্লিক করুন। আপনাকে স্বয়ংক্রিয়ভাবে পুনঃনির্দেশিত করা হবে।",
        u1 = {
            official: W0,
            success: q0,
            success_details: K0,
            nofound: Y0,
            nofound_details: X0,
            expired: J0,
            expired_details: Q0,
            wrong: Z0,
            wrong_details: e1,
            error: t1,
            error_details: n1,
            gentle: s1,
            reminder: r1,
            certified: i1,
            step1: o1,
            step1_details: a1,
            step2: l1,
            step2_details: c1
        },
        f1 = "Oficiální a originální hry PG",
        d1 = "Ověření proběhlo úspěšně",
        _1 = "Gratulujeme! Hrajete oficiální a originální hru.",
        h1 = "ID transakce nebylo nalezeno",
        p1 = "Vraťte se prosím na stránku historie her a ověřte si poslední záznam o sázce.",
        m1 = "Platnost relace skončila",
        g1 = "Vraťte se prosím na stránku historie her a ověřte si poslední záznam o sázce.",
        y1 = "Nesprávný parametr",
        v1 = "Vraťte se prosím na stránku historie her a ověřte si poslední záznam o sázce.",
        b1 = "Chyba interního serveru",
        k1 = "Pro ověření posledního záznamu o sázce obnovte stránku nebo se vraťte na historii her.",
        T1 = "Drobná připomínka",
        E1 = "Neautorizované hry nejsou certifikované a mohou představovat bezpečnostní riziko i finanční hrozbu. Pro ochranu svých práv využijte oficiální ověřovací webovou stránku {link}.",
        w1 = "Produkty PG SOFT™ byly důkladně certifikovány a testovány mezinárodními autoritami BMM a GA.Tyto organizace ověřily, že algoritmus RNG, herní matematika a pravidla splňují nejvyšší standardy spravedlnosti a integrity v oboru.",
        $1 = "KROK 1:",
        S1 = "Vyber jedno z ID transakce.",
        O1 = "KROK 2:",
        x1 = "Klikni na tlačítko ověřit. Přesměrování je automatické.",
        P1 = {
            official: f1,
            success: d1,
            success_details: _1,
            nofound: h1,
            nofound_details: p1,
            expired: m1,
            expired_details: g1,
            wrong: y1,
            wrong_details: v1,
            error: b1,
            error_details: k1,
            gentle: T1,
            reminder: E1,
            certified: w1,
            step1: $1,
            step1_details: S1,
            step2: O1,
            step2_details: x1
        },
        A1 = "Officielle og ægte PG-spil",
        I1 = "Verifikation er fuldført",
        R1 = "Tillykke! Du spiller et officielt og ægte spil.",
        N1 = "Transaktions-id ikke fundet",
        C1 = "Returnér til spillets historiksiden for at bekræfte den seneste indsats.",
        L1 = "Session udløbet",
        D1 = "Returnér til spillets historiksiden for at bekræfte den seneste indsats.",
        M1 = "Forkert parameter",
        F1 = "Returnér til spillets historiksiden for at bekræfte den seneste indsats.",
        j1 = "Intern serverfejl",
        U1 = "Opdatér eller returnér til spillets historiksiden for at bekræfte den seneste indsats.",
        z1 = "Lille påmindelse",
        G1 = "Uægte spil er ikke certificeret, og kan udgøre sikkerhedsrisici og finansielle trusler. Brug den officielle verifikationshjemmeside {link} for at sikre, at dine rettigheder er beskyttet.",
        B1 = "PG SOFT™-produkter er dobbeltcertificeret og testet af de globale myndigheder BMM og GA, hvilket sikrer, at RNG-algoritme og implementering, spilmatematik og regler overholder de højeste standarder for fairhed og integritet.",
        V1 = "TRIN 1:",
        H1 = "Vælg et transaktions-id.",
        W1 = "TRIN 2:",
        q1 = "Klik på knappen Bekræft. Du videresendes automatisk.",
        K1 = {
            official: A1,
            success: I1,
            success_details: R1,
            nofound: N1,
            nofound_details: C1,
            expired: L1,
            expired_details: D1,
            wrong: M1,
            wrong_details: F1,
            error: j1,
            error_details: U1,
            gentle: z1,
            reminder: G1,
            certified: B1,
            step1: V1,
            step1_details: H1,
            step2: W1,
            step2_details: q1
        },
        Y1 = "Offizielle und echte PG-Spiele",
        X1 = "Verifizierung erfolgreich",
        J1 = "Herzlichen Glückwunsch! Sie spielen ein offizielles und echtes Spiel.",
        Q1 = "Transaktions-ID nicht gefunden",
        Z1 = "Bitte kehren Sie zur Seite des Spielverlaufs zurück, um den letzten Einsatz zu überprüfen.",
        ek = "Sitzung Abgelaufen",
        tk = "Bitte kehren Sie zur Seite des Spielverlaufs zurück, um den letzten Einsatz zu überprüfen.",
        nk = "Falscher Parameter",
        sk = "Bitte kehren Sie zur Seite des Spielverlaufs zurück, um den letzten Einsatz zu überprüfen.",
        rk = "Interner Serverfehler",
        ik = "Bitte aktualisieren Sie die Seite oder kehren Sie zum Spielverlauf zurück, um den letzten Einsatz zu überprüfen.",
        ok = "Freundliche Erinnerung",
        ak = "Gefälschte Spiele sind nicht zertifiziert und können ein Sicherheitsrisiko und eine finanzielle Bedrohung darstellen. Bitte verwenden Sie die offizielle Verifizierungs-Website {link}, um sicherzustellen, dass Ihre Rechte geschützt sind.",
        lk = "PG SOFT™-Produkte wurden von den Behörden BMM und GA doppelt zertifiziert und getestet, damit der RNG-Algorithmus, die Implementierung, die Spielmathematik und Regeln den höchsten Branchenstandards für Fairness und Integrität entsprechen.",
        ck = "1. SCHRITT:",
        uk = "Wählen Sie eine der Transaktions-IDs.",
        fk = "2. SCHRITT:",
        dk = "Klicken Sie auf die Schaltfläche „Verifizieren“. Sie werden dann automatisch weitergeleitet.",
        _k = {
            official: Y1,
            success: X1,
            success_details: J1,
            nofound: Q1,
            nofound_details: Z1,
            expired: ek,
            expired_details: tk,
            wrong: nk,
            wrong_details: sk,
            error: rk,
            error_details: ik,
            gentle: ok,
            reminder: ak,
            certified: lk,
            step1: ck,
            step1_details: uk,
            step2: fk,
            step2_details: dk
        },
        hk = "Επίσημα και Γνήσια Παιχνίδια της PG",
        pk = "Επιτυχής επαλήθευση",
        mk = "Συγχαρητήρια! Παίζετε ένα επίσημο και γνήσιο παιχνίδι.",
        gk = "Το ID Συναλλαγής δεν βρέθηκε",
        yk = "Επιστρέψτε στη σελίδα ιστορικού παιχνιδιών για να επαληθεύσετε το τελευταίο αρχείο στοιχημάτων.",
        vk = "Η Συνεδρία Έληξε",
        bk = "Επιστρέψτε στη σελίδα ιστορικού παιχνιδιών για να επαληθεύσετε το τελευταίο αρχείο στοιχημάτων.",
        kk = "Εσφαλμένη Παράμετρος",
        Tk = "Επιστρέψτε στη σελίδα ιστορικού παιχνιδιών για να επαληθεύσετε το τελευταίο αρχείο στοιχημάτων.",
        Ek = "Εσωτερικό Σφάλμα Διακομιστή",
        wk = "Ανανεώστε ή επιστρέψτε στη σελίδα ιστορικού παιχνιδιών για να επαληθεύσετε το τελευταίο αρχείο στοιχημάτων.",
        $k = "Ευγενική Υπενθύμιση",
        Sk = "Τα πλαστά παιχνίδια δεν είναι πιστοποιημένα και ενδέχεται να εγκυμονούν κινδύνους για την ασφάλεια ή να αποτελούν απειλή για τα οικονομικά των παικτών. Χρησιμοποιήστε τον επίσημο ιστότοπο επαλήθευσης {link} για να διασφαλίσετε την προστασία των δικαιωμάτων σας.",
        Ok = "Τα προϊόντα PG SOFT™ έχουν υποβληθεί σε αυστηρή διπλή πιστοποίηση και δοκιμή από τις παγκόσμιες αρχές BMM και GA, διασφαλίζοντας ότι ο αλγόριθμος και η εφαρμογή RNG, τα μαθηματικά και οι κανόνες παιχνιδιού πληρούν τις υψηλότερες προδιαγραφές δικαιοσύνης και ακεραιότητας.",
        xk = "ΒΗΜΑ 1:",
        Pk = "Επιλέξτε ένα ID Συναλλαγής.",
        Ak = "ΒΗΜΑ 2:",
        Ik = "Πατήστε το κουμπί Επαλήθευση. Θα μεταφερθείτε αυτόματα.",
        Rk = {
            official: hk,
            success: pk,
            success_details: mk,
            nofound: gk,
            nofound_details: yk,
            expired: vk,
            expired_details: bk,
            wrong: kk,
            wrong_details: Tk,
            error: Ek,
            error_details: wk,
            gentle: $k,
            reminder: Sk,
            certified: Ok,
            step1: xk,
            step1_details: Pk,
            step2: Ak,
            step2_details: Ik
        },
        Nk = "Official and Genuine PG Games",
        Ck = "Verification is successful",
        Lk = "Congratulations! You are playing an official and genuine game.",
        Dk = "Transaction ID not found",
        Mk = "Please return to the game history page to verify the latest bet record.",
        Fk = "Session Expired",
        jk = "Please return to the game history page to verify the latest bet record.",
        Uk = "Incorrect Parameter",
        zk = "Please return to the game history page to verify the latest bet record.",
        Gk = "Internal Server Error",
        Bk = "Please refresh or return to the game history page to verify the latest bet record.",
        Vk = "Gentle Reminder",
        Hk = "Counterfeit games are not certified and may pose security risks and financial threats. Please use the official verification website {link} to ensure your rights are protected.",
        Wk = "PG SOFT™ products have been rigorously dual certified and tested by global authorities BMM and GA, ensuring the RNG algorithm and implementation, game mathematics, and rules meet the highest industry standards for fairness and integrity.",
        qk = "STEP 1:",
        Kk = "Select one of the Transaction ID.",
        Yk = "STEP 2:",
        Xk = "Click on the Verify button. You'll be auto-redirected.",
        Jk = {
            official: Nk,
            success: Ck,
            success_details: Lk,
            nofound: Dk,
            nofound_details: Mk,
            expired: Fk,
            expired_details: jk,
            wrong: Uk,
            wrong_details: zk,
            error: Gk,
            error_details: Bk,
            gentle: Vk,
            reminder: Hk,
            certified: Wk,
            step1: qk,
            step1_details: Kk,
            step2: Yk,
            step2_details: Xk
        },
        Qk = "Juegos oficiales y originales de PG",
        Zk = "La verificación se ha realizado correctamente",
        eT = "¡Enhorabuena! Estás jugando a un juego oficial y original.",
        tT = "ID de transacción no encontrado",
        nT = "Vuelva a la página del historial de partidas para verificar el último registro de apuestas.",
        sT = "La sesión ha caducado",
        rT = "Vuelva a la página del historial de partidas para verificar el último registro de apuestas.",
        iT = "Parámetro incorrecto",
        oT = "Vuelva a la página del historial de partidas para verificar el último registro de apuestas.",
        aT = "Error Interno del Servidor",
        lT = "Actualice o vuelva a la página del historial de partidas para verificar el último registro de apuestas.",
        cT = "Recordatorio",
        uT = "Los juegos falsificados no están certificados y pueden plantear riesgos de seguridad y financieros. Utilice el sitio web oficial de verificación {link} para garantizar la protección de sus derechos.",
        fT = "Los productos PG SOFT™ han sido certificados y probados por BMM y GA, garantizando que el algoritmo RNG y su implementación, las matemáticas del juego y las reglas cumplen con los más altos estándares de imparcialidad e integridad.",
        dT = "PASO 1:",
        _T = "Seleccione un ID de transacción.",
        hT = "PASO 2:",
        pT = "Haga clic en el botón Verificar. Se le redirigirá automáticamente.",
        mT = {
            official: Qk,
            success: Zk,
            success_details: eT,
            nofound: tT,
            nofound_details: nT,
            expired: sT,
            expired_details: rT,
            wrong: iT,
            wrong_details: oT,
            error: aT,
            error_details: lT,
            gentle: cT,
            reminder: uT,
            certified: fT,
            step1: dT,
            step1_details: _T,
            step2: hT,
            step2_details: pT
        },
        gT = "Ametlikud ja Ehtsad PG Mängud",
        yT = "Verifitseerimine õnnestus",
        vT = "Õnnitleme! Mängid ametlikku ja ehtsat mängu.",
        bT = "Ülekande ID-d ei leitud",
        kT = "Mine tagasi mängu ajaloo lehele, et verifitseerida viimaseid panuseid.",
        TT = "Sessioon aegus",
        ET = "Mine tagasi mängu ajaloo lehele, et verifitseerida viimaseid panuseid.",
        wT = "Vale parameeter",
        $T = "Mine tagasi mängu ajaloo lehele, et verifitseerida viimaseid panuseid.",
        ST = "Serveri sisemine viga",
        OT = "Värskenda või mine tagasi mängu ajaloo lehele, et verifitseerida viimaseid panuseid.",
        xT = "Tagasihoidlik meeldetuletus",
        PT = "Võltsitud mängud pole verifitseeritud ja nendega võivad kaasneda turva- ja finantsriskid. Palun kasuta oma õiguste kaitses veendumiseks ametlikku verifitseerimissaiti {link}.",
        AT = "PG SOFT™-i tooteid on rangelt kahekordselt sertifitseerinud ja testinud ülemaailmsed asutused BMM ja GA, tagades, et RNG algoritm ja selle rakendamine, mängu matemaatika ja reeglid vastavad valdkonna kõrgeimatele õigluse ja terviklikkuse standarditele.",
        IT = "1. SAMM:",
        RT = "Vali üks Ülekande ID",
        NT = "2. SAMM:",
        CT = "Vajuta nupule OK. Sind suunatakse ümber.",
        LT = {
            official: gT,
            success: yT,
            success_details: vT,
            nofound: bT,
            nofound_details: kT,
            expired: TT,
            expired_details: ET,
            wrong: wT,
            wrong_details: $T,
            error: ST,
            error_details: OT,
            gentle: xT,
            reminder: PT,
            certified: AT,
            step1: IT,
            step1_details: RT,
            step2: NT,
            step2_details: CT
        },
        DT = "بازی های رسمی و اصلی PG",
        MT = "اعتبارسنجی موفقیت آمیز است",
        FT = "تبریک! شما در حال انجام یک بازی رسمی و اصلی هستید.",
        jT = "شناسه تراکنش پیدا نشد",
        UT = "لطفاً به صفحه تاریخچه بازی بازگردید تا آخرین سابقه شرط را تایید کنید.",
        zT = "جلسه منقضی شد",
        GT = "لطفاً به صفحه تاریخچه بازی بازگردید تا آخرین سابقه شرط را تایید کنید.",
        BT = "پارامتر نادرست",
        VT = "لطفاً به صفحه تاریخچه بازی بازگردید تا آخرین سابقه شرط را تایید کنید.",
        HT = "خطای داخلی سرور",
        WT = "لطفاً به صفحه تاریخچه بازی بازگردید تا آخرین سابقه شرط را تایید کنید.",
        qT = "یادآوری دوستانه",
        KT = "بازی‌های تقلبی تایید نشده‌اند و ممکن است خطرات امنیتی و تهدیدات مالی داشته باشند. لطفاً از وب‌سایت اعتبارسنجی رسمی {link} استفاده کنید تا از حقوق خود محافظت کنید.",
        YT = "محصولات PG SOFT دارای گواهینامه دوگانه اند و توسط مقامات جهانی BMM و GA تست شده اند، تا از الگوریتم RNG و پیاده سازی آن، ریاضیات بازی اطمینان یابید، و قوانین مطابق با بالاترین استانداردهای صنعت برای انصاف و درستی بازی هست.",
        XT = "مرحله 1:",
        JT = "یکی از شناسه های تراکنش را انتخاب کنید",
        QT = "مرحله 2:",
        ZT = "بر روی دکمه تایید کلیک کنید شما به طور خودکار هدایت می شوید.",
        eE = {
            official: DT,
            success: MT,
            success_details: FT,
            nofound: jT,
            nofound_details: UT,
            expired: zT,
            expired_details: GT,
            wrong: BT,
            wrong_details: VT,
            error: HT,
            error_details: WT,
            gentle: qT,
            reminder: KT,
            certified: YT,
            step1: XT,
            step1_details: JT,
            step2: QT,
            step2_details: ZT
        },
        tE = "Viralliset ja aidot PG Games -pelit",
        nE = "Vahvistus onnistui",
        sE = "Onnittelut! Pelaat virallista ja aitoa peliä.",
        rE = "Transaktiotunnusta ei löydy",
        iE = "Palaa pelihistoriasivulle vahvistaaksesi viimeisimmän panostallenteen.",
        oE = "Istunto vanhentunut",
        aE = "Palaa pelihistoriasivulle vahvistaaksesi viimeisimmän panostallenteen.",
        lE = "Virheellinen parametri",
        cE = "Palaa pelihistoriasivulle vahvistaaksesi viimeisimmän panostallenteen.",
        uE = "Sisäinen palvelinvirhe",
        fE = "Päivitä tai palaa pelihistoriasivulle vahvistaaksesi viimeisimmän panostallenteen.",
        dE = "Ystävällinen muistutus",
        _E = "Väärennettyjä pelejä ei ole varmennettu, ja ne voivat muodostaa tietoturvauhkia ja taloudellisia riskejä. Käytä virallista vahvistussivustoa {link} varmistaaksesi, että oikeutesi on turvattu.",
        hE = "Globaalit viranomaiset BMM ja GA ovat huolellisesti kaksoissertifioineet ja testanneet PG SOFT™ -tuotteet varmistaen, että niiden RNG-algoritmi ja sen käyttöönotto sekä pelin matematiikka ja säännöt vastaavat alan reiluusstandardeja.",
        pE = "VAIHE 1:",
        mE = "Valitse yksi transaktiotunnuksista.",
        gE = "VAIHE 2:",
        yE = "Napsauta Vahvista-painiketta. Sinut uudelleenohjataan automaattisesti.",
        vE = {
            official: tE,
            success: nE,
            success_details: sE,
            nofound: rE,
            nofound_details: iE,
            expired: oE,
            expired_details: aE,
            wrong: lE,
            wrong_details: cE,
            error: uE,
            error_details: fE,
            gentle: dE,
            reminder: _E,
            certified: hE,
            step1: pE,
            step1_details: mE,
            step2: gE,
            step2_details: yE
        },
        bE = "Jeux officiels et authentiques de PG",
        kE = "La vérification a été complétée avec succès",
        TE = "Félicitations ! Vous jouez à un jeu officiel et authentique.",
        EE = "L’ID de transaction est introuvable",
        wE = "Veuillez retourner à la page de l’historique du jeu pour procéder à la vérification des derniers paris placés.",
        $E = "La session a expiré",
        SE = "Veuillez retourner à la page de l’historique du jeu pour procéder à la vérification des derniers paris placés.",
        OE = "Paramètre incorrect",
        xE = "Veuillez retourner à la page de l’historique du jeu pour procéder à la vérification des derniers paris placés.",
        PE = "Erreur de serveur interne",
        AE = "Veuillez rafraîchir ou retourner à la page de l’historique du jeu pour procéder à la vérification des derniers paris placés.",
        IE = "Rappel",
        RE = "Les jeux de contrefaçon ne sont pas certifiés et peuvent ainsi poser des risques financiers et de sécurité. Consultez le site officiel de vérification prévu à cet effet ({link}) pour vous assurer que vos droits sont protégés.",
        NE = "Les produits PG SOFT™ ont été rigoureusement et doublement testés et certifiés par BMM et GA, garantissant l’équité et l’impartialité des statistiques de jeu, de ses règles, et de la génération de nombres aléatoires.",
        CE = "ÉTAPE 1 :",
        LE = "Sélectionnez l’une des ID de transaction.",
        DE = "ÉTAPE 2 :",
        ME = "Cliquez sur le bouton Vérifier. Vous serez redirigé(e) automatiquement.",
        FE = {
            official: bE,
            success: kE,
            success_details: TE,
            nofound: EE,
            nofound_details: wE,
            expired: $E,
            expired_details: SE,
            wrong: OE,
            wrong_details: xE,
            error: PE,
            error_details: AE,
            gentle: IE,
            reminder: RE,
            certified: NE,
            step1: CE,
            step1_details: LE,
            step2: DE,
            step2_details: ME
        },
        jE = "आधिकारिक और असली PG गेम्स",
        UE = "सत्यापन सफल रहा",
        zE = "बधाई! आप एक आधिकारिक और असली गेम खेल रहे हैं।",
        GE = "लेनदेन ID नहीं मिली",
        BE = "नवीनतम बेट रिकॉर्ड सत्यापन करने के लिए गेम हिस्ट्री पर लौटें।",
        VE = "सेशन समाप्त हुआ",
        HE = "नवीनतम बेट रिकॉर्ड सत्यापन करने के लिए गेम हिस्ट्री पर लौटें।",
        WE = "अमान्य पैरामीटर",
        qE = "नवीनतम बेट रिकॉर्ड सत्यापन करने के लिए गेम हिस्ट्री पर लौटें।",
        KE = "आंतरिक सर्वर त्रुटि",
        YE = "नवीनतम बेट रिकॉर्ड सत्यापन करने के लिए गेम हिस्ट्री को रिफ्रेश करें या पेज़ पर वापस लौटें।",
        XE = "विनम्र अनुस्मारक",
        JE = "नकली गेम प्रमाणित नहीं होते और इनसे सुरक्षा जोखिम और वित्तीय खतरा उत्पन्न हो सकता है। कृपया अपने अधिकारों की सुरक्षा सुनिश्चित करने के लिए आधिकारिक सत्यापन वेबसाइट {link} का उपयोग करें।",
        QE = "PG SOFT™ प्रॉडक्ट्स का वैश्विक प्राधिकरणों BMM और GA द्वारा सख्त तौर पर दोहरा प्रमाणन \nऔर परीक्षण किया गया है, जिससे यह सुनिश्चित होता है कि RNG एल्गोरिदम और \nकार्यान्वयन, गेम गणित और नियम निष्पक्षता और अखंडता \nके लिए उच्चतम इंडस्ट्री मानकों को पूरा करते हैं।",
        ZE = "स्टेप 1:",
        ew = "कोई एक चुनें लेनदेन ID",
        tw = "स्टेप 2:",
        nw = "क्लिक करें सत्यापन बटन पर। आपको स्वत:पुनर्निर्देशित किया जाएगा।",
        sw = {
            official: jE,
            success: UE,
            success_details: zE,
            nofound: GE,
            nofound_details: BE,
            expired: VE,
            expired_details: HE,
            wrong: WE,
            wrong_details: qE,
            error: KE,
            error_details: YE,
            gentle: XE,
            reminder: JE,
            certified: QE,
            step1: ZE,
            step1_details: ew,
            step2: tw,
            step2_details: nw
        },
        rw = "Hivatalos és eredeti PG-játékok",
        iw = "Sikeres ellenőrzés",
        ow = "Gratulálunk! Hivatalos és eredeti játékkal játszik.",
        aw = "A tranzakcióazonosító nem található",
        lw = "Térjen vissza a játékelőzmények oldalra a legutóbbi tétrekord ellenőrzéséhez.",
        cw = "A munkamenet lejárt",
        uw = "Térjen vissza a játékelőzmények oldalra a legutóbbi tétrekord ellenőrzéséhez.",
        fw = "Helytelen paraméter",
        dw = "Térjen vissza a játékelőzmények oldalra a legutóbbi tétrekord ellenőrzéséhez.",
        _w = "Belső kiszolgálóhiba",
        hw = "Frissítsen vagy térjen vissza a játékelőzmények oldalra a legutóbbi tétrekord ellenőrzéséhez.",
        pw = "Emlékeztető",
        mw = "A hamisított játékok nem rendelkeznek tanúsítvánnyal, és biztonsági kockázatot és pénzügyi fenyegetést jelenthetnek. Használja a hivatalos ellenőrző webhelyet {link}, hogy garantálja a jogai védelmét.",
        gw = "A PG SOFT™-termékek szigorú kettős tanúsítást kaptak és tesztelésen estek át\na BMM és GA által, így az RNG-algoritmus és -megvalósítás, a játékmatematika és a szabályok megfelelnek\na legszigorúbb iparági szabványoknak a méltányosság és integritás terén.",
        yw = "1. LÉPÉS:",
        vw = "Válasszon egy tranzakcióazonosítót.",
        bw = "2. LÉPÉS:",
        kw = "Kattintson az Ellenőrzés gombra. Automatikusan átirányítják.",
        Tw = {
            official: rw,
            success: iw,
            success_details: ow,
            nofound: aw,
            nofound_details: lw,
            expired: cw,
            expired_details: uw,
            wrong: fw,
            wrong_details: dw,
            error: _w,
            error_details: hw,
            gentle: pw,
            reminder: mw,
            certified: gw,
            step1: yw,
            step1_details: vw,
            step2: bw,
            step2_details: kw
        },
        Ew = "PG-ի պաշտոնական և իրական խաղեր",
        ww = "Հաստատումը հաջող է",
        $w = "Շնորհավորո՛ւմ ենք Դուք խաղում եք պաշտոնական և իրական խաղ։",
        Sw = "Գործարքի ID-ն չի հայտնաբերվել",
        Ow = "Վերադարձեք խաղերի պատմության էջ, որպեսզի հաստատեք ամենավերջին խաղադրույքի գրառումը։",
        xw = "Խաղաշրջանի ժամանակը սպառվեց",
        Pw = "Վերադարձեք խաղերի պատմության էջ, որպեսզի հաստատեք ամենավերջին խաղադրույքի գրառումը։",
        Aw = "Սխալ պարամետր",
        Iw = "Վերադարձեք խաղերի պատմության էջ, որպեսզի հաստատեք ամենավերջին խաղադրույքի գրառումը։",
        Rw = "Սերվերի ներքին սխալ",
        Nw = "Թարմացրեք կամ վերադարձեք խաղերի պատմության էջ, որպեսզի հաստատեք ամենավերջին խաղադրույքի գրառումը։",
        Cw = "Փոքրիկ հիշեցում",
        Lw = "Կեղծ խաղերը վկայագրված չեն և կարող են անվտանգության ռիսկեր ու ֆինանսական սպառնալիքներ առաջացնել։ Օգտագործեք հաստատման պաշտոնական կայքէջը ({link}), որպեսզի համոզվեք, որ ձեր իրավունքները պաշտպանված են։",
        Dw = "PG SOFT™ պրոդուկտները կրկնակի վկայագրվել և փորձարկվել են BMM և GA գլոբալ կառույցների կողմից՝ ապահովելով RNG-ի ալգորիթմը, իրականացումը, խաղի մաթեմատիկան, իսկ կանոնները բավարարում են ոլորտի արդարության և ազնվության ամենաբարձր ստանդարտները։",
        Mw = "ՔԱՅԼ 1․",
        Fw = "Ընտրե՛ք գործարքի ID-ներից մեկը։",
        jw = "ՔԱՅԼ 2․",
        Uw = "Սեղմե՛ք Հաստատել կոճակը։ Դուք ինքնաբերաբար կվերաուղղորդվեք։",
        zw = {
            official: Ew,
            success: ww,
            success_details: $w,
            nofound: Sw,
            nofound_details: Ow,
            expired: xw,
            expired_details: Pw,
            wrong: Aw,
            wrong_details: Iw,
            error: Rw,
            error_details: Nw,
            gentle: Cw,
            reminder: Lw,
            certified: Dw,
            step1: Mw,
            step1_details: Fw,
            step2: jw,
            step2_details: Uw
        },
        Gw = "Permainan PG Resmi dan Asli",
        Bw = "Verifikasi berhasil",
        Vw = "Selamat! Anda memainkan permainan resmi dan asli.",
        Hw = "ID Transaksi tidak ditemukan",
        Ww = "Silakan kembali ke halaman riwayat permainan untuk memverifikasi catatan taruhan terakhir.",
        qw = "Sesi Kedaluwarsa",
        Kw = "Silakan kembali ke halaman riwayat permainan untuk memverifikasi catatan taruhan terakhir.",
        Yw = "Parameter Salah",
        Xw = "Silakan kembali ke halaman riwayat permainan untuk memverifikasi catatan taruhan terakhir.",
        Jw = "Kesalahan Server Internal",
        Qw = "Silakan muat ulang atau kembali ke halaman riwayat permainan untuk memverifikasi catatan taruhan terakhir.",
        Zw = "Sekadar Pengingat",
        e$ = "Permainan palsu tidak disertifikasi dan dapat membawa risiko keamanan dan ancaman keuangan. Harap gunakan situs web verifikasi resmi {link} untuk memastikan bahwa hak-hak Anda terlindungi.",
        t$ = "Produk-produk PG SOFT™ disertifikasi ganda dan diuji ketat oleh otoritas global BMM dan GA, memastikan algoritma dan implementasi RNG, matematika permainan, dan aturannya memenuhi standar industri tertinggi demi keadilan & integritas.",
        n$ = "LANGKAH 1:",
        s$ = "Pilih salah satu ID Transaksi.",
        r$ = "LANGKAH 2:",
        i$ = "Klik tombol Verifikasi. Anda akan diarahkan secara otomatis.",
        o$ = {
            official: Gw,
            success: Bw,
            success_details: Vw,
            nofound: Hw,
            nofound_details: Ww,
            expired: qw,
            expired_details: Kw,
            wrong: Yw,
            wrong_details: Xw,
            error: Jw,
            error_details: Qw,
            gentle: Zw,
            reminder: e$,
            certified: t$,
            step1: n$,
            step1_details: s$,
            step2: r$,
            step2_details: i$
        },
        a$ = "Giochi PG ufficiali e originali",
        l$ = "Verifica completata",
        c$ = "Congratulazioni! Stai utilizzando un gioco originale e ufficiale.",
        u$ = "ID della transazione non trovato",
        f$ = "Ti preghiamo di tornare alla pagina della cronologia di gioco per verificare l’ultima registrazione delle puntate.",
        d$ = "Sessione scaduta",
        _$ = "Ti preghiamo di tornare alla pagina della cronologia di gioco per verificare l’ultima registrazione delle puntate.",
        h$ = "Parametro non corretto",
        p$ = "Ti preghiamo di tornare alla pagina della cronologia di gioco per verificare l’ultima registrazione delle puntate.",
        m$ = "Errore interno del server",
        g$ = "Ti preghiamo di aggiornare la pagina o di tornare alla pagina della cronologia di gioco per verificare l’ultima registrazione delle puntate.",
        y$ = "Promemoria",
        v$ = "I giochi contraffatti non sono certificati e possono comportare rischi per la sicurezza e minacce finanziarie. Ti preghiamo di utilizzare il sito web di verifica ufficiale per assicurarti che i tuoi diritti vengano tutelati: {link}",
        b$ = "I prodotti di PG SOFT™ sono stati certificati e testati con rigore dalle autorità globali BMM e GA, assicurando che l’implementazione e l’algoritmo del RNG, i calcoli del gioco e le sue regole rispettino gli standard del settore.",
        k$ = "1:",
        T$ = "Seleziona uno degli ID di transazione.",
        E$ = "2:",
        w$ = "Fai clic sul Pulsante di verifica. Verrai reindirizzato/a.",
        $$ = {
            official: a$,
            success: l$,
            success_details: c$,
            nofound: u$,
            nofound_details: f$,
            expired: d$,
            expired_details: _$,
            wrong: h$,
            wrong_details: p$,
            error: m$,
            error_details: g$,
            gentle: y$,
            reminder: v$,
            certified: b$,
            step1: k$,
            step1_details: T$,
            step2: E$,
            step2_details: w$
        },
        S$ = "PGの公式・純正ゲーム",
        O$ = "検証に成功",
        x$ = "おめでとうございます！あなたは公式・純正のゲームをプレイしています。",
        P$ = "トランザクションIDが見つかりませんでした",
        A$ = "最新のベット記録を検証するには、ゲーム履歴ページに戻ってください。",
        I$ = "セッション期限切れ",
        R$ = "最新のベット記録を検証するには、ゲーム履歴ページに戻ってください。",
        N$ = "不正確なパラメーター",
        C$ = "最新のベット記録を検証するには、ゲーム履歴ページに戻ってください。",
        L$ = "内部サーバーエラー",
        D$ = "最新のベット記録を検証するには、ゲーム履歴ページを更新するか、ゲーム履歴ページに戻ってください。",
        M$ = "注意喚起",
        F$ = "偽造ゲームは認証されておらず、セキュリティリスクや金銭的脅威をもたらす可能性があります。お客様の権利が確実に守られるよう、公式検証サイト{link}をご利用ください。",
        j$ = "世界的権威であるBMMおよびGAの厳格なデュアル認証およびテストを受けることにより、PG SOFT™製品は、RNGアルゴリズムと実装、ゲーム数学、ルールが公平性と完全性に関する業界最高基準を満たしていることを保証しています。",
        U$ = "ステップ1：",
        z$ = "トランザクションIDを選択します。",
        G$ = "ステップ2：",
        B$ = "検証ボタンをタップします。自動的にリダイレクトされます。",
        V$ = {
            official: S$,
            success: O$,
            success_details: x$,
            nofound: P$,
            nofound_details: A$,
            expired: I$,
            expired_details: R$,
            wrong: N$,
            wrong_details: C$,
            error: L$,
            error_details: D$,
            gentle: M$,
            reminder: F$,
            certified: j$,
            step1: U$,
            step1_details: z$,
            step2: G$,
            step2_details: B$
        },
        H$ = "공식 정품 PG 게임",
        W$ = "인증에 성공했습니다",
        q$ = "축하합니다! 공식 정품 게임을 플레이하고 계십니다.",
        K$ = "거래 ID를 찾을 수 없습니다",
        Y$ = "게임 기록 페이지로 돌아가 최근 베팅 기록을 인증하시기 바랍니다.",
        X$ = "세션 만료됨",
        J$ = "게임 기록 페이지로 돌아가 최근 베팅 기록을 인증하시기 바랍니다.",
        Q$ = "정확하지 않은 매개변수",
        Z$ = "게임 기록 페이지로 돌아가 최근 베팅 기록을 인증하시기 바랍니다.",
        eS = "내부 서버 오류",
        tS = "새로고침 하거나 게임 기록 페이지로 돌아가 최근 베팅 기록을 인증하시기 바랍니다.",
        nS = "안내문",
        sS = "위조된 게임은 인증되지 않으며 보안상의 위험 및 금전적인 위협을 초래할 수 있습니다. 공식 인증 웹사이트인 {link}을 통해 귀하의 권리가 보호되고 있는지 확인하시기 바랍니다.",
        rS = "PG SOFT™ 제품은 세계적으로 권위 있는 BMM 및 GA를 통해 엄격한 이중 인증과 테스트를 거쳐, RNG 알고리즘 및 구현, 게임 수학, 규칙이 업계에서 가장 높은 수준의 공정성 및 무결성 표준을 준수하도록 보장합니다.",
        iS = "1단계:",
        oS = "거래 ID 하나 를선택합니다.",
        aS = "2단계:",
        lS = "인증 버튼을 클릭합니다. 자동으로 리디렉션됩니다.",
        cS = {
            official: H$,
            success: W$,
            success_details: q$,
            nofound: K$,
            nofound_details: Y$,
            expired: X$,
            expired_details: J$,
            wrong: Q$,
            wrong_details: Z$,
            error: eS,
            error_details: tS,
            gentle: nS,
            reminder: sS,
            certified: rS,
            step1: iS,
            step1_details: oS,
            step2: aS,
            step2_details: lS
        },
        uS = "ເກມ PG ແທ້ ແລະ ເປັນທາງການ",
        fS = "ການກວບສອບສໍາເລັດແລ້ວ",
        dS = "ຍິນດີນໍາ! ທ່ານກໍາລັງຫຼິ້ນເກມຂອງແທ້ ແລະ ເປັນທາງການ.",
        _S = "ບໍ່ພົບລະຫັດທຸລະກໍາ",
        hS = "ກະລຸນາກັບໄປທີ່ໜ້າປະຫວັດເກມເພື່ອກວດສອບບັນທຶກການເດີມພັນຄັ້ງຫຼ້າສຸດ.",
        pS = "ເຊັດຊັນຫມົດອາຍຸແລ້ວ",
        mS = "ກະລຸນາກັບໄປທີ່ໜ້າປະຫວັດເກມເພື່ອກວດສອບບັນທຶກການເດີມພັນຄັ້ງຫຼ້າສຸດ.",
        gS = "ປັດໄຈກໍານົດບໍ່ຖືກຕ້ອງ",
        yS = "ກະລຸນາກັບໄປທີ່ໜ້າປະຫວັດເກມເພື່ອກວດສອບບັນທຶກການເດີມພັນຄັ້ງຫຼ້າສຸດ.",
        vS = "ເກີດຂໍ້ພິດພາດເຊີບເວີພາຍໃນ",
        bS = "ກະລຸນາໂຫຼດຂໍ້ມູນຄືນໃໝ່ ຫຼື ກັບໄປທີ່ໜ້າປະຫວັດເກມເພື່ອກວດສອບບັນທຶກການເດີມພັນຄັ້ງຫຼ້າສຸດ.",
        kS = "ຂໍອະນຸຍາດແຈ້ງເຕືອນ",
        TS = "ເກມທີ່ຮຽນແບບແມ່ນບໍ່ໄດ້ຮັບການຮັບຮອງ ແລະ ອາດຈະກໍ່ໃຫ້ເກີດຄວາມສ່ຽງດ້ານຄວາມປອດໄພ ແລະ ການຄຸກຄາມທາງດ້ານການເງິນ. ກະລຸນານໍາໃຊ້ເວັບໄຊ້ທາງການ {link} ເພື່ອໃຫ້ໝັ້ນໃຈວ່າສິດຂອງທ່ານໄດ້ຮັບການປົກປ້ອງ.",
        ES = "ຜະລິດຕະພັນ PG SOFT™ ໄດ້ຮັບການຮັບຮອງ ແລະ ທົດສອບຢ່າງເຂັ້ມງວດໂດຍ ໜ່ວຍງານ BMM ແລະ GA ລະດັບໂລກ, ເພື່ອໃຫ້ໝັ້ນໃຈວ່າ ສູດການຄິດໄລ່ RNG ແລະ ການນໍາໄປໃຊ້, ຄະນິດສາດໃນເກມ ແລະ ກົດລະບຽບ ເປັນໄປຕາມມາດຕະຖານອຸດສາຫະກໍາສູງສຸດ ເພື່ອຄວາມເປັນທໍາ ແລະ ຄວາມສົມບູນ.",
        wS = "ຂັ້ນຕອນ 1:",
        $S = "ເລືອກໜຶ່ງໃນລະຫັດທຸລະກໍາ.",
        SS = "ຂັ້ນຕອນ 2:",
        OS = "ກົດທີ່ປຸ່ມກວດສອບ.ທ່ານຈະຖືກນໍາໄປໂດຍອັດຕະໂນມັດ.",
        xS = {
            official: uS,
            success: fS,
            success_details: dS,
            nofound: _S,
            nofound_details: hS,
            expired: pS,
            expired_details: mS,
            wrong: gS,
            wrong_details: yS,
            error: vS,
            error_details: bS,
            gentle: kS,
            reminder: TS,
            certified: ES,
            step1: wS,
            step1_details: $S,
            step2: SS,
            step2_details: OS
        },
        PS = "Oficialūs ir originalūs PG žaidimai",
        AS = "Patvirtinimas sėkmingas!",
        IS = "Sveikiname! Žaidžiate oficialų ir originalų žaidimą.",
        RS = "Sandorio ID nerastas",
        NS = "Grįžkite į žaidimo istorijos puslapį, kad patikrintumėte paskutinio statymo įrašą.",
        CS = "Prisijungimo laikas baigėsi",
        LS = "Grįžkite į žaidimo istorijos puslapį, kad patikrintumėte paskutinio statymo įrašą.",
        DS = "Neteisingas parametras",
        MS = "Grįžkite į žaidimo istorijos puslapį, kad patikrintumėte paskutinio statymo įrašą.",
        FS = "Vidinė serverio klaida",
        jS = "Atnaujinkite arba grįžkite į žaidimo istorijos puslapį, kad patikrintumėte paskutinio statymo įrašą.",
        US = "Tik primename",
        zS = "Padirbti žaidimai nėra sertifikuoti ir gali kelti finansinę grėsmę bei pavojų saugumui. Norėdami užtikrinti, kad jūsų teisės yra apsaugotos, naudokitės oficialia patvirtinimo svetaine {link}",
        GS = "PG SOFT™ produktus griežtai du kartus sertifikavo ir patikrino pasaulinės institucijos BMM ir GA, užtikrindamos, kad RNG algoritmas ir įgyvendinimas, žaidimo matematika ir taisyklės atitinka aukščiausius patikimumo ir sąžiningumo standartus šioje srityje.",
        BS = "1 VEIKSMAS",
        VS = "Pasirinkite vieną iš sandorio ID.",
        HS = "2 VEIKSMAS",
        WS = "Spustelėkite patvirtinimo mygtuką. Būsite automatiškai nukreipti.",
        qS = {
            official: PS,
            success: AS,
            success_details: IS,
            nofound: RS,
            nofound_details: NS,
            expired: CS,
            expired_details: LS,
            wrong: DS,
            wrong_details: MS,
            error: FS,
            error_details: jS,
            gentle: US,
            reminder: zS,
            certified: GS,
            step1: BS,
            step1_details: VS,
            step2: HS,
            step2_details: WS
        },
        KS = "Албан ёсны, жинхэнэ PG тоглоомууд",
        YS = "Баталгаажуулалт амжилттай",
        XS = "Баяр хүргэе! Та албан ёсны, жинхэнэ тоглоом тоглож байна.",
        JS = "Гүйлгээний ID олдсонгүй",
        QS = "Хамгийн сүүлийн мөрийний бүртгэлийг баталгаажуулахын тулд тоглоомын түүхийн хуудас руу буцна уу.",
        ZS = "Үеийн хугацаа дууссан",
        eO = "Хамгийн сүүлийн мөрийний бүртгэлийг баталгаажуулахын тулд тоглоомын түүхийн хуудас руу буцна уу.",
        tO = "Буруу параметр",
        nO = "Хамгийн сүүлийн мөрийний бүртгэлийг баталгаажуулахын тулд тоглоомын түүхийн хуудас руу буцна уу.",
        sO = "Дотоод серверийн алдаа",
        rO = "Хамгийн сүүлийн мөрийний бүртгэлийг баталгаажуулахын тулд тоглоомын түүхийн хуудсыг шинэчлэх эсвэл буцна уу.",
        iO = "Нөхөрсөг сануулга",
        oO = "Хуурамч тоглоомууд гэрчилгээгүй бөгөөд аюулгүй байдлын эрсдэл, санхүүгийн аюул учруулж болзошгүй. Өөрийн эрхийг хамгаалахын тулд {link} албан ёсны баталгаажуулах вэбсайтыг ашиглана уу.",
        aO = "BMM болон GA глобал удирдлагууд PG SOFT ™ бүтээгдэхүүнүүдэд хос гэрчилгээ олгож, туршиж үзсэн \nбөгөөд RNG алгоритм ба хэрэгжилт, тоглоомын математик, дүрмүүд шударга, хүртээмжтэй байдлын хувьд салбарын хамгийн өндөр стандартад нийцэж байгааг баталгаажуулсан.",
        lO = "АЛХАМ 1:",
        cO = "Гүйлгээний ID-ны нэгийг сонгоно уу",
        uO = "АЛХАМ 2:",
        fO = "Баталгаажуулах товч дээр дарна уу. Таныг автоматаар дахин чиглүүлнэ:",
        dO = {
            official: KS,
            success: YS,
            success_details: XS,
            nofound: JS,
            nofound_details: QS,
            expired: ZS,
            expired_details: eO,
            wrong: tO,
            wrong_details: nO,
            error: sO,
            error_details: rO,
            gentle: iO,
            reminder: oO,
            certified: aO,
            step1: lO,
            step1_details: cO,
            step2: uO,
            step2_details: fO
        },
        _O = "တရားဝင်ပြီး စစ်မှန်သော PG ဂိမ်းများ",
        hO = "အတည်ပြုချက် အောင်မြင်သည်",
        pO = "ဂုဏ်ယူပါတယ်! သင်သည် တရားဝင်ပြီး စစ်မှန်သောဂိမ်းကို ကစားနေသည်။",
        mO = "ငွေလွှဲအိုင်ဒီကို မတွေ့ရပါ",
        gO = "နောက်ဆုံး လောင်းကစားမှတ်တမ်းကို အတည်ပြုရန် ဂိမ်းမှတ်တမ်း စာမျက်နှာသို့ ပြန်သွားပါ။",
        yO = "အခန်းကဏ္ဍ သက်တမ်းလွန်သွားပါပြီ",
        vO = "နောက်ဆုံး လောင်းကစားမှတ်တမ်းကို အတည်ပြုရန် ဂိမ်းမှတ်တမ်း စာမျက်နှာသို့ ပြန်သွားပါ။",
        bO = "ကန့်သတ်ချက် မှားယွင်းနေသည်",
        kO = "နောက်ဆုံး လောင်းကစားမှတ်တမ်းကို အတည်ပြုရန် ဂိမ်းမှတ်တမ်း စာမျက်နှာသို့ ပြန်သွားပါ။",
        TO = "အတွင်းပိုင်းဆာဗာ ချို့ယွင်းချက်",
        EO = "နောက်ဆုံး လောင်းကစားမှတ်တမ်းကို အတည်ပြုရန် ဂိမ်းမှတ်တမ်း စာမျက်နှာသို့ ပြန်သွားပါ (သို့) ရီဖရက်ရှ်လုပ်ပါ။",
        wO = "ပြေပြစ်သော အသိပေးချက်",
        $O = "ဂိမ်းအတူများသည် တရားမဝင်သည့်အပြင် လုံခြုံရေး နှင့် ငွေကြေး ခြိမ်းခြောက်မှု အန္တရာယ်များ ဖြစ်ပေါ်လာနိုင်သည်။ သင့်အကျိုးခံစားခွင့်များကို သေချာစွာ ကာကွယ်နိုင်ရန် တရားဝင် အတည်ပြုထားသော ဝဘ်ဆိုက် {link} ကို အသုံးပြုပါ။",
        SO = "PG SOFT™ ကို ကမ္ဘာ့အာဏာပိုင်အဖွဲ့ BMM နှင့် GA တို့က စစ်ဆေး၍၊ အသိအမှတ်ပြုထားသည်။ ၎င်းက RNG စနစ်၊စီမံဆောင်ရွက်ချက် နှင့် ဂိမ်း၏ ဂဏန်းသင်္ချာတို့ကို စီမံပေးသည့်အပြင်၊ စည်းမျဉ်းများမှာလည်းတရားမျှတသည့် အမြင့်ဆုံးစံညွှန်းများနှင့် ကိုက်ညီသည်။",
        OO = "အဆင့် 1-",
        xO = "ငွေအလွှဲအပြောင်းအိုင်ဒီထဲမှတစ်ခုကို‌ ရွေးပါ။",
        PO = "အဆင့် 2-",
        AO = "အတည်ပြုခလုတ်ကိုနှိပ်ပါ။သင့်အား အလိုအလျောက် ပြန်လည်ညွှန်ပြ‌ပေးမည်။",
        IO = {
            official: _O,
            success: hO,
            success_details: pO,
            nofound: mO,
            nofound_details: gO,
            expired: yO,
            expired_details: vO,
            wrong: bO,
            wrong_details: kO,
            error: TO,
            error_details: EO,
            gentle: wO,
            reminder: $O,
            certified: SO,
            step1: OO,
            step1_details: xO,
            step2: PO,
            step2_details: AO
        },
        RO = "Officiële en originele PG-spellen",
        NO = "Verificatie gelukt",
        CO = "Gefeliciteerd! Je speelt een officieel en origineel spel.",
        LO = "Transactie-ID niet gevonden",
        DO = "Ga terug naar de pagina met de spelgeschiedenis om de laatste inzet te controleren.",
        MO = "Sessie verlopen",
        FO = "Ga terug naar de pagina met de spelgeschiedenis om de laatste inzet te controleren.",
        jO = "Onjuist parameter",
        UO = "Ga terug naar de pagina met de spelgeschiedenis om de laatste inzet te controleren.",
        zO = "Interne serverfout",
        GO = "Vernieuw of ga terug naar de pagina met de spelgeschiedenis om de laatste inzet te controleren.",
        BO = "Vriendelijke herinnering",
        VO = "Namaakspellen zijn niet gecertificeerd en kunnen beveiligingsrisico's en financiële bedreigingen vormen. Gebruik de officiële verificatiewebsite {link} om er zeker van te zijn dat je rechten beschermd zijn.",
        HO = "De autoriteiten BMM en GA certificeren en testen de producten van PG SOFT™ extra streng. Zo voldoen spelberekeningen en regels aan de hoogste integriteitsnormen, evenals het RNG-algoritme en de implementatie.",
        WO = "STAP 1:",
        qO = "Kies een van de Transactie-ID's.",
        KO = "STAP 2:",
        YO = "Klik op de knop voor verificatie. Je wordt automatisch omgeleid.",
        XO = {
            official: RO,
            success: NO,
            success_details: CO,
            nofound: LO,
            nofound_details: DO,
            expired: MO,
            expired_details: FO,
            wrong: jO,
            wrong_details: UO,
            error: zO,
            error_details: GO,
            gentle: BO,
            reminder: VO,
            certified: HO,
            step1: WO,
            step1_details: qO,
            step2: KO,
            step2_details: YO
        },
        JO = "Offisielle og ekte PG-spill",
        QO = "Verifiseringen er vellykket",
        ZO = "Gratulerer! Du spiller et offisielt og ekte spill.",
        ex = "Transaksjons-ID ikke funnet",
        tx = "Gå tilbake til spillhistorikksiden for å verifisere din forrige innsatsrekord.",
        nx = "Økten har utløpt",
        sx = "Gå tilbake til spillhistorikksiden for å verifisere din forrige innsatsrekord.",
        rx = "Feil parameter",
        ix = "Gå tilbake til spillhistorikksiden for å verifisere din forrige innsatsrekord.",
        ox = "Intern serverfeil",
        ax = "Oppdater eller gå tilbake til spillhistorikksiden for å verifisere din forrige innsatsrekord.",
        lx = "Vennlig påminnelse",
        cx = "Forfalskede spill er ikke sertifiserte og kan utgjøre sikkerhetsrisikoer og økonomiske trusler. Bruk det offisielle verifiseringsnettstedet {link} for å sikre at rettighetene dine beskyttes.",
        ux = "PG SOFT™-produkter er strengt dobbeltsertifisert og testet av globale myndigheter, BMM og GA,\nsom sikrer at RNG-algoritmen og implementering, spillmatematikk og regler oppfyller\ntoppbransjestandarder for rettferdighet og integritet.",
        fx = "TRINN 1:",
        dx = "Velg én av Transaksjons-ID.",
        _x = "TRINN 2:",
        hx = "Klikk på Verifiser-knappen. Du blir omdirigert automatisk.",
        px = {
            official: JO,
            success: QO,
            success_details: ZO,
            nofound: ex,
            nofound_details: tx,
            expired: nx,
            expired_details: sx,
            wrong: rx,
            wrong_details: ix,
            error: ox,
            error_details: ax,
            gentle: lx,
            reminder: cx,
            certified: ux,
            step1: fx,
            step1_details: dx,
            step2: _x,
            step2_details: hx
        },
        mx = "Oficjalne i oryginalne PG",
        gx = "Pomyślna weryfikacja",
        yx = "Gratulacje! Grasz w oficjalną i oryginalną grę.",
        vx = "Nie znaleziono ID transakcji",
        bx = "Wróć na stronę historii gier, aby zweryfikować ostatni zarejestrowany zakład.",
        kx = "Sesja wygasła",
        Tx = "Wróć na stronę historii gier, aby zweryfikować ostatni zarejestrowany zakład.",
        Ex = "Nieprawidłowy parametr",
        wx = "Wróć na stronę historii gier, aby zweryfikować ostatni zarejestrowany zakład.",
        $x = "Wewnętrzny błąd serwera",
        Sx = "Odśwież lub wróć na stronę historii gier, aby zweryfikować ostatni zarejestrowany zakład.",
        Ox = "Przypomnienie",
        xx = "Nieoryginalne gry nie są certyfikowane – gra w takie gry może się wiązać z zagrożeniami w zakresach bezpieczeństwa oraz finansowym. Skorzystaj z oficjalnej strony weryfikacyjnej {link}, aby się upewnić, że Twoje prawa są chronione.",
        Px = "Produkty PG SOFT™ zostały przetestowane przez globalne organy BMM oraz GA i otrzymały certyfikaty\npotwierdzające, że algorytm oraz implementacja RNG, matematyka gier i ich zasady są zgodne\nz najwyższymi standardami uczciwości i integralności.",
        Ax = "KROK 1.:",
        Ix = "Wybierz jedno z ID transakcji.",
        Rx = "KROK 2.:",
        Nx = "Kliknij przycisk Weryfikuj. Nastąpi automatyczne przekierowanie.",
        Cx = {
            official: mx,
            success: gx,
            success_details: yx,
            nofound: vx,
            nofound_details: bx,
            expired: kx,
            expired_details: Tx,
            wrong: Ex,
            wrong_details: wx,
            error: $x,
            error_details: Sx,
            gentle: Ox,
            reminder: xx,
            certified: Px,
            step1: Ax,
            step1_details: Ix,
            step2: Rx,
            step2_details: Nx
        },
        Lx = "Jogos PG Oficiais e Genuínos",
        Dx = "A verificação foi bem-sucedida",
        Mx = "Parabéns! Está a jogar um jogo oficial e genuíno.",
        Fx = "A ID da transação não foi encontrada",
        jx = "Por favor, regresse à página do histórico do jogo para verificar o registo da aposta mais recente.",
        Ux = "Sessão Expirada",
        zx = "Por favor, regresse à página do histórico do jogo para verificar o registo da aposta mais recente.",
        Gx = "Parâmetro Incorreto",
        Bx = "Por favor, regresse à página do histórico do jogo para verificar o registo da aposta mais recente.",
        Vx = "Erro Interno do Servidor",
        Hx = "Por favor, atualize ou regresse à página do histórico do jogo para verificar o registo da aposta mais recente.",
        Wx = "Lembrete Amigável",
        qx = "Os jogos contrafeitos não são certificados e podem colocar riscos de segurança e ameaças financeiras. Por favor, utilize o site oficial de verificação {link} para garantir que os seus direitos são protegidos.",
        Kx = "Os produtos PG SOFT™ foram certificados e testados pela BMM e a GA, garantindo que o algoritmo\ne a implementação do RNG, a matemática do jogo e as regras cumpram os padrões mais\nelevados do setor para imparcialidade e integridade.",
        Yx = "PASSO 1:",
        Xx = "Selecione uma das ID da Transação.",
        Jx = "PASSO 2:",
        Qx = "Clique no botão Verificar. Será redirecionado automaticamente.",
        Zx = {
            official: Lx,
            success: Dx,
            success_details: Mx,
            nofound: Fx,
            nofound_details: jx,
            expired: Ux,
            expired_details: zx,
            wrong: Gx,
            wrong_details: Bx,
            error: Vx,
            error_details: Hx,
            gentle: Wx,
            reminder: qx,
            certified: Kx,
            step1: Yx,
            step1_details: Xx,
            step2: Jx,
            step2_details: Qx
        },
        eP = "Jocuri PG originale și autentice",
        tP = "Verificare reușită",
        nP = "Felicitări! Jucați un joc oficial și autentic.",
        sP = "ID Tranzacție nu a fost găsit",
        rP = "Reveniți la pagina de istoric al jocului pentru a verifica ultima înregistrare a pariului.",
        iP = "Sesiune expirată",
        oP = "Reveniți la pagina de istoric al jocului pentru a verifica ultima înregistrare a pariului.",
        aP = "Parametru incorect",
        lP = "Reveniți la pagina de istoric al jocului pentru a verifica ultima înregistrare a pariului.",
        cP = "Eroare de server intern",
        uP = "Reîncărcați pagina sau reveniți la pagina de istoric al jocului pentru a verifica ultima înregistrare a pariului.",
        fP = "Rețineți:",
        dP = "Jocurile contrafăcute nu sunt certificate și pot prezenta riscuri de securitate și amenințări financiare. Vă rugăm să utilizați site-ul oficial de verificare {link} pentru a vă asigura că drepturile dumneavoastră sunt protejate.",
        _P = "Produsele PG SOFT™ au fost dublu certificate și testate de BMM și GA, asigurându-se, astfel, \ncă algoritmul și implementarea RNG, matematica jocului și regulile respectă cele mai \nînalte standarde legate de echitate și integritate.",
        hP = "PASUL 1:",
        pP = "Selectați un ID Tranzacție.",
        mP = "PASUL 2:",
        gP = "Dați click pe butonul Verificare. Veți fi redirecționat automat.",
        yP = {
            official: eP,
            success: tP,
            success_details: nP,
            nofound: sP,
            nofound_details: rP,
            expired: iP,
            expired_details: oP,
            wrong: aP,
            wrong_details: lP,
            error: cP,
            error_details: uP,
            gentle: fP,
            reminder: dP,
            certified: _P,
            step1: hP,
            step1_details: pP,
            step2: mP,
            step2_details: gP
        },
        vP = "Официальные и оригинальные игры PG",
        bP = "Верификация прошла успешно",
        kP = "Поздравляем! Вы играете в официальную и оригинальную игру.",
        TP = "ID транзакции не найден",
        EP = "Вернись на страницу истории игры, чтобы посмотреть последнюю запись ставки.",
        wP = "Срок действия сеанса истек",
        $P = "Вернись на страницу истории игры, чтобы посмотреть последнюю запись ставки.",
        SP = "Неправильный параметр",
        OP = "Вернись на страницу истории игры, чтобы посмотреть последнюю запись ставки.",
        xP = "Внутренняя ошибка сервера",
        PP = "Обновите или вернитесь на страницу истории игры, чтобы посмотреть последнюю запись ставки.",
        AP = "Внимание!",
        IP = "Поддельные игры не сертифицированы и могут нести риск для безопасности и финансовые потери. Для обеспечения защиты ваших прав используйте официальный сайт проверки {link}.",
        RP = "Продукты PG SOFT™ протестированы и сертифицированы международными органами BMM и GA.\nЭто гарантирует, что алгоритм и реализация ГСЧ, математические модели и правила игр\nсоответствуют самым строгим отраслевым стандартам.",
        NP = "ШАГ 1:",
        CP = "Выберите один из ID транзакции.",
        LP = "ШАГ 2:",
        DP = "Нажмите кнопку «Верифицировать». Произойдет автоматическая переадресация.",
        MP = {
            official: vP,
            success: bP,
            success_details: kP,
            nofound: TP,
            nofound_details: EP,
            expired: wP,
            expired_details: $P,
            wrong: SP,
            wrong_details: OP,
            error: xP,
            error_details: PP,
            gentle: AP,
            reminder: IP,
            certified: RP,
            step1: NP,
            step1_details: CP,
            step2: LP,
            step2_details: DP
        },
        FP = "නිල සහ නියම PG ක්‍රීඩා",
        jP = "සත්‍යාපනය සාර්ථකයි",
        UP = "සුභපැතුම්! ඔබ නිල සහ නියම ක්‍රීඩාව ක්‍රීඩා කරමින් සිටී.",
        zP = "ගනුදෙනු ID හමු ‍නොවිය",
        GP = "නවතම ඔට්ටු වාර්තාව සත්‍යාපනය කිරීමට කරුණාකර ක්‍රීඩා ඉතිහාස පිටුවට ආපසු යන්න.",
        BP = "සැසිය අවසන් විය",
        VP = "නවතම ඔට්ටු වාර්තාව සත්‍යාපනය කිරීමට කරුණාකර ක්‍රීඩා ඉතිහාස පිටුවට ආපසු යන්න.",
        HP = "වැරදි පරාමිතිය",
        WP = "නවතම ඔට්ටු වාර්තාව සත්‍යාපනය කිරීමට කරුණාකර ක්‍රීඩා ඉතිහාස පිටුවට ආපසු යන්න.",
        qP = "අභ්‍යන්තර ‍සේවාදායක ‍දෝෂය",
        KP = "නවතම ඔට්ටු වාර්තාව සත්‍යාපනය කිරීමට කරුණාකර ක්‍රීඩා ඉතිහාස පිටුව නැවුම් කරන්න හෝ පිටුවට ආපසු යන්න.",
        YP = "කාරුණික මතක් කිරීම",
        XP = "ව්‍යාජ ක්‍රීඩා සහතික කර නොමැති අතර ආරක්ෂක අවදානම් සහ මූල්‍ය තර්ජන ඇති කළ හැකි ය. ඔබේ අයිතීන් සුරක්ෂිත බව සහතික කිරීමට කරුණාකර නිල සත්‍යාපන වෙබ් අඩවිය වන {link} භාවිත කරන්න.",
        JP = "PG SOFT™ නිෂ්පාදන RNG ඇල්ගොරිතම සහ ක්‍රියාත්මක කිරීම, ක්‍රීඩා ගණිතය සහ නීති \nසාධාරණත්වය සහ අඛණ්ඩතාව සඳහා ඉහළම කර්මාන්ත ප්‍රමිතීන් සපුරාලන බව සහතික කර \nගෝලීය අධිකාරීන් BMM සහ GA විසින් දැඩි ලෙස ද්විත්ව සහතික කර පරීක්ෂා කර ඇත.",
        QP = "අදියර 1:",
        ZP = "‍තෝරන්න ගනුදෙනු ID.",
        eA = "අදියර 2:",
        tA = "ක්ලික් කරන්න ස්ථිර ‍බොත්තම. ස්වයංව ‍යොමු ‍කෙ‍රේ.",
        nA = {
            official: FP,
            success: jP,
            success_details: UP,
            nofound: zP,
            nofound_details: GP,
            expired: BP,
            expired_details: VP,
            wrong: HP,
            wrong_details: WP,
            error: qP,
            error_details: KP,
            gentle: YP,
            reminder: XP,
            certified: JP,
            step1: QP,
            step1_details: ZP,
            step2: eA,
            step2_details: tA
        },
        sA = "Oficiálne a pravé hry PG",
        rA = "Overenie prebehlo úspešne",
        iA = "Gratulujeme! Hráte oficiálnu a pravú hru.",
        oA = "ID transakcie nebolo nájdené",
        aA = "Vráťte sa prosím na stránku predošlých hier, aby ste overili najnovší stávkový záznam.",
        lA = "Relácia vypršala",
        cA = "Vráťte sa prosím na stránku predošlých hier, aby ste overili najnovší stávkový záznam.",
        uA = "Nesprávny parameter",
        fA = "Vráťte sa prosím na stránku predošlých hier, aby ste overili najnovší stávkový záznam.",
        dA = "Interná chyba servera",
        _A = "Aktualizujte stránku alebo sa vráťte na stránku predošlých hier, aby ste overili najnovší stávkový záznam.",
        hA = "Jemné pripomenutie",
        pA = "Falšované hry nie sú certifikované a môžu predstavovať riziko pre bezpečnosť a finančnú hrozbu. Na zabezpečenie ochrany svojich práv použite oficiálnu overovaciu webovú stránku {link}.",
        mA = "Produkty PG SOFT™ boli dôkladne duálne certifikované a testované globálnymi autoritami BMM a GA, ktoré zaručujú, že algoritmus RNG a jeho implementácia, herná matematika a pravidlá spĺňajú najprísnejšie priemyselné normy pre spravodlivosť a integritu.",
        gA = "KROK 1:",
        yA = "Vyberte jedno z ID transakcie.",
        vA = "KROK 2:",
        bA = "Kliknite na Tlačidlo overiť. Budete automaticky presmerovaný/á.",
        kA = {
            official: sA,
            success: rA,
            success_details: iA,
            nofound: oA,
            nofound_details: aA,
            expired: lA,
            expired_details: cA,
            wrong: uA,
            wrong_details: fA,
            error: dA,
            error_details: _A,
            gentle: hA,
            reminder: pA,
            certified: mA,
            step1: gA,
            step1_details: yA,
            step2: vA,
            step2_details: bA
        },
        TA = "Lojërat zyrtare dhe origjinale të PG",
        EA = "Verifikimi me sukses",
        wA = "Urime! Jeni duke luajtur një lojë zyrtare dhe origjinale.",
        $A = "ID e transaksionit nuk u gjet",
        SA = "Ju lutemi kthehuni në faqen e historikut të lojës për të verifikuar regjistrimet më të fundit të basteve.",
        OA = "Sesioni Skadoi",
        xA = "Ju lutemi kthehuni në faqen e historikut të lojës për të verifikuar regjistrimet më të fundit të basteve.",
        PA = "Parametër i Pasaktë",
        AA = "Ju lutemi kthehuni në faqen e historikut të lojës për të verifikuar regjistrimet më të fundit të basteve.",
        IA = "Gabim i Brendshëm Serveri",
        RA = "Ju lutemi rifreskoni ose kthehuni në faqen e historikut të lojës për të verifikuar regjistrimet më të fundit të basteve.",
        NA = "Përkujtim Xhentil",
        CA = "Lojërat e falsifikuara nuk janë të certifikuara dhe mund të paraqesin rreziqe sigurie dhe kërcënime financiare. Ju lutemi përdorni faqen zyrtare të verifikimit {link} për të siguruar që të drejtat tuaja janë të mbrojtura.",
        LA = "Produktet PG SOFT™ janë certifikuar dhe testuar nga dy autoritetet globale si BMM dhe GA, duke siguruar që algoritmi RNG dhe zbatimi, matematika dhe rregullat e lojës përmbushin standardet më të larta\ntë industrisë për ndershmëri dhe integritet.",
        DA = "HAPI 1:",
        MA = "Zgjidh një nga ID-të e transaksionit.",
        FA = "HAPI 2:",
        jA = "Kliko butonin Verifiko. Ju do të ridrejtoheni.",
        UA = {
            official: TA,
            success: EA,
            success_details: wA,
            nofound: $A,
            nofound_details: SA,
            expired: OA,
            expired_details: xA,
            wrong: PA,
            wrong_details: AA,
            error: IA,
            error_details: RA,
            gentle: NA,
            reminder: CA,
            certified: LA,
            step1: DA,
            step1_details: MA,
            step2: FA,
            step2_details: jA
        },
        zA = "Zvanične i Prave PG igre",
        GA = "Verifikacija je uspešna",
        BA = "Čestitamo! Igrate zvaničnu i pravu igru.",
        VA = "ID transakcije nije pronađen",
        HA = "Molimo vas, vratite se na stranicu istorije igre kako biste verifikovali poslednji rekord uloga.",
        WA = "Sesija je Istekla",
        qA = "Molimo vas, vratite se na stranicu istorije igre kako biste verifikovali poslednji rekord uloga.",
        KA = "Neispravan parametar",
        YA = "Molimo vas, vratite se na stranicu istorije igre kako biste verifikovali poslednji rekord uloga.",
        XA = "Unutrašnja Greška Servera.",
        JA = "Molimo vas, osvežite ili se vratite na stranicu istorije igre kako biste verifikovali poslednji rekord uloga.",
        QA = "Prijateljski podsetnik",
        ZA = "Falsifikovane igre nisu sertifikovane i mogu predstavljati bezbednosni rizik i finansijsku opasnost. Molimo vas, koristite zvanični veb-sajt za verifikaciju {link} kako biste bili sigurni da su vaša prava zaštićena.",
        eI = "PG SOFT™ proizvodi su strogo dvostruko sertifikovani i testirani od strane svetskih autoriteta BMM i GA, kako bi RNG algoritam, matematika u igri i pravila zadovoljili najviše standarde poštene igre i integriteta u ovoj industriji.",
        tI = "KORAK 1:",
        nI = "Odaberi jedan od ID-ova transakcije.",
        sI = "KORAK 2:",
        rI = "Klikni na Taster potvrde. Bićeš preusmeren",
        iI = {
            official: zA,
            success: GA,
            success_details: BA,
            nofound: VA,
            nofound_details: HA,
            expired: WA,
            expired_details: qA,
            wrong: KA,
            wrong_details: YA,
            error: XA,
            error_details: JA,
            gentle: QA,
            reminder: ZA,
            certified: eI,
            step1: tI,
            step1_details: nI,
            step2: sI,
            step2_details: rI
        },
        oI = "Officiella och äkta PG-spel",
        aI = "Verifiering lyckades",
        lI = "Grattis! Du spelar ett officiellt och äkta spel.",
        cI = "Transaktions-ID hittades inte",
        uI = "Återgå till spelhistoriksidan för att verifiera den senaste spelregistreringen.",
        fI = "Session har löpt ut",
        dI = "Återgå till spelhistoriksidan för att verifiera den senaste spelregistreringen.",
        _I = "Felaktig parameter",
        hI = "Återgå till spelhistoriksidan för att verifiera den senaste spelregistreringen.",
        pI = "Internt serverfel",
        mI = "Uppdatera eller återgå till spelhistoriksidan för att verifiera den senaste spelregistreringen.",
        gI = "Snäll påminnelse",
        yI = "Förfalskade spel är inte certifierade och kan utföra säkerhetsrisker och finansiella hot. Använd den officiella verifieringswebbplatsen {link} för att se till att dina rättigheter är skyddade.",
        vI = "PG SOFT™-produkter har dubbelcertifierats och testats av de globala myndigheterna BMM och GA, som garanterar att RNG-algoritmen och implementering, spelmatematik och regler följer de högsta branschstandarderna för rättvisa och  integritet.",
        bI = "STEG 1:",
        kI = "Välj ett Transaktions-ID.",
        TI = "STEG 2:",
        EI = "Klicka på knappen Verifiera. Du omdirigeras automatiskt.",
        wI = {
            official: oI,
            success: aI,
            success_details: lI,
            nofound: cI,
            nofound_details: uI,
            expired: fI,
            expired_details: dI,
            wrong: _I,
            wrong_details: hI,
            error: pI,
            error_details: mI,
            gentle: gI,
            reminder: yI,
            certified: vI,
            step1: bI,
            step1_details: kI,
            step2: TI,
            step2_details: EI
        },
        $I = "เกม PG ของแท้อย่างเป็นทางการ",
        SI = "การยืนยันสำเร็จ",
        OI = "ยินดีด้วย! คุณกำลังเล่นเกมของแท้อย่างเป็นทางการ",
        xI = "ไม่พบ ID ธุรกรรม",
        PI = "กรุณากลับไปยังหน้าประวัติเกมเพื่อยืนยันบันทึกเดิมพันล่าสุด",
        AI = "เซสชันหมดอายุ",
        II = "กรุณากลับไปยังหน้าประวัติเกมเพื่อยืนยันบันทึกเดิมพันล่าสุด",
        RI = "พารามิเตอร์ไม่ถูกต้อง",
        NI = "กรุณากลับไปยังหน้าประวัติเกมเพื่อยืนยันบันทึกเดิมพันล่าสุด",
        CI = "ข้อผิดพลาดเซิร์ฟเวอร์ภายใน",
        LI = "กรุณารีเฟรชหรือกลับไปยังหน้าประวัติเกมเพื่อยืนยันบันทึกเดิมพันล่าสุด",
        DI = "คำเตือน",
        MI = "เกมลอกเลียนแบบไม่ได้รับการรับรองและอาจก่อให้เกิดความเสี่ยงด้านความปลอดภัยและภัยคุกคามทางการเงิน กรุณาใช้เว็บไซต์ยืนยันอย่างเป็นทางการ {link} เพื่อให้มั่นใจว่าสิทธิ์ของคุณได้รับการคุ้มครอง",
        FI = "ผลิตภัณฑ์ PG SOFT™ ได้รับการรับรองและทดสอบอย่างเข้มงวดโดยหน่วยงาน BMM และ GA ระดับโลก เพื่อให้มั่นใจว่าอัลกอริทึม RNG และการนำไปใช้ คณิตศาสตร์ในเกม และกฎเกณฑ์เป็นไปตาม มาตรฐานอุตสาหกรรมสูงสุดเพื่อความยุติธรรมและความสมบูรณ์",
        jI = "ขั้นที่ 1:",
        UI = "เลือกหนึ่งใน ID ธุรกรรม",
        zI = "ขั้นที่ 2:",
        GI = "คลิกที่ปุ่มยืนยันระบบจะนำทางโดยอัตโนมัติ",
        BI = {
            official: $I,
            success: SI,
            success_details: OI,
            nofound: xI,
            nofound_details: PI,
            expired: AI,
            expired_details: II,
            wrong: RI,
            wrong_details: NI,
            error: CI,
            error_details: LI,
            gentle: DI,
            reminder: MI,
            certified: FI,
            step1: jI,
            step1_details: UI,
            step2: zI,
            step2_details: GI
        },
        VI = "Resmi ve Orijinal PG Oyunları",
        HI = "Doğrulama başarılı",
        WI = "Tebrikler! Resmi ve gerçek bir oyun oynuyorsunuz.",
        qI = "İşlem kimliği bulunamadı",
        KI = "En son bahis kaydını doğrulamak için lütfen oyun geçmişi sayfasına dönün.",
        YI = "Oturum Süresi Doldu",
        XI = "En son bahis kaydını doğrulamak için lütfen oyun geçmişi sayfasına dönün.",
        JI = "Hatalı Parametre",
        QI = "En son bahis kaydını doğrulamak için lütfen oyun geçmişi sayfasına dönün.",
        ZI = "Dahili Sunucu Hatası",
        eR = "En son bahis kaydını doğrulamak için lütfen yenileyin veya oyun geçmişi sayfasına dönün.",
        tR = "Nazik Hatırlatma",
        nR = "Sahte oyunlar sertifikalı değildir ve güvenlik riskleri ve finansal tehditler oluşturabilir. Haklarınızın korunduğundan emin olmak için lütfen {link} resmi doğrulama web sitesini kullanın.",
        sR = "PG SOFT™ ürünleri; RNG'nin algoritması ve uygulanması, oyun matematiği ve kurallarının adillik ve dürüstlük açısından en yüksek sektör standartlarını karşıladığından emin olunması amacıyla BMM ve GA adlı küresel yetkili kuruluşlar tarafından sıkı testlerden geçirilerek bu ürünlere çift sertifika verilmiştir.",
        rR = "ADIM 1:",
        iR = "Bir İşlem Kimliği seçin.",
        oR = "ADIM 2:",
        aR = "Doğrula düğmesine tıklayın. Otomatik olarak yönlendirilirsiniz.",
        lR = {
            official: VI,
            success: HI,
            success_details: WI,
            nofound: qI,
            nofound_details: KI,
            expired: YI,
            expired_details: XI,
            wrong: JI,
            wrong_details: QI,
            error: ZI,
            error_details: eR,
            gentle: tR,
            reminder: nR,
            certified: sR,
            step1: rR,
            step1_details: iR,
            step2: oR,
            step2_details: aR
        },
        cR = "Справжні й офіційні PG Ігри",
        uR = "Верифікацію виконано успішно",
        fR = "Вітаємо! Ви граєте у справжню й офіційну гру.",
        dR = "ID транзакції не знайдено",
        _R = "Поверніться на сторінку історії гри, щоб перевірити останній запис ставки.",
        hR = "Сеанс закінчився",
        pR = "Поверніться на сторінку історії гри, щоб перевірити останній запис ставки.",
        mR = "Неправильний параметр",
        gR = "Поверніться на сторінку історії гри, щоб перевірити останній запис ставки.",
        yR = "Внутрішня помилка сервера",
        vR = "Оновіть або поверніться на сторінку історії гри, щоб перевірити останній запис ставки.",
        bR = "Дружнє нагадування",
        kR = "Підроблені ігри не сертифіковані та можуть становити загрозу безпеці й фінансові загрози. Скористайтеся офіційним вебсайтом для верифікації {link}, щоб переконатися в тому, що ваші права захищено.",
        TR = "Продукція ТМ PG SOFT відповідає суворим вимогам подвійної сертифікації та пройшла перевірку органами BMM і GA, що гарантує відповідність алгоритму, реалізації ГВЧ, математики і правил найвищим галузевим стандартам чесності та сумлінності.",
        ER = "КРОК 1:",
        wR = "Виберіть один з ID Транзакції",
        $R = "КРОК 2:",
        SR = "Натисніть на кнопку «Верифікувати». Вас буде автоматично перенаправлено.",
        OR = {
            official: cR,
            success: uR,
            success_details: fR,
            nofound: dR,
            nofound_details: _R,
            expired: hR,
            expired_details: pR,
            wrong: mR,
            wrong_details: gR,
            error: yR,
            error_details: vR,
            gentle: bR,
            reminder: kR,
            certified: TR,
            step1: ER,
            step1_details: wR,
            step2: $R,
            step2_details: SR
        },
        xR = "باضابطہ اور حقیقی PG گیمز",
        PR = "تصدیق کامیاب ہے",
        AR = "مبارک ہو! آپ ایک باضابطہ اور حقیقی گیم کھیل رہے ہیں۔",
        IR = "لین دین ID نہیں ملی",
        RR = "تازہ ترین شرط کے ریکارڈ کی تصدیق کے لیے براہ کرم گیم ہسٹری کے صفحے پر واپس جائیں۔",
        NR = "سیشن کی معیاد ختم ہوگئی",
        CR = "تازہ ترین شرط کے ریکارڈ کی تصدیق کے لیے براہ کرم گیم ہسٹری کے صفحے پر واپس جائیں۔",
        LR = "غلط پیرامیٹر",
        DR = "تازہ ترین شرط کے ریکارڈ کی تصدیق کے لیے براہ کرم گیم ہسٹری کے صفحے پر واپس جائیں۔",
        MR = "اندرونی سرور کی خرابی",
        FR = "تازہ ترین شرط کے ریکارڈ کی تصدیق کے لیے براہ کرم ریفریش کریں یا گیم ہسٹری کے صفحے پر واپس جائیں۔",
        jR = "ہلکی یاد دہانی",
        UR = "جعلی گیمز تصدیق شدہ نہیں ہیں اور ان سے سیکیورٹی اور مالی خطرات لاحق ہو سکتے ہیں۔ براہ کرم تصدیق کی باضابطہ ویب سائٹ {link} استعمال کریں تاکہ آپ کے حقوق محفوظ رہیں۔",
        zR = "PG SOFT™ پروڈکٹس کی عالمی حکام BMM اور GA کے ذریعے سختی سے دوہری تصدیق اور جانچ کی گئی ہے، اس بات کو یقینی بناتے ہوئے کہ RNG الگورتھم اور عمل درآمد، گیم میتھمیٹکس، اور قواعد انصاف اور دیانت کے اعلیٰ ترین صنعتی معیارات پر پورا اترتے ہیں۔",
        GR = "مرحلہ 1:",
        BR = "میں سے ایک کو منتخب کریں لین دین کی ID۔",
        VR = "مرحلہ 2:",
        HR = "پر کلک کریں تصدیق کا بٹن۔ آپ کو خودکار طور پر ری ڈائریکٹ کیا جائے گا۔",
        WR = {
            official: xR,
            success: PR,
            success_details: AR,
            nofound: IR,
            nofound_details: RR,
            expired: NR,
            expired_details: CR,
            wrong: LR,
            wrong_details: DR,
            error: MR,
            error_details: FR,
            gentle: jR,
            reminder: UR,
            certified: zR,
            step1: GR,
            step1_details: BR,
            step2: VR,
            step2_details: HR
        },
        qR = "Rasmiy va haqiqiy PG oʻyinlari",
        KR = "Tasdiqlash muvaffaqiyatli bajarildi",
        YR = "Tabriklaymiz! Siz rasmiy va haqiqiy oʻyin oʻynayapsiz.",
        XR = "Tranzaksiya IDsi topilmadi",
        JR = "Eng so'nggi tikish rekordini tekshirish uchun o'yin tarixi sahifasiga qayting.",
        QR = "Seans muddati tugadi",
        ZR = "Eng so'nggi tikish rekordini tekshirish uchun o'yin tarixi sahifasiga qayting.",
        eN = "Noto'g'ri Parametr",
        tN = "Eng so'nggi tikish rekordini tekshirish uchun o'yin tarixi sahifasiga qayting.",
        nN = "Ichki server xatosi",
        sN = "Eng so'nggi tikish rekordini tekshirish uchun sahifani yangilang yoki o'yin tarixi sahifasiga qayting.",
        rN = "Kamtarin Eslatma",
        iN = "Soxta o'yinlar sertifikatlanmagan va xavfsizlik va moliyaviy tahdidlarni keltirib chiqarishi mumkin. Huquqlaringiz himoyalanganiga ishonch hosil qilish uchun {link} rasmiy tekshirish veb-saytidan foydalaning.",
        oN = "PG SOFT™ mahsulotlari RNG algoritmi va joriy etilishi, oʻyin matematikasi va qoidalarning adolat va halolligi boʻyicha eng yuqori sanoat standartlarini taʼminlovchi BMM va GA global idoralari tomonidan qat'iy ikki karra sertifikatlangan va sinovdan oʻtgan.",
        aN = "1-QADAM:",
        lN = "Tranzaksiya IDdan birini tanlang.",
        cN = "2-QADAM:",
        uN = "Tasdiqlash tugmasini bosing. Siz avtomatik yoʻnaltirilasiz.",
        fN = {
            official: qR,
            success: KR,
            success_details: YR,
            nofound: XR,
            nofound_details: JR,
            expired: QR,
            expired_details: ZR,
            wrong: eN,
            wrong_details: tN,
            error: nN,
            error_details: sN,
            gentle: rN,
            reminder: iN,
            certified: oN,
            step1: aN,
            step1_details: lN,
            step2: cN,
            step2_details: uN
        },
        dN = "Trò chơi PG chính thức và chính hãng",
        _N = "Xác minh thành công",
        hN = "Xin chúc mừng! Bạn đang chơi một trò chơi chính thức và chính hãng.",
        pN = "Không tìm thấy mã giao dịch",
        mN = "Vui lòng quay trở lại trang lịch sử trò chơi để kiểm tra hồ sơ cược mới nhất.",
        gN = "Phiên đã hết hạn",
        yN = "Vui lòng quay trở lại trang lịch sử trò chơi để kiểm tra hồ sơ cược mới nhất.",
        vN = "Tham số không chính xác",
        bN = "Vui lòng quay trở lại trang lịch sử trò chơi để kiểm tra hồ sơ cược mới nhất.",
        kN = "Lỗi máy chủ nội bộ",
        TN = "Vui lòng làm mới hoặc quay trở lại trang lịch sử trò chơi để kiểm tra hồ sơ cược mới nhất.",
        EN = "Lời nhắc nhở nhẹ nhàng",
        wN = "Trò chơi giả mạo không được chứng nhận và có thể gây rủi ro về bảo mật cũng như tài chính. Vui lòng sử dụng trang web xác minh chính thức {link} để đảm bảo rằng quyền lợi của bạn được bảo vệ.",
        $N = "Sản phẩm của PG SOFT™ đã được các cơ quan toàn cầu BMM và GA chứng nhận và kiểm tra nghiêm ngặt, đảm bảo rằng thuật toán RNG và cách thức triển khai, toán học trong trò chơi và các quy tắc đáp ứng tiêu chuẩn cao nhất trong ngành về công bằng và toàn vẹn.",
        SN = "BƯỚC 1:",
        ON = "Chọn một Mã Giao Dịch.",
        xN = "BƯỚC 2:",
        PN = "Nhấn nút Xác minh. Bạn sẽ được tự động chuyển hướng.",
        AN = {
            official: dN,
            success: _N,
            success_details: hN,
            nofound: pN,
            nofound_details: mN,
            expired: gN,
            expired_details: yN,
            wrong: vN,
            wrong_details: bN,
            error: kN,
            error_details: TN,
            gentle: EN,
            reminder: wN,
            certified: $N,
            step1: SN,
            step1_details: ON,
            step2: xN,
            step2_details: PN
        },
        IN = "PG官方正版游戏",
        RN = "验证成功",
        NN = "恭喜您，您正在体验官方正版游戏！",
        CN = "交易单号未找到",
        LN = "请返回游戏历史记录页面，验证最新的投注记录。",
        DN = "会话超时",
        MN = "请返回游戏历史记录页面，验证最新的投注记录。",
        FN = "参数错误",
        jN = "请返回游戏历史记录页面，验证最新的投注记录。",
        UN = "系统错误",
        zN = "请刷新或返回游戏历史记录页面，验证最新的投注记录。",
        GN = "温馨提醒",
        BN = "盗版游戏未经过认证，会为您带来安全隐患和资金风险。请认准官方唯一验证网址 {link} 以保证您的权益。",
        VN = "PG SOFT™的产品已通过国际权威认证机构BMM和GA的双重严格认证和测试，确保了游戏的RNG算法和实施，所有游戏的数学运算和规则皆符合行业最高标准和要求，保证公正与公平。",
        HN = "步骤一 :",
        WN = "选择一个交易单号。",
        qN = "步骤二 :",
        KN = "点击验证按钮。页面将自动跳转",
        YN = {
            official: IN,
            success: RN,
            success_details: NN,
            nofound: CN,
            nofound_details: LN,
            expired: DN,
            expired_details: MN,
            wrong: FN,
            wrong_details: jN,
            error: UN,
            error_details: zN,
            gentle: GN,
            reminder: BN,
            certified: VN,
            step1: HN,
            step1_details: WN,
            step2: qN,
            step2_details: KN
        },
        XN = lb({
            legacy: !1,
            locale: "EN",
            messages: {
                AR: a0,
                AZ: S0,
                BG: H0,
                BN: u1,
                CS: P1,
                DA: K1,
                DE: _k,
                EL: Rk,
                EN: Jk,
                ES: mT,
                ET: LT,
                FA: eE,
                FI: vE,
                FR: FE,
                HI: sw,
                HU: Tw,
                HY: zw,
                ID: o$,
                IT: $$,
                JA: V$,
                KO: cS,
                LO: xS,
                LT: qS,
                MN: dO,
                MY: IO,
                NL: XO,
                NO: px,
                PL: Cx,
                PT: Zx,
                RO: yP,
                RU: MP,
                SI: nA,
                SK: kA,
                SQ: UA,
                SH: iI,
                SV: wI,
                TH: BI,
                TR: lR,
                UK: OR,
                UR: WR,
                UZ: fN,
                VI: AN,
                ZH: YN
            }
        }),
        Gd = pp(Gb);
    Gd.use(XN);
    Gd.mount("#app")
});
//export default JN();
JN();