function studentData(name, ...scores) {
   let total = 0;
   for (const score of scores) {
      total += score;
   }
   console.log(name, ":", total);
}

studentData('Abc', 50, 60, 30, 70, 60);
