const 
    express = require('express'),
    router = express.Router(),
    Player = require('../controllers/players');

router.get('/', Player.index);
router.post('/', Player.create);
router.get('/:id', Player.show);
router.patch('/:id', Player.update);
router.delete('/:id', Player.delete);

module.exports = router;