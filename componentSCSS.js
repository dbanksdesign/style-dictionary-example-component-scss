const isPlainObject = require('lodash/isPlainObject');

function componentSCSS(object, indent = '', path = []) {
  var toRet = '';

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      if (element.hasOwnProperty('value')) {
        toRet += `\n${indent}${key}: ${element.value};`;
      } else if (isPlainObject(element)) {
        if (element.child) {
          var className = path.concat(key).join('-');
          toRet += `\n}\n.${className} {${componentSCSS(element, indent, path.concat(key))}\n${indent}`;
        } else {
          var newIndent = indent + '  ';
          var modifier = '';
          if (element.modifier) { modifier = '&' }
          toRet += `\n${indent}${modifier}.${key} {${componentSCSS(element, newIndent, path.concat(key))}\n${indent}}`;
        }
      }
    }
  }

  return toRet;
}

module.exports = componentSCSS;