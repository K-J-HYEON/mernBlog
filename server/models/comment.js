import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    // 내용이 없는 댓글은 허용하지 않겠다.
    required: true,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    // post를 참조해주세요.
    ref: "post",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    // user를 참조해주세요.
    ref: "user",
  },
  creatorName: { type: String },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
