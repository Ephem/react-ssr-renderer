!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e.SSRRenderer={},e.React)}(this,function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};var u=t.createContext({markSSRDone:function(){}}),i=function(e){function u(){return n(this,u),r(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,t.Component),o(u,[{key:"componentDidMount",value:function(){this.props.done()}},{key:"render",value:function(){return null}}]),u}();e.SSRContext=u,e.MarkSSRDone=function(){return t.createElement(u.Consumer,null,function(e){return e.markSSRDone,t.createElement(i,{done:u.markSSRDone})})},Object.defineProperty(e,"__esModule",{value:!0})});
