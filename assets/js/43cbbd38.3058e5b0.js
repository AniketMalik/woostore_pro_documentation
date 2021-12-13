(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[8641],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={sidebar_position:7},p={unversionedId:"update-guide",id:"update-guide",isDocsHomePage:!1,title:"Update Guide",description:"This guide is for existing clients who are looking forward to upgrade their previous WooStore Pro application to a higher version. Each new version which required any additional step to be preformed will be listed here with the steps that you will need to perform.",source:"@site/docs/update-guide.md",sourceDirName:".",slug:"/update-guide",permalink:"/woostore_pro_documentation/update-guide",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run Application Locally",permalink:"/woostore_pro_documentation/reference/run-application"}},l=[{value:"v2.2.0",id:"v220",children:[]},{value:"v2.1.0",id:"v210",children:[]},{value:"v2.0.0",id:"v200",children:[]},{value:"v1.11.0",id:"v1110",children:[]},{value:"v1.9.4",id:"v194",children:[]},{value:"v1.9.0",id:"v190",children:[]},{value:"v1.7.0",id:"v170",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide is for existing clients who are looking forward to upgrade their previous WooStore Pro application to a higher version. Each new version which required any additional step to be preformed will be listed here with the steps that you will need to perform."))),(0,i.kt)("h2",{id:"v220"},"v2.2.0"),(0,i.kt)("p",null,"This version brings the ",(0,i.kt)("inlineCode",{parentName:"p"},"Phone OTP Login")," feature along with few other options to configure your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required Changes")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"WooStore Pro Api")," wordpress plugin to version ",(0,i.kt)("inlineCode",{parentName:"li"},"v3.2.0")," in your wordpress website.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v210"},"v2.1.0"),(0,i.kt)("p",null,"This version enhances the ",(0,i.kt)("inlineCode",{parentName:"p"},"Native Checkout")," feature along with few other options to configure your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required Changes")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"WooStore Pro Api")," wordpress plugin to version ",(0,i.kt)("inlineCode",{parentName:"li"},"v3.1.0")," in your wordpress website.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v200"},"v2.0.0"),(0,i.kt)("p",null,"This version brings in the much awaited ",(0,i.kt)("inlineCode",{parentName:"p"},"Native Checkout")," feature along with few other options to configure your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required Changes")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"WooStore Pro Api")," wordpress plugin to version ",(0,i.kt)("inlineCode",{parentName:"li"},"v3.0.0")," in your wordpress website."),(0,i.kt)("li",{parentName:"ol"},"Upload the new ",(0,i.kt)("inlineCode",{parentName:"li"},"acf-fields.json")," file to the Custom Fields dashboard following this ",(0,i.kt)("a",{parentName:"li",href:"/wordpress-setup/configure-plugins#3-advanced-custom-fields"},"Setup Advanced Custom Fields"),". This is required to use the new External Link and Single Product home section variants.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v1110"},"v1.11.0"),(0,i.kt)("p",null,"Version 1.11.0 brings changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"WooStore Pro Api")," wordpress plugin ( now ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.0"),") which is required to connect your ",(0,i.kt)("inlineCode",{parentName:"p"},"WooStore Pro mobile application")," with your website. You can check all the changes made in this version from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AniketMalik/ecommerce-store-support/blob/main/change_logs.md"},"Change Logs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additions:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Updated framework for better performance"),(0,i.kt)("li",{parentName:"ol"},"Added Support for Variation Swatches for WooCommerce plugin by Emran Ahemd to show image and color attribute types in product details screen."),(0,i.kt)("li",{parentName:"ol"},"Added product filters and sorting options.")),(0,i.kt)("h4",{id:"how-to-update-to-this-version-"},"How to update to this version ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To update your application to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.11.0")," you need to install the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"WooStore Pro Api")," wordpress plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.0")," that you get in the download package.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you would use the image and color type attributes for your products then you need to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"Variation Swatches for WooCommerce")," plugin by Emran Ahemd."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v194"},"v1.9.4"),(0,i.kt)("p",null,"Version 1.9.4 brings changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"WooStore Pro Api")," wordpress plugin ( now ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0"),") which is required to connect your WooStore Pro mobile application with your website. You can check all the changes made in this version from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AniketMalik/ecommerce-store-support/blob/main/change_logs.md"},"Change Logs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Changes:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Updated framework for better performance"),(0,i.kt)("li",{parentName:"ol"},"Removed dependencies for CoCart Lite and CoCart Get Cart Enhanced Plugins. These have been integrated into the WooStore Pro Api Plugin.")),(0,i.kt)("h4",{id:"how-to-update-to-this-version--1"},"How to update to this version ?"),(0,i.kt)("p",null,"To update your application to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.4")," you just need to install the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"WooStore Pro Api")," wordpress plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," that you get in the download package. "),(0,i.kt)("p",null,"After you install this version, you can safely delete the Cocart Lite and CoCart Get cart enhanced plugins from your wordpress plugins."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v190"},"v1.9.0"),(0,i.kt)("p",null,"Version 1.9.0 brings 2 new sections for the home page. You can check all the changes made in this version from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AniketMalik/ecommerce-store-support/blob/main/change_logs.md"},"Change Logs")),(0,i.kt)("p",null,"To be able to support the ",(0,i.kt)("a",{parentName:"p",href:"/configure-application/screens/home-screen#categories-section"},"Categories Section")," and ",(0,i.kt)("a",{parentName:"p",href:"/configure-application/screens/home-screen#tags-section"},"Tags Section")," feature added to the application you will need to update your ",(0,i.kt)("inlineCode",{parentName:"p"},"section")," fields. "),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/wordpress-setup/configure-plugins#3-advanced-custom-fields"},"Step 3 of Advanced Custom Field Setup")," in Wordpress Setup under configure plugins."),(0,i.kt)("p",null,"After following this setup, you will be able to see a new section ",(0,i.kt)("inlineCode",{parentName:"p"},"Categories Section")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags Section")," while creating a new section under section type."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"v170"},"v1.7.0"),(0,i.kt)("p",null,"Version 1.7.0 brings in a lot of features to the application. You can check all the changes made in this version from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AniketMalik/ecommerce-store-support/blob/main/change_logs.md"},"Change Logs")),(0,i.kt)("p",null,"To be able to support the ",(0,i.kt)("a",{parentName:"p",href:"/configure-application/screens/home-screen#advanced-promotion-section"},"Advanced Promotion Section")," feature added to the application you will need to update your ",(0,i.kt)("inlineCode",{parentName:"p"},"section")," fields. "),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/wordpress-setup/configure-plugins#3-advanced-custom-fields"},"Step 3 of Advanced Custom Field Setup")," in Wordpress Setup under configure plugins."),(0,i.kt)("p",null,"After following this setup, you will be able to see a new section ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Promotion Section")," while creating a new section under section type."))}u.isMDXComponent=!0}}]);