const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
       _id: String,
       name: String,
       idtask: String,
       desctask: String,
       score: Number,
       state: String,
    }
)
module.exports = mongoose.model("user", UserSchema)