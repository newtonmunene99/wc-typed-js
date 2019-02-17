/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface TypedJsWc {
    'options': any;
    'strings': string;
  }
  interface TypedJsWcAttributes extends StencilHTMLAttributes {
    'options'?: any;
    'strings'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'TypedJsWc': Components.TypedJsWc;
  }

  interface StencilIntrinsicElements {
    'typed-js-wc': Components.TypedJsWcAttributes;
  }


  interface HTMLTypedJsWcElement extends Components.TypedJsWc, HTMLStencilElement {}
  var HTMLTypedJsWcElement: {
    prototype: HTMLTypedJsWcElement;
    new (): HTMLTypedJsWcElement;
  };

  interface HTMLElementTagNameMap {
    'typed-js-wc': HTMLTypedJsWcElement
  }

  interface ElementTagNameMap {
    'typed-js-wc': HTMLTypedJsWcElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}