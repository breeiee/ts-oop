{
  //5-3 제네릭 조건: constrains

  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time~!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time~!");
    }
    workPartTime() {}
  }

  /**
   * 그냥 Employee가 되고 세부 class 정보를 잃어버린다.
   * 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 '똥'이다~!
   * 타입을 광범위하게 만들면 나중에 내 발등에 내가 총 쏘게 됨...☆
   */
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  //meaning: T는 generic인데 Employee를 확장한 애들만 기능하다는 뜻
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  // const ellieAfterPay = payBad(ellie) as FullTimeEmployee; //type casting 하는 수밖에..
  // const bobAfterPay = payBad(bob);

  const ellieAfterPay = pay(ellie) as FullTimeEmployee; //type casting 하는 수밖에..
  const bobAfterPay = pay(bob);
  ellieAfterPay.workFullTime(); // payBad는 Employee를 리턴해서 불가능ㄴ

  const obj = {
    name: "ellie",
    age: 20,
  };

  const obj2 = {
    animal: "🐬",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); //ellie
  console.log(getValue(obj, "age")); //20
  console.log(getValue(obj2, "animal")); //🐬
}
