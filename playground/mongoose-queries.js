const ObjectID = require('mongoose');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5d95008281d0f6280ad3eb1c1ç1';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5d9103fdcb2ac15a0ee4467e').then((user) => {
    if (!user) {
        return console.log('Unable to find error');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));