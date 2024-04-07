{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * public
   * private: 외부에서 절대 볼 수 없고, 접근할 수 없음
   * protected: 상속을 할 때, 외부에선 접근할 수 없지만, 상속한 자식 클래스에서만 접근 가능
   */
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level
    private coffeeBeans = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //static을 붙여서 어떤 object를 만들 수 있는 함수를 제공하는 것 -> constructor를 이용해서 생성하는 것을 금지하기 위해서 쓰는 것임
    //그래서 constructor를 private으로 만들어서 항상 static method를 이용할 수 있도록 권장하는 것이 좋다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker3 = CoffeeMaker.makeMachine(48);
  maker3.fillCoffeeBeans(2);
  console.log(maker3);

  class User {
    //접근할 때는 멤버변수처럼 접근
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    // 생성자에 바로 접근 제어자를 설정하면 바로 멤버 변수로 설정이 된다.
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.age);
  console.log(user.fullName);
}
