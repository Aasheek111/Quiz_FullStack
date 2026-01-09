import Result from "../models/resultModel.js";

export async function createResult(req, res) {
  try {
    const result = await Result.create({
      ...req.body,
      user: req.user.id // must come from the token
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false, data: e.message });
  }
}


export const displayResults = async (req, res) => {
  try {
    const resultItems = await Result.find({user:req.user.id}).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: resultItems,
    });
  } catch (error) {
    console.log(error);
  }
};
