"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3483],{2496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=t(3010),o=t(887);const s={slug:"/development"},i="Development",r={id:"contributing/development",title:"Development",description:"Frontend",source:"@site/community/contributing/development.md",sourceDirName:"contributing",slug:"/development",permalink:"/zh-CN/community/development",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1701252196,formattedLastUpdatedAt:"2023\u5e7411\u670829\u65e5",frontMatter:{slug:"/development"},sidebar:"community",previous:{title:"Issues",permalink:"/zh-CN/community/issues"},next:{title:"Pull Request",permalink:"/zh-CN/community/pull-request"}},a={},d=[{value:"Frontend",id:"frontend",level:2},{value:"Installation",id:"installation",level:3},{value:"Code conventions",id:"code-conventions",level:3},{value:"Backend",id:"backend",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Code conventions",id:"code-conventions-1",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"development",children:"Development"}),"\n",(0,l.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,l.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Ensure you have ",(0,l.jsx)(n.a,{href:"https://nodejs.org/en",children:"node"})," and ",(0,l.jsx)(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})," installed."]}),"\n",(0,l.jsx)(n.li,{children:"After cloning the repository, run the following command. This will install all dependencies as well as build all local packages."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cd ./ui\n$ pnpm install\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["To start a development server, run ",(0,l.jsx)(n.code,{children:"pnpm start"}),". now, your browser should already open automatically, and autoload ",(0,l.jsx)(n.code,{children:"http://localhost:3000"}),". you can also manually visit it."]}),"\n",(0,l.jsxs)(n.li,{children:["To switch API, you can modify the ",(0,l.jsx)(n.code,{children:"ui/.env.development"})," file and then re-run pnpm start. If you're just using it yourself, we recommend creating a ",(0,l.jsx)(n.code,{children:".env.development.local"})," file that defines the address of the api you're going to use."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"code-conventions",children:"Code conventions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Most important: Look around."})," Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc."]}),"\n",(0,l.jsxs)(n.li,{children:["We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, you can run  ",(0,l.jsx)(n.code,{children:"pnpm lint"})," and ",(0,l.jsx)(n.code,{children:"pnpm prettier"})," to fix most code formatting."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"No runtime errors"})," Before submitting the code, please ensure that there will be no errors when running locally. This will greatly reduce the workload of review."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,l.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Ensure you have ",(0,l.jsx)(n.a,{href:"https://go.dev/doc/install",children:"golang"})," installed."]}),"\n",(0,l.jsx)(n.li,{children:"After cloning the repository, run the following command for build."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ go mod download\n$ go run cmd/answer/main.go init -C ./answer-data\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Visit ",(0,l.jsx)(n.code,{children:"http://localhost/"})," to see the installation page and complete the installation."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the following command to start the server."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ go run cmd/answer/main.go run -C ./answer-data\n"})}),"\n",(0,l.jsx)(n.h3,{id:"code-conventions-1",children:"Code conventions"}),"\n",(0,l.jsxs)(n.p,{children:["We recommend that you follow ",(0,l.jsx)(n.a,{href:"https://github.com/uber-go/guide",children:"uber's Golang Guidelines"})," code style."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},887:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var l=t(5170);const o={},s=l.createContext(o);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);