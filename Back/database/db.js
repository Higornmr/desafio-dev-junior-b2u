import mongoose from "mongoose";

async function connectDatabase() {
  mongoose.connect(
    "mongodb+srv://<username>:iHjD0FsSCnz9AJG7@cluster0.sd2mgof.mongodb.net/?retryWrites=true&w=majority"
  );
}
/*se a senha der errado usar essa iWXg7Wr3ojaGXJtz */

export default connectDatabase;
