(this["webpackJsonpportfolio-master"]=this["webpackJsonpportfolio-master"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(4),l=s.n(i),r=s(2),n=(s(11),s.p+"static/media/css3.af6c0ca7.png"),o=s.p+"static/media/html5.8f40acc4.png",j=s.p+"static/media/js.fbc0eaaf.png",m=s.p+"static/media/react.8d272661.png",b=s(0);function d(e){var t=e.skeels,s=e.skilogo,a=e.altogo,c=e.dizskil;return Object(b.jsx)("div",{className:"skill-container",children:Object(b.jsxs)("div",{className:c,children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:s})}),Object(b.jsx)("img",{src:t,alt:a})]})})}var h=function(){return Object(b.jsxs)("div",{className:"skill-holder",children:[Object(b.jsx)(d,{dizskil:"htmlogo",skeels:o,altogo:"HMTL5 logo and text"}),Object(b.jsx)(d,{dizskil:"csslogo",skeels:n,altogo:"CSS3 logo and text"}),Object(b.jsx)(d,{dizskil:"jslogo",skeels:j,altogo:"Javascript logo and text"}),Object(b.jsx)(d,{dizskil:"reactlogo",skeels:m,altogo:"React logo and text"})]})},u=s(5),g=s(6),p=s.n(g),x=function(e){var t=e.classRef,s=e.imgSrc,a=e.itemDesc,c=e.altInfo;return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)("img",{src:s,alt:c}),Object(b.jsx)("div",{className:"caption",children:a})]})},O=function(){var e=c.a.useState(u),t=Object(r.a)(e,1)[0],s=c.a.useState(0),a=Object(r.a)(s,2),i=a[0],l=a[1],n=4*i,o=t.slice(n,n+4).map((function(e){return Object(b.jsx)(x,{classRef:e.class,imgSrc:e.source,altInfo:e.alt,itemDesc:e.itemdesc},e.id)})),j=Math.ceil(t.length/4);return Object(b.jsxs)("div",{className:"project-cont",children:[Object(b.jsx)("article",{className:"project-holder",children:o}),Object(b.jsx)(p.a,{previousLabel:"\u2800",nextLabel:"\u2800",pageCount:j,onPageChange:function(e){var t=e.selected;l(t)},containerClassName:"pagination",disabledClassName:"disabled",activeClassName:"activepage"})]})},f=function(){return Object(b.jsxs)("div",{className:"contact-body",children:[Object(b.jsx)("div",{className:"contact-start",children:Object(b.jsxs)("form",{className:"contact-form",children:[Object(b.jsx)("label",{htmlFor:"fname",children:"Full Name:"}),Object(b.jsx)("input",{id:"fname",name:"fname",placeholder:"Full Name"}),Object(b.jsx)("label",{htmlFor:"phone-number",children:"Number:"}),Object(b.jsx)("input",{id:"phone-number",name:"phone-number",type:"number",placeholder:"Enter your number here"}),Object(b.jsx)("label",{htmlFor:"email",children:"Enter your email:"}),Object(b.jsx)("input",{className:"input-number",type:"email",id:"email",name:"email",placeholder:"E-mail"}),Object(b.jsx)("textarea",{rows:"10",cols:"20",name:"message",placeholder:"Let me know what you're up to"})]})}),Object(b.jsx)("footer",{className:"contact-links",children:Object(b.jsxs)("div",{className:"git-links",children:[Object(b.jsx)("a",{id:"profile-link",href:"https://github.com/ayronman99",target:"_blank",rel:"noreferrer",className:"contact-details",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{id:"profile-link",href:"https://www.linkedin.com/in/lee-lacay-5564b51a4/",target:"_blank",rel:"noreferrer",className:"contact-details",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})}),Object(b.jsx)("a",{id:"profile-link",href:"https://github.com/ayronman99",target:"_blank",rel:"noreferrer",className:"contact-details",children:Object(b.jsx)("i",{className:"fab fa-twitter"})})]})})]})};var k=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),s=Object(r.a)(t,2),c=s[0],i=s[1];return window.addEventListener("scroll",(function(){window.scrollY>=740?i(!0):i(!1)})),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("nav",{className:c?"navibar activate":"navibar",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#work",children:"Work"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})}),Object(b.jsx)("div",{className:"home",id:"home",children:Object(b.jsxs)("div",{className:"center-info",children:[Object(b.jsx)("h1",{children:"Hello! My name is Lee."}),Object(b.jsx)("p",{children:"I'm a self-taught web developer."}),Object(b.jsx)("button",{className:"know-more",onClick:function(){return e.current.scrollIntoView()},children:" Click here to know more "})]})}),Object(b.jsxs)("div",{ref:e,className:"about",id:"about",children:[Object(b.jsx)("h2",{children:" About me "}),Object(b.jsxs)("p",{children:["I'm a self-taught front-end developer and an aspiring fullstack developer.",Object(b.jsx)("br",{}),"I can help you in creating your website. Where you can show the",Object(b.jsx)("br",{})," world your works or to attract prospect and potential clients."]}),Object(b.jsx)("strong",{children:"Here are the list of skills, I have to help you in achieving your goals:"}),Object(b.jsx)("div",{className:"skeel",children:Object(b.jsx)(h,{})})]}),Object(b.jsxs)("div",{className:"works",id:"work",children:[Object(b.jsx)("h2",{children:"Here is my gallery of works"}),Object(b.jsx)(O,{})]}),Object(b.jsx)("div",{className:"contact",id:"contact",children:Object(b.jsx)(f,{})})]})};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"class":"projitem","source":"/images/1.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/2.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/3.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/4.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/5.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/6.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/7.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/8.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/9.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"},{"class":"projitem","source":"/images/10.jpg","alt":"yes working but not yet","itemdesc":"imagetest bwoi"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.989b83f9.chunk.js.map