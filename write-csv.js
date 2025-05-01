import { createObjectCsvWriter } from "csv-writer";
// const csvWriter1 = createObjectCsvWriter({
//     path: 'data/students.csv',
//     header: [
//         {id: 'name', title: 'FirstName'},
//         {id: 'status', title: 'Status'}
//     ],
//     append:false
// });

// const students = [
//     {name: 'Jake', status: 'full'},
//     {name: 'Matthew', status: 'part'},
//     {name: 'Brad', status: 'full'}
// ]

// csvWriter.writeRecords(students)
// .then(()=>{
//     console.log('completed')
// })

const csvWriter2 = createObjectCsvWriter({
    path: 'data/newerCars.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'first_name', title: 'First Name'},
        {id: 'last_name', title: 'Last Name'},
        {id: 'email', title: 'Email'},
        {id: 'gender', title: 'Gender'},
        {id: 'title', title: 'Title'},
        {id: 'make', title: 'Make'},
        {id: 'model', title: 'Model'},
        {id: 'color', title: 'Color'},
        {id: 'year', title: 'Year'}
    ],
    append:false
});