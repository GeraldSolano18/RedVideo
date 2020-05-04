require('@babel/register')({ //hooks
  ignore: [/(node_modules)/], //Se indica lo que vamos a ignorar
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server.js');
