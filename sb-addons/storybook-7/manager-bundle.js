try{
(()=>{var y=__STORYBOOK_API__,{ActiveTabs:S,Consumer:_,ManagerContext:f,Provider:T,addons:s,combineParameters:O,controlOrMetaKey:v,controlOrMetaSymbol:x,eventMatchesShortcut:A,eventToShortcut:M,isMacLike:P,isShortcutTaken:C,keyToSymbol:j,merge:w,mockChannel:B,optionOrAltSymbol:G,shortcutMatchesShortcut:I,shortcutToHumanString:R,types:K,useAddonState:H,useArgTypes:Y,useArgs:D,useChannel:E,useGlobalTypes:N,useGlobals:J,useParameter:q,useSharedState:L,useStoryPrepared:U,useStorybookApi:V,useStorybookState:W}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:i,createCache:ne,createGlobal:ae,createReset:ce,css:le,darken:pe,ensure:de,ignoreSsrWarning:ue,isPropValid:me,jsx:be,keyframes:he,lighten:ke,styled:ge,themes:ye,typography:Se,useTheme:_e,withTheme:fe}=__STORYBOOK_THEMING__;var r={name:"react-kindling",version:"3.0.4",author:"Justin Mahar <contact@justinmahar.com>",description:"A template to build, test, and share React components and hooks easily.",homepage:"https://justinmahar.github.io/react-kindling/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-kindling.git"},bugs:{url:"https://github.com/justinmahar/react-kindling/issues"},keywords:[],peerDependencies:{react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.4",prettier:"^3.2.5",react:"^18.2.0","react-dom":"^18.2.0","react-html-props":"^2.0.3","remark-gfm":"^3.0.1","replace-in-file":"^7.1.0",storybook:"^7.6.12",typescript:"^5.3.3",webpack:"^5.90.1"}};var c=r.name,l=r.homepage,p="light",d=void 0,n=i({base:p,brandTitle:c,brandUrl:l,brandImage:d});s.setConfig({theme:n});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
