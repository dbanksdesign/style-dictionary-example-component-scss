const fs = require('fs-extra');
const componentSCSS = require('./componentSCSS');

module.exports = {
  action: {
    componentSCSS: {
      do: function(dictionary, config) {
        fs.ensureDirSync(config.buildPath);
        var components = Object.keys(dictionary.properties.component);
        components.forEach(function(component) {
          let path = `${config.buildPath}${component}.scss`;
          fs.writeFileSync(path, componentSCSS({
            [component]: dictionary.properties.component[component]
          }));
          console.log(`✔ ${path}`);
        })
      },
      undo: function(dictionary, config) {
        var components = Object.keys(dictionary.properties.component);
        components.forEach(function(component) {
          fs.unlinkSync(`${config.buildPath}${component}.scss`, function(err) {
            if (err) throw err;
          });
        })
      }
    }
  },
  source: [`tokens/**/*.json`],
  platforms: {
    scss: {
      transformGroup: `scss`,
      buildPath: `build/scss/`,
      actions: [`componentSCSS`]
    }
  }
}