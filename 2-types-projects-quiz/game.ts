/**
 * Let's make a game 🕹
 */
type PositionType = {
  x: number;
  y: number;
};

type DirectionType = "up" | "down" | "left" | "right" | "error_test";

let position: PositionType = { x: 0, y: 0 };

function move(direction: DirectionType) {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    //error test case 만들어주면 ts compiler error 사라짐
    case "error_test":
      position.x -= 2;
      break;
    default:
      //error trick
      //error_test(string)은 Never type이 될 수 없다는 error
      const invalid: never = direction;
      throw new Error(`Unknown direction: ${invalid}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
