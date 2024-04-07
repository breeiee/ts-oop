{
  // Array - 두 가지 표현방법 모두 가능 (기능의 차이 X), readOnly string[] 만 가능 -> 통일성을 위해 string[] 추천
  const fruits: Array<string> = ["a", "b"];
  const fruitArray: string[] = ["a", "b"];

  // Tuple - 추천하지 않음, index로 값을 찾아 확인하는 방법 또는 사용하는 곳에서 임의로 결정하고 사용하는 것이 효율적이지 않음 -> object나 class를 통해 명시적으로 바로 알 수 있고 접근 가능
  // Tuple대신 interface, type alias, class 사용하는 것이 좋음
  let student: [string, number];
  student = ["name", 20];
  student[0]; // 'name'
  //object : student.name
  // 불편함을 조금 피하는 방법 - destructuring
  const [name, age] = student;

  //동적으로 리턴하는데, 동적으로 사용자가 이름을 정의해서 쓸 경우에는 tuple이 유용할 수 있음
}
