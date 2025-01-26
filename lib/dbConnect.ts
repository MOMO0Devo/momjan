import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://momo123:momo123@cluster0.bnbzv.mongodb.net/dockerproj")
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect
