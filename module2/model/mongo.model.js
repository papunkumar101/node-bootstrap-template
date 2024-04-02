import mongoose from 'mongoose';
import MongoConnect from '../config/mongo.connect2.js';

const mongo = new MongoConnect();
mongo.initialize();



class MongooseModel {
    constructor() {
        const userSchema = new mongoose.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            phone: { type: String, required: true },
            gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }
        });
        
        const nameSchema = new mongoose.Schema({
            name: { type: String, required: true }
        });
        
        this.UserModel = mongoose.model('user', userSchema);
        this.NameModel = mongoose.model('name', nameSchema);
    }

    async createUsersTable() {
        try {
            const collectionExists = await UserModel.exists();
            if (!collectionExists) {
                await UserModel.createCollection();
                console.log('Users collection created successfully');
            } else {
                console.log('Users collection already exists');
            }
        } catch (error) {
            console.error('Error creating Users collection:', error);
        }
    }

    async createNamesTable() {
        try {
            const collectionExists = await this.NameModel.exists();
            if (!collectionExists) {
                await this.NameModel.createCollection();
                console.log('Names collection created successfully');
            } else {
                console.log('Names collection already exists');
            }
        } catch (error) {
            console.error('Error creating Names collection:', error);
        }
    }

    async create(name) {
        try {
            const newName = new this.NameModel({ name });
            return await newName.save(); 
        } catch (error) {
            console.error('Error creating Name:', error);
            return error;
        }
    }

    async read() {
        try {
            return await this.NameModel.find(); 
        } catch (error) {
            console.error('Error reading Names:', error);
            return error
        }
    }

    async update(id, name) {
        try {
            return await this.NameModel.findByIdAndUpdate(id, { name });
        } catch (error) {
            console.error('Error updating Name:', error);
            return error;
        }
    }

    async delete(id) {
        try {
           return await this.NameModel.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error deleting Name:', error);
            return error;
        }
    }
}

export default new MongooseModel();
