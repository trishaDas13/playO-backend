const dataModel = require("../model/model");

const postFormData = async (req, res) => {
  try {
     //* Check if email already exists
    const newData = new dataModel(req.body);
    const insertdata = await newData.save();
    return res.json({
      success: true,
      message: "Data added successfully!",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong!",
      error: error.message
    });
  }
};

const getAllData = async (req, res) => {
    //* Parse query parameters
    const pageData = parseInt(req.query.pageData);
    const pageNum = parseInt(req.query.pageNum);

    try {
        //* Calculate skip and limit values
        const skip = (pageNum - 1) * pageData;
        const limit = pageData;

        //* Fetch data from MongoDB with skip and limit
        const dataResult = await dataModel.find({}).skip(skip).limit(limit);

       return res.json({
            success: true,
            message: "Data fetched Successfully.",
            result: dataResult
        });
    } catch(error) {
        return res.status(404).json({
            success: false,
            message: "Data could not be get error faced.",
            error: error.message
        });
    }
}

const deleteData = async(req, res) => {
    try{
        await dataModel.deleteOne({_id: req.body._id})
        res.json({
            success: true,
            message: "Item deleted successfully",
          });
    }catch(error){
        return res.status(400).json({
            success: false,
            messgae:  'Failed to Delete Data',
        })
    }
}

const editData = async(req, res) =>{
   try{
    await dataModel.updateOne(
        {
          _id: req.body._id,
        },
        {
          $set: req.body,
        }
      );
      res.json({
        success: true,
        message: "Data updated successfully!",
      });
   }catch(err){
    res.status(400).json({
        success: false,
        message: "Something went wrong, could not be updated now!",
      });
   }
}
module.exports = {
  postFormData,
  getAllData,
  deleteData,
  editData
};
