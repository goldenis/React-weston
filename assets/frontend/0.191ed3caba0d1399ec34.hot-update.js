webpackHotUpdate(0,{12:function(e,t,n){"use strict";function r(){var e=w("/app/api/slides"),t=w("/app/api/posts/all"),n=w("/app/api/music"),r=w("/app/api/service/twitter"),o=w("/app/api/service/instagram");return b.all([e,t,n,r,o]).then(function(e){var t=s(e),n=t[0],r=t[1],o=t[2],i=t[3],a=t[4];return b.fcall(function(){var e=r.data.stories,t=r.data.gallery,s="#ffffff";return{slides:n.data.filter(function(e){return e.media&&(d()?"image"===e.media.type:!0)}).map(function(e){return{id:e.id,title:e.title,align:e.align,category:e.category.title,text:e.text,author:e.author,ext:e.ext,categoryColor:e.color_category||s,titleColor:e.color_title||s,textColor:e.color_text||s,authorColor:e.color_author||s,linkType:e.link_type,linkUrl:e.link_url,linkText:e.link_text,linkColor:e.color_link||s,media:e.media}}),stories:e.posts.map(function(e){return{id:e.id,title:e.title,slug:e.slug,preview:e.description,ext:e.ext,img:e.media?D.join(e.media.content,e.media.thumbnail):null,author:e.author,media:e.media}}),gallery:t.posts.map(function(e){return{id:e.id,title:e.title,slug:e.slug,preview:e.description,ext:e.ext,img:e.media?D.join(e.media.content,e.media.name):null,date:T(e.create_date).format("L")}}),music:o.data.map(function(e){return{id:e.id,title:e.name,slug:e.slug,embed:e.content,date:T(e.create_date).format("L")}}),twitter:{lastTweet:i.data[0].text,id:i.data[0].id_str},instagram:a.data.data.filter(function(e){return"image"===e.type}).map(function(e){return{id:e.id,img:e.images.standard_resolution.url,source:e.link}})}})})}function o(e){return d()?e:e.replace(/[^a-z0-9@:\/\s\.\-]/gi,"").replace(/\s+/g," ")}function i(e){return e.replace(/(https?:\/\/(?:\w+)\.(?:\w+)(?:\.(?:\w+))?(?:[\w\/]*)?)/g,'<a href="$1" target="_blank">$1</a>')}function a(e){return e.replace(/(@\w+)/g,function(e){return'<a href="http://twitter.com/'+e.substring(1)+'" target="_blank">'+e+"</a>"})}var s=function(e){return Array.isArray(e)?e:Array.from(e)},u=n(3),l=n(41),c=l.first,d=(l.range,l.isMobile),p=n(45),h=n(47),f=n(48),m=(n(57),n(50)),_=n(49),y=n(55),v=n(56),g=n(5),M=(g.Link,n(154)),L=n(51),w=n(42),b=n(87),D=n(75),T=n(86),E=n(46),k=n(43);n(79);var x=u.createClass({displayName:"Home",mixins:[L(r)],statics:{willTransitionFrom:function(){E.set("/")}},componentDidMount:function(){var e=E.get();k({}),"/"===e.path&&setTimeout(function(){return window.scrollTo(0,e.scroll)},0)},render:function(){var e=this.props.store.getStore(),t=c(4,e.stories).map(function(e){return u.createElement(h,u.__spread({key:e.id},e))}),n=(c(2,e.gallery).map(function(e){return u.createElement(f,u.__spread({key:e.id},e))}),c(21,e.instagram).map(function(e){return u.createElement(m,u.__spread({key:e.id},e))})),r=c(3,e.music).map(function(e){return u.createElement(_,u.__spread({key:e.id},e))});return u.createElement("div",{className:"home"},u.createElement(v,{slides:e.slides}),u.createElement("div",{className:"home__wrapper"},u.createElement("div",{className:"home__logo"},u.createElement("img",{className:"home__logo-img",src:M,alt:""}),u.createElement("div",{className:"home__last-tweet",dangerouslySetInnerHTML:{__html:a(i(o(e.twitter.lastTweet)))}}),u.createElement("a",{className:"home__last-tweet-icon",href:"https://twitter.com/westonjamesp/status/"+e.twitter.id,target:"_blank"})),u.createElement("div",{className:"home__sections"},u.createElement(p,{title:"Stories",link:"/stories"},t)),u.createElement("div",{className:"home__sections home__sections--tiny"},u.createElement(p,{title:"Music",titleMargin:!1,link:"/music"},r),u.createElement(p,{title:"Instagram",titleMargin:!1,link:"/instagram"},n),u.createElement(y,null)),"-->"))}});e.exports=x}});