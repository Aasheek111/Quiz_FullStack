const mongoose = use("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  required: true
});

module.exports=mongoose.model('Quiz',QuizSchema);
