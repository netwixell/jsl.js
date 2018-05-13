/*
* JavaScript Library v1.2.180513:122936
* https://github.com/netwixell/jsl.js
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://raw.githubusercontent.com/netwixell/jsl.js/master/LICENSE
*/
'use strict';
!function (c, d) {
    var e = {
            'error': function (g) {
                throw new Error(g);
            },
            'log': function () {
                console['log'](arguments);
            },
            'msg': {
                'ab': 'bad\x20request',
                'ac': 'jsl\x20is\x20experiencing\x20a\x20conflict',
                'ad': 'requires\x20a\x20window\x20with\x20the\x20document',
                'ae': 'type\x20mismatch',
                'af': 'this\x20database\x20has\x20been\x20created',
                'ag': 'bad\x20type\x20data',
                'ah': 'this\x20browser\x20does\x20not\x20support\x20desktop\x20notification',
                'ai': 'reserved',
                'ak': 'this\x20item\x20is\x20not\x20available'
            },
            'name': 'JSL\x20(JavaScript\x20Library)',
            'nn': '%uE96A%uE973%uE96C',
            'url': 'https://github.com/netwixell/jsl.js'
        }, f = typeof module === 'object' && typeof module['exports'] === 'object' ? module['exports'] = c['document'] ? d(c, d) : function (h) {
            if (!h['document'])
                e['error'](e['msg']['ad']);
            return d(h, d);
        } : d(c, d);
    c[f['charOf'](e['nn'])] === void 0x0 ? (f['fn'] = e, c['do'] = document, c[f['charOf'](e['nn'])] = f, c['do']['addEventListener']('DOMContentLoaded', function () {
        f['fn']['DOMCL'] = !0x0;
    }, !0x1)) : e['error'](e['msg']['ac']);
    console['info']('%c\x20%s\x20%s\x20%s', 'background:#4A4;color:#fff;', e['name'], e['version'], e['url']);
}(typeof window != 'undefined' ? window : this, function (i, j) {
    var k = {
            'a': function (w) {
                if (w != null && typeof w === 'object')
                    if (w['length'] >= 0x0)
                        return !0x0;
                return Array['isArray'](w);
            },
            'b': function (x) {
                return typeof x === 'boolean';
            },
            'e': function (y) {
                return y === '';
            },
            'f': function (z) {
                return typeof z === 'function';
            },
            'n': function (A) {
                return typeof A === 'number';
            },
            'o': function (B) {
                return !Array['isArray'](B) ? typeof B === 'object' : !0x1;
            },
            's': function (C) {
                return typeof C === 'string';
            },
            'sy': function (D) {
                return typeof D === 'symbol';
            },
            'u': function (E) {
                return E === void 0x0;
            },
            'N': function (F) {
                return isNaN(F);
            }
        }, l = function (G, H, I, J) {
            if (k['u'](n['change']))
                n['change'] = {};
            if (k['u'](n['change'][G]))
                n['change'][G] = {};
            if (k['u'](n['change'][G][H]))
                n['change'][G][H] = {};
            n['change'][G][H][I] = J;
        }, m = function (K, L, M, N) {
            Object['defineProperty'](K, L, {
                'value': M,
                'writable': !0x1,
                'enumerable': !0x1,
                'configurable': N || !0x1
            });
        }, n = function (O, P) {
            return j['re']['dom'](O, P);
        }, o = {}, p = {}, q = {}, r = {}, s = {}, t = {}, u = [], v = [];
    return m(j, 're', function (Q, R) {
        if (k['a'](Q)) {
            this['a'] = Q;
            this['selector'] = 'Array';
            this['length'] = Q['length'];
        }
        if (k['f'](Q)) {
            if (k['a'](R)) {
                for (var S of R) {
                    if (u['indexOf'](i) === -0x1)
                        u['push'](i);
                    var T = /\[object [a-zA-Z]+\]/['test'](String(i)) ? i + u['indexOf'](i) : i, U = S, V = function (W) {
                            for (var X of s[T][U]) {
                                if (k['f'](X)) {
                                    if (k['s'](X['tagName']))
                                        if (X['tagName'] === W['target']['tagName'])
                                            X(W);
                                    if (k['u'](X['tagName']))
                                        X(W);
                                }
                            }
                        };
                    if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](T) != null) {
                        var Y = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](T);
                        T = Y[0x1] + Y[0x2] + Y[0x3];
                    }
                    s[T] = s[T] || {};
                    s[T][U] = s[T][U] || [];
                    s[T][U]['push'](function (Z) {
                        t['creator'] = n['fn']['name'];
                        t['fn'] = Q;
                        t['fn'](Z);
                    });
                    i['addEventListener'](U, V, R || !0x1);
                }
            } else {
                t['creator'] = n['fn']['name'];
                t['fn'] = Q;
                t['fn']();
            }
            return Q;
        }
        if (k['o'](Q)) {
            var T = String(Q)['match'](/\[object HTML([a-zA-Z]+)/), U = String(Q)['match'](/\[object ([A-Z][a-z]+)/);
            this['a'] = Q;
            this['length'] = 0x1;
            if (Q === i)
                return this['selector'] = 'window';
            if (Q === i['do'])
                return this['selector'] = 'document';
            if (k['a'](T))
                return this['selector'] = T[0x1]['toLowerCase']();
            if (k['s'](Q['href']))
                return this['selector'] = 'a';
            if (k['a'](Q))
                for (var S of Q)
                    if (k['o'](S))
                        return this['selector'] = Q;
            if (k['a'](U))
                if (U[0x1] === 'Object')
                    return Q;
            if (T === null && U === null)
                return Q;
        }
        if (k['s'](Q)) {
            var V = function (a5) {
                    var a6 = function (a8) {
                            var a9 = function (aa) {
                                var T = [
                                    /^(.+)\[(\d+)-(\d+)\]$/im,
                                    /^(.+)\((\d+),(\d+)\)$/im,
                                    /^(.+)\[(\d+)-\]$/im,
                                    /^(.+)\[(\d+)\]$/im,
                                    /^(.+)!(\d+)$/im,
                                    /^(.+):(\d+)$/im
                                ];
                                for (var [S, ad] of Object['entries'](T)) {
                                    var U = aa['match'](ad);
                                    if (k['a'](U)) {
                                        U = U['map'](function (af) {
                                            var T = +af;
                                            return k['N'](T) ? af : T;
                                        });
                                        return [
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x0,
                                                a8 = U[0x1]
                                            ],
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x1,
                                                a8 = U[0x1]
                                            ],
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x2,
                                                a8 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x4,
                                                a8 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x3,
                                                a8 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x4,
                                                a8 = U[0x1]
                                            ]
                                        ][S];
                                    }
                                }
                                return !0x1;
                            }(a8);
                            try {
                                var T = i['do']['querySelectorAll'](a8);
                            } catch (ai) {
                                return null;
                            }
                            if (k['a'](a9))
                                switch (a9[0x1]) {
                                case 0x0: {
                                        var U = [];
                                        if (a9[0x0][0x0] >= 0x0 && a9[0x0][0x1] >= 0x0 && a9[0x0][0x0] <= a9[0x0][0x1])
                                            for (var S = a9[0x0][0x0]; S <= a9[0x0][0x1]; S++)
                                                if (k['o'](T[S]))
                                                    U['push'](T[S]);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x1: {
                                        var U = [];
                                        if (a9[0x0][0x0] >= 0x0 && a9[0x0][0x1] >= 0x0)
                                            for (var S = a9[0x0][0x0], an = 0x0; an < a9[0x0][0x1]; S++, an++)
                                                if (k['o'](T[S]))
                                                    U['push'](T[S]);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x2: {
                                        var U = [];
                                        if (a9[0x0][0x0] >= 0x0 && !a9[0x0][0x1])
                                            for (var S = a9[0x0][0x0]; S <= T['length']; S++)
                                                if (k['o'](T[S]))
                                                    U['push'](T[S]);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x3: {
                                        var U = [];
                                        for (var S of T)
                                            if (k['o'](S))
                                                U['push'](S);
                                        U['splice'](a9[0x0], 0x1);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x4:
                                    T = T[a9[0x0]];
                                    break;
                                }
                            return T;
                        }, T = a5['split'](/(?!\([^)]*),(?![^(]*\))/);
                    if (T['length'] > 0x1) {
                        var U = [];
                        for (var S of T) {
                            var Y = a6(S);
                            if (k['a'](Y))
                                for (var av of Y)
                                    U['push'](av);
                            else
                                U['push'](Y);
                        }
                        return U;
                    }
                    return a6(a5);
                }, T = V(Q);
            T === null || T['length'] === 0x0 ? n['fn']['DOMCL'] === !0x0 ? (this['a'] = null, this['length'] = 0x0) : (i['do']['addEventListener']('DOMContentLoaded', this['a'] = function () {
                var T = V(Q)['length'] === 0x0 ? null : V(Q);
                for (var S in r)
                    for (var ay in r[S])
                        for (var az of r[S][ay])
                            n(S)[ay](az[0x0], az[0x1], az[0x2], az[0x3]);
                return T === null ? T : T['length'] === 0x1 && k['o'](T[0x0]) ? T[0x0] : T;
            }, R && !0x0), this['length'] = void 0x0) : (this['length'] = k['u'](T['length']) && k['o'](T) && T != null ? 0x1 : T['length'], this['a'] = k['a'](T) || k['o'](T) ? this['length'] === 0x1 && k['o'](T[0x0]) ? T[0x0] : this['a'] = T : null);
            this['selector'] = Q;
        }
    }), m(j['re'], 'dom', function (aA, aB) {
        var aC = {
                'addClass': function (aE) {
                    if (k['f'](this['a']))
                        aD('addClass', aE);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (!k['e'](this['a']['className']))
                        for (var aF of this['a']['className']['split']('\x20'))
                            if (aF === aE)
                                return this;
                    l(aA, 'addClass', 'className', aE);
                    this['a']['className'] = k['e'](this['a']['className']) || k['u'](this['a']['className']) ? aE : this['a']['className'] + '\x20' + aE;
                    return this;
                },
                'animate': function (aG, aH, aI) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var aJ = this;
                    if (k['o'](aG)) {
                        var aK = {
                            'colorRotate': function (aL) {
                                var aM = (aJ['a']['style']['backgroundColor'] || 'rgb(255,255,255)')['match'](/[rgb|rgba]+\((\d+), ?(\d+), ?(\d+)\)*/), aN = [
                                        Number(aM[0x1]),
                                        Number(aM[0x2]),
                                        Number(aM[0x3])
                                    ], aO = function () {
                                        setTimeout(function () {
                                            for (var [aP, aQ] of Object['entries'](aL)) {
                                                if (aQ < aN[aP])
                                                    aN[aP] = --aN[aP];
                                                if (aQ > aN[aP])
                                                    aN[aP] = ++aN[aP];
                                            }
                                            new j['re'](aJ['a'], aB)['css']('background', 'rgb(' + aN['join'](',') + ')');
                                            if (aL['join']('') != aN['join'](''))
                                                aO();
                                        }, aH);
                                    };
                                aO();
                            },
                            'opacity': function (aR) {
                                var aS = aJ['a']['opacity'] = aJ['a']['style']['opacity'] = new j['re'](aA, aB)['css']('opacity') || 0x1, aT = function () {
                                        setTimeout(function () {
                                            aS = aJ['a']['opacity'] = aJ['a']['style']['opacity'] = (aS > aR ? Number(aS) - aI : Number(aS) + aI)['toFixed'](0x2);
                                            l(aA, 'animate', 'opacity', aS);
                                            if (aS != aR)
                                                aT();
                                        }, aU);
                                    };
                                aI = aI || 0.05;
                                aI = aI < 0.01 ? 0.01 : aI;
                                var aU = aS > aR ? aH / ((aS - aR) / aI) : aH / ((aR - aS) / aI);
                                if (aS != aR)
                                    aT();
                            },
                            'scrollTop': function (aV) {
                                var aW = aJ['animate']('scrollTop'), aX = aJ['animate']('scrollLeft'), aY = function () {
                                        setTimeout(function () {
                                            scrollTo(aX, aW < aV ? aV - 0x8 + aZ : aV + 0x8 - aZ);
                                            if (aZ != 0x8)
                                                aY();
                                            aZ++;
                                        }, aH);
                                    }, aZ = 0x0;
                                if (Math['abs'](aW - aV) > 0xa && Math['abs'](aV - aW) > 0xa) {
                                    scrollTo(aX, aW < aV ? aV - 0x8 : aV + 0x8);
                                    if (aW != aV)
                                        aY();
                                } else
                                    scrollTo(aX, aV);
                            },
                            'scrollElem': function (b0) {
                                var b1, b2, b3 = 0x0, b4 = new j['re'](aA, aB)['getCoordinates'](), b5 = function () {
                                        setTimeout(function () {
                                            if (b3 < b0[0x1]) {
                                                if (b0[0x0] === 0x0 || b0[0x0] === 0x1)
                                                    b2 = b2 - 0x1;
                                                if (b0[0x0] === 0x2 || b0[0x0] === 0x3)
                                                    b2 = b2 + 0x1;
                                                if (b0[0x0] === 0x0 || b0[0x0] === 0x2) {
                                                    b1 = { 'top': b2 + 'px' };
                                                }
                                                if (b0[0x0] === 0x1 || b0[0x0] === 0x3) {
                                                    b1 = { 'left': b2 + 'px' };
                                                }
                                                new j['re'](aA, aB)['css'](b1);
                                                b3++;
                                                b5();
                                            }
                                        }, aH / b0[0x1]);
                                    };
                                if (b0[0x0] === 0x0 || b0[0x0] === 0x2)
                                    b2 = b4['top'];
                                if (b0[0x0] === 0x1 || b0[0x0] === 0x3)
                                    b2 = b4['left'];
                                b5();
                            }
                        };
                        for (var b6 in aG)
                            if (k['f'](aK[b6]))
                                aK[b6](aG[b6]);
                    }
                    if (k['s'](aG)) {
                        if (aG === 'scrollTop' && k['u'](aH) && k['u'](aI))
                            return this['a'] === i || aA === 'body' ? i['pageYOffset'] ? i['pageYOffset'] : i['do']['documentElement']['scrollTop'] ? i['do']['documentElement']['scrollTop'] : i['do']['body']['scrollTop'] : this['a']['scrollTop'];
                        if (aG === 'scrollLeft' && k['u'](aH) && k['u'](aI))
                            return this['a'] === i || aA === 'body' ? i['pageXOffset'] ? i['pageXOffset'] : i['do']['documentElement']['scrollLeft'] ? i['do']['documentElement']['scrollLeft'] : i['do']['body']['scrollLeft'] : this['a']['scrollLeft'];
                        if (aG === 'scrollTop' && k['n'](aH) && k['u'](aI))
                            i['scrollTo'](aJ['animate']('scrollLeft'), aH);
                        if (aG === 'scrollLeft' && k['n'](aH) && k['u'](aI))
                            i['scrollTo'](aH, aJ['animate']('scrollTop'));
                        if (aG === 'scrollTo' && k['n'](aH) && k['n'](aI))
                            i['scrollTo'](aH, aI);
                    }
                    return this;
                },
                'append': function (b7, b8) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](b7) || k['o'](b7) || k['a'](b7)) {
                        var b9 = function (ba) {
                            var bb;
                            if (k['s'](b7)) {
                                bb = k['u'](b8) ? i['do']['createElement']('DIV') : i['do']['createElement'](b8);
                                bb['innerHTML'] = b7;
                                if (k['u'](b8)) {
                                    if (bb['children']['length'] > 0x1)
                                        for (var bc of bb['children'])
                                            ba['appendChild'](bc);
                                    if (bb['children']['length'] === 0x1)
                                        if (k['u'](b8))
                                            ba['appendChild'](bb['children'][0x0]);
                                }
                                if (k['s'](b8))
                                    ba['appendChild'](bb);
                            }
                            if (k['a'](b7)) {
                                for (var bc of b7) {
                                    if (k['s'](bc)) {
                                        i['do']['createElement']('DIV')['innerHTML'] = bc;
                                        l(ba, 'append', 'appendChild', bb);
                                        ba['appendChild'](bb);
                                    }
                                    if (k['o'](bc)) {
                                        l(ba, 'append', 'appendChild', bc);
                                        ba['appendChild'](bc);
                                    }
                                }
                            }
                            if (k['o'](b7)) {
                                l(ba, 'append', 'appendChild', b7);
                                ba['appendChild'](b7);
                            }
                        };
                        if (k['a'](this['a'])) {
                            for (var be = 0x0; be < this['a']['length']; be++)
                                if (k['o'](this['a'][be]))
                                    b9(this['a'][be]);
                        } else
                            b9(this['a']);
                    }
                    return this;
                },
                'attr': function (bf, bg) {
                    if (k['f'](this['a']))
                        aD('attr', bf, bg);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var bh = function (bi, bj, bk) {
                        if (k['s'](bj)) {
                            if (k['a'](bk))
                                for (var bl of bk)
                                    if (k['f'](bl['setAttribute']))
                                        bl['setAttribute'](bi, bj);
                            if (!k['a'](bk) && k['o'](bk))
                                bk['setAttribute'](bi, bj);
                        }
                    };
                    if (k['s'](bf) && k['s'](bg)) {
                        bh(bf, bg, this['a']);
                        l(aA, 'attr', bf, bg);
                    }
                    if (k['o'](bf) && k['u'](bg)) {
                        for (var bm in bf) {
                            bh(bm, bf[bm], this['a']);
                            l(aA, 'attr', bm, bf[bm]);
                        }
                    }
                    if (k['s'](bf) && k['u'](bg)) {
                        if (k['a'](this['a'])) {
                            var bn = [];
                            for (var bm = 0x0; bm < this['a']['length']; bm++)
                                if (k['o'](this['a'][bm]))
                                    bn[bm] = this['a'][bm]['getAttribute'](bf);
                            return bn;
                        }
                        if (k['o'](this['a']))
                            return this['a']['getAttribute'](bf);
                    }
                    return this;
                },
                'blur': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    this['a']['blur']();
                    return this;
                },
                'children': function (bp) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](bp)) {
                        if (k['f'](this['a']['querySelector'])) {
                            var bq = [], br = i['do']['createElement']('DIV'), bs = this['a']['children'];
                            for (var bt of bs) {
                                br['appendChild'](bt['cloneNode'](!0x1));
                                if (br['querySelector'](bp) != null)
                                    bq['push'](bt);
                                br['innerHTML'] = '';
                            }
                            this['a'] = bq;
                        }
                        this['selector'] = aA + '\x20' + bp;
                    }
                    if (k['n'](bp)) {
                        this['a'] = this['a']['children'][bp];
                        this['selector'] = aA + '\x20[' + bp + ']';
                    }
                    if (k['u'](bp)) {
                        if (this['a']['children'])
                            this['a'] = this['a']['children'];
                        this['selector'] = '' + this['a'];
                    }
                    if (k['u'](this['a'])) {
                        this['a'] = null;
                        this['length'] = 0x0;
                    }
                    if (this['a'] === null)
                        this['length'] = 0x0;
                    if (!k['u'](this['a']) && k['a'](this['a']) && this['a'] != null)
                        this['length'] = this['a']['length'];
                    return this;
                },
                'childrenAll': function (bu) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](bu)) {
                        if (k['f'](this['a']['querySelectorAll'])) {
                            var bv = this['a']['querySelectorAll'](bu), bw = [];
                            for (var bx of bv)
                                bw['push'](bx);
                        }
                        this['selector'] = aA + '\x20' + bu;
                    }
                    if (k['n'](bu)) {
                        var bv = this['a']['querySelectorAll']('*'), bw = bv[bu];
                        this['selector'] = aA + '\x20[' + bu + ']';
                    }
                    if (k['u'](bu)) {
                        var bv = this['a']['querySelectorAll']('*'), bw = [];
                        for (var bx of bv)
                            bw['push'](bx);
                        this['selector'] = '' + this['a'];
                    }
                    this['a'] = bw;
                    if (k['u'](this['a'])) {
                        this['a'] = null;
                        this['length'] = 0x0;
                    }
                    if (this['a'] == null)
                        this['length'] = 0x0;
                    if (!k['u'](this['a']) && k['a'](this['a']) && this['a'] != null)
                        this['length'] = this['a']['length'];
                    return this;
                },
                'createElement': function (bD) {
                    var bE = i['do']['createElement'](aA);
                    if (k['o'](bD))
                        for (var bF in bD)
                            if (k['s'](bD[bF]))
                                bE['setAttribute'](bF, bD[bF]);
                    return bE;
                },
                'css': function (bG, bH) {
                    if (k['f'](this['a']))
                        aD('css', bG, bH);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if ((k['s'](bG) || k['o'](bG)) && (k['s'](bH) || k['u'](bH))) {
                        if ((k['o'](this['a']) || k['a'](this['a'])) && this['a'] != null) {
                            var bI = function (bJ) {
                                if (k['s'](bG) && k['s'](bH)) {
                                    bJ['style'][bG] = bH;
                                    l(aA, 'css', bG, bH);
                                }
                                if (k['o'](bG) && k['u'](bH)) {
                                    for (var bK in bG) {
                                        bJ['style'][bK] = bG[bK];
                                        l(aA, 'css', bK, bG[bK]);
                                    }
                                }
                            };
                            if (k['a'](this['a']))
                                for (var bL = 0x0; bL < this['a']['length']; bL++)
                                    if (k['o'](this['a'][bL]))
                                        bI(this['a'][bL]);
                            if (k['o'](this['a']))
                                bI(this['a']);
                        }
                        if (k['s'](bG) && k['u'](bH)) {
                            var bI = function (bQ) {
                                    if (k['o'](bQ['style']))
                                        if (!k['u'](bQ['style'][bG]) && !k['e'](bQ['style'][bG]) && bQ['style'][bG] != 'auto')
                                            return bQ['style'][bG];
                                    if (!k['u'](bQ[bG]) && !k['e'](bQ[bG]) && bQ[bG] != 'auto')
                                        return bQ[bG];
                                    return !0x1;
                                }, bN, bO, bP = getComputedStyle(this['a'], null);
                            if (bG === 'outerHeight' || bG === 'outerWidth') {
                                bN = [
                                    parseInt(bP['margin-top']),
                                    parseInt(bP['margin-right']),
                                    parseInt(bP['margin-bottom']),
                                    parseInt(bP['margin-left'])
                                ];
                                if (bG === 'outerHeight') {
                                    bO = 0x1;
                                    bG = 'offsetHeight';
                                }
                                if (bG === 'outerWidth') {
                                    bO = 0x2;
                                    bG = 'offsetWidth';
                                }
                            }
                            if (bI(this['a']) != !0x1) {
                                if (bO === 0x1)
                                    return bI(this['a']) + bN[0x0] + bN[0x2];
                                if (bO === 0x2)
                                    return bI(this['a']) + bN[0x1] + bN[0x3];
                                return bI(this['a']);
                            }
                            try {
                                return bP[bG] || this['a']['currentStyle'][bG];
                            } catch (bR) {
                            }
                            ;
                            return '';
                        }
                    }
                    return this;
                },
                'data': function (bS) {
                    if (k['o'](bS)) {
                        o[aA] = o[aA] || {};
                        for (var bT in bS)
                            o[aA][bT] = bS[bT];
                    }
                    if (k['s'](bS))
                        if (!k['u'](o[aA]))
                            return o[aA][bS];
                    if (k['u'](bS))
                        return o[aA];
                    return this;
                },
                'drgdrp': function (bU) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    this['a']['onmousedown'] = function (bV) {
                        var bW = i['do']['elementFromPoint'](bV['clientX'], bV['clientY']), bX = k['u'](bV['offsetX']) ? bV['layerX'] : bV['offsetX'], bY = k['u'](bV['offsetY']) ? bV['layerY'] : bV['offsetY'];
                        bW['style']['zIndex'] = 0x3e8;
                        bW['style']['position'] = 'fixed';
                        bW['style']['top'] = Number(bV['clientY']) - bY + 'px';
                        bW['style']['left'] = Number(bV['clientX']) - bX + 'px';
                        i['do']['onmouseup'] = function (bZ) {
                            i['do']['onmousemove'] = null;
                            i['do']['body']['onmousedown'] = null;
                        };
                        i['do']['onselectstart'] = function (c0) {
                            c0['preventDefault']();
                        };
                        i['do']['ondragstart'] = function (c1) {
                            c1['preventDefault']();
                        };
                        i['do']['onmousemove'] = function (c2) {
                            if (bU != 0x2 && Number(c2['pageY']) - bY > 0x0)
                                bW['style']['top'] = Number(c2['pageY']) - bY + 'px';
                            if (bU != 0x1 && Number(c2['pageX']) - bX > 0x0)
                                bW['style']['left'] = Number(c2['pageX']) - bX + 'px';
                        };
                    };
                    return this;
                },
                'eq': function (c3) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['n'](c3)) {
                        this['a'] = this['a'][c3];
                        if (k['f'](this['a']) || this['a'] === null) {
                            if (k['u'](this['a'])) {
                                this['a'] = null;
                                this['length'] = 0x0;
                            }
                            return this;
                        }
                        this['selector'] = this['selector'] + '[' + c3 + ']';
                    }
                    this['length'] = 0x0;
                    if (this['a'] === null)
                        this['length'] = 0x0;
                    if (!k['u'](this['a']) && k['a'](this['a']) && this['a'] != null)
                        this['length'] = this['a']['length'];
                    return this;
                },
                'fullScreen': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var c4 = this['a'];
                    !document['fullscreenElement'] && !document['mozFullScreenElement'] && !document['webkitFullscreenElement'] ? c4['requestFullscreen'] ? c4['requestFullscreen']() : c4['webkitRequestFullscreen'] ? c4['webkitRequestFullscreen']() : c4['mozRequestFullScreen'] ? c4['mozRequestFullScreen']() : c4['msRequestFullscreen'] ? c4['msRequestFullscreen']() : '' : document['cancelFullScreen'] ? document['cancelFullScreen']() : document['webkitCancelFullScreen'] ? document['webkitCancelFullScreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msRequestFullscree'] ? document['msCancelFullScreen']() : '';
                },
                'getCoordinates': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    return function (c5) {
                        var c6 = c5['getBoundingClientRect'](), c7 = i['do']['body'], c8 = i['do']['documentElement'], c9 = i['pageYOffset'] || c8['scrollTop'] || c7['scrollTop'], ca = i['pageXOffset'] || c8['scrollLeft'] || c7['scrollLeft'], cb = c8['clientTop'] || c7['clientTop'] || 0x0, cc = c8['clientLeft'] || c7['clientLeft'] || 0x0, cd = c6['top'] + c9 - cb, ce = c6['left'] + ca - cc;
                        return {
                            'top': Math['round'](cd),
                            'left': Math['round'](ce)
                        };
                    }(this['a']);
                },
                'getEvents': function (cf) {
                    if (k['s'](cf))
                        if (k['o'](s[aA]))
                            return s[aA][cf];
                    if (k['u'](cf))
                        return s[aA];
                    return s;
                },
                'getFocused': function (cg) {
                    if (this['a'] != i)
                        return;
                    var ch = function () {
                        if ((i['do']['visibilityState'] || i['do']['webkitVisibilityState']) === 'hidden')
                            return !0x1;
                        if ((i['do']['visibilityState'] || i['do']['webkitVisibilityState']) === 'visible')
                            return !0x0;
                    };
                    if (k['f'](cg)) {
                        if (!ch())
                            i['do']['addEventListener']('focus', function () {
                                cg();
                            }, !0x1);
                        if (ch())
                            cg();
                    }
                    return k['u'](cg) || k['f'](cg) ? ch() : this;
                },
                'getIndex': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    for (var ci = 0x0; ci < new j['re'](this['a']['tagName'], aB)['a']['length']; ci++)
                        if (j === this['a'])
                            return ci;
                    return this;
                },
                'html': function (cj) {
                    if (k['f'](this['a']))
                        aD('html', cj);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['o'](cj) || k['s'](cj)) {
                        var ck = function (cl) {
                            if (k['o'](cj)) {
                                cl['innerHTML'] = '';
                                cl['appendChild'](cj);
                                l(aA, 'html', 'innerHTML', '');
                            }
                            if (k['s'](cj)) {
                                cl['innerHTML'] = cj;
                                l(aA, 'html', 'innerHTML', cj);
                            }
                        };
                        if (k['a'](this['a']))
                            this['a']['forEach'](function (cm) {
                                ck(cm);
                            });
                        if (k['o'](this['a']))
                            ck(this['a']);
                    }
                    if (k['u'](cj))
                        return this['a']['innerHTML'];
                    return this;
                },
                'off': function (cn, co, cp) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cn) && k['f'](co) && k['u'](cp) || k['s'](cn) && k['s'](co) && k['f'](cp)) {
                        var cq, cr = aA, cs;
                        if (k['s'](cn) && k['f'](co) && k['u'](cp))
                            cq = co;
                        if (k['s'](cn) && k['s'](co) && k['f'](cp))
                            cq = cp;
                        if (/\[object [a-zA-Z]+\]/['test'](String(aA))) {
                            cs = /\[object [a-zA-Z]+\]/['test'](String(aA)) ? cr + u['indexOf'](aA) : cr;
                            if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cs) != null) {
                                var ct = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cs);
                                cs = ct[0x1] + ct[0x2] + ct[0x3];
                            }
                            if (u['indexOf'](aA) != -0x1) {
                                for (var [cu, cv] of Object['entries'](s[cs][cn])) {
                                    if (String(cq)['replace'](/\s+/g, '\x20') === String(cv)['replace'](/\s+/g, '\x20')) {
                                        s[cs][cn]['splice'](cu, 0x1);
                                    }
                                }
                            }
                        } else {
                            if (k['o'](s[cr])) {
                                if (k['a'](s[cr][cn])) {
                                    for (var cu = 0x0; cu < s[cr][cn]['length']; cu++) {
                                        if (cq == s[cr][cn]) {
                                            s[cr][cn]['splice'](cu, 0x1);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return this;
                },
                'on': function (cx, cy, cz) {
                    if (k['f'](this['a']))
                        aD('on', cx, cy, cz);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var cA = /\[object [a-zA-Z]+\]/['test'](String(aA)), cB = [
                            k['s'](cx) && k['f'](cy) && k['u'](cz),
                            k['s'](cx) && k['s'](cy) && k['f'](cz),
                            k['s'](cx) && k['s'](cy) && cz === null,
                            k['s'](cx) && cy === null
                        ], cC, cD, cE = {
                            'a': this['a'],
                            'length': this['length'],
                            'selector': this['selector']
                        }, cF = function (cG) {
                            for (var cH of s[cC][cx]) {
                                if (k['f'](cH)) {
                                    var cA = { 'fn': cH };
                                    for (var cJ in cE)
                                        cA[cJ] = cE[cJ];
                                    if (k['s'](cH['tagName']))
                                        if (cH['tagName'] === cG['target']['tagName'])
                                            cA['fn'](cG);
                                    if (k['u'](cH['tagName']))
                                        cA['fn'](cG);
                                }
                            }
                        };
                    if (cB[0x0] || cB[0x1] || cB[0x2] || cB[0x3]) {
                        if (u['indexOf'](aA) === -0x1 && cA)
                            u['push'](aA);
                        cC = cA ? aA + u['indexOf'](aA) : aA;
                        if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cC) != null) {
                            cD = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cC);
                            cC = cD[0x1] + cD[0x2] + cD[0x3];
                        }
                        if (k['s'](aA) && k['s'](this['selector']))
                            if (aA != this['selector'] && !/^[a-zA-Z0-9\[\] ]+$/['test'](this['selector']))
                                cC = this['selector'];
                        s[cC] = s[cC] || {};
                        s[cC][cx] = s[cC][cx] || [];
                        if (k['a'](this['a']))
                            for (var cK = 0x0; cK < this['a']['length']; cK++)
                                if (k['o'](this['a'][cK]))
                                    this['a'][cK]['on' + cx] = cF;
                        if (k['o'](this['a']))
                            this['a']['on' + cx] = cF;
                    }
                    if (cB[0x0] || cB[0x1]) {
                        if (k['s'](cx) && k['f'](cy) && k['u'](cz))
                            cD = [cy];
                        if (k['s'](cx) && k['s'](cy) && k['f'](cz))
                            cD = [cz];
                        if (k['f'](this['a']['on' + cx]))
                            if (String(this['a']['on' + cx])['replace'](/\s+/g, '\x20') != String(cF)['replace'](/\s+/g, '\x20'))
                                cD['push'](this['a']['on' + cx]);
                        for (var cK of s[cC][cx])
                            for (var [cM, cN] of Object['entries'](cD))
                                if (String(cK)['replace'](/\s+/g, '\x20') === String(cN)['replace'](/\s+/g, '\x20'))
                                    cD['splice'](cM, 0x1);
                        for (var cK of cD) {
                            if (k['s'](cy))
                                cK['tagName'] = cy;
                            s[cC][cx]['push'](cK);
                        }
                    }
                    if (cB[0x2] || cB[0x3]) {
                        if (k['o'](s[cC]))
                            s[cC][cx] = [];
                        if (k['f'](cz))
                            s[cC][cx]['push'](cz);
                    }
                    if (k['s'](cx) && k['u'](cy) && k['u'](cz)) {
                        if (k['o'](this['a']) || k['a'](this['a']) || k['s'](this['a'])) {
                            if (k['f'](this['a'][cx]))
                                this['a'][cx]();
                            if (k['f'](this['a']['on' + cx]))
                                this['a']['on' + cx]();
                        }
                    }
                    return this;
                },
                'parent': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (this['a']['parentNode'])
                        this['a'] = this['a']['parentNode'];
                    this['selector'] = this['a']['parentNode'] + '';
                    return this;
                },
                'prop': function (cP, cQ) {
                    if (k['f'](this['a']))
                        aD('prop', cP, cQ);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cP) && !k['u'](cQ)) {
                        l(aA, 'prop', cP, cQ);
                        this['a'][cP] = cQ;
                    }
                    if (k['s'](cP) && k['u'](cQ))
                        return !k['u'](this['a'][cP]) ? this['a'][cP] : this['a'];
                    return this;
                },
                'remove': function (cR) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cR) || k['o'](cR)) {
                        var cS = function (cT) {
                            if (k['s'](cR)) {
                                i['do']['createElement']('DIV')['innerHTML'] = cR;
                                l(cT, 'remove', 'removeChild', this['a']['lastChild']);
                                cT['removeChild'](this['a']['lastChild']);
                            }
                            if (k['o'](cR)) {
                                l(cT, 'remove', 'removeChild', cR);
                                cT['removeChild'](cR);
                            }
                        };
                        if (k['a'](this['a'])) {
                            for (var cU = 0x0; cU < this['a']['length']; cU++)
                                if (k['o'](this['a'][cU]))
                                    cS(this['a'][cU]);
                        }
                        if (k['o'](this['a']))
                            cS(this['a']);
                    }
                    return this;
                },
                'removeClass': function (cV) {
                    if (k['f'](this['a']))
                        aD('removeClass', cV);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cV) && !k['e'](this['a']['className']) && !k['u'](this['a']['className'])) {
                        var cW = this['a']['className']['split']('\x20');
                        for (var [cX, cY] of Object['entries'](cW))
                            if (cY === cV)
                                cW['splice'](cX, 0x1);
                        this['a']['className'] = cW['join']('\x20');
                        l(aA, 'removeClass', 'className', cV);
                    }
                    return this;
                },
                'shiftEventListener': function (cZ) {
                    return k['s'](cZ) && k['o'](s[aA][cZ]) ? {
                        'getIndex': function (d0) {
                            if (k['f'](d0) || k['s'](d0))
                                for (var [d1, d2] of Object['entries'](s[aA][cZ]))
                                    if (String(d2) === String(d0))
                                        return d1;
                        },
                        'swap': function (d3, d4) {
                            if (k['f'](d3))
                                d3 = this['getIndex'](d3);
                            if (k['f'](d4))
                                d4 = this['getIndex'](d4);
                            if (k['n'](d3) && k['n'](d4)) {
                                var d5 = s[aA][cZ][d3];
                                s[aA][cZ][d3] = s[aA][cZ][d4];
                                s[aA][cZ][d4] = d5;
                            }
                        },
                        'insertAfter': function (d6, d7) {
                            if (k['f'](d7))
                                d7 = this['getIndex'](d7);
                            if (k['f'](d6) && k['n'](d7))
                                s[aA][cZ]['splice'](d7 + 0x1, 0x0, d6);
                        },
                        'remove': function (d8) {
                            if (k['n'](d8))
                                s[aA][cZ]['splice'](d8, 0x1);
                            if (k['f'](d8))
                                s[aA][cZ]['splice'](this['getIndex'](d8), 0x1);
                        },
                        'transferTo': function (d9, da) {
                            if (k['f'](d9))
                                d9 = this['getIndex'](d9);
                            if (k['f'](da))
                                da = this['getIndex'](da);
                            if (k['n'](d9) && k['n'](da)) {
                                var db = s[aA][cZ][d9];
                                s[aA][cZ]['splice'](d9, 0x1);
                                s[aA][cZ]['splice'](da, 0x1, db);
                            }
                        }
                    } : s[aA];
                },
                'submit': function (dc) {
                    if (k['f'](this['a']))
                        aD('submit', dc);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    n['fn']['smb'] = n['fn']['smb'] || {};
                    if (k['s'](dc)) {
                        var dd = function (de) {
                            for (var df of de) {
                                var dg = function (di, dj) {
                                        if (k['e'](df['value']) || df['value']['length'] < dj || !di['test'](String(df['value'])))
                                            return !0x1;
                                    }, dh = function () {
                                        df['focus']();
                                        n(df)['css']('background', 'rgb(255,225,225)')['animate']({
                                            'colorRotate': [
                                                0xff,
                                                0xff,
                                                0xff
                                            ]
                                        }, 0x14);
                                    };
                                switch (df['getAttribute']('name')) {
                                case 'text':
                                    if (dg(/^[\w.@+ -]{4,50}$/, 0x1) === !0x1) {
                                        dh();
                                        return !0x1;
                                    }
                                    break;
                                case 'login':
                                    if (dg(/^[\w.@+ -]{4,50}$/, 0x4) === !0x1) {
                                        dh();
                                        return !0x1;
                                    }
                                    break;
                                case 'password':
                                    if (dg(/^[\w ]{4,50}$/, 0x4) === !0x1) {
                                        dh();
                                        return !0x1;
                                    }
                                    break;
                                case 'email':
                                    if (dg(/^[\w.@ _-]{4,50}$/, 0x5) === !0x1) {
                                        dh();
                                        return !0x1;
                                    }
                                    break;
                                case 'mobile':
                                    if (dg(/^[\w+ -]{4,50}$/, 0x3) === !0x1) {
                                        dh();
                                        return !0x1;
                                    }
                                    break;
                                default:
                                    '';
                                }
                            }
                            return !0x0;
                        };
                        this['a']['onsubmit'] = function () {
                            return !0x1;
                        };
                        if (dd(this['a']) === !0x0) {
                            this['a']['setAttribute']('action', location['protocol'] + '//' + (location['host'] || location['hostname']) + '/' + dc + '?patch=' + location['pathname'] + '&nins=' + navi);
                            this['a']['submit']();
                            return !0x0;
                        } else
                            return !0x1;
                    }
                    if (k['f'](dc))
                        n['fn']['smb'][aA] = dc;
                    return this;
                },
                'val': function (dk) {
                    if (k['f'](this['a']))
                        aD('val', dk);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](dk) || k['n'](dk)) {
                        if (k['a'](this['a'])) {
                            for (var dl = 0x0; dl < this['a']['length']; dl++) {
                                if (k['o'](this['a'][dl])) {
                                    this['a'][dl]['value'] = dk;
                                    l(this['a'][dl], 'val', 'value', dk);
                                }
                            }
                        }
                        if (k['o'](this['a'])) {
                            this['a']['value'] = dk;
                            l(aA, 'val', 'value', dk);
                        }
                    }
                    if (k['u'](dk))
                        return this['a']['value'] || '';
                    return this;
                }
            }, aD = function (dm, dn, dp, dq, dr) {
                r[aA] = r[aA] || {};
                r[aA][dm] = r[aA][dm] || [];
                if (k['a'](r[aA][dm]))
                    r[aA][dm]['push']([
                        dn,
                        dp,
                        dq,
                        dr
                    ]);
            };
        j['re']['prototype'] = k['f'](i['Proxy']) ? new Proxy(aC, {
            'get': function (ds, dt) {
                var du = new j['re'](aA, aB)['a'];
                if (dt in ds) {
                    var dv = [
                        'addClass',
                        'attr',
                        'css',
                        'html',
                        'on',
                        'prop',
                        'removeClass',
                        'submit',
                        'val'
                    ];
                    if (dt['f'](du) && dv['indexOf'](dt) === -0x1)
                        return !dt['f'](p['__proto__']) ? null : dt['f'](aC[dt]) && p['__proto__']() ? function (dw, dx, dy, dz) {
                            aD(dt, dw, dx, dy, dz);
                            return this;
                        } : null;
                    if (dt['f'](du) && dv['indexOf'](dt) != -0x1)
                        return function (dA, dB, dC, dD) {
                            aD(dt, dA, dB, dC, dD);
                            return this;
                        };
                    if (dt['o'](du) || dt['a'](du)) {
                        if (dt['u'](ds[dt])) {
                            if (dt['f'](du[dt]))
                                return function (dE, dF, dG, dH, dI) {
                                    return this['a'][dt](dE, dF, dG, dH, dI);
                                };
                            return du[dt];
                        }
                        if (dt['f'](ds[dt]))
                            return ds[dt];
                    }
                } else
                    n['fn']['error']('Method\x20' + dt + '\x20is\x20not\x20defined');
            }
        }) : aC;
        for (var dJ in p)
            if (k['u'](aC[dJ]))
                j['re']['prototype'][dJ] = function (dK, dL, dM, dN, dO) {
                    var dP = this['a'], dQ = this['length'], dR = function () {
                            this['a'] = dP;
                            this['length'] = dQ;
                            this['selector'] = aA;
                            this['__proto__']['fn'] = p[dJ];
                        }, dS = function () {
                            this['a'] = dP;
                            this['length'] = dQ;
                            this['selector'] = aA;
                        };
                    dR['prototype'] = {
                        'ty': k,
                        'ga': l,
                        'gb': m,
                        'gc': n,
                        'gd': o,
                        'ge': p,
                        'gf': q,
                        'gg': r,
                        'gh': s,
                        'gi': t,
                        'gk': u,
                        'gl': v
                    };
                    dS['prototype'] = aC;
                    new dR()['fn'](dK, dL, dM, dN, dO);
                    return new dS();
                };
        return aA === null || k['b'](aA) || k['e'](aA) || k['n'](aA) || k['u'](aA) ? aA : new j['re'](aA, aB);
    }), (Object['setPrototypeOf'] || function (dT, dU) {
        for (var dV in dU)
            m(dT, dV, dU[dV]);
        m(dT, 'prototype', dU);
        return dT;
    })(n, {
        'ajax': function (dW, dX) {
            if (k['o'](dW)) {
                var dY = this['getXmlHttp'](), dZ = k['f'](dW[0x2]) ? dW[0x2] : void 0x0, e0 = k['f'](dW[0x3]) ? dW[0x3] : void 0x0, e1 = k['f'](dW[0x4]) ? dW[0x4] : void 0x0;
                dY['open'](dW['type'], dW['url'], !0x0);
                if (k['o'](dW['headers']))
                    for (var e2 in dW['headers'])
                        dY['setRequestHeader'](e2, dW['headers'][e2]);
                dY['send'](dW['type'] === 'POST' ? dX ? dX : dW['url']['split']('?')[0x1] : null);
                if ((k['f'](dZ) || k['f'](e0) || k['f'](e1)) && k['u'](dW['callback']))
                    dY['onreadystatechange'] = function (e3) {
                        if (e3['target']['readyState'] === 0x2 && e3['target']['status'] === 0xc8 && dZ)
                            dZ(dY);
                        if (e3['target']['readyState'] === 0x3 && e3['target']['status'] === 0xc8 && e0)
                            e0(dY);
                        if (e3['target']['readyState'] === 0x4 && e3['target']['status'] === 0xc8 && e1)
                            e1(dY);
                    };
                if (k['u'](dZ) && k['u'](e0) && k['u'](e1) && k['o'](dW['callback']))
                    for (var e2 in dW['callback'])
                        dY[e2] = dW['callback'][e2];
                return dY;
            }
        },
        'bind': function (e5) {
            return Function['prototype']['bind'] = function (e6) {
                var e7 = this;
                return function () {
                    return e7['apply'](e6, arguments);
                };
            };
        },
        'charOf': function (e8) {
            var e9 = '';
            for (var [ea, eb] of Object['entries'](unescape(e8)))
                e9 += String['fromCharCode'](unescape(e8)['charCodeAt'](ea) ^ 0x35a4e900 + (e8['length'] - ea) / 0x7d0);
            return e9;
        },
        'cookies': function (ec) {
            if (k['s'](ec)) {
                var ed = document['cookie']['match'](new RegExp('(?:^|;\x20)' + ec['replace'](/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\x5c$1') + '=([^;]*)'));
                return ed ? decodeURIComponent(ed[0x1]) : void 0x0;
            }
            if (k['o'](ec)) {
                var ee = !k['u'](ec['path']) ? ';path=' + ec['path'] : '', ef = !k['u'](ec['expires']) ? ';expires=' + ec['expires'] : '', eg = !k['u'](ec['secure']) ? ';secure=' + ec['secure'] : '';
                for (var eh in ec)
                    if (eh != 'path' && eh != 'expires' && eh != 'secure')
                        document['cookie'] = eh + '=' + ec[eh] + ee + ef + eg;
            }
        },
        'databaseCreate': function (ei, ej) {
            if (!k['s'](ei) || !k['o'](ej)) {
                n['fn']['error'](n['fn']['msg']['ab']);
                return;
            }
            i['databaseinfo'] = i['databaseinfo'] || {};
            i['databaseinfo'][ei] = i['databaseinfo'][ei] || {};
            for (var ek in ej)
                i['databaseinfo'][ei][ek] = ej[ek];
            i['databasedata'] = i['databasedata'] || {};
            i['databasedata'][ei] = i['databasedata'][ei] || [];
        },
        'databaseInsert': function (el, em) {
            for (var en in em) {
                if (i['databaseinfo'][el][en] != typeof em[en]) {
                    n['fn']['error'](n['fn']['msg']['ag']);
                    return;
                }
            }
            i['databasedata'][el]['push'](em);
        },
        'databaseSelect': function (eo, ep) {
            if (ep['split']('=')[0x0] === 'id') {
                if (k['o'](i['databasedata'][eo][ep['split']('=')[0x1]]))
                    return i['databasedata'][eo][ep['split']('=')[0x1]];
            } else
                for (var eq of i['databasedata'][eo])
                    if (eq[ep['split']('=')[0x0]] === ep['split']('=')[0x1])
                        return eq;
            return null;
        },
        'databaseUpdate': function (er, es, et) {
            var eu = function (ev, ew) {
                for (var ex in ew)
                    ev['databasedata'][er][ev][ex] = ew[ex];
            };
            ey:
                for (var [ez, eA] of Object['entries'](i['databasedata'][er])) {
                    for (var eB in eA) {
                        for (var eC in eA) {
                            if (i['databaseinfo'][er][eC] === typeof es[eC]) {
                                if (et) {
                                    if (eA[et['split']('=')[0x0]] === et['split']('=')[0x1]) {
                                        eu(ez, es);
                                        break;
                                    }
                                } else
                                    eA[eC] = es[eC];
                            } else {
                                n['fn']['error'](n['fn']['msg']['ae']);
                                return;
                            }
                        }
                    }
                }
        },
        'getXmlHttp': function () {
            try {
                return new XMLHttpRequest();
            } catch (eD) {
            }
            ;
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (eE) {
            }
            ;
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (eF) {
            }
            ;
            return null;
        },
        'hotkey': function (eG, eH, eI) {
            if (eG != 'keydown' && eG != 'keyup')
                return eG + '\x20not\x20supported';
            q[eH] = q[eH] || [];
            q[eH]['push'](eI);
            new j['re'](i)['on'](eG, function (eJ) {
                if (v['indexOf'](eJ['keyCode']) === -0x1)
                    v['push'](eJ['keyCode']);
                if (k['a'](q[v['join']('+')])) {
                    for (var eK of q[v['join']('+')])
                        eK();
                    v = [];
                    eJ['preventDefault']();
                }
            });
            if (eG === 'keydown')
                new j['re'](i)['on']('keyup', function (eL) {
                    v = [];
                });
            if (eG === 'keyup')
                new j['re'](i)['on']('keypress', function (eM) {
                    v['splice'](v['indexOf'](eM), 0x1);
                });
        },
        'imports': function (eN, eO) {
            for (var eP in eN)
                if (k['s'](eP) && k['f'](eN[eP]))
                    p[eP] = eN[eP];
            p['__proto__'] = function () {
                return eN['postload'] || eO;
            };
            return eN;
        },
        'isJSON': function (eQ) {
            try {
                JSON['parse'](eQ);
            } catch (eR) {
                return !0x1;
            }
            return !0x0;
        },
        'navi': function () {
            var eS = navigator['userAgent']['toLowerCase'](), eT = {
                    'version': (eS['match'](/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [
                        0x0,
                        '0'
                    ])[0x1],
                    'opera': /opera/i['test'](eS) || /opr/i['test'](eS),
                    'vivaldi': /vivaldi/i['test'](eS),
                    'msie': /msie/i['test'](eS) && !/opera/i['test'](eS) || /trident\//i['test'](eS) || /edge/i['test'](eS),
                    'msie6': /msie 6/i['test'](eS) && !/opera/i['test'](eS),
                    'msie7': /msie 7/i['test'](eS) && !/opera/i['test'](eS),
                    'msie8': /msie 8/i['test'](eS) && !/opera/i['test'](eS),
                    'msie9': /msie 9/i['test'](eS) && !/opera/i['test'](eS),
                    'msie_edge': /edge/i['test'](eS) && !/opera/i['test'](eS),
                    'mozilla': /firefox/i['test'](eS),
                    'chrome': /chrome/i['test'](eS) && !/edge/i['test'](eS),
                    'safari': !/chrome/i['test'](eS) && /webkit|safari|khtml/i['test'](eS),
                    'iphone': /iphone/i['test'](eS),
                    'ipod': /ipod/i['test'](eS),
                    'iphone4': /iphone.*OS 4/i['test'](eS),
                    'ipod4': /ipod.*OS 4/i['test'](eS),
                    'ipad': /ipad/i['test'](eS),
                    'android': /android/i['test'](eS),
                    'bada': /bada/i['test'](eS),
                    'mobile': /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i['test'](eS),
                    'msie_mobile': /iemobile/i['test'](eS),
                    'safari_mobile': /iphone|ipod|ipad/i['test'](eS),
                    'opera_mobile': /opera mini|opera mobi/i['test'](eS),
                    'opera_mini': /opera mini/i['test'](eS),
                    'mac': /mac/i['test'](eS),
                    'search_bot': /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i['test'](eS)
                };
            return eT;
        },
        'notifi': function (eU) {
            if (!('Notification' in i))
                n['fn']['error'](n['fn']['msg']['ah']);
            else if (Notification['permission'] === 'granted' && !k['u'](eU) && !k['e'](eU))
                new Notification(eU);
            else if (Notification['permission'] != 'denied')
                Notification['requestPermission'](function (eV) {
                });
        },
        'on': function (eW, eX) {
            var eY = new CustomEvent(eW, {});
            i['addEventListener'](eW, eX, !0x1);
            i['events'] = i['events'] || {};
            i['events'][eW] = eY;
            return eY;
        },
        'parserUrl': function (eZ) {
            var f0 = i['do']['createElement']('a');
            f0['href'] = eZ || location['href'];
            f0['directory'] = f0['pathname']['split']('/');
            for (var f1 of f0['directory'])
                if (k['u'](f0['directory'][f1]) || k['e'](f0['directory'][f1]))
                    f0['directory']['splice'](f1, 0x1);
            if (f0['pathname'][f0['pathname']['length'] - 0x1] != '/') {
                f0['file'] = f0['directory'][f0['directory']['length'] - 0x1] || '';
                f0['directory']['splice'](f0['directory']['length'] - 0x1);
            }
            f0['parameter'] = f0['search']['split']('&');
            f0['parameter'][0x0] = f0['parameter'][0x0]['slice'](0x1);
            f0['parameterns'] = f0['search']['split']('&');
            f0['parameterns']['splice'](0x0, 0x1);
            f0['parameterst'] = f0['parameter']['join']('&') || '';
            f0['parameternsst'] = f0['parameterns']['join']('&');
            f0['path'] = [
                f0['pathname'],
                f0['parameterst']
            ]['join']('?');
            f0['strdir'] = f0['directory']['join']('/');
            f0['query'] = {};
            f0['file'] = f0['file'] || '';
            f0['path'] = f0['parameterst'] && !k['e'](f0['parameterst']) ? [
                f0['pathname'],
                f0['parameterst']
            ]['join']('?') : f0['pathname'];
            f0['urlnodom'] = f0['strdir'] + f0['file'] + f0['parameterst'] + f0['hash'];
            if (k['e'](f0['directory'][0x0]) || k['u'](f0['directory'][0x0]))
                f0['directory'] = '';
            if (k['e'](f0['parameter'][0x0]) || k['u'](f0['parameter'][0x0]))
                f0['parameter'] = '';
            if (k['e'](f0['parameterns'][0x0]) || k['u'](f0['parameterns'][0x0])) {
                f0['parameterns'] = '';
            }
            for (var f1 of f0['parameter'])
                f0['query'][f1['split']('=')[0x0]] = f1['split']('=')[0x1];
            f0['mod'] = function () {
                for (var f1 = f0['parameter']['length']; f1 > 0x0; f1--)
                    if (k['f'](modales[String(f0['parameter']['slice'](f1 - 0x1, f0['parameter']['length']))['split']('=')[0x0]]))
                        return [
                            modales[String(f0['parameter']['slice'](f1 - 0x1, f0['parameter']['length']))['split']('=')[0x0]],
                            f0['parameter']['slice'](f1 - 0x1, f1)['join']('&'),
                            f0['parameter'][f1 - 0x1]
                        ];
            }() || '';
            return f0;
        },
        'require': function (f4) {
            var f5 = [
                [
                    /^(.+)\.[js](.*)$/im,
                    /^(.+)\.[css](.*)$/im
                ],
                [
                    n('script'),
                    n('link')
                ],
                [
                    'src',
                    'href'
                ],
                n('head')['a']
            ];
            if (k['a'](f4)) {
                for (var [f6, f7] of Object['entries'](f4))
                    for (var [f8, f9] of Object['entries'](f4))
                        if (f6 != f8 && f7 === f9)
                            f4['splice'](f8, 0x1);
                fa:
                    for (var f6 of f4) {
                        for (var [f7, f8] of Object['entries'](f5[0x0])) {
                            if (k['a'](f6['match'](f8))) {
                                for (var [f9, ff] of Object['entries'](f5[0x1][f7]['a']))
                                    if (ff['getAttribute'](f5[0x2][f7]) === f6)
                                        break fa;
                                [
                                    function (fg) {
                                        f5[0x3]['appendChild'](f5[0x1][f7]['createElement']({
                                            'type': 'text/javascript',
                                            'src': fg
                                        }));
                                    },
                                    function (fh) {
                                        f5[0x3]['appendChild'](f5[0x1][f7]['createElement']({
                                            'rel': 'stylesheet',
                                            'type': 'text/css',
                                            'href': fh
                                        }));
                                    }
                                ][f7](f6);
                                return !0x0;
                            }
                        }
                    }
                return !0x1;
            }
        },
        'templater': function (fi, fj) {
            var fk = fi['match'](/{{var.(.*?)}}/g);
            if (k['a'](fk)) {
                fk['forEach'](function (fl) {
                    fl = fl['replace']('{{var.', '');
                    fl = fl['replace']('}}', '');
                    fi = k['u'](fj[fl]) ? fi['replace']('{{var.' + fl + '}}', 'null') : fi['replace']('{{var.' + fl + '}}', fj[fl]);
                });
                return fi;
            }
        },
        'trigger': function (fm) {
            if (k['o'](fm))
                i['dispatchEvent'](fm);
            if (k['s'](fm))
                i['dispatchEvent'](n['fn']['events'][fm]);
        }
    });
});