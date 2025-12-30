import Result from "../models/resultModel.js";

async function createResult(req, res) {
  const result = await Result.create(req.body);
  try {
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      success: false,
      data: e.message,
    });
  }
}
export default createResult;
