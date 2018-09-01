const mongoose = require('mongoose')

const Temple3D = mongoose.model('temple3ds')


module.exports = {
    async index (req, res) {
        try {
            const model = await Temple3D.findOne({ title: req.params.id })
            res.send(model)
        } catch (err) {
            res.status(500).send({
                error: 'Unable to fetch data from DB'
            })
        }
    }
}
