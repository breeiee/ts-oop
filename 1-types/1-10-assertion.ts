{
  /**
   * Type Assertions
   * 좋은 방법은 아니지만 불가피하게 사용해야 할 때가 있음
   */

  //js에서는 any타입
  function jsStrToFunc(): any {
    return 2; // 2. 그런데 number를 리턴하면 실행하는 순간 undefined 리턴함
  }

  const result = jsStrToFunc(); // 1. 항상 js에서 string을 리턴한다고 가정
  console.log((result as string).length); // 1-1. 두 가지 방법으로 type assertion 가능
  console.log((<string>result).length); // 1-2. 두 가지 방법으로 type assertion 가능

  const wrong: any = 5;
  //하지만 wrong을 아래와 같이 단언하면 error발생 후 어플리케이션 종료됨 -> 정말 장담하는 경우가 아니라면 사용하지 않는 것이 좋음
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // const numbers = findNumbers(); // number[] | undefined
  const numbers = findNumbers()!; // number[]라고 무조건 단언 1-1 호출할 때 사용해도 되고,
  numbers!.push(1); // '!' 무조건 진짜 값이 있다고 확신할 때 사용 1-2 처리할 때 사용해도 됨\

  // 보통 DOM요소 무조건 확신할 수 있을 때 사용하기도 함
  const button = document.querySelector("class")!;
}
