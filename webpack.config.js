const path = require('path');

module.exports = {
  // ponto de entrada, onde ele pegará os arquivos para montar toda a arvore
  entry: path.resolve(__dirname, './src/index.js'),
  
  // foi feita a impotação do path para pegar o repositorio raiz, e queremos q ele
  // gere uma pasta chamada dist que conterá os empacotamentos
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // dentro de module é colocado o que ele ira interpretar
  //o que será "excluido" e qual vai ser o tipo de transpilação (para interpretar os aquibos desejados)  
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'
      ]
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_module/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
    ]
  },
  
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  
}