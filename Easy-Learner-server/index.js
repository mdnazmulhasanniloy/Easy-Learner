const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors());

const categories = require('./data/category.json');
const course = require('./data/course.json')

app.get('/', (req, res)=>{res.send('Course saver is running')});


//course categories 
app.get('/category', (req, res)=>{
    
    
    res.send(categories)

    
});

//show all course 
app.get('/course', (req, res)=>{
        res.send(course)
    
});

//show course using select in category id
app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === '4'){
        res.send(course)
    }else{
        const category_course = course.filter(n=> n.category_id === id)
        res.send(category_course);
    }
});


//course id selected
app.get('/course/:id',(req, res)=>{

    const idn = req.params.id;
    const selected_course = course.find(n =>n.id === id);

    res.send(selected_course)

});
