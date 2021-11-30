import _ from 'lodash'; //Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
