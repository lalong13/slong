// Entry Point
'use strict';


process.on('unhandledRejection', err => {
  throw err;
});

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra-plus');
const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const config = require('../webpack.config.js');
const merge = require('webpack-merge');
const buildFolder = path.join(__dirname, 'public');
console.log("Server: "+buildFolder);
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

if (!checkRequiredFiles([path.join(__dirname, 'client.js')])) {
  process.exit(1);
}

measureFileSizesBeforeBuild(buildFolder)
  .then(previousFileSizes => {
    fs.emptyDirSync(path.join(__dirname, 'public', 'js'));
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          '\nSearch for the ' +
            chalk.underline(chalk.yellow('keywords')) +
            ' to learn more about each warning.'
        );
        console.log(
          'To ignore, add ' +
            chalk.cyan('// eslint-disable-next-line') +
            ' to the line before.\n'
        );
      } else {
        console.log(chalk.green('Compiled successfully.\n'));
      }

      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        buildFolder,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
      console.log();

      const appPackage = require(path.join(__dirname, '..','package.json'));
      const publicUrl = appPackage.homepage;
      const publicPath = config.output.publicPath;
      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        false
      );
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'));
      printBuildError(err);
      process.exit(1);
    })
  .then(() => {
    require('@babel/register');
    require('./server.babel');
  });

function build(previousFileSizes) {
  let compiler = webpack(merge(config, {mode: process.env.NODE_ENV}));

  return new Promise((resolve, reject) => {
    console.log('Creating an optimized production build...');
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length){
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      console.log("Testing");
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      })
    });
  });
}
