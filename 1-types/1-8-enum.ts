{
  /**
   * Enum
   * ! 다른 모바일 클라이언트(Swift, Kotlin)와 데이터를 주고받는 경우에는 string union 타입을 이해할 수 없기 때문에
   * ! 서로 이해할 수 있는 enum을 사용함, 그 경우가 아니라면 string union 타입으로 대체해서 사용할 수 있음
   * enum(타입이 정확히 보장되지 X)보다는 타입이 보장되는 type alias를 권장
   * 좋은 문서: Why it is not good to use enums?[https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant]
   * Q&A:
   * union타입으로 심플하게 대체 가능한 경우라면 저는 enum 보다는 union을 더 선호하는 편이지만, 코딩 하다 보면 enum타입이 적합할 경우가 있어요 :)
   * 그럴때는 enum 사용하셔도 됩니다 👍 예시 ↓
   */
  // 이렇게 복잡한 union대신
  type Errors =
    | "error message simple version"
    | "error message complicated version"
    | "error message complicated detail version";
  // 이런 enum으로 사용
  enum EnumErrors {
    Short = "error message simple version",
    Long = "error message complicated version",
    Detail = "error message complicated detail version",
  }
  //위처럼 사용한다면 변수를 할당하는 곳에서 깔끔하게 아래처럼 사용가능
  const error = EnumErrors.Short;
  console.log(error);
  //하지만 type을 정의하는 용도가 아닌 관련된 상수를 묶는 용도로는 enum을 권장하지 않음, 이런 경우 보통 아래와 같이 사용함
  class AppConfig {
    static readonly SERVER_HOST = "...";
    static readonly MAX_RETRY = 5;
  }
  AppConfig.SERVER_HOST; // 값을 읽어옴
  // AppConfig 클래스에 상수값들을 묶어서 정의해 줄 수 있다. 그런데 이렇게 클래스로 하게 되면 인스턴스를 생성할 수 있음
  const app = new AppConfig();
  // 인스턴스를 생성할 목적이 아니라면 abstract class로 만들 수 있음
  abstract class ABAppConfig {
    static readonly SERVER_HOST = "...";
    static readonly MAX_RETRY = 5;
  }

  //JS
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  //TS
  enum Days {
    MONDAY, // 아무값도 지정 안되어 있으면 0, 1로 지정하면 밑에는 +=1, string(유추할 수 X)은 모두 지정해줘야함
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
  }
  console.log(Days.MONDAY);
  let day = Days.FRIDAY;
  // day = 10; // TS2322 error -> ts 5.0부터 해결
  console.log(day);
}
