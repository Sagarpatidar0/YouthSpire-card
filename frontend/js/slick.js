function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./cards/vide0300.webp0000.webp
     ./cards/vide0300.webp0001.webp
     ./cards/vide0300.webp0002.webp
     ./cards/vide0300.webp0003.webp
     ./cards/vide0300.webp0004.webp
     ./cards/vide0300.webp0005.webp
     ./cards/vide0300.webp0006.webp
     ./cards/vide0300.webp0007.webp
     ./cards/vide0300.webp0008.webp
     ./cards/vide0300.webp0009.webp
     ./cards/vide0300.webp0010.webp
     ./cards/vide0300.webp0011.webp
     ./cards/vide0300.webp0012.webp
     ./cards/vide0300.webp0013.webp
     ./cards/vide0300.webp0014.webp
     ./cards/vide0300.webp0015.webp
     ./cards/vide0300.webp0016.webp
     ./cards/vide0300.webp0017.webp
     ./cards/vide0300.webp0018.webp
     ./cards/vide0300.webp0019.webp
     ./cards/vide0300.webp0020.webp
     ./cards/vide0300.webp0021.webp
     ./cards/vide0300.webp0022.webp
     ./cards/vide0300.webp0023.webp
     ./cards/vide0300.webp0024.webp
     ./cards/vide0300.webp0025.webp
     ./cards/vide0300.webp0026.webp
     ./cards/vide0300.webp0027.webp
     ./cards/vide0300.webp0028.webp
     ./cards/vide0300.webp0029.webp
     ./cards/vide0300.webp0030.webp
     ./cards/vide0300.webp0031.webp
     ./cards/vide0300.webp0032.webp
     ./cards/vide0300.webp0033.webp
     ./cards/vide0300.webp0034.webp
     ./cards/vide0300.webp0035.webp
     ./cards/vide0300.webp0036.webp
     ./cards/vide0300.webp0037.webp
     ./cards/vide0300.webp0038.webp
     ./cards/vide0300.webp0039.webp
     ./cards/vide0300.webp0040.webp
     ./cards/vide0300.webp0041.webp
     ./cards/vide0300.webp0042.webp
     ./cards/vide0300.webp0043.webp
     ./cards/vide0300.webp0044.webp
     ./cards/vide0300.webp0045.webp
     ./cards/vide0300.webp0046.webp
     ./cards/vide0300.webp0047.webp
     ./cards/vide0300.webp0048.webp
     ./cards/vide0300.webp0049.webp
     ./cards/vide0300.webp0050.webp
     ./cards/vide0300.webp0051.webp
     ./cards/vide0300.webp0052.webp
     ./cards/vide0300.webp0053.webp
     ./cards/vide0300.webp0054.webp
     ./cards/vide0300.webp0055.webp
     ./cards/vide0300.webp0056.webp
     ./cards/vide0300.webp0057.webp
     ./cards/vide0300.webp0058.webp
     ./cards/vide0300.webp0059.webp
     ./cards/vide0300.webp0060.webp
     ./cards/vide0300.webp0061.webp
     ./cards/vide0300.webp0062.webp
     ./cards/vide0300.webp0063.webp
     ./cards/vide0300.webp0064.webp
     ./cards/vide0300.webp0065.webp
     ./cards/vide0300.webp0066.webp
     ./cards/vide0300.webp0067.webp
     ./cards/vide0300.webp0068.webp
     ./cards/vide0300.webp0069.webp
     ./cards/vide0300.webp0070.webp
     ./cards/vide0300.webp0071.webp
     ./cards/vide0300.webp0072.webp
     ./cards/vide0300.webp0073.webp
     ./cards/vide0300.webp0074.webp
     ./cards/vide0300.webp0075.webp
     ./cards/vide0300.webp0076.webp
     ./cards/vide0300.webp0077.webp
     ./cards/vide0300.webp0078.webp
     ./cards/vide0300.webp0079.webp
     ./cards/vide0300.webp0080.webp
     ./cards/vide0300.webp0081.webp
     ./cards/vide0300.webp0082.webp
     ./cards/vide0300.webp0083.webp
     ./cards/vide0300.webp0084.webp
     ./cards/vide0300.webp0085.webp
     ./cards/vide0300.webp0086.webp
     ./cards/vide0300.webp0087.webp
     ./cards/vide0300.webp0088.webp
     ./cards/vide0300.webp0089.webp
     ./cards/vide0300.webp0090.webp
     ./cards/vide0300.webp0091.webp
     ./cards/vide0300.webp0092.webp
     ./cards/vide0300.webp0093.webp
     ./cards/vide0300.webp0094.webp
     ./cards/vide0300.webp0095.webp
     ./cards/vide0300.webp0096.webp
     ./cards/vide0300.webp0097.webp
     ./cards/vide0300.webp0098.webp
     ./cards/vide0300.webp0099.webp
     ./cards/vide0300.webp0100.webp
     ./cards/vide0300.webp0101.webp
     ./cards/vide0300.webp0102.webp
     ./cards/vide0300.webp0103.webp
     ./cards/vide0300.webp0104.webp
     ./cards/vide0300.webp0105.webp
     ./cards/vide0300.webp0106.webp
     ./cards/vide0300.webp0107.webp
     ./cards/vide0300.webp0108.webp
     ./cards/vide0300.webp0109.webp
     ./cards/vide0300.webp0110.webp
     ./cards/vide0300.webp0111.webp
     ./cards/vide0300.webp0112.webp
     ./cards/vide0300.webp0113.webp
     ./cards/vide0300.webp0114.webp
     ./cards/vide0300.webp0115.webp
     ./cards/vide0300.webp0116.webp
     ./cards/vide0300.webp0117.webp
     ./cards/vide0300.webp0118.webp
     ./cards/vide0300.webp0119.webp
     ./cards/vide0300.webp0120.webp
     ./cards/vide0300.webp0121.webp
     ./cards/vide0300.webp0122.webp
     ./cards/vide0300.webp0123.webp
     ./cards/vide0300.webp0124.webp
     ./cards/vide0300.webp0125.webp
     ./cards/vide0300.webp0126.webp
     ./cards/vide0300.webp0127.webp
     ./cards/vide0300.webp0128.webp
     ./cards/vide0300.webp0129.webp
     ./cards/vide0300.webp0130.webp
     ./cards/vide0300.webp0131.webp
     ./cards/vide0300.webp0132.webp
     ./cards/vide0300.webp0133.webp
     ./cards/vide0300.webp0134.webp
     ./cards/vide0300.webp0135.webp
     ./cards/vide0300.webp0136.webp
     ./cards/vide0300.webp0137.webp
     ./cards/vide0300.webp0138.webp
     ./cards/vide0300.webp0139.webp
     ./cards/vide0300.webp0140.webp
     ./cards/vide0300.webp0141.webp
     ./cards/vide0300.webp0142.webp
     ./cards/vide0300.webp0143.webp
     ./cards/vide0300.webp0144.webp
     ./cards/vide0300.webp0145.webp
     ./cards/vide0300.webp0146.webp
     ./cards/vide0300.webp0147.webp
     ./cards/vide0300.webp0148.webp
     ./cards/vide0300.webp0149.webp
     ./cards/vide0300.webp0150.webp
     ./cards/vide0300.webp0151.webp
     ./cards/vide0300.webp0152.webp
     ./cards/vide0300.webp0153.webp
     ./cards/vide0300.webp0154.webp
     ./cards/vide0300.webp0155.webp
     ./cards/vide0300.webp0156.webp
     ./cards/vide0300.webp0157.webp
     ./cards/vide0300.webp0158.webp
     ./cards/vide0300.webp0159.webp
     ./cards/vide0300.webp0160.webp
     ./cards/vide0300.webp0161.webp
     ./cards/vide0300.webp0162.webp
     ./cards/vide0300.webp0163.webp
     ./cards/vide0300.webp0164.webp
     ./cards/vide0300.webp0165.webp
     ./cards/vide0300.webp0166.webp
     ./cards/vide0300.webp0167.webp
     ./cards/vide0300.webp0168.webp
     ./cards/vide0300.webp0169.webp
     ./cards/vide0300.webp0170.webp
     ./cards/vide0300.webp0171.webp
     ./cards/vide0300.webp0172.webp
     ./cards/vide0300.webp0173.webp
     ./cards/vide0300.webp0174.webp
     ./cards/vide0300.webp0175.webp
     ./cards/vide0300.webp0176.webp
     ./cards/vide0300.webp0177.webp
     ./cards/vide0300.webp0178.webp
     ./cards/vide0300.webp0179.webp
     ./cards/vide0300.webp0180.webp
     ./cards/vide0300.webp0181.webp
     ./cards/vide0300.webp0182.webp
     ./cards/vide0300.webp0183.webp
     ./cards/vide0300.webp0184.webp
     ./cards/vide0300.webp0185.webp
     ./cards/vide0300.webp0186.webp
     ./cards/vide0300.webp0187.webp
     ./cards/vide0300.webp0188.webp
     ./cards/vide0300.webp0189.webp
     ./cards/vide0300.webp0190.webp
     ./cards/vide0300.webp0191.webp
     ./cards/vide0300.webp0192.webp
     ./cards/vide0300.webp0193.webp
     ./cards/vide0300.webp0194.webp
     ./cards/vide0300.webp0195.webp
     ./cards/vide0300.webp0196.webp
     ./cards/vide0300.webp0197.webp
     ./cards/vide0300.webp0198.webp
     ./cards/vide0300.webp0199.webp
     ./cards/vide0300.webp0200.webp
     ./cards/vide0300.webp0201.webp
     ./cards/vide0300.webp0201.webp
     ./cards/vide0300.webp0202.webp
     ./cards/vide0300.webp0203.webp
     ./cards/vide0300.webp0204.webp
     ./cards/vide0300.webp0205.webp
     ./cards/vide0300.webp0206.webp
     ./cards/vide0300.webp0207.webp
     ./cards/vide0300.webp0208.webp
     ./cards/vide0300.webp0209.webp
     ./cards/vide0300.webp0210.webp
     ./cards/vide0300.webp0211.webp
     ./cards/vide0300.webp0212.webp
     ./cards/vide0300.webp0213.webp
     ./cards/vide0300.webp0214.webp
     ./cards/vide0300.webp0215.webp
     ./cards/vide0300.webp0216.webp
     ./cards/vide0300.webp0217.webp
     ./cards/vide0300.webp0218.webp
     ./cards/vide0300.webp0219.webp
     ./cards/vide0300.webp0220.webp
     ./cards/vide0300.webp0221.webp
     ./cards/vide0300.webp0222.webp
     ./cards/vide0300.webp0223.webp
     ./cards/vide0300.webp0224.webp
     ./cards/vide0300.webp0225.webp
     ./cards/vide0300.webp0226.webp
     ./cards/vide0300.webp0227.webp
     ./cards/vide0300.webp0228.webp
     ./cards/vide0300.webp0229.webp
     ./cards/vide0300.webp0230.webp
     ./cards/vide0300.webp0231.webp
     ./cards/vide0300.webp0232.webp
     ./cards/vide0300.webp0233.webp
     ./cards/vide0300.webp0234.webp
     ./cards/vide0300.webp0235.webp
     ./cards/vide0300.webp0236.webp
     ./cards/vide0300.webp0237.webp
     ./cards/vide0300.webp0238.webp
     ./cards/vide0300.webp0239.webp
     ./cards/vide0300.webp0240.webp
     ./cards/vide0300.webp0241.webp
     ./cards/vide0300.webp0242.webp
     ./cards/vide0300.webp0243.webp
     ./cards/vide0300.webp0244.webp
     ./cards/vide0300.webp0245.webp
     ./cards/vide0300.webp0246.webp
     ./cards/vide0300.webp0247.webp
     ./cards/vide0300.webp0248.webp
     ./cards/vide0300.webp0249.webp
     ./cards/vide0300.webp0250.webp
     ./cards/vide0300.webp0251.webp
     ./cards/vide0300.webp0252.webp
     ./cards/vide0300.webp0253.webp
     ./cards/vide0300.webp0254.webp
     ./cards/vide0300.webp0255.webp
     ./cards/vide0300.webp0256.webp
     ./cards/vide0300.webp0257.webp
     ./cards/vide0300.webp0258.webp
     ./cards/vide0300.webp0259.webp
     ./cards/vide0300.webp0260.webp
     ./cards/vide0300.webp0261.webp
     ./cards/vide0300.webp0262.webp
     ./cards/vide0300.webp0263.webp
     ./cards/vide0300.webp0264.webp
     ./cards/vide0300.webp0265.webp
     ./cards/vide0300.webp0266.webp
     ./cards/vide0300.webp0267.webp
     ./cards/vide0300.webp0268.webp
     ./cards/vide0300.webp0269.webp
     ./cards/vide0300.webp0270.webp
     ./cards/vide0300.webp0271.webp
     ./cards/vide0300.webp0272.webp
     ./cards/vide0300.webp0273.webp
     ./cards/vide0300.webp0274.webp
     ./cards/vide0300.webp0275.webp
     ./cards/vide0300.webp0276.webp
     ./cards/vide0300.webp0277.webp
     ./cards/vide0300.webp0278.webp
     ./cards/vide0300.webp0279.webp
     ./cards/vide0300.webp0280.webp
     ./cards/vide0300.webp0281.webp
     ./cards/vide0300.webp0282.webp
     ./cards/vide0300.webp0283.webp
     ./cards/vide0300.webp0284.webp
     ./cards/vide0300.webp0285.webp
     ./cards/vide0300.webp0286.webp
     ./cards/vide0300.webp0287.webp
     ./cards/vide0300.webp0288.webp
     ./cards/vide0300.webp0289.webp
     ./cards/vide0300.webp0290.webp
     ./cards/vide0300.webp0291.webp
     ./cards/vide0300.webp0292.webp
     ./cards/vide0300.webp0293.webp
     ./cards/vide0300.webp0294.webp
     ./cards/vide0300.webp0295.webp
     ./cards/vide0300.webp0296.webp
     ./cards/vide0300.webp0297.webp
     ./cards/vide0300.webp0298.webp
     ./cards/vide0300.webp0299.webp
     ./cards/vide0300.webp0300.webp
      `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}


function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio)-0.35;
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
  markers: false,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`100% top`,
    pin:true,
  markers: false,
  scroller:`#main`
  }
})
// gsap.to("#page-test",{
//   scrollTrigger:{
//     trigger:`#page-test`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`,
//   markers: true,
// }
// })

gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`,
  markers: false,

  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`,
  markers: false,

  }
})


const mintNowContainer = document.querySelector('.mint-now-container');
ScrollTrigger.create({
  trigger: "#page>canvas",
  scroller: `#main`,
  start: "top top",
  end: "610% top",
  onUpdate: ({ progress }) => {
    mintNowContainer.style.opacity = progress > 0 && progress < 1 ? 1 : 0;
  },
});



// gsap.to("#page4",{
//   scrollTrigger:{
//     trigger:`#page4`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })
// gsap.to("#page5",{
//   scrollTrigger:{
//     trigger:`#page5`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })
// gsap.to("#page6",{
//   scrollTrigger:{
//     trigger:`#page6`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })

// gsap.to("#page7",{
//   scrollTrigger:{
//     trigger:`#page7`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })
// gsap.to("#page8",{
//   scrollTrigger:{
//     trigger:`#page8`,
//     start:`top top`,
//     end:`bottom top`,
//     pin:true,
//     scroller:`#main`
//   }
// })


// document.querySelectorAll("nav-item").forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     gsap.to(window, {duration: 1, scrollTo:{y:"#page" + (index + 1), offsetY:70}});
//   });
// });


var string =document.getElementById("str")
var str = string.innerText.split("")
string.innerText="";

(function animate(){
str.length > 0 ? string.innerHTML += str.shift(): clearTimeout(running);
var running = setTimeout(animate, 10);
})();
