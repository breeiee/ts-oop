{
  // never -> 리턴하지 않는 함수, 리턴하는 값이 없다.
  function throwError(message: string): never {
    // message -> server에 log 남기고 어플리케이션에서 에러 던짐
    throwError(message);
    // while(true){}
  }
}
