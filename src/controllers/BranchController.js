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
                        branch: {
                            [Op.like]: `${q}%`
                        }
                    },
                    limit: limit,
                    offset: offset,
                    order: ['ifsc']
                })
            }
            res.send({branches: branches})
        } catch (error) {
            console.error(`Autocomplete Failed!!!${error}`);
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
                        [Op.or]: [
                            {ifsc: {[Op.eq]: `${q}`}},
                            {branch: {[Op.eq]: `${q}`}},
                            {address: {[Op.eq]: `${q}`}},
                            {city: {[Op.eq]: `${q}`}},
                            {district: {[Op.eq]: `${q}`}},
                            {state: {[Op.eq]: `${q}`}}
                        ]
                    },
                    limit: limit,
                    offset: offset,
                    order:['ifsc']
                })
            }
            res.send({branches: branches})
        } catch (error) {
            console.error(`Search Failed ${error}`);
            throw createError(500, `Not able to search`)
        }
    }
}