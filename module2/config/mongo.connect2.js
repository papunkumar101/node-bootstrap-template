import mongoose from 'mongoose';
import config from 'config';
import logger from '../logs/logger.log.js';

const { connect, connection } = mongoose;

class MongoConnect {
  constructor() {
    let mongoConfiguration = '';

    Object.defineProperty(this, 'mongoConfiguration', {
      set(mongoInfo) {
        mongoConfiguration = mongoInfo;
      },
      get() {
        return mongoConfiguration;
      },
    });
  }

  async initialize() {
    this.mongoConfiguration = config.get('mongo');

    try {
      if (this.mongoConfiguration.username && this.mongoConfiguration.password) {
        await connect(`mongodb://${this.mongoConfiguration.username}:${this.mongoConfiguration.password}@${this.mongoConfiguration.host}/${this.mongoConfiguration.db_name}`,
          { useNewUrlParser: true, useUnifiedTopology: true });
      } else {
        await connect(`mongodb://${this.mongoConfiguration.host}/${this.mongoConfiguration.db_name}`,
          { useNewUrlParser: true, useUnifiedTopology: true });
      }

      const db = connection;

      db.on('error', (error) => {
        throw new Error(error.message);
      });

      db.once('open', () => {
        logger.info('Mongo Database has been connected.');
        console.log('Mongo Database has been connected.');
      });

    } catch (error) {
      logger.error(`Mongo issues : ${error}`);
    }
  }
}

export default MongoConnect;
