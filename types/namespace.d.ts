// 이 파일에 작성되는 declare namespace 블록과 declare module 블록의 필드들에는 export 키워드가 기본으로 붙는다. 즉 굳이 또 붙여줄 필요가 없다.
// declare namespace LoggerNameSpace {
//     export const name: string;
// }

// declare namespace LoggerModule {
//     export const name: string;
//     const name_internal: string;
// }
declare const externalModuleValue: string;
declare function sayHello(str: string): void;
declare function sayHello2(str: string): string;
