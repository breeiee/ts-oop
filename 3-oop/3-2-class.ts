{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /**
     * BEANS_GRAM_PER_SHOT = 7; -> object를 만들 때마다 중복적으로 생성 -> 메모리 낭비 가능성 있음
     * CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 32 }
     * CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 28 }
     *  static BEANS_GRAM_PER_SHOT = 7;
     * CoffeeMaker { coffeeBeans: 32 }
     * CoffeeMaker { coffeeBeans: 28 }
     */

    static BEANS_GRAM_PER_SHOT = 7; // class level
    coffeeBeans = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker1 = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(28);

  console.log(maker1);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(48);
  console.log(maker3);
}
