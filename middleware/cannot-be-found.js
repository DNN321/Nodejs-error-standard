const notFound = (req,res)=>{res.status(404).json({msg:'page cannot be found'})}

module.exports = notFound