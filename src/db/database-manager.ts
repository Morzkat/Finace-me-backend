import mongoose from 'mongoose';

export default class DatabaseManager {
  /**
   *
   */
  constructor() {}

  setup(uri: string) {
    this.connect(`mongodb://127.0.0.1:27017/${uri}`);

    this.setupHandlerOnce('open', () => console.log('Database connected', uri));

    this.setupHandler('error', (error) =>
      console.log('Error when connection to database.', error)
    );
  }

  private connect = (uri: string) =>
    mongoose
      .connect(uri)
      .catch((error) =>
        console.error(`Error connecting to database: ${error}`)
      );

  private setupHandler = (
    handler: string,
    callback: (params: object) => void
  ) => mongoose.connection.on(handler, callback);

  private setupHandlerOnce = (
    handler: string,
    callback: (params: object) => void
  ) => mongoose.connection.once(handler, callback);
}
