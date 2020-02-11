declare module "*.css" {
  interface Content {
    [key: string]: string;
  }
  const content: Content;
  export default content;
}
