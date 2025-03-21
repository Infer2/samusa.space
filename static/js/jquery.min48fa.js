/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
	"use strict";
	var n = [],
		r = Object.getPrototypeOf,
		o = n.slice,
		i = n.flat ? function(e) {
			return n.flat.call(e)
		} : function(e) {
			return n.concat.apply([], e)
		},
		a = n.push,
		s = n.indexOf,
		u = {},
		l = u.toString,
		c = u.hasOwnProperty,
		f = c.toString,
		d = f.call(Object),
		p = {},
		h = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		g = function(e) {
			return null != e && e === e.window
		},
		m = e.document,
		v = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function y(e, t, n) {
		var r, o, i = (n = n || m).createElement("script");
		if (i.text = e, t)
			for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
		n.head.appendChild(i).parentNode.removeChild(i)
	}

	function x(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
	}
	var b = "3.5.1",
		w = function(e, t) {
			return new w.fn.init(e, t)
		};

	function T(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	w.fn = w.prototype = {
		jquery: b,
		constructor: w,
		length: 0,
		toArray: function() {
			return o.call(this)
		},
		get: function(e) {
			return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return w.each(this, e)
		},
		map: function(e) {
			return this.pushStack(w.map(this, (function(t, n) {
				return e.call(t, n, t)
			})))
		},
		slice: function() {
			return this.pushStack(o.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(w.grep(this, (function(e, t) {
				return (t + 1) % 2
			})))
		},
		odd: function() {
			return this.pushStack(w.grep(this, (function(e, t) {
				return t % 2
			})))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: a,
		sort: n.sort,
		splice: n.splice
	}, w.extend = w.fn.extend = function() {
		var e, t, n, r, o, i, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, a[t] = w.extend(l, i, r)) : void 0 !== r && (a[t] = r));
		return a
	}, w.extend({
		expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== l.call(e) || (t = r(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			y(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (T(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : s.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
			return e.length = o, e
		},
		grep: function(e, t, n) {
			for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
			return r
		},
		map: function(e, t, n) {
			var r, o, a = 0,
				s = [];
			if (T(e))
				for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
			else
				for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
			return i(s)
		},
		guid: 1,
		support: p
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
		u["[object " + t + "]"] = t.toLowerCase()
	}));
	var C = function(e) {
		var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
			w = e.document,
			T = 0,
			C = 0,
			k = ue(),
			S = ue(),
			E = ue(),
			A = ue(),
			N = function(e, t) {
				return e === t && (f = !0), 0
			},
			D = {}.hasOwnProperty,
			j = [],
			L = j.pop,
			q = j.push,
			H = j.push,
			O = j.slice,
			M = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			R = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			$ = "\\[" + R + "*(" + I + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + R + "*\\]",
			B = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			W = new RegExp(R + "+", "g"),
			F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
			_ = new RegExp("^" + R + "*," + R + "*"),
			z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
			U = new RegExp(R + "|>"),
			X = new RegExp(B),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + B),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			oe = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			ie = function() {
				d()
			},
			ae = be((function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}), {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
		} catch (t) {
			H = {
				apply: j.length ? function(e, t) {
					q.apply(e, O.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}

		function se(e, t, r, o) {
			var i, s, l, c, f, h, v, y = t && t.ownerDocument,
				w = t ? t.nodeType : 9;
			if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
			if (!o && (d(t), t = t || p, g)) {
				if (11 !== w && (f = Z.exec(e)))
					if (i = f[1]) {
						if (9 === w) {
							if (!(l = t.getElementById(i))) return r;
							if (l.id === i) return r.push(l), r
						} else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
					} else {
						if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
						if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(i)), r
					} if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
					if (v = e, y = t, 1 === w && (U.test(e) || z.test(e))) {
						for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
						v = h.join(",")
					}
					try {
						return H.apply(r, y.querySelectorAll(v)), r
					} catch (t) {
						A(e, !0)
					} finally {
						c === b && t.removeAttribute("id")
					}
				}
			}
			return u(e.replace(F, "$1"), t, r, o)
		}

		function ue() {
			var e = [];
			return function t(n, o) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
			}
		}

		function le(e) {
			return e[b] = !0, e
		}

		function ce(e) {
			var t = p.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
		}

		function de(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function pe(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function he(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function ge(e) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function me(e) {
			return le((function(t) {
				return t = +t, le((function(n, r) {
					for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
				}))
			}))
		}

		function ve(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (t in n = se.support = {}, i = se.isXML = function(e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, d = se.setDocument = function(e) {
				var t, o, a = e ? e.ownerDocument || e : w;
				return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ce((function(e) {
					return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				})), n.attributes = ce((function(e) {
					return e.className = "i", !e.getAttribute("className")
				})), n.getElementsByTagName = ce((function(e) {
					return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
				})), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce((function(e) {
					return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
				})), n.getById ? (r.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, r.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && g) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (r.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}, r.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && g) {
						var n, r, o, i = t.getElementById(e);
						if (i) {
							if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
							for (o = t.getElementsByName(e), r = 0; i = o[r++];)
								if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
						}
						return []
					}
				}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						o = 0,
						i = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = i[o++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return i
				}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
					if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
				}, v = [], m = [], (n.qsa = K.test(p.querySelectorAll)) && (ce((function(e) {
					var t;
					h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
				})), ce((function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = p.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
				}))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
					n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", B)
				})), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, N = t ? function(e, t) {
					if (e === t) return f = !0, 0;
					var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1)
				} : function(e, t) {
					if (e === t) return f = !0, 0;
					var n, r = 0,
						o = e.parentNode,
						i = t.parentNode,
						a = [e],
						s = [t];
					if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? M(c, e) - M(c, t) : 0;
					if (o === i) return de(e, t);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (; a[r] === s[r];) r++;
					return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
				}), p
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if (d(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
					var r = y.call(e, t);
					if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (e) {
					A(t, !0)
				}
				return 0 < se(t, p, null, [e]).length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) != p && d(e), x(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) != p && d(e);
				var o = r.attrHandle[t.toLowerCase()],
					i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
				return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, se.escape = function(e) {
				return (e + "").replace(re, oe)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, r = [],
					o = 0,
					i = 0;
				if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
					for (; t = e[i++];) t === e[i] && (o = r.push(i));
					for (; o--;) e.splice(r[o], 1)
				}
				return c = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r++];) n += o(t);
				return n
			}, (r = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = k[e + " "];
						return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, (function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						}))
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var o = se.attr(r, e);
							return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
						}
					},
					CHILD: function(e, t, n, r, o) {
						var i = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === o ? function(e) {
							return !!e.parentNode
						} : function(t, n, u) {
							var l, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !u && !s,
								x = !1;
							if (m) {
								if (i) {
									for (; g;) {
										for (d = t; d = d[g];)
											if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && y) {
									for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
										if (1 === d.nodeType && ++x && d === t) {
											c[e] = [T, p, x];
											break
										}
								} else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
									for (;
										(d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]), d !== t)););
								return (x -= o) === r || x % r == 0 && 0 <= x / r
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
							for (var r, i = o(e, t), a = i.length; a--;) e[r = M(e, i[a])] = !(n[r] = i[a])
						})) : function(e) {
							return o(e, 0, n)
						}) : o
					}
				},
				pseudos: {
					not: le((function(e) {
						var t = [],
							n = [],
							r = s(e.replace(F, "$1"));
						return r[b] ? le((function(e, t, n, o) {
							for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
						})) : function(e, o, i) {
							return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
						}
					})),
					has: le((function(e) {
						return function(t) {
							return 0 < se(e, t).length
						}
					})),
					contains: le((function(e) {
						return e = e.replace(te, ne),
							function(t) {
								return -1 < (t.textContent || o(t)).indexOf(e)
							}
					})),
					lang: le((function(e) {
						return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
							function(t) {
								var n;
								do {
									if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					})),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === h
					},
					focus: function(e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !r.pseudos.empty(e)
					},
					header: function(e) {
						return J.test(e.nodeName)
					},
					input: function(e) {
						return Q.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: me((function() {
						return [0]
					})),
					last: me((function(e, t) {
						return [t - 1]
					})),
					eq: me((function(e, t, n) {
						return [n < 0 ? n + t : n]
					})),
					even: me((function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					})),
					odd: me((function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					})),
					lt: me((function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					})),
					gt: me((function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					}))
				}
			}).pseudos.nth = r.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = pe(t);
		for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = he(t);

		function ye() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(e, t, n) {
			var r = t.dir,
				o = t.next,
				i = o || r,
				a = n && "parentNode" === i,
				s = C++;
			return t.first ? function(t, n, o) {
				for (; t = t[r];)
					if (1 === t.nodeType || a) return e(t, n, o);
				return !1
			} : function(t, n, u) {
				var l, c, f, d = [T, s];
				if (u) {
					for (; t = t[r];)
						if ((1 === t.nodeType || a) && e(t, n, u)) return !0
				} else
					for (; t = t[r];)
						if (1 === t.nodeType || a)
							if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if ((l = c[i]) && l[0] === T && l[1] === s) return d[2] = l[2];
								if ((c[i] = d)[2] = e(t, n, u)) return !0
							} return !1
			}
		}

		function we(e) {
			return 1 < e.length ? function(t, n, r) {
				for (var o = e.length; o--;)
					if (!e[o](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function Te(e, t, n, r, o) {
			for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
			return a
		}

		function Ce(e, t, n, r, o, i) {
			return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), le((function(i, a, s, u) {
				var l, c, f, d = [],
					p = [],
					h = a.length,
					g = i || function(e, t, n) {
						for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
						return n
					}(t || "*", s.nodeType ? [s] : s, []),
					m = !e || !i && t ? g : Te(g, d, e, s, u),
					v = n ? o || (i ? e : h || r) ? [] : a : m;
				if (n && n(m, v, s, u), r)
					for (l = Te(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
				if (i) {
					if (o || e) {
						if (o) {
							for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
							o(null, v = [], l, u)
						}
						for (c = v.length; c--;)(f = v[c]) && -1 < (l = o ? M(i, f) : d[c]) && (i[l] = !(a[l] = f))
					}
				} else v = Te(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : H.apply(a, v)
			}))
		}

		function ke(e) {
			for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
					return e === t
				}), s, !0), f = be((function(e) {
					return -1 < M(t, e)
				}), s, !0), d = [function(e, n, r) {
					var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
					return t = null, o
				}]; u < i; u++)
				if (n = r.relative[e[u].type]) d = [be(we(d), n)];
				else {
					if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
						for (o = ++u; o < i && !r.relative[e[o].type]; o++);
						return Ce(1 < u && we(d), 1 < u && xe(e.slice(0, u - 1).concat({
							value: " " === e[u - 2].type ? "*" : ""
						})).replace(F, "$1"), n, u < o && ke(e.slice(u, o)), o < i && ke(e = e.slice(o)), o < i && xe(e))
					}
					d.push(n)
				} return we(d)
		}
		return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
			var n, o, i, a, s, u, l, c = S[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (s = e, u = [], l = r.preFilter; s;) {
				for (a in n && !(o = _.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), i.push({
						value: n,
						type: o[0].replace(F, " ")
					}), s = s.slice(n.length)), r.filter) !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
					value: n,
					type: a,
					matches: o
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
		}, s = se.compile = function(e, t) {
			var n, o, i, s, u, c, f = [],
				h = [],
				m = E[e + " "];
			if (!m) {
				for (t || (t = a(e)), n = t.length; n--;)(m = ke(t[n]))[b] ? f.push(m) : h.push(m);
				(m = E(e, (o = h, s = 0 < (i = f).length, u = 0 < o.length, c = function(e, t, n, a, c) {
					var f, h, m, v = 0,
						y = "0",
						x = e && [],
						b = [],
						w = l,
						C = e || u && r.find.TAG("*", c),
						k = T += null == w ? 1 : Math.random() || .1,
						S = C.length;
					for (c && (l = t == p || t || c); y !== S && null != (f = C[y]); y++) {
						if (u && f) {
							for (h = 0, t || f.ownerDocument == p || (d(f), n = !g); m = o[h++];)
								if (m(f, t || p, n)) {
									a.push(f);
									break
								} c && (T = k)
						}
						s && ((f = !m && f) && v--, e && x.push(f))
					}
					if (v += y, s && y !== v) {
						for (h = 0; m = i[h++];) m(x, b, t, n);
						if (e) {
							if (0 < v)
								for (; y--;) x[y] || b[y] || (b[y] = L.call(a));
							b = Te(b)
						}
						H.apply(a, b), c && !e && 0 < b.length && 1 < v + i.length && se.uniqueSort(a)
					}
					return c && (T = k, l = w), x
				}, s ? le(c) : c))).selector = e
			}
			return m
		}, u = se.select = function(e, t, n, o) {
			var i, u, l, c, f, d = "function" == typeof e && e,
				p = !o && a(e = d.selector || e);
			if (n = n || [], 1 === p.length) {
				if (2 < (u = p[0] = p[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
					if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
					d && (t = t.parentNode), e = e.slice(u.shift().value.length)
				}
				for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
					if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
						if (u.splice(i, 1), !(e = o.length && xe(u))) return H.apply(n, o), n;
						break
					}
			}
			return (d || s(e, p))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
		}, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = ce((function(e) {
			return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
		})), ce((function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		})) || fe("type|href|height|width", (function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		})), n.attributes && ce((function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		})) || fe("value", (function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		})), ce((function(e) {
			return null == e.getAttribute("disabled")
		})) || fe(P, (function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		})), se
	}(e);
	w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
	var k = function(e, t, n) {
			for (var r = [], o = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && w(e).is(n)) break;
					r.push(e)
				} return r
		},
		S = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		E = w.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, t, n) {
		return h(t) ? w.grep(e, (function(e, r) {
			return !!t.call(e, r, e) !== n
		})) : t.nodeType ? w.grep(e, (function(e) {
			return e === t !== n
		})) : "string" != typeof t ? w.grep(e, (function(e) {
			return -1 < s.call(t, e) !== n
		})) : w.filter(t, e, n)
	}
	w.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
			return 1 === e.nodeType
		})))
	}, w.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
				for (t = 0; t < r; t++)
					if (w.contains(o[t], this)) return !0
			})));
			for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, o[t], n);
			return 1 < r ? w.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function(e) {
			return !!D(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
		}
	});
	var j, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function(e, t, n) {
		var r, o;
		if (!e) return this;
		if (n = n || j, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), N.test(r[1]) && w.isPlainObject(t))
					for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (o = m.getElementById(r[2])) && (this[0] = o, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
	}).prototype = w.fn, j = w(m);
	var q = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	w.fn.extend({
		has: function(e) {
			var t = w(e, this),
				n = t.length;
			return this.filter((function() {
				for (var e = 0; e < n; e++)
					if (w.contains(this, t[e])) return !0
			}))
		},
		closest: function(e, t) {
			var n, r = 0,
				o = this.length,
				i = [],
				a = "string" != typeof e && w(e);
			if (!E.test(e))
				for (; r < o; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
							i.push(n);
							break
						} return this.pushStack(1 < i.length ? w.uniqueSort(i) : i)
		},
		index: function(e) {
			return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), w.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return k(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return k(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return k(e, "nextSibling")
		},
		prevAll: function(e) {
			return k(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return k(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return k(e, "previousSibling", n)
		},
		siblings: function(e) {
			return S((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return S(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
		}
	}, (function(e, t) {
		w.fn[e] = function(n, r) {
			var o = w.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = w.filter(r, o)), 1 < this.length && (H[e] || w.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o)
		}
	}));
	var M = /[^\x20\t\r\n\f]+/g;

	function P(e) {
		return e
	}

	function R(e) {
		throw e
	}

	function I(e, t, n, r) {
		var o;
		try {
			e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	w.Callbacks = function(e) {
		var t, n;
		e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(M) || [], (function(e, t) {
			n[t] = !0
		})), n) : w.extend({}, e);
		var r, o, i, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || e.once, i = r = !0; u.length; l = -1)
					for (o = u.shift(); ++l < s.length;) !1 === s[l].apply(o[0], o[1]) && e.stopOnFalse && (l = s.length, o = !1);
				e.memory || (o = !1), r = !1, a && (s = o ? [] : "")
			},
			f = {
				add: function() {
					return s && (o && !r && (l = s.length - 1, u.push(o)), function t(n) {
						w.each(n, (function(n, r) {
							h(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
						}))
					}(arguments), o && !r && c()), this
				},
				remove: function() {
					return w.each(arguments, (function(e, t) {
						for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
					})), this
				},
				has: function(e) {
					return e ? -1 < w.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = o = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], o || r || (s = o = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return f
	}, w.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				o = {
					state: function() {
						return r
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return o.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return w.Deferred((function(t) {
							w.each(n, (function(n, r) {
								var o = h(e[r[4]]) && e[r[4]];
								i[r[1]]((function() {
									var e = o && o.apply(this, arguments);
									e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
								}))
							})), e = null
						})).promise()
					},
					then: function(t, r, o) {
						var i = 0;

						function a(t, n, r, o) {
							return function() {
								var s = this,
									u = arguments,
									l = function() {
										var e, l;
										if (!(t < i)) {
											if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											l = e && ("object" == typeof e || "function" == typeof e) && e.then, h(l) ? o ? l.call(e, a(i, n, P, o), a(i, n, R, o)) : (i++, l.call(e, a(i, n, P, o), a(i, n, R, o), a(i, n, P, n.notifyWith))) : (r !== P && (s = void 0, u = [e]), (o || n.resolveWith)(s, u))
										}
									},
									c = o ? l : function() {
										try {
											l()
										} catch (e) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), i <= t + 1 && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
							}
						}
						return w.Deferred((function(e) {
							n[0][3].add(a(0, e, h(o) ? o : P, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : P)), n[2][3].add(a(0, e, h(r) ? r : R))
						})).promise()
					},
					promise: function(e) {
						return null != e ? w.extend(e, o) : o
					}
				},
				i = {};
			return w.each(n, (function(e, t) {
				var a = t[2],
					s = t[5];
				o[t[1]] = a.add, s && a.add((function() {
					r = s
				}), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), i[t[0]] = function() {
					return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
				}, i[t[0] + "With"] = a.fireWith
			})), o.promise(i), t && t.call(i, i), i
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = o.call(arguments),
				a = w.Deferred(),
				s = function(e) {
					return function(n) {
						r[e] = this, i[e] = 1 < arguments.length ? o.call(arguments) : n, --t || a.resolveWith(r, i)
					}
				};
			if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(i[n] && i[n].then))) return a.then();
			for (; n--;) I(i[n], s(n), a.reject);
			return a.promise()
		}
	});
	var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, w.readyException = function(t) {
		e.setTimeout((function() {
			throw t
		}))
	};
	var B = w.Deferred();

	function W() {
		m.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready()
	}
	w.fn.ready = function(e) {
		return B.then(e).catch((function(e) {
			w.readyException(e)
		})), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || B.resolveWith(m, [w])
		}
	}), w.ready.then = B.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
	var F = function(e, t, n, r, o, i, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === x(n))
				for (s in o = !0, n) F(e, t, s, n[s], !0, i, a);
			else if (void 0 !== r && (o = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(w(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
		},
		_ = /^-ms-/,
		z = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(_, "ms-").replace(z, U)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = w.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, o = this.cache(e);
			if ("string" == typeof t) o[X(t)] = n;
			else
				for (r in t) o[X(r)] = t[r];
			return o
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(M) || []).length;
					for (; n--;) delete r[t[n]]
				}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !w.isEmptyObject(t)
		}
	};
	var Y = new G,
		Q = new G,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, o;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	w.extend({
		hasData: function(e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), w.fn.extend({
		data: function(e, t) {
			var n, r, o, i = this[0],
				a = i && i.attributes;
			if (void 0 === e) {
				if (this.length && (o = Q.get(i), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(i, r, o[r]));
					Y.set(i, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each((function() {
				Q.set(this, e)
			})) : F(this, (function(t) {
				var n;
				if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) || void 0 !== (n = Z(i, e)) ? n : void 0;
				this.each((function() {
					Q.set(this, e, t)
				}))
			}), null, t, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each((function() {
				Q.remove(this, e)
			}))
		}
	}), w.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = w.queue(e, t),
				r = n.length,
				o = n.shift(),
				i = w._queueHooks(e, t);
			"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
				w.dequeue(e, t)
			}), i)), !r && i && i.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: w.Callbacks("once memory").add((function() {
					Y.remove(e, [t + "queue", n])
				}))
			})
		}
	}), w.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
				var n = w.queue(this, e, t);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
			}))
		},
		dequeue: function(e) {
			return this.each((function() {
				w.dequeue(this, e)
			}))
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				o = w.Deferred(),
				i = this,
				a = this.length,
				s = function() {
					--r || o.resolveWith(i, [i])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), o.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = m.documentElement,
		oe = function(e) {
			return w.contains(e.ownerDocument, e)
		},
		ie = {
			composed: !0
		};
	re.getRootNode && (oe = function(e) {
		return w.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
	});
	var ae = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
	};

	function se(e, t, n, r) {
		var o, i, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return w.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
		if (c && c[3] !== l) {
			for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
			c *= 2, w.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, o, i, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (u = ue[s]) || (i = a.body.appendChild(a.createElement(s)), u = w.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	w.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
				ae(this) ? w(this).show() : w(this).hide()
			}))
		}
	});
	var ce, fe, de = /^(?:checkbox|radio)$/i,
		pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = m.createDocumentFragment().appendChild(m.createElement("div")), (fe = m.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", p.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function me(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
	}

	function ve(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, p.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var ye = /<|&#?\w+;/;

	function xe(e, t, n, r, o) {
		for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
			if ((i = e[p]) || 0 === i)
				if ("object" === x(i)) w.merge(d, i.nodeType ? [i] : i);
				else if (ye.test(i)) {
			for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(i) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
			w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
		} else d.push(t.createTextNode(i));
		for (f.textContent = "", p = 0; i = d[p++];)
			if (r && -1 < w.inArray(i, r)) o && o.push(i);
			else if (l = oe(i), a = me(f.appendChild(i), "script"), l && ve(a), n)
			for (c = 0; i = a[c++];) he.test(i.type || "") && n.push(i);
		return f
	}
	var be = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/;

	function Ce() {
		return !0
	}

	function ke() {
		return !1
	}

	function Se(e, t) {
		return e === function() {
			try {
				return m.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Ee(e, t, n, r, o, i) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], i);
			return e
		}
		if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = ke;
		else if (!o) return e;
		return 1 === i && (a = o, (o = function(e) {
			return w().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
			w.event.add(this, t, o, r, n)
		}))
	}

	function Ae(e, t, n) {
		n ? (Y.set(e, t, !1), w.event.add(e, t, {
			namespace: !1,
			handler: function(e) {
				var r, i, a = Y.get(this, t);
				if (1 & e.isTrigger && this[t]) {
					if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
					else if (a = o.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
				} else a.length && (Y.set(this, t, {
					value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, t) && w.event.add(e, t, Ce)
	}
	w.event = {
		global: {},
		add: function(e, t, n, r, o) {
			var i, a, s, u, l, c, f, d, p, h, g, m = Y.get(e);
			if (V(e))
				for (n.handler && (n = (i = n).handler, o = i.selector), o && w.find.matchesSelector(re, o), n.guid || (n.guid = w.guid++), (u = m.events) || (u = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
						return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
					}), l = (t = (t || "").match(M) || [""]).length; l--;) p = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = w.event.special[p] || {}, c = w.extend({
					type: p,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && w.expr.match.needsContext.test(o),
					namespace: h.join(".")
				}, i), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0)
		},
		remove: function(e, t, n, r, o) {
			var i, a, s, u, l, c, f, d, p, h, g, m = Y.hasData(e) && Y.get(e);
			if (m && (u = m.events)) {
				for (l = (t = (t || "").match(M) || [""]).length; l--;)
					if (p = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = w.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
						a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, p, m.handle), delete u[p])
					} else
						for (p in u) w.event.remove(e, p + t[l], n, r, !0);
				w.isEmptyObject(u) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, o, i, a, s = new Array(arguments.length),
				u = w.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
				c = w.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				for (a = w.event.handlers.call(this, u, l), t = 0;
					(o = a[t++]) && !u.isPropagationStopped();)
					for (u.currentTarget = o.elem, n = 0;
						(i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, o, i, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < w(o, this).index(l) : w.find(o, this, null, [l]).length), a[o] && i.push(r);
						i.length && s.push({
							elem: l,
							handlers: i
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: h(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[w.expando] ? e : new w.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
				},
				trigger: function(e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return de.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, w.Event = function(e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: ke,
		isPropagationStopped: ke,
		isImmediatePropagationStopped: ke,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, w.event.addProp), w.each({
		focus: "focusin",
		blur: "focusout"
	}, (function(e, t) {
		w.event.special[e] = {
			setup: function() {
				return Ae(this, e, Se), !1
			},
			trigger: function() {
				return Ae(this, e), !0
			},
			delegateType: t
		}
	})), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, (function(e, t) {
		w.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = e.relatedTarget,
					o = e.handleObj;
				return r && (r === this || w.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	})), w.fn.extend({
		on: function(e, t, n, r) {
			return Ee(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Ee(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, o;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function() {
				w.event.remove(this, e, n, t)
			}))
		}
	});
	var Ne = /<script|<style|<link/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Le(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
	}

	function qe(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function He(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var n, r, o, i, a, s;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events))
				for (o in Y.remove(t, "handle events"), s)
					for (n = 0, r = s[o].length; n < r; n++) w.event.add(t, o, s[o][n]);
			Q.hasData(e) && (i = Q.access(e), a = w.extend({}, i), Q.set(t, a))
		}
	}

	function Me(e, t, n, r) {
		t = i(t);
		var o, a, s, u, l, c, f = 0,
			d = e.length,
			g = d - 1,
			m = t[0],
			v = h(m);
		if (v || 1 < d && "string" == typeof m && !p.checkClone && De.test(m)) return e.each((function(o) {
			var i = e.eq(o);
			v && (t[0] = m.call(this, o, i.html())), Me(i, t, n, r)
		}));
		if (d && (a = (o = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
			for (u = (s = w.map(me(o, "script"), qe)).length; f < d; f++) l = o, f !== g && (l = w.clone(l, !0, !0), u && w.merge(s, me(l, "script"))), n.call(e[f], l, f);
			if (u)
				for (c = s[s.length - 1].ownerDocument, w.map(s, He), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : y(l.textContent.replace(je, ""), l, c))
		}
		return e
	}

	function Pe(e, t, n) {
		for (var r, o = t ? w.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && oe(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	w.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, o, i, a, s, u, l, c = e.cloneNode(!0),
				f = oe(e);
			if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
				for (a = me(c), r = 0, o = (i = me(e)).length; r < o; r++) s = i[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (i = i || me(e), a = a || me(c), r = 0, o = i.length; r < o; r++) Oe(i[r], a[r]);
				else Oe(e, c);
			return 0 < (a = me(c, "script")).length && ve(a, !f && me(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, o = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
				if (V(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (r in t.events) o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), w.fn.extend({
		detach: function(e) {
			return Pe(this, e, !0)
		},
		remove: function(e) {
			return Pe(this, e)
		},
		text: function(e) {
			return F(this, (function(e) {
				return void 0 === e ? w.text(this) : this.empty().each((function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				}))
			}), null, e, arguments.length)
		},
		append: function() {
			return Me(this, arguments, (function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
			}))
		},
		prepend: function() {
			return Me(this, arguments, (function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Le(this, e);
					t.insertBefore(e, t.firstChild)
				}
			}))
		},
		before: function() {
			return Me(this, arguments, (function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			}))
		},
		after: function() {
			return Me(this, arguments, (function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			}))
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map((function() {
				return w.clone(this, e, t)
			}))
		},
		html: function(e) {
			return F(this, (function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ne.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = w.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}), null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return Me(this, arguments, (function(t) {
				var n = this.parentNode;
				w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
			}), e)
		}
	}), w.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, (function(e, t) {
		w.fn[e] = function(e) {
			for (var n, r = [], o = w(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), w(o[s])[t](n), a.apply(r, n.get());
			return this.pushStack(r)
		}
	}));
	var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Ie = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		$e = function(e, t, n) {
			var r, o, i = {};
			for (o in t) i[o] = e.style[o], e.style[o] = t[o];
			for (o in r = n.call(e), t) e.style[o] = i[o];
			return r
		},
		Be = new RegExp(ne.join("|"), "i");

	function We(e, t, n) {
		var r, o, i, a, s = e.style;
		return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !p.pixelBoxStyles() && Re.test(a) && Be.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
	}

	function Fe(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function t() {
			if (c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", i = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
			}
		}

		function n(e) {
			return Math.round(parseFloat(e))
		}
		var r, o, i, a, s, u, l = m.createElement("div"),
			c = m.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
			boxSizingReliable: function() {
				return t(), o
			},
			pixelBoxStyles: function() {
				return t(), a
			},
			pixelPosition: function() {
				return t(), r
			},
			reliableMarginLeft: function() {
				return t(), u
			},
			scrollboxSize: function() {
				return t(), i
			},
			reliableTrDimensions: function() {
				var t, n, r, o;
				return null == s && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), o = e.getComputedStyle(n), s = 3 < parseInt(o.height), re.removeChild(t)), s
			}
		}))
	}();
	var _e = ["Webkit", "Moz", "ms"],
		ze = m.createElement("div").style,
		Ue = {};

	function Xe(e) {
		return w.cssProps[e] || Ue[e] || (e in ze ? e : Ue[e] = function(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;)
				if ((e = _e[n] + t) in ze) return e
		}(e) || e)
	}
	var Ve = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Ye = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Qe = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Je(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Ke(e, t, n, r, o, i) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, o)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, o))) : (u += w.css(e, "padding" + ne[a], !0, o), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, o) : s += w.css(e, "border" + ne[a] + "Width", !0, o));
		return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
	}

	function Ze(e, t, n) {
		var r = Ie(e),
			o = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
			i = o,
			a = We(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Re.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
	}

	function et(e, t, n, r, o) {
		return new et.prototype.init(e, t, n, r, o)
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = We(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, i, a, s = X(t),
					u = Ge.test(t),
					l = e.style;
				if (u || (t = Xe(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
				"string" == (i = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var o, i, a, s = X(t);
			return Ge.test(t) || (t = Xe(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = We(e, t, r)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
		}
	}), w.each(["height", "width"], (function(e, t) {
		w.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : $e(e, Ye, (function() {
					return Ze(e, t, r)
				}))
			},
			set: function(e, n, r) {
				var o, i = Ie(e),
					a = !p.scrollboxSize() && "absolute" === i.position,
					s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, i),
					u = r ? Ke(e, t, r, s, i) : 0;
				return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ke(e, t, "border", !1, i) - .5)), u && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(0, n, u)
			}
		}
	})), w.cssHooks.marginLeft = Fe(p.reliableMarginLeft, (function(e, t) {
		if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
			marginLeft: 0
		}, (function() {
			return e.getBoundingClientRect().left
		}))) + "px"
	})), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, (function(e, t) {
		w.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ne[r] + t] = i[r] || i[r - 2] || i[0];
				return o
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Je)
	})), w.fn.extend({
		css: function(e, t) {
			return F(this, (function(e, t, n) {
				var r, o, i = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Ie(e), o = t.length; a < o; a++) i[t[a]] = w.css(e, t[a], !1, r);
					return i
				}
				return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
			}), e, t, 1 < arguments.length)
		}
	}), ((w.Tween = et).prototype = {
		constructor: et,
		init: function(e, t, n, r, o, i) {
			this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (w.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = et.propHooks[this.prop];
			return e && e.get ? e.get(this) : et.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = et.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
		}
	}).init.prototype = et.prototype, (et.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = et.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = et.prototype.init, w.fx.step = {};
	var tt, nt, rt, ot, it = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/;

	function st() {
		nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick())
	}

	function ut() {
		return e.setTimeout((function() {
			tt = void 0
		})), tt = Date.now()
	}

	function lt(e, t) {
		var n, r = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ne[r])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function ct(e, t, n) {
		for (var r, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), i = 0, a = o.length; i < a; i++)
			if (r = o[i].call(n, t, e)) return r
	}

	function ft(e, t, n) {
		var r, o, i = 0,
			a = ft.prefilters.length,
			s = w.Deferred().always((function() {
				delete u.elem
			})),
			u = function() {
				if (o) return !1;
				for (var t = tt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
				return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: w.extend({}, t),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: tt || ut(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (o) return this;
					for (o = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (function(e, t) {
				var n, r, o, i, a;
				for (n in e)
					if (o = t[r = X(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
						for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
					else t[r] = o
			}(c, l.opts.specialEasing); i < a; i++)
			if (r = ft.prefilters[i].call(l, e, c, l.opts)) return h(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return w.map(c, ct, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	w.Animation = w.extend(ft, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			h(e) ? (t = e, e = ["*"]) : e = e.match(M);
			for (var n, r = 0, o = e.length; r < o; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
				d = this,
				p = {},
				h = e.style,
				g = e.nodeType && ae(e),
				m = Y.get(e, "fxshow");
			for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, d.always((function() {
					d.always((function() {
						a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
					}))
				}))), t)
				if (o = t[r], it.test(o)) {
					if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
						if ("show" !== o || !m || void 0 === m[r]) continue;
						g = !0
					}
					p[r] = m && m[r] || w.style(e, r)
				} if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
				for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = w.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (d.done((function() {
						h.display = l
					})), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					}))), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
					display: l
				}), i && (m.hidden = !g), g && le([e], !0), d.done((function() {
					for (r in g || le([e]), Y.remove(e, "fxshow"), p) w.style(e, r, p[r])
				}))), u = ct(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function(e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
		}
	}), w.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? w.extend({}, e) : {
			complete: n || !n && t || h(e) && e,
			duration: e,
			easing: n && t || t && !h(t) && t
		};
		return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			h(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
		}, r
	}, w.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var o = w.isEmptyObject(e),
				i = w.speed(t, n, r),
				a = function() {
					var t = ft(this, w.extend({}, e), i);
					(o || Y.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
		},
		stop: function(e, t, n) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(n)
			};
			return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
				var t = !0,
					o = null != e && e + "queueHooks",
					i = w.timers,
					a = Y.get(this);
				if (o) a[o] && a[o].stop && r(a[o]);
				else
					for (o in a) a[o] && a[o].stop && at.test(o) && r(a[o]);
				for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
				!t && n || w.dequeue(this, e)
			}))
		},
		finish: function(e) {
			return !1 !== e && (e = e || "fx"), this.each((function() {
				var t, n = Y.get(this),
					r = n[e + "queue"],
					o = n[e + "queueHooks"],
					i = w.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
				for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			}))
		}
	}), w.each(["toggle", "show", "hide"], (function(e, t) {
		var n = w.fn[t];
		w.fn[t] = function(e, r, o) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, o)
		}
	})), w.each({
		slideDown: lt("show"),
		slideUp: lt("hide"),
		slideToggle: lt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, (function(e, t) {
		w.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	})), w.timers = [], w.fx.tick = function() {
		var e, t = 0,
			n = w.timers;
		for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || w.fx.stop(), tt = void 0
	}, w.fx.timer = function(e) {
		w.timers.push(e), w.fx.start()
	}, w.fx.interval = 13, w.fx.start = function() {
		nt || (nt = !0, st())
	}, w.fx.stop = function() {
		nt = null
	}, w.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, w.fn.delay = function(t, n) {
		return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
			var o = e.setTimeout(n, t);
			r.stop = function() {
				e.clearTimeout(o)
			}
		}))
	}, rt = m.createElement("input"), ot = m.createElement("select").appendChild(m.createElement("option")), rt.type = "checkbox", p.checkOn = "" !== rt.value, p.optSelected = ot.selected, (rt = m.createElement("input")).value = "t", rt.type = "radio", p.radioValue = "t" === rt.value;
	var dt, pt = w.expr.attrHandle;
	w.fn.extend({
		attr: function(e, t) {
			return F(this, w.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each((function() {
				w.removeAttr(this, e)
			}))
		}
	}), w.extend({
		attr: function(e, t, n) {
			var r, o, i = e.nodeType;
			if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === i && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!p.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				o = t && t.match(M);
			if (o && 1 === e.nodeType)
				for (; n = o[r++];) e.removeAttribute(n)
		}
	}), dt = {
		set: function(e, t, n) {
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
		var n = pt[t] || w.find.attr;
		pt[t] = function(e, t, r) {
			var o, i, a = t.toLowerCase();
			return r || (i = pt[a], pt[a] = o, o = null != n(e, t, r) ? a : null, pt[a] = i), o
		}
	}));
	var ht = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i;

	function mt(e) {
		return (e.match(M) || []).join(" ")
	}

	function vt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function yt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
	}
	w.fn.extend({
		prop: function(e, t) {
			return F(this, w.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each((function() {
				delete this[w.propFix[e] || e]
			}))
		}
	}), w.extend({
		prop: function(e, t, n) {
			var r, o, i = e.nodeType;
			if (3 !== i && 8 !== i && 2 !== i) return 1 === i && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = w.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), p.optSelected || (w.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
		w.propFix[this.toLowerCase()] = this
	})), w.fn.extend({
		addClass: function(e) {
			var t, n, r, o, i, a, s, u = 0;
			if (h(e)) return this.each((function(t) {
				w(this).addClass(e.call(this, t, vt(this)))
			}));
			if ((t = yt(e)).length)
				for (; n = this[u++];)
					if (o = vt(n), r = 1 === n.nodeType && " " + mt(o) + " ") {
						for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						o !== (s = mt(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(e) {
			var t, n, r, o, i, a, s, u = 0;
			if (h(e)) return this.each((function(t) {
				w(this).removeClass(e.call(this, t, vt(this)))
			}));
			if (!arguments.length) return this.attr("class", "");
			if ((t = yt(e)).length)
				for (; n = this[u++];)
					if (o = vt(n), r = 1 === n.nodeType && " " + mt(o) + " ") {
						for (a = 0; i = t[a++];)
							for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
						o !== (s = mt(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
				w(this).toggleClass(e.call(this, n, vt(this), t), t)
			})) : this.each((function() {
				var t, o, i, a;
				if (r)
					for (o = 0, i = w(this), a = yt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(e) {
			var t, n, r = 0;
			for (t = " " + e + " "; n = this[r++];)
				if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var xt = /\r/g;
	w.fn.extend({
		val: function(e) {
			var t, n, r, o = this[0];
			return arguments.length ? (r = h(e), this.each((function(n) {
				var o;
				1 === this.nodeType && (null == (o = r ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, (function(e) {
					return null == e ? "" : e + ""
				}))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
			}))) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = w.find.attr(e, "value");
					return null != t ? t : mt(w.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, o = e.options,
						i = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? i + 1 : o.length;
					for (r = i < 0 ? u : a ? i : 0; r < u; r++)
						if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = w(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					for (var n, r, o = e.options, i = w.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), i)) && (n = !0);
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), w.each(["radio", "checkbox"], (function() {
		w.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
			}
		}, p.checkOn || (w.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	})), p.focusin = "onfocusin" in e;
	var bt = /^(?:focusinfocus|focusoutblur)$/,
		wt = function(e) {
			e.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function(t, n, r, o) {
			var i, a, s, u, l, f, d, p, v = [r || m],
				y = c.call(t, "type") ? t.type : t,
				x = c.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = p = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (x = y.split(".")).shift(), x.sort()), l = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
				if (!o && !d.noBubble && !g(r)) {
					for (u = d.delegateType || y, bt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
					s === (r.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
				}
				for (i = 0;
					(a = v[i++]) && !t.isPropagationStopped();) p = a, t.type = 1 < i ? u : d.bindType || y, (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && V(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
				return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(r) || l && h(r[y]) && !g(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, wt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, wt), w.event.triggered = void 0, s && (r[l] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var r = w.extend(new w.Event, n, {
				type: e,
				isSimulated: !0
			});
			w.event.trigger(r, null, t)
		}
	}), w.fn.extend({
		trigger: function(e, t) {
			return this.each((function() {
				w.event.trigger(e, t, this)
			}))
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return w.event.trigger(e, t, n, !0)
		}
	}), p.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, (function(e, t) {
		var n = function(e) {
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this.document || this,
					o = Y.access(r, t);
				o || r.addEventListener(e, n, !0), Y.access(r, t, (o || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this.document || this,
					o = Y.access(r, t) - 1;
				o ? Y.access(r, t, o) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
			}
		}
	}));
	var Tt = e.location,
		Ct = {
			guid: Date.now()
		},
		kt = /\?/;
	w.parseXML = function(t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (t) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
	};
	var St = /\[\]$/,
		Et = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;

	function Dt(e, t, n, r) {
		var o;
		if (Array.isArray(t)) w.each(t, (function(t, o) {
			n || St.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
		}));
		else if (n || "object" !== x(t)) r(e, t);
		else
			for (o in t) Dt(e + "[" + o + "]", t[o], n, r)
	}
	w.param = function(e, t) {
		var n, r = [],
			o = function(e, t) {
				var n = h(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
			o(this.name, this.value)
		}));
		else
			for (n in e) Dt(n, e[n], t, o);
		return r.join("&")
	}, w.fn.extend({
		serialize: function() {
			return w.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map((function() {
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			})).filter((function() {
				var e = this.type;
				return this.name && !w(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
			})).map((function(e, t) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
					return {
						name: t.name,
						value: e.replace(Et, "\r\n")
					}
				})) : {
					name: t.name,
					value: n.replace(Et, "\r\n")
				}
			})).get()
		}
	});
	var jt = /%20/g,
		Lt = /#.*$/,
		qt = /([?&])_=[^&]*/,
		Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ot = /^(?:GET|HEAD)$/,
		Mt = /^\/\//,
		Pt = {},
		Rt = {},
		It = "*/".concat("*"),
		$t = m.createElement("a");

	function Bt(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, o = 0,
				i = t.toLowerCase().match(M) || [];
			if (h(n))
				for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function Wt(e, t, n, r) {
		var o = {},
			i = e === Rt;

		function a(s) {
			var u;
			return o[s] = !0, w.each(e[s] || [], (function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
			})), u
		}
		return a(t.dataTypes[0]) || !o["*"] && a("*")
	}

	function Ft(e, t) {
		var n, r, o = w.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
		return r && w.extend(!0, e, r), e
	}
	$t.href = Tt.href, w.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Tt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": It,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
		},
		ajaxPrefilter: Bt(Pt),
		ajaxTransport: Bt(Rt),
		ajax: function(t, n) {
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var r, o, i, a, s, u, l, c, f, d, p = w.ajaxSetup({}, n),
				h = p.context || p,
				g = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
				v = w.Deferred(),
				y = w.Callbacks("once memory"),
				x = p.statusCode || {},
				b = {},
				T = {},
				C = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (l) {
							if (!a)
								for (a = {}; t = Ht.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = a[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return l ? i : null
					},
					setRequestHeader: function(e, t) {
						return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == l && (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (l) k.always(e[k.status]);
							else
								for (t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || C;
						return r && r.abort(t), S(0, t), this
					}
				};
			if (v.promise(k), p.url = ((t || p.url || Tt.href) + "").replace(Mt, Tt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
				u = m.createElement("a");
				try {
					u.href = p.url, u.href = u.href, p.crossDomain = $t.protocol + "//" + $t.host != u.protocol + "//" + u.host
				} catch (t) {
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Wt(Pt, p, n, k), l) return k;
			for (f in (c = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ot.test(p.type), o = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(qt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + d), p.url = o + d), p.ifModified && (w.lastModified[o] && k.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && k.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]);
			if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l)) return k.abort();
			if (C = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), r = Wt(Rt, p, n, k)) {
				if (k.readyState = 1, c && g.trigger("ajaxSend", [k, p]), l) return k;
				p.async && 0 < p.timeout && (s = e.setTimeout((function() {
					k.abort("timeout")
				}), p.timeout));
				try {
					l = !1, r.send(b, S)
				} catch (t) {
					if (l) throw t;
					S(-1, t)
				}
			} else S(-1, "No Transport");

			function S(t, n, a, u) {
				var f, d, m, b, T, C = n;
				l || (l = !0, s && e.clearTimeout(s), r = void 0, i = u || "", k.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, a && (b = function(e, t, n) {
					for (var r, o, i, a, s = e.contents, u = e.dataTypes;
						"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (o in s)
							if (s[o] && s[o].test(r)) {
								u.unshift(o);
								break
							} if (u[0] in n) i = u[0];
					else {
						for (o in n) {
							if (!u[0] || e.converters[o + " " + u[0]]) {
								i = o;
								break
							}
							a || (a = o)
						}
						i = i || a
					}
					if (i) return i !== u[0] && u.unshift(i), n[i]
				}(p, k, a)), !f && -1 < w.inArray("script", p.dataTypes) && (p.converters["text script"] = function() {}), b = function(e, t, n, r) {
					var o, i, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					for (i = c.shift(); i;)
						if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
							if ("*" === i) i = u;
							else if ("*" !== u && u !== i) {
						if (!(a = l[u + " " + i] || l["* " + i]))
							for (o in l)
								if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e.throws) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + i
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(p, b, k, f), f ? (p.ifModified && ((T = k.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = k.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, f = !(m = b.error))) : (m = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", f ? v.resolveWith(h, [d, C, k]) : v.rejectWith(h, [k, C, m]), k.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [k, p, f ? d : m]), y.fireWith(h, [k, C]), c && (g.trigger("ajaxComplete", [k, p]), --w.active || w.event.trigger("ajaxStop")))
			}
			return k
		},
		getJSON: function(e, t, n) {
			return w.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return w.get(e, void 0, t, "script")
		}
	}), w.each(["get", "post"], (function(e, t) {
		w[t] = function(e, n, r, o) {
			return h(n) && (o = o || r, r = n, n = void 0), w.ajax(w.extend({
				url: e,
				type: t,
				dataType: o,
				data: n,
				success: r
			}, w.isPlainObject(e) && e))
		}
	})), w.ajaxPrefilter((function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	})), w._evalUrl = function(e, t, n) {
		return w.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				w.globalEval(e, t, n)
			}
		})
	}, w.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (h(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			})).append(this)), this
		},
		wrapInner: function(e) {
			return h(e) ? this.each((function(t) {
				w(this).wrapInner(e.call(this, t))
			})) : this.each((function() {
				var t = w(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			}))
		},
		wrap: function(e) {
			var t = h(e);
			return this.each((function(n) {
				w(this).wrapAll(t ? e.call(this, n) : e)
			}))
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each((function() {
				w(this).replaceWith(this.childNodes)
			})), this
		}
	}), w.expr.pseudos.hidden = function(e) {
		return !w.expr.pseudos.visible(e)
	}, w.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, w.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var _t = {
			0: 200,
			1223: 204
		},
		zt = w.ajaxSettings.xhr();
	p.cors = !!zt && "withCredentials" in zt, p.ajax = zt = !!zt, w.ajaxTransport((function(t) {
		var n, r;
		if (p.cors || zt && !t.crossDomain) return {
			send: function(o, i) {
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
				n = function(e) {
					return function() {
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout((function() {
						n && r()
					}))
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (o) {
					if (n) throw o
				}
			},
			abort: function() {
				n && n()
			}
		}
	})), w.ajaxPrefilter((function(e) {
		e.crossDomain && (e.contents.script = !1)
	})), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return w.globalEval(e), e
			}
		}
	}), w.ajaxPrefilter("script", (function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	})), w.ajaxTransport("script", (function(e) {
		var t, n;
		if (e.crossDomain || e.scriptAttrs) return {
			send: function(r, o) {
				t = w("<script>").attr(e.scriptAttrs || {}).prop({
					charset: e.scriptCharset,
					src: e.url
				}).on("load error", n = function(e) {
					t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
				}), m.head.appendChild(t[0])
			},
			abort: function() {
				n && n()
			}
		}
	}));
	var Ut, Xt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Xt.pop() || w.expando + "_" + Ct.guid++;
			return this[e] = !0, e
		}
	}), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
		var o, i, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + o) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
			return a || w.error(o + " was not called"), a[0]
		}, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
			a = arguments
		}, r.always((function() {
			void 0 === i ? w(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Xt.push(o)), a && h(i) && i(a[0]), a = i = void 0
		})), "script"
	})), p.createHTMLDocument = ((Ut = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), w.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), i = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, i), i && i.length && w(i).remove(), w.merge([], o.childNodes)));
		var r, o, i
	}, w.fn.load = function(e, t, n) {
		var r, o, i, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && w.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done((function(e) {
			i = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
		})).always(n && function(e, t) {
			a.each((function() {
				n.apply(this, i || [e.responseText, t, e])
			}))
		}), this
	}, w.expr.pseudos.animated = function(e) {
		return w.grep(w.timers, (function(t) {
			return e === t.elem
		})).length
	}, w.offset = {
		setOffset: function(e, t, n) {
			var r, o, i, a, s, u, l = w.css(e, "position"),
				c = w(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), i = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), h(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
		}
	}, w.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each((function(t) {
				w.offset.setOffset(this, e, t)
			}));
			var t, n, r = this[0];
			return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					o = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
				else {
					for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - o.top - w.css(r, "marginTop", !0),
					left: t.left - o.left - w.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map((function() {
				for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
				return e || re
			}))
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, (function(e, t) {
		var n = "pageYOffset" === t;
		w.fn[e] = function(r) {
			return F(this, (function(e, r, o) {
				var i;
				if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
				i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
			}), e, r, arguments.length)
		}
	})), w.each(["top", "left"], (function(e, t) {
		w.cssHooks[t] = Fe(p.pixelPosition, (function(e, n) {
			if (n) return n = We(e, t), Re.test(n) ? w(e).position()[t] + "px" : n
		}))
	})), w.each({
		Height: "height",
		Width: "width"
	}, (function(e, t) {
		w.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, (function(n, r) {
			w.fn[r] = function(o, i) {
				var a = arguments.length && (n || "boolean" != typeof o),
					s = n || (!0 === o || !0 === i ? "margin" : "border");
				return F(this, (function(t, n, o) {
					var i;
					return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
				}), t, a ? o : void 0, a)
			}
		}))
	})), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
		w.fn[t] = function(e) {
			return this.on(t, e)
		}
	})), w.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
		w.fn[t] = function(e, n) {
			return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
		}
	}));
	var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	w.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = o.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(o.call(arguments)))
		}).guid = e.guid = e.guid || w.guid++, i
	}, w.holdReady = function(e) {
		e ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = h, w.isWindow = g, w.camelCase = X, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
		var t = w.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, w.trim = function(e) {
		return null == e ? "" : (e + "").replace(Gt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], (function() {
		return w
	}));
	var Yt = e.jQuery,
		Qt = e.$;
	return w.noConflict = function(t) {
		return e.$ === w && (e.$ = Qt), t && e.jQuery === w && (e.jQuery = Yt), w
	}, void 0 === t && (e.jQuery = e.$ = w), w
})),
function() {
	function e(e) {
		document.documentElement.classList.toggle("dark-mode", e), darkModeState = e
	}
	window.history.replaceState && window.history.replaceState(null, null, window.location.href), $(":header").click((function() {
		$(".headerlink", this).show()
	})), $(":header").mouseleave((function() {
		var e = this;
		setTimeout((function() {
			$(".headerlink", e).hide()
		}), 500)
	})), $("body").on("DOMNodeInserted", ".markdownx-preview", (function() {
		var e = $(":header");
		e.unbind("click"), e.unbind("mouseleave"), e.click((function() {
			$(".headerlink", this).show()
		})), e.mouseleave((function() {
			var e = this;
			setTimeout((function() {
				$(".headerlink", e).hide()
			}), 500)
		}))
	})), $("#dropdownButton").click((function() {
		document.getElementsByClassName("dropdown-content")[0].classList.toggle("dropdown-show")
	})), window.addEventListener("click", (function(e) {
		if (!e.target.matches("#dropdownButton")) {
			var t, n = document.getElementsByClassName("dropdown-content");
			for (t = 0; t < n.length; t++) {
				var r = n[t];
				r.classList.contains("dropdown-show") && r.classList.remove("dropdown-show")
			}
		}
	}));
	const t = document.querySelector('meta[name="recommended-theme"]');
	if (t) {
		const e = t.content;
		darkModeState = "dark" == e
	} else darkModeState = null === localStorage.getItem("dark-mode") && window.matchMedia("(prefers-color-scheme: dark)").matches || "true" == localStorage.getItem("dark-mode"), window.matchMedia("(prefers-color-scheme: dark)").addListener((t => null === localStorage.getItem("dark-mode") && e(t.matches)));
	e(darkModeState);
	document.getElementById("darkModeBtn").addEventListener("click", (() => {
		darkModeState = !darkModeState, e(darkModeState), localStorage.setItem("dark-mode", darkModeState)
	})), $(document).ready((function() {
		function e(e) {
			function t(e, t) {
				e.classList.add("d-none"), t.classList.remove("d-none")
			}
			var n = e.currentTarget.getElementsByClassName("clippy-icon")[0],
				r = e.currentTarget.getElementsByClassName("check-icon")[0];
			navigator.clipboard.writeText(e.currentTarget.getAttribute("value")).then((() => {
				t(n, r), setTimeout((function() {
					t(r, n)
				}), 2e3)
			}))
		}

		function t() {
			document.querySelectorAll(".clippy").forEach((t => {
				t.addEventListener("click", e)
			}))
		}
		t(), document.addEventListener("markdownx.update", (function() {
			t()
		}));
		let n = !1,
			r = !1;
		const o = document.querySelector('meta[name="link-behavior-internal"]');
		if (o) {
			"new" == o.content && (console.log("Internal links in new tab"), n = "new")
		}
		const i = document.querySelector('meta[name="link-behavior-external"]');
		if (i) {
			"same" == i.content && (console.log("External links in same tab"), r = "same")
		}(n || r) && $("body").on("click", ".entry-text a", (function(e) {
			return console.log($(this).attr("href")), e.preventDefault(), $(this).hasClass("external") ? "same" == r ? (console.log("open external link in same"), window.open($(this).attr("href"), "_self").focus()) : (console.log("open external link in new"), window.open($(this).attr("href"), "_blank").focus()) : "new" == n ? (console.log("open internal link in new"), window.open($(this).attr("href"), "_blank").focus()) : (console.log("open internal link in same"), window.open($(this).attr("href"), "_self").focus()), !1
		})), $(".full-contrast").click((function() {
			$("body").toggleClass("full-contrast-mode"), $(this).toggleClass("active")
		}))
	}))
}.call(this);