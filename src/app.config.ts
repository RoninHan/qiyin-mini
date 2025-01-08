export default defineAppConfig({
  pages: [
    "pages/guitar/index",
    "pages/ai/index",
    "pages/song/index",
    "pages/rate/index",
    "pages/about/index",
    "pages/about/mydownload/index",
    "pages/about/hardware/index",
    "pages/about/cache/index",
  ],
  subPackages: [
    {
      root: "pages/follow",
      pages: ["index"],
    },
  ],
  lazyCodeLoading: "requiredComponents",
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },
});
