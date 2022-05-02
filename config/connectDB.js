import mongoose from 'mongoose'

const connectDB = () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected!')
    return
  }

  mongoose.connect(
    process.env.DATABASE_URL,
    {
      useNewUrlParser: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err
      console.log('Connected to mongodb.')
    }
  )
}

export default connectDB
