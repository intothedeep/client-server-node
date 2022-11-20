/*
- before internal module 
- now changes to namespace

declare module Logger {
    export const hello = 123;
    
}

*/

// namespace like internal module : new way in typescript
// deprecated
// export namespace Logger {
//     export const name = 'namespace logger';
// }

// internal module
// deprecated
// export module Logger {
//
//     const name_internal = 'name does not exported';
// }

// external module: export import를 사용한 파일 그 자체
export const externalModuleValue = 'external module value';

export const sayHello: (s: string) => string = (str: string) => {
    console.log('=> function called: sayHello:: ', str);
    return str;
};

export const sayHello2: (s: string) => string = function (str: string): string {
    console.log('=> function called: sayHello:: ', str);
    return str;
};
