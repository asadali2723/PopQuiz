module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants/index',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@navigation': './src/navigtation',
          '@_types': './src/types',
          '@context': './src/context',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
