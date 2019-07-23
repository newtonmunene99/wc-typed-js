/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TestWc {}
  interface TypedJsWc {
    'options': any;
    'strings': string;
  }
}

declare global {


  interface HTMLTestWcElement extends Components.TestWc, HTMLStencilElement {}
  var HTMLTestWcElement: {
    prototype: HTMLTestWcElement;
    new (): HTMLTestWcElement;
  };

  interface HTMLTypedJsWcElement extends Components.TypedJsWc, HTMLStencilElement {}
  var HTMLTypedJsWcElement: {
    prototype: HTMLTypedJsWcElement;
    new (): HTMLTypedJsWcElement;
  };
  interface HTMLElementTagNameMap {
    'test-wc': HTMLTestWcElement;
    'typed-js-wc': HTMLTypedJsWcElement;
  }
}

declare namespace LocalJSX {
  interface TestWc extends JSXBase.HTMLAttributes<HTMLTestWcElement> {}
  interface TypedJsWc extends JSXBase.HTMLAttributes<HTMLTypedJsWcElement> {
    'options'?: any;
    'strings'?: string;
  }

  interface IntrinsicElements {
    'test-wc': TestWc;
    'typed-js-wc': TypedJsWc;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


