{
  //JS
  function jsFetchNum(id) {
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TS
  function fetchNum(id: string): Promise<number> {
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    // function printName(firstName: string, lastName: string | undefined) <- 이 경우: 항상 두 번째 파라미터에도 undefined을 명시해줘야함
    console.log(firstName);
    console.log(lastName);
  }
  printName("Brie");
  printName("B", "R");

  //Rest
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur);
  }

  console.log(addNumbers(1, 3, 5));
  console.log(addNumbers(1, 3, 5, 7));
  console.log(addNumbers(1, 3, 5, 20));
}

/**
 * * type을 쓴다는 것
 * * 더 안정적으로 코딩할 수 있다.
 * * 조금 더 나은 문서화를 하는 효과도 볼 수 있다.
 * * 직관적으로 코드가 무엇을 하는 코드인지 확인할 수 있다.
 * * 미리 에러를 잡을 수 있다.
 */
