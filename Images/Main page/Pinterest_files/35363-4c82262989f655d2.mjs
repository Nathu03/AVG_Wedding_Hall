(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[35363,39395],{850115:e=>{e.exports="https://s.pinimg.com/webapp/goodIdea-b770896d.svg"},379507:e=>{e.exports="https://s.pinimg.com/webapp/haha-e2800d2d.svg"},637956:e=>{e.exports="https://s.pinimg.com/webapp/love-c31e0b8d.svg"},909745:e=>{e.exports="https://s.pinimg.com/webapp/thanks-62775475.svg"},128206:e=>{e.exports="https://s.pinimg.com/webapp/wow-3cb697ef.svg"},483296:(e,s,t)=>{t.d(s,{G7:()=>f,ZP:()=>p,_E:()=>u,l6:()=>h,rh:()=>_});var i=t(27255),a=t(605028),l=t(66699),r=t(349700),o=t(558329),n=t(883119),c=t(785893);const d=e=>["employees","enabled"].includes(e.v2ActivateExperiment("px_show_protected_pin_stats_on_closeup"));function _(e,s,t,l){var r,n,c;if(!s.isAuth)return!1;const _=(0,o.Nc)(e)||(0,o.o)(e),p=(null===(r=e.board)||void 0===r?void 0:r.privacy)===i.Z.BoardPrivacy.PUBLIC,u=(null===(n=e.board)||void 0===n?void 0:n.privacy)===i.Z.BoardPrivacy.PROTECTED,f=(d(t)&&u||p)&&!e.is_repin&&[s.id,l].includes(null===(c=e.pinner)||void 0===c?void 0:c.id),{isStoryPin:h}=(0,a.Z)(e);return _&&(!u||d(t))||s.isPartner&&f||(e=>["employees","enabled"].includes(e.v2ActivateExperiment("web_ps4p")))(t)&&h&&f||(0,o.pU)(e)}function p({isVideo:e,isStoryPin:s,i18n:t,showPublicPinStats:i,showPrivateFullScreenPinStats:a}){return e?[{align:"start",displayText:t._('Video views', 'pinRep.pinStats.videoViews', 'Label for views of a video pin on pinrep'),field:"video_views",iconType:"play"},{align:"center",displayText:t._('Avg. time', 'pinRep.pinStats.videoAverageTime', 'Label for average time of a video pin on pinrep'),field:"video_average_time",iconType:"clock",valueFormat:"TIME"},{align:"end",displayText:t._('Saves', 'pinRep.pinStats.save', 'Label for saves of a video pin on pinrep'),field:"save",iconType:"angled-pin"}]:s?i?[{align:"start",displayText:t._('Full screen plays', 'pinRep.pinStats.fullScreenPlays', 'Label for how many times the Idea Pin has been played full screen'),field:"full_screen_play",iconType:"play"}]:a?[{align:"start",displayText:t._('Full screen plays', 'pinRep.pinStats.fullScreenPlays', 'Label for how many times the Idea Pin has been played full screen'),field:"full_screen_play",iconType:"play"},{align:"center",displayText:t._('Impressions', 'pinRep.pinStats.impression', 'Label for impressions of a pin on pinrep'),field:"impression",iconType:"eye"},{align:"end",displayText:t._('Saves', 'pinRep.pinStats.save', 'Label for saves of a pin on pinrep'),field:"save",iconType:"angled-pin"}]:[{align:"start",displayText:t._('Impressions', 'pinRep.pinStats.impression', 'Label for impressions of a pin on pinrep'),field:"impression",iconType:"eye"},{align:"center",displayText:t._('Closeups', 'pinRep.pinStats.closeups', 'Label for closeups of a pin on pinrep'),field:"closeup",iconSize:10,iconType:"hand-pointing"},{align:"end",displayText:t._('Saves', 'pinRep.pinStats.save', 'Label for saves of a pin on pinrep'),field:"save",iconType:"angled-pin"}]:[{align:"start",displayText:t._('Impressions', 'pinRep.pinStats.impression', 'Label for impressions of a pin on pinrep'),field:"impression",iconType:"eye"},{align:"center",displayText:t._('Saves', 'pinRep.pinStats.save', 'Label for saves of a pin on pinrep'),field:"save",iconType:"angled-pin"},{align:"end",displayText:t._('Link clicks', 'pinRep.pinStats.clickthrough', 'Label for click-throughs of a pin on pinrep'),field:"clickthrough",iconSize:10,iconType:"arrow-up-right"}]}function u(e,s,t,i){const{isStoryPin:l,isVideo:d}=(0,a.Z)(e),_=(0,o.Nc)(e),p=(0,o.o)(e)&&(l||!_)?e.creator_analytics:e.aggregated_pin_data.creator_analytics,u=new Date(e.created_at),f=(new Date).getTime()-u.getTime(),h=Math.floor(f/36e5),m=p?p["24h_realtime"].is_realtime:null,v=p?p["24h_realtime"].timestamp:null;let y=null;p&&(y=l||d?p.all_time_realtime.timestamp:p["30d_realtime"].timestamp);const b=y!==v,A=e=>(0,r.nk)(t._('Updated {{ lastUpdated }}', 'closeup.partnerModule.lastUpdated', 'Indicates to the user when the stats were last updated'),{lastUpdated:e}).join(""),g={timeframe:"",lastUpdated:""};if(p)if(m){const e=p["24h_realtime"].impression>=(l||d?p.all_time_realtime.impression:p["30d_realtime"].impression);g.timeframe=e?t._('Last 24 hours', 'closeup.partnerModule.lastUpdatedRealtime', 'Stats from the stated duration'):l||d?t._('Lifetime of pin', 'closeup.partnerModule.lastUpdatedAllTime', 'Stats from stated duration'):t._('Last 30 days', 'closeup.partnerModule.lastUpdated30Days', 'Stats from stated duration'),g.lastUpdated=t._('Real-time estimates', 'closeup.partnerModule.lastUpdatedRealtime', 'Indicates to user that the stats are being updated in real-time')}else if(b||h>48)if(l||d){const e=i(p.all_time_realtime.timestamp);g.timeframe=t._('Lifetime of pin', 'closeup.partnerModule.lastUpdatedAllTime', 'Stats from stated duration'),g.lastUpdated=A(e)}else{const e=i(p["30d_realtime"].timestamp);g.timeframe=t._('Last 30 days', 'closeup.partnerModule.lastUpdated30Days', 'Stats from stated duration'),g.lastUpdated=A(e)}else{const e=i(p["24h_realtime"].timestamp);g.timeframe=t._('Last 24 hours', 'closeup.partnerModule.lastUpdatedHoursAgo', 'Stats from the stated duration'),g.lastUpdated=A(e)}else g.lastUpdated=t._('Stats are currently unavailable', 'closeup.partnerModule.statsUnavailable', 'Stats status for the pin');return(0,c.jsxs)(n.xu,{alignItems:l||"lg"!==s?"center":void 0,display:l||"lg"!==s?"flex":void 0,children:[(0,c.jsx)(n.xv,{align:"end",color:"subtle",size:"100",children:g.lastUpdated}),(l||["md","sm"].includes(s))&&!!p&&(0,c.jsx)(n.xv,{color:"subtle",inline:!0,size:"100",children:" ・"}),(0,c.jsx)(n.xv,{align:"end",color:"subtle",size:"100",children:g.timeframe})]})}function f(e,s){return(0,l.Z)(s.ngettext('Last {{ count }} Day', 'Last {{ count }} Days', e, 'Previous {{ count }} days from current date', 'Previous {{ count }} days from current date'),{count:e})}function h(e,s){return(0,l.Z)(s.ngettext('Last {{ count }} Hour', 'Last {{ count }} Hours', e, 'analytics.utils', 'Previous {{ count }} hours from current time'),{count:e})}},558329:(e,s,t)=>{t.d(s,{$l:()=>d,Lb:()=>p,NE:()=>f,Nc:()=>r,SR:()=>l,bm:()=>u,dZ:()=>c,nU:()=>_,o:()=>o,pU:()=>n});var i=t(306775),a=t(623568);function l(e){var s;return(null===(s=e.closeup_attribution)||void 0===s?void 0:s.id)||null}function r(e){var s,t;return!(0,a.iR)(e.videos)&&!(0,a.hy)(e)&&0!==Object.keys((null===(s=e.aggregated_pin_data)||void 0===s||null===(t=s.creator_analytics)||void 0===t?void 0:t["30d_realtime"])||{}).length}function o(e){var s;return 0!==Object.keys((null===(s=e.creator_analytics)||void 0===s?void 0:s["30d_realtime"])||{}).length}function n(e){var s;return 0!==Object.keys((null===(s=e.public_creator_analytics)||void 0===s?void 0:s.all_time_realtime)||{}).length}function c(e){var s,t;return!(null===(s=e.creator_analytics)||void 0===s||null===(t=s["30d_realtime"])||void 0===t||!t.is_realtime)}function d(e){const s=e.aggregated_pin_data||{};return s.is_shop_the_look||s.is_stela}function _(e,s){const{native_creator:t,pinner:i,domain:a}=e;return(e.link_user_website&&e.link_user_website.official_user||e.link_domain&&e.link_domain.official_user||!!e.third_party_pin_owner||!!i&&i.domain_verified&&i.domain_url===a)&&!e.is_promoted||t||s||e.nftData}function p(e){if(!e.story_pin_data_id)return;const{story_pin_data:{metadata:s,pages:t=[]}={}}=e;return{metadata:s,detailsPage:t[1]}}const u=({viewer:e,pin:s})=>(0,i.su)(e)&&s.is_quick_promotable_by_pinner;function f({carouselInfo:e,closePanelWidth:s,isWideVideo:t,isShortImage:i,naturalWidth:a,showCloseupContentRight:l}){return!(t||!l)&&(!!i||!e&&a<s)}},306775:(e,s,t)=>{t.d(s,{Fl:()=>d,GG:()=>_,Pw:()=>u,dl:()=>n,k3:()=>f,su:()=>h,tW:()=>p});var i=t(954571),a=t(411938),l=t(826067);const r=["AU","CA","GB","IE","NZ","US","FR","DE","AT","IT","ES","NL","BE","PT","CH","NL","BE","PT","CH","SE","NO","DK","FI"],o=["BR","CY","CZ","GR","HU","LU","MT","MX","RO","SK"],n=["AU","AT","BE","BR","CA","CY","CZ","DK","FI","FR","DE","GR","HU","IE","IT","LU","MT","MX","NL","NZ","NO","PL","PT","RO","SK","ES","SE","CH","GB","US"],c=["US","CA"],d=(e,s)=>{if(o.includes(e.toUpperCase())){const{anyEnabled:e}=s.experiments.checkExperiment("advertiser_growth_qp_expansion");return e}return r.includes(e.toUpperCase())},_=e=>!!e&&c.includes(e.toUpperCase()),p=Object.freeze({NOT_ANSWERED:0,YES:1,NO:2,NOT_SURE:3}),u=({requestContext:e,history:s,pinId:t})=>{((e,s)=>{const t=(0,l.ru)("/business/convert",{next:s});e.push(t)})(s,(e=>e?`/business/ad_create?pinId=${e}`:"/business/ad_create")(t))},f=e=>{const s=e.trim().split(" ").filter((e=>!!e));return{firstName:s.length>0?s[0]:"",lastName:s.length>1?s.slice(1).join(" "):""}},h=e=>e.isAuth&&!e.isPartner&&!(0,a.Z)(null,e)&&!(0,i.Z)(null,e)},954571:(e,s,t)=>{t.d(s,{Z:()=>i});function i(e,s){if(!(e||{}).created_at&&!(s||{}).createdAt)return!1;let t="";s&&s.createdAt?t=s.createdAt:e&&e.created_at&&(t=e.created_at);const i=new Date(t);return i.setDate(i.getDate()+28),(new Date).getTime()<i.getTime()}},411938:(e,s,t)=>{t.d(s,{Z:()=>i});function i(e,s,t=28){if(!(e||{}).resurrection_info&&!(s||{}).resurrectionInfo)return!1;let i;i=s?((s||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;const a=new Date,l=i?new Date(i):a;return l.setDate(l.getDate()+t),(new Date).getTime()<l.getTime()}},681227:(e,s,t)=>{function i(e){const s=Object.keys(e);if(s.length>0){return s.sort(((s,t)=>e[t]-e[s])).slice(0,3)}return null}function a(e){const s=Object.values(e);if(s.length>0){return s.reduce(((e,s)=>e+s),0)}return 0}function l(e,s){const{videos:t,is_downstream_promotion:i,is_promoted:a,story_pin_data_id:l,board:r}=e;return!(a||i||(!t||!t.id)&&!l||s||null!=r&&r.is_collaborative&&r.collaborated_by_me)}t.d(s,{At:()=>i,J6:()=>l,Ud:()=>a})},869899:(e,s,t)=>{t.r(s),t.d(s,{RoleBasedAccessControlProvider:()=>b,useRoleBasedAccessControlContext:()=>y});var i=t(667294),a=t(389643),l=t(784590),r=t(19121),o=t(217468),n=t(425288),c=t(70061);const d=e=>{const s={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&("object"!=typeof e[t]||null===e[t]||Array.isArray(e[t])?s[(0,c.Z)(t)]=e[t]:s[(0,c.Z)(t)]=d(e[t]));return s},_=(e,s)=>{const t=[];for(const l in e)l!==s&&t.push({id:l,...d(e[l])});const i=t.sort((({user:{businessName:e}},{user:{businessName:s}})=>e.localeCompare(s))),a=new Map;for(const l of i)a.set(l.id,l);return a};var p=t(622096);const u={profiles:new Map,headerVisible:!1,orbacVisibility:!1,activeProfile:void 0,disableProfileChanger:!1},f=(e,s)=>{switch(s.type){case"LOAD_PROFILES":return{...e,profiles:s.payload};case"SET_ACTIVE_PROFILE":return{...e,activeProfile:s.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:s.payload};case"TOGGLE_ORBAC_VISIBILITY":return{...e,orbacVisibility:s.payload};case"TOGGLE_DISABLE_PROFILE_CHANGER":return{...e,disableProfileChanger:s.payload};default:return e}},h=e=>{const[s,t]=(0,i.useReducer)(f,u),a=(({dispatch:e,isEnabled:s,state:t})=>{const{orbacVisibility:a,disableProfileChanger:l,headerVisible:r}=t;return{changeProfile:(0,i.useCallback)((t=>{s&&e({type:"SET_ACTIVE_PROFILE",payload:t})}),[s,e]),toggleORBACVisibility:(0,i.useCallback)((t=>{s&&e({type:"TOGGLE_ORBAC_VISIBILITY",payload:null!=t?t:!a})}),[s,e,a]),toggleDisableProfileChanger:(0,i.useCallback)((t=>{s&&e({type:"TOGGLE_DISABLE_PROFILE_CHANGER",payload:null!=t?t:!l})}),[s,e,l]),toggleHeaderVisibility:(0,i.useCallback)((t=>{s&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:null!=t?t:!r})}),[s,e,r])}})({dispatch:t,isEnabled:e,state:s}),{activeProfile:l,orbacVisibility:r}=s;(0,i.useEffect)((()=>{const e=(0,p.qn)("orbacActiveProfile",!1);e&&t({type:"SET_ACTIVE_PROFILE",payload:e})}),[]),(0,i.useEffect)((()=>{const e=(0,p.qn)("orbacVisibilty",!1);e&&t({type:"TOGGLE_ORBAC_VISIBILITY",payload:e})}),[]),(0,i.useEffect)((()=>{(0,p.Nh)("orbacVisibility",r)}),[r]),(0,i.useEffect)((()=>{(0,p.Nh)("orbacActiveProfile",l)}),[l]);return{state:s,actions:a,receiveProfiles:(0,i.useCallback)(((e,s)=>{t({type:"LOAD_PROFILES",payload:_(e,s)})}),[t])}};var m=t(785893);const{Provider:v,useMaybeHook:y}=(0,n.Z)("RoleBasedAccessControlContext"),b=({children:e})=>{const s=(0,o.t)("web_m10n_business_access_orbac_www"),t=(0,r.Z)(),n=Boolean(t.isAuth&&t.isPartner&&s().anyEnabled),{state:c,actions:d,receiveProfiles:_}=h(n),{activeProfile:p,headerVisible:u,profiles:f=[]}=c,y=f?Array.from(f.values()):[],b=(0,a.Z)(y),A=!!(t.isAuth&&y.length>0)&&b,g=t.isAuth?t.id:"",P=t.isAuth?t.username:"",{changeProfile:T,toggleORBACVisibility:E,toggleDisableProfileChanger:S,toggleHeaderVisibility:L}=d;(0,i.useEffect)((()=>{n&&("string"!=typeof b?p||T(g):T(b))}),[b,g,n,T,p]),(0,i.useEffect)((()=>{n&&(A&&!u&&L(!0),!A&&u&&L(!1))}),[L,A,n,u,f]);const{data:I}=(0,l.Z)({name:"ApiResource",options:{url:"/vx/business_access/profiles/",disable_auth_failure_redirect:!0},dangerouslyDisableFetch:!n}),z=null==I?void 0:I.profiles;let R;t&&t.isAuth&&c.activeProfile===t.id?R={id:t.id,permissions:["OWNER"],user:{username:P,businessName:t.fullName,imgUrl:t.imageSmallUrl}}:p&&c.profiles&&(R=c.profiles.get(p)),(0,i.useEffect)((()=>{z&&_(z,g)}),[_,z,g]);const w=c.profiles?Array.from(c.profiles.values()):[];return(0,m.jsx)(v,{value:{profiles:w,headerVisible:c.headerVisible,activeProfile:R,changeProfile:T,toggleORBACVisibility:E,toggleDisableProfileChanger:S,toggleHeaderVisibility:L},children:e})}},717615:(e,s,t)=>{t.d(s,{Z:()=>l});var i=t(217468),a=t(869899);const l=()=>{const e=(0,i.t)("web_m10n_business_access_orbac_www"),s=(0,a.useRoleBasedAccessControlContext)(),{activeProfile:t}=s||{};return e().anyEnabled&&t||Object.freeze({})}},389643:(e,s,t)=>{t.d(s,{Z:()=>n});var i=t(966338),a=t(19121),l=t(217468),r=t(53987),o=t(925927);const n=e=>{var s;const t=(0,o.TH)(),n=(0,a.Z)(),{anyEnabled:c}=(0,l.t)("web_m10n_business_access_orbac_www")(),d=(0,o.$B)("/:username"),_=null==d||null===(s=d.params)||void 0===s?void 0:s.username,p=(0,o.$B)("/pin/:id"),u=(0,i.useSelector)((e=>{var s,t,i,a;return!(null==p||null===(s=p.params)||void 0===s||!s.id)&&(null==e||null===(t=e.pins)||void 0===t||null===(i=t[p.params.id])||void 0===i||null===(a=i.pinner)||void 0===a?void 0:a.id)}));if((0,r.ej)(t))return!1;if((0,r.RU)(t))return!0;if((0,r.mY)(t))return c;const f=e.concat(n.isAuth?{user:{username:n.username},id:n.id}:{}).find((e=>{const{user:s={},id:t}=e||{},{username:i}=s;return!!(i&&_||u&&t)&&(i===_||u===t)}));return!!f&&f.id}},231947:(e,s,t)=>{t.d(s,{D3:()=>c,DX:()=>o,KY:()=>d,Ms:()=>i,N1:()=>_,_P:()=>r,lJ:()=>l,nl:()=>a,q6:()=>n});const i=(e,s)=>{let t=e&&e.isAuth?e.username:"";return e&&s&&s.user&&s.user.username&&(t=s.user.username),t},a=(e,s)=>Boolean(s&&s.user&&e&&e.isAuth&&s.id!==e.id?s.user.eligibleForStlTool:e&&e.isAuth&&e.eligibleForStlTool),l=(e,s)=>e&&e.isAuth&&s&&s.id&&s.id!==e.id?s.id:"",r=(e,s,t)=>{var i;return t&&t.user&&s&&s.isAuth&&t.id!==s.id?t.user.merchantId:null===(i=e.advertiser)||void 0===i?void 0:i.merchant_id},o=(e,s,t)=>t&&t.user&&e.isAuth&&t.id!==e.id?t.user.scheduledPinCount||0:e.isAuth&&s&&s.scheduled_pin_count||0,n=(e,s,t)=>!!(e&&e.isAuth&&t&&t.id&&t.id!==e.id&&t.id===s),c=(e,s,t)=>!!(n(e,s,t)||e&&e.isAuth&&s===e.id),d=(e,s,t)=>{const i=s&&s.owner&&s.owner.id||"";return c(e,i,t)};function _(e,s,t){const i=s?s.id:"";return c(e,i,t)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/35363-4c82262989f655d2.mjs.map