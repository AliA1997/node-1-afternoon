let messages = [];
let id = 0;
module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        let message = {
            text, 
            time,
            id,
        };
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let { text, time } = req.body;
        let { id } = req.params;
        //Give it a new updated object.
        messages[id] = Object.assign({
            text: text || messages[id].text,
            time: time || messages[id].time,
            id,
        });
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        let { id } = req.params;
        messages.splice(id, 1);
        res.status(200).send(messages);
    },
}