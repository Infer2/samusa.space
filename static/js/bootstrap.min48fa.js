/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
	"use strict";

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function o(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function r(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {},
				i = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
				return Object.getOwnPropertyDescriptor(n, t).enumerable
			})))), i.forEach((function(e) {
				var i, o, r;
				i = t, r = n[o = e], o in i ? Object.defineProperty(i, o, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[o] = r
			}))
		}
		return t
	}
	e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
	var s = "transitionend";
	var a = {
		TRANSITION_END: "bsTransitionEnd",
		getUID: function(t) {
			for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
			return t
		},
		getSelectorFromElement: function(t) {
			var e = t.getAttribute("data-target");
			if (!e || "#" === e) {
				var n = t.getAttribute("href");
				e = n && "#" !== n ? n.trim() : ""
			}
			try {
				return document.querySelector(e) ? e : null
			} catch (t) {
				return null
			}
		},
		getTransitionDurationFromElement: function(t) {
			if (!t) return 0;
			var n = e(t).css("transition-duration"),
				i = e(t).css("transition-delay"),
				o = parseFloat(n),
				r = parseFloat(i);
			return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
		},
		reflow: function(t) {
			return t.offsetHeight
		},
		triggerTransitionEnd: function(t) {
			e(t).trigger(s)
		},
		supportsTransitionEnd: function() {
			return Boolean(s)
		},
		isElement: function(t) {
			return (t[0] || t).nodeType
		},
		typeCheckConfig: function(t, e, n) {
			for (var i in n)
				if (Object.prototype.hasOwnProperty.call(n, i)) {
					var o = n[i],
						r = e[i],
						s = r && a.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
					if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
				} var l
		},
		findShadowRoot: function(t) {
			if (!document.documentElement.attachShadow) return null;
			if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null;
			var e = t.getRootNode();
			return e instanceof ShadowRoot ? e : null
		}
	};
	e.fn.emulateTransitionEnd = function(t) {
		var n = this,
			i = !1;
		return e(this).one(a.TRANSITION_END, (function() {
			i = !0
		})), setTimeout((function() {
			i || a.triggerTransitionEnd(n)
		}), t), this
	}, e.event.special[a.TRANSITION_END] = {
		bindType: s,
		delegateType: s,
		handle: function(t) {
			if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
		}
	};
	var l = "alert",
		c = "bs.alert",
		h = "." + c,
		u = e.fn[l],
		f = {
			CLOSE: "close" + h,
			CLOSED: "closed" + h,
			CLICK_DATA_API: "click" + h + ".data-api"
		},
		d = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.close = function(t) {
				var e = this._element;
				t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
			}, n.dispose = function() {
				e.removeData(this._element, c), this._element = null
			}, n._getRootElement = function(t) {
				var n = a.getSelectorFromElement(t),
					i = !1;
				return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i
			}, n._triggerCloseEvent = function(t) {
				var n = e.Event(f.CLOSE);
				return e(t).trigger(n), n
			}, n._removeElement = function(t) {
				var n = this;
				if (e(t).removeClass("show"), e(t).hasClass("fade")) {
					var i = a.getTransitionDurationFromElement(t);
					e(t).one(a.TRANSITION_END, (function(e) {
						return n._destroyElement(t, e)
					})).emulateTransitionEnd(i)
				} else this._destroyElement(t)
			}, n._destroyElement = function(t) {
				e(t).detach().trigger(f.CLOSED).remove()
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data(c);
					o || (o = new t(this), i.data(c, o)), "close" === n && o[n](this)
				}))
			}, t._handleDismiss = function(t) {
				return function(e) {
					e && e.preventDefault(), t.close(this)
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}]), t
		}();
	e(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), e.fn[l] = d._jQueryInterface, e.fn[l].Constructor = d, e.fn[l].noConflict = function() {
		return e.fn[l] = u, d._jQueryInterface
	};
	var g = "button",
		_ = "bs.button",
		m = "." + _,
		p = ".data-api",
		v = e.fn[g],
		E = "active",
		y = '[data-toggle^="button"]',
		C = ".btn",
		T = {
			CLICK_DATA_API: "click" + m + p,
			FOCUS_BLUR_DATA_API: "focus" + m + p + " blur" + m + p
		},
		S = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.toggle = function() {
				var t = !0,
					n = !0,
					i = e(this._element).closest('[data-toggle="buttons"]')[0];
				if (i) {
					var o = this._element.querySelector('input:not([type="hidden"])');
					if (o) {
						if ("radio" === o.type)
							if (o.checked && this._element.classList.contains(E)) t = !1;
							else {
								var r = i.querySelector(".active");
								r && e(r).removeClass(E)
							} if (t) {
							if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
							o.checked = !this._element.classList.contains(E), e(o).trigger("change")
						}
						o.focus(), n = !1
					}
				}
				n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(E)), t && e(this._element).toggleClass(E)
			}, n.dispose = function() {
				e.removeData(this._element, _), this._element = null
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data(_);
					i || (i = new t(this), e(this).data(_, i)), "toggle" === n && i[n]()
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}]), t
		}();
	e(document).on(T.CLICK_DATA_API, y, (function(t) {
		t.preventDefault();
		var n = t.target;
		e(n).hasClass("btn") || (n = e(n).closest(C)), S._jQueryInterface.call(e(n), "toggle")
	})).on(T.FOCUS_BLUR_DATA_API, y, (function(t) {
		var n = e(t.target).closest(C)[0];
		e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
	})), e.fn[g] = S._jQueryInterface, e.fn[g].Constructor = S, e.fn[g].noConflict = function() {
		return e.fn[g] = v, S._jQueryInterface
	};
	var b = "carousel",
		I = "bs.carousel",
		D = "." + I,
		w = ".data-api",
		A = e.fn[b],
		N = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		O = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		k = "next",
		P = "prev",
		L = {
			SLIDE: "slide" + D,
			SLID: "slid" + D,
			KEYDOWN: "keydown" + D,
			MOUSEENTER: "mouseenter" + D,
			MOUSELEAVE: "mouseleave" + D,
			TOUCHSTART: "touchstart" + D,
			TOUCHMOVE: "touchmove" + D,
			TOUCHEND: "touchend" + D,
			POINTERDOWN: "pointerdown" + D,
			POINTERUP: "pointerup" + D,
			DRAG_START: "dragstart" + D,
			LOAD_DATA_API: "load" + D + w,
			CLICK_DATA_API: "click" + D + w
		},
		j = "active",
		H = ".active.carousel-item",
		R = {
			TOUCH: "touch",
			PEN: "pen"
		},
		x = function() {
			function t(t, e) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
			}
			var n = t.prototype;
			return n.next = function() {
				this._isSliding || this._slide(k)
			}, n.nextWhenVisible = function() {
				!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
			}, n.prev = function() {
				this._isSliding || this._slide(P)
			}, n.pause = function(t) {
				t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
			}, n.cycle = function(t) {
				t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
			}, n.to = function(t) {
				var n = this;
				this._activeElement = this._element.querySelector(H);
				var i = this._getItemIndex(this._activeElement);
				if (!(t > this._items.length - 1 || t < 0))
					if (this._isSliding) e(this._element).one(L.SLID, (function() {
						return n.to(t)
					}));
					else {
						if (i === t) return this.pause(), void this.cycle();
						var o = i < t ? k : P;
						this._slide(o, this._items[t])
					}
			}, n.dispose = function() {
				e(this._element).off(D), e.removeData(this._element, I), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
			}, n._getConfig = function(t) {
				return t = r({}, N, t), a.typeCheckConfig(b, t, O), t
			}, n._handleSwipe = function() {
				var t = Math.abs(this.touchDeltaX);
				if (!(t <= 40)) {
					var e = t / this.touchDeltaX;
					0 < e && this.prev(), e < 0 && this.next()
				}
			}, n._addEventListeners = function() {
				var t = this;
				this._config.keyboard && e(this._element).on(L.KEYDOWN, (function(e) {
					return t._keydown(e)
				})), "hover" === this._config.pause && e(this._element).on(L.MOUSEENTER, (function(e) {
					return t.pause(e)
				})).on(L.MOUSELEAVE, (function(e) {
					return t.cycle(e)
				})), this._config.touch && this._addTouchEventListeners()
			}, n._addTouchEventListeners = function() {
				var t = this;
				if (this._touchSupported) {
					var n = function(e) {
							t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
						},
						i = function(e) {
							t._pointerEvent && R[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
								return t.cycle(e)
							}), 500 + t._config.interval))
						};
					e(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, (function(t) {
						return t.preventDefault()
					})), this._pointerEvent ? (e(this._element).on(L.POINTERDOWN, (function(t) {
						return n(t)
					})), e(this._element).on(L.POINTERUP, (function(t) {
						return i(t)
					})), this._element.classList.add("pointer-event")) : (e(this._element).on(L.TOUCHSTART, (function(t) {
						return n(t)
					})), e(this._element).on(L.TOUCHMOVE, (function(e) {
						var n;
						(n = e).originalEvent.touches && 1 < n.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = n.originalEvent.touches[0].clientX - t.touchStartX
					})), e(this._element).on(L.TOUCHEND, (function(t) {
						return i(t)
					})))
				}
			}, n._keydown = function(t) {
				if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
					case 37:
						t.preventDefault(), this.prev();
						break;
					case 39:
						t.preventDefault(), this.next()
				}
			}, n._getItemIndex = function(t) {
				return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
			}, n._getItemByDirection = function(t, e) {
				var n = t === k,
					i = t === P,
					o = this._getItemIndex(e),
					r = this._items.length - 1;
				if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
				var s = (o + (t === P ? -1 : 1)) % this._items.length;
				return -1 === s ? this._items[this._items.length - 1] : this._items[s]
			}, n._triggerSlideEvent = function(t, n) {
				var i = this._getItemIndex(t),
					o = this._getItemIndex(this._element.querySelector(H)),
					r = e.Event(L.SLIDE, {
						relatedTarget: t,
						direction: n,
						from: o,
						to: i
					});
				return e(this._element).trigger(r), r
			}, n._setActiveIndicatorElement = function(t) {
				if (this._indicatorsElement) {
					var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
					e(n).removeClass(j);
					var i = this._indicatorsElement.children[this._getItemIndex(t)];
					i && e(i).addClass(j)
				}
			}, n._slide = function(t, n) {
				var i, o, r, s = this,
					l = this._element.querySelector(H),
					c = this._getItemIndex(l),
					h = n || l && this._getItemByDirection(t, l),
					u = this._getItemIndex(h),
					f = Boolean(this._interval);
				if (r = t === k ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), h && e(h).hasClass(j)) this._isSliding = !1;
				else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
					this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(h);
					var d = e.Event(L.SLID, {
						relatedTarget: h,
						direction: r,
						from: c,
						to: u
					});
					if (e(this._element).hasClass("slide")) {
						e(h).addClass(o), a.reflow(h), e(l).addClass(i), e(h).addClass(i);
						var g = parseInt(h.getAttribute("data-interval"), 10);
						this._config.interval = g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, g) : this._config.defaultInterval || this._config.interval;
						var _ = a.getTransitionDurationFromElement(l);
						e(l).one(a.TRANSITION_END, (function() {
							e(h).removeClass(i + " " + o).addClass(j), e(l).removeClass(j + " " + o + " " + i), s._isSliding = !1, setTimeout((function() {
								return e(s._element).trigger(d)
							}), 0)
						})).emulateTransitionEnd(_)
					} else e(l).removeClass(j), e(h).addClass(j), this._isSliding = !1, e(this._element).trigger(d);
					f && this.cycle()
				}
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data(I),
						o = r({}, N, e(this).data());
					"object" == typeof n && (o = r({}, o, n));
					var s = "string" == typeof n ? n : o.slide;
					if (i || (i = new t(this, o), e(this).data(I, i)), "number" == typeof n) i.to(n);
					else if ("string" == typeof s) {
						if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
						i[s]()
					} else o.interval && o.ride && (i.pause(), i.cycle())
				}))
			}, t._dataApiClickHandler = function(n) {
				var i = a.getSelectorFromElement(this);
				if (i) {
					var o = e(i)[0];
					if (o && e(o).hasClass("carousel")) {
						var s = r({}, e(o).data(), e(this).data()),
							l = this.getAttribute("data-slide-to");
						l && (s.interval = !1), t._jQueryInterface.call(e(o), s), l && e(o).data(I).to(l), n.preventDefault()
					}
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return N
				}
			}]), t
		}();
	e(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", x._dataApiClickHandler), e(window).on(L.LOAD_DATA_API, (function() {
		for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
			var o = e(t[n]);
			x._jQueryInterface.call(o, o.data())
		}
	})), e.fn[b] = x._jQueryInterface, e.fn[b].Constructor = x, e.fn[b].noConflict = function() {
		return e.fn[b] = A, x._jQueryInterface
	};
	var F = "collapse",
		U = "bs.collapse",
		W = "." + U,
		q = e.fn[F],
		M = {
			toggle: !0,
			parent: ""
		},
		K = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		Q = {
			SHOW: "show" + W,
			SHOWN: "shown" + W,
			HIDE: "hide" + W,
			HIDDEN: "hidden" + W,
			CLICK_DATA_API: "click" + W + ".data-api"
		},
		B = "show",
		V = "collapse",
		Y = "collapsing",
		z = "collapsed",
		X = "width",
		$ = '[data-toggle="collapse"]',
		G = function() {
			function t(t, e) {
				this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
				for (var n = [].slice.call(document.querySelectorAll($)), i = 0, o = n.length; i < o; i++) {
					var r = n[i],
						s = a.getSelectorFromElement(r),
						l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
							return e === t
						}));
					null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(r))
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
			}
			var n = t.prototype;
			return n.toggle = function() {
				e(this._element).hasClass(B) ? this.hide() : this.show()
			}, n.show = function() {
				var n, i, o = this;
				if (!(this._isTransitioning || e(this._element).hasClass(B) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
						return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(V)
					}))).length && (n = null), n && (i = e(n).not(this._selector).data(U)) && i._isTransitioning))) {
					var r = e.Event(Q.SHOW);
					if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
						n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data(U, null));
						var s = this._getDimension();
						e(this._element).removeClass(V).addClass(Y), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(z).attr("aria-expanded", !0), this.setTransitioning(!0);
						var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
							c = a.getTransitionDurationFromElement(this._element);
						e(this._element).one(a.TRANSITION_END, (function() {
							e(o._element).removeClass(Y).addClass(V).addClass(B), o._element.style[s] = "", o.setTransitioning(!1), e(o._element).trigger(Q.SHOWN)
						})).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
					}
				}
			}, n.hide = function() {
				var t = this;
				if (!this._isTransitioning && e(this._element).hasClass(B)) {
					var n = e.Event(Q.HIDE);
					if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
						var i = this._getDimension();
						this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(Y).removeClass(V).removeClass(B);
						var o = this._triggerArray.length;
						if (0 < o)
							for (var r = 0; r < o; r++) {
								var s = this._triggerArray[r],
									l = a.getSelectorFromElement(s);
								null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass(B) || e(s).addClass(z).attr("aria-expanded", !1))
							}
						this.setTransitioning(!0), this._element.style[i] = "";
						var c = a.getTransitionDurationFromElement(this._element);
						e(this._element).one(a.TRANSITION_END, (function() {
							t.setTransitioning(!1), e(t._element).removeClass(Y).addClass(V).trigger(Q.HIDDEN)
						})).emulateTransitionEnd(c)
					}
				}
			}, n.setTransitioning = function(t) {
				this._isTransitioning = t
			}, n.dispose = function() {
				e.removeData(this._element, U), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
			}, n._getConfig = function(t) {
				return (t = r({}, M, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(F, t, K), t
			}, n._getDimension = function() {
				return e(this._element).hasClass(X) ? X : "height"
			}, n._getParent = function() {
				var n, i = this;
				a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
				var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
					r = [].slice.call(n.querySelectorAll(o));
				return e(r).each((function(e, n) {
					i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
				})), n
			}, n._addAriaAndCollapsedClass = function(t, n) {
				var i = e(t).hasClass(B);
				n.length && e(n).toggleClass(z, !i).attr("aria-expanded", i)
			}, t._getTargetFromElement = function(t) {
				var e = a.getSelectorFromElement(t);
				return e ? document.querySelector(e) : null
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data(U),
						s = r({}, M, i.data(), "object" == typeof n && n ? n : {});
					if (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1), o || (o = new t(this, s), i.data(U, o)), "string" == typeof n) {
						if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
						o[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return M
				}
			}]), t
		}();
	e(document).on(Q.CLICK_DATA_API, $, (function(t) {
		"A" === t.currentTarget.tagName && t.preventDefault();
		var n = e(this),
			i = a.getSelectorFromElement(this),
			o = [].slice.call(document.querySelectorAll(i));
		e(o).each((function() {
			var t = e(this),
				i = t.data(U) ? "toggle" : n.data();
			G._jQueryInterface.call(t, i)
		}))
	})), e.fn[F] = G._jQueryInterface, e.fn[F].Constructor = G, e.fn[F].noConflict = function() {
		return e.fn[F] = q, G._jQueryInterface
	};
	var J = "dropdown",
		Z = "bs.dropdown",
		tt = "." + Z,
		et = ".data-api",
		nt = e.fn[J],
		it = new RegExp("38|40|27"),
		ot = {
			HIDE: "hide" + tt,
			HIDDEN: "hidden" + tt,
			SHOW: "show" + tt,
			SHOWN: "shown" + tt,
			CLICK: "click" + tt,
			CLICK_DATA_API: "click" + tt + et,
			KEYDOWN_DATA_API: "keydown" + tt + et,
			KEYUP_DATA_API: "keyup" + tt + et
		},
		rt = "disabled",
		st = "show",
		at = "dropdown-menu-right",
		lt = '[data-toggle="dropdown"]',
		ct = ".dropdown-menu",
		ht = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic"
		},
		ut = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string"
		},
		ft = function() {
			function t(t, e) {
				this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
			}
			var i = t.prototype;
			return i.toggle = function() {
				if (!this._element.disabled && !e(this._element).hasClass(rt)) {
					var i = t._getParentFromElement(this._element),
						o = e(this._menu).hasClass(st);
					if (t._clearMenus(), !o) {
						var r = {
								relatedTarget: this._element
							},
							s = e.Event(ot.SHOW, r);
						if (e(i).trigger(s), !s.isDefaultPrevented()) {
							if (!this._inNavbar) {
								if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
								var l = this._element;
								"parent" === this._config.reference ? l = i : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(i).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
							}
							"ontouchstart" in document.documentElement && 0 === e(i).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(st), e(i).toggleClass(st).trigger(e.Event(ot.SHOWN, r))
						}
					}
				}
			}, i.show = function() {
				if (!(this._element.disabled || e(this._element).hasClass(rt) || e(this._menu).hasClass(st))) {
					var n = {
							relatedTarget: this._element
						},
						i = e.Event(ot.SHOW, n),
						o = t._getParentFromElement(this._element);
					e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(st), e(o).toggleClass(st).trigger(e.Event(ot.SHOWN, n)))
				}
			}, i.hide = function() {
				if (!this._element.disabled && !e(this._element).hasClass(rt) && e(this._menu).hasClass(st)) {
					var n = {
							relatedTarget: this._element
						},
						i = e.Event(ot.HIDE, n),
						o = t._getParentFromElement(this._element);
					e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(st), e(o).toggleClass(st).trigger(e.Event(ot.HIDDEN, n)))
				}
			}, i.dispose = function() {
				e.removeData(this._element, Z), e(this._element).off(tt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
			}, i.update = function() {
				this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
			}, i._addEventListeners = function() {
				var t = this;
				e(this._element).on(ot.CLICK, (function(e) {
					e.preventDefault(), e.stopPropagation(), t.toggle()
				}))
			}, i._getConfig = function(t) {
				return t = r({}, this.constructor.Default, e(this._element).data(), t), a.typeCheckConfig(J, t, this.constructor.DefaultType), t
			}, i._getMenuElement = function() {
				if (!this._menu) {
					var e = t._getParentFromElement(this._element);
					e && (this._menu = e.querySelector(ct))
				}
				return this._menu
			}, i._getPlacement = function() {
				var t = e(this._element.parentNode),
					n = "bottom-start";
				return t.hasClass("dropup") ? (n = "top-start", e(this._menu).hasClass(at) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(at) && (n = "bottom-end"), n
			}, i._detectNavbar = function() {
				return 0 < e(this._element).closest(".navbar").length
			}, i._getOffset = function() {
				var t = this,
					e = {};
				return "function" == typeof this._config.offset ? e.fn = function(e) {
					return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
				} : e.offset = this._config.offset, e
			}, i._getPopperConfig = function() {
				var t = {
					placement: this._getPlacement(),
					modifiers: {
						offset: this._getOffset(),
						flip: {
							enabled: this._config.flip
						},
						preventOverflow: {
							boundariesElement: this._config.boundary
						}
					}
				};
				return "static" === this._config.display && (t.modifiers.applyStyle = {
					enabled: !1
				}), t
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data(Z);
					if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data(Z, i)), "string" == typeof n) {
						if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, t._clearMenus = function(n) {
				if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
					for (var i = [].slice.call(document.querySelectorAll(lt)), o = 0, r = i.length; o < r; o++) {
						var s = t._getParentFromElement(i[o]),
							a = e(i[o]).data(Z),
							l = {
								relatedTarget: i[o]
							};
						if (n && "click" === n.type && (l.clickEvent = n), a) {
							var c = a._menu;
							if (e(s).hasClass(st) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
								var h = e.Event(ot.HIDE, l);
								e(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(c).removeClass(st), e(s).removeClass(st).trigger(e.Event(ot.HIDDEN, l)))
							}
						}
					}
			}, t._getParentFromElement = function(t) {
				var e, n = a.getSelectorFromElement(t);
				return n && (e = document.querySelector(n)), e || t.parentNode
			}, t._dataApiKeydownHandler = function(n) {
				if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(ct).length)) : it.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(rt))) {
					var i = t._getParentFromElement(this),
						o = e(i).hasClass(st);
					if (o && (!o || 27 !== n.which && 32 !== n.which)) {
						var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
						if (0 !== r.length) {
							var s = r.indexOf(n.target);
							38 === n.which && 0 < s && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
						}
					} else {
						if (27 === n.which) {
							var a = i.querySelector(lt);
							e(a).trigger("focus")
						}
						e(this).trigger("click")
					}
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return ht
				}
			}, {
				key: "DefaultType",
				get: function() {
					return ut
				}
			}]), t
		}();
	e(document).on(ot.KEYDOWN_DATA_API, lt, ft._dataApiKeydownHandler).on(ot.KEYDOWN_DATA_API, ct, ft._dataApiKeydownHandler).on(ot.CLICK_DATA_API + " " + ot.KEYUP_DATA_API, ft._clearMenus).on(ot.CLICK_DATA_API, lt, (function(t) {
		t.preventDefault(), t.stopPropagation(), ft._jQueryInterface.call(e(this), "toggle")
	})).on(ot.CLICK_DATA_API, ".dropdown form", (function(t) {
		t.stopPropagation()
	})), e.fn[J] = ft._jQueryInterface, e.fn[J].Constructor = ft, e.fn[J].noConflict = function() {
		return e.fn[J] = nt, ft._jQueryInterface
	};
	var dt = "modal",
		gt = "bs.modal",
		_t = "." + gt,
		mt = e.fn[dt],
		pt = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		},
		vt = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		},
		Et = {
			HIDE: "hide" + _t,
			HIDDEN: "hidden" + _t,
			SHOW: "show" + _t,
			SHOWN: "shown" + _t,
			FOCUSIN: "focusin" + _t,
			RESIZE: "resize" + _t,
			CLICK_DISMISS: "click.dismiss" + _t,
			KEYDOWN_DISMISS: "keydown.dismiss" + _t,
			MOUSEUP_DISMISS: "mouseup.dismiss" + _t,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + _t,
			CLICK_DATA_API: "click" + _t + ".data-api"
		},
		yt = "modal-open",
		Ct = "fade",
		Tt = "show",
		St = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		bt = ".sticky-top",
		It = function() {
			function t(t, e) {
				this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
			}
			var n = t.prototype;
			return n.toggle = function(t) {
				return this._isShown ? this.hide() : this.show(t)
			}, n.show = function(t) {
				var n = this;
				if (!this._isShown && !this._isTransitioning) {
					e(this._element).hasClass(Ct) && (this._isTransitioning = !0);
					var i = e.Event(Et.SHOW, {
						relatedTarget: t
					});
					e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Et.CLICK_DISMISS, '[data-dismiss="modal"]', (function(t) {
						return n.hide(t)
					})), e(this._dialog).on(Et.MOUSEDOWN_DISMISS, (function() {
						e(n._element).one(Et.MOUSEUP_DISMISS, (function(t) {
							e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
						}))
					})), this._showBackdrop((function() {
						return n._showElement(t)
					})))
				}
			}, n.hide = function(t) {
				var n = this;
				if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
					var i = e.Event(Et.HIDE);
					if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
						this._isShown = !1;
						var o = e(this._element).hasClass(Ct);
						if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Et.FOCUSIN), e(this._element).removeClass(Tt), e(this._element).off(Et.CLICK_DISMISS), e(this._dialog).off(Et.MOUSEDOWN_DISMISS), o) {
							var r = a.getTransitionDurationFromElement(this._element);
							e(this._element).one(a.TRANSITION_END, (function(t) {
								return n._hideModal(t)
							})).emulateTransitionEnd(r)
						} else this._hideModal()
					}
				}
			}, n.dispose = function() {
				[window, this._element, this._dialog].forEach((function(t) {
					return e(t).off(_t)
				})), e(document).off(Et.FOCUSIN), e.removeData(this._element, gt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
			}, n.handleUpdate = function() {
				this._adjustDialog()
			}, n._getConfig = function(t) {
				return t = r({}, pt, t), a.typeCheckConfig(dt, t, vt), t
			}, n._showElement = function(t) {
				var n = this,
					i = e(this._element).hasClass(Ct);
				this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(Tt), this._config.focus && this._enforceFocus();
				var o = e.Event(Et.SHOWN, {
						relatedTarget: t
					}),
					r = function() {
						n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
					};
				if (i) {
					var s = a.getTransitionDurationFromElement(this._dialog);
					e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
				} else r()
			}, n._enforceFocus = function() {
				var t = this;
				e(document).off(Et.FOCUSIN).on(Et.FOCUSIN, (function(n) {
					document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
				}))
			}, n._setEscapeEvent = function() {
				var t = this;
				this._isShown && this._config.keyboard ? e(this._element).on(Et.KEYDOWN_DISMISS, (function(e) {
					27 === e.which && (e.preventDefault(), t.hide())
				})) : this._isShown || e(this._element).off(Et.KEYDOWN_DISMISS)
			}, n._setResizeEvent = function() {
				var t = this;
				this._isShown ? e(window).on(Et.RESIZE, (function(e) {
					return t.handleUpdate(e)
				})) : e(window).off(Et.RESIZE)
			}, n._hideModal = function() {
				var t = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
					e(document.body).removeClass(yt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Et.HIDDEN)
				}))
			}, n._removeBackdrop = function() {
				this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
			}, n._showBackdrop = function(t) {
				var n = this,
					i = e(this._element).hasClass(Ct) ? Ct : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Et.CLICK_DISMISS, (function(t) {
							n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
						})), i && a.reflow(this._backdrop), e(this._backdrop).addClass(Tt), !t) return;
					if (!i) return void t();
					var o = a.getTransitionDurationFromElement(this._backdrop);
					e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
				} else if (!this._isShown && this._backdrop) {
					e(this._backdrop).removeClass(Tt);
					var r = function() {
						n._removeBackdrop(), t && t()
					};
					if (e(this._element).hasClass(Ct)) {
						var s = a.getTransitionDurationFromElement(this._backdrop);
						e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
					} else r()
				} else t && t()
			}, n._adjustDialog = function() {
				var t = this._element.scrollHeight > document.documentElement.clientHeight;
				!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
			}, n._resetAdjustments = function() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
			}, n._checkScrollbar = function() {
				var t = document.body.getBoundingClientRect();
				this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
			}, n._setScrollbar = function() {
				var t = this;
				if (this._isBodyOverflowing) {
					var n = [].slice.call(document.querySelectorAll(St)),
						i = [].slice.call(document.querySelectorAll(bt));
					e(n).each((function(n, i) {
						var o = i.style.paddingRight,
							r = e(i).css("padding-right");
						e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
					})), e(i).each((function(n, i) {
						var o = i.style.marginRight,
							r = e(i).css("margin-right");
						e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
					}));
					var o = document.body.style.paddingRight,
						r = e(document.body).css("padding-right");
					e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
				}
				e(document.body).addClass(yt)
			}, n._resetScrollbar = function() {
				var t = [].slice.call(document.querySelectorAll(St));
				e(t).each((function(t, n) {
					var i = e(n).data("padding-right");
					e(n).removeData("padding-right"), n.style.paddingRight = i || ""
				}));
				var n = [].slice.call(document.querySelectorAll("" + bt));
				e(n).each((function(t, n) {
					var i = e(n).data("margin-right");
					void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
				}));
				var i = e(document.body).data("padding-right");
				e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
			}, n._getScrollbarWidth = function() {
				var t = document.createElement("div");
				t.className = "modal-scrollbar-measure", document.body.appendChild(t);
				var e = t.getBoundingClientRect().width - t.clientWidth;
				return document.body.removeChild(t), e
			}, t._jQueryInterface = function(n, i) {
				return this.each((function() {
					var o = e(this).data(gt),
						s = r({}, pt, e(this).data(), "object" == typeof n && n ? n : {});
					if (o || (o = new t(this, s), e(this).data(gt, o)), "string" == typeof n) {
						if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
						o[n](i)
					} else s.show && o.show(i)
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return pt
				}
			}]), t
		}();
	e(document).on(Et.CLICK_DATA_API, '[data-toggle="modal"]', (function(t) {
		var n, i = this,
			o = a.getSelectorFromElement(this);
		o && (n = document.querySelector(o));
		var s = e(n).data(gt) ? "toggle" : r({}, e(n).data(), e(this).data());
		"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
		var l = e(n).one(Et.SHOW, (function(t) {
			t.isDefaultPrevented() || l.one(Et.HIDDEN, (function() {
				e(i).is(":visible") && i.focus()
			}))
		}));
		It._jQueryInterface.call(e(n), s, this)
	})), e.fn[dt] = It._jQueryInterface, e.fn[dt].Constructor = It, e.fn[dt].noConflict = function() {
		return e.fn[dt] = mt, It._jQueryInterface
	};
	var Dt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
		wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
		At = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

	function Nt(t, e, n) {
		if (0 === t.length) return t;
		if (n && "function" == typeof n) return n(t);
		for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
				var i = r[t],
					s = i.nodeName.toLowerCase();
				if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
				var a = [].slice.call(i.attributes),
					l = [].concat(e["*"] || [], e[s] || []);
				a.forEach((function(t) {
					(function(t, e) {
						var n = t.nodeName.toLowerCase();
						if (-1 !== e.indexOf(n)) return -1 === Dt.indexOf(n) || Boolean(t.nodeValue.match(wt) || t.nodeValue.match(At));
						for (var i = e.filter((function(t) {
								return t instanceof RegExp
							})), o = 0, r = i.length; o < r; o++)
							if (n.match(i[o])) return !0;
						return !1
					})(t, l) || i.removeAttribute(t.nodeName)
				}))
			}, a = 0, l = r.length; a < l; a++) s(a);
		return i.body.innerHTML
	}
	var Ot = "tooltip",
		kt = "bs.tooltip",
		Pt = "." + kt,
		Lt = e.fn[Ot],
		jt = "bs-tooltip",
		Ht = new RegExp("(^|\\s)" + jt + "\\S+", "g"),
		Rt = ["sanitize", "whiteList", "sanitizeFn"],
		xt = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object"
		},
		Ft = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		},
		Ut = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: []
			}
		},
		Wt = "show",
		qt = "out",
		Mt = {
			HIDE: "hide" + Pt,
			HIDDEN: "hidden" + Pt,
			SHOW: "show" + Pt,
			SHOWN: "shown" + Pt,
			INSERTED: "inserted" + Pt,
			CLICK: "click" + Pt,
			FOCUSIN: "focusin" + Pt,
			FOCUSOUT: "focusout" + Pt,
			MOUSEENTER: "mouseenter" + Pt,
			MOUSELEAVE: "mouseleave" + Pt
		},
		Kt = "fade",
		Qt = "show",
		Bt = "hover",
		Vt = "focus",
		Yt = function() {
			function t(t, e) {
				if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
			}
			var i = t.prototype;
			return i.enable = function() {
				this._isEnabled = !0
			}, i.disable = function() {
				this._isEnabled = !1
			}, i.toggleEnabled = function() {
				this._isEnabled = !this._isEnabled
			}, i.toggle = function(t) {
				if (this._isEnabled)
					if (t) {
						var n = this.constructor.DATA_KEY,
							i = e(t.currentTarget).data(n);
						i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
					} else {
						if (e(this.getTipElement()).hasClass(Qt)) return void this._leave(null, this);
						this._enter(null, this)
					}
			}, i.dispose = function() {
				clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
			}, i.show = function() {
				var t = this;
				if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
				var i = e.Event(this.constructor.Event.SHOW);
				if (this.isWithContent() && this._isEnabled) {
					e(this.element).trigger(i);
					var o = a.findShadowRoot(this.element),
						r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
					if (i.isDefaultPrevented() || !r) return;
					var s = this.getTipElement(),
						l = a.getUID(this.constructor.NAME);
					s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(s).addClass(Kt);
					var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
						h = this._getAttachment(c);
					this.addAttachmentClass(h);
					var u = this._getContainer();
					e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
						placement: h,
						modifiers: {
							offset: this._getOffset(),
							flip: {
								behavior: this.config.fallbackPlacement
							},
							arrow: {
								element: ".arrow"
							},
							preventOverflow: {
								boundariesElement: this.config.boundary
							}
						},
						onCreate: function(e) {
							e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
						},
						onUpdate: function(e) {
							return t._handlePopperPlacementChange(e)
						}
					}), e(s).addClass(Qt), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
					var f = function() {
						t.config.animation && t._fixTransition();
						var n = t._hoverState;
						t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === qt && t._leave(null, t)
					};
					if (e(this.tip).hasClass(Kt)) {
						var d = a.getTransitionDurationFromElement(this.tip);
						e(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(d)
					} else f()
				}
			}, i.hide = function(t) {
				var n = this,
					i = this.getTipElement(),
					o = e.Event(this.constructor.Event.HIDE),
					r = function() {
						n._hoverState !== Wt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
					};
				if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
					if (e(i).removeClass(Qt), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[Vt] = !1, this._activeTrigger[Bt] = !1, e(this.tip).hasClass(Kt)) {
						var s = a.getTransitionDurationFromElement(i);
						e(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
					} else r();
					this._hoverState = ""
				}
			}, i.update = function() {
				null !== this._popper && this._popper.scheduleUpdate()
			}, i.isWithContent = function() {
				return Boolean(this.getTitle())
			}, i.addAttachmentClass = function(t) {
				e(this.getTipElement()).addClass(jt + "-" + t)
			}, i.getTipElement = function() {
				return this.tip = this.tip || e(this.config.template)[0], this.tip
			}, i.setContent = function() {
				var t = this.getTipElement();
				this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass(Kt + " " + Qt)
			}, i.setElementContent = function(t, n) {
				"object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Nt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
			}, i.getTitle = function() {
				var t = this.element.getAttribute("data-original-title");
				return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
			}, i._getOffset = function() {
				var t = this,
					e = {};
				return "function" == typeof this.config.offset ? e.fn = function(e) {
					return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
				} : e.offset = this.config.offset, e
			}, i._getContainer = function() {
				return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
			}, i._getAttachment = function(t) {
				return Ft[t.toUpperCase()]
			}, i._setListeners = function() {
				var t = this;
				this.config.trigger.split(" ").forEach((function(n) {
					if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
						return t.toggle(e)
					}));
					else if ("manual" !== n) {
						var i = n === Bt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
							o = n === Bt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
						e(t.element).on(i, t.config.selector, (function(e) {
							return t._enter(e)
						})).on(o, t.config.selector, (function(e) {
							return t._leave(e)
						}))
					}
				})), e(this.element).closest(".modal").on("hide.bs.modal", (function() {
					t.element && t.hide()
				})), this.config.selector ? this.config = r({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle()
			}, i._fixTitle = function() {
				var t = typeof this.element.getAttribute("data-original-title");
				(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
			}, i._enter = function(t, n) {
				var i = this.constructor.DATA_KEY;
				(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? Vt : Bt] = !0), e(n.getTipElement()).hasClass(Qt) || n._hoverState === Wt ? n._hoverState = Wt : (clearTimeout(n._timeout), n._hoverState = Wt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
					n._hoverState === Wt && n.show()
				}), n.config.delay.show) : n.show())
			}, i._leave = function(t, n) {
				var i = this.constructor.DATA_KEY;
				(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? Vt : Bt] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = qt, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
					n._hoverState === qt && n.hide()
				}), n.config.delay.hide) : n.hide())
			}, i._isWithActiveTrigger = function() {
				for (var t in this._activeTrigger)
					if (this._activeTrigger[t]) return !0;
				return !1
			}, i._getConfig = function(t) {
				var n = e(this.element).data();
				return Object.keys(n).forEach((function(t) {
					-1 !== Rt.indexOf(t) && delete n[t]
				})), "number" == typeof(t = r({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = {
					show: t.delay,
					hide: t.delay
				}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a.typeCheckConfig(Ot, t, this.constructor.DefaultType), t.sanitize && (t.template = Nt(t.template, t.whiteList, t.sanitizeFn)), t
			}, i._getDelegateConfig = function() {
				var t = {};
				if (this.config)
					for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
				return t
			}, i._cleanTipClass = function() {
				var t = e(this.getTipElement()),
					n = t.attr("class").match(Ht);
				null !== n && n.length && t.removeClass(n.join(""))
			}, i._handlePopperPlacementChange = function(t) {
				var e = t.instance;
				this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
			}, i._fixTransition = function() {
				var t = this.getTipElement(),
					n = this.config.animation;
				null === t.getAttribute("x-placement") && (e(t).removeClass(Kt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data(kt),
						o = "object" == typeof n && n;
					if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data(kt, i)), "string" == typeof n)) {
						if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return Ut
				}
			}, {
				key: "NAME",
				get: function() {
					return Ot
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return kt
				}
			}, {
				key: "Event",
				get: function() {
					return Mt
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return Pt
				}
			}, {
				key: "DefaultType",
				get: function() {
					return xt
				}
			}]), t
		}();
	e.fn[Ot] = Yt._jQueryInterface, e.fn[Ot].Constructor = Yt, e.fn[Ot].noConflict = function() {
		return e.fn[Ot] = Lt, Yt._jQueryInterface
	};
	var zt = "popover",
		Xt = "bs.popover",
		$t = "." + Xt,
		Gt = e.fn[zt],
		Jt = "bs-popover",
		Zt = new RegExp("(^|\\s)" + Jt + "\\S+", "g"),
		te = r({}, Yt.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}),
		ee = r({}, Yt.DefaultType, {
			content: "(string|element|function)"
		}),
		ne = {
			HIDE: "hide" + $t,
			HIDDEN: "hidden" + $t,
			SHOW: "show" + $t,
			SHOWN: "shown" + $t,
			INSERTED: "inserted" + $t,
			CLICK: "click" + $t,
			FOCUSIN: "focusin" + $t,
			FOCUSOUT: "focusout" + $t,
			MOUSEENTER: "mouseenter" + $t,
			MOUSELEAVE: "mouseleave" + $t
		},
		ie = function(t) {
			var n, i;

			function r() {
				return t.apply(this, arguments) || this
			}
			i = t, (n = r).prototype = Object.create(i.prototype), (n.prototype.constructor = n).__proto__ = i;
			var s = r.prototype;
			return s.isWithContent = function() {
				return this.getTitle() || this._getContent()
			}, s.addAttachmentClass = function(t) {
				e(this.getTipElement()).addClass(Jt + "-" + t)
			}, s.getTipElement = function() {
				return this.tip = this.tip || e(this.config.template)[0], this.tip
			}, s.setContent = function() {
				var t = e(this.getTipElement());
				this.setElementContent(t.find(".popover-header"), this.getTitle());
				var n = this._getContent();
				"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
			}, s._getContent = function() {
				return this.element.getAttribute("data-content") || this.config.content
			}, s._cleanTipClass = function() {
				var t = e(this.getTipElement()),
					n = t.attr("class").match(Zt);
				null !== n && 0 < n.length && t.removeClass(n.join(""))
			}, r._jQueryInterface = function(t) {
				return this.each((function() {
					var n = e(this).data(Xt),
						i = "object" == typeof t ? t : null;
					if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data(Xt, n)), "string" == typeof t)) {
						if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
						n[t]()
					}
				}))
			}, o(r, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return te
				}
			}, {
				key: "NAME",
				get: function() {
					return zt
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return Xt
				}
			}, {
				key: "Event",
				get: function() {
					return ne
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return $t
				}
			}, {
				key: "DefaultType",
				get: function() {
					return ee
				}
			}]), r
		}(Yt);
	e.fn[zt] = ie._jQueryInterface, e.fn[zt].Constructor = ie, e.fn[zt].noConflict = function() {
		return e.fn[zt] = Gt, ie._jQueryInterface
	};
	var oe = "scrollspy",
		re = "bs.scrollspy",
		se = "." + re,
		ae = e.fn[oe],
		le = {
			offset: 10,
			method: "auto",
			target: ""
		},
		ce = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		},
		he = {
			ACTIVATE: "activate" + se,
			SCROLL: "scroll" + se,
			LOAD_DATA_API: "load" + se + ".data-api"
		},
		ue = "active",
		fe = ".nav, .list-group",
		de = ".nav-link",
		ge = ".list-group-item",
		_e = "position",
		me = function() {
			function t(t, n) {
				var i = this;
				this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + de + "," + this._config.target + " " + ge + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(he.SCROLL, (function(t) {
					return i._process(t)
				})), this.refresh(), this._process()
			}
			var n = t.prototype;
			return n.refresh = function() {
				var t = this,
					n = this._scrollElement === this._scrollElement.window ? "offset" : _e,
					i = "auto" === this._config.method ? n : this._config.method,
					o = i === _e ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
					var n, r = a.getSelectorFromElement(t);
					if (r && (n = document.querySelector(r)), n) {
						var s = n.getBoundingClientRect();
						if (s.width || s.height) return [e(n)[i]().top + o, r]
					}
					return null
				})).filter((function(t) {
					return t
				})).sort((function(t, e) {
					return t[0] - e[0]
				})).forEach((function(e) {
					t._offsets.push(e[0]), t._targets.push(e[1])
				}))
			}, n.dispose = function() {
				e.removeData(this._element, re), e(this._scrollElement).off(se), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
			}, n._getConfig = function(t) {
				if ("string" != typeof(t = r({}, le, "object" == typeof t && t ? t : {})).target) {
					var n = e(t.target).attr("id");
					n || (n = a.getUID(oe), e(t.target).attr("id", n)), t.target = "#" + n
				}
				return a.typeCheckConfig(oe, t, ce), t
			}, n._getScrollTop = function() {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
			}, n._getScrollHeight = function() {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
			}, n._getOffsetHeight = function() {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
			}, n._process = function() {
				var t = this._getScrollTop() + this._config.offset,
					e = this._getScrollHeight(),
					n = this._config.offset + e - this._getOffsetHeight();
				if (this._scrollHeight !== e && this.refresh(), n <= t) {
					var i = this._targets[this._targets.length - 1];
					this._activeTarget !== i && this._activate(i)
				} else {
					if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
					for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
				}
			}, n._activate = function(t) {
				this._activeTarget = t, this._clear();
				var n = this._selector.split(",").map((function(e) {
						return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
					})),
					i = e([].slice.call(document.querySelectorAll(n.join(","))));
				i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(ue), i.addClass(ue)) : (i.addClass(ue), i.parents(fe).prev(de + ", " + ge).addClass(ue), i.parents(fe).prev(".nav-item").children(de).addClass(ue)), e(this._scrollElement).trigger(he.ACTIVATE, {
					relatedTarget: t
				})
			}, n._clear = function() {
				[].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
					return t.classList.contains(ue)
				})).forEach((function(t) {
					return t.classList.remove(ue)
				}))
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data(re);
					if (i || (i = new t(this, "object" == typeof n && n), e(this).data(re, i)), "string" == typeof n) {
						if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "Default",
				get: function() {
					return le
				}
			}]), t
		}();
	e(window).on(he.LOAD_DATA_API, (function() {
		for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
			var i = e(t[n]);
			me._jQueryInterface.call(i, i.data())
		}
	})), e.fn[oe] = me._jQueryInterface, e.fn[oe].Constructor = me, e.fn[oe].noConflict = function() {
		return e.fn[oe] = ae, me._jQueryInterface
	};
	var pe = "bs.tab",
		ve = "." + pe,
		Ee = e.fn.tab,
		ye = {
			HIDE: "hide" + ve,
			HIDDEN: "hidden" + ve,
			SHOW: "show" + ve,
			SHOWN: "shown" + ve,
			CLICK_DATA_API: "click" + ve + ".data-api"
		},
		Ce = "active",
		Te = "fade",
		Se = "show",
		be = ".active",
		Ie = "> li > .active",
		De = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.show = function() {
				var t = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Ce) || e(this._element).hasClass("disabled"))) {
					var n, i, o = e(this._element).closest(".nav, .list-group")[0],
						r = a.getSelectorFromElement(this._element);
					if (o) {
						var s = "UL" === o.nodeName || "OL" === o.nodeName ? Ie : be;
						i = (i = e.makeArray(e(o).find(s)))[i.length - 1]
					}
					var l = e.Event(ye.HIDE, {
							relatedTarget: this._element
						}),
						c = e.Event(ye.SHOW, {
							relatedTarget: i
						});
					if (i && e(i).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
						r && (n = document.querySelector(r)), this._activate(this._element, o);
						var h = function() {
							var n = e.Event(ye.HIDDEN, {
									relatedTarget: t._element
								}),
								o = e.Event(ye.SHOWN, {
									relatedTarget: i
								});
							e(i).trigger(n), e(t._element).trigger(o)
						};
						n ? this._activate(n, n.parentNode, h) : h()
					}
				}
			}, n.dispose = function() {
				e.removeData(this._element, pe), this._element = null
			}, n._activate = function(t, n, i) {
				var o = this,
					r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(be) : e(n).find(Ie))[0],
					s = i && r && e(r).hasClass(Te),
					l = function() {
						return o._transitionComplete(t, r, i)
					};
				if (r && s) {
					var c = a.getTransitionDurationFromElement(r);
					e(r).removeClass(Se).one(a.TRANSITION_END, l).emulateTransitionEnd(c)
				} else l()
			}, n._transitionComplete = function(t, n, i) {
				if (n) {
					e(n).removeClass(Ce);
					var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
					o && e(o).removeClass(Ce), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
				}
				if (e(t).addClass(Ce), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), t.classList.contains(Te) && t.classList.add(Se), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
					var r = e(t).closest(".dropdown")[0];
					if (r) {
						var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
						e(s).addClass(Ce)
					}
					t.setAttribute("aria-expanded", !0)
				}
				i && i()
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data(pe);
					if (o || (o = new t(this), i.data(pe, o)), "string" == typeof n) {
						if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
						o[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}]), t
		}();
	e(document).on(ye.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
		t.preventDefault(), De._jQueryInterface.call(e(this), "show")
	})), e.fn.tab = De._jQueryInterface, e.fn.tab.Constructor = De, e.fn.tab.noConflict = function() {
		return e.fn.tab = Ee, De._jQueryInterface
	};
	var we = "toast",
		Ae = "bs.toast",
		Ne = "." + Ae,
		Oe = e.fn[we],
		ke = {
			CLICK_DISMISS: "click.dismiss" + Ne,
			HIDE: "hide" + Ne,
			HIDDEN: "hidden" + Ne,
			SHOW: "show" + Ne,
			SHOWN: "shown" + Ne
		},
		Pe = "hide",
		Le = "show",
		je = "showing",
		He = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		Re = {
			animation: !0,
			autohide: !0,
			delay: 500
		},
		xe = function() {
			function t(t, e) {
				this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
			}
			var n = t.prototype;
			return n.show = function() {
				var t = this;
				e(this._element).trigger(ke.SHOW), this._config.animation && this._element.classList.add("fade");
				var n = function() {
					t._element.classList.remove(je), t._element.classList.add(Le), e(t._element).trigger(ke.SHOWN), t._config.autohide && t.hide()
				};
				if (this._element.classList.remove(Pe), this._element.classList.add(je), this._config.animation) {
					var i = a.getTransitionDurationFromElement(this._element);
					e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
				} else n()
			}, n.hide = function(t) {
				var n = this;
				this._element.classList.contains(Le) && (e(this._element).trigger(ke.HIDE), t ? this._close() : this._timeout = setTimeout((function() {
					n._close()
				}), this._config.delay))
			}, n.dispose = function() {
				clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Le) && this._element.classList.remove(Le), e(this._element).off(ke.CLICK_DISMISS), e.removeData(this._element, Ae), this._element = null, this._config = null
			}, n._getConfig = function(t) {
				return t = r({}, Re, e(this._element).data(), "object" == typeof t && t ? t : {}), a.typeCheckConfig(we, t, this.constructor.DefaultType), t
			}, n._setListeners = function() {
				var t = this;
				e(this._element).on(ke.CLICK_DISMISS, '[data-dismiss="toast"]', (function() {
					return t.hide(!0)
				}))
			}, n._close = function() {
				var t = this,
					n = function() {
						t._element.classList.add(Pe), e(t._element).trigger(ke.HIDDEN)
					};
				if (this._element.classList.remove(Le), this._config.animation) {
					var i = a.getTransitionDurationFromElement(this._element);
					e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
				} else n()
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data(Ae);
					if (o || (o = new t(this, "object" == typeof n && n), i.data(Ae, o)), "string" == typeof n) {
						if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
						o[n](this)
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.3.1"
				}
			}, {
				key: "DefaultType",
				get: function() {
					return He
				}
			}, {
				key: "Default",
				get: function() {
					return Re
				}
			}]), t
		}();
	e.fn[we] = xe._jQueryInterface, e.fn[we].Constructor = xe, e.fn[we].noConflict = function() {
			return e.fn[we] = Oe, xe._jQueryInterface
		},
		function() {
			if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var t = e.fn.jquery.split(" ")[0].split(".");
			if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
		}(), t.Util = a, t.Alert = d, t.Button = S, t.Carousel = x, t.Collapse = G, t.Dropdown = ft, t.Modal = It, t.Popover = ie, t.Scrollspy = me, t.Tab = De, t.Toast = xe, t.Tooltip = Yt, Object.defineProperty(t, "__esModule", {
			value: !0
		})
}));