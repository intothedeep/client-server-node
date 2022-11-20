/**
 * deprecated
 * /// <reference path="../modules/namespace.d.ts" />
 *
 * import * as foo from 'namespace.d.ts';
 * import foo = require('namespace.d.ts');
 *
 */

import * as test from '../modules/namespace';
console.log('test:: ', test);
console.log('test externalModuleValue: ', test.externalModuleValue);
console.log('test sayHello: ', test.sayHello, test.sayHello('---------- tio lim'));
console.log('test sayHello2: ', test.sayHello2, test.sayHello2('---------- tio lim ---- 2'));

export const empty = 'practice module namespace';
