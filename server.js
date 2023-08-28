let express=require("express")
let app=express()
app.use(express.json())
app.use(function(req,res,next){
    res.header ("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    )
    res.header (
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
next();
})
var port=process.env.PORT||2450
app.listen(port,() =>console. log(`Node App listening on port ${port}!`))
customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack","Aditya"],
      students: ["Sam","Willie"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica","Willie"]
    }
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR","JAVASCRIPT"] }
  ];
  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["BOOTSTRAP"]
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];

app.post("/login",function(req,res){
    let body=req.body
    let {email,password}=body
    let index=customers.findIndex((a)=>a.email==email&&a.password==password)
    index==-1?res.status(500).send("Invalid Email or Password"):res.send(customers[index])
})
app.post("/register",function(req,res){
  let body=req.body
  let {role="",name=""}=body
  let newId=customers.reduce((a,c)=>a<c.custId?a=c.custId:a,0)
  let newcustomer={custId:newId+1,...body}
  customers.push(newcustomer)
  if(role=="student"){
    let newId1=students.reduce((a,c)=>a<c.id?a=c.id:a,0)
    let obj={id:newId1+1,name:name,dob: "",gender: "",about: "",courses: []}
    students.unshift(obj)
  }
  if(role=="faculty"){
    let newId1=faculties.reduce((a,c)=>a<c.id?a=c.id:a,0)
    let obj={id:newId1+1,name:name,courses:[]}
    faculties.unshift(obj)
  }
  res.send(newcustomer)
})

app.get("/getStudentNames",function(req,res){
  let studentNameArr=students.map((a)=>a.name)
  res.send(studentNameArr)
})

app.get("/getFacultyNames",function(req,res){
  let Arr=faculties.map((a)=>a.name)
  res.send(Arr)
})

app.get("/getCourses",function(req,res){
  res.send(courses)
})

app.put("/putCourse",function(req,res){
  let body=req.body
  let index=courses.findIndex((a)=>a.courseId==body.courseId)
  
  let oldCourse= courses[index]
  let newCourse=body
  let studentAdd=[]
  let studentRemove=[]
  let facultyAdd=[]
  let facultyRemove=[]

  newCourse.students.map((a)=>oldCourse.students.findIndex((b)=>b==a)>=0?"":studentAdd.push(a))
  oldCourse.students.map((a)=>newCourse.students.findIndex((b)=>b==a)>=0?"":studentRemove.push(a))
  
  newCourse.faculty.map((a)=>oldCourse.faculty.findIndex((b)=>b==a)>=0?"":facultyAdd.push(a))
  oldCourse.faculty.map((a)=>newCourse.faculty.findIndex((b)=>b==a)>=0?"":facultyRemove.push(a))
  
  

  students.map((a)=>studentAdd.findIndex((b)=>b==a.name)>=0?a.courses.push(newCourse.name):"")
  students.map((a)=>studentRemove.findIndex((b)=>b==a.name)>=0?a.courses.splice(a.courses.findIndex((c)=>c==newCourse.name),1):"")

  faculties.map((a)=>facultyAdd.findIndex((b)=>b==a.name)>=0?a.courses.push(newCourse.name):"")
  faculties.map((a)=>facultyRemove.findIndex((b)=>b==a.name)>=0?a.courses.splice(a.courses.findIndex((c)=>c==newCourse.name),1):"")

  courses[index]=body
  res.send(body)
})

app.get("/getStudents",function(req,res){
  let {page=1,course=""}=req.query
  let courseArr=course.split(",")
  let newArr=course?students.filter((a)=>a.courses.findIndex((b)=>courseArr.find((c)=>b==c))>=0):students
  let length=newArr.length
  let totalItems=length<page*3?length%3:3
  let items=newArr.filter((a,ind)=>ind>=(page-1)*3 && ind<(page)*3)
  let obj={page:page,totalItems:totalItems,totalNum:length,items:items}
  res.send(obj)

})

app.get("/getFaculties",function(req,res){
  let {page=1,course=""}=req.query
  let courseArr=course.split(",")
  let newArr=course?faculties.filter((a)=>a.courses.findIndex((b)=>courseArr.find((c)=>b==c))>=0):faculties
  let length=newArr.length
  let totalItems=length<page*3?length%3:3
  let items=newArr.filter((a,ind)=>ind>=(page-1)*3 && ind<(page)*3)
  let obj={page:page,totalItems:totalItems,totalNum:length,items:items}
  res.send(obj)

})

app.post("/postStudentDetails",function(req,res){
  let body=req.body
  let {name=""}=body
  let index=students.findIndex((a)=>a.name==name)
  students[index]=body
  res.send(body)
})

app.get("/getStudentDetails/:name",function(req,res){
  let name=req.params.name
  let value=students.find((a)=>a.name==name)
  res.send(value)
})

app.get("/getStudentCourses/:name",function(req,res){
  let name=req.params.name
  let newArr=courses.filter((a)=>a.students.findIndex((b)=>b==name)>=0)
  let newArr2=newArr.length==0?[]:newArr.map((a)=>a?{courseId:a.courseId,code:a.code,name:a.name,description:a.description}:"")
  res.send(newArr)
})

app.get("/getStudentClass/:name",function(req,res){
  let name=req.params.name
  let coursesArr=students.find((a)=>a.name==name).courses
  let arr=classes.filter((a)=>coursesArr.findIndex((b)=>b==a.course)>=0)
  res.send(arr)
})

app.get("/getFacultyCourses/:name",function(req,res){
  let name=req.params.name
  let newArr=courses.filter((a)=>a.faculty.findIndex((b)=>b==name)>=0)
  let newArr2=newArr.length==0?[]:newArr.map((a)=>a?{courseId:a.courseId,code:a.code,name:a.name,description:a.description}:"")
  res.send(newArr2)
})

app.get("/getFacultyClass/:name",function(req,res){
  let name=req.params.name
  let arr=classes.filter((a)=>a.facultyName==name)
  res.send(arr)
})

app.get("/getFacultyCoursesName/:name",function(req,res){
  let name=req.params.name
  let arr=faculties.find((a)=>a.name==name).courses
  res.send(arr)
})

app.post("/postClass",function(req,res){
  let body=req.body
  let newId=classes.reduce((a,c)=>a<c.classId?a=c.classId:a,0)
  let obj={classId:newId+1,...body}
  classes.push(obj)
  res.send(obj)
})

app.put("/postClass/:id",function(req,res){
  let id=req.params.id
  let body=req.body
  let index=classes.findIndex((a)=>a.classId==id)
  classes[index]=body
  res.send(body)
})

app.get("/getClass/:id",function(req,res){
  let id=req.params.id
  let index=classes.findIndex((a)=>a.classId==id)
  res.send(classes[index])
})
app.get("/getClassesAll",function(req,res){

  res.send(classes)
})

