import{a as Ge}from"./chunk-572BBOMM.js";import{a as Ae,b as Ke}from"./chunk-2WKPIT7E.js";import{c as Ue,d as re,e as Ye,f as Je,g as ce,h as Xe}from"./chunk-HRBZGBJO.js";import{i as qe,j as q,k as We}from"./chunk-7LAY7XF2.js";import{c as Ve,d as be,f as de,g as fe}from"./chunk-HEVQ3NIT.js";import"./chunk-DYP7JCZX.js";import{D as He,E as Qe,F as A,K as he,O as K,Q as ve,_ as _e,a as te,b as oe,ba as je,c as Re,e as ne,g as _,ga as ae,h as ie,ha as B,ka as se,na as S,z as Ne}from"./chunk-EB76AFJG.js";import{$a as b,Ab as T,Bb as Oe,Db as Se,Eb as De,Fb as Fe,Hb as X,Ib as Z,Jb as j,Ka as g,Kb as Be,La as J,O as Q,Oa as k,P as Y,Pa as Me,Pb as Ee,Q as G,Qa as f,Sa as ke,U as w,Ub as x,Vb as Le,Xb as F,Z as E,Zb as ee,_ as L,_a as C,ab as d,bb as s,cb as c,cc as M,db as p,dc as ze,eb as u,ha as z,hb as D,ib as R,lb as y,ma as $,mb as m,nb as I,oa as $e,ob as O,pb as P,qb as V,rb as h,sb as v,vb as Ie,wa as Pe,xb as N,za as r}from"./chunk-G5NH3WQD.js";var it=["container"],at=["icon"],st=["closeicon"],rt=["*"],ct=(e,a)=>({showTransitionParams:e,hideTransitionParams:a}),lt=e=>({value:"visible()",params:e}),pt=e=>({closeCallback:e});function mt(e,a){e&1&&D(0)}function ut(e,a){if(e&1&&f(0,mt,1,0,"ng-container",7),e&2){let t=m(2);s("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function gt(e,a){if(e&1&&u(0,"i",3),e&2){let t=m(2);s("ngClass",t.icon)}}function bt(e,a){if(e&1&&u(0,"span",9),e&2){let t=m(3);s("ngClass",t.cx("text"))("innerHTML",t.text,Pe)}}function dt(e,a){if(e&1&&(c(0,"div"),f(1,bt,1,2,"span",8),p()),e&2){let t=m(2);r(),s("ngIf",!t.escape)}}function ft(e,a){if(e&1&&(c(0,"span",5),T(1),p()),e&2){let t=m(3);s("ngClass",t.cx("text")),r(),Oe(t.text)}}function ht(e,a){if(e&1&&f(0,ft,2,2,"span",10),e&2){let t=m(2);s("ngIf",t.escape&&t.text)}}function vt(e,a){e&1&&D(0)}function _t(e,a){if(e&1&&f(0,vt,1,0,"ng-container",11),e&2){let t=m(2);s("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",j(2,pt,t.close.bind(t)))}}function wt(e,a){if(e&1&&(c(0,"span",5),O(1),p()),e&2){let t=m(2);s("ngClass",t.cx("text"))}}function yt(e,a){if(e&1&&u(0,"i",13),e&2){let t=m(3);s("ngClass",t.closeIcon)}}function Ct(e,a){e&1&&D(0)}function Tt(e,a){if(e&1&&f(0,Ct,1,0,"ng-container",7),e&2){let t=m(3);s("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function xt(e,a){e&1&&u(0,"TimesIcon",14)}function $t(e,a){if(e&1){let t=R();c(0,"button",12),y("click",function(n){E(t);let i=m(2);return L(i.close(n))}),b(1,yt,1,1,"i",13),b(2,Tt,1,1,"ng-container"),b(3,xt,1,0,"TimesIcon",14),p()}if(e&2){let t=m(2);C("aria-label",t.closeAriaLabel),r(),d(t.closeIcon?1:-1),r(),d(t.closeIconTemplate||t._closeIconTemplate?2:-1),r(),d(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function Pt(e,a){if(e&1&&(c(0,"div",1)(1,"div",2),b(2,ut,1,1,"ng-container"),b(3,gt,1,1,"i",3),f(4,dt,2,1,"div",4)(5,ht,1,1,"ng-template",null,0,Ee),b(7,_t,1,4,"ng-container")(8,wt,2,1,"span",5),b(9,$t,4,4,"button",6),p()()),e&2){let t=Ie(6),o=m();s("ngClass",o.containerClass)("@messageAnimation",j(13,lt,Be(10,ct,o.showTransitionOptions,o.hideTransitionOptions))),C("aria-live","polite")("role","alert"),r(2),d(o.iconTemplate||o._iconTemplate?2:-1),r(),d(o.icon?3:-1),r(),s("ngIf",!o.escape)("ngIfElse",t),r(3),d(o.containerTemplate||o._containerTemplate?7:8),r(2),d(o.closable?9:-1)}}var Mt=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,kt={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ze=(()=>{class e extends se{name="message";theme=Mt;classes=kt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var It=(()=>{class e extends S{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new ke;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",o=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${o}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=z(!0);_componentStyle=w(Ze);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-message"]],contentQueries:function(o,n,i){if(o&1&&(P(i,it,4),P(i,at,4),P(i,st,4),P(i,ae,4)),o&2){let l;h(l=v())&&(n.containerTemplate=l.first),h(l=v())&&(n.iconTemplate=l.first),h(l=v())&&(n.closeIconTemplate=l.first),h(l=v())&&(n.templates=l)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",M],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",M],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[X([Ze]),k],ngContentSelectors:rt,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(o,n){o&1&&(I(),b(0,Pt,10,15,"div",1)),o&2&&d(n.visible()?0:-1)},dependencies:[_,te,Re,ne,qe,q,B],encapsulation:2,data:{animation:[Ve("messageAnimation",[fe(":enter",[de({opacity:0,transform:"translateY(-25%)"}),be("{{showTransitionParams}}")]),fe(":leave",[be("{{hideTransitionParams}}",de({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),et=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=J({type:e});static \u0275inj=G({imports:[It,B,B]})}return e})();var le=class e{activeTabValue=0;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-hero"]],inputs:{activeTabValue:"activeTabValue"},decls:6,vars:1,consts:[[1,"hero__welcome"],[3,"activeTabValue"]],template:function(t,o){t&1&&(c(0,"div",0)(1,"h2"),T(2,"Welcome to our movie app"),p(),c(3,"p"),T(4,"Millions of movies, TV shows and people to discover. Explore more"),p(),u(5,"app-search",1),p()),t&2&&(r(5),s("activeTabValue",o.activeTabValue))},dependencies:[Ge],styles:[".hero__welcome[_ngcontent-%COMP%]{background-color:#f3f1f1;padding:2.3125rem 2.9375rem}.hero__welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:2.1875rem}.hero__welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:.875rem;font-weight:400}"]})};var Ot=["previcon"],St=["nexticon"],Dt=["content"],Ft=["prevButton"],Bt=["nextButton"],Et=["inkbar"],Lt=["tabs"],U=["*"],zt=e=>({"p-tablist-viewport":e});function Rt(e,a){e&1&&D(0)}function Vt(e,a){if(e&1&&f(0,Rt,1,0,"ng-container",11),e&2){let t=m(2);s("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Nt(e,a){e&1&&u(0,"ChevronLeftIcon")}function Ht(e,a){if(e&1){let t=R();c(0,"button",10,3),y("click",function(){E(t);let n=m();return L(n.onPrevButtonClick())}),b(2,Vt,1,1,"ng-container")(3,Nt,1,0,"ChevronLeftIcon"),p()}if(e&2){let t=m();C("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),d(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Qt(e,a){e&1&&D(0)}function jt(e,a){if(e&1&&f(0,Qt,1,0,"ng-container",11),e&2){let t=m(2);s("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function At(e,a){e&1&&u(0,"ChevronRightIcon")}function Kt(e,a){if(e&1){let t=R();c(0,"button",12,4),y("click",function(){E(t);let n=m();return L(n.onNextButtonClick())}),b(2,jt,1,1,"ng-container")(3,At,1,0,"ChevronRightIcon"),p()}if(e&2){let t=m();C("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),d(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function qt(e,a){e&1&&O(0)}var Wt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Ut={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},tt=(()=>{class e extends se{name="tabs";theme=Wt;classes=Ut;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var pe=(()=>{class e extends S{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=w(Q(()=>H));isPrevButtonEnabled=z(!1);isNextButtonEnabled=z(!1);resizeObserver;showNavigators=x(()=>this.pcTabs.showNavigators());tabindex=x(()=>this.pcTabs.tabindex());scrollable=x(()=>this.pcTabs.scrollable());constructor(){super(),Le(()=>{this.pcTabs.value(),ie(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&ie(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,o=K(t),n=Math.abs(t.scrollLeft)-o,i=n<=0?0:n;t.scrollLeft=ve(t)?-1*i:i}onNextButtonClick(){let t=this.content.nativeElement,o=K(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+o,i=t.scrollWidth-o,l=n>=i?i:n;t.scrollLeft=ve(t)?-1*l:l}updateButtonState(){let t=this.content?.nativeElement,o=this.el?.nativeElement,{scrollWidth:n,offsetWidth:i}=t,l=Math.abs(t.scrollLeft),ge=K(t);this.isPrevButtonEnabled.set(l!==0),this.isNextButtonEnabled.set(o.offsetWidth>=i&&l!==n-ge)}updateInkBar(){let t=this.content?.nativeElement,o=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,i=He(t,'[data-pc-name="tab"][data-p-active="true"]');o&&(o.style.width=Ne(i)+"px",o.style.left=he(i).left-he(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,o=this.nextButton?.nativeElement;return[t,o].reduce((n,i)=>i?n+K(i):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=g({type:e,selectors:[["p-tablist"]],contentQueries:function(o,n,i){if(o&1&&(P(i,Ot,4),P(i,St,4),P(i,ae,4)),o&2){let l;h(l=v())&&(n.prevIconTemplate=l.first),h(l=v())&&(n.nextIconTemplate=l.first),h(l=v())&&(n.templates=l)}},viewQuery:function(o,n){if(o&1&&(V(Dt,5),V(Ft,5),V(Bt,5),V(Et,5),V(Lt,5)),o&2){let i;h(i=v())&&(n.content=i.first),h(i=v())&&(n.prevButton=i.first),h(i=v())&&(n.nextButton=i.first),h(i=v())&&(n.inkbar=i.first),h(i=v())&&(n.tabs=i.first)}},hostVars:5,hostBindings:function(o,n){o&2&&(C("data-pc-name","tablist"),N("p-tablist",!0)("p-component",!0))},features:[k],ngContentSelectors:U,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(o,n){if(o&1){let i=R();I(),b(0,Ht,4,4,"button",5),c(1,"div",6,0),y("scroll",function(ge){return E(i),L(n.onScroll(ge))}),c(3,"div",7,1),O(5),u(6,"span",8,2),p()(),b(8,Kt,4,4,"button",9)}o&2&&(d(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),r(),s("ngClass",j(4,zt,n.scrollable())),r(5),C("data-pc-section","inkbar"),r(2),d(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[_,te,ne,Ae,Ke,We,q,B],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e extends S{value=ee();disabled=F(!1,{transform:M});pcTabs=w(Q(()=>H));pcTabList=w(Q(()=>pe));el=w($e);ripple=x(()=>this.config.ripple());id=x(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=x(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=x(()=>_e(this.pcTabs.value(),this.value()));tabindex=x(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let o=this.findNextTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let o=this.findPrevTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let o=this.findFirstTab();this.changeFocusedTab(t,o),t.preventDefault()}onEndKey(t){let o=this.findLastTab();this.changeFocusedTab(t,o),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,o=!1){let n=o?t:t.nextElementSibling;return n?A(n,"data-p-disabled")||A(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,o=!1){let n=o?t:t.previousElementSibling;return n?A(n,"data-p-disabled")||A(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,o){Qe(o),this.scrollInView(o)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){ie(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(o,n){o&1&&y("focus",function(l){return n.onFocus(l)})("click",function(l){return n.onClick(l)})("keydown",function(l){return n.onKeyDown(l)}),o&2&&(C("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),N("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[Me([q]),k],ngContentSelectors:U,decls:1,vars:0,template:function(o,n){o&1&&(I(),O(0))},dependencies:[_,B],encapsulation:2,changeDetection:0})}return e})(),Te=(()=>{class e extends S{pcTabs=w(Q(()=>H));value=ee(void 0);id=x(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=x(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=x(()=>_e(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(o,n){o&2&&(C("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),N("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[k],ngContentSelectors:U,decls:1,vars:1,template:function(o,n){o&1&&(I(),b(0,qt,1,0)),o&2&&d(n.active()?0:-1)},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),xe=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(o,n){o&2&&(C("data-pc-name","tabpanels")("role","presentation"),N("p-tabpanels",!0)("p-component",!0))},features:[k],ngContentSelectors:U,decls:1,vars:0,template:function(o,n){o&1&&(I(),O(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e extends S{value=ee(void 0);scrollable=F(!1,{transform:M});lazy=F(!1,{transform:M});selectOnFocus=F(!1,{transform:M});showNavigators=F(!0,{transform:M});tabindex=F(0,{transform:ze});id=z(je("pn_id_"));_componentStyle=w(tt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(o,n){o&2&&(C("data-pc-name","tabs")("id",n.id()),N("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[X([tt]),k],ngContentSelectors:U,decls:1,vars:0,template:function(o,n){o&1&&(I(),O(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),ot=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=J({type:e});static \u0275inj=G({imports:[H,xe,Te,pe,Ce]})}return e})();var Gt=()=>[20];function Jt(e,a){if(e&1&&u(0,"app-movie-card",5),e&2){let t=a.$implicit;s("movie",t)}}var me=class e{movieService=w(ce);movies=this.movieService.movies;currentPage=1;totalRecords=200;rows=20;maxPages=10;ngOnInit(){this.movieService.getMovies(this.currentPage)}onPageChange(a){this.currentPage=a.page+1,this.movieService.getMovies(this.currentPage)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-movies"]],decls:7,vars:8,consts:[[1,"movies__tab"],[1,"cards__container"],[3,"movie",4,"ngFor","ngForOf"],[1,"pagination-container"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} movies",3,"onPageChange","rows","totalRecords","showCurrentPageReport","showPageLinks","showFirstLastIcon","rowsPerPageOptions"],[3,"movie"]],template:function(t,o){t&1&&(c(0,"div",0)(1,"h2"),T(2,"Now Playing"),p(),c(3,"div",1),f(4,Jt,1,1,"app-movie-card",2),p(),c(5,"div",3)(6,"p-paginator",4),y("onPageChange",function(i){return o.onPageChange(i)}),p()()()),t&2&&(r(4),s("ngForOf",o.movies()),r(2),s("rows",o.rows)("totalRecords",o.totalRecords)("showCurrentPageReport",!0)("showPageLinks",!0)("showFirstLastIcon",!0)("rowsPerPageOptions",Z(7,Gt)))},dependencies:[Je,re,_,oe],styles:[".movies__tab[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:3.875rem;margin-bottom:2rem}.movies__tab[_ngcontent-%COMP%]   .cards__container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem;margin-bottom:3.65rem}.movies__tab[_ngcontent-%COMP%]   .cards__container[_ngcontent-%COMP%]   app-movie-card[_ngcontent-%COMP%]{width:17%}.movies__tab[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2rem;margin-bottom:2rem}.movies__tab[_ngcontent-%COMP%]     .p-paginator-page-selected{background-color:#facc15!important;color:#000;border-radius:4px;font-weight:700}.movies__tab[_ngcontent-%COMP%]     .p-paginator-page-selected:hover{background-color:#facc15!important;color:#000;border-radius:4px;font-weight:700}"]})};var Xt=()=>[20];function Zt(e,a){if(e&1&&u(0,"app-tv-shows-card",5),e&2){let t=a.$implicit;s("show",t)}}var ue=class e{tvShowsService=w(ce);shows=this.tvShowsService.shows;currentPage=1;totalRecords=200;rows=20;maxPages=10;ngOnInit(){this.tvShowsService.getTVShows(this.currentPage)}onPageChange(a){this.currentPage=a.page+1,this.tvShowsService.getTVShows(this.currentPage)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-tv-shows"]],decls:7,vars:8,consts:[[1,"shows__tab"],[1,"cards__container"],[3,"show",4,"ngFor","ngForOf"],[1,"pagination-container"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} shows",3,"onPageChange","rows","totalRecords","showCurrentPageReport","showPageLinks","showFirstLastIcon","rowsPerPageOptions"],[3,"show"]],template:function(t,o){t&1&&(c(0,"div",0)(1,"h2"),T(2,"Popular"),p(),c(3,"div",1),f(4,Zt,1,1,"app-tv-shows-card",2),p(),c(5,"div",3)(6,"p-paginator",4),y("onPageChange",function(i){return o.onPageChange(i)}),p()()()),t&2&&(r(4),s("ngForOf",o.shows()),r(2),s("rows",o.rows)("totalRecords",o.totalRecords)("showCurrentPageReport",!0)("showPageLinks",!0)("showFirstLastIcon",!0)("rowsPerPageOptions",Z(7,Xt)))},dependencies:[Xe,_,oe,re],styles:[".shows__tab[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:3.875rem;margin-bottom:2rem}.shows__tab[_ngcontent-%COMP%]   .cards__container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1.5rem;margin-bottom:3.65rem}.shows__tab[_ngcontent-%COMP%]   .cards__container[_ngcontent-%COMP%]   app-tv-shows-card[_ngcontent-%COMP%]{width:17%}.shows__tab[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2rem;margin-bottom:2rem}.shows__tab[_ngcontent-%COMP%]     .p-paginator-page-selected{background-color:#facc15!important;color:#000;border-radius:4px;font-weight:700}.shows__tab[_ngcontent-%COMP%]     .p-paginator-page-selected:hover{background-color:#facc15!important;color:#000;border-radius:4px;font-weight:700}"]})};var nt=class e{activeTabValue=0;onTabChange(a){this.activeTabValue=a,console.log("Tab changed to:",this.activeTabValue)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-home"]],decls:13,vars:6,consts:[[1,"container"],[3,"activeTabValue"],[3,"valueChange","onChange","value"],[3,"value"]],template:function(t,o){t&1&&(c(0,"div",0),u(1,"app-hero",1),c(2,"p-tabs",2),Fe("valueChange",function(i){return De(o.activeTabValue,i)||(o.activeTabValue=i),i}),y("onChange",function(i){return o.onTabChange(i)}),c(3,"p-tablist")(4,"p-tab",3),T(5,"Movies"),p(),c(6,"p-tab",3),T(7,"TV Shows"),p()(),c(8,"p-tabpanels")(9,"p-tabpanel",3),u(10,"app-movies"),p(),c(11,"p-tabpanel",3),u(12,"app-tv-shows"),p()()()()),t&2&&(r(),s("activeTabValue",o.activeTabValue),r(),Se("value",o.activeTabValue),r(2),s("value",0),r(2),s("value",1),r(3),s("value",0),r(2),s("value",1))},dependencies:[Ue,et,_,Ye,le,ot,H,xe,Te,pe,Ce,me,ue],encapsulation:2})};export{nt as Home};
