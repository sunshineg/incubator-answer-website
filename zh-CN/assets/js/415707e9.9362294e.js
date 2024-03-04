"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[2289],{41114:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(43010),t=s(90887);const r={slug:"/users"},l="Users",d={id:"guides/users",title:"Users",description:"Top users",source:"@site/docs/guides/users.md",sourceDirName:"guides",slug:"/users",permalink:"/zh-CN/docs/users",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"PrimmaAnna",lastUpdatedAt:1709538457,formattedLastUpdatedAt:"2024\u5e743\u67084\u65e5",frontMatter:{slug:"/users"},sidebar:"docs",previous:{title:"Tags",permalink:"/zh-CN/docs/tags"},next:{title:"Review",permalink:"/zh-CN/docs/review"}},o={},a=[{value:"Top users",id:"top-users",level:2},{value:"Sign up",id:"sign-up",level:2},{value:"Log in",id:"log-in",level:2},{value:"Log in with email and password",id:"log-in-with-email-and-password",level:3},{value:"Log in from thridy-party OAuth",id:"log-in-from-thridy-party-oauth",level:3},{value:"Reset password",id:"reset-password",level:2},{value:"Notification",id:"notification",level:2},{value:"Inbox",id:"inbox",level:3},{value:"Achievement",id:"achievement",level:3},{value:"Profile",id:"profile",level:2},{value:"Settings",id:"settings",level:2},{value:"Unsubscribe email",id:"unsubscribe-email",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"users",children:"Users"}),"\n",(0,i.jsx)(n.h2,{id:"top-users",children:"Top users"}),"\n",(0,i.jsx)(n.p,{children:"Show top users in the platform."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Users with the highest reputation scores this week"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users who increased the most reputation this week"}),"\n",(0,i.jsx)(n.li,{children:"Show top 20 users with their increased reputation (ordered)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Users who voted the most this week"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Number of votes cast for others"}),"\n",(0,i.jsx)(n.li,{children:"Show top 20 users with their number of votes (ordered)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Our community staff"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Show all moderators, administrators"}),"\n",(0,i.jsx)(n.li,{children:"Ordered by reputation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sign-up",children:"Sign up"}),"\n",(0,i.jsx)(n.p,{children:"A user wants to sign up from email."}),"\n",(0,i.jsx)(n.mermaid,{value:"---\ntitle: Sign up process\n---\nstateDiagram\n    direction LR\n    A1 : Fill sign up form\n    B1 : Send confirm email\n    B2 : Visit activation link\n    %% B3 : Click active button\n    Z : Active successful\n    inactivate : Inactive user\n    normal : Normal user\n\n    [*] --\x3e A1\n    state Guest {\n      A1 --\x3e B1\n    }\n    state inactivate {\n      direction LR\n      B1 --\x3e B2\n      B2 --\x3e Z\n    }\n    state normal {\n      Z\n    }\n    Z --\x3e [*]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Display name (abbreviated as "name"):',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Less than 30 characters."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Username:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unique."}),"\n",(0,i.jsx)(n.li,{children:"Less than 30 characters."}),"\n",(0,i.jsxs)(n.li,{children:["Can only contain ",(0,i.jsx)(n.code,{children:"0-9"}),", lowercase letters ",(0,i.jsx)(n.code,{children:"a-z"}),", symbols ",(0,i.jsx)(n.code,{children:"- . _"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Generated based on the display name, spaces are replaced with symbols ",(0,i.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If there is a repetition, add 4 random characters at the end, e.g. ",(0,i.jsx)(n.code,{children:"joe-x7k2"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Reserve keywords are not allowed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Record the time of registration and the IP address."}),"\n",(0,i.jsx)(n.li,{children:"The activation link is valid for 14 days."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,i.jsx)(n.p,{children:"A user wants to log in. The user's login permissions are related to the status."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"User status"}),(0,i.jsx)(n.th,{children:"Normal"}),(0,i.jsx)(n.th,{children:"Inactive"}),(0,i.jsx)(n.th,{children:"Suspended"}),(0,i.jsx)(n.th,{children:"Deleted"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Log in"}),(0,i.jsx)(n.td,{children:"Allow"}),(0,i.jsx)(n.td,{children:"Denied"}),(0,i.jsx)(n.td,{children:"Denied"}),(0,i.jsx)(n.td,{children:"Denied"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"log-in-with-email-and-password",children:"Log in with email and password"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fill email and password to log in.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'If the user does not exist, the message "Invalid email or password" is displayed to prevent the account from being attacked.'}),"\n",(0,i.jsx)(n.li,{children:"When an inactive user logs in, go to the page that asks for activation."}),"\n",(0,i.jsx)(n.li,{children:"When an suspended user logs in, go to the ban prompt page."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Login status is remembered for 14 days by default."}),"\n",(0,i.jsx)(n.li,{children:'Click "Forgot password" to reset password if someone forgot their password.'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"log-in-from-thridy-party-oauth",children:"Log in from thridy-party OAuth"}),"\n",(0,i.jsx)(n.mermaid,{value:'---\ntitle: Thirdy-party OAuth process\n---\nflowchart TD\n  A([Start]) -- OAuth authorization --\x3e record{"Authorization already exists?"}\n  record -- No --\x3e get_email{Can get email}\n  record -- Yes --\x3e Z([Login successful])\n\n'}),"\n",(0,i.jsx)(n.h2,{id:"reset-password",children:"Reset password"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h2,{id:"notification",children:"Notification"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h3,{id:"inbox",children:"Inbox"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h3,{id:"achievement",children:"Achievement"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h3,{id:"unsubscribe-email",children:"Unsubscribe email"}),"\n",(0,i.jsx)(n.p,{children:"TODO"})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},90887:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var i=s(85170);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);