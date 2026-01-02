import mongoose from "mongoose";

const performanceEnum = ["Excellent", "Good", "Average", "Needs Work"];

const ResultSchema = new mongoose.Schema(
  {
    technology: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "html",
        "css",
        "js",
        "react",
         "node",
        "mongodb",
      ],
    },
    level: {
      type: String,
      required: true,
      enum: ["basic", "intermediate", "advanced"],
    },
    totalQuestions: { type: Number, required: true, min: 0 },
    correct: { type: Number, required: true, min: 0, default: 0 },
    wrong: { type: Number, required: true, min: 0, default: 0 },
    score: { type: Number, min: 0, max: 100, default: 0 },
    performance: { type: String, enum: performanceEnum, default: "Needs Work" },
  },
  { timestamps: true }
);

ResultSchema.pre("save", function() {
  this.score=Math.round((this.correct)/(this.totalQuestions)*100)

  if(this.score>90){
    this.performance="Excellent";
  }
else if(this.score>60){
  this.performance="Good"
}
else if(this.score>40){
  this.performance="Average"
}
else {
  this.performance="Needs Work"
}


});
const Result = new mongoose.model("Result", ResultSchema);
export default Result;
