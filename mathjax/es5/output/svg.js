! function (r) {
    var o = {};

    function i(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return r[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports
    }
    i.m = r, i.c = o, i.d = function (t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 107)
}([function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        b = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        g = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(19),
        a = r(9),
        l = (n = s.CommonWrapper, i(f, n), f.prototype.toSVG = function (t) {
            this.addChildren(this.standardSVGnode(t))
        }, f.prototype.addChildren = function (t) {
            var e, r, o = 0;
            try {
                for (var i = b(this.childNodes), n = i.next(); !n.done; n = i.next()) {
                    var s = n.value;
                    s.toSVG(t), s.element && s.place(o + s.bbox.L * s.bbox.rscale, 0), o += (s.bbox.L + s.bbox.w + s.bbox.R) * s.bbox.rscale
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
        }, f.prototype.standardSVGnode = function (t) {
            var e = this.createSVGnode(t);
            return this.handleStyles(), this.handleScale(), this.handleColor(), this.handleAttributes(), e
        }, f.prototype.createSVGnode = function (t) {
            var e = this.node.attributes.get("href");
            if (e) {
                t = this.adaptor.append(t, this.svg("a", {
                    href: e
                }));
                var r = this.getBBox(),
                    o = r.h,
                    i = r.d,
                    n = r.w;
                this.adaptor.append(t, this.svg("rect", {
                    "data-hitbox": !0,
                    fill: "none",
                    stroke: "none",
                    "pointer-events": "all",
                    width: this.fixed(n),
                    height: this.fixed(o + i),
                    y: this.fixed(-i)
                }))
            }
            return this.element = this.adaptor.append(t, this.svg("g", {
                "data-mml-node": this.node.kind
            })), this.element
        }, f.prototype.handleStyles = function () {
            if (this.styles) {
                var t = this.styles.cssText;
                t && this.adaptor.setAttribute(this.element, "style", t)
            }
        }, f.prototype.handleScale = function () {
            if (1 !== this.bbox.rscale) {
                var t = "scale(" + this.fixed(this.bbox.rscale / 1e3, 3) + ")";
                this.adaptor.setAttribute(this.element, "transform", t)
            }
        }, f.prototype.handleColor = function () {
            var t = this.adaptor,
                e = this.node.attributes,
                r = e.getExplicit("mathcolor"),
                o = e.getExplicit("color"),
                i = e.getExplicit("mathbackground"),
                n = e.getExplicit("background");
            if ((r || o) && (t.setAttribute(this.element, "fill", r || o), t.setAttribute(this.element, "stroke", r || o)), i || n) {
                var s = this.getBBox(),
                    a = s.h,
                    l = s.d,
                    h = s.w,
                    c = this.svg("rect", {
                        fill: i || n,
                        x: 0,
                        y: this.fixed(-l),
                        width: this.fixed(h),
                        height: this.fixed(a + l),
                        "data-bgcolor": !0
                    }),
                    u = t.firstChild(this.element);
                u ? t.insert(c, u) : t.append(this.element, c)
            }
        }, f.prototype.handleAttributes = function () {
            var e, t, r, o, i = this.node.attributes,
                n = i.getAllDefaults(),
                s = f.skipAttributes;
            try {
                for (var a = b(i.getExplicitNames()), l = a.next(); !l.done; l = a.next()) {
                    var h = l.value;
                    !1 !== s[h] && (h in n || s[h] || this.adaptor.hasAttribute(this.element, h)) || this.adaptor.setAttribute(this.element, h, i.getExplicit(h))
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (t = a.return) && t.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
            if (i.get("class")) {
                var c = i.get("class").trim().split(/ +/);
                try {
                    for (var u = b(c), p = u.next(); !p.done; p = u.next()) {
                        var d = p.value;
                        this.adaptor.addClass(this.element, d)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        p && !p.done && (o = u.return) && o.call(u)
                    } finally {
                        if (r) throw r.error
                    }
                }
            }
        }, f.prototype.place = function (t, e, r) {
            if (void 0 === r && (r = null), t || e) {
                r = r || this.element;
                var o = this.adaptor.getAttribute(r, "transform") || "";
                o = "translate(" + this.fixed(t) + ", " + this.fixed(e) + ")" + (o ? " " + o : ""), this.adaptor.setAttribute(r, "transform", o)
            }
        }, f.prototype.placeChar = function (t, e, r, o, i) {
            var n, s;
            void 0 === i && (i = null), null === i && (i = this.variant);
            var a = t.toString(16).toUpperCase(),
                l = g(this.getVariantChar(i, t), 4),
                h = (l[0], l[1], l[2]),
                c = l[3];
            if ("p" in c) {
                var u = c.p ? "M" + c.p + "Z" : "";
                this.place(e, r, this.adaptor.append(o, this.charNode(i, a, u)))
            } else if ("c" in c) {
                var p = this.adaptor.append(o, this.svg("g", {
                    "data-c": a
                }));
                this.place(e, r, p), e = 0;
                try {
                    for (var d = b(this.unicodeChars(c.c)), f = d.next(); !f.done; f = d.next()) {
                        var y = f.value;
                        e += this.placeChar(y, e, r, p, i)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (s = d.return) && s.call(d)
                    } finally {
                        if (n) throw n.error
                    }
                }
            } else if (c.unknown) {
                var m = String.fromCodePoint(t),
                    v = this.adaptor.append(o, this.jax.unknownText(m, i));
                return this.place(e, r, v), this.jax.measureTextNodeWithCache(v, m, i).w
            }
            return h
        }, f.prototype.charNode = function (t, e, r) {
            return "none" !== this.jax.options.fontCache ? this.useNode(t, e, r) : this.pathNode(e, r)
        }, f.prototype.pathNode = function (t, e) {
            return this.svg("path", {
                "data-c": t,
                d: e
            })
        }, f.prototype.useNode = function (t, e, r) {
            var o = this.svg("use"),
                i = "#" + this.jax.fontCache.cachePath(t, e, r);
            return this.adaptor.setAttribute(o, "href", i, a.XLINKNS), o
        }, f.prototype.drawBBox = function () {
            var t = this.getBBox(),
                e = t.w,
                r = t.h,
                o = t.d,
                i = this.svg("g", {
                    style: {
                        opacity: .25
                    }
                }, [this.svg("rect", {
                    fill: "red",
                    height: this.fixed(r),
                    width: this.fixed(e)
                }), this.svg("rect", {
                    fill: "green",
                    height: this.fixed(o),
                    width: this.fixed(e),
                    y: this.fixed(-o)
                })]),
                n = this.element || this.parent.element;
            this.adaptor.append(n, i)
        }, f.prototype.html = function (t, e, r) {
            return void 0 === e && (e = {}), void 0 === r && (r = []), this.jax.html(t, e, r)
        }, f.prototype.svg = function (t, e, r) {
            return void 0 === e && (e = {}), void 0 === r && (r = []), this.jax.svg(t, e, r)
        }, f.prototype.text = function (t) {
            return this.jax.text(t)
        }, f.prototype.createMo = function (t) {
            return n.prototype.createMo.call(this, t)
        }, f.prototype.coreMO = function () {
            return n.prototype.coreMO.call(this)
        }, f.prototype.fixed = function (t, e) {
            return void 0 === e && (e = 1), this.jax.fixed(1e3 * t, e)
        }, f.kind = "unknown", f);

    function f() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.element = null, t
    }
    e.SVGWrapper = l
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(10);
    e.BBoxStyleAdjust = [
        ["borderTopWidth", "h"],
        ["borderRightWidth", "w"],
        ["borderBottomWidth", "d"],
        ["borderLeftWidth", "w", 0],
        ["paddingTop", "h"],
        ["paddingRight", "w"],
        ["paddingBottom", "d"],
        ["paddingLeft", "w", 0]
    ];
    var i = (n.zero = function () {
        return new n({
            h: 0,
            d: 0,
            w: 0
        })
    }, n.empty = function () {
        return new n
    }, n.prototype.empty = function () {
        return this.w = 0, this.h = this.d = -o.BIGDIMEN, this
    }, n.prototype.clean = function () {
        this.w === -o.BIGDIMEN && (this.w = 0), this.h === -o.BIGDIMEN && (this.h = 0), this.d === -o.BIGDIMEN && (this.d = 0)
    }, n.prototype.rescale = function (t) {
        this.w *= t, this.h *= t, this.d *= t
    }, n.prototype.combine = function (t, e, r) {
        void 0 === e && (e = 0), void 0 === r && (r = 0);
        var o = t.rscale,
            i = e + o * (t.w + t.L + t.R),
            n = r + o * t.h,
            s = o * t.d - r;
        i > this.w && (this.w = i), n > this.h && (this.h = n), s > this.d && (this.d = s)
    }, n.prototype.append = function (t) {
        var e = t.rscale;
        this.w += e * (t.w + t.L + t.R), e * t.h > this.h && (this.h = e * t.h), e * t.d > this.d && (this.d = e * t.d)
    }, n.prototype.updateFrom = function (t) {
        this.h = t.h, this.d = t.d, this.w = t.w, t.pwidth && (this.pwidth = t.pwidth)
    }, n.fullWidth = "100%", n);

    function n(t) {
        void 0 === t && (t = {
            w: 0,
            h: -o.BIGDIMEN,
            d: -o.BIGDIMEN
        }), this.w = t.w || 0, this.h = "h" in t ? t.h : -o.BIGDIMEN, this.d = "d" in t ? t.d : -o.BIGDIMEN, this.L = this.R = this.ic = this.sk = 0, this.scale = this.rscale = 1, this.pwidth = ""
    }
    e.BBox = i
}, function (t, e, r) {
    "use strict";
    var s = this && this.__assign || function () {
            return (s = Object.assign || function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        x = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        a = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(x(arguments[e]));
            return t
        },
        _ = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.V = 1, e.H = 2, e.NOSTRETCH = {
        dir: 0
    };
    var o = (i.charOptions = function (t, e) {
        var r = t[e];
        return 3 === r.length && (r[3] = {}), r[3]
    }, i.prototype.createVariant = function (t, e, r) {
        void 0 === e && (e = null), void 0 === r && (r = null);
        var o = {
            linked: [],
            chars: e ? Object.create(this.variant[e].chars) : {}
        };
        r && this.variant[r] && (Object.assign(o.chars, this.variant[r].chars), this.variant[r].linked.push(o.chars), o.chars = Object.create(o.chars)), this.remapSmpChars(o.chars, t), this.variant[t] = o
    }, i.prototype.remapSmpChars = function (t, e) {
        var r, o, i, n, s = this.constructor;
        if (s.VariantSmp[e]) {
            var a = s.SmpRemap,
                l = [null, null, s.SmpRemapGreekU, s.SmpRemapGreekL];
            try {
                for (var h = _(s.SmpRanges), c = h.next(); !c.done; c = h.next()) {
                    var u = x(c.value, 3),
                        p = u[0],
                        d = u[1],
                        f = u[2],
                        y = s.VariantSmp[e][p];
                    if (y) {
                        for (var m = d; m <= f; m++)
                            if (930 !== m) {
                                var v = y + m - d;
                                t[m] = this.smpChar(a[v] || v)
                            } if (l[p]) try {
                            for (var b = (i = void 0, _(Object.keys(l[p]).map(function (t) {
                                    return parseInt(t)
                                }))), g = b.next(); !g.done; g = b.next()) t[m = g.value] = this.smpChar(y + l[p][m])
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                g && !g.done && (n = b.return) && n.call(b)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    c && !c.done && (o = h.return) && o.call(h)
                } finally {
                    if (r) throw r.error
                }
            }
        }
        "bold" === e && (t[988] = this.smpChar(120778), t[989] = this.smpChar(120779))
    }, i.prototype.smpChar = function (t) {
        return [, , , {
            smp: t
        }]
    }, i.prototype.createVariants = function (t) {
        var e, r;
        try {
            for (var o = _(t), i = o.next(); !i.done; i = o.next()) {
                var n = i.value;
                this.createVariant(n[0], n[1], n[2])
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (e) throw e.error
            }
        }
    }, i.prototype.defineChars = function (t, e) {
        var r, o, i = this.variant[t];
        Object.assign(i.chars, e);
        try {
            for (var n = _(i.linked), s = n.next(); !s.done; s = n.next()) {
                var a = s.value;
                Object.assign(a, e)
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                s && !s.done && (o = n.return) && o.call(n)
            } finally {
                if (r) throw r.error
            }
        }
    }, i.prototype.defineDelimiters = function (t) {
        Object.assign(this.delimiters, t)
    }, i.prototype.defineRemap = function (t, e) {
        this.remapChars.hasOwnProperty(t) || (this.remapChars[t] = {}), Object.assign(this.remapChars[t], e)
    }, i.prototype.getDelimiter = function (t) {
        return this.delimiters[t]
    }, i.prototype.getSizeVariant = function (t, e) {
        return this.delimiters[t].variants && (e = this.delimiters[t].variants[e]), this.sizeVariants[e]
    }, i.prototype.getChar = function (t, e) {
        return this.variant[t].chars[e]
    }, i.prototype.getVariant = function (t) {
        return this.variant[t]
    }, i.prototype.getCssFont = function (t) {
        return this.cssFontMap[t] || ["serif", !1, !1]
    }, i.prototype.getRemappedChar = function (t, e) {
        return (this.remapChars[t] || {})[e]
    }, i.OPTIONS = {}, i.defaultVariants = [
        ["normal"],
        ["bold", "normal"],
        ["italic", "normal"],
        ["bold-italic", "italic", "bold"],
        ["double-struck", "bold"],
        ["fraktur", "normal"],
        ["bold-fraktur", "bold", "fraktur"],
        ["script", "italic"],
        ["bold-script", "bold-italic", "script"],
        ["sans-serif", "normal"],
        ["bold-sans-serif", "bold", "sans-serif"],
        ["sans-serif-italic", "italic", "sans-serif"],
        ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"],
        ["monospace", "normal"]
    ], i.defaultCssFonts = {
        normal: ["serif", !1, !1],
        bold: ["serif", !1, !0],
        italic: ["serif", !0, !1],
        "bold-italic": ["serif", !0, !0],
        "double-struck": ["serif", !1, !0],
        fraktur: ["serif", !1, !1],
        "bold-fraktur": ["serif", !1, !0],
        script: ["cursive", !1, !1],
        "bold-script": ["cursive", !1, !0],
        "sans-serif": ["sans-serif", !1, !1],
        "bold-sans-serif": ["sans-serif", !1, !0],
        "sans-serif-italic": ["sans-serif", !0, !1],
        "sans-serif-bold-italic": ["sans-serif", !0, !0],
        monospace: ["monospace", !1, !1]
    }, i.defaultCssFamilyPrefix = "", i.VariantSmp = {
        bold: [119808, 119834, 120488, 120514, 120782],
        italic: [119860, 119886, 120546, 120572],
        "bold-italic": [119912, 119938, 120604, 120630],
        script: [119964, 119990],
        "bold-script": [120016, 120042],
        fraktur: [120068, 120094],
        "double-struck": [120120, 120146, , , 120792],
        "bold-fraktur": [120172, 120198],
        "sans-serif": [120224, 120250, , , 120802],
        "bold-sans-serif": [120276, 120302, 120662, 120688, 120812],
        "sans-serif-italic": [120328, 120354],
        "sans-serif-bold-italic": [120380, 120406, 120720, 120746],
        monospace: [120432, 120458, , , 120822]
    }, i.SmpRanges = [
        [0, 65, 90],
        [1, 97, 122],
        [2, 913, 937],
        [3, 945, 969],
        [4, 48, 57]
    ], i.SmpRemap = {
        119893: 8462,
        119965: 8492,
        119968: 8496,
        119969: 8497,
        119971: 8459,
        119972: 8464,
        119975: 8466,
        119976: 8499,
        119981: 8475,
        119994: 8495,
        119996: 8458,
        120004: 8500,
        120070: 8493,
        120075: 8460,
        120076: 8465,
        120085: 8476,
        120093: 8488,
        120122: 8450,
        120127: 8461,
        120133: 8469,
        120135: 8473,
        120136: 8474,
        120137: 8477,
        120145: 8484
    }, i.SmpRemapGreekU = {
        8711: 25,
        1012: 17
    }, i.SmpRemapGreekL = {
        977: 27,
        981: 29,
        982: 31,
        1008: 28,
        1009: 30,
        1013: 26,
        8706: 25
    }, i.defaultAccentMap = {
        768: "\u02cb",
        769: "\u02ca",
        770: "\u02c6",
        771: "\u02dc",
        772: "\u02c9",
        774: "\u02d8",
        775: "\u02d9",
        776: "\xa8",
        778: "\u02da",
        780: "\u02c7",
        8594: "\u20d7",
        8242: "'",
        8243: "''",
        8244: "'''",
        8245: "`",
        8246: "``",
        8247: "```",
        8279: "''''",
        8400: "\u21bc",
        8401: "\u21c0",
        8406: "\u2190",
        8417: "\u2194",
        8432: "*",
        8411: "...",
        8412: "....",
        8428: "\u21c1",
        8429: "\u21bd",
        8430: "\u2190",
        8431: "\u2192"
    }, i.defaultMoMap = {
        45: "\u2212"
    }, i.defaultMnMap = {
        45: "\u2212"
    }, i.defaultParams = {
        x_height: .442,
        quad: 1,
        num1: .676,
        num2: .394,
        num3: .444,
        denom1: .686,
        denom2: .345,
        sup1: .413,
        sup2: .363,
        sup3: .289,
        sub1: .15,
        sub2: .247,
        sup_drop: .386,
        sub_drop: .05,
        delim1: 2.39,
        delim2: 1,
        axis_height: .25,
        rule_thickness: .06,
        big_op_spacing1: .111,
        big_op_spacing2: .167,
        big_op_spacing3: .2,
        big_op_spacing4: .6,
        big_op_spacing5: .1,
        surd_height: .075,
        scriptspace: .05,
        nulldelimiterspace: .12,
        delimiterfactor: 901,
        delimitershortfall: .3,
        min_rule_thickness: 1.25
    }, i.defaultDelimiters = {}, i.defaultChars = {}, i.defaultSizeVariants = [], i);

    function i() {
        var e, t;
        this.variant = {}, this.delimiters = {}, this.cssFontMap = {}, this.remapChars = {};
        var r = this.constructor;
        this.params = s({}, r.defaultParams), this.sizeVariants = a(r.defaultSizeVariants), this.cssFontMap = s({}, r.defaultCssFonts), this.createVariants(r.defaultVariants), this.defineDelimiters(r.defaultDelimiters);
        try {
            for (var o = _(Object.keys(r.defaultChars)), i = o.next(); !i.done; i = o.next()) {
                var n = i.value;
                this.defineChars(n, r.defaultChars[n])
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (t = o.return) && t.call(o)
            } finally {
                if (e) throw e.error
            }
        }
        this.defineRemap("accent", r.defaultAccentMap), this.defineRemap("mo", r.defaultMoMap), this.defineRemap("mn", r.defaultMnMap)
    }
    e.FontData = o
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS, e.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES, e.indentAttributes = MathJax._.core.MmlTree.MmlNode.indentAttributes, e.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode, e.AbstractMmlTokenNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode, e.AbstractMmlLayoutNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode, e.AbstractMmlBaseNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode, e.AbstractMmlEmptyNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode, e.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode, e.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sortLength = MathJax._.util.string.sortLength, e.quotePattern = MathJax._.util.string.quotePattern, e.unicodeChars = MathJax._.util.string.unicodeChars, e.isPercent = MathJax._.util.string.isPercent, e.split = MathJax._.util.string.split
}, function (t, d, e) {
    "use strict";
    var f = this && this.__read || function (t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var o, i, n = r.call(t),
            s = [];
        try {
            for (;
                (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (r = n.return) && r.call(n)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    };
    Object.defineProperty(d, "__esModule", {
        value: !0
    }), d.ARROWX = 4, d.ARROWDX = 1, d.ARROWY = 2, d.THICKNESS = .067, d.PADDING = .2, d.SOLID = d.THICKNESS + "em solid", d.sideIndex = {
        top: 0,
        right: 1,
        bottom: 2,
        left: 3
    }, d.sideNames = Object.keys(d.sideIndex), d.fullBBox = function (t) {
        return new Array(4).fill(t.thickness + t.padding)
    }, d.fullPadding = function (t) {
        return new Array(4).fill(t.padding)
    }, d.fullBorder = function (t) {
        return new Array(4).fill(t.thickness)
    }, d.arrowHead = function (t) {
        return Math.max(t.padding, t.thickness * (t.arrowhead.x + t.arrowhead.dx + 1))
    }, d.arrowBBoxHD = function (t, e) {
        if (t.childNodes[0]) {
            var r = t.childNodes[0].getBBox(),
                o = r.h,
                i = r.d;
            e[0] = e[2] = Math.max(0, t.thickness * t.arrowhead.y - (o + i) / 2)
        }
        return e
    }, d.arrowBBoxW = function (t, e) {
        if (t.childNodes[0]) {
            var r = t.childNodes[0].getBBox().w;
            e[1] = e[3] = Math.max(0, t.thickness * t.arrowhead.y - r / 2)
        }
        return e
    }, d.arrowDef = {
        up: [-Math.PI / 2, !1, !0, "verticalstrike"],
        down: [Math.PI / 2, !1, !0, "verticakstrike"],
        right: [0, !1, !1, "horizontalstrike"],
        left: [Math.PI, !1, !1, "horizontalstrike"],
        updown: [Math.PI / 2, !0, !0, "verticalstrike uparrow downarrow"],
        leftright: [0, !0, !1, "horizontalstrike leftarrow rightarrow"]
    }, d.diagonalArrowDef = {
        updiagonal: [-1, 0, !1, "updiagonalstrike northeastarrow"],
        northeast: [-1, 0, !1, "updiagonalstrike updiagonalarrow"],
        southeast: [1, 0, !1, "downdiagonalstrike"],
        northwest: [1, Math.PI, !1, "downdiagonalstrike"],
        southwest: [-1, Math.PI, !1, "updiagonalstrike"],
        northeastsouthwest: [-1, 0, !0, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"],
        northwestsoutheast: [1, 0, !0, "downdiagonalstrike northwestarrow southeastarrow"]
    }, d.arrowBBox = {
        up: function (t) {
            return d.arrowBBoxW(t, [d.arrowHead(t), 0, t.padding, 0])
        },
        down: function (t) {
            return d.arrowBBoxW(t, [t.padding, 0, d.arrowHead(t), 0])
        },
        right: function (t) {
            return d.arrowBBoxHD(t, [0, d.arrowHead(t), 0, t.padding])
        },
        left: function (t) {
            return d.arrowBBoxHD(t, [0, t.padding, 0, d.arrowHead(t)])
        },
        updown: function (t) {
            return d.arrowBBoxW(t, [d.arrowHead(t), 0, d.arrowHead(t), 0])
        },
        leftright: function (t) {
            return d.arrowBBoxHD(t, [0, d.arrowHead(t), 0, d.arrowHead(t)])
        }
    }, d.CommonBorder = function (e) {
        return function (t) {
            var r = d.sideIndex[t];
            return [t, {
                renderer: e,
                bbox: function (t) {
                    var e = [0, 0, 0, 0];
                    return e[r] = t.thickness + t.padding, e
                },
                border: function (t) {
                    var e = [0, 0, 0, 0];
                    return e[r] = t.thickness, e
                }
            }]
        }
    }, d.CommonBorder2 = function (n) {
        return function (t, e, r) {
            var o = d.sideIndex[e],
                i = d.sideIndex[r];
            return [t, {
                renderer: n,
                bbox: function (t) {
                    var e = t.thickness + t.padding,
                        r = [0, 0, 0, 0];
                    return r[o] = r[i] = e, r
                },
                border: function (t) {
                    var e = [0, 0, 0, 0];
                    return e[o] = e[i] = t.thickness, e
                },
                remove: e + " " + r
            }]
        }
    }, d.CommonDiagonalStrike = function (r) {
        return function (t) {
            var e = "mjx-" + t.charAt(0) + "strike";
            return [t + "diagonalstrike", {
                renderer: r(e),
                bbox: d.fullBBox
            }]
        }
    }, d.CommonDiagonalArrow = function (h) {
        return function (t) {
            var e = f(d.diagonalArrowDef[t], 4),
                s = e[0],
                a = e[1],
                l = e[2];
            return [t + "arrow", {
                renderer: function (t, e) {
                    var r = t.arrowData(),
                        o = r.a,
                        i = r.W,
                        n = t.arrow(i, s * (o - a), l);
                    h(t, n)
                },
                bbox: function (t) {
                    var e = t.arrowData(),
                        r = e.a,
                        o = e.x,
                        i = e.y,
                        n = f([t.arrowhead.x, t.arrowhead.y, t.arrowhead.dx], 3),
                        s = n[0],
                        a = n[1],
                        l = n[2],
                        h = f(t.getArgMod(s + l, a), 2),
                        c = h[0],
                        u = h[1],
                        p = i + (r < c ? t.thickness * u * Math.sin(c - r) : 0),
                        d = o + (c > Math.PI / 2 - r ? t.thickness * u * Math.sin(c + r - Math.PI / 2) : 0);
                    return [p, d, p, d]
                },
                remove: e[3]
            }]
        }
    }, d.CommonArrow = function (p) {
        return function (t) {
            var e = f(d.arrowDef[t], 4),
                h = e[0],
                c = e[1],
                u = e[2],
                r = e[3];
            return [t + "arrow", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d,
                        s = f(u ? [i + n, o] : [o, i + n], 2),
                        a = s[0],
                        l = (s[1], t.arrow(a, h, c));
                    p(t, l)
                },
                bbox: d.arrowBBox[t],
                remove: r
            }]
        }
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        p = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMsubMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.sub]
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getOffset = function (t, e) {
            return [0, -this.getV(t, e)]
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }, e.CommonMsupMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.sup]
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getOffset = function (t, e) {
            return [(this.baseCore.bbox.ic ? .05 * this.baseCore.bbox.ic + .05 : 0) * this.coreScale(), this.getU(t, e)]
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }, e.CommonMsubsupMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "subChild", {
            get: function () {
                return this.childNodes[this.node.sub]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "supChild", {
            get: function () {
                return this.childNodes[this.node.sup]
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = this.baseChild.getBBox(),
                o = this.subChild.getBBox(),
                i = this.supChild.getBBox();
            t.empty(), t.append(r);
            var n = t.w,
                s = p(this.getUVQ(r, o, i), 3),
                a = s[0],
                l = s[1],
                h = (s[2], this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0);
            t.combine(o, n, l), t.combine(i, n + h, a), t.w += this.font.params.scriptspace, t.clean(), this.setChildPWidths(e)
        }, e.prototype.getUVQ = function (t, e, r) {
            if (this.UVQ) return this.UVQ;
            var o = this.font.params,
                i = 3 * o.rule_thickness,
                n = this.length2em(this.node.attributes.get("subscriptshift"), o.sub2),
                s = this.isCharBase() ? 0 : t.d * t.rscale + o.sub_drop * e.rscale,
                a = p([this.getU(t, r), Math.max(s, n)], 2),
                l = a[0],
                h = a[1],
                c = l - r.d * r.rscale - (e.h * e.rscale - h);
            if (c < i) {
                h += i - c;
                var u = .8 * o.x_height - (l - r.d * r.rscale);
                0 < u && (l += u, h -= u)
            }
            return l = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), l), l), h = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), h), h), c = l - r.d * r.rscale - (e.h * e.rscale - h), this.UVQ = [l, -h, c], this.UVQ
        }, e;

        function e() {
            var t = null !== r && r.apply(this, arguments) || this;
            return t.UVQ = null, t
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        y = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        n = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMunderMixin = function (t) {
        return i(e, c = t), Object.defineProperty(e.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.under]
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.computeBBox = function (t, e) {
            if (void 0 === e && (e = !1), this.hasMovableLimits()) c.prototype.computeBBox.call(this, t, e);
            else {
                t.empty();
                var r = this.baseChild.getBBox(),
                    o = this.script.getBBox(),
                    i = y(this.getUnderKV(r, o), 2),
                    n = (i[0], i[1]),
                    s = this.getDelta(!0),
                    a = y(this.getDeltaW([r, o], [0, -s]), 2),
                    l = a[0],
                    h = a[1];
                t.combine(r, l, 0), t.combine(o, h, n), t.d += this.font.params.big_op_spacing5, t.ic = -this.baseCore.bbox.ic, t.clean(), this.setChildPWidths(e)
            }
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = c.apply(this, n(t)) || this;
            return r.stretchChildren(), r
        }
        var c
    }, e.CommonMoverMixin = function (t) {
        return i(e, h = t), Object.defineProperty(e.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.over]
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.computeBBox = function (t) {
            if (this.hasMovableLimits()) h.prototype.computeBBox.call(this, t);
            else {
                t.empty();
                var e = this.baseChild.getBBox(),
                    r = this.script.getBBox(),
                    o = y(this.getOverKU(e, r), 2),
                    i = (o[0], o[1]),
                    n = this.getDelta(),
                    s = y(this.getDeltaW([e, r], [0, n]), 2),
                    a = s[0],
                    l = s[1];
                t.combine(e, a, 0), t.combine(r, l, i), t.h += this.font.params.big_op_spacing5, t.ic = -this.baseCore.bbox.ic, t.clean()
            }
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = h.apply(this, n(t)) || this;
            return r.stretchChildren(), r
        }
        var h
    }, e.CommonMunderoverMixin = function (t) {
        return i(e, f = t), Object.defineProperty(e.prototype, "underChild", {
            get: function () {
                return this.childNodes[this.node.under]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "overChild", {
            get: function () {
                return this.childNodes[this.node.over]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "subChild", {
            get: function () {
                return this.underChild
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "supChild", {
            get: function () {
                return this.overChild
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.computeBBox = function (t) {
            if (this.hasMovableLimits()) f.prototype.computeBBox.call(this, t);
            else {
                t.empty();
                var e = this.overChild.getBBox(),
                    r = this.baseChild.getBBox(),
                    o = this.underChild.getBBox(),
                    i = y(this.getOverKU(r, e), 2),
                    n = (i[0], i[1]),
                    s = y(this.getUnderKV(r, o), 2),
                    a = (s[0], s[1]),
                    l = this.getDelta(),
                    h = y(this.getDeltaW([r, o, e], [0, -l, l]), 3),
                    c = h[0],
                    u = h[1],
                    p = h[2];
                t.combine(r, c, 0), t.combine(e, p, n), t.combine(o, u, a);
                var d = this.font.params.big_op_spacing5;
                t.h += d, t.d += d, t.ic = -this.baseCore.bbox.ic, t.clean()
            }
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = f.apply(this, n(t)) || this;
            return r.stretchChildren(), r
        }
        var f
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        u = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(58),
        a = r(6),
        l = r(6),
        h = r(6),
        c = r(95),
        p = (n = a.CommonMsubMixin(s.SVGscriptbase), i(d, n), d.kind = c.MmlMsub.prototype.kind, d.useIC = !1, d);

    function d() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmsub = p;
    var f, y = (f = l.CommonMsupMixin(s.SVGscriptbase), i(m, f), m.kind = c.MmlMsup.prototype.kind, m.useIC = !0, m);

    function m() {
        return null !== f && f.apply(this, arguments) || this
    }
    e.SVGmsup = y;
    var v, b = (v = h.CommonMsubsupMixin(s.SVGscriptbase), i(g, v), g.prototype.toSVG = function (t) {
        var e = this.standardSVGnode(t),
            r = u([this.baseChild, this.supChild, this.subChild], 3),
            o = r[0],
            i = r[1],
            n = r[2],
            s = o.getBBox(),
            a = u(this.getUVQ(s, n.getBBox(), i.getBBox()), 2),
            l = a[0],
            h = a[1],
            c = this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0;
        o.toSVG(e), i.toSVG(e), n.toSVG(e), n.place(s.w * s.rscale, h), i.place(s.w * s.rscale + c, l)
    }, g.kind = c.MmlMsubsup.prototype.kind, g.useIC = !1, g);

    function g() {
        return null !== v && v.apply(this, arguments) || this
    }
    e.SVGmsubsup = b
}, function (t, u, e) {
    "use strict";
    var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        i = this && this.__assign || function () {
            return (i = Object.assign || function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        p = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(u, "__esModule", {
        value: !0
    });
    var n = e(18),
        s = e(42),
        a = e(106),
        l = e(71),
        d = e(4),
        h = e(10);
    u.SVGNS = "http://www.w3.org/2000/svg", u.XLINKNS = "http://www.w3.org/1999/xlink";
    var c, f = (c = n.CommonOutputJax, r(y, c), y.prototype.initialize = function () {
        "global" === this.options.fontCache && this.fontCache.clearCache()
    }, y.prototype.clearFontCache = function () {
        this.fontCache.clearCache()
    }, y.prototype.setScale = function (t) {
        1 !== this.options.scale && this.adaptor.setStyle(t, "fontSize", h.percent(this.options.scale))
    }, y.prototype.escaped = function (t, e) {
        return this.setDocument(e), this.html("span", {}, [this.text(t.math)])
    }, y.prototype.styleSheet = function (t) {
        var e = c.prototype.styleSheet.call(this, t);
        return this.adaptor.setAttribute(e, "id", y.STYLESHEETID), e
    }, y.prototype.pageElements = function (t) {
        return "global" !== this.options.fontCache || this.findCache(t) ? null : this.svg("svg", {
            id: y.FONTCACHEID,
            style: {
                display: "none"
            }
        }, [this.fontCache.getCache()])
    }, y.prototype.findCache = function (t) {
        for (var e = this.adaptor, r = e.tags(e.body(t.document), "svg"), o = r.length - 1; 0 <= o; o--)
            if (this.adaptor.getAttribute(r[o], "id") === y.FONTCACHEID) return !0;
        return !1
    }, y.prototype.processMath = function (t, e) {
        var r = this.container;
        this.container = e;
        var o = this.factory.wrap(t),
            i = p(this.createRoot(o), 2),
            n = i[0],
            s = i[1];
        this.typesetSVG(o, n, s), this.container = r
    }, y.prototype.createRoot = function (t) {
        var e = t.getBBox(),
            r = e.w,
            o = e.h,
            i = e.d,
            n = e.pwidth,
            s = Math.max(r, .001),
            a = this.svg("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": 0,
                transform: "matrix(1 0 0 -1 0 0)"
            }),
            l = this.adaptor,
            h = l.append(this.container, this.svg("svg", {
                xmlns: u.SVGNS,
                width: this.ex(s),
                height: this.ex(o + i),
                role: "img",
                focusable: !1,
                style: {
                    "vertical-align": this.ex(-i)
                },
                viewBox: [0, this.fixed(1e3 * -o, 1), this.fixed(1e3 * s, 1), this.fixed(1e3 * (o + i), 1)].join(" ")
            }, [a]));
        if (.001 === s && (l.setAttribute(h, "preserveAspectRatio", "xMidYMid slice"), r < 0 && l.setStyle(this.container, "margin-right", this.ex(r))), n) {
            l.setStyle(h, "min-width", this.ex(s)), l.setAttribute(h, "width", n), l.removeAttribute(h, "viewBox");
            var c = t.metrics.ex / (1e3 * this.font.params.x_height);
            l.setAttribute(a, "transform", "matrix(1 0 0 -1 0 0) scale(" + this.fixed(c, 6) + ") translate(0, " + this.fixed(1e3 * -o, 1) + ")")
        }
        return "none" !== this.options.fontCache && l.setAttribute(h, "xmlns:xlink", u.XLINKNS), [h, a]
    }, y.prototype.typesetSVG = function (t, e, r) {
        var o = this.adaptor;
        if (this.minwidth = this.shift = 0, "local" === this.options.fontCache && (this.fontCache.clearCache(), this.fontCache.useLocalID(this.options.localID), o.insert(this.fontCache.getCache(), r)), t.toSVG(r), this.fontCache.clearLocalID(), this.minwidth) o.setStyle(e, "minWidth", this.ex(this.minwidth)), o.setStyle(this.container, "minWidth", this.ex(this.minwidth));
        else if (this.shift) {
            var i = o.getAttribute(this.container, "justify") || "center";
            this.setIndent(e, i, this.shift)
        }
    }, y.prototype.setIndent = function (t, e, r) {
        "center" !== e && "left" !== e || this.adaptor.setStyle(t, "margin-left", this.ex(r)), "center" !== e && "right" !== e || this.adaptor.setStyle(t, "margin-right", this.ex(-r))
    }, y.prototype.ex = function (t) {
        return t /= this.font.params.x_height, Math.abs(t) < .001 ? "0" : t.toFixed(3).replace(/\.?0+$/, "") + "ex"
    }, y.prototype.svg = function (t, e, r) {
        return void 0 === e && (e = {}), void 0 === r && (r = []), this.html(t, e, r, u.SVGNS)
    }, y.prototype.unknownText = function (t, e) {
        var r = this.math.metrics,
            o = this.font.params.x_height / r.ex * r.em * 1e3,
            i = this.svg("text", {
                "data-variant": e,
                transform: "matrix(1 0 0 -1 0 0)",
                "font-size": this.fixed(o, 1) + "px"
            }, [this.text(t)]),
            n = this.adaptor;
        if ("-explicitFont" !== e) {
            var s = d.unicodeChars(t);
            if (1 !== s.length || s[0] < 119808 || 120831 < s[0]) {
                var a = p(this.font.getCssFont(e), 3),
                    l = a[0],
                    h = a[1],
                    c = a[2];
                n.setAttribute(i, "font-family", l), h && n.setAttribute(i, "font-style", "italic"), c && n.setAttribute(i, "font-weight", "bold")
            }
        }
        return i
    }, y.prototype.measureTextNode = function (t) {
        var e = this.adaptor;
        t = e.clone(t), e.removeAttribute(t, "transform");
        var r = this.fixed(1e3 * this.font.params.x_height, 1),
            o = this.svg("svg", {
                position: "absolute",
                visibility: "hidden",
                width: "1ex",
                height: "1ex",
                viewBox: [0, 0, r, r].join(" ")
            }, [t]);
        e.append(e.body(e.document), o);
        var i = e.nodeSize(t, 1e3, !0)[0];
        return e.remove(o), {
            w: i,
            h: .75,
            d: .2
        }
    }, y.NAME = "SVG", y.OPTIONS = i(i({}, n.CommonOutputJax.OPTIONS), {
        internalSpeechTitles: !0,
        titleID: 0,
        fontCache: "local",
        localID: null
    }), y.commonStyles = {
        'mjx-container[jax="SVG"]': {
            direction: "ltr"
        },
        'mjx-container[jax="SVG"] > svg': {
            overflow: "visible"
        },
        'mjx-container[jax="SVG"] > svg a': {
            fill: "blue",
            stroke: "blue"
        }
    }, y.FONTCACHEID = "MJX-SVG-global-cache", y.STYLESHEETID = "MJX-SVG-styles", y);

    function y(t) {
        void 0 === t && (t = null);
        var e = c.call(this, t, s.SVGWrapperFactory, a.TeXFont) || this;
        return e.minwidth = 0, e.shift = 0, e.fontCache = new l.FontCache(e), e
    }
    u.SVG = f
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BIGDIMEN = MathJax._.util.lengths.BIGDIMEN, e.UNITS = MathJax._.util.lengths.UNITS, e.RELUNITS = MathJax._.util.lengths.RELUNITS, e.MATHSPACE = MathJax._.util.lengths.MATHSPACE, e.length2em = MathJax._.util.lengths.length2em, e.percent = MathJax._.util.lengths.percent, e.em = MathJax._.util.lengths.em, e.emRounded = MathJax._.util.lengths.emRounded, e.px = MathJax._.util.lengths.px
}, function (t, i, e) {
    "use strict";
    var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        c = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(h(arguments[e]));
            return t
        };
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = e(4);
    i.TooltipData = {
        dx: ".2em",
        dy: ".1em",
        postDelay: 600,
        clearDelay: 100,
        hoverTimer: new Map,
        clearTimer: new Map,
        stopTimers: function (t, e) {
            e.clearTimer.has(t) && (clearTimeout(e.clearTimer.get(t)), e.clearTimer.delete(t)), e.hoverTimer.has(t) && (clearTimeout(e.hoverTimer.get(t)), e.hoverTimer.delete(t))
        }
    }, i.CommonMactionMixin = function (t) {
        return r(e, l = t), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                var t = this.node.attributes.get("selection"),
                    e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
                return this.childNodes[e] || this.wrap(this.node.selected)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getParameters = function () {
            var t = this.node.attributes.get("data-offsets"),
                e = h(n.split(t || ""), 2),
                r = e[0],
                o = e[1];
            this.dx = this.length2em(r || i.TooltipData.dx), this.dy = this.length2em(o || i.TooltipData.dy)
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1), t.updateFrom(this.selected.getBBox()), this.selected.setChildPWidths(e)
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = l.apply(this, c(t)) || this,
                o = r.constructor.actions,
                i = r.node.attributes.get("actiontype"),
                n = h(o.get(i) || [function (t, e) {}, {}], 2),
                s = n[0],
                a = n[1];
            return r.action = s, r.data = a, r.getParameters(), r
        }
        var l
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        l = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        },
        w = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var h = r(1);
    e.CommonMrowMixin = function (t) {
        return i(e, a = t), Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.stretchChildren = function () {
            var e, t, r, o, i, n, s = [];
            try {
                for (var a = w(this.childNodes), l = a.next(); !l.done; l = a.next())(M = l.value).canStretch(1) && s.push(M)
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (t = a.return) && t.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
            var h = s.length,
                c = this.childNodes.length;
            if (h && 1 < c) {
                var u = 0,
                    p = 0,
                    d = 1 < h && h === c;
                try {
                    for (var f = w(this.childNodes), y = f.next(); !y.done; y = f.next()) {
                        var m = 0 === (M = y.value).stretch.dir;
                        if (d || m) {
                            var v = M.getBBox(m),
                                b = v.h,
                                g = v.d;
                            u < b && (u = b), p < g && (p = g)
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        y && !y.done && (o = f.return) && o.call(f)
                    } finally {
                        if (r) throw r.error
                    }
                }
                try {
                    for (var x = w(s), _ = x.next(); !_.done; _ = x.next()) {
                        var M;
                        (M = _.value).coreMO().getStretchedVariant([u, p])
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        _ && !_.done && (n = x.return) && n.call(x)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }
        }, e;

        function e() {
            for (var e, t, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            var i = a.apply(this, l(r)) || this;
            i.stretchChildren();
            try {
                for (var n = w(i.childNodes), s = n.next(); !s.done; s = n.next()) {
                    if (s.value.bbox.pwidth) {
                        i.bbox.pwidth = h.BBox.fullWidth;
                        break
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (t = n.return) && t.call(n)
                } finally {
                    if (e) throw e.error
                }
            }
            return i
        }
        var a
    }, e.CommonInferredMrowMixin = function (t) {
        return i(e, r = t), e.prototype.getScale = function () {
            this.bbox.scale = this.parent.bbox.scale, this.bbox.rscale = 1
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        O = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMtrMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "numCells", {
            get: function () {
                return this.childNodes.length
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "labeled", {
            get: function () {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tableCells", {
            get: function () {
                return this.childNodes
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getChild = function (t) {
            return this.childNodes[t]
        }, e.prototype.getChildBBoxes = function () {
            return this.childNodes.map(function (t) {
                return t.getBBox()
            })
        }, e.prototype.stretchChildren = function (t) {
            var e, r, o, i, n, s;
            void 0 === t && (t = null);
            var a = [],
                l = this.labeled ? this.childNodes.slice(1) : this.childNodes;
            try {
                for (var h = O(l), c = h.next(); !c.done; c = h.next())(S = c.value.childNodes[0]).canStretch(1) && a.push(S)
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    c && !c.done && (r = h.return) && r.call(h)
                } finally {
                    if (e) throw e.error
                }
            }
            var u = a.length,
                p = this.childNodes.length;
            if (u && 1 < p) {
                if (null === t) {
                    var d = 0,
                        f = 0,
                        y = 1 < u && u === p;
                    try {
                        for (var m = O(l), v = m.next(); !v.done; v = m.next()) {
                            var b = 0 === (S = v.value.childNodes[0]).stretch.dir;
                            if (y || b) {
                                var g = S.getBBox(b),
                                    x = g.h,
                                    _ = g.d;
                                d < x && (d = x), f < _ && (f = _)
                            }
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            v && !v.done && (i = m.return) && i.call(m)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    t = [d, f]
                }
                try {
                    for (var M = O(a), w = M.next(); !w.done; w = M.next()) {
                        var S;
                        (S = w.value).coreMO().getStretchedVariant(t)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        w && !w.done && (s = M.return) && s.call(M)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }, e.CommonMlabeledtrMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "numCells", {
            get: function () {
                return Math.max(0, this.childNodes.length - 1)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "labeled", {
            get: function () {
                return !0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tableCells", {
            get: function () {
                return this.childNodes.slice(1)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getChild = function (t) {
            return this.childNodes[t + 1]
        }, e.prototype.getChildBBoxes = function () {
            return this.childNodes.slice(1).map(function (t) {
                return t.getBBox()
            })
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        d = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(36),
        l = r(92),
        h = (n = a.CommonMsqrtMixin(s.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            var e = this.childNodes[this.surd],
                r = this.childNodes[this.base],
                o = this.root ? this.childNodes[this.root] : null,
                i = this.getBBox(),
                n = e.getBBox(),
                s = r.getBBox(),
                a = d(this.getPQ(n), 2),
                l = (a[0], a[1]),
                h = this.font.params.rule_thickness * this.bbox.scale,
                c = s.h + l + h,
                u = this.standardSVGnode(t),
                p = this.adaptor.append(u, this.svg("g"));
            this.addRoot(u, o, n, c), e.toSVG(u), e.place(this.dx, i.h - n.h - h), r.toSVG(p), r.place(this.dx + n.w, 0), this.adaptor.append(u, this.svg("rect", {
                width: this.fixed(s.w),
                height: this.fixed(h),
                x: this.fixed(this.dx + n.w),
                y: this.fixed(i.h - 2 * h)
            }))
        }, c.prototype.addRoot = function (t, e, r, o) {}, c.kind = l.MmlMsqrt.prototype.kind, c);

    function c() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.dx = 0, t
    }
    e.SVGmsqrt = h
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isObject = MathJax._.components.global.isObject, e.combineConfig = MathJax._.components.global.combineConfig, e.combineDefaults = MathJax._.components.global.combineDefaults, e.combineWithMathJax = MathJax._.components.global.combineWithMathJax, e.MathJax = MathJax._.components.global.MathJax
}, function (t, r, e) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        d = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e(2);
    ! function (t) {
        for (var e in t) r.hasOwnProperty(e) || (r[e] = t[e])
    }(e(2));
    var s, f = (s = n.FontData, i(a, s), a.charOptions = function (t, e) {
        return s.charOptions.call(this, t, e)
    }, a);

    function a() {
        return null !== s && s.apply(this, arguments) || this
    }
    r.SVGFontData = f, r.AddPaths = function (t, e, r) {
        var o, i, n, s;
        try {
            for (var a = d(Object.keys(e)), l = a.next(); !l.done; l = a.next()) {
                var h = l.value,
                    c = parseInt(h);
                f.charOptions(t, c).p = e[c]
            }
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                l && !l.done && (i = a.return) && i.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        try {
            for (var u = d(Object.keys(r)), p = u.next(); !p.done; p = u.next()) {
                h = p.value, c = parseInt(h);
                f.charOptions(t, c).c = r[c]
            }
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                p && !p.done && (s = u.return) && s.call(u)
            } finally {
                if (n) throw n.error
            }
        }
        return t
    }
}, function (t, e, r) {
    "use strict";
    var h = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            o = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function () {
                return t && o >= t.length && (t = void 0), {
                    value: t && t[o++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = (Object.defineProperty(i.prototype, "cssText", {
        get: function () {
            return this.getStyleString()
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.addStyles = function (t) {
        var e, r;
        if (t) try {
            for (var o = h(Object.keys(t)), i = o.next(); !i.done; i = o.next()) {
                var n = i.value;
                this.styles[n] || (this.styles[n] = {}), Object.assign(this.styles[n], t[n])
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (e) throw e.error
            }
        }
    }, i.prototype.removeStyles = function () {
        for (var e, t, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        try {
            for (var i = h(r), n = i.next(); !n.done; n = i.next()) {
                var s = n.value;
                delete this.styles[s]
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (e) throw e.error
            }
        }
    }, i.prototype.clear = function () {
        this.styles = {}
    }, i.prototype.getStyleString = function () {
        var e, t, r = Object.keys(this.styles),
            o = new Array(r.length),
            i = 0;
        try {
            for (var n = h(r), s = n.next(); !s.done; s = n.next()) {
                var a = s.value;
                o[i++] = a + " {\n" + this.getStyleDefString(this.styles[a]) + "\n}"
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                s && !s.done && (t = n.return) && t.call(n)
            } finally {
                if (e) throw e.error
            }
        }
        return o.join("\n\n")
    }, i.prototype.getStyleDefString = function (t) {
        var e, r, o = Object.keys(t),
            i = new Array(o.length),
            n = 0;
        try {
            for (var s = h(o), a = s.next(); !a.done; a = s.next()) {
                var l = a.value;
                i[n++] = "  " + l + ": " + t[l] + ";"
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                a && !a.done && (r = s.return) && r.call(s)
            } finally {
                if (e) throw e.error
            }
        }
        return i.join("\n")
    }, i);

    function i(t) {
        void 0 === t && (t = null), this.styles = {}, this.addStyles(t)
    }
    e.CssStyles = o
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__assign || function () {
            return (n = Object.assign || function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        },
        a = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        j = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l, s = r(74),
        P = r(75),
        h = r(76),
        c = r(17),
        u = r(10),
        p = r(72),
        d = (l = s.AbstractOutputJax, i(f, l), f.prototype.typeset = function (t, e) {
            this.setDocument(e);
            var r = this.createNode();
            return this.toDOM(t, r, e), r
        }, f.prototype.createNode = function () {
            var t = this.constructor.NAME;
            return this.html("mjx-container", {
                class: "MathJax",
                jax: t
            })
        }, f.prototype.setScale = function (t) {
            var e = this.math.metrics.scale * this.options.scale;
            1 != e && this.adaptor.setStyle(t, "fontSize", u.percent(e))
        }, f.prototype.toDOM = function (t, e, r) {
            void 0 === r && (r = null), this.setDocument(r), this.math = t, this.pxPerEm = t.metrics.ex / this.font.params.x_height, t.root.setTeXclass(null), this.setScale(e), this.nodeMap = new Map, this.container = e, this.processMath(t.root, e), this.nodeMap = null, this.executeFilters(this.postFilters, t, r, e)
        }, f.prototype.getBBox = function (t, e) {
            this.setDocument(e), (this.math = t).root.setTeXclass(null), this.nodeMap = new Map;
            var r = this.factory.wrap(t.root).getBBox();
            return this.nodeMap = null, r
        }, f.prototype.getMetrics = function (t) {
            var e, r;
            this.setDocument(t);
            var o = this.adaptor,
                i = this.getMetricMaps(t);
            try {
                for (var n = j(t.math), s = n.next(); !s.done; s = n.next()) {
                    var a = s.value,
                        l = o.parent(a.start.node);
                    if (a.state() < P.STATE.METRICS && l) {
                        var h = i[a.display ? 1 : 0].get(l),
                            c = h.em,
                            u = h.ex,
                            p = h.containerWidth,
                            d = h.lineWidth,
                            f = h.scale;
                        a.setMetrics(c, u, p, d, f), a.state(P.STATE.METRICS)
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (r = n.return) && r.call(n)
                } finally {
                    if (e) throw e.error
                }
            }
        }, f.prototype.getMetricsFor = function (t, e) {
            var r = this.getTestElement(t, e),
                o = this.measureMetrics(r);
            return this.adaptor.remove(r), o
        }, f.prototype.getMetricMaps = function (t) {
            var e, r, o, i, n, s, a, l, h, c, u = this.adaptor,
                p = [new Map, new Map];
            try {
                for (var d = j(t.math), f = d.next(); !f.done; f = d.next()) {
                    var y = f.value;
                    if ((w = u.parent(y.start.node)) && y.state() < P.STATE.METRICS) {
                        var m = p[y.display ? 1 : 0];
                        m.has(w) || m.set(w, this.getTestElement(w, y.display))
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    f && !f.done && (r = d.return) && r.call(d)
                } finally {
                    if (e) throw e.error
                }
            }
            var v = [new Map, new Map];
            try {
                for (var b = j(v.keys()), g = b.next(); !g.done; g = b.next()) {
                    var x = g.value;
                    try {
                        for (var _ = (n = void 0, j(p[x].keys())), M = _.next(); !M.done; M = _.next()) {
                            var w = M.value;
                            v[x].set(w, this.measureMetrics(p[x].get(w)))
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            M && !M.done && (s = _.return) && s.call(_)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    g && !g.done && (i = b.return) && i.call(b)
                } finally {
                    if (o) throw o.error
                }
            }
            try {
                for (var S = j(v.keys()), O = S.next(); !O.done; O = S.next()) {
                    x = O.value;
                    try {
                        for (var B = (h = void 0, j(p[x].values())), C = B.next(); !C.done; C = B.next()) w = C.value, u.remove(w)
                    } catch (t) {
                        h = {
                            error: t
                        }
                    } finally {
                        try {
                            C && !C.done && (c = B.return) && c.call(B)
                        } finally {
                            if (h) throw h.error
                        }
                    }
                }
            } catch (t) {
                a = {
                    error: t
                }
            } finally {
                try {
                    O && !O.done && (l = S.return) && l.call(S)
                } finally {
                    if (a) throw a.error
                }
            }
            return v
        }, f.prototype.getTestElement = function (t, e) {
            var r = this.adaptor;
            if (!this.testInline) {
                this.testInline = this.html("mjx-test", {
                    style: {
                        display: "inline-block",
                        width: "100%",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "font-size": "100%",
                        "font-size-adjust": "none",
                        "text-indent": 0,
                        "text-transform": "none",
                        "letter-spacing": "normal",
                        "word-spacing": "normal",
                        overflow: "hidden",
                        height: "1px",
                        "margin-right": "-1px"
                    }
                }, [this.html("mjx-left-box", {
                    style: {
                        display: "inline-block",
                        width: 0,
                        float: "left"
                    }
                }), this.html("mjx-ex-box", {
                    style: {
                        position: "absolute",
                        overflow: "hidden",
                        width: "1px",
                        height: "60ex"
                    }
                }), this.html("mjx-right-box", {
                    style: {
                        display: "inline-block",
                        width: 0,
                        float: "right"
                    }
                })]), this.testDisplay = r.clone(this.testInline), r.setStyle(this.testDisplay, "display", "table"), r.setStyle(this.testDisplay, "margin-right", ""), r.setStyle(r.firstChild(this.testDisplay), "display", "none");
                var o = r.lastChild(this.testDisplay);
                r.setStyle(o, "display", "table-cell"), r.setStyle(o, "width", "10000em"), r.setStyle(o, "float", "")
            }
            return r.append(t, r.clone(e ? this.testDisplay : this.testInline))
        }, f.prototype.measureMetrics = function (t) {
            var e = this.adaptor,
                r = e.fontSize(t),
                o = e.nodeSize(e.childNode(t, 1))[1] / 60 || r * this.options.exFactor;
            return {
                em: r,
                ex: o,
                containerWidth: "table" === e.getStyle(t, "display") ? e.nodeSize(e.lastChild(t))[0] - 1 : e.nodeBBox(e.lastChild(t)).left - e.nodeBBox(e.firstChild(t)).left - 2,
                lineWidth: 1e6,
                scale: Math.max(this.options.minScale, this.options.matchFontHeight ? o / this.font.params.x_height / r : 1)
            }
        }, f.prototype.styleSheet = function (t) {
            var e, r, o, i;
            if (this.setDocument(t), this.cssStyles.clear(), this.cssStyles.addStyles(this.constructor.commonStyles), "getStyles" in t) try {
                for (var n = j(t.getStyles()), s = n.next(); !s.done; s = n.next()) {
                    var a = s.value;
                    this.cssStyles.addStyles(a)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (r = n.return) && r.call(n)
                } finally {
                    if (e) throw e.error
                }
            }
            try {
                for (var l = j(this.factory.getKinds()), h = l.next(); !h.done; h = l.next()) {
                    var c = h.value;
                    this.addClassStyles(this.factory.getNodeClass(c))
                }
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    h && !h.done && (i = l.return) && i.call(l)
                } finally {
                    if (o) throw o.error
                }
            }
            return this.cssStyles.addStyles(this.font.styles), this.html("style", {
                id: "MJX-styles"
            }, [this.text("\n" + this.cssStyles.cssText + "\n")])
        }, f.prototype.addClassStyles = function (t) {
            this.cssStyles.addStyles(t.styles)
        }, f.prototype.setDocument = function (t) {
            t && (this.document = t, this.adaptor.document = t.document)
        }, f.prototype.html = function (t, e, r, o) {
            return void 0 === e && (e = {}), void 0 === r && (r = []), this.adaptor.node(t, e, r, o)
        }, f.prototype.text = function (t) {
            return this.adaptor.text(t)
        }, f.prototype.fixed = function (t, e) {
            return void 0 === e && (e = 3), Math.abs(t) < 6e-4 ? "0" : t.toFixed(e).replace(/\.?0+$/, "")
        }, f.prototype.measureText = function (t, e, r) {
            void 0 === r && (r = ["", !1, !1]);
            var o = this.unknownText(t, e);
            if ("-explicitFont" === e) {
                var i = this.cssFontStyles(r);
                this.adaptor.setAttributes(o, {
                    style: i
                })
            }
            return this.measureTextNodeWithCache(o, t, e, r)
        }, f.prototype.measureTextNodeWithCache = function (t, e, r, o) {
            void 0 === o && (o = ["", !1, !1]), "-explicitFont" === r && (r = [o[0], o[1] ? "T" : "F", o[2] ? "T" : "F", ""].join("-")), this.unknownCache.has(r) || this.unknownCache.set(r, new Map);
            var i = this.unknownCache.get(r),
                n = i.get(e);
            if (n) return n;
            var s = this.measureTextNode(t);
            return i.set(e, s), s
        }, f.prototype.measureXMLnode = function (t) {
            var e = this.adaptor,
                r = this.html("mjx-xml-block", {
                    style: {
                        display: "inline-block"
                    }
                }, [e.clone(t)]),
                o = this.html("mjx-baseline", {
                    style: {
                        display: "inline-block",
                        width: 0,
                        height: 0
                    }
                }),
                i = this.html("mjx-measure-xml", {
                    style: {
                        position: "absolute",
                        display: "inline-block",
                        "font-family": "initial",
                        "line-height": "normal"
                    }
                }, [o, r]);
            e.append(e.parent(this.math.start.node), this.container), e.append(this.container, i);
            var n = this.math.metrics.em * this.math.metrics.scale,
                s = e.nodeBBox(r),
                a = s.left,
                l = s.right,
                h = s.bottom,
                c = s.top,
                u = (l - a) / n,
                p = (e.nodeBBox(o).top - c) / n,
                d = (h - c) / n - p;
            return e.remove(this.container), e.remove(i), {
                w: u,
                h: p,
                d: d
            }
        }, f.prototype.cssFontStyles = function (t, e) {
            void 0 === e && (e = {});
            var r = a(t, 3),
                o = r[0],
                i = r[1],
                n = r[2];
            return e["font-family"] = o, i && (e["font-style"] = "italic"), n && (e["font-weight"] = "bold"), e
        }, f.prototype.getFontData = function (t) {
            return [(t = t || new p.Styles).get("font-family"), "italic" === t.get("font-style"), "bold" === t.get("font-weight")]
        }, f.NAME = "Common", f.OPTIONS = n(n({}, s.AbstractOutputJax.OPTIONS), {
            scale: 1,
            minScale: .5,
            matchFontHeight: !0,
            mtextInheritFont: !1,
            merrorInheritFont: !0,
            mathmlSpacing: !1,
            skipAttributes: {},
            exFactor: .5,
            displayAlign: "center",
            displayIndent: "0",
            wrapperFactory: null,
            font: null,
            cssStyles: null
        }), f.commonStyles = {}, f);

    function f(t, e, r) {
        void 0 === t && (t = null), void 0 === e && (e = null), void 0 === r && (r = null);
        var o = this,
            i = a(h.separateOptions(t, r.OPTIONS), 2),
            n = i[0],
            s = i[1];
        return (o = l.call(this, n) || this).factory = o.options.wrapperFactory || new e, (o.factory.jax = o).cssStyles = o.options.cssStyles || new c.CssStyles, o.font = o.options.font || new r(s), o.unknownCache = new Map, o
    }
    e.CommonOutputJax = d
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        c = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(77),
        l = r(3),
        h = r(4),
        u = r(10),
        p = r(72),
        d = r(1),
        f = r(2),
        y = 2 / 18;

    function m(t, e) {
        return t ? e < y ? 0 : y : e
    }
    var v, b = (v = a.AbstractWrapper, i(g, v), Object.defineProperty(g.prototype, "jax", {
        get: function () {
            return this.factory.jax
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(g.prototype, "adaptor", {
        get: function () {
            return this.factory.jax.adaptor
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(g.prototype, "metrics", {
        get: function () {
            return this.factory.jax.math.metrics
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(g.prototype, "fixesPWidth", {
        get: function () {
            return !this.node.notParent && !this.node.isToken
        },
        enumerable: !0,
        configurable: !0
    }), g.prototype.wrap = function (t, e) {
        void 0 === e && (e = null);
        var r = this.factory.wrap(t, e || this);
        return e && e.childNodes.push(r), this.jax.nodeMap.set(t, r), r
    }, g.prototype.getBBox = function (t) {
        if (void 0 === t && (t = !0), this.bboxComputed) return this.bbox;
        var e = t ? this.bbox : d.BBox.zero();
        return this.computeBBox(e), this.bboxComputed = t, e
    }, g.prototype.computeBBox = function (t, e) {
        var r, o;
        void 0 === e && (e = !1), t.empty();
        try {
            for (var i = c(this.childNodes), n = i.next(); !n.done; n = i.next()) {
                var s = n.value;
                t.append(s.getBBox())
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (o = i.return) && o.call(i)
            } finally {
                if (r) throw r.error
            }
        }
        t.clean(), this.fixesPWidth && this.setChildPWidths(e) && this.computeBBox(t, !0)
    }, g.prototype.setChildPWidths = function (t, e, r) {
        var o, i;
        if (void 0 === e && (e = null), void 0 === r && (r = !0), t) return !1;
        r && (this.bbox.pwidth = "");
        var n = !1;
        try {
            for (var s = c(this.childNodes), a = s.next(); !a.done; a = s.next()) {
                var l = a.value,
                    h = l.getBBox();
                h.pwidth && l.setChildPWidths(t, null === e ? h.w : e, r) && (n = !0)
            }
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                a && !a.done && (i = s.return) && i.call(s)
            } finally {
                if (o) throw o.error
            }
        }
        return n
    }, g.prototype.invalidateBBox = function () {
        this.bboxComputed && (this.bboxComputed = !1, this.parent && this.parent.invalidateBBox())
    }, g.prototype.copySkewIC = function (t) {
        var e = this.childNodes[0];
        e && e.bbox.sk && (t.sk = e.bbox.sk);
        var r = this.childNodes[this.childNodes.length - 1];
        r && r.bbox.ic && (t.ic = r.bbox.ic, t.w += t.ic)
    }, g.prototype.getStyles = function () {
        var t = this.node.attributes.getExplicit("style");
        if (t)
            for (var e = this.styles = new p.Styles(t), r = 0, o = g.removeStyles.length; r < o; r++) {
                var i = g.removeStyles[r];
                e.get(i) && (this.removedStyles || (this.removedStyles = {}), this.removedStyles[i] = e.get(i), e.set(i, ""))
            }
    }, g.prototype.getVariant = function () {
        if (this.node.isToken) {
            var t = this.node.attributes,
                e = t.get("mathvariant");
            if (!t.getExplicit("mathvariant")) {
                var r = t.getList("fontfamily", "fontweight", "fontstyle");
                if (this.removedStyles) {
                    var o = this.removedStyles;
                    o.fontFamily && (r.family = o.fontFamily), o.fontWeight && (r.weight = o.fontWeight), o.fontStyle && (r.style = o.fontStyle)
                }
                r.fontfamily && (r.family = r.fontfamily), r.fontweight && (r.weight = r.fontweight), r.fontstyle && (r.style = r.fontstyle), r.weight && r.weight.match(/^\d+$/) && (r.weight = 600 < parseInt(r.weight) ? "bold" : "normal"), e = r.family ? this.explicitVariant(r.family, r.weight, r.style) : (this.node.getProperty("variantForm") && (e = "-tex-variant"), e = (g.BOLDVARIANTS[r.weight] || {})[e] || e, (g.ITALICVARIANTS[r.style] || {})[e] || e)
            }
            this.variant = e
        }
    }, g.prototype.explicitVariant = function (t, e, r) {
        var o = this.styles;
        return (o = o || (this.styles = new p.Styles)).set("fontFamily", t), e && o.set("fontWeight", e), r && o.set("fontStyle", r), "-explicitFont"
    }, g.prototype.getScale = function () {
        var t = 1,
            e = this.parent,
            r = e ? e.bbox.scale : 1,
            o = this.node.attributes,
            i = Math.min(o.get("scriptlevel"), 2),
            n = o.get("fontsize"),
            s = this.node.isToken || this.node.isKind("mstyle") ? o.get("mathsize") : o.getInherited("mathsize");
        if (0 !== i) {
            t = Math.pow(o.get("scriptsizemultiplier"), i);
            var a = this.length2em(o.get("scriptminsize"), .8, 1);
            t < a && (t = a)
        }
        this.removedStyles && this.removedStyles.fontSize && !n && (n = this.removedStyles.fontSize), n && !s && (s = n), "1" !== s && (t *= this.length2em(s, 1, 1)), this.bbox.scale = t, this.bbox.rscale = t / r
    }, g.prototype.getSpace = function () {
        var t = this.isTopEmbellished(),
            e = this.node.hasSpacingAttributes();
        this.jax.options.mathmlSpacing || e ? t && this.getMathMLSpacing() : this.getTeXSpacing(t, e)
    }, g.prototype.getMathMLSpacing = function () {
        var t = this.node.coreMO(),
            e = t.attributes,
            r = 0 < e.get("scriptlevel");
        this.bbox.L = e.isSet("lspace") ? Math.max(0, this.length2em(e.get("lspace"))) : m(r, t.lspace), this.bbox.R = e.isSet("rspace") ? Math.max(0, this.length2em(e.get("rspace"))) : m(r, t.rspace)
    }, g.prototype.getTeXSpacing = function (t, e) {
        if (!e) {
            var r = this.node.texSpacing();
            r && (this.bbox.L = this.length2em(r))
        }
        if (t || e) {
            var o = this.node.coreMO().attributes;
            o.isSet("lspace") && (this.bbox.L = Math.max(0, this.length2em(o.get("lspace")))), o.isSet("rspace") && (this.bbox.R = Math.max(0, this.length2em(o.get("rspace"))))
        }
    }, g.prototype.isTopEmbellished = function () {
        return this.node.isEmbellished && !(this.node.Parent && this.node.Parent.isEmbellished)
    }, g.prototype.core = function () {
        return this.jax.nodeMap.get(this.node.core())
    }, g.prototype.coreMO = function () {
        return this.jax.nodeMap.get(this.node.coreMO())
    }, g.prototype.getText = function () {
        var e, t, r = "";
        if (this.node.isToken) try {
            for (var o = c(this.node.childNodes), i = o.next(); !i.done; i = o.next()) {
                var n = i.value;
                n instanceof l.TextNode && (r += n.getText())
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (t = o.return) && t.call(o)
            } finally {
                if (e) throw e.error
            }
        }
        return r
    }, g.prototype.canStretch = function (t) {
        if (this.stretch = f.NOSTRETCH, this.node.isEmbellished) {
            var e = this.core();
            e && e.node !== this.node && e.canStretch(t) && (this.stretch = e.stretch)
        }
        return 0 !== this.stretch.dir
    }, g.prototype.getAlignShift = function () {
        var t, e = (t = this.node.attributes).getList.apply(t, s(l.indentAttributes)),
            r = e.indentalign,
            o = e.indentshift,
            i = e.indentalignfirst,
            n = e.indentshiftfirst;
        return "indentalign" !== i && (r = i), "auto" === r && (r = this.jax.options.displayAlign), "indentshift" !== n && (o = n), "auto" === o && (o = this.jax.options.displayIndent, "right" !== r || o.match(/^\s*0[a-z]*\s*$/) || (o = ("-" + o.trim()).replace(/^--/, ""))), [r, this.length2em(o, this.metrics.containerWidth)]
    }, g.prototype.getAlignX = function (t, e, r) {
        return "right" === r ? t - (e.w + e.R) * e.rscale : "left" === r ? e.L * e.rscale : (t - e.w * e.rscale) / 2
    }, g.prototype.getAlignY = function (t, e, r, o, i) {
        return "top" === i ? t - r : "bottom" === i ? o - e : "middle" === i ? (t - r - (e - o)) / 2 : 0
    }, g.prototype.getWrapWidth = function (t) {
        return this.childNodes[t].getBBox().w
    }, g.prototype.getChildAlign = function (t) {
        return "left"
    }, g.prototype.percent = function (t) {
        return u.percent(t)
    }, g.prototype.em = function (t) {
        return u.em(t)
    }, g.prototype.px = function (t, e) {
        return void 0 === e && (e = -u.BIGDIMEN), u.px(t, e, this.metrics.em)
    }, g.prototype.length2em = function (t, e, r) {
        return void 0 === e && (e = 1), void 0 === r && (r = null), null === r && (r = this.bbox.scale), u.length2em(t, e, r, this.jax.pxPerEm)
    }, g.prototype.unicodeChars = function (t, e) {
        void 0 === e && (e = "");
        var r = h.unicodeChars(t),
            o = this.font.getVariant(e).chars;
        return o && (r = r.map(function (t) {
            return ((o[t] || [])[3] || {}).smp || t
        })), r
    }, g.prototype.remapChars = function (t) {
        return t
    }, g.prototype.mmlText = function (t) {
        return this.node.factory.create("text").setText(t)
    }, g.prototype.mmlNode = function (t, e, r) {
        return void 0 === e && (e = {}), void 0 === r && (r = []), this.node.factory.create(t, e, r)
    }, g.prototype.createMo = function (t) {
        var e = this.node.factory,
            r = e.create("text").setText(t),
            o = e.create("mo", {
                stretchy: !0
            }, [r]);
        o.inheritAttributesFrom(this.node);
        var i = this.wrap(o);
        return i.parent = this, i
    }, g.prototype.getVariantChar = function (t, e) {
        var r = this.font.getChar(t, e) || [0, 0, 0, {
            unknown: !0
        }];
        return 3 === r.length && (r[3] = {}), r
    }, g.kind = "unknown", g.styles = {}, g.removeStyles = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "font"], g.skipAttributes = {
        fontfamily: !0,
        fontsize: !0,
        fontweight: !0,
        fontstyle: !0,
        color: !0,
        background: !0,
        class: !0,
        href: !0,
        style: !0,
        xmlns: !0
    }, g.BOLDVARIANTS = {
        bold: {
            normal: "bold",
            italic: "bold-italic",
            fraktur: "bold-fraktur",
            script: "bold-script",
            "sans-serif": "bold-sans-serif",
            "sans-serif-italic": "sans-serif-bold-italic"
        },
        normal: {
            bold: "normal",
            "bold-italic": "italic",
            "bold-fraktur": "fraktur",
            "bold-script": "script",
            "bold-sans-serif": "sans-serif",
            "sans-serif-bold-italic": "sans-serif-italic"
        }
    }, g.ITALICVARIANTS = {
        italic: {
            normal: "italic",
            bold: "bold-italic",
            "sans-serif": "sans-serif-italic",
            "bold-sans-serif": "sans-serif-bold-italic"
        },
        normal: {
            italic: "normal",
            "bold-italic": "bold",
            "sans-serif-italic": "sans-serif",
            "sans-serif-bold-italic": "bold-sans-serif"
        }
    }, g);

    function g(t, r, e) {
        void 0 === e && (e = null);
        var o = v.call(this, t, r) || this;
        return o.parent = null, o.removedStyles = null, o.styles = null, o.variant = "", o.bboxComputed = !1, o.stretch = f.NOSTRETCH, o.font = null, o.parent = e, o.font = t.jax.font, o.bbox = d.BBox.zero(), o.getStyles(), o.getVariant(), o.getScale(), o.getSpace(), o.childNodes = r.childNodes.map(function (t) {
            var e = o.wrap(t);
            return e.bbox.pwidth && (r.notParent || r.isKind("math")) && (o.bbox.pwidth = d.BBox.fullWidth), e
        }), o
    }
    e.CommonWrapper = b
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(78),
        a = (n = s.AbstractWrapperFactory, i(l, n), Object.defineProperty(l.prototype, "Wrappers", {
            get: function () {
                return this.node
            },
            enumerable: !0,
            configurable: !0
        }), l.defaultNodes = {}, l);

    function l() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.jax = null, t
    }
    e.CommonWrapperFactory = a
}, function (t, e, r) {
    "use strict";
    var o, n = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = r(3);
    e.CommonTeXAtomMixin = function (t) {
        return n(e, i = t), e.prototype.computeBBox = function (t, e) {
            if (void 0 === e && (e = !1), i.prototype.computeBBox.call(this, t, e), this.childNodes[0] && this.childNodes[0].bbox.ic && (t.ic = this.childNodes[0].bbox.ic), this.node.texClass === s.TEXCLASS.VCENTER) {
                var r = t.h,
                    o = (r + t.d) / 2 + this.font.params.axis_height - r;
                t.h += o, t.d -= o
            }
        }, e;

        function e() {
            return null !== i && i.apply(this, arguments) || this
        }
        var i
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        g = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        x = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonTextNodeMixin = function (t) {
        return i(e, r = t), e.prototype.computeBBox = function (t, e) {
            var r, o;
            void 0 === e && (e = !1);
            var i = this.parent.variant,
                n = this.node.getText();
            if ("-explicitFont" === i) {
                var s = this.jax.getFontData(this.parent.styles),
                    a = this.jax.measureText(n, i, s),
                    l = a.w,
                    h = a.h,
                    c = a.d;
                t.h = h, t.d = c, t.w = l
            } else {
                var u = this.parent.stretch.c,
                    p = this.parent.remapChars(u ? [u] : this.unicodeChars(n, i));
                t.empty();
                try {
                    for (var d = g(p), f = d.next(); !f.done; f = d.next()) {
                        var y = f.value,
                            m = x(this.getVariantChar(i, y), 4),
                            v = (h = m[0], c = m[1], l = m[2], m[3]);
                        if (v.unknown) {
                            var b = this.jax.measureText(String.fromCodePoint(y), i);
                            l = b.w, h = b.h, c = b.d
                        }
                        t.w += l, h > t.h && (t.h = h), c > t.d && (t.d = c), t.ic = v.ic || 0, t.sk = v.sk || 0
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (o = d.return) && o.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
                1 < p.length && (t.sk = 0), t.clean()
            }
        }, e.prototype.getStyles = function () {}, e.prototype.getVariant = function () {}, e.prototype.getScale = function () {}, e.prototype.getSpace = function () {}, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMathMixin = function (t) {
        return i(e, r = t), e.prototype.getWrapWidth = function (t) {
            return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        p = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        n = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
            return t
        },
        u = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = r(5),
        h = r(4);
    e.CommonMencloseMixin = function (t) {
        return i(e, o = t), e.prototype.getParameters = function () {
            var t = this.node.attributes,
                e = t.get("data-padding");
            void 0 !== e && (this.padding = this.length2em(e, l.PADDING));
            var r = t.get("data-thickness");
            void 0 !== r && (this.thickness = this.length2em(r, l.THICKNESS));
            var o = t.get("data-arrowhead");
            if (void 0 !== o) {
                var i = p(h.split(o), 3),
                    n = i[0],
                    s = i[1],
                    a = i[2];
                this.arrowhead = {
                    x: n ? parseFloat(n) : l.ARROWX,
                    y: s ? parseFloat(s) : l.ARROWY,
                    dx: a ? parseFloat(a) : l.ARROWDX
                }
            }
        }, e.prototype.getNotations = function () {
            var e, t, r = this.constructor.notations;
            try {
                for (var o = u(h.split(this.node.attributes.get("notation"))), i = o.next(); !i.done; i = o.next()) {
                    var n = i.value,
                        s = r.get(n);
                    s && (this.notations[n] = s).renderChild && (this.renderChild = s.renderer)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (t = o.return) && t.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
        }, e.prototype.removeRedundantNotations = function () {
            var e, t, r, o;
            try {
                for (var i = u(Object.keys(this.notations)), n = i.next(); !n.done; n = i.next()) {
                    var s = n.value;
                    if (this.notations[s]) {
                        var a = this.notations[s].remove || "";
                        try {
                            for (var l = (r = void 0, u(a.split(/ /))), h = l.next(); !h.done; h = l.next()) {
                                var c = h.value;
                                delete this.notations[c]
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (o = l.return) && o.call(l)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
        }, e.prototype.initializeNotations = function () {
            var e, t;
            try {
                for (var r = u(Object.keys(this.notations)), o = r.next(); !o.done; o = r.next()) {
                    var i = o.value,
                        n = this.notations[i].init;
                    n && n(this)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (t = r.return) && t.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = p(this.getBBoxExtenders(), 4),
                o = r[0],
                i = r[1],
                n = r[2],
                s = r[3],
                a = this.childNodes[0].getBBox();
            t.combine(a, s, 0), t.h += o, t.d += n, t.w += i, this.setChildPWidths(e)
        }, e.prototype.getBBoxExtenders = function () {
            var e, t, r = [0, 0, 0, 0];
            try {
                for (var o = u(Object.keys(this.notations)), i = o.next(); !i.done; i = o.next()) {
                    var n = i.value;
                    this.maximizeEntries(r, this.notations[n].bbox(this))
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (t = o.return) && t.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return r
        }, e.prototype.getPadding = function () {
            var e, t, r = [0, 0, 0, 0],
                o = [0, 0, 0, 0];
            try {
                for (var i = u(Object.keys(this.notations)), n = i.next(); !n.done; n = i.next()) {
                    var s = n.value;
                    this.maximizeEntries(r, this.notations[s].bbox(this));
                    var a = this.notations[s].border;
                    a && this.maximizeEntries(o, a(this))
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
            return [0, 1, 2, 3].map(function (t) {
                return r[t] - o[t]
            })
        }, e.prototype.maximizeEntries = function (t, e) {
            for (var r = 0; r < t.length; r++) t[r] < e[r] && (t[r] = e[r])
        }, e.prototype.getArgMod = function (t, e) {
            return [Math.atan2(e, t), Math.sqrt(t * t + e * e)]
        }, e.prototype.arrow = function (t, e, r) {
            return void 0 === r && (r = !1), null
        }, e.prototype.arrowData = function () {
            var t = p([this.padding, this.thickness], 2),
                e = t[0],
                r = t[1] * (this.arrowhead.x + Math.max(1, this.arrowhead.dx)),
                o = this.childNodes[0].getBBox(),
                i = o.h,
                n = o.d,
                s = o.w,
                a = i + n,
                l = Math.sqrt(a * a + s * s),
                h = Math.max(e, r * s / l),
                c = Math.max(e, r * a / l),
                u = p(this.getArgMod(s + 2 * h, a + 2 * c), 2);
            return {
                a: u[0],
                W: u[1],
                x: h,
                y: c
            }
        }, e.prototype.createMsqrt = function (t) {
            var e = this.node.factory.create("msqrt");
            e.inheritAttributesFrom(this.node), e.childNodes[0] = t.node;
            var r = this.wrap(e);
            return r.parent = this, r
        }, e.prototype.sqrtTRBL = function () {
            var t = this.msqrt.getBBox(),
                e = this.msqrt.childNodes[0].getBBox();
            return [t.h - e.h, 0, t.d - e.d, t.w - e.w]
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = o.apply(this, n(t)) || this;
            return r.notations = {}, r.renderChild = null, r.msqrt = null, r.padding = l.PADDING, r.thickness = l.THICKNESS, r.arrowhead = {
                x: l.ARROWX,
                y: l.ARROWY,
                dx: l.ARROWDX
            }, r.getParameters(), r.getNotations(), r.removeRedundantNotations(), r.initializeNotations(), r
        }
        var o
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        },
        l = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMfencedMixin = function (t) {
        return i(e, o = t), e.prototype.createMrow = function () {
            var t = this.node.factory.create("inferredMrow");
            t.inheritAttributesFrom(this.node), this.mrow = this.wrap(t), this.mrow.parent = this
        }, e.prototype.addMrowChildren = function () {
            var e, t, r = this.node,
                o = this.mrow;
            this.addMo(r.open), this.childNodes.length && o.childNodes.push(this.childNodes[0]);
            var i = 0;
            try {
                for (var n = l(this.childNodes.slice(1)), s = n.next(); !s.done; s = n.next()) {
                    var a = s.value;
                    this.addMo(r.separators[i++]), o.childNodes.push(a)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (t = n.return) && t.call(n)
                } finally {
                    if (e) throw e.error
                }
            }
            this.addMo(r.close), o.stretchChildren()
        }, e.prototype.addMo = function (t) {
            if (t) {
                var e = this.wrap(t);
                this.mrow.childNodes.push(e), e.parent = this.mrow
            }
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1), t.updateFrom(this.mrow.getBBox()), this.setChildPWidths(e)
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = o.apply(this, s(t)) || this;
            return r.mrow = null, r.createMrow(), r.addMrowChildren(), r
        }
        var o
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(h(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMfracMixin = function (t) {
        return i(e, n = t), e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1), t.empty();
            var r = this.node.attributes.getList("linethickness", "bevelled"),
                o = r.linethickness,
                i = r.bevelled,
                n = this.isDisplay(),
                s = null;
            if (i) this.getBevelledBBox(t, n);
            else {
                var a = this.length2em(String(o), .06);
                s = -2 * this.pad, 0 === a ? this.getAtopBBox(t, n) : (this.getFractionBBox(t, n, a), s -= .2), s += t.w
            }
            t.clean(), this.setChildPWidths(e, s)
        }, e.prototype.getFractionBBox = function (t, e, r) {
            var o = this.childNodes[0].getBBox(),
                i = this.childNodes[1].getBBox(),
                n = this.font.params.axis_height,
                s = this.getTUV(e, r),
                a = s.T,
                l = s.u,
                h = s.v;
            t.combine(o, 0, n + a + Math.max(o.d * o.rscale, l)), t.combine(i, 0, n - a - Math.max(i.h * i.rscale, h)), t.w += 2 * this.pad + .2
        }, e.prototype.getTUV = function (t, e) {
            var r = this.font.params,
                o = r.axis_height,
                i = (t ? 3.5 : 1.5) * e;
            return {
                T: (t ? 3.5 : 1.5) * e,
                u: (t ? r.num1 : r.num2) - o - i,
                v: (t ? r.denom1 : r.denom2) + o - i
            }
        }, e.prototype.getAtopBBox = function (t, e) {
            this.font.params;
            var r = this.getUVQ(e),
                o = r.u,
                i = r.v,
                n = r.nbox,
                s = r.dbox;
            t.combine(n, 0, o), t.combine(s, 0, -i), t.w += 2 * this.pad
        }, e.prototype.getUVQ = function (t) {
            var e = this.childNodes[0].getBBox(),
                r = this.childNodes[1].getBBox(),
                o = this.font.params,
                i = h(t ? [o.num1, o.denom1] : [o.num3, o.denom2], 2),
                n = i[0],
                s = i[1],
                a = (t ? 7 : 3) * o.rule_thickness,
                l = n - e.d * e.scale - (r.h * r.scale - s);
            return l < a && (n += (a - l) / 2, s += (a - l) / 2, l = a), {
                u: n,
                v: s,
                q: l,
                nbox: e,
                dbox: r
            }
        }, e.prototype.getBevelledBBox = function (t, e) {
            var r = this.getBevelData(e),
                o = r.u,
                i = r.v,
                n = r.delta,
                s = r.nbox,
                a = r.dbox,
                l = this.bevel.getBBox();
            t.combine(s, 0, o), t.combine(l, t.w - n / 2, 0), t.combine(a, t.w - n / 2, i)
        }, e.prototype.getBevelData = function (t) {
            var e = this.childNodes[0].getBBox(),
                r = this.childNodes[1].getBBox(),
                o = t ? .4 : .15,
                i = Math.max(e.scale * (e.h + e.d), r.scale * (r.h + r.d)) + 2 * o,
                n = this.font.params.axis_height;
            return {
                H: i,
                delta: o,
                u: e.scale * (e.d - e.h) / 2 + n + o,
                v: r.scale * (r.d - r.h) / 2 + n - o,
                nbox: e,
                dbox: r
            }
        }, e.prototype.canStretch = function (t) {
            return !1
        }, e.prototype.isDisplay = function () {
            var t = this.node.attributes.getList("displaystyle", "scriptlevel"),
                e = t.displaystyle,
                r = t.scriptlevel;
            return e && 0 === r
        }, e.prototype.getWrapWidth = function (t) {
            var e = this.node.attributes;
            return e.get("bevelled") ? this.childNodes[t].getBBox().w : this.getBBox().w - (this.length2em(e.get("linethickness")) ? .2 : 0) - 2 * this.pad
        }, e.prototype.getChildAlign = function (t) {
            var e = this.node.attributes;
            return e.get("bevelled") ? "left" : e.get(["numalign", "denomalign"][t])
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = n.apply(this, s(t)) || this;
            if (r.bevel = null, r.pad = r.node.getProperty("withDelims") ? 0 : r.font.params.nulldelimiterspace, r.node.attributes.get("bevelled")) {
                var o = r.getBevelData(r.isDisplay()).H,
                    i = r.bevel = r.createMo("/");
                i.canStretch(1), i.getStretchedVariant([o], !0)
            }
            return r
        }
        var n
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMglyphMixin = function (t) {
        return i(e, o = t), e.prototype.getParameters = function () {
            var t = this.node.attributes.getList("width", "height", "valign"),
                e = t.width,
                r = t.height,
                o = t.valign;
            this.width = "auto" === e ? 1 : this.length2em(e), this.height = "auto" === r ? 1 : this.length2em(r), this.valign = this.length2em(o || "0")
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1), t.w = this.width, t.h = this.height + this.valign, t.d = -this.valign
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = o.apply(this, s(t)) || this;
            return r.getParameters(), r
        }
        var o
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMiMixin = function (t) {
        return i(e, r = t), e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1), r.prototype.computeBBox.call(this, t), this.copySkewIC(t), this.noIC && (t.w -= t.ic)
        }, e;

        function e() {
            var t = null !== r && r.apply(this, arguments) || this;
            return t.noIC = !1, t
        }
        var r
    }
}, function (t, a, e) {
    "use strict";
    var o, r = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        f = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        h = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var i = e(1);
    a.NextScript = {
        base: "subList",
        subList: "supList",
        supList: "subList",
        psubList: "psupList",
        psupList: "psubList"
    }, a.ScriptNames = ["sup", "sup", "psup", "psub"], a.CommonMmultiscriptsMixin = function (t) {
        return r(e, l = t), e.prototype.combinePrePost = function (t, e) {
            var r = new i.BBox(t);
            return r.combine(e, 0, 0), r
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = this.font.params.scriptspace,
                o = this.getScriptData(),
                i = this.combinePrePost(o.sub, o.psub),
                n = this.combinePrePost(o.sup, o.psup),
                s = f(this.getUVQ(o.base, i, n), 2),
                a = s[0],
                l = s[1];
            if (t.empty(), o.numPrescripts && (t.combine(o.psup, r, a), t.combine(o.psub, r, l)), t.append(o.base), o.numScripts) {
                var h = t.w;
                t.combine(o.sup, h, a), t.combine(o.sub, h, l), t.w += r
            }
            t.clean(), this.setChildPWidths(e)
        }, e.prototype.getScriptData = function () {
            if (this.scriptData) return this.scriptData;
            var t = this.scriptData = {
                    base: null,
                    sub: i.BBox.empty(),
                    sup: i.BBox.empty(),
                    psub: i.BBox.empty(),
                    psup: i.BBox.empty(),
                    numPrescripts: 0,
                    numScripts: 0
                },
                e = this.getScriptBBoxLists();
            return this.combineBBoxLists(t.sub, t.sup, e.subList, e.supList), this.combineBBoxLists(t.psub, t.psup, e.psubList, e.psupList), this.scriptData.base = e.base[0], this.scriptData.numPrescripts = e.psubList.length, this.scriptData.numScripts = e.subList.length, this.scriptData
        }, e.prototype.getScriptBBoxLists = function () {
            var e, t, r = {
                    base: [],
                    subList: [],
                    supList: [],
                    psubList: [],
                    psupList: []
                },
                o = "base";
            try {
                for (var i = h(this.childNodes), n = i.next(); !n.done; n = i.next()) {
                    var s = n.value;
                    o = s.node.isKind("mprescripts") ? "psubList" : (r[o].push(s.getBBox()), a.NextScript[o])
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (t = i.return) && t.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
            return this.firstPrescript = r.subList.length + r.supList.length + 2, this.padLists(r.subList, r.supList), this.padLists(r.psubList, r.psupList), r
        }, e.prototype.padLists = function (t, e) {
            t.length > e.length && e.push(i.BBox.empty())
        }, e.prototype.combineBBoxLists = function (t, e, r, o) {
            for (var i = 0; i < r.length; i++) {
                var n = f(this.getScaledWHD(r[i]), 3),
                    s = n[0],
                    a = n[1],
                    l = n[2],
                    h = f(this.getScaledWHD(o[i]), 3),
                    c = h[0],
                    u = h[1],
                    p = h[2],
                    d = Math.max(s, c);
                t.w += d, e.w += d, a > t.h && (t.h = a), l > t.d && (t.d = l), u > e.h && (e.h = u), p > e.d && (e.d = p)
            }
        }, e.prototype.getScaledWHD = function (t) {
            var e = t.w,
                r = t.h,
                o = t.d,
                i = t.rscale;
            return [e * i, r * i, o * i]
        }, e.prototype.getUVQ = function (t, e, r) {
            var o;
            if (!this.UVQ) {
                var i = f([0, 0, 0], 3),
                    n = i[0],
                    s = i[1],
                    a = i[2];
                0 === e.h && 0 === e.d ? n = this.getU(t, r) : 0 === r.h && 0 === r.d ? n = -this.getV(t, e) : (n = (o = f(l.prototype.getUVQ.call(this, t, e, r), 3))[0], s = o[1], a = o[2]), this.UVQ = [n, s, a]
            }
            return this.UVQ
        }, e;

        function e() {
            var t = null !== l && l.apply(this, arguments) || this;
            return t.scriptData = null, t.firstPrescript = 0, t
        }
        var l
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMnMixin = function (t) {
        return i(e, r = t), e.prototype.remapChars = function (t) {
            if (t.length) {
                var e = this.font.getRemappedChar("mn", t[0]);
                if (e) {
                    var r = this.unicodeChars(e, this.variant);
                    1 === r.length ? t[0] = r[0] : t = r.concat(t.slice(1))
                }
            }
            return t
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i, n = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        y = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
            return t
        },
        d = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(2);
    e.DirectionVH = ((i = {})[1] = "v", i[2] = "h", i), e.CommonMoMixin = function (t) {
        return n(e, i = t), e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = 0 !== this.stretch.dir;
            if (r && null === this.size && this.getStretchedVariant([0]), !(r && this.size < 0) && (i.prototype.computeBBox.call(this, t), this.copySkewIC(t), this.noIC && (t.w -= t.ic), this.node.attributes.get("symmetric") && 2 !== this.stretch.dir)) {
                var o = (t.h + t.d) / 2 + this.font.params.axis_height - t.h;
                t.h += o, t.d -= o
            }
        }, e.prototype.getVariant = function () {
            this.node.attributes.get("largeop") ? this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop" : i.prototype.getVariant.call(this)
        }, e.prototype.canStretch = function (t) {
            if (0 !== this.stretch.dir) return this.stretch.dir === t;
            if (!this.node.attributes.get("stretchy")) return !1;
            var e = this.getText();
            if (1 !== e.length) return !1;
            var r = this.font.getDelimiter(e.charCodeAt(0));
            return this.stretch = r && r.dir === t ? r : a.NOSTRETCH, 0 !== this.stretch.dir
        }, e.prototype.getStretchedVariant = function (t, e) {
            var r, o;
            if (void 0 === e && (e = !1), 0 !== this.stretch.dir) {
                var i = this.getWH(t),
                    n = this.getSize("minsize", 0),
                    s = this.getSize("maxsize", 1 / 0);
                i = Math.max(n, Math.min(s, i));
                var a = n || e ? i : Math.max(i * this.font.params.delimiterfactor / 1e3, i - this.font.params.delimitershortfall),
                    l = this.stretch,
                    h = l.c || this.getText().charCodeAt(0),
                    c = 0;
                if (l.sizes) try {
                    for (var u = d(l.sizes), p = u.next(); !p.done; p = u.next()) {
                        if (a <= p.value) return this.variant = this.font.getSizeVariant(h, c), void(this.size = c);
                        c++
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        p && !p.done && (o = u.return) && o.call(u)
                    } finally {
                        if (r) throw r.error
                    }
                }
                l.stretch ? (this.size = -1, this.invalidateBBox(), this.getStretchBBox(t, i, l)) : (this.variant = this.font.getSizeVariant(h, c - 1), this.size = c - 1)
            }
        }, e.prototype.getSize = function (t, e) {
            var r = this.node.attributes;
            return r.isSet(t) && (e = this.length2em(r.get(t), 1, 1)), e
        }, e.prototype.getWH = function (t) {
            if (0 === t.length) return 0;
            if (1 === t.length) return t[0];
            var e = y(t, 2),
                r = e[0],
                o = e[1],
                i = this.font.params.axis_height;
            return this.node.attributes.get("symmetric") ? 2 * Math.max(r - i, o + i) : r + o
        }, e.prototype.getStretchBBox = function (t, e, r) {
            var o;
            r.hasOwnProperty("min") && r.min > e && (e = r.min);
            var i = y(r.HDW, 3),
                n = i[0],
                s = i[1],
                a = i[2];
            1 === this.stretch.dir ? (n = (o = y(this.getBaseline(t, e, r), 2))[0], s = o[1]) : a = e, this.bbox.h = n, this.bbox.d = s, this.bbox.w = a
        }, e.prototype.getBaseline = function (t, e, r) {
            var o = 2 === t.length && t[0] + t[1] === e,
                i = this.node.attributes.get("symmetric"),
                n = y(o ? t : [e, 0], 2),
                s = n[0],
                a = n[1],
                l = y([s + a, 0], 2),
                h = l[0],
                c = l[1];
            if (i) {
                var u = this.font.params.axis_height;
                o && (h = 2 * Math.max(s - u, a + u)), c = h / 2 - u
            } else if (o) c = a;
            else {
                var p = y(r.HDW || [.75, .25], 2),
                    d = p[0],
                    f = p[1];
                c = f * (h / (d + f))
            }
            return [h - c, c]
        }, e.prototype.remapChars = function (t) {
            if (1 === t.length) {
                var e = this.node.coreParent().parent,
                    r = this.isAccent && !e.isKind("mrow") ? "accent" : "mo",
                    o = this.font.getRemappedChar(r, t[0]);
                o && (t = this.unicodeChars(o, this.variant))
            }
            return t
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = i.apply(this, s(t)) || this;
            return r.noIC = !1, r.size = null, r.isAccent = r.node.isAccent, r
        }
        var i
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMpaddedMixin = function (t) {
        return i(e, r = t), e.prototype.getDimens = function () {
            var t = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset"),
                e = this.childNodes[0].getBBox(),
                r = e.w,
                o = e.h,
                i = e.d,
                n = r,
                s = o,
                a = i,
                l = 0,
                h = 0,
                c = 0;
            "" !== t.width && (r = this.dimen(t.width, e, "w", 0)), "" !== t.height && (o = this.dimen(t.height, e, "h", 0)), "" !== t.depth && (i = this.dimen(t.depth, e, "d", 0)), "" !== t.voffset && (h = this.dimen(t.voffset, e)), "" !== t.lspace && (l = this.dimen(t.lspace, e));
            var u = this.node.attributes.get("data-align");
            return u && (c = this.getAlignX(r, e, u)), [s, a, n, o - s, i - a, r - n, l, h, c]
        }, e.prototype.dimen = function (t, e, r, o) {
            void 0 === r && (r = ""), void 0 === o && (o = null);
            var i = (t = String(t)).match(/width|height|depth/),
                n = i ? e[i[0].charAt(0)] : r ? e[r] : 0,
                s = this.length2em(t, n) || 0;
            return t.match(/^[-+]/) && r && (s += n), null != o && (s = Math.max(o, s)), s
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = h(this.getDimens(), 8),
                o = r[0],
                i = r[1],
                n = r[2],
                s = r[3],
                a = r[4],
                l = r[5];
            r[6], r[7], t.w = n + l, t.h = o + s, t.d = i + a, this.setChildPWidths(e, t.w)
        }, e.prototype.getWrapWidth = function (t) {
            return this.getBBox().w
        }, e.prototype.getChildAlign = function (t) {
            return this.node.attributes.get("data-align") || "left"
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        s = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMrootMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "surd", {
            get: function () {
                return 2
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "root", {
            get: function () {
                return 1
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.combineRootBBox = function (t, e, r) {
            var o = this.childNodes[this.root].getBBox(),
                i = s(this.getRootDimens(e, r), 2),
                n = (i[0], i[1]);
            t.combine(o, 0, n)
        }, e.prototype.getRootDimens = function (t, e) {
            var r = this.childNodes[this.surd],
                o = this.childNodes[this.root].getBBox(),
                i = (r.size < 0 ? .5 : .6) * t.w,
                n = o.w,
                s = o.rscale,
                a = Math.max(n, i / s),
                l = Math.max(0, a - n);
            return [a * s - i, this.rootHeight(o, t, r.size, e), l]
        }, e.prototype.rootHeight = function (t, e, r, o) {
            var i = e.h + e.d;
            return (r < 0 ? 1.9 : .55 * i) - (i - o) + Math.max(0, t.d * t.rscale)
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMsMixin = function (t) {
        return i(e, n = t), e.prototype.createText = function (t) {
            var e = this.wrap(this.mmlText(t));
            return e.parent = this, e
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = n.apply(this, s(t)) || this,
                o = r.node.attributes,
                i = o.getList("lquote", "rquote");
            return "monospace" !== r.variant && (o.isSet("lquote") || '"' !== i.lquote || (i.lquote = "\u201c"), o.isSet("rquote") || '"' !== i.rquote || (i.rquote = "\u201d")), r.childNodes.unshift(r.createText(i.lquote)), r.childNodes.push(r.createText(i.rquote)), r
        }
        var n
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMspaceMixin = function (t) {
        return i(e, r = t), e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = this.node.attributes;
            t.w = this.length2em(r.get("width"), 0), t.h = this.length2em(r.get("height"), 0), t.d = this.length2em(r.get("depth"), 0)
        }, e.prototype.handleVariant = function () {}, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        c = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        u = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var p = r(1);
    e.CommonMsqrtMixin = function (t) {
        return i(e, h = t), Object.defineProperty(e.prototype, "base", {
            get: function () {
                return 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "surd", {
            get: function () {
                return 1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "root", {
            get: function () {
                return null
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.createMo = function (t) {
            var e = h.prototype.createMo.call(this, t);
            return this.childNodes.push(e), e
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = this.childNodes[this.surd].getBBox(),
                o = new p.BBox(this.childNodes[this.base].getBBox()),
                i = c(this.getPQ(r), 2),
                n = (i[0], i[1]),
                s = this.font.params.rule_thickness,
                a = o.h + n + s,
                l = c(this.getRootDimens(r, a), 1)[0];
            t.h = a + s, this.combineRootBBox(t, r, a), t.combine(r, l, a - r.h), t.combine(o, l + r.w, 0), t.clean(), this.setChildPWidths(e)
        }, e.prototype.combineRootBBox = function (t, e, r) {}, e.prototype.getPQ = function (t) {
            var e = this.font.params.rule_thickness,
                r = this.node.attributes.get("displaystyle") ? this.font.params.x_height : e;
            return [r, t.h + t.d > this.surdH ? (t.h + t.d - (this.surdH - 2 * e - r / 2)) / 2 : e + r / 4]
        }, e.prototype.getRootDimens = function (t, e) {
            return [0, 0, 0, 0]
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = h.apply(this, u(t)) || this,
                o = r.createMo("\u221a");
            o.canStretch(1);
            var i = r.childNodes[r.base].getBBox(),
                n = i.h,
                s = i.d,
                a = r.font.params.rule_thickness,
                l = r.node.attributes.get("displaystyle") ? r.font.params.x_height : a;
            return r.surdH = n + s + 2 * a + l / 4, o.getStretchedVariant([r.surdH - s, s], !0), r
        }
        var h
    }
}, function (t, e, r) {
    "use strict";
    var o, n = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        m = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
            return t
        },
        M = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(1),
        v = r(4),
        b = r(79);
    e.CommonMtableMixin = function (t) {
        return n(e, i = t), Object.defineProperty(e.prototype, "tableRows", {
            get: function () {
                return this.childNodes
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.findContainer = function () {
            for (var t = this, e = t.parent; e && (e.node.notParent || e.node.isKind("mrow"));) e = (t = e).parent;
            this.container = e, this.containerI = t.node.childPosition()
        }, e.prototype.getPercentageWidth = function () {
            if (this.hasLabels) this.bbox.pwidth = a.BBox.fullWidth;
            else {
                var t = this.node.attributes.get("width");
                v.isPercent(t) && (this.bbox.pwidth = t)
            }
        }, e.prototype.stretchRows = function () {
            for (var t = this.node.attributes.get("equalrows"), e = t ? this.getEqualRowHeight() : 0, r = t ? this.getTableData() : {
                    H: [0],
                    D: [0]
                }, o = r.H, i = r.D, n = this.tableRows, s = 0; s < this.numRows; s++) {
                var a = t ? [(e + o[s] - i[s]) / 2, (e - o[s] + i[s]) / 2] : null;
                n[s].stretchChildren(a)
            }
        }, e.prototype.stretchColumns = function () {
            for (var t = 0; t < this.numCols; t++) {
                var e = "number" == typeof this.cWidths[t] ? this.cWidths[t] : null;
                this.stretchColumn(t, e)
            }
        }, e.prototype.stretchColumn = function (t, e) {
            var r, o, i, n, s, a, l = [];
            try {
                for (var h = M(this.tableRows), c = h.next(); !c.done; c = h.next())(m = c.value.getChild(t)) && 0 === (_ = m.childNodes[0]).stretch.dir && _.canStretch(2) && l.push(_)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    c && !c.done && (o = h.return) && o.call(h)
                } finally {
                    if (r) throw r.error
                }
            }
            var u = l.length,
                p = this.childNodes.length;
            if (u && 1 < p) {
                if (null === e) {
                    e = 0;
                    var d = 1 < u && u === p;
                    try {
                        for (var f = M(this.tableRows), y = f.next(); !y.done; y = f.next()) {
                            var m;
                            if (m = y.value.getChild(t)) {
                                var v = 0 === (_ = m.childNodes[0]).stretch.dir;
                                if (d || v) {
                                    var b = _.getBBox(v).w;
                                    e < b && (e = b)
                                }
                            }
                        }
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            y && !y.done && (n = f.return) && n.call(f)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                }
                try {
                    for (var g = M(l), x = g.next(); !x.done; x = g.next()) {
                        var _;
                        (_ = x.value).coreMO().getStretchedVariant([e])
                    }
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        x && !x.done && (a = g.return) && a.call(g)
                    } finally {
                        if (s) throw s.error
                    }
                }
            }
        }, e.prototype.getTableData = function () {
            if (this.data) return this.data;
            for (var t = new Array(this.numRows).fill(0), e = new Array(this.numRows).fill(0), r = new Array(this.numCols).fill(0), o = new Array(this.numRows), i = new Array(this.numRows), n = [0], s = this.tableRows, a = 0; a < s.length; a++) {
                for (var l = s[a], h = 0; h < l.numCells; h++) {
                    var c = l.getChild(h);
                    this.updateHDW(c, h, a, t, e, r), this.recordPWidthCell(c, h)
                }
                o[a] = t[a], i[a] = e[a], l.labeled && this.updateHDW(l.childNodes[0], 0, a, t, e, n)
            }
            this.node.attributes.get("width");
            var u = n[0];
            return this.data = {
                H: t,
                D: e,
                W: r,
                NH: o,
                ND: i,
                L: u
            }, this.data
        }, e.prototype.updateHDW = function (t, e, r, o, i, n) {
            void 0 === n && (n = null);
            var s = t.getBBox(),
                a = s.h,
                l = s.d,
                h = s.w;
            s.pwidth, a < .75 && (a = .75), l < .25 && (l = .25), a > o[r] && (o[r] = a), l > i[r] && (i[r] = l), n && h > n[e] && (n[e] = h)
        }, e.prototype.recordPWidthCell = function (t, e) {
            t.childNodes[0] && t.childNodes[0].getBBox().pwidth && this.pwidthCells.push([t, e])
        }, e.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r, o, i = this.getTableData(),
                n = i.H,
                s = i.D;
            if (this.node.attributes.get("equalrows")) {
                var a = this.getEqualRowHeight();
                r = b.sum([].concat(this.rLines, this.rSpace)) + a * this.numRows
            } else r = b.sum(n.concat(s, this.rLines, this.rSpace));
            r += 2 * (this.fLine + this.fSpace[1]);
            var l = this.getComputedWidths();
            o = b.sum(l.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
            var h = this.node.attributes.get("width");
            "auto" !== h && (o = Math.max(this.length2em(h, 0) + 2 * this.fLine, o));
            var c = m(this.getBBoxHD(r), 2),
                u = c[0],
                p = c[1];
            t.h = u, t.d = p, t.w = o;
            var d = m(this.getBBoxLR(), 2),
                f = d[0],
                y = d[1];
            t.L = f, t.R = y, v.isPercent(h) || this.setColumnPWidths()
        }, e.prototype.setChildPWidths = function (t, e, r) {
            var o = this.node.attributes.get("width");
            if (v.isPercent(o)) {
                this.hasLabels || (this.bbox.pwidth = "", this.container.bbox.pwidth = "");
                var i = this.bbox,
                    n = i.w,
                    s = i.L,
                    a = i.R,
                    l = Math.max(n, this.length2em(o, Math.max(e, s + n + a))),
                    h = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
                this.cWidths = this.getColumnWidthsFixed(h, l);
                var c = this.getComputedWidths();
                return this.pWidth = b.sum(c.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]), this.isTop && (this.bbox.w = this.pWidth), this.setColumnPWidths(), this.pWidth !== n && this.parent.invalidateBBox(), this.pWidth !== n
            }
        }, e.prototype.setColumnPWidths = function () {
            var e, t, r = this.cWidths;
            try {
                for (var o = M(this.pwidthCells), i = o.next(); !i.done; i = o.next()) {
                    var n = m(i.value, 2),
                        s = n[0],
                        a = n[1];
                    s.setChildPWidths(!1, r[a]) && (s.invalidateBBox(), s.getBBox())
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (t = o.return) && t.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
        }, e.prototype.getBBoxHD = function (t) {
            var e = m(this.getAlignmentRow(), 2),
                r = e[0],
                o = e[1];
            if (null === o) {
                var i = this.font.params.axis_height,
                    n = t / 2;
                return {
                    top: [0, t],
                    center: [n, n],
                    bottom: [t, 0],
                    baseline: [n, n],
                    axis: [n + i, n - i]
                } [r] || [n, n]
            }
            var s = this.getVerticalPosition(o, r);
            return [s, t - s]
        }, e.prototype.getBBoxLR = function () {
            if (this.hasLabels) {
                var t = this.node.attributes.get("side"),
                    e = m(this.getPadAlignShift(t), 3),
                    r = e[0],
                    o = e[1];
                return e[2], "center" === o ? [r, r] : "left" === t ? [r, 0] : [0, r]
            }
            return [0, 0]
        }, e.prototype.getPadAlignShift = function (t) {
            var e = this.getTableData().L + this.length2em(this.node.attributes.get("minlabelspacing")),
                r = m(null == this.styles ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2),
                o = r[0],
                i = r[1];
            (o || i) && (e = Math.max(e, this.length2em(o || "0"), this.length2em(i || "0")));
            var n = m(this.getAlignShift(), 2),
                s = n[0],
                a = n[1];
            return s === t && (a = "left" === t ? Math.max(e, a) - e : Math.min(-e, a) + e), [e, s, a]
        }, e.prototype.getAlignShift = function () {
            return this.isTop ? i.prototype.getAlignShift.call(this) : [this.container.getChildAlign(this.containerI), 0]
        }, e.prototype.getWidth = function () {
            return this.pWidth || this.getBBox().w
        }, e.prototype.getEqualRowHeight = function () {
            var t = this.getTableData(),
                e = t.H,
                r = t.D,
                o = Array.from(e.keys()).map(function (t) {
                    return e[t] + r[t]
                });
            return Math.max.apply(Math, o)
        }, e.prototype.getComputedWidths = function () {
            var e = this,
                r = this.getTableData().W,
                t = Array.from(r.keys()).map(function (t) {
                    return "number" == typeof e.cWidths[t] ? e.cWidths[t] : r[t]
                });
            return this.node.attributes.get("equalcolumns") && (t = Array(t.length).fill(b.max(t))), t
        }, e.prototype.getColumnWidths = function () {
            var t = this.node.attributes.get("width");
            if (this.node.attributes.get("equalcolumns")) return this.getEqualColumns(t);
            var e = this.getColumnAttributes("columnwidth", 0);
            return "auto" === t ? this.getColumnWidthsAuto(e) : v.isPercent(t) ? this.getColumnWidthsPercent(e, t) : this.getColumnWidthsFixed(e, this.length2em(t))
        }, e.prototype.getEqualColumns = function (t) {
            var e, r = Math.max(1, this.numCols);
            if ("auto" === t) {
                var o = this.getTableData().W;
                e = b.max(o)
            } else if (v.isPercent(t)) e = this.percent(1 / r);
            else {
                var i = b.sum([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
                e = Math.max(0, this.length2em(t) - i) / r
            }
            return Array(this.numCols).fill(e)
        }, e.prototype.getColumnWidthsAuto = function (t) {
            var e = this;
            return t.map(function (t) {
                return "auto" === t || "fit" === t ? null : v.isPercent(t) ? t : e.length2em(t)
            })
        }, e.prototype.getColumnWidthsPercent = function (r, t) {
            var o = this,
                i = 0 <= r.indexOf("fit"),
                n = (i ? this.getTableData() : {
                    W: null
                }).W;
            return Array.from(r.keys()).map(function (t) {
                var e = r[t];
                return "fit" === e ? null : "auto" === e ? i ? n[t] : null : v.isPercent(e) ? e : o.length2em(e)
            })
        }, e.prototype.getColumnWidthsFixed = function (r, o) {
            var i = this,
                t = Array.from(r.keys()),
                n = t.filter(function (t) {
                    return "fit" === r[t]
                }),
                e = t.filter(function (t) {
                    return "auto" === r[t]
                }),
                s = n.length || e.length,
                a = (s ? this.getTableData() : {
                    W: null
                }).W,
                l = o - b.sum([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0],
                h = l;
            t.forEach(function (t) {
                var e = r[t];
                h -= "fit" === e || "auto" === e ? a[t] : i.length2em(e, o)
            });
            var c = s && 0 < h ? h / s : 0;
            return t.map(function (t) {
                var e = r[t];
                return "fit" === e ? a[t] + c : "auto" === e ? a[t] + (0 === n.length ? c : 0) : i.length2em(e, l)
            })
        }, e.prototype.getVerticalPosition = function (t, e) {
            for (var r = this.node.attributes.get("equalrows"), o = this.getTableData(), i = o.H, n = o.D, s = r ? this.getEqualRowHeight() : 0, a = this.getRowHalfSpacing(), l = this.fLine, h = 0; h < t; h++) l += a[h] + (r ? s : i[h] + n[h]) + a[h + 1] + this.rLines[h];
            var c = m(r ? [(s + i[t] - n[t]) / 2, (s - i[t] + n[t]) / 2] : [i[t], n[t]], 2),
                u = c[0],
                p = c[1];
            return l += {
                top: 0,
                center: a[t] + (u + p) / 2,
                bottom: a[t] + u + p + a[t + 1],
                baseline: a[t] + u,
                axis: a[t] + u - .25
            } [e] || 0
        }, e.prototype.getEmHalfSpacing = function (t, e) {
            var r = this.em(t),
                o = this.addEm(e, 2);
            return o.unshift(r), o.push(r), o
        }, e.prototype.getRowHalfSpacing = function () {
            var t = this.rSpace.map(function (t) {
                return t / 2
            });
            return t.unshift(this.fSpace[1]), t.push(this.fSpace[1]), t
        }, e.prototype.getColumnHalfSpacing = function () {
            var t = this.cSpace.map(function (t) {
                return t / 2
            });
            return t.unshift(this.fSpace[0]), t.push(this.fSpace[0]), t
        }, e.prototype.getAlignmentRow = function () {
            var t = m(v.split(this.node.attributes.get("align")), 2),
                e = t[0],
                r = t[1];
            if (null == r) return [e, null];
            var o = parseInt(r);
            return o < 0 && (o += this.numRows + 1), [e, o < 1 || o > this.numRows ? null : o - 1]
        }, e.prototype.getColumnAttributes = function (t, e) {
            void 0 === e && (e = 1);
            var r = this.numCols - e,
                o = this.getAttributeArray(t);
            if (0 !== o.length) {
                for (; o.length < r;) o.push(o[o.length - 1]);
                return o.length > r && o.splice(r), o
            }
        }, e.prototype.getRowAttributes = function (t, e) {
            void 0 === e && (e = 1);
            var r = this.numRows - e,
                o = this.getAttributeArray(t);
            if (0 !== o.length) {
                for (; o.length < r;) o.push(o[o.length - 1]);
                return o.length > r && o.splice(r), o
            }
        }, e.prototype.getAttributeArray = function (t) {
            var e = this.node.attributes.get(t);
            return e ? v.split(e) : [this.node.attributes.getDefault(t)]
        }, e.prototype.addEm = function (t, e) {
            var r = this;
            if (void 0 === e && (e = 1), t) return t.map(function (t) {
                return r.em(t / e)
            })
        }, e.prototype.convertLengths = function (t) {
            var e = this;
            if (t) return t.map(function (t) {
                return e.length2em(t)
            })
        }, e;

        function e() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = i.apply(this, s(t)) || this;
            r.numCols = 0, r.numRows = 0, r.data = null, r.pwidthCells = [], r.pWidth = 0, r.numCols = b.max(r.tableRows.map(function (t) {
                return t.numCells
            })), r.numRows = r.childNodes.length, r.hasLabels = r.childNodes.reduce(function (t, e) {
                return t || e.node.isKind("mlabeledtr")
            }, !1), r.findContainer(), r.isTop = !r.container || r.container.node.isKind("math") && !r.container.parent, r.isTop && (r.jax.table = r), r.getPercentageWidth();
            var o = r.node.attributes;
            return r.frame = "none" !== o.get("frame"), r.fLine = r.frame ? .07 : 0, r.fSpace = r.frame ? r.convertLengths(r.getAttributeArray("framespacing")) : [0, 0], r.cSpace = r.convertLengths(r.getColumnAttributes("columnspacing")), r.rSpace = r.convertLengths(r.getRowAttributes("rowspacing")), r.cLines = r.getColumnAttributes("columnlines").map(function (t) {
                return "none" === t ? 0 : .07
            }), r.rLines = r.getRowAttributes("rowlines").map(function (t) {
                return "none" === t ? 0 : .07
            }), r.cWidths = r.getColumnWidths(), r.stretchRows(), r.stretchColumns(), r
        }
        var i
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMtdMixin = function (t) {
        return i(e, r = t), Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
                return !1
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.invalidateBBox = function () {
            this.bboxComputed = !1
        }, e.prototype.getWrapWidth = function (t) {
            var e = this.parent.parent,
                r = this.parent,
                o = this.node.childPosition() - (r.labeled ? 1 : 0);
            return "number" == typeof e.cWidths[o] ? e.cWidths[o] : e.getTableData().W[o]
        }, e.prototype.getChildAlign = function (t) {
            return this.node.attributes.get("columnalign")
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        s = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonMtextMixin = function (t) {
        var e, o;
        return i(r, o = t), r.prototype.getVariant = function () {
            var t = this.jax.options;
            if (t.mtextInheritFont || t.merrorInheritFont && this.node.Parent.isKind("merror")) {
                var e = this.node.attributes.get("mathvariant"),
                    r = this.constructor.INHERITFONTS[e];
                if (r) return void(this.variant = this.explicitVariant.apply(this, s(r)))
            }
            o.prototype.getVariant.call(this)
        }, (e = r).INHERITFONTS = {
            normal: ["", "", ""],
            bold: ["", "bold", ""],
            italic: ["", "", "italic"],
            "bold-italic": ["", "bold", "italic"],
            script: ["cursive", "", ""],
            "bold-script": ["cursive", "bold", ""],
            "sans-serif": ["sans-serif", "", ""],
            "bold-sans-serif": ["sans-serif", "bold", ""],
            "sans-serif-italic": ["sans-serif", "", "italic"],
            "sans-serif-bold-italic": ["sans-serif", "bold", "italic"],
            monospace: ["monospace", "", ""]
        }, e;

        function r() {
            return null !== o && o.apply(this, arguments) || this
        }
    }
}, function (t, e, r) {
    "use strict";
    var o, n = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        a = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        m = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
            return t
        },
        M = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = 1.5;
    e.CommonScriptbaseMixin = function (t) {
        var e, i;
        return n(r, i = t), Object.defineProperty(r.prototype, "baseChild", {
            get: function () {
                return this.childNodes[this.node.base]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "script", {
            get: function () {
                return this.childNodes[1]
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.computeBBox = function (t, e) {
            void 0 === e && (e = !1);
            var r = this.baseChild.getBBox(),
                o = this.script.getBBox(),
                i = a(this.getOffset(r, o), 2),
                n = i[0],
                s = i[1];
            t.append(r), t.combine(o, t.w + n, s), t.w += this.font.params.scriptspace, t.clean(), this.setChildPWidths(e)
        }, r.prototype.coreIC = function () {
            var t = this.baseCore.getBBox();
            return t.ic ? 1.05 * t.ic + .05 : 0
        }, r.prototype.coreScale = function () {
            for (var t = this.baseChild.getBBox().rscale, e = this.baseChild;
                (e.node.isKind("mstyle") || e.node.isKind("mrow") || e.node.isKind("TeXAtom")) && 1 === e.childNodes.length;) t *= (e = e.childNodes[0]).getBBox().rscale;
            return t
        }, r.prototype.isCharBase = function () {
            for (var t = this.baseChild;
                (t.node.isKind("mstyle") || t.node.isKind("mrow")) && 1 === t.childNodes.length;) t = t.childNodes[0];
            return (t.node.isKind("mo") || t.node.isKind("mi") || t.node.isKind("mn")) && 1 === t.bbox.rscale && 1 === t.getText().length && !t.node.attributes.get("largeop")
        }, r.prototype.getOffset = function (t, e) {
            return [0, 0]
        }, r.prototype.getV = function (t, e) {
            var r = this.font.params,
                o = this.length2em(this.node.attributes.get("subscriptshift"), r.sub1);
            return Math.max(this.isCharBase() ? 0 : t.d * t.rscale + r.sub_drop * e.rscale, o, e.h * e.rscale - .8 * r.x_height)
        }, r.prototype.getU = function (t, e) {
            var r = this.font.params,
                o = this.node.attributes.getList("displaystyle", "superscriptshift"),
                i = this.node.getProperty("texprimestyle") ? r.sup3 : o.displaystyle ? r.sup1 : r.sup2,
                n = this.length2em(o.superscriptshift, i);
            return Math.max(this.isCharBase() ? 0 : t.h * t.rscale - r.sup_drop * e.rscale, n, e.d * e.rscale + .25 * r.x_height)
        }, r.prototype.hasMovableLimits = function () {
            var t = this.node.attributes.get("displaystyle"),
                e = this.baseChild.coreMO().node;
            return !t && e.attributes.get("movablelimits")
        }, r.prototype.getOverKU = function (t, e) {
            var r = this.node.attributes.get("accent"),
                o = this.font.params,
                i = e.d * e.rscale,
                n = (r ? o.rule_thickness : Math.max(o.big_op_spacing1, o.big_op_spacing3 - Math.max(0, i))) - (this.baseChild.node.isKind("munderover") ? .1 : 0);
            return [n, t.h * t.rscale + n + i]
        }, r.prototype.getUnderKV = function (t, e) {
            var r = this.node.attributes.get("accentunder"),
                o = this.font.params,
                i = e.h * e.rscale,
                n = (r ? o.rule_thickness : Math.max(o.big_op_spacing2, o.big_op_spacing4 - i)) - (this.baseChild.node.isKind("munderover") ? .1 : 0);
            return [n, -(t.d * t.rscale + n + i)]
        }, r.prototype.getDeltaW = function (t, e) {
            var r, o, i, n;
            void 0 === e && (e = [0, 0, 0]);
            var s = this.node.attributes.get("align"),
                a = t.map(function (t) {
                    return t.w * t.rscale
                }),
                l = Math.max.apply(Math, m(a)),
                h = [],
                c = 0;
            try {
                for (var u = M(a.keys()), p = u.next(); !p.done; p = u.next()) h[y = p.value] = ("center" === s ? (l - a[y]) / 2 : "right" === s ? l - a[y] : 0) + e[y], h[y] < c && (c = -h[y])
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    p && !p.done && (o = u.return) && o.call(u)
                } finally {
                    if (r) throw r.error
                }
            }
            if (c) try {
                for (var d = M(h.keys()), f = d.next(); !f.done; f = d.next()) {
                    var y;
                    h[y = f.value] += c
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    f && !f.done && (n = d.return) && n.call(d)
                } finally {
                    if (i) throw i.error
                }
            }
            return h
        }, r.prototype.getDelta = function (t) {
            void 0 === t && (t = !1);
            var e = this.node.attributes.get("accent") && !t ? this.baseChild.coreMO().bbox.sk : 0;
            return (s * this.baseCore.bbox.ic / 2 + e) * this.coreScale()
        }, r.prototype.stretchChildren = function () {
            var e, t, r, o, i, n, s = [];
            try {
                for (var a = M(this.childNodes), l = a.next(); !l.done; l = a.next())(_ = l.value).canStretch(2) && s.push(_)
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (t = a.return) && t.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
            var h = s.length,
                c = this.childNodes.length;
            if (h && 1 < c) {
                var u = 0,
                    p = 1 < h && h === c;
                try {
                    for (var d = M(this.childNodes), f = d.next(); !f.done; f = d.next()) {
                        var y = 0 === (_ = f.value).stretch.dir;
                        if (p || y) {
                            var m = _.getBBox(y),
                                v = m.w,
                                b = m.rscale;
                            u < v * b && (u = v * b)
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (o = d.return) && o.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
                try {
                    for (var g = M(s), x = g.next(); !x.done; x = g.next()) {
                        var _;
                        (_ = x.value).coreMO().getStretchedVariant([u / _.bbox.rscale])
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        x && !x.done && (n = g.return) && n.call(g)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }
        }, (e = r).useIC = !1, e;

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = i.apply(this, m(t)) || this,
                o = r.baseCore = r.childNodes[0];
            if (!o) return r;
            for (; 1 === o.childNodes.length && (o.node.isKind("mrow") || o.node.isKind("TeXAtom") || o.node.isKind("mstyle") || o.node.isKind("mpadded") || o.node.isKind("mphantom") || o.node.isKind("semantics"));)
                if (!(o = o.childNodes[0])) return r;
            return "noIC" in o && (r.baseCore = o, r.constructor.useIC || (o.noIC = !0)), r
        }
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CommonSemanticsMixin = function (t) {
        return i(e, r = t), e.prototype.computeBBox = function (t, e) {
            if (void 0 === e && (e = !1), this.childNodes.length) {
                var r = this.childNodes[0].getBBox(),
                    o = r.w,
                    i = r.h,
                    n = r.d;
                t.w = o, t.h = i, t.d = n
            }
        }, e;

        function e() {
            return null !== r && r.apply(this, arguments) || this
        }
        var r
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(20),
        a = r(43),
        l = (n = s.CommonWrapperFactory, i(h, n), h.defaultNodes = a.SVGWrappers, h);

    function h() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.jax = null, t
    }
    e.SVGWrapperFactory = l
}, function (t, e, r) {
    "use strict";
    var o;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = r(0),
        n = r(44),
        s = r(45),
        a = r(46),
        l = r(47),
        h = r(48),
        c = r(49),
        u = r(50),
        p = r(51),
        d = r(52),
        f = r(53),
        y = r(54),
        m = r(55),
        v = r(14),
        b = r(56),
        g = r(57),
        x = r(8),
        _ = r(59),
        M = r(60),
        w = r(61),
        S = r(62),
        O = r(63),
        B = r(64),
        C = r(65),
        j = r(67),
        P = r(68),
        V = r(69),
        A = r(70);
    e.SVGWrappers = ((o = {})[n.SVGmath.kind] = n.SVGmath, o[s.SVGmrow.kind] = s.SVGmrow, o[s.SVGinferredMrow.kind] = s.SVGinferredMrow, o[a.SVGmi.kind] = a.SVGmi, o[l.SVGmo.kind] = l.SVGmo, o[h.SVGmn.kind] = h.SVGmn, o[c.SVGms.kind] = c.SVGms, o[u.SVGmtext.kind] = u.SVGmtext, o[p.SVGmerror.kind] = p.SVGmerror, o[d.SVGmspace.kind] = d.SVGmspace, o[f.SVGmpadded.kind] = f.SVGmpadded, o[y.SVGmphantom.kind] = y.SVGmphantom, o[m.SVGmfrac.kind] = m.SVGmfrac, o[v.SVGmsqrt.kind] = v.SVGmsqrt, o[b.SVGmroot.kind] = b.SVGmroot, o[g.SVGmfenced.kind] = g.SVGmfenced, o[x.SVGmsub.kind] = x.SVGmsub, o[x.SVGmsup.kind] = x.SVGmsup, o[x.SVGmsubsup.kind] = x.SVGmsubsup, o[_.SVGmunder.kind] = _.SVGmunder, o[_.SVGmover.kind] = _.SVGmover, o[_.SVGmunderover.kind] = _.SVGmunderover, o[M.SVGmmultiscripts.kind] = M.SVGmmultiscripts, o[w.SVGmtable.kind] = w.SVGmtable, o[S.SVGmtr.kind] = S.SVGmtr, o[S.SVGmlabeledtr.kind] = S.SVGmlabeledtr, o[O.SVGmtd.kind] = O.SVGmtd, o[B.SVGmaction.kind] = B.SVGmaction, o[C.SVGmenclose.kind] = C.SVGmenclose, o[j.SVGsemantics.kind] = j.SVGsemantics, o[j.SVGannotation.kind] = j.SVGannotation, o[j.SVGannotationXML.kind] = j.SVGannotationXML, o[j.SVGxml.kind] = j.SVGxml, o[P.SVGmglyph.kind] = P.SVGmglyph, o[V.SVGTeXAtom.kind] = V.SVGTeXAtom, o[A.SVGTextNode.kind] = A.SVGTextNode, o[i.SVGWrapper.kind] = i.SVGWrapper, o)
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        a = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        c = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        l = r(23),
        h = r(80),
        u = r(73),
        p = (n = l.CommonMathMixin(s.SVGWrapper), i(d, n), d.prototype.toSVG = function (t) {
            n.prototype.toSVG.call(this, t);
            var e = this.adaptor;
            "block" === this.node.attributes.get("display") && (e.setAttribute(this.jax.container, "display", "true"), this.handleDisplay()), this.jax.document.options.internalSpeechTitles && this.handleSpeech()
        }, d.prototype.handleDisplay = function () {
            var t = a(this.getAlignShift(), 2),
                e = t[0],
                r = t[1];
            if ("center" !== e && this.adaptor.setAttribute(this.jax.container, "justify", e), this.bbox.pwidth === u.BBox.fullWidth) {
                if (this.adaptor.setAttribute(this.jax.container, "width", "full"), this.jax.table) {
                    var o = this.jax.table.getBBox(),
                        i = o.L,
                        n = o.w,
                        s = o.R;
                    "right" === e ? s = Math.max(s || -r, -r) : "left" === e ? i = Math.max(i || r, r) : "center" === e && (n += 2 * Math.abs(r)), this.jax.minwidth = Math.max(0, i + n + s)
                }
            } else this.jax.shift = r
        }, d.prototype.handleSpeech = function () {
            var e, t, r = this.adaptor,
                o = this.node.attributes,
                i = o.get("aria-label") || o.get("data-semantic-speech");
            if (i) {
                var n = this.getTitleID(),
                    s = this.svg("title", {
                        id: n
                    }, [this.text(i)]);
                r.insert(s, r.firstChild(this.element)), r.setAttribute(this.element, "aria-labeledby", n), r.removeAttribute(this.element, "aria-label");
                try {
                    for (var a = c(this.childNodes[0].childNodes), l = a.next(); !l.done; l = a.next()) {
                        var h = l.value;
                        r.setAttribute(h.element, "aria-hidden", "true")
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (t = a.return) && t.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }
        }, d.prototype.getTitleID = function () {
            return "mjx-svg-title-" + String(this.jax.options.titleID++)
        }, d.prototype.setChildPWidths = function (t, e, r) {
            return void 0 === e && (e = null), void 0 === r && (r = !0), n.prototype.setChildPWidths.call(this, t, this.parent ? e : this.metrics.containerWidth / this.jax.pxPerEm, !1)
        }, d.kind = h.MmlMath.prototype.kind, d.styles = {
            'mjx-container[jax="SVG"][display="true"]': {
                display: "block",
                "text-align": "center",
                margin: "1em 0"
            },
            'mjx-container[jax="SVG"][display="true"][width="full"]': {
                display: "flex"
            },
            'mjx-container[jax="SVG"][justify="left"]': {
                "text-align": "left"
            },
            'mjx-container[jax="SVG"][justify="right"]': {
                "text-align": "right"
            }
        }, d);

    function d() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmath = p
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(12),
        l = r(12),
        h = r(81),
        c = (n = a.CommonMrowMixin(s.SVGWrapper), i(u, n), u.prototype.toSVG = function (t) {
            var e = this.node.isInferred ? this.element = t : this.standardSVGnode(t);
            this.addChildren(e)
        }, u.kind = h.MmlMrow.prototype.kind, u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmrow = c;
    var p, d = (p = l.CommonInferredMrowMixin(c), i(f, p), f.kind = h.MmlInferredMrow.prototype.kind, f);

    function f() {
        return null !== p && p.apply(this, arguments) || this
    }
    e.SVGinferredMrow = d
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(28),
        l = r(82),
        h = (n = a.CommonMiMixin(s.SVGWrapper), i(c, n), c.kind = l.MmlMi.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmi = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        v = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a, n = r(0),
        s = r(31),
        l = r(83),
        h = r(73),
        c = (a = s.CommonMoMixin(n.SVGWrapper), i(u, a), u.prototype.toSVG = function (t) {
            var e = this.node.attributes,
                r = e.get("symmetric") && 2 !== this.stretch.dir,
                o = 0 !== this.stretch.dir;
            o && null === this.size && this.getStretchedVariant([]);
            var i = this.standardSVGnode(t);
            if (o && this.size < 0) this.stretchSVG(i, r);
            else {
                if (r || e.get("largeop")) {
                    var n = h.BBox.empty();
                    a.prototype.computeBBox.call(this, n);
                    var s = this.fixed((n.d - n.h) / 2 + this.font.params.axis_height);
                    "0" !== s && this.adaptor.setAttribute(i, "transform", "translate(0 " + s + ")")
                }
                this.addChildren(i)
            }
        }, u.prototype.stretchSVG = function (t, e) {
            var r = this.stretch.stretch,
                o = this.getBBox();
            1 === this.stretch.dir ? this.stretchVertical(r, o) : this.stretchHorizontal(r, o)
        }, u.prototype.stretchVertical = function (t, e) {
            var r = e.h,
                o = e.d,
                i = e.w,
                n = this.addTop(t[0], r, i),
                s = this.addBot(t[2], o, i);
            if (4 === t.length) {
                var a = v(this.addMidV(t[3], i), 2),
                    l = a[0],
                    h = a[1];
                this.addExtV(t[1], r, 0, n, l, i), this.addExtV(t[1], 0, o, h, s, i)
            } else this.addExtV(t[1], r, o, n, s, i)
        }, u.prototype.stretchHorizontal = function (t, e) {
            e.h, e.d;
            var r = e.w,
                o = this.addLeft(t[0]),
                i = this.addRight(t[2], r);
            if (4 === t.length) {
                var n = v(this.addMidH(t[3], r), 2),
                    s = n[0],
                    a = n[1],
                    l = r / 2;
                this.addExtH(t[1], l, o, l - s), this.addExtH(t[1], l, a - l, i, l)
            } else this.addExtH(t[1], r, o, i)
        }, u.prototype.getChar = function (t) {
            var e = this.font.getChar("-size4", t) || [0, 0, 0, null];
            return [e[0], e[1], e[2], e[3] || {}]
        }, u.prototype.addGlyph = function (t, e, r, o) {
            return void 0 === o && (o = null), this.placeChar(t, e, r, o || this.element, "-size4")
        }, u.prototype.addTop = function (t, e, r) {
            if (!t) return 0;
            var o = v(this.getChar(t), 3),
                i = o[0],
                n = o[1],
                s = o[2];
            return this.addGlyph(t, (r - s) / 2, e - i), i + n
        }, u.prototype.addExtV = function (t, e, r, o, i, n) {
            var s = this;
            if (t) {
                o = Math.max(0, o - .1), i = Math.max(0, i - .1);
                var a = this.adaptor,
                    l = v(this.getChar(t), 3),
                    h = l[0],
                    c = l[1],
                    u = l[2],
                    p = e + r - o - i,
                    d = 1.5 * p / (h + c),
                    f = (d * (h - c) - p) / 2;
                if (!(p <= 0)) {
                    var y = this.svg("svg", {
                        width: this.fixed(u),
                        height: this.fixed(p),
                        y: this.fixed(i - r),
                        x: this.fixed((n - u) / 2),
                        viewBox: [0, f, u, p].map(function (t) {
                            return s.fixed(t)
                        }).join(" ")
                    });
                    this.addGlyph(t, 0, 0, y);
                    var m = a.lastChild(y);
                    a.setAttribute(m, "transform", "scale(1, " + this.jax.fixed(d) + ")"), a.append(this.element, y)
                }
            }
        }, u.prototype.addBot = function (t, e, r) {
            if (!t) return 0;
            var o = v(this.getChar(t), 3),
                i = o[0],
                n = o[1],
                s = o[2];
            return this.addGlyph(t, (r - s) / 2, n - e), i + n
        }, u.prototype.addMidV = function (t, e) {
            if (!t) return [0, 0];
            var r = v(this.getChar(t), 3),
                o = r[0],
                i = r[1],
                n = r[2],
                s = (i - o) / 2 + this.font.params.axis_height;
            return this.addGlyph(t, (e - n) / 2, s), [o + s, i - s]
        }, u.prototype.addLeft = function (t) {
            return t ? this.addGlyph(t, 0, 0) : 0
        }, u.prototype.addExtH = function (t, e, r, o, i) {
            var n = this;
            if (void 0 === i && (i = 0), t) {
                o = Math.max(0, o - .1), r = Math.max(0, r - .1), this.adaptor;
                var s = v(this.getChar(t), 3),
                    a = s[0],
                    l = s[1],
                    h = s[2],
                    c = e - r - o,
                    u = a + l + .2,
                    p = c / h * 1.5,
                    d = -(l + .1);
                if (!(c <= 0)) {
                    var f = this.svg("svg", {
                        width: this.fixed(c),
                        height: this.fixed(u),
                        x: this.fixed(i + r),
                        y: this.fixed(d),
                        viewBox: [(p * h - c) / 2, d, c, u].map(function (t) {
                            return n.fixed(t)
                        }).join(" ")
                    });
                    this.addGlyph(t, 0, 0, f);
                    var y = this.adaptor.lastChild(f);
                    this.adaptor.setAttribute(y, "transform", "scale(" + this.jax.fixed(p) + ", 1)"), this.adaptor.append(this.element, f)
                }
            }
        }, u.prototype.addRight = function (t, e) {
            if (!t) return 0;
            var r = v(this.getChar(t), 3),
                o = (r[0], r[1], r[2]);
            return this.addGlyph(t, e - o, 0)
        }, u.prototype.addMidH = function (t, e) {
            if (!t) return [0, 0];
            var r = v(this.getChar(t), 3),
                o = (r[0], r[1], r[2]);
            return this.addGlyph(t, (e - o) / 2, 0), [(e - o) / 2, (e + o) / 2]
        }, u.kind = l.MmlMo.prototype.kind, u);

    function u() {
        return null !== a && a.apply(this, arguments) || this
    }
    e.SVGmo = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(30),
        l = r(84),
        h = (n = a.CommonMnMixin(s.SVGWrapper), i(c, n), c.kind = l.MmlMn.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmn = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(34),
        l = r(85),
        h = (n = a.CommonMsMixin(s.SVGWrapper), i(c, n), c.kind = l.MmlMs.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGms = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(39),
        l = r(86),
        h = (n = a.CommonMtextMixin(s.SVGWrapper), i(c, n), c.kind = l.MmlMtext.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmtext = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(87),
        l = (n = s.SVGWrapper, i(h, n), h.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = this.getBBox(),
                o = r.h,
                i = r.d,
                n = r.w;
            this.adaptor.append(this.element, this.svg("rect", {
                "data-background": !0,
                width: this.fixed(n),
                height: this.fixed(o + i),
                y: this.fixed(-i)
            })), this.addChildren(e)
        }, h.kind = a.MmlMerror.prototype.kind, h.styles = {
            'g[data-mml-node="merror"] > g': {
                fill: "red",
                stroke: "red"
            },
            'g[data-mml-node="merror"] > rect[data-background]': {
                fill: "yellow",
                stroke: "none"
            }
        }, h);

    function h() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmerror = l
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(35),
        l = r(88),
        h = (n = a.CommonMspaceMixin(s.SVGWrapper), i(c, n), c.kind = l.MmlMspace.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmspace = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(32),
        l = r(89),
        c = (n = a.CommonMpaddedMixin(s.SVGWrapper), i(u, n), u.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = h(this.getDimens(), 9),
                o = (r[0], r[1], r[2], r[3], r[4], r[5]),
                i = r[6],
                n = r[7],
                s = r[8],
                a = this.node.attributes.get("data-align") || "left",
                l = i + s - (o < 0 && "left" !== a ? "center" === a ? o / 2 : o : 0);
            (l || n) && (e = this.adaptor.append(e, this.svg("g")), this.place(l, n, e)), this.addChildren(e)
        }, u.kind = l.MmlMpadded.prototype.kind, u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmpadded = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(90),
        l = (n = s.SVGWrapper, i(h, n), h.prototype.toSVG = function (t) {
            this.standardSVGnode(t)
        }, h.kind = a.MmlMphantom.prototype.kind, h);

    function h() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmphantom = l
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        _ = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(26),
        l = r(91),
        h = (n = a.CommonMfracMixin(s.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            this.standardSVGnode(t);
            var e = this.node.attributes.getList("linethickness", "bevelled"),
                r = e.linethickness,
                o = e.bevelled,
                i = this.isDisplay();
            if (o) this.makeBevelled(i);
            else {
                var n = this.length2em(String(r), .06);
                0 === n ? this.makeAtop(i) : this.makeFraction(i, n)
            }
        }, c.prototype.makeFraction = function (t, e) {
            var r = this.element,
                o = this.node.attributes.getList("numalign", "denomalign"),
                i = o.numalign,
                n = o.denomalign,
                s = _(this.childNodes, 2),
                a = s[0],
                l = s[1],
                h = a.getBBox(),
                c = l.getBBox(),
                u = this.font.params,
                p = u.axis_height,
                d = this.node.getProperty("withDelims") ? 0 : u.nulldelimiterspace,
                f = Math.max((h.L + h.w + h.R) * h.rscale, (c.L + c.w + c.R) * c.rscale),
                y = this.getAlignX(f, h, i) + .1 + d,
                m = this.getAlignX(f, c, n) + .1 + d,
                v = this.getTUV(t, e),
                b = v.T,
                g = v.u,
                x = v.v;
            a.toSVG(r), a.place(y, p + b + Math.max(h.d * h.rscale, g)), l.toSVG(r), l.place(m, p - b - Math.max(c.h * c.rscale, x)), this.adaptor.append(r, this.svg("rect", {
                width: this.fixed(f + .2),
                height: this.fixed(e),
                x: this.fixed(d),
                y: this.fixed(p - e / 2)
            }))
        }, c.prototype.makeAtop = function (t) {
            var e = this.element,
                r = this.node.attributes.getList("numalign", "denomalign"),
                o = r.numalign,
                i = r.denomalign,
                n = _(this.childNodes, 2),
                s = n[0],
                a = n[1],
                l = s.getBBox(),
                h = a.getBBox(),
                c = this.font.params,
                u = this.node.getProperty("withDelims") ? 0 : c.nulldelimiterspace,
                p = Math.max((l.L + l.w + l.R) * l.rscale, (h.L + h.w + h.R) * h.rscale),
                d = this.getAlignX(p, l, o) + u,
                f = this.getAlignX(p, h, i) + u,
                y = this.getUVQ(t),
                m = y.u,
                v = y.v;
            s.toSVG(e), s.place(d, m), a.toSVG(e), a.place(f, -v)
        }, c.prototype.makeBevelled = function (t) {
            var e = this.element,
                r = _(this.childNodes, 2),
                o = r[0],
                i = r[1],
                n = this.getBevelData(t),
                s = n.u,
                a = n.v,
                l = n.delta,
                h = n.nbox,
                c = n.dbox,
                u = (h.L + h.w + h.R) * h.rscale;
            o.toSVG(e), this.bevel.toSVG(e), i.toSVG(e), o.place(h.L * h.rscale, s), this.bevel.place(u - l / 2, 0), i.place(u + this.bevel.getBBox().w + c.L * c.rscale - l, a)
        }, c.kind = l.MmlMfrac.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmfrac = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(14),
        a = r(33),
        l = r(93),
        c = (n = a.CommonMrootMixin(s.SVGmsqrt), i(u, n), u.prototype.addRoot = function (t, e, r, o) {
            e.toSVG(t);
            var i = h(this.getRootDimens(r, o), 3),
                n = i[0],
                s = i[1],
                a = i[2],
                l = e.getBBox();
            e.place(a * l.rscale, s), this.dx = n
        }, u.kind = l.MmlMroot.prototype.kind, u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmroot = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        n = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s, a = r(0),
        l = r(25),
        h = r(94),
        c = (s = l.CommonMfencedMixin(a.SVGWrapper), i(u, s), u.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t);
            this.setChildrenParent(this.mrow), this.mrow.toSVG(e), this.setChildrenParent(this)
        }, u.prototype.setChildrenParent = function (t) {
            var e, r;
            try {
                for (var o = n(this.childNodes), i = o.next(); !i.done; i = o.next()) i.value.parent = t
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
        }, u.kind = h.MmlMfenced.prototype.kind, u);

    function u() {
        return null !== s && s.apply(this, arguments) || this
    }
    e.SVGmfenced = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        a = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        l = r(40),
        h = (n = l.CommonScriptbaseMixin(s.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = this.baseChild.getBBox(),
                o = this.script.getBBox(),
                i = a(this.getOffset(r, o), 2),
                n = i[0],
                s = i[1];
            this.baseChild.toSVG(e), this.script.toSVG(e), this.script.place(r.w * r.rscale + n, s)
        }, c.kind = "scriptbase", c.useIC = !1, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGscriptbase = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        g = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var f, n = r(8),
        s = r(7),
        a = r(7),
        l = r(7),
        h = r(96),
        c = (f = s.CommonMunderMixin(n.SVGmsub), i(u, f), u.prototype.toSVG = function (t) {
            if (this.hasMovableLimits()) f.prototype.toSVG.call(this, t);
            else {
                var e = this.standardSVGnode(t),
                    r = g([this.baseChild, this.script], 2),
                    o = r[0],
                    i = r[1],
                    n = g([o.getBBox(), i.getBBox()], 2),
                    s = n[0],
                    a = n[1];
                o.toSVG(e), i.toSVG(e);
                var l = this.getDelta(!0),
                    h = g(this.getUnderKV(s, a), 2),
                    c = (h[0], h[1]),
                    u = g(this.getDeltaW([s, a], [0, -l]), 2),
                    p = u[0],
                    d = u[1];
                o.place(p, 0), i.place(d, c)
            }
        }, u.kind = h.MmlMunder.prototype.kind, u.useIC = !0, u);

    function u() {
        return null !== f && f.apply(this, arguments) || this
    }
    e.SVGmunder = c;
    var y, p = (y = a.CommonMoverMixin(n.SVGmsup), i(d, y), d.prototype.toSVG = function (t) {
        if (this.hasMovableLimits()) y.prototype.toSVG.call(this, t);
        else {
            var e = this.standardSVGnode(t),
                r = g([this.baseChild, this.script], 2),
                o = r[0],
                i = r[1],
                n = g([o.getBBox(), i.getBBox()], 2),
                s = n[0],
                a = n[1];
            o.toSVG(e), i.toSVG(e);
            var l = this.getDelta(),
                h = g(this.getOverKU(s, a), 2),
                c = (h[0], h[1]),
                u = g(this.getDeltaW([s, a], [0, l]), 2),
                p = u[0],
                d = u[1];
            o.place(p, 0), i.place(d, c)
        }
    }, d.kind = h.MmlMover.prototype.kind, d.useIC = !0, d);

    function d() {
        return null !== y && y.apply(this, arguments) || this
    }
    e.SVGmover = p;
    var x, m = (x = l.CommonMunderoverMixin(n.SVGmsubsup), i(v, x), v.prototype.toSVG = function (t) {
        if (this.hasMovableLimits()) x.prototype.toSVG.call(this, t);
        else {
            var e = this.standardSVGnode(t),
                r = g([this.baseChild, this.overChild, this.underChild], 3),
                o = r[0],
                i = r[1],
                n = r[2],
                s = g([o.getBBox(), i.getBBox(), n.getBBox()], 3),
                a = s[0],
                l = s[1],
                h = s[2];
            o.toSVG(e), n.toSVG(e), i.toSVG(e);
            var c = this.getDelta(),
                u = g(this.getOverKU(a, l), 2),
                p = (u[0], u[1]),
                d = g(this.getUnderKV(a, h), 2),
                f = (d[0], d[1]),
                y = g(this.getDeltaW([a, h, l], [0, -c, c]), 3),
                m = y[0],
                v = y[1],
                b = y[2];
            o.place(m, 0), n.place(v, f), i.place(b, p)
        }
    }, v.kind = h.MmlMunderover.prototype.kind, v.useIC = !0, v);

    function v() {
        return null !== x && x.apply(this, arguments) || this
    }
    e.SVGmunderover = m
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        _ = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(8),
        a = r(29),
        l = r(97),
        h = (n = a.CommonMmultiscriptsMixin(s.SVGmsubsup), i(c, n), c.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = this.getScriptData(),
                o = this.combinePrePost(r.sub, r.psub),
                i = this.combinePrePost(r.sup, r.psup),
                n = _(this.getUVQ(r.base, o, i), 3),
                s = n[0],
                a = n[1],
                l = (n[2], 0);
            r.numPrescripts && (l = this.addScripts(.05, s, a, !0, this.firstPrescript, r.numPrescripts));
            var h = this.baseChild;
            h.toSVG(e), h.place(l, 0), l += h.getBBox().w, r.numScripts && this.addScripts(l, s, a, !1, 1, r.numScripts)
        }, c.prototype.addScripts = function (t, e, r, o, i, n) {
            var s = this.adaptor,
                a = s.append(this.element, this.svg("g")),
                l = s.append(this.element, this.svg("g"));
            this.place(t, e, a), this.place(t, r, l);
            for (var h = i + 2 * n, c = 0; i < h;) {
                var u = _([this.childNodes[i++], this.childNodes[i++]], 2),
                    p = u[0],
                    d = u[1],
                    f = _([p.getBBox(), d.getBBox()], 2),
                    y = f[0],
                    m = f[1],
                    v = _([y.rscale, m.rscale], 2),
                    b = v[0],
                    g = v[1],
                    x = Math.max(y.w * b, m.w * g);
                p.toSVG(l), d.toSVG(a), p.place(c + (o ? x - y.w * b : 0), 0), d.place(c + (o ? x - m.w * g : 0), 0), c += x
            }
            return t + c
        }, c.kind = l.MmlMmultiscripts.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmmultiscripts = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        g = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        f = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(37),
        l = r(98),
        h = (n = a.CommonMtableMixin(s.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t);
            this.placeRows(e), this.handleColumnLines(e), this.handleRowLines(e), this.handleFrame(e);
            var r = this.handlePWidth(e);
            this.handleLabels(e, t, r)
        }, c.prototype.placeRows = function (t) {
            for (var e, r, o, i = this.node.attributes.get("equalrows"), n = this.getTableData(), s = n.H, a = n.D, l = this.getEqualRowHeight(), h = this.getRowHalfSpacing(), c = f([this.fLine], this.rLines, [this.fLine]), u = this.getBBox().h - c[0], p = 0; p < this.numRows; p++) {
                var d = this.childNodes[p];
                e = g(this.getRowHD(i, l, s[p], a[p]), 2), d.H = e[0], d.D = e[1], r = g([h[p], h[p + 1]], 2), d.tSpace = r[0], d.bSpace = r[1], o = g([c[p], c[p + 1]], 2), d.tLine = o[0], d.bLine = o[1], d.toSVG(t), d.place(0, u - h[p] - d.H), u -= h[p] + d.H + d.D + h[p + 1] + c[p + 1]
            }
        }, c.prototype.getRowHD = function (t, e, r, o) {
            return t ? [(e + r - o) / 2, (e - r + o) / 2] : [r, o]
        }, c.prototype.handleColor = function () {
            n.prototype.handleColor.call(this);
            var t = this.adaptor.firstChild(this.element);
            t && this.adaptor.setAttribute(t, "width", this.fixed(this.getWidth()))
        }, c.prototype.handleColumnLines = function (t) {
            if ("none" !== this.node.attributes.get("columnlines")) {
                var e = this.getColumnAttributes("columnlines");
                if (e)
                    for (var r = this.getColumnHalfSpacing(), o = this.cLines, i = this.getComputedWidths(), n = this.fLine, s = 0; s < e.length; s++) n += r[s] + i[s] + r[s + 1], "none" !== e[s] && this.adaptor.append(t, this.makeVLine(n, e[s], o[s])), n += o[s]
            }
        }, c.prototype.handleRowLines = function (t) {
            if ("none" !== this.node.attributes.get("rowlines")) {
                var e = this.getRowAttributes("rowlines");
                if (e)
                    for (var r = this.node.attributes.get("equalrows"), o = this.getTableData(), i = o.H, n = o.D, s = this.getEqualRowHeight(), a = this.getRowHalfSpacing(), l = this.rLines, h = this.getBBox().h - this.fLine, c = 0; c < e.length; c++) {
                        var u = g(this.getRowHD(r, s, i[c], n[c]), 2),
                            p = u[0],
                            d = u[1];
                        h -= a[c] + p + d + a[c + 1], "none" !== e[c] && this.adaptor.append(t, this.makeHLine(h, e[c], l[c])), h -= l[c]
                    }
            }
        }, c.prototype.handleFrame = function (t) {
            if (this.frame) {
                var e = this.getBBox(),
                    r = e.h,
                    o = e.d,
                    i = e.w,
                    n = this.node.attributes.get("frame");
                this.adaptor.append(t, this.makeFrame(i, r, o, n))
            }
        }, c.prototype.handlePWidth = function (t) {
            if (!this.pWidth) return 0;
            var e = this.getBBox(),
                r = e.w,
                o = e.L,
                i = e.R,
                n = o + this.pWidth + i,
                s = g(this.getAlignShift(), 2),
                a = s[0],
                l = (s[1], Math.max(this.isTop ? n : 0, this.container.getWrapWidth(this.containerI)) - o - i),
                h = r - (this.pWidth > l ? l : this.pWidth),
                c = "left" === a ? 0 : "right" === a ? h : h / 2;
            if (c) {
                var u = this.svg("g", {}, this.adaptor.childNodes(t));
                this.place(c, 0, u), this.adaptor.append(t, u)
            }
            return c
        }, c.prototype.lineClass = function (t) {
            return "mjx-" + t
        }, c.prototype.makeFrame = function (t, e, r, o) {
            var i = this.fLine;
            return this.svg("rect", this.setLineThickness(i, o, {
                "data-frame": !0,
                class: this.lineClass(o),
                width: this.fixed(t - i),
                height: this.fixed(e + r - i),
                x: this.fixed(i / 2),
                y: this.fixed(i / 2 - r)
            }))
        }, c.prototype.makeVLine = function (t, e, r) {
            var o = this.getBBox(),
                i = o.h,
                n = o.d,
                s = "dotted" === e ? r / 2 : 0,
                a = this.fixed(t + r / 2);
            return this.svg("line", this.setLineThickness(r, e, {
                "data-line": "v",
                class: this.lineClass(e),
                x1: a,
                y1: this.fixed(s - n),
                x2: a,
                y2: this.fixed(i - s)
            }))
        }, c.prototype.makeHLine = function (t, e, r) {
            var o = this.getBBox().w,
                i = "dotted" === e ? r / 2 : 0,
                n = this.fixed(t - r / 2);
            return this.svg("line", this.setLineThickness(r, e, {
                "data-line": "h",
                class: this.lineClass(e),
                x1: this.fixed(i),
                y1: n,
                x2: this.fixed(o - i),
                y2: n
            }))
        }, c.prototype.setLineThickness = function (t, e, r) {
            return .07 !== t && (r["stroke-thickness"] = this.fixed(t), "solid" !== e && (r["stroke-dasharray"] = ("dotted" === e ? "0," : "") + this.fixed(2 * t))), r
        }, c.prototype.handleLabels = function (t, e, r) {
            if (this.hasLabels) {
                var o = this.labels,
                    i = this.node.attributes,
                    n = (this.adaptor, i.get("side"));
                this.spaceLabels(), this.isTop ? this.topTable(t, o, n) : this.subTable(t, o, n, r)
            }
        }, c.prototype.spaceLabels = function () {
            for (var t = this.adaptor, e = (this.node.attributes.get("equalrows"), this.getBBox()), r = e.h, o = (e.d, this.getTableData().L), i = this.getRowHalfSpacing(), n = r - this.fLine, s = t.firstChild(this.labels), a = 0; a < this.numRows; a++) {
                var l = this.childNodes[a];
                if (l.node.isKind("mlabeledtr")) {
                    var h = l.childNodes[0];
                    n -= i[a] + l.H, l.placeCell(h, {
                        x: 0,
                        y: n,
                        w: o,
                        lSpace: 0,
                        rSpace: 0,
                        lLine: 0,
                        rLine: 0
                    }), n -= l.D + i[a + 1] + this.rLines[a], s = t.next(s)
                } else n -= i[a] + l.H + l.D + i[a + 1] + this.rLines[a]
            }
        }, c.prototype.topTable = function (t, e, r) {
            var o = this.adaptor,
                i = this.getBBox(),
                n = i.h,
                s = i.d,
                a = i.w,
                l = i.L,
                h = i.R,
                c = l + (this.pWidth || a) + h,
                u = this.getTableData().L,
                p = g(this.getPadAlignShift(r), 3),
                d = (p[0], p[1]),
                f = p[2] + ("right" === d ? -c : "center" === d ? -c / 2 : 0) + l,
                y = "matrix(1 0 0 -1 0 0)",
                m = "scale(" + this.jax.fixed(1e3 * this.font.params.x_height / this.metrics.ex, 2) + ")",
                v = "translate(0 " + this.fixed(n) + ") " + y + " " + m,
                b = this.svg("svg", {
                    "data-table": !0,
                    preserveAspectRatio: "left" === d ? "xMinYMid" : "right" === d ? "xMaxYMid" : "xMidYMid",
                    viewBox: [this.fixed(-f), this.fixed(-n), 1, this.fixed(n + s)].join(" ")
                }, [this.svg("g", {
                    transform: y
                }, o.childNodes(t))]);
            e = this.svg("svg", {
                "data-labels": !0,
                preserveAspectRatio: "left" === r ? "xMinYMid" : "xMaxYMid",
                viewBox: ["left" === r ? 0 : this.fixed(u), this.fixed(-n), 1, this.fixed(n + s)].join(" ")
            }, [e]), o.append(t, this.svg("g", {
                transform: v
            }, [b, e])), this.place(-l, 0, t)
        }, c.prototype.subTable = function (t, e, r, o) {
            var i = this.adaptor,
                n = this.getBBox(),
                s = n.w,
                a = n.L,
                l = n.R,
                h = a + (this.pWidth || s) + l,
                c = this.getTableData().L,
                u = g(this.getAlignShift(), 2),
                p = u[0],
                d = (u[1], Math.max(h, this.container.getWrapWidth(this.containerI)));
            this.place("left" === r ? ("left" === p ? 0 : "right" === p ? h - d + o : (h - d) / 2 + o) - a : ("left" === p ? d : "right" === p ? h + o : (d + h) / 2 + o) - a - c, 0, e), i.append(t, e)
        }, c.kind = l.MmlMtable.prototype.kind, c.styles = {
            'g[data-mml-node="mtable"] > line[data-line]': {
                "stroke-width": "70px",
                fill: "none"
            },
            'g[data-mml-node="mtable"] > rect[data-frame]': {
                "stroke-width": "70px",
                fill: "none"
            },
            'g[data-mml-node="mtable"] > .mjx-dashed': {
                "stroke-dasharray": "140"
            },
            'g[data-mml-node="mtable"] > .mjx-dotted': {
                "stroke-linecap": "round",
                "stroke-dasharray": "0,140"
            },
            'g[data-mml-node="mtable"] > g > svg': {
                overflow: "visible"
            }
        }, c);

    function c(t, e, r) {
        void 0 === r && (r = null);
        var o = n.call(this, t, e, r) || this,
            i = {
                "data-labels": !0
            };
        return o.isTop && (i.transform = "matrix(1 0 0 -1 0 0)"), o.labels = o.svg("g", i), o
    }
    e.SVGmtable = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        m = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        },
        l = this && this.__spread || function () {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
            return t
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(13),
        h = r(13),
        c = r(99),
        u = (n = a.CommonMtrMixin(s.SVGWrapper), i(p, n), p.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t);
            this.placeCells(e), this.placeColor(e)
        }, p.prototype.placeCells = function (t) {
            for (var e = this.parent.getColumnHalfSpacing(), r = l([this.parent.fLine], this.parent.cLines, [this.parent.fLine]), o = this.parent.getComputedWidths(), i = m([this.tLine / 2, this.bLine / 2], 2), n = (i[0], i[1], r[0]), s = 0; s < this.numCells; s++) {
                var a = this.getChild(s);
                a.toSVG(t), n += this.placeCell(a, {
                    x: n,
                    y: 0,
                    lSpace: e[s],
                    rSpace: e[s + 1],
                    w: o[s],
                    lLine: r[s],
                    rLine: r[s + 1]
                })
            }
        }, p.prototype.placeCell = function (t, e) {
            var r = e.x,
                o = e.y,
                i = e.lSpace,
                n = e.w,
                s = e.rSpace,
                a = e.lLine,
                l = e.rLine,
                h = m(t.placeCell(r + i, o, n, this.H, this.D), 2),
                c = h[0],
                u = h[1],
                p = i + n + s,
                d = m([this.H + this.tSpace, this.D + this.bSpace], 2),
                f = d[0],
                y = d[1];
            return t.placeColor(-(c + i + a / 2), -(y + this.bLine / 2 + u), p + (a + l) / 2, f + y + (this.tLine + this.bLine) / 2), p + l
        }, p.prototype.placeColor = function (t) {
            var e = this.adaptor,
                r = e.firstChild(this.element);
            if (r && "rect" === e.kind(r) && e.getAttribute(r, "data-bgcolor")) {
                var o = m([this.tLine / 2, this.bLine / 2], 2),
                    i = o[0],
                    n = o[1],
                    s = m([this.tSpace, this.bSpace], 2),
                    a = s[0],
                    l = s[1],
                    h = m([this.H, this.D], 2),
                    c = h[0],
                    u = h[1];
                e.setAttribute(r, "y", this.fixed(-(u + l + n))), e.setAttribute(r, "width", this.fixed(this.parent.getWidth())), e.setAttribute(r, "height", this.fixed(i + a + c + u + l + n))
            }
        }, p.kind = c.MmlMtr.prototype.kind, p);

    function p() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmtr = u;
    var d, f = (d = h.CommonMlabeledtrMixin(u), i(y, d), y.prototype.toSVG = function (t) {
        d.prototype.toSVG.call(this, t);
        var e = this.childNodes[0];
        e && e.toSVG(this.parent.labels)
    }, y.kind = c.MmlMlabeledtr.prototype.kind, y);

    function y() {
        return null !== d && d.apply(this, arguments) || this
    }
    e.SVGmlabeledtr = f
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(38),
        l = r(100),
        h = (n = a.CommonMtdMixin(s.SVGWrapper), i(c, n), c.prototype.placeCell = function (t, e, r, o, i) {
            var n = this.getBBox(),
                s = Math.max(n.h, .75),
                a = Math.max(n.d, .25),
                l = this.node.attributes.get("columnalign"),
                h = this.node.attributes.get("rowalign"),
                c = this.getAlignX(r, n, l),
                u = this.getAlignY(o, i, s, a, h);
            return this.place(t + c, e + u), [c, u]
        }, c.prototype.placeColor = function (t, e, r, o) {
            var i = this.adaptor,
                n = i.firstChild(this.element);
            n && "rect" === i.kind(n) && i.getAttribute(n, "data-bgcolor") && (i.setAttribute(n, "x", this.fixed(t)), i.setAttribute(n, "y", this.fixed(e)), i.setAttribute(n, "width", this.fixed(r)), i.setAttribute(n, "height", this.fixed(o)))
        }, c.kind = l.MmlMtd.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmtd = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(11),
        l = r(11),
        h = r(101),
        c = (n = a.CommonMactionMixin(s.SVGWrapper), i(u, n), u.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = this.selected,
                o = r.getBBox(),
                i = o.h,
                n = o.d,
                s = o.w;
            this.adaptor.append(this.element, this.svg("rect", {
                width: this.fixed(s),
                height: this.fixed(i + n),
                y: this.fixed(-n),
                fill: "none",
                "pointer-events": "all"
            })), r.toSVG(e), this.action(this, this.data)
        }, u.prototype.setEventHandler = function (t, e) {
            this.element.addEventListener(t, e)
        }, u.kind = h.MmlMaction.prototype.kind, u.styles = {
            '[jax="SVG"] mjx-tool': {
                display: "inline-block",
                position: "relative",
                width: 0,
                height: 0
            },
            '[jax="SVG"] mjx-tool > mjx-tip': {
                position: "absolute",
                top: 0,
                left: 0
            },
            "mjx-tool > mjx-tip": {
                display: "inline-block",
                padding: ".2em",
                border: "1px solid #888",
                "font-size": "70%",
                "background-color": "#F8F8F8",
                color: "black",
                "box-shadow": "2px 2px 5px #AAAAAA"
            },
            'g[data-mml-node="maction"][data-toggle]': {
                cursor: "pointer"
            },
            "mjx-status": {
                display: "block",
                position: "fixed",
                left: "1em",
                bottom: "1em",
                "min-width": "25%",
                padding: ".2em .4em",
                border: "1px solid #888",
                "font-size": "90%",
                "background-color": "#F8F8F8",
                color: "black"
            }
        }, u.actions = new Map([
            ["toggle", [function (t, e) {
                t.adaptor.setAttribute(t.element, "data-toggle", t.node.attributes.get("selection"));
                var r = t.factory.jax.math,
                    o = t.factory.jax.document,
                    i = t.node;
                t.setEventHandler("click", function (t) {
                    r.start.node || (r.start.node = r.end.node = r.typesetRoot, r.start.n = r.end.n = 0), i.nextToggleSelection(), r.rerender(o), t.stopPropagation()
                })
            }, {}]],
            ["tooltip", [function (i, r) {
                var t = i.childNodes[1];
                if (t) {
                    var e = i.adaptor.firstChild(i.element);
                    if (t.node.isKind("mtext")) {
                        var o = t.node.getText();
                        i.adaptor.insert(i.svg("title", {}, [i.text(o)]), e)
                    } else {
                        var n = i.adaptor,
                            s = i.jax.container,
                            a = i.node.factory.create("math", {}, [i.childNodes[1].node]),
                            l = i.html("mjx-tool", {}, [i.html("mjx-tip")]),
                            h = n.append(e, i.svg("foreignObject", {
                                style: {
                                    display: "none"
                                }
                            }, [l]));
                        i.jax.processMath(a, n.firstChild(l)), i.childNodes[1].node.parent = i.node, i.setEventHandler("mouseover", function (t) {
                            r.stopTimers(i, r), r.hoverTimer.set(i, setTimeout(function () {
                                n.setStyle(l, "left", "0"), n.setStyle(l, "top", "0"), n.append(s, l);
                                var t = n.nodeBBox(l),
                                    e = n.nodeBBox(i.element),
                                    r = (e.right - t.left) / i.metrics.em + i.dx,
                                    o = (e.bottom - t.bottom) / i.metrics.em + i.dy;
                                n.setStyle(l, "left", i.px(r)), n.setStyle(l, "top", i.px(o))
                            }, r.postDelay)), t.stopPropagation()
                        }), i.setEventHandler("mouseout", function (t) {
                            r.stopTimers(i, r);
                            var e = setTimeout(function () {
                                return n.append(h, l)
                            }, r.clearDelay);
                            r.clearTimer.set(i, e), t.stopPropagation()
                        })
                    }
                }
            }, l.TooltipData]],
            ["statusline", [function (r, o) {
                var t = r.childNodes[1];
                if (t && t.node.isKind("mtext")) {
                    var i = r.adaptor,
                        n = t.node.getText();
                    i.setAttribute(r.element, "data-statusline", n), r.setEventHandler("mouseover", function (t) {
                        if (null === o.status) {
                            var e = i.body(i.document);
                            o.status = i.append(e, r.html("mjx-status", {}, [r.text(n)]))
                        }
                        t.stopPropagation()
                    }), r.setEventHandler("mouseout", function (t) {
                        o.status && (i.remove(o.status), o.status = null), t.stopPropagation()
                    })
                }
            }, {
                status: null
            }]]
        ]), u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmaction = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        u = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        y = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var o, i, n = r.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || 0 < e--) && !(o = n.next()).done;) s.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(24),
        l = r(66),
        h = r(102),
        c = (n = a.CommonMencloseMixin(s.SVGWrapper), i(p, n), p.prototype.toSVG = function (t) {
            var e, r, o = this.standardSVGnode(t),
                i = this.getBBoxExtenders()[3],
                n = {};
            0 < i && (n.transform = "translate(" + this.fixed(i) + ", 0)");
            var s = this.adaptor.append(o, this.svg("g", n));
            this.renderChild ? this.renderChild(this, s) : this.childNodes[0].toSVG(s);
            try {
                for (var a = u(Object.keys(this.notations)), l = a.next(); !l.done; l = a.next()) {
                    var h = l.value,
                        c = this.notations[h];
                    c.renderChild || c.renderer(this, o)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (r = a.return) && r.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
        }, p.prototype.arrow = function (t, e, r) {
            void 0 === r && (r = !1);
            var o = this.getBBox(),
                i = o.w,
                n = (t - i) / 2,
                s = (o.h - o.d) / 2,
                a = this.thickness,
                l = a / 2,
                h = y([a * this.arrowhead.x, a * this.arrowhead.y, a * this.arrowhead.dx], 3),
                c = h[0],
                u = h[1],
                p = h[2],
                d = r ? this.fill("M", i + n, s, "l", -(c + p), u, "l", p, l - u, "L", c - n, s + l, "l", p, u - l, "l", -(c + p), -u, "l", c + p, -u, "l", -p, u - l, "L", i + n - c, s - l, "l", -p, l - u, "Z") : this.fill("M", i + n, s, "l", -(c + p), u, "l", p, l - u, "L", -n, s + l, "l", 0, -a, "L", i + n - c, s - l, "l", -p, l - u, "Z");
            if (e) {
                var f = this.jax.fixed(180 * -e / Math.PI);
                this.adaptor.setAttribute(d, "transform", "rotate(" + [f, this.fixed(i / 2), this.fixed(s)].join(" ") + ")")
            }
            return d
        }, p.prototype.line = function (t) {
            var e = y(t, 4),
                r = e[0],
                o = e[1],
                i = e[2],
                n = e[3];
            return this.svg("line", {
                x1: this.fixed(r),
                y1: this.fixed(o),
                x2: this.fixed(i),
                y2: this.fixed(n),
                "stroke-width": this.fixed(this.thickness)
            })
        }, p.prototype.box = function (t, e, r, o) {
            void 0 === o && (o = 0);
            var i = this.thickness,
                n = {
                    x: this.fixed(i / 2),
                    y: this.fixed(i / 2 - r),
                    width: this.fixed(t - i),
                    height: this.fixed(e + r - i),
                    fill: "none",
                    "stroke-width": this.fixed(i)
                };
            return o && (n.rx = this.fixed(o)), this.svg("rect", n)
        }, p.prototype.ellipse = function (t, e, r) {
            var o = this.thickness;
            return this.svg("ellipse", {
                rx: this.fixed((t - o) / 2),
                ry: this.fixed((e + r - o) / 2),
                cx: this.fixed(t / 2),
                cy: this.fixed((e - r) / 2),
                fill: "none",
                "stroke-width": this.fixed(o)
            })
        }, p.prototype.path = function (t) {
            for (var e = this, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
            return this.svg("path", {
                d: r.map(function (t) {
                    return "string" == typeof t ? t : e.fixed(t)
                }).join(" "),
                style: {
                    "stroke-width": this.fixed(this.thickness)
                },
                "stroke-linecap": "round",
                "stroke-linejoin": t,
                fill: "none"
            })
        }, p.prototype.fill = function () {
            for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return this.svg("path", {
                d: t.map(function (t) {
                    return "string" == typeof t ? t : e.fixed(t)
                }).join(" ")
            })
        }, p.kind = h.MmlMenclose.prototype.kind, p.notations = new Map([l.Border("top"), l.Border("right"), l.Border("bottom"), l.Border("left"), l.Border2("actuarial", "top", "right"), l.Border2("madruwb", "bottom", "right"), l.DiagonalStrike("up"), l.DiagonalStrike("down"), ["horizontalstrike", {
                renderer: l.RenderLine("horizontal"),
                bbox: function (t) {
                    return [0, t.padding, 0, t.padding]
                }
            }],
            ["verticalstrike", {
                renderer: l.RenderLine("vertical"),
                bbox: function (t) {
                    return [t.padding, 0, t.padding, 0]
                }
            }],
            ["box", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d;
                    t.adaptor.append(t.element, t.box(o, i, n))
                },
                bbox: l.fullBBox,
                border: l.fullBorder,
                remove: "left right top bottom"
            }],
            ["roundedbox", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d,
                        s = t.thickness + t.padding;
                    t.adaptor.append(t.element, t.box(o, i, n, s))
                },
                bbox: l.fullBBox
            }],
            ["circle", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d;
                    t.adaptor.append(t.element, t.ellipse(o, i, n))
                },
                bbox: l.fullBBox
            }],
            ["phasorangle", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d,
                        s = y(t.getArgMod(1.75 * t.padding, i + n), 2),
                        a = s[0],
                        l = (s[1], t.thickness / 2),
                        h = i + n,
                        c = Math.cos(a);
                    t.adaptor.append(t.element, t.path("mitre", "M", o, l - n, "L", l + c * l, l - n, "L", c * h + l, h - n - l))
                },
                bbox: function (t) {
                    var e = t.padding / 2,
                        r = t.thickness;
                    return [2 * e, e, e + r, 3 * e + r]
                },
                border: function (t) {
                    return [0, 0, t.thickness, 0]
                },
                remove: "bottom"
            }], l.Arrow("up"), l.Arrow("down"), l.Arrow("left"), l.Arrow("right"), l.Arrow("updown"), l.Arrow("leftright"), l.DiagonalArrow("updiagonal"), l.DiagonalArrow("northeast"), l.DiagonalArrow("southeast"), l.DiagonalArrow("northwest"), l.DiagonalArrow("southwest"), l.DiagonalArrow("northeastsouthwest"), l.DiagonalArrow("northwestsoutheast"), ["longdiv", {
                renderer: function (t, e) {
                    var r = t.getBBox(),
                        o = r.w,
                        i = r.h,
                        n = r.d,
                        s = t.thickness / 2,
                        a = t.padding;
                    t.adaptor.append(t.element, t.path("round", "M", s, s - n, "a", a - s / 2, (i + n) / 2 - 4 * s, 0, "0,1", 0, i + n - 2 * s, "L", o - s, i - s))
                },
                bbox: function (t) {
                    var e = t.padding,
                        r = t.thickness;
                    return [e + r, e, e, 2 * e + r / 2]
                }
            }],
            ["radical", {
                renderer: function (t, e) {
                    t.msqrt.toSVG(e);
                    var r = t.sqrtTRBL()[3];
                    t.place(-r, 0, e)
                },
                init: function (t) {
                    t.msqrt = t.createMsqrt(t.childNodes[0])
                },
                bbox: function (t) {
                    return t.sqrtTRBL()
                },
                renderChild: !0
            }]
        ]), p);

    function p() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmenclose = c
}, function (t, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var i = e(5);
    ! function (t) {
        for (var e in t) a.hasOwnProperty(e) || (a[e] = t[e])
    }(e(5)), a.computeLineData = {
        top: function (t, e, r, o) {
            return [0, t - o, r, t - o]
        },
        right: function (t, e, r, o) {
            return [r - o, -e, r - o, t]
        },
        bottom: function (t, e, r, o) {
            return [0, o - e, r, o - e]
        },
        left: function (t, e, r, o) {
            return [o, -e, o, t]
        },
        vertical: function (t, e, r, o) {
            return [r / 2 - o, t, r / 2 - o, -e]
        },
        horizontal: function (t, e, r, o) {
            return [0, (t - e) / 2 - o, r, (t - e) / 2 - o]
        },
        up: function (t, e, r, o) {
            return [o, o - e, r - o, t - o]
        },
        down: function (t, e, r, o) {
            return [o, t - o, r - o, o - e]
        }
    }, a.lineData = function (t, e) {
        var r = t.getBBox(),
            o = r.h,
            i = r.d,
            n = r.w,
            s = t.thickness / 2;
        return a.computeLineData[e](o, i, n, s)
    }, a.RenderLine = function (r) {
        return function (t, e) {
            t.adaptor.append(t.element, t.line(a.lineData(t, r)))
        }
    }, a.Border = function (r) {
        return i.CommonBorder(function (t, e) {
            t.adaptor.append(t.element, t.line(a.lineData(t, r)))
        })(r)
    }, a.Border2 = function (t, r, o) {
        return i.CommonBorder2(function (t, e) {
            t.adaptor.append(t.element, t.line(a.lineData(t, r))), t.adaptor.append(t.element, t.line(a.lineData(t, o)))
        })(t, r, o)
    }, a.DiagonalStrike = function (r) {
        return i.CommonDiagonalStrike(function (t) {
            return function (t, e) {
                t.adaptor.append(t.element, t.line(a.lineData(t, r)))
            }
        })(r)
    }, a.DiagonalArrow = function (t) {
        return i.CommonDiagonalArrow(function (t, e) {
            t.adaptor.append(t.element, e)
        })(t)
    }, a.Arrow = function (t) {
        return i.CommonArrow(function (t, e) {
            t.adaptor.append(t.element, e)
        })(t)
    }
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(41),
        l = r(103),
        h = r(3),
        c = (n = a.CommonSemanticsMixin(s.SVGWrapper), i(u, n), u.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t);
            this.childNodes.length && this.childNodes[0].toSVG(e)
        }, u.kind = l.MmlSemantics.prototype.kind, u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGsemantics = c;
    var p, d = (p = s.SVGWrapper, i(f, p), f.prototype.toSVG = function (t) {
        p.prototype.toSVG.call(this, t)
    }, f.prototype.computeBBox = function () {
        return this.bbox
    }, f.kind = l.MmlAnnotation.prototype.kind, f);

    function f() {
        return null !== p && p.apply(this, arguments) || this
    }
    e.SVGannotation = d;
    var y, m = (y = s.SVGWrapper, i(v, y), v.kind = l.MmlAnnotationXML.prototype.kind, v.styles = {
        "foreignObject[data-mjx-xml]": {
            "font-family": "initial",
            "line-height": "normal",
            overflow: "visible"
        }
    }, v);

    function v() {
        return null !== y && y.apply(this, arguments) || this
    }
    e.SVGannotationXML = m;
    var b, g = (b = s.SVGWrapper, i(x, b), x.prototype.toSVG = function (t) {
        var e = this.adaptor.clone(this.node.getXML()),
            r = this.jax.math.metrics.em * this.jax.math.metrics.scale,
            o = this.fixed(1 / r),
            i = this.getBBox(),
            n = i.w,
            s = i.h,
            a = i.d;
        this.element = this.adaptor.append(t, this.svg("foreignObject", {
            "data-mjx-xml": !0,
            y: this.jax.fixed(-s * r) + "px",
            width: this.jax.fixed(n * r) + "px",
            height: this.jax.fixed((s + a) * r) + "px",
            transform: "scale(" + o + ") matrix(1 0 0 -1 0 0)"
        }, [e]))
    }, x.prototype.computeBBox = function (t, e) {
        void 0 === e && (e = !1);
        var r = this.jax.measureXMLnode(this.node.getXML()),
            o = r.w,
            i = r.h,
            n = r.d;
        t.w = o, t.h = i, t.d = n
    }, x.prototype.getStyles = function () {}, x.prototype.getScale = function () {}, x.prototype.getVariant = function () {}, x.kind = h.XMLNode.prototype.kind, x.autoStyle = !1, x);

    function x() {
        return null !== b && b.apply(this, arguments) || this
    }
    e.SVGxml = g
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(27),
        l = r(104),
        h = (n = a.CommonMglyphMixin(s.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            var e = this.standardSVGnode(t),
                r = this.node.attributes.getList("src", "alt"),
                o = r.src,
                i = r.alt,
                n = this.fixed(this.height),
                s = {
                    width: this.fixed(this.width),
                    height: n,
                    transform: "translate(0 " + this.fixed(this.height + (this.valign || 0)) + ") matrix(1 0 0 -1 0 0)",
                    preserveAspectRatio: "none",
                    alt: i,
                    title: i,
                    href: o
                },
                a = this.svg("image", s);
            this.adaptor.append(e, a)
        }, c.kind = l.MmlMglyph.prototype.kind, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGmglyph = h
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
    }, function (t, e) {
        function r() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(0),
        a = r(21),
        l = r(105),
        h = r(3),
        c = (n = a.CommonTeXAtomMixin(s.SVGWrapper), i(u, n), u.prototype.toSVG = function (t) {
            if (n.prototype.toSVG.call(this, t), this.adaptor.setAttribute(this.element, "data-mjx-texclass", h.TEXCLASSNAMES[this.node.texClass]), this.node.texClass === h.TEXCLASS.VCENTER) {
                var e = this.childNodes[0].getBBox(),
                    r = e.h,
                    o = (r + e.d) / 2 + this.font.params.axis_height - r,
                    i = "translate(0 " + this.fixed(o) + ")";
                this.adaptor.setAttribute(this.element, "transform", i)
            }
        }, u.kind = l.TeXAtom.prototype.kind, u);

    function u() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGTeXAtom = c
}, function (t, e, r) {
    "use strict";
    var o, i = this && this.__extends || (o = function (t, e) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        u = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                o = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function () {
                    return t && o >= t.length && (t = void 0), {
                        value: t && t[o++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, s = r(3),
        a = r(0),
        l = r(22),
        h = (n = l.CommonTextNodeMixin(a.SVGWrapper), i(c, n), c.prototype.toSVG = function (t) {
            var e, r, o = this.node.getText(),
                i = this.parent.variant;
            if ("-explicitFont" === i) this.adaptor.append(t, this.jax.unknownText(o, i));
            else {
                var n = this.parent.stretch.c,
                    s = this.parent.remapChars(n ? [n] : this.unicodeChars(o, i)),
                    a = 0;
                try {
                    for (var l = u(s), h = l.next(); !h.done; h = l.next()) {
                        var c = h.value;
                        a += this.placeChar(c, a, 0, t, i)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        h && !h.done && (r = l.return) && r.call(l)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }
            this.element = this.adaptor.lastChild(t)
        }, c.kind = s.TextNode.prototype.kind, c.styles = {
            ".MathJax path": {
                "stroke-width": 3
            }
        }, c);

    function c() {
        return null !== n && n.apply(this, arguments) || this
    }
    e.SVGTextNode = h
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = (i.prototype.cachePath = function (t, e, r) {
        var o = "MJX-" + this.localID + (this.jax.font.getVariant(t).cacheID || "") + "-" + e;
        return this.cache.has(o) || (this.cache.set(o, r), this.jax.adaptor.append(this.defs, this.jax.svg("path", {
            id: o,
            d: r
        }))), o
    }, i.prototype.clearLocalID = function () {
        this.localID = ""
    }, i.prototype.useLocalID = function (t) {
        void 0 === t && (t = null), this.localID = (null == t ? ++this.nextID : t) + ("" === t ? "" : "-")
    }, i.prototype.clearCache = function () {
        this.cache = new Map, this.defs = this.jax.svg("defs")
    }, i.prototype.getCache = function () {
        return this.defs
    }, i);

    function i(t) {
        this.cache = new Map, this.defs = null, this.localID = "", this.nextID = 0, this.jax = t
    }
    e.FontCache = o
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Styles = MathJax._.util.Styles.Styles
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(1);
    e.BBox = o.BBox, e.BBoxStyleAdjust = o.BBoxStyleAdjust
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AbstractOutputJax = MathJax._.core.OutputJax.AbstractOutputJax
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.protoItem = MathJax._.core.MathItem.protoItem, e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem, e.STATE = MathJax._.core.MathItem.STATE, e.newState = MathJax._.core.MathItem.newState
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.APPEND = MathJax._.util.Options.APPEND, e.REMOVE = MathJax._.util.Options.REMOVE, e.Expandable = MathJax._.util.Options.Expandable, e.expandable = MathJax._.util.Options.expandable, e.makeArray = MathJax._.util.Options.makeArray, e.keys = MathJax._.util.Options.keys, e.copy = MathJax._.util.Options.copy, e.insert = MathJax._.util.Options.insert, e.defaultOptions = MathJax._.util.Options.defaultOptions, e.userOptions = MathJax._.util.Options.userOptions, e.selectOptions = MathJax._.util.Options.selectOptions, e.selectOptionsFromKeys = MathJax._.util.Options.selectOptionsFromKeys, e.separateOptions = MathJax._.util.Options.separateOptions
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AbstractWrapper = MathJax._.core.Tree.Wrapper.AbstractWrapper
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AbstractWrapperFactory = MathJax._.core.Tree.WrapperFactory.AbstractWrapperFactory
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sum = MathJax._.util.numeric.sum, e.max = MathJax._.util.numeric.max
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMath = MathJax._.core.MmlTree.MmlNodes.math.MmlMath
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMrow = MathJax._.core.MmlTree.MmlNodes.mrow.MmlMrow, e.MmlInferredMrow = MathJax._.core.MmlTree.MmlNodes.mrow.MmlInferredMrow
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMi = MathJax._.core.MmlTree.MmlNodes.mi.MmlMi
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMo = MathJax._.core.MmlTree.MmlNodes.mo.MmlMo
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMn = MathJax._.core.MmlTree.MmlNodes.mn.MmlMn
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMs = MathJax._.core.MmlTree.MmlNodes.ms.MmlMs
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMtext = MathJax._.core.MmlTree.MmlNodes.mtext.MmlMtext
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMerror = MathJax._.core.MmlTree.MmlNodes.merror.MmlMerror
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMspace = MathJax._.core.MmlTree.MmlNodes.mspace.MmlMspace
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMpadded = MathJax._.core.MmlTree.MmlNodes.mpadded.MmlMpadded
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMphantom = MathJax._.core.MmlTree.MmlNodes.mphantom.MmlMphantom
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMfrac = MathJax._.core.MmlTree.MmlNodes.mfrac.MmlMfrac
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMsqrt = MathJax._.core.MmlTree.MmlNodes.msqrt.MmlMsqrt
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMroot = MathJax._.core.MmlTree.MmlNodes.mroot.MmlMroot
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMfenced = MathJax._.core.MmlTree.MmlNodes.mfenced.MmlMfenced
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMsubsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsubsup, e.MmlMsub = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsub, e.MmlMsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsup
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMunderover = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunderover, e.MmlMunder = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunder, e.MmlMover = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMover
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMmultiscripts = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMmultiscripts, e.MmlMprescripts = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMprescripts, e.MmlNone = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlNone
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMtable = MathJax._.core.MmlTree.MmlNodes.mtable.MmlMtable
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMtr, e.MmlMlabeledtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMlabeledtr
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMtd = MathJax._.core.MmlTree.MmlNodes.mtd.MmlMtd
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMaction = MathJax._.core.MmlTree.MmlNodes.maction.MmlMaction
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMenclose = MathJax._.core.MmlTree.MmlNodes.menclose.MmlMenclose
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlSemantics = MathJax._.core.MmlTree.MmlNodes.semantics.MmlSemantics, e.MmlAnnotationXML = MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotationXML, e.MmlAnnotation = MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotation
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MmlMglyph = MathJax._.core.MmlTree.MmlNodes.mglyph.MmlMglyph
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TeXAtom = MathJax._.core.MmlTree.MmlNodes.TeXAtom.TeXAtom
}, function (t, e, r) {
    "use strict";
    r.r(e), r.d(e, "TeXFont", function () {
        return l
    });
    var o = r(16);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function n(n) {
        return function () {
            var t, e, r, o = a(n);
            if (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), 1
                    } catch (t) {
                        return
                    }
                }()) {
                var i = a(this).constructor;
                t = Reflect.construct(o, arguments, i)
            } else t = o.apply(this, arguments);
            return e = this, !(r = t) || "object" !== s(r) && "function" != typeof r ? function (t) {
                if (void 0 !== t) return t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : r
        }
    }

    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var l = function () {
        ! function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }(e, o["FontData"]);
        var t = n(e);

        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t.apply(this, arguments)
        }
        return e
    }();
    l.OPTIONS = {
        fontURL: "."
    }
}, function (t, e, r) {
    "use strict";
    r.r(e);
    var o = r(15),
        i = r(1),
        n = r(17),
        s = r(2),
        a = r(5),
        l = r(18),
        h = r(19),
        c = r(20),
        u = r(21),
        p = r(22),
        d = r(11),
        f = r(23),
        y = r(24),
        m = r(25),
        v = r(26),
        b = r(27),
        g = r(28),
        x = r(29),
        _ = r(30),
        M = r(31),
        w = r(32),
        S = r(33),
        O = r(12),
        B = r(34),
        C = r(35),
        j = r(36),
        P = r(6),
        V = r(37),
        A = r(38),
        k = r(39),
        G = r(13),
        N = r(7),
        T = r(40),
        D = r(41),
        L = r(9),
        W = r(71),
        R = r(16),
        I = r(66),
        E = r(0),
        J = r(42),
        H = r(43),
        F = r(69),
        z = r(70),
        X = r(64),
        q = r(44),
        K = r(65),
        U = r(51),
        Q = r(57),
        Y = r(55),
        $ = r(68),
        Z = r(46),
        tt = r(60),
        et = r(48),
        rt = r(47),
        ot = r(53),
        it = r(54),
        nt = r(56),
        st = r(45),
        at = r(49),
        lt = r(52),
        ht = r(14),
        ct = r(8),
        ut = r(61),
        pt = r(63),
        dt = r(50),
        ft = r(62),
        yt = r(59),
        mt = r(58),
        vt = r(67);
    Object(o.combineWithMathJax)({
        _: {
            output: {
                common: {
                    BBox: i,
                    CssStyles: n,
                    FontData: s,
                    Notation: a,
                    OutputJax: l,
                    Wrapper: h,
                    WrapperFactory: c,
                    Wrappers: {
                        TeXAtom: u,
                        TextNode: p,
                        maction: d,
                        math: f,
                        menclose: y,
                        mfenced: m,
                        mfrac: v,
                        mglyph: b,
                        mi: g,
                        mmultiscripts: x,
                        mn: _,
                        mo: M,
                        mpadded: w,
                        mroot: S,
                        mrow: O,
                        ms: B,
                        mspace: C,
                        msqrt: j,
                        msubsup: P,
                        mtable: V,
                        mtd: A,
                        mtext: k,
                        mtr: G,
                        munderover: N,
                        scriptbase: T,
                        semantics: D
                    }
                },
                svg_ts: L,
                svg: {
                    FontCache: W,
                    FontData: R,
                    Notation: I,
                    Wrapper: E,
                    WrapperFactory: J,
                    Wrappers_ts: H,
                    Wrappers: {
                        TeXAtom: F,
                        TextNode: z,
                        maction: X,
                        math: q,
                        menclose: K,
                        merror: U,
                        mfenced: Q,
                        mfrac: Y,
                        mglyph: $,
                        mi: Z,
                        mmultiscripts: tt,
                        mn: et,
                        mo: rt,
                        mpadded: ot,
                        mphantom: it,
                        mroot: nt,
                        mrow: st,
                        ms: at,
                        mspace: lt,
                        msqrt: ht,
                        msubsup: ct,
                        mtable: ut,
                        mtd: pt,
                        mtext: dt,
                        mtr: ft,
                        munderover: yt,
                        scriptbase: mt,
                        semantics: vt
                    }
                }
            }
        }
    }), MathJax.loader && Object(o.combineDefaults)(MathJax.config.loader, "output/svg", {
        checkReady: function () {
            return MathJax.loader.load("output/svg/fonts/tex")
        }
    }), MathJax.startup && (MathJax.startup.registerConstructor("svg", L.SVG), MathJax.startup.useOutput("svg"))
}]);