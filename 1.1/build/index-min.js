/*! textMagnifier - v1.1 - 2013-10-14 7:52:10 PM
* Copyright (c) 2013 shuilan.cj; Licensed  */
KISSY.add("gallery/textMagnifier/1.1/index",function(a,b,c,d,e,f,g){function h(b,c){var d=this;c||(c={}),b&&a.mix(c,{target:b}),h.superclass.constructor.call(d,c)}var i="",j=b.all;return a.extend(h,c,{render:function(){var b=this,c=b.get("target");if(!c.length)return b;var g,h=b._getHtml(),i=b.get("width")?b.get("width"):d.outerWidth(c),j=new f.Popup({prefixCls:b.get("prefixCls"),content:h,align:{node:c,points:"top"==b.get("align")?["tl","bl"]:["bl","tl"]},closable:!1,width:i});b.set("popup",j);var k=function(a){for(var c=[],d=0,e=0,f=b.get("splitType").length;f>e;e++){var g=a.substr(d,b.get("splitType")[e]);g.length>0&&c.push(g),d+=b.get("splitType")[e]}return c.join(b.get("delimiter"))};e.on(c,"valuechange",function(b){var c=a.trim(b.newVal);c.length>0?(j.show(),g||(g=d.get(".text",j.get("contentEl"))),c=k(c),d.text(g,c)):j.hide()}),e.on(c,"focusin",function(){d.val(c).length>0&&j.show()}),e.on(c,"focusout",function(){j.hide()})},_getHtml:function(){var b=this,c=b.get("tpl");if(!a.isString(c))return b;var d=b.get("explainText");return new g(c).render({explainText:d})}},{ATTRS:{target:{value:i,getter:function(a){return j(a)}},splitType:{value:[3,4,4],setter:function(a){return j(a)},getter:function(a){return j(a)}},popup:{value:i},tpl:{value:'<div class="input-magnifier"><div class="text"></div>{{#if explainText}}<div class="explain">{{explainText}}</div>{{/if}}</div>'},prefixCls:{value:"magnifier-"}}}),h},{requires:["node","base","dom","event","overlay","xtemplate"]});