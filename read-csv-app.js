// read a csv file
import csv from 'csv-parser';
import fs from 'fs';

const language = process.argv[2];

fs.createReadStream('data/data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row)
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    })

fs.createReadStream('data/languages.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.language === language) {
            console.log(row);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    })