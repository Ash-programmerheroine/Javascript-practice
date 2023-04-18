function gradeCalculator(grade) {
    if (typeof grade !== 'number' || grade < 0 || grade > 100) {
      return "Error: Please provide a valid numerical grade between 0 and 100";
    } else if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  const numericalGrade = 85;
  const letterGrade = gradeCalculator(numericalGrade);
  console.log(`Numerical grade: ${numericalGrade}, Letter grade: ${letterGrade}`);
    