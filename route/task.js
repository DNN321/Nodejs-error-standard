const express = require ('express')
const router = express.Router()
const {getAll,getOne,createOne,updateOne,deleteOne} = require ('../contoller/task')

router.route('/').get(getAll).post(createOne)
router.route('/:id').get(getOne).patch(updateOne).delete(deleteOne)


module.exports = router