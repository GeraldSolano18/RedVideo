/* eslint-disable no-unreachable */
/* eslint-disable class-methods-use-this */
const MongoLib = require('../lib/mongo');

class moviesServices {
  constructor() {
    this.collection = 'movie';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tag: { $in: tags } };
    //throw new Error('NO JODAS PERRO CLASE CAGADA');
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createmovieID = await this.mongoDB.create(this.collection, movie);
    return createmovieID;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updateMovie = await this.mongoDB.update(this.collection, movieId, movie);
    return updateMovie; 
  }

  async deleteMovie({ movieId }) {
    const deletedMovie = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovie; 
  }

}
module.exports = moviesServices;
