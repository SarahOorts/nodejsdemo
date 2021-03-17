const Message = require("../models/message")
function store(req, res){
    let m = new Message();
    m.from = "Joris",
    m.to = "Ward",
    m.Message = "Hi, what's up!";

    m.save((err, doc) => {
        res.json(doc);
    });

    //save to db
    res.json({
        status: "succes",
        message: "Message was created",
        followers: 123456,
    });
}

function getOne(req, res){
    //(req, res) => { //id is vaak getal achter in de string toegevoegd
        //   res.send('api messages')
        let id = req.params.id;
        
        res.json(
            {
                from: "joris",
                to: "nick",
                text: `Here is message with id ${id}`,
            });
}

module.exports.store = store;
module.exports.getOne = getOne;
    
// controllers wat in de message moet staan