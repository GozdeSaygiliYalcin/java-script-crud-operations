const teachers = [];
const students = [];
const allCourses = ["java", "sql", "javascript", "html"];

const createTeacher = (firstName, 
  lastName, 
  allCourses, 
  isActive
  //courses, createdAt, updatedAt, isActive
  ) => {
    const teacher = {
      id: (teachers.length+1),
      firstName,
      lastName,
      courses: allCourses,
      createdAt: new Date,
      updatedAt: new Date,
      isActive: true,
    }

    let isTeacherExists = false;

    teachers.forEach(teacher => {
      if(teacher.firstName === firstName && teacher.lastName === lastName) {
        console.log("The teacher already exists");
        isTeacherExists = true;
        return;
      }
    })

    if(isTeacherExists === false) {
      teachers.push(teacher);
    }

    // allCourses.forEach(course => {
    //   if(allCourses.includes(course)) {
    //     return allCourses;
    //   } 
    //   console.log("The course name is given wrong, please check");
    // })
}

createTeacher("boncuk", "saygili", "cs");
console.log(teachers);
createTeacher("boncuk", "saygili");
console.log(teachers);
createTeacher("sütlaç", "saygili");


const createStudent= (firstName, lastName, 
  //courses, createdAt, updatedAt, isActive
  ) => {
    const student = {
      id: (students.length+1),
      firstName,
      lastName,
      courses: allCourses,
      teachers: teachers,
      score,
      createdAt: new Date,
      updatedAt: new Date,
      isActive: true,
    }

    let isStudentExists = false;

    students.forEach(student => {
      if(student.firstName === firstName &&  student.lastName === lastName) {
        console.log("The student already exists");
        isStudentExists = true;
        return;
      }
    })

    if(isStudentExists === false) {
      students.push(student);
    }
}

createStudent("gozde", "yalcin", score=50);
createStudent("semih", "biygit", score=80);
console.log(students);


// function getAllStudents() {
//   try {
//       const students = await Student.find();
//       return students;
//   } catch (error) {
//       throw error;
//   }
// };