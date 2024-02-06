const CardDetail = require("../models/CardDetail.model");

const getCardDetailController =async (req,res)=>{
try {
    const {CardDetailId}=req.params;
    console.log("🚀 ~ getCardDetailController ~ CardDetailId:", CardDetailId)
    
    const {dataValues} = await CardDetail.findByPk(CardDetailId);
    console.log("🚀 ~ getCardDetailController ~ findCardDetail:", dataValues)
    
    res.status(200).json(dataValues);
} catch (error) {
    
    console.log(error);
    res.status(500).json({ message: "Something went wrong : ( ", ...error });
}
}


const updateCardDetailController =async (req,res)=>{

    try {
        const {CardDetailId}=req.params;
        const {content}=req.body;
        const findCardDetail = await CardDetail.findByPk(CardDetailId);
        findCardDetail.content=content;
        await findCardDetail.save();

    res.status(200).json(findCardDetail);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong : ( ", ...error });
    }
}

module.exports={
getCardDetailController,
updateCardDetailController

}