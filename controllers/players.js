const Player = require('../models/player');

exports.index = (req, res) => {
    Player.find({}, (err, players) => {
        if (err) res.json({ success: true, err });
        res.json({ success: true, players })
    })
};

exports.show = (req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if (err) res.json({ success: true, err });
        res.json({ success: true, player })
    })
};

exports.create = (req, res) => {
    Player.create(req.body, (err, player) => {
        if (err) res.json({ success: true, err });
        res.json({ success: true, player })
    });
};

exports.update = (req, res) => {
    let { body, params } = req;
    Player.findByIdAndUpdate(params.id, body, { new: true }, (err, player) => {
        if (err) res.json({ success: true, err });
        res.json({ success: true, player })
    })
}

exports.delete = (req, res) => {
    Player.findByIdAndDelete(req.params.id, (err, player) => {
        if (err) res.json({ success: true, err });
        res.json({ success: true, player })
    })
}