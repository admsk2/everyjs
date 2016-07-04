module.exports = {
    five: function (value, scope) {},

    six: function (value, scope) {
        var t = ['*','*','*','*','*','*'],
            v, s, r;

        let _v = function (value) {
            if (typeof scope === 'string') {
                v = parseInt(value);
            } else if (typeof scope === 'number') {
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
        
        
        
        _r = function() {
            switch (s):
                case ('second' || 'seconds'):
                    r = function() {
                    let _t = t;
                    (s == 30) ? _t[0] = '00, 30' : _t[0] = '*/'+s;
                    }
                break;  
        }

        //
        return r;

    }
}