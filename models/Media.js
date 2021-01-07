const { model, Schema } = require('mongoose')

module.exports = model('Media', new Schema({
  title: String,
  year: String,
  imdbID: String,
  type: String,
  poster: String
}))
