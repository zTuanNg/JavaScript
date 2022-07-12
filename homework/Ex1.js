
const grades = [
    {name: 'John', grade: 8, sex: 'M'}, // 8
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'}, // 5
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'} // 9
   ]
   





                // 1: Viết function tính thứ hạng trung bình của cả lớp
const avgGrade = Object.keys(grades).reduce((sum,key)=>{
    return (sum + grades[key].grade);
},0) / grades.length;
console.log('1 : thứ hạng trung bình của cả lớp')
console.log(avgGrade)
console.log('----------------------------------------------------------------')




                // 2: Viết function tính thứ hạng trung bình của nam trong lớp
const arrMale = grades.filter(male => male.sex === 'M');
const avgMaleGrade = Object.keys(arrMale).reduce((sum,key)=>{
    return (sum + arrMale[key].grade);
},0) / arrMale.length;
console.log('2 thứ hạng trung bình của nam trong lớp')
console.log(avgMaleGrade);
console.log('----------------------------------------------------------------')



                // 3: Viết function tính thứ hạng trung bình của nu trong lớp
const arrFemale = grades.filter(f => f.sex === 'F');
const avgFemaleGrade = Object.keys(arrFemale).reduce((sum,key)=>{
    return (sum + arrFemale[key].grade);
},0) / arrFemale.length;
console.log('3: thứ hạng trung bình của nu trong lớp')
console.log(avgFemaleGrade)
console.log('----------------------------------------------------------------')


                // 4 Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const highestMaleGrade = arrMale.reduce((m1,m2) => m1.grade > m2.grade ? m1 : m2)
const arrHighestMaleGrade = grades.filter(m => m.grade === highestMaleGrade.grade);
console.log('4: học viên Nam có thứ hạng cao nhất trong lớp')
console.log(arrHighestMaleGrade)
console.log('----------------------------------------------------------------')



                // 5 Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const highestFemaleGrade = arrFemale.reduce((fm1,fm2) => fm1.grade > fm2.grade ? fm1 : fm2)
const arrHighestFemaleGrade = grades.filter(fm => fm.grade === highestFemaleGrade.grade);
console.log('5 : học viên Nữ có thứ hạng cao nhất trong lớp')
console.log(arrHighestFemaleGrade)
console.log('----------------------------------------------------------------')



                // 6 Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const lowestMale = arrMale.reduce((m1,m2) => m1.grade < m2.grade? m1 : m2);
const arrLowestMale = arrMale.filter(m => m.grade === lowestMale.grade);
console.log('6: học viên Nam có thứ hạng thấp nhất trong lớp')
console.log(arrLowestMale);
console.log('----------------------------------------------------------------')



                // 7 Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const lowestFemale = arrFemale.reduce((fm1,fm2) => fm1.grade < fm2.grade? fm1:fm2);
const arrLowestFemale = arrFemale.filter(fm => fm.grade === lowestFemale.grade);
console.log('7: học viên Nữ có thứ hạng thấp nhất trong lớp')
console.log(arrLowestFemale)
console.log('----------------------------------------------------------------')



                // 8 Viết function thứ hạng cao nhất của cả lớp
const highestGradeStudent = grades.reduce((s1,s2) => s1.grade> s2.grade? s1:s2);
const highestGrade = highestGradeStudent.grade;
console.log('8: thứ hạng cao nhất của cả lớp')
console.log(highestGrade)
console.log('----------------------------------------------------------------')



                // 9 Viết function thứ hạng thấp nhất của cả lớp
const lowestGradeStudent = grades.reduce((s1,s2) => s1.grade> s2.grade? s2:s1);
const lowestGrade = lowestGradeStudent.grade;
console.log('9 : thứ hạng thấp nhất của cả lớp')
console.log(lowestGrade)
console.log('----------------------------------------------------------------')



                // 10 Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
console.log('10 : Lấy ra danh sách tất cả học viên Nữ trong lớp')
console.log(arrFemale)


                // 11 Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const arrSortByName = grades.sort((s1,s2)=> {return s1.name.localeCompare(s2.name)});
console.log("11 sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái ")
console.log(arrSortByName)
console.log('----------------------------------------------------------------')

// 12 Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

const arrSortGradeDesc = grades.sort((s1,s2) => {return s2.grade - s1.grade});
console.log("12 sắp xếp thứ hạng học viên theo chiều giảm dần")
console.log(arrSortGradeDesc)
console.log('----------------------------------------------------------------')



            // 13 Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const arrFemaleNameStartWithJ = arrFemale.filter(fm => fm.name[0] === "J");
console.log('13: Lấy ra học viên Nữ có tên bắt đầu bằng “J”')
console.log(arrFemaleNameStartWithJ)
console.log('----------------------------------------------------------------')


            // 14 Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const top5Grade = new Array();
for(var i = 0 ; i < 5; i++){
    top5Grade.push(arrSortGradeDesc[i]);
}
console.log('14 top 5 người có thứ hạng cao nhất trong lớp')
console.log(top5Grade)

