webpackHotUpdate(0,{122:function(e,t,n){"use strict";var r=n(3),o=n(5),i=o.Link,a=o.State;n(234);var s=r.createClass({displayName:"Navigation",mixins:[a],onClick:function(e){var t=this;return function(){t.isActive(e)&&location.reload(),t.props.changeOverlay()}},render:function(){return r.createElement("nav",{className:"navigation"},r.createElement(i,{onClick:this.onClick("stores"),to:"/stories",className:"navigation__item"},"Stories"),"// ",r.createElement(i,{onClick:this.onClick("gallery"),to:"/gallery",className:"navigation__item"},"Gallery"),r.createElement(i,{onClick:this.onClick("instagram"),to:"/instagram",className:"navigation__item"},"Instagram"),r.createElement(i,{onClick:this.onClick("music"),to:"/music",className:"navigation__item"},"Music"),r.createElement(i,{onClick:this.onClick("twitter"),to:"/twitter",className:"navigation__item"},"Twitter"))}});e.exports=s}});