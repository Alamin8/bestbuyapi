const ShowroomProfileData = require("../models/showroomProfileModel");


const showroomProfileDataCTRL ={

    getShowroomProfileData: async(req, res )=>{
        try {
            const {showroom_code} = req.body;
            const showroom = await ShowroomProfileData.findOne({showroom_code:showroom_code});
            if(!showroom){
                return res.status(400).json({ msg: "No showroom find with this showroom code" });
            }
            return res.status(200).json({ showroom });

            
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    postShowroomProfileData: async(req, res )=>{
        try {
            const {showroom_code, showroom_party_code, showroom_name, showroom_email, showroom_mobile, showroom_address } = req.body;
            const showroom = await ShowroomProfileData.findOne({showroom_code:showroom_code})
            if(showroom){
                return res.status(400).json({ msg: "The showroom Already exist" });
            }
            const newShowroom = new ShowroomProfileData({
                showroom_code, showroom_party_code, showroom_name, showroom_email, showroom_mobile, showroom_address
            });

            await newShowroom.save();

            return res.status(200).json({ msg: "Showroom Profile create successful!!" });
            
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    updateShowroomProfileData: async(req, res )=>{
        try {
            
        } catch (error) {
            
        }
    },
    deleteShowroomProfileData: async(req, res )=>{
        try {
            
        } catch (error) {
            
        }
    },
    updateShowroomProfileCurrentInventoryName: async (req, res)=>{
        try {
           const {showroom_code, current_inventory_name}=req.body;
           await ShowroomProfileData.findOneAndUpdate({showroom_code:showroom_code}, {current_inventory_name})

           return res.status(200).json({ msg: "Current showroom inventory name update success!" });
        } catch (error) {
            
        }
    }
}

module.exports = showroomProfileDataCTRL;