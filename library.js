'use strict';
(function(gl, fa) {
    var j = {
            error: function(e) {
                throw new Error(e);
            },
            log: function() {
                console.log(arguments);
            },
            msg: {
                ab: 'bad request',
                ac: 'jsl is experiencing a conflict',
                ad: 'requires a window with the document',
                ae: 'type mismatch',
                af: 'this database has been created',
                ag: 'bad type data',
                ah: 'this browser does not support desktop notification',
                ai: 'reserved'
            },
            name: 'JavaScript Library',
            status: 'beta',
            version: '3.4.7.180112'
        },
        inc = typeof module === 'object' && typeof module.exports === 'object' ? module.exports = gl.document ? fa(gl, fa) : function(w) {
            if (!w.document) j.error(j.msg.ad);
            return fa(w, fa);
        } : fa(gl, fa);
    typeof gl.jsl === 'undefined' ? (inc.fn = j, gl.do = document, gl.jsl = inc, document.addEventListener('DOMContentLoaded', function() {
        inc.fn.DOMCL = true;
    }, false)) : j.error(j.msg.ac);
})(typeof window != 'undefined' ? window : this, function(ww, fn) {
    var ty = {
            a: function(v) {
                if (v != null)
                    if (typeof v === 'object' && v.length > 0) return true;
                return Array.isArray(v);
            },
            b: function(v) {
                return typeof v === 'boolean';
            },
            e: function(v) {
                return v === '';
            },
            f: function(v) {
                return typeof v === 'function';
            },
            n: function(v) {
                return typeof v === 'number';
            },
            o: function(v) {
                return !Array.isArray(v) ? typeof v === 'object' : false;
            },
            s: function(v) {
                return typeof v === 'string';
            },
            u: function(v) {
                return typeof v === 'undefined';
            },
            N: function(v) {
                return isNaN(v);
            }
        },
        ga = function tg(a, b, c, d) {
            if (ty.u(gc.change)) gc.change = {};
            if (ty.u(gc.change[a])) gc.change[a] = {};
            if (ty.u(gc.change[a][b])) gc.change[a][b] = {};
            gc.change[a][b][c] = d;
        },
        gb = function tg(a, b, c, d) {
            Object.defineProperty(a, b, {
                value: c,
                writable: false,
                enumerable: false,
                configurable: d || false
            });
        },
        gc = function tg(a, b) {
            return fn.re.dom(a, b);
        },
        gd = {},
        ge = {},
        gf = {},
        gg = {},
        gh = {},
        gi = [],
        gj = [],
        gk = {
            creator: 'jsl'
        };
    gb(fn, 're', function(a, b) {
        if (ty.a(a)) {
            this.selector = a;
            this.length = a.length;
            this.a = a;
        }
        if (ty.f(a)) {
            if (ty.a(b)) {
                for (var i = 0; i < b.length; i++) {
                    if (gi.indexOf(ww) === -1)
                        gi.push(ww);
                    var va = /\[object [a-zA-Z]+\]/.test(String(ww)) ? ww + gi.indexOf(ww) : ww,
                        vb = b[i],
                        fa = function(ev) {
                            for (var j = 0; j < gh[va][vb].length; j++) {
                                if (ty.f(gh[va][vb][j]) == true) {
                                    if (ty.s(gh[va][vb][j]['tagName']))
                                        if (gh[va][vb][j]['tagName'] == ev.target.tagName)
                                            gh[va][vb][j](ev);
                                    if (ty.u(gh[va][vb][j]['tagName']))
                                        gh[va][vb][j](ev);
                                }
                            }
                        };
                    if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(va) != null) {
                        var vc = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(va);
                        va = vc[1] + vc[2] + vc[3];
                    }
                    if (ty.u(gh[va]))
                        gh[va] = {};
                    if (ty.u(gh[va][vb]))
                        gh[va][vb] = [];
                    gh[va][vb].push(function(ev) {
                        gk.fn = a;
                        gk.fn(ev);
                    });
                    ww.addEventListener(vb, fa, b || false);
                }
            } else {
                gk.fn = a;
                gk.fn();
            }
            return a;
        }
        if (ty.o(a)) {
            var va = String(a).match(/\[object HTML([a-zA-Z]+).*/),
                vb = String(a).match(/\[object ([A-Z][a-z]+).*/);
            this.a = a;
            this.length = 1;
            if (a === ww) this.selector = 'window';
            if (a === ww.do) this.selector = 'document';
            if (ty.a(va)) this.selector = va[1].toLowerCase();
            if (ty.a(vb))
                if (vb[1] === 'Object') return a;
            if (ty.a(a) /*&&a.length>0*/ ) {
                this.selector = a;
                for (var i = 0; i < a.length; i++)
                    if (ty.o(a[i])) return;
            }
            if (ty.s(a.href)) {
                this.selector = 'a';
                return;
            }
            if (va === null && vb === null) return a;
        }
        if (ty.s(a)) {
            var fa = function(st) {
                    var fb = function(sr) {
                            var fc = function(av) {
                                    var va = [
                                        /^(.+)\[(\d+)-(\d+)\]$/im,
                                        /^(.+)\((\d+),(\d+)\)$/im,
                                        /^(.+)\[(\d+)-\]$/im, /^(.+)\[(\d+)\]$/im,
                                        /^(.+)!(\d+)$/im, /^(.+):(\d+)$/im
                                    ];
                                    for (var i = 0; i < va.length; i++) {
                                        var vb = av.match(va[i]);
                                        if (ty.a(vb)) {
                                            vb = vb.map(function(aa) {
                                                var va = +aa;
                                                return ty.N(va) ? aa : va;
                                            });
                                            return [
                                                [
                                                    [vb[2], vb[3]], 0, sr = vb[1]
                                                ],
                                                [
                                                    [vb[2], vb[3]], 1, sr = vb[1]
                                                ],
                                                [
                                                    [vb[2], vb[3]], 2, sr = vb[1]
                                                ],
                                                [vb[2], 4, sr = vb[1]],
                                                [vb[2], 3, sr = vb[1]],
                                                [vb[2], 4, sr = vb[1]]
                                            ][i];
                                        }
                                    }
                                    return false;
                                }(sr),
                                va = ww.do.querySelectorAll(sr);
                            if (ty.a(fc))
                                switch (fc[1]) {
                                    case 0:
                                        {
                                            var vb = [];
                                            if (fc[0][0] >= 0 && fc[0][1] >= 0 && fc[0][0] <= fc[0][1])
                                                for (var i = fc[0][0]; i <= fc[0][1]; i++)
                                                    if (ty.o(va[i])) vb.push(va[i]);va = vb;
                                        };
                                        break;
                                    case 1:
                                        {
                                            var vb = [];
                                            if (fc[0][0] >= 0 && fc[0][1] >= 0)
                                                for (var i = fc[0][0], j = 0; j < fc[0][1]; i++, j++)
                                                    if (ty.o(va[i])) vb.push(va[i]);va = vb;
                                        };
                                        break;
                                    case 2:
                                        {
                                            var vb = [];
                                            if (fc[0][0] >= 0 && !fc[0][1])
                                                for (var i = fc[0][0]; i <= va.length; i++)
                                                    if (ty.o(va[i])) vb.push(va[i]);va = vb;
                                        };
                                        break;
                                    case 3:
                                        {
                                            var vb = [];
                                            for (var i = 0; i < va.length; i++)
                                                if (ty.o(va[i])) vb.push(va[i]);vb.splice(fc[0], 1);va = vb;
                                        };
                                        break;
                                    case 4:
                                        va = va[fc[0]];
                                        break;
                                }
                            return va;
                        },
                        va = st.split(/(?!\([^)]*),(?![^(]*\))/);
                    if (va.length > 1) {
                        var vb = [];
                        for (var i = 0; i < va.length; i++) {
                            var vc = fb(va[i]);
                            if (ty.a(vc))
                                for (var j = 0; j < vc.length; j++)
                                    vb.push(vc[j]);
                            else
                            if (ty.u(vc.length))
                                vb.push(vc);
                        }
                        return vb;
                    }
                    return fb(st);
                },
                va = fa(a);
            va === null || va.length === 0 ? gc.fn.DOMCL === true ? (this.a = null, this.length = 0) : (ww.do.addEventListener('DOMContentLoaded', this.a = function tg() {
                var va = fa(a).length === 0 ? null : fa(a);
                for (var i in gg)
                    for (var j in gg[i])
                        for (var k = 0; k < gg[i][j].length; k++)
                            gc(i)[j](gg[i][j][k][0], gg[i][j][k][1], gg[i][j][k][2], gg[i][j][k][3]);
                return va === null ? va : va.length === 1 && ty.o(va[0]) ? va[0] : va;
            }, b && true), this.length = undefined) : (this.length = ty.u(va.length) ? 1 : va.length || 0, this.length === 1 && ty.o(va[0]) ? this.a = va[0] : ty.a(va) || ty.o(va) ? this.a = va : (this.a = null, this.length = 0));
            this.selector = a;
        }
    });
    gb(fn.re, 'dom', function(a, b) {
        var ba = {
                addClass: function(c) {
                    if (ty.f(this.a)) bc('addClass', c);
                    if (this.a == null) return this;
                    if (!ty.e(this.a.className))
                        for (var i = 0; i < this.a.className.split(' ').length; i++)
                            if (this.a.className.split(' ')[i] == c)
                                return this;
                    ga(a, 'addClass', 'className', c);
                    if (ty.e(this.a.className) || ty.u(this.a.className))
                        this.a.className = c;
                    else
                        this.a.className = this.a.className + ' ' + c;
                    return this;
                },
                animate: function(c, d, e) {
                    if (ty.f(this.a) || this.a == null) return this;
                    var va = this;
                    if (ty.o(c)) {
                        var z = {
                            colorRotate: function(f) {
                                var vb = (va.a.style.backgroundColor || 'rgb(255,255,255)').match(/[rgb|rgba]\((\d+),[ ]?(\d+),[ ]?(\d+)*/),
                                    vc = [Number(vb[1]), Number(vb[2]), Number(vb[3])],
                                    fa = function() {
                                        setTimeout(function() {
                                            for (var i = 0; i < f.length; i++) {
                                                if (f[i] < vc[i]) vc[i] = --vc[i];
                                                if (f[i] > vc[i]) vc[i] = ++vc[i];
                                            }
                                            new fn.re(va.a, b).css('background', 'rgb(' + vc.join(',') + ')');
                                            if (f.join('') != vc.join('')) fa();
                                        }, d);
                                    };
                                fa();
                            },
                            opacity: function(f) {
                                var vb = va.a.opacity = va.a.style.opacity = new fn.re(a, b).css('opacity') || 1,
                                    fa = function() {
                                        setTimeout(function() {
                                            vb = va.a.opacity = va.a.style.opacity = (vb > f ? Number(vb) - e : Number(vb) + e).toFixed(2);
                                            if (vb != f) fa();
                                        }, vc);
                                    };
                                if (ty.u(e)) e = 0.05;
                                else if (e < 0.01) e = 0.01;
                                var vc = vb > f ? (d / ((vb - f) / e)) : (d / ((f - vb) / e));
                                if (vb != f) fa();
                            },
                            scrollTop: function(f) {
                                var vb = va.animate('scrollTop'),
                                    vc = va.animate('scrollLeft'),
                                    fa = function() {
                                        setTimeout(function() {
                                            scrollTo(vc, vb < f ? f - 8 + i : f + 8 - i);
                                            if (i != 8) fa();
                                            i++;
                                        }, d);
                                    },
                                    i = 0;
                                if (Math.abs(vb - f) > 10 && Math.abs(f - vb) > 10) {
                                    scrollTo(vc, vb < f ? f - 8 : f + 8);
                                    if (vb != f) fa();
                                } else
                                    scrollTo(vc, f);
                            },
                            scrollElem: function(f) {
                                var vb, vc, i = 0,
                                    vd = new fn.re(a, b).getCoordinates(),
                                    fa = function() {
                                        setTimeout(function() {
                                            if (i < f[1]) {
                                                if (f[0] == 0 || f[0] == 1) vc = vc - 1;
                                                if (f[0] == 2 || f[0] == 3) vc = vc + 1;
                                                if (f[0] == 0 || f[0] == 2) {
                                                    vb = {
                                                        top: vc + 'px'
                                                    };
                                                }
                                                if (f[0] == 1 || f[0] == 3) {
                                                    vb = {
                                                        left: vc + 'px'
                                                    };
                                                }
                                                new fn.re(a, b).css(vb);
                                                i++;
                                                fa();
                                            }
                                        }, d / f[1]);
                                    };
                                if (f[0] == 0 || f[0] == 2) vc = vd.top;
                                if (f[0] == 1 || f[0] == 3) vc = vd.left;
                                fa();
                            }
                        };
                        for (var i in c)
                            if (ty.f(z[i])) z[i](c[i]);
                    }
                    if (ty.s(c)) {
                        if (c === 'scrollTop' && ty.u(d) && ty.u(e)) return this.a == ww || a == 'body' ?
                            ww.pageYOffset ?
                            ww.pageYOffset :
                            ww.do.documentElement.scrollTop ?
                            ww.do.documentElement.scrollTop :
                            ww.do.body.scrollTop :
                            this.a.scrollTop;
                        if (c === 'scrollLeft' && ty.u(d) && ty.u(e)) return this.a == ww || a == 'body' ?
                            ww.pageXOffset ?
                            ww.pageXOffset :
                            ww.do.documentElement.scrollLeft ?
                            ww.do.documentElement.scrollLeft :
                            ww.do.body.scrollLeft :
                            this.a.scrollLeft;
                        if (c === 'scrollTop' && ty.n(d) && ty.u(e)) ww.scrollTo(va.animate('scrollLeft'), d);
                        if (c === 'scrollLeft' && ty.n(d) && ty.u(e)) ww.scrollTo(d, va.animate('scrollTop'));
                        if (c === 'scrollTo' && ty.n(d) && ty.n(e)) ww.scrollTo(d, e);
                    }
                    return this;
                },
                append: function(c, d) {
                    if (ty.f(this.a) || this.a == null) return this;
                    if (ty.s(c) || ty.o(c)) {
                        var fa = function(aa) {
                            var va;
                            if (ty.s(c)) {
                                va = ty.u(d) ? ww.do.createElement('DIV') : ww.do.createElement(d);
                                va.innerHTML = c;
                                ga(aa, 'append', 'appendChild', va);
                                aa.appendChild(ty.u(d) ? va.lastChild : va);
                            }
                            if (ty.a(c)) {
                                for (var i = 0; i < c.length; i++) {
                                    if (ty.s(c[i])) {
                                        ww.do.createElement('DIV').innerHTML = c[i];
                                        ga(aa, 'append', 'appendChild', va);
                                        aa.appendChild(va);
                                    }
                                    if (ty.o(c[i])) {
                                        ga(aa, 'append', 'appendChild', c[i]);
                                        aa.appendChild(c[i]);
                                    }
                                }
                            } else {
                                ga(aa, 'append', 'appendChild', c);
                                aa.appendChild(c);
                            }
                        };
                        if (ty.a(this.a)) {
                            for (var i = 0; i < this.a.length; i++)
                                if (ty.o(this.a[i]))
                                    fa(this.a[i]);
                        } else
                            fa(this.a);
                    }
                    return this;
                },
                attr: function(c, d) {
                    if (ty.f(this.a)) bc('attr', c, d);
                    if (this.a == null) return this;
                    var fa = function(c, d, e) {
                        if (ty.s(d)) {
                            if ( /*ty.a(e)*/ ty.o(e) && ty.n(e.length)) {
                                for (var i = 0; i < e.length; i++)
                                    if (ty.f(e[i].setAttribute))
                                        e[i].setAttribute(c, d);
                            } else
                            if (ty.o(e))
                                e.setAttribute(c, d);
                        }
                    };
                    if (ty.s(c) && ty.s(d)) {
                        fa(c, d, this.a);
                        ga(a, 'attr', c, d);
                    }
                    if (ty.o(c) && ty.u(d)) {
                        for (var i in c) {
                            fa(i, c[i], this.a);
                            ga(a, 'attr', i, c[i]);
                        }
                    }
                    if (ty.s(c) && ty.u(d)) {
                        if (ty.a(this.a)) {
                            var va = [];
                            for (var i = 0; i < this.a.length; i++)
                                if (ty.o(this.a[i]))
                                    va[i] = this.a[i].getAttribute(c);
                                else
                                    va[i] = this.a[i];
                            return va;
                        } else
                        if (ty.o(this.a))
                            return this.a.getAttribute(c);
                    }
                    return this;
                },
                blur: function() {
                    if (ty.f(this.a) || this.a == null) return this;
                    this.a.blur();
                    return this;
                },
                children: function(c) {
                    if (ty.f(this.a) || this.a == null) return this;
                    if (ty.n(c))
                        this.a = this.a.children[c];
                    else
                    if (this.a.children)
                        this.a = this.a.children;
                    return this;
                },
                createElement: function(c) {
                    var va = ww.do.createElement(a);
                    if (ty.o(c))
                        for (var i in c)
                            if (ty.s(c[i]))
                                va.setAttribute(i, c[i]);
                    return va;
                },
                css: function(c, d) {
                    if (ty.f(this.a)) bc('css', c, d);
                    if (this.a == null) return this;
                    if ((ty.s(c) || ty.o(c)) && (ty.s(d) || ty.u(d))) {
                        if ((ty.o(this.a) || ty.a(this.a)) && this.a != null) {
                            var fa = function(aa) {
                                if (ty.s(c) && ty.s(d)) {
                                    aa.style[c] = d;
                                    ga(a, 'css', c, d);
                                }
                                if (ty.o(c) && ty.u(d)) {
                                    for (var i in c) {
                                        aa.style[i] = c[i];
                                        ga(a, 'css', i, c[i]);
                                    }
                                }
                            };
                            if (ty.a(this.a)) {
                                for (var i = 0; i < this.a.length; i++)
                                    if (ty.o(this.a[i]))
                                        fa(this.a[i]);
                            } else
                                fa(this.a);
                        }
                        if (ty.s(c) && ty.u(d)) {
                            var fa = function(aa) {
                                    if (ty.o(aa.style))
                                        if (!ty.u(aa.style[c]) && !ty.e(aa.style[c]) && aa.style[c] != 'auto')
                                            return aa.style[c];
                                    if (!ty.u(aa[c]) && !ty.e(aa[c]) && aa[c] != 'auto')
                                        return aa[c];
                                    return false;
                                },
                                va, vb, vc = getComputedStyle(this.a, null);
                            if (c === 'outerHeight' || c === 'outerWidth') {
                                va = [
                                    parseInt(vc['margin-top']),
                                    parseInt(vc['margin-right']),
                                    parseInt(vc['margin-bottom']),
                                    parseInt(vc['margin-left'])
                                ];
                                if (c === 'outerHeight') {
                                    vb = 1;
                                    c = 'offsetHeight';
                                }
                                if (c === 'outerWidth') {
                                    vb = 2;
                                    c = 'offsetWidth';
                                }
                            }
                            if (fa(this.a) != false) {
                                if (vb === 1) return fa(this.a) + va[0] + va[2];
                                if (vb === 2) return fa(this.a) + va[1] + va[3];
                                return fa(this.a);
                            }
                            try {
                                return (vc[c] || this.a.currentStyle[c]);
                            } catch (e) {};
                            return '';
                        }
                    }
                    return this;
                },
                data: function(c) {
                    if (ty.o(c)) {
                        if (ty.u(gd[a]))
                            gd[a] = {};
                        for (var i in c)
                            gd[a][i] = c[i];
                    }
                    if (ty.s(c))
                        if (!ty.u(gd[a]))
                            return gd[a][c];
                    if (ty.u(c))
                        return gd[a];
                    return this;
                },
                drgdrp: function(c) {
                    if (ty.f(this.a) || this.a == null) return this;
                    this.a.onmousedown = function(ev) {
                        var va = ww.do.elementFromPoint(ev.clientX, ev.clientY),
                            vb = ty.u(ev.offsetX) ? ev.layerX : ev.offsetX,
                            vc = ty.u(ev.offsetY) ? ev.layerY : ev.offsetY;
                        va.style.zIndex = 1e3;
                        va.style.position = 'fixed';
                        va.style.top = (Number(ev.clientY) - vc) + 'px';
                        va.style.left = (Number(ev.clientX) - vb) + 'px';
                        ww.do.onmouseup = function(ev) {
                            ww.do.onmousemove = null;
                            ww.do.body.onmousedown = null;
                        };
                        ww.do.onselectstart = function(ev) {
                            ev.preventDefault();
                        };
                        ww.do.ondragstart = function(ev) {
                            ev.preventDefault();
                        };
                        ww.do.onmousemove = function(ev) {
                            if (c != 2 && (Number(ev.pageY) - vc) > 0)
                                va.style.top = (Number(ev.pageY) - vc) + 'px';
                            if (c != 1 && (Number(ev.pageX) - vb) > 0)
                                va.style.left = (Number(ev.pageX) - vb) + 'px';
                        };
                    };
                    return this;
                },
                getCoordinates: function() {
                    if (ty.f(this.a) || this.a == null) return this;
                    return function(aa) {
                        var va = aa.getBoundingClientRect(),
                            vb = ww.do.body,
                            vc = ww.do.documentElement,
                            vd = ww.pageYOffset || vc.scrollTop || vb.scrollTop,
                            ve = ww.pageXOffset || vc.scrollLeft || vb.scrollLeft,
                            vf = vc.clientTop || vb.clientTop || 0,
                            vg = vc.clientLeft || vb.clientLeft || 0,
                            vh = va.top + vd - vf,
                            vi = va.left + ve - vg;
                        return {
                            top: Math.round(vh),
                            left: Math.round(vi)
                        };
                    }(this.a);
                },
                getEvents: function(c) {
                    if (ty.s(c))
                        if (ty.o(gh[a]))
                            return gh[a][c];
                    if (ty.u(c))
                        return gh[a];
                    return gh;
                },
                getFocused: function(c) {
                    if (this.a != ww) return;
                    var fa = function() {
                        if ((ww.do.visibilityState || ww.do.webkitVisibilityState) === 'hidden') return false;
                        if ((ww.do.visibilityState || ww.do.webkitVisibilityState) === 'visible') return true;
                    };
                    if (ty.f(c)) {
                        if (!fa()) ww.do.addEventListener('focus', function() {
                            c();
                        }, false);
                        if (fa()) c();
                    }
                    return ty.u(c) || ty.f(c) ? fa() : this;
                },
                getIndex: function() {
                    if (ty.f(this.a) || this.a == null) return this;
                    for (var i = 0; i < new fn.re(this.a.tagName, b).a.length; i++)
                        if (new fn.re(this.a.tagName, b).a[i] === this.a)
                            return i;
                    return this;
                },
                html: function(c) {
                    if (ty.f(this.a)) bc('html', c);
                    if (this.a == null) return this;
                    if (ty.o(c) || ty.s(c)) {
                        var fa = function(aa) {
                            if (ty.o(c)) {
                                aa.innerHTML = '';
                                aa.appendChild(c);
                                ga(a, 'html', 'innerHTML', '');
                            }
                            if (ty.s(c)) {
                                aa.innerHTML = c;
                                ga(a, 'html', 'innerHTML', c);
                            }
                        };
                        if (ty.a(this.a))
                            this.a.forEach(function(aa) {
                                fa(aa);
                            });
                        else
                            fa(this.a);
                    }
                    if (ty.u(c))
                        return this.a.innerHTML;
                    return this;
                },
                off: function(c, d, e) {
                    if (ty.f(this.a) || this.a == null) return this;
                    if ((ty.s(c) && ty.f(d) && ty.u(e)) || (ty.s(c) && ty.s(d) && ty.f(e))) {
                        var va, vb = a,
                            vc;
                        if (ty.s(c) && ty.f(d) && ty.u(e))
                            va = d;
                        if (ty.s(c) && ty.s(d) && ty.f(e))
                            va = e;
                        if (/\[object [a-zA-Z]+\]/.test(String(a))) {
                            vc = /\[object [a-zA-Z]+\]/.test(String(a)) ? vb + gi.indexOf(a) : vb;
                            if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(vc) != null) {
                                var vd = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(vc);
                                vc = vd[1] + vd[2] + vd[3];
                            }
                            if (gi.indexOf(a) != -1) {
                                for (var i = 0; i < gh[vc][c].length; i++) {
                                    if (String(va).replace(/\s+/g, ' ') === String(gh[vc][c][i]).replace(/\s+/g, ' ')) {
                                        gh[vc][c].splice(i, 1);
                                    }
                                }
                            }
                        } else {
                            if (ty.o(gh[vb])) {
                                if (ty.a(gh[vb][c])) {
                                    for (var i = 0; i <= gh[vb][c].length; i++) {
                                        if (String(va) === String(gh[vb][c][i])) {
                                            gh[vb][c].splice(i, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return this;
                },
                on: function(c, d, e) {
                    if (ty.f(this.a)) bc('on', c, d, e);
                    if (this.a == null) return this;
                    var va = /\[object [a-zA-Z]+\]/.test(String(a)),
                        ve = [
                            ty.s(c) && (ty.f(d) && ty.u(e)),
                            ty.s(c) && ty.s(d) && ty.f(e),
                            ty.s(c) && ty.s(d) && e === null,
                            ty.s(c) && d === null
                        ],
                        vb, fa;
                    if (ve[0] || ve[1] || ve[2] || ve[3]) {
                        fa = function(ev) {
                            for (var i = 0; i < gh[vb][c].length; i++) {
                                if (ty.f(gh[vb][c][i])) {
                                    if (ty.s(gh[vb][c][i]['tagName']))
                                        if (gh[vb][c][i]['tagName'] == ev.target.tagName)
                                            gh[vb][c][i](ev);
                                    if (ty.u(gh[vb][c][i]['tagName']))
                                        gh[vb][c][i](ev);
                                }
                            }
                        };
                        if (gi.indexOf(a) === -1 && va)
                            gi.push(a);
                        vb = va ? a + gi.indexOf(a) : a;
                        if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(vb) != null) {
                            var vd = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/.exec(vb);
                            vb = vd[1] + vd[2] + vd[3];
                        }
                        if (ty.u(gh[vb]))
                            gh[vb] = {};
                        if (ty.u(gh[vb][c]))
                            gh[vb][c] = [];
                        gh[vb][c]['a'] = this.a;
                        if (ty.a(this.a)) {
                            for (var i = 0; i < this.a.length; i++)
                                if (ty.o(this.a[i]))
                                    this.a[i]['on' + c] = fa;
                        } else
                            this.a['on' + c] = fa;
                    }
                    if (ve[0] || ve[1]) {
                        var vc;
                        if (ty.s(c) && ty.f(d) && ty.u(e))
                            vc = [d];
                        if (ty.s(c) && ty.s(d) && ty.f(e))
                            vc = [e];
                        if (ty.f(this.a['on' + c]))
                            if (String(this.a['on' + c]).replace(/\s+/g, ' ') != String(fa).replace(/\s+/g, ' '))
                                vc.push(this.a['on' + c]);
                        for (var i = 0; i < gh[vb][c].length; i++)
                            for (var j = 0; j < vc.length; j++)
                                if (String(gh[vb][c][i]).replace(/\s+/g, ' ') === String(vc[j]).replace(/\s+/g, ' '))
                                    vc.splice(j, 1);
                        for (var i = 0; i < vc.length; i++) {
                            if (ty.s(d))
                                vc[i]['tagName'] = d;
                            gh[vb][c].push(vc[i]);
                        }
                    }
                    if (ve[2] || ve[3]) {
                        if (ty.o(gh[vb]))
                            gh[vb][c] = [];
                        if (ty.f(e))
                            gh[vb][c].push(e);
                    }
                    if (ty.s(c) && ty.u(d) && ty.u(e)) {
                        if (ty.o(this.a) || ty.a(this.a) || ty.s(this.a)) {
                            if (ty.f(this.a[c]))
                                this.a[c]();
                            if (ty.f(this.a['on' + c]))
                                this.a['on' + c]();
                        }
                    }
                    return this;
                },
                parent: function() {
                    if (ty.f(this.a) || this.a == null) return null;
                    if (this.a.parentNode)
                        this.a = this.a.parentNode;
                    return this;
                },
                prop: function(c, d) {
                    if (ty.f(this.a)) bc('prop', c, d);
                    if (this.a == null) return this;
                    if (ty.s(c) && !ty.u(d)) {
                        ga(a, 'prop', c, d);
                        this.a[c] = d;
                    }
                    if (ty.s(c) && ty.u(d))
                        return !ty.u(this.a[c]) ? this.a[c] : this.a;
                    return this;
                },
                remove: function(c) {
                    if (ty.f(this.a) || this.a == null) return this;
                    if (ty.s(c) || ty.o(c)) {
                        var fa = function(aa) {
                            if (ty.s(c)) {
                                ww.do.createElement('DIV').innerHTML = c;
                                ga(aa, 'remove', 'removeChild', this.a.lastChild);
                                aa.removeChild(this.a.lastChild);
                            }
                            if (ty.o(c)) {
                                ga(aa, 'remove', 'removeChild', c);
                                aa.removeChild(c);
                            }
                        };
                        if (ty.a(this.a)) {
                            for (var i = 0; i < this.a.length; i++)
                                if (ty.o(this.a[i]))
                                    fa(this.a[i]);
                        } else
                            fa(this.a);
                    }
                    return this;
                },
                removeClass: function(c) {
                    if (ty.f(this.a)) bc('removeClass', c);
                    if (this.a == null) return this;
                    if (ty.s(c) && !ty.e(this.a.className)) {
                        var va = this.a.className.split(' ');
                        for (var i = 0; i < va.length; i++)
                            if (va[i] == c)
                                va.splice(i, 1);
                        this.a.className = va.join(' ');
                        ga(a, 'removeClass', 'className', c);
                    }
                    return this;
                },
                shiftEventListener: function(c) {
                    return ty.s(c) && ty.o(gh[a][c]) ? {
                        getIndex: function(d) {
                            if (ty.f(d) || ty.s(d))
                                for (var i = 0; i < gh[a][c].length; i++)
                                    if (String(gh[a][c][i]) === String(d))
                                        return i;
                        },
                        swap: function(d, e) {
                            if (ty.f(d)) d = this.getIndex(d);
                            if (ty.f(e)) e = this.getIndex(e);
                            if (ty.n(d) && ty.n(e)) {
                                var va = gh[a][c][d];
                                gh[a][c][d] = gh[a][c][e];
                                gh[a][c][e] = va;
                            }
                        },
                        insertAfter: function(d, e) {
                            if (ty.f(e)) e = this.getIndex(e);
                            if (ty.f(d) && ty.n(e))
                                gh[a][c].splice(e + 1, 0, d);
                        },
                        remove: function(d) {
                            if (ty.n(d))
                                gh[a][c].splice(d, 1);
                            if (ty.f(d))
                                gh[a][c].splice(this.getIndex(d), 1);
                        },
                        transferTo: function(d, e) {
                            if (ty.f(d)) d = this.getIndex(d);
                            if (ty.f(e)) e = this.getIndex(e);
                            if (ty.n(d) && ty.n(e)) {
                                var va = gh[a][c][d];
                                gh[a][c].splice(d, 1);
                                gh[a][c].splice(e, 1, va);
                            }
                        }
                    } : gh[a];
                },
                submit: function(c) {
                    if (ty.f(this.a)) bc('submit', c);
                    if (this.a == null) return this;
                    if (ty.u(gc.fn.smb)) gc.fn.smb = {};
                    if (ty.s(c)) {
                        var fa = function(aa) {
                            for (var i = 0; i < aa.length; i++) {
                                var va = aa[i],
                                    fb = function(r, l) {
                                        if (ty.e(va.value) || va.value.length < l || !r.test(String(va.value)))
                                            return false;
                                    },
                                    fc = function() {
                                        va.focus();
                                        gc(va).css('background', 'rgb(255,225,225)').animate({
                                            colorRotate: [255, 255, 255]
                                        }, 20);
                                    };
                                switch (va.getAttribute('name')) {
                                    case 'text':
                                        if (fb(/^[\w.@+ -]{4,50}$/, 1) === false) {
                                            fc();
                                            return false;
                                        }
                                        break;
                                    case 'login':
                                        if (fb(/^[\w.@+ -]{4,50}$/, 4) === false) {
                                            fc();
                                            return false;
                                        }
                                        break;
                                    case 'password':
                                        if (fb(/^[\w ]{4,50}$/, 4) === false) {
                                            fc();
                                            return false;
                                        }
                                        break;
                                    case 'email':
                                        if (fb(/^[\w.@ _-]{4,50}$/, 5) === false) {
                                            fc();
                                            return false;
                                        }
                                        break;
                                    case 'mobile':
                                        if (fb(/^[\w+ -]{4,50}$/, 3) === false) {
                                            fc();
                                            return false;
                                        }
                                        break;
                                    default:
                                        '';
                                }
                            }
                            return true;
                        };
                        this.a.onsubmit = function() {
                            return false;
                        };
                        if (fa(this.a) === true) {
                            this.a.setAttribute('action', location.protocol + '\u002F\u002F' + (location.host || location.hostname) + '\u002F' + c + '?patch=' + location.pathname + '&nins=' + navi);
                            this.a.submit();
                            return true;
                        } else return false;
                    }
                    if (ty.f(c))
                        gc.fn.smb[a] = c;
                    return this;
                },
                val: function(c) {
                    if (ty.f(this.a)) bc('val', c);
                    if (this.a == null) return this;
                    if (ty.s(c) || ty.n(c))
                        if (ty.a(this.a)) {
                            for (var i = 0; i < this.a.length; i++) {
                                if (ty.o(this.a[i])) {
                                    this.a[i].value = c;
                                    ga(this.a[i], 'val', 'value', c);
                                }
                            }
                        } else {
                            this.a.value = c;
                            ga(a, 'val', 'value', c);
                        }
                    if (ty.u(c))
                        return this.a.value || '';
                    return this;
                }
            },
            bb = function(c, d, e, f, g, h) {
                if (ty.u(gg[d])) gg[d] = {};
                if (ty.u(gg[d][c])) gg[d][c] = [];
                if (ty.a(gg[d][c])) gg[d][c].push([e, f, g, h]);
            },
            bc = function(g) {
                return function(c, d, e, f) {
                    bb(g, a, c, d, e, f);
                }
            },
            bd = ['addClass', 'attr', 'css', 'html', 'on', 'prop', 'removeClass', 'submit', 'val'];
        fn.re.prototype = ty.f(ww.Proxy) ? new Proxy(ba, {
            get: function(t, k) {
                var va = new fn.re(a, b).a;
                if (ty.f(va) && bd.indexOf(k) == -1) return null;
                if (ty.f(va) && bd.indexOf(k) != -1) return function tg(c, d, e, f) {
                    bc(k)(c, d, e, f);
                    return this
                };
                if (ty.o(va) || ty.a(va)) return t[k];
            }
        }) : ba;
        for (var i in ge)
            if (ty.u(ba[i])) fn.re.prototype[i] = function(c, d, e, f, g) {
                var va = this.a,
                    vb = this.length,
                    vc = function tg() {
                        this.a = va;
                        this.length = vb;
                        this.selector = a;
                        this.fn = ge[i];
                    },
                    fa = function tg() {
                        this.a = va;
                        this.length = vb;
                        this.selector = a;
                    };
                vc.prototype = {
                    ty: ty,
                    gb: gb,
                    gd: gd,
                    gf: gf,
                    gh: gh,
                    gj: gj,
                    ga: ga,
                    gc: gc,
                    ge: ge,
                    gg: gg,
                    gi: gi,
                    gk: gk
                };
                fa.prototype = ba;
                new vc().fn();
                return new fa();
            };
        return a === null || ty.e(a) || ty.n(a) || ty.b(a) || ty.u(a) ? a : new fn.re(a, b);
    });
    return (Object.setPrototypeOf || function(a, b) {
        for (var i in b) gb(a, i, b[i]);
        a.__proto__ = b;
        return a;
    })(gc, {
        ajax: function(c, d) {
            if (ty.o(c)) {
                var va = this.getXmlHttp(),
                    a_2 = ty.f(c[2]) ? c[2] : undefined,
                    a_3 = ty.f(c[3]) ? c[3] : undefined,
                    a_4 = ty.f(c[4]) ? c[4] : undefined;
                va.open(c.type, c.url, true);
                if (ty.o(c.headers))
                    for (var i in c.headers)
                        va.setRequestHeader(i, c.headers[i]);
                va.send(c.type === 'POST' ? d ? d : c.url.split('?')[1] : null);
                if ((ty.f(a_2) || ty.f(a_3) || ty.f(a_4)) && ty.u(c.callback))
                    va.onreadystatechange = function(data) {
                        if (data.target.readyState === 2 && data.target.status === 200 && a_2) a_2(va);
                        if (data.target.readyState === 3 && data.target.status === 200 && a_3) a_3(va);
                        if (data.target.readyState === 4 && data.target.status === 200 && a_4) a_4(va);
                    };
                if (ty.u(a_2) && ty.u(a_3) && ty.u(a_4) && ty.o(c.callback))
                    for (var i in c.callback)
                        va[i] = c.callback[i];
                return va;
            }
        },
        bind: function(c) {
            return Function.prototype.bind = function(c) {
                var va = this;
                return function() {
                    return va.apply(c, arguments);
                };
            };
        },
        databaseCreate: function(c, d) {
            if (!ty.s(c) || !ty.o(d)) {
                gc.fn.error(gc.fn.msg.ab);
                return;
            }
            if (ty.u(ww.databaseinfo))
                ww.databaseinfo = {};
            if (ty.u(ww.databaseinfo[c]))
                ww.databaseinfo[c] = {};
            else
                gc.fn.error(gc.fn.msg.af);
            for (var i in d)
                ww.databaseinfo[c][i] = d[i];
            if (ty.u(ww.databasedata))
                ww.databasedata = {};
            if (ty.u(ww.databasedata[c]))
                ww.databasedata[c] = [];
        },
        databaseInsert: function(c, d) {
            for (var i in d) {
                if (ww.databaseinfo[c][i] != typeof d[i]) {
                    gc.fn.error(gc.fn.msg.ag);
                    return;
                }
            }
            ww.databasedata[c].push(d);
        },
        databaseSelect: function(c, d) {
            if (d.split('=')[0] === 'id') {
                if (ty.o(ww.databasedata[c][d.split('=')[1]]))
                    return ww.databasedata[c][d.split('=')[1]];
            } else
                for (var i = 0; i < ww.databasedata[c].length; i++)
                    if (ww.databasedata[c][i][d.split('=')[0]] === d.split('=')[1])
                        return ww.databasedata[c][i];
            return null;
        },
        databaseUpdate: function(c, d, e) {
            var fa = function(i, d) {
                for (var j in d)
                    ww.databasedata[c][i][j] = d[j];
            };
            _: for (var i = 0; i < ww.databasedata[c].length; i++) {
                for (var j in ww.databasedata[c][i]) {
                    for (var k in ww.databasedata[c][i]) {
                        if (ww.databaseinfo[c][k] === typeof d[k]) {
                            if (e) {
                                if (ww.databasedata[c][i][e.split('=')[0]] === e.split('=')[1]) {
                                    fa(i, d);
                                    break _;
                                }
                            } else
                                ww.databasedata[c][i][k] = d[k];
                        } else {
                            gc.fn.error(gc.fn.msg.ae);
                            return;
                        }
                    }
                }
            }
        },
        getXmlHttp: function() {
            try {
                return new XMLHttpRequest();
            } catch (e) {};
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {};
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {};
            return null;
        },
        hotkey: function(c, d, e) {
            if (c != 'keydown' && c != 'keyup')
                return c + ' not supported';
            if (ty.u(gf[d]))
                gf[d] = [];
            gf[d].push(e);
            new fn.re(ww).on(c, function(ev) {
                if (gj.indexOf(ev.keyCode) === -1)
                    gj.push(ev.keyCode);
                if (ty.a(gf[gj.join('+')])) {
                    for (var i = 0; i < gf[gj.join('+')].length; i++)
                        gf[gj.join('+')][i]();
                    gj = [];
                    ev.preventDefault();
                }
            });
            if (c === 'keydown') new fn.re(ww).on('keyup', function(ev) {
                gj = [];
            });
            if (c === 'keyup') new fn.re(ww).on('keypress', function(ev) {
                gj.splice(gj.indexOf(ev), 1);
            });
        },
        imports: function(c) {
            for (var i in c)
                if (ty.s(i) && ty.f(c[i]))
                    ge[i] = c[i];
            return c;
        },
        toJSON: function(c) {
            if (ww.JSON && JSON.parse) {
                var va = c;
                va = va.replace(/\\["\\\/bfnrtu]/g, '@');
                va = va.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
                va = va.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
                return /^{['"][\w]{0,}['"]:['"]/.test(c) ? JSON.parse(c) : /^[\],:{}\s]*$/.test(va);
            } else
                return eval('(' + c + ')');
        },
        navi: function() {
            var va = navigator.userAgent.toLowerCase(),
                vb = {
                    version: (va.match(/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [0, '0'])[1],
                    opera: (/opera/i.test(va) || /opr/i.test(va)),
                    vivaldi: /vivaldi/i.test(va),
                    msie: (/msie/i.test(va) && !/opera/i.test(va) || /trident\//i.test(va)) || /edge/i.test(va),
                    msie6: (/msie 6/i.test(va) && !/opera/i.test(va)),
                    msie7: (/msie 7/i.test(va) && !/opera/i.test(va)),
                    msie8: (/msie 8/i.test(va) && !/opera/i.test(va)),
                    msie9: (/msie 9/i.test(va) && !/opera/i.test(va)),
                    msie_edge: (/edge/i.test(va) && !/opera/i.test(va)),
                    mozilla: /firefox/i.test(va),
                    chrome: /chrome/i.test(va) && !/edge/i.test(va),
                    safari: (!(/chrome/i.test(va)) && /webkit|safari|khtml/i.test(va)),
                    iphone: /iphone/i.test(va),
                    ipod: /ipod/i.test(va),
                    iphone4: /iphone.*OS 4/i.test(va),
                    ipod4: /ipod.*OS 4/i.test(va),
                    ipad: /ipad/i.test(va),
                    android: /android/i.test(va),
                    bada: /bada/i.test(va),
                    mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(va),
                    msie_mobile: /iemobile/i.test(va),
                    safari_mobile: /iphone|ipod|ipad/i.test(va),
                    opera_mobile: /opera mini|opera mobi/i.test(va),
                    opera_mini: /opera mini/i.test(va),
                    mac: /mac/i.test(va),
                    search_bot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(va)
                };
            return vb;
        },
        notifi: function(c) {
            if (!('Notification' in ww))
                gc.fn.error(gc.fn.msg.ah);
            else
            if (Notification.permission === 'granted' && !ty.u(c) && !ty.e(c))
                new Notification(c);
            else
            if (Notification.permission != 'denied')
                Notification.requestPermission(function(permission) {});
        },
        on: function(c, d) {
            var va = new CustomEvent(c, {});
            ww.addEventListener(c, d, false);
            if (ty.u(ww.events))
                ww.events = {};
            ww.events[c] = va;
            return va;
        },
        parserUrl: function(c) {
            var va = ww.do.createElement('a');
            va.href = c || location.href;
            va.directory = va.pathname.split('/');
            for (var i = 0; i < va.directory.length; i++)
                if (ty.u(va.directory[i]) || ty.e(va.directory[i]))
                    va.directory.splice(i, 1);
            if (va.pathname[va.pathname.length - 1] != '/') {
                va.file = va.directory[va.directory.length - 1] || '';
                va.directory.splice(va.directory.length - 1);
            }
            va.parameter = va.search.split('&');
            va.parameter[0] = va.parameter[0].slice(1);
            va.parameterns = va.search.split('&');
            va.parameterns.splice(0, 1);
            va.parameterst = va.parameter.join('&') || '';
            va.parameternsst = va.parameterns.join('&');
            va.path = [va.pathname, va.parameterst].join('?');
            va.strdir = va.directory.join('/');
            va.query = {};
            va.file = va.file || '';
            va.path = va.parameterst && !ty.e(va.parameterst) ? [va.pathname, va.parameterst].join('?') : va.pathname;
            va.urlnodom = va.strdir + va.file + va.parameterst + va.hash;
            if (ty.e(va.directory[0]) || ty.u(va.directory[0])) va.directory = '';
            if (ty.e(va.parameter[0]) || ty.u(va.parameter[0])) va.parameter = '';
            if (ty.e(va.parameterns[0]) || ty.u(va.parameterns[0])) {
                va.parameterns = '';
            }
            for (var i = 0; i < va.parameter.length; i++)
                va.query[va.parameter[i].split('=')[0]] = va.parameter[i].split('=')[1];
            va.mod = (function() {
                for (var i = va.parameter.length; i > 0; i--)
                    if (ty.f(modales[String(va.parameter.slice(i - 1, va.parameter.length)).split('=')[0]]))
                        return [modales[String(va.parameter.slice(i - 1, va.parameter.length)).split('=')[0]], va.parameter.slice(i - 1, i).join('&'), va.parameter[i - 1]];
            })() || '';
            return va;
        },
        require: function(c) {
            var va = [
                [/^(.+)\.[js](.*)$/im, /^(.+)\.[css](.*)$/im],
                [gc('script'), gc('link')],
                ['src', 'href'],
                gc('head').a
            ];
            if (ty.a(c)) {
                for (var i = 0; i < c.length; i++)
                    for (var j = 0; j < c.length; j++)
                        if (i != j && c[i] === c[j])
                            c.splice(j, 1);
                _: for (var i = 0; i < c.length; i++) {
                    for (var j = 0; j < va[0].length; j++) {
                        if (ty.a(c[i].match(va[0][j]))) {
                            for (var k = 0; k < va[1][j].a.length; k++)
                                if (va[1][j].a[k].getAttribute(va[2][j]) === c[i])
                                    break _;
                            ([
                                function(c) {
                                    va[3].appendChild(va[1][j].createElement({
                                        type: 'text/javascript',
                                        src: c
                                    }));
                                },
                                function(c) {
                                    va[3].appendChild(va[1][j].createElement({
                                        rel: 'stylesheet',
                                        type: 'text/css',
                                        href: c
                                    }));
                                }
                            ])[j](c[i]);
                            return true;
                        }
                    }
                }
                return false;
            }
        },
        templater: function(c, d) {
            var va = c.match(/{{var.(.*?)}}/g);
            if (ty.a(va)) {
                va.forEach(function(aa) {
                    aa = aa.replace("{{var.", "");
                    aa = aa.replace("}}", "");
                    if (ty.u(d[aa]))
                        c = c.replace("{{var." + aa + "}}", "null");
                    else
                        c = c.replace("{{var." + aa + "}}", d[aa]);
                });
                return c;
            }
        },
        trigger: function(c) {
            if (ty.o(c))
                ww.dispatchEvent(c);
            if (ty.s(c))
                ww.dispatchEvent(gc.fn.events[c]);
        }
    });
});
