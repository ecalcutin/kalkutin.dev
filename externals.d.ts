declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.jpg";
declare module "*.woff";
declare module "*.woff2";
