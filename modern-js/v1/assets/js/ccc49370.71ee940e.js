"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6103],{20535:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(29901),n=a(25789),r=a(93972),s=a(86505);const i="sidebar_FmW_",o="sidebarItemTitle_TKqJ",m="sidebarItemList_Ttyn",c="sidebarItem_SUUl",d="sidebarItemLink_jbGu",g="sidebarItemLinkActive_DHco";var u=a(74730);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},29315:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(29901),n=a(25789),r=a(57522),s=a(74730),i=a(86505),o=a(47648),m=a(36316),c=a(2391),d=a(76992),g=a(96426);const u="blogPostTitle_a2KG",p="blogPostData_f3oN",h="blogPostDetailsFull_mAc8";var b=a(55);const v="image_WNqa";function E(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:v,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const _="authorCol_xEFd",N="imageOnlyAuthorRow_Dxbv",f="imageOnlyAuthorCol_Wpsl";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?f:_),key:t},l.createElement(E,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}function k(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:v}=(0,o.C)(),{children:E,frontMatter:_,assets:N,metadata:f,truncated:k,isBlogPostPage:P=!1}=e,{date:L,formattedDate:C,permalink:T,tags:w,readingTime:y,title:I,editUrl:x,authors:A}=f,U=null!=(t=N.image)?t:_.image,M=!P&&k,H=w.length>0,B=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(B,{className:u,itemProp:"headline"},P?I:l.createElement(i.Z,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",a(y))),l.createElement(Z,{authors:A,assets:N})),U&&l.createElement("meta",{itemProp:"image",content:v(U,{absolute:!0})}),l.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:d.Z},E)),(H||k)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:P})},H&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":M})},l.createElement(b.Z,{tags:w})),P&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:x})),M&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":H})},l.createElement(i.Z,{to:f.permalink,"aria-label":(0,s.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},24493:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(29901),n=a(80521),r=a(20535),s=a(29315),i=a(18249),o=a(74730),m=a(70648);function c(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,i.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,i.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var d=a(36316),g=a(83502);function u(e){var t;const{content:a,sidebar:i}=e,{assets:o,metadata:m}=a,{title:u,description:p,nextItem:h,prevItem:b,date:v,tags:E,authors:_,frontMatter:N}=m,{hide_table_of_contents:f,keywords:Z,toc_min_heading_level:k,toc_max_heading_level:P}=N,L=null!=(t=o.image)?t:N.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:i,toc:!f&&a.toc&&a.toc.length>0?l.createElement(g.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:u,description:p,keywords:Z,image:L},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:v}),_.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:_.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),l.createElement(s.Z,{frontMatter:N,assets:o,metadata:m,isBlogPostPage:!0},l.createElement(a,null)),(h||b)&&l.createElement(c,{nextItem:h,prevItem:b}))}},96426:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(29901),n=a(74730),r=a(18249),s=a(25789);const i="iconEdit_GnsU";function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(36316);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},70648:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(29901),n=a(86505);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},83502:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(18249),n=a(29901),r=a(25789),s=a(77206);const i="tableOfContents_USc6";function o(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},n.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},77206:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(18249),n=a(29901),r=a(36316);function s(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),u=null!=m?m:g.tableOfContents.minHeadingLevel,p=null!=c?c:g.tableOfContents.maxHeadingLevel,h=(0,r.b9)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),b=(0,n.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[i,o,u,p]);return(0,r.Si)(b),n.createElement(s,(0,l.Z)({toc:h,className:a,linkClassName:i},d))}},55:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(29901),n=a(25789),r=a(74730),s=a(86505);const i="tag_gOTC",o="tagRegular_a6wa",m="tagWithCount_w9h2";function c(e){const{permalink:t,name:a,count:r}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(i,{[o]:!r,[m]:r})},a,r&&l.createElement("span",null,r))}const d="tags_Jhml",g="tag_uc7Y";function u(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);