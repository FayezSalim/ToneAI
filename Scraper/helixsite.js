const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Cjrz4cjn.js", "./C8U_T_rV.js", "./DlAUqK2U.js", "./ContentImg.DeeHuqan.css", "./CcCUDrAA.js", "./CEtAbl9U.js", "./0lDupugJ.js", "./DwEpPW1D.js", "./DjDp0nGs.js", "./CuISI4YG.js", "./D2ak3PJP.js", "./BvpaMv1a.js", "./CS-g7zjY.js", "./BibpMmr3.js", "./Bt2JEX_t.js", "./CNApiDpb.js", "./BvAj89F5.js", "./-0sWrKKf.js", "./ProsePre.D5orA6B_.css", "./CtqZJDJm.js", "./ChGAnjNe.js", "./BICLjrRx.js", "./t4XrnFOr.js", "./CkFwirpm.js", "./Cdv85P3w.js", "./D-0UUjZf.js", "./pqizCYm7.js", "./NYR0ENw1.js"]))) => i.map(i => d[i]);
var rc = Object.defineProperty;
var cr = e => {
    throw TypeError(e)
}
    ;
var oc = (e, t, n) => t in e ? rc(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var wt = (e, t, n) => oc(e, typeof t != "symbol" ? t + "" : t, n)
    , sc = (e, t, n) => t.has(e) || cr("Cannot " + n);
var An = (e, t, n) => (sc(e, t, "read from private field"),
    n ? n.call(e) : t.get(e))
    , hr = (e, t, n) => t.has(e) ? cr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        l(a);
    new MutationObserver(a => {
        for (const i of a)
            if (i.type === "childList")
                for (const r of i.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && l(r)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(a) {
        const i = {};
        return a.integrity && (i.integrity = a.integrity),
            a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
            a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
    }
    function l(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const i = n(a);
        fetch(a.href, i)
    }
}
)();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function wi(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const ue = {}
    , dn = []
    , ht = () => { }
    , uc = () => !1
    , rl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
    , Mi = e => e.startsWith("onUpdate:")
    , Me = Object.assign
    , Ti = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    , cc = Object.prototype.hasOwnProperty
    , ie = (e, t) => cc.call(e, t)
    , $ = Array.isArray
    , mn = e => wn(e) === "[object Map]"
    , Ql = e => wn(e) === "[object Set]"
    , dr = e => wn(e) === "[object Date]"
    , hc = e => wn(e) === "[object RegExp]"
    , J = e => typeof e == "function"
    , fe = e => typeof e == "string"
    , lt = e => typeof e == "symbol"
    , se = e => e !== null && typeof e == "object"
    , Pi = e => (se(e) || J(e)) && J(e.then) && J(e.catch)
    , Go = Object.prototype.toString
    , wn = e => Go.call(e)
    , dc = e => wn(e).slice(8, -1)
    , Uo = e => wn(e) === "[object Object]"
    , Li = e => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
    , pn = wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
    , Yl = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }
    , mc = /-(\w)/g
    , Qe = Yl(e => e.replace(mc, (t, n) => n ? n.toUpperCase() : ""))
    , pc = /\B([A-Z])/g
    , It = Yl(e => e.replace(pc, "-$1").toLowerCase())
    , Zl = Yl(e => e.charAt(0).toUpperCase() + e.slice(1))
    , Da = Yl(e => e ? `on${Zl(e)}` : "")
    , Ot = (e, t) => !Object.is(e, t)
    , gn = (e, ...t) => {
        for (let n = 0; n < e.length; n++)
            e[n](...t)
    }
    , Wo = (e, t, n, l = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: l,
            value: n
        })
    }
    , Bl = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    , jo = e => {
        const t = fe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    }
    ;
let mr;
const ea = () => mr || (mr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bi(e) {
    if ($(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const l = e[n]
                , a = fe(l) ? _c(l) : Bi(l);
            if (a)
                for (const i in a)
                    t[i] = a[i]
        }
        return t
    } else if (fe(e) || se(e))
        return e
}
const gc = /;(?![^(]*\))/g
    , fc = /:([^]+)/
    , yc = /\/\*[^]*?\*\//g;
function _c(e) {
    const t = {};
    return e.replace(yc, "").split(gc).forEach(n => {
        if (n) {
            const l = n.split(fc);
            l.length > 1 && (t[l[0].trim()] = l[1].trim())
        }
    }
    ),
        t
}
function ta(e) {
    let t = "";
    if (fe(e))
        t = e;
    else if ($(e))
        for (let n = 0; n < e.length; n++) {
            const l = ta(e[n]);
            l && (t += l + " ")
        }
    else if (se(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const bc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
    , Dc = wi(bc);
function qo(e) {
    return !!e || e === ""
}
function vc(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let l = 0; n && l < e.length; l++)
        n = na(e[l], t[l]);
    return n
}
function na(e, t) {
    if (e === t)
        return !0;
    let n = dr(e)
        , l = dr(t);
    if (n || l)
        return n && l ? e.getTime() === t.getTime() : !1;
    if (n = lt(e),
        l = lt(t),
        n || l)
        return e === t;
    if (n = $(e),
        l = $(t),
        n || l)
        return n && l ? vc(e, t) : !1;
    if (n = se(e),
        l = se(t),
        n || l) {
        if (!n || !l)
            return !1;
        const a = Object.keys(e).length
            , i = Object.keys(t).length;
        if (a !== i)
            return !1;
        for (const r in e) {
            const o = e.hasOwnProperty(r)
                , s = t.hasOwnProperty(r);
            if (o && !s || !o && s || !na(e[r], t[r]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Sc(e, t) {
    return e.findIndex(n => na(n, t))
}
const $o = e => !!(e && e.__v_isRef === !0)
    , Ko = e => fe(e) ? e : e == null ? "" : $(e) || se(e) && (e.toString === Go || !J(e.toString)) ? $o(e) ? Ko(e.value) : JSON.stringify(e, Jo, 2) : String(e)
    , Jo = (e, t) => $o(t) ? Jo(e, t.value) : mn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, a], i) => (n[va(l, i) + " =>"] = a,
            n), {})
    } : Ql(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => va(n))
    } : lt(t) ? va(t) : se(t) && !$(t) && !Uo(t) ? String(t) : t
    , va = (e, t = "") => {
        var n;
        return lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    }
    ;
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Oe;
class Qo {
    constructor(t = !1) {
        this.detached = t,
            this._active = !0,
            this.effects = [],
            this.cleanups = [],
            this._isPaused = !1,
            this.parent = Oe,
            !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                    n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
                n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                    n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
                n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Oe;
            try {
                return Oe = this,
                    t()
            } finally {
                Oe = n
            }
        }
    }
    on() {
        Oe = this
    }
    off() {
        Oe = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, l;
            for (n = 0,
                l = this.effects.length; n < l; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
                n = 0,
                l = this.cleanups.length; n < l; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
                this.scopes) {
                for (n = 0,
                    l = this.scopes.length; n < l; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const a = this.parent.scopes.pop();
                a && a !== this && (this.parent.scopes[this.index] = a,
                    a.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Cc(e) {
    return new Qo(e)
}
function la() {
    return Oe
}
function za(e, t = !1) {
    Oe && Oe.cleanups.push(e)
}
let he;
const Sa = new WeakSet;
class Yo {
    constructor(t) {
        this.fn = t,
            this.deps = void 0,
            this.depsTail = void 0,
            this.flags = 5,
            this.next = void 0,
            this.cleanup = void 0,
            this.scheduler = void 0,
            Oe && Oe.active && Oe.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
            Sa.has(this) && (Sa.delete(this),
                this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || es(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
            pr(this),
            ts(this);
        const t = he
            , n = nt;
        he = this,
            nt = !0;
        try {
            return this.fn()
        } finally {
            ns(this),
                he = t,
                nt = n,
                this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                xi(t);
            this.deps = this.depsTail = void 0,
                pr(this),
                this.onStop && this.onStop(),
                this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Sa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ga(this) && this.run()
    }
    get dirty() {
        return Ga(this)
    }
}
let Zo = 0, In, Xn;
function es(e, t = !1) {
    if (e.flags |= 8,
        t) {
        e.next = Xn,
            Xn = e;
        return
    }
    e.next = In,
        In = e
}
function Ai() {
    Zo++
}
function Ri() {
    if (--Zo > 0)
        return;
    if (Xn) {
        let t = Xn;
        for (Xn = void 0; t;) {
            const n = t.next;
            t.next = void 0,
                t.flags &= -9,
                t = n
        }
    }
    let e;
    for (; In;) {
        let t = In;
        for (In = void 0; t;) {
            const n = t.next;
            if (t.next = void 0,
                t.flags &= -9,
                t.flags & 1)
                try {
                    t.trigger()
                } catch (l) {
                    e || (e = l)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function ts(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
            t.prevActiveLink = t.dep.activeLink,
            t.dep.activeLink = t
}
function ns(e) {
    let t, n = e.depsTail, l = n;
    for (; l;) {
        const a = l.prevDep;
        l.version === -1 ? (l === n && (n = a),
            xi(l),
            Hc(l)) : t = l,
            l.dep.activeLink = l.prevActiveLink,
            l.prevActiveLink = void 0,
            l = a
    }
    e.deps = t,
        e.depsTail = n
}
function Ga(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (ls(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function ls(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
        e.globalVersion === Kn))
        return;
    e.globalVersion = Kn;
    const t = e.dep;
    if (e.flags |= 2,
        t.version > 0 && !e.isSSR && e.deps && !Ga(e)) {
        e.flags &= -3;
        return
    }
    const n = he
        , l = nt;
    he = e,
        nt = !0;
    try {
        ts(e);
        const a = e.fn(e._value);
        (t.version === 0 || Ot(a, e._value)) && (e._value = a,
            t.version++)
    } catch (a) {
        throw t.version++,
        a
    } finally {
        he = n,
            nt = l,
            ns(e),
            e.flags &= -3
    }
}
function xi(e, t = !1) {
    const { dep: n, prevSub: l, nextSub: a } = e;
    if (l && (l.nextSub = a,
        e.prevSub = void 0),
        a && (a.prevSub = l,
            e.nextSub = void 0),
        n.subs === e && (n.subs = l,
            !l && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep)
            xi(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Hc(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n,
        e.prevDep = void 0),
        n && (n.prevDep = t,
            e.nextDep = void 0)
}
let nt = !0;
const as = [];
function Xt() {
    as.push(nt),
        nt = !1
}
function Nt() {
    const e = as.pop();
    nt = e === void 0 ? !0 : e
}
function pr(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0,
        t) {
        const n = he;
        he = void 0;
        try {
            t()
        } finally {
            he = n
        }
    }
}
let Kn = 0;
class wc {
    constructor(t, n) {
        this.sub = t,
            this.dep = n,
            this.version = n.version,
            this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class aa {
    constructor(t) {
        this.computed = t,
            this.version = 0,
            this.activeLink = void 0,
            this.subs = void 0,
            this.map = void 0,
            this.key = void 0,
            this.sc = 0
    }
    track(t) {
        if (!he || !nt || he === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== he)
            n = this.activeLink = new wc(he, this),
                he.deps ? (n.prevDep = he.depsTail,
                    he.depsTail.nextDep = n,
                    he.depsTail = n) : he.deps = he.depsTail = n,
                is(n);
        else if (n.version === -1 && (n.version = this.version,
            n.nextDep)) {
            const l = n.nextDep;
            l.prevDep = n.prevDep,
                n.prevDep && (n.prevDep.nextDep = l),
                n.prevDep = he.depsTail,
                n.nextDep = void 0,
                he.depsTail.nextDep = n,
                he.depsTail = n,
                he.deps === n && (he.deps = l)
        }
        return n
    }
    trigger(t) {
        this.version++,
            Kn++,
            this.notify(t)
    }
    notify(t) {
        Ai();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Ri()
        }
    }
}
function is(e) {
    if (e.dep.sc++,
        e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let l = t.deps; l; l = l.nextDep)
                is(l)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
            n && (n.nextSub = e)),
            e.dep.subs = e
    }
}
const Al = new WeakMap
    , Jt = Symbol("")
    , Ua = Symbol("")
    , Jn = Symbol("");
function Be(e, t, n) {
    if (nt && he) {
        let l = Al.get(e);
        l || Al.set(e, l = new Map);
        let a = l.get(n);
        a || (l.set(n, a = new aa),
            a.map = l,
            a.key = n),
            a.track()
    }
}
function yt(e, t, n, l, a, i) {
    const r = Al.get(e);
    if (!r) {
        Kn++;
        return
    }
    const o = s => {
        s && s.trigger()
    }
        ;
    if (Ai(),
        t === "clear")
        r.forEach(o);
    else {
        const s = $(e)
            , c = s && Li(n);
        if (s && n === "length") {
            const u = Number(l);
            r.forEach((h, m) => {
                (m === "length" || m === Jn || !lt(m) && m >= u) && o(h)
            }
            )
        } else
            switch ((n !== void 0 || r.has(void 0)) && o(r.get(n)),
            c && o(r.get(Jn)),
            t) {
                case "add":
                    s ? c && o(r.get("length")) : (o(r.get(Jt)),
                        mn(e) && o(r.get(Ua)));
                    break;
                case "delete":
                    s || (o(r.get(Jt)),
                        mn(e) && o(r.get(Ua)));
                    break;
                case "set":
                    mn(e) && o(r.get(Jt));
                    break
            }
    }
    Ri()
}
function Mc(e, t) {
    const n = Al.get(e);
    return n && n.get(t)
}
function an(e) {
    const t = te(e);
    return t === e ? t : (Be(t, "iterate", Jn),
        Je(e) ? t : t.map(Ae))
}
function ia(e) {
    return Be(e = te(e), "iterate", Jn),
        e
}
const Tc = {
    __proto__: null,
    [Symbol.iterator]() {
        return Ca(this, Symbol.iterator, Ae)
    },
    concat(...e) {
        return an(this).concat(...e.map(t => $(t) ? an(t) : t))
    },
    entries() {
        return Ca(this, "entries", e => (e[1] = Ae(e[1]),
            e))
    },
    every(e, t) {
        return mt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return mt(this, "filter", e, t, n => n.map(Ae), arguments)
    },
    find(e, t) {
        return mt(this, "find", e, t, Ae, arguments)
    },
    findIndex(e, t) {
        return mt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return mt(this, "findLast", e, t, Ae, arguments)
    },
    findLastIndex(e, t) {
        return mt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return mt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ha(this, "includes", e)
    },
    indexOf(...e) {
        return Ha(this, "indexOf", e)
    },
    join(e) {
        return an(this).join(e)
    },
    lastIndexOf(...e) {
        return Ha(this, "lastIndexOf", e)
    },
    map(e, t) {
        return mt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Rn(this, "pop")
    },
    push(...e) {
        return Rn(this, "push", e)
    },
    reduce(e, ...t) {
        return gr(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return gr(this, "reduceRight", e, t)
    },
    shift() {
        return Rn(this, "shift")
    },
    some(e, t) {
        return mt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Rn(this, "splice", e)
    },
    toReversed() {
        return an(this).toReversed()
    },
    toSorted(e) {
        return an(this).toSorted(e)
    },
    toSpliced(...e) {
        return an(this).toSpliced(...e)
    },
    unshift(...e) {
        return Rn(this, "unshift", e)
    },
    values() {
        return Ca(this, "values", Ae)
    }
};
function Ca(e, t, n) {
    const l = ia(e)
        , a = l[t]();
    return l !== e && !Je(e) && (a._next = a.next,
        a.next = () => {
            const i = a._next();
            return i.value && (i.value = n(i.value)),
                i
        }
    ),
        a
}
const Pc = Array.prototype;
function mt(e, t, n, l, a, i) {
    const r = ia(e)
        , o = r !== e && !Je(e)
        , s = r[t];
    if (s !== Pc[t]) {
        const h = s.apply(e, i);
        return o ? Ae(h) : h
    }
    let c = n;
    r !== e && (o ? c = function (h, m) {
        return n.call(this, Ae(h), m, e)
    }
        : n.length > 2 && (c = function (h, m) {
            return n.call(this, h, m, e)
        }
        ));
    const u = s.call(r, c, l);
    return o && a ? a(u) : u
}
function gr(e, t, n, l) {
    const a = ia(e);
    let i = n;
    return a !== e && (Je(e) ? n.length > 3 && (i = function (r, o, s) {
        return n.call(this, r, o, s, e)
    }
    ) : i = function (r, o, s) {
        return n.call(this, r, Ae(o), s, e)
    }
    ),
        a[t](i, ...l)
}
function Ha(e, t, n) {
    const l = te(e);
    Be(l, "iterate", Jn);
    const a = l[t](...n);
    return (a === -1 || a === !1) && Fi(n[0]) ? (n[0] = te(n[0]),
        l[t](...n)) : a
}
function Rn(e, t, n = []) {
    Xt(),
        Ai();
    const l = te(e)[t].apply(e, n);
    return Ri(),
        Nt(),
        l
}
const Lc = wi("__proto__,__v_isRef,__isVue")
    , rs = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(lt));
function Bc(e) {
    lt(e) || (e = String(e));
    const t = te(this);
    return Be(t, "has", e),
        t.hasOwnProperty(e)
}
class os {
    constructor(t = !1, n = !1) {
        this._isReadonly = t,
            this._isShallow = n
    }
    get(t, n, l) {
        if (n === "__v_skip")
            return t.__v_skip;
        const a = this._isReadonly
            , i = this._isShallow;
        if (n === "__v_isReactive")
            return !a;
        if (n === "__v_isReadonly")
            return a;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return l === (a ? i ? Xc : hs : i ? cs : us).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
        const r = $(t);
        if (!a) {
            let s;
            if (r && (s = Tc[n]))
                return s;
            if (n === "hasOwnProperty")
                return Bc
        }
        const o = Reflect.get(t, n, be(t) ? t : l);
        return (lt(n) ? rs.has(n) : Lc(n)) || (a || Be(t, "get", n),
            i) ? o : be(o) ? r && Li(n) ? o : o.value : se(o) ? a ? ds(o) : St(o) : o
    }
}
class ss extends os {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, l, a) {
        let i = t[n];
        if (!this._isShallow) {
            const s = Et(i);
            if (!Je(l) && !Et(l) && (i = te(i),
                l = te(l)),
                !$(t) && be(i) && !be(l))
                return s ? !1 : (i.value = l,
                    !0)
        }
        const r = $(t) && Li(n) ? Number(n) < t.length : ie(t, n)
            , o = Reflect.set(t, n, l, be(t) ? t : a);
        return t === te(a) && (r ? Ot(l, i) && yt(t, "set", n, l) : yt(t, "add", n, l)),
            o
    }
    deleteProperty(t, n) {
        const l = ie(t, n);
        t[n];
        const a = Reflect.deleteProperty(t, n);
        return a && l && yt(t, "delete", n, void 0),
            a
    }
    has(t, n) {
        const l = Reflect.has(t, n);
        return (!lt(n) || !rs.has(n)) && Be(t, "has", n),
            l
    }
    ownKeys(t) {
        return Be(t, "iterate", $(t) ? "length" : Jt),
            Reflect.ownKeys(t)
    }
}
class Ac extends os {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Rc = new ss
    , xc = new Ac
    , Oc = new ss(!0);
const Wa = e => e
    , pl = e => Reflect.getPrototypeOf(e);
function kc(e, t, n) {
    return function (...l) {
        const a = this.__v_raw
            , i = te(a)
            , r = mn(i)
            , o = e === "entries" || e === Symbol.iterator && r
            , s = e === "keys" && r
            , c = a[e](...l)
            , u = n ? Wa : t ? ja : Ae;
        return !t && Be(i, "iterate", s ? Ua : Jt),
        {
            next() {
                const { value: h, done: m } = c.next();
                return m ? {
                    value: h,
                    done: m
                } : {
                    value: o ? [u(h[0]), u(h[1])] : u(h),
                    done: m
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function gl(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Fc(e, t) {
    const n = {
        get(a) {
            const i = this.__v_raw
                , r = te(i)
                , o = te(a);
            e || (Ot(a, o) && Be(r, "get", a),
                Be(r, "get", o));
            const { has: s } = pl(r)
                , c = t ? Wa : e ? ja : Ae;
            if (s.call(r, a))
                return c(i.get(a));
            if (s.call(r, o))
                return c(i.get(o));
            i !== r && i.get(a)
        },
        get size() {
            const a = this.__v_raw;
            return !e && Be(te(a), "iterate", Jt),
                Reflect.get(a, "size", a)
        },
        has(a) {
            const i = this.__v_raw
                , r = te(i)
                , o = te(a);
            return e || (Ot(a, o) && Be(r, "has", a),
                Be(r, "has", o)),
                a === o ? i.has(a) : i.has(a) || i.has(o)
        },
        forEach(a, i) {
            const r = this
                , o = r.__v_raw
                , s = te(o)
                , c = t ? Wa : e ? ja : Ae;
            return !e && Be(s, "iterate", Jt),
                o.forEach((u, h) => a.call(i, c(u), c(h), r))
        }
    };
    return Me(n, e ? {
        add: gl("add"),
        set: gl("set"),
        delete: gl("delete"),
        clear: gl("clear")
    } : {
        add(a) {
            !t && !Je(a) && !Et(a) && (a = te(a));
            const i = te(this);
            return pl(i).has.call(i, a) || (i.add(a),
                yt(i, "add", a, a)),
                this
        },
        set(a, i) {
            !t && !Je(i) && !Et(i) && (i = te(i));
            const r = te(this)
                , { has: o, get: s } = pl(r);
            let c = o.call(r, a);
            c || (a = te(a),
                c = o.call(r, a));
            const u = s.call(r, a);
            return r.set(a, i),
                c ? Ot(i, u) && yt(r, "set", a, i) : yt(r, "add", a, i),
                this
        },
        delete(a) {
            const i = te(this)
                , { has: r, get: o } = pl(i);
            let s = r.call(i, a);
            s || (a = te(a),
                s = r.call(i, a)),
                o && o.call(i, a);
            const c = i.delete(a);
            return s && yt(i, "delete", a, void 0),
                c
        },
        clear() {
            const a = te(this)
                , i = a.size !== 0
                , r = a.clear();
            return i && yt(a, "clear", void 0, void 0),
                r
        }
    }),
        ["keys", "values", "entries", Symbol.iterator].forEach(a => {
            n[a] = kc(a, e, t)
        }
        ),
        n
}
function Oi(e, t) {
    const n = Fc(e, t);
    return (l, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(ie(n, a) && a in l ? n : l, a, i)
}
const Vc = {
    get: Oi(!1, !1)
}
    , Ec = {
        get: Oi(!1, !0)
    }
    , Ic = {
        get: Oi(!0, !1)
    };
const us = new WeakMap
    , cs = new WeakMap
    , hs = new WeakMap
    , Xc = new WeakMap;
function Nc(e) {
    switch (e) {
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
function zc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Nc(dc(e))
}
function St(e) {
    return Et(e) ? e : ki(e, !1, Rc, Vc, us)
}
function bt(e) {
    return ki(e, !1, Oc, Ec, cs)
}
function ds(e) {
    return ki(e, !0, xc, Ic, hs)
}
function ki(e, t, n, l, a) {
    if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = a.get(e);
    if (i)
        return i;
    const r = zc(e);
    if (r === 0)
        return e;
    const o = new Proxy(e, r === 2 ? l : n);
    return a.set(e, o),
        o
}
function Qt(e) {
    return Et(e) ? Qt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Et(e) {
    return !!(e && e.__v_isReadonly)
}
function Je(e) {
    return !!(e && e.__v_isShallow)
}
function Fi(e) {
    return e ? !!e.__v_raw : !1
}
function te(e) {
    const t = e && e.__v_raw;
    return t ? te(t) : e
}
function Gc(e) {
    return !ie(e, "__v_skip") && Object.isExtensible(e) && Wo(e, "__v_skip", !0),
        e
}
const Ae = e => se(e) ? St(e) : e
    , ja = e => se(e) ? ds(e) : e;
function be(e) {
    return e ? e.__v_isRef === !0 : !1
}
function Xe(e) {
    return ms(e, !1)
}
function Qn(e) {
    return ms(e, !0)
}
function ms(e, t) {
    return be(e) ? e : new Uc(e, t)
}
class Uc {
    constructor(t, n) {
        this.dep = new aa,
            this.__v_isRef = !0,
            this.__v_isShallow = !1,
            this._rawValue = n ? t : te(t),
            this._value = n ? t : Ae(t),
            this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
            this._value
    }
    set value(t) {
        const n = this._rawValue
            , l = this.__v_isShallow || Je(t) || Et(t);
        t = l ? t : te(t),
            Ot(t, n) && (this._rawValue = t,
                this._value = l ? t : Ae(t),
                this.dep.trigger())
    }
}
function _e(e) {
    return be(e) ? e.value : e
}
function ps(e) {
    return J(e) ? e() : _e(e)
}
const Wc = {
    get: (e, t, n) => t === "__v_raw" ? e : _e(Reflect.get(e, t, n)),
    set: (e, t, n, l) => {
        const a = e[t];
        return be(a) && !be(n) ? (a.value = n,
            !0) : Reflect.set(e, t, n, l)
    }
};
function gs(e) {
    return Qt(e) ? e : new Proxy(e, Wc)
}
class jc {
    constructor(t) {
        this.__v_isRef = !0,
            this._value = void 0;
        const n = this.dep = new aa
            , { get: l, set: a } = t(n.track.bind(n), n.trigger.bind(n));
        this._get = l,
            this._set = a
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function qc(e) {
    return new jc(e)
}
class $c {
    constructor(t, n, l) {
        this._object = t,
            this._key = n,
            this._defaultValue = l,
            this.__v_isRef = !0,
            this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Mc(te(this._object), this._key)
    }
}
class Kc {
    constructor(t) {
        this._getter = t,
            this.__v_isRef = !0,
            this.__v_isReadonly = !0,
            this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function fs(e, t, n) {
    return be(e) ? e : J(e) ? new Kc(e) : se(e) && arguments.length > 1 ? Jc(e, t, n) : Xe(e)
}
function Jc(e, t, n) {
    const l = e[t];
    return be(l) ? l : new $c(e, t, n)
}
class Qc {
    constructor(t, n, l) {
        this.fn = t,
            this.setter = n,
            this._value = void 0,
            this.dep = new aa(this),
            this.__v_isRef = !0,
            this.deps = void 0,
            this.depsTail = void 0,
            this.flags = 16,
            this.globalVersion = Kn - 1,
            this.next = void 0,
            this.effect = this,
            this.__v_isReadonly = !n,
            this.isSSR = l
    }
    notify() {
        if (this.flags |= 16,
            !(this.flags & 8) && he !== this)
            return es(this, !0),
                !0
    }
    get value() {
        const t = this.dep.track();
        return ls(this),
            t && (t.version = this.dep.version),
            this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Yc(e, t, n = !1) {
    let l, a;
    return J(e) ? l = e : (l = e.get,
        a = e.set),
        new Qc(l, a, n)
}
const fl = {}
    , Rl = new WeakMap;
let $t;
function Zc(e, t = !1, n = $t) {
    if (n) {
        let l = Rl.get(n);
        l || Rl.set(n, l = []),
            l.push(e)
    }
}
function eh(e, t, n = ue) {
    const { immediate: l, deep: a, once: i, scheduler: r, augmentJob: o, call: s } = n
        , c = b => a ? b : Je(b) || a === !1 || a === 0 ? _t(b, 1) : _t(b);
    let u, h, m, d, _ = !1, y = !1;
    if (be(e) ? (h = () => e.value,
        _ = Je(e)) : Qt(e) ? (h = () => c(e),
            _ = !0) : $(e) ? (y = !0,
                _ = e.some(b => Qt(b) || Je(b)),
                h = () => e.map(b => {
                    if (be(b))
                        return b.value;
                    if (Qt(b))
                        return c(b);
                    if (J(b))
                        return s ? s(b, 2) : b()
                }
                )) : J(e) ? t ? h = s ? () => s(e, 2) : e : h = () => {
                    if (m) {
                        Xt();
                        try {
                            m()
                        } finally {
                            Nt()
                        }
                    }
                    const b = $t;
                    $t = u;
                    try {
                        return s ? s(e, 3, [d]) : e(d)
                    } finally {
                        $t = b
                    }
                }
        : h = ht,
        t && a) {
        const b = h
            , D = a === !0 ? 1 / 0 : a;
        h = () => _t(b(), D)
    }
    const C = la()
        , S = () => {
            u.stop(),
                C && C.active && Ti(C.effects, u)
        }
        ;
    if (i && t) {
        const b = t;
        t = (...D) => {
            b(...D),
                S()
        }
    }
    let v = y ? new Array(e.length).fill(fl) : fl;
    const g = b => {
        if (!(!(u.flags & 1) || !u.dirty && !b))
            if (t) {
                const D = u.run();
                if (a || _ || (y ? D.some((w, R) => Ot(w, v[R])) : Ot(D, v))) {
                    m && m();
                    const w = $t;
                    $t = u;
                    try {
                        const R = [D, v === fl ? void 0 : y && v[0] === fl ? [] : v, d];
                        s ? s(t, 3, R) : t(...R),
                            v = D
                    } finally {
                        $t = w
                    }
                }
            } else
                u.run()
    }
        ;
    return o && o(g),
        u = new Yo(h),
        u.scheduler = r ? () => r(g, !1) : g,
        d = b => Zc(b, !1, u),
        m = u.onStop = () => {
            const b = Rl.get(u);
            if (b) {
                if (s)
                    s(b, 4);
                else
                    for (const D of b)
                        D();
                Rl.delete(u)
            }
        }
        ,
        t ? l ? g(!0) : v = u.run() : r ? r(g.bind(null, !0), !0) : u.run(),
        S.pause = u.pause.bind(u),
        S.resume = u.resume.bind(u),
        S.stop = S,
        S
}
function _t(e, t = 1 / 0, n) {
    if (t <= 0 || !se(e) || e.__v_skip || (n = n || new Set,
        n.has(e)))
        return e;
    if (n.add(e),
        t--,
        be(e))
        _t(e.value, t, n);
    else if ($(e))
        for (let l = 0; l < e.length; l++)
            _t(e[l], t, n);
    else if (Ql(e) || mn(e))
        e.forEach(l => {
            _t(l, t, n)
        }
        );
    else if (Uo(e)) {
        for (const l in e)
            _t(e[l], t, n);
        for (const l of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, l) && _t(e[l], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ol(e, t, n, l) {
    try {
        return l ? e(...l) : e()
    } catch (a) {
        Mn(a, t, n)
    }
}
function at(e, t, n, l) {
    if (J(e)) {
        const a = ol(e, t, n, l);
        return a && Pi(a) && a.catch(i => {
            Mn(i, t, n)
        }
        ),
            a
    }
    if ($(e)) {
        const a = [];
        for (let i = 0; i < e.length; i++)
            a.push(at(e[i], t, n, l));
        return a
    }
}
function Mn(e, t, n, l = !0) {
    const a = t ? t.vnode : null
        , { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ue;
    if (t) {
        let o = t.parent;
        const s = t.proxy
            , c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o;) {
            const u = o.ec;
            if (u) {
                for (let h = 0; h < u.length; h++)
                    if (u[h](e, s, c) === !1)
                        return
            }
            o = o.parent
        }
        if (i) {
            Xt(),
                ol(i, null, 10, [e, s, c]),
                Nt();
            return
        }
    }
    th(e, n, a, l, r)
}
function th(e, t, n, l = !0, a = !1) {
    if (a)
        throw e;
    console.error(e)
}
const ke = [];
let ut = -1;
const fn = [];
let Tt = null
    , sn = 0;
const ys = Promise.resolve();
let xl = null;
function zt(e) {
    const t = xl || ys;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function nh(e) {
    let t = ut + 1
        , n = ke.length;
    for (; t < n;) {
        const l = t + n >>> 1
            , a = ke[l]
            , i = Yn(a);
        i < e || i === e && a.flags & 2 ? t = l + 1 : n = l
    }
    return t
}
function Vi(e) {
    if (!(e.flags & 1)) {
        const t = Yn(e)
            , n = ke[ke.length - 1];
        !n || !(e.flags & 2) && t >= Yn(n) ? ke.push(e) : ke.splice(nh(t), 0, e),
            e.flags |= 1,
            _s()
    }
}
function _s() {
    xl || (xl = ys.then(bs))
}
function qa(e) {
    $(e) ? fn.push(...e) : Tt && e.id === -1 ? Tt.splice(sn + 1, 0, e) : e.flags & 1 || (fn.push(e),
        e.flags |= 1),
        _s()
}
function fr(e, t, n = ut + 1) {
    for (; n < ke.length; n++) {
        const l = ke[n];
        if (l && l.flags & 2) {
            if (e && l.id !== e.uid)
                continue;
            ke.splice(n, 1),
                n--,
                l.flags & 4 && (l.flags &= -2),
                l(),
                l.flags & 4 || (l.flags &= -2)
        }
    }
}
function Ol(e) {
    if (fn.length) {
        const t = [...new Set(fn)].sort((n, l) => Yn(n) - Yn(l));
        if (fn.length = 0,
            Tt) {
            Tt.push(...t);
            return
        }
        for (Tt = t,
            sn = 0; sn < Tt.length; sn++) {
            const n = Tt[sn];
            n.flags & 4 && (n.flags &= -2),
                n.flags & 8 || n(),
                n.flags &= -2
        }
        Tt = null,
            sn = 0
    }
}
const Yn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bs(e) {
    try {
        for (ut = 0; ut < ke.length; ut++) {
            const t = ke[ut];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
                ol(t, t.i, t.i ? 15 : 14),
                t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; ut < ke.length; ut++) {
            const t = ke[ut];
            t && (t.flags &= -2)
        }
        ut = -1,
            ke.length = 0,
            Ol(),
            xl = null,
            (ke.length || fn.length) && bs()
    }
}
let Ce = null
    , Ds = null;
function kl(e) {
    const t = Ce;
    return Ce = e,
        Ds = e && e.type.__scopeId || null,
        t
}
function ra(e, t = Ce, n) {
    if (!t || e._n)
        return e;
    const l = (...a) => {
        l._d && Lr(-1);
        const i = kl(t);
        let r;
        try {
            r = e(...a)
        } finally {
            kl(i),
                l._d && Lr(1)
        }
        return r
    }
        ;
    return l._n = !0,
        l._c = !0,
        l._d = !0,
        l
}
function L_(e, t) {
    if (Ce === null)
        return e;
    const n = da(Ce)
        , l = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let [i, r, o, s = ue] = t[a];
        i && (J(i) && (i = {
            mounted: i,
            updated: i
        }),
            i.deep && _t(r),
            l.push({
                dir: i,
                instance: n,
                value: r,
                oldValue: void 0,
                arg: o,
                modifiers: s
            }))
    }
    return e
}
function ct(e, t, n, l) {
    const a = e.dirs
        , i = t && t.dirs;
    for (let r = 0; r < a.length; r++) {
        const o = a[r];
        i && (o.oldValue = i[r].value);
        let s = o.dir[l];
        s && (Xt(),
            at(s, n, 8, [e.el, o, e, t]),
            Nt())
    }
}
const lh = Symbol("_vte")
    , vs = e => e.__isTeleport
    , Pt = Symbol("_leaveCb")
    , yl = Symbol("_enterCb");
function ah() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return sa(() => {
        e.isMounted = !0
    }
    ),
        ul(() => {
            e.isUnmounting = !0
        }
        ),
        e
}
const qe = [Function, Array]
    , Ss = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: qe,
        onEnter: qe,
        onAfterEnter: qe,
        onEnterCancelled: qe,
        onBeforeLeave: qe,
        onLeave: qe,
        onAfterLeave: qe,
        onLeaveCancelled: qe,
        onBeforeAppear: qe,
        onAppear: qe,
        onAfterAppear: qe,
        onAppearCancelled: qe
    }
    , Cs = e => {
        const t = e.subTree;
        return t.component ? Cs(t.component) : t
    }
    , ih = {
        name: "BaseTransition",
        props: Ss,
        setup(e, { slots: t }) {
            const n = cl()
                , l = ah();
            return () => {
                const a = t.default && Ms(t.default(), !0);
                if (!a || !a.length)
                    return;
                const i = Hs(a)
                    , r = te(e)
                    , { mode: o } = r;
                if (l.isLeaving)
                    return wa(i);
                const s = yr(i);
                if (!s)
                    return wa(i);
                let c = $a(s, r, l, n, h => c = h);
                s.type !== ve && Dn(s, c);
                let u = n.subTree && yr(n.subTree);
                if (u && u.type !== ve && !tt(s, u) && Cs(n).type !== ve) {
                    let h = $a(u, r, l, n);
                    if (Dn(u, h),
                        o === "out-in" && s.type !== ve)
                        return l.isLeaving = !0,
                            h.afterLeave = () => {
                                l.isLeaving = !1,
                                    n.job.flags & 8 || n.update(),
                                    delete h.afterLeave,
                                    u = void 0
                            }
                            ,
                            wa(i);
                    o === "in-out" && s.type !== ve ? h.delayLeave = (m, d, _) => {
                        const y = ws(l, u);
                        y[String(u.key)] = u,
                            m[Pt] = () => {
                                d(),
                                    m[Pt] = void 0,
                                    delete c.delayedLeave,
                                    u = void 0
                            }
                            ,
                            c.delayedLeave = () => {
                                _(),
                                    delete c.delayedLeave,
                                    u = void 0
                            }
                    }
                        : u = void 0
                } else
                    u && (u = void 0);
                return i
            }
        }
    };
function Hs(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== ve) {
                t = n;
                break
            }
    }
    return t
}
const rh = ih;
function ws(e, t) {
    const { leavingVNodes: n } = e;
    let l = n.get(t.type);
    return l || (l = Object.create(null),
        n.set(t.type, l)),
        l
}
function $a(e, t, n, l, a) {
    const { appear: i, mode: r, persisted: o = !1, onBeforeEnter: s, onEnter: c, onAfterEnter: u, onEnterCancelled: h, onBeforeLeave: m, onLeave: d, onAfterLeave: _, onLeaveCancelled: y, onBeforeAppear: C, onAppear: S, onAfterAppear: v, onAppearCancelled: g } = t
        , b = String(e.key)
        , D = ws(n, e)
        , w = (O, x) => {
            O && at(O, l, 9, x)
        }
        , R = (O, x) => {
            const W = x[1];
            w(O, x),
                $(O) ? O.every(A => A.length <= 1) && W() : O.length <= 1 && W()
        }
        , z = {
            mode: r,
            persisted: o,
            beforeEnter(O) {
                let x = s;
                if (!n.isMounted)
                    if (i)
                        x = C || s;
                    else
                        return;
                O[Pt] && O[Pt](!0);
                const W = D[b];
                W && tt(e, W) && W.el[Pt] && W.el[Pt](),
                    w(x, [O])
            },
            enter(O) {
                let x = c
                    , W = u
                    , A = h;
                if (!n.isMounted)
                    if (i)
                        x = S || c,
                            W = v || u,
                            A = g || h;
                    else
                        return;
                let j = !1;
                const Z = O[yl] = ne => {
                    j || (j = !0,
                        ne ? w(A, [O]) : w(W, [O]),
                        z.delayedLeave && z.delayedLeave(),
                        O[yl] = void 0)
                }
                    ;
                x ? R(x, [O, Z]) : Z()
            },
            leave(O, x) {
                const W = String(e.key);
                if (O[yl] && O[yl](!0),
                    n.isUnmounting)
                    return x();
                w(m, [O]);
                let A = !1;
                const j = O[Pt] = Z => {
                    A || (A = !0,
                        x(),
                        Z ? w(y, [O]) : w(_, [O]),
                        O[Pt] = void 0,
                        D[W] === e && delete D[W])
                }
                    ;
                D[W] = e,
                    d ? R(d, [O, j]) : j()
            },
            clone(O) {
                const x = $a(O, t, n, l, a);
                return a && a(x),
                    x
            }
        };
    return z
}
function wa(e) {
    if (sl(e))
        return e = vt(e),
            e.children = null,
            e
}
function yr(e) {
    if (!sl(e))
        return vs(e.type) && e.children ? Hs(e.children) : e;
    const { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && J(n.default))
            return n.default()
    }
}
function Dn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
        Dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
            e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Ms(e, t = !1, n) {
    let l = []
        , a = 0;
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        const o = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
        r.type === Re ? (r.patchFlag & 128 && a++,
            l = l.concat(Ms(r.children, t, o))) : (t || r.type !== ve) && l.push(o != null ? vt(r, {
                key: o
            }) : r)
    }
    if (a > 1)
        for (let i = 0; i < l.length; i++)
            l[i].patchFlag = -2;
    return l
}
/*! #__NO_SIDE_EFFECTS__ */
function Pe(e, t) {
    return J(e) ? Me({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function Ei(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Zn(e, t, n, l, a = !1) {
    if ($(e)) {
        e.forEach((_, y) => Zn(_, t && ($(t) ? t[y] : t), n, l, a));
        return
    }
    if (kt(l) && !a) {
        l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && Zn(e, t, n, l.component.subTree);
        return
    }
    const i = l.shapeFlag & 4 ? da(l.component) : l.el
        , r = a ? null : i
        , { i: o, r: s } = e
        , c = t && t.r
        , u = o.refs === ue ? o.refs = {} : o.refs
        , h = o.setupState
        , m = te(h)
        , d = h === ue ? () => !1 : _ => ie(m, _);
    if (c != null && c !== s && (fe(c) ? (u[c] = null,
        d(c) && (h[c] = null)) : be(c) && (c.value = null)),
        J(s))
        ol(s, o, 12, [r, u]);
    else {
        const _ = fe(s)
            , y = be(s);
        if (_ || y) {
            const C = () => {
                if (e.f) {
                    const S = _ ? d(s) ? h[s] : u[s] : s.value;
                    a ? $(S) && Ti(S, i) : $(S) ? S.includes(i) || S.push(i) : _ ? (u[s] = [i],
                        d(s) && (h[s] = u[s])) : (s.value = [i],
                            e.k && (u[e.k] = s.value))
                } else
                    _ ? (u[s] = r,
                        d(s) && (h[s] = r)) : y && (s.value = r,
                            e.k && (u[e.k] = r))
            }
                ;
            r ? (C.id = -1,
                Te(C, n)) : C()
        }
    }
}
let _r = !1;
const rn = () => {
    _r || (console.error("Hydration completed but contains mismatches."),
        _r = !0)
}
    , oh = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
    , sh = e => e.namespaceURI.includes("MathML")
    , _l = e => {
        if (e.nodeType === 1) {
            if (oh(e))
                return "svg";
            if (sh(e))
                return "mathml"
        }
    }
    , cn = e => e.nodeType === 8;
function uh(e) {
    const { mt: t, p: n, o: { patchProp: l, createText: a, nextSibling: i, parentNode: r, remove: o, insert: s, createComment: c } } = e
        , u = (g, b) => {
            if (!b.hasChildNodes()) {
                n(null, g, b),
                    Ol(),
                    b._vnode = g;
                return
            }
            h(b.firstChild, g, null, null, null),
                Ol(),
                b._vnode = g
        }
        , h = (g, b, D, w, R, z = !1) => {
            z = z || !!b.dynamicChildren;
            const O = cn(g) && g.data === "["
                , x = () => y(g, b, D, w, R, O)
                , { type: W, ref: A, shapeFlag: j, patchFlag: Z } = b;
            let ne = g.nodeType;
            b.el = g,
                Z === -2 && (z = !1,
                    b.dynamicChildren = null);
            let N = null;
            switch (W) {
                case Zt:
                    ne !== 3 ? b.children === "" ? (s(b.el = a(""), r(g), g),
                        N = g) : N = x() : (g.data !== b.children && (rn(),
                            g.data = b.children),
                            N = i(g));
                    break;
                case ve:
                    v(g) ? (N = i(g),
                        S(b.el = g.content.firstChild, g, D)) : ne !== 8 || O ? N = x() : N = i(g);
                    break;
                case zn:
                    if (O && (g = i(g),
                        ne = g.nodeType),
                        ne === 1 || ne === 3) {
                        N = g;
                        const Y = !b.children.length;
                        for (let G = 0; G < b.staticCount; G++)
                            Y && (b.children += N.nodeType === 1 ? N.outerHTML : N.data),
                                G === b.staticCount - 1 && (b.anchor = N),
                                N = i(N);
                        return O ? i(N) : N
                    } else
                        x();
                    break;
                case Re:
                    O ? N = _(g, b, D, w, R, z) : N = x();
                    break;
                default:
                    if (j & 1)
                        (ne !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !v(g) ? N = x() : N = m(g, b, D, w, R, z);
                    else if (j & 6) {
                        b.slotScopeIds = R;
                        const Y = r(g);
                        if (O ? N = C(g) : cn(g) && g.data === "teleport start" ? N = C(g, g.data, "teleport end") : N = i(g),
                            t(b, Y, null, D, w, _l(Y), z),
                            kt(b) && !b.type.__asyncResolved) {
                            let G;
                            O ? (G = de(Re),
                                G.anchor = N ? N.previousSibling : Y.lastChild) : G = g.nodeType === 3 ? ji("") : de("div"),
                                G.el = g,
                                b.component.subTree = G
                        }
                    } else
                        j & 64 ? ne !== 8 ? N = x() : N = b.type.hydrate(g, b, D, w, R, z, e, d) : j & 128 && (N = b.type.hydrate(g, b, D, w, _l(r(g)), R, z, e, h))
            }
            return A != null && Zn(A, null, w, b),
                N
        }
        , m = (g, b, D, w, R, z) => {
            z = z || !!b.dynamicChildren;
            const { type: O, props: x, patchFlag: W, shapeFlag: A, dirs: j, transition: Z } = b
                , ne = O === "input" || O === "option";
            if (ne || W !== -1) {
                j && ct(b, null, D, "created");
                let N = !1;
                if (v(g)) {
                    N = qs(null, Z) && D && D.vnode.props && D.vnode.props.appear;
                    const G = g.content.firstChild;
                    N && Z.beforeEnter(G),
                        S(G, g, D),
                        b.el = g = G
                }
                if (A & 16 && !(x && (x.innerHTML || x.textContent))) {
                    let G = d(g.firstChild, b, g, D, w, R, z);
                    for (; G;) {
                        bl(g, 1) || rn();
                        const De = G;
                        G = G.nextSibling,
                            o(De)
                    }
                } else if (A & 8) {
                    let G = b.children;
                    G[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (G = G.slice(1)),
                        g.textContent !== G && (bl(g, 0) || rn(),
                            g.textContent = b.children)
                }
                if (x) {
                    if (ne || !z || W & 48) {
                        const G = g.tagName.includes("-");
                        for (const De in x)
                            (ne && (De.endsWith("value") || De === "indeterminate") || rl(De) && !pn(De) || De[0] === "." || G) && l(g, De, null, x[De], void 0, D)
                    } else if (x.onClick)
                        l(g, "onClick", null, x.onClick, void 0, D);
                    else if (W & 4 && Qt(x.style))
                        for (const G in x.style)
                            x.style[G]
                }
                let Y;
                (Y = x && x.onVnodeBeforeMount) && Ee(Y, D, b),
                    j && ct(b, null, D, "beforeMount"),
                    ((Y = x && x.onVnodeMounted) || j || N) && Zs(() => {
                        Y && Ee(Y, D, b),
                            N && Z.enter(g),
                            j && ct(b, null, D, "mounted")
                    }
                        , w)
            }
            return g.nextSibling
        }
        , d = (g, b, D, w, R, z, O) => {
            O = O || !!b.dynamicChildren;
            const x = b.children
                , W = x.length;
            for (let A = 0; A < W; A++) {
                const j = O ? x[A] : x[A] = We(x[A])
                    , Z = j.type === Zt;
                g ? (Z && !O && A + 1 < W && We(x[A + 1]).type === Zt && (s(a(g.data.slice(j.children.length)), D, i(g)),
                    g.data = j.children),
                    g = h(g, j, w, R, z, O)) : Z && !j.children ? s(j.el = a(""), D) : (bl(D, 1) || rn(),
                        n(null, j, D, null, w, R, _l(D), z))
            }
            return g
        }
        , _ = (g, b, D, w, R, z) => {
            const { slotScopeIds: O } = b;
            O && (R = R ? R.concat(O) : O);
            const x = r(g)
                , W = d(i(g), b, x, D, w, R, z);
            return W && cn(W) && W.data === "]" ? i(b.anchor = W) : (rn(),
                s(b.anchor = c("]"), x, W),
                W)
        }
        , y = (g, b, D, w, R, z) => {
            if (bl(g.parentElement, 1) || rn(),
                b.el = null,
                z) {
                const W = C(g);
                for (; ;) {
                    const A = i(g);
                    if (A && A !== W)
                        o(A);
                    else
                        break
                }
            }
            const O = i(g)
                , x = r(g);
            return o(g),
                n(null, b, x, O, D, w, _l(x), R),
                D && (D.vnode.el = b.el,
                    ha(D, b.el)),
                O
        }
        , C = (g, b = "[", D = "]") => {
            let w = 0;
            for (; g;)
                if (g = i(g),
                    g && cn(g) && (g.data === b && w++,
                        g.data === D)) {
                    if (w === 0)
                        return i(g);
                    w--
                }
            return g
        }
        , S = (g, b, D) => {
            const w = b.parentNode;
            w && w.replaceChild(g, b);
            let R = D;
            for (; R;)
                R.vnode.el === b && (R.vnode.el = R.subTree.el = g),
                    R = R.parent
        }
        , v = g => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [u, h]
}
const br = "data-allow-mismatch"
    , ch = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };
function bl(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(br);)
            e = e.parentElement;
    const n = e && e.getAttribute(br);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const l = n.split(",");
        return t === 0 && l.includes("children") ? !0 : n.split(",").includes(ch[t])
    }
}
ea().requestIdleCallback;
ea().cancelIdleCallback;
function hh(e, t) {
    if (cn(e) && e.data === "[") {
        let n = 1
            , l = e.nextSibling;
        for (; l;) {
            if (l.nodeType === 1) {
                if (t(l) === !1)
                    break
            } else if (cn(l))
                if (l.data === "]") {
                    if (--n === 0)
                        break
                } else
                    l.data === "[" && n++;
            l = l.nextSibling
        }
    } else
        t(e)
}
const kt = e => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function me(e) {
    J(e) && (e = {
        loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: l, delay: a = 200, hydrate: i, timeout: r, suspensible: o = !0, onError: s } = e;
    let c = null, u, h = 0;
    const m = () => (h++,
        c = null,
        d())
        , d = () => {
            let _;
            return c || (_ = c = t().catch(y => {
                if (y = y instanceof Error ? y : new Error(String(y)),
                    s)
                    return new Promise((C, S) => {
                        s(y, () => C(m()), () => S(y), h + 1)
                    }
                    );
                throw y
            }
            ).then(y => _ !== c && c ? c : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default),
                u = y,
                y)))
        }
        ;
    return Pe({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        __asyncHydrate(_, y, C) {
            const S = i ? () => {
                const v = i(C, g => hh(_, g));
                v && (y.bum || (y.bum = [])).push(v)
            }
                : C;
            u ? S() : d().then(() => !y.isUnmounted && S())
        },
        get __asyncResolved() {
            return u
        },
        setup() {
            const _ = Se;
            if (Ei(_),
                u)
                return () => Ma(u, _);
            const y = g => {
                c = null,
                    Mn(g, _, 13, !l)
            }
                ;
            if (o && _.suspense || Sn)
                return d().then(g => () => Ma(g, _)).catch(g => (y(g),
                    () => l ? de(l, {
                        error: g
                    }) : null));
            const C = Xe(!1)
                , S = Xe()
                , v = Xe(!!a);
            return a && setTimeout(() => {
                v.value = !1
            }
                , a),
                r != null && setTimeout(() => {
                    if (!C.value && !S.value) {
                        const g = new Error(`Async component timed out after ${r}ms.`);
                        y(g),
                            S.value = g
                    }
                }
                    , r),
                d().then(() => {
                    C.value = !0,
                        _.parent && sl(_.parent.vnode) && _.parent.update()
                }
                ).catch(g => {
                    y(g),
                        S.value = g
                }
                ),
                () => {
                    if (C.value && u)
                        return Ma(u, _);
                    if (S.value && l)
                        return de(l, {
                            error: S.value
                        });
                    if (n && !v.value)
                        return de(n)
                }
        }
    })
}
function Ma(e, t) {
    const { ref: n, props: l, children: a, ce: i } = t.vnode
        , r = de(e, l, a);
    return r.ref = n,
        r.ce = i,
        delete t.vnode.ce,
        r
}
const sl = e => e.type.__isKeepAlive
    , dh = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, { slots: t }) {
            const n = cl()
                , l = n.ctx;
            if (!l.renderer)
                return () => {
                    const v = t.default && t.default();
                    return v && v.length === 1 ? v[0] : v
                }
                    ;
            const a = new Map
                , i = new Set;
            let r = null;
            const o = n.suspense
                , { renderer: { p: s, m: c, um: u, o: { createElement: h } } } = l
                , m = h("div");
            l.activate = (v, g, b, D, w) => {
                const R = v.component;
                c(v, g, b, 0, o),
                    s(R.vnode, v, g, b, R, o, D, v.slotScopeIds, w),
                    Te(() => {
                        R.isDeactivated = !1,
                            R.a && gn(R.a);
                        const z = v.props && v.props.onVnodeMounted;
                        z && Ee(z, R.parent, v)
                    }
                        , o)
            }
                ,
                l.deactivate = v => {
                    const g = v.component;
                    Vl(g.m),
                        Vl(g.a),
                        c(v, m, null, 1, o),
                        Te(() => {
                            g.da && gn(g.da);
                            const b = v.props && v.props.onVnodeUnmounted;
                            b && Ee(b, g.parent, v),
                                g.isDeactivated = !0
                        }
                            , o)
                }
                ;
            function d(v) {
                Ta(v),
                    u(v, n, o, !0)
            }
            function _(v) {
                a.forEach((g, b) => {
                    const D = li(g.type);
                    D && !v(D) && y(b)
                }
                )
            }
            function y(v) {
                const g = a.get(v);
                g && (!r || !tt(g, r)) ? d(g) : r && Ta(r),
                    a.delete(v),
                    i.delete(v)
            }
            Vt(() => [e.include, e.exclude], ([v, g]) => {
                v && _(b => Vn(v, b)),
                    g && _(b => !Vn(g, b))
            }
                , {
                    flush: "post",
                    deep: !0
                });
            let C = null;
            const S = () => {
                C != null && (El(n.subTree.type) ? Te(() => {
                    a.set(C, Dl(n.subTree))
                }
                    , n.subTree.suspense) : a.set(C, Dl(n.subTree)))
            }
                ;
            return sa(S),
                Bs(S),
                ul(() => {
                    a.forEach(v => {
                        const { subTree: g, suspense: b } = n
                            , D = Dl(g);
                        if (v.type === D.type && v.key === D.key) {
                            Ta(D);
                            const w = D.component.da;
                            w && Te(w, b);
                            return
                        }
                        d(v)
                    }
                    )
                }
                ),
                () => {
                    if (C = null,
                        !t.default)
                        return r = null;
                    const v = t.default()
                        , g = v[0];
                    if (v.length > 1)
                        return r = null,
                            v;
                    if (!en(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
                        return r = null,
                            g;
                    let b = Dl(g);
                    if (b.type === ve)
                        return r = null,
                            b;
                    const D = b.type
                        , w = li(kt(b) ? b.type.__asyncResolved || {} : D)
                        , { include: R, exclude: z, max: O } = e;
                    if (R && (!w || !Vn(R, w)) || z && w && Vn(z, w))
                        return b.shapeFlag &= -257,
                            r = b,
                            g;
                    const x = b.key == null ? D : b.key
                        , W = a.get(x);
                    return b.el && (b = vt(b),
                        g.shapeFlag & 128 && (g.ssContent = b)),
                        C = x,
                        W ? (b.el = W.el,
                            b.component = W.component,
                            b.transition && Dn(b, b.transition),
                            b.shapeFlag |= 512,
                            i.delete(x),
                            i.add(x)) : (i.add(x),
                                O && i.size > parseInt(O, 10) && y(i.values().next().value)),
                        b.shapeFlag |= 256,
                        r = b,
                        El(g.type) ? g : b
                }
        }
    }
    , mh = dh;
function Vn(e, t) {
    return $(e) ? e.some(n => Vn(n, t)) : fe(e) ? e.split(",").includes(t) : hc(e) ? (e.lastIndex = 0,
        e.test(t)) : !1
}
function Ts(e, t) {
    Ls(e, "a", t)
}
function Ps(e, t) {
    Ls(e, "da", t)
}
function Ls(e, t, n = Se) {
    const l = e.__wdc || (e.__wdc = () => {
        let a = n;
        for (; a;) {
            if (a.isDeactivated)
                return;
            a = a.parent
        }
        return e()
    }
    );
    if (oa(t, l, n),
        n) {
        let a = n.parent;
        for (; a && a.parent;)
            sl(a.parent.vnode) && ph(l, t, n, a),
                a = a.parent
    }
}
function ph(e, t, n, l) {
    const a = oa(t, e, l, !0);
    Gt(() => {
        Ti(l[t], a)
    }
        , n)
}
function Ta(e) {
    e.shapeFlag &= -257,
        e.shapeFlag &= -513
}
function Dl(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function oa(e, t, n = Se, l = !1) {
    if (n) {
        const a = n[e] || (n[e] = [])
            , i = t.__weh || (t.__weh = (...r) => {
                Xt();
                const o = tn(n)
                    , s = at(t, n, e, r);
                return o(),
                    Nt(),
                    s
            }
            );
        return l ? a.unshift(i) : a.push(i),
            i
    }
}
const Ct = e => (t, n = Se) => {
    (!Sn || e === "sp") && oa(e, (...l) => t(...l), n)
}
    , gh = Ct("bm")
    , sa = Ct("m")
    , fh = Ct("bu")
    , Bs = Ct("u")
    , ul = Ct("bum")
    , Gt = Ct("um")
    , yh = Ct("sp")
    , _h = Ct("rtg")
    , bh = Ct("rtc");
function As(e, t = Se) {
    oa("ec", e, t)
}
const Ii = "components"
    , Dh = "directives";
function Dr(e, t) {
    return Xi(Ii, e, !0, t) || e
}
const Rs = Symbol.for("v-ndc");
function vh(e) {
    return fe(e) ? Xi(Ii, e, !1) || e : e || Rs
}
function B_(e) {
    return Xi(Dh, e)
}
function Xi(e, t, n = !0, l = !1) {
    const a = Ce || Se;
    if (a) {
        const i = a.type;
        if (e === Ii) {
            const o = li(i, !1);
            if (o && (o === t || o === Qe(t) || o === Zl(Qe(t))))
                return i
        }
        const r = vr(a[e] || i[e], t) || vr(a.appContext[e], t);
        return !r && l ? i : r
    }
}
function vr(e, t) {
    return e && (e[t] || e[Qe(t)] || e[Zl(Qe(t))])
}
function A_(e, t, n, l) {
    let a;
    const i = n
        , r = $(e);
    if (r || fe(e)) {
        const o = r && Qt(e);
        let s = !1;
        o && (s = !Je(e),
            e = ia(e)),
            a = new Array(e.length);
        for (let c = 0, u = e.length; c < u; c++)
            a[c] = t(s ? Ae(e[c]) : e[c], c, void 0, i)
    } else if (typeof e == "number") {
        a = new Array(e);
        for (let o = 0; o < e; o++)
            a[o] = t(o + 1, o, void 0, i)
    } else if (se(e))
        if (e[Symbol.iterator])
            a = Array.from(e, (o, s) => t(o, s, void 0, i));
        else {
            const o = Object.keys(e);
            a = new Array(o.length);
            for (let s = 0, c = o.length; s < c; s++) {
                const u = o[s];
                a[s] = t(e[u], u, s, i)
            }
        }
    else
        a = [];
    return a
}
function R_(e, t, n = {}, l, a) {
    if (Ce.ce || Ce.parent && kt(Ce.parent) && Ce.parent.ce)
        return t !== "default" && (n.name = t),
            Ke(),
            Rt(Re, null, [de("slot", n, l && l())], 64);
    let i = e[t];
    i && i._c && (i._d = !1),
        Ke();
    const r = i && xs(i(n))
        , o = n.key || r && r.key
        , s = Rt(Re, {
            key: (o && !lt(o) ? o : `_${t}`) + (!r && l ? "_fb" : "")
        }, r || (l ? l() : []), r && e._ === 1 ? 64 : -2);
    return s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]),
        i && i._c && (i._d = !0),
        s
}
function xs(e) {
    return e.some(t => en(t) ? !(t.type === ve || t.type === Re && !xs(t.children)) : !0) ? e : null
}
const Ka = e => e ? au(e) ? da(e) : Ka(e.parent) : null
    , Nn = Me(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ka(e.parent),
        $root: e => Ka(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => ks(e),
        $forceUpdate: e => e.f || (e.f = () => {
            Vi(e.update)
        }
        ),
        $nextTick: e => e.n || (e.n = zt.bind(e.proxy)),
        $watch: e => zh.bind(e)
    })
    , Pa = (e, t) => e !== ue && !e.__isScriptSetup && ie(e, t)
    , Sh = {
        get({ _: e }, t) {
            if (t === "__v_skip")
                return !0;
            const { ctx: n, setupState: l, data: a, props: i, accessCache: r, type: o, appContext: s } = e;
            let c;
            if (t[0] !== "$") {
                const d = r[t];
                if (d !== void 0)
                    switch (d) {
                        case 1:
                            return l[t];
                        case 2:
                            return a[t];
                        case 4:
                            return n[t];
                        case 3:
                            return i[t]
                    }
                else {
                    if (Pa(l, t))
                        return r[t] = 1,
                            l[t];
                    if (a !== ue && ie(a, t))
                        return r[t] = 2,
                            a[t];
                    if ((c = e.propsOptions[0]) && ie(c, t))
                        return r[t] = 3,
                            i[t];
                    if (n !== ue && ie(n, t))
                        return r[t] = 4,
                            n[t];
                    Ja && (r[t] = 0)
                }
            }
            const u = Nn[t];
            let h, m;
            if (u)
                return t === "$attrs" && Be(e.attrs, "get", ""),
                    u(e);
            if ((h = o.__cssModules) && (h = h[t]))
                return h;
            if (n !== ue && ie(n, t))
                return r[t] = 4,
                    n[t];
            if (m = s.config.globalProperties,
                ie(m, t))
                return m[t]
        },
        set({ _: e }, t, n) {
            const { data: l, setupState: a, ctx: i } = e;
            return Pa(a, t) ? (a[t] = n,
                !0) : l !== ue && ie(l, t) ? (l[t] = n,
                    !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n,
                        !0)
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: i } }, r) {
            let o;
            return !!n[r] || e !== ue && ie(e, r) || Pa(t, r) || (o = i[0]) && ie(o, r) || ie(l, r) || ie(Nn, r) || ie(a.config.globalProperties, r)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
        }
    };
function Sr(e) {
    return $(e) ? e.reduce((t, n) => (t[n] = null,
        t), {}) : e
}
function x_(e) {
    const t = cl();
    let n = e();
    return ti(),
        Pi(n) && (n = n.catch(l => {
            throw tn(t),
            l
        }
        )),
        [n, () => tn(t)]
}
let Ja = !0;
function Ch(e) {
    const t = ks(e)
        , n = e.proxy
        , l = e.ctx;
    Ja = !1,
        t.beforeCreate && Cr(t.beforeCreate, e, "bc");
    const { data: a, computed: i, methods: r, watch: o, provide: s, inject: c, created: u, beforeMount: h, mounted: m, beforeUpdate: d, updated: _, activated: y, deactivated: C, beforeDestroy: S, beforeUnmount: v, destroyed: g, unmounted: b, render: D, renderTracked: w, renderTriggered: R, errorCaptured: z, serverPrefetch: O, expose: x, inheritAttrs: W, components: A, directives: j, filters: Z } = t;
    if (c && Hh(c, l, null),
        r)
        for (const Y in r) {
            const G = r[Y];
            J(G) && (l[Y] = G.bind(n))
        }
    if (a) {
        const Y = a.call(n, n);
        se(Y) && (e.data = St(Y))
    }
    if (Ja = !0,
        i)
        for (const Y in i) {
            const G = i[Y]
                , De = J(G) ? G.bind(n, n) : J(G.get) ? G.get.bind(n, n) : ht
                , Ht = !J(G) && J(G.set) ? G.set.bind(n) : ht
                , rt = ye({
                    get: De,
                    set: Ht
                });
            Object.defineProperty(l, Y, {
                enumerable: !0,
                configurable: !0,
                get: () => rt.value,
                set: Ve => rt.value = Ve
            })
        }
    if (o)
        for (const Y in o)
            Os(o[Y], l, n, Y);
    if (s) {
        const Y = J(s) ? s.call(n) : s;
        Reflect.ownKeys(Y).forEach(G => {
            Ft(G, Y[G])
        }
        )
    }
    u && Cr(u, e, "c");
    function N(Y, G) {
        $(G) ? G.forEach(De => Y(De.bind(n))) : G && Y(G.bind(n))
    }
    if (N(gh, h),
        N(sa, m),
        N(fh, d),
        N(Bs, _),
        N(Ts, y),
        N(Ps, C),
        N(As, z),
        N(bh, w),
        N(_h, R),
        N(ul, v),
        N(Gt, b),
        N(yh, O),
        $(x))
        if (x.length) {
            const Y = e.exposed || (e.exposed = {});
            x.forEach(G => {
                Object.defineProperty(Y, G, {
                    get: () => n[G],
                    set: De => n[G] = De
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    D && e.render === ht && (e.render = D),
        W != null && (e.inheritAttrs = W),
        A && (e.components = A),
        j && (e.directives = j),
        O && Ei(e)
}
function Hh(e, t, n = ht) {
    $(e) && (e = Qa(e));
    for (const l in e) {
        const a = e[l];
        let i;
        se(a) ? "default" in a ? i = we(a.from || l, a.default, !0) : i = we(a.from || l) : i = we(a),
            be(i) ? Object.defineProperty(t, l, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: r => i.value = r
            }) : t[l] = i
    }
}
function Cr(e, t, n) {
    at($(e) ? e.map(l => l.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Os(e, t, n, l) {
    let a = l.includes(".") ? Js(n, l) : () => n[l];
    if (fe(e)) {
        const i = t[e];
        J(i) && Vt(a, i)
    } else if (J(e))
        Vt(a, e.bind(n));
    else if (se(e))
        if ($(e))
            e.forEach(i => Os(i, t, n, l));
        else {
            const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
            J(i) && Vt(a, i, e)
        }
}
function ks(e) {
    const t = e.type
        , { mixins: n, extends: l } = t
        , { mixins: a, optionsCache: i, config: { optionMergeStrategies: r } } = e.appContext
        , o = i.get(t);
    let s;
    return o ? s = o : !a.length && !n && !l ? s = t : (s = {},
        a.length && a.forEach(c => Fl(s, c, r, !0)),
        Fl(s, t, r)),
        se(t) && i.set(t, s),
        s
}
function Fl(e, t, n, l = !1) {
    const { mixins: a, extends: i } = t;
    i && Fl(e, i, n, !0),
        a && a.forEach(r => Fl(e, r, n, !0));
    for (const r in t)
        if (!(l && r === "expose")) {
            const o = wh[r] || n && n[r];
            e[r] = o ? o(e[r], t[r]) : t[r]
        }
    return e
}
const wh = {
    data: Hr,
    props: wr,
    emits: wr,
    methods: En,
    computed: En,
    beforeCreate: xe,
    created: xe,
    beforeMount: xe,
    mounted: xe,
    beforeUpdate: xe,
    updated: xe,
    beforeDestroy: xe,
    beforeUnmount: xe,
    destroyed: xe,
    unmounted: xe,
    activated: xe,
    deactivated: xe,
    errorCaptured: xe,
    serverPrefetch: xe,
    components: En,
    directives: En,
    watch: Th,
    provide: Hr,
    inject: Mh
};
function Hr(e, t) {
    return t ? e ? function () {
        return Me(J(e) ? e.call(this, this) : e, J(t) ? t.call(this, this) : t)
    }
        : t : e
}
function Mh(e, t) {
    return En(Qa(e), Qa(t))
}
function Qa(e) {
    if ($(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function xe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function En(e, t) {
    return e ? Me(Object.create(null), e, t) : t
}
function wr(e, t) {
    return e ? $(e) && $(t) ? [...new Set([...e, ...t])] : Me(Object.create(null), Sr(e), Sr(t ?? {})) : t
}
function Th(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = Me(Object.create(null), e);
    for (const l in t)
        n[l] = xe(e[l], t[l]);
    return n
}
function Fs() {
    return {
        app: null,
        config: {
            isNativeTag: uc,
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
let Ph = 0;
function Lh(e, t) {
    return function (l, a = null) {
        J(l) || (l = Me({}, l)),
            a != null && !se(a) && (a = null);
        const i = Fs()
            , r = new WeakSet
            , o = [];
        let s = !1;
        const c = i.app = {
            _uid: Ph++,
            _component: l,
            _props: a,
            _container: null,
            _context: i,
            _instance: null,
            version: dd,
            get config() {
                return i.config
            },
            set config(u) { },
            use(u, ...h) {
                return r.has(u) || (u && J(u.install) ? (r.add(u),
                    u.install(c, ...h)) : J(u) && (r.add(u),
                        u(c, ...h))),
                    c
            },
            mixin(u) {
                return i.mixins.includes(u) || i.mixins.push(u),
                    c
            },
            component(u, h) {
                return h ? (i.components[u] = h,
                    c) : i.components[u]
            },
            directive(u, h) {
                return h ? (i.directives[u] = h,
                    c) : i.directives[u]
            },
            mount(u, h, m) {
                if (!s) {
                    const d = c._ceVNode || de(l, a);
                    return d.appContext = i,
                        m === !0 ? m = "svg" : m === !1 && (m = void 0),
                        h && t ? t(d, u) : e(d, u, m),
                        s = !0,
                        c._container = u,
                        u.__vue_app__ = c,
                        da(d.component)
                }
            },
            onUnmount(u) {
                o.push(u)
            },
            unmount() {
                s && (at(o, c._instance, 16),
                    e(null, c._container),
                    delete c._container.__vue_app__)
            },
            provide(u, h) {
                return i.provides[u] = h,
                    c
            },
            runWithContext(u) {
                const h = Yt;
                Yt = c;
                try {
                    return u()
                } finally {
                    Yt = h
                }
            }
        };
        return c
    }
}
let Yt = null;
function Ft(e, t) {
    if (Se) {
        let n = Se.provides;
        const l = Se.parent && Se.parent.provides;
        l === n && (n = Se.provides = Object.create(l)),
            n[e] = t
    }
}
function we(e, t, n = !1) {
    const l = Se || Ce;
    if (l || Yt) {
        const a = Yt ? Yt._context.provides : l ? l.parent == null ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
        if (a && e in a)
            return a[e];
        if (arguments.length > 1)
            return n && J(t) ? t.call(l && l.proxy) : t
    }
}
function ua() {
    return !!(Se || Ce || Yt)
}
const Vs = {}
    , Es = () => Object.create(Vs)
    , Is = e => Object.getPrototypeOf(e) === Vs;
function Bh(e, t, n, l = !1) {
    const a = {}
        , i = Es();
    e.propsDefaults = Object.create(null),
        Xs(e, t, a, i);
    for (const r in e.propsOptions[0])
        r in a || (a[r] = void 0);
    n ? e.props = l ? a : bt(a) : e.type.props ? e.props = a : e.props = i,
        e.attrs = i
}
function Ah(e, t, n, l) {
    const { props: a, attrs: i, vnode: { patchFlag: r } } = e
        , o = te(a)
        , [s] = e.propsOptions;
    let c = !1;
    if ((l || r > 0) && !(r & 16)) {
        if (r & 8) {
            const u = e.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let m = u[h];
                if (ca(e.emitsOptions, m))
                    continue;
                const d = t[m];
                if (s)
                    if (ie(i, m))
                        d !== i[m] && (i[m] = d,
                            c = !0);
                    else {
                        const _ = Qe(m);
                        a[_] = Ya(s, o, _, d, e, !1)
                    }
                else
                    d !== i[m] && (i[m] = d,
                        c = !0)
            }
        }
    } else {
        Xs(e, t, a, i) && (c = !0);
        let u;
        for (const h in o)
            (!t || !ie(t, h) && ((u = It(h)) === h || !ie(t, u))) && (s ? n && (n[h] !== void 0 || n[u] !== void 0) && (a[h] = Ya(s, o, h, void 0, e, !0)) : delete a[h]);
        if (i !== o)
            for (const h in i)
                (!t || !ie(t, h)) && (delete i[h],
                    c = !0)
    }
    c && yt(e.attrs, "set", "")
}
function Xs(e, t, n, l) {
    const [a, i] = e.propsOptions;
    let r = !1, o;
    if (t)
        for (let s in t) {
            if (pn(s))
                continue;
            const c = t[s];
            let u;
            a && ie(a, u = Qe(s)) ? !i || !i.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : ca(e.emitsOptions, s) || (!(s in l) || c !== l[s]) && (l[s] = c,
                r = !0)
        }
    if (i) {
        const s = te(n)
            , c = o || ue;
        for (let u = 0; u < i.length; u++) {
            const h = i[u];
            n[h] = Ya(a, s, h, c[h], e, !ie(c, h))
        }
    }
    return r
}
function Ya(e, t, n, l, a, i) {
    const r = e[n];
    if (r != null) {
        const o = ie(r, "default");
        if (o && l === void 0) {
            const s = r.default;
            if (r.type !== Function && !r.skipFactory && J(s)) {
                const { propsDefaults: c } = a;
                if (n in c)
                    l = c[n];
                else {
                    const u = tn(a);
                    l = c[n] = s.call(null, t),
                        u()
                }
            } else
                l = s;
            a.ce && a.ce._setProp(n, l)
        }
        r[0] && (i && !o ? l = !1 : r[1] && (l === "" || l === It(n)) && (l = !0))
    }
    return l
}
const Rh = new WeakMap;
function Ns(e, t, n = !1) {
    const l = n ? Rh : t.propsCache
        , a = l.get(e);
    if (a)
        return a;
    const i = e.props
        , r = {}
        , o = [];
    let s = !1;
    if (!J(e)) {
        const u = h => {
            s = !0;
            const [m, d] = Ns(h, t, !0);
            Me(r, m),
                d && o.push(...d)
        }
            ;
        !n && t.mixins.length && t.mixins.forEach(u),
            e.extends && u(e.extends),
            e.mixins && e.mixins.forEach(u)
    }
    if (!i && !s)
        return se(e) && l.set(e, dn),
            dn;
    if ($(i))
        for (let u = 0; u < i.length; u++) {
            const h = Qe(i[u]);
            Mr(h) && (r[h] = ue)
        }
    else if (i)
        for (const u in i) {
            const h = Qe(u);
            if (Mr(h)) {
                const m = i[u]
                    , d = r[h] = $(m) || J(m) ? {
                        type: m
                    } : Me({}, m)
                    , _ = d.type;
                let y = !1
                    , C = !0;
                if ($(_))
                    for (let S = 0; S < _.length; ++S) {
                        const v = _[S]
                            , g = J(v) && v.name;
                        if (g === "Boolean") {
                            y = !0;
                            break
                        } else
                            g === "String" && (C = !1)
                    }
                else
                    y = J(_) && _.name === "Boolean";
                d[0] = y,
                    d[1] = C,
                    (y || ie(d, "default")) && o.push(h)
            }
        }
    const c = [r, o];
    return se(e) && l.set(e, c),
        c
}
function Mr(e) {
    return e[0] !== "$" && !pn(e)
}
const zs = e => e[0] === "_" || e === "$stable"
    , Ni = e => $(e) ? e.map(We) : [We(e)]
    , xh = (e, t, n) => {
        if (t._n)
            return t;
        const l = ra((...a) => Ni(t(...a)), n);
        return l._c = !1,
            l
    }
    , Gs = (e, t, n) => {
        const l = e._ctx;
        for (const a in e) {
            if (zs(a))
                continue;
            const i = e[a];
            if (J(i))
                t[a] = xh(a, i, l);
            else if (i != null) {
                const r = Ni(i);
                t[a] = () => r
            }
        }
    }
    , Us = (e, t) => {
        const n = Ni(t);
        e.slots.default = () => n
    }
    , Ws = (e, t, n) => {
        for (const l in t)
            (n || l !== "_") && (e[l] = t[l])
    }
    , Oh = (e, t, n) => {
        const l = e.slots = Es();
        if (e.vnode.shapeFlag & 32) {
            const a = t._;
            a ? (Ws(l, t, n),
                n && Wo(l, "_", a, !0)) : Gs(t, l)
        } else
            t && Us(e, t)
    }
    , kh = (e, t, n) => {
        const { vnode: l, slots: a } = e;
        let i = !0
            , r = ue;
        if (l.shapeFlag & 32) {
            const o = t._;
            o ? n && o === 1 ? i = !1 : Ws(a, t, n) : (i = !t.$stable,
                Gs(t, a)),
                r = t
        } else
            t && (Us(e, t),
                r = {
                    default: 1
                });
        if (i)
            for (const o in a)
                !zs(o) && r[o] == null && delete a[o]
    }
    , Te = Zs;
function Fh(e) {
    return js(e)
}
function Vh(e) {
    return js(e, uh)
}
function js(e, t) {
    const n = ea();
    n.__VUE__ = !0;
    const { insert: l, remove: a, patchProp: i, createElement: r, createText: o, createComment: s, setText: c, setElementText: u, parentNode: h, nextSibling: m, setScopeId: d = ht, insertStaticContent: _ } = e
        , y = (p, f, H, P = null, M = null, L = null, V = void 0, F = null, k = !!f.dynamicChildren) => {
            if (p === f)
                return;
            p && !tt(p, f) && (P = T(p),
                Ve(p, M, L, !0),
                p = null),
                f.patchFlag === -2 && (k = !1,
                    f.dynamicChildren = null);
            const { type: B, ref: K, shapeFlag: I } = f;
            switch (B) {
                case Zt:
                    C(p, f, H, P);
                    break;
                case ve:
                    S(p, f, H, P);
                    break;
                case zn:
                    p == null && v(f, H, P, V);
                    break;
                case Re:
                    A(p, f, H, P, M, L, V, F, k);
                    break;
                default:
                    I & 1 ? D(p, f, H, P, M, L, V, F, k) : I & 6 ? j(p, f, H, P, M, L, V, F, k) : (I & 64 || I & 128) && B.process(p, f, H, P, M, L, V, F, k, U)
            }
            K != null && M && Zn(K, p && p.ref, L, f || p, !f)
        }
        , C = (p, f, H, P) => {
            if (p == null)
                l(f.el = o(f.children), H, P);
            else {
                const M = f.el = p.el;
                f.children !== p.children && c(M, f.children)
            }
        }
        , S = (p, f, H, P) => {
            p == null ? l(f.el = s(f.children || ""), H, P) : f.el = p.el
        }
        , v = (p, f, H, P) => {
            [p.el, p.anchor] = _(p.children, f, H, P, p.el, p.anchor)
        }
        , g = ({ el: p, anchor: f }, H, P) => {
            let M;
            for (; p && p !== f;)
                M = m(p),
                    l(p, H, P),
                    p = M;
            l(f, H, P)
        }
        , b = ({ el: p, anchor: f }) => {
            let H;
            for (; p && p !== f;)
                H = m(p),
                    a(p),
                    p = H;
            a(f)
        }
        , D = (p, f, H, P, M, L, V, F, k) => {
            f.type === "svg" ? V = "svg" : f.type === "math" && (V = "mathml"),
                p == null ? w(f, H, P, M, L, V, F, k) : O(p, f, M, L, V, F, k)
        }
        , w = (p, f, H, P, M, L, V, F) => {
            let k, B;
            const { props: K, shapeFlag: I, transition: q, dirs: Q } = p;
            if (k = p.el = r(p.type, L, K && K.is, K),
                I & 8 ? u(k, p.children) : I & 16 && z(p.children, k, null, P, M, La(p, L), V, F),
                Q && ct(p, null, P, "created"),
                R(k, p, p.scopeId, V, P),
                K) {
                for (const ce in K)
                    ce !== "value" && !pn(ce) && i(k, ce, null, K[ce], L, P);
                "value" in K && i(k, "value", null, K.value, L),
                    (B = K.onVnodeBeforeMount) && Ee(B, P, p)
            }
            Q && ct(p, null, P, "beforeMount");
            const ee = qs(M, q);
            ee && q.beforeEnter(k),
                l(k, f, H),
                ((B = K && K.onVnodeMounted) || ee || Q) && Te(() => {
                    B && Ee(B, P, p),
                        ee && q.enter(k),
                        Q && ct(p, null, P, "mounted")
                }
                    , M)
        }
        , R = (p, f, H, P, M) => {
            if (H && d(p, H),
                P)
                for (let L = 0; L < P.length; L++)
                    d(p, P[L]);
            if (M) {
                let L = M.subTree;
                if (f === L || El(L.type) && (L.ssContent === f || L.ssFallback === f)) {
                    const V = M.vnode;
                    R(p, V, V.scopeId, V.slotScopeIds, M.parent)
                }
            }
        }
        , z = (p, f, H, P, M, L, V, F, k = 0) => {
            for (let B = k; B < p.length; B++) {
                const K = p[B] = F ? Lt(p[B]) : We(p[B]);
                y(null, K, f, H, P, M, L, V, F)
            }
        }
        , O = (p, f, H, P, M, L, V) => {
            const F = f.el = p.el;
            let { patchFlag: k, dynamicChildren: B, dirs: K } = f;
            k |= p.patchFlag & 16;
            const I = p.props || ue
                , q = f.props || ue;
            let Q;
            if (H && Ut(H, !1),
                (Q = q.onVnodeBeforeUpdate) && Ee(Q, H, f, p),
                K && ct(f, p, H, "beforeUpdate"),
                H && Ut(H, !0),
                (I.innerHTML && q.innerHTML == null || I.textContent && q.textContent == null) && u(F, ""),
                B ? x(p.dynamicChildren, B, F, H, P, La(f, M), L) : V || G(p, f, F, null, H, P, La(f, M), L, !1),
                k > 0) {
                if (k & 16)
                    W(F, I, q, H, M);
                else if (k & 2 && I.class !== q.class && i(F, "class", null, q.class, M),
                    k & 4 && i(F, "style", I.style, q.style, M),
                    k & 8) {
                    const ee = f.dynamicProps;
                    for (let ce = 0; ce < ee.length; ce++) {
                        const re = ee[ce]
                            , ze = I[re]
                            , Le = q[re];
                        (Le !== ze || re === "value") && i(F, re, ze, Le, M, H)
                    }
                }
                k & 1 && p.children !== f.children && u(F, f.children)
            } else
                !V && B == null && W(F, I, q, H, M);
            ((Q = q.onVnodeUpdated) || K) && Te(() => {
                Q && Ee(Q, H, f, p),
                    K && ct(f, p, H, "updated")
            }
                , P)
        }
        , x = (p, f, H, P, M, L, V) => {
            for (let F = 0; F < f.length; F++) {
                const k = p[F]
                    , B = f[F]
                    , K = k.el && (k.type === Re || !tt(k, B) || k.shapeFlag & 70) ? h(k.el) : H;
                y(k, B, K, null, P, M, L, V, !0)
            }
        }
        , W = (p, f, H, P, M) => {
            if (f !== H) {
                if (f !== ue)
                    for (const L in f)
                        !pn(L) && !(L in H) && i(p, L, f[L], null, M, P);
                for (const L in H) {
                    if (pn(L))
                        continue;
                    const V = H[L]
                        , F = f[L];
                    V !== F && L !== "value" && i(p, L, F, V, M, P)
                }
                "value" in H && i(p, "value", f.value, H.value, M)
            }
        }
        , A = (p, f, H, P, M, L, V, F, k) => {
            const B = f.el = p ? p.el : o("")
                , K = f.anchor = p ? p.anchor : o("");
            let { patchFlag: I, dynamicChildren: q, slotScopeIds: Q } = f;
            Q && (F = F ? F.concat(Q) : Q),
                p == null ? (l(B, H, P),
                    l(K, H, P),
                    z(f.children || [], H, K, M, L, V, F, k)) : I > 0 && I & 64 && q && p.dynamicChildren ? (x(p.dynamicChildren, q, H, M, L, V, F),
                        (f.key != null || M && f === M.subTree) && $s(p, f, !0)) : G(p, f, H, K, M, L, V, F, k)
        }
        , j = (p, f, H, P, M, L, V, F, k) => {
            f.slotScopeIds = F,
                p == null ? f.shapeFlag & 512 ? M.ctx.activate(f, H, P, V, k) : Z(f, H, P, M, L, V, k) : ne(p, f, k)
        }
        , Z = (p, f, H, P, M, L, V) => {
            const F = p.component = rd(p, P, M);
            if (sl(p) && (F.ctx.renderer = U),
                od(F, !1, V),
                F.asyncDep) {
                if (M && M.registerDep(F, N, V),
                    !p.el) {
                    const k = F.subTree = de(ve);
                    S(null, k, f, H)
                }
            } else
                N(F, p, f, H, M, L, V)
        }
        , ne = (p, f, H) => {
            const P = f.component = p.component;
            if ($h(p, f, H))
                if (P.asyncDep && !P.asyncResolved) {
                    Y(P, f, H);
                    return
                } else
                    P.next = f,
                        P.update();
            else
                f.el = p.el,
                    P.vnode = f
        }
        , N = (p, f, H, P, M, L, V) => {
            const F = () => {
                if (p.isMounted) {
                    let { next: I, bu: q, u: Q, parent: ee, vnode: ce } = p;
                    {
                        const Ge = Ks(p);
                        if (Ge) {
                            I && (I.el = ce.el,
                                Y(p, I, V)),
                                Ge.asyncDep.then(() => {
                                    p.isUnmounted || F()
                                }
                                );
                            return
                        }
                    }
                    let re = I, ze;
                    Ut(p, !1),
                        I ? (I.el = ce.el,
                            Y(p, I, V)) : I = ce,
                        q && gn(q),
                        (ze = I.props && I.props.onVnodeBeforeUpdate) && Ee(ze, ee, I, ce),
                        Ut(p, !0);
                    const Le = Ba(p)
                        , Ye = p.subTree;
                    p.subTree = Le,
                        y(Ye, Le, h(Ye.el), T(Ye), p, M, L),
                        I.el = Le.el,
                        re === null && ha(p, Le.el),
                        Q && Te(Q, M),
                        (ze = I.props && I.props.onVnodeUpdated) && Te(() => Ee(ze, ee, I, ce), M)
                } else {
                    let I;
                    const { el: q, props: Q } = f
                        , { bm: ee, m: ce, parent: re, root: ze, type: Le } = p
                        , Ye = kt(f);
                    if (Ut(p, !1),
                        ee && gn(ee),
                        !Ye && (I = Q && Q.onVnodeBeforeMount) && Ee(I, re, f),
                        Ut(p, !0),
                        q && pe) {
                        const Ge = () => {
                            p.subTree = Ba(p),
                                pe(q, p.subTree, p, M, null)
                        }
                            ;
                        Ye && Le.__asyncHydrate ? Le.__asyncHydrate(q, p, Ge) : Ge()
                    } else {
                        ze.ce && ze.ce._injectChildStyle(Le);
                        const Ge = p.subTree = Ba(p);
                        y(null, Ge, H, P, p, M, L),
                            f.el = Ge.el
                    }
                    if (ce && Te(ce, M),
                        !Ye && (I = Q && Q.onVnodeMounted)) {
                        const Ge = f;
                        Te(() => Ee(I, re, Ge), M)
                    }
                    (f.shapeFlag & 256 || re && kt(re.vnode) && re.vnode.shapeFlag & 256) && p.a && Te(p.a, M),
                        p.isMounted = !0,
                        f = H = P = null
                }
            }
                ;
            p.scope.on();
            const k = p.effect = new Yo(F);
            p.scope.off();
            const B = p.update = k.run.bind(k)
                , K = p.job = k.runIfDirty.bind(k);
            K.i = p,
                K.id = p.uid,
                k.scheduler = () => Vi(K),
                Ut(p, !0),
                B()
        }
        , Y = (p, f, H) => {
            f.component = p;
            const P = p.vnode.props;
            p.vnode = f,
                p.next = null,
                Ah(p, f.props, P, H),
                kh(p, f.children, H),
                Xt(),
                fr(p),
                Nt()
        }
        , G = (p, f, H, P, M, L, V, F, k = !1) => {
            const B = p && p.children
                , K = p ? p.shapeFlag : 0
                , I = f.children
                , { patchFlag: q, shapeFlag: Q } = f;
            if (q > 0) {
                if (q & 128) {
                    Ht(B, I, H, P, M, L, V, F, k);
                    return
                } else if (q & 256) {
                    De(B, I, H, P, M, L, V, F, k);
                    return
                }
            }
            Q & 8 ? (K & 16 && je(B, M, L),
                I !== B && u(H, I)) : K & 16 ? Q & 16 ? Ht(B, I, H, P, M, L, V, F, k) : je(B, M, L, !0) : (K & 8 && u(H, ""),
                    Q & 16 && z(I, H, P, M, L, V, F, k))
        }
        , De = (p, f, H, P, M, L, V, F, k) => {
            p = p || dn,
                f = f || dn;
            const B = p.length
                , K = f.length
                , I = Math.min(B, K);
            let q;
            for (q = 0; q < I; q++) {
                const Q = f[q] = k ? Lt(f[q]) : We(f[q]);
                y(p[q], Q, H, null, M, L, V, F, k)
            }
            B > K ? je(p, M, L, !0, !1, I) : z(f, H, P, M, L, V, F, k, I)
        }
        , Ht = (p, f, H, P, M, L, V, F, k) => {
            let B = 0;
            const K = f.length;
            let I = p.length - 1
                , q = K - 1;
            for (; B <= I && B <= q;) {
                const Q = p[B]
                    , ee = f[B] = k ? Lt(f[B]) : We(f[B]);
                if (tt(Q, ee))
                    y(Q, ee, H, null, M, L, V, F, k);
                else
                    break;
                B++
            }
            for (; B <= I && B <= q;) {
                const Q = p[I]
                    , ee = f[q] = k ? Lt(f[q]) : We(f[q]);
                if (tt(Q, ee))
                    y(Q, ee, H, null, M, L, V, F, k);
                else
                    break;
                I--,
                    q--
            }
            if (B > I) {
                if (B <= q) {
                    const Q = q + 1
                        , ee = Q < K ? f[Q].el : P;
                    for (; B <= q;)
                        y(null, f[B] = k ? Lt(f[B]) : We(f[B]), H, ee, M, L, V, F, k),
                            B++
                }
            } else if (B > q)
                for (; B <= I;)
                    Ve(p[B], M, L, !0),
                        B++;
            else {
                const Q = B
                    , ee = B
                    , ce = new Map;
                for (B = ee; B <= q; B++) {
                    const Ue = f[B] = k ? Lt(f[B]) : We(f[B]);
                    Ue.key != null && ce.set(Ue.key, B)
                }
                let re, ze = 0;
                const Le = q - ee + 1;
                let Ye = !1
                    , Ge = 0;
                const Bn = new Array(Le);
                for (B = 0; B < Le; B++)
                    Bn[B] = 0;
                for (B = Q; B <= I; B++) {
                    const Ue = p[B];
                    if (ze >= Le) {
                        Ve(Ue, M, L, !0);
                        continue
                    }
                    let ot;
                    if (Ue.key != null)
                        ot = ce.get(Ue.key);
                    else
                        for (re = ee; re <= q; re++)
                            if (Bn[re - ee] === 0 && tt(Ue, f[re])) {
                                ot = re;
                                break
                            }
                    ot === void 0 ? Ve(Ue, M, L, !0) : (Bn[ot - ee] = B + 1,
                        ot >= Ge ? Ge = ot : Ye = !0,
                        y(Ue, f[ot], H, null, M, L, V, F, k),
                        ze++)
                }
                const sr = Ye ? Eh(Bn) : dn;
                for (re = sr.length - 1,
                    B = Le - 1; B >= 0; B--) {
                    const Ue = ee + B
                        , ot = f[Ue]
                        , ur = Ue + 1 < K ? f[Ue + 1].el : P;
                    Bn[B] === 0 ? y(null, ot, H, ur, M, L, V, F, k) : Ye && (re < 0 || B !== sr[re] ? rt(ot, H, ur, 2) : re--)
                }
            }
        }
        , rt = (p, f, H, P, M = null) => {
            const { el: L, type: V, transition: F, children: k, shapeFlag: B } = p;
            if (B & 6) {
                rt(p.component.subTree, f, H, P);
                return
            }
            if (B & 128) {
                p.suspense.move(f, H, P);
                return
            }
            if (B & 64) {
                V.move(p, f, H, U);
                return
            }
            if (V === Re) {
                l(L, f, H);
                for (let I = 0; I < k.length; I++)
                    rt(k[I], f, H, P);
                l(p.anchor, f, H);
                return
            }
            if (V === zn) {
                g(p, f, H);
                return
            }
            if (P !== 2 && B & 1 && F)
                if (P === 0)
                    F.beforeEnter(L),
                        l(L, f, H),
                        Te(() => F.enter(L), M);
                else {
                    const { leave: I, delayLeave: q, afterLeave: Q } = F
                        , ee = () => l(L, f, H)
                        , ce = () => {
                            I(L, () => {
                                ee(),
                                    Q && Q()
                            }
                            )
                        }
                        ;
                    q ? q(L, ee, ce) : ce()
                }
            else
                l(L, f, H)
        }
        , Ve = (p, f, H, P = !1, M = !1) => {
            const { type: L, props: V, ref: F, children: k, dynamicChildren: B, shapeFlag: K, patchFlag: I, dirs: q, cacheIndex: Q } = p;
            if (I === -2 && (M = !1),
                F != null && Zn(F, null, H, p, !0),
                Q != null && (f.renderCache[Q] = void 0),
                K & 256) {
                f.ctx.deactivate(p);
                return
            }
            const ee = K & 1 && q
                , ce = !kt(p);
            let re;
            if (ce && (re = V && V.onVnodeBeforeUnmount) && Ee(re, f, p),
                K & 6)
                ml(p.component, H, P);
            else {
                if (K & 128) {
                    p.suspense.unmount(H, P);
                    return
                }
                ee && ct(p, null, f, "beforeUnmount"),
                    K & 64 ? p.type.remove(p, f, H, U, P) : B && !B.hasOnce && (L !== Re || I > 0 && I & 64) ? je(B, f, H, !1, !0) : (L === Re && I & 384 || !M && K & 16) && je(k, f, H),
                    P && nn(p)
            }
            (ce && (re = V && V.onVnodeUnmounted) || ee) && Te(() => {
                re && Ee(re, f, p),
                    ee && ct(p, null, f, "unmounted")
            }
                , H)
        }
        , nn = p => {
            const { type: f, el: H, anchor: P, transition: M } = p;
            if (f === Re) {
                ln(H, P);
                return
            }
            if (f === zn) {
                b(p);
                return
            }
            const L = () => {
                a(H),
                    M && !M.persisted && M.afterLeave && M.afterLeave()
            }
                ;
            if (p.shapeFlag & 1 && M && !M.persisted) {
                const { leave: V, delayLeave: F } = M
                    , k = () => V(H, L);
                F ? F(p.el, L, k) : k()
            } else
                L()
        }
        , ln = (p, f) => {
            let H;
            for (; p !== f;)
                H = m(p),
                    a(p),
                    p = H;
            a(f)
        }
        , ml = (p, f, H) => {
            const { bum: P, scope: M, job: L, subTree: V, um: F, m: k, a: B } = p;
            Vl(k),
                Vl(B),
                P && gn(P),
                M.stop(),
                L && (L.flags |= 8,
                    Ve(V, p, f, H)),
                F && Te(F, f),
                Te(() => {
                    p.isUnmounted = !0
                }
                    , f),
                f && f.pendingBranch && !f.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === f.pendingId && (f.deps--,
                    f.deps === 0 && f.resolve())
        }
        , je = (p, f, H, P = !1, M = !1, L = 0) => {
            for (let V = L; V < p.length; V++)
                Ve(p[V], f, H, P, M)
        }
        , T = p => {
            if (p.shapeFlag & 6)
                return T(p.component.subTree);
            if (p.shapeFlag & 128)
                return p.suspense.next();
            const f = m(p.anchor || p.el)
                , H = f && f[lh];
            return H ? m(H) : f
        }
        ;
    let X = !1;
    const E = (p, f, H) => {
        p == null ? f._vnode && Ve(f._vnode, null, null, !0) : y(f._vnode || null, p, f, null, null, null, H),
            f._vnode = p,
            X || (X = !0,
                fr(),
                Ol(),
                X = !1)
    }
        , U = {
            p: y,
            um: Ve,
            m: rt,
            r: nn,
            mt: Z,
            mc: z,
            pc: G,
            pbc: x,
            n: T,
            o: e
        };
    let le, pe;
    return t && ([le, pe] = t(U)),
    {
        render: E,
        hydrate: le,
        createApp: Lh(E, le)
    }
}
function La({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Ut({ effect: e, job: t }, n) {
    n ? (e.flags |= 32,
        t.flags |= 4) : (e.flags &= -33,
            t.flags &= -5)
}
function qs(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function $s(e, t, n = !1) {
    const l = e.children
        , a = t.children;
    if ($(l) && $(a))
        for (let i = 0; i < l.length; i++) {
            const r = l[i];
            let o = a[i];
            o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[i] = Lt(a[i]),
                o.el = r.el),
                !n && o.patchFlag !== -2 && $s(r, o)),
                o.type === Zt && (o.el = r.el)
        }
}
function Eh(e) {
    const t = e.slice()
        , n = [0];
    let l, a, i, r, o;
    const s = e.length;
    for (l = 0; l < s; l++) {
        const c = e[l];
        if (c !== 0) {
            if (a = n[n.length - 1],
                e[a] < c) {
                t[l] = a,
                    n.push(l);
                continue
            }
            for (i = 0,
                r = n.length - 1; i < r;)
                o = i + r >> 1,
                    e[n[o]] < c ? i = o + 1 : r = o;
            c < e[n[i]] && (i > 0 && (t[l] = n[i - 1]),
                n[i] = l)
        }
    }
    for (i = n.length,
        r = n[i - 1]; i-- > 0;)
        n[i] = r,
            r = t[r];
    return n
}
function Ks(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Ks(t)
}
function Vl(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const Ih = Symbol.for("v-scx")
    , Xh = () => we(Ih);
function Nh(e, t) {
    return zi(e, null, t)
}
function Vt(e, t, n) {
    return zi(e, t, n)
}
function zi(e, t, n = ue) {
    const { immediate: l, deep: a, flush: i, once: r } = n
        , o = Me({}, n)
        , s = t && l || !t && i !== "post";
    let c;
    if (Sn) {
        if (i === "sync") {
            const d = Xh();
            c = d.__watcherHandles || (d.__watcherHandles = [])
        } else if (!s) {
            const d = () => { }
                ;
            return d.stop = ht,
                d.resume = ht,
                d.pause = ht,
                d
        }
    }
    const u = Se;
    o.call = (d, _, y) => at(d, u, _, y);
    let h = !1;
    i === "post" ? o.scheduler = d => {
        Te(d, u && u.suspense)
    }
        : i !== "sync" && (h = !0,
            o.scheduler = (d, _) => {
                _ ? d() : Vi(d)
            }
        ),
        o.augmentJob = d => {
            t && (d.flags |= 4),
                h && (d.flags |= 2,
                    u && (d.id = u.uid,
                        d.i = u))
        }
        ;
    const m = eh(e, t, o);
    return Sn && (c ? c.push(m) : s && m()),
        m
}
function zh(e, t, n) {
    const l = this.proxy
        , a = fe(e) ? e.includes(".") ? Js(l, e) : () => l[e] : e.bind(l, l);
    let i;
    J(t) ? i = t : (i = t.handler,
        n = t);
    const r = tn(this)
        , o = zi(a, i.bind(l), n);
    return r(),
        o
}
function Js(e, t) {
    const n = t.split(".");
    return () => {
        let l = e;
        for (let a = 0; a < n.length && l; a++)
            l = l[n[a]];
        return l
    }
}
const Gh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qe(t)}Modifiers`] || e[`${It(t)}Modifiers`];
function Uh(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const l = e.vnode.props || ue;
    let a = n;
    const i = t.startsWith("update:")
        , r = i && Gh(l, t.slice(7));
    r && (r.trim && (a = n.map(u => fe(u) ? u.trim() : u)),
        r.number && (a = n.map(Bl)));
    let o, s = l[o = Da(t)] || l[o = Da(Qe(t))];
    !s && i && (s = l[o = Da(It(t))]),
        s && at(s, e, 6, a);
    const c = l[o + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[o])
            return;
        e.emitted[o] = !0,
            at(c, e, 6, a)
    }
}
function Qs(e, t, n = !1) {
    const l = t.emitsCache
        , a = l.get(e);
    if (a !== void 0)
        return a;
    const i = e.emits;
    let r = {}
        , o = !1;
    if (!J(e)) {
        const s = c => {
            const u = Qs(c, t, !0);
            u && (o = !0,
                Me(r, u))
        }
            ;
        !n && t.mixins.length && t.mixins.forEach(s),
            e.extends && s(e.extends),
            e.mixins && e.mixins.forEach(s)
    }
    return !i && !o ? (se(e) && l.set(e, null),
        null) : ($(i) ? i.forEach(s => r[s] = null) : Me(r, i),
            se(e) && l.set(e, r),
            r)
}
function ca(e, t) {
    return !e || !rl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
        ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, It(t)) || ie(e, t))
}
function Ba(e) {
    const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [i], slots: r, attrs: o, emit: s, render: c, renderCache: u, props: h, data: m, setupState: d, ctx: _, inheritAttrs: y } = e
        , C = kl(e);
    let S, v;
    try {
        if (n.shapeFlag & 4) {
            const b = a || l
                , D = b;
            S = We(c.call(D, b, u, h, d, m, _)),
                v = o
        } else {
            const b = t;
            S = We(b.length > 1 ? b(h, {
                attrs: o,
                slots: r,
                emit: s
            }) : b(h, null)),
                v = t.props ? o : jh(o)
        }
    } catch (b) {
        Gn.length = 0,
            Mn(b, e, 1),
            S = de(ve)
    }
    let g = S;
    if (v && y !== !1) {
        const b = Object.keys(v)
            , { shapeFlag: D } = g;
        b.length && D & 7 && (i && b.some(Mi) && (v = qh(v, i)),
            g = vt(g, v, !1, !0))
    }
    return n.dirs && (g = vt(g, null, !1, !0),
        g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
        n.transition && Dn(g, n.transition),
        S = g,
        kl(C),
        S
}
function Wh(e, t = !0) {
    let n;
    for (let l = 0; l < e.length; l++) {
        const a = e[l];
        if (en(a)) {
            if (a.type !== ve || a.children === "v-if") {
                if (n)
                    return;
                n = a
            }
        } else
            return
    }
    return n
}
const jh = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || rl(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
    , qh = (e, t) => {
        const n = {};
        for (const l in e)
            (!Mi(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
        return n
    }
    ;
function $h(e, t, n) {
    const { props: l, children: a, component: i } = e
        , { props: r, children: o, patchFlag: s } = t
        , c = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && s >= 0) {
        if (s & 1024)
            return !0;
        if (s & 16)
            return l ? Tr(l, r, c) : !!r;
        if (s & 8) {
            const u = t.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const m = u[h];
                if (r[m] !== l[m] && !ca(c, m))
                    return !0
            }
        }
    } else
        return (a || o) && (!o || !o.$stable) ? !0 : l === r ? !1 : l ? r ? Tr(l, r, c) : !0 : !!r;
    return !1
}
function Tr(e, t, n) {
    const l = Object.keys(t);
    if (l.length !== Object.keys(e).length)
        return !0;
    for (let a = 0; a < l.length; a++) {
        const i = l[a];
        if (t[i] !== e[i] && !ca(n, i))
            return !0
    }
    return !1
}
function ha({ vnode: e, parent: t }, n) {
    for (; t;) {
        const l = t.subTree;
        if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el),
            l === e)
            (e = t.vnode).el = n,
                t = t.parent;
        else
            break
    }
}
const El = e => e.__isSuspense;
let Za = 0;
const Kh = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, l, a, i, r, o, s, c) {
        if (e == null)
            Jh(t, n, l, a, i, r, o, s, c);
        else {
            if (i && i.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                    t.suspense.vnode = t,
                    t.el = e.el;
                return
            }
            Qh(e, t, n, l, a, r, o, s, c)
        }
    },
    hydrate: Yh,
    normalize: Zh
}
    , Gi = Kh;
function el(e, t) {
    const n = e.props && e.props[t];
    J(n) && n()
}
function Jh(e, t, n, l, a, i, r, o, s) {
    const { p: c, o: { createElement: u } } = s
        , h = u("div")
        , m = e.suspense = Ys(e, a, l, t, h, n, i, r, o, s);
    c(null, m.pendingBranch = e.ssContent, h, null, l, m, i, r),
        m.deps > 0 ? (el(e, "onPending"),
            el(e, "onFallback"),
            c(null, e.ssFallback, t, n, l, null, i, r),
            yn(m, e.ssFallback)) : m.resolve(!1, !0)
}
function Qh(e, t, n, l, a, i, r, o, { p: s, um: c, o: { createElement: u } }) {
    const h = t.suspense = e.suspense;
    h.vnode = t,
        t.el = e.el;
    const m = t.ssContent
        , d = t.ssFallback
        , { activeBranch: _, pendingBranch: y, isInFallback: C, isHydrating: S } = h;
    if (y)
        h.pendingBranch = m,
            tt(m, y) ? (s(y, m, h.hiddenContainer, null, a, h, i, r, o),
                h.deps <= 0 ? h.resolve() : C && (S || (s(_, d, n, l, a, null, i, r, o),
                    yn(h, d)))) : (h.pendingId = Za++,
                        S ? (h.isHydrating = !1,
                            h.activeBranch = y) : c(y, a, h),
                        h.deps = 0,
                        h.effects.length = 0,
                        h.hiddenContainer = u("div"),
                        C ? (s(null, m, h.hiddenContainer, null, a, h, i, r, o),
                            h.deps <= 0 ? h.resolve() : (s(_, d, n, l, a, null, i, r, o),
                                yn(h, d))) : _ && tt(m, _) ? (s(_, m, n, l, a, h, i, r, o),
                                    h.resolve(!0)) : (s(null, m, h.hiddenContainer, null, a, h, i, r, o),
                                        h.deps <= 0 && h.resolve()));
    else if (_ && tt(m, _))
        s(_, m, n, l, a, h, i, r, o),
            yn(h, m);
    else if (el(t, "onPending"),
        h.pendingBranch = m,
        m.shapeFlag & 512 ? h.pendingId = m.component.suspenseId : h.pendingId = Za++,
        s(null, m, h.hiddenContainer, null, a, h, i, r, o),
        h.deps <= 0)
        h.resolve();
    else {
        const { timeout: v, pendingId: g } = h;
        v > 0 ? setTimeout(() => {
            h.pendingId === g && h.fallback(d)
        }
            , v) : v === 0 && h.fallback(d)
    }
}
function Ys(e, t, n, l, a, i, r, o, s, c, u = !1) {
    const { p: h, m, um: d, n: _, o: { parentNode: y, remove: C } } = c;
    let S;
    const v = ed(e);
    v && t && t.pendingBranch && (S = t.pendingId,
        t.deps++);
    const g = e.props ? jo(e.props.timeout) : void 0
        , b = i
        , D = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: r,
            container: l,
            hiddenContainer: a,
            deps: 0,
            pendingId: Za++,
            timeout: typeof g == "number" ? g : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !u,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(w = !1, R = !1) {
                const { vnode: z, activeBranch: O, pendingBranch: x, pendingId: W, effects: A, parentComponent: j, container: Z } = D;
                let ne = !1;
                D.isHydrating ? D.isHydrating = !1 : w || (ne = O && x.transition && x.transition.mode === "out-in",
                    ne && (O.transition.afterLeave = () => {
                        W === D.pendingId && (m(x, Z, i === b ? _(O) : i, 0),
                            qa(A))
                    }
                    ),
                    O && (y(O.el) === Z && (i = _(O)),
                        d(O, j, D, !0)),
                    ne || m(x, Z, i, 0)),
                    yn(D, x),
                    D.pendingBranch = null,
                    D.isInFallback = !1;
                let N = D.parent
                    , Y = !1;
                for (; N;) {
                    if (N.pendingBranch) {
                        N.effects.push(...A),
                            Y = !0;
                        break
                    }
                    N = N.parent
                }
                !Y && !ne && qa(A),
                    D.effects = [],
                    v && t && t.pendingBranch && S === t.pendingId && (t.deps--,
                        t.deps === 0 && !R && t.resolve()),
                    el(z, "onResolve")
            },
            fallback(w) {
                if (!D.pendingBranch)
                    return;
                const { vnode: R, activeBranch: z, parentComponent: O, container: x, namespace: W } = D;
                el(R, "onFallback");
                const A = _(z)
                    , j = () => {
                        D.isInFallback && (h(null, w, x, A, O, null, W, o, s),
                            yn(D, w))
                    }
                    , Z = w.transition && w.transition.mode === "out-in";
                Z && (z.transition.afterLeave = j),
                    D.isInFallback = !0,
                    d(z, O, null, !0),
                    Z || j()
            },
            move(w, R, z) {
                D.activeBranch && m(D.activeBranch, w, R, z),
                    D.container = w
            },
            next() {
                return D.activeBranch && _(D.activeBranch)
            },
            registerDep(w, R, z) {
                const O = !!D.pendingBranch;
                O && D.deps++;
                const x = w.vnode.el;
                w.asyncDep.catch(W => {
                    Mn(W, w, 0)
                }
                ).then(W => {
                    if (w.isUnmounted || D.isUnmounted || D.pendingId !== w.suspenseId)
                        return;
                    w.asyncResolved = !0;
                    const { vnode: A } = w;
                    ni(w, W),
                        x && (A.el = x);
                    const j = !x && w.subTree.el;
                    R(w, A, y(x || w.subTree.el), x ? null : _(w.subTree), D, r, z),
                        j && C(j),
                        ha(w, A.el),
                        O && --D.deps === 0 && D.resolve()
                }
                )
            },
            unmount(w, R) {
                D.isUnmounted = !0,
                    D.activeBranch && d(D.activeBranch, n, w, R),
                    D.pendingBranch && d(D.pendingBranch, n, w, R)
            }
        };
    return D
}
function Yh(e, t, n, l, a, i, r, o, s) {
    const c = t.suspense = Ys(t, l, n, e.parentNode, document.createElement("div"), null, a, i, r, o, !0)
        , u = s(e, c.pendingBranch = t.ssContent, n, c, i, r);
    return c.deps === 0 && c.resolve(!1, !0),
        u
}
function Zh(e) {
    const { shapeFlag: t, children: n } = e
        , l = t & 32;
    e.ssContent = Pr(l ? n.default : n),
        e.ssFallback = l ? Pr(n.fallback) : de(ve)
}
function Pr(e) {
    let t;
    if (J(e)) {
        const n = vn && e._c;
        n && (e._d = !1,
            Ke()),
            e = e(),
            n && (e._d = !0,
                t = Ie,
                eu())
    }
    return $(e) && (e = Wh(e)),
        e = We(e),
        t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
        e
}
function Zs(e, t) {
    t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : qa(e)
}
function yn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: l } = e;
    let a = t.el;
    for (; !a && t.component;)
        t = t.component.subTree,
            a = t.el;
    n.el = a,
        l && l.subTree === n && (l.vnode.el = a,
            ha(l, a))
}
function ed(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Re = Symbol.for("v-fgt")
    , Zt = Symbol.for("v-txt")
    , ve = Symbol.for("v-cmt")
    , zn = Symbol.for("v-stc")
    , Gn = [];
let Ie = null;
function Ke(e = !1) {
    Gn.push(Ie = e ? null : [])
}
function eu() {
    Gn.pop(),
        Ie = Gn[Gn.length - 1] || null
}
let vn = 1;
function Lr(e, t = !1) {
    vn += e,
        e < 0 && Ie && t && (Ie.hasOnce = !0)
}
function tu(e) {
    return e.dynamicChildren = vn > 0 ? Ie || dn : null,
        eu(),
        vn > 0 && Ie && Ie.push(e),
        e
}
function Ui(e, t, n, l, a, i) {
    return tu(Wi(e, t, n, l, a, i, !0))
}
function Rt(e, t, n, l, a) {
    return tu(de(e, t, n, l, a, !0))
}
function en(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function tt(e, t) {
    return e.type === t.type && e.key === t.key
}
const nu = ({ key: e }) => e ?? null
    , Ml = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e),
        e != null ? fe(e) || be(e) || J(e) ? {
            i: Ce,
            r: e,
            k: t,
            f: !!n
        } : e : null);
function Wi(e, t = null, n = null, l = 0, a = null, i = e === Re ? 0 : 1, r = !1, o = !1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && nu(t),
        ref: t && Ml(t),
        scopeId: Ds,
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
        patchFlag: l,
        dynamicProps: a,
        dynamicChildren: null,
        appContext: null,
        ctx: Ce
    };
    return o ? (qi(s, n),
        i & 128 && e.normalize(s)) : n && (s.shapeFlag |= fe(n) ? 8 : 16),
        vn > 0 && !r && Ie && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && Ie.push(s),
        s
}
const de = td;
function td(e, t = null, n = null, l = 0, a = null, i = !1) {
    if ((!e || e === Rs) && (e = ve),
        en(e)) {
        const o = vt(e, t, !0);
        return n && qi(o, n),
            vn > 0 && !i && Ie && (o.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = o : Ie.push(o)),
            o.patchFlag = -2,
            o
    }
    if (hd(e) && (e = e.__vccOpts),
        t) {
        t = nd(t);
        let { class: o, style: s } = t;
        o && !fe(o) && (t.class = ta(o)),
            se(s) && (Fi(s) && !$(s) && (s = Me({}, s)),
                t.style = Bi(s))
    }
    const r = fe(e) ? 1 : El(e) ? 128 : vs(e) ? 64 : se(e) ? 4 : J(e) ? 2 : 0;
    return Wi(e, t, n, l, a, r, i, !0)
}
function nd(e) {
    return e ? Fi(e) || Is(e) ? Me({}, e) : e : null
}
function vt(e, t, n = !1, l = !1) {
    const { props: a, ref: i, patchFlag: r, children: o, transition: s } = e
        , c = t ? lu(a || {}, t) : a
        , u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: c,
            key: c && nu(c),
            ref: t && t.ref ? n && i ? $(i) ? i.concat(Ml(t)) : [i, Ml(t)] : Ml(t) : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: o,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Re ? r === -1 ? 16 : r | 16 : r,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: s,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && vt(e.ssContent),
            ssFallback: e.ssFallback && vt(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
    return s && l && Dn(u, s.clone(u)),
        u
}
function ji(e = " ", t = 0) {
    return de(Zt, null, e, t)
}
function ld(e, t) {
    const n = de(zn, null, e);
    return n.staticCount = t,
        n
}
function O_(e = "", t = !1) {
    return t ? (Ke(),
        Rt(ve, null, e)) : de(ve, null, e)
}
function We(e) {
    return e == null || typeof e == "boolean" ? de(ve) : $(e) ? de(Re, null, e.slice()) : en(e) ? Lt(e) : de(Zt, null, String(e))
}
function Lt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e)
}
function qi(e, t) {
    let n = 0;
    const { shapeFlag: l } = e;
    if (t == null)
        t = null;
    else if ($(t))
        n = 16;
    else if (typeof t == "object")
        if (l & 65) {
            const a = t.default;
            a && (a._c && (a._d = !1),
                qi(e, a()),
                a._c && (a._d = !0));
            return
        } else {
            n = 32;
            const a = t._;
            !a && !Is(t) ? t._ctx = Ce : a === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2,
                e.patchFlag |= 1024))
        }
    else
        J(t) ? (t = {
            default: t,
            _ctx: Ce
        },
            n = 32) : (t = String(t),
                l & 64 ? (n = 16,
                    t = [ji(t)]) : n = 8);
    e.children = t,
        e.shapeFlag |= n
}
function lu(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const l = e[n];
        for (const a in l)
            if (a === "class")
                t.class !== l.class && (t.class = ta([t.class, l.class]));
            else if (a === "style")
                t.style = Bi([t.style, l.style]);
            else if (rl(a)) {
                const i = t[a]
                    , r = l[a];
                r && i !== r && !($(i) && i.includes(r)) && (t[a] = i ? [].concat(i, r) : r)
            } else
                a !== "" && (t[a] = l[a])
    }
    return t
}
function Ee(e, t, n, l = null) {
    at(e, t, 7, [n, l])
}
const ad = Fs();
let id = 0;
function rd(e, t, n) {
    const l = e.type
        , a = (t ? t.appContext : e.appContext) || ad
        , i = {
            uid: id++,
            vnode: e,
            type: l,
            parent: t,
            appContext: a,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Qo(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(a.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ns(l, a),
            emitsOptions: Qs(l, a),
            emit: null,
            emitted: null,
            propsDefaults: ue,
            inheritAttrs: l.inheritAttrs,
            ctx: ue,
            data: ue,
            props: ue,
            attrs: ue,
            slots: ue,
            refs: ue,
            setupState: ue,
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
    },
        i.root = t ? t.root : i,
        i.emit = Uh.bind(null, i),
        e.ce && e.ce(i),
        i
}
let Se = null;
const cl = () => Se || Ce;
let Il, ei;
{
    const e = ea()
        , t = (n, l) => {
            let a;
            return (a = e[n]) || (a = e[n] = []),
                a.push(l),
                i => {
                    a.length > 1 ? a.forEach(r => r(i)) : a[0](i)
                }
        }
        ;
    Il = t("__VUE_INSTANCE_SETTERS__", n => Se = n),
        ei = t("__VUE_SSR_SETTERS__", n => Sn = n)
}
const tn = e => {
    const t = Se;
    return Il(e),
        e.scope.on(),
        () => {
            e.scope.off(),
                Il(t)
        }
}
    , ti = () => {
        Se && Se.scope.off(),
            Il(null)
    }
    ;
function au(e) {
    return e.vnode.shapeFlag & 4
}
let Sn = !1;
function od(e, t = !1, n = !1) {
    t && ei(t);
    const { props: l, children: a } = e.vnode
        , i = au(e);
    Bh(e, l, i, t),
        Oh(e, a, n);
    const r = i ? sd(e, t) : void 0;
    return t && ei(!1),
        r
}
function sd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
        e.proxy = new Proxy(e.ctx, Sh);
    const { setup: l } = n;
    if (l) {
        Xt();
        const a = e.setupContext = l.length > 1 ? cd(e) : null
            , i = tn(e)
            , r = ol(l, e, 0, [e.props, a])
            , o = Pi(r);
        if (Nt(),
            i(),
            (o || e.sp) && !kt(e) && Ei(e),
            o) {
            if (r.then(ti, ti),
                t)
                return r.then(s => {
                    ni(e, s)
                }
                ).catch(s => {
                    Mn(s, e, 0)
                }
                );
            e.asyncDep = r
        } else
            ni(e, r)
    } else
        iu(e)
}
function ni(e, t, n) {
    J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = gs(t)),
        iu(e)
}
function iu(e, t, n) {
    const l = e.type;
    e.render || (e.render = l.render || ht);
    {
        const a = tn(e);
        Xt();
        try {
            Ch(e)
        } finally {
            Nt(),
                a()
        }
    }
}
const ud = {
    get(e, t) {
        return Be(e, "get", ""),
            e[t]
    }
};
function cd(e) {
    const t = n => {
        e.exposed = n || {}
    }
        ;
    return {
        attrs: new Proxy(e.attrs, ud),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function da(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gs(Gc(e.exposed)), {
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Nn)
                return Nn[n](e)
        },
        has(t, n) {
            return n in t || n in Nn
        }
    })) : e.proxy
}
function li(e, t = !0) {
    return J(e) ? e.displayName || e.name : e.name || t && e.__name
}
function hd(e) {
    return J(e) && "__vccOpts" in e
}
const ye = (e, t) => Yc(e, t, Sn);
function He(e, t, n) {
    const l = arguments.length;
    return l === 2 ? se(t) && !$(t) ? en(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && en(n) && (n = [n]),
        de(e, t, n))
}
const dd = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ai;
const Br = typeof window < "u" && window.trustedTypes;
if (Br)
    try {
        ai = Br.createPolicy("vue", {
            createHTML: e => e
        })
    } catch { }
const ru = ai ? e => ai.createHTML(e) : e => e
    , md = "http://www.w3.org/2000/svg"
    , pd = "http://www.w3.org/1998/Math/MathML"
    , ft = typeof document < "u" ? document : null
    , Ar = ft && ft.createElement("template")
    , gd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        }
        ,
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        }
        ,
        createElement: (e, t, n, l) => {
            const a = t === "svg" ? ft.createElementNS(md, e) : t === "mathml" ? ft.createElementNS(pd, e) : n ? ft.createElement(e, {
                is: n
            }) : ft.createElement(e);
            return e === "select" && l && l.multiple != null && a.setAttribute("multiple", l.multiple),
                a
        }
        ,
        createText: e => ft.createTextNode(e),
        createComment: e => ft.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        }
        ,
        setElementText: (e, t) => {
            e.textContent = t
        }
        ,
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => ft.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, l, a, i) {
            const r = n ? n.previousSibling : t.lastChild;
            if (a && (a === i || a.nextSibling))
                for (; t.insertBefore(a.cloneNode(!0), n),
                    !(a === i || !(a = a.nextSibling));)
                    ;
            else {
                Ar.innerHTML = ru(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
                const o = Ar.content;
                if (l === "svg" || l === "mathml") {
                    const s = o.firstChild;
                    for (; s.firstChild;)
                        o.appendChild(s.firstChild);
                    o.removeChild(s)
                }
                t.insertBefore(o, n)
            }
            return [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }
    , Mt = "transition"
    , xn = "animation"
    , tl = Symbol("_vtc")
    , ou = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    }
    , fd = Me({}, Ss, ou)
    , yd = e => (e.displayName = "Transition",
        e.props = fd,
        e)
    , _d = yd((e, { slots: t }) => He(rh, bd(e), t))
    , Wt = (e, t = []) => {
        $(e) ? e.forEach(n => n(...t)) : e && e(...t)
    }
    , Rr = e => e ? $(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function bd(e) {
    const t = {};
    for (const A in e)
        A in ou || (t[A] = e[A]);
    if (e.css === !1)
        return t;
    const { name: n = "v", type: l, duration: a, enterFromClass: i = `${n}-enter-from`, enterActiveClass: r = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: s = i, appearActiveClass: c = r, appearToClass: u = o, leaveFromClass: h = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e
        , _ = Dd(a)
        , y = _ && _[0]
        , C = _ && _[1]
        , { onBeforeEnter: S, onEnter: v, onEnterCancelled: g, onLeave: b, onLeaveCancelled: D, onBeforeAppear: w = S, onAppear: R = v, onAppearCancelled: z = g } = t
        , O = (A, j, Z, ne) => {
            A._enterCancelled = ne,
                jt(A, j ? u : o),
                jt(A, j ? c : r),
                Z && Z()
        }
        , x = (A, j) => {
            A._isLeaving = !1,
                jt(A, h),
                jt(A, d),
                jt(A, m),
                j && j()
        }
        , W = A => (j, Z) => {
            const ne = A ? R : v
                , N = () => O(j, A, Z);
            Wt(ne, [j, N]),
                xr(() => {
                    jt(j, A ? s : i),
                        pt(j, A ? u : o),
                        Rr(ne) || Or(j, l, y, N)
                }
                )
        }
        ;
    return Me(t, {
        onBeforeEnter(A) {
            Wt(S, [A]),
                pt(A, i),
                pt(A, r)
        },
        onBeforeAppear(A) {
            Wt(w, [A]),
                pt(A, s),
                pt(A, c)
        },
        onEnter: W(!1),
        onAppear: W(!0),
        onLeave(A, j) {
            A._isLeaving = !0;
            const Z = () => x(A, j);
            pt(A, h),
                A._enterCancelled ? (pt(A, m),
                    Vr()) : (Vr(),
                        pt(A, m)),
                xr(() => {
                    A._isLeaving && (jt(A, h),
                        pt(A, d),
                        Rr(b) || Or(A, l, C, Z))
                }
                ),
                Wt(b, [A, Z])
        },
        onEnterCancelled(A) {
            O(A, !1, void 0, !0),
                Wt(g, [A])
        },
        onAppearCancelled(A) {
            O(A, !0, void 0, !0),
                Wt(z, [A])
        },
        onLeaveCancelled(A) {
            x(A),
                Wt(D, [A])
        }
    })
}
function Dd(e) {
    if (e == null)
        return null;
    if (se(e))
        return [Aa(e.enter), Aa(e.leave)];
    {
        const t = Aa(e);
        return [t, t]
    }
}
function Aa(e) {
    return jo(e)
}
function pt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
        (e[tl] || (e[tl] = new Set)).add(t)
}
function jt(e, t) {
    t.split(/\s+/).forEach(l => l && e.classList.remove(l));
    const n = e[tl];
    n && (n.delete(t),
        n.size || (e[tl] = void 0))
}
function xr(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    }
    )
}
let vd = 0;
function Or(e, t, n, l) {
    const a = e._endId = ++vd
        , i = () => {
            a === e._endId && l()
        }
        ;
    if (n != null)
        return setTimeout(i, n);
    const { type: r, timeout: o, propCount: s } = Sd(e, t);
    if (!r)
        return l();
    const c = r + "end";
    let u = 0;
    const h = () => {
        e.removeEventListener(c, m),
            i()
    }
        , m = d => {
            d.target === e && ++u >= s && h()
        }
        ;
    setTimeout(() => {
        u < s && h()
    }
        , o + 1),
        e.addEventListener(c, m)
}
function Sd(e, t) {
    const n = window.getComputedStyle(e)
        , l = _ => (n[_] || "").split(", ")
        , a = l(`${Mt}Delay`)
        , i = l(`${Mt}Duration`)
        , r = kr(a, i)
        , o = l(`${xn}Delay`)
        , s = l(`${xn}Duration`)
        , c = kr(o, s);
    let u = null
        , h = 0
        , m = 0;
    t === Mt ? r > 0 && (u = Mt,
        h = r,
        m = i.length) : t === xn ? c > 0 && (u = xn,
            h = c,
            m = s.length) : (h = Math.max(r, c),
                u = h > 0 ? r > c ? Mt : xn : null,
                m = u ? u === Mt ? i.length : s.length : 0);
    const d = u === Mt && /\b(transform|all)(,|$)/.test(l(`${Mt}Property`).toString());
    return {
        type: u,
        timeout: h,
        propCount: m,
        hasTransform: d
    }
}
function kr(e, t) {
    for (; e.length < t.length;)
        e = e.concat(e);
    return Math.max(...t.map((n, l) => Fr(n) + Fr(e[l])))
}
function Fr(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Vr() {
    return document.body.offsetHeight
}
function Cd(e, t, n) {
    const l = e[tl];
    l && (t = (t ? [t, ...l] : [...l]).join(" ")),
        t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Xl = Symbol("_vod")
    , su = Symbol("_vsh")
    , k_ = {
        beforeMount(e, { value: t }, { transition: n }) {
            e[Xl] = e.style.display === "none" ? "" : e.style.display,
                n && t ? n.beforeEnter(e) : On(e, t)
        },
        mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e)
        },
        updated(e, { value: t, oldValue: n }, { transition: l }) {
            !t != !n && (l ? t ? (l.beforeEnter(e),
                On(e, !0),
                l.enter(e)) : l.leave(e, () => {
                    On(e, !1)
                }
                ) : On(e, t))
        },
        beforeUnmount(e, { value: t }) {
            On(e, t)
        }
    };
function On(e, t) {
    e.style.display = t ? e[Xl] : "none",
        e[su] = !t
}
const Hd = Symbol("")
    , wd = /(^|;)\s*display\s*:/;
function Md(e, t, n) {
    const l = e.style
        , a = fe(n);
    let i = !1;
    if (n && !a) {
        if (t)
            if (fe(t))
                for (const r of t.split(";")) {
                    const o = r.slice(0, r.indexOf(":")).trim();
                    n[o] == null && Tl(l, o, "")
                }
            else
                for (const r in t)
                    n[r] == null && Tl(l, r, "");
        for (const r in n)
            r === "display" && (i = !0),
                Tl(l, r, n[r])
    } else if (a) {
        if (t !== n) {
            const r = l[Hd];
            r && (n += ";" + r),
                l.cssText = n,
                i = wd.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Xl in e && (e[Xl] = i ? l.display : "",
        e[su] && (l.display = "none"))
}
const Er = /\s*!important$/;
function Tl(e, t, n) {
    if ($(n))
        n.forEach(l => Tl(e, t, l));
    else if (n == null && (n = ""),
        t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const l = Td(e, t);
        Er.test(n) ? e.setProperty(It(l), n.replace(Er, ""), "important") : e[l] = n
    }
}
const Ir = ["Webkit", "Moz", "ms"]
    , Ra = {};
function Td(e, t) {
    const n = Ra[t];
    if (n)
        return n;
    let l = Qe(t);
    if (l !== "filter" && l in e)
        return Ra[t] = l;
    l = Zl(l);
    for (let a = 0; a < Ir.length; a++) {
        const i = Ir[a] + l;
        if (i in e)
            return Ra[t] = i
    }
    return t
}
const Xr = "http://www.w3.org/1999/xlink";
function Nr(e, t, n, l, a, i = Dc(t)) {
    l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xr, t.slice(6, t.length)) : e.setAttributeNS(Xr, t, n) : n == null || i && !qo(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : lt(n) ? String(n) : n)
}
function zr(e, t, n, l, a) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? ru(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value
            , s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (o !== s || !("_value" in e)) && (e.value = s),
            n == null && e.removeAttribute(t),
            e._value = n;
        return
    }
    let r = !1;
    if (n === "" || n == null) {
        const o = typeof e[t];
        o === "boolean" ? n = qo(n) : n == null && o === "string" ? (n = "",
            r = !0) : o === "number" && (n = 0,
                r = !0)
    }
    try {
        e[t] = n
    } catch { }
    r && e.removeAttribute(a || t)
}
function Kt(e, t, n, l) {
    e.addEventListener(t, n, l)
}
function Pd(e, t, n, l) {
    e.removeEventListener(t, n, l)
}
const Gr = Symbol("_vei");
function Ld(e, t, n, l, a = null) {
    const i = e[Gr] || (e[Gr] = {})
        , r = i[t];
    if (l && r)
        r.value = l;
    else {
        const [o, s] = Bd(t);
        if (l) {
            const c = i[t] = xd(l, a);
            Kt(e, o, c, s)
        } else
            r && (Pd(e, o, r, s),
                i[t] = void 0)
    }
}
const Ur = /(?:Once|Passive|Capture)$/;
function Bd(e) {
    let t;
    if (Ur.test(e)) {
        t = {};
        let l;
        for (; l = e.match(Ur);)
            e = e.slice(0, e.length - l[0].length),
                t[l[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t]
}
let xa = 0;
const Ad = Promise.resolve()
    , Rd = () => xa || (Ad.then(() => xa = 0),
        xa = Date.now());
function xd(e, t) {
    const n = l => {
        if (!l._vts)
            l._vts = Date.now();
        else if (l._vts <= n.attached)
            return;
        at(Od(l, n.value), t, 5, [l])
    }
        ;
    return n.value = e,
        n.attached = Rd(),
        n
}
function Od(e, t) {
    if ($(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
                e._stopped = !0
        }
            ,
            t.map(l => a => !a._stopped && l && l(a))
    } else
        return t
}
const Wr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
    , kd = (e, t, n, l, a, i) => {
        const r = a === "svg";
        t === "class" ? Cd(e, l, r) : t === "style" ? Md(e, n, l) : rl(t) ? Mi(t) || Ld(e, t, n, l, i) : (t[0] === "." ? (t = t.slice(1),
            !0) : t[0] === "^" ? (t = t.slice(1),
                !1) : Fd(e, t, l, r)) ? (zr(e, t, l),
                    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nr(e, t, l, r, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !fe(l)) ? zr(e, Qe(t), l, i, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l),
                        Nr(e, t, l, r))
    }
    ;
function Fd(e, t, n, l) {
    if (l)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Wr(t) && J(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const a = e.tagName;
        if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
            return !1
    }
    return Wr(t) && fe(n) ? !1 : t in e
}
const Nl = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return $(t) ? n => gn(t, n) : t
}
    ;
function Vd(e) {
    e.target.composing = !0
}
function jr(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
        t.dispatchEvent(new Event("input")))
}
const _n = Symbol("_assign")
    , F_ = {
        created(e, { modifiers: { lazy: t, trim: n, number: l } }, a) {
            e[_n] = Nl(a);
            const i = l || a.props && a.props.type === "number";
            Kt(e, t ? "change" : "input", r => {
                if (r.target.composing)
                    return;
                let o = e.value;
                n && (o = o.trim()),
                    i && (o = Bl(o)),
                    e[_n](o)
            }
            ),
                n && Kt(e, "change", () => {
                    e.value = e.value.trim()
                }
                ),
                t || (Kt(e, "compositionstart", Vd),
                    Kt(e, "compositionend", jr),
                    Kt(e, "change", jr))
        },
        mounted(e, { value: t }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: a, number: i } }, r) {
            if (e[_n] = Nl(r),
                e.composing)
                return;
            const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Bl(e.value) : e.value
                , s = t ?? "";
            o !== s && (document.activeElement === e && e.type !== "range" && (l && t === n || a && e.value.trim() === s) || (e.value = s))
        }
    }
    , V_ = {
        deep: !0,
        created(e, { value: t, modifiers: { number: n } }, l) {
            const a = Ql(t);
            Kt(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, r => r.selected).map(r => n ? Bl(zl(r)) : zl(r));
                e[_n](e.multiple ? a ? new Set(i) : i : i[0]),
                    e._assigning = !0,
                    zt(() => {
                        e._assigning = !1
                    }
                    )
            }
            ),
                e[_n] = Nl(l)
        },
        mounted(e, { value: t }) {
            qr(e, t)
        },
        beforeUpdate(e, t, n) {
            e[_n] = Nl(n)
        },
        updated(e, { value: t }) {
            e._assigning || qr(e, t)
        }
    };
function qr(e, t) {
    const n = e.multiple
        , l = $(t);
    if (!(n && !l && !Ql(t))) {
        for (let a = 0, i = e.options.length; a < i; a++) {
            const r = e.options[a]
                , o = zl(r);
            if (n)
                if (l) {
                    const s = typeof o;
                    s === "string" || s === "number" ? r.selected = t.some(c => String(c) === String(o)) : r.selected = Sc(t, o) > -1
                } else
                    r.selected = t.has(o);
            else if (na(zl(r), t)) {
                e.selectedIndex !== a && (e.selectedIndex = a);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function zl(e) {
    return "_value" in e ? e._value : e.value
}
const Ed = ["ctrl", "shift", "alt", "meta"]
    , Id = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Ed.some(n => e[`${n}Key`] && !t.includes(n))
    }
    , E_ = (e, t) => {
        const n = e._withMods || (e._withMods = {})
            , l = t.join(".");
        return n[l] || (n[l] = (a, ...i) => {
            for (let r = 0; r < t.length; r++) {
                const o = Id[t[r]];
                if (o && o(a, t))
                    return
            }
            return e(a, ...i)
        }
        )
    }
    , Xd = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    }
    , I_ = (e, t) => {
        const n = e._withKeys || (e._withKeys = {})
            , l = t.join(".");
        return n[l] || (n[l] = a => {
            if (!("key" in a))
                return;
            const i = It(a.key);
            if (t.some(r => r === i || Xd[r] === i))
                return e(a)
        }
        )
    }
    , uu = Me({
        patchProp: kd
    }, gd);
let Un, $r = !1;
function Nd() {
    return Un || (Un = Fh(uu))
}
function zd() {
    return Un = $r ? Un : Vh(uu),
        $r = !0,
        Un
}
const Gd = (...e) => {
    const t = Nd().createApp(...e)
        , { mount: n } = t;
    return t.mount = l => {
        const a = hu(l);
        if (!a)
            return;
        const i = t._component;
        !J(i) && !i.render && !i.template && (i.template = a.innerHTML),
            a.nodeType === 1 && (a.textContent = "");
        const r = n(a, !1, cu(a));
        return a instanceof Element && (a.removeAttribute("v-cloak"),
            a.setAttribute("data-v-app", "")),
            r
    }
        ,
        t
}
    , Ud = (...e) => {
        const t = zd().createApp(...e)
            , { mount: n } = t;
        return t.mount = l => {
            const a = hu(l);
            if (a)
                return n(a, !0, cu(a))
        }
            ,
            t
    }
    ;
function cu(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function hu(e) {
    return fe(e) ? document.querySelector(e) : e
}
const Wd = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
    , jd = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
    , qd = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function $d(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        Kd(e);
        return
    }
    return t
}
function Kd(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function nl(e, t = {}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const l = n.toLowerCase();
        if (l === "true")
            return !0;
        if (l === "false")
            return !1;
        if (l === "undefined")
            return;
        if (l === "null")
            return null;
        if (l === "nan")
            return Number.NaN;
        if (l === "infinity")
            return Number.POSITIVE_INFINITY;
        if (l === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!qd.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Wd.test(e) || jd.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, $d)
        }
        return JSON.parse(e)
    } catch (l) {
        if (t.strict)
            throw l;
        return e
    }
}
const Jd = /#/g
    , Qd = /&/g
    , Yd = /\//g
    , Zd = /=/g
    , $i = /\+/g
    , em = /%5e/gi
    , tm = /%60/gi
    , nm = /%7c/gi
    , lm = /%20/gi;
function am(e) {
    return encodeURI("" + e).replace(nm, "|")
}
function ii(e) {
    return am(typeof e == "string" ? e : JSON.stringify(e)).replace($i, "%2B").replace(lm, "+").replace(Jd, "%23").replace(Qd, "%26").replace(tm, "`").replace(em, "^").replace(Yd, "%2F")
}
function Oa(e) {
    return ii(e).replace(Zd, "%3D")
}
function Gl(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function im(e) {
    return Gl(e.replace($i, " "))
}
function rm(e) {
    return Gl(e.replace($i, " "))
}
function Ki(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const l = n.match(/([^=]+)=?(.*)/) || [];
        if (l.length < 2)
            continue;
        const a = im(l[1]);
        if (a === "__proto__" || a === "constructor")
            continue;
        const i = rm(l[2] || "");
        t[a] === void 0 ? t[a] = i : Array.isArray(t[a]) ? t[a].push(i) : t[a] = [t[a], i]
    }
    return t
}
function om(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
        t ? Array.isArray(t) ? t.map(n => `${Oa(e)}=${ii(n)}`).join("&") : `${Oa(e)}=${ii(t)}` : Oa(e)
}
function sm(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => om(t, e[t])).filter(Boolean).join("&")
}
const um = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
    , du = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
    , cm = /^([/\\]\s*){2,}[^/\\]/
    , hm = /^[\s\0]*(blob|data|javascript|vbscript):$/i
    , dm = /\/$|\/\?|\/#/
    , mm = /^\.?\//;
function dt(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
        t.strict ? um.test(e) : du.test(e) || (t.acceptRelative ? cm.test(e) : !1)
}
function pm(e) {
    return !!e && hm.test(e)
}
function ri(e = "", t) {
    return t ? dm.test(e) : e.endsWith("/")
}
function ma(e = "", t) {
    if (!t)
        return (ri(e) ? e.slice(0, -1) : e) || "/";
    if (!ri(e, !0))
        return e || "/";
    let n = e
        , l = "";
    const a = e.indexOf("#");
    a >= 0 && (n = e.slice(0, a),
        l = e.slice(a));
    const [i, ...r] = n.split("?");
    return ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") + (r.length > 0 ? `?${r.join("?")}` : "") + l
}
function Ul(e = "", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (ri(e, !0))
        return e || "/";
    let n = e
        , l = "";
    const a = e.indexOf("#");
    if (a >= 0 && (n = e.slice(0, a),
        l = e.slice(a),
        !n))
        return l;
    const [i, ...r] = n.split("?");
    return i + "/" + (r.length > 0 ? `?${r.join("?")}` : "") + l
}
function gm(e = "") {
    return e.startsWith("/")
}
function Kr(e = "") {
    return gm(e) ? e : "/" + e
}
function fm(e, t) {
    if (mu(t) || dt(e))
        return e;
    const n = ma(t);
    return e.startsWith(n) ? e : pa(n, e)
}
function Jr(e, t) {
    if (mu(t))
        return e;
    const n = ma(t);
    if (!e.startsWith(n))
        return e;
    const l = e.slice(n.length);
    return l[0] === "/" ? l : "/" + l
}
function Wl(e, t) {
    const n = fu(e)
        , l = {
            ...Ki(n.search),
            ...t
        };
    return n.search = sm(l),
        vm(n)
}
function mu(e) {
    return !e || e === "/"
}
function ym(e) {
    return e && e !== "/"
}
function pa(e, ...t) {
    let n = e || "";
    for (const l of t.filter(a => ym(a)))
        if (n) {
            const a = l.replace(mm, "");
            n = Ul(n) + a
        } else
            n = l;
    return n
}
function pu(...e) {
    var r, o, s, c;
    const t = /\/(?!\/)/
        , n = e.filter(Boolean)
        , l = [];
    let a = 0;
    for (const u of n)
        if (!(!u || u === "/")) {
            for (const [h, m] of u.split(t).entries())
                if (!(!m || m === ".")) {
                    if (m === "..") {
                        if (l.length === 1 && dt(l[0]))
                            continue;
                        l.pop(),
                            a--;
                        continue
                    }
                    if (h === 1 && ((r = l[l.length - 1]) != null && r.endsWith(":/"))) {
                        l[l.length - 1] += "/" + m;
                        continue
                    }
                    l.push(m),
                        a++
                }
        }
    let i = l.join("/");
    return a >= 0 ? (o = n[0]) != null && o.startsWith("/") && !i.startsWith("/") ? i = "/" + i : (s = n[0]) != null && s.startsWith("./") && !i.startsWith("./") && (i = "./" + i) : i = "../".repeat(-1 * a) + i,
        (c = n[n.length - 1]) != null && c.endsWith("/") && !i.endsWith("/") && (i += "/"),
        i
}
function _m(e) {
    return bm(e, "https://")
}
function bm(e, t) {
    let n = e.match(du);
    return n || (n = e.match(/^\/{2,}/)),
        n ? t + e.slice(n[0].length) : t + e
}
function Dm(e, t, n = {}) {
    return n.trailingSlash || (e = Ul(e),
        t = Ul(t)),
        n.leadingSlash || (e = Kr(e),
            t = Kr(t)),
        n.encoding || (e = Gl(e),
            t = Gl(t)),
        e === t
}
const gu = Symbol.for("ufo:protocolRelative");
function fu(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, h, m = ""] = n;
        return {
            protocol: h.toLowerCase(),
            pathname: m,
            href: h + m,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!dt(e, {
        acceptRelative: !0
    }))
        return Qr(e);
    const [, l = "", a, i = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, r = "", o = ""] = i.match(/([^#/?]*)(.*)?/) || [];
    l === "file:" && (o = o.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: s, search: c, hash: u } = Qr(o);
    return {
        protocol: l.toLowerCase(),
        auth: a ? a.slice(0, Math.max(0, a.length - 1)) : "",
        host: r,
        pathname: s,
        search: c,
        hash: u,
        [gu]: !l
    }
}
function Qr(e = "") {
    const [t = "", n = "", l = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: l
    }
}
function vm(e) {
    const t = e.pathname || ""
        , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
        , l = e.hash || ""
        , a = e.auth ? e.auth + "@" : ""
        , i = e.host || "";
    return (e.protocol || e[gu] ? (e.protocol || "") + "//" : "") + a + i + t + n + l
}
class Sm extends Error {
    constructor(t, n) {
        super(t, n),
            this.name = "FetchError",
            n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function Cm(e) {
    var s, c, u, h, m;
    const t = ((s = e.error) == null ? void 0 : s.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
        , n = ((u = e.request) == null ? void 0 : u.method) || ((h = e.options) == null ? void 0 : h.method) || "GET"
        , l = ((m = e.request) == null ? void 0 : m.url) || String(e.request) || "/"
        , a = `[${n}] ${JSON.stringify(l)}`
        , i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
        , r = `${a}: ${i}${t ? ` ${t}` : ""}`
        , o = new Sm(r, e.error ? {
            cause: e.error
        } : void 0);
    for (const d of ["request", "options", "response"])
        Object.defineProperty(o, d, {
            get() {
                return e[d]
            }
        });
    for (const [d, _] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(o, d, {
            get() {
                return e.response && e.response[_]
            }
        });
    return o
}
const Hm = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Yr(e = "GET") {
    return Hm.has(e.toUpperCase())
}
function wm(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Mm = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
    , Tm = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Pm(e = "") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Tm.test(t) ? "json" : Mm.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Lm(e, t, n, l) {
    const a = Bm((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, l);
    let i;
    return (n != null && n.query || n != null && n.params || t != null && t.params || t != null && t.query) && (i = {
        ...n == null ? void 0 : n.params,
        ...n == null ? void 0 : n.query,
        ...t == null ? void 0 : t.params,
        ...t == null ? void 0 : t.query
    }),
    {
        ...n,
        ...t,
        query: i,
        params: i,
        headers: a
    }
}
function Bm(e, t, n) {
    if (!t)
        return new n(e);
    const l = new n(t);
    if (e)
        for (const [a, i] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e))
            l.set(a, i);
    return l
}
async function vl(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t)
                await n(e);
        else
            await t(e)
}
const Am = new Set([408, 409, 425, 429, 500, 502, 503, 504])
    , Rm = new Set([101, 204, 205, 304]);
function yu(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: l = globalThis.AbortController } = e;
    async function a(o) {
        const s = o.error && o.error.name === "AbortError" && !o.options.timeout || !1;
        if (o.options.retry !== !1 && !s) {
            let u;
            typeof o.options.retry == "number" ? u = o.options.retry : u = Yr(o.options.method) ? 0 : 1;
            const h = o.response && o.response.status || 500;
            if (u > 0 && (Array.isArray(o.options.retryStatusCodes) ? o.options.retryStatusCodes.includes(h) : Am.has(h))) {
                const m = typeof o.options.retryDelay == "function" ? o.options.retryDelay(o) : o.options.retryDelay || 0;
                return m > 0 && await new Promise(d => setTimeout(d, m)),
                    i(o.request, {
                        ...o.options,
                        retry: u - 1
                    })
            }
        }
        const c = Cm(o);
        throw Error.captureStackTrace && Error.captureStackTrace(c, i),
        c
    }
    const i = async function (s, c = {}) {
        const u = {
            request: s,
            options: Lm(s, c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        u.options.method && (u.options.method = u.options.method.toUpperCase()),
            u.options.onRequest && await vl(u, u.options.onRequest),
            typeof u.request == "string" && (u.options.baseURL && (u.request = fm(u.request, u.options.baseURL)),
                u.options.query && (u.request = Wl(u.request, u.options.query),
                    delete u.options.query),
                "query" in u.options && delete u.options.query,
                "params" in u.options && delete u.options.params),
            u.options.body && Yr(u.options.method) && (wm(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
                u.options.headers = new n(u.options.headers || {}),
                u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
                u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half")));
        let h;
        if (!u.options.signal && u.options.timeout) {
            const d = new l;
            h = setTimeout(() => {
                const _ = new Error("[TimeoutError]: The operation was aborted due to timeout");
                _.name = "TimeoutError",
                    _.code = 23,
                    d.abort(_)
            }
                , u.options.timeout),
                u.options.signal = d.signal
        }
        try {
            u.response = await t(u.request, u.options)
        } catch (d) {
            return u.error = d,
                u.options.onRequestError && await vl(u, u.options.onRequestError),
                await a(u)
        } finally {
            h && clearTimeout(h)
        }
        if ((u.response.body || u.response._bodyInit) && !Rm.has(u.response.status) && u.options.method !== "HEAD") {
            const d = (u.options.parseResponse ? "json" : u.options.responseType) || Pm(u.response.headers.get("content-type") || "");
            switch (d) {
                case "json":
                    {
                        const _ = await u.response.text()
                            , y = u.options.parseResponse || nl;
                        u.response._data = y(_);
                        break
                    }
                case "stream":
                    {
                        u.response._data = u.response.body || u.response._bodyInit;
                        break
                    }
                default:
                    u.response._data = await u.response[d]()
            }
        }
        return u.options.onResponse && await vl(u, u.options.onResponse),
            !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await vl(u, u.options.onResponseError),
                await a(u)) : u.response
    }
        , r = async function (s, c) {
            return (await i(s, c))._data
        };
    return r.raw = i,
        r.native = (...o) => t(...o),
        r.create = (o = {}, s = {}) => yu({
            ...e,
            ...s,
            defaults: {
                ...e.defaults,
                ...s.defaults,
                ...o
            }
        }),
        r
}
const jl = function () {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
    , xm = jl.fetch ? (...e) => jl.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))
    , Om = jl.Headers
    , km = jl.AbortController
    , Fm = yu({
        fetch: xm,
        Headers: Om,
        AbortController: km
    })
    , Vm = Fm
    , Em = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    }
    , ql = Em().app
    , Im = () => ql.baseURL
    , Xm = () => ql.buildAssetsDir
    , Ji = (...e) => pu(_u(), Xm(), ...e)
    , _u = (...e) => {
        const t = ql.cdnURL || ql.baseURL;
        return e.length ? pu(t, ...e) : t
    }
    ;
globalThis.__buildAssetsURL = Ji,
    globalThis.__publicAssetsURL = _u;
globalThis.$fetch || (globalThis.$fetch = Vm.create({
    baseURL: Im()
}));
function oi(e, t = {}, n) {
    for (const l in e) {
        const a = e[l]
            , i = n ? `${n}:${l}` : l;
        typeof a == "object" && a !== null ? oi(a, t, i) : typeof a == "function" && (t[i] = a)
    }
    return t
}
const Nm = {
    run: e => e()
}
    , zm = () => Nm
    , bu = typeof console.createTask < "u" ? console.createTask : zm;
function Gm(e, t) {
    const n = t.shift()
        , l = bu(n);
    return e.reduce((a, i) => a.then(() => l.run(() => i(...t))), Promise.resolve())
}
function Um(e, t) {
    const n = t.shift()
        , l = bu(n);
    return Promise.all(e.map(a => l.run(() => a(...t))))
}
function ka(e, t) {
    for (const n of [...e])
        n(t)
}
class Wm {
    constructor() {
        this._hooks = {},
            this._before = void 0,
            this._after = void 0,
            this._deprecatedMessages = void 0,
            this._deprecatedHooks = {},
            this.hook = this.hook.bind(this),
            this.callHook = this.callHook.bind(this),
            this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, l = {}) {
        if (!t || typeof n != "function")
            return () => { }
                ;
        const a = t;
        let i;
        for (; this._deprecatedHooks[t];)
            i = this._deprecatedHooks[t],
                t = i.to;
        if (i && !l.allowDeprecated) {
            let r = i.message;
            r || (r = `${a} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")),
                this._deprecatedMessages || (this._deprecatedMessages = new Set),
                this._deprecatedMessages.has(r) || (console.warn(r),
                    this._deprecatedMessages.add(r))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch { }
        return this._hooks[t] = this._hooks[t] || [],
            this._hooks[t].push(n),
            () => {
                n && (this.removeHook(t, n),
                    n = void 0)
            }
    }
    hookOnce(t, n) {
        let l, a = (...i) => (typeof l == "function" && l(),
            l = void 0,
            a = void 0,
            n(...i));
        return l = this.hook(t, a),
            l
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const l = this._hooks[t].indexOf(n);
            l !== -1 && this._hooks[t].splice(l, 1),
                this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const l = this._hooks[t] || [];
        delete this._hooks[t];
        for (const a of l)
            this.hook(t, a)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = oi(t)
            , l = Object.keys(n).map(a => this.hook(a, n[a]));
        return () => {
            for (const a of l.splice(0, l.length))
                a()
        }
    }
    removeHooks(t) {
        const n = oi(t);
        for (const l in n)
            this.removeHook(l, n[l])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
            this.callHookWith(Gm, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
            this.callHookWith(Um, t, ...n)
    }
    callHookWith(t, n, ...l) {
        const a = this._before || this._after ? {
            name: n,
            args: l,
            context: {}
        } : void 0;
        this._before && ka(this._before, a);
        const i = t(n in this._hooks ? [...this._hooks[n]] : [], l);
        return i instanceof Promise ? i.finally(() => {
            this._after && a && ka(this._after, a)
        }
        ) : (this._after && a && ka(this._after, a),
            i)
    }
    beforeEach(t) {
        return this._before = this._before || [],
            this._before.push(t),
            () => {
                if (this._before !== void 0) {
                    const n = this._before.indexOf(t);
                    n !== -1 && this._before.splice(n, 1)
                }
            }
    }
    afterEach(t) {
        return this._after = this._after || [],
            this._after.push(t),
            () => {
                if (this._after !== void 0) {
                    const n = this._after.indexOf(t);
                    n !== -1 && this._after.splice(n, 1)
                }
            }
    }
}
function Du() {
    return new Wm
}
function jm(e = {}) {
    let t, n = !1;
    const l = r => {
        if (t && t !== r)
            throw new Error("Context conflict")
    }
        ;
    let a;
    if (e.asyncContext) {
        const r = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        r ? a = new r : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const i = () => {
        if (a) {
            const r = a.getStore();
            if (r !== void 0)
                return r
        }
        return t
    }
        ;
    return {
        use: () => {
            const r = i();
            if (r === void 0)
                throw new Error("Context is not available");
            return r
        }
        ,
        tryUse: () => i(),
        set: (r, o) => {
            o || l(r),
                t = r,
                n = !0
        }
        ,
        unset: () => {
            t = void 0,
                n = !1
        }
        ,
        call: (r, o) => {
            l(r),
                t = r;
            try {
                return a ? a.run(r, o) : o()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(r, o) {
            t = r;
            const s = () => {
                t = r
            }
                , c = () => t === r ? s : void 0;
            si.add(c);
            try {
                const u = a ? a.run(r, o) : o();
                return n || (t = void 0),
                    await u
            } finally {
                si.delete(c)
            }
        }
    }
}
function qm(e = {}) {
    const t = {};
    return {
        get(n, l = {}) {
            return t[n] || (t[n] = jm({
                ...e,
                ...l
            })),
                t[n]
        }
    }
}
const $l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
    , Zr = "__unctx__"
    , $m = $l[Zr] || ($l[Zr] = qm())
    , Km = (e, t = {}) => $m.get(e, t)
    , eo = "__unctx_async_handlers__"
    , si = $l[eo] || ($l[eo] = new Set);
function bn(e) {
    const t = [];
    for (const a of si) {
        const i = a();
        i && t.push(i)
    }
    const n = () => {
        for (const a of t)
            a()
    }
        ;
    let l = e();
    return l && typeof l == "object" && "catch" in l && (l = l.catch(a => {
        throw n(),
        a
    }
    )),
        [l, n]
}
const Jm = !1
    , ui = !1
    , Qm = !1
    , Ym = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: {
            visibility: !0
        }
    }
    , X_ = {
        value: null,
        errorValue: null,
        deep: !0
    }
    , Zm = null
    , ep = "#__nuxt"
    , vu = "nuxt-app"
    , to = 36e5
    , tp = "vite:preloadError";
function Su(e = vu) {
    return Km(e, {
        asyncContext: !1
    })
}
const np = "__nuxt_plugin";
function lp(e) {
    var a;
    let t = 0;
    const n = {
        _id: e.id || vu || "nuxt-app",
        _scope: Cc(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.16.1"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: bt({
            ...((a = e.ssrContext) == null ? void 0 : a.payload) || {},
            data: bt({}),
            state: St({}),
            once: new Set,
            _errors: bt({})
        }),
        static: {
            data: {}
        },
        runWithContext(i) {
            return n._scope.active && !la() ? n._scope.run(() => no(n, i)) : no(n, i)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => { }
                    ;
            t++;
            let i = !1;
            return () => {
                if (!i && (i = !0,
                    t--,
                    t === 0))
                    return n.isHydrating = !1,
                        n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: bt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const i = window.__NUXT__;
        if (i)
            for (const r in i)
                switch (r) {
                    case "data":
                    case "state":
                    case "_errors":
                        Object.assign(n.payload[r], i[r]);
                        break;
                    default:
                        n.payload[r] = i[r]
                }
    }
    n.hooks = Du(),
        n.hook = n.hooks.hook,
        n.callHook = n.hooks.callHook,
        n.provide = (i, r) => {
            const o = "$" + i;
            Sl(n, o, r),
                Sl(n.vueApp.config.globalProperties, o, r)
        }
        ,
        Sl(n.vueApp, "$nuxt", n),
        Sl(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener(tp, r => {
            n.callHook("app:chunkError", {
                error: r.payload
            }),
                (n.isHydrating || r.payload.message.includes("Unable to preload CSS")) && r.preventDefault()
        }
        ),
            window.useNuxtApp || (window.useNuxtApp = ge);
        const i = n.hook("app:error", (...r) => {
            console.error("[nuxt] error caught during app initialization", ...r)
        }
        );
        n.hook("app:mounted", i)
    }
    const l = n.payload.config;
    return n.provide("config", l),
        n
}
function ap(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function ip(e, t) {
    if (typeof t == "function") {
        const { provide: n } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const l in n)
                e.provide(l, n[l])
    }
}
async function rp(e, t) {
    const n = []
        , l = []
        , a = []
        , i = [];
    let r = 0;
    async function o(s) {
        var u;
        const c = ((u = s.dependsOn) == null ? void 0 : u.filter(h => t.some(m => m._name === h) && !n.includes(h))) ?? [];
        if (c.length > 0)
            l.push([new Set(c), s]);
        else {
            const h = ip(e, s).then(async () => {
                s._name && (n.push(s._name),
                    await Promise.all(l.map(async ([m, d]) => {
                        m.has(s._name) && (m.delete(s._name),
                            m.size === 0 && (r++,
                                await o(d)))
                    }
                    )))
            }
            );
            s.parallel ? a.push(h.catch(m => i.push(m))) : await h
        }
    }
    for (const s of t)
        ap(e, s);
    for (const s of t)
        await o(s);
    if (await Promise.all(a),
        r)
        for (let s = 0; s < r; s++)
            await Promise.all(a);
    if (i.length)
        throw i[0]
}
function Ne(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
        Object.assign(e.setup || (() => { }
        ), e, {
            [np]: !0,
            _name: t
        })
}
function no(e, t, n) {
    const l = () => t();
    return Su(e._id).set(e),
        e.vueApp.runWithContext(l)
}
function Cu(e) {
    var n;
    let t;
    return ua() && (t = (n = cl()) == null ? void 0 : n.appContext.app.$nuxt),
        t || (t = Su(e).tryUse()),
        t || null
}
function ge(e) {
    const t = Cu(e);
    if (!t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function Tn(e) {
    return ge().$config
}
function Sl(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
function op(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => wu(n, e)
    }
}
function Hu(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([l, a]) => [l, Hu(a)])) : new Map(Object.entries(e[n]));
    return t
}
function sp(e) {
    return op(Hu(e))
}
function wu(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const l = [];
    for (const [i, r] of lo(t.wildcard))
        (e === i || e.startsWith(i + "/")) && l.push(r);
    for (const [i, r] of lo(t.dynamic))
        if (e.startsWith(i + "/")) {
            const o = "/" + e.slice(i.length).split("/").splice(2).join("/");
            l.push(...wu(o, r))
        }
    const a = t.static.get(e);
    return a && l.push(a),
        l.filter(Boolean)
}
function lo(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}
function Fa(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function ci(e, t, n = ".", l) {
    if (!Fa(t))
        return ci(e, {}, n, l);
    const a = Object.assign({}, t);
    for (const i in e) {
        if (i === "__proto__" || i === "constructor")
            continue;
        const r = e[i];
        r != null && (l && l(a, i, r, n) || (Array.isArray(r) && Array.isArray(a[i]) ? a[i] = [...r, ...a[i]] : Fa(r) && Fa(a[i]) ? a[i] = ci(r, a[i], (n ? `${n}.` : "") + i.toString(), l) : a[i] = r))
    }
    return a
}
function up(e) {
    return (...t) => t.reduce((n, l) => ci(n, l, "", e), {})
}
const Mu = up();
function cp(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class hi extends Error {
    constructor(n, l = {}) {
        super(n, l);
        wt(this, "statusCode", 500);
        wt(this, "fatal", !1);
        wt(this, "unhandled", !1);
        wt(this, "statusMessage");
        wt(this, "data");
        wt(this, "cause");
        l.cause && !this.cause && (this.cause = l.cause)
    }
    toJSON() {
        const n = {
            message: this.message,
            statusCode: mi(this.statusCode, 500)
        };
        return this.statusMessage && (n.statusMessage = Tu(this.statusMessage)),
            this.data !== void 0 && (n.data = this.data),
            n
    }
}
wt(hi, "__h3_error__", !0);
function di(e) {
    if (typeof e == "string")
        return new hi(e);
    if (hp(e))
        return e;
    const t = new hi(e.message ?? e.statusMessage ?? "", {
        cause: e.cause || e
    });
    if (cp(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch { }
        }
    if (e.data && (t.data = e.data),
        e.statusCode ? t.statusCode = mi(e.statusCode, t.statusCode) : e.status && (t.statusCode = mi(e.status, t.statusCode)),
        e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage) {
        const n = t.statusMessage;
        Tu(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
        e.unhandled !== void 0 && (t.unhandled = e.unhandled),
        t
}
function hp(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const dp = /[^\u0009\u0020-\u007E]/g;
function Tu(e = "") {
    return e.replace(dp, "")
}
function mi(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
        e < 100 || e > 999) ? t : e
}
const Pu = Symbol("layout-meta")
    , hl = Symbol("route")
    , Fe = () => {
        var e;
        return (e = ge()) == null ? void 0 : e.$router
    }
    , Qi = () => ua() ? we(hl, ge()._route) : ge()._route;
const mp = () => {
    try {
        if (ge()._processingMiddleware)
            return !0
    } catch {
        return !1
    }
    return !1
}
    , pp = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : "path" in e ? pi(e) : Fe().resolve(e).href;
        if (t != null && t.open) {
            const { target: s = "_blank", windowFeatures: c = {} } = t.open
                , u = Object.entries(c).filter(([h, m]) => m !== void 0).map(([h, m]) => `${h.toLowerCase()}=${m}`).join(", ");
            return open(n, s, u),
                Promise.resolve()
        }
        const l = dt(n, {
            acceptRelative: !0
        })
            , a = (t == null ? void 0 : t.external) || l;
        if (a) {
            if (!(t != null && t.external))
                throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const { protocol: s } = new URL(n, window.location.href);
            if (s && pm(s))
                throw new Error(`Cannot navigate to a URL with '${s}' protocol.`)
        }
        const i = mp();
        if (!a && i) {
            if (t != null && t.replace) {
                if (typeof e == "string") {
                    const { pathname: s, search: c, hash: u } = fu(e);
                    return {
                        path: s,
                        ...c && {
                            query: Ki(c)
                        },
                        ...u && {
                            hash: u
                        },
                        replace: !0
                    }
                }
                return {
                    ...e,
                    replace: !0
                }
            }
            return e
        }
        const r = Fe()
            , o = ge();
        return a ? (o._scope.stop(),
            t != null && t.replace ? location.replace(n) : location.href = n,
            i ? o.isHydrating ? new Promise(() => { }
            ) : !1 : Promise.resolve()) : t != null && t.replace ? r.replace(e) : r.push(e)
    }
    ;
function pi(e) {
    return Wl(e.path || "", e.query || {}) + (e.hash || "")
}
const Lu = "__nuxt_error"
    , ga = () => fs(ge().payload, "error")
    , hn = e => {
        const t = fa(e);
        try {
            const n = ge()
                , l = ga();
            n.hooks.callHook("app:error", t),
                l.value || (l.value = t)
        } catch {
            throw t
        }
        return t
    }
    , gp = async (e = {}) => {
        const t = ge()
            , n = ga();
        t.callHook("app:error:cleared", e),
            e.redirect && await Fe().replace(e.redirect),
            n.value = Zm
    }
    , fp = e => !!e && typeof e == "object" && Lu in e
    , fa = e => {
        const t = di(e);
        return Object.defineProperty(t, Lu, {
            value: !0,
            configurable: !1,
            writable: !1
        }),
            t
    }
    ;
function ao(e) {
    const t = _p(e)
        , n = new ArrayBuffer(t.length)
        , l = new DataView(n);
    for (let a = 0; a < n.byteLength; a++)
        l.setUint8(a, t.charCodeAt(a));
    return n
}
const yp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function _p(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = ""
        , n = 0
        , l = 0;
    for (let a = 0; a < e.length; a++)
        n <<= 6,
            n |= yp.indexOf(e[a]),
            l += 6,
            l === 24 && (t += String.fromCharCode((n & 16711680) >> 16),
                t += String.fromCharCode((n & 65280) >> 8),
                t += String.fromCharCode(n & 255),
                n = l = 0);
    return l === 12 ? (n >>= 4,
        t += String.fromCharCode(n)) : l === 18 && (n >>= 2,
            t += String.fromCharCode((n & 65280) >> 8),
            t += String.fromCharCode(n & 255)),
        t
}
const bp = -1
    , Dp = -2
    , vp = -3
    , Sp = -4
    , Cp = -5
    , Hp = -6;
function wp(e, t) {
    return Mp(JSON.parse(e), t)
}
function Mp(e, t) {
    if (typeof e == "number")
        return a(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
        , l = Array(n.length);
    function a(i, r = !1) {
        if (i === bp)
            return;
        if (i === vp)
            return NaN;
        if (i === Sp)
            return 1 / 0;
        if (i === Cp)
            return -1 / 0;
        if (i === Hp)
            return -0;
        if (r)
            throw new Error("Invalid input");
        if (i in l)
            return l[i];
        const o = n[i];
        if (!o || typeof o != "object")
            l[i] = o;
        else if (Array.isArray(o))
            if (typeof o[0] == "string") {
                const s = o[0]
                    , c = t == null ? void 0 : t[s];
                if (c)
                    return l[i] = c(a(o[1]));
                switch (s) {
                    case "Date":
                        l[i] = new Date(o[1]);
                        break;
                    case "Set":
                        const u = new Set;
                        l[i] = u;
                        for (let d = 1; d < o.length; d += 1)
                            u.add(a(o[d]));
                        break;
                    case "Map":
                        const h = new Map;
                        l[i] = h;
                        for (let d = 1; d < o.length; d += 2)
                            h.set(a(o[d]), a(o[d + 1]));
                        break;
                    case "RegExp":
                        l[i] = new RegExp(o[1], o[2]);
                        break;
                    case "Object":
                        l[i] = Object(o[1]);
                        break;
                    case "BigInt":
                        l[i] = BigInt(o[1]);
                        break;
                    case "null":
                        const m = Object.create(null);
                        l[i] = m;
                        for (let d = 1; d < o.length; d += 2)
                            m[o[d]] = a(o[d + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                        {
                            const d = globalThis[s]
                                , _ = o[1]
                                , y = ao(_)
                                , C = new d(y);
                            l[i] = C;
                            break
                        }
                    case "ArrayBuffer":
                        {
                            const d = o[1]
                                , _ = ao(d);
                            l[i] = _;
                            break
                        }
                    default:
                        throw new Error(`Unknown type ${s}`)
                }
            } else {
                const s = new Array(o.length);
                l[i] = s;
                for (let c = 0; c < o.length; c += 1) {
                    const u = o[c];
                    u !== Dp && (s[c] = a(u))
                }
            }
        else {
            const s = {};
            l[i] = s;
            for (const c in o) {
                const u = o[c];
                s[c] = a(u)
            }
        }
        return l[i]
    }
    return a(0)
}
const Tp = new Set(["link", "style", "script", "noscript"])
    , Pp = new Set(["title", "titleTemplate", "script", "style", "noscript"])
    , io = new Set(["base", "meta", "link", "style", "script", "noscript"])
    , Lp = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
    , Bp = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
    , Ap = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"])
    , Rp = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
    , Yi = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"])
    , ll = {
        META: new Set(["twitter"]),
        OG: new Set(["og", "book", "article", "profile", "fb"]),
        MEDIA: new Set(["ogImage", "ogVideo", "ogAudio", "twitterImage"]),
        HTTP_EQUIV: new Set(["contentType", "defaultStyle", "xUaCompatible"])
    }
    , xp = {
        articleExpirationTime: "article:expiration_time",
        articleModifiedTime: "article:modified_time",
        articlePublishedTime: "article:published_time",
        bookReleaseDate: "book:release_date",
        fbAppId: "fb:app_id",
        ogAudioSecureUrl: "og:audio:secure_url",
        ogAudioUrl: "og:audio",
        ogImageSecureUrl: "og:image:secure_url",
        ogImageUrl: "og:image",
        ogSiteName: "og:site_name",
        ogVideoSecureUrl: "og:video:secure_url",
        ogVideoUrl: "og:video",
        profileFirstName: "profile:first_name",
        profileLastName: "profile:last_name",
        profileUsername: "profile:username",
        msapplicationConfig: "msapplication-Config",
        msapplicationTileColor: "msapplication-TileColor",
        msapplicationTileImage: "msapplication-TileImage"
    }
    , Bu = {
        appleItunesApp: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({ key: e, value: t }) => `${Dt(e)}=${t}`
            }
        },
        refresh: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: ";",
                resolve: ({ key: e, value: t }) => e === "seconds" ? `${t}` : void 0
            }
        },
        robots: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({ key: e, value: t }) => typeof t == "boolean" ? Dt(e) : `${Dt(e)}:${t}`
            }
        },
        contentSecurityPolicy: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: "; ",
                resolve: ({ key: e, value: t }) => `${Dt(e)} ${t}`
            }
        },
        charset: {}
    };
function Dt(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
        , n = t.indexOf("-");
    return n === -1 ? t : ll.META.has(t.slice(0, n)) || ll.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function Au(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t))
}
function gi(e) {
    return Array.isArray(e) ? e.map(gi) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [Dt(t), gi(n)]))
}
function Ru(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: l = "", wrapValue: a, resolve: i } = t;
    return Object.entries(e).map(([r, o]) => {
        if (i) {
            const c = i({
                key: r,
                value: o
            });
            if (c !== void 0)
                return c
        }
        const s = typeof o == "object" ? Ru(o, t) : typeof o == "number" ? o.toString() : typeof o == "string" && a ? `${a}${o.replace(new RegExp(a, "g"), `\\${a}`)}${a}` : o;
        return `${r}${l}${s}`
    }
    ).join(n)
}
function ro(e, t) {
    const n = Au(t)
        , l = Dt(e)
        , a = xu(l);
    if (!Yi.has(l))
        return [{
            [a]: l,
            ...n
        }];
    const i = Object.fromEntries(Object.entries(n).map(([r, o]) => [`${e}${r === "url" ? "" : `${r[0].toUpperCase()}${r.slice(1)}`}`, o]));
    return Kl(i || {}).sort((r, o) => {
        var s, c;
        return (((s = r[a]) == null ? void 0 : s.length) || 0) - (((c = o[a]) == null ? void 0 : c.length) || 0)
    }
    )
}
function xu(e) {
    var l;
    if (((l = Bu[e]) == null ? void 0 : l.metaKey) === "http-equiv" || ll.HTTP_EQUIV.has(e))
        return "http-equiv";
    const t = Dt(e)
        , n = t.indexOf(":");
    return n === -1 ? "name" : ll.OG.has(t.slice(0, n)) ? "property" : "name"
}
function Op(e) {
    return xp[e] || Dt(e)
}
function kp(e, t) {
    var n;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Ru(gi(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve: ({ value: l, key: a }) => l === null ? "" : typeof l == "boolean" ? a : void 0,
        ...(n = Bu[t]) == null ? void 0 : n.unpack
    })
}
function Kl(e) {
    const t = []
        , n = {};
    for (const [a, i] of Object.entries(e)) {
        if (Array.isArray(i)) {
            if (a === "themeColor") {
                i.forEach(r => {
                    typeof r == "object" && r !== null && t.push({
                        name: "theme-color",
                        ...r
                    })
                }
                );
                continue
            }
            for (const r of i)
                if (typeof r == "object" && r !== null) {
                    const o = []
                        , s = [];
                    for (const [c, u] of Object.entries(r)) {
                        const h = `${a}${c === "url" ? "" : `:${c}`}`
                            , m = Kl({
                                [h]: u
                            });
                        (c === "url" ? o : s).push(...m)
                    }
                    t.push(...o, ...s)
                } else
                    t.push(...typeof r == "string" ? Kl({
                        [a]: r
                    }) : ro(a, r));
            continue
        }
        if (typeof i == "object" && i)
            if (ll.MEDIA.has(a)) {
                const r = a.startsWith("twitter") ? "twitter" : "og"
                    , o = a.replace(/^(og|twitter)/, "").toLowerCase()
                    , s = r === "twitter" ? "name" : "property";
                i.url && t.push({
                    [s]: `${r}:${o}`,
                    content: i.url
                }),
                    i.secureUrl && t.push({
                        [s]: `${r}:${o}:secure_url`,
                        content: i.secureUrl
                    });
                for (const [c, u] of Object.entries(i))
                    c !== "url" && c !== "secureUrl" && t.push({
                        [s]: `${r}:${o}:${c}`,
                        content: u
                    })
            } else
                Yi.has(Dt(a)) ? t.push(...ro(a, i)) : n[a] = Au(i);
        else
            n[a] = i
    }
    const l = Object.entries(n).map(([a, i]) => {
        if (a === "charset")
            return {
                charset: i === null ? "_null" : i
            };
        const r = xu(a)
            , o = Op(a)
            , s = i === null ? "_null" : typeof i == "object" ? kp(i, a) : typeof i == "number" ? i.toString() : i;
        return r === "http-equiv" ? {
            "http-equiv": o,
            content: s
        } : {
            [r]: o,
            content: s
        }
    }
    );
    return [...t, ...l].map(a => "content" in a && a.content === "_null" ? {
        ...a,
        content: null
    } : a)
}
const Fp = {
    key: "flatMeta",
    hooks: {
        "entries:normalize": e => {
            const t = [];
            e.tags = e.tags.map(n => n.tag !== "_flatMeta" ? n : (t.push(Kl(n.props).map(l => ({
                ...n,
                tag: "meta",
                props: l
            }))),
                !1)).filter(Boolean).concat(...t)
        }
    }
}
    , Vp = ["name", "property", "http-equiv"];
function Ou(e) {
    const t = e.split(":")[1];
    return Yi.has(t)
}
function fi(e) {
    const { props: t, tag: n } = e;
    if (Bp.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    if (e.tag === "meta") {
        for (const l of Vp)
            if (t[l] !== void 0)
                return `${n}:${t[l]}`
    }
    if (e.key)
        return `${n}:key:${e.key}`;
    if (t.id)
        return `${n}:id:${t.id}`;
    if (Pp.has(n)) {
        const l = e.textContent || e.innerHTML;
        if (l)
            return `${n}:content:${l}`
    }
}
function oo(e) {
    const t = e._h || e._d;
    if (t)
        return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([l, a]) => `${l}:${String(a)}`).join(",")}`
}
function Jl(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let a;
    if (t && (a = t(n, e)),
        Array.isArray(a))
        return a.map(i => Jl(i, t));
    if ((a == null ? void 0 : a.constructor) === Object) {
        const i = {};
        for (const r of Object.keys(a))
            i[r] = Jl(a[r], t, r);
        return i
    }
    return a
}
function Ep(e, t) {
    const n = e === "style" ? new Map : new Set;
    function l(a) {
        const i = a.trim();
        if (i)
            if (e === "style") {
                const [r, ...o] = i.split(":").map(s => s.trim());
                r && o.length && n.set(r, o.join(":"))
            } else
                i.split(" ").filter(Boolean).forEach(r => n.add(r))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(l) : l(t) : Array.isArray(t) ? t.forEach(a => l(a)) : t && typeof t == "object" && Object.entries(t).forEach(([a, i]) => {
        i && i !== "false" && (e === "style" ? n.set(a.trim(), i) : l(a))
    }
    ),
        n
}
function ku(e, t) {
    return e.props = e.props || {},
        t && Object.entries(t).forEach(([n, l]) => {
            if (l === null) {
                e.props[n] = null;
                return
            }
            if (n === "class" || n === "style") {
                e.props[n] = Ep(n, l);
                return
            }
            if (Ap.has(n)) {
                if (["textContent", "innerHTML"].includes(n) && typeof l == "object") {
                    let r = t.type;
                    if (t.type || (r = "application/json"),
                        !(r != null && r.endsWith("json")) && r !== "speculationrules")
                        return;
                    t.type = r,
                        e.props.type = r,
                        e[n] = JSON.stringify(l)
                } else
                    e[n] = l;
                return
            }
            const a = String(l)
                , i = n.startsWith("data-");
            a === "true" || a === "" ? e.props[n] = i ? a : !0 : !l && i && a === "false" ? e.props[n] = "false" : l !== void 0 && (e.props[n] = l)
        }
        ),
        e
}
function Ip(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }
        , l = ku({
            tag: e,
            props: {}
        }, n);
    return l.key && Tp.has(l.tag) && (l.props["data-hid"] = l._h = l.key),
        l.tag === "script" && typeof l.innerHTML == "object" && (l.innerHTML = JSON.stringify(l.innerHTML),
            l.props.type = l.props.type || "application/json"),
        Array.isArray(l.props.content) ? l.props.content.map(a => ({
            ...l,
            props: {
                ...l.props,
                content: a
            }
        })) : l
}
function Xp(e, t) {
    if (!e)
        return [];
    typeof e == "function" && (e = e());
    const n = (a, i) => {
        for (let r = 0; r < t.length; r++)
            i = t[r](a, i);
        return i
    }
        ;
    e = n(void 0, e);
    const l = [];
    return e = Jl(e, n),
        Object.entries(e || {}).forEach(([a, i]) => {
            if (i !== void 0)
                for (const r of Array.isArray(i) ? i : [i])
                    l.push(Ip(a, r))
        }
        ),
        l.flat()
}
const yi = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w
    , so = {
        base: -10,
        title: 10
    }
    , Np = {
        critical: -8,
        high: -1,
        low: 2
    }
    , uo = {
        meta: {
            "content-security-policy": -30,
            charset: -20,
            viewport: -15
        },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: {
            async: 30,
            defer: 80,
            sync: 50
        },
        style: {
            imported: 40,
            sync: 60
        }
    }
    , zp = /@import/
    , kn = e => e === "" || e === !0;
function Gp(e, t) {
    var i;
    if (typeof t.tagPriority == "number")
        return t.tagPriority;
    let n = 100;
    const l = Np[t.tagPriority] || 0
        , a = e.resolvedOptions.disableCapoSorting ? {
            link: {},
            script: {},
            style: {}
        } : uo;
    if (t.tag in so)
        n = so[t.tag];
    else if (t.tag === "meta") {
        const r = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        r && (n = uo.meta[r])
    } else
        t.tag === "link" && t.props.rel ? n = a.link[t.props.rel] : t.tag === "script" ? kn(t.props.async) ? n = a.script.async : t.props.src && !kn(t.props.defer) && !kn(t.props.async) && t.props.type !== "module" && !((i = t.props.type) != null && i.endsWith("json")) ? n = a.script.sync : kn(t.props.defer) && t.props.src && !kn(t.props.async) && (n = a.script.defer) : t.tag === "style" && (n = t.innerHTML && zp.test(t.innerHTML) ? a.style.imported : a.style.sync);
    return (n || 100) + l
}
function co(e, t) {
    const n = typeof t == "function" ? t(e) : t
        , l = n.key || String(e.plugins.size + 1);
    e.plugins.get(l) || (e.plugins.set(l, n),
        e.hooks.addHooks(n.hooks || {}))
}
function Up(e = {}) {
    var o;
    const t = Du();
    t.addHooks(e.hooks || {});
    const n = !e.document
        , l = new Map
        , a = new Map
        , i = []
        , r = {
            _entryCount: 1,
            plugins: a,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: n,
            entries: l,
            headEntries() {
                return [...l.values()]
            },
            use: s => co(r, s),
            push(s, c) {
                const u = {
                    ...c || {}
                };
                delete u.head;
                const h = u._index ?? r._entryCount++
                    , m = {
                        _i: h,
                        input: s,
                        options: u
                    }
                    , d = {
                        _poll(_ = !1) {
                            r.dirty = !0,
                                !_ && i.push(h),
                                t.callHook("entries:updated", r)
                        },
                        dispose() {
                            l.delete(h) && d._poll(!0)
                        },
                        patch(_) {
                            (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (m.input = _,
                                l.set(h, m),
                                d._poll())
                        }
                    };
                return d.patch(s),
                    d
            },
            async resolveTags() {
                var d;
                const s = {
                    tagMap: new Map,
                    tags: [],
                    entries: [...r.entries.values()]
                };
                for (await t.callHook("entries:resolve", s); i.length;) {
                    const _ = i.shift()
                        , y = l.get(_);
                    if (y) {
                        const C = {
                            tags: Xp(y.input, e.propResolvers || []).map(S => Object.assign(S, y.options)),
                            entry: y
                        };
                        await t.callHook("entries:normalize", C),
                            y._tags = C.tags.map((S, v) => (S._w = Gp(r, S),
                                S._p = (y._i << 10) + v,
                                S._d = fi(S),
                                S))
                    }
                }
                let c = !1;
                s.entries.flatMap(_ => (_._tags || []).map(y => ({
                    ...y,
                    props: {
                        ...y.props
                    }
                }))).sort(yi).reduce((_, y) => {
                    const C = String(y._d || y._p);
                    if (!_.has(C))
                        return _.set(C, y);
                    const S = _.get(C);
                    if (((y == null ? void 0 : y.tagDuplicateStrategy) || (Rp.has(y.tag) ? "merge" : null) || (y.key && y.key === S.key ? "merge" : null)) === "merge") {
                        const g = {
                            ...S.props
                        };
                        Object.entries(y.props).forEach(([b, D]) => g[b] = b === "style" ? new Map([...S.props.style || new Map, ...D]) : b === "class" ? new Set([...S.props.class || new Set, ...D]) : D),
                            _.set(C, {
                                ...y,
                                props: g
                            })
                    } else
                        y._p >> 10 === S._p >> 10 && Ou(y._d) ? (_.set(C, Object.assign([...Array.isArray(S) ? S : [S], y], y)),
                            c = !0) : (y._w === S._w ? y._p > S._p : (y == null ? void 0 : y._w) < (S == null ? void 0 : S._w)) && _.set(C, y);
                    return _
                }
                    , s.tagMap);
                const u = s.tagMap.get("title")
                    , h = s.tagMap.get("titleTemplate");
                if (r._title = u == null ? void 0 : u.textContent,
                    h) {
                    const _ = h == null ? void 0 : h.textContent;
                    if (r._titleTemplate = typeof _ == "string" ? _ : void 0,
                        _) {
                        let y = typeof _ == "function" ? _(u == null ? void 0 : u.textContent) : _;
                        typeof y == "string" && !r.plugins.has("template-params") && (y = y.replace("%s", (u == null ? void 0 : u.textContent) || "")),
                            u ? y === null ? s.tagMap.delete("title") : s.tagMap.set("title", {
                                ...u,
                                textContent: y
                            }) : (h.tag = "title",
                                h.textContent = y)
                    }
                }
                s.tags = Array.from(s.tagMap.values()),
                    c && (s.tags = s.tags.flat().sort(yi)),
                    await t.callHook("tags:beforeResolve", s),
                    await t.callHook("tags:resolve", s),
                    await t.callHook("tags:afterResolve", s);
                const m = [];
                for (const _ of s.tags) {
                    const { innerHTML: y, tag: C, props: S } = _;
                    if (Lp.has(C) && !(Object.keys(S).length === 0 && !_.innerHTML && !_.textContent) && !(C === "meta" && !S.content && !S["http-equiv"] && !S.charset)) {
                        if (C === "script" && y) {
                            if ((d = S.type) != null && d.endsWith("json")) {
                                const v = typeof y == "string" ? y : JSON.stringify(y);
                                _.innerHTML = v.replace(/</g, "\\u003C")
                            } else
                                typeof y == "string" && (_.innerHTML = y.replace(new RegExp(`</${C}`, "g"), `<\\/${C}`));
                            _._d = fi(_)
                        }
                        m.push(_)
                    }
                }
                return m
            }
        };
    return ((e == null ? void 0 : e.plugins) || []).forEach(s => co(r, s)),
        r.hooks.callHook("init", r),
        (o = e.init) == null || o.forEach(s => s && r.push(s)),
        r
}
const Bt = "%separator"
    , Wp = new RegExp(`${Bt}(?:\\s*${Bt})*`, "g");
function jp(e, t, n = !1) {
    var a;
    let l;
    if (t === "s" || t === "pageTitle")
        l = e.pageTitle;
    else if (t.includes(".")) {
        const i = t.indexOf(".");
        l = (a = e[t.substring(0, i)]) == null ? void 0 : a[t.substring(i + 1)]
    } else
        l = e[t];
    if (l !== void 0)
        return n ? (l || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : l || ""
}
function Cl(e, t, n, l = !1) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    let a = e;
    try {
        a = decodeURI(e)
    } catch { }
    const i = a.match(/%\w+(?:\.\w+)?/g);
    if (!i)
        return e;
    const r = e.includes(Bt);
    return e = e.replace(/%\w+(?:\.\w+)?/g, o => {
        if (o === Bt || !i.includes(o))
            return o;
        const s = jp(t, o.slice(1), l);
        return s !== void 0 ? s : o
    }
    ).trim(),
        r && (e.endsWith(Bt) && (e = e.slice(0, -Bt.length)),
            e.startsWith(Bt) && (e = e.slice(Bt.length)),
            e = e.replace(Wp, n || "").trim()),
        e
}
const ho = e => e.includes(":key") ? e : e.split(":").join(":key:")
    , qp = {
        key: "aliasSorting",
        hooks: {
            "tags:resolve": e => {
                let t = !1;
                for (const n of e.tags) {
                    const l = n.tagPriority;
                    if (!l)
                        continue;
                    const a = String(l);
                    if (a.startsWith("before:")) {
                        const i = ho(a.slice(7))
                            , r = e.tagMap.get(i);
                        r && (typeof r.tagPriority == "number" && (n.tagPriority = r.tagPriority),
                            n._p = r._p - 1,
                            t = !0)
                    } else if (a.startsWith("after:")) {
                        const i = ho(a.slice(6))
                            , r = e.tagMap.get(i);
                        r && (typeof r.tagPriority == "number" && (n.tagPriority = r.tagPriority),
                            n._p = r._p + 1,
                            t = !0)
                    }
                }
                t && (e.tags = e.tags.sort(yi))
            }
        }
    }
    , $p = {
        key: "deprecations",
        hooks: {
            "entries:normalize": ({ tags: e }) => {
                for (const t of e)
                    t.props.children && (t.innerHTML = t.props.children,
                        delete t.props.children),
                        t.props.hid && (t.key = t.props.hid,
                            delete t.props.hid),
                        t.props.vmid && (t.key = t.props.vmid,
                            delete t.props.vmid),
                        t.props.body && (t.tagPosition = "bodyClose",
                            delete t.props.body)
            }
        }
    };
async function _i(e) {
    if (typeof e === "function")
        return e;
    if (e instanceof Promise)
        return await e;
    if (Array.isArray(e))
        return await Promise.all(e.map(n => _i(n)));
    if ((e == null ? void 0 : e.constructor) === Object) {
        const n = {};
        for (const l of Object.keys(e))
            n[l] = await _i(e[l]);
        return n
    }
    return e
}
const Kp = {
    key: "promises",
    hooks: {
        "entries:resolve": async e => {
            const t = [];
            for (const n in e.entries)
                e.entries[n]._promisesProcessed || t.push(_i(e.entries[n].input).then(l => {
                    e.entries[n].input = l,
                        e.entries[n]._promisesProcessed = !0
                }
                ));
            await Promise.all(t)
        }
    }
}
    , Jp = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    }
    , Qp = ["innerHTML", "textContent"]
    , Yp = e => ({
        key: "template-params",
        hooks: {
            "entries:normalize": t => {
                var l, a, i;
                const n = ((a = (l = t.tags.filter(r => r.tag === "templateParams" && r.mode === "server")) == null ? void 0 : l[0]) == null ? void 0 : a.props) || {};
                Object.keys(n).length && (e._ssrPayload = {
                    templateParams: {
                        ...((i = e._ssrPayload) == null ? void 0 : i.templateParams) || {},
                        ...n
                    }
                })
            }
            ,
            "tags:resolve": ({ tagMap: t, tags: n }) => {
                var i;
                const l = ((i = t.get("templateParams")) == null ? void 0 : i.props) || {}
                    , a = l.separator || "|";
                delete l.separator,
                    l.pageTitle = Cl(l.pageTitle || e._title || "", l, a);
                for (const r of n) {
                    if (r.processTemplateParams === !1)
                        continue;
                    const o = Jp[r.tag];
                    if (o && typeof r.props[o] == "string")
                        r.props[o] = Cl(r.props[o], l, a);
                    else if (r.processTemplateParams || r.tag === "titleTemplate" || r.tag === "title")
                        for (const s of Qp)
                            typeof r[s] == "string" && (r[s] = Cl(r[s], l, a, r.tag === "script" && r.props.type.endsWith("json")))
                }
                e._templateParams = l,
                    e._separator = a
            }
            ,
            "tags:afterResolve": ({ tagMap: t }) => {
                const n = t.get("title");
                n != null && n.textContent && n.processTemplateParams !== !1 && (n.textContent = Cl(n.textContent, e._templateParams, e._separator))
            }
        }
    })
    , Zp = (e, t) => be(t) ? ps(t) : t
    , Zi = "usehead";
function eg(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e,
                n.config.globalProperties.$head = e,
                n.provide(Zi, e)
        }
    }.install
}
function Fu() {
    if (ua()) {
        const e = we(Zi);
        if (!e)
            throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
        return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}
function Vu(e, t = {}) {
    const n = t.head || Fu();
    return n.ssr ? n.push(e || {}, t) : tg(n, e, t)
}
function tg(e, t, n = {}) {
    const l = Xe(!1);
    let a;
    return Nh(() => {
        const r = l.value ? {} : Jl(t, Zp);
        a ? a.patch(r) : a = e.push(r, n)
    }
    ),
        cl() && (ul(() => {
            a.dispose()
        }
        ),
            Ps(() => {
                l.value = !0
            }
            ),
            Ts(() => {
                l.value = !1
            }
            )),
        a
}
function ng(e = {}, t = {}) {
    (t.head || Fu()).use(Fp);
    const { title: l, titleTemplate: a, ...i } = e;
    return Vu({
        title: l,
        titleTemplate: a,
        _flatMeta: i
    }, t)
}
function Eu(e) {
    var n;
    const t = e || Cu();
    return ((n = t == null ? void 0 : t.ssrContext) == null ? void 0 : n.head) || (t == null ? void 0 : t.runWithContext(() => {
        if (ua())
            return we(Zi)
    }
    ))
}
function er(e, t = {}) {
    const n = Eu(t.nuxt);
    if (n)
        return Vu(e, {
            head: n,
            ...t
        })
}
function N_(e, t = {}) {
    const n = Eu(t.nuxt);
    if (n)
        return ng(e, {
            head: n,
            ...t
        })
}
const lg = "modulepreload"
    , ag = function (e, t) {
        return new URL(e, t).href
    }
    , mo = {}
    , oe = function (t, n, l) {
        let a = Promise.resolve();
        if (n && n.length > 0) {
            const r = document.getElementsByTagName("link")
                , o = document.querySelector("meta[property=csp-nonce]")
                , s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
            a = Promise.allSettled(n.map(c => {
                if (c = ag(c, l),
                    c in mo)
                    return;
                mo[c] = !0;
                const u = c.endsWith(".css")
                    , h = u ? '[rel="stylesheet"]' : "";
                if (!!l)
                    for (let _ = r.length - 1; _ >= 0; _--) {
                        const y = r[_];
                        if (y.href === c && (!u || y.rel === "stylesheet"))
                            return
                    }
                else if (document.querySelector(`link[href="${c}"]${h}`))
                    return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : lg,
                    u || (d.as = "script"),
                    d.crossOrigin = "",
                    d.href = c,
                    s && d.setAttribute("nonce", s),
                    document.head.appendChild(d),
                    u)
                    return new Promise((_, y) => {
                        d.addEventListener("load", _),
                            d.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${c}`)))
                    }
                    )
            }
            ))
        }
        function i(r) {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = r,
                window.dispatchEvent(o),
                !o.defaultPrevented)
                throw r
        }
        return a.then(r => {
            for (const o of r || [])
                o.status === "rejected" && i(o.reason);
            return t().catch(i)
        }
        )
    };
let Pl, Ll;
function ig() {
    return Pl = $fetch(Ji(`builds/meta/${Tn().app.buildId}.json`), {
        responseType: "json"
    }),
        Pl.then(e => {
            Ll = sp(e.matcher)
        }
        ).catch(e => {
            console.error("[nuxt] Error fetching app manifest.", e)
        }
        ),
        Pl
}
function ya() {
    return Pl || ig()
}
async function tr(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ya(),
        !Ll)
        return console.error("[nuxt] Error creating app manifest matcher.", Ll),
            {};
    try {
        return Mu({}, ...Ll.matchAll(t).reverse())
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n),
            {}
    }
}
async function po(e, t = {}) {
    if (!await Xu(e))
        return null;
    const l = await og(e, t);
    return await Iu(l) || null
}
const rg = "_payload.json";
async function og(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || dt(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const l = Tn()
        , a = t.hash || (t.fresh ? Date.now() : l.app.buildId)
        , i = l.app.cdnURL
        , r = i && await Xu(e) ? i : l.app.baseURL;
    return pa(r, n.pathname, rg + (a ? `?${a}` : ""))
}
async function Iu(e) {
    const t = fetch(e, {
        cache: "force-cache"
    }).then(n => n.text().then(Nu));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Xu(e = Qi().path) {
    const t = ge();
    return e = ma(e),
        (await ya()).prerendered.includes(e) ? !0 : t.runWithContext(async () => {
            const l = await tr({
                path: e
            });
            return !!l.prerender && !l.redirect
        }
        )
}
let qt = null;
async function sg() {
    var l;
    if (qt)
        return qt;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Nu(e.textContent || "")
        , n = e.dataset.src ? await Iu(e.dataset.src) : void 0;
    return qt = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
        (l = qt.config) != null && l.public && (qt.config.public = St(qt.config.public)),
        qt
}
async function Nu(e) {
    return await wp(e, ge()._payloadRevivers)
}
function ug(e, t) {
    ge()._payloadRevivers[e] = t
}
const cg = [["NuxtError", e => fa(e)], ["EmptyShallowRef", e => Qn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : nl(e))], ["EmptyRef", e => Xe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : nl(e))], ["ShallowRef", e => Qn(e)], ["ShallowReactive", e => bt(e)], ["Ref", e => Xe(e)], ["Reactive", e => St(e)]]
    , hg = Ne({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const [l, a] of cg)
                ug(l, a);
            Object.assign(e.payload, ([t, n] = bn(() => e.runWithContext(sg)),
                t = await t,
                n(),
                t)),
                window.__NUXT__ = e.payload
        }
    });
async function nr(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const l = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", l),
        !!l.shouldRender)
        return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async a => {
            var d;
            const i = new Map
                , r = new Promise(_ => {
                    e.resolveTags().then(y => {
                        _(y.map(C => {
                            const S = i.get(C._d) || 0
                                , v = {
                                    tag: C,
                                    id: (S ? `${C._d}:${S}` : C._d) || oo(C),
                                    shouldRender: !0
                                };
                            return C._d && Ou(C._d) && i.set(C._d, S + 1),
                                v
                        }
                        ))
                    }
                    )
                }
                );
            let o = e._dom;
            if (!o) {
                o = {
                    title: n.title,
                    elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
                };
                for (const _ of ["body", "head"]) {
                    const y = (d = n[_]) == null ? void 0 : d.children;
                    for (const C of y) {
                        const S = C.tagName.toLowerCase();
                        if (!io.has(S))
                            continue;
                        const v = ku({
                            tag: S,
                            props: {}
                        }, {
                            innerHTML: C.innerHTML,
                            ...C.getAttributeNames().reduce((g, b) => (g[b] = C.getAttribute(b),
                                g), {}) || {}
                        });
                        if (v.key = C.getAttribute("data-hid") || void 0,
                            v._d = fi(v) || oo(v),
                            o.elMap.has(v._d)) {
                            let g = 1
                                , b = v._d;
                            for (; o.elMap.has(b);)
                                b = `${v._d}:${g++}`;
                            o.elMap.set(b, C)
                        } else
                            o.elMap.set(v._d, C)
                    }
                }
            }
            o.pendingSideEffects = {
                ...o.sideEffects
            },
                o.sideEffects = {};
            function s(_, y, C) {
                const S = `${_}:${y}`;
                o.sideEffects[S] = C,
                    delete o.pendingSideEffects[S]
            }
            function c({ id: _, $el: y, tag: C }) {
                const S = C.tag.endsWith("Attrs");
                o.elMap.set(_, y),
                    S || (C.textContent && C.textContent !== y.textContent && (y.textContent = C.textContent),
                        C.innerHTML && C.innerHTML !== y.innerHTML && (y.innerHTML = C.innerHTML),
                        s(_, "el", () => {
                            y == null || y.remove(),
                                o.elMap.delete(_)
                        }
                        ));
                for (const v in C.props) {
                    if (!Object.prototype.hasOwnProperty.call(C.props, v))
                        continue;
                    const g = C.props[v];
                    if (v.startsWith("on") && typeof g == "function") {
                        const D = y == null ? void 0 : y.dataset;
                        if (D && D[`${v}fired`]) {
                            const w = v.slice(0, -5);
                            g.call(y, new Event(w.substring(2)))
                        }
                        y.getAttribute(`data-${v}`) !== "" && ((C.tag === "bodyAttrs" ? n.defaultView : y).addEventListener(v.substring(2), g.bind(y)),
                            y.setAttribute(`data-${v}`, ""));
                        continue
                    }
                    const b = `attr:${v}`;
                    if (v === "class") {
                        if (!g)
                            continue;
                        for (const D of g)
                            S && s(_, `${b}:${D}`, () => y.classList.remove(D)),
                                !y.classList.contains(D) && y.classList.add(D)
                    } else if (v === "style") {
                        if (!g)
                            continue;
                        for (const [D, w] of g)
                            s(_, `${b}:${D}`, () => {
                                y.style.removeProperty(D)
                            }
                            ),
                                y.style.setProperty(D, w)
                    } else
                        g !== !1 && g !== null && (y.getAttribute(v) !== g && y.setAttribute(v, g === !0 ? "" : String(g)),
                            S && s(_, b, () => y.removeAttribute(v)))
                }
            }
            const u = []
                , h = {
                    bodyClose: void 0,
                    bodyOpen: void 0,
                    head: void 0
                }
                , m = await r;
            for (const _ of m) {
                const { tag: y, shouldRender: C, id: S } = _;
                if (C) {
                    if (y.tag === "title") {
                        n.title = y.textContent,
                            s("title", "", () => n.title = o.title);
                        continue
                    }
                    _.$el = _.$el || o.elMap.get(S),
                        _.$el ? c(_) : io.has(y.tag) && u.push(_)
                }
            }
            for (const _ of u) {
                const y = _.tag.tagPosition || "head";
                _.$el = n.createElement(_.tag.tag),
                    c(_),
                    h[y] = h[y] || n.createDocumentFragment(),
                    h[y].appendChild(_.$el)
            }
            for (const _ of m)
                await e.hooks.callHook("dom:renderTag", _, n, s);
            h.head && n.head.appendChild(h.head),
                h.bodyOpen && n.body.insertBefore(h.bodyOpen, n.body.firstChild),
                h.bodyClose && n.body.appendChild(h.bodyClose);
            for (const _ in o.pendingSideEffects)
                o.pendingSideEffects[_]();
            e._dom = o,
                await e.hooks.callHook("dom:rendered", {
                    renders: m
                }),
                a()
        }
        ).finally(() => {
            e._domUpdatePromise = void 0,
                e.dirty = !1
        }
        )),
            e._domUpdatePromise
}
function dg(e = {}) {
    var l, a, i;
    const t = ((l = e.domOptions) == null ? void 0 : l.render) || nr;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((i = (a = e.document) == null ? void 0 : a.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
    return Up({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}
function mg(e, t) {
    let n = 0;
    return () => {
        const l = ++n;
        t(() => {
            n === l && e()
        }
        )
    }
}
function pg(e = {}) {
    const t = dg({
        domOptions: {
            render: mg(() => nr(t), zt)
        },
        ...e
    });
    return t.install = eg(t),
        t
}
const gg = {
    disableDefaults: !0,
    disableCapoSorting: !1,
    plugins: [$p, Kp, Yp, qp]
}
    , fg = Ne({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = pg(gg);
            e.vueApp.use(t);
            {
                let n = !0;
                const l = async () => {
                    n = !1,
                        await nr(t)
                }
                    ;
                t.hooks.hook("dom:beforeRender", a => {
                    a.shouldRender = !n
                }
                ),
                    e.hooks.hook("page:start", () => {
                        n = !0
                    }
                    ),
                    e.hooks.hook("page:finish", () => {
                        e.isHydrating || l()
                    }
                    ),
                    e.hooks.hook("app:error", l),
                    e.hooks.hook("app:suspense:resolve", l)
            }
        }
    });
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const un = typeof document < "u";
function zu(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}
function yg(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && zu(e.default)
}
const ae = Object.assign;
function Va(e, t) {
    const n = {};
    for (const l in t) {
        const a = t[l];
        n[l] = it(a) ? a.map(e) : e(a)
    }
    return n
}
const Wn = () => { }
    , it = Array.isArray
    , Gu = /#/g
    , _g = /&/g
    , bg = /\//g
    , Dg = /=/g
    , vg = /\?/g
    , Uu = /\+/g
    , Sg = /%5B/g
    , Cg = /%5D/g
    , Wu = /%5E/g
    , Hg = /%60/g
    , ju = /%7B/g
    , wg = /%7C/g
    , qu = /%7D/g
    , Mg = /%20/g;
function lr(e) {
    return encodeURI("" + e).replace(wg, "|").replace(Sg, "[").replace(Cg, "]")
}
function Tg(e) {
    return lr(e).replace(ju, "{").replace(qu, "}").replace(Wu, "^")
}
function bi(e) {
    return lr(e).replace(Uu, "%2B").replace(Mg, "+").replace(Gu, "%23").replace(_g, "%26").replace(Hg, "`").replace(ju, "{").replace(qu, "}").replace(Wu, "^")
}
function Pg(e) {
    return bi(e).replace(Dg, "%3D")
}
function Lg(e) {
    return lr(e).replace(Gu, "%23").replace(vg, "%3F")
}
function Bg(e) {
    return e == null ? "" : Lg(e).replace(bg, "%2F")
}
function al(e) {
    try {
        return decodeURIComponent("" + e)
    } catch { }
    return "" + e
}
const Ag = /\/$/
    , Rg = e => e.replace(Ag, "");
function Ea(e, t, n = "/") {
    let l, a = {}, i = "", r = "";
    const o = t.indexOf("#");
    let s = t.indexOf("?");
    return o < s && o >= 0 && (s = -1),
        s > -1 && (l = t.slice(0, s),
            i = t.slice(s + 1, o > -1 ? o : t.length),
            a = e(i)),
        o > -1 && (l = l || t.slice(0, o),
            r = t.slice(o, t.length)),
        l = Fg(l ?? t, n),
    {
        fullPath: l + (i && "?") + i + r,
        path: l,
        query: a,
        hash: al(r)
    }
}
function xg(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function go(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Og(e, t, n) {
    const l = t.matched.length - 1
        , a = n.matched.length - 1;
    return l > -1 && l === a && Cn(t.matched[l], n.matched[a]) && $u(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Cn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function $u(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!kg(e[n], t[n]))
            return !1;
    return !0
}
function kg(e, t) {
    return it(e) ? fo(e, t) : it(t) ? fo(t, e) : e === t
}
function fo(e, t) {
    return it(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t
}
function Fg(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
        , l = e.split("/")
        , a = l[l.length - 1];
    (a === ".." || a === ".") && l.push("");
    let i = n.length - 1, r, o;
    for (r = 0; r < l.length; r++)
        if (o = l[r],
            o !== ".")
            if (o === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + l.slice(r).join("/")
}
const Ze = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var il;
(function (e) {
    e.pop = "pop",
        e.push = "push"
}
)(il || (il = {}));
var jn;
(function (e) {
    e.back = "back",
        e.forward = "forward",
        e.unknown = ""
}
)(jn || (jn = {}));
function Vg(e) {
    if (!e)
        if (un) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
                e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
        Rg(e)
}
const Eg = /^[^#]+#/;
function Ig(e, t) {
    return e.replace(Eg, "#") + t
}
function Xg(e, t) {
    const n = document.documentElement.getBoundingClientRect()
        , l = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: l.left - n.left - (t.left || 0),
        top: l.top - n.top - (t.top || 0)
    }
}
const _a = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Ng(e) {
    let t;
    if ("el" in e) {
        const n = e.el
            , l = typeof n == "string" && n.startsWith("#")
            , a = typeof n == "string" ? l ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!a)
            return;
        t = Xg(a, e)
    } else
        t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function yo(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Di = new Map;
function zg(e, t) {
    Di.set(e, t)
}
function Gg(e) {
    const t = Di.get(e);
    return Di.delete(e),
        t
}
let Ug = () => location.protocol + "//" + location.host;
function Ku(e, t) {
    const { pathname: n, search: l, hash: a } = t
        , i = e.indexOf("#");
    if (i > -1) {
        let o = a.includes(e.slice(i)) ? e.slice(i).length : 1
            , s = a.slice(o);
        return s[0] !== "/" && (s = "/" + s),
            go(s, "")
    }
    return go(n, e) + l + a
}
function Wg(e, t, n, l) {
    let a = []
        , i = []
        , r = null;
    const o = ({ state: m }) => {
        const d = Ku(e, location)
            , _ = n.value
            , y = t.value;
        let C = 0;
        if (m) {
            if (n.value = d,
                t.value = m,
                r && r === _) {
                r = null;
                return
            }
            C = y ? m.position - y.position : 0
        } else
            l(d);
        a.forEach(S => {
            S(n.value, _, {
                delta: C,
                type: il.pop,
                direction: C ? C > 0 ? jn.forward : jn.back : jn.unknown
            })
        }
        )
    }
        ;
    function s() {
        r = n.value
    }
    function c(m) {
        a.push(m);
        const d = () => {
            const _ = a.indexOf(m);
            _ > -1 && a.splice(_, 1)
        }
            ;
        return i.push(d),
            d
    }
    function u() {
        const { history: m } = window;
        m.state && m.replaceState(ae({}, m.state, {
            scroll: _a()
        }), "")
    }
    function h() {
        for (const m of i)
            m();
        i = [],
            window.removeEventListener("popstate", o),
            window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", o),
        window.addEventListener("beforeunload", u, {
            passive: !0
        }),
    {
        pauseListeners: s,
        listen: c,
        destroy: h
    }
}
function _o(e, t, n, l = !1, a = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: l,
        position: window.history.length,
        scroll: a ? _a() : null
    }
}
function jg(e) {
    const { history: t, location: n } = window
        , l = {
            value: Ku(e, n)
        }
        , a = {
            value: t.state
        };
    a.value || i(l.value, {
        back: null,
        current: l.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(s, c, u) {
        const h = e.indexOf("#")
            , m = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + s : Ug() + e + s;
        try {
            t[u ? "replaceState" : "pushState"](c, "", m),
                a.value = c
        } catch (d) {
            console.error(d),
                n[u ? "replace" : "assign"](m)
        }
    }
    function r(s, c) {
        const u = ae({}, t.state, _o(a.value.back, s, a.value.forward, !0), c, {
            position: a.value.position
        });
        i(s, u, !0),
            l.value = s
    }
    function o(s, c) {
        const u = ae({}, a.value, t.state, {
            forward: s,
            scroll: _a()
        });
        i(u.current, u, !0);
        const h = ae({}, _o(l.value, s, null), {
            position: u.position + 1
        }, c);
        i(s, h, !1),
            l.value = s
    }
    return {
        location: l,
        state: a,
        push: o,
        replace: r
    }
}
function qg(e) {
    e = Vg(e);
    const t = jg(e)
        , n = Wg(e, t.state, t.location, t.replace);
    function l(i, r = !0) {
        r || n.pauseListeners(),
            history.go(i)
    }
    const a = ae({
        location: "",
        base: e,
        go: l,
        createHref: Ig.bind(null, e)
    }, t, n);
    return Object.defineProperty(a, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
        Object.defineProperty(a, "state", {
            enumerable: !0,
            get: () => t.state.value
        }),
        a
}
function $g(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Ju(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Qu = Symbol("");
var bo;
(function (e) {
    e[e.aborted = 4] = "aborted",
        e[e.cancelled = 8] = "cancelled",
        e[e.duplicated = 16] = "duplicated"
}
)(bo || (bo = {}));
function Hn(e, t) {
    return ae(new Error, {
        type: e,
        [Qu]: !0
    }, t)
}
function gt(e, t) {
    return e instanceof Error && Qu in e && (t == null || !!(e.type & t))
}
const Do = "[^/]+?"
    , Kg = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    }
    , Jg = /[.+*?^${}()[\]/\\]/g;
function Qg(e, t) {
    const n = ae({}, Kg, t)
        , l = [];
    let a = n.start ? "^" : "";
    const i = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (a += "/");
        for (let h = 0; h < c.length; h++) {
            const m = c[h];
            let d = 40 + (n.sensitive ? .25 : 0);
            if (m.type === 0)
                h || (a += "/"),
                    a += m.value.replace(Jg, "\\$&"),
                    d += 40;
            else if (m.type === 1) {
                const { value: _, repeatable: y, optional: C, regexp: S } = m;
                i.push({
                    name: _,
                    repeatable: y,
                    optional: C
                });
                const v = S || Do;
                if (v !== Do) {
                    d += 10;
                    try {
                        new RegExp(`(${v})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${v}): ` + b.message)
                    }
                }
                let g = y ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
                h || (g = C && c.length < 2 ? `(?:/${g})` : "/" + g),
                    C && (g += "?"),
                    a += g,
                    d += 20,
                    C && (d += -8),
                    y && (d += -20),
                    v === ".*" && (d += -50)
            }
            u.push(d)
        }
        l.push(u)
    }
    if (n.strict && n.end) {
        const c = l.length - 1;
        l[c][l[c].length - 1] += .7000000000000001
    }
    n.strict || (a += "/?"),
        n.end ? a += "$" : n.strict && !a.endsWith("/") && (a += "(?:/|$)");
    const r = new RegExp(a, n.sensitive ? "" : "i");
    function o(c) {
        const u = c.match(r)
            , h = {};
        if (!u)
            return null;
        for (let m = 1; m < u.length; m++) {
            const d = u[m] || ""
                , _ = i[m - 1];
            h[_.name] = d && _.repeatable ? d.split("/") : d
        }
        return h
    }
    function s(c) {
        let u = ""
            , h = !1;
        for (const m of e) {
            (!h || !u.endsWith("/")) && (u += "/"),
                h = !1;
            for (const d of m)
                if (d.type === 0)
                    u += d.value;
                else if (d.type === 1) {
                    const { value: _, repeatable: y, optional: C } = d
                        , S = _ in c ? c[_] : "";
                    if (it(S) && !y)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const v = it(S) ? S.join("/") : S;
                    if (!v)
                        if (C)
                            m.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    u += v
                }
        }
        return u || "/"
    }
    return {
        re: r,
        score: l,
        keys: i,
        parse: o,
        stringify: s
    }
}
function Yg(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const l = t[n] - e[n];
        if (l)
            return l;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function Yu(e, t) {
    let n = 0;
    const l = e.score
        , a = t.score;
    for (; n < l.length && n < a.length;) {
        const i = Yg(l[n], a[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(a.length - l.length) === 1) {
        if (vo(l))
            return 1;
        if (vo(a))
            return -1
    }
    return a.length - l.length
}
function vo(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Zg = {
    type: 0,
    value: ""
}
    , ef = /[a-zA-Z0-9_]/;
function tf(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Zg]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(d) {
        throw new Error(`ERR (${n})/"${c}": ${d}`)
    }
    let n = 0
        , l = n;
    const a = [];
    let i;
    function r() {
        i && a.push(i),
            i = []
    }
    let o = 0, s, c = "", u = "";
    function h() {
        c && (n === 0 ? i.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
                type: 1,
                value: c,
                regexp: u,
                repeatable: s === "*" || s === "+",
                optional: s === "*" || s === "?"
            })) : t("Invalid state to consume buffer"),
            c = "")
    }
    function m() {
        c += s
    }
    for (; o < e.length;) {
        if (s = e[o++],
            s === "\\" && n !== 2) {
            l = n,
                n = 4;
            continue
        }
        switch (n) {
            case 0:
                s === "/" ? (c && h(),
                    r()) : s === ":" ? (h(),
                        n = 1) : m();
                break;
            case 4:
                m(),
                    n = l;
                break;
            case 1:
                s === "(" ? n = 2 : ef.test(s) ? m() : (h(),
                    n = 0,
                    s !== "*" && s !== "?" && s !== "+" && o--);
                break;
            case 2:
                s === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + s : n = 3 : u += s;
                break;
            case 3:
                h(),
                    n = 0,
                    s !== "*" && s !== "?" && s !== "+" && o--,
                    u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
        h(),
        r(),
        a
}
function nf(e, t, n) {
    const l = Qg(tf(e.path), n)
        , a = ae(l, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a),
        a
}
function lf(e, t) {
    const n = []
        , l = new Map;
    t = wo({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function a(h) {
        return l.get(h)
    }
    function i(h, m, d) {
        const _ = !d
            , y = Co(h);
        y.aliasOf = d && d.record;
        const C = wo(t, h)
            , S = [y];
        if ("alias" in h) {
            const b = typeof h.alias == "string" ? [h.alias] : h.alias;
            for (const D of b)
                S.push(Co(ae({}, y, {
                    components: d ? d.record.components : y.components,
                    path: D,
                    aliasOf: d ? d.record : y
                })))
        }
        let v, g;
        for (const b of S) {
            const { path: D } = b;
            if (m && D[0] !== "/") {
                const w = m.record.path
                    , R = w[w.length - 1] === "/" ? "" : "/";
                b.path = m.record.path + (D && R + D)
            }
            if (v = nf(b, m, C),
                d ? d.alias.push(v) : (g = g || v,
                    g !== v && g.alias.push(v),
                    _ && h.name && !Ho(v) && r(h.name)),
                Zu(v) && s(v),
                y.children) {
                const w = y.children;
                for (let R = 0; R < w.length; R++)
                    i(w[R], v, d && d.children[R])
            }
            d = d || v
        }
        return g ? () => {
            r(g)
        }
            : Wn
    }
    function r(h) {
        if (Ju(h)) {
            const m = l.get(h);
            m && (l.delete(h),
                n.splice(n.indexOf(m), 1),
                m.children.forEach(r),
                m.alias.forEach(r))
        } else {
            const m = n.indexOf(h);
            m > -1 && (n.splice(m, 1),
                h.record.name && l.delete(h.record.name),
                h.children.forEach(r),
                h.alias.forEach(r))
        }
    }
    function o() {
        return n
    }
    function s(h) {
        const m = of(h, n);
        n.splice(m, 0, h),
            h.record.name && !Ho(h) && l.set(h.record.name, h)
    }
    function c(h, m) {
        let d, _ = {}, y, C;
        if ("name" in h && h.name) {
            if (d = l.get(h.name),
                !d)
                throw Hn(1, {
                    location: h
                });
            C = d.record.name,
                _ = ae(So(m.params, d.keys.filter(g => !g.optional).concat(d.parent ? d.parent.keys.filter(g => g.optional) : []).map(g => g.name)), h.params && So(h.params, d.keys.map(g => g.name))),
                y = d.stringify(_)
        } else if (h.path != null)
            y = h.path,
                d = n.find(g => g.re.test(y)),
                d && (_ = d.parse(y),
                    C = d.record.name);
        else {
            if (d = m.name ? l.get(m.name) : n.find(g => g.re.test(m.path)),
                !d)
                throw Hn(1, {
                    location: h,
                    currentLocation: m
                });
            C = d.record.name,
                _ = ae({}, m.params, h.params),
                y = d.stringify(_)
        }
        const S = [];
        let v = d;
        for (; v;)
            S.unshift(v.record),
                v = v.parent;
        return {
            name: C,
            path: y,
            params: _,
            matched: S,
            meta: rf(S)
        }
    }
    e.forEach(h => i(h));
    function u() {
        n.length = 0,
            l.clear()
    }
    return {
        addRoute: i,
        resolve: c,
        removeRoute: r,
        clearRoutes: u,
        getRoutes: o,
        getRecordMatcher: a
    }
}
function So(e, t) {
    const n = {};
    for (const l of t)
        l in e && (n[l] = e[l]);
    return n
}
function Co(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: af(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
        t
}
function af(e) {
    const t = {}
        , n = e.props || !1;
    if ("component" in e)
        t.default = n;
    else
        for (const l in e.components)
            t[l] = typeof n == "object" ? n[l] : n;
    return t
}
function Ho(e) {
    for (; e;) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function rf(e) {
    return e.reduce((t, n) => ae(t, n.meta), {})
}
function wo(e, t) {
    const n = {};
    for (const l in e)
        n[l] = l in t ? t[l] : e[l];
    return n
}
function of(e, t) {
    let n = 0
        , l = t.length;
    for (; n !== l;) {
        const i = n + l >> 1;
        Yu(e, t[i]) < 0 ? l = i : n = i + 1
    }
    const a = sf(e);
    return a && (l = t.lastIndexOf(a, l - 1)),
        l
}
function sf(e) {
    let t = e;
    for (; t = t.parent;)
        if (Zu(t) && Yu(e, t) === 0)
            return t
}
function Zu({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function uf(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const l = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let a = 0; a < l.length; ++a) {
        const i = l[a].replace(Uu, " ")
            , r = i.indexOf("=")
            , o = al(r < 0 ? i : i.slice(0, r))
            , s = r < 0 ? null : al(i.slice(r + 1));
        if (o in t) {
            let c = t[o];
            it(c) || (c = t[o] = [c]),
                c.push(s)
        } else
            t[o] = s
    }
    return t
}
function Mo(e) {
    let t = "";
    for (let n in e) {
        const l = e[n];
        if (n = Pg(n),
            l == null) {
            l !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (it(l) ? l.map(i => i && bi(i)) : [l && bi(l)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n,
                i != null && (t += "=" + i))
        }
        )
    }
    return t
}
function cf(e) {
    const t = {};
    for (const n in e) {
        const l = e[n];
        l !== void 0 && (t[n] = it(l) ? l.map(a => a == null ? null : "" + a) : l == null ? l : "" + l)
    }
    return t
}
const hf = Symbol("")
    , To = Symbol("")
    , ar = Symbol("")
    , ir = Symbol("")
    , vi = Symbol("");
function Fn() {
    let e = [];
    function t(l) {
        return e.push(l),
            () => {
                const a = e.indexOf(l);
                a > -1 && e.splice(a, 1)
            }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function At(e, t, n, l, a, i = r => r()) {
    const r = l && (l.enterCallbacks[a] = l.enterCallbacks[a] || []);
    return () => new Promise((o, s) => {
        const c = m => {
            m === !1 ? s(Hn(4, {
                from: n,
                to: t
            })) : m instanceof Error ? s(m) : $g(m) ? s(Hn(2, {
                from: t,
                to: m
            })) : (r && l.enterCallbacks[a] === r && typeof m == "function" && r.push(m),
                o())
        }
            , u = i(() => e.call(l && l.instances[a], t, n, c));
        let h = Promise.resolve(u);
        e.length < 3 && (h = h.then(c)),
            h.catch(m => s(m))
    }
    )
}
function Ia(e, t, n, l, a = i => i()) {
    const i = [];
    for (const r of e)
        for (const o in r.components) {
            let s = r.components[o];
            if (!(t !== "beforeRouteEnter" && !r.instances[o]))
                if (zu(s)) {
                    const u = (s.__vccOpts || s)[t];
                    u && i.push(At(u, n, l, r, o, a))
                } else {
                    let c = s();
                    i.push(() => c.then(u => {
                        if (!u)
                            throw new Error(`Couldn't resolve component "${o}" at "${r.path}"`);
                        const h = yg(u) ? u.default : u;
                        r.mods[o] = u,
                            r.components[o] = h;
                        const d = (h.__vccOpts || h)[t];
                        return d && At(d, n, l, r, o, a)()
                    }
                    ))
                }
        }
    return i
}
function Po(e) {
    const t = we(ar)
        , n = we(ir)
        , l = ye(() => {
            const s = _e(e.to);
            return t.resolve(s)
        }
        )
        , a = ye(() => {
            const { matched: s } = l.value
                , { length: c } = s
                , u = s[c - 1]
                , h = n.matched;
            if (!u || !h.length)
                return -1;
            const m = h.findIndex(Cn.bind(null, u));
            if (m > -1)
                return m;
            const d = Lo(s[c - 2]);
            return c > 1 && Lo(u) === d && h[h.length - 1].path !== d ? h.findIndex(Cn.bind(null, s[c - 2])) : m
        }
        )
        , i = ye(() => a.value > -1 && ff(n.params, l.value.params))
        , r = ye(() => a.value > -1 && a.value === n.matched.length - 1 && $u(n.params, l.value.params));
    function o(s = {}) {
        if (gf(s)) {
            const c = t[_e(e.replace) ? "replace" : "push"](_e(e.to)).catch(Wn);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c),
                c
        }
        return Promise.resolve()
    }
    return {
        route: l,
        href: ye(() => l.value.href),
        isActive: i,
        isExactActive: r,
        navigate: o
    }
}
function df(e) {
    return e.length === 1 ? e[0] : e
}
const mf = Pe({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Po,
    setup(e, { slots: t }) {
        const n = St(Po(e))
            , { options: l } = we(ar)
            , a = ye(() => ({
                [Bo(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive,
                [Bo(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
            }));
        return () => {
            const i = t.default && df(t.default(n));
            return e.custom ? i : He("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: a.value
            }, i)
        }
    }
})
    , pf = mf;
function gf(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
            !0
    }
}
function ff(e, t) {
    for (const n in t) {
        const l = t[n]
            , a = e[n];
        if (typeof l == "string") {
            if (l !== a)
                return !1
        } else if (!it(a) || a.length !== l.length || l.some((i, r) => i !== a[r]))
            return !1
    }
    return !0
}
function Lo(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Bo = (e, t, n) => e ?? t ?? n
    , yf = Pe({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, { attrs: t, slots: n }) {
            const l = we(vi)
                , a = ye(() => e.route || l.value)
                , i = we(To, 0)
                , r = ye(() => {
                    let c = _e(i);
                    const { matched: u } = a.value;
                    let h;
                    for (; (h = u[c]) && !h.components;)
                        c++;
                    return c
                }
                )
                , o = ye(() => a.value.matched[r.value]);
            Ft(To, ye(() => r.value + 1)),
                Ft(hf, o),
                Ft(vi, a);
            const s = Xe();
            return Vt(() => [s.value, o.value, e.name], ([c, u, h], [m, d, _]) => {
                u && (u.instances[h] = c,
                    d && d !== u && c && c === m && (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                        u.updateGuards.size || (u.updateGuards = d.updateGuards))),
                    c && u && (!d || !Cn(u, d) || !m) && (u.enterCallbacks[h] || []).forEach(y => y(c))
            }
                , {
                    flush: "post"
                }),
                () => {
                    const c = a.value
                        , u = e.name
                        , h = o.value
                        , m = h && h.components[u];
                    if (!m)
                        return Ao(n.default, {
                            Component: m,
                            route: c
                        });
                    const d = h.props[u]
                        , _ = d ? d === !0 ? c.params : typeof d == "function" ? d(c) : d : null
                        , C = He(m, ae({}, _, t, {
                            onVnodeUnmounted: S => {
                                S.component.isUnmounted && (h.instances[u] = null)
                            }
                            ,
                            ref: s
                        }));
                    return Ao(n.default, {
                        Component: C,
                        route: c
                    }) || C
                }
        }
    });
function Ao(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ec = yf;
function _f(e) {
    const t = lf(e.routes, e)
        , n = e.parseQuery || uf
        , l = e.stringifyQuery || Mo
        , a = e.history
        , i = Fn()
        , r = Fn()
        , o = Fn()
        , s = Qn(Ze);
    let c = Ze;
    un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Va.bind(null, T => "" + T)
        , h = Va.bind(null, Bg)
        , m = Va.bind(null, al);
    function d(T, X) {
        let E, U;
        return Ju(T) ? (E = t.getRecordMatcher(T),
            U = X) : U = T,
            t.addRoute(U, E)
    }
    function _(T) {
        const X = t.getRecordMatcher(T);
        X && t.removeRoute(X)
    }
    function y() {
        return t.getRoutes().map(T => T.record)
    }
    function C(T) {
        return !!t.getRecordMatcher(T)
    }
    function S(T, X) {
        if (X = ae({}, X || s.value),
            typeof T == "string") {
            const f = Ea(n, T, X.path)
                , H = t.resolve({
                    path: f.path
                }, X)
                , P = a.createHref(f.fullPath);
            return ae(f, H, {
                params: m(H.params),
                hash: al(f.hash),
                redirectedFrom: void 0,
                href: P
            })
        }
        let E;
        if (T.path != null)
            E = ae({}, T, {
                path: Ea(n, T.path, X.path).path
            });
        else {
            const f = ae({}, T.params);
            for (const H in f)
                f[H] == null && delete f[H];
            E = ae({}, T, {
                params: h(f)
            }),
                X.params = h(X.params)
        }
        const U = t.resolve(E, X)
            , le = T.hash || "";
        U.params = u(m(U.params));
        const pe = xg(l, ae({}, T, {
            hash: Tg(le),
            path: U.path
        }))
            , p = a.createHref(pe);
        return ae({
            fullPath: pe,
            hash: le,
            query: l === Mo ? cf(T.query) : T.query || {}
        }, U, {
            redirectedFrom: void 0,
            href: p
        })
    }
    function v(T) {
        return typeof T == "string" ? Ea(n, T, s.value.path) : ae({}, T)
    }
    function g(T, X) {
        if (c !== T)
            return Hn(8, {
                from: X,
                to: T
            })
    }
    function b(T) {
        return R(T)
    }
    function D(T) {
        return b(ae(v(T), {
            replace: !0
        }))
    }
    function w(T) {
        const X = T.matched[T.matched.length - 1];
        if (X && X.redirect) {
            const { redirect: E } = X;
            let U = typeof E == "function" ? E(T) : E;
            return typeof U == "string" && (U = U.includes("?") || U.includes("#") ? U = v(U) : {
                path: U
            },
                U.params = {}),
                ae({
                    query: T.query,
                    hash: T.hash,
                    params: U.path != null ? {} : T.params
                }, U)
        }
    }
    function R(T, X) {
        const E = c = S(T)
            , U = s.value
            , le = T.state
            , pe = T.force
            , p = T.replace === !0
            , f = w(E);
        if (f)
            return R(ae(v(f), {
                state: typeof f == "object" ? ae({}, le, f.state) : le,
                force: pe,
                replace: p
            }), X || E);
        const H = E;
        H.redirectedFrom = X;
        let P;
        return !pe && Og(l, U, E) && (P = Hn(16, {
            to: H,
            from: U
        }),
            rt(U, U, !0, !1)),
            (P ? Promise.resolve(P) : x(H, U)).catch(M => gt(M) ? gt(M, 2) ? M : Ht(M) : G(M, H, U)).then(M => {
                if (M) {
                    if (gt(M, 2))
                        return R(ae({
                            replace: p
                        }, v(M.to), {
                            state: typeof M.to == "object" ? ae({}, le, M.to.state) : le,
                            force: pe
                        }), X || H)
                } else
                    M = A(H, U, !0, p, le);
                return W(H, U, M),
                    M
            }
            )
    }
    function z(T, X) {
        const E = g(T, X);
        return E ? Promise.reject(E) : Promise.resolve()
    }
    function O(T) {
        const X = ln.values().next().value;
        return X && typeof X.runWithContext == "function" ? X.runWithContext(T) : T()
    }
    function x(T, X) {
        let E;
        const [U, le, pe] = bf(T, X);
        E = Ia(U.reverse(), "beforeRouteLeave", T, X);
        for (const f of U)
            f.leaveGuards.forEach(H => {
                E.push(At(H, T, X))
            }
            );
        const p = z.bind(null, T, X);
        return E.push(p),
            je(E).then(() => {
                E = [];
                for (const f of i.list())
                    E.push(At(f, T, X));
                return E.push(p),
                    je(E)
            }
            ).then(() => {
                E = Ia(le, "beforeRouteUpdate", T, X);
                for (const f of le)
                    f.updateGuards.forEach(H => {
                        E.push(At(H, T, X))
                    }
                    );
                return E.push(p),
                    je(E)
            }
            ).then(() => {
                E = [];
                for (const f of pe)
                    if (f.beforeEnter)
                        if (it(f.beforeEnter))
                            for (const H of f.beforeEnter)
                                E.push(At(H, T, X));
                        else
                            E.push(At(f.beforeEnter, T, X));
                return E.push(p),
                    je(E)
            }
            ).then(() => (T.matched.forEach(f => f.enterCallbacks = {}),
                E = Ia(pe, "beforeRouteEnter", T, X, O),
                E.push(p),
                je(E))).then(() => {
                    E = [];
                    for (const f of r.list())
                        E.push(At(f, T, X));
                    return E.push(p),
                        je(E)
                }
                ).catch(f => gt(f, 8) ? f : Promise.reject(f))
    }
    function W(T, X, E) {
        o.list().forEach(U => O(() => U(T, X, E)))
    }
    function A(T, X, E, U, le) {
        const pe = g(T, X);
        if (pe)
            return pe;
        const p = X === Ze
            , f = un ? history.state : {};
        E && (U || p ? a.replace(T.fullPath, ae({
            scroll: p && f && f.scroll
        }, le)) : a.push(T.fullPath, le)),
            s.value = T,
            rt(T, X, E, p),
            Ht()
    }
    let j;
    function Z() {
        j || (j = a.listen((T, X, E) => {
            if (!ml.listening)
                return;
            const U = S(T)
                , le = w(U);
            if (le) {
                R(ae(le, {
                    replace: !0,
                    force: !0
                }), U).catch(Wn);
                return
            }
            c = U;
            const pe = s.value;
            un && zg(yo(pe.fullPath, E.delta), _a()),
                x(U, pe).catch(p => gt(p, 12) ? p : gt(p, 2) ? (R(ae(v(p.to), {
                    force: !0
                }), U).then(f => {
                    gt(f, 20) && !E.delta && E.type === il.pop && a.go(-1, !1)
                }
                ).catch(Wn),
                    Promise.reject()) : (E.delta && a.go(-E.delta, !1),
                        G(p, U, pe))).then(p => {
                            p = p || A(U, pe, !1),
                                p && (E.delta && !gt(p, 8) ? a.go(-E.delta, !1) : E.type === il.pop && gt(p, 20) && a.go(-1, !1)),
                                W(U, pe, p)
                        }
                        ).catch(Wn)
        }
        ))
    }
    let ne = Fn(), N = Fn(), Y;
    function G(T, X, E) {
        Ht(T);
        const U = N.list();
        return U.length ? U.forEach(le => le(T, X, E)) : console.error(T),
            Promise.reject(T)
    }
    function De() {
        return Y && s.value !== Ze ? Promise.resolve() : new Promise((T, X) => {
            ne.add([T, X])
        }
        )
    }
    function Ht(T) {
        return Y || (Y = !T,
            Z(),
            ne.list().forEach(([X, E]) => T ? E(T) : X()),
            ne.reset()),
            T
    }
    function rt(T, X, E, U) {
        const { scrollBehavior: le } = e;
        if (!un || !le)
            return Promise.resolve();
        const pe = !E && Gg(yo(T.fullPath, 0)) || (U || !E) && history.state && history.state.scroll || null;
        return zt().then(() => le(T, X, pe)).then(p => p && Ng(p)).catch(p => G(p, T, X))
    }
    const Ve = T => a.go(T);
    let nn;
    const ln = new Set
        , ml = {
            currentRoute: s,
            listening: !0,
            addRoute: d,
            removeRoute: _,
            clearRoutes: t.clearRoutes,
            hasRoute: C,
            getRoutes: y,
            resolve: S,
            options: e,
            push: b,
            replace: D,
            go: Ve,
            back: () => Ve(-1),
            forward: () => Ve(1),
            beforeEach: i.add,
            beforeResolve: r.add,
            afterEach: o.add,
            onError: N.add,
            isReady: De,
            install(T) {
                const X = this;
                T.component("RouterLink", pf),
                    T.component("RouterView", ec),
                    T.config.globalProperties.$router = X,
                    Object.defineProperty(T.config.globalProperties, "$route", {
                        enumerable: !0,
                        get: () => _e(s)
                    }),
                    un && !nn && s.value === Ze && (nn = !0,
                        b(a.location).catch(le => { }
                        ));
                const E = {};
                for (const le in Ze)
                    Object.defineProperty(E, le, {
                        get: () => s.value[le],
                        enumerable: !0
                    });
                T.provide(ar, X),
                    T.provide(ir, bt(E)),
                    T.provide(vi, s);
                const U = T.unmount;
                ln.add(T),
                    T.unmount = function () {
                        ln.delete(T),
                            ln.size < 1 && (c = Ze,
                                j && j(),
                                j = null,
                                s.value = Ze,
                                nn = !1,
                                Y = !1),
                            U()
                    }
            }
        };
    function je(T) {
        return T.reduce((X, E) => X.then(() => O(E)), Promise.resolve())
    }
    return ml
}
function bf(e, t) {
    const n = []
        , l = []
        , a = []
        , i = Math.max(t.matched.length, e.matched.length);
    for (let r = 0; r < i; r++) {
        const o = t.matched[r];
        o && (e.matched.find(c => Cn(c, o)) ? l.push(o) : n.push(o));
        const s = e.matched[r];
        s && (t.matched.find(c => Cn(c, s)) || a.push(s))
    }
    return [n, l, a]
}
function Df(e) {
    return we(ir)
}
const vf = /(:\w+)\([^)]+\)/g
    , Sf = /(:\w+)[?+*]/g
    , Cf = /:\w+/g
    , Hf = (e, t) => t.path.replace(vf, "$1").replace(Sf, "$1").replace(Cf, n => {
        var l;
        return ((l = e.params[n.slice(1)]) == null ? void 0 : l.toString()) || ""
    }
    )
    , Si = (e, t) => {
        const n = e.route.matched.find(a => {
            var i;
            return ((i = a.components) == null ? void 0 : i.default) === e.Component.type
        }
        )
            , l = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Hf(e.route, n));
        return typeof l == "function" ? l(e.route) : l
    }
    , wf = (e, t) => ({
        default: () => e ? He(mh, e === !0 ? {} : e, t) : t
    });
function rr(e) {
    return Array.isArray(e) ? e : [e]
}
const Mf = {
    key: e => e.fullPath
};
const Xa = [{
    name: "index",
    path: "/",
    component: () => oe(() => import("./Cjrz4cjn.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url)
}, {
    name: "models",
    path: "/models",
    meta: Mf || {},
    component: () => oe(() => import("./0lDupugJ.js"), __vite__mapDeps([6, 1, 2, 3, 4, 7]), import.meta.url)
}, {
    name: "slug",
    path: "/:slug(.*)*",
    component: () => oe(() => import("./DjDp0nGs.js"), __vite__mapDeps([8, 2, 9]), import.meta.url)
}]
    , tc = (e, t) => ({
        default: () => {
            var n;
            return e ? He(_d, e === !0 ? {} : e, t) : (n = t.default) == null ? void 0 : n.call(t)
        }
    })
    , Tf = /(:\w+)\([^)]+\)/g
    , Pf = /(:\w+)[?+*]/g
    , Lf = /:\w+/g;
function Ro(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(Tf, "$1").replace(Pf, "$1").replace(Lf, n => {
        var l;
        return ((l = e.params[n.slice(1)]) == null ? void 0 : l.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function Bf(e, t) {
    return e === t || t === Ze ? !1 : Ro(e) !== Ro(t) ? !0 : !e.matched.every((l, a) => {
        var i, r;
        return l.components && l.components.default === ((r = (i = t.matched[a]) == null ? void 0 : i.components) == null ? void 0 : r.default)
    }
    )
}
function Af(e, t = !1) {
    if (e) {
        if (e.nodeName === "#comment" && e.nodeValue === "[")
            return nc(e, [], t);
        if (t) {
            const n = e.cloneNode(!0);
            return n.querySelectorAll("[data-island-slot]").forEach(l => {
                l.innerHTML = ""
            }
            ),
                [n.outerHTML]
        }
        return [e.outerHTML]
    }
}
function nc(e, t = [], n = !1) {
    if (e && e.nodeName) {
        if (xf(e))
            return t;
        if (!Rf(e)) {
            const l = e.cloneNode(!0);
            n && l.querySelectorAll("[data-island-slot]").forEach(a => {
                a.innerHTML = ""
            }
            ),
                t.push(l.outerHTML)
        }
        nc(e.nextSibling, t, n)
    }
    return t
}
function z_(e, t) {
    const n = e ? Af(e) : [t];
    return n ? ld(n.join(""), n.length) : He("div")
}
function Rf(e) {
    return e.nodeName === "#comment" && e.nodeValue === "["
}
function xf(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]"
}
const Of = {
    scrollBehavior(e, t, n) {
        var c;
        const l = ge()
            , a = ((c = Fe().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let i = n || void 0;
        const r = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!i && t && e && r !== !1 && Bf(e, t) && (i = {
            left: 0,
            top: 0
        }),
            e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: xo(e.hash),
                behavior: a
            } : !1;
        const o = u => !!(u.meta.pageTransition ?? ui)
            , s = o(t) && o(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u => {
            l.hooks.hookOnce(s, async () => {
                await new Promise(h => setTimeout(h, 0)),
                    e.hash && (i = {
                        el: e.hash,
                        top: xo(e.hash),
                        behavior: a
                    }),
                    u(i)
            }
            )
        }
        )
    }
};
function xo(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch { }
    return 0
}
const kf = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
    , $e = {
        ...kf,
        ...Of
    }
    , Ff = async e => {
        var s;
        let t, n;
        if (!((s = e.meta) != null && s.validate))
            return;
        const l = ge()
            , a = Fe()
            , i = ([t, n] = bn(() => Promise.resolve(e.meta.validate(e))),
                t = await t,
                n(),
                t);
        if (i === !0)
            return;
        const r = fa({
            statusCode: i && i.statusCode || 404,
            statusMessage: i && i.statusMessage || `Page Not Found: ${e.fullPath}`,
            data: {
                path: e.fullPath
            }
        })
            , o = a.beforeResolve(c => {
                if (o(),
                    c === e) {
                    const u = a.afterEach(async () => {
                        u(),
                            await l.runWithContext(() => hn(r)),
                            window == null || window.history.pushState({}, "", e.fullPath)
                    }
                    );
                    return !1
                }
            }
            )
    }
    , Vf = async e => {
        let t, n;
        const l = ([t, n] = bn(() => tr({
            path: e.path
        })),
            t = await t,
            n(),
            t);
        if (l.redirect)
            return dt(l.redirect, {
                acceptRelative: !0
            }) ? (window.location.href = l.redirect,
                !1) : l.redirect
    }
    , Ef = [Ff, Vf]
    , qn = {};
function If(e, t, n) {
    const { pathname: l, search: a, hash: i } = t
        , r = e.indexOf("#");
    if (r > -1) {
        const c = i.includes(e.slice(r)) ? e.slice(r).length : 1;
        let u = i.slice(c);
        return u[0] !== "/" && (u = "/" + u),
            Jr(u, "")
    }
    const o = Jr(l, e)
        , s = !n || Dm(o, n, {
            trailingSlash: !0
        }) ? o : n;
    return s + (s.includes("?") ? "" : a) + i
}
const Xf = Ne({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var C;
        let t, n, l = Tn().app.baseURL;
        const a = ((C = $e.history) == null ? void 0 : C.call($e, l)) ?? qg(l)
            , i = $e.routes ? ([t, n] = bn(() => $e.routes(Xa)),
                t = await t,
                n(),
                t ?? Xa) : Xa;
        let r;
        const o = _f({
            ...$e,
            scrollBehavior: (S, v, g) => {
                if (v === Ze) {
                    r = g;
                    return
                }
                if ($e.scrollBehavior) {
                    if (o.options.scrollBehavior = $e.scrollBehavior,
                        "scrollRestoration" in window.history) {
                        const b = o.beforeEach(() => {
                            b(),
                                window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return $e.scrollBehavior(S, Ze, r || g)
                }
            }
            ,
            history: a,
            routes: i
        });
        $e.routes && $e.routes,
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"),
            e.vueApp.use(o);
        const s = Qn(o.currentRoute.value);
        o.afterEach((S, v) => {
            s.value = v
        }
        ),
            Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => s.value
            });
        const c = If(l, window.location, e.payload.path)
            , u = Qn(o.currentRoute.value)
            , h = () => {
                u.value = o.currentRoute.value
            }
            ;
        e.hook("page:finish", h),
            o.afterEach((S, v) => {
                var g, b, D, w;
                ((b = (g = S.matched[0]) == null ? void 0 : g.components) == null ? void 0 : b.default) === ((w = (D = v.matched[0]) == null ? void 0 : D.components) == null ? void 0 : w.default) && h()
            }
            );
        const m = {};
        for (const S in u.value)
            Object.defineProperty(m, S, {
                get: () => u.value[S],
                enumerable: !0
            });
        e._route = bt(m),
            e._middleware || (e._middleware = {
                global: [],
                named: {}
            });
        const d = ga();
        o.afterEach(async (S, v, g) => {
            delete e._processingMiddleware,
                !e.isHydrating && d.value && await e.runWithContext(gp),
                g && await e.callHook("page:loading:end")
        }
        );
        try {
            [t, n] = bn(() => o.isReady()),
                await t,
                n()
        } catch (S) {
            [t, n] = bn(() => e.runWithContext(() => hn(S))),
                await t,
                n()
        }
        const _ = c !== o.currentRoute.value.fullPath ? o.resolve(c) : o.currentRoute.value;
        h();
        const y = e.payload.state._layout;
        return o.beforeEach(async (S, v) => {
            var g;
            await e.callHook("page:loading:start"),
                S.meta = St(S.meta),
                e.isHydrating && y && !Et(S.meta.layout) && (S.meta.layout = y),
                e._processingMiddleware = !0;
            {
                const b = new Set([...Ef, ...e._middleware.global]);
                for (const D of S.matched) {
                    const w = D.meta.middleware;
                    if (w)
                        for (const R of rr(w))
                            b.add(R)
                }
                {
                    const D = await e.runWithContext(() => tr({
                        path: S.path
                    }));
                    if (D.appMiddleware)
                        for (const w in D.appMiddleware)
                            D.appMiddleware[w] ? b.add(w) : b.delete(w)
                }
                for (const D of b) {
                    const w = typeof D == "string" ? e._middleware.named[D] || await ((g = qn[D]) == null ? void 0 : g.call(qn).then(z => z.default || z)) : D;
                    if (!w)
                        throw new Error(`Unknown route middleware: '${D}'.`);
                    const R = await e.runWithContext(() => w(S, v));
                    if (!e.payload.serverRendered && e.isHydrating && (R === !1 || R instanceof Error)) {
                        const z = R || di({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${c}`
                        });
                        return await e.runWithContext(() => hn(z)),
                            !1
                    }
                    if (R !== !0 && (R || R === !1))
                        return R
                }
            }
        }
        ),
            o.onError(async () => {
                delete e._processingMiddleware,
                    await e.callHook("page:loading:end")
            }
            ),
            o.afterEach(async (S, v) => {
                S.matched.length === 0 && await e.runWithContext(() => hn(di({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${S.fullPath}`,
                    data: {
                        path: S.fullPath
                    }
                })))
            }
            ),
            e.hooks.hookOnce("app:created", async () => {
                try {
                    "name" in _ && (_.name = void 0),
                        await o.replace({
                            ..._,
                            force: !0
                        }),
                        o.options.scrollBehavior = $e.scrollBehavior
                } catch (S) {
                    await e.runWithContext(() => hn(S))
                }
            }
            ),
        {
            provide: {
                router: o
            }
        }
    }
});
function Oo(e) {
    return typeof e == "string" ? `'${e}'` : new Nf().serialize(e)
}
const Nf = function () {
    var t;
    class e {
        constructor() {
            hr(this, t, new Map)
        }
        compare(l, a) {
            const i = typeof l
                , r = typeof a;
            return i === "string" && r === "string" ? l.localeCompare(a) : i === "number" && r === "number" ? l - a : String.prototype.localeCompare.call(this.serialize(l, !0), this.serialize(a, !0))
        }
        serialize(l, a) {
            if (l === null)
                return "null";
            switch (typeof l) {
                case "string":
                    return a ? l : `'${l}'`;
                case "bigint":
                    return `${l}n`;
                case "object":
                    return this.$object(l);
                case "function":
                    return this.$function(l)
            }
            return String(l)
        }
        serializeObject(l) {
            const a = Object.prototype.toString.call(l);
            if (a !== "[object Object]")
                return this.serializeBuiltInType(a.length < 10 ? `unknown:${a}` : a.slice(8, -1), l);
            const i = l.constructor
                , r = i === Object || i === void 0 ? "" : i.name;
            if (r !== "" && globalThis[r] === i)
                return this.serializeBuiltInType(r, l);
            if (typeof l.toJSON == "function") {
                const o = l.toJSON();
                return r + (o !== null && typeof o == "object" ? this.$object(o) : `(${this.serialize(o)})`)
            }
            return this.serializeObjectEntries(r, Object.entries(l))
        }
        serializeBuiltInType(l, a) {
            const i = this["$" + l];
            if (i)
                return i.call(this, a);
            if (typeof (a == null ? void 0 : a.entries) == "function")
                return this.serializeObjectEntries(l, a.entries());
            throw new Error(`Cannot serialize ${l}`)
        }
        serializeObjectEntries(l, a) {
            const i = Array.from(a).sort((o, s) => this.compare(o[0], s[0]));
            let r = `${l}{`;
            for (let o = 0; o < i.length; o++) {
                const [s, c] = i[o];
                r += `${this.serialize(s, !0)}:${this.serialize(c)}`,
                    o < i.length - 1 && (r += ",")
            }
            return r + "}"
        }
        $object(l) {
            let a = An(this, t).get(l);
            return a === void 0 && (An(this, t).set(l, `#${An(this, t).size}`),
                a = this.serializeObject(l),
                An(this, t).set(l, a)),
                a
        }
        $function(l) {
            const a = Function.prototype.toString.call(l);
            return a.slice(-15) === "[native code] }" ? `${l.name || ""}()[native]` : `${l.name}(${l.length})${a.replace(/\s*\n\s*/g, "")}`
        }
        $Array(l) {
            let a = "[";
            for (let i = 0; i < l.length; i++)
                a += this.serialize(l[i]),
                    i < l.length - 1 && (a += ",");
            return a + "]"
        }
        $Date(l) {
            try {
                return `Date(${l.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(l) {
            return `ArrayBuffer[${new Uint8Array(l).join(",")}]`
        }
        $Set(l) {
            return `Set${this.$Array(Array.from(l).sort((a, i) => this.compare(a, i)))}`
        }
        $Map(l) {
            return this.serializeObjectEntries("Map", l.entries())
        }
    }
    t = new WeakMap;
    for (const n of ["Error", "RegExp", "URL"])
        e.prototype["$" + n] = function (l) {
            return `${n}(${l})`
        }
            ;
    for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"])
        e.prototype["$" + n] = function (l) {
            return `${n}[${l.join(",")}]`
        }
            ;
    for (const n of ["BigInt64Array", "BigUint64Array"])
        e.prototype["$" + n] = function (l) {
            return `${n}[${l.join("n,")}${l.length > 0 ? "n" : ""}]`
        }
            ;
    return e
}();
function zf(e, t) {
    return e === t || Oo(e) === Oo(t)
}
const Ci = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
        , n = {
            didTimeout: !1,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
        };
    return setTimeout(() => {
        e(n)
    }
        , 1)
}
)
    , Gf = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }
    )
    , ba = e => {
        const t = ge();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            Ci(() => e())
        }
        ) : Ci(() => e())
    }
    , Uf = "$s";
function Wf(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, l] = e;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (l !== void 0 && typeof l != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + l);
    const a = Uf + n
        , i = ge()
        , r = fs(i.payload.state, a);
    if (r.value === void 0 && l) {
        const o = l();
        if (be(o))
            return i.payload.state[a] = o,
                o;
        r.value = o
    }
    return r
}
function jf(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
        , l = t || {}
        , a = l.decode || qf;
    let i = 0;
    for (; i < e.length;) {
        const r = e.indexOf("=", i);
        if (r === -1)
            break;
        let o = e.indexOf(";", i);
        if (o === -1)
            o = e.length;
        else if (o < r) {
            i = e.lastIndexOf(";", r - 1) + 1;
            continue
        }
        const s = e.slice(i, r).trim();
        if (l != null && l.filter && !(l != null && l.filter(s))) {
            i = o + 1;
            continue
        }
        if (n[s] === void 0) {
            let c = e.slice(r + 1, o).trim();
            c.codePointAt(0) === 34 && (c = c.slice(1, -1)),
                n[s] = $f(c, a)
        }
        i = o + 1
    }
    return n
}
function qf(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function $f(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
const Hl = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function ko(e, t, n) {
    const l = n || {}
        , a = l.encode || encodeURIComponent;
    if (typeof a != "function")
        throw new TypeError("option encode is invalid");
    if (!Hl.test(e))
        throw new TypeError("argument name is invalid");
    const i = a(t);
    if (i && !Hl.test(i))
        throw new TypeError("argument val is invalid");
    let r = e + "=" + i;
    if (l.maxAge !== void 0 && l.maxAge !== null) {
        const o = l.maxAge - 0;
        if (Number.isNaN(o) || !Number.isFinite(o))
            throw new TypeError("option maxAge is invalid");
        r += "; Max-Age=" + Math.floor(o)
    }
    if (l.domain) {
        if (!Hl.test(l.domain))
            throw new TypeError("option domain is invalid");
        r += "; Domain=" + l.domain
    }
    if (l.path) {
        if (!Hl.test(l.path))
            throw new TypeError("option path is invalid");
        r += "; Path=" + l.path
    }
    if (l.expires) {
        if (!Kf(l.expires) || Number.isNaN(l.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        r += "; Expires=" + l.expires.toUTCString()
    }
    if (l.httpOnly && (r += "; HttpOnly"),
        l.secure && (r += "; Secure"),
        l.priority)
        switch (typeof l.priority == "string" ? l.priority.toLowerCase() : l.priority) {
            case "low":
                {
                    r += "; Priority=Low";
                    break
                }
            case "medium":
                {
                    r += "; Priority=Medium";
                    break
                }
            case "high":
                {
                    r += "; Priority=High";
                    break
                }
            default:
                throw new TypeError("option priority is invalid")
        }
    if (l.sameSite)
        switch (typeof l.sameSite == "string" ? l.sameSite.toLowerCase() : l.sameSite) {
            case !0:
                {
                    r += "; SameSite=Strict";
                    break
                }
            case "lax":
                {
                    r += "; SameSite=Lax";
                    break
                }
            case "strict":
                {
                    r += "; SameSite=Strict";
                    break
                }
            case "none":
                {
                    r += "; SameSite=None";
                    break
                }
            default:
                throw new TypeError("option sameSite is invalid")
        }
    return l.partitioned && (r += "; Partitioned"),
        r
}
function Kf(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function et(e) {
    if (typeof e != "object")
        return e;
    var t, n, l = Object.prototype.toString.call(e);
    if (l === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = et(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: et(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = et(e[t])
        }
        return n
    }
    if (l === "[object Array]") {
        for (t = e.length,
            n = Array(t); t--;)
            n[t] = et(e[t]);
        return n
    }
    return l === "[object Set]" ? (n = new Set,
        e.forEach(function (a) {
            n.add(et(a))
        }),
        n) : l === "[object Map]" ? (n = new Map,
            e.forEach(function (a, i) {
                n.set(et(i), et(a))
            }),
            n) : l === "[object Date]" ? new Date(+e) : l === "[object RegExp]" ? (n = new RegExp(e.source, e.flags),
                n.lastIndex = e.lastIndex,
                n) : l === "[object DataView]" ? new e.constructor(et(e.buffer)) : l === "[object ArrayBuffer]" ? e.slice(0) : l.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const Jf = {
    path: "/",
    watch: !0,
    decode: e => nl(decodeURIComponent(e)),
    encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
}
    , wl = window.cookieStore;
function Qf(e, t) {
    var s;
    const n = {
        ...Jf,
        ...t
    };
    n.filter ?? (n.filter = c => c === e);
    const l = Fo(n) || {};
    let a;
    n.maxAge !== void 0 ? a = n.maxAge * 1e3 : n.expires && (a = n.expires.getTime() - Date.now());
    const i = a !== void 0 && a <= 0
        , r = et(i ? void 0 : l[e] ?? ((s = n.default) == null ? void 0 : s.call(n)))
        , o = a && !i ? ey(r, a, n.watch && n.watch !== "shallow") : Xe(r);
    {
        let c = null;
        try {
            !wl && typeof BroadcastChannel < "u" && (c = new BroadcastChannel(`nuxt:cookies:${e}`))
        } catch { }
        const u = () => {
            n.readonly || zf(o.value, l[e]) || (Zf(e, o.value, n),
                l[e] = et(o.value),
                c == null || c.postMessage({
                    value: n.encode(o.value)
                }))
        }
            , h = _ => {
                var C;
                const y = _.refresh ? (C = Fo(n)) == null ? void 0 : C[e] : n.decode(_.value);
                m = !0,
                    o.value = y,
                    l[e] = et(y),
                    zt(() => {
                        m = !1
                    }
                    )
            }
            ;
        let m = !1;
        const d = !!la();
        if (d && za(() => {
            m = !0,
                u(),
                c == null || c.close()
        }
        ),
            wl) {
            const _ = y => {
                const C = y.changed.find(v => v.name === e)
                    , S = y.deleted.find(v => v.name === e);
                C && h({
                    value: C.value
                }),
                    S && h({
                        value: null
                    })
            }
                ;
            wl.addEventListener("change", _),
                d && za(() => wl.removeEventListener("change", _))
        } else
            c && (c.onmessage = ({ data: _ }) => h(_));
        n.watch ? Vt(o, () => {
            m || u()
        }
            , {
                deep: n.watch !== "shallow"
            }) : u()
    }
    return o
}
function Fo(e = {}) {
    return jf(document.cookie, e)
}
function Yf(e, t, n = {}) {
    return t == null ? ko(e, t, {
        ...n,
        maxAge: -1
    }) : ko(e, t, n)
}
function Zf(e, t, n = {}) {
    document.cookie = Yf(e, t, n)
}
const Vo = 2147483647;
function ey(e, t, n) {
    let l, a, i = 0;
    const r = n ? Xe(e) : {
        value: e
    };
    return la() && za(() => {
        a == null || a(),
            clearTimeout(l)
    }
    ),
        qc((o, s) => {
            n && (a = Vt(r, s));
            function c() {
                i = 0,
                    clearTimeout(l);
                const u = t - i
                    , h = u < Vo ? u : Vo;
                l = setTimeout(() => {
                    if (i += h,
                        i < t)
                        return c();
                    r.value = void 0,
                        s()
                }
                    , h)
            }
            return {
                get() {
                    return o(),
                        r.value
                },
                set(u) {
                    c(),
                        r.value = u,
                        s()
                }
            }
        }
        )
}
async function lc(e, t = Fe()) {
    const { path: n, matched: l } = t.resolve(e);
    if (!l.length || (t._routePreloaded || (t._routePreloaded = new Set),
        t._routePreloaded.has(n)))
        return;
    const a = t._preloadPromises || (t._preloadPromises = []);
    if (a.length > 4)
        return Promise.all(a).then(() => lc(e, t));
    t._routePreloaded.add(n);
    const i = l.map(r => {
        var o;
        return (o = r.components) == null ? void 0 : o.default
    }
    ).filter(r => typeof r == "function");
    for (const r of i) {
        const o = Promise.resolve(r()).catch(() => { }
        ).finally(() => a.splice(a.indexOf(o)));
        a.push(o)
    }
    await Promise.all(a)
}
function ty(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = nl(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch { }
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch { }
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: ge().payload.state
                }))
            } catch { }
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const ny = (...e) => e.find(t => t !== void 0);
function ly(e) {
    const t = e.componentName || "NuxtLink";
    function n(i) {
        return typeof i == "string" && i.startsWith("#")
    }
    function l(i, r) {
        if (!i || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return i;
        if (typeof i == "string")
            return Eo(i, e.trailingSlash);
        const o = "path" in i && i.path !== void 0 ? i.path : r(i).path;
        return {
            ...i,
            name: void 0,
            path: Eo(o, e.trailingSlash)
        }
    }
    function a(i) {
        const r = Fe()
            , o = Tn()
            , s = ye(() => !!i.target && i.target !== "_self")
            , c = ye(() => {
                const C = i.to || i.href || "";
                return typeof C == "string" && dt(C, {
                    acceptRelative: !0
                })
            }
            )
            , u = Dr("RouterLink")
            , h = u && typeof u != "string" ? u.useLink : void 0
            , m = ye(() => {
                if (i.external)
                    return !0;
                const C = i.to || i.href || "";
                return typeof C == "object" ? !1 : C === "" || c.value
            }
            )
            , d = ye(() => {
                const C = i.to || i.href || "";
                return m.value ? C : l(C, r.resolve)
            }
            )
            , _ = m.value || h == null ? void 0 : h({
                ...i,
                to: d
            })
            , y = ye(() => {
                var C;
                if (!d.value || c.value || n(d.value))
                    return d.value;
                if (m.value) {
                    const S = typeof d.value == "object" && "path" in d.value ? pi(d.value) : d.value
                        , v = typeof S == "object" ? r.resolve(S).href : S;
                    return l(v, r.resolve)
                }
                return typeof d.value == "object" ? ((C = r.resolve(d.value)) == null ? void 0 : C.href) ?? null : l(pa(o.app.baseURL, d.value), r.resolve)
            }
            );
        return {
            to: d,
            hasTarget: s,
            isAbsoluteUrl: c,
            isExternal: m,
            href: y,
            isActive: (_ == null ? void 0 : _.isActive) ?? ye(() => d.value === r.currentRoute.value.path),
            isExactActive: (_ == null ? void 0 : _.isExactActive) ?? ye(() => d.value === r.currentRoute.value.path),
            route: (_ == null ? void 0 : _.route) ?? ye(() => r.resolve(d.value)),
            async navigate(C) {
                await pp(y.value, {
                    replace: i.replace,
                    external: m.value || s.value
                })
            }
        }
    }
    return Pe({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        useLink: a,
        setup(i, { slots: r }) {
            const o = Fe()
                , { to: s, href: c, navigate: u, isExternal: h, hasTarget: m, isAbsoluteUrl: d } = a(i)
                , _ = Xe(!1)
                , y = Xe(null)
                , C = g => {
                    var b;
                    y.value = i.custom ? (b = g == null ? void 0 : g.$el) == null ? void 0 : b.nextElementSibling : g == null ? void 0 : g.$el
                }
                ;
            function S(g) {
                var b, D;
                return !_.value && (typeof i.prefetchOn == "string" ? i.prefetchOn === g : ((b = i.prefetchOn) == null ? void 0 : b[g]) ?? ((D = e.prefetchOn) == null ? void 0 : D[g])) && (i.prefetch ?? e.prefetch) !== !1 && i.noPrefetch !== !0 && i.target !== "_blank" && !oy()
            }
            async function v(g = ge()) {
                if (_.value)
                    return;
                _.value = !0;
                const b = typeof s.value == "string" ? s.value : h.value ? pi(s.value) : o.resolve(s.value).fullPath
                    , D = h.value ? new URL(b, window.location.href).href : b;
                await Promise.all([g.hooks.callHook("link:prefetch", D).catch(() => { }
                ), !h.value && !m.value && lc(s.value, o).catch(() => { }
                )])
            }
            if (S("visibility")) {
                const g = ge();
                let b, D = null;
                sa(() => {
                    const w = iy();
                    ba(() => {
                        b = Ci(() => {
                            var R;
                            (R = y == null ? void 0 : y.value) != null && R.tagName && (D = w.observe(y.value, async () => {
                                D == null || D(),
                                    D = null,
                                    await v(g)
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                    ul(() => {
                        b && Gf(b),
                            D == null || D(),
                            D = null
                    }
                    )
            }
            return () => {
                var D;
                if (!h.value && !m.value && !n(s.value)) {
                    const w = {
                        ref: C,
                        to: s.value,
                        activeClass: i.activeClass || e.activeClass,
                        exactActiveClass: i.exactActiveClass || e.exactActiveClass,
                        replace: i.replace,
                        ariaCurrentValue: i.ariaCurrentValue,
                        custom: i.custom
                    };
                    return i.custom || (S("interaction") && (w.onPointerenter = v.bind(null, void 0),
                        w.onFocus = v.bind(null, void 0)),
                        _.value && (w.class = i.prefetchedClass || e.prefetchedClass),
                        w.rel = i.rel || void 0),
                        He(Dr("RouterLink"), w, r.default)
                }
                const g = i.target || null
                    , b = ny(i.noRel ? "" : i.rel, e.externalRelAttribute, d.value || m.value ? "noopener noreferrer" : "") || null;
                return i.custom ? r.default ? r.default({
                    href: c.value,
                    navigate: u,
                    prefetch: v,
                    get route() {
                        if (!c.value)
                            return;
                        const w = new URL(c.value, window.location.href);
                        return {
                            path: w.pathname,
                            fullPath: w.pathname,
                            get query() {
                                return Ki(w.search)
                            },
                            hash: w.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: c.value
                        }
                    },
                    rel: b,
                    target: g,
                    isExternal: h.value || m.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : He("a", {
                    ref: y,
                    href: c.value || null,
                    rel: b,
                    target: g
                }, (D = r.default) == null ? void 0 : D.call(r))
            }
        }
    })
}
const ay = ly(Ym);
function Eo(e, t) {
    const n = t === "append" ? Ul : ma;
    return dt(e) && !e.startsWith("http") ? e : n(e, !0)
}
function iy() {
    const e = ge();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
        , l = (i, r) => (t || (t = new IntersectionObserver(o => {
            for (const s of o) {
                const c = n.get(s.target);
                (s.isIntersecting || s.intersectionRatio > 0) && c && c()
            }
        }
        )),
            n.set(i, r),
            t.observe(i),
            () => {
                n.delete(i),
                    t == null || t.unobserve(i),
                    n.size === 0 && (t == null || t.disconnect(),
                        t = null)
            }
        );
    return e._observer = {
        observe: l
    }
}
const ry = /2g/;
function oy() {
    const e = navigator.connection;
    return !!(e && (e.saveData || ry.test(e.effectiveType)))
}
function sy(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"),
        typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"),
        e.url && !dt(String(e.url), {
            acceptRelative: !0,
            strict: !1
        }) && (e.url = _m(String(e.url)));
    const t = Object.keys(e).sort((l, a) => l.localeCompare(a))
        , n = {};
    for (const l of t)
        n[l] = e[l];
    return n
}
function uy(e) {
    const n = [];
    function l(i) {
        if (!i || typeof i != "object" || Object.keys(i).length === 0)
            return () => { }
                ;
        i._context;
        const r = {};
        for (const s in i) {
            const c = i[s];
            typeof c < "u" && c !== "" && (r[s] = c)
        }
        let o;
        return Object.keys(r).filter(s => !s.startsWith("_")).length > 0 && (o = n.push(r)),
            () => {
                typeof o < "u" && n.splice(o - 1, 1)
            }
    }
    function a(i) {
        var o;
        const r = {};
        i != null && i.debug && (r._context = {}),
            r._priority = {};
        for (const s in n.sort((c, u) => (c._priority || 0) - (u._priority || 0)))
            for (const c in n[s]) {
                const u = c
                    , h = i != null && i.resolveRefs ? ps(n[s][c]) : n[s][c];
                !c.startsWith("_") && typeof h < "u" && h !== "" && (r[c] = h,
                    typeof n[s]._priority < "u" && n[s]._priority !== -1 && (r._priority[u] = n[s]._priority),
                    i != null && i.debug && (r._context[u] = ((o = n[s]._context) == null ? void 0 : o[u]) || n[s]._context || "anonymous"))
            }
        return i != null && i.skipNormalize ? r : sy(r)
    }
    return {
        stack: n,
        push: l,
        get: a
    }
}
const cy = Ne({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
        var l;
        const t = uy()
            , n = Wf("site-config");
        {
            const a = n.value || window.__NUXT_SITE_CONFIG__ || {};
            for (const i in a)
                i[0] !== "_" && t.push({
                    [i]: a[i],
                    _priority: ((l = a._priority) == null ? void 0 : l[i]) || -1
                })
        }
        return {
            provide: {
                nuxtSiteConfig: t
            }
        }
    }
})
    , hy = Ne({
        name: "nuxt:payload",
        setup(e) {
            const t = new Set;
            Fe().beforeResolve(async (n, l) => {
                if (n.path === l.path)
                    return;
                const a = await po(n.path);
                if (a) {
                    for (const i of t)
                        delete e.static.data[i];
                    for (const i in a.data)
                        i in e.static.data || t.add(i),
                            e.static.data[i] = a.data[i]
                }
            }
            ),
                ba(() => {
                    var n;
                    e.hooks.hook("link:prefetch", async l => {
                        const { hostname: a } = new URL(l, window.location.href);
                        a === window.location.hostname && await po(l).catch(() => {
                            console.warn("[nuxt] Error preloading payload for", l)
                        }
                        )
                    }
                    ),
                        ((n = navigator.connection) == null ? void 0 : n.effectiveType) !== "slow-2g" && setTimeout(ya, 1e3)
                }
                )
        }
    })
    , dy = Ne(() => {
        const e = Fe();
        ba(() => {
            e.beforeResolve(async () => {
                await new Promise(t => {
                    setTimeout(t, 100),
                        requestAnimationFrame(() => {
                            setTimeout(t, 0)
                        }
                        )
                }
                )
            }
            )
        }
        )
    }
    )
    , my = Ne(e => {
        let t;
        async function n() {
            const l = await ya();
            t && clearTimeout(t),
                t = setTimeout(n, to);
            try {
                const a = await $fetch(Ji("builds/latest.json") + `?${Date.now()}`);
                a.id !== l.id && e.hooks.callHook("app:manifest:update", a)
            } catch { }
        }
        ba(() => {
            t = setTimeout(n, to)
        }
        )
    }
    )
    , py = Ne({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Fe()
                , n = Tn()
                , l = new Set;
            t.beforeEach(() => {
                l.clear()
            }
            ),
                e.hook("app:chunkError", ({ error: i }) => {
                    l.add(i)
                }
                );
            function a(i) {
                const o = "href" in i && i.href[0] === "#" ? n.app.baseURL + i.href : pa(n.app.baseURL, i.fullPath);
                ty({
                    path: o,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(a)
            }
            ),
                t.onError((i, r) => {
                    l.has(i) && a(r)
                }
                )
        }
    })
    , gy = me(() => oe(() => import("./DeafIKxf.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , fy = me(() => oe(() => import("./D2ak3PJP.js"), __vite__mapDeps([10, 2]), import.meta.url).then(e => e.default || e.default || e))
    , yy = me(() => oe(() => import("./BvpaMv1a.js"), __vite__mapDeps([11, 2]), import.meta.url).then(e => e.default || e.default || e))
    , _y = me(() => oe(() => import("./CS-g7zjY.js"), __vite__mapDeps([12, 2]), import.meta.url).then(e => e.default || e.default || e))
    , by = me(() => oe(() => import("./BmkQuJYo.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Dy = me(() => oe(() => import("./DdD05i27.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , vy = me(() => oe(() => import("./CddyhTEr.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Sy = me(() => oe(() => import("./EXuF5EZO.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Cy = me(() => oe(() => import("./Bs4OnbTr.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Hy = me(() => oe(() => import("./D3Sv0rD_.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , wy = me(() => oe(() => import("./BibpMmr3.js"), __vite__mapDeps([13, 2]), import.meta.url).then(e => e.default || e.default || e))
    , My = me(() => oe(() => import("./Dtonb0-V.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Ty = me(() => oe(() => import("./Bt2JEX_t.js"), __vite__mapDeps([14, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Py = me(() => oe(() => import("./CNApiDpb.js"), __vite__mapDeps([15, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Ly = me(() => oe(() => import("./BvAj89F5.js"), __vite__mapDeps([16, 2]), import.meta.url).then(e => e.default || e.default || e))
    , By = me(() => oe(() => import("./-0sWrKKf.js"), __vite__mapDeps([17, 18]), import.meta.url).then(e => e.default || e.default || e))
    , Ay = me(() => oe(() => import("./D-sedwGN.js"), [], import.meta.url).then(e => e.default || e.default || e))
    , Ry = me(() => oe(() => import("./CtqZJDJm.js"), __vite__mapDeps([19, 2]), import.meta.url).then(e => e.default || e.default || e))
    , xy = me(() => oe(() => import("./ChGAnjNe.js"), __vite__mapDeps([20, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Oy = me(() => oe(() => import("./BICLjrRx.js"), __vite__mapDeps([21, 2]), import.meta.url).then(e => e.default || e.default || e))
    , ky = me(() => oe(() => import("./t4XrnFOr.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Fy = me(() => oe(() => import("./CkFwirpm.js"), __vite__mapDeps([23, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Vy = me(() => oe(() => import("./Cdv85P3w.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Ey = me(() => oe(() => import("./D-0UUjZf.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Iy = me(() => oe(() => import("./pqizCYm7.js"), __vite__mapDeps([26, 2]), import.meta.url).then(e => e.default || e.default || e))
    , Xy = [["ProseA", gy], ["ProseBlockquote", fy], ["ProseCode", yy], ["ProseEm", _y], ["ProseH1", by], ["ProseH2", Dy], ["ProseH3", vy], ["ProseH4", Sy], ["ProseH5", Cy], ["ProseH6", Hy], ["ProseHr", wy], ["ProseImg", My], ["ProseLi", Ty], ["ProseOl", Py], ["ProseP", Ly], ["ProsePre", By], ["ProseScript", Ay], ["ProseStrong", Ry], ["ProseTable", xy], ["ProseTbody", Oy], ["ProseTd", ky], ["ProseTh", Fy], ["ProseThead", Vy], ["ProseTr", Ey], ["ProseUl", Iy]]
    , Ny = Ne({
        name: "nuxt:global-components",
        setup(e) {
            for (const [t, n] of Xy)
                e.vueApp.component(t, n),
                    e.vueApp.component("Lazy" + t, n)
        }
    })
    , xt = {
        default: me(() => oe(() => import("./NYR0ENw1.js"), __vite__mapDeps([27, 9, 4, 2, 7]), import.meta.url).then(e => e.default || e))
    }
    , zy = Ne({
        name: "nuxt:prefetch",
        setup(e) {
            const t = Fe();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    var a;
                    const l = (a = n == null ? void 0 : n.meta) == null ? void 0 : a.layout;
                    l && typeof xt[l] == "function" && await xt[l]()
                }
                )
            }
            ),
                e.hooks.hook("link:prefetch", n => {
                    if (dt(n))
                        return;
                    const l = t.resolve(n);
                    if (!l)
                        return;
                    const a = l.meta.layout;
                    let i = rr(l.meta.middleware);
                    i = i.filter(r => typeof r == "string");
                    for (const r of i)
                        typeof qn[r] == "function" && qn[r]();
                    a && typeof xt[a] == "function" && xt[a]()
                }
                )
        }
    });
function Na(...e) {
    var t;
    (t = window.dataLayer) == null || t.push(arguments)
}
function Gy({ tags: e }) {
    window.dataLayer = window.dataLayer || [];
    for (const t of e)
        for (const n of t.initCommands ?? [])
            Na(...n);
    Na("js", new Date);
    for (const t of e)
        Na("config", t.id, t.config ?? {})
}
function Uy(e) {
    const t = te(e)
        , n = t.tags.filter(Boolean).map(l => typeof l == "string" ? {
            id: l
        } : l);
    if (t.id) {
        const { id: l, config: a, initCommands: i } = t;
        n.unshift({
            id: l,
            config: a,
            initCommands: i
        })
    }
    return n
}
const Wy = Ne({
    parallel: !0,
    setup() {
        const e = Tn().public.gtag
            , t = Uy(e);
        if (!t.length || (Gy({
            tags: t
        }),
            e.initMode === "manual"))
            return;
        const n = e.loadingStrategy === "async" ? "async" : "defer";
        er({
            link: [{
                rel: "preload",
                as: "script",
                href: Wl(e.url, {
                    id: t[0].id
                })
            }],
            script: [{
                src: Wl(e.url, {
                    id: t[0].id
                }),
                [n]: !0,
                "data-gtag": ""
            }]
        })
    }
})
    , jy = Ne(() => {
        const e = Qf("colorMode");
        return e.value || (e.value = "dark"),
        {
            provide: {
                colorMode: e,
                toggleColorMode: () => {
                    e.value === "light" ? e.value = "dark" : e.value = "light"
                }
            }
        }
    }
    )
    , qy = JSON.parse(`[{"id":0,"name":"None","image":"FX_HX_Category_None.png","shortName":"None","color":"0xffffff","models":[{"id":"None","name":"(empty block)","image":"FX_HX_None.png"}]},{"id":1,"name":"Distortion","image":"FX_HX_Category_Distortion.png","shortName":"Dist","color":"0xf5901e","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_DistKinkyBoost","name":"Kinky Boost","image":"FX_HX_DIST_KinkyBoost.png","params":[{"Drive":null},{"Boost":null},{"Bright":null}]},{"id":"HD2_DistDerangedMaster","name":"Deranged Master","image":"FX_HX_DIST_DerangedMaster.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Level":null}]},{"id":"HD2_DistMinotaur","name":"Minotaur","image":"FX_HX_DIST_Minotaur.png","params":[{"Gain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistTeemah","name":"Teemah!","image":"FX_HX_DIST_Teemah.png","params":[{"Gain":null},{"Bass":"Bass Cut"},{"Treble":"Treble Cut"},{"Clipping":null},{"Level":null}]},{"id":"HD2_DistHeirApparent","name":"Heir Apparent","image":"FX_HX_DIST_HeirApparent.png","params":[{"Gain":null},{"Tone":null},{"Presence":null},{"Clipping":null},{"GainMod":"Gain Mod"},{"Level":null},{"Voltage":null}]},{"id":"HD2_DistToneSovereign","name":"Tone Sovereign","image":"FX_HX_DIST_ToneSovereign.png","params":[{"Gain 1":null},{"Tone 1":null},{"Presence 1":null},{"Clipping 1":null},{"GainMod 1":"Gain Mod 1"},{"Level 1":null},{"Gain 2":null},{"Tone 2":null},{"Presence 2":null},{"Clipping 2":null},{"GainMod 2":"Gain Mod 2"},{"Level 2":null},{"Voltage":null}]},{"id":"HD2_DistAlpacaRouge","name":"Alpaca Rouge","image":"FX_HX_DIST_AlpacaRouge.png","params":[{"Drive":null},{"HiCut":"High Cut"},{"Volume":"Level"}]},{"id":"HD2_DistCompulsiveDrive","name":"Compulsive Drive","image":"FX_HX_DIST_Compulsive.png","params":[{"Gain":null},{"Tone":null},{"LPHP":"Peak Type"},{"Version":null},{"Level":null}]},{"id":"HD2_DistDhyanaDrive","name":"Dhyana Drive","image":"FX_HX_DIST_DhyanaDrive.png","params":[{"Gain":null},{"Voice":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistHorizonDrive","name":"Horizon Drive","image":"FX_HX_DIST_HorizonDrive.png","params":[{"Drive":null},{"Attack":null},{"Bright":null},{"Gate":null},{"Gate_Range":"Gate Range"},{"Level":null}]},{"id":"HD2_DistValveDriver","name":"Valve Driver","image":"FX_HX_DIST_ValveDriver.png","params":[{"Gain":null},{"Bass":null},{"Treble":null},{"Level":null}]},{"id":"HD2_DistTopSecretOD","name":"Top Secret OD","image":"FX_HX_DIST_TopSecretOD.png","params":[{"Gain":null},{"Level":null}]},{"id":"HD2_DistPrizeDrive","name":"Prize Drive","image":"FX_HX_DIST_PrizeDrive.png","params":[{"Drive":null},{"Spectrum":null},{"Level":null},{"Bass Cut":null},{"Voltage":null}]},{"id":"HD2_DistScream808","name":"Scream 808","image":"FX_HX_DIST_Scream808.png","params":[{"Gain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistPillars","name":"Pillars","image":"FX_HX_DIST_Pillars.png","params":[{"Gain":null},{"Tone":null},{"Level":null},{"Mode":null}]},{"id":"HD2_DistHedgehogD9","name":"Hedgehog D9","image":"FX_HX_DIST_HedgehogD9.png","params":[{"Gain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistStuporOD","name":"Stupor OD","image":"FX_HX_DIST_StuporOD.png","params":[{"Drive":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistDeezOneVintage","name":"Deez One Vintage","image":"FX_HX_DIST_DeezOneVintage.png","params":[{"Drive":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistDeezOneMod","name":"Deez One Mod","image":"FX_HX_DIST_DeezOneMod.png","params":[{"Drive":null},{"Tone":null},{"Level":null},{"Clipping":null}]},{"id":"HD2_DistRatatouilleDist","name":"Ratatouille Dist","image":"FX_HX_DIST_Ratatouille.png","params":[{"Gain":null},{"Filter":null},{"Level":null}]},{"id":"HD2_DistVerminDist","name":"Vermin Dist","image":"FX_HX_DIST_Vermin.png","params":[{"Gain":null},{"Filter":null},{"Level":null}]},{"id":"HD2_DistVitalDist","name":"Vital Dist","image":"FX_HX_DIST_VitalDist.png","params":[{"Gain":null},{"Filter":null},{"Level":null},{"Clipping":null},{"Octave":null}]},{"id":"HD2_DistVitalBoost","name":"Vital Boost","image":"FX_HX_DIST_VitalBoost.png","params":[{"Boost":null}]},{"id":"HD2_DistKWB","name":"KWB","image":"FX_HX_DIST_KWB.png","params":[{"Gain":null},{"PushDiode":"Push Diode"},{"PullDiode":"Pull Diode"},{"Bass":null},{"Treble":null},{"Level":null},{"Asym":"Asymmetry"}]},{"id":"HD2_DistLegendaryDrive","name":"Legendary Drive","image":"FX_HX_DIST_LegendaryGain.png","params":[{"Drive":null},{"Bass":null},{"Middle":null},{"Treble":null},{"Presence":null},{"Volume":"Level"}]},{"id":"HD2_DistSwedishChainsaw","name":"Swedish Chainsaw","image":"FX_HX_DIST_SwedishChainsaw.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Level":null}]},{"id":"HD2_DistArbitratorFuzz","name":"Arbitrator Fuzz","image":"FX_HX_DIST_Arbitrator.png","params":[{"Fuzz":null},{"Level":null}]},{"id":"HD2_DistPocketFuzz","name":"Pocket Fuzz","image":"FX_HX_DIST_PocketFuzz.png","params":[{"Drive":null},{"Level":null}]},{"id":"HD2_DistRamsHead","name":"Bighorn Fuzz","image":"FX_HX_DIST_BighornFuzz.png","params":[{"Sustain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistTriangleFuzz","name":"Triangle Fuzz","image":"FX_HX_DIST_Triangle.png","params":[{"Sustain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistDarkDoveFuzz","name":"Dark Dove Fuzz","image":"FX_HX_DIST_DarkDoveFuzz.png","params":[{"Sustain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistBallisticFuzz","name":"Ballistic Fuzz","image":"FX_HX_DIST_BallisticFuzz.png","params":[{"Sustain":null},{"Tone":null},{"Level":null}]},{"id":"HD2_DistIndustrialFuzz","name":"Industrial Fuzz","image":"FX_HX_DIST_Industrial.png","params":[{"Compress":null},{"Gate":null},{"Drive":null},{"Stability":null},{"Oscillator":null},{"Level":null}]},{"id":"HD2_DistTycoctaviaFuzz","name":"Tycoctavia Fuzz","image":"FX_HX_DIST_Tycotavia.png","params":[{"Fuzz":null},{"Level":null}]},{"id":"HD2_DistWringerFuzz","name":"Wringer Fuzz","image":"FX_HX_DIST_WringerFuzz.png","params":[{"Gain":null},{"Treble":null},{"Bass":null},{"Level":null},{"FuzzType":"Fuzz Type"}]},{"id":"HD2_DistThrifterFuzz","name":"Thrifter Fuzz","image":"FX_HX_DIST_ThrifterFuzz.png","params":[{"Drive":null},{"Attack":null},{"Notch Freq":null},{"Notch Gain":null},{"Thick":null},{"Level":null}]},{"id":"HD2_DistXenomorphFuzz","name":"Xenomorph Fuzz","image":"FX_HX_DIST_XenomorphFuzz.png","params":[{"Gain":null},{"Tone":null},{"Level":null},{"Clipping":null},{"OscLevel":"Osc Level"},{"OscTone":"Osc Tone"},{"MinFreq":"Min Freq"},{"MaxFreq":"Max Freq"},{"WaveShape":"Wave Shape"},{"Sensitivity":null}]},{"id":"HD2_DistMegaphone","name":"Megaphone","image":"FX_HX_DIST_Megaphone.png","params":[{"Grit":null},{"Tone":null},{"Focus":null},{"Space":null},{"Mix":null},{"Level":null}]},{"id":"HD2_DistBitcrusher","name":"Bitcrusher","image":"FX_HX_DIST_Bitcrusher.png","params":[{"Gain":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Mix":null},{"OpenThreshold":"Open"},{"CloseThreshold":"Close"},{"HoldTime":"Hold Time"},{"Decay":null}]},{"id":"HD2_DistAmpegScramblerOD","name":"Ampeg Scrambler","image":"FX_HX_DIST_AmpegScramblerOD.png","params":[{"Drive":null},{"Blend":null},{"Treble":null},{"Level":null}]},{"id":"HD2_DistZeroAmpBassDI","name":"ZeroAmp Bass DI","image":"FX_HX_DIST_ZeroAmpBassDI.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Presence":null},{"Blend":null},{"Level":null}]},{"id":"HD2_DistRegalBassDI","name":"Regal Bass DI","image":"FX_HX_DIST_RegalBassDI.png","params":[{"Bass":null},{"Treble":null},{"Low Cut":null},{"Volume":null}]},{"id":"HD2_DistObsidian7000","name":"Obsidian 7000","image":"FX_HX_DIST_Obisidian7000.png","params":[{"Drive":null},{"Level":null},{"Blend":null},{"Grunt":null},{"Attack":null},{"Master":null},{"Bass":null},{"LoMidFreq":"Lo Mid Freq"},{"LoMid":"Lo Mid"},{"HiMidFreq":"Hi Mid Freq"},{"HiMid":"Hi Mid"},{"Treble":null},{"Distortion":null}]},{"id":"HD2_DistClawthornDrive","name":"Clawthorn Drive","image":"FX_HX_DIST_ClawthornDrive.png","params":[{"ODGain":"OD Gain"},{"ODTone":"OD Tone"},{"ODLevel":"OD Level"},{"ODLowBoost":"Low Boost"},{"Fuzz":null},{"FuzzOct":"Fuzz Oct"},{"FuzzGain":"Fuzz Gain"},{"FuzzTone":"Fuzz Tone"},{"FuzzLevel":"Fuzz Level"}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_DistKinkyBoost","use_subcategory":4},{"id":"HD2_DistDerangedMaster","use_subcategory":4},{"id":"HD2_DistMinotaur","use_subcategory":4},{"id":"HD2_DistTeemah","use_subcategory":4},{"id":"HD2_DistHeirApparent","use_subcategory":4},{"id":"HD2_DistToneSovereign","use_subcategory":4},{"id":"HD2_DistAlpacaRouge","use_subcategory":4},{"id":"HD2_DistCompulsiveDrive","use_subcategory":4},{"id":"HD2_DistDhyanaDrive","use_subcategory":4},{"id":"HD2_DistHorizonDrive","use_subcategory":4},{"id":"HD2_DistValveDriver","use_subcategory":4},{"id":"HD2_DistTopSecretOD","use_subcategory":4},{"id":"HD2_DistPrizeDrive","use_subcategory":4},{"id":"HD2_DistScream808","use_subcategory":4},{"id":"HD2_DistPillars","use_subcategory":4},{"id":"HD2_DistHedgehogD9","use_subcategory":4},{"id":"HD2_DistStuporOD","use_subcategory":4},{"id":"HD2_DistDeezOneVintage","use_subcategory":4},{"id":"HD2_DistDeezOneMod","use_subcategory":4},{"id":"HD2_DistRatatouilleDist","use_subcategory":4},{"id":"HD2_DistVerminDist","use_subcategory":4},{"id":"HD2_DistVitalDist","use_subcategory":4},{"id":"HD2_DistVitalBoost","use_subcategory":4},{"id":"HD2_DistKWB","use_subcategory":4},{"id":"HD2_DistLegendaryDrive","use_subcategory":4},{"id":"HD2_DistSwedishChainsaw","use_subcategory":4},{"id":"HD2_DistArbitratorFuzz","use_subcategory":4},{"id":"HD2_DistPocketFuzz","use_subcategory":4},{"id":"HD2_DistRamsHead","use_subcategory":4},{"id":"HD2_DistTriangleFuzz","use_subcategory":4},{"id":"HD2_DistDarkDoveFuzz","use_subcategory":4},{"id":"HD2_DistBallisticFuzz","use_subcategory":4},{"id":"HD2_DistIndustrialFuzz","use_subcategory":4},{"id":"HD2_DistTycoctaviaFuzz","use_subcategory":4},{"id":"HD2_DistWringerFuzz","use_subcategory":4},{"id":"HD2_DistThrifterFuzz","use_subcategory":4},{"id":"HD2_DistXenomorphFuzz","use_subcategory":4},{"id":"HD2_DistMegaphone","use_subcategory":4},{"id":"HD2_DistBitcrusher","use_subcategory":4},{"id":"HD2_DistAmpegScramblerOD","use_subcategory":4},{"id":"HD2_DistZeroAmpBassDI","use_subcategory":4},{"id":"HD2_DistRegalBassDI","use_subcategory":4},{"id":"HD2_DistObsidian7000","use_subcategory":4},{"id":"HD2_DistClawthornDrive","use_subcategory":4}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_DM4TubeDrive","name":"Tube Drive","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4Screamer","name":"Screamer","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Tone":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4Overdrive","name":"Overdrive","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4ClassicDistortion","name":"Classic Dist","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Filter":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4HeavyDistortion","name":"Heavy Dist","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4ColorDrive","name":"Colordrive","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4BuzzSaw","name":"Buzz Saw","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4FacialFuzz","name":"Facial Fuzz","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4JumboFuzz","name":"Jumbo Fuzz","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4FuzzPi","name":"Fuzz Pi","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4JetFuzz","name":"Jet Fuzz","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Feedback":null},{"Tone":null},{"Rate":null},{"Output":null}]},{"id":"HD2_DM4Line6Drive","name":"L6 Drive","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4Line6Distortion","name":"L6 Distortion","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4SubOctFuzz","name":"Sub Oct Fuzz","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Sub":null},{"Treble":null},{"Output":null}]},{"id":"HD2_DM4OctaveFuzz","name":"Octave Fuzz","image":"FX_M_Distortion.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Output":null}]},{"id":"Line6BronzeMaster","name":"Bronze Master","image":"FX_M_Distortion.png","params":[{"Drive":null},{"tonality":"Tone"},{"mixture":"Blend"},{"Level":null}]},{"id":"KillerZ","name":"Killer Z","image":"FX_M_Distortion.png","params":[{"Dist":"Drive"},{"Contour":null},{"Gain":"Level"},{"Mid Amt":"Mid"},{"Mid Freq":null}]}]}]},{"id":2,"name":"Dynamics","image":"FX_HX_Category_Dynamics.png","shortName":"Dyn","color":"0xDDCC00","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_CompressorDeluxeComp","name":"Deluxe Comp","image":"FX_HX_DYN_DeluxeComp.png","meterInterval":6,"params":[{"Threshold":null},{"Ratio":null},{"Attack":null},{"Release":null},{"Mix":null},{"Level":null},{"Knee":null}]},{"id":"HD2_CompressorRedSqueeze","name":"Red Squeeze","image":"FX_HX_DYN_RedSqueeze.png","meterInterval":7,"params":[{"Sensitivity":null},{"Mix":null},{"Level":null}]},{"id":"HD2_CompressorKinkyComp","name":"Kinky Comp","image":"FX_HX_DYN_KinkyComp.png","meterInterval":7,"params":[{"Sensitivity":null},{"Mix":null},{"Attack":null},{"Release":null},{"Level":null}]},{"id":"HD2_CompressorOptoComp","name":"Ampeg Opto Comp","image":"FX_HX_DYN_AmpegOptoComp.png","meterInterval":7,"params":[{"Compression":"Compress"},{"Release":null},{"Blend":"Mix"},{"Level":null}]},{"id":"HD2_CompressorRochesterComp","name":"Rochester Comp","image":"FX_HX_DYN_RochesterComp.png","meterInterval":7,"params":[{"Gain":null},{"Threshold":null},{"Ratio":null},{"Attack":null},{"Release":null},{"Level":null},{"Knee":null},{"Mix":null}]},{"id":"HD2_CompressorLAStudioComp","name":"LA Studio Comp","image":"FX_HX_DYN_LAStudioComp.png","meterInterval":3,"params":[{"PeakReduction":"Peak Reduction"},{"Gain":null},{"Type":null},{"Emphasis":null},{"Mix":null},{"Level":null}]},{"id":"HD2_Compressor3BandComp","name":"3-Band Comp","image":"FX_HX_DYN_3-BandCompressor.png","meterInterval":7,"params":[{"Ratio":null},{"Attack":null},{"Release":null},{"Lo X Freq":null},{"Hi X Freq":null},{"Level":null},{"Lo Thresh":null},{"Lo Gain":null},{"Mid Thresh":null},{"Mid Gain":null},{"Hi Thresh":null},{"Hi Gain":null},{"Detector":null}]},{"id":"HD2_GateNoiseGate","name":"Noise Gate","image":"FX_HX_DYN_NoiseGate.png","meterInterval":15,"params":[{"Threshold":null},{"Decay":null},{"Level":null}]},{"id":"HD2_GateHardGate","name":"Hard Gate","image":"FX_HX_DYN_HardGate.png","meterInterval":15,"params":[{"OpenThreshold":"Open Threshold"},{"CloseThreshold":"Close Threshold"},{"HoldTime":"Hold Time"},{"Decay":null},{"Level":null}]},{"id":"HD2_GateHorizonGate","name":"Horizon Gate","image":"FX_HX_DYN_HorizonGate.png","meterInterval":15,"params":[{"Mode":null},{"Sensitivity":null},{"Gate Range":null},{"Level":null}]},{"id":"HD2_CompressorAutoSwell","name":"Autoswell","image":"FX_HX_DYN_AutoSwell.png","params":[{"Threshold":null},{"Rel Offset":null},{"Attack":null},{"Decay":null},{"Taper":null},{"Level":null}]},{"id":"VIC_FeedbackSim","name":"Feedbacker","image":"FX_HX_DYN_Feedbacker.png","params":[{"Gain":"Fdbk Gain"},{"FeedbackType":"Fdbk Type"},{"Attack":"Attack"},{"ReleaseTime":"Release"},{"DryCtrl":"Dry Kill"},{"DryLevel":"Dry Level"},{"Reference":null},{"SilenceThresh":"Silence Thr"},{"OnsetThresh":"Onset Thr"},{"OffsetThresh":"Offset Thr"},{"Retrigger":null},{"Trails":null}]},{"id":"HD2_CompressorTransientShaper","name":"Transient Shaper","image":"FX_HX_DYN_TransientShaper.png","hidden":true,"params":[{"Attack":null},{"Sustain":null},{"Gain":null},{"Sensitivity":null},{"Mix":null},{"Level":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_CompressorDeluxeComp","use_subcategory":4},{"id":"HD2_CompressorRedSqueeze","use_subcategory":4},{"id":"HD2_CompressorKinkyComp","use_subcategory":4},{"id":"HD2_CompressorOptoComp","use_subcategory":4},{"id":"HD2_CompressorRochesterComp","use_subcategory":4},{"id":"HD2_CompressorLAStudioComp","use_subcategory":4},{"id":"HD2_Compressor3BandComp","use_subcategory":4},{"id":"HD2_GateNoiseGate","use_subcategory":4},{"id":"HD2_GateHardGate","use_subcategory":4},{"id":"HD2_GateHorizonGate","use_subcategory":4},{"id":"HD2_CompressorAutoSwell","use_subcategory":4},{"id":"HD2_CompressorTransientShaper","use_subcategory":4}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_DM4TubeComp","name":"Tube Comp","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Thresh":null},{"Level":null}]},{"id":"HD2_DM4RedComp","name":"Red Comp","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Sustain":null},{"Level":null}]},{"id":"HD2_DM4BlueComp","name":"Blue Comp","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Sustain":null},{"Level":null}]},{"id":"HD2_DM4BlueCompTreb","name":"Blue Comp Treb","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Sustain":null},{"Level":null}]},{"id":"HD2_DM4VettaComp","name":"Vetta Comp","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Sens":null},{"Level":null}]},{"id":"HD2_DM4VettaJuice","name":"Vetta Juice","image":"FX_M_Dynamics.png","meterInterval":6,"params":[{"Amount":null},{"Level":null}]},{"id":"HD2_DM4BoostComp","name":"Boost Comp","image":"FX_M_Dynamics.png","meterInterval":7,"params":[{"Drive":null},{"Bass":null},{"Comp":null},{"Treble":null},{"Output":null}]}]}]},{"id":3,"name":"EQ","image":"FX_HX_Category_EQ.png","shortName":"EQ","color":"0xDDCC00","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_EQSimple3Band","name":"Simple EQ","image":"FX_HX_EQ_SimpleEQ.png","params":[{"LowGain":"Low Gain"},{"MidFreq":"Mid Freq"},{"MidGain":"Mid Gain"},{"HighGain":"High Gain"},{"Level":null}]},{"id":"HD2_EQLowCutHighCut","name":"Low and High Cut","image":"FX_HX_EQ_HiCutLowCut.png","params":[{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_EQLowShelfHighShelf","name":"Low/High Shelf","image":"FX_HX_EQ_LowShelfHighShelf.png","params":[{"LowGain":"Low Gain"},{"LowFreq":"Low Freq"},{"HighGain":"High Gain"},{"HighFreq":"High Freq"},{"Level":null}]},{"id":"HD2_EQParametric","name":"Parametric","image":"FX_HX_EQ_ParametricEQ.png","params":[{"LowFreq":"Low Freq"},{"LowQ":"Low Q"},{"LowGain":"Low Gain"},{"MidFreq":"Mid Freq"},{"MidQ":"Mid Q"},{"MidGain":"Mid Gain"},{"HighFreq":"High Freq"},{"HighQ":"High Q"},{"HighGain":"High Gain"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":"Level"}]},{"id":"HD2_EQSimpleTilt","name":"Tilt","image":"FX_HX_EQ_SimpleTilt.png","params":[{"Tilt":null},{"CenterFreq":"Center Freq"},{"Level":null}]},{"id":"HD2_EQGraphic10Band","name":"10 Band Graphic","image":"FX_HX_EQ_GraphicEQ.png","params":[{"31p25Hz":"31.25 Hz"},{"62p5Hz":"62.5 Hz"},{"125Hz":"125 Hz"},{"250Hz":"250 Hz"},{"500Hz":"500 Hz"},{"1kHz":"1 kHz"},{"2kHz":"2 kHz"},{"4kHz":"4 kHz"},{"8kHz":"8 kHz"},{"16kHz":"16 kHz"},{"Level":null}]},{"id":"HD2_CaliQ","name":"Cali Q Graphic","image":"FX_HX_EQ_CaliQGraphic.png","params":[{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"},{"Level":null}]},{"id":"L6SPB_AcousGtrSim","name":"Acoustic Sim","image":"FX_HX_EQ_AcousticSim.png","params":[{"Mode":null},{"Body":null},{"Top":null},{"Shimmer":null},{"Level":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_EQSimple3Band","use_subcategory":4},{"id":"HD2_EQLowCutHighCut","use_subcategory":4},{"id":"HD2_EQLowShelfHighShelf","use_subcategory":4},{"id":"HD2_EQParametric","use_subcategory":4},{"id":"HD2_EQSimpleTilt","use_subcategory":4},{"id":"HD2_EQGraphic10Band","use_subcategory":4},{"id":"HD2_CaliQ","use_subcategory":4},{"id":"L6SPB_AcousGtrSim","use_subcategory":4}]}]},{"id":4,"name":"Modulation","image":"FX_HX_Category_Modulation.png","shortName":"Mod","color":"0x0094E9","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_TremoloOpticalTrem","name":"Optical Trem","image":"FX_HX_MOD_OpticalTrem.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"Level":null}]},{"id":"HD2_Tremolo60sBiasTrem","name":"60s Bias Trem","image":"FX_HX_MOD_60sBiasTrem.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"Mode":null},{"Level":null}]},{"id":"HD2_TremoloTremolo","name":"Tremolo","image":"FX_HX_MOD_Tremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"WaveShape":"Wave Shape"},{"DutyCycle":"Duty Cycle"},{"Level":null}]},{"id":"HD2_TremoloHarmonic","name":"Harmonic Tremolo","image":"FX_HX_MOD_HarmonicTremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"WaveShape":"Wave Shape"},{"DutyCycle":"Duty Cycle"},{"BassFreq":"Bass Freq"},{"TrebFreq":"Treb Freq"},{"Level":null},{"Mix":null}]},{"id":"HD2_TremoloPattern","name":"Bleat Chop Trem","image":"FX_HX_MOD_PatternTremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"WaveShape":"Wave Shape"},{"Step1":"Step 1"},{"Step2":"Step 2"},{"Step3":"Step 3"},{"Step4":"Step 4"},{"Depth":null},{"Level":null}]},{"id":"HD2_PhaserScriptModPhase","name":"Script Mod Phase","image":"FX_HX_MOD_ScriptModPhase.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Mix":null},{"Level":null}]},{"id":"HD2_PhaserPebblePhaser","name":"Pebble Phaser","image":"FX_HX_MOD_PebblePhaser.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Rate"},{"Rate":null}],{"Color":null},{"Level":null}]},{"id":"HD2_PhaserUbiquitousVibe","name":"Ubiquitous Vibe","image":"FX_HX_MOD_UbiquitousVibe.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Intensity":null},{"Mode":null},{"LampBias":"Lamp Bias"},{"Mix":null},{"Level":null}]},{"id":"VIC_FlexoVibe","name":"FlexoVibe","image":"FX_HX_MOD_FlexoVibe.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":"Rate"}],{"Intensity":null},{"Warp":null},{"Mix":null},{"Level":null}]},{"id":"HD2_PhaserDeluxePhaser","name":"Deluxe Phaser","image":"FX_HX_MOD_DeluxePhaser.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Offset":null},{"Feedback":null},{"WaveShape":"Wave Shape"},{"Mix":null},{"Stages":null},{"Level":null}]},{"id":"HD2_FlangerGrayFlanger","name":"Gray Flanger","image":"FX_HX_MOD_GrayFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Width":null},{"Manual":null},{"Regen":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerHarmonicFlanger","name":"Harmonic Flanger","image":"FX_HX_MOD_HarmonicFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Width":null},{"Manual":null},{"Enhance":null},{"Harmonic":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerCourtesanFlange","name":"Courtesan Flange","image":"FX_HX_MOD_CourtesanFlange.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Range":null},{"Color":null},{"FilterMatrix":"Freeze LFO"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerDynamixFlanger","name":"Dynamix Flanger","image":"FX_HX_MOD_DynamixFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Control Select":null},{"Depth":null},{"Manual":null},{"Mix":null},{"Phasing":null},{"Recycle":null},{"CV Dynamics":null},{"Max Delay":null},{"CV Tracking":null},{"Env Lag":null},{"Env Input":null},{"CV Decay":null}]},{"id":"HD2_Chorus","name":"Chorus","image":"FX_HX_MOD_Chorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Predelay":null},{"WaveShape":"Wave Shape"},{"Tone":null},{"Mix":null},{"Level":null}]},{"id":"HD2_Chorus70sChorus","name":"70s Chorus","image":"FX_HX_MOD_70sChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Chorus)"},{"ChorusIntensity":"Chorus Rate"}],{"Mode":null},[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Vibrato)"},{"VibratoRate":"Vibrato Rate"}],{"VibratoDepth":"Vibrato Depth"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_ChorusPlastiChorus","name":"PlastiChorus","image":"FX_HX_MOD_PlastiChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Mode":null},{"Tone":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_ChorusAmpegLiquifier","name":"Ampeg Liquifier","image":"FX_HX_MOD_AmpegLiquifier.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Mix":null},{"Level":null},{"Headroom":null},{"Mode":"Type"}]},{"id":"HD2_Chorus4Voice","name":"4-Voice Chorus","image":"FX_HX_MOD_4VoiceChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":"Rate"}],{"Depth":null},{"NumVoices":null},{"HPFFrq":"Low Cut"},{"HighShelf":"High Shelf"},{"Mix":null},{"Level":null}]},{"id":"HD2_VibratoBubbleVibrato","name":"Bubble Vibrato","image":"FX_HX_MOD_BubbleVibrato.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"RiseTime":"Rise Time"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_RetroReel","name":"Retro Reel","image":"FX_HX_MOD_RetroReel.png","params":[{"WowFluttr":"Wow Fluttr"},{"Saturation":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"TapeSpeed":"Tape Speed"},{"Level":null},{"Texture":null}]},{"id":"HD2_DelayDoubleDouble","name":"Double Take","image":"FX_HX_DELAY_DoubleTake.png","params":[{"Doubles":null},{"Slop":null},{"Sensitivity":null},{"Dry Level":null},{"Wet Level":null}]},{"id":"L6SPB_PolyChorus","name":"Poly Detune","image":"FX_HX_MOD_PolyChorus.png","params":[{"Blend":null},{"Detune":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_RingModulatorAMRingMod","name":"AM Ring Mod","image":"FX_HX_MOD_AMRingMod.png","params":[{"Frequency":null},{"AM":null},{"AMFreq":"AM Freq"},{"LFO":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"LFORate":"LFO Rate"}],{"LFOShape":"LFO Shape"},{"Mix":null},{"Level":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_TremoloOpticalTrem","name":"Optical Trem","image":"FX_HX_MOD_OpticalTrem.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"Spread":null},{"Level":null}]},{"id":"HD2_Tremolo60sBiasTrem","name":"60s Bias Trem","image":"FX_HX_MOD_60sBiasTrem.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"Mode":null},{"Spread":null},{"Level":null}]},{"id":"HD2_TremoloTremolo","name":"Tremolo/Autopan","image":"FX_HX_MOD_Tremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"WaveShape":"Wave Shape"},{"DutyCycle":"Duty Cycle"},{"Spread":null},{"Level":null}]},{"id":"HD2_TremoloHarmonic","name":"Harmonic Tremolo","image":"FX_HX_MOD_HarmonicTremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Intensity":null},{"WaveShape":"Wave Shape"},{"DutyCycle":"Duty Cycle"},{"BassFreq":"Bass Freq"},{"TrebFreq":"Treb Freq"},{"Level":null},{"Mix":null},{"Spread":null}]},{"id":"HD2_TremoloPattern","name":"Bleat Chop Trem","image":"FX_HX_MOD_PatternTremolo.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"WaveShape":"Wave Shape"},{"Step1":"Step 1"},{"Step2":"Step 2"},{"Step3":"Step 3"},{"Step4":"Step 4"},{"Spread":null},{"Depth":null},{"Level":null}]},{"id":"HD2_PhaserScriptModPhase","name":"Script Mod Phase","image":"FX_HX_MOD_ScriptModPhase.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Spread":null},{"Mix":null},{"Level":null}]},{"id":"HD2_PhaserPebblePhaser","name":"Pebble Phaser","image":"FX_HX_MOD_PebblePhaser.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Rate"},{"Rate":null}],{"Color":null},{"Spread":null},{"Level":null}]},{"id":"HD2_PhaserUbiquitousVibe","name":"Ubiquitous Vibe","image":"FX_HX_MOD_UbiquitousVibe.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Intensity":null},{"Mode":null},{"LampBias":"Lamp Bias"},{"Spread":null},{"Mix":null},{"Level":null}]},{"id":"VIC_FlexoVibe","name":"FlexoVibe","image":"FX_HX_MOD_FlexoVibe.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":"Rate"}],{"Intensity":null},{"Warp":null},{"PhaseOffset":"Spread"},{"Mix":null},{"Level":null}]},{"id":"HD2_PhaserDeluxePhaser","name":"Deluxe Phaser","image":"FX_HX_MOD_DeluxePhaser.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Offset":null},{"Feedback":null},{"WaveShape":"Wave Shape"},{"Mix":null},{"Stages":null},{"Spread":null},{"Level":null}]},{"id":"HD2_FlangerGrayFlanger","name":"Gray Flanger","image":"FX_HX_MOD_GrayFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Width":null},{"Manual":null},{"Regen":null},{"Spread":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerHarmonicFlanger","name":"Harmonic Flanger","image":"FX_HX_MOD_HarmonicFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Width":null},{"Manual":null},{"Enhance":null},{"Harmonic":null},{"Spread":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerCourtesanFlange","name":"Courtesan Flange","image":"FX_HX_MOD_CourtesanFlange.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Range":null},{"Color":null},{"FilterMatrix":"Freeze LFO"},{"Spread":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_FlangerDynamixFlanger","name":"Dynamix Flanger","image":"FX_HX_MOD_DynamixFlanger.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Control Select":null},{"Depth":null},{"Manual":null},{"Mix":null},{"Phasing":null},{"Recycle":null},{"CV Dynamics":null},{"Max Delay":null},{"CV Tracking":null},{"Env Lag":null},{"Env Input":null},{"CV Decay":null}]},{"id":"HD2_Chorus","name":"Chorus","image":"FX_HX_MOD_Chorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Predelay":null},{"WaveShape":"Wave Shape"},{"Tone":null},{"Spread":null},{"Mix":null},{"Level":null}]},{"id":"HD2_Chorus70sChorus","name":"70s Chorus","image":"FX_HX_MOD_70sChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Chorus)"},{"ChorusIntensity":"Chorus Rate"}],{"Mode":null},[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Vibrato)"},{"VibratoRate":"Vibrato Rate"}],{"VibratoDepth":"Vibrato Depth"},{"Spread":null},{"Stereo":null},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_ChorusPlastiChorus","name":"PlastiChorus","image":"FX_HX_MOD_PlastiChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Mode":null},{"Tone":null},{"Mix":null},{"Level":null},{"Headroom":null},{"Spread":null}]},{"id":"HD2_ChorusAmpegLiquifier","name":"Ampeg Liquifier","image":"FX_HX_MOD_AmpegLiquifier.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Mix":null},{"Level":null},{"Headroom":null},{"Mode":"Type"},{"Spread":null}]},{"id":"HD2_ChorusTrinityChorus","name":"Trinity Chorus","image":"FX_HX_MOD_TrinityChorus.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Left":"Left Depth"},{"Center":"Center Depth"},{"Right":"Right Depth"},{"Preset":"LFO Preset"},{"Manual":"LFO Manual"},{"LeftBoost":"Left Boost"},{"CenterBoost":"Center Boost"},{"RightBoost":"Right Boost"},{"Mode":null},{"Mix":null},{"Level":null}]},{"id":"HD2_Chorus4Voice","use_subcategory":4},{"id":"HD2_VibratoBubbleVibrato","name":"Bubble Vibrato","image":"FX_HX_MOD_BubbleVibrato.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"RiseTime":"Rise Time"},{"Mix":null},{"Level":null},{"Spread":null},{"Headroom":null}]},{"id":"HD2_RotaryVibeRotary","name":"Vibe Rotary","image":"FX_HX_MOD_VibeRotary.png","params":[{"Speed":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Slow)"},{"SlowSpeed":"Slow Speed"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Fast)"},{"FastSpeed":"Fast Speed"}],{"RampTime":"Ramp Time"},{"Drive":null},{"Blend":"Speaker Blend"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_Rotary122Rotary","name":"122 Rotary","image":"FX_HX_MOD_122Rotary.png","params":[{"Speed":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Slow)"},{"SlowSpeed":"Slow Speed"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Fast)"},{"FastSpeed":"Fast Speed"}],{"RampTime":"Ramp Time"},{"Drive":null},{"Blend":"Speaker Blend"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_Rotary145Rotary","name":"145 Rotary","image":"FX_HX_MOD_145Rotary.png","params":[{"Speed":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Slow)"},{"SlowSpeed":"Slow Speed"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Fast)"},{"FastSpeed":"Fast Speed"}],{"RampTime":"Ramp Time"},{"Drive":null},{"Blend":"Speaker Blend"},{"Mix":null},{"Level":null},{"Headroom":null}]},{"id":"HD2_Rotary3Rotor","name":"Triple Rotary","image":"FX_HX_MOD_TripleRotary.png","params":[{"Speed":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync (Slow)"},{"SlowSpeed":"Slow Speed"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync (Fast)"},{"FastSpeed":"Fast Speed"}],{"RampTime":"Ramp Time"},{"Mix":null},{"Level":null},{"Drive":null},{"Headroom":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Wobble":null},{"Separation":null},{"RotorFcDrift":"Rotor Drift"},{"Rotor2Level":"Rotor 2 Lvl"},{"Rotor3Level":"Rotor 3 Lvl"}]},{"id":"HD2_RetroReel","name":"Retro Reel","image":"FX_HX_MOD_RetroReel.png","params":[{"WowFluttr":"Wow Fluttr"},{"Saturation":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"TapeSpeed":"Tape Speed"},{"Level":null},{"Texture":null}]},{"id":"HD2_DelayDoubleDouble","name":"Double Take","image":"FX_HX_DELAY_DoubleTake.png","params":[{"Doubles":null},{"Slop":null},{"Sensitivity":null},{"Source":null},{"Dry Level":null},{"Wet Level":null}]},{"id":"HD2_RingModulatorAMRingMod","name":"AM Ring Mod","image":"FX_HX_MOD_AMRingMod.png","params":[{"Frequency":null},{"AM":null},{"AMFreq":"AM Freq"},{"LFO":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"LFORate":"LFO Rate"}],{"LFOShape":"LFO Shape"},{"Mix":null},{"Level":null}]},{"id":"HD2_RingModulatorPitchRingMod","name":"Pitch Ring Mod","image":"FX_HX_MOD_PitchRingMod.png","params":[{"Shape":null},{"DutyCycle":"Duty Cycle"},{"Octave":null},{"Pitch":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"FMAmount":"FM Amount"},{"FMShape":"FM Shape"},{"FMDuty":"FM Duty"},{"FMOctave":"FM Octave"},{"FMPitch":"FM Pitch"},{"Mix":null},{"Level":null}]}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_MM4PatternTrem","name":"Pattern Tremolo","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Step1":null},{"Step2":null},{"Step3":null},{"Step4":null},{"Level":null}]},{"id":"HD2_MM4Panner","name":"Panner","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Shape":null},{"VolSen":"Vol Sens"},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4BiasTremolo","name":"Bias Tremolo","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Shape":null},{"Volsens":"Vol Sens"},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4OptoTremolo","name":"Opto Tremolo","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Shape":null},{"VolSens":"Vol Sens"},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4ScriptPhase","name":"Script Phase","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Level":null}]},{"id":"HD2_MM4PannedPhaser","name":"Panned Phaser","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Pan":null},{"Pan Speed":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4BarberpolePhaser","name":"Barberpole","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Feedback":null},{"Mode":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4DualPhaser","name":"Dual Phaser","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Feedback":null},{"LFOShape":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4UVibe","name":"U-Vibe","image":"FX_M_Modulation.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Feedback":null},{"VolSens":"Vol Sens"},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4Phaser","name":"Phaser","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Feedback":null},{"Stage":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4PitchVibrato","name":"Pitch Vibrato","image":"FX_M_Modulation.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Rise":null},{"Volsens":"Vol Sens"},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4Dimension","name":"Dimension","image":"FX_M_Modulation.png","stereo":true,"params":[{"SW1":null},{"SW2":null},{"SW3":null},{"SW4":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4AnalogChorus","name":"Analog Chorus","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"CH Vib":"Mode"},{"Tone":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4TriChorus","name":"Tri Chorus","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth1":null},{"Depth2":null},{"Depth3":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4AnalogFlanger","name":"Analog Flanger","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Feedback":null},{"Manual":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4JetFlanger","name":"Jet Flanger","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Feedback":null},{"Manual":null},{"Mix":null},{"Level":null}]},{"id":"HD2_M13ACFlanger","name":"AC Flanger","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Width":null},{"Regen":null},{"Manual":null},{"Level":null}]},{"id":"HD2_M1380AFlanger","name":"80A Flanger","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Range":null},{"Enhance":null},{"Manual":null},{"Harmonic":null},{"Level":null}]},{"id":"HD2_MM4FrequencyShifter","name":"Frequency Shift","image":"FX_M_Modulation.png","stereo":true,"params":[{"Speed":null},{"Mode":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4RingModulator","name":"Ring Modulator","image":"FX_M_Modulation.png","stereo":true,"params":[{"Speed":null},{"Depth":null},{"Shape":null},{"AM/FM":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4RotaryDrum","name":"Rotary Drum","image":"FX_M_Modulation.png","stereo":true,"params":[{"Speed":null},{"Depth":null},{"Tone":null},{"Drive":null},{"Mix":null},{"Level":null}]},{"id":"HD2_MM4RotaryDrumHorn","name":"Rotary Drum/Horn","image":"FX_M_Modulation.png","stereo":true,"params":[{"Speed":null},{"Depth":null},{"Horn Depth":null},{"Drive":null},{"Mix":null},{"Level":null}]},{"id":"TapeEater","name":"Tape Eater","image":"FX_M_Modulation.png","stereo":true,"params":[{"Feedback":null},{"Flutter":null},{"Dist":"Distortion"},{"Mix":null},{"Level":null}]},{"id":"Warble_Matic","name":"Warble Matic","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Range":"Depth"},{"Q":null},{"Mix":null},{"Level":null}]},{"id":"SampleAndHold","name":"Random S&H","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Range":"Depth"},{"Q":null},{"Mix":null},{"Level":null}]},{"id":"Sweeper","name":"Sweeper","image":"FX_M_Modulation.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Depth":null},{"Q":null},{"Range":"Frequency"},{"Mix":null},{"Level":null}]}]}]},{"id":5,"name":"Delay","image":"FX_HX_Category_Delay.png","shortName":"Delay","color":"0x00CC00","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_DelaySimpleDelay","name":"Simple Delay","image":"FX_HX_DELAY_Simple.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DelayModChorusEcho","name":"Mod/Chorus Echo","image":"FX_HX_DELAY_ModChorusEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Speed":null},{"Depth":null},{"ModulationMode":"Modulation Mode"},{"@trails":"Trails"}]},{"id":"HD2_DelaySweepEcho","name":"Sweep Echo","image":"FX_HX_DELAY_SweepEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"FilterType":"Filter"},{"SweepShape":"Shape"},{"SweepSpeed":"Rate"},{"SweepStart":"Start Frequency"},{"SweepDepth":"Range"},{"SweepResonance":"Resonance"},{"SweepSymmetry":"Duty Cycle"},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayDuckedDelay","name":"Ducked Delay","image":"FX_HX_DELAY_DuckedDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Threshold":null},{"Ducking":null},{"DynAttack":"Dynamic Attack"},{"DynRel":"Dynamic Release"},{"DynType":"Dynamic Type"},{"@trails":"Trails"}]},{"id":"HD2_DelayReverseDelay","name":"Reverse Delay","image":"FX_HX_DELAY_ReverseDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"ModulationMode":"Modulation Mode"},{"Speed":null},{"Depth":null},{"@trails":"Trails"}]},{"id":"HD2_DelayVintageDigital","name":"Vintage Digital","image":"FX_HX_DELAY_VintageDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"@trails":"Trails"}],"hidden":true},{"id":"HD2_DelayVintageDigitalV2","name":"Vintage Digital","image":"FX_HX_DELAY_VintageDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelaySwellVintageDigital","name":"Vintage Swell","image":"FX_HX_DELAY_VintageSwell.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Headroom":null},{"Threshold":null},{"Attack":null},{"@trails":"Trails"}]},{"id":"HD2_DelayPitch","name":"Pitch Echo","image":"FX_HX_DELAY_PitchEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Interval1":"Interval"},{"Cents1":"Cents"},{"Mix":null},{"Level":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]},{"id":"HD2_DelayTransistorTape","name":"Transistor Tape","image":"FX_HX_DELAY_TransistorTape.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"WowFlutter":"Wow Flutter"},{"Mix":null},{"Level":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayCosmosEcho","name":"Cosmos Echo","image":"FX_HX_DELAY_CosmosEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Ramp":null},{"Feedback":null},{"WowFlutter":"Wow/Flutter"},{"Mix":null},{"Level":null},{"Headroom":null},{"Mode":null},{"Bass":null},{"Treble":null},{"FBTone":null},{"Splice":null},{"DryThru":"Dry Thru"},{"@trails":"Trails"}]},{"id":"HD2_DelayBucketBrigade","name":"Bucket Brigade","image":"FX_HX_DELAY_BucketBrigade.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Noise":null},{"Mix":null},{"Level":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayAdriaticDelay","name":"Adriatic Delay","image":"FX_HX_DELAY_AdriaticDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Noise":null},{"BBD Size":null},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelaySwellAdriatic","name":"Adriatic Swell","image":"FX_HX_DELAY_AdriaticSwell.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Noise":null},{"BBD Size":null},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Headroom":null},{"Threshold":null},{"Attack":null},{"@trails":"Trails"}]},{"id":"HD2_DelayElephantMan","name":"Elephant Man","image":"FX_HX_DELAY_ElephantMan.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Mode":null},{"Depth":null},{"Mix":null},{"Level":null},{"Noise":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayMultiPass","name":"Multi Pass","image":"FX_HX_DELAY_Multipass.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Pattern":null},{"Mode":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DelayHeliosphere","name":"Heliosphere","image":"FX_HX_DELAY_Heliosphere.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Rate":null},{"Depth":null},{"Mix":null},{"Level":null},{"VerbMix":"Reverb Mix"},{"VerbDecay":"Reverb Decay"},{"Headroom":null},{"@trails":"Trails"}]},{"id":"L6SPB_InfSustain","name":"Poly Sustain","image":"FX_HX_DELAY_PolySustain.png","hidden":true,"params":[{"Interval":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Attack":null}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync"},{"Decay":null}],{"ModFreq":"Mod Freq"},{"ModDepth":"Mod Depth"},{"FX Level":null},{"RandDepth":null},{"RandSpeed":null},{"Level":null}]},{"id":"VIC_DelayPolySustain","name":"Poly Sustain","image":"FX_HX_DELAY_PolySustain.png","params":[{"Interval":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Attack":null}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync"},{"Decay":null}],{"ModFreq":"Mod Freq"},{"ModDepth":"Mod Depth"},{"FX Level":null},{"RandDepth":null},{"RandSpeed":null},{"Level":null},{"AutoEQ":"Auto EQ"},{"Operation":null}]},{"id":"Victoria_ShufflingDelay","name":"Glitch Delay","image":"FX_HX_DELAY_GlitchDelay.png","hidden":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Delay Div":null},{"Mix":null},{"Feedback":null},{"SliceFdbk":null},{"Shuffle":null},{"Octaves":null},{"Reverse":null},{"Seq Drift":null},{"Smoothing":null},{"@trails":"Trails"}]},{"id":"VIC_DelayGlitch","name":"Glitch Delay","image":"FX_HX_DELAY_GlitchDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Delay Div":null},{"Mix":null},{"Feedback":null},{"SliceFdbk":null},{"Shuffle":null},{"Pitch":null},{"Reverse":null},{"Seq Drift":null},{"Smoothing":null},{"Interval 1":null},{"Interval 2":null},{"Low Cut":null},{"High Cut":null},{"Level":null},{"@trails":"Trails"}]},{"id":"Victoria_EuclideanDelay","name":"Euclidean Delay","image":"FX_HX_DELAY_EuclideanDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Step Time":"Step Time"}],{"Feedback":null},{"Steps":null},{"Fill":null},{"Rotate":null},{"Mix":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DelayADT","name":"ADT","image":"FX_HX_DELAY_ADT.png","params":[{"DelayDeck1":"Delay 1"},{"DelayDeck2":"Delay 2"},{"WowFlutter1":"WowFlutr1"},{"WowFlutter2":"WowFlutr2"},{"DistDeck1":"Saturate1"},{"DistDeck2":"Saturate2"},{"Deck1Vol":"Deck 1 Vol"},{"Deck2Vol":"Deck 2 Vol"},{"Deck2Pol":"Deck 2 Pol"},{"ModRate":"Mod Rate"},{"ModDepth":"Mod Depth"},{"Level":null},{"TapeSpeed":null},{"Texture":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Threshold":"EnvThresh"},{"@trails":"Trails"}]},{"id":"HD2_DelayCrissCross","name":"Crisscross","image":"FX_HX_DELAY_Crisscross.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync A"},{"TimeA":"Time A"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync B"},{"TimeB":"Time B"}],{"FeedbackA":"Feedback A"},{"FeedbackB":"Feedback B"},{"Mix":null},{"Level":null},{"Crossfeed":null},{"Headroom":null},{"ModRate":"Mod Rate"},{"ModDepth":"ModDepth"},{"Shape":null},{"Phase":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]},{"id":"VIC_DelayStutterEdit","name":"Tesselator","image":"FX_HX_DELAY_Tesselator.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync 1"},{"First":null}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync 2"},{"Last":null}],{"Steps":null},{"Direction":null},{"Boomerang":null},{"Operation":null},{"Ramp":null},{"Speed":null},{"Pitch":null},{"HP Filter":null},{"LP Filter":null},{"FX Level":null},{"Level":null}]},{"id":"VIC_DelayRatchet","name":"Ratchet","image":"FX_HX_DELAY_Ratchet.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":"Time"}],{"FX Level":null},{"Level":null},{"Operation":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_DelaySimpleDelay","name":"Simple Delay","image":"FX_HX_DELAY_Simple.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Mix":null},{"Level":null},{"Scale":null},{"@trails":"Trails"}]},{"id":"HD2_DelayModChorusEcho","name":"Mod/Chorus Echo","image":"FX_HX_DELAY_ModChorusEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Scale":null},{"ModulationMode":"Modulation Mode"},{"Speed":null},{"Depth":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_DelayDualDelay","name":"Dual Delay","image":"FX_HX_DELAY_DualDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Left Note Sync"},{"Left Time":null}],[{"TempoSync2":null},{"SyncSelect2":"Right Note Sync"},{"Right Time":null}],{"LeftFeedback":"Left Feedback"},{"RightFeedback":"Right Feedback"},{"MixL":"Left Mix"},{"MixR":"Right Mix"},{"Level":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"ModulationMode":"Modulation Mode"},{"Speed":null},{"Depth":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_DelayMultitap4","name":"Multitap 4","image":"FX_HX_DELAY_Multitap4.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Diffusion":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Tap1Delay":"Tap 1 Scale"},{"Tap1Pan":"Tap 1 Pan"},{"Tap1Level":"Tap 1 Level"},{"Tap2Delay":"Tap 2 Scale"},{"Tap2Pan":"Tap 2 Pan"},{"Tap2Level":"Tap 2 Level"},{"Tap3Delay":"Tap 3 Scale"},{"Tap3Pan":"Tap 3 Pan"},{"Tap3Level":"Tap 3 Level"},{"Tap4Delay":"Tap 4 Scale"},{"Tap4Pan":"Tap 4 Pan"},{"Tap4Level":"Tap 4 Level"},{"ModulationMode":"Modulation Mode"},{"Speed":"Rate"},{"Depth":null},{"Spread":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DelayMultitap6","name":"Multitap 6","image":"FX_HX_DELAY_Multitap6.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Tap1Delay":"Tap 1 Scale"},{"Tap1Pan":"Tap 1 Pan"},{"Tap1Level":"Tap 1 Level"},{"Tap2Delay":"Tap 2 Scale"},{"Tap2Pan":"Tap 2 Pan"},{"Tap2Level":"Tap 2 Level"},{"Tap3Delay":"Tap 3 Scale"},{"Tap3Pan":"Tap 3 Pan"},{"Tap3Level":"Tap 3 Level"},{"Tap4Delay":"Tap 4 Scale"},{"Tap4Pan":"Tap 4 Pan"},{"Tap4Level":"Tap 4 Level"},{"Tap5Delay":"Tap 5 Scale"},{"Tap5Pan":"Tap 5 Pan"},{"Tap5Level":"Tap 5 Level"},{"Tap6Delay":"Tap 6 Scale"},{"Tap6Pan":"Tap 6 Pan"},{"Tap6Level":"Tap 6 Level"},{"@trails":"Trails"}]},{"id":"HD2_DelayPingPong","name":"Ping Pong","image":"FX_HX_DELAY_PingPong.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Scale":null},{"Spread":null},{"Mix":null},{"Level":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]},{"id":"HD2_DelaySweepEcho","name":"Sweep Echo","image":"FX_HX_DELAY_SweepEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"FilterType":"Filter"},{"SweepShape":"Shape"},{"SweepSpeed":"Rate"},{"SweepStart":"Start Frequency"},{"SweepDepth":"Range"},{"SweepResonance":"Resonance"},{"SweepSymmetry":"Duty Cycle"},{"Scale":null},{"SweepSpread":"Spread"},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayDuckedDelay","name":"Ducked Delay","image":"FX_HX_DELAY_DuckedDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Scale":null},{"Threshold":null},{"Ducking":null},{"DynAttack":"Dynamic Attack"},{"DynRel":"Dynamic Release"},{"DynType":"Dynamic Type"},{"@trails":"Trails"}]},{"id":"HD2_DelayReverseDelay","name":"Reverse Delay","image":"FX_HX_DELAY_ReverseDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"ModulationMode":"Modulation Mode"},{"Speed":null},{"Depth":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_DelayVintageDigital","name":"Vintage Digital","image":"FX_HX_DELAY_VintageDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Scale":null},{"@trails":"Trails"}],"hidden":true},{"id":"HD2_DelayVintageDigitalV2","name":"Vintage Digital","image":"FX_HX_DELAY_VintageDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Scale":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelaySwellVintageDigital","name":"Vintage Swell","image":"FX_HX_DELAY_VintageSwell.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"Mix":null},{"Level":null},{"Rate":null},{"Depth":null},{"Scale":null},{"Headroom":null},{"Threshold":null},{"Attack":null},{"@trails":"Trails"}]},{"id":"HD2_DelayPitch","name":"Pitch Echo","image":"FX_HX_DELAY_PitchEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Interval1":"Interval"},{"Cents1":"Cents"},{"Mix":null},{"Level":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Scale":null},{"@trails":"Trails"}]},{"id":"HD2_DelayTransistorTape","name":"Transistor Tape","image":"FX_HX_DELAY_TransistorTape.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"WowFlutter":"Wow Flutter"},{"Scale":null},{"Spread":null},{"Mix":null},{"Level":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayCosmosEcho","name":"Cosmos Echo","image":"FX_HX_DELAY_CosmosEcho.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Ramp":null},{"Feedback":null},{"WowFlutter":"Wow/Flutter"},{"Mix":null},{"Level":null},{"Headroom":null},{"Mode":null},{"Bass":null},{"Treble":null},{"FBTone":null},{"Splice":null},{"DryThru":"Dry Thru"},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_DelayHarmonyDelay","name":"Harmony Delay","image":"FX_HX_DELAY_HarmonyDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Key":null},{"Scale":null},{"Mix":null},{"Level":null},{"IntervalVoice1":"Voice 1 Shift"},{"LevelVoice1":"Voice 1 Level"},{"PanVoice1":"Voice 1 Pan"},{"IntervalVoice2":"Voice 2 Shift"},{"LevelVoice2":"Voice 2 Level"},{"PanVoice2":"Voice 2 Pan"},{"DelayVoice1":"Voice 1 Scale"},{"DelayVoice2":"Voice 2 Scale"},{"LevelRootVoice":"Root Level"},{"PanRootVoice":"Root Pan"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]},{"id":"HD2_DelayBucketBrigade","name":"Bucket Brigade","image":"FX_HX_DELAY_BucketBrigade.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Scale":null},{"Noise":null},{"Mix":null},{"Level":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayAdriaticDelay","name":"Adriatic Delay","image":"FX_HX_DELAY_AdriaticDelay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Scale":null},{"Feedback":null},{"Noise":null},{"BBD Size":null},{"Mix":null},{"Rate":null},{"Depth":null},{"Spread":null},{"Level":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelaySwellAdriatic","name":"Adriatic Swell","image":"FX_HX_DELAY_AdriaticSwell.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Scale":null},{"Feedback":null},{"Noise":null},{"BBD Size":null},{"Mix":null},{"Rate":null},{"Depth":null},{"Spread":null},{"Level":null},{"Headroom":null},{"Threshold":null},{"Attack":null},{"@trails":"Trails"}]},{"id":"HD2_DelayElephantMan","name":"Elephant Man","image":"FX_HX_DELAY_ElephantMan.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Mode":null},{"Depth":null},{"Mix":null},{"Level":null},{"Scale":null},{"Spread":null},{"Noise":null},{"Headroom":null},{"@trails":"Trails"}]},{"id":"HD2_DelayMultiPass","use_subcategory":4},{"id":"HD2_DelayHeliosphere","name":"Heliosphere","image":"FX_HX_DELAY_Heliosphere.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Rate":null},{"Depth":null},{"Mix":null},{"Level":null},{"Scale":null},{"VerbMix":"Reverb Mix"},{"VerbDecay":"Reverb Decay"},{"Headroom":null},{"@trails":"Trails"}]},{"id":"Victoria_ShufflingDelay","use_subcategory":4},{"id":"VIC_DelayGlitch","use_subcategory":4},{"id":"Victoria_EuclideanDelay","use_subcategory":4},{"id":"HD2_DelayADT","name":"ADT","image":"FX_HX_DELAY_ADT.png","params":[{"DelayDeck1":"Delay 1"},{"DelayDeck2":"Delay 2"},{"WowFlutter1":"WowFlutr1"},{"WowFlutter2":"WowFlutr2"},{"DistDeck1":"Saturate1"},{"DistDeck2":"Saturate2"},{"Deck1Vol":"Deck 1 Vol"},{"Deck2Vol":"Deck 2 Vol"},{"Deck2Pol":"Deck 2 Pol"},{"ModRate":"Mod Rate"},{"ModDepth":"Mod Depth"},{"Level":null},{"TapeSpeed":null},{"Texture":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Deck1Pan":"Deck 1 Pan"},{"Deck2Pan":"Deck 2 Pan"},{"Threshold":"EnvThresh"},{"@trails":"Trails"}]},{"id":"HD2_DelayCrissCross","name":"Crisscross","image":"FX_HX_DELAY_Crisscross.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync A"},{"TimeA":"Time A"}],[{"TempoSync2":null},{"SyncSelect2":"Note Sync B"},{"TimeB":"Time B"}],{"FeedbackA":"Feedback A"},{"FeedbackB":"Feedback B"},{"PanA":"Pan A"},{"PanB":"Pan B"},{"Mix":null},{"Level":null},{"Crossfeed":null},{"Headroom":null},{"ModRate":"Mod Rate"},{"ModDepth":"Mod Depth"},{"Shape":null},{"Phase":null},{"BitDepth":"Bit Depth"},{"SampleRate":"Sample Rate"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]},{"id":"VIC_DelayStutterEdit","use_subcategory":4},{"id":"VIC_DelayRatchet","use_subcategory":4}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_DL4PingPong","name":"Ping Pong","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Offset":null},{"Spread":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4DynamicDelayStereo","name":"Dynamic","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Threshold":null},{"Ducking":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4StereoDelay","name":"Stereo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Left Note Sync"},{"LTime":"Left Time"}],{"LFeedback":"Left Feedback"},[{"TempoSync2":null},{"SyncSelect2":"Right Note Sync"},{"RTime":"Right Time"}],{"RFeedback":"Right Feedback"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4DigDelay","name":"Digital","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Bass":null},{"Treble":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4DigDelayWithMod","name":"Dig w/Mod","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"ModSpeed":"Mod Speed"},{"Depth":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4Reverse","name":"Reverse","image":"FX_M_Delay.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"ModSpeed":"Mod Speed"},{"Depth":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4LowResDelay","name":"Lo Res","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Tone":null},{"Res":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4TubeEchoStereo","name":"Tube Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Wow Flt":null},{"Drive":null},{"Mix":null},{"Level":null},{"DryThru":"Dry Thru"},{"@trails":"Trails"}]},{"id":"HD2_DL4TapeEchoStereo","name":"Tape Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Bass":null},{"Treble":null},{"Mix":null},{"Level":null},{"DryThru":"Dry Thru"},{"@trails":"Trails"}]},{"id":"HD2_DL4SweepEchoStereo","name":"Sweep Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Speed":null},{"Depth":null},{"Mix":null},{"Level":null},{"DryThru":"Dry Thru"},{"@trails":"Trails"}]},{"id":"HD2_DL4EchoPlatterStereo","name":"Echo Platter","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Wow Flt":null},{"Drive":null},{"Mix":null},{"Level":null},{"DryThru":"Dry Thru"},{"@trails":"Trails"}]},{"id":"HD2_DL4AnalogDelayStereo","name":"Analog Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Bass":null},{"Treble":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4AnalogDelayStereoMod","name":"Analog w/Mod","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"ModSpeed":"Mod Speed"},{"Depth":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4AutoVolStereo","name":"Auto-Volume Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Depth":null},{"Swell":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_DL4MultiheadStereo","name":"Multi-Head","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Heads 1-2":null},{"Heads 3-4":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"L6BubbleEcho","name":"Bubble Echo","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Speed":null},{"Depth":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"L6PhazeEko","name":"Phaze Eko","image":"FX_M_Delay.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Time":null}],{"Feedback":null},{"Speed":null},{"Depth":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]}]}]},{"id":6,"name":"Reverb","image":"FX_HX_Category_Reverb.png","shortName":"Verb","color":"0xFF5C00","subcategories":[{"name":"Mono","id":4,"models":[{"id":"VIC_ReverbRotating","name":"Dynamic Hall","image":"FX_HX_REVERB_DynamicHall.png","params":[{"Decay":null},{"Predelay":null},{"RoomSize":"Room Size"},{"Diffusion":null},{"Damping":null},{"Mix":null},{"Motion":null},{"BassFreq":"Low Freq"},{"BassBoost":"Low Gain"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"@trails":"Trails"}]},{"id":"VIC_DynPlate","name":"Dynamic Plate","image":"FX_HX_REVERB_DynamicPlate.png","params":[{"Decay":null},{"PreDelay":"Predelay"},{"Damping":null},{"MatrFreq":"Mot Rate"},{"VarDelayAmpl":"MotRange"},{"Mix":null},{"BassFreq":"Low Freq"},{"BassBoost":"Low Gain"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"@trails":"Trails"}]},{"id":"VIC_ReverbDynRoom","name":"Dynamic Room","image":"FX_HX_REVERB_DynamicRoom.png","params":[{"Decay":null},{"PreDelay":"Predelay"},{"Damping":null},{"Diffusion":null},{"MatrFreq":"Mot Rate"},{"Mix":null},{"BassFreq":"Low Freq"},{"BassBoost":"Low Gain"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"ERLevel":"EarlyReflc"},{"Level":null},{"@trails":"Trails"}]},{"id":"VIC_ReverbDynAmbience","name":"Dynamic Ambience","image":"FX_HX_REVERB_DynamicAmbience.png","params":[{"RoomSize":"Room Size"},{"PreDelay":"Predelay"},{"Damping":null},{"Diffusion":null},{"EarlyLateBlend":"Shape"},{"Mix":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"@trails":"Trails"}]},{"id":"VIC_ReverbDynBloom","name":"Dynamic Bloom","image":"FX_HX_REVERB_DynamicBloom.png","params":[{"Decay":null},{"Damping":null},{"MatrFreq":"Mot Rate"},{"RiseTime":"Rise Time"},{"Mix":null},{"BassFreq":"Low Freq"},{"BassBoost":"Low Gain"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"DuckingAmount":"Ducking"},{"Level":null},{"@trails":"Trails"}]},{"id":"VIC_ReverbShimmer","name":"Shimmer","image":"FX_HX_REVERB_Shimmer.png","params":[{"Mode":"Type"},{"Shift1":"Pitch 1"},{"Shift2":"Pitch 2"},{"Intensity":null},{"Feedback":null},{"Mix":null},{"Balance":"Pitch Blend"},{"Decay":null},{"Predelay":null},{"RoomSize":"Room Size"},{"Damping":null},{"Diffusion":null},{"Motion":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbHxSpring","name":"Hot Springs","image":"FX_HX_REVERB_HotSprings.png","params":[{"Dwell":null},{"Spring Count":"Spring Count"},{"Drip":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbNonLinear","name":"Nonlinear","image":"FX_HX_REVERB_Nonlinear.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Decay":null}],{"Predelay":"Predelay"},{"Shape":null},{"Late Dry":null},{"Mix":null},{"Level":null},{"Diffusion":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mod":null},{"Rate":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbGlitz","name":"Glitz","image":"FX_HX_REVERB_Glitz.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Delay":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Depth":null},{"Xover":null},{"Mod Mix":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbGanymede","name":"Ganymede","image":"FX_HX_REVERB_Ganymede.png","params":[{"Decay":null},{"Predelay":null},{"Tone":null},{"Modulation":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbSearchlights","name":"Searchlights","image":"FX_HX_REVERB_Searchlights.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Modulation":null},{"Speed":null},{"Intensity":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbPlateaux","name":"Plateaux","image":"FX_HX_REVERB_Plateaux.png","params":[{"Decay":null},{"Predelay":null},{"Tone":null},{"Modulation":null},{"Mix":null},{"Level":null},{"Pitch1":"Pitch 1"},{"Cents1":"Cents 1"},{"Pitch2":"Pitch 2"},{"Cents2":"Cents 2"},{"PitchMix":"Pitch Mix"},{"@trails":"Trails"}]},{"id":"HD2_ReverbDoubleTank","name":"Double Tank","image":"FX_HX_REVERB_DoubleTank.png","params":[{"Decay":null},{"Predelay":null},{"Rate":null},{"Modulation":null},{"Mix":null},{"Level":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"@trails":"Trails"}]}]},{"name":"Stereo","id":5,"models":[{"id":"VIC_ReverbRotating","use_subcategory":4},{"id":"VIC_DynPlate","use_subcategory":4},{"id":"VIC_ReverbDynRoom","use_subcategory":4},{"id":"VIC_ReverbDynAmbience","use_subcategory":4},{"id":"VIC_ReverbDynBloom","use_subcategory":4},{"id":"VIC_ReverbShimmer","use_subcategory":4},{"id":"HD2_ReverbHxSpring","use_subcategory":4},{"id":"HD2_ReverbNonLinear","name":"Nonlinear","image":"FX_HX_REVERB_Nonlinear.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Decay":null}],{"Predelay":"Predelay"},{"Shape":null},{"Late Dry":null},{"Mix":null},{"Level":null},{"Diffusion":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mod":null},{"Rate":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbGlitz","use_subcategory":4},{"id":"HD2_ReverbGanymede","use_subcategory":4},{"id":"HD2_ReverbSearchlights","name":"Searchlights","image":"FX_HX_REVERB_Searchlights.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"Modulation":null},{"Speed":null},{"Intensity":null},{"Spread":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbPlateaux","use_subcategory":4},{"id":"HD2_ReverbDoubleTank","use_subcategory":4}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_ReverbPlate","name":"Plate","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbRoom","name":"Room","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbChamber","name":"Chamber","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbHall","name":"Hall","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbEcho","name":"Echo","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbTile","name":"Tile","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbCave","name":"Cave","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbDucking","name":"Ducking","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbOcto","name":"Octo","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Intensity":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_Reverb63Spring","name":"'63 Spring","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbSpring","name":"Spring","image":"FX_M_Reverb.png","params":[{"Decay":null},{"Predelay":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null},{"@trails":"Trails"}]},{"id":"HD2_ReverbParticle","name":"Particle Verb","image":"FX_M_Reverb.png","params":[{"Dwell":null},{"Condition":null},{"Mix":null},{"Level":null},{"@trails":"Trails"}]}]}]},{"id":7,"name":"Pitch/Synth","image":"FX_HX_Category_PitchSynth.png","shortName":"Pitch","color":"0xAD46E2","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_PitchPitchWham","name":"Pitch Wham","image":"FX_HX_PITCH_PitchWham.png","params":[{"Pedal":"Position"},{"Heel":"Heel Pitch"},{"Toe":"Toe Pitch"},{"Mix":null},{"Level":null}]},{"id":"HD2_PitchTwinHarmony","name":"Twin Harmony","image":"FX_HX_PITCH_TwinHarmony.png","params":[{"KeyVoice1":"Voice 1 Key"},{"ScaleVoice1":"Voice 1 Scale"},{"IntervalVoice1":"Voice 1 Shift"},{"LevelVoice1":"Voice 1 Level"},{"Mix":null},{"Level":null},{"KeyVoice2":"Voice 2 Key"},{"ScaleVoice2":"Voice 2 Scale"},{"IntervalVoice2":"Voice 2 Shift"},{"LevelVoice2":"Voice 2 Level"}]},{"id":"HD2_PitchSimplePitch","name":"Simple Pitch","image":"FX_HX_PITCH_SimplePitch.png","params":[{"Interval1":"Interval"},{"Cents1":"Cents"},{"Time1":"Delay"},{"LevelVoice1":"Shift Level"},{"Mix":null},{"Level":null},{"PanDry":"Dry Pan"}]},{"id":"HD2_PitchDualPitch","name":"Dual Pitch","image":"FX_HX_PITCH_DualPitch.png","params":[{"Interval1":"Interval 1"},{"Cents1":"Cents 1"},{"Time1":"Delay 1"},{"LevelVoice1":"V1 Level"},{"Interval2":"Interval 2"},{"Cents2":"Cents 2"},{"Time2":"Delay 2"},{"LevelVoice2":"V2 Level"},{"Mix":null},{"Level":null}]},{"id":"VIC_PitchBoctaver","name":"Boctaver","image":"FX_HX_PITCH_OC2.png","params":[{"Oct1Level":"-1 Oct"},{"Oct2Level":"-2 Oct"},{"DryLevel":"Dry Level"}]},{"id":"L6SPB_PolyPitch","name":"Poly Pitch","image":"FX_HX_PITCH_PolyPitch.png","params":[{"Interval":null},{"Cents":null},[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"ShiftTime":"Shift Time"}],{"ShiftCurve":null},[{"TempoSync2":null},{"SyncSelect2":"Note Sync"},{"ReturnTime":null}],{"ReturnCurve":"ReturnCurv"},{"Tracking":null},{"AutoEQ":"Auto EQ"},{"Mix":null},{"Level":null}]},{"id":"L6SPB_PolyWham","name":"Poly Wham","image":"FX_HX_PITCH_PolyWham.png","params":[{"Position":null},{"HeelShift":"Heel Shift"},{"ToeShift":"Toe Shift"},{"Tracking":null},{"AutoEQ":"Auto EQ"},{"Mix":null},{"Level":null}]},{"id":"L6SPB_PolyBassWham","hidden":true,"name":"Poly Bass Wham","image":"FX_HX_PITCH_PolyBassWham.png","params":[{"Position":null},{"HeelShift":"Heel Shift"},{"ToeShift":"Toe Shift"},{"Mix":null},{"Level":null}]},{"id":"L6SPB_PolyDowntune","name":"Poly Capo","image":"FX_HX_PITCH_PolyCapo.png","params":[{"Interval":null},{"Tracking":null},{"AutoEQ":"Auto EQ"},{"Mix":null},{"Level":null}]},{"id":"L6SPB_12String","name":"12-String","hidden":true,"image":"FX_HX_PITCH_12String.png","params":[{"Blend":null},{"Bass":null},{"Treble":null},{"Level":null}]},{"id":"VIC_PitchTwelveString","name":"12-String","image":"FX_HX_PITCH_12String.png","params":[{"Blend":null},{"Bass":null},{"Treble":null},{"Level":null},{"OnsetThresh":"PluckType"}]},{"id":"HD2_Synth3NoteGenerator","name":"3 Note Generator","image":"FX_HX_PITCH_3NoteGenerator.png","params":[{"Osc1Shape":"Osc1 Shape"},{"Osc1Octave":"Osc1 Oct"},{"Osc1Note":"Osc1 Note"},{"Osc1Level":"Osc1 Level"},{"Osc1Glide":"Osc1 Glide"},{"Osc2Shape":"Osc2 Shape"},{"Osc2Octave":"Osc2 Oct"},{"Osc2Note":"Osc2 Note"},{"Osc2Level":"Osc2 Level"},{"Osc2Glide":"Osc2 Glide"},{"Osc3Shape":"Osc3 Shape"},{"Osc3Octave":"Osc3 Oct"},{"Osc3Note":"Osc3 Note"},{"Osc3Level":"Osc3 Level"},{"Osc3Glide":"Osc3 Glide"},{"Attack":null},{"Decay":null},{"DryLevel":"Dry Level"},{"Level":null}]},{"id":"HD2_Synth4OSCGenerator","name":"4 OSC Generator","image":"FX_HX_PITCH_4OSCGenerator.png","params":[{"Osc1Shape":"Osc1 Shape"},{"Osc1Freq":"Osc1 Freq"},{"Osc1Level":"Osc1 Level"},{"Osc2Shape":"Osc2 Shape"},{"Osc2Freq":"Osc2 Freq"},{"Osc2Level":"Osc2 Level"},{"Osc3Shape":"Osc3 Shape"},{"Osc3Freq":"Osc3 Freq"},{"Osc3Level":"Osc3 Level"},{"Osc4Shape":"Osc4 Shape"},{"Osc4Freq":"Osc4 Freq"},{"Osc4Level":"Osc4 Level"},{"Attack":null},{"Decay":null},{"DryLevel":"Dry Level"},{"Level":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_PitchPitchWham","use_subcategory":4},{"id":"HD2_PitchTwinHarmony","name":"Twin Harmony","image":"FX_HX_PITCH_TwinHarmony.png","params":[{"KeyVoice1":"Voice 1 Key"},{"ScaleVoice1":"Voice 1 Scale"},{"IntervalVoice1":"Voice 1 Shift"},{"LevelVoice1":"Voice 1 Level"},{"PanVoice1":"Voice 1 Pan"},{"Mix":null},{"KeyVoice2":"Voice 2 Key"},{"ScaleVoice2":"Voice 2 Scale"},{"IntervalVoice2":"Voice 2 Shift"},{"LevelVoice2":"Voice 2 Level"},{"PanVoice2":"Voice 2 Pan"},{"Level":null}]},{"id":"HD2_PitchSimplePitch","name":"Simple Pitch","image":"FX_HX_PITCH_SimplePitch.png","params":[{"Interval1":"Interval"},{"Cents1":"Cents"},{"Time1":"Delay"},{"LevelVoice1":"Shift Level"},{"Mix":null},{"Level":null},{"PanVoice1":"Shift Pan"},{"PanDry":"Dry Pan"}]},{"id":"HD2_PitchDualPitch","name":"Dual Pitch","image":"FX_HX_PITCH_DualPitch.png","params":[{"Interval1":"Interval 1"},{"Cents1":"Cents 1"},{"Time1":"Delay 1"},{"LevelVoice1":"V1 Level"},{"Interval2":"Interval 2"},{"Cents2":"Cents 2"},{"Time2":"Delay 2"},{"LevelVoice2":"V2 Level"},{"Mix":null},{"Level":null},{"PanVoice1":"V1 Pan"},{"PanVoice2":"V2 Pan"},{"PanDry":"Dry Pan"}]},{"id":"VIC_PitchBoctaver","use_subcategory":4},{"id":"HD2_SynthSubtractive","name":"3 OSC Synth","image":"FX_HX_PITCH_3OSCSynth.png","params":[{"ShapeVoice1":"Osc 1 Wave"},{"DutyVoice1":"Duty Cycle 1"},{"OctaveVoice1":"Osc 1 Octave"},{"PitchVoice1":"Osc 1 Frequency"},{"PanVoice1":"Osc 1 Pan"},{"LevelVoice1":"Osc 1 Level"},{"ShapeVoice2":"Osc 2 Wave"},{"DutyVoice2":"Duty Cycle 2"},{"OctaveVoice2":"Osc 2 Octave"},{"PitchVoice2":"Osc 2 Frequency"},{"PanVoice2":"Osc 2 Pan"},{"LevelVoice2":"Osc 2 Level"},{"ShapeVoice3":"Osc 3 Wave"},{"DutyVoice3":"Duty Cycle 3"},{"OctaveVoice3":"Osc 3 Octave"},{"PitchVoice3":"Osc 3 Frequency"},{"PanVoice3":"Osc 3 Pan"},{"LevelVoice3":"Osc 3 Level"},{"SynthPreset":"Filter Preset"},{"FM Voice3to1":"FM 3 > 1"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null}]},{"id":"HD2_Synth3NoteGenerator","name":"3 Note Generator","image":"FX_HX_PITCH_3NoteGenerator.png","params":[{"Osc1Shape":"Osc1 Shape"},{"Osc1Octave":"Osc1 Oct"},{"Osc1Note":"Osc1 Note"},{"Osc1Level":"Osc1 Level"},{"Osc1Pan":"Osc1 Pan"},{"Osc1Glide":"Osc1 Glide"},{"Osc2Shape":"Osc2 Shape"},{"Osc2Octave":"Osc2 Oct"},{"Osc2Note":"Osc2 Note"},{"Osc2Level":"Osc2 Level"},{"Osc2Pan":"Osc2 Pan"},{"Osc2Glide":"Osc2 Glide"},{"Osc3Shape":"Osc3 Shape"},{"Osc3Octave":"Osc3 Oct"},{"Osc3Note":"Osc3 Note"},{"Osc3Level":"Osc3 Level"},{"Osc3Pan":"Osc3 Pan"},{"Osc3Glide":"Osc3 Glide"},{"Attack":null},{"Decay":null},{"DryLevel":"Dry Level"},{"DryPan":"Dry Pan"},{"Level":null}]},{"id":"HD2_Synth4OSCGenerator","name":"4 OSC Generator","image":"FX_HX_PITCH_4OSCGenerator.png","params":[{"Osc1Shape":"Osc1 Shape"},{"Osc1Freq":"Osc1 Freq"},{"Osc1Pan":"Osc1 Pan"},{"Osc1Level":"Osc1 Level"},{"Osc2Shape":"Osc2 Shape"},{"Osc2Freq":"Osc2 Freq"},{"Osc2Pan":"Osc2 Pan"},{"Osc2Level":"Osc2 Level"},{"Osc3Shape":"Osc3 Shape"},{"Osc3Freq":"Osc3 Freq"},{"Osc3Pan":"Osc3 Pan"},{"Osc3Level":"Osc3 Level"},{"Osc4Shape":"Osc4 Shape"},{"Osc4Freq":"Osc4 Freq"},{"Osc4Pan":"Osc4 Pan"},{"Osc4Level":"Osc4 Level"},{"Attack":null},{"Decay":null},{"DryLevel":"Dry Level"},{"DryPan":"Dry Pan"},{"Level":null}]}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_DM4BassOctaver","name":"Bass Octaver","image":"FX_M_PitchSynth.png","params":[{"Tone":null},{"Normal":null},{"Octave":null},{"Level":null}]},{"id":"HD2_M13TwoVoiceHarmony","name":"Smart Harmony","image":"FX_M_PitchSynth.png","params":[{"Key":null},{"Shift":null},{"Scale":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4OctiSynth","name":"Octi Synth","image":"FX_M_PitchSynth.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Depth":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4SynthOMatic","name":"Synth O Matic","image":"FX_M_PitchSynth.png","params":[{"Frequency":null},{"Q":null},{"Wave":null},{"Pitch":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4AttackSynth","name":"Attack Synth","image":"FX_M_PitchSynth.png","params":[{"Freq":null},{"Wave":null},{"Attack":null},{"Pitch":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4SynthString","name":"Synth String","image":"FX_M_PitchSynth.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Attack":null},{"Pitch":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4Growler","name":"Growler","image":"FX_M_PitchSynth.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Pitch":null},{"Mix":null},{"Level":null}]},{"id":"BuzzWave","name":"Buzz Wave","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Decay":null},{"Mix":null},{"Level":null}]},{"id":"RezSynth","name":"Rez Synth","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Decay":null},{"Mix":null},{"Level":null}]},{"id":"SeismicSynth","name":"Seismik Synth","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Mix":null},{"Level":null}]},{"id":"SynthAnalog","name":"Analog Synth","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Decay":null},{"Mix":null},{"Level":null}]},{"id":"SynthLead","name":"Synth Lead","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Decay":null},{"Mix":null},{"Level":null}]},{"id":"SynthString","name":"String Theory","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Attack":"Decay"},{"Mix":null},{"Level":null}]},{"id":"SynthFX","name":"Synth FX","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Filter":null},{"Decay":"Decay"},{"Mix":null},{"Level":null}]},{"id":"Saturn5RingMod","name":"Saturn 5 RingMod","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Mix":null},{"Level":null}]},{"id":"SynthHarmony","name":"Synth Harmony","image":"FX_M_PitchSynth.png","params":[{"Wave":null},{"Interval1":"Interval 1"},{"Interval2":"Interval 2"},{"Mix":null},{"Level":null}]},{"id":"DoubleBass","name":"Double Bass","image":"FX_M_PitchSynth.png","params":[{"-1oct G":"-1 Octave"},{"-2oct G":"-2 Octave"},{"Mix":null},{"Level":null}]}]}]},{"id":8,"name":"Filter","image":"FX_HX_Category_Filter.png","shortName":"Filt","color":"0xAD46E2","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_FilterMutantFilter","name":"Mutant Filter","image":"FX_HX_FILTER_Mutant.png","params":[{"Mode":null},{"Peak":null},{"Gain":null},{"Range":null},{"Drive":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FilterMysterFilter","name":"Mystery Filter","image":"FX_HX_FILTER_Mystery.png","params":[{"Sensitivity":null},{"Frequency":null},{"Resonance":null},{"Attack":null},{"Release":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FilterAutoFilter","name":"Autofilter","image":"FX_HX_FILTER_AutoFilter.png","params":[{"Mode":null},{"FilterGain":"Filter Gain"},{"FilterQ":"Filter Q"},{"Sens":"Sensitivity"},{"Attack":null},{"Decay":null},{"Frequency":null},{"FreqDepth":"Freq Depth"},{"Direction":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FilterAshevillePattrn","name":"Asheville Pattrn","image":"FX_HX_FILTER_AshevillePattrn.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Rate":null}],{"Pattern":null},{"Envelope":null},{"Voice":null},{"Mix":null},{"Output":null},{"Drive":null},{"Direction":null},[{"TempoSync2":null},{"SyncSelect2":"Note Sync"},{"LFO":null}],{"Spread":null},{"Level1":"Level 1"},{"Level2":"Level 2"},{"Level3":"Level 3"},{"Level4":"Level 4"},{"Level5":"Level 5"},{"Level6":"Level 6"},{"Level7":"Level 7"},{"Level8":"Level 8"}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_FilterMutantFilter","use_subcategory":4},{"id":"HD2_FilterMysterFilter","use_subcategory":4},{"id":"HD2_FilterAutoFilter","use_subcategory":4},{"id":"HD2_FilterAshevillePattrn","use_subcategory":4}]},{"name":"Legacy","id":6,"models":[{"id":"HD2_FM4VoiceBox","name":"Voice Box","image":"FX_M_Filter.png","params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Start":null},{"End":null},{"Auto":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4VTron","name":"V Tron","image":"FX_M_Filter.png","params":[{"Speed":null},{"Start":null},{"End":null},{"Mode":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4QFilter","name":"Q Filter","image":"FX_M_Filter.png","stereo":true,"params":[{"Freq":null},{"Q":null},{"Gain":null},{"Type":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4Seeker","name":"Seeker","image":"FX_M_Filter.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Steps":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4ObiWah","name":"Obi Wah","image":"FX_M_Filter.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Type":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4TronUp","name":"Tron Up","image":"FX_M_Filter.png","stereo":true,"params":[{"Freq":null},{"Q":null},{"Range":null},{"Type":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4TronDown","name":"Tron Down","image":"FX_M_Filter.png","stereo":true,"params":[{"Freq":null},{"Q":null},{"Range":null},{"Type":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4Throbber","name":"Throbber","image":"FX_M_Filter.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Wave":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4SlowFilter","name":"Slow Filter","image":"FX_M_Filter.png","stereo":true,"params":[{"Freq":null},{"Q":null},{"Speed":null},{"Mode":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4SpinCycle","name":"Spin Cycle","image":"FX_M_Filter.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Vol Sens":null},{"Mix":null},{"Level":null}]},{"id":"HD2_FM4CometTrails","name":"Comet Trails","image":"FX_M_Filter.png","stereo":true,"params":[[{"TempoSync1":null},{"SyncSelect1":"Note Sync"},{"Speed":null}],{"Freq":null},{"Q":null},{"Gain":null},{"Mix":null},{"Level":null}]}]}]},{"id":9,"name":"Wah","image":"FX_HX_Category_Wah.png","shortName":"Wah","color":"0xA844DB","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_WahUKWah846","name":"UK Wah 846","image":"FX_HX_WAH_UKWah846.png","params":[{"Pedal":"Position"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahTeardrop310","name":"Teardrop 310","image":"FX_HX_WAH_Teardrop310.png","params":[{"Pedal":"Position"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahFassel","name":"Fassel","image":"FX_HX_WAH_Fassel.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahWeeper","name":"Weeper","image":"FX_HX_WAH_Weeper.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahChrome","name":"Chrome","image":"FX_HX_WAH_Chrome.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahChromeCustom","name":"Chrome Custom","image":"FX_HX_WAH_ChromeCustom.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahThroaty","name":"Throaty","image":"FX_HX_WAH_Throaty.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahVettaWah","name":"Vetta Wah","image":"FX_HX_WAH_VettaWah.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahColorful","name":"Colorful","image":"FX_HX_WAH_Colorful.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahConductor","name":"Conductor","image":"FX_HX_WAH_Conductor.png","params":[{"Pedal":"Position"},{"FcLow":"Fc Low"},{"FcHigh":"Fc High"},{"Mix":null},{"Level":null}]},{"id":"HD2_WahTeardropBassQ","name":"Teardrop Bass Q","image":"FX_HX_WAH_TeardropBassQ.png","params":[{"Pedal":"Position"},{"Q Trim":null},{"Volume Trim":null},{"Mix":null},{"Level":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_WahUKWah846","use_subcategory":4},{"id":"HD2_WahTeardrop310","use_subcategory":4},{"id":"HD2_WahFassel","use_subcategory":4},{"id":"HD2_WahWeeper","use_subcategory":4},{"id":"HD2_WahChrome","use_subcategory":4},{"id":"HD2_WahChromeCustom","use_subcategory":4},{"id":"HD2_WahThroaty","use_subcategory":4},{"id":"HD2_WahVettaWah","use_subcategory":4},{"id":"HD2_WahColorful","use_subcategory":4},{"id":"HD2_WahConductor","use_subcategory":4},{"id":"HD2_WahTeardropBassQ","use_subcategory":4}]}]},{"id":11,"name":"Amp","image":"FX_HX_Category_Amp.png","shortName":"Amp","color":"0xDD1111","subcategories":[{"name":"Guitar","id":1,"models":[{"id":"HD2_AmpWhoWatt100","name":"WhoWatt 100","image":"AMP_HX_GTR_WhoWatt100.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSoupPro","name":"Soup Pro","image":"AMP_HX_GTR_SoupPro.png","params":[{"Drive":null},{"Bass":null},{"Tone":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpStoneAge185","name":"Stone Age 185","image":"AMP_HX_GTR_Stoneage185.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpVoltageQueen","name":"Voltage Queen","image":"AMP_HX_GTR_VoltageQueen.png","params":[{"Drive 1":null},{"Drive Trem":"Drive 2"},{"Tone":null},{"Bass":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpTweedBluesNrm","name":"Tweed Blues Nrm","image":"AMP_HX_GTR_TweedBluesNormal.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpTweedBluesBrt","name":"Tweed Blues Brt","image":"AMP_HX_GTR_TweedBluesBright.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpFullertonNrm","name":"Fullerton Nrm","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpFullertonBrt","name":"Fullerton Brt","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpFullertonJump","name":"Fullerton Jump","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGrammaticoNrm","name":"GrammaticoLG Nrm","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGrammaticoBrt","name":"GrammaticoLG Brt","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGrammaticoJump","name":"GrammaticoLG Jump","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSSmallTweed","name":"US Small Tweed","image":"AMP_HX_GTR_USSmallTweed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSPrincess","name":"US Princess","image":"AMP_HX_GTR_USPrincess.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSSuperNorm","name":"US Super Nrm","image":"AMP_HX_GTR_USSuperNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Bright":null}]},{"id":"HD2_AmpUSSuperVib","name":"US Super Vib","image":"AMP_HX_GTR_USSuperVib.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Bright":null}]},{"id":"HD2_AmpUSDeluxeNrm","name":"US Deluxe Nrm","image":"AMP_HX_GTR_USDeluxeNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSDeluxeVib","name":"US Deluxe Vib","image":"AMP_HX_GTR_USDeluxeBrt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSDoubleNrm","name":"US Double Nrm","image":"AMP_HX_GTR_USDoubleNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpUSDoubleVib","name":"US Double Vib","image":"AMP_HX_GTR_USDoubleVib.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMailOrderTwin","name":"Mail Order Twin","image":"AMP_HX_GTR_MailOrderTwin.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpDividedDuo","name":"Divided Duo","image":"AMP_HX_GTR_DividedDuo.png","params":[{"Drive 1":null},{"Drive 2":null},{"Tone":null},{"Cut":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpInterstateZed","name":"Interstate Zed","image":"AMP_HX_GTR_InterstateZed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpDerailedIngrid","name":"Derailed Ingrid","image":"AMP_HX_GTR_DerailedIngrid.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Bright":null}]},{"id":"HD2_AmpGSG100","name":"Grammatico GSG","image":"AMP_HX_GTR_GrammaticoGSG100.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"MidSwitch":"Mid Switch"},{"JazzRock":"Jazz Rock"},{"ODSwitch":"OD Switch"},{"ODDrive":"OD Drive"},{"ODLevel":"OD Level"},{"Bright":null},{"FETBoost":"FET Boost"},{"PAB":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpJazzRivet120","name":"Jazz Rivet 120","image":"AMP_HX_GTR_JazzRivet.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Bright":null}]},{"id":"HD2_AmpEssexA15","name":"Essex A15","image":"AMP_HX_GTR_EssexA15.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Cut":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpEssexA30","name":"Essex A30","image":"AMP_HX_GTR_EssexA30.png","params":[{"Drive":null},{"Bass":null},{"Cut":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpA30FawnNrm","name":"A30 Fawn Nrm","image":"AMP_HX_GTR_FawnNrm.png","params":[{"Drive":null},{"Bass":null},{"Cut":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpA30FawnBrt","name":"A30 Fawn Brt","image":"AMP_HX_GTR_FawnBrt.png","params":[{"Drive":null},{"Bass":null},{"Cut":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMatchstickCh1","name":"Matchstick Ch1","image":"AMP_HX_GTR_MatchstickCh1.png","params":[{"Ch1Drive":"Ch1 Drive"},{"Bass":null},{"Cut":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMatchstickCh2","name":"Matchstick Ch2","image":"AMP_HX_GTR_MatchstickCh2.png","params":[{"Ch2Drive":"Ch2 Drive"},{"Tone":null},{"Cut":null},{"Presence":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMatchstickJump","name":"Matchstick Jump","image":"AMP_HX_GTR_MatchstickJump.png","params":[{"Ch1Drive":"Ch1 Drive"},{"Bass":null},{"Treble":null},{"Ch2Drive":"Ch2 Drive"},{"Tone":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Cut":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMandarin80","name":"Mandarin 80","image":"AMP_HX_GTR_MandarinOR80.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"FAC":null}]},{"id":"HD2_AmpMandarinRocker","name":"Mandarin Rocker","image":"AMP_HX_GTR_MandarinRocker.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMoonNrm","name":"Moo)))n Nrm","image":"AMP_HX_GTR_Moo))nNrm.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMoonBrt","name":"Moo)))n Brt","image":"AMP_HX_GTR_Moo))nBrt.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpMoonJump","name":"Moo)))n Jump","image":"AMP_HX_GTR_Moo))nJump.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritJ45Nrm","name":"Brit J45 Nrm","image":"AMP_HX_GTR_BritJ45Nrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritJ45Brt","name":"Brit J45 Brt","image":"AMP_HX_GTR_BritJ45Brt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritTremNrm","name":"Brit Trem Nrm","image":"AMP_HX_GTR_BritTremNrm.png","params":[{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritTremBrt","name":"Brit Trem Brt","image":"AMP_HX_GTR_BritTremBrt.png","params":[{"BrtDrive":"Bright Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritTremJump","name":"Brit Trem Jump","image":"AMP_HX_GTR_BritTremJump.png","params":[{"BrtDrive":"Bright Drive"},{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritPlexiNrm","name":"Brit Plexi Nrm","image":"AMP_HX_GTR_BritPlexiNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritPlexiBrt","name":"Brit Plexi Brt","image":"AMP_HX_GTR_BritPlexiBrt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritPlexiJump","name":"Brit Plexi Jump","image":"AMP_HX_GTR_BritPlexiJump.png","params":[{"BrtDrive":"Bright Drive"},{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritP75Nrm","name":"Brit P75 Nrm","image":"AMP_HX_GTR_BritP75Nrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBritP75Brt","name":"Brit P75 Brt","image":"AMP_HX_GTR_BritP75Brt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpBrit2203","name":"Brit 2203","image":"AMP_HX_GTR_Brit2203.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"InputType":"Input"}]},{"id":"HD2_AmpBrit2204","name":"Brit 2204","image":"AMP_HX_GTR_Brit2204.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpPlacaterClean","name":"Placater Clean","image":"AMP_HX_GTR_PlacaterClean.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Presence":null},{"Master":null},{"ChVol":"Ch Vol"},{"Bright":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpPlacaterDirty","name":"Placater Dirty","image":"AMP_HX_GTR_PlacaterDirty.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"HBE":null},{"Fat":null},{"C45":null},{"Saturation":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCartographer","name":"Cartographer","image":"AMP_HX_GTR_Cartographer.png","params":[{"Drive":null},{"Drive2":"Drive 2"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Presence":null},{"Depth":null},{"Bright1":"Bright 1"},{"Bright2":"Bright 2"},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGermanXtraBlue","name":"German Xtra Blue","image":"AMP_HX_GTR_GermanExtraBlue.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"PreEQ_Brt":"Bright"},{"ChVol":"Ch Vol"},{"Boost":null},{"Structure":null},{"Master":null},{"Presence":null},{"Excursion_Depth":"Depth"},{"Old_New":"Style"},{"Class_AB_A":"Class"},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGermanXtraRed","name":"German Xtra Red","image":"AMP_HX_GTR_GermanExtraRed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"PreEQ_Brt":"Bright"},{"ChVol":"Ch Vol"},{"Boost":null},{"Structure":null},{"Master":null},{"Presence":null},{"Excursion_Depth":"Depth"},{"Old_New":"Style"},{"Class_AB_A":"Class"},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGermanMahadeva","name":"German Mahadeva","image":"AMP_HX_GTR_GermanMahadeva.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGermanUbersonic","name":"German Ubersonic","image":"AMP_HX_GTR_GermanUbersonic.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCaliTexasCh1","name":"Cali Texas Ch 1","image":"AMP_HX_GTR_CaliTexasCh1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCaliTexasCh2","name":"Cali Texas Ch 2","image":"AMP_HX_GTR_CaliTexasCh2.png","params":[{"Drive 1":null},{"Drive 2":null},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"TS Shape":"Shape"},{"Presence":null},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCaliIVR1","name":"Cali IV Rhythm 1","image":"AMP_HX_GTR_CaliIVRhythm1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_AmpCaliIVR2","name":"Cali IV Rhythm 2","image":"AMP_HX_GTR_CaliIVRhythm2.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_AmpCaliIVLead","name":"Cali IV Lead","image":"AMP_HX_GTR_CaliIVLead.png","params":[{"LeadGain":"Lead Gain"},{"LeadDrive":"Lead Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_AmpCaliRectifire","name":"Cali Rectifire","image":"AMP_HX_GTR_CaliRectifire.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpArchetypeClean","name":"Archetype Clean","image":"AMP_HX_GTR_ArchetypeClean.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Depth":null},{"BrightSW":"Bright"}]},{"id":"HD2_AmpArchetypeLead","name":"Archetype Lead","image":"AMP_HX_GTR_ArchetypeLead.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Depth":null}]},{"id":"HD2_AmpANGLMeteor","name":"ANGL Meteor","image":"AMP_HX_GTR_ANGLMeteor.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"MidBoost":"Mid Boost"}]},{"id":"HD2_AmpSoloLeadClean","name":"Solo Lead Clean","image":"AMP_HX_GTR_Solo100Clean.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSoloLeadCrunch","name":"Solo Lead Crunch","image":"AMP_HX_GTR_Solo100Crunch.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSoloLeadOD","name":"Solo Lead OD","image":"AMP_HX_GTR_Solo100OD.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpEVPanamaBlue","name":"EV Panama Blue","image":"AMP_HX_GTR_EVPanamaBlue.png","params":[{"Gain":null},{"Low":null},{"Mid":null},{"High":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpEVPanamaRed","name":"EV Panama Red","image":"AMP_HX_GTR_EVPanamaRed.png","params":[{"Gain":null},{"Low":null},{"Mid":null},{"High":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpPVPanama","name":"PV Panama","image":"AMP_HX_GTR_PVPanama.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Resonance":null}]},{"id":"HD2_AmpPVVitriolClean","name":"PV Vitriol Clean","image":"AMP_HX_GTR_PVVitriolClean.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Presence":null},{"Depth":null}]},{"id":"HD2_AmpPVVitriolCrunch","name":"PV VitriolCrunch","image":"AMP_HX_GTR_PVVitriolCrunch.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Presence":null},{"Depth":null}]},{"id":"HD2_AmpPVVitriolLead","name":"PV Vitriol Lead","image":"AMP_HX_GTR_PVVitriolLead.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"},{"Presence":null},{"Depth":null}]},{"id":"HD2_AmpRevvGenPurple","name":"Revv Gen Purple","image":"AMP_HX_GTR_RevvGenPurple.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Resonance":null},{"Aggression":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpRevvGenRed","name":"Revv Gen Red","image":"AMP_HX_GTR_RevvGenRed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Resonance":null},{"Aggression":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpDasBenzinMega","name":"Das Benzin Mega","image":"AMP_HX_GTR_BenzinMega.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Deep":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpDasBenzinLead","name":"Das Benzin Lead","image":"AMP_HX_GTR_BenzinLead.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Deep":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Clarity","name":"Line 6 Clarity","image":"AMP_HX_GTR_Line6Clarity.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_AmpLine6Aristocrat","name":"Line 6 Aristocrat","image":"AMP_HX_GTR_Line6Aristocrat.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Carillon","name":"Line 6 Carillon","image":"AMP_HX_GTR_Line6Carillon.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Voltage","name":"Line 6 Voltage","image":"AMP_HX_GTR_Line6Voltage.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Kinetic","name":"Line 6 Kinetic","image":"AMP_HX_GTR_Line6Kinetic.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Oblivion","name":"Line 6 Oblivion","image":"AMP_HX_GTR_Line6Oblivion.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Ventoux","name":"Line 6 Ventoux","image":"AMP_HX_GTR_Ventoux.png","params":[{"Drive":null},{"HPF":"HP Filter"},{"Mid":null},{"Presence":null},{"Depth":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Elmsley","name":"Line 6 Elmsley","image":"AMP_HX_GTR_Elmsley.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Depth":null},{"NFB":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Elektrik","name":"Line 6 Elektrik","image":"AMP_HX_GTR_Elektrik.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Doom","name":"Line 6 Doom","image":"AMP_HX_GTR_Doom.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Epic","name":"Line 6 Epic","image":"AMP_HX_GTR_Epic.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine62204Mod","name":"Line 6 2204 Mod","image":"AMP_HX_GTR_Line62204Mod.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"PreMid":"Pre Mid"},{"PreMidFc":"Pre Mid Fc"},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Fatality","name":"Line 6 Fatality","image":"AMP_HX_GTR_Fatality.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Litigator","name":"Line 6 Litigator","image":"AMP_HX_GTR_BluesLitigator.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpLine6Badonk","name":"Line 6 Badonk","image":"AMP_HX_GTR_L6-Badonk.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Depth":null},{"Sag":null},{"Bias":null},{"BiasX":"Bias X"}]}]},{"name":"Bass","id":2,"models":[{"id":"HD2_AmpTucknGo","name":"Ampeg B-15NF","image":"AMP_HX_BASS_TuckNGo.png","params":[{"Drive":null},{"Bass":null},{"LowMid":"Low Mid"},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSVBeastNrm","name":"Ampeg SVT Nrm","image":"AMP_HX_BASS_SVBeastNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSVBeastBrt","name":"Ampeg SVT Brt","image":"AMP_HX_BASS_SVBeastBrt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpSVT4Pro","name":"Ampeg SVT-4 PRO","image":"AMP_HX_BASS_SVT4Pro.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"UltraLo":"Ultra Lo"},{"UltraHi":"Ultra Hi"},{"Bright":null},{"EQ":null},{"33Hz":"33 Hz"},{"80Hz":"80 Hz"},{"150Hz":"150 Hz"},{"300Hz":"300 Hz"},{"600Hz":"600 Hz"},{"900Hz":"900 Hz"},{"2kHz":"2 kHz"},{"5kHz":"5 kHz"},{"8kHz":"8 kHz"},{"EQLevel":"EQ Level"}]},{"id":"HD2_AmpUSDripmanNorm","name":"US Dripman Norm","image":"AMP_HX_BASS_DripmanNorm.png","params":[{"Norm Drive":"Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Bright":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpWoodyBlue","name":"Woody Blue","image":"AMP_HX_BASS_WoodyBlue.png","params":[{"Drive":null},{"Bass":null},{"Variamp":null},{"Effect":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Bright":null},{"Hum":null},{"TuningFork":"Tuning Fork"},{"TFCoarse":"TF Coarse"},{"TFFine":"TF Fine"}]},{"id":"HD2_AmpAguaSledge","name":"Agua Sledge","image":"AMP_HX_BASS_AguaSledge.png","params":[{"Gain":null},{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Ch Vol":null},{"Master":null},{"Mid Freq":null}]},{"id":"HD2_AmpAgua51","name":"Agua 51","image":"AMP_HX_BASS_Agua51.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"Ch Vol":null},{"Deep":null},{"Bright":null}]},{"id":"HD2_AmpMandarinBass200","name":"Mandarin Bass200","image":"AMP_HX_BASS_MandarinBass200.png","params":[{"Gain":null},{"Bass":null},{"Middle":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCaliBass","name":"Cali Bass","image":"AMP_HX_BASS_CaliBass.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Voice":null}]},{"id":"HD2_AmpCali400Ch1","name":"Cali 400 Ch1","image":"AMP_HX_BASS_Cali400Ch1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpCali400Ch2","name":"Cali 400 Ch2","image":"AMP_HX_BASS_Cali400Ch2.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null},{"Ripple":null},{"Bias":null},{"BiasX":"Bias X"}]},{"id":"HD2_AmpGCougar800","name":"G Cougar 800","image":"AMP_HX_BASS_GCougar.png","params":[{"Drive":null},{"Bass":null},{"LowMid":"Low Mid"},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Boost":null},{"Contour":null}]},{"id":"HD2_AmpDelSol300","name":"Del Sol 300","image":"AMP_HX_BASS_DelSol300.png","params":[{"Gain":null},{"Bright":null},{"Contour":null},{"Master":null},{"ChVol":"Ch Vol"},{"62p5Hz":"62.5 Hz"},{"125Hz":"125 Hz"},{"250Hz":"250 Hz"},{"500Hz":"500 Hz"},{"1kHz":"1 kHz"},{"2kHz":"2 kHz"},{"4kHz":"4 kHz"}]},{"id":"HD2_AmpBusyOneCh1","name":"Busy One Ch1","image":"AMP_HX_BASS_BusyOneCh1.png","params":[{"Ch1 Drive":"Drive"},{"Ch1 Bass":"Bass"},{"Ch1 Mid":"Mid"},{"Ch1 Mid Freq":"Mid Freq"},{"Ch1 Treble":"Treble"},{"Ch1 Master":"Master"},{"Input Pad":null},{"Ch1 Boost":"Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]},{"id":"HD2_AmpBusyOneCh2","name":"Busy One Ch2","image":"AMP_HX_BASS_BusyOneCh2.png","params":[{"Ch2 Drive":"Drive"},{"Ch2 Bass":"Bass"},{"Ch2 Mid":"Mid"},{"Ch2 Mid Freq":"Mid Freq"},{"Ch2 Treble":"Treble"},{"Ch2 Master":"Master"},{"Input Pad":null},{"Ch2 Boost":"Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]},{"id":"HD2_AmpBusyOneJump","name":"Busy One Jump","image":"AMP_HX_BASS_BusyOneJump.png","params":[{"Ch1 Drive":"C1 Drive"},{"Ch1 Bass":"C1 Bass"},{"Ch1 Mid":"C1 Mid"},{"Ch1 Mid Freq":"C1 Mid Freq"},{"Ch1 Treble":"C1 Treble"},{"Ch1 Master":"C1 Master"},{"Ch2 Drive":"C2 Drive"},{"Ch2 Bass":"C2 Bass"},{"Ch2 Mid":"C2 Mid"},{"Ch2 Mid Freq":"C2 Mid Freq"},{"Ch2 Treble":"C2 Treble"},{"Ch2 Master":"C2 Master"},{"Input Pad":null},{"Ch1 Boost":"C1 Boost"},{"Ch2 Boost":"C2 Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]}]}]},{"id":12,"name":"Preamp","image":"FX_HX_Category_Preamp.png","shortName":"Pre","color":"0xDD1111","subcategories":[{"name":"Guitar","id":1,"models":[{"id":"HD2_PreampWhoWatt100","name":"WhoWatt 100","image":"PRE_HX_WhoWatt100.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSoupPro","name":"Soup Pro","image":"PRE_HX_SoupPro.png","params":[{"Drive":null},{"Bass":null},{"Tone":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampStoneAge185","name":"Stone Age 185","image":"PRE_HX_Stoneage185.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampVoltageQueen","name":"Voltage Queen","image":"AMP_HX_GTR_VoltageQueen.png","params":[{"Drive 1":null},{"Drive 2":null},{"Tone":null},{"Bass":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampTweedBluesNrm","name":"Tweed Blues Nrm","image":"AMP_HX_GTR_TweedBluesNormal.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampTweedBluesBrt","name":"Tweed Blues Brt","image":"AMP_HX_GTR_TweedBluesBright.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampFullertonNrm","name":"Fullerton Nrm","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampFullertonBrt","name":"Fullerton Brt","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampFullertonJump","name":"Fullerton Jump","image":"AMP_HX_GTR_Fullerton.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGrammaticoNrm","name":"GrammaticoLG Nrm","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGrammaticoBrt","name":"GrammaticoLG Brt","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGrammaticoJump","name":"GrammaticoLG Jump","image":"AMP_HX_GTR_Grammatico.png","params":[{"DriveNorm":"Drive Norm"},{"DriveBright":"Drive Bright"},{"Bass":null},{"Tone":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSSmallTweed","name":"US Small Tweed","image":"PRE_HX_USSmallTweed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSPrincess","name":"US Princess","image":"PRE_HX_USPrincess.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSSuperNorm","name":"US Super Nrm","image":"AMP_HX_GTR_USSuperNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Bright":null}]},{"id":"HD2_PreampUSSuperVib","name":"US Super Vib","image":"AMP_HX_GTR_USSuperVib.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Bright":null}]},{"id":"HD2_PreampUSDeluxeNrm","name":"US Deluxe Nrm","image":"PRE_HX_USDeluxeNormal.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSDeluxeVib","name":"US Deluxe Vib","image":"PRE_HX_USDeluxeVib.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSDoubleNrm","name":"US Double Nrm","image":"PRE_HX_USDoubleNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampUSDoubleVib","name":"US Double Vib","image":"PRE_HX_USDoubleVib.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMailOrderTwin","name":"Mail Order Twin","image":"AMP_HX_GTR_MailOrderTwin.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampDividedDuo","name":"Divided Duo","image":"PRE_HX_DividedDuo.png","params":[{"Drive1":"Drive 1"},{"Drive2":"Drive 2"},{"Tone":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampInterstateZed","name":"Interstate Zed","image":"AMP_HX_GTR_InterstateZed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampDerailedIngrid","name":"Derailed Ingrid","image":"AMP_HX_GTR_DerailedIngrid.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"Bright":null}]},{"id":"HD2_PreampGSG100","name":"Grammatico GSG","image":"AMP_HX_GTR_GrammaticoGSG100.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"MidSwitch":"Mid Switch"},{"JazzRock":"Jazz Rock"},{"ODSwitch":"OD Switch"},{"ODDrive":"OD Drive"},{"ODLevel":"OD Level"},{"Bright":null},{"FETBoost":"FET Boost"},{"PAB":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampJazzRivet120","name":"Jazz Rivet 120","image":"AMP_HX_GTR_JazzRivet.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Bright":null},{"ChVol":"Ch Vol"},{"Master":null}]},{"id":"HD2_PreampEssexA15","name":"Essex A15","image":"AMP_HX_GTR_EssexA15.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampEssexA30","name":"Essex A30","image":"AMP_HX_GTR_EssexA30.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Master":null},{"Sag":null},{"ChVol":"Ch Vol"},{"Hum":null}]},{"id":"HD2_PreampA30FawnNrm","name":"A30 Fawn Nrm","image":"AMP_HX_GTR_FawnNrm.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Master":null},{"Sag":null},{"ChVol":"Ch Vol"},{"Hum":null}]},{"id":"HD2_PreampA30FawnBrt","name":"A30 Fawn Brt","image":"AMP_HX_GTR_FawnBrt.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Master":null},{"Sag":null},{"ChVol":"Ch Vol"},{"Hum":null}]},{"id":"HD2_PreampMatchstickCh1","name":"Matchstick Ch1","image":"AMP_HX_GTR_MatchstickCh1.png","params":[{"Ch1Drive":"Ch1 Drive"},{"Bass":null},{"Treble":null},{"Master":null},{"Sag":null},{"ChVol":"Ch Vol"},{"Hum":null}]},{"id":"HD2_PreampMatchstickCh2","name":"Matchstick Ch2","image":"AMP_HX_GTR_MatchstickCh2.png","params":[{"Ch2Drive":"Ch2 Drive"},{"Tone":null},{"Master":null},{"Sag":null},{"Hum":null},{"ChVol":"Ch Vol"}]},{"id":"HD2_PreampMatchstickJump","name":"Matchstick Jump","image":"AMP_HX_GTR_MatchstickJump.png","params":[{"Ch1Drive":"Ch1 Drive"},{"Bass":null},{"Treble":null},{"Ch2Drive":"Ch2 Drive"},{"Tone":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMandarin80","name":"Mandarin 80","image":"AMP_HX_GTR_MandarinOR80.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"FAC":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMandarinRocker","name":"Mandarin Rocker","image":"AMP_HX_GTR_MandarinRocker.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMoonNrm","name":"Moo)))n Nrm","image":"AMP_HX_GTR_Moo))nNrm.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMoonBrt","name":"Moo)))n Brt","image":"AMP_HX_GTR_Moo))nBrt.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampMoonJump","name":"Moo)))n Jump","image":"AMP_HX_GTR_Moo))nJump.png","params":[{"BrtDrive":"Brt Drive"},{"NrmDrive":"Nrm Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritJ45Nrm","name":"Brit J45 Nrm","image":"AMP_HX_GTR_BritJ45Nrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritJ45Brt","name":"Brit J45 Brt","image":"AMP_HX_GTR_BritJ45Brt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritTremNrm","name":"Brit Trem Nrm","image":"AMP_HX_GTR_BritTremNrm.png","params":[{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritTremBrt","name":"Brit Trem Brt","image":"AMP_HX_GTR_BritTremBrt.png","params":[{"BrtDrive":"Bright Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritTremJump","name":"Brit Trem Jump","image":"AMP_HX_GTR_BritTremJump.png","params":[{"BrtDrive":"Bright Drive"},{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritPlexiNrm","name":"Brit Plexi Nrm","image":"AMP_HX_GTR_BritPlexiNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritPlexiBrt","name":"Brit Plexi Brt","image":"AMP_HX_GTR_BritPlexiBrt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritPlexiJump","name":"Brit Plexi Jump","image":"AMP_HX_GTR_BritPlexiJump.png","params":[{"BrtDrive":"Bright Drive"},{"NrmDrive":"Normal Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritP75Nrm","name":"Brit P75 Nrm","image":"AMP_HX_GTR_BritP75Nrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBritP75Brt","name":"Brit P75 Brt","image":"AMP_HX_GTR_BritP75Brt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampBrit2203","name":"Brit 2203","image":"AMP_HX_GTR_Brit2203.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"InputType":"Input"}]},{"id":"HD2_PreampBrit2204","name":"Brit 2204","image":"AMP_HX_GTR_Brit2204.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampPlacaterClean","name":"Placater Clean","image":"AMP_HX_GTR_PlacaterClean.png","params":[{"Drive":null},{"Bass":null},{"Treble":null},{"Bright":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}]},{"id":"HD2_PreampPlacaterDirty","name":"Placater Dirty","image":"AMP_HX_GTR_PlacaterDirty.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"HBE":null},{"Fat":null},{"C45":null},{"Saturation":null}]},{"id":"HD2_PreampCartographer","name":"Cartographer","image":"AMP_HX_GTR_Cartographer.png","params":[{"Drive":null},{"Drive2":"Drive 2"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Bright1":"Bright 1"},{"Bright2":"Bright 2"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGermanXtraBlue","name":"German Xtra Blue","image":"AMP_HX_GTR_GermanExtraBlue.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"PreEQ_Brt":"Bright"},{"ChVol":"Ch Vol"},{"Boost":null},{"Structure":null},{"Master":null}]},{"id":"HD2_PreampGermanXtraRed","name":"German Xtra Red","image":"AMP_HX_GTR_GermanExtraRed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"PreEQ_Brt":"Bright"},{"ChVol":"Ch Vol"},{"Boost":null},{"Structure":null},{"Master":null}]},{"id":"HD2_PreampGermanMahadeva","name":"German Mahadeva","image":"AMP_HX_GTR_GermanMahadeva.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGermanUbersonic","name":"German Ubersonic","image":"AMP_HX_GTR_GermanUbersonic.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Ch Vol":null},{"Master":null},{"Sag":null}]},{"id":"HD2_PreampCaliTexasCh1","name":"Cali Texas Ch 1","image":"AMP_HX_GTR_CaliTexasCh1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null}]},{"id":"HD2_PreampCaliTexasCh2","name":"Cali Texas Ch 2","image":"AMP_HX_GTR_CaliTexasCh2.png","params":[{"Drive 1":null},{"Drive 2":null},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"TS Shape":"Shape"},{"Presence":null},{"Master":null}]},{"id":"HD2_PreampCaliIVR1","name":"Cali IV Rhythm 1","image":"AMP_HX_GTR_CaliIVRhythm1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_PreampCaliIVR2","name":"Cali IV Rhythm 2","image":"AMP_HX_GTR_CaliIVRhythm2.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_PreampCaliIVLead","name":"Cali IV Lead","image":"AMP_HX_GTR_CaliIVLead.png","params":[{"LeadGain":"Lead Gain"},{"LeadDrive":"Lead Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Presence":null},{"Master":null},{"Sag":null},{"80Hz":"80 Hz"},{"240Hz":"240 Hz"},{"750Hz":"750 Hz"},{"2200Hz":"2200 Hz"},{"6600Hz":"6600 Hz"}]},{"id":"HD2_PreampCaliRectifire","name":"Cali Rectifire","image":"AMP_HX_GTR_CaliRectifire.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampArchetypeClean","name":"Archetype Clean","image":"AMP_HX_GTR_ArchetypeClean.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null},{"BrightSW":"Bright"}]},{"id":"HD2_PreampArchetypeLead","name":"Archetype Lead","image":"AMP_HX_GTR_ArchetypeLead.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampANGLMeteor","name":"ANGL Meteor","image":"AMP_HX_GTR_ANGLMeteor.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"MidBoost":"Mid Boost"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSoloLeadClean","name":"Solo Lead Clean","image":"AMP_HX_GTR_Solo100Clean.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSoloLeadCrunch","name":"Solo Lead Crunch","image":"AMP_HX_GTR_Solo100Crunch.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"Ch Vol":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSoloLeadOD","name":"Solo Lead OD","image":"AMP_HX_GTR_Solo100OD.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampEVPanamaBlue","name":"EV Panama Blue","image":"AMP_HX_GTR_EVPanamaBlue.png","params":[{"Gain":null},{"Low":null},{"Mid":null},{"High":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampEVPanamaRed","name":"EV Panama Red","image":"AMP_HX_GTR_EVPanamaRed.png","params":[{"Gain":null},{"Low":null},{"Mid":null},{"High":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampPVPanama","name":"PV Panama","image":"AMP_HX_GTR_PVPanama.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampPVVitriolClean","name":"PV Vitriol Clean","image":"AMP_HX_GTR_PVVitriolClean.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampPVVitriolCrunch","name":"PV VitriolCrunch","image":"AMP_HX_GTR_PVVitriolCrunch.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampPVVitriolLead","name":"PV Vitriol Lead","image":"AMP_HX_GTR_PVVitriolLead.png","params":[{"PreGain":"Pre Gain"},{"Bass":null},{"Mid":null},{"Treble":null},{"PostGain":"Post Gain"},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampRevvGenPurple","name":"Revv Gen Purple","image":"AMP_HX_GTR_RevvGenPurple.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Aggression":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampRevvGenRed","name":"Revv Gen Red","image":"AMP_HX_GTR_RevvGenRed.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Aggression":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampDasBenzinMega","name":"Das Benzin Mega","image":"AMP_HX_GTR_BenzinMega.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}]},{"id":"HD2_PreampDasBenzinLead","name":"Das Benzin Lead","image":"AMP_HX_GTR_BenzinLead.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}]},{"id":"HD2_PreampLine6Clarity","name":"Line 6 Clarity","image":"AMP_HX_GTR_Line6Clarity.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Aristocrat","name":"Line 6 Aristocrat","image":"AMP_HX_GTR_Line6Aristocrat.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Carillon","name":"Line 6 Carillon","image":"AMP_HX_GTR_Line6Carillon.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Voltage","name":"Line 6 Voltage","image":"AMP_HX_GTR_Line6Voltage.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Kinetic","name":"Line 6 Kinetic","image":"AMP_HX_GTR_Line6Kinetic.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Oblivion","name":"Line 6 Oblivion","image":"AMP_HX_GTR_Line6Oblivion.png","hidden":false,"params":[{"Drive":"Ch1 Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Boost":null},{"Sag":null},{"HumSwitch":"Hum"}]},{"id":"HD2_PreampLine6Ventoux","name":"Line 6 Ventoux","image":"AMP_HX_GTR_Ventoux.png","params":[{"Drive":null},{"HPF":"HP Filter"},{"Mid":null},{"Presence":null},{"Depth":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine6Elmsley","name":"Line 6 Elmsley","image":"AMP_HX_GTR_Elmsley.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine6Elektrik","name":"Line 6 Elektrik","image":"AMP_HX_GTR_Elektrik.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}]},{"id":"HD2_PreampLine6Doom","name":"Line 6 Doom","image":"AMP_HX_GTR_Doom.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine6Epic","name":"Line 6 Epic","image":"AMP_HX_GTR_Epic.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine62204Mod","name":"Line 6 2204 Mod","image":"AMP_HX_GTR_Line62204Mod.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}],"hidden":true},{"id":"HD2_PreampLine62204ModV2","name":"Line 6 2204 Mod","image":"AMP_HX_GTR_Line62204Mod.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"PreMid":"Pre Mid"},{"PreMidFc":"Pre Mid Fc"}]},{"id":"HD2_PreampLine6Fatality","name":"Line 6 Fatality","image":"AMP_HX_GTR_Fatality.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Presence":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine6Litigator","name":"Line 6 Litigator","image":"AMP_HX_GTR_BluesLitigator.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampLine6Badonk","name":"Line 6 Badonk","image":"AMP_HX_GTR_L6-Badonk.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null}]}]},{"name":"Bass","id":2,"models":[{"id":"HD2_PreampTucknGo","name":"Ampeg B-15NF","image":"AMP_HX_BASS_TuckNGo.png","params":[{"Drive":null},{"Bass":null},{"LowMid":"Low Mid"},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSVBeastNrm","name":"Ampeg SVT Nrm","image":"AMP_HX_BASS_SVBeastNrm.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSVBeastBrt","name":"Ampeg SVT Brt","image":"AMP_HX_BASS_SVBeastBrt.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampSVT4Pro","name":"Ampeg SVT-4 PRO","image":"AMP_HX_BASS_SVT4Pro.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"MidFreq":"Mid Freq"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"UltraLo":"Ultra Lo"},{"UltraHi":"Ultra Hi"},{"Bright":null},{"EQ":null},{"33Hz":"33 Hz"},{"80Hz":"80 Hz"},{"150Hz":"150 Hz"},{"300Hz":"300 Hz"},{"600Hz":"600 Hz"},{"900Hz":"900 Hz"},{"2kHz":"2 kHz"},{"5kHz":"5 kHz"},{"8kHz":"8 kHz"},{"EQLevel":"EQ Level"}]},{"id":"HD2_PreampUSDripmanNorm","name":"US Dripman Nrm","image":"AMP_HX_BASS_DripmanNorm.png","params":[{"Norm Drive":"Drive"},{"Bass":null},{"Mid":null},{"Treble":null},{"Bright":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampWoodyBlue","name":"Woody Blue","image":"AMP_HX_BASS_WoodyBlue.png","params":[{"Drive":null},{"Bass":null},{"Variamp":null},{"Effect":null},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Bright":null},{"Hum":null},{"TuningFork":"Tuning Fork"},{"TFCoarse":"TF Coarse"},{"TFFine":"TF Fine"}]},{"id":"HD2_PreampAguaSledge","name":"Agua Sledge","image":"AMP_HX_BASS_AguaSledge.png","params":[{"Gain":null},{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Ch Vol":null},{"Master":null},{"Mid Freq":null}]},{"id":"HD2_PreampAgua51","name":"Agua 51","image":"AMP_HX_BASS_Agua51.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"Treble":null},{"Master":null},{"Ch Vol":null},{"Deep":null},{"Bright":null}]},{"id":"HD2_PreampMandarinBass200","name":"Mandarin Bass200","image":"AMP_HX_BASS_MandarinBass200.png","params":[{"Gain":null},{"Bass":null},{"Middle":null},{"Treble":null},{"Master":null},{"ChVol":"Ch Vol"},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampCaliBass","name":"Cali Bass","image":"AMP_HX_BASS_CaliBass.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Voice":null}]},{"id":"HD2_PreampCali400Ch1","name":"Cali 400 Ch1","image":"AMP_HX_BASS_Cali400Ch1.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampCali400Ch2","name":"Cali 400 Ch2","image":"AMP_HX_BASS_Cali400Ch2.png","params":[{"Drive":null},{"Bass":null},{"Mid":null},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Sag":null},{"Hum":null}]},{"id":"HD2_PreampGCougar800","name":"G Cougar 800","image":"AMP_HX_BASS_GCougar.png","params":[{"Drive":null},{"Bass":null},{"LowMid":"Low Mid"},{"HighMid":"High Mid"},{"Treble":null},{"ChVol":"Ch Vol"},{"Master":null},{"Boost":null},{"Contour":null}]},{"id":"HD2_PreampDelSol300","name":"Del Sol 300","image":"AMP_HX_BASS_DelSol300.png","params":[{"Gain":null},{"62p5Hz":"62.5 Hz"},{"125Hz":"125 Hz"},{"250Hz":"250 Hz"},{"500Hz":"500 Hz"},{"ChVol":"Ch Vol"},{"Master":null},{"1kHz":"1 kHz"},{"2kHz":"2 kHz"},{"4kHz":"4 kHz"},{"Brite":"Bright"},{"Contour":null}]},{"id":"HD2_PreampBusyOneCh1","name":"Busy One Ch1","image":"AMP_HX_BASS_BusyOneCh1.png","params":[{"Ch1 Drive":"Drive"},{"Ch1 Bass":"Bass"},{"Ch1 Mid":"Mid"},{"Ch1 Mid Freq":"Mid Freq"},{"Ch1 Treble":"Treble"},{"Ch1 Master":"Master"},{"Input Pad":null},{"Ch1 Boost":"Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]},{"id":"HD2_PreampBusyOneCh2","name":"Busy One Ch2","image":"AMP_HX_BASS_BusyOneCh2.png","params":[{"Ch2 Drive":"Drive"},{"Ch2 Bass":"Bass"},{"Ch2 Mid":"Mid"},{"Ch2 Mid Freq":"Mid Freq"},{"Ch2 Treble":"Treble"},{"Ch2 Master":"Master"},{"Input Pad":null},{"Ch2 Boost":"Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]},{"id":"HD2_PreampBusyOneJump","name":"Busy One Jump","image":"AMP_HX_BASS_BusyOneJump.png","params":[{"Ch1 Drive":"C1 Drive"},{"Ch1 Bass":"C1 Bass"},{"Ch1 Mid":"C1 Mid"},{"Ch1 Mid Freq":"C1 Mid Freq"},{"Ch1 Treble":"C1 Treble"},{"Ch1 Master":"C1 Master"},{"Ch2 Drive":"C2 Drive"},{"Ch2 Bass":"C2 Bass"},{"Ch2 Mid":"C2 Mid"},{"Ch2 Mid Freq":"C2 Mid Freq"},{"Ch2 Treble":"C2 Treble"},{"Ch2 Master":"C2 Master"},{"Input Pad":null},{"Ch1 Boost":"C1 Boost"},{"Ch2 Boost":"C2 Boost"},{"Limiter":null},{"Threshold":null},{"Ch Vol":null}]}]},{"name":"Mic","id":3,"models":[{"id":"HD2_PreampVintagePre","name":"Studio Tube Pre","image":"PRE_HX_StudioMicPre.png","params":[{"Input":"Gain"},{"Polarity":null},{"Hi Pass":"Low Cut"},{"Low Pass":"High Cut"},{"Output":"Level"},{"MicLine":"Sensitivity"}]}]}]},{"id":13,"name":"Cab","image":"FX_HX_Category_Cab.png","shortName":"Cab","color":"0xDD1111","subcategories":[{"name":"Single","id":9,"models":[{"id":"HD2_CabMicIr_SoupProEllipse","name":"Soup Pro Ellipse","image":"CABMICIR_HX_SoupProEllipse.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x8SmallTweed","name":"1x8 Small Tweed","image":"CABMICIR_HX_1x8SmallTweed.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x10USPrincess","name":"1x10 US Princess","image":"CABMICIR_HX_1x12USPrincess.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12Fullerton","name":"1x12 Fullerton","image":"CABMICIR_HX_1x12Fullerton.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12Grammatico","name":"1x12 Grammatico","image":"CABMICIR_HX_1x12Grammatico.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12USDeluxe","name":"1x12 US Deluxe","image":"CABMICIR_HX_1x12USDeluxe.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12OpenCast","name":"1x12 Open Cast","image":"CABMICIR_HX_1x12OpenCast.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12OpenCream","name":"1x12 Open Cream","image":"CABMICIR_HX_1x12OpenCream.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12CaliEXT","name":"1x12 Cali EXT","image":"CABMICIR_HX_1x12CaliEXT.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12CaliIV","name":"1x12 Cali IV","image":"CABMICIR_HX_1x12CaliIV.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12BlueBell","name":"1x12 Blue Bell","image":"CABMICIR_HX_1x12BlueBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12BlueBell","name":"2x12 Blue Bell","image":"CABMICIR_HX_2x12BlueBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12SilverBell","name":"2x12 Silver Bell","image":"CABMICIR_HX_2x12SilverBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12MatchH30","name":"2x12 Match H30","image":"CABMICIR_HX_2x12MatchH30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12MatchG25","name":"2x12 Match G25","image":"CABMICIR_HX_2x12MatchG25.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12DoubleC12N","name":"2x12 Double C12N","image":"CABMICIR_HX_2x12DoubleC12N.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12Interstate","name":"2x12 Interstate","image":"CABMICIR_HX_2x12Interstate.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12JazzRivet","name":"2x12 Jazz Rivet","image":"CABMICIR_HX_2x12JazzRivet.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12MailC12Q","name":"2x12 Mail C12Q","image":"CABMICIR_HX_2x12MailC12Q.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x12Mandarin","name":"2x12 Mandarin 30","image":"CABMICIR_HX_2x12Mandarin30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x10TweedP10R","name":"4x10 Tweed P10R","image":"CABMICIR_HX_4x10TweedP10R.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x10USSuper","name":"4x10 US Super","image":"CABMICIR_HX_4x10USSuper.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12WhoWatt100","name":"4x12 WhoWatt 100","image":"CABMICIR_HX_4x12WhoWatt.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12Greenback20","name":"4x12 Greenback 20","image":"CABMICIR_HX_4x12Greenback20.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12Greenback25","name":"4x12 Greenback 25","image":"CABMICIR_HX_4x12Greenback25.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12Greenback30","name":"4x12 Greenback 30","image":"CABMICIR_HX_4x12Greenback30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x121960AT75","name":"4x12 1960A T75","image":"CABMICIR_HX_4x121960AT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12BlackbackH30","name":"4x12 Blackback 30","image":"CABMICIR_HX_4x12Blackback30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12BritV30","name":"4x12 Brit V30","image":"CABMICIR_HX_4x12BritV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12CaliV30","name":"4x12 Cali V30","image":"CABMICIR_HX_4x12CaliV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12Mandarin","name":"4x12 Mandarin EM","image":"CABMICIR_HX_4x12MandarinEM.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12MOONT75","name":"4x12 MOO)))N T75","image":"CABMICIR_HX_4x12MOONT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12CartogGuv","name":"4x12 Cartog Guv","image":"CABMICIR_HX_4x12CartogGuv.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12CartogC90","name":"4x12 Cartog C90","image":"CABMICIR_HX_4x12CartogC90.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12UberT75","name":"4x12 Uber T75","image":"CABMICIR_HX_4x12UberT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12UberV30","name":"4x12 Uber V30","image":"CABMICIR_HX_4x12UberV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12XXLV30","name":"4x12 XXL V30","image":"CABMICIR_HX_4x12XXLV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x12SoloLeadEM","name":"4x12 SoloLead EM","image":"CABMICIR_HX_4x12SoloLeadEM.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x12Epicenter","name":"1x12 Epicenter","bass":true,"image":"CABMICIR_HX_1x12Epicenter.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_1x15AmpegB15","name":"1x15 Ampeg B-15","image":"CABMICIR_HX_1x15AmpegB15.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x15Brute","name":"2x15 Brute","image":"CABMICIR_HX_2x15Brute.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_2x15USDripman","name":"2x15 US Dripman","image":"CABMICIR_HX_2x15Dripman.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x10Garden","name":"4x10 Garden","image":"CABMICIR_HX_4x10Garden.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_4x10AmpegPro","name":"4x10 Ampeg Pro","image":"CABMICIR_HX_4x10AmpegPro.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_6x10CaliPower","name":"6x10 Cali Power","image":"CABMICIR_HX_6x10CaliPower.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]},{"id":"HD2_CabMicIr_8x10SVTAV","name":"8x10 SVT AV","image":"CABMICIR_HX_8x10SVTAV.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null}]}]},{"name":"Dual","id":10,"models":[{"id":"HD2_CabMicIr_SoupProEllipseWithPan","name":"Soup Pro Ellipse","image":"CABMICIR_HX_SoupProEllipse.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x8SmallTweedWithPan","name":"1x8 Small Tweed","image":"CABMICIR_HX_1x8SmallTweed.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x10USPrincessWithPan","name":"1x10 US Princess","image":"CABMICIR_HX_1x12USPrincess.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12FullertonWithPan","name":"1x12 Fullerton","image":"CABMICIR_HX_1x12Fullerton.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12GrammaticoWithPan","name":"1x12 Grammatico","image":"CABMICIR_HX_1x12Grammatico.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12USDeluxeWithPan","name":"1x12 US Deluxe","image":"CABMICIR_HX_1x12USDeluxe.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12OpenCastWithPan","name":"1x12 Open Cast","image":"CABMICIR_HX_1x12OpenCast.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12OpenCreamWithPan","name":"1x12 Open Cream","image":"CABMICIR_HX_1x12OpenCream.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12CaliEXTWithPan","name":"1x12 Cali EXT","image":"CABMICIR_HX_1x12CaliEXT.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12CaliIVWithPan","name":"1x12 Cali IV","image":"CABMICIR_HX_1x12CaliIV.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12BlueBellWithPan","name":"1x12 Blue Bell","image":"CABMICIR_HX_1x12BlueBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12BlueBellWithPan","name":"2x12 Blue Bell","image":"CABMICIR_HX_2x12BlueBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12SilverBellWithPan","name":"2x12 Silver Bell","image":"CABMICIR_HX_2x12SilverBell.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12MatchH30WithPan","name":"2x12 Match H30","image":"CABMICIR_HX_2x12MatchH30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12MatchG25WithPan","name":"2x12 Match G25","image":"CABMICIR_HX_2x12MatchG25.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12DoubleC12NWithPan","name":"2x12 Double C12N","image":"CABMICIR_HX_2x12DoubleC12N.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12InterstateWithPan","name":"2x12 Interstate","image":"CABMICIR_HX_2x12Interstate.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12JazzRivetWithPan","name":"2x12 Jazz Rivet","image":"CABMICIR_HX_2x12JazzRivet.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12MailC12QWithPan","name":"2x12 Mail C12Q","image":"CABMICIR_HX_2x12MailC12Q.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x12MandarinWithPan","name":"2x12 Mandarin 30","image":"CABMICIR_HX_2x12Mandarin30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x10TweedP10RWithPan","name":"4x10 Tweed P10R","image":"CABMICIR_HX_4x10TweedP10R.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x10USSuperWithPan","name":"4x10 US Super","image":"CABMICIR_HX_4x10USSuper.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12WhoWatt100WithPan","name":"4x12 WhoWatt 100","image":"CABMICIR_HX_4x12WhoWatt.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12Greenback20WithPan","name":"4x12 Greenback 20","image":"CABMICIR_HX_4x12Greenback20.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12Greenback25WithPan","name":"4x12 Greenback 25","image":"CABMICIR_HX_4x12Greenback25.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12Greenback30WithPan","name":"4x12 Greenback 30","image":"CABMICIR_HX_4x12Greenback30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x121960AT75WithPan","name":"4x12 1960A T75","image":"CABMICIR_HX_4x121960AT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12BlackbackH30WithPan","name":"4x12 Blackback 30","image":"CABMICIR_HX_4x12Blackback30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12BritV30WithPan","name":"4x12 Brit V30","image":"CABMICIR_HX_4x12BritV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12CaliV30WithPan","name":"4x12 Cali V30","image":"CABMICIR_HX_4x12CaliV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12MandarinWithPan","name":"4x12 Mandarin EM","image":"CABMICIR_HX_4x12MandarinEM.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12MOONT75WithPan","name":"4x12 MOO)))N T75","image":"CABMICIR_HX_4x12MOONT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12CartogGuvWithPan","name":"4x12 Cartog Guv","image":"CABMICIR_HX_4x12CartogGuv.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12CartogC90WithPan","name":"4x12 Cartog C90","image":"CABMICIR_HX_4x12CartogC90.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12UberT75WithPan","name":"4x12 Uber T75","image":"CABMICIR_HX_4x12UberT75.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12UberV30WithPan","name":"4x12 Uber V30","image":"CABMICIR_HX_4x12UberV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12XXLV30WithPan","name":"4x12 XXL V30","image":"CABMICIR_HX_4x12XXLV30.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x12SoloLeadEMWithPan","name":"4x12 SoloLead EM","image":"CABMICIR_HX_4x12SoloLeadEM.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x12EpicenterWithPan","name":"1x12 Epicenter","bass":true,"image":"CABMICIR_HX_1x12Epicenter.png","params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_1x15AmpegB15WithPan","name":"1x15 Ampeg B-15","image":"CABMICIR_HX_1x15AmpegB15.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x15BruteWithPan","name":"2x15 Brute","image":"CABMICIR_HX_2x15Brute.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_2x15USDripmanWithPan","name":"2x15 US Dripman","image":"CABMICIR_HX_2x15Dripman.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x10GardenWithPan","name":"4x10 Garden","image":"CABMICIR_HX_4x10Garden.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_4x10AmpegProWithPan","name":"4x10 Ampeg Pro","image":"CABMICIR_HX_4x10AmpegPro.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_6x10CaliPowerWithPan","name":"6x10 Cali Power","image":"CABMICIR_HX_6x10CaliPower.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]},{"id":"HD2_CabMicIr_8x10SVTAVWithPan","name":"8x10 SVT AV","image":"CABMICIR_HX_8x10SVTAV.png","bass":true,"params":[{"Mic":null},{"Position":null},{"Distance":null},{"Angle":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Level":null},{"Pan":null},{"Delay":null}]}]},{"name":"Single Legacy","id":7,"models":[{"id":"HD2_Cab1x6x9SoupProEllipse","name":"Soup Pro Ellipse","image":"CAB_HX_1x6_SoupProEllipse.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"High Cut":null},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x8SmallTweed","name":"1x8 Small Tweed","image":"CAB_HX_1x8_SmallTweed.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Early Reflections":null},{"Level":null}]},{"id":"HD2_Cab1x10PrincessCopperhead","name":"1x10 US Princess","image":"CAB_HX_1x10_USPrincess.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Early Reflections":null},{"Level":null}]},{"id":"HD2_Cab1x12FieldCoil","name":"1x12 Field Coil","image":"CAB_HX_1x12_FieldCoil.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12Fullerton5C3","name":"1x12 Fullerton","image":"CAB_HX_1x12_Fullerton.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12Grammatico5E3","name":"1x12 Grammatico","image":"CAB_HX_1x12_Grammatico.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12USDeluxe","name":"1x12 US Deluxe","image":"CAB_HX_1x12_USDeluxe.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12PrincessBlue","name":"1x12 US Princess","image":"CAB_HX_1x12_USPrincess.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Early Reflections":null},{"Level":null}]},{"id":"HD2_Cab1x12Celest12H","name":"1x12 Celest 12H","image":"CAB_HX_1x12_Celest12H.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12BlueBell","name":"1x12 Blue Bell","image":"CAB_HX_1x12_BlueBell.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12Lead80","name":"1x12 Lead 80","image":"CAB_HX_1x12_Lead80.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12CaliIV","name":"1x12 Cali IV","image":"CAB_HX_1x12_Cali_IV.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12CaliExt","name":"1x12 Cali EXT","image":"CAB_HX_1x12_Cali_EXT.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12DoubleC12N","name":"2x12 Double C12N","image":"CAB_HX_2x12_DoubleC12N.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12MailC12Q","name":"2x12 Mail C12Q","image":"CAB_HX_2x12_MailC12Q.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12Interstate","name":"2x12 Interstate","image":"CAB_HX_2x12_Interstate.png","params":[{"@mic":"Mic"},{"Distance":null},{"Low Cut":null},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12JazzRivet","name":"2x12 Jazz Rivet","image":"CAB_HX_2x12_JazzRivet.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12SilverBell","name":"2x12 Silver Bell","image":"CAB_HX_2x12_SilverBell.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x12BlueBell","name":"2x12 Blue Bell","image":"CAB_HX_2x12_BlueBell.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"High Cut":null},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12MatchH30","name":"2x12 Match H30","image":"CAB_HX_2x12_Match_H30.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12MatchG25","name":"2x12 Match G25","image":"CAB_HX_2x12_Match_G25.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x10TweedP10R","name":"4x10 Tweed P10R","image":"CAB_HX_4x10_Tweed.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12WhoWatt100","name":"4x12 WhoWatt 100","image":"CAB_HX_4x12_WhoWatt100.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12MandarinEM","name":"4x12 Mandarin EM","image":"CAB_HX_4x12_MandarinEM.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12Greenback25","name":"4x12 Greenback 25","image":"CAB_HX_4x12_Greenback25.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12Greenback20","name":"4x12 Greenback 20","image":"CAB_HX_4x12_Greenback20.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12Blackback30","name":"4x12 Blackback 30","image":"CAB_HX_4x12_Blackback30.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x121960T75","name":"4x12 1960 T75","image":"CAB_HX_4x12_1960T75.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12UberV30","name":"4x12 Uber V30","image":"CAB_HX_4x12_UberV30.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12UberT75","name":"4x12 Uber T75","image":"CAB_HX_4x12_UberT75.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4X12CaliV30","name":"4x12 Cali V30","image":"CAB_HX_4x12_CaliV30.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12XXLV30","name":"4x12 XXL V30","image":"CAB_HX_4x12_XXLV30.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x12SoloLeadEM","name":"4x12 SoloLead EM","image":"CAB_HX_4x12_SoloLeadEM.png","params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x12DelSol","name":"1x12 Del Sol","image":"CAB_HX_1x18_DelSol.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x15TucknGo","name":"1x15 Ampeg B-15","image":"CAB_HX_1x15_TuckNGo.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x18DelSol","name":"1x18 Del Sol","image":"CAB_HX_1x12_DelSol.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab1x18WoodyBlue","name":"1x18 Woody Blue","image":"CAB_HX_1x18_WoodyBlue.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab2x15Brute","name":"2x15 Brute","image":"CAB_HX_2x15_Brute.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab4x10Rhino","name":"4x10 Ampeg HLF","image":"CAB_HX_4x10_Rhino.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab6x10CaliPower","name":"6x10 Cali Power","image":"CAB_HX_6x10_CaliPower.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"EarlyReflections":"Early Reflections"},{"Level":null}]},{"id":"HD2_Cab8x10SVBeast","name":"8x10 Ampeg SVT E","image":"CAB_HX_8x10_SVBeast.png","bass":true,"params":[{"@mic":"Mic"},{"Distance":null},{"LowCut":"Low Cut"},{"High Cut":null},{"EarlyReflections":"Early Reflections"},{"Level":null}]}]},{"name":"Dual Legacy","id":8,"models":[{"id":"HD2_Cab1x6x9SoupProEllipse","use_subcategory":7},{"id":"HD2_Cab1x8SmallTweed","use_subcategory":7},{"id":"HD2_Cab1x10PrincessCopperhead","use_subcategory":7},{"id":"HD2_Cab1x12FieldCoil","use_subcategory":7},{"id":"HD2_Cab1x12Fullerton5C3","use_subcategory":7},{"id":"HD2_Cab1x12Grammatico5E3","use_subcategory":7},{"id":"HD2_Cab1x12USDeluxe","use_subcategory":7},{"id":"HD2_Cab1x12PrincessBlue","use_subcategory":7},{"id":"HD2_Cab1x12Celest12H","use_subcategory":7},{"id":"HD2_Cab1x12BlueBell","use_subcategory":7},{"id":"HD2_Cab1x12Lead80","use_subcategory":7},{"id":"HD2_Cab1x12CaliIV","use_subcategory":7},{"id":"HD2_Cab1x12CaliExt","use_subcategory":7},{"id":"HD2_Cab2x12DoubleC12N","use_subcategory":7},{"id":"HD2_Cab2x12MailC12Q","use_subcategory":7},{"id":"HD2_Cab2x12Interstate","use_subcategory":7},{"id":"HD2_Cab2x12JazzRivet","use_subcategory":7},{"id":"HD2_Cab2x12SilverBell","use_subcategory":7},{"id":"HD2_Cab2x12BlueBell","use_subcategory":7},{"id":"HD2_Cab1x12MatchH30","use_subcategory":7},{"id":"HD2_Cab1x12MatchG25","use_subcategory":7},{"id":"HD2_Cab4x10TweedP10R","use_subcategory":7},{"id":"HD2_Cab4x12WhoWatt100","use_subcategory":7},{"id":"HD2_Cab4x12MandarinEM","use_subcategory":7},{"id":"HD2_Cab4x12Greenback25","use_subcategory":7},{"id":"HD2_Cab4x12Greenback20","use_subcategory":7},{"id":"HD2_Cab4x12Blackback30","use_subcategory":7},{"id":"HD2_Cab4x121960T75","use_subcategory":7},{"id":"HD2_Cab4x12UberV30","use_subcategory":7},{"id":"HD2_Cab4x12UberT75","use_subcategory":7},{"id":"HD2_Cab4X12CaliV30","use_subcategory":7},{"id":"HD2_Cab4x12XXLV30","use_subcategory":7},{"id":"HD2_Cab4x12SoloLeadEM","use_subcategory":7},{"id":"HD2_Cab1x12DelSol","use_subcategory":7},{"id":"HD2_Cab1x15TucknGo","use_subcategory":7},{"id":"HD2_Cab1x18DelSol","use_subcategory":7},{"id":"HD2_Cab1x18WoodyBlue","use_subcategory":7},{"id":"HD2_Cab2x15Brute","use_subcategory":7},{"id":"HD2_Cab4x10Rhino","use_subcategory":7},{"id":"HD2_Cab6x10CaliPower","use_subcategory":7},{"id":"HD2_Cab8x10SVBeast","use_subcategory":7}]}]},{"id":14,"name":"IR","image":"FX_HX_Category_Impulse Response.png","shortName":"IR","color":"0xf23091","subcategories":[{"name":"Single","id":4,"models":[{"id":"HD2_ImpulseResponse1024","name":"IR 1024","image":"FX_HX_IR_1024.png","params":[{"Index":"IR Select"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null}]},{"id":"HD2_ImpulseResponse2048","name":"IR 2048","image":"FX_HX_IR_2048.png","params":[{"Index":"IR Select"},{"LowCut":"Low Cut"},{"HighCut":"High Cut"},{"Mix":null},{"Level":null}]}]},{"name":"Dual","id":5,"models":[{"id":"HD2_ImpulseResponse1024Dual","name":"IR 1024","image":"FX_HX_IR_Dual_1024.png","params":[{"Index":"IR Select A"},{"LowCut":"Low Cut A"},{"HighCut":"High Cut A"},{"A Level":"Level A"},{"A Pan":"Pan A"},{"A Polarity":"Polarity A"},{"Index_1":"IR Select B"},{"LowCut_1":"Low Cut B"},{"HighCut_1":"High Cut B"},{"Level_1":"Level B"},{"B Pan":"Pan B"},{"B Polarity":"Polarity B"},{"Delay":null},{"Mix":null}],"page_count":3,"page_names":["IR A","IR B","Both"],"param_pages":{"Index":0,"LowCut":0,"HighCut":0,"A Level":0,"A Pan":0,"A Polarity":0,"Index_1":1,"LowCut_1":1,"HighCut_1":1,"Level_1":1,"B Pan":1,"B Polarity":1,"Delay":2,"Mix":2}}]}]},{"id":15,"name":"Volume/Pan","image":"FX_HX_Category_VolumePan.png","shortName":"Vol","color":"0x38A696","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_VolPanVol","name":"Volume","image":"VOL_HX_VolumePedal.png","params":[{"Pedal":"Position"},{"VolumeTaper":"Curve"}]},{"id":"HD2_VolPanGain","name":"Gain","image":"VOL_HX_Gain.png","params":[{"Gain":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_VolPanVol","use_subcategory":4},{"id":"HD2_VolPanGain","use_subcategory":4},{"id":"HD2_VolPanPan","name":"Pan","image":"VOL_HX_Pan.png","params":[{"Pedal":"Pan"}]},{"id":"HD2_VolPanStereoWidth","name":"Stereo Width","image":"VOL_HX_StereoWidth.png","params":[{"Width":null},{"LR In Swap":null},{"Balance":null},{"Level":null},{"R Polarity":null}]},{"id":"HD2_VolPanStereoImager","name":"Stereo Imager","image":"VOL_HX_StereoImager.png","params":[{"Mode":null},{"Width":null},{"Rotation":"Pan"},{"Level":null}]}]}]},{"id":16,"name":"Send/Return","image":"FX_HX_Category_SendReturn.png","shortName":"Snd/Rtn","color":"0x38A696","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_SendMono1","name":"Send 1","image":"SENDRETURN_HX_Send1.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_SendMono2","name":"Send 2","image":"SENDRETURN_HX_Send2.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_SendMono3","name":"Send 3","image":"SENDRETURN_HX_Send3.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_SendMono4","name":"Send 4","image":"SENDRETURN_HX_Send4.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_ReturnMono1","name":"Return 1","image":"SENDRETURN_HX_Return1.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_ReturnMono2","name":"Return 2","image":"SENDRETURN_HX_Return2.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_ReturnMono3","name":"Return 3","image":"SENDRETURN_HX_Return3.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_ReturnMono4","name":"Return 4","image":"SENDRETURN_HX_Return4.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_FXLoopMono1","name":"FX Loop 1","image":"SENDRETURN_HX_FXLoop1.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]},{"id":"HD2_FXLoopMono2","name":"FX Loop 2","image":"SENDRETURN_HX_FXLoop2.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]},{"id":"HD2_FXLoopMono3","name":"FX Loop 3","image":"SENDRETURN_HX_FXLoop3.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]},{"id":"HD2_FXLoopMono4","name":"FX Loop 4","image":"SENDRETURN_HX_FXLoop4.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_SendStereo1_2","name":"Send 1/2","image":"SENDRETURN_HX_Send1-2.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_SendStereo3_4","name":"Send 3/4","image":"SENDRETURN_HX_Send3-4.png","params":[{"Send":null},{"DryThru":"Dry Thru"}]},{"id":"HD2_ReturnStereo1_2","name":"Return 1/2","image":"SENDRETURN_HX_Return1-2.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_ReturnStereo3_4","name":"Return 3/4","image":"SENDRETURN_HX_Return3-4.png","params":[{"Return":null},{"Mix":null}]},{"id":"HD2_FXLoopStereo1_2","name":"FX Loop 1/2","image":"SENDRETURN_HX_FXLoop1-2.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]},{"id":"HD2_FXLoopStereo3_4","name":"FX Loop 3/4","image":"SENDRETURN_HX_FXLoop3-4.png","params":[{"Send":null},{"Return":null},{"Mix":null},{"@trails":"Trails"}]}]}]},{"id":17,"name":"Looper","image":"FX_HX_Category_Looper.png","shortName":"Loop","color":"0x989898","subcategories":[{"name":"Mono","id":4,"models":[{"id":"HD2_Looper","name":"6 Switch Looper","image":"LOOPER_HX_MonoLooper.png","params":[{"Playback":null},{"Overdub":null},{"lowCut":"Low Cut"},{"highCut":"High Cut"}]},{"id":"HD2_LooperOneSwitch","name":"1 Switch Looper","image":"LOOPER_HX_MonoOompaLooper.png","params":[{"Playback":null},{"Overdub":null},{"lowCut":"Low Cut"},{"highCut":"High Cut"}]},{"id":"ShufflingLooper","name":"Shuffling Looper","image":"LOOPER_HX_ShufflingLooper.png","hidden":true,"params":[{"Slices":null},{"SeqLength":null},{"Shuffle":null},{"Octaves":null},{"Reverse":null},{"Repeat":null},{"Smoothing":null},{"Seq Drift":null},{"Playback":null},{"Low Cut":"Low Cut"},{"High Cut":"High Cut"}]},{"id":"VIC_LooperShuffling","name":"Shuffling Looper","image":"LOOPER_HX_ShufflingLooper.png","params":[{"Slices":null},{"SeqLength":null},{"Shuffle":null},{"Pitch":null},{"Reverse":null},{"Repeat":null},{"Smoothing":null},{"Seq Drift":null},{"Playback":null},{"Low Cut":"Low Cut"},{"High Cut":"High Cut"},{"Interval 1":null},{"Interval 2":null}]}]},{"name":"Stereo","id":5,"models":[{"id":"HD2_Looper","use_subcategory":4},{"id":"HD2_LooperOneSwitch","use_subcategory":4},{"id":"ShufflingLooper","use_subcategory":4},{"id":"VIC_LooperShuffling","use_subcategory":4}]}]},{"id":18,"name":"Input","image":"icon-input-category.png","shortName":"Input","color":"0x989898","models":[{"id":"HD2_AppDSPFlow1Input","name":"Input","image":"icon-input-category.png","image_native":"icon-inputs-native.png","params":[{"noiseGate":"Input Gate"},{"threshold":"Threshold"},{"decay":"Decay"},{"@guitarinputZ":"Guitar In-Z"},{"@guitarpad":"Guitar Pad"}]},{"id":"HD2_AppDSPFlow2Input","name":"Input","image":"icon-input-category.png","image_native":"icon-inputs-native.png","params":[{"noiseGate":"Input Gate"},{"threshold":"Threshold"},{"decay":"Decay"},{"@guitarinputZ":"Guitar In-Z"},{"@guitarpad":"Guitar Pad"}],"hidden":"true"},{"id":"HelixFx_AppDSPFlowInput","name":"Input","image":"icon-input-category.png","image_native":"icon-inputs-native.png","params":[]},{"id":"HelixStomp_AppDSPFlowInput","name":"Input","image":"icon-input-category.png","image_native":"icon-inputs-native.png","params":[{"noiseGate":"Input Gate"},{"threshold":"Threshold"},{"decay":"Decay"},{"@guitarinputZ":"In-Z"},{"@guitarpad":"Guitar Pad"}]}]},{"id":19,"name":"Output","image":"icon-output-category.png","shortName":"Output","color":"0x989898","models":[{"id":"HD2_AppDSPFlowOutput","image":"icon-output-category.png","image_native":"icon-outputs-native.png","name":"Output","params":[{"pan":"Pan"},{"gain":"Level"}]},{"id":"HelixFx_AppDSPFlowOutput","image":"icon-output-category.png","image_native":"icon-outputs-native.png","name":"Output","params":[{"pan":"Pan"},{"gain":"Level"}]},{"id":"HelixStomp_AppDSPFlowOutputMain","image":"icon-output-category.png","image_native":"icon-outputs-native.png","name":"Output","params":[{"pan":"Pan"},{"gain":"Level"}]},{"id":"HelixStomp_AppDSPFlowOutputSend","image":"icon-output-category.png","image_native":"icon-outputs-native.png","name":"Output","params":[{"pan":"Pan"},{"gain":"Level"},{"Type":null}]}]},{"id":20,"name":"Split","image":"FX_HX_Category_Split.png","shortName":"Split","color":"0x989898","models":[{"id":"HD2_AppDSPFlowSplitY","name":"Split Y","image":"FX_HX_Split.png","params":[{"BalanceA":"Balance A"},{"BalanceB":"Balance B"}]},{"id":"HD2_AppDSPFlowSplitAB","name":"Split A/B","image":"FX_HX_Split.png","params":[{"RouteTo":"Route To"}]},{"id":"HD2_AppDSPFlowSplitXOver","name":"Split Crossover","image":"FX_HX_Split.png","params":[{"Frequency":null},{"Reverse":null}]},{"id":"HD2_AppDSPFlowSplitDyn","name":"Split Dynamic","image":"FX_HX_Split.png","params":[{"Threshold":null},{"Attack":null},{"Decay":null},{"Reverse":null}]}]},{"id":21,"name":"Merge","image":"FX_HX_Category_Merge.png","shortName":"Merge","color":"0x989898","models":[{"id":"HD2_AppDSPFlowJoin","name":"Mixer","image":"FX_HX_Join.png","params":[{"A Level":null},{"A Pan":null},{"B Level":null},{"B Pan":null},{"B Polarity":null},{"Level":null}]}]},{"id":22,"name":"Connected Devices","image":null,"shortName":"Devices","color":"0x989898","models":[{"id":"@variax","name":"Variax","image":"icon-variax.png","params":[{"@variax_model":"Model"},{"@variax_volumeknob":"Volume Knob"},{"@variax_toneknob":"Tone Knob"},{"@variax_lockctrls":"Lock Control"},{"@variax_customtuning":"Tuning"},{"@variax_str6tuning":"String 6 Tuning"},{"@variax_str5tuning":"String 5 Tuning"},{"@variax_str4tuning":"String 4 Tuning"},{"@variax_str3tuning":"String 3 Tuning"},{"@variax_str2tuning":"String 2 Tuning"},{"@variax_str1tuning":"String 1 Tuning"},{"@variax_str6level":"String 6 Level"},{"@variax_str5level":"String 5 Level"},{"@variax_str4level":"String 4 Level"},{"@variax_str3level":"String 3 Level"},{"@variax_str2level":"String 2 Level"},{"@variax_str1level":"String 1 Level"}]},{"id":"@powercab","name":"Powercab","image":"icon-powercab.png","params":[{"@powercab_speaker":"Speaker Type"},{"@powercab_mic":"DI Mic"},{"@powercab_distance":"Distance"},{"@powercab_userir":"User IR"},{"@powercab_lowcut":"Low Cut"},{"@powercab_hicut":"Hi Cut"},{"@powercab_flatlevel":"Flat Level"},{"@powercab_speakerlevel":"Speaker Level"},{"@powercab_irlevel":"IR Level"},{"@powercab_color":"Color"}]},{"id":"@dt","name":"DT 25/50","image":"icon-dt.png","params":[{"@dt_channel":"Channel"},{"@dt_topology":"Topology"},{"@dt_poweramp":"Power Amp"},{"@dt_tubeconfig":"Tube Config"},{"@dt_reverb":"Reverb"},{"@dt_revmix":"Rev Mix"},{"@dt_12ax7boost":"12AX7 Boost"},{"@dt_feedbackcap":"Feedback Cap"},{"@dt_bplusvoltage":"B+ Voltage"}]}]},{"id":23,"name":"Favorites","image":"FX_HX_Category_Favorites.png","shortName":"Favorites","color":"0xF0F0F0"}]`)
    , $y = {
        categories: qy
    }
    , Ky = [{
        id: "HD2_PreampVintagePre",
        basedOn: "Line 6 Original",
        synopsis: '<p>This model is used for the vocals in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpWhoWatt100", "HD2_PreampWhoWatt100"],
        basedOn: "Hiwatt® DR-103 Brill",
        manualUrl: "https://jasonshimmy.com/music/amps/hiwatt/dr-103",
        synopsis: "<p>Amp with a brilliant chime and unique tone-stack. If you need more gain, crank the drive and master. This amp has a special Master, an additional gain stage between the master volume and the phase inverter, then the model matches this trait.</p>",
        notableUsers: "<p>Pete Townshend's Live at Leeds-era tone with The Who in the late '60s, as well as David Gilmour's soaring lead work with Pink Floyd in the '70s.</p>"
    }, {
        id: ["HD2_AmpSoupPro", "HD2_PreampSoupPro"],
        basedOn: "Supro® S6616",
        manualUrl: "https://jasonshimmy.com/music/amps/supro/s6616",
        synopsis: '<p>Wind it up, and the S6616 offers juicy, brown overdrive that can sound like a raging stack when mixed with the track, yet with a character all its own. Reined in to clean volumes, it has a beautifully crisp spank. And at all levels the 6"x9" speaker yields nodes and peaks that contribute to an unusual and distinctive sonic voice that has come to be known as the Supro sound.</p>',
        notableUsers: "<p>Jimmy Page has admitted to using a Supro amp to record most of the first two Led Zeppelin albums.</p>"
    }, {
        id: ["HD2_AmpStoneAge185", "HD2_PreampStoneAge185"],
        basedOn: "Gibson® EH-185",
        manualUrl: "https://jasonshimmy.com/music/amps/gibson/eh-185",
        synopsis: "<p>The EH-185 makes a surprisingly versatile voice for sculpting anything from vintage jazz tones to raw rock 'n roll when cranked up, and sits beautifully in a full-band mix, both live and in the studio.</p>",
        notableUsers: "<p>Seminal jazzer Charlie Christian is believed to have moved up to an EH-185 combo before his death, about the same time that he stepped up from his original Gibson ES-150 guitar to an ES-250. In a more modern setting, it has shared the stage with Queen Of The Stone Age's Josh Homme.</p>"
    }, {
        id: ["HD2_AmpTweedBluesNrm", "HD2_AmpTweedBluesBrt", "HD2_PreampTweedBluesNrm", "HD2_PreampTweedBluesBrt"],
        basedOn: "Fender® Bassman",
        buyUrl: "https://amzn.to/4a475YS",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/bassman",
        synopsis: "<p>An amp with the fat bottom end you'd expect from a bass amp, but also has the Fender® twang on the top. Try a Drive setting of about 4 or 5 — it's guaranteed to dredge up the best R & B licks you know. Sounds great with a Booster Drive (Treble) in front. The normal channel is the mellower of the two, with less brightness and gain than the Bright channel. The bright channel utilizes the second half of the first preamp tube for a different voicing. High frequencies are increased due to the addition of a bright cap across the volume knob.",
        notableUsers: "<p>The Bassman doesn't have a master volume, so like all amps of this era, you had to crank this mutha up to get that dirty tone revered by all Bassman enthusiasts! As Buddy Guy, Bruce Springsteen, Jimmy Vaughan, and so many others would tell you, when you're talking vintage amps, the Bassman really is ground-zero for big-combo tone.</p></p>"
    }, {
        id: ["HD2_AmpUSSmallTweed", "HD2_PreampUSSmallTweed"],
        basedOn: "Fender® Champ®",
        buyUrl: "https://amzn.to/3qyJojP",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/champ",
        synopsis: '<p>In the tweed champ, the bass and treble are after the amp modeling, but the midrange control is between the two preamp gain stages. The midrange knob can become a cool drive feature. Tweed amplifiers typically break up earlier than later "cleaner" models and are known for their warm-sounding overdrive.',
        notableUsers: "<p>Eric Clapton used the Champ almost exclusively for Derek and the Dominos. Other notable users are Joe Perry and Brad Whitford of Aerosmith as well as Joe Walsh and Slash.</p></p>"
    }, {
        id: ["HD2_AmpUSDeluxeNrm", "HD2_AmpUSDeluxeVib", "HD2_PreampUSDeluxeNrm", "HD2_PreampUSDeluxeVib"],
        basedOn: "Fender® Deluxe Reverb®",
        buyUrl: "https://amzn.to/37s499A",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/deluxe",
        synopsis: "<p>The Normal channel is the mellower of the two, with less brightness and gain than the Vibrato channel. The Vibrato channel is a separate preamp circuit with tone and clipping characteristics that are different than the Normal channel due to an additional 12Ax7 tube stage. High frequencies are increased due to the addition of a bright cap across the volume knob. Most players love a Deluxe Reverb® when it's turned up to about 7 for a nice gritty sound that cleans up when you back off your guitar's volume knob just a little. Notice how the tone control response changes as this Amp Model's Drive is changed: clean settings are crisp and present, while more driven settings will mellow the high end. This is typical of what you get from a Deluxe Reverb® and is nicely captured here.",
        notableUsers: "<p>Muddy Waters, Mike Campbell, Jackson Brown, Vince Gill, Elvis Costello, Pete Townshend, Buddy Guy. Honestly, this list could go on and on.</p></p>"
    }, {
        id: ["HD2_AmpUSDoubleNrm", "HD2_AmpUSDoubleVib", "HD2_PreampUSDoubleNrm", "HD2_PreampUSDoubleVib"],
        basedOn: "Fender® Twin Reverb®",
        buyUrl: "https://amzn.to/3uaSG7U",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/twin",
        synopsis: "<p>An all-time classic of biting twang and shimmering clean tones, the Fender Twin Reverb first hit the scene in 1964 and quickly became the standard for large, fully featured touring combos. The Normal channel is the mellower of the two, with less gain than the Vibrato channel. The Vibrato channel is a separate preamp circuit with clipping characteristics that are different than the Normal channel due to an additional 12Ax7 tube stage.",
        notableUsers: "<p>Played clean but singing with a Telecaster, this is the sound of Roy Buchanan; cranked with a Les Paul, it's pure Michael Bloomfield. It never gets extremely overdriven and dirty, mostly just louder-a lot louder.</p></p>"
    }, {
        id: ["HD2_AmpMailOrderTwin", "HD2_PreampMailOrderTwin"],
        basedOn: "Silvertone® 1484",
        manualUrl: "https://jasonshimmy.com/music/amps/silvertone/1484",
        synopsis: "<p>These amps are famous for their nice smooth overdrive but they've also got a sweet clean tone at lower volumes.",
        notableUsers: "<p>Some notable users of this amp are Jack White, Beck, and Coldplay.</p></p>"
    }, {
        id: ["HD2_AmpDividedDuo", "HD2_PreampDividedDuo"],
        basedOn: "÷13 JRT 9/15",
        manualUrl: "https://jasonshimmy.com/music/amps/divided-by-13/jrt915",
        synopsis: '<p>Divided by 13 creates two differently voiced but blendable channels for a simple yet incredibly versatile front end. The result is a palette of tones that remind you of the best American "tweed" and classic British amps, while somehow sounding entirely unique throughout their range. Each volume controls the two 5879 tubes. One is voiced with more gain and darker, the other is brighter with less gain.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rfbD1odfH4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        notableUsers: "<p>Famous Divided By 13 Users include Lyle Workman of Beck, Rusty Anderson, Jackson Browne, and Ronnie Wood.</p>"
    }, {
        id: ["HD2_AmpInterstateZed", "HD2_PreampInterstateZed"],
        basedOn: "Dr Z® Route 66",
        manualUrl: "https://jasonshimmy.com/music/amps/dr-z/route-66",
        synopsis: '<p>This amp achieves an extremely touch sensitive, full-bodied "milkshake thick" overdrive when pushed, without ever losing its impressive clarity and definition. Treble and bass operate regularly until 50%, and dial in gain once turned past 50%. To put this amp into overdrive, crank all three controls (Drive, Treble, Bass), use humbuckers and possibly an overdrive pedal.</p>'
    }, {
        id: ["HD2_AmpJazzRivet120", "HD2_PreampJazzRivet120"],
        basedOn: "Roland® JC-120 Jazz Chorus",
        buyUrl: "https://amzn.to/37sxqAP",
        manualUrl: "https://jasonshimmy.com/music/amps/roland/jc120",
        synopsis: "<p>Roland Jazz Chorus is a solid-state instrument amplifiers produced in Japan since 1975. Its name comes from its built-in analog chorus effect. The Jazz Chorus series became increasingly popular in the late 1970s and early 1980s new wave and post-punk scenes because of its clean yet powerful sound.",
        notableUsers: "<p>Its earliest users included Albert King, Andy Summers (The Police), Robert Smith of The Cure and Siouxsie and the Banshees, and Pat Metheny. James Hetfield and Kirk Hammett of Metallica use it for their clean tones as well.</p></p>"
    }, {
        id: ["HD2_AmpEssexA15", "HD2_PreampEssexA15"],
        basedOn: "Vox® AC-15",
        buyUrl: "https://amzn.to/3ucMxrN",
        manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15",
        synopsis: "<p>For the AC-15, the master volume is post-phase-inverter in the full amp model. This allow the user to use the Drive knob to hit just the Phase Inverter tubes harder. However, in this amp the power tubes can distort a LOT. When this is combined with the fact that the preamp doesn't distort a whole lot on its own, it can produce a situation where turning the preamp up and the master volume down will clean up the sound quite a bit. The preamp barely distorts and the power amp distorts a TON. This is the opposite of many amps where the preamp is designed to distort and, while the power amp can distort as well, most of the crunch comes from smashing the preamp.",
        notableUsers: "<p>Early Beatles recordings and the James Bond theme from Dr. No feature the Vox AC-15.</p></p>"
    }, {
        id: ["HD2_AmpEssexA30", "HD2_PreampEssexA30"],
        basedOn: "Vox® AC-30 with top boost",
        buyUrl: "https://amzn.to/2M2uuU6",
        manualUrl: "https://jasonshimmy.com/music/amps/vox/ac30",
        synopsis: "<p>The Vox AC-30 with Top Boost was the amp made famous by many British invasion bands. Much of the unique character of the Vox® sound can be attributed to the fact that Class A amps overdrive in a very different way than Class AB. Although usually played fairly clean, a cranked AC 30 has a great saturated lead tone.</p><p><strong>Tips:</strong> Starting Point: Master 10, set Drive to taste, Mid 5 (50%), Instead of turning up Drive, try boosting the input signal before the amp. Cabinet suggestion: Alinco Silver Or use (or combine with) Marshall greenbacks (4x12 20w or 25w). Alternative: Red Wirez Vox and Marshall greenbacks, Ownhammer Blue and greenbacks.</p>",
        notableUsers: "<p>The Beatles, The Shadows, Tom Petty & The Heartbreakers, Brian May of Queen, Peter Buck of R.E.M., and Foo Fighters have all used classic AC-30s to make their music.</p>"
    }, {
        id: ["HD2_AmpA30FawnNrm", "HD2_AmpA30FawnBrt", "HD2_PreampA30FawnNrm", "HD2_PreampA30FawnBrt"],
        basedOn: "Vox® AC-30 Fawn",
        buyUrl: "https://amzn.to/3s5WWUn",
        manualUrl: "https://jasonshimmy.com/music/amps/vox/ac30",
        synopsis: "<p>The Vox AC-30 Fawn contains two channels. Both the bright channel and the normal channel only hit one preamp stage before going to the phase inverter in the power amp. All of the saturation of this amp comes from the power amp, and it can get pretty dirty. The bright channel is pretty bright when run clean, but that brightness when driving the power amp results in a wonderfully rich and harmonically complex overdrive. It's quite responsive to saturation with picking dynamics and volume knob control. Turning up the Bias knob reduces crossover distortion the best, but there are no wrong knob settings. If you like the sound coming out, the knobs are set right for you.",
        notableUsers: "<p>The Beatles first recordings in the Abbey Road studio used a fawn.</p></p>"
    }, {
        id: ["HD2_AmpMatchstickCh1", "HD2_AmpMatchstickCh2", "HD2_AmpMatchstickJump", "HD2_PreampMatchstickCh1", "HD2_PreampMatchstickCh2", "HD2_PreampMatchstickJump"],
        basedOn: "Matchless® DC30",
        manualUrl: "https://jasonshimmy.com/music/amps/matchless/dc30",
        synopsis: '<p>Pure "Class A" configuration gives rich, complex harmonics whether played clean, mildly overdriven, or with all out power tube saturation. This means you should sound great in any situation, in any music style. Similar to AC30 without breaking, Channel 2 similar to AC15.',
        notableUsers: "<p>Paul Jackson Jr., Chris Collingwood of Fountains of Wayne, Mike McCready of Pearl Jam, Neil Young, Coy Bowles of The Zac Brown Band, James Valentine of Maroon 5, Ben McKee of Imagine Dragons, Bob Dylan, and many more.</p></p>"
    }, {
        id: ["HD2_AmpMandarin80", "HD2_PreampMandarin80"],
        basedOn: "Orange® OR80",
        manualUrl: "https://jasonshimmy.com/music/amps/orange/or80",
        synopsis: "<p>The F.A.C. control stands for Frequency Analysing Control. It is a mid-range sweep that offers many variations on the Orange sound. Experiment with different settings for a variety of sounds. It is basically EQ settings from bassy all the way to the left and getting progressively thinner as you go to the right. Most people, set it all the way to the left or one click to the right from that.The FAC control switches between different interstage coupling capacitors which will change the low frequency cutoff/rolloff point of the preamp. In other words, it cuts bass increasingly with each click clockwise. The HF drive is a presence control, that boost/attenuate very high frequencies, comparing to other amplifiers. It's in between gain stages (2 to 3), so it does effect drive. You can call it a drive control, like the Eq, that is between stage 1 and 2.</p>"
    }, {
        id: ["HD2_AmpBritJ45Nrm", "HD2_AmpBritJ45Brt", "HD2_PreampBritJ45Nrm", "HD2_PreampBritJ45Brt"],
        buyUrl: "https://amzn.to/3s14ckk",
        basedOn: "Marshall® JTM-45",
        manualUrl: "https://jasonshimmy.com/music/amps/marshall/jtm-45",
        synopsis: "<p>The Normal channel is the mellower of the two, with less (as you'd expect) brightness and gain than the Bright channel. The Bright channel utilizes the second half of the first preamp tube (the Normal channel uses the first half only) for a different voicing. High frequencies are increased due to an inter-stage high shelving filter.</p><p><strong>Tips:</strong> It's a bass-heavy amp -> Decreasing Bass could be a good tip. Great for clean tones as well as rock tones.</p>",
        notableUsers: `<p>This is the exact same amplifier as the Marshall® "Bluesbreaker" that Eric Clapton made famous, but in head form, rather than housed in a 2x12" combo. This is your starting if you're looking for that 'beano' tone.</p>`
    }, {
        id: ["HD2_AmpBritPlexiNrm", "HD2_AmpBritPlexiBrt", "HD2_AmpBritPlexiJump", "HD2_PreampBritPlexiNrm", "HD2_PreampBritPlexiBrt", "HD2_PreampBritPlexiJump"],
        basedOn: "Marshall® Super Lead 100",
        manualUrl: "https://jasonshimmy.com/music/amps/marshall/super-lead",
        buyUrl: "https://amzn.to/3ct4w6x",
        synopsis: `<p>A Plexi is supposed to sound fizzy (it's helps to cut through in a mix). Don't be afraid to turn the bass all the way down or the treble all the way up. Just like with the actual amp. For example, on the normal channel of a Plexi most people turn the bass way down. Otherwise it's too flubby." Settings for a "typical" Plexi tone could be aprox. Bass: 2, Mid: 8, Treble 7.5. Presence adjust to taste.`,
        notableUsers: "<p>Users include Pete Towsend, Eric Clapton, Angus Young of AC/DC, and most famously, by Jimi Hendrix at his Woodstock performance.</p></p>"
    }, {
        id: ["HD2_AmpBritP75Nrm", "HD2_AmpBritP75Brt", "HD2_PreampBritP75Nrm", "HD2_PreampBritP75Brt"],
        basedOn: "Park® 75",
        manualUrl: "https://jasonshimmy.com/music/amps/park/75",
        synopsis: "<p>Although they were usually based loosely on circuits used in classic Marshall amps, Park models were often given clever new twists, such as the increased front-end gain in the 75 and the use of military-grade KT88 output tubes rather than the traditional EL34s. Add it all up, and it's a sizzling, crunchy plexi-style tone like nothing you've ever heard before, equally adept at classic British blues-rock and contemporary grind. The Normal channel is the mellower of the two, with less brightness and gain than the Bright channel. The Bright channel utilizes the second half of the first preamp tube for a different voicing. High frequencies are increased due to an inter-stage high-shelving filter.</p>"
    }, {
        id: ["HD2_AmpBrit2204", "HD2_PreampBrit2204"],
        basedOn: "Marshall® JCM-800",
        buyUrl: "https://amzn.to/3avXugh",
        manualUrl: "https://jasonshimmy.com/music/amps/marshall/jcm-800",
        synopsis: "<p>Turn to this Amp Model to conjure up tones of the coveted JCM 800, one of Marshall's most universally acclaimed modern amps. This updated version of the Plexi continued Marshall's heritage with added gain and edge for a new generation of rock guitarists. One of the biggest differences here is that the tone controls are located after the preamp tubes.</p><p><strong>Tips:</strong> Turn up Master Volume. Try with a low-gain TS808 or Tube Drive. The real amp is too bright, you can adjust the various tone controls and parameters to reduce the brightness to your tastes with presence normally way down. They are designed to be run loud and the brightness decreases as the Master Volume is increased. If you don't push the power amp all you are hearing is the preamp which is voiced to be trebly. The power amp then compresses the highs and the sound gets fatter, but set Master Volume too high and it will get muddy. The sound of 80's hair metal, treble boosting amplifies the upper frequencies, however, that treble boosting helps the sound cut.</p>"
    }, {
        id: ["HD2_AmpGermanMahadeva", "HD2_PreampGermanMahadeva"],
        basedOn: "Bogner® Shiva",
        manualUrl: "https://jasonshimmy.com/music/amps/bogner/shiva",
        synopsis: "<p>The beauty of the Shiva is that it takes what Marshall did in the '70s and '80s and adds some modern appointments so that the user can achieve tones ranging from classic rock to heavy metal (the utilization of the boost feature works wonders here). One thing is constant, though: Swirling notes. It is hard to describe, but the Shiva has a midrange character that results in what sounds like a light swirling of each note and chord that creates a very harmonically rich tone.</p><p><strong>Tips:</strong> Bogner around noon (50%) are dark, it's like turning the treble way down on a Marshall. The treble knob at 50% on a Bogner is equivalent to the treble knob at 10% on a Marshall. If you turned the treble up to 8 or 9 it would sound a lot like a Plexi.</p>"
    }, {
        id: ["HD2_AmpGermanUbersonic", "HD2_PreampGermanUbersonic"],
        basedOn: "Bogner® Überschall®",
        manualUrl: "https://jasonshimmy.com/music/amps/bogner/uberschall",
        synopsis: "<p>This model is reminiscent of an 800, modded for heavier, grinding lows and what some call insane gain. The presence knob on the Bogner Ubserschall is more like a contour, affects most of the midrange as well.</p><p><strong>Tips:</strong> Heavy grinding lows and insane gain, it could be too boomy (low cut). From Real Amp manual: starting point control values, gain 60%, bass 60%, mid 60%, Treble 60%, Presence 60%. Keep the Master volume low (5 or less). Turn up Presence, add Mids</p>"
    }, {
        id: ["HD2_AmpCaliIVR1", "HD2_AmpCaliIVR2", "HD2_AmpCaliIVLead", "HD2_PreampCaliIVR1", "HD2_PreampCaliIVR2", "HD2_PreampCaliIVLead"],
        basedOn: "MESA/Boogie® Mark IV",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/mark-iv",
        synopsis: `<p>In 1984, Mesa / Boogie released the first "Tri-modal" amplifier, the Mark III. Tri modal, because it has separate modes for Clean sound, Crunch sound and Lead sound. The Mark IV, which came out six years later, significantly improved the ability to control each channel separately by introducing two controller knobs on the front panel, thus optimizing available space without increasing the Mark III's comfortable and versatile size. It is a complete amplifier, has all ranges, from blues, jazz, rock, heavy, even metal, has immense possibilities and just so make it especially complicated.</p>`
    }, {
        id: ["HD2_AmpCaliRectifire", "HD2_PreampCaliRectifire"],
        basedOn: "MESA/Boogie® Dual Rectifier®",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/dual-rectifier",
        synopsis: `<p>Based on a 2001, 3 Channel Mesa/Boogie® Dual Rectifier® Solo Head. The Dual Rectifier® was part of Boogie's more modern, high gain approach for that "big hair" sound. In contrast to the earlier Boogies, the Dual Rectifier's tone controls have more influence at high gain settings, so you can scoop the mids and increase the bottom end. We used Channel 3 on the Modern setting for this one with the rear switches set to Bold and Tube Rectifier®, respectively.</p><p><strong>Tips:</strong> Real Rectos are bassy/fizzy beasts but that tone works great for certain genres. This is based on the Modern mode, so be very careful with the Master parameter. If you turn it up too high it will flub out really quick. If in doubt reduce the MV (because there is no negative feedback, the power amp has a lot more gain and a huge bass boost).</p>`
    }, {
        id: ["HD2_AmpANGLMeteor", "HD2_PreampANGLMeteor"],
        basedOn: "ENGL® Fireball 100",
        manualUrl: "https://jasonshimmy.com/music/amps/engl/fireball-100",
        synopsis: `<p>Great for aggressive, drop-tuned riff work, Based on* 2009 ENGL® Fireball 100 (German) Designed to redefine the stereotypical "shred" sound and dial in a more musical lower-midrange and bass response, the ENGL Fireball 100 has become one of the new standards of contemporary rock and metal.</p><p><strong>Tips:</strong> Since the Treble and Presence control knobs sweep through different frequency ranges and influence the signal at different places in the amp's internal signal chain, you can dial in different combinations of treble and presence settings to come up with many interesting sonic variations.</p>`
    }, {
        id: ["HD2_AmpSoloLeadClean", "HD2_AmpSoloLeadCrunch", "HD2_AmpSoloLeadOD", "HD2_PreampSoloLeadClean", "HD2_PreampSoloLeadCrunch", "HD2_PreampSoloLeadOD"],
        basedOn: "Soldano SLO-100",
        manualUrl: "https://jasonshimmy.com/music/amps/soldano/slo-100",
        buyUrl: "https://amzn.to/39lp13d",
        synopsis: "<p>Much of the love for the SLO-100 is due to not only its juicy high gain tones, but also its clean and crunchy capabilities. The SLO-100 features two channels, Normal and Overdrive, with a Clean / Crunch gain switch on the Normal channel.</p><p><strong>Solo Lead Clean:</strong> This model of the Normal channel switched to Clean provides the most headroom and a variety of warm to shimmery clean tones.</p><p><strong>Solo Lead Crunch:</strong> Here we've modeled the Normal channel switched to Crunch, which is superb for a range of distorted textures from polite to aggressive.</p><p><strong>Solo Lead Overdrive:</strong> A model of the Overdrive channel with some seriously tight bottom chunk to liquid, screaming lead capabilities.</p>",
        notableUsers: "<p>The SLO-100 was made an instant hit by early adopters Eric Clapton and Mark Knopfler, and used by a range of players, including Warren DeMartini, Warren Haynes, Lou Reed, and Eddie Van Halen.</p>"
    }, {
        id: ["HD2_AmpPVPanama", "HD2_PreampPVPanama"],
        basedOn: "Peavey® 5150®",
        buyUrl: "https://amzn.to/3s3LpoI",
        manualUrl: "https://jasonshimmy.com/music/amps/peavey/6505",
        synopsis: `<p>Well known for its high gain overdrive channel, and has seen widespread use by rock, hardcore and metal guitarists. An early breakthrough was its use by Colin Richardson and Andy Sneap, two "seminal" British producers of heavy metal; especially Machine Head's Burn My Eyes (1994) helped the 5150 gain a reputation for its sound, which "defined a generation of guitar tone".</p>`
    }, {
        id: ["HD2_AmpLine6Elektrik", "HD2_PreampLine6Elektrik"],
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/elektrik",
        synopsis: "<p>This high-voltage, face-melting original has interactive presence & mid-range controls, with more gain than you can shake a stick at. It has something from the first Bomber Uber.</p>"
    }, {
        id: ["HD2_AmpLine6Doom", "HD2_PreampLine6Doom"],
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/doom",
        synopsis: "<p>Here's a hybrid to fill a void for doom/sludge players. It's a JCM800 preamp going into a Hiwatt® power amp with some additional tweaks, to give you large amounts of gain and a rich, sag-induced reaction with a whole lot of bass.</p>"
    }, {
        id: ["HD2_AmpLine6Epic", "HD2_PreampLine6Epic"],
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/epic",
        synopsis: "<p>A metal-friendly beast that provides sustain for days at virtually any playing dynamic, giving up gobs of distortion with ease.</p>"
    }, {
        id: ["HD2_AmpLine62204Mod", "HD2_PreampLine62204Mod"],
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/2204-mod",
        synopsis: `<p>Hot rodding would usually entail internal modifications to the amplifier. This could just be changing the odd resistor/pot/cap value to change drive levels, tone etc… Or it could actually be a change to the signal path itself, such as adding and extra gain stage or wiring two different inputs in parallel on older Marshall amps. Marshall with extra gain mod. The original intent of the term "modded Marshall' was to achieve the added gain without resorting to a pedal. For instance GnR album Appetite for Destruction, was recorded with a Hot Rodded JCM 800.</p>`
    }, {
        id: ["HD2_AmpLine6Fatality", "HD2_PreampLine6Fatality"],
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/fatality",
        synopsis: "<p>It's a heavily modified Mesa Rectifier. It sounds a bit like a Mark V Extreme setting.</p>"
    }, {
        id: ["HD2_AmpTucknGo", "HD2_PreampTucknGo"],
        basedOn: "Ampeg® B-15NF Portaflex®",
        buyUrl: "https://amzn.to/3u5NGBH",
        manualUrl: "https://jasonshimmy.com/music/amps/ampeg/b-15nf-portaflex",
        notableUsers: "<p>If we had to sum up the amp's sound up in one sentence, we would simply say: Listen to James Jamerson's bass playing on the Motown®/Tamala records of the 1960's — The Supremes, The Four Tops, The Temptations, Marvin Gaye, Stevie Wonder, and many more. Jamerson played bass on more Motown hits than anyone else, and his choice for amplification was the Ampeg® B-15.</p>"
    }, {
        id: ["HD2_AmpSVBeastNrm", "HD2_AmpSVBeastBrt", "HD2_PreampSVBeastNrm", "HD2_PreampSVBeastBrt"],
        basedOn: "Ampeg® SVT®",
        buyUrl: "https://amzn.to/37rH7Qh",
        manualUrl: "https://jasonshimmy.com/music/amps/ampeg/svt",
        synopsis: "<p>For 30 years now, we've heard the tone and felt the power of the mighty Ampeg® SVT® that model is based on. This workhorse has appeared on innumerable recordings and arena stages worldwide - there is no equal to the original SVT®  of pure tube magic.",
        notableUsers: '<p>Its users have included everyone from The Rolling Stones to Van Halen, and pretty much every "rock" bass player in between.</p></p>'
    }, {
        id: ["HD2_AmpCaliBass", "HD2_PreampCaliBass"],
        basedOn: "MESA/Boogie® M9 Carbine",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/m9-carbine"
    }, {
        id: ["HD2_AmpCali400Ch1", "HD2_AmpCali400Ch2", "HD2_PreampCali400Ch1", "HD2_PreampCali400Ch2"],
        basedOn: "MESA/Boogie® Bass 400+",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/bass-400plus",
        synopsis: "<p><strong>CHANNEL ONE:</strong> Volume 1 offer a high headroom preamp that you might find preferable for active type basses. The gain is slightly lower than Channel 2 and the tonal personality is slightly different. The Pull Bright switch built into Volume 1 can be great for funk bass, as it accentuates the harmonics above the Treble control region.</p><p><strong>CHANNEL TWO:</strong> Input 2 and Volume 2 recreate the classic sounds of the D-180, The gain is slightly higher and may be better suited for traditional basses than Channel One. But be certain to sample both channels because their tonal personalities are both very usable with very interesting differences. It is even possible to preset the two channels.</p>"
    }, {
        id: ["HD2_AmpGCougar800", "HD2_PreampGCougar800"],
        basedOn: "Gallien-Krueger® GK 800RB",
        buyUrl: "https://amzn.to/3s6cU10",
        manualUrl: "https://jasonshimmy.com/music/amps/gallien-krueger/800rb",
        synopsis: "<p>Designed 20 years ago, the 800RB has long been a standard of the industry—the choice of countless bass players, touring bands, and backline companies. The amplifier head delivers 400W of biamp power in a rackmountable metal case, 3 voicing filters. Great deep, punchy sound. Roadworthy and studio friendly.",
        notableUsers: '<p>Geddy Lee had one. Will Lee used one on "Late Night With David Letterman". And bands like Def Leppard powered through a decade of pop metal with the 800RB.</p></p>'
    }, {
        id: ["HD2_AmpWoodyBlue", "HD2_PreampWoodyBlue"],
        basedOn: "Acoustic® 360",
        manualUrl: "https://jasonshimmy.com/music/amps/acoustic/360",
        synopsis: '<p>This model is used for the bass in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        notableUsers: "<p>Larry Graham himself used these towering stacks for the thumb, the stank and the funk. Led Zeppelin's virtuosic bassist John Paul Jones had to keep up with Jimmy Page, for the love of Pete, and with the Acoustic 360. Jaco Pastorius saved all his money (legend has it, sleeping on the beach when his bandmates on the road slept in hotel beds) and eventually purchased an Acoustic 360, which gave Jaco's fretless J-bass that instantly-recognizable bump in the upper-mids that provided him bassdom's most enduring, original voice.</p>"
    }, {
        id: ["HD2_AmpDelSol300", "HD2_PreampDelSol300"],
        basedOn: "Sunn® Coliseum 300",
        manualUrl: "https://jasonshimmy.com/music/amps/sunn/coliseum-300",
        synopsis: `<p>It's got a great strong tone, and the eq is extremely flexible and powerful.There are filters "in between" each band of the EQ, so they don't effect each other. You can boost the 62.5hz, and not effect the 125hz, so on. Which is the exact opposite of say, the Fender tone stack, where you turn down the mids to turn up the other stuff.</p>`
    }, {
        id: ["HD2_AmpBusyOneCh1", "HD2_AmpBusyOneCh2", "HD2_AmpBusyOneJump", "HD2_PreampBusyOneCh1", "HD2_PreampBusyOneCh2", "HD2_PreampBusyOneJump"],
        basedOn: "Pearce BC-1",
        manualUrl: "https://jasonshimmy.com/music/amps/pearce/bc-1",
        synopsis: "<p>Very Rare Preamp made famous by Billy Sheehan. The Pearce Pre-amp is just a supremely great distortion and clean. This pre amp is solid state. It has 2 channels, which can be used separately or coupled, w/ built in distortion. It has a -10dB/0dB/+10dB switch (pretty cool if you need less or more punch without having to change your settings all the time). Each channel has a gain - bass - mid range - mid - treble  - volume controls and built in compressor/limiter with adjustable threshold. Each channel can be used separately, or combine them to create a wide range of tones.</p>"
    }, {
        id: ["HD2_AmpAgua51", "HD2_PreampAgua51"],
        basedOn: "Aguilar® DB751",
        manualUrl: "https://jasonshimmy.com/music/amps/aguilar/db-751",
        buyUrl: "https://amzn.to/3stlAyR",
        synopsis: '<p>The Aguilar DB® 751 combines the legendary tube-driven tone of the DB® 750 with greater EQ control. A perfect combination of raw power and excellent tone, the DB® 751 continues the legacy set by the world famous DB® 750. Delivering 975 Watts at 2 ohms and 750 Watts at 4 ohms, this amp has the headroom you need to play any size venue.</p><p><strong>Deep Switch:</strong> Adds&nbsp;5 dB&nbsp;of broadband boost at 30 Hz</p><p><strong>Bright Switch:</strong> Adds 5 dB of broadband boost&nbsp;at 5-7 kHz</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tIy5cv93dCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpArchetypeClean", "HD2_AmpArchetypeLead", "HD2_PreampArchetypeClean", "HD2_PreampArchetypeLead"],
        basedOn: "Paul Reed Smith® Archon®",
        buyUrl: "https://amzn.to/37s7w0e",
        manualUrl: "https://jasonshimmy.com/music/amps/paul-reed-smith/archon",
        synopsis: "<p>The Clean channel is rich a dimensional and stays clean to almost full volume. Reminiscent of the mesa and soldano cleans. The versatility of the three-band EQ lets you dial in tones from across the decades and across genres. The Lead channel starts out in hot-rodded Marshall territory and quickly works its way up into modern high gain tones. As long as you keep the Lead volume below noon, you can always clean things up with the volume knob on your guitar. If you crank the Lead volume beyond noon, totally higain.</p>"
    }, {
        id: ["HD2_AmpLine6Litigator", "HD2_PreampLine6Litigator"],
        basedOn: "Line 6 Original inspired by boutique mid-gain amps",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/litigator",
        synopsis: "<p>Based on a heavily modded Fender and then hammered on and tweaked. It wouldn't be impossible to make in the physical world, but it might get a little messy. removing a lot of the noise and irregularities that people find unpleasant, but adding just enough of the wrong things so they enhance without being a distraction. It's like a vintage amp with movie magic color correction and hyped depth of field. Like a dirty Vintage Deluxe, dumble-esqe, very smooth, mid-gain, edge-of-breakup model. In the same general neighborhood as the Pete Anderson Deluxe model that was in the HD model packs, but with more gain on tap.</p>"
    }, {
        id: ["HD2_AmpLine6Badonk", "HD2_PreampLine6Badonk"],
        basedOn: "Line 6 Original inspired by the original high gain Big Bottom model",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/badonk",
        synopsis: "<p>To create the Line 6 Badonk, the Big Bottom model from the XT code was rebuilt using new tools so that the overall EQ and pre-post distortion filtering matched. The previous tone stack was a little limited, so it was tuned up to have more range and provide a realistic, interactive response. To make this model feel more like a full amp, the power amp from the Fatality model (mesa rectifier mod) was added then tweaked slightly to reinforce the overall EQ curve of the Big Bottom. Tone Secret: The Big Bottom does not have a crap-load of low frequency. Instead, it is an amp with a slightly more than average amount of low end that can really hold together while being fed a lot of low frequency. It holds together well with heavily detuned guitars.</p>"
    }, {
        id: ["HD2_AmpVoltageQueen", "HD2_PreampVoltageQueen"],
        basedOn: "Victoria® Electro King",
        manualUrl: "https://jasonshimmy.com/music/amps/victoria/electro-king",
        synopsis: "<p>The Electro King is an idealized recreation of the classic McCarty era GA-40. Its circa 1957 circuit features two cathode biased 6V6s for 15watts of recording and small club power.</p><p>The heart and soul of the Electro King is its 5879 preamp circuit; a single NOS 5879 input pentode for each of the normal and tremolo channels provides rich distortion and natural tube compression at any volume setting.</p><p>Notes seem to be 'blown' out of the amp with overdriven tones that are saturated, dynamic and musical.</p>",
        notableUsers: "Jeff Tweedy of the band Wilco uses one."
    }, {
        id: ["HD2_AmpDerailedIngrid", "HD2_PreampDerailedIngrid"],
        basedOn: "Trainwreck Circuits® Express",
        manualUrl: "https://jasonshimmy.com/music/amps/trainwreck-circuits/express",
        synopsis: `<p>This model is used for the guitar tracks in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Around 1984, Ken Fischer designed the Trainwreck Express. This design was born out of a collaboration with a client who was constantly seeking modifications for his 1959 Marshall Super Lead to emulate Eddie Van Halen's tone.</p><p>He tweaked the Plexi's preamp circuit to drastically increase the gain and harmonics, but the amp was then far too loud for of practical use.</p><p>To make the amp quieter, Fischer reduced the output by switching out the four EL34 tubes for 6V6s. The client preferred the EL34 tone, however, so Fischer decided to reduce the output stage to two EL34s.</p>`,
        notableUsers: "Brad Paisley, Mark Knopfler of Dire Straits, and Matt O'Ree (touring musician with Bon Jovi)"
    }, {
        id: ["HD2_AmpBritTremNrm", "HD2_AmpBritTremBrt", "HD2_AmpBritTremJump", "HD2_PreampBritTremNrm", "HD2_PreampBritTremBrt", "HD2_PreampBritTremJump"],
        manualUrl: "https://jasonshimmy.com/music/amps/marshall/plexi",
        basedOn: "Marshall® Plexi Tremolo 50",
        buyUrl: "https://amzn.to/2M9nMMg",
        synopsis: '<p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2xI-3MVs2UY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpCartographer", "HD2_PreampCartographer"],
        basedOn: "Ben Adrian Cartographer",
        manualUrl: "https://jasonshimmy.com/music/amps/ben-adrian/cartographer",
        synopsis: "<p>A highly-modded, 50 watt Traynor head, the Cartographer was built by Ben Adrian for his band of the same name. Read more about it on Ben Adrian's blog linked above.</p>"
    }, {
        id: ["HD2_AmpCaliTexasCh1", "HD2_AmpCaliTexasCh2", "HD2_PreampCaliTexasCh1", "HD2_PreampCaliTexasCh2"],
        basedOn: "MESA/Boogie® Lonestar",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/lonestar",
        synopsis: `<p>CHANNEL 1 epitomizes the best of Black Face: a punchy, shimmering twang that gives way to furry smoothness. It's based on a traditional vintage/boutique gain structure to produce angelic and warm clean sounds in its low to medium gain ranges. Like most great tube amps, this channel can be driven to clip and produces incredible solo possibilities for blues or root chording styles.</p><p>CHANNEL 2 has a split personality. At the flick of a switch, it can clone the clean magic of Channel 1 (with an added touch of blues-roots gain) or kick in an additional high-gain amplifier with its own dedicated control. With stunning performance inspired by the pivotal Mark I, the interaction of three cascading gain controls unlocks the historic vault of ground-breaking lead sounds.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8avf8ZI5zMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }, {
        id: ["HD2_AmpPlacaterClean", "HD2_AmpPlacaterDirty", "HD2_PreampPlacaterClean", "HD2_PreampPlacaterDirty"],
        basedOn: "Friedman® BE-100",
        manualUrl: "https://jasonshimmy.com/music/amps/friedman/be-100",
        synopsis: `<p>Dave Friedman's "BE" circuit has been hailed as the epitome of British tone.&nbsp; In recent years, this tonal infusion has made the BE-100 one the most popular and sought after 100 Watt boutique amps.</p><p>Friedman's BE drive channels have earned their reputation for high-gain crunch, clarity and nuance. The clean channel has a crisp plexi tone.</p><p>See this video for an example:</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QnoyFBcMt7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }, {
        id: ["HD2_AmpFullertonNrm", "HD2_AmpFullertonBrt", "HD2_AmpFullertonJump", "HD2_PreampFullertonNrm", "HD2_PreampFullertonBrt", "HD2_PreampFullertonJump"],
        firmwareVersion: "2.80",
        basedOn: "1958 Fender® 5C3 Tweed Deluxe",
        buyUrl: "https://amzn.to/3pzP0sO",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/deluxe",
        synopsis: '<p>Watch this video for a great overview of this amp:</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/diJwRZ_Jcyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpGrammaticoNrm", "HD2_AmpGrammaticoBrt", "HD2_AmpGrammaticoJump", "HD2_PreampGrammaticoNrm", "HD2_PreampGrammaticoBrt", "HD2_PreampGrammaticoJump"],
        firmwareVersion: "2.80",
        basedOn: "2016 Grammatico® LaGrange",
        manualUrl: "https://jasonshimmy.com/music/amps/grammatico/la-grange",
        synopsis: "<p>Based on a Tweed Deluxe and designed to capture the tones of early ZZ Top, Neil Young, Keith Richards, Tom Petty, George Thorogood, Kenny Burrell, T-Bone Walker, and many other classic rock tones when plugged straight into the amp. It accepts either single coils or humbuckers equally well.</p><p>The tone is very woody, warm, round, and fat with throaty mids and sweet rounded highs with just enough zing to make it exciting and cutting. It's very organic, transparent, three dimensional with lots of bloom and harmonic richness.</p>"
    }, {
        id: ["HD2_AmpRevvGenRed", "HD2_PreampRevvGenRed"],
        firmwareVersion: "2.80",
        manualUrl: "https://jasonshimmy.com/music/amps/revv/generator-120",
        basedOn: "Gain 2 channel of the Revv® Generator 120",
        synopsis: "<p>The highest gain setting on the Revv Generator 120, the <strong>Red Channel</strong> has a touch-sensitive feel which takes you from warm old-school overdrive to the most massive modern tones available.</p>"
    }, {
        id: ["HD2_AmpSVT4Pro", "HD2_PreampSVT4Pro"],
        firmwareVersion: "2.80",
        basedOn: "Ampeg® SVT-4 Pro",
        buyUrl: "https://amzn.to/37o7IgL",
        manualUrl: "https://jasonshimmy.com/music/amps/ampeg/svt4-pro",
        synopsis: "SVT-4 PRO offers an expansive palette of tonal options. The Frequency control allows you to select the center frequency for the Midrange control, giving you five distinct voicing options for the Midrange. And if that's not enough, you can use the 9-Band Graphic EQ to fine-tune your sound—or use it to set up a footswitchable “second channel” with a volume boost for your bass solo."
    }, {
        id: ["HD2_AmpRevvGenPurple", "HD2_PreampRevvGenPurple"],
        firmwareVersion: "2.90",
        manualUrl: "https://jasonshimmy.com/music/amps/revv/generator-120",
        basedOn: "Gain 1 (purple) channel of the Revv® Generator 120",
        synopsis: '<p>The high gain <strong>Purple Channel</strong> is famous for its razor-sharp metal clarity, &amp; contains plenty of low end &amp; saturation without a loss in tightness.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TLcUUwdT9nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpUSPrincess", "HD2_PreampUSPrincess"],
        firmwareVersion: "3.00",
        basedOn: "Fender® Princeton Reverb",
        buyUrl: "https://amzn.to/2NlTztV",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/princeton",
        synopsis: `<p>A historically significant amp used on countless hit songs for decades. Today, the Princeton Reverb is as phenomenal looking, sounding and performing as ever, and is easily versatile enough to go from the living room to the recording studio to the gig with the great sound, style, reliability and authentic vintage vibe that Fender players know and love.&nbsp;</p><p>One of the coolest amps around, it's ideal for anyone who demands top-notch tube tone, naturally dynamic clean and overdriven sound, and unmistakable long-spring Fender reverb and tube vibrato.</p><p>This was one of the most popular additions to the Helix with firmware 3.0.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bnp0uTKALOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }, {
        id: ["HD2_AmpDasBenzinMega", "HD2_AmpDasBenzinLead", "HD2_PreampDasBenzinMega", "HD2_PreampDasBenzinLead"],
        firmwareVersion: "3.00",
        basedOn: "Diezel VH4",
        manualUrl: "https://jasonshimmy.com/music/amps/diezel/vh4",
        synopsis: "<p>The Mega channel delivers Diezel's trademark - highly-defined heavy metal rhythm sounds to soaring solo sounds.</p><p>The lead channel carries over from Mega, more gain, more compression, more bottom, more smooth top end - creamy, authoritative, loud.</p>"
    }, {
        id: ["HD2_AmpMandarinRocker", "HD2_PreampMandarinRocker"],
        firmwareVersion: "3.10",
        basedOn: "Orange® Rockerverb 100 MKIII (Dirty Channel)",
        buyUrl: "https://amzn.to/3bMg3gZ",
        manualUrl: "https://jasonshimmy.com/music/amps/orange/rockerverb",
        synopsis: '<p>The original Rockerverb gained a cult following on account of its iconic high gain tones. The MKIII continue this tradition, but this amps is immensely flexible.</p><p>The Dirty channel goes anywhere from clean to crunch to the very heaviest modern saturation, and always maintains outstanding clarity.</p><p>The non-master volume Clean channel has been engineered to take on a more “sparkly” “chimey”, and "crisp" response but with greater control through a two band EQ section.</p><p><strong>Differences from actual amp:</strong></p><p>The amp model has a touch <strong>less</strong> low end than the unit that was actually modeled.</p><p>One other difference is that when gain is below 5 (i.e. switching to gain stage 1 from 2), the level is not rolled off nearly as fast as the actual amp. This for the sake of usability since it drops <strong>extremely</strong> <strong>fast</strong> once you get down there on the physical unit.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9jpiheNGeZA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpLine6Ventoux", "HD2_PreampLine6Ventoux"],
        firmwareVersion: "3.15",
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/ventoux",
        synopsis: `<p>"The amp model name is Ventoux, which is a mountain in the south of France that is a legendary cycling climb. I did it in 2018 and it was awesome and very hard.</p><p>This model comes from a physical amp idea I had a while back. I was going to build it as a tube amp first. There are only so many hours in a day, though. The idea was to create a “coveted boutique amp” that had a different origin story. Most coveted boutique amps come from modified black panel Fenders or modified Marshall circuits. I wanted to do the same thing, but base it on the early 70s Orange circuits and the mid-wattage Fender Tweed circuits.</p><p>Ventoux has a unique topology. In an indirect way, every knob is kind of a gain/drive control. The tone controls adjust the character and/or amount of the overdrive in those frequencies. This might be seen as complicated by some, but I find it exciting and full of possibilities."</p><p>—Ben Adrian, Sound Design Manager</p><ul><li>Drive—Controls the amount of amp drive</li><li>HP Filter—Higher values result in tighter distortions and thinner cleans; lower values result in looser distortions and warmer cleans</li><li>Mid—Allows for more character than most. At lower values it's like the scooped sounds of traditional 60s Fender amps; at higher values it's flatter, like the 50s tweed amps that have very little tone-shaping in the circuits. Plus, a full-up mid sound will get a nice crunch when Drive is up</li><li>Presence/Depth—You may have noticed this amp was lacking regular bass and treble controls. That is accounted for with Depth and Presence controls; bass and treble for the power amp. These actually occur in the circuit just before phase inverter, but they really need the whole power amp to function. They also affect the character of the power amp distortion</li><li>Ch Vol—Sets the overall level of the Amp block</li><li>Master—Ventoux's Master volume exists in an "impossible" place for a physical amp. Generally, you'll want to leave this at 10.0, like a vintage amp with no master volume. However, a variety of textures can be had by reducing the level</li></ul>`
    }, {
        id: ["HD2_AmpMoonNrm", "HD2_AmpMoonBrt", "HD2_AmpMoonJump"],
        firmwareVersion: "3.50",
        basedOn: "Sunn Model T",
        manualUrl: "https://jasonshimmy.com/music/amps/sunn/model-t",
        synopsis: '<p><i>“The Moon model is based on a 1974, silver knob Sunn Model T amplifier. This is the early version with the more traditional tone stack. Though it has been repaired over the years, the circuit has every component at stock value. This specific unit has been well used, well maintained, and regularly enveloped in fog.</i></p><p><i>"This amp circuit can best be described as a Fender Tweed Bassman/Marshall JTM45 preamp mated with a very high volume, very flat, ultralinear power amp that uses 6550 tubes. The result of this configuration is a tone with a raw growl that really has a strong punch to the gut. In addition, this configuration takes pedals very well; adding a distortion or booster can turn the amp into a high gain, doom machine."</i></p><p><i>—Ben Adrian, Sound Design Manager</i></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jw08w-KWorc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpPVVitriolClean", "HD2_AmpPVVitriolCrunch", "HD2_AmpPVVitriolLead"],
        firmwareVersion: "3.50 & 3.70",
        basedOn: "Peavey Invective",
        buyUrl: "https://amzn.to/3g2EjjH",
        manualUrl: "https://jasonshimmy.com/music/amps/peavey/invective",
        synopsis: '<p>Peavey designed this 6L6 tube-powered monster in collaboration with Misha Mansoor of Periphery, with the goal of offering no-compromise, high-gain performance and flexibility.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/peLMJx0u48E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: ["HD2_AmpGSG100", "HD2_PreampGSG100"],
        firmwareVersion: "3.60",
        basedOn: "Grammatico GSG100",
        manualUrl: "https://jasonshimmy.com/music/amps/grammatico/gsg100",
        synopsis: `<p>The GSG100 is an authentic recreation of a Dumble Overdrive Special using the same vintage components acquired over decades as used in the late 70's - early 80's era Dumble amps. Painstaking and meticulously studied to learn and capture the tone as verified in side by side tests.</p><p>—</p><p><i>Per Ben Adrian, Sound Design Manager:&nbsp;</i></p><p><i>The Grammatico GSG100 is an amp based on the study of Dumble amps made around 1980. This model aims to capture all the unique details of this amplifier circuit, many of which are quite different than popular guitar amps from the major companies. The GSG100 is a feature-rich and complicated amp. There are many amazing sounds in the amp; however, the controls allow for such a wide range of adjustment that it's possible to get unpleasant sounds from it as well. To best use the amp, it really helps to know exactly what each of these features is doing to the guitar signal. Let's go through the parameters as they are found in the Helix model:</i></p><ul><li><strong>Drive</strong>—This is the first volume control on the amp. It's called "drive" on the model to fit the pattern of all the Helix models. On the real amp is says "Volume."</li><li><strong>Bass, Mid, Treble</strong>—The normal tone controls on the amp (called a tone stack by amp nerds), located between the first and second gain stages in the preamp. These have different ranges than traditional guitar amp tone controls. Also, the whole voicing of the tone stack can be changed with the "Rock/Jazz" switch, which will be explained later.</li><li><strong>Presence</strong>—This is like the presence controls on other guitar amps. It changes the amount of high frequency in the power amp by modifying the EQ filtering in the power amp's negative feedback loop.</li><li><strong>Ch Vol</strong>—This controls the output level of the amp model. It has no effect on the tone or distortion of the amp model</li><li><strong>Master</strong>—This is the master volume on the front panel of the amp. It is located between the preamp and power amp and can be used to get more or less power amp distortion. This amp is VERY loud, and most players would probably run the master volume on the lower side. If the master volume is cranked, the power amp distortion can be pushed into unpleasant territory. Most players would never crank the master in real life as the actual output would be way too loud for most musical settings.</li><li><strong>Mid Switch</strong>—This switch changes the value of the treble capacitor in the tone stack. When it is off, the amp has more of a scooped sound. When it is on, there is a noticeable upper-mid boost.</li><li><strong>Jazz/Rock</strong>—This switch changes the wiring of the tone stack circuit. It allows for two totally separate tonal voices. Jazz is quieter with a lower center frequency for the mids. Rock is louder with a more traditional mid frequency center. Tone controls rarely translate well between the Jazz and Rock settings. If a good sound is achieved in one mode, it is not guaranteed that the same settings in the opposite mode will still sound pleasing.</li><li><strong>OD Switch</strong>—This turns the two-gain-stage tube overdrive circuit on and off. This circuit is located AFTER the tone controls and Drive knob. When the overdrive is turned on it's as if a third and fourth gain stage is added to the preamp. Generally, it's best to set up the base tone of the amp with the Drive and tone controls first, and then adjust the overdrive circuit to work with the desired base tone.</li><li><strong>OD Drive</strong>—This controls the amount of drive or saturation in the overdrive circuit. Since the whole overdrive circuit is after the amp's regular drive and tone controls, the range of OD Drive knob will change based on those earlier knob settings.</li><li><strong>OD Level</strong>—This controls the output level of the overdrive circuit.</li><li><strong>Bright</strong>—This is a three position switch. The settings are "off" and two different values of bright capacitor. This bright capacitor works with the Drive (volume) knob earlier in the circuit, and is similar to other amps that have bright switches. When the Bright switch is engaged, the effect is more pronounced with lower Drive settings. The bright becomes less effective at higher Drive settings. When the Drive is at 10, the switch is effectively removed from the amp circuit, and changing the switch settings has no audible effect.</li><li><strong>FET Boost</strong>—The GSG100 has a solid state, FET (Field Effect Transistor) boost circuit at the very beginning of the amp circuit. It is akin to placing a FET Boost pedal before the amp. On the physical unit there are two input jacks, but on the model it is placed on a switch and can even be made foot-switchable. The FET Boost has a fixed boost amount of about 7 to 9 dB and also gives a slight EQ change.</li><li><strong>PAB</strong>—This stands for "Preamp Boost." The PAB works by removing the tone controls from the circuit. Tone controls work by removing frequencies and signal level. Engaging the PAB circuit returns all of this lost signal level, but the side effect is that tone controls no longer work. It truth, the treble knob does work slightly, and the mid switch will change how much lows and mids comes through the circuit. In general, though, the PAB trades tone control functionality for a full blast level between tube gain stages 1 and 2.</li><li><strong>Sag</strong>—This is a control that is added to all the Helix models. Every tube amp has some amount of power supply sag, which feels like compression, squish, and sustain to the player. This control makes the sag amount user-adjustable.</li><li><strong>Hum</strong>—This is a control that is added to most of the Helix models. Preamp tube heaters in tube amps will leak a little bit of 60 cycle hum into the audio signal. When this hum mixes with the distorted audio signal, a non-musical distortion is created at low levels. To some players, this low-level, non-harmonic distortion adds a bit of realism to the amp model. The best way to put it is that sometimes the model sounds more "wrong" without the hum. However, if you don't like it, you can just turn it down.</li><li><strong>Ripple</strong>—This is a control that is added to most of the Helix models. Power amp circuits will sometimes let a little bit of rectified 120Hz hum (that the power supply filter caps can't quite fully remove) into the audio signal. When the power supply is being pushed hard, more of this ripple can get through the audio path. Much like the hum, this provides a bit of non-musical distortion to the power amp at distorted settings. To some people, this sounds like harmonic complexity that is enjoyable and realistic. Other players just don't like it and turn it off.</li><li><strong>Bias</strong>—This control is in most Helix models. It adjusts the bias of the tubes in the power amp, causing a change in tonality and the distortion characteristic.</li><li><strong>Bias X</strong>—This is the most difficult parameter to describe in Helix models, so hang on. All tube amps need to bias the power amp tubes. This is usually achieved by applying a negative voltage to the input audio signal. (Cathode bias works differently, but that's a story for a different time.) However, when the power tubes are distorting, free electrons can form around the input grid and cause a shift in the bias voltage. This shift only happens during the moments when distortion is occurring. This shift causes a tonal and texture change much like adjusting the bias control. However, once the tubes leave the distorted state, the free electrons dissipate and the bias returns to normal. Another way to put it (less accurately) is that this is a level/envelope controlled bias shift. This behavior is modeled in all Helix amps, and the Bias X control allows users to control the amount of bias shift that is happening. It is a very subtle change, so please don't expect high drama from this knob.</li></ul>`
    }, {
        id: ["HD2_AmpLine6Elmsley", "HD2_PreampLine6Elmsley"],
        firmwareVersion: "3.60",
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/elmsley",
        synopsis: `<p>"The Line 6 Elmsley is a new Line 6 original amplifier that employs a parallel distortion topology that layers distinct saturation characteristics across the lower and upper registers. The Elmsley features a smooth and present bottom end with some exceptional sparkle and definition all through the midrange and above. The result is an amplifier that is dazzling across the full spectrum, and the amplifier deals with pedals in spades.</p><p>"The other new key feature of The Elmsley's power amp section is the Negative Feedback (NFB) parameter, where the amount of feedback within the power section's response can be dialed anywhere from wild and unhinged, tight and punchy, and anything in between. As with many amplifier designs, the presence and depth controls are part of this negative feedback circuit and functions to control the brilliance and resonance of the power amp, respectively. As the NFB param is reduced, the presence and depth controls' influences are also influenced, and they become effectively deactivated when the NFB knob is at zero. These interactions allow the player to create countless tonal variations to suit their needs.”</p><p>—Sam Hwang, Sound Designer</p>`
    }, {
        id: ["HD2_AmpAguaSledge", "HD2_PreampAguaSledge"],
        firmwareVersion: "3.60",
        basedOn: "Aguilar Tone Hammer",
        manualUrl: "https://jasonshimmy.com/music/amps/aguilar/tone-hammer",
        buyUrl: "https://amzn.to/3MvZp88",
        synopsis: "Featuring fully sweepable midrange frequencies in addition to bass and treble controls the Tone Hammer gives you studio-inspired EQ. To give this tone shaping unit the ultimate flexibility Aguilar introduced their proprietary Adaptive Gain Shaping circuitry (AGS). AGS allows the player to kick in an additional gain structure allowing you to go from modern tones to vintage, tube-like saturation. The Tone Hammer has plenty of headroom to reproduce the most dynamic playing styles and it robust design makes this pedal truly roadworthy."
    }, {
        id: ["HD2_PreampBrit2203", "HD2_AmpBrit2203"],
        firmwareVersion: "3.70",
        basedOn: "100W Marshall JCM-800 Stock 2203",
        manualUrl: "https://jasonshimmy.com/music/amps/marshall/jcm-800",
        buyUrl: "https://amzn.to/3W5BksR",
        synopsis: "<p>Nothing embodies the essence of Marshall's legendary tone than the JCM800 2203 guitar amplifier head. With just one channel, a 3-band EQ for tone shaping, and 100-watts of power, you've got everything you need to pound out classic tones from crunchy blues to screaming leads and beyond.</p>"
    }, {
        id: ["HD2_PreampUSDripmanNorm", "HD2_AmpUSDripmanNorm"],
        firmwareVersion: "3.70",
        basedOn: "Fender Bassman (Silverface)",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/bassman",
        buyUrl: "https://amzn.to/3ZGHaBj",
        synopsis: "<p>The Fender Bassman&nbsp;is a legendary guitar amp known to both guitar and bass players. It was&nbsp;introduced in 1951,&nbsp;primarily&nbsp;targeted for bass guitar players and&nbsp;promoted as&nbsp;a bass amp&nbsp;for the Fender Precision Bass guitar, the first mass-produced electric bass guitar ever.</p><p>It has been heavily used by guitar players as well including Roy Buchanan, Howard Leese with Heart, Robbie Robertson, Bruce Springsteen, Mike Ness of Social Distortion, Jimmie and Steve Ray Vaughan, and many others.&nbsp;</p>"
    }, {
        id: ["HD2_PreampMandarinBass200", "HD2_AmpMandarinBass200"],
        firmwareVersion: "3.70",
        basedOn: "Orange AD200 MkIII",
        manualUrl: "https://jasonshimmy.com/music/amps/orange/ad200",
        buyUrl: "https://amzn.to/4j2XdTk",
        synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OgN99KO4PCE?si=yTIvZB3sKBkGUtpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }, {
        id: ["HD2_PreampLine6Clarity", "HD2_PreampLine6Aristocrat", "HD2_PreampLine6Carillon", "HD2_PreampLine6Voltage", "HD2_PreampLine6Kinetic", "HD2_PreampLine6Oblivion", "HD2_AmpLine6Clarity", "HD2_AmpLine6Aristocrat", "HD2_AmpLine6Carillon", "HD2_AmpLine6Voltage", "HD2_AmpLine6Kinetic", "HD2_AmpLine6Oblivion"],
        firmwareVersion: "3.70",
        basedOn: "Line 6 Catalyst",
        manualUrl: "https://jasonshimmy.com/music/amps/line-6/catalyst",
        buyUrl: "https://amzn.to/3PH523b",
        synopsis: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Kk8XD6i5FyI?si=qesgxDrBLM2IcYX9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>The six Original Amp Designs in Helix/HX 3.70 (Clarity, Aristocrat, Carillon, Voltage, Kinetic, and Oblivion) are taken from Line 6's popular line of Catalyst guitar amps. Each boasts a unique, integrated boost circuit optimized specifically for that amp. You can assign the Boost parameter to a stomp switch:</p><ul><li>Select one of the six Original Amp Design models below.</li><li>Press and hold the Boost knob. Helix/HX jumps to the Controller Assign screen.</li><li>(HX only: Press PAGE &gt; to show the Learn knob.) Press Learn.</li><li>Press the desired stomp switch. Helix/HX automatically assigns it. If you like, adjust Min Value and Max Value to dial in how much boost you want.</li><li>Press HOME to exit. Wonder to yourself "wait, it's that easy to assign any parameter in Helix/HX to a stomp switch? Why haven't I done this before?"—OR—ponder "I'm a power user who knows all the shortcuts. I should assign parameters to switches more often."</li></ul>`
    }, {
        id: ["HD2_PreampUSSuperNorm", "HD2_AmpUSSuperNorm"],
        firmwareVersion: "3.80",
        basedOn: "Fender Super Reverb normal channel",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/super",
        buyUrl: "https://amzn.to/4bUELYq",
        synopsis: "The Fender Super Reverb guitar amplifier is a renowned model that has been a staple for guitarists since its introduction in the mid-1960s. Known for its rich, clean tones and powerful reverb, the Super Reverb features a 4x10 speaker configuration with Jensen P10R speakers, providing a distinctive, chimey sound. The amp offers two channels (normal and vibrato) with controls for volume, treble, bass, and additional reverb and tremolo effects on the vibrato channel. The modern Tone Master Super Reverb replicates this classic tube amp's sound using advanced modeling technology, making it lighter and more versatile for contemporary use, including selectable output power and direct line-out for recording or live performance.",
        notableUsers: "Notable users include Stevie Ray Vaughan, Jimmie Vaughan, Johnny Marr, Lee Ranaldo, and Freddie King, among others."
    }, {
        id: ["HD2_PreampUSSuperVib", "HD2_AmpUSSuperVib"],
        firmwareVersion: "3.80",
        basedOn: "Fender Super Reverb vibrato channel",
        manualUrl: "https://jasonshimmy.com/music/amps/fender/super",
        buyUrl: "https://amzn.to/4bUELYq",
        synopsis: "The Fender Super Reverb guitar amplifier is a renowned model that has been a staple for guitarists since its introduction in the mid-1960s. Known for its rich, clean tones and powerful reverb, the Super Reverb features a 4x10 speaker configuration with Jensen P10R speakers, providing a distinctive, chimey sound. The amp offers two channels (normal and vibrato) with controls for volume, treble, bass, and additional reverb and tremolo effects on the vibrato channel. The modern Tone Master Super Reverb replicates this classic tube amp's sound using advanced modeling technology, making it lighter and more versatile for contemporary use, including selectable output power and direct line-out for recording or live performance.",
        notableUsers: "Notable users include Stevie Ray Vaughan, Jimmie Vaughan, Johnny Marr, Lee Ranaldo, and Freddie King, among others."
    }, {
        id: ["HD2_PreampGermanXtraBlue", "HD2_AmpGermanXtraBlue"],
        firmwareVersion: "3.80",
        basedOn: "Bogner Ecstasy 101B Blue channel",
        manualUrl: "https://jasonshimmy.com/music/amps/bogner/ecstasy-101b",
        buyUrl: "https://amzn.to/4a8FCpi",
        synopsis: "The Bogner Ecstasy 101B guitar amplifier is a versatile, high-performance amp head known for its exceptional tonal range and flexibility. This 100-watt tube amp features three channels, each with three gain levels, allowing guitarists to switch between clean, overdrive, and high-gain tones effortlessly. It includes EL34 power tubes and 12AX7 preamp tubes, providing a rich, dynamic sound. The Ecstasy 101B offers a Class A/AB switch, a half-power switch, and a Plexi mode, enabling users to achieve both vintage and modern tones. Additional features include dual presence controls, a tube-driven effects loop, and a comprehensive footswitch for easy control. This amp is highly regarded by professional musicians for its ability to deliver a wide array of sounds, making it suitable for various musical styles.",
        notableUsers: "The Bogner Ecstasy 101B amplifier is favored by renowned guitarists across diverse genres. Notable users include Steve Vai, Steve Lukather, Matt Pike, Dan Donegan, Mami Sasazaki, and Neil Westfall."
    }, {
        id: ["HD2_PreampGermanXtraRed", "HD2_AmpGermanXtraRed"],
        firmwareVersion: "3.80",
        basedOn: "Bogner Ecstasy 101B Red channel",
        manualUrl: "https://jasonshimmy.com/music/amps/bogner/ecstasy-101b",
        buyUrl: "https://amzn.to/4a8FCpi",
        synopsis: "The Bogner Ecstasy 101B guitar amplifier is a versatile, high-performance amp head known for its exceptional tonal range and flexibility. This 100-watt tube amp features three channels, each with three gain levels, allowing guitarists to switch between clean, overdrive, and high-gain tones effortlessly. It includes EL34 power tubes and 12AX7 preamp tubes, providing a rich, dynamic sound. The Ecstasy 101B offers a Class A/AB switch, a half-power switch, and a Plexi mode, enabling users to achieve both vintage and modern tones. Additional features include dual presence controls, a tube-driven effects loop, and a comprehensive footswitch for easy control. This amp is highly regarded by professional musicians for its ability to deliver a wide array of sounds, making it suitable for various musical styles.",
        notableUsers: "The Bogner Ecstasy 101B amplifier is favored by renowned guitarists across diverse genres. Notable users include Steve Vai, Steve Lukather, Matt Pike, Dan Donegan, Mami Sasazaki, and Neil Westfall."
    }, {
        id: ["HD2_PreampEVPanamaBlue", "HD2_AmpEVPanamaBlue"],
        firmwareVersion: "3.80",
        basedOn: "EVH 5150III 100 [6L6] Blue channel",
        manualUrl: "https://jasonshimmy.com/music/amps/evh/5150",
        buyUrl: "https://amzn.to/46f2YYj",
        synopsis: "The EVH 5150III 100 [6L6] guitar amplifier is a powerful 100-watt tube amp designed for versatility and high-performance sound. Featuring three channels—clean, crunch, and lead—it offers a wide range of tones suitable for various musical styles. The amp is equipped with dual-concentric controls for independent gain and volume adjustments on the first two channels, while the lead channel has its own dedicated controls. With EL34 power tubes, the 5150III delivers a dynamic sound characterized by articulate highs and robust lows. Additional features include a global presence and resonance control, an effects loop, and MIDI compatibility, making it a favorite among professional guitarists seeking a reliable and expressive amplifier.",
        notableUsers: "The EVH 5150III 100 [6L6] guitar amplifier is endorsed by several prominent musicians, including Eddie Van Halen, who co-designed the amp and is known for its versatile tone. Alex Lifeson utilizes it for a wide range of sounds, while Kirk Hammett appreciates its aggressive, dynamic capabilities. Steve Vai values the amp's versatility across various styles, and Derek Trucks uses it for its rich tonal palette. These artists rely on the 5150III to achieve their signature sounds in a variety of genres."
    }, {
        id: ["HD2_PreampEVPanamaRed", "HD2_AmpEVPanamaRed"],
        firmwareVersion: "3.80",
        basedOn: "EVH 5150III 100 [6L6] Red channel",
        manualUrl: "https://jasonshimmy.com/music/amps/evh/5150",
        buyUrl: "https://amzn.to/46f2YYj",
        synopsis: "The EVH 5150III 100 [6L6] guitar amplifier is a powerful 100-watt tube amp designed for versatility and high-performance sound. Featuring three channels—clean, crunch, and lead—it offers a wide range of tones suitable for various musical styles. The amp is equipped with dual-concentric controls for independent gain and volume adjustments on the first two channels, while the lead channel has its own dedicated controls. With EL34 power tubes, the 5150III delivers a dynamic sound characterized by articulate highs and robust lows. Additional features include a global presence and resonance control, an effects loop, and MIDI compatibility, making it a favorite among professional guitarists seeking a reliable and expressive amplifier.",
        notableUsers: "The EVH 5150III 100 [6L6] guitar amplifier is endorsed by several prominent musicians, including Eddie Van Halen, who co-designed the amp and is known for its versatile tone. Alex Lifeson utilizes it for a wide range of sounds, while Kirk Hammett appreciates its aggressive, dynamic capabilities. Steve Vai values the amp's versatility across various styles, and Derek Trucks uses it for its rich tonal palette. These artists rely on the 5150III to achieve their signature sounds in a variety of genres."
    }]
    , Jy = [{
        id: "HD2_Cab1x6x9SoupProEllipse",
        basedOn: '1x6x9" Supro® S6616'
    }, {
        id: "HD2_Cab1x8SmallTweed",
        basedOn: '1x8" Fender® Champ'
    }, {
        id: "HD2_Cab1x12FieldCoil",
        basedOn: '1x12" Gibson® EH185'
    }, {
        id: "HD2_Cab1x12USDeluxe",
        basedOn: '1x12" Fender® Deluxe Oxford'
    }, {
        id: "HD2_Cab1x12Celest12H",
        basedOn: '1x12" ÷13 JRT 9/15 G12 H30'
    }, {
        id: "HD2_Cab1x12BlueBell",
        basedOn: '1x12" Vox® AC-15 Blue'
    }, {
        id: "HD2_Cab1x12Lead80",
        basedOn: '1x12" Bogner® Shiva CL80'
    }, {
        id: "HD2_Cab2x12DoubleC12N",
        basedOn: '2x12" Fender® Twin C12N'
    }, {
        id: "HD2_Cab2x12MailC12Q",
        basedOn: '2x12" Silvertone® 1484'
    }, {
        id: "HD2_Cab2x12Interstate",
        basedOn: '2x12" Dr Z® Z Best V30'
    }, {
        id: "HD2_Cab2x12JazzRivet",
        basedOn: '2x12" Roland® JC-120'
    }, {
        id: "HD2_Cab2x12SilverBell",
        basedOn: '2x12" Vox® AC-30TB Silver'
    }, {
        id: "HD2_Cab2x12BlueBell",
        basedOn: '2x12" Vox® AC-30 Fawn Blue'
    }, {
        id: "HD2_Cab4x10TweedP10R",
        basedOn: '4x10" Fender® Bassman® P10R'
    }, {
        id: "HD2_Cab4x12WhoWatt100",
        basedOn: '4x12" Hiwatt® AP Fane®'
    }, {
        id: "HD2_Cab4x12MandarinEM",
        basedOn: '4x12" Orange® Eminence'
    }, {
        id: "HD2_Cab4x12Greenback25",
        basedOn: '4x12" Marshall® Basketweave G12 M25'
    }, {
        id: "HD2_Cab4x12Greenback20",
        basedOn: '4x12" Marshall® Basketweave G12 M20'
    }, {
        id: "HD2_Cab4x12Blackback30",
        basedOn: '4x12" Park® 75 G12 H30'
    }, {
        id: "HD2_Cab4x121960T75",
        basedOn: '4x12" Marshall® 1960 AT75'
    }, {
        id: "HD2_Cab4x12UberV30",
        basedOn: '4x12" Bogner® Uberkab V30'
    }, {
        id: "HD2_Cab4x12UberT75",
        basedOn: '4x12" Bogner® Uberkab T75'
    }, {
        id: "HD2_Cab4X12CaliV30",
        basedOn: '4x12" MESA/Boogie® 4FB V30'
    }, {
        id: "HD2_Cab4x12XXLV30",
        basedOn: '4x12" ENGL® XXL V30'
    }, {
        id: "HD2_Cab4x12SoloLeadEM",
        basedOn: '4x12" Soldano'
    }, {
        id: "HD2_Cab1x15TucknGo",
        basedOn: '1x15" Ampeg® B-15'
    }, {
        id: "HD2_Cab2x15Brute",
        basedOn: '2x15" MESA/Boogie® 2x15 EV'
    }, {
        id: "HD2_Cab4x10Rhino",
        basedOn: '4x10" Ampeg® SVT® 410HLF'
    }, {
        id: "HD2_Cab6x10CaliPower",
        basedOn: '6x10" MESA/Boogie® Power House'
    }, {
        id: "HD2_Cab8x10SVBeast",
        basedOn: '8x10" Ampeg® SVT®',
        synopsis: '<p>This model is used for the bass in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: "HD2_Cab1x12CaliIV",
        basedOn: 'MESA/Boogie® Mk IV 12"'
    }, {
        id: "HD2_Cab1x12CaliExt",
        basedOn: 'MESA/Boogie® 12" extension (EVM12L speaker)'
    }, {
        id: "HD2_Cab1x12MatchH30",
        basedOn: 'Matchless® DC-30 (12" G12H30 speaker)'
    }, {
        id: "HD2_Cab1x12MatchG25",
        basedOn: 'Matchless® DC-30 (12" Greenback 25 speaker)'
    }, {
        id: "HD2_Cab1x12DelSol",
        basedOn: 'Sunn® Coliseum 300 bass cab (12" speaker)'
    }, {
        id: "HD2_Cab1x18DelSol",
        basedOn: 'Sunn® Coliseum 300 bass cab (18" speaker)'
    }, {
        id: "HD2_Cab1x18WoodyBlue",
        basedOn: 'Acoustic® 360 18" bass cab'
    }, {
        id: "HD2_Cab1x12Fullerton5C3",
        firmwareVersion: "2.90",
        basedOn: "Classic 1953 Fender® 5C3 Tweed Deluxe"
    }, {
        id: "HD2_Cab1x12Grammatico5E3",
        firmwareVersion: "2.90",
        basedOn: "Modern 2016 Grammatico LaGrange"
    }, {
        id: "HD2_Cab1x10PrincessCopperhead",
        firmwareVersion: "3.00",
        basedOn: "Fender® Princeton Reverb cab"
    }, {
        id: "HD2_Cab1x12PrincessBlue",
        firmwareVersion: "3.00",
        basedOn: 'Fender® Princeton Reverb with a 12" Alnico Blue driver'
    }, {
        id: ["HD2_CabMicIr_1x10USPrincess", "HD2_CabMicIr_1x10USPrincessWithPan"],
        firmwareVersion: "3.50",
        basedOn: '1x10" Fender Princeton Eminence Copperhead'
    }, {
        id: ["HD2_CabMicIr_1x12Grammatico", "HD2_CabMicIr_1x12GrammaticoWithPan"],
        firmwareVersion: "3.50",
        basedOn: '1x12" Grammatico LaGrange P12Q'
    }, {
        id: ["HD2_CabMicIr_1x12USDeluxe", "HD2_CabMicIr_1x12USDeluxeWithPan"],
        firmwareVersion: "3.50",
        basedOn: '1x12" Fender® Deluxe Oxford'
    }, {
        id: ["HD2_CabMicIr_1x12CaliEXT", "HD2_CabMicIr_1x12CaliEXTWithPan"],
        firmwareVersion: "3.50",
        basedOn: '1x12" Mesa Boogie Extension Cab'
    }, {
        id: ["HD2_CabMicIr_2x12BlueBell", "HD2_CabMicIr_2x12BlueBellWithPan"],
        firmwareVersion: "3.50",
        basedOn: '2x12" Vox® AC-30 Fawn Blue'
    }, {
        id: ["HD2_CabMicIr_2x12DoubleC12N", "HD2_CabMicIr_2x12DoubleC12NWithPan"],
        firmwareVersion: "3.50",
        basedOn: '2x12" Fender Twin C12N'
    }, {
        id: ["HD2_CabMicIr_2x12JazzRivet", "HD2_CabMicIr_2x12JazzRivetWithPan"],
        firmwareVersion: "3.50",
        basedOn: ' 2x12" Roland® JC-120'
    }, {
        id: ["HD2_CabMicIr_2x12MailC12Q", "HD2_CabMicIr_2x12MailC12QWithPan"],
        firmwareVersion: "3.50",
        basedOn: ' 2x12" Silvertone® 1484'
    }, {
        id: ["HD2_CabMicIr_2x12Mandarin", "HD2_CabMicIr_2x12MandarinWithPan"],
        firmwareVersion: "3.50",
        basedOn: '2x12" Orange PPC212 V30'
    }, {
        id: ["HD2_CabMicIr_4x10TweedP10R", "HD2_CabMicIr_4x10TweedP10RWithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Fender® Bassman® P10R'
    }, {
        id: ["HD2_CabMicIr_4x12Greenback25", "HD2_CabMicIr_4x12Greenback25WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Marshall® Basketweave G12 M25'
    }, {
        id: ["HD2_CabMicIr_4x121960AT75", "HD2_CabMicIr_4x121960AT75WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Marshall® 1960A T75'
    }, {
        id: ["HD2_CabMicIr_4x12BlackbackH30", "HD2_CabMicIr_4x12BlackbackH30WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Park® 75 G12 H30'
    }, {
        id: ["HD2_CabMicIr_4x12BritV30", "HD2_CabMicIr_4x12BritV30WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Marshall® 1960AV V30'
    }, {
        id: ["HD2_CabMicIr_4x12CaliV30", "HD2_CabMicIr_4x12CaliV30WithPan"],
        firmwareVersion: "3.50",
        basedOn: ' 4x12" MESA/Boogie® 4FB V30'
    }, {
        id: ["HD2_CabMicIr_4x12Mandarin", "HD2_CabMicIr_4x12MandarinWithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Orange® Eminence'
    }, {
        id: ["HD2_CabMicIr_4x12MOONT75", "HD2_CabMicIr_4x12MOONT75WithPan"],
        firmwareVersion: "3.50",
        basedOn: ' 4x12" Sunn Cab w/G75T'
    }, {
        id: ["HD2_CabMicIr_4x12UberT75", "HD2_CabMicIr_4x12UberT75WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Bogner® Uberkab T75'
    }, {
        id: ["HD2_CabMicIr_4x12UberV30", "HD2_CabMicIr_4x12UberV30WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" Bogner® Uberkab V30'
    }, {
        id: ["HD2_CabMicIr_4x12XXLV30", "HD2_CabMicIr_4x12XXLV30WithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x12" ENGL® XXL V30'
    }, {
        id: ["HD2_CabMicIr_1x15AmpegB15", "HD2_CabMicIr_1x15AmpegB15WithPan"],
        firmwareVersion: "3.50",
        basedOn: '1x15" Ampeg® B-15'
    }, {
        id: ["HD2_CabMicIr_2x15Brute", "HD2_CabMicIr_2x15BruteWithPan"],
        firmwareVersion: "3.50",
        basedOn: '2x15" MESA/Boogie® 2x15 EV'
    }, {
        id: ["HD2_CabMicIr_4x10Garden", "HD2_CabMicIr_4x10GardenWithPan"],
        firmwareVersion: "3.50",
        basedOn: '4x10" Eden D410XLT'
    }, {
        id: ["HD2_CabMicIr_8x10SVTAV", "HD2_CabMicIr_8x10SVTAVWithPan"],
        firmwareVersion: "3.50",
        basedOn: '8x10" Ampeg® SVT® (SVT-810AV Heritage Edition)'
    }, {
        id: ["HD2_CabMicIr_1x12BlueBell", "HD2_CabMicIr_1x12BlueBellWithPan"],
        firmwareVersion: "3.60",
        basedOn: '1x12" Vox AC-15 Blue Alnico'
    }, {
        id: ["HD2_CabMicIr_1x12OpenCream", "HD2_CabMicIr_1x12OpenCreamWithPan"],
        firmwareVersion: "3.60",
        basedOn: 'Custom 1x12" open-back cab G12M-65'
    }, {
        id: ["HD2_CabMicIr_1x12OpenCast", "HD2_CabMicIr_1x12OpenCastWithPan"],
        firmwareVersion: "3.60",
        basedOn: 'Custom 1x12" open-back cab EVM12L'
    }, {
        id: ["HD2_CabMicIr_2x12SilverBell", "HD2_CabMicIr_2x12SilverBellWithPan"],
        firmwareVersion: "3.60",
        basedOn: '2x12" Vox AC-30TB Silver Alnico'
    }, {
        id: ["HD2_CabMicIr_2x12MatchH30", "HD2_CabMicIr_2x12MatchH30WithPan"],
        firmwareVersion: "3.60",
        basedOn: '2x12" Matchless DC-30 custom G12H-30'
    }, {
        id: ["HD2_CabMicIr_2x12MatchG25", "HD2_CabMicIr_2x12MatchG25WithPan"],
        firmwareVersion: "3.60",
        basedOn: '2x12" Matchless DC-30 custom G12M-25'
    }, {
        id: ["HD2_CabMicIr_4x12Greenback20", "HD2_CabMicIr_4x12Greenback20WithPan"],
        firmwareVersion: "3.60",
        basedOn: '4x12" Marshall "basketweave" G12M-20'
    }, {
        id: ["HD2_CabMicIr_1x12Epicenter", "HD2_CabMicIr_1x12EpicenterWithPan"],
        firmwareVersion: "3.60",
        basedOn: '1x12" Epifani Ultralight series'
    }, {
        id: ["HD2_CabMicIr_4x10AmpegPro", "HD2_CabMicIr_4x10AmpegProWithPan"],
        firmwareVersion: "3.60",
        basedOn: '4x10" Ampeg PR-410HLF'
    }, {
        id: ["HD2_CabMicIr_SoupProEllipse", "HD2_CabMicIr_SoupProEllipseWithPan"],
        firmwareVersion: "3.70",
        basedOn: '1x6x9" Supro S6616'
    }, {
        id: ["HD2_CabMicIr_1x8SmallTweed", "HD2_CabMicIr_1x8SmallTweedWithPan"],
        firmwareVersion: "3.70",
        basedOn: '1x8" Fender Champ'
    }, {
        id: ["HD2_CabMicIr_1x12Fullerton", "HD2_CabMicIr_1x12FullertonWithPan"],
        firmwareVersion: "3.70",
        basedOn: '1x12" Fender 5C3 Tweed Deluxe'
    }, {
        id: ["HD2_CabMicIr_1x12CaliIV", "HD2_CabMicIr_1x12CaliIVWithPan"],
        firmwareVersion: "3.70",
        basedOn: '1x12" Mesa Boogie Mk IV Combo'
    }, {
        id: ["HD2_CabMicIr_2x12Interstate", "HD2_CabMicIr_2x12InterstateWithPan"],
        firmwareVersion: "3.70",
        basedOn: '2x12" Dr Z Z Best V30'
    }, {
        id: ["HD2_CabMicIr_4x12Greenback30", "HD2_CabMicIr_4x12Greenback30WithPan"],
        firmwareVersion: "3.70",
        basedOn: '4x12" Marshall Basketweave G12H-30'
    }, {
        id: ["HD2_CabMicIr_4x12WhoWatt100", "HD2_CabMicIr_4x12WhoWatt100WithPan"],
        firmwareVersion: "3.70",
        basedOn: '4x12" Hiwatt AP Fane'
    }, {
        id: ["HD2_CabMicIr_2x15USDripman", "HD2_CabMicIr_2x15USDripmanWithPan"],
        firmwareVersion: "3.70",
        basedOn: '2x15" Fender Bassman JBL D130'
    }, {
        id: ["HD2_CabMicIr_6x10CaliPower", "HD2_CabMicIr_6x10CaliPowerWithPan"],
        firmwareVersion: "3.70",
        basedOn: '6x10" MESA/Boogie Power House'
    }, {
        id: ["HD2_CabMicIr_4x10USSuper", "HD2_CabMicIr_4x10USSuperWithPan"],
        firmwareVersion: "3.80",
        basedOn: "Fender Super Reverb"
    }, {
        id: ["HD2_CabMicIr_4x12CartogGuv", "HD2_CabMicIr_4x12CartogGuvWithPan"],
        firmwareVersion: "3.80",
        basedOn: "Ben Adrian's Cartographer cabinet (Modified Lee Jackson 4x12 with Eminence Governor speakers)"
    }, {
        id: ["HD2_CabMicIr_4x12CartogC90", "HD2_CabMicIr_4x12CartogC90WithPan"],
        firmwareVersion: "3.80",
        basedOn: "Ben Adrian's Cartographer cabinet (Modified Lee Jackson 4x12 with Mesa C90 speakers)"
    }, {
        id: ["HD2_CabMicIr_4x12SoloLeadEM", "HD2_CabMicIr_4x12SoloLeadEMWithPan"],
        firmwareVersion: "3.80",
        basedOn: "Soldano SLO 4x12 cabinet"
    }]
    , Qy = [{
        id: "HD2_DistMinotaur",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Klon® Centaur",
        buyUrl: "https://amzn.to/37oAaiz",
        manualUrl: "https://jasonshimmy.com/music/effects/klon/centaur",
        notableUsers: `<ul><li><a href="https://en.wikipedia.org/wiki/Jeff_Beck">Jeff Beck</a></li><li><a href="https://en.wikipedia.org/wiki/Mark_Tremonti">Mark Tremonti</a></li><li><a href="https://en.wikipedia.org/wiki/Aaron_Dessner">Aaron Dessner</a></li><li><a href="https://en.wikipedia.org/wiki/Lzzy_Hale">Lzzy Hale</a></li><li><a href="https://en.wikipedia.org/wiki/Andy_Summers">Andy Summers</a></li><li><a href="https://en.wikipedia.org/wiki/Keith_Urban">Keith Urban</a></li><li><a href="https://en.wikipedia.org/wiki/John_Mayer">John Mayer</a></li><li><a href="https://en.wikipedia.org/wiki/Black_Francis">Black Francis</a></li><li><a href="https://en.wikipedia.org/wiki/Peter_Frampton">Peter Frampton</a></li><li><a href="https://en.wikipedia.org/wiki/Warren_Haynes">Warren Haynes</a></li><li><a href="https://en.wikipedia.org/wiki/Mike_McCready">Mike McCready</a></li><li><a href="https://en.wikipedia.org/wiki/Stone_Gossard">Stone Gossard</a></li><li><a href="https://en.wikipedia.org/wiki/Nels_Cline">Nels Cline</a></li><li><a href="https://en.wikipedia.org/wiki/Lee_Ranaldo">Lee Ranaldo</a></li><li><a href="https://en.wikipedia.org/wiki/James_Hetfield">James Hetfield</a></li><li><a href="https://en.wikipedia.org/wiki/Britt_Daniel">Britt Daniel</a></li><li><a href="https://en.wikipedia.org/wiki/Joe_Bonamassa">Joe Bonamassa</a></li><li><a href="https://en.wikipedia.org/wiki/Joe_Perry_(musician)">Joe Perry</a></li><li><a href="https://en.wikipedia.org/wiki/Trey_Anastasio">Trey Anastasio</a></li><li><a href="https://en.wikipedia.org/wiki/Philip_Sayce">Philip Sayce</a></li><li><a href="https://en.wikipedia.org/wiki/Nick_Valensi">Nick Valensi</a></li><li><a href="https://en.wikipedia.org/wiki/Jason_Isbell">Jason Isbell</a></li><li><a href="https://en.wikipedia.org/wiki/Mike_Ness">Mike Ness</a></li><li><a href="https://en.wikipedia.org/wiki/Josh_Klinghoffer">Josh Klinghoffer</a></li><li><a href="https://en.wikipedia.org/wiki/Dave_Welsh">Dave Welsh</a></li><li><a href="https://en.wikipedia.org/wiki/Dean_Wareham">Dean Wareham</a></li><li><a href="https://en.wikipedia.org/wiki/Yannis_Philippakis">Yannis Philippakis</a></li><li><a href="https://en.wikipedia.org/wiki/Wooden_Shjips">Wooden Shjips</a> (Erik 'Ripley' Johnson)</li><li><a href="https://en.wikipedia.org/wiki/Noel_Gallagher">Noel Gallagher</a></li></ul>`
    }, {
        id: "HD2_DistTeemah",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Paul Cochrane Timmy® Overdrive",
        buyUrl: "https://amzn.to/3k9a4W7",
        manualUrl: "https://jasonshimmy.com/music/effects/paul-cochrane/timmy-overdrive",
        synopsis: "<p>The Timmy Overdrive provides a versatile range of overdrive tones that enhance the natural sound of your guitar and amp setup. With three different clipping options and ingeniously configured Bass and Treble controls, this pedal offers players a ton of options to make the most of their playing and recording experience.</p><ul><li><strong>Gain</strong> adjusts overdrive intensity</li><li><strong>Bass Cut</strong> cuts the low end frequencies from pre-overdrive signal</li><li><strong>Treble Cut</strong> cuts high end frequencies from post-overdrive signal</li><li><strong>Clipping</strong> switch sets the clipping mode</li><li><strong>Level</strong> adjusts overall volume of effect</li></ul><p><strong>Clipping Modes</strong></p><ul><li><strong>Up:</strong> Asymmetrical clipping with moderate saturation and slight compression for a wide, dynamic range of sounds.</li><li><strong>Center:</strong> Symmetrical clipping with light saturation, high headroom, and high definition for a big sound.</li><li><strong>Down:</strong> Symmetrical clipping with heavy saturation and low headroom.</li></ul>"
    }, {
        id: "HD2_DistCompulsiveDrive",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Fulltone® OCD",
        buyUrl: "https://amzn.to/3dpqBnB",
        manualUrl: "https://jasonshimmy.com/music/effects/fulltone/ocd"
    }, {
        id: "HD2_DistValveDriver",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Chandler Tube Driver",
        buyUrl: "https://amzn.to/3jZJD5g",
        manualUrl: "https://jasonshimmy.com/music/effects/chandler/tube-driver"
    }, {
        id: "HD2_DistTopSecretOD",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "DOD® OD-250",
        manualUrl: "https://jasonshimmy.com/music/effects/dod/od-250"
    }, {
        id: "HD2_DistScream808",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Ibanez® TS808 Tube Screamer®",
        buyUrl: "https://amzn.to/3k1WNi4",
        manualUrl: "https://jasonshimmy.com/music/effects/ibanez/ts808-tube-screamer"
    }, {
        id: "HD2_DistHedgehogD9",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "MAXON® SD9 Sonic Distortion",
        buyUrl: "https://amzn.to/3uenyVl",
        manualUrl: "https://jasonshimmy.com/music/effects/maxon/sd9-sonic-distortion"
    }, {
        id: "HD2_DistVerminDist",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Pro Co RAT",
        buyUrl: "https://amzn.to/3k3NsX5",
        manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
        synopsis: "<p>Turns out our Vermin Dist model was broken. Sorry! This is still a cool model with it's use cases but for a closer representation of a physical Pro Co Rat, check out the Ratatouille Dist.</p><ul><li><strong>Gain</strong>: Sets the amount of distortion</li><li><strong>Filter</strong>: Sets the amount of high cut (low pass) filter applied to the distortion; basically letting more treble through (lower values) or filtering it out (higher values)</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul>"
    }, {
        id: "HD2_DistKWB",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Benadrian Kowloon Walled Bunny Distortion",
        manualUrl: "https://jasonshimmy.com/music/effects/kwb/distortion"
    }, {
        id: "HD2_DistArbitratorFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Arbiter® FuzzFace®",
        buyUrl: "https://amzn.to/2Zxd3OJ",
        manualUrl: "https://jasonshimmy.com/music/effects/arbiter/fuzz-face"
    }, {
        id: "HD2_DistTriangleFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Electro-Harmonix® Big Muff π®",
        buyUrl: "https://amzn.to/2ORVbvS",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi"
    }, {
        id: "HD2_DistIndustrialFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Z.Vex Fuzz Factory",
        buyUrl: "https://amzn.to/37u3Drx",
        manualUrl: "https://jasonshimmy.com/music/effects/z-vex/fuzz-factory"
    }, {
        id: "HD2_DistTycoctaviaFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Tycobrahe® Octavia",
        manualUrl: "https://jasonshimmy.com/music/effects/tycobrahe/octavia"
    }, {
        id: "HD2_DistWringerFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Garbage's modded BOSS® FZ-2",
        buyUrl: "https://amzn.to/3dpZ5WY",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/fz-2-hyper-fuzz"
    }, {
        id: "HD2_DistMegaphone",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Megaphone",
        buyUrl: "https://amzn.to/2OMRoQl",
        manualUrl: "https://www.tc-helicon.com/product.html?modelCode=P0DE4"
    }, {
        id: "HD2_DistBitcrusher",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DistStuporOD",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® SD-1 Overdrive",
        buyUrl: "https://amzn.to/3u9Ht7D",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/sd-1-super-overdrive"
    }, {
        id: "HD2_DistObsidian7000",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Darkglass Electronics® Microtubes B7K Ultra bass preamp/overdrive/EQ",
        buyUrl: "https://amzn.to/2OMRS97",
        manualUrl: "https://jasonshimmy.com/music/effects/darkglass-electronics/microtubes-b7k-ultra"
    }, {
        id: "HD2_DistClawthornDrive",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Wounded Paw Battering Ram bass overdrive",
        manualUrl: "https://jasonshimmy.com/music/effects/wounded-paw/battering-ram"
    }, {
        id: "HD2_DistKinkyBoost",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Xotic® EP Booster",
        buyUrl: "https://amzn.to/2OQuWGa",
        manualUrl: "https://jasonshimmy.com/music/effects/xotic/ep-booster"
    }, {
        id: "HD2_DistThrifterFuzz",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DistDerangedMaster",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Dallas Rangemaster Treble Booster",
        buyUrl: "https://amzn.to/2NiTcQM",
        manualUrl: "https://jasonshimmy.com/music/effects/dallas/rangemaster-treble-booster",
        synopsis: "WARNING! Like the real thing, this model can take your head off! Works best before a distorted amp."
    }, {
        id: "HD2_DistDeezOneVintage",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS© DS-1 distortion pedal (classic Made-in-Japan version)",
        buyUrl: "https://amzn.to/37u4IQ7",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/ds-1-distortion"
    }, {
        id: "HD2_DistDeezOneMod",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS© DS-1 distortion pedal (Keeley mod version)",
        buyUrl: "https://amzn.to/37u4IQ7",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/ds-1-distortion"
    }, {
        id: "HD2_DistDhyanaDrive",
        firmwareVersion: "2.80",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Hermida Zendrive",
        manualUrl: "https://jasonshimmy.com/music/effects/hermida/zendrive"
    }, {
        id: "HD2_DistHeirApparent",
        firmwareVersion: "2.80",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Analogman Prince of Tone (basically half a King of Tone)",
        manualUrl: "https://jasonshimmy.com/music/effects/analogman/prince-of-tone"
    }, {
        id: "HD2_DistToneSovereign",
        firmwareVersion: "2.80",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Analogman King of Tone V4 (basically two Prince of Tones in one)",
        manualUrl: "https://jasonshimmy.com/music/effects/analogman/king-of-tone"
    }, {
        id: "HD2_DistZeroAmpBassDI",
        firmwareVersion: "2.80",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Tech 21 SansAmp Bass Driver DI V1",
        buyUrl: "https://amzn.to/3durKKu",
        manualUrl: "https://jasonshimmy.com/music/effects/tech-21/sansamp-bass-driver"
    }, {
        id: "HD2_DistAmpegScrambler",
        firmwareVersion: "2.80",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Ampeg Scrambler Bass Overdrive",
        buyUrl: "https://amzn.to/3dxeOUp",
        manualUrl: "https://jasonshimmy.com/music/effects/ampeg/scrambler"
    }, {
        id: "HD2_DistAlpacaRouge",
        basedOn: "Way Huge® Red Llama (modded)",
        firmwareVersion: "2.90",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/way-huge/red-llama",
        synopsis: '<p>This model is used in front of a Derailed Ingrid for the guitar tracks in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: "HD2_DistLegendaryDrive",
        basedOn: "Carvin VLD1 Legacy Drive (high gain channel)",
        firmwareVersion: "2.90",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/carvin/vld1-legacy-drive"
    }, {
        id: "HD2_DistXenomorphFuzz",
        basedOn: "Subdecay Harmonic Antagonizer",
        firmwareVersion: "2.90",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/subdecay/harmonic-antagonizer"
    }, {
        id: "HD2_DistHorizonDrive",
        basedOn: "Horizon Devices Precision Drive",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/horizon-devices/precision-drive",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: `Includes an extra Gate Range parameter that, when set to "Extended," drops the gate's threshold down to -90dB`
    }, {
        id: "HD2_DistSwedishChainsaw",
        basedOn: "BOSS® HM-2 Heavy Metal Distortion (Made in Japan black label)",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/hm-2-heavy-metal-distortion",
        category: "Distortion",
        subcategory: "Mono, Stereo"
    }, {
        id: "HD2_DistPocketFuzz",
        basedOn: "Inspired by the Jordan Boss Tone fuzz",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/jordan/boss-tone",
        category: "Distortion",
        subcategory: "Mono, Stereo"
    }, {
        id: "HD2_DistRamsHead",
        basedOn: "1973 Electro-Harmonix® Ram's Head Big Muff Pi",
        buyUrl: "https://amzn.to/3bnMRvz",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
        category: "Distortion",
        subcategory: "Mono, Stereo"
    }, {
        id: "HD2_DistBallisticFuzz",
        basedOn: "Euthymia ICBM fuzz",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/euthymia/icbm",
        category: "Distortion",
        subcategory: "Mono, Stereo"
    }, {
        id: "HD2_DistRatatouilleDist",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "1984 Pro Co RAT",
        firmwareVersion: "3.10",
        buyUrl: "https://amzn.to/3k3NsX5",
        manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
        synopsis: `<p>Turns out our Vermin Dist model was broken. Sorry! We were going to replace it completely but a bunch of people had presets with the old version. On top of that, we found out our RAT's LM308 chip had crapped out since we modeled it last so we decided to get it into perfect working order and start from scratch</p><ul><li><strong>Gain</strong>: Sets the amount of distortion</li><li><strong>Filter</strong>: Sets the amount of high cut (low pass) filter applied to the distortion; basically letting more treble through (lower values) or filtering it out (higher values)</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul><p><strong>Blues Type Tone</strong></p><p>This setting produces a "bluesy" soft-clipped distortion sound much like that of a small tube amp. "Fine tune" the control settings to suit your instrument's own tone and character.</p><ul><li><strong>Gain</strong>: 3.5-4</li><li><strong>Filter</strong>: 0</li><li><strong>Level</strong>: 6.5-7</li></ul><p><strong>Lead Type Tone</strong></p><p>A very "biting" lead sound with lots of harmonic emphasis; use the treble pickup on your guitar and vary the DISTORTION control a bit to "home in" on the overtones for a subtle fixed-"wah" effect.</p><ul><li><strong>Gain</strong>: 6.5-7</li><li><strong>Filter</strong>: 8-8.5</li><li><strong>Level</strong>: 5-5.5</li></ul><p><strong>Heavy Type Tone</strong></p><p>A bone-crunching heavy-metal sound yielding incredible power and smooth, effortless sustain.</p><ul><li><strong>Gain</strong>: 10</li><li><strong>Filter</strong>: 5-5.5</li><li><strong>Level</strong>: 3.5-4</li></ul>`,
        notableUsers: `<ul><li>Kurt Cobain</li><li>Krist Novoselic</li><li>Jeff Beck</li><li>Jerry Cantrell</li><li>Dave Grohl</li><li>David Gilmour</li><li>Thom Yorke</li><li>Rivers Cuomo</li><li>James Hetfield</li><li>Many, many more…</li></ul><p>The Foo Fighters make extensive use of the Pro Co Rat alongside a Memory Man into a Vox AC-30 on their third album, There's Nothing Left to Lose. See the following excerpts:</p><p><strong>What was the fundamental guitar-sound recipe for the new album?</strong></p><p>We focused on not using too many distortion pedals, and went for a cleaner, fatter, more natural overdrive. We used a Vox AC30 for pretty much everything on the record, tweaking the sound so that it broke up nicely when played loud.</p><p>Sometimes we'd double a track using an old Pro Co Rat, and then hard-pan the parts so that a super-distorted guitar was in the left channel and a grindy guitar was in the right. Then we'd sprinkle in lots of clean guitar overdubs.</p><p>Check out the rest of this <a href="https://www.fooarchive.com/features/guitarplayer99.htm">fantastic interview</a> with Dave Grohl from a 1999 issue of Guitar Player Magazine for more details.</p>`
    }, {
        id: "Line6BronzeMaster",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "Maestro® Bass Brassmaster",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/bass-brassmaster",
        firmwareVersion: "3.15",
        synopsis: "<p>Originally designed for bass, but equally cool on guitar, the Maestro® Bass Brassmaster is considered by many to be the Holy Grail of bass distortion units, an ultra-rare bird designed in the early 70's for Maestro® by synth genius Tom Oberheim.</p>"
    }, {
        id: "KillerZ",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® Metal Zone MT-2",
        firmwareVersion: "3.15",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/mt-2-metal-zone",
        buyUrl: "https://amzn.to/32roQ5G",
        synopsis: "<p>Equipped with a dual gain circuit, the MT-2 provides amazing sustain plus heavy mids and lows similar to a stack of overdriven amps. We've simplified the EQ controls a bit to make the Killer Z model, but you'll still find the sought after flavor of the MT-2 style sound.</p>"
    }, {
        id: "HD2_DM4TubeDrive",
        basedOn: "Chandler Tube Driver®",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/chandler/tube-driver",
        synopsis: "Based on the Chandler Tube Driver®, delivering the sweet singing sustain craved by guitarists worldwide."
    }, {
        id: "HD2_DM4Screamer",
        basedOn: "Ibanez® Tube Screamer®",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/ibanez/ts808-tube-screamer",
        synopsis: "Based on an Ibanez® Tube Screamer®. In many blues circles, you're not allowed to solo without one of these medium-gain pedals!"
    }, {
        id: "HD2_DM4Overdrive",
        basedOn: "DOD® Overdrive/Preamp 250",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/dod/od-250",
        synopsis: "Based on the DOD® Overdrive/Preamp 250 designed to slam the input of a tube guitar amp forcing the amp to distort violently."
    }, {
        id: "HD2_DM4ClassicDistortion",
        basedOn: "ProCo Rat",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
        synopsis: "Based on the ProCo Rat, an angry and aggressive distortion box that put teeth into a new breed of metal in the late 70's."
    }, {
        id: "HD2_DM4HeavyDistortion",
        basedOn: "Boss® Metal Zone",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/mt-2-metal-zone",
        synopsis: "Based on Boss® Metal Zone, the industry standard distortion pedal for metal players since 1989."
    }, {
        id: "HD2_DM4ColorDrive",
        basedOn: "Colorsound® Overdriver",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/colorsound/overdriver",
        synopsis: "Based on the Colorsound® Overdriver. Our model will transport you instantly back to that breeding ground of British guitar heroes."
    }, {
        id: "HD2_DM4BuzzSaw",
        basedOn: "Maestro® Fuzz Tone",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/fuzz-tone",
        synopsis: `Based on the Maestro® Fuzz Tone. Take a deep breath and repeat: "I can't get no (duh, duh, duh) Satisfaction."`
    }, {
        id: "HD2_DM4FacialFuzz",
        basedOn: "Arbiter Fuzz Face",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/arbiter/fuzz-face",
        synopsis: "Based on the Arbiter Fuzz Face, best known for its famous association with guitar legends Jimi Hendrix & Eric Johnson."
    }, {
        id: "HD2_DM4JumboFuzz",
        basedOn: "Vox® Tone Bender",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/vox/tone-bender",
        synopsis: 'Based on the Vox® Tone Bender. It can be heard all over the first two Led Zeppelin records, and is especially apparent on "Communication Breakdown."'
    }, {
        id: "HD2_DM4FuzzPi",
        basedOn: "Electro- Harmonix® Big Muff Pi®",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
        synopsis: "Based on the Electro-Harmonix® Big Muff Pi®, this is an American twist on the distortion/fuzz pedal, known more for its wicked sustain than its buzz."
    }, {
        id: "HD2_DM4JetFuzz",
        basedOn: "Roland® Jet Phaser",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/roland/jet-phaser",
        synopsis: "Based on the Roland® Jet Phaser. It's a fuzz. It's a phaser. Yeah baby! Time to grab your 8-tracks of Uli Roth era Scorpions."
    }, {
        id: "HD2_DM4Line6Drive",
        basedOn: "Line 6 Original",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the Colorsound® Tone Bender. If we could go back to the 60's and be a part of the fuzz revolution... this is what we'd design."
    }, {
        id: "HD2_DM4Line6Distortion",
        basedOn: "Line 6 Original",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: "Completely over the top. Sure, it's massive. Yes, it's over the top. Okay, it's a lotta crazy!!!"
    }, {
        id: "HD2_DM4SubOctFuzz",
        basedOn: "Line 6 Original",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the PAiA Roctave Divider, this fuzz with an octave below is just what you need to give those Moog players a fit! Try it on bass guitar—this is the Octaver of Doom!"
    }, {
        id: "HD2_DM4OctaveFuzz",
        basedOn: "Tycobrahe® Octavia",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/tycobrahe/octavia",
        synopsis: "Based on the Tycobrahe® Octavia, the classic fuzz+octave effect. One pioneering user of this type of effect was Jimi Hendrix."
    }, {
        id: "HD2_DistPillars",
        basedOn: "Earthquaker Devices Plumes",
        firmwareVersion: "3.50",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        buyUrl: "https://amzn.to/3CxrPYX",
        manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/plumes",
        synopsis: "<p>Plumes® is a unique, all-analog approach to a classic tube-like overdrive circuit offering 3 different clipping voices, loads of headroom and almost three-dimensional clarity that will push your amp over the edge. The reimagined tone control is finely tuned to sculpt low end, clear top end, and focus midrange with blooming sustain.</p>"
    }, {
        id: "HD2_DistVitalDist",
        basedOn: "Earthquaker Devices Life (distortion side)",
        firmwareVersion: "3.50",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/life",
        synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zx_NPRrgfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: "HD2_DistVitalBoost",
        basedOn: "Earthquaker Devices Life (boost side)",
        firmwareVersion: "3.50",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/life",
        synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zx_NPRrgfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        id: "HD2_DistDarkDoveFuzz",
        basedOn: "Electro-Harmonix Russian Big Muff",
        firmwareVersion: "3.60",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
        buyUrl: "https://amzn.to/3MynhrU",
        synopsis: "<p>The cult classic Green Russian Big Muff first shook the ground in the mid-1990s. Since then it has been heralded by guitarists and bassists for its devastating low-end and unique sludge and sizzle.</p>"
    }, {
        id: "HD2_DistPrizeDrive",
        basedOn: "Nobels ODR-1",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/nobels/odr-1",
        buyUrl: "https://amzn.to/48EoXZc",
        synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WjCVnFLwP9k?si=Ohu85G76XpNsObAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }, {
        id: "HD2_DistRegalBassDI",
        basedOn: "Nobel Bass Preamp DI",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/noble/bass-preamp-di"
    }, {
        id: "VIC_ReverbDynBloom",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: `<ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity).</li><li>Damping—Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty.</li><li>Mot Rate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature.</li><li>Rise Time—Sets how long it takes for the reverb to bloom. Choose Short, Medium (default), or Long.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied.</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Ducking—Controls how much of the reverb is dropped in volume (or "ducked") while the signal is active. Higher values drop the reverb level more while you play.</li><li>Level—Sets the overall level of the block.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
    }, {
        id: "HD2_CompressorDeluxeComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_CompressorRedSqueeze",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "MXR® Dyna Comp",
        buyUrl: "https://amzn.to/3uc5Z8h",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/dyna-comp"
    }, {
        id: "HD2_CompressorLAStudioComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Teletronix® LA-2A®",
        buyUrl: "https://amzn.to/3bhJy98",
        manualUrl: "https://jasonshimmy.com/music/effects/teletronix/la-2a"
    }, {
        id: "HD2_GateNoiseGate",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Use this to eliminate the hiss from noisy pickups or the white noise from extremely high gain distortions by placing the noise gate further in your signal path chain."
    }, {
        id: "HD2_GateHardGate",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "With more controls than the Noise Gate, you can further use this one for intentional effects, such as stuttering and lopped- off power chords."
    }, {
        id: "HD2_Compressor3BandComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original multiband compressor"
    }, {
        id: "HD2_CompressorAutoSwell",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_CompressorKinkyComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Xotic® SP Compressor",
        buyUrl: "https://amzn.to/3azMAGG",
        manualUrl: "https://jasonshimmy.com/music/effects/xotic/sp-compressor"
    }, {
        id: "HD2_CompressorRochesterComp",
        basedOn: "Ashly® CLX-52 and created in conjunction with Billy Sheehan",
        firmwareVersion: "2.90",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/ashly/clx-52"
    }, {
        id: "HD2_GateHorizonGate",
        basedOn: "Horizon Devices Precision Drive's gate circuit",
        firmwareVersion: "3.00",
        manualUrl: "https://jasonshimmy.com/music/effects/horizon-devices/precision-drive",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        synopsis: `Includes an extra Gate Range parameter that, when set to "Extended," drops the gate's threshold down to -90dB. Works best before an amp.`
    }, {
        id: "HD2_CompressorOptoComp",
        basedOn: "Ampeg Opto Comp",
        firmwareVersion: "3.15",
        buyUrl: "https://amzn.to/3eeNKII",
        manualUrl: "https://jasonshimmy.com/music/effects/ampeg/opto-comp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        synopsis: "<ul><li>Compress—This is actually a ratio control, which controls the amount of compression. At 0.0, the ratio is 1:1; at 5.0, the ratio is at 3:1, and at 10.0, the ratio is at 10:1</li><li>Release—Controls how long it takes for the compressor to stop&nbsp;reducing gain. At 0.0, the&nbsp;release is 75 ms; at 10.0, the release is around&nbsp;600 ms</li><li>Mix—Controls the wet/dry mix of the compressor. When set to 0%, no compressed signal is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li></ul>"
    }, {
        id: "HD2_DM4BoostComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: 'Inspired by a MXR® Micro Amp. Our model delivers the same "goose the input of the amp" experience and serves up a little secret sauce on the side.'
    }, {
        id: "HD2_DM4RedComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "MXR® Dyna Comp",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/dyna-comp",
        synopsis: "Based on the MXR® Dyna Comp, probably the most widely used stompbox compressor. Slide players such as Lowell George loved it."
    }, {
        id: "HD2_DM4BlueComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Boss® CS-1",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/cs-1-compression-sustainer",
        synopsis: "Based on the Boss® CS-1 Compression Sustainer with the treble switch off."
    }, {
        id: "HD2_DM4BlueCompTreb",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Boss® CS-1",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/cs-1-compression-sustainer",
        synopsis: "Based on the Boss® CS-1 Compression Sustainer with the treble switch on."
    }, {
        id: "HD2_DM4VettaComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Taken from Line 6's guitar amplifier - Vetta II. With a fixed ratio of 2.35:1, adjustable threshold and up to 12dB of gain available at the Level knob."
    }, {
        id: "HD2_DM4VettaJuice",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "A Line 6 original also created for our Vetta II guitar amplifier, the 'Juice' in Vetta Juice comes from the 30dB of available gain in the Level knob."
    }, {
        id: "HD2_DM4TubeComp",
        category: "Dynamics",
        subcategory: "Mono, Stereo",
        basedOn: "Teletronix® LA-2A®",
        manualUrl: "https://jasonshimmy.com/music/effects/teletronix/la-2a",
        synopsis: "Based on the Teletronix® LA-2A® studio compressor. Considered one of the finest compressors in many circles."
    }, {
        id: "VIC_FeedbackSim",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: `<p>Oh man, this one is fun with a capital Ffffff but you'll want to read up on how to get the best results. Works best as one of the first blocks in your signal flow. <strong>NOTE: Feedbacker loads bypassed by default.</strong></p><ul><li>Fdbk Gain—Controls the amount of feedback. At higher settings, can easily overwhelm your guitar signal; at lower settings, the feedback can better "sit" between chords. <strong>WARNING! Be careful, as this effect can quickly go off the rails, just like real feedback.</strong> Consider assigning it to a momentary stomp so feedback only appears while you hold the switch.</li><li>Fdbk Type—Determines the type of the feedback generated. <strong>TIP: Try assigning different Feedback Type values to snapshots.</strong><ul><li>-Octave—Feedback appears one octave below the "reference frequency," which is basically the note Feedbacker chooses to base its feedback generation on. Depending on the chord, Feedbacker may choose different reference frequencies.</li><li>Unison—Feedback appears at the reference frequency.</li><li>+Octave—Feedback appears one octave above the the reference frequency.</li><li>Oct +5th—Feedback appears one octave plus a 5th above the the reference frequency.</li><li>+2 Octaves—Feedback appears two octaves above the the reference frequency.</li><li>2 Oct+3rd—Feedback appears two octaves plus a 3rd above the reference note frequency.</li><li>2 Oct+5th—Feedback appears two octaves plus a 5th above the reference note frequency.</li><li>2 Oct+7th—Feedback appears two octaves plus a 7th above the reference note frequency.</li><li>High to Low—Feedback typically begins on the highest harmonic below 1200 Hz and descends to lower harmonics as the signal decays.</li><li>Mid to Low—Feedback typically starts on the highest harmonic below 500 Hz and drops down to lower harmonics as the signal decays.</li><li>Rndm Onset—New harmonics are selected randomly every time a new onset (note or chord's attack) is detected. In this case, repeating the same chord could still generate different harmonics.</li><li>Rndm Trigger—New harmonics are selected randomly every time the Retrigger parameter is set to "Trigger." See the Retrigger parameter below.</li></ul></li><li>Attack—Controls how quickly feedback appears.</li><li>Release—Controls how quickly each harmonic dies out or transitions to a different one. At higher values, you may hear more than one harmonic as they transition.</li><li>Dry Kill—Determines what happens to the dry (unaffected) signal:<ul><li>Off—The dry signal is controlled by the Dry Level parameter but is otherwise unaffected when the Feedbacker block is turned on</li><li>On—The dry signal is muted when the Feedback block is turned on. <strong>TIP: With Dry Kill on and Fdbk Type set to "Unison," playing slower, single notes can result in sounds similar to using an E-bow.</strong></li><li>Always—The dry signal is completely muted from the entire path, regardless of whether the Feedback block is on or off. <strong>TIP: Use this setting only when Feedbacker is on a parallel path.</strong></li></ul></li><li>Dry Level—Sets the amount of dry signal through the Feedbacker block. <strong>TIP: Assign this parameter to an expression pedal for blending in the dry signal behind the feedback.</strong></li><li>Reference—Determines which note within a chord is referenced by the feedback. "Lowest" prioritizes a chord's lowest-pitched note as the feedback reference, which often represents the fundamental frequency of the chord. "Loudest" prioritizes the loudest note in the chord as the feedback reference, which may not be the lowest note.</li><li>Silence Thr—Sets the level threshold above which feedback is generated. Below this level, no feedback will be generated. Onset Thr—When Feedback Type is set to Rndm Offset, sets the threshold of onsets (plucks) that cause changes to the feedback note. Lower values increase sensitivity to plucking and strumming, so changes to the feedback note take place more often. Higher values reduce sensitivity to plucking and strumming, so changes to the feedback note take place less often.</li><li>Offset Thr—When the level drops below this level, feedback fades out.</li><li>Retrigger—Okay, Retrigger isn't a parameter per sé; it's meant for you to assign it to an unused momentary stomp switch. (Press and hold the Retrigger knob, press Learn, press the desired stomp switch, and then set Type to "Momentary.") Every time you press the switch (and the parameter changes from "---" to "Trigger"), the feedback generated will change, depending on the type of mode:<ul><li>High to Low or Mid to Low modes—Pressing the Retrigger switch will cause the Feedbacker to descend to lower harmonics.</li><li>Rndm Trigger or Rndm Onset—Pressing the Retrigger switch will cause the Feedbacker to randomly choose a different harmonic.</li><li>All other modes—Pressing the Retrigger switch will cause feedback to regenerate at the mode's selected frequency.</li></ul></li><li>Trails—When on, feedback continues to ring out (for the duration of the Release parameter) after the block is bypassed. When off, feedback stops abruptly when the block is bypassed.</li></ul>`
    }, {
        id: "HD2_EQSimple3Band",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_EQLowCutHighCut",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_EQParametric",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "High shelf, low shelf, and a fully parametric band."
    }, {
        id: "HD2_EQGraphic10Band",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "MXR® 10-Band Graphic EQ",
        buyUrl: "https://amzn.to/3u6kP05",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/10-band-graphic-eq"
    }, {
        id: "HD2_CaliQ",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "MESA/Boogie® Mark IV Graphic EQ",
        manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/mark-iv"
    }, {
        id: "HD2_EQLowShelfHighShelf",
        firmwareVersion: "2.80",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_EQSimpleTilt",
        firmwareVersion: "2.80",
        category: "EQ",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Tilt is a subtle 6dB EQ that boosts high frequencies while simultaneously attenuating low frequencies (or vice versa). Great for quickly making tones a bit brighter or darker. The Center Freq parameter sets the frequency around which the boost and cut pivot."
    }, {
        id: "L6SPB_AcousGtrSim",
        basedOn: "BOSS® AC-2 Acoustic Simulator",
        buyUrl: "https://amzn.to/3bl5S1C",
        firmwareVersion: "3.00",
        category: "EQ",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/ac-2-acoustic-simulator",
        synopsis: "Includes an extra Shimmer parameter that imparts some motion to the harmonics, reminiscent of how a string's vibration tends to affect the other strings. Just like the original, works best with single-coil pickups. Can be used alone or in conjunction with an acoustic IR."
    }, {
        id: "HD2_TremoloOpticalTrem",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Fender® optical tremolo circuit",
        manualUrl: "https://www.clarkhuckaby.com/NewVibe/CloseLookVibe.html"
    }, {
        id: "HD2_Tremolo60sBiasTrem",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Vox® AC-15 Tremolo",
        manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15"
    }, {
        id: "HD2_TremoloTremolo",
        category: "Modulation",
        subcategory: "Mono",
        basedOn: "BOSS® PN-2",
        buyUrl: "https://amzn.to/3uaLzMQ",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/pn-2-tremolo-pan"
    }, {
        id: "HD2_TremoloTremolo",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® PN-2",
        buyUrl: "https://amzn.to/3uaLzMQ",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/pn-2-tremolo-pan"
    }, {
        id: "HD2_TremoloHarmonic",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_PhaserScriptModPhase",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "MXR® Phase 90",
        buyUrl: "https://amzn.to/3bhluDa",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/phase-90"
    }, {
        id: "HD2_PhaserUbiquitousVibe",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Shin-ei Uni-Vibe®",
        buyUrl: "https://amzn.to/3dqF1E3",
        manualUrl: "https://jasonshimmy.com/music/effects/shin-ei/uni-vibe"
    }, {
        id: "HD2_PhaserDeluxePhaser",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_FlangerGrayFlanger",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "MXR® 117 Flanger",
        buyUrl: "https://amzn.to/3k0bWR5",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/117-flanger"
    }, {
        id: "HD2_FlangerHarmonicFlanger",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "A/DA Flanger",
        buyUrl: "https://amzn.to/37rRWBz",
        manualUrl: "https://jasonshimmy.com/music/effects/ada/flanger"
    }, {
        id: "HD2_FlangerCourtesanFlange",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Electro-Harmonix® Deluxe EM",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-em"
    }, {
        id: "HD2_FlangerDynamixFlanger",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_Chorus",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_Chorus70sChorus",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® CE-1",
        buyUrl: "https://amzn.to/3dlnqgG",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/ce-1-chorus-ensemble"
    }, {
        id: "HD2_ChorusTrinityChorus",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "DyTronics Tri-Stereo Chorus",
        manualUrl: "https://jasonshimmy.com/music/effects/song-bird-dytronics/tri-stereo-chorus"
    }, {
        id: "HD2_VibratoBubbleVibrato",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® VB-2 Vibrato",
        buyUrl: "https://amzn.to/3ubutyr",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/vb-2-vibrato"
    }, {
        id: "HD2_RotaryVibeRotary",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Fender® Vibratone",
        manualUrl: "https://jasonshimmy.com/music/effects/fender/vibratone"
    }, {
        id: "HD2_Rotary122Rotary",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Leslie® 122",
        manualUrl: "https://jasonshimmy.com/music/effects/leslie/122"
    }, {
        id: "HD2_Rotary145Rotary",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Leslie®^145",
        manualUrl: "https://jasonshimmy.com/music/effects/leslie/145"
    }, {
        id: "HD2_RingModulatorAMRingMod",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_RingModulatorPitchRingMod",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_ChorusPlastiChorus",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Modded Arion SCH-Z Chorus",
        manualUrl: "https://jasonshimmy.com/music/effects/arion/sch-z-chorus"
    }, {
        id: "HD2_TremoloPattern",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Lightfoot Labs© Goatkeeper",
        manualUrl: "https://jasonshimmy.com/music/effects/lightfoot-labs/goatkeeper"
    }, {
        id: "HD2_DelayDoubleDouble",
        category: "Modulation",
        subcategory: "Stereo",
        basedOn: "Line 6 Original Doubler",
        synopsis: '<p>Check out this great resource for this effect on <a href="https://www.afteraudio.com/musings/blog/helix-double-take-double-tracker-explained">After Audio</a>.'
    }, {
        id: "HD2_PhaserPebblePhaser",
        basedOn: "Electro-Harmonix® Small Stone phaser",
        buyUrl: "https://amzn.to/37r8Ct7",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/small-stone",
        firmwareVersion: "2.90",
        category: "Modulation",
        subcategory: "Mono, Stereo"
    }, {
        id: "L6SPB_PolyChorus",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.00",
        category: "Modulation",
        subcategory: "Mono",
        synopsis: "Great for those who avoid traditional chorus pedals."
    }, {
        id: "HD2_RetroReel",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.10",
        category: "Modulation",
        subcategory: "Mono",
        synopsis: "<p>Line 6 Original effect that simulates playing a signal back from an analog tape machine. This signal can be distorted, filtered to sound older or more lo-fi, and modulated with a Wow/Flutter control</p><ul><li><strong>Wow Fluttr</strong>: Determines how much warbly tape sound is heard</li><li><strong>Saturation</strong>: Adds an analog tape saturation and at high enough settings, distortion. At lower settings, it's great for simply warming up a tone</li><li><strong>Low Cut</strong>: Determines the frequency of the Low Cut (High Pass) filter. At higher settings, can provide a lo-fi effect</li><li><strong>High Cut</strong>: Determines the frequency of the High Cut (Low Pass) filter. At lower settings, can provide the natural high-end roll-off of old tape</li><li><strong>Tape Speed</strong>: Changes both the rate of the modulation applied by the Wow Fluttr control and the filtering response of the analog tape emulation</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul><p><strong>Tip:</strong> Helix Native users should definitely try Retro Reel on all sorts of tracks—vocals, drums, keyboards, strings, busses, effects returns, you name it. Anything that needs a bit more punch or vibe.</p>"
    }, {
        id: "HD2_ChorusAmpegLiquifier",
        basedOn: "Ampeg Liquifier",
        manualUrl: "https://jasonshimmy.com/music/effects/ampeg/liquifier",
        buyUrl: "https://amzn.to/32ojRCT",
        firmwareVersion: "3.15",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: `<ul><li>Rate—Adjusts the speed of the chorus' low-frequency oscillator (LFO) from slow to fast.</li><li>Depth—Adjusts the amplitude of the modulation, from mild to deep.</li><li>Mix—Controls the wet/dry mix of the chorus. When set to 0%, no chorus is heard; when set to 100%, no dry signal is heard</li><li>Type—Liquifier is actually two choruses in one, hence the "Dual" default. If you'd prefer it to behave more like a traditional chorus pedal, choose "Single"</li><li>Headroom—Some mod pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Level—Sets the overall level of the block</li></ul>`
    }, {
        id: "TapeEater",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.15",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "<p>If you've ever had a cassette player eat a tape before you'll know what we're talking about. Try this with a slow speed setting and a 100% wet mix.</p>"
    }, {
        id: "Warble_Matic",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.15",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "<p>This effect is reminiscent of the Sweeper model, but when used subtly it can produce a nice mild phasey sound or with Depth maxed out you can simulate the sound of an alien spacecraft landing in one of those old 50's sci-fi movies.</p>"
    }, {
        id: "SampleAndHold",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.15",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "<p>This has a similar effect as the old Oberheim® Voltage Controlled Filter. It creates changes in tone by randomly emphasizing certain frequencies. Try pressing the Speed knob to lock it to tempo and playing single chords to that tempo.</p>"
    }, {
        id: "Sweeper",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.15",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "<p>Imagine having 2 wah pedals on steroids separated in a stereo field that are pulsating in opposite positions and you're close to what you'll hear here. Use the Q and Freq parameters to set the character of the sweep and adjust Depth to go from subtle to full on freak out. Any resemblance to guitar tracks heard in a particular genre of B films is strictly coincidental.</p>"
    }, {
        id: "HD2_MM4OptoTremolo",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Based on the optical tremolo circuit that was used in the blackface Fender® amps, like the '64 Deluxe Reverb®."
    }, {
        id: "HD2_MM4BiasTremolo",
        basedOn: "1960 Vox® AC- 15 Tremolo",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15",
        synopsis: "Based on the 1960 Vox® AC- 15 Tremolo, which got its pulse by literally varying the bias of the power amp tubes."
    }, {
        id: "HD2_MM4PatternTrem",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the Lightfoot Labs Goatkeeper. This effect is what you'd get if you could hook up a vintage keyboard sequencer to a tremolo."
    }, {
        id: "HD2_MM4Phaser",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the MXR® Phase 90. Our model features additional parameters to take you there and back again."
    }, {
        id: "HD2_MM4DualPhaser",
        basedOn: "Mu-Tron® Bi-Phase",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-bi-phase",
        synopsis: "Known for its big jet sound."
    }, {
        id: "HD2_MM4PannedPhaser",
        basedOn: "Ibanez® Flying Pan",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/ibanez/flying-pan",
        synopsis: "It's a 4-stage phase shifter with a panner built in."
    }, {
        id: "HD2_MM4BarberpolePhaser",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "A classic effect from the world of modular synths. This phaser either sounds like it's always going up or always down depending on how you set it. Set to stereo you get both!"
    }, {
        id: "HD2_MM4ScriptPhase",
        basedOn: "MXR® Phase 90",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/phase-90",
        synopsis: `Just one knob, Speed, like the original "script logo" version. Just add brown sound and you'll be "Talking' Bout Love."`
    }, {
        id: "HD2_MM4UVibe",
        basedOn: "Uni-Vibe®",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/shin-ei/uni-vibe",
        synopsis: `One listen to "Machine Gun" and you'll be hooked on this effect model!`
    }, {
        id: "HD2_MM4AnalogFlanger",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the classic MXR® Flanger."
    }, {
        id: "HD2_MM4JetFlanger",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the A/DA Flanger. Compared to the Analog Flanger, this model is more dramatic, with a different wave shape."
    }, {
        id: "HD2_M13ACFlanger",
        basedOn: "MXR® Flanger",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/mxr/117-flanger",
        synopsis: `You've heard it on Van Halen's Fair Warning, Women and Children First, and "Unchained".`
    }, {
        id: "HD2_M1380AFlanger",
        basedOn: "A/DA Flanger",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/ada/flanger",
        synopsis: "Based on the A/DA Flanger with its signature jet-like sweep. True to the original, this model features the same knob functions as the classic."
    }, {
        id: "HD2_MM4AnalogChorus",
        basedOn: "Boss® CE-1 Chorus Ensemble",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/ce-1-chorus-ensemble",
        synopsis: "Based on the Boss® CE-1 Chorus Ensemble, the original stompbox chorus with big, warm and groovy chorus tones."
    }, {
        id: "HD2_MM4TriChorus",
        basedOn: "Song Bird / DyTronics Tri-Stereo Chorus",
        manualUrl: "https://jasonshimmy.com/music/effects/song-bird-dytronics/tri-stereo-chorus",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Based on the Song Bird / DyTronics Tri-Stereo Chorus. You may have never seen one, but you've heard it hundreds of times."
    }, {
        id: "HD2_MM4Panner",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "This effect pans back and forth between your left and right channels. If you try and run it in mono, it's basically tremolo."
    }, {
        id: "HD2_MM4RotaryDrum",
        basedOn: "Fender® Vibratone",
        manualUrl: "https://jasonshimmy.com/music/effects/fender/vibratone",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: 'Based on the Fender® Vibratone. This rotating speaker effect was a popular hit with SRV. Think "Cold Shot."'
    }, {
        id: "HD2_MM4RotaryDrumHorn",
        basedOn: "Leslie® 145",
        manualUrl: "https://jasonshimmy.com/music/effects/leslie/145",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "A tube-driven rotating speaker cabinet. It was made for the B3 but guitarists fell in love with this shimmery effect."
    }, {
        id: "HD2_MM4Dimension",
        basedOn: "Roland® Dimension D",
        manualUrl: "https://jasonshimmy.com/music/effects/roland/dimension-d",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "One of the first true stereo chorus units. Relatively subtle in it's nature, it became an industry standard for double-track effects."
    }, {
        id: "HD2_MM4RingModulator",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "Ring modulators are for those special times when you want different, weird, strange and otherwise nontraditional guitar sounds."
    }, {
        id: "HD2_MM4FrequencyShifter",
        basedOn: "Line 6 Original",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: "A ring modulator gives you both up and down shifted frequencies. Here you can select just the up or down shifted frequencies."
    }, {
        id: "HD2_Chorus4Voice",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.50",
        category: "Modulation",
        subcategory: "Mono, Stereo"
    }, {
        id: "VIC_FlexoVibe",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.50",
        category: "Modulation",
        subcategory: "Mono, Stereo"
    }, {
        id: "HD2_Rotary3Rotor",
        basedOn: "Roland RA-200",
        firmwareVersion: "3.60",
        category: "Modulation",
        subcategory: "Mono, Stereo",
        synopsis: `<p>"The Line 6 Triple Rotary is inspired by the Yamaha RA-200 Rotary speaker. The original RA-200 was a combo solid state amplifier designed to be used with organs much like other rotary speakers. However; the RA-200 unit was unique compared to the traditional rotary speakers, which typically have rotating horns and a rotating drum over a woofer, the Yamaha designs had midrange speakers which rotated vertically on top of a traditional non-rotating speaker cabinet.</p><p>"To make the model more versatile, we made this effect to behave more as a stereo effect rather than modeling the whole cabinet, and suggest using the effect in combination with a cabinet model if recording direct or listening through FRFR systems."</p><p>—Sam Hwang, Sound Designer</p><ul><li>Speed—Sets whether the speaker reflects the Slow Speed or Fast Speed</li><li>Slow Speed—Sets the rate for the Slow Speed. Press the knob to toggle between a static rate (0.0 ~ 10.0) or note values for syncing with Tap Tempo and incoming MIDI clock</li><li>Fast Speed—Sets the rate for the Fast Speed. Press the knob to toggle between a static rate (0.0 ~ 10.0) or note values for syncing with Tap Tempo and incoming MIDI clock</li><li>Ramp Time—Adjusts how fast switching from Slow Speed to Fast Speed and back takes place</li><li>Mix—Controls the wet/dry mix of the rotary effect. When set to 0%, no rotary effect is heard; when set to 100%, no dry signal is heard</li><li>Level—Controls the overall output level of the block</li><li>Drive—Controls the amount of drive into the speaker's power amp</li><li>Headroom—Adds up to 12.0dB of additional headroom</li><li>Low Cut—Applies a low cut (high pass) filter to the speakers, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the speakers, letting you remove the effected signal above a certain frequency</li><li>Wobble—Models how evenly the rotating speaker and its ballast weight are balanced about the axis. At zero, the speaker and ballast are perfectly balanced, and as the wobble control is increased the rotation of the speakers becomes more eccentric.</li><li>Separation—The separation of the stereo field. Practically, this simulates moving the two listening points further apart as the separation knob is increased</li><li>Rotor Drift—Adjusts how close the three rotor motors are in sync with each other in speed. As each of the rotors were belt driven, there are often some differences in belt or motor wear, and it creates some subtle modulation effects between the three rotors</li><li>Rotor 2 Lvl—Sets the individual volume of the second rotor</li><li>Rotor 3 Lvl—Sets the individual volume of the third rotor</li></ul>`
    }, {
        id: "HD2_DelaySimpleDelay",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayModChorusEcho",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayDualDelay",
        category: "Delay",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayMultitap4",
        category: "Delay",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayMultitap6",
        category: "Delay",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelaySweepEcho",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayDuckedDelay",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "TC Electronic® 2290",
        manualUrl: "https://jasonshimmy.com/music/effects/tc-electronic/2290"
    }, {
        id: "HD2_DelayReverseDelay",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayVintageDigitalV2",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayTransistorTape",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Maestro® Echoplex EP-3",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-3"
    }, {
        id: "HD2_DelayHarmonyDelay",
        category: "Delay",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayBucketBrigade",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® DM-2",
        buyUrl: "https://amzn.to/3dxh5Pr",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay"
    }, {
        id: "HD2_DelayAdriaticDelay",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "BOSS® DM-2 w/ Adrian Mod",
        buyUrl: "https://amzn.to/3dxh5Pr",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay"
    }, {
        id: "HD2_DelayElephantMan",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Electro-Harmonix® Deluxe Memory Man",
        buyUrl: "https://amzn.to/2ZwJkFr",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-memory-man",
        synopsis: '<p><strong>Mix</strong>: Allows you to vary the mix of direct and delayed signals; it is set to the center position equal levels of both.</p><p><strong>Feedback</strong>: Provides delay repeats, or multiple echoes. If set very high, runaway oscillation will occur. Fairly high feedback with short delay settings produces a reverb effect.</p><p><strong>Time</strong>: Determines the time between direct and delayed signals, and between the repeats when feedback is used. Strange, eerie and unusual pitch-shift effects can be produced by changing the delay while playing, especially while using feedback.</p><p><strong>Mode</strong>: Allows you to choose between Chorus or Vibrato mode.</p><p>The Vibrato mode produces a "Doppler" pitch shifting effect in the delayed signal. A rich, vibrant chorus effect is produced with the switch set to CHORUS, delay fairly short, blend at the center, chorus set high, and feedback fairly high.</p><p><strong>Depth</strong>: The DEPTH control sets the amount of modulation in the delay time. The modulation rate is slow for chorus and faster for vibrato.</p>',
        notableUsers: `<p>The Foo Fighters make extensive use of the Memory Man alongside a Pro Co Rat into a Vox AC-30 on their third album, There's Nothing Left to Lose. See the following excerpts:</p><p><strong>What was the fundamental guitar-sound recipe for the new album?</strong></p><p>We focused on not using too many distortion pedals, and went for a cleaner, fatter, more natural overdrive. We used a Vox AC30 for pretty much everything on the record, tweaking the sound so that it broke up nicely when played loud.</p><p>Sometimes we'd double a track using an old Pro Co Rat, and then hard-pan the parts so that a super-distorted guitar was in the left channel and a grindy guitar was in the right. Then we'd sprinkle in lots of clean guitar overdubs.</p><p><strong>How did you get the undulating tone on "Breakout"?</strong></p><p>That's the Memory Man through the Vox. We tried to set the wave of the phase so that it was in sync with the rhythm of the song.</p><p><strong>Note:</strong> It is believed Mr. Grohl mispoke here and actually meant the MXR Phase 90 (Script Mod Phase) with its speed knob set around 11 o'clock.</p><p><strong>"Headwires" is filled up with so many guitar parts, yet the mix doesn't sound cluttered.</strong></p><p>Oh yeah -- Adam's good with that stuff. The main riff is an Explorer playing through the Memory Man and the Vox, and the harmonics were done with the same setup. The choruses are the Duo Jet running through a Rat and the Vox. The high, picking part in the middle eight is an SG through the Memory Man.</p><p>Check out the rest of this <a href="https://www.fooarchive.com/features/guitarplayer99.htm">fantastic interview</a> with Dave Grohl from a 1999 issue of Guitar Player Magazine for more details.</p>`
    }, {
        id: "HD2_DelayPitch",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelaySwellVintageDigital",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelaySwellAdriatic",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_DelayCosmosEcho",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Roland® RE-201 Space Echo",
        manualUrl: "https://jasonshimmy.com/music/effects/roland/re-201-space-echo"
    }, {
        id: "HD2_DelayMultiPass",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "L6SPB_InfSustain",
        firmwareVersion: "3.00",
        category: "Delay",
        subcategory: "Mono",
        basedOn: "Line 6 Original",
        synopsis: "Infinite sustain with a modulated poly pitch engine built in."
    }, {
        id: "Victoria_ShufflingDelay",
        firmwareVersion: "3.00",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Performance delay that lets you freely manipulate the repeats' behavior in real-time."
    }, {
        id: "Victoria_EuclideanDelay",
        firmwareVersion: "3.10",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>Line 6 Original delay based on Euclidean rhythm algorithms. Settle in because this one'll require diagrams and charts and whatnot.</p><ul><li><strong>Time</strong>: Sets the delay time; press the knob to toggle between ms/sec and note values</li><li><strong>Feedback</strong>: Controls the overall number of repeats heard for the entire sequence. If you want to hear all fills in the sequence only once, set to "0%"</li><li><strong>Steps</strong>: Determines the number of steps in the sequence (1-16; see diagram below)</li><li><strong>Fill</strong>: Using Euclidean math, evenly distributes fills in the sequence with repeats (1-16; see diagram below)</li><li><strong>Rotate</strong>: Rotates all fills forward by the same amount (0-15; see diagram below). Used If you like the sound of a repeat pattern but want the fills and gaps shifted forward</li><li><strong>Mix</strong>: Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the fills, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the fills, letting you remove the effected signal above a certain frequency</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, delay repeats continue to ring out after the block is bypassed</li></ul><img src="/images/release-notes-3.10-steps.png" alt="Euclidean Delay Steps" /><p><strong>Tip</strong>: Add two Euclidean Delays in parallel for interesting polyrhythm patterns. When using a stereo playback system, try panning Paths A and B in the mixer to L100 and R100.</p><p>If you'd like to read more about Euclidean rhythms, check this out: <a href="https://en.wikipedia.org/wiki/Euclidean_rhythm">https://en.wikipedia.org/wiki/Euclidean_rhythm</a></p>`
    }, {
        id: "HD2_DelayHeliosphere",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<ul><li>Time—Sets the delay time. Press the knob to toggle between ms/Sec and note values</li><li>Feedback—Controls the overall number of repeats. To hear only one repeat, set to 0%</li><li>Rate—Controls the rate or speed of modulation</li><li>Depth—Controls the depth or amount of modulation</li><li>Mix—Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li><li>Scale—For stereo delays, the Time parameter sets the left side. The right side's time is always some percentage of the left's time, and is determined by the Scale parameter. For example, if Time is set to 500ms, and Scale is set to 70%, the left delay is 500ms and the right delay is 350ms (or 70% of 500ms). When scale is set to 100%, left and right delays are the same</li><li>Rev Mix—Controls the wet/dry mix of the reverb inside the delay's feedback loop. When set to 0%, no reverb is heard</li><li>Rev Decay—Sets the decay of the reverb</li><li>Headroom—Some delay pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
    }, {
        id: "HD2_DelayADT",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<ul><li>Delay 1, Delay 2—Sets the delay time for each deck. Delay 1 can go up to 20ms and Delay 2 can go up to 200ms</li><li>WowFlutr1, WowFlutr2—Determines how much warbly tape sound is heard for each deck</li><li>Saturate1, Saturate2— Adds analog tape saturation and at high enough settings, distortion. At lower settings, it's great for simply warming up a tone</li><li>Deck 1 Vol, Deck 2 Vol—Sets the level of each deck independently. Deck 2 is a bit lower than Deck 1 by default</li><li>Deck 2 Pol—Flips the polarity of deck 2</li><li>Mod Rate—Controls the rate or speed of modulation applied to Deck 2</li><li>ModDepth—Controls the depth or amount of modulation applied to Deck 2</li><li>Level—Sets the overall level of the block</li><li>TapeSpeed—Changes both the rate of the modulation applied by the WowFluttr control and the filtering response of the analog tape emulation</li><li>Texture— Adjusts the amount of the NAB tape EQ in the simulated tape path. When Saturation is set to 0.0, the texture is invisible. When Saturation is turned up, the texture will affect the tightness (or looseness) of the distortion</li><li>Low Cut—Applies a low cut (high pass) filter to the decks, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the decks, letting you remove the effected signal above a certain frequency</li><li>Deck 1 Pan, Deck 2 Pan—Pans each deck left and right</li><li>EnvThresh—Sets the level above which engages the envelope. When on, picking harder can impart very slight pitch fluctuations by tweaking Deck 2's delay. Subtle, but fun</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
    }, {
        id: "VIC_DelayStutterEdit",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>Tesselator&nbsp;is part morphing delay, part loop sampler, part drone machine...&nbsp;it's stellar for creating rhythmic pads,&nbsp;textures, or pitch/filter ramp effects&nbsp;to play over and has been placed in the Delay category so you can run multiple instances at once.&nbsp;Once audio is captured and repeating, you can effectively transition/morph between two states—First and Last,&nbsp;each with its own time, speed/pitch, HP filter, and LP filter—by applying increasing amounts to each repeat until the target settings are reached.</p><ol><li>Assign Tesselator to a stomp footswitch.&nbsp;It's bypassed by default.</li><li>Play a chord and while it's ringing, press the Tesselator switch.&nbsp;Audio captured BEFORE the switch press is&nbsp;repeated and manipulated by the following parameters:</li></ol><ul><li>First—Determines the length of the first step in the sequence, that is, the length of&nbsp;repeated audio when first engaged.&nbsp;Press the knob&nbsp;to toggle between ms and note values</li><li>Last—Determines the length of the last step in the sequence. If shorter than the First step's time, the sequence will get shorter; if longer than the First step's time, the sequence will get longer. If First and Last are the same time, the sequence length remains constant (<i>Ex. 1</i> below). Press the knob to toggle between ms and note values</li><li>Steps—Determines how many steps there are in the sequence (1 ~ 50). For example, if your&nbsp;first step is 100ms and&nbsp;your last step&nbsp;is 500ms, each successive step in the sequence will lengthen&nbsp;from 100ms to 500ms. The more steps you have, the longer it takes to reach the last step and therefore, the longer it takes to alter the sequence's characteristics</li><li>Direction—Determines the direction of the steps:<ul><li>Forward: Each step&nbsp;plays&nbsp;back normally (<i>Ex. 2a</i> below)</li><li>Reverse: Each step&nbsp;plays&nbsp;back in reverse (<i>Ex. 2b</i> below)</li><li>Fwd/Rev: Steps alternate between forward and reverse&nbsp;(<i>Ex. 2c</i> below)</li></ul></li><li>Boomerang—When off, the last step in the sequence repeats indefinitely. When on, all steps&nbsp;play&nbsp;forward, then backward, then forward again, etc. (<i>Ex. 3a</i> below)</li><li>Operation—Determines what happens to your signal when&nbsp;Tesselator is turned on (remember, it's bypassed by default)<ul><li>"Mute All"—When Tesselator is on, THE&nbsp;ENTIRE PATH IS MUTED</li><li>"Dry Kill"—When Tesselator is on, only the effected signal is heard. <i>TIP:</i> With Tesselator on a parallel path, assign a second stomp switch to toggle between Mute All and Dry Kill. This lets you leave the block enabled and bring the effected signal in and out by switching between the two values</li><li>"Normal" (default)—When Tesselator is on, both the dry and effected signals are heard</li></ul></li><li>Type—Determines whether any speed/pitch changes across the sequence reference a static or semitone value<ul><li>"Speed" (default)—Sets the target speed of the last step.&nbsp;Use the Speed parameter to set the specific value (0.0x speed ~ 2.0x speed)</li><li>"Pitch"—Sets the target pitch of the last step. Use the Pitch parameter to set the value (-12 ~ +12 semitones; see <i>Ex. 3c</i> below)</li></ul></li><li>Speed—Sets the target speed for&nbsp;the last step. For example, if set to "2.0x," the last step will be twice as fast as the first step and if set to "0.0x,"&nbsp;the last step will appear to stop completely.&nbsp;Disabled unless Type is set to "Speed"</li><li>Pitch—Sets the target pitch for&nbsp;the last step. For example, if set to "-12", the last step will be an octave lower than the first step.&nbsp;Disabled unless Type is set to "Pitch" (see Ex. 3c below)</li><li>HP Filter—Very different from Helix's traditional Low Cut and High Cut filters. Sets the high-pass (low cut) filter <i>target</i> for the last step. For example, if set to a higher value, each successive step will filter out more bass&nbsp;until the last step of the sequence</li><li>LP Filter—Very different from Helix's traditional Low Cut and High Cut filters. Sets the low-pass (high cut) filter <i>target</i> for the last step. For example, if set to a higher value, each successive step will filter out more treble&nbsp;until the last step of the sequence (<i>Ex. 3b</i>&nbsp;below)</li><li>FX Level—Controls the level of the effected signal</li><li>Level—Controls the overall output level of the block</li></ul><p><i>Woohoo! More charts and diagrams!</i></p><p>Tesselator is capable of hundreds of unique sounds, and it's impossible to illustrate them all, but here&nbsp;are a few examples:</p><p><i>Example&nbsp;1</i>: If Knob 1 (First) and Knob 2 (Last) are set to the same value (say, 1/4 note), the same length of audio repeats until Tesselator is bypassed. In this case, it acts very much like Delay &gt;&nbsp;Ratchet, except the audio is captured BEFORE the stomp press, not after.</p><p><i>Example&nbsp;2:</i> If Knob 2 (Last) is set to a shorter time than Knob 1 (First), steps in the sequence progressively get shorter (<i>Ex. 2a</i>). If Last is set to a longer time than First, steps in the sequence progressively get longer.&nbsp;The last step is repeated indefinitely until Tesselator is bypassed.&nbsp;Setting Direction to "Reverse" (<i>Ex. 2b</i>) reverses all steps; setting Direction to "Fwd/Rev" (<i>Ex. 2c</i>)&nbsp;alternates between forward and reversed steps.</p><p><i>Example&nbsp;3:</i> Turning Boomerang to "On" plays the entire step sequence forward, then backward, then forward again, etc. (<i>Ex. 3a</i>)&nbsp;Increasing LP Filter to a higher value progressively darkens each step in the sequence (<i>Ex. 3b</i>). Increasing HP Filter to a higher value progressively thins out each step in the sequence.&nbsp;Setting Type to "Pitch" and Pitch to a value other than "0" will change the pitch of each step until it lands on the target pitch at the last step. For example, if Pitch is set to "+5" and you play an E note, the last note in the sequence will be an A, or 5 steps higher (<i>Ex. 3c</i>). If you want the last A note to repeat indefinitely instead of stepping back down to E, turn Boomerang back to "Off."</p><p><i>TIP:</i>&nbsp;You can change all of these parameters while Tesselator is... tessellating, to create evolving, engaging soundscapes. Run it into&nbsp;Pitch &gt;&nbsp;Dual Pitch&nbsp;and&nbsp;Reverb &gt;&nbsp;Shimmer&nbsp;and prepare to waste hours in drone land.</p><p><img src="/images/tesselator-chart.png" alt="Tesselator Chart" /></p>`
    }, {
        id: "HD2_DelayCrissCross",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<ul><li>Time A, Time B—Sets the delay time for each of the two delay lines. Press the knob to toggle between ms/Sec and note values</li><li>Feedbk A, Feedback B—Controls the number of repeats for each delay line. To hear only one repeat, set to 0%</li><li>Pan A, Pan B—To achieve the widest stereo field, set Pan A to L100 and Pan B to R100</li><li>Mix—Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li><li>Crossfeed—Controls the amount of the A delay line fed back into the B delay line and vice versa</li><li>Headroom—Some delay pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Mod Rate—Controls the rate or speed of modulation</li><li>Mod Depth—Controls the depth or amount of modulation</li><li>Shape—Sets the modulation's wave shape (Sine or Triangle)</li><li>Phase—Determines the modulation's phase relationship between the two delay lines. At 0°, the delay lines modulate together; at 180°, modulation is inverted from one another</li><li>Bit Depth—Lowers the bit depth of the delay repeats for a grungier sound. For more transparent results, set to "24 bits"</li><li>Sample Rate—Lowers the sample rate of the delay repeats for a grungier sound. For more transparent results, set to "48kHz"</li><li>Low Cut—Applies a low cut (high pass) filter to the repeats, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the repeats, letting you remove the effected signal above a certain frequency</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
    }, {
        id: "VIC_DelayRatchet",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>A buffer sampler/delay. Used to capture and loop a short snippet of audio (whose length is determined by the Time parameter)&nbsp;while the block is enabled. Great for rhythmic stutter effects. You could almost consider Ratchet a simplified version of Tesselator, where the audio is captured AFTER the footswitch press, not before.</p><ol><li>Assign Ratchet to a stomp footswitch.&nbsp;It's bypassed by default.</li><li>While playing, press the Ratchet switch.&nbsp;Audio captured AFTER the switch press is&nbsp;repeated for as long as the block is enabled. For this reason, it may be best to make the switch momentary, and only step on the Ratchet switch when you change chords, almost like a really messed up (and by messed up, we mean awesome)&nbsp;sustain pedal.</li></ol><ul><li>Time—Predetermines the length of the audio to be recorded and looped. To loop an entire 4/4 bar, choose "1/1"; to stutter your playing, start with "1/16" or "1/32"</li><li>Operation—Determines what happens to your signal when&nbsp;Ratchet is turned on (remember, it's bypassed by default)<ul><li>"Mute All"—When Ratchet is on, THE&nbsp;ENTIRE PATH IS MUTED</li><li>"Dry Kill"—When Ratchet is on, only the effected signal is heard. <i>TIP:</i> With Ratchet on a parallel path, assign a second stomp switch to toggle between Mute All and Dry Kill. This lets you leave the block enabled and bring the effected signal in and out by switching between the two values</li><li>"Normal" (default)—When Ratchet is on, both the dry and effected signals are heard</li></ul></li><li>FX Level—Controls the level of the looped audio</li><li>Level—Controls the overall output level of the block</li></ul>`
    }, {
        id: "L6PhazeEko",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>Starting with the basic tone of our EP-1 tape delay emulation, they've added something very much like a Uni-Vibe to the delay repeats. The result is an echo unit that gives you unique new creative possibilities for adjusting the tone of your delays with a beautiful, burbling texture.</p>"
    }, {
        id: "L6BubbleEcho",
        firmwareVersion: "3.15",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>Bubble Echo has a sample-and-hold filter on the repeats. It takes a filter sweep (like the one on Sweep Echo), chops it up into little bits, and rearranges them semi-randomly, so that it sounds like sudden little bits of wah pedal randomly sprinkled about.</p>"
    }, {
        id: "HD2_DL4TubeEchoStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Maestro® EP-1",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-1",
        synopsis: "Some say the holy grail of delay. Like PB&J...tubes and tape is one great combination!"
    }, {
        id: "HD2_DL4TapeEchoStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Maestro® EP-3 Echoplex",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-3",
        synopsis: "The EP-3 used transistors instead of tubes for the sound electronics."
    }, {
        id: "HD2_DL4MultiheadStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Roland® RE-101 Space Echo",
        manualUrl: "https://jasonshimmy.com/music/effects/roland/re-101-space-echo",
        synopsis: "This model emulates the multiple playback heads of the original for that multi-tap delay effect."
    }, {
        id: "HD2_DL4AnalogDelayStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Boss® DM2 Analog Delay",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay",
        buyUrl: "https://amzn.to/3qfY4pn",
        synopsis: "Treasured for its warm, distorted delays only a bucket brigade delay can produce!"
    }, {
        id: "HD2_DL4AnalogDelayStereoMod",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Electro-Harmonix® Deluxe Memory Man",
        manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-memory-man",
        buyUrl: "https://amzn.to/3Em2XlB",
        synopsis: "An analog delay with chorus."
    }, {
        id: "HD2_DelayPingPong",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "This effect has two separate channels of delay, with the output of each channel flowing into the other, going back and forth like a game of ping pong."
    }, {
        id: "HD2_DL4Reverse",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "!seltaeB eht dna xirdneH imiJ ekil tsuJ — Take a step back in time. Whatever you play in comes back out at you backwards, delayed by the time you set (up to 2 seconds)."
    }, {
        id: "HD2_DL4AutoVolStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "This model gives you two effects in one. A volume fade- in swell used for a bowing effect. The other effect is an echo, complete with tape-style wow and flutter modulation."
    }, {
        id: "HD2_DL4EchoPlatterStereo",
        category: "Delay",
        subcategory: "Mono, Stereo",
        basedOn: "Binson EchoRec",
        manualUrl: "https://jasonshimmy.com/music/effects/binson/echorec",
        buyUrl: "https://amzn.to/32pIbnV",
        synopsis: "A staple for the likes of Pink Floyd. Rather than using tape, the EchoRec used a magnetic platter to record and play back."
    }, {
        id: "HD2_ReverbPlate",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Based on a studio Plate reverb. Similar to the spring, in its metallic resonant quality. Plate reverbs consisted of a thin metal sheet suspended inside a box."
    }, {
        id: "HD2_ReverbRoom",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Simulates the acoustic properties of a classic echo chamber, which was a room used in early recording studios for reverb effects."
    }, {
        id: "HD2_ReverbChamber",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "An elongated ambient space such as a hall, stairwell or elevator shaft creates this reverb type. Dreamy."
    }, {
        id: "HD2_ReverbHall",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Simulates the sound of a concert hall or large open space with a strong reverb tail. Imagine a gymnasium, performance hall, or cathedral."
    }, {
        id: "HD2_ReverbEcho",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Just like it says ...echo... echo...echo. This is a lush echo with reverb."
    }, {
        id: "HD2_ReverbTile",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Emulates the acoustic reflections of a tiled room, such as a bathroom or shower, with clearer/brighter discrete early reflections."
    }, {
        id: "HD2_ReverbCave",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Surreal cavernous echo chamber. I'm just a simple caveman... Your world frightens and confuses me... what more can be said."
    }, {
        id: "HD2_ReverbDucking",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Built using a 'Hall' but with a ducking effect. The volume of your reverb is “ducked” (reduced) while you're playing, and increases when you stop."
    }, {
        id: "HD2_ReverbOcto",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Creates a lush, ambient space with a harmonized decay whose harmonic denseness is controlled by the time knob. Use volume swells and prepare to float on cloud 9!"
    }, {
        id: "HD2_Reverb63Spring",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Based on a 1963 brown spring reverb head unit. Best known for great surf guitar tone!"
    }, {
        id: "HD2_ReverbSpring",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Based on a studio spring reverb. A spring reverb's characteristic resonant sound was created by springs suspended inside a metal box. Sweet!"
    }, {
        id: "HD2_ReverbParticle",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "A Line 6 original that turns your chords into a lush modulated pad in stable mode. Critical mode adds a slight rise in pitch. All stops are removed when in Hazard mode."
    }, {
        id: "HD2_ReverbGlitz",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_ReverbGanymede",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_ReverbSearchlights",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_ReverbPlateaux",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_ReverbDoubleTank",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "VIC_ReverbRotating",
        firmwareVersion: "3.10",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>Here is a description of each parameter:</p><ul><li><strong>Decay</strong>: Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity) TIP: Assign a second stomp switch to toggle between a lower Decay value and Infinity. Label it "ForEVER ever?"</li><li><strong>Predelay</strong>: Determines the amount of delay heard before the signal enters the hall. Can sometimes result in more definition between the dry and effected signals</li><li><strong>Room Size</strong>: Sets the size of the hall (10, 20, or 30 meters). NOTE: This parameter actually changes the algorithm so you'll hear a small bump when changing it. Therefore, we don't recommend assigning Room Size to snapshots or other controllers</li><li><strong>Diffusion</strong>: Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li><strong>Damping</strong>: Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty</li><li><strong>Mix</strong>: Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li><strong>Motion</strong>: Sets the amount of randomization, which can be helpful to minimize any metallic artifacts common in static reverbs. At higher values, can impart a bit of modulation to the effected signal</li><li><strong>Low Freq</strong>: Sets the frequency below which the Low Gain parameter is applied</li><li><strong>Low Gain</strong>: Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, reverb decay continues to ring out after the block is bypassed</li></ul>`
    }, {
        id: "HD2_ReverbHxSpring",
        firmwareVersion: "3.10",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: '<p>Here is a description of each parameter:</p><ul><li><strong>Dwell</strong>: Adjusts the strength of the signal sent into the spring tank. Higher values result in a longer decay</li><li><strong>Spring Count</strong>: Sets how many springs are in the tank (1, 2, or 3, and numerous values in between)</li><li><strong>Drip</strong>: Adjusts the intensity of the spring reverb, or how much "ploink" you might hear</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li><strong>Mix</strong>: Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, reverb decay continues to ring out after the block is bypassed</li></ul>'
    }, {
        id: "VIC_DynPlate",
        firmwareVersion: "3.15",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>A plate reverb typically found in high-end studio rack reverbs.</p><ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity)</li><li>Predelay—Determines the amount of delay heard before the signal enters the plate. Can sometimes result&nbsp;in more definition between the dry and effected signals</li><li>Damping—Determines the&nbsp;frequency above which&nbsp;the reverb will be absorbed. For example, if your hall is full of people wearing fake&nbsp;ocelot jumpsuits, more high frequencies would be&nbsp;absorbed than if the room were empty</li><li>MotRate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature</li><li>MotRng—Motion Range, or how much the internal delays change. Similar to the modulation control on older tank reverbs</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below&nbsp;0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay&nbsp;is&nbsp;instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
    }, {
        id: "VIC_ReverbDynRoom",
        firmwareVersion: "3.15",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>A room reverb typically found in high-end studio rack reverbs.</p><ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 3.0 sec)</li><li>Predelay—Determines the amount of delay heard before the signal enters the room. Can sometimes result&nbsp;in more definition between the dry and effected signals</li><li>Damping—Determines the&nbsp;frequency above which&nbsp;the reverb will be absorbed. For example, if your room is full of people wearing foam high school mascot costumes, more high frequencies would be&nbsp;absorbed than if the room were empty</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li>MotRate—Motion Rate, or how&nbsp;quickly the room's shape may be&nbsp;changing, due to people moving, doors opening or closing, etc.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below&nbsp;0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>EarlyReflc—</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay&nbsp;is&nbsp;instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
    }, {
        id: "VIC_ReverbShimmer",
        firmwareVersion: "3.15",
        category: "Reverb",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: '<p>A shimmer reverb.</p><p>We originally planned to release Shimmer as two distinctly different reverbs—Luster and Sheen—but combining them into a single model and letting you seamlessly switch back and forth via a footswitch or snapshots seemed cooler.</p><ul><li>Type—Determines the type of shimmer effect applied. TIP: Assign Type to a footswitch (or snapshots) to try both within the same preset</li><li>"Luster"—More of a traditional, reverb pedal-type shimmer effect with tighter definition in the lustery bits</li><li>"Sheen" (default)—More of a lush, studio plugin-type shimmer effect with a massive, sheeny bloom</li><li>Pitch 1—Sets the interval of the first pitchshifter. Set to "Oct Up" for more traditional shimmer sounds; set to "Oct Down" for something a bit creepier. Note that Pitch 1 and Pitch 2 have 0.1 semitone resolution between -1and +1</li><li>Pitch 2—Sets the interval of the second pitchshifter</li><li>Intensity—Controls the mix between the pitchshifted and non-pitchshifted reverb</li><li>Feedback—Numbers of times the pitchshifting recirculates through the reverb</li><li>Pitch Blend—Controls how much of Pitch 1 is heard vs. Pitch 2 (set to "Even" by default)</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec or Infinity)</li><li>Predelay—Determines the amount of delay heard before the signal enters the room. Can sometimes result in more definition between the dry and effected signals</li><li>Room Size—Sets the size of the room (10, 20, or 30 meters)</li><li>Damping—Determines the frequency above which the reverb will be absorbed</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li>Motion—Sets the amount of randomization, which can be helpful to minimize any metallic artifacts common in static reverbs. At higher values, can impart a bit of modulation to the effected signal</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>'
    }, {
        id: "VIC_ReverbDynAmbience",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.50",
        category: "Reverb",
        subcategory: "Mono, Stereo"
    }, {
        id: "VIC_ReverbDynBloom",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: `<ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity).</li><li>Damping—Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty.</li><li>Mot Rate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature.</li><li>Rise Time—Sets how long it takes for the reverb to bloom. Choose Short, Medium (default), or Long.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied.</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Ducking—Controls how much of the reverb is dropped in volume (or "ducked") while the signal is active. Higher values drop the reverb level more while you play.</li><li>Level—Sets the overall level of the block.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
    }, {
        id: "HD2_ReverbNonLinear",
        basedOn: "Line 6 Original",
        firmwareVersion: "3.70",
        category: "Distortion",
        subcategory: "Mono, Stereo",
        synopsis: `<ul><li>Decay—Sets the decay of the reverb (1.0 ms ~ 2.000 sec). Press the knob to toggle between ms/sec and note values. <strong>TIP: When set to note values, playing a note/chord 4 beats (Decay set to "1/1") or 2 beats (Decay set to "1/2") before a song transition can cause the reverb to stop right on the downbeat.</strong></li><li>Predelay—Determines the amount of delay heard before the signal enters the reverb. Shape—Determines the shape of the reverb's decay:<ul><li>Linear—Traditional reverse reverb with an even, linear slope; abruptly stops after the decay length.</li><li>Log—Reverse reverb with a logarithmic curve so it starts low and ramps up toward the decay's end.</li><li>Inverse Log—Reverse reverb with an inverse logarithmic curve so it ramps up quickly.</li><li>Gauss—Ramps up and then down in a gaussian curve shape.</li><li>Inverse Gauss—Ramps down and then up in a gaussian curve shape.</li><li>Triangle—Ramps up and then down in a triangle shape.</li><li>Inverse Triangle—Ramps up and then down in a triangle shape.</li><li>Full—No ramp at all; the reverb is on full blast for the duration of the decay and then abruptly stops after the decay length.</li></ul></li><li>Late Dry—</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Level—Sets the overall level of the block.</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Mod—Controls the amount of modulation applied to the reverb.</li><li>Rate—Controls the rate or speed of modulation applied to the reverb.</li><li>Spread (Stereo version only)—Determines the stereo width or spread of the effected signal.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
    }, {
        id: "HD2_PitchPitchWham",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Digitech Whammy®",
        buyUrl: "https://amzn.to/3ukuoJ1",
        manualUrl: "https://jasonshimmy.com/music/effects/digitech/whammy"
    }, {
        id: "HD2_PitchTwinHarmony",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Eventide® H3000",
        manualUrl: "https://jasonshimmy.com/music/effects/eventide/h3000"
    }, {
        id: "HD2_PitchSimplePitch",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_PitchDualPitch",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_SynthSubtractive",
        category: "Pitch/Synth",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_Synth3NoteGenerator",
        category: "Pitch/Synth",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_Synth4OSCGenerator",
        category: "Pitch/Synth",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "L6SPB_PolyPitch",
        firmwareVersion: "3.00",
        category: "Pitch/Synth",
        subcategory: "Mono",
        basedOn: "Line 6 Original"
    }, {
        id: "L6SPB_PolyWham",
        firmwareVersion: "3.00",
        category: "Pitch/Synth",
        subcategory: "Mono",
        basedOn: "Line 6 Original",
        synopsis: "Automatically assigned to EXP 1 and the toe switch toggles it on and off."
    }, {
        id: "L6SPB_PolyDowntune",
        firmwareVersion: "3.00",
        category: "Pitch/Synth",
        subcategory: "Mono",
        basedOn: "Line 6 Original",
        synopsis: "A Simpler version of Poly Pitch when you just want to transpose your playing."
    }, {
        id: "L6SPB_12String",
        firmwareVersion: "3.00",
        category: "Pitch/Synth",
        subcategory: "Mono",
        basedOn: "Line 6 Original",
        synopsis: "12-string guitar emulation."
    }, {
        id: "HD2_DM4BassOctaver",
        basedOn: "Line 6 Original",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        synopsis: "Inspired by the EBS OctaBass. This effect gives you a clean octave down signal. It is very popular in bass rigs but players such as Jeff Beck have been known to bust out this effect."
    }, {
        id: "SynthLead",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>These are styled after popular analog monophonic synth lead sounds from Moog, ARP and Sequential Circuits.</p>"
    }, {
        id: "SynthString",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: '<p>This emulates classic synth string sounds like those found in the ARP Solina String Ensemble and the Elka® Synthex. The harder you pick, the brighter the sound. We somehow had two separate effects called "Synth String"—one from POD Farm 2.5 and the other from FM4, which was already added to Helix/HX in 1.50. Renamed the POD Farm version "String Theory" to avoid confusion.</p>'
    }, {
        id: "SynthFX",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `<p>These sounds aren't really designed to be musical. These are more "special effects" sounds. You'll hear a lot of these kinds of sounds in movie soundtracks.</p>`
    }, {
        id: "BuzzWave",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>These are cool combinations of saw and square waves with fast vibrato. The 8 different Wave parameters offer different vibrato speeds and different pitches.</p>"
    }, {
        id: "RezSynth",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>These are all sweeping low pass filter effects with the resonance set high. Resonance is a peak at the frequency of the low pass filter.</p>"
    }, {
        id: "Saturn5RingMod",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>Ring modulators take two signals (one supplied by your guitar, the other supplied by the effect) then adds and subtracts similar frequencies. Electro-Harmonix® makes a ring modulator pedal called the Frequency Analyzer that is a popular guitar effect. The only limiting factor is that the pitch of the signal provided by the effect is constant. Meaning you have to play only in the key of that pitch to be musical.</p>"
    }, {
        id: "DoubleBass",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>This effect has two oscillators that track the pitch of your guitar—one square wave tuned one octave down, and one saw tooth wave two octaves down.</p>"
    }, {
        id: "SeismicSynth",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: '<p>This effect has an oscillator that tracks the pitch of your guitar. You can choose between 8 different wave shapes which give you different "flavors"—all of them one or two octaves down from the original pitch.</p>'
    }, {
        id: "SynthAnalog",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>These are great for funky synth guitar (or bass) lines. These sounds were made popular by Moog and ARP.</p>"
    }, {
        id: "SynthHarmony",
        firmwareVersion: "3.15",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "<p>If you loved those big synth leads from 70's era prog bands then you'll love this effect. There are two synth waves at work here. Your first two parameters allow you to choose a pitch interval of your original note played. The Wave parameter works differently from what you'd expect with the other synth models; here it controls the gain of the saw wave, while the square wave gain remains constant.</p>"
    }, {
        id: "HD2_FM4OctiSynth",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Inspired by eight armed denizens of the deep. Everyone knows that all you need is a bottleneck and a reverb tank to get whale sounds, but how about our friend the Octopus?"
    }, {
        id: "HD2_FM4Growler",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-iii",
        synopsis: "R700 meets Mu-Tron® III. Grrrrrrrrr!"
    }, {
        id: "HD2_M13TwoVoiceHarmony",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Inspired by the Eventide® H3000. This is a diatonic harmonizer. If you ever wished you had that second guitar player for dual guitar parts, this effect is for you."
    }, {
        id: "HD2_FM4SynthOMatic",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Inspired by a collection of vintage analog synths. This model features waveforms captured from a mouth watering collection of vintage synths."
    }, {
        id: "HD2_FM4AttackSynth",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Korg® X911 Guitar Synth",
        manualUrl: "https://jasonshimmy.com/music/effects/korg/x911-guitar-synth",
        synopsis: "Modeled after one of the waveforms in the X911, along with some of the wave shaping functions that are found on the original."
    }, {
        id: "HD2_FM4SynthString",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        basedOn: "Roland® GR700 Guitar Synth",
        manualUrl: "https://jasonshimmy.com/music/effects/roland/gr700-guitar-synth",
        synopsis: "Your Filter Modeler's Synth String model is based on one of the sounds of the GR700."
    }, {
        id: "VIC_PitchBoctaver",
        basedOn: "BOSS® OC-2 Octaver",
        buyUrl: "https://amzn.to/3g6SVOY",
        manualUrl: "https://jasonshimmy.com/music/effects/boss/oc-2-octaver",
        firmwareVersion: "3.50",
        category: "Pitch/Synth",
        subcategory: "Mono, Stereo",
        synopsis: "<p>The OC-2 Octave pedal lets users fatten up their sound by adding two additional tones--one and two octaves below the original note. Each tone has a separate volume control and plays back with outstanding clarity.</p>"
    }, {
        id: "HD2_FilterMutantFilter",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Musitronics® Mu-Tron® III",
        manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-iii"
    }, {
        id: "HD2_FilterMysterFilter",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Korg® A3",
        manualUrl: "https://jasonshimmy.com/music/effects/korg/a3"
    }, {
        id: "HD2_FilterAutoFilter",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_FilterAshevillePattrn",
        firmwareVersion: "2.80",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Moog Moogerfooger Murf Filter",
        manualUrl: "https://jasonshimmy.com/music/effects/moog/moogerfooger-murf-filter"
    }, {
        id: "HD2_FM4VoiceBox",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `Inspired by Vocoders, Vocal Tracts & Surgical Tubing. This model gives your guitar a sound that's typical of a classic "talk box."`
    }, {
        id: "HD2_FM4VTron",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: 'Voice Box meets Mu-Tron® III. In this model your guitar again "speaks" with an almost human voice, but now it does so in response to your playing.'
    }, {
        id: "HD2_FM4Throbber",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Inspired by the Electrix® Filter Factory. It's perfect for cool Electronica sounds."
    }, {
        id: "HD2_FM4SpinCycle",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Inspired by Craig Anderton's Wah/Anti-Wah. This is what headphone mixes were made for! Imagine two wahs panned left and right working opposite directions from each other."
    }, {
        id: "HD2_FM4SlowFilter",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "It's Swell! This triggered filter rolls off the high end of your tone, with adjustable speed. Your choice from dark to bright (the UP mode), or bright to dark (the DOWN mode)."
    }, {
        id: "HD2_FM4CometTrails",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "After several days spent crafting the code for our digital secret sauce, we found ourselves one afternoon surrounded by 10 empty cans of Dew, and sounds from another world."
    }, {
        id: "HD2_FM4TronUp",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `Inspired by the Mu-Tron® III envelope follower in the "Up" position. Part auto-wah, part triggered filter, it's all about wacky.`
    }, {
        id: "HD2_FM4TronDown",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: 'Inspired by the Mu-Tron® III envelope follower in the "Down" position.'
    }, {
        id: "HD2_FM4ObiWah",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Based on the Oberheim® Voltage Controlled Sample and Hold filter. Voltage Controlled Filters create changes in tone by emphasizing random frequencies."
    }, {
        id: "HD2_FM4Seeker",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: 'Inspired by the Z-Vex Seek Wah. Imagine 8 "parked wah" filters set at varying positions and then sequenced through, creating a pulsating hypnotic vibe.'
    }, {
        id: "HD2_FM4QFilter",
        category: "Filter",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: `Your very own parked wah! You've heard it before from Mark Knopfler and from Brian May of Queen—it's a wah "parked" in one position.`
    }, {
        id: "HD2_WahUKWah846",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Vox® V846",
        buyUrl: "https://amzn.to/3s5z0jX",
        manualUrl: "https://jasonshimmy.com/music/effects/vox/v846"
    }, {
        id: "HD2_WahTeardrop310",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Dunlop® Crybaby® Fasel model 310",
        buyUrl: "https://amzn.to/2NIOmMk",
        manualUrl: "https://jasonshimmy.com/music/effects/dunlop/crybaby-fasel-model-310"
    }, {
        id: "HD2_WahFassel",
        synopsis: "Coveted for the mojo of it's Fasel inductor.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Dunlop® Cry Baby® Super",
        buyUrl: "https://amzn.to/2NFuV7r",
        manualUrl: "https://jasonshimmy.com/music/effects/dunlop/crybaby-super"
    }, {
        id: "HD2_WahWeeper",
        synopsis: "Another variation of the original wah with a different inductor and other component choices.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Arbiter® Cry Baby",
        manualUrl: "https://jasonshimmy.com/music/effects/arbiter/cry-baby"
    }, {
        id: "HD2_WahChrome",
        synopsis: "A successor to the original Clyde McCoy wah. Clyde is a trumpet player but guitarists everywhere thank him for suggesting Vox® create this effect.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Vox® V847",
        buyUrl: "https://amzn.to/3k3R6jv",
        manualUrl: "https://jasonshimmy.com/music/effects/vox/v847"
    }, {
        id: "HD2_WahChromeCustom",
        synopsis: "Based on a modded Vox® V847 that has the gain staging on the first transistor stage tweaked, and aftermarket inductor, the Q widened, and replaced with a 470k pot.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Modded Vox® V847",
        buyUrl: "https://amzn.to/3k3R6jv",
        manualUrl: "https://jasonshimmy.com/music/effects/vox/v847"
    }, {
        id: "HD2_WahThroaty",
        synopsis: "Geoffrey Teese meticulously crafts the clones of the original and rare Vox® Clyd McCoy “Picture” wah.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "RMC Real McCoy 1",
        manualUrl: "https://jasonshimmy.com/music/effects/rmc/real-mccoy-1"
    }, {
        id: "HD2_WahVettaWah",
        synopsis: "Taken from Line 6's guitar amplifier - Vetta II. This is our sound designers' take on a classic effect.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_WahColorful",
        synopsis: "We only modeled the wah section of course. This pedal is different in that it was an inductor-less design. It uses a different circuit to get its frequency resonance.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Colorsound® Wah-fuzz",
        manualUrl: "https://jasonshimmy.com/music/effects/colorsound/wah-fuzz"
    }, {
        id: "HD2_WahConductor",
        synopsis: "According to original advertising material, this was not a 'wah-wah' pedal but a 'wow-wow' pedal. Po-tay-to or Po-tah-to?",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Maestro® Boomerang",
        manualUrl: "https://jasonshimmy.com/music/effects/maestro/boomerang"
    }, {
        id: "HD2_WahTeardropBassQ",
        firmwareVersion: "3.80",
        synopsis: "The Dunlop 105Q Cry Baby bass wah pedal is a specialized effect that enhances bass guitar tone without compromising low-end power. It focuses on midrange and high frequencies, allowing expressive wah effects while maintaining a thick sound. The pedal features a Q control for adjusting the wah effect's focus, custom circuitry optimized for bass, and auto-return switching for ease of use. This design offers bassists new creative possibilities while preserving their fundamental tone.",
        notableUsers: "The Dunlop 105Q Cry Baby bass wah is favored by renowned bassists such as Flea, Doug Wimbish, and Robert Trujillo.",
        category: "Wah",
        subcategory: "Mono, Stereo",
        basedOn: "Dunlop 105Q",
        manualUrl: "https://jasonshimmy.com/music/effects/dunlop/105q",
        buyUrl: "https://amzn.to/3y04BfR"
    }, {
        id: "HD2_VolPanVol",
        category: "Volume/Pan",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_VolPanGain",
        category: "Volume/Pan",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_VolPanPan",
        category: "Volume/Pan",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "HD2_VolPanStereoWidth",
        category: "Volume/Pan",
        subcategory: "Stereo",
        basedOn: "Line 6 Original (utility to collapse stereo paths)"
    }, {
        id: "HD2_VolPanStereoImager",
        firmwareVersion: "3.00",
        category: "Volume/Pan",
        subcategory: "Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Used to increase the apparent stereo width of your signal when connecting Helix to two amps or a stereo playback system; just make sure there aren't any mono blocks after it!"
    }, {
        id: "HD2_LooperOneSwitch",
        category: "Looper",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: '<p><strong>Using the 1 Switch Looper:</strong></p><ul><li>Add a Looper &gt; 1 Switch Looper block to your preset and assign it to a stomp footswitch. (Adding a 1 Switch Looper to HX Effects from Stomp view automatically assigns it to the selected footswitch.)</li><li>Press the 1 Switch Looper switch. The LED lights red, indicating the loop is recording.</li><li>Press the 1 Switch Looper switch again. The LED lights green, indicating the loop is playing back.</li><li>Press the 1 Switch Looper switch again. The LED lights amber, indicating the loop is in overdub mode. Subsequent presses of the switch toggle between play and overdub mode.</li><li>While the 1 Switch Looper is in play or overdub mode, press and hold the switch for 1 second. The most recent recording is undone. Holding the switch again will redo the recording. On Helix, Helix Rack/Control, and HX Effects, "UNDO" or "REDO" briefly appears on the scribble strip. On Helix LT, "UNDO" or "REDO" briefly appears in Performance view.</li><li>Quickly double-press the 1 Switch Looper switch. Playback/recording stops and the LED lights white, indicating a loop is in memory.</li><li>While Looper playback/recording is stopped, press and hold the switch. The recording is deleted and the LED lights dim white.</li></ul>'
    }, {
        id: "HD2_Looper",
        category: "Looper",
        subcategory: "Stereo",
        basedOn: "Line 6 Original"
    }, {
        id: "ShufflingLooper",
        firmwareVersion: "3.00",
        category: "Looper",
        subcategory: "Mono, Stereo",
        basedOn: "Line 6 Original",
        synopsis: "Part looper, part sampler, part inspiration generator, part performance instrument, the Shuffling Looper intelligently chops up your playing and gives you real-time control over reordering, octave shifting, reversing, and repeating. It's all immense fun (even on vocals, drums, and percussion), but you'll want to familiarize yourself with its controls."
    }, {
        id: "HD2_AppDSPFlowSplitDyn",
        firmwareVersion: "2.90",
        category: "Split",
        basedOn: "Line 6 Original",
        synopsis: "This split block type lets you dynamically route signals to Path B, depending on how hard you play. For example, you could roll your guitar's volume back a bit and play clean chords through a Grammatico on Path A and then roll it back up and dig in to blend in a searing Revv Gen Purple lead on Path B"
    }]
    , Yy = [{
        id: "57 Dynamic",
        basedOn: "Shure® SM57",
        buyUrl: "https://amzn.to/3ueZ9yH",
        manualUrl: "https://cdn.shure.com/user_guide/upload/1554/us_pro_sm57_ug.pdf"
    }, {
        id: "409 Dynamic",
        basedOn: "Sennheiser® MD 409",
        manualUrl: "https://www.manualslib.com/manual/345640/Sennheiser-Md-409-U-3.html"
    }, {
        id: "421 Dynamic",
        basedOn: "Sennheiser® MD 421-U",
        buyUrl: "https://amzn.to/3pF5r7y",
        manualUrl: "https://www.coutant.org/md421u4/"
    }, {
        id: "30 Dynamic",
        basedOn: "Heil Sound® PR 30",
        buyUrl: "https://amzn.to/2Zub5yt",
        manualUrl: "https://recordinghacks.com/microphones/Heil-Sound/PR-30"
    }, {
        id: "20 Dynamic",
        basedOn: "Electro-Voice® RE20",
        buyUrl: "https://amzn.to/3qLpwdm",
        manualUrl: "https://www.electrovoice.com/product.php?id=91"
    }, {
        id: "121 Ribbon",
        basedOn: "Royer® R-121",
        buyUrl: "https://amzn.to/3scazBH",
        manualUrl: "https://www.royerlabs.com/R-121.html"
    }, {
        id: "160 Ribbon",
        basedOn: "Beyerdynamic® M 160",
        buyUrl: "https://amzn.to/3dsgw9w",
        manualUrl: "https://north-america.beyerdynamic.com/shop/media/datenblaetter/DAT_M160_EN_A2.pdf"
    }, {
        id: "4038 Ribbon",
        basedOn: "Coles 4038",
        manualUrl: "https://www.sounddevices.dk/Sider/Produkter/Brochure_manual/Coles/Coles_4038_man.pdf"
    }, {
        id: "414 Cond",
        basedOn: "AKG® C414 TLII",
        buyUrl: "https://amzn.to/2NzpQNP",
        manualUrl: "https://cloud.akg.com/7744/c414xls_xlii_manual.pdf"
    }, {
        id: "84 Cond",
        basedOn: "Neumann® KM84",
        manualUrl: "https://www.manualslib.com/products/Neumann-Km-84-1953498.html"
    }, {
        id: "67 Cond",
        basedOn: "Neumann® U67",
        buyUrl: "https://amzn.to/3dpLbEa",
        manualUrl: "https://www.neumann.com/?lang=en&id=hist_microphones&cid=u67_publications"
    }, {
        id: "87 Cond",
        basedOn: "Neumann® U87",
        buyUrl: "https://amzn.to/37uT0oy",
        manualUrl: "https://www.americanmusical.com/ItemFiles/Manual/NEM_U87AI_manual.pdf"
    }, {
        id: "47 Cond",
        basedOn: "Neumann® U47",
        buyUrl: "https://amzn.to/3pu3H0x",
        manualUrl: "https://www.neumann.com/?lang=en&id=hist_microphones&cid=u47_publications"
    }, {
        id: "112 Dynamic",
        basedOn: "AKG® D112",
        buyUrl: "https://amzn.to/2ZtNduT",
        manualUrl: "https://cloud.akg.com/10968/d112mkii_qsg.pdf"
    }, {
        id: "12 Dynamic",
        basedOn: "AKG® D12",
        buyUrl: "https://amzn.to/3pxu1qN",
        manualUrl: "https://cloud.akg.com/8294/d12vr_manual.pdf"
    }, {
        id: "7 Dynamic",
        basedOn: "Shure® SM7",
        buyUrl: "https://amzn.to/3qzcGih",
        manualUrl: "https://cdn.shure.com/user_guide/upload/1565/us_pro_sm7_ug.pdf"
    }]
    , Zy = Ne(() => ({
        provide: {
            modelCatalog: ye(() => $y),
            additionalData: ye(() => [...Ky, ...Jy, ...Qy, ...Yy])
        }
    }));
var st = (e => (e.LOADING = "loading",
    e.LOADED = "loaded",
    e.ERROR = "error",
    e))(st || {});
const e_ = typeof window < "u" && window !== null
    , t_ = i_()
    , n_ = Object.prototype.propertyIsEnumerable
    , Io = Object.getOwnPropertySymbols;
function $n(e) {
    return typeof e == "function" || toString.call(e) === "[object Object]"
}
function l_(e) {
    return typeof e == "object" ? e === null : typeof e != "function"
}
function a_(e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype"
}
function i_() {
    return e_ && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get() {
            return this.intersectionRatio > 0
        }
    }),
        !0) : !1
}
function r_(e, ...t) {
    if (!$n(e))
        throw new TypeError("expected the first argument to be an object");
    if (t.length === 0 || typeof Symbol != "function" || typeof Io != "function")
        return e;
    for (const n of t) {
        const l = Io(n);
        for (const a of l)
            n_.call(n, a) && (e[a] = n[a])
    }
    return e
}
function ac(e, ...t) {
    let n = 0;
    for (l_(e) && (e = t[n++]),
        e || (e = {}); n < t.length; n++)
        if ($n(t[n])) {
            for (const l of Object.keys(t[n]))
                a_(l) && ($n(e[l]) && $n(t[n][l]) ? ac(e[l], t[n][l]) : e[l] = t[n][l]);
            r_(e, t[n])
        }
    return e
}
const Xo = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    , o_ = ""
    , s_ = {
        rootMargin: "0px",
        threshold: 0
    }
    , on = "data-lazy-timeout-id";
class u_ {
    constructor(t) {
        this.options = {
            loading: Xo,
            error: o_,
            observerOptions: s_,
            log: !0,
            lifecycle: {},
            logLevel: "error"
        },
            this._images = new WeakMap,
            this.config(t)
    }
    config(t = {}) {
        ac(this.options, t)
    }
    mount(t, n) {
        if (!t)
            return;
        const { src: l, loading: a, error: i, lifecycle: r, delay: o } = this._valueFormatter(typeof n == "string" ? n : n.value);
        this._lifecycle(st.LOADING, r, t),
            t.setAttribute("src", a || Xo),
            t_ || (this.loadImages(t, l, i, r),
                this._log(() => {
                    this._logger("Not support IntersectionObserver!")
                }
                )),
            this._initIntersectionObserver(t, l, i, r, o)
    }
    update(t, n) {
        var o;
        if (!t)
            return;
        (o = this._realObserver(t)) == null || o.unobserve(t);
        const { src: l, error: a, lifecycle: i, delay: r } = this._valueFormatter(typeof n == "string" ? n : n.value);
        this._initIntersectionObserver(t, l, a, i, r)
    }
    unmount(t) {
        var n;
        t && ((n = this._realObserver(t)) == null || n.unobserve(t),
            this._images.delete(t))
    }
    loadImages(t, n, l, a) {
        this._setImageSrc(t, n, l, a)
    }
    _setImageSrc(t, n, l, a) {
        t.tagName.toLowerCase() === "img" ? (n && t.getAttribute("src") !== n && t.setAttribute("src", n),
            this._listenImageStatus(t, () => {
                this._lifecycle(st.LOADED, a, t)
            }
                , () => {
                    var i;
                    t.onload = null,
                        this._lifecycle(st.ERROR, a, t),
                        (i = this._realObserver(t)) == null || i.disconnect(),
                        l && t.getAttribute("src") !== l && t.setAttribute("src", l),
                        this._log(() => {
                            this._logger(`Image failed to load!And failed src was: ${n} `)
                        }
                        )
                }
            )) : t.style.backgroundImage = `url('${n}')`
    }
    _initIntersectionObserver(t, n, l, a, i) {
        var o;
        const r = this.options.observerOptions;
        this._images.set(t, new IntersectionObserver(s => {
            Array.prototype.forEach.call(s, c => {
                i && i > 0 ? this._delayedIntersectionCallback(t, c, i, n, l, a) : this._intersectionCallback(t, c, n, l, a)
            }
            )
        }
            , r)),
            (o = this._realObserver(t)) == null || o.observe(t)
    }
    _intersectionCallback(t, n, l, a, i) {
        var r;
        n.isIntersecting && ((r = this._realObserver(t)) == null || r.unobserve(n.target),
            this._setImageSrc(t, l, a, i))
    }
    _delayedIntersectionCallback(t, n, l, a, i, r) {
        if (n.isIntersecting) {
            if (n.target.hasAttribute(on))
                return;
            const o = setTimeout(() => {
                this._intersectionCallback(t, n, a, i, r),
                    n.target.removeAttribute(on)
            }
                , l);
            n.target.setAttribute(on, String(o))
        } else
            n.target.hasAttribute(on) && (clearTimeout(Number(n.target.getAttribute(on))),
                n.target.removeAttribute(on))
    }
    _listenImageStatus(t, n, l) {
        t.onload = n,
            t.onerror = l
    }
    _valueFormatter(t) {
        let n = t
            , l = this.options.loading
            , a = this.options.error
            , i = this.options.lifecycle
            , r = this.options.delay;
        return $n(t) && (n = t.src,
            l = t.loading || this.options.loading,
            a = t.error || this.options.error,
            i = t.lifecycle || this.options.lifecycle,
            r = t.delay || this.options.delay),
        {
            src: n,
            loading: l,
            error: a,
            lifecycle: i,
            delay: r
        }
    }
    _log(t) {
        this.options.log && t()
    }
    _lifecycle(t, n, l) {
        switch (t) {
            case st.LOADING:
                l == null || l.setAttribute("lazy", st.LOADING),
                    n != null && n.loading && n.loading(l);
                break;
            case st.LOADED:
                l == null || l.setAttribute("lazy", st.LOADED),
                    n != null && n.loaded && n.loaded(l);
                break;
            case st.ERROR:
                l == null || l.setAttribute("lazy", st.ERROR),
                    n != null && n.error && n.error(l);
                break
        }
    }
    _realObserver(t) {
        return this._images.get(t)
    }
    _logger(t, ...n) {
        let l = console.error;
        switch (this.options.logLevel) {
            case "error":
                l = console.error;
                break;
            case "warn":
                l = console.warn;
                break;
            case "info":
                l = console.info;
                break;
            case "debug":
                l = console.debug;
                break
        }
        l(t, n)
    }
}
const c_ = {
    install(e, t) {
        const n = new u_(t);
        e.config.globalProperties.$Lazyload = n,
            e.provide("Lazyload", n),
            e.directive("lazy", {
                mounted: n.mount.bind(n),
                updated: n.update.bind(n),
                unmounted: n.unmount.bind(n)
            })
    }
}
    , h_ = Ne(e => {
        e.vueApp.use(c_, {})
    }
    )
    , d_ = [hg, fg, Xf, cy, hy, dy, my, py, Ny, zy, Wy, jy, Zy, h_]
    , Hi = Symbol("head-component")
    , or = {
        body: {
            type: Boolean,
            default: void 0
        },
        tagPosition: {
            type: String
        }
    }
    , dl = e => {
        const t = Object.fromEntries(Object.entries(e).filter(([n, l]) => l !== void 0));
        return typeof t.body < "u" && (t.tagPosition = t.body ? "bodyClose" : "head"),
            typeof t.renderPriority < "u" && (t.tagPriority = t.renderPriority),
            t
    }
    ;
function Pn() {
    return we(Hi, m_, !0)
}
function m_() {
    const e = we(Hi, null);
    if (e)
        return e;
    const t = St({})
        , n = er(t)
        , l = {
            input: t,
            entry: n
        };
    return Ft(Hi, l),
        l
}
const Ln = {
    accesskey: String,
    autocapitalize: String,
    autofocus: {
        type: Boolean,
        default: void 0
    },
    class: {
        type: [String, Object, Array],
        default: void 0
    },
    contenteditable: {
        type: Boolean,
        default: void 0
    },
    contextmenu: String,
    dir: String,
    draggable: {
        type: Boolean,
        default: void 0
    },
    enterkeyhint: String,
    exportparts: String,
    hidden: {
        type: Boolean,
        default: void 0
    },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: {
        type: Boolean,
        default: void 0
    },
    style: {
        type: [String, Object, Array],
        default: void 0
    },
    tabindex: String,
    title: String,
    translate: String,
    renderPriority: [String, Number],
    tagPriority: {
        type: [String, Number]
    }
};
({
    ...Ln,
    ...or
});
({
    ...Ln,
    ...or
});
({
    ...Ln
});
const G_ = Pe({
    name: "Meta",
    inheritAttrs: !1,
    props: {
        ...Ln,
        charset: String,
        content: String,
        httpEquiv: String,
        name: String,
        property: String
    },
    setup(e) {
        const { input: t } = Pn();
        t.meta || (t.meta = []);
        const n = t.meta.push({}) - 1;
        return Gt(() => t.meta[n] = null),
            () => {
                const l = {
                    "http-equiv": e.httpEquiv,
                    ...dl(e)
                };
                return "httpEquiv" in l && delete l.httpEquiv,
                    t.meta[n] = l,
                    null
            }
    }
});
({
    ...Ln,
    ...or
});
const p_ = Pe({
    name: "Html",
    inheritAttrs: !1,
    props: {
        ...Ln,
        manifest: String,
        version: String,
        xmlns: String
    },
    setup(e, t) {
        const { input: n } = Pn();
        return Gt(() => n.htmlAttrs = null),
            () => {
                var l, a;
                return n.htmlAttrs = {
                    ...e
                },
                    (a = (l = t.slots).default) == null ? void 0 : a.call(l)
            }
    }
})
    , ic = (e = "RouteProvider") => Pe({
        name: e,
        props: {
            vnode: {
                type: Object,
                required: !0
            },
            route: {
                type: Object,
                required: !0
            },
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(t) {
            const n = t.renderKey
                , l = t.route
                , a = {};
            for (const i in t.route)
                Object.defineProperty(a, i, {
                    get: () => n === t.renderKey ? t.route[i] : l[i],
                    enumerable: !0
                });
            return Ft(hl, bt(a)),
                () => He(t.vnode, {
                    ref: t.vnodeRef
                })
        }
    })
    , g_ = ic()
    , f_ = Pe({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, { attrs: t, slots: n, expose: l }) {
            const a = ge()
                , i = Xe()
                , r = we(hl, null);
            let o;
            l({
                pageRef: i
            });
            const s = we(Pu, null);
            let c;
            const u = a.deferHydration();
            if (a.isHydrating) {
                const d = a.hooks.hookOnce("app:error", u);
                Fe().beforeEach(d)
            }
            e.pageKey && Vt(() => e.pageKey, (d, _) => {
                d !== _ && a.callHook("page:loading:start")
            }
            );
            let h = !1;
            const m = new WeakMap;
            return () => He(ec, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: d => {
                    const _ = __(r, d.route, d.Component)
                        , y = r && r.matched.length === d.route.matched.length;
                    if (!d.Component) {
                        if (c && !y)
                            return c;
                        u();
                        return
                    }
                    if (c && s && !s.isCurrent(d.route))
                        return c;
                    if (_ && r && (!s || s != null && s.isCurrent(r)))
                        return y ? c : null;
                    const C = Si(d, e.pageKey);
                    !a.isHydrating && !b_(r, d.route, d.Component) && o === C && (a.callHook("page:loading:end"),
                        h = !0),
                        o = C;
                    const S = !!(e.transition ?? d.route.meta.pageTransition ?? ui)
                        , v = S && y_([e.transition, d.route.meta.pageTransition, ui, {
                            onAfterLeave: () => {
                                a.callHook("page:transition:finish", d.Component)
                            }
                        }].filter(Boolean))
                        , g = e.keepalive ?? d.route.meta.keepalive ?? Qm;
                    return c = tc(S && v, wf(g, He(Gi, {
                        suspensible: !0,
                        onPending: () => a.callHook("page:start", d.Component),
                        onResolve: () => {
                            zt(() => a.callHook("page:finish", d.Component).then(() => {
                                if (!h)
                                    return a.callHook("page:loading:end");
                                h = !1
                            }
                            ).finally(u))
                        }
                    }, {
                        default: () => {
                            const b = {
                                key: C || void 0,
                                vnode: n.default ? D_(n.default, d) : d.Component,
                                route: d.route,
                                renderKey: C || void 0,
                                trackRootNodes: S,
                                vnodeRef: i
                            };
                            if (!g)
                                return He(g_, b);
                            const D = d.Component.type;
                            let w = m.get(D);
                            return w || (w = ic(D.name || D.__name),
                                m.set(D, w)),
                                He(w, b)
                        }
                    }))).default(),
                        c
                }
            })
        }
    });
function y_(e) {
    const t = e.map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? rr(n.onAfterLeave) : void 0
    }));
    return Mu(...t)
}
function __(e, t, n) {
    if (!e)
        return !1;
    const l = t.matched.findIndex(a => {
        var i;
        return ((i = a.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    );
    return !l || l === -1 ? !1 : t.matched.slice(0, l).some((a, i) => {
        var r, o, s;
        return ((r = a.components) == null ? void 0 : r.default) !== ((s = (o = e.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    ) || n && Si({
        route: t,
        Component: n
    }) !== Si({
        route: e,
        Component: n
    })
}
function b_(e, t, n) {
    return e ? t.matched.findIndex(a => {
        var i;
        return ((i = a.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
function D_(e, t) {
    const n = e(t);
    return n.length === 1 ? He(n[0]) : He(Re, void 0, n)
}
const v_ = Pe({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    setup(e, t) {
        return () => He(xt[e.name], e.layoutProps, t.slots)
    }
})
    , S_ = {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    }
    , C_ = Pe({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: S_,
        setup(e, t) {
            const n = ge()
                , l = we(hl)
                , a = l === Qi() ? Df() : l
                , i = ye(() => {
                    let s = _e(e.name) ?? a.meta.layout ?? "default";
                    return s && !(s in xt) && e.fallback && (s = _e(e.fallback)),
                        s
                }
                )
                , r = Xe();
            t.expose({
                layoutRef: r
            });
            const o = n.deferHydration();
            if (n.isHydrating) {
                const s = n.hooks.hookOnce("app:error", o);
                Fe().beforeEach(s)
            }
            return () => {
                const s = i.value && i.value in xt
                    , c = a.meta.layoutTransition ?? Jm;
                return tc(s && c, {
                    default: () => He(Gi, {
                        suspensible: !0,
                        onResolve: () => {
                            zt(o)
                        }
                    }, {
                        default: () => He(H_, {
                            layoutProps: lu(t.attrs, {
                                ref: r
                            }),
                            key: i.value || void 0,
                            name: i.value,
                            shouldProvide: !e.name,
                            hasTransition: !!c
                        }, t.slots)
                    })
                }).default()
            }
        }
    })
    , H_ = Pe({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(e, t) {
            const n = e.name;
            return e.shouldProvide && Ft(Pu, {
                isCurrent: l => n === (l.meta.layout ?? "default")
            }),
                () => {
                    var l, a;
                    return !n || typeof n == "string" && !(n in xt) ? (a = (l = t.slots).default) == null ? void 0 : a.call(l) : He(v_, {
                        key: n,
                        layoutProps: e.layoutProps,
                        name: n
                    }, t.slots)
                }
        }
    })
    , w_ = Pe({
        __name: "app",
        setup(e) {
            return er({
                bodyAttrs: {
                    class: "bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50"
                },
                titleTemplate: t => `${t} | Helix Help`
            }),
                (t, n) => {
                    const l = p_
                        , a = f_
                        , i = C_;
                    return Ke(),
                        Ui("div", null, [de(l, {
                            lang: "en",
                            class: ta(`${t.$colorMode.value}`)
                        }, null, 8, ["class"]), de(i, null, {
                            default: ra(() => [de(a)]),
                            _: 1
                        })])
                }
        }
    })
    , M_ = Pe({
        __name: "error",
        props: {
            error: Object
        },
        setup(e) {
            return console.error(e.error),
                (n, l) => {
                    var i;
                    const a = ay;
                    return Ke(),
                        Ui("div", null, [Wi("h1", null, Ko((i = e.error) == null ? void 0 : i.statusCode), 1), de(a, {
                            to: "/"
                        }, {
                            default: ra(() => l[0] || (l[0] = [ji("Go back home")])),
                            _: 1
                        })])
                }
        }
    })
    , T_ = {
        key: 0
    }
    , No = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null
                , n = ge()
                , l = n.deferHydration();
            if (n.isHydrating) {
                const s = n.hooks.hookOnce("app:error", l);
                Fe().beforeEach(s)
            }
            const a = !1;
            Ft(hl, Qi()),
                n.hooks.callHookWith(s => s.map(c => c()), "vue:setup");
            const i = ga()
                , r = !1;
            As((s, c, u) => {
                if (n.hooks.callHook("vue:error", s, c, u).catch(h => console.error("[nuxt] Error in `vue:error` hook", h)),
                    fp(s) && (s.fatal || s.unhandled))
                    return n.runWithContext(() => hn(s)),
                        !1
            }
            );
            const o = !1;
            return (s, c) => (Ke(),
                Rt(Gi, {
                    onResolve: _e(l)
                }, {
                    default: ra(() => [_e(r) ? (Ke(),
                        Ui("div", T_)) : _e(i) ? (Ke(),
                            Rt(_e(M_), {
                                key: 1,
                                error: _e(i)
                            }, null, 8, ["error"])) : _e(o) ? (Ke(),
                                Rt(_e(t), {
                                    key: 2,
                                    context: _e(o)
                                }, null, 8, ["context"])) : _e(a) ? (Ke(),
                                    Rt(vh(_e(a)), {
                                        key: 3
                                    })) : (Ke(),
                                        Rt(_e(w_), {
                                            key: 4
                                        }))]),
                    _: 1
                }, 8, ["onResolve"]))
        }
    };
let zo;
{
    let e;
    zo = async function () {
        var r, o;
        if (e)
            return e;
        const l = !!(((r = window.__NUXT__) == null ? void 0 : r.serverRendered) ?? ((o = document.getElementById("__NUXT_DATA__")) == null ? void 0 : o.dataset.ssr) === "true") ? Ud(No) : Gd(No)
            , a = lp({
                vueApp: l
            });
        async function i(s) {
            var c;
            await a.callHook("app:error", s),
                (c = a.payload).error || (c.error = fa(s))
        }
        l.config.errorHandler = i,
            a.hook("app:suspense:resolve", () => {
                l.config.errorHandler === i && (l.config.errorHandler = void 0)
            }
            );
        try {
            await rp(a, d_)
        } catch (s) {
            i(s)
        }
        try {
            await a.hooks.callHook("app:created", l),
                await a.hooks.callHook("app:beforeMount", l),
                l.mount(ep),
                await a.hooks.callHook("app:mounted", l),
                await zt()
        } catch (s) {
            i(s)
        }
        return l
    }
        ,
        e = zo().catch(t => {
            throw console.error("Error while mounting app:", t),
            t
        }
        )
}
export { ty as $, He as A, te as B, St as C, Vt as D, cl as E, Re as F, Dr as G, me as H, ve as I, nl as J, oe as K, Tn as L, ta as M, x_ as N, N_ as O, G_ as P, vh as Q, Kr as R, Ul as S, Zt as T, pa as U, qc as V, ul as W, I_ as X, E_ as Y, k_ as Z, ay as _, Wi as a, ps as a0, _u as a1, _d as a2, hl as a3, Uy as a4, Gy as a5, Wl as a6, Na as a7, Qf as a8, vt as a9, z_ as aa, Pi as ab, Ft as ac, X_ as ad, Qn as ae, fs as af, gh as ag, za as ah, la as ai, fa as aj, ma as ak, Cu as al, B_ as am, ld as an, de as b, Ui as c, Pe as d, ji as e, O_ as f, Rt as g, _e as h, A_ as i, ge as j, ye as k, pp as l, L_ as m, zt as n, Ke as o, be as p, F_ as q, Xe as r, Qi as s, Ko as t, er as u, V_ as v, ra as w, sa as x, Gt as y, R_ as z };
