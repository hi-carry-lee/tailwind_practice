/*
FEATURES:
1. use hamburger menu in small screen
2. the bottom of the image is darker, and it has a gradient color from bottom to top
3. hover on the image, it will has a opacity and it also will scale up;
4. in the small screen, we will use another colloction of images;
*/

import CreationsFlex from "./creations-flex";
// import CreationsGrid from "./creations-grid";
import Feature from "./feature";
import Footer from "./footer";
import Header from "./header";

/*
1. 如果需要使用响应式，即允许屏幕宽度进行缩放，那么宽度需要使用max-w，否则当宽度变小时，浏览器会缩放整个页面，导致字体，图片都变小；
2. 使用响应式宽度，一般是这两个组合：w-full max-w-[1200px]
3. header 里面，nav中，左边是logo图片，右边是menu list， 
  不断缩小screen，当logo和menu list接触时，再次缩小屏幕，则浏览器会压缩背景图和其他元素，让页面的右边出现空白，
  隐藏 menu list，则可以避免这个情况，让页面和内容同步的收缩；
*/

function LoopStudios() {
  return (
    <>
      {/* header section */}
      <Header />
      {/* feature section */}
      <Feature />
      {/* creation section */}
      <CreationsFlex />
      {/* <CreationsGrid /> */}
      {/* footer */}
      <Footer />
    </>
  );
}

export default LoopStudios;
