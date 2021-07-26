(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[2778],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(k,r(r({ref:t},s),{},{components:n})):i.createElement(k,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8476:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r={sidebar_position:13,sidebar_label:"Firebase Dynamic Links"},l={unversionedId:"configure-application/firebase-dynamic-links",id:"configure-application/firebase-dynamic-links",isDocsHomePage:!1,title:"Firebase Dynamic Links",description:"It helps your application to be installed from your dynamic links from anywhere on the internet.",source:"@site/docs/configure-application/firebase-dynamic-links.md",sourceDirName:"configure-application",slug:"/configure-application/firebase-dynamic-links",permalink:"/woostore_pro_documentation/configure-application/firebase-dynamic-links",version:"current",sidebar_label:"Firebase Dynamic Links",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Firebase Dynamic Links"},sidebar:"tutorialSidebar",previous:{title:"Variation Swatches for WooCommerce",permalink:"/woostore_pro_documentation/configure-application/variation-swatches-woocommerce"},next:{title:"Build and Release Applications",permalink:"/woostore_pro_documentation/deployment"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Key Features implemented",id:"key-features-implemented",children:[]},{value:"Setup",id:"setup",children:[{value:"iOS integration",id:"ios-integration",children:[]},{value:"Android integration",id:"android-integration",children:[]},{value:"Application Configuration",id:"application-configuration",children:[]}]}],c={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It helps your application to be installed from your dynamic links from anywhere on the internet."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"WooStore Pro")," application version ",(0,o.kt)("inlineCode",{parentName:"li"},"v1.12.0")," or above.")),(0,o.kt)("h2",{id:"key-features-implemented"},"Key Features implemented"),(0,o.kt)("p",null,"The features implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"WooStore Pro")," with firebase dynamic links include the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Share products information using Firebase dynamic links. Whenever any user will share a product's information when Firebase Dynamic Links is enabled in the application, the receiver will be taken to the exact product screen in the application. Even if the user does not have the application installed, the link will prompt the user to install the application and then take them to the exact product details screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Share the application link itself to download the application."))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"You need to follow some setup steps if you want to enable Firebase Dynamic Links to work in your application. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"Firebase Console"),", open the Dynamic Links section.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accept the terms of service if you are prompted to do so.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Take note of your project's ",(0,o.kt)("inlineCode",{parentName:"li"},"Dynamic Links URL prefix"),", which is displayed at the top of the Dynamic Links page. A Dynamic Links URL prefix looks like ",(0,o.kt)("a",{parentName:"li",href:"https://YOUR_SUBDOMAIN.page.link"},"https://YOUR_SUBDOMAIN.page.link"),".")),(0,o.kt)("h3",{id:"ios-integration"},"iOS integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Runner.xcodeproj")," in Xcode located in ",(0,o.kt)("inlineCode",{parentName:"li"},"woostore_pro / lib / ios")," directory."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Info")," tab of your iOS app's Xcode project, scroll down to the ",(0,o.kt)("inlineCode",{parentName:"li"},"URL Types")," section and add your ",(0,o.kt)("inlineCode",{parentName:"li"},"bundle id")," of your iOS application in the ",(0,o.kt)("inlineCode",{parentName:"li"},"URL Schemes")," field. This is the same bundle id that you created while settings up the application in ",(0,o.kt)("a",{parentName:"li",href:"/mobile-app-setup/getting-started#rename-the-package"},"Renaming the package"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Firebase dynamic link 1",src:n(3921).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Capabilities")," tab of your app's Xcode project, edit the ",(0,o.kt)("inlineCode",{parentName:"li"},"Associated Domains")," value with your firebase dynamic link url prefix.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"applinks:your_sub_domain.page.link\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that you edit the value above and pattern correctly. If there is a problem with the above setup then your dynamic links will not work on iOS devices."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Firebase dynamic link 2",src:n(493).Z})),(0,o.kt)("h3",{id:"android-integration"},"Android integration"),(0,o.kt)("p",null,"To open the android application when your dynamic link is clicked then you need to add your dynamic link url prefix in ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"woostore_pro / android / app / src / main / AndroidManifest.xml")," in android studio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the following section:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data\n        android:scheme="https"\n        android:host="your-host.page.link" />\n</intent-filter>\n')),(0,o.kt)("p",null,"Approximate line number is: 35 - 42."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"your-host.page.link")," with your dynamic link url prefix you got from Firebase Dynamic Links dashboard.")),(0,o.kt)("h3",{id:"application-configuration"},"Application Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.dart")," file from ",(0,o.kt)("inlineCode",{parentName:"p"},"woostore_pro / lib / constants / config.dart")," in android studio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to ",(0,o.kt)("inlineCode",{parentName:"p"},"FirebaseDynamicLinksConfig")," class at the bottom.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the following variables:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uriPrefix")," - From Firebase Dynamic Link dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"androidPackageName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iOSBundleId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appStoreId")," - You need to add your app store id for iOS to open the links in the application and not in a browser.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can now use Firebase Dynamic Links in your application.")))}s.isMDXComponent=!0},3921:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fdl-1-0b43569c3081b1520786dc3ce9ed3d07.png"},493:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fdl-2-b66b9c576ccbe3602dd95fc53f17c65e.png"}}]);