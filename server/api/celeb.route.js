const router = require("express").Router();
const { Celeb } = require("../db/models");


router.get("/", (req, res, next) => {
  Celeb.findAll({})
    .then(celebs => res.json(celebs))
    .catch(next);
});

router.get('/:celebId', (req, res, next) => {
	Celeb.findById(req.params.celebId)
	.then(celeb => res.json(celeb))
	.catch(next);
})

module.exports = router;
