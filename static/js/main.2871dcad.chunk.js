(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),o=a.n(l),i=(a(31),a(9)),c=a(10),s=a(13),m=a(11),u=a(14),d=a(15),h=a.n(d),g=(a(32),a(6)),p=a(44),w=a(45),k=a(46),E=a(25),b=a(47),f=a(48),v=a(49),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(g.a)(a)),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{fixed:"top",light:!0,expand:"md",color:"info"},r.a.createElement(w.a,{style:{fontWeight:500},href:"https://samk13.github.io/markdown-preview-v001/"},"Markdown Preview"),r.a.createElement(k.a,{onClick:this.toggle}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(f.a,null,r.a.createElement(v.a,{style:{fontWeight:500},href:"https://github.com/Samk13",target:"_blank"},"MyGitHub")),r.a.createElement(f.a,null,r.a.createElement(v.a,{style:{fontWeight:500},href:"https://www.linkedin.com/in/samarbid/",target:"_blank"},"LinkedIn")),r.a.createElement(f.a,null,r.a.createElement(v.a,{href:"https://www.freecodecamp.org/sam_arbid",target:"_blank"},"FCC"))))))}}]),t}(r.a.Component),x=a(50),O=a(51),H=a(52),M=a(53),j=a(54),C=function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(O.a,{color:"info",id:"toggler",size:"lg",block:!0,style:{marginBottom:"1rem"}},"About this tool ",r.a.createElement("span",{role:"img","aria-label":"wow face"},"\ud83d\ude2e"))),r.a.createElement(H.a,{toggler:"#toggler"},r.a.createElement(M.a,null,r.a.createElement(j.a,null,'Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".'))))},L=a(56),T=a(57),S=a(58),W=a(59),_=a(60),N=a(55),I=function(e){return r.a.createElement("div",null,r.a.createElement(N.a,{className:"Jumbotron"},r.a.createElement("h1",{className:"display-3 text-center text-success "},"\ud83d\udef0Markdown Previewer \ud83d\udef0"),r.a.createElement("p",{className:"lead text-center text-warning"},"A cool  tool made with \u2764 to convert your plain text to XHTML or HTML",r.a.createElement("br",null),"please Check out my Github for more Apps \ud83d\ude0e\ud83c\udf7b")))},A="\n### Headers\n[see Wikipedia](https://en.wikipedia.org/wiki/Markdown)\n# Header 1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n\n### List \n- list item one\n- list item two\n- list item three\n### links\n[My Github](https://github.com/Samk13)\n[My LinkedIn](https://www.linkedin.com/in/samarbid/)\n\n### Text Decorations\n*italic* and **bold**\n### Images \n![](https://apprecs.org/ios/images/app-icons/256/96/343544214.jpg)\n\n### Blockquote\n> life will give you what ever you think of .\n### code \n` npm install create-react-app -g `\n### Coding\n```\nconst x = 10 ;\nconst y = 15;\nlet func(x,y) => (x+y);\nconsole.log (func);\n```\n",B=new h.a.Renderer;B.link=function(e,t,a){return"<a href=".concat(e," target= '_blank'>").concat(a,"</a>")},h.a.setOptions({renderer:B,breaks:!0});var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handelChange=function(e){return a.setState({markdown:e.target.value})},a.state={markdown:A},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(I,null),r.a.createElement(C,null),r.a.createElement(O.a,{color:"primary",size:"lg",block:!0,onClick:function(){return e.setState({markdown:""})}},"ClearText"),r.a.createElement("br",null),r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement(x.a,null,r.a.createElement(S.a,null,r.a.createElement(W.a,{for:"exampleText"},"Write your text here  ",r.a.createElement("span",{role:"img","aria-label":"write your text here"},"\u270d")),r.a.createElement(_.a,{className:"left",style:{height:900},type:"textarea",id:"editor",name:"text",value:this.state.markdown,onChange:this.handelChange}))),r.a.createElement(x.a,null,r.a.createElement("p",null,"MarkdownResult ",r.a.createElement("span",{role:"img","aria-label":"look down"},"\ud83d\udc47")),r.a.createElement("div",{className:"right"},r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:h()(this.state.markdown)}}))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.2871dcad.chunk.js.map