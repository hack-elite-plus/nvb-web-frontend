/// <reference types="react-scripts" />

// https://stackoverflow.com/a/65851792/15084645
// fix video importing error -  can't resolve ./assets/video.mp4 error

declare module "*.mp4" {
  const src: string;
  export default src;
}
