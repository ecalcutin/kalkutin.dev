import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mixins: { [k: string]: FlattenSimpleInterpolation };
    bp: { [k: string]: string };
  }
}
