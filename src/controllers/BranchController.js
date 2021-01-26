const Branch = require('../models')
const Op = require('../models').Sequelize.Op
const createError = require('http-errors')

module.exports = {
    async autocomplete(req, res) {
        try {
            let branches = ''
            const q = req.query.q
            const limit = req.query.limit || 10
            const offset = req.query.offset || 0

            if(q)
            {
                branches = await Branch.findAll({
                    where:{
                        ifsc: {
                            [Op.like]: 'q%'
                        }
                    },
                    limit: limit,
                    offset: offset,
                    order: ['ifsc']
                })
            }
            res.send(branches)
        } catch (error) {
            console.error(`Not able to perform autocomplete!!!`);
            throw createError(500, `Not able to autocomplete`)
        }
    }
    ,
    async search(req, res) {
        
    }
}