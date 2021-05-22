(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[5837],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5189:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return p},default:function(){return c}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),o={sidebar_position:9,sidebar_label:"Language Config"},r={unversionedId:"configure-application/language-config",id:"configure-application/language-config",isDocsHomePage:!1,title:"Language Configs",description:"In this section you can learn how to add or remove more languages in the application using android studio.",source:"@site/docs/configure-application/language-config.md",sourceDirName:"configure-application",slug:"/configure-application/language-config",permalink:"/woostore_pro_documentation/configure-application/language-config",version:"current",sidebar_label:"Language Config",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Language Config"},sidebar:"tutorialSidebar",previous:{title:"Change App Colors",permalink:"/woostore_pro_documentation/configure-application/change-app-colors"},next:{title:"WooCommerce Points and Rewards Support",permalink:"/woostore_pro_documentation/configure-application/product-points-rewards"}},p=[{value:"Add New Language",id:"add-new-language",children:[]},{value:"Remove Language",id:"remove-language",children:[{value:"If you have installed <code>Flutter Intl</code> plugin",id:"if-you-have-installed-flutter-intl-plugin",children:[]},{value:"If you have not installed <code>Flutter Intl</code> plugin",id:"if-you-have-not-installed-flutter-intl-plugin",children:[]}]}],d={toc:p};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this section you can learn how to add or remove more languages in the application using android studio."),(0,l.kt)("h2",{id:"add-new-language"},"Add New Language"),(0,l.kt)("p",null,"To add new language in the application you will need to create some files. This guide will create new files using android studio."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open android studio on your machine.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"Plugins")," window from ",(0,l.kt)("inlineCode",{parentName:"p"},"Preferences")," on macOS and ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings")," on Windows.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Marketplace")," option from the top tabbar.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the search field enter ",(0,l.kt)("inlineCode",{parentName:"p"},"Flutter Intl"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Flutter Intl Installation",src:n(9675).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Install")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Apply"),". You will need to restart android studio for the plugin to be activated.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tools")," menu option select ",(0,l.kt)("inlineCode",{parentName:"p"},"Flutter Intl")," and click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Add locale"),"."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Checkout this link to see the names and code of the locales supported: ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/flutter_localizations/GlobalMaterialLocalizations-class.html"},(0,l.kt)("strong",{parentName:"a"},"Official Support Locales"))))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Flutter Intl Installation",src:n(4745).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"language code")," in the field and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),". For example is we were to add Arabic then we will write ",(0,l.kt)("inlineCode",{parentName:"p"},"ar")," in the field.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"This will create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"intl_xx.arb")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"woostore_pro / lib / l10n")," directory. This file will be empty by default.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the ",(0,l.kt)("inlineCode",{parentName:"p"},"intl_en.arb")," file from ",(0,l.kt)("inlineCode",{parentName:"p"},"woostore_pro / lib / l10n")," directory in android studio. Copy all the contents of the file and paste it into the newly created ",(0,l.kt)("inlineCode",{parentName:"p"},"intl_xx.arb")," file.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"@@locale")," key value with the language code of the new language you created."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="intl_en.arb"',title:'"intl_en.arb"'},'{\n"@@locale": "en",\n...\n}\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="intl_xx.arb"',title:'"intl_xx.arb"'},'{\n"@@locale": "xx",\n...\n}\n')),(0,l.kt)("p",{parentName:"li"},"Replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"xx")," with the actual language code.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally ",(0,l.kt)("inlineCode",{parentName:"p"},"Save")," the file by pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"command + s")," on Mac and ",(0,l.kt)("inlineCode",{parentName:"p"},"control + s")," on Windows."))),(0,l.kt)("p",null,"You will also need to enter some more modifications in the application to show an option to change the locale to the newly added language. Follow the steps below to add the same."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"languages.dart")," file in android studio. This file is located in ",(0,l.kt)("inlineCode",{parentName:"p"},"woostore_pro / lib / constants / languages.dart"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"kSupportedLanguages")," variable with the new language entry.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The following is the structure of each language entry in the application. You need to follow the same pattern while adding the new entry."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"{\n  'languageCode': 'en',\n  'countryCode': 'US',\n  'title': 'English',\n  'asset': 'united-states.svg'\n},\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"asset")," in the above code snippet is an ",(0,l.kt)("inlineCode",{parentName:"p"},"SVG")," format file which represents the flag of the corresponding country. You need to add the asset in ",(0,l.kt)("inlineCode",{parentName:"p"},"woostore_pro / lib / assets / svg / flags")," directory. Make sure the same is same as you enter in the asset field above."))),(0,l.kt)("h2",{id:"remove-language"},"Remove Language"),(0,l.kt)("h3",{id:"if-you-have-installed-flutter-intl-plugin"},"If you have installed ",(0,l.kt)("inlineCode",{parentName:"h3"},"Flutter Intl")," plugin"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tools")," menu option select ",(0,l.kt)("inlineCode",{parentName:"p"},"Flutter Intl")," and click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Remove locale"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Flutter Intl Installation",src:n(4745).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"language code")," from the dropdown and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),". For example is you were to remove Arabic then you will select ",(0,l.kt)("inlineCode",{parentName:"p"},"ar")," in the field. This will remove the language from the application."))),(0,l.kt)("h3",{id:"if-you-have-not-installed-flutter-intl-plugin"},"If you have not installed ",(0,l.kt)("inlineCode",{parentName:"h3"},"Flutter Intl")," plugin"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open android studio on your machine.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"Plugins")," window from ",(0,l.kt)("inlineCode",{parentName:"p"},"Preferences")," on macOS and ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings")," on Windows.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Marketplace")," option from the top tabbar.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the search field enter ",(0,l.kt)("inlineCode",{parentName:"p"},"Flutter Intl"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Flutter Intl Installation",src:n(9675).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Install")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Apply"),". You will need to restart android studio for the plugin to be activated.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tools")," menu option select ",(0,l.kt)("inlineCode",{parentName:"p"},"Flutter Intl")," and click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Remove locale"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Flutter Intl Installation",src:n(4745).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"language code")," from the dropdown and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),". For example is you were to remove Arabic then you will select ",(0,l.kt)("inlineCode",{parentName:"p"},"ar")," in the field. This will remove the language from the application."))))}c.isMDXComponent=!0},9675:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lc-1-ed774f948780984a6f40292114a8cc92.png"},4745:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lc-2-608e3201dd21d1775aed1a76d808ac8d.png"}}]);