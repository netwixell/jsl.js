/*
* JavaScript Library v2.8.1.180616:21812
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
                return w == null ? !0x1 : w instanceof NodeList || w instanceof HTMLCollection ? !0x0 : Array['isArray'](w);
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
                return Array['isArray'](B) ? !0x1 : typeof B === 'object';
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
            var T = Q['toString']()['match'](/\[object HTML([a-zA-Z]+)/), U = Q['toString']()['match'](/\[object ([A-Z][a-z]+)/);
            if (k['o'](Q['a']) && k['s'](Q['selector']) && k['n'](Q['length'])) {
                for (var S in Q)
                    this[S] = Q[S];
                return this;
            }
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
            var V = function (a6) {
                    var a7 = function (a9) {
                            var aa = function (ab) {
                                var T = [
                                    /^(.+)\[(\d+)-(\d+)\]$/im,
                                    /^(.+)\((\d+),(\d+)\)$/im,
                                    /^(.+)\[(\d+)-\]$/im,
                                    /^(.+)\[(\d+)\]$/im,
                                    /^(.+)!(\d+)$/im,
                                    /^(.+):(\d+)$/im
                                ];
                                for (var [S, ae] of Object['entries'](T)) {
                                    var U = ab['match'](ae);
                                    if (k['a'](U)) {
                                        U = U['map'](function (ag) {
                                            var T = +ag;
                                            return k['N'](T) ? ag : T;
                                        });
                                        return [
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x0,
                                                a9 = U[0x1]
                                            ],
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x1,
                                                a9 = U[0x1]
                                            ],
                                            [
                                                [
                                                    U[0x2],
                                                    U[0x3]
                                                ],
                                                0x2,
                                                a9 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x4,
                                                a9 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x3,
                                                a9 = U[0x1]
                                            ],
                                            [
                                                U[0x2],
                                                0x4,
                                                a9 = U[0x1]
                                            ]
                                        ][S];
                                    }
                                }
                                return !0x1;
                            }(a9);
                            try {
                                var T = i['do']['querySelectorAll'](a9);
                            } catch (aj) {
                                return null;
                            }
                            if (k['a'](aa))
                                switch (aa[0x1]) {
                                case 0x0: {
                                        var U = [];
                                        if (aa[0x0][0x0] >= 0x0 && aa[0x0][0x1] >= 0x0 && aa[0x0][0x0] <= aa[0x0][0x1])
                                            for (var S = aa[0x0][0x0]; S <= aa[0x0][0x1]; S++)
                                                if (k['o'](T[S]))
                                                    U['push'](T[S]);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x1: {
                                        var U = [];
                                        if (aa[0x0][0x0] >= 0x0 && aa[0x0][0x1] >= 0x0)
                                            for (var S = aa[0x0][0x0], ao = 0x0; ao < aa[0x0][0x1]; S++, ao++)
                                                if (k['o'](T[S]))
                                                    U['push'](T[S]);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x2: {
                                        var U = [];
                                        if (aa[0x0][0x0] >= 0x0 && !aa[0x0][0x1])
                                            for (var S = aa[0x0][0x0]; S <= T['length']; S++)
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
                                        U['splice'](aa[0x0], 0x1);
                                        T = U;
                                    }
                                    ;
                                    break;
                                case 0x4:
                                    T = T[aa[0x0]];
                                    break;
                                }
                            return T;
                        }, T = a6['split'](/(?!\([^)]*),(?![^(]*\))/);
                    if (T['length'] > 0x1) {
                        var U = [];
                        for (var S of T) {
                            var Y = a7(S);
                            if (k['a'](Y))
                                for (var aw of Y)
                                    U['push'](aw);
                            else
                                U['push'](Y);
                        }
                        return U;
                    }
                    return a7(a6);
                }, T = V(Q);
            T === null || T['length'] === 0x0 ? n['fn']['DOMCL'] === !0x0 ? (this['a'] = null, this['length'] = 0x0) : (i['do']['addEventListener']('DOMContentLoaded', this['a'] = function () {
                var T = V(Q)['length'] === 0x0 ? null : V(Q);
                for (var S in r)
                    for (var az in r[S])
                        for (var aA of r[S][az])
                            n(S)[az](aA[0x0], aA[0x1], aA[0x2], aA[0x3]);
                return T === null ? T : T['length'] === 0x1 && k['o'](T[0x0]) ? T[0x0] : T;
            }, R && !0x0), this['length'] = void 0x0) : (this['length'] = k['u'](T['length']) && k['o'](T) && T != null ? 0x1 : T['length'], this['a'] = k['a'](T) || k['o'](T) ? this['length'] === 0x1 && k['o'](T[0x0]) ? T[0x0] : this['a'] = T : null);
            this['selector'] = Q;
        }
    }), m(j['re'], 'dom', function (aB, aC) {
        var aD = {
                'addClass': function (aF) {
                    if (k['f'](this['a']))
                        aE('addClass', aF);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (!k['e'](this['a']['className']))
                        for (var aG of this['a']['className']['split']('\x20'))
                            if (aG === aF)
                                return this;
                    l(aB, 'addClass', 'className', aF);
                    this['a']['className'] = k['e'](this['a']['className']) || k['u'](this['a']['className']) ? aF : this['a']['className'] + '\x20' + aF;
                    return this;
                },
                'animate': function (aH, aI, aJ) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var aK = this;
                    if (k['o'](aH)) {
                        var aL = {
                            'colorRotate': function (aM) {
                                var aN = (aK['a']['style']['backgroundColor'] || 'rgb(255,255,255)')['match'](/[rgb|rgba]+\((\d+), ?(\d+), ?(\d+)\)*/), aO = [
                                        Number(aN[0x1]),
                                        Number(aN[0x2]),
                                        Number(aN[0x3])
                                    ], aP = function () {
                                        setTimeout(function () {
                                            for (var aQ = 0x0; aQ < aO['length']; aQ++)
                                                if (aO[aQ] < 0xff)
                                                    aO[aQ] = aO[aQ] + 0x5;
                                            new j['re'](aK['a'], aC)['css']('background', 'rgb(' + aO['join'](',') + ')');
                                            if (aM['join']('') != aO['join'](''))
                                                aP();
                                        }, aI);
                                    };
                                aP();
                            },
                            'opacity': function (aR) {
                                var aS = aK['a']['opacity'] = aK['a']['style']['opacity'] = new j['re'](aB, aC)['css']('opacity') || 0x1, aT = function () {
                                        setTimeout(function () {
                                            aS = aK['a']['opacity'] = aK['a']['style']['opacity'] = (aS > aR ? Number(aS) - aJ : Number(aS) + aJ)['toFixed'](0x2);
                                            l(aB, 'animate', 'opacity', aS);
                                            if (aS != aR)
                                                aT();
                                        }, aU);
                                    };
                                aJ = aJ || 0.05;
                                aJ = aJ < 0.01 ? 0.01 : aJ;
                                var aU = aS > aR ? aI / ((aS - aR) / aJ) : aI / ((aR - aS) / aJ);
                                if (aS != aR)
                                    aT();
                            },
                            'scrollTop': function (aV) {
                                var aW = aK['animate']('scrollTop'), aX = aK['animate']('scrollLeft'), aY = function () {
                                        setTimeout(function () {
                                            scrollTo(aX, aW < aV ? aV - 0x8 + aZ : aV + 0x8 - aZ);
                                            if (aZ != 0x8)
                                                aY();
                                            aZ++;
                                        }, aI);
                                    }, aZ = 0x0;
                                if (Math['abs'](aW - aV) > 0xa && Math['abs'](aV - aW) > 0xa) {
                                    scrollTo(aX, aW < aV ? aV - 0x8 : aV + 0x8);
                                    if (aW != aV)
                                        aY();
                                } else
                                    scrollTo(aX, aV);
                            },
                            'scrollElem': function (b0) {
                                var b1, b2, b3 = 0x0, b4 = new j['re'](aB, aC)['getCoordinates'](), b5 = function () {
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
                                                new j['re'](aB, aC)['css'](b1);
                                                b3++;
                                                b5();
                                            }
                                        }, aI / b0[0x1]);
                                    };
                                if (b0[0x0] === 0x0 || b0[0x0] === 0x2)
                                    b2 = b4['top'];
                                if (b0[0x0] === 0x1 || b0[0x0] === 0x3)
                                    b2 = b4['left'];
                                b5();
                            }
                        };
                        for (var b6 in aH)
                            if (k['f'](aL[b6]))
                                aL[b6](aH[b6]);
                    }
                    if (k['s'](aH)) {
                        if (aH === 'scrollTop' && k['u'](aI) && k['u'](aJ))
                            return this['a'] === i || aB === 'body' ? i['pageYOffset'] ? i['pageYOffset'] : i['do']['documentElement']['scrollTop'] ? i['do']['documentElement']['scrollTop'] : i['do']['body']['scrollTop'] : this['a']['scrollTop'];
                        if (aH === 'scrollLeft' && k['u'](aI) && k['u'](aJ))
                            return this['a'] === i || aB === 'body' ? i['pageXOffset'] ? i['pageXOffset'] : i['do']['documentElement']['scrollLeft'] ? i['do']['documentElement']['scrollLeft'] : i['do']['body']['scrollLeft'] : this['a']['scrollLeft'];
                        if (aH === 'scrollTop' && k['n'](aI) && k['u'](aJ))
                            i['scrollTo'](aK['animate']('scrollLeft'), aI);
                        if (aH === 'scrollLeft' && k['n'](aI) && k['u'](aJ))
                            i['scrollTo'](aI, aK['animate']('scrollTop'));
                        if (aH === 'scrollTo' && k['n'](aI) && k['n'](aJ))
                            i['scrollTo'](aI, aJ);
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
                                if (k['o'](b7['a']))
                                    ba['appendChild'](b7['a']);
                                else
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
                        aE('attr', bf, bg);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var bh = function (bi, bj, bk) {
                        if (k['s'](bj)) {
                            if (k['a'](bk))
                                for (var bl = 0x0; bl < bk['length']; bl++)
                                    if (k['f'](bk[bl]['setAttribute']))
                                        bk[bl]['setAttribute'](bi, bj);
                            if (!k['a'](bk) && k['o'](bk))
                                bk['setAttribute'](bi, bj);
                        }
                    };
                    if (k['s'](bf) && k['s'](bg)) {
                        bh(bf, bg, this['a']);
                        l(aB, 'attr', bf, bg);
                    }
                    if (k['o'](bf) && k['u'](bg)) {
                        for (var bm in bf) {
                            bh(bm, bf[bm], this['a']);
                            l(aB, 'attr', bm, bf[bm]);
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
                        this['selector'] = aB + '>' + bp;
                    }
                    if (k['n'](bp)) {
                        this['a'] = this['a']['children'][bp];
                        this['selector'] = aB + '>[' + bp + ']';
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
                        this['selector'] = aB + '\x20' + bu;
                    }
                    if (k['n'](bu)) {
                        var bv = this['a']['querySelectorAll']('*'), bw = bv[bu];
                        this['selector'] = aB + '\x20[' + bu + ']';
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
                    var bE = i['do']['createElement'](aB);
                    if (k['o'](bD))
                        for (var bF in bD)
                            if (k['s'](bD[bF]))
                                bE['setAttribute'](bF, bD[bF]);
                    this['a'] = bE;
                    this['length'] = 0x1;
                    this['selector'] = aB;
                    return this;
                },
                'css': function (bG, bH) {
                    if (k['f'](this['a']))
                        aE('css', bG, bH);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if ((k['s'](bG) || k['o'](bG)) && (k['s'](bH) || k['u'](bH))) {
                        if ((k['o'](this['a']) || k['a'](this['a'])) && this['a'] != null) {
                            var bI = function (bJ) {
                                if (k['s'](bG) && k['s'](bH)) {
                                    bJ['style'][bG] = bH;
                                    l(aB, 'css', bG, bH);
                                }
                                if (k['o'](bG) && k['u'](bH)) {
                                    for (var bK in bG) {
                                        bJ['style'][bK] = bG[bK];
                                        l(aB, 'css', bK, bG[bK]);
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
                        o[aB] = o[aB] || {};
                        for (var bT in bS)
                            o[aB][bT] = bS[bT];
                    }
                    if (k['s'](bS))
                        if (!k['u'](o[aB]))
                            return o[aB][bS];
                    if (k['u'](bS))
                        return o[aB];
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
                    if (k['n'](c3))
                        return new j['re'](aB + '[' + c3 + ']');
                    if (k['s'](c3))
                        return new j['re'](aB + '\x20' + c3);
                    if (k['a'](c3)) {
                        var c4 = [];
                        for (var c5 = 0x0; c5 < c3['length']; c5++)
                            if (!k['u'](this['a'][c3[c5]]))
                                c4['push'](this['a'][c3[c5]]);
                        return new j['re'](c4);
                    }
                    return this;
                },
                'fullScreen': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var c6 = this['a'];
                    !document['fullscreenElement'] && !document['mozFullScreenElement'] && !document['webkitFullscreenElement'] ? c6['requestFullscreen'] ? c6['requestFullscreen']() : c6['webkitRequestFullscreen'] ? c6['webkitRequestFullscreen']() : c6['mozRequestFullScreen'] ? c6['mozRequestFullScreen']() : c6['msRequestFullscreen'] ? c6['msRequestFullscreen']() : '' : document['cancelFullScreen'] ? document['cancelFullScreen']() : document['webkitCancelFullScreen'] ? document['webkitCancelFullScreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['msRequestFullscree'] ? document['msCancelFullScreen']() : '';
                },
                'getCoordinates': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    return function (c7) {
                        var c8 = c7['getBoundingClientRect'](), c9 = i['do']['body'], ca = i['do']['documentElement'], cb = i['pageYOffset'] || ca['scrollTop'] || c9['scrollTop'], cc = i['pageXOffset'] || ca['scrollLeft'] || c9['scrollLeft'], cd = ca['clientTop'] || c9['clientTop'] || 0x0, ce = ca['clientLeft'] || c9['clientLeft'] || 0x0, cf = c8['top'] + cb - cd, cg = c8['left'] + cc - ce;
                        return {
                            'top': Math['round'](cf),
                            'left': Math['round'](cg)
                        };
                    }(this['a']);
                },
                'getEvents': function (ch) {
                    if (k['s'](ch))
                        if (k['o'](s[aB]))
                            return s[aB][ch];
                    if (k['u'](ch))
                        return s[aB];
                    return s;
                },
                'getFocused': function (ci) {
                    if (this['a'] != i)
                        return;
                    var cj = function () {
                        if ((i['do']['visibilityState'] || i['do']['webkitVisibilityState']) === 'hidden')
                            return !0x1;
                        if ((i['do']['visibilityState'] || i['do']['webkitVisibilityState']) === 'visible')
                            return !0x0;
                    };
                    if (k['f'](ci)) {
                        if (!cj())
                            i['do']['addEventListener']('focus', function () {
                                ci();
                            }, !0x1);
                        if (cj())
                            ci();
                    }
                    return k['u'](ci) || k['f'](ci) ? cj() : this;
                },
                'getIndex': function () {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    for (var ck = 0x0; ck < new j['re'](this['a']['tagName'], aC)['a']['length']; ck++)
                        if (j === this['a'])
                            return ck;
                    return this;
                },
                'html': function (cl) {
                    if (k['f'](this['a']))
                        aE('html', cl);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['o'](cl) || k['s'](cl)) {
                        var cm = function (cn) {
                            if (k['o'](cl)) {
                                cn['innerHTML'] = '';
                                cn['appendChild'](cl);
                                l(aB, 'html', 'innerHTML', '');
                            }
                            if (k['s'](cl)) {
                                cn['innerHTML'] = cl;
                                l(aB, 'html', 'innerHTML', cl);
                            }
                        };
                        if (k['a'](this['a']))
                            for (var co = 0x0; co < this['a']['length']; co++)
                                cm(this['a'][co]);
                        if (k['o'](this['a']))
                            cm(this['a']);
                    }
                    if (k['u'](cl))
                        return this['a']['innerHTML'];
                    return this;
                },
                'off': function (cp, cq, cr) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cp) && k['f'](cq) && k['u'](cr) || k['s'](cp) && k['s'](cq) && k['f'](cr)) {
                        var cs, ct = aB, cu;
                        if (k['s'](cp) && k['f'](cq) && k['u'](cr))
                            cs = cq;
                        if (k['s'](cp) && k['s'](cq) && k['f'](cr))
                            cs = cr;
                        if (/\[object [a-zA-Z]+\]/['test'](String(aB))) {
                            cu = /\[object [a-zA-Z]+\]/['test'](String(aB)) ? ct + u['indexOf'](aB) : ct;
                            if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cu) != null) {
                                var cv = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cu);
                                cu = cv[0x1] + cv[0x2] + cv[0x3];
                            }
                            if (u['indexOf'](aB) != -0x1) {
                                for (var [cw, cx] of Object['entries'](s[cu][cp])) {
                                    if (String(cs)['replace'](/\s+/g, '\x20') === String(cx)['replace'](/\s+/g, '\x20')) {
                                        s[cu][cp]['splice'](cw, 0x1);
                                    }
                                }
                            }
                        } else {
                            if (k['o'](s[ct])) {
                                if (k['a'](s[ct][cp])) {
                                    for (var cw = 0x0; cw < s[ct][cp]['length']; cw++) {
                                        if (cs == s[ct][cp]) {
                                            s[ct][cp]['splice'](cw, 0x1);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return this;
                },
                'on': function (cz, cA, cB) {
                    if (k['f'](this['a']))
                        aE('on', cz, cA, cB);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    var cC = /\[object [a-zA-Z]+\]/['test'](String(aB)), cD = [
                            k['s'](cz) && k['f'](cA) && k['u'](cB),
                            k['s'](cz) && k['s'](cA) && k['f'](cB),
                            k['s'](cz) && k['s'](cA) && cB === null,
                            k['s'](cz) && cA === null
                        ], cE, cF, cG = {
                            'a': this['a'],
                            'length': this['length'],
                            'selector': this['selector']
                        }, cH = function (cI) {
                            for (var cJ of s[cE][cz]) {
                                if (k['f'](cJ)) {
                                    var cC = { 'fn': cJ };
                                    for (var cL in cG)
                                        cC[cL] = cG[cL];
                                    if (k['s'](cJ['tagName']))
                                        if (cJ['tagName'] === cI['target']['tagName'])
                                            cC['fn'](cI);
                                    if (k['u'](cJ['tagName']))
                                        cC['fn'](cI);
                                }
                            }
                        };
                    if (cD[0x0] || cD[0x1] || cD[0x2] || cD[0x3]) {
                        if (u['indexOf'](aB) === -0x1 && cC)
                            u['push'](aB);
                        cE = cC ? aB + u['indexOf'](aB) : aB;
                        if (/(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cE) != null) {
                            cF = /(.*)\[[a-zA-Z]+ ([a-zA-Z]+)\](.*)/['exec'](cE);
                            cE = cF[0x1] + cF[0x2] + cF[0x3];
                        }
                        if (k['s'](aB) && k['s'](this['selector']))
                            if (aB != this['selector'] && !/^[a-zA-Z0-9\[\] ]+$/['test'](this['selector']))
                                cE = this['selector'];
                        s[cE] = s[cE] || {};
                        s[cE][cz] = s[cE][cz] || [];
                        if (k['a'](this['a']))
                            for (var cM = 0x0; cM < this['a']['length']; cM++)
                                if (k['o'](this['a'][cM]))
                                    this['a'][cM]['on' + cz] = cH;
                        if (k['o'](this['a']))
                            this['a']['on' + cz] = cH;
                    }
                    if (cD[0x0] || cD[0x1]) {
                        if (k['s'](cz) && k['f'](cA) && k['u'](cB))
                            cF = [cA];
                        if (k['s'](cz) && k['s'](cA) && k['f'](cB))
                            cF = [cB];
                        if (k['f'](this['a']['on' + cz]))
                            if (String(this['a']['on' + cz])['replace'](/\s+/g, '\x20') != String(cH)['replace'](/\s+/g, '\x20'))
                                cF['push'](this['a']['on' + cz]);
                        for (var cM of s[cE][cz])
                            for (var [cO, cP] of Object['entries'](cF))
                                if (String(cM)['replace'](/\s+/g, '\x20') === String(cP)['replace'](/\s+/g, '\x20'))
                                    cF['splice'](cO, 0x1);
                        for (var cM of cF) {
                            if (k['s'](cA))
                                cM['tagName'] = cA;
                            s[cE][cz]['push'](cM);
                        }
                    }
                    if (cD[0x2] || cD[0x3]) {
                        if (k['o'](s[cE]))
                            s[cE][cz] = [];
                        if (k['f'](cB))
                            s[cE][cz]['push'](cB);
                    }
                    if (k['s'](cz) && k['u'](cA) && k['u'](cB)) {
                        if (k['o'](this['a']) || k['a'](this['a']) || k['s'](this['a'])) {
                            if (k['f'](this['a'][cz]))
                                this['a'][cz]();
                            if (k['f'](this['a']['on' + cz]))
                                this['a']['on' + cz]();
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
                'prop': function (cR, cS) {
                    if (k['f'](this['a']))
                        aE('prop', cR, cS);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cR) && !k['u'](cS)) {
                        l(aB, 'prop', cR, cS);
                        this['a'][cR] = cS;
                    }
                    if (k['s'](cR) && k['u'](cS))
                        return !k['u'](this['a'][cR]) ? this['a'][cR] : this['a'];
                    return this;
                },
                'remove': function (cT) {
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cT) || k['o'](cT)) {
                        var cU = function (cV) {
                            if (k['s'](cT)) {
                                i['do']['createElement']('DIV')['innerHTML'] = cT;
                                l(cV, 'remove', 'removeChild', this['a']['lastChild']);
                                cV['removeChild'](this['a']['lastChild']);
                            }
                            if (k['o'](cT)) {
                                l(cV, 'remove', 'removeChild', cT);
                                cV['removeChild'](cT);
                            }
                        };
                        if (k['a'](this['a'])) {
                            for (var cW = 0x0; cW < this['a']['length']; cW++)
                                if (k['o'](this['a'][cW]))
                                    cU(this['a'][cW]);
                        }
                        if (k['o'](this['a']))
                            cU(this['a']);
                    }
                    return this;
                },
                'removeClass': function (cX) {
                    if (k['f'](this['a']))
                        aE('removeClass', cX);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](cX) && !k['e'](this['a']['className']) && !k['u'](this['a']['className'])) {
                        var cY = this['a']['className']['split']('\x20');
                        for (var [cZ, d0] of Object['entries'](cY))
                            if (d0 === cX)
                                cY['splice'](cZ, 0x1);
                        this['a']['className'] = cY['join']('\x20');
                        l(aB, 'removeClass', 'className', cX);
                    }
                    return this;
                },
                'shiftEventListener': function (d1) {
                    return k['s'](d1) && k['o'](s[aB][d1]) ? {
                        'getIndex': function (d2) {
                            if (k['f'](d2) || k['s'](d2))
                                for (var [d3, d4] of Object['entries'](s[aB][d1]))
                                    if (String(d4) === String(d2))
                                        return d3;
                        },
                        'swap': function (d5, d6) {
                            if (k['f'](d5))
                                d5 = this['getIndex'](d5);
                            if (k['f'](d6))
                                d6 = this['getIndex'](d6);
                            if (k['n'](d5) && k['n'](d6)) {
                                var d7 = s[aB][d1][d5];
                                s[aB][d1][d5] = s[aB][d1][d6];
                                s[aB][d1][d6] = d7;
                            }
                        },
                        'insertAfter': function (d8, d9) {
                            if (k['f'](d9))
                                d9 = this['getIndex'](d9);
                            if (k['f'](d8) && k['n'](d9))
                                s[aB][d1]['splice'](d9 + 0x1, 0x0, d8);
                        },
                        'remove': function (da) {
                            if (k['n'](da))
                                s[aB][d1]['splice'](da, 0x1);
                            if (k['f'](da))
                                s[aB][d1]['splice'](this['getIndex'](da), 0x1);
                        },
                        'transferTo': function (db, dc) {
                            if (k['f'](db))
                                db = this['getIndex'](db);
                            if (k['f'](dc))
                                dc = this['getIndex'](dc);
                            if (k['n'](db) && k['n'](dc)) {
                                var dd = s[aB][d1][db];
                                s[aB][d1]['splice'](db, 0x1);
                                s[aB][d1]['splice'](dc, 0x1, dd);
                            }
                        }
                    } : s[aB];
                },
                'submit': function (de) {
                    if (k['f'](this['a']))
                        aE('submit', de);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    n['fn']['smb'] = n['fn']['smb'] || {};
                    if (k['s'](de)) {
                        var df = function (dg) {
                            for (var dh of dg) {
                                var di = function (dk, dl) {
                                        if (k['e'](dh['value']) || dh['value']['length'] < dl || !dk['test'](String(dh['value'])))
                                            return !0x1;
                                    }, dj = function () {
                                        dh['focus']();
                                        n(dh)['css']('background', 'rgb(255,200,200)')['animate']({
                                            'colorRotate': [
                                                0xff,
                                                0xff,
                                                0xff
                                            ]
                                        }, 0x32);
                                    };
                                switch (dh['getAttribute']('type')) {
                                case 'text':
                                    if (di(/^[\w.@+ -]{4,50}$/, 0x1) === !0x1) {
                                        dj();
                                        return !0x1;
                                    }
                                    break;
                                case 'login':
                                    if (di(/^[\w.@+ -]{4,50}$/, 0x4) === !0x1) {
                                        dj();
                                        return !0x1;
                                    }
                                    break;
                                case 'password':
                                    if (di(/^[\w ]{4,50}$/, 0x4) === !0x1) {
                                        dj();
                                        return !0x1;
                                    }
                                    break;
                                case 'email':
                                    if (di(/^[\w.@ _-]{4,50}$/, 0x5) === !0x1) {
                                        dj();
                                        return !0x1;
                                    }
                                    break;
                                case 'mobile':
                                    if (di(/^[\w+ -]{4,50}$/, 0x3) === !0x1) {
                                        dj();
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
                        if (df(this['a']) === !0x0) {
                            this['a']['setAttribute']('action', de);
                            this['a']['submit']();
                            return !0x0;
                        } else
                            return !0x1;
                    }
                    if (k['f'](de))
                        n['fn']['smb'][aB] = de;
                    return this;
                },
                'val': function (dm) {
                    if (k['f'](this['a']))
                        aE('val', dm);
                    if (k['f'](this['a']) || this['a'] == null)
                        return this;
                    if (k['s'](dm) || k['n'](dm)) {
                        if (k['a'](this['a'])) {
                            for (var dn = 0x0; dn < this['a']['length']; dn++) {
                                if (k['o'](this['a'][dn])) {
                                    this['a'][dn]['value'] = dm;
                                    l(this['a'][dn], 'val', 'value', dm);
                                }
                            }
                        }
                        if (k['o'](this['a'])) {
                            this['a']['value'] = dm;
                            l(aB, 'val', 'value', dm);
                        }
                    }
                    if (k['u'](dm))
                        return this['a']['value'] || '';
                    return this;
                }
            }, aE = function (dp, dq, dr, ds, dt) {
                r[aB] = r[aB] || {};
                r[aB][dp] = r[aB][dp] || [];
                if (k['a'](r[aB][dp]))
                    r[aB][dp]['push']([
                        dq,
                        dr,
                        ds,
                        dt
                    ]);
            };
        j['re']['prototype'] = k['f'](i['Proxy']) ? new Proxy(aD, {
            'get': function (du, dv) {
                var dw = new j['re'](aB, aC)['a'];
                if (dv in du) {
                    var dx = [
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
                    if (dv['f'](dw) && dx['indexOf'](dv) === -0x1)
                        return !dv['f'](p['__proto__']) ? null : dv['f'](aD[dv]) && p['__proto__']() ? function (dy, dz, dA, dB) {
                            aE(dv, dy, dz, dA, dB);
                            return this;
                        } : null;
                    if (dv['f'](dw) && dx['indexOf'](dv) != -0x1)
                        return function (dC, dD, dE, dF) {
                            aE(dv, dC, dD, dE, dF);
                            return this;
                        };
                    if (dv['o'](dw) || dv['a'](dw)) {
                        if (dv['u'](du[dv])) {
                            if (dv['f'](dw[dv]))
                                return function (dG, dH, dI, dJ, dK) {
                                    return this['a'][dv](dG, dH, dI, dJ, dK);
                                };
                            return dw[dv];
                        }
                        if (dv['f'](du[dv]))
                            return du[dv];
                    }
                } else {
                    if (dv['u'](du[dv])) {
                        if (dv['f'](dw[dv]))
                            return function (dL, dM, dN, dO, dP) {
                                return this['a'][dv](dL, dM, dN, dO, dP);
                            };
                        if (dv['u'](dw[dv]))
                            return n['fn']['error']('Method\x20' + dv + '\x20is\x20not\x20defined');
                        return dw[dv];
                    }
                }
            }
        }) : aD;
        for (var dQ in p)
            if (k['u'](aD[dQ]))
                j['re']['prototype'][dQ] = function (dR, dS, dT, dU, dV) {
                    var dW = this['a'], dX = this['length'], dY = function () {
                            this['a'] = dW;
                            this['length'] = dX;
                            this['selector'] = aB;
                            this['__proto__']['fn'] = p[dQ];
                        }, dZ = function () {
                            this['a'] = dW;
                            this['length'] = dX;
                            this['selector'] = aB;
                        };
                    dY['prototype'] = {
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
                    dZ['prototype'] = aD;
                    new dY()['fn'](dR, dS, dT, dU, dV);
                    return new dZ();
                };
        return aB === null || k['b'](aB) || k['e'](aB) || k['n'](aB) || k['u'](aB) ? aB : new j['re'](aB, aC);
    }), (Object['setPrototypeOf'] || function (e0, e1) {
        for (var e2 in e1)
            m(e0, e2, e1[e2]);
        m(e0, 'prototype', e1);
        return e0;
    })(n, {
        'ajax': function (e3, e4) {
            if (k['o'](e3)) {
                var e5 = this['getXmlHttp'](), e6 = k['f'](e3[0x2]) ? e3[0x2] : void 0x0, e7 = k['f'](e3[0x3]) ? e3[0x3] : void 0x0, e8 = k['f'](e3[0x4]) ? e3[0x4] : void 0x0;
                e5['open'](e3['type'], e3['url'], !0x0);
                if (k['o'](e3['headers']))
                    for (var e9 in e3['headers'])
                        e5['setRequestHeader'](e9, e3['headers'][e9]);
                e5['send'](e3['type'] === 'POST' ? e4 ? e4 : e3['url']['split']('?')[0x1] : null);
                if ((k['f'](e6) || k['f'](e7) || k['f'](e8)) && k['u'](e3['callback']))
                    e5['onreadystatechange'] = function (ea) {
                        if (ea['target']['readyState'] === 0x2 && ea['target']['status'] === 0xc8 && e6)
                            e6(e5);
                        if (ea['target']['readyState'] === 0x3 && ea['target']['status'] === 0xc8 && e7)
                            e7(e5);
                        if (ea['target']['readyState'] === 0x4 && ea['target']['status'] === 0xc8 && e8)
                            e8(e5);
                    };
                if (k['u'](e6) && k['u'](e7) && k['u'](e8) && k['o'](e3['callback']))
                    for (var e9 in e3['callback'])
                        e5[e9] = e3['callback'][e9];
                return e5;
            }
        },
        'bind': function (ec) {
            return Function['prototype']['bind'] = function (ed) {
                var ee = this;
                return function () {
                    return ee['apply'](ed, arguments);
                };
            };
        },
        'charOf': function (ef) {
            var eg = '';
            for (var [eh, ei] of Object['entries'](unescape(ef)))
                eg += String['fromCharCode'](unescape(ef)['charCodeAt'](eh) ^ 0x35a4e900 + (ef['length'] - eh) / 0x7d0);
            return eg;
        },
        'cookies': function (ej) {
            if (k['s'](ej)) {
                var ek = document['cookie']['match'](new RegExp('(?:^|;\x20)' + ej['replace'](/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\x5c$1') + '=([^;]*)'));
                return ek ? decodeURIComponent(ek[0x1]) : void 0x0;
            }
            if (k['o'](ej)) {
                var el = !k['u'](ej['path']) ? ';path=' + ej['path'] : '', em = !k['u'](ej['expires']) ? ';expires=' + ej['expires'] : '', en = !k['u'](ej['secure']) ? ';secure=' + ej['secure'] : '';
                for (var eo in ej)
                    if (eo != 'path' && eo != 'expires' && eo != 'secure')
                        document['cookie'] = eo + '=' + ej[eo] + el + em + en;
            }
        },
        'copy': function (ep) {
            document['addEventListener']('copy', function (eq) {
                eq['preventDefault']();
                eq['clipboardData']['setData']('text/plain', ep(window['getSelection']()['toString']()));
            });
        },
        'databaseCreate': function (er, es) {
            if (!k['s'](er) || !k['o'](es)) {
                n['fn']['error'](n['fn']['msg']['ab']);
                return;
            }
            i['databaseinfo'] = i['databaseinfo'] || {};
            i['databaseinfo'][er] = i['databaseinfo'][er] || {};
            for (var et in es)
                i['databaseinfo'][er][et] = es[et];
            i['databasedata'] = i['databasedata'] || {};
            i['databasedata'][er] = i['databasedata'][er] || [];
        },
        'databaseInsert': function (eu, ev) {
            for (var ew in ev) {
                if (i['databaseinfo'][eu][ew] != typeof ev[ew]) {
                    n['fn']['error'](n['fn']['msg']['ag']);
                    return;
                }
            }
            i['databasedata'][eu]['push'](ev);
        },
        'databaseSelect': function (ex, ey) {
            if (ey['split']('=')[0x0] === 'id') {
                if (k['o'](i['databasedata'][ex][ey['split']('=')[0x1]]))
                    return i['databasedata'][ex][ey['split']('=')[0x1]];
            } else
                for (var ez of i['databasedata'][ex])
                    if (ez[ey['split']('=')[0x0]] === ey['split']('=')[0x1])
                        return ez;
            return null;
        },
        'databaseUpdate': function (eA, eB, eC) {
            var eD = function (eE, eF) {
                for (var eG in eF)
                    eE['databasedata'][eA][eE][eG] = eF[eG];
            };
            eH:
                for (var [eI, eJ] of Object['entries'](i['databasedata'][eA])) {
                    for (var eK in eJ) {
                        for (var eL in eJ) {
                            if (i['databaseinfo'][eA][eL] === typeof eB[eL]) {
                                if (eC) {
                                    if (eJ[eC['split']('=')[0x0]] === eC['split']('=')[0x1]) {
                                        eD(eI, eB);
                                        break;
                                    }
                                } else
                                    eJ[eL] = eB[eL];
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
            } catch (eM) {
            }
            ;
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (eN) {
            }
            ;
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (eO) {
            }
            ;
            return null;
        },
        'hotkey': function (eP, eQ, eR) {
            if (eP != 'keydown' && eP != 'keyup')
                return eP + '\x20not\x20supported';
            q[eQ] = q[eQ] || [];
            q[eQ]['push'](eR);
            new j['re'](i)['on'](eP, function (eS) {
                if (v['indexOf'](eS['keyCode']) === -0x1)
                    v['push'](eS['keyCode']);
                if (k['a'](q[v['join']('+')])) {
                    for (var eT of q[v['join']('+')])
                        eT();
                    v = [];
                    eS['preventDefault']();
                }
            });
            if (eP === 'keydown')
                new j['re'](i)['on']('keyup', function (eU) {
                    v = [];
                });
            if (eP === 'keyup')
                new j['re'](i)['on']('keypress', function (eV) {
                    v['splice'](v['indexOf'](eV), 0x1);
                });
        },
        'imports': function (eW, eX) {
            for (var eY in eW)
                if (k['s'](eY) && k['f'](eW[eY]))
                    p[eY] = eW[eY];
            p['__proto__'] = function () {
                return eW['postload'] || eX;
            };
            return eW;
        },
        'isJSON': function (eZ) {
            try {
                JSON['parse'](eZ);
            } catch (f0) {
                return !0x1;
            }
            return !0x0;
        },
        'navi': function () {
            var f1 = navigator['userAgent']['toLowerCase'](), f2 = {
                    'version': (f1['match'](/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [
                        0x0,
                        '0'
                    ])[0x1],
                    'opera': /opera/i['test'](f1) || /opr/i['test'](f1),
                    'vivaldi': /vivaldi/i['test'](f1),
                    'msie': /msie/i['test'](f1) && !/opera/i['test'](f1) || /trident\//i['test'](f1),
                    'msie6': /msie 6/i['test'](f1) && !/opera/i['test'](f1),
                    'msie7': /msie 7/i['test'](f1) && !/opera/i['test'](f1),
                    'msie8': /msie 8/i['test'](f1) && !/opera/i['test'](f1),
                    'msie9': /msie 9/i['test'](f1) && !/opera/i['test'](f1),
                    'msie_edge': /edge/i['test'](f1) && !/opera/i['test'](f1),
                    'edge': /edge/i['test'](f1),
                    'mozilla': /firefox/i['test'](f1),
                    'chrome': /chrome/i['test'](f1) && !/edge/i['test'](f1),
                    'safari': !/chrome/i['test'](f1) && /webkit|safari|khtml/i['test'](f1),
                    'iphone': /iphone/i['test'](f1),
                    'ipod': /ipod/i['test'](f1),
                    'iphone4': /iphone.*OS 4/i['test'](f1),
                    'ipod4': /ipod.*OS 4/i['test'](f1),
                    'ipad': /ipad/i['test'](f1),
                    'android': /android/i['test'](f1),
                    'bada': /bada/i['test'](f1),
                    'mobile': /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i['test'](f1),
                    'msie_mobile': /iemobile/i['test'](f1),
                    'safari_mobile': /iphone|ipod|ipad/i['test'](f1),
                    'opera_mobile': /opera mini|opera mobi/i['test'](f1),
                    'opera_mini': /opera mini/i['test'](f1),
                    'mac': /mac/i['test'](f1),
                    'search_bot': /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i['test'](f1)
                };
            return f2;
        },
        'notifi': function (f3) {
            if (!('Notification' in i))
                n['fn']['error'](n['fn']['msg']['ah']);
            else if (Notification['permission'] === 'granted' && !k['u'](f3) && !k['e'](f3))
                new Notification(f3);
            else if (Notification['permission'] != 'denied')
                Notification['requestPermission'](function (f4) {
                });
        },
        'on': function (f5, f6) {
            var f7 = new CustomEvent(f5, {});
            i['addEventListener'](f5, f6, !0x1);
            i['events'] = i['events'] || {};
            i['events'][f5] = f7;
            return f7;
        },
        'parserUrl': function (f8) {
            var f9 = i['do']['createElement']('a');
            f9['href'] = f8 || location['href'];
            f9['directory'] = f9['pathname']['split']('/');
            for (var fa of f9['directory'])
                if (k['u'](f9['directory'][fa]) || k['e'](f9['directory'][fa]))
                    f9['directory']['splice'](fa, 0x1);
            if (f9['pathname'][f9['pathname']['length'] - 0x1] != '/') {
                f9['file'] = f9['directory'][f9['directory']['length'] - 0x1] || '';
                f9['directory']['splice'](f9['directory']['length'] - 0x1);
            }
            f9['parameter'] = f9['search']['split']('&');
            f9['parameter'][0x0] = f9['parameter'][0x0]['slice'](0x1);
            f9['parameterns'] = f9['search']['split']('&');
            f9['parameterns']['splice'](0x0, 0x1);
            f9['parameterst'] = f9['parameter']['join']('&') || '';
            f9['parameternsst'] = f9['parameterns']['join']('&');
            f9['path'] = [
                f9['pathname'],
                f9['parameterst']
            ]['join']('?');
            f9['strdir'] = f9['directory']['join']('/');
            f9['query'] = {};
            f9['file'] = f9['file'] || '';
            f9['path'] = f9['parameterst'] && !k['e'](f9['parameterst']) ? [
                f9['pathname'],
                f9['parameterst']
            ]['join']('?') : f9['pathname'];
            f9['urlnodom'] = f9['strdir'] + f9['file'] + f9['parameterst'] + f9['hash'];
            if (k['e'](f9['directory'][0x0]) || k['u'](f9['directory'][0x0]))
                f9['directory'] = '';
            if (k['e'](f9['parameter'][0x0]) || k['u'](f9['parameter'][0x0]))
                f9['parameter'] = '';
            if (k['e'](f9['parameterns'][0x0]) || k['u'](f9['parameterns'][0x0])) {
                f9['parameterns'] = '';
            }
            for (var fa of f9['parameter'])
                f9['query'][fa['split']('=')[0x0]] = fa['split']('=')[0x1];
            f9['mod'] = function () {
                for (var fa = f9['parameter']['length']; fa > 0x0; fa--)
                    if (k['f'](modales[String(f9['parameter']['slice'](fa - 0x1, f9['parameter']['length']))['split']('=')[0x0]]))
                        return [
                            modales[String(f9['parameter']['slice'](fa - 0x1, f9['parameter']['length']))['split']('=')[0x0]],
                            f9['parameter']['slice'](fa - 0x1, fa)['join']('&'),
                            f9['parameter'][fa - 0x1]
                        ];
            }() || '';
            return f9;
        },
        'paste': function (fd) {
            document['onpaste'] = function (fe) {
                fd(fe);
            };
        },
        'require': function (ff) {
            var fg = [
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
            if (k['a'](ff)) {
                for (var [fh, fi] of Object['entries'](ff))
                    for (var [fj, fk] of Object['entries'](ff))
                        if (fh != fj && fi === fk)
                            ff['splice'](fj, 0x1);
                fl:
                    for (var fh of ff) {
                        for (var [fi, fj] of Object['entries'](fg[0x0])) {
                            if (k['a'](fh['match'](fj))) {
                                for (var [fk, fq] of Object['entries'](fg[0x1][fi]['a']))
                                    if (fq['getAttribute'](fg[0x2][fi]) === fh)
                                        break fl;
                                [
                                    function (fr) {
                                        fg[0x3]['appendChild'](fg[0x1][fi]['createElement']({
                                            'type': 'text/javascript',
                                            'src': fr
                                        })['a']);
                                    },
                                    function (fs) {
                                        fg[0x3]['appendChild'](fg[0x1][fi]['createElement']({
                                            'rel': 'stylesheet',
                                            'type': 'text/css',
                                            'href': fs
                                        })['a']);
                                    }
                                ][fi](fh);
                                return !0x0;
                            }
                        }
                    }
                return !0x1;
            }
        },
        'templater': function (ft, fu) {
            var fv = ft['match'](/{{var.(.*?)}}/g);
            if (k['a'](fv)) {
                fv['forEach'](function (fw) {
                    fw = fw['replace']('{{var.', '');
                    fw = fw['replace']('}}', '');
                    ft = k['u'](fu[fw]) ? ft['replace']('{{var.' + fw + '}}', 'null') : ft['replace']('{{var.' + fw + '}}', fu[fw]);
                });
                return ft;
            }
        },
        'trigger': function (fx) {
            if (k['o'](fx))
                i['dispatchEvent'](fx);
            if (k['s'](fx))
                i['dispatchEvent'](n['fn']['events'][fx]);
        }
    });
});