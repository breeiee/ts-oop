{
  //* Discriminated Union => 동일한 키 가지지만 state별로 다른 값
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function discriminatedLogin(): LoginState {
    return {
      result: "success",
      response: {
        body: "success!",
      },
    };
  }

  function discriminatedPrintLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
