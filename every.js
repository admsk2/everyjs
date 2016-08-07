"use strict";
module.exports = {
    daysOfWeek: function (value, scope) {
        var t = ['*', '*', '*', '*', '*', '*'],
            v, r;

        let _v = function (value) {
            if (typeof value !== 'string' && (value > 7 || value < 1)) {
                let err = new Error('Please choose days from 1-7. First day is monday.');
                return err;
            } else {
                v = value;
            }
        }

        _v(value);

        let _r = function () {
            if (v.indexOf('monday') > -1 || v === 1) {t[5] = '1';}
            else if (v.indexOf('tuesday') > -1 || v === 2) {t[5] = '2';}
            else if (v.indexOf('wednesday') > -1 || v === 3) {t[5] = '3';}
            else if (v.indexOf('thursday') > -1 || v === 3) {t[5] = '4';}
            else if (v.indexOf('friday') > -1 || v === 3) {t[5] = '5';}
            else if (v.indexOf('saturday') > -1 || v === 3) {t[5] = '6';}
            else if (v.indexOf('sunday') > -1 || v === 3) {t[5] = '7';}
        }

        _r();
        r = '' + t.join(" ");
        return r;
    },

    general: function (value, scope) {
        var t = ['*', '*', '*', '*', '*', '*'],
            v, s, r;

        let _v = function (value) {
            if (typeof value === 'string') {
                v = parseInt(value);
            } else if (typeof value === 'number') {
                v = value;
            } else {
                let err = new Error('First parameter has to be a string or number.');
                return err;
            }
        }

        _v(value);

        let _s = function (scope) {
            if (typeof scope !== 'string') {
                let err = new Error('Second parameter has to be a string.');
                return err;
            } else {
                s = scope;
            }
        }

        _s(scope);

        let _r = function () {
            if (s.indexOf('second') > -1) {
                if (v > 30 || v === 0) {
                    let err = new Error('Invalid value');
                    return err;
                } else {
                    (v === 30) ? t[0] = '00,30': t[0] = '*/' + v;
                }

            } else if (s.indexOf('minute') > -1) {
                if (v > 30 || v === 0) {
                    let err = new Error('Invalid value');
                    return err;
                } else {
                    (v === 30) ? t[1] = '00,30': t[1] = '*/' + v;
                }
            } else if (s.indexOf('hour') > -1) {
                if (v > 12 || v === 0) {
                    let err = new Error('Invalid value');
                    return err;
                } else {
                    (v === 12) ? t[2] = '00,12': t[2] = '*/' + v;
                }
            } else if (s.indexOf('day') > -1) {
                if (v > 15 || v === 0) {
                    let err = new Error('Invalid value');
                    return err;
                } else {
                    (v === 15) ? t[3] = '00,15': t[3] = '*/' + v;
                }
            } else if (s.indexOf('month') > -1) {
                if (v > 6 || v === 0) {
                    let err = new Error('Invalid value');
                    return err;
                } else {
                    (v === 6) ? t[4] = '00,6': t[4] = '*/' + v;
                }
            }
        }

        _r();
        r = '' + t.join(" ");
        return r;
    }

}