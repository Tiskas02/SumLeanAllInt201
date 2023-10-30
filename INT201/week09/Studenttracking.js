const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  //let studentAttendence = students[0]
  //let studentAttendanceTime = studentAttendence.attendance
  function getAttendanceRate(student) {
      let totalattendance = 0;
      let attendances = 0;
        for (const attendance of student.attendance) {
            if (attendance){
              attendances++
            }
            totalattendance++
        }
      let averageAttendance = (attendances / totalattendance)*100
  return averageAttendance
      }
      

  function getAvgScore(student){
    let totalScore = 0;
    let count = 0;
    for (const score of student.testScores) {
      totalScore += score;
      count++;
    }
      const averageScore = totalScore / count;
      return averageScore
      // averageScores.push(averageScore);
    }
  // }

 let avgScore= getAvgScore(students[0]);
 console.log(avgScore);

function underPerformStudent(student){
  
}