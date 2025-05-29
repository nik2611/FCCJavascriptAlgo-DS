// Average Score Calculation
function getAverage(scores) {
  let sum = 0, 
  result = 0;
  for (const score of scores) {
    sum += score;
  }
  result = sum/scores.length;
  return result;
}

// Grade Calculation
function getGrade(score) {
  let grade;
  if(score === 100) {
    grade = "A++";
  } else if(score >= 90 && score <= 99) {
    grade = "A";
  } else if(score >= 80 && score <= 89) {
    grade = "B";
  } else if(score >= 70 && score <= 79) {
    grade = "C";
  } else if(score >= 60 && score <= 69) {
    grade = "D";
  } else if(score >= 0 && score <= 59) {
    grade = "F";
  }
  return grade;
}

// Passing Grade Check
function hasPassingGrade(score) {
  let grade = getGrade(score);
  if(grade === "F") {
    return false;
  } else {
    return true;
  }
}

// Student Message Generation
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);
  if(hasPassingGrade(studentScore)) {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course."
} else {
  return "Class average: " + average + ". Your grade: " + grade + ". You failed the course."
}
}