import mongoose from "mongoose";

const Connection = (username, password) => {
  const url = `mongodb+srv://${username}:${password}@todoapp.p8mnztn.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully.");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting to the database", error.message);
  });
};

export default Connection;
