(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[4352],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return h},kt:function(){return c}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,u=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?o.createElement(u,i(i({ref:t},h),{},{components:a})):o.createElement(u,i({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6791:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return h}});var o=a(2122),n=a(9756),r=(a(7294),a(3905)),i={sidebar_position:5,sidebar_label:"Generate Key Hashes Manually"},l={unversionedId:"reference/key-hash-manually",id:"reference/key-hash-manually",isDocsHomePage:!1,title:"Generate Key Hashes Manually",description:"Key hashes are required for Facebook login to work with your application. Follow the steps below to create your development and release key hashes manually.",source:"@site/docs/reference/key-hash-manually.md",sourceDirName:"reference",slug:"/reference/key-hash-manually",permalink:"/woostore_pro_documentation/reference/key-hash-manually",version:"current",sidebar_label:"Generate Key Hashes Manually",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Generate Key Hashes Manually"},sidebar:"tutorialSidebar",previous:{title:"Generate SHA-1 Fingerprint Manually",permalink:"/woostore_pro_documentation/reference/sha-fingerprint-manually"},next:{title:"Sign Apk Manually",permalink:"/woostore_pro_documentation/reference/sign-apk-manually"}},s=[{value:"Windows",id:"windows",children:[{value:"Generating a Development Key Hash",id:"generating-a-development-key-hash",children:[]},{value:"Generating a Release Key Hash",id:"generating-a-release-key-hash",children:[]}]},{value:"Mac OS or Linux",id:"mac-os-or-linux",children:[{value:"Generating a Development Key Hash",id:"generating-a-development-key-hash-1",children:[]},{value:"Generating a Release Key Hash",id:"generating-a-release-key-hash-1",children:[]}]}],p={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Key hashes are required for Facebook login to work with your application. Follow the steps below to create your development and release key hashes manually."),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"This section will help you to create development and release key hashes for your application manually using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Command Prompt"),"."),(0,r.kt)("h3",{id:"generating-a-development-key-hash"},"Generating a Development Key Hash"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://code.google.com/archive/p/openssl-for-windows/downloads"},"openssl-for-windows")," openssl library for Windows from the Google Code Archive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate a development key hash, run the following command in a command prompt in the Java SDK folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'keytool -exportcert -alias androiddebugkey -keystore "C:\\Users\\USERNAME\\.android\\debug.keystore" | "PATH_TO_OPENSSL_LIBRARY\\bin\\openssl" sha1 -binary | "PATH_TO_OPENSSL_LIBRARY\\bin\\openssl" base64\n')),(0,r.kt)("p",{parentName:"li"},"You need to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"USERNAME")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\USERNAME\\.android\\debug.keystore")," with your user PC name."),(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH_TO_OPENSSL_LIBRARY")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH_TO_OPENSSL_LIBRARY\\bin\\openssl")," with the path where you downloaded the ",(0,r.kt)("a",{parentName:"p",href:"https://code.google.com/archive/p/openssl-for-windows/downloads"},"openssl-for-windows"),"."),(0,r.kt)("p",{parentName:"li"},"The password for debug key is ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," so when prompted for a password enter it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully completing the step above, a debug key hash will be printed on the terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"Enter keystore password:\nBGXBgq/KmXXXXXXXXXXXXqOcmvg=\n")),(0,r.kt)("p",{parentName:"li"},"From your result copy the hashes which look like ",(0,r.kt)("inlineCode",{parentName:"p"},"BGXBgq/KmXXXXXXXXXXXXqOcmvg=")," this and save for later use. These hashes will be used in the android integration of ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/social-login#facebook-login"},"Facebook Login"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to provide a development key hash for the development environment of ",(0,r.kt)("strong",{parentName:"p"},"each person")," who works on your app."))),(0,r.kt)("h3",{id:"generating-a-release-key-hash"},"Generating a Release Key Hash"),(0,r.kt)("p",null,"Android apps must be digitally signed with a release key before you can upload them to the store. To generate a hash of your release key follow the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," in android studio and paste the following command"),(0,r.kt)("p",{parentName:"li"},"Follow this if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"tools")," directory in the root of your project. You will have a tools directory in the root folder of the project if you are using version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.5.6")," or above."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="With Tools Directory"',title:'"With',Tools:!0,'Directory"':!0},"bash tools/create-release-key-hash.sh\n")),(0,r.kt)("p",{parentName:"li"},"It will prompt you for a password. The password for your release certificate is the password that you entered in ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file in ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/release-keys#password"},"Editing Keystore Config File - Password"),"."),(0,r.kt)("p",{parentName:"li"},"Follow this if you ",(0,r.kt)("strong",{parentName:"p"},"do not")," have a ",(0,r.kt)("inlineCode",{parentName:"p"},"tools")," directory in the root of your project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Without Tools Directory"',title:'"Without',Tools:!0,'Directory"':!0},"keytool -exportcert -alias YOUR_RELEASE_KEY_ALIAS -keystore YOUR_RELEASE_KEY_PATH | openssl sha1 -binary | openssl base64\n")),(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_RELEASE_KEY_ALIAS")," with the alias that you used while creating your keystore."),(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_RELEASE_KEY_PATH")," with the full path to your release keystore which you have created."),(0,r.kt)("p",{parentName:"li"},"After editing your specific values, it should look something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example"',title:'"Example"'},'keytool -exportcert -alias "my_alias" -keystore "path/to/my/upload.keystore" | openssl sha1 -binary | openssl base64\n')),(0,r.kt)("p",{parentName:"li"},"The password for this is the same which you used while creating your release keystore.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully completing the step above, a release key hash will be printed on the terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"Enter keystore password:\nBGXBgq/KmXXXXXXXXXXXXqOcmvg=\n")),(0,r.kt)("p",{parentName:"li"},"From your result copy the hashes which look like ",(0,r.kt)("inlineCode",{parentName:"p"},"BGXBgq/KmXXXXXXXXXXXXqOcmvg=")," this and save for later use. These hashes will be used in the android integration of ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/social-login#facebook-login"},"Facebook Login"),"."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"mac-os-or-linux"},"Mac OS or Linux"),(0,r.kt)("p",null,"This section will help you to create development and release key hashes for your application manually using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal"),"."),(0,r.kt)("h3",{id:"generating-a-development-key-hash-1"},"Generating a Development Key Hash"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate a development key hash, open a terminal window and run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64\n")),(0,r.kt)("p",{parentName:"li"},"The password for debug key is ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," so when prompted for a password enter it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully completing the step above, a debug key hash will be printed on the terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"Enter keystore password:\nBGXBgq/KmXXXXXXXXXXXXqOcmvg=\n")),(0,r.kt)("p",{parentName:"li"},"From your result copy the hashes which look like ",(0,r.kt)("inlineCode",{parentName:"p"},"BGXBgq/KmXXXXXXXXXXXXqOcmvg=")," this and save for later use. These hashes will be used in the android integration of ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/social-login#facebook-login"},"Facebook Login"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to provide a development key hash for the development environment of ",(0,r.kt)("strong",{parentName:"p"},"each person")," who works on your app."))),(0,r.kt)("h3",{id:"generating-a-release-key-hash-1"},"Generating a Release Key Hash"),(0,r.kt)("p",null,"Android apps must be digitally signed with a release key before you can upload them to the store. To generate a hash of your release key follow the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," in android studio and paste the following command"),(0,r.kt)("p",{parentName:"li"},"Follow this if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"tools")," directory in the root of your project. You will have a tools directory in the root folder of the project if you are using version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.5.6")," or above."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="With Tools Directory"',title:'"With',Tools:!0,'Directory"':!0},"bash tools/create-release-key-hash.sh\n")),(0,r.kt)("p",{parentName:"li"},"It will prompt you for a password. The password for your release certificate is the password that you entered in ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file in ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/release-keys#password"},"Editing Keystore Config File - Password"),"."),(0,r.kt)("p",{parentName:"li"},"Follow this if you ",(0,r.kt)("strong",{parentName:"p"},"do not")," have a ",(0,r.kt)("inlineCode",{parentName:"p"},"tools")," directory in the root of your project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Without Tools Directory"',title:'"Without',Tools:!0,'Directory"':!0},"keytool -exportcert -alias YOUR_RELEASE_KEY_ALIAS -keystore YOUR_RELEASE_KEY_PATH | openssl sha1 -binary | openssl base64\n")),(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_RELEASE_KEY_ALIAS")," with the alias that you used while creating your keystore."),(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_RELEASE_KEY_PATH")," with the full path to your release keystore which you have created."),(0,r.kt)("p",{parentName:"li"},"After editing your specific values, it should look something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example"',title:'"Example"'},'keytool -exportcert -alias "my_alias" -keystore "path/to/my/upload.keystore" | openssl sha1 -binary | openssl base64\n')),(0,r.kt)("p",{parentName:"li"},"The password for this is the same which you used while creating your release keystore.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully completing the step above, a release key hash will be printed on the terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"Enter keystore password:\nBGXBgq/KmXXXXXXXXXXXXqOcmvg=\n")),(0,r.kt)("p",{parentName:"li"},"From your result copy the hashes which look like ",(0,r.kt)("inlineCode",{parentName:"p"},"BGXBgq/KmXXXXXXXXXXXXqOcmvg=")," this and save for later use. These hashes will be used in the android integration of ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/social-login#facebook-login"},"Facebook Login"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You have successfully created the Key Hashes for your debug and release certificates. Now you can continue to follow the guide from where you came here to create key hashes manually.")))}h.isMDXComponent=!0}}]);