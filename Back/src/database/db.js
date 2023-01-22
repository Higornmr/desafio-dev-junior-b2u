import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    "mongodb+srv://teste:iHjD0FsSCnz9AJG7@cluster0.sd2mgof.mongodb.net/?retryWrites=true&w=majority"
  );
}
/*se a senha der errado usar essa iWXg7Wr3ojaGXJtz     ----      iHjD0FsSCnz9AJG7     */

export default connectDatabase;
