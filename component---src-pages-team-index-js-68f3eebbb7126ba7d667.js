(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"30+C":function(e,t,a){"use strict";var o=a("wx14"),l=a("Ff2n"),n=a("q1tI"),i=a("iuhU"),r=a("kKAo"),c=a("H2TA"),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=Object(l.a)(e,["classes","className","raised"]);return n.createElement(r.a,Object(o.a)({className:Object(i.a)(a.root,c),elevation:d?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},"50B7":function(e,t,a){"use strict";var o=a("wx14"),l=a("Ff2n"),n=a("q1tI"),i=a("iuhU"),r=a("H2TA"),c=a("ofer"),s=n.forwardRef((function(e,t){var a=e.action,r=e.avatar,s=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,p=e.disableTypography,f=void 0!==p&&p,h=e.subheader,v=e.subheaderTypographyProps,b=e.title,g=e.titleTypographyProps,y=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=b;null==w||w.type===c.a||f||(w=n.createElement(c.a,Object(o.a)({variant:r?"body2":"h5",className:s.title,component:"span",display:"block"},g),w));var O=h;return null==O||O.type===c.a||f||(O=n.createElement(c.a,Object(o.a)({variant:r?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},v),O)),n.createElement(m,Object(o.a)({className:Object(i.a)(s.root,d),ref:t},y),r&&n.createElement("div",{className:s.avatar},r),n.createElement("div",{className:s.content},w,O),a&&n.createElement("div",{className:s.action},a))}));t.a=Object(r.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},AC2l:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return H}));var o=a("5C0Z"),l=a("q1tI"),n=a.n(l),i=a("Wbzz"),r=a("ofer"),c=a("30+C"),s=a("50B7"),d=a("oa/T"),u=a("EYWl"),m=a("uVCN"),p=a("wx14"),f=a("Ff2n"),h=(a("TOwV"),a("iuhU")),v=a("H2TA"),b=l.forwardRef((function(e,t){var a=e.cellHeight,o=void 0===a?180:a,n=e.children,i=e.classes,r=e.className,c=e.cols,s=void 0===c?2:c,d=e.component,u=void 0===d?"ul":d,m=e.spacing,v=void 0===m?4:m,b=e.style,g=Object(f.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return l.createElement(u,Object(p.a)({className:Object(h.a)(i.root,r),ref:t,style:Object(p.a)({margin:-v/2},b)},g),l.Children.map(n,(function(e){if(!l.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return l.cloneElement(e,{style:Object(p.a)({width:"".concat(100/s*t,"%"),height:"auto"===o?"auto":o*a+v,padding:v/2},e.props.style)})})))})),g=Object(v.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(b),y=a("KQm4"),w=a("l3Wi"),O=a("ucBr"),E=function(e,t){var a,o,l,n;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(y.a)(t.imgFullWidth.split(" "))),(o=e.classList).add.apply(o,Object(y.a)(t.imgFullHeight.split(" ")))):((l=e.classList).remove.apply(l,Object(y.a)(t.imgFullHeight.split(" "))),(n=e.classList).add.apply(n,Object(y.a)(t.imgFullWidth.split(" ")))))};var j=l.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,i=(e.cols,e.component),r=void 0===i?"li":i,c=(e.rows,Object(f.a)(e,["children","classes","className","cols","component","rows"])),s=l.useRef(null);return l.useEffect((function(){!function(e,t){e&&(e.complete?E(e,t):e.addEventListener("load",(function(){E(e,t)})))}(s.current,o)})),l.useEffect((function(){var e=Object(w.a)((function(){E(s.current,o)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[o]),l.createElement(r,Object(p.a)({className:Object(h.a)(o.root,n),ref:t},c),l.createElement("div",{className:o.tile},l.Children.map(a,(function(e){return l.isValidElement(e)?"img"===e.type||Object(O.a)(e,["Image"])?l.cloneElement(e,{ref:s}):e:null}))))})),N=Object(v.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(j),x=l.forwardRef((function(e,t){var a=e.actionIcon,o=e.actionPosition,n=void 0===o?"right":o,i=e.classes,r=e.className,c=e.subtitle,s=e.title,d=e.titlePosition,u=void 0===d?"bottom":d,m=Object(f.a)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),v=a&&n;return l.createElement("div",Object(p.a)({className:Object(h.a)(i.root,r,"top"===u?i.titlePositionTop:i.titlePositionBottom,c&&i.rootSubtitle),ref:t},m),l.createElement("div",{className:Object(h.a)(i.titleWrap,{left:i.titleWrapActionPosLeft,right:i.titleWrapActionPosRight}[v])},l.createElement("div",{className:i.title},s),c?l.createElement("div",{className:i.subtitle},c):null),a?l.createElement("div",{className:Object(h.a)(i.actionIcon,"left"===v&&i.actionIconActionPosLeft)},a):null)})),C=Object(v.a)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(x),P=a("PsDL"),T=a("JVdV"),L=a.n(T),M=a("tv3H"),I=a.n(M),H="1501940332";t.default=Object(o.a)((function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(m.a,null,n.a.createElement(u.a,{title:"Meet the Team"}),n.a.createElement(c.a,null,n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(P.a,null,n.a.createElement(I.a,null)),n.a.createElement(s.a,{title:"Meet the Team"})),n.a.createElement(r.a,{paragraph:!0},n.a.createElement(d.a,null,"Some text about how great yall are and some other shit about your call to action or whatever you want to do to introduce yourselves to potential clients or people who don't know you or haven't done business with you or whatever I'm still typing because fake paragraph to play with font spacing in mobile vs tablet vs laptop vs desktop.")),n.a.createElement(g,{cellHeight:500,cols:3},t.map((function(e){var t=e.node.frontmatter,a=t.path,o=t.title,l=t.image.publicURL,r=t.jobtitle;return n.a.createElement(i.a,{key:a,to:a,style:{overflow:"hidden"}},n.a.createElement(N,{cols:1},n.a.createElement("img",{src:Object(i.d)(l),alt:o}),n.a.createElement(C,{title:o,subtitle:r,actionIcon:n.a.createElement(P.a,{className:"teamIcon",style:{color:"rgba(255, 255, 255, 0.54)"}},n.a.createElement(L.a,null))})))})))))}))},JVdV:function(e,t,a){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(0,((o=a("wvMB"))&&o.__esModule?o:{default:o}).default)("M20 22L16.14 20.45C16.84 18.92 17.34 17.34 17.65 15.73L20 22M7.86 20.45L4 22L6.35 15.73C6.66 17.34 7.16 18.92 7.86 20.45M12 2C12 2 17 4 17 12C17 15.1 16.25 17.75 15.33 19.83C15 20.55 14.29 21 13.5 21H10.5C9.71 21 9 20.55 8.67 19.83C7.76 17.75 7 15.1 7 12C7 4 12 2 12 2M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12Z");t.default=l},"oa/T":function(e,t,a){"use strict";var o=a("wx14"),l=a("Ff2n"),n=a("q1tI"),i=a("iuhU"),r=a("H2TA"),c=n.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.component,s=void 0===c?"div":c,d=Object(l.a)(e,["classes","className","component"]);return n.createElement(s,Object(o.a)({className:Object(i.a)(a.root,r),ref:t},d))}));t.a=Object(r.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},tv3H:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a("q1tI")),n=(0,o(a("8/g6")).default)(l.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");t.default=n},wvMB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),l=n(a("UJJ5"));function n(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}t.default=function(e){var t=o.default.memo(o.default.forwardRef((function(t,a){return o.default.createElement(l.default,i({},t,{ref:a}),o.default.createElement("path",{d:e}))})));return t.muiName="SvgIcon",t}}}]);
//# sourceMappingURL=component---src-pages-team-index-js-68f3eebbb7126ba7d667.js.map