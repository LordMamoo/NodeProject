// read a csv file
import csv from 'csv-parser';
import fs from 'fs';
import { createObjectCsvWriter } from "csv-writer";

// const language = process.argv[2];
const year = process.argv[2];
let after = 0;
let before = 0;

// fs.createReadStream('data/data.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         console.log(row)
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     })

// fs.createReadStream('data/languages.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         if (row.language === language) {
//             console.log(row);
//         }
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     })

fs.createReadStream('data/usedCars.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.year >= year) {
            after = after + 1;
        } else {
            before = before + 1;
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        console.log(after)
        console.log(before)
    })

    // function doThisAfterRead();

    const csvWriter = createObjectCsvWriter({
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