/* eslint-disable ts/explicit-function-return-type */
/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/no-unsafe-assignment */
// 参考 ../../static/07_image_01.png
// 第一个特殊点
/**
 * ECMAScript/JavaScript的私有的字段，在TypeScript中不能使用 private, protected, public, abstract，因为是没有意义的
 */
// 第二个特殊点
abstract class MyClass {
  private a: number = 100;
}

let x2 = new MyClass();
// @ts-ignore
console.log(x2.a);

// 第三个特殊点
class MyClass1 {
  constructor(public a: number) {};
}
let x3 = new MyClass1(100);
console.log(x2.a);

// 第四个特殊点
class MyClass2 {
  // 私有的
  private constructor(public a: number) { }
  foo() {}

  static create() {
    return new MyClass2(100);
  }
}
// let x4 = new MyClass2(); // 不能直接 new
let x4 = MyClass2.create(); // 类似于工厂方法

class MyClass2_1 {
  // 保护的
  protected constructor(public a: number) { }
  static create() {
    return new MyClass2_1(100);
  }
}
class MyClass2_1Ex extends MyClass2_1 {
  constructor() {
    super(200);
  }
}
/**
 * abstract 的构造方法不能够使用，是因为这样会指一个它的子类不能被构建，它的“抽象”应该是指子类自身是抽象的，而不是指自身是不是抽象的，这样会使它和它的子类都无法被 new 出来
 * 所以 abstract 必须写在类声明上，这样才有意义
 */

// 其他
class MyClass4 {
  // 可选
  a?: string = "123";
  // 只读，不能写
  readonly b?: string = "132";

  // 参数可以是可选的，但是必须放在最后一个参数
  foo(p1: string, p2?: string) {}
}
