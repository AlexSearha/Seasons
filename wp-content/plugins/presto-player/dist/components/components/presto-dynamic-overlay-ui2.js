import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{f as fitText}from"./fittext.js";const prestoDynamicOverlayUiCss=":host{display:block}.overlay-text{text-decoration:none;display:inline-block;user-select:none;line-height:1;opacity:var(--presto-dynamic-overlay-opacity, 1);font-size:var(--presto-dynamic-overlay-font-size, 18px);padding:var(--presto-dynamic-overlay-padding, 0.65em 0.85em);font-weight:var(--presto-dynamic-overlay-font-weight, 500);border-radius:var(--presto-dynamic-overlay-radius, 0.25em);background:var(--presto-dynamic-overlay-background, rgba(0, 0, 0, 0.8));color:var(--presto-dynamic-overlay-color, #fff);opacity:var(--presto-dynamic-overlay-opacity, 1);word-break:break-word}a.overlay-text{cursor:pointer}",PrestoDynamicOverlayUi=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.href=void 0,this.target=void 0,this.position="top-right"}closestElement(t,e){return e&&e!=document&&e!=window&&e.closest(t)||e&&this.closestElement(t,e.getRootNode().host)}componentDidLoad(){let t=this.closestElement("presto-player",this.el);fitText(this.text,3,{maxFontSize:16,minFontSize:10,container:t})}render(){const t=this.href?"a":"span";return h(t,{class:{"overlay-text":!0,"overlay--top-left":"top-left"===this.position,"overlay--top-right":"top-right"===this.position},href:this.href,target:this.target,part:"overlay-text",ref:t=>this.text=t},h("slot",null))}get el(){return this}static get style(){return prestoDynamicOverlayUiCss}},[1,"presto-dynamic-overlay-ui",{href:[1],target:[1],position:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["presto-dynamic-overlay-ui"].forEach((t=>{"presto-dynamic-overlay-ui"===t&&(customElements.get(t)||customElements.define(t,PrestoDynamicOverlayUi))}))}defineCustomElement();export{PrestoDynamicOverlayUi as P,defineCustomElement as d};