import express from 'express';
import fs from 'fs';
import { format } from 'date-fns';
import path from 'path';


//declaration/initialization part
const app = express();
const port = 4000;

//using express
app.use(express.json());

//midware part

// Create a new timestamp file
app.get('/create', (req, res) => {
    let today = format(new Date(), 'dd-MM-yyyy hh-mm-ss');  //today stores the value of current data and time
    const timestampDir = 'Timestamp';
    if (!fs.existsSync(timestampDir)) {
        fs.mkdirSync(timestampDir);
    }
    //filepath denotes the path of the timestamps which are created and stored it as file named as the current data and time value
    const filepath = `${timestampDir}/${today}.txt`; 

    //the file is created and named as the current date 
    fs.writeFileSync(filepath, `${today}`, 'utf8');

    //if the status code is success the given message will be displayed in the ui
    res.status(200).send(`File created: ${today}`);
});

// Read all timestamp files
app.get('/read', (req, res) => {

    const timestampDir = 'Timestamp';
    if (!fs.existsSync(timestampDir)) {
        fs.mkdirSync(timestampDir);
    }

    //read the Timestamp folder using the method  readdirSync 
    const files = fs.readdirSync(timestampDir, 'utf8');

    //All of the Timestamp files are stored into a data array by mapping the files
    const data= files.map(file => {
        //each file will be stored in filepath as array
        const filepath = path.join(timestampDir, file);

//reading the files which stored inside the filepath array and stored the array into timestamp
        const timestamp= fs.readFileSync(filepath, 'utf8');

        //returns the array which contains all the file data
return timestamp
    });
   
    //displays the data in json format which contain the array of all files stored in 'data'
    res.status(200).json(data)
});

//port running on the specified path
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
