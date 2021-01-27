const Branch = require('../models/Branch')
const { Op } = require("sequelize");
const createError = require('http-errors')

module.exports = {
    async autocomplete(req, res) {
        try {
            let branches = ''
            const q = req.query.q.toUpperCase()
            const limit = (req.query.limit)? req.query.limit : 10
            const offset = (req.query.offset)? req.query.offset : 0

            if(q)
            {
                branches = await Branch.findAll({
                    attributes:['ifsc', 'bank_id','branch', 'address', 'city', 'district', 'state'],
                    where:{
                        [Op.or]: [
                            {ifsc: {[Op.like]: `${q}%`}},
                            {branch: {[Op.like]: `${q}`}},
                            {address: {[Op.like]: `%${q}%`}},
                            {city: {[Op.like]: `${q}`}},
                            {district: {[Op.like]: `${q}`}},
                            {state: {[Op.like]: `${q}`}}
                        ]
                    },
                    limit: limit,
                    offset: offset,
                    order: ['ifsc']
                })
            }
            res.send(branches)
        } catch (error) {
            console.error(`Autocomplete Failed!!!`);
            throw createError(500, `Not able to autocomplete`)
        }
    }
    ,
    async search(req, res) {
        try {
            let branches = ''
            const q = req.query.q.toUpperCase()
            const limit = (req.query.limit)? req.query.limit : 10
            const offset = (req.query.offset)? req.query.offset : 0
            if(q)
            {
                branches = await Branch.findAll({
                    attributes:['ifsc', 'bank_id','branch', 'address', 'city', 'district', 'state'],
                    where: {
                        branch: q
                    },
                    limit: limit,
                    offset: offset
                })
            }
            res.send(branches)
        } catch (error) {
            console.error(`Search Failed`);
            throw createError(500, `Not able to search`)
        }
    }
}