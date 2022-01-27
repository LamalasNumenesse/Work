import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/user_db',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

mongoose.set('useCreateIndex', true);

function newProfileObj(currentProfile, update){
  console.log(currentProfile)
  console.log(update)
  let permaProfile = currentProfile;
  for (const key in update){
    if (key != '_id'){
      permaProfile[key] = update[key];
    }
  }
  return permaProfile;
}

const profileShema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true }
},{ versionKey: false });

const Profile = mongoose.model("Profile", profileShema);

const createProfile = async (name, age, phone) => {
    const profile = new Profile({ name: name, age: age, phone: phone });
    return profile.save();
}

const findProfile = async (filter) => {
    const query = Profile.find(filter);
    return query.exec();
}

const deleteProfile = async (object) => {
    const result = await Profile.deleteMany(object);
    return result.deletedCount;
}

export { createProfile, findProfile, deleteProfile };