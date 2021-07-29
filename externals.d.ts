import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mixins: { [k: string]: FlattenSimpleInterpolation };
    bp: { [k: string]: string };
  }
}

declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.jpg";
declare module "*.woff";
declare module "*.woff2";
