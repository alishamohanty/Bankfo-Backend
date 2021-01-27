const {Branch} = require('../models')
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
                        // [Op.or]: [
                        //     {ifsc: {[Op.ilike]: `${q}%`}},
                        //     {bank_id: {[Op.like]: `${q}`}},
                        //     {branch: {[Op.ilike]: `${q}`}},
                        //     {address: {[Op.ilike]: `%${q}%`}},
                        //     {city: {[Op.ilike]: `${q}`}},
                        //     {district: {[Op.ilike]: `${q}`}},
                        //     {state: {[Op.ilike]: `${q}`}}
                        // ]
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
        try {
            let branches = ''
            const q = req.query.q.toUpperCase()
            const limit = (req.query.limit)? req.query.limit : 10
            const offset = (req.query.offset)? req.query.offset : 0
            console.log(q);
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
            console.error(`Not able to perform search!!!`);
            throw createError(500, `Not able to search`)
        }
    }
}