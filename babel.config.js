module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        // see react-native-paper docs
        plugins: ['react-native-paper/babel']
      }
    }
  }
}
