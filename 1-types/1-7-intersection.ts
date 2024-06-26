{
  // Intersection Type : &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "Brie",
    score: 100,
    employeeId: 123,
    work: () => {},
  });
}
