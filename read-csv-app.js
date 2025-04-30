// read a csv file
import csv from 'csv-parser';
import fs from 'fs';

fs.createReadStream('data/data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    })