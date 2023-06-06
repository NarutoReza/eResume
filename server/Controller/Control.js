const Basic = require('../Model/Basic')
const Education = require('../Model/Education')

//view all the data from Basic
exports.viewBasicData = async(req, res) => {
    try{
        const viewBasicData = await Basic.find()
        res.json(viewBasicData)
    }
    catch(err){
        message:err
    }
}

//view all the data from Education
exports.viewEducationsData = async(req, res) => {
    try{
        const viewEducationsData = await Education.find()
        res.json(viewEducationsData)
    }
    catch(err){
        message:err
    }
}

//view data from Basic using name and number
exports.viewNameNumberData = async(req, res) => {
    const data = {
        name: req.body.name,
        number: req.body.number
    }

    try{
        const viewNameNumberData = await Basic.find(data)
        res.json(viewNameNumberData)
    }
    catch(err){
        message:err
    }
}

//view data from Basic using id
exports.viewIdData = async(req, res) => {
    try{
        const viewData = await Basic.findById(req.params.postId);
        res.json(viewData)
    }
    catch(err){
        message:err
    }
}

//view data from Education using basic_id
exports.viewEducationData = async(req, res) => {
    const data = { basic_id: req.params.postId}
    try{
        const viewEducationData = await Education.find(data)
        res.json(viewEducationData)
    }
    catch(err){
        message:err
    }
}

//add data to Basic
exports.addBasicData= async(req, res) => {
    const data = new Basic({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        designation: req.body.designation,
        address: req.body.address,
        skills: req.body.skills,
        description: req.body.description
    })
    try{
        const addBasicData = await data.save()
        res.json(addBasicData)
    }
    catch(err){
        message:err
    }
}

//add data to Education
exports.addEducationData= async(req, res) => {
    const paramId = req.params.postId
    const data = new Education({
        course: req.body.course,
        school: req.body.school,
        year_start: req.body.year_start,
        year_end: req.body.year_end,
        description: req.body.description,
        basic_id: paramId
    })
    try{
        const addEducationData = await data.save()
        res.json(addEducationData)
    }
    catch(err){
        message:err
    }
}





// = async(req, res) => {
//     try{
        
//     }
//     catch(err){
//         message:err
//     }
// }