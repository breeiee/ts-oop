{
  /**
   * Type Inference - 타입 추론
   * 함수 인자에는 타입을 명시하지 않으면 any가 할당됨 -> 명시해줘야함 or default parameter 지정 (이 방법도 타입을 명시해주는 것임), any 지양
   * 팀이나 프로젝트 할때 가독성을 생각해서 일관성있게 코딩하도록 스타일 가이드로 확정하면 좋다.
   * ex) void일 때는 명시하지 않지만 않은 경우 무조건 명시한다 등등
   */

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2); //result는 number로 자동으로 타입 추론됨
  //위처럼 짧은 코드의 경우 괜찮지만 코드가 보통 길고 복잡하므로 타입을 명시하는 것이 좋음 -> 스타일 가이드 정한 것에 따르거나..
}
