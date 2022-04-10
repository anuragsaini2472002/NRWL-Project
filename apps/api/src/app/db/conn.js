const mongoose = require('mongoose');

const DB = 'mongodb+srv://crud_project:Anurag123@cluster0.bkuxg.mongodb.net/merncrud?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection start with mongoDB")
).catch((err) => console.log(err.message)
);